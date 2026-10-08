# BLOOM — Web institucional (React + Vite + MUI)

Vas a construir la web institucional de Bloom (bloom.com.ar), cafetería y Food Lab de Mendoza
con alimentos libres de gluten, azúcar y conservantes. La tienda online NO se construye acá:
vive en Tiendanube (tienda.bloom.com.ar) y esta web lleva hacia ella con links configurables.

## Material (está en la carpeta `_material/` del proyecto)
- `_material/01_INSTRUCCIONES/LEER_PRIMERO.md` → orden de prioridad de las fuentes. Leelo primero.
- `_material/01_INSTRUCCIONES/DIRECCION_VISUAL.md` → diseño detallado página por página. Manda sobre la sección
  "Dirección visual" de este prompt. Pasá el "Test anti-IA" antes de cada entrega.
- `_material/03_CONTENIDO/condiciones_y_datos.md` → datos confirmados y pendientes del negocio.
- `_material/03_CONTENIDO/bloom_mockup_contenido.html` → contenido y secciones. NO es referencia visual final.
- `_material/04_REFERENCIAS/catalogo_paginas/*.jpg` → referencia VISUAL principal (catálogo mayorista).
- `_material/03_CONTENIDO/productos_bloom.csv` → datos de productos. Solo para destacados; el catálogo completo vive en Tiendanube.
- `_material/02_MARCA/` → logo real y manual de marca (si están, mandan sobre todo).
- `_material/05_FOTOS/` → fotos reales ordenadas; leé `FOTOS_MAPA.md`. Copiá las que uses a `public/images/`, optimizadas.
No modifiques nada dentro de `_material/`.

## Stack obligatorio
- React 18 + Vite + MUI 5 (@mui/material, @mui/icons-material) + Emotion. JavaScript, no TypeScript.
- React Router solo para las páginas listadas abajo.
- Sin backend, sin Redux/Zustand/TanStack Query/Axios, sin librerías de animación, formularios ni UI extra.
  Si creés que hace falta una dependencia más, preguntá antes.
- Colores, tipografías, radios y espaciados en `src/theme.js`.
- Textos, links, teléfonos, URLs de Tiendanube y flags en `src/data/contenido.js`. Nada hardcodeado en componentes.

## Páginas
1. **Home**: propuesta + 3 caminos (Visitar el café / Comprar online / Mayorista) + productos destacados + locales.
2. **Nosotros**: historia de Anahí, origen del nombre, pilares, espacio para video del Food Lab.
3. **Café / Visitanos**: experiencia, fotos del espacio (patio con canal de agua primero), para qué venir, ubicaciones.
4. **Comprá online**: cómo funciona en 3 pasos, categorías (Panificados, Línea Proteica, Pastelería y Dulces,
   Desayuno y Despensa), FAQ de envíos/retiro, CTA a Tiendanube.
5. **Mayorista**: caja de degustación, líneas por tipo de negocio, condiciones, cómo funciona, por qué Bloom, FAQ, CTA a WhatsApp.
6. **Boxes mensuales**: los 7 boxes con su contenido. Precios configurables; si falta precio, no se muestra.
   CTA a WhatsApp (la suscripción con cobro automático no se implementa).
7. **Contacto**: separar "Soy cliente" de "Quiero comprar al por mayor", cada uno con su WhatsApp precargado.
Header con navegación a todas + botón destacado "Tienda" (a Tiendanube). Footer con contacto, Instagram y año dinámico.

## Dirección visual: que NO parezca hecho por IA
Esto es lo más importante. Bloom es una marca con personalidad, no una plantilla SaaS.

HACER:
- Tomar el lenguaje del catálogo: fondos de cielo celeste con grano/textura, bloques de color plenos
  por producto (verde pistacho, beige, caramelo), círculos marrones con números grandes, sellos circulares
  de texto ("libre de gluten, azúcar y conservantes") sobre el borde, stickers cromados (estrella,
  signo de exclamación) como acentos puntuales.
- Paleta provisoria (del mockup, hasta el manual): celeste #A9DAEC, celeste claro #E7F4F9, marrón #7C4A30,
  naranja #F18B58, crema #FFFAF8, durazno #F8EBE0, beige #ECB78D, coral #F8C3AF, rosa #F6D0CC, tinta #3A2418.
