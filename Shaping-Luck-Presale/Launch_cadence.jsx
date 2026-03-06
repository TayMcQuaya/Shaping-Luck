import { useState } from "react";

const PHASES = [
  {
    id: "saleem-warmup",
    label: "Salim's List — Warm Up",
    dateRange: "Mar 5–14",
    week: "Week 1–2",
    color: "#E8A838",
    items: [
      {
        day: "Mar 5 (Wed)",
        type: "email",
        title: "Email #1 — The Tease",
        description:
          'Announce the Luck book presale ($20). Light mystery about "something bigger coming." Webinar date drop (Apr 1-2). No app mention.',
        owner: "Salim",
        status: "draft",
      },
      {
        day: "Mar 7 (Fri)",
        type: "email",
        title: "Email #2 — The Why",
        description:
          "Personal story about why Salim wrote this book. Reinforce presale. Mention webinar again. Still no app details.",
        owner: "Salim",
        status: "todo",
      },
      {
        day: "Mar 10 (Mon)",
        type: "email",
        title: "Email #3 — Social Proof",
        description:
          'Share 2-3 real stories of serendipity from the community. "This is what the book is about." Presale + webinar CTA.',
        owner: "Salim",
        status: "todo",
      },
      {
        day: "Mar 12 (Wed)",
        type: "email",
        title: "Email #4 — John Introduction",
        description:
          'Introduce John as co-host. Build credibility. "John and I have been working on something together." Presale + webinar reminder.',
        owner: "Salim",
        status: "todo",
      },
      {
        day: "Mar 14 (Fri)",
        type: "milestone",
        title: "Abundance Event Pre-Announce",
        description:
          "Salim announces to ~200 person live audience. Book presale + webinar. Creates word-of-mouth buzz within the community.",
        owner: "Salim",
        status: "todo",
      },
    ],
  },
  {
    id: "saleem-build",
    label: "Salim's List — Build Urgency",
    dateRange: "Mar 17–21",
    week: "Week 3",
    color: "#D4603A",
    items: [
      {
        day: "Mar 17 (Mon)",
        type: "email",
        title: "Email #5 — Behind the Scenes",
        description:
          'Hint at the app. "We\'ve been building something that makes luck systematic." Still vague. Webinar is where they find out.',
        owner: "Salim",
        status: "todo",
      },
      {
        day: "Mar 19 (Wed)",
        type: "email",
        title: "Email #6 — Scarcity Intro",
        description:
          '"We\'re limiting the first wave to 500 people." Frame the webinar as the only way in. Presale reminder (book going to full price soon).',
        owner: "Salim",
        status: "todo",
      },
      {
        day: "Mar 21 (Fri)",
        type: "email",
        title: "Email #7 — Testimonial / Community Voice",
        description:
          'Feature someone from the existing serendipity sessions. Real result. Real connection. "This is just the beginning."',
        owner: "Salim",
        status: "todo",
      },
    ],
  },
  {
    id: "john-activate",
    label: "John's LinkedIn — Activate",
    dateRange: "Mar 17–25",
    week: "Week 3–4",
    color: "#3A8FD4",
    items: [
      {
        day: "Mar 17",
        type: "task",
        title: "Draft DM / InMail Template for John",
        description:
          "Write the message John sends to his first-degree connections + InMail to followers. Personal, not salesy. Book presale + webinar invite.",
        owner: "Michael + Salim",
        status: "todo",
      },
      {
        day: "Mar 18",
        type: "task",
        title: "John Reviews & Personalizes Message",
        description:
          "John puts it in his own voice. He knows his people. We give the skeleton, he makes it real.",
        owner: "John",
        status: "todo",
      },
      {
        day: "Mar 19–21",
        type: "action",
        title: "John DMs First-Degree Connections",
        description:
          "Batch send to first-degree connections. Personal message, not automated. If he has Premium, InMail to non-connected followers too.",
        owner: "John",
        status: "todo",
      },
      {
        day: "Mar 19–21",
        type: "action",
        title: "LinkedIn Ad to John's Followers (Matched Audience)",
        description:
          "Set up LinkedIn ad targeting John's page followers only. Book presale + webinar invite. Needs $500-1K ad budget.",
        owner: "Michael / Salim",
        status: "todo",
      },
      {
        day: "Mar 22–25",
        type: "email",
        title: "John's Email List Blast (if exists)",
        description:
          "If John has an email list from book buyers or past events — hit it. Same framing: book presale + webinar. 2-3 emails max.",
        owner: "John",
        status: "todo",
      },
    ],
  },
  {
    id: "final-push",
    label: "Final Push — All Channels",
    dateRange: "Mar 24–28",
    week: "Week 4",
    color: "#9B3AD4",
    items: [
      {
        day: "Mar 24 (Mon)",
        type: "email",
        title: "Email #8 — Last Chance Book Price",
        description:
          '"Book presale closes Friday. Price goes to $40 after launch." Create urgency on the small yes.',
        owner: "Salim",
        status: "todo",
      },
      {
        day: "Mar 25 (Tue)",
        type: "email",
        title: "Email #9 — Webinar Agenda Teaser",
        description:
          'Reveal just enough: "Salim + John live. A new platform reveal. Limited founding member spots. Full refund guarantee." Don\'t say $400 yet.',
        owner: "Salim",
        status: "todo",
      },
      {
        day: "Mar 30 (Mon)",
        type: "email",
        title: "Email #10 — Social Proof + FOMO",
        description:
          '"X people have already pre-ordered. Y people registered for the webinar. Seats are filling." Real numbers.',
        owner: "Salim",
        status: "todo",
      },
      {
        day: "Mar 31 (Tue)",
        type: "email",
        title: "Email #11 — Eve of Webinar",
        description:
          "\"Tomorrow is the day. Here's your link. Here's what to expect. Be there.\" Short, punchy, pure logistics + hype.",
        owner: "Salim",
        status: "todo",
      },
      {
        day: "Apr 1-2 (Wed/Thu)",
        type: "milestone",
        title: "🔴 WEBINAR DAYS",
        description:
          "Demo app. Stack the offer: app access + book + Salim access + Meaning of Life sessions + avatar. Drop $400 price. Drop refund policy. Close at 500 seats.",
        owner: "Salim + John",
        status: "todo",
      },
    ],
  },
  {
    id: "post-webinar",
    label: "Post-Webinar — Close Stragglers",
    dateRange: "Apr 3–6",
    week: "After",
    color: "#3AD47A",
    items: [
      {
        day: "Apr 3",
        type: "email",
        title: "Email #12 — Replay + Last Call",
        description:
          '"Missed it? Here\'s the replay. But the founding member price closes in 48 hours." Send to entire list.',
        owner: "Salim",
        status: "todo",
      },
      {
        day: "Apr 6",
        type: "email",
        title: "Email #13 — Final Close",
        description:
          '"Doors closing tonight. X of 500 spots taken. This price won\'t come back." Last email before Phase 2 planning.',
        owner: "Salim",
        status: "todo",
      },
      {
        day: "Apr 6",
        type: "task",
        title: "Revenue Assessment + Phase 2 Planning",
        description:
          "Count revenue. Decide marketing budget allocation ($50K target for ad spend). Begin planning public launch at higher price point ($500-600). Consider hiring Alex for Phase 2 creative/marketing.",
        owner: "Michael + Salim",
        status: "todo",
      },
    ],
  },
];

