// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';


export default defineConfig({
  integrations: [
    starlight({
      title: 'Docs',
      defaultLocale: 'root',
      customCss: [
        './src/tailwind.css',
      ],
      locales: {
        root: {
          label: 'Português',
          lang: 'pt-PT',
        },
        'pt-BR': {
          label: 'Português do Brasil',
          lang: 'pt-BR',
        },
        en: {
          label: 'English',
          lang: 'en',
        }
      },
      logo: {
        src: './src/assets/tipme-logo.svg',
        replacesTitle: true,
      },
      social: {
        github: 'https://github.com/tipmeto/fe-docs',
      },
      sidebar: [
        {
          label: 'Tipme',
          items: [
            { label: 'Sobre', slug: 'about/us' },
            { label: 'Preços', slug: 'about/prices' },
          ],
        },
        {
          label: 'Alertas',
          items: [
            { label: 'Intro', slug: 'alerts/intro' },
            { label: 'Streamlabs', slug: 'alerts/streamlabs' },
            { label: 'Streamelements', slug: 'alerts/streamelements' },
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
                { label: 'Levantamento de fundos', slug: 'payment-gateways/eupago/levantamento' },
                { label: 'Alterar número de telefone', slug: 'payment-gateways/eupago/change-mbway-number' },
              ],
            },
          ],
        },
      ],
    }),
    tailwind({
      // Disable the default base styles:
      applyBaseStyles: false,
    }),
  ],
});
