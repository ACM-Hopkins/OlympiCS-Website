# Issue 14: Build the Admin Settings Page

## Task Description

Build an admin settings page where organizers can control event-wide configuration: toggle registration open/closed, update the current event details, and manage the list of games/competitions for the event. This gives organizers control without needing to edit code or the database directly.

### Subtasks

- [ ] Build `/app/admin/settings/page.tsx` with sections for event settings and game management
- [ ] Add a toggle switch to open/close registration (updates the Event model's registration flag)
- [ ] Add fields to edit the current event's name, date, and description
- [ ] Build a "Games" management section: list all games for the current event with name, description, and point value
- [ ] Add an "Add Game" form to create new games
- [ ] Add "Edit" and "Delete" buttons for each game
- [ ] Create API routes: `PATCH /api/admin/event/[id]` for event settings, `POST/PATCH/DELETE /api/admin/games/` for game CRUD
- [ ] Show a success toast or notification after saving changes
- [ ] Protect all routes with admin role checks

## Keywords to Google

- "React toggle switch component Tailwind"
- "CRUD operations Next.js API routes"
- "Prisma update record by id"
- "Prisma delete record"
- "React toast notification simple"
- "React form edit inline"

## Measures of Success

1. Toggling registration open/closed updates the database and affects whether the registration page shows the form or "closed" message
2. Editing event details saves to the database and reflects across the site
3. Admins can add, edit, and delete games for the current event
4. All changes provide visual feedback (success message or toast) after saving
5. Only admin users can access this page and its API routes
6. Deleting a game that has scores associated asks for confirmation
