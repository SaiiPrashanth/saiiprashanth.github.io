# Analytics Setup Guide

This portfolio includes flexible analytics support for both **Google Analytics** and **Plausible Analytics**.

## Setup Instructions

### Option 1: Google Analytics (Free)

1. Create a Google Analytics account at [analytics.google.com](https://analytics.google.com)
2. Set up a new property for your website
3. Copy your Measurement ID (format: `G-XXXXXXXXXX`)
4. Edit `src/lib/data/analytics.ts`:

```typescript
export const analytics = {
	provider: 'google',
	googleAnalyticsId: 'G-XXXXXXXXXX', // Replace with your ID
};
```

**Features:**
- ✅ Detailed traffic analysis
- ✅ Real-time visitor tracking
- ✅ Conversion tracking
- ✅ Free forever
- ❌ Collects user data (privacy concerns)

### Option 2: Plausible Analytics (Privacy-Friendly)

1. Sign up at [plausible.io](https://plausible.io) (paid after trial)
2. Add your website domain
3. Edit `src/lib/data/analytics.ts`:

```typescript
export const analytics = {
	provider: 'plausible',
	plausibleDomain: 'yourdomain.com', // Your actual domain
};
```

**Features:**
- ✅ Privacy-focused (GDPR compliant)
- ✅ No cookies
- ✅ Lightweight script (~1KB)
- ✅ Simple, clean dashboard
- ❌ Paid service ($9/month)

### Option 3: Disable Analytics

If you don't want analytics, leave the default configuration:

```typescript
export const analytics = {
	provider: null,
	googleAnalyticsId: '',
	plausibleDomain: '',
};
```

## What Gets Tracked?

Both providers automatically track:
- Page views
- Referral sources
- Device types (mobile, desktop, tablet)
- Geographic location (country/city)

**No personal data is collected** - only aggregate statistics.

## Testing Analytics

After setup:
1. Build and deploy your site
2. Visit your deployed site
3. Check your analytics dashboard (may take 24-48 hours for first data)

## Self-Hosting Plausible (Advanced)

You can self-host Plausible for free:

1. Follow [Plausible self-hosting guide](https://plausible.io/docs/self-hosting)
2. Update your analytics configuration:

```typescript
export const analytics = {
	provider: 'plausible',
	plausibleDomain: 'yourdomain.com',
	plausibleSrc: 'https://your-plausible-instance.com/js/script.js'
};
```

## Verification

To verify analytics is working:
1. Open browser DevTools → Network tab
2. Visit your site
3. Look for:
   - Google: Request to `google-analytics.com`
   - Plausible: Request to `plausible.io` or your custom domain

---

**Recommendation:** For a portfolio site, Plausible is recommended due to its privacy-friendly approach and simple setup.
