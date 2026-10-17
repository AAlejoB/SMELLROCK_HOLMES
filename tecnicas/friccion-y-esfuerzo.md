# Ficha: Fricción y esfuerzo («cada paso de más es gente que se va»)

> Estado: borrador
> Última revisión: 16-10-2026

## Origen
**Fogg, 2009** (Universidad de Stanford). Una conducta pasa cuando se juntan
tres cosas en el mismo momento: **motivación** (ganas), **capacidad** (qué tan
fácil es) y un **disparador** (algo que dice «ahora»). Si falta una, no pasa.
Lo útil para una tienda: **con poca motivación sólo compra quien la tiene
fácil; si es difícil, sólo compra quien tiene muchas ganas.**

Fogg dice que algo es difícil por seis costos: **tiempo, plata, esfuerzo
físico, esfuerzo mental, incomodidad social** (hacer algo que da vergüenza o
que otros no hacen) y **salir de la rutina**.

Evidencia: [CONSENSO]. Es un modelo para pensar, no un experimento. Hay
pruebas aplicadas que lo apoyan (por ejemplo, un panel de 617 personas en
Pakistán sobre una conducta de salud), pero **nadie midió dónde está el
umbral**: el modelo dice que existe, no cuánto vale para cada persona o tarea.

Antes, la misma idea en diseño web: **Krug, 2000** («no me hagas pensar»):
cada vez que una página te hace dudar, perdés gente. [CONSENSO]

## Cómo evolucionó
- **Dixon, Freeman y Toman, 2010** (revista de Harvard): en más de 75.000
  personas atendidas por centros de atención, **bajar el esfuerzo** predijo la
  vuelta a comprar mucho mejor que «sorprender» al cliente. De ahí sale la
  pregunta de esfuerzo («¿cuánto te costó resolver esto?»). [CAMPO], pero lo
  hizo una consultora que vende ese método y **no encontramos réplica
  independiente**: tomarlo como techo optimista. [VENDOR]
- **Oldroyd, McElheran y Elkington, 2011** (revista de Harvard): la mayoría de
  las empresas tarda demasiado en contestar una consulta online, y las chances
  de concretar caen rápido con las horas. [CAMPO] Las cifras exactas que
  circulan («7 veces», «21 veces») salen de notas de segunda mano y de otro
  estudio del mismo autor: no las usamos hasta leer el original.
- **Baymard** (abandono de carrito, 2025): 18 % abandona si le exigen crear una
  cuenta y 17 % porque el proceso es largo. [DURA], vía `negocio-ar`.

## La versión simple
**Contá los pasos que piden escribir, esperar o adivinar. Cada uno es un
costo. Sacá primero el más caro.** Para quien ya decidió, el mejor paso es el
que no existe. Para quien duda, el paso que vale es el que le resuelve la duda
(un consejo, una prueba), no uno más rápido.

## Cuándo sirve / cuándo no
- Sirve: cuando la persona **ya sabe lo que quiere** (llega de un video con el
  perfume elegido, recompra el suyo). Ahí todo paso extra es un peaje.
- Sirve: para ordenar qué arreglar primero. Lo que más cuesta es **esperar**
  (tiempo) y **escribir** (esfuerzo mental), más que tocar un botón.
- No alcanza: si la persona no tiene ganas, hacerlo fácil no la convence. Ahí
  pesa la primera impresión (ver [primera-impresion](primera-impresion.md)).
- Cuidado: hay pasos que dan confianza (ver el total, elegir el envío). Sacar
  un paso no es esconder información.

## En otros rubros
| Rubro | ¿Viaja? | Cómo |
|---|---|---|
| Perfumería | Sí | Precio, envío y stock a la vista; el chat queda para asesorar |
| Belleza | Sí | Igual; el tono o el tipo de piel es la duda que justifica el chat |
| Ropa | Sí | El talle es el paso caro: tabla de talles clara y cambio fácil |
| Mayoristas | Sí, con otro paso caro | Lista de precios, mínimo de compra y pedido armado sin tener que pedir la lista por chat |

## Límite ético y legal (Argentina)
- **Fácil para comprar y fácil para arrepentirse.** El botón de arrepentimiento
  tiene que ser visible y sin pedir registro (Disp. 954/2025). Hacer difícil
  la baja o la devolución es usar la fricción en contra de quien compra.
- Sacar pasos no es tildar casillas por la persona: el permiso para mandar
  promociones va **sin tildar y separado** (Ley 25.326).
- Lo que se dice para acortar el camino («llega mañana», «sin interés») es
  publicidad y obliga (Ley 24.240, art. 8).

## Cómo se mide
- **Prueba con 5 personas** (rol `qa-preguntas`): una tarea («comprá este
  perfume hasta que te lo confirmen»), y se cuentan pasos, idas y vueltas y
  minutos. Con 5 alcanza para ver dónde se traban, no para un %.
- **Pregunta de esfuerzo** al final de la tarea: «del 1 al 7, ¿cuánto te
  costó?» y después «¿qué fue lo que más te costó?». El número solo no dice
  nada: lo que sirve es la respuesta abierta.
- **Tiempo hasta la primera respuesta** en el chat (mediana, dentro y fuera
  del horario). Sale de leer chats reales; no hace falta tocar código.
- **Tasa de paso a paso** (llegó → abrió una ficha → escribió o compró), con su
  rango (ver `leer-numero`). Para comparar dos caminos con un A/B: de 2 % a
  3 % hacen falta ~3.800 visitas por versión (cuenta con `numeros.js`).

## Preguntas de QA (sin sí ni no)
- «Contame qué hiciste, paso a paso, desde que viste el perfume hasta que
  quedó pedido» → pasos y minutos de la tarea.
- «¿En qué momento dudaste o te frenaste?» → paso donde se traba (se cuenta
  cuántas de las 5 lo nombran).
- «La última vez que dejaste una compra por la mitad, ¿qué pasó?» → la causa,
  con las palabras de la persona.
- «¿Qué tuviste que preguntar que la página no te dijo?» → la lista de idas y
  vueltas que se pueden subir a la web.

## Lo que no sabemos
- ¿Cuánto tarda ST en contestar un WhatsApp, dentro y fuera del horario? →
  ST (ver `casos/03`).
- ¿Cuántas idas y vueltas tiene un chat que termina en venta? → ST.

## Fuentes
- Fogg, B. J. (2009). *A behavior model for persuasive design.* Persuasive
  '09, ACM. [CONSENSO]
- Krug, S. (2000; 3.ª ed. 2014). *Don't Make Me Think.* [CONSENSO]
- Dixon, M., Freeman, K. y Toman, N. (2010). *Stop trying to delight your
  customers.* Harvard Business Review, julio-agosto. [CAMPO] [VENDOR]
- Oldroyd, J. B., McElheran, K. y Elkington, D. (2011). *The short life of
  online sales leads.* Harvard Business Review, 89(3). [CAMPO]
- Baymard Institute (2025). *Cart abandonment rate statistics*, vía skill
  `negocio-ar` de la plataforma (7-10-2026). [DURA]
- Crítica del puntaje de esfuerzo: Fielding, G., CallCentreHelper (sin réplica
  académica encontrada, 16-10-2026). [CONSENSO]
