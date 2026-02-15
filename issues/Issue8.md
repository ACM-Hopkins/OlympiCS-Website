# Issue 8: Set Up NextAuth.js Authentication

## Task Description

Set up user authentication so that organizers can log in to access admin features and competitors can register accounts. Use NextAuth.js (Auth.js) with a credentials-based or email-based login flow. Admin users should be distinguishable from regular users via a role field in the database.

### Subtasks

- [ ] Install `next-auth` and its Prisma adapter (`@auth/prisma-adapter`)
- [ ] Add the required NextAuth models to the Prisma schema (User, Account, Session, VerificationToken) — follow the NextAuth Prisma adapter docs
- [ ] Add a `role` field to the User model with values like `USER` and `ADMIN`
- [ ] Create the NextAuth API route at `app/api/auth/[...nextauth]/route.ts`
- [ ] Configure at least one auth provider (GitHub OAuth is simplest for development — or use Credentials provider with email/password)
- [ ] Set up the `NEXTAUTH_SECRET` and `NEXTAUTH_URL` environment variables
- [ ] Create a sign-in page at `/app/login/page.tsx` with a login form or OAuth button
- [ ] Create a sign-out button component that can be placed in the navbar
- [ ] Update the navbar to show "Login" when logged out and the user's name + "Logout" when logged in
- [ ] Run `npx prisma db push` to sync the new auth models to the database

## Keywords to Google

- "NextAuth.js App Router setup"
- "NextAuth Prisma adapter"
- "NextAuth GitHub provider setup"
- "NextAuth session in server component"
- "NextAuth role-based access control"
- "NEXTAUTH_SECRET generate"

## Measures of Success

1. A user can click "Login", authenticate, and be redirected back to the site
2. The navbar shows the logged-in user's name and a logout button after authentication
3. After logout, the navbar shows "Login" again
4. The User table in the database has a `role` field
5. Session data is accessible in both server components (via `getServerSession`) and client components (via `useSession`)
6. Auth-related environment variables are documented in `.env.example`
