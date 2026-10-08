import contenido from '../data/contenido';
import { BotonWhatsApp } from '../components/Botones';
import { Arrow, CieloGrano } from '../components/Marca';
import Locales from '../components/Locales';

export default function Contacto() {
  const datos = contenido.contactoPagina;
  return <div className="contact-page"><h1 className="sr-only">{datos.titulo}</h1><div className="contact-halves">
    <CieloGrano className="contact-half contact-client"><p className="eyebrow">{datos.clientes.eyebrow}</p><h2>{datos.clientes.titulo}</h2><p className="page-lead">{datos.clientes.texto}</p><BotonWhatsApp mensaje={datos.clientes.mensaje}>{datos.clientes.cta}</BotonWhatsApp></CieloGrano>
    <section className="contact-half contact-business"><p className="eyebrow">{datos.negocios.eyebrow}</p><h2>{datos.negocios.titulo}</h2><p className="page-lead">{datos.negocios.texto}</p><BotonWhatsApp mensaje={datos.negocios.mensaje}>{datos.negocios.cta}</BotonWhatsApp></section>
    </div><section className="contact-instagram section-padding" aria-labelledby="instagram-title"><div><p className="eyebrow">{datos.instagram.eyebrow}</p><h2 id="instagram-title">{datos.instagram.titulo}</h2></div><a className="instagram-link" href={contenido.contacto.instagram.url} aria-label={`${datos.instagram.cta}: ${contenido.contacto.instagram.usuario}`}>{contenido.contacto.instagram.usuario}<Arrow diagonal /></a></section><Locales /></div>;
}
