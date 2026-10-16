# Ficha: Primera impresión («no hay segunda oportunidad para una primera impresión»)

> Estado: borrador
> Última revisión: 16-10-2026

## Origen
**Lindgaard, Fernandes, Dudek y Brown, 2006.** Mostraron páginas web durante
**50 milisegundos** (un vigésimo de segundo) y la gente ya las calificaba como
lindas o feas. Esa nota casi no cambiaba cuando las miraban más tiempo.
[EXPERIMENTO]

Antes, **Tractinsky, Katz e Ikar, 2000** («lo lindo parece fácil»): las
pantallas que gustan más se perciben como más fáciles de usar, aunque no lo
sean. [EXPERIMENTO]

## Cómo evolucionó
- **Reinecke y otros, 2013** (con Google): la primera impresión se arma con dos
  cosas: **complejidad visual** (cuánto «ruido» hay) y **prototipicidad**
  (cuánto se parece a lo que la persona espera de ese tipo de sitio). Ganan
  las páginas simples y que se parecen a «una tienda». [EXPERIMENTO]
- En comercio, la primera impresión decide si la persona **se queda a mirar**.
  Si compra o no depende de lo que pasa después (precio, envío, confianza,
  esfuerzo).

## La versión simple
En la primera pantalla del celular, sin tocar nada, la persona tiene que poder
contestar **cuatro preguntas**: **¿qué venden? ¿cuánto sale? ¿cómo pago? ¿cómo
me llega?** Y la página tiene que parecerse a una tienda, con poco ruido.

## Cuándo sirve / cuándo no
- Sirve: siempre que alguien llega de afuera (Instagram, Google, un link
  compartido).
- No alcanza: una buena primera impresión no arregla un envío caro o una
  compra que exige esfuerzo. Hace que se queden; no que compren.

## En otros rubros
| Rubro | ¿Viaja? | Cómo |
|---|---|---|
| Perfumería | Sí | Las 4 preguntas + foto real del frasco |
| Belleza | Sí | Igual; el «cómo me llega» pesa menos si hay local |
| Ropa | Sí | Grid es el ejemplo (ver `casos/01`) |
| Mayoristas | Sí, cambiando las preguntas | ¿Qué venden?, ¿mínimo de compra?, ¿precio por bulto?, ¿cómo llega? |

## Límite ético y legal (Argentina)
- Lo que dice la primera pantalla es **publicidad y obliga** (Ley 24.240,
  art. 8): si dice «envío gratis desde $X» o «3 cuotas sin interés», se
  cumple.
- Nada de llenar la primera pantalla con urgencia falsa para «impactar».

## Cómo se mide
- **Prueba de 5 segundos** (rol `qa-preguntas`): mostrar la portada 5 s,
  sacarla, preguntar «¿qué vende?, ¿qué te acordás?». Con 5 personas alcanza
  para ver si falla. Se cuenta cuántas contestan bien cada una de las 4
  preguntas.
- **Rebote**: % de visitas que se van sin tocar nada. Necesita un evento de
  llegada (hoy ST no lo tiene, ver `casos/01`).
- Para comparar dos portadas con un A/B hacen falta miles de visitas por
  versión (ver `leer-numero`). Con poco tráfico: la prueba de 5 segundos.

## Preguntas de QA (sin sí ni no)
- «¿Qué vende esta tienda?» → % que contesta bien.
- «¿Cuánto saldría un perfume acá, más o menos?» → % que da un rango cercano.
- «Si lo comprás hoy, ¿cómo te llega o cómo lo retirás?» → % que sabe.
- «¿Qué te hizo pensar eso?» → qué elemento de la pantalla lo comunicó.

## Lo que no sabemos
- ¿Cuántas personas se van de la web de ST sin tocar nada? → hoy no se mide.

## Fuentes
- Lindgaard, G., Fernandes, G., Dudek, C. y Brown, J. (2006). *Attention web
  designers: You have 50 milliseconds to make a good first impression!*
  Behaviour & Information Technology, 25(2). [EXPERIMENTO]
- Tractinsky, N., Katz, A. S. e Ikar, D. (2000). *What is beautiful is usable.*
  Interacting with Computers, 13(2). [EXPERIMENTO]
- Reinecke, K. y otros (2013). *Predicting users' first impressions of website
  aesthetics with a quantification of perceived visual complexity and
  colorfulness.* CHI 2013. [EXPERIMENTO]
