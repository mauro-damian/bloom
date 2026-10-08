import contenido from '../data/contenido.js';

const paginas = {
  '/': contenido.home,
  '/nosotros': contenido.nosotros,
  '/cafe': contenido.cafe,
  '/compra-online': contenido.online,
  '/mayorista': contenido.mayorista,
  '/boxes': contenido.boxes,
  '/contacto': contenido.contactoPagina,
};

export function seoParaRuta(pathname) {
  const ruta = pathname.replace(/\/+$/, '') || '/';
  const pagina = paginas[ruta] || paginas['/'];
  const imagen = pagina.foto?.src || contenido.home.hero.foto.src;
  const dominio = contenido.marca.url;
  return {
    ...pagina.seo,
    imagen: dominio ? new URL(imagen, dominio).href : imagen,
    imagenAlt: pagina.foto?.alt || contenido.home.hero.foto.alt,
    url: dominio ? new URL(ruta, dominio).href : '',
  };
}
