# Regla: cómo se muestra un dato

> Sale del [foro 01](../foro/01-como-mostrar-un-dato.md). Elegida por Alejo el
> 16-10-2026: «combinando los 3 es hermoso, sobre todo B y C».
> Vale para cualquier tienda y cualquier rubro: cualquier «de N personas, K
> hicieron algo» (miraron → escribieron, entraron → compraron, abrieron el
> mail → tocaron el link).

## La regla

Todo número de conversión se muestra en tres capas:

| Capa | Qué se ve | Para quién | Método |
|---|---|---|---|
| **Arriba** | «1 de cada 20» + muñequitos (20, con 1 pintado). Si son pocas personas, la línea «Todavía son pocas personas (60)» | Todos: dueño, empleada | C · frecuencias naturales (Gigerenzer) |
| **Para decidir** | «85 % de chances de que B convierta más. Para decidir esperamos a 95 %» | Quien decide (cambiar la portada, pedir stock) | B · bayesiano |
| **Ver detalle** | «5,0 % (entre 1,7 % y 13,7 %), 3 de 60» + cuántas visitas haría falta para un A/B | Alejo, Lautaro, Luka | A · intervalo de Wilson |

## Reglas fijas

1. **La vara para decidir es 95 % y se fija antes de mirar.** No se baja
   porque «ya casi».
2. **Nunca «100 %».** Con datos finitos nada es seguro: se muestra «más de
   99 %».
3. **«Todavía son pocas»** aparece cuando el rango es más ancho que la tasa
   misma (con 3 de 60, el rango mide 12 puntos y la tasa 5: son pocas).
4. **El dibujo dice lo mismo que el texto**: «1 de cada 20» son 20 muñequitos
   con 1 pintado.
5. **Antes de mostrar, saber qué cuenta el número** (regla dura 4 de
   `CLAUDE.md`). Si «miraron» cuenta toques de scroll, ninguna capa lo
   arregla.

## Límite ético
Mostrar la incertidumbre es la parte honesta. Lo que no se hace: esconder el
aviso de «son pocas» para que un número se vea mejor, o elegir el período que
conviene.

## Cómo se implementa

Con [`herramientas/numeros.js`](../herramientas/numeros.js), sin
dependencias: `compararDos(a, b, nombres)` y `mostrarUno(exitos, total)`
devuelven las tres capas ya escritas en castellano. Probarlo:
[`herramientas/demo.html`](../herramientas/demo.html). Detalle en
[`herramientas/README.md`](../herramientas/README.md).

## Dónde se probó
- Todavía en ninguna tienda real. Primera candidata: el Laboratorio de ST o el
  panel de la plataforma (decide Alejo con Lautaro).
