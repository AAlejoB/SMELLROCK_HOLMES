# Biblioteca base de SMELLROCK HOLMES

> Armada el 16-10-2026. Los eligió Claude: Alejo no tenía preferencia.
> **Alejo no tiene comprados estos libros.** Lo que sigue sale de material
> público (reseñas, papers y charlas de los autores) y está escrito con
> nuestras palabras: idea, autor y año. Nunca texto copiado.
> Si Alejo compra alguno, pasa a `biblioteca.md` y se puede profundizar.

## Cómo se eligieron

1. **Que se use en serio**: libro de texto de carreras o MBA, o referencia de
   quienes miden ventas en empresas grandes.
2. **Que tenga evidencia detrás**: experimentos, datos de compras reales o
   práctica medida. Si una parte no se replicó, se dice.
3. **Que sirva a uno de los tres roles** (investigar, leer números, QA).
4. Al menos uno de Argentina.

Sobre «el más usado del mundo»: no hay un ranking público confiable de libros
por universidad. Que *Dirección de marketing* sea «el más usado» lo dice su
editorial [VENDOR]; sí aparece en los catálogos de universidades de la región
(Costa Rica, Nicaragua, El Salvador, Perú, Mendoza).

---

## Para el investigador de marketing

### 1. Kotler y Keller, *Dirección de marketing* (Marketing Management)
- **Año:** primera edición de Kotler en 1967; con Keller desde 2006. Sigue
  reeditándose.
- **La idea:** antes de vender, decidir **a quién** (segmentar y elegir) y
  **cómo querés que te recuerden** (posicionar). Después se ordena todo en
  cuatro palancas: producto, precio, plaza (dónde y cómo llega) y promoción.
- **Qué tomamos:** el mapa. Cada caso de Holmes se ubica en una palanca. «Mira
  y no compra» toca plaza (cómo llega) y promoción (qué dice la portada).
- **Evidencia:** [CONSENSO]. Es un manual, no un experimento.

### 2. Cialdini, *Influencia* (Influence)
- **Año:** 1984; edición ampliada en 2021.
- **La idea:** siete atajos con los que decidimos sin pensar mucho:
  reciprocidad (devolver un favor), compromiso (ser coherentes con lo que ya
  dijimos), prueba social (hacer lo que hacen otros), simpatía, autoridad,
  escasez y unidad (los «nuestros»; se sumó en 2021).
- **Qué tomamos:** la lista de técnicas a fichar.
- **Cuidado:** escasez y prueba social son **las que más se falsean** (relojes
  que se reinician, «N mirando ahora»). Cada ficha lleva su límite (regla
  dura 2).
- **Evidencia:** [CONSENSO] armado sobre experimentos; algunos son viejos y
  chicos.

### 3. Kahneman, *Pensar rápido, pensar despacio*
- **Año:** 2011 (Nobel de Economía 2002).
- **La idea:** tenemos un modo rápido e intuitivo y uno lento y esforzado. El
  rápido usa atajos: el primer número que vemos nos ancla (anclaje), perder
  duele más que ganar lo mismo (aversión a la pérdida) y lo mismo dicho de otra
  forma decide distinto (encuadre).
- **Qué tomamos:** anclaje y encuadre para precios y cuotas («$143.333 por
  mes» contra «$430.000»).
- **Cuidado:** el capítulo de *priming* (que una palabra cambie lo que hacés
  después) **no se replicó**, y el propio Kahneman lo reconoció en público.
  [NO REPLICA] para esa parte. La teoría de las pérdidas (Kahneman y Tversky,
  1979) sí está firme.
- **Evidencia:** [EXPERIMENTO], con esa excepción.

### 4. Sharp, *Cómo crecen las marcas* (How Brands Grow)
- **Año:** 2010. Instituto Ehrenberg-Bass, Universidad de Australia del Sur.
- **La idea:** las marcas crecen **sumando compradores**, no haciendo más
  fieles a los que ya tienen. Para eso necesitan dos cosas: que te recuerden en
  el momento de comprar (disponibilidad mental) y que sea fácil comprarte
  (disponibilidad física).
- **Qué tomamos:** para una tienda chica, ser fácil de encontrar y de comprar
  le gana a un programa de puntos. Es la base del caso 01: cada pregunta que
  la página no contesta le quita «disponibilidad física».
- **Evidencia:** [CAMPO]: datos de paneles de compra de muchas categorías y
  países.

### 5. Christensen y otros, *Compitiendo contra la suerte* (Competing Against Luck)
- **Año:** 2016. Christensen era profesor de la Escuela de Negocios de Harvard.
- **La idea:** la gente no compra productos: **contrata algo para hacer un
  trabajo** en su vida. Un perfume se contrata para regalar, para una cita o
  para «oler a mí».
- **Qué tomamos:** cada caso pregunta primero «¿qué trabajo vino a hacer esta
  persona?». Regalo y uso propio piden páginas distintas.
- **Evidencia:** [CONSENSO] con casos.

## Para el lector de números

### 6. Kohavi, Tang y Xu, *Experimentos online confiables* (Trustworthy Online Controlled Experiments)
- **Año:** 2020. Los autores dirigieron los experimentos de Microsoft, Google
  y LinkedIn.
