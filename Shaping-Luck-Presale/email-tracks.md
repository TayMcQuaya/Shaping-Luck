# Shaping Luck — Email Track System

> Master reference for all email sequences, user states, and transition logic.
> Mar 5 → Apr 14+ · Phase 1 Private Launch (8 Tracks · 38 Emails)

---

## How It Works

Two people enter from different doors. They take different actions. They end up in different buckets. Every bucket gets a tailored sequence of emails designed to move them toward ONE goal: **show up to the April 1st webinar.**

```
                         ENTRY POINTS
                    ┌──────────┴──────────┐
              Salim's List          John's LinkedIn
             (OpenEXO email)       (DMs → Landing Page)
                    │                      │
                    ▼                      ▼
            ┌──────────────┐      ┌──────────────┐
            │  Landing Page │      │  Landing Page │
            │  Buy │ Register     │  Buy │ Register
            └──┬───┴───┬───┘      └──┬───┴───┬───┘
               │       │             │       │
          ┌────┘   ┌───┘         ┌───┘   ┌───┘
          ▼        ▼             ▼        ▼
       BOUGHT   REGISTERED    BOUGHT   REGISTERED
       (only)    (only)       (only)    (only)
          │        │             │        │
          ▼        ▼             ▼        ▼
       Track C  Track A*      Track D  Track B*

       ───── If they do BOTH ─────────────
                      │
                      ▼
                   Track E
                  (VIP State)
                      │
          ┌───────────┴───────────┐
          ▼                       ▼
    Track F: Countdown      Track G: Post-Webinar
    (Everyone registered)   (Segmented: attendees / no-shows / cold)
                                  │
                            Still unconverted?
                                  │
                                  ▼
                            Track H: Evergreen
                           (1-2x/month · Phase 2 prep)
```

\* Track A and B also serve people who did NEITHER (just on the list). The webinar registration status modifies the CTA within the same track.

---

## The 6 User States

Every person is in exactly ONE state at any time. Actions move them between states.

| #   | State Name      | Source          | Bought Book? | Registered for Webinar? | Their Goal           |
| --- | --------------- | --------------- | :----------: | :---------------------: | -------------------- |
| 1   | **Salim Cold**  | Salim's list    |      No      |           No            | Buy + Register       |
| 2   | **Salim Warm**  | Salim's list    |      No      |           Yes           | Buy the book         |
| 3   | **Salim Buyer** | Salim's list    |     Yes      |           No            | Register for webinar |
| 4   | **John Cold**   | John's LinkedIn |      No      |           No            | Buy + Register       |
| 5   | **John Warm**   | John's LinkedIn |      No      |           Yes           | Buy the book         |
| 6   | **VIP**         | Either          |     Yes      |           Yes           | Show up, get excited |

### State Transitions

```
State 1 (Salim Cold)
  ├── Buys book ──────────→ State 3 (Salim Buyer)
  ├── Registers webinar ──→ State 2 (Salim Warm)
  └── Does both ──────────→ State 6 (VIP)

State 2 (Salim Warm)
  └── Buys book ──────────→ State 6 (VIP)

State 3 (Salim Buyer)
  └── Registers webinar ──→ State 6 (VIP)

State 4 (John Cold)
  ├── Buys book ──────────→ State 3* (John Buyer — uses John voice)
  ├── Registers webinar ──→ State 5 (John Warm)
  └── Does both ──────────→ State 6 (VIP)

State 5 (John Warm)
  └── Buys book ──────────→ State 6 (VIP)

State 6 (VIP)
  └── No further transitions. They're fully converted.
```

\* John buyers who haven't registered technically mirror State 3 but receive John-voice emails.

---

## Email Tracks

### Track A: Salim Non-Buyer (States 1 & 2)

**Voice:** Salim
**Timeline:** Week 1–4 (Mar 5 – Apr 2)
**Entry:** Anyone on Salim's OpenEXO list who hasn't bought the book
**Exit:** Buy → Track C or E. Buy + Register → Track E.

