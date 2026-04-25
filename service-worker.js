// Laud OS — Service Worker v2.0
// Estrategia: Network-first para HTML/manifest, cache-first para assets estáticos
// Propósito: app funciona offline, pero los cambios de código se ven inmediatamente cuando hay red

const CACHE_NAME = 'Laud-OS-V2';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  // Google Fonts usadas en el HTML
  'https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400;500&display=swap'
];

// Recursos que SIEMPRE intentan red primero (cambian seguido durante desarrollo)
// Si la red falla, caen a cache.
function esRecursoVolatil(url) {
  const path = url.pathname;
  return (
    path.endsWith('/') ||                    // raíz del sitio
    path.endsWith('/index.html') ||
    path.endsWith('/manifest.json') ||
    path.endsWith('/service-worker.js')
  );
}

// ── INSTALL: precacheo de assets esenciales ──
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Precacheando assets v2');
      return cache.addAll(ASSETS_TO_CACHE).catch((err) => {
        console.warn('[SW] Algunos assets no se pudieron precachear:', err);
        // No falla el install si un asset opcional falla
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

// ── FETCH: estrategia híbrida ──
self.addEventListener('fetch', (event) => {
  // Solo interceptar GET — no tocar POST (futuros puentes a APIs)
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);
  const esMismoDominio = url.origin === self.location.origin;
  const esFontGoogle = url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com';

  if (!esMismoDominio && !esFontGoogle) return;

  // ── ESTRATEGIA NETWORK-FIRST: para HTML, manifest, SW ──
  if (esMismoDominio && esRecursoVolatil(url)) {
    event.respondWith(
      fetch(event.request).then((fresh) => {
        // Red disponible — actualizar cache y servir versión fresca
        if (fresh && fresh.ok) {
          const freshClone = fresh.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, freshClone));
        }
        return fresh;
      }).catch(() => {
        // Sin red — caer a cache
        return caches.match(event.request).then((cached) => {
          if (cached) return cached;
          return new Response('Sin conexión y sin cache. Recarga cuando tengas señal.', {
            status: 503,
            headers: { 'Content-Type': 'text/plain; charset=utf-8' }
          });
        });
      })
    );
    return;
  }

  // ── ESTRATEGIA CACHE-FIRST + revalidate: para assets estáticos (íconos, fonts) ──
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) {
        // Tenemos cache — servirlo inmediatamente
        // En paralelo, actualizar cache desde red (stale-while-revalidate light)
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
        return new Response('Sin conexión y sin cache.', {
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
