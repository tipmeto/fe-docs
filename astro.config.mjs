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
        {
          label: 'Instituições de Pagamento',
          items: [
            {
              label: 'Eupago',
              items: [
                { label: 'Intro', slug: 'payment-gateways/intro' },
                { label: 'Registo na Eupago', slug: 'payment-gateways/eupago/registo-eupago' },
                { label: 'Tempo de resposta da Eupago', slug: 'payment-gateways/eupago/eupago-tempo-resposta' },
                { label: 'Documentos necessários', slug: 'payment-gateways/eupago/documentos' },
              ],
            }
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
