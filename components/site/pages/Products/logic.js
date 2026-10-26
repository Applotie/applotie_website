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
    var v = null;
    try {
      v = window.localStorage.getItem("applotie.vote");
    } catch {}
    this.setState({ now: Date.now(), vote: v });
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
    var list = [
      "School & coaching management",
      "Restaurant ordering & billing",
      "Real estate lead CRM",
      "Salon & spa booking",
      "Gym membership app",
    ];
    base.ideas = list.map(function (l) {
      return {
        label: l,
        cls: st.vote === l ? "on" : "",
        pressed: st.vote === l ? "true" : "false",
        pick: function () {
          try {
            window.localStorage.setItem("applotie.vote", l);
          } catch {}
          self.setState({ vote: l });
        },
      };
    });
    base.voted = !!st.vote;
    base.notVoted = !st.vote;
    base.votedLabel = (st.vote || "").toLowerCase();
    base.revote = function () {
      try {
        window.localStorage.removeItem("applotie.vote");
      } catch {}
      self.setState({ vote: null });
    };
    return base;
  }
}

export default Component;
