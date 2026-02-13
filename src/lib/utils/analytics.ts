// Analytics event tracking utilities
import { browser } from '$app/environment';
import analytics from '$lib/data/analytics';

/**
 * Track external link clicks
 */
export function trackExternalLink(label: string, url: string, category: string = 'External Link') {
	if (!browser || analytics.provider !== 'google' || !analytics.googleAnalyticsId) return;
	
	if (typeof window.gtag !== 'undefined') {
		window.gtag('event', 'click', {
			event_category: category,
			event_label: label,
			value: url
		});
	}
}

/**
 * Track project link clicks with specific categories
 */
export function trackProjectLink(projectName: string, linkType: 'GitHub' | 'Itch.io' | 'Other', url: string) {
	if (!browser || analytics.provider !== 'google' || !analytics.googleAnalyticsId) return;
	
	if (typeof window.gtag !== 'undefined') {
		window.gtag('event', 'project_link_click', {
			event_category: 'Project Links',
			event_label: `${projectName} - ${linkType}`,
			link_type: linkType,
			project_name: projectName,
			link_url: url
		});
	}
}

/**
 * Track downloads (like resume PDF)
 */
export function trackDownload(fileName: string, fileType: string) {
	if (!browser || analytics.provider !== 'google' || !analytics.googleAnalyticsId) return;
	
	if (typeof window.gtag !== 'undefined') {
		window.gtag('event', 'file_download', {
			event_category: 'Downloads',
			event_label: fileName,
			file_type: fileType
		});
	}
}

/**
 * Track card clicks (projects, skills, experience, education)
 */
export function trackCardClick(cardType: string, cardName: string, destination: string) {
	if (!browser || analytics.provider !== 'google' || !analytics.googleAnalyticsId) return;
	
	if (typeof window.gtag !== 'undefined') {
		window.gtag('event', 'card_click', {
			event_category: 'Card Navigation',
			event_label: `${cardType} - ${cardName}`,
			card_type: cardType,
			card_name: cardName,
			destination: destination
		});
	}
}

/**
 * Track search queries
 */
export function trackSearch(query: string, resultsCount: number) {
	if (!browser || analytics.provider !== 'google' || !analytics.googleAnalyticsId) return;
	
	if (typeof window.gtag !== 'undefined') {
		window.gtag('event', 'search', {
			search_term: query,
			results_count: resultsCount
		});
	}
}

/**
 * Track navigation clicks
 */
export function trackNavigation(destination: string, label: string) {
	if (!browser || analytics.provider !== 'google' || !analytics.googleAnalyticsId) return;
	
	if (typeof window.gtag !== 'undefined') {
		window.gtag('event', 'navigation_click', {
			event_category: 'Navigation',
			event_label: label,
			destination: destination
		});
	}
}

/**
 * Track skill clicks
 */
export function trackSkillClick(skillName: string, from: string) {
	if (!browser || analytics.provider !== 'google' || !analytics.googleAnalyticsId) return;
	
	if (typeof window.gtag !== 'undefined') {
		window.gtag('event', 'skill_click', {
			event_category: 'Skills',
			event_label: skillName,
			skill_name: skillName,
			clicked_from: from
		});
	}
}

/**
 * Track carousel interactions
 */
export function trackCarousel(action: 'next' | 'prev' | 'auto', currentIndex: number) {
	if (!browser || analytics.provider !== 'google' || !analytics.googleAnalyticsId) return;
	
	if (typeof window.gtag !== 'undefined') {
		window.gtag('event', 'carousel_interaction', {
			event_category: 'Home Carousel',
			event_label: action,
			action: action,
			slide_index: currentIndex
		});
	}
}

/**
 * Track theme changes
 */
export function trackThemeChange(theme: 'light' | 'dark') {
	if (!browser || analytics.provider !== 'google' || !analytics.googleAnalyticsId) return;
	
	if (typeof window.gtag !== 'undefined') {
		window.gtag('event', 'theme_change', {
			event_category: 'User Preferences',
			event_label: theme,
			theme: theme
		});
	}
}

/**
 * Track certificate/credential link clicks
 */
export function trackCertificateClick(certificateName: string, organization: string, url: string) {
	if (!browser || analytics.provider !== 'google' || !analytics.googleAnalyticsId) return;
	
	if (typeof window.gtag !== 'undefined') {
		window.gtag('event', 'certificate_click', {
			event_category: 'Certificates',
			event_label: `${certificateName} - ${organization}`,
			certificate_name: certificateName,
			organization: organization,
			certificate_url: url
		});
	}
}

/**
 * Track social media link clicks
 */
export function trackSocialClick(platform: string, url: string, location: string = 'Home') {
	if (!browser || analytics.provider !== 'google' || !analytics.googleAnalyticsId) return;
	
	if (typeof window.gtag !== 'undefined') {
		window.gtag('event', 'social_click', {
			event_category: 'Social Media',
			event_label: `${platform} - ${location}`,
			platform: platform,
			clicked_from: location,
			social_url: url
		});
	}
}

/**
 * Track gallery item clicks
 */
export function trackGalleryClick(itemName: string, category: string, destination: string) {
	if (!browser || analytics.provider !== 'google' || !analytics.googleAnalyticsId) return;
	
	if (typeof window.gtag !== 'undefined') {
		window.gtag('event', 'gallery_click', {
			event_category: 'Gallery',
			event_label: `${itemName} - ${category}`,
			item_name: itemName,
			category: category,
			destination: destination
		});
	}
}

/**
 * Track custom events
 */
export function trackEvent(eventName: string, params?: Record<string, any>) {
	if (!browser || analytics.provider !== 'google' || !analytics.googleAnalyticsId) return;
	
	if (typeof window.gtag !== 'undefined') {
		window.gtag('event', eventName, params);
	}
}
