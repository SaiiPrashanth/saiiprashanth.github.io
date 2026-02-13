// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
	interface Window {
		gtag?: (
			command: 'config' | 'event' | 'js' | 'set',
			targetId: string | Date,
			config?: Record<string, any>
		) => void;
	}}

export {};

declare module '*.md' {
	const content: string;
	export default content;
}
