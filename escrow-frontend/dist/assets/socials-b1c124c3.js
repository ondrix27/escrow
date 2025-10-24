import{k as T,m as _,o as S,O as u,R as w,c as A,x as l,h as $,a0 as F,v as D,A as d,y as E,C as x,K as N,E as p,P as W,S as b,M as I,T as P,a1 as j}from"./index-d3e05a27.js";import{n as M,r as c,c as O}from"./index-cc40385c.js";import{o as y}from"./if-defined-a5dd1e7b.js";import{O as k}from"./index-a8783436.js";import{e as z}from"./index-c4bc28e4.js";import"./index-a6bbe287.js";import"./index-b95ca847.js";import"./index-900bd2c1.js";import"./index-570590e7.js";import"./index-ead5ef03.js";import"./ref-7f5bf293.js";import"./index-3b96a61f.js";import"./index-59ea0f96.js";const q=T`
  :host {
    margin-top: ${({spacing:t})=>t[1]};
  }
  wui-separator {
    margin: ${({spacing:t})=>t[3]} calc(${({spacing:t})=>t[3]} * -1)
      ${({spacing:t})=>t[2]} calc(${({spacing:t})=>t[3]} * -1);
    width: calc(100% + ${({spacing:t})=>t[3]} * 2);
  }
`;var v=globalThis&&globalThis.__decorate||function(t,e,i,r){var s=arguments.length,o=s<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,i):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(s<3?n(o):s>3?n(e,i,o):n(e,i))||o);return s>3&&o&&Object.defineProperty(e,i,o),o};let m=class extends _{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=S.state.connectors,this.authConnector=this.connectors.find(e=>e.type==="AUTH"),this.remoteFeatures=u.state.remoteFeatures,this.isPwaLoading=!1,this.unsubscribe.push(S.subscribeKey("connectors",e=>{this.connectors=e,this.authConnector=this.connectors.find(i=>i.type==="AUTH")}),u.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}connectedCallback(){super.connectedCallback(),this.handlePwaFrameLoad()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var o;let e=((o=this.remoteFeatures)==null?void 0:o.socials)||[];const i=!!this.authConnector,r=e==null?void 0:e.length,s=w.state.view==="ConnectSocials";return(!i||!r)&&!s?null:(s&&!r&&(e=A.DEFAULT_SOCIALS),l` <wui-flex flexDirection="column" gap="2">
      ${e.map(n=>l`<wui-list-social
            @click=${()=>{this.onSocialClick(n)}}
            data-testid=${`social-selector-${n}`}
            name=${n}
            logo=${n}
            ?disabled=${this.isPwaLoading}
          ></wui-list-social>`)}
    </wui-flex>`)}async onSocialClick(e){e&&await z(e)}async handlePwaFrameLoad(){var e;if($.isPWA()){this.isPwaLoading=!0;try{((e=this.authConnector)==null?void 0:e.provider)instanceof F&&await this.authConnector.provider.init()}catch(i){D.open({displayMessage:"Error loading embedded wallet in PWA",debugMessage:i.message},"error")}finally{this.isPwaLoading=!1}}}};m.styles=q;v([M()],m.prototype,"tabIdx",void 0);v([c()],m.prototype,"connectors",void 0);v([c()],m.prototype,"authConnector",void 0);v([c()],m.prototype,"remoteFeatures",void 0);v([c()],m.prototype,"isPwaLoading",void 0);m=v([O("w3m-social-login-list")],m);const B=T`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    transition: opacity ${({durations:t})=>t.md}
      ${({easings:t})=>t["ease-out-power-1"]};
    will-change: opacity;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }

  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var U=globalThis&&globalThis.__decorate||function(t,e,i,r){var s=arguments.length,o=s<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,i):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(s<3?n(o):s>3?n(e,i,o):n(e,i))||o);return s>3&&o&&Object.defineProperty(e,i,o),o};let L=class extends _{constructor(){super(),this.unsubscribe=[],this.checked=k.state.isLegalCheckboxChecked,this.unsubscribe.push(k.subscribeKey("isLegalCheckboxChecked",e=>{this.checked=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var R;const{termsConditionsUrl:e,privacyPolicyUrl:i}=u.state,r=(R=u.state.features)==null?void 0:R.legalCheckbox,n=!!(e||i)&&!!r&&!this.checked,a=n?-1:void 0;return l`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${["0","3","3","3"]}
        gap="01"
        class=${y(n?"disabled":void 0)}
      >
        <w3m-social-login-list tabIdx=${y(a)}></w3m-social-login-list>
      </wui-flex>
    `}};L.styles=B;U([c()],L.prototype,"checked",void 0);L=U([O("w3m-connect-socials-view")],L);const V=T`
  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: ${({borderRadius:t})=>t[8]};
  }
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }
  wui-flex:first-child:not(:only-child) {
    position: relative;
  }
  wui-loading-thumbnail {
    position: absolute;
  }
  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:t})=>t[1]} * -1);
    bottom: calc(${({spacing:t})=>t[1]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all ${({easings:t})=>t["ease-out-power-2"]}
      ${({durations:t})=>t.lg};
  }
  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({spacing:t})=>t[4]};
  }
  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }
  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({easings:t})=>t["ease-out-power-2"]} both;
  }
  .capitalize {
    text-transform: capitalize;
  }
