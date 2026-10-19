import { Button } from '@mui/material';
import contenido from '../data/contenido';
import { Arrow, CieloGrano, Foto, TituloMixto } from '../components/Marca';
import { Cierre } from '../components/Secciones';
import { BotonWhatsApp } from '../components/Botones';
import Locales from '../components/Locales';

export default function Cafe() {
  const datos = contenido.cafe;
  return <div className="cafe-page">
    <CieloGrano className={`cafe-hero page-hero ${datos.patio ? 'has-patio' : ''}`}>
      {datos.patio && <Foto foto={datos.patio} priority className="cafe-hero-background" />}
      <div className="cafe-hero-copy">
        <p className="eyebrow">{datos.eyebrow}</p>
        <p className="club-label">{datos.nombre}</p>
        <TituloMixto partes={datos.titulo} />
        <p className="page-lead">{datos.descripcion}</p>
        <Button component="a" href="#locales" variant="contained" endIcon={<Arrow />}>{datos.cta}</Button>
      </div>
    </CieloGrano>
    <section className="cafe-editorial section-padding" aria-labelledby="reasons-title">
      <div className="section-heading"><p className="eyebrow">{datos.motivosEyebrow}</p><h2 id="reasons-title">{datos.motivosTitulo}</h2></div>
      <ol className="editorial-list">{datos.motivos.map((motivo, i) => <li key={motivo.titulo}>
        <span className="editorial-number" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span><h3>{motivo.titulo}</h3><p>{motivo.texto}</p>
      </li>)}</ol>
    </section>
    <section className="cafe-specialty section-padding" aria-labelledby="specialty-title">
      <p className="eyebrow">{datos.especialidad.eyebrow}</p>
      <div className="cafe-specialty-copy"><h2 id="specialty-title">{datos.especialidad.titulo}</h2><p>{datos.especialidad.texto}</p></div>
    </section>
    <section className="cafe-events section-padding" aria-labelledby="events-title">
      <div><p className="eyebrow">{datos.eventos.eyebrow}</p><h2 id="events-title">{datos.eventos.titulo}</h2></div>
      <div className="cafe-events-copy"><p>{datos.eventos.texto}</p><BotonWhatsApp mensaje="eventos">{datos.eventos.cta}</BotonWhatsApp></div>
    </section>
    <Locales />
    <Cierre datos={datos.cierre} mensaje="cafe" />
  </div>;
}
