# Issue 19: Add Responsive Design, Accessibility, and Visual Polish

## Task Description

Go through every page and make sure the site looks polished, is fully responsive on all screen sizes, and meets basic accessibility standards. Establish a consistent color scheme based on JHU brand colors (Heritage Blue #002D72 and white), consistent spacing, and a professional feel throughout.

### Subtasks

- [ ] Define a consistent color palette in `globals.css` or `tailwind.config.ts` using JHU Heritage Blue (#002D72), white, and a few accent colors
- [ ] Audit every page on mobile (375px width), tablet (768px), and desktop (1280px) — fix any layout issues
- [ ] Ensure all interactive elements (buttons, links, form inputs) have visible focus states for keyboard navigation
- [ ] Add proper `aria-label` attributes to icon-only buttons (hamburger menu, close buttons, etc.)
- [ ] Ensure all images have meaningful `alt` text
- [ ] Check color contrast ratios meet WCAG AA standards (minimum 4.5:1 for normal text)
- [ ] Add consistent hover and transition effects to all buttons and cards
- [ ] Make all tables horizontally scrollable on mobile rather than breaking the layout
- [ ] Add a consistent page title/heading style across all pages
- [ ] Test the full navigation flow on a phone-sized viewport from home page through registration

## Keywords to Google

- "Tailwind CSS custom color theme"
- "WCAG color contrast checker"
- "Tailwind CSS focus-visible ring"
- "aria-label accessibility"
- "responsive table horizontal scroll CSS"
- "Tailwind CSS transition hover effects"
- "Chrome DevTools responsive mode"
- "JHU brand colors hex"

## Measures of Success

1. Every page looks correct and usable on mobile, tablet, and desktop — no overflow, no hidden content, no tiny text
2. The site uses a consistent JHU-inspired color scheme throughout (no leftover default colors)
3. All buttons and links have visible focus indicators when tabbed to with a keyboard
4. Running a Lighthouse accessibility audit scores at least 90
5. All interactive elements are large enough to tap on mobile (minimum 44x44px touch targets)
6. The overall visual feel is cohesive — a visitor browsing from page to page feels like it's one unified site
