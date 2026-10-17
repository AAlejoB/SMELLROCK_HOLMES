# Caso 04: «Conocer un perfume que sólo conocés por el nombre»

> Abierto el 16-10-2026. Estado: **primera pasada** (lo que se ve en el código
> de ST y en lo ya investigado; falta probar con personas).

## La pregunta, en palabras de Alejo

- Una secuencia fácil para conocer un perfume que sólo conocés por el nombre.

## 1. Lo puntual: ST, hoy

Alguien escuchó un nombre (se lo recomendó una amiga, lo vio en un video) y
entra a ST. Qué encuentra, paso a paso (`origin/main`, 16-10-2026):

| Paso | Qué hay en ST | ¿Resuelve? |
|---|---|---|
| 1. Encontrarlo | Buscador «por nombre, marca o nota». Lo que se busca y no aparece queda guardado (`search_empty`) | ✅ Existe. No sabemos cuántos nombres no se encuentran: el dato está, falta leerlo |
| 2. Saber a qué huele | En la ficha: foto, precio y la pirámide (**salida, corazón, base**) con nombres de notas | ⚠️ A medias. Nombres de notas sin traducir («ámbar», «oud»), sin duración, sin estela, sin estación ni ocasión |
| 3. Compararlo con uno conocido | «◆ Similares» (por notas en común) y «Comparar» | ✅ Bien, y sin nombrar marcas ajenas |
| 4. Probarlo sin comprar el frasco | Decants: el armador de decants, el banner de decants de diseñador y el «Consultá un decant» del Desafío | ⚠️ Existe, pero **desde la ficha del perfume no hay un camino al decant de ese perfume** |
| 5. Decidir | «Agregar» o «Consultar →» (WhatsApp) | Ver `casos/03` |

Otras cosas que ayudan y ya están: el quiz «¿No sabés cuál? 4 preguntas» y el
filtro «¿A qué huele?». Sirven a quien **no** tiene un nombre; este caso es el
de quien sí lo tiene.

## 2. Lo general: por qué es difícil y cuál es la secuencia

### El problema de fondo
**El olor no viaja por internet.** «No poder ver ni oler el producto» es la
barrera n.º 1 para comprar online en Argentina (49 %, [MERCADO], CACE 2025,
vía `negocio-ar`). Y en Estados Unidos, el 88 % elige un perfume por cómo
huele, antes que por precio o marca ([MERCADO], YouGov 2025, vía `negocio-ar`;
no se puede llevar tal cual a Argentina).

### Lo que dice la evidencia
- **Imaginar un olor funciona sólo con una imagen concreta.** Krishna, Morrin
  y Sayin (2014) mostraron que pedir «imaginá cómo huele» no hacía efecto **si
  no había una foto** del producto. Con foto, la gente lo deseaba más y comía
  más. [EXPERIMENTO] (con comida, no con perfume; no encontramos réplica).
  Para un perfume: «huele a café y vainilla» se puede imaginar; «oriental
  amaderado» no.
- **Lo que se entiende fácil gusta más** (ficha [fluidez](../tecnicas/fluidez.md)).
  Nombres de notas técnicos y nombres de perfumes difíciles de escribir
  agregan esfuerzo.
- **Con muchas opciones y sin saber qué quiere, la gente se frena** (ficha
  [sobrecarga-de-opciones](../tecnicas/sobrecarga-de-opciones.md)). Quien
  llega con un nombre ya achicó la elección: no hay que abrirle 200 opciones
  de nuevo, sino 2 o 3 parecidas.
- **Probar en chico baja el riesgo.** Las tiendas de perfume del mundo lo
  hacen con muestras, decants y «probalo y si no te gusta devolvé el frasco
  cerrado» ([VENDOR], vía `negocio-ar`). No hay datos independientes de
  cuántos pasan del decant al frasco.

### La secuencia (versión simple)

> **1. Encontrarlo** aunque esté mal escrito.
> **2. Traducirlo** a 2 o 3 cosas que todos conocen («café, vainilla, algo de
> madera»), con foto real, y con 3 datos simples: **cuánto dura, cuánto se
> siente** (si llega a los demás o queda cerca) **y para cuándo** (día,
> noche, verano, invierno).
> **3. Compararlo** con uno que la persona ya conoce («si te gusta X de la
> tienda, este es más dulce»).
> **4. Probarlo en chico** antes del frasco: decant, oler en el local, o
> devolver el frasco cerrado.

Los pasos 1 y 3 ST ya los tiene. El 2 está a medias y el 4 existe pero no se
conecta desde la ficha.

Para duración y estela: **son datos de la comunidad (votos en sitios de
perfumes) o de la tienda, no de un laboratorio**. Si se muestran, se dice de
dónde salen («según quienes lo usan»). Ninguna cadena grande los muestra: es
un diferencial ([observado], vía `negocio-ar`, 6-10-2026).

### ¿Le pasa a otras tiendas?

