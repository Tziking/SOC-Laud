# SOC Dashboard — Executive Brief
**Versión:** LVL54 · Stage 1.9 → 2.0
**Idioma de respuesta:** Claude siempre responde en español

---

## Misión del sistema

Un organismo vivo que convierte realidad de campo en decisiones ejecutables y outputs delegables.

```
Campo → Dato estructurado → Decisión priorizada → Output delegable → Memoria → Aprendizaje
```

El objetivo final es replicación: automatizar lo repetible, delegar lo operacional, y liberar atención para dirigir crecimiento.

**Principio rector:** La interfaz se optimiza para dos cosas: captura rápida de realidad y datos limpios para Gemma. Los dashboards son transitorios. La captura es permanente.

**Visión del input:** El input debe poder llegar como una nota de voz, una foto, o un mensaje tipo chat. Gemma es la capa que convierte input desestructurado en dato limpio que el SOC ya sabe procesar.

---

## Filtro de datos (regla antes de cualquier feature)

Todo dato que entra al sistema debe servir al menos una de estas cuatro funciones:

1. **Decidir** — informar una acción priorizada
2. **Delegar** — producir una orden de trabajo o tarea asignable
3. **Controlar caja** — afectar o clarificar la posición financiera
4. **Preparar replicación** — construir estructura que escala al siguiente chalet

Si no sirve a ninguna → no pertenece todavía.

---

## Orden fractal obligatorio

```
Nivel 1 — ESTRUCTURA / BASE
  Configuración · Inspección · Compras

Nivel 2 — CONTROL / ADMINISTRACIÓN
  Ruta Crítica · Finanzas · Data / Respaldo

Nivel 3 — EFICIENCIA / AUTOMATIZACIÓN
  Plantillas · Despacho · Gemma (Quest 6+)

Nivel 4 — FLUJO / EXPOSICIÓN
Nivel 5 — REPLICACIÓN / EXPANSIÓN
```

Regla: no optimizar antes de validar estructura. No escalar sin control.

---

## Las 5 capas del organismo

Cada capa alimenta a la siguiente. Sin saltos.

| # | Capa | Función | Estado |
|---|---|---|---|
| 1 | Percepción | Captura de realidad de campo | ✅ Funcional |
| 2 | Juicio | Scoring, prioridad, motor de decisión | ✅ Robusto |
| 3 | Acción | Recomendación, compras, despacho | ✅ Funcional |
| 4 | Verificación | ¿Funcionó? Costo real, recaída | ⚠️ No existe |
| 5 | Aprendizaje | Patrones, calibración, Gemma | ⚠️ No existe |

Las capas 1–3 funcionan en el HTML actual. Las capas 4–5 son el salto a autorregulación experta.

---

## Estado actual del sistema

**Stage 1.9 de 2.0**

### Módulos funcionales

| Módulo | Estado |
|---|---|
| Configuración (DNA, áreas, sistemas) | ✅ |
| Inspección (área → checklist → hallazgo) | ✅ |
| Compras (CRUD, recurrentes, favoritos) | ✅ |
| Finanzas (movimientos, caja, compromisos, proyección) | ✅ |
| Reservas (calendario, ADR, RevPAR, gap nights) | ✅ |
| Inventario (esperado vs actual por área) | ✅ |
| Mapa Estratégico / Ruta Crítica | ✅ |
| Reportes (historial, plantillas, respaldo, Despacho) | ✅ |

### Conexiones entre módulos (LVL54)

| Origen | Destino | Estado |
|---|---|---|
| Configuración | Inspección, Ruta Crítica | ✅ |
| Inspección | Compras (hallazgo_id FK) | ✅ cerrado LVL54 |
| Inspección | Ruta Crítica | ✅ |
| Compras | Finanzas, Historial | ✅ |
| Movimientos | Reportes (area_id activo) | ✅ cerrado LVL54 |
| Ruta Crítica | Reportes, Despacho | ✅ |
| Historial | Reportes | ✅ tipado LVL54 |

### Gaps pendientes (pre-Gemma)

| Gap | Detalle |
|---|---|
| `accion_tipo` enum | `accion` es string libre — necesita enum para que Gemma clasifique sin adivinar |
| `exportarParaAI()` | Función que serializa hallazgos + historial en JSON limpio para entrenamiento |

---

