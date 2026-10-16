---
name: leer-numero
description: "Rol de lector de métricas, estadística y probabilidades de SMELLROCK HOLMES. Usar antes de creerle a cualquier número (conversión, clics, ventas, visitas del Laboratorio de ST, un % de un estudio), antes de proponer o leer un A/B, cuando hay que decir cuántas visitas o ventas hacen falta, o cuando Alejo pregunta si un cambio funcionó. Dice si el número dice algo o es ruido, con la cuenta a la vista."
---

# Leer un número

Antes de opinar sobre un número, contestá estas cinco cosas, en orden.

## 1. ¿Qué cuenta, exactamente?

Leé de dónde sale (la consulta, el evento, la encuesta). Muchos números no
miden lo que dice su nombre. Ejemplo real: en el Laboratorio de ST, «vistas»
no son visitas a la web (ver `casos/01-mira-y-no-compra.md`).

## 2. ¿Cuántos casos hay detrás?

Visitas, sesiones, ventas, personas. Sin ese número, el % no se usa.

## 3. ¿Cuál es el intervalo?

Toda tasa va con su rango probable. Para pocas observaciones, **intervalo de
Wilson al 95 %**:

```
p = éxitos / n          z = 1,96
centro = (p + z²/2n) / (1 + z²/n)
margen = z × √(p(1−p)/n + z²/4n²) / (1 + z²/n)
intervalo = centro ± margen
```

Ejemplo: 3 ventas de 60 visitas = 5 %, pero el intervalo va de **1,7 % a
13,7 %**. Con eso no se puede decir que «convierte al 5 %».

## 4. ¿Alcanza para comparar?

Para un A/B con dos tasas, visitas por versión:

```
n ≈ (1,96 + 0,84)² × (p1(1−p1) + p2(1−p2)) / (p1 − p2)²
```

(80 % de chances de ver el efecto si existe, 5 % de riesgo de ver uno que no
hay.) Ejemplo: de 3 % a 4 % → ~5.300 por versión.

Después, **¿en cuánto tiempo se juntan?** Dividí por las visitas por semana de
la tienda. Si da más de 6-8 semanas, **no hagas el A/B**. Alternativas:
- Prueba con 5 personas: ve los problemas grandes (no mide %).
- Antes y después, con el intervalo de cada período, y anotando qué más cambió
  (fecha comercial, precios, clima, stock).
- Mirar un paso del embudo que pase más seguido (abrir ficha en vez de comprar).

## 5. ¿Qué más pudo moverlo?

Fechas (aguinaldo, Día de la Madre, Navidad), un posteo que se viralizó, un
cambio de precio, un perfume que se quedó sin stock, un bot. Un número que
salta sin que hayas cambiado nada **también es ruido**.

## Cómo mostrarlo en una pantalla

Regla `reglas/mostrar-un-dato.md` (elegida por Alejo): tres capas.
Arriba «1 de cada 20» (y «todavía son pocas» si corresponde), para decidir «85 %
de chances de que B sea mejor; decidimos con 95 %», y en «ver detalle» el rango.
Las cuentas y las frases ya están en `herramientas/numeros.js`: usalo, no las
rehagas a mano.

## Cómo contestarle a Alejo

Una línea con el veredicto («dice algo», «es ruido», «no se puede saber
todavía»), una con la cuenta, y una con **qué haría falta** para saberlo
(cuántas visitas, cuántas semanas, o qué medir que hoy no se mide).

## Trampas que siempre revisar

- Un evento que se pierde: en celular, `beforeunload` muchas veces no corre.
- Una misma persona contada muchas veces (o muchas personas contadas como una).
- Un % sobre una base que cambió (de 10 a 20 visitas «se duplicó»).
- Elegir el período que conviene. Fijar el período **antes** de mirar.
- Mirar el A/B todos los días y cortarlo cuando gana: infla los falsos
  ganadores. Fijar el tamaño antes y no espiar para decidir.
