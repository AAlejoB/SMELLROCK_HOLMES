# Dónde estamos

> Leé esto después de `CLAUDE.md`. Se actualiza al cerrar cada sesión.
> Última: 17-10-2026 (respuesta de la plataforma sobre sus eventos).

## Hecho
- Forma del proyecto elegida por Alejo: fichas + casos + reglas + preguntas,
  con 3 roles (`investigar`, `leer-numero`, `qa-preguntas`).
- Biblioteca base de 13 libros (`fuentes/biblioteca-base.md`). Alejo no tiene
  libros comprados todavía.
- **Regla elegida:** [mostrar-un-dato](reglas/mostrar-un-dato.md) (C arriba,
  B para decidir, A en detalle), con su código en `herramientas/numeros.js`.
- **En ST**: pestaña «🔎 Holmes» en el panel, sólo para la cuenta lab, con los
  eventos nuevos `llegada` y `ficha_abierta` (repo de ST, `[HOLMES]`, regla
  #55). Desde ahí se miden los casos 01 y 02.
- Casos 01 a 05 en primera pasada: «mira y no compra», «gancho visual del
  catálogo», «cansa comprar por WhatsApp», «conocer un perfume por el nombre»
  y «cuotas y Mercado Pago».
- Fichas (9): primera impresión, sobrecarga de opciones, aislamiento, posición
  en la lista, fricción y esfuerzo, prueba social, fluidez, anclaje, dolor de
  pagar.
- **Hallazgo del caso 03:** en ST, `wa_click` cuenta de menos. Arreglado el
  mismo día: `wa_intento` cuenta los 12 caminos a WhatsApp con su origen, en
  producción desde el 16-10 23:46. Corrección: el botón de la tarjeta del celu
  está escondido en la vista ☰, así que el camino más usado es seguramente la
  ficha (lo va a decir el origen).
- **Preguntas 9 a 11 contestadas (17-10):** el orden por precio queda a medias
  a propósito (lo de diseñador arriba); «Nuevo» pasa a ser sólo los últimos 10
  cargados (en producción en ST desde el 17-10, v1.1.286); el celu sigue arrancando en ☰ (el caso 02
  había medido la otra vista: corregido), con un globito para enseñar ▦ / ☰.
- Reglas borrador renumeradas: 01-02 (caso 01), 03 (caso 02), 04-05 (caso 03),
  06 (caso 04), 07 (caso 05).
- `numeros.js` arreglado (40 % ya no sale «1 de cada 3»); ST tiene la copia.
- **La plataforma contestó cómo mide (17-10).** No construyeron nada (no hace
  falta todavía). Lo que sirve para leer sus números:
  - La **llegada se cuenta en el navegador**, una por carga de página, como en
    ST. Las páginas de la tienda salen de caché: del lado del server se
    contarían renovaciones de caché, no visitas.
  - **Tres trampas de «qué cuenta»** (para `leer-numero`, paso 1):
    `product_view` sale sólo de la ficha (abrir un perfume en la hoja rápida del
    catálogo **no suma**, igual que en ST); `add_to_cart` cuenta **por renglón**
    (un pack de 5 decants suma 5, el «+» del carrito no suma); `search` se
    cuenta en el server cada vez que se arma la página de búsqueda.
  - Unas 6 puertas a WhatsApp sin evento: la regla 05 del caso 03 vale para las
    dos tiendas.
  - Preguntas nuevas 23 a 28. Las de Lautaro (23 a 26) ya están en un issue de
    la plataforma.

## Esperando
- **Datos:** 2 a 4 semanas de `llegada` y `ficha_abierta` en la pestaña
  Holmes. Con eso, los casos 01 y 02 pasan de hipótesis a números.
- **Alejo:** elegir el método del [foro 02](foro/02-como-se-investiga.md)
  (A, B o C): en charla, se inclina por B (ver la charla en el foro). Los casos 03 a 05 se ordenaron con A; si elige otro, se
  reordenan. Y contestar la pregunta 16. (9 a 11, contestadas el 17-10.)
- **ST:** leer 20-30 chats (caso 03, sólo conteos) y contar ventas por medio de
  pago (caso 05). Preguntas 12, 14, 15, 17, 18 y 21.
- **Lautaro:** preguntas 23 a 26 (eventos de la plataforma). Con Alejo, la 27.
- **Abogado:** pregunta 28 (identificador por aparato sin aviso) y pregunta 20 (dos precios y «sin interés», ya abierta en la
  plataforma).
- **Decidido por Alejo (17-10), cómo se guardan los datos:** ST guarda todo el
  detalle (400 días; pesa poco). En la plataforma, **compactar en escalones**
  desde el día uno: los últimos meses evento por evento, después un resumen por
  día y por producto (visitas, fichas, intentos por origen, ventas), y más
  atrás semanas o meses («que sea exponencial»). Para `leer-numero`: el resumen
  diario no pierde nada de lo que Holmes cuenta (la visita es aparato + día);
  sólo se pierde el camino dentro de la visita, y eso queda para los meses con
  detalle.
- **Decidido por Alejo, no tocar:** el «N mirando ahora» de la web vieja de ST
  queda hasta que la tienda pase a la plataforma.

## Casos que faltan (las preguntas de Alejo)
- Ninguno de la lista original. Los próximos salen de lo que Alejo pregunte.

## Fichas pendientes
Ninguna. Las próximas salen de los casos nuevos.
