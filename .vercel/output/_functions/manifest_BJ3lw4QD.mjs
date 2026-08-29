import { k as decodeKey } from './chunks/astro/server_CQvvQdJu.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CNWtkvwI.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/reyes/Developer/index/","cacheDir":"file:///Users/reyes/Developer/index/node_modules/.astro/","outDir":"file:///Users/reyes/Developer/index/dist/","srcDir":"file:///Users/reyes/Developer/index/src/","publicDir":"file:///Users/reyes/Developer/index/public/","buildClientDir":"file:///Users/reyes/Developer/index/dist/client/","buildServerDir":"file:///Users/reyes/Developer/index/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.Bq5u64Vf.css"},{"type":"inline","content":"#md-content{margin-bottom:5rem;max-width:100%;--tw-text-opacity: 1;color:rgb(168 162 158 / var(--tw-text-opacity, 1));h1,h2,h3,h4,h5,h6{margin-top:3rem}h1,h2,h3,h4,h5,h6{margin-bottom:1rem}h1,h2,h3,h4,h5,h6{font-family:Alegreya Variable,ui-serif,Georgia}h1,h2,h3,h4,h5,h6{font-size:1.5rem;line-height:2rem}h1,h2,h3,h4,h5,h6{--tw-text-opacity: 1;color:rgb(250 250 249 / var(--tw-text-opacity, 1))}p{margin-bottom:1rem}strong{font-family:Alegreya Variable,ui-serif,Georgia}strong{font-size:1.125rem;line-height:1.75rem}strong{font-weight:600}strong{--tw-text-opacity: 1;color:rgb(231 229 228 / var(--tw-text-opacity, 1))}code{border-radius:.25rem}code{border-width:1px}code{--tw-border-opacity: 1;border-color:rgb(41 37 36 / var(--tw-border-opacity, 1))}code{--tw-bg-opacity: 1;background-color:rgb(12 10 9 / var(--tw-bg-opacity, 1))}code{padding-left:.375rem;padding-right:.375rem}code{padding-top:.25rem;padding-bottom:.25rem}code{font-family:Fira Code Variable,ui-monospace,SFMono-Regular}code{font-size:.75rem;line-height:1rem}code{--tw-text-opacity: 1;color:rgb(231 229 228 / var(--tw-text-opacity, 1))}pre{margin-bottom:1rem}pre{border-radius:.5rem}pre{padding-left:1rem;padding-right:1rem}pre{padding-top:.75rem;padding-bottom:.75rem}pre{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}pre{border:1px solid #373535!important;background:#171717!important;code{margin-bottom:0}code{border-style:none}code{background-color:transparent}code{padding:0}code{font-size:.875rem;line-height:1.25rem}}pre{max-width:736px}a{text-decoration-line:underline}a{text-decoration-style:dotted}a{text-underline-offset:2px}a:hover{--tw-text-opacity: 1;color:rgb(250 250 249 / var(--tw-text-opacity, 1))}em{font-family:Alegreya Variable,ui-serif,Georgia}em{font-size:1.125rem;line-height:1.75rem}blockquote{margin-bottom:1rem}blockquote{padding:1rem}blockquote{text-align:center}blockquote{font-family:Alegreya Variable,ui-serif,Georgia}blockquote{font-size:1.25rem;line-height:1.75rem}blockquote{--tw-text-opacity: 1;color:rgb(250 250 249 / var(--tw-text-opacity, 1))}blockquote *{margin:0}ul,ol{margin-bottom:.5rem}ul{padding-left:1.5rem}ul{list-style:circle}ol{padding-left:1.5rem}ol{list-style:lower-roman}}\n"}],"routeData":{"route":"/writing/[slug]","isIndex":false,"type":"page","pattern":"^\\/writing\\/([^/]+?)\\/?$","segments":[[{"content":"writing","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/writing/[slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.Bq5u64Vf.css"}],"routeData":{"route":"/writing","isIndex":false,"type":"page","pattern":"^\\/writing\\/?$","segments":[[{"content":"writing","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/writing.astro","pathname":"/writing","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.Bq5u64Vf.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/reyes/Developer/index/src/pages/writing.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/writing@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/reyes/Developer/index/src/pages/writing/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/writing/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/reyes/Developer/index/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/writing/[slug]@_@astro":"pages/writing/_slug_.astro.mjs","\u0000@astro-page:src/pages/writing@_@astro":"pages/writing.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BJ3lw4QD.mjs","/Users/reyes/Developer/index/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_C1tA5p3k.mjs","/Users/reyes/Developer/index/.astro/content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","/Users/reyes/Developer/index/.astro/content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_C73f4t2H.mjs","/Users/reyes/Developer/index/src/pages/writing/[slug].astro?astro&type=script&index=0&lang.ts":"_astro/_slug_.astro_astro_type_script_index_0_lang.CIGmW1uw.js","/Users/reyes/Developer/index/src/pages/writing.astro?astro&type=script&index=0&lang.ts":"_astro/writing.astro_astro_type_script_index_0_lang.C3RNZphb.js","/Users/reyes/Developer/index/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.DzawICtJ.js","/Users/reyes/Developer/index/src/layouts/Root.astro?astro&type=script&index=0&lang.ts":"_astro/Root.astro_astro_type_script_index_0_lang.BGD3ZSt_.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/reyes/Developer/index/src/layouts/Root.astro?astro&type=script&index=0&lang.ts","window.addEventListener(\"load\",()=>{document.querySelector(\"#main-container\")?.classList.remove(\"hidden\")});"]],"assets":["/_astro/alegreya-latin-wght-normal.DMyhyQJL.woff2","/_astro/alegreya-latin-ext-wght-normal.DZ66aWwg.woff2","/_astro/alegreya-cyrillic-ext-wght-normal.Dg9mv8jK.woff2","/_astro/alegreya-vietnamese-wght-normal.D0yOUbYE.woff2","/_astro/alegreya-greek-ext-wght-normal.DNEZwJEI.woff2","/_astro/fira-code-cyrillic-ext-wght-normal.DhYMMuQd.woff2","/_astro/fira-code-greek-wght-normal.B2SviObF.woff2","/_astro/fira-code-latin-ext-wght-normal.Dvfvaomy.woff2","/_astro/fira-code-greek-ext-wght-normal.wWus70Ix.woff2","/_astro/fira-code-cyrillic-wght-normal.Y3u8pIsh.woff2","/_astro/alegreya-greek-wght-normal.B2EMQq5c.woff2","/_astro/fira-code-symbols2-wght-normal.CE6EOz_n.woff2","/_astro/fira-code-latin-wght-normal.CHoedHDv.woff2","/_astro/inter-cyrillic-ext-wght-normal.BOeWTOD4.woff2","/_astro/inter-cyrillic-wght-normal.DqGufNeO.woff2","/_astro/alegreya-cyrillic-wght-normal.0JJv9mHR.woff2","/_astro/inter-latin-ext-wght-normal.DO1Apj_S.woff2","/_astro/inter-greek-ext-wght-normal.DlzME5K_.woff2","/_astro/inter-greek-wght-normal.CkhJZR-_.woff2","/_astro/inter-vietnamese-wght-normal.CBcvBZtf.woff2","/_astro/inter-latin-wght-normal.Dx4kXJAl.woff2","/_astro/index.Bq5u64Vf.css","/favicon.svg","/noise.png","/_astro/_slug_.astro_astro_type_script_index_0_lang.CIGmW1uw.js","/_astro/animate.es.9BHA7DY7.js","/_astro/in-view.es.CmkULtiI.js","/_astro/index.astro_astro_type_script_index_0_lang.DzawICtJ.js","/_astro/writing.astro_astro_type_script_index_0_lang.C3RNZphb.js"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"hNzDzN58VAlLIZ5Ecq8FXv66uP+fRVV7qtfst4oxQe4="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
