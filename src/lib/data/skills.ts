import type { Skill, SkillCategory } from './types';
import type { StringWithAutoComplete } from '@riadh-adrani/utils';
import { omit } from '@riadh-adrani/utils';
import Assets from './assets';
import svelteMd from './md/svelte.md?raw';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => {
	return items.filter((it) => (slugs.length === 0 ? true : slugs.includes(it.slug)));
};

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};

const title = 'Skills';

const items = [
	defineSkill({
		slug: 'cpp',
		color: 'blue',
		description: 'Proficient in C++ for game development and low-level systems programming.',
		logo: Assets.Cpp,
		name: 'C++',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'csharp',
		color: 'purple',
		description: 'Expert in C# for Unity game development and .NET applications.',
		logo: Assets.Csharp,
		name: 'C#',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'glsl',
		color: 'green',
		description: 'Experience with GLSL for shader programming and graphics rendering.',
		logo: Assets.Unknown,
		name: 'GLSL',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'lua',
		color: 'blue',
		description: 'Scripting in Lua for game logic and automation.',
		logo: Assets.Unknown,
		name: 'Lua',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'python',
		color: 'yellow',
		description: 'Python for automation, tools development, and scripting.',
		logo: Assets.Python,
		name: 'Python',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'unity',
		color: 'cyan',
		description: 'Professional experience with Unity3D game engine for game development.',
		logo: Assets.Unknown,
		name: 'Unity3D',
		category: 'framework'
	}),
	defineSkill({
		slug: 'unreal',
		color: 'purple',
		description: 'Experience with Unreal Engine for game and real-time 3D development.',
		logo: Assets.Unknown,
		name: 'Unreal Engine',
		category: 'framework'
	}),
	defineSkill({
		slug: 'git',
		color: 'orange',
		description: 'Version control and collaborative development using Git.',
		logo: Assets.Unknown,
		name: 'Git',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'jira',
		color: 'blue',
		description: 'Agile project management and issue tracking with JIRA.',
		logo: Assets.Unknown,
		name: 'JIRA',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'maya',
		color: 'teal',
		description: '3D modeling and animation using Autodesk Maya.',
		logo: Assets.Unknown,
		name: 'Maya',
		category: 'design'
	}),
	defineSkill({
		slug: '3dsmax',
		color: 'teal',
		description: '3D modeling and visualization with 3DS Max.',
		logo: Assets.Unknown,
		name: '3DS Max',
		category: 'design'
	}),
	defineSkill({
		slug: 'substance',
		color: 'orange',
		description: 'Material creation and texturing with Substance Painter.',
		logo: Assets.Unknown,
		name: 'Substance Painter',
		category: 'design'
	}),
	defineSkill({
		slug: 'photoshop',
		color: 'blue',
		description: 'Image editing and graphics design using Adobe Photoshop.',
		logo: Assets.Unknown,
		name: 'Photoshop',
		category: 'design'
	}),
	defineSkill({
		slug: 'illustrator',
		color: 'orange',
		description: 'Vector graphics and illustration with Adobe Illustrator.',
		logo: Assets.Unknown,
		name: 'Illustrator',
		category: 'design'
	}),
	defineSkill({
		slug: 'premiere',
		color: 'purple',
		description: 'Video editing and post-production with Adobe Premiere Pro.',
		logo: Assets.Unknown,
		name: 'Premiere Pro',
		category: 'design'
	})
] as const;

const SkillsData = {
	title,
	items
};

export default SkillsData;
