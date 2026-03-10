import { base } from '$app/paths';
import Assets from './assets';
import type { GalleryItem } from './types';

const title = 'Gallery';

const items: Array<GalleryItem> = [
	// --- GAME ---
	{
		slug: 'hungry-kirby',
		name: 'Hungry Kirby',
		description: 'A physics based puzzle game in Unity 2D where players solve environmental challenges to feed a hungry Kirby.',
		shortDescription: 'Physics based puzzle game with Kirby.',
		image: `${base}/gallery/Images/HK_1.webp`,
		video: `${base}/gallery/video/HK.gif`,
		tags: ['c-sharp', 'mobile-game', 'casual-game', 'unity-2d', 'cut-the-rope', 'physics-puzzle'],
		category: 'game',
		links: [
			{ to: 'https://saiiprashanth.itch.io/hungry-kirby', label: 'Itch.io', newTab: true }
		],
		screenshots: [
			{ src: `${base}/gallery/Images/HK_1.webp`, label: 'Hungry Kirby Gameplay' }
		]
	},
	{
		slug: 'bumble-bee',
		name: 'Bumble Bee',
		description: 'A Minecraft style open world game built in Unity where you control a bee gathering honey across a voxel landscape while defending against attacking wasps.',
		shortDescription: 'Minecraft style open world game where you control a bee.',
		image: `${base}/gallery/Images/BB_1.webp`,
		video: `${base}/gallery/video/BumbleBee.mp4`,
		tags: ['c-sharp', 'unity', 'open-world', 'arcade', 'voxel-art', 'stylized-art', 'minecraft-style'],
		category: 'game',
		links: [
			{ to: 'https://saiiprashanth.itch.io/bumble-bee', label: 'Itch.io', newTab: true }
		],
		screenshots: [
			{ src: `${base}/gallery/Images/BB_1.webp`, label: 'Bumble Bee Project' }
		]
	},
	{
		slug: 'astron',
		name: 'Astron',
		description: 'A classic arcade style space shooter built with vanilla JavaScript and HTML5 Canvas, featuring physics based movement and retro vector graphics.',
		shortDescription: 'Arcade style space shooter with retro vector graphics.',
		image: `${base}/gallery/Images/Astron_3.png`,
		video: `${base}/gallery/video/Astron.gif`,
		tags: ['javascript', 'arcade-game', 'retro', 'game-development', 'html5-canvas', 'space-shooter', '2d-physics'],
		category: 'game',
		links: [
			{ to: 'https://saiiprashanth.itch.io/astron', label: 'Itch.io', newTab: true }
		],
		screenshots: [
			{ src: `${base}/gallery/Images/Astron_3.png`, label: 'Astron Gameplay' }
		]
	},
	{
		slug: 'boating-through',
		name: 'Boating Through',
		description: 'A fast paced infinite arcade runner in Unity featuring vibrant cel shaded graphics.',
		shortDescription: 'Fast paced infinite arcade runner with cel shaded graphics.',
		image: `${base}/gallery/Images/BT1.webp`,
		video: `${base}/gallery/video/BT.gif`,
		tags: ['c-sharp', 'unity', 'arcade', 'infinite-runner', 'cel-shading', 'stylized-art', 'water-shader'],
		category: 'game',
		links: [
			{ to: 'https://saiiprashanth.itch.io/boating-through', label: 'Itch.io', newTab: true }
		],
		screenshots: [
			{ src: `${base}/gallery/Images/BT1.webp`, label: 'Boating Through Gameplay' }
		]
	},
	{
		slug: 'neko-gambit',
		name: 'Neko Gambit',
		description: 'A stylized 3D Chess game built in Unity, set in a mystical desert kingdom ruled by Cat Pharaohs.',
		shortDescription: 'Stylized 3D chess game with Cat Pharaohs.',
		image: `${base}/gallery/Images/Neko_Gambit_img_1.webp`,
		video: `${base}/gallery/video/NekoGambit.mp4`,
		tags: ['c-sharp', 'board-game', 'chess', 'unity', 'strategy', '3d-game', 'stylized-art'],
		category: 'game',
		links: [
			{ to: 'https://saiiprashanth.itch.io/neko-gambit', label: 'Itch.io', newTab: true }
		],
		screenshots: [
			{ src: `${base}/gallery/Images/Neko_Gambit_img_1.webp`, label: 'Neko Gambit Gameplay' }
		]
	},
	{
		slug: 'cubeology',
		name: 'Cubeology',
		description: 'A creative open world sandbox game built in Unreal Engine 5.',
		shortDescription: 'A creative open world sandbox game built in Unreal Engine 5.',
		image: `${base}/gallery/Images/Cubeology.webp`,
		tags: ['unreal-engine-5', 'sandbox', 'voxel', 'cpp'],
		category: 'game',
		links: [
			{ to: 'https://github.com/SaiiPrashanth/Cubeology', label: 'GitHub', newTab: true }
		],
		screenshots: [
			{ src: `${base}/gallery/Images/Cubeology.webp`, label: 'Cubeology Gameplay' }
		]
	},
	{
		slug: 'decipher',
		name: 'Decipher: Escape Room',
		description: 'An escape room type puzzle game challenging players to decode cryptic messages.',
		shortDescription: 'Escape room type puzzle game.',
		image: `${base}/gallery/Images/Decipher.webp`,
		tags: ['puzzle', 'escape-room', 'cryptography', 'logic'],
		category: 'game',
		links: [
			{ to: 'https://saiiprashanth.itch.io/decipher', label: 'Itch.io', newTab: true }
		],
		screenshots: [
			{ src: `${base}/gallery/Images/Decipher.webp`, label: 'Decipher Project' }
		]
	},
	{
		slug: 'eternights',
		name: 'Eternights',
		description: 'Open World Souls like Action RPG.',
		shortDescription: 'Open World Souls like Action RPG.',
		image: `${base}/gallery/Images/EterNights.webp`,
		tags: ['unreal-engine-5', 'cpp', 'action-rpg', 'souls-like'],
		category: 'game',
		links: [
			{ to: 'https://github.com/SaiiPrashanth/EterNights', label: 'GitHub', newTab: true }
		],
		screenshots: [
			{ src: `${base}/gallery/Images/EterNights.webp`, label: 'EterNights Gameplay' }
		]
	},
	{
		slug: 'space-odyssey',
		name: 'Space Odyssey',
		description: '3D arcade rail shooter with dynamic space combat and piloting.',
		shortDescription: '3D arcade rail shooter with dynamic space combat and piloting.',
		image: `${base}/gallery/Images/SpaceOdyssey.webp`,
		video: `${base}/gallery/video/SpaceOdyssey.mp4`,
		tags: ['unity', 'csharp', 'arcade', 'shooter', 'space'],
		category: 'game',
		links: [
			{ to: 'https://github.com/SaiiPrashanth/Space_Odyssey', label: 'GitHub', newTab: true }
		],
		screenshots: [
			{ src: `${base}/gallery/Images/SpaceOdyssey.webp`, label: 'Space Odyssey Gameplay' }
		]
	},
	{
		slug: 'fps-game',
		name: 'LAN PvP FPS',
		description: 'A first person shooter prototype designed for LAN PvP gameplay.',
		shortDescription: 'LAN PvP first person shooter prototype.',
		image: `${base}/gallery/Images/FPS.webp`,
		tags: ['game-design', 'fps', 'pvp', 'unity', 'lan'],
		category: 'game',
		links: [
			{ to: 'https://saiiprashanth.itch.io/', label: 'View on Itch.io', newTab: true }
		],
		screenshots: [
			{ src: `${base}/gallery/Images/FPS.webp`, label: 'FPS Gameplay' }
		]
	},

	// --- 2D ART ---
	{
		slug: 'pixel-girl',
		name: 'Pixel Anime Girl',
		description: 'Pixel art design of an anime style character with retro aesthetics.',
		shortDescription: 'Pixel art anime girl character.',
		image: `${base}/gallery/Images/PixelGirl.webp`,
		tags: ['pixel-art', 'character-design', 'anime', '2d'],
		category: '2d',
		links: [
			{ to: 'https://www.artstation.com/saiiprashanth', label: 'View on ArtStation', newTab: true }
		],
		screenshots: [
			{ src: `${base}/gallery/Images/PixelGirl.webp`, label: 'Pixel Anime Girl' }
		]
	},
	{
		slug: 'joker',
		name: 'Polygon Joker',
		description: 'Polygon art illustration of The Joker featuring sharp geometric shapes.',
		shortDescription: 'Polygon art illustration of The Joker.',
		image: `${base}/gallery/Images/Joker.webp`,
		tags: ['polygon-art', 'fan-art', 'illustration', '2d'],
		category: '2d',
		links: [
			{ to: 'https://www.artstation.com/saiiprashanth', label: 'View on ArtStation', newTab: true }
		],
		screenshots: [
			{ src: `${base}/gallery/Images/Joker.webp`, label: 'Polygon Joker' }
		]
	},
	{
		slug: 'dog-portrait-1',
		name: 'Realistic Dog Art',
		description: 'A realistic polygon art portrait capturing lifelike textures through complex geometry.',
		shortDescription: 'Realistic polygon art dog portrait.',
		image: `${base}/gallery/Images/Dog1.webp`,
		tags: ['digital-painting', 'animal', 'portrait', 'illustration'],
		category: '2d',
		links: [
			{ to: 'https://www.artstation.com/saiiprashanth', label: 'View on ArtStation', newTab: true }
		],
		screenshots: [
			{ src: `${base}/gallery/Images/Dog1.webp`, label: 'Realistic Dog Art' }
		]
	},
	{
		slug: 'dog-portrait-2',
		name: 'Triadic Dog Art',
		description: 'Triadic color scheme polygonal art.',
		shortDescription: 'Triadic color scheme polygonal art.',
		image: `${base}/gallery/Images/Dog2.webp`,
		tags: ['digital-painting', 'animal', 'portrait', 'illustration'],
		category: '2d',
		links: [
			{ to: 'https://www.artstation.com/saiiprashanth', label: 'View on ArtStation', newTab: true }
		],
		screenshots: [
			{ src: `${base}/gallery/Images/Dog2.webp`, label: 'Triadic Dog Art' }
		]
	},
	{
		slug: 'dog-portrait-3',
		name: 'Monochromatic Dog Art',
		description: 'An exploration of depth and form using a single color palette across geometric planes.',
		shortDescription: 'Monochromatic geometric dog portrait.',
		image: `${base}/gallery/Images/Dog3.webp`,
		tags: ['digital-painting', 'animal', 'portrait', 'illustration'],
		category: '2d',
		links: [
			{ to: 'https://www.artstation.com/saiiprashanth', label: 'View on ArtStation', newTab: true }
		],
		screenshots: [
			{ src: `${base}/gallery/Images/Dog3.webp`, label: 'Monochromatic Dog Art' }
		]
	},

	// --- 3D MODEL ---
	{
		slug: 'cam-project',
		name: 'Webcam Model',
		description: 'A detailed 3D model of a webcam with realistic texturing and materials.',
		shortDescription: 'Detailed 3D webcam model.',
		image: `${base}/gallery/Images/Cam.webp`,
		tags: ['3d', 'hard-surface', 'modeling', 'webcam'],
		category: '3d',
		links: [
			{ to: 'https://www.artstation.com/saiiprashanth', label: 'View on ArtStation', newTab: true }
		],
		screenshots: [
			{ src: `${base}/gallery/Images/Cam.webp`, label: 'Webcam Model' }
		]
	},
	{
		slug: 'pentab-project',
		name: 'Wacom Tablet and Stylus',
		description: '3D model of a Wacom digital drawing tablet and stylus for product visualization.',
		shortDescription: '3D model of Wacom tablet and stylus.',
		image: `${base}/gallery/Images/PenTab.webp`,
		tags: ['3d', 'product-design', 'wacom', 'modeling'],
		category: '3d',
		links: [
			{ to: 'https://www.artstation.com/saiiprashanth', label: 'View on ArtStation', newTab: true }
		],
		screenshots: [
			{ src: `${base}/gallery/Images/PenTab.webp`, label: 'Wacom Tablet' }
		]
	},
	{
		slug: 'tws-project',
		name: 'Futuristic Earbuds',
		description: 'A futuristic 3D visualization of True Wireless Stereo earbuds.',
		shortDescription: 'Futuristic 3D earbuds visualization.',
		image: `${base}/gallery/Images/TWS.webp`,
		tags: ['3d', 'product-design', 'futuristic', 'rendering'],
		category: '3d',
		links: [
			{ to: 'https://www.artstation.com/saiiprashanth', label: 'View on ArtStation', newTab: true }
		],
		screenshots: [
			{ src: `${base}/gallery/Images/TWS.webp`, label: 'Futuristic Earbuds' }
		]
	},
	{
		slug: 'ambiroom',
		name: 'Ambient Room',
		description: '3D Ambient night bedroom environment.',
		shortDescription: '3D Ambient night bedroom environment.',
		image: `${base}/gallery/Images/AmbiRoom.webp`,
		tags: ['3d', 'environment', 'lighting', 'interior'],
		category: '3d',
		links: [
			{ to: 'https://www.artstation.com/saiiprashanth', label: 'View on ArtStation', newTab: true }
		],
		screenshots: [
			{ src: `${base}/gallery/Images/AmbiRoom.webp`, label: 'Ambient Room' }
		]
	},
	{
		slug: 'sword-model',
		name: 'Low poly PBR Sword',
		description: 'Fantasy sword model created with low poly topology and PBR textures.',
		shortDescription: 'Low poly PBR fantasy sword model.',
		image: `${base}/gallery/Images/Sword.webp`,
		tags: ['3d', 'game-asset', 'weapon', 'low-poly', 'pbr'],
		category: '3d',
		links: [
			{ to: 'https://www.artstation.com/saiiprashanth', label: 'View on ArtStation', newTab: true }
		],
		screenshots: [
			{ src: `${base}/gallery/Images/Sword.webp`, label: 'Low poly PBR Sword' }
		]
	},

	// --- PARTICLE ---
	{
		slug: 'hyperdrive-vfx',
		name: 'Hyperdrive VFX',
		description: 'A high speed hyperdrive warp effect created using Unity particle systems.',
		shortDescription: 'Unity hyperdrive warp effect.',
		image: Assets.Unknown.light,
		video: `${base}/gallery/video/Hyperdrive_5s.mp4`,
		tags: ['unity', 'vfx', 'particle-system', 'space'],
		category: 'particle'
	},
	{
		slug: 'rain-particles',
		name: 'Rain Particles',
		description: 'Realistic rain and splash effects using GPU particles.',
		shortDescription: 'Realistic Unity rain particles.',
		image: Assets.Unknown.light,
		video: `${base}/gallery/video/RainParticles.mp4`,
		tags: ['unity', 'vfx', 'particle-system', 'environment'],
		category: 'particle'
	},
	{
		slug: 'smoke-vfx',
		name: 'Smoke FX',
		description: 'Volumetric smoke effect for environmental storytelling.',
		shortDescription: 'Unity volumetric smoke effect.',
		image: Assets.Unknown.light,
		video: `${base}/gallery/video/SmokeFX.mp4`,
		tags: ['unity', 'vfx', 'particle-system', 'smoke'],
		category: 'particle'
	},
	{
		slug: 'spark-vfx',
		name: 'Spark FX',
		description: 'Dynamic spark particles with collision and bounce physics.',
		shortDescription: 'Unity dynamic spark particles.',
		image: Assets.Unknown.light,
		video: `${base}/gallery/video/SparkFX.mp4`,
		tags: ['unity', 'vfx', 'particle-system', 'sparks'],
		category: 'particle'
	},

	// --- SHADER ---
	{
		slug: 'grass-shader',
		name: 'Grass Shader',
		description: 'Stylized grass shader with wind deformation and player interaction.',
		shortDescription: 'Stylized Unity grass shader.',
		image: Assets.Unknown.light,
		video: `${base}/gallery/video/GrassShader.mp4`,
		tags: ['unity', 'shader-graph', 'stylized-art', 'environment'],
		category: 'shader'
	},
	{
		slug: 'pixel-shader',
		name: 'Pixel Shader',
		description: 'A post processing shader that converts 3D scenes into pixel art aesthetics.',
		shortDescription: 'Unity pixel art post-processing shader.',
		image: Assets.Unknown.light,
		video: `${base}/gallery/video/PixelShader.mp4`,
		tags: ['unity', 'shader-graph', 'pixel-art', 'post-processing'],
		category: 'shader'
	},
	{
		slug: 'water-shader',
		name: 'Water Shader',
		description: 'Advanced water shader featuring foam, refractions, and vertex waves.',
		shortDescription: 'Advanced Unity water shader.',
		image: Assets.Unknown.light,
		video: `${base}/gallery/video/WaterShader.mp4`,
		tags: ['unity', 'shader-graph', 'water', 'vfx'],
		category: 'shader'
	},

	// --- TOOL ---
	{
		slug: 'import-helper-tool',
		name: 'Import Helper',
		description: 'An editor tool that automates asset import settings and organization.',
		shortDescription: 'Unity asset import automation tool.',
		image: Assets.Unknown.light,
		video: `${base}/gallery/video/ImportHelper.mp4`,
		tags: ['unity', 'editor-tool', 'automation', 'utility'],
		category: 'tool'
	},
	{
		slug: 'screen-profiler',
		name: 'Screen Profiler',
		description: 'A real time performance profiling tool for monitoring FPS and memory usage.',
		shortDescription: 'Unity real-time performance profiler.',
		image: Assets.Unknown.light,
		video: `${base}/gallery/video/ScreenProfiler.mp4`,
		tags: ['unity', 'editor-tool', 'optimization', 'profiling'],
		category: 'tool'
	},
	{
		slug: 'spline-tool',
		name: 'Spline Tool',
		description: 'A custom spline editor for creating paths and procedural geometry.',
		shortDescription: 'Custom Unity spline editor tool.',
		image: Assets.Unknown.light,
		video: `${base}/gallery/video/SplineTool.mp4`,
		tags: ['unity', 'editor-tool', 'splines', 'procedural'],
		category: 'tool'
	},
	{
		slug: 'texture-toolkit',
		name: 'Texture Toolkit',
		description: 'A comprehensive tool for texture manipulation and channel packing within Unity.',
		shortDescription: 'Unity texture manipulation toolkit.',
		image: Assets.Unknown.light,
		video: `${base}/gallery/video/TextureToolkit.mp4`,
		tags: ['unity', 'editor-tool', 'textures', 'utility'],
		category: 'tool'
	},

	// --- TERRAIN ---
	{
		slug: 'hill-landscape',
		name: 'Castle Environment',
		description: 'UE5 Castle Environment Level Design.',
		shortDescription: 'UE5 Castle Environment Level Design.',
		image: `${base}/gallery/Images/Hill.webp`,
		tags: ['3d', 'terrain', 'castle', 'environment'],
		category: 'terrain',
		links: [
			{ to: 'https://www.artstation.com/saiiprashanth', label: 'View on ArtStation', newTab: true }
		],
		screenshots: [
			{ src: `${base}/gallery/Images/Hill.webp`, label: 'Castle Environment' }
		]
	},
	{
		slug: 'procedural-terrain-2',
		name: 'Forest Environment',
		description: 'Procedural forest terrain and vegetation.',
		shortDescription: 'Procedural forest terrain and vegetation.',
		image: `${base}/gallery/Images/Procedural Terrain.webp`,
		tags: ['3d', 'terrain', 'landscape', 'procedural'],
		category: 'terrain',
		links: [
			{ to: 'https://www.artstation.com/saiiprashanth', label: 'View on ArtStation', newTab: true }
		],
		screenshots: [
			{ src: `${base}/gallery/Images/Procedural Terrain.webp`, label: 'Forest Environment' }
		]
	},

	// --- RIG ---
	{
		slug: 'boat-rig',
		name: 'Boat Rig',
		description: 'A physics based boat rigging system for realistic water buoyancy and movement.',
		shortDescription: 'Physics based boat rigging in Unity.',
		image: Assets.Unknown.light,
		video: `${base}/gallery/video/Boat_Rig.mp4`,
		tags: ['unity', 'rigging', 'physics', 'buoyancy'],
		category: 'rig'
	},
	{
		slug: 'car-rig',
		name: 'Car Rig',
		description: 'Advanced vehicle rigging with suspension physics and wheel controllers.',
		shortDescription: 'Advanced vehicle rigging in Unity.',
		image: Assets.Unknown.light,
		video: `${base}/gallery/video/Car_rig.mp4`,
		tags: ['unity', 'rigging', 'physics', 'vehicle'],
		category: 'rig'
	},

	// --- AR ---
	{
		slug: 'elaina-vr',
		name: 'Elaina AR Project',
		description: 'An interactive AR project projecting a model of Elaina into the real world.',
		shortDescription: 'Interactive AR project featuring Elaina.',
		image: `${base}/gallery/Images/Elaina VR.webp`,
		tags: ['ar', 'interactive', '3d-model', 'real-world'],
		category: 'ar',
		links: [],
		screenshots: [
			{ src: `${base}/gallery/Images/Elaina VR.webp`, label: 'Elaina AR Project' }
		]
	},

	// --- UI ---
	{
		slug: 'website-design',
		name: 'GitHub Page UI Design',
		description: 'UI design mockup for a GitHub page focusing goldfish clean layout and clarity.',
		shortDescription: 'GitHub page user interface design mockup.',
		image: `${base}/gallery/Images/Website.webp`,
		tags: ['ui-design', 'web', 'github', 'mockup'],
		category: 'ui',
		links: [
			{ to: 'https://www.artstation.com/saiiprashanth', label: 'View on ArtStation', newTab: true }
		],
		screenshots: [
			{ src: `${base}/gallery/Images/Website.webp`, label: 'GitHub UI Design' }
		]
	}
];

const GalleryData = {
	title,
	items
};

export default GalleryData;
