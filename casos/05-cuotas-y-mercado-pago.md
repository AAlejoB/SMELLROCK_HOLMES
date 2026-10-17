# Caso 05: «¿Por qué la gente elige cuotas sin interés? ¿Por qué Mercado Pago?»

> Abierto el 16-10-2026. Estado: **primera pasada** (investigación de
> escritorio; falta saber qué hacen las clientas de ST).

## La pregunta, en palabras de Alejo

- ¿Por qué la gente elige cuotas sin interés? ¿Por qué Mercado Pago?

## 1. Lo puntual: ST, hoy

- Cinta arriba de todo: «3 cuotas sin interés · aceptamos todos los medios de
  pago».
- Dos precios: el de lista (tarjeta) y el de efectivo o transferencia, con su
  % de descuento.
- El mensaje de WhatsApp repite las dos cosas: «3 cuotas sin interés de $X
  (total $Y)» y «Efectivo/transf: $Z (N % off)».
- El pago se arregla **en el chat** (ver `casos/03`): la web no cobra.

**Lo que no sabemos de ST** (pregunta 18): de las ventas de la web, cuántas se
pagan en cuotas, cuántas en un pago con tarjeta y cuántas por transferencia o
efectivo. Sólo los conteos; los montos no entran al repo.

**Lo que ya hay (16-10-2026):** el «Reemplazo de hoja» del panel anota cada
venta del local con **efectivo, MP o Posnet**, y el «Resumen del día» muestra
lo que salió, día por día de la semana (60 días de historia). Alcanza para
contar ventas por medio de cobro **hoy mismo**, sin anotar nada nuevo. No dice
**cuántas cuotas** ni **si la venta vino de la web**: eso lo tendría que anotar
el POS nuevo (pregunta 22).

## 2. Lo general: por qué cuotas

### Lo que dicen contra lo que hacen

| Fuente | Lo que dice |
|---|---|
| CACE + Kantar 2025 (encuesta) | **8 de cada 10** dicen que las cuotas son clave antes de comprar. 28 % eligió 3 cuotas y 26 % eligió 6 [MERCADO] |
| Tiendanube, primer semestre 2026 (compras reales) | **67 % pagó en un solo pago**; 3 cuotas ~19 %, 6 cuotas ~10 % [MERCADO] [VENDOR] |

(Las dos vía `negocio-ar`, 6-7/10/2026.)

**Lectura:** casi todos dicen que las cuotas importan, pero 2 de cada 3
pagan en un pago. Es justo lo que avisa el *Mom Test*: lo que la gente
**dice** no es lo que **hace**. Hipótesis: las cuotas pesan como **«puedo
hacerlo si quiero»** (una red) más que como forma de pago. Se confirma con
datos de ST (pregunta 18) y con las preguntas de § 4.

### Cuatro razones, con su evidencia

1. **La cuota entra en el mes; el total no.** Mucha gente decide por si la
   cuota cabe en su presupuesto mensual. Hay una encuesta de Brasil que lo
   pone en 61 % ([MERCADO], fecha no confirmada, vía `negocio-ar`). En
   Argentina no encontramos un número.
2. **Con inflación, pagar después es pagar menos.** Una cuota fija en pesos
   vale menos cada mes que pasa. Cuanto más alta la inflación, más conviene;
   con inflación baja, esa ventaja se achica. (Es una cuenta, no un estudio.)
3. **Pagar duele, y en partes duele menos.** Prelec y Loewenstein (1998):
   sentimos el pago como un costo aparte del producto, y separar el pago del
   momento de disfrutar lo hace más llevadero. Gourville (1998): el mismo
   precio dicho «por día» parece más chico que dicho entero. [EXPERIMENTO]
   El número chico de la cuota funciona como **ancla** (ficha
   [anclaje](../tecnicas/anclaje.md)).
4. **Lo que no se sostuvo:** que pagar con tarjeta hace gastar casi el doble
   que pagar en efectivo (Prelec y Simester, 2001, una subasta de entradas).
   Liu y Dewitte (2021) lo repitieron en 4 estudios (692 personas) y **no
   lo encontraron**. [NO REPLICA] No se usa como regla.

