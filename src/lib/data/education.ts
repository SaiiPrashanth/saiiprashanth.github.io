import Assets from './assets';
import type { Education } from './types';

const title = 'Certifications';

const items: Array<Education> = [
	{
		degree: 'Google Project Management Professional Certification',
		description: 'Professional certification demonstrating expertise in project management methodologies and best practices.',
		location: 'Online',
		logo: Assets.Unknown,
		name: 'Google Project Management',
		organization: 'Google',
		period: { from: new Date(2024, 0, 1) },
		shortDescription: 'Project management and agile methodologies certification.',
		slug: 'google-pm',
		subjects: ['Project Management', 'Agile', 'Scrum', 'Leadership'],
		color: '#4285f4'
	},
	{
		degree: 'Agile with Atlassian Jira',
		description: 'Certification in agile project management using Atlassian Jira for team collaboration and workflow optimization.',
		location: 'Online',
		logo: Assets.Unknown,
		name: 'Agile with Jira',
		organization: 'Atlassian',
		period: { from: new Date(2024, 0, 1) },
		shortDescription: 'Agile workflow and Jira project management certification.',
		slug: 'agile-jira',
		subjects: ['Agile', 'Jira', 'Scrum', 'Kanban'],
		color: '#0052cc'
	},
	{
		degree: 'Unity Certified Game Developer Certification',
		description: 'Professional certification validating comprehensive Unity game development skills. Candidate status with estimated completion in February 2026.',
		location: 'Online',
		logo: Assets.Unknown,
		name: 'Unity Game Developer',
		organization: 'Unity Technologies',
		period: { from: new Date(2024, 0, 1), to: new Date(2026, 1, 1) },
		shortDescription: 'Unity engine and game development certification.',
		slug: 'unity-certified',
		subjects: ['Unity', 'C#', 'Game Development', '3D Graphics', 'Game Design'],
		color: '#00bcd4'
	},
	{
		degree: 'Electronic Arts - Product Management Job Simulation',
		description: 'Completed EA product management simulation covering game production, stakeholder management, and product lifecycle.',
		location: 'Online',
		logo: Assets.Unknown,
		name: 'EA Product Management',
		organization: 'Electronic Arts',
		period: { from: new Date(2024, 0, 1) },
		shortDescription: 'Game production and product management simulation.',
		slug: 'ea-product-mgmt',
		subjects: ['Product Management', 'Game Production', 'Stakeholder Management'],
		color: '#ff0000'
	},
	{
		degree: 'Game Design and Development Specialization',
		description: 'Comprehensive specialization covering game design principles, development processes, and industry best practices.',
		location: 'Online',
		logo: Assets.Unknown,
		name: 'Game Design Specialization',
		organization: 'Michigan State University',
		period: { from: new Date(2023, 0, 1) },
		shortDescription: 'Game design and development specialization.',
		slug: 'msu-game-design',
		subjects: ['Game Design', 'Game Development', 'Level Design', 'Game Mechanics'],
		color: '#22c55e'
	},
	{
		degree: 'Game Design Professional Certificate',
		description: 'Professional certificate program focused on game design principles and development workflows.',
		location: 'Online',
		logo: Assets.Unknown,
		name: 'Epic Games Design Certificate',
		organization: 'Epic Games',
		period: { from: new Date(2023, 0, 1) },
		shortDescription: 'Professional game design certification from Epic Games.',
		slug: 'epic-game-design',
		subjects: ['Game Design', 'Unreal Engine', 'Level Design', 'Game Production'],
		color: '#9333ea'
	}
];

const EducationData = { title, items };

export default EducationData;
