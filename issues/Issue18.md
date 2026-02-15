# Issue 18: Build the Historical Events and Winners Page

## Task Description

Build a page showcasing past OlympiCS events with their winners, scores, and optionally photos. This page serves as a "hall of fame" and helps prospects understand what the event is like. Data should come from the database (HistoricalWinner model) and organizers should be able to add historical data via the admin settings.

### Subtasks

- [ ] Build `/app/history/page.tsx` that displays past events organized by year
- [ ] For each past event, show: event name, date, top 3 winning teams with placement and scores
- [ ] Add a "Photos" section for each event that displays a grid of images (store image paths in a `data/photos.json` or use a `public/photos/` directory organized by year)
- [ ] Create an admin page or section at `/app/admin/history/page.tsx` where organizers can add historical event data (year, team name, placement, score)
- [ ] Create API routes for CRUD operations on historical data: `GET/POST /api/admin/history`
- [ ] Add a link to the history page in the navbar
- [ ] Display a trophy or medal icon next to 1st, 2nd, and 3rd place finishes
- [ ] Handle the first-year case: if no historical data exists, show a message like "This is our first year — be part of history!"

## Keywords to Google

- "Next.js image gallery grid"
- "Next.js public folder static images"
- "Prisma seed data historical records"
- "responsive image grid Tailwind CSS"
- "React year accordion or tabs"
- "trophy medal emoji or SVG icons"

## Measures of Success

1. The history page displays past events organized by year with winners and scores
2. Photos are displayed in a clean grid for each event
3. Organizers can add new historical records through the admin interface
4. The page gracefully handles having no historical data (first-year message)
5. Gold, silver, and bronze placements are visually distinct
6. The page loads quickly even with multiple photos (images are optimized with Next.js Image component)
