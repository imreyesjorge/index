import { c as createComponent, a as createAstro, m as maybeRenderHead, e as addAttribute, d as renderTemplate, i as renderHead, r as renderComponent, j as renderSlot, b as renderScript } from './astro/server_CQvvQdJu.mjs';
/* empty css                         */
import 'clsx';

const $$Astro$1 = createAstro();
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Navbar;
  const { pathname } = Astro2.url;
  const isHome = pathname === "/";
  const isWriting = pathname.includes("writing");
  return renderTemplate`${maybeRenderHead()}<nav class="mb-10"> <ul class="font-serif flex items-center justify-center gap-4 [&_a]:underline-offset-2 [&_a]:decoration-stone-400"> <li><a${addAttribute(isHome ? "underline" : "", "class")} href="/">Home</a></li> <li> <a${addAttribute(isWriting ? "underline" : "", "class")} href="/writing">Writing</a> </li> <li class="text-stone-500">Photos</li> </ul> </nav>`;
}, "/Users/reyes/Developer/index/src/components/shared/Navbar.astro", void 0);

const $$Astro = createAstro();
const $$Root = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Root;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Jorge Reyes</title>${renderHead()}</head> <body class="bg-stone-900 bg-[url(/noise.png)]"> <div id="main-container" class="hidden text-white font-light font-sans text-stone-50 max-w-3xl mx-auto py-10 px-4 grid grid-rows-[min-content,1fr,min-content] min-h-screen"> ${renderComponent($$result, "Navbar", $$Navbar, {})} ${renderSlot($$result, $$slots["default"])} <footer class="border-t border-stone-700 py-6"> <p class="font-serif text-center text-stone-400">
“Sometimes even to live is an act of courage” <span class="text-stone-600">— Seneca</span> </p> </footer> </div> ${renderScript($$result, "/Users/reyes/Developer/index/src/layouts/Root.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "/Users/reyes/Developer/index/src/layouts/Root.astro", void 0);

export { $$Root as $ };
