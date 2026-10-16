# Caso 01: «Mira y no compra» (ST contra Grid)

> Abierto el 16-10-2026. Estado: **primera pasada** (lo que se ve desde
> afuera y en el código; falta medir y probar con personas).

## La pregunta, en palabras de Alejo

- ¿Por qué alguien que llega por internet mira y no compra?
- ¿Por qué a alguien no le llama la atención la página? ¿Y por qué sí le llama
  la de Grid, que vende mucho en Argentina? (y otros locales, los más visitados
  de la historia)

## 1. Lo puntual: ST, hoy

### 1.a Antes de explicar «no compra», ¿cuántos miran? → **hoy no se sabe**

Rol `leer-numero`, leyendo el código de ST (`origin/main`, `js/app.js`):

| Lo que muestra | Qué cuenta en realidad | ¿Sirve para «mira y no compra»? |
|---|---|---|
| Laboratorio, «vistas» (`view_product`) | Sólo los toques en el ranking, en «similares», en «vistos hace poco» y al entrar con link directo a un perfume. **No** cuenta abrir una tarjeta común del catálogo. También suma 1 cuando alguien instala la app. | No: deja afuera el camino principal |
| Laboratorio, clics a WhatsApp (`wa_click`) | El botón de WhatsApp de un perfume | Sí, es el «compra» de la web (la venta sigue por chat) |
| Ojito con número en la tarjeta (`perfume_clicks`) | El primer toque o paso del mouse sobre cada tarjeta, por carga de página. En el celular, **un toque para hacer scroll también cuenta**. Acumulado desde siempre. | A medias: mide «pasó por encima», no «miró» |
| Una persona que entra, mira y se va sin tocar nada | **Nada.** No hay evento de llegada | Es justo lo que queremos medir |

Además: el `session_id` vive en el navegador (es por aparato, no por visita), y
en el celular el último lote de eventos se puede perder al cerrar la pestaña.

**Conclusión:** hoy no hay tasa de «mira y no compra». Hay un número de abajo
(clics a WhatsApp) y no hay número de arriba (llegadas). Cualquier % que se
arme ahora es inventado.

### 1.b Lo que se ve en la primera pantalla (celular, 375 px, 16-10-2026)

Prueba de las 4 preguntas (ficha [primera-impresion](../tecnicas/primera-impresion.md)):

| Pregunta | ST | Grid |
|---|---|---|
| ¿Qué venden? | ✅ «Perfumería árabe original · Comodoro» + buscador «por nombre, marca o nota» | ✅ Fotos grandes de gente con ropa de marcas que todos conocen |
| ¿Cuánto sale? | ⚠️ Recién en la primera tarjeta, abajo del pliegue | ✅ En la tarjeta: precio, «3 cuotas de $X sin interés» |
| ¿Cómo pago? | ✅ Cinta «3 cuotas sin interés · aceptamos todos los medios de pago» | ✅ Barra fija «6 cuotas sin interés desde $119.999» + promo del banco |
| ¿Cómo me llega? | ❌ No aparece en la primera pantalla (sí «Abierto · cierra a las 21 h») | ✅ Barra fija «Envío gratis desde $179.999» y «Envío gratis» en cada tarjeta |

Otras diferencias:

| | ST | Grid |
|---|---|---|
| Botón de la tarjeta | «Consultar →» (abre WhatsApp: hay que escribir y esperar) | «Agregar al carrito» (sigue solo) |
| Foto | 26 de 200 tarjetas con «Foto próximamente», una en el 2.º lugar del catálogo. 3 fotos se cargan desde la web de otra perfumería (Juleriaque) | Fotos propias, con gente |
| Fecha comercial | No se ve | «Mamá Nike»: Día de la Madre (18-10) en la portada |
| Ayuda para elegir | ✅ «¿No sabés cuál? 4 preguntas» (bien: ficha [sobrecarga-de-opciones](../tecnicas/sobrecarga-de-opciones.md)) | Marcas y «Tus modelos favoritos» |
| Prueba social | «N mirando ahora» simulado (ver 1.c) | No se vio |
| Precio sin impuestos | No se ve | ✅ «$X precio sin impuestos nacionales» (Transparencia Fiscal) |

