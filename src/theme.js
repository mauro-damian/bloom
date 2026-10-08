import { createTheme } from '@mui/material/styles';

export const colores = {
  cielo: '#A9DAEC', cieloClaro: '#E7F4F9', cieloProfundo: '#3E8FC4',
  tinta: '#3A2418', marron: '#7C4A30', crema: '#FFFAF8', durazno: '#F8EBE0',
  naranja: '#F18B58', pistacho: '#A1C000', arena: '#DED58A', limon: '#EADD81',
  banana: '#E9C94E', magenta: '#AE1C89', lila: '#E781EE', aguamarina: '#91F8F5',
  terracota: '#BC724F', dorado: '#BC9957', cacao: '#72340F', noche: '#0E050A',
};

export const tokens = {
  fuentes: {
    display: '"Baloo 2", sans-serif',
    texto: '"Nunito", sans-serif',
    manuscrita: '"Caveat", cursive',
  },
  tamanos: {
    hero: 'clamp(3rem, 11vw, 9rem)',
    h2: 'clamp(2.25rem, 6vw, 5rem)',
    h3: 'clamp(1.25rem, 2.5vw, 1.75rem)',
    cuerpo: '1.0625rem',
  },
  radios: { recto: 0, nube: 24, pill: 999 },
  espacio: { unidad: 8, margen: 'clamp(1.25rem, 5vw, 5rem)', seccion: 'clamp(4rem, 7.5vw, 7.5rem)' },
};

const variables = Object.fromEntries(Object.entries(colores).map(([key, value]) => [`--${key}`, value]));

export const theme = createTheme({
  palette: {
    primary: { main: colores.marron, contrastText: colores.crema },
    secondary: { main: colores.cielo, contrastText: colores.tinta },
    text: { primary: colores.tinta, secondary: colores.marron },
    background: { default: colores.crema, paper: colores.crema },
  },
  spacing: tokens.espacio.unidad,
  shape: { borderRadius: tokens.radios.recto },
  typography: {
    fontFamily: tokens.fuentes.texto,
    fontSize: 17,
    h1: { fontFamily: tokens.fuentes.display, fontWeight: 800, fontSize: tokens.tamanos.hero, lineHeight: 0.9, letterSpacing: '-0.01em', textTransform: 'uppercase' },
    h2: { fontFamily: tokens.fuentes.display, fontWeight: 800, fontSize: tokens.tamanos.h2, lineHeight: 0.95, letterSpacing: '-0.01em', textTransform: 'uppercase' },
    h3: { fontFamily: tokens.fuentes.display, fontWeight: 800, fontSize: tokens.tamanos.h3, lineHeight: 1.1, textTransform: 'uppercase' },
    body1: { fontSize: tokens.tamanos.cuerpo, lineHeight: 1.6 },
    button: { fontFamily: tokens.fuentes.texto, fontWeight: 700, textTransform: 'none' },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ':root': {
          ...variables,
          '--display': tokens.fuentes.display, '--body': tokens.fuentes.texto,
          '--script': tokens.fuentes.manuscrita, '--hero-size': tokens.tamanos.hero,
          '--h2-size': tokens.tamanos.h2, '--h3-size': tokens.tamanos.h3,
          '--gutter': tokens.espacio.margen, '--section-space': tokens.espacio.seccion,
          '--pill': `${tokens.radios.pill}px`, '--cloud-radius': `${tokens.radios.nube}px`,
        },
        '*, *::before, *::after': { boxSizing: 'border-box' },
        body: { margin: 0 },
        '::selection': { background: colores.naranja, color: colores.tinta },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true, disableRipple: true },
      styleOverrides: {
        root: { borderRadius: tokens.radios.pill, minHeight: 48, padding: '12px 26px', fontSize: '1rem', lineHeight: 1.4, gap: 20, boxShadow: 'none' },
        contained: { '&:hover': { backgroundColor: colores.tinta, boxShadow: 'none' } },
        outlined: { borderColor: 'currentColor', borderWidth: 1, '&:hover': { borderColor: 'currentColor', background: colores.durazno } },
      },
    },
    MuiDialog: { styleOverrides: { paper: { boxShadow: 'none', backgroundImage: 'none' } } },
  },
});
