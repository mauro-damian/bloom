import { useId } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import contenido from '../data/contenido';
import { Arrow, CieloGrano, Foto } from './Marca';
import { BotonTienda, BotonWhatsApp } from './Botones';

export function MediaPendiente({ foto, pendiente, className = '', priority = false, sizes = '100vw' }) {
  return <div className={`media-frame ${className}`}>
    {foto ? <Foto foto={foto} priority={priority} sizes={sizes} /> : <div className="photo-placeholder">
      <span className="placeholder-frame" aria-hidden="true"><svg viewBox="0 0 80 60" fill="none"><path d="M1 1h78v58H1zM1 47l24-22 17 15 10-9 27 23" stroke="currentColor"/><circle cx="57" cy="17" r="5" stroke="currentColor"/></svg></span>
      <span>{pendiente}</span>
    </div>}
  </div>;
}

export function Pasos({ datos, className = '' }) {
  const id = useId();
  return <section className={`steps-section section-padding ${className}`} aria-labelledby={id}>
    <div className="section-heading"><p className="eyebrow">{datos.eyebrow}</p><h2 id={id}>{datos.titulo}</h2></div>
    <ol className={`steps-list steps-${datos.items.length}`}>{datos.items.map((paso, i) => <li className="step-circle" key={paso.titulo}>
      <span className="step-number" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span><h3>{paso.titulo}</h3><p>{paso.texto}</p>
    </li>)}</ol>
  </section>;
}

export function Preguntas({ datos }) {
  const id = useId().replaceAll(':', '');
  return <section className="faq-section section-padding" aria-labelledby={`faq-${id}`}>
    <div className="faq-heading"><p className="eyebrow">{datos.eyebrow}</p><h2 id={`faq-${id}`}>{datos.titulo}</h2></div>
    <div className="faq-list">{datos.items.map((item, i) => <Accordion key={item.pregunta} disableGutters elevation={0} square>
      <AccordionSummary id={`question-${id}-${i}`} aria-controls={`answer-${id}-${i}`} expandIcon={<svg className="faq-plus" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 12h16M12 4v16" stroke="currentColor" strokeWidth="1.4"/></svg>}><h3>{item.pregunta}</h3></AccordionSummary>
      <AccordionDetails><p>{item.respuesta}</p></AccordionDetails>
    </Accordion>)}</div>
  </section>;
}

export function FoodLab({ datos, formal = false }) {
  const id = useId().replaceAll(':', '');
  const media = contenido.foodLab;
  if (formal) return <section className="foodlab foodlab-home section-padding" aria-labelledby={`lab-${id}`}>
    <div className="foodlab-copy"><p className="eyebrow">{datos.eyebrow}</p><h2 id={`lab-${id}`}>{datos.titulo}</h2><p>{datos.texto}</p></div>
    {media.video ? <video className="foodlab-video" controls playsInline preload="none" src={media.video} poster={media.poster || undefined} aria-label={media.titulo}>{media.subtitulos && <track kind="captions" src={media.subtitulos} srcLang="es" label={media.subtitulosLabel} default />}</video> : <MediaPendiente foto={media.foto} pendiente={media.pendiente} sizes="(min-width: 900px) 45vw, 100vw" />}
  </section>;

  return <section className="foodlab section-padding" aria-labelledby={`lab-${id}`}>
    <div className="foodlab-copy"><p className="eyebrow">{datos.eyebrow}</p><h2 id={`lab-${id}`}>{datos.titulo}</h2><p>{datos.texto}</p></div>
    <div className="nube-shell">
      <svg width="0" height="0" aria-hidden="true"><defs><clipPath id={`nube-${id}`} clipPathUnits="objectBoundingBox"><path d="M.08,.42C-.04,.19,.15,.05,.30,.17C.28,-.05,.60,-.06,.66,.17C.89,.05,1.06,.28,.92,.45C1.10,.65,.94,.88,.77,.81C.80,1.03,.49,1.08,.43,.87C.23,1.05,.04,.92,.10,.74C-.06,.70,-.01,.48,.08,.42Z"/></clipPath></defs></svg>
      <CieloGrano as="div" className="nube-shape" style={{clipPath:`url(#nube-${id})`}}>{media.foto && !media.video && <Foto foto={media.foto} sizes="(min-width: 900px) 50vw, 100vw" />}</CieloGrano>
      <div className="nube-content">{media.video ? <video controls playsInline preload="none" src={media.video} poster={media.poster || undefined} aria-label={media.titulo}>{media.subtitulos && <track kind="captions" src={media.subtitulos} srcLang="es" label={media.subtitulosLabel} default />}</video> : !media.foto && <><span className="nube-label">{media.titulo}</span><p>{media.pendiente}</p></>}</div>
    </div>
  </section>;
}

export function Cierre({ datos, tipo = 'whatsapp', mensaje = 'general' }) {
  const id = useId();
  return <CieloGrano className="page-closing section-padding" aria-labelledby={id}>
    <h2 id={id}>{datos.titulo}</h2><div className="page-closing-copy"><p>{datos.texto}</p><div className="closing-actions">
      {tipo === 'link' ? <Button component={Link} to={datos.to} variant="contained" endIcon={<Arrow />}>{datos.label}</Button> : tipo === 'tienda' ? <BotonTienda>{datos.cta}</BotonTienda> : <BotonWhatsApp mensaje={mensaje}>{datos.cta}</BotonWhatsApp>}
      {datos.alternativa && <BotonWhatsApp mensaje={mensaje} variant="outlined">{datos.alternativa}</BotonWhatsApp>}
    </div>{tipo === 'tienda' && !contenido.tienda.url && <p className="shop-notice">{contenido.tienda.pendiente}</p>}</div>
  </CieloGrano>;
}
