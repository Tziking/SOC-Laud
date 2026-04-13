BRIEF MAESTRO - SOC SKILLS / RENTA SHALET

**Versión:** v3 - documento rector del juego-sistema
**Base:** Brief v2 + correcciones de ontología, desbloqueo, entrenamiento, transición y objetivo

1. PROPÓSITO Y OBJETIVO DEL JUEGO

La app de Skills es un espejo estratégico gamificado de la realidad operativa de la app principal (SOC). Convierte construcción, uso, validación y aprendizaje en progreso visible y emocionalmente atractivo, para empujar al usuario hacia inputs reales de campo, mejores decisiones y una aplicación cada vez más profesional.

Objetivo real

El objetivo del juego no es desbloquear perks ni maxear niveles. El objetivo es alimentar el sistema con realidad estructurada, limpia y útil, hasta que pueda operar, aprender, estabilizarse y convertirse en un producto profesional.

El verdadero recurso escaso no son features - son inputs reales de campo. La compulsión correcta empuja al usuario a *usar* la app mejor, no solo a *desarrollarla* más.

Qué significa "ganar"

Ganar es llegar al punto donde el sistema opera con datos reales suficientes para tomar decisiones por sí solo, detectar patrones, cerrar ciclos y escalar a más propiedades. No es acumular XP - es que la XP acumulada refleje un sistema vivo.

2. PRINCIPIOS RECTORES

- **XP = evidencia de realidad.** El sistema no mide intención - mide lo que existe.
- **La skill refleja práctica, no fantasía.** Si no hay infraestructura mínima, la skill no se entrena.
- **Los quests abren capacidad, no sustituyen uso.** Un quest desbloquea mejores métodos de entrenamiento, no solo perks.
- **El uso real vale más que la intención.** Un hallazgo registrado vale más que una feature planeada.
- **La calidad del input amplifica su valor.** El mismo input gana más XP cuando el sistema está mejor construido.
- **La meta no es maxear por maxear.** Es maxear porque maxear significa producto real.

3. ONTOLOGÍA DEL SISTEMA

El v2 mezclaba conceptos. Esta sección los separa con precisión.

XP

Evidencia acumulada de realidad estructurada, validada o útil. No es un premio - es una medición.

Skill

Capacidad entrenable del sistema. No es una feature, no es un perk, no es una idea. Es una dimensión del organismo que puede crecer, medirse y madurar. Una skill puede estar visible pero bloqueada si no tiene infraestructura mínima.

Perk

Capacidad concreta ya implementada y verificada en el HTML. Es el resultado de haber construido algo. Existe o no existe - se audita contra el código real.

Quest

Objetivo estructural que desbloquea acceso a skills, habilita métodos de entrenamiento, otorga multiplicadores o abre nuevas formas de ganar XP. Un quest no es un perk: un perk es algo que ya existe en el código; un quest es algo que el usuario completa y que cambia las reglas del juego.

Método de entrenamiento

Forma repetible de ganar XP en una skill. Cada skill tiene métodos básicos, eficientes y avanzados. Los quests abren mejores métodos.

Milestone

Hito grande de construcción o evolución del sistema. Otorga XP significativa una sola vez.

Estado operativo

La realidad del sistema en campo: hallazgos, reservas, movimientos, outputs, cierres, recurrencias. Es la materia prima del juego.

4. ARQUITECTURA DEL SISTEMA

#: 1
Capa: **Brief fuente**
Qué es: Este documento. Define reglas, skills, quests, métodos, pesos, identidad.
Estado: Este doc

#: 2
Capa: **Motor de skills**
Qué es: HTML que renderiza niveles, audita perks, calcula XP, muestra progreso.
Estado: SOC-Skills-v5.html

#: 3
Capa: **Estado operativo**
Qué es: SOC-LVL54.html + datos reales (S en localStorage).
Estado: Activo

#: 4
Capa: **Motor de entrenamiento**
Qué es: Transforma acciones reales en XP según calidad, contexto y madurez.
Estado: ️ Parcial (solo Milestone XP)

#: 5
Capa: **Inteligencia**
Qué es: Claude upstream, Codex ejecutor, Gemma futura.
Estado: ️ En construcción

5. SKILLS DEFINITIVAS - 11 SKILLS, 3 GRUPOS

COMBAT SKILLS - Inputs principales

Las combat skills son los 3 inputs que alimentan todo el sistema.

Attack - INSPECCIÓN

**Identidad:** Captura de realidad física. Cada hallazgo es un golpe al caos.
**Tipo:** Uso + milestone híbrida.

**Prerrequisitos para desbloqueo:** Ninguno. Esta es la primera skill entrenable. Si no puedes registrar un hallazgo, no hay sistema.

**Métodos de entrenamiento:**

Nivel: Básico
Método: Registrar hallazgo con descripción y área
XP/acción: +5
Condición: Formulario funcional

Nivel: Eficiente
Método: Registrar con severidad + subtipo + sistema afectado
XP/acción: +8
Condición: Perks a3, a4 desbloqueados

Nivel: Avanzado
Método: Registrar con acción_tipo tipado + costo estimado + foto
XP/acción: +12
Condición: Perks a7+ desbloqueados

**Perks (auditables contra HTML):**

ID: a1
Perk: Registro de hallazgo
Requisito: Formulario básico funcional
XP: 200
Lv: 1

ID: a2
Perk: Estado R/Y/G
Requisito: Botones de severidad por colores
XP: 300
Lv: 5

ID: a3
Perk: Subtipo
Requisito: problema / mejora / mantenimiento
XP: 500
Lv: 10

