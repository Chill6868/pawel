import { c as createComponent, r as renderTemplate, a as addAttribute, b as createAstro, m as maybeRenderHead, d as renderComponent, e as renderHead, f as renderSlot, s as spreadAttributes } from './astro/server_Bc31avQS.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                         */

const $$Astro$6 = createAstro();
const $$Head = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Head;
  const { title = "Default title" } = Astro2.props;
  return renderTemplate`<meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="./favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css">`;
}, "C:/Users/Wiktor/Desktop/HTML/Main Workspace/astro/src/components/layout/Head.astro", void 0);

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav>nav</nav>`;
}, "C:/Users/Wiktor/Desktop/HTML/Main Workspace/astro/src/components/layout/Nav.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer>footer</footer>`;
}, "C:/Users/Wiktor/Desktop/HTML/Main Workspace/astro/src/components/layout/Footer.astro", void 0);

const $$Astro$5 = createAstro();
const $$LayoutMain = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$LayoutMain;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="pl"> <head>${renderComponent($$result, "Head", $$Head, { "title": title })}${renderHead()}</head> <body> ${renderComponent($$result, "Nav", $$Nav, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/Wiktor/Desktop/HTML/Main Workspace/astro/src/layouts/LayoutMain.astro", void 0);

const $$Astro$4 = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    background = "solid",
    border = "solid",
    hover = "brightness",
    click = "pulse",
    form = "none"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(`btn ${hover ? `btn__hover--${hover}` : ""} ${click !== "none" ? `btn__click-${click}` : ""} ${form !== "none" ? `btn-form-${form}` : ""}`.trim(), "class")}> <div${addAttribute(`btn__background btn__background--${background}`, "class")}></div> <div${addAttribute(`btn__border btn__border--${border}`, "class")}></div> <span class="btn__text"> ${renderSlot($$result, $$slots["default"])} </span> </button> <!-- Click animation --> `;
}, "C:/Users/Wiktor/Desktop/HTML/Main Workspace/astro/src/components/common/Button.astro", void 0);

const $$Astro$3 = createAstro();
const $$Link = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Link;
  const { href, targetBlank, hover = "brightness" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(`link link__hover--${hover}`, "class")}${spreadAttributes(targetBlank ? { target: "nofollow noopener noreferrer external" } : {})}> ${renderSlot($$result, $$slots["default"])}</a>`;
}, "C:/Users/Wiktor/Desktop/HTML/Main Workspace/astro/src/components/common/Link.astro", void 0);

const $$Astro$2 = createAstro();
const $$Input = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Input;
  const { type, label = "inside", id, name } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="input-container__box"> <label${addAttribute(`input-container__label ${label === "inside" ? `input-container__label--${label}` : ""}`.trim(), "class")}${addAttribute(`${id}`, "for")}>${renderSlot($$result, $$slots["label"])}</label> <input class="input-container__input"${addAttribute(`${type}`, "type")}${addAttribute(`${id}`, "id")}${addAttribute(`${name}`, "name")}> <p class="input-container__requirements"> <span class="requirements-icon"> <i class="ti ti-exclamation-circle"></i> </span> ${renderSlot($$result, $$slots["requirements"])} </p> </div>`;
}, "C:/Users/Wiktor/Desktop/HTML/Main Workspace/astro/src/components/common/Input.astro", void 0);

const $$Astro$1 = createAstro();
const $$Select = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Select;
  const { label = "inside", id, name } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="input-container__box"> <label${addAttribute(`input-container__label ${label === "inside" ? `input-container__label--${label}` : ""}`.trim(), "class")}${addAttribute(`${id}`, "for")}>${renderSlot($$result, $$slots["label"])}</label> <div class="input-container__select--arrow"> <i class="ti ti-chevron-down"></i> </div> <select class="input-container__select"${addAttribute(`${id}`, "id")}${addAttribute(`${name}`, "name")}> <option value="none" disabled selected>Wybierz</option> <option value="example">Example</option> </select> <p class="input-container__requirements"> <span class="requirements-icon"> <i class="ti ti-exclamation-circle"></i> </span> ${renderSlot($$result, $$slots["requirements"])} </p> </div>`;
}, "C:/Users/Wiktor/Desktop/HTML/Main Workspace/astro/src/components/common/Select.astro", void 0);

