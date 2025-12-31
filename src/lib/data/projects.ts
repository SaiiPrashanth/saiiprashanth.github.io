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
		links: [
			{ to: 'https://github.com/SaiiPrashanth', label: 'GitHub' }
		],
		logo: Assets.Unknown,
		name: 'Custom Render Engine',
		period: {
			from: new Date(2024, 0, 1)
		},
		skills: getSkills('cpp', 'glsl'),
		type: 'Graphics Engine',
		screenshots: []
	},
	{
		slug: 'automated-lod-pipeline',
		color: '#4a90e2',
		description:
			'Engineered a 3ds Max automation tool that auto-generates Levels of Detail (LODs) and integrates assets seamlessly into UE5, significantly reducing manual import time for artists. This tool streamlines the asset pipeline by automating repetitive tasks and ensuring consistent quality across LOD levels.',
		shortDescription:
			'Automated LOD generation and asset integration tool for Unreal Engine 5.',
		links: [
			{ to: 'https://github.com/SaiiPrashanth', label: 'GitHub' }
		],
		logo: Assets.Unknown,
		name: 'Automated LOD Pipeline Tool',
		period: {
			from: new Date(2023, 6, 1),
			to: new Date(2024, 0, 1)
		},
		skills: getSkills('python', '3dsmax', 'unreal'),
		type: 'Tool Development',
		screenshots: []
	},
	{
		slug: 'decipher',
		color: '#10b981',
		description:
			'Served as the Technical Artist and Level Designer for Decipher, implementing scene optimizations and culling strategies to maintain stable framerates without sacrificing visual fidelity or gameplay depth. The project focused on balancing performance and visual quality through careful optimization and technical implementation.',
		shortDescription:
			'Technical art and level design with advanced optimization techniques.',
		links: [
			{ to: 'https://github.com/SaiiPrashanth', label: 'GitHub' }
		],
		logo: Assets.Unknown,
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
		slug: 'astron',
		color: '#9333ea',
		description:
			'Prototyped a physics-based shooter using simple geometric primitives, implementing vector-based movement and collision detection systems from scratch. This project demonstrates fundamental game physics programming and low-level game mechanics implementation without relying on engine physics.',
		shortDescription:
			'Physics-based shooter with custom collision detection and movement systems.',
		links: [
			{ to: 'https://github.com/SaiiPrashanth', label: 'GitHub' }
		],
		logo: Assets.Unknown,
		name: 'Astron',
		period: {
			from: new Date(2022, 6, 1),
			to: new Date(2022, 11, 1)
		},
		skills: getSkills('cpp', 'python'),
		type: 'Game Prototype',
		screenshots: []
	}
];

const title = 'Projects';

const ProjectsData = { title, items };

export default ProjectsData;
