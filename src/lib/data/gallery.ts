import Assets from './assets';
import type { GalleryItem } from './types';

const title = 'Gallery';

const items: Array<GalleryItem> = [
	// --- 2D ART ---
	{
		slug: 'pixel-girl',
		name: 'Pixel Anime Girl',
		description: 'Pixel art design of an anime style character with retro aesthetics.',
		shortDescription: 'Pixel art anime girl character.',
		image: '/gallery/PixelGirl.webp',
		tags: ['pixel-art', 'character-design', 'anime', '2d'],
		category: '2d',
		links: [
			{ to: 'https://www.artstation.com/saiiprashanth', label: 'View on ArtStation', newTab: true }
		],
		screenshots: [
			{ src: '/gallery/PixelGirl.webp', label: 'Pixel Anime Girl' }
		]
	},
	{
		slug: 'joker',
		name: 'Polygon Joker',
		description: 'Polygon art illustration of The Joker featuring sharp geometric shapes.',
		shortDescription: 'Polygon art illustration of The Joker.',
		image: '/gallery/Joker.webp',
		tags: ['polygon-art', 'fan-art', 'illustration', '2d'],
		category: '2d',
		links: [
			{ to: 'https://www.artstation.com/saiiprashanth', label: 'View on ArtStation', newTab: true }
		],
		screenshots: [
			{ src: '/gallery/Joker.webp', label: 'Polygon Joker' }
		]
	},
	{
		slug: 'dog-portrait-1',
		name: 'Canine Portrait I',
		description: 'Digital pet portrait capturing the texture and expression of a dog.',
		shortDescription: 'Digital pet portrait capturing texture and expression.',
		image: '/gallery/Dog1.webp',
		tags: ['digital-painting', 'animal', 'portrait', 'illustration'],
		category: '2d',
		links: [
			{ to: 'https://www.artstation.com/saiiprashanth', label: 'View on ArtStation', newTab: true }
		],
		screenshots: [
			{ src: '/gallery/Dog1.webp', label: 'Canine Portrait I' }
		]
	},
	{
		slug: 'dog-portrait-2',
		name: 'Canine Portrait II',
		description: 'Expressive digital illustration of a dog with a focus on fur details.',
		shortDescription: 'Expressive digital dog illustration with fur details.',
		image: '/gallery/Dog2.webp',
		tags: ['digital-painting', 'animal', 'portrait', 'illustration'],
		category: '2d',
		links: [
			{ to: 'https://www.artstation.com/saiiprashanth', label: 'View on ArtStation', newTab: true }
		],
		screenshots: [
			{ src: '/gallery/Dog2.webp', label: 'Canine Portrait II' }
		]
	},
	{
		slug: 'dog-portrait-3',
		name: 'Canine Portrait III',
		description: 'Stylized digital portrait of a dog highlighting unique character traits.',
		shortDescription: 'Stylized digital dog portrait highlighting character.',
		image: '/gallery/Dog3.webp',
		tags: ['digital-painting', 'animal', 'portrait', 'illustration'],
		category: '2d',
		links: [
			{ to: 'https://www.artstation.com/saiiprashanth', label: 'View on ArtStation', newTab: true }
		],
		screenshots: [
			{ src: '/gallery/Dog3.webp', label: 'Canine Portrait III' }
		]
	},

	// --- UI ---
	{
		slug: 'website-design',
		name: 'GitHub Page UI Design',
		description: 'UI design mockup for a GitHub page focusing on clean layout and clarity.',
		shortDescription: 'GitHub page user interface design mockup.',
		image: '/gallery/Website.webp',
		tags: ['ui-design', 'web', 'github', 'mockup'],
		category: 'ui',
		links: [
			{ to: 'https://www.artstation.com/saiiprashanth', label: 'View on ArtStation', newTab: true }
		],
		screenshots: [
			{ src: '/gallery/Website.webp', label: 'GitHub UI Design' }
		]
	},

	// --- 3D MODEL ---
	{
		slug: 'cam-project',
		name: 'Webcam Model',
		description: 'A detailed 3D model of a webcam with realistic texturing and materials.',
		shortDescription: 'Detailed 3D webcam model.',
		image: '/gallery/Cam.webp',
		tags: ['3d', 'hard-surface', 'modeling', 'webcam'],
		category: '3d',
		links: [
			{ to: 'https://www.artstation.com/saiiprashanth', label: 'View on ArtStation', newTab: true }
		],
		screenshots: [
			{ src: '/gallery/Cam.webp', label: 'Webcam Model' }
		]
	},
	{
		slug: 'pentab-project',
		name: 'Wacom Tablet and Stylus',
		description: '3D model of a Wacom digital drawing tablet and stylus for product visualization.',
		shortDescription: '3D model of Wacom tablet and stylus.',
		image: '/gallery/PenTab.webp',
		tags: ['3d', 'product-design', 'wacom', 'modeling'],
		category: '3d',
		links: [
			{ to: 'https://www.artstation.com/saiiprashanth', label: 'View on ArtStation', newTab: true }
		],
		screenshots: [
			{ src: '/gallery/PenTab.webp', label: 'Wacom Tablet' }
		]
	},
	{
		slug: 'tws-project',
		name: 'Futuristic Earbuds',
		description: 'A futuristic 3D visualization of True Wireless Stereo earbuds.',
		shortDescription: 'Futuristic 3D earbuds visualization.',
		image: '/gallery/TWS.webp',
		tags: ['3d', 'product-design', 'futuristic', 'rendering'],
		category: '3d',
		links: [
			{ to: 'https://www.artstation.com/saiiprashanth', label: 'View on ArtStation', newTab: true }
		],
		screenshots: [
			{ src: '/gallery/TWS.webp', label: 'Futuristic Earbuds' }
		]
	},
	{
		slug: 'ambiroom',
		name: 'Ambient Room',
		description: '3D Ambient night bedroom environment.',
		shortDescription: '3D Ambient night bedroom environment.',
		image: '/gallery/AmbiRoom.webp',
		tags: ['3d', 'environment', 'lighting', 'interior'],
		category: '3d',
		links: [
			{ to: 'https://www.artstation.com/saiiprashanth', label: 'View on ArtStation', newTab: true }
		],
		screenshots: [
			{ src: '/gallery/AmbiRoom.webp', label: 'Ambient Room' }
		]
	},
	{
		slug: 'sword-model',
		name: 'Low poly PBR Sword',
		description: 'Fantasy sword model created with low poly topology and PBR textures.',
		shortDescription: 'Low poly PBR fantasy sword model.',
		image: '/gallery/Sword.webp',
		tags: ['3d', 'game-asset', 'weapon', 'low-poly', 'pbr'],
		category: '3d',
		links: [
			{ to: 'https://www.artstation.com/saiiprashanth', label: 'View on ArtStation', newTab: true }
		],
		screenshots: [
			{ src: '/gallery/Sword.webp', label: 'Low poly PBR Sword' }
		]
	},

	// --- AR ---
	{
		slug: 'elaina-vr',
		name: 'Elaina AR Project',
		description: 'An interactive AR project projecting a model of Elaina into the real world.',
		shortDescription: 'Interactive AR project featuring Elaina.',
		image: '/gallery/Elaina VR.webp',
		tags: ['ar', 'interactive', '3d-model', 'real-world'],
		category: 'ar',
		links: [],
		screenshots: [
			{ src: '/gallery/Elaina VR.webp', label: 'Elaina AR Project' }
		]
	},

	// --- TERRAIN ---
	{
		slug: 'hill-landscape',
		name: 'Castle Environment',
		description: 'UE5 Castle Environment Level Design.',
		shortDescription: 'UE5 Castle Environment Level Design.',
		image: '/gallery/Hill.webp',
		tags: ['3d', 'terrain', 'castle', 'environment'],
		category: 'terrain',
		links: [
			{ to: 'https://www.artstation.com/saiiprashanth', label: 'View on ArtStation', newTab: true }
		],
		screenshots: [
			{ src: '/gallery/Hill.webp', label: 'Castle Environment' }
		]
	},
	{
		slug: 'procedural-terrain-2',
		name: 'Forest Environment',
		description: 'Procedural forest terrain and vegetation.',
		shortDescription: 'Procedural forest terrain and vegetation.',
		image: '/gallery/Procedural Terrain.webp',
		tags: ['3d', 'terrain', 'landscape', 'procedural'],
		category: 'terrain',
		links: [
			{ to: 'https://www.artstation.com/saiiprashanth', label: 'View on ArtStation', newTab: true }
		],
		screenshots: [
			{ src: '/gallery/Procedural Terrain.webp', label: 'Forest Environment' }
		]
	},

	// --- GAME ---
	{
		slug: 'fps-game',
		name: 'LAN PvP FPS',
		description: 'A first person shooter prototype designed for LAN PvP gameplay.',
		shortDescription: 'LAN PvP first person shooter prototype.',
		image: '/gallery/FPS.webp',
		tags: ['game-design', 'fps', 'pvp', 'unity', 'lan'],
		category: 'game',
		links: [
			{ to: 'https://saiiprashanth.itch.io/', label: 'View on Itch.io', newTab: true }
		],
		screenshots: [
			{ src: '/gallery/FPS.webp', label: 'FPS Gameplay' }
		]
	},
	{
		slug: 'astron',
		name: 'Astron',
		description: 'A classic arcade style space shooter built with vanilla JavaScript and HTML5 Canvas, featuring physics based movement and retro vector graphics.',
		shortDescription: 'Arcade style space shooter with retro vector graphics.',
		image: '/gallery/Astron_3.png',
		tags: ['javascript', 'arcade-game', 'retro', 'game-development', 'html5-canvas', 'space-shooter', '2d-physics'],
		category: 'game',
		links: [
			{ to: 'https://saiiprashanth.itch.io/astron', label: 'Itch.io', newTab: true }
		],
		screenshots: [
			{ src: '/gallery/Astron_3.png', label: 'Astron Gameplay' }
		]
	},
	{
		slug: 'boating-through',
		name: 'Boating Through',
		description: 'A fast paced infinite arcade runner in Unity featuring vibrant cel shaded graphics.',
		shortDescription: 'Fast paced infinite arcade runner with cel shaded graphics.',
		image: '/gallery/BT1.jpg',
		tags: ['c-sharp', 'unity', 'arcade', 'infinite-runner', 'cel-shading', 'stylized-art', 'water-shader'],
		category: 'game',
		links: [
			{ to: 'https://saiiprashanth.itch.io/boating-through', label: 'Itch.io', newTab: true }
		],
		screenshots: [
			{ src: '/gallery/BT1.jpg', label: 'Boating Through Gameplay' }
		]
	},
	{
		slug: 'hungry-kirby',
		name: 'Hungry Kirby',
		description: 'A physics based puzzle game in Unity 2D where players solve environmental challenges to feed a hungry Kirby.',
		shortDescription: 'Physics based puzzle game with Kirby.',
		image: '/gallery/HK_1.jpg',
		tags: ['c-sharp', 'mobile-game', 'casual-game', 'unity-2d', 'cut-the-rope', 'physics-puzzle'],
		category: 'game',
		links: [
			{ to: 'https://saiiprashanth.itch.io/hungry-kirby', label: 'Itch.io', newTab: true }
		],
		screenshots: [
			{ src: '/gallery/HK_1.jpg', label: 'Hungry Kirby Gameplay' }
		]
	},
	{
		slug: 'neko-gambit',
		name: 'Neko Gambit',
		description: 'A stylized 3D Chess game built in Unity, set in a mystical desert kingdom ruled by Cat Pharaohs.',
		shortDescription: 'Stylized 3D chess game with Cat Pharaohs.',
		image: '/gallery/Neko_Gambit_img_1.jpg',
		tags: ['c-sharp', 'board-game', 'chess', 'unity', 'strategy', '3d-game', 'stylized-art'],
		category: 'game',
		links: [
			{ to: 'https://saiiprashanth.itch.io/neko-gambit', label: 'Itch.io', newTab: true }
		],
		screenshots: [
			{ src: '/gallery/Neko_Gambit_img_1.jpg', label: 'Neko Gambit Gameplay' }
		]
	},
	{
		slug: 'bumble-bee',
		name: 'Bumble Bee',
		description: 'A Minecraft style open world game built in Unity where you control a bee gathering honey across a voxel landscape while defending against attacking wasps.',
		shortDescription: 'Minecraft style open world game where you control a bee.',
		image: '/gallery/BB_1.jpg',
		tags: ['c-sharp', 'unity', 'open-world', 'arcade', 'voxel-art', 'stylized-art', 'minecraft-style'],
		category: 'game',
		links: [
			{ to: 'https://saiiprashanth.itch.io/bumble-bee', label: 'Itch.io', newTab: true }
		],
		screenshots: [
			{ src: '/gallery/BB_1.jpg', label: 'Bumble Bee Project' }
		]
	},
	{
		slug: 'cubeology',
		name: 'Cubeology',
		description: 'A creative open world sandbox game built in Unreal Engine 5.',
		shortDescription: 'A creative open world sandbox game built in Unreal Engine 5.',
		image: '/gallery/Cubeology.webp',
		tags: ['unreal-engine-5', 'sandbox', 'voxel', 'cpp'],
		category: 'game',
		links: [
			{ to: 'https://github.com/SaiiPrashanth/Cubeology', label: 'GitHub', newTab: true }
		],
		screenshots: [
			{ src: '/gallery/Cubeology.webp', label: 'Cubeology Gameplay' }
		]
	},
	{
		slug: 'decipher',
		name: 'Decipher: Escape Room',
		description: 'An escape room type puzzle game challenging players to decode cryptic messages.',
		shortDescription: 'Escape room type puzzle game.',
		image: '/gallery/Decipher.webp',
		tags: ['puzzle', 'escape-room', 'cryptography', 'logic'],
		category: 'game',
		links: [
			{ to: 'https://saiiprashanth.itch.io/decipher', label: 'Itch.io', newTab: true }
		],
		screenshots: [
			{ src: '/gallery/Decipher.webp', label: 'Decipher Project' }
		]
	},
	{
		slug: 'eternights',
		name: 'Open World Souls like Action RPG',
		description: 'Open World Souls like Action RPG.',
		shortDescription: 'Open World Souls like Action RPG.',
		image: '/gallery/EterNights.webp',
		tags: ['unreal-engine-5', 'cpp', 'action-rpg', 'souls-like'],
		category: 'game',
		links: [
			{ to: 'https://github.com/SaiiPrashanth/EterNights', label: 'GitHub', newTab: true }
		],
		screenshots: [
			{ src: '/gallery/EterNights.webp', label: 'EterNights Gameplay' }
		]
	},
	{
		slug: 'space-odyssey',
		name: 'Space Odyssey',
		description: '3D arcade rail shooter with dynamic space combat and piloting.',
		shortDescription: '3D arcade rail shooter with dynamic space combat and piloting.',
		image: '/gallery/SpaceOdyssey.webp',
		tags: ['unity', 'csharp', 'arcade', 'shooter', 'space'],
		category: 'game',
		links: [
			{ to: 'https://github.com/SaiiPrashanth/Space_Odyssey', label: 'GitHub', newTab: true }
		],
		screenshots: [
			{ src: '/gallery/SpaceOdyssey.webp', label: 'Space Odyssey Gameplay' }
		]
	}
];

const GalleryData = {
	title,
	items
};

export default GalleryData;
