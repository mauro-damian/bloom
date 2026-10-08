# BLOOM — Dirección visual y de contenido

Este documento manda sobre cualquier decisión estética que no esté en el manual de marca.
No es inspiración: es el camino. Si algo de acá no se puede hacer, preguntá antes de cambiarlo.

---

## 1. Concepto: "Cielo y mostrador"

Bloom tiene dos mundos y la web los alterna:

- **El cielo**: celeste con grano, nubes, aire. Es la calma, el "No Drama Club", la marca.
- **El mostrador**: texturas de comida a pantalla completa (dulce de leche, pistacho, cacao, yogurt), colores
  plenos y cálidos, producto recortado. Es el antojo.

La web va y viene entre esos dos mundos. Nunca un fondo blanco neutro y genérico durante mucho tiempo.

La referencia es el catálogo mayorista (`04_REFERENCIAS/catalogo_paginas/`). Mirá en especial:
- pág. 1 y 18 → cielo con grano, logo blanco, titulares en mayúscula pesada.
- pág. 2 → nube recortada como forma de contenedor, mezcla de bold + itálica liviana.
- pág. 3 → círculos marrones con números gigantes "01 02 03 04", stickers cromados (estrella, "!").
- pág. 4 a 17 → **la banda de producto** (ver 4.1), que es el componente más característico de la marca.

Mirá también `05_FOTOS/lugar_y_marca/vasos-bloom-estante.jpg` y `heladera-alfajores-etiquetas.jpg`:
los vasos (celeste con "Bloo" gigante cortado, montaña naranja, patrón orgánico rojo) y las etiquetas
(verde salvia, naranja suave) son el sistema gráfico REAL que ya usa Bloom en el local. La web tiene que sentirse
de la misma familia: logo gigante cortado por el borde, formas orgánicas, colores planos.

---

## 2. Tokens (`src/theme.js`)

Colores provisorios hasta el manual. Nombres semánticos, no "primary/secondary" a secas.

```js
cielo:        '#A9DAEC'  // fondo de marca
cieloClaro:   '#E7F4F9'
cieloProfundo:'#3E8FC4'  // NUEVO: celeste oscuro para texto blanco encima con contraste AA (verificar)
tinta:        '#3A2418'  // texto principal (nunca negro puro)
marron:       '#7C4A30'  // círculos numerados, botones principales
crema:        '#FFFAF8'  // fondo claro
durazno:      '#F8EBE0'
naranja:      '#F18B58'  // acento, usar poco
// colores de producto: muestreados de los fondos de 05_FOTOS/productos_editados/ (exactos)
pistacho:'#A1C000'  arena:'#DED58A'  limon:'#EADD81'  banana:'#E9C94E'
magenta:'#AE1C89'   lila:'#E781EE'   aguamarina:'#91F8F5'
terracota:'#BC724F' dorado:'#BC9957' cacao:'#72340F'  noche:'#0E050A'
```
Los colores de producto NO se usan como colores de interfaz (botones, links): solo como fondo de su producto.

Tipografía:
- **Display** (títulos): la del manual. Provisoria: Baloo 2 800, en MAYÚSCULA, interlineado 0.9, tracking -0.01em.
- **Texto**: Nunito 400/700, y **Nunito Italic 400** para la mezcla bold + itálica.
- **Manuscrita**: Caveat 700, solo para 1–2 anotaciones por página (nunca párrafos).

Escala (clamp, mobile → desktop):
- Hero: `clamp(3rem, 11vw, 9rem)` — tiene que ser GRANDE de verdad.
- H2: `clamp(2.25rem, 6vw, 5rem)`
- H3: `clamp(1.25rem, 2.5vw, 1.75rem)`
- Texto: 1.0625rem, ancho máximo 60ch.

Forma:
- Radios: 0 en bandas y secciones, 999px en botones y círculos, 24px solo en tarjetas tipo "nube".
  NO un border-radius igual para todo.
- Sombras: ninguna, salvo el sticker cromado. La profundidad la dan el color y el solapamiento.
- Grano: un SVG `feTurbulence` como overlay con opacity ~0.12 sobre los fondos de cielo. Una sola vez,
  reutilizado. Sin imágenes pesadas para esto.

