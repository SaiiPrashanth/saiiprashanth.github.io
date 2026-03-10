import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import UnoCSS from 'unocss/vite';

export default defineConfig({
	plugins: [sveltekit(), UnoCSS()],
	build: {
		// Minification and compression
		minify: 'terser',
		terserOptions: {
			compress: {
				drop_console: true,
				passes: 2
			},
			format: {
				comments: false
			}
		},
		cssCodeSplit: true,
		rollupOptions: {
			output: {
				entryFileNames: 'assets/[name]-[hash].js',
				chunkFileNames: 'assets/[name]-[hash].js',
				assetFileNames: 'assets/[name]-[hash].[ext]',
				manualChunks: (id) => {
					if (id.includes('node_modules')) {
						if (id.includes('bits-ui') || id.includes('svelte-radix')) return 'ui-vendor';
						if (id.includes('@sveltejs') || id.includes('svelte')) return 'svelte-vendor';
						if (id.includes('embla-carousel')) return 'carousel-vendor';
						return 'vendor';
					}
				}
			}
		}
	}
});
