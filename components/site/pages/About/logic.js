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
    var base = this.siteVals();
    base.timeline = [
      {
        year: "2019",
        tag: "Start",
        title: "An idea built around affordability.",
        text: "Applotie began in Patna with a simple goal: make serious digital work available to businesses that big agencies overlook.",
      },
      {
        year: "2020",
        tag: "Build",
        title: "From ideas to digital products.",
        text: "We grew into web and app development, helping businesses turn ideas into useful, scalable and conversion-focused products.",
      },
      {
        year: "2022",
        tag: "Grow",
        title: "Technology became only part of the story.",
        text: "A great website means little if nobody finds it. We brought SEO, content and digital strategy into every project.",
      },
      {
        year: "2023",
        tag: "Perform",
        title: "Digital presence became digital performance.",
        text: "Performance marketing and conversion work joined the team, so we could own the whole path from first click to enquiry.",
      },
      {
        year: "2026",
        tag: "Today",
        title: "Building what comes next.",
        text: "Today we are one connected team for strategy, technology and growth, working with businesses in Patna and beyond.",
      },
    ];
    base.values = [
      {
        n: "01",
        title: "Outcomes over outputs",
        text: "A pretty website is not the goal. More enquiries, bookings and sales are.",
      },
      {
        n: "02",
        title: "One team, no hand-offs",
        text: "Strategy, design, code and marketing in one room, so nothing gets lost between agencies.",
      },
      {
        n: "03",
        title: "Straight talk",
        text: "Clear prices, honest timelines and plain English. If something will not work, we will say so.",
      },
      {
        n: "04",
        title: "Patna-proud, globally sharp",
        text: "Rooted here, held to the standards of the best studios anywhere.",
      },
    ];
    return base;
  }
}

export default Component;
