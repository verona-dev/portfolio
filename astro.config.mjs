import tailwindcss from '@tailwindcss/vite';

// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://zoranverona.com',
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
                iconoir: [
                   'xmark',
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
                   'information-circle',
                   'linkedin-01',
                   'mail-01',
                   'tools',
                   'workflow-square-06'
                ],
            }
        }),
        sitemap(),
    ],
    
    vite: {
        plugins: [tailwindcss()],
    },
});