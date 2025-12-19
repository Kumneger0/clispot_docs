// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
    integrations: [starlight({
        title: 'Clispot Docs',
        logo: {
            src: './public/logo.png',
        },
        favicon: '/favicon.png',
        social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/kumneger0/clispot' }],
        sidebar: [
            {
                label: 'Core',
                items: [
                    { label: 'Introduction', slug: 'core/introduction' },
                    { label: 'Installation', slug: 'core/installation' },
                    { label: 'Configuration', slug: 'core/configuration' },
                    { label: 'Features', slug: 'core/features' },
                    { label: 'Usage', slug: 'core/usage' },
                    { label: 'Troubleshooting', slug: 'core/troubleshooting' },
                ],
            },
            {
                label: 'VS Code Extension',
                items: [
                    { label: 'Quickstart', slug: 'vscode-extension/quickstart' },
                ],
            },
        ],
		}), sitemap()],
});