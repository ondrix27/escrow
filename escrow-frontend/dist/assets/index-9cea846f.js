import{n as m,r as c,m as f,x as d}from"./index-d3e05a27.js";import{n as p,c as h}from"./index-cc40385c.js";import{o as b}from"./if-defined-a5dd1e7b.js";import"./index-af81c576.js";const v=m`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var o=globalThis&&globalThis.__decorate||function(l,i,r,s){var a=arguments.length,e=a<3?i:s===null?s=Object.getOwnPropertyDescriptor(i,r):s,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(l,i,r,s);else for(var u=l.length-1;u>=0;u--)(n=l[u])&&(e=(a<3?n(e):a>3?n(i,r,e):n(i,r))||e);return a>3&&e&&Object.defineProperty(i,r,e),e};let t=class extends f{constructor(){super(...arguments),this.disabled=!1}render(){return d`
      <wui-input-text
        type="email"
        placeholder="Email"
        icon="mail"
        size="lg"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
        tabIdx=${b(this.tabIdx)}
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?d`<wui-text variant="sm-regular" color="error">${this.errorMessage}</wui-text>`:null}};t.styles=[c,v];o([p()],t.prototype,"errorMessage",void 0);o([p({type:Boolean})],t.prototype,"disabled",void 0);o([p()],t.prototype,"value",void 0);o([p()],t.prototype,"tabIdx",void 0);t=o([h("wui-email-input")],t);
