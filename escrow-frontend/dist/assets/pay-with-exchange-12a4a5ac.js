import{k as y,m as b,C as g,x as a,R as w,S as d,A as k,y as A,h as I}from"./index-d3e05a27.js";import{r as l,c as P}from"./index-cc40385c.js";import"./index-900bd2c1.js";import"./index-6a4d6a99.js";import"./index-59ea0f96.js";import"./index-7fc62c94.js";import"./index-ead5ef03.js";import{E as i}from"./ExchangeController-3f08c0f1.js";import"./index-a6bbe287.js";import"./index-af81c576.js";import"./index-b60e2128.js";import"./index-6bf31942.js";import"./index-1fb8b998.js";import"./index-3b96a61f.js";import"./if-defined-a5dd1e7b.js";import"./ref-7f5bf293.js";const v=y`
  .amount-input-container {
    border-radius: ${({borderRadius:n})=>n[5]};
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    border-bottom: 1px solid ${({tokens:n})=>n.core.glass010};
    background-color: ${({tokens:n})=>n.theme.backgroundPrimary};
  }

  .container {
    background-color: ${({tokens:n})=>n.theme.foregroundSecondary};
    border-radius: 30px;
  }
`;var u=globalThis&&globalThis.__decorate||function(n,e,s,t){var r=arguments.length,o=r<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,s):t,m;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,s,t);else for(var p=n.length-1;p>=0;p--)(m=n[p])&&(o=(r<3?m(o):r>3?m(e,s,o):m(e,s))||o);return r>3&&o&&Object.defineProperty(e,s,o),o};const x=[10,50,100];let c=class extends b{constructor(){super(),this.unsubscribe=[],this.network=g.state.activeCaipNetwork,this.exchanges=i.state.exchanges,this.isLoading=i.state.isLoading,this.amount=i.state.amount,this.tokenAmount=i.state.tokenAmount,this.priceLoading=i.state.priceLoading,this.isPaymentInProgress=i.state.isPaymentInProgress,this.currentPayment=i.state.currentPayment,this.paymentId=i.state.paymentId,this.paymentAsset=i.state.paymentAsset,this.unsubscribe.push(g.subscribeKey("activeCaipNetwork",e=>{this.network=e,this.setDefaultPaymentAsset()}),i.subscribe(e=>{var t,r;this.exchanges=e.exchanges,this.isLoading=e.isLoading,this.amount=e.amount,this.tokenAmount=e.tokenAmount,this.priceLoading=e.priceLoading,this.paymentId=e.paymentId,this.isPaymentInProgress=e.isPaymentInProgress,this.currentPayment=e.currentPayment,this.paymentAsset=e.paymentAsset,e.isPaymentInProgress&&((t=e.currentPayment)==null?void 0:t.exchangeId)&&((r=e.currentPayment)==null?void 0:r.sessionId)&&e.paymentId&&this.handlePaymentInProgress()}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),i.reset()}async firstUpdated(){await this.getPaymentAssets(),this.paymentAsset||await this.setDefaultPaymentAsset(),this.onPresetAmountClick(x[0]),await i.fetchExchanges()}render(){return a`
      <wui-flex flexDirection="column" gap="2" class="container">
        ${this.amountInputTemplate()} ${this.exchangesTemplate()}
      </wui-flex>
    `}exchangesLoadingTemplate(){return Array.from({length:2}).map(()=>a`<wui-shimmer width="100%" height="65px" borderRadius="xxs"></wui-shimmer>`)}_exchangesTemplate(){return this.exchanges.length>0?this.exchanges.map(e=>a`<wui-list-item
              @click=${()=>this.onExchangeClick(e)}
              chevron
              variant="image"
              imageSrc=${e.imageUrl}
              ?loading=${this.isLoading}
            >
              <wui-text variant="md-regular" color="secondary">
                Deposit from ${e.name}
              </wui-text>
            </wui-list-item>`):a`<wui-flex flexDirection="column" alignItems="center" gap="4" padding="4">
          <wui-text variant="lg-medium" align="center" color="primary">
            No exchanges support this asset on this network
          </wui-text>
        </wui-flex>`}exchangesTemplate(){return a`<wui-flex
      flexDirection="column"
      gap="2"
      .padding=${["3","3","3","3"]}
      class="exchanges-container"
    >
      ${this.isLoading?this.exchangesLoadingTemplate():this._exchangesTemplate()}
    </wui-flex>`}amountInputTemplate(){var e,s;return a`
      <wui-flex flexDirection="column" gap="3" .padding=${["0","3","3","3"]} class="amount-input-container">
        <wui-flex justifyContent="space-between" alignItems="center">
          <wui-text variant="md-medium" color="secondary">Asset</wui-text>

          <wui-token-button
            data-testid="deposit-from-exchange-asset-button"
            flexDirection="row-reverse"
            text=${((e=this.paymentAsset)==null?void 0:e.metadata.symbol)||""}
            imageSrc=${((s=this.paymentAsset)==null?void 0:s.metadata.iconUrl)||""}
            @click=${()=>w.push("PayWithExchangeSelectAsset")}
            >
          </wui-token-button>
        </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" justifyContent="center">
          <wui-flex alignItems="center" gap="1">
            <wui-text variant="h2-regular" color="secondary">${this.amount}</wui-text>
            <wui-text variant="md-regular" color="secondary">USD</wui-text>
          </wui-flex>
          ${this.tokenAmountTemplate()}
          </wui-flex>
          <wui-flex justifyContent="space-between" gap="2">
            ${x.map(t=>a`<wui-button @click=${()=>this.onPresetAmountClick(t)} variant=${this.amount===t?"neutral-primary":"neutral-secondary"} size="sm" fullWidth>$${t}</wui-button>`)}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}tokenAmountTemplate(){var e;return this.priceLoading?a`<wui-shimmer
        width="65px"
        height="20px"
        borderRadius="xxs"
        variant="light"
      ></wui-shimmer>`:a`
      <wui-text variant="md-regular" color="secondary">
        ${this.tokenAmount.toFixed(4)} ${(e=this.paymentAsset)==null?void 0:e.metadata.symbol}
      </wui-text>
    `}async onExchangeClick(e){if(!this.amount){d.showError("Please enter an amount");return}await i.handlePayWithExchange(e.id)}handlePaymentInProgress(){var s,t;const e=g.state.activeChain;this.isPaymentInProgress&&((s=this.currentPayment)!=null&&s.exchangeId)&&((t=this.currentPayment)!=null&&t.sessionId)&&this.paymentId&&(i.waitUntilComplete({exchangeId:this.currentPayment.exchangeId,sessionId:this.currentPayment.sessionId,paymentId:this.paymentId}).then(r=>{r.status==="SUCCESS"?(d.showSuccess("Deposit completed"),e&&(k.fetchTokenBalance(),A.updateBalance(e))):r.status==="FAILED"&&d.showError("Deposit failed")}),d.showLoading("Deposit in progress..."),w.replace("Account"))}onPresetAmountClick(e){i.setAmount(e)}async getPaymentAssets(){this.network&&await i.getAssetsForNetwork(this.network.caipNetworkId)}async setDefaultPaymentAsset(){if(this.network){const e=await i.getAssetsForNetwork(this.network.caipNetworkId);e[0]&&i.setPaymentAsset(e[0])}}};c.styles=v;u([l()],c.prototype,"network",void 0);u([l()],c.prototype,"exchanges",void 0);u([l()],c.prototype,"isLoading",void 0);u([l()],c.prototype,"amount",void 0);u([l()],c.prototype,"tokenAmount",void 0);u([l()],c.prototype,"priceLoading",void 0);u([l()],c.prototype,"isPaymentInProgress",void 0);u([l()],c.prototype,"currentPayment",void 0);u([l()],c.prototype,"paymentId",void 0);u([l()],c.prototype,"paymentAsset",void 0);c=u([P("w3m-deposit-from-exchange-view")],c);const C=y`
  .contentContainer {
    height: 440px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:n})=>n[3]};
  }
