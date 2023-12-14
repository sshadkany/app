'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "f22697f45d52296d3992ebe2e269aced",
"splash/img/light-2x.png": "d11013f9cd5f2dadd28fe11e7aae8399",
"splash/img/dark-4x.png": "e82c5cb551c596b8a52a80c32276979e",
"splash/img/light-3x.png": "47d3ef3f3ff313b6f2014ceaaecdc3b2",
"splash/img/dark-3x.png": "47d3ef3f3ff313b6f2014ceaaecdc3b2",
"splash/img/light-4x.png": "e82c5cb551c596b8a52a80c32276979e",
"splash/img/dark-2x.png": "d11013f9cd5f2dadd28fe11e7aae8399",
"splash/img/dark-1x.png": "e5cc830ad0a8f493c0835c9e0785c361",
"splash/img/light-1x.png": "e5cc830ad0a8f493c0835c9e0785c361",
"index.html": "7813fbc9d9f3d73fa6419d3ed01830b8",
"/": "7813fbc9d9f3d73fa6419d3ed01830b8",
"main.dart.js": "b8b081d2f94f2840923ccaf6c24021c9",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "467f7c6e63956f616f9228ab0bcb2548",
"icons/Icon-192.png": "dbaadbe36f53b8447684d6330536a2dd",
"icons/Icon-maskable-192.png": "dbaadbe36f53b8447684d6330536a2dd",
"icons/Icon-maskable-512.png": "261a595cd6214701d8b7fb670b189022",
"icons/Icon-512.png": "261a595cd6214701d8b7fb670b189022",
"manifest.json": "567b8074f4250073a17fcfebc082dca7",
"assets/AssetManifest.json": "d408d268465a8349f39526d810d41c5c",
"assets/NOTICES": "b179681095e7ee6f15848fcd36577202",
"assets/FontManifest.json": "fe3c47bff8ea868fb13236e0862846bc",
"assets/AssetManifest.bin.json": "ea21b2f48a7047672a8335261b8eb423",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "e3fd59b32f335b8b8f848ad610492504",
"assets/fonts/MaterialIcons-Regular.otf": "0b88a8764c2ef45bfa6da6f8f52a6efc",
"assets/assets/images/flashcard.png": "08d529f1138d6ca0f5ca4b326aa7d2e2",
"assets/assets/images/logo_animate.json": "e00d4ee1b16addbbd3bbc69fce794abd",
"assets/assets/images/error.gif": "d2acbc826715df8410e251924dfb3757",
"assets/assets/images/discount.png": "2463003d116a48299a4633326deca6bd",
"assets/assets/images/no-image.png": "69aa069b97044290eb9a02a6929afbbb",
"assets/assets/images/movies.jpeg": "d572c7984438abd08508dff3d8957d5f",
"assets/assets/images/show_trasnlate.gif": "c3292ee4c1d96688392a7cff7638ddbf",
"assets/assets/images/enjoyglish.png": "0878c1bce4da861da02bbedd765c0632",
"assets/assets/images/bg4.png": "6ecc4c2295ccef6410b1571ed0c46e73",
"assets/assets/images/Logo.png": "30fa76add305d41036d6c7e064ea4ef3",
"assets/assets/images/IMDB_Logo.png": "c48e7968aba4e9c3e8c0631db98025f9",
"assets/assets/langs/tr.json": "3d29a75fcf0ed7dfff86d3db8f92fc69",
"assets/assets/langs/en.json": "3d29a75fcf0ed7dfff86d3db8f92fc69",
"assets/assets/langs/fa.json": "6668e9d333690e4520cbe6f03b69f554",
"assets/assets/langs/ar.json": "3d29a75fcf0ed7dfff86d3db8f92fc69",
"assets/assets/files/Lex.tsv": "324d470616f7094d99789777c147b554",
"assets/assets/files/dict/t.json": "fcf26d801eb5e400f97335e348b40869",
"assets/assets/files/dict/a.json": "fdc3b4df4bc6fc07dec5109a1be809a6",
"assets/assets/files/dict/x.json": "2ebac44ae3e4da08f396478c220c5988",
"assets/assets/files/dict/m.json": "45c67832d1213dbd81e80475369dce90",
"assets/assets/files/dict/l.json": "b46edc34130fa0fc06852e96a146f3f8",
"assets/assets/files/dict/y.json": "de4bfe2137fd73bb6259e7b2f5ecc915",
"assets/assets/files/dict/u.json": "9ec89eb9dbe5b697e56e6fcb182431eb",
"assets/assets/files/dict/k.json": "5b2c8acde6cb1ff5655f3cede3350adf",
"assets/assets/files/dict/r.json": "2b876be9fa49e7a93d60969687557bc3",
"assets/assets/files/dict/g.json": "a016b3dfdf8d875df4d2d89b606076ef",
"assets/assets/files/dict/f.json": "156ec6ac702c646a77d3d2fa72dfecf3",
"assets/assets/files/dict/s.json": "0af64f880b321b141f663f16324fdec1",
"assets/assets/files/dict/j.json": "0c7a76d39e791b10c068cfe29657239c",
"assets/assets/files/dict/i.json": "ea6f1b513f8784fe190bd2aea5d22e66",
"assets/assets/files/dict/e.json": "c7b27094c63913292cf2ec944b6de7d4",
"assets/assets/files/dict/p.json": "dd8425d2e33f047498b0ea9777534ff7",
"assets/assets/files/dict/q.json": "b2ec9939dce1fa9710fc6facd043f67c",
"assets/assets/files/dict/d.json": "3d140206f4c8f420bbf1532ae0d0bb35",
"assets/assets/files/dict/h.json": "571b697119b0c1436b65b982d05897fc",
"assets/assets/files/dict/c.json": "2d26068fd777e2cf86c83c39c4357477",
"assets/assets/files/dict/v.json": "e1b77cfa0784f5067fda2596e930c7d9",
"assets/assets/files/dict/o.json": "f82a68f7199b41e7871a3c126d3453c5",
"assets/assets/files/dict/z.json": "a80ba526d70184cae95d6b65305d3a3c",
"assets/assets/files/dict/n.json": "3725e726220603811acb9844d1125f2d",
"assets/assets/files/dict/w.json": "0673364b5f393cd1939ea9f287d3855c",
"assets/assets/files/dict/b.json": "f045c824c4f8250b6180a3289759fc37",
"assets/assets/fonts/vazir.ttf": "398b39dd0060814801cd1cbfe43fe0b5",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
