import{k as h,r as g,l as m,m as f,x as a}from"./index-d3e05a27.js";import{n as i,c as b}from"./index-cc40385c.js";import{o as p}from"./if-defined-a5dd1e7b.js";import"./index-3b96a61f.js";const y=h`
  :host {
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      scale ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, scale;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-image {
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var o=globalThis&&globalThis.__decorate||function(e,n,l,s){var d=arguments.length,r=d<3?n:s===null?s=Object.getOwnPropertyDescriptor(n,l):s,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,n,l,s);else for(var c=e.length-1;c>=0;c--)(u=e[c])&&(r=(d<3?u(r):d>3?u(n,l,r):u(n,l))||r);return d>3&&r&&Object.defineProperty(n,l,r),r};let t=class extends f{constructor(){super(...arguments),this.imageSrc="google",this.loading=!1,this.disabled=!1,this.rightIcon=!0,this.rounded=!1,this.fullSize=!1}render(){return this.dataset.rounded=this.rounded?"true":"false",a`
      <button
        ?disabled=${this.loading?!0:!!this.disabled}
        data-loading=${this.loading}
        tabindex=${p(this.tabIdx)}
      >
        <wui-flex gap="2" alignItems="center">
          ${this.templateLeftIcon()}
          <wui-flex gap="1">
            <slot></slot>
          </wui-flex>
        </wui-flex>
        ${this.templateRightIcon()}
      </button>
    `}templateLeftIcon(){return this.icon?a`<wui-image
        icon=${this.icon}
        iconColor=${p(this.iconColor)}
        ?boxed=${!0}
        ?rounded=${this.rounded}
      ></wui-image>`:a`<wui-image
      ?boxed=${!0}
      ?rounded=${this.rounded}
      ?fullSize=${this.fullSize}
      src=${this.imageSrc}
    ></wui-image>`}templateRightIcon(){return this.rightIcon?this.loading?a`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:a`<wui-icon name="chevronRight" size="lg" color="default"></wui-icon>`:null}};t.styles=[g,m,y];o([i()],t.prototype,"imageSrc",void 0);o([i()],t.prototype,"icon",void 0);o([i()],t.prototype,"iconColor",void 0);o([i({type:Boolean})],t.prototype,"loading",void 0);o([i()],t.prototype,"tabIdx",void 0);o([i({type:Boolean})],t.prototype,"disabled",void 0);o([i({type:Boolean})],t.prototype,"rightIcon",void 0);o([i({type:Boolean})],t.prototype,"rounded",void 0);o([i({type:Boolean})],t.prototype,"fullSize",void 0);t=o([b("wui-list-item")],t);
