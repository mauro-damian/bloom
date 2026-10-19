import { Button } from '@mui/material';
import contenido from '../data/contenido';
import { Arrow, CieloGrano, Foto, TituloMixto } from '../components/Marca';
import { MediaPendiente } from '../components/Secciones';
import Locales from '../components/Locales';

export default function Cafe() {
  const datos = contenido.cafe;
  return <div className="cafe-page">
    <CieloGrano className={`cafe-hero page-hero ${datos.patio ? 'has-patio' : ''}`}>
      {datos.patio && <Foto foto={datos.patio} priority className="cafe-hero-background" />}
      <div className="cafe-hero-copy"><p className="eyebrow">{datos.eyebrow}</p><TituloMixto partes={datos.titulo} /><p className="page-lead">{datos.descripcion}</p><Button component="a" href="#locales" variant="contained" endIcon={<Arrow />}>{datos.cta}</Button></div>
      {!datos.patio && <MediaPendiente pendiente={datos.patioPendiente} className="patio-frame" />}
    </CieloGrano>
    <section className="reasons-section section-padding" aria-labelledby="reasons-title"><p className="eyebrow">{datos.motivosEyebrow}</p><h2 id="reasons-title">{datos.motivosTitulo}</h2><div className="cafe-reasons">{datos.motivos.map((motivo, i) => <article className={`cafe-reason ${!motivo.foto ? 'without-photo' : ''}`} key={motivo.titulo}><span className="reason-number" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span><div className="reason-copy"><h3>{motivo.titulo}</h3><p>{motivo.texto}</p></div>{motivo.foto && <Foto foto={motivo.foto} sizes="(min-width: 900px) 230px, 35vw" />}</article>)}</div></section>
    <section className="gallery-section section-padding" aria-labelledby="gallery-title"><div className="section-heading"><p className="eyebrow">{datos.galeria.eyebrow}</p><h2 id="gallery-title">{datos.galeria.titulo}</h2></div><div className={`cafe-gallery ${datos.galeria.items.length === 2 ? 'two-items' : ''}`}>{datos.galeria.items.map(item => <figure key={item.id}><MediaPendiente foto={item.foto} pendiente={item.pendiente} sizes="(min-width: 900px) 50vw, 100vw" /><figcaption>{item.caption}</figcaption></figure>)}</div></section>
    <Locales />
  </div>;
}
