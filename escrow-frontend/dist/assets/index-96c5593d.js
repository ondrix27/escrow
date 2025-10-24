import{ak as mt,a2 as ft,k as nt,m as st,x as w,r as Tt,C as pt,al as N,h as gt,R as St,E as It,z as At,W as Ct,O as kt}from"./index-d3e05a27.js";import{U as bt,n as O,c as ot,r as at}from"./index-cc40385c.js";import"./index-a6bbe287.js";import"./index-b60e2128.js";import{o as Rt}from"./if-defined-a5dd1e7b.js";import"./index-59ea0f96.js";import"./index-ead5ef03.js";var Dt={exports:{}};(function(t,e){(function(i,n){t.exports=n()})(mt,function(){var i=1e3,n=6e4,u=36e5,r="millisecond",c="second",d="minute",g="hour",h="day",v="week",$="month",k="quarter",D="year",T="date",L="Invalid Date",B=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,X=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,tt={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(p){var a=["th","st","nd","rd"],s=p%100;return"["+p+(a[(s-20)%10]||a[s]||a[0])+"]"}},et=function(p,a,s){var l=String(p);return!l||l.length>=a?p:""+Array(a+1-l.length).join(s)+p},E={s:et,z:function(p){var a=-p.utcOffset(),s=Math.abs(a),l=Math.floor(s/60),o=s%60;return(a<=0?"+":"-")+et(l,2,"0")+":"+et(o,2,"0")},m:function p(a,s){if(a.date()<s.date())return-p(s,a);var l=12*(s.year()-a.year())+(s.month()-a.month()),o=a.clone().add(l,$),m=s-o<0,f=a.clone().add(l+(m?-1:1),$);return+(-(l+(s-o)/(m?o-f:f-o))||0)},a:function(p){return p<0?Math.ceil(p)||0:Math.floor(p)},p:function(p){return{M:$,y:D,w:v,d:h,D:T,h:g,m:d,s:c,ms:r,Q:k}[p]||String(p||"").toLowerCase().replace(/s$/,"")},u:function(p){return p===void 0}},I="en",A={};A[I]=tt;var q="$isDayjsObject",W=function(p){return p instanceof lt||!(!p||!p[q])},ct=function p(a,s,l){var o;if(!a)return I;if(typeof a=="string"){var m=a.toLowerCase();A[m]&&(o=m),s&&(A[m]=s,o=m);var f=a.split("-");if(!o&&f.length>1)return p(f[0])}else{var x=a.name;A[x]=a,o=x}return!l&&o&&(I=o),o||!l&&I},_=function(p,a){if(W(p))return p.clone();var s=typeof a=="object"?a:{};return s.date=p,s.args=arguments,new lt(s)},y=E;y.l=ct,y.i=W,y.w=function(p,a){return _(p,{locale:a.$L,utc:a.$u,x:a.$x,$offset:a.$offset})};var lt=function(){function p(s){this.$L=ct(s.locale,null,!0),this.parse(s),this.$x=this.$x||s.x||{},this[q]=!0}var a=p.prototype;return a.parse=function(s){this.$d=function(l){var o=l.date,m=l.utc;if(o===null)return new Date(NaN);if(y.u(o))return new Date;if(o instanceof Date)return new Date(o);if(typeof o=="string"&&!/Z$/i.test(o)){var f=o.match(B);if(f){var x=f[2]-1||0,b=(f[7]||"0").substring(0,3);return m?new Date(Date.UTC(f[1],x,f[3]||1,f[4]||0,f[5]||0,f[6]||0,b)):new Date(f[1],x,f[3]||1,f[4]||0,f[5]||0,f[6]||0,b)}}return new Date(o)}(s),this.init()},a.init=function(){var s=this.$d;this.$y=s.getFullYear(),this.$M=s.getMonth(),this.$D=s.getDate(),this.$W=s.getDay(),this.$H=s.getHours(),this.$m=s.getMinutes(),this.$s=s.getSeconds(),this.$ms=s.getMilliseconds()},a.$utils=function(){return y},a.isValid=function(){return this.$d.toString()!==L},a.isSame=function(s,l){var o=_(s);return this.startOf(l)<=o&&o<=this.endOf(l)},a.isAfter=function(s,l){return _(s)<this.startOf(l)},a.isBefore=function(s,l){return this.endOf(l)<_(s)},a.$g=function(s,l,o){return y.u(s)?this[l]:this.set(o,s)},a.unix=function(){return Math.floor(this.valueOf()/1e3)},a.valueOf=function(){return this.$d.getTime()},a.startOf=function(s,l){var o=this,m=!!y.u(l)||l,f=y.p(s),x=function(P,C){var Y=y.w(o.$u?Date.UTC(o.$y,C,P):new Date(o.$y,C,P),o);return m?Y:Y.endOf(h)},b=function(P,C){return y.w(o.toDate()[P].apply(o.toDate("s"),(m?[0,0,0,0]:[23,59,59,999]).slice(C)),o)},M=this.$W,S=this.$M,R=this.$D,Z="set"+(this.$u?"UTC":"");switch(f){case D:return m?x(1,0):x(31,11);case $:return m?x(1,S):x(0,S+1);case v:var H=this.$locale().weekStart||0,it=(M<H?M+7:M)-H;return x(m?R-it:R+(6-it),S);case h:case T:return b(Z+"Hours",0);case g:return b(Z+"Minutes",1);case d:return b(Z+"Seconds",2);case c:return b(Z+"Milliseconds",3);default:return this.clone()}},a.endOf=function(s){return this.startOf(s,!1)},a.$set=function(s,l){var o,m=y.p(s),f="set"+(this.$u?"UTC":""),x=(o={},o[h]=f+"Date",o[T]=f+"Date",o[$]=f+"Month",o[D]=f+"FullYear",o[g]=f+"Hours",o[d]=f+"Minutes",o[c]=f+"Seconds",o[r]=f+"Milliseconds",o)[m],b=m===h?this.$D+(l-this.$W):l;if(m===$||m===D){var M=this.clone().set(T,1);M.$d[x](b),M.init(),this.$d=M.set(T,Math.min(this.$D,M.daysInMonth())).$d}else x&&this.$d[x](b);return this.init(),this},a.set=function(s,l){return this.clone().$set(s,l)},a.get=function(s){return this[y.p(s)]()},a.add=function(s,l){var o,m=this;s=Number(s);var f=y.p(l),x=function(S){var R=_(m);return y.w(R.date(R.date()+Math.round(S*s)),m)};if(f===$)return this.set($,this.$M+s);if(f===D)return this.set(D,this.$y+s);if(f===h)return x(1);if(f===v)return x(7);var b=(o={},o[d]=n,o[g]=u,o[c]=i,o)[f]||1,M=this.$d.getTime()+s*b;return y.w(M,this)},a.subtract=function(s,l){return this.add(-1*s,l)},a.format=function(s){var l=this,o=this.$locale();if(!this.isValid())return o.invalidDate||L;var m=s||"YYYY-MM-DDTHH:mm:ssZ",f=y.z(this),x=this.$H,b=this.$m,M=this.$M,S=o.weekdays,R=o.months,Z=o.meridiem,H=function(C,Y,rt,dt){return C&&(C[Y]||C(l,m))||rt[Y].slice(0,dt)},it=function(C){return y.s(x%12||12,C,"0")},P=Z||function(C,Y,rt){var dt=C<12?"AM":"PM";return rt?dt.toLowerCase():dt};return m.replace(X,function(C,Y){return Y||function(rt){switch(rt){case"YY":return String(l.$y).slice(-2);case"YYYY":return y.s(l.$y,4,"0");case"M":return M+1;case"MM":return y.s(M+1,2,"0");case"MMM":return H(o.monthsShort,M,R,3);case"MMMM":return H(R,M);case"D":return l.$D;case"DD":return y.s(l.$D,2,"0");case"d":return String(l.$W);case"dd":return H(o.weekdaysMin,l.$W,S,2);case"ddd":return H(o.weekdaysShort,l.$W,S,3);case"dddd":return S[l.$W];case"H":return String(x);case"HH":return y.s(x,2,"0");case"h":return it(1);case"hh":return it(2);case"a":return P(x,b,!0);case"A":return P(x,b,!1);case"m":return String(b);case"mm":return y.s(b,2,"0");case"s":return String(l.$s);case"ss":return y.s(l.$s,2,"0");case"SSS":return y.s(l.$ms,3,"0");case"Z":return f}return null}(C)||f.replace(":","")})},a.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},a.diff=function(s,l,o){var m,f=this,x=y.p(l),b=_(s),M=(b.utcOffset()-this.utcOffset())*n,S=this-b,R=function(){return y.m(f,b)};switch(x){case D:m=R()/12;break;case $:m=R();break;case k:m=R()/3;break;case v:m=(S-M)/6048e5;break;case h:m=(S-M)/864e5;break;case g:m=S/u;break;case d:m=S/n;break;case c:m=S/i;break;default:m=S}return o?m:y.a(m)},a.daysInMonth=function(){return this.endOf($).$D},a.$locale=function(){return A[this.$L]},a.locale=function(s,l){if(!s)return this.$L;var o=this.clone(),m=ct(s,l,!0);return m&&(o.$L=m),o},a.clone=function(){return y.w(this.$d,this)},a.toDate=function(){return new Date(this.valueOf())},a.toJSON=function(){return this.isValid()?this.toISOString():null},a.toISOString=function(){return this.$d.toISOString()},a.toString=function(){return this.$d.toUTCString()},p}(),vt=lt.prototype;return _.prototype=vt,[["$ms",r],["$s",c],["$m",d],["$H",g],["$W",h],["$M",$],["$y",D],["$D",T]].forEach(function(p){vt[p[1]]=function(a){return this.$g(a,p[0],p[1])}}),_.extend=function(p,a){return p.$i||(p(a,lt,_),p.$i=!0),_},_.locale=ct,_.isDayjs=W,_.unix=function(p){return _(1e3*p)},_.en=A[I],_.Ls=A,_.p={},_})})(Dt);var Nt=Dt.exports;const Q=ft(Nt);var _t={exports:{}};(function(t,e){(function(i,n){t.exports=n()})(mt,function(){return{name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(i){var n=["th","st","nd","rd"],u=i%100;return"["+i+(n[(u-20)%10]||n[u]||n[0])+"]"}}})})(_t);var jt=_t.exports;const Lt=ft(jt);var Mt={exports:{}};(function(t,e){(function(i,n){t.exports=n()})(mt,function(){return function(i,n,u){i=i||{};var r=n.prototype,c={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function d(h,v,$,k){return r.fromToBase(h,v,$,k)}u.en.relativeTime=c,r.fromToBase=function(h,v,$,k,D){for(var T,L,B,X=$.$locale().relativeTime||c,tt=i.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],et=tt.length,E=0;E<et;E+=1){var I=tt[E];I.d&&(T=k?u(h).diff($,I.d,!0):$.diff(h,I.d,!0));var A=(i.rounding||Math.round)(Math.abs(T));if(B=T>0,A<=I.r||!I.r){A<=1&&E>0&&(I=tt[E-1]);var q=X[I.l];D&&(A=D(""+A)),L=typeof q=="string"?q.replace("%d",A):q(A,v,I.l,B);break}}if(v)return L;var W=B?X.future:X.past;return typeof W=="function"?W(L):W.replace("%s",L)},r.to=function(h,v){return d(h,v,this,!0)},r.from=function(h,v){return d(h,v,this)};var g=function(h){return h.$u?u.utc():u()};r.toNow=function(h){return this.to(g(this),h)},r.fromNow=function(h){return this.from(g(this),h)}}})})(Mt);var zt=Mt.exports;const Ft=ft(zt);var Ot={exports:{}};(function(t,e){(function(i,n){t.exports=n()})(mt,function(){return function(i,n,u){u.updateLocale=function(r,c){var d=u.Ls[r];if(d)return(c?Object.keys(c):[]).forEach(function(g){d[g]=c[g]}),d}}})})(Ot);var Yt=Ot.exports;const Ut=ft(Yt);Q.extend(Ft);Q.extend(Ut);const Bt={...Lt,name:"en-web3-modal",relativeTime:{future:"in %s",past:"%s ago",s:"%d sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}},Et=["January","February","March","April","May","June","July","August","September","October","November","December"];Q.locale("en-web3-modal",Bt);const yt={getMonthNameByIndex(t){return Et[t]},getYear(t=new Date().toISOString()){return Q(t).year()},getRelativeDateFromNow(t){return Q(t).locale("en-web3-modal").fromNow(!0)},formatDate(t,e="DD MMM"){return Q(t).format(e)}},Wt=3,Ht=["receive","deposit","borrow","claim"],Pt=["withdraw","repay","burn"],K={getTransactionGroupTitle(t,e){const i=yt.getYear(),n=yt.getMonthNameByIndex(e);return t===i?n:`${n} ${t}`},getTransactionImages(t){const[e,i]=t,n=!!e&&(t==null?void 0:t.every(c=>!!c.nft_info)),u=(t==null?void 0:t.length)>1;return(t==null?void 0:t.length)===2&&!n?[this.getTransactionImage(i),this.getTransactionImage(e)]:u?t.map(c=>this.getTransactionImage(c)):[this.getTransactionImage(e)]},getTransactionImage(t){return{type:K.getTransactionTransferTokenType(t),url:K.getTransactionImageURL(t)}},getTransactionImageURL(t){var u,r,c,d,g;let e;const i=!!(t!=null&&t.nft_info),n=!!(t!=null&&t.fungible_info);return t&&i?e=(c=(r=(u=t==null?void 0:t.nft_info)==null?void 0:u.content)==null?void 0:r.preview)==null?void 0:c.url:t&&n&&(e=(g=(d=t==null?void 0:t.fungible_info)==null?void 0:d.icon)==null?void 0:g.url),e},getTransactionTransferTokenType(t){if(t!=null&&t.fungible_info)return"FUNGIBLE";if(t!=null&&t.nft_info)return"NFT"},getTransactionDescriptions(t){var $,k,D;const e=($=t==null?void 0:t.metadata)==null?void 0:$.operationType,i=t==null?void 0:t.transfers,n=((k=t==null?void 0:t.transfers)==null?void 0:k.length)>0,u=((D=t==null?void 0:t.transfers)==null?void 0:D.length)>1,r=n&&(i==null?void 0:i.every(T=>!!(T!=null&&T.fungible_info))),[c,d]=i;let g=this.getTransferDescription(c),h=this.getTransferDescription(d);if(!n)return(e==="send"||e==="receive")&&r?(g=bt.getTruncateString({string:t==null?void 0:t.metadata.sentFrom,charsStart:4,charsEnd:6,truncate:"middle"}),h=bt.getTruncateString({string:t==null?void 0:t.metadata.sentTo,charsStart:4,charsEnd:6,truncate:"middle"}),[g,h]):[t.metadata.status];if(u)return i.map(T=>this.getTransferDescription(T)).reverse();let v="";return Ht.includes(e)?v="+":Pt.includes(e)&&(v="-"),g=v.concat(g),[g]},getTransferDescription(t){var i;let e="";return t&&(t!=null&&t.nft_info?e=((i=t==null?void 0:t.nft_info)==null?void 0:i.name)||"-":t!=null&&t.fungible_info&&(e=this.getFungibleTransferDescription(t)||"-")),e},getFungibleTransferDescription(t){var n;return t?[this.getQuantityFixedValue(t==null?void 0:t.quantity.numeric),(n=t==null?void 0:t.fungible_info)==null?void 0:n.symbol].join(" ").trim():null},getQuantityFixedValue(t){return t?parseFloat(t).toFixed(Wt):null}};var xt;(function(t){t.approve="approved",t.bought="bought",t.borrow="borrowed",t.burn="burnt",t.cancel="canceled",t.claim="claimed",t.deploy="deployed",t.deposit="deposited",t.execute="executed",t.mint="minted",t.receive="received",t.repay="repaid",t.send="sent",t.sell="sold",t.stake="staked",t.trade="swapped",t.unstake="unstaked",t.withdraw="withdrawn"})(xt||(xt={}));const Vt=nt`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px ${({tokens:t})=>t.core.glass010};
    background-color: ${({tokens:t})=>t.core.glass010};
  }

  :host([data-no-images='true']) > wui-flex {
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    border-radius: ${({borderRadius:t})=>t[3]} !important;
  }

  :host > wui-flex wui-image {
    display: block;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }

  wui-flex.status-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
    border-radius: ${({borderRadius:t})=>t[4]};
    background-color: ${({tokens:t})=>t.theme.backgroundPrimary};
    box-shadow: 0 0 0 2px ${({tokens:t})=>t.theme.backgroundPrimary};
    overflow: hidden;
    width: 16px;
    height: 16px;
  }
