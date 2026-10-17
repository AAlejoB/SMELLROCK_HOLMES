# Ficha: Dolor de pagar («pagar duele, y en partes duele menos»)

> Estado: borrador
> Última revisión: 17-10-2026

## Origen
- **Zellermayer, 1996** (tesis de doctorado, Carnegie Mellon) le puso el
  nombre: pagar se siente como un **costo aparte** del producto, una pequeña
  molestia que aparece en el momento de soltar la plata. [CONSENSO]
- **Prelec y Loewenstein, 1998** armaron el modelo: llevamos «dos cuentas»
  en la cabeza, lo que disfrutamos y lo que pagamos. Cuanto más **pegado** está
  el pago al momento de disfrutar, más le resta al disfrute. Con encuestas y
  escenarios encontraron, por ejemplo, que la gente prefiere **pagar antes**
  unas vacaciones (para disfrutarlas sin pensar en la plata) y **pagar en
  cuotas** algo que se usa durante meses, como un lavarropas. [EXPERIMENTO]
- Detrás está la **contabilidad mental** de Thaler (1985, 1999): no tratamos
  toda la plata igual; la separamos en cuentas mentales. [CONSENSO] sobre
  experimentos.

## Cómo evolucionó
- **Rick, Cryder y Loewenstein, 2008**: no a todos les duele igual. Con más de
  13.000 personas armaron una escala de «ahorradores» (les duele mucho, gastan
  menos de lo que querrían) y «gastadores» (les duele poco, gastan más de lo
  que querrían). La escala predijo ahorro y deudas con tarjeta, y no tuvo que
  ver con cuánto ganaban. [EXPERIMENTO] (encuesta grande)
- **Soman, 2001**: cuanto menos «se siente» el pago (tarjeta en vez de
  efectivo, el monto que no se ve salir), más se gasta. [EXPERIMENTO]
- **Lo que no se sostuvo en su versión fuerte:** Prelec y Simester (2001)
  dijeron que con tarjeta se ofrecía **casi el doble** que en efectivo. Liu y
  Dewitte (2021) lo repitieron en 4 estudios (692 personas) y no lo
  encontraron. [NO REPLICA]
- **El balance de todo junto:** Schomburgk, Belli y Hoffmann (2024) juntaron
  392 resultados de 71 trabajos. Pagar sin efectivo hace gastar **un poco
  más**: el efecto **existe, es chico** y **se viene achicando** con los años
  (cuanto más normal es pagar con el celular, menos diferencia hace). Es más
  fuerte cuando la compra es para mostrar y más débil cuando es para otros.
  [META]
- Hay estudios con imágenes del cerebro (Knutson y otros, 2007) que muestran
  actividad en zonas ligadas a lo desagradable cuando el precio parece caro.
  Sirven de pista, pero **no prueban que sea «dolor»**: una zona del cerebro
  hace muchas cosas. No se usan como argumento de venta.

## La versión simple
**El momento de pagar es el más incómodo de la compra. Se alivia de tres
maneras honestas: partir el total en cuotas que se ven chicas al lado de lo
que dura el producto, pagar con algo que ya está cargado (menos pasos), y que
no aparezcan sorpresas al final.** El efecto es chico: ayuda, pero no
convierte a quien no quería comprar.

## Cuándo sirve / cuándo no
- Sirve: en compras grandes que **se usan durante meses**, como un frasco de
  100 ml (dura de 5 a 11 meses según el uso, cálculo de `negocio-ar`). Ahí la
  cuota «acompaña» el uso.
- Sirve: en el último paso, sacando lo que hace sentir el pago más de lo
  necesario (tipear la tarjeta, un costo de envío que aparece al final).
- No sirve tanto: en compras chicas (un decant). Ahí el pago casi no duele, y
  pesa más la comisión que paga la tienda.
- Cuidado: lo que alivia el pago también puede llevar a gastar de más. Por eso
  el límite de abajo.

## En otros rubros
| Rubro | ¿Viaja? | Cómo |
|---|---|---|
| Perfumería | Sí | Cuotas en el frasco grande; transferencia en el decant |
| Belleza | Sí | Igual: el tratamiento largo en cuotas, el producto suelto en un pago |
| Ropa | Sí | Cuotas en la campera; ojo con lo que se compra «para mostrar», donde el efecto es más fuerte |
| Mayoristas | A medias | El comercio piensa en flujo de caja, no en dolor: plazo de pago y descuento por pronto pago |

