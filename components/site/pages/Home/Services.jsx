"use client";

import { Fragment } from "react";
import Link from "next/link";
import { useDC } from "@/components/site/useDC";
import Logic from "./logic";

// Services section. Client component (interactive).
export default function Services() {
  const { services } = useDC(Logic);
  return (
    <>
      <section id="services" style={{ padding: "112px 0 72px" }}>
        <div className="wrap">
          <div className="sec-hd">
            <div>
              <div className="lbl eb rv">(01) What we do</div>
              <h2 className="h2x">
                <span className="mask rvm">
                  <span>One team to build</span>
                </span>
                <span className="mask rvm">
                  <span>and grow you online.</span>
                </span>
              </h2>
            </div>
            <p className="rv muted" style={{ margin: "0", maxWidth: "340px" }}>
              Six services, one team in Patna. Hire us for one or all six. They work best together, but each stands on
              its own.
            </p>
          </div>
          <div style={{ borderBottom: "1px solid #ececf1" }}>
            {services.map((v, i_v) => (
              <Fragment key={i_v}>
                <div className="svc rv" onMouseEnter={v.hover}>
                  <button type="button" className="svc-h" aria-expanded={v.exp} onClick={v.hover}>
                    <span className="lbl lbl-l muted">{v.num}</span>
                    <span
                      className="disp svc-t"
                      style={{
                        fontSize: "clamp(32px, 4.4vw, 60px)",
                        lineHeight: "1.02",
                        fontWeight: "800",
                        letterSpacing: "-0.03em",
                        transform: `translateX(${v.tx}px)`,
                        color: v.col,
                      }}
                    >
                      {v.name}
                    </span>
                    <span className="svc-tags lbl lbl-l muted" style={{ textAlign: "right" }}>
                      {v.tags}
                    </span>
                  </button>
                  <div className="xpand" style={{ gridTemplateRows: v.rows }}>
                    <div>
                      <div className="svc-body">
                        <span className="svc-gap"></span>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "22px",
                            justifyContent: "space-between",
                            paddingTop: "4px",
                          }}
                        >
                          <p className="big-p" style={{ maxWidth: "440px" }}>
                            {v.desc}
                          </p>
                          <Link className="ul" href={v.href} style={{ alignSelf: "flex-start" }}>
                            Explore {v.short}{" "}
                            <svg
                              className="ar"
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              aria-hidden="true"
                            >
                              <path d="M7 7h10v10"></path>
                              <path d="M7 17 17 7"></path>
                            </svg>
                          </Link>
                        </div>
                        <div
                          aria-hidden="true"
                          style={{
                            background: v.bg,
                            borderRadius: "22px",
                            height: "240px",
                            display: "grid",
                            placeItems: "center",
                            padding: "24px",
                            overflow: "hidden",
                          }}
                        >
                          {v.isWeb && (
                            <>
                              <div
                                style={{
                                  width: "280px",
                                  background: "#ffffff",
                                  borderRadius: "14px",
                                  padding: "14px",
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "10px",
                                }}
                              >
                                <div style={{ display: "flex", gap: "5px" }}>
                                  <span
                                    style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ececf1" }}
                                  ></span>
                                  <span
                                    style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ececf1" }}
                                  ></span>
                                  <span
                                    style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ececf1" }}
                                  ></span>
                                </div>
                                <div
                                  className="bb"
                                  style={{ height: "52px", borderRadius: "10px", background: "#2f5bff" }}
                                ></div>
                                <div
                                  className="bb"
                                  style={{
                                    height: "8px",
                                    width: "80%",
                                    borderRadius: "4px",
                                    background: "#ececf1",
                                    animationDelay: ".15s",
                                  }}
                                ></div>
                                <div
                                  className="bb"
                                  style={{
                                    height: "8px",
                                    width: "60%",
                                    borderRadius: "4px",
                                    background: "#ececf1",
                                    animationDelay: ".25s",
                                  }}
                                ></div>
                                <div style={{ display: "flex", gap: "8px" }}>
                                  <div
                                    className="bb"
                                    style={{
                                      flex: "1",
                                      height: "44px",
                                      borderRadius: "10px",
                                      background: "#4a74ff",
                                      animationDelay: ".4s",
                                    }}
                                  ></div>
                                  <div
                                    className="bb"
                                    style={{
                                      flex: "1",
                                      height: "44px",
                                      borderRadius: "10px",
                                      background: "#ececf1",
                                      animationDelay: ".5s",
                                    }}
                                  ></div>
                                </div>
                              </div>
                            </>
                          )}
                          {v.isApp && (
                            <>
                              <div
                                style={{
                                  width: "112px",
                                  height: "196px",
                                  borderRadius: "24px",
                                  background: "#2f5bff",
                                  padding: "8px",
                                  overflow: "hidden",
                                }}
                              >
                                <div
                                  style={{
                                    height: "100%",
                                    borderRadius: "17px",
                                    background: "#ffffff",
                                    overflow: "hidden",
                                    padding: "8px",
                                  }}
                                >
                                  <div className="ps" style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                                    <div style={{ height: "54px", borderRadius: "10px", background: "#ff2d2d" }}></div>
                                    <div style={{ height: "54px", borderRadius: "10px", background: "#ececf1" }}></div>
                                    <div style={{ height: "54px", borderRadius: "10px", background: "#4a74ff" }}></div>
                                    <div style={{ height: "54px", borderRadius: "10px", background: "#ececf1" }}></div>
                                    <div style={{ height: "54px", borderRadius: "10px", background: "#ff2d2d" }}></div>
                                  </div>
                                </div>
                              </div>
                            </>
                          )}
                          {v.isSeo && (
                            <>
                              <div
                                style={{
                                  width: "280px",
                                  display: "flex",
                                  alignItems: "flex-end",
                                  gap: "10px",
                                  height: "150px",
                                  borderBottom: "1.5px solid #111111",
                                }}
                              >
                                <div
                                  className="bar"
                                  style={{
                                    flex: "1",
                                    height: "28%",
                                    borderRadius: "8px 8px 0 0",
                                    background: "#ffffff",
                                  }}
                                ></div>
                                <div
                                  className="bar"
                                  style={{
                                    flex: "1",
                                    height: "44%",
                                    borderRadius: "8px 8px 0 0",
                                    background: "#ffffff",
                                    animationDelay: ".1s",
                                  }}
                                ></div>
                                <div
                                  className="bar"
                                  style={{
                                    flex: "1",
                                    height: "62%",
                                    borderRadius: "8px 8px 0 0",
                                    background: "#4a74ff",
                                    animationDelay: ".2s",
                                  }}
                                ></div>
                                <div
                                  className="bar"
                                  style={{
                                    flex: "1",
                                    height: "80%",
                                    borderRadius: "8px 8px 0 0",
                                    background: "#4a74ff",
                                    animationDelay: ".3s",
                                  }}
                                ></div>
                                <div
                                  className="bar"
                                  style={{
                                    flex: "1",
                                    height: "100%",
                                    borderRadius: "8px 8px 0 0",
                                    background: "#ff2d2d",
                                    animationDelay: ".4s",
                                  }}
                                ></div>
                              </div>
                            </>
                          )}
                          {v.isAds && (
                            <>
                              <div
                                style={{
                                  width: "290px",
                                  background: "#ffffff",
                                  color: "#111111",
                                  borderRadius: "14px",
                                  padding: "18px",
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "14px",
                                }}
                              >
                                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                                  <div
                                    style={{
                                      display: "flex",
                                      justifyContent: "space-between",
                                      fontSize: "13px",
                                      fontWeight: "600",
                                    }}
                                  >
                                    <span>Google Ads</span>
                                    <span>Leads</span>
                                  </div>
                                  <div
                                    style={{
                                      height: "10px",
                                      borderRadius: "999px",
                                      background: "#ececf1",
                                      overflow: "hidden",
                                    }}
                                  >
                                    <div
                                      className="fill"
                                      style={{
                                        height: "100%",
                                        width: "82%",
                                        borderRadius: "999px",
                                        background: "#ff2d2d",
                                      }}
                                    ></div>
                                  </div>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                                  <div
                                    style={{
                                      display: "flex",
                                      justifyContent: "space-between",
                                      fontSize: "13px",
                                      fontWeight: "600",
                                    }}
                                  >
                                    <span>Meta Ads</span>
                                    <span>Leads</span>
                                  </div>
                                  <div
                                    style={{
                                      height: "10px",
                                      borderRadius: "999px",
                                      background: "#ececf1",
                                      overflow: "hidden",
                                    }}
                                  >
                                    <div
                                      className="fill"
                                      style={{
                                        height: "100%",
                                        width: "64%",
                                        borderRadius: "999px",
                                        background: "#4a74ff",
                                        animationDelay: ".2s",
                                      }}
                                    ></div>
                                  </div>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                                  <div
                                    style={{
                                      display: "flex",
                                      justifyContent: "space-between",
                                      fontSize: "13px",
                                      fontWeight: "600",
                                    }}
                                  >
                                    <span>Landing page</span>
                                    <span>Conversion</span>
                                  </div>
                                  <div
                                    style={{
                                      height: "10px",
                                      borderRadius: "999px",
                                      background: "#ececf1",
                                      overflow: "hidden",
                                    }}
                                  >
                                    <div
                                      className="fill"
                                      style={{
                                        height: "100%",
                                        width: "48%",
                                        borderRadius: "999px",
                                        background: "#2f5bff",
                                        animationDelay: ".4s",
                                      }}
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            </>
                          )}
                          {v.isRep && (
                            <>
                              <div
                                style={{
                                  width: "290px",
                                  background: "#ffffff",
                                  color: "#111111",
                                  borderRadius: "16px",
                                  padding: "20px",
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "14px",
                                }}
                              >
                                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                  <span
                                    className="disp"
                                    style={{ fontSize: "46px", lineHeight: "1", fontWeight: "800" }}
                                  >
                                    4.8
                                  </span>
                                  <span className="stars">
                                    <span>★</span>
                                    <span style={{ animationDelay: ".08s" }}>★</span>
                                    <span style={{ animationDelay: ".16s" }}>★</span>
                                    <span style={{ animationDelay: ".24s" }}>★</span>
                                    <span style={{ animationDelay: ".32s" }}>★</span>
                                  </span>
                                </div>
                                <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                                  <span
                                    style={{
                                      width: "28px",
                                      height: "28px",
                                      borderRadius: "50%",
                                      background: "#4a74ff",
                                      flex: "none",
                                    }}
                                  ></span>
                                  <div style={{ flex: "1", display: "flex", flexDirection: "column", gap: "5px" }}>
                                    <div
                                      style={{
                                        height: "7px",
                                        width: "80%",
                                        borderRadius: "4px",
                                        background: "#2f5bff",
                                      }}
                                    ></div>
                                    <div
                                      style={{
                                        height: "7px",
                                        width: "55%",
                                        borderRadius: "4px",
                                        background: "#ececf1",
                                      }}
                                    ></div>
                                  </div>
                                </div>
                                <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                                  <span
                                    style={{
                                      width: "28px",
                                      height: "28px",
                                      borderRadius: "50%",
                                      background: "#ff2d2d",
                                      flex: "none",
                                    }}
                                  ></span>
                                  <div style={{ flex: "1", display: "flex", flexDirection: "column", gap: "5px" }}>
                                    <div
                                      style={{
                                        height: "7px",
                                        width: "70%",
                                        borderRadius: "4px",
                                        background: "#2f5bff",
                                      }}
                                    ></div>
                                    <div
                                      style={{
                                        height: "7px",
                                        width: "60%",
                                        borderRadius: "4px",
                                        background: "#ececf1",
                                      }}
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            </>
                          )}
                          {v.isBrand && (
                            <>
                              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 92px)", gap: "12px" }}>
                                <div
                                  className="floaty"
                                  style={{ height: "92px", borderRadius: "26px", background: "#2f5bff" }}
                                ></div>
                                <div
                                  className="floaty"
                                  style={{
                                    height: "92px",
                                    borderRadius: "50%",
                                    background: "#ffe14d",
                                    animationDelay: "-1.6s",
                                  }}
                                ></div>
                                <div
                                  className="floaty"
                                  style={{
                                    gridColumn: "span 2",
                                    height: "56px",
                                    borderRadius: "999px",
                                    background: "#ffffff",
                                    animationDelay: "-3.2s",
                                  }}
                                ></div>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
