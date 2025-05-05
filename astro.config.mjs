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
                ],
                iconoir: [
                   'xmark',
                   'info-circle',
                ],
                'skill-icons': [
                   'html',
                   'css',
                   'javascript',
                   'vuejs-dark',
                   'nuxtjs-dark',
                   'astro',
                   'tailwindcss-dark',
                   'sass',
                   'wordpress',
                   'github-dark',
                   'figma-dark',
                   'npm-dark',
                   'pinia-dark',
                   'postman',
                   'supabase-dark',
                   'webstorm-dark',
                ],
            }
        }),
        sitemap(),
    ],
    
    vite: {
        plugins: [tailwindcss()],
    },
});