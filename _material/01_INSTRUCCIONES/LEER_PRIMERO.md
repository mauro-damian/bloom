# BLOOM — LEER PRIMERO

Este paquete tiene todo el material para construir la web institucional de Bloom.
Leé este archivo, después `PROMPT_BLOOM.md`, y recién ahí revisá el resto antes de escribir código.

## Orden de prioridad (si dos fuentes se contradicen, gana la de arriba)

1. `02_MARCA/` → manual de marca y logo oficial (cuando estén). Mandan sobre todo.
2. `01_INSTRUCCIONES/PROMPT_BLOOM.md` → especificación de la web: stack, páginas, reglas.
   `01_INSTRUCCIONES/DIRECCION_VISUAL.md` → diseño página por página, componentes de firma, copy y test anti-IA. Seguirlo al pie de la letra.
3. `03_CONTENIDO/condiciones_y_datos.md` → datos confirmados del negocio (mayorista, envíos, contacto).
4. `04_REFERENCIAS/catalogo_paginas/` → referencia VISUAL principal (páginas del catálogo mayorista).
5. `03_CONTENIDO/bloom_mockup_contenido.html` → contenido y secciones. NO es referencia visual.
6. `03_CONTENIDO/productos_bloom.csv` → datos de productos (versión limpia del Excel).

## Contenido de las carpetas

| Carpeta | Qué hay |
|---|---|
| `01_INSTRUCCIONES/` | Este archivo y el prompt completo. |
| `02_MARCA/` | Logo oficial y manual de marca. **Pendiente**: ver `02_MARCA/PENDIENTE.md`. |
| `03_CONTENIDO/` | Mockup de contenido, catálogo PDF, Excel original, CSV limpio y datos del negocio. |
| `04_REFERENCIAS/` | Páginas del catálogo exportadas a JPG para ver el estilo sin abrir el PDF. |
| `05_FOTOS/` | Fotos reales de productos y del local, ya ordenadas. Ver `05_FOTOS/FOTOS_MAPA.md`. |

## Reglas fijas

- No modificar nada dentro de `_material/`.
- No redibujar ni recortar el logo del catálogo: usar el archivo oficial o un placeholder de texto "Bloom".
- No inventar precios, horarios, direcciones, reseñas, calificaciones, testimonios ni fotos de personas.
- La tienda online es Tiendanube. Esta web NO tiene carrito, checkout ni login.
- Si algo falta: placeholder identificado + anotarlo en la lista de pendientes del README.
