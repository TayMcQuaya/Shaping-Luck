# Shaping Luck

Landing page for "Shaping Luck" - a framework for engineering serendipity by John Hagel and Salim Ismail.

## Features

- Static HTML/CSS/JS (no build system)
- Multiple design variants
- Email waitlist collection via Supabase
- Mobile responsive

## Setup

1. Clone the repo
2. Configure Supabase credentials in `js/supabase-waitlist.js`
3. Run the migration in `docs/migrations/supabase-waitlist.sql`

See `docs/SUPABASE-EMAIL-SETUP.md` for detailed setup instructions.

## Local Testing

```bash
python -m http.server 8000
```

Open http://localhost:8000/index_SL.html