---

## 3. Mezcla tipográfica (la firma del texto)

Igual que en el catálogo, los títulos mezclan **pesado** con *itálica liviana* en la misma frase:

> **UN CENTRO DE** *producción propio,* **QUE BUSCA FACILITAR LA** *alimentación consciente*

Componente `TituloMixto` que recibe partes: `[{t:'Un centro de', peso:'fuerte'}, {t:'producción propio', peso:'italica'}]`.
Usarlo en 1 título por página, no en todos.

---

## 4. Componentes de firma (son los que hacen que no parezca plantilla)

### 4.1 `BandaProducto`, el más importante
Copia del sistema del catálogo, adaptada a web. Una fila horizontal a ancho completo, con 4 bloques:

| Bloque | Contenido |
|---|---|
| 1. Color pleno del producto | producto recortado (PNG transparente) + nombre en mayúscula |
| 2. Textura grande | foto de la textura principal (crema, dulce de leche) + descripción e ingredientes en blanco |
| 3. Tira angosta | textura del ingrediente (pistacho, almendras, frutos rojos) |
| 4. Color pleno | sello circular + íconos de línea (keto / proteico / plant based) + peso + CTA "Ver en la tienda" |

- **Bloque 1 = la foto de `05_FOTOS/productos_editados/`** (producto flotando sobre color plano) y el bloque 4
  usa el mismo color de fondo exacto de esa foto (tabla en FOTOS_MAPA.md). Así la banda se lee como una sola pieza.
  Si un producto no tiene foto editada, no hace banda: aparece en otra sección con su foto común.
- Sin precios (van en Tiendanube).
- Mobile: se apila → bloque 1 arriba (alto 70vw), bloque 2 debajo con el texto, bloques 3 y 4 en una fila.
- Hover desktop: el producto recortado sube 6px y gira 2°. Nada más.
- Datos en `contenido.js`: `{ nombre, descripcion, colorFondo, imgProducto, imgTextura, imgIngrediente, lineas:['keto'], peso, urlTienda }`.
- En Home: 3 bandas seguidas, sin margen entre ellas, como el catálogo: alfajor pistacho (verde),
  alfajor patagónico (magenta), budín proteico banana (amarillo). Contraste fuerte entre una y otra.

### 4.2 `SelloCircular`
Texto en círculo con SVG `<textPath>`: "LIBRE DE GLUTEN, AZÚCAR Y CONSERVANTES ·".
Rota a 1 vuelta cada 20 s (quieto con prefers-reduced-motion). `aria-hidden`; el texto real va en el contenido.

### 4.3 `PasoCirculo`
Círculo marrón grande con número enorme superpuesto saliéndose del círculo ("01" pisando el borde), título
y texto dentro. Para "Cómo funciona" (online y mayorista). En mobile: lista vertical, círculos de 260px.

### 4.4 `Nube`
Contenedor con forma de nube (SVG `clip-path` o máscara) que lleva adentro una foto o textura de cielo, con texto encima.
Usarlo 1 o 2 veces en todo el sitio (Nosotros y Mayorista). No convertirlo en tarjeta genérica.

### 4.5 `Sticker`
Estrella y "!" cromados (PNG del estudio o SVG con gradiente metálico). Rotados, pisando el borde de
un bloque. Máximo 1 por pantalla. Es el único lugar donde se permite gradiente y sombra.

### 4.6 `CieloGrano`
Fondo de sección: celeste + nubes suaves + grano. Para hero, cierre "¿Empezamos?" y Mayorista.

### 4.7 Íconos de línea
Keto (palta), Proteico (pesa), Plant based (hoja), Energía (rayo): dibujados en línea blanca dentro de un
círculo de borde fino, como en el catálogo. SVG propios, no los de MUI.

---

## 5. Página por página

