/* que hace este archivo, detlladamente: genera un feed RSS para el blog,
utilizando las publicaciones en formato Markdown ubicadas en el directorio 
actual y sus subdirectorios.
El feed RSS incluye el título, la descripción y los elementos del sitio, y 
se puede personalizar con datos adicionales como el idioma.*/

import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
    return rss({
        title: 'Astro Learner | Blog',
        description: 'My journey learning Astro',
        site: context.site,
        items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
        customData: `<language>en-us</language>`,
    });
}