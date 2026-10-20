// Münzwurf – Service Worker (offline-fähig)
// Die Seite selbst kommt immer zuerst aus dem Netz, eine Versionsnummer muss dafür nicht erhöht werden.
// Nur bei Änderungen an ASSETS (neue oder umbenannte Dateien) die Cache-Version erhöhen.
const CACHE = 'muenzwurf-v6';
const ASSETS = ['./', './index.html', './manifest.json', './icon.svg',
  './icon-192.png', './icon-512.png', './icon-maskable-512.png', './apple-touch-icon.png', './grenzen.json'];
const NET_TIMEOUT = 3000; // so lange auf das Netz warten, danach die gespeicherte Seite zeigen

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(req.mode === 'navigate' ? page(req) : asset(req));
});

// Seite: Network-first – neue Versionen sind sofort da, offline (oder bei sehr langsamem Netz) aus dem Cache
async function page(req) {
  const cache = await caches.open(CACHE);
  const key = new URL(req.url); key.search = ''; // ?a=…&b=… teilen sich einen Eintrag
  const network = fetch(req).then(async res => {
    if (res.ok) await cache.put(key.href, res.clone());
    return res;
  });
  const cached = (await cache.match(key.href)) || (await cache.match('./'));
  if (!cached) return network;
  return Promise.race([
    network.catch(() => cached),
    new Promise(r => setTimeout(() => r(cached), NET_TIMEOUT))
  ]);
}

// Übrige Dateien: Stale-while-revalidate – sofort aus dem Cache, im Hintergrund aktualisieren
async function asset(req) {
  const cache = await caches.open(CACHE);
  const cached = await cache.match(req, { ignoreSearch: true });
  const network = fetch(req)
    .then(res => { if (res && res.ok) cache.put(req, res.clone()); return res; })
    .catch(() => cached);
  return cached || network;
}