### Quién paga las cuotas «sin interés»

**La tienda.** Desde que terminaron Ahora 12 y Cuota Simple (normas derogadas
el 9-6-2026, vía `negocio-ar`), toda cuota sin interés la paga el comercio,
salvo una promo de un banco. Cuánto cuesta depende de la pasarela y del plan;
**no hay número oficial a mano** (la tabla de costos de Mercado Pago no se pudo
abrir el 7-10-2026). Para cubrirlo, el precio de lista ya lo incluye (fórmula
en `negocio-ar`, sección 3).

## 3. Lo general: por qué Mercado Pago

No encontramos **ningún estudio independiente** sobre por qué la gente elige
Mercado Pago en una tienda chica en Argentina (es un hueco también en
`negocio-ar`). Lo que sigue son **hipótesis** armadas con las fichas:

| Hipótesis | Ficha | Cómo se confirma |
|---|---|---|
| **Menos pasos:** la tarjeta ya está cargada o tenés plata en la cuenta; no tipeás 16 números | [friccion-y-esfuerzo](../tecnicas/friccion-y-esfuerzo.md) | Prueba con 5: «pagá este perfume»; contar pasos con MP y sin MP |
| **Confianza prestada:** no le das la tarjeta a una tienda que no conocés, se la das a una marca que ya usás | [prueba-social](../tecnicas/prueba-social.md) | Pregunta de QA: «¿qué te haría dudar de pagar acá?» |
| **Las cuotas con cualquier tarjeta** | — | Ver qué medio y cuántas cuotas eligen, por rango de precio |
| **La transferencia desde la billetera** crece: 20 % de las ventas online en 2025, contra 8 % en 2024 ([MERCADO], CACE, vía `negocio-ar`) | — | Datos de ST por medio de pago (pregunta 18) |

Contexto: la desconfianza frena a ~25 % de quienes no compran online en
Argentina ([MERCADO], CACE 2025), y el 19 % abandona un carrito por
desconfianza ([DURA], Baymard 2025). Las dos vía `negocio-ar`.

**Cuidado con «Compra Protegida»:** es el programa de **Mercado Libre** y
cubre compras hechas dentro de Mercado Libre. Notas de prensa dicen que un
pago por link o QR fuera del sitio queda sin esa cobertura. Si el pago con
Mercado Pago en una tienda propia tiene alguna protección para quien compra,
**no lo verificamos** (pregunta 19). No prometerlo.

### ¿Le pasa a otras tiendas?

Sí, a todas las de Argentina: no depende del rubro sino del **precio del
ticket**. Un frasco de perfume, una campera o un pedido mayorista grande
piden cuotas; un decant o una remera, transferencia. Lo que propone
Tiendanube (cuotas para el frasco caro, transferencia con descuento para lo
barato, [VENDOR] vía `negocio-ar`) viaja a cualquier rubro.

## 4. Cómo seguir (y qué hace falta)

| Paso | Rol | Qué hace falta | Quién |
|---|---|---|---|
| 1. Conteo de ventas de la web por medio de pago (un pago, 3 cuotas, transferencia, efectivo), por rango de precio | `leer-numero` | Sólo conteos, sin montos ni nombres | ST |
| 2. Prueba con 5 personas: «comprá este perfume y pagalo como lo harías de verdad» | `qa-preguntas` | 5 personas | Alejo |
| 3. Con el paso 1: % en cuotas con su rango | `leer-numero` | Ej.: si de 50 ventas 28 son en cuotas, «más de la mitad», y en el detalle «entre 42 % y 69 %» | — |
| 4. A/B «3 cuotas de $X» contra «$Y» en la tarjeta del catálogo | `leer-numero` | Con un «quiso comprar» de 3 % a 4 %: ~5.300 visitas por versión. Seguramente ST no las junta: queda para la plataforma | Más adelante |

