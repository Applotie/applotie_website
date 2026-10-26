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
    var ua = (navigator.userAgent || "").toLowerCase();
    this.setState({ now: Date.now(), plat: /android/.test(ua) ? "android" : "ios" });
    this._clock = setInterval(function () {
      self.setState({ now: Date.now() });
    }, 20000);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this._onScroll);
    clearInterval(this._clock);
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
    var plat = st.plat || "ios";
    base.plats = [
      { id: "ios", label: "iPhone" },
      { id: "android", label: "Android" },
    ].map(function (p) {
      return {
        label: p.label,
        cls: p.id === plat ? "on" : "",
        pressed: p.id === plat ? "true" : "false",
        pick: function () {
          self.setState({ plat: p.id });
        },
      };
    });
    var ios = plat === "ios";
    base.rOuter = ios ? "40px" : "28px";
    base.rInner = ios ? "31px" : "20px";
    base.nW = ios ? "70px" : "12px";
    base.nH = ios ? "20px" : "12px";
    base.nR = ios ? "999px" : "50%";
    base.platNote = ios ? "same app, both stores" : "one codebase, both platforms";

    var t = st.type || 0;
    var typeData = [
      {
        name: "Customer app",
        screen: "Home",
        bg: "#4a74ff",
        desc: "Give loyal customers a reason to come back: ordering, offers, accounts and notifications in their pocket.",
        feats: ["Accounts & profiles", "Push notifications", "Payments", "Loyalty & offers"],
        good: "retail, restaurants, D2C brands",
        rows: [
          { h: 90, c: "#ffe14d" },
          { h: 46, c: "#ffffff" },
          { h: 46, c: "#ffffff" },
          { h: 46, c: "#ffffff" },
        ],
      },
      {
        name: "Booking app",
        screen: "Book a slot",
        bg: "#ffe14d",
        desc: "Let people book appointments, classes or visits in a few taps, with reminders that cut no-shows.",
        feats: ["Live availability", "Reminders by SMS & WhatsApp", "Online payments", "Staff calendar"],
        good: "clinics, salons, coaching, gyms",
        rows: [
          { h: 40, c: "#ffffff" },
          { h: 120, c: "#ffffff" },
          { h: 40, c: "#4a74ff" },
          { h: 40, c: "#ff2d2d" },
        ],
      },
      {
        name: "Internal tool",
        screen: "Dashboard",
        bg: "#ff2d2d",
        desc: "Replace spreadsheets and WhatsApp groups with one system your team actually enjoys using.",
        feats: ["Roles & permissions", "Workflows & approvals", "Reports", "Works offline"],
        good: "operations, field teams, logistics",
        rows: [
          { h: 60, c: "#ffffff" },
          { h: 60, c: "#ffffff" },
          { h: 120, c: "#111111" },
          { h: 40, c: "#ffffff" },
        ],
      },
      {
        name: "Marketplace",
        screen: "Browse",
        bg: "#ffffff",
        desc: "Connect buyers and sellers, or customers and providers, with search, profiles, reviews and payments.",
        feats: ["Search & filters", "Two-sided profiles", "Reviews", "Commission payments"],
        good: "property, services, local commerce",
        rows: [
          { h: 36, c: "#ececf1" },
          { h: 100, c: "#4a74ff" },
          { h: 100, c: "#ff2d2d" },
          { h: 36, c: "#ececf1" },
        ],
      },
    ];
    base.types = typeData.map(function (d, i) {
      var on = i === t;
      return {
        name: d.name,
        screen: d.screen,
        desc: d.desc,
        feats: d.feats,
        good: d.good,
        rows: d.rows,
        cls: on ? "on" : "",
        pressed: on ? "true" : "false",
        op: on ? 1 : 0,
        ty: on ? 0 : 14,
        pe: on ? "auto" : "none",
        hidden: on ? "false" : "true",
        pick: function () {
          self.setState({ type: i });
        },
      };
    });
    base.cur = { bg: typeData[t].bg };

    base.feats = [
      {
        t: "Product thinking",
        x: "We help shape the idea, the users and a version one worth launching.",
        bg: "#4a74ff",
        d: "M9 18h6 M10 22h4 M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z",
      },
      {
        t: "UX & UI design",
        x: "Clear flows and a polished interface, tested on real people.",
        bg: "#ffe14d",
        d: "M12 2a10 10 0 1 0 10 10c0-1-1-2-2-2h-3a2 2 0 0 1-2-2V5c0-1-1-3-3-3z",
      },
      {
        t: "iOS & Android",
        x: "One codebase for both platforms in most cases, so you launch faster.",
        bg: "#ff2d2d",
        d: "M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z M12 18h.01",
      },
      {
        t: "Backend & admin",
        x: "Secure APIs, databases and an admin panel to run things day to day.",
        bg: "#4a74ff",
        d: "M3 5a9 3 0 1 0 18 0a9 3 0 1 0-18 0 M3 5v14a9 3 0 0 0 18 0V5 M3 12a9 3 0 0 0 18 0",
      },
      {
        t: "Store launch",
        x: "App Store and Play Store listings, reviews and release, handled.",
        bg: "#ffe14d",
        d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
      },
      {
        t: "Analytics & care",
        x: "Know how people use the app, and keep improving it after launch.",
        bg: "#ff2d2d",
        d: "M3 3v18h18 M19 9l-5 5-4-4-3 3",
      },
    ];
    var open = st.open === undefined ? 0 : st.open;
    var fq = [
      {
        q: "How much does app development cost in Patna?",
        a: "A lean first version usually starts from [₹ range], depending on features and platforms. We give you a fixed quote after a free first call.",
      },
      {
        q: "How long does it take to build an app?",
        a: "A clickable prototype takes 2–3 weeks. A lean version one is typically [8–12] weeks, delivered in two-week sprints so you can try each build as it comes together.",
      },
      {
        q: "iOS, Android or both?",
        a: "Usually both, from one codebase with Flutter or React Native. If your app needs something platform-specific, we will tell you upfront.",
      },
      { q: "Who owns the code?", a: "You do. The code, the designs and the store accounts are all yours." },
      {
        q: "Can you take over an app someone else built?",
        a: "Yes. We start with a review of the code and tell you honestly whether to improve it or rebuild.",
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