## Roadmap de autorregulación — LVL54 → LVL60

Cuatro fases ordenadas por dependencia. No saltar.

### Fase 0 — Agilidad de inputs
**Objetivo:** capturar realidad tan rápido como tomar una nota de voz.
**Nivel fractal:** 1 (Estructura).

- Flujo de inspección: máximo 3 taps (área → estado → guardar)
- Botones de estado R/Y/G con touch target mínimo 48px
- Defaults inteligentes pre-llenados (costo=medio, accion_tipo=reparar)
- Accesos directos a nueva reserva, movimiento y compra desde cada tab
- Progressive disclosure: captura mínima primero, enriquecer después

### Fase 1 — Cerrar el ciclo de verificación
**Objetivo:** un hallazgo no termina al marcarse resuelto, sino al verificarse.
**Nivel fractal:** 2 (Control). **Depende de:** Fase 0.

Campos nuevos en `S.hallazgos[]`:
- `resultado`: `resuelto_ok | parcial | mal_diagnosticado | recayo`
- `fecha_verificacion`: String
- `costo_real`: `bajo | medio | alto`

Comportamiento:
- `_resolverHallazgoBase()` cierra en estado `pendiente_verificacion`, no definitivo
- Si `resultado = recayo` → hallazgo se reabre con bandera de recurrencia
- `exportarParaAI()` incluye resultado, fecha_verificacion y costo_real

### Fase 2 — Patrones y recurrencia
**Objetivo:** el historial deja de ser log pasivo y detecta patrones.
**Nivel fractal:** 2→3 (Control → Automatización). **Depende de:** Fase 1.

- `detectarPatrones()`: agrupa historial por área + sistema, clasifica en `area_problematica | sistema_fragil | solucion_ineficaz`
- Hallazgo en área con patrón recurrente → boost de prioridad en `decidirSistema()`
- Señal visual ⟳ en Ruta Crítica para áreas con patrón activo
- Top 3 patrones en tab Reportes y en `generarResumenEstrategico()`

### Fase 3 — Confianza y calibración
**Objetivo:** cada recomendación del motor sabe qué tan segura es.
**Nivel fractal:** 3 (Automatización). **Depende de:** Fases 1+2.

- `calcConfianza(h)`: `alta | media | baja` — calculado, nunca capturado manualmente
- Factores: sistemas claros, historial previo, accion_tipo enum, sin patrón de recaída
- Reporte de calibración en tab Reportes: % urgentes que sí eran urgentes, % estimaciones de costo correctas

### Fase 4 — Score de estabilidad + puente a Gemma
**Objetivo:** una métrica que dice si el chalet tiende a estabilidad o caos.
**Nivel fractal:** 3 (Automatización). **Depende de:** Fases 1+2+3.

- `scoreEstabilidad()`: 0–100 con tendencia (↑↓→)
- Componentes: % resueltos_ok, tasa recurrencia, precisión motor, caja, ratio críticos/período
- Estabilidad > 80 → motor permite mejoras y optimizaciones
- Estabilidad < 50 → modo defensivo, solo problemas críticos
- `exportarParaAI()` v2 incluye resultado, patrones, confianza, estabilidad → Quest 5 completo → Quest 6 desbloqueado

---

## Quest Roadmap — hacia Gemma

| Quest | Descripción | Fase SOC | Estado |
|---|---|---|---|
| 1 | Captura limpia | — | ✅ |
| 2 | Datos útiles | — | ✅ |
| 3 | Control confiable | — | ✅ ~95% |
| 4 | Memoria útil | — | ✅ ~90% |
| 5 | Dataset para AI | Fases 0–4 | ⚠️ ~85% |
| 6 | Gemma piloto | Post Fase 4 | 🔒 requiere Q5 |
| 7 | Gemma en equipo | Post Q6 validada | 🔒 requiere Q6 |

**Regla:** Gemma no entra hasta que los datos estén tan limpios que no tenga que adivinar.

---

## Evolución de la interfaz hacia Gemma

