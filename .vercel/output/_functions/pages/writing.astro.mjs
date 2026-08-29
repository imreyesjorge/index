/* empty css                                 */
import { c as createComponent, r as renderComponent, b as renderScript, d as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_CQvvQdJu.mjs';
import { a as getCollection } from '../chunks/_astro_content_BwX8VZAD.mjs';
import { $ as $$Root } from '../chunks/Root_BMi-QTQD.mjs';
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$Writing = createComponent(async ($$result, $$props, $$slots) => {
  const blogPosts = (await getCollection("blog")).sort((a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf()).reverse();
  return renderTemplate`${renderComponent($$result, "Root", $$Root, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <ul class="flex flex-col gap-6 mb-10"> ${blogPosts.map((post) => renderTemplate`<li> <a${addAttribute(`/writing/${post.data.slug}`, "href")} class="flex flex-col gap-2 hover:bg-stone-900 transition p-4 rounded-lg blog-post"> <div class="flex items-center justify-between"> <h2 class="font-serif">${post.data.title}</h2> <small class="text-xs text-stone-400"> ${new Date(post.data.pubDate).toDateString()} </small> </div> <ul class="flex items-center flex-wrap gap-2"> ${post.data.tags.map((tag) => renderTemplate`<li class="text-[8px] text-stone-300 bg-stone-800 rounded px-1.5 py-0.5 border border-stone-700/50 uppercase"> ${tag} </li>`)} </ul> </a> </li>`)} </ul> </main> ` })} ${renderScript($$result, "/Users/reyes/Developer/index/src/pages/writing.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/reyes/Developer/index/src/pages/writing.astro", void 0);

const $$file = "/Users/reyes/Developer/index/src/pages/writing.astro";
const $$url = "/writing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Writing,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
