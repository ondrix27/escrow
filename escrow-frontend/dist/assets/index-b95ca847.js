import{k as l,r as c,m as u,x as f}from"./index-d3e05a27.js";import{n as p,c as m}from"./index-cc40385c.js";const g=l`
  :host {
    display: block;
    width: 100px;
    height: 100px;
  }

  svg {
    width: 100px;
    height: 100px;
  }

  rect {
    fill: none;
    stroke: ${r=>r.colors.accent100};
    stroke-width: 3px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var h=globalThis&&globalThis.__decorate||function(r,e,a,s){var o=arguments.length,t=o<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,a):s,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,a,s);else for(var d=r.length-1;d>=0;d--)(i=r[d])&&(t=(o<3?i(t):o>3?i(e,a,t):i(e,a))||t);return o>3&&t&&Object.defineProperty(e,a,t),t};let n=class extends u{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const e=this.radius>50?50:this.radius,s=36-e,o=116+s,t=245+s,i=360+s*1.75;return f`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${o} ${t}"
          stroke-dashoffset=${i}
        />
      </svg>
    `}};n.styles=[c,g];h([p({type:Number})],n.prototype,"radius",void 0);n=h([m("wui-loading-thumbnail")],n);
