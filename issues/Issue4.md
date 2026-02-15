# Issue 4: Build the Home Page

## Task Description

Build the public-facing landing page that introduces visitors to Hopkins OlympiCS. This is the first thing anyone sees, so it should clearly explain what the event is, when and where it happens, and encourage people to register. Content should be driven by a JSON data file so organizers can update it easily without touching code.

### Subtasks

- [ ] Create a `data/` folder and add a `homeContent.json` file containing: event name, tagline, short description, date, location, and a list of highlights/selling points
- [ ] Build a hero section at the top of the page with the event name, tagline, date, and a prominent "Register Now" button linking to `/register`
- [ ] Build an "About" section below the hero that explains what OlympiCS is (use the description from the JSON)
- [ ] Build a "Highlights" section that lists selling points (e.g., "Compete in coding challenges", "Win prizes", "Free food and merch") as cards or a grid
- [ ] Build a "Sponsors / Organizers" section crediting the JHU CS Department, WiCS, and ACM student chapter
- [ ] Make sure the page is responsive and looks good on both desktop and mobile
- [ ] Import and display the JHU shield logo somewhere on the page (already in `app/favicon.png`)

## Keywords to Google

- "Next.js read JSON file in component"
- "hero section Tailwind CSS"
- "responsive card grid Tailwind"
- "Next.js Image component"
- "Tailwind CSS responsive design breakpoints"

## Measures of Success

1. The home page loads and displays all sections: hero, about, highlights, and sponsors
2. All text content comes from `data/homeContent.json` — changing the JSON changes the page
3. The "Register Now" button links to `/register`
4. The page looks presentable on both a wide desktop screen and a narrow phone screen
5. The page loads fast with no layout shift (images use Next.js `<Image>` component)