ID: a4
Perk: Sistemas afectados
Requisito: Tags de sistemas seleccionables
XP: 500
Lv: 14

ID: a5
Perk: Score automático
Requisito: imp × dep × prop con multiplicadores
XP: 800
Lv: 20

ID: a6
Perk: Accordion de áreas
Requisito: Inspección organizada por áreas colapsables
XP: 600
Lv: 16

ID: a7
Perk: accion_tipo tipado
Requisito: Enum: reparar/reemplazar/limpiar/etc
XP: 1200
Lv: 30

ID: a8
Perk: Captura ≤3 taps
Requisito: Fase 0: área→estado→guardar
XP: 2500
Lv: 45

ID: a9
Perk: Botones ≥48px
Requisito: Touch targets grandes en toda acción
XP: 2000
Lv: 50

ID: a10
Perk: Defaults inteligentes
Requisito: Costo=medio, imp=3 pre-seleccionados
XP: 2000
Lv: 55

ID: a11
Perk: Progressive disclosure
Requisito: Mínimo primero, enriquecer después
XP: 3000
Lv: 65

ID: a12
Perk: Input por voz
Requisito: Gemma interpreta nota de voz
XP: 6000
Lv: 85

ID: a13
Perk: Captura perfecta
Requisito: Zero friction. Pensar = registrar.
XP: 12000
Lv: 99

ID: a14
Perk: Multi-chalet
Requisito: Inspección unificada cross-property
XP: 25000
Lv: 120

**Nivel 99:** La inspección es tan rápida que no se siente como trabajo. Todo hallazgo queda tipado, vinculado y útil.
**Nivel 120:** Un flujo que sabe en qué chalet estás y adapta todo automáticamente.

Strength - FINANZAS

**Identidad:** Control financiero. Cada movimiento registrado es fuerza contra incertidumbre de caja.
**Tipo:** Uso + milestone híbrida.

**Prerrequisitos para desbloqueo:** Ninguno. Entrenable desde el inicio.

**Métodos de entrenamiento:**

Nivel: Básico
Método: Registrar movimiento (ingreso/gasto)
XP/acción: +5
Condición: Formulario funcional

Nivel: Eficiente
Método: Movimiento categorizado + vinculado a hallazgo
XP/acción: +8
Condición: Perk s5, s8 desbloqueados

Nivel: Avanzado
Método: Movimiento con proyección de impacto en caja
XP/acción: +12
Condición: Perk s7+ desbloqueados

**Perks:**

ID: s1
Perk: Movimientos básicos
Requisito: Pagar/cobrar/ingreso/gasto
XP: 300
Lv: 5

ID: s2
Perk: Caja real
Requisito: getCajaReal() = caja - pendientes
XP: 500
Lv: 12

ID: s3
Perk: Compromisos fijos
Requisito: Egresos recurrentes registrados
XP: 500
Lv: 15

ID: s4
Perk: Diagnóstico de caja
Requisito: deficit/riesgo/ajustado/estable
XP: 600
Lv: 20

ID: s5
Perk: Historial financiero
Requisito: Log de movimientos ejecutados
XP: 400
Lv: 10

ID: s6
Perk: KPIs financieros
Requisito: Ingreso objetivo, gasto op, ticket promedio
XP: 800
Lv: 22

ID: s7
Perk: Proyección 16 días
Requisito: Caja futura con compromisos incluidos
XP: 1200
Lv: 30

ID: s8
Perk: Movimiento desde hallazgo
Requisito: Crear gasto vinculado a reparación
XP: 1500
Lv: 38

ID: s9
Perk: Costo estimado vs real
Requisito: Comparar predicción con realidad
XP: 3000
Lv: 55

ID: s10
Perk: Presupuesto por área
Requisito: Gasto planificado vs real por zona
XP: 4000
Lv: 72

ID: s11
Perk: Control financiero total
Requisito: Cero sorpresas de caja
XP: 12000
Lv: 99

ID: s12
Perk: Finanzas multi-chalet
Requisito: P&L consolidado por propiedad
XP: 25000
Lv: 120

**Nivel 99:** Cada quetzal rastreado, categorizado y proyectado. Cero sorpresas.
**Nivel 120:** P&L por chalet y consolidado entre propiedades.

Defence - RESERVAS

**Identidad:** Protección contra ocupación vacía. Cada reserva es un escudo contra noches sin ingreso.
**Tipo:** Uso + milestone híbrida.

**Prerrequisitos para desbloqueo:** Ninguno. Entrenable desde el inicio.

**Métodos de entrenamiento:**

Nivel: Básico
Método: Registrar reserva con nombre y fechas
XP/acción: +8
Condición: Formulario funcional

Nivel: Eficiente
Método: Reserva con canal + anticipo + cobro vinculado
XP/acción: +12
Condición: Perks d2, d3, d8 desbloqueados

Nivel: Avanzado
Método: Reserva con pricing optimizado + gap analysis
XP/acción: +18
Condición: Perks d6, d11+ desbloqueados

**Perks:**

ID: d1
Perk: Registro de reserva
Requisito: Nombre, checkin, checkout, canal
XP: 300
Lv: 5

ID: d2
Perk: Canal de reserva
Requisito: Airbnb/Booking/directo/otro
XP: 300
Lv: 8

ID: d3
Perk: Anticipo y saldo
Requisito: Control de pagos por reserva
XP: 500
Lv: 12

ID: d4
Perk: Calendario visual
Requisito: Ver reservas en línea de tiempo
XP: 600
Lv: 18

