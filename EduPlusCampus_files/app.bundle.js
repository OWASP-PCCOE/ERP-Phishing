!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="https://pgi.billdesk.com/payments-checkout-widget/src/",n(n.s=99)}({1:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r={};function o(t,e){"parent"==t?(window.parent.postMessage(e,"*"),"abort"!=e&&"dismissModal"!=e||function(t){if("abort"==t&&window.parent.postMessage("abort","*"),"dismissModal"==t){window.parent.postMessage("dismissModal","*");var e=document.getElementById("user_payment_options");e.innerHTML="",e.style.display="none"}}(e),e,r=!0):(document.getElementById("bdsps").contentWindow.postMessage(e,"*"),validate.requirefield(e),""==e.msg||null==e.msg&&typeof e.msg==String||(validate.clientMsg=e),r=e);return r}},100:function(t,e,n){(function(e,r){t.exports=function(){"use strict";function t(t){return"function"==typeof t}function o(){var t=setTimeout;return function(){return t(i,1)}}function i(){for(var t=0;t<I;t+=2)(0,B[t])(B[t+1]),B[t]=void 0,B[t+1]=void 0;I=0}function a(t,e){var n=arguments,r=this,o=new this.constructor(c);void 0===o[R]&&b(o);var i=r._state;return i?function(){var t=n[i-1];_((function(){return v(i,o,t,r._result)}))}():h(r,o,t,e),o}function s(t){if(t&&"object"==typeof t&&t.constructor===this)return t;var e=new this(c);return d(e,t),e}function c(){}function l(t){try{return t.then}catch(t){return L.error=t,L}}function u(e,n,r){n.constructor===e.constructor&&r===a&&n.constructor.resolve===s?function(t,e){e._state===j?p(t,e._result):e._state===U?m(t,e._result):h(e,void 0,(function(e){return d(t,e)}),(function(e){return m(t,e)}))}(e,n):r===L?m(e,L.error):void 0===r?p(e,n):t(r)?function(t,e,n){_((function(t){var r=!1,o=function(t,e,n,r){try{t.call(e,n,r)}catch(t){return t}}(n,e,(function(n){r||(r=!0,e!==n?d(t,n):p(t,n))}),(function(e){r||(r=!0,m(t,e))}),t._label);!r&&o&&(r=!0,m(t,o))}),t)}(e,n,r):p(e,n)}function d(t,e){t===e?m(t,new TypeError("You cannot resolve a promise with itself")):function(t){return"function"==typeof t||"object"==typeof t&&null!==t}(e)?u(t,e,l(e)):p(t,e)}function f(t){t._onerror&&t._onerror(t._result),g(t)}function p(t,e){t._state===D&&(t._result=e,t._state=j,0!==t._subscribers.length&&_(g,t))}function m(t,e){t._state===D&&(t._state=U,t._result=e,_(f,t))}function h(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+j]=n,o[i+U]=r,0===i&&t._state&&_(g,t)}function g(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,o=void 0,i=t._result,a=0;a<e.length;a+=3)r=e[a],o=e[a+n],r?v(n,r,o,i):o(i);t._subscribers.length=0}}function y(){this.error=null}function v(e,n,r,o){var i=t(r),a=void 0,s=void 0,c=void 0,l=void 0;if(i){if((a=function(t,e){try{return t(e)}catch(t){return H.error=t,H}}(r,o))===H?(l=!0,s=a.error,a=null):c=!0,n===a)return void m(n,new TypeError("A promises callback cannot return that same promise."))}else a=o,c=!0;n._state!==D||(i&&c?d(n,a):l?m(n,s):e===j?p(n,a):e===U&&m(n,a))}function b(t){t[R]=q++,t._state=void 0,t._result=void 0,t._subscribers=[]}function w(t,e){this._instanceConstructor=t,this.promise=new t(c),this.promise[R]||b(this.promise),A(e)?(this._input=e,this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?p(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&p(this.promise,this._result))):m(this.promise,new Error("Array Methods must be provided an Array"))}function E(t){this[R]=q++,this._result=this._state=void 0,this._subscribers=[],c!==t&&("function"!=typeof t&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof E?function(t,e){try{e((function(e){d(t,e)}),(function(e){m(t,e)}))}catch(e){m(t,e)}}(this,t):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}function k(){var t=void 0;if(void 0!==r)t=r;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var n=null;try{n=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===n&&!e.cast)return}t.Promise=E}var A=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},I=0,C=void 0,T=void 0,_=function(t,e){B[I]=t,B[I+1]=e,2===(I+=2)&&(T?T(i):O())},x="undefined"!=typeof window?window:void 0,P=x||{},S=P.MutationObserver||P.WebKitMutationObserver,M="undefined"==typeof self&&void 0!==e&&"[object process]"==={}.toString.call(e),N="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,B=new Array(1e3),O=void 0;O=M?function(){return e.nextTick(i)}:S?function(){var t=0,e=new S(i),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}():N?function(){var t=new MessageChannel;return t.port1.onmessage=i,function(){return t.port2.postMessage(0)}}():void 0===x?function(){try{var t=n(101);return C=t.runOnLoop||t.runOnContext,function(){C(i)}}catch(t){return o()}}():o();var R=Math.random().toString(36).substring(16),D=void 0,j=1,U=2,L=new y,H=new y,q=0;return w.prototype._enumerate=function(){for(var t=this.length,e=this._input,n=0;this._state===D&&n<t;n++)this._eachEntry(e[n],n)},w.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===s){var o=l(t);if(o===a&&t._state!==D)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===E){var i=new n(c);u(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new n((function(e){return e(t)})),e)}else this._willSettleAt(r(t),e)},w.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===D&&(this._remaining--,t===U?m(r,n):this._result[e]=n),0===this._remaining&&p(r,this._result)},w.prototype._willSettleAt=function(t,e){var n=this;h(t,void 0,(function(t){return n._settledAt(j,e,t)}),(function(t){return n._settledAt(U,e,t)}))},E.all=function(t){return new w(this,t).promise},E.race=function(t){var e=this;return new e(A(t)?function(n,r){for(var o=t.length,i=0;i<o;i++)e.resolve(t[i]).then(n,r)}:function(t,e){return e(new TypeError("You must pass an array to race."))})},E.resolve=s,E.reject=function(t){var e=new this(c);return m(e,t),e},E._setScheduler=function(t){T=t},E._setAsap=function(t){_=t},E._asap=_,E.prototype={constructor:E,then:a,catch:function(t){return this.then(null,t)}},k(),E.polyfill=k,E.Promise=E,E}()}).call(this,n(39),n(40))},101:function(t,e){},14:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(1);function o(){return{url:function(t){return/^(http[s]?=\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-\?]+\.[a-zA-Z]{2,5}[\.]{0,1}/.test(t)?t:"NA"},reqid:"BDCR0001",clientMsg:"",csmsg:"",form:"form1",requestProcessStatus:"false",constructMsg:"",blockName:"tab1",queryAPI:function(){var t;(t=bdPaymenti.client.parentHead)&&t.appendChild(this.$style)},string:function(t){return!!t.match(/^[a-zA-Z0-9 |.@=?+=//~-]+$/)},isBoolean:function(t){return"true"===t||"false"!==t&&t},searchStringInArray:function(t,e){for(var n=0;n<e.length;n++)if(e[n].match(t))return!0;return!1},escapeChar:function(t){return t.replace(/<script.*>.*<\/script>/,"").replace(/<img.*>.*/,"").replace(/</g,"").replace(/>/g,"")},query:function(t){var e=JSON.parse(this.escapeChar(t));this.clientMsg=this.sanitizeMessage(e.msg)},trim:function(t){return t.replace(/[@#$<>%^&*]/g,"")},requirefield:function(t){if(null!=typeof t&&void 0!==t)return t;throw new Error("Please consult the documentation to confirm that you're integrated as expected.")},remove:function(t){var e;try{if(null==t)throw new Error("id= null has no properties");if(null==(e=document.getElementById(t)))return;return(e=document.getElementById(t)).parentNode.removeChild(e)}catch(t){console.log(t)}},terminate:function(t,e){try{if(this.requestProcessStatus=!1,"self"==t)return alert("Sorry! We couldn't process your transaction"),!1}catch(t){throw new Error("Transacton Process Declined")}},terminateModal:function(){try{var t=document.getElementById("user_payment_options"),e=document.getElementsByClassName("modal-container")[0],n=document.getElementsByTagName("body");return this.requestProcessStatus=!1,document.getElementById("paymentMethod").innerHTML="",document.getElementById("paymentMethod").innerHTML='<div class="alert alert-info no-border"><div class="text-center"><br /><span href="javascript:void(0)" class="btn border-danger-400 text-danger-400 btn-flat btn-rounded btn-icon btn-lg">!</span><h4 class="card-title">Something went wrong</h4><p>We are sorry, try again in few minutes or<br/>contact us for assistance.</p><div class="notification-progress-bar bg-danger-600">&nbsp;</div></div></div>',e.classList.add("app-error"),setTimeout((function(){document.getElementsByClassName("notification-progress-bar")[0].classList.add("out")}),10),setTimeout((function(){e.classList.remove("slideInBottom"),e.classList.add("fadeOutDown"),e.classList.add("animated"),e.classList.remove("app-error")}),3500),setTimeout((function(){n[0].classList.remove("modal-open"),t.innerHTML="",t.style.display="none",r.a("parent","dismissModal")}),3500),!1}catch(t){throw new Error("Transacton Process Declined "+t)}},append:function(t,e){return t.appendChild(e)},formField:function(t,e,n){var r=document.createElement("input");r.type="hidden",r.name=e,r.value=n,document.getElementById(t).appendChild(r)},insertBefore:function(t,e){t.parentNode.insertBefore(e,t)},session:function(t,e){try{return"object"==typeof e&&(e=JSON.stringify(e)),void sessionStorage.setItem(t,e)}catch(t){throw new Error("Please check the browser compatibility Please consult the documentation to confirm that you're supplying values as expected.")}},cookie:function(t,e){try{this.$id=t,"object"==typeof e&&(e=JSON.stringify(e)),localStorage.setItem(t,e)}catch(t){throw new Error("Please check the browser compatibility Please consult the documentation to confirm that you're supplying values as expected.")}},sendRequest:function(t,e){if(!1!==this.requestProcessStatus)try{return JSON.stringify(JSON.parse($.ajax({type:"POST",dataType:"text",data:e,url:t,async:!1,timeout:1e4}).fail((function(t,e){"timeout"!==e&&"error"!==e||this.terminateModal()})).responseText))}catch(t){return}},dismissModal:function(){var t=document.getElementById("bdsps");if(void 0!==t||null!=t){CheckoutContainer.style.display="none";var e=document.getElementById("spin-loader-mask");void 0!==e&&null!=e&&(document.getElementById("bdCheckout").style.display="none",e.style.display="none")}}}}},20:function(t){t.exports=JSON.parse('{"c":"Your object is not valid.","b":"Msg is not valid.","f":"Referral URL(RU) is missing.","e":"Callback URL is missing","a":"You have given callback URL with referral URL.","d":"Please provide valid values."}')},3:function(t,e,n){"use strict";n.r(e),n.d(e,"template",(function(){return r})),n.d(e,"assetsUri",(function(){return o})),n.d(e,"validateRequest",(function(){return c})),n.d(e,"CheckoutContainer",(function(){return l})),n.d(e,"clientAssets",(function(){return i})),n.d(e,"iFrameContainer",(function(){return u})),n.d(e,"AppContainer",(function(){return d})),n.d(e,"FORM",(function(){return p})),n.d(e,"ClientMsg",(function(){return m})),n.d(e,"allowedDomain",(function(){return h})),n.d(e,"PlaceModalClose",(function(){return A})),n.d(e,"PGICommonGateway",(function(){return s})),n.d(e,"PlaceholderMercLogo",(function(){return I})),n.d(e,"AjXRequestURL",(function(){return w})),n.d(e,"PlaceholderAmount",(function(){return C})),n.d(e,"modalSession",(function(){return y})),n.d(e,"PlaceholderTabTitle",(function(){return T})),n.d(e,"billDeskPaymentTabs",(function(){return _})),n.d(e,"tabs",(function(){return g})),n.d(e,"bankPostingHandler",(function(){return v})),n.d(e,"cardPostingHandler",(function(){return b})),n.d(e,"CSListView",(function(){return f})),n.d(e,"apiResourcesUrl",(function(){return a})),n.d(e,"payCategory",(function(){return x})),n.d(e,"CsMsgAjXRequestURL",(function(){return k})),n.d(e,"RequestDataURL",(function(){return E}));var r="https://pgi.billdesk.com/payments-checkout-widget/",o="https://pgi.billdesk.com/payments-checkout-widget/",i="https://pgi.billdesk.com/checkout-assets",a="https://pgi.billdesk.com/pgidsk",s="https://pgi.billdesk.com/pgidsk/PGICommonGateway",c="https://pgi.billdesk.com/pgidsk/pgmerc/BDPIMerchantRequest.jsp",l="bdCheckout",u="bdsps",d="user_payment_options",f="quickpayList",p="form1",m="",h=["https://uat.billdesk.com","https://online.billdesk.com","https://payments.billdesk.com","https://www.billdesk.com","https://pgi.billdesk.com","https://services.billdesk.com","file://","https://10.10.14.2","http://localhost:8008","http://localhost","https://mli.qa.intelligrape.net","https://neouat.maxlifeinsurance.com"],g="#sidebar",y="",v="https://pgi.billdesk.com/pgidsk/PGIMerchantRequestHandler",b="https://pgi.billdesk.com/pgidsk/PGICommonGateway",w="https://www.billdesk.com/bdcs/BDCSPaymentOption",E="https://www.billdesk.com/pgidsk/PGIDirectRequestHandler",k="https://www.billdesk.com/bdcs/BDCSManageAccount",A="placeholder-close-modal",I="placeholder-merchant-logo",C="placeholder-transaction-amount",T="placeholder-tabholder-title",_={CREDIT:{tab:"Credit/ Debit Cards",id:"#tab2",data:"txtBankIDCC-CARD",pos:"1"},NETBANKING:{tab:"Internet Banking",id:"#tab5",data:"txtBankIDBK-OTHER",pos:"2"},UPI:{tab:"UPI",id:"#tab16",data:"txtBankIDUPI-UPI",pos:"3"},CASHCARD:{tab:"Wallet/ Cash Card",id:"#tab6",data:"txtBankIDCD-OTHER",pos:"4"},EMI:{tab:"EMI",id:"#tab11",data:"txtBankIDEMI-OTHER",pos:"5"},TEZ:{tab:"Google Pay",id:"#tab17",data:"txtBankIDTEZ-TEZ",pos:"6"},BHARATQR:{tab:"QR",id:"#tab15",data:"txtBankIDVH1-OTHER",pos:"7"},CNFEMI:{tab:"Consumer Finance",id:"#tab20",data:"txtBankIDCNFEMI-OTHER",pos:"8"},VISACKO:{tab:"Visa Checkout",id:"#tab18",data:"txtBankIDVHC-OTHER",pos:"9"},NEFT:{tab:"NEFT/ RTGS",id:"#tab10",data:"txtBankIDECH-OTHER",pos:"10"},ECHALLAN:{tab:"NEFT/ RTGS",id:"#tab10",data:"txtBankIDECH-OTHER",pos:"10"}},x=["CREDIT","DEBIT","NETBANKING","EMI","UPI","TEZ","PRESI","CASHCARD","BHARATQR","MCATGCREDIT","MCATGDEBIT","MCATGNETBANKING","MCATGEMI","MCATGUPI","MCATGCASHCARD","MCATGBHARATQR","PRESICREDIT","MCATGTEZ"]},39:function(t,e){var n,r,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(t){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(t){r=a}}();var c,l=[],u=!1,d=-1;function f(){u&&c&&(u=!1,c.length?l=c.concat(l):d=-1,l.length&&p())}function p(){if(!u){var t=s(f);u=!0;for(var e=l.length;e;){for(c=l,l=[];++d<e;)c&&c[d].run();d=-1,e=l.length}c=null,u=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function m(t,e){this.fun=t,this.array=e}function h(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];l.push(new m(t,e)),1!==l.length||u||s(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},40:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},55:function(t,e,n){"use strict";function r(){return{lockParentScroll:function(t,e){var n=document.createElement("style");n.innerHTML=".bd-no-scroll {color: purple;background-color: #e5e5e5;height: 150px;}.spin-loader-mask { background:rgba(0,0,0,0.0); position: fixed; top: 50%; left: 50%; z-index:-1; -webkit-transform:translate(-50%,-50%); -moz-transform:translate(-50%,-50%); transform:translate(-50%,-50%); }.spin-loader > div {position:absolute; top:50%; left:50%; width:50px; height:50px; background:#ff9000;-webkit-transform:translate(-50%,-50%); -moz-transform:translate(-50%,-50%); transform:translate(-50%,-50%);-webkit-animation:spin-loader 3s 0s cubic-bezier(.09,.57,.49,.9) infinite; animation:spin-loader 3s 0s cubic-bezier(.09,.57,.49,.9) infinite; z-index: 9999;}@keyframes spin-loader { 25% {-webkit-transform:perspective(100px) rotateX(180deg) rotateY(0);transform:perspective(100px) rotateX(180deg) rotateY(0)}50% {-webkit-transform:perspective(100px) rotateX(180deg) rotateY(180deg);transform:perspective(100px) rotateX(180deg) rotateY(180deg)}75% {-webkit-transform:perspective(100px) rotateX(0) rotateY(180deg);transform:perspective(100px) rotateX(0) rotateY(180deg)}100%{-webkit-transform:perspective(100px) rotateX(0) rotateY(0);transform:perspective(100px) rotateX(0) rotateY(0)} }";var r=document.querySelector("script");r.parentNode.insertBefore(n,r)},createIFrameStyle:function(t){var e=document.createElement("style");return t="body.bdsps {height: 100%; /*height: 100vh;*/ width: 100%; width: 100vw;} body.pay-selector {overflow:hidden;}",(e=document.createElement("style")).type="text/css",e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t)),e},createIFrame:function(t,e,n){var r=document.createElement("div"),o=document.createElement("iframe"),i={visibility:"",width:"100%",height:"100%",position:"fixed",top:0,left:0,display:"none",zIndex:999999},a=document.createElement("div"),s=document.createElement("div"),c=document.createElement("div");for(var l in o.frameBorder=0,o.title="BillDesk Smart Payment Solution",o.id="bdsps",o.name="bdsps",o.className="billdeskiFrame",o.style.height="100%",o.style.width="100%",o.style.display="block",o.allow="payment",r.id=e,r.name="bdsps",r.appendChild(o),this.lockParentScroll(r,"bd-no-scroll"),a.id="spin-loader-mask",a.className="spin-loader-mask",s.className="spin-loader",i)i.hasOwnProperty(l)&&(r.style[l]=i[l]);return r.appendChild(a),a.appendChild(s),s.appendChild(c),r},createLoader:function(){},isIframeReady:function(t){try{var e=document.getElementById(t);if("complete"==(e.contentDocument||e.contentWindow).readyState)return!0}catch(t){console.log(t)}},jsExtender:function(){try{for(var t=document.getElementsByTagName("script"),e="",n=0;n<t.length;n++){var r=1!=t[n].src.split("billdesk.com").length?t[n].src.split("billdesk.com"):t[n].src.split("localhost:8008"),o=r[1]?r[1].indexOf("app.bundle.js"):-1;if(1!=o.length&&-1!=o&&(e=r[0].split("https://")[1]?r[0].split("https://")[1]:"NA","inline"==t[n].getAttribute("data-main")))return{isModalInlineView:!0,jsExtenderSourceDomain:e}}return{isModalInlineView:!1,jsExtenderSourceDomain:e}}catch(t){console.log(t)}}}}n.d(e,"a",(function(){return r}))},6:function(t,e,n){"use strict";(function(t){function r(t){return t&&"string"==typeof t&&"undefined"!==t?!!t.match(/^[a-zA-Z0-9!& |.+@:?=//_//~-]+$/):t}function o(t,e){return!!t&&hasOwnProperty.call(t,e)}function i(t,e){return"undefined"===(t=e.url(t))&&""===t&&"NA"===t?t:t||"NA"}function a(t,e){try{if(23!==(t=t.split("|")).length&&24!==t.length)throw new Error("Please consult the documentation to confirm that you're supplying values as expected.");for(var n=0;n<t.length;n++)if(""===t[n])throw new Error("BillDesk Checkout was unable to serialize the parameter passed to BillDesk. Please consult the documentation to confirm that you're supplying values as expected.");return t.join("|")}catch(t){return console.log(""+t),t.toString()}}function s(t,e){if("string"!=typeof t||"NA"==t)return e.terminate("self",""),!1;var n=JSON.parse(t),r=n.status.toUpperCase();n.ErrorDescription;return"N"==r?($(".loading").remove(),e.terminateModal(),!1):"Y"==r?n:void 0}function c(t,e){return"undefined"===t&&""===t?t:t||"NA"}function l(t){return"undefined"===t&&""===t?t:t||"NA"}function u(t,e){return parseFloat(Math.round(100*t)/100).toFixed(2)}function d(e,n){var r=t.validateRequest,o={timeout:"10000"};-1!=e.indexOf("CP100")?(o.msg=e.split("&")[0],o.reqid="CS1009",o.hidRequestId="PGIME400"):o.msg=e;var i=o,a=n.sendRequest(r,i);return"undefined"===a&&""===a?a:a||"NA"}function f(t){try{if("object"!=typeof t||"NA"==typeof t)return;var e=JSON.stringify(t),n=JSON.parse(e),r=function(t){return"undefined"===t&&""===t?t:t||"NA"};r(n.customerid),r(n.infoParam);return e}catch(t){console.log(t)}}n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return o})),n.d(e,"g",(function(){return i})),n.d(e,"h",(function(){return a})),n.d(e,"f",(function(){return s})),n.d(e,"a",(function(){return c})),n.d(e,"e",(function(){return l})),n.d(e,"j",(function(){return u})),n.d(e,"b",(function(){return d})),n.d(e,"i",(function(){return f}))}).call(this,n(3))},8:function(t,e,n){"use strict";function r(){var t,e=-1!=navigator.userAgent.indexOf("iPhone"),n=-1!=navigator.userAgent.indexOf("iPod"),r=-1!=navigator.userAgent.indexOf("iPad"),o=e||n||r,i=-1!=navigator.userAgent.indexOf("Safari")&&o,a=-1!=navigator.userAgent.indexOf("Android"),s=-1!=navigator.userAgent.indexOf("wv")&&a,c=!1,l=navigator.userAgent,u=l.match(/(opera|chrome|safari|firefox|msie|trident|UCBrowser(?=\/))\/?\s*(\d+)/i)||[];if(/trident/i.test(u[1]))return{name:"IE",version:(t=/\brv[ :]+(\d+)/g.exec(l)||[])[1]||""};u=u[2]?[u[1],u[2]]:[navigator.appName,navigator.appVersion,"-?"],null!=(t=l.match(/version\/(\d+)/i))&&u.splice(1,1,t[1]);var d="Unknown OS";return-1!=navigator.userAgent.indexOf("Win")?d="Windows":-1!=navigator.userAgent.indexOf("Mac")?d="Macintosh":-1!=navigator.userAgent.indexOf("Linux")?d="Linux":-1!=navigator.userAgent.indexOf("Android")?d="Android":-1!=navigator.userAgent.indexOf("like Mac")&&(d="iOS"),(s||o&&!i)&&(c=!0),{name:u[0],version:u[1],os:d,app:c}}function o(){return{deviceWidth:Math.max(document.body.scrollWidth,document.documentElement.scrollWidth,document.body.offsetWidth,document.documentElement.offsetWidth,document.documentElement.clientWidth),deviceHeight:Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.documentElement.clientHeight),deviceTimeZone:function(){const t=new Date;return"undefined"!=typeof Promise?t.getTimezoneOffset():-330}(),deviceUA:navigator.userAgent,deviceJavaEnabled:window.navigator.javaEnabled(),deviceBrowserLang:window.navigator.language}}n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}))},89:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(6),o=n(8),i=n(20);function a(t,e){try{var n=!1,a=!1,s=function(t){return-1==[void 0,null,"",!1,"false","NA"].indexOf(t)},c=function(t){return/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(t)?t:"NA"},l=function(t){var e=c(t.callbackUrl);if("undefined"!==e&&"NA"==e){for(;"/"===t.callbackUrl.toString().charAt(0);)t.callbackUrl=t.callbackUrl.substr(1);"http"!=t.callbackUrl.substr(0,4)&&(t.callbackUrl="https://"+window.location.hostname+"/"+t.callbackUrl)}return t.callbackUrl=t.callbackUrl.replace(/%26/g,"&"),t},u=function(t,e,r){if(e){if(n=!0,a=!0,t)throw new Error(i.a)}else if(!e){if(!t)throw new Error(i.e);n=!0,a=!1}},d=!!s(t.handled)&&t.handled,f=function(t){try{return"object"==typeof t&&(t=JSON.stringify(function(t){if(s(t.callbackUrl)){var e=t.callbackUrl.replace(/&/g,"%26");delete t.callbackUrl,t.callbackUrl=e}return t}(t)),JSON.parse(e.escapeChar(t)))}catch(t){throw new Error(t)}}(t);if("object"!=typeof f)throw new Error(i.c);if(v=f.msg,!s(v)||-1!=r.h(v).indexOf("Error"))throw new Error(i.b);var p=function(t){return"NA"!=t.split("|")[21]}(f.msg),m=function(t){return s(t.callbackUrl)?{callbackUrl:!0,str:l(t)}:{callbackUrl:!1,str:t}}(f),h=m.callbackUrl,g=function(t){return t.options?t.options:"NA"}(f);(f=function(t){return t.redirectionToCallback="function"==typeof d,t}(f=m.str)).handled=d;var y=o.a().app;if("NA"!=g){(function(t){if(s(t.enablePaymentRetry)&&1==e.isBoolean(t.enablePaymentRetry)){if(s(t.retry_attempt_count)&&!isNaN(parseInt(t.retry_attempt_count)))return!0;throw new Error(i.d)}e.isBoolean(t.enablePaymentRetry)})(g);if(g.logo=void 0!==g.logo&&function(t){var e=c(t);if("NA"!=e){return!!/\.(jpg|png|gif)$/.test(e)&&e}return!1}(g.logo),y){if(!p)throw new Error(i.f);delete f.options.enableChildWindowPosting,n=!0}else u(p,h),delete f.options.enableChildWindowPosting,a&&(f.options.enableChildWindowPosting=a)}else u(p,h),a&&(f.options={},f.options.enableChildWindowPosting=a);return{isObjectValid:n,str:f}}catch(e){return console.error("Please consult the documentation to cofirm that you have integrated as expected.\n"+e),{isObjectValid:!1,str:t}}var v}},99:function(t,e,n){"use strict";n.r(e),function(t,e){var r=n(14),o=n(55),i=n(1),a=n(89);(function(){window.bdPayment=window.bdPayment||{},window.validate=r.a();var n=!1,s=!1,c=o.a().jsExtender(),l="",u={},d=function(){var e=document.getElementById(t.CheckoutContainer);"null"!=!e&&"undefined"!=e||document.getElementById(t.iFrameContainer).remove();var n=document.body,r=o.a(),i=r.createIFrame("bdCheckoutIframe","bdCheckout","bdCheckoutIframe");return i.appendChild(r.createIFrameStyle("bd-sps")),document.getElementById("bd-sps")||n.insertBefore(i,n.childNodes[0]),document.getElementById("bdsps").src=t.template+"src/init.html",i},f=function(){return s},p=function(e){try{var n=e;if(1==validate.searchStringInArray(n.origin,t.allowedDomain)){if("dismissModal"==n.data){var r=document.getElementById("bdsps");if(void 0!==r||null!=r){r.style.display="none";var o=document.getElementById("spin-loader-mask");void 0!==o&&null!=o&&(document.getElementById("bdCheckout").style.display="none",o.style.display="none")}}"readyToInitiate"==n.data&&(s=!0),"success"==n.data.status&&l(n.data)}}catch(t){}},m=function(e){var n=window.location.hostname;e.host=n,h(e);var r=document.getElementById(t.CheckoutContainer);null!==r&&(r.style.display="");var o=document.getElementById("spin-loader-mask");void 0!==o&&null!=o&&(o.style.display="")},h=function(t){try{var e=function(t){if(void 0!==t.callbackUrl){var e=t.callbackUrl.replace(/&/g,"%26");delete t.callbackUrl,t.callbackUrl=e}return t}(t);if("object"==typeof e&&(e=JSON.stringify(e)),e=JSON.parse(validate.escapeChar(e)),"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)}),"NA"==(e.msg||"false"!==e.msg&&"NA"))throw"Please consult the documentation to confirm that you're integrated as expected: Msg param missing";validate;var n=JSON.parse(JSON.stringify(e));if(1==(n.enableInlineView||(n.enableInlineView,!1))){var r=JSON.parse(JSON.stringify(n.setting)),o=r.inlineViewId||"false"!==r.inlineViewId&&"false";if("null"!=o&&""!=o&&"undefined"!=o){var a=document.getElementById("bdCheckout"),s=a.cloneNode(!0);a.remove(),s.style.position="relative",document.getElementById(o).appendChild(s)}var c=document.getElementById("spin-loader-mask");null!=c&&c.remove();var l=window.setInterval((function(){1==f()&&(window.clearInterval(l),i.a("childStr",e),document.getElementById("bdsps").style.display="")}),200)}else{l=window.setInterval((function(){}),200);i.a("childStr",e),document.getElementById("bdsps").style.display=""}}catch(t){console.warn(t)}};c.isModalInlineView||(n=d()),bdPayment.initialize=function(t){return new e.Promise((function(e,r){var o=a.a(t,validate);try{if(1==o.isObjectValid){if(void 0!==n&&"object"==typeof n)m(o.str);else if(0==n&&1==c.isModalInlineView){n=d();var i=window.setInterval((function(){1==f()&&(window.clearInterval(i),m(o.str),s=!1)}),100)}l=e,o.str.handled&&(u=t),window.addEventListener?window.addEventListener("message",p,!1):window.attachEvent("onmessage",p)}}catch(t){console.log(t)}})).then((function(t){u.handled(t)}))}}).call()}.call(this,n(3),n(100))}});