## La regla que sale (borrador para `reglas/`)

> **Regla 07: Mostrá la cuota real y el total, juntos.** «3 cuotas de $X
> (total $Y)», sólo si la tienda las ofrece de verdad y con el total a la
> vista. La transferencia, al lado y con su rótulo. No se muestran planes que
> terminaron (Ahora 12, Cuota Simple).

Pasa a `reglas/` cuando ST cuente cómo pagan sus clientas (paso 1).

## Preguntas de QA (sin sí ni no)

```
Pregunta: «La última vez que compraste algo caro online, ¿cómo lo pagaste y por qué?»
Qué esperamos ver: si las cuotas se usan o sólo tranquilizan
Se mide con: medio elegido y la razón, por rango de precio · prueba con 5 y ventas de ST
Cuántos hacen falta: 5 personas para las razones; 50+ ventas para un %
```

```
Pregunta: «¿Qué te haría dudar de pagar en esta tienda?»
Qué esperamos ver: si nombran la tarjeta, el sitio desconocido o la falta de Mercado Pago
Se mide con: cuántas de las 5 lo nombran · prueba con 5
Cuántos hacen falta: 5 personas
```

```
Pregunta: «Cuando ves "3 cuotas de $37.800", ¿qué es lo primero que pensás?»
Qué esperamos ver: si comparan la cuota con el mes o con el total
Se mide con: la respuesta, contada en dos grupos (mes / total) · prueba con 5
Cuántos hacen falta: 5 personas
```

## Límite ético y legal (Argentina)

- **Tema legal abierto, para abogado.** `negocio-ar` (sección 4) encontró una
  contradicción: la Ley 25.065 (art. 37, inc. c) y la Res. 51-E/2017 no
  permiten **en un pago** un precio distinto entre efectivo y tarjeta, se
  llame descuento o recargo; y «sin interés» no se puede decir si la
  financiación está metida en el precio. Es práctica común en el mercado, pero
  **afecta a cualquier tienda que muestre dos precios y «cuotas sin
  interés»**, ST incluida. Lo decide un abogado. Hasta entonces: no agrandar el
  precio en efectivo ni sumar carteles. **No es asesoramiento legal.**
- **Cuotas que existen:** mostrar sólo las que se ofrecen de verdad, con el
  total (Ley 24.240, art. 36, para operaciones con financiación).
- **Nada de urgencia con las cuotas** («sólo hoy 6 cuotas») si no es una promo
  con fecha real de fin.

## Técnicas usadas

- [anclaje](../tecnicas/anclaje.md) (nueva): la cuota como número chico.
- [friccion-y-esfuerzo](../tecnicas/friccion-y-esfuerzo.md): pagar con una
  cuenta que ya tenés.
- [prueba-social](../tecnicas/prueba-social.md): la confianza que presta una
  marca conocida.
- [dolor-de-pagar](../tecnicas/dolor-de-pagar.md) (nueva, 17-10): el efecto
  sin efectivo existe pero es chico y se achica con los años (meta-análisis
  2024).

Preguntas abiertas: 18 a 20 de `preguntas/abiertas.md`.

## Fuentes (las que no están en las fichas)
- Prelec, D. y Loewenstein, G. (1998). *The red and the black: mental
  accounting of savings and debt.* Marketing Science, 17(1). [EXPERIMENTO]
- Gourville, J. (1998). *Pennies-a-day: the effect of temporal reframing on
  transaction evaluation.* Journal of Consumer Research, 24(4). [EXPERIMENTO]
- Prelec, D. y Simester, D. (2001). *Always leave home without it.* Marketing
  Letters, 12. [EXPERIMENTO]
- Liu, Y. y Dewitte, S. (2021). Réplica del efecto tarjeta, Journal of
  Retailing and Consumer Services, 60. [NO REPLICA]
- CACE + Kantar (2025), Tiendanube (H1 2026), Baymard (2025), y la sección 4
  legal: vía skill `negocio-ar` de la plataforma (6-7/10/2026).
