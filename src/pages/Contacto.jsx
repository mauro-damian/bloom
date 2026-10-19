import contenido from '../data/contenido';
import { BotonWhatsApp } from '../components/Botones';
import { CieloGrano } from '../components/Marca';
import Locales from '../components/Locales';

export default function Contacto() {
  const datos = contenido.contactoPagina;
  return <div className="contact-page"><h1 className="sr-only">{datos.titulo}</h1><div className="contact-halves">
    <CieloGrano className="contact-half contact-client"><p className="eyebrow">{datos.clientes.eyebrow}</p><h2>{datos.clientes.titulo}</h2><p className="page-lead">{datos.clientes.texto}</p><p className="contact-minimum">{datos.clientes.condicion}</p><BotonWhatsApp mensaje={datos.clientes.mensaje}>{datos.clientes.cta}</BotonWhatsApp></CieloGrano>
    <section className="contact-half contact-business"><p className="eyebrow">{datos.negocios.eyebrow}</p><h2>{datos.negocios.titulo}</h2><p className="page-lead">{datos.negocios.texto}</p><p className="contact-minimum">{datos.negocios.condicion}</p><BotonWhatsApp mensaje={datos.negocios.mensaje}>{datos.negocios.cta}</BotonWhatsApp></section>
    </div><Locales /></div>;
}