const DEV_TRACK = [
  {
    week: "Week 1–2",
    dateRange: "Mar 5–14",
    items: [
      "Landing page live (book presale + webinar registration)",
      "Payment processing set up ($20 book)",
      "Webinar platform booked (Zoom or similar)",
    ],
  },
  {
    week: "Week 2–3",
    dateRange: "Mar 10–21",
    items: [
      "App: Add 7 onboarding questions",
      "App: New branding / UI refresh",
      "App: Login system",
      "App: Decouple from OpenEXO",
    ],
  },
  {
    week: "Week 3–4",
    dateRange: "Mar 17 – Apr 2",
    items: [
      "Webinar slide deck / script finalized",
      "Demo environment ready for live walkthrough",
      "Payment flow for $400 founding member offer",
      "$400 checkout page with refund policy copy",
    ],
  },
  {
    week: "Post-webinar",
    dateRange: "Apr 3+",
    items: [
      "First luck session within 1 week of close",
      "Onboard founding members into app",
      "Schedule Meaning of Life sessions",
    ],
  },
];

const typeColors = {
  email: { bg: "#1a1a2e", border: "#E8A838", text: "#E8A838" },
  task: { bg: "#1a1a2e", border: "#3A8FD4", text: "#3A8FD4" },
  action: { bg: "#1a1a2e", border: "#D4603A", text: "#D4603A" },
  milestone: { bg: "#2a1a2e", border: "#9B3AD4", text: "#9B3AD4" },
};