ID: d5
Perk: ADR + RevPAR
Requisito: Métricas hoteleras estándar
XP: 800
Lv: 22

ID: d6
Perk: Gap nights
Requisito: Detectar noches sin reservar
XP: 800
Lv: 25

ID: d7
Perk: Ocupación %
Requisito: Porcentaje de noches ocupadas
XP: 600
Lv: 20

ID: d8
Perk: Cobros por reserva
Requisito: Movimientos financieros vinculados
XP: 1000
Lv: 28

ID: d9
Perk: Preferencias de huésped
Requisito: Tipo de cama, alergias, hora de llegada
XP: 3000
Lv: 55

ID: d10
Perk: Historial de huéspedes
Requisito: Repeat guest flag + historial
XP: 3500
Lv: 65

ID: d11
Perk: Revenue management
Requisito: Pricing dinámico por demanda
XP: 5000
Lv: 80

ID: d12
Perk: Reservas perfectas
Requisito: Ocupación óptima, zero gaps
XP: 12000
Lv: 99

ID: d13
Perk: Multi-chalet booking
Requisito: Distribución cross-property
XP: 25000
Lv: 120

**Nivel 99:** Revenue maximizado. Ocupación óptima con zero gaps y pricing inteligente.
**Nivel 120:** Revenue management cross-property con distribución automática.

SYSTEM SKILLS - Inteligencia del organismo

Magic - MOTOR DE DECISIÓN

**Identidad:** El poder arcano que convierte datos en juicio. Score, prioridad, bloqueos.
**Tipo:** Milestone dominante (se construye más que se usa directamente).

**Prerrequisitos para desbloqueo:** Attack level ≥5 (necesitas hallazgos para que haya algo que decidir).

**Métodos de entrenamiento:**

Nivel: Básico
Método: Implementar capa de scoring
XP/acción: Milestone XP
Condición: Código funcional

Nivel: Eficiente
Método: Ejecutar decisión del motor y verificar resultado
XP/acción: +12
Condición: Motor decidirSistema() activo

Nivel: Avanzado
Método: Calibrar motor con datos de resultado real
XP/acción: +20
Condición: Verificación activa (Prayer ≥50)

**Perks:**

ID: mg1
Perk: Score base
Requisito: imp × dep × prop
XP: 400
Lv: 8

ID: mg2
Perk: Multiplicadores
Requisito: Sistema afectado modifica score
XP: 600
Lv: 15

ID: mg3
Perk: Score efectivo
Requisito: Prioridad de área modifica resultado
XP: 800
Lv: 22

ID: mg4
Perk: Score de ejecución
Requisito: Tiempo × ejecutor × costo
XP: 1000
Lv: 28

ID: mg5
Perk: Bloqueos inteligentes
Requisito: Motor bloquea sin condiciones
XP: 1200
Lv: 35

ID: mg6
Perk: Áreas sucias
Requisito: Mejora bloqueada si hay problemas
XP: 800
Lv: 25

ID: mg7
Perk: Modo automático
Requisito: huéspedes/libre/mantenimiento
XP: 1000
Lv: 30

ID: mg8
Perk: Confidence layer
Requisito: Alta/media/baja confianza
XP: 4000
Lv: 65

ID: mg9
Perk: Calibración
Requisito: % urgentes correctos
XP: 4000
Lv: 75

ID: mg10
Perk: Motor adaptativo
Requisito: Auto-ajuste con datos reales
XP: 12000
Lv: 99

ID: mg11
Perk: Motor multi-chalet
Requisito: Contexto cruzado entre propiedades
XP: 25000
Lv: 120

**Nivel 99:** El motor ordena, tú solo ejecutas. Pesos que cambian solos basados en resultados.
**Nivel 120:** Lo aprendido en chalet A mejora automáticamente chalet B.

Ranged - PRIORIZACIÓN

**Identidad:** Acertar el blanco correcto. El orden de ataque define la victoria.
**Tipo:** Milestone dominante.

**Prerrequisitos para desbloqueo:** Magic level ≥8 (necesitas scoring para poder priorizar).

**Métodos de entrenamiento:**

Nivel: Básico
Método: Implementar separación de tipos
XP/acción: Milestone XP
Condición: decidirSistema distingue tipos

Nivel: Eficiente
Método: Seguir el orden del motor al ejecutar
XP/acción: +10
Condición: Motor con buckets funcional

Nivel: Avanzado
Método: Ejecutar en orden + verificar que el orden fue correcto
XP/acción: +15
Condición: Prayer ≥50

**Perks:**

ID: r1
Perk: Separar problemas de mejoras
Requisito: Motor distingue tipos
XP: 400
Lv: 8

ID: r2
Perk: Palancas
Requisito: Alto impacto + bajo costo
XP: 600
Lv: 15

ID: r3
Perk: Orden fractal
Requisito: Nivel 1 antes que nivel 2
XP: 800
Lv: 22

ID: r4
Perk: 3 buckets de acción
Requisito: Ejecutable + secundaria + bloqueada
XP: 1000
Lv: 30

ID: r5
Perk: Compras filtradas
Requisito: Motor filtra por prioridad
XP: 800
Lv: 22

ID: r6
Perk: Boost por recurrencia
Requisito: Patrón sube prioridad
XP: 3000
Lv: 55

ID: r7
Perk: Hoy/programar/observar
Requisito: Presentación visual de buckets
XP: 2500
Lv: 60

ID: r8
Perk: Priorización total
Requisito: Sin revisión humana necesaria
XP: 12000
Lv: 99

