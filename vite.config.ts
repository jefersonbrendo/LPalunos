import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, type Plugin} from 'vite';

/** Injeta preload da imagem principal (LCP) de impulsao.html usando o nome com hash emitido no build. */
function preloadHeroImpulsao(): Plugin {
  return {
    name: 'preload-hero-impulsao',
    transformIndexHtml: {
      order: 'post',
      handler(_html, ctx) {
        if (!ctx.filename.endsWith('impulsao.html') || !ctx.bundle) return;
        const heroAsset = Object.keys(ctx.bundle).find((k) =>
          /assets\/impulsao-hero-areia-.*\.webp$/.test(k),
        );
        if (!heroAsset) return;
        return [
          {
            tag: 'link',
            attrs: {
              rel: 'preload',
              as: 'image',
              href: `/${heroAsset}`,
              type: 'image/webp',
              fetchpriority: 'high',
            },
            injectTo: 'head',
          },
        ];
      },
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), preloadHeroImpulsao()],
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
