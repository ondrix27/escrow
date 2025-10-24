import{p as g,s as C,a as w,k,r as $,m,x as p,O as l}from"./index-d3e05a27.js";import{n as x,c as y,r as v}from"./index-cc40385c.js";import{o as z}from"./if-defined-a5dd1e7b.js";import{e as O,n as _}from"./ref-7f5bf293.js";const h=g({isLegalCheckboxChecked:!1}),u={state:h,subscribe(e){return C(h,()=>e(h))},subscribeKey(e,t){return w(h,e,t)},setIsLegalCheckboxChecked(e){h.isLegalCheckboxChecked=e}},E=k`
  label {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
    column-gap: ${({spacing:e})=>e[2]};
  }

  label > input[type='checkbox'] {
    height: 0;
    width: 0;
    opacity: 0;
    position: absolute;
  }

  label > span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    border: 1px solid ${({colors:e})=>e.neutrals400};
    color: ${({colors:e})=>e.white};
    background-color: transparent;
    will-change: border-color, background-color;
  }

  label > span > wui-icon {
    opacity: 0;
    will-change: opacity;
  }

  label > input[type='checkbox']:checked + span > wui-icon {
    color: ${({colors:e})=>e.white};
  }

  label > input[type='checkbox']:not(:checked) > span > wui-icon {
    color: ${({colors:e})=>e.neutrals900};
  }

  label > input[type='checkbox']:checked + span > wui-icon {
    opacity: 1;
  }

  /* -- Sizes --------------------------------------------------- */
  label[data-size='lg'] > span {
    width: 24px;
    height: 24px;
    min-width: 24px;
    min-height: 24px;
    border-radius: ${({borderRadius:e})=>e[10]};
  }

  label[data-size='md'] > span {
    width: 20px;
    height: 20px;
    min-width: 20px;
    min-height: 20px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  label[data-size='sm'] > span {
    width: 16px;
    height: 16px;
    min-width: 16px;
    min-height: 16px;
    border-radius: ${({borderRadius:e})=>e[1]};
  }

  /* -- Focus states --------------------------------------------------- */
  label > input[type='checkbox']:focus-visible + span,
  label > input[type='checkbox']:focus + span {
    border: 1px solid ${({tokens:e})=>e.core.borderAccentPrimary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  /* -- Checked states --------------------------------------------------- */
  label > input[type='checkbox']:checked + span {
    background-color: ${({tokens:e})=>e.core.iconAccentPrimary};
    border: 1px solid transparent;
  }

  /* -- Hover states --------------------------------------------------- */
  input[type='checkbox']:not(:checked):not(:disabled) + span:hover {
    border: 1px solid ${({colors:e})=>e.neutrals700};
    background-color: ${({colors:e})=>e.neutrals800};
    box-shadow: none;
  }

  input[type='checkbox']:checked:not(:disabled) + span:hover {
    border: 1px solid transparent;
    background-color: ${({colors:e})=>e.accent080};
    box-shadow: none;
  }

  /* -- Disabled state --------------------------------------------------- */
  label > input[type='checkbox']:checked:disabled + span {
    border: 1px solid transparent;
    opacity: 0.3;
  }

  label > input[type='checkbox']:not(:checked):disabled + span {
    border: 1px solid ${({colors:e})=>e.neutrals700};
  }

  label:has(input[type='checkbox']:disabled) {
    cursor: auto;
  }

  label > input[type='checkbox']:disabled + span {
    cursor: not-allowed;
  }
`;var b=globalThis&&globalThis.__decorate||function(e,t,c,i){var s=arguments.length,o=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,c):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,c,i);else for(var r=e.length-1;r>=0;r--)(n=e[r])&&(o=(s<3?n(o):s>3?n(t,c,o):n(t,c))||o);return s>3&&o&&Object.defineProperty(t,c,o),o};const T={lg:"md",md:"sm",sm:"sm"};let a=class extends m{constructor(){super(...arguments),this.inputElementRef=O(),this.checked=void 0,this.disabled=!1,this.size="md"}render(){const t=T[this.size];return p`
      <label data-size=${this.size}>
        <input
          ${_(this.inputElementRef)}
          ?checked=${z(this.checked)}
          ?disabled=${this.disabled}
          type="checkbox"
          @change=${this.dispatchChangeEvent}
        />
        <span>
          <wui-icon name="checkmarkBold" size=${t}></wui-icon>
        </span>
        <slot></slot>
      </label>
    `}dispatchChangeEvent(){var t;this.dispatchEvent(new CustomEvent("checkboxChange",{detail:(t=this.inputElementRef.value)==null?void 0:t.checked,bubbles:!0,composed:!0}))}};a.styles=[$,E];b([x({type:Boolean})],a.prototype,"checked",void 0);b([x({type:Boolean})],a.prototype,"disabled",void 0);b([x()],a.prototype,"size",void 0);a=b([y("wui-checkbox")],a);const P=k`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  wui-checkbox {
    padding: ${({spacing:e})=>e[3]};
  }
  a {
    text-decoration: none;
    color: ${({tokens:e})=>e.theme.textSecondary};
    font-weight: 500;
  }
`;var f=globalThis&&globalThis.__decorate||function(e,t,c,i){var s=arguments.length,o=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,c):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,c,i);else for(var r=e.length-1;r>=0;r--)(n=e[r])&&(o=(s<3?n(o):s>3?n(t,c,o):n(t,c))||o);return s>3&&o&&Object.defineProperty(t,c,o),o};let d=class extends m{constructor(){super(),this.unsubscribe=[],this.checked=u.state.isLegalCheckboxChecked,this.unsubscribe.push(u.subscribeKey("isLegalCheckboxChecked",t=>{this.checked=t}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){var s;const{termsConditionsUrl:t,privacyPolicyUrl:c}=l.state,i=(s=l.state.features)==null?void 0:s.legalCheckbox;return!t&&!c||!i?null:p`
      <wui-checkbox
        ?checked=${this.checked}
        @checkboxChange=${this.onCheckboxChange.bind(this)}
        data-testid="wui-checkbox"
      >
        <wui-text color="secondary" variant="sm-regular" align="left">
          I agree to our ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-checkbox>
    `}andTemplate(){const{termsConditionsUrl:t,privacyPolicyUrl:c}=l.state;return t&&c?"and":""}termsTemplate(){const{termsConditionsUrl:t}=l.state;return t?p`<a rel="noreferrer" target="_blank" href=${t}>terms of service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:t}=l.state;return t?p`<a rel="noreferrer" target="_blank" href=${t}>privacy policy</a>`:null}onCheckboxChange(){u.setIsLegalCheckboxChecked(!this.checked)}};d.styles=[P];f([v()],d.prototype,"checked",void 0);d=f([y("w3m-legal-checkbox")],d);export{u as O};
