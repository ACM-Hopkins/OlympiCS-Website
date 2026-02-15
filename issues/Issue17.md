# Issue 17: Add Real-Time Scoreboard Updates

## Task Description

Make the public scoreboard page update in real time so competitors can watch scores change live during the event without refreshing the page. Use a polling approach (fetching new data every few seconds) since it works well with serverless hosting on Vercel and is simpler than WebSockets.

### Subtasks

- [ ] Modify the scoreboard viewing page to fetch data on an interval (e.g., every 10 seconds) instead of only on page load
- [ ] Use React state to hold the current scoreboard data and update it when new data arrives
- [ ] Add a visual indicator showing "Last updated: X seconds ago" and a subtle animation when data refreshes
- [ ] Add a manual "Refresh" button as a fallback
- [ ] Animate score changes — when a team's score increases, briefly highlight that row or cell
- [ ] Make sure the polling only runs when the page is visible (pause when the browser tab is in the background) to save resources
- [ ] Test with multiple browser tabs open to verify the polling doesn't cause performance issues
- [ ] Add a loading skeleton or spinner for the initial data load

## Keywords to Google

- "React polling setInterval useEffect"
- "React useEffect cleanup interval"
- "Page Visibility API JavaScript"
- "React animate list item change"
- "Tailwind CSS skeleton loading placeholder"
- "SWR or React Query polling interval"
- "document.visibilityState JavaScript"

## Measures of Success

1. The scoreboard page automatically shows new scores within ~10 seconds of an admin saving them, without manual refresh
2. A "Last updated" timestamp is visible and updates correctly
3. When scores change, the affected rows are briefly highlighted so viewers notice the update
4. Polling pauses when the user switches to another tab and resumes when they come back
5. The initial page load shows a loading skeleton, then populates with real data
6. The manual refresh button forces an immediate data fetch