| #   | Send Date    | Subject                                        | CTA (Cold)               | CTA (Warm\*)   |
| --- | ------------ | ---------------------------------------------- | ------------------------ | -------------- |
| 1   | Mar 5 (Wed)  | I've been working on something big             | Book + Webinar           | Book only      |
| 2   | Mar 7 (Fri)  | The real reason I wrote this book              | Book + Webinar           | Book only      |
| 3   | Mar 10 (Mon) | "I wasn't looking for her — but there she was" | Book + Webinar           | Book only      |
| 4   | Mar 12 (Wed) | I want to introduce you to someone             | Webinar + Book           | Book only      |
| 5   | Mar 17 (Mon) | We've been building something                  | Webinar + Book           | Book only      |
| 6   | Mar 19 (Wed) | We're limiting the first wave to 500 people    | Webinar + Book + Urgency | Book + Urgency |
| 7   | Mar 21 (Fri) | [Testimonial / Community Voice]                | Webinar + Book           | Book only      |
| 8   | Mar 24 (Mon) | Last call: $20 book price ends Friday          | Book + Urgency           | Book + Urgency |

\* "Warm" = already registered for webinar. Same email body, just drop the webinar CTA and replace with "You're already registered — see you April 1st."

**Suppression rule:** Immediately suppress on book purchase. Move to Track C (if not registered) or Track E (if registered).

---

### Track B: John Non-Buyer (States 4 & 5)

**Voice:** John
**Timeline:** Week 3–4 (Mar 17 – Apr 2) — compressed start
**Entry:** Anyone who comes through John's LinkedIn and gives email but doesn't buy
**Exit:** Buy → Track D or E. Buy + Register → Track E.

| #   | Send Date | Subject                                               | CTA (Cold)               | CTA (Warm\*)   |
| --- | --------- | ----------------------------------------------------- | ------------------------ | -------------- |
| 1   | Mar 17    | Something I've been working on with Salim Ismail      | Book + Webinar           | Book only      |
| 2   | Mar 19    | The pattern behind the 'luckiest' people I've studied | Book only                | Book only      |
| 3   | Mar 21    | We tested something remarkable                        | Webinar                  | — (skip)       |
| 4   | Mar 23    | Why I'm limiting this to 500 people                   | Webinar + Book + Urgency | Book + Urgency |
| 5   | Mar 24    | Book pre-sale closes Friday — last chance at $20      | Book + Urgency           | Book + Urgency |

\* Same logic as Track A. John's list is compressed — fewer warm-up emails, faster to urgency.

**Suppression rule:** Same as Track A.

---

### Track C: Salim Buyer, Not Registered (State 3)

**Voice:** Salim
**Timeline:** Starts on purchase, runs until webinar registration or Apr 2
**Entry:** Book buyer from Salim's list who hasn't registered for webinar
**Exit:** Register → Track E.

| #   | Timing      | Subject                                 | Goal                                     |
| --- | ----------- | --------------------------------------- | ---------------------------------------- |
| 1   | Immediately | You're in — here's what happens next    | Confirm purchase. Plant webinar seed.    |
| 2   | ~Day 7      | Why I wrote this book (the real reason) | Deepen connection. Soft webinar mention. |
| 3   | ~Day 14     | The experiment that started all of this | Tease app. Create webinar intrigue.      |
| 4   | ~Day 17     | A quick note about April 1st            | Drop webinar link. First real push.      |
| 5   | ~Day 21     | What to expect on April 1st             | Webinar preview. Build anticipation.     |
| 6   | ~Day 23     | Real people. Real luck. Real stories.   | Social proof. Webinar must-attend.       |

**Key rule:** Every email nudges toward webinar registration. No book CTA needed — they already bought. The "something special for people in the room" tease is the $400 founding member offer (never named in email).

**Suppression rule:** On webinar registration, move to Track E.

---

### Track D: John Buyer, Not Registered (State 3 mirror)

