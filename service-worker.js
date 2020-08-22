"use strict";

// CODELAB: Update cache names any time any of the cached files change.
const CACHE_NAME = 'static-cache-v4';
const DATA_CACHE_NAME = 'data-cache-v1';

const FILES_TO_CACHE = [
    "/",
    "/index.html",
    "/scripts/app.js",
    "/scripts/idb.js",
    "/styles/inline.css",
    "/images/ic_add_white_24px.svg",
    "/images/ic_refresh_white_24px.svg"
];

self.addEventListener('install', function(evt) {
    console.log('[ServiceWorker] Install');
    evt.waitUntil(
      caches.open(CACHE_NAME).then(function(cache) {
        console.log('[ServiceWorker] Caching app shell');
        return cache.addAll(filesToCache);
      })
    );
  });

  self.addEventListener('activate', (evt) => {
    console.log('[ServiceWorker] Activate');
    // CODELAB: Remove previous cached data from disk.
    evt.waitUntil(
        caches.keys().then((keyList) => {
          return Promise.all(keyList.map((key) => {
            if (key !== CACHE_NAME) {
              console.log('[ServiceWorker] Removing old cache', key);
              return caches.delete(key);
            }
          }));
        })
    );
    self.clients.claim();
  });
  
  /*self.addEventListener('fetch', (evt) => {
    console.log('[ServiceWorker] Fetch', evt.request.url);
    // CODELAB: Add fetch event handler here.
  
  });*/