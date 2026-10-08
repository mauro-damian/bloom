import { Button } from '@mui/material';
import contenido from '../data/contenido';
import { Arrow } from './Marca';

export default function Locales() {
  const { locales } = contenido.home;
  return <section className="locations section-padding" id="locales" aria-labelledby="locales-title">
    <div className="section-heading"><p className="eyebrow">{locales.eyebrow}</p><h2 id="locales-title">{locales.titulo}</h2></div>
    <div className="location-list">{locales.items.map(local => <article className="location" key={local.id}>
      <div className="location-number" aria-hidden="true">{local.numero}</div>
      <div className="location-info"><h3>{local.nombre}</h3>{local.zona && <p className="location-zone">{local.zona}</p>}
        {local.direccion && <address>{local.direccion}</address>}{local.horarios && <p>{local.horarios}</p>}
        {(!local.direccion || !local.horarios || !local.urlMapa) && <p className="location-pending" id={`pending-${local.id}`}>{local.pendiente}</p>}
        <Button variant="outlined" component={local.urlMapa ? 'a' : 'button'} href={local.urlMapa || undefined} disabled={!local.urlMapa} aria-describedby={!local.urlMapa ? `pending-${local.id}` : undefined} endIcon={<Arrow diagonal />}>{contenido.ui.comoLlegar}</Button>
      </div>
    </article>)}</div>
  </section>;
}
