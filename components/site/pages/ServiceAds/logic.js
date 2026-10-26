// Page logic ported from the design file. Plain JS: used by server and client sections.
import { DCLogic } from "@/components/site/dc";

class Component extends DCLogic {
  componentDidMount() {
    var self = this;
    this._onScroll = function () {
      var sc = (window.scrollY || 0) > 480;
      if (sc !== !!(self.state || {}).scrolled) self.setState({ scrolled: sc });
    };
    window.addEventListener("scroll", this._onScroll, { passive: true });
    this.setState({ now: Date.now(), leads: 128 });
    this._clock = setInterval(function () {
      self.setState({ now: Date.now() });
    }, 20000);
    var reduce =
      this.props.motion === false ||
      (typeof window !== "undefined" &&
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    if (!reduce)
      this._leadT = setInterval(function () {
        var l = ((self.state || {}).leads || 128) + 1;
        self.setState({ leads: l > 160 ? 128 : l });
      }, 2600);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this._onScroll);
    clearInterval(this._clock);
    clearInterval(this._leadT);
    clearTimeout(this._cp);
  }
  siteVals() {
    var self = this,
      st = this.state || {};
    var time = "";
    try {
      time = new Date(st.now || Date.now())
        .toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata", hour: "numeric", minute: "2-digit", hour12: true })
        .toUpperCase();
    } catch {}
    return {
      moClass: this.props.motion === false ? "nomo" : "",
      time: time,
      navPad: st.scrolled ? "12px" : "20px",
      navLine: st.scrolled ? "#ececf1" : "rgba(236,236,241,0)",
      scrolled: !!st.scrolled,
      menu: !!st.menu,
      menuExp: st.menu ? "true" : "false",
      toggleMenu: function () {
        self.setState({ menu: !(self.state || {}).menu });
      },
      closeMenu: function () {
        self.setState({ menu: false });
      },
      toTop: function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
      },
      copyLabel: st.copied ? "Copied ✓" : "Copy",
      copyEmail: function () {
        try {
          navigator.clipboard.writeText("hello@applotie.com");
        } catch {}
        self.setState({ copied: true });
        clearTimeout(self._cp);
        self._cp = setTimeout(function () {
          self.setState({ copied: false });
        }, 1800);
      },
    };
  }
  renderVals() {
    var self = this,
      st = this.state || {};
    var base = this.siteVals();
    var leads = st.leads || 128;
    base.leads = String(leads);
    base.cpl = String(Math.round(48000 / leads));
    base.roas = (2.4 + (leads - 128) * 0.0125).toFixed(1);

    var fmt = function (n) {
      try {
        return Math.round(n).toLocaleString("en-IN");
      } catch {
        return String(Math.round(n));
      }
    };
    var k = st.kind || 0;
    var kinds = [
      { label: "Local service", note: "people search when they need you", s: [60, 25, 15] },
      { label: "Big purchase", note: "long decision, lots of research", s: [45, 30, 25] },
      { label: "Products online", note: "great visuals sell this", s: [25, 55, 20] },
      { label: "B2B", note: "fewer, bigger leads", s: [65, 20, 15] },
    ];
    base.kinds = kinds.map(function (d, i) {
      return {
        label: d.label,
        cls: i === k ? "on" : "",
        pressed: i === k ? "true" : "false",
        pick: function () {
          self.setState({ kind: i });
        },
      };
    });
    base.kindNote = kinds[k].note;
    var bud = st.bud || 50000;
    base.bud = bud;
    base.budLabel = fmt(bud);
    base.setBud = function (e) {
      self.setState({ bud: parseInt(e.target.value, 10) || 50000 });
    };
    var ch = [
      { name: "Google Search", why: "Catch active demand", bg: "#ff2d2d" },
      { name: "Meta Ads", why: "Create new demand", bg: "#4a74ff" },
      { name: "Retargeting", why: "Win back visitors", bg: "#ffe14d" },
    ];
    var sp = kinds[k].s.slice();
    if (bud < 25000) {
      sp = [sp[0] + sp[2] - 10, sp[1], 10];
    }
    base.split = ch.map(function (c, i) {
      return { name: c.name, why: c.why, bg: c.bg, pct: sp[i], amt: fmt((bud * sp[i]) / 100) };
    });

    var open = st.open === undefined ? 0 : st.open;
    var fq = [
      {
        q: "Do you manage Google Ads for businesses in Patna?",
        a: "Yes. We set up and manage Google Ads for Patna businesses, with location targeting so you only pay to reach people you can actually serve, whether that’s one neighbourhood or all of Bihar.",
      },
      {
        q: "How much should I spend on ads?",
        a: "Enough to learn quickly. For most local businesses that starts around [₹ amount] a month. We will recommend a number after looking at your market.",
      },
      {
        q: "How soon will I see leads?",
        a: "Campaigns usually start bringing in leads within the first couple of weeks. The first month is about learning; months two and three are about scaling what works.",
      },
      {
        q: "Who owns the ad accounts?",
        a: "You do. We work inside your Google and Meta accounts, so the data and history always stay with you.",
      },
      {
        q: "Do you make the ad creatives?",
        a: "Yes. Copy, images and short videos are part of the work, refreshed regularly so ads don’t go stale.",
      },
    ];
    base.faqs = fq.map(function (f, i) {
      var isOpen = open === i;
      return {
        q: f.q,
        a: f.a,
        rows: isOpen ? "1fr" : "0fr",
        exp: isOpen ? "true" : "false",
        rot: isOpen ? 45 : 0,
        toggle: function () {
          self.setState({ open: isOpen ? -1 : i });
        },
      };
    });
    return base;
  }
}

export default Component;
