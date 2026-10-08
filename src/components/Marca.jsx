import { useId } from 'react';
import { Link } from 'react-router-dom';
import contenido from '../data/contenido';

export function Arrow({ diagonal = false, className = '' }) {
  return <svg className={`arrow ${className}`} viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={diagonal ? 'M6 18 18 6M6 6h12v12' : 'M4 12h16m-7-7 7 7-7 7'} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export function Logo() {
  return <Link className="logo" to="/" aria-label={contenido.ui.logoInicio}>{contenido.marca.logo ? <img src={contenido.marca.logo} alt={contenido.marca.nombre} width="140" height="60" /> : contenido.marca.nombre}</Link>;
}

export function CieloGrano({ className = '', children, as: Tag = 'section', ...props }) {
  const id = useId().replaceAll(':', '');
  return <Tag className={`sky ${className}`} {...props}>
    <svg className="sky-clouds" viewBox="0 0 1440 850" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs><filter id={`cloud-${id}`} x="-60%" y="-90%" width="220%" height="280%"><feGaussianBlur stdDeviation="25" /></filter></defs>
      <g fill="var(--crema)" opacity=".48" filter={`url(#cloud-${id})`}>
        <ellipse cx="80" cy="110" rx="210" ry="80" /><ellipse cx="260" cy="90" rx="90" ry="75" />
        <ellipse cx="980" cy="70" rx="190" ry="60" /><ellipse cx="1090" cy="20" rx="100" ry="70" />
        <ellipse cx="380" cy="770" rx="260" ry="90" /><ellipse cx="1440" cy="580" rx="150" ry="200" />
      </g>
    </svg>
    {children}
  </Tag>;
}

export function SelloCircular({ className = '' }) {
  const id = useId().replaceAll(':', '');
  return <div className={`seal ${className}`} aria-hidden="true">
    <svg viewBox="0 0 160 160" className="seal-ring"><defs><path id={`seal-${id}`} d="M80,80m-61,0a61,61 0 1,1 122,0a61,61 0 1,1-122,0" /></defs><text fill="currentColor" fontSize="11" fontWeight="700" letterSpacing="2.3"><textPath href={`#seal-${id}`} textLength="378" lengthAdjust="spacing">{contenido.marca.sello}</textPath></text></svg>
    <svg className="seal-center" viewBox="0 0 60 60" fill="none"><path d="M30 5c0 17-8 25-25 25 17 0 25 8 25 25 0-17 8-25 25-25C38 30 30 22 30 5Z" stroke="currentColor" strokeWidth="1.3" /></svg>
  </div>;
}

export function Sticker({ className = '' }) {
  const id = useId().replaceAll(':', '');
  return <svg className={`sticker ${className}`} viewBox="0 0 120 120" aria-hidden="true"><defs><linearGradient id={`metal-${id}`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#f6f4f1"/><stop offset=".22" stopColor="#7b8283"/><stop offset=".43" stopColor="#ffffff"/><stop offset=".5" stopColor="#a6aaaa"/><stop offset=".76" stopColor="#eef1ef"/><stop offset="1" stopColor="#747878"/></linearGradient></defs><path d="m60 2 13 34 33-22-22 33 34 13-34 13 22 33-33-22-13 34-13-34-33 22 22-33L2 60l34-13-22-33 33 22Z" fill={`url(#metal-${id})`} stroke="#faf8f3" strokeWidth="1" /></svg>;
}

export function Foto({ foto, priority = false, sizes = '100vw', className = '', ...props }) {
  if (!foto) return null;
  return <img className={className} src={foto.src} srcSet={foto.srcSet} sizes={sizes} width={foto.width} height={foto.height} alt={foto.alt} loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : 'auto'} decoding="async" {...props} />;
}

export function TituloMixto({ partes, as: Tag = 'h1', className = '' }) {
  return <Tag className={`mixed-title ${className}`}>{partes.map((parte, i) => parte.peso === 'italica' ? <em key={i}>{parte.t}</em> : <span key={i}>{parte.t}</span>)}</Tag>;
}

export function IconoLinea({ linea }) {
  const paths = {
    keto: <><path d="M18 8c-3 0-4 4-6 7-2 3-4 5-4 9a10 10 0 0 0 20 0c0-4-2-6-4-9-2-3-3-7-6-7Z"/><circle cx="18" cy="24" r="4"/></>,
    proteico: <><path d="M12 18h12M8 12v12m4-15v18m12-18v18m4-15v12"/></>,
    plantBased: <><path d="M10 27C6 12 17 10 28 8c-1 14-5 21-18 19Zm0 0 14-14"/></>,
    energia: <path d="m20 6-11 15h8l-1 10 11-16h-8Z"/>,
  };
  return <span className="line-icon"><svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">{paths[linea]}</svg><span>{contenido.ui.lineas[linea]}</span></span>;
}
