# Issue 10: Build the Team Management Page

## Task Description

Build a page where a team captain can view and edit their team's information after registration. They should be able to update team members, change the team name, toggle the "Looking for Members" flag, and delete the team entirely. This page should only be accessible to the logged-in user who created the team.

### Subtasks

- [ ] Build `/app/team/page.tsx` that fetches and displays the current user's team from the database
- [ ] Show all team information: team name, status (pending/accepted), members list, and "Looking for Members" flag
- [ ] Add an "Edit" mode that allows updating the team name and the "Looking for Members" toggle
- [ ] Allow adding new team members and removing existing ones (except the captain)
- [ ] Allow editing existing team member details (name, email, t-shirt size, dietary restrictions)
- [ ] Create API routes for updating (`PUT /api/teams/[id]`) and deleting (`DELETE /api/teams/[id]`) teams
- [ ] Add a "Delete Team" button with a confirmation dialog ("Are you sure?") before actually deleting
- [ ] Make sure only the team captain can access and modify their own team (check session user ID matches team owner)
- [ ] If the user has no team, show a message with a link to the registration page

## Keywords to Google

- "Next.js dynamic API route parameters"
- "React edit form toggle mode"
- "Prisma update nested relations"
- "Prisma delete cascade"
- "confirm dialog React before delete"
- "Next.js route protection session check"

## Measures of Success

1. A logged-in captain can see their team's full details on this page
2. Editing the team name or toggling "Looking for Members" saves to the database and reflects immediately
3. Adding or removing team members updates the database correctly
4. Deleting a team removes it and all its members from the database after confirmation
5. A user who is not the team captain cannot access or modify another team
6. A user without a team sees a helpful message and a link to register
