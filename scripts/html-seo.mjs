import { seoParaRuta } from '../src/utils/seo.js';

const escapar = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

export function htmlConSeo(html, ruta) {
  const seo = seoParaRuta(ruta);
  const tags = {
    description: seo.descripcion,
    'og:title': seo.titulo,
    'og:description': seo.descripcion,
    'og:image': seo.imagen,
    'og:image:alt': seo.imagenAlt,
  };
  let output = html.replace(/<title>[^<]*<\/title>/, `<title>${escapar(seo.titulo)}</title>`);
  for (const [name, content] of Object.entries(tags)) {
    const attribute = name.startsWith('og:') ? 'property' : 'name';
    output = output.replace(new RegExp(`<meta ${attribute}="${name}" content="[^"]*"\\s*\/?>`), `<meta ${attribute}="${name}" content="${escapar(content)}" />`);
  }
  output = output.replace(/\s*<link rel="canonical" href="[^"]*"\s*\/?>/g, '').replace(/\s*<meta property="og:url" content="[^"]*"\s*\/?>/g, '');
  if (seo.url) output = output.replace('</head>', `  <link rel="canonical" href="${escapar(seo.url)}" />\n    <meta property="og:url" content="${escapar(seo.url)}" />\n  </head>`);
  return output;
}
