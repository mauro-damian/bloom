import { useEffect, useRef, useState } from 'react';
import { Dialog, IconButton } from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';
import contenido from '../data/contenido';
import { BotonTienda } from './Botones';
import { Arrow, Logo } from './Marca';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navigating, setNavigating] = useState(false);
  const closeButton = useRef(null);
  const { pathname } = useLocation();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => setOpen(false), [pathname]);

  return <>
    <a className="skip-link" href="#contenido">{contenido.ui.saltarContenido}</a>
    <header className={`header ${scrolled || pathname === '/contacto' ? 'is-scrolled' : ''}`}>
      <Logo />
      <nav className="desktop-nav" aria-label={contenido.ui.navegacionPrincipal}>{contenido.navegacion.map(item => <NavLink key={item.to} to={item.to} end={item.to === '/'}>{item.label}</NavLink>)}</nav>
      <div className="header-actions"><BotonTienda /><IconButton className="menu-toggle" aria-label={contenido.ui.abrirMenu} aria-expanded={open} aria-controls={open ? 'mobile-menu' : undefined} onClick={() => { setNavigating(false); setOpen(true); }}><svg viewBox="0 0 26 26" fill="none" aria-hidden="true"><path d="M3 9h20M3 17h20" stroke="currentColor" strokeWidth="1.5" /></svg></IconButton></div>
    </header>
    <p id="tienda-pendiente" className="sr-only">{contenido.tienda.pendiente}</p>
    <Dialog open={open} onClose={() => setOpen(false)} fullScreen aria-labelledby="menu-title" PaperProps={{ className: 'mobile-menu' }} transitionDuration={0} TransitionProps={{ onEntered: () => closeButton.current?.focus() }} disableRestoreFocus={navigating}>
      <div className="mobile-menu-top"><span className="logo-text">{contenido.marca.nombre}</span><IconButton ref={closeButton} autoFocus aria-label={contenido.ui.cerrarMenu} onClick={() => setOpen(false)}><svg viewBox="0 0 26 26" fill="none" aria-hidden="true"><path d="m5 5 16 16M21 5 5 21" stroke="currentColor" strokeWidth="1.5" /></svg></IconButton></div>
      <h2 id="menu-title" className="sr-only">{contenido.ui.navegacionPrincipal}</h2>
      <nav id="mobile-menu" aria-label={contenido.ui.navegacionPrincipal}>{contenido.navegacion.map((item, i) => <NavLink key={item.to} to={item.to} end={item.to === '/'} onClick={() => { setNavigating(item.to !== pathname); setOpen(false); }}><span className="menu-number">{String(i + 1).padStart(2, '0')}</span>{item.label}<Arrow diagonal /></NavLink>)}</nav>
      <p className="eyebrow">{contenido.marca.lema} · {contenido.marca.ubicacion}</p>
    </Dialog>
  </>;
}