ID: r9
Perk: Cross-chalet
Requisito: Recursos compartidos entre propiedades
XP: 25000
Lv: 120

**Nivel 99:** El motor ordena sin revisión humana. Tú solo ejecutas.
**Nivel 120:** El motor sabe a cuál chalet mandar recursos primero.

Prayer - VERIFICACIÓN

**Identidad:** Fe en tus resultados. Cada verificación post-acción es una oración respondida por datos reales.
**Tipo:** Híbrida (milestone temprano, uso dominante después).

**Prerrequisitos para desbloqueo:** Attack level ≥5 y Magic level ≥8 (necesitas hallazgos + scoring para poder verificar resultados).

**Métodos de entrenamiento:**

Nivel: Básico
Método: Implementar score visible y razón explicada
XP/acción: Milestone XP
Condición: Código funcional

Nivel: Eficiente
Método: Cerrar hallazgo con resultado tipado (4 opciones)
XP/acción: +10
Condición: Cierre no-binario activo

Nivel: Avanzado
Método: Verificar + comparar costo estimado vs real + calibrar
XP/acción: +18
Condición: Perks pr5, pr7 activos

**Perks:**

ID: pr1
Perk: Score visible
Requisito: Número de prioridad en UI
XP: 300
Lv: 5

ID: pr2
Perk: Razón explicada
Requisito: Motor dice por qué recomienda
XP: 500
Lv: 12

ID: pr3
Perk: Razón de bloqueo
Requisito: Usuario sabe por qué algo espera
XP: 500
Lv: 15

ID: pr4
Perk: Cierre no-binario
Requisito: 4 resultados: ok / parcial / mal diagnosticado / recayó
XP: 3500
Lv: 50

ID: pr5
Perk: Costo estimado vs real
Requisito: Comparar predicción con realidad
XP: 3000
Lv: 55

ID: pr6
Perk: Reapertura automática
Requisito: recayó → reabre con bandera
XP: 2500
Lv: 60

ID: pr7
Perk: Calibración del motor
Requisito: % predicciones correctas
XP: 4000
Lv: 72

ID: pr8
Perk: Verificación total
Requisito: Todo hallazgo cerrado tiene resultado
XP: 12000
Lv: 99

ID: pr9
Perk: Cross-chalet trust
Requisito: Confiabilidad por propiedad
XP: 25000
Lv: 120

**Nivel 99:** Feedback loop completamente cerrado. Todo cierre tiene resultado verificado.
**Nivel 120:** Trust score por chalet basado en historial de verificaciones.

Slayer - PATRONES

**Identidad:** Cazar bestias recurrentes. Cada patrón detectado es un monstruo eliminado del sistema.
**Tipo:** Milestone temprano, uso dominante después.

**Prerrequisitos para desbloqueo:** Prayer level ≥12 (necesitas historial de resoluciones para detectar patrones). **Bloqueada** hasta que exista _pushHistorial funcional.

**Métodos de entrenamiento:**

Nivel: Básico
Método: Registrar resolución con historial tipado
XP/acción: +5
Condición: _pushHistorial funcional

Nivel: Eficiente
Método: Detectar patrón manualmente (área+sistema recurrente)
XP/acción: +15
Condición: ≥30 resoluciones en historial

Nivel: Avanzado
Método: Sistema detecta patrón automáticamente
XP/acción: +25
Condición: detectarPatrones() funcional

**Perks:**

ID: sl1
Perk: Historial de resoluciones
Requisito: Log tipado de cada cierre
XP: 400
Lv: 8

ID: sl2
Perk: Historial de compras
Requisito: Compras ejecutadas registradas
XP: 400
Lv: 12

ID: sl3
Perk: detectarPatrones()
Requisito: Agrupar por área+sistema
XP: 3500
Lv: 48

ID: sl4
Perk: Clasificar patrones
Requisito: area / sistema / solución
XP: 3000
Lv: 55

ID: sl5
Perk: Señal ⟳ visual
Requisito: Icono de recurrencia
XP: 2000
Lv: 50

ID: sl6
Perk: Top 3 en Reportes
Requisito: Patrones en resumen
XP: 2000
Lv: 52

ID: sl7
Perk: Predicción de fallas
Requisito: Anticipar dónde va a fallar
XP: 6000
Lv: 82

ID: sl8
Perk: Slayer master
Requisito: Gemma detecta patrones ocultos
XP: 12000
Lv: 99

ID: sl9
Perk: Cross-chalet patterns
Requisito: Aprender de todas las propiedades
XP: 25000
Lv: 120

**Nivel 99:** AI encuentra correlaciones invisibles en el historial.
**Nivel 120:** Lo que falla en chalet A predice lo que fallará en chalet B.

Runecraft - ESTRUCTURA

**Identidad:** Crear las runas del sistema. Schema, FKs, conexiones, backend - la estructura invisible.
**Tipo:** Milestone puro (se construye, no se "usa" repetidamente).

**Prerrequisitos para desbloqueo:** Ninguno. Entrenable desde el inicio (es infraestructura base).

**Métodos de entrenamiento:**

Nivel: Básico
Método: Definir shapes de entidades + persistir estado
XP/acción: Milestone XP
Condición: Código funcional

Nivel: Eficiente
Método: Conectar entidades con FKs reales
XP/acción: Milestone XP
Condición: ≥2 entidades vinculadas

Nivel: Avanzado
Método: Migración automática + versionado de schema
XP/acción: Milestone XP
Condición: Schema versionado activo

**Perks:**

ID: rc1
Perk: Estado global S
Requisito: Variable persistida en localStorage
XP: 300
Lv: 5

