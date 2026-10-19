import { Link } from 'react-router-dom';
import contenido from '../data/contenido';
import { whatsappUrl } from '../utils/whatsapp';
import { Arrow } from './Marca';

export default function Footer() {
  return <footer className="footer">
    <div className="footer-top">
      <div className="footer-brand"><span className="eyebrow">{contenido.marca.cafe}</span><p>{contenido.footer.descripcion}</p><p className="brand-concept">{contenido.marca.concepto}</p><p className="footer-propuesta">{contenido.marca.propuesta}</p></div>
      <div><h2>{contenido.footer.navegacionTitulo}</h2><nav aria-label={contenido.ui.navegacionFooter}>{contenido.navegacion.map(item => <Link to={item.to} key={item.to}>{item.label}</Link>)}</nav></div>
      <div><h2>{contenido.footer.contactoTitulo}</h2><a href={contenido.contacto.instagram.url}>{contenido.contacto.instagram.usuario}<Arrow diagonal /></a><a href={whatsappUrl()}>{contenido.footer.whatsappLabel}<Arrow diagonal /></a><p className="footer-year">© {new Date().getFullYear()} {contenido.footer.firma}</p></div>
    </div>
    <div className="footer-word" aria-hidden="true">{contenido.marca.nombre}</div>
  </footer>;
}
