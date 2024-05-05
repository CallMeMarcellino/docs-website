import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.excalian.com',
	integrations: [
    	starlight({
			title: "Excalian's Documentation",
			pagefind: false,
			description: "All documentation for all products or projects related to Excalian",
			logo: { src: './public/logo.png' },
			sidebar: [
				{
					label: 'Guides',
					items: [
						{label: 'Example', link: '/guides/example'},
					],
				},
				{
					label: 'Reference',
					items: [
						{label: 'Example', link: '/reference/example'},
					],
				},
			],
			social: {
				github: 'https://www.excalian.com/github',
				youtube: 'https://www.excalian.com/youtube',
				twitch: 'https://www.excalian.com/twitch',
				'x.com': 'https://www.excalian.com/twitter',
				threads: 'https://www.excalian.com/threads',
				discord: 'https://www.excalian.com/discord',
			},
			customCss: [ './src/tailwind.css' ],
			lastUpdated: false,
			favicon: './favicon.ico',
		}),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});