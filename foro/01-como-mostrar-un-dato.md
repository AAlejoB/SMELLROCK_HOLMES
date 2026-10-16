# Foro 01: ¿Cómo se muestra un dato?

> Abierto el 16-10-2026. Formato foro: cada autor de la
> [biblioteca base](../fuentes/biblioteca-base.md) «postea» lo que defendería,
> **con nuestras palabras** (no son citas: es un resumen de la idea de su
> libro). Al final, Holmes cierra y Alejo elige.

## El caso que se discute

En una semana, en la web de una perfumería:

| | Miraron la ficha | Escribieron por WhatsApp | % |
|---|---|---|---|
| Perfume A | 60 | 3 | 5 % |
| Perfume B | 90 | 9 | 10 % |

El dueño pregunta: **«¿B vende mejor que A?»**

---

### 💬 Kohavi (experimentos online)
> Antes de contestar, ¿qué cuenta «miraron la ficha»? Si cuenta toques al
> hacer scroll, el 5 % y el 10 % no significan nada. Y si alguien eligió esta
> semana porque B «salió bien», ya está sesgado. Primero la medición, después
> el número.

### 💬 Spiegelhalter (estadística)
> Un 5 % sacado de 60 personas no es un 5 %. Es «algo entre 2 % y 14 %».
> El de B, «entre 5 % y 18 %». Los dos rangos se pisan: con estos datos no
> se puede asegurar que B sea mejor. **Mostrá el rango.**

### 💬 Gigerenzer (riesgo)
> El dueño no piensa en porcentajes. Decile: «De cada 20 que miran A, 1
> escribe. De cada 10 que miran B, 1 escribe». Eso se entiende de una. Y
> agregá cuántas personas son: 60 y 90 es poco.

### 💬 La mirada bayesiana (probabilidad con pocos datos)
> El dueño no preguntó por rangos: preguntó si B es mejor. Eso se puede
> contestar con una chance: **hay 85 % de chances de que B convierta más
> que A**. No es seguro, pero es lo que quiere saber, y sirve aunque haya
> pocos datos.

### 💬 Croll y Yoskovitz (Lean Analytics)
> ¿Qué vas a hacer distinto según la respuesta? Si la respuesta no cambia
> ninguna decisión (poner B arriba, pedir más stock de B), no lo midas.

### 💬 Knaflic (gráficos)
> Sea cual sea el método: un gráfico, una idea, y el título dice la
> conclusión. No «Conversión por perfume», sino «B parece mejor, pero
> todavía son pocos».

### 💬 Holmes cierra
Los cuatro tienen razón en algo. Hay tres formas de mostrarlo. Elegí una para
el Laboratorio (y después para la plataforma).

---

## Los tres métodos

### A. El número con su rango (intervalo de Wilson)
**Lo que se ve:**
> A: **5 %** (entre 1,7 % y 13,7 %) · B: **10 %** (entre 5,4 % y 17,9 %)
> Los rangos se pisan: todavía no se sabe cuál es mejor.

Gráfico: una barra o un punto por perfume, con una rayita que marca el rango.

- 👍 Es lo estándar. Honesto: no exagera.
- 👎 «Intervalo» cuesta explicarlo. Mucha gente mira sólo el número grande.
- De: Spiegelhalter, Kohavi.

### B. La chance de que uno gane (bayesiano)
**Lo que se ve:**
> **85 %** de chances de que B convierta más que A.
> Para decidir, esperamos a 95 %.

Gráfico: una barra de 0 a 100 con la marca del 95 %.

- 👍 Contesta exactamente la pregunta del dueño. Anda con pocos datos.
- 👎 La gente lee «85 %» como «seguro». Hay que fijar antes el umbral para
  decidir (95 %) y no moverlo.
- De: la estadística bayesiana (Bayes, 1763; Laplace), la usan hoy varias
  herramientas de A/B.

### C. De cada tantos (frecuencias naturales)
**Lo que se ve:**
> De cada **20** que miran A, **1** escribe.
> De cada **10** que miran B, **1** escribe.
> Todavía son pocas personas (60 y 90).

Gráfico: 20 muñequitos con 1 pintado, y 10 con 1 pintado.

- 👍 Lo entiende cualquiera: el dueño, la empleada, un cliente nuevo de la
  plataforma.
- 👎 Solo, no dice cuán seguro es. Necesita la línea «todavía son pocas».
- De: Gigerenzer.

### La recomendación de Holmes: **C arriba, B para decidir, A en «ver detalle»**
- En la pantalla: **C**, porque se entiende sin explicar.
- Abajo, una frase con **B**, sólo cuando hay que decidir algo («85 % de
  chances de que B sea mejor; con 95 % lo movemos arriba»).
- Para Alejo, Lautaro y Luka, al tocar «ver detalle»: **A**, con los números
  crudos.

## La cuenta, a la vista

- Wilson al 95 %: A = 3 de 60 → 1,7 % a 13,7 %. B = 9 de 90 → 5,4 % a 17,9 %.
- Bayesiano: Beta(1+3, 1+57) contra Beta(1+9, 1+81), 200.000 simulaciones →
  P(B > A) ≈ 0,85.
- ¿Cuántas visitas hacen falta para un A/B que distinga 5 % de 10 %? Unas
  **430 por perfume** (80 % de chances de verlo si existe, 5 % de riesgo de
  falso positivo).

## Lo que se decide acá
- [ ] Alejo elige A, B, C o la combinación.
- [ ] Lo elegido se vuelve una regla en `reglas/` y una sección de
  `leer-numero`.
- [ ] Se lleva al Laboratorio de ST o directo a la plataforma (decide Alejo con
  Lautaro).
