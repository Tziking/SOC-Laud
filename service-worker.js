// SOC Baula — Service Worker v1.0
// Estrategia: Cache-first con network fallback
// Propósito: app funciona offline, actualiza cuando hay señal

const CACHE_NAME = 'soc-baula-v1';

const ASSETS_TO_CACHE = [
  './',
  './SOC-LVL54-15.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  // Google Fonts usadas en el HTML
  'https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400;500&display=swap'
];

// ── INSTALL: precacheo de assets esenciales ──
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Precacheando assets');
      return cache.addAll(ASSETS_TO_CACHE).catch((err) => {
        console.warn('[SW] Algunos assets no se pudieron precachear:', err);
        // No falla el install si un asset opcional falla (ej: íconos aún no subidos)
      });
    })
  );
  self.skipWaiting();
});

// ── ACTIVATE: limpia caches viejos ──
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => {
            console.log('[SW] Borrando cache viejo:', key);
            return caches.delete(key);
          })
      );
    }).then(() => self.clients.claim())
  );
});

// ── FETCH: cache-first con stale-while-revalidate ──
self.addEventListener('fetch', (event) => {
  // Solo interceptar GET — no tocar POST (futuros puentes a APIs)
  if (event.request.method !== 'GET') return;

  // No interceptar requests a otros dominios excepto Google Fonts (ya cacheadas)
  const url = new URL(event.request.url);
  const esMismoDominio = url.origin === self.location.origin;
  const esFontGoogle = url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com';

  if (!esMismoDominio && !esFontGoogle) return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) {
        // Tenemos cache — servirlo inmediatamente
        // En paralelo, intentar actualizar cache desde red (stale-while-revalidate light)
        fetch(event.request).then((fresh) => {
          if (fresh && fresh.ok) {
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, fresh));
          }
        }).catch(() => { /* sin red, sigue usando cache */ });
        return cached;
      }

      // No hay cache — intentar red
      return fetch(event.request).then((fresh) => {
        if (fresh && fresh.ok) {
          const freshClone = fresh.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, freshClone));
        }
        return fresh;
      }).catch(() => {
        // Sin cache ni red
        return new Response('Sin conexión y sin cache. Recarga cuando tengas señal.', {
          status: 503,
          headers: { 'Content-Type': 'text/plain; charset=utf-8' }
        });
      });
    })
  );
});

// ── MESSAGE: recibir instrucciones del HTML (para forzar update) ──
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
