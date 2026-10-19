import { useEffect, useRef } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { seoParaRuta } from './utils/seo';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Cafe from './pages/Cafe';
import CompraOnline from './pages/CompraOnline';
import Mayorista from './pages/Mayorista';
import Contacto from './pages/Contacto';

export default function App() {
  const { pathname } = useLocation();
  const lastPath = useRef(pathname);
  useEffect(() => {
    const seo = seoParaRuta(pathname);
    document.title = seo.titulo;
    document.querySelector('meta[name="description"]').setAttribute('content', seo.descripcion);
    document.querySelector('meta[property="og:title"]').setAttribute('content', seo.titulo);
    document.querySelector('meta[property="og:description"]').setAttribute('content', seo.descripcion);
    document.querySelector('meta[property="og:image"]')?.setAttribute('content', seo.imagen);
    document.querySelector('meta[property="og:image:alt"]')?.setAttribute('content', seo.imagenAlt);
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', seo.url);
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', seo.url);
    if (lastPath.current !== pathname) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      document.getElementById('contenido')?.focus({ preventScroll: true });
      lastPath.current = pathname;
    }
  }, [pathname]);

  return <><Header /><main id="contenido" tabIndex={-1}><Routes>
    <Route path="/" element={<Home />} />
    <Route path="/nosotros" element={<Nosotros />} />
    <Route path="/cafe" element={<Cafe />} />
    <Route path="/compra-online" element={<CompraOnline />} />
    <Route path="/mayorista" element={<Mayorista />} />
    <Route path="/boxes" element={<Navigate to="/compra-online" replace />} />
    <Route path="/contacto" element={<Contacto />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes></main><Footer /></>;
}
