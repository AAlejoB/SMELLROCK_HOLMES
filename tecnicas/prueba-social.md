# Ficha: Prueba social («si otros lo compraron, debe estar bueno»)

> Estado: borrador
> Última revisión: 16-10-2026

## Origen
- **Asch, 1951**: en grupo, muchas personas daban una respuesta que veían
  equivocada (qué línea era más larga) sólo porque los demás la daban.
  [EXPERIMENTO]
- **Cialdini, 1984** (*Influencia*): la prueba social es uno de los atajos con
  que decidimos sin pensar mucho. Pesa más **cuando no estamos seguros** y
  **cuando los otros se parecen a nosotros**. [CONSENSO] armado sobre
  experimentos.
- **Goldstein, Cialdini y Griskevicius, 2008**, el estudio de las toallas de
  hotel: el cartel «la mayoría de los huéspedes reusó la toalla» funcionó mejor
  que el de cuidar el ambiente, y mejor todavía «la mayoría de los que
  estuvieron **en esta habitación**». [CAMPO]

## Cómo evolucionó
- **Bohner y Schlüter, 2014** repitieron el de las toallas en dos hoteles de
  Alemania (724 y 204 huéspedes): cualquier cartel subió el reuso contra no
  poner nada, pero **el de «la mayoría» no le ganó al cartel común**, y lo de
  «esta habitación» no se sostuvo. [NO REPLICA] para la versión fuerte.
- **Scheibehenne, Jamil y Wagenmakers, 2016** juntaron 7 experimentos de
  toallas: ninguno solo era fuerte, pero juntos sí muestran un efecto. Lectura
  honesta: **existe, es chico**, y no se puede prometer cuánto. [META]
- **Salganik, Dodds y Watts, 2006** (más de 14.000 personas, música): mostrar
  cuántos bajaron cada canción hizo que **las que ya ganaban ganaran más** y que
  el éxito fuera más impredecible. [EXPERIMENTO] La prueba social amplifica; no
  elige bien sola.
- **Reseñas online**: con 5 reseñas un producto se compra mucho más que con 0, y
  4,0 a 4,7 estrellas dan más confianza que un 5,0 perfecto (Spiegel Research
  Center, 2017, con datos de un proveedor de reseñas, vía `negocio-ar`).
  [DURA] [VENDOR]

## La versión simple
**Mostrá lo que otras personas hicieron de verdad, con número, y lo más
parecidas posible a quien mira** («las 5 más pedidas en Comodoro este mes»,
«32 reseñas, 4,6»). Sólo cuando el número es real y alto. Si no hay número
bueno, no se muestra nada: un número bajo o inventado resta.

## Cuándo sirve / cuándo no
- Sirve: cuando la persona **duda** (no conoce la tienda, no conoce el
  perfume). Ahí una reseña real reemplaza un poco el no poder olerlo.
- Sirve: reseñas con detalle útil (duración, estela, para qué ocasión), no sólo
  estrellas.
- No sirve: con quien ya sabe qué quiere. Ahí molesta.
- No sirve: con números chicos («2 personas lo compraron») ni con contadores
  que no miden nada.

## En otros rubros
| Rubro | ¿Viaja? | Cómo |
|---|---|---|
| Perfumería | Sí | Reseñas con duración y ocasión; «más pedidos del mes» contado de las ventas |
| Belleza | Sí | Fotos de clientas con el producto (96 % las busca, [VENDOR] vía `negocio-ar`) |
| Ropa | Sí | «A quien mide 1,65 le quedó bien el M»: la reseña que resuelve el talle |
| Mayoristas | A medias | «Lo compran 40 comercios de la zona», sólo si es cierto y no expone a nadie |

## Límite ético y legal (Argentina)
- **Nada inventado ni simulado.** Ni «N mirando ahora» que sale del reloj (ver
  `casos/01`, 1.c), ni «alta demanda» sin número, ni reseñas escritas por la
  tienda o pagadas sin decirlo. Es información que no es cierta (Ley 24.240,
  art. 4) y publicidad engañosa (Lealtad Comercial, DNU 274/2019). Regla dura 2
  de `CLAUDE.md`.
- **Las reseñas negativas se publican.** Borrar las malas también engaña.
- **Nombres y fotos de clientas, sólo con permiso** (Ley 25.326). Por defecto:
  nombre de pila y ciudad, o nada.
- Si una reseña viene con regalo o descuento a cambio, se dice en la reseña. Si
  no sabemos cómo decirlo bien, va a `preguntas/` para un abogado.

## Cómo se mide
- **De qué sale el número.** Antes de mostrarlo, decir qué cuenta y de qué
  tabla sale (ventas, consultas, reseñas). Si no sale de un dato, no va.
- **Reseñas:** con 2,5 % a 5 % de los pedidos dejando reseña ([VENDOR], vía
  `negocio-ar`), juntar 5 reseñas en un perfume lleva entre 100 y 200 pedidos
  de ese perfume. En una tienda chica, primero los 5 más vendidos.
- **A/B de una etiqueta «más pedido»** sobre «abrió la ficha»: de 20 % a 25 %
  hacen falta ~1.100 visitas por versión (cuenta con `numeros.js`). Si ST no
  las junta en 6-8 semanas: prueba con 5 personas.

## Preguntas de QA (sin sí ni no)
- «Cuando leés reseñas de un perfume, ¿cuáles te creés y cuáles no? ¿Por
  qué?» → qué hace creíble una reseña.
- «¿Qué te haría pensar que otras personas ya le compraron a esta tienda?» →
  qué señal buscan (fotos, Instagram, reseñas, local).
- «La última vez que compraste un perfume sin olerlo, ¿qué te dio confianza?» →
  cuántas de las 5 nombran a otras personas (amigas, reseñas, videos).

## Lo que no sabemos
- ¿ST tiene reseñas o comentarios de clientas guardados (Instagram, Google)? →
  ST (pregunta 21).
- ¿Cuántas ventas por mes tiene el perfume más pedido? (para saber si un «más
  pedido» sería un número alto y verdadero) → ST, sólo el conteo.

## Fuentes
- Asch, S. E. (1951). *Effects of group pressure upon the modification and
  distortion of judgments.* [EXPERIMENTO]
- Cialdini, R. (1984; ed. ampliada 2021). *Influence.* [CONSENSO]
- Goldstein, N., Cialdini, R. y Griskevicius, V. (2008). *A room with a
  viewpoint.* Journal of Consumer Research, 35(3). [CAMPO]
- Bohner, G. y Schlüter, L. (2014). *A room with a viewpoint revisited.* PLOS
  ONE, 9(8). https://pmc.ncbi.nlm.nih.gov/articles/PMC4118982/ [NO REPLICA]
- Scheibehenne, B., Jamil, T. y Wagenmakers, E.-J. (2016). *Bayesian evidence
  synthesis can reconcile seemingly inconsistent results: the case of hotel
  towel reuse.* Psychological Science, 27(7). [META]
- Salganik, M., Dodds, P. y Watts, D. (2006). *Experimental study of
  inequality and unpredictability in an artificial cultural market.* Science,
  311. [EXPERIMENTO]
- Spiegel Research Center (2017). *How online reviews influence sales*, vía
  skill `negocio-ar` (7-10-2026). [DURA] [VENDOR]