`;var g=globalThis&&globalThis.__decorate||function(t,e,i,r){var s=arguments.length,o=s<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,i):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(s<3?n(o):s>3?n(e,i,o):n(e,i))||o);return s>3&&o&&Object.defineProperty(e,i,o),o};let h=class extends _{constructor(){super(),this.unsubscribe=[],this.socialProvider=d.state.socialProvider,this.socialWindow=d.state.socialWindow,this.error=!1,this.connecting=!1,this.message="Connect in the provider window",this.remoteFeatures=u.state.remoteFeatures,this.address=d.state.address,this.connectionsByNamespace=E.getConnections(x.state.activeChain),this.hasMultipleConnections=this.connectionsByNamespace.length>0,this.authConnector=S.getAuthConnector(),this.handleSocialConnection=async i=>{var r;if((r=i.data)!=null&&r.resultUri)if(i.origin===N.SECURE_SITE_ORIGIN){window.removeEventListener("message",this.handleSocialConnection,!1);try{if(this.authConnector&&!this.connecting){this.socialWindow&&(this.socialWindow.close(),d.setSocialWindow(void 0,x.state.activeChain)),this.connecting=!0,this.updateMessage();const s=i.data.resultUri;this.socialProvider&&p.sendEvent({type:"track",event:"SOCIAL_LOGIN_REQUEST_USER_DATA",properties:{provider:this.socialProvider}}),await E.connectExternal({id:this.authConnector.id,type:this.authConnector.type,socialUri:s},this.authConnector.chain),this.socialProvider&&(W.setConnectedSocialProvider(this.socialProvider),p.sendEvent({type:"track",event:"SOCIAL_LOGIN_SUCCESS",properties:{provider:this.socialProvider}}))}}catch{this.error=!0,this.updateMessage(),this.socialProvider&&p.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider}})}}else w.goBack(),b.showError("Untrusted Origin"),this.socialProvider&&p.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider}})},j.EmbeddedWalletAbortController.signal.addEventListener("abort",()=>{this.socialWindow&&(this.socialWindow.close(),d.setSocialWindow(void 0,x.state.activeChain))}),this.unsubscribe.push(d.subscribe(i=>{i.socialProvider&&(this.socialProvider=i.socialProvider),i.socialWindow&&(this.socialWindow=i.socialWindow)}),u.subscribeKey("remoteFeatures",i=>{this.remoteFeatures=i}),d.subscribeKey("address",i=>{var s;const r=(s=this.remoteFeatures)==null?void 0:s.multiWallet;i&&i!==this.address&&(this.hasMultipleConnections&&r?(w.replace("ProfileWallets"),b.showSuccess("New Wallet Added")):(I.state.open||u.state.enableEmbedded)&&I.close())})),this.authConnector&&this.connectSocial()}disconnectedCallback(){var e;this.unsubscribe.forEach(i=>i()),window.removeEventListener("message",this.handleSocialConnection,!1),(e=this.socialWindow)==null||e.close(),d.setSocialWindow(void 0,x.state.activeChain)}render(){return l`
      <wui-flex
        data-error=${y(this.error)}
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="6"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo=${y(this.socialProvider)}></wui-logo>
          ${this.error?null:this.loaderTemplate()}
          <wui-icon-box color="error" icon="close" size="sm"></wui-icon-box>
        </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="2">
          <wui-text align="center" variant="lg-medium" color="primary"
            >Log in with
            <span class="capitalize">${this.socialProvider??"Social"}</span></wui-text
          >
          <wui-text align="center" variant="lg-regular" color=${this.error?"error":"secondary"}
            >${this.message}</wui-text
          ></wui-flex
        >
      </wui-flex>
    `}loaderTemplate(){const e=P.state.themeVariables["--w3m-border-radius-master"],i=e?parseInt(e.replace("px",""),10):4;return l`<wui-loading-thumbnail radius=${i*9}></wui-loading-thumbnail>`}connectSocial(){const e=setInterval(()=>{var i;(i=this.socialWindow)!=null&&i.closed&&(!this.connecting&&w.state.view==="ConnectingSocial"&&(this.socialProvider&&p.sendEvent({type:"track",event:"SOCIAL_LOGIN_CANCELED",properties:{provider:this.socialProvider}}),w.goBack()),clearInterval(e))},1e3);window.addEventListener("message",this.handleSocialConnection,!1)}updateMessage(){this.error?this.message="Something went wrong":this.connecting?this.message="Retrieving user data":this.message="Connect in the provider window"}};h.styles=V;g([c()],h.prototype,"socialProvider",void 0);g([c()],h.prototype,"socialWindow",void 0);g([c()],h.prototype,"error",void 0);g([c()],h.prototype,"connecting",void 0);g([c()],h.prototype,"message",void 0);g([c()],h.prototype,"remoteFeatures",void 0);h=g([O("w3m-connecting-social-view")],h);const G=T`
  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: ${({borderRadius:t})=>t[4]};
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: ${({durations:t})=>t.xl};
    animation-timing-function: ${({easings:t})=>t["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: ${({borderRadius:t})=>t[8]};
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:t})=>t[1]} * -1);
    bottom: calc(${({spacing:t})=>t[1]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity ${({durations:t})=>t.lg} ${({easings:t})=>t["ease-out-power-2"]},
      transform ${({durations:t})=>t.lg}
        ${({easings:t})=>t["ease-out-power-2"]};
    will-change: opacity, transform;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;var C=globalThis&&globalThis.__decorate||function(t,e,i,r){var s=arguments.length,o=s<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,i):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(s<3?n(o):s>3?n(e,i,o):n(e,i))||o);return s>3&&o&&Object.defineProperty(e,i,o),o};let f=class extends _{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.socialProvider=d.state.socialProvider,this.uri=d.state.farcasterUrl,this.ready=!1,this.loading=!1,this.remoteFeatures=u.state.remoteFeatures,this.authConnector=S.getAuthConnector(),this.forceUpdate=()=>{this.requestUpdate()},this.unsubscribe.push(d.subscribeKey("farcasterUrl",e=>{e&&(this.uri=e,this.connectFarcaster())}),d.subscribeKey("socialProvider",e=>{e&&(this.socialProvider=e)}),u.subscribeKey("remoteFeatures",e=>{this.remoteFeatures=e})),window.addEventListener("resize",this.forceUpdate)}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.timeout),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),l`${this.platformTemplate()}`}platformTemplate(){return $.isMobile()?l`${this.mobileTemplate()}`:l`${this.desktopTemplate()}`}desktopTemplate(){return this.loading?l`${this.loadingTemplate()}`:l`${this.qrTemplate()}`}qrTemplate(){return l` <wui-flex
      flexDirection="column"
      alignItems="center"
      .padding=${["0","5","5","5"]}
      gap="5"
    >
      <wui-shimmer width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

      <wui-text variant="lg-medium" color="primary"> Scan this QR Code with your phone </wui-text>
      ${this.copyTemplate()}
    </wui-flex>`}loadingTemplate(){return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["5","5","5","5"]}
        gap="5"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo="farcaster"></wui-logo>
          ${this.loaderTemplate()}
          <wui-icon-box color="error" icon="close" size="sm"></wui-icon-box>
        </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="2">
          <wui-text align="center" variant="md-medium" color="primary">
            Loading user data
          </wui-text>
          <wui-text align="center" variant="sm-regular" color="secondary">
            Please wait a moment while we load your data.
          </wui-text>
        </wui-flex>
      </wui-flex>
    `}mobileTemplate(){return l` <wui-flex
      flexDirection="column"
      alignItems="center"
      .padding=${["10","5","5","5"]}
      gap="5"
    >
      <wui-flex justifyContent="center" alignItems="center">
        <wui-logo logo="farcaster"></wui-logo>
        ${this.loaderTemplate()}
        <wui-icon-box
          color="error"
          icon="close"
          size="sm"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="2">
        <wui-text align="center" variant="md-medium" color="primary"
          >Continue in Farcaster</span></wui-text
        >
        <wui-text align="center" variant="sm-regular" color="secondary"
          >Accept connection request in the app</wui-text
        ></wui-flex
      >
      ${this.mobileLinkTemplate()}
    </wui-flex>`}loaderTemplate(){const e=P.state.themeVariables["--w3m-border-radius-master"],i=e?parseInt(e.replace("px",""),10):4;return l`<wui-loading-thumbnail radius=${i*9}></wui-loading-thumbnail>`}async connectFarcaster(){var e,i;if(this.authConnector)try{await((e=this.authConnector)==null?void 0:e.provider.connectFarcaster()),this.socialProvider&&(W.setConnectedSocialProvider(this.socialProvider),p.sendEvent({type:"track",event:"SOCIAL_LOGIN_REQUEST_USER_DATA",properties:{provider:this.socialProvider}})),this.loading=!0;const s=E.getConnections(this.authConnector.chain).length>0;await E.connectExternal(this.authConnector,this.authConnector.chain);const o=(i=this.remoteFeatures)==null?void 0:i.multiWallet;this.socialProvider&&p.sendEvent({type:"track",event:"SOCIAL_LOGIN_SUCCESS",properties:{provider:this.socialProvider}}),this.loading=!1,s&&o?(w.replace("ProfileWallets"),b.showSuccess("New Wallet Added")):I.close()}catch(r){this.socialProvider&&p.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider}}),w.goBack(),b.showError(r)}}mobileLinkTemplate(){return l`<wui-button
      size="md"
      ?loading=${this.loading}
      ?disabled=${!this.uri||this.loading}
      @click=${()=>{this.uri&&$.openHref(this.uri,"_blank")}}
    >
      Open farcaster</wui-button
    >`}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.getBoundingClientRect().width-40;return l` <wui-qr-code
      size=${e}
      theme=${P.state.themeMode}
      uri=${this.uri}
      ?farcaster=${!0}
      data-testid="wui-qr-code"
      color=${y(P.state.themeVariables["--w3m-qr-color"])}
    ></wui-qr-code>`}copyTemplate(){const e=!this.uri||!this.ready;return l`<wui-button
      .disabled=${e}
      @click=${this.onCopyUri}
      variant="neutral-secondary"
      size="sm"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="sm" color="default" slot="iconRight" name="copy"></wui-icon>
      Copy link
    </wui-button>`}onCopyUri(){try{this.uri&&($.copyToClopboard(this.uri),b.showSuccess("Link copied"))}catch{b.showError("Failed to copy")}}};f.styles=G;C([c()],f.prototype,"socialProvider",void 0);C([c()],f.prototype,"uri",void 0);C([c()],f.prototype,"ready",void 0);C([c()],f.prototype,"loading",void 0);C([c()],f.prototype,"remoteFeatures",void 0);f=C([O("w3m-connecting-farcaster-view")],f);export{L as W3mConnectSocialsView,f as W3mConnectingFarcasterView,h as W3mConnectingSocialView};
