import contenido from '../data/contenido';

export function whatsappUrl(tipo = 'general', detalle = '') {
  const { numero, mensajes } = contenido.contacto.whatsapp;
  if (!numero) return '';
  const mensaje = mensajes[tipo] || mensajes.general;
  return `https://wa.me/${numero}?text=${encodeURIComponent([mensaje, detalle].filter(Boolean).join(' '))}`;
}
