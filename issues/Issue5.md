# Issue 5: Build the Rules Page

## Task Description

Create a page that displays all the rules and logistics for the OlympiCS event. Organizers need to be able to easily update rules without touching code, so all content should be stored in a JSON file. The page should be well-organized with sections, headings, and clear formatting.

### Subtasks

- [ ] Create a `data/rules.json` file structured as an array of rule sections, where each section has a title and an array of rule strings
- [ ] Populate the JSON with placeholder rule sections (e.g., "General Rules", "Team Rules", "Scoring", "Code of Conduct", "Day-of Logistics")
- [ ] Build the `/app/rules/page.tsx` that reads and renders the JSON file
- [ ] Display each section with a clear heading and numbered or bulleted rules underneath
- [ ] Add a table of contents at the top with anchor links that jump to each section
- [ ] Style the page for readability — appropriate font sizes, spacing, and max-width for comfortable reading
- [ ] Make sure the page is responsive on mobile

## Keywords to Google

- "Next.js read local JSON data"
- "anchor links scroll to section React"
- "Tailwind CSS typography prose"
- "HTML id attribute scroll to element"
- "accessible ordered list styling"

## Measures of Success

1. The rules page displays all sections from `rules.json` with headings and listed rules
2. Adding a new section or rule to the JSON file shows up on the page without code changes
3. The table of contents at the top has clickable links that scroll to each section
4. The text is easy to read on both desktop and mobile (not too wide, not too small)
5. The page has a clear visual hierarchy — section titles are prominent and rules are easy to scan
