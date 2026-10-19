# Traspaso de Bloom V3

Estado al 18 de octubre de 2026. La rama activa es `v3.0`, nacida desde `main`.

## Ya aplicado en V3

- Home con el concepto “Alimentación consciente”.
- Hero centrado en Bloom Food Lab y sin la etiqueta No Drama Club.
- Bloque propio de Bloom Food Lab después de la franja de pilares.
- Acceso al café identificado como “No Drama Club · Coffee Hub”.
- Categoría visible en productos sin línea especial.
- Locales titulados “Dónde encontrarnos”.
- Cortaderas como tercer punto, “Próximamente”.
- Mínimos de $30.000 particular y $100.000 mayorista en el cierre de la Home.
- Estilos de escritorio y móvil necesarios para esos cambios.

Archivos modificados y todavía sin commit:

- `src/data/contenido.js`
- `src/pages/Home.jsx`
- `src/components/Secciones.jsx`
- `src/components/Locales.jsx`
- `src/components/BandaProducto.jsx`
- `src/styles.css`
- `src/pages/paginas.css`

El build `npm run build` pasa correctamente.

## Cambios de V2 que todavía faltan en V3

### Identidad general

- Cambiar `marca.cafe` de “Bloom Coffee Hub” a “No Drama Club · Coffee Hub”.
- Cambiar el sello a “LIBRE DE GLUTEN · LIBRE DE AZÚCAR · LIBRE DE CONSERVANTES · ”.
- En el menú móvil mostrar “Bloom Food Lab · Mendoza” en lugar de “No Drama Club · Mendoza”.
- En el footer mostrar “Bloom Food Lab” como etiqueta superior.
- Cambiar la descripción del footer a “Food Lab & Coffee Hub. Mendoza, Argentina.”.
- Cambiar la firma a “Bloom · Alimentación consciente”.

### WhatsApp

Agregar dos mensajes en `contacto.whatsapp.mensajes`:

- `cafe`: “Hola, Bloom. Quisiera consultar por el café.”
- `eventos`: “Hola, Bloom. Quisiera consultar por desayunos empresariales o un evento.”

### Boxes

- Crear `const mostrarBoxes = false` al comienzo de `contenido.js`.
- Ocultar Boxes del arreglo de navegación cuando el flag es falso.
- Exponer el mismo valor como `flags.mostrarBoxes`.
- En `App.jsx`, si está apagado, `/boxes` debe redirigir a `/compra-online`.
- En `src/utils/seo.js`, no generar la entrada SEO de `/boxes` cuando está apagado.
- El contenido de los siete boxes se conserva; no se elimina.

### Página Café

Cambiar los textos:

- SEO: “No Drama Club · Coffee Hub de Bloom en Mendoza”.
- Descripción SEO: “Vení a No Drama Club, el Coffee Hub de Bloom. Café de especialidad y alimentos libres de gluten, azúcar y conservantes en Urban Mall y Distrito Vistalba Mall.”
- Etiqueta: “Coffee Hub de Bloom · Mendoza”.
- Nombre destacado: “No Drama Club”.
- Título: “Vení al café. Quedate un rato.”
- Descripción: “Viví la experiencia completa con amigos, en familia, en pareja o a solas. Disfrutamos la compañía y los momentos sin apuro.”

Reemplazar los tres motivos por:

1. “Café de especialidad.” — “El café tiene su tiempo. Vos también: vení a disfrutarlo.”
2. “Disfrutamos la compañía.” — “Con amigos, en familia, en pareja o a solas. Hay un lugar para vos.”
3. “Un espacio para quedarte.” — “Para conversar, trabajar a tu ritmo o hacer una pausa.”

Agregar bloque de café de especialidad:

- Etiqueta: “Detrás de cada taza”.
- Título: “Café de especialidad, hecho acá.”
- Texto: “Acercate a la barra y disfrutá el momento de preparar tu café.”
- Foto pendiente: baristas preparando café de especialidad.

Agregar bloque de eventos:

- Etiqueta: “También nos encontramos para celebrar”.
- Título: “Compartí un momento Bloom.”
- Texto: “Desayunos empresariales, Día de la Madre y eventos. Contanos qué estás organizando y lo pensamos juntos.”
- Botón: “Consultá por tu evento”, usando el mensaje WhatsApp `eventos`.

