import { Fragment } from "react";
import Link from "next/link";
import { dcVals } from "@/components/site/dc";
import ProjectsLogic from "@/components/site/pages/Projects/logic";

// Text colour per tile background. The Work page pairs some brand colours for decoration (e.g. yellow on red);
// here the text must stay readable, so red tiles use the site's deeper accessible red with white text.
const TILE = {
  "#ff2d2d": { bg: "#e11d1d", fg: "#ffffff" },
  "#2f5bff": { bg: "#2f5bff", fg: "#ffffff" },
  "#ffe14d": { bg: "#ffe14d", fg: "#111111" },
  "#ffffff": { bg: "#ffffff", fg: "#111111" },
  "#f4f4f6": { bg: "#f4f4f6", fg: "#111111" },
};

// "[Industry]"-style values are unfinished copy in the Work page data; never show them.
const known = (v) => v && !/^\[.*\]$/.test(String(v).trim());

// Who we work with section. Server component. Clients and stories come from the Work page's data,
// so this wall always matches the case studies.
export default function Clients() {
  const clients = dcVals(ProjectsLogic).items;
  return (
    <>
      <section id="clients" style={{ padding: "0 0 112px" }}>
        <div className="wrap">
          <div className="sec-hd">
            <div>
              <div className="lbl eb rv">(04) Who we work with</div>
              <h2 className="h2x">
                <span className="mask rvm">
                  <span>From a 1959 dance legacy</span>
                </span>
                <span className="mask rvm">
                  <span>to a noodle maker.</span>
                </span>
              </h2>
            </div>
            <p className="rv muted" style={{ margin: "0", maxWidth: "360px" }}>
              Manufacturers, an infrastructure firm, consumer brands and a dance institution founded in 1959. Different
              businesses, one goal: more of the right customers.{" "}
              <span className="hand hover-only" style={{ fontSize: "22px", color: "#111111" }}>
                (hover a name)
              </span>
            </p>
          </div>
          <ul className="cl-grid">
            {clients.map((c) => {
              const t = TILE[c.bg] || TILE["#ffffff"];
              const industry = known(c.industry) ? c.industry : c.tags.join(" · ");
              return (
                <Fragment key={c.client}>
                  <li className="rv">
                    <Link
                      className="cl-tile"
                      href="/projects"
                      style={{
                        background: t.bg,
                        color: t.fg,
                        boxShadow: t.bg === "#ffffff" ? "inset 0 0 0 1.5px #ececf1" : "none",
                      }}
                    >
                      <span className="lbl lbl-l">{industry}</span>
                      <span className="disp cl-name">{c.client}</span>
                      <span className="cl-story">
                        {c.hasMetric && (
                          <span className="cl-metric disp">
                            {c.metric} <span className="lbl lbl-l">{c.metricLabel}</span>
                          </span>
                        )}
                        <span>{c.title}</span>
                      </span>
                    </Link>
                  </li>
                </Fragment>
              );
            })}
          </ul>
          <div className="rv" style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "36px" }}>
            <Link className="btn btn-o" href="/projects">
              Read the case studies
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
