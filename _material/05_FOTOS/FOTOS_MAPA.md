# Fotos — mapa de uso

Originales en HEIC del iPhone, convertidas a JPG (máx. 2000 px). Codex copia a `public/images/` las que use,
exportadas a WebP/AVIF en los tamaños necesarios. No subir los JPG de 2000 px tal cual.

Los productos los identifiqué a ojo comparando con el catálogo. **Confirmar con Bloom** los marcados con (?).

## Carpetas
- `productos_editados/` → **las mejores**: fotos del estudio (las del catálogo), producto partido flotando sobre color plano
  con ingredientes alrededor. Son las que van en la `BandaProducto` y en Home. Usarlas siempre que exista la del producto.
- `productos/` → la mejor toma de cada producto. `-01` = producto entero, `-02-corte` = partido, que muestra el relleno.
- `lugar_y_marca/` → estantes, packaging, vasos, heladera.
- `descartes_o_alternativas/` → tomas repetidas o con el envase plástico puesto. Usar solo si hace falta.

## Productos editados (estudio): color de fondo exacto

Todas miden 2210×2576 px y tienen fondo de color plano. **El bloque de la banda tiene que usar exactamente el color
de fondo de su foto** para que no se vea el corte: la foto se funde con el bloque. El color está muestreado de las esquinas.

| Archivo | Fondo | Texto encima |
|---|---|---|
| `alfajor-pistacho.jpg` | #A1C000 | tinta |
| `alfajor-80-cacao.jpg` | #DED58A | tinta |
| `alfacookie.jpg` | #DED58A | tinta |
| `alfajor-patagonico.jpg` | #AE1C89 | blanco |
| `torta-intensa-frescura.jpg` | #EADD81 | tinta |
| `tableta-80-almendras.jpg` | #BC724F | blanco (verificar AA; si no da, tinta) |
| `tableta-80-lisa.jpg` | #DED58A | tinta |
| `tableta-marmolado.jpg` | #BC724F | blanco (verificar AA) |
| `tableta-pistacho-frambuesa.jpg` | #E781EE | tinta |
| `yogurt-griego.jpg` | #91F8F5 | tinta |
| `yogurt-griego-granola.jpg` | #BC9957 | tinta |
| `yogurt-griego-frutos-rojos.jpg` | #E781EE | tinta |
| `budin-proteico-banana.jpg` | #E9C94E | tinta |
| `trufas-proteicas.jpg` | #0E050A | blanco |
| `pan-ultra-proteico.jpg` | #72340F | blanco |
| `tortitas-raspadas.jpg` | #DED58A | tinta |
| `empanada-cebolla-hongos.jpg` | #DED58A | tinta |
| `pizzeta.jpg` | #DED58A | tinta |

Varios comparten el beige #DED58A: en una secuencia de bandas no poner dos beige seguidos.
Para mobile, recortar con `object-fit: cover` centrado; el producto está en el centro con aire alrededor.

## Cómo son las fotos sin editar y cómo usarlas
- Casi todas son **cenitales sobre una tabla blanca**, con madera asomando en los bordes. Buen material para recortar.
- Para la `BandaProducto` hace falta el producto **recortado con fondo transparente (PNG)**. Pedir los recortes al estudio
  o hacerlos con una herramienta de quitar fondo. Codex no recorta fotos.
  **Mientras no haya recortes**: recortar en cuadrado centrado sobre el producto (sin madera visible) y apoyarlo sobre
  un bloque de color crema/durazno, no sobre el color pleno de la banda.
- Las fotos `-02-corte` son las más apetecibles (se ve el relleno). Priorizarlas en Home.
- `chocotorta-01-en-mano-exterior` y `cheesecake-proteico-01-en-mano-exterior` están tomadas afuera del local, con pared de
  piedra y el cartel de Bloom de fondo: sirven para Café/Visitanos y para dar "vida real".
- Corregir balance de blancos levemente (tiran a frío/gris). Sin filtros ni saturación exagerada.

