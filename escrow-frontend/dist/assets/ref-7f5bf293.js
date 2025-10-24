import{j as d}from"./index-d3e05a27.js";import{i as $,t as _,e as a}from"./index-cc40385c.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const A=t=>t.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o=(t,s)=>{var i;const e=t._$AN;if(e===void 0)return!1;for(const h of e)(i=h._$AO)==null||i.call(h,s,!1),o(h,s);return!0},c=t=>{let s,e;do{if((s=t._$AM)===void 0)break;e=s._$AN,e.delete(t),t=s}while((e==null?void 0:e.size)===0)},l=t=>{for(let s;s=t._$AM;t=s){let e=s._$AN;if(e===void 0)s._$AN=e=new Set;else if(e.has(t))break;e.add(t),v(s)}};function f(t){this._$AN!==void 0?(c(this),this._$AM=t,l(this)):this._$AM=t}function u(t,s=!1,e=0){const i=this._$AH,h=this._$AN;if(h!==void 0&&h.size!==0)if(s)if(Array.isArray(i))for(let n=e;n<i.length;n++)o(i[n],!1),c(i[n]);else i!=null&&(o(i,!1),c(i));else o(this,t)}const v=t=>{t.type==_.CHILD&&(t._$AP??(t._$AP=u),t._$AQ??(t._$AQ=f))};class p extends ${constructor(){super(...arguments),this._$AN=void 0}_$AT(s,e,i){super._$AT(s,e,i),l(this),this.isConnected=s._$AU}_$AO(s,e=!0){var i,h;s!==this.isConnected&&(this.isConnected=s,s?(i=this.reconnected)==null||i.call(this):(h=this.disconnected)==null||h.call(this)),e&&(o(this,s),c(this))}setValue(s){if(A(this._$Ct))this._$Ct._$AI(s,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=s,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=()=>new G;class G{}const r=new WeakMap,m=a(class extends p{render(t){return d}update(t,[s]){var i;const e=s!==this.G;return e&&this.G!==void 0&&this.rt(void 0),(e||this.lt!==this.ct)&&(this.G=s,this.ht=(i=t.options)==null?void 0:i.host,this.rt(this.ct=t.element)),d}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const s=this.ht??globalThis;let e=r.get(s);e===void 0&&(e=new WeakMap,r.set(s,e)),e.get(this.G)!==void 0&&this.G.call(this.ht,void 0),e.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){var t,s;return typeof this.G=="function"?(t=r.get(this.ht??globalThis))==null?void 0:t.get(this.G):(s=this.G)==null?void 0:s.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});export{N as e,m as n};
