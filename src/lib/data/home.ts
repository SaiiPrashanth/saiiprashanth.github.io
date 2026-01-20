import BaseData from './base';
import { getSkills } from './skills';
import type { Skill } from './types';

const title = 'Home';

const hero: {
	title: string;
	description: string;
	links: Array<{ label: string; href: string; icon?: `i-carbon-${string}`; iconImage?: string }>;
} = {
	title: `${BaseData.fullName},`,
	description:
		'Aspiring Game Producer with a Technical Art background, passionate about game development processes and supporting creative teams to bring their best ideas to life.',
	links: [
		{ label: 'GitHub', href: 'https://github.com/SaiiPrashanth', icon: 'i-carbon-logo-github' },
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/saiiprashanth/', icon: 'i-carbon-logo-linkedin' },
		{ label: 'Itch.io', href: 'https://saiiprashanth.itch.io/', icon: 'i-simple-icons-itchdotio' },
		{ label: 'ArtStation', href: 'https://www.artstation.com/saiiprashanth', icon: 'i-simple-icons-artstation' },
		{ label: 'Email', href: 'mailto:saiiprashanth23@gmail.com', icon: 'i-carbon-at' }
	]
};

const carousel: Array<Skill> = getSkills();

const HomeData = {
	title,
	hero,
	carousel
};

export default HomeData;
