# CCG Lead Scalping Bot

A custom "Sniper" lead generation bot for Google Maps.

## How to Install
Open a terminal in this folder and run:
```bash
npm install
```

## How to Use
Run the script with your search term in quotes:
```bash
node scraper.js "Plumbers in Sheepshead Bay Brooklyn"
```
Or for other niches:
```bash
node scraper.js "Electricians in Staten Island"
```

## Output
The bot will:
1. Open a browser window (controlled by the bot).
2. Human-like scroll through results.
3. **Filter** for businesses with:
   - Rating > 4.0
   - Reviews > 5
   - **NO Website listed**
4. Save the "Sniper" leads to `leads.csv` in this folder.

## Troubleshooting
- If it gets stuck on "Before you continue", the bot tries to auto-click "Accept". If it fails, manually click it in the window.
- If 0 leads are found, try a broader search location or term.
