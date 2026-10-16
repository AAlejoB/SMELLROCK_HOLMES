// Correr: node --test herramientas/
const test = require('node:test');
const assert = require('node:assert/strict');
const H = require('./numeros.js');

const cerca = (a, b, tol) => assert.ok(Math.abs(a - b) <= tol, `${a} no está cerca de ${b}`);

test('A · rango de Wilson del ejemplo del foro', () => {
  const a = H.rango(3, 60);
  cerca(a.desde, 0.0171, 0.0005);
  cerca(a.hasta, 0.1370, 0.0005);
  const b = H.rango(9, 90);
  cerca(b.desde, 0.0537, 0.0005);
  cerca(b.hasta, 0.1792, 0.0005);
});

test('A · bordes: 0 de N, N de N, 0 de 0', () => {
  assert.equal(H.rango(0, 50).desde, 0);
  assert.ok(H.rango(0, 50).hasta > 0.05);
  assert.equal(H.rango(50, 50).hasta, 1);
  assert.equal(H.rango(0, 0).tasa, null);
  assert.throws(() => H.rango(5, 3), RangeError);
  assert.throws(() => H.rango(1.5, 3), RangeError);
});

test('C · de cada tantos', () => {
  assert.equal(H.deCadaTantos(3, 60).texto, '1 de cada 20');
  assert.equal(H.deCadaTantos(9, 90).texto, '1 de cada 10');
  assert.equal(H.deCadaTantos(7, 10).texto, '7 de cada 10');
  assert.equal(H.deCadaTantos(0, 40).texto, 'Nadie todavía, de 40 que miraron');
  assert.equal(H.deCadaTantos(0, 0).texto, 'Todavía nadie lo miró');
});

test('B · chance de ganar coincide con la simulación del foro (≈ 0,846)', () => {
  cerca(H.chanceDeGanar({ exitos: 3, total: 60 }, { exitos: 9, total: 90 }), 0.846, 0.003);
});

test('B · simétrica y 50 % con datos iguales', () => {
  const a = { exitos: 4, total: 50 }, b = { exitos: 10, total: 70 };
  cerca(H.chanceDeGanar(a, b) + H.chanceDeGanar(b, a), 1, 1e-9);
  cerca(H.chanceDeGanar(a, a), 0.5, 1e-9);
});

test('B · con muchos datos y diferencia clara, decide', () => {
  const r = H.compararDos({ exitos: 50, total: 1000 }, { exitos: 100, total: 1000 });
  assert.ok(r.chance > 0.99);
  assert.equal(r.decidido, true);
  assert.equal(r.aviso, null);
  assert.match(r.decision, /^más de 99 % de chances/);   // nunca «100 %»
});

test('cuántas hacen falta', () => {
  assert.equal(H.cuantasHacenFalta(0.03, 0.04), 5298); // con z exactos; con 1,96 y 0,84 redondeados da 5.292
  assert.equal(H.cuantasHacenFalta(0.05, 0.10), 432);
});

test('frases del ejemplo del foro', () => {
  const r = H.compararDos({ exitos: 3, total: 60 }, { exitos: 9, total: 90 }, ['Perfume A', 'Perfume B']);
  assert.deepEqual(r.principal, ['Perfume A: 1 de cada 20', 'Perfume B: 1 de cada 10']);
  assert.equal(r.decision, '85 % de chances de que Perfume B convierta más. Para decidir esperamos a 95 %.');
  assert.equal(r.aviso, 'Todavía son pocas personas (60 y 90)');
  assert.equal(r.decidido, false);
  const uno = H.mostrarUno(3, 60);
  assert.equal(uno.principal, '1 de cada 20');
  assert.match(uno.detalle, /^5,0 % \(entre 1,7 % y 13,7 %\), 3 de 60$/);
});
