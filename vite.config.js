import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import contenido from './src/data/contenido.js';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { htmlConSeo } from './scripts/html-seo.mjs';

let outputDirectory;

export default defineConfig({
  plugins: [react(), {
    name: 'bloom-html-content',
    configResolved(config) {
      outputDirectory = resolve(config.root, config.build.outDir);
    },
    transformIndexHtml(html, context) {
      const pathname = new URL(context.originalUrl || context.path || '/', 'http://localhost').pathname;
      return htmlConSeo(html, pathname);
    },
    configurePreviewServer(server) {
      // Vite's SPA fallback otherwise serves the Home head for extensionless URLs.
      server.middlewares.use((request, _response, next) => {
        const url = new URL(request.url || '/', 'http://localhost');
        const route = url.pathname.replace(/\/+$/, '') || '/';
        if (route !== '/' && contenido.navegacion.some(item => item.to === route)) {
          request.url = `${route}/index.html${url.search}`;
        }
        next();
      });
    },
    async writeBundle() {
      // Each public route has its own head even for crawlers that do not run JS.
      const html = await readFile(join(outputDirectory, 'index.html'), 'utf8');
      for (const pagina of contenido.navegacion.filter(item => item.to !== '/')) {
        const directory = join(outputDirectory, pagina.to.slice(1));
        await mkdir(directory, { recursive: true });
        await writeFile(join(directory, 'index.html'), htmlConSeo(html, pagina.to));
      }
    },
  }],
});
