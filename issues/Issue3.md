# Issue 3: Build the Shared Layout, Navbar, and Footer

## Task Description

Create the shared UI shell that wraps every page: a top navigation bar and a footer. The navbar should link to all major public pages (Home, Rules, Schedule, Scoreboard, Register, Teams). The footer should show credits and contact info. These components should be responsive and work on mobile screens using a hamburger menu.

### Subtasks

- [ ] Create a `components/` folder at the project root for shared components
- [ ] Build a `Navbar` component with links to: Home, Rules, Schedule, Scoreboard, Teams, Register
- [ ] Highlight the currently active page link using `usePathname()` from `next/navigation`
- [ ] Add a hamburger menu button that toggles a mobile menu on small screens
- [ ] Build a `Footer` component showing "Hopkins OlympiCS" and a copyright year
- [ ] Import and render both components in `app/layout.tsx` so they appear on every page
- [ ] Style everything using Tailwind CSS utility classes
- [ ] Test that navigation links work by creating placeholder `page.tsx` files in `app/rules/`, `app/schedule/`, `app/scoreboard/`, `app/register/`, and `app/teams/` (each can just say the page name for now)

## Keywords to Google

- "Next.js App Router layout component"
- "responsive navbar Tailwind CSS"
- "hamburger menu React Tailwind"
- "usePathname Next.js active link"
- "Next.js Link component"

## Measures of Success

1. Every page on the site shows the same navbar at the top and footer at the bottom
2. Clicking a nav link navigates to the correct page without a full page reload
3. The currently active page is visually distinct in the navbar (e.g., bold or underlined)
4. On mobile-width screens, the nav links collapse behind a hamburger icon that toggles open/closed
5. All placeholder pages exist and are reachable via the navbar
