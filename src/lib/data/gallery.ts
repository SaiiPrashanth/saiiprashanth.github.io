import Assets from './assets';
import type { GalleryItem } from './types';

const title = 'Gallery';

const items: Array<GalleryItem> = [
	{
		slug: 'cam-project',
		name: 'Camera System Project',
		description: 'Advanced camera system implementation showcasing multiple viewpoints and perspectives. Technical demonstration of camera controls and rendering techniques.',
		shortDescription: 'Multi-viewpoint camera system implementation.',
		image: '/gallery/Cam1_a.png',
		tags: ['3d', 'camera', 'rendering', 'technical'],
		category: '3d',
		links: [
			{ to: '#', label: 'View Full Size' }
		],
		screenshots: [
			{ src: '/gallery/Cam1_a.png', label: 'Camera View 1' },
			{ src: '/gallery/Cam2_a.png', label: 'Camera View 2' }
		]
	},
	{
		slug: 'pentab-project',
		name: 'Pen Tablet 3D Model',
		description: '3D model of a digital drawing tablet with detailed modeling and realistic materials. High-quality product visualization.',
		shortDescription: '3D model of digital drawing tablet.',
		image: '/gallery/PenTab1_b.png',
		tags: ['3d modeling', 'product design', 'tablet', 'hardware'],
		category: '3d',
		links: [
			{ to: '#', label: 'View Full Size' }
		],
		screenshots: [
			{ src: '/gallery/PenTab1_b.png', label: 'Pen Tablet View 1' },
			{ src: '/gallery/PenTab2_b.jpg', label: 'Pen Tablet View 2' }
		]
	},
	{
		slug: 'tws-project',
		name: 'TWS Wireless Earbuds',
		description: '3D product visualization of True Wireless Stereo earbuds. High-quality rendering with attention to materials and lighting.',
		shortDescription: '3D visualization of wireless earbuds.',
		image: '/gallery/TWS1_c.png',
		tags: ['3d modeling', 'product design', 'rendering', 'audio'],
		category: '3d',
		links: [
			{ to: '#', label: 'View Full Size' }
		],
		screenshots: [
			{ src: '/gallery/TWS1_c.png', label: 'TWS View 1' },
			{ src: '/gallery/TWS2_c.png', label: 'TWS View 2' }
		]
	},
	{
		slug: 'fps-game',
		name: 'FPS Game Project',
		description: 'First-person shooter game development showcasing gameplay mechanics, level design, and weapon systems.',
		shortDescription: 'FPS game with advanced mechanics and level design.',
		image: '/gallery/FPS1_d.png',
		tags: ['game design', 'fps', 'unity', 'game development'],
		category: 'game',
		links: [
			{ to: '#', label: 'View Full Size' }
		],
		screenshots: [
			{ src: '/gallery/FPS1_d.png', label: 'FPS Gameplay 1' },
			{ src: '/gallery/FPS2_d.png', label: 'FPS Gameplay 2' }
		]
	},
	{
		slug: 'pixel-girl',
		name: 'Pixel Girl',
		description: 'A pixel art character design showcasing retro gaming aesthetics. Created with attention to detail in limited resolution.',
		shortDescription: 'Pixel art character design with retro gaming style.',
		image: '/gallery/PixelGirl.png',
		tags: ['pixel art', 'character', '2d', 'retro'],
		category: '2d',
		links: [
			{ to: '#', label: 'View Full Size' }
		],
		screenshots: [
			{ src: '/gallery/PixelGirl.png', label: 'Pixel Girl' }
		]
	},
	{
		slug: 'joker',
		name: 'Joker',
		description: 'Digital artwork featuring the iconic character with unique artistic interpretation and vibrant colors.',
		shortDescription: 'Digital artwork featuring iconic character design.',
		image: '/gallery/Joker.png',
		tags: ['digital art', 'character', 'illustration', 'fan art'],
		category: '2d',
		links: [
			{ to: '#', label: 'View Full Size' }
		],
		screenshots: [
			{ src: '/gallery/Joker.png', label: 'Joker' }
		]
	},
	{
		slug: 'elaina-vr',
		name: 'Elaina VR',
		description: 'Character visualization for VR experience. Designed with immersive virtual reality applications in mind.',
		shortDescription: 'VR character design for immersive experiences.',
		image: '/gallery/Elaina VR.png',
		tags: ['vr', 'character', '3d', 'virtual reality'],
		category: '3d',
		links: [
			{ to: '#', label: 'View Full Size' }
		],
		screenshots: [
			{ src: '/gallery/Elaina VR.png', label: 'Elaina VR' }
		]
	},
	{
		slug: 'dog-portrait-1',
		name: 'Dog Portrait 1',
		description: 'Digital illustration featuring a dog with expressive features, detailed fur rendering, and unique personality.',
		shortDescription: 'Expressive dog portrait with detailed fur.',
		image: '/gallery/Dog1.png',
		tags: ['illustration', 'animal', 'portrait', 'digital art'],
		category: '2d',
		links: [
			{ to: '#', label: 'View Full Size' }
		],
		screenshots: [
			{ src: '/gallery/Dog1.png', label: 'Dog Portrait 1' }
		]
	},
	{
		slug: 'dog-portrait-2',
		name: 'Dog Portrait 2',
		description: 'Digital illustration featuring a dog with expressive features, detailed fur rendering, and unique personality.',
		shortDescription: 'Expressive dog portrait with detailed fur.',
		image: '/gallery/Dog2.png',
		tags: ['illustration', 'animal', 'portrait', 'digital art'],
		category: '2d',
		links: [
			{ to: '#', label: 'View Full Size' }
		],
		screenshots: [
			{ src: '/gallery/Dog2.png', label: 'Dog Portrait 2' }
		]
	},
	{
		slug: 'dog-portrait-3',
		name: 'Dog Portrait 3',
		description: 'Digital illustration featuring a dog with expressive features, detailed fur rendering, and unique personality.',
		shortDescription: 'Expressive dog portrait with detailed fur.',
		image: '/gallery/Dog3.png',
		tags: ['illustration', 'animal', 'portrait', 'digital art'],
		category: '2d',
		links: [
			{ to: '#', label: 'View Full Size' }
		],
		screenshots: [
			{ src: '/gallery/Dog3.png', label: 'Dog Portrait 3' }
		]
	},
	{
		slug: 'website-design',
		name: 'Website Design',
		description: 'Modern website design mockup showcasing clean layout, user interface elements, and responsive design principles.',
		shortDescription: 'Modern website design with clean UI/UX.',
		image: '/gallery/Website.png',
		tags: ['web design', 'ui/ux', 'interface', 'mockup'],
		category: '2d',
		links: [
			{ to: '#', label: 'View Full Size' }
		],
		screenshots: [
			{ src: '/gallery/Website.png', label: 'Website Design' }
		]
	},
	{
		slug: 'ambiroom',
		name: 'AmbiRoom',
		description: '3D environment design featuring ambient lighting and atmospheric room visualization. Created with focus on mood and ambiance.',
		shortDescription: 'Ambient room environment with atmospheric lighting.',
		image: '/gallery/AmbiRoom.jpg',
		tags: ['3d', 'environment', 'lighting', 'interior'],
		category: '3d',
		links: [
			{ to: '#', label: 'View Full Size' }
		],
		screenshots: [
			{ src: '/gallery/AmbiRoom.jpg', label: 'AmbiRoom' }
		]
	},
	{
		slug: 'hill-landscape',
		name: 'Hill Terrain',
		description: '3D terrain generation featuring rolling hills and natural landscape. Created with procedural techniques and realistic texturing.',
		shortDescription: 'Procedural hill terrain with natural features.',
		image: '/gallery/Hill.jpg',
		tags: ['terrain', 'landscape', 'procedural', 'environment'],
		category: 'terrain',
		links: [
			{ to: '#', label: 'View Full Size' }
		],
		screenshots: [
			{ src: '/gallery/Hill.jpg', label: 'Hill Landscape' }
		]
	},
	{
		slug: 'sword-model',
		name: 'Sword Model',
		description: '3D sword model with detailed textures and materials. Game-ready asset with attention to form and detail.',
		shortDescription: 'Detailed 3D sword model for games.',
		image: '/gallery/Sword.jpg',
		tags: ['3d modeling', 'weapon', 'game asset', 'prop'],
		category: '3d',
		links: [
			{ to: '#', label: 'View Full Size' }
		],
		screenshots: [
			{ src: '/gallery/Sword.jpg', label: 'Sword Model' }
		]
	}
];

const GalleryData = {
	title,
	items
};

export default GalleryData;
