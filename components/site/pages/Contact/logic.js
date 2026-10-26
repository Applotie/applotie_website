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
    this.setState({ now: Date.now(), svcs: [], wa: true });
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

    // live studio status, from Patna time (assumed hours Mon–Sat 10–19 IST)
    var ist = new Date((st.now || Date.now()) + 5.5 * 3600000);
    var hr = ist.getUTCHours(),
      day = ist.getUTCDay();
    var open = day !== 0 && hr >= 10 && hr < 19;
    base.statusDot = open ? "#4a74ff" : "#ffe14d";
    base.statusTitle = open
      ? "We’re in the studio right now"
      : hr >= 19 || hr < 5
        ? "The studio’s closed for the night"
        : "We’re not in yet";
    base.statusText = open
      ? "Send a note and expect a reply today."
      : "Leave a note. It’ll be the first thing we read when we’re back.";

    var svcs = st.svcs || [];
    var svcList = ["Website", "Mobile app", "SEO", "Google / Meta ads", "Not sure yet"];
    base.svcOpts = svcList.map(function (l) {
      var on = svcs.indexOf(l) >= 0;
      return {
        label: l,
        cls: on ? "on" : "",
        pressed: on ? "true" : "false",
        pick: function () {
          var cur = ((self.state || {}).svcs || []).slice();
          var ix = cur.indexOf(l);
          if (ix >= 0) cur.splice(ix, 1);
          else cur.push(l);
          self.setState({ svcs: cur });
        },
      };
    });
    var single = function (key, list) {
      return list.map(function (l) {
        var on = st[key] === l;
        return {
          label: l,
          cls: on ? "on" : "",
          pressed: on ? "true" : "false",
          pick: function () {
            var o = {};
            o[key] = l;
            self.setState(o);
          },
        };
      });
    };
    base.budOpts = single("bud", ["Under ₹50k", "₹50k – 2L", "₹2L – 5L", "₹5L+", "Not sure"]);
    base.whenOpts = single("when", ["As soon as possible", "In 1–3 months", "Just exploring"]);

    var step = st.step || 1;
    base.isStep1 = step === 1;
    base.isStep2 = step === 2;
    base.stepNo = String(step);
    base.stepName = step === 1 ? "The project" : "About you";
    base.stepPct = step === 1 ? 50 : 100;
    base.hint1 = svcs.length ? "Great, " + svcs.length + " selected." : "Pick at least one, or “Not sure yet”.";
    base.next = function () {
      self.setState({ step: 2 });
    };
    base.back = function () {
      self.setState({ step: 1 });
    };
    base.setName = function (e) {
      self.setState({ name: e && e.target ? e.target.value : "" });
    };
    base.toggleWa = function (e) {
      self.setState({ wa: !!(e && e.target && e.target.checked) });
    };
    base.submit = function (e) {
      if (e && e.preventDefault) e.preventDefault();
      self.setState({ sent: true });
    };
    base.restart = function () {
      self.setState({ sent: false, step: 1, svcs: [], bud: null, when: null, name: "" });
    };
    base.sent = !!st.sent;
    base.notSent = !st.sent;
    var first = (st.name || "").trim().split(" ")[0];
    base.firstName = first ? ", " + first : "";
    base.replyWay = st.wa === false ? "call you" : "WhatsApp you";
    base.svcSummary = svcs.length ? svcs.join(" + ").toLowerCase() : "new";
    base.replyWhen = open ? " later today" : " as soon as we’re back in the studio";
    return base;
  }
}

export default Component;
