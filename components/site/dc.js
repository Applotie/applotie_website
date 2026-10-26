// Tiny runtime that lets the page logic from the design files run inside React.
// Plain module (no "use client"): server components use dcVals(), client components use useDC().

// A fixed timestamp for the first render, so server HTML and the first client render match.
// 06:00 UTC = 11:30 IST, which keeps time-of-day greetings stable across server and browser.
export const FIRST_RENDER_NOW = Date.UTC(2026, 0, 15, 6, 0, 0);

export class DCLogic {
  constructor(props) {
    this.props = props || {};
    this.state = { now: FIRST_RENDER_NOW };
    this._update = null;
  }

  setState(patch) {
    const prev = this.state || {};
    const next = typeof patch === "function" ? patch(prev, this.props) : patch;
    this.state = Object.assign({}, prev, next);
    if (this._update) this._update();
  }

  // The navbar and footer own the scroll listener and clock, so pages skip them.
  siteMount() {}
  siteUnmount() {}

  componentDidMount() {}
  componentWillUnmount() {}

  renderVals() {
    return {};
  }
}

/** Compute a page's template values once, on the server. */
export function dcVals(Logic, props) {
  return new Logic(props || {}).renderVals();
}
