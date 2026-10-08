import { Button } from '@mui/material';
import contenido from '../data/contenido';
import { whatsappUrl } from '../utils/whatsapp';
import { Arrow } from './Marca';

export function BotonTienda({ children = contenido.tienda.label, url, variant = 'contained', className = '' }) {
  const href = url || contenido.tienda.url;
  return <Button variant={variant} className={`shop-button ${className}`} component={href ? 'a' : 'button'} href={href || undefined} disabled={!href} aria-describedby={!href ? 'tienda-pendiente' : undefined} endIcon={<Arrow diagonal />}>
    {children}
  </Button>;
}

export function BotonWhatsApp({ children, mensaje = 'general', detalle = '', variant = 'contained', className = '' }) {
  const href = whatsappUrl(mensaje, detalle);
  return <Button component="a" href={href || undefined} disabled={!href} variant={variant} className={className} endIcon={<Arrow diagonal />}>{children}</Button>;
}
