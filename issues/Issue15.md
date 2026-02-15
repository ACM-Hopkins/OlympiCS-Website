# Issue 15: Build the Scoreboard Viewing Page

## Task Description

Build the public scoreboard page that displays team rankings and scores. The scoreboard should show a summary leaderboard (ranked by total points) and a detailed grid view showing each team's score per game. This page will later be enhanced with real-time updates, but for now it should load data on page load.

### Subtasks

- [ ] Build `/app/scoreboard/page.tsx` with two views: "Leaderboard" (ranked list) and "Grid" (score matrix)
- [ ] The leaderboard view should show rank, team name, and total score, sorted from highest to lowest
- [ ] The grid view should be a table with teams as rows and games as columns, with individual scores in each cell and a total column
- [ ] Create a GET API route at `app/api/scoreboard/route.ts` that returns all accepted teams with their scores for the current event
- [ ] Use Prisma queries to aggregate scores per team
- [ ] Add tabs or buttons to toggle between leaderboard and grid views
- [ ] Highlight the top 3 teams with gold, silver, and bronze styling
- [ ] Handle edge cases: no scores yet (show "Scoreboard will be available on event day"), no teams accepted yet
- [ ] Display the event name and date at the top of the scoreboard

## Keywords to Google

- "Prisma aggregate sum group by"
- "React tabs component switch view"
- "Tailwind CSS table responsive horizontal scroll"
- "rank items by score JavaScript sort"
- "gold silver bronze CSS styling"
- "React conditional rendering tabs"

## Measures of Success

1. The leaderboard view shows all accepted teams ranked by total score, highest first
2. The grid view shows a table with every team's score for every game, plus a total column
3. Top 3 teams are visually highlighted (gold/silver/bronze colors or icons)
4. Switching between leaderboard and grid views works without a page reload
5. If no scores exist yet, a friendly placeholder message is shown
6. The scoreboard correctly calculates totals from individual game scores
