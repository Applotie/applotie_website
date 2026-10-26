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
    var reduce =
      this.props.motion === false ||
      (typeof window !== "undefined" &&
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    if (reduce) {
      this.setState({ hk: 1 });
      return;
    }
    this.setState({ hk: 0 });
    var t0 = null;
    var tick = function (t) {
      if (t0 === null) t0 = t;
      var k = Math.min(1, (t - t0 - 600) / 1800);
      if (k < 0) k = 0;
      self.setState({ hk: 1 - Math.pow(1 - k, 3) });
      if (k < 1) self._raf = requestAnimationFrame(tick);
    };
    this._raf = requestAnimationFrame(tick);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this._onScroll);
    clearInterval(this._clock);
    clearTimeout(this._cp);
    if (this._raf) cancelAnimationFrame(this._raf);
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

    var hk = st.hk == null ? 1 : st.hk;
    var hr = 3.9 + 0.8 * hk;
    base.heroRating = hr.toFixed(1);
    base.heroPct = (hr / 5) * 100;
    base.heroCount = String(Math.round(42 + 96 * hk));

    base.feats = [
      {
        t: "Review generation",
        x: "Simple WhatsApp, SMS and QR requests that make it easy for happy customers to leave a review.",
        bg: "#4a74ff",
        d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z",
      },
      {
        t: "Replies to every review",
        x: "Warm, professional replies on your behalf, in English or Hindi, sent promptly.",
        bg: "#ffe14d",
        d: "M9 17H7l-4 4V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4 M15 13h6v6l-2-2h-4z",
      },
      {
        t: "Google Business Profile",
        x: "Photos, hours, services, posts and Q&A kept accurate and active so you show up in Maps.",
        bg: "#ff2d2d",
        d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0 M12 7a3 3 0 1 0 0 6a3 3 0 1 0 0-6",
      },
      {
        t: "Monitoring & alerts",
        x: "We watch Google, Facebook, Justdial and other platforms and flag anything that needs you.",
        bg: "#4a74ff",
        d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9 M10.3 21a1.94 1.94 0 0 0 3.4 0",
      },
      {
        t: "Negative review handling",
        x: "A calm plan for unhappy customers, and flagging reviews that break platform policies.",
        bg: "#ffe14d",
        d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",
      },
      {
        t: "Monthly reputation report",
        x: "Rating trend, new reviews, response time and the themes customers keep mentioning.",
        bg: "#ff2d2d",
        d: "M3 3v18h18 M19 9l-5 5-4-4-3 3",
      },
    ];

    var cur10 = st.cur10 == null ? 39 : st.cur10;
    var count = st.count == null ? 48 : st.count;
    var tgt10 = st.tgt10 == null ? 45 : st.tgt10;
    var cur = cur10 / 10,
      tgt = tgt10 / 10;
    base.cur10 = cur10;
    base.count = count;
    base.tgt10 = tgt10;
    base.curLabel = cur.toFixed(1);
    base.tgtLabel = tgt.toFixed(1);
    base.setCur = function (e) {
      self.setState({ cur10: parseInt(e.target.value, 10) });
    };
    base.setCount = function (e) {
      self.setState({ count: parseInt(e.target.value, 10) });
    };
    base.setTgt = function (e) {
      self.setState({ tgt10: parseInt(e.target.value, 10) });
    };
    var need = tgt <= cur ? 0 : Math.ceil(((tgt - cur) * count) / (5 - tgt) - 1e-9);
    base.needed = String(need);
    base.neededLabel =
      need === 0
        ? "more reviews. You’re already there. Let’s keep it that way."
        : need === 1
          ? "more five-star review"
          : "more five-star reviews";
    var weeks = Math.ceil(need / 5);
    base.paceText =
      need === 0
        ? "Your rating is at or above your target. We’ll help you protect it."
        : "At around 5 new five-star reviews a week, that’s roughly " +
          weeks +
          (weeks === 1 ? " week." : " weeks.") +
          " Assumes every new review is five stars.";
    base.curPct = ((cur - 1) / 4) * 100;
    base.tgtPct = ((tgt - 1) / 4) * 100;

    var s = st.star == null ? 1 : st.star;
    var rd = [
      {
        who: "Vikram S.",
        stars: "★",
        review: "Waited 50 minutes past my appointment time. Nobody told us anything.",
        reply:
          "Vikram, you’re right, and we’re sorry. Waiting without an update isn’t okay. We’ve started sending WhatsApp updates when the doctor is running late. Please call us on [number]; we’d like to make your next visit better.",
        note: "own it, fix it, invite them back",
      },
      {
        who: "Sneha K.",
        stars: "★★",
        review: "Treatment was fine but billing was confusing.",
        reply:
          "Thanks for telling us, Sneha. Confusing bills aren’t fair to anyone. We’ve simplified our invoices so every charge is explained. If anything on yours is still unclear, message us and we’ll walk you through it.",
        note: "specific, not defensive",
      },
      {
        who: "Rohit P.",
        stars: "★★★",
        review: "Good doctor, but parking is a nightmare.",
        reply:
          "Thank you, Rohit! Glad the consultation helped. Parking near us is tricky, so here’s a tip: there’s space behind the building after 11am. We’ve added it to our booking messages too.",
        note: "be helpful, add a tip",
      },
      {
        who: "Meera J.",
        stars: "★★★★",
        review: "Very good experience overall, would visit again.",
        reply: "Thank you, Meera! We’d love to hear what would have made it a five. See you next time.",
        note: "ask what would make it a five",
      },
      {
        who: "Anjali R.",
        stars: "★★★★★",
        review: "Doctor explained everything patiently. Booking was easy too.",
        reply:
          "Thank you so much, Anjali! We’ll pass your kind words to the doctor. Wishing you good health, and see you at your follow-up.",
        note: "warm, personal, by name",
      },
    ];
    base.starBtns = [0, 1, 2, 3, 4].map(function (i) {
      var on = i <= s;
      return {
        n: String(i + 1),
        cls: on ? "on" : "",
        pressed: i === s ? "true" : "false",
        pick: function () {
          self.setState({ star: i });
        },
      };
    });
    base.replies = rd.map(function (r, i) {
      var on = i === s;
      return {
        who: r.who,
        stars: r.stars,
        review: r.review,
        reply: r.reply,
        note: r.note,
        op: on ? 1 : 0,
        ty: on ? 0 : 14,
        pe: on ? "auto" : "none",
        hidden: on ? "false" : "true",
      };
    });

    var open = st.open === undefined ? 0 : st.open;
    var fq = [
      {
        q: "What is online reputation management?",
        a: "It’s managing what people find and feel when they look you up: your Google rating and reviews, your replies, your listings and the conversations about you online.",
      },
      {
        q: "How much does reputation management cost in Patna?",
        a: "Our monthly plans for Patna businesses start from [₹ amount] for one location. Multi-location businesses get a custom quote.",
      },
      {
        q: "Can you remove bad reviews?",
        a: "Not genuine ones, and nobody honest can promise that. We can flag reviews that break Google’s policies, such as spam or abuse, and help you respond well to the rest.",
      },
      {
        q: "Do you write fake reviews?",
        a: "Never. Fake reviews break Google’s rules and can get your profile penalised. We help real customers share real experiences.",
      },
      {
        q: "How fast will my rating improve?",
        a: "It depends on how many customers you serve. Use the calculator above to see the gap; most businesses see steady new reviews within the first month of asking consistently.",
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
