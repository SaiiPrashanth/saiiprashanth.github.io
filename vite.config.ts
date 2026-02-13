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
				drop_console: true, // Remove console.logs in production
				passes: 2
			},
			format: {
				comments: false // Remove comments
			}
		},
		// CSS code splitting per route
		cssCodeSplit: true,
		// Optimize chunk sizes
		rollupOptions: {
			output: {
				// Better caching with content-based hashes
				entryFileNames: 'assets/[name]-[hash].js',
				chunkFileNames: 'assets/[name]-[hash].js',
				assetFileNames: 'assets/[name]-[hash].[ext]'
			}
		}
	}
});
