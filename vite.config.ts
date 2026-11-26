import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, type Plugin} from 'vite';

/**
 * Otimizações de build exclusivas da página /impulsao:
 * 1) Inline dos CSS críticos no <head> (elimina requisições render-blocking ~320 ms).
 * 2) Preload responsivo da imagem LCP do topo (480w no mobile, 800w no desktop).
 */
function otimizarImpulsaoHtml(): Plugin {
  return {
    name: 'otimizar-impulsao-html',
    transformIndexHtml: {
      order: 'post',
      handler(html, ctx) {
        if (!ctx.filename.endsWith('impulsao.html') || !ctx.bundle) return;

        let out = html;
        // Inline dos CSS emitidos pelo Vite (wght + Tailwind) para zerar CSS render-blocking
        out = out.replace(
          /<link\s+rel="stylesheet"[^>]*href="\/(assets\/[^"]+\.css)"[^>]*>\s*/g,
          (match, assetKey: string) => {
            const chunk = ctx.bundle?.[assetKey];
            if (chunk && chunk.type === 'asset' && typeof chunk.source === 'string') {
              return `<style>${chunk.source}</style>\n    `;
            }
            return match;
          },
        );

        const hero800 = Object.keys(ctx.bundle).find((k) =>
          /^assets\/impulsao-hero-areia-(?!480-).*\.webp$/.test(k),
        );
        const hero480 = Object.keys(ctx.bundle).find((k) =>
          /^assets\/impulsao-hero-areia-480-.*\.webp$/.test(k),
        );

        const tags = [];
        if (hero800) {
          tags.push({
            tag: 'link',
            attrs: hero480
              ? {
                  rel: 'preload',
                  as: 'image',
                  href: `/${hero480}`,
                  imagesrcset: `/${hero480} 480w, /${hero800} 800w`,
                  imagesizes: '(max-width: 480px) calc(100vw - 32px), 448px',
                  type: 'image/webp',
                  fetchpriority: 'high',
                }
              : {
                  rel: 'preload',
                  as: 'image',
                  href: `/${hero800}`,
                  type: 'image/webp',
                  fetchpriority: 'high',
                },
            injectTo: 'head' as const,
          });
        }

        return { html: out, tags };
      },
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), otimizarImpulsaoHtml()],
    build: {
      rollupOptions: {
        // Páginas: a landing (index.html), a roleta do back redirect (/roleta) e a página de impulsão (/impulsao)
        input: {
          main: path.resolve(__dirname, 'index.html'),
          roleta: path.resolve(__dirname, 'roleta.html'),
          impulsao: path.resolve(__dirname, 'impulsao.html'),
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
