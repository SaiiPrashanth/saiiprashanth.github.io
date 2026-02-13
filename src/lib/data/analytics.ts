// Analytics configuration
export const analytics = {
	// Set to 'google' for Google Analytics, 'plausible' for Plausible, or null to disable
	provider: 'google' as 'google' | 'plausible' | null,
	
	// Google Analytics Measurement ID (e.g., 'G-XXXXXXXXXX')
	googleAnalyticsId: 'G-LX6494KZ4P',
	
	// Plausible domain (your website domain)
	plausibleDomain: '',
	
	// Optional: Plausible custom domain if self-hosting
	plausibleSrc: 'https://plausible.io/js/script.js'
};

export default analytics;
