import BaseData from './base';
import { getSkills } from './skills';
import type { Skill } from './types';

const title = 'Home';

const hero: {
	title: string;
	description: string;
	links: Array<{ label: string; href: string; icon?: string; iconImage?: string }>;
} = {
	title: `${BaseData.fullName},`,
	description:
		'Aspiring Technical Artist with a strong foundation in both 3D art pipelines and scripting. Seeking to bridge the gap between artists and programmers by developing efficient workflows, troubleshooting asset integration and ensuring artistic vision is achieved within technical constraints.',
	links: [
		{ label: 'GitHub', href: 'https://github.com/SaiiPrashanth', icon: 'i-carbon-logo-github' },
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/saiiprashanth/', icon: 'i-carbon-logo-linkedin' },
		{ label: 'Itch.io', href: 'https://saiiprashanth.itch.io/', icon: 'i-simple-icons-itchdotio' },
		{ label: 'ArtStation', href: 'https://www.artstation.com/saiiprashanth', icon: 'i-simple-icons-artstation' },
		{ label: 'Email', href: 'mailto:saiiprashanth23@gmail.com', icon: 'i-carbon-at' }
	]
};

const carousel: Array<Skill> = getSkills().filter((s) => s.category?.slug !== 'core');

const HomeData = {
	title,
	hero,
	carousel
};

export default HomeData;