ID: rc2
Perk: Shapes definidos
Requisito: Cada entidad tiene campos tipados
XP: 500
Lv: 12

ID: rc3
Perk: FK hallazgo→compra
Requisito: hallazgo_id en compras
XP: 800
Lv: 22

ID: rc4
Perk: FK area→movimiento
Requisito: area_id en movimientos
XP: 800
Lv: 25

ID: rc5
Perk: Historial tipado
Requisito: _pushHistorial con tipo_evento
XP: 1000
Lv: 30

ID: rc6
Perk: Getters normalizados
Requisito: getCfgAreas(), getCfgSistemas()
XP: 600
Lv: 18

ID: rc7
Perk: Schema versionado
Requisito: Migración automática entre versiones
XP: 3500
Lv: 65

ID: rc8
Perk: Backend real
Requisito: API REST + DB server-side
XP: 5000
Lv: 78

ID: rc9
Perk: Auth + seguridad
Requisito: Login, roles, encriptación
XP: 4000
Lv: 85

ID: rc10
Perk: Schema perfecto
Requisito: Extensible, versionado, migraciones auto
XP: 12000
Lv: 99

ID: rc11
Perk: Schema federado
Requisito: Múltiples chalets, una estructura
XP: 25000
Lv: 120

**Nivel 99:** Plugins, extensiones, migraciones. Estructura que escala sin romper datos.
**Nivel 120:** Un schema que gobierna todas las propiedades.

META-SKILLS - Amplificadores

Agility - NAVEGACIÓN UX

**Identidad:** Velocidad y fluidez de movimiento. Navegar debe sentirse como volar, no como caminar.
**Tipo:** Milestone puro.

**Prerrequisitos para desbloqueo:** Ninguno. Entrenable desde el inicio.

**Métodos de entrenamiento:**

Nivel: Básico
Método: Implementar navegación básica (tabs, nav fija)
XP/acción: Milestone XP
Condición: Código funcional

Nivel: Eficiente
Método: Optimizar flujos (zero scroll home, ≤3 taps)
XP/acción: Milestone XP
Condición: Estructura de navegación completa

Nivel: Avanzado
Método: PWA + testing E2E + gestos nativos
XP/acción: Milestone XP
Condición: Service worker activo

**Perks:**

ID: ag1
Perk: 4 tabs principales
Requisito: Estructura/Admin/Operación/Reportes
XP: 400
Lv: 8

ID: ag2
Perk: Nav fija
Requisito: Navegación siempre accesible abajo
XP: 300
Lv: 5

ID: ag3
Perk: Subtabs
Requisito: Drawer de subtabs por sección
XP: 500
Lv: 12

ID: ag4
Perk: Header colapsable
Requisito: Click compacta/expande
XP: 400
Lv: 10

ID: ag5
Perk: CMD central
Requisito: Vista de decisión como home
XP: 800
Lv: 22

ID: ag6
Perk: Dark theme + tokens
Requisito: Sistema de design tokens CSS
XP: 600
Lv: 15

ID: ag7
Perk: Touch ≥48px total
Requisito: Todos los botones accesibles
XP: 2500
Lv: 48

ID: ag8
Perk: Zero scroll home
Requisito: Lo importante visible sin scroll
XP: 3000
Lv: 58

ID: ag9
Perk: PWA instalable
Requisito: Service worker + manifest + offline
XP: 4000
Lv: 72

ID: ag10
Perk: Testing E2E
Requisito: Suite de tests automatizados
XP: 5000
Lv: 82

ID: ag11
Perk: UX nativa
Requisito: Indistinguible de app instalada
XP: 12000
Lv: 99

ID: ag12
Perk: UX replicable
Requisito: Nuevo chalet = misma experiencia
XP: 25000
Lv: 120

**Nivel 99:** Transiciones, gestos, velocidad - todo nativo.
**Nivel 120:** Se replica perfectamente en cualquier nueva propiedad.

Invention - GEMMA / AUTOMATIZACIÓN

**Identidad:** La meta-skill que amplifica todo. Cada automatización es un augment. Gemma vive aquí.
**Tipo:** Híbrida (milestone de construcción + uso cuando automatizaciones operan).

**Prerrequisitos para desbloqueo:** Runecraft level ≥12 (necesitas shapes definidos para que la automatización tenga con qué trabajar).

**Métodos de entrenamiento:**

Nivel: Básico
Método: Implementar automatización (compra auto, score auto)
XP/acción: Milestone XP
Condición: Código funcional

Nivel: Eficiente
Método: Automatización que reemplaza paso manual verificablemente
XP/acción: Milestone XP + bonus
Condición: Paso manual eliminado

Nivel: Avanzado
Método: AI interpreta, sugiere o ejecuta con supervisión
XP/acción: +20
Condición: Gemma piloto activa

**Perks:**

ID: iv1
Perk: Compras auto
Requisito: Hallazgo genera compra
XP: 400
Lv: 8

ID: iv2
Perk: Score automático
Requisito: Sin input manual de prioridad
XP: 600
Lv: 15

ID: iv3
Perk: Modo auto
Requisito: Contexto sin toggle manual
XP: 800
Lv: 22

ID: iv4
Perk: Inferencia accion_tipo
Requisito: Del texto libre al enum
XP: 600
Lv: 18

ID: iv5
Perk: Historial auto
Requisito: Resolver → historial se escribe
XP: 500
Lv: 12

ID: iv6
Perk: Export para AI
Requisito: exportarParaAI() funcional
XP: 1500
Lv: 32

