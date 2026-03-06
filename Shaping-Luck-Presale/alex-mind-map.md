# Alex — System Mind Map

A presentable node structure showing how all the pieces connect. Each node has a one-liner explaining what it does and why it matters.

---

```
                              ┌─────────────────────┐
                              │                     │
                              │     🎯  A L E X     │
                              │  Serendipity Engine  │
                              │                     │
                              └──────────┬──────────┘
                                         │
              ┌──────────────────────────┼──────────────────────────┐
              │                          │                          │
              ▼                          ▼                          ▼
    ┌─────────────────┐      ┌─────────────────┐      ┌─────────────────┐
    │   KNOW THEM     │      │   CONNECT THEM  │      │   GROW THEM     │
    │  (Input Loops)  │      │ (Matching Loops) │      │ (Output Loops)  │
    └────────┬────────┘      └────────┬────────┘      └────────┬────────┘
             │                        │                        │
     ┌───────┼───────┐       ┌───────┼───────┐       ┌───────┼───────┐
     │       │       │       │       │       │       │       │       │
     ▼       ▼       ▼       ▼       ▼       ▼       ▼       ▼       ▼
    [1]     [2]     [3]     [4]     [5]     [6]     [7]     [8]     [9]
```

---

## KNOW THEM — Understanding Each Human

### [1] The 7 Questions

**"3 minutes to map a whole person."**

- Onboarding micro-experience capturing career, personality, quirks, values, fears, aspirations, and relationship with luck
- Each question maps to a different psychological dimension
- Enneagram framework runs silently underneath — captures core motivation without labeling anyone
- _This is the seed data that makes everything else work_

### [2] Luck DNA Generator

**"Turn raw answers into a structured identity the system can reason about."**

- LLM interprets 7 answers → structured JSON profile
- Core fields: ambition, energy style, hidden interests, risk profile, aspirational identity, key tension, serendipity pattern
- Enneagram signals inferred (center, stance, patterns)
- Quadrant positioning (Launchpad / Forge / Gilded Cage / Bunker)
- Embedded as vector for similarity/distance matching
- _The profile is the person's "address" in serendipity-space_

### [3] Profile Evolution

**"People change. The system should notice."**

- Passive updates from behavior (Luck Feed clicks, meeting feedback, follow-up patterns)
- Active re-calibration prompts every 30-60 days ("Anything shifted?")
- Life event detection from self-reported updates
- Embedding re-computed on profile changes
- _A stale profile kills serendipity. This keeps it alive._

---

## CONNECT THEM — Engineering the Right Collisions

### [4] Meeting Matcher

**"Not who's in the same industry. Who's in the same existential question."**

```
     Attendee Profiles
            ↓
    ┌───────┼───────┐
    │       │       │
    ▼       ▼       ▼
 RESONANCE  STRETCH  CATALYST
  Round 1   Round 2   Round 3

 Shared      Maximum    One person's
 hidden      useful     Q1 ambition
 dimensions  difference + 2 enablers
```

- Resonance: cosine similarity on hidden interests + shared contradiction themes
- Stretch: cosine distance + LLM-verified "non-obvious thread" (no thread = no pair)
- Catalyst: ambition-to-skill matching across the group, rotating who's the dreamer
- Human facilitator reviews and can override — but ideally <15% of the time
- _The algorithm's job isn't to be perfect. It's to be surprisingly good._

### [5] Brief Generator

**"You walk in already known."**

- Takes a pairing → generates a personalized pre-meeting message for each person
- Includes: who you're meeting, something real about them, what you share, a custom conversation starter
- Tone: warm, specific, like a thoughtful host who actually knows both of you
- Sent 24-48 hours before (earlier for observers/anxious types)
- _This is a belonging artifact. It transforms how people enter the room._

### [6] Luck Prompt Generator

**"The room's opening question, designed from the room's collective data."**

- Batch all attendee Q1 + Q6 answers
- LLM finds thematic clusters in the group
- Generates one opening question that touches the dominant theme without excluding anyone
- Replaces "tell us your name and what you do" with something that makes people lean in
- _The first 60 seconds set the emotional tone for everything after._

---

## GROW THEM — Keeping Momentum After the Meeting

### [7] Serendipity Crawler

**"The world is full of opportunities. Most people just can't see the ones meant for them."**

```
 Curated Sources (events, grants, communities, podcasts, jobs, trends)
            ↓
     Crawler Agents (daily/weekly)
            ↓
     Opportunity Parser (LLM → structured objects)
            ↓
     Embedding + Serendipity Scoring
            ↓
     Luck Feed (3-5 items/week per user)
```

- Serendipity = Connection Strength × Surprise Factor
- High connection + high surprise = the sweet spot
- Each item includes a one-line hook: _"Why this matters for YOU specifically"_
- Sources expand based on what users actually engage with
- _This is the "magical web crawler" — it doesn't find what you're looking for, it finds what you didn't know you needed_

