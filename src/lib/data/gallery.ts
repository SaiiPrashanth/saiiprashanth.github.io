import Assets from './assets';
import type { GalleryItem } from './types';

const title = 'Gallery';

const items: Array<GalleryItem> = [
	{
		slug: 'digital-art-1',
		name: 'Abstract Composition',
		description: 'A vibrant digital artwork exploring color theory and abstract forms. Created using modern digital tools to showcase artistic expression.',
		shortDescription: 'Vibrant digital artwork exploring abstract forms and color theory.',
		image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=400&fit=crop&auto=format',
		tags: ['digital art', 'abstract', 'colorful', 'composition'],
		category: '2d',
		links: [
			{ to: '#', label: 'View Full Size' }
		],
		screenshots: [
			{ src: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop&auto=format', label: 'Full artwork' }
		]
	},
	{
		slug: '3d-model-1',
		name: 'Architectural Visualization',
		description: 'A detailed 3D architectural model showcasing modern design principles. Rendered with realistic lighting and materials.',
		shortDescription: 'Detailed 3D architectural visualization with modern design.',
		image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop&auto=format',
		tags: ['3d modeling', 'architecture', 'visualization', 'render'],
		category: '3d',
		links: [
			{ to: '#', label: 'Interactive View' }
		],
		screenshots: [
			{ src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&auto=format', label: 'Front view' },
			{ src: 'https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=800&h=600&fit=crop&auto=format', label: 'Side view' }
		]
	},
	{
		slug: 'game-concept-1',
		name: 'Fantasy Character Design',
		description: 'Original character design for a fantasy RPG game. Complete with backstory, abilities, and detailed visual development.',
		shortDescription: 'Original fantasy character design for RPG games.',
		image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop&auto=format',
		tags: ['game design', 'character', 'fantasy', 'concept art'],
		category: 'game',
		links: [
			{ to: '#', label: 'Character Sheet' }
		],
		screenshots: [
			{ src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&auto=format', label: 'Character design' },
			{ src: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&h=600&fit=crop&auto=format', label: 'Concept sketches' }
		]
	},
	{
		slug: 'terrain-1',
		name: 'Mountain Landscape',
		description: 'Procedurally generated mountain terrain with realistic textures and atmospheric effects. Created for game environments.',
		shortDescription: 'Procedural mountain terrain for game environments.',
		image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&auto=format',
		tags: ['terrain', 'procedural', 'landscape', 'environment'],
		category: 'terrain',
		links: [
			{ to: '#', label: 'Download Assets' }
		],
		screenshots: [
			{ src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&auto=format', label: 'Aerial view' },
			{ src: 'https://images.unsplash.com/photo-1464822759844-d150f4727f6e?w=800&h=600&fit=crop&auto=format', label: 'Close-up detail' }
		]
	},
	{
		slug: 'illustration-1',
		name: 'Portrait Study',
		description: 'Digital portrait illustration focusing on light, shadow, and human expression. Part of a series exploring portraiture.',
		shortDescription: 'Digital portrait study focusing on light and expression.',
		image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop&auto=format',
		tags: ['illustration', 'portrait', 'digital painting', 'study'],
		category: '2d',
		links: [
			{ to: '#', label: 'Process Video' }
		],
		screenshots: [
			{ src: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop&auto=format', label: 'Final illustration' },
			{ src: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&h=600&fit=crop&auto=format', label: 'Work in progress' }
		]
	},
	{
		slug: 'game-environment-1',
		name: 'Sci-Fi Environment',
		description: 'Futuristic game environment design featuring advanced technology and atmospheric lighting. Designed for a sci-fi adventure game.',
		shortDescription: 'Futuristic game environment with advanced technology.',
		image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop&auto=format',
		tags: ['game design', 'sci-fi', 'environment', 'concept'],
		category: 'game',
		links: [
			{ to: '#', label: 'Environment Pack' }
		],
		screenshots: [
			{ src: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop&auto=format', label: 'Main environment' },
			{ src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&auto=format', label: 'Detail shots' }
		]
	},
	{
		slug: 'web-design-1',
		name: 'Modern UI/UX Design',
		description: 'Clean and modern user interface design for a mobile application. Focusing on user experience and accessibility.',
		shortDescription: 'Modern mobile app UI/UX design with focus on usability.',
		image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?w=600&h=400&fit=crop&auto=format',
		tags: ['ui design', 'ux', 'mobile', 'interface'],
		category: '2d',
		links: [
			{ to: '#', label: 'Figma File' },
			{ to: '#', label: 'Prototype' }
		],
		screenshots: [
			{ src: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800&h=600&fit=crop&auto=format', label: 'Main screens' },
			{ src: 'https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=800&h=600&fit=crop&auto=format', label: 'Component library' }
		]
	},
	{
		slug: '3d-product-1',
		name: 'Product Visualization',
		description: 'High-quality 3D product rendering for e-commerce and marketing materials. Photorealistic lighting and materials.',
		shortDescription: 'Photorealistic 3D product rendering for marketing.',
		image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop&auto=format',
		tags: ['3d rendering', 'product design', 'visualization', 'marketing'],
		category: '3d',
		links: [
			{ to: '#', label: 'High-Res Images' }
		],
		screenshots: [
			{ src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&auto=format', label: 'Product shot' },
			{ src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&auto=format', label: 'Detail view' }
		]
	}
];

const GalleryData = {
	title,
	items
};

export default GalleryData;
