import tailwindcss from "@tailwindcss/vite";

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
    
    experimental: {
        svg: true,
    },
    
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
            }
        }),
        sitemap(),
    ],
    
    vite: {
        plugins: [tailwindcss()],
    },
});