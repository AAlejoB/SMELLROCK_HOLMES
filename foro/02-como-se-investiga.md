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

## La charla (16-10-2026, sigue abierta)

Página para charlarlo, con el caso 03 recorrido por los tres métodos y una
calculadora de visitas: artifact privado «Cómo investiga Holmes» (lo tiene
Alejo).

**Lo que dijo Alejo:**
- Se inclina por **B**. Empezar por A y después meter B tampoco le parece mal.
- **Alejo no trabaja en la perfumería.** Las personas del local las tendría
  que ir anotando Lautaro.
- **Conseguir 5 personas en un mismo día que compren perfume es difícil.**
  Un día así sería algo como el Día de la Madre, y ahí va demasiada gente.

**Lo que salió de la página:**
- C no es malo: arranca hoy cuando el dato ya existe y está bien contado
  (casos 04 y 05). En los casos 01 a 03 hay que esperar o arreglar el conteo.
- El paso de B «¿qué cuenta este número?» encontró el error de `wa_click`
  (caso 03) y que «vistas» no son visitas (caso 01).

**Propuesta en la mesa (no elegida):** B como plantilla de cada caso. En
«Datos», primero lo que ya existe; las 5 personas **no tienen que ser el mismo
día**: se juntan de a una en 1 o 2 semanas. Pueden ser conocidos de Alejo que
compran perfume (no hace falta que sean clientas de ST) y, en el local, una
pregunta por clienta que anota Lautaro. En fechas pico no: hay mucha gente y
compran para regalar, que no es lo de siempre.

**Lo que agregó Alejo después:** en el local ya se anota cada venta (el
«Reemplazo de hoja»: qué se llevó, quién y si pagó en efectivo, MP o Posnet) y
el panel tiene el «Resumen del día», por semana. Y el POS nuevo lo va a anotar
más prolijo. O sea: **las ventas no hay que anotarlas a mano**. A mano queda
sólo el porqué (las preguntas a personas).

**La versión de 3 renglones (propuesta, para dudas chicas):**
1. **Pregunta:** qué queremos saber, dicho de forma que se pueda medir.
2. **Miramos:** qué dato o qué personas, y qué cuenta ese número.
3. **Salió:** el resultado con su rango, y qué hacemos con eso.

**Lo que falta charlar:**
- ¿Quién consigue las personas y cuántas por semana se pueden?
- ¿Lautaro puede anotar en el local? ¿Con qué (papel, una planilla, el
  panel)?
- ¿B completo para todo, o una versión de 3 renglones para dudas chicas?

## Lo que se decide acá
- [ ] Alejo elige A, B o C.
- [ ] Lo elegido pasa a `CLAUDE.md` § El método y a la plantilla de casos.
