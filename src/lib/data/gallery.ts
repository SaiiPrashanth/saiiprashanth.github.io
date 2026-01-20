import Assets from './assets';
import type { GalleryItem } from './types';

const title = 'Gallery';

const items: Array<GalleryItem> = [
	{
		slug: 'cam-project',
		name: 'Surveillance Camera',
		description: 'A high-fidelity 3D model of a surveillance camera system with realistic texturing.',
		shortDescription: 'High-fidelity 3D surveillance camera model.',
		image: '/gallery/Cam.webp',
		tags: ['3d', 'hard-surface', 'modeling', 'texturing'],
		category: '3d',
		links: [
			{ to: 'https://www.artstation.com/saiiprashanth', label: 'View on ArtStation', newTab: true }
		],
		screenshots: [
			{ src: '/gallery/Cam.webp', label: 'Surveillance Camera' }
		]
	},
	{
		slug: 'pentab-project',
		name: 'Digital Pen Tablet',
		description: 'Photorealistic 3D visualization of a digital drawing tablet for product design.',
		shortDescription: 'Photorealistic 3D digital tablet visualization.',
		image: '/gallery/PenTab.webp',
		tags: ['3d', 'product-design', 'modeling', 'visualization'],
		category: '3d',
		links: [
			{ to: 'https://www.artstation.com/saiiprashanth', label: 'View on ArtStation', newTab: true }
		],
		screenshots: [
			{ src: '/gallery/PenTab.webp', label: 'Digital Pen Tablet' }
		]
	},
	{
		slug: 'tws-project',
		name: 'TWS Earbuds',
		description: 'Detailed 3D product render of True Wireless Stereo earbuds showcasing material properties.',
		shortDescription: 'Detailed 3D product render of wireless earbuds.',
		image: '/gallery/TWS.webp',
		tags: ['3d', 'product-design', 'rendering', 'commercial'],
		category: '3d',
		links: [
			{ to: 'https://www.artstation.com/saiiprashanth', label: 'View on ArtStation', newTab: true }
		],
		screenshots: [
			{ src: '/gallery/TWS.webp', label: 'TWS Earbuds' }
		]
	},
	{
		slug: 'fps-game',
		name: 'FPS Project',
		description: 'A first-person shooter prototype demonstrating core gameplay mechanics and level design.',
		shortDescription: 'FPS prototype with core mechanics and level design.',
		image: '/gallery/FPS.webp',
		tags: ['game-design', 'fps', 'unity', 'prototyping'],
		category: 'game',
		links: [
			{ to: 'https://saiiprashanth.itch.io/', label: 'View on Itch.io', newTab: true }
		],
		screenshots: [
			{ src: '/gallery/FPS.webp', label: 'FPS Gameplay' }
		]
	},
	{
		slug: 'pixel-girl',
		name: 'Pixel Art Character',
		description: 'Retro-style pixel art character design with vibrant colors and expressive details.',
		shortDescription: 'Retro-style pixel art character design.',
		image: '/gallery/PixelGirl.webp',
		tags: ['pixel-art', 'character-design', '2d', 'retro'],
		category: '2d',
		links: [
			{ to: 'https://www.artstation.com/saiiprashanth', label: 'View on ArtStation', newTab: true }
		],
		screenshots: [
			{ src: '/gallery/PixelGirl.webp', label: 'Pixel Character' }
		]
	},
	{
		slug: 'joker',
		name: 'The Joker',
		description: 'Digital painting of The Joker featuring bold strokes and dramatic lighting.',
		shortDescription: 'Digital painting of The Joker with dramatic lighting.',
		image: '/gallery/Joker.webp',
		tags: ['digital-painting', 'fan-art', 'illustration', 'portrait'],
		category: '2d',
		links: [
			{ to: 'https://www.artstation.com/saiiprashanth', label: 'View on ArtStation', newTab: true }
		],
		screenshots: [
			{ src: '/gallery/Joker.webp', label: 'The Joker' }
		]
	},
	{
		slug: 'elaina-vr',
		name: 'Elaina VR Model',
		description: 'Optimized 3D anime-style character model aimed for VR applications.',
		shortDescription: 'Optimized 3D anime-style character for VR.',
		image: '/gallery/Elaina VR.webp',
		tags: ['3d', 'character-modeling', 'anime', 'vr-ready'],
		category: '3d',
		links: [],
		screenshots: [
			{ src: '/gallery/Elaina VR.webp', label: 'Elaina VR Model' }
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
	{
		slug: 'website-design',
		name: 'UI/UX Web Mockup',
		description: 'Modern website user interface design focusing on clean layout and usability.',
		shortDescription: 'Modern website UI design focusing on usability.',
		image: '/gallery/Website.webp',
		tags: ['ui-design', 'web', 'mockup', 'interface'],
		category: '2d',
		links: [
			{ to: 'https://www.artstation.com/saiiprashanth', label: 'View on ArtStation', newTab: true }
		],
		screenshots: [
			{ src: '/gallery/Website.webp', label: 'UI/UX Mockup' }
		]
	},
	{
		slug: 'ambiroom',
		name: 'Atmospheric Room',
		description: '3D interior environment study focusing on ambient lighting and mood.',
		shortDescription: '3D interior study focusing on ambient lighting.',
		image: '/gallery/AmbiRoom.webp',
		tags: ['3d', 'environment', 'lighting', 'interior'],
		category: '3d',
		links: [
			{ to: 'https://www.artstation.com/saiiprashanth', label: 'View on ArtStation', newTab: true }
		],
		screenshots: [
			{ src: '/gallery/AmbiRoom.webp', label: 'Atmospheric Room' }
		]
	},
	{
		slug: 'hill-landscape',
		name: 'Procedural Terrain',
		description: '3D landscape generation study featuring rolling hills and natural topography.',
		shortDescription: '3D landscape generation study of rolling hills.',
		image: '/gallery/Hill.webp',
		tags: ['3d', 'terrain', 'landscape', 'procedural'],
		category: 'terrain',
		links: [
			{ to: 'https://www.artstation.com/saiiprashanth', label: 'View on ArtStation', newTab: true }
		],
		screenshots: [
			{ src: '/gallery/Hill.webp', label: 'Procedural Terrain' }
		]
	},
	{
		slug: 'sword-model',
		name: 'Fantasy Sword',
		description: 'Game-ready 3D sword asset with stylized textures and optimized topology.',
		shortDescription: 'Game-ready 3D sword with stylized textures.',
		image: '/gallery/Sword.webp',
		tags: ['3d', 'game-asset', 'weapon', 'stylized'],
		category: '3d',
		links: [
			{ to: 'https://www.artstation.com/saiiprashanth', label: 'View on ArtStation', newTab: true }
		],
		screenshots: [
			{ src: '/gallery/Sword.webp', label: 'Fantasy Sword' }
		]
	},
	{
		slug: 'astron',
		name: 'Astron',
		description: 'A classic arcade-style space shooter built with vanilla JavaScript and HTML5 Canvas, featuring physics-based movement and retro vector graphics.',
		shortDescription: 'Arcade-style space shooter with retro vector graphics.',
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
		description: 'A fast-paced infinite arcade runner in Unity featuring vibrant cel-shaded graphics.',
		shortDescription: 'Fast-paced infinite arcade runner with cel-shaded graphics.',
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
		description: 'A physics-based puzzle game in Unity 2D where players solve environmental challenges to feed a hungry Kirby.',
		shortDescription: 'Physics-based puzzle game with Kirby.',
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
		description: 'A Minecraft-style open-world game built in Unity where you control a bee gathering honey across a voxel landscape while defending against attacking wasps.',
		shortDescription: 'Minecraft-style open-world game where you control a bee.',
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
		description: 'A creative open-world sandbox game built in Unreal Engine 5.',
		shortDescription: 'A creative open-world sandbox game built in Unreal Engine 5.',
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
		name: 'Decipher',
		description: 'A cryptographic puzzle project involving decoding messages.',
		shortDescription: 'A cryptographic puzzle project.',
		image: '/gallery/Decipher.webp',
		tags: ['puzzle', 'cryptography', 'logic'],
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
		name: 'EterNights',
		description: 'Open-world Souls-like action RPG in UE5 with challenging combat.',
		shortDescription: 'Open-world Souls-like action RPG in UE5 with challenging combat.',
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
		slug: 'procedural-terrain-2',
		name: 'Advanced Procedural Terrain',
		description: 'Advanced 3D landscape generation study featuring realistic topography.',
		shortDescription: 'Advanced 3D landscape generation study.',
		image: '/gallery/Procedural Terrain.webp',
		tags: ['3d', 'terrain', 'landscape', 'procedural'],
		category: 'terrain',
		links: [
			{ to: 'https://www.artstation.com/saiiprashanth', label: 'View on ArtStation', newTab: true }
		],
		screenshots: [
			{ src: '/gallery/Procedural Terrain.webp', label: 'Procedural Terrain' }
		]
	},
	{
		slug: 'space-odyssey',
		name: 'Space Odyssey',
		description: '3D arcade rail-shooter with dynamic space combat and piloting.',
		shortDescription: '3D arcade rail-shooter with dynamic space combat and piloting.',
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
