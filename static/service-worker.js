const CACHE_NAME = 'saiiprashanth-portfolio-v3';
const STATIC_ASSETS = [
	'/manifest.json',
	'/Logo.png'
];

// Install event - cache only truly static assets (not HTML pages)
self.addEventListener('install', (event) => {
	event.waitUntil(
		caches.open(CACHE_NAME).then((cache) => {
			return cache.addAll(STATIC_ASSETS);
		})
	);
	self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
	event.waitUntil(
		caches.keys().then((cacheNames) => {
			return Promise.all(
				cacheNames
					.filter((name) => name !== CACHE_NAME)
					.map((name) => caches.delete(name))
			);
		})
	);
	self.clients.claim();
});

// Fetch event
self.addEventListener('fetch', (event) => {
	// Skip cross-origin requests
	if (!event.request.url.startsWith(self.location.origin)) {
		return;
	}

	const url = new URL(event.request.url);

	// HTML navigation: always network-first so new deploys load correctly
	if (event.request.mode === 'navigate' || url.pathname.endsWith('.html') || url.pathname === '/') {
		event.respondWith(
			fetch(event.request).catch(() => caches.match(event.request))
		);
		return;
	}

	// Immutable hashed assets (_app/immutable/): cache-first, safe forever
	if (url.pathname.includes('/_app/immutable/')) {
		event.respondWith(
			caches.match(event.request).then((cached) => {
				if (cached) return cached;
				return fetch(event.request).then((response) => {
					if (response && response.status === 200) {
						const clone = response.clone();
						caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
					}
					return response;
				});
			})
		);
		return;
	}

	// Images and fonts: cache-first
	if (event.request.url.match(/\.(jpg|jpeg|png|gif|svg|webp|avif|woff|woff2|ttf|eot)$/i)) {
		event.respondWith(
			caches.match(event.request).then((cached) => {
				if (cached) return cached;
				return fetch(event.request).then((response) => {
					if (response && response.status === 200) {
						const clone = response.clone();
						caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
					}
					return response;
				});
			})
		);
		return;
	}

	// Everything else: network only
	event.respondWith(fetch(event.request));
});

