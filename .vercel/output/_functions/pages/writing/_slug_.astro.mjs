/* empty css                                    */
import { e as createComponent, f as createAstro, k as renderComponent, l as renderScript, r as renderTemplate, m as maybeRenderHead, h as addAttribute, n as Fragment, u as unescapeHTML } from '../../chunks/astro/server_BTfbnECp.mjs';
import { $ as $$Root } from '../../chunks/Root_hL2SV6MV.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const response = await fetch("https://gql.hashnode.com", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      query {
        post(id: "${slug}") {
          id
          title
          readTimeInMinutes
          publishedAt
          content {
            html
          }
        }
      }
    `
    })
  });
  const {
    post: {
      title,
      readTimeInMinutes,
      publishedAt,
      content: { html: pageContent }
    }
  } = (await response.json()).data;
  return renderTemplate`${renderComponent($$result, "Root", $$Root, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div> <div class="mb-10 text-center"> <h1 class="font-serif"${addAttribute({ fontSize: "36px", marginBottom: "10px" }, "style")}> ${title} </h1> <div class="grid gap-2"> <p class="text-sm text-stone-400">
Jorge Reyes <span class="text-stone-600">–</span> ${new Date(publishedAt).toDateString()} </p> <p class="text-xs text-stone-400">${readTimeInMinutes} min.</p> </div> </div> <main id="md-content" class="text-stone-50 leading-relaxed *:opacity-0"> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(pageContent)}` })} </main> </div> ` })} ${renderScript($$result, "/Users/reyes/Developer/index/src/pages/writing/[slug].astro?astro&type=script&index=0&lang.ts")}`;
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
