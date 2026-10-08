import contenido from '../data/contenido';
import { BotonTienda } from './Botones';
import { Foto, IconoLinea, SelloCircular } from './Marca';

export default function BandaProducto({ producto }) {
  return <article className="product-band" style={{ '--product-color': producto.colorFondo, '--product-ink': producto.colorTexto }} aria-labelledby={`title-${producto.id}`}>
    <div className="product-visual">
      <div className="product-index"><span>{producto.numero}</span><span>{producto.categoria}</span></div>
      <Foto foto={producto.imgProducto} sizes="(min-width: 1000px) 34vw, (min-width: 600px) 55vw, 100vw" />
      <h3 id={`title-${producto.id}`}>{producto.nombre}</h3>
    </div>
    <div className="product-story">
      {producto.imgTextura ? <Foto foto={producto.imgTextura} className="texture-photo" sizes="30vw" /> : <span className="pending-texture">{producto.texturaPendiente}</span>}
      <div className="product-story-content"><p className="product-hook">{producto.destacado}</p><p>{producto.descripcion}</p>
        <details><summary>{contenido.ui.verIngredientes}<span aria-hidden="true">+</span></summary><p>{producto.ingredientes}</p></details>
      </div>
    </div>
    <div className="product-ingredient">{producto.imgIngrediente ? <Foto foto={producto.imgIngrediente} sizes="10vw" /> : <span>{producto.ingredientePendiente}</span>}</div>
    <div className="product-end">
      <SelloCircular />
      {producto.lineas.length > 0 && <div className="product-lines">{producto.lineas.map(linea => <IconoLinea linea={linea} key={linea} />)}</div>}
      <p className="product-weight"><span>{contenido.ui.peso}</span>{producto.peso}</p>
      <BotonTienda url={producto.urlTienda} variant="outlined">{contenido.ui.verEnTienda}</BotonTienda>
    </div>
  </article>;
}
