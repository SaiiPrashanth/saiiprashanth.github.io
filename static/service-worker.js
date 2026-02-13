const CACHE_NAME = 'game-design-portfolio-v1';
const STATIC_ASSETS = [
	'/',
	'/manifest.json',
	'/Logo.png'
];

// Install event - cache static assets
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

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
	// Skip cross-origin requests
	if (!event.request.url.startsWith(self.location.origin)) {
		return;
	}

	event.respondWith(
		caches.match(event.request).then((cachedResponse) => {
			if (cachedResponse) {
				return cachedResponse;
			}

			return fetch(event.request).then((response) => {
				// Don't cache if not a success response
				if (!response || response.status !== 200 || response.type !== 'basic') {
					return response;
				}

				// Cache images and static assets
				if (
					event.request.url.match(/\.(jpg|jpeg|png|gif|svg|webp|css|js|woff|woff2|ttf|eot)$/i)
				) {
					const responseToCache = response.clone();
					caches.open(CACHE_NAME).then((cache) => {
						cache.put(event.request, responseToCache);
					});
				}

				return response;
			});
		})
	);
});