| Rubro | «Sólo conozco el nombre» se parece a… | La secuencia |
|---|---|---|
| Otra perfumería | Lo mismo | La misma, tal cual |
| Belleza | Un tono que no viste en tu piel | Encontrar → foto en 3 tonos de piel → comparar con el tuyo → muestra o tester |
| Ropa | Una prenda que viste en otra persona | Encontrar → medidas y tela en palabras simples → «si usás M en tal marca» → cambio fácil |
| Mayorista | Un producto que pidió un cliente del comercio | Encontrar por código o nombre → ficha técnica corta → «reemplaza a…» → muestra o pedido mínimo chico |

## 3. La regla que sale (borrador para `reglas/`)

> **Regla 05: Lo que no se puede probar online se traduce y se achica.**
> Traducirlo: 2 o 3 cosas conocidas, foto real y 3 datos simples (cuánto dura,
> cuánto se siente, para cuándo). Achicarlo: una versión chica o una
> devolución fácil, a un toque desde la ficha.

Pasa a `reglas/` cuando se pruebe con personas (§ 4, paso 2).

## 4. Cómo seguir (y qué hace falta)

En el orden del método A del [foro 02](../foro/02-como-se-investiga.md) (si
Alejo elige otro, se reordena).

| Paso | Rol | Qué hace falta | Quién |
|---|---|---|---|
| 1. Leer `search_empty`: las 20 búsquedas sin resultado más repetidas | `leer-numero` | Mirarlo desde el panel de ST; al repo entran las palabras buscadas, no quién | Alejo |
| 2. Prueba con 5 personas: «te recomendaron el X: averiguá cómo huele y decidí si lo comprarías» (el nombre se dicta, no se muestra escrito) | `qa-preguntas` | 5 personas, una tarde | Alejo |
| 3. Contar cuántas búsquedas terminan en una ficha abierta (`ficha_abierta`) | `leer-numero` | 2-4 semanas de datos de la pestaña Holmes | — |
| 4. Si se agrega «probalo en decant» a la ficha: comparar antes y después cuántas fichas terminan en un pedido de decant | `leer-numero` | El botón (sesión en ST o plataforma) y que el pedido de decant se cuente | Más adelante |

Cómo leer el paso 2: con 5 personas no hay %. Si 4 de 5 no pueden decir a qué
huele después de leer la ficha, el problema es grande (con 5, el rango de «4
de 5» va de 38 % a 96 %: alcanza para saber que no es raro, no para un número).

## Preguntas de QA (sin sí ni no)

```
Pregunta: «Después de leer la ficha, contame con tus palabras cómo huele.»
Qué esperamos ver: si la ficha se traduce a algo imaginable
Se mide con: cuántas de las 5 lo describen con cosas concretas · prueba con 5
Cuántos hacen falta: 5 personas
```

```
Pregunta: «La última vez que compraste un perfume que no habías olido, ¿cómo te decidiste?»
Qué esperamos ver: qué usaron (reseñas, videos, una amiga, un decant, el parecido con otro)
Se mide con: lista de fuentes y cuántas veces aparece cada una · prueba con 5
Cuántos hacen falta: 5 personas
```

```
Pregunta: «¿Qué te faltaría saber para comprarlo sin olerlo?»
Qué esperamos ver: duración, estela, ocasión, precio de una versión chica
Se mide con: lista de faltantes · prueba con 5 y chats de ST (caso 03)
Cuántos hacen falta: 5 personas
```

```
Tarea: «Te dicto un nombre: buscalo.»
Qué esperamos ver: si el buscador perdona errores
Se mide con: intentos hasta encontrarlo y cuántas lo encuentran · prueba con 5
Cuántos hacen falta: 5 personas
```

## Límite ético y legal

- **Decants: riesgo sanitario.** Fraccionar perfume es una actividad regulada
  (ANMAT); `negocio-ar` lo marca como **riesgo alto** y para abogado
  sanitarista antes de escalar. La regla 05 dice «versión chica» en general;
  para decants en particular vale esa advertencia. **No es asesoramiento
  legal.**
- **Marcas ajenas:** «si te gusta X probá Y» con una marca que la tienda no
  vende es riesgo medio-alto (`negocio-ar`). Comparar **dentro del catálogo
  propio** y por notas, como ya hace «Similares».
- **Duración y estela:** decir de dónde salen. Prometer «dura 12 horas» es
  publicidad y obliga (Ley 24.240, art. 8).
- **Devolver el frasco cerrado** ya es un derecho (10 días, botón de
  arrepentimiento, Disp. 954/2025): contarlo como ventaja es válido; cobrarlo o
  esconderlo, no.

## Técnicas usadas

- [fluidez](../tecnicas/fluidez.md) (nueva)
- [sobrecarga-de-opciones](../tecnicas/sobrecarga-de-opciones.md)
- [prueba-social](../tecnicas/prueba-social.md) (nueva): reseñas con
  duración y ocasión reemplazan un poco el no poder oler.
- [friccion-y-esfuerzo](../tecnicas/friccion-y-esfuerzo.md): el decant a un
  toque desde la ficha.

Preguntas abiertas: 16 y 17 de `preguntas/abiertas.md`.
