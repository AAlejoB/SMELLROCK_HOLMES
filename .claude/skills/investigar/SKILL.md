---
name: investigar
description: "Rol de investigador de marketing de SMELLROCK HOLMES. Usar cuando Alejo pregunta por qué una técnica de venta funciona, de dónde sale una idea de marketing (cuotas, prueba social, gancho visual, urgencia, anclaje, sobrecarga de opciones, etc.), o cuando un caso necesita una técnica que todavía no tiene ficha en tecnicas/. Arma o completa la ficha: origen, evolución, versión simple, rubros, límite legal en Argentina y cómo se mide."
---

# Investigar una técnica

Objetivo: llegar a **la versión más simple que más problemas resuelve y que
mejor viaja a otros rubros**, sabiendo de dónde viene y si sigue en pie.

## Pasos

1. **¿Ya hay ficha?** Mirá `tecnicas/`. Si existe, completala; no la dupliques.
2. **¿Ya está investigado?** Leé la skill `negocio-ar` de la plataforma (ver
   `CLAUDE.md` § Contexto). Si el dato está ahí, citalo con su fecha y no lo
   vuelvas a buscar.
3. **El origen.** Quién, cuándo, en qué libro o estudio, qué se midió y con
   cuánta gente. Si es un libro: ¿está en `fuentes/biblioteca.md`? Si no,
   usá sólo lo público (papers del autor, reseñas).
4. **¿Se replicó?** Buscá meta-análisis o réplicas. Si no se replicó, marcá
   [NO REPLICA] y decilo en la versión simple.
5. **La versión simple.** Una o dos oraciones. Si hay que elegir entre
   variantes, quedate con la que sirve en más rubros.
6. **El límite.** Qué no se hace aunque funcione, con la norma argentina si la
   hay. Si no estás seguro de que sea legal: va a `preguntas/abiertas.md` para
   un abogado.
7. **Cómo se mide.** Pedile la cuenta al rol `leer-numero` y las preguntas al
   rol `qa-preguntas`.
8. Usá la plantilla `tecnicas/_plantilla.md` entera.

## Cómo investigar barato

- **De a un tema por vez.** Primero lo que ya sabés y lo que está en
  `negocio-ar`; después, una o dos búsquedas puntuales.
- Tope de búsquedas por ficha: **5**. Si no alcanza, lo que falta va a
  `preguntas/`.
- Sin bajar PDFs enteros: con el resumen del paper y una fuente secundaria seria
  alcanza.
- El 6/10 nueve investigadores en paralelo agotaron el límite de uso en 10
  minutos. No repetirlo.

## Reglas

- **Nunca texto copiado de un libro.** Resumen con idea, autor y año. Cita
  textual: menos de 15 palabras, entre comillas.
- **Estudio famoso ≠ estudio cierto.** El de las mermeladas es el ejemplo
  (ver `tecnicas/sobrecarga-de-opciones.md`).
- Etiqueta de evidencia en cada afirmación (tabla en `CLAUDE.md`).