## Lugar y marca
| Archivo | Uso sugerido |
|---|---|
| `vasos-bloom-estante.jpg` | **Muy importante**: los vasos muestran el sistema gráfico real de Bloom (celeste con "Bloo", montaña naranja, patrón rojo). Usar en Home o Nosotros y tomarlos como referencia de ilustración y color. |
| `heladera-alfajores-etiquetas.jpg` | Comprá online / Mayorista: muestra las etiquetas reales (verde pistacho, naranja alfacookie). |
| `yerba-organica-01.jpg`, `despensa-*.jpg` | Categoría "Desayuno y Despensa". |

## Productos disponibles
| Producto (catálogo) | Archivos |
|---|---|
| Alfajor pistacho | `alfajor-pistacho-01`, `-02-corte` |
| Alfajor 80% cacao | `alfajor-80-cacao-01`, `-02-corte` |
| Alfacookie | `alfacookie-01`, `-02-corte` |
| Alfajor patagónico | `alfajor-patagonico-01`, `-02-corte` |
| Chocotorta | `chocotorta-01-en-mano-exterior`, `-02-arriba` |
| Cheesecake proteico | `cheesecake-proteico-01-en-mano-exterior`, `-02-arriba` |
| Snickers | `snickers-01`, `-02-corte` |
| Chocodátiles (box mix) | `chocodatiles-mix-01/02/03` |
| Conitos | `conitos-01` |
| Bloom pops chocolate y vainilla | `bloom-pops-chocolate-vainilla-01`, `-02-envase` |
| Bloom pops vainilla y canela (?) | `bloom-pops-vainilla-canela-01`, `-02-envase` |
| Trufas proteicas | `trufas-proteicas-01`, `-02-corte` |
| Budín chocolate blanco y coco (?) | `budin-chocolate-blanco-coco-01`, `-02-corte` |
| Budín carrot | `budin-carrot-01`, `-02-corte` |
| Budín proteico banana | `budin-proteico-banana-01`, `-02-corte` (se ve el centro de dulce de leche) |
| Budín 80% cacao | `budin-80-cacao-01`, `-02-corte` |
| Tableta blanco y pistacho | `tableta-blanco-pistacho-01` |
| Tableta 80% con quinoa pop (?) | `tableta-80-quinoa-pop-01` |
| Tableta 80% con almendras (?) | `tableta-80-almendras-01` |
| Tableta 80% lisa | `tableta-80-lisa-01` |
| Pan ultra proteico rebanado | `pan-ultra-proteico-rebanado-01` |
| Pan de chipá | `pan-de-chipa-01` |
| Granola | `granola-01` |
| Mix frutos rojos patagónicos | `mix-frutos-rojos-01` |
| Manteca ghee (?) | `manteca-ghee-01`, `-02-en-mano` |
| Dulce de leche | `dulce-de-leche-01` |
| Mermelada frutos rojos | `mermelada-frutos-rojos-01` |

## Todavía faltan
- [ ] **Patio exterior con canal de agua** (es el hero de Café/Visitanos).
- [ ] Interior del salón y barra, con gente si se puede.
- [ ] Café servido en mesa, con luz natural.
- [ ] Food Lab / producción.
- [ ] Fachada o cartel de cada local.
- [ ] Productos sin ninguna foto: torta Profunda y Contradictoria, tortitas pinchadas, chipacitos, palitos de queso,
      empanadas de carne y de queso, café en grano/molido, caldo de hueso.
- [ ] Versión editada (estudio) de: chocotorta, cheesecake, snickers, chocodátiles, conitos, bloom pops, budines (carrot,
      80% cacao, chocolate blanco), tableta blanco y pistacho, pan de chipá. Existen en el catálogo: pedirlas al estudio.
- [ ] Texturas de ingredientes para los bloques 2 y 3 de la banda (crema, dulce de leche, pistacho, cacao, frutos rojos).
      Si no hay, el estudio puede proveerlas: las del catálogo ya existen.
- [ ] El video `descartes_o_alternativas/video-1-7s.mov` dura 1,7 s: no sirve para la web.
