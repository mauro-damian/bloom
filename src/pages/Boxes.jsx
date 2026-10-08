import { Button } from '@mui/material';
import contenido from '../data/contenido';
import { Arrow, Foto, SelloCircular, TituloMixto } from '../components/Marca';
import { BotonWhatsApp } from '../components/Botones';
import { Cierre } from '../components/Secciones';

export default function Boxes() {
  const datos = contenido.boxes;
  return <div className="boxes-page">
    <section className="boxes-hero page-hero"><div><p className="eyebrow">{datos.eyebrow}</p><TituloMixto partes={datos.titulo} /><p className="page-lead">{datos.descripcion}</p><Button component="a" href="#boxes" variant="contained" endIcon={<Arrow />}>{datos.cta}</Button><p className="boxes-note">{datos.nota}</p></div><div className="boxes-hero-photo"><Foto foto={datos.foto} priority sizes="(min-width: 900px) 40vw, 85vw" /><SelloCircular /></div></section>
    <section className="box-list" id="boxes" aria-labelledby="boxes-title"><div className="box-list-heading"><p className="eyebrow">{datos.cta}</p><h2 id="boxes-title">{datos.listaTitulo}</h2></div>{datos.items.map((box, i) => <article className="box-row" key={box.id} aria-labelledby={`box-${box.id}`}><span className="box-number" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span><div className="box-title"><h3 id={`box-${box.id}`}>{box.nombre}</h3><p>{box.descripcion}</p></div><div className="box-content"><h4>{datos.incluye}</h4><p>{box.contenido.join(' · ')}</p>{box.pendiente && <p className="box-pending">{box.pendiente}</p>}{contenido.flags.mostrarPreciosBoxes && Number.isFinite(box.precio) && box.precio > 0 && <p className="box-price">{new Intl.NumberFormat('es-AR', {style:'currency',currency:'ARS',maximumFractionDigits:0}).format(box.precio)}</p>}</div><BotonWhatsApp mensaje="boxes" detalle={`${datos.detalleMensaje} ${box.nombre}.`} className="box-cta">{datos.pedir}<span className="sr-only">: {box.nombre}</span></BotonWhatsApp></article>)}<p className="boxes-note box-list-note">{datos.nota}</p></section>
    <Cierre datos={datos.cierre} mensaje="boxes" />
  </div>;
}
