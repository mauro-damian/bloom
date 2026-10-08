import contenido from '../data/contenido';
import { TituloMixto } from '../components/Marca';
import { Cierre, FoodLab, MediaPendiente } from '../components/Secciones';

export default function Nosotros() {
  const datos = contenido.nosotros;
  return <div className="about-page">
    <section className="about-hero page-hero">
      <p className="eyebrow">{datos.eyebrow}</p><TituloMixto partes={datos.titulo} />
      <div className="about-story"><div className="about-story-copy">{datos.historia.map(parrafo => <p key={parrafo}>{parrafo}</p>)}<span className="handwritten">{datos.anotacion}</span></div><MediaPendiente foto={datos.foto} pendiente={datos.fotoPendiente} className="portrait-frame" sizes="(min-width: 900px) 40vw, 100vw" /></div>
    </section>
    <section className="naming-section section-padding" aria-labelledby="naming-title"><p className="naming-word" aria-hidden="true">{contenido.home.origen.palabra}</p><div><p className="eyebrow">{contenido.home.origen.eyebrow}</p><h2 id="naming-title">{datos.origenTitulo}</h2><p>{contenido.home.origen.descripcion}</p></div></section>
    <FoodLab datos={datos.foodLab} />
    <section className="values-section section-padding" aria-labelledby="values-title"><div className="section-heading"><p className="eyebrow">{datos.pilares.eyebrow}</p><h2 id="values-title">{datos.pilares.titulo}</h2></div><ol className="editorial-list">{datos.pilares.items.map((pilar, i) => <li key={pilar.titulo}><span className="editorial-number" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span><h3>{pilar.titulo}</h3><p>{pilar.texto}</p></li>)}</ol></section>
    <Cierre datos={datos.cierre} tipo="link" />
  </div>;
}
