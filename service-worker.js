"use strict";

// CODELAB: Update cache names any time any of the cached files change.
const CACHE_NAME = 'static-cache-v1';
const DATA_CACHE_NAME = 'data-cache-v1';

const FILES_TO_CACHE = [
    "/",
    "/index.html",
    "/scripts/app.js",
    "/scripts/idb.js",
    "/styles/inline.css",
    "/images/ic_add_white_24px.svg",
    "/images/ic_refresh_white_24px.svg",
];

evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
        console.log('[ServiceWorker] Pre-caching offline page');
        return cache.addAll(FILES_TO_CACHE);
    })
);