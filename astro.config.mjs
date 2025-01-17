// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Docs',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Tipme',
					items: [
						{ label: 'Sobre', slug: 'about/us' },
					],
				},
				{
					label: 'Métodos de Pagamento',
					items: [
						{ label: 'Intro', slug: 'payment-methods/intro' },
						{ label: 'MBWay', slug: 'payment-methods/mbway' },
					],
				},
				/* {
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				}, */
			],
		}),
	],
});