ID: iv7
Perk: CI/CD pipeline
Requisito: Deploy automático al hacer cambios
XP: 3500
Lv: 55

ID: iv8
Perk: Monitoring + alertas
Requisito: Uptime, errores, uso en tiempo real
XP: 3000
Lv: 58

ID: iv9
Perk: Export v2 completo
Requisito: Resultado+patrones+confianza
XP: 2500
Lv: 48

ID: iv10
Perk: Backup automático
Requisito: Respaldos diarios + recovery
XP: 3000
Lv: 62

ID: iv11
Perk: Gemma piloto
Requisito: AI revisa y sugiere
XP: 6000
Lv: 78

ID: iv12
Perk: Gemma gestiona
Requisito: AI opera, Ed supervisa
XP: 12000
Lv: 99

ID: iv13
Perk: Plug and play
Requisito: Nuevo chalet = instalar y funciona
XP: 25000
Lv: 120

**Nivel 99:** Inversión total de control. Gemma opera, Ed supervisa.
**Nivel 120:** Automatización replicada. Instalar y funciona.

Hitpoints - SALUD DEL CHALET

**Identidad:** Los puntos de vida del organismo. Estado real: críticos, backlog, recurrencias, estabilidad.
**Tipo:** Uso puro. No se construye - se alimenta con datos reales.

**Prerrequisitos para desbloqueo:** Attack level ≥1 (necesitas al menos un hallazgo para medir salud).

**Métodos de entrenamiento:**

Nivel: Básico
Método: Registrar hallazgos y resoluciones
XP/acción: Acumula por volumen
Condición: ≥1 hallazgo

Nivel: Eficiente
Método: Mantener ratio de resolución alto + pocos críticos
XP/acción: Bonus por estado ESTABLE/FUERTE
Condición: Salud ≥ ESTABLE

Nivel: Avanzado
Método: Dataset suficiente para AI + multi-chalet
XP/acción: Milestone XP
Condición: ≥500 hallazgos

**Perks:**

ID: hp1
Perk: Primer hallazgo
Requisito: ≥1 hallazgo registrado
XP: 100
Lv: 1

ID: hp2
Perk: 10 hallazgos
Requisito: Datos iniciales
XP: 300
Lv: 5

ID: hp3
Perk: 50 hallazgos
Requisito: Uso consistente
XP: 800
Lv: 15

ID: hp4
Perk: 100 hallazgos
Requisito: Base sólida
XP: 1500
Lv: 25

ID: hp5
Perk: Primera reserva
Requisito: ≥1 reserva
XP: 200
Lv: 3

ID: hp6
Perk: 20 reservas
Requisito: Tracking de ocupación activo
XP: 1000
Lv: 20

ID: hp7
Perk: 50 movimientos
Requisito: Flujo de caja documentado
XP: 1200
Lv: 22

ID: hp8
Perk: 30 resueltos
Requisito: Ciclo problema→solución activo
XP: 1000
Lv: 18

ID: hp9
Perk: 200 hallazgos
Requisito: Dataset serio
XP: 3000
Lv: 40

ID: hp10
Perk: 500 hallazgos
Requisito: Masa crítica operativa
XP: 5000
Lv: 60

ID: hp11
Perk: 1000 hallazgos
Requisito: El organismo respira
XP: 12000
Lv: 99

ID: hp12
Perk: Multi-chalet
Requisito: Datos de 2+ propiedades
XP: 25000
Lv: 120

**Nivel 99:** Memoria profunda. Gemma tiene todo lo que necesita.
**Nivel 120:** Replicación activa en múltiples propiedades.

Estados de salud del chalet

Estado: CRÍTICO
Condición: >5 hallazgos críticos activos

Estado: FRÁGIL
Condición: 3-5 críticos activos

Estado: INESTABLE
Condición: <30% resueltos

Estado: RECUPERANDO
Condición: 30-60% resueltos

Estado: ESTABLE
Condición: 60-85% resueltos

Estado: FUERTE
Condición: >85% resueltos, <2 críticos

6. LÓGICA DE DESBLOQUEO DE SKILLS

Regla general

Una skill no se entrena solo porque está visible. Se entrena cuando ya existe la infraestructura mínima para que las acciones de uso tengan valor real.

Tabla de desbloqueo

Skill: Attack
Visible desde: Siempre
Bloqueada por: -
Desbloqueada cuando: Siempre entrenable
Usage XP habilitada: Sí, desde nivel 1

Skill: Strength
Visible desde: Siempre
Bloqueada por: -
Desbloqueada cuando: Siempre entrenable
Usage XP habilitada: Sí, desde nivel 1

Skill: Defence
Visible desde: Siempre
Bloqueada por: -
Desbloqueada cuando: Siempre entrenable
Usage XP habilitada: Sí, desde nivel 1

Skill: Magic
Visible desde: Siempre
Bloqueada por: Attack < 5
Desbloqueada cuando: Attack ≥ 5
Usage XP habilitada: Sí, cuando motor activo

Skill: Ranged
Visible desde: Siempre
Bloqueada por: Magic < 8
Desbloqueada cuando: Magic ≥ 8
Usage XP habilitada: Sí, cuando buckets activos

Skill: Prayer
Visible desde: Siempre
Bloqueada por: Attack < 5, Magic < 8
Desbloqueada cuando: Attack ≥ 5 + Magic ≥ 8
Usage XP habilitada: Sí, desde cierre no-binario

Skill: Slayer
Visible desde: Siempre
Bloqueada por: Prayer < 12
Desbloqueada cuando: Prayer ≥ 12 + _pushHistorial funcional
Usage XP habilitada: Sí, desde ≥30 resoluciones

