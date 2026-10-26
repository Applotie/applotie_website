"use client";

import { useEffect, useReducer, useState } from "react";
import { sendToWhatsApp } from "./whatsapp";

/**
 * Runs a page logic class (see ./dc.js) as a React hook and returns its template values.
 * Each interactive section owns its own instance, so sections stay independent client islands.
 */
export function useDC(Logic, props) {
  const [, rerender] = useReducer((x) => x + 1, 0);
  const [inst] = useState(() => new Logic(props || {}));
  if (props) inst.props = props;

  useEffect(() => {
    inst._update = rerender;
    inst.siteMount = () => {};
    inst.siteUnmount = () => {};
    inst.setState({ now: Date.now() });
    inst.componentDidMount();
    // The ported logic also tracks scroll for the old in-page navbar. The shared Navbar owns that
    // now and no section reads it, so drop the listener instead of re-rendering every island on scroll.
    if (inst._onScroll) {
      window.removeEventListener("scroll", inst._onScroll);
      inst._onScroll = null;
    }
    return () => {
      inst.componentWillUnmount();
      inst._update = null;
      if (inst._io) {
        inst._io.disconnect();
        inst._io = null;
      }
    };
  }, [inst]);

  const vals = inst.renderVals();

  // Enquiry forms send their details to the team on WhatsApp, like the previous site did.
  if (typeof vals.submit === "function" && !vals.submit.__wa) {
    const original = vals.submit;
    vals.submit = (e) => {
      const form = e && e.currentTarget;
      if (form && form.tagName === "FORM") sendToWhatsApp(form, inst.state || {});
      original(e);
    };
    vals.submit.__wa = true;
  }
  return vals;
}
