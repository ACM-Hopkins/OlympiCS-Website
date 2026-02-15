# Issue 20: Deploy to Vercel and Write Onboarding Documentation

## Task Description

Deploy the finished site to Vercel, configure environment variables for production, set up the production database, and write developer documentation so future maintainers can set up, run, and contribute to the project. This is the final step to make the site live and sustainable.

### Subtasks

- [ ] Create a Vercel project linked to the GitHub repository
- [ ] Configure all required environment variables in the Vercel dashboard (DATABASE_URL, NEXTAUTH_SECRET, NEXTAUTH_URL, OAuth credentials)
- [ ] Run a production build locally (`npm run build`) and fix any build errors or warnings
- [ ] Deploy to Vercel and verify all pages work correctly in production
- [ ] Set up the production Neon database (separate from development) and run `npx prisma db push` against it
- [ ] Update the README.md with comprehensive setup instructions: prerequisites, clone steps, environment setup, running locally, and deploying
- [ ] Document the project architecture: folder structure, key files, data flow, and how to add new pages or features
- [ ] Document how to add/update content via JSON files (rules, schedule, FAQ, home page)
- [ ] Document how to manage the database: seed data, run migrations, access Prisma Studio
- [ ] Document the admin workflow: how to set a user as admin, how to manage teams and scores on event day
- [ ] Test the entire user journey end-to-end in production: register, create team, admin accept team, enter scores, view scoreboard

## Keywords to Google

- "deploy Next.js to Vercel"
- "Vercel environment variables setup"
- "Neon PostgreSQL production database"
- "Next.js production build errors"
- "Prisma production deployment"
- "README template for open source projects"
- "Vercel custom domain setup"

## Measures of Success

1. The site is live on a Vercel URL and all pages load correctly
2. Authentication works in production (login, logout, session persistence)
3. Database operations work in production (registration, team management, score updates)
4. A new developer can follow the README from scratch and get the site running locally within 30 minutes
5. All JSON-driven content (rules, schedule, FAQ) is documented so organizers know how to update it
6. The admin workflow is documented step-by-step so a new organizer can manage the event
7. The production build has no TypeScript errors, no console warnings, and passes ESLint