### [8] Nudge Engine

**"A thoughtful friend who never forgets what you said."**

```
 Trigger Events:
   • 24hr post-meeting → recap + action items
   • 7 days later → follow-up check
   • Luck Feed click → related opportunity 3 days later
   • Q1 keyword in news → instant alert
   • 30 days → re-calibration prompt
   • Connection partner does relevant thing → cross-nudge
            ↓
 Context Assembly (profile + trigger + history)
            ↓
 LLM generates warm, specific nudge
            ↓
 Email (later: in-app notification)
```

- Tone: like a friend who remembered something you mentioned at dinner 3 weeks ago
- Frequency-capped to avoid annoyance
- Confidence scoring: high confidence = auto-send, lower = human review
- _Most networking dies in the parking lot. This is why ours doesn't._

### [9] Connection Graph

**"The relationship map that makes the whole system smarter over time."**

```
 Nodes: Members (with Luck DNA)
 Edges: Meetings + Follow-ups
   │
   ├── round_type (resonance / stretch / catalyst)
   ├── conversation_quality (1-5)
   ├── followed_up (yes/no)
   ├── outcomes (free text)
   └── shared_interests
```

- Tracks who met whom, how it went, and what came of it
- Identifies super-connectors, emerging community themes, pairing patterns that work
- Feeds back into the Matching Engine — improving pairings over time
- **This is the moat.** No competitor can replicate your connection graph.
- _Every meeting makes the next meeting better. That's the flywheel._

---

## THE FLYWHEEL — How the Loops Feed Each Other

```
         ┌──── Better Profiles ────┐
         │                         ▼
    Profile Evolution         Better Pairings
         ▲                         │
         │                         ▼
    Engagement Data           Better Meetings
         ▲                         │
         │                         ▼
    Luck Feed Clicks          Higher Retention
         ▲                         │
         │                         ▼
    Smarter Crawling          More Members
         ▲                         │
         │                         ▼
    Source Optimization        Richer Graph
         ▲                         │
         └────────────────────────┘
```

---

## PHASED ROLLOUT — When Each Node Comes Online

```
PHASE 0 (Weeks 1-4)     ░░░░░░░░░░░░░░░░░░░░░░░░░░
  Manual everything       [1] Google Form
  $0 infra                [4] Human + LLM paste
                          [5] Manual email
                          GOAL: Prove the magic is real

PHASE 1 (Months 1-2)    ░░░░░░░░░░░░░░░░░░░░░░░░░░
  Automate onboarding     [1] In-app questions
  $50-100/mo              [2] Luck DNA Generator API
                          [3] Profile DB + embeddings
                          GOAL: Structured profiles, faster prep

PHASE 2 (Months 2-4)    ░░░░░░░░░░░░░░░░░░░░░░░░░░
  Automate matching       [4] Matching algorithm
  $200-400/mo             [5] Brief generator
                          [6] Luck Prompt generator
                          GOAL: Facilitator reviews, not creates

PHASE 3 (Months 3-6)    ░░░░░░░░░░░░░░░░░░░░░░░░░░
  Look outward            [7] Serendipity Crawler
  $500-800/mo             GOAL: "How did it know I'd care about this?"

PHASE 4 (Months 4-6)    ░░░░░░░░░░░░░░░░░░░░░░░░░░
  Remember + follow up    [8] Nudge Engine
  $300-500/mo             [9] Connection Graph
                          GOAL: 60%+ follow-up rate

PHASE 5 (Months 6-12)   ░░░░░░░░░░░░░░░░░░░░░░░░░░
  Self-improving system   [3] Profile Evolution (passive)
  $1,000-1,500/mo         Flywheel engaged
                          GOAL: Every meeting better than the last
```

---

## ONE-SLIDE SUMMARY

```
┌──────────────────────────────────────────────────────────────────┐
│                                                                  │
│  ALEX = 9 AI loops that compound into engineered serendipity     │
│                                                                  │
│  KNOW THEM          CONNECT THEM         GROW THEM               │
│  ─────────          ────────────         ────────                │
│  7 Questions        Meeting Matcher      Serendipity Crawler     │
│  Luck DNA           Brief Generator      Nudge Engine            │
│  Profile Evolution  Luck Prompts         Connection Graph        │
│                                                                  │
│  Phase 0: Manual magic ($0)      → Prove it works                │
│  Phase 1: Automate profiles      → Structured data               │
│  Phase 2: Automate matching      → Scalable meetings             │
│  Phase 3: Crawl the web          → Personalized opportunities    │
│  Phase 4: Follow-up engine       → Lasting connections           │
│  Phase 5: Self-improving system  → Defensible moat               │
│                                                                  │
│  THE ONE RULE: Every phase must deliver a moment                 │
│  where someone feels seen by the system.                         │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```
