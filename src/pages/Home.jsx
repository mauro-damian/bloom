import { useState } from 'react';
import { Link } from 'react-router-dom';
import contenido from '../data/contenido';
import { BotonTienda, BotonWhatsApp } from '../components/Botones';
import { Arrow, CieloGrano, Foto, SelloCircular, Sticker, TituloMixto } from '../components/Marca';
import BandaProducto from '../components/BandaProducto';
import Locales from '../components/Locales';
import { FoodLab } from '../components/Secciones';

export default function Home() {
  const { home, marca, tienda, ui } = contenido;
  const [pausado, setPausado] = useState(false);
  return <>
    <CieloGrano className="hero hero-v2">
      <div className="hero-copy"><p className="eyebrow hero-eyebrow"><span className="tiny-star" aria-hidden="true">✦</span>{home.hero.eyebrow}</p>
        <TituloMixto partes={home.hero.titulo} />
        <p className="hero-description">{home.hero.descripcion}</p>
        <div className="hero-actions"><BotonTienda>{home.hero.ctaPrincipal.label}</BotonTienda><Link className="text-link" to={home.hero.ctaSecundaria.to}>{home.hero.ctaSecundaria.label}<Arrow /></Link></div>
        {!tienda.url && <p className="shop-notice">{tienda.pendiente}</p>}
      </div>
      <div className="hero-product"><div className="hero-product-circle"><Foto foto={home.hero.foto} priority sizes="(min-width: 1000px) 45vw, (min-width: 600px) 55vw, 90vw" /></div><SelloCircular className="hero-seal" /><Sticker className="hero-sticker" /></div>
      <div className="hero-bottom"><span>{marca.propuesta}</span><a href="#favoritos" aria-label={ui.productosDestacados}><Arrow className="arrow-down" /></a></div>
    </CieloGrano>

    <div className={`pillars ${pausado ? 'is-paused' : ''}`}><p className="sr-only">{home.pilares.join(' · ')}</p><div className="marquee-track" aria-hidden="true">{[0, 1].map(copy => <span className="marquee-group" key={copy}>{home.pilares.map(pilar => <span key={pilar}>{pilar}<i>✦</i></span>)}</span>)}</div><button className="motion-toggle" type="button" onClick={() => setPausado(!pausado)} aria-label={pausado ? ui.reanudarMovimiento : ui.pausarMovimiento}><svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">{pausado ? <path d="m6 3 11 7-11 7Z" /> : <path d="M5 3h3v14H5zm7 0h3v14h-3Z" />}</svg></button></div>

    <FoodLab datos={home.foodLab} formal />

    <section className="products" id="favoritos" aria-labelledby="products-title"><div className="products-intro"><h2 id="products-title">{ui.productosDestacados}</h2><span aria-hidden="true">01—03</span></div>{home.productos.map(producto => <BandaProducto producto={producto} key={producto.id} />)}</section>

    <section className="pathways section-padding" aria-labelledby="caminos-title"><h2 id="caminos-title" className="sr-only">{ui.caminos}</h2><div className="pathways-grid">{home.caminos.map(camino => <article className={`pathway pathway-${camino.id}`} key={camino.id}>
      {camino.id === 'cafe' && <div className="cafe-picture">{camino.foto ? <Foto foto={camino.foto} sizes="(min-width: 900px) 50vw, 100vw" /> : <div className="photo-placeholder"><span className="placeholder-frame" aria-hidden="true"><svg viewBox="0 0 80 60" fill="none"><path d="M1 1h78v58H1zM1 47l24-22 17 15 10-9 27 23" stroke="currentColor" strokeWidth="1"/><circle cx="57" cy="17" r="5" stroke="currentColor"/></svg></span><span>{camino.fotoPendiente}</span></div>}</div>}
      <div className="pathway-copy"><p className="eyebrow">{camino.eyebrow}</p><h3>{camino.titulo}</h3><p>{camino.descripcion}</p>{camino.id === 'cafe' && <p className="brand-concept">{marca.concepto}</p>}<Link className="text-link" to={camino.cta.to}>{camino.cta.label}<Arrow diagonal /></Link></div>
      {camino.id === 'online' && <svg className="pathway-star" viewBox="0 0 100 100" fill="none" aria-hidden="true"><path d="M50 3v94M3 50h94M17 17l66 66M17 83l66-66" stroke="currentColor" strokeWidth="1"/></svg>}
    </article>)}</div></section>


    <Locales />

    <CieloGrano className="closing section-padding" aria-labelledby="closing-title"><div className="closing-copy"><p className="eyebrow">{home.cierre.eyebrow}</p><h2 id="closing-title">{home.cierre.titulo}</h2><p>{home.cierre.descripcion}</p><p className="purchase-minimum">{home.cierre.condicion}</p><BotonWhatsApp mensaje={home.cierre.cta.mensaje}>{home.cierre.cta.label}</BotonWhatsApp></div><div className="closing-photo"><Foto foto={home.cierre.foto} sizes="(min-width: 900px) 32vw, 80vw" /><span className="closing-caption">{marca.produccion}</span></div></CieloGrano>
  </>;
}
