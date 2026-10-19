import { useState } from 'react';
import { Button } from '@mui/material';
import contenido from '../data/contenido';
import { Arrow } from './Marca';

function MapaLocal({ local }) {
  const [abierto, setAbierto] = useState(false);
  const panelId = `mapa-${local.id}`;
  const destino = new URL(local.urlMapa).searchParams.get('destination') || `${local.nombre}, ${local.direccion}`;
  return <div className="location-map">
    <Button variant="text" aria-expanded={abierto} aria-controls={panelId}
      aria-label={`${abierto ? 'Ocultar' : 'Ver'} mapa de ${local.nombre}`}
      onClick={() => setAbierto(valor => !valor)}>
      {abierto ? 'Ocultar mapa' : 'Ver mapa'}
    </Button>
    <div id={panelId} hidden={!abierto} className="location-map-panel">
      {abierto && <iframe title={`Ubicación de ${local.nombre}`}
        src={`https://www.google.com/maps?q=${encodeURIComponent(destino)}&output=embed`}
        loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />}
    </div>
  </div>;
}

export default function Locales() {
  const { locales } = contenido.home;
  return <section className="locations section-padding" id="locales" aria-labelledby="locales-title">
    <div className="section-heading"><p className="eyebrow">{locales.eyebrow}</p><h2 id="locales-title">{locales.titulo}</h2></div>
    <div className="location-list">{locales.items.map(local => <article className="location" key={local.id}>
      <div className="location-number" aria-hidden="true">{local.numero}</div>
      <div className="location-info">{local.estado && <p className="location-status">{local.estado}</p>}<h3>{local.nombre}</h3>{local.zona && <p className="location-zone">{local.zona}</p>}
        {local.direccion && <address>{local.direccion}</address>}{local.horarios && <p>{local.horarios}</p>}
        {(!local.direccion || !local.horarios || !local.urlMapa) && <p className="location-pending" id={`pending-${local.id}`}>{local.pendiente}</p>}
        {!local.estado && <Button variant="outlined" component={local.urlMapa ? 'a' : 'button'} href={local.urlMapa || undefined} disabled={!local.urlMapa} aria-describedby={!local.urlMapa ? `pending-${local.id}` : undefined} endIcon={<Arrow diagonal />}>{contenido.ui.comoLlegar}</Button>}
        {!local.estado && local.direccion && local.urlMapa && <MapaLocal local={local} />}
      </div>
    </article>)}</div>
  </section>;
}
