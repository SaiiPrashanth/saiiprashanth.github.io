import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from './types';

const items: Array<Project> = [
	{
		slug: 'custom-render-engine',
		color: '#c72e49',
		description:
			'Developing a low-level rendering engine using the Vulkan API to master memory management, synchronization, and hardware-accelerated graphics pipelines. This ongoing project focuses on understanding the fundamentals of modern graphics APIs and building a robust rendering system from the ground up.',
		shortDescription:
			'A custom rendering engine built with Vulkan API for advanced graphics programming.',
		links: [],
		logo: Assets.Cpp,
		name: 'Custom Render Engine (Current)',
		period: {
			from: new Date(2024, 0, 1)
		},
		skills: getSkills('cpp', 'glsl'),
		type: 'Graphics Engine',
		screenshots: []
	},
	{
		slug: 'cubeology',
		color: '#8b6f47',
		description:
			'A high-fidelity Minecraft-style puzzle game featuring voxel-based environments and challenging gameplay mechanics. Built with a focus on creating engaging puzzle experiences within a blocky, procedurally-generated world. Combines creative building elements with strategic problem-solving challenges.',
		shortDescription:
			'High-fidelity Minecraft-style puzzle game with voxel environments.',
		links: [
			{ to: 'https://github.com/SaiiPrashanth/Cubeology', label: 'GitHub' }
		],
		logo: Assets.Unity,
		name: 'Cubeology',
		period: {
			from: new Date(2023, 9, 1),
			to: new Date(2024, 2, 1)
		},
		skills: getSkills('unity', 'csharp'),
		type: 'Puzzle Game',
		screenshots: []
	},
	{
		slug: 'bumble-bee',
		color: '#f1c40f',
		description:
			'BeeCraft is a unique voxel-based survival and building game where players take on the role of a hardworking bee in a procedurally generated world made of honey blocks and flower structures. Features include infinite voxel worlds, crafting systems, bee colony management, combat against wasps and hostile mobs, multiplayer co-op for up to 4 players, and day/night cycles. Players mine honeycomb blocks, craft tools, build elaborate hives with hexagonal rooms, and defend against enemy invasions while uncovering the mystery of why the flowers are dying.',
		shortDescription:
			'Voxel survival game where you build and defend your bee colony in a blocky honey world.',
		links: [
			{ to: 'https://saiiprashanth.itch.io/bumble-bee', label: 'Itch.io' }
		],
		logo: Assets.Unity,
		name: 'Bumble Bee',
		period: {
			from: new Date(2024, 5, 1),
			to: new Date(2024, 10, 1)
		},
		skills: getSkills('unity', 'csharp'),
		type: 'Survival Game',
		screenshots: []
	},
	{
		slug: 'neko-gambit',
		color: '#d4af37',
		description:
			'Neko Gambit is a unique 3D chess game set in ancient Egypt where players command feline deities on a beautifully rendered desert battlefield. Features include a rotating 3D board, divine chess pieces including Anubis-cats and Bastet-bishops, dynamic sandstorm weather events that affect gameplay, and ancient magic artifacts that can change the tide of battle. The game combines classical chess strategy with Egyptian mythology themes.',
		shortDescription:
			'3D chess game featuring Egyptian cat deities on a rotating desert battlefield.',
		links: [
			{ to: 'https://saiiprashanth.itch.io/chess-masters', label: 'Itch.io' }
		],
		logo: Assets.Unity,
		name: 'Neko Gambit',
		period: {
			from: new Date(2024, 3, 1),
			to: new Date(2024, 6, 1)
		},
		skills: getSkills('unity', 'csharp'),
		type: 'Strategy Game',
		screenshots: []
	},
	{
		slug: 'boating-through',
		color: '#4ecdc4',
		description:
			'Boating Through is an endless river navigation game with one-tap controls. Players guide their boat through an infinite procedurally generated river, changing direction with each tap to avoid falling into the abyss. Features low-poly relaxing aesthetics, high score tracking, unlockable boats and trails through coin collection, and addictive rhythm-based gameplay. The game emphasizes timing and precision with its simple yet challenging zigzag navigation mechanics.',
		shortDescription:
			'One-tap endless river runner with rhythm-based navigation and low-poly aesthetics.',
		links: [
			{ to: 'https://saiiprashanth.itch.io/boating-all-the-way', label: 'Itch.io' }
		],
		logo: Assets.Unity,
		name: 'Boating Through',
		period: {
			from: new Date(2024, 1, 1),
			to: new Date(2024, 4, 1)
		},
		skills: getSkills('unity', 'csharp'),
		type: 'Casual Game',
		screenshots: []
	},
	{
		slug: 'hungry-kirby',
		color: '#ffb7b2',
		description:
			'A Cut the Rope-style physics puzzle game starring Kirby. Players must cut chains and manipulate physics objects to feed stars to Kirby. Features include classic Kirby copy abilities, 5 worlds themed after sweets and treats, beautiful pixel art inspired by GBA classics, controller support, and interactive animations. Players draw lines to cut ropes, utilizing gravity and momentum to solve increasingly complex puzzles while experiencing charming animations and engaging level design.',
		shortDescription:
			'Physics-based puzzle game where you cut ropes to feed stars to Kirby.',
		links: [
			{ to: 'https://github.com/SaiiPrashanth/Hungry_Kirby', label: 'GitHub' },
			{ to: 'https://saiiprashanth.itch.io/hungry-kirby', label: 'Itch.io' }
		],
		logo: Assets.Unity,
		name: 'Hungry Kirby',
		period: {
			from: new Date(2023, 8, 1),
			to: new Date(2024, 1, 1)
		},
		skills: getSkills('unity', 'csharp'),
		type: 'Puzzle Game',
		screenshots: []
	},
	{
		slug: 'astron',
		color: '#00ffff',
		description:
			'A minimalist asteroid shooter with vector graphics and physics-based gameplay where precision is key and hesitation is fatal. Built with pure JavaScript and HTML5 Canvas, featuring clean high-contrast geometric art style, realistic inertia-based movement and collision systems, endless waves of increasingly complex geometric shapes, dynamic neon lighting and particle explosions, lives system, and score tracking. Players control a triangular spaceship, shooting asteroids that split into smaller pieces while managing momentum and avoiding collisions in this endless space survival game.',
		shortDescription:
			'Minimalist vector-based asteroid shooter with physics-driven gameplay.',
		links: [
			{ to: 'https://github.com/SaiiPrashanth/Astron', label: 'GitHub' },
			{ to: 'https://saiiprashanth.itch.io/astron', label: 'Itch.io' }
		],
		logo: Assets.JavaScript,
		name: 'Astron',
		period: {
			from: new Date(2022, 6, 1),
			to: new Date(2022, 11, 1)
		},
		skills: getSkills('js', 'html'),
		type: 'Arcade Game',
		screenshots: []
	},
	{
		slug: 'automated-lod-pipeline',
		color: '#4a90e2',
		description:
			'Engineered a 3ds Max automation tool that auto-generates Levels of Detail (LODs) and integrates assets seamlessly into UE5, significantly reducing manual import time for artists. This tool streamlines the asset pipeline by automating repetitive tasks and ensuring consistent quality across LOD levels. Features automated mesh decimation, material preservation, batch processing capabilities, and direct Unreal Engine integration.',
		shortDescription:
			'Automated LOD generation and asset integration tool for Unreal Engine 5.',
		links: [
			{ to: 'https://github.com/SaiiPrashanth/Max_LODGenerator', label: 'GitHub' }
		],
		logo: Assets.Python,
		name: 'Automated LOD Pipeline Tool',
		period: {
			from: new Date(2023, 6, 1),
			to: new Date(2024, 0, 1)
		},
		skills: getSkills('python', '3dsmax'),
		type: 'Tool Development',
		screenshots: []
	},
	{
		slug: 'decipher',
		color: '#10b981',
		description:
			'Served as the Technical Artist and Level Designer for Decipher, implementing scene optimizations and culling strategies to maintain stable framerates without sacrificing visual fidelity or gameplay depth. The project focused on balancing performance and visual quality through careful optimization and technical implementation. Utilized occlusion culling, LOD systems, and efficient lighting setups to create immersive environments.',
		shortDescription:
			'Technical art and level design with advanced optimization techniques.',
		links: [
			{ to: 'https://github.com/SaiiPrashanth', label: 'GitHub' }
		],
		logo: Assets.Unity,
		name: 'Decipher',
		period: {
			from: new Date(2023, 0, 1),
			to: new Date(2023, 6, 1)
		},
		skills: getSkills('unity', 'csharp'),
		type: 'Game Project',
		screenshots: []
	},
	{
		slug: 'max-unreal-exporter',
		color: '#0e76a8',
		description:
			'A Python-based export tool for 3ds Max that streamlines the workflow of exporting assets directly to Unreal Engine. This tool automates the export process, handles material conversion, ensures proper naming conventions, and maintains asset hierarchy. Designed to reduce manual steps and potential errors in the 3D asset pipeline, making it easier for artists to iterate quickly between Max and Unreal Engine.',
		shortDescription:
			'Python export tool for seamless 3ds Max to Unreal Engine asset pipeline.',
		links: [
			{ to: 'https://github.com/SaiiPrashanth/Max_UnrealExporter', label: 'GitHub' }
		],
		logo: Assets.Python,
		name: '3DSMax-Unreal Exporter',
		period: {
			from: new Date(2025, 0, 1)
		},
		skills: getSkills('python', '3dsmax', 'unreal'),
		type: 'Tool Development',
		screenshots: []
	}
];

const title = 'Projects';

const ProjectsData = { title, items };

export default ProjectsData;
