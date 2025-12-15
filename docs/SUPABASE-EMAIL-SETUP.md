# Supabase Email Collection Setup

Template for adding email collection to static HTML sites using Supabase.

## Quick Start

### 1. Create Supabase Project

1. Go to [supabase.com/dashboard](https://supabase.com/dashboard)
2. Create new project
3. Get credentials from **Connect** button (top right):
   - Project URL: `https://xxxxx.supabase.co`
   - Publishable Key: `sb_publishable_...`

### 2. Run Migration

1. Go to **SQL Editor** in Supabase dashboard
2. Paste contents of `docs/migrations/supabase-waitlist.sql`
3. Click **Run**

The migration is idempotent - safe to run multiple times.

### 3. Configure JS Module

Update `js/supabase-waitlist.js` lines 8-11:

```javascript
const SUPABASE_CONFIG = {
  url: 'https://YOUR_PROJECT.supabase.co',
  anonKey: 'YOUR_PUBLISHABLE_KEY'
};
```

### 4. Test Locally

```bash
python -m http.server 8000
# or
npx serve
```

Open http://localhost:8000/index_SL.html

---

## Files Overview

```
project/
├── js/
│   └── supabase-waitlist.js    # Supabase client module
├── docs/
│   └── migrations/
│       └── supabase-waitlist.sql   # Database schema
└── index.html                   # Form + scripts
```

## HTML Integration

### Required Scripts (before `</body>`)

```html
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
<script src="js/supabase-waitlist.js"></script>
```

### Form Structure

```html
<form id="waitlistForm" class="email-form">
    <div class="form-row">
        <input type="text" id="companyName" placeholder="Company name" required>
        <input type="email" id="email" placeholder="Email address" required>
    </div>
    <button type="submit" id="submitBtn">
        <span class="btn-text">Join →</span>
        <span class="btn-loading">Joining...</span>
    </button>
</form>
<div id="formMessage" class="form-message"></div>
```

### Form Handler

```javascript
async function handleWaitlistSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const submitBtn = form.querySelector('#submitBtn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    const messageEl = document.getElementById('formMessage');
    const emailInput = form.querySelector('#email');
    const nameInput = form.querySelector('#companyName');

    // Reset & loading state
    submitBtn.disabled = true;
    btnText.style.display = 'none';
    btnLoading.style.display = 'inline';

    const result = await WaitlistModule.submit(
        emailInput.value,
        nameInput.value,
        'website'
    );

    messageEl.textContent = result.message;
    messageEl.className = 'form-message ' + (result.success ? 'success' : 'error');

    if (result.success) form.reset();

    submitBtn.disabled = false;
    btnText.style.display = 'inline';
    btnLoading.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    WaitlistModule.init();
    document.getElementById('waitlistForm').addEventListener('submit', handleWaitlistSubmit);
});
```

---

## Database Schema

| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key (auto-generated) |
| email | TEXT | Unique, required |
| company_name | TEXT | Required |
| source | TEXT | Default: 'website' |
| created_at | TIMESTAMPTZ | Auto-generated |
| is_active | BOOLEAN | Default: true |
| unsubscribed_at | TIMESTAMPTZ | For future unsubscribe |

## Security

- **Row Level Security (RLS)** enabled
- Anonymous users can only INSERT (not read data)
- Publishable key is safe for client-side (protected by RLS)
- Duplicate emails return friendly message (no data leak)

## Customization

### Change Fields

1. Update SQL migration (column names)
2. Update `supabase-waitlist.js` (validation + insert object)
3. Update HTML form (input fields)

### Add Fields

Add to migration:
```sql
ALTER TABLE waitlist_subscribers ADD COLUMN phone TEXT;
```

Update JS insert object:
```javascript
.insert([{
    email: normalizedEmail,
    company_name: normalizedCompany,
    phone: phoneValue,
    source: source
}]);
```

---

## View Submissions

- Supabase Dashboard → Table Editor → `waitlist_subscribers`
- Or export via SQL: `SELECT * FROM waitlist_subscribers ORDER BY created_at DESC;`