`;var J=globalThis&&globalThis.__decorate||function(t,e,i,n){var u=arguments.length,r=u<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,i,n);else for(var d=t.length-1;d>=0;d--)(c=t[d])&&(r=(u<3?c(r):u>3?c(e,i,r):c(e,i))||r);return u>3&&r&&Object.defineProperty(e,i,r),r};let z=class extends st{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){const[e,i]=this.images;this.images.length||(this.dataset.noImages="true");const n=(e==null?void 0:e.type)==="NFT",u=i!=null&&i.url?i.type==="NFT":n,r=n?"var(--apkt-borderRadius-3)":"var(--apkt-borderRadius-5)",c=u?"var(--apkt-borderRadius-3)":"var(--apkt-borderRadius-5)";return this.style.cssText=`
    --local-left-border-radius: ${r};
    --local-right-border-radius: ${c};
    `,w`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){const[e,i]=this.images,n=e==null?void 0:e.type;return this.images.length===2&&(e!=null&&e.url||i!=null&&i.url)?w`<div class="swap-images-container">
        ${e!=null&&e.url?w`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:null}
        ${i!=null&&i.url?w`<wui-image src=${i.url} alt="Transaction image"></wui-image>`:null}
      </div>`:e!=null&&e.url?w`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:n==="NFT"?w`<wui-icon size="inherit" color="default" name="nftPlaceholder"></wui-icon>`:w`<wui-icon size="inherit" color="default" name="coinPlaceholder"></wui-icon>`}templateIcon(){let e="accent-primary",i;return i=this.getIcon(),this.status&&(e=this.getStatusColor()),i?w`
      <wui-flex alignItems="center" justifyContent="center" class="status-box">
        <wui-icon-box size="sm" color=${e} icon=${i}></wui-icon-box>
      </wui-flex>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():this.type==="trade"?"swapHorizontal":this.type==="approve"?"checkmark":this.type==="cancel"?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success";case"failed":return"error";case"pending":return"inverse";default:return"accent-primary"}}};z.styles=[Vt];J([O()],z.prototype,"type",void 0);J([O()],z.prototype,"status",void 0);J([O()],z.prototype,"direction",void 0);J([O({type:Boolean})],z.prototype,"onlyDirectionIcon",void 0);J([O({type:Array})],z.prototype,"images",void 0);J([O({type:Object})],z.prototype,"secondImage",void 0);z=J([ot("wui-transaction-visual")],z);const Jt=nt`
  :host {
    width: 100%;
  }

  :host > wui-flex:first-child {
    align-items: center;
    column-gap: ${({spacing:t})=>t[2]};
    padding: ${({spacing:t})=>t[1]} ${({spacing:t})=>t[2]};
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var U=globalThis&&globalThis.__decorate||function(t,e,i,n){var u=arguments.length,r=u<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,i,n);else for(var d=t.length-1;d>=0;d--)(c=t[d])&&(r=(u<3?c(r):u>3?c(e,i,r):c(e,i))||r);return u>3&&r&&Object.defineProperty(e,i,r),r};let j=class extends st{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[]}render(){return w`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${Rt(this.direction)}
          type=${this.type}
          .onlyDirectionIcon=${this.onlyDirectionIcon}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="1">
          <wui-text variant="lg-medium" color="primary">
            ${xt[this.type]||this.type}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="sm-medium" color="secondary"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){var i;const e=(i=this.descriptions)==null?void 0:i[0];return e?w`
          <wui-text variant="md-regular" color="secondary">
            <span>${e}</span>
          </wui-text>
        `:null}templateSecondDescription(){var i;const e=(i=this.descriptions)==null?void 0:i[1];return e?w`
          <wui-icon class="description-separator-icon" size="sm" name="arrowRight"></wui-icon>
          <wui-text variant="md-regular" color="secondary">
            <span>${e}</span>
          </wui-text>
        `:null}};j.styles=[Tt,Jt];U([O()],j.prototype,"type",void 0);U([O({type:Array})],j.prototype,"descriptions",void 0);U([O()],j.prototype,"date",void 0);U([O({type:Boolean})],j.prototype,"onlyDirectionIcon",void 0);U([O()],j.prototype,"status",void 0);U([O()],j.prototype,"direction",void 0);U([O({type:Array})],j.prototype,"images",void 0);j=U([ot("wui-transaction-list-item")],j);const Gt=nt`
  wui-flex {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  wui-image {
    border-radius: ${({borderRadius:t})=>t[128]};
  }

  .fallback-icon {
    color: ${({tokens:t})=>t.theme.iconInverse};
    border-radius: ${({borderRadius:t})=>t[3]};
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
  }

  .direction-icon,
  .status-image {
    position: absolute;
    right: 0;
    bottom: 0;
    border-radius: ${({borderRadius:t})=>t[128]};
    border: 2px solid ${({tokens:t})=>t.theme.backgroundPrimary};
  }

  .direction-icon {
    padding: ${({spacing:t})=>t["01"]};
    color: ${({tokens:t})=>t.core.iconSuccess};

    background-color: color-mix(
      in srgb,
      ${({tokens:t})=>t.core.textSuccess} 30%,
      ${({tokens:t})=>t.theme.backgroundPrimary} 70%
    );
  }

  /* -- Sizes --------------------------------------------------- */
  :host([data-size='sm']) > wui-image:not(.status-image),
  :host([data-size='sm']) > wui-flex {
    width: 24px;
    height: 24px;
  }

  :host([data-size='lg']) > wui-image:not(.status-image),
  :host([data-size='lg']) > wui-flex {
    width: 40px;
    height: 40px;
  }

  :host([data-size='sm']) .fallback-icon {
    height: 16px;
    width: 16px;
    padding: ${({spacing:t})=>t[1]};
  }

  :host([data-size='lg']) .fallback-icon {
    height: 32px;
    width: 32px;
    padding: ${({spacing:t})=>t[1]};
  }

  :host([data-size='sm']) .direction-icon,
  :host([data-size='sm']) .status-image {
    transform: translate(40%, 30%);
  }

  :host([data-size='lg']) .direction-icon,
  :host([data-size='lg']) .status-image {
    transform: translate(40%, 10%);
  }

  :host([data-size='sm']) .status-image {
    height: 14px;
    width: 14px;
  }

  :host([data-size='lg']) .status-image {
    height: 20px;
    width: 20px;
  }

  /* -- Crop effects --------------------------------------------------- */
  .swap-crop-left-image,
  .swap-crop-right-image {
    position: absolute;
    top: 0;
    bottom: 0;
  }

  .swap-crop-left-image {
    left: 0;
    clip-path: inset(0px calc(50% + 1.5px) 0px 0%);
  }

  .swap-crop-right-image {
    right: 0;
    clip-path: inset(0px 0px 0px calc(50% + 1.5px));
  }
`;var ut=globalThis&&globalThis.__decorate||function(t,e,i,n){var u=arguments.length,r=u<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,i,n);else for(var d=t.length-1;d>=0;d--)(c=t[d])&&(r=(u<3?c(r):u>3?c(e,i,r):c(e,i))||r);return u>3&&r&&Object.defineProperty(e,i,r),r};const wt={sm:"xxs",lg:"md"};let V=class extends st{constructor(){super(...arguments),this.type="approve",this.size="lg",this.statusImageUrl="",this.images=[]}render(){return w`<wui-flex>${this.templateVisual()} ${this.templateIcon()}</wui-flex>`}templateVisual(){switch(this.dataset.size=this.size,this.type){case"trade":return this.swapTemplate();case"fiat":return this.fiatTemplate();case"unknown":return this.unknownTemplate();default:return this.tokenTemplate()}}swapTemplate(){const[e,i]=this.images;return this.images.length===2&&(e||i)?w`
        <wui-image class="swap-crop-left-image" src=${e} alt="Swap image"></wui-image>
        <wui-image class="swap-crop-right-image" src=${i} alt="Swap image"></wui-image>
      `:e?w`<wui-image src=${e} alt="Swap image"></wui-image>`:null}fiatTemplate(){return w`<wui-icon
      class="fallback-icon"
      size=${wt[this.size]}
      name="dollar"
    ></wui-icon>`}unknownTemplate(){return w`<wui-icon
      class="fallback-icon"
      size=${wt[this.size]}
      name="questionMark"
    ></wui-icon>`}tokenTemplate(){const[e]=this.images;return e?w`<wui-image src=${e} alt="Token image"></wui-image> `:w`<wui-icon
      class="fallback-icon"
      name=${this.type==="nft"?"image":"coinPlaceholder"}
    ></wui-icon>`}templateIcon(){return this.statusImageUrl?w`<wui-image
        class="status-image"
        src=${this.statusImageUrl}
        alt="Status image"
      ></wui-image>`:w`<wui-icon
      class="direction-icon"
      size=${wt[this.size]}
      name=${this.getTemplateIcon()}
    ></wui-icon>`}getTemplateIcon(){return this.type==="trade"?"arrowClockWise":"arrowBottom"}};V.styles=[Gt];ut([O()],V.prototype,"type",void 0);ut([O()],V.prototype,"size",void 0);ut([O()],V.prototype,"statusImageUrl",void 0);ut([O({type:Array})],V.prototype,"images",void 0);V=ut([ot("wui-transaction-thumbnail")],V);const qt=nt`
  :host > wui-flex:first-child {
    gap: ${({spacing:t})=>t[2]};
    padding: ${({spacing:t})=>t[3]};
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;var Zt=globalThis&&globalThis.__decorate||function(t,e,i,n){var u=arguments.length,r=u<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,i,n);else for(var d=t.length-1;d>=0;d--)(c=t[d])&&(r=(u<3?c(r):u>3?c(e,i,r):c(e,i))||r);return u>3&&r&&Object.defineProperty(e,i,r),r};let $t=class extends st{render(){return w`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px" rounded></wui-shimmer>
        <wui-flex flexDirection="column" gap="1">
          <wui-shimmer width="124px" height="16px" rounded></wui-shimmer>
          <wui-shimmer width="60px" height="14px" rounded></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" rounded></wui-shimmer>
      </wui-flex>
    `}};$t.styles=[Tt,qt];$t=Zt([ot("wui-transaction-list-item-loader")],$t);const Kt=nt`
  :host {
    min-height: 100%;
  }

  .group-container[last-group='true'] {
    padding-bottom: ${({spacing:t})=>t[3]};
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:t})=>t[3]};
  }

  .contentContainer > .textContent {
    width: 65%;
  }

  .emptyContainer {
    height: 100%;
  }
`;var G=globalThis&&globalThis.__decorate||function(t,e,i,n){var u=arguments.length,r=u<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,i,n);else for(var d=t.length-1;d>=0;d--)(c=t[d])&&(r=(u<3?c(r):u>3?c(e,i,r):c(e,i))||r);return u>3&&r&&Object.defineProperty(e,i,r),r};const ht="last-transaction",Qt=7;let F=class extends st{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.page="activity",this.caipAddress=pt.state.activeCaipAddress,this.transactionsByYear=N.state.transactionsByYear,this.loading=N.state.loading,this.empty=N.state.empty,this.next=N.state.next,N.clearCursor(),this.unsubscribe.push(pt.subscribeKey("activeCaipAddress",e=>{e&&this.caipAddress!==e&&(N.resetTransactions(),N.fetchTransactions(e)),this.caipAddress=e}),pt.subscribeKey("activeCaipNetwork",()=>{this.updateTransactionView()}),N.subscribe(e=>{this.transactionsByYear=e.transactionsByYear,this.loading=e.loading,this.empty=e.empty,this.next=e.next}))}firstUpdated(){this.updateTransactionView(),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return w` ${this.empty?null:this.templateTransactionsByYear()}
    ${this.loading?this.templateLoading():null}
    ${!this.loading&&this.empty?this.templateEmpty():null}`}updateTransactionView(){N.resetTransactions(),this.caipAddress&&N.fetchTransactions(gt.getPlainAddress(this.caipAddress))}templateTransactionsByYear(){return Object.keys(this.transactionsByYear).sort().reverse().map(i=>{const n=parseInt(i,10),u=new Array(12).fill(null).map((r,c)=>{var h;const d=K.getTransactionGroupTitle(n,c),g=(h=this.transactionsByYear[n])==null?void 0:h[c];return{groupTitle:d,transactions:g}}).filter(({transactions:r})=>r).reverse();return u.map(({groupTitle:r,transactions:c},d)=>{const g=d===u.length-1;return c?w`
          <wui-flex
            flexDirection="column"
            class="group-container"
            last-group="${g?"true":"false"}"
            data-testid="month-indexes"
          >
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["2","3","3","3"]}
            >
              <wui-text variant="md-medium" color="secondary" data-testid="group-title">
                ${r}
              </wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="2">
              ${this.templateTransactions(c,g)}
            </wui-flex>
          </wui-flex>
        `:null})})}templateRenderTransaction(e,i){const{date:n,descriptions:u,direction:r,isAllNFT:c,images:d,status:g,transfers:h,type:v}=this.getTransactionListItemProps(e),$=(h==null?void 0:h.length)>1;return(h==null?void 0:h.length)===2&&!c?w`
        <wui-transaction-list-item
          date=${n}
          .direction=${r}
          id=${i&&this.next?ht:""}
          status=${g}
          type=${v}
          .images=${d}
          .descriptions=${u}
        ></wui-transaction-list-item>
      `:$?h.map((D,T)=>{const L=K.getTransferDescription(D),B=i&&T===h.length-1;return w` <wui-transaction-list-item
          date=${n}
          direction=${D.direction}
          id=${B&&this.next?ht:""}
          status=${g}
          type=${v}
          .onlyDirectionIcon=${!0}
          .images=${[d[T]]}
          .descriptions=${[L]}
        ></wui-transaction-list-item>`}):w`
      <wui-transaction-list-item
        date=${n}
        .direction=${r}
        id=${i&&this.next?ht:""}
        status=${g}
        type=${v}
        .images=${d}
        .descriptions=${u}
      ></wui-transaction-list-item>
    `}templateTransactions(e,i){return e.map((n,u)=>{const r=i&&u===e.length-1;return w`${this.templateRenderTransaction(n,r)}`})}emptyStateActivity(){return w`<wui-flex
      class="emptyContainer"
      flexGrow="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      .padding=${["10","5","10","5"]}
      gap="5"
      data-testid="empty-activity-state"
    >
      <wui-icon-box color="default" icon="wallet" size="xl"></wui-icon-box>
      <wui-flex flexDirection="column" alignItems="center" gap="2">
        <wui-text align="center" variant="lg-medium" color="primary">No Transactions yet</wui-text>
        <wui-text align="center" variant="lg-regular" color="secondary"
          >Start trading on dApps <br />
          to grow your wallet!</wui-text
        >
      </wui-flex>
    </wui-flex>`}emptyStateAccount(){return w`<wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="4"
      data-testid="empty-account-state"
    >
      <wui-icon-box icon="swapHorizontal" size="lg" color="default"></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="2"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="md-regular" align="center" color="primary">No activity yet</wui-text>
        <wui-text variant="sm-regular" align="center" color="secondary"
          >Your next transactions will appear here</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Trade</wui-link>
    </wui-flex>`}templateEmpty(){return this.page==="account"?w`${this.emptyStateAccount()}`:w`${this.emptyStateActivity()}`}templateLoading(){return this.page==="activity"?Array(Qt).fill(w` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(e=>e):null}onReceiveClick(){St.push("WalletReceive")}createPaginationObserver(){const{projectId:e}=kt.state;this.paginationObserver=new IntersectionObserver(([i])=>{i!=null&&i.isIntersecting&&!this.loading&&(N.fetchTransactions(gt.getPlainAddress(this.caipAddress)),It.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:gt.getPlainAddress(this.caipAddress),projectId:e,cursor:this.next,isSmartAccount:At(pt.state.activeChain)===Ct.ACCOUNT_TYPES.SMART_ACCOUNT}}))},{}),this.setPaginationObserver()}setPaginationObserver(){var i,n,u;(i=this.paginationObserver)==null||i.disconnect();const e=(n=this.shadowRoot)==null?void 0:n.querySelector(`#${ht}`);e&&((u=this.paginationObserver)==null||u.observe(e))}getTransactionListItemProps(e){var g,h,v,$,k;const i=yt.formatDate((g=e==null?void 0:e.metadata)==null?void 0:g.minedAt),n=K.getTransactionDescriptions(e),u=e==null?void 0:e.transfers,r=(h=e==null?void 0:e.transfers)==null?void 0:h[0],c=!!r&&((v=e==null?void 0:e.transfers)==null?void 0:v.every(D=>!!D.nft_info)),d=K.getTransactionImages(u);return{date:i,direction:r==null?void 0:r.direction,descriptions:n,isAllNFT:c,images:d,status:($=e.metadata)==null?void 0:$.status,transfers:u,type:(k=e.metadata)==null?void 0:k.operationType}}};F.styles=Kt;G([O()],F.prototype,"page",void 0);G([at()],F.prototype,"caipAddress",void 0);G([at()],F.prototype,"transactionsByYear",void 0);G([at()],F.prototype,"loading",void 0);G([at()],F.prototype,"empty",void 0);G([at()],F.prototype,"next",void 0);F=G([ot("w3m-activity-list")],F);
