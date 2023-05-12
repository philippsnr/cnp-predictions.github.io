'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "b77107fbbfe22cd5a67c22ca5bc7220e",
"assets/assets/images/flags/deutschland.png": "d56c9baf89adf429154f494ffba0e956",
"assets/assets/images/flags/england.png": "89c629d2c8a38735881d864cb110cf45",
"assets/assets/images/flags/frankreich.png": "c7096c974f3f35ad5f82c21f8bd15b72",
"assets/assets/images/flags/italien.png": "6d071d1be3b0bf3f5dc0dc4bcf86f85b",
"assets/assets/images/flags/spanien.png": "8a5c9ee66556fbdd6a18384cb42c68e8",
"assets/assets/images/logo.jpg": "da0e3328fec52d3a9cafd81ce943d855",
"assets/assets/images/logoIcon.png": "03f0979d9449a88db2de1cb13506b048",
"assets/assets/images/trikots/arsenal.png": "325943d69ae4daac8f2c45bb25fe5a2d",
"assets/assets/images/trikots/aston_villa.png": "fcdd3f317c60a764ef1ffcbb87fec0f9",
"assets/assets/images/trikots/augsburg.png": "fe0ee614be344734fee4dfabf43b6dc7",
"assets/assets/images/trikots/bayern.png": "d1e3a5a6a5816b81bb5b6b080db66aa8",
"assets/assets/images/trikots/bochum.png": "d61f7e8723208ab44c8e094b0c99e071",
"assets/assets/images/trikots/bournemouth.png": "3e7a20e13d374152bf3ee35e96d77d31",
"assets/assets/images/trikots/bremen.png": "f94ba8d8ded58fbb4ce15ce49a07db0f",
"assets/assets/images/trikots/brentford.png": "44a891393847ccce3aec5c2f2cec1c16",
"assets/assets/images/trikots/brighton.png": "c00ab2c3903affe00a21bada721d7aad",
"assets/assets/images/trikots/chelsea.png": "ee542d58a17ad875d42e26f98b8c2675",
"assets/assets/images/trikots/crystal_palace.png": "92bb52b83b46205e060d2f1b8f0c8b43",
"assets/assets/images/trikots/dortmund.png": "d4fa936946ad2f1a15364a212e7515d8",
"assets/assets/images/trikots/everton.png": "1ed02055592ebd5978b94274f6e051db",
"assets/assets/images/trikots/frankfurt.png": "c82e54d8a61dd038cff88115c27a103d",
"assets/assets/images/trikots/freiburg.png": "0f977f45dca1be1b6f0e94b54f985718",
"assets/assets/images/trikots/fulham.png": "ab00b09a7d5c36af61f97fad4f504211",
"assets/assets/images/trikots/gladbach.png": "6e823551031638875fb99abdcbfe53dd",
"assets/assets/images/trikots/hertha.png": "c54fd4f61d23b653e8f3205cbb3a3e6b",
"assets/assets/images/trikots/hoffenheim.png": "6849ccff9e5e27624a83a270b94f4073",
"assets/assets/images/trikots/k%25C3%25B6ln.png": "050fc0189562c59c264b7cd52237ce90",
"assets/assets/images/trikots/leeds_united.png": "46235436ef820cd5d4769d8c551bfd41",
"assets/assets/images/trikots/leicester_city.png": "bfdfafc881db7cc0f68b74f2779fdb1f",
"assets/assets/images/trikots/leipzig.png": "8a52f9c0d4000cac8d7265e8d8a26811",
"assets/assets/images/trikots/leverkusen.png": "1ee54f175355149aad8fab9b4c46aa09",
"assets/assets/images/trikots/liverpool.png": "cf87393f074f1f0bae79545867fd8515",
"assets/assets/images/trikots/mainz.png": "6c6a116f6850da6ca6560cf2452a78b8",
"assets/assets/images/trikots/man_city.png": "19751a2902d30448587b04eeb444ff49",
"assets/assets/images/trikots/man_united.png": "ac9567020dc261ab4bf6b206725a9748",
"assets/assets/images/trikots/new_castle.png": "bde1db09bc8fb296ebb900f3e5b2b444",
"assets/assets/images/trikots/nothingham_forest.png": "e89c36480f15732e884ed2564fa075d5",
"assets/assets/images/trikots/schalke.png": "dac980e53149c2f9e83aeadf10168eb0",
"assets/assets/images/trikots/southampton.png": "4b587fe1f0ff8ef0dc56b6da3cdd62d1",
"assets/assets/images/trikots/stuttgart.png": "51819201c89bfdf8fe431ef6cfbed257",
"assets/assets/images/trikots/tottenham.png": "0bbbd27851641535394607544116a4c1",
"assets/assets/images/trikots/union_berlin.png": "a00754ef057962798214f7d4a02d34ab",
"assets/assets/images/trikots/west_ham.png": "4c87638262f1656839f7a12d8cb51269",
"assets/assets/images/trikots/wolfsburg.png": "41f39a866a848db56968c7f5471486ab",
"assets/assets/images/trikots/wolverhampton.png": "4b1c5e364f409d825a346985f5c06813",
"assets/FontManifest.json": "71a4a82de411f155107da3f8dac64ebd",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "6c6b2a9189db98d3d8c37c688274a10b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/getwidget/icons/dribble.png": "1e36936e4411f32b0e28fd8335495647",
"assets/packages/getwidget/icons/facebook.png": "293dc099a89c74ae34a028b1ecd2c1f0",
"assets/packages/getwidget/icons/google.png": "596c5544c21e9d6cb02b0768f60f589a",
"assets/packages/getwidget/icons/line.png": "da8d1b531d8189396d68dfcd8cb37a79",
"assets/packages/getwidget/icons/linkedin.png": "822742104a63a720313f6a14d3134f61",
"assets/packages/getwidget/icons/pinterest.png": "d52ccb1e2a8277e4c37b27b234c9f931",
"assets/packages/getwidget/icons/slack.png": "19155b848beeb39c1ffcf743608e2fde",
"assets/packages/getwidget/icons/twitter.png": "caee56343a870ebd76a090642d838139",
"assets/packages/getwidget/icons/wechat.png": "ba10e8b2421bde565e50dfabc202feb7",
"assets/packages/getwidget/icons/whatsapp.png": "30632e569686a4b84cc68169fb9ce2e1",
"assets/packages/getwidget/icons/youtube.png": "1bfda73ab724ad40eb8601f1e7dbc1b9",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "f8ed8e7251d92896cd6ad94953573309",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/apple-touch-icon.png": "20751f1d2db972d5b3f6c850acc56be4",
"icons/Icon-192.png": "cecb448279b0aa1838ba637b92df2dee",
"icons/Icon-512.png": "96587b417cf2a3eb5faa3dccb387db10",
"icons/Icon-maskable-192.png": "cecb448279b0aa1838ba637b92df2dee",
"icons/Icon-maskable-512.png": "96587b417cf2a3eb5faa3dccb387db10",
"index.html": "696b05f30ffa3a949e372258ec925769",
"/": "696b05f30ffa3a949e372258ec925769",
"main.dart.js": "60a1de64aea2e9ae279806cd35447cf6",
"manifest.json": "6c02ce9f69de8afcb36e157342758790",
"version.json": "37c8975b4fbe68189eb3af1c7740d423"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
