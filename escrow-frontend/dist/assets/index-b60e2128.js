import{k as b,r as p,l as m,m as v,x as u}from"./index-d3e05a27.js";import{n as d,c as f}from"./index-cc40385c.js";const h=b`
  button {
    border: none;
    background: transparent;
    height: 20px;
    padding: ${({spacing:t})=>t[2]};
    column-gap: ${({spacing:t})=>t[1]};
    border-radius: ${({borderRadius:t})=>t[1]};
    padding: 0 ${({spacing:t})=>t[1]};
    border-radius: ${({spacing:t})=>t[1]};
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='accent'] {
    color: ${({tokens:t})=>t.core.textAccentPrimary};
  }

  button[data-variant='secondary'] {
    color: ${({tokens:t})=>t.theme.textSecondary};
  }

  /* -- Focus states --------------------------------------------------- */
  button:focus-visible:enabled {
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  button[data-variant='accent']:focus-visible:enabled {
    background-color: ${({tokens:t})=>t.core.foregroundAccent010};
  }

  button[data-variant='secondary']:focus-visible:enabled {
    background-color: ${({tokens:t})=>t.theme.foregroundSecondary};
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button[data-variant='accent']:hover:enabled {
    background-color: ${({tokens:t})=>t.core.foregroundAccent010};
  }

  button[data-variant='secondary']:hover:enabled {
    background-color: ${({tokens:t})=>t.theme.foregroundSecondary};
  }

  button[data-variant='accent']:focus-visible {
    background-color: ${({tokens:t})=>t.core.foregroundAccent010};
  }

  button[data-variant='secondary']:focus-visible {
    background-color: ${({tokens:t})=>t.theme.foregroundSecondary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var r=globalThis&&globalThis.__decorate||function(t,n,a,i){var c=arguments.length,e=c<3?n:i===null?i=Object.getOwnPropertyDescriptor(n,a):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(t,n,a,i);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(e=(c<3?s(e):c>3?s(n,a,e):s(n,a))||e);return c>3&&e&&Object.defineProperty(n,a,e),e};const y={sm:"sm-medium",md:"md-medium"},g={accent:"accent-primary",secondary:"secondary"};let o=class extends v{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.variant="accent",this.icon=void 0}render(){return u`
      <button ?disabled=${this.disabled} data-variant=${this.variant}>
        <slot name="iconLeft"></slot>
        <wui-text
          color=${g[this.variant]}
          variant=${y[this.size]}
        >
          <slot></slot>
        </wui-text>
        ${this.iconTemplate()}
      </button>
    `}iconTemplate(){return this.icon?u`<wui-icon name=${this.icon} size="sm"></wui-icon>`:null}};o.styles=[p,m,h];r([d()],o.prototype,"size",void 0);r([d({type:Boolean})],o.prototype,"disabled",void 0);r([d()],o.prototype,"variant",void 0);r([d()],o.prototype,"icon",void 0);o=r([f("wui-link")],o);
