import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from './types';

const title = 'Experience';

const items: Array<Experience> = [
	{
		slug: 'game-developer-dnnovate',
		company: 'Dnnovate Technologies',
		description: 'Collaborated with artists and designers to optimize level design and streamline the asset integration process. Managed version control via Git and optimized asset pipelines, successfully improving build stability and performance. Integrated monetization SDKs into the game loop, ensuring seamless ad delivery without disrupting player experience.',
		contract: ContractType.FullTime,
		type: 'Game Development',
		location: 'Remote',
		period: { from: new Date(2023, 3, 1), to: new Date(2023, 11, 1) },
		skills: getSkills('unity', 'csharp', 'git'),
		name: 'Game Developer',
		color: '#ff6b6b',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Game development with Unity, asset optimization and SDK integration.'
	},
	{
		slug: 'operations-associate-capital',
		company: 'Capital Dynamics',
		description: 'Streamlined daily reporting workflows and client onboarding processes, reducing administrative turnaround time. Maintained strict data integrity and compliance protocols for client portfolios, identifying and resolving critical discrepancies to prevent regulatory issues. Represented the firm at exclusive AMC industry meets and head office briefings, strengthening partnerships with key financial stakeholders.',
		contract: ContractType.FullTime,
		type: 'Operations',
		location: 'Coimbatore, TN',
		period: { from: new Date(2022, 0, 1) },
		skills: getSkills('excel', 'communication'),
		name: 'Operations Associate',
		color: '#4a90e2',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Financial operations, compliance management and stakeholder relations.'
	},
	{
		slug: 'business-strategy-glowflo',
		company: 'Glowflo Sports',
		description: 'Negotiated strategic partnerships with underutilized external venues to expand capacity during peak hours, effectively distributing player load. Organized competitive tournaments and community events, securing regulatory approvals and significantly increasing brand visibility. Recruited and onboarded professional coaches to launch a training academy, establishing a new recurring revenue stream.',
		contract: ContractType.FullTime,
		type: 'Business Strategy',
		location: 'Coimbatore, TN',
		period: { from: new Date(2022, 0, 1) },
		skills: getSkills('strategy', 'negotiation'),
		name: 'Business Strategy Associate',
		color: '#10b981',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Strategic partnerships, event organization and business development.'
	},
	{
		slug: 'bsc-gaming',
		company: 'Jain University',
		description: 'University Gold Medalist - Awarded for securing the highest academic rank in the Department of Animation and VR at Jain University. Specialized in Game Development, Unity3D, Unreal Engine, 3D Animation, and VR.',
		contract: ContractType.FullTime,
		type: 'Education',
		location: 'Bengaluru',
		period: { from: new Date(2022, 0, 1), to: new Date(2025, 11, 31) },
		skills: getSkills('unity', 'unreal', 'csharp', 'cpp'),
		name: 'Bachelor of Science - Gaming',
		color: '#0066cc',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'B.Sc. Gaming - University Gold Medalist'
	},
	{
		slug: 'cbse-12',
		company: 'Amrita Vidyalayam',
		description: 'Completed higher secondary education with focus on Physics, Chemistry, Mathematics, and Computer Science.',
		contract: ContractType.FullTime,
		type: 'Education',
		location: 'Coimbatore',
		period: { from: new Date(2020, 0, 1), to: new Date(2022, 0, 1) },
		skills: getSkills('python', 'cpp'),
		name: 'Grade 12 (CBSE) - Science Stream',
		color: '#10b981',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'CBSE Grade 12 - PCMC'
	}
];

const ExperienceData = { title, items };

export default ExperienceData;
