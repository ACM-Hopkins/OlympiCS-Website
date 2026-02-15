# Issue 9: Build the Team Registration Page

## Task Description

Build the registration form where competitors create a team and provide their information. The form should collect team name, captain info (name, email, t-shirt size, dietary restrictions), and allow adding additional team members. The form should submit data to an API route that saves it to the database. Registration should be toggleable (can be turned off).

### Subtasks

- [ ] Build `/app/register/page.tsx` with a multi-section registration form
- [ ] Include fields for: team name, "Looking for Members" checkbox
- [ ] Include captain fields: name, email, t-shirt size (dropdown), dietary restrictions (text input)
- [ ] Add an "Add Team Member" button that dynamically adds another set of member fields (name, email, t-shirt size, dietary restrictions)
- [ ] Add client-side form validation (required fields, valid email format) and show error messages
- [ ] Create an API route at `app/api/teams/route.ts` with a POST handler that saves the team and its members to the database using Prisma
- [ ] After successful registration, redirect to a confirmation page or show a success message
- [ ] Check a configuration flag (from the Event model or a JSON config) to determine if registration is open; if closed, show a "Registration is closed" message instead of the form
- [ ] Require the user to be logged in to register (redirect to login if not authenticated)

## Keywords to Google

- "Next.js API route POST handler App Router"
- "React dynamic form fields add remove"
- "form validation React useState"
- "Prisma create with nested relations"
- "Next.js redirect if not authenticated"
- "HTML select dropdown React controlled component"

## Measures of Success

1. A logged-in user can fill out the form and submit it, creating a Team and TeamMember records in the database
2. Adding/removing team member fields works smoothly without page refresh
3. Submitting with missing required fields shows clear inline error messages
4. After successful submission, the user sees a confirmation
5. If registration is closed, the form is replaced by a clear "Registration is closed" message
6. Unauthenticated users are redirected to the login page
7. Duplicate team names are rejected with a helpful error
