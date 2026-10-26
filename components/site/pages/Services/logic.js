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
    var g = st.goal || 0;
    var data = [
      {
        label: "More enquiries",
        name: "Web development",
        href: "/services/web-development-in-patna",
        note: "start here",
        why: "If people visit but don’t call, the website is the leak. We fix the foundation first, then send traffic to it.",
        plus: ["SEO", "Conversion tracking"],
      },
      {
        label: "Show up on Google",
        name: "SEO & growth",
        href: "/services/seo-services-in-patna",
        note: "slow, steady, compounding",
        why: "You want people who are already searching to find you, without paying for every click.",
        plus: ["Local SEO", "Content"],
      },
      {
        label: "Leads this month",
        name: "Performance marketing",
        href: "/services/performance-marketing-in-patna",
        note: "fastest results",
        why: "Ads are the quickest way to put you in front of buyers, as long as the landing page and tracking are right.",
        plus: ["Landing page", "Monthly report"],
      },
      {
        label: "Launch an app",
        name: "App development",
        href: "/services/app-development-in-patna",
        note: "let’s sketch it",
        why: "We start with a lean first version, get it in people’s hands, and grow it from what they actually use.",
        plus: ["Launch marketing", "Analytics"],
      },
      {
        label: "Better reviews",
        name: "Reputation management",
        href: "/services/reputation-management-in-patna",
        note: "trust is the new SEO",
        why: "People read reviews before they call. We help you earn more genuine ones and reply to every review like a pro.",
        plus: ["Google Business Profile", "Local SEO"],
      },
      {
        label: "Stand out",
        name: "Branding & design",
        href: "/services/branding-agency-in-patna",
        note: "let’s make you memorable",
        why: "If you look like everyone else, people choose on price. A distinct brand gives them another reason to pick you.",
        plus: ["Website", "Social templates"],
      },
      {
        label: "All of the above",
        name: "Monthly growth partnership",
        href: "/contact",
        note: "our favourite kind",
        why: "One team runs the whole engine: site, search, ads and reporting, pulling in the same direction every month.",
        plus: ["Web", "SEO", "Ads"],
      },
    ];
    base.goals = data.map(function (d, i) {
      return {
        label: d.label,
        cls: i === g ? "on" : "",
        pressed: i === g ? "true" : "false",
        pick: function () {
          self.setState({ goal: i });
        },
      };
    });
    base.recs = data.map(function (d, i) {
      var on = i === g;
      return {
        name: d.name,
        href: d.href,
        note: d.note,
        why: d.why,
        plus: d.plus,
        op: on ? 1 : 0,
        ty: on ? 0 : 16,
        pe: on ? "auto" : "none",
        hidden: on ? "false" : "true",
      };
    });
    return base;
  }
}

export default Component;
