import{n as y,m,x as a,E as b,z as g,C as x,W as v,R as T,O as c,k as d,r as C,l as _}from"./index-d3e05a27.js";import{c as w,r as $}from"./index-cc40385c.js";import"./index-b60e2128.js";import{R}from"./ConstantsUtil-1a373c11.js";const O=y``;var P=globalThis&&globalThis.__decorate||function(n,e,r,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(n,e,r,o);else for(var s=n.length-1;s>=0;s--)(l=n[s])&&(t=(i<3?l(t):i>3?l(e,r,t):l(e,r))||t);return i>3&&t&&Object.defineProperty(e,r,t),t};let f=class extends m{render(){const{termsConditionsUrl:e,privacyPolicyUrl:r}=c.state;return!e&&!r?null:a`
      <wui-flex
        .padding=${["4","3","3","3"]}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="3"
      >
        <wui-text color="secondary" variant="md-regular" align="center">
          We work with the best providers to give you the lowest fees and best support. More options
          coming soon!
        </wui-text>

        ${this.howDoesItWorkTemplate()}
      </wui-flex>
    `}howDoesItWorkTemplate(){return a` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-primary" slot="iconLeft" name="helpCircle"></wui-icon>
      How does it work?
    </wui-link>`}onWhatIsBuy(){b.sendEvent({type:"track",event:"SELECT_WHAT_IS_A_BUY",properties:{isSmartAccount:g(x.state.activeChain)===v.ACCOUNT_TYPES.SMART_ACCOUNT}}),T.push("WhatIsABuy")}};f.styles=[O];f=P([w("w3m-onramp-providers-footer")],f);const W=d`
  .reown-logo {
    height: 24px;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: ${({tokens:n})=>n.theme.textSecondary};
  }

  a:hover {
    opacity: 0.9;
  }
`;var U=globalThis&&globalThis.__decorate||function(n,e,r,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(n,e,r,o);else for(var s=n.length-1;s>=0;s--)(l=n[s])&&(t=(i<3?l(t):i>3?l(e,r,t):l(e,r))||t);return i>3&&t&&Object.defineProperty(e,r,t),t};let p=class extends m{render(){return a`
      <a
        data-testid="ux-branding-reown"
        href=${R}
        rel="noreferrer"
        target="_blank"
        style="text-decoration: none;"
      >
        <wui-flex
          justifyContent="center"
          alignItems="center"
          gap="1"
          .padding=${["01","0","3","0"]}
        >
          <wui-text variant="sm-regular" color="inherit"> UX by </wui-text>
          <wui-icon name="reown" size="inherit" class="reown-logo"></wui-icon>
        </wui-flex>
      </a>
    `}};p.styles=[C,_,W];p=U([w("wui-ux-by-reown")],p);const B=d`
  :host wui-ux-by-reown {
    padding-top: 0;
  }

  :host wui-ux-by-reown.branding-only {
    padding-top: ${({spacing:n})=>n[3]};
  }

  a {
    text-decoration: none;
    color: ${({tokens:n})=>n.core.textAccentPrimary};
    font-weight: 500;
  }
`;var h=globalThis&&globalThis.__decorate||function(n,e,r,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(n,e,r,o);else for(var s=n.length-1;s>=0;s--)(l=n[s])&&(t=(i<3?l(t):i>3?l(e,r,t):l(e,r))||t);return i>3&&t&&Object.defineProperty(e,r,t),t};let u=class extends m{constructor(){super(),this.unsubscribe=[],this.remoteFeatures=c.state.remoteFeatures,this.unsubscribe.push(c.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var t;const{termsConditionsUrl:e,privacyPolicyUrl:r}=c.state,o=(t=c.state.features)==null?void 0:t.legalCheckbox;return!e&&!r||o?a`
        <wui-flex flexDirection="column"> ${this.reownBrandingTemplate(!0)} </wui-flex>
      `:a`
      <wui-flex flexDirection="column">
        <wui-flex .padding=${["4","3","3","3"]} justifyContent="center">
          <wui-text color="secondary" variant="md-regular" align="center">
            By connecting your wallet, you agree to our <br />
            ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
          </wui-text>
        </wui-flex>
        ${this.reownBrandingTemplate()}
      </wui-flex>
    `}andTemplate(){const{termsConditionsUrl:e,privacyPolicyUrl:r}=c.state;return e&&r?"and":""}termsTemplate(){const{termsConditionsUrl:e}=c.state;return e?a`<a href=${e} target="_blank" rel="noopener noreferrer"
      >Terms of Service</a
    >`:null}privacyTemplate(){const{privacyPolicyUrl:e}=c.state;return e?a`<a href=${e} target="_blank" rel="noopener noreferrer"
      >Privacy Policy</a
    >`:null}reownBrandingTemplate(e=!1){var r;return(r=this.remoteFeatures)!=null&&r.reownBranding?e?a`<wui-ux-by-reown class="branding-only"></wui-ux-by-reown>`:a`<wui-ux-by-reown></wui-ux-by-reown>`:null}};u.styles=[B];h([$()],u.prototype,"remoteFeatures",void 0);u=h([w("w3m-legal-footer")],u);
