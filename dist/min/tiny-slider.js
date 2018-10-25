var tns=function(){var t=window,Ii=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.msRequestAnimationFrame||function(t){return setTimeout(t,16)},e=window,Si=e.cancelAnimationFrame||e.mozCancelAnimationFrame||function(t){clearTimeout(t)};function Oi(){for(var t,e,n,i=arguments[0]||{},a=1,r=arguments.length;a<r;a++)if(null!==(t=arguments[a]))for(e in t)i!==(n=t[e])&&void 0!==n&&(i[e]=n);return i}function Pi(t){return 0<=["true","false"].indexOf(t)?JSON.parse(t):t}function Hi(t,e,n,i){return i&&t.setItem(e,n),n}function Ri(){var t=document,e=t.body;return e||((e=t.createElement("body")).fake=!0),e}var n=document.documentElement;function zi(t){var e="";return t.fake&&(e=n.style.overflow,t.style.background="",t.style.overflow=n.style.overflow="hidden",n.appendChild(t)),e}function Wi(t,e){t.fake&&(t.remove(),n.style.overflow=e,n.offsetHeight)}function qi(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):t.addRule(e,n,i)}function ji(t){return("insertRule"in t?t.cssRules:t.rules).length}function Fi(t,e,n){for(var i=0,a=t.length;i<a;i++)e.call(n,t[i],i)}var i="classList"in document.createElement("_"),Qi=i?function(t,e){return t.classList.contains(e)}:function(t,e){return 0<=t.className.indexOf(e)},Vi=i?function(t,e){Qi(t,e)||t.classList.add(e)}:function(t,e){Qi(t,e)||(t.className+=" "+e)},Xi=i?function(t,e){Qi(t,e)&&t.classList.remove(e)}:function(t,e){Qi(t,e)&&(t.className=t.className.replace(e,""))};function Yi(t,e){return t.hasAttribute(e)}function Ki(t,e){return t.getAttribute(e)}function r(t){return void 0!==t.item}function Ui(t,e){if(t=r(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function Gi(t,e){t=r(t)||t instanceof Array?t:[t];for(var n=(e=e instanceof Array?e:[e]).length,i=t.length;i--;)for(var a=n;a--;)t[i].removeAttribute(e[a])}function Ji(t){for(var e=[],n=0,i=t.length;n<i;n++)e.push(t[n]);return e}function _i(t,e){"none"!==t.style.display&&(t.style.display="none")}function Zi(t,e){"none"===t.style.display&&(t.style.display="")}function $i(t){return"none"!==window.getComputedStyle(t).display}function ta(e){if("string"==typeof e){var n=[e],i=e.charAt(0).toUpperCase()+e.substr(1);["Webkit","Moz","ms","O"].forEach(function(t){"ms"===t&&"transform"!==e||n.push(t+i)}),e=n}for(var t=document.createElement("fakeelement"),a=(e.length,0);a<e.length;a++){var r=e[a];if(void 0!==t.style[r])return r}return!1}function ea(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}var a=!1;try{var o=Object.defineProperty({},"passive",{get:function(){a=!0}});window.addEventListener("test",null,o)}catch(t){}var s=!!a&&{passive:!0};function na(t,e){for(var n in e){var i=("touchstart"===n||"touchmove"===n)&&s;t.addEventListener(n,e[n],i)}}function ia(t,e){for(var n in e){var i=0<=["touchstart","touchmove"].indexOf(n)&&s;t.removeEventListener(n,e[n],i)}}function aa(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(e,n){n.type=e,this.topics[e]&&this.topics[e].forEach(function(t){t(n,e)})}}}Object.keys||(Object.keys=function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}),"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var ra=function(m){m=Oi({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,controls:!0,controlsPosition:"",controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navPosition:"",navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayPosition:"",autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,lazyloadSelector:".tns-lazy-img",touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,freezable:!0,onInit:!1,useLocalStorage:!0},m||{});var L=document,h=window,s=13,u=32,l=33,c=34,f=35,d=36,v=37,p=38,y=39,g=40,e={},n=m.useLocalStorage;if(n){var t=navigator.userAgent,i=new Date;try{(e=h.localStorage)?(e.setItem(i,i),n=e.getItem(i)==i,e.removeItem(i)):n=!1,n||(e={})}catch(t){n=!1}n&&(e.tnsApp&&e.tnsApp!==t&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach(function(t){e.removeItem(t)}),localStorage.tnsApp=t)}for(var a,r,o,x,b,w,C,M=e.tC?Pi(e.tC):Hi(e,"tC",function(){var t=document,e=Ri(),n=zi(e),i=t.createElement("div"),a=!1;e.appendChild(i);try{for(var r,o="(10px * 10)",s=["calc"+o,"-moz-calc"+o,"-webkit-calc"+o],u=0;u<3;u++)if(r=s[u],i.style.width=r,100===i.offsetWidth){a=r.replace(o,"");break}}catch(t){}return e.fake?Wi(e,n):i.remove(),a}(),n),A=e.tPL?Pi(e.tPL):Hi(e,"tPL",function(){var t,e=document,n=Ri(),i=zi(n),a=e.createElement("div"),r=e.createElement("div"),o="";a.className="tns-t-subp2",r.className="tns-t-ct";for(var s=0;s<70;s++)o+="<div></div>";return r.innerHTML=o,a.appendChild(r),n.appendChild(a),t=Math.abs(a.getBoundingClientRect().left-r.children[67].getBoundingClientRect().left)<2,n.fake?Wi(n,i):a.remove(),t}(),n),D=e.tMQ?Pi(e.tMQ):Hi(e,"tMQ",(r=document,o=Ri(),x=zi(o),b=r.createElement("div"),w=r.createElement("style"),C="@media all and (min-width:1px){.tns-mq-test{position:absolute}}",w.type="text/css",b.className="tns-mq-test",o.appendChild(w),o.appendChild(b),w.styleSheet?w.styleSheet.cssText=C:w.appendChild(r.createTextNode(C)),a=window.getComputedStyle?window.getComputedStyle(b).position:b.currentStyle.position,o.fake?Wi(o,x):b.remove(),"absolute"===a),n),T=e.tTf?Pi(e.tTf):Hi(e,"tTf",ta("transform"),n),E=e.t3D?Pi(e.t3D):Hi(e,"t3D",function(t){if(!t)return!1;if(!window.getComputedStyle)return!1;var e,n=document,i=Ri(),a=zi(i),r=n.createElement("p"),o=9<t.length?"-"+t.slice(0,-9).toLowerCase()+"-":"";return o+="transform",i.insertBefore(r,null),r.style[t]="translate3d(1px,1px,1px)",e=window.getComputedStyle(r).getPropertyValue(o),i.fake?Wi(i,a):r.remove(),void 0!==e&&0<e.length&&"none"!==e}(T),n),B=e.tTDu?Pi(e.tTDu):Hi(e,"tTDu",ta("transitionDuration"),n),k=e.tTDe?Pi(e.tTDe):Hi(e,"tTDe",ta("transitionDelay"),n),N=e.tADu?Pi(e.tADu):Hi(e,"tADu",ta("animationDuration"),n),I=e.tADe?Pi(e.tADe):Hi(e,"tADe",ta("animationDelay"),n),S=e.tTE?Pi(e.tTE):Hi(e,"tTE",ea(B,"Transition"),n),O=e.tAE?Pi(e.tAE):Hi(e,"tAE",ea(N,"Animation"),n),P=h.console&&"function"==typeof h.console.warn,H=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],R={},z=H.length;z--;){var W=H[z];if("string"==typeof m[W]){var q=m[W],j=L.querySelector(q);if(R[W]=q,!j||!j.nodeName)return void(P&&console.warn("Can't find",m[W]));m[W]=j}}if(!(m.container.children.length<1)){var F=m.responsive,Q=m.nested,V="carousel"===m.mode;if(F){0 in F&&(m=Oi(m,F[0]),delete F[0]);var X={};for(var Y in F){var K=F[Y];K="number"==typeof K?{items:K}:K,X[Y]=K}F=X,X=null}if(V&&"outer"!==Q||function t(e){for(var n in e)V||("slideBy"===n&&(e[n]="page"),"edgePadding"===n&&(e[n]=!1),"autoHeight"===n&&(e[n]=!1)),"outer"===Q&&"autoHeight"===n&&(e[n]=!0),"responsive"===n&&t(e[n])}(m),!V){m.axis="horizontal",m.slideBy="page",m.edgePadding=!1;var U=m.animateIn,G=m.animateOut,J=m.animateDelay,_=m.animateNormal}var Z,$="horizontal"===m.axis,tt=L.createElement("div"),et=L.createElement("div"),nt=m.container,it=nt.parentNode,at=nt.outerHTML,rt=nt.children,ot=rt.length,st=yn(),ut=!1;F&&On();var lt,ct,ft,dt,vt,pt,mt,ht=m.autoWidth,yt=bn("fixedWidth"),gt=bn("edgePadding"),xt=bn("gutter"),bt=gn(),wt=ht?1:Math.floor(bn("items")),Ct=bn("slideBy"),Mt=m.viewportMax||m.fixedWidthViewportWidth,At=bn("arrowKeys"),Tt=bn("speed"),Et=m.rewind,Bt=!Et&&m.loop,kt=bn("autoHeight"),Nt=bn("controls"),Lt=bn("controlsText"),Dt=bn("nav"),It=bn("touch"),St=bn("mouseDrag"),Ot=bn("autoplay"),Pt=bn("autoplayTimeout"),Ht=bn("autoplayText"),Rt=bn("autoplayHoverPause"),zt=bn("autoplayResetOnVisibility"),Wt=(mt=document.createElement("style"),pt&&mt.setAttribute("media",pt),document.querySelector("head").appendChild(mt),mt.sheet?mt.sheet:mt.styleSheet),qt=m.lazyload,jt=m.lazyloadSelector,Ft=[],Qt=Bt?(dt=function(){{if(ht||yt&&!Mt)return ot-1;var t=yt?"fixedWidth":"items",e=[];if((yt||m[t]<ot)&&e.push(m[t]),F)for(var n in F){var i=F[n][t];i&&(yt||i<ot)&&e.push(i)}return e.length||e.push(0),Math.ceil(yt?Mt/Math.min.apply(null,e):Math.max.apply(null,e))}}(),vt=V?Math.ceil((5*dt-ot)/2):4*dt-ot,vt=Math.max(dt,vt),xn("edgePadding")?vt+1:vt):0,Vt=V?ot+2*Qt:ot+Qt,Xt=!(!yt&&!ht||Bt),Yt=yt?ai():null,Kt=!V||!Bt,Ut=$?"left":"top",Gt="",Jt="",_t=yt?function(){return Math.floor(-Yt/(yt+xt))+1}:ht?function(){for(var t=Vt,e=t-1;t--;)lt[t]>-Yt&&(e=t);return e}:function(){return Bt||V?Math.max(0,Vt-Math.ceil(wt)):Vt-1},Zt=mn(bn("startIndex")),$t=Zt,te=(pn(),0),ee=ht?null:_t(),ne=m.swipeAngle,ie=!ne||"?",ae=!1,re=m.onInit,oe=new aa,se=" tns-slider tns-"+m.mode,ue=nt.id||(ft=window.tnsId,window.tnsId=ft?ft+1:1,"tns"+window.tnsId),le=bn("disable"),ce=!1,fe=m.freezable,de=!(!fe||ht)&&Sn(),ve=!1,pe={click:vi,keydown:function(t){switch((t=wi(t)).keyCode){case v:case p:case l:Oe.disabled||vi(t,-1);break;case y:case g:case c:Pe.disabled||vi(t,1);break;case d:di("first",t);break;case f:di("last",t)}}},me={click:function(t){ae&&fi();var e=(t=wi(t)).target||t.srcElement;for(;e!==We&&!Yi(e,"data-nav");)e=e.parentNode;Yi(e,"data-nav")&&di(Qe=[].indexOf.call(ze,e),t)},keydown:function(t){var e=L.activeElement;if(!Yi(e,"data-nav"))return;var n=(t=wi(t)).keyCode,i=[].indexOf.call(ze,e),a=je.length,r=je.indexOf(i);m.navContainer&&(a=ot,r=i);function o(t){return m.navContainer?t:je[t]}switch(n){case v:case l:0<r&&bi(ze[o(r-1)]);break;case p:case d:0<r&&bi(ze[o(0)]);break;case y:case c:r<a-1&&bi(ze[o(r+1)]);break;case g:case f:r<a-1&&bi(ze[o(a-1)]);break;case s:case u:di(Qe=i,t)}}},he={mouseover:function(){Je&&(mi(),_e=!0)},mouseout:function(){_e&&(pi(),_e=!1)}},ye={visibilitychange:function(){L.hidden?Je&&(mi(),$e=!0):$e&&(pi(),$e=!1)}},ge={keydown:function(t){switch((t=wi(t)).keyCode){case v:vi(t,-1);break;case y:vi(t,1)}}},xe={touchstart:Ti,touchmove:Ei,touchend:ki,touchcancel:ki},be={mousedown:Ti,mousemove:Ei,mouseup:ki,mouseleave:ki},we=xn("controls"),Ce=xn("nav"),Me=!!ht||m.navAsThumbnails,Ae=xn("autoplay"),Te=xn("touch"),Ee=xn("mouseDrag"),Be="tns-slide-active",ke="tns-complete",Ne={load:function(t){qn(Ci(t))},error:function(t){jn(Ci(t))}};if(we)var Le,De,Ie=m.controlsContainer,Se=m.controlsContainer?m.controlsContainer.outerHTML:"",Oe=m.prevButton,Pe=m.nextButton,He=m.prevButton?m.prevButton.outerHTML:"",Re=m.nextButton?m.nextButton.outerHTML:"";if(Ce)var ze,We=m.navContainer,qe=m.navContainer?m.navContainer.outerHTML:"",je=[],Fe=je,Qe=-1,Ve=hn(),Xe=Ve,Ye="tns-nav-active",Ke="Carousel Page ",Ue=" (Current Slide)";if(Ae)var Ge,Je,_e,Ze,$e,tn="forward"===m.autoplayDirection?1:-1,en=m.autoplayButton,nn=m.autoplayButton?m.autoplayButton.outerHTML:"",an=["<span class='tns-visually-hidden'>"," animation</span>"];if(Te||Ee)var rn,on={},sn={},un=!1,ln=0,cn=$?function(t,e){return t.x-e.x}:function(t,e){return t.y-e.y};ht||vn(le||de),T&&(Ut=T,Gt="translate",E?(Gt+=$?"3d(":"3d(0px, ",Jt=$?", 0px, 0px)":", 0px)"):(Gt+=$?"X(":"Y(",Jt=")")),function(){F&&On();!function(){xn("gutter");tt.className="tns-outer",et.className="tns-inner",tt.id=ue+"-ow",et.id=ue+"-iw",kt&&(et.className+=" tns-ah");""===nt.id&&(nt.id=ue);if(se+=A||ht?" tns-subpixel":" tns-no-subpixel",se+=M?" tns-calc":" tns-no-calc",se+=" tns-"+m.axis,nt.className+=se,V){var t=L.createElement("div");t.className="tns-ovh",tt.appendChild(t),t.appendChild(et)}else tt.appendChild(et);it.insertBefore(tt,nt),et.appendChild(nt)}();for(var t=0;t<ot;t++){var e=rt[t];e.id||(e.id=ue+"-item"+t),Vi(e,"tns-item"),!V&&_&&Vi(e,_),Ui(e,{"aria-hidden":"true",tabindex:"-1"})}if(Qt){for(var n=L.createDocumentFragment(),i=L.createDocumentFragment(),a=Qt;a--;){var r=a%ot,o=rt[r].cloneNode(!0);if(Gi(o,"id"),i.insertBefore(o,i.firstChild),V){var s=rt[ot-1-r].cloneNode(!0);Gi(s,"id"),n.appendChild(s)}}nt.insertBefore(n,nt.firstChild),nt.appendChild(i),rt=nt.children}(function(){for(var t=Zt,e=Zt+Math.min(ot,wt);t<e;t++){var n=rt[t];Ui(n,{"aria-hidden":"false"}),Gi(n,["tabindex"]),Vi(n,Be),V||(n.style.left=100*(t-Zt)/wt+"%",Vi(n,U),Xi(n,_))}$&&(A||ht?(qi(Wt,"#"+ue+" > .tns-item","font-size:"+h.getComputedStyle(rt[0]).fontSize+";",ji(Wt)),qi(Wt,"#"+ue,"font-size:0;",ji(Wt))):V&&Fi(rt,function(t,e){var n;t.style.marginLeft=(n=e,M?M+"("+100*n+"% / "+Vt+")":100*n/Vt+"%")}));if(D){var i=wn(m.edgePadding,m.gutter,m.fixedWidth,m.speed,m.autoHeight);qi(Wt,"#"+ue+"-iw",i,ji(Wt)),V&&(i=$&&!ht?"width:"+Cn(m.fixedWidth,m.gutter,m.items)+";":"",B&&(i+=En(Tt)),qi(Wt,"#"+ue,i,ji(Wt))),i=$&&!ht?Mn(m.fixedWidth,m.gutter,m.items):"",m.gutter&&(i+=An(m.gutter)),V||(B&&(i+=En(Tt)),N&&(i+=Bn(Tt))),i&&qi(Wt,"#"+ue+" > .tns-item",i,ji(Wt))}else{et.style.cssText=wn(gt,xt,yt,kt),V&&$&&!ht&&(nt.style.width=Cn(yt,xt,wt));var i=$&&!ht?Mn(yt,xt,wt):"";xt&&(i+=An(xt)),i&&qi(Wt,"#"+ue+" > .tns-item",i,ji(Wt))}if(F&&D)for(var a in F){a=parseInt(a);var r=F[a],i="",o="",s="",u="",l=ht?null:bn("items",a),c=bn("fixedWidth",a),f=bn("speed",a),d=bn("edgePadding",a),v=bn("autoHeight",a),p=bn("gutter",a);("edgePadding"in r||"gutter"in r)&&(o="#"+ue+"-iw{"+wn(d,p,c,f,v)+"}"),V&&$&&!ht&&("fixedWidth"in r||"items"in r||yt&&"gutter"in r)&&(s="width:"+Cn(c,p,l)+";"),B&&"speed"in r&&(s+=En(f)),s&&(s="#"+ue+"{"+s+"}"),("fixedWidth"in r||yt&&"gutter"in r||!V&&"items"in r)&&(u+=Mn(c,p,l)),"gutter"in r&&(u+=An(p)),!V&&"speed"in r&&(B&&(u+=En(f)),N&&(u+=Bn(f))),u&&(u="#"+ue+" > .tns-item{"+u+"}"),(i=o+s+u)&&Wt.insertRule("@media (min-width: "+a/16+"em) {"+i+"}",Wt.cssRules.length)}})(),kn()}();var fn=Bt?V?function(){var t=te,e=ee;t+=Ct,e-=Ct,gt?(t+=1,e-=1):yt&&bt%(yt+xt)&&(e-=1),Qt&&(e<Zt?Zt-=ot:Zt<t&&(Zt+=ot))}:function(){if(ee<Zt)for(;te+ot<=Zt;)Zt-=ot;else if(Zt<te)for(;Zt<=ee-ot;)Zt+=ot}:function(){Zt=Math.max(te,Math.min(ee,Zt))},dn=V?function(){var e,n,i,a,t,r,o,s,u,l,c;ni(nt,""),B||!Tt?(si(),Tt&&$i(nt)||fi()):(e=nt,n=Ut,i=Gt,a=Jt,t=ri(),r=Tt,o=fi,s=Math.min(r,10),u=0<=t.indexOf("%")?"%":"px",t=t.replace(u,""),l=Number(e.style[n].replace(i,"").replace(a,"").replace(u,"")),c=(t-l)/r*s,setTimeout(function t(){r-=s,l+=c,e.style[n]=i+l+u+a,0<r?setTimeout(t,s):o()},s)),$||Ni()}:function(){Ft=[];var t={};t[S]=t[O]=fi,ia(rt[$t],t),na(rt[Zt],t),ui($t,U,G,!0),ui(Zt,_,U),S&&O&&Tt&&$i(nt)||fi()};return{version:"2.8.7",getInfo:Di,events:oe,goTo:di,play:function(){Ot&&!Je&&(yi(),Ze=!1)},pause:function(){Je&&(gi(),Ze=!0)},isOn:ut,updateSliderHeight:Gn,refresh:kn,destroy:function(){if(Wt.disabled=!0,Wt.ownerNode&&Wt.ownerNode.remove(),ia(h,{resize:Dn}),At&&ia(L,ge),Ie&&ia(Ie,pe),We&&ia(We,me),ia(nt,he),ia(nt,ye),en&&ia(en,{click:xi}),Ot&&clearInterval(Ge),V&&S){var t={};t[S]=fi,ia(nt,t)}It&&ia(nt,xe),St&&ia(nt,be);var r=[at,Se,He,Re,qe,nn];for(var e in H.forEach(function(t,e){var n="container"===t?tt:m[t];if("object"==typeof n){var i=!!n.previousElementSibling&&n.previousElementSibling,a=n.parentNode;n.outerHTML=r[e],m[t]=i?i.nextElementSibling:a.firstElementChild}}),H=U=G=J=_=$=tt=et=nt=it=at=rt=ot=Z=st=ht=yt=gt=xt=bt=wt=Ct=Mt=At=Tt=Et=Bt=kt=Wt=qt=lt=Ft=Qt=Vt=Xt=Yt=Kt=Ut=Gt=Jt=_t=Zt=$t=te=ee=ne=ie=ae=re=oe=se=ue=le=ce=fe=de=ve=pe=me=he=ye=ge=xe=be=we=Ce=Me=Ae=Te=Ee=Be=ke=Ne=ct=Nt=Lt=Ie=Se=Oe=Pe=Le=De=Dt=We=qe=ze=je=Fe=Qe=Ve=Xe=Ye=Ke=Ue=Ot=Pt=tn=Ht=Rt=en=nn=zt=an=Ge=Je=_e=Ze=$e=on=sn=rn=un=ln=cn=It=St=null,this)"rebuild"!==e&&(this[e]=null);ut=!1},rebuild:function(){return ra(Oi(m,R))}}}function vn(t){t&&(Nt=Dt=It=St=At=Ot=Rt=zt=!1)}function pn(){for(var t=V?Zt-Qt:Zt;t<0;)t+=ot;return t%ot+1}function mn(t){return t=t?Math.max(0,Math.min(Bt?ot-1:ot-wt,t)):0,V?t+Qt:t}function hn(t){for(null==t&&(t=Zt),V&&(t-=Qt);t<0;)t+=ot;return Math.floor(t%ot)}function yn(){return h.innerWidth||L.documentElement.clientWidth||L.body.clientWidth}function gn(){return function t(e){return e.clientWidth||t(e.parentNode)}(it)-(2*gt-xt)}function xn(t){if(m[t])return!0;if(F)for(var e in F)if(F[e][t])return!0;return!1}function bn(t,e){if(null==e&&(e=st),"items"===t&&yt)return Math.floor(bt/(yt+xt))||1;var n=m[t];if(F)for(var i in F)e>=parseInt(i)&&t in F[i]&&(n=F[i][t]);return"slideBy"===t&&"page"===n&&(n=bn("items")),V||"slideBy"!==t&&"items"!==t||(n=Math.floor(n)),n}function wn(t,e,n,i,a){var r="";if(void 0!==t){var o=t;e&&(o-=e),r=$?"margin: 0 "+o+"px 0 "+t+"px;":"margin: "+t+"px 0 "+o+"px 0;"}else if(e&&!n){var s="-"+e+"px";r="margin: 0 "+($?s+" 0 0":"0 "+s+" 0")+";"}return a&&B&&i&&(r+=En(i)),r}function Cn(t,e,n){return t?(t+e)*Vt+"px":M?M+"("+100*Vt+"% / "+n+")":100*Vt/n+"%"}function Mn(t,e,n){var i;if(t)i=t+e+"px";else{V||(n=Math.floor(n));var a=V?Vt:n;i=M?M+"(100% / "+a+")":100/a+"%"}return i="width:"+i,"inner"!==Q?i+";":i+" !important;"}function An(t){var e="";!1!==t&&(e=($?"padding-":"margin-")+($?"right":"bottom")+": "+t+"px;");return e}function Tn(t,e){var n=t.substring(0,t.length-e).toLowerCase();return n&&(n="-"+n+"-"),n}function En(t){return Tn(B,18)+"transition-duration:"+t/1e3+"s;"}function Bn(t){return Tn(N,17)+"animation-duration:"+t/1e3+"s;"}function kn(){if(xn("autoHeight")||ht||!$){var t=nt.querySelectorAll("img");function e(){if(ht){var e=Bt?Zt:ot-1;!function t(){rt[e-1].getBoundingClientRect().right.toFixed(2)===rt[e].getBoundingClientRect().left.toFixed(2)?n():setTimeout(function(){t()},16)}()}else n();function n(){$&&!ht||(Jn(),ht?(Yt=ai(),fe&&(de=Sn()),ee=_t(),vn(le||de)):Ni()),V&&oi(),Nn(),Ln()}}Fi(t,function(t){var e=t.src;e.indexOf("data:image")<0?(na(t,Ne),t.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",t.src=e,Vi(t,"loading"),Qn(t)):qt||qn(t)}),Ii(function(){Yn(Ji(t),function(){ct=!0})}),!ht&&$&&(t=Vn(Zt,wt)),qt?e():Ii(function(){Yn(Ji(t),e)})}else V&&oi(),Nn(),Ln()}function Nn(){if(Ae){var t=Ot?"stop":"start";en?Ui(en,{"data-action":t}):m.autoplayButtonOutput&&(tt.insertAdjacentHTML("top"!==m.autoplayPosition?"beforeend":"afterbegin",'<button data-action="'+t+'" type="button">'+an[0]+t+an[1]+Ht[0]+"</button>"),en=tt.querySelector("[data-action]")),en&&na(en,{click:xi}),Ot&&(yi(),Rt&&na(nt,he),zt&&na(nt,ye))}if(Ce){var e=V?Qt:0;if(We){Ui(We,{"aria-label":"Carousel Pagination"}),ze=We.children;for(var n=0;n<ot;n++){var i=ze[n];i&&Ui(i,{"data-nav":n,tabindex:"-1","aria-controls":rt[e+n].id,"aria-label":Ke+(n+1)})}}else{var a="",r=Me?"":'style="display:none"';for(n=0;n<ot;n++)a+='<button data-nav="'+n+'" tabindex="-1" aria-controls="'+rt[e+n].id+'" '+r+' type="button" aria-label="'+Ke+(n+1)+'"></button>';a='<div class="tns-nav" aria-label="Carousel Pagination">'+a+"</div>",tt.insertAdjacentHTML("top"!==m.navPosition?"beforeend":"afterbegin",a),We=tt.querySelector(".tns-nav"),ze=We.children}if(Li(),B){var o=B.substring(0,B.length-18).toLowerCase(),s="transition: all "+Tt/1e3+"s";o&&(s="-"+o+"-"+s),qi(Wt,"[aria-controls^="+ue+"-item]",s,ji(Wt))}Ui(ze[Ve],{tabindex:"0","aria-label":Ke+(Ve+1)+Ue}),Vi(ze[Ve],Ye),na(We,me)}we&&(Ie&&Oe&&Pe||(tt.insertAdjacentHTML("top"!==m.controlsPosition?"beforeend":"afterbegin",'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="'+ue+'" type="button">'+Lt[0]+'</button><button data-controls="next" tabindex="-1" aria-controls="'+ue+'" type="button">'+Lt[1]+"</button></div>"),Ie=tt.querySelector(".tns-controls"),Oe=Ie.children[0],Pe=Ie.children[1]),m.controlsContainer&&(Ui(Ie,{"aria-label":"Carousel Navigation",tabindex:"0"}),Ui(Ie.children,{"aria-controls":ue,tabindex:"-1"})),(m.controlsContainer||m.prevButton&&m.nextButton)&&(Ui(Oe,{"data-controls":"prev"}),Ui(Pe,{"data-controls":"next"})),Le=Zn(Oe),De=Zn(Pe),ei(),Ie?na(Ie,pe):(na(Oe,pe),na(Pe,pe))),Pn()}function Ln(){if(V&&S){var t={};t[S]=fi,na(nt,t)}It&&na(nt,xe),St&&na(nt,be),At&&na(L,ge),"inner"===Q?oe.on("outerResized",function(){In(),oe.emit("innerLoaded",Di())}):(F||yt||ht||kt||!$)&&na(h,{resize:Dn}),"outer"===Q?oe.on("innerLoaded",Xn):kt&&!le&&Xn(),Wn(),le?zn():de&&Rn(),oe.on("indexChanged",Kn),"inner"===Q&&oe.emit("innerLoaded",Di()),"function"==typeof re&&re(Di()),ut=!0}function Dn(t){Ii(function(){In(wi(t))})}function In(t){if(ut){"outer"===Q&&oe.emit("outerResized",Di(t)),st=yn();var e,n=Z,i=!1;F&&(On(),(e=n!==Z)&&oe.emit("newBreakpointStart",Di(t)));var a,r,o,s,u=wt,l=le,c=de,f=At,d=Nt,v=Dt,p=It,m=St,h=Ot,y=Rt,g=zt,x=Zt;if(e){var b=yt,w=kt,C=Lt,M=Ht;if(!D)var A=xt,T=gt}if(At=bn("arrowKeys"),Nt=bn("controls"),Dt=bn("nav"),It=bn("touch"),St=bn("mouseDrag"),Ot=bn("autoplay"),Rt=bn("autoplayHoverPause"),zt=bn("autoplayResetOnVisibility"),e&&(le=bn("disable"),yt=bn("fixedWidth"),Tt=bn("speed"),kt=bn("autoHeight"),Lt=bn("controlsText"),Ht=bn("autoplayText"),Pt=bn("autoplayTimeout"),D||(gt=bn("edgePadding"),xt=bn("gutter"))),vn(le),bt=gn(),$&&!ht||le||(Jn(),$||(Ni(),i=!0)),(yt||ht)&&(Yt=ai(),ee=_t()),(e||yt)&&(wt=bn("items"),Ct=bn("slideBy"),(r=wt!==u)&&(yt||ht||(ee=_t()),fn())),e&&le!==l&&(le?zn():function(){if(!ce)return;if(Wt.disabled=!1,nt.className+=se,oi(),Bt)for(var t=Qt;t--;)V&&Zi(rt[t]),Zi(rt[Vt-t-1]);if(!V)for(var e=Zt,n=Zt+ot;e<n;e++){var i=rt[e],a=e<Zt+wt?U:_;i.style.left=100*(e-Zt)/wt+"%",Vi(i,a)}Hn(),ce=!1}()),fe&&(e||yt||ht)&&(de=Sn())!==c&&(de?(si(ri(mn(0))),Rn()):(!function(){if(!ve)return;gt&&D&&(et.style.margin="");if(Qt)for(var t="tns-transparent",e=Qt;e--;)V&&Xi(rt[e],t),Xi(rt[Vt-e-1],t);Hn(),ve=!1}(),i=!0)),vn(le||de),Ot||(Rt=zt=!1),At!==f&&(At?na(L,ge):ia(L,ge)),Nt!==d&&(Nt?Ie?Zi(Ie):(Oe&&Zi(Oe),Pe&&Zi(Pe)):Ie?_i(Ie):(Oe&&_i(Oe),Pe&&_i(Pe))),Dt!==v&&(Dt?(Zi(We),Li()):_i(We)),It!==p&&(It?na(nt,xe):ia(nt,xe)),St!==m&&(St?na(nt,be):ia(nt,be)),Ot!==h&&(Ot?(en&&Zi(en),Je||Ze||yi()):(en&&_i(en),Je&&gi())),Rt!==y&&(Rt?na(nt,he):ia(nt,he)),zt!==g&&(zt?na(L,ye):ia(L,ye)),e&&(yt!==b&&(i=!0),kt!==w&&(kt||(et.style.height="")),Nt&&Lt!==C&&(Oe.innerHTML=Lt[0],Pe.innerHTML=Lt[1]),en&&Ht!==M)){var E=Ot?1:0,B=en.innerHTML,k=B.length-M[E].length;B.substring(k)===M[E]&&(en.innerHTML=B.substring(0,k)+Ht[E])}if((a=Zt!==x)&&(oe.emit("indexChanged",Di()),i=!0),r&&(a||Kn(),V||function(){for(var t=Zt+Math.min(ot,wt),e=Vt;e--;){var n=rt[e];Zt<=e&&e<t?(Vi(n,"tns-moving"),n.style.left=100*(e-Zt)/wt+"%",Vi(n,U),Xi(n,_)):n.style.left&&(n.style.left="",Vi(n,_),Xi(n,U)),Xi(n,G)}setTimeout(function(){Fi(rt,function(t){Xi(t,"tns-moving")})},300)}()),!le&&!de){if(e&&!D&&(gt===T&&xt===A||(et.style.cssText=wn(gt,xt,yt,Tt,kt)),$)){V&&(nt.style.width=Cn(yt,xt,wt));var N=Mn(yt,xt,wt)+An(xt);s=ji(o=Wt)-1,"deleteRule"in o?o.deleteRule(s):o.removeRule(s),qi(Wt,"#"+ue+" > .tns-item",N,ji(Wt))}kt&&Xn(),i&&(oi(),$t=Zt)}e&&oe.emit("newBreakpointEnd",Di(t))}}function Sn(){return yt||ht?yt?(yt+xt)*ot<=bt+2*gt:(Bt?lt[ot]:ii())<=bt+2*gt:ot<=wt}function On(){for(var t in Z=0,F)(t=parseInt(t))<=st&&(Z=t)}function Pn(){!Ot&&en&&_i(en),!Dt&&We&&_i(We),Nt||(Ie?_i(Ie):(Oe&&_i(Oe),Pe&&_i(Pe)))}function Hn(){Ot&&en&&Zi(en),Dt&&We&&Zi(We),Nt&&(Ie?Zi(Ie):(Oe&&Zi(Oe),Pe&&Zi(Pe)))}function Rn(){if(!ve){if(gt&&(et.style.margin="0px"),Qt)for(var t="tns-transparent",e=Qt;e--;)V&&Vi(rt[e],t),Vi(rt[Vt-e-1],t);Pn(),ve=!0}}function zn(){if(!ce){if(Wt.disabled=!0,nt.className=nt.className.replace(se.substring(1),""),Gi(nt,["style"]),Bt)for(var t=Qt;t--;)V&&_i(rt[t]),_i(rt[Vt-t-1]);if($&&V||Gi(et,["style"]),!V)for(var e=Zt,n=Zt+ot;e<n;e++){var i=rt[e];Gi(i,["style"]),Xi(i,U),Xi(i,_)}Pn(),ce=!0}}function Wn(){if(qt&&!le){var t=Zt;if(ht)for(var e=Zt+1,n=e,i=lt[Zt]+bt+gt-xt;lt[e]<i;)n=++e;else n=Zt+wt;for(gt&&(t-=1,ht||(n+=1)),t=Math.floor(Math.max(t,0)),n=Math.ceil(Math.min(n,Vt));t<n;t++)Fi(rt[t].querySelectorAll(jt),function(t){if(!Qi(t,ke)){var e={};e[S]=function(t){t.stopPropagation()},na(t,e),na(t,Ne);var n=Ki(t,"data-srcset");n&&(t.srcset=n),t.src=Ki(t,"data-src"),Vi(t,"loading"),Qn(t)}})}}function qn(t){Vi(t,"loaded"),Fn(t)}function jn(t){Vi(t,"failed"),Fn(t)}function Fn(t){Vi(t,"tns-complete"),Xi(t,"loading"),ia(t,Ne)}function Qn(t){t.complete&&(0!==t.naturalWidth?qn(t):jn(t))}function Vn(t,e){for(var n=[],i=t,a=Math.min(t+e,Vt);i<a;i++)Fi(rt[i].querySelectorAll("img"),function(t){n.push(t)});return n}function Xn(){var t=kt?Vn(Zt,wt):Vn(Qt,ot);Ii(function(){Yn(t,Gn)})}function Yn(n,t){return ct?t():(n.forEach(function(t,e){Qi(t,ke)&&n.splice(e,1)}),n.length?void Ii(function(){Yn(n,t)}):t())}function Kn(){Wn(),function(){for(var t=Zt+Math.min(ot,wt),e=Vt;e--;){var n=rt[e];Zt<=e&&e<t?Yi(n,"tabindex")&&(Ui(n,{"aria-hidden":"false"}),Gi(n,["tabindex"]),Vi(n,Be)):(Yi(n,"tabindex")||Ui(n,{"aria-hidden":"true",tabindex:"-1"}),Qi(n,Be)&&Xi(n,Be))}}(),ei(),Li(),function(){if(Dt&&(Ve=-1!==Qe?Qe:hn(),Qe=-1,Ve!==Xe)){var t=ze[Xe],e=ze[Ve];Ui(t,{tabindex:"-1","aria-label":Ke+(Xe+1)}),Ui(e,{tabindex:"0","aria-label":Ke+(Ve+1)+Ue}),Xi(t,Ye),Vi(e,Ye),Xe=Ve}}()}function Un(t,e){for(var n=[],i=t,a=Math.min(t+e,Vt);i<a;i++)n.push(rt[i].offsetHeight);return Math.max.apply(null,n)}function Gn(){var t=kt?Un(Zt,wt):Un(Qt,ot);et.style.height!==t&&(et.style.height=t+"px")}function Jn(){lt=[0];for(var t,e=$?"left":"top",n=rt[0].getBoundingClientRect()[e],i=1;i<Vt;i++)t=rt[i].getBoundingClientRect()[e],lt.push(t-n)}function _n(t){return t.nodeName.toLowerCase()}function Zn(t){return"button"===_n(t)}function $n(t){return"true"===t.getAttribute("aria-disabled")}function ti(t,e,n){t?e.disabled=n:e.setAttribute("aria-disabled",n.toString())}function ei(){if(Nt&&!Et&&!Bt){var t=Le?Oe.disabled:$n(Oe),e=De?Pe.disabled:$n(Pe),n=Zt<=te,i=!Et&&ee<=Zt;n&&!t&&ti(Le,Oe,!0),!n&&t&&ti(Le,Oe,!1),i&&!e&&ti(De,Pe,!0),!i&&e&&ti(De,Pe,!1)}}function ni(t,e){B&&(t.style[B]=e)}function ii(){return yt?(yt+xt)*Vt:lt[Vt-1]+rt[Vt-1].getBoundingClientRect().width}function ai(){var t=bt-(ii()-xt);return gt&&(t+=gt-xt),0<t&&(t=0),t}function ri(t){var e;(null==t&&(t=Zt),$&&!ht)?e=yt?-(yt+xt)*t:100*-t/(T?Vt:wt):e=-lt[t];return Xt&&(e=Math.max(e,Yt)),e+=!$||ht||yt?"px":"%"}function oi(t){ni(nt,"0s"),si(t)}function si(t){null==t&&(t=ri()),nt.style[Ut]=Gt+t+Jt}function ui(t,e,n,i){var a=t+wt;Bt||(a=Math.min(a,Vt));for(var r=t;r<a;r++){var o=rt[r];i||(o.style.left=100*(r-Zt)/wt+"%"),J&&k&&(o.style[k]=o.style[I]=J*(r-t)/1e3+"s"),Xi(o,e),Vi(o,n),i&&Ft.push(o)}}function li(t,e){Kt&&fn(),(Zt!==$t||e)&&(oe.emit("indexChanged",Di()),oe.emit("transitionStart",Di()),kt&&Xn(),Je&&t&&0<=["click","keydown"].indexOf(t.type)&&gi(),ae=!0,dn())}function ci(t){return t.toLowerCase().replace(/-/g,"")}function fi(t){if(V||ae){if(oe.emit("transitionEnd",Di(t)),!V&&0<Ft.length)for(var e=0;e<Ft.length;e++){var n=Ft[e];n.style.left="",I&&k&&(n.style[I]="",n.style[k]=""),Xi(n,G),Vi(n,_)}if(!t||!V&&t.target.parentNode===nt||t.target===nt&&ci(t.propertyName)===ci(Ut)){if(!Kt){var i=Zt;fn(),Zt!==i&&(oe.emit("indexChanged",Di()),oi())}"inner"===Q&&oe.emit("innerLoaded",Di()),ae=!1,$t=Zt}}}function di(t,e){if(!de)if("prev"===t)vi(e,-1);else if("next"===t)vi(e,1);else{ae&&fi();var n=hn(),i=0;if("first"===t?i=-n:"last"===t?i=V?ot-wt-n:ot-1-n:("number"!=typeof t&&(t=parseInt(t)),isNaN(t)||(e||(t=Math.max(0,Math.min(ot-1,t))),i=t-n)),!V&&i&&Math.abs(i)<wt){var a=0<i?1:-1;i+=te<=Zt+i-ot?ot*a:2*ot*a*-1}Zt+=i,V&&Bt&&(Zt<te&&(Zt+=ot),ee<Zt&&(Zt-=ot)),hn(Zt)!==hn($t)&&li(e)}}function vi(t,e){var n;if(ae&&fi(),!e){for(var i=(t=wi(t)).target||t.srcElement;i!==Ie&&[Oe,Pe].indexOf(i)<0;)i=i.parentNode;var a=[Oe,Pe].indexOf(i);0<=a&&(n=!0,e=0===a?-1:1)}if(Et){if(Zt===te&&-1===e)return void di("last",t);if(Zt===ee&&1===e)return void di("first",t)}e&&(Zt+=Ct*e,ht&&(Zt=Math.floor(Zt)),li(n||t&&"keydown"===t.type?t:null))}function pi(){Ge=setInterval(function(){vi(null,tn)},Pt),Je=!0}function mi(){clearInterval(Ge),Je=!1}function hi(t,e){Ui(en,{"data-action":t}),en.innerHTML=an[0]+t+an[1]+e}function yi(){pi(),en&&hi("stop",Ht[1])}function gi(){mi(),en&&hi("start",Ht[0])}function xi(){Je?(gi(),Ze=!0):(yi(),Ze=!1)}function bi(t){t.focus()}function wi(t){return Mi(t=t||h.event)?t.changedTouches[0]:t}function Ci(t){return t.target||h.event.srcElement}function Mi(t){return 0<=t.type.indexOf("touch")}function Ai(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function Ti(t){ae&&fi(),Ot&&Je&&mi(),un=!0,V&&(Si(ln),ln=0);var e=wi(t);oe.emit(Mi(t)?"touchStart":"dragStart",Di(t)),!Mi(t)&&0<=["img","a"].indexOf(_n(Ci(t)))&&Ai(t),sn.x=on.x=parseInt(e.clientX),sn.y=on.y=parseInt(e.clientY),V&&(rn=parseFloat(nt.style[Ut].replace(Gt,"").replace(Jt,"")),ni(nt,"0s"))}function Ei(t){if(un){var e=wi(t);sn.x=parseInt(e.clientX),sn.y=parseInt(e.clientY),V&&!ln&&(ln=Ii(function(){!function t(e){if(!ie)return void(un=!1);Si(ln);un&&(ln=Ii(function(){t(e)}));Bi();if(ie){try{e.type&&oe.emit(Mi(e)?"touchMove":"dragMove",Di(e))}catch(t){}var n=rn,i=cn(sn,on);if(!$||yt||ht)n+=i,n+="px";else{var a=T?i*wt*100/(bt*Vt):100*i/bt;n+=a,n+="%"}nt.style[Ut]=Gt+n+Jt}}(t)}))}}function Bi(){var t,e,n,i,a,r;"?"===ie&&sn.x!==on.x&&sn.y!==on.y&&(a=sn.y-on.y,r=sn.x-on.x,t=Math.atan2(a,r)*(180/Math.PI),e=ne,n=!1,i=Math.abs(90-Math.abs(t)),90-e<=i?n="horizontal":i<=e&&(n="vertical"),ie=n===m.axis)}function ki(i){if(un){V&&(Si(ln),ni(nt,"")),un=!1;var t=wi(i);sn.x=parseInt(t.clientX),sn.y=parseInt(t.clientY);var a=cn(sn,on);if(5<=Math.abs(a)){if(!Mi(i)){var n=Ci(i);na(n,{click:function t(e){Ai(e),ia(n,{click:t})}})}V?ln=Ii(function(){if($&&!ht){var t=-a*wt/bt;t=0<a?Math.floor(t):Math.ceil(t),Zt+=t}else{var e=-(rn+a);if(e<=0)Zt=te;else if(e>=lt[lt.length-1])Zt=ee;else for(var n=0;n<Vt&&e>=lt[n];)e>lt[Zt=n]&&a<0&&(Zt+=1),n++}li(i,a),oe.emit(Mi(i)?"touchEnd":"dragEnd",Di(i))}):(Bi(),ie&&vi(i,0<a?-1:1))}}ne&&(ie="?"),Ot&&!Je&&pi()}function Ni(){et.style.height=lt[Zt+wt]-lt[Zt]+"px"}function Li(){Dt&&!Me&&(!function(){je=[];for(var t=hn()%wt;t<ot;)V&&!Bt&&ot<t+wt&&(t=ot-wt),je.push(t),t+=wt;(Bt&&je.length*wt<ot||!Bt&&0<je[0])&&je.unshift(0)}(),je!==Fe&&(Fi(ze,function(t,e){je.indexOf(e)<0?_i(t):Zi(t)}),Fe=je))}function Di(t){return{container:nt,slideItems:rt,navContainer:We,navItems:ze,controlsContainer:Ie,hasControls:we,prevButton:Oe,nextButton:Pe,items:wt,slideBy:Ct,cloneCount:Qt,slideCount:ot,slideCountNew:Vt,index:Zt,indexCached:$t,displayIndex:pn(),navCurrentIndex:Ve,navCurrentIndexCached:Xe,visibleNavIndexes:je,visibleNavIndexesCached:Fe,sheet:Wt,isOn:ut,event:t||{}}}P&&console.warn("No slides found in",m.container)};return ra}();
//# sourceMappingURL=../sourcemaps/tiny-slider.js.map
