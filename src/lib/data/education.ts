import Assets from './assets';
import type { Education } from './types';

const title = 'Certifications';

const items: Array<Education> = [
	{
		degree: 'Google Project Management Professional Certification',
		description: 'Professional certification demonstrating expertise in project management methodologies and best practices.',
		location: 'Coursera',
		logo: Assets.Google,
		name: 'Google Project Management',
		organization: 'Google',
		period: { from: new Date(2024, 0, 1) },
		shortDescription: 'Project management and agile methodologies certification.',
		slug: 'google-pm',
		subjects: ['Project Management', 'Agile', 'Scrum', 'Leadership'],
		color: '#4285f4',
		link: 'https://www.coursera.org/account/accomplishments/specialization/48GB3HOCHIZZ'
	},
	{
		degree: 'Agile with Atlassian Jira',
		description: 'Certification in agile project management using Atlassian Jira for team collaboration and workflow optimization.',
		location: 'Atlassian University',
		logo: Assets.Atlassian,
		name: 'Agile with Jira',
		organization: 'Atlassian',
		period: { from: new Date(2024, 0, 1) },
		shortDescription: 'Agile workflow and Jira project management certification.',
		slug: 'agile-jira',
		subjects: ['Agile', 'Jira', 'Scrum', 'Kanban'],
		color: '#0052cc',
		link: 'https://www.coursera.org/account/accomplishments/records/D8KSKB6S48AY'
	},
	{
		degree: 'Unity Certified Game Developer Certification',
		description: 'Professional certification validating comprehensive Unity game development skills. Candidate status with estimated completion in February 2026.',
		location: '',
		logo: Assets.UnityTech,
		name: 'Unity Game Developer',
		organization: 'Unity Technologies',
		period: { from: new Date(2024, 0, 1), to: new Date(2026, 1, 1) },
		shortDescription: 'Unity engine and game development certification.',
		slug: 'unity-certified',
		subjects: ['Unity', 'C#', 'Game Development', '3D Graphics', 'Game Design'],
		color: '#00bcd4',
		link: 'https://drive.google.com/file/d/1DjxAGJ8Jrhbh4aapllE1CQWb9iF_Dsdn/view?usp=sharing'
	},
	{
		degree: 'Electronic Arts - Product Management Job Simulation',
		description: 'Completed EA product management simulation covering game production, stakeholder management, and product lifecycle.',
		location: 'Forage',
		logo: Assets.ElectronicArts,
		name: 'EA Product Management',
		organization: 'Electronic Arts',
		period: { from: new Date(2024, 0, 1) },
		shortDescription: 'Game production and product management simulation.',
		slug: 'ea-product-mgmt',
		subjects: ['Product Management', 'Game Production', 'Stakeholder Management'],
		color: '#ff0000',
		link: 'https://www.theforage.com/completion-certificates/j43dGscQHtJJ57N54/5genWYpfo5b57G7yv_j43dGscQHtJJ57N54_8aLi6e7FfZQZDxdog_1768660084981_completion_certificate.pdf '
	},
	{
		degree: 'Game Design and Development Specialization',
		description: 'Comprehensive specialization covering game design principles, development processes, and industry best practices.',
		location: 'Coursera',
		logo: Assets.MichiganStateUniversity,
		name: 'Game Design Specialization',
		organization: 'Michigan State University',
		period: { from: new Date(2023, 0, 1) },
		shortDescription: 'Game design and development specialization.',
		slug: 'msu-game-design',
		subjects: ['Game Design', 'Game Development', 'Level Design', 'Game Mechanics'],
		color: '#22c55e',
		link: 'https://www.coursera.org/account/accomplishments/records/IGV3WWRQPF6J'
	},
	{
		degree: 'Game Design Professional Certificate',
		description: 'Professional certificate program focused on game design principles and development workflows.',
		location: 'Coursera',
		logo: Assets.EpicGames,
		name: 'Epic Games Design Certificate',
		organization: 'Epic Games',
		period: { from: new Date(2023, 0, 1) },
		shortDescription: 'Professional game design certification from Epic Games.',
		slug: 'epic-game-design',
		subjects: ['Game Design', 'Unreal Engine', 'Level Design', 'Game Production'],
		color: '#9333ea',
		link: 'https://www.coursera.org/account/accomplishments/records/JR2UWVNQO1Z9'
	}
];

const EducationData = { title, items };

export default EducationData;
