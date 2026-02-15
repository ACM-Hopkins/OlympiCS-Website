# Issue 6: Build the Schedule Page

## Task Description

Create a page showing the event day schedule so competitors can plan ahead. The schedule should be driven by a JSON data file and display the day's events in a clear timeline format. Include information like event name, time, location, and a short description.

### Subtasks

- [ ] Create a `data/schedule.json` file containing an array of schedule items, each with: time, event name, location, and description
- [ ] Populate with placeholder schedule items (e.g., "9:00 AM - Check-in", "9:30 AM - Opening Ceremony", "10:00 AM - Round 1: Algorithm Relay", etc.)
- [ ] Build `/app/schedule/page.tsx` that reads and renders the schedule JSON
- [ ] Display the schedule as a vertical timeline or structured list with times prominently shown
- [ ] Visually distinguish between different types of events (competition, break, ceremony) using color or icons
- [ ] Make sure the layout is responsive and easy to read on a phone (competitors will check this on-site)
- [ ] Add a note at the top saying "Schedule subject to change" or similar disclaimer

## Keywords to Google

- "vertical timeline CSS Tailwind"
- "schedule page design inspiration"
- "Tailwind CSS timeline component"
- "responsive timeline layout mobile"
- "Next.js static data JSON import"

## Measures of Success

1. The schedule page renders all items from `schedule.json` in chronological order
2. Each item shows its time, name, location, and description
3. Adding or editing items in the JSON updates the page without code changes
4. The page is easily readable on a phone screen
5. There is some visual distinction between event types (e.g., competitions vs. breaks vs. ceremonies)
