# Caso 02: El gancho visual del catálogo

> Abierto el 16-10-2026. Estado: **primera pasada** (medido desde afuera en
> celular; falta probar con personas y medir con la pestaña Holmes).
> Escrito con los cinco pasos del [foro 02](../foro/02-como-se-investiga.md)
> (Problema, Plan, Datos, Análisis, Conclusión).

## La pregunta, en palabras de Alejo

¿Cómo funciona un gancho visual en un catálogo de perfumes?

## 1. Problema

En el celular, quien entra al catálogo decide en segundos si sigue mirando.
**¿Qué hace que el ojo se frene y el dedo toque una tarjeta?** Y en ST, ¿qué
ve esa persona en la primera pantalla y en los primeros scrolls?

## 2. Plan

- Medir la primera pantalla del catálogo (375 × 812 px, un celular común) en
  ST, en Grid (ropa, el ejemplo de Alejo) y en Juleriaque (la perfumería más
  grande del país). Sólo mirando, sin tocar botones de compra ni WhatsApp.
- Cruzarlo con tres técnicas: [aislamiento](../tecnicas/aislamiento.md),
  [posición en la lista](../tecnicas/posicion-en-la-lista.md) y
  [primera impresión](../tecnicas/primera-impresion.md).

## 3. Datos (16-10-2026, celular 375 × 812)

| | ST | Grid (zapatillas) | Juleriaque (fragancias) |
|---|---|---|---|
| Columnas | **1** (tarjeta grande; hay botón «ver en lista») | 2 | 2 |
| Dónde empieza el primer producto | 445 px (antes: logo, lema, horario, buscador, filtros por género, 3 atajos, ordenar) | ~260 px (logo, envío y cuotas, ordenar) | ~580 px (título y texto de la categoría) |
| Primer precio | **918 px: fuera de la primera pantalla** | 390 px: se ven 2 precios, con cuotas y envío | ~860 px: justo abajo |
| Productos que se ven en la primera pantalla | **la foto de 1, cortada** | 2 enteros y el comienzo de otros 2 | el comienzo de 2 |
| Alto de cada tarjeta | ~700 px: **5 perfumes = 4,5 pantallas de scroll** | ~500 px por fila de 2 | fila de 2 |
| Orden por defecto | **Precio: mayor a menor** | El de la tienda (novedades y rotación) | Relevancia |
| Cintas | **125 de 200 tarjetas (62 %)** tienen alguna: 96 «Nuevo», 37 «Último» | Pocas: «-35 %» en algunas, «New in» | «55 %», «50 %» en algunas |
| Tarjetas sin foto | 26 de 200; **una en el 2.º lugar** | No se vio | No se vio |
| Otras cosas en la tarjeta | «N mirando ahora» en 175 de 200 (ver caso 01, 1.c), ojito con número, «Comparar», notas de salida, corazón y base | Talles, marca, precio, cuotas, envío, «Agregar al carrito» | Descuento, marca, precio |

Lo bueno de ST, que las otras no tienen: la ayuda para elegir («¿No sabés
cuál? 4 preguntas»), el horario en vivo y las notas del perfume en la tarjeta.

## 4. Análisis

**El gancho visual tiene tres palancas. ST hoy juega en contra en las tres.**

1. **Aislamiento (lo distinto se ve, si es poco).** Con 62 % de tarjetas con
   cinta y 175 de 200 con «mirando ahora», nada se destaca: el ojo no tiene
   dónde frenar. Anderson y Simester (2001) lo midieron con carteles de
   oferta: cuantos más productos los tienen, menos vende cada uno.
2. **Posición (lo primero se mira más).** Los primeros lugares los ocupa lo
   más caro (orden por precio) y, en el 2.º, una tarjeta sin foto. Ursu (2018)
   mostró que la posición decide a qué se le hace clic. Arriba conviene lo que
   más gente quiere ver. Lo caro primero puede servir de ancla (Kahneman), pero
   eso es una hipótesis: hay que probarla, no suponerla.
3. **Fluidez (lo fácil de recorrer gusta más).** Con una columna y tarjetas
   de 700 px, comparar dos perfumes pide scroll. Grid y Juleriaque muestran 2
   por fila, con el precio en el mismo lugar en todas. Reber, Schwarz y
   Winkielman (2004): lo que se procesa fácil se percibe como más lindo y más
   confiable.

**Y en perfumería, el gancho es el frasco.** No se puede oler (49 % lo dice,
CACE 2025), así que la foto del frasco, a escala y sobre un fondo parejo,
hace de «vidriera». Una tarjeta con «Foto próximamente» arriba es una
vidriera vacía.

## 5. Conclusión

### Para ST (puntual)
Hipótesis para probar, en este orden (de más barata a más cara):
1. **Sacar las tarjetas sin foto de los primeros lugares** (al final, o
   escondidas hasta tener foto).
2. **Orden por defecto «más buscados»** (sale de `ficha_abierta`, cuando la
   pestaña Holmes junte datos) en vez de «precio: mayor a menor».
3. **Cintas con cupo**: «Nuevo» sólo los últimos 15-30 días, y el total de
   cintas por debajo de 1 de cada 5 tarjetas.
4. **Vista de 2 columnas por defecto en el celular**, con precio arriba del
   pliegue. ST ya tiene la otra vista: es cambiar cuál arranca.

Cómo se mide: con la pestaña Holmes, «ficha abierta por visita» antes y
después de cada cambio, con la regla
[mostrar-un-dato](../reglas/mostrar-un-dato.md). **Un cambio por vez**, para
saber cuál movió el número. Antes, una prueba de 5 segundos con 5 personas
(rol `qa-preguntas`): «¿qué perfume te acordás?».

El «mirando ahora» no se toca (decisión de Alejo, caso 01). Para la
plataforma, no se copia.

### Para cualquier tienda (general)
> **Regla 03 (borrador): La primera pantalla del listado muestra al menos 2
> productos enteros con su precio.** Los primeros lugares son para lo que más
> se busca y siempre con foto real. Las cintas tienen cupo (menos de 1 de cada
> 5). Todo lo que la tarjeta muestra tiene que ayudar a elegir; si no, sale.

Pasa a `reglas/` cuando se pruebe en ST.

## Preguntas abiertas
Ver `preguntas/abiertas.md` 9 a 11.

## Técnicas usadas
- [aislamiento](../tecnicas/aislamiento.md)
- [posicion-en-la-lista](../tecnicas/posicion-en-la-lista.md)
- [primera-impresion](../tecnicas/primera-impresion.md)
- Pendiente de ficha: **fluidez** (Reber, Schwarz y Winkielman, 2004),
  **anclaje** (Tversky y Kahneman, 1974).

## Fuentes
- Mediciones propias en stperfumeria.com, grid.com.ar/calzado/zapatillas y
  juleriaque.com.ar/fragancias, 16-10-2026, Chromium a 375 × 812. [PROPIO]
- Reber, R., Schwarz, N. y Winkielman, P. (2004). *Processing fluency and
  aesthetic pleasure.* Personality and Social Psychology Review, 8(4).
  [CONSENSO, revisión de experimentos]
- CACE 2025, vía `negocio-ar`: 49 % no compra online por no poder ver ni oler.
  [MERCADO]
