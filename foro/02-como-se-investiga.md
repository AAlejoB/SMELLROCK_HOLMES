# Foro 02: ¿Cómo se investiga una pregunta de ventas?

> Abierto el 16-10-2026. Mismo formato que el foro 01: los autores de la
> [biblioteca base](../fuentes/biblioteca-base.md) «postean» su idea con
> nuestras palabras, Holmes cierra y Alejo elige.

## La pregunta que se discute

«¿Por qué alguien que llega por internet mira y no compra?» (caso 01).

---

### 💬 Spiegelhalter
> Ciclo de cinco pasos: **Problema** (qué queremos saber, en una oración),
> **Plan** (qué medir y cómo), **Datos** (juntarlos), **Análisis** (con su
> incertidumbre), **Conclusión** (qué hacemos). Y vuelta a empezar.

### 💬 Kohavi
> Si querés saber si un cambio funciona, la única prueba firme es un
> experimento: mitad ve una versión, mitad la otra, al azar. Lo demás son
> pistas.

### 💬 Fitzpatrick y Krug
> Con pocas visitas, el A/B tarda meses. Sentate con 5 personas: pediles que
> compren un perfume para regalar y mirá dónde se traban. Preguntá por lo que
> hicieron la última vez, no por lo que harían.

### 💬 Christensen
> Antes de todo: ¿qué trabajo vino a hacer esa persona? Quien busca un regalo
> y quien busca «su» perfume se traban en lugares distintos.

### 💬 Croll y Yoskovitz
> Elegí **una** métrica que importe ahora (llegó → escribió por WhatsApp) y
> mové sólo esa. Lo demás, después.

### 💬 Holmes cierra
No compiten: cada uno sirve en un momento. La pregunta es en qué orden.

---

## Los tres métodos

### A. Escalonado: primero el porqué, después el cuánto (recomendado)
1. **Personas** (Krug, Fitzpatrick, Christensen): 5 personas, una tarea, mirar
   dónde se traban. Da el **porqué**. Una semana.
2. **Datos que ya hay** (Croll): una métrica, antes y después del cambio, con
   su rango. Da el **cuánto, más o menos**.
3. **A/B** (Kohavi): sólo cuando la tienda junta las visitas (ver
   `leer-numero`). Da **la prueba firme**.

- 👍 Sirve con poco tráfico, que es lo normal en una tienda chica. Aprende
  rápido y barato.
- 👎 Los pasos 1 y 2 no prueban causa: pueden engañar si cambió otra cosa a la
  vez.

### B. El ciclo completo (PPDAC de Spiegelhalter)
Cada pregunta pasa por los cinco pasos, escritos, antes de tocar nada.

- 👍 Ordenado y completo. Deja todo documentado para la próxima tienda.
- 👎 Más lento. Para preguntas chicas es demasiado.

### C. Primero los datos (Lean Analytics)
Elegir la métrica, medirla bien unas semanas y recién ahí preguntarse por qué.

- 👍 Evita discutir de intuiciones. Encaja con un SaaS de métricas.
- 👎 Hoy ST no mide las llegadas (caso 01): habría que esperar semanas antes de
  aprender nada.

### La recomendación de Holmes: **A, con la plantilla de B**
Se investiga en el orden de A, y cada caso se escribe con los cinco pasos de B
(Problema, Plan, Datos, Análisis, Conclusión), así queda reutilizable.

## Lo que se decide acá
- [ ] Alejo elige A, B o C.
- [ ] Lo elegido pasa a `CLAUDE.md` § El método y a la plantilla de casos.
