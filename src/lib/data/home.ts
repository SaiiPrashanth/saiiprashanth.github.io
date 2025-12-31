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
		'Aspiring Game Producer with a strong foundation in technical design and operational management. Combines hands-on Unity development experience with a proven track record of optimizing workflows and managing compliance in high-stakes environments. Passionate about acting as the functional glue of a team to advocate for player-centric features while ensuring strict adherence to project schedules and dependencies.',
	links: [
		{ label: 'GitHub', href: 'https://github.com/SaiiPrashanth', icon: 'i-carbon-logo-github' },
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/saiiprashanth/', icon: 'i-carbon-logo-linkedin' },
		{ label: 'ArtStation', href: 'https://www.artstation.com/saiiprashanth', iconImage: '/logos/Artstation.svg' },
		{ label: 'Itch.io', href: 'https://saiiprashanth.itch.io/', iconImage: '/logos/Itch.svg' },
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
