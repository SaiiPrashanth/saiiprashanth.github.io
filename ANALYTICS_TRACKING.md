# Analytics Tracking Guide

## Overview
This portfolio tracks comprehensive user interactions using Google Analytics 4 (GA4). All tracking is privacy-respecting and follows best practices.

## Current Tracking ID
- **Google Analytics ID**: `G-H6DW35WLXY`
- **Provider**: Google Analytics 4

## When Forking for New Portfolio

**IMPORTANT**: Each website/domain needs its own unique Google Analytics tracking ID.

### Steps to Set Up Analytics for Forked Portfolio:

1. **Create New GA4 Property**:
   - Go to [Google Analytics](https://analytics.google.com)
   - Click "Admin" → "Create Property"
   - Name it (e.g., "Web Dev Portfolio", "Design Portfolio")
   - Set up data stream for your website
   - Copy the new Measurement ID (starts with `G-`)

2. **Update `src/lib/data/analytics.ts`**:
   ```typescript
   export const analytics = {
       provider: 'google',
       googleAnalyticsId: 'G-YOUR-NEW-ID-HERE', // Replace with your new ID
       // ...
   };
   ```

3. **Test**: Visit your deployed site and check Google Analytics Realtime reports

## Tracked Events

### 1. **Page Views** (Automatic)
- Tracks every page navigation
- Location: All pages
- Event: `page_view`

### 2. **Project Link Clicks**
- Tracks clicks on GitHub and Itch.io links
- Location: Project detail pages (`/projects/[slug]`)
- Event: `project_link_click`
- Parameters:
  - `project_name`: Name of the project
  - `link_type`: "GitHub" | "Itch.io" | "Other"
  - `link_url`: The URL clicked

**How to View**:
- Go to GA4 → Reports → Engagement → Events
- Look for `project_link_click`
- See which projects get most clicks and which platforms (GitHub vs Itch.io)

### 3. **Resume Downloads**
- Tracks PDF resume downloads
- Location: `/resume` page
- Event: `file_download`
- Parameters:
  - `file_type`: "pdf"
  - `file_name`: "Resume.pdf"

**How to View**:
- GA4 → Reports → Engagement → Events → `file_download`
- Track how many people download your resume

### 4. **Card Clicks**
- Tracks clicks on project, skill, experience, education cards
- Locations: Search results, project listings
- Event: `card_click`
- Parameters:
  - `card_type`: "Project" | "Skills" | "Experience" | "Education" | "Gallery"
  - `card_name`: Name of the item
  - `destination`: URL navigated to

**How to View**:
- GA4 → Reports → Engagement → Events → `card_click`
- See which projects/skills attract the most interest

### 5. **Search Queries**
- Tracks what users search for
- Location: `/search` page
- Event: `search`
- Parameters:
  - `search_term`: The query entered
  - `results_count`: Number of results found

**How to View**:
- GA4 → Reports → Engagement → Events → `search`
- Understand what visitors are looking for
- Identify popular topics

## Available (Not Yet Implemented)

These tracking functions exist but aren't hooked up yet:

### Navigation Tracking
```typescript
trackNavigation(destination, label)
```
Use for tracking navbar clicks, footer links

### Skill Clicks
```typescript
trackSkillClick(skillName, from)
```
Track when users click on skill badges

### Carousel Interactions
```typescript
trackCarousel(action, currentIndex)
```
Track home page carousel navigation

### Theme Changes
```typescript
trackThemeChange(theme)
```
Track light/dark mode switches

## Viewing Analytics Data

### Realtime Reports (Immediate)
1. Go to Google Analytics
2. Click "Realtime" in sidebar
3. See active users immediately
4. See events as they happen

### Standard Reports (24-48 hours delay)
1. Go to Google Analytics
2. Navigate to:
   - **Engagement → Events**: See all event types and counts
   - **Engagement → Pages and Screens**: Most visited pages
   - **User Attributes**: Demographics and locations
   - **Tech → Overview**: Devices, browsers, OS

### Custom Reports
Create custom explorations to:
- Compare GitHub vs Itch.io clicks
- Track conversion funnel (view project → click link)
- See most searched terms over time

## Privacy & Compliance

- **No Personal Data**: We don't collect names, emails, or personal info
- **Anonymous IDs**: Google Analytics uses anonymous user IDs
- **Cookie Consent**: Consider adding cookie banner if required in your region
- **GDPR Compliant**: GA4 is designed for GDPR compliance

## Troubleshooting

### No Data Showing
1. **Wait 24-48 hours** for standard reports (use Realtime for immediate feedback)
2. **Check Realtime reports** - visit your live site and see yourself
3. **Verify tracking ID** in `analytics.ts` matches your GA4 property
4. **Check deployed site** - analytics only works on live site, not localhost
5. **Disable ad blockers** when testing - they block GA scripts
6. **Browser console** - check for JavaScript errors (F12)

### Events Not Recording
1. Check browser console for errors
2. Verify `gtag` is loaded: Type `window.gtag` in console - should be a function
3. Make sure tracking function is called with correct parameters
4. Check GA4 Realtime → Events to see if events appear

## Best Practices

1. **Different IDs for Different Sites**: Never reuse analytics IDs across different domains
2. **Test in Realtime**: Always test new tracking in Realtime reports first
3. **Document Changes**: Keep this file updated when adding new tracking
4. **Regular Reviews**: Check analytics monthly to understand user behavior
5. **Privacy First**: Be transparent about tracking in your privacy policy

## Support

- **Google Analytics Help**: https://support.google.com/analytics
- **GA4 Documentation**: https://developers.google.com/analytics/devguides/collection/ga4
- **This Portfolio Issues**: https://github.com/SaiiPrashanth/GameDesign/issues
