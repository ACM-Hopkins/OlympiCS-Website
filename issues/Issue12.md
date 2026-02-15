# Issue 12: Build the Admin Dashboard and Route Protection

## Task Description

Create the admin section of the site where organizers manage the event. This includes an admin dashboard landing page and middleware/route protection that ensures only users with the ADMIN role can access `/admin/*` pages. This issue sets up the admin infrastructure that later admin features will build on.

### Subtasks

- [ ] Create `/app/admin/page.tsx` as the admin dashboard landing page
- [ ] Display a summary overview: number of registered teams, number of accepted teams, number of total participants, registration open/closed status
- [ ] Create a reusable admin layout at `/app/admin/layout.tsx` with a sidebar navigation for admin sub-pages (Dashboard, Teams, Scoreboard, Settings)
- [ ] Add route protection: check the user's session and role before rendering admin pages. If not logged in, redirect to login. If logged in but not ADMIN, show a 403 "Access Denied" page
- [ ] Create the API route `GET /api/admin/stats` that returns the dashboard summary numbers using Prisma aggregate queries
- [ ] Style the admin layout distinctly from the public site (e.g., a sidebar nav instead of the top navbar)
- [ ] Manually set one user's role to ADMIN in the database using Prisma Studio for testing

## Keywords to Google

- "Next.js App Router nested layout"
- "Next.js middleware route protection"
- "NextAuth session role check server component"
- "Prisma count aggregate query"
- "admin dashboard layout sidebar Tailwind"
- "Next.js 403 forbidden page"

## Measures of Success

1. Navigating to `/admin` when not logged in redirects to the login page
2. Navigating to `/admin` as a non-admin user shows an "Access Denied" message
3. Navigating to `/admin` as an admin user shows the dashboard with real stats from the database
4. The admin section has its own sidebar layout separate from the public navbar
5. The sidebar links to Dashboard, Teams, Scoreboard, and Settings sub-pages (even if those are placeholder pages for now)
