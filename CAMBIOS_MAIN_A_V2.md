# Bloom: cambios de main a V2

Documento de referencia de la propuesta guardada en la rama `v2.0`, commit `80cbf52`, comparada con `main`, commit `9fe63be`.

## Resumen conceptual

V2 reorganiza la comunicación de Bloom alrededor de tres ideas:

1. **Alimentación consciente** como concepto principal de marca.
2. **Bloom Food Lab** como origen de los productos y centro de producción.
3. **No Drama Club · Coffee Hub** como identidad propia de la experiencia del café.

La paleta, las tipografías y las fotografías disponibles se mantienen. También se incorpora Docker para ejecutar la versión compilada con Nginx.

## Identidad general

### Nombre del café

- Main: `Bloom Coffee Hub`
- V2: `No Drama Club · Coffee Hub`

### Sello circular

- Main: `LIBRE DE GLUTEN, AZÚCAR Y CONSERVANTES ·`
- V2: `LIBRE DE GLUTEN · LIBRE DE AZÚCAR · LIBRE DE CONSERVANTES ·`

### Footer

- Main: `Coffee Hub & Food Lab. Mendoza, Argentina.`
- V2: `Food Lab & Coffee Hub. Mendoza, Argentina.`

- Main: `Bloom · No Drama Club`
- V2: `Bloom · Alimentación consciente`

La etiqueta superior del footer deja de mostrar `No Drama Club` y pasa a mostrar `Bloom Food Lab`.

En el menú móvil, el pie cambia de `No Drama Club · Mendoza, Argentina` a `Bloom Food Lab · Mendoza, Argentina`.

## Navegación y Boxes

V2 conserva todo el contenido de los siete boxes, pero lo desactiva de la web pública mediante `mostrarBoxes = false`.

- Boxes desaparece de la navegación principal y móvil.
- `/boxes` redirige a `/compra-online`.
- No se genera metadata específica para `/boxes` mientras está desactivado.
- El contenido se conserva para reactivarlo en el futuro.

Archivos involucrados:

- `src/data/contenido.js`
- `src/App.jsx`
- `src/utils/seo.js`

## Inicio

### Metadata

- Main: `Bloom · Alimentos reales, sin drama`
- V2: `Bloom · Alimentación consciente | Food Lab & Coffee Hub`

La descripción SEO se mantiene:

> Café y Food Lab en Mendoza. Alimentos libres de gluten, azúcar y conservantes, elaborados en nuestro propio centro de producción.

### Apertura principal

Main:

> Coffee Hub & Food Lab · Mendoza
>
> Alimentos reales.  
> sin gluten, sin azúcar, sin drama.
>
> Hechos en nuestro Food Lab, para acompañarte todos los días.

V2:

> Bloom Food Lab · Centro de producción · Mendoza
>
> Alimentación  
> consciente.
>
> Elaboramos alimentos en nuestro propio centro de producción. Para tu casa, tu negocio y nuestra mesa de café.

Se elimina del hero la anotación manuscrita `No Drama Club`. El título se ajusta visualmente para que “Alimentación consciente” tenga mayor escala.

Los botones `Comprá online` y `o visitanos` se mantienen.

### Nuevo bloque Bloom Food Lab

Se incorpora después de la franja de pilares:

- Etiqueta: `Producción propia`
- Título: `Bloom Food Lab.`
- Texto: `Nuestro centro de producción en Mendoza. Elegimos los ingredientes, desarrollamos las recetas y elaboramos los productos que llegan a tu casa, a otros negocios y a nuestro café.`

Puede mostrar la foto o el video configurado para el Food Lab. Mientras no exista material, conserva un espacio pendiente.

### Productos destacados

Se conservan:

- Alfajor pistacho.
- Alfajor patagónico.
- Budín proteico banana.

La presentación cambia para que todos tengan una categoría visible sobre el peso:

- Los productos con línea muestran `Keto` o `Proteico`.
- Los productos sin línea muestran su categoría general, por ejemplo `Alfajores`.
- No se inventan categorías nutricionales nuevas.

### Acceso al café

- Main: `Bloom Coffee Hub`
- V2: `No Drama Club · Coffee Hub`

- Main: `Vení a quedarte un rato. O llevátelo, también vale.`
- V2: `Viví la experiencia completa con amigos, en familia, en pareja o con un rato para vos.`

Se mantienen `Vení al café` y `Conocé el café`.

### Locales

- Main: `Un lugar para quedarte.`
- V2: `Dónde encontrarnos.`

Se agrega un tercer punto:

- Número: `03`
- Nombre: `Cortaderas`
- Zona: `Bloom Food Lab · Centro de producción`
- Estado: `Próximamente`
- Pendiente: `Fecha de apertura y ubicación exacta por confirmar.`

No se publica una dirección, fecha ni mapa sin confirmar. Los locales con estado “Próximamente” no muestran el botón Cómo llegar.

### Cierre del Inicio

Se mantiene:

> ¿Empezamos?  
> Un café, algo rico para tu casa o Bloom en tu negocio. Escribinos y lo charlamos.

Se agrega:

> Pedidos particulares desde $30.000 · Mayoristas desde $100.000.

## Nosotros

V2 no modifica el contenido de la página Nosotros.

Se conservan la historia de Anahí, el origen del nombre Bloom, los cinco pilares y la presentación del Food Lab.

Entre sus textos ya existentes se mantiene:

> Buscamos que comer rico y elegir alimentos conscientes vayan juntos.

## Café

### Metadata

- Main: `Café · Visitanos en Mendoza | Bloom`
- V2: `No Drama Club · Coffee Hub de Bloom en Mendoza`

Main:

> Vení a Bloom Coffee Hub. Café de especialidad y alimentos libres de gluten, azúcar y conservantes en Urban Mall y Distrito Vistalba Mall.

V2:

> Vení a No Drama Club, el Coffee Hub de Bloom. Café de especialidad y alimentos libres de gluten, azúcar y conservantes en Urban Mall y Distrito Vistalba Mall.

### Apertura

- Etiqueta main: `Bloom Coffee Hub · Mendoza`
- Etiqueta V2: `Coffee Hub de Bloom · Mendoza`

V2 agrega el rótulo destacado `No Drama Club`.

Main:

> Vení a quedarte  
> un rato.

V2:

> Vení al café.  
> Quedate un rato.

Descripción main:

> Un café, algo rico y tiempo para vos. O pedilo para llevar: también vale.

Descripción V2:

> Viví la experiencia completa con amigos, en familia, en pareja o a solas. Disfrutamos la compañía y los momentos sin apuro.

### Motivos para visitar

Main:

1. `Para trabajar a tu ritmo.` — `Traé lo que estés haciendo. El café lo ponemos nosotros.`
2. `Para ponerte al día.` — `Una charla sin apuro y algo rico en la mesa.`
3. `Para llevártelo con vos.` — `Si el día viene a las corridas, llevate tus favoritos.`

V2:

1. `Café de especialidad.` — `El café tiene su tiempo. Vos también: vení a disfrutarlo.`
2. `Disfrutamos la compañía.` — `Con amigos, en familia, en pareja o a solas. Hay un lugar para vos.`
3. `Un espacio para quedarte.` — `Para conversar, trabajar a tu ritmo o hacer una pausa.`

Las tarjetas alternadas con fotografías se reemplazan por filas horizontales numeradas, coherentes con los pilares editoriales del sitio.

### Nuevo bloque de café de especialidad

- Etiqueta: `Detrás de cada taza`
- Título: `Café de especialidad, hecho acá.`
- Texto: `Acercate a la barra y disfrutá el momento de preparar tu café.`
- Material pendiente: fotografía de las baristas preparando café.

### Nuevo bloque de eventos

- Etiqueta: `También nos encontramos para celebrar`
- Título: `Compartí un momento Bloom.`
- Texto: `Desayunos empresariales, Día de la Madre y eventos. Contanos qué estás organizando y lo pensamos juntos.`
- Botón: `Consultá por tu evento`

El botón abre WhatsApp con:

> Hola, Bloom. Quisiera consultar por desayunos empresariales o un evento.

### Nuevo cierre

- Título: `Vení al café.`
- Texto: `Un café y tiempo para disfrutar. Te esperamos en No Drama Club.`
- Botón: `Hablemos de tu visita`

El botón abre WhatsApp con:

> Hola, Bloom. Quisiera consultar por el café.

## Comprá online

### Nuevo bloque de entrega

- Etiqueta: `Bloom en tu casa`
- Título: `De nuestro Food Lab a tu puerta.`
- Texto: `Coordinamos la entrega de tu pedido en Gran Mendoza.`
- Material pendiente: fotografía del camión de Bloom llegando a una casa.

### Pedido mínimo

Se agrega a las preguntas frecuentes:

- Pregunta: `¿Cuál es el pedido mínimo?`
- Respuesta: `El mínimo para pedidos particulares es de $30.000.`

Se agrega al cierre:

> Pedido mínimo particular: $30.000.

Los pasos de compra pasan de círculos a filas editoriales numeradas.

## Mayorista

### Nuevo bloque de punto de venta

- Etiqueta: `Bloom en tu negocio`
- Título: `Un lugar para nuestros productos.`
- Texto: `Conversemos sobre cómo sumar Bloom a tu propuesta.`
- Material pendiente: fotografía de un freezer con productos Bloom en un punto de venta.

### Pedido mínimo

Se agrega al cierre:

> Pedido mínimo mayorista: $100.000.

Las condiciones de compra pasan de círculos a filas editoriales numeradas.

Los demás contenidos mayoristas se mantienen: degustación, cinco perfiles de negocio, líneas de producto, proceso, Food Lab, formas de pago, fidelidad y preguntas frecuentes.

## Contacto

### Texto para clientes

- Main: `Para hacer un pedido, consultar por un producto o elegir tu box. Escribinos.`
- V2: `Para hacer un pedido o consultar por un producto. Escribinos.`

Se elimina la referencia a boxes porque la página queda desactivada.

### Nuevo cierre

- Título: `¿Lo charlamos?`
- Texto: `Contanos qué necesitás y te acompañamos con tu pedido.`
- Condición: `Pedidos particulares desde $30.000 · Mayoristas desde $100.000.`
- Botón: `Escribinos por WhatsApp`

## Componentes compartidos

### `SeccionFoto`

Se crea un componente reutilizable de texto y fotografía para:

- Café de especialidad.
- Entrega a domicilio.
- Freezer en punto de venta.

### `FoodLab`

Se agrega una variante `formal` para mostrar el Food Lab en la Home con una composición rectangular, distinta de la nube utilizada en Nosotros y Mayorista.

### `Pasos`

Las tarjetas circulares se reemplazan por una lista editorial horizontal numerada.

### `Cierre`

Puede mostrar `datos.condicion` entre el texto y los botones.

### `Locales`

- Puede mostrar un estado, por ejemplo `Próximamente`.
- Oculta el botón Cómo llegar cuando un punto tiene ese estado.
- La grilla admite tres ubicaciones.

### `BandaProducto`

Muestra siempre una categoría: línea especial si existe o categoría general como alternativa.

## Estilos

V2 incorpora estilos para:

- Hero de Alimentación consciente.
- Categorías de producto más visibles.
- Tres ubicaciones en escritorio y una columna en móvil.
- Estado Próximamente.
- Condiciones de compra en cierres.
- Food Lab rectangular en la Home.
- Etiqueta No Drama Club del Café.
- Listas editoriales numeradas.
- Bloques fotográficos de especialidad, entrega y freezer.
- Sección oscura de eventos.

También elimina estilos que dejan de usarse para los antiguos motivos del Café y los pasos circulares.

## Docker y ejecución

V2 agrega:

- `.dockerignore`
- `Dockerfile`
- `compose.yaml`
- `nginx/default.conf`
- `scripts/verificar-docker.mjs`

La imagen usa dos etapas:

1. Node 24 instala dependencias y ejecuta el build.
2. Nginx sirve únicamente la salida compilada.

La web queda disponible de forma local en:

```text
http://localhost:8081
```

La configuración incluye:

- Healthcheck.
- Compresión gzip.
- Caché prolongada para assets compilados.
- Caché diaria para imágenes.
- Respuestas 404 para archivos inexistentes.
- Resolución de las rutas internas con su HTML correspondiente.
- Puerto y dirección configurables mediante `BLOOM_PORT` y `BLOOM_BIND_ADDRESS`.

## Documentación y entregables

Se agregan:

- `VERSION_2.md`, con el alcance funcional de la propuesta.
- Documentación Docker en `README.md`.
- `entregables/Bloom-estado-actual-web.html`.
- `entregables/Bloom-estado-actual-web.pdf`.

Los entregables documentan la web, pero no forman parte de su funcionamiento.

## Archivos modificados entre main y V2

- `.dockerignore` — nuevo.
- `Dockerfile` — nuevo.
- `README.md` — documentación Docker.
- `VERSION_2.md` — nuevo.
- `compose.yaml` — nuevo.
- `nginx/default.conf` — nuevo.
- `scripts/verificar-docker.mjs` — nuevo.
- `entregables/Bloom-estado-actual-web.html` — nuevo.
- `entregables/Bloom-estado-actual-web.pdf` — nuevo.
- `src/App.jsx` — control de la ruta Boxes.
- `src/components/BandaProducto.jsx` — categoría visible.
- `src/components/Footer.jsx` — identidad Food Lab.
- `src/components/Header.jsx` — identidad Food Lab en móvil.
- `src/components/Locales.jsx` — estados y tercer punto.
- `src/components/Secciones.jsx` — secciones fotográficas, listas y condiciones.
- `src/data/contenido.js` — textos, flags y nuevos bloques.
- `src/pages/Cafe.jsx` — nueva propuesta de café.
- `src/pages/CompraOnline.jsx` — entrega.
- `src/pages/Contacto.jsx` — cierre.
- `src/pages/Home.jsx` — Food Lab y hero V2.
- `src/pages/Mayorista.jsx` — freezer/punto de venta.
- `src/pages/paginas.css` — estilos de páginas V2.
- `src/styles.css` — estilos generales V2.
- `src/utils/seo.js` — exclusión condicional de Boxes.

## Referencia Git

```sh
git diff main..v2.0
git diff main..v2.0 -- src/data/contenido.js
git show v2.0:VERSION_2.md
```

La propuesta completa está en la rama `v2.0`, commit:

```text
80cbf52 Propuesta Bloom 2.0 y empaquetado Docker.
```
