/**
 * Genera las variantes WebP usadas en el sitio. No modifica originales.
 * Herramienta externa, sin agregar dependencias al sitio:
 *   npm install --prefix /private/tmp/bloom-image-tools --no-package-lock sharp
 * Uso desde el proyecto:
 *   node scripts/optimizar-imagenes.mjs /ruta/a/bloom-web/_material
 * Si el material está en ./_material, el argumento es opcional.
 * Para instalar la herramienta en otro directorio, usar BLOOM_IMAGE_TOOLS.
 */
import { createRequire } from 'node:module';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const sourceRoot = resolve(process.argv[2] || join(projectRoot, '_material'));
const outputRoot = join(projectRoot, 'public', 'images');
const toolsRoot = process.env.BLOOM_IMAGE_TOOLS || '/private/tmp/bloom-image-tools';
const requireTool = createRequire(pathToFileURL(join(toolsRoot, 'package.json')));
const sharp = requireTool('sharp');

const sources = [
  ['alfajor-pistacho', 'productos_editados/alfajor-pistacho.jpg'],
  ['alfajor-patagonico', 'productos_editados/alfajor-patagonico.jpg'],
  ['budin-proteico-banana', 'productos_editados/budin-proteico-banana.jpg'],
  ['vasos-bloom-estante', 'lugar_y_marca/vasos-bloom-estante.jpg'],
  ['heladera-alfajores-etiquetas', 'lugar_y_marca/heladera-alfajores-etiquetas.jpg'],
  ['pizzeta', 'productos_editados/pizzeta.jpg'],
  ['yogurt-griego', 'productos_editados/yogurt-griego.jpg'],
  ['yogurt-griego-granola', 'productos_editados/yogurt-griego-granola.jpg'],
  ['chocotorta-exterior', 'productos/chocotorta-01-en-mano-exterior.jpg'],
  ['cheesecake-exterior', 'productos/cheesecake-proteico-01-en-mano-exterior.jpg'],
];

const widths = [480, 960, 1600];
const maxBytes = 250_000;
const report = [];
await mkdir(outputRoot, { recursive: true });

for (const [name, relativeSource] of sources) {
  const original = await readFile(join(sourceRoot, '05_FOTOS', relativeSource));
  for (const width of widths) {
    let buffer;
    let quality = 84;
    // Las variantes conservan la proporción completa, sin recortar ni retocar.
    // Algunas fotos de celular son más pequeñas que la variante de 1600 px.
    // Se permite ampliarlas para que srcSet describa el ancho real de cada archivo.
    while (quality >= 52) {
      buffer = await sharp(original)
        .rotate()
        .resize({ width })
        .webp({ quality, effort: 6 })
        .toBuffer();
      if (buffer.length < maxBytes) break;
      quality -= 4;
    }
    if (buffer.length >= maxBytes) {
      throw new Error(`${name}-${width}.webp supera el límite de 250 KB.`);
    }
    const filename = `${name}-${width}.webp`;
    const metadata = await sharp(buffer).metadata();
    if (metadata.width !== width || metadata.format !== 'webp') {
      throw new Error(`Variante inválida: ${filename}`);
    }
    await writeFile(join(outputRoot, filename), buffer);
    report.push({
      archivo: filename,
      ancho: metadata.width,
      alto: metadata.height,
      KB: (buffer.length / 1000).toFixed(1),
      calidad: quality,
    });
  }
}

console.table(report);
