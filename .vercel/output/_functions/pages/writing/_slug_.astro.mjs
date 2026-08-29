/* empty css                                    */
import { c as createComponent, a as createAstro, r as renderComponent, b as renderScript, d as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CQvvQdJu.mjs';
import { $ as $$Root } from '../../chunks/Root_BMi-QTQD.mjs';
/* empty css                                     */
import { g as getEntry, r as renderEntry } from '../../chunks/_astro_content_BwX8VZAD.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const entry = await getEntry("blog", slug);
  const { Content } = await renderEntry(entry);
  return renderTemplate`${renderComponent($$result, "Root", $$Root, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-center text-6xl mb-12 font-serif">${entry?.data.title}</h1> <main id="md-content"> ${renderComponent($$result2, "Content", Content, {})} </main> ` })} ${renderScript($$result, "/Users/reyes/Developer/index/src/pages/writing/[slug].astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/reyes/Developer/index/src/pages/writing/[slug].astro", void 0);

const $$file = "/Users/reyes/Developer/index/src/pages/writing/[slug].astro";
const $$url = "/writing/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$slug,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
