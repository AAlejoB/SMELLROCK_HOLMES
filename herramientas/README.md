# Herramientas

Código chico y sin dependencias que sale de las reglas, para llevar a
cualquier tienda o panel (el Laboratorio de ST, la plataforma SaaS).

## `numeros.js`: cómo mostrar un dato

Implementa la regla [mostrar-un-dato](../reglas/mostrar-un-dato.md).

```js
// En el navegador: <script src="numeros.js"></script>  → window.HolmesNumeros
// En Node:         const H = require('./numeros.js')
const H = window.HolmesNumeros;

H.compararDos({ exitos: 3, total: 60 }, { exitos: 9, total: 90 }, ['Perfume A', 'Perfume B']);
// principal: ['Perfume A: 1 de cada 20', 'Perfume B: 1 de cada 10']        ← C, arriba
// aviso:     'Todavía son pocas personas (60 y 90)'
// decision:  '85 % de chances de que Perfume B convierta más. Para decidir esperamos a 95 %.'  ← B
// detalle:   ['Perfume A: 5,0 % (entre 1,7 % y 13,7 %)', …, 'Para un A/B firme: ~432 por versión']  ← A

H.mostrarUno(3, 60);
// principal: '1 de cada 20', aviso: 'Todavía son pocas personas (60)', detalle: '5,0 % (entre 1,7 % y 13,7 %), 3 de 60'
```

Las piezas sueltas: `rango` (Wilson al 95 %), `deCadaTantos`,
`chanceDeGanar` (P(B > A), cuenta exacta con Beta(1,1) de partida, sin
simular), `cuantasHacenFalta(p1, p2)` (visitas por versión, 80 % de potencia),
`sonPocas`.

**Para TypeScript (plataforma):** se copia tal cual con tipos, o se importa
con `require`. No usa nada del navegador.

## Probar

Los tests (Node 18 o más, sin instalar nada):

```bash
node --test herramientas/numeros.test.js
```

La página de prueba, para cambiar números y ver las tres capas: abrir el
preview «herramientas» de `.claude/launch.json`, o
`python -m http.server 8765 --directory herramientas` y entrar a
`http://localhost:8765/demo.html`.
