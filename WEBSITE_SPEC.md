# Applotie Website — Full Rebuild Spec

Source: `github.com/Applotie/applotie_website` @ `main` (commit `5cfc3cf`), captured 2026-10-26.
Purpose: everything needed to recreate the site (layout, design system, every page's sections and copy) in any stack, including plain HTML/CSS.

Text in `[brackets]` is a placeholder in the live site too (prices, founder name, photos). Keep it as a placeholder or ask the owner.

---

## 1. Business facts

| Field | Value |
|---|---|
| Legal name | Applotie Technologies (brand: "Applotie") |
| What | Web development + digital marketing studio |
| Location | Patna, Bihar, India (25.59°N 85.14°E) |
| Founded | 2019 |
| Phone / WhatsApp | +91 7250 20 4488 (`tel:+917250204488`, `https://wa.me/917250204488`) |
| Email | hello@applotie.com |
| Social | LinkedIn `https://in.linkedin.com/company/applotie`, Instagram `https://www.instagram.com/applotie` |
| Site URL | https://www.applotie.com |
| Studio hours | [Mon–Sat, 10am–7pm IST] |
| Clients | Meddolic, Snappy India, Kharakia Metals, Surangan, JMD Sales, Fry Zone, Joy Joy, T&S Infra |
| Stats | 178+ projects shipped since 2019 · 20+ businesses we grow with · 8× average client growth · 95% clients who stay |
| Tagline / rule | "We don't do average." · "Let's make your phone ring." · "Made in Patna" |

Voice: plain English, confident, slightly playful, short sentences, outcome-focused ("more enquiries, bookings and sales"), no jargon, honest ("No honest agency can guarantee #1"). British spelling (optimise, colour). Rupees (₹). Every service page targets "<service> in Patna" for local SEO.

---

## 2. Design system

### 2.1 Colours (the live palette — `app/site.css`)
| Token | Hex | Use |
|---|---|---|
| paper | `#ffffff` | page background |
| ink | `#111111` | text, outlines |
| ink-muted | `#5c5c66` | secondary text (`.muted`, `.lead`) |
| zest (red) | `#ff2d2d` | brand red: accents, WDA panel, curtain, scroll bar, tape 1 |
| zest-cta | `#e11d1d` | primary button bg (darker red for 4.8:1 contrast) |
| zest-deep | `#d11a1a` | eyebrow labels (`.eb`), link hover |
| cobalt | `#2f5bff` | footer, dark panels, mobile menu, button hover, featured package, chips "on" |
| lagoon | `#4a74ff` | live-dot, illustrations, secondary accent |
| sun (yellow) | `#ffe14d` | text selection, CTA on cobalt, tape 2, highlights, stars |
| line | `#ececf1` | borders, dividers, chips, field borders |

Logo colours: `#ff5a36` (rounded square), `#ffc531` (sun circle), `#00a88f` (pill), `#1c1b33` (wordmark ink). (`globals.css` has an older ivory/graphite palette that is effectively unused by the public pages.)

Rule of thumb: white pages, ink text, red for energy, cobalt as the "dark" surface (there is no black section — dark = cobalt `#2f5bff`), yellow for small pops.

### 2.2 Typography (Google Fonts)
| Role | Font | CSS var | Used for |
|---|---|---|---|
| Display | **Bricolage Grotesque** | `--font-display` | all headings, big numbers, marquee, tapes (`.disp`) |
| Body | **Figtree** | `--font-body` | body copy, buttons |
| Label | **JetBrains Mono** | `--font-label` | eyebrows/labels: 12px/16px, 600, `letter-spacing:.08em`, UPPERCASE (`.lbl`; `.lbl-l` = weight 500) |
| Hand | **Caveat** | `--font-hand` | handwritten sticky-note asides, weight 600 (`.hand`) |

Type scale:
- `.h1x` clamp(50px, 7.4vw, 112px) / 0.95, 800, `-0.04em`
- `.h2x` clamp(40px, 5vw, 68px) / 1, 800, `-0.03em`
- `.h3x` clamp(26px, 2.6vw, 34px) / 1.12, 800, `-0.02em`
- `.h4x` 22px / 28px, 700, `-0.01em`
- `.stmt` (statement paragraph) clamp(28px, 3.4vw, 46px) / 1.18, 500, `-0.02em`
- `.lead` 20px / 31px, muted, max-width 560px
- `.big-p` 19px / 30px
- `.num-big` clamp(48px, 5.4vw, 80px) / 0.95, 800, `-0.04em`, tabular numbers
- body 16px / 24px

Headlines are usually split into 2–3 lines, each line wrapped in a mask that "rises" into view.

### 2.3 Layout primitives
- `.wrap` max-width 1600px, centered, side padding `clamp(28px, 4.5vw, 72px)` (20px under 620px)
- `.narrow` max-width 760px
- `.sec` section padding 112px 0 (84px under 980px); `.sec-s` 72px 0
- `.sec-hd` section header: flex, space-between, align bottom, gap 24px, margin-bottom 52px. Left: eyebrow + h2; right: short muted paragraph or "All …" underline link.
- Grids: `.split` 2 equal cols gap 48px · `.g2` 2 cols gap 24 · `.g3` 3 cols gap 20 · `.g4` 4 cols gap 20
- `.panel` border-radius 36px, padding clamp(32px, 5.5vw, 72px) (used with `.dark` = cobalt bg, white text)
- `.box` 1px line border, radius 22px, padding 28px, white
- `.pkg` pricing card: border line, radius 26px, padding 32px, flex column gap 22px. `.pkg.feat` = cobalt bg, white text, with a "we recommend" label.
- `.num-row` 4-col stat row, 1px ink top border, cells separated by line borders.
- Eyebrow numbering: sections on a page are labelled `(01) What we do`, `(02) Selected work`, … in red mono.

Breakpoints: `1100px` (hide nav clock, g4→2 cols) · `980px` (nav links → burger, split/g2/g3 → 1 col, footer → 2 cols, stats → 2 cols) · `620px` (g4/footer → 1 col, hide WhatsApp float, `.hide-sm` hidden, buttons wrap).

### 2.4 Components
- **Buttons** `.btn`: pill (radius 999px), min-height 54px, padding 0 26px, 600 weight, icon gap 10px. `.btn-sm` 46px.
  - `.btn-z` primary: red `#e11d1d` / white → hover cobalt. On cobalt surfaces it becomes yellow/ink → hover red.
  - `.btn-o` outline: inset 1.5px ink → hover cobalt fill.
  - `.btn-i` cobalt → hover red. `.btn-p` white → hover yellow.
  - All buttons: white diagonal shine sweeps across on hover; `scale(.97)` on press; arrow icon nudges up-right `translate(3px,-3px)`.
- **Underline link** `.ul`: 600 weight, inline arrow; underline grows left→right on hover. `.ul-s` = always-visible faint underline.
- **Chip** `.chip`: pill, 44px, 1px line border, 15px/600. `.on` = cobalt filled. Used for filters/selectors.
- **Tag** `.tag`: 28px, radius 8px, line border, 13px/600; hover tilts.
- **Area pill** `.area`: neighbourhood chips (hover → cobalt, lift).
- **FAQ accordion**: question row 76px, 21px/600, round 40px "+" button on the right that turns cobalt on hover and rotates when open; answer expands via grid-rows transition; rows separated by line borders.
- **Form field** `.field`: label 14px/600 above input; input 50px min, radius 8px, line border; focus = ink border + 3px soft ring; label turns red on focus.
- **Live dot** `.live`: 8px lagoon dot with pulsing ring (used before "Patna 10:42 AM", "Live", "WhatsApp us").
- **Icon circle** `.ic`: 48px round, coloured bg, rotates on card hover.
- **Hand note**: Caveat text, often on a yellow sticky (`rounded-2xl`, slight rotation) with a hand-drawn SVG arrow pointing at something.
- **Card hover**: `.lift` rises 6px with soft shadow; image `.zoom` scales 1.04.

### 2.5 Motion (respect `prefers-reduced-motion`: everything off)
- Page-load **curtain**: full-screen red panel with app-icon pops in, then slides up (0.65s).
- Red 3px **scroll progress bar** fixed at top.
- Scroll reveals (GSAP + Lenis smooth scroll): `.rv` fade + rise 22px; `.rvm` headline lines rise from a mask; `.clipin` images unclip from `inset(22% 0 0 0 round 22px)`.
- Hero entry: staggered `.in` / `.popin` with delays .08–.9s; hand-drawn underline `draw` stroke animation.
- Marquees: infinite horizontal scroll (42s; tapes 28s/34s reversed), pause on hover.
- Floating shapes `floaty` (8px bob, 5s), `wiggle`, spinning badge.
- Easing everywhere: `cubic-bezier(0.22, 1, 0.36, 1)`; springy pops `cubic-bezier(0.34, 1.56, 0.64, 1)`.

### 2.6 Brand assets (`public/`)
- `brand/applotie-lockup.svg` (logo for light bg, nav height 32px) · `brand/applotie-lockup-on-ink.svg` (for cobalt/dark) · `brand/applotie-mark.svg` · `brand/applotie-app-icon.svg` (favicon: ink rounded square with the 3 shapes)
- Logo idea: "a little app screen made of three shapes: a rounded square, a sun and a pill" + wordmark "applotie".
- Case-study screenshots: `Meddolic-Applotie.webp`, `SnappyIndia-Applotie.webp`, `KhakiaMetals-Applotie.webp`, `Surangan-Applotie.webp`
- Studio photos: `Studio-photo-1.webp`, `Studio-2.webp`, `Studio-3.webp`, `Studio-4.webp`; person: `Applotie-rahul.webp`
- Hero video: `Applotie-Hero-Film-v2-1080p60.mp4`
- `Applotie-Technologies-logo.png`
- Every .webp also exists as .png.

---

## 3. Global chrome (every public page)

Order: skip link → scroll progress bar → curtain → **Navbar** → `<main>` → **Tapes** → **Footer** → **Floating actions**.

### 3.1 Navbar (sticky, white 92% + 12px blur)
- Padding 20px vertical, shrinks to 12px and gains a bottom line after scrolling 480px.
- Left: logo. Centre links (15px/500, text "rolls" to a red copy on hover; active page has a 5px red dot above): **About · Services ▾ · Products ▾ · Work · Journal**.
- **Services dropdown** (640px wide white panel, radius 24px, 2-col grid; each item = 42px coloured rounded icon + title + one-liner):
  - Web development — Websites that bring in work (red)
  - App development — Android & iOS apps (lagoon)
  - SEO services — Rank first on Google (cobalt)
  - Performance marketing — Google & Meta ads that pay back (yellow)
  - Reputation management — Reviews & online trust (line grey)
  - Branding & design — Logos & brand identity (red)
  - Footer row: "All services →" + hand note "not sure? we'll help you pick"
- **Products dropdown** (360px): featured card with a mini app-screen illustration, red "NEW" badge, **Applotie Clinic** — "Clinic management software for appointments, records and billing"; then "All products — Ready-made software from our studio".
- Right: live dot + "PATNA 10:42 AM" (live IST clock, mono label; hidden <1100px) + red "Start a project ↗" small button.
- **Mobile (<980px)**: round burger (2 lines). Opens a full-screen **cobalt** menu: on-ink logo + X; huge display links (40px, 800) Home/About/Services/Products/Work/Journal staggering up; a "Services" sub-list of outlined pills (6 services + Applotie Clinic); yellow "Start a project" button; "● Patna <clock> · hello@applotie.com".

### 3.2 Tapes (between page and footer)
170px band; bottom half cobalt. Two crossed marquee ribbons (60px high, display 24px/800 uppercase):
- Yellow tape (rotated 2.5°, reverse): "Let's build something loud ★ Start a project ★ Say hello ★ hello@applotie.com ★"
- Red tape (rotated −3°, on top): "We don't do average ✱ Websites ✱ Apps ✱ SEO ✱ Ads that pay back ✱ Brands people remember ✱ Made in Patna ✱"

### 3.3 Footer (cobalt, white text)
- Top row: giant "**Let's make your phone ring.**" (clamp 44–88px, 800) + yellow "Start a project ↗" button.
- 4-column grid (1.6fr 1fr 1fr 1fr), top border white 15%:
  1. On-ink logo · "Web development, apps and digital marketing for growing businesses. Made in Patna, Bihar." · copy-email pill: "hello@applotie.com [Copy]" (→ "Copied ✓")
  2. **Services**: the 6 services
  3. **Studio**: Work, Products, About, Journal, Contact
  4. **Say hello**: +91 7250 20 4488, WhatsApp, LinkedIn, Instagram
- Bottom bar: "© 2026 Applotie Technologies" · "● PATNA <clock> · 25.59°N 85.14°E" · Privacy · Terms · Back to top ↑

### 3.4 Floating actions (appear after 480px scroll, bottom-right)
White pill "● WhatsApp us" (hidden on mobile) + 56px cobalt round back-to-top button with a yellow progress ring that fills as you scroll.

### 3.5 WhatsApp form behaviour
All forms submit by opening WhatsApp (`wa.me/917250204488?text=…`) with a message: "Hi Applotie, I'd like to talk about a project." + each field "Label: value" + "Sent from /path". There is no email backend.

---

## 4. Sitemap

```
/                                          Home
/about                                     About
/services                                  Services overview
/services/web-development-in-patna         Service 01
/services/app-development-in-patna         Service 02
/services/seo-services-in-patna            Service 03
/services/performance-marketing-in-patna   Service 04
/services/reputation-management-in-patna   Service 05
/services/branding-agency-in-patna         Service 06
/products                                  Products
/products/clinic-management-software       Applotie Clinic
/projects                                  Work / case studies
/blog, /blog/[slug]                        Journal (posts from MongoDB via /admin)
/contact                                   Contact
/privacy, /terms                           Legal
404                                        "Page not found" — "The page you were looking for doesn't exist or has moved."
/admin/*                                   Blog CMS (login, list, create/edit posts) — not public
```

---

## 5. Pages

### 5.1 Home `/`
Meta title: "Applotie Technologies | Web Development & Digital Marketing Agency in Patna"
Description: "Applotie is a web development company and digital marketing agency in Patna, Bihar. Websites, apps, SEO, performance marketing, reputation management and branding that bring in customers."

Sections in order:

**1. Hero** — 2-col grid (1.12fr / 1fr, gap 64px), padding 30px 0 64px; small floating coloured shapes in the background.
- Status pill: "● **Good morning** · Booking projects for **November**" (greeting by visitor's clock: night owl / morning / afternoon / evening; "Welcome back" for return visitors; next month).
- H1 (3 masked lines): "Websites, Apps, / Marketing that / bring you **customers.**" — last word rotates every 2.8s with a hand-drawn red underline: customers. → patients. → students. → diners. → buyers. → users.
- Lead text changes with the word (see "Made for" below).
- "MADE FOR" chips (click to pick; choice saved in localStorage): Any business · Clinics · Coaching & schools · Restaurants · Real estate · Startups. Each sets word / lead / CTA label:
  - Any business — customers. — "We plan, build and grow your digital presence as one connected system, so every visitor has a clear path to becoming an enquiry." — CTA "Start a project"
  - Clinics — patients. — "Show up when people nearby search for a doctor, and make booking an appointment effortless." — "Get more appointments"
  - Coaching & schools — students. — "Fill your batches with admissions from parents and students who are already searching." — "Fill your next batch"
  - Restaurants — diners. — "Turn searches and scrolls into table bookings and orders, straight from your own channels." — "Get more bookings"
  - Real estate — buyers. — "Put your projects in front of serious buyers, and route every lead to your sales team fast." — "Get serious buyers"
  - Startups — users. — "Launch fast, learn faster, and grow with a product people actually want to use." — "Launch with us"
- Buttons: red [CTA label ↗] + outline "See our work".
- Right: **"Your growth engine"** card (480×380, cobalt, floating): header "YOUR GROWTH ENGINE" + "● Live"; left column "Channels": Google Ads (red dot), SEO (lagoon dot), Social (white dot); red dots flow along curved paths into a mini white "Your website" mock (browser dots, red hero bar, grey lines, blue button) which pulses; a toast "+1 new enquiry" pops; result box "Enquiries". Hand note with arrow: "this is the bit that makes your phone ring".

**2. Hero film** — full-width rounded video (`Applotie-Hero-Film-v2-1080p60.mp4`), muted loop, autoplays when on screen; white pill controls "Pause/Play" and "Sound off/on".

**3. Marquee "Trusted by"** — mono label + scrolling display-font client names separated by ✱: Meddolic, Snappy India, Kharakia Metals, Surangan, JMD Sales, Fry Zone, Joy Joy, T&S Infra.

**4. Intro + stats** — `.stmt`: "We're a web development and digital marketing studio in Patna. We help growing businesses *stop guessing online and start* getting found, getting chosen and getting calls." (middle part muted). Then `.num-row` of 4 count-up stats (01–04): 178+ Projects shipped since 2019 · 20+ Businesses we grow with · 8× Average client growth · 95% Clients who stay with us.

**5. "We don't do average"** — big red panel (radius 44px):
- White pill "● OUR ONE RULE"
- Giant headline (clamp 60–196px, 0.86 line-height): "We don't do" / "**average**." — "average" is outline text (3px white stroke) with a yellow hand-drawn strike-through; lines slide in from opposite sides on scroll.
- Hand "so we do" + cobalt pill sticker "**exceptional.**" (rotated −5°, pops in) + spinning circular text badge "WE DON'T DO AVERAGE ✱ NOT EVER ✱".
- 3 cards (radius 26px, tilt on hover), each struck-through "before" → bold "after":
  - 01 · Websites — ~~Websites that get scrolled past.~~ → Websites people remember.
  - 02 · Marketing — ~~Ads that quietly burn money.~~ → Ads that pay for themselves.
  - 03 · Brands — ~~Brands that blend in.~~ → Brands people talk about.

**6. (01) What we do** — header "One team to build / and grow you online." + "Six services, one team in Patna. Hire us for one or all six. They work best together, but each stands on its own."
Accordion rows (border-top each; grid 72px number / name in display / tags right). Hover or click expands: description + "Explore <service> →" + a small looping illustration.
| # | Name | Tags | Description | Illustration |
|---|---|---|---|---|
| 01 | Web development | Websites · Web apps · CMS | Fast, clear business websites and web platforms, built with SEO, speed and tracking from day one, so visitors turn into enquiries. | browser mock with bars building |
| 02 | App development | iOS · Android · Flutter | Mobile apps people actually enjoy using, from the first sketch to the app store and every update after. | phone with scrolling screens |
| 03 | SEO services | Technical · Content · Local | Get found by people who are already searching for what you sell, in Patna and well beyond it. | growing bar chart |
| 04 | Performance marketing | Google · Meta · CRO | Google and Meta campaigns connected to landing pages and tracking, so you can see what every rupee brings back. | 3 filling progress bars: Google Ads/Leads, Meta Ads/Leads, Landing page/Conversion |
| 05 | Reputation management | Reviews · Google profile · ORM | More genuine five-star reviews, thoughtful replies to every one, and a Google profile that makes people trust you before they call. | "4.8 ★★★★★" + review lines |
| 06 | Branding & design | Logo · Identity · Guidelines | A name, logo and visual identity people remember, applied consistently everywhere from your signboard to your Instagram. | 3 floating brand shapes |

**7. (02) Selected work** — "Work that moves / the numbers." + "All case studies →".
- Big card: Meddolic screenshot (clip reveal, zoom on hover) with overlay badge "**4×** revenue" and tags Brand/Website/Social/Ads; below in split: "MEDDOLIC · BRAND, WEBSITE, SOCIAL & ADS" / h3 "Built the brand from the ground up, then grew revenue 4×." | "Brand identity, a website built to sell, always-on social and performance marketing, run by one team pulling in the same direction." + "Read the story →".
- 2-col: Snappy India (screenshot; "SNAPPY INDIA · PERFORMANCE MARKETING" / "Turned ad spend into 6× sales." / big "6×" sales) · Kharakia Metals (screenshot; "KHARAKIA METALS · PRESENCE & REPUTATION" / "Gave an established metals business the online presence it deserved.").

**8. (03) How we work** — cobalt `.panel`: "We don't just deliver. / We think." + "Five steps, one team, no hand-offs between agencies. Here's what working with us looks like."
5 step tabs (grid of 5; active = white with a red progress line filling over 5s, auto-advances): 
| # | Step | Text | You get |
|---|---|---|---|
| 01 | Think | Strategy first. We learn your business, your customers and your numbers, then decide what will actually move them. | A growth plan and clear priorities |
| 02 | Make | Design built to perform: clear pages, fast apps and campaigns made to convert, not just to look good. | Designs and a clickable prototype |
| 03 | Build | We develop with speed, SEO and tracking built in from day one, not bolted on after launch. | Your live website or app |
| 04 | Connect | Ads, SEO, content and your site work as one system, so every visitor has a path to enquire. | Campaigns and conversion tracking |
| 05 | Keep | We measure, learn and improve every month. It is why 95% of our clients stay with us. | Monthly reports and ongoing growth |
Panel body: step text large (display) left, "YOU GET" box with icon right.

**9. (04) The people behind it** — split: left team photo placeholder ("[Team photo] — A candid shot of the team at work in the studio. Real faces, not stock.") with hand sticker "our studio, Patna"; right: "From Patna / to the wider web." · "We started Applotie in 2019 with a simple belief: serious digital work shouldn't only be for big-city companies with big-city budgets." · (muted) "You shouldn't need five different partners to build, launch and grow. So strategy, design, development and marketing sit in one team, and you talk to the people actually doing the work." · founder sign-off "[Founder name] — Founder, Applotie Technologies" · "Meet the team →".

**10. (05) In their words** — rotating testimonial (every 7s, "01 / 04" counter), huge display quote with “ ”, big stat + name/role; selector pills with initials avatar.
| Quote | Stat | Name, role |
|---|---|---|
| Within four months our organic traffic took off and qualified leads nearly doubled. They understood the tech and our business. | +160% organic traffic | Rahul Sharma, Founder & CEO, GrowthCore |
| Applotie turned our website into a much faster, more effective sales channel. | 3× enquiries in six months | Priya Mehta, Marketing Director, NovaBuild |
| From strategy to development, everything was handled with clarity. Our new platform gave the team real time back. | −40% manual work | Amit Verma, Co-Founder, FinEdge Solutions |
| We moved from inconsistent leads to a predictable acquisition channel we can actually plan around. | +120% qualified leads a month | Neha Singh, Business Head, UrbanNest |

**11. (06) From the journal** — "Notes on getting / found and chosen." + "Read the journal →". 3 cards (230px coloured image block with a big display glyph, "CATEGORY · X MIN READ", h4 title):
- A — App development · 8 min — How to choose an app development company (without regretting it)
- M — Marketing · 6 min — What "measurable" digital marketing actually means for a local business
- 5 — Web · 5 min — Five things that quietly stop your website from getting enquiries

**12. (07) Questions** — split: left "Good questions, / straight answers." + "Can't find yours? Message us on WhatsApp and a real person will reply."; right FAQ:
- How much does a website cost? — It depends on what you need. Business websites start from [₹ STARTING PRICE]. After a free call you get a fixed, transparent proposal with no surprises.
- How long does it take? — A typical business website takes 2–6 weeks. Apps and larger platforms are planned and delivered in phases.
- Do you look after the site after launch? — Yes. We stay on for updates, security, speed and fixes, so your site keeps working as hard as it did on day one.
- Can you run our Google and Meta ads? — Yes. We plan, run and optimise campaigns, with tracking set up so you can see exactly what each rupee brings back.
- Do you work with startups? — Often. We help startups go from idea to launch, usually starting with a lean first version and growing from there.

**13. (08) Let's talk** — red `.panel` CTA, 2 cols: left "Have an idea? Let's build it." + "Tell us a little about what you need. We'll come back with questions, next steps and a clear proposal." + big links phone & email. Right: yellow hand sticker "we read every single one" over a white form card "Start a project": Your name · Phone or WhatsApp · What do you need? (Website / Mobile app / SEO / Google / Meta ads / Not sure yet) · Anything else we should know? · cobalt "Send enquiry". Success state: "Thanks, <name>, we've got it. Someone from the team will call or WhatsApp you soon to talk it through." + "Send another".

### 5.2 About `/about`
Meta: "About Applotie | A Digital Agency Made in Patna"
1. **Hero** — breadcrumb Home / About · "Hi, we're / Applotie" · "A digital studio in Patna building websites, apps and marketing that earn their keep. Small enough to care, sharp enough to compete with anyone." · buttons "Work with us" / "What we do" · hand note "made in Patna, since 2019".
2. **Statement + numbers** — "We believe a business in Patna deserves the same quality of digital work as one in Bengaluru or London. So that's what we build, for clients here and well beyond." Stats: 2019 Founded (In Patna, Bihar) · 178+ Shipped (Websites, apps and campaigns) · 20+ Partners (Businesses we grow with) · 95% Retention (Clients who stay with us).
3. **(01) Our story** — "Seven years, / one idea." · "We didn't set out to be an agency. We set out to make good digital work accessible. The agency happened along the way." Timeline:
   - 2019 · Start — An idea built around affordability. — Applotie began in Patna with a simple goal: make serious digital work available to businesses that big agencies overlook.
   - 2020 · Build — From ideas to digital products. — We grew into web and app development, helping businesses turn ideas into useful, scalable and conversion-focused products.
   - 2022 · Grow — Technology became only part of the story. — A great website means little if nobody finds it. We brought SEO, content and digital strategy into every project.
   - 2023 · Perform — Digital presence became digital performance. — Performance marketing and conversion work joined the team, so we could own the whole path from first click to enquiry.
   - 2026 · Today — Building what comes next. — Today we are one connected team for strategy, technology and growth, working with businesses in Patna and beyond.
4. **(02) What we do** — "Six crafts, / one team." · "Most businesses juggle a web developer, an ad agency and a designer who never talk to each other. We do all of it under one roof, so every piece pulls in the same direction." · one card per service in its accent colour · "And our own product: Applotie Clinic — Clinic management software made in Patna. Appointments, patient records, prescriptions, billing and WhatsApp reminders in one simple app. Built by the same team that builds for our clients."
5. **(03) What we believe** — "How we like / to work." 4 values: Outcomes over outputs (A pretty website is not the goal. More enquiries, bookings and sales are.) · One team, no hand-offs (Strategy, design, code and marketing in one room, so nothing gets lost between agencies.) · Straight talk (Clear prices, honest timelines and plain English. If something will not work, we will say so.) · Patna-proud, globally sharp (Rooted here, held to the standards of the best studios anywhere.)
6. **(04) Who we work with** — "From a 1959 dance legacy / to a noodle maker." · "Manufacturers, an infrastructure firm, consumer brands and a dance institution founded in 1959. Different businesses, one goal: more of the right customers." · client-name wall; hovering a name slides up its story (on touch the story shows under the name) · "(hover a name)" · "Read the case studies".
7. **(05) Life at the studio** — "Where the work happens." · photo grid (Studio-photo-1, Studio-2/3/4) · hand note "yes, there's always chai".
8. **(06) Careers** — "Good learners are always welcome." · "We don't always have an opening, but we always like meeting designers, developers and marketers who care about their craft. Send us your work and a few lines about you." · "Say hello".

### 5.3 Services `/services`
Meta: "Digital Marketing & Web Development Services in Patna | Applotie"
1. **Hero** — "Everything you need / to grow online" · "Six digital services from one team in Patna. Use one on its own, or connect them into a system that keeps bringing in work." · jump chips Web · Apps · SEO · Ads · Reviews · Branding.
2. **Service rows** — 6 alternating split rows ("0N / Name", h2 promise, paragraph, tags, "Explore …", illustration):
   - 01 / Web development — Websites that turn visitors into enquiries. — Business websites, landing pages and web platforms that load fast, read clearly and are built to rank and convert from day one. — Business websites · Landing pages · Web apps · CMS · E-commerce
   - 02 / App development — Apps people actually enjoy using. — iOS and Android apps, internal tools and platforms, designed around real users and built to scale as you grow. — iOS & Android · Flutter · React Native · Internal tools · MVPs
   - 03 / SEO & growth — Get found by people already searching. — Technical SEO, local search and content that ranks, so the right people find you without you paying for every click. — Technical SEO · Local SEO · Content · Google Business Profile (illustration: search bar "best clinic near me")
   - 04 / Performance marketing — Ads that pay for themselves. — Google and Meta campaigns joined up with landing pages and tracking, so every rupee has a job and you can see it doing it. — Google Ads · Meta Ads · Landing pages · Conversion tracking · CRO (illustration: "Campaign results" bars)
   - 05 / Reputation management — Be the business with the better reviews. — Online reputation management in Patna: more genuine five-star reviews, a reply to every one, and a Google profile that makes people trust you before they call. — Review generation · Review replies · Google Business Profile · Monitoring (illustration: reply "Thank you, Ritu! See you soon.")
   - 06 / Branding & design — A brand people remember. — Branding in Patna for businesses ready to look as good as they are: strategy, logo, colours, type and guidelines, applied everywhere. — Brand strategy · Logo design · Visual identity · Guidelines · Packaging
3. **Recommender** — "Not sure where to start? Tell us what you want more of." Chips → "We'd start with <service>" + hand note + reason + "See how it works":
   - More enquiries → Web development (start here) — If people visit but don't call, the website is the leak. We fix the foundation first, then send traffic to it.
   - Show up on Google → SEO & growth (slow, steady, compounding) — You want people who are already searching to find you, without paying for every click.
   - Leads this month → Performance marketing (fastest results) — Ads are the quickest way to put you in front of buyers, as long as the landing page and tracking are right.
   - Launch an app → App development (let's sketch it) — We start with a lean first version, get it in people's hands, and grow it from what they actually use.
   - Better reviews → Reputation management (trust is the new SEO) — People read reviews before they call. We help you earn more genuine ones and reply to every review like a pro.
   - Stand out → Branding & design (let's make you memorable) — If you look like everyone else, people choose on price. A distinct brand gives them another reason to pick you.
   - All of the above → Monthly growth partnership (our favourite kind) — One team runs the whole engine: site, search, ads and reporting, pulling in the same direction every month.
4. **Engagement models** — "Ways to work with us / Pick the pace that suits you." 3 cards: Project (A fixed scope, a fixed price and a launch date. Best for a new website, app or relaunch. — Typically 2–12 weeks) · **Monthly growth** [we recommend] (An ongoing team for SEO, ads, content and improvements, with a monthly report on what moved. — Rolling monthly) · Launch partner (For startups: we build a lean first version, launch it and grow it with you, step by step. — Phased).

### 5.4 Service page template (all 6 share it)
Section order: **Hero → Pains ("Sound familiar?", 3 quote cards) → What's included / pillars (6 icon cards) → Interactive tool → Process (4–5 steps joined by a zigzag line) → Case study → Packages (3 `.pkg`, middle = cobalt "we recommend") → Local SEO block → FAQ → Next-service card.**
- Hero: breadcrumb Home / Services / <Service in Patna>; eyebrow "Service 0N · <keyword>"; 3-line H1; lead; 2 buttons; 3 checkmark trust points; a product-style visual with a hand note.
- Local block: eyebrow "<Service> in Patna", h2, 2 SEO paragraphs, "Serving businesses across Patna" + area pills: Boring Road, Bailey Road, Kankarbagh, Patliputra Colony, Rajendra Nagar, Fraser Road, Ashiana Nagar, Danapur, Gola Road, All of Bihar.
- Next-service card links in a loop: Web → App → SEO → Ads → Reputation → Branding → "Back to the start: Web development".

#### 01 Web development — `/services/web-development-in-patna`
Meta: "Web Development Company in Patna | Website Design & Development | Applotie"
- Hero: "Service 01 · Web development company in Patna" · "Web development / in Patna that / brings in work" · "Fast, clear websites for Patna businesses, built around one job: turning the people who visit into people who call, book or buy." · [Plan your website] [See a case study] · Typical timeline 2–6 weeks · Fixed price · You own everything · hand "fast on a ₹8,000 phone too".
- Pains "Most websites look fine. They just don't work.": "People visit, but nobody calls." (Visitors can't tell what you do, or how to take the next step. We fix the message and the path.) · "It's painfully slow on phones." (Most of your visitors are on mobile data. Every extra second loses some of them. We build fast by default.) · "I can't even change a phone number." (You get a simple editor and a short training, so small changes never need a developer again.)
- Included "Everything a website needs to perform. — Not just design and code. The thinking before it and the tracking after it.": Strategy & sitemap · Words that sell · Custom design · Fast, modern build · SEO & tracking built in · Easy to update.
- Planner "What does your site need?" checkboxes → estimate in weeks: Core pages (Home, about, contact) · Service pages · Blog or news · Enquiry & WhatsApp · Online bookings · Online shop · Hindi + English. Notes: "SEO foundations and tracking, always included" · "Fixed price, agreed before we start" · [Send this to the team].
- Process "Four steps, no surprises.": Week 1 Discover · Weeks 1–2 Design · Weeks 2–5 Build · Launch + Launch & grow.
- Case: Meddolic — "A new brand and website that helped grow revenue 4×." (also built Fry Zone, Joy Joy, T&S Infra).
- Packages "Clear prices, no hidden extras." (tech: Next.js, React, Vue, Node.js, PHP, Headless CMS): Starter [₹] (Up to 5 pages, Mobile-first design, SEO basics & Google Business setup) · **Business** [₹] (Up to 15 pages + blog, Copywriting & conversion design, Editor, tracking & training) · Custom "Let's talk" (Custom features & integrations, Phased delivery, Ongoing support).
- Local h2: "A web development company in Patna that thinks like a business."
- FAQ: cost in Patna ([₹ range]) · Do I own the website? (Yes — domain, code, content, accounts in your name) · Redesign? · Works on phones? · After launch?

#### 02 App development — `/services/app-development-in-patna`
Meta: "App Development Company in Patna | Android & iOS Apps | Applotie"
- Hero: "App development / in Patna for apps / people keep opening" · "Android and iOS apps designed in Patna, from a first sketch to the app store and every update after. Built around real users, ready to scale as you grow." · [Talk about your app] [What can we build?] · iOS & Android · One codebase · Phased delivery · phone mock "Booking confirmed — Done ✓".
- Pains "Most apps fail quietly. Yours won't.": Built before anyone tested it · Too big for version one · Launched, then abandoned.
- Types explorer "Pick a kind of app." (phone preview switches, iPhone/Android toggle): Customer app (retail, restaurants, D2C) · Booking app (clinics, salons, coaching, gyms) · Internal tool (operations, field teams, logistics) · Marketplace (property, services, local commerce).
- Included "The whole journey, one team.": Product thinking · UX & UI design · iOS & Android · Backend & admin · Store launch · Analytics & care.
- Process "Small steps, real feedback.": Sketch · Prototype · Build (two-week sprints) · Launch · Grow.
- Case slot "Your app here — Got an app idea? It could be our next case study." + toolkit: Flutter, React Native, React, Node.js, Python, MongoDB, Firebase, App Store & Play Store.
- Packages "Start lean. Grow from there.": Prototype [₹] 2–3 weeks · **Version one** [₹] [8–12] weeks · Ongoing [₹/month].
- Local h2: "Mobile apps built in Patna, used anywhere."

#### 03 SEO — `/services/seo-services-in-patna`
Meta: "SEO Services in Patna | Local SEO Company | Applotie"
- Hero: "SEO services / in Patna that / put you first" · "Technical SEO, local SEO and content that ranks, so people in Patna who are already looking for what you sell find you, not your competitor." · [Preview your listing] [Get a free SEO check] · Monthly reporting · No lock-in · Patna & beyond · visual: mock Google results with "Your business" at #1 (cobalt) above Competitor A/B/C, hand "that's you".
- Pains "If you're not on page one, you're invisible.": Competitors show up. We don't. · We tried SEO. Nothing happened. · We have no idea what's working.
- Pillars "How we get you to the top.": Technical (Speed & Core Web Vitals, Structured data, Crawl fixes) · Local (Google Business Profile, Reviews strategy, Local pages & citations) · Content (Keyword & intent research, Service & landing pages, Monthly articles).
- SERP preview tool: inputs Business name / What you do / City or area → live Google listing with Call now / Directions / Book online + title & description length meters.
- Process "Patient work, compounding results.": Month 1 Audit · Months 1–2 Fix · Month 2 onward Grow · Every month Report.
- Case: Surangan (dance institution est. 1959).
- Packages "Pick a pace. Change it any time.": Local [₹/month] · **Growth** [₹/month] · Audit only [₹ once].
- Local h2: "An SEO company in Patna that searches here too."

#### 04 Performance marketing — `/services/performance-marketing-in-patna`
Meta: "Performance Marketing Agency in Patna | Google & Meta Ads | Applotie"
- Hero: "Performance / marketing in Patna. / Every rupee, a job" · "Google Ads and Meta Ads for Patna businesses, joined up with landing pages and tracking, so you know exactly what your ad spend brings back." · [Plan your budget] [Audit my ads] · Google & Meta · Your ad accounts · Weekly optimisation · cobalt dashboard "Campaigns · this month · Live" (Leads, Cost/lead, ROAS, Revenue, Spend; toast "+1 lead from Google"; hand "example dashboard, yours will be real").
- Pains "Spending on ads, guessing on results?": We boost posts and hope. · Clicks are up, calls aren't. · Our agency just sends screenshots.
- Channels: Google Search · Meta Ads · Retargeting · Landing pages.
- Budget planner: What do you sell? (Local service / Big purchase / Products online / …) + monthly budget slider → suggested split across Google Search / Meta Ads / Retargeting.
- Process "Launched in a week, improved every week.": Week 1 Set up · Week 2 Launch · Every week Optimise · Every month Report.
- Case: Snappy India 6× sales · [x.x]× ROAS.
- Packages "Simple fees. Your ad accounts." (ad spend paid directly to Google/Meta): One channel [₹/month] · **Full funnel** [₹/month] · Ads audit [₹ once].
- Local h2: "A performance marketing agency in Patna that reports in rupees, not likes."

#### 05 Reputation management — `/services/reputation-management-in-patna`
Meta: "Online Reputation Management in Patna | Google Reviews & ORM | Applotie"
- Hero: "Reputation / management in Patna / that earns trust" · "People read your reviews before they ever call you. We help Patna businesses earn more genuine five-star reviews, reply to every one, and look trustworthy everywhere they're found." · [How many reviews do I need?] [Get a free review audit] · Genuine reviews only · A reply to every review · Monthly report · mock Google profile "Your Business — Clinic · Boring Road, Patna" with reviews and owner reply "Thank you, Anjali!…".
- Pains "Your reviews are doing your selling.": One bad review is all people see. · Competitors have five times our reviews. · We never know what people are saying.
- Included: Review generation · Replies to every review · Google Business Profile · Monitoring & alerts · Negative review handling · Monthly reputation report.
- Review calculator: current rating, number of reviews, target → "You need N five-star reviews".
- Reply preview: pick 1–5 stars → sample owner reply.
- Promise (callout): "We never post fake reviews. Ever." — hand "real > fake".
- Process "Four steps to a better reputation.": Week 1 Audit · Week 2 Set up · Every day Respond · Every month Report.
- Case: Kharakia Metals.
- Packages "Simple plans. Cancel any time.": Starter · **Growth** · Multi-location "Let's talk".
- Local h2: "Online reputation management for Patna businesses."

#### 06 Branding — `/services/branding-agency-in-patna`
Meta: "Branding Agency in Patna | Logo Design & Brand Identity | Applotie"
- Hero: "Branding in Patna / for brands people / remember" · "Strategy, logo design and a complete visual identity for Patna businesses ready to look as good as they are, applied everywhere from your signboard to your Instagram." · [Try the brand mixer] [Talk about your brand] · Strategy first · Full guidelines · You own every file · swatch cards "Sun #ffe14d", "Lagoon #4a74ff", hand "hover me".
- Pains "If you look like everyone, you compete on price.": Our logo was made in an afternoon. · Every flyer looks different. · People confuse us with competitors.
- Included "A brand you can actually use.": Brand strategy · Logo design · Colour & typography · Brand guidelines · Print & packaging · Social templates.
- Brand personality mixer: type your business name + pick a personality → live mockups (Business card, Instagram post "Now open in Patna", Signboard); hand "a sketch, not a logo, real work starts with strategy".
- Our own brand: "We built our own brand the same way." + palette Red / Cobalt / Yellow / Ink.
- Process "Think first. Then make it beautiful.": Weeks 1–2 Discover · Week 2 Define · Weeks 3–5 Design · Week 6 Deliver.
- Case: T&S Infra.
- Packages "From a logo to a full brand.": Logo [₹] · **Identity** [₹] · Full brand "Let's talk".
- Local h2: "A branding agency in Patna for businesses ready to grow."

### 5.5 Products `/products`
Meta: "Products | Clinic Management Software & More from Patna | Applotie"
1. Hero — "Software we built / so you don't / have to" · "Ready-to-use software from the Applotie studio in Patna, designed for how businesses in India actually work." · hand "same team, same standards. we don't do average here either."
2. Featured product — "NEW · Product 01 · Healthcare" · **Applotie Clinic** · "Clinic management software for appointments, patient records, prescriptions, billing and WhatsApp reminders. All in one place, on any device." · tags Appointments / Patient records / Billing & GST / WhatsApp reminders / Reports · [Explore Applotie Clinic] [Book a free demo] · app mock (sidebar Today/Patients/Prescriptions/Billing/Reports; "Today's appointments — Dr. [Name] · 18 booked"; rows New/Waiting/Done; stat tiles; "WhatsApp reminder sent ✓").
3. Why — "Built by a studio, not a call centre.": Made and supported in Patna · Tailored when you need it · Fair, simple pricing.
4. Vote — "Help us decide what to build next." (pick a product idea; hand "yes, we actually read these"; thanks state with "Keep me posted" / "Change my vote").
5. Custom — "Need something specific? We build custom software too." → "See app & software development".

### 5.6 Applotie Clinic `/products/clinic-management-software`
Meta: "Clinic Management Software in Patna | Applotie Clinic"
Hero ("Clinic software / that gives you / time back"; [Book a free demo] [Take the tour]; Phone, tablet & PC · Hindi & English · Setup & training in Patna; app mock "Good morning, Doctor — 18 appointments today" + WhatsApp bubble "Reminder: your appointment is tomorrow at 10:30 AM. Reply 1 to confirm."; hand "fewer no-shows, automatically") → **Built for** marquee (General clinics, Dental clinics, Eye care, Physiotherapy, Paediatrics, Diagnostic centres, Multi-specialty) → **Product tour** tabs (Appointments, Patient records, Prescriptions, Billing, Reports; hand "click around, it doesn't bite") → **Features** "Less paperwork. More medicine." (Appointments & queue, Patient records, Digital prescriptions, Billing & GST, WhatsApp reminders, Pharmacy & stock, Online booking page, Reports) → **Time-saved calculator** (patients/day × minutes saved × 26 days) → **A day with Applotie Clinic** (5 timeline moments; hand "spoiler: calmer") → **Pricing** "Simple plans. Try it free first." (Solo · **Clinic** · Hospital "Let's talk"; [x]-day free trial) → **Local + doctor quote placeholder** → **FAQ** → **Demo form** "See it running in your clinic." (Your name, Clinic name, Phone or WhatsApp, How many doctors? → "Book my demo").

### 5.7 Work `/projects`
Meta: "Our Work | Case Studies from a Digital Agency in Patna | Applotie"
1. Hero — "Work that moves / the numbers" · "Brands, websites, social media and campaigns for businesses in Patna and beyond. Here are some of the stories we're proudest of." · hand "tap "read the story" on any project".
2. Highlights strip — 4× revenue for Meddolic · 6× sales for Snappy India · 1959 Surangan's legacy, now online · 06 services across 8 brands.
3. Filters (chips: All · Branding · Websites · Performance marketing · Social media · Presence & reputation) + project grid. Each card expands to "Full case study": The brief / What we did / The result. End card: "this space is saved for you — Your brand could be the next story on this page. [Start a project]".

| Client | Industry | Title | What we did | Result | Link |
|---|---|---|---|---|---|
| Meddolic | [Industry] | Built the brand from the ground up, then grew revenue 4×. | Brand identity and guidelines, a conversion-focused website, always-on social media and performance marketing, run by one team. | Revenue grew 4×, with every channel pulling in the same direction. | |
| Snappy India | [Industry] | Turned ad spend into 6× sales with performance marketing. | Full-funnel Meta and Google campaigns, constant creative testing, sharper landing pages and conversion tracking from first click to checkout. | Sales grew 6× at a [x.x]× return on ad spend. | |
| Kharakia Metals | Metals | Gave an established metals business the online presence it deserved. | Search and Google Business Profile optimisation, consistent business listings, a review programme and professional replies to reviews. | A stronger, more trustworthy presence wherever customers and partners look them up. | kharakiagroup.com |
| Surangan | Dance institution · est. 1959 | Brought a dance legacy from 1959 to a new generation online. | Search visibility, a refreshed Google profile and storytelling content that puts the institution's heritage front and centre. | A stronger online presence that helps new students and families discover Surangan. | surangan.in |
| JMD Sales | [Industry] | Kept JMD Sales visible, active and on-brand across social media. | A monthly content calendar, on-brand creatives, regular posting and community management. | A consistent, professional social presence that keeps the brand top of mind. | |
| Fry Zone | [Industry] | Built a bold, mobile-first website for Fry Zone. | Website design and development: mobile-first, fast to load and easy to update. | A bold, modern website that gives the brand a proper home online. | |
| Joy Joy | Noodles manufacturer | Designed a website for a noodles maker with joy in its name. | Website design and development with a clear product showcase and simple paths to enquire. | A bright, professional website that matches the brand's personality. | |
| T&S Infra | Infrastructure | Built a solid brand and website for an infrastructure company. | Brand identity, including logo, colours and typography, plus a website that presents its projects and capabilities. | A consistent, credible brand across every touchpoint, from site boards to the website. | |

### 5.8 Contact `/contact`
Meta: "Contact Applotie | Start a Project with a Digital Agency in Patna"
1. Hero — "Let's talk" · "Tell us a little about what you're building. Two quick steps, under a minute. You don't need to have it all figured out." + live status by IST time ("We're in the studio right now — Send a note and expect a reply today." / "We're not in yet" / "The studio's closed for the night — Leave a note. It'll be the first thing we read when we're back.").
2. Two-step form (left) + direct contacts (right):
   - Step 1 "The project": What can we help with? Pick any. (Website, Mobile app, SEO, Google / Meta ads, Not sure yet) · Rough budget (Under ₹50k, ₹50k – 2L, ₹2L – 5L, ₹5L+, Not sure) · When would you like to start? (As soon as possible, In 1–3 months, Just exploring) → Next step.
   - Step 2 "About you": Your name · Company (optional) · Phone or WhatsApp · Email · Tell us about it · checkbox "Reply on WhatsApp instead of a call" → Back / Send to the team.
   - Success: personalised note signed "— the Applotie team", buttons See our work / Start over.
   - Right column "Or reach us directly": WhatsApp (Usually the fastest way to reach us) · Phone (Call during studio hours) · hello@applotie.com (For briefs, files and longer notes) · Applotie studio, Patna, Bihar [Directions] map card with hand "we're here!" · Studio hours.
3. What happens next — "No sales script. Just a conversation.": We read your note (usually same working day) · A 30-minute call (free, no obligation) · A clear proposal (scope, timeline, fixed price in plain English).

### 5.9 Journal `/blog` and `/blog/[slug]`
Meta: "Journal | Web, SEO & Marketing Notes from Patna | Applotie"
- List: Hero "The journal — Practical notes on websites, apps, search and marketing. Written by the people doing the work, for people running businesses." → Featured post (hand "start here", "Read the article") → search box + category chips + grid (empty state: "…but it sounds like a good topic. Tell us what you'd like us to write about.") → Newsletter "The monthly note — One useful email a month. That's it." (Email address / Subscribe; success "you're in!").
- Post page: breadcrumb Home / Journal; header (category, date, reading time, "Share on WhatsApp", copy link); cover; sticky "In this article" TOC + Markdown body; in-article CTA "Planning a project? We'll tell you honestly what it should include, and what to leave out. [Talk to us]"; "Was this helpful? Yes, helpful / Not really"; "Keep reading — More from the journal. [All articles]".
- Post fields (MongoDB `BlogPost`): title, slug, excerpt, content (Markdown), featuredImage, author, category, tags[], status (draft/published), publishedAt, seo {metaTitle, metaDescription, keywords[], canonicalUrl, ogImage}. Card colours cycle through the brand palette.

### 5.10 Legal
`/privacy` (last updated September 5, 2026; "In short:" summary + "On this page" TOC). Sections: Information we collect · How we use your information · Cookies and analytics · How we share information · Data retention · Data security · Third-party websites · Your privacy rights · Children's privacy · Changes to this policy · Contact us (Applotie Technologies, Patna, Bihar, India). "We do not sell or rent your personal information."
`/terms` currently reuses the same section list as privacy (noindex) — write real terms when rebuilding.

---

## 6. SEO
- Each page: unique title + description (above), canonical, Open Graph (`en_IN`, site name "Applotie Technologies", 1200×630 share image), Twitter large card. Theme colour `#ff2d2d`.
- JSON-LD on every page: `LocalBusiness` + `ProfessionalService` (name, url, logo, telephone +91-7250204488, email, address Patna/Bihar/IN, areaServed Patna + Bihar, sameAs LinkedIn/Instagram) and `WebSite`.
- `robots.js` + `sitemap.js` generated. `lang="en-IN"`.

## 7. Original tech (for reference)
Next.js 16 (App Router, JavaScript only — no TypeScript), React 19, Tailwind v4 (barely used; most styling is hand-written CSS in `app/site.css` + `app/pages.css`, scoped per page via `.page-home`, `.page-about`, `.page-svc-web`, …), GSAP ScrollTrigger + Lenis for motion, MongoDB/Mongoose + Zod for the blog admin, `next/font` for the 4 Google fonts.

## 8. Rebuild notes for a plain HTML/CSS version
- Load fonts: `https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@500;700;800&family=Figtree:wght@400;500;600;700&family=JetBrains+Mono:wght@500;600&family=Caveat:wght@600&display=swap`
- Reuse the class names in §2 (`.wrap .sec .sec-hd .lbl .eb .h1x .h2x .btn .btn-z .btn-o .chip .box .pkg .panel .dark .split .g2 .g3 .g4 .num-row .faqq`) so this spec maps 1:1.
- Pure CSS covers: sticky nav, hover dropdowns (`:hover`/`:focus-within`), marquees/tapes, the WDA panel, FAQ (`<details>`), hover effects, keyframe entrances. JS is only needed for: mobile menu toggle, rotating hero word, live clock, step/testimonial auto-rotation, count-up, calculators/planners, WhatsApp form submit, scroll reveals (IntersectionObserver is enough instead of GSAP).
- Simplest faithful build = Home + About + Services + Work + Contact, with the 6 service pages from the §5.4 template.