**Voice:** John
**Timeline:** Starts on purchase, compressed (John's list activates Week 3)
**Entry:** Book buyer from John's LinkedIn who hasn't registered for webinar
**Exit:** Register → Track E.

| #   | Timing      | Subject                                               | Goal                          |
| --- | ----------- | ----------------------------------------------------- | ----------------------------- |
| 1   | Immediately | Thank you — and mark your calendar                    | Confirm. Plant webinar.       |
| 2   | ~Day 7      | The question I keep coming back to                    | Deepen connection.            |
| 3   | ~Day 14     | We tested something — and the results were remarkable | Tease app. Webinar pull.      |
| 4   | ~Day 17     | April 1st — your link is ready                        | Drop link. Push registration. |

**Suppression rule:** Same as Track C.

---

### Track E: Buyer + Registered — VIP (State 6)

**Voice:** Matches original source (Salim or John)
**Timeline:** From the moment both actions are complete through Apr 2
**Entry:** Anyone who has both bought the book AND registered for the webinar
**Exit:** None — they're fully converted. Just need to show up.

| #   | Timing         | Subject                                        | Goal                                       |
| --- | -------------- | ---------------------------------------------- | ------------------------------------------ |
| 1   | On entry       | [Merge into Track F countdown if < 3 days out] | —                                          |
| 2   | ~1 week before | Something special for the people in the room   | Build anticipation. Tease exclusive offer. |
| 3   | ~3 days before | [Enters Track F countdown]                     | —                                          |

**Key rule:** Lightest touch of any track. They've done everything we asked. Don't over-email them. Just make sure they show up. These people are the most likely $400 founding member converts.

---

### Track F: Webinar Countdown (Everyone Registered)

**Voice:** Salim (primary sender) — or split by source if ESP supports it
**Timeline:** Mar 30 – Apr 1
**Entry:** EVERYONE with `registered = true`, regardless of source or buy status
**Stacks on top of other tracks** — these are additional sends, not replacements.

| #   | Send Date    | Subject                                                   | Notes                                         |
| --- | ------------ | --------------------------------------------------------- | --------------------------------------------- |
| 1   | Mar 30 (Mon) | What to expect on April 1st (and why you should be there) | Agenda tease. Handle "is this worth my time?" |
| 2   | Mar 31 (Tue) | Tomorrow. Seriously — don't miss this.                    | Short. Punchy. Pure nudge.                    |
| 3   | Apr 1 (AM)   | We're live in a few hours                                 | Send 3-4 hours before. Day-of reminder.       |

**For non-buyers in this track:** Emails also include a P.S. with book CTA — "Last chance to grab the book at $20 before the session."

---

### Track G: Post-Webinar (Segmented)

**Voice:** Salim (primary)
**Timeline:** Apr 3 – Apr 14
**Entry:** Entire list — segmented by engagement level (attendees / registered no-shows / cold contacts)
**Exit:** Founding member close → unconverted cold contacts move to Track H.

| #   | Send Date    | Subject                                            | Audience                        | Goal                                                     |
| --- | ------------ | -------------------------------------------------- | ------------------------------- | -------------------------------------------------------- |
| 1   | Apr 3 (Fri)  | Thank you — and about that offer...                | Attendees who didn't buy $400   | Replay key moment. Remind founding offer. Warmest leads. |
| 2   | Apr 3 (Fri)  | You missed something big — here's the replay.      | Registered, didn't attend       | Replay + founding member pitch. They had intent.         |
| 3   | Apr 3 (Fri)  | Something happened this week you should know about | Cold contacts (never acted)     | Event recap as social proof. Replay + $20 book offer.    |
| 4   | Apr 6 (Mon)  | Doors closing tonight.                             | Everyone who hasn't bought $400 | Final founding member close. X/600 spots. Real scarcity. |
| 5   | Apr 9 (Thu)  | The book is still here — but the price is changing | Cold contacts (still no book)   | Last-chance book push. $20 grace period or already $40.  |
| 6   | Apr 14 (Tue) | One thing before I go quiet                        | Cold contacts → Evergreen       | Graceful close. Transition to 1x/month value content.    |

**Segmentation rules:**

- G#1: `attended:yes AND founding:no` — warmest unconverted leads
- G#2: `webinar:registered AND attended:no` — had intent but didn't show
- G#3: `book:non-buyer AND webinar:not-registered` — completely cold
- G#4: `founding:no` (everyone who hasn't bought $400)
- G#5: `book:non-buyer` only
- G#6: `book:non-buyer AND webinar:not-registered AND founding:no` — bridge to evergreen

---

### Track H: Evergreen Nurture (Long-term)

**Voice:** Salim (primary)
**Timeline:** Apr 14+ · 1-2x per month · Ongoing
**Entry:** Anyone who completed Track G without converting (cold contacts, non-buyers)
**Exit:** Re-engage in Phase 2 public launch. Any future purchase moves them to active tracks.

| #   | Timing          | Subject                                         | Goal                                                  |
| --- | --------------- | ----------------------------------------------- | ----------------------------------------------------- |
| 1   | ~Apr 14         | A luck experiment you can try this week         | Pure value. No sell. Rebuild trust after launch push. |
| 2   | ~Apr 28         | What our founding members discovered in week 1  | Social proof from cohort. Plants seeds for Phase 2.   |
| 3   | Monthly ongoing | [Rotating: insights, stories, framework pieces] | Ongoing value drip. Prep for Phase 2 public launch.   |

**Key rule:** NOT a sales sequence. It's thought leadership. Luck framework ideas, community stories, Salim/John insights. Keep the relationship warm for Phase 2 ($500-600 public pricing).

---

## Timeline Matrix

What each state receives, week by week:

```
              Week 1        Week 2        Week 3        Week 4       Post           Ongoing
              Mar 5-7      Mar 10-14     Mar 17-21     Mar 24-31    Apr 3–Apr 14    Apr 14+
──────────────────────────────────────────────────────────────────────────────────────────────
State 1        A#1-2        A#3-4         A#5-7         A#8          G#3,4,5,6      H
(Salim Cold)                + Abundance    + Urgency     + F countdown  (cold path)  (if unconverted)
                             event

State 2        A#1-2        A#3-4         A#5-7         A#8          G#4            —
(Salim Warm)   (no web CTA) (no web CTA)  (no web CTA)  + F countdown  (founding close)

State 3        C#1          C#2           C#3-4         C#5-6        G#1 or G#2     —
(Salim Buyer)                                            + F countdown  + G#4

State 4        —            —             B#1-2         B#3-5        G#3,4,5,6      H
(John Cold)                               + B#3-4       + F countdown  (cold path)  (if unconverted)

State 5        —            —             B#1-2         B#3-5        G#4            —
(John Warm)                  (no web CTA) (no web CTA)  + F countdown  (founding close)

State 6        —            E#2           —             F#1-3        G#1            —
(VIP)          (light touch)                             countdown     (attended)
──────────────────────────────────────────────────────────────────────────────────────────────
```

Note: People move between rows as they take actions. The matrix shows what they receive while in that state. Track G emails are segmented — cold contacts get G#3→5→6 (not G#1/G#2). Unconverted cold contacts flow into Track H evergreen nurture.

---

## Transition Rules — Quick Reference

### On Book Purchase (any state)

1. Immediately suppress from current non-buyer track (A or B)
2. If registered for webinar → move to State 6 (VIP / Track E)
3. If NOT registered → move to Track C (Salim source) or Track D (John source)
4. Send buyer confirmation email (Track C#1 or D#1) immediately

### On Webinar Registration (any state)

1. Add `registered = true` tag
2. If already a buyer → move to State 6 (VIP / Track E)
3. If not a buyer → stay on current track (A or B) but **adapt CTAs** — drop webinar registration CTA, add "You're registered! See you April 1st" note
4. Add to Track F countdown queue (activates Mar 30)

### On Both Actions Simultaneously

1. Move directly to State 6 (VIP / Track E)
2. Send buyer confirmation email
3. Add to Track F countdown queue

---

## ESP Implementation

### Tags (apply to every contact)

```
source:salim          or  source:john
book:buyer            or  book:non-buyer
webinar:registered    or  webinar:not-registered
attended:yes          or  attended:no          (set after Apr 2)
founding:yes          or  founding:no          (set on $400 purchase)
```

### Segments (for sending)

```
Track A  = source:salim AND book:non-buyer
Track B  = source:john AND book:non-buyer
Track C  = source:salim AND book:buyer AND webinar:not-registered
Track D  = source:john AND book:buyer AND webinar:not-registered
Track E  = book:buyer AND webinar:registered
Track F  = webinar:registered (all, stacks on top)
Track G1 = attended:yes AND founding:no
Track G2 = webinar:registered AND attended:no
Track G3 = book:non-buyer AND webinar:not-registered
Track G4 = founding:no (everyone)
Track G5 = book:non-buyer
Track G6 = book:non-buyer AND webinar:not-registered AND founding:no
Track H  = completed Track G AND founding:no AND book:non-buyer
```

### Automation Triggers

```
ON purchase:
  → Set book:buyer
  → Remove from Track A/B automation
  → IF webinar:registered → Add to Track E
  → ELSE → Add to Track C (salim) or Track D (john)
  → Send confirmation email immediately

ON webinar_registration:
  → Set webinar:registered
  → IF book:buyer → Add to Track E
  → Add to Track F queue (scheduled Mar 30 – Apr 1)
  → Update CTA variant in current track (dynamic content or conditional block)

ON webinar_attendance (Apr 1-2):
  → Set attended:yes
  → Used for Track G segmentation (G#1 vs G#2 vs G#3)

ON founding_member_purchase ($400):
  → Set founding:yes
  → Remove from all drip sequences
  → Send founding member welcome

ON Track G completion (Apr 14+):
  → IF book:non-buyer AND founding:no → Add to Track H (evergreen)
  → ELSE → End sequence (they converted or are already engaged)
```

### CTA Variants (Dynamic Content)

Most ESPs support conditional content blocks. Use this to adapt emails:

```
IF webinar:registered
  → Show: "You're registered — see you April 1st ✓"
ELSE
  → Show: "Register for the free live session: → [WEBINAR LINK]"

IF book:buyer
  → Hide book CTA entirely
ELSE
  → Show: "Pre-order for $20: → [PRESALE LINK]"
```

---

## Key Rules

- **No app mention** until Email #5 (and even then, vague)
- **$400 founding member price** is ONLY revealed during the live webinar
- **Book presale ($20)** is the low-friction entry point — closes after Track A #8
- **John's activation starts Week 3** — his list gets a compressed sequence
- **Cap at 500 founding members** — scarcity is real, not manufactured
- **OpenEXO gets 20% rev share** on sales from Salim's list only
- **Book price goes to $40** after presale closes (creates urgency)
- **Track G is segmented** — attendees, no-shows, and cold contacts get different emails
- **Cold contacts get a graceful exit** — G#5 last-chance book, G#6 transition, then Track H
- **Track H is NOT sales** — pure value content, 1-2x/month, preps for Phase 2

---

## What Goes Where (Cheat Sheet)

**"I just joined Salim's list and did nothing"** → Track A, State 1
**"I registered for the webinar from Salim's email"** → Track A (warm variant), State 2
**"I bought the book from Salim's email"** → Track C, State 3
**"I bought AND registered from Salim's email"** → Track E, State 6

**"John DM'd me and I just gave my email"** → Track B, State 4
**"I registered for the webinar from John's page"** → Track B (warm variant), State 5
**"I bought the book from John's page"** → Track D, State 3-equivalent
**"I bought AND registered from John's page"** → Track E, State 6

**"It's March 31st and I'm registered"** → Getting Track F countdown emails
**"It's April 3rd and I attended the webinar"** → Track G#1 (attendee path)
**"It's April 3rd and I registered but didn't show"** → Track G#2 (no-show path)
**"It's April 3rd and I never did anything"** → Track G#3 (cold contact path) → G#5 → G#6 → Track H
**"It's April 14th and I still haven't bought anything"** → Track H evergreen nurture