| Etapa | Ed ve | Gemma ve |
|---|---|---|
| HOY | Todo: dashboards, motor, ruta crítica, despacho, reportes | Nada — no existe |
| Post Fase 0–1 | Inputs rápidos + verificación post-acción + CMD simplificado | `exportarParaAI()` con resultado real |
| Post Fase 2–3 | Inputs + señales de patrones + confianza en acciones | JSON con patrones + confianza + historial enriquecido |
| Post Fase 4 | Score de estabilidad + inputs + lo que Gemma no puede hacer | Dataset completo con feedback loop cerrado |
| Quest 6–7 | Solo: capturar realidad + aprobar/rechazar sugerencias de Gemma | Todo lo demás: priorizar, despachar, reportar, detectar patrones |

---

## Decisiones de exclusión (no implementar)

| Idea | Razón |
|---|---|
| Scorecard de proveedores | Sin masa de datos, mide ruido. Diferido hasta >50 resoluciones con responsable |
| Hipótesis como campo | El motor ya decide. Pedir hipótesis al inspector es fricción sin destino |
| Decision Queue (módulo) | `decidirSistema()` ya genera buckets. Falta presentación visual, no lógica nueva |
| Panel de calibración (pantalla nueva) | Va en tab Reportes, no en pantalla nueva. Ya hay suficientes tabs |
| Fotos en hallazgos | Requiere storage backend. HTML es archivo local. Diferido a Nivel 4 |
| Módulo de huéspedes | Diferido a Nivel 3–4 del fractal. Sin control consolidado primero |

---

## Arquitectura de navegación

### Tabs principales

| Tab | Función | Regla |
|---|---|---|
| Estructura | Captura de realidad física | ¿Sirve para capturar realidad física? → aquí |
| Administración | Números y control | ¿Administra dinero o compromisos? → aquí |
| Operación | Decisiones de trabajo | ¿Coordina ejecución o prioridades? → aquí |
| Reportes | Outputs del sistema | ¿Entrega o exporta información? → aquí |

### Layout (LVL54)

```
.nav            → fixed bottom, z-index 200, height 50px
.drawer-subtabs → fixed, bottom: calc(50px + safe-area), z-index 190
.hdr            → sticky top, colapsable con click (.compact)
.tab            → padding-bottom: calc(100px + safe-area)
```

### Patrón de navegación: Progressive Disclosure (3 niveles)

```
Nivel 1 — Vista global       → escanear todo el chalet de un vistazo
Nivel 2 — Entidad específica → enfocarse en un área, módulo o sección
Nivel 3 — Acción dentro      → registrar, editar, asignar, resolver
```

Regla: nunca superar 3 niveles. CRUD completo disponible en niveles 2 y 3.

---

## Módulos diferidos (Nivel 3–4 del fractal — no implementar aún)

- Cliente / Huésped (entidad con historial y preferencias)
- Preferencia (dato de experiencia accionable)
- Momento memorable (diferenciador de experiencia)
- Métrica / Insight (capa de aprendizaje y optimización)

---

## Skills del sistema

| Skill | Cuándo activar |
|---|---|
| `state-schema-soc` | SIEMPRE antes de código que toque `S` |
| `fractal-organism-soc` | Diagnóstico de arquitectura, flujos, Quest roadmap |
| `data-filter-soc` | Antes de agregar cualquier campo, feature o pantalla |
| `crud-pattern-soc` | Ante cualquier formulario o lista con creación de datos |
| `ui-patterns-soc` | Para decidir qué patrón de componente usar |
| `component-library-soc` | Para código de componentes con tokens reales |
| `frontend-consistency-soc` | Checklist final antes de entregar cualquier código de UI |
| `decision-engine-soc` | Para convertir datos operativos en decisión priorizada |

---

## Errores históricos documentados

**`r.fecha` NO EXISTE en `S.reservas[]`.** Nunca usar.
- Fecha de reserva: `r.fechaReserva` (manual)
- Fecha de registro: `r.fechaRegistro` (automático)

---

## No negociables

- No romper conexiones entre módulos
- No añadir complejidad que debilite el uso diario
- No optimizar estética antes de control
- No dejar outputs atrapados dentro de la app si pueden estructurarse y reutilizarse
- No tratar las tabs como pantallas aisladas — son capas de un organismo
- No ejecutar nivel superior sin consolidar el nivel previo

---

## Frases operativas

*"Todo toca todo, pero solo a través de la capa correcta."*
*"Gemma no entra hasta que los datos estén tan limpios que no tenga que adivinar."*
*"El sistema no persigue perfección. Persigue estabilidad operativa inteligente, aprendizaje verificable y replicación limpia."*
