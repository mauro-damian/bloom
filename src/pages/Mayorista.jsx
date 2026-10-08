import { useState } from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import contenido from '../data/contenido';
import { BotonWhatsApp } from '../components/Botones';
import { CieloGrano, Foto, Sticker, TituloMixto } from '../components/Marca';
import { Cierre, FoodLab, Pasos, Preguntas } from '../components/Secciones';

export default function Mayorista() {
  const datos = contenido.mayorista;
  const [negocioId, setNegocioId] = useState(datos.degustacion.negocios[0].id);
  const negocio = datos.degustacion.negocios.find(item => item.id === negocioId);
  return <div className="wholesale-page">
    <CieloGrano className="wholesale-hero page-hero"><div><p className="eyebrow">{datos.eyebrow}</p><TituloMixto partes={datos.titulo} /><p className="page-lead">{datos.descripcion}</p><BotonWhatsApp mensaje="mayorista">{datos.cta}</BotonWhatsApp></div><div className="wholesale-hero-photo"><Foto foto={datos.foto} priority sizes="(min-width: 900px) 32vw, 80vw" /><span className="handwritten">{contenido.marca.produccion}</span></div></CieloGrano>
    <section className="tasting-section section-padding" aria-labelledby="tasting-title"><div className="tasting-heading"><p className="eyebrow">{datos.degustacion.eyebrow}</p><h2 id="tasting-title">{datos.degustacion.titulo}</h2><p>{datos.degustacion.descripcion}</p><Sticker /></div><div className="tasting-picker"><p id="business-label" className="eyebrow">{datos.degustacion.selectorLabel}</p><ToggleButtonGroup exclusive value={negocioId} onChange={(_, next) => next && setNegocioId(next)} aria-labelledby="business-label" className="business-options">{datos.degustacion.negocios.map(item => <ToggleButton value={item.id} key={item.id} disableRipple>{item.label}</ToggleButton>)}</ToggleButtonGroup><p className="business-description" aria-live="polite" aria-atomic="true">{negocio.descripcion}</p><BotonWhatsApp mensaje="degustacion" detalle={negocio.mensaje} className="tasting-cta">{datos.degustacion.cta}</BotonWhatsApp></div></section>
    <section className="wholesale-lines section-padding" aria-labelledby="wholesale-lines-title"><div className="section-heading"><p className="eyebrow">{datos.lineas.eyebrow}</p><h2 id="wholesale-lines-title">{datos.lineas.titulo}</h2></div><div className="business-lines">{datos.lineas.items.map((linea, i) => <article key={linea.titulo}><span className="editorial-number" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span><div><h3>{linea.titulo}</h3><p>{linea.texto}</p></div><Foto foto={linea.foto} sizes="(min-width: 700px) 180px, 110px" /></article>)}</div></section>
    <Pasos datos={datos.condiciones} className="wholesale-conditions" />
    <section className="wholesale-process section-padding" aria-labelledby="process-title"><h2 id="process-title">{datos.proceso.titulo}</h2><ol>{datos.proceso.items.map((paso, i) => <li key={paso.titulo}><span aria-hidden="true">{String(i + 1).padStart(2, '0')}</span><h3>{paso.titulo}</h3><p>{paso.texto}</p></li>)}</ol></section>
    <FoodLab datos={datos.foodLab} />
    <div className="agreements section-padding">{datos.acuerdos.map(acuerdo => <section key={acuerdo.titulo}><h2>{acuerdo.titulo}</h2><p className="agreement-lead">{acuerdo.texto}</p><p>{acuerdo.detalle}</p></section>)}</div>
    <Preguntas datos={datos.faq} /><Cierre datos={datos.cierre} mensaje="mayorista" />
  </div>;
}
