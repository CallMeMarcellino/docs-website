import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.excalian.com",
  integrations: [
    starlight({
      title: "Excalian's Documentation",
      pagefind: false,
      description: "All documentation for all products or projects related to Excalian",
      logo: {src: './src/assets/logo.png'},
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
        {label: 'Homepage', link: 'https://www.excalian.com', badge: {text: 'Redirect', variant: 'tip'}},
      ],
      customCss: ['./src/tailwind.css'],
      favicon: './favicon.ico',
      plugins: [
        starlightBlog({
          title: "Changelog",
          authors: {
            excalian: {
              name: "Marcellino Abdelmalak",
              title: "Full-Time Student",
              picture: 'https://docs.excalian.com/_astro/large_logo.DPTKAlgC_1r6v8O.webp',
              url: "https://www.excalian.com/"
            },
          },
          prevNextLinksOrder: 'chronological',
          prefix: 'changelog',
        })
      ]
    }),
    tailwind({
	    applyBaseStyles: false,
    }),
  ],
});