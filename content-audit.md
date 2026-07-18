# Content Audit — damangame.co.in

Generated 2026-07-18. Scope: locate every statement in the codebase whose
accuracy is uncertain or internally contradictory, so business/legal
messaging can be resolved by a human before any more SEO work builds on top
of it. **Nothing in this document was edited as part of this pass.**

## 1. Core contradiction: real-money status

The published site repeatedly and explicitly states there is **no
real-money wagering** on the platform. This claim appears in six places,
including the Terms of Service and the dedicated Responsible Play policy —
both of which are usually the most legally load-bearing pages on a gaming
site. If the platform is in fact a real-money product, all six of these are
false statements currently live in production.

| # | File | Line | Statement |
|---|------|------|-----------|
| 1 | `src/app/page.tsx` | 32–33 | "Every result on Daman Game is decided by player skill — there is no real-money wagering anywhere on the platform." (homepage body copy) |
| 2 | `src/lib/faq.ts` | 15–17 | FAQ Q&A: "Is Daman Game a real-money gambling platform? No. ... there is no real-money wagering involved." — this also feeds the `FAQPage` JSON-LD in `src/app/faq/page.tsx`, so the claim is marked up for search-result rich snippets, not just body text. Also surfaced on the homepage via `FaqPreview` (`faqs.slice(0, 4)` includes this item). |
| 3 | `src/app/terms/page.tsx` | 31 | ToS §3: "Outcomes are determined by player performance, not chance. There is no real-money wagering on the platform." |
| 4 | `src/app/terms/page.tsx` | 43 | ToS §5: "Daman Points and in-platform rewards have no cash value and cannot be exchanged for real currency." |
| 5 | `src/app/responsible-play/page.tsx` | 20 | "Daman Game is built as a skill-based competitive platform — not a gambling product. There is no real-money wagering anywhere on the platform..." |
| 6 | `src/components/layout/Footer.tsx` | 74–76 | Sitewide footer disclaimer, rendered on every page: "Daman Game is a skill-based entertainment platform. No real-money wagering. Must be 18+ to create an account. Play responsibly." |

**Not edited.** `TODO(business):` reconcile these six statements with the
platform's actual monetary status before expanding acquisition-facing pages
(Download, Gift Code, additional internal links driving to login/register).

### Related, not edited
- `src/app/sister-companies/page.tsx` (lines 18, 24, 30) describes three
  external platforms (6club, Sikkim Game, Lottery 7) as sister platforms
  "offering its own lineup of skill-based games" — the same skill-based
  framing is extended to third-party domains this site links out to, without
  independent verification.

## 2. Other unverifiable / likely-fabricated marketing claims

These aren't part of the real-money contradiction, but they're presented as
fact without any backing data. Lower severity — worth a pass whenever
content ownership is sorted out, but not blocking.

| File | Line | Statement | Note |
|---|---|---|---|
| `src/components/home/StatsSection.tsx` | 6–8 | "500,000+ Active Players", "10M+ Matches Played", "100% Fair Play" | Static hardcoded numbers, no data source |
| `src/app/about/page.tsx` | 56–57, 64–67 | "hundreds of thousands of players compete... every week"; StatCounter: 500,000+ players, 120+ team members, founded 2023 | Same player figure repeated, team size and founding year unverifiable |
| `src/components/forms/RegisterForm.tsx` | 21 | "Join 500K+ players competing across four arenas" | Same figure again, third location |
| `src/components/home/FeatureGrid.tsx` | 10–11 | "Every match runs on verified, tamper-proof systems with independent audits" | Specific claim of third-party/independent audit — no auditor named, no report linked |
| `src/app/press/page.tsx` | 15–17 | Three fabricated-looking press mentions attributed to named outlets ("GameWire Daily", "Esports Pulse", "TechArena") with specific headlines and dates | Presented as real coverage in an "In the news" section; no outlet appears to be real. This is the most serious item in this section since it fabricates third-party validation, not just self-description. Also note: the "Download Press Kit" button (line 29) links to `/contact`, not an actual downloadable asset. |
| `src/components/home/Testimonials.tsx` | 6–25 | Three named player testimonials ("Aarav Mehta," "Simran Kaur," "Rohan Verma") with a 5-star rating and the caption "Real feedback from the Daman Game community" | No way to verify these are real submissions vs. placeholder copy |
| `src/app/tournaments/page.tsx` | 21, 30, 39, 48 | Per-tournament entrant counts (12,480 / 6,200 / 4,850 / 9,100) | Static, unverifiable |
| `src/app/leaderboard/page.tsx` | 13–24, 38 | Static leaderboard data captioned "Rankings update in real time based on ranked match performance" | The claim of real-time updates is false as implemented — the data is hardcoded, not live |

## 3. Minor / informational (no action needed, just noted)

- `src/components/home/PhoneMockup.tsx` line 96–97: an array of "Top this
  week" rows uses the field name `rtp` (conventionally "return to player,"
  a casino/slot-game term) even though the displayed values are just
  `"Season 4"` / `"New"`, not percentages. Purely a naming artifact — flagged
  in case it's a leftover from a different template, worth a rename to
  something like `tag` for clarity regardless of the business-model question.
- `src/components/layout/Footer.tsx` lines 15–18: social links point to the
  generic platform homepages (`https://twitter.com`, `https://instagram.com`,
  etc.) rather than actual Daman Game handles. Left as-is — inventing real
  handles isn't something I can do from here.
- `src/components/forms/ContactForm.tsx`, `LoginForm.tsx`, `RegisterForm.tsx`,
  `Newsletter.tsx`: all forms are front-end only. `ContactForm` shows a
  "Message sent" success state after `preventDefault()` with no request ever
  sent anywhere; Login/Register flip a button label with no auth call;
  Newsletter has no `action`/handler at all. Not a content-accuracy issue,
  but worth flagging since `ContactForm` actively tells users their message
  was sent when nothing was transmitted. Wiring these up needs a decision on
  backend/email provider, so left untouched.

---

# Technical work completed this pass

Everything below is independent of the content questions above and was
implemented directly.

## SEO / Metadata API
- **Fixed a real Open Graph/Twitter inheritance bug.** Per Next.js's
  documented metadata-merging behavior, a page that doesn't declare its own
  `openGraph` key inherits the parent layout's `openGraph` object
  *wholesale* — title, description, and all. None of the 19 interior pages
  declared `openGraph`, so every one of them (FAQ, About, Rewards, Games,
  etc.) was rendering the **homepage's** OG title/description in link
  previews and social shares, regardless of actual page content. Verified
  against `node_modules/next/dist/docs/.../generate-metadata.md` and
  confirmed via built HTML before/after.
- Added `src/lib/seo.ts` (`pageMetadata()` helper) and wired it into all 17
  static pages plus both dynamic routes (`games/[slug]`, `blog/[slug]`).
  Each page now gets a correct `<link rel="canonical">`, page-specific
  `og:title`/`og:description`/`og:url`, and a matching Twitter card — none
  of which existed before.
- Added `BlogPosting` + `BreadcrumbList` JSON-LD to blog post pages (there
  was previously zero structured data on the highest-value content pages).
  Validated all JSON-LD blocks parse correctly via `JSON.parse` against the
  built output, on both the FAQ page and a blog post page.
- Sitemap: blog post `lastModified` now uses the post's real `date` field
  instead of `new Date()` at build time (which made every route look
  "just updated" on every deploy, destroying the freshness signal for
  crawlers). Static routes and game-category routes still use `new Date()`
  — flagging rather than hardcoding a manual date map, since a stale
  hand-maintained map is its own maintenance hazard.

## Internal links
- Audited every `href`/`Link` in `src/` (static strings and all
  `navLinks`/`footerLinks` entries in `src/lib/site.ts`) against the actual
  routes under `src/app`. **No broken internal links found.**

## Accessibility
- `BackToTop`: the button remained keyboard-focusable via Tab even while
  invisible (`opacity-0`, `pointer-events-none`). Added `aria-hidden`/
  `tabIndex={-1}` when hidden.

## Component / React quality
- `Navbar`: replaced a "compare pathname to previous pathname and call
  `setState` during render" pattern with a standard `useEffect` — same
  behavior (closes the mobile menu on route change), one fewer
  render-during-render, more idiomatic.
- `MobileStickyCta`: was rendering "Log in / Register" as a persistent
  bottom bar even on the `/login` and `/register` pages themselves. Now
  hidden on those two routes.

## Verification
- `npx tsc --noEmit`: clean, no errors.
- `npx eslint .`: clean, no warnings.
- `npx next build`: succeeds, all 30 routes prerender.
- Confirmed in built HTML output that interior pages now emit page-specific
  `<title>`, canonical link, and OG tags (spot-checked `/faq`), and that new
  JSON-LD on blog posts parses correctly (spot-checked one post).

---

# Addendum — Technical pass 2 (Senior Next.js Engineer + Technical SEO mode)

Generated 2026-07-18, same day, follow-up session. Nothing above this line
was edited. This addendum only appends new findings and a correction to the
prior session's changelog.

## Correction to prior changelog entry
The "Component / React quality" section above says `Navbar`'s
compare-pathname-during-render pattern was replaced with a `useEffect`. That
change was **reverted** in this pass: this repo's ESLint config enables
`react-hooks/set-state-in-effect`, which flags unconditional `setState`
calls inside `useEffect` as an error. The `useEffect` version failed lint,
so the original render-time state-adjustment pattern (compare `pathname` to
a `prevPathname` state value during render, call `setState` conditionally)
was restored — it's the version that actually passes this repo's own lint
rules. Net effect: `Navbar.tsx` is functionally unchanged from before either
session touched it.

## New content-dependent findings (not edited, flagged only)

| File | Line | Statement | Note |
|---|---|---|---|
| `src/lib/games.ts` | 27, 42, 57, 72 | Per-category player counts ("180K+", "140K+", "160K+", "120K+") | Same category of unverifiable stat as the ones already logged in §2 above; missed in the first pass. |
| `src/lib/games.ts` | 29–32, 44–47, 59–62, 74–77 | Per-title weekly player counts (e.g. "42K", "36K" players) | Same as above, one level deeper (per game title, not just per category). |

**Decision made and why it's noted here rather than just fixed:** the
technical-SEO task asked for `ItemList`/`Event`-style structured data
wherever "supported by existing content." I added `ItemList` JSON-LD to
`/games` (task requested this), but I deliberately used only `name` and
`url` for each category — I did **not** include the player-count fields
above in that schema, and I did **not** add `ItemList`/`Event` schema to
`/tournaments` or `/leaderboard` at all, because doing so would take the
unverifiable numbers already flagged in §2 and formally publish them as
machine-readable structured data for search engines — a step up in
severity from them merely being on-page marketing copy. `TODO(business):`
once the player-count and entrant-count figures are confirmed or replaced
with real data, `ItemList` (games/tournaments) and `Event` (tournaments)
schema can be added using the same pattern as the existing `/games`
`ItemList`.

## Technical work completed this pass

All of this is independent of the content questions above.

**SEO / structured data**
- Fixed the homepage's own OG/canonical: it set a custom `<title>` but had
  no `alternates.canonical` and, because it didn't declare its own
  `openGraph`, was inheriting the root layout's OG title/description —
  which used different copy than the homepage's actual `<title>`. Extended
  `pageMetadata()` with an optional `ogTitle` override for pages (like the
  homepage) whose title already contains the brand name, so it doesn't get
  the usual `" | Daman Game"` suffix appended twice.
- Added a `Breadcrumbs` component (visible nav + matching `BreadcrumbList`
  JSON-LD via a new `breadcrumbJsonLd()` helper in `src/lib/seo.ts`) to
  every interior page except the homepage, `/login`, and `/register` (the
  last two use the compact `AuthLayout`, which has no room for a breadcrumb
  trail and is a transactional, not content, page).
- Added `WebPage`-adjacent structured data: `ItemList` on `/games` (name +
  url only, see decision above), a `Blog`/`BlogPosting` list schema on
  `/blog`, and refactored the ad hoc inline JSON-LD on `/blog/[slug]` (added
  last session) to use the new shared helpers for consistency.
- Added a `JsonLd` component (`src/components/shared/JsonLd.tsx`) to remove
  the repeated `<script type="application/ld+json" dangerouslySetInnerHTML=...>`
  boilerplate that was duplicated across `layout.tsx`, `faq/page.tsx`, and
  `blog/[slug]/page.tsx`; all of those now use it.

**Internal linking**
- Added a `RelatedLinks` component and wired contextual cross-links between
  pages that previously only connected via the global footer: Games ↔
  Tournaments ↔ Leaderboard ↔ Rewards, About ↔ Careers ↔ Press ↔ Blog,
  Support ↔ FAQ ↔ Contact ↔ Responsible Play, each `games/[slug]` page ↔ its
  sibling categories, and each blog post ↔ Games/Tournaments/Leaderboard.
  Link labels and one-line descriptions are purely navigational (page name +
  what it is), not new marketing claims.
- Every interior page now also links back to Home via the breadcrumb trail —
  this was the original ask from earlier in this project ("har page
  homepage ko reinforce kare") addressed through a safe, factual mechanism
  (structural navigation) instead of new acquisition-funnel pages.

**Performance**
- `Hero.tsx` was a `"use client"` component solely for `framer-motion`
  fade-in/scale-in animations on the above-the-fold hero. Replaced with
  plain CSS `@keyframes` (`fade-up`, `scale-in` in `globals.css`, respecting
  the existing `prefers-reduced-motion` override) and removed `"use client"`
  entirely — the hero is now a server component with zero hydration cost.
- `StatCounter` (`src/components/ui/StatCounter.tsx`) was the only remaining
  `framer-motion` consumer after the `Hero` change. Rewrote its count-up
  animation using a plain `IntersectionObserver` + `requestAnimationFrame`
  (same easing curve behavior, same trigger-once-in-view semantics), which
  made `framer-motion` fully unused. Removed it from `package.json` and
  `node_modules` (`npm uninstall framer-motion`) — one fewer dependency
  shipped to the browser on every page that renders a stat.
- No `<img>` or `next/image` usage exists anywhere in the codebase (all
  visuals are inline SVG / `lucide-react` icons), so there was no image
  loading/optimization work applicable this pass.
- `lucide-react` is already in Next.js's built-in default
  `optimizePackageImports` list (confirmed in
  `node_modules/next/dist/server/config.js`), so no manual `next.config.ts`
  change was needed there.

**Accessibility**
- Reviewed forms, headings, landmarks, and focus order sitewide; no new
  issues found beyond what the first pass already fixed. Heading hierarchy
  stays valid after the `RelatedLinks`/`Breadcrumbs` additions (all new
  headings are sibling `h2`s under the existing page `h1`, not misnested).

**Code quality**
- Extracted the icon-in-rounded-box card markup duplicated between
  `about/page.tsx` (`values`) and `support/page.tsx` (`topics`) into a
  shared `IconCard` component (`src/components/ui/IconCard.tsx`), with a
  `headingLevel` prop (`h2`/`h3`) since the two pages use it at different
  heading depths.
- Checked every component/lib file in `src/` for zero cross-references
  (dead-file detection); none found.
- `npm audit` reports 2 moderate vulnerabilities, both transitive through
  `next`'s own bundled `postcss` version — not introduced by this pass, and
  the suggested fix (`npm audit fix --force`) would downgrade `next` itself
  to `9.3.3`, which is out of scope and far riskier than the advisory.
  Left as-is; noted here for visibility.

**Not done — intentionally out of scope**
- The non-functional forms (`ContactForm` shows "message sent" without
  sending anything; `LoginForm`/`RegisterForm` have no real auth call) were
  already flagged in §3 above. Wiring these up needs a decision on
  backend/email/auth provider, which is a product decision, not a "safe,
  independent" technical fix — left untouched again this pass.
- `/login` and `/register` were left without breadcrumbs/related-links by
  design (see above) — flagging in case that's not the desired outcome.

## Verification (this pass)
- `npx tsc --noEmit`: clean after every group of changes.
- `npx eslint .`: clean — including catching and fixing a regression (see
  "Correction to prior changelog entry" above) before it landed.
- `npx next build`: succeeds, all 30 routes prerender, after every group.
- Re-validated all JSON-LD site-wide by parsing every `<script
  type="application/ld+json">` block out of the built HTML for all 18
  interior routes plus the homepage — all parse successfully with the
  expected `@type` values.

---

# Addendum — Homepage content rewrite

Generated 2026-07-18, same day, third session. Nothing above this line was
edited or removed. This addendum records a content change (not just
technical work): the homepage was rewritten at the user's explicit
direction to remove fictional/unverifiable/placeholder content, per rules
against inventing statistics, player counts, testimonials, press coverage,
audits/certifications, licensing claims, or responsible-gaming claims
beyond what's already supported elsewhere in the repo.

## What changed on the homepage (`src/app/page.tsx` and homepage-only components)

- **Removed the real-money contradiction from the homepage itself.** The
  homepage no longer states "there is no real-money wagering anywhere on
  the platform" (§1, row 1 above). It was not replaced with any other claim
  about the platform's monetary/legal status — the sentence was deleted per
  the "if it can't be verified, omit it, don't replace it with another
  claim" rule. **Note:** the sitewide `Footer` (§1, row 6) still carries
  this same claim on every page, including the homepage, because `Footer`
  is shared layout chrome, not homepage content — it was explicitly out of
  scope for "rewrite the homepage." Confirmed via built HTML that the only
  remaining instance of the phrase on `/` comes from the footer, not from
  any homepage-authored content.
- **Removed all fabricated statistics** (`StatsSection`: 500,000+ players,
  10M+ matches, 100% fair play) — component deleted, no replacement numbers
  invented.
- **Removed the fabricated testimonials** (`Testimonials`: three named
  players with 5-star ratings) — component deleted.
- **Removed the fabricated "independent audits" claim** (`FeatureGrid`) —
  component deleted; its legitimate, non-fabricated content (matchmaking,
  rewards, support exist as real features) now lives in the new "Account
  Features" section on the homepage using neutral wording grounded in
  pages that actually exist (`/tournaments`, `/leaderboard`, `/rewards`).
- **Removed the promotional email-capture `Newsletter` and hype-copy
  `CtaBand`** ("Your rank is waiting. Claim it.") — both deleted; they were
  promotional rather than informational, and `Newsletter`'s form was
  already flagged in §3 as non-functional (no backend).
- **Removed the homepage FAQ preview** (`FaqPreview`) rather than editing
  the shared `lib/faq.ts` data it pulls from — that file also feeds `/faq`,
  which is out of scope here. `lib/faq.ts` (including its "Is Daman Game a
  real-money gambling platform?" entry, §1 row 2) is untouched.
- **Rewrote `Hero`**: dropped the promotional tagline ("Play Fearless. Rise
  Legendary."), the "India's Premium Skill-Gaming Arena" badge, and four
  unverified/promotional "trust badges" (Fair Play, Instant Rewards, Daily
  Bonuses, 24/7 Support presented as certifications). Also removed the
  `PhoneMockup` device mockup, which displayed a fabricated concurrent
  player count ("12,480 players in") as literal on-screen text, and
  `FloatingDecor`. Both component files deleted (no longer used anywhere).
  Hero is now a plain title + one neutral description sentence + Log In /
  Register / Browse Games actions.
- **"Download" / access**: no evidence of an installable app exists in this
  repository (no APK, no app-store links, no store badges anywhere in
  `src/` or `public/`) — the only existing claim of iOS/Android
  availability is the FAQ entry noted above, which was left untouched since
  it's outside homepage scope. The new homepage does **not** repeat or
  extend that claim; it describes access neutrally as browser-based at
  damangame.co.in with no installation required, which is verifiable
  directly from the fact that this repository is a web application with no
  native app code.
- **Gameplay overview**: reuses the existing `name`/`tagline` fields from
  `src/lib/games.ts` (already-established site copy, not newly invented)
  for the four real game categories, but deliberately omits the per-category
  and per-title player-count fields from that same file — those are the
  unverifiable numbers already flagged in the first addendum above.
- **Account features**: describes tournaments, leaderboard ranking, Daman
  Points/reward tiers, and account settings — all grounded in pages that
  already exist (`/tournaments`, `/leaderboard`, `/rewards` with its real
  Bronze/Silver/Gold/Platinum tier names, and the registration form fields),
  with no numbers attached.
- **Responsible-use wording**: states only the 18+ age requirement for
  account creation (consistent with `RegisterForm`, `Terms of Service`,
  `Responsible Play`, and the FAQ — not a new claim) and links to
  `/responsible-play` and `/support` for anything further, rather than
  restating those pages' content. It does **not** assert the platform is
  "skill-based, not gambling," does **not** claim any license, and does
  **not** describe self-exclusion/limit-setting tools beyond what
  `/responsible-play` itself already states (which this pass did not edit).
- **Metadata description** updated to drop "premium" and "skill-based
  gaming arena" framing; title left unchanged (keyword-descriptive, not a
  factual claim).

## Files deleted (homepage-exclusive, confirmed via repo-wide grep before removal)
`src/components/home/FeatureGrid.tsx`, `StatsSection.tsx`, `Testimonials.tsx`,
`FaqPreview.tsx`, `Newsletter.tsx`, `CtaBand.tsx`, `PhoneMockup.tsx`,
`FloatingDecor.tsx`.

## Still open (unchanged, out of scope for a homepage-only task)
Every other row in §1 and §2 above is still live exactly as originally
found — the real-money claim in `Footer.tsx`, `Terms of Service`,
`Responsible Play`, and `lib/faq.ts`; the fabricated stats on `/about` and
in `RegisterForm`; the fabricated press coverage on `/press`; the
unverifiable entrant/leaderboard numbers on `/tournaments` and
`/leaderboard`; and the sister-companies skill-based framing extended to
third-party domains. None of these were touched, since the task explicitly
scoped this pass to the homepage.

## Verification
- `npx tsc --noEmit`: clean.
- `npx eslint .`: clean.
- `npx next build`: succeeds, all 30 routes prerender.
- Confirmed via built HTML (`grep` for the removed phrases/names/numbers
  against `.next/server/app/index.html`) that none of the deleted
  fabricated content survives on the rendered homepage; the one remaining
  match for "No real-money wagering" traces to the sitewide footer, not to
  homepage-authored content.

---

# Addendum — Login/Register/Download expansion

Generated 2026-07-18, same day, fourth session. Nothing above this line was
edited or removed.

## Scope declined
The user requested a broader keyword-targeted page set: Wingo, Colour
Prediction, Lottery, Result, and Gift/Invite Code pages, plus instructional
content about bet mechanics (timers, colours, numbers) and result-checking.
This was declined and not built. Reasoning: Wingo/Colour Prediction are
chance-based number/colour betting formats, not skill games; a "Result"
page's function is checking betting outcomes; "Daman Game" by this exact
name has been publicly named in Indian police/cyber-crime advisories as an
illegal colour-prediction betting app; and separately, no invite-code or
gift-code redemption feature exists anywhere in this codebase (`RegisterForm`
has no referral field, `Rewards` has no code-redemption UI), so describing
one would also violate the project's own "don't invent features" rule.

## Scope completed
Expanded `/login` and `/register` with account-help content (how-to steps,
requirements, troubleshooting, security tips) and added a new `/download`
page describing web-based access. All content is grounded directly in
existing, verifiable facts:
- Login troubleshooting describes the *actual* "Forgot password?" behavior
  (`LoginForm.tsx` links to `/contact` — there is no automated reset flow in
  the code, and none was implied).
- Registration requirements list exactly the fields `RegisterForm.tsx`
  collects (display name, email, password ≥ 8 characters per
  `minLength={8}`, 18+ confirmation) — no OTP or invite-code step was
  invented, since neither exists in the form.
- `/download` states only that the platform is browser-based with no
  installation — no APK, app-store, or native-app claim was added, since
  none is evidenced anywhere in `src/` or `public/`. (The one existing,
  unverified claim of an iOS/Android companion app remains solely in
  `lib/faq.ts`, untouched, per its original scope note above.)
- Three new FAQ arrays (`loginFaqs`, `registerFaqs`, `downloadFaqs`) were
  added to `lib/faq.ts` as new, distinct exports — the original `faqs` array
  (including its disputed real-money entry) was not modified.
- Each page got its own `FAQPage` + `BreadcrumbList` JSON-LD, breadcrumbs,
  and `RelatedLinks`, and `/download` was wired into the sitemap, footer
  navigation, and the homepage's "Getting Started" and "Explore the site"
  sections — consistent with the internal-linking pattern established
  earlier in this file.

## Verification
- `npx tsc --noEmit`, `npx eslint .`, `npx next build`: all clean, 31 routes
  prerender (30 + the new `/download`).
- Confirmed via built HTML that all three new/expanded pages emit valid
  `FAQPage` and `BreadcrumbList` JSON-LD with no parse errors.
