export const WHATSAPP_NUMBER = "917250204488";

function labelFor(el) {
  const label = el.closest("label");
  if (label) {
    let text = "";
    label.childNodes.forEach((n) => {
      if (n.nodeType === 3) text += n.textContent;
    });
    text = text.trim();
    if (text) return text;
  }
  return el.getAttribute("aria-label") || el.name || el.placeholder || "";
}

const EXTRA = [
  ["svcs", "Services"],
  ["bud", "Budget"],
  ["when", "Timeline"],
  ["doc", "Doctors"],
  ["docs", "Doctors"],
  ["clinic", "Clinic"],
];

/** Build a WhatsApp message from a form (and any chip selections kept in state) and open it. */
export function sendToWhatsApp(form, state) {
  const lines = ["Hi Applotie, I'd like to talk about a project.", ""];
  const els = form.querySelectorAll("input, select, textarea");
  els.forEach((el) => {
    if (el.type === "submit" || el.type === "button" || el.type === "range") return;
    if (el.type === "checkbox") {
      if (labelFor(el).toLowerCase().includes("whatsapp")) {
        lines.push(`Preferred reply: ${el.checked ? "WhatsApp" : "Phone call"}`);
      }
      return;
    }
    const v = String(el.value || "").trim();
    if (!v) return;
    lines.push(`${labelFor(el)}: ${v}`);
  });
  EXTRA.forEach(([key, label]) => {
    const v = state[key];
    if (v == null || v === "" || (Array.isArray(v) && !v.length)) return;
    if (key === "clinic" && lines.some((l) => l.startsWith("Clinic name"))) return;
    lines.push(`${label}: ${Array.isArray(v) ? v.join(", ") : v}`);
  });
  lines.push("", `Sent from ${window.location.pathname}`);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
  window.open(url, "_blank", "noopener,noreferrer");
}
