import contenido from '../data/contenido';
import { BotonWhatsApp } from '../components/Botones';
import { CieloGrano, Foto, TituloMixto } from '../components/Marca';
import { Cierre, Pasos } from '../components/Secciones';

export default function Mayorista() {
  const datos = contenido.mayorista;
  return <div className="wholesale-page">
    <CieloGrano className="wholesale-hero page-hero"><div><p className="eyebrow">{datos.eyebrow}</p><TituloMixto partes={datos.titulo} /><p className="page-lead">{datos.descripcion}</p><BotonWhatsApp mensaje="mayorista">{datos.cta}</BotonWhatsApp></div><div className="wholesale-hero-photo"><Foto foto={datos.foto} priority sizes="(min-width: 900px) 32vw, 80vw" /><span className="handwritten">{contenido.marca.produccion}</span></div></CieloGrano>
    <section className="wholesale-lines section-padding" aria-labelledby="wholesale-lines-title"><div className="section-heading"><p className="eyebrow">{datos.lineas.eyebrow}</p><h2 id="wholesale-lines-title">{datos.lineas.titulo}</h2></div><div className="business-lines product-showcase">{datos.lineas.items.map((linea, i) => <article key={linea.titulo}><span className="editorial-number" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span><div><h3>{linea.titulo}</h3><p>{linea.texto}</p></div><Foto foto={linea.foto} sizes="(min-width: 1100px) 240px, (min-width: 600px) 30vw, 40vw" /></article>)}</div></section>
    <Pasos datos={datos.condiciones} className="wholesale-conditions" editorial />
    <Cierre datos={datos.cierre} mensaje="mayorista" />
  </div>;
}
