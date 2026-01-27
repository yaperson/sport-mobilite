// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import robotsTxt from 'astro-robots-txt';

const url = 'https://sport-mobilite.fr';
// https://astro.build/config
export default defineConfig({
  site: url,
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => 
        page !== `${url}/admin/` &&
        page !== `${url}/legal/`,
    }), 
    robotsTxt(),
  ]
});