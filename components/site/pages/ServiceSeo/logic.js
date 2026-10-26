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
    this.setState({ now: Date.now(), tick: 0, qi: 0 });
    this._clock = setInterval(function () {
      self.setState({ now: Date.now() });
    }, 20000);
    var reduce =
      this.props.motion === false ||
      (typeof window !== "undefined" &&
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    if (!reduce) {
      this._rankT = setInterval(function () {
        var t = ((self.state || {}).tick || 0) + 1;
        var o = { tick: t % 10 };
        if (t % 10 === 0) o.qi = (((self.state || {}).qi || 0) + 1) % 3;
        self.setState(o);
      }, 900);
    } else {
      this.setState({ tick: 6 });
    }
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this._onScroll);
    clearInterval(this._clock);
    clearInterval(this._rankT);
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

    var qs = ["dentist near me", "best coaching in patna", "interior designer patna"];
    var qi = st.qi || 0;
    base.queries = qs.map(function (q, i) {
      return { text: q, op: i === qi ? 1 : 0, cls: i === qi ? "typing" : "" };
    });

    var path = [6, 5, 4, 3, 2, 1, 1, 1, 1, 1];
    var youPos = path[st.tick || 0];
    var others = [
      { name: "Competitor A", w: 70 },
      { name: "Directory listing", w: 55 },
      { name: "Competitor B", w: 64 },
      { name: "Old forum post", w: 48 },
      { name: "Competitor C", w: 58 },
    ];
    var ranks = [];
    var slot = 1;
    for (var i = 0; i < 5; i++) {
      if (slot === youPos) slot++;
      ranks.push({
        name: others[i].name,
        w: others[i].w,
        pos: slot,
        top: (slot - 1) * 56,
        bg: "rgba(255,255,255,.07)",
        fg: "rgba(255,255,255,.75)",
        bar: "rgba(255,255,255,.2)",
        z: 1,
        you: false,
      });
      slot++;
    }
    ranks.push({
      name: "Your business",
      w: 80,
      pos: youPos,
      top: (youPos - 1) * 56,
      bg: youPos === 1 ? "#ffe14d" : "#ffffff",
      fg: "#111111",
      bar: "#111111",
      z: 2,
      you: true,
    });
    base.ranks = ranks;

    var name = st.biz == null ? "Sunrise Dental" : st.biz;
    var what = st.what == null ? "Dental clinic" : st.what;
    var city = st.city == null ? "Patna" : st.city;
    base.bizName = name;
    base.bizWhat = what;
    base.bizCity = city;
    base.setBiz = function (e) {
      self.setState({ biz: e.target.value });
    };
    base.setWhat = function (e) {
      self.setState({ what: e.target.value });
    };
    base.setCity = function (e) {
      self.setState({ city: e.target.value });
    };
    var n = name.trim() || "Your Business",
      w = what.trim() || "your service",
      c = city.trim() || "your city";
    base.bizShow = n;
    base.initial = n.charAt(0).toUpperCase();
    base.url = "www." + n.toLowerCase().replace(/[^a-z0-9]+/g, "") + ".in";
    var title = n + " | " + w + " in " + c;
    var desc =
      "Looking for a trusted " +
      w.toLowerCase() +
      " in " +
      c +
      "? " +
      n +
      " makes it easy. See services, timings and reviews, then call or book online in minutes.";
    base.serpTitle = title.length > 60 ? title.slice(0, 59) + "…" : title;
    base.serpDesc = desc.length > 155 ? desc.slice(0, 154) + "…" : desc;
    base.tLen = String(title.length);
    base.dLen = String(desc.length);
    base.tPct = Math.min(100, (title.length / 60) * 100);
    base.dPct = Math.min(100, (desc.length / 155) * 100);
    base.tCol = title.length > 60 ? "#ff2d2d" : "#4a74ff";
    base.dCol = desc.length > 155 ? "#ff2d2d" : "#4a74ff";

    var open = st.open === undefined ? 0 : st.open;
    var fq = [
      {
        q: "How much do SEO services cost in Patna?",
        a: "Our monthly SEO plans for Patna businesses start from [₹ amount]. A one-time audit is available if you want a plan your own team can follow.",
      },
      {
        q: "How long does SEO take?",
        a: "Local improvements can show within weeks. Competitive searches usually take three to six months of steady work. We report progress every month so you can see the trend.",
      },
      {
        q: "Can you guarantee the #1 spot?",
        a: "No honest agency can, because Google decides. What we guarantee is the work, the transparency and a plan built around searches that bring in customers.",
      },
      {
        q: "Do I need a new website for SEO?",
        a: "Not always. We start with an audit. Sometimes fixes are enough; sometimes a rebuild pays for itself.",
      },
      { q: "Is there a lock-in contract?", a: "No. Plans run month to month. We would rather keep you with results." },
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
