import{a as D,c as G,d as Be,e as De,f as Ue,g as je,h as ze,i as Ge,k as ee}from"./chunk-6FA7JLIR.js";import{a as p,b}from"./chunk-37KC6PLM.js";import{$ as Oe,A as m,B as ge,C as E,D as N,E as P,F as ve,G as B,H as K,J as Q,K as we,L as ye,O as Ee,P as be,Q as Le,R as Ce,S as Se,T as Te,U as Ae,V as xe,W as He,X as ke,Y as _e,Z as Ie,_ as qe,a as f,aa as Me,ba as Re,c as x,ca as Ne,da as Pe,e as H,f as ue,k as q,l as me,m as h,n as V,o as O,p as M,q as he,r as fe,s as R,t as j,u as pe,v as S,w,x as z,y as T,z as J}from"./chunk-EIZBOYKV.js";import"./chunk-KGSZ7NAG.js";import{a as u}from"./chunk-HVVDXSLL.js";import"./chunk-WIQECBEN.js";u();u();u();me();var k=(e,t)=>{m.hasClass("on")?(m.removeClass("on"),T.removeClass("close"),t?m.style="":p(m,"slideRightOut")):t?m.style="":p(m,"slideRightIn",()=>{m.addClass("on"),T.addClass("close")})},Fe=()=>{let e=m.querySelector(".inner");m.querySelector(".tab")&&e.removeChild(m.querySelector(".tab"));let t=document.createElement("ul"),o="active";t.className="tab",["contents","related","overview"].forEach(s=>{let r=m.querySelector(".panel."+s);if(r.innerHTML.trim().length<1){s==="contents"&&q(B,"none");return}s==="contents"&&q(B,"");let i=document.createElement("li"),a=document.createElement("span"),n=document.createTextNode(r.getAttribute("data-title"));a.appendChild(n),i.appendChild(a),i.addClass(s+" item"),o?(r.addClass(o),i.addClass(o)):r.removeClass("active"),i.addEventListener("click",c=>{let l=c.currentTarget;l.hasClass("active")||(m.find(".tab .item").forEach(d=>{d.removeClass("active")}),m.find(".panel").forEach(d=>{d.removeClass("active")}),m.querySelector(".panel."+l.className.replace(" item","")).addClass("active"),l.addClass("active"))}),t.appendChild(i),o=""}),t.childNodes.length>1?(e.insertBefore(t,e.childNodes[0]),m.querySelector(".panels").style.paddingTop=""):m.querySelector(".panels").style.paddingTop=".625rem"},We=()=>{let e=n=>{let c=t[n];if(!c||c.hasClass("current"))return;f.each(".toc .active",d=>{d&&d.removeClass("active current")}),o.forEach(d=>{d&&d.removeClass("active")}),c.addClass("active current"),o[n]&&o[n].addClass("active");let l=c.parentNode;for(;!l.matches(".contents");){if(l.matches("li")){l.addClass("active");let d=document.querySelector(decodeURIComponent(l.querySelector("a.toc-link").getAttribute("href")));d&&d.addClass("active")}l=l.parentNode}getComputedStyle(m).display!=="none"&&r.hasClass("active")&&b(r,c.offsetTop-r.offsetHeight/4)},t=f.all(".contents li");if(t.length<1)return;let o=[...t],s=null;o=o.map((n,c)=>{let l=n.querySelector("a.toc-link"),d=document.querySelector(decodeURI(l.getAttribute("href")));if(!d)return null;let U=d.querySelector("a.anchor"),I=C=>{C.preventDefault();let ft=document.querySelector(decodeURI(C.currentTarget.getAttribute("href")));s=c,b(ft,null,()=>{e(c),s=null})};return l.addEventListener("click",I),U&&U.addEventListener("click",C=>{I(C),De(h.hostname+"/"+LOCAL.path+C.currentTarget.getAttribute("href"))}),d});let r=m.querySelector(".contents.panel"),i=n=>{let c=0,l=n[c];if(l.boundingClientRect.top>0)return c=o.indexOf(l.target),c===0?0:c-1;for(;c<n.length;c++)if(n[c].boundingClientRect.top<=0)l=n[c];else return o.indexOf(l.target);return o.indexOf(l.target)};(()=>{let n=new IntersectionObserver(c=>{let l=i(c)+(M<0?1:0);s===null&&e(l)},{rootMargin:"0px 0px -100% 0px",threshold:0});o.forEach(c=>{c&&n.observe(c)})})()},te=()=>{b(0)},Ye=()=>{b(parseInt(String(H(pe))))},$e=()=>{b(document.getElementById("comments"))},Xe=()=>{f.each(".menu .item:not(.title)",e=>{let t=e.querySelector("a[href]"),o=e.parentNode.parentNode;if(!t)return;let s=t.pathname===location.pathname||t.pathname===location.pathname.replace("index.html",""),r=!h.root.startsWith(t.pathname)&&location.pathname.startsWith(t.pathname),i=!t.onclick&&t.hostname===location.hostname&&(s||r);e.toggleClass("active",i),e.parentNode.querySelector(".active")&&o.hasClass("dropdown")?o.removeClass("active").addClass("expand"):o.removeClass("expand")})};u();var v={timer:void 0,lock:!1,show(){clearTimeout(this.timer),document.body.removeClass("loaded"),S.setAttribute("style","display:block"),v.lock=!1},hide(e){h.loader.start||(e=-1),this.timer=setTimeout(this.vanish,e||3e3)},vanish(){v.lock||(h.loader.start&&p(S,0),document.body.addClass("loaded"),v.lock=!0)}};function oe(){f.each(".overview .menu > .item",t=>{w.querySelector(".menu").appendChild(t.cloneNode(!0))}),S.addEventListener("click",v.vanish),T.addEventListener("click",k),document.querySelector(".dimmer").addEventListener("click",k),J.querySelector(".down").addEventListener("click",Ye),J.querySelector(".up").addEventListener("click",te),E||Ne(x(z,"div",{id:"tool",innerHTML:'<div class="item player"></div><div class="item contents"><i class="ic i-list-ol"></i></div><div class="item chat"><i class="ic i-comments"></i></div><div class="item back-to-top"><i class="ic i-arrow-up"></i><span>0%</span></div>'})),qe(E.querySelector(".player")),Oe(E.querySelector(".back-to-top")),Me(E.querySelector(".chat")),Re(E.querySelector(".contents")),P.addEventListener("click",te),ve.addEventListener("click",$e),B.addEventListener("click",k),je(N),document.querySelector("main").addEventListener("click",()=>{N.player.mini()}),(()=>{new IntersectionObserver(([t])=>{t.isIntersecting?(document.querySelectorAll(".parallax>use").forEach(o=>{o.classList.remove("stop-animation")}),document.querySelectorAll("#imgs .item").forEach(o=>{o.classList.remove("stop-animation")})):(document.querySelectorAll(".parallax>use").forEach(o=>{o.classList.add("stop-animation")}),document.querySelectorAll("#imgs .item").forEach(o=>{o.classList.add("stop-animation")}))},{root:null,threshold:.2}).observe(document.getElementById("waves")),new IntersectionObserver(([t])=>{t.isIntersecting?document.querySelectorAll(".with-love>i").forEach(o=>{o.classList.remove("stop-animation")}):document.querySelectorAll(".with-love>i").forEach(o=>{o.classList.add("stop-animation")})},{root:null,threshold:.2}).observe(document.querySelector(".with-love"))})()}u();u();var Ze=()=>{if(!document.querySelector(".index.wrap"))return;let e=new IntersectionObserver(t=>{t.forEach(o=>{o.target.hasClass("show")?e.unobserve(o.target):(o.isIntersecting||o.intersectionRatio>0)&&(o.target.addClass("show"),e.unobserve(o.target))})},{root:null,threshold:[.3]});f.each(".index.wrap article.item, .index.wrap section.item",t=>{e.observe(t)}),document.querySelector(".index.wrap .item:first-child").addClass("show"),f.each(".cards .item",t=>{["mouseenter","touchstart"].forEach(o=>{t.addEventListener(o,()=>{let s=document.querySelector(".cards .item.active");s&&s.removeClass("active"),t.addClass("active")},{passive:!0})}),["mouseleave"].forEach(o=>{t.addEventListener(o,()=>{t.removeClass("active")},{passive:!0})})})};u();u();var y=e=>{let t=document.querySelector(".theme .ic");e==="dark"?(j.setAttribute("data-theme",e),t.removeClass("i-sun"),t.addClass("i-moon")):(j.removeAttribute("data-theme"),t.removeClass("i-moon"),t.addClass("i-sun"))},Ve=()=>{h.auto_dark.enable&&(new Date().getHours()>=h.auto_dark.start||new Date().getHours()<=h.auto_dark.end?y("dark"):y())},se=e=>{j.getAttribute("data-theme")==="dark"&&(e="#222"),document.querySelector('meta[name="theme-color"]').setAttribute("content",e)},Je=()=>{window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",t=>{t.matches?y("dark"):y()});let e=D.get("theme");e?y(e):h.darkmode&&y("dark")};var pt=document.getElementById("waves"),F=()=>{be(H(w)),Le(H(z)),Ce(Q+H(pt)),ye!==window.innerWidth&&k(null,1),Se(window.innerHeight),Te(window.innerWidth)},Ke=()=>{let e=window.innerHeight,t=document.querySelector("main > .inner").offsetHeight,o=t>e?t-e:document.body.scrollHeight-e,s=window.scrollY>Q,r=window.scrollY>0;s?se("#FFF"):se("#222"),w.toggleClass("show",s),E.toggleClass("affix",r),ge.toggleClass("affix",r),m.toggleClass("affix",window.scrollY>we&&document.body.offsetWidth>=991),typeof O.y>"u"&&(O.y=window.scrollY),Ae(O.y-window.scrollY),M<0?(w.removeClass("up"),w.toggleClass("down",s)):M>0&&(w.removeClass("down"),w.toggleClass("up",s)),O.y=window.scrollY;let i=Math.round(Math.min(100*window.scrollY/o,100))+"%";P.querySelector("span").innerText!==i&&(P.querySelector("span").innerText=i),(document.getElementById("sidebar").hasClass("affix")||document.getElementById("sidebar").hasClass("on"))&&ue(document.querySelector(".percent"),i)},Qe=()=>{let e=document.querySelector('[rel="icon"]');document.addEventListener("visibilitychange",()=>{switch(document.visibilityState){case"hidden":e.setAttribute("href",V+h.favicon.hidden),document.title=LOCAL.favicon.hide,h.loader.switch&&v.show(),clearTimeout(fe);break;case"visible":e.setAttribute("href",V+h.favicon.normal),document.title=LOCAL.favicon.show,h.loader.switch&&v.hide(1e3),xe(setTimeout(()=>{document.title=he},2e3));break}},{passive:!0})};u();u();u();var et=32,tt="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",ot=typeof window>"u",re=!ot&&"loading"in HTMLImageElement.prototype,ne=!ot&&(!("onscroll"in window)||/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent));function st(e,t=document){return typeof e=="string"?[...t.querySelectorAll(e)]:e instanceof Element?[e]:[...e]}function rt(e,t){let o;return function(...s){o&&clearTimeout(o),o=setTimeout(()=>{o=void 0,e(...s)},t)}}var gt=Math.PI,lo=gt*2;function ce(e='img[loading="lazy"]',{hash:t=!0,hashType:o="blurhash",placeholderSize:s=et,updateSizesOnResize:r=!1,onImageLoad:i}={}){let a=new Set;for(let n of st(e)){let c=ae(n,{updateOnResize:r});if(r&&c&&a.add(c),!n.dataset.src&&!n.dataset.srcset)continue;if(ne||!re){nt(n),$(n),Y(n);continue}if(n.src||(n.src=tt),n.complete&&n.naturalWidth>0){ie(n,i);continue}let l=()=>ie(n,i);n.addEventListener("load",l,{once:!0}),a.add(()=>n.removeEventListener("load",l))}return()=>{for(let n of a)n();a.clear()}}function ie(e,t){if(e.parentElement?.tagName.toLowerCase()==="picture"){nt(e),$(e),Y(e),t?.(e);return}let s=new Image,{srcset:r,src:i,sizes:a}=e.dataset;if(a==="auto"){let n=it(e);n&&(s.sizes=`${n}px`)}else e.sizes&&(s.sizes=e.sizes);r&&(s.srcset=r),i&&(s.src=i),s.addEventListener("load",()=>{$(e),Y(e),t?.(e)},{once:!0})}var W=new WeakMap;function ae(e,t){if(e.dataset.sizes!=="auto")return;let o=it(e);if(o&&(e.sizes=`${o}px`),e.parentElement?.tagName.toLowerCase()==="picture"&&!t?.skipChildren&&[...e.parentElement.getElementsByTagName("source")].forEach(s=>ae(s,{skipChildren:!0})),t?.updateOnResize){if(!W.has(e)){let s=rt(()=>ae(e),500),r=new ResizeObserver(s);W.set(e,r),r.observe(e)}return()=>{let s=W.get(e);s&&(s.disconnect(),W.delete(e))}}}function Y(e){e.dataset.src&&(e.src=e.dataset.src,e.removeAttribute("data-src"))}function $(e){e.dataset.srcset&&(e.srcset=e.dataset.srcset,e.removeAttribute("data-srcset"))}function nt(e){let t=e.parentElement;t?.tagName.toLowerCase()==="picture"&&([...t.querySelectorAll("source[data-srcset]")].forEach($),[...t.querySelectorAll("source[data-src]")].forEach(Y))}function it(e){return e instanceof HTMLSourceElement?e.parentElement?.getElementsByTagName("img")[0]?.offsetWidth:e.offsetWidth}var at=()=>{G(),m.hasClass("on")&&p(m,0,()=>{m.removeClass("on"),T.removeClass("close")});let e=document.getElementById("main");e.innerHTML="",e.appendChild(S.lastChild.cloneNode(!0)),b(0)},le=async e=>{He(0),ke(window.location.href),ee("katex"),await import("./copy-tex-7OD4XF3I.js"),ee("mermaid");let t=new IntersectionObserver(function(s,r){s.forEach(i=>{if(i.isIntersecting){let a=i.target;a.style.backgroundImage=`url("${a.getAttribute("data-background-image")}")`,a.removeAttribute("data-background-image"),r.unobserve(a)}})},{root:null,threshold:.2});document.querySelectorAll("[data-background-image]").forEach(s=>{t.observe(s)}),e!==1&&f.each("script[data-pjax]",Ge),Ie(document.title),F(),Xe(),Fe(),We(),import("./post-W2MFZ4UN.js").then(({postBeauty:s})=>{s()});let o=document.getElementById("copyright");if(o){let s=new IntersectionObserver(r=>{r.forEach(i=>{i.isIntersecting&&(import("./comments-4B7EQWGM.js").then(({walinePageview:a,walineComment:n})=>{a(),n()}),s.disconnect())})},{root:null,threshold:.2});s.observe(o)}ce(),import("./comments-4B7EQWGM.js").then(async({walineRecentComments:s})=>{await s()}),Ue(),N.player.load(LOCAL.audio||h.audio||{}),v.hide(100),setTimeout(()=>{Be()},500),Ze()};u();function A(e,t,o){return e instanceof HTMLCollection||e instanceof NodeList||e instanceof Array?Array.prototype.forEach.call(e,t,o):t.call(o,e,0,[e])}var ut=(e,t)=>{e=typeof e=="string"?e.split(" "):e,e.forEach(t)};function de(e,t,o,s){ut(t,r=>{A(e,i=>{i.addEventListener(r,o,s)})})}function _(e,t,o={}){ut(t,s=>{let r=new CustomEvent(s,{bubbles:!0,cancelable:!0,...o});A(e,i=>{i.dispatchEvent(r)})})}function ct(e){let t=e.text||e.textContent||e.innerHTML||"",o=e.src||"",s=e.parentNode||document.querySelector("head")||document.documentElement,r=document.createElement("script");return t.match("document.write")?!1:(r.type="text/javascript",r.id=e.id,o!==""&&(r.src=o,r.async=!1),t!==""&&r.appendChild(document.createTextNode(t)),s.appendChild(r),(s instanceof HTMLHeadElement||s instanceof HTMLBodyElement)&&s.contains(r)&&s.removeChild(r),!0)}function vt(e){e.tagName.toLowerCase()==="script"&&ct(e),A(e.querySelectorAll("script"),t=>{let o=t;(!o.type||o.type.toLowerCase()==="text/javascript")&&(o.parentNode&&o.parentNode.removeChild(o),ct(o))})}function wt(e,t,o,s=document){e.forEach(r=>{A(s.querySelectorAll(r),t,o)})}var X=(()=>{let e=0;return()=>`pjax${new Date().getTime()}_${e++}`})();function mt(e,t){e.outerHTML=t.outerHTML,this.onSwitch()}function yt(e,t){e.innerHTML=t.innerHTML,t.className===""?e.removeAttribute("class"):e.className=t.className,this.onSwitch()}function lt(e,t){if(e.innerHTML=t.innerHTML,t.hasAttributes()){let o=t.attributes;for(let s=0;s<o.length;s++)e.attributes.setNamedItem(o[s].cloneNode())}this.onSwitch()}function Et({elements:e="a[href]",selectors:t=["title",".js-Pjax"],switches:o={},switchesOptions:s={},history:r=!0,scrollTo:i=0,scrollRestoration:a=!0,cacheBust:n=!0,timeout:c=0,currentUrlFullReload:l=!1}={}){let d={elements:e,selectors:t,switches:o,switchesOptions:s,history:r,scrollTo:i,scrollRestoration:a,cacheBust:n,timeout:c,currentUrlFullReload:l};return d.switches.head||(d.switches.head=lt),d.switches.body||(d.switches.body=lt),d}var Z="data-pjax-state";function dt(e,t){if(t.defaultPrevented||t.returnValue===!1)return;let o={...this.options},s=bt(e,t);if(s){e.setAttribute(Z,s);return}if(t.preventDefault(),this.options.currentUrlFullReload&&e.href===window.location.href.split("#")[0]){e.setAttribute(Z,"reload"),this.reload();return}e.setAttribute(Z,"load"),o.triggerElement=e,this.loadUrl(e.href,o)}function bt(e,t){return t.which>1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey?"modifier":e.protocol!==window.location.protocol||e.host!==window.location.host?"external":e.hash&&e.href.replace(e.hash,"")===window.location.href.replace(location.hash,"")?"anchor":e.href===window.location.href.split("#")[0]+"#"?"anchor-empty":null}function Lt(e){e.setAttribute(Z,""),de(e,"click",t=>dt.call(this,e,t)),de(e,"keyup",t=>{let o=t;o.keyCode===13&&dt.call(this,e,o)})}function Ct(e,t,o,s){if(s={...s||this.options},s.request=t,e===!1){_(document,"pjax:complete pjax:error",s);return}let r=window.history.state||{};window.history.replaceState({url:r.url||window.location.href,title:r.title||document.title,uid:r.uid||X(),scrollPos:[document.documentElement.scrollLeft||document.body.scrollLeft,document.documentElement.scrollTop||document.body.scrollTop]},document.title,window.location.href);let i=o;t.responseURL?o!==t.responseURL&&(o=t.responseURL):t.getResponseHeader("X-PJAX-URL")?o=t.getResponseHeader("X-PJAX-URL"):t.getResponseHeader("X-XHR-Redirected-To")&&(o=t.getResponseHeader("X-XHR-Redirected-To"));let a=document.createElement("a");a.href=i;let n=a.hash;a.href=o,n&&!a.hash&&(a.hash=n,o=a.href),this.state.href=o,this.state.options=s;try{this.loadContent(e,s)}catch(c){return _(document,"pjax:error",s),console.error("Pjax switch fail: ",c),this.latestChance(o)}}function St(e){switch(e.tagName.toLowerCase()){case"a":e.hasAttribute("data-pjax-state")||this.attachLink(e);break;default:throw new Error("theme-shokax-pjax can only be applied on <a>")}}function Tt(e,t,o){let s=new RegExp("([?&])"+t+"=.*?(&|$)","i"),r=e.indexOf("?")!==-1?"&":"?";return e.match(s)?e.replace(s,"$1"+t+"="+o+"$2"):e+r+t+"="+o}function At(e,t={},o){let s=t.requestOptions||{},r=(s.requestMethod||"GET").toUpperCase(),i=s.requestParams||null,a=null,n=new XMLHttpRequest,c=t.timeout;if(n.onreadystatechange=()=>{n.readyState===4&&(n.status===200?o(n.responseText,n,e,t):n.status!==0&&o(null,n,e,t))},n.onerror=l=>{console.error(l),o(null,n,e,t)},n.ontimeout=()=>{o(null,n,e,t)},i&&i.length){let l=i.map(d=>d.name+"="+d.value).join("&");switch(r){case"GET":e=e.split("?")[0],e+="?"+l;break;case"POST":a=l;break}}return t.cacheBust&&(e=Tt(e,"t",Date.now())),n.open(r,e,!0),n.timeout=c,n.setRequestHeader("X-Requested-With","XMLHttpRequest"),n.setRequestHeader("X-PJAX","true"),n.setRequestHeader("X-PJAX-Selectors",JSON.stringify(t.selectors)),n.send(a),n}function xt(e,t,o,s,r,i){let a=[];o.forEach(n=>{let c=s.querySelectorAll(n),l=r.querySelectorAll(n);if(c.length!==l.length)throw new Error(`DOM doesn't look the same on new loaded page: '${n}' - new ${c.length}, old ${l.length}`);A(c,(d,U)=>{let I=l[U],C=e[n]?e[n].bind(this,I,d,i,t[n]):mt.bind(this,I,d,i);a.push(C)},this)},this),this.state.numPendingSwitches=a.length,a.forEach(n=>{n()})}function Ht(e,t,o){for(let s of t){let r=e.querySelectorAll(s);for(let i=0;i<r.length;i++)if(r[i].contains(o))return!0}return!1}var L=class{constructor(t){this.state={numPendingSwitches:0,href:null,options:null},this.options=Et(t),this.options.scrollRestoration&&"scrollRestoration"in history&&(history.scrollRestoration="manual"),this.maxUid=this.lastUid=X(),this.parseDOM(document),de(window,"popstate",o=>{let s=o;if(s.state){let r={...this.options};r.url=s.state.url,r.title=s.state.title,r.history=!1,r.scrollPos=s.state.scrollPos,s.state.uid<this.lastUid?r.backward=!0:r.forward=!0,this.lastUid=s.state.uid,this.loadUrl(s.state.url,r)}})}getElements(t){return t.querySelectorAll(this.options.elements)}parseDOM(t){A(this.getElements(t),St,this)}refresh(t){this.parseDOM(t||document)}reload(){window.location.reload()}forEachSelectors(t,o,s){return wt.bind(this)(this.options.selectors,t,o,s)}switchSelectors(t,o,s,r){return xt.bind(this)(this.options.switches,this.options.switchesOptions,t,o,s,r)}latestChance(t){window.location=t}onSwitch(){_(window,"resize scroll"),this.state.numPendingSwitches--,this.state.numPendingSwitches===0&&this.afterAllSwitches()}loadContent(t,o){if(typeof t!="string"){_(document,"pjax:complete pjax:error",o);return}let s=document.implementation.createHTMLDocument("pjax"),r=/<html[^>]+>/gi,i=/\s?[a-z:]+(?:=['"][^'">]+['"])*/gi,a=t.match(r);if(a&&a.length&&(a=a[0].match(i),a.length&&(a.shift(),a.forEach(n=>{let c=n.trim().split("=");c.length===1?s.documentElement.setAttribute(c[0],"true"):s.documentElement.setAttribute(c[0],c[1].slice(1,-1))}))),s.documentElement.innerHTML=t,document.activeElement&&Ht(document,this.options.selectors,document.activeElement))try{document.activeElement.blur()}catch{}this.switchSelectors(this.options.selectors,s,document,o)}loadUrl(t,o){o=typeof o=="object"?{...this.options,...o}:{...this.options},this.abortRequest(this.request),_(document,"pjax:send",o),this.request=this.doRequest(t,o,this.handleResponse.bind(this))}afterAllSwitches(){var t,o,s;this.options.selectors.forEach(i=>{A(document.querySelectorAll(i),a=>{vt(a)})});let r=this.state;if(!((t=r.options)===null||t===void 0)&&t.history&&(window.history.state||(this.lastUid=this.maxUid=X(),window.history.replaceState({url:window.location.href,title:document.title,uid:this.maxUid,scrollPos:[0,0]},document.title)),this.lastUid=this.maxUid=X(),window.history.pushState({url:r.href,title:r.options.title,uid:this.maxUid,scrollPos:[0,0]},r.options.title,r.href)),this.forEachSelectors(i=>{this.parseDOM(i)},this),_(document,"pjax:complete pjax:success",r.options),!((o=r.options)===null||o===void 0)&&o.history){let i=document.createElement("a");if(i.href=this.state.href,i.hash){let a=i.hash.slice(1);a=decodeURIComponent(a);let n=0,c=document.getElementById(a)||document.getElementsByName(a)[0];if(c&&c.offsetParent)do n+=c.offsetTop,c=c.offsetParent;while(c);window.scrollTo(0,n)}else r.options.scrollTo!==!1&&(Array.isArray(r.options.scrollTo)?window.scrollTo(r.options.scrollTo[0],r.options.scrollTo[1]):window.scrollTo(0,r.options.scrollTo))}else!((s=r.options)===null||s===void 0)&&s.scrollRestoration&&r.options.scrollPos&&window.scrollTo(r.options.scrollPos[0],r.options.scrollPos[1]);this.state={numPendingSwitches:0,href:null,options:null}}abortRequest(t){t&&t.readyState<4&&(t.onreadystatechange=()=>{},t.abort())}};L.prototype.attachLink=Lt;L.prototype.doRequest=At;L.prototype.handleResponse=Ct;L.switches={innerHTML:yt,outerHTML:mt};u();function ht(){function e(){let t,o=document.querySelector(".theme").querySelector(".ic"),s=x(R,"div",{id:"neko",innerHTML:'<div class="planet"><div class="sun"></div><div class="moon"></div></div><div class="body"><div class="face"><section class="eyes left"><span class="pupil"></span></section><section class="eyes right"><span class="pupil"></span></section><span class="nose"></span></div></div>'}),r=()=>{p(s,{delay:2500,opacity:0},()=>{R.removeChild(s)})};o.hasClass("i-sun")?t=()=>{s.addClass("dark"),y("dark"),D.set("theme","dark"),r()}:(s.addClass("dark"),t=()=>{s.removeClass("dark"),y(),D.set("theme","light"),r()}),p(s,1,()=>{setTimeout(t,210)},()=>{q(s,"block")})}document.getElementById("rightNav").querySelector(".theme .ic").addEventListener("click",e)}var kt=async()=>{ht(),oe(),_e(new L({selectors:["head title",".languages",".twikoo",".pjax",".leancloud-recent-comment","script[data-config]"],cacheBust:!1})),h.quicklink.ignores=LOCAL.ignores,import("./quicklink-GPW232FX.js").then(({listen:e})=>{e(h.quicklink)}),Ve(),Qe(),Je(),document.querySelector("li.item.search > i").addEventListener("click",()=>{h.search!==null&&(K||Pe(x(R,"div",{id:"search",innerHTML:'<div class="inner"><div class="header"><span class="icon"><i class="ic i-search"></i></span><div class="search-input-container"></div><span class="close-btn"><i class="ic i-times-circle"></i></span></div><div class="results"><div class="inner"><div id="search-stats"></div><div id="search-hits"></div><div id="search-pagination"></div></div></div></div>'})),import("./search-LRQ4CM3P.js").then(({algoliaSearch:e})=>{e(Ee)}),f.each(".search",e=>{e.addEventListener("click",()=>{document.body.style.overflow="hidden",p(K,"shrinkIn",()=>{document.querySelector(".search-input").focus()})})}))},{once:!0,capture:!0}),import("./index.esm-BE2EMK3N.js").then(e=>{e.default(h.fireworks)}),window.addEventListener("scroll",Ke,{passive:!0}),window.addEventListener("resize",F,{passive:!0}),window.addEventListener("pjax:send",at,{passive:!0}),window.addEventListener("pjax:success",le,{passive:!0}),window.addEventListener("beforeunload",()=>{G()}),await le(1)};ze();window.addEventListener("DOMContentLoaded",kt,{passive:!0});console.log("%c Theme.ShokaX v"+h.version+" %c https://github.com/theme-shoka-x/hexo-theme-shokaX ","color: white; background: #e9546b; padding:5px 0;","padding:4px;border:1px solid #e9546b;");
/*! For license information please see siteInit.js.LEGAL.txt */