`;var f=globalThis&&globalThis.__decorate||function(n,e,s,t){var r=arguments.length,o=r<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,s):t,m;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,s,t);else for(var p=n.length-1;p>=0;p--)(m=n[p])&&(o=(r<3?m(o):r>3?m(e,s,o):m(e,s))||o);return r>3&&o&&Object.defineProperty(e,s,o),o};let h=class extends b{constructor(){super(),this.unsubscribe=[],this.assets=i.state.assets,this.search="",this.onDebouncedSearch=I.debounce(e=>{this.search=e}),this.unsubscribe.push(i.subscribe(e=>{this.assets=e.assets}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return a`
      <wui-flex flexDirection="column">
        ${this.templateSearchInput()} <wui-separator></wui-separator> ${this.templateTokens()}
      </wui-flex>
    `}templateSearchInput(){return a`
      <wui-flex gap="2" padding="3">
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){const e=this.assets.filter(t=>t.metadata.name.toLowerCase().includes(this.search.toLowerCase())),s=e.length>0;return a`
      <wui-flex
        class="contentContainer"
        flexDirection="column"
        .padding=${["0","3","0","3"]}
      >
        <wui-flex justifyContent="flex-start" .padding=${["4","3","3","3"]}>
          <wui-text variant="md-medium" color="secondary">Available tokens</wui-text>
        </wui-flex>
        <wui-flex flexDirection="column" gap="2">
          ${s?e.map(t=>a`<wui-list-item
                    .imageSrc=${t.metadata.iconUrl}
                    ?clickable=${!0}
                    @click=${this.handleTokenClick.bind(this,t)}
                  >
                    <wui-text variant="md-medium" color="primary">${t.metadata.name}</wui-text>
                    <wui-text variant="md-regular" color="secondary"
                      >${t.metadata.symbol}</wui-text
                    >
                  </wui-list-item>`):a`<wui-flex
                .padding=${["20","0","0","0"]}
                alignItems="center"
                flexDirection="column"
                gap="4"
              >
                <wui-icon-box icon="coinPlaceholder" color="default" size="lg"></wui-icon-box>
                <wui-flex
                  class="textContent"
                  gap="2"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <wui-text variant="lg-medium" align="center" color="primary">
                    No tokens found
                  </wui-text>
                </wui-flex>
                <wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>
              </wui-flex>`}
        </wui-flex>
      </wui-flex>
    `}onBuyClick(){w.push("OnRampProviders")}onInputChange(e){this.onDebouncedSearch(e.detail)}handleTokenClick(e){i.setPaymentAsset(e),w.goBack()}};h.styles=C;f([l()],h.prototype,"assets",void 0);f([l()],h.prototype,"search",void 0);h=f([P("w3m-deposit-from-exchange-select-asset-view")],h);export{h as W3mDepositFromExchangeSelectAssetView,c as W3mDepositFromExchangeView};