- **La idea:** un A/B sirve sólo si se decide **antes** qué se mide y cuántas
  visitas hacen falta, y no se espía para cortarlo cuando conviene. La mayoría
  de las ideas, probadas, no mejoran nada. Y la «ley de Twyman»: el número que
  parece demasiado interesante casi siempre es un error de medición.
- **Qué tomamos:** la skill `leer-numero` sale de acá.
- **Evidencia:** [DURA]: miles de experimentos reales.

### 7. Croll y Yoskovitz, *Lean Analytics*
- **Año:** 2013.
- **La idea:** en cada etapa del negocio hay **una métrica que importa**. Las
  demás distraen. Y hay métricas de vanidad (suben y hacen sentir bien, pero no
  cambian ninguna decisión) contra métricas que sí hacen actuar.
- **Qué tomamos:** el «ojito con 2019» de las tarjetas de ST es de vanidad;
  «de cada 20 que llegan, 1 escribe» es accionable.
- **Evidencia:** [CONSENSO] con casos de startups.

### 8. Gigerenzer, *Riesgo calculado* (Calculated Risks / Reckoning with Risk)
- **Año:** 2002. Instituto Max Planck, Berlín.
- **La idea:** los porcentajes confunden hasta a los médicos. Dicho como
  **frecuencias naturales** («3 de cada 60») la misma información se entiende
  mucho mejor.
- **Qué tomamos:** el método C del foro 01.
- **Evidencia:** [EXPERIMENTO]: probado con médicos, jueces y estudiantes.

### 9. Spiegelhalter, *El arte de la estadística* (The Art of Statistics)
- **Año:** 2019. Universidad de Cambridge.
- **La idea:** investigar es un ciclo de cinco pasos: **Problema, Plan,
  Datos, Análisis, Conclusión** (PPDAC). Y todo número se cuenta con su
  incertidumbre, sin esconderla.
- **Qué tomamos:** el método B del foro 02 y el ciclo de cada caso.
- **Evidencia:** [CONSENSO], escrito por un estadístico de primera línea.

### 10. Knaflic, *Storytelling con datos* (Storytelling with Data)
- **Año:** 2015. Se apoya en Tufte (1983) y en su experiencia en Google.
- **La idea:** un gráfico, una idea. Sacar todo lo que no ayuda (bordes,
  colores de más, 3D). Decir con un título la conclusión, no el tema.
- **Qué tomamos:** cómo dibujar lo que se elija en el foro 01.
- **Evidencia:** [CONSENSO].

## Para el crack de QA

### 11. Fitzpatrick, *The Mom Test*
- **Año:** 2013.
- **La idea:** hasta tu mamá te miente si le preguntás si tu idea es buena. Hay
  que preguntar por **lo que hizo** (el pasado, los hechos), no por lo que
  opina ni por lo que haría.
- **Qué tomamos:** la regla central de `qa-preguntas`.
- **Evidencia:** [CONSENSO].

### 12. Krug, *No me hagas pensar* (Don't Make Me Think)
- **Año:** 2000; tercera edición en 2014.
- **La idea:** cada vez que una página te hace pensar («¿esto se toca?»,
  «¿cuánto sale el envío?») perdés gente. Y para encontrar los problemas
  alcanza con mirar a pocas personas usarla, seguido y barato.
- **Qué tomamos:** las 4 preguntas de la primera pantalla y las pruebas con 5
  personas.
- **Evidencia:** [CONSENSO], con base en Nielsen y Landauer (1993).

## De Argentina

### 13. Wilensky, *La promesa de la marca*
- **Año:** fines de los 90; quinta edición en 2014. Wilensky es una
  referencia del marketing estratégico en Argentina.
- **La idea:** una marca es **una promesa**, y vale lo que vale cumplirla.
- **Qué tomamos:** conecta con la ley: la publicidad obliga (Ley 24.240,
  art. 8). Lo que la portada promete, se cumple.
- **Evidencia:** [CONSENSO].

### Cuidado con el neuromarketing de conferencia
En la región son muy populares los libros y charlas de neuromarketing que
prometen «venderle a la mente». Muchas de sus afirmaciones no tienen un
estudio publicado detrás, o lo estiran mucho más allá de lo que midió. Se usa
sólo lo que tenga fuente revisable; lo demás va como hipótesis.

---

## Si Alejo quiere comprar alguno

Para lo que vienen a hacer con Lautaro y Luka (métricas para tiendas), el orden
sería:

1. **Kohavi** (6): el manual de medir bien. Es el que más plata ahorra.
2. **Sharp** (4): cambia la cabeza sobre cómo crece una tienda.
3. **Krug** (12): corto, se lee en una tarde, y sirve el lunes.

## Fuentes de esta lista
- Pearson, ficha de *Marketing Management* 15.ª ed. (dice «el más usado del
  mundo») [VENDOR].
- Catálogos de bibliotecas: Universidad de Costa Rica, UNI Nicaragua, UJMD
  El Salvador, Universidad del Pacífico (Perú), UNCuyo. [MERCADO]
- Ámbito (1-6-2014) y Mercado (agosto 2014), sobre la quinta edición de
  *La promesa de la marca*. [MERCADO]
