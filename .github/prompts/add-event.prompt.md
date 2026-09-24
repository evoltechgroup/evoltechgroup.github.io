---
description: "Add a new event to the EvolTech events config. Use when someone wants to add, create, or register a new event."
agent: "agent"
argument-hint: "Paste the event details below and the agent will add it to eventDetailsConfig.ts"
---

Add a new event entry to [eventDetailsConfig.ts](../../src/data/eventDetailsConfig.ts) using the details provided by the user below.

---

## Event Details (fill in before running)

```
Title:
Description (1–2 sentence summary shown on the event card):
Category: internal | conference
Template: template1 | template2 | template3 | template4
From Date (YYYY-MM-DD):
To Date (YYYY-MM-DD):
City (optional):
State / Country (optional):
Venue (optional):

Tags (label + hex color, e.g. "Conference #FE7F00"):
  -
  -

Overview (paragraph shown at the top of the event detail page):

Sections (each with a Title and Content):
  Section 1 Title:
  Section 1 Content:

  Section 2 Title:
  Section 2 Content:

  (add more as needed)

CTA Button Text (optional, e.g. "More details" or "Connect with us"):
CTA Link (optional, external URL or internal path like /contact):

Has a banner image? yes | no
Has gallery images? yes | no
Has speakers? yes | no (if yes, list name + image file path)

Show in event list? yes | no (default: yes)
```

---

## Agent Instructions

1. **Read** the current [eventDetailsConfig.ts](../../src/data/eventDetailsConfig.ts) to understand existing entries and find the next available `id`.

2. **Determine the slug** from the event title — lowercase, hyphenated, no special characters (e.g. `"SIIA Spring Exchange 2026"` → `"spring-exchange-2026"`).

3. **Choose the right template** if not specified by the user:
   - `template1` — Conference with long sectioned content and optional banner image
   - `template2` — Conference or internal with overview card, sections, optional gallery, optional banner
   - `template3` — Internal event with image gallery as the main focus
   - `template4` — Conference with speaker grid

4. **Do NOT set `status`** — it is computed automatically by `getEventStatus()` at runtime. Only add the fields in `RawEventDetail` (which omits `status`).

5. **Image imports**: If the user provides image files, add the necessary imports at the top of the file following the existing import grouping pattern. If images are not yet available, add a `// TODO: add image import` comment as a placeholder and use an existing placeholder image temporarily.

6. **Tags**: Use these standard colors as a guide:
   - Conference: `#FE7F00`
   - Networking / Panel Discussion: `#FFBB00`
   - Technology / Banking / Self-Insurance / Healthcare / Global Forum: `#4A90E2`
   - Internal Event: `#B6D2FF`
   - Team Bonding / Team Culture: `#8DCAFF` or `#4A90E2`
   - Leadership: `#FE7F00`

7. **CTA logic** — you do NOT need to hardcode contact links. The templates automatically redirect to `/contact?source=<event title>#contact-form` when the event is past or has no ctaLink. Only set `ctaLink` if there is a real external URL or a specific internal path for upcoming/ongoing events.

8. **Sections with HTML**: Content supports inline HTML (e.g. `<br/>` for line breaks). Use template literals (backticks) when content spans multiple lines.

9. **`showInList`**: Only add this field and set it to `false` if the user explicitly says the event should be hidden from the listing page. Omit it entirely otherwise.

10. **After adding**, confirm the new entry has been inserted into `rawEventDetailsConfig` array and that the file compiles without errors.