Skill: Runecraft
Visible desde: Siempre
Bloqueada por: -
Desbloqueada cuando: Siempre entrenable
Usage XP habilitada: No (milestone puro)

Skill: Agility
Visible desde: Siempre
Bloqueada por: -
Desbloqueada cuando: Siempre entrenable
Usage XP habilitada: No (milestone puro)

Skill: Invention
Visible desde: Siempre
Bloqueada por: Runecraft < 12
Desbloqueada cuando: Runecraft ≥ 12
Usage XP habilitada: Parcial (cuando automatiza)

Skill: Hitpoints
Visible desde: Siempre
Bloqueada por: Attack < 1
Desbloqueada cuando: Attack ≥ 1
Usage XP habilitada: Sí, desde nivel 1

Indicador visual en UI

Las skills bloqueadas se muestran con opacidad reducida y un candado. Al tocar, el panel explica qué falta para desbloquearla y cuánto le falta al prerrequisito.

7. QUESTS

Los quests son objetivos estructurales separados de los perks. Un perk verifica que algo existe en el código. Un quest cambia las reglas del juego: desbloquea skills, abre métodos de entrenamiento, o habilita multiplicadores.

Quests definidos

Quest: Q1: Primer loop completo
Propósito: Hallazgo → resolución → historial
Dependencia: Attack ≥ 5
Qué desbloquea: Slayer desbloqueada, método básico

Quest: Q2: Motor de decisión
Propósito: decidirSistema() funcional
Dependencia: Magic ≥ 15
Qué desbloquea: Ranged desbloqueada, Usage XP en Magic

Quest: Q3: Cierre verificado
Propósito: Cierre no-binario implementado
Dependencia: Prayer ≥ 50
Qué desbloquea: Método eficiente en Prayer, multiplicador en Slayer

Quest: Q4: Dataset mínimo
Propósito: ≥100 hallazgos + ≥20 reservas + ≥50 movimientos
Dependencia: Hitpoints ≥ 25
Qué desbloquea: Multiplicador 1.25× global, método avanzado en Magic

Quest: Q5: Estructura conectada
Propósito: ≥3 FKs activos entre entidades
Dependencia: Runecraft ≥ 25
Qué desbloquea: Invention desbloqueada, método eficiente en Strength

Quest: Q6: Export para AI
Propósito: exportarParaAI() funcional
Dependencia: Invention ≥ 32
Qué desbloquea: Método avanzado en Slayer, abre camino a Gemma

Quest: Q7: Gemma piloto
Propósito: AI revisa y sugiere sobre datos reales
Dependencia: Invention ≥ 78
Qué desbloquea: Método avanzado en todos, multiplicador 1.5×

Regla

Los quests no son perks. Los perks verifican código existente. Los quests se completan conscientemente y cambian la dinámica del juego.

8. ECONOMÍA DE XP

Fuente A - Milestone XP (construir el motor)

Se obtiene al implementar bloques del sistema. Auditado automáticamente contra el HTML. Predomina en niveles bajos pero no desaparece nunca - siempre hay infraestructura que construir.

Fuente B - Usage XP (usar el motor)

Se obtiene por inputs reales y repetidos. Auditado contra el estado JSON (S). Empieza a pesar desde niveles medios (no espera al 99).

Acción: Registrar hallazgo
XP base: +5 a +12
Skill afectada: Attack, Hitpoints

Acción: Resolver hallazgo
XP base: +15
Skill afectada: Attack, Prayer

Acción: Registrar reserva
XP base: +8 a +18
Skill afectada: Defence

Acción: Registrar movimiento
XP base: +5 a +12
Skill afectada: Strength

Acción: Ejecutar decisión del motor
XP base: +12
Skill afectada: Magic, Ranged

Acción: Verificación post-acción
XP base: +10 a +18
Skill afectada: Prayer

Acción: Detectar patrón
XP base: +15 a +25
Skill afectada: Slayer

Acción: Uso diario
XP base: +2
Skill afectada: Hitpoints

Fuente C - Multiplicadores de calidad

Factor: Input pobre/ambiguo
Multiplicador: 0.8×

Factor: Input suficiente
Multiplicador: 1.0×

Factor: Input limpio y completo
Multiplicador: 1.25×

Factor: Input con alta utilidad futura
Multiplicador: 1.5×

Fuente D - Madurez del sistema

La misma acción gana más XP cuando el sistema está mejor construido. Este es el multiplicador invisible que premia construir bien antes de usar mucho.

Condición de madurez: Sin FKs activos
Bonus: 1.0× (sin bonus)

Condición de madurez: ≥2 FKs activos
Bonus: 1.1×

Condición de madurez: Motor de decisión activo
Bonus: 1.15×

Condición de madurez: Cierre no-binario activo
Bonus: 1.2×

Condición de madurez: Export AI funcional
Bonus: 1.3×

Condición de madurez: Gemma activa
Bonus: 1.5×

9. TRANSICIÓN ENTRE CONSTRUCCIÓN Y USO

La transición no es binaria

El v2 definía un switch duro: "antes del 99 se construye, después se usa". En realidad la transición es gradual.

Pesos por fase

Fase: Fundación
Nivel aprox.: 1-30
Peso Milestone XP: 90%
Peso Usage XP: 10%

Fase: Estructura
Nivel aprox.: 30-60
Peso Milestone XP: 70%
Peso Usage XP: 30%

