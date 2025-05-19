import tailwindcss from '@tailwindcss/vite';

// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://zorang.netlify.app',
    output: 'static',
    trailingSlash: 'never',
    
    devToolbar: {
        enabled: false
    },
    
    /*
    experimental: {
        svg: true,
    },
    */
    
    integrations: [
        icon({
            include: {
                arcticons: [
                   'github',
                   'linkedin',
                   'yahoo-mail',
                   'devinfo',
                ],
                iconoir: [
                   'xmark',
                   'info-circle',
                ],
                catpuccin: [
                   'html',
                   'css3',
                   'javascript',
                   'vue',
                   'nuxt',
                   'astro',
                   'tailwind',
                   'sass',
                   'figma',
                   'npm',
                ],
                hugeicons: [
                   'github',
                   'wordpress',
                ],
            }
        }),
        sitemap(),
    ],
    
    vite: {
        plugins: [tailwindcss()],
    },
});