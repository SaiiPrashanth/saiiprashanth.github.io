import { base } from '$app/paths';

const url = (file: string) => `${base}/logos/Skills/${file}`;
const iconUrl = (file: string) => `${base}/logos/Icons/${file}`;
const orgUrl = (file: string) => `${base}/orgs/${file}`;

const asset = (lightFilename: string, darkFilename = lightFilename) => {
	return { light: url(lightFilename), dark: url(darkFilename) };
};

const iconAsset = (lightFilename: string, darkFilename = lightFilename) => {
	return { light: iconUrl(lightFilename), dark: iconUrl(darkFilename) };
};

const orgAsset = (filename: string) => {
	return { light: orgUrl(filename), dark: orgUrl(filename) };
};

const Assets = {
	AWS: asset('aws.svg'),
	Bootstrap: asset('bootstrap.svg'),
	C: asset('c.svg'),
	Cpp: asset('cpp.svg'),
	Celery: asset('celery.svg'),
	Django: asset('django.svg'),
	FastApi: asset('fastapi'),
	Flask: asset('flask.svg'),
	Go: asset('go.svg'),
	Kafka: asset('kafka.svg'),
	Neo4j: asset('neo4j.svg'),
	Nginx: asset('nginx.svg'),
	Numpy: asset('numpy.svg'),
	Pandas: asset('pandas.svg'),
	RabbitMQ: asset('rabbitmq.svg'),
	Rust: asset('rust.svg', 'rust-dark.png'),
	Scrapy: asset('scrapy.png'),
	Selenium: asset('selenium.svg'),
	Docker: asset('docker.svg'),
	Kubernetes: asset('kubernetes.svg'),
	Csharp: asset('csharp.svg'),
	Xamarin: asset('xamarin.svg'),
	TypeScript: asset('ts.png'),
	VueJs: asset('vue.png'),
	ReactJs: asset('react.svg'),
	Dart: asset('dart.png'),
	Kotlin: asset('kotlin.png'),
	Python: asset('python.png'),
	NodeJs: asset('node.png'),
	Deno: asset('deno.svg'),
	Svelte: asset('svelte.svg'),
	ExpressJs: asset('express.png'),
	JavaScript: asset('js.png'),
	Fastify: asset('fastify.svg', 'fastify-dark.png'),
	NestJs: asset('nest.svg'),
	Quasar: asset('quasar.svg'),
	SolidJs: asset('solid.svg'),
	Electron: asset('electron.png'),
	Flutter: asset('flutter.svg'),
	Java: asset('java.png'),
	AdonisJs: asset('adonis.png'),
	Android: asset('android.png'),
	Angular: asset('angular.png'),
	PostgreSQL: asset('postgres.png'),
	Firebase: asset('firebase.png'),
	Sass: asset('sass.png'),
	Unknown: asset('no-img.svg'),
	MongoDB: asset('mongodb.svg'),
	Redis: asset('redis.svg'),
	Tailwind: asset('tailwind.svg'),
	HTML: asset('html.svg'),
	Premiere: asset('premiere.svg'),
	Photoshop: asset('photoshop.svg'),
	CSS: asset('css.svg'),
	AfterEffects: asset('after-effects.svg'),
	Illustrator: asset('illustrator.svg'),
	Nuxt: asset('nuxt.png'),
	Vite: asset('vite.png'),
	Vitest: asset('vitest.svg'),
	Jest: asset('jest.png'),
	Unocss: asset('unocss.svg'),
	Ruvy: asset('ruvy.svg'),
	Postcss: asset('postcss.svg'),
	Lua: asset('lua.svg'),
	Unity: asset('Unity.svg', 'Unity_Dark.svg'),
	Unreal: asset('Unreal.svg', 'Unreal_Dark.svg'),
	Git: asset('git.svg'),
	Jira: asset('jira.svg'),
	Maya: asset('maya.svg'),
	ThreeDSMax: asset('3ds-max.svg'),
	Substance: asset('substance-painter.svg'),
	Blender: asset('Blender.svg'),
	ZBrush: asset('z-brush.svg', 'z-brush_Dark.svg'),
	Houdini: asset('Houdini3D.png'),
	OpenGL: asset('opengl.svg'),
	VisualStudio: asset('visual-studio.svg'),
	VSCode: asset('vscode.svg'),
	ComfyUI: asset('comfyui.svg'),
	SpeedTree: asset('Speedtree.svg', 'Speedtree_Dark.svg'),
	RenderDoc: asset('RenderDoc.svg'),
	Office: asset('office.svg'),
	Rider: asset('RIder.svg'),
	GitHub: iconAsset('GitHub.svg', 'GitHub_Dark.svg'),
	Itch: iconAsset('Itch.svg', 'Itch_Dark.svg'),
	Artstation: iconAsset('Artstation.svg'),
	JainUniversity: orgAsset('jain.webp'),
	AmritaVidyalayam: orgAsset('Amrita.webp'),
	MichiganStateUniversity: orgAsset('MSU.webp'),
	Google: orgAsset('google.webp'),
	Atlassian: orgAsset('Atlassian.webp'),
	Glowflo: orgAsset('Glowflo.webp'),
	Dnnovate: orgAsset('dnnovate.webp'),
	CapitalDynamics: orgAsset('CapitalDyna.webp'),
	ElectronicArts: orgAsset('EA.webp'),
	EpicGames: orgAsset('epic.webp'),
	NISM: orgAsset('nism.webp'),
	UnityTech: orgAsset('unity.webp')
};

export default Assets;