Fase: Operación
Nivel aprox.: 60-85
Peso Milestone XP: 40%
Peso Usage XP: 60%

Fase: Madurez
Nivel aprox.: 85-99
Peso Milestone XP: 20%
Peso Usage XP: 80%

Fase: Explotación
Nivel aprox.: 99-120
Peso Milestone XP: 5%
Peso Usage XP: 95%

Transición por madurez, no solo por nivel

Una skill puede entrar en modo uso-dominante antes del nivel 60 si ya tiene la infraestructura mínima completa. El nivel es un indicador, no una puerta.

**Ejemplo:** Attack puede estar en nivel 35 con todo el formulario completo (subtipo, sistemas, accion_tipo). En ese caso, cada hallazgo registrado con datos limpios ya está generando Usage XP significativa, aunque el nivel sea "bajo".

10. NIVEL 99 Y NIVEL 120

Nivel 99 - Sistema funcional en campo

No significa "ya programé bastante". Significa que esta skill fue suficientemente construida Y suficientemente probada para operar en campo con seriedad. El motor existe, los datos fluyen, los ciclos se cierran.

Nivel 120 - Producto profesional

Significa que esta skill no solo funciona: es profesional, robusta, refinada, escalable y vendible. Puede replicarse en otro chalet sin re-ingeniería.

11. CASHSTACK

Caja real visible como moneda/poder de acción.

- **Cálculo:** S.caja - pendientes por pagar = cashstack
- **Colores:** rojo si negativo, amarillo si <Q2,000, verde si sano
- **Ubicación:** Tab Inventario + Stats

12. UX/UI DEL JUEGO

Por qué el diseño importa

La UI no es decorativa. Es un mecanismo psicológico para empujar el comportamiento correcto.

- La vista tipo RuneScape genera compulsión de completitud - ver 11 skills juntas con números crea tensión natural de progreso.
- Los números visibles empujan naturalmente al avance.
- Las skills bloqueadas con candado generan curiosidad sobre qué falta.
- El diseño comunica orden, aspiración y claridad.

Vista principal (Skills tab)

- Grid 3×4 tipo RS skill tab, orden por columnas como el original.
- Icono + nivel grande + barra de XP.
- Cape badge visible en 99/120.
- Skills bloqueadas con opacidad reducida + candado.

Vista de detalle (panel al tap)

- Nivel + XP + progreso hacia siguiente.
- Definición 99 vs 120 visible.
- Prerrequisitos de desbloqueo (si bloqueada).
- Métodos de entrenamiento disponibles (básico/eficiente/avanzado).
- Breakdown: Milestone XP vs Usage XP.
- Perks:  Unlocked → ◇ Next up →  Locked.
- Quests relevantes que mejorarían el entrenamiento.

Inventario (antes Sync)

- Salud del chalet + Cashstack en header.
- Upload de HTML para auditoría automática.
- Upload de JSON para datos de uso.
- XP drops staggered al auditar.
- Level ups encadenados (tap para siguiente).

Level up screen

- Pantalla completa con sparkles.
- Icono de la skill + "LEVEL UP! → N".
- Perk desbloqueado visible.
- Si 99: "Sistema funcional en campo".
- Si 120: "Producto formal vendible".
- Queue de level ups (tap → siguiente).

13. AUDITORÍA

Auditoría estructural (contra HTML)

Verifica qué funciones, shapes y UI elements existen en el código. Desbloquea o revoca perks.

Auditoría operativa (contra JSON del estado)

Verifica datos reales: hallazgos, reservas, movimientos, resoluciones. Alimenta Usage XP y Hitpoints.

Auditoría de desbloqueo

Verifica si una skill cumple sus prerrequisitos para pasar de bloqueada a entrenable.

Proceso

1. El HTML del SOC se sube al tab Inventario.
2. El motor extrae funciones y schema.
3. Cada perk tiene un `check` function que verifica presencia real.
4. Si existe → perk se desbloquea + XP otorgado.
5. Si no existe → perk se revoca.
6. Si se sube JSON → Hitpoints + Usage XP se verifican.

Regla

El brief fuente define las condiciones. El HTML ejecuta y renderiza. La auditoría verifica. No se puede hacer trampa.

14. LO QUE FALTA IMPLEMENTAR

Item: Lógica de desbloqueo en motor
Prioridad: Alta
Dependencia: Tabla de prerrequisitos (sección 6)

Item: Usage XP (Fuente B)
Prioridad: Alta
Dependencia: Integración SOC→Skills

Item: Quests como sistema separado
Prioridad: Alta
Dependencia: Definición de quests (sección 7)

Item: Multiplicadores de madurez (Fuente D)
Prioridad: Media
Dependencia: Motor de entrenamiento

Item: Métodos de entrenamiento visibles en UI
Prioridad: Media
Dependencia: Fichas de skills completas

Item: Transición gradual de pesos
Prioridad: Media
Dependencia: Motor de XP dual

Item: Indicador visual de skill bloqueada
Prioridad: Media
Dependencia: UI update

Item: Multiplicadores de calidad (Fuente C)
Prioridad: Baja
Dependencia: Definir qué es "limpio" por tipo

Item: Racha diaria (+2 XP)
Prioridad: Baja
Dependencia: Tracking de último uso

15. FRASE OPERATIVA

> *"XP = evidencia de realidad. El sistema no mide intención - mide lo que existe."*
> *"Los quests abren mejores métodos de entrenamiento, no solo más perks."*
> *"La meta no es maxear por maxear. Es maxear porque maxear significa producto real."*
> *"El verdadero recurso escaso no son features - son inputs reales de campo."*
