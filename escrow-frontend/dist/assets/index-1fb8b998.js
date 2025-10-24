import{k as p,r as m,m as d,x as c}from"./index-d3e05a27.js";import{n as f,c as h}from"./index-cc40385c.js";const g=p`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: ${({tokens:t})=>t.theme.borderPrimary};
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 8px;
    background-color: ${({tokens:t})=>t.theme.backgroundPrimary};
    transition: background-color ${({durations:t})=>t.lg}
      ${({easings:t})=>t["ease-out-power-2"]};
    will-change: background-color;
  }
`;var u=globalThis&&globalThis.__decorate||function(t,r,o,n){var i=arguments.length,e=i<3?r:n===null?n=Object.getOwnPropertyDescriptor(r,o):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(t,r,o,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(e=(i<3?a(e):i>3?a(r,o,e):a(r,o))||e);return i>3&&e&&Object.defineProperty(r,o,e),e};let l=class extends d{constructor(){super(...arguments),this.text=""}render(){return c`${this.template()}`}template(){return this.text?c`<wui-text variant="md-regular" color="secondary">${this.text}</wui-text>`:null}};l.styles=[m,g];u([f()],l.prototype,"text",void 0);l=u([h("wui-separator")],l);
