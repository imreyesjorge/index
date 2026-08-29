/* empty css                                 */
import { e as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_BTfbnECp.mjs';
import { $ as $$Root } from '../chunks/Root_hL2SV6MV.mjs';
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$Writing = createComponent(async ($$result, $$props, $$slots) => {
  const response = await fetch("https://gql.hashnode.com", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      query {
        user(username: "imreyesjorge") {
          id,
          posts(page: 1, pageSize: 12) {
            totalDocuments
            nodes {
              id
              slug
              title
              brief
              publishedAt
              tags {
                name
              }
            }
          }
        }
      }
    `
    })
  });
  const {
    user: {
      posts: { nodes: blogPosts }
    }
  } = (await response.json()).data;
  return renderTemplate`${renderComponent($$result, "Root", $$Root, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <ul class="flex flex-col gap-6 mb-10"> ${blogPosts.map((post) => renderTemplate`<li class="flex flex-col gap-2 hover:bg-stone-900 transition p-4 rounded-lg blog-post"> <div class="flex items-center justify-between"> <h2 class="font-serif"> <a${addAttribute(`/writing/${post.id}`, "href")} class="hover:underline underline-offset-2"> ${post.title} </a> </h2> <small class="text-xs text-stone-400"> ${new Date(post.publishedAt).toDateString()} </small> </div> <ul class="flex items-center flex-wrap gap-2"> ${post.tags.map((tag) => renderTemplate`<li class="text-xs text-stone-400 bg-stone-800 rounded px-1.5 py-0.5 border border-stone-700/50 uppercase"> ${tag.name} </li>`)} </ul> </li>`)} </ul> </main> ` })} ${renderScript($$result, "/Users/reyes/Developer/index/src/pages/writing.astro?astro&type=script&index=0&lang.ts")}`;
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
