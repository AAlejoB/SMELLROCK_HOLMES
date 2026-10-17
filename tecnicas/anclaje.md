# Ficha: Anclaje («el primer número que ves te queda pegado»)

> Estado: borrador
> Última revisión: 16-10-2026

## Origen
**Tversky y Kahneman, 1974** (revista *Science*). Hacían girar una rueda que
caía en 10 o en 65 y después preguntaban qué % de los países de la ONU eran
africanos. Los que habían visto 10 decían, en promedio, 25 %; los que habían
visto 65, 45 %. **Un número que no tenía nada que ver movió la respuesta.**
[EXPERIMENTO]

## Cómo evolucionó
- **El anclaje al estimar se replica bien.** En la réplica de 36 laboratorios
  de Klein y otros (2014, «Many Labs») fue de los efectos más fuertes.
  [EXPERIMENTO]
- **El anclaje sobre cuánto pagarías, más débil.** Ariely, Loewenstein y
  Prelec (2003) pidieron anotar los últimos dígitos de un número personal, y
  quienes tenían números altos ofrecían más por los mismos productos.
  Fudenberg, Levine y Maniadis (2012) y Maniadis, Tufano y List (2014) lo
  repitieron y encontraron **efectos mucho más chicos**. Otros lo
  discutieron y otra réplica sí lo encontró. Lectura honesta: con números al
  azar, el efecto sobre precios **existe a veces y es chico**. [NO REPLICA]
  parcial.
- **En tiendas, el ancla que importa no es al azar: es el precio de
  referencia.** El «antes» tachado, el primer precio que se ve, el precio de
  la competencia. Un tachado ayuda cuando el descuento es grande y creíble
  (Krishna y otros, 2002, [META], vía `negocio-ar`), y los carteles de oferta
  pierden fuerza cuantos más productos los tienen (Anderson y Simester, 2001,
  [CAMPO], vía `negocio-ar`).

## La versión simple
**El primer precio que ve la persona arma su idea de «caro» y «barato».**
Elegí a propósito qué se ve primero: el orden del catálogo, el tamaño que
aparece primero y el precio de referencia. Y que ese primer número sea
verdadero.

## Cuándo sirve / cuándo no
- Sirve: para decidir el **orden del catálogo** (empezar por los más caros
  hace que los del medio parezcan razonables; empezar por los baratos, que los
  caros asusten). Es la pregunta 9 de `preguntas/abiertas.md`.
- Sirve: para ordenar presentaciones (100 ml primero hace que el 50 ml parezca
  accesible).
- No sirve: si la persona ya sabe el precio (lo vio en otra tienda): el ancla
  es ese precio, no el tuyo.
- Cuidado: un ancla muy alta puede espantar a quien busca algo accesible
  antes de que llegue a verlo (ver `casos/02`).

## En otros rubros
| Rubro | ¿Viaja? | Cómo |
|---|---|---|
| Perfumería | Sí | Orden del catálogo, frasco grande primero, precio por ml |
| Belleza | Sí | El kit completo como referencia del producto suelto |
| Ropa | Sí | La prenda «premium» de la colección al principio |
| Mayoristas | Sí | Precio por bulto al lado del precio unitario de lista |

## Límite ético y legal (Argentina)
- **Nada de «antes» que nunca se cobró.** El tachado sale de un historial real
  de precios (regla dura 2 de `CLAUDE.md`; Lealtad Comercial, DNU 274/2019).
- **Nada de ofertas permanentes** con un «antes» eterno: el ancla deja de ser
  verdadera.
- **Cuotas y precio:** mostrar sólo la cuota que se ofrece de verdad, con el
  total. La relación entre el precio en efectivo y el de tarjeta tiene un
  tema legal abierto (ver `casos/05`).

## Cómo se mide
- **Qué se mira:** «abrió una ficha» (`ficha_abierta`, ya existe en ST) y
  «quiso comprar» (WhatsApp, con todos los caminos: ver `casos/03`).
- **A/B del orden del catálogo** (mayor a menor contra otro orden) sobre
  «abrió una ficha»: para ver de 30 % a 35 % hacen falta ~1.400 visitas por
  versión (cuenta con `numeros.js`). Si ST no las junta en 6-8 semanas: antes
  y después, con el rango de cada período y anotando qué más cambió.
- **Con personas:** mostrar el catálogo y preguntar «¿cuánto creés que sale un
  perfume acá, más o menos?». Comparar entre dos órdenes.

## Preguntas de QA (sin sí ni no)
- «Mirando esta pantalla, ¿cuánto creés que gastarías acá?» → el rango que
  dicen, según qué vieron primero.
- «De estos tres, ¿cuál te parece caro y por qué?» → con qué lo comparan
  (otra tienda, el de al lado, lo que pagaron antes).
- «La última vez que compraste un perfume, ¿cómo supiste si el precio estaba
  bien?» → qué usan como referencia.

## Lo que no sabemos
- ¿Por qué el catálogo de ST arranca por «precio: mayor a menor»? → Alejo
  (pregunta 9).

## Fuentes
- Tversky, A. y Kahneman, D. (1974). *Judgment under uncertainty: heuristics
  and biases.* Science, 185. [EXPERIMENTO]
- Klein, R. y otros (2014). *Investigating variation in replicability: a
  "Many Labs" replication project.* Social Psychology, 45(3). [EXPERIMENTO]
- Ariely, D., Loewenstein, G. y Prelec, D. (2003). *Coherent arbitrariness.*
  Quarterly Journal of Economics, 118(1). [EXPERIMENTO]
- Fudenberg, D., Levine, D. y Maniadis, Z. (2012). *On the robustness of
  anchoring effects in WTP and WTA experiments.* AEJ: Microeconomics.
  [NO REPLICA]
- Maniadis, Z., Tufano, F. y List, J. (2014). *One swallow doesn't make a
  summer.* American Economic Review, 104(1). [NO REPLICA] (discutido por Data
  Colada, https://datacolada.org/7)
- Krishna, A. y otros (2002) y Anderson, E. y Simester, D. (2001), vía skill
  `negocio-ar` de la plataforma (7-10-2026). [META] [CAMPO]
