import Assets from './assets';
import type { Education } from './types';

const title = 'Certifications';

const items: Array<Education> = [
	{
		degree: 'AWS Certified Solutions Architect',
		description: 'Professional certification demonstrating expertise in designing distributed systems on AWS.',
		location: 'Online',
		logo: Assets.Unknown,
		name: 'AWS Solutions Architect',
		organization: 'Amazon Web Services',
		period: { from: new Date(2023, 5, 1), to: new Date(2023, 8, 1) },
		shortDescription: 'AWS cloud architecture and best practices certification.',
		slug: 'aws-solutions-architect',
		subjects: ['Cloud Computing', 'AWS', 'Architecture', 'DevOps'],
		color: '#ff9900'
	},
	{
		degree: 'Certified Kubernetes Administrator',
		description: 'Certification validating skills in Kubernetes cluster administration and management.',
		location: 'Online',
		logo: Assets.Unknown,
		name: 'CKA',
		organization: 'Cloud Native Computing Foundation',
		period: { from: new Date(2023, 2, 1), to: new Date(2023, 4, 1) },
		shortDescription: 'Kubernetes administration and orchestration certification.',
		slug: 'kubernetes-admin',
		subjects: ['Kubernetes', 'Containers', 'DevOps', 'Cloud Native'],
		color: '#10b981'
	},
	{
		degree: 'Unity Certified Developer',
		description: 'Professional certification for Unity game development and 3D application creation.',
		location: 'Online',
		logo: Assets.Unknown,
		name: 'Unity Developer',
		organization: 'Unity Technologies',
		period: { from: new Date(2022, 8, 1), to: new Date(2022, 11, 1) },
		shortDescription: 'Game development and Unity engine certification.',
		slug: 'unity-developer',
		subjects: ['Unity', 'C#', 'Game Development', '3D Graphics'],
		color: '#9333ea'
	},
	{
		degree: 'Google Cloud Professional',
		description: 'Certification demonstrating proficiency in Google Cloud Platform services and architecture.',
		location: 'Online',
		logo: Assets.Unknown,
		name: 'GCP Professional',
		organization: 'Google Cloud',
		period: { from: new Date(2023, 0, 1), to: new Date(2023, 2, 1) },
		shortDescription: 'Google Cloud Platform architecture certification.',
		slug: 'gcp-professional',
		subjects: ['Google Cloud', 'Cloud Architecture', 'DevOps', 'Terraform'],
		color: '#4285f4'
	}
];

const EducationData = { title, items };

export default EducationData;
