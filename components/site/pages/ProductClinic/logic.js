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
    this.setState({ now: Date.now(), token: 14 });
    this._clock = setInterval(function () {
      self.setState({ now: Date.now() });
    }, 20000);
    var reduce =
      this.props.motion === false ||
      (typeof window !== "undefined" &&
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    if (!reduce)
      this._tokT = setInterval(function () {
        var t = ((self.state || {}).token || 14) + 1;
        self.setState({ token: t > 22 ? 14 : t });
      }, 3200);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this._onScroll);
    clearInterval(this._clock);
    clearInterval(this._tokT);
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
    base.token = String(st.token || 14);

    var ti = st.tab || 0;
    var tabData = [
      {
        name: "Appointments",
        sub: "Bookings, queue & tokens",
        title: "Today · 18 appointments",
        badge: "Live queue",
        badgeBg: "#4a74ff",
        desc: "Walk-ins and online bookings in one queue, with token numbers and automatic WhatsApp reminders.",
        rows: [
          { a: "10:30 · New booking from website", b: "Confirmed", c: "#4a74ff" },
          { a: "10:15 · Follow-up", b: "Waiting", c: "#ffe14d" },
          { a: "10:00 · Consultation", b: "With doctor", c: "#ff2d2d" },
          { a: "09:45 · BP check", b: "Done", c: "#ececf1" },
        ],
      },
      {
        name: "Patient records",
        sub: "History in one tap",
        title: "Patient · [Name], 42",
        badge: "6 visits",
        badgeBg: "#ffe14d",
        desc: "Every visit, vital, report and prescription in one timeline. Search any patient by name or phone.",
        rows: [
          { a: "Vitals · BP 128/84 · Sugar 112", b: "Today", c: "#4a74ff" },
          { a: "Report uploaded · Blood test", b: "3 days ago", c: "#ffe14d" },
          { a: "Prescription · 5 days", b: "2 weeks ago", c: "#ff2d2d" },
          { a: "First visit", b: "Mar 2026", c: "#ececf1" },
        ],
      },
      {
        name: "Prescriptions",
        sub: "Templates, Hindi & English",
        title: "New prescription",
        badge: "Template: Viral fever",
        badgeBg: "#ffe14d",
        desc: "Start from your own templates, adjust doses, and print or WhatsApp it in Hindi or English.",
        rows: [
          { a: "Medicine A · 500mg", b: "1-0-1 · 5 days", c: "#4a74ff" },
          { a: "Medicine B · syrup", b: "10ml · night", c: "#4a74ff" },
          { a: "Advice · rest & fluids", b: "Hindi", c: "#ffe14d" },
          { a: "Follow-up", b: "In 5 days", c: "#ff2d2d" },
        ],
      },
      {
        name: "Billing",
        sub: "GST invoices, UPI & cash",
        title: "Invoice #1042",
        badge: "Paid · UPI",
        badgeBg: "#4a74ff",
        desc: "GST-ready invoices created with each visit. Cash, UPI and card reconciled at the end of the day.",
        rows: [
          { a: "Consultation", b: "₹500", c: "#4a74ff" },
          { a: "Dressing", b: "₹150", c: "#4a74ff" },
          { a: "GST", b: "Included", c: "#ffe14d" },
          { a: "Total", b: "₹650", c: "#ff2d2d" },
        ],
      },
      {
        name: "Reports",
        sub: "Your clinic at a glance",
        title: "This month",
        badge: "Oct 2026",
        badgeBg: "#ffe14d",
        desc: "Patients, revenue, no-show rate and busiest hours, on your phone, whenever you want them.",
        rows: [
          { a: "Patients seen", b: "412", c: "#4a74ff" },
          { a: "Revenue collected", b: "₹2.1L", c: "#4a74ff" },
          { a: "No-shows", b: "Down vs last month", c: "#ffe14d" },
          { a: "Busiest hour", b: "10–11 am", c: "#ff2d2d" },
        ],
      },
    ];
    base.tabs = tabData.map(function (t, i) {
      var on = i === ti;
      var o = {};
      for (var k in t) o[k] = t[k];
      o.cls = on ? "on" : "";
      o.pressed = on ? "true" : "false";
      o.op = on ? 1 : 0;
      o.ty = on ? 0 : 14;
      o.pe = on ? "auto" : "none";
      o.hidden = on ? "false" : "true";
      o.pick = function () {
        self.setState({ tab: i });
      };
      return o;
    });

    base.feats = [
      {
        t: "Appointments & queue",
        x: "Online and walk-in bookings with token numbers.",
        bg: "#4a74ff",
        d: "M8 2v4 M16 2v4 M3 10h18 M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z",
      },
      {
        t: "Patient records",
        x: "Visits, vitals, reports and history in one place.",
        bg: "#ffe14d",
        d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8a4 4 0 1 0 0 8",
      },
      {
        t: "Digital prescriptions",
        x: "Templates, Hindi and English, print or WhatsApp.",
        bg: "#ff2d2d",
        d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M9 15h6 M12 12v6",
      },
      {
        t: "Billing & GST",
        x: "Invoices with every visit; cash, UPI and card.",
        bg: "#4a74ff",
        d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1z M8 8h8 M8 12h8 M8 16h5",
      },
      {
        t: "WhatsApp reminders",
        x: "Automatic reminders that cut no-shows.",
        bg: "#ffe14d",
        d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z",
      },
      {
        t: "Pharmacy & stock",
        x: "Track medicines, batches and expiry dates.",
        bg: "#ff2d2d",
        d: "M10.5 20.5 3.5 13.5a4.95 4.95 0 1 1 7-7l7 7a4.95 4.95 0 1 1-7 7z M8.5 8.5l7 7",
      },
      {
        t: "Online booking page",
        x: "A booking link for your website and Google profile.",
        bg: "#4a74ff",
        d: "M12 2a10 10 0 1 0 0 20a10 10 0 1 0 0-20 M2 12h20 M12 2a15.3 15.3 0 0 1 4 10a15.3 15.3 0 0 1-4 10a15.3 15.3 0 0 1-4-10a15.3 15.3 0 0 1 4-10",
      },
      {
        t: "Reports",
        x: "Patients, revenue and trends on your phone.",
        bg: "#ffe14d",
        d: "M3 3v18h18 M19 9l-5 5-4-4-3 3",
      },
    ];

    var ppd = st.ppd || 40,
      mins = st.mins || 3;
    base.ppd = ppd;
    base.mins = mins;
    base.setPpd = function (e) {
      self.setState({ ppd: parseInt(e.target.value, 10) });
    };
    base.setMins = function (e) {
      self.setState({ mins: parseInt(e.target.value, 10) });
    };
    var hours = Math.round((ppd * mins * 26) / 60);
    base.hours = String(hours);
    base.extra = String(Math.round(hours * 6));
    var days = hours / 8;
    base.daysOff =
      days >= 1
        ? "about " + Math.round(days) + (Math.round(days) === 1 ? " working day" : " working days")
        : "a few evenings";

    var open = st.open === undefined ? 0 : st.open;
    var fq = [
      {
        q: "Can I move my existing patient records?",
        a: "Yes. We import records from Excel and most common clinic software during setup, at no extra cost. [confirm]",
      },
      {
        q: "Is patient data safe?",
        a: "Data is encrypted, backed up daily, and only people you authorise can see it. You own your data and can export it any time. [confirm details]",
      },
      {
        q: "Does it work if the internet goes down?",
        a: "[Describe offline behaviour here, e.g. the front desk can keep checking patients in and it syncs when you’re back online.]",
      },
      {
        q: "Do you provide training?",
        a: "Yes. Clinics in Patna get in-person setup and staff training; elsewhere we train your team over video.",
      },
      { q: "Is there a contract?", a: "No lock-in. Plans are monthly, and you can start with a free trial." },
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

    var dc = st.docs || "1";
    base.docOpts = ["1", "2–5", "6–15", "15+"].map(function (l) {
      return {
        label: l,
        cls: l === dc ? "on" : "",
        pressed: l === dc ? "true" : "false",
        pick: function () {
          self.setState({ docs: l });
        },
      };
    });
    base.setName = function (e) {
      self.setState({ name: e.target.value });
    };
    base.setClinic = function (e) {
      self.setState({ clinic: e.target.value });
    };
    base.sent = !!st.sent;
    base.notSent = !st.sent;
    var first = (st.name || "").trim().split(" ")[0];
    base.sentName = first ? ", " + first : "";
    base.sentClinic = (st.clinic || "").trim() || "your clinic";
    base.submit = function (e) {
      if (e && e.preventDefault) e.preventDefault();
      self.setState({ sent: true });
    };
    base.reset = function () {
      self.setState({ sent: false });
    };
    return base;
  }
}

export default Component;