const statusStyles = {
  draft: { bg: "#E8A83822", text: "#E8A838", label: "DRAFTING" },
  todo: { bg: "#ffffff11", text: "#888", label: "TODO" },
  done: { bg: "#3AD47A22", text: "#3AD47A", label: "DONE" },
};

export default function LaunchCadence() {
  const [expandedPhase, setExpandedPhase] = useState("saleem-warmup");
  const [showDevTrack, setShowDevTrack] = useState(false);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a0a12",
        color: "#e0e0e0",
        fontFamily: "'JetBrains Mono', 'SF Mono', 'Fira Code', monospace",
        padding: "32px 24px",
        maxWidth: 800,
        margin: "0 auto",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: 40 }}>
        <div
          style={{
            fontSize: 11,
            letterSpacing: 4,
            color: "#E8A838",
            textTransform: "uppercase",
            marginBottom: 8,
          }}
        >
          Phase 1 — Private Launch
        </div>
        <h1
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: "#fff",
            margin: 0,
            lineHeight: 1.2,
          }}
        >
          Launch Cadence
        </h1>
        <div style={{ fontSize: 13, color: "#666", marginTop: 8 }}>
          Mar 5 → Apr 6 · Salim's List → John's LinkedIn → Webinar → Close
        </div>
      </div>

      {/* Key Numbers */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gap: 12,
          marginBottom: 32,
        }}
      >
        {[
          { label: "Emails", value: "13", sub: "total sends" },
          { label: "Book", value: "$20", sub: "presale" },
          { label: "Offer", value: "$400", sub: "founding" },
          { label: "Cap", value: "500", sub: "members" },
        ].map((stat) => (
          <div
            key={stat.label}
            style={{
              background: "#12121e",
              border: "1px solid #1e1e30",
              borderRadius: 8,
              padding: "14px 12px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 20, fontWeight: 700, color: "#fff" }}>
              {stat.value}
            </div>
            <div style={{ fontSize: 10, color: "#666", marginTop: 2 }}>
              {stat.sub}
            </div>
          </div>
        ))}
      </div>

      {/* Toggle */}
      <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
        <button
          onClick={() => setShowDevTrack(false)}
          style={{
            padding: "8px 16px",
            fontSize: 12,
            background: !showDevTrack ? "#E8A838" : "#12121e",
            color: !showDevTrack ? "#0a0a12" : "#888",
            border: "1px solid " + (!showDevTrack ? "#E8A838" : "#1e1e30"),
            borderRadius: 6,
            cursor: "pointer",
            fontFamily: "inherit",
            fontWeight: 600,
          }}
        >
          Marketing Cadence
        </button>
        <button
          onClick={() => setShowDevTrack(true)}
          style={{
            padding: "8px 16px",
            fontSize: 12,
            background: showDevTrack ? "#3A8FD4" : "#12121e",
            color: showDevTrack ? "#0a0a12" : "#888",
            border: "1px solid " + (showDevTrack ? "#3A8FD4" : "#1e1e30"),
            borderRadius: 6,
            cursor: "pointer",
            fontFamily: "inherit",
            fontWeight: 600,
          }}
        >
          Dev / Build Track
        </button>
      </div>

      {!showDevTrack ? (
        /* Marketing Cadence */
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {PHASES.map((phase) => {
            const isOpen = expandedPhase === phase.id;
            return (
              <div
                key={phase.id}
                style={{
                  background: "#12121e",
                  border:
                    "1px solid " + (isOpen ? phase.color + "66" : "#1e1e30"),
                  borderRadius: 10,
                  overflow: "hidden",
                  transition: "border-color 0.2s",
                }}
              >
                {/* Phase Header */}
                <div
                  onClick={() => setExpandedPhase(isOpen ? null : phase.id)}
                  style={{
                    padding: "16px 20px",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    userSelect: "none",
                  }}
                >
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 12 }}
                  >
                    <div
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        background: phase.color,
                        flexShrink: 0,
                      }}
                    />
                    <div>
                      <div
                        style={{ fontSize: 14, fontWeight: 600, color: "#fff" }}
                      >
                        {phase.label}
                      </div>
                      <div
                        style={{ fontSize: 11, color: "#666", marginTop: 2 }}
                      >
                        {phase.dateRange} · {phase.items.length} items
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: 18,
                      color: "#444",
                      transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
                      transition: "transform 0.2s",
                    }}
                  >
                    ›
                  </div>
                </div>

                {/* Phase Items */}
                {isOpen && (
                  <div
                    style={{
                      padding: "0 20px 16px",
                      display: "flex",
                      flexDirection: "column",
                      gap: 10,
                    }}
                  >
                    {phase.items.map((item, i) => {
                      const tc = typeColors[item.type] || typeColors.task;
                      const sc = statusStyles[item.status] || statusStyles.todo;
                      return (
                        <div
                          key={i}
                          style={{
                            background: tc.bg,
                            borderLeft: "3px solid " + tc.border,
                            borderRadius: "0 8px 8px 0",
                            padding: "14px 16px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "flex-start",
                              marginBottom: 6,
                            }}
                          >
                            <div>
                              <div
                                style={{
                                  fontSize: 10,
                                  color: "#555",
                                  marginBottom: 4,
                                }}
                              >
                                {item.day} · {item.owner}
                              </div>
                              <div
                                style={{
                                  fontSize: 13,
                                  fontWeight: 600,
                                  color: "#ddd",
                                }}
                              >
                                {item.title}
                              </div>
                            </div>
                            <span
                              style={{
                                fontSize: 9,
                                padding: "3px 8px",
                                borderRadius: 4,
                                background: sc.bg,
                                color: sc.text,
                                fontWeight: 600,
                                letterSpacing: 1,
                                flexShrink: 0,
                              }}
                            >
                              {sc.label}
                            </span>
                          </div>
                          <div
                            style={{
                              fontSize: 12,
                              color: "#888",
                              lineHeight: 1.5,
                            }}
                          >
                            {item.description}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        /* Dev Track */
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {DEV_TRACK.map((block, bi) => (
            <div
              key={bi}
              style={{
                background: "#12121e",
                border: "1px solid #1e1e30",
                borderRadius: 10,
                padding: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 14,
                }}
              >
                <div
                  style={{ fontSize: 14, fontWeight: 600, color: "#3A8FD4" }}
                >
                  {block.week}
                </div>
                <div style={{ fontSize: 11, color: "#555" }}>
                  {block.dateRange}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                {block.items.map((item, ii) => (
                  <div
                    key={ii}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 10,
                    }}
                  >
                    <div
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: "#3A8FD4",
                        marginTop: 6,
                        flexShrink: 0,
                      }}
                    />
                    <div
                      style={{ fontSize: 13, color: "#bbb", lineHeight: 1.5 }}
                    >
                      {item}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Footer Notes */}
      <div
        style={{
          marginTop: 32,
          padding: 20,
          background: "#12121e",
          border: "1px solid #1e1e30",
          borderRadius: 10,
        }}
      >
        <div
          style={{
            fontSize: 12,
            fontWeight: 600,
            color: "#E8A838",
            marginBottom: 10,
          }}
        >
          Key Rules
        </div>
        <div
          style={{
            fontSize: 12,
            color: "#888",
            lineHeight: 1.7,
          }}
        >
          → No app mention in emails until Email #5 (and even then, vague)
          <br />
          → $400 price ONLY revealed during live webinar
          <br />
          → Book presale is the small yes — low friction entry
          <br />
          → John's LinkedIn activation starts Week 3 (after Salim's list is
          warmed)
          <br />
          → OpenEXO gets 20% rev share on sales from their email list
          <br />
          → Alex is NOT involved in Phase 1 — potential hire for Phase 2
          marketing
          <br />
          → Cap at 500-600 founding members (MVP can't handle more)
          <br />→ Webinar stacks: app → book → Salim access → Meaning of Life
          sessions → avatar → refund policy
        </div>
      </div>
    </div>
  );
}