- Tipografía protagonista y grande: títulos en mayúscula pesada (Baloo 2 o la del manual), cuerpo en Nunito.
  Mezclar peso pesado + itálica liviana en una misma frase, como en "Un centro de *producción propio*".
- La fotografía de producto manda: recortes de producto sobre color, texturas de ingrediente a full bleed.
- Composición editorial: grillas que se rompen, bloques que se solapan, cambios de ritmo entre secciones,
  alguna sección a pantalla completa de color sólido.
- Micro-detalles con oficio: hover que mueve el producto unos px, sello que rota lento,
  subrayado manuscrito en una o dos palabras clave (Caveat, con moderación).
- Mobile primero: probar en 360, 390, 768 y 1440 px.

NO HACER (delata IA al instante):
- Emojis como íconos (el mockup los usa como placeholder: reemplazarlos todos).
- Gradientes violeta/azul, glassmorphism, sombras difusas por todos lados, blobs genéricos.
- Hero centrado con título + subtítulo + dos botones y nada más.
- Secciones que son siempre "título centrado + 3 tarjetas iguales con ícono".
- Esquinas redondeadas idénticas en todo, badges "Nuevo ✨", contadores animados.
- Íconos de MUI decorativos en cada tarjeta. Pocos y solo donde aportan.
- Animaciones al hacer scroll en cada elemento. Una entrada sutil por sección como máximo.

## Copy
Español rioplatense, cálido y directo. Reescribí los textos del mockup cuando suenen a IA:
- Evitar la fórmula "no solo X, sino Y" / "no solo para llevar algo y listo" repetida.
- Evitar el abuso de guiones largos, tríadas de adjetivos y frases tipo "la calidad que merecés".
- Frases cortas. Que suene a una persona de Bloom hablando, no a un folleto.
- Mantener los datos concretos de `condiciones_y_datos.md`.

## No inventar
- No mostrar "4.9/5 en Google" ni reseñas: flag `mostrarResenas: false` en contenido.js.
- No inventar precios, horarios, direcciones, teléfonos, emails, fotos de equipo ni testimonios.
- No publicar precios mayoristas ni de boxes en esta etapa.
- Si falta algo: placeholder identificado + entrada en la lista de pendientes del README.
- Fotos faltantes: placeholders con proporción definida, nunca stock presentado como real.

## WhatsApp y Tiendanube
- Número en contenido.js (`5492615688898`, a confirmar si sirve para minorista y mayorista).
- Mensajes precargados distintos: consulta general, pedido, mayorista, caja de degustación, boxes.
  Links wa.me con texto codificado con encodeURIComponent. Una sola función helper.
- URL de Tiendanube en contenido.js; si está vacía, los botones de tienda se deshabilitan y se anota el pendiente.
- Sin botón flotante que tape contenido o controles en móvil.

## Calidad
- HTML semántico, un H1 por página, jerarquía de títulos correcta, skip-link al contenido.
- Foco visible, navegación por teclado, menú móvil accesible (Escape, foco devuelto).
- alt útiles; decorativos con alt="" / aria-hidden.
- Contraste AA (cuidado con texto blanco sobre celeste: oscurecer el fondo o usar tinta).
- prefers-reduced-motion respetado.
- Imágenes WebP/AVIF con width/height, srcset y lazy fuera del primer viewport.
- Google Fonts con display=swap y solo los pesos usados.
- Título, descripción y Open Graph por página; lang="es-AR"; favicon provisorio.
- Sin scroll horizontal en ningún ancho.

## Estructura sugerida
```
src/
  main.jsx  App.jsx  theme.js
  data/contenido.js
  utils/whatsapp.js
  components/   Header, Footer, Logo, SelloCircular, BotonWhatsApp, BotonTienda, ...
  pages/        Home, Nosotros, Cafe, CompraOnline, Mayorista, Boxes, Contacto
public/images/
```
Un componente compartido solo si evita duplicación real. Sin código muerto ni console.log.

## Forma de trabajo
1. Leé todo el material. Mostrame estructura de carpetas y `theme.js` ANTES de construir secciones.
2. Construí la Home completa y frená para revisión visual.
3. Seguí con el resto de las páginas.
4. Corré `npm run build` y corregí errores.
5. Entregá README con: cómo correr, dónde editar textos/fotos/links, y lista de pendientes.

No tomes decisiones de producto (precios, medios de pago, tienda, suscripciones, descuentos):
si algo no está definido, preguntá o dejalo como pendiente.
