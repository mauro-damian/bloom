import contenido from '../data/contenido';
import { BotonTienda } from '../components/Botones';
import { CieloGrano, Foto, SelloCircular, TituloMixto } from '../components/Marca';
import { Cierre, Pasos, Preguntas } from '../components/Secciones';

export default function CompraOnline() {
  const datos = contenido.online;
  return <div className="online-page">
    <CieloGrano className="online-hero page-hero"><div className="online-hero-copy"><p className="eyebrow">{datos.eyebrow}</p><TituloMixto partes={datos.titulo} /><p className="page-lead">{datos.descripcion}</p><BotonTienda>{datos.cta}</BotonTienda>{!contenido.tienda.url && <p className="shop-notice">{contenido.tienda.pendiente}</p>}</div><div className="online-hero-photo"><Foto foto={datos.foto} priority sizes="(min-width: 900px) 40vw, 85vw" /><SelloCircular /></div></CieloGrano>
    <Pasos datos={datos.pasos} editorial />
    <section className="categories-section" aria-labelledby="categories-title"><div className="category-heading section-padding"><p className="eyebrow">{datos.categoriasEyebrow}</p><h2 id="categories-title">{datos.categoriasTitulo}</h2></div><div className="category-grid">{datos.categorias.map((categoria, i) => <article className="category" style={{ background: `var(--${categoria.color})` }} key={categoria.id}><div className="category-top"><span aria-hidden="true">{String(i + 1).padStart(2, '0')}</span><h3>{categoria.nombre}</h3></div><Foto foto={categoria.foto} sizes="(min-width: 700px) 50vw, 100vw" /><div className="category-bottom"><p>{categoria.descripcion}</p><BotonTienda url={categoria.url} variant="outlined">{datos.categoriaCta}</BotonTienda></div></article>)}</div></section>
    <section className={`online-delivery section-padding ${datos.entrega.foto || datos.entrega.video ? 'has-media' : ''}`} aria-labelledby="delivery-title">
      <div className="online-delivery-copy"><p className="eyebrow">{datos.entrega.eyebrow}</p><h2 id="delivery-title">{datos.entrega.titulo}</h2><p>{datos.entrega.texto}</p></div>
      {datos.entrega.video ? <video className="online-delivery-media" controls playsInline preload="none" poster={datos.entrega.poster || undefined} aria-label={datos.entrega.videoLabel} src={datos.entrega.video} /> : datos.entrega.foto && <Foto className="online-delivery-media" foto={datos.entrega.foto} sizes="(min-width: 900px) 45vw, 100vw" />}
    </section>
    <Preguntas datos={datos.faq} />
    <Cierre datos={datos.cierre} tipo="tienda" mensaje="pedido" />
  </div>;
}
