import type { Skill, SkillCategory } from './types';
import { omit, type StringWithAutoComplete } from '$lib/utils';
import Assets from './assets';
import svelteMd from './md/svelte.md?raw';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Core Competencies', slug: 'core' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
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

	// Sort groups by the order defined in the 'categories' array
	out.sort((a, b) => {
		const aIdx = categories.findIndex((c) => c.slug === a.category.slug);
		const bIdx = categories.findIndex((c) => c.slug === b.category.slug);
		if (aIdx === -1) return 1;
		if (bIdx === -1) return -1;
		return aIdx - bIdx;
	});

	// Sort devtools items in the desired display order
	const devtoolsOrder = ['jira', 'office', 'git', 'visualstudio', 'vscode', 'rider', 'renderdoc', 'comfyui'];
	out.forEach((group) => {
		if (group.category.slug === 'devtools') {
			group.items.sort((a, b) => {
				const aIdx = devtoolsOrder.indexOf(a.slug);
				const bIdx = devtoolsOrder.indexOf(b.slug);
				if (aIdx === -1 && bIdx === -1) return 0;
				if (aIdx === -1) return 1;
				if (bIdx === -1) return -1;
				return aIdx - bIdx;
			});
		}
	});

	return out;
};

const title = 'Skills';

const items = [
	defineSkill({
		slug: 'agile-scrum',
		color: 'blue',
		description: '[Agile](#) is a set of values and principles first formalised in the [Agile Manifesto](#) in [2001](#) by a group of [17 software practitioners](#) in Snowbird, Utah — a document that reshaped how the entire software and games industry delivers products. [Scrum](#), its most widely adopted framework, was introduced by [Jeff Sutherland](#) and [Ken Schwaber](#) and is now used by [over 90% of Agile teams worldwide](#).\n\nThe [Scrum framework](#) structures work into short, time-boxed iterations called [sprints](#) (typically [1–2 weeks](#)), ensuring teams can respond quickly to change rather than following a rigid plan. Each sprint includes [sprint planning](#), [daily stand-ups](#) (15-minute syncs that replace hour-long status meetings), a [sprint review](#) with stakeholders, and a [sprint retrospective](#) — where the team reflects on what worked and what did not.\n\nKey ceremonies and artefacts include:\n- **[Product Backlog](#)** — the prioritised list of all work, owned by the [Product Owner](#)\n- **[Sprint Backlog](#)** — the tasks selected for the current sprint\n- **[Burndown Chart](#)** — a real-time view of remaining work vs. time\n- **[Velocity](#)** — the team\'s average output per sprint, used for forecasting\n\nIn practice, this means planning and running [bi-weekly sprints](#), facilitating [backlog grooming sessions](#), and adapting sprint goals based on stakeholder feedback, test results, or technical blockers — keeping [delivery velocity high](#) while maintaining product quality. Fun fact: [Spotify](#) popularised the ["Squad model"](#) — a Scrum variant where cross-functional squads own end-to-end features, heavily influencing how game studios structure teams today.',
		logo: Assets.CoreAgileScrum,
		name: 'Agile & Scrum',
		category: 'core'
	}),
	defineSkill({
		slug: 'game-production',
		color: 'cyan',
		description: 'A project without a schedule is just a wish list. [Project scheduling](#) is the process of translating a project\'s scope into a structured, time-bound plan — identifying every task, its dependencies, the resources required, and the order in which work must happen to reach the finish line on time.\n\nThe gold standard for complex projects is the [Critical Path Method (CPM)](#), developed in the [1950s](#) by [DuPont](#) and [Remington Rand](#) for managing chemical plant construction. CPM identifies the longest chain of dependent tasks — the [critical path](#) — that determines the project\'s earliest possible completion date. Any delay on the critical path delays the entire project, while tasks with [float](#) (slack time) offer scheduling flexibility.\n\nModern scheduling combines tools and techniques:\n- **[Gantt Charts](#)** — visual bars mapping tasks to calendar time, popularised by [Henry Gantt](#) in the [1910s](#) and still used in virtually every project management tool\n- **[Work Breakdown Structure (WBS)](#)** — decomposing deliverables into manageable tasks and subtasks\n- **[Milestone Gates](#)** — fixed checkpoints (Alpha, Beta, Gold) where the project\'s health is formally reviewed\n- **[Buffer Management](#)** — building realistic contingency into estimates, because [studies show that software projects run over by an average of 25–50%](#)\n\nIn practice this means planning schedules across all phases — from [pre-production roadmaps](#) to [daily sprint boards](#) — breaking down high-level goals into time-boxed deliverables, and proactively adjusting when scope shifts without compromising key milestones. Tools like [Jira](#), [MS Project](#), and [Notion](#) are used daily to keep teams and stakeholders aligned on what is coming, what is at risk, and what is done.',
		logo: Assets.CoreGameProduction,
		name: 'Project Scheduling',
		category: 'core'
	}),
	defineSkill({
		slug: 'risk-management',
		color: 'red',
		description: '[Risk management](#) is the practice of identifying, assessing, and mitigating threats to a project before they become crises. The discipline dates back to [maritime insurance in 17th-century Europe](#), but its modern project management form was codified by the [Project Management Institute (PMI)](#) in the [PMBOK Guide](#) — now in its [7th edition](#) and used by [professionals in over 190 countries](#).\n\nEvery risk has two dimensions: [likelihood](#) (how probable?) and [impact](#) (how damaging?). Mapping risks on a [probability-impact matrix](#) allows teams to focus mitigation effort where it matters most — high-impact, high-likelihood risks get immediate action plans; low-probability, low-impact risks get watched but not over-engineered.\n\nThe core artefact is the [Risk Register](#) — a living document that tracks:\n- **Risk description** and category (technical, scope, schedule, resource, external)\n- **Probability and impact scores** (often rated 1–5)\n- **Owner** — the person responsible for monitoring and mitigating\n- **Mitigation strategy** — [avoid](#), [transfer](#) (insurance/contracts), [mitigate](#) (reduce likelihood), or [accept](#)\n- **Contingency plan** — what to do if the risk materialises anyway\n\nIn practice, this means proactively identifying [technical, scope, and schedule risks](#) early in the development cycle, assigning ownership to each risk, and tracking mitigation actions in weekly reviews. Critical risks are escalated to stakeholders with [actionable options](#) rather than just problems — because a producer\'s job is to bring solutions, not just bad news. Fun fact: [NASA\'s Continuous Risk Management (CRM)](#) framework, developed after the [Challenger disaster](#), is one of the most rigorous risk management systems ever created and has influenced how the games industry thinks about milestone gating.',
		logo: Assets.CoreRiskManagement,
		name: 'Risk Management',
		category: 'core'
	}),
	defineSkill({
		slug: 'budget-resource',
		color: 'yellow',
		description: '[Resource allocation](#) is the process of identifying, assigning, and managing the assets needed to complete a project successfully — covering [people](#), [budget](#), [tools](#), and [time](#). Poor resource allocation is one of the leading causes of project failure: a [2023 PMI report](#) found that [32% of project failures](#) are attributed to inadequate resource management.\n\nIn game production, resources span a unique mix: [artists](#), [programmers](#), [designers](#), [QA testers](#), [outsource partners](#), [licensed middleware](#), [hardware](#), and [cloud services](#). The challenge is that resource demand fluctuates dramatically across the production cycle — [pre-production](#) is lean, [production](#) peaks, and [crunch](#) (if unmanaged) signals earlier misallocation.\n\nKey practices include:\n- **[Capacity planning](#)** — mapping team bandwidth against sprint workload to surface overallocation before it becomes burnout\n- **[Rolling reforecast](#)** — continuously updating budget vs. actuals rather than relying on a stale upfront estimate\n- **[Outsource management](#)** — scoping, briefing, and reviewing work from external vendors and contractors to maintain quality without growing headcount permanently\n- **[RACI mapping](#)** — clarifying who is [Responsible](#), [Accountable](#), [Consulted](#), and [Informed](#) so no task lacks an owner\n- **[Contingency budgets](#)** — the industry standard is reserving [10–15%](#) of total budget for unknowns\n\nIn practice, this means tracking [actuals vs. estimates](#) on a rolling basis, coordinating with HR and finance to secure headcount ahead of crunch periods, and negotiating with vendors to stay within budget without sacrificing quality — because the goal is always [sustainable production](#), not just on-time delivery.',
		logo: Assets.CoreBudgetResource,
		name: 'Resource Allocation',
		category: 'core'
	}),
	defineSkill({
		slug: 'stakeholder-comm',
		color: 'teal',
		description: 'A [stakeholder](#) is anyone with an interest in a project\'s outcome — from the [publisher](#) funding it, to the [lead programmer](#) concerned about tech debt, to the [player community](#) waiting for the game. [Stakeholder facilitation](#) is the art of identifying all these parties, understanding what they need to know and when, and keeping them aligned without drowning the team in meetings.\n\nResearch by [MIT Sloan Management Review](#) found that [poor stakeholder communication](#) is cited in [57% of project failures](#). The antidote is a [Communication Plan](#) — a deliberately designed cadence that answers: who gets what information, at what frequency, in what format, and through which channel.\n\nEffective facilitation involves:\n- **[Stakeholder mapping](#)** — plotting each stakeholder by [influence](#) (can they change the project?) and [interest](#) (do they care about details?) using a [power-interest grid](#)\n- **[Status reports](#)** — concise, visual updates (often traffic-light [RAG status](#): Red/Amber/Green) that tell stakeholders what they need to know without requiring them to attend every meeting\n- **[Alignment meetings](#)** — structured sessions with a clear agenda, decision log, and action items, ensuring time spent in the room translates to decisions out of it\n- **[Escalation paths](#)** — pre-agreed protocols for when blockers need to move up the chain quickly\n- **[Publisher-facing reporting](#)** — translating internal sprint data into milestone evidence that builds confidence and demonstrates control\n\nIn practice this means translating complex technical and creative updates into concise executive summaries, facilitating alignment between internal departments and external partners, and maintaining transparent communication cadences that build trust and [reduce surprise escalations](#) — because the best escalation is the one that never needed to happen.',
		logo: Assets.CoreStakeholderComm,
		name: 'Stakeholder Facilitation',
		category: 'core'
	}),
	defineSkill({
		slug: 'milestone-planning',
		color: 'purple',
		description: '[Market analysis](#) in game production is the process of evaluating a game\'s competitive landscape, target audience, pricing positioning, and platform opportunity — turning raw data and player research into actionable development and marketing decisions. It bridges the gap between [creative vision](#) and [commercial reality](#).\n\nThe global games market generated [over $180 billion in revenue in 2023](#), spanning [mobile](#), [PC](#), [console](#), and [emerging platforms](#). Understanding where a game fits in that landscape — and what players in that segment expect — is as important as the game\'s design itself. A title that is well-made but poorly positioned will be invisible at launch.\n\nKey analysis methods include:\n- **[Competitive benchmarking](#)** — surveying similar titles on [Steam](#), [Metacritic](#), [Itch.io](#), and app stores to understand [pricing](#), [feature sets](#), [review sentiment](#), and market gaps\n- **[Player persona research](#)** — building profiles of the target audience through [surveys](#), [playtest feedback](#), and [Steam Review mining](#) to validate design decisions\n- **[SWOT analysis](#)** — mapping [Strengths](#), [Weaknesses](#), [Opportunities](#), and [Threats](#) relative to the competitive field\n- **[Platform opportunity assessment](#)** — evaluating [platform demographics](#), [first-party promotional opportunities](#), and [revenue share structures](#) across [Steam](#), [Epic Games Store](#), [Xbox Game Pass](#), and [PlayStation Store](#)\n- **[Trend monitoring](#)** — tracking [SteamDB](#), [VGInsights](#), and [Newzoo reports](#) to stay ahead of genre saturation and emerging player preferences\n\nIn practice, this means translating market data into clear, measurable requirements and planning inputs — ensuring every feature prioritised maps back to a defined player need or commercial objective.',
		logo: Assets.CoreMilestonePlanning,
		name: 'Market Analysis',
		category: 'core'
	}),
	defineSkill({
		slug: 'problem-solving',
		color: 'purple',
		description: 'In production, decisions rarely come with perfect information, unlimited time, or obvious right answers. [Critical decision making](#) is the skill of cutting through ambiguity, evaluating trade-offs clearly, and committing to a course of action that the whole team can execute — even under pressure.\n\nThe foundational tool is [Root Cause Analysis (RCA)](#): rather than treating symptoms, RCA digs to the underlying cause of a problem. The [5 Whys technique](#) — asking "why?" five times in succession — was developed by [Sakichi Toyoda](#) and is now used across industries from [Toyota\'s production line](#) to [NASA mission debriefs](#). Pairing RCA with an [Ishikawa (fishbone) diagram](#) maps all contributing factors visually, making patterns clear and solutions more targeted.\n\nFor decisions involving competing options, structured frameworks help remove bias:\n- **[Decision Matrix](#)** — score each option against weighted criteria (cost, time, risk, quality) and let the numbers surface the best fit\n- **[Pre-mortem analysis](#)** — imagining a decision has already failed, then working backwards to identify what went wrong, before committing\n- **[OODA Loop](#)** (Observe, Orient, Decide, Act) — a military decision model now widely adopted in fast-moving project environments for rapid, iterative problem resolution\n- **[Trade-off mapping](#)** — explicitly documenting [scope vs. schedule vs. quality](#) trade-offs so decisions are informed, transparent, and agreed by the right stakeholders\n\nIn practice, this means keeping teams focused on [solutions rather than problems](#) — from live build-breaking bugs requiring instant triage, to scope conflicts demanding a clear producer call, to resourcing decisions that affect morale and delivery simultaneously. Fun fact: [Amazon\'s two-pizza rule](#) (if a decision requires more people than can be fed by two pizzas, the group is too large) reflects research showing that smaller decision-making groups act faster and with less [groupthink](#).',
		logo: Assets.CoreProblemSolving,
		name: 'Critical Decision Making',
		category: 'core'
	}),
	defineSkill({
		slug: 'presentation',
		color: 'orange',
		description: 'The ability to present clearly and persuasively is one of the highest-leverage professional skills that exists — it determines whether a great idea gets funding, whether a team embraces a direction, and whether a publisher signs the deal. [Presentation](#) is not just slide design; it is [structured thinking made visible](#).\n\nThe gold standard framework for narrative structure is [Barbara Minto\'s Pyramid Principle](#), developed at [McKinsey](#) in the [1960s](#) and still taught in the world\'s top business schools. The core insight: lead with the [conclusion](#), then support it with grouped, logical arguments — because audiences make decisions top-down, not bottom-up. In game production, this means opening a milestone review with ["We are on track for Beta — here\'s the evidence"](#), not burying the headline on slide 14.\n\nKey presentation contexts in production:\n- **[Pitch decks](#)** — [10–15 slide](#) documents that sell a concept, vision, or funding ask to publishers or investors\n- **[Milestone reviews](#)** — structured presentations to stakeholders using [RAG status](#), [burndown data](#), and live [build demos](#) to demonstrate progress objectively\n- **[Post-mortems](#)** — candid, blameless retrospectives examining what went well, what did not, and what changes for the next project — standard practice at studios like [Bungie](#), [Naughty Dog](#), and [Valve](#) (many of which are [publicly published on GDC Vault](#))\n- **[Team stand-ups and all-hands](#)** — concise, high-energy communication that aligns and motivates without wasting development time\n\nIn practice, this means crafting and delivering compelling presentations to audiences ranging from small team stand-ups to [executive leadership](#) and [external publishers](#). Data and visuals are always paired with clear narrative — because data without story is just noise, and story without data is just hope. Fun fact: [Steve Jobs](#) famously rehearsed his keynotes for [weeks](#), and the consensus from communication researchers is that great presentations are ["not about slides, they\'re about the thinking behind the slides"](#).',
		logo: Assets.CorePresentation,
		name: 'Presentation',
		category: 'core'
	}),
	defineSkill({
		slug: 'team-leadership',
		color: 'orange',
		description: 'Game development teams are among the most [cross-functional](#) in any industry — a single project brings together [artists](#), [programmers](#), [designers](#), [QA testers](#), [audio engineers](#), [producers](#), and often [external partners](#), each with different workflows, vocabularies, and definitions of "done". [Team leadership](#) in this environment is not about authority — it is about [clarity](#), [trust](#), and [removing the things that slow people down](#).\n\n[Google\'s Project Aristotle](#) (a multi-year study of [180 teams](#)) found that [psychological safety](#) — the belief that team members can speak up without fear of humiliation or punishment — is the [single most important factor](#) in team effectiveness, more than individual talent or team composition. Building this environment is the primary job of a producer-leader.\n\nKey leadership practices include:\n- **[Goal clarity](#)** — every team member should be able to articulate what they are building, why it matters, and what "done" looks like in the current sprint\n- **[1-on-1 check-ins](#)** — regular (weekly or bi-weekly) individual conversations focused on blockers, career growth, and wellbeing — not status updates\n- **[Blocker removal](#)** — the producer\'s highest-priority daily task: clearing anything that stops the team from making progress (ambiguous requirements, missing assets, unclear dependencies, tooling failures)\n- **[Conflict resolution](#)** — addressing interpersonal or creative tension early, before it affects delivery or team morale, using [interest-based negotiation](#) rather than positional arguing\n- **[Onboarding structure](#)** — new team members who ramp up quickly multiply team capacity; clear onboarding documentation, buddy systems, and a [30-60-90 day plan](#) make this happen\n\nFun fact: [Valve\'s "Flatland"](#) structure (no managers, self-organising teams) and [Bungie\'s discipline-lead model](#) represent opposite ends of the leadership philosophy spectrum — and both have shipped iconic games. The lesson: great team leadership adapts to the team, the project, and the moment.',
		logo: Assets.CoreTeamLeadership,
		name: 'Team Leadership',
		category: 'core'
	}),
	defineSkill({
		slug: 'production-pipeline',
		color: 'green',
		description: 'If it is not written down, it did not happen. [Project documentation](#) is the connective tissue of a production — the collection of structured artefacts that capture decisions, define responsibilities, communicate status, and preserve institutional knowledge across a project\'s full lifecycle.\n\nThe importance of good documentation is backed by data: the [Project Management Institute](#) estimates that [poor communication](#) (of which missing or unclear documentation is a primary driver) accounts for [one-third of all project failures](#). In game development specifically, documentation becomes critical as team size grows — verbal agreements in a 5-person jam become liabilities in a 50-person studio.\n\nCore documentation artefacts include:\n- **[Project Charter](#)** — the founding document defining scope, objectives, stakeholders, and success criteria; signed off before a single task begins\n- **[RACI Matrix](#)** — maps every deliverable to a [Responsible](#), [Accountable](#), [Consulted](#), and [Informed](#) party, eliminating the "I thought you were handling that" failure mode\n- **[Game Design Document (GDD)](#)** — evolves from vision to technical specification across pre-production and production; version control is essential\n- **[RAG Status Reports](#)** — regular, templated communication showing [Red/Amber/Green](#) health across schedule, scope, quality, and risk\n- **[Change Log](#)** — every scope change, decision reversal, or requirement update is recorded with a rationale, owner, and date — making the audit trail clear when post-mortems are conducted\n- **[Post-mortem Reports](#)** — candid retrospective documents following a milestone or project completion; studios like [Bungie](#), [Insomniac](#), and [Riot Games](#) publish theirs publicly on [GDC Vault](#) as a contribution to the industry\n\nGood documentation reduces [onboarding time](#), prevents [knowledge loss](#) when team members leave, and ensures [distributed teams](#) across timezones stay aligned on the same source of truth. The best documentation is [concise, searchable, and maintained](#) — not a 200-page document no-one reads.',
		logo: Assets.CoreProductionPipeline,
		name: 'Project Documentation',
		category: 'core'
	}),
	defineSkill({
		slug: 'qa-testing',
		color: 'green',
		description: '[Quality Assurance (QA)](#) is the systematic process of verifying that a product meets defined standards before it reaches players. In games, QA is not just bug hunting — it is a [quality management philosophy](#) that, when embedded correctly, shapes development decisions from [pre-production](#) through to [post-launch patch cycles](#).\n\nThe discipline traces its roots to [W. Edwards Deming](#) and [Joseph Juran](#), whose [Total Quality Management (TQM)](#) principles transformed [Japanese manufacturing](#) in the [1950s](#) — the same thinking now underpins [ISO 25010](#) (the international standard for software product quality) and the [ISTQB certification](#) held by professional testers worldwide.\n\nCore QA practices in game production:\n- **[Test Planning](#)** — defining what will be tested, how, by whom, and to what standard, before testing begins; aligned to the project\'s [Definition of Done](#)\n- **[Test Types](#)** — [functional testing](#) (does it work?), [regression testing](#) (does it still work after a change?), [performance testing](#) (frame rate, load time, memory), [platform certification testing](#) (TRC/TCR compliance for [PlayStation](#), [Xbox](#), [Nintendo](#)), and [localisation testing](#)\n- **[Defect Triage](#)** — reviewing reported bugs, assigning [severity](#) (Critical/Major/Minor/Trivial) and [priority](#), routing to the right discipline, and tracking to resolution in a system like [Jira](#) or [Hansoft](#)\n- **[Release Gates](#)** — pre-agreed quality criteria (e.g., [zero Critical bugs](#), [frame rate ≥ 30FPS on target hardware](#)) that a build must pass before advancing to the next milestone\n- **[Exploratory Testing](#)** — unscripted sessions where experienced testers probe the game with creativity and player intuition, often catching edge cases that scripted test plans miss\n\nIn practice, this means owning QA planning end-to-end — building test strategies, managing defect triage workflows, and gating releases against clear criteria. Fun fact: [Red Dead Redemption 2](#) reportedly required [over 1,600 testers](#) during its final test phase, and even then [thousands of bugs](#) were fixed in the month before launch — a reminder that QA is a process, not a guarantee.',
		logo: Assets.CoreTesting,
		name: 'Quality Assurance',
		category: 'core'
	}),
	defineSkill({
		slug: 'cpp',
		color: 'blue',
		description: '[C++](#) (pronounced "C plus plus") is a high-level, general-purpose programming language created by Danish computer scientist [Bjarne Stroustrup](#) at [Bell Labs](#). First released in [1985](#) as an extension of [C](#), it has expanded significantly over time; as of [1997](#), C++ has object-oriented, generic, and functional features, in addition to facilities for low-level memory manipulation.\n\nFun fact: C++ was originally named ["C with Classes"](#) in [1979](#)! The name C++ was coined in [1983](#), with ["++"](#) being the increment operator in C, suggesting it\'s an enhanced version of C:\n\n```cpp\nint c = 5;\nc++;  // Now c is 6, hence C++ is "better" than C!\n```\n\nIt is almost always implemented as a compiled language, and many vendors provide C++ compilers, including [GCC](#), [LLVM/Clang](#), [Microsoft Visual C++](#), [Intel](#), and [IBM](#). The latest standard, [C++23](#), was approved in [2023](#).\n\n[C++](#) powers some of the world\'s most performance-critical software including [Adobe Photoshop](#), [MySQL](#), [MongoDB](#), and most [AAA game engines](#) like [Unreal Engine](#). Here\'s a taste of modern [C++20](#):\n\n```cpp\n#include <iostream>\n#include <ranges>\n\nauto main() -> int {\n    auto numbers = std::views::iota(1, 11) \n                 | std::views::filter([](int n) { return n % 2 == 0; });\n    for (int n : numbers) std::cout << n << " ";\n}\n```\n\nIt\'s fascinating that despite being over [35 years old](#), C++ remains one of the [top 5 most popular programming languages](#), proving that raw performance and control still matter in modern computing.',
		logo: Assets.Cpp,
		name: 'C++',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'csharp',
		color: 'purple',
		description: '[C#](#) (pronounced "See sharp") is a general-purpose, high-level programming language supporting multiple paradigms. C# encompasses static typing, strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented (class-based), and component-oriented programming disciplines. Designed by [Anders Hejlsberg](#) (who also created [Turbo Pascal](#) and led the [TypeScript](#) project) from [Microsoft](#) in [2000](#) and later approved as an international standard by [Ecma (ECMA-334)](#) in [2002](#) and [ISO/IEC (ISO/IEC 23270)](#) in [2003](#).\n\n[Microsoft](#) introduced C# along with [.NET Framework](#) and [Visual Studio](#), both of which were initially closed-source. Four years later, in [2004](#), a free and open-source project called [Mono](#) began, providing a cross-platform compiler. A decade later, Microsoft released [Visual Studio Code](#), [Roslyn](#) (compiler), and the unified [.NET platform](#), all supporting C# as free, open-source, and cross-platform tools.\n\nFun fact: The ["#"](#) in C# represents four ["+"](#) symbols in a 2x2 grid, suggesting C# is ["C++++"](#)! Here\'s some modern C# with top-level statements:\n\n```csharp\nvar numbers = Enumerable.Range(1, 100)\n    .Where(n => n % 2 == 0)\n    .Select(n => n * n);\n\nforeach (var num in numbers.Take(5))\n    Console.WriteLine($"Square: {num}");\n```\n\nAs of [2024](#), [C# 12.0](#) is the latest version released with [.NET 8.0](#). C# is the primary language for [Unity](#) game development, with over [60% of games on Steam](#) built using Unity and C#!',
		logo: Assets.Csharp,
		name: 'C#',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'glsl',
		color: 'green',
		description: '[GLSL](#) ([OpenGL Shading Language](#), pronounced "gee-el-es-el" or sometimes "glissle") is a high-level shading language with a syntax based on the [C programming language](#). It was created by the [OpenGL ARB](#) ([OpenGL Architecture Review Board](#)) to give developers more direct control of the graphics pipeline without having to use [ARB assembly language](#) or hardware-specific languages. Released in [2004](#) with [OpenGL 2.0](#), GLSL revolutionized real-time graphics programming.\n\nHere\'s what makes GLSL powerful: it runs directly on your [GPU](#), meaning these programs (called ["shaders"](#)) execute in parallel across thousands of cores simultaneously - that\'s why your games can render millions of pixels at [60+ FPS](#)! GLSL shaders come in different types: [vertex shaders](#) (process each vertex), [fragment shaders](#) (process each pixel), [geometry shaders](#) (create new geometry on the fly), [tessellation shaders](#), and [compute shaders](#) (general-purpose GPU computing).\n\nHere\'s a simple fragment shader creating a gradient:\n\n```glsl\n#version 330 core\nout vec4 FragColor;\nin vec2 TexCoord;\n\nvoid main() {\n    // Create a colorful gradient based on position\n    vec3 color = vec3(\n        TexCoord.x,              // Red increases left to right\n        TexCoord.y,              // Green increases bottom to top\n        0.5 + 0.5 * sin(TexCoord.x * 10.0) // Blue waves\n    );\n    FragColor = vec4(color, 1.0);\n}\n```\n\nThey\'re used to create advanced lighting effects (realistic [shadows](#), [reflections](#), [ambient occlusion](#)), complex materials ([subsurface scattering](#) for skin, [anisotropic surfaces](#) like brushed metal), post-processing effects ([bloom](#), [motion blur](#), [depth of field](#)), and procedural textures (noise, patterns generated mathematically). Fun fact: [ShaderToy](#), a website where people share GLSL shaders, has some mind-blowing creations - entire [3D scenes](#), [ray-traced graphics](#), and simulations running in just fragment shaders! GLSL is cross-platform and the foundation of real-time graphics on desktop and mobile.',
		logo: Assets.OpenGL,
		name: 'GLSL',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'lua',
		color: 'blue',
		description: '[Lua](#) ([/ˈluːə/ LOO-ə](#), from Portuguese: [lua](#) meaning ["moon"](#)) is a lightweight, high-level, multi-paradigm programming language designed primarily for embedded use in applications. Lua is cross-platform since the interpreter of compiled bytecode is written in [ANSI C](#), and Lua has a relatively simple [C API](#) to embed it into applications.\n\nCreated in [1993](#) by [Roberto Ierusalimschy](#), [Luiz Henrique de Figueiredo](#), and [Waldemar Celes](#) at the [Pontifical Catholic University of Rio de Janeiro](#) in [Brazil](#). Fun origin story: Lua was created due to Brazil\'s strict [trade barriers for computer hardware and software](#) in the [early 1990s](#), forcing developers to create their own solutions! The language was influenced by [SOL](#) ([Simple Object Language](#)) and [DEL](#) ([data-entry language](#)).\n\nHere\'s Lua\'s elegant table syntax and metatable magic:\n\n```lua\n-- Tables are the only data structure\nlocal player = {\n    name = "Hero",\n    health = 100,\n    attack = function(self, target)\n        print(self.name .. " attacks " .. target)\n    end\n}\n\n-- Metatables enable powerful metaprogramming\nlocal mt = {\n    __index = function(t, k)\n        return "Unknown property: " .. k\n    end\n}\nsetmetatable(player, mt)\n```\n\nLua is remarkably small - the entire interpreter is only about [280KB](#)! Despite its tiny size, Lua powers massive games: [World of Warcraft](#) uses Lua for all its [UI and add-ons](#) ([millions of lines of Lua code](#)!), [Roblox](#) uses [Luau](#) (their Lua variant) with over [70 million games](#) created, [Angry Birds](#), [CryEngine](#), [Garry\'s Mod](#), and countless others. Fun fact: Lua\'s indexing starts at [1, not 0](#) like most languages - this quirk drives programmers nuts but makes sense for non-programmers! [Lua 5.4](#) is the latest version ([2020](#)). It\'s one of the [fastest interpreted languages](#), perfect for game scripting where performance matters!',
		logo: Assets.Lua,
		name: 'Lua',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'python',
		color: 'yellow',
		description: '[Python](#) is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation, famously described in ["The Zen of Python"](#) - try typing ["import this"](#) in a Python interpreter! Python is dynamically typed and garbage-collected. It supports multiple programming paradigms, including structured, object-oriented, and functional programming.\n\nCreated by [Guido van Rossum](#) (who was named ["Benevolent Dictator for Life"](#) until he stepped down in [2018](#)) and first released in [1991](#), Python was named after the British comedy series ["Monty Python\'s Flying Circus"](#), not the snake! Python has consistently ranked as one of the [top 3 most popular programming languages](#) since [2018](#).\n\nHere\'s the beauty of Python\'s readability:\n\n```python\n# List comprehension - elegant and powerful\nsquares = [x**2 for x in range(10) if x % 2 == 0]\n\n# Decorators - metaprogramming made simple\n@timer\ndef process_data(data):\n    return [x * 2 for x in data]\n```\n\nFun fact: [Python 2](#) was officially discontinued on [January 1, 2020](#), after [19 years](#) of development. [Python 3.13](#) is the latest version as of [2024](#). Python powers [Instagram](#), [Spotify](#), [Netflix](#), and is [NASA\'s](#) choice for data analysis. It\'s the [#1 language for machine learning and AI](#), with frameworks like [TensorFlow](#), [PyTorch](#), and [scikit-learn](#). Python\'s mascot is a blue and yellow snake, and Python programmers are affectionately called ["Pythonistas"](#)!',
		logo: Assets.Python,
		name: 'Python',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'unity',
		color: 'cyan',
		description: '[Unity](#) is a cross-platform game engine developed by [Unity Technologies](#), first announced and released in [June 2005](#) at [Apple\'s Worldwide Developers Conference](#) as a [Mac OS X](#) game engine. The engine can be used to create three-dimensional ([3D](#)) and two-dimensional ([2D](#)) games, as well as interactive simulations and other experiences.\n\nFun fact: Unity was originally built to make game development accessible to everyone - ["democratizing game development"](#) has been their motto since day one!\n\nUnity supports over [25 platforms](#) including mobile ([iOS](#), [Android](#)), desktop ([Windows](#), [macOS](#), [Linux](#)), consoles ([PlayStation](#), [Xbox](#), [Nintendo Switch](#]), [VR/AR](#) devices, and web platforms. It uses [C#](#) as its primary scripting language (originally also supported [JavaScript](#) and [Boo](#), but those were discontinued). [Unity 6](#) is the latest version as of [2024](#).\n\nSome mind-blowing stats: Over [50% of all games](#) are made with Unity, that\'s over [3.5 billion devices](#) running Unity-made content! Games like [Pokémon GO](#), [Cuphead](#), [Hollow Knight](#), [Among Us](#), and [Genshin Impact](#) were all built with Unity. The iconic Unity splash screen has been seen by billions of players worldwide, making it one of the most recognized logos in gaming!',
		logo: Assets.Unity,
		name: 'Unity3D',
		category: 'framework'
	}),
	defineSkill({
		slug: 'unreal',
		color: 'purple',
		description: '[Unreal Engine](#) is a 3D computer graphics game engine developed by [Epic Games](#), first showcased in the [1998](#) first-person shooter game [Unreal](#) - fun fact: the game literally ran the engine\'s tech demo! Written in [C++](#) by [Tim Sweeney](#) (Epic\'s founder and CEO), it has powered some of gaming\'s most iconic titles. Although initially developed for [PC first-person shooters](#), it has been used in platformers, fighting games, MMORPGs, and basically every genre imaginable.\n\nHere\'s something wild: Unreal Engine isn\'t just for games anymore - it\'s used in [film production](#) ([The Mandalorian\'s](#) virtual sets), [automotive design](#), [architecture](#), and even [NASA simulations](#)! [Unreal Engine 5](#), released in [2022](#), introduced revolutionary features like [Nanite](#) (virtualized geometry) and [Lumen](#) (dynamic global illumination) that can handle billions of polygons in real-time.\n\nThe engine\'s [Blueprint visual scripting](#) system allows non-programmers to create complex gameplay, and its [photorealistic graphics](#) capabilities are unmatched. [Fortnite](#), which generates billions in revenue, is built on Unreal Engine 5. The engine is now free to use with a [5% royalty](#) on gross revenue after [$1 million](#) - quite generous for such powerful tech!',
		logo: Assets.Unreal,
		name: 'Unreal Engine',
		category: 'framework'
	}),
	defineSkill({
		slug: 'git',
		color: 'orange',
		description: '[Git](#) is a distributed version control system that tracks changes in any set of computer files, usually used for coordinating work among programmers collaboratively developing source code during software development. Created by [Linus Torvalds](#) in [2005](#) (yes, the same guy who created [Linux](#)!) for development of the [Linux kernel](#), Git was born out of necessity and controversy.\n\nFun story: The Linux kernel team was using [BitKeeper](#) (proprietary software) until the company revoked the free license. Frustrated, Linus spent just [two weeks](#) creating Git from scratch, which has since become the most popular version control system in the world - talk about productive frustration! Git is free and open-source software. Its goals include speed, data integrity, and support for distributed, non-linear workflows (thousands of parallel branches). The name ["Git"](#) is British slang for "unpleasant person" - Linus joked that he names all his projects after himself!\n\nHere\'s a mind-blowing stat: Over [100 million developers](#) use Git, and [GitHub](#) (launched [2008](#)) hosts over [420 million repositories](#). Popular platforms like [GitLab](#) and [Bitbucket](#) are built around Git. Git has become so ubiquitous that ["commit"](#), ["push"](#), ["pull"](#), and ["merge"](#) have become part of developers\' daily vocabulary. Fun fact: The Git logo is a red diamond with white corners, representing a distributed network!',
		logo: Assets.Git,
		name: 'Git',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'jira',
		color: 'blue',
		description: '[Jira](#) ([/ˈdʒiːrə/ JEE-rə](#)) is a proprietary issue tracking product developed by [Atlassian](#) that allows bug tracking and agile project management. Originally released in [2002](#) by [Atlassian](#) (an [Australian software company](#) founded by [Mike Cannon-Brookes](#) and [Scott Farquhar](#), now worth over [$40 billion](#)), Jira has evolved from a simple bug-tracking tool into a comprehensive project management platform used by over [100,000 organizations](#) worldwide.\n\nFun fact: ["Jira"](#) is a truncation of ["Gojira"](#), the [Japanese name for Godzilla](#) - a reference to its competitor [Bugzilla](#)! The founders chose it because they wanted something catchy and memorable. Jira supports [Scrum](#) (with [sprint planning](#), [backlogs](#), [burndown charts](#)), [Kanban](#) ([visual boards](#), [WIP limits](#)), and mixed methodologies, offering features like [customizable workflows](#) (from simple to incredibly complex [multi-step approvals](#)), [real-time reporting and dashboards](#), [time tracking](#), and extensive integration with development tools like [GitHub](#), [Bitbucket](#), [Confluence](#), and [Slack](#).\n\nJira has become so ubiquitous in software development that ["create a Jira ticket"](#) has become standard workplace vocabulary. The platform offers different products: [Jira Software](#) (for dev teams), [Jira Service Management](#) (for IT/support), and [Jira Work Management](#) (for business teams). Love it or hate it, Jira is everywhere - it\'s used by [NASA](#), [Twitter](#), [Spotify](#), [eBay](#), and millions of teams managing billions of issues. [Jira Cloud](#) processes over [500,000 requests per second](#)!',
		logo: Assets.Jira,
		name: 'JIRA',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'maya',
		color: 'teal',
		description: '[Autodesk Maya](#) is a 3D computer graphics application that runs on [Windows](#), [macOS](#), and [Linux](#). Originally developed by [Alias Systems Corporation](#) (founded by former [Wavefront](#) engineers) and currently owned and developed by [Autodesk](#) since [2006](#) for [$182 million](#), Maya is used to create assets for interactive 3D applications (including video games), animated films, TV series, and visual effects.\n\nFun origin: Maya was initially called ["Maya: The Collaborative 3D Production System"](#) and first released in [1998](#), combining features from Alias\'s previous software packages [PowerAnimator](#) and Wavefront\'s [Advanced Visualizer](#). The name ["Maya"](#) comes from the Sanskrit word meaning ["illusion"](#) - fitting for software that creates visual illusions! Maya has been used in virtually every major blockbuster film: [Avatar](#), [Transformers](#), [Spider-Man](#), [Lord of the Rings](#), [Game of Thrones](#), and countless others. It\'s the industry standard in Hollywood for character animation and visual effects.\n\nMaya offers comprehensive toolsets: [polygonal modeling](#), [NURBS surfaces](#), [subdivision surfaces](#), powerful character rigging with [HumanIK](#), keyframe and procedural animation, [particle systems](#), [hair and fur](#), [cloth simulation](#), [fluid dynamics](#), and [Arnold rendering](#) (acquired by Autodesk in [2017](#)). Maya\'s scripting through [MEL](#) (Maya Embedded Language) and [Python](#) allows infinite customization. Fun fact: Maya won an [Academy Award for Technical Achievement](#) in [2003](#)! Its node-based architecture makes it incredibly flexible. [Maya 2024](#) introduced [Bifrost](#) (procedural effects), [USD](#) support, and AI-enhanced tools.',
		logo: Assets.Maya,
		name: 'Maya',
		category: 'design'
	}),
	defineSkill({
		slug: '3dsmax',
		color: 'teal',
		description: '[Autodesk 3ds Max](#) (formerly [3D Studio](#) and [3D Studio Max](#)) is a professional 3D computer graphics program for making 3D animations, models, games, and images. The story begins in [1990](#) when [Gary Yost](#) founded the [Yost Group](#) and created [3D Studio for DOS](#) - yes, DOS! It ran on those old text-based computers and became hugely popular despite limited hardware. When [Windows 95](#) arrived, the Yost Group rewrote it as [3D Studio Max](#) in [1996](#). [Autodesk](#) acquired it in [1999](#) and rebranded it as [3ds Max](#). Developed and produced by [Autodesk Media and Entertainment](#), it has been an industry standard for game asset creation, architectural visualization, and visual effects for nearly [30 years](#).\n\n3ds Max features a robust [polygonal modeling](#) toolset ([Edit Poly](#) modifier is legendary), powerful rendering capabilities through [Arnold](#) (acquired by Autodesk), [V-Ray](#) (third-party but industry standard), comprehensive animation and rigging tools ([Character Animation Toolkit](#), [Biped](#), [CAT rigs](#]), and extensive plugin architecture (hundreds of plugins available). Fun fact: 3ds Max\'s [modifier stack](#) is one of its most powerful features - it allows non-destructive editing by stacking modifiers, and you can animate any parameter!\n\n3ds Max is particularly dominant in game development (used for [Gears of War](#), [Mass Effect](#), countless [AAA titles](#)), [architecture and product visualization](#) (arch-viz artists swear by it), and was heavily used in films like [Avatar](#) and [Iron Man](#). Its scripting language [MaxScript](#) allows infinite customization. [3ds Max 2024](#) introduced [Retopology Tools](#) and improved [USD](#) support!',
		logo: Assets.ThreeDSMax,
		name: '3DS Max',
		category: 'design'
	}),
	defineSkill({
		slug: 'substance',
		color: 'orange',
		description: '[Substance 3D Painter](#) is a 3D painting software developed by [Adobe](#) (acquired from [Allegorithmic](#) in [2019](#) for a rumored [$100+ million](#)). It allows users to texture and add materials directly to 3D meshes in real-time, with features like [particle brushes](#) (you can literally paint rust, dirt, or scratches with particles!), [smart materials](#) that adapt to your mesh, and [physically-based rendering](#) preview. Released in [2014](#), Substance Painter solved one of 3D art\'s biggest pain points - [UV painting](#) was a nightmare before this!\n\nFun fact: Before Substance, artists painted textures in [Photoshop](#) while constantly switching back to their 3D software to see results - Substance revolutionized this by painting directly on 3D models! The software introduced the [PBR](#) (Physically Based Rendering) workflow that became the industry standard, used in games like [Call of Duty](#), [Assassin\'s Creed](#), and film productions like [Blade Runner 2049](#).\n\nSubstance Painter\'s [procedural layer system](#) and powerful masking allow creating [photorealistic textures](#) with weathering, wear, and aging effects. It integrates seamlessly with [Blender](#), [Maya](#), [3ds Max](#), [Unity](#), and [Unreal Engine](#). [Substance Designer](#), its sibling software, can create [tileable procedural materials](#) used across the entire game industry. The Substance ecosystem has become so essential that it\'s taught in almost every game art program worldwide. [Version 9.0](#) ([2024](#)) added [AI-powered texture generation](#)!',
		logo: Assets.Substance,
		name: 'Substance Painter',
		category: 'design'
	}),
	defineSkill({
		slug: 'photoshop',
		color: 'blue',
		description: '[Adobe Photoshop](#) is a raster graphics editor developed and published by [Adobe Inc](#). Originally created in [1987](#) by [Thomas and John Knoll](#) (two brothers, one a PhD student and one an [Industrial Light & Magic](#) employee), Photoshop has become SO ubiquitous that ["photoshop"](#) is now a verb in the dictionary! The Knoll brothers sold the license to Adobe in [1988](#) for... drumroll... they didn\'t actually sell it - they licensed it, and Thomas still works at Adobe today! [Photoshop 1.0](#) was released in [1990](#) exclusively for [Macintosh](#) and cost [$895](#). Fun fact: The original file size was only [800KB](#) - today\'s Photoshop is over [2GB](#)!\n\nThe software is used for photo editing, compositing, digital painting, graphic design, and animation. It supports multiple image formats, features [layers and masks](#) (introduced in [version 3.0](#) and revolutionized non-destructive editing), offers extensive selection and transformation tools, and includes powerful filters and effects.\n\nModern features like [Content-Aware Fill](#) (which seems like magic), [Neural Filters](#) powered by AI, [Generative Fill](#) (AI image generation right in Photoshop!), and a comprehensive brush engine make it indispensable. Photoshop has over [90% market share](#) in professional image editing. Here\'s a wild stat: Over [30 billion images](#) are processed in Photoshop annually. It\'s the weapon of choice for photographers, graphic designers, web designers, game artists, meme creators, and digital artists worldwide!',
		logo: Assets.Photoshop,
		name: 'Photoshop',
		category: 'design'
	}),
	defineSkill({
		slug: 'illustrator',
		color: 'orange',
		description: '[Adobe Illustrator](#) is a vector graphics editor and design program developed and marketed by [Adobe Inc](#). Originally designed for the [Apple Macintosh](#) in [1987](#) (making it older than Photoshop!), Illustrator was one of the first programs to use [Bézier curves](#) for drawing - a mathematical formula that creates smooth, scalable curves. Here\'s what makes vectors revolutionary: unlike [raster images](#) (pixels) that get blurry when enlarged, [vector graphics](#) stay perfectly sharp at any size - from business card to billboard! This makes Illustrator ideal for logos, icons, typography, illustrations, and any graphics that need to scale.\n\nIllustrator has become THE industry standard for creating logos - [Apple](#), [Nike](#), [Twitter](#), practically every major brand logo was designed in Illustrator. The software features powerful drawing tools ([Pen tool](#) is legendary but has a learning curve!), advanced typography with complete control over [kerning](#), [tracking](#), and font manipulation, seamless integration with other [Adobe Creative Cloud](#) apps (especially [Photoshop](#) and [InDesign](#)), and support for [multiple artboards](#) (work on multiple designs simultaneously).\n\nFun fact: The ["ai" file format](#) (native Illustrator format) has become an industry standard exchanged between designers and clients. [Illustrator CC 2024](#) introduced [Generative Recolor](#) (AI-powered color variations), [3D effects](#) improvements, and enhanced web support with [SVG export](#). With over [10 million users](#) worldwide, if you see professional graphics, logos, or illustrations, there\'s a high chance they were created in Illustrator!',
		logo: Assets.Illustrator,
		name: 'Illustrator',
		category: 'design'
	}),
	defineSkill({
		slug: 'premiere',
		color: 'purple',
		description: '[Adobe Premiere Pro](#) is a timeline-based video editing software application developed by [Adobe Inc](#). and published as part of the [Adobe Creative Cloud](#). Fun history: [Premiere 1.0](#) was first launched in [1991](#) (originally called ["Adobe Premiere"](#)) exclusively for [Mac](#), making it one of the first [non-linear editing (NLE)](#) systems on personal computers - before this, video editing required expensive dedicated hardware! The ["Pro"](#) was added in [2003](#) when Adobe split it into consumer ([Premiere Elements](#)) and professional ([Premiere Pro](#)) versions. Premiere Pro has become one of the most widely used video editing software in film, television, [YouTube](#), and web video production industries.\n\nIt offers comprehensive video editing tools including [multi-camera editing](#) (sync and switch between multiple camera angles), [Lumetri Color](#) for professional color grading, audio editing with [Essential Sound panel](#), support for high-resolution formats including [4K](#), [6K](#), [8K](#), and even higher, [VR editing](#) capabilities (edit 360-degree video!), and extensive plugin support through Adobe and third-party developers.\n\nHere\'s impressive: Premiere Pro\'s tight integration with other Adobe applications (especially [After Effects](#) through [Dynamic Link](#), [Photoshop](#), and [Audition](#)) creates a powerful production workflow. Fun fact: [Deadpool](#), [Gone Girl](#), [The Social Network](#), and most [YouTube creators](#) edit in Premiere Pro! The software has evolved dramatically: [Premiere Pro 2024](#) added AI-powered features like [Auto Reframe](#) (automatically reformat videos for different aspect ratios), [Speech to Text](#) (automatic captions), and [Remix tool](#) (automatically adjust music to match your video length). With over [90% of video professionals](#) using it, Premiere Pro is practically synonymous with video editing!',
		logo: Assets.Premiere,
		name: 'Premiere Pro',
		category: 'design'
	}),
	defineSkill({
		slug: 'aftereffects',
		color: 'purple',
		description: '[Adobe After Effects](#) is a digital visual effects, motion graphics, and compositing application developed by [Adobe Inc](#). First released in [1993](#) by the [Company of Science and Art (CoSA)](#), After Effects was one of the first professional motion graphics applications for personal computers. Adobe acquired it in [1994](#) for [$4.6 million](#) - arguably one of Adobe\'s best investments ever!\n\nAfter Effects is used in post-production processes for film, television, video games, and web content creation. It allows users to create [motion graphics](#), [visual effects](#), [compositing](#) (combining multiple images/videos), [keying](#) (green screen removal), [tracking](#) (following movement), [rotoscoping](#) (frame-by-frame isolation), and animation.\n\nHere\'s what makes After Effects special: its [layer-based compositing workflow](#) is similar to Photoshop but with a timeline, making it familiar yet incredibly powerful. The software features an extensive effects library (hundreds of effects and presets!), [expression-driven animation](#) using [JavaScript](#) (automate complex animations mathematically!), [3D composition](#) capabilities, integration with [Cinema 4D Lite](#) (included!), and the [Plugin ecosystem](#) is MASSIVE - plugins like [Trapcode Suite](#), [Element 3D](#), and [Red Giant](#) create Hollywood-quality effects.\n\nFun fact: After Effects is behind most of the motion graphics you see daily - [YouTube intros](#), [TV commercials](#), [title sequences](#), [social media graphics](#). Popular tutorials on YouTube have taught millions of self-taught motion designers. [After Effects 2024](#) introduced AI-powered features and improved performance. It\'s become essential that ["AE"](#) is universally understood in the creative industry!',
		logo: Assets.AfterEffects,
		name: 'After Effects',
		category: 'design'
	}),
	defineSkill({
		slug: 'html',
		color: 'orange',
		description: '[HTML](#) ([HyperText Markup Language](#)) is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as [Cascading Style Sheets (CSS)](#) and scripting languages such as [JavaScript](#). Originally developed by [Tim Berners-Lee](#) in [1991](#) at [CERN](#) (yes, the particle physics lab!), HTML was created to share documents between scientists. Fun fact: The first website ever created ([http://info.cern.ch](#)) is still online and is pure HTML - no CSS, no JavaScript, just simple hypertext!\n\nHTML defines the structure and content of web pages through elements and tags. The language has evolved dramatically: [HTML 1.0](#) ([1993](#)) had just [18 elements](#), [HTML5](#) ([2014](#)) introduced over [100 new elements](#) including semantic tags like [<article>](#), [<section>](#), and [<nav>](#), native multimedia support ([<audio>](#) and [<video>](#) tags - no more [Flash](#)!), [<canvas>](#) for drawing graphics, new form controls ([date pickers](#), [color pickers](#)), and APIs for [offline storage](#), [geolocation](#), and [drag-and-drop](#).\n\nHere\'s a simple HTML5 structure:\n\n```html\n<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>My First Page</title>\n</head>\n<body>\n    <header>\n        <h1>Welcome to the Web</h1>\n    </header>\n    <main>\n        <article>\n            <p>HTML is the backbone of every website!</p>\n        </article>\n    </main>\n</body>\n</html>\n```\n\nHere\'s mind-blowing: There are approximately [2 billion websites](#), and [100% of them](#) use HTML! HTML is celebrating over [30 years](#) as the backbone of the web. Fun trivia: The first image ever uploaded to the web was a compressed [JPEG](#) of the CERN house band ["Les Horribles Cernettes"](#) in [1992](#). HTML is so fundamental that it\'s often the first language aspiring developers learn!',
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description: '[Cascading Style Sheets (CSS)](#) is a style sheet language used for describing the presentation of a document written in [HTML](#) or [XML](#). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media. First proposed by [Håkon Wium Lie](#) (a Norwegian web pioneer) in [1994](#) while working at [CERN](#) with [Tim Berners-Lee](#), CSS was born from necessity - early websites mixed structure and styling in HTML, creating maintenance nightmares! [CSS1](#) was released in [1996](#), [CSS2](#) in [1998](#), and [CSS3](#) development began in [1999](#) but is still ongoing (CSS is now modular with independent specifications). Here\'s the fascinating part: The ["Cascading"](#) in CSS refers to the algorithm that determines which style rules apply when multiple rules target the same element - specificity wars are real!\n\n[CSS](#) enables the separation of content and presentation, including layout, colors, and fonts. [CSS3](#) introduced game-changing features: [animations and transitions](#) (no more JavaScript for simple animations!), [flexbox](#) (finally, vertical centering is easy!), [grid layout](#) (2D layouts without hacks!), [custom properties/variables](#) (--my-color: #ff0000), [media queries](#) for responsive design, and so much more.\n\nHere\'s modern CSS in action:\n\n```css\n/* Flexbox - vertical centering made easy! */\n.container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n/* CSS Grid - powerful 2D layouts */\n.grid {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 20px;\n}\n\n/* Custom properties and animations */\n:root {\n    --primary-color: #3b82f6;\n}\n\n.button {\n    background: var(--primary-color);\n    transition: transform 0.3s;\n}\n\n.button:hover {\n    transform: scale(1.1);\n}\n```\n\nFun fact: The ["float"](#) property was originally designed for wrapping text around images, but for years it was (ab)used for layouts until [flexbox](#) and [grid](#) saved us all! CSS has become incredibly powerful - you can create entire games, art, and animations purely with CSS. The website [csszengarden.com](#) demonstrates how the same HTML can look completely different with just CSS changes!',
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'latex',
		color: 'teal',
		description: '[LaTeX](#) ([/ˈlɑːtɛk/ LAH-tek](#) or [/ˈleɪtɛk/ LAY-tek](#)) is a high-quality document preparation system built on top of [TeX](#), the typesetting engine created by [Donald Knuth](#) at [Stanford](#) in [1978](#). LaTeX was developed by [Leslie Lamport](#) in the early [1980s](#) to make TeX easier to use by providing higher-level macros for common document structures. Unlike word processors such as Word where what you see is what you get, LaTeX separates content from formatting — you write plain text with markup commands, and LaTeX handles the typesetting automatically, producing output of exceptional typographic quality.\n\nLaTeX is the standard tool in academia and research for producing papers, theses, books, and presentations. It handles even the most complex content effortlessly: multi-line mathematical equations with perfect spacing, chemical formulas, musical notation, citations and bibliographies via [BibTeX](#) or [BibLaTeX](#), cross-references, tables of contents, and multi-language documents. Its equation rendering is unmatched — compare a Word equation to a LaTeX one and the difference is immediately obvious.\n\nFun fact: LaTeX is used by virtually all major academic journals and publishers, and millions of scientific papers are submitted in LaTeX format every year. It is free and open-source, with the [LaTeX Project](#) maintaining the system. Popular distributions include [TeX Live](#) and [MiKTeX](#), and writers often work in editors like [Overleaf](#) (cloud-based), [TeXstudio](#), or [VS Code](#) with the LaTeX Workshop extension.',
		logo: Assets.LaTeX,
		name: 'LaTeX',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'js',
		color: 'yellow',
		description: '[JavaScript (JS)](#) is a lightweight, interpreted (or just-in-time compiled) programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as [Node.js](#), [Apache CouchDB](#), and [Adobe Acrobat](#). JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.\n\nHere\'s a wild fact: JavaScript was created by [Brendan Eich](#) in just [10 days](#) in May [1995](#) while working at [Netscape](#)! Originally named ["Mocha"](#), then ["LiveScript"](#), it was renamed ["JavaScript"](#) as a marketing move to ride on Java\'s popularity, despite having almost nothing in common with Java.\n\nThat\'s impressive and all, but you know what\'s also impressive? Shooting yourself in the foot while writing some code with this language:\n\n```javascript\n\'11\' + 1;  // \'111\' - fair enough, string concatenation!\n\'11\' - 1;  // 10 - why???\n```\n\nJavaScript has evolved dramatically with modern frameworks like [React](#), [Vue](#), [Angular](#), [Svelte](#), and [Solid](#). The ecosystem has grown from simple DOM manipulation to full-stack development with [Node.js](#), mobile apps via [React Native](#), and desktop applications using [Electron](#). The [ECMAScript](#) standard ([ES2024](#) is the latest) continues to add powerful features like async/await, modules, optional chaining, and more.\n\nDespite its quirks and the infamous ["JavaScript fatigue"](#), it remains the most widely-used programming language, with [98% of websites](#) using it. Fun fact: [V8](#), Chrome\'s JavaScript engine, compiles JS to machine code for blazing-fast performance, and powers [Node.js](#), [Deno](#), and [Bun](#) runtimes!',
		logo: Assets.JavaScript,
		name: 'JavaScript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'blender',
		color: 'orange',
		description: '[Blender](#) is a free and open-source 3D computer graphics software tool set used for creating animated films, visual effects, art, 3D-printed models, motion graphics, interactive 3D applications, virtual reality, and computer games. Originally developed in [1995](#) by Dutch animation studio [NeoGeo](#) (not the gaming company!) as an in-house tool, Blender\'s story took a dramatic turn in [2002](#). When NeoGeo went bankrupt, the community rallied together and raised [€100,000](#) in just [seven weeks](#) to buy the rights and release it as open-source - one of the most successful crowdfunding campaigns before crowdfunding was even a thing!\n\nBlender features [modeling](#), [sculpting](#), [texturing](#), [rigging](#), [animation](#), [simulation](#) (fluid, smoke, particles), [rendering](#) ([Cycles](#) and [Eevee](#) real-time engine), [compositing](#), [motion tracking](#), and [video editing](#) - all in one package! Here\'s the kicker: Blender is completely [FREE](#), yet rivals [$3,000+ software](#) like [Maya](#) and [3ds Max](#).\n\nIt\'s used in major productions including [Spider-Man 2](#), [Next Gen](#) ([Netflix](#)), and [Man in the High Castle](#). [Blender 4.0](#) ([2023](#)) marked a milestone with [real-time compositing](#). The [Blender Foundation](#) produces stunning open movies like ["Spring"](#) and ["Coffee Run"](#) to showcase capabilities and fund development. With over [20 million downloads](#), Blender proves that quality software doesn\'t need a price tag!',
		logo: Assets.Blender,
		name: 'Blender',
		category: 'design'
	}),
	defineSkill({
		slug: 'zbrush',
		color: 'orange',
		description: '[ZBrush](#) is a digital sculpting tool that combines [3D/2.5D modeling](#), texturing, and painting. Developed by [Pixologic](#) (now part of [Maxon](#) since [2021](#)), ZBrush was first released in [1999](#) and revolutionized digital sculpting forever. Here\'s what makes ZBrush absolutely insane: it uses proprietary ["pixol"](#) technology that stores lighting, color, material, orientation, and depth information for rendered points, allowing artists to work with models containing [hundreds of millions of polygons](#) in real-time on standard hardware - something that would crash other 3D software instantly!\n\nZBrush was the first software to popularize digital sculpting, and its influence is so profound that ["ZBrushing"](#) has become a verb in the 3D art community. Fun fact: ZBrush started as a [2.5D painting program](#) before evolving into the 3D sculpting powerhouse it is today! Features like [DynaMesh](#) (dynamic tessellation), [ZRemesher](#) (automatic retopology), and countless specialized brushes make it unmatched for organic modeling.\n\nZBrush has been used to create characters and creatures for nearly every major film and AAA game in the last two decades - from [Gollum](#) in [Lord of the Rings](#) to every [Marvel superhero](#), from [God of War](#) to [The Last of Us](#). [ZBrush 2024](#) introduced new features with [AI-assisted sculpting](#) tools. Artists can sculpt models with over [1 billion polygons](#)!',
		logo: Assets.ZBrush,
		name: 'ZBrush',
		category: 'design'
	}),
	defineSkill({
		slug: 'houdini',
		color: 'orange',
		description: '[Houdini](#) is a 3D animation and visual effects software developed by [SideFX](#), based in [Toronto, Canada](#). First released in [1996](#), Houdini is built on a completely [procedural, node-based workflow](#) that distinguishes it from every other 3D software - and here\'s why that\'s revolutionary: change one parameter at the beginning of your workflow, and everything updates automatically! No more starting from scratch when clients request changes. This procedural approach, while having a steeper learning curve, provides unprecedented flexibility in creating and modifying complex effects and animations.\n\nHoudini is particularly renowned for its mind-blowing dynamics and simulation tools for creating [destruction](#) (buildings exploding, bridges collapsing), [fluids](#) (realistic water, lava, liquid simulations), [fire and smoke](#) ([FLIP fluids](#) and [Pyro FX](#)), [particles](#) (millions of them), and [cloth](#). Fun fact: Houdini is named after [Harry Houdini](#), the famous escape artist, because it helps VFX artists "escape" from difficult effects challenges!\n\nThe software features the [VEX scripting language](#) (similar to C) for creating custom tools and effects, [Houdini Engine](#) for integrating procedural workflows into [Maya](#), [3ds Max](#), [Unity](#), and [Unreal Engine](#), and [Solaris](#) for [USD-based](#) workflows. Houdini has been used in basically every major VFX film: [Frozen\'s](#) snow, [Moana\'s](#) ocean, [Dune\'s](#) sandworms, and [The Matrix Resurrections](#). The [Apprentice version](#) is free for non-commercial use! [Houdini 20](#) ([2024](#)) introduced new [machine learning](#) features and enhanced performance.',
		logo: Assets.Houdini,
		name: 'Houdini',
		category: 'design'
	}),
	defineSkill({
		slug: 'speedtree',
		color: 'green',
		description: '[SpeedTree](#) is a vegetation modeling and middleware software developed and sold by [Interactive Data Visualization, Inc. (IDV)](#), founded by [Chris King](#) and [Greg King](#). First released in [2002](#), SpeedTree solved one of game development\'s most tedious problems: creating realistic trees and vegetation. Before SpeedTree, artists had to model every tree by hand - imagine modeling a forest of [10,000 unique trees](#)! SpeedTree uses [procedural generation](#) to create trees, plants, and grass with realistic growth patterns, branching algorithms based on [real botany](#), [wind animation](#) (trees that realistically sway and react to wind!), and [seasonal variations](#) (watch your trees change from spring blooms to autumn colors).\n\nFun fact: The name ["SpeedTree"](#) comes from its original purpose - rapidly generating trees for real-time applications! The software features [hand-drawing tools](#) for artistic control, [photogrammetry import](#) (scan real trees!), [physics-based wind](#) effects with frequency and amplitude control, [LOD (Level of Detail)](#) generation for performance optimization, and models optimized for real-time rendering. SpeedTree integrates seamlessly with [Unity](#), [Unreal Engine](#), [CryEngine](#), [Lumberyard](#), and custom engines.\n\nHere\'s mind-blowing: SpeedTree has been used in [Avatar](#) (those alien trees!), [The Witcher 3](#), [Red Dead Redemption 2](#), [Horizon Zero Dawn](#), [God of War](#), and practically every major game with vegetation. It\'s also used in films like [The Jungle Book](#) and architectural visualizations. [SpeedTree Cinema](#) (for VFX) and [SpeedTree Games](#) handle different needs. The latest version includes [GPU-powered real-time wind simulation](#)!',
		logo: Assets.SpeedTree,
		name: 'SpeedTree',
		category: 'design'
	}),
	defineSkill({
		slug: 'visualstudio',
		color: 'purple',
		description: '[Microsoft Visual Studio](#) is an integrated development environment (IDE) from [Microsoft](#). First released in [1997](#) (as [Visual Studio 97](#)), it unified Microsoft\'s various development tools ([Visual Basic](#), [Visual C++](#), [Visual J++](#), [Visual FoxPro](#]) into a single environment - revolutionary at the time! Visual Studio supports development for various platforms including [Windows](#), web, mobile, cloud, [Xbox](#), and more. It includes powerful code editors, debuggers (with features like [Edit and Continue](#) - modify code while debugging!), visual designers for UI, database tools, and extensive profiling and diagnostic tools.\n\nVisual Studio features [IntelliSense](#) (Microsoft\'s intelligent code completion that debuted here in [1996](#)), advanced debugging ([breakpoints](#), [watch windows](#), [immediate window](#), [historical debugging with IntelliTrace](#)), built-in [Git](#) support, [extensions marketplace](#) with thousands of add-ons, and deep integration with [Azure](#) services. Fun fact: [Visual Studio 2022](#) was the first [64-bit version](#), meaning it can finally use more than [4GB of RAM](#) - huge for large solutions! It supports languages including [C++](#), [C#](#), [Visual Basic](#), [F#](#), [Python](#), [JavaScript](#), [TypeScript](#), and more.\n\nVisual Studio comes in different flavors: [Community](#) (free!), [Professional](#), and [Enterprise](#). The ["VS"](#) abbreviation is so iconic that Microsoft named their code editor [VS Code](#). Visual Studio has been the backbone of Windows development for over [25 years](#), used to create software from indie games to enterprise applications serving billions of users!',
		logo: Assets.VisualStudio,
		name: 'Visual Studio',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'vscode',
		color: 'blue',
		description: '[Visual Studio Code](#) is a free, open-source code editor developed by [Microsoft](#). Released in [2015](#) at Microsoft\'s [Build conference](#), VS Code went from zero to hero in record time, becoming the most popular developer tool within just [2 years](#)! Here\'s something surprising: Microsoft, historically known for proprietary software, made VS Code completely [open-source](#) ([MIT license](#)) and cross-platform from day one. Built on the [Electron framework](#) (also used by [Slack](#), [Discord](#), and [Atom](#)), it runs on [Windows](#), [macOS](#), and [Linux](#).\n\nVS Code features [IntelliSense](#) (smart code completion that actually feels intelligent), [debugging support](#) for dozens of languages, integrated [Git](#), syntax highlighting, customizable themes, and an integrated terminal. But here\'s where it gets crazy: VS Code\'s [extension marketplace](#) has over [50,000 extensions](#), and developers have downloaded them billions of times! The editor supports virtually every programming language through extensions and features [remote development](#) capabilities (code on a server from your laptop), [Live Share](#) for real-time collaboration (Google Docs for code!), and [GitHub Copilot](#) integration for AI-assisted coding.\n\nFun stats: Over [14 million developers](#) use VS Code monthly, making it the [#1 developer tool](#) in [Stack Overflow surveys](#) since [2018](#). The VS Code team ships updates [monthly](#) with new features. It\'s so lightweight you can run it on a [Raspberry Pi](#), yet powerful enough for enterprise development!',
		logo: Assets.VSCode,
		name: 'VS Code',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'rider',
		color: 'yellow',
		description: '[JetBrains Rider](#) is a cross-platform [.NET IDE](#) built on the [IntelliJ Platform](#) (the same platform powering [IntelliJ IDEA](#), [PyCharm](#), [WebStorm](#]) and [ReSharper](#) (JetBrains\' legendary [Visual Studio](#) extension). First released in [2017](#) after a [2-year](#) public preview, Rider brought JetBrains\' powerful code analysis and refactoring tools to a standalone .NET IDE. Here\'s what makes Rider special: it combines the best of both worlds - IntelliJ Platform\'s robust IDE features with ReSharper\'s deep .NET code analysis (over [2500+ code inspections](#)!). Rider supports [.NET Framework](#), [.NET Core](#), [Xamarin](#), [Unity](#) (with dedicated Unity support!), [ASP.NET](#), and more on [Windows](#), [macOS](#), and [Linux](#). Fun fact: Before Rider, .NET developers on Mac and Linux were severely limited - Rider changed that completely!\n\nThe IDE features advanced code analysis and quick-fixes (often suggesting fixes before you even realize there\'s a problem), powerful refactoring tools inherited from [ReSharper](#) ([rename](#), [extract method](#), [change signature](#) - all working flawlessly), a fast [debugger](#) with advanced features, built-in [Unity support](#) with debugging, profiling, and shader support, [SQL and database tools](#), [VCS integration](#) ([Git](#), [SVN](#), [Mercurial](#)), and extensive language support including [C#](#), [VB.NET](#), [F#](#), [JavaScript](#), [TypeScript](#), [HTML](#), [CSS](#), and more.\n\nPerformance-wise, Rider often outperforms [Visual Studio](#), especially with large solutions. Fun stat: [Unity](#) developers particularly love Rider - it\'s become the preferred IDE for Unity development. Rider\'s intelligent code completion and instant error detection make C# development feel effortless. The [2024 version](#) added [AI Assistant](#) and enhanced performance!',
		logo: Assets.Rider,
		name: 'Rider',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'comfyui',
		color: 'purple',
		description: '[ComfyUI](#) is a powerful and modular node-based interface for [Stable Diffusion](#) and other [AI image generation](#) models. Developed by an individual developer ([comfyanonymous](#)) and released as open-source in [2023](#), ComfyUI exploded in popularity in the AI art community because it provides something other UIs don\'t - complete control! It provides a [graph/nodes interface](#) (similar to [Blender\'s shader nodes](#) or [Houdini\'s networks](#]) for designing and executing advanced AI image generation workflows.\n\nHere\'s what makes ComfyUI revolutionary: Unlike traditional UIs like [AUTOMATIC1111](#) that hide the generation process, ComfyUI exposes every step - you can see and modify the [VAE encoding](#), [sampling process](#), [conditioning](#), [latent manipulation](#), everything! This level of control allows creating complex pipelines for [image generation](#), [img2img](#), [inpainting](#) (fill in parts of images), [outpainting](#) (extend images beyond borders), [controlNet](#) (guide generation with poses, edges, depth), [upscaling](#), and combining multiple models. ComfyUI supports various models including [Stable Diffusion 1.5](#), [SDXL](#), [SD3](#), [Cascade](#), [ControlNet](#), [LoRA](#), [embeddings](#), and custom models.\n\nFun fact: ComfyUI is highly optimized and can run faster than other interfaces while using less [VRAM](#) - it only loads what\'s needed! It supports [batch processing](#) (generate hundreds of variations automatically), allows saving and sharing workflows as [JSON files](#) (entire complex setups shared as one file!), and has a growing ecosystem of [custom nodes](#). The AI art community has embraced ComfyUI for its flexibility and power, creating workflows that push AI art to new limits!',
		logo: Assets.ComfyUI,
		name: 'ComfyUI',
		category: 'design'
	}),
	defineSkill({
		slug: 'renderdoc',
		color: 'green',
		description: '[RenderDoc](#) is a free, open-source graphics debugger developed by [Baldur Karlsson](#), a graphics programmer who started the project in [2013](#) because existing tools were either expensive, platform-specific, or lacking features. RenderDoc allows quick and easy single-frame capture and detailed introspection of any application using [Vulkan](#), [D3D11](#), [D3D12](#), [OpenGL](#), or [OpenGL ES](#). Here\'s what makes RenderDoc awesome: it\'s completely [FREE](#) (unlike some alternatives costing thousands), [cross-platform](#) ([Windows](#), [Linux](#), [Android](#)), and [open-source](#) (you can see exactly how it works!).\n\nRenderDoc is designed specifically for real-time applications like games, providing features that graphics programmers desperately need: [frame capture](#) (grab a single frame and examine every draw call), [shader debugging](#) (step through shader code line-by-line like debugging CPU code!), [resource inspection](#) (view every texture, buffer, and mesh), [pixel history](#) (see exactly which draw calls modified a specific pixel - invaluable for debugging visual bugs!), [performance counters](#) (GPU timing for every operation), and [timeline visualization](#) (see your entire frame execution).\n\nFun fact: RenderDoc has been used to debug and optimize some of the biggest games in the industry, helping developers squeeze out those extra [frames per second](#)! The tool works by injecting into your application and intercepting graphics API calls. [RenderDoc version 1.0](#) was released in [2019](#) after [6 years](#) of development, and it continues to evolve with new API support. It\'s become an essential tool for graphics programmers, technical artists, and anyone working on real-time 3D applications. Many [AAA studios](#) have RenderDoc in their standard toolset!',
		logo: Assets.RenderDoc,
		name: 'RenderDoc',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'office',
		color: 'blue',
		description: '[Microsoft Office](#) is a suite of productivity applications developed by [Microsoft](#). First introduced in [1988](#) (originally for [Mac](#)!), it revolutionized business productivity by bundling applications together. Fun history: The original Office bundle included [Word](#), [Excel](#), and [PowerPoint](#), and cost [$1,095](#) - buying them separately would have cost significantly more, making it a revolutionary bundle deal! Microsoft Office has become SO ubiquitous that over [1.2 billion people](#) use it worldwide - that\'s like [1 in 7 people](#) on Earth!\n\nThe suite includes [Word](#) (word processing - used for everything from school essays to legal contracts), [Excel](#) (spreadsheets - runs financial models for [Fortune 500](#) companies and also tracks your grocery budget), [PowerPoint](#) (presentations - over [500 million users](#) create [30 million presentations daily](#)!), [Outlook](#) (email and calendar - the backbone of corporate communication), [OneNote](#) (digital note-taking with handwriting, audio, and organizational features), [Access](#) (database management for business applications), and [Publisher](#) (desktop publishing for brochures and newsletters).\n\n[Microsoft 365](#) (the modern subscription service launched in [2011](#) as ["Office 365"](#)) provides cloud-based versions with [real-time collaboration](#) (multiple people editing simultaneously like [Google Docs](#)), cloud storage via [OneDrive](#), and regular updates with new AI features like [Copilot](#) (AI assistant integrated across Office apps). Fun fact: Excel is SO powerful that some companies run their entire business on Excel spreadsheets (for better or worse!). Office applications dominate with over [80% market share](#) in productivity software, taught in schools, required by employers, and essential for modern work!',
		logo: Assets.Office,
		name: 'Microsoft Office',
		category: 'devtools'
	})
] as const;

const SkillsData = {
	title,
	items
};

export default SkillsData;

