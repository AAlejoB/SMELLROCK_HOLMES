# Caso 03: «¿Por qué cansa comprar por WhatsApp?»

> Abierto el 16-10-2026. Estado: **primera pasada** (lo que se ve en el código
> de ST y en lo ya investigado; falta leer chats reales y probar con personas).

## La pregunta, en palabras de Alejo

- ¿Por qué cansa comprar por WhatsApp o preguntar por un perfume?
- (En el caso 01: «¿por qué es tedioso comprar por WhatsApp?»)

## 1. Lo puntual: ST, hoy

### 1.a El camino, contado en pasos

Hoy en ST la compra por la web termina en un chat. Desde el celular:

| # | Paso | Quién lo hace | Tipo de costo (Fogg) |
|---|---|---|---|
| 1 | Ver el perfume y tocar «Consultar →» (o «Agregar» y después enviar el pedido) | La persona | Ninguno: un toque |
| 2 | Se abre WhatsApp con el mensaje **ya escrito** (nombre, precio, 3 cuotas, precio en efectivo) | La web | Ninguno: bien resuelto |
| 3 | Tocar «enviar» | La persona | Social: ahora hay una persona del otro lado |
| 4 | **Esperar** la respuesta | La persona | **Tiempo** (fuera de horario, hasta que abra el local) |
| 5 | Contestar lo que la web no dijo: ¿hay stock?, ¿cómo llega?, ¿cuánto sale el envío?, ¿cómo pago? | Los dos, ida y vuelta | **Tiempo y esfuerzo mental**, una vez por pregunta |
| 6 | Pagar (transferencia o link) y mandar el comprobante | La persona | Esfuerzo físico y mental |
| 7 | Coordinar retiro o envío | Los dos | Tiempo |

Lo que ST ya hace bien:
- **El mensaje armado** (paso 2). Muchas tiendas abren el chat vacío y la
  persona tiene que escribir qué quiere. Eso es esfuerzo mental que ST se
  ahorra.
- **El horario a la vista** («Abierto · cierra a las …»): avisa antes si la
  espera va a ser larga.
- El carrito («Tu pedido») junta varios perfumes en **un solo** mensaje.

Lo que agrega pasos:
- **El mensaje termina en «¿Tienen disponibilidad?»** aunque la web ya sabe
  el stock (sin stock no aparece «Consultar»). La primera ida y vuelta es para
  confirmar algo que la página ya sabía. (Si el stock de la web no es
  confiable, el problema es otro: pregunta 15.)
- **El envío no aparece antes del chat** (ver `casos/01`, 1.b). Pasa a ser una
  pregunta, o sea una ida y vuelta más.
- **El botón flotante de WhatsApp** abre un mensaje genérico («quiero
  consultar por un perfume»): ahí la persona sí tiene que escribir cuál.
- El **«Consultá un decant»** del juego Desafío manda a **otro número** de
  WhatsApp, distinto del resto de la web (pregunta 14).

### 1.b Antes de medir el chat, ¿se cuentan bien los clics a WhatsApp? → **no del todo**

Rol `leer-numero`, leyendo `js/app.js` y `css/styles.css` de ST
(`origin/main`, 16-10-2026). El evento `wa_click` sólo se registra en
`goToWA()`. Cada camino a WhatsApp:

| Camino | ¿Suma a `wa_click`? |
|---|---|
| «Consultar →» de la ficha abierta (hoja de abajo) | ✅ |
| «Consultar →» al pasar el mouse por la tarjeta (computadora) | ✅ |
| **«Consultar →» de la tarjeta en el celular** (link directo; el CSS lo muestra sólo debajo de 768 px **y sólo en la vista ▦**: en la vista ☰, que es la de arranque, está escondido) | ❌ |
| **Enviar el pedido del carrito** (`sendCartToWA`) | ❌ |
| Botón flotante, sets, banner de decants, armador de decants, aviso de stock | ❌ |

**Conclusión:** el «quiso comprar» que el caso 01 tomaba de `wa_click` **cuenta
de menos**: el botón de la tarjeta en el celular, el pedido armado con el
carrito y los demás caminos no suman. Cualquier tasa llegó → WhatsApp que se
arme con `wa_click` da **más baja** de lo real. Cuánto más baja, no se sabe.

