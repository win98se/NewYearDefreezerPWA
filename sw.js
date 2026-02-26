const CACHE="pwabuilder-offline";

importScripts("https://cdn.jsdelivr.net/npm/workbox-sw");

workbox.setConfig({
	debug: true
});

self.addEventListener("message", (event)=>{
	if((event.data)&&(event.data.type==="SKIP_WAITING")) {
		self.skipWaiting();
	}
});

self.addEventListener("install", async (event)=>{
	event.waitUntil(caches.open(CACHE).then((cache)=>cache.addAll([".", "index.htm", "music.mp3", "ice.png", "nonfrozen.png", "25frozen.png", "50frozen.png", "75frozen.png", "100frozen.png"])));
});

workbox.routing.registerRoute(/\/*/, new workbox.strategies.StaleWhileRevalidate({cacheName: CACHE}));