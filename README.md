# Bloom · web institucional

Sitio de siete páginas construido con React 18, Vite, MUI 5, Emotion y React Router 6, en JavaScript. Incluye Home, Nosotros, Café, Comprá online, Mayorista, Boxes y Contacto.

La tienda vive en Tiendanube. Esta web presenta la marca y deriva las consultas a WhatsApp o a la tienda cuando se configure su URL. No implementa carrito, checkout, login, backend ni cobro automático de suscripciones.

## Ejecutar y compilar

Requiere Node.js 20.11 o posterior y npm.

```sh
npm install
npm run dev -- --port 5174
```

Abrir `http://127.0.0.1:5174`. Para compilar y revisar el resultado de producción:

```sh
npm run build
npm run preview -- --port 5175
```

La compilación genera `dist/`, con un HTML propio para cada ruta y los recursos compartidos. Preview sirve esa carpeta en `http://127.0.0.1:5175`.

## Qué incluye

- Home con bandas de producto, tres caminos, historia del nombre y locales.
- Nosotros con historia de Anahí, cinco pilares y espacio preparado para foto/video del Food Lab.
- Café con motivos para visitar, galería y ubicaciones compartidas.
- Compra online con tres pasos, cuatro categorías, preguntas desplegables y enlaces configurables a Tiendanube.
- Mayorista con selector de cinco tipos de negocio: cambia la descripción y el mensaje de la caja de degustación. Incluye líneas, condiciones, proceso, pagos, fidelidad y preguntas frecuentes.
- Siete boxes con contenido individual y consulta de WhatsApp identificando el box elegido. Sin precios publicados ni suscripción automática.
- Contacto con mensajes separados para clientes y negocios.
- Menú móvil con gestión de foco, enlace para saltar al contenido, movimiento reducido y pausa de la franja animada.

## Estructura

```text
_material/                  Fuentes originales, copiadas sin modificaciones
public/images/              Fotos WebP en 480, 960 y 1600 px
public/grano.svg             Grano reutilizable para fondos de cielo
public/favicon.svg           Favicon provisorio
scripts/optimizar-imagenes.mjs  Conversión reproducible de imágenes
scripts/html-seo.mjs         Generación de metadatos en el HTML
src/data/contenido.js        Todos los textos, fotos, enlaces y flags
src/theme.js                 Paleta, tipografías, radios y espaciados base
src/components/              Componentes compartidos de marca e interacción
src/pages/                   Las siete páginas y sus estilos específicos
src/utils/whatsapp.js        Único helper de enlaces con texto codificado
src/utils/seo.js             Metadatos por ruta, compartidos por build y app
src/App.jsx                  Navegación y actualización de metadatos/foco
src/styles.css               Composición de Home, header y footer
```

## Editar contenido y activar enlaces

El punto principal de edición es `src/data/contenido.js`. Los tokens visuales se editan en `src/theme.js`; la composición está en `src/styles.css` y `src/pages/paginas.css`.

| Cambio | Dónde hacerlo |
| --- | --- |
| Textos de cada página | `home`, `nosotros`, `cafe`, `online`, `mayorista`, `boxes`, `contactoPagina` |
| Títulos y descripciones | `seo` dentro de cada página |
| URL del sitio | `marca.url`, con el dominio confirmado y protocolo HTTPS |
| Tienda | `tienda.url`; vacío mantiene los botones deshabilitados |
| Productos y categorías | `home.productos[].urlTienda` y `online.categorias[].url` |
| WhatsApp | `contacto.whatsapp.numero` y `mensajes` |
| Mensajes de degustación | `mayorista.degustacion.negocios[].mensaje` |
| Boxes | `boxes.items[]`, incluidos contenido y nota pendiente de Paleo |
| Locales | `home.locales.items[]`: `direccion`, `horarios`, `urlMapa` |
| Logo | Copiar el archivo oficial a `public/` y asignar `marca.logo` |
| Fotos y video del Food Lab | `foodLab.foto`, `video`, `poster`, `subtitulos` |

Los enlaces de productos y categorías usan su URL específica o, si falta, la URL general de tienda. Los mapas son enlaces, sin iframe. Al confirmar parcialmente un local, ajustar también su texto `pendiente`.

La marca textual «Bloom» es provisoria y se reemplaza desde `Logo` en `src/components/Marca.jsx`. No se recortó ni redibujó el logo del catálogo. El número de WhatsApp provisto es `5492615688898`; su validez para ambos canales queda registrada como pendiente en `contacto.whatsapp.validacion`.

Los precios de boxes están vacíos. Para mostrarlos en una etapa futura, cargar importes confirmados en pesos en `boxes.items[].precio` y activar `flags.mostrarPreciosBoxes`. Con el flag apagado, o sin importe válido, no se renderizan. `flags.mostrarResenas` permanece en `false`; el sitio no incluye reseñas.

## Fotos

Se usan diez fotos reales del material, optimizadas en treinta archivos WebP. Cada variante pesa menos de 250 KB. Las imágenes incluyen `srcSet`, dimensiones y carga diferida fuera del primer bloque visible. El helper `foto()` de `contenido.js` centraliza rutas, proporciones y texto alternativo.

Para regenerarlas, instalar Sharp como herramienta externa al sitio:

```sh
npm install --prefix /private/tmp/bloom-image-tools --no-package-lock sharp
node scripts/optimizar-imagenes.mjs
```

En macOS, `/private/tmp` corresponde a `/tmp`. Para otra instalación, usar `BLOOM_IMAGE_TOOLS`. Sharp no forma parte de las dependencias del sitio y no hace falta para compilar con las imágenes incluidas. El script acepta una carpeta de material alternativa como argumento.

Para agregar imágenes, ampliar `sources` en el script y asignar sus datos en `contenido.js`. Las fotos faltantes tienen proporciones definidas y etiquetas visibles. Las texturas de banda usan `imgTextura` e `imgIngrediente`; el patio usa `cafe.patio` y `home.caminos[].foto`. Los archivos originales permanecen intactos.

## Fuentes y decisiones

Se respeta el orden de prioridad de `_material/01_INSTRUCCIONES/LEER_PRIMERO.md`.

La dirección visual contiene una contradicción: §4.1 pide bandas de pistacho, patagónico y budín banana, mientras §5 enumera pistacho, chocotorta y yogurt. Se usa la terna de §4.1 porque las tres tienen fotografía editada, requisito explícito de las bandas. La chocotorta disponible se utiliza en Café con su fotografía real de celular.

Los pesos de los destacados provienen de la columna `peso` del CSV: 90 g por alfajor y 350 g para el budín. No se publican datos nutricionales incompletos ni precios de productos. El mínimo mayorista de $100.000 es una condición de compra confirmada en el material, no un precio de producto.

Box Paleo conserva sus productos identificados y una nota explícita para las dos tortas cuyas variedades faltan. No se promete entrega recurrente automática: cada pedido se coordina por WhatsApp.

## Hosting y metadatos

Publicar el contenido de `dist/` en un hosting estático. Cada ruta tiene su directorio con `index.html`: `/nosotros/`, `/cafe/`, `/compra-online/`, `/mayorista/`, `/boxes/` y `/contacto/`. El hosting debe servir esos archivos también al abrir la ruta directamente o recargarla. Los recursos de `assets/` e `images/` deben conservar sus rutas desde la raíz del dominio.

Priorizar el HTML del directorio de cada página antes de aplicar un fallback global a la Home. `npm run preview` incluye esa resolución para rutas con y sin barra final; la configuración del hosting definitivo debe respetar el mismo comportamiento.

La compilación genera título, descripción y Open Graph específicos en el HTML de cada ruta. La app también los actualiza al navegar. Al completar `marca.url`, se generan canonical, `og:url` e imágenes sociales con URL absoluta; recompilar después de configurarlo. Mientras el dominio está pendiente, las imágenes sociales usan rutas relativas.

El contenido de las páginas se renderiza con React en el cliente: los HTML por ruta incluyen los metadatos, no una versión SSR del cuerpo. No hay despliegue ni push remoto realizado.

## Pendientes de negocio y material antes de publicar

- Logo oficial claro/oscuro, variante Food Lab, manual de marca y tipografías definitivas.
- Dominio del sitio, URL de Tiendanube y enlaces de productos/categorías.
- Confirmación del número para minorista y mayorista; email, si se quiere publicar.
- Dirección, horarios y Maps de Urban Mall / La Puntilla y Distrito Vistalba Mall.
- Fotos de Anahí, patio con canal de agua, salón, barra, café servido, fachadas y Food Lab. Video de producción y subtítulos si se incorpora; no se utiliza el video de 1,7 segundos del paquete.
- Texturas de ingredientes para las bandas. Actualmente sus espacios están identificados.
- Opciones de pago minoristas, descuentos, anticipación de tortas y venta por kilo/unidad. No se inventaron condiciones.
- Precios y condiciones de boxes; variedades de las dos tortas del Paleo. No se publican descuentos sugeridos ni cobros automáticos.
- Validación editorial final de textos, productos y marca, y configuración del hosting.

## Verificación

Pruebas completadas en esta entrega:

- Compilación de producción sin errores.
- Las siete páginas en 360, 390, 768 y 1440 px: sin desbordes, imágenes rotas, IDs duplicados ni errores de JavaScript; un H1 por página.
- Menú móvil, Escape, contención y devolución de foco, foco al navegar y enlace para saltar al contenido.
- Preguntas frecuentes operadas con teclado; cinco selecciones de degustación con mensajes distintos; siete boxes con su nombre en WhatsApp; dos canales diferenciados de contacto.
- Botones de tienda deshabilitados mientras falta su URL; pausa de franja y preferencia de movimiento reducido.
- Títulos, descripciones y Open Graph por ruta en el HTML generado. Apertura directa de las siete páginas y rutas con barra final en la vista de producción.
- Treinta variantes de imagen por debajo de 250 KB y material original comparado sin diferencias.

Los datos pendientes anteriores requieren confirmación del negocio, independientemente de estas pruebas.
