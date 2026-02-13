import type { RequestHandler } from './$types';
import BaseData from '$lib/data/base';
import SkillsData from '$lib/data/skills';
import ProjectsData from '$lib/data/projects';
import ExperienceData from '$lib/data/experience';
import EducationData from '$lib/data/education';
import GalleryData from '$lib/data/gallery';

const siteUrl = 'https://saiiprashanth.github.io'; // Update with your actual domain
const basePath = '/GameDesign'; // SvelteKit base path

export const prerender = true;

export const GET: RequestHandler = async () => {
	const now = new Date();
	const oneMonthAgo = new Date(now);
	oneMonthAgo.setMonth(now.getMonth() - 1);
	const sixMonthsAgo = new Date(now);
	sixMonthsAgo.setMonth(now.getMonth() - 6);
	const oneYearAgo = new Date(now);
	oneYearAgo.setFullYear(now.getFullYear() - 1);

	const pages: Array<{ url: string; priority: string; changefreq: string; lastmod: string }> = [
		{ url: '', priority: '1.0', changefreq: 'weekly', lastmod: oneMonthAgo.toISOString() },
		{ url: '/skills', priority: '0.9', changefreq: 'weekly', lastmod: oneMonthAgo.toISOString() },
		{ url: '/projects', priority: '0.9', changefreq: 'weekly', lastmod: oneMonthAgo.toISOString() },
		{ url: '/gallery', priority: '0.7', changefreq: 'monthly', lastmod: sixMonthsAgo.toISOString() },
		{ url: '/experience', priority: '0.8', changefreq: 'monthly', lastmod: sixMonthsAgo.toISOString() },
		{ url: '/education', priority: '0.7', changefreq: 'yearly', lastmod: oneYearAgo.toISOString() },
		{ url: '/resume', priority: '0.8', changefreq: 'monthly', lastmod: oneMonthAgo.toISOString() },
		{ url: '/search', priority: '0.6', changefreq: 'monthly', lastmod: oneMonthAgo.toISOString() }
	];

	// Add skill pages
	SkillsData.items.forEach((skill) => {
		pages.push({
			url: `/skills/${skill.slug}`,
			priority: '0.7',
			changefreq: 'monthly',
			lastmod: sixMonthsAgo.toISOString()
		});
	});

	// Add project pages with dynamic priority (newer projects = higher priority)
	ProjectsData.items.forEach((project, index) => {
		// First 3 projects get higher priority
		const priority = index < 3 ? '0.85' : '0.75';
		pages.push({
			url: `/projects/${project.slug}`,
			priority,
			changefreq: 'monthly',
			lastmod: sixMonthsAgo.toISOString()
		});
	});

	// Add experience pages
	ExperienceData.items.forEach((exp, index) => {
		// Recent experience gets higher priority
		const priority = index < 2 ? '0.75' : '0.65';
		pages.push({
			url: `/experience/${exp.slug}`,
			priority,
			changefreq: 'monthly',
			lastmod: sixMonthsAgo.toISOString()
		});
	});

	// Add education pages
	EducationData.items.forEach((edu) => {
		pages.push({
			url: `/education/${edu.slug}`,
			priority: '0.6',
			changefreq: 'yearly',
			lastmod: oneYearAgo.toISOString()
		});
	});

	// Add gallery pages
	GalleryData.items.forEach((item) => {
		pages.push({
			url: `/gallery/${item.slug}`,
			priority: '0.65',
			changefreq: 'monthly',
			lastmod: sixMonthsAgo.toISOString()
		});
	});

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${pages
	.map(
		(page) => `  <url>
    <loc>${siteUrl}${basePath}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400'
		}
	});
};