const $$Astro = createAstro();
const $$Textarea = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Textarea;
  const { label = "inside", id, name } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="input-container__box"> <label${addAttribute(`input-container__label ${label === "inside" ? `input-container__label--${label}` : ""}`.trim(), "class")}${addAttribute(`${id}`, "for")}>${renderSlot($$result, $$slots["label"])}</label> <textarea class="input-container__textarea"${addAttribute(`${id}`, "id")}${addAttribute(`${name}`, "name")}></textarea> <p class="input-container__requirements"> <span class="requirements-icon"> <i class="ti ti-exclamation-circle"></i> </span> ${renderSlot($$result, $$slots["requirements"])} </p> </div>`;
}, "C:/Users/Wiktor/Desktop/HTML/Main Workspace/astro/src/components/common/Textarea.astro", void 0);

const $$InputContainer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="input-container"> ${renderSlot($$result, $$slots["default"])} <div class="input-container__btn-box"> ${renderComponent($$result, "Button", $$Button, { "background": "solid", "border": "solid", "hover": "brightness", "form": "send" }, { "default": ($$result2) => renderTemplate`Wyślij
` })} <p> <i class="ti ti-exclamation-circle"></i> Wysyłając formularz akceptujesz naszą
${renderComponent($$result, "Link", $$Link, { "href": "", "targetBlank": true }, { "default": ($$result2) => renderTemplate`politykę prywatności` })}.
</p> </div> </div>`;
}, "C:/Users/Wiktor/Desktop/HTML/Main Workspace/astro/src/components/common/InputContainer.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const head = {
    title: "Example",
    description: "desc"
  };
  return renderTemplate`${renderComponent($$result, "LayoutMain", $$LayoutMain, { "title": `${head.title}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main>index</main> ${renderComponent($$result2, "Button", $$Button, { "background": "gradient", "border": "gradient" }, { "default": ($$result3) => renderTemplate`Button` })} ${renderComponent($$result2, "Button", $$Button, { "background": "solid", "border": "solid", "hover": "brightness" }, { "default": ($$result3) => renderTemplate`Button` })} ${renderComponent($$result2, "Link", $$Link, { "href": "https://youtube.pl" }, { "default": ($$result3) => renderTemplate`strzała` })} ${renderComponent($$result2, "Link", $$Link, { "href": "https://youtube.pl", "targetBlank": true, "hover": "brightness" }, { "default": ($$result3) => renderTemplate`strzała` })} <h1>Lorem ipsum dolor sit amet.</h1> <h2>Lorem ipsum dolor sit amet.</h2> <h3>Lorem ipsum dolor sit amet.</h3> <h4>Lorem ipsum dolor sit amet.</h4> <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quia dolorem
		quae vel eum fuga labore enim, mollitia cumque impedit?
</p> <small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis error, esse
		aspernatur velit modi alias minima ad blanditiis explicabo nisi!</small> <section class="section-p"> <div class="wrapper"> <h2>Section title</h2> <form> ${renderComponent($$result2, "InputContainer", $$InputContainer, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Input", $$Input, { "type": "text", "id": "name", "name": "name" }, { "label": ($$result4) => renderTemplate`<span>Label</span>`, "requirements": ($$result4) => renderTemplate`<span>Requirements.</span>` })} ${renderComponent($$result3, "Select", $$Select, { "id": "category", "name": "category" }, { "label": ($$result4) => renderTemplate`<span>Label</span>`, "requirements": ($$result4) => renderTemplate`<span>Requirements.</span>` })} ${renderComponent($$result3, "Textarea", $$Textarea, { "id": "description", "name": "description" }, { "label": ($$result4) => renderTemplate`<span>Label</span>`, "requirements": ($$result4) => renderTemplate`<span>Requirements.</span>` })} ` })} </form> </div> </section>  ` })}`;
}, "C:/Users/Wiktor/Desktop/HTML/Main Workspace/astro/src/pages/index.astro", void 0);

const $$file = "C:/Users/Wiktor/Desktop/HTML/Main Workspace/astro/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
