import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from './types';

const title = 'Experience';

const items: Array<Experience> = [
	{
		slug: 'open-sourcer',
		company: 'Self-employed',
		description: 'Creating awesome tools for developers.',
		contract: ContractType.SelfEmployed,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date() },
		skills: getSkills('ts', 'js'),
		name: 'Open Source Developer',
		color: 'red',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Creating awesome tools for developers.'
	},
	{
		slug: 'software-freelance',
		company: 'Self-employed',
		description: 'Creating awesome applications for customers.',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date() },
		skills: getSkills('svelte', 'ts', 'sass', 'css', 'html', 'js'),
		name: 'Freelancer',
		color: 'blue',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Creating awesome applications for customers.'
	},
	{
		slug: 'software-freelance-junior',
		company: 'Self-employed',
		description: 'Creating awesome applications for customers.',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2022, 0, 1), to: new Date() },
		skills: getSkills('css', 'html', 'js'),
		name: 'Junior Freelancer',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Creating awesome applications for customers.'
	},
	{
		slug: 'bachelors-computer-science',
		company: 'ISTIC',
		description: '',
		contract: ContractType.FullTime,
		type: 'Education',
		location: 'Tunisia',
		period: { from: new Date(2020, 0, 1), to: new Date(2022, 5, 1) },
		skills: getSkills('python', 'cpp', 'java'),
		name: 'Bachelor degree of Computer Science',
		color: '#3b82f6',
		links: [],
		logo: Assets.Unknown,
		shortDescription: ''
	},
	{
		slug: 'phd-computer-science',
		company: 'MIT',
		description: '',
		contract: ContractType.FullTime,
		type: 'Education',
		location: 'USA',
		period: { from: new Date(2023, 0, 1) },
		skills: getSkills('rust'),
		name: 'PhD of Computer Science',
		color: '#8b5cf6',
		links: [],
		logo: Assets.Unknown,
		shortDescription: ''
	}
];

const ExperienceData = { title, items };

export default ExperienceData;