> **Corrección (16-10-2026, sesión de ST):** en la primera versión de este caso
> dijimos que el botón de la tarjeta en el celular era «el camino más común».
> **Probablemente no lo es**: en la vista ☰ (la de arranque en el celular) ese
> botón está escondido por CSS (`css/styles.css`, regla
> `html[data-vista="lista"] … .card-cta-mobile`). En ☰ se llega a WhatsApp
> tocando la fila → la ficha → «Consultar», que **sí** sumaba. Lo va a decir el
> dato de origen de `wa_intento`.

**Arreglado en ST el 16-10-2026** (pregunta 13): evento nuevo `wa_intento` en
los 12 caminos que abren WhatsApp, cada uno con su **origen** (ficha, tarjeta,
carrito, flotante, etc.), con nombre nuevo para no cambiar lo que ya cuenta el
Laboratorio con `wa_click`. Está en producción y la pestaña Holmes lo cuenta
desde el 16-10 a las 23:46, con los orígenes por separado.

Ojo al leerlo: una misma visita puede dejar **varias `llegada` seguidas**
(hubo 3 en 3 segundos desde un iPhone). La visita se cuenta por sesión y día,
así que la cuenta de Holmes no cambia; lo que no hay que hacer es contar
llegadas sueltas.

### 1.c Lo que pasa adentro del chat → **hoy no se sabe**

No hay datos de cuánto tarda la respuesta, cuántas idas y vueltas hay ni
cuántos chats terminan en venta (pregunta 3, abierta desde el caso 01). Es la
parte más importante del caso y se resuelve **leyendo chats**, sin tocar
código (ver § 4).

## 2. Lo general: por qué cansa comprar por chat

Con la ficha [friccion-y-esfuerzo](../tecnicas/friccion-y-esfuerzo.md):

1. **Esperar es el costo más caro.** Un botón de «comprar» contesta en un
   segundo; una persona, en minutos u horas. Cada pregunta que la página no
   contesta **se convierte en una ida y vuelta**, y cada ida y vuelta es una
   espera más. Una compra con 4 preguntas y 15 minutos por respuesta lleva una
   hora.
2. **Escribir cuesta más que tocar.** Redactar, pensar cómo preguntar,
   negociar. Por eso el mensaje armado de ST ayuda.
3. **Hay un costo social.** Del otro lado hay una persona: preguntar el precio
   y no comprar puede dar vergüenza, y cortar la charla también. Es una
   **hipótesis**: se confirma con las preguntas de QA de § 4.
4. **Depende de qué vino a hacer la persona** (Christensen, ver
   `fuentes/biblioteca-base.md`):

   | Vino a… | ¿El chat ayuda? | Qué necesita |
   |---|---|---|
   | Comprar uno que ya eligió (llega de un video, recompra el suyo) | ❌ Es un peaje | Precio, stock, envío y pago en la web; cerrar sin hablar con nadie |
   | Elegir con ayuda («algo para regalar», «uno que dure») | ✅ Es el valor de la tienda | Una persona que asesora rápido |

   La investigación de la plataforma llega a lo mismo: la venta «sin
   preguntas» se cierra sola en la web, y el chat queda para asesorar.
   (`negocio-ar`, mercado-y-canales, 6-10-2026; es inferencia, sin A/B
   argentino.)

5. **WhatsApp no es el problema; usarlo para todo, sí.** En Argentina casi
   todos lo usan con comercios (86 %, [MERCADO], fuente sin nombre en la nota,
   vía `negocio-ar`). No hay estudio serio de cuánto vende el chat contra un
   checkout en la web en Argentina (hueco anotado en `negocio-ar`).

### ¿Le pasa a otras tiendas?

| Rubro | La pregunta que termina en el chat | Cómo se saca |
|---|---|---|
| Otra perfumería | Stock, envío, «¿es original?» | Stock real, envío con fecha, prueba de autenticidad en la ficha |
| Ropa | Talle y cambio | Tabla de talles y cambio escrito |
| Belleza | Tono, tipo de piel | Guía de tonos; el chat para el que duda |
| Mayorista | Lista de precios, mínimo, precio por bulto | Lista pública y pedido armado; el chat para negociar volumen |

