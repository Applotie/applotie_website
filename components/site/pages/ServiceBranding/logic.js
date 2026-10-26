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
    this.setState({ now: Date.now() });
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
    base.feats = [
      {
        t: "Brand strategy",
        x: "Who you serve, what makes you different and the one idea everything should express.",
        bg: "#ff2d2d",
        d: "M12 22a10 10 0 1 0 0-20a10 10 0 1 0 0 20 M12 18a6 6 0 1 0 0-12a6 6 0 1 0 0 12 M12 14a2 2 0 1 0 0-4a2 2 0 1 0 0 4",
      },
      {
        t: "Logo design",
        x: "A distinctive mark and wordmark, tested small and large, in colour and black.",
        bg: "#ffe14d",
        d: "M12 3l1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2z",
      },
      {
        t: "Colour & typography",
        x: "A palette and type system that is easy to recognise and accessible to read.",
        bg: "#4a74ff",
        d: "M12 2a10 10 0 1 0 10 10c0-1-1-2-2-2h-3a2 2 0 0 1-2-2V5c0-1-1-3-3-3z",
      },
      {
        t: "Brand guidelines",
        x: "Simple rules any designer, printer or employee can follow without guessing.",
        bg: "#ff2d2d",
        d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",
      },
      {
        t: "Print & packaging",
        x: "Cards, stationery, signboards, menus and packaging, ready for your printer.",
        bg: "#ffe14d",
        d: "M6 9V2h12v7 M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2 M6 14h12v8H6z",
      },
      {
        t: "Social templates",
        x: "On-brand templates for posts, stories and ads, so every post looks like you.",
        bg: "#4a74ff",
        d: "M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M8 10a2 2 0 1 0 0-4a2 2 0 1 0 0 4 M21 15l-5-5L5 21",
      },
    ];

    var v = st.mix || [70, 40, 60, 30];
    var defs = [
      ["Classic", "Modern"],
      ["Playful", "Serious"],
      ["Quiet", "Bold"],
      ["Warm", "Cool"],
    ];
    base.sliders = defs.map(function (d, i) {
      return {
        left: d[0],
        right: d[1],
        v: v[i],
        lo: v[i] < 50 ? 1 : 0.5,
        hi: v[i] >= 50 ? 1 : 0.5,
        set: function (e) {
          var m = ((self.state || {}).mix || [70, 40, 60, 30]).slice();
          m[i] = parseInt(e.target.value, 10);
          self.setState({ mix: m });
        },
      };
    });
    var modern = v[0] / 100,
      serious = v[1] / 100,
      bold = v[2] / 100,
      cool = v[3] / 100;
    var name = st.bname == null ? "Sunrise Dental" : st.bname;
    base.bname = name;
    base.setName = function (e) {
      self.setState({ bname: e.target.value });
    };
    base.bnameShow = name.trim() || "Your Brand";
    var palettes =
      cool > 0.5
        ? { bg: bold > 0.5 ? "#111111" : "#ffffff", accent: "#4a74ff", accent2: "#ffe14d" }
        : { bg: bold > 0.5 ? "#111111" : "#ffffff", accent: "#ff2d2d", accent2: "#ffe14d" };
    var dark = palettes.bg === "#111111";
    base.p = {
      bg: palettes.bg,
      fg: dark ? "#ffffff" : "#111111",
      accent: palettes.accent,
      accent2: palettes.accent2,
      onAccent: "#111111",
      font: modern >= 0.5 ? '"Bricolage Grotesque", system-ui, sans-serif' : '"Fraunces", Georgia, serif',
      weight: Math.round(500 + bold * 300),
      weight2: bold > 0.6 ? 700 : 500,
      size: Math.round(30 + bold * 10),
      track: (serious > 0.6 ? 0.06 : modern > 0.5 ? -0.02 : 0).toFixed(2),
      case: serious > 0.7 ? "uppercase" : "none",
      markR: serious > 0.6 ? "10px" : serious > 0.35 ? "20px" : "50%",
      dotR: serious > 0.6 ? "4px" : "50%",
      chipR: serious > 0.6 ? "8px" : "999px",
      markRot: serious < 0.35 ? -8 : 0,
      line:
        serious > 0.6
          ? "Care you can count on."
          : bold > 0.6
            ? "Smiles, guaranteed. Book today!"
            : "Come as you are. Leave smiling.",
      words: [
        modern >= 0.5 ? "Modern" : "Classic",
        serious >= 0.5 ? "Trustworthy" : "Friendly",
        bold >= 0.5 ? "Confident" : "Calm",
        cool >= 0.5 ? "Fresh" : "Warm",
      ].join(" · "),
    };

    var open = st.open === undefined ? 0 : st.open;
    var fq = [
      {
        q: "How much does branding cost in Patna?",
        a: "A logo starts from [₹ price]; a complete identity with guidelines from [₹ price]. You get a fixed quote after our first conversation.",
      },
      {
        q: "How long does a branding project take?",
        a: "A logo takes around 2–3 weeks. A full identity with guidelines is usually about six weeks, including your feedback rounds.",
      },
      {
        q: "Do I get all the files?",
        a: "Yes. Every logo version in every format, fonts information, colour codes and the guidelines document. They’re yours.",
      },
      {
        q: "Can you refresh our existing brand?",
        a: "Often that’s the smarter move. We keep the recognition you’ve built and fix what’s holding you back.",
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
