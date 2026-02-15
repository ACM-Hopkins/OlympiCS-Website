# Issue 11: Build the Public Teams List Page

## Task Description

Build a page where anyone can view all registered teams and their public information. This lets competitors scope out the competition and lets solo participants find teams that are "Looking for Members." The page should show team names, member counts, and status.

### Subtasks

- [ ] Build `/app/teams/page.tsx` that fetches all teams for the current event from the database
- [ ] Display each team as a card showing: team name, number of members, and "Looking for Members" badge if applicable
- [ ] Only show teams that have been accepted by organizers (status = accepted), plus teams with a "Looking for Members" flag regardless of status
- [ ] Add a filter or toggle to show only teams that are "Looking for Members"
- [ ] Create a GET API route at `app/api/teams/route.ts` that returns the list of teams with member counts
- [ ] Make the team cards clickable to expand and show member names (but not emails or private info)
- [ ] Add a search bar to filter teams by name
- [ ] Handle the empty state — show a friendly message if no teams are registered yet

## Keywords to Google

- "Next.js fetch data server component"
- "Prisma query with count relation"
- "React search filter list"
- "Tailwind CSS card component"
- "Next.js API route GET handler"
- "React conditional rendering badge"

## Measures of Success

1. The teams page displays all accepted teams with their names and member counts
2. Teams with "Looking for Members" are clearly marked with a visible badge or indicator
3. The filter toggle correctly shows only teams looking for members
4. The search bar filters teams by name in real time as the user types
5. Private information (emails, dietary restrictions, t-shirt sizes) is never shown
6. If no teams exist, a friendly empty-state message is displayed
