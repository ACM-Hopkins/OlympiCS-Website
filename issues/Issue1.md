# Issue 1: Set Up Prisma ORM and Neon PostgreSQL Database

## Task Description

Connect the Next.js project to a PostgreSQL database hosted on Neon using Prisma as the ORM. This is the foundational data layer that every other feature will build on top of.

### Subtasks

- [ ] Create a free Neon PostgreSQL database and obtain the connection string
- [ ] Install Prisma as a dev dependency and `@prisma/client` as a regular dependency
- [ ] Run `npx prisma init` to generate the `prisma/schema.prisma` file and `.env` file
- [ ] Configure the `DATABASE_URL` in `.env` with the Neon connection string
- [ ] Add `.env` to `.gitignore` so credentials are never committed
- [ ] Create a `lib/prisma.ts` utility file that exports a singleton Prisma client instance (this prevents creating too many connections in development)
- [ ] Run `npx prisma db push` to verify the connection works
- [ ] Add a `.env.example` file with placeholder values so other developers know what environment variables are needed

## Keywords to Google

- "Prisma getting started Next.js"
- "Neon PostgreSQL free tier setup"
- "Prisma singleton Next.js"
- "dotenv Next.js environment variables"
- "prisma db push vs prisma migrate"

## Measures of Success

1. Running `npx prisma studio` opens a browser window connected to the Neon database with no errors
2. The `lib/prisma.ts` file exists and exports a reusable Prisma client
3. `.env` is listed in `.gitignore`
4. `.env.example` exists with `DATABASE_URL=postgresql://...` as a placeholder
5. Another developer can clone the repo, fill in `.env`, and connect to their own database without code changes