### 1.c «N mirando ahora» es simulado

En `js/app.js` (`computeLiveViewers`), el número sale de mezclar el nombre del
perfume con el reloj (cambia cada 5 minutos), de 0 a 6. No mide a nadie.
Aparece en las tarjetas con más de 3 toques acumulados.

**Decisión de Alejo (16-10-2026):** se queda en la web vieja de ST hasta que
la tienda pase a la plataforma SaaS, que la reemplaza. No se toca.

**Lo que se aprende para la próxima tienda:** la prueba social simulada no se
copia. Si se quiere mostrar movimiento, sale de un dato real (por ejemplo,
«N consultas esta semana» contado de `wa_click`, sólo cuando N es alto y
verdadero). Ver la regla dura 2 en `CLAUDE.md`.

## 2. Lo general: por qué alguien mira y no compra

Tres preguntas, en orden. Si falla una, las siguientes no importan:

1. **¿Se queda?** (primera impresión: las 4 preguntas, foto real, poco ruido).
2. **¿Confía?** Barreras de compra online en Argentina: no poder ver ni oler
   (49 %), envío (~40 %), desconfianza (~25 %) [MERCADO, CACE 2025, vía
   `negocio-ar`]. Los costos que aparecen tarde son la causa n.º 1 de
   abandono (40 %) [DURA, Baymard 2025].
3. **¿Le cuesta?** Cada paso que pide escribir, esperar o adivinar (talle,
   envío, precio final) suma esfuerzo. «Consultar» por WhatsApp es un paso
   caro: hay que redactar y esperar a una persona. (Se cruza con el caso
   futuro «¿por qué es tedioso comprar por WhatsApp?»).

Grid gana en 1 y en 3: contesta las 4 preguntas sin tocar nada, y el botón
sigue solo. No es porque sea más «linda»: es porque **no deja preguntas
abiertas**.

## 3. La regla que sale (borrador para `reglas/`)

> **Regla 01: Antes de preguntar por qué no compran, contá cuántos llegan.**
> Una tienda necesita, como mínimo, tres eventos: **llegó**, **miró un
> producto**, **quiso comprar** (carrito, WhatsApp o pago). Sin «llegó», no hay
> tasa de nada.
>
> **Regla 02: La primera pantalla del celular contesta 4 preguntas sin tocar
> nada:** ¿qué venden?, ¿cuánto sale?, ¿cómo pago?, ¿cómo me llega?
> Para mayoristas: ¿qué venden?, ¿mínimo de compra?, ¿precio por bulto?,
> ¿cómo llega?

Pasan a `reglas/` cuando se midan en ST (ver § 4).

## 4. Cómo seguir (y qué hace falta)

| Paso | Rol | Qué hace falta | Quién |
|---|---|---|---|
| 1. Evento «llegó» (`page_view` con origen) y `view_product` al abrir cualquier tarjeta | `leer-numero` | Sesión en ST, o directo en la plataforma | Alejo / Lautaro |
| 2. Prueba de 5 segundos: ST y Grid, 5 personas cada una | `qa-preguntas` | 5 personas del público de ST, 15 minutos | Alejo |
| 3. Con 2-4 semanas de llegadas: tasa llegó → WhatsApp, con intervalo | `leer-numero` | Los datos del paso 1 | — |
| 4. Comparar con «los más visitados» (Mercado Libre, Amazon) con las mismas 4 preguntas | `investigar` | Una pasada, sin datos privados | — |

Preguntas abiertas: ver `preguntas/abiertas.md` (1, 2, 3 y 6 a 8).

## Técnicas usadas

- [primera-impresion](../tecnicas/primera-impresion.md)
- [sobrecarga-de-opciones](../tecnicas/sobrecarga-de-opciones.md)
- Pendientes de ficha: **prueba social** (con su límite: el caso 1.c),
  **fricción y esfuerzo** (Fogg, 2009: conducta = motivación × capacidad ×
  disparador).