Agregar cierre:

- “Vení al café.”
- “Un café y tiempo para disfrutar. Te esperamos en No Drama Club.”
- Botón “Hablemos de tu visita”, usando el mensaje `cafe`.

En `Cafe.jsx`:

- Mostrar `club-label` en el hero.
- Reemplazar las tarjetas con fotos por una lista horizontal `editorial-list` numerada.
- Renderizar `SeccionFoto` para especialidad.
- Renderizar la sección de eventos.
- Terminar con `Cierre`.

### Página Comprá online

Agregar bloque de entrega:

- Etiqueta: “Bloom en tu casa”.
- Título: “De nuestro Food Lab a tu puerta.”
- Texto: “Coordinamos la entrega de tu pedido en Gran Mendoza.”
- Foto pendiente: camión de Bloom llegando a una casa.

Agregar FAQ:

- Pregunta: “¿Cuál es el pedido mínimo?”
- Respuesta: “El mínimo para pedidos particulares es de $30.000.”

Agregar al cierre: “Pedido mínimo particular: $30.000.”

En `CompraOnline.jsx`, renderizar `SeccionFoto` entre categorías y preguntas frecuentes.

### Página Mayorista

Agregar bloque:

- Etiqueta: “Bloom en tu negocio”.
- Título: “Un lugar para nuestros productos.”
- Texto: “Conversemos sobre cómo sumar Bloom a tu propuesta.”
- Foto pendiente: freezer con productos Bloom en un punto de venta.

Agregar al cierre: “Pedido mínimo mayorista: $100.000.”

En `Mayorista.jsx`, renderizar `SeccionFoto` antes de las condiciones.

### Página Contacto

- Quitar “o elegir tu box” del texto para clientes.
- Agregar cierre:
  - “¿Lo charlamos?”
  - “Contanos qué necesitás y te acompañamos con tu pedido.”
  - “Pedidos particulares desde $30.000 · Mayoristas desde $100.000.”
  - Botón “Escribinos por WhatsApp”.
- Renderizar `Cierre` después de Locales.

### Componentes compartidos

En `src/components/Secciones.jsx` todavía falta:

- Crear `SeccionFoto`, con texto y `MediaPendiente` en dos columnas.
- Cambiar `Pasos` para usar `editorial-list` en lugar de círculos.
- Hacer que `Cierre` muestre `datos.condicion` cuando exista.

La variante `formal` de `FoodLab` ya fue incorporada en V3.

### Estilos restantes

En `src/pages/paginas.css` falta trasladar desde V2:

- Lista editorial para Café y Pasos.
- `club-label`.
- `cafe-editorial`.
- `photo-feature` y su versión móvil.
- Fondos `coffee-specialty`, `delivery-feature` y `freezer-feature`.
- Sección oscura `cafe-events` y estilos de su botón.
- Eliminar los estilos viejos de tarjetas `.cafe-reason` y círculos `.step-circle` cuando ya no se usen.

### Docker

V2 agregó y V3 todavía no tiene:

- `.dockerignore`
- `Dockerfile` multietapa: Node 24 compila y Nginx sirve `dist`.
- `compose.yaml`, proyecto `bloom`, puerto local `8081`.
- `nginx/default.conf`, con resolución de rutas, caché, gzip y 404 de recursos.
- `scripts/verificar-docker.mjs`.
- Documentación Docker en `README.md`.

Estos archivos pueden copiarse desde la rama `v2.0`; no dependen del contenido visual de V2.

### Archivos informativos de V2

- `VERSION_2.md` documenta la propuesta.
- `entregables/Bloom-estado-actual-web.html` y `.pdf` son un informe, no forman parte de la web y no son necesarios para V3.

## Referencia Git

La propuesta completa está en el commit `80cbf52` de la rama `v2.0`. Para consultar diferencias sin modificar archivos:

```sh
git diff v3.0..v2.0
git diff v3.0..v2.0 -- src/data/contenido.js
git show v2.0:ruta/del/archivo
```

No conviene hacer `cherry-pick 80cbf52` directamente después de los cambios actuales, porque volvería a aplicar la Home y puede generar conflictos. Trasladar las secciones restantes de manera selectiva.