## Límite ético y legal (Argentina)
- **El total siempre a la vista.** Partir el pago no es esconderlo: «3 cuotas
  de $X» va con «total $Y». En operaciones con financiación hay que informar el
  precio de contado y el total (Ley 24.240, art. 36).
- **«Sin interés» sólo si es verdad.** El tema de los dos precios (efectivo y
  tarjeta) con «cuotas sin interés» está abierto para un abogado (pregunta 20,
  `casos/05`). **No es asesoramiento legal.**
- **No empujar a gastar de más.** Nada de «llevá dos en 12 cuotas y casi no
  lo sentís». Con personas en situación vulnerable (la norma habla de
  consumidores hipervulnerables, Res. 139/2020 de Comercio Interior), más
  cuidado todavía. Si una técnica sólo funciona haciendo que alguien no se dé
  cuenta de cuánto gasta, no se usa.
- **Nada de urgencia para pagar** («pagá en los próximos 10 minutos y…») si no
  hay un plazo real.

## Cómo se mide
- **Qué medio eligen, por rango de precio.** En ST el «Reemplazo de hoja» ya
  anota efectivo, MP o Posnet en cada venta del local (`casos/05`). Si los
  frascos caros van más a tarjeta y los decants más a efectivo, es coherente
  con el dolor de pagar. **No anota cuotas** (pregunta 22, para el POS nuevo).
- **Dónde se frenan en el pago:** en la web de ST el pago es por chat; en la
  plataforma, con checkout, los abandonos en el paso de pago.
- **A/B de «3 cuotas de $X» arriba contra «$Y total» arriba** (los dos
  siempre visibles): de 3 % a 4 % de «quiso comprar» hacen falta ~5.300
  visitas por versión. ST no las junta: queda para la plataforma. Antes,
  preguntas con personas.

## Preguntas de QA (sin sí ni no)
- «La última vez que pagaste algo caro, ¿cómo lo pagaste y qué sentiste al
  pagar?» → si nombran incomodidad y qué la alivió.
- «Cuando ves "3 cuotas de $37.800", ¿qué es lo primero que pensás?» → si
  comparan con el mes o con el total.
- «¿Qué te hace dudar justo antes de pagar?» → el último freno (sorpresa de
  costo, desconfianza, el monto).

## Lo que no sabemos
- ¿Las clientas de ST pagan los frascos caros en cuotas? → hoy nadie lo anota
  (pregunta 22).
- ¿El efecto sigue igual en Argentina, donde las cuotas son costumbre? Los
  estudios son de Estados Unidos y Europa.

## Fuentes
- Zellermayer, O. (1996). *The pain of paying.* Tesis de doctorado, Carnegie
  Mellon University. [CONSENSO]
- Thaler, R. (1985). *Mental accounting and consumer choice.* Marketing
  Science, 4(3); y (1999) *Mental accounting matters.* Journal of Behavioral
  Decision Making, 12(3). [CONSENSO]
- Prelec, D. y Loewenstein, G. (1998). *The red and the black: mental
  accounting of savings and debt.* Marketing Science, 17(1). [EXPERIMENTO]
- Soman, D. (2001). *Effects of payment mechanism on spending behavior: the
  role of rehearsal and immediacy of payments.* Journal of Consumer Research,
  27(4). [EXPERIMENTO]
- Rick, S., Cryder, C. y Loewenstein, G. (2008). *Tightwads and
  spendthrifts.* Journal of Consumer Research, 34(6). [EXPERIMENTO]
- Knutson, B. y otros (2007). *Neural predictors of purchases.* Neuron, 53(1).
  [EXPERIMENTO] (con la advertencia de arriba)
- Prelec, D. y Simester, D. (2001). *Always leave home without it.* Marketing
  Letters, 12. Réplica: Liu, Y. y Dewitte, S. (2021), Journal of Retailing and
  Consumer Services, 60. [NO REPLICA]
- Schomburgk, L., Belli, A. y Hoffmann, A. (2024). *Less cash, more splash? A
  meta-analysis on the cashless effect.* Journal of Retailing.
  doi:10.1016/j.jretai.2024.05.003 [META]
