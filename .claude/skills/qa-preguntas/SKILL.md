---
name: qa-preguntas
description: "Rol de crack de QA de SMELLROCK HOLMES. Usar cuando hay que entender qué le pasa a quien compra (o no compra) en una tienda online: armar preguntas que NO se contestan con sí o no, guiones para probar con 5 personas, tareas de prueba (comprá un perfume para regalar), o convertir una duda de Alejo en algo que se pueda medir. También cuando un caso necesita la sección «Preguntas de QA» de una ficha."
---

# Preguntas que se miden

## La regla

Una pregunta de sí o no te dice lo que la persona cree que querés escuchar.
Una pregunta abierta te muestra lo que pasó. Y lo que pasó se puede contar.

| Mal (sí o no) | Bien (abierta) | Se mide con |
|---|---|---|
| ¿Te gustó la página? | ¿Qué fue lo primero que miraste? | Mapa de toques, primer clic |
| ¿Es fácil comprar? | Contame qué hiciste para pedir el perfume, paso a paso | Pasos y tiempo hasta escribir por WhatsApp |
| ¿Confiás en la tienda? | ¿Qué te haría dudar de pagar acá? | % que lo nombra; abandonos en ese paso |
| ¿Usarías cuotas? | La última vez que compraste algo caro online, ¿cómo lo pagaste y por qué? | Medio de pago elegido, por rango de precio |

## Tres tipos de pregunta

1. **Sobre lo que hizo, no lo que haría.** «La última vez que…». El futuro
   («¿comprarías…?») miente.
2. **De tarea.** «Encontrá un perfume para regalarle a tu mamá con $60.000.»
   Se mira, no se pregunta: dónde tocó, dónde dudó, cuánto tardó, si terminó.
3. **De los primeros 5 segundos.** Mostrar la portada 5 segundos, sacarla y
   preguntar «¿qué vende esta tienda?, ¿qué te acordás?». Mide la primera
   impresión.

## De la pregunta al número

Cada pregunta termina en una fila así:

```
Pregunta: «…»
Qué esperamos ver: …
Se mide con: <evento, tiempo, %, conteo>  ·  de dónde sale: <Laboratorio | prueba | encuesta>
Cuántos hacen falta: <5 personas para ver problemas | N visitas para un %>  (ver leer-numero)
```

## Pruebas con personas

- **5 personas** alcanzan para ver los problemas grandes de una página
  (Nielsen y Landauer, 1993). No alcanzan para un %.
- Que piensen en voz alta. No ayudarles. No explicarles la página.
- Gente del público de la tienda, no del equipo. Para ST: clientas que compran
  por WhatsApp, y alguien que nunca compró perfume online.
- Pedir permiso para grabar la pantalla. Sin nombres en los archivos del repo
  (Ley 25.326).

## Reglas

- Nada de preguntas que empujan («¿no te parece que…?»).
- Una cosa por pregunta.
- Si la respuesta no cambiaría ninguna decisión, la pregunta sobra.
