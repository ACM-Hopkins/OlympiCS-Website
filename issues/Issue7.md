# Issue 7: Build the FAQ and Contact Page

## Task Description

Create a FAQ page answering common questions prospective participants might have, and a contact section so people can reach the organizers. The FAQ content should come from a JSON file for easy editing. The contact section should list relevant email addresses and social media links.

### Subtasks

- [ ] Create a `data/faq.json` file containing an array of question-answer pairs
- [ ] Populate with relevant placeholder questions (e.g., "What is OlympiCS?", "Do I need to know how to code?", "How many people per team?", "Is there food?", "What should I bring?", "Is it free?")
- [ ] Build `/app/faq/page.tsx` that renders the FAQ as an accordion or expandable list (click a question to reveal the answer)
- [ ] Implement the accordion expand/collapse behavior using React `useState` — no external libraries
- [ ] Add a "Contact Us" section at the bottom with organizer email addresses and links
- [ ] Add the FAQ page to the navbar or footer navigation
- [ ] Style it cleanly with clear visual separation between questions

## Keywords to Google

- "React accordion component from scratch"
- "useState toggle React"
- "FAQ page design Tailwind CSS"
- "accessible accordion ARIA attributes"
- "Next.js App Router new page route"

## Measures of Success

1. The FAQ page displays all questions from `faq.json`
2. Clicking a question expands it to show the answer; clicking again collapses it
3. Only one question is expanded at a time (or multiple — pick one approach and be consistent)
4. The contact section displays at least one email address and is easy to find
5. Adding a new Q&A pair to the JSON shows it on the page without code changes
6. The FAQ link is accessible from the navbar or footer
