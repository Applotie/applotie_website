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
    this.setState({ now: Date.now(), sel: { blog: true, forms: true } });
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
    base.scores = [
      { v: "98", label: "Speed", col: "#4a74ff", delay: "1s" },
      { v: "100", label: "SEO", col: "#ffe14d", delay: "1.15s" },
      { v: "96", label: "Access", col: "#ff2d2d", delay: "1.3s" },
    ];
    base.feats = [
      {
        t: "Strategy & sitemap",
        x: "We decide what each page must do before anything is designed.",
        bg: "#ff2d2d",
        d: "M3 3h7v7H3z M14 3h7v7h-7z M14 14h7v7h-7z M3 14h7v7H3z",
      },
      {
        t: "Words that sell",
        x: "Clear, confident copy written for your customers, not for search engines.",
        bg: "#ffe14d",
        d: "M12 20h9 M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z",
      },
      {
        t: "Custom design",
        x: "Designed for your brand and your buyers, never a recycled template.",
        bg: "#4a74ff",
        d: "M12 2a10 10 0 1 0 10 10c0-1-1-2-2-2h-3a2 2 0 0 1-2-2V5c0-1-1-3-3-3z",
      },
      {
        t: "Fast, modern build",
        x: "Built with modern tools so pages load quickly even on mobile data.",
        bg: "#ff2d2d",
        d: "M13 2 3 14h9l-1 8 10-12h-9l1-8z",
      },
      {
        t: "SEO & tracking built in",
        x: "Search foundations, analytics and conversion tracking from launch day.",
        bg: "#ffe14d",
        d: "M3 3v18h18 M19 9l-5 5-4-4-3 3",
      },
      {
        t: "Easy to update",
        x: "A simple editor and training, so you are never stuck waiting on us.",
        bg: "#4a74ff",
        d: "M4 21v-7 M4 10V3 M12 21v-9 M12 8V3 M20 21v-5 M20 12V3 M1 14h6 M9 8h6 M17 16h6",
      },
    ];
    var sel = st.sel || {};
    var optData = [
      { id: "core", label: "Core pages", note: "Home, about, contact", w: 1, fixed: true },
      { id: "svc", label: "Service pages", note: "one per service", w: 1 },
      { id: "blog", label: "Blog or news", note: "for SEO", w: 0.5 },
      { id: "forms", label: "Enquiry & WhatsApp", note: "lead capture", w: 0.5 },
      { id: "book", label: "Online bookings", note: "appointments, tables", w: 1 },
      { id: "shop", label: "Online shop", note: "products & payments", w: 2 },
      { id: "lang", label: "Hindi + English", note: "two languages", w: 0.2 },
    ];
    var total = 0,
      names = [],
      count = 3;
    base.opts = optData.map(function (o) {
      var on = o.fixed || !!sel[o.id];
      if (on) {
        total += o.w;
        if (!o.fixed) names.push(o.label.toLowerCase());
      }
      if (on && o.id === "svc") count += 4;
      if (on && o.id === "blog") count += 1;
      return {
        label: o.label,
        note: o.note,
        wk: o.fixed ? "Included" : "+" + o.w + " wk",
        on: on,
        cls: on ? "on" : "",
        pressed: on ? "true" : "false",
        pick: function () {
          if (o.fixed) return;
          var s = {};
          var cur = (self.state || {}).sel || {};
          for (var k in cur) s[k] = cur[k];
          s[o.id] = !s[o.id];
          self.setState({ sel: s });
        },
      };
    });
    var lo = Math.max(2, Math.floor(total)),
      hi = Math.ceil(total + 1);
    base.weeks = lo + "–" + hi;
    base.weeksPct = Math.min(100, (hi / 9) * 100);
    base.pages = "~" + count + " pages";
    base.summary = names.length ? "with " + names.join(", ") : "core site only";
    var open = st.open === undefined ? 0 : st.open;
    var fq = [
      {
        q: "How much does website development cost in Patna?",
        a: "Business websites in Patna typically range from [₹ range], depending on pages and features. Use the planner above for a timeline, then we’ll give you a fixed price after a free call.",
      },
      {
        q: "Do I own the website?",
        a: "Yes. The domain, the code, the content and the accounts are yours. We set everything up in your name.",
      },
      {
        q: "Can you redesign my existing site?",
        a: "Often that is the best place to start. We keep what works, fix what doesn’t, and protect your current search rankings during the move.",
      },
      {
        q: "Will it work well on phones?",
        a: "We design for phones first and test on real, affordable devices, not just the latest iPhone.",
      },
      {
        q: "What happens after launch?",
        a: "We train your team, fix anything that comes up, and can stay on monthly to keep improving speed, SEO and conversions.",
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