### Home
1. **Hero (CieloGrano, 90vh)**: logo pequeño arriba. Titular gigante a la izquierda, ocupando 2/3:
   "ALIMENTOS REALES." en display + segunda línea en itálica liviana "sin gluten, sin azúcar, sin drama."
   A la derecha, el alfajor de pistacho partido (`productos_editados/alfajor-pistacho.jpg`) dentro de una forma
   grande de nube o círculo con su fondo verde, que se sale del borde inferior del hero y pisa la sección siguiente. SelloCircular girando junto al producto. Un solo CTA principal
   "Comprá online" + link de texto "o visitanos →".
2. **Franja de pilares**: una línea marrón con texto en mayúscula que se desplaza lento (marquee),
   "LIBRE DE GLUTEN ✦ LIBRE DE AZÚCAR ✦ LIBRE DE CONSERVANTES ✦ KETO ✦ PALEO". Se detiene con reduced-motion.
3. **3 BandaProducto seguidas** (pistacho, chocotorta, yogurt griego).
4. **Tres caminos**: NO tres tarjetas iguales. Tres bloques de distinto tamaño y color:
   - Grande, foto del patio: "Vení al café" → /cafe
   - Mediano, cielo: "Pedí online" → /compra-online
   - Mediano, marrón: "¿Tenés un negocio?" → /mayorista
5. **"Bloom", el nombre**: fondo crema, palabra "Bloom." gigante (cortada por el borde derecho) y al lado
   el texto del origen del nombre. Una anotación en Caveat: "el momento en que el café despierta".
6. **Locales**: dos columnas tipo cartel, nombre en display, dirección y horario (o "pronto" si faltan),
   botón "Cómo llegar" (link a Google Maps, sin iframe).
7. **Cierre "¿EMPEZAMOS?" (CieloGrano)**: como pág. 18 del catálogo, con foto de la heladera exhibidora a la derecha.

### Nosotros
- Hero en crema con TituloMixto: "**BLOOM NACIÓ DE** *una necesidad,* **NO DE UNA IDEA DE NEGOCIO.**"
- La historia de Anahí en 2 párrafos cortos, al lado de una foto real (placeholder si no hay).
- Nube con video/foto del Food Lab.
- Pilares (5): lista numerada grande, con líneas, NO tarjetas. Número en display marrón, título y una línea.

### Café / Visitanos
- Hero a pantalla completa con la foto del patio con canal de agua (si no existe aún: CieloGrano + placeholder marcado).
- "Para qué venir": 3 motivos como frases grandes alternadas izquierda/derecha, cada una con una foto chica, no tarjetas.
- Galería asimétrica: 1 foto grande + 2 chicas, distintas proporciones.
- Locales (mismo componente que Home).

### Comprá online
- Hero simple en cielo: "¿No podés venir? **PEDILO IGUAL.**" + CTA tienda.
- Cómo funciona: 3 PasoCirculo.
- Categorías: 4 bloques de color (uno por categoría), cada uno con 1 producto recortado y link a la categoría de Tiendanube.
- FAQ: Accordion de MUI restyleado (sin bordes de tarjeta, solo líneas finas, "+" que rota a "×").
- Cierre con CTA tienda.

### Mayorista
- Hero CieloGrano: "**SUMÁ BLOOM** *a tu negocio.*" + CTA WhatsApp.
- Caja de degustación: bloque destacado con Sticker estrella; tipos de negocio como lista de chips seleccionables
  que cambian el texto del mensaje de WhatsApp precargado (ej. "Hola, tengo un gimnasio y quiero la caja de degustación").
- Condiciones: 4 PasoCirculo, igual que pág. 3 del catálogo ("01 Mínimo de compra", etc.).
- "Somos quienes lo producen": texto + Nube con foto del Food Lab.
- Medios de pago y fidelidad: dos bloques celestes redondeados como en pág. 3 del catálogo.
- FAQ.

### Boxes
- Hero: "**TUS FAVORITOS,** *todos los meses.*"
- Los 7 boxes como **lista editorial**: cada box en una fila con nombre en display, descripción y contenido
  en texto corrido separado por "·". Color de fondo alternado por fila. CTA "Lo quiero" → WhatsApp con el nombre del box.
