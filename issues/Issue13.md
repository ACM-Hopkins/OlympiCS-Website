# Issue 13: Build the Admin Team Management Page

## Task Description

Build the admin page where organizers can view all registered teams, accept or reject them, mark them as disqualified or DNS (Did Not Start), and export team data as CSV. This is a critical admin tool for managing the event.

### Subtasks

- [ ] Build `/app/admin/teams/page.tsx` showing a table of all teams with columns: team name, captain name, captain email, member count, status, actions
- [ ] Add action buttons for each team: "Accept", "Reject", "Disqualify", "Mark DNS"
- [ ] Create API routes for updating team status: `PATCH /api/admin/teams/[id]` that accepts a new status value
- [ ] Clicking a team row should expand to show all team member details (names, emails, t-shirt sizes, dietary restrictions)
- [ ] Add a "Copy Emails" button that copies all emails for a filtered set of teams to the clipboard (useful for sending mass emails)
- [ ] Add a "Export CSV" button that downloads all team and member data as a CSV file
- [ ] Add filter tabs at the top: "All", "Pending", "Accepted", "Rejected", "Disqualified", "DNS"
- [ ] Show a confirmation dialog before any destructive status change (disqualify, reject)
- [ ] Protect all admin API routes with session + role checks

## Keywords to Google

- "React data table expandable rows"
- "generate CSV download JavaScript"
- "copy to clipboard JavaScript navigator.clipboard"
- "Next.js API route PATCH method"
- "Tailwind CSS table styling"
- "React filter tabs component"
- "Next.js API route authentication check"

## Measures of Success

1. Admins can see all registered teams in a table with all relevant information
2. Clicking Accept/Reject/Disqualify/DNS updates the team status in the database and reflects on the page immediately
3. Filter tabs correctly show only teams with the selected status
4. The CSV export downloads a file containing all team and member data
5. The "Copy Emails" button copies a comma-separated list of emails to the clipboard
6. Non-admin users cannot access this page or its API routes
7. Destructive actions require confirmation before executing
