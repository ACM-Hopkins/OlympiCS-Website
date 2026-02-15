# Issue 2: Design and Create the Database Schema

## Task Description

Design the Prisma schema that models all the data the OlympiCS website needs: users, teams, team members, events/games, scores, and historical event records. This schema must support registration, scoreboard tracking, team management, and historical data. Write the schema in `prisma/schema.prisma` and push it to the database.

### Subtasks

- [ ] Design an `Event` model to represent a yearly OlympiCS event (year, name, date, registration open/closed flag, description)
- [ ] Design a `Team` model (name, created date, status like pending/accepted/disqualified/dns, looking-for-members flag, associated event)
- [ ] Design a `TeamMember` model (name, email, t-shirt size, dietary restrictions, is team captain flag, associated team)
- [ ] Design a `Game` model to represent individual competitions within an event (name, description, point value, order/sequence)
- [ ] Design a `Score` model to store points per team per game (team, game, points)
- [ ] Design a `HistoricalWinner` model (event, team name, placement, total score) for archiving past results
- [ ] Add appropriate relationships between all models (one-to-many, etc.)
- [ ] Run `npx prisma db push` to sync the schema to the Neon database
- [ ] Verify the tables exist using Prisma Studio

## Keywords to Google

- "Prisma schema relations one-to-many"
- "Prisma model design best practices"
- "Prisma enum type"
- "database schema design relational"
- "Prisma @default @unique annotations"

## Measures of Success

1. `prisma/schema.prisma` contains all models listed above with correct field types and relations
2. `npx prisma db push` runs without errors
3. `npx prisma studio` shows all tables with the correct columns
4. Relationships are correctly defined (e.g., a Team has many TeamMembers, an Event has many Teams and Games)
5. Enum types are used for fields with fixed options (team status, t-shirt sizes)
