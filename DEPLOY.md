# DEPLOY — SOC Baula PWA
**URL final:** `https://Tziking.github.io/SOC-Laud/SOC-LVL54-15.html`

---

## Archivos que deben estar en el repo (raíz)

- `SOC-LVL54-15.html`
- `manifest.json`
- `service-worker.js`
- `icon-192.png` ← tú lo creas (ver instrucciones abajo)
- `icon-512.png` ← tú lo creas (ver instrucciones abajo)
- `DEPLOY.md` (este archivo)

---

## Paso 1 — Subir los archivos al repo

Para cada archivo nuevo (`SOC-LVL54-15.html`, `manifest.json`, `service-worker.js`, `DEPLOY.md`):

1. Ir a `https://github.com/Tziking/SOC-Laud`
2. Tap **"Add file"** → **"Upload files"** (o el lápiz ✏️ si ya existe)
3. Seleccionar el archivo desde tu celular
4. Tap **"Commit changes"** (mensaje sugerido: `paquete 5 — PWA`)
5. Repetir para cada archivo

---

## Paso 2 — Crear los íconos (tú los haces)

Necesitas dos PNG cuadrados con fondo negro `#080808` y letras "SOC" en verde lima `#c8ff00`.

**Opción más fácil desde el celular:** [favicon.io/favicon-generator](https://favicon.io/favicon-generator/)
- Text: `SOC`
- Background: `#080808`
- Font color: `#c8ff00`
- Font: cualquier monospace
- Descarga el zip → saca los dos PNG → renombra a `icon-192.png` e `icon-512.png`
- Súbelos al repo igual que los otros archivos

**Alternativa:** Canva desde el celular (template cuadrado, fondo negro, texto verde lima).

> **Nota:** Si no tienes los íconos listos, la PWA igual funciona — solo mostrará ícono genérico. Los puedes agregar después sin tocar el código.

---

## Paso 3 — Activar GitHub Pages

1. Ir a `https://github.com/Tziking/SOC-Laud`
2. Tap **"Settings"** (engranaje arriba a la derecha del repo)
3. En el menú, tap **"Pages"**
4. En **"Source"**, elegir **"Deploy from a branch"**
5. En **"Branch"**, elegir **"main"** y carpeta **"/ (root)"**
6. Tap **"Save"**
7. Esperar 1–2 minutos

GitHub mostrará la URL: `https://Tziking.github.io/SOC-Laud/`

---

## Paso 4 — Abrir e instalar en Brave

1. Abrir Brave en el celular
2. Navegar a: `https://Tziking.github.io/SOC-Laud/SOC-LVL54-15.html`
3. La app carga igual que antes
4. Brave muestra prompt de **"Instalar app"** abajo, o en menú ⋮ → **"Instalar app"**
   - También aparece el botón **"📲 Instalar app"** dentro del tab Mando del SOC
5. Tap **"Instalar"**
6. Ícono del SOC aparece en el home del celular

---

## Paso 5 — Migrar datos (si tenías datos en el archivo local anterior)

El archivo local (`file://`) y la PWA (`https://`) son dominios distintos — los datos no migran solos.

Para migrar:
1. Abrir el HTML **viejo** desde archivos
2. Ir a **Optimización → Respaldo → Exportar JSON**
3. Guardar el JSON
4. Abrir la **PWA nueva**
5. Ir a **Optimización → Respaldo → Importar JSON**
6. Seleccionar el JSON guardado

---

## Actualizaciones futuras (cada paquete nuevo)

1. Editar `SOC-LVL54-NN.html` directamente en GitHub (botón lápiz ✏️)
2. En `service-worker.js`: actualizar `CACHE_NAME` de `soc-baula-v1` a `soc-baula-v2` (incrementar en cada versión)
3. En `service-worker.js`: actualizar la línea `./SOC-LVL54-15.html` con el nuevo nombre
4. En `manifest.json`: actualizar `start_url` si el nombre del HTML cambió
5. Commit desde la web
6. GitHub Pages redespliega en 1–2 min
7. La próxima vez que abras la PWA, detecta nueva versión y recarga

---

## Troubleshooting

**El botón de instalar no aparece:**
- Espera a cargar la página completa (el prompt tarda unos segundos)
- Verifica que `manifest.json` sea accesible: abre `https://Tziking.github.io/SOC-Laud/manifest.json` — debe mostrar JSON
- Brave solo muestra el prompt en HTTPS (GitHub Pages lo garantiza)

**El ícono no aparece en el home:**
- Espera 2 min después de activar GitHub Pages
- Refresca la página en Brave antes de intentar instalar

**La app dice "Sin conexión y sin cache":**
- Solo pasa si abres por primera vez sin señal
- Conéctate a internet al menos una vez para que el SW precaché todo

**Los datos desaparecieron:**
- GitHub Pages no persiste datos — eso lo hace `localStorage` en tu navegador
- Si borraste caché de Brave para el dominio `github.io`, los datos se fueron
- Por eso el respaldo manual semanal sigue siendo crítico hasta paquete 6 (puente a Drive)

---

*Generado para: `Tziking/SOC-Laud` · rama `main` · Paquete 5*
