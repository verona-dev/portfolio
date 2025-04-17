import tailwindcss from "@tailwindcss/vite";
// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    site: 'https://zorang.netlify.app',
    
    devToolbar: {
        enabled: false
    },
    
    // output: 'static',
    // trailingSlash: 'never',
    
    integrations: [
        icon({
            include: {
                arcticons: [
                   'github',
                   'linkedin',
                   'yahoo-mail',
                ],
                iconoir: [
                   'open-new-window',
                ],
            }
        }),
        sitemap(),
    ],
    
    vite: {
        plugins: [tailwindcss()],
    },
    experimental: {
        svg: true,
    },
});