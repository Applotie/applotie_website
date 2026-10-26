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
    var R = "#ff2d2d",
      B = "#2f5bff",
      Y = "#ffe14d",
      W = "#ffffff",
      G = "#f4f4f6",
      K = "#111111";
    var all = [
      {
        id: "meddolic",
        img: "/Meddolic-Applotie.webp",
        client: "Meddolic",
        industry: "[Industry]",
        kinds: ["brand", "web", "social", "ads"],
        tags: ["Brand", "Website", "Social", "Ads"],
        title: "Built the brand from the ground up, then grew revenue 4×.",
        metric: "4×",
        metricLabel: "revenue",
        bg: R,
        fg: W,
        sh1: Y,
        sh2: B,
        brief:
          "Meddolic needed more than a logo: a brand, a home online and a steady flow of customers, all working together.",
        did: "Brand identity and guidelines, a conversion-focused website, always-on social media and performance marketing, run by one team.",
        result: "Revenue grew 4×, with every channel pulling in the same direction.",
      },
      {
        id: "snappy",
        img: "/SnappyIndia-Applotie.webp",
        client: "Snappy India",
        industry: "[Industry]",
        kinds: ["ads"],
        tags: ["Performance marketing"],
        title: "Turned ad spend into 6× sales with performance marketing.",
        metric: "6×",
        metricLabel: "sales",
        bg: B,
        fg: W,
        sh1: R,
        sh2: Y,
        brief: "Snappy India wanted sales growth they could measure, not just more clicks and traffic.",
        did: "Full-funnel Meta and Google campaigns, constant creative testing, sharper landing pages and conversion tracking from first click to checkout.",
        result: "Sales grew 6× at a [x.x]× return on ad spend.",
      },
      {
        id: "kharakia",
        img: "/KhakiaMetals-Applotie.webp",
        client: "Kharakia Metals",
        industry: "Metals",
        kinds: ["rep"],
        tags: ["Online presence", "Reputation"],
        title: "Gave an established metals business the online presence it deserved.",
        bg: Y,
        fg: K,
        sh1: R,
        sh2: B,
        url: "https://kharakiagroup.com/",
        urlLabel: "kharakiagroup.com",
        brief: "A respected name offline, but hard to find and easy to misjudge online.",
        did: "Search and Google Business Profile optimisation, consistent business listings, a review programme and professional replies to reviews.",
        result: "A stronger, more trustworthy presence wherever customers and partners look them up.",
      },
      {
        id: "surangan",
        img: "/Surangan-Applotie.webp",
        client: "Surangan",
        industry: "Dance institution · est. 1959",
        kinds: ["rep"],
        tags: ["Online presence", "SEO"],
        title: "Brought a dance legacy from 1959 to a new generation online.",
        metric: "1959",
        metricLabel: "established",
        bg: W,
        fg: R,
        sh1: B,
        sh2: Y,
        url: "https://surangan.in/",
        urlLabel: "surangan.in",
        border: true,
        brief:
          "More than six decades of teaching dance, with a story that deserved to be found by new students and parents.",
        did: "Search visibility, a refreshed Google profile and storytelling content that puts the institution’s heritage front and centre.",
        result: "A stronger online presence that helps new students and families discover Surangan.",
      },
      {
        id: "jmd",
        client: "JMD Sales",
        industry: "[Industry]",
        kinds: ["social"],
        tags: ["Social media"],
        title: "Kept JMD Sales visible, active and on-brand across social media.",
        bg: B,
        fg: Y,
        sh1: W,
        sh2: R,
        brief: "A busy business without the time to show up consistently on social media.",
        did: "A monthly content calendar, on-brand creatives, regular posting and community management.",
        result: "A consistent, professional social presence that keeps the brand top of mind.",
      },
      {
        id: "fryzone",
        client: "Fry Zone",
        industry: "[Industry]",
        kinds: ["web"],
        tags: ["Website"],
        title: "Built a bold, mobile-first website for Fry Zone.",
        bg: R,
        fg: Y,
        sh1: W,
        sh2: B,
        brief: "Fry Zone needed a modern website that represents the brand and works beautifully on phones.",
        did: "Website design and development: mobile-first, fast to load and easy to update.",
        result: "A bold, modern website that gives the brand a proper home online.",
      },
      {
        id: "joyjoy",
        client: "Joy Joy",
        industry: "Noodles manufacturer",
        kinds: ["web"],
        tags: ["Website design"],
        title: "Designed a website for a noodles maker with joy in its name.",
        bg: Y,
        fg: R,
        sh1: B,
        sh2: W,
        brief:
          "A noodles manufacturer needed a website that showcases its products and builds trust with buyers and distributors.",
        did: "Website design and development with a clear product showcase and simple paths to enquire.",
        result: "A bright, professional website that matches the brand’s personality.",
      },
      {
        id: "tns",
        client: "T&S Infra",
        industry: "Infrastructure",
        kinds: ["brand", "web"],
        tags: ["Brand design", "Website"],
        title: "Built a solid brand and website for an infrastructure company.",
        bg: G,
        fg: B,
        sh1: R,
        sh2: Y,
        brief: "A growing infrastructure company needed to look as dependable as the work it delivers.",
        did: "Brand identity, including logo, colours and typography, plus a website that presents its projects and capabilities.",
        result: "A consistent, credible brand across every touchpoint, from site boards to the website.",
      },
    ];
    var f = st.f || "all";
    var defs = [
      { id: "all", label: "All" },
      { id: "brand", label: "Branding" },
      { id: "web", label: "Websites" },
      { id: "ads", label: "Performance marketing" },
      { id: "social", label: "Social media" },
      { id: "rep", label: "Presence & reputation" },
    ];
    base.filters = defs.map(function (d) {
      var c =
        d.id === "all"
          ? all.length
          : all.filter(function (x) {
              return x.kinds.indexOf(d.id) >= 0;
            }).length;
      return {
        label: d.label,
        count: "0" + c,
        cls: d.id === f ? "on" : "",
        pressed: d.id === f ? "true" : "false",
        pick: function () {
          self.setState({ f: d.id });
        },
      };
    });
    var list = all.filter(function (x) {
      return f === "all" || x.kinds.indexOf(f) >= 0;
    });
    var open = st.open || {};
    base.items = list.map(function (x, i) {
      var isOpen = !!open[x.id];
      var len = x.client.length;
      return {
        client: x.client,
        industry: x.industry,
        tags: x.tags,
        title: x.title,
        bg: x.bg,
        ring: x.border ? "inset 0 0 0 2px #ececf1" : "none",
        fg: x.fg,
        sh1: x.sh1,
        sh2: x.sh2,
        img: x.img || "",
        wmSize: len > 12 ? 64 : len > 8 ? 76 : 92,
        hasMetric: !!x.metric,
        metric: x.metric || "",
        metricLabel: x.metricLabel || "",
        href: x.href || x.url || "/contact",
        hasPage: !!x.page,
        hasUrl: !!x.url,
        url: x.url || "#",
        urlLabel: x.urlLabel || "",
        brief: x.brief,
        did: x.did,
        result: x.result,
        rows: isOpen ? "1fr" : "0fr",
        exp: isOpen ? "true" : "false",
        rot: isOpen ? 45 : 0,
        btn: isOpen ? "Close the story" : "Read the story",
        delay: i * 0.06 + "s",
        toggle: function () {
          var o = {};
          var cur = (self.state || {}).open || {};
          for (var k in cur) o[k] = cur[k];
          o[x.id] = !o[x.id];
          self.setState({ open: o });
        },
      };
    });
    base.shown = "0" + list.length;
    return base;
  }
}

export default Component;
