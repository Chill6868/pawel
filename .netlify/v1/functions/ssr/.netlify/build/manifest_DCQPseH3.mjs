import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro/server_Bc31avQS.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

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
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
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
    isIndex: rawRouteData.isIndex
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
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const f=document.querySelectorAll(\"input, select, textarea\"),a=document.querySelector(\".btn-form-send\");let c=0,i=0;const u=e=>{const t=e.closest(\".input-container__box\"),n=t.querySelector(\".input-container__requirements\"),o=t.querySelector(\".requirements-icon\");t.classList.remove(\"input-container__box--error\"),n.classList.remove(\"input-container__requirements--error\"),n.classList.add(\"input-container__requirements--success\"),o.innerHTML='<i class=\"ti ti-circle-check\"></i>'},d=e=>{const t=e.closest(\".input-container__box\"),n=t.querySelector(\".input-container__requirements\"),o=t.querySelector(\".requirements-icon\");t.classList.add(\"input-container__box--error\"),n.classList.remove(\"input-container__requirements--success\"),n.classList.add(\"input-container__requirements--error\"),o.innerHTML='<i class=\"ti ti-circle-x\"></i>',i++},m=e=>{const t=e.closest(\".input-container__box\"),n=t.querySelector(\".input-container__requirements\"),o=t.querySelector(\".requirements-icon\");t.classList.remove(\"input-container__box--error\"),n.classList.remove(\"input-container__requirements--success\"),n.classList.remove(\"input-container__requirements--error\"),o.innerHTML='<i class=\"ti ti-exclamation-circle\"></i>'},p=e=>{e.id===\"name\"&&(e.value.length>=3?u(e):d(e),e.value.length==0&&c==0&&m(e)),e.id===\"category\"&&(e.value!=\"none\"?u(e):d(e),e.value.length==0&&c==0&&m(e)),e.id===\"description\"&&(e.value.length!=0?u(e):d(e),e.value.length==0&&c==0&&m(e))},h=()=>{f.forEach(e=>{p(e)}),c=0};f.forEach(e=>{e.addEventListener(\"input\",()=>{p(e)})});a.addEventListener(\"click\",e=>{if(e.preventDefault(),c=1,i=0,h(),i==0){console.log(\"No errors.\"),a.disabled=!0,a.classList.add(\"btn--disabled\");const t=document.querySelector(\"form\"),n=new FormData(t);fetch(\"./php/handleForm.php\",{method:\"POST\",body:n}).then(s=>s.json()).then(s=>{s.success?console.log(\"Form sended successfully.\"):s.errors.forEach(l=>{console.log(l),p(l)})}).catch(s=>{console.log(s)})}else console.log(`Error count: ${i}`)});const v=document.querySelectorAll(\".btn__click-pulse\");v.forEach(e=>{let t;const n=()=>{t.classList.add(\"btn__click--pulse--hide\");const o=t;setTimeout(()=>{o.remove()},300)};e.addEventListener(\"mousedown\",o=>{const r=document.createElement(\"div\");t=r,r.classList.add(\"btn__click--pulse\");const s=o.offsetX,_=o.offsetY;r.style.top=`${_}px`,r.style.left=`${s}px`,e.append(r);const q=e.querySelector(\".btn__click--pulse\").closest(\".btn\").offsetWidth;r.style.setProperty(\"--animation-size\",`${q*2.5}px`),e.addEventListener(\"mouseleave\",()=>n())}),e.addEventListener(\"mouseup\",()=>n())});\n"}],"styles":[{"type":"external","src":"/_astro/index.CaIIRIk_.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Wiktor/Desktop/HTML/Main Workspace/astro/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_DCQPseH3.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/generic_CBsHDUwV.mjs","/src/pages/index.astro":"chunks/index_9bb_8loe.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.e7TfEuLM.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/inter-cyrillic-ext-wght-normal.DIEz8p5i.woff2","/_astro/inter-cyrillic-wght-normal.BmJJXa8e.woff2","/_astro/inter-vietnamese-wght-normal._GQuwPVU.woff2","/_astro/inter-greek-ext-wght-normal.D5AYLNiq.woff2","/_astro/inter-latin-ext-wght-normal.CN1pIXkb.woff2","/_astro/inter-greek-wght-normal.DyIDNIyN.woff2","/_astro/inter-latin-wght-normal.BgVq2Tq4.woff2","/_astro/index.CaIIRIk_.css","/favicon.svg","/php/handleForm.php","/libraries/PHPMailer/COMMITMENT","/libraries/PHPMailer/composer.json","/libraries/PHPMailer/get_oauth_token.php","/libraries/PHPMailer/LICENSE","/libraries/PHPMailer/README.md","/libraries/PHPMailer/SECURITY.md","/libraries/PHPMailer/VERSION","/libraries/PHPMailer/language/phpmailer.lang-af.php","/libraries/PHPMailer/language/phpmailer.lang-ar.php","/libraries/PHPMailer/language/phpmailer.lang-as.php","/libraries/PHPMailer/language/phpmailer.lang-az.php","/libraries/PHPMailer/language/phpmailer.lang-ba.php","/libraries/PHPMailer/language/phpmailer.lang-be.php","/libraries/PHPMailer/language/phpmailer.lang-bg.php","/libraries/PHPMailer/language/phpmailer.lang-bn.php","/libraries/PHPMailer/language/phpmailer.lang-ca.php","/libraries/PHPMailer/language/phpmailer.lang-cs.php","/libraries/PHPMailer/language/phpmailer.lang-da.php","/libraries/PHPMailer/language/phpmailer.lang-de.php","/libraries/PHPMailer/language/phpmailer.lang-el.php","/libraries/PHPMailer/language/phpmailer.lang-eo.php","/libraries/PHPMailer/language/phpmailer.lang-es.php","/libraries/PHPMailer/language/phpmailer.lang-et.php","/libraries/PHPMailer/language/phpmailer.lang-fa.php","/libraries/PHPMailer/language/phpmailer.lang-fi.php","/libraries/PHPMailer/language/phpmailer.lang-fo.php","/libraries/PHPMailer/language/phpmailer.lang-fr.php","/libraries/PHPMailer/language/phpmailer.lang-gl.php","/libraries/PHPMailer/language/phpmailer.lang-he.php","/libraries/PHPMailer/language/phpmailer.lang-hi.php","/libraries/PHPMailer/language/phpmailer.lang-hr.php","/libraries/PHPMailer/language/phpmailer.lang-hu.php","/libraries/PHPMailer/language/phpmailer.lang-hy.php","/libraries/PHPMailer/language/phpmailer.lang-id.php","/libraries/PHPMailer/language/phpmailer.lang-it.php","/libraries/PHPMailer/language/phpmailer.lang-ja.php","/libraries/PHPMailer/language/phpmailer.lang-ka.php","/libraries/PHPMailer/language/phpmailer.lang-ko.php","/libraries/PHPMailer/language/phpmailer.lang-lt.php","/libraries/PHPMailer/language/phpmailer.lang-lv.php","/libraries/PHPMailer/language/phpmailer.lang-mg.php","/libraries/PHPMailer/language/phpmailer.lang-mn.php","/libraries/PHPMailer/language/phpmailer.lang-ms.php","/libraries/PHPMailer/language/phpmailer.lang-nb.php","/libraries/PHPMailer/language/phpmailer.lang-nl.php","/libraries/PHPMailer/language/phpmailer.lang-pl.php","/libraries/PHPMailer/language/phpmailer.lang-pt.php","/libraries/PHPMailer/language/phpmailer.lang-pt_br.php","/libraries/PHPMailer/language/phpmailer.lang-ro.php","/libraries/PHPMailer/language/phpmailer.lang-ru.php","/libraries/PHPMailer/language/phpmailer.lang-si.php","/libraries/PHPMailer/language/phpmailer.lang-sk.php","/libraries/PHPMailer/language/phpmailer.lang-sl.php","/libraries/PHPMailer/language/phpmailer.lang-sr.php","/libraries/PHPMailer/language/phpmailer.lang-sr_latn.php","/libraries/PHPMailer/language/phpmailer.lang-sv.php","/libraries/PHPMailer/language/phpmailer.lang-tl.php","/libraries/PHPMailer/language/phpmailer.lang-tr.php","/libraries/PHPMailer/language/phpmailer.lang-uk.php","/libraries/PHPMailer/language/phpmailer.lang-vi.php","/libraries/PHPMailer/language/phpmailer.lang-zh.php","/libraries/PHPMailer/language/phpmailer.lang-zh_cn.php","/libraries/PHPMailer/src/DSNConfigurator.php","/libraries/PHPMailer/src/Exception.php","/libraries/PHPMailer/src/OAuth.php","/libraries/PHPMailer/src/OAuthTokenProvider.php","/libraries/PHPMailer/src/PHPMailer.php","/libraries/PHPMailer/src/POP3.php","/libraries/PHPMailer/src/SMTP.php"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false,"experimentalEnvGetSecretEnabled":false});

export { manifest };