- Nota visible: "Precios y suscripción: consultanos por WhatsApp" (hasta confirmar).

### Contacto
- Dos mitades de pantalla: izquierda cielo "Soy cliente", derecha marrón "Tengo un negocio". Cada una con su
  CTA de WhatsApp y su texto. En mobile, una sobre la otra.
- Instagram y locales abajo.

### Header y footer
- Header: logo a la izquierda, links en Nunito 700, botón "Tienda" en marrón (pill). Transparente sobre el hero y
  crema sólido al hacer scroll. Menú mobile a pantalla completa en cielo, con links en display grande.
- Footer: fondo tinta, "Bloom" gigante cortado en el borde inferior, columnas de links, Instagram, WhatsApp, año dinámico.

---

## 6. Copy: cómo reescribir el mockup

El mockup tiene frases que suenan a IA. Reescribilas siguiendo estos ejemplos:

| Mockup (no usar) | Mejor |
|---|---|
| "Alimentos reales, libres de gluten, azúcar y conservantes, hechos con la calidad que merecés." | "Alimentos reales. Sin gluten, sin azúcar, sin drama." |
| "Un espacio pensado para quedarte, no solo para llevar algo y listo." | "Vení a quedarte un rato. O llevátelo, también vale." |
| "No tercerizamos, no bajamos la calidad para 'el canal online' — es Bloom, llegue como llegue." | "Lo que pedís online sale de la misma cocina que lo del mostrador." |
| "Sumá a tu negocio una marca que tus clientes ya están pidiendo." | (Este está bien. Dejalo.) |
| "Más simple que comprar cada cosa por separado" | "Te llega todos los meses. Vos no pensás en nada." |

Reglas:
- Máximo 1 guion largo (—) por página.
- Nada de "no solo X, sino Y", "descubrí", "experiencia única", "la calidad que merecés", "sin resignar nada".
- Botones con verbo concreto: "Pedí online", "Escribinos", "Cómo llegar". Nunca "Ver más" ni "Saber más".
- Voseo siempre.

---

## 7. Fotos

Ver `05_FOTOS/FOTOS_MAPA.md`. Resumen:
- `productos_editados/` (18 fotos del estudio sobre color plano) son las protagonistas: bandas, hero, categorías.
- `productos/` (fotos de celular sobre tabla blanca) completan donde no hay editada, siempre más chicas y en bloques crema.
- Faltan las del local (patio, salón, Food Lab).
- Donde falten fotos del local: placeholder con proporción fija y etiqueta visible "FOTO PENDIENTE: patio".
  Nunca reemplazar con stock.
- Exportar a WebP/AVIF con `srcset` (480, 960, 1600 px). Ninguna imagen de más de ~250 KB en la web.

---

## 8. Movimiento (poco y bueno)
- Hero: titular entra por opacidad + 16px, producto entra 200ms después con un leve giro.
- Secciones: aparición única con IntersectionObserver, solo opacidad + 12px. Limpiar el observer.
- Sello girando, marquee de pilares, hover de producto. **Nada más.**
- Todo se apaga con prefers-reduced-motion y el contenido es visible si el JS de animación falla.

---

## 9. Test anti-IA (revisar antes de cada entrega)

Si alguna respuesta es "sí", corregir antes de mostrar:
- [ ] ¿Hay algún emoji en la interfaz?
- [ ] ¿Hay dos secciones seguidas con la misma estructura (título centrado + grilla de tarjetas)?
- [ ] ¿Hay más de una grilla de 3 tarjetas iguales en todo el sitio?
- [ ] ¿El titular del hero entra en una línea en desktop? (Tiene que ser más grande.)
- [ ] ¿Hay sombras difusas, gradientes (fuera del sticker) o glassmorphism?
- [ ] ¿Algún texto dice "descubrí", "experiencia", "calidad que merecés" o "no solo… sino"?
- [ ] ¿Se ve fondo blanco puro en alguna parte?
- [ ] ¿Algún ícono de MUI está solo de adorno?
- [ ] ¿La página se podría confundir con la de otra cafetería si le sacás el logo? (Debería ser que no.)
