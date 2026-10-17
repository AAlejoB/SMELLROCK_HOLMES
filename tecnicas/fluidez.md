# Ficha: Fluidez («lo que se entiende fácil, gusta más»)

> Estado: borrador
> Última revisión: 16-10-2026

## Origen
**Reber, Schwarz y Winkielman, 2004.** Juntaron muchos experimentos y
propusieron una idea: lo que el cerebro procesa **sin esfuerzo** (claro, con
buen contraste, simple, ya visto, fácil de decir) **gusta más y parece más
cierto**. A esa facilidad la llaman fluidez. [CONSENSO] armado sobre
[EXPERIMENTO]

Antes, **Reber y Schwarz, 1999**: la misma frase se juzgaba más verdadera
cuando estaba escrita con buen contraste que con colores que costaba leer.
[EXPERIMENTO]

## Cómo evolucionó
- **Alter y Oppenheimer, 2006**: en la bolsa, las empresas con nombre fácil de
  pronunciar rindieron mejor en sus primeros días que las de nombre difícil.
  [CAMPO] Importa para perfumes con nombres que nadie sabe decir.
- **Novemsky, Dhar, Schwarz y Simonson, 2007**: cuando la información de una
  elección estaba escrita con letra difícil de leer, **más gente postergó la
  decisión**. [EXPERIMENTO] No encontramos réplica, ni a favor ni en contra.
- **Lo que no se sostuvo:** Alter y otros (2007) dijeron que una letra
  difícil hace pensar mejor (40 personas). **Meyer y otros (2015)** lo
  repitieron 16 veces con más de 7.000 personas y **no encontraron nada**.
  [NO REPLICA] La «dificultad que ayuda» no se usa como regla.
- **Krug, 2000** («no me hagas pensar») es la versión práctica para páginas
  web. [CONSENSO]

## La versión simple
**Que todo se lea y se entienda sin esfuerzo**: letra clara y grande, buen
contraste, palabras comunes («dura todo el día», no «gran fijación»), una
idea por renglón. Y que un nombre difícil **se pueda encontrar aunque esté mal
escrito**.

## Cuándo sirve / cuándo no
- Sirve: en todo lo que se lee en el celular: precio, cuotas, envío, la
  descripción del perfume.
- Sirve: en el buscador. Con nombres como los de perfumes árabes, la gente
  escribe como suena; si no encuentra, se va.
- No alcanza: hace que algo guste y se crea más, pero no lo hace cierto ni
  barato.

## En otros rubros
| Rubro | ¿Viaja? | Cómo |
|---|---|---|
| Perfumería | Sí | Notas en palabras de todos los días; buscador que tolera errores |
| Belleza | Sí | Nombres de tonos con referencia («beige medio, piel trigueña») |
| Ropa | Sí | Talles y medidas en una tabla simple, no en un párrafo |
| Mayoristas | Sí | Lista de precios legible en el celular, no un PDF chico |

## Límite ético y legal (Argentina)
- **Fluidez no es verdad.** Lo fácil de leer se cree más aunque sea falso. No
  se usa para hacer creíble algo dudoso («100 % original» sin prueba, una
  promesa de envío que no se cumple).
- **La información obligatoria también tiene que ser fácil de leer.** La ley
  pide información cierta, clara y detallada (Ley 24.240, art. 4). Hacer
  fluido el precio y difícil la condición (letra chica, poco contraste) va en
  contra de eso.

## Cómo se mide
- **Búsquedas sin resultado.** ST ya registra `search_empty` (búsquedas que no
  encontraron nada) con lo que se escribió. Mirar las más repetidas dice qué
  nombres no se encuentran (ver `casos/04`).
- **Prueba de 5 segundos** (rol `qa-preguntas`): «¿qué te acordás de este
  perfume?». Si no repiten nada de la descripción, no se entendió.
- **Tarea con 5 personas:** «buscá el perfume que te dicto» (dictado, sin
  mostrarlo escrito). Se cuenta cuántas lo encuentran y en cuántos intentos.

## Preguntas de QA (sin sí ni no)
- «Contame con tus palabras cómo huele este perfume, según lo que leíste» →
  si la descripción se entiende (cuántas lo dicen parecido).
- «¿Qué parte de esta página tuviste que leer dos veces?» → dónde falta
  fluidez.
- «Te dicto un nombre: buscalo» → intentos hasta encontrarlo.

## Lo que no sabemos
- ¿Qué se busca en ST y no se encuentra? → está en `search_empty`, falta
  leerlo (Alejo, desde el panel).

## Fuentes
- Reber, R., Schwarz, N. y Winkielman, P. (2004). *Processing fluency and
  aesthetic pleasure.* Personality and Social Psychology Review, 8(4).
  [CONSENSO]
- Reber, R. y Schwarz, N. (1999). *Effects of perceptual fluency on judgments
  of truth.* Consciousness and Cognition, 8(3). [EXPERIMENTO]
- Alter, A. y Oppenheimer, D. (2006). *Predicting short-term stock
  fluctuations by using processing fluency.* PNAS, 103(24). [CAMPO]
- Novemsky, N., Dhar, R., Schwarz, N. y Simonson, I. (2007). *Preference
  fluency in choice.* Journal of Marketing Research, 44(3). [EXPERIMENTO]
- Meyer, A. y otros (2015). *Disfluent fonts don't help people solve math
  problems.* Journal of Experimental Psychology: General, 144(2).
  [NO REPLICA] de Alter y otros (2007).
