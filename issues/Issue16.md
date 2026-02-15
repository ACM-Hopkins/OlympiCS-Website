# Issue 16: Build the Scoreboard Editing Page (Admin)

## Task Description

Build the admin page where organizers can update scores in real time during the event. This is the most critical admin tool on event day. Organizers need to quickly select a game and enter scores for each team, apply penalties, and see changes reflected immediately.

### Subtasks

- [ ] Build `/app/admin/scoreboard/page.tsx` with a game selector dropdown at the top
- [ ] When a game is selected, show a list of all accepted teams with an input field for each team's score for that game
- [ ] Pre-fill the inputs with existing scores if they exist, or leave blank for unscored teams
- [ ] Add a "Save Scores" button that submits all scores for the selected game at once via a single API call
- [ ] Create API route `POST /api/admin/scores` that accepts an array of {teamId, gameId, points} objects and upserts them all
- [ ] Add a "Penalties" section: a form to select a team and subtract points with a reason field
- [ ] Show the current total scoreboard below the editing area as a preview so organizers can see the effect of their changes
- [ ] Add visual confirmation (green flash or checkmark) when scores are saved successfully
- [ ] Protect the page and API routes with admin role checks

## Keywords to Google

- "Prisma upsert many records"
- "React form array of inputs"
- "Next.js API route bulk update"
- "React select dropdown controlled"
- "optimistic UI update React"
- "Tailwind CSS flash animation"

## Measures of Success

1. An admin can select a game from the dropdown and see all teams with score input fields
2. Entering scores and clicking "Save" persists all scores to the database
3. Existing scores are pre-filled when selecting a game that already has scores
4. The penalty form correctly subtracts points from a team's total
5. The live preview scoreboard below the editor updates after saving scores
6. The page is fast and usable under event-day pressure (no unnecessary loading screens)
7. Non-admin users cannot access the page or API routes
