import { r as registerInstance, h } from './index-e9e0a7db.js';

const myComponentCss = ":host{display:block;width:100%}.header-nav{display:flex;justify-content:space-between;background-color:#222;color:#fff;padding:0 16px}.header-nav ul{display:flex;gap:24px;list-style:none;padding:0}";

const MyComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h("header", null, h("nav", { class: "header-nav" }, h("ul", null, h("li", null, "menu1"), h("li", null, "menu2"), h("li", null, "menu3")), h("div", null, h("slot", { name: "sub-menu" }))));
  }
};
MyComponent.style = myComponentCss;

export { MyComponent as my_component };
