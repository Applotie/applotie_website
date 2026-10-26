#!/usr/bin/env node
// Manage local admin credentials in .env.local without ever printing secrets.
//
//   npm run admin:set-password    prompt (hidden) for a new password, store only its scrypt hash
//   npm run admin:rotate-secret   generate a new random SESSION_SECRET (signs out all sessions)
//   npm run admin:migrate         convert a plaintext ADMIN_PASSWORD to ADMIN_PASSWORD_HASH,
//                                 and move ADMIN_SESSION_SECRET to a freshly generated SESSION_SECRET
//
// Other lines in .env.local are left untouched.
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { randomBytes } from "node:crypto";
import { createInterface } from "node:readline";
import { resolve } from "node:path";
import { hashPassword, verifyPassword } from "../lib/password.js";

const ENV_PATH = resolve(process.cwd(), ".env.local");

function readEnv() {
  return existsSync(ENV_PATH) ? readFileSync(ENV_PATH, "utf8").split(/\r?\n/) : [];
}

function getVar(lines, name) {
  for (const line of lines) {
    const m = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)$/);
    if (m && m[1] === name) return m[2].trim().replace(/^(["'])(.*)\1$/, "$2");
  }
  return undefined;
}

function setVar(lines, name, value) {
  const line = `${name}="${value}"`;
  const i = lines.findIndex((l) => new RegExp(`^\\s*${name}\\s*=`).test(l));
  if (i >= 0) lines[i] = line;
  else {
    while (lines.length && lines[lines.length - 1] === "") lines.pop();
    lines.push(line, "");
  }
}

function removeVar(lines, name) {
  return lines.filter((l) => !new RegExp(`^\\s*${name}\\s*=`).test(l));
}

function writeEnv(lines) {
  writeFileSync(ENV_PATH, lines.join("\n").replace(/\n*$/, "\n"), { encoding: "utf8" });
}

const newSecret = () => randomBytes(48).toString("base64url");

function prompt(question, hidden) {
  return new Promise((done) => {
    const rl = createInterface({ input: process.stdin, output: process.stdout, terminal: process.stdin.isTTY });
    if (hidden && process.stdin.isTTY) {
      rl._writeToOutput = (s) => {
        if (s.includes(question)) process.stdout.write(s);
      };
    }
    rl.question(question, (answer) => {
      rl.close();
      if (hidden && process.stdin.isTTY) process.stdout.write("\n");
      done(answer);
    });
  });
}

async function setPassword() {
  const first = await prompt("New admin password (min 12 characters): ", true);
  if (first.length < 12) throw new Error("Password must be at least 12 characters.");
  const second = await prompt("Repeat password: ", true);
  if (first !== second) throw new Error("Passwords do not match.");

  let lines = readEnv();
  setVar(lines, "ADMIN_PASSWORD_HASH", await hashPassword(first));
  lines = removeVar(lines, "ADMIN_PASSWORD");
  if (!getVar(lines, "ADMIN_USERNAME") && !getVar(lines, "ADMIN_EMAIL")) {
    setVar(lines, "ADMIN_USERNAME", (await prompt("Admin username: ", false)).trim());
  }
  writeEnv(lines);
  console.log("Saved ADMIN_PASSWORD_HASH to .env.local (the password itself is not stored).");
}

function rotateSecret() {
  let lines = readEnv();
  setVar(lines, "SESSION_SECRET", newSecret());
  lines = removeVar(lines, "ADMIN_SESSION_SECRET");
  writeEnv(lines);
  console.log("Saved a new random SESSION_SECRET to .env.local. Existing admin sessions are now invalid.");
}

async function migrate() {
  let lines = readEnv();
  const plain = getVar(lines, "ADMIN_PASSWORD");
  if (plain) {
    const hash = await hashPassword(plain);
    if (!(await verifyPassword(plain, hash))) throw new Error("Hash verification failed; .env.local was not changed.");
    setVar(lines, "ADMIN_PASSWORD_HASH", hash);
    lines = removeVar(lines, "ADMIN_PASSWORD");
    console.log("Replaced plaintext ADMIN_PASSWORD with ADMIN_PASSWORD_HASH (same password).");
  } else if (getVar(lines, "ADMIN_PASSWORD_HASH")) {
    console.log("ADMIN_PASSWORD_HASH already set; password unchanged.");
  } else {
    console.log("No admin password found. Run: npm run admin:set-password");
  }

  if (!getVar(lines, "SESSION_SECRET")) {
    setVar(lines, "SESSION_SECRET", newSecret());
    lines = removeVar(lines, "ADMIN_SESSION_SECRET");
    console.log("Generated a new random SESSION_SECRET (replaces ADMIN_SESSION_SECRET).");
  }
  writeEnv(lines);
}

const command = process.argv[2];
const run = { "set-password": setPassword, "rotate-secret": rotateSecret, migrate }[command];
if (!run) {
  console.error("Usage: node scripts/admin-credentials.mjs <set-password|rotate-secret|migrate>");
  process.exit(1);
}
Promise.resolve(run()).catch((error) => {
  console.error(error.message);
  process.exit(1);
});
