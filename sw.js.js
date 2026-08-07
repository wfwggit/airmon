// Basic Service Worker for SHE101 PWA

self.addEventListener('install', (event) => {
    // Skip waiting to ensure immediate activation
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    // Claim clients immediately
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
    // Basic fetch passthrough handler
    event.respondWith(
        fetch(event.request).catch(() => {
            // Optional offline fallback logic can go here
        })
    );
});