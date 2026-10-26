// Page logic ported from the design file. Plain JS: used by server and client sections.
import { DCLogic } from "@/components/site/dc";

class Component extends DCLogic {
  siteMount() {
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
  siteUnmount() {
    window.removeEventListener("scroll", this._onScroll);
    clearInterval(this._clock);
    clearTimeout(this._cp);
  }
  motionOn() {
    if (this.props.motion === false) return false;
    if (
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return false;
    return true;
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
  componentDidMount() {
    var self = this;
    this.siteMount();
    var saved = null,
      visited = false;
    try {
      saved = window.localStorage.getItem("applotie.industry");
      visited = window.localStorage.getItem("applotie.visited") === "1";
      window.localStorage.setItem("applotie.visited", "1");
    } catch {}
    var idx = saved != null ? parseInt(saved, 10) : NaN;
    this.setState({ returning: visited, ind: isNaN(idx) ? 0 : idx, indPicked: !isNaN(idx) });
    this._wordT = setInterval(function () {
      var st = self.state || {};
      if (!self.motionOn() || st.indPicked) return;
      self.setState({ ind: ((st.ind || 0) + 1) % 6, rotated: true });
    }, 2800);
    this._stepT = setInterval(function () {
      var st = self.state || {};
      if (!self.motionOn() || st.stepManual || st.stepPaused) return;
      self.setState({ step: ((st.step || 0) + 1) % 5 });
    }, 5000);
    this._quoteT = setInterval(function () {
      var st = self.state || {};
      if (!self.motionOn() || st.qPaused) return;
      self.setState({ q: ((st.q || 0) + 1) % 4 });
    }, 7000);
  }
  componentWillUnmount() {
    this.siteUnmount();
    clearInterval(this._wordT);
    clearInterval(this._stepT);
    clearInterval(this._quoteT);
    if (this._io) this._io.disconnect();
    if (this._raf) cancelAnimationFrame(this._raf);
  }
  countUp() {
    if (!this.motionOn()) return;
    var self = this,
      t0 = performance.now(),
      dur = 1600;
    var tick = function (t) {
      var k = Math.min(1, (t - t0) / dur);
      self.setState({ p: 1 - Math.pow(1 - k, 4) });
      if (k < 1) self._raf = requestAnimationFrame(tick);
    };
    this.setState({ p: 0 });
    this._raf = requestAnimationFrame(tick);
  }
  renderVals() {
    var self = this,
      st = this.state || {};
    var base = this.siteVals();

    // personalisation: greeting by visitor's own clock, next booking month, industry
    var h = new Date(st.now || Date.now()).getHours();
    var part = h < 5 ? "Hello, night owl" : h < 12 ? "Good morning" : h < 17 ? "Good afternoon" : "Good evening";
    var greeting = st.returning ? "Welcome back" : part;
    var months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    var nextMonth = months[(new Date(st.now || Date.now()).getMonth() + 1) % 12];

    var indData = [
      {
        label: "Any business",
        word: "customers.",
        toast: "enquiry",
        cta: "Start a project",
        sub: "We plan, build and grow your digital presence as one connected system, so every visitor has a clear path to becoming an enquiry.",
      },
      {
        label: "Clinics",
        word: "patients.",
        toast: "booking",
        cta: "Get more appointments",
        sub: "Show up when people nearby search for a doctor, and make booking an appointment effortless.",
      },
      {
        label: "Coaching & schools",
        word: "students.",
        toast: "admission",
        cta: "Fill your next batch",
        sub: "Fill your batches with admissions from parents and students who are already searching.",
      },
      {
        label: "Restaurants",
        word: "diners.",
        toast: "table booking",
        cta: "Get more bookings",
        sub: "Turn searches and scrolls into table bookings and orders, straight from your own channels.",
      },
      {
        label: "Real estate",
        word: "buyers.",
        toast: "site visit",
        cta: "Get serious buyers",
        sub: "Put your projects in front of serious buyers, and route every lead to your sales team fast.",
      },
      {
        label: "Startups",
        word: "users.",
        toast: "sign-up",
        cta: "Launch with us",
        sub: "Launch fast, learn faster, and grow with a product people actually want to use.",
      },
    ];
    var ind = st.ind || 0;
    var words = indData.map(function (d, i) {
      return {
        word: d.word,
        cls: i === ind ? "on" + (st.rotated || st.indPicked ? "" : " first") : "",
        hidden: i === ind ? "false" : "true",
      };
    });
    var subs = indData.map(function (d, i) {
      var on = i === ind;
      return { text: d.sub, op: on ? 1 : 0, ty: on ? 0 : 10, hidden: on ? "false" : "true" };
    });
    var inds = indData.map(function (d, i) {
      return {
        label: d.label,
        cls: i === ind && st.indPicked ? "on" : "",
        pressed: i === ind && st.indPicked ? "true" : "false",
        pick: function () {
          try {
            window.localStorage.setItem("applotie.industry", String(i));
          } catch {}
          self.setState({ ind: i, indPicked: true, rotated: true });
        },
      };
    });

    if (!this._statsRef) {
      this._statsRef = function (el) {
        if (!el || self._io || typeof IntersectionObserver === "undefined") return;
        self._io = new IntersectionObserver(
          function (es) {
            if (es[0] && es[0].isIntersecting) {
              self._io.disconnect();
              self.countUp();
            }
          },
          { threshold: 0.4 }
        );
        self._io.observe(el);
      };
    }
    var p = st.p == null ? 1 : st.p;
    var statData = [
      { v: 178, suf: "+", label: "Projects shipped since 2019" },
      { v: 20, suf: "+", label: "Businesses we grow with" },
      { v: 8, suf: "×", label: "Average client growth" },
      { v: 95, suf: "%", label: "Clients who stay with us" },
    ];
    var stats = statData.map(function (s, i) {
      return { num: "0" + (i + 1), shown: String(Math.round(s.v * p)), suf: s.suf, label: s.label };
    });

    var svcActive = st.svc === undefined ? 0 : st.svc;
    var svcData = [
      {
        name: "Web development",
        short: "web development in Patna",
        href: "/services/web-development-in-patna",
        tags: "Websites · Web apps · CMS",
        desc: "Fast, clear business websites and web platforms, built with SEO, speed and tracking from day one, so visitors turn into enquiries.",
        bg: "#ff2d2d",
        kind: "web",
      },
      {
        name: "App development",
        short: "app development in Patna",
        href: "/services/app-development-in-patna",
        tags: "iOS · Android · Flutter",
        desc: "Mobile apps people actually enjoy using, from the first sketch to the app store and every update after.",
        bg: "#4a74ff",
        kind: "app",
      },
      {
        name: "SEO services",
        short: "SEO services in Patna",
        href: "/services/seo-services-in-patna",
        tags: "Technical · Content · Local",
        desc: "Get found by people who are already searching for what you sell, in Patna and well beyond it.",
        bg: "#ececf1",
        kind: "seo",
      },
      {
        name: "Performance marketing",
        short: "performance marketing in Patna",
        href: "/services/performance-marketing-in-patna",
        tags: "Google · Meta · CRO",
        desc: "Google and Meta campaigns connected to landing pages and tracking, so you can see what every rupee brings back.",
        bg: "#2f5bff",
        kind: "ads",
      },
      {
        name: "Reputation management",
        short: "reputation management in Patna",
        href: "/services/reputation-management-in-patna",
        tags: "Reviews · Google profile · ORM",
        desc: "More genuine five-star reviews, thoughtful replies to every one, and a Google profile that makes people trust you before they call.",
        bg: "#ffe14d",
        kind: "rep",
      },
      {
        name: "Branding & design",
        short: "branding in Patna",
        href: "/services/branding-agency-in-patna",
        tags: "Logo · Identity · Guidelines",
        desc: "A name, logo and visual identity people remember, applied consistently everywhere from your signboard to your Instagram.",
        bg: "#ff2d2d",
        kind: "brand",
      },
    ];
    var services = svcData.map(function (s, i) {
      var on = i === svcActive;
      return {
        num: "0" + (i + 1),
        name: s.name,
        short: s.short,
        href: s.href,
        tags: s.tags,
        desc: s.desc,
        bg: s.bg,
        isWeb: s.kind === "web",
        isApp: s.kind === "app",
        isSeo: s.kind === "seo",
        isAds: s.kind === "ads",
        isRep: s.kind === "rep",
        isBrand: s.kind === "brand",
        rows: on ? "1fr" : "0fr",
        exp: on ? "true" : "false",
        tx: on ? 16 : 0,
        col: on ? "#111111" : "#5c5c66",
        hover: function () {
          if ((self.state || {}).svc !== i) self.setState({ svc: i });
        },
      };
    });

    var step = st.step || 0;
    var stepData = [
      {
        name: "Think",
        text: "Strategy first. We learn your business, your customers and your numbers, then decide what will actually move them.",
        get: "A growth plan and clear priorities",
      },
      {
        name: "Make",
        text: "Design built to perform: clear pages, fast apps and campaigns made to convert, not just to look good.",
        get: "Designs and a clickable prototype",
      },
      {
        name: "Build",
        text: "We develop with speed, SEO and tracking built in from day one, not bolted on after launch.",
        get: "Your live website or app",
      },
      {
        name: "Connect",
        text: "Ads, SEO, content and your site work as one system, so every visitor has a path to enquire.",
        get: "Campaigns and conversion tracking",
      },
      {
        name: "Keep",
        text: "We measure, learn and improve every month. It is why 95% of our clients stay with us.",
        get: "Monthly reports and ongoing growth",
      },
    ];
    var playing = this.motionOn() && !st.stepManual && !st.stepPaused;
    var steps = stepData.map(function (s, i) {
      return {
        num: "0" + (i + 1),
        name: s.name,
        cls: i === step ? "on" + (playing ? " play" : "") : "",
        sel: i === step ? "true" : "false",
        pick: function () {
          self.setState({ step: i, stepManual: true });
        },
      };
    });
    var stepPanels = stepData.map(function (s, i) {
      var on = i === step;
      return {
        text: s.text,
        get: s.get,
        op: on ? 1 : 0,
        ty: on ? 0 : 14,
        pe: on ? "auto" : "none",
        hidden: on ? "false" : "true",
      };
    });

    var qi = st.q || 0;
    var qData = [
      {
        text: "Within four months our organic traffic took off and qualified leads nearly doubled. They understood the tech and our business.",
        stat: "+160%",
        statLabel: "organic traffic",
        name: "Rahul Sharma",
        role: "Founder & CEO, GrowthCore",
        init: "RS",
        bg: "#4a74ff",
        fg: "#111111",
      },
      {
        text: "Applotie turned our website into a much faster, more effective sales channel.",
        stat: "3×",
        statLabel: "enquiries in six months",
        name: "Priya Mehta",
        role: "Marketing Director, NovaBuild",
        init: "PM",
        bg: "#ff2d2d",
        fg: "#111111",
      },
      {
        text: "From strategy to development, everything was handled with clarity. Our new platform gave the team real time back.",
        stat: "−40%",
        statLabel: "manual work",
        name: "Amit Verma",
        role: "Co-Founder, FinEdge Solutions",
        init: "AV",
        bg: "#2f5bff",
        fg: "#ffffff",
      },
      {
        text: "We moved from inconsistent leads to a predictable acquisition channel we can actually plan around.",
        stat: "+120%",
        statLabel: "qualified leads a month",
        name: "Neha Singh",
        role: "Business Head, UrbanNest",
        init: "NS",
        bg: "#4a74ff",
        fg: "#111111",
      },
    ];
    var quotes = qData.map(function (q, i) {
      var on = i === qi;
      return {
        text: q.text,
        stat: q.stat,
        statLabel: q.statLabel,
        name: q.name,
        role: q.role,
        init: q.init,
        bg: q.bg,
        fg: q.fg,
        first: q.name.split(" ")[0],
        op: on ? 1 : 0,
        ty: on ? 0 : 18,
        pe: on ? "auto" : "none",
        hidden: on ? "false" : "true",
        cls: on ? "on" : "",
        pick: function () {
          self.setState({ q: i });
        },
      };
    });

    var posts = [
      {
        title: "How to choose an app development company (without regretting it)",
        cat: "App development",
        read: "8 min read",
        href: "/blog",
        bg: "#4a74ff",
        fg: "#111111",
        glyph: "A",
      },
      {
        title: "What “measurable” digital marketing actually means for a local business",
        cat: "Marketing",
        read: "6 min read",
        href: "/blog",
        bg: "#ff2d2d",
        fg: "#111111",
        glyph: "M",
      },
      {
        title: "Five things that quietly stop your website from getting enquiries",
        cat: "Web",
        read: "5 min read",
        href: "/blog",
        bg: "#ffffff",
        fg: "#111111",
        glyph: "5",
      },
    ];

    var open = st.open === undefined ? 0 : st.open;
    var faqData = [
      {
        q: "How much does a website cost?",
        a: "It depends on what you need. Business websites start from [₹ STARTING PRICE]. After a free call you get a fixed, transparent proposal with no surprises.",
      },
      {
        q: "How long does it take?",
        a: "A typical business website takes 2–6 weeks. Apps and larger platforms are planned and delivered in phases.",
      },
      {
        q: "Do you look after the site after launch?",
        a: "Yes. We stay on for updates, security, speed and fixes, so your site keeps working as hard as it did on day one.",
      },
      {
        q: "Can you run our Google and Meta ads?",
        a: "Yes. We plan, run and optimise campaigns, with tracking set up so you can see exactly what each rupee brings back.",
      },
      {
        q: "Do you work with startups?",
        a: "Often. We help startups go from idea to launch, usually starting with a lean first version and growing from there.",
      },
    ];
    var faqs = faqData.map(function (f, i) {
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

    var first = (st.name || "").trim().split(" ")[0];
    var page = {
      greeting: greeting,
      nextMonth: nextMonth,
      words: words,
      subs: subs,
      inds: inds,
      ctaLabel: indData[ind].cta,
      toastWord: indData[ind].toast,
      statsRef: this._statsRef,
      stats: stats,
      services: services,
      steps: steps,
      stepPanels: stepPanels,
      pauseSteps: function () {
        if (!(self.state || {}).stepPaused) self.setState({ stepPaused: true });
      },
      quotes: quotes,
      qPos: "0" + (qi + 1) + " / 04",
      pauseQuotes: function () {
        self.setState({ qPaused: true });
      },
      resumeQuotes: function () {
        self.setState({ qPaused: false });
      },
      posts: posts,
      faqs: faqs,
      sent: !!st.sent,
      notSent: !st.sent,
      sentName: first ? ", " + first : "",
      setName: function (e) {
        self.setState({ name: e && e.target ? e.target.value : "" });
      },
      submit: function (e) {
        if (e && e.preventDefault) e.preventDefault();
        self.setState({ sent: true });
      },
      reset: function () {
        self.setState({ sent: false, name: "" });
      },
    };
    for (var k in page) base[k] = page[k];
    return base;
  }
}

export default Component;
