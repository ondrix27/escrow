import{k as l,m as c,x as m}from"./index-d3e05a27.js";import{n as h,c as f}from"./index-cc40385c.js";const p=l`
  :host {
    display: block;
    background: linear-gradient(
      90deg,
      ${({tokens:e})=>e.theme.foregroundSecondary} 0%,
      ${({tokens:e})=>e.theme.foregroundTertiary} 50%,
      ${({tokens:e})=>e.theme.foregroundSecondary} 100%
    );
    background-size: 200% 100%;
    animation: shimmer 1s ease-in-out infinite;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-rounded='true']) {
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;var s=globalThis&&globalThis.__decorate||function(e,r,i,n){var d=arguments.length,t=d<3?r:n===null?n=Object.getOwnPropertyDescriptor(r,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(e,r,i,n);else for(var u=e.length-1;u>=0;u--)(a=e[u])&&(t=(d<3?a(t):d>3?a(r,i,t):a(r,i))||t);return d>3&&t&&Object.defineProperty(r,i,t),t};let o=class extends c{constructor(){super(...arguments),this.width="",this.height="",this.variant="default",this.rounded=!1}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
    `,this.dataset.rounded=this.rounded?"true":"false",m`<slot></slot>`}};o.styles=[p];s([h()],o.prototype,"width",void 0);s([h()],o.prototype,"height",void 0);s([h()],o.prototype,"variant",void 0);s([h({type:Boolean})],o.prototype,"rounded",void 0);o=s([f("wui-shimmer")],o);