## 3. La regla que sale (borrador para `reglas/`)

> **Regla 03: Cada pregunta que la página no contesta se convierte en una ida
> y vuelta en el chat.** Leé 20 chats reales, anotá qué se preguntó antes de
> comprar y subí a la web las 3 preguntas que más se repiten. El chat queda
> para quien quiere asesoramiento, no para confirmar lo que la página ya sabe.
>
> **Regla 04: Antes de medir el chat, contá todas las puertas que llevan a él.**
> Si un camino a WhatsApp no suma al conteo, la tasa sale más baja de lo real.

Pasan a `reglas/` cuando se lean los chats de ST (§ 4, paso 1).

## 4. Cómo seguir (y qué hace falta)

Ordenado como el método A del [foro 02](../foro/02-como-se-investiga.md):
primero el porqué, después el cuánto. Si Alejo elige otro, se reordena.

| Paso | Rol | Qué hace falta | Quién |
|---|---|---|---|
| 1. Leer 20 a 30 chats que empezaron en la web | `qa-preguntas` | Que ST anote, **sin nombres ni teléfonos**: hora del primer mensaje, hora de la primera respuesta, qué preguntó, cuántas idas y vueltas hubo y si compró. Al repo entran sólo los conteos | ST |
| 2. Prueba con 5 personas: «comprá este perfume hasta que te lo confirmen» | `qa-preguntas` | 5 personas, una tarde | Alejo |
| 3. ~~Que todos los caminos a WhatsApp sumen un evento con su origen~~ **Hecho el 16-10** (`wa_intento`) | `leer-numero` | — | — |
| 4. Con los pasos 1 y 3: de cada 10 que escriben, cuántas compran, con su rango | `leer-numero` | Los conteos del paso 1 | — |
| 5. A/B «carrito con pago en la web» contra «WhatsApp» | `leer-numero` | Un checkout real (la plataforma lo tiene) y ~3.800 visitas por versión para ver de 2 % a 3 % | Más adelante |

Cómo leer el paso 4, con la regla [mostrar-un-dato](../reglas/mostrar-un-dato.md):
si de 30 chats compran 12, se dice «4 de cada 10» y en el detalle «entre 25 %
y 58 %». **Con 30 chats el rango es muy ancho**: sirve para ver si son «casi
todos» o «casi nadie», no para comparar dos meses.

## Preguntas de QA (sin sí ni no)

```
Pregunta: «La última vez que compraste algo por WhatsApp, ¿cómo fue, desde que escribiste hasta que lo tuviste?»
Qué esperamos ver: los pasos y las esperas, con sus palabras
Se mide con: n.º de idas y vueltas y minutos que nombran · de dónde sale: prueba con 5
Cuántos hacen falta: 5 personas para ver problemas
```

```
Pregunta: «¿Alguna vez preguntaste un precio por chat y después no contestaste? Contame qué pasó.»
Qué esperamos ver: si existe el costo social (vergüenza de no comprar)
Se mide con: cuántas de las 5 cuentan algo así · prueba con 5
Cuántos hacen falta: 5 personas
```

```
Pregunta: «¿Qué tuviste que preguntarle a la tienda que la página no decía?»
Qué esperamos ver: las preguntas que se pueden subir a la web
Se mide con: lista de preguntas y cuántas veces aparece cada una · prueba con 5 y chats de ST
Cuántos hacen falta: 20 chats para una lista confiable de las 3 más comunes
```

```
Pregunta: «Si pudieras comprar este perfume sin hablar con nadie, ¿cómo lo harías? Mostrame.»
Qué esperamos ver: qué camino buscan (botón de comprar, carrito, pago)
Se mide con: dónde tocan primero · prueba con 5
Cuántos hacen falta: 5 personas
```

## Técnicas usadas

- [friccion-y-esfuerzo](../tecnicas/friccion-y-esfuerzo.md) (nueva)
- [primera-impresion](../tecnicas/primera-impresion.md): el envío que no
  aparece arriba vuelve como pregunta en el chat.

Preguntas abiertas: 3, 8 y 12 a 15 de `preguntas/abiertas.md`.
