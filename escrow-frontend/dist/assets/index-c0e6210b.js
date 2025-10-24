import{n as p,m as u,R as f,M as g,x as d}from"./index-d3e05a27.js";import{n as b,r as m,c as w}from"./index-cc40385c.js";import{T as l}from"./index-90d4d14b.js";const T={interpolate(r,e,t){if(r.length!==2||e.length!==2)throw new Error("inputRange and outputRange must be an array of length 2");const o=r[0]||0,n=r[1]||0,i=e[0]||0,s=e[1]||0;return t<o?i:t>n?s:(s-i)/(n-o)*(t-o)+i}},M=p`
  :host {
    width: 100%;
    display: block;
  }
`;var a=globalThis&&globalThis.__decorate||function(r,e,t,o){var n=arguments.length,i=n<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(r,e,t,o);else for(var c=r.length-1;c>=0;c--)(s=r[c])&&(i=(n<3?s(i):n>3?s(e,t,i):s(e,t))||i);return n>3&&i&&Object.defineProperty(e,t,i),i};let h=class extends u{constructor(){super(),this.unsubscribe=[],this.text="",this.open=l.state.open,this.unsubscribe.push(f.subscribeKey("view",()=>{l.hide()}),g.subscribeKey("open",e=>{e||l.hide()}),l.subscribeKey("open",e=>{this.open=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),l.hide()}render(){return d`
      <div
        @pointermove=${this.onMouseEnter.bind(this)}
        @pointerleave=${this.onMouseLeave.bind(this)}
      >
        ${this.renderChildren()}
      </div>
    `}renderChildren(){return d`<slot></slot> `}onMouseEnter(){const e=this.getBoundingClientRect();if(!this.open){const t=document.querySelector("w3m-modal"),o={width:e.width,height:e.height,left:e.left,top:e.top};if(t){const n=t.getBoundingClientRect();o.left=e.left-(window.innerWidth-n.width)/2,o.top=e.top-(window.innerHeight-n.height)/2}l.showTooltip({message:this.text,triggerRect:o,variant:"shade"})}}onMouseLeave(e){this.contains(e.relatedTarget)||l.hide()}};h.styles=[M];a([b()],h.prototype,"text",void 0);a([m()],h.prototype,"open",void 0);h=a([w("w3m-tooltip-trigger")],h);export{T as M};
