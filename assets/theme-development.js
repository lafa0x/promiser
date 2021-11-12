/* MIT https://github.com/fabiospampinato/cash */
(function(){
'use strict';var e={"class":"className",contenteditable:"contentEditable","for":"htmlFor",readonly:"readOnly",maxlength:"maxLength",tabindex:"tabIndex",colspan:"colSpan",rowspan:"rowSpan",usemap:"useMap"};function aa(a,b){try{return a(b)}catch(c){return b}}
var k=document,m=window,ba=k.documentElement,n=k.createElement.bind(k),ca=n("div"),p=n("table"),da=n("tbody"),ea=n("tr"),q=Array.isArray,r=Array.prototype,fa=r.concat,t=r.filter,ha=r.indexOf,ia=r.map,ja=r.push,ka=r.slice,u=r.some,la=r.splice,ma=/^#(?:[\w-]|\\.|[^\x00-\xa0])*$/,na=/^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/,oa=/<.+>/,pa=/^\w+$/;function v(a,b){return a&&(w(b)||x(b))?na.test(a)?b.getElementsByClassName(a.slice(1)):pa.test(a)?b.getElementsByTagName(a):b.querySelectorAll(a):[]}
var B=function(){function a(a,c){if(a){if(a instanceof B)return a;var b=a;if(C(a)){if(b=(c instanceof B?c[0]:c)||k,b=ma.test(a)?b.getElementById(a.slice(1)):oa.test(a)?qa(a):v(a,b),!b)return}else if(D(a))return this.ready(a);if(b.nodeType||b===m)b=[b];this.length=b.length;a=0;for(c=this.length;a<c;a++)this[a]=b[a]}}a.prototype.init=function(b,c){return new a(b,c)};return a}(),E=B.prototype,F=E.init;F.fn=F.prototype=E;E.length=0;E.splice=la;"function"===typeof Symbol&&(E[Symbol.iterator]=r[Symbol.iterator]);
E.map=function(a){return F(fa.apply([],ia.call(this,function(b,c){return a.call(b,c,b)})))};E.slice=function(a,b){return F(ka.call(this,a,b))};var ra=/-([a-z])/g;function G(a){return a.replace(ra,function(a,c){return c.toUpperCase()})}F.guid=1;function sa(a,b){var c=a&&(a.matches||a.webkitMatchesSelector||a.msMatchesSelector);return!!c&&!!b&&c.call(a,b)}function H(a){return!!a&&a===a.window}function w(a){return!!a&&9===a.nodeType}function x(a){return!!a&&1===a.nodeType}
function D(a){return"function"===typeof a}function C(a){return"string"===typeof a}function ta(a){return!isNaN(parseFloat(a))&&isFinite(a)}function I(a){if("object"!==typeof a||null===a)return!1;a=Object.getPrototypeOf(a);return null===a||a===Object.prototype}F.isWindow=H;F.isFunction=D;F.isArray=q;F.isNumeric=ta;F.isPlainObject=I;E.get=function(a){if(void 0===a)return ka.call(this);a=Number(a);return this[0>a?a+this.length:a]};E.eq=function(a){return F(this.get(a))};E.first=function(){return this.eq(0)};
E.last=function(){return this.eq(-1)};function J(a,b,c){if(c)for(c=a.length;c--&&!1!==b.call(a[c],c,a[c]););else if(I(a)){var d=Object.keys(a);c=0;for(var h=d.length;c<h;c++){var f=d[c];if(!1===b.call(a[f],f,a[f]))break}}else for(c=0,h=a.length;c<h&&!1!==b.call(a[c],c,a[c]);c++);return a}F.each=J;E.each=function(a){return J(this,a)};E.prop=function(a,b){if(a){if(C(a))return a=e[a]||a,2>arguments.length?this[0]&&this[0][a]:this.each(function(c,h){h[a]=b});for(var c in a)this.prop(c,a[c]);return this}};
E.removeProp=function(a){return this.each(function(b,c){delete c[e[a]||a]})};function K(){for(var a=[],b=0;b<arguments.length;b++)a[b]=arguments[b];b="boolean"===typeof a[0]?a.shift():!1;var c=a.shift(),d=a.length;if(!c)return{};if(!d)return K(b,F,c);for(var h=0;h<d;h++){var f=a[h],g;for(g in f)b&&(q(f[g])||I(f[g]))?(c[g]&&c[g].constructor===f[g].constructor||(c[g]=new f[g].constructor),K(b,c[g],f[g])):c[g]=f[g]}return c}F.extend=K;E.extend=function(a){return K(E,a)};
function L(a){return C(a)?function(b,c){return sa(c,a)}:D(a)?a:a instanceof B?function(b,c){return a.is(c)}:a?function(b,c){return c===a}:function(){return!1}}E.filter=function(a){var b=L(a);return F(t.call(this,function(a,d){return b.call(a,d,a)}))};function M(a,b){return b?a.filter(b):a}var ua=/\S+/g;function N(a){return C(a)?a.match(ua)||[]:[]}E.hasClass=function(a){return!!a&&u.call(this,function(b){return x(b)&&b.classList.contains(a)})};
E.removeAttr=function(a){var b=N(a);return this.each(function(a,d){x(d)&&J(b,function(a,b){d.removeAttribute(b)})})};E.attr=function(a,b){if(a){if(C(a)){if(2>arguments.length){if(!this[0]||!x(this[0]))return;var c=this[0].getAttribute(a);return null===c?void 0:c}return void 0===b?this:null===b?this.removeAttr(a):this.each(function(c,h){x(h)&&h.setAttribute(a,b)})}for(c in a)this.attr(c,a[c]);return this}};
E.toggleClass=function(a,b){var c=N(a),d=void 0!==b;return this.each(function(a,f){x(f)&&J(c,function(a,c){d?b?f.classList.add(c):f.classList.remove(c):f.classList.toggle(c)})})};E.addClass=function(a){return this.toggleClass(a,!0)};E.removeClass=function(a){return arguments.length?this.toggleClass(a,!1):this.attr("class","")};
function O(a,b,c,d){for(var h=[],f=D(b),g=d&&L(d),y=0,z=a.length;y<z;y++)if(f){var l=b(a[y]);l.length&&ja.apply(h,l)}else for(l=a[y][b];!(null==l||d&&g(-1,l));)h.push(l),l=c?l[b]:null;return h}function P(a){return 1<a.length?t.call(a,function(a,c,d){return ha.call(d,a)===c}):a}F.unique=P;E.add=function(a,b){return F(P(this.get().concat(F(a,b).get())))};function Q(a,b,c){if(x(a)){var d=m.getComputedStyle(a,null);return c?d.getPropertyValue(b)||void 0:d[b]||a.style[b]}}
function R(a,b){return parseInt(Q(a,b),10)||0}var S=/^--/,T={},va=ca.style,wa=["webkit","moz","ms"];function xa(a,b){void 0===b&&(b=S.test(a));if(b)return a;if(!T[a]){b=G(a);var c=""+b[0].toUpperCase()+b.slice(1);b=(b+" "+wa.join(c+" ")+c).split(" ");J(b,function(b,c){if(c in va)return T[a]=c,!1})}return T[a]}
var ya={animationIterationCount:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0};function za(a,b,c){void 0===c&&(c=S.test(a));return c||ya[a]||!ta(b)?b:b+"px"}
E.css=function(a,b){if(C(a)){var c=S.test(a);a=xa(a,c);if(2>arguments.length)return this[0]&&Q(this[0],a,c);if(!a)return this;b=za(a,b,c);return this.each(function(d,f){x(f)&&(c?f.style.setProperty(a,b):f.style[a]=b)})}for(var d in a)this.css(d,a[d]);return this};var Aa=/^\s+|\s+$/;function Ba(a,b){a=a.dataset[b]||a.dataset[G(b)];return Aa.test(a)?a:aa(JSON.parse,a)}
E.data=function(a,b){if(!a){if(!this[0])return;var c={},d;for(d in this[0].dataset)c[d]=Ba(this[0],d);return c}if(C(a))return 2>arguments.length?this[0]&&Ba(this[0],a):void 0===b?this:this.each(function(c,d){c=b;c=aa(JSON.stringify,c);d.dataset[G(a)]=c});for(d in a)this.data(d,a[d]);return this};function Ca(a,b){var c=a.documentElement;return Math.max(a.body["scroll"+b],c["scroll"+b],a.body["offset"+b],c["offset"+b],c["client"+b])}
function Da(a,b){return R(a,"border"+(b?"Left":"Top")+"Width")+R(a,"padding"+(b?"Left":"Top"))+R(a,"padding"+(b?"Right":"Bottom"))+R(a,"border"+(b?"Right":"Bottom")+"Width")}
J([!0,!1],function(a,b){J(["Width","Height"],function(a,d){E[(b?"outer":"inner")+d]=function(c){if(this[0])return H(this[0])?b?this[0]["inner"+d]:this[0].document.documentElement["client"+d]:w(this[0])?Ca(this[0],d):this[0][(b?"offset":"client")+d]+(c&&b?R(this[0],"margin"+(a?"Top":"Left"))+R(this[0],"margin"+(a?"Bottom":"Right")):0)}})});
J(["Width","Height"],function(a,b){var c=b.toLowerCase();E[c]=function(d){if(!this[0])return void 0===d?void 0:this;if(!arguments.length)return H(this[0])?this[0].document.documentElement["client"+b]:w(this[0])?Ca(this[0],b):this[0].getBoundingClientRect()[c]-Da(this[0],!a);var h=parseInt(d,10);return this.each(function(b,d){x(d)&&(b=Q(d,"boxSizing"),d.style[c]=za(c,h+("border-box"===b?Da(d,!a):0)))})}});var U={};
E.toggle=function(a){return this.each(function(b,c){if(x(c))if(void 0===a?"none"===Q(c,"display"):a){if(c.style.display=c.___cd||"","none"===Q(c,"display")){b=c.style;c=c.tagName;if(U[c])c=U[c];else{var d=n(c);k.body.insertBefore(d,null);var h=Q(d,"display");k.body.removeChild(d);c=U[c]="none"!==h?h:"block"}b.display=c}}else c.___cd=Q(c,"display"),c.style.display="none"})};E.hide=function(){return this.toggle(!1)};E.show=function(){return this.toggle(!0)};
function Ea(a,b){return!b||!u.call(b,function(b){return 0>a.indexOf(b)})}var V={focus:"focusin",blur:"focusout"},W={mouseenter:"mouseover",mouseleave:"mouseout"},Fa=/^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;function Ga(a,b,c,d,h){var f=a.___ce=a.___ce||{};f[b]=f[b]||[];f[b].push([c,d,h]);a.addEventListener(b,h)}function X(a){a=a.split(".");return[a[0],a.slice(1).sort()]}
function Y(a,b,c,d,h){var f=a.___ce=a.___ce||{};if(b)f[b]&&(f[b]=f[b].filter(function(f){var g=f[0],z=f[1];f=f[2];if(h&&f.guid!==h.guid||!Ea(g,c)||d&&d!==z)return!0;a.removeEventListener(b,f)}));else for(b in f)Y(a,b,c,d,h)}
E.off=function(a,b,c){var d=this;if(void 0===a)this.each(function(a,b){(x(b)||w(b)||H(b))&&Y(b)});else if(C(a))D(b)&&(c=b,b=""),J(N(a),function(a,h){a=X(h);h=a[0];var f=a[1],g=W[h]||V[h]||h;d.each(function(a,d){(x(d)||w(d)||H(d))&&Y(d,g,f,b,c)})});else for(var h in a)this.off(h,a[h]);return this};
E.on=function(a,b,c,d,h){var f=this;if(!C(a)){for(var g in a)this.on(g,b,c,a[g],h);return this}C(b)||(void 0!==b&&null!==b&&(void 0!==c&&(d=c),c=b),b="");D(d)||(d=c,c=void 0);if(!d)return this;J(N(a),function(a,g){a=X(g);g=a[0];var l=a[1],z=W[g]||V[g]||g,y=g in W,Ka=g in V;z&&f.each(function(a,f){if(x(f)||w(f)||H(f))a=function La(a){if(a.target["___i"+a.type])return a.stopImmediatePropagation();if(!a.namespace||Ea(l,a.namespace.split(".")))if(b||!(Ka&&(a.target!==f||a.___ot===z)||y&&a.relatedTarget&&
f.contains(a.relatedTarget))){var g=f;if(b){for(var A=a.target;!sa(A,b);){if(A===f)return;A=A.parentNode;if(!A)return}g=A;a.___cd=!0}a.___cd&&Object.defineProperty(a,"currentTarget",{configurable:!0,get:function(){return g}});Object.defineProperty(a,"data",{configurable:!0,get:function(){return c}});A=d.call(g,a,a.___td);h&&Y(f,z,l,b,La);!1===A&&(a.preventDefault(),a.stopPropagation())}},a.guid=d.guid=d.guid||F.guid++,Ga(f,z,l,b,a)})});return this};E.one=function(a,b,c,d){return this.on(a,b,c,d,!0)};
E.ready=function(a){function b(){return setTimeout(a,0,F)}"loading"!==k.readyState?b():k.addEventListener("DOMContentLoaded",b);return this};E.trigger=function(a,b){if(C(a)){var c=X(a),d=c[0];c=c[1];var h=W[d]||V[d]||d;if(!h)return this;var f=Fa.test(h)?"MouseEvents":"HTMLEvents";a=k.createEvent(f);a.initEvent(h,!0,!0);a.namespace=c.join(".");a.___ot=d}a.___td=b;var g=a.___ot in V;return this.each(function(b,c){g&&D(c[a.___ot])&&(c["___i"+a.type]=!0,c[a.___ot](),c["___i"+a.type]=!1);c.dispatchEvent(a)})};
function Ha(a){return a.multiple&&a.options?O(t.call(a.options,function(a){return a.selected&&!a.disabled&&!a.parentNode.disabled}),"value"):a.value||""}var Ia=/%20/g,Ja=/\r?\n/g,Ma=/file|reset|submit|button|image/i,Na=/radio|checkbox/i;
E.serialize=function(){var a="";this.each(function(b,c){J(c.elements||[c],function(b,c){c.disabled||!c.name||"FIELDSET"===c.tagName||Ma.test(c.type)||Na.test(c.type)&&!c.checked||(b=Ha(c),void 0!==b&&(b=q(b)?b:[b],J(b,function(b,d){b=a;d="&"+encodeURIComponent(c.name)+"="+encodeURIComponent(d.replace(Ja,"\r\n")).replace(Ia,"+");a=b+d})))})});return a.slice(1)};
E.val=function(a){return arguments.length?this.each(function(b,c){if((b=c.multiple&&c.options)||Na.test(c.type)){var d=q(a)?ia.call(a,String):null===a?[]:[String(a)];b?J(c.options,function(a,b){b.selected=0<=d.indexOf(b.value)},!0):c.checked=0<=d.indexOf(c.value)}else c.value=void 0===a||null===a?"":a}):this[0]&&Ha(this[0])};E.clone=function(){return this.map(function(a,b){return b.cloneNode(!0)})};E.detach=function(a){M(this,a).each(function(a,c){c.parentNode&&c.parentNode.removeChild(c)});return this};
var Oa=/^\s*<(\w+)[^>]*>/,Pa=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,Qa={"*":ca,tr:da,td:ea,th:ea,thead:p,tbody:p,tfoot:p};function qa(a){if(!C(a))return[];if(Pa.test(a))return[n(RegExp.$1)];var b=Oa.test(a)&&RegExp.$1;b=Qa[b]||Qa["*"];b.innerHTML=a;return F(b.childNodes).detach().get()}F.parseHTML=qa;E.empty=function(){return this.each(function(a,b){for(;b.firstChild;)b.removeChild(b.firstChild)})};
E.html=function(a){return arguments.length?void 0===a?this:this.each(function(b,c){x(c)&&(c.innerHTML=a)}):this[0]&&this[0].innerHTML};E.remove=function(a){M(this,a).detach().off();return this};E.text=function(a){return void 0===a?this[0]?this[0].textContent:"":this.each(function(b,c){x(c)&&(c.textContent=a)})};E.unwrap=function(){this.parent().each(function(a,b){"BODY"!==b.tagName&&(a=F(b),a.replaceWith(a.children()))});return this};
E.offset=function(){var a=this[0];if(a)return a=a.getBoundingClientRect(),{top:a.top+m.pageYOffset,left:a.left+m.pageXOffset}};E.offsetParent=function(){return this.map(function(a,b){for(a=b.offsetParent;a&&"static"===Q(a,"position");)a=a.offsetParent;return a||ba})};
E.position=function(){var a=this[0];if(a){var b="fixed"===Q(a,"position"),c=b?a.getBoundingClientRect():this.offset();if(!b){var d=a.ownerDocument;for(b=a.offsetParent||d.documentElement;(b===d.body||b===d.documentElement)&&"static"===Q(b,"position");)b=b.parentNode;b!==a&&x(b)&&(d=F(b).offset(),c.top-=d.top+R(b,"borderTopWidth"),c.left-=d.left+R(b,"borderLeftWidth"))}return{top:c.top-R(a,"marginTop"),left:c.left-R(a,"marginLeft")}}};
E.children=function(a){return M(F(P(O(this,function(a){return a.children}))),a)};E.contents=function(){return F(P(O(this,function(a){return"IFRAME"===a.tagName?[a.contentDocument]:"TEMPLATE"===a.tagName?a.content.childNodes:a.childNodes})))};E.find=function(a){return F(P(O(this,function(b){return v(a,b)})))};var Ra=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Sa=/^$|^module$|\/(java|ecma)script/i,Ta=["type","src","nonce","noModule"];
function Ua(a,b){a=F(a);a.filter("script").add(a.find("script")).each(function(a,d){if(Sa.test(d.type)&&ba.contains(d)){var c=n("script");c.text=d.textContent.replace(Ra,"");J(Ta,function(a,b){d[b]&&(c[b]=d[b])});b.head.insertBefore(c,null);b.head.removeChild(c)}})}
function Z(a,b,c,d,h,f,g,y){J(a,function(a,f){J(F(f),function(a,f){J(F(b),function(b,g){var l=c?g:f;b=c?a:b;g=c?f:g;l=b?l.cloneNode(!0):l;b=!b;h?g.insertBefore(l,d?g.firstChild:null):g.parentNode.insertBefore(l,d?g:g.nextSibling);b&&Ua(l,g.ownerDocument)},y)},g)},f);return b}E.after=function(){return Z(arguments,this,!1,!1,!1,!0,!0)};E.append=function(){return Z(arguments,this,!1,!1,!0)};E.appendTo=function(a){return Z(arguments,this,!0,!1,!0)};E.before=function(){return Z(arguments,this,!1,!0)};
E.insertAfter=function(a){return Z(arguments,this,!0,!1,!1,!1,!1,!0)};E.insertBefore=function(a){return Z(arguments,this,!0,!0)};E.prepend=function(){return Z(arguments,this,!1,!0,!0,!0,!0)};E.prependTo=function(a){return Z(arguments,this,!0,!0,!0,!1,!1,!0)};E.replaceWith=function(a){return this.before(a).remove()};E.replaceAll=function(a){F(a).replaceWith(this);return this};E.wrapAll=function(a){a=F(a);for(var b=a[0];b.children.length;)b=b.firstElementChild;this.first().before(a);return this.appendTo(b)};
E.wrap=function(a){return this.each(function(b,c){var d=F(a)[0];F(c).wrapAll(b?d.cloneNode(!0):d)})};E.wrapInner=function(a){return this.each(function(b,c){b=F(c);c=b.contents();c.length?c.wrapAll(a):b.append(a)})};E.has=function(a){var b=C(a)?function(b,d){return v(a,d).length}:function(b,d){return d.contains(a)};return this.filter(b)};E.is=function(a){var b=L(a);return u.call(this,function(a,d){return b.call(a,d,a)})};E.next=function(a,b,c){return M(F(P(O(this,"nextElementSibling",b,c))),a)};
E.nextAll=function(a){return this.next(a,!0)};E.nextUntil=function(a,b){return this.next(b,!0,a)};E.not=function(a){var b=L(a);return this.filter(function(c,d){return(!C(a)||x(d))&&!b.call(d,c,d)})};E.parent=function(a){return M(F(P(O(this,"parentNode"))),a)};E.index=function(a){var b=a?F(a)[0]:this[0];a=a?this:F(b).parent().children();return ha.call(a,b)};E.closest=function(a){var b=this.filter(a);if(b.length)return b;var c=this.parent();return c.length?c.closest(a):b};
E.parents=function(a,b){return M(F(P(O(this,"parentElement",!0,b))),a)};E.parentsUntil=function(a,b){return this.parents(b,a)};E.prev=function(a,b,c){return M(F(P(O(this,"previousElementSibling",b,c))),a)};E.prevAll=function(a){return this.prev(a,!0)};E.prevUntil=function(a,b){return this.prev(b,!0,a)};E.siblings=function(a){return M(F(P(O(this,function(a){return F(a).parent().children().not(a)}))),a)};"undefined"!==typeof exports?module.exports=F:m.cash=m.$=F;
})();
/*! https://raw.githubusercontent.com/aFarkas/lazysizes/gh-pages/plugins/respimg/ls.respimg.min.js */
/*! lazysizes - v5.3.0 */
!function(e,t){var r;e&&(r=function(){t(e.lazySizes),e.removeEventListener("lazyunveilread",r,!0)},t=t.bind(null,e,e.document),"object"==typeof module&&module.exports?t(require("lazysizes")):"function"==typeof define&&define.amd?define(["lazysizes"],t):e.lazySizes?r():e.addEventListener("lazyunveilread",r,!0))}("undefined"!=typeof window?window:0,function(d,n,p){"use strict";var i,a,s,l,t,r,f,o,c,m,u,y=p.cfg,e=n.createElement("img"),g="sizes"in e&&"srcset"in e,h=/\s+\d+h/g,z=(a=/\s+(\d+)(w|h)\s+(\d+)(w|h)/,s=Array.prototype.forEach,function(){function r(e){var t,r,i=e.getAttribute(y.srcsetAttr);i&&(r=i.match(a))&&((t="w"==r[2]?r[1]/r[3]:r[3]/r[1])&&e.setAttribute("data-aspectratio",t),e.setAttribute(y.srcsetAttr,i.replace(h,"")))}function e(e){var t;e.detail.instance==p&&((t=e.target.parentNode)&&"PICTURE"==t.nodeName&&s.call(t.getElementsByTagName("source"),r),r(e.target))}function t(){i.currentSrc&&n.removeEventListener("lazybeforeunveil",e)}var i=n.createElement("img");n.addEventListener("lazybeforeunveil",e),i.onload=t,i.onerror=t,i.srcset="data:,a 1w 1h",i.complete&&t()});function v(e,t){return e.w-t.w}function w(e,t,r,i){l.push({c:t,u:r,w:+i})}function b(e,t){var r,i=e.getAttribute("srcset")||e.getAttribute(y.srcsetAttr);!i&&t&&(i=e._lazypolyfill?e._lazypolyfill._set:e.getAttribute(y.srcAttr)||e.getAttribute("src")),e._lazypolyfill&&e._lazypolyfill._set==i||(r=o(i||""),t&&e.parentNode&&(r.isPicture="PICTURE"==e.parentNode.nodeName.toUpperCase(),r.isPicture&&d.matchMedia&&(p.aC(e,"lazymatchmedia"),c())),r._set=i,Object.defineProperty(e,"_lazypolyfill",{value:r,writable:!0}))}function A(e){var t,r,i,n,a,s,l,o,c,u=e;if(b(u,!0),(n=u._lazypolyfill).isPicture)for(r=0,i=(t=e.parentNode.getElementsByTagName("source")).length;r<i;r++)if(y.supportsType(t[r].getAttribute("type"),e)&&m(t[r].getAttribute("media"))){u=t[r],b(u),n=u._lazypolyfill;break}return 1<n.length?(s=u.getAttribute("sizes")||"",s=f.test(s)&&parseInt(s,10)||p.gW(e,e.parentNode),n.d=(l=e,o=d.devicePixelRatio||1,c=p.getX&&p.getX(l),Math.min(c||o,2.5,o)),!n.src||!n.w||n.w<s?(n.w=s,a=function(e){for(var t,r,i=e.length,n=e[i-1],a=0;a<i;a++)if((n=e[a]).d=n.w/e.w,n.d>=e.d){!n.cached&&(t=e[a-1])&&t.d>e.d-.13*Math.pow(e.d,2.2)&&(r=Math.pow(t.d-.6,1.6),t.cached&&(t.d+=.15*r),t.d+(n.d-e.d)*r>e.d&&(n=t));break}return n}(n.sort(v)),n.src=a):a=n.src):a=n[0],a}function E(e){var t;g&&e.parentNode&&"PICTURE"!=e.parentNode.nodeName.toUpperCase()||(t=A(e))&&t.u&&e._lazypolyfill.cur!=t.u&&(e._lazypolyfill.cur=t.u,t.cached=!0,e.setAttribute(y.srcAttr,t.u),e.setAttribute("src",t.u))}y.supportsType||(y.supportsType=function(e){return!e}),d.HTMLPictureElement&&g?!p.hasHDescriptorFix&&n.msElementsFromPoint&&(p.hasHDescriptorFix=!0,z()):d.picturefill||y.pf||(y.pf=function(e){var t,r;if(!d.picturefill)for(t=0,r=e.elements.length;t<r;t++)i(e.elements[t])},f=/^\s*\d+\.*\d*px\s*$/,t=/(([^,\s].[^\s]+)\s+(\d+)w)/g,r=/\s/,c=function(){var e,r;function t(){for(var e=0,t=r.length;e<t;e++)i(r[e])}c.init||(c.init=!0,addEventListener("resize",(r=n.getElementsByClassName("lazymatchmedia"),function(){clearTimeout(e),e=setTimeout(t,66)})))},m=function(e){return d.matchMedia?(m=function(e){return!e||(matchMedia(e)||{}).matches})(e):!e},E.parse=o=function(e){return l=[],(e=e.trim()).replace(h,"").replace(t,w),l.length||!e||r.test(e)||l.push({c:e,u:e,w:99}),l},i=E,y.loadedClass&&y.loadingClass&&(u=[],['img[sizes$="px"][srcset].',"picture > img:not([srcset])."].forEach(function(e){u.push(e+y.loadedClass),u.push(e+y.loadingClass)}),y.pf({elements:n.querySelectorAll(u.join(", "))})))});

/* https://raw.githubusercontent.com/aFarkas/lazysizes/gh-pages/plugins/parent-fit/ls.parent-fit.min.js */
/*! lazysizes - v5.3.0 */
!function(t,e){var i;t&&(i=function(){e(t.lazySizes),t.removeEventListener("lazyunveilread",i,!0)},e=e.bind(null,t,t.document),"object"==typeof module&&module.exports?e(require("lazysizes")):"function"==typeof define&&define.amd?define(["lazysizes"],e):t.lazySizes?i():t.addEventListener("lazyunveilread",i,!0))}("undefined"!=typeof window?window:0,function(u,t,i){"use strict";var l,s,d,f,g,o;u.addEventListener&&(l=/\s+(\d+)(w|h)\s+(\d+)(w|h)/,s=/parent-fit["']*\s*:\s*["']*(contain|cover|width)/,d=/parent-container["']*\s*:\s*["']*(.+?)(?=(\s|$|,|'|"|;))/,f=/^picture$/i,g=i.cfg,o={getParent:function(t,e){var i=t,a=t.parentNode;return e&&"prev"!=e||!a||!f.test(a.nodeName||"")||(a=a.parentNode),"self"!=e&&(i="prev"==e?t.previousElementSibling:e&&(a.closest||u.jQuery)&&(a.closest?a.closest(e):jQuery(a).closest(e)[0])||a),i},getFit:function(t){var e,i,a=getComputedStyle(t,null)||{},n=a.content||a.fontFamily,r={fit:t._lazysizesParentFit||t.getAttribute("data-parent-fit")};return!r.fit&&n&&(e=n.match(s))&&(r.fit=e[1]),r.fit?(!(i=t._lazysizesParentContainer||t.getAttribute("data-parent-container"))&&n&&(e=n.match(d))&&(i=e[1]),r.parent=o.getParent(t,i)):r.fit=a.objectFit,r},getImageRatio:function(t){for(var e,i,a,n,r,s,d=t.parentNode,o=d&&f.test(d.nodeName||"")?d.querySelectorAll("source, img"):[t],c=0;c<o.length;c++)if(e=(t=o[c]).getAttribute(g.srcsetAttr)||t.getAttribute("srcset")||t.getAttribute("data-pfsrcset")||t.getAttribute("data-risrcset")||"",i=t._lsMedia||t.getAttribute("media"),i=g.customMedia[t.getAttribute("data-media")||i]||i,e&&(!i||(u.matchMedia&&matchMedia(i)||{}).matches)){(a=parseFloat(t.getAttribute("data-aspectratio")))||(s=(n=e.match(l))?"w"==n[2]?(r=n[1],n[3]):(r=n[3],n[1]):(r=t.getAttribute("width"),t.getAttribute("height")),a=r/s);break}return a},calculateSize:function(t,e){var i,a,n,r=this.getFit(t),s=r.fit,d=r.parent;return"width"==s||("contain"==s||"cover"==s)&&(a=this.getImageRatio(t))?(d?e=d.clientWidth:d=t,n=e,"width"==s?n=e:(i=e/d.clientHeight)&&("cover"==s&&i<a||"contain"==s&&a<i)&&(n=e*(a/i)),n):e}},i.parentFit=o,t.addEventListener("lazybeforesizes",function(t){var e;t.defaultPrevented||t.detail.instance!=i||(e=t.target,t.detail.width=o.calculateSize(e,t.detail.width))}))});

/*! https://raw.githubusercontent.com/aFarkas/lazysizes/gh-pages/lazysizes.min.js */
/*! lazysizes - v5.3.0 */
!function(e){var t=function(u,D,f){"use strict";var k,H;if(function(){var e;var t={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:true,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:true,ricTimeout:0,throttleDelay:125};H=u.lazySizesConfig||u.lazysizesConfig||{};for(e in t){if(!(e in H)){H[e]=t[e]}}}(),!D||!D.getElementsByClassName){return{init:function(){},cfg:H,noSupport:true}}var O=D.documentElement,i=u.HTMLPictureElement,P="addEventListener",$="getAttribute",q=u[P].bind(u),I=u.setTimeout,U=u.requestAnimationFrame||I,o=u.requestIdleCallback,j=/^picture$/i,r=["load","error","lazyincluded","_lazyloaded"],a={},G=Array.prototype.forEach,J=function(e,t){if(!a[t]){a[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")}return a[t].test(e[$]("class")||"")&&a[t]},K=function(e,t){if(!J(e,t)){e.setAttribute("class",(e[$]("class")||"").trim()+" "+t)}},Q=function(e,t){var a;if(a=J(e,t)){e.setAttribute("class",(e[$]("class")||"").replace(a," "))}},V=function(t,a,e){var i=e?P:"removeEventListener";if(e){V(t,a)}r.forEach(function(e){t[i](e,a)})},X=function(e,t,a,i,r){var n=D.createEvent("Event");if(!a){a={}}a.instance=k;n.initEvent(t,!i,!r);n.detail=a;e.dispatchEvent(n);return n},Y=function(e,t){var a;if(!i&&(a=u.picturefill||H.pf)){if(t&&t.src&&!e[$]("srcset")){e.setAttribute("srcset",t.src)}a({reevaluate:true,elements:[e]})}else if(t&&t.src){e.src=t.src}},Z=function(e,t){return(getComputedStyle(e,null)||{})[t]},s=function(e,t,a){a=a||e.offsetWidth;while(a<H.minSize&&t&&!e._lazysizesWidth){a=t.offsetWidth;t=t.parentNode}return a},ee=function(){var a,i;var t=[];var r=[];var n=t;var s=function(){var e=n;n=t.length?r:t;a=true;i=false;while(e.length){e.shift()()}a=false};var e=function(e,t){if(a&&!t){e.apply(this,arguments)}else{n.push(e);if(!i){i=true;(D.hidden?I:U)(s)}}};e._lsFlush=s;return e}(),te=function(a,e){return e?function(){ee(a)}:function(){var e=this;var t=arguments;ee(function(){a.apply(e,t)})}},ae=function(e){var a;var i=0;var r=H.throttleDelay;var n=H.ricTimeout;var t=function(){a=false;i=f.now();e()};var s=o&&n>49?function(){o(t,{timeout:n});if(n!==H.ricTimeout){n=H.ricTimeout}}:te(function(){I(t)},true);return function(e){var t;if(e=e===true){n=33}if(a){return}a=true;t=r-(f.now()-i);if(t<0){t=0}if(e||t<9){s()}else{I(s,t)}}},ie=function(e){var t,a;var i=99;var r=function(){t=null;e()};var n=function(){var e=f.now()-a;if(e<i){I(n,i-e)}else{(o||r)(r)}};return function(){a=f.now();if(!t){t=I(n,i)}}},e=function(){var v,m,c,h,e;var y,z,g,p,C,b,A;var n=/^img$/i;var d=/^iframe$/i;var E="onscroll"in u&&!/(gle|ing)bot/.test(navigator.userAgent);var _=0;var w=0;var M=0;var N=-1;var L=function(e){M--;if(!e||M<0||!e.target){M=0}};var x=function(e){if(A==null){A=Z(D.body,"visibility")=="hidden"}return A||!(Z(e.parentNode,"visibility")=="hidden"&&Z(e,"visibility")=="hidden")};var W=function(e,t){var a;var i=e;var r=x(e);g-=t;b+=t;p-=t;C+=t;while(r&&(i=i.offsetParent)&&i!=D.body&&i!=O){r=(Z(i,"opacity")||1)>0;if(r&&Z(i,"overflow")!="visible"){a=i.getBoundingClientRect();r=C>a.left&&p<a.right&&b>a.top-1&&g<a.bottom+1}}return r};var t=function(){var e,t,a,i,r,n,s,o,l,u,f,c;var d=k.elements;if((h=H.loadMode)&&M<8&&(e=d.length)){t=0;N++;for(;t<e;t++){if(!d[t]||d[t]._lazyRace){continue}if(!E||k.prematureUnveil&&k.prematureUnveil(d[t])){R(d[t]);continue}if(!(o=d[t][$]("data-expand"))||!(n=o*1)){n=w}if(!u){u=!H.expand||H.expand<1?O.clientHeight>500&&O.clientWidth>500?500:370:H.expand;k._defEx=u;f=u*H.expFactor;c=H.hFac;A=null;if(w<f&&M<1&&N>2&&h>2&&!D.hidden){w=f;N=0}else if(h>1&&N>1&&M<6){w=u}else{w=_}}if(l!==n){y=innerWidth+n*c;z=innerHeight+n;s=n*-1;l=n}a=d[t].getBoundingClientRect();if((b=a.bottom)>=s&&(g=a.top)<=z&&(C=a.right)>=s*c&&(p=a.left)<=y&&(b||C||p||g)&&(H.loadHidden||x(d[t]))&&(m&&M<3&&!o&&(h<3||N<4)||W(d[t],n))){R(d[t]);r=true;if(M>9){break}}else if(!r&&m&&!i&&M<4&&N<4&&h>2&&(v[0]||H.preloadAfterLoad)&&(v[0]||!o&&(b||C||p||g||d[t][$](H.sizesAttr)!="auto"))){i=v[0]||d[t]}}if(i&&!r){R(i)}}};var a=ae(t);var S=function(e){var t=e.target;if(t._lazyCache){delete t._lazyCache;return}L(e);K(t,H.loadedClass);Q(t,H.loadingClass);V(t,B);X(t,"lazyloaded")};var i=te(S);var B=function(e){i({target:e.target})};var T=function(e,t){var a=e.getAttribute("data-load-mode")||H.iframeLoadMode;if(a==0){e.contentWindow.location.replace(t)}else if(a==1){e.src=t}};var F=function(e){var t;var a=e[$](H.srcsetAttr);if(t=H.customMedia[e[$]("data-media")||e[$]("media")]){e.setAttribute("media",t)}if(a){e.setAttribute("srcset",a)}};var s=te(function(t,e,a,i,r){var n,s,o,l,u,f;if(!(u=X(t,"lazybeforeunveil",e)).defaultPrevented){if(i){if(a){K(t,H.autosizesClass)}else{t.setAttribute("sizes",i)}}s=t[$](H.srcsetAttr);n=t[$](H.srcAttr);if(r){o=t.parentNode;l=o&&j.test(o.nodeName||"")}f=e.firesLoad||"src"in t&&(s||n||l);u={target:t};K(t,H.loadingClass);if(f){clearTimeout(c);c=I(L,2500);V(t,B,true)}if(l){G.call(o.getElementsByTagName("source"),F)}if(s){t.setAttribute("srcset",s)}else if(n&&!l){if(d.test(t.nodeName)){T(t,n)}else{t.src=n}}if(r&&(s||l)){Y(t,{src:n})}}if(t._lazyRace){delete t._lazyRace}Q(t,H.lazyClass);ee(function(){var e=t.complete&&t.naturalWidth>1;if(!f||e){if(e){K(t,H.fastLoadedClass)}S(u);t._lazyCache=true;I(function(){if("_lazyCache"in t){delete t._lazyCache}},9)}if(t.loading=="lazy"){M--}},true)});var R=function(e){if(e._lazyRace){return}var t;var a=n.test(e.nodeName);var i=a&&(e[$](H.sizesAttr)||e[$]("sizes"));var r=i=="auto";if((r||!m)&&a&&(e[$]("src")||e.srcset)&&!e.complete&&!J(e,H.errorClass)&&J(e,H.lazyClass)){return}t=X(e,"lazyunveilread").detail;if(r){re.updateElem(e,true,e.offsetWidth)}e._lazyRace=true;M++;s(e,t,r,i,a)};var r=ie(function(){H.loadMode=3;a()});var o=function(){if(H.loadMode==3){H.loadMode=2}r()};var l=function(){if(m){return}if(f.now()-e<999){I(l,999);return}m=true;H.loadMode=3;a();q("scroll",o,true)};return{_:function(){e=f.now();k.elements=D.getElementsByClassName(H.lazyClass);v=D.getElementsByClassName(H.lazyClass+" "+H.preloadClass);q("scroll",a,true);q("resize",a,true);q("pageshow",function(e){if(e.persisted){var t=D.querySelectorAll("."+H.loadingClass);if(t.length&&t.forEach){U(function(){t.forEach(function(e){if(e.complete){R(e)}})})}}});if(u.MutationObserver){new MutationObserver(a).observe(O,{childList:true,subtree:true,attributes:true})}else{O[P]("DOMNodeInserted",a,true);O[P]("DOMAttrModified",a,true);setInterval(a,999)}q("hashchange",a,true);["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){D[P](e,a,true)});if(/d$|^c/.test(D.readyState)){l()}else{q("load",l);D[P]("DOMContentLoaded",a);I(l,2e4)}if(k.elements.length){t();ee._lsFlush()}else{a()}},checkElems:a,unveil:R,_aLSL:o}}(),re=function(){var a;var n=te(function(e,t,a,i){var r,n,s;e._lazysizesWidth=i;i+="px";e.setAttribute("sizes",i);if(j.test(t.nodeName||"")){r=t.getElementsByTagName("source");for(n=0,s=r.length;n<s;n++){r[n].setAttribute("sizes",i)}}if(!a.detail.dataAttr){Y(e,a.detail)}});var i=function(e,t,a){var i;var r=e.parentNode;if(r){a=s(e,r,a);i=X(e,"lazybeforesizes",{width:a,dataAttr:!!t});if(!i.defaultPrevented){a=i.detail.width;if(a&&a!==e._lazysizesWidth){n(e,r,i,a)}}}};var e=function(){var e;var t=a.length;if(t){e=0;for(;e<t;e++){i(a[e])}}};var t=ie(e);return{_:function(){a=D.getElementsByClassName(H.autosizesClass);q("resize",t)},checkElems:t,updateElem:i}}(),t=function(){if(!t.i&&D.getElementsByClassName){t.i=true;re._();e._()}};return I(function(){H.init&&t()}),k={cfg:H,autoSizer:re,loader:e,init:t,uP:Y,aC:K,rC:Q,hC:J,fire:X,gW:s,rAF:ee}}(e,e.document,Date);e.lazySizes=t,"object"==typeof module&&module.exports&&(module.exports=t)}("undefined"!=typeof window?window:{});
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).basicLightbox=e()}}((function(){return function e(n,t,o){function r(c,u){if(!t[c]){if(!n[c]){var s="function"==typeof require&&require;if(!u&&s)return s(c,!0);if(i)return i(c,!0);var a=new Error("Cannot find module '"+c+"'");throw a.code="MODULE_NOT_FOUND",a}var l=t[c]={exports:{}};n[c][0].call(l.exports,(function(e){return r(n[c][1][e]||e)}),l,l.exports,e,n,t,o)}return t[c].exports}for(var i="function"==typeof require&&require,c=0;c<o.length;c++)r(o[c]);return r}({1:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.create=t.visible=void 0;var o=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=document.createElement("div");return t.innerHTML=e.trim(),!0===n?t.children:t.firstChild},r=function(e,n){var t=e.children;return 1===t.length&&t[0].tagName===n},i=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};t.visible=i;t.create=function(e,n){var t=function(e,n){var t=o('\n\t\t<div class="basicLightbox '.concat(n.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),i=t.querySelector(".basicLightbox__placeholder");e.forEach((function(e){return i.appendChild(e)}));var c=r(i,"IMG"),u=r(i,"VIDEO"),s=r(i,"IFRAME");return!0===c&&t.classList.add("basicLightbox--img"),!0===u&&t.classList.add("basicLightbox--video"),!0===s&&t.classList.add("basicLightbox--iframe"),t}(e=function(e){var n="string"==typeof e,t=e instanceof HTMLElement==1;if(!1===n&&!1===t)throw new Error("Content must be a DOM element/node or string");return!0===n?Array.from(o(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(n)),c=function(e){return!1!==n.onClose(u)&&function(e,n){return e.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===i(e)||e.parentElement.removeChild(e),n()}),410),!0}(t,(function(){if("function"==typeof e)return e(u)}))};!0===n.closable&&t.addEventListener("click",(function(e){e.target===t&&c()}));var u={element:function(){return t},visible:function(){return i(t)},show:function(e){return!1!==n.onShow(u)&&function(e,n){return document.body.appendChild(e),setTimeout((function(){requestAnimationFrame((function(){return e.classList.add("basicLightbox--visible"),n()}))}),10),!0}(t,(function(){if("function"==typeof e)return e(u)}))},close:c};return u}},{}]},{},[1])(1)}));
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).reframe=t()}(this,function(){"use strict";function t(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;for(var i=Array(e),o=0,t=0;t<n;t++)for(var r=arguments[t],f=0,d=r.length;f<d;f++,o++)i[o]=r[f];return i}return function(e,s){return void 0===s&&(s="js-reframe"),("string"==typeof e?t(document.querySelectorAll(e)):"length"in e?t(e):[e]).forEach(function(e){var t,n,i,o,r,f,d,l;-1!==e.className.split(" ").indexOf(s)||-1<e.style.width.indexOf("%")||(i=e.getAttribute("height")||e.offsetHeight,o=e.getAttribute("width")||e.offsetWidth,r=("string"==typeof i?parseInt(i):i)/("string"==typeof o?parseInt(o):o)*100,(f=document.createElement("div")).className=s,(d=f.style).position="relative",d.width="100%",d.paddingTop=r+"%",(l=e.style).position="absolute",l.width="100%",l.height="100%",l.left="0",l.top="0",null!==(t=e.parentNode)&&void 0!==t&&t.insertBefore(f,e),null!==(n=e.parentNode)&&void 0!==n&&n.removeChild(e),f.appendChild(e))})}});
//smoothscroll.js file MODIFIED
/*
 * smoothscroll polyfill - v0.3.5
 * https://iamdustan.github.io/smoothscroll
 * 2016 (c) Dustan Kasten, Jeremias Menichelli - MIT License
 */

(function(w, d, undefined) {
  'use strict';

  /*
   * aliases
   * w: window global object
   * d: document
   * undefined: undefined
   */

  // polyfill
  function polyfill() {
    // return when scrollBehavior interface is supported
    if ('scrollBehavior' in d.documentElement.style) {
      return;
    }

    /*
     * globals
     */
    var Element = w.HTMLElement || w.Element;
    var SCROLL_TIME = 468;

    /*
     * object gathering original scroll methods
     */
    var original = {
      scroll: w.scroll || w.scrollTo,
      elScroll: Element.prototype.scroll || scrollElement
    };

    /*
     * define timing method
     */
    var now = w.performance && w.performance.now
      ? w.performance.now.bind(w.performance) : Date.now;

    /**
     * changes scroll position inside an element
     * @method scrollElement
     * @param {Number} x
     * @param {Number} y
     */
    function scrollElement(x, y) {
      this.scrollLeft = x;
    }

    /**
     * returns result of applying ease math function to a number
     * @method ease
     * @param {Number} k
     * @returns {Number}
     */
    function ease(k) {
      return 0.5 * (1 - Math.cos(Math.PI * k));
    }

    /**
     * indicates if a smooth behavior should be applied
     * @method shouldBailOut
     * @param {Number|Object} x
     * @returns {Boolean}
     */
    function shouldBailOut(x) {
      if (typeof x !== 'object'
            || x === null
            || x.behavior === undefined
            || x.behavior === 'auto'
            || x.behavior === 'instant') {
        // first arg not an object/null
        // or behavior is auto, instant or undefined
        return true;
      }

      if (typeof x === 'object'
            && x.behavior === 'smooth') {
        // first argument is an object and behavior is smooth
        return false;
      }

      // throw error when behavior is not supported
      throw new TypeError('behavior not valid');
    }


    /**
     * self invoked function that, given a context, steps through scrolling
     * @method step
     * @param {Object} context
     */
    function step(context) {
      var time = now();
      var value;
      var currentX;
      var currentY;
      var elapsed = (time - context.startTime) / SCROLL_TIME;

      // avoid elapsed times higher than one
      elapsed = elapsed > 1 ? 1 : elapsed;

      // apply easing to elapsed time
      value = ease(elapsed);

      currentX = context.startX + (context.x - context.startX) * value;

      context.method.call(context.scrollable, currentX, currentY);
      // scroll more if we have not reached our destination
      if (currentX !== context.x) {
        w.requestAnimationFrame(step.bind(w, context));
      }
    }

    /**
     * scrolls window with a smooth behavior
     * @method smoothScroll
     * @param {Object|Node} el
     * @param {Number} x
     * @param {Number} y
     */
    function smoothScroll(el, x, y) {
      var scrollable;
      var startX;
      var startY;
      var method;
      var startTime = now();

      // define scroll context
      if (el === d.body) {
        scrollable = w;
        startX = w.scrollX || w.pageXOffset;
        method = original.scroll;
      } else {
        scrollable = el;
        startX = el.scrollLeft;
        method = scrollElement;
      }

      // scroll looping over a frame
      step({
        scrollable: scrollable,
        method: method,
        startTime: startTime,
        startX: startX,
        x: x
      });
    }

    /*
     * ORIGINAL METHODS OVERRIDES
     */

    // w.scroll and w.scrollTo
    w.scroll = w.scrollTo = function() {
      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0])) {
        original.scroll.call(
          w,
          arguments[0].left || arguments[0]
        );
        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        w,
        d.body,
        ~~arguments[0].left
      );
    };

    // Element.prototype.scroll and Element.prototype.scrollTo
    Element.prototype.scroll = Element.prototype.scrollTo = function() {
      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0])) {
        original.elScroll.call(
            this,
            arguments[0].left || arguments[0]
        );
        return;
      }
      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
          this,
          this,
          arguments[0].left
      );
    };

  }

  polyfill();

})(window, document);

window.HIGHLIGHT = {
	version: '1.2.3'
};

// debouncing

window.debounce = function(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}

// CSS SLIDER JS HELPERS

HIGHLIGHT.CSSSlider = {

	SLIDERS: [],

	mount: function(element) {

		if ( element ) {

			let slider = {}
			this.SLIDERS[element.getAttribute('id')] = slider;

			slider.element = element;
      slider.element.scrollLeft = 0;

      slider.items = slider.element.querySelectorAll('.css-slide[data-index]');
      slider.indexedItems = [];
      slider.index = 0;
      slider.length = slider.items.length;
      slider.windowWidth = window.innerWidth;

      slider.velo = function(){

        let cancel = false;
        slider.element.scrollLeft = slider.element.scrollLeft - ( slider.veloD * 10 );

        if ( slider.veloN ) {
          slider.veloD += .05;
          if ( slider.veloD >= 0 ) {
            cancel = true;
          }
        } else {
          slider.veloD -= .05;
          if ( slider.veloD <= 0 ) {
            cancel = true;
          }
        }

        if ( cancel ) {
          cancelAnimationFrame(slider.velo);
        } else {
          requestAnimationFrame(slider.velo);
        }

      }

      if ( slider.element.classList.contains('css-slider--snapping') ) {

        if ( slider.length > 1 ) {
        
          slider.navigation = $('<div class="css-slider-navigation ' + slider.element.getAttribute('data-navigation-class') + '" style="display:none"><div><span class="css-slider-navigation__index">0</span> / <span class="css-slider-navigation__length">0</span></div><button class="css-slider-navigation__prev simple-arrow simple-arrow--left disabled"><span class="visually-hidden">' + window.HIGHLIGHTSettings.locales.prev + '</span>' + window.HIGHLIGHTSettings.arrow_symbol + '</button><button class="css-slider-navigation__next simple-arrow simple-arrow--right"><span class="visually-hidden">' + window.HIGHLIGHTSettings.locales.next + '</span>' + window.HIGHLIGHTSettings.arrow_symbol + '</button></div>')[0];

          if ( slider.element.classList.contains('css-slider--auto-height') ) {
            $(slider.navigation).insertAfter($(slider.element.parentNode));
          } else {
            $(slider.navigation).insertAfter($(slider.element));
          }

          slider.indexEl = slider.navigation.querySelector('.css-slider-navigation__index');
          slider.lengthEl = slider.navigation.querySelector('.css-slider-navigation__length');
          slider.prevEl = slider.navigation.querySelector('.css-slider-navigation__prev');
          slider.nextEl = slider.navigation.querySelector('.css-slider-navigation__next');

          slider.prevEl.addEventListener('click', (function(slider){
            this._changeSlide(slider, 'prev');
          }).bind(this, slider));
          slider.nextEl.addEventListener('click', (function(slider){
            this._changeSlide(slider, 'next');
          }).bind(this, slider));

          if ( slider.element.classList.contains('css-slider--auto-height') ) {
            slider.element.parentNode.style.height = slider.items[0].offsetHeight + 'px';
          }

          slider.OBSERVER = new IntersectionObserver((function(entries){
            entries.forEach((function(entry){
              if ( entry.intersectionRatio >= .5 ) {
                slider.index = parseInt(entry.target.getAttribute('data-index'));
                this._checkSlide(slider);
              }
            }).bind(this))
          }).bind(this), {
            threshold: [0, .5]
          });

        } else {
          slider.element.classList.add('css-slider--singular');
        }

      }

      slider.RESIZE_EVENT = null;
      if ( slider.length > 1 ) {
        slider.RESIZE_EVENT = window.debounce((function(slider){
          if ( slider.windowWidth != window.innerWidth ) {
            this._resetSlider(slider, false);
          }
          slider.windowWidth = window.innerWidth;
        }).bind(this, slider), 100);
        window.addEventListener('resize', slider.RESIZE_EVENT);
        this._resetSlider(slider, false);
      }

			if ( ! ( 'ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch ) ) {

				// mouse fallback for non-touch devices

        if ( slider.element.classList.contains('css-slider--snapping') && ! slider.element.classList.contains('css-slider--singular') ) {

           slider.element.addEventListener('mousedown', (function(slider, e){
              slider.mouseX = e.screenX;
              slider.element.classList.add('can-drag');
              slider.element.classList.add('mouse-down');
            }).bind(this, slider));
            slider.element.addEventListener('mouseup', (function(slider){
              slider.element.classList.remove('mouse-down');
              slider.element.classList.remove('can-drag');
              slider.element.classList.remove('pointer-events-off');
            }).bind(this, slider));

          slider.element.addEventListener('mouseleave', (function(slider, e){
            slider.element.classList.remove('mouse-down');
            slider.element.classList.remove('can-drag');
            slider.element.classList.remove('pointer-events-off');
          }).bind(null, slider));

          slider.element.addEventListener('mousemove', (function(slider, e){
            if ( slider.element.classList.contains('can-drag') ) {
                slider.element.classList.add('pointer-events-off');
              let direction = slider.mouseX - e.screenX;
              if ( Math.abs(direction) > 1 ) {
                if ( direction > 0 ) {
                  this._changeSlide(slider, 'next');
                  slider.element.classList.remove('can-drag');
                } else if ( direction < 0 ) {
                  this._changeSlide(slider, 'prev');
                  slider.element.classList.remove('can-drag');
                }
              }
            }
          }).bind(this, slider));

        } else {

          slider.element.classList.add('mouse-fallback');

           slider.element.addEventListener('mousedown', (function(slider, e){
            slider.initialX = e.screenX + slider.element.scrollLeft;
            slider.veloX = e.screenX;
            slider.veloT = new Date().getTime();
            slider.element.classList.add('mouse-down');
            cancelAnimationFrame(slider.velo);
          }).bind(null, slider));
          slider.element.addEventListener('mouseup', (function(slider, e){

            slider.element.classList.remove('mouse-down');
            slider.element.classList.remove('dragging');

            slider.veloD = (e.screenX-slider.veloX)/(new Date().getTime()-slider.veloT);
            slider.veloN = slider.veloD < 0 ? true : false;
            if ( Math.abs(slider.veloD) > 0.1 ) {
              slider.raf = requestAnimationFrame(slider.velo);
            }

          }).bind(null, slider));

          slider.element.addEventListener('mousemove', (function(slider, e){
            if ( slider.element.classList.contains('mouse-down') ) {
              slider.element.classList.add('dragging');
              slider.element.scrollLeft = (e.screenX - slider.initialX) * -1;
            }
          }).bind(null, slider));

          slider.element.addEventListener('mouseleave', (function(slider, e){
            slider.element.classList.remove('mouse-down');
            slider.element.classList.remove('dragging');
          }).bind(null, slider));

        }

			}

		}

	},

  unmount(slider){
    if ( slider.RESIZE_EVENT != null) {
      window.removeEventListener('resize', slider.RESIZE_EVENT);
    }
  },

  _changeSlide: function(slider, direction){

    if ( direction == 'next' ) {
      if ( slider.index+1 < slider.length ) {
        slider.index++;
      }
    } else {
      if ( slider.index-1 >= 0 ) {
        slider.index--;
      }
    }

    this._checkSlide(slider);

    slider.element.scrollTo({
      left: slider.indexedItems[slider.index].offsetLeft - parseInt(getComputedStyle(slider.indexedItems[0]).marginLeft),
      behavior: 'smooth'
    });

  },

  _checkSlide: function(slider){
    slider.prevEl.classList.remove('disabled');
    slider.nextEl.classList.remove('disabled');
    if ( slider.index == 0 ) {
      slider.prevEl.classList.add('disabled');
    }
    if ( slider.index == slider.length - 1 ) {
      slider.nextEl.classList.add('disabled');
    }
    slider.indexEl.innerHTML = slider.index+1;
    if ( slider.element.classList.contains('css-slider--auto-height') ) {
      slider.element.parentNode.style.height = slider.indexedItems[slider.index].offsetHeight + 'px';
    } 
  },

  _afterAppend: function(slider){
    slider.items = slider.element.querySelectorAll('.css-slide[data-index]');
  },

  _resetSlider: function(slider, nojump){

    let slidesWidth = 0,
        slidesPerPage = 0,
        page = 0,
        pages = 0,
        totalWidth = slider.element.classList.contains('css-slider--auto-height') ? window.innerWidth : slider.element.querySelector('.css-slides-container').offsetWidth - 20,
        hideNavigation = false;

    // 0 reset

    slider.indexedItems = [];
    slider.OBSERVER.disconnect();
    slider.element.classList.add('disable-snapping');

    // 1 find out how many pages

    slider.items.forEach(function(elm, i){
      elm.classList.remove('css-slide--snap');
      slidesWidth += elm.offsetWidth;
      if ( slidesWidth > totalWidth && slidesPerPage == 0 ) {
        slidesPerPage = i;
      }
    });

    if ( slidesPerPage == 0 ) {
      slidesPerPage = slider.items.length;
      hideNavigation = true;
    }

    slider.items.forEach(function(elm, i){
      if ( i % slidesPerPage == 0  ) {
        elm.classList.add('css-slide--snap');
        elm.setAttribute('data-index', page++);
        slider.OBSERVER.observe(elm);
      }
    });

    slider.indexedItems = slider.element.querySelectorAll('.css-slide--snap');

    slider.index = 0;
    slider.length = Math.ceil(slider.items.length / slidesPerPage);
    slider.lengthEl.innerHTML = slider.length;
    slider.indexEl.innerHTML = 1;

    if ( hideNavigation ) {
      slider.navigation.style.display = 'none';
      slider.element.classList.add('css-slider--no-drag');
    } else {
      slider.navigation.style.display = 'block';
      slider.element.classList.remove('css-slider--no-drag');
    }

    if ( ! nojump ) {
      slider.element.scrollTo({
        left: 0,
        behavior: 'auto'
      })
    }
    slider.element.classList.remove('disable-snapping');

  }

}

// Mount in page

$(document).ready(function(){
	if ( $('.mount-css-slider').length > 0 ) {
		$('.mount-css-slider').each(function(){
      if ( $('.mount-css-slider').hasClass('mount-restructured-css-slider') && $('.mount-css-slider').find('.css-slider').length > 0 ) {
        helpSliderToRestructure();
      }
  		HIGHLIGHT.CSSSlider.mount($(this).find('.css-slider')[0]);
		});
	}
});

// Shopify events

$(document).on('shopify:section:load', function(e){
	var $section = $(e.target);
	if ( $section.hasClass('mount-css-slider') ) {
    if ( $section.hasClass('mount-restructured-css-slider') && $section.find('.css-slider').length > 0 ) {
      helpSliderToRestructure();
    }
  	HIGHLIGHT.CSSSlider.mount($section.find('.css-slider')[0]);
	}

}).on('shopify:block:select', function(e){
	var $block = $(e.target);
  if ( $block.hasClass('css-slide') ) {
    $block.closest('.css-slider')[0].scrollLeft = $block[0].offsetLeft;
  }
}).on('shopify:section:unload', function(e){
  var $section = $(e.target);
  if ( $section.hasClass('mount-css-slider') ) {
    HIGHLIGHT.CSSSlider.unmount($section.find('.css-slider')[0]);
  }
});

function helpSliderToRestructure(){
  let cssSlider = document.getElementById('shopify-section-product-extra-images'),
      titlesDOM = document.createElement('div');
  cssSlider.querySelectorAll('.css-slide').forEach(function(elm){
    let elmTitle = elm.querySelector('.images-with-text-slider__title');
    if ( $(elmTitle).length > 0 ) {
      let cln = elmTitle.cloneNode(true);
      cln.setAttribute('class', elm.getAttribute('class') + ' images-with-text-slider__title');
      titlesDOM.appendChild(cln);
    }
  });
  setTimeout(function(){
    titlesDOM.setAttribute('class', 'css-slides-container images-with-text-slider__text grid push-right-half-tenth lap--push-right-padding');
    cssSlider.querySelectorAll('.images-with-text-slider__title').forEach(function(elm){
      elm.remove();
    })
    cssSlider.querySelector('.css-slider').prepend(titlesDOM);
  }, 100);
}

/*!
 * Serialize all form data into a SearchParams string
 * (c) 2020 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}   form The form to serialize
 * @return {String}      The serialized form data
 */

window.serialize = function(form) {
  var arr = [];
  Array.prototype.slice.call(form.elements).forEach(function(field) {
    if (
      !field.name ||
      field.disabled ||
      ['file', 'reset', 'submit', 'button'].indexOf(field.type) > -1
    )
      return;
    if (field.type === 'select-multiple') {
      Array.prototype.slice.call(field.options).forEach(function(option) {
        if (!option.selected) return;
        arr.push(
          encodeURIComponent(field.name) +
            '=' +
            encodeURIComponent(option.value)
        );
      });
      return;
    }
    if (['checkbox', 'radio'].indexOf(field.type) > -1 && !field.checked)
      return;
    arr.push(
      encodeURIComponent(field.name) + '=' + encodeURIComponent(field.value)
    );
  });
  return arr.join('&');
}

window.objectToQueryParams = function(obj, parentKey) {
  var output = '';
  parentKey = parentKey || null;

  Object.keys(obj).forEach(function(key) {
    var outputKey = key + '=';
    if (parentKey) {
      outputKey = parentKey + '[' + key + ']';
    }

    switch (trueTypeOf(obj[key])) {
      case 'object':
        output += objectToQueryParams(obj[key], parentKey ? outputKey : key);
        break;
      case 'array':
        output += outputKey + '=' + obj[key].join(',') + '&';
        break;
      default:
        if (parentKey) {
          outputKey += '=';
        }
        output += outputKey + encodeURIComponent(obj[key]) + '&';
        break;
    }
  });

  return output;
}
function trueTypeOf(obj) {
  return Object.prototype.toString
    .call(obj)
    .slice(8, -1)
    .toLowerCase();
}

// Krown Themes
// slideUp() / slideDown() functions

window.slideUp = function(target, duration, cwpe) {
  cwpe = cwpe ? true : false;
	target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = duration + 'ms';
  target.style.boxSizing = 'border-box';
  target.style.height = target.offsetHeight + 'px';
  target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  if ( HIGHLIGHT.Product.RAF_FUNCTION != null ) {
		HIGHLIGHT.Product.RAF_FUNCTION();
  }
  window.setTimeout(function(){
	  if ( HIGHLIGHT.Product.RAF != null && cwpe ) {
	  	window.cancelAnimationFrame(HIGHLIGHT.Product.RAF);
	  }
    target.style.display = 'none';
    target.style.removeProperty('height');
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
  }, duration);
}
window.slideDown = function(target, duration, cwpe) {
  cwpe = cwpe ? true : false;
	target.style.removeProperty('display');
  var display = window.getComputedStyle(target).display;

  if (display === 'none')
    display = 'block';

  target.style.display = display;
  var height = target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.offsetHeight;
  target.style.boxSizing = 'border-box';
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + 'ms';
  target.style.height = height + 'px';
  target.style.removeProperty('padding-top');
  target.style.removeProperty('padding-bottom');
  target.style.removeProperty('margin-top');
  target.style.removeProperty('margin-bottom');
  if ( HIGHLIGHT.Product.RAF_FUNCTION != null && cwpe ) {
		HIGHLIGHT.Product.RAF_FUNCTION();
  }
  window.setTimeout(function(){
	  if ( HIGHLIGHT.Product.RAF != null ) {
  		window.cancelAnimationFrame(HIGHLIGHT.Product.RAF);
  	}
    target.style.removeProperty('height');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
  }, duration);
}

// Get responsive size for image (used in predictive search)

window.getSizedImageUrl = function(src, size) {

  if ( size === null || src === null ) {
    return src;
  }

  if (size === 'master') {
    return removeProtocol(src);
  }

  var match = src.match(
    /\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i
  );

  if (match !== null) {
    var prefix = src.split(match[0]);
    var suffix = match[0];
    return removeProtocol(prefix[0] + '_' + size + suffix);
  }

  function removeProtocol(path) {
    return path.replace(/http(s)?:/, '');
  }

  return src;

}

// Format time based on utc (used in predictive search)

window.formatTime = function(format, utc) {

  var date = new Date(utc);
  var nDay = date.getDay(),
    nDate = date.getDate(),
    nMonth = date.getMonth(),
    nYear = date.getFullYear(),
    nHour = date.getHours(),
    aDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    aMonths = window.month_names,
    aDayCount = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
    isLeapYear = function() {
      return (nYear%4===0 && nYear%100!==0) || nYear%400===0;
    },
    getThursday = function() {
      var target = new Date(date);
      target.setDate(nDate - ((nDay+6)%7) + 3);
      return target;
    },
    zeroPad = function(nNum, nPad) {
      return ((Math.pow(10, nPad) + nNum) + '').slice(1);
    };
  return format.replace(/%[a-z]/gi, function(sMatch) {
    return (({
      '%a': aDays[nDay].slice(0,3),
      '%A': aDays[nDay],
      '%b': aMonths[nMonth].slice(0,3),
      '%B': aMonths[nMonth],
      '%c': date.toUTCString(),
      '%C': Math.floor(nYear/100),
      '%d': zeroPad(nDate, 2),
      '%e': nDate,
      '%F': date.toISOString().slice(0,10),
      '%G': getThursday().getFullYear(),
      '%g': (getThursday().getFullYear() + '').slice(2),
      '%H': zeroPad(nHour, 2),
      '%I': zeroPad((nHour+11)%12 + 1, 2),
      '%j': zeroPad(aDayCount[nMonth] + nDate + ((nMonth>1 && isLeapYear()) ? 1 : 0), 3),
      '%k': nHour,
      '%l': (nHour+11)%12 + 1,
      '%m': zeroPad(nMonth + 1, 2),
      '%n': nMonth + 1,
      '%M': zeroPad(date.getMinutes(), 2),
      '%p': (nHour<12) ? 'AM' : 'PM',
      '%P': (nHour<12) ? 'am' : 'pm',
      '%s': Math.round(date.getTime()/1000),
      '%S': zeroPad(date.getSeconds(), 2),
      '%u': nDay || 7,
      '%V': (function() {
              var target = getThursday(),
                n1stThu = target.valueOf();
              target.setMonth(0, 1);
              var nJan1 = target.getDay();
              if (nJan1!==4) target.setMonth(0, 1 + ((4-nJan1)+7)%7);
              return zeroPad(1 + Math.ceil((n1stThu-target)/604800000), 2);
            })(),
      '%w': nDay,
      '%x': date.toLocaleDateString(),
      '%X': date.toLocaleTimeString(),
      '%y': (nYear + '').slice(2),
      '%Y': nYear,
      '%z': date.toTimeString().replace(/.+GMT([+-]\d+).+/, '$1'),
      '%Z': date.toTimeString().replace(/.+\((.+?)\)$/, '$1')
    }[sMatch] || '') + '') || sMatch;
  });

}

window._htmlEscape = function(input) {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

window.KEYCODES = {
  TAB: 9,
  ESC: 27,
  DOWN: 40,
  RIGHT: 39,
  UP: 38,
  LEFT: 37,
  RETURN: 13
}

window.wordFunctions = {
  count: function(str){
    return str.match(/(\w+)/g).length;
  },
  trim: function(str, max){
    const array = str.trim().split(' ');
    const ellipsis = array.length > max ? '...' : '';
    return array.slice(0, max).join(' ') + ellipsis;
  }
}
HIGHLIGHT.Shortcodes = {};

// Toggles

HIGHLIGHT.Shortcodes.Toggles = {
 
  mount: function() {

    $('.toggles:not(.init)').each(function(){

      $(this).addClass('init');
      const cwpe = $(this).hasClass('connect-with-product-event') ? true : false;

      const $titles = $(this).find('.toggle__title'),
            $contents = $(this).find('.toggle__content'),
            i = 0;

      $titles.each(function(){

        $(this)
          .append('<svg aria-hidden="true" focusable="false" role="presentation" class="symbol symbol--minus" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.48511 7.00293H15.4852V9.13403H1.48511V7.00293Z" fill="#111111"/></svg>')
          .append('<svg aria-hidden="true" focusable="false" role="presentation" class="symbol symbol--plus" width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.48517 7.48145H15.4852V9.61255H1.48517V7.48145Z" fill="#111111"/><path d="M9.48517 1.08789V16.0056H7.48517V1.08789H9.48517Z" fill="#111111"/></svg>');
      
        $(this).on('click', function(){

          const $toggle = $(this).next('.toggle__content');

          if ( ! $(this).hasClass('opened') ) {
            $(this).addClass('opened');
            $(this).attr('aria-expanded', 'true');
            window.slideDown($toggle[0], 200, cwpe)
          } else {
            $(this).removeClass('opened');
            $(this).attr('aria-expanded', 'false');
            window.slideUp($toggle[0], 200, cwpe)
          }
          
        });

      }).on('keydown', function(e){
        if ( e.keyCode == window.KEYCODES.RETURN ) {
          $(this).trigger('click');
        }
      })

      $(this).find('.contents').remove();

    });

  }

}

// Mount in page

$(document).ready(function(){
  if ( $('.toggles').length > 0 ) {
    HIGHLIGHT.Shortcodes.Toggles.mount();
  }
});

// Shopify events

$(document).on('shopify:section:load', function(e){

  var $section = $(e.target);
  if ( $section.hasClass('mount-toggles') ) {
    HIGHLIGHT.Shortcodes.Toggles.mount();
  }

}).on('shopify:block:select', function(e){

  var $block = $(e.target); 

  if ( $block.hasClass('toggle') ) {
    if ( ! $block.find('.toggle__title').hasClass('opened') ) {
      $block.find('.toggle__title').addClass('opened');
      window.slideDown($block.find('.toggle__content')[0], 200);
    }
  }

}).on('shopify:block:deselect', function(e){

  var $block = $(e.target);

  if ( $block.hasClass('toggle') ) {
    if ( $block.find('.toggle__title').hasClass('opened') ) {
      $block.find('.toggle__title').removeClass('opened');
      window.slideUp($block.find('.toggle__content')[0], 200);
    }
  }

});
HIGHLIGHT.Header = {

	body: null,
	logo: null,
	sidebarCart: null,
	sidebarSearch: null,
	sidebarMenu: null,
	opened: null,

	$header: $('.header-holder'),
	SCROLL_StickyHelper: null,
	RESIZE_SidebarHelper: null,

	A11Y_TAB_EVENT: null,
	A11Y_ARROW_EVENT: null,

	mount: function() {

		this.body = document.querySelector('body');
		this.logo = document.getElementById('logo');
		this.sidebarCart = document.getElementById('site-cart-sidebar');
		this.sidebarSearch = document.getElementById('site-search-sidebar');
		this.sidebarMenu = document.getElementById('site-menu-sidebar');

		window.sidebarCartAjaxFunctions();

		if ( document.getElementById('cart-open-button') ) {
			document.getElementById('cart-open-button').addEventListener('click', (function(e){
				e.preventDefault();
				this.openSidebar('cart');
			}).bind(this));
			document.getElementById('cart-open-button').addEventListener('keyup', (function(e){
				if ( e.keyCode == window.KEYCODES.RETURN ) {
					this.sidebarCart.querySelector('.close-sidebar').focus();
				}
			}).bind(this));
		}

		if ( document.getElementById('menu-open-button') ) {
			document.getElementById('menu-open-button').addEventListener('click', (function(e){
				e.preventDefault();
				this.openSidebar('menu');
			}).bind(this));
			document.getElementById('menu-open-button').addEventListener('keyup', (function(e){
				if ( e.keyCode == window.KEYCODES.RETURN ) {
					this.sidebarMenu.querySelector('.close-sidebar').focus();
				}
			}).bind(this));
		}

		if ( document.getElementById('search-open-button') ) {
			document.getElementById('search-open-button').addEventListener('click', (function(e){
				e.preventDefault();
				this.openSidebar('search');
			}).bind(this));
		}

		document.querySelectorAll('.sidebar__close button.close-sidebar').forEach((function(elm){
			elm.addEventListener('click', (function(e){
				e.preventDefault();
				if ( e.target.closest('.sidebar').classList.contains('sidebar--opened') ) {
					this.closeSidebar(e.target.closest('.sidebar'));
				}
			}).bind(this));
		}).bind(this));

		document.querySelector('.page-overlay').addEventListener('click', (function(e){
			if ( this.opened == 'cart' ) {
				this.closeSidebar(this.sidebarCart);
			} else if ( this.opened == 'search' ) {
				this.closeSidebar(this.sidebarSearch);
			} else if ( this.opened == 'menu' ) {
				this.closeSidebar(this.sidebarMenu);
			} else if ( this.opened == 'local-availability' ) {
				this.closeSidebar(document.getElementById('StoreAvailabilityModal'));
			}
		}).bind(this));

		this.RESIZE_SidebarHelper = window.debounce((function(e){
			if ( this.opened != null ) {
				document.querySelector('.sidebar--opened').style.height = window.innerHeight + 'px';
			}
		}).bind(this), 200);
		window.addEventListener('resize', this.RESIZE_SidebarHelper);

		this._mountNavigation();

		// Sticky sidebar

		window.lst = window.scrollY;
		window.lhp = 0;

		this.SCROLL_StickyHelper = (function(){

      var st = window.scrollY;

      if ( st < 0 || Math.abs(lst - st) <= 5 ) 
        return;	

      if ( st <= window.lhp ) {
				this.$header.removeClass('animate');
				this.$header.removeClass('fix');
				this.$header.removeClass('ready');
      } else {

	     	if ( st == 0 ) {

					this.$header.removeClass('animate');
					this.$header.removeClass('fix');
					this.$header.removeClass('ready');

	     	} else if ( st <= lst && ! this.$header.hasClass('fix') ) {
	     		window.lhp = this.$header.children('.header').offset().top;
					this.$header.addClass('fix');
					setTimeout((function(){
						this.$header.addClass('ready');
					}).bind(this), 5);
					setTimeout((function(){
						this.$header.addClass('animate');
					}).bind(this), 25);

				} else if ( st > lst && this.$header.hasClass('animate') ) {
					this.$header.removeClass('animate');
					setTimeout((function(){
						this.$header.removeClass('fix');
						this.$header.removeClass('ready');
					}).bind(this), 105);
				}

			}

			window.lst = st;

		}).bind(this);

		window.addEventListener('scroll', this.SCROLL_StickyHelper, {passive:true});

		// a11y escape sidebars event

		document.addEventListener('keydown', (function(e){
			if ( e.keyCode == window.KEYCODES.ESC ) {
				if ( this.opened == 'cart' ) {
					this.closeSidebar(this.sidebarCart);
				} else if ( this.opened == 'search' ) {
					this.closeSidebar(this.sidebarSearch);
				} else if ( this.opened == 'menu' ) {
					this.closeSidebar(this.sidebarMenu);
				} else if ( this.opened == 'local-availability' ) {
					this.closeSidebar(document.getElementById('StoreAvailabilityModal'));
				}
			}
		}).bind(this));

	},

	openSidebar: function(type){

		this.body.classList.add('sidebar-opened');
		this.opened = type;

		if ( type == 'cart' ) {

			if ( ! this.sidebarCart.classList.contains('sidebar--opened') ) {
				this.sidebarCart.style.display = 'block';
				setTimeout((function(){
					this.sidebarCart.classList.add('sidebar--opened');
					this.sidebarCart.style.height = window.innerHeight + 'px';
					this._mountA11YHelper(this.sidebarCart);
				}).bind(this), 15);
				this.body.classList.add('sidebar-opened--right');
				document.getElementById('cart-open-button').setAttribute('aria-expanded', 'true');
			}

		} else if ( type == 'search' ) {

			if ( ! this.sidebarSearch.classList.contains('sidebar--opened') ) {
				this.sidebarSearch.style.display = 'block';
				setTimeout((function(){
					this.sidebarSearch.classList.add('sidebar--opened');
					this.sidebarSearch.querySelector('input[type="search"]').focus();
					this.sidebarSearch.style.height = window.innerHeight + 'px';
					this._mountA11YHelper(this.sidebarSearch);
				}).bind(this), 15);
				this.body.classList.add('sidebar-opened--right');
				document.getElementById('search-open-button').setAttribute('aria-expanded', 'true');
			}

		} else if ( type == 'menu' ) {

			if ( ! this.sidebarMenu.classList.contains('sidebar--opened') ) {
				this.sidebarMenu.style.display = 'block';
				setTimeout((function(){
					this.sidebarMenu.classList.add('sidebar--opened');
					this.sidebarMenu.style.height = window.innerHeight + 'px';
					this._mountA11YHelper(this.sidebarMenu);
				}).bind(this), 15);
				this.body.classList.add('sidebar-opened--left');
				document.getElementById('menu-open-button').setAttribute('aria-expanded', 'true');
			}

		}

	},
	closeSidebar: function(sidebar){

		sidebar.classList.remove('sidebar--opened');

		if ( this.opened == 'cart' ) {
			document.getElementById('cart-open-button').setAttribute('aria-expanded', 'false');
		} else if ( this.opened == 'search' ) {
			document.getElementById('search-open-button').setAttribute('aria-expanded', 'false');
		} else if ( this.opened == 'menu' ) {
			document.getElementById('menu-open-button').setAttribute('aria-expanded', 'false');
		}

		this.body.classList.remove('sidebar-opened');
		this.body.classList.remove('sidebar-opened--left');
		this.body.classList.remove('sidebar-opened--right');
		this.opened = null;
		this._unmountA11YHelper(sidebar);

		setTimeout((function(sidebar){
			sidebar.style.display = 'none';
		}).bind(this, sidebar), 501);

	},

	_mountNavigation: function(){

		let submenuLevel = 0,
				sidebarMenus = document.querySelector('.sidebar__menus'),
				closeButton = document.querySelector('#site-menu-sidebar button.close-sidebar'),
				backButton = document.querySelector('#site-menu-sidebar button.navigate-back');

		document.querySelectorAll('.sidebar__menus .sidebar__menu .has-submenu > a').forEach((function(elm){

			elm.addEventListener('click', function(e){

		 		e.preventDefault();
		 		sidebarMenus.scrollTop = 0;

		 		if ( e.target.parentElement.classList.contains('has-second-submenu') ) {
		 			submenuLevel = 2;
		 		} else {
		 			submenuLevel = 1;
		 		}

		 		e.target.parentElement.classList.add('opened');
		 		e.target.closest('.sidebar__menus').classList.add('opened');
		 		e.target.parentElement.parentElement.classList.add('opened');
		 		e.target.parentElement.parentElement.parentElement.classList.add('opened');

		 		closeButton.style.display = 'none';
		 		backButton.style.display = 'flex';

			});

			elm.addEventListener('keydown', (function(e){
				if ( e.keyCode == window.KEYCODES.RETURN ) {
					this._unmountA11YHelper(this.sidebarMenu);
					let submenuFocus = [backButton];
					elm.parentElement.querySelectorAll('a').forEach(function(innerElm){
						submenuFocus.push(innerElm);
					})
					this._mountA11YHelper(this.sidebarMenu, submenuFocus);
					setTimeout(function(){
						backButton.focus();
					}, 10);
				}
			}).bind(this));

		}).bind(this));

		document.querySelector('.sidebar__close button.navigate-back').addEventListener('click', function(e){

			e.preventDefault();

				if ( submenuLevel == 1 ) {
		 			submenuLevel = 0;
		 			sidebarMenus.classList.remove('opened')
		 			sidebarMenus.querySelectorAll('.opened').forEach(function(elm){
		 				elm.classList.remove('opened');
		 			});
		 			sidebarMenus.scrollTop = 0;
		 			backButton.style.display = 'none';
		 			closeButton.style.display = 'flex';
		 		} else if ( submenuLevel == 2 ) {
		 			submenuLevel = 1;
		 			sidebarMenus.querySelector('.has-second-submenu.opened').parentElement.classList.remove('opened');
		 			sidebarMenus.querySelector('.has-second-submenu.opened').parentElement.parentElement.classList.remove('opened');
		 			sidebarMenus.querySelector('.has-second-submenu.opened').classList.remove('opened');
		 		}

		});
		document.querySelector('.sidebar__close button.navigate-back').addEventListener('keydown', (function(e){
			if ( e.keyCode == window.KEYCODES.RETURN ) {
				if ( submenuLevel == 1 ) {
					this._unmountA11YHelper(this.sidebarMenu);
					setTimeout((function(){
						closeButton.focus();
						this._mountA11YHelper(this.sidebarMenu);
					}).bind(this), 10);
				}
			}
		}).bind(this));

	},

	_mountA11YHelper: function(sidebar, forcedFocus){

		let focusable = forcedFocus ? forcedFocus : sidebar.querySelectorAll('button, [href], input:not([type="hidden"]), select, textarea, .regular-select-cover');

		let firstFocusable = focusable[0];
		let lastFocusable = focusable[focusable.length - 1];
		if ( sidebar.id == 'site-cart-sidebar' && sidebar.querySelector('.cart-holder').getAttribute('data-items') != '0' ) {
			lastFocusable = focusable[focusable.length - 2];
		}

		this.A11Y_TAB_EVENT = (function(firstFocusable, lastFocusable, e){
		  let isTabPressed = (e.key === 'Tab' || e.keyCode === window.KEYCODES.TAB);
		  if (!isTabPressed) { 
		    return; 
		  }
		  if ( e.shiftKey ) /* shift + tab */ {
		    if (document.activeElement === firstFocusable) {
	     		lastFocusable.focus();
	        e.preventDefault();
	      }
	    } else /* tab */ {
		    if (document.activeElement === lastFocusable) {
	      	firstFocusable.focus();
	        e.preventDefault();
	      }
	    }
		}).bind(this, firstFocusable, lastFocusable)

 		sidebar.addEventListener('keydown', this.A11Y_TAB_EVENT);

	},

	_unmountA11YHelper: function(sidebar){
		sidebar.removeEventListener('keydown', this.A11Y_TAB_EVENT);
	},

	unmount: function(){
		window.removeEventListener('scroll', this.SCROLL_StickyHelper);
		window.removeEventListener('resize', this.RESIZE_SidebarHelper);
	}

}

$(document).ready(function(){
	HIGHLIGHT.Header.mount();
});

// Shopify events

$(document).on('shopify:section:select', function(e){
	var $section = $(e.target);
	if ( $section.hasClass('mount-header') ) {
		setTimeout(function(){
			window.scrollTo(0, 0);
		}, 500);
	}
}).on('shopify:section:load', function(e){
	var $section = $(e.target);
	if ( $section.hasClass('mount-header') ) {
		HIGHLIGHT.Header.mount();
		setTimeout(function(){
			window.scrollTo(0, 0);
		}, 500);
	}
}).on('shopify:section:unload', function(e){
	var $section = $(e.target);
	if ( $section.hasClass('mount-header') ) {
		HIGHLIGHT.Header.unmount();
	}
});
HIGHLIGHT.AnnouncementBar = {

  mount: function() {

    var $announcement = $('.announcement');

    if ( $('.announcement__exit').length > 0 ) {
      $('.announcement__exit').on('click', function(){
        $('html').removeClass('show-announcement-bar');
        localStorage.setItem('announcement-dismissed', 'true');
      });
    }

  }

}

// Mount in page

if ( $('.mount-announcement').length > 0 ) {
  HIGHLIGHT.AnnouncementBar.mount();
} 

// Shopify events

$(document).on('shopify:section:load, shopify:section:select', function(e){
  var $section = $(e.target);
  if ( $section.hasClass('mount-announcement') ) {
    setTimeout(function(){
      window.scrollTo(0, 0);
    }, 500);
    if ( $('.announcement').length > 0 ) {
      $('html').addClass('show-announcement-bar');
    } else {
      $('html').removeClass('show-announcement-bar');
    }
  }
});
HIGHLIGHT.Popup = {

	$popup: null,

	mount: function() {

		this.$popup = $('#shopify-section-popup');

		var show = this.$popup.find('.popup-content').data('show'),
				freq = this.$popup.find('.popup-content').data('freq'),
				enable = this.$popup.find('.popup-content').data('enable');

		if ( show > 0 && enable ) {
			setTimeout((function(){
				this._trigger(show, freq);
			}).bind(this), parseInt(show*1000));
		}

		this.$popup.find('.popup-close').on('click', (function(e){
			this._hide();
		}).bind(this));

		this.$popup.find('.popup-background').on('click', (function(e){
			this._hide();
		}).bind(this));

	},

	_show: function() {
		this.$popup.addClass('active');
	},

	_hide: function() {
		this.$popup.removeClass('active');
	},

	_trigger: function(show, freq) {

		var popupKey = 'popup-' + document.location.hostname,
				popupStorage = localStorage.getItem(popupKey) != null ? JSON.parse(localStorage.getItem(popupKey)) : null;

		if ( popupStorage != null ) {
			
			if ( popupStorage['show'] != show || popupStorage['freq'] != freq ) {

				this._refreshStorage(popupKey, show, freq);;

				// user saw the ad but settings are different - show it!
				this._show();

			} else {

				// user saw the ad so we need to check if he should see it again

				if ( freq == 'every' ) { 

					if ( sessionStorage[popupKey] == null || sessionStorage[popupKey] != 'shown' ) {
						this._show();
						this._refreshStorage(popupKey, show, freq);;
					}

				} else {

					var shownAt = popupStorage['shown'],
							nowAt = new Date().getTime(),
							inBetween = Math.round((nowAt - shownAt) / 1000);

					if ( freq == 'day' && inBetween > 129600 ) {
						this._show();
						this._refreshStorage(popupKey, show, freq);;
					} else if ( freq == 'week' && inBetween > 907200 ) {
						this._show();
						this._refreshStorage(popupKey, show, freq);;
					}

				}

			}

		} else {

			this._refreshStorage(popupKey, show, freq);

			// user never saw the ad - show it!

			this._show();

		}

	},

	_refreshStorage: function(popupKey, show, freq) {

		localStorage.setItem(popupKey, JSON.stringify({
			'show': show,
			'freq': freq,
			'shown': new Date().getTime()
		}));

		sessionStorage[popupKey] = 'shown';

	}

}


// Mount in page

if ( $('.mount-popup').length > 0 ) {
	HIGHLIGHT.Popup.mount($(this));
}

// Shopify events

$(document).on('shopify:section:load', function(e){
	var $section = $(e.target);
	if ( $section.hasClass('mount-popup') ) {
		window.HIGHLIGHT.Popup.mount();
	}
}).on('shopify:section:select', function(e){
	var $section = $(e.target);
	if ( $section.hasClass('mount-popup') ) {
		window.HIGHLIGHT.Popup._show();
	}
}).on('shopify:section:deselect', function(e){
	var $section = $(e.target);
	if ( $section.hasClass('mount-popup') ) {
		window.HIGHLIGHT.Popup._hide();
	}
});
/*
 *  ==== 
  Cart Form
    - AJAX Functions (change qty & remove)
=====
*/

window.sidebarCartAjaxFunctions = function() {

	var $form = $('form.cart');

	$form.find('.cart-item:not(.ajax-init)').each(function(){

		$(this).addClass('ajax-init');

		var $item = $(this);

		var $remove = $(this).find('.remove');
		$remove.data('href', $remove.attr('href'));
		$remove.removeAttr('href');

		var $qty = $(this).find('.qty');
		$qty.data('href', $qty.attr('data-href'));
		$qty.removeAttr('data-href');

		// Remove items

		$remove.on('click', function(e){
			e.preventDefault();
			updateCartQty($item, 0);
		});

		// Update quantities

		$qty.on('input', window.debounce(function(e){
			e.preventDefault();
			e.target.blur();
			updateCartQty($item, parseInt($qty.val()));
		}, 300)).on('click', function(e){
			e.target.select();
		});

	});

}

function updateCartQty($item, newQty) {

	$item.addClass('remove-process');
	var itemId = $item.data('id');
	var itemVariant = $item.data('variant');

  fetch(window.HIGHLIGHTSettings.routes.cart_change_url + '.js', {
    body: JSON.stringify({
      id: itemId,
      quantity: newQty
    }),
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(function (response) {

  	if ( response.ok ) { 
		
	  	fetch(window.HIGHLIGHTSettings.routes.cart_url, {
        credentials: 'same-origin',
        method: 'GET'
      }).then(function(response) {

        response.text().then(function(html) {

					var $html = $(html);

					if ( newQty > 0 ) {
						$item.replaceWith($html.find('#section-cart').find('.cart-item[data-variant="' + itemVariant + '"]'));
					} else {
						$item.remove();
					}

					$('.site-cart-heading').html($html.find('.site-cart-heading').html());
					$('.menu-meta__count').html($html.find('.menu-meta__count').html());

					if ( $html.find('.cart-items').length > 0 ) {
						$('#CartTotal').html($html.find('#CartTotal').html());
						$('#CartDetails').html($html.find('#CartDetails').html());
					} else {
						$('form.cart').addClass('cart--empty');
					}

					window.sidebarCartAjaxFunctions();

					setTimeout(function(){
						$item.removeClass('remove-process');
					}, 150);

					if ( newQty > parseInt($('html').find('.cart-item[data-variant="' + itemVariant + '"]').data('qty')) ) {
						alert(window.HIGHLIGHTSettings.locales.cart_add_error.replace('{{ title }}', $item.data('title')));
					}

      	});

			});

		} else {
			alert(window.HIGHLIGHTSettings.locales.cart_general_error);
			$item.removeClass('remove-process');
		}

	});

}
HIGHLIGHT.Localization = {

	mount: function() {

		$('.localization-form__item .regular-select-cover').each(function(){

			if ( ! $(this).hasClass('init') ) {

				$(this).addClass('init');

				$(this).on('click', function(e){

					e.stopPropagation();
					e.preventDefault();
					var _this = $(this)[0];

					$('.regular-select-cover.content-opened').each(function(){
						if ( $(this)[0] != _this ) {
							$(this).removeClass('content-opened');
							$(this).parent().css('zIndex', 9);
						}
					});

					let $content = $('#' + $(this).attr('aria-controls'));

					if ( ! $(this).hasClass('content-opened') ) {

						$(this).attr('aria-expanded', 'true');
						$content.addClass('content-opened');
						$content.parent().css('zIndex', 1000);
						var $selectHandle = $content;
/*
						if ( $(this).hasClass('invert-with-fixed') ) {
							if ( $(this)[0].getBoundingClientRect().y + $(this).find('.regular-select-content').height() + 55 > window.innerHeight ) {
								$(this).addClass('invert');
							}
						} else {
							if ( $(this).offset().top + $(this).find('.regular-select-content').height() + 55 > $('html').height() ) {
								$(this).addClass('invert');
							}
						}
*/
						$(window).on('click.select-helper', function(){
							if ( $selectHandle.hasClass('content-opened') ) {
								$selectHandle.removeClass('content-opened').removeClass('invert');
								$selectHandle.parent().css('zIndex', 9);
							}
						});

					} else {
						$(this).attr('aria-expanded', 'false');
						$content.parent().css('zIndex', 9);
						$content.removeClass('content-opened').removeClass('invert');
						$(window).off('click.select-helper');
					}

				}).on('keydown', function(e){
					if ( e.keyCode == window.KEYCODES.RETURN ) {
						if ( ! $(this).hasClass('opened-with-tab') ) {
							$(this).addClass('opened-with-tab');
							$(this).trigger('click');
							$(this).find('.regular-select-item').attr('tabindex', '0');
						}
					} else if ( e.keyCode == window.KEYCODES.ESC ) {
						if ( $(this).attr('aria-expanded') == 'true' ) {
							$(this).attr('aria-expanded', 'false');
							let $content = $('#' + $(this).attr('aria-controls'));
							$content.removeClass('content-opened').removeClass('invert');
							$content.parent().css('zIndex', 9);
						}
					}
				});

			}

		});

		$('.localization-form__item .regular-select-content').each(function(){
			$(this).on('keydown', function(e){
				if ( e.keyCode == window.KEYCODES.ESC ) {
					$(this).removeClass('content-opened').removeClass('invert');
					$(this).parent().css('zIndex', 9);
 				}
			})
		});

	}

}


// Mount in page

$(document).ready(function(){
  if ( $('.localization-form__item').length > 0 ) {
    HIGHLIGHT.Localization.mount();
  }
});

// Shopify events

$(document).on('shopify:section:load', function(e){
  var $section = $(e.target);
  if ( $section.hasClass('mount-footer') && $section.find('.localization-form__item').length > 0 ) {
    HIGHLIGHT.Localization.mount();
  }
});
HIGHLIGHT.Collection = {
	mount: function($collection){
		
		setTimeout((function($collection){

			let variantZIndex = 9;
			$collection.find('.product-item__variant').each(function(){

				var $productLink = $(this).closest('.product-item').children('.product-item__link');

				$(this).find('.product-item__variant-image').appendTo($productLink.find('.product-item__image'));
				$(this).on('click', function(){

					$(this).siblings().removeClass('active');
					$(this).addClass('active');

					$productLink.attr('href', $(this).data('href'));

					var $variantImage = $productLink.find('.product-item__variant-image[data-id="' + $(this).index() + '"]')
					$variantImage.removeClass('active');
					$variantImage.css('zIndex', ++variantZIndex);

					setTimeout(function(){
						$variantImage.addClass('active');
					}, 10);

				});
			});

		}).bind(this, $collection), 500);
	}

}

$(document).ready(function(){
	if ( window.HIGHLIGHTSettings.show_variant_image && $('.mount-collection').length > 0 ) {
		$('.mount-collection').each(function(){
			HIGHLIGHT.Collection.mount($(this));
		})
	}
})

// Shopify events

$(document).on('shopify:section:load', function(e){
	var $section = $(e.target);
	if ( $section.hasClass('mount-collection') > 0 && window.HIGHLIGHTSettings.show_variant_image ) {
		HIGHLIGHT.Collection.mount($section);
	}
});
HIGHLIGHT.ProductMedia = {

	_productHostedVideos: {},
	_productYouTubeVideos: {},
	_productVimeoVideos: {},
	_productModels: {},

	_plyrStylesLoaded: false,
	_modelStylesLoaded: false,
	_videoLooping: false,

	mount: function($product) {
		
		var productData = window.productData[$product.data('id')];
		this._videoLooping = productData.$productGallery.data('video-looping');

		productData.$productGalleryItem.each((function(i, item){

			// init $item variables, media objects

			switch ( $(item).data('product-media-type') ) {
				case 'video': 
					this._productHostedVideos[$(item).data('media-id')] = {
						$item: $(item),
						$gallery: productData.$productGallery,
						slider: productData.productSlider,
						player: null,
						init: false
					}
					break;
				case 'external_video': 
					if ( $(item).data('video-host') == 'vimeo' ) {
						this._productVimeoVideos[$(item).data('media-id')] = {
							$item: $(item),
							$gallery: productData.$productGallery,
							slider: productData.productSlider,
							player: null,
							init: false
						}
					} else if ( $(item).data('video-host') == 'youtube' ) {
						this._productYouTubeVideos[$(item).data('media-id')] = {
							$item: $(item),
							$gallery: productData.$productGallery,
							slider: productData.productSlider,
							player: null,
							init: false
						}
					}
					break;
				case 'model': 
					this._productModels[$(item).data('media-id')] = {
						$item: $(item),
						$gallery: productData.$productGallery,
						slider: productData.productSlider,
						player: null,
						init: false
					}
			}

		}).bind(this));

		// check video array

		if ( Object.keys(this._productHostedVideos).length > 0 ) {
			if ( ! Shopify.Plyr ) {
				window.Shopify.loadFeatures([
	        {
	          name: 'video-ui',
	          version: '1.0',
	          onLoad: (function(){
	          	this._mountSelfHostedVideos();
	          }).bind(this)
	        }
	      ]);
        this.LibraryLoader.load('plyrShopifyStyles', (function(){
        	this._plyrStylesLoaded = true;
        	$('.plyr').addClass('lazyloaded');
					$('.plyr').find('video').addClass('loaded');
					setTimeout(function(){
						$('.plyr').addClass('reset-transitions');
					}, 50);
        }).bind(this));
			} else {
      	this._mountSelfHostedVideos();
			}
		}

		// check YouTube array

		if ( Object.keys(this._productYouTubeVideos).length > 0 ) {
			if ( ! window.YT ) {
        this.LibraryLoader.load('youtubeSdk');
			} else {
				HIGHLIGHT.ProductMedia._mountYouTubeVideos();
			}
		}

		// check Vimeo array

		if ( Object.keys(this._productVimeoVideos).length > 0 ) {
			if ( ! window.Vimeo ) {
        this.LibraryLoader.load('vimeoSdk', (function(){
					HIGHLIGHT.ProductMedia._mountVimeoVideos();
        }).bind(this));
			} else {
				HIGHLIGHT.ProductMedia._mountVimeoVideos();
			}
		}

		// check models array

		var $xrButton = $product.find('.product-gallery__view-in-space');

		if ( Object.keys(this._productModels).length > 0 ) {

			if ( ! Shopify.ModelViewerUI ) {
				window.Shopify.loadFeatures([
	        {
	          name: 'model-viewer-ui',
	          version: '1.0',
	          onLoad: (function(){
	          	this._mountModels();
	          }).bind(this)
	        }
	      ]);
				this.LibraryLoader.load('modelViewerUiStyles', (function(){
					this._modelStylesLoaded = true;
					$('.shopify-model-viewer-ui').addClass('lazyloaded');
				}).bind(this));
			} else {
				this._mountModels();
			}

			if ( ! Shopify.ShopifyXR ) {
				window.Shopify.loadFeatures([
		      {
		        name: 'shopify-xr',
		        version: '1.0',
		        onLoad: (function(){

    					if ( ! window.ShopifyXR ) {
			        	document.addEventListener('shopify_xr_initialized', (function(){
		          		this._setupShopifyXr(JSON.parse($product.find('.model-json')[0].innerHTML));
			        	}).bind(this));
			        } else {
		          	this._setupShopifyXr(JSON.parse($product.find('.model-json')[0].innerHTML));
			        }

		        	document.addEventListener('shopify_xr_launch', (function(){
		        		this._triggerAutoPlayOFF(productData.$productGallery);
		        	}).bind(this));

	          }).bind(this)
		      }
	      ]);
			} else {
      	this._setupShopifyXr(JSON.parse($product.find('.model-json')[0].innerHTML));
			}

			// bind flickity events for models
			if ( $xrButton.length > 0 ) {
				productData.productSlider.container.addEventListener('change', function(){
					if ( productData.$productGalleryItem.eq(productData.productSlider.index).data('product-media-type') == 'model' ) {
						$xrButton.attr('data-shopify-model3d-id', productData.$productGalleryItem.eq(productData.productSlider.index).data('media-id'));
					} else {
						$xrButton.attr('data-shopify-model3d-id', $xrButton.data('shopify-first-model3d-id'));
					}
				});
			}

			if ( productData.$productGallery.data('size') > 1 ) {
				productData.productSlider.container.addEventListener('settle', (function(){
					if ( productData.$productGalleryItem.eq(productData.productSlider.index).data('product-media-type') == 'model' ) {
						this._triggerAutoPlayON(productData.$productGalleryItem.eq(productData.productSlider.index));
					}
					$(productData.productSlider.holder).find('.enable-tab:not(.active)').removeClass('enable-tab');
				}).bind(this));
			}

		}

		// bind flickity events for all media

		if ( productData.$productGallery.data('size') > 1 ) {

			let oldIndex = productData.productSlider.index;
			productData.productSlider.container.addEventListener('change', (function(){

				const newIndex = productData.productSlider.index;

				if ( productData.$productGalleryItem.eq(oldIndex).data('product-media-type') == 'external_video' ) {
					productData.$productGalleryItem.eq(newIndex).find('iframe').attr('tabindex', '-1');
				}
				this._triggerAutoPlayOFF(productData.$productGallery);
				oldIndex = newIndex;

				if ( productData.$productGalleryItem.eq(newIndex).data('product-media-type') != 'model' ) {
					this._triggerAutoPlayON($(productData.$productGalleryItem.eq(newIndex)));
				}
				if ( productData.$productGalleryItem.eq(newIndex).data('product-media-type') == 'external_video' ) {
					productData.$productGalleryItem.eq(newIndex).find('iframe').attr('tabindex', '0');
				}
				productData.$productGalleryItem.eq(newIndex).addClass('enable-tab');

			}).bind(this));
		
			productData.productSlider.container.addEventListener('settle', (function(){
				$(productData.productSlider.holder).find('.enable-tab:not(.active)').removeClass('enable-tab');
			}).bind(this));

		}

	},

	_triggerAutoPlayON: function($slide) {
		if ( $slide.hasClass('init-js-actions') ) {
			if ( $('body').hasClass('no-touchevents') && $(window).width() > 835 )  {
				switch ( $slide.data('product-media-type') ) {
					case 'video':
						this._productHostedVideos[$slide.data('media-id')].player.play();
						break;
					case 'external_video':
						if ( $slide.data('video-host') == 'youtube' ) {
							this._productYouTubeVideos[$slide.data('media-id')].player.playVideo();
						} else if ( $slide.data('video-host') == 'vimeo' ) {
							this._productVimeoVideos[$slide.data('media-id')].player.play();
						}
						break;
					case 'model':
						this._productModels[$slide.data('media-id')].player.play();
						break;
				}
			}
		}
	},

	_triggerAutoPlayOFF: function($slider) {
		$slider.find('.product-gallery__item').each((function(i, slide){
			let $slide = $(slide);
			if ( $slide.hasClass('init-js-actions') ) {
				switch ( $slide.data('product-media-type') ) {
					case 'video':
						this._productHostedVideos[$slide.data('media-id')].player.pause();
						break;
					case 'external_video':
						if ( $slide.data('video-host') == 'youtube' && this._productYouTubeVideos[$slide.data('media-id')].player != null ) {
							this._productYouTubeVideos[$slide.data('media-id')].player.pauseVideo();
						} else if ( $slide.data('video-host') == 'vimeo' && this._productVimeoVideos[$slide.data('media-id')].player != null ) {
							this._productVimeoVideos[$slide.data('media-id')].player.pause();
						}
						break;
					case 'model':
						this._productModels[$(slide).data('media-id')].player.pause();
						break;
					}
			}
		}).bind(this));
		
	},

	_mountModels: function() {

		for (const key in this._productModels) {

			let obj = this._productModels[key];

			if ( ! obj.init ) {

				obj.init = true;

				let $model = obj.$item.find('model-viewer')[0],
						model = new Shopify.ModelViewerUI(obj.$item.find('model-viewer')[0]);

				obj.player = model;

				if ( obj.$gallery.data('size') > 1 ) {
					$model.addEventListener('shopify_model_viewer_ui_toggle_play', (function(e){
						obj.slider.toggleDragging(obj.slider, false);
					}).bind(this));
					$model.addEventListener('shopify_model_viewer_ui_toggle_pause', (function(e) {
						obj.slider.toggleDragging(obj.slider, true);
					}).bind(this));
				}

				if ( this._modelStylesLoaded ) {
					obj.$item.find('.shopify-model-viewer-ui').addClass('lazyloaded');
				}
				obj.$item.addClass('init-js-actions');

			}

		}

	},

	_setupShopifyXr: function(modelsJson) {
		window.ShopifyXR.addModels(modelsJson);
    window.ShopifyXR.setupXRElements();
	},

	_mountSelfHostedVideos: function() {

		for (const key in this._productHostedVideos) {

			let obj = this._productHostedVideos[key];

			if ( ! obj.init ) {

				obj.init = true;

				let player = new Shopify.Plyr(obj.$item.find('video')[0], {
					loop: {
						active: this._videoLooping
					}
				});
				obj.player = player;

				player.on('ready', (function($item, e){
					if ( this._plyrStylesLoaded ) {
						$item.addClass('init-js-actions');
						$(e.target).addClass('lazyloaded');
						$(e.target).find('video').addClass('loaded');
						setTimeout((function($player){
							$player.addClass('reset-transitions');
						}).bind(this, $(e.target)), 50);
					} 
				}).bind(this, obj.$item));

				if ( obj.$gallery.data('size') > 1 ) {

					player.on('play', (function(e){
						if ( $(e.target).closest('.product-gallery__item').index() == obj.slider.index ) {
							obj.slider.toggleDragging(obj.slider, false);
						}
					}).bind(this));

					player.on('pause', (function(e){
						if ( $(e.target).closest('.product-gallery__item').index() == obj.slider.index ) {
							obj.slider.toggleDragging(obj.slider, true);
						}
					}).bind(this));

				}

			}

		}

	},

	_mountYouTubeVideos: function() {

		for (const key in this._productYouTubeVideos) {

			let obj = this._productYouTubeVideos[key];

			if ( ! obj.init ) {

				obj.init = true;

				let player = new YT.Player(obj.$item.find('iframe')[0], {
					events: {
						'onStateChange': (function(e){
							if ( e.data === 0 && this._videoLooping ) {
								e.target.seekTo(0);
							}
						}).bind(this),
						'onReady': (function($item, $iframe){
							$item.addClass('init-js-actions');
							$iframe.parent().addClass('lazyloaded');
							$iframe.attr('tabindex', '-1');
						}).bind(this, obj.$item, obj.$item.find('iframe'))
					}
				});
				obj.player = player;

			}

		}

	},

	_mountVimeoVideos: function() {

		for (const key in this._productVimeoVideos) {

			let obj = this._productVimeoVideos[key];

			if ( ! obj.init ) {

				obj.init = true;

				let player = new Vimeo.Player(obj.$item.find('iframe')[0]);
				player.ready().then(function(){
					obj.$item.addClass('init-js-actions');
					obj.$item.find('iframe').parent().addClass('lazyloaded');
					obj.$item.find('iframe').attr('tabindex', '-1');
				});
				obj.player = player;

			}

		}

	},

	unmount: function($gallery) {
		$gallery.find('.product-gallery__item').each((function(i, item){
			delete this._productYouTubeVideos[$(item).data('media-id')];
			delete this._productModels[$(item).data('media-id')];
			delete this._productHostedVideos[$(item).data('media-id')];
		}).bind(this));
	},

	LibraryLoader: (function() {

		var types = {
	    link: 'link',
	    script: 'script'
	  };

	  var status = {
	    requested: 'requested',
	    loaded: 'loaded'
	  };

	  var cloudCdn = 'https://cdn.shopify.com/shopifycloud/';

	  var libraries = {
	    youtubeSdk: {
	      tagId: 'youtube-sdk',
	      src: 'https://www.youtube.com/iframe_api',
	      type: types.script
	    },
	    vimeoSdk: {
	    	tagId: 'vimeo-sdk',
	    	src: 'https://player.vimeo.com/api/player.js',
	    	type: types.script
	    },
	    plyrShopifyStyles: {
	      tagId: 'plyr-shopify-styles',
	      src: cloudCdn + 'shopify-plyr/v1.0/shopify-plyr.css',
	      type: types.link
	    },
	    modelViewerUiStyles: {
	      tagId: 'shopify-model-viewer-ui-styles',
	      src: cloudCdn + 'model-viewer-ui/assets/v1.0/model-viewer-ui.css',
	      type: types.link
	    }
	  };

	  function load(libraryName, callback) {
	    var library = libraries[libraryName];

	    if (!library) return;
	    if (library.status === status.requested) return;

	    callback = callback || function() {};
	    if (library.status === status.loaded) {
	      callback();
	      return;
	    }

	    library.status = status.requested;

	    var tag;

	    switch (library.type) {
	      case types.script:
	        tag = createScriptTag(library, callback);
	        break;
	      case types.link:
	        tag = createLinkTag(library, callback);
	        break;
	    }

	    tag.id = library.tagId;
	    library.element = tag;

	    var firstScriptTag = document.getElementsByTagName(library.type)[0];
	    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	  }

	  function createScriptTag(library, callback) {
	    var tag = document.createElement('script');
	    tag.src = library.src;
	    tag.addEventListener('load', function() {
	      library.status = status.loaded;
	      callback();
	    });
	    return tag;
	  }

	  function createLinkTag(library, callback) {
	    var tag = document.createElement('link');
	    tag.href = library.src;
	    tag.rel = 'stylesheet';
	    tag.type = 'text/css';
	    tag.addEventListener('load', function() {
	      library.status = status.loaded;
	      callback();
	    });
	    return tag;
	  }

	  return {
	    load: load
	  };
	})()

}
/*
 *  ==== 
  Search
    - Predictive search, results & pagination
=====
*/

HIGHLIGHT.Search = {

	$searchForm: null,
	$searchResults: null,
	$searchPagination: null,

	A11Y_ARROW_DOWN_EVENT: null,
	A11Y_ARROW_UP_EVENT: null,
	a11yIndex: -1,
	results: [],

	mount: function(){

		this.$searchForm = $('.search-form');
		this.$searchResults = $('.sidebar__search-results');
		this.$searchResultsContainer = $('.sidebar__search-container');
		this.$searchInput = this.$searchForm.find('input[type="search"]');
		this.$searchMore = $('.sidebar__search-link');

		var searchInputValue = this.$searchInput.val();
		this.$searchForm.find('input[type="search"]').on('keyup', (function(e){
			if ( searchInputValue != this.$searchInput.val() ) {
				searchInputValue = this.$searchInput.val();
				this._ajaxSearchForm();
			}
		}).bind(this));

	  // a11y - events for keyboard navigation

		this.A11Y_ARROW_DOWN_EVENT = (function(e){
	    if ( this.a11yIndex != -1 ) {
	    	if (
		      e.keyCode === window.KEYCODES.UP ||
		      e.keyCode === window.KEYCODES.DOWN ||
		      e.keyCode === window.KEYCODES.RETURN
		    ) {
		      e.preventDefault();
		    }
	    }
		}).bind(this);
		
		this.A11Y_ARROW_UP_EVENT = (function(e){

      if (e.keyCode === window.KEYCODES.UP) {
        this._navigateOption('UP');
        return true;
      }

      if (e.keyCode === window.KEYCODES.DOWN) {
        this._navigateOption('DOWN');
        return true;
      }

      if (e.keyCode === window.KEYCODES.RETURN) {
      	if ( this.a11yIndex != -1 ) {
      		document.location.href = this.results[this.a11yIndex].querySelector('a');
      	}
      }

		}).bind(this);

		if ( this.$searchInput[0] ) {
		  this.$searchInput[0].addEventListener('keydown', this.A11Y_ARROW_DOWN_EVENT);
		  this.$searchInput[0].addEventListener('keyup', this.A11Y_ARROW_UP_EVENT);
		}

	},

	_ajaxSearchForm: function() {

		var query = this.$searchForm.find('input[type="search"]').val();

		if ( query != '' ) {

			if ( ! this.$searchResults.find('.search-item.blank').length > 0 ) {

				this.$searchResults.html('<div class="search-item blank"><div><a class="thumbnail"><figure class="lazy-image" data-ratio></figure></a><div class="content"><span class="title"></span><span class="info"></span></div></div>');
			}

			this.$searchMore.html('<a class="search-more button button--solid button--wide button--align" href="' + window.HIGHLIGHTSettings.routes.search_url + '?q=' + encodeURIComponent(query) + ( '&type=' + "product" + ( window.HIGHLIGHTSettings.predictive_search_include_pages == "true" ? ",page" : "" ) + ( window.HIGHLIGHTSettings.predictive_search_include_articles == "true" ? ",article" : "" ) ) + ( window.HIGHLIGHTSettings.predictive_search_enabled == "true" ? '&options[prefix]=last' : '' ) + '">' + window.HIGHLIGHTSettings.locales.search_for_html.replace('{{ terms }}', window._htmlEscape(query)) + '</a>');

		} else {
			this.$searchResults.html('');
			this.$searchMore.html('');
	  	this.$searchMore.removeClass('push-me');
		}

		if ( window.HIGHLIGHTSettings.predictive_search_enabled == "true" ) {

			var searchDOM = '';

			// new call with xhr

			if ( query != '' ) {

				var configParams = window.objectToQueryParams({
					resources: {
						type:"product,collection" + ( window.HIGHLIGHTSettings.predictive_search_include_pages == "true" ? ",page" : "" ) + ( window.HIGHLIGHTSettings.predictive_search_include_articles == "true" ? ",article" : "" ),
						limit: 4
					}
				});

			  this.results = [];
			  this.a11yIndex = -1;

				var xhr = new XMLHttpRequest();

		    xhr.onreadystatechange = (function() {

		      if (xhr.readyState !== XMLHttpRequest.DONE) {
		        return;
		      }

		      var contentType = xhr.getResponseHeader('Content-Type');

		      if (xhr.status === 200) {

		        try {

		          var response = JSON.parse(xhr.responseText);

						  var productSuggestions = response.resources.results.products,
						  		articleSuggestions = response.resources.results.articles,
						  		pageSuggestions = response.resources.results.pages,
						  		collectionSuggestions = response.resources.results.collections;

						  if ( productSuggestions && productSuggestions.length > 0 ) {

								searchDOM += '<span class="sidebar__caption">' + window.HIGHLIGHTSettings.locales.search_product_results_title + '</span>';

						  	productSuggestions.forEach(function(item){

									searchDOM += '<div class="search-item"><div><a class="thumbnail" href="' + item.url + '" title="' + item.title + '"><figure class="lazy-image" data-ratio>' + ( item.featured_image.url != null ? '<img class="lazyload" src="' + window.getSizedImageUrl(item.featured_image.url, '100x130_crop_center') + '" data-srcset="' + window.getSizedImageUrl(item.featured_image.url, '100x130_crop_center') + ' 100w, ' + window.getSizedImageUrl(item.featured_image.url, '200x260_crop_center') + ' 200w" data-sizes="100px" srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="' + item.title + '" />' : '<span class="onboarding-svg">' + window.HIGHLIGHTSettings.placeholder_image + '</span>' ) + '</figure></a><div class="content"><a href="' + item.url + '"><span class="title">' + item.title + '</span>';

								  if ( window.HIGHLIGHTSettings.predictive_search_show_vendor == "true" ) {
								  	searchDOM += '<span class="info">' + window.HIGHLIGHTSettings.locales.product_vendor.replace('{{ vendor }}', item.vendor) + '</span>';
								  }

								  searchDOM += '</a>';

								  if ( window.HIGHLIGHTSettings.predictive_search_show_price == "true" ) {
								  	searchDOM += '<div class="price"><div class="item__price-list"><span class="item__price">' + theme.Currency.formatMoney(item.price, window.HIGHLIGHTSettings.shop_money_format) + '</span>';
								  	if ( parseInt(item.compare_at_price_max) > parseInt(item.price_min) ) {
								  		searchDOM += '<span class="item__price item__price--compare">' + theme.Currency.formatMoney(item.compare_at_price_max, window.HIGHLIGHTSettings.shop_money_format) + '</span>';
								  	}
								  	searchDOM += '</div></div>';
								  }

								  searchDOM += '</div></div></div>';

						  	});

							} 

							if ( collectionSuggestions && collectionSuggestions.length > 0 ) {
								searchDOM += '<span class="sidebar__caption">' + window.HIGHLIGHTSettings.locales.search_collection_results_title + '</span>';
						  	collectionSuggestions.forEach(function(item){
						  		searchDOM += '<div class="search-item article"><div class="content"><a href="' + item.url +'"><span class="title">' + item.title + '</span></a></div></div>';
						  	});
							}

						  if ( articleSuggestions && articleSuggestions.length > 0 ) {
						  	searchDOM += '<span class="sidebar__caption">' + window.HIGHLIGHTSettings.locales.search_article_results_title + '</span>';
						  	articleSuggestions.forEach(function(item){
						  		searchDOM += '<div class="search-item ' + ( item.featured_image.url != null ? '' : 'article' ) + '"><div>' + ( item.featured_image.url != null ? '<a class="thumbnail" href="' + item.url +'" title="' + item.title + '"><figure class="lazy-image" data-ratio><img class="lazyload" src="' + window.getSizedImageUrl(item.featured_image.url, '100x130_crop_center') + '" data-srcset="' + window.getSizedImageUrl(item.featured_image.url, '100x130_crop_center') + ' 100w, ' + window.getSizedImageUrl(item.featured_image.url, '200x260_crop_center') + ' 200w" data-sizes="100px" srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="' + item.title + '" /></figure></a>' : '' ) + '<div class="content"><a href="' + item.url + '"><span class="title">' + item.title + '</span></a>' + '<span class="info">' + window.formatTime('%b %d, %Y', item.published_at) + '</span>' + '</div></div></div>';
						  	});
						  }

						  if ( pageSuggestions && pageSuggestions.length > 0 ) {
						  	searchDOM += '<span class="sidebar__caption">' + window.HIGHLIGHTSettings.locales.search_page_results_title + '</span>';
						  	pageSuggestions.forEach(function(item){
						  		let body = item.body.replace( /(<([^>]+)>)/ig, '').trim().replace('&nbsp;', '');
						  		searchDOM += '<div class="search-item article"><div class="content"><a href="' + item.url +'"><span class="title">' + item.title + '</span></a>' + ( body != '' ? '<span class="info">' + body.slice(0, 100) + '...' + '</span>' : '' ) + '</div></div>';
						  	});
						  }

						  this.$searchResults.html(searchDOM);

						  this.results = this.$searchResultsContainer[0].querySelectorAll('.search-item, .sidebar__search-link');
						  this.a11yIndex = -1;

					  } catch(error) {

		        }

		        return;

		      } else {

		      }

		      return;

		    }).bind(this);

		    xhr.open(
		      'get',
		      window.HIGHLIGHTSettings.routes.search_url + '/suggest.json?q=' + encodeURIComponent(query) + '&' + configParams
		    );

		    xhr.setRequestHeader('Content-Type', 'application/json');

		    xhr.send(); 

		  }

		} 

	},

	_navigateOption(direction) {

		if ( this.a11yIndex == -1 ) {
			this.a11yIndex = 0;
		} else {
			this.results[this.a11yIndex].classList.remove('active');
			if ( direction == 'UP' ) {
				if ( this.a11yIndex - 1 >= -1 ) {
					this.a11yIndex--;
				} 
			} else if ( direction == 'DOWN' ) {
				if ( this.a11yIndex + 1 < this.results.length ) {
					this.a11yIndex++;
				} 
			}
		}

		if ( this.a11yIndex >= 0 ) {
			this.results[this.a11yIndex].classList.add('active');
			$('#site-search-sidebar')[0].scrollTop = this.results[this.a11yIndex].offsetTop - 100;
		} else {
			$('#site-search-sidebar')[0].scrollTop = this.$searchForm.offsetTop;
		}

	}

}

// Mount in page

$(document).ready(function(){
	if ( ! $('body').hasClass('template-search') ) {
		HIGHLIGHT.Search.mount();
	}
});
HIGHLIGHT.CollectionFilters = {
	mount: function(){
		window.HighlightInitFilters();
		window.HighlightInitSort();	
	}
}

$(document).ready(function(){
	if ( $('.mount-filters').length > 0 ) {
		$('.mount-filters').each(function(){
			HIGHLIGHT.CollectionFilters.mount($(this));
		})
	}
})
HIGHLIGHT.ProductRecommendations = {

	mount: function(){

		let productRecommendationsSection = document.getElementById("product-recommendations");
    let requestUrl = window.HIGHLIGHTSettings.routes.recommended_products_url + '?section_id=product-recommendations&limit=' + productRecommendationsSection.getAttribute('data-limit') + '&product_id=' + productRecommendationsSection.getAttribute('data-product-id');
    let request = new XMLHttpRequest();
    request.open("GET", requestUrl);
    request.onload = function() {
      if (request.status >= 200 && request.status < 300) {
        let container = document.createElement("div");
        container.innerHTML = request.response;
        productRecommendationsSection.parentElement.replaceWith(container);
        productRecommendationsSection = document.getElementById("product-recommendations");
        window.HIGHLIGHT.CSSSlider.mount(document.getElementById('css-slider-recommended-products'));
        if ( window.HIGHLIGHTSettings.show_variant_image ) {
          window.HIGHLIGHT.Collection.mount($('.product-recommendations'));
        }
      }
    };
    request.send();

	}

}

// Mount in page

$(document).ready(function(){
  if ( $('.mount-product-recommendations').length > 0 ) {
    $('.mount-product-recommendations').each(function(){
      HIGHLIGHT.ProductRecommendations.mount();
    })
  }
});

// Shopify events

$(document).on('shopify:section:load', function(e){
	var $section = $(e.target);
	if ( $section.hasClass('mount-product-recommendations') ) {
		HIGHLIGHT.ProductRecommendations.mount();
	}
});
HIGHLIGHT.ProductSlider = {

	SLIDERS: [],

	mount: function(element) {

		let slider = {}
		this.SLIDERS[element.getAttribute('id').toString()] = slider;
		element.classList.add('js-enabled');

		slider.element = element;
		slider.viewport = element.querySelector('.product-gallery__viewport');
		slider.container = element.querySelector('.product-gallery__container');
		slider.holder = element.querySelector('.product-gallery__items');
		slider.items = element.querySelectorAll('.product-gallery__item');

		slider.index = element.dataset.initialIndex ? parseInt(element.dataset.initialIndex) : 0;
		slider.length = slider.items.length;

		slider.timeout = null;
		slider.animating = false;

		slider._mobilePadding = parseInt(window.getComputedStyle(document.documentElement).getPropertyValue('--grid-padding'));

		slider.changeSlide = (function(index){

			if ( slider.mobile ) {

				slider.holder.scrollTo({
					left: slider.items[index].offsetLeft - parseInt(getComputedStyle(slider.items[index]).marginLeft),
					behavior: 'smooth'
				});
				this._checkNav(slider, index);
				this._setHeight(slider, null);

			} else {

				this._blockAnimation(slider, true);
				this._resetClasses(slider);

				if ( index > slider.index ) {

					let prevIndex = slider.index;
					slider.index = index-1;

					slider.holder.classList.add('no-transitions');
					this._resetClasses(slider);
					this._resetOrder(slider, [prevIndex, slider.index]);
					slider.holder.style.transform = 'translateX(' + ( slider.index * slider.width * - 1 ) + 'px';
					slider.items[prevIndex].classList.add('active');
					slider.items[index].classList.add('after-active');
					this._checkNav(slider, index);

					setTimeout(function(){
						slider.holder.classList.remove('no-transitions');
						slider.items[prevIndex].classList.remove('active');
						slider.items[prevIndex].classList.add('before-active');
						slider.holder.style.transform = 'translateX(' + ( index * slider.width * - 1 ) + 'px';
						slider.items[index].classList.remove('after-active');
						slider.items[index].classList.add('active');
						slider.index = index;
						slider.container.dispatchEvent(slider.EVENT_CHANGE);
					}, 10);

				} else if ( index < slider.index ) {
						
					let prevIndex = slider.index;
					slider.index = index+1;

					slider.holder.classList.add('no-transitions');
					this._resetClasses(slider);
					this._resetOrder(slider, [prevIndex, slider.index]);
					slider.holder.style.transform = 'translateX(' + ( slider.index * slider.width * - 1 ) + 'px';
					slider.items[prevIndex].classList.add('active');
					slider.items[index].classList.add('before-active');
					this._checkNav(slider, index);

					setTimeout(function(){
						slider.holder.classList.remove('no-transitions');
						slider.items[prevIndex].classList.remove('active');
						slider.items[prevIndex].classList.add('after-active');
						slider.holder.style.transform = 'translateX(' + ( index * slider.width * - 1 ) + 'px';
						slider.items[index].classList.remove('before-active');
						slider.items[index].classList.add('active');
						slider.index = index;
						slider.container.dispatchEvent(slider.EVENT_CHANGE);
					}, 10);

				}

			}

			this._setHeight(slider, index);
			
		}).bind(this);

		slider.toggleDragging = function(slider, toggle){
			if ( ! toggle ) {
				slider.container.classList.add('force-no-drag');
			} else {
				slider.container.classList.remove('force-no-drag');
			}
		}

		slider.EVENT_CHANGE = new Event('change');
		slider.EVENT_SETTLE = new Event('settle');

		// Add navigation buttons

		const navEl = document.createElement('div');
		navEl.setAttribute('class', 'product-gallery__navigation five-tenths lap--six-tenths smaller-lap--eleven-tenths push-left-one-tenth lap--push-left-none smaller-lap--push-left-padding'); 
		navEl.innerHTML = '<div class="product-gallery__no"><span class="product-gallery__index">' + (slider.index+1) + '</span> / ' + slider.length + '</div><button class="product-gallery__prev simple-arrow simple-arrow--left"><span class="visually-hidden">' + window.HIGHLIGHTSettings.locales.prev + '</span><svg aria-hidden="true" focusable="false" role="presentation" enable-background="new -19 23 66 16" viewBox="-19 23 66 16" xmlns="http://www.w3.org/2000/svg"><path d="m-19 29.6h64v2.9h-64z"/><path d="m47 31-2-2-6-6-2 2 5.9 6-5.9 6 2 2 6-6z"/></svg></button><button class="product-gallery__next simple-arrow simple-arrow--right"><span class="visually-hidden">' + window.HIGHLIGHTSettings.locales.next + '</span><svg aria-hidden="true" focusable="false" role="presentation" enable-background="new -19 23 66 16" viewBox="-19 23 66 16" xmlns="http://www.w3.org/2000/svg"><path d="m-19 29.6h64v2.9h-64z"/><path d="m47 31-2-2-6-6-2 2 5.9 6-5.9 6 2 2 6-6z"/></svg></button>';
		element.appendChild(navEl);

		slider.indexEl = element.querySelector('.product-gallery__index');
		slider.prevEl = element.querySelector('.product-gallery__prev');
		slider.nextEl = element.querySelector('.product-gallery__next');

		slider.prevEl.addEventListener('click', (function(slider){
			this.prevSlide(slider);
		}).bind(this, slider));

		slider.nextEl.addEventListener('click', (function(slider){
			this.nextSlide(slider);
		}).bind(this, slider));

		element.querySelectorAll('.product-gallery__prev, .product-gallery__next').forEach((function(slider, elm){
			elm.addEventListener('keydown', (function(slider, e){
				if ( e.keyCode == window.KEYCODES.RETURN ) {
					window.scrollY = slider.container.offsetTop - 100;
					setTimeout(function(){
						slider.items[slider.index].focus();
					}, 50);
				}
			}).bind(this, slider))
		}).bind(this, slider));

		// Set up mobile swipping

		slider.container.addEventListener('touchstart', (function(slider, e){
    	if ( ! slider.mobile && ! slider.container.classList.contains('force-no-drag') ) {
				slider.touchX = e.touches[0].screenX;
	      slider.container.classList.add('dragging-enabled');
	    }
		}).bind(this, slider), {passive:true});
		slider.container.addEventListener('touchmove', (function(slider, e){
			if ( ! slider.mobile && slider.container.classList.contains('dragging-enabled') && ! slider.container.classList.contains('force-no-drag') ) {
				let direction = slider.touchX - e.touches[0].screenX;
	      if ( direction > 0 ) {
					this.nextSlide(slider);
	      	slider.container.classList.remove('dragging-enabled');
	      } else if ( direction < 0 ) {
	      	this.prevSlide(slider);    			
	      	slider.container.classList.remove('dragging-enabled');
	      }
	    }
		}).bind(this, slider), {passive:true});
		slider.container.addEventListener('touchend', (function(slider, e){
    	if ( ! slider.mobile ) {
      	slider.container.classList.remove('dragging-enabled');
      }
		}).bind(this, slider), {passive:true});

		// Set up desktop grabbing

    slider.container.addEventListener('mousedown', (function(slider, e){
    	if ( ! slider.mobile && ! slider.container.classList.contains('force-no-drag') ) {
	      slider.mouseX = e.screenX;
	      slider.container.classList.add('dragging-enabled');
	      slider.container.classList.add('mouse-down');
	    }
    }).bind(this, slider));
    slider.container.addEventListener('mouseup', (function(slider){
    	if ( ! slider.mobile ) {
	    	slider.container.classList.remove('mouse-down');
	      slider.container.classList.remove('pointer-events-off');
  			slider.container.classList.remove('dragging-enabled');
	    }
    }).bind(this, slider));

    slider.container.addEventListener('mousemove', (function(slider, e){
    	if ( ! slider.mobile && slider.container.classList.contains('dragging-enabled') && ! slider.container.classList.contains('force-no-drag') ) {
        let direction = slider.mouseX - e.screenX;
        if ( Math.abs(direction) > 1 ) {
	      	slider.container.classList.add('pointer-events-off');
	        if ( direction > 0 ) {
						this.nextSlide(slider);
	    			slider.container.classList.remove('dragging-enabled');
	        } else if ( direction < 0 ) {
	        	this.prevSlide(slider);
	    			slider.container.classList.remove('dragging-enabled');
	        }
	      }
    	}
    }).bind(this, slider));

    // mobile scroll event

    slider.OBSERVER = new IntersectionObserver((function(entries){
    	if ( slider.mobile ) {
	    	entries.forEach((function(entry){
	    		if ( entry.intersectionRatio >= .3 ) {
	    			slider.index = parseInt(entry.target.getAttribute('data-index'));
						this._checkNav(slider, null);
						this._setHeight(slider, null);
						slider.container.dispatchEvent(slider.EVENT_CHANGE);
	    		}
    		}).bind(this))
	    }
    }).bind(this), {
			threshold: [0, .3]
    });
    slider.items.forEach(function(slide){
    	slider.OBSERVER.observe(slide);
    });

		// Initial reset

		this._checkMobile(slider);
		this._resetOrder(slider, null);
		this._checkIndex(slider);
		this._checkNav(slider, null);
		this._setHeight(slider, null);
		this._getSliderWidth(slider);
		setTimeout((function(slider){
			this._getSliderWidth(slider);
		}).bind(this, slider), 500);
		this._repositionSlider(slider);
		slider.EVENT_RESIZE = (function(slider){
			this._checkMobile(slider);
			this._setHeight(slider, null);
			this._getSliderWidth(slider);
			this._repositionSlider(slider);
			slider._mobilePadding = parseInt(window.getComputedStyle(document.documentElement).getPropertyValue('--grid-padding'));
		}).bind(this, slider);
		window.addEventListener('resize', slider.EVENT_RESIZE);
		slider.items[slider.index].classList.add('enable-tab');

		if ( slider.mobile ) {
			slider.holder.scrollLeft = slider.items[slider.index].offsetLeft;
		}

	},

	_checkMobile: function(slider) {
		let afterContent = getComputedStyle(slider.element, ':after').content;
	  if ( afterContent.indexOf('mobile-enabled') != -1 ) {
	    slider.mobile = true;
	  } else {
	  	slider.mobile = false;
	  }
	},

	_checkIndex: function(slider){
    slider.items[slider.index].classList.add('active');
		if ( slider.items[slider.index+1] ) {
			slider.items[slider.index+1].classList.add('after-active');
		} 
		if ( slider.items[slider.index-1] ) {
			slider.items[slider.index-1].classList.add('before-active');
		} 
		slider.indexEl.innerHTML = slider.index+1;
	},

	_checkNav: function(slider, forceIndex){
		let index = forceIndex != null ? forceIndex : slider.index;
		slider.nextEl.classList.remove('active');
		slider.nextEl.classList.remove('disabled');
		slider.prevEl.classList.remove('disabled');
		slider.nextEl.removeAttribute('disabled');
		slider.prevEl.removeAttribute('disabled');
		if ( ! slider.items[index+1] ) {
			slider.nextEl.classList.add('disabled');
			slider.nextEl.setAttribute('disabled', 'disabled');
		}
		if ( ! slider.items[index-1] ) {
			slider.prevEl.classList.add('disabled');
			slider.prevEl.setAttribute('disabled', 'disabled');
		}
		slider.indexEl.innerHTML = index+1;
	},

	_getSliderWidth: function(slider){
		slider.width = slider.items[0].offsetWidth;
	},

	_repositionSlider: function(slider){
		slider.holder.classList.add('no-transitions');
		slider.holder.style.transform = 'translateX(' + ( slider.index * slider.width * - 1 ) + 'px';
		setTimeout((function(slider){
			slider.holder.classList.remove('no-transitions');
		}).bind(null, slider), 10);
	},

	_resetClasses: function(slider){
		slider.items.forEach(function(item){
			item.classList.remove('before-active');
			item.classList.remove('after-active');
			item.classList.remove('active');
		});
	},

	_resetOrder: function(slider, swapIndex){
		slider.items.forEach(function(item, i){
			let order = i;
			if ( swapIndex != null ) {
				if ( i == swapIndex[0] ) {
					order = swapIndex[1];
				} else if ( i == swapIndex[1] ) {
					order = swapIndex[0];
				}
			}
			item.style.order = order;
		})
	},

	_translateSlider: function(slider){
		slider.holder.style.transform = 'translateX(' + ( slider.index * slider.width * - 1 ) + 'px';
		this._checkIndex(slider);
		this._checkNav(slider, null);
	},

	_blockAnimation: function(slider, force){
		slider.animating = true;
		slider.timeout = setTimeout((function(slider){
			slider.animating = false;
			slider.container.dispatchEvent(slider.EVENT_SETTLE);
			if ( force ) {
				this._resetOrder(slider, null);
				this._resetClasses(slider);
				this._checkIndex(slider);
			}
		}).bind(this, slider), 500);
	},

	_setHeight: function(slider, forceIndex){
		let index = forceIndex != null ? forceIndex : slider.index;
		slider.viewport.style.height = slider.items[index].querySelector('.lazy-image').offsetHeight + 'px';
	},

	nextSlide: function(slider) {
  	if ( ! slider.mobile ) {
			if ( ! slider.animating ) {
				this._blockAnimation(slider, false);
				this._resetClasses(slider);
				if ( slider.index+1 < slider.length ) {
		      slider.index++;
		    }
		    this._checkIndex(slider);
				this._checkNav(slider, null);
				this._setHeight(slider, null);
		    this._translateSlider(slider);
				slider.container.dispatchEvent(slider.EVENT_CHANGE);
		  }
		} else {
			if ( slider.index+1 < slider.length ) {
	      slider.index++;
	    }
			slider.holder.scrollTo({
				left: slider.items[slider.index].offsetLeft - parseInt(getComputedStyle(slider.items[slider.index]).marginLeft),
				behavior: 'smooth'
			});
			this._setHeight(slider, null);
			this._checkNav(slider, null);
		}
	},

	prevSlide: function(slider) {
  	if ( ! slider.mobile ) {
			if ( ! slider.animating ) {
				this._blockAnimation(slider, false);
				this._resetClasses(slider);
				if ( slider.index-1 >= 0 ) {
		      slider.index--;
		    }
		    this._checkIndex(slider);
				this._checkNav(slider, null);
				this._setHeight(slider, null);
		    this._translateSlider(slider);
				slider.container.dispatchEvent(slider.EVENT_CHANGE);
		  }
		} else {
			if ( slider.index-1 >= 0 ) {
	      slider.index--;
	    }
			slider.holder.scrollTo({
				left: slider.items[slider.index].offsetLeft - parseInt(getComputedStyle(slider.items[slider.index]).marginLeft),
				behavior: 'smooth'
			});
			this._setHeight(slider, null);
			this._checkNav(slider, null);
		}
	}

}
/* ---- 
	Product Page Helpers
	---- */

window.productData = {};

if(Array.prototype.equals)
    console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");

Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time 
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;       
        }           
        else if (this[i] != array[i]) { 
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;   
        }           
    }       
    return true;
}
// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", {enumerable: false});

/* ---- 
	Money currency format
	---- */

window.theme = window.theme || {};
theme.Currency = (function() {
  var moneyFormat = '${{amount}}'; // eslint-disable-line camelcase

  function formatMoney(cents, format) {

    if (typeof cents === 'string') {
      cents = cents.replace('.', '');
    }
    var value = '';
    var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
    var formatString = (format || moneyFormat);

    function formatWithDelimiters(number, precision, thousands, decimal) {

    	if ( precision != undefined ) {
    		precision = precision;
    	} else {
    		precision = 2;
    	}

      thousands = thousands || ',';
      decimal = decimal || '.';


      if (isNaN(number) || number == null) {
        return 0;
      }

      number = (number / 100.0).toFixed(precision);

      var parts = number.split('.');
      var dollarsAmount = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands);
      var centsAmount = parts[1] ? (decimal + parts[1]) : '';

      return dollarsAmount + centsAmount;
    }

    switch (formatString.match(placeholderRegex)[1]) {
      case 'amount':
        value = formatWithDelimiters(cents, 2);
        break;
      case 'amount_no_decimals':
        value = formatWithDelimiters(cents, 0);
        break;
      case 'amount_with_comma_separator':
        value = formatWithDelimiters(cents, 2, '.', ',');
        break;
      case 'amount_no_decimals_with_comma_separator':
        value = formatWithDelimiters(cents, 0, '.', ',');
        break;
      case 'amount_no_decimals_with_space_separator':
        value = formatWithDelimiters(cents, 0, ' ');
        break;
    }

    return formatString.replace(placeholderRegex, value);
  }

  return {
    formatMoney: formatMoney
  }
})();

// ---->> Store local pickup availability <<

theme.StoreAvailability = (function() {
  var selectors = {
    storeAvailabilityModalOpen: '[data-store-availability-modal-open]',
    storeAvailabilityModalProductTitle:
      '[data-store-availability-modal-product-title]',
    storeAvailabilityUnitSystem: '[data-unit-system]',
    storeAvailabilityLocationDistance: '[data-distance]',
    storeAvailabilityDistanceUnit: '[data-distance-unit]'
  };

  var classes = {
    hidden: 'hide'
  };

  function StoreAvailability(container) {
    this.container = container;
    this.body = document.querySelector('body');
  }

  StoreAvailability.prototype = Object.assign({}, StoreAvailability.prototype, {
    updateContent: function(variantId, productTitle) {
      var options = {
        maximumAge: 3600000, // 1 hour
        timeout: 5000
      };
      var self = this;
      this._fetchStoreAvailabilities(variantId, productTitle);
    },

    clearContent: function() {
      this.container.innerHTML = '';
      if ( document.getElementById('StoreAvailabilityModal') ) {
        document.getElementById('StoreAvailabilityModal').remove();
      }
    },

    _useGeolocation: function(position, variantId, productTitle) {
      var coordinates = position.coords;
      var latitude = coordinates.latitude;
      var longitude = coordinates.longitude;
      if (window.cookiesEnabled()) {
        var latitudeFromCookie = window.getCookie('latitude');
        var longitudeFromCookie = window.getCookie('longitude');
        if (
          latitudeFromCookie &&
          longitudeFromCookie &&
          parseFloat(latitudeFromCookie) === latitude &&
          parseFloat(longitudeFromCookie) === longitude
        ) {
          this._fetchStoreAvailabilities(
            variantId,
            productTitle,
            latitude,
            longitude
          );
        } else {
          var oneHour = 1 / 24;
          window.setCookie('latitude', latitude, oneHour);
          window.setCookie('longitude', longitude, oneHour);
          this._setBuyerLocation(latitude, longitude, variantId, productTitle);
        }
      } else {
        this._fetchStoreAvailabilities(variantId, productTitle);
      }
    },

    _setBuyerLocation: function(latitude, longitude, variantId, productTitle) {
      var self = this;
      fetch('/localization.json', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ latitude: latitude, longitude: longitude })
      }).then(function() {
        self._fetchStoreAvailabilities(
          variantId,
          productTitle,
          latitude,
          longitude
        );
      });
    },

    _fetchStoreAvailabilities: function(
      variantId,
      productTitle,
      latitude,
      longitude
    ) {
      var variantSectionUrl =
         this.container.dataset.baseUrl +
          '/variants/' +
          variantId +
          '/?section_id=store-availability';
      this.clearContent();
      var self = this;
      fetch(variantSectionUrl)
        .then(function(response) {
          return response.text();
        })
        .then(function(storeAvailabilityHTML) {
          self.clearContent();
          if (storeAvailabilityHTML.trim() === '') {
            return;
          }

          var storeAvailabilityDOM = new DOMParser().parseFromString(storeAvailabilityHTML, 'text/html');

          if ( storeAvailabilityDOM.getElementById('StoreAvailabilityModal') ) {
            self.body.appendChild(storeAvailabilityDOM.getElementById('StoreAvailabilityModal'));
          }
          self.container.appendChild(storeAvailabilityDOM.getElementById('StoreAvailability'));

          var storeAvailabilityModalOpen = self.container.querySelector(
            selectors.storeAvailabilityModalOpen
          );
          // Only create modal if open modal element exists
          if (!storeAvailabilityModalOpen) {
            return;
          } else {

            var StoreAvailabilityModal = document.getElementById('StoreAvailabilityModal');

            storeAvailabilityModalOpen.addEventListener('keyup', (function(e){
              if ( e.keyCode == window.KEYCODES.RETURN ) {
                StoreAvailabilityModal.querySelector('.close-sidebar').focus();
              }
            }).bind(this));

            storeAvailabilityModalOpen.addEventListener('click', function(e){
              e.preventDefault();
              if ( ! StoreAvailabilityModal.classList.contains('sidebar--opened') ) {

                HIGHLIGHT.Header.opened = 'local-availability';
                StoreAvailabilityModal.style.display = 'block';
                setTimeout((function(StoreAvailabilityModal){
                  StoreAvailabilityModal.classList.add('sidebar--opened');
                  StoreAvailabilityModal.style.height = window.innerHeight + 'px';
                  HIGHLIGHT.Header._mountA11YHelper(StoreAvailabilityModal);
                }).bind(this, StoreAvailabilityModal), 15);

                self.body.classList.add('sidebar-opened');
                self.body.classList.add('sidebar-opened--right');

              }
            });

            StoreAvailabilityModal.querySelector('.close-sidebar').addEventListener('click', function(e){
              if ( StoreAvailabilityModal.classList.contains('sidebar--opened') ) {
                HIGHLIGHT.Header.closeSidebar(StoreAvailabilityModal);
              }
            });

          }

          self._updateProductTitle(productTitle);
          if (latitude && longitude) {
            self._updateLocationDistances(latitude, longitude);
          } else {
            self._hideDistanceUnits();
          }
        });
    },

    _updateProductTitle: function(productTitle) {
      var storeAvailabilityModalProductTitle = this.body.querySelector(
        selectors.storeAvailabilityModalProductTitle
      );
      storeAvailabilityModalProductTitle.textContent = productTitle;
    },

    // Haversine Distance
    // The haversine formula is an equation giving great-circle distances between
    // two points on a sphere from their longitudes and latitudes
    _calculateDistance: function(
      latitude1,
      longitude1,
      latitude2,
      longitude2,
      unitSystem
    ) {
      var dtor = Math.PI / 180;
      var radius = unitSystem === 'metric' ? 6378.14 : 3959;

      var rlat1 = latitude1 * dtor;
      var rlong1 = longitude1 * dtor;
      var rlat2 = latitude2 * dtor;
      var rlong2 = longitude2 * dtor;

      var dlon = rlong1 - rlong2;
      var dlat = rlat1 - rlat2;

      var a =
        Math.pow(Math.sin(dlat / 2), 2) +
        Math.cos(rlat1) * Math.cos(rlat2) * Math.pow(Math.sin(dlon / 2), 2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return radius * c;
    },

    _updateLocationDistances: function(latitude, longitude) {
      var countryCode = document.querySelector(
        selectors.storeAvailabilityUnitSystem
      );
      var unitSystem = countryCode.dataset.unitSystem;
      var allDistances = document.querySelectorAll(
        selectors.storeAvailabilityLocationDistance
      );
      var allDistancesArray = Array.from(allDistances);
      var self = this;
      allDistancesArray.forEach(function(locationDistance) {
        var distance = self
          ._calculateDistance(
            latitude,
            longitude,
            parseFloat(locationDistance.dataset.latitude),
            parseFloat(locationDistance.dataset.longitude),
            unitSystem
          )
          .toFixed(1);
        locationDistance.innerHTML = distance;
      });
    },

    _hideDistanceUnits: function() {
      var distanceUnits = document.querySelectorAll(
        selectors.storeAvailabilityDistanceUnit
      );

      if (!distanceUnits) {
        return;
      }

      var distanceUnitsArray = Array.from(distanceUnits);
      distanceUnitsArray.forEach(function(distanceUnit) {
        distanceUnit.classList.add(classes.hidden);
      });
    }
  });

  return StoreAvailability;
})();


// ---->> Hide unavailable variants <<


/* ---- 
	Product 
	---- */

HIGHLIGHT.Product = {

	$product: null,
	$productText: null,
  $productOffers: null,

	$productGallery: null,
	$productGalleryItem: null,
	productGalleryNavigation: null,
	$productGalleryNavigationItem: null,

	$productGallery: null,
	$productGalleryImgs: null,
	productFlkty: null,

	storeAvailabilityContainer: null,
	storeAvailability: null,

  EVENT_SCROLL: null,

  RAF: null,
  RAF_FUNCTION: null,

	mount: function( $productParent ) {

		let $product = $productParent;

    // Product gallery 
    if ( $product.find('.product-gallery').data('size') > 1 ) {
      HIGHLIGHT.ProductSlider.mount($product.find('.product-gallery')[0]);
    }

    var PRODUCT_DATA = {
      $productGallery: $product.find('.product-gallery'),
      $productGalleryItem: $product.find('.product-gallery__item'),
      productSlider: HIGHLIGHT.ProductSlider.SLIDERS[$product.find('.product-gallery').attr('id')]
    }

    window.productData[$product.data('id')] = PRODUCT_DATA;

    // Store availability

    this.storeAvailabilityContainer = $product.find('[data-store-availability-container]')[0];
    if ( this.storeAvailabilityContainer ) {
      this.storeAvailability = new theme.StoreAvailability(this.storeAvailabilityContainer);
    }

    /* - TO Do - LAZY LOAD NEXT ITEMS NOW with timeout - check to not affect performance! */

    setTimeout(function(){
      $product.find('.product-gallery img').each(function(){
        lazySizes.loader.unveil($(this)[0]);
      })
    }, 1000);

    this.$product = $product;
    this.$productOffers = $product.find('.product__offers > div');

    if ( ! $('body').hasClass('template-index') ) { 

      this.EVENT_SCROLL = (function(e){
        if ( window.innerHeight < this.$productOffers.outerHeight()){
          let y = this.$product[0].getBoundingClientRect().y,
              z = this.$productOffers.outerHeight() - window.innerHeight;
          if ( Math.abs(y) < z ) {
            this.$productOffers.css('top', y);
          } else if ( Math.abs(y) >= z ) {
            this.$productOffers.css('top', -z);
          }
        }
      }).bind(this);
      window.addEventListener('scroll', this.EVENT_SCROLL, {passive:true});
      
      this.$product.css('minHeight', this.$productOffers.outerHeight());
      setInterval((function(){
        this.$product.css('minHeight', this.$productOffers.outerHeight());
      }).bind(this), 500);

      this.RAF_FUNCTION = (function(){
        this.$product.css('minHeight', this.$productOffers.outerHeight());
        this.EVENT_SCROLL();
        this.RAF = requestAnimationFrame(this.RAF_FUNCTION.bind(this));
      }).bind(this);

    }

    // Qty

    if ( $product.find('.product__quantity').length > 0 ) {
      $product.find('.product__quantity').on('click', function(e){
        e.target.select();
      });
    }

    // Init product form

    window.sidebarCartAjaxFunctions();

    if ( ! $product.hasClass('onboarding--true') ) {
      this.initProductForm($product);
    }

    if ( $product.find('.product__form').length > 0 && $product.find('.product__form').data('type') == 'overlay' ) {

      var $form = $product.find('.product__form form'),
          $submitButtonHolder = $product.find('.product__cart-actions-holder'),
          $submitButton = $product.find('.product__add-to-cart'),
          $cartCount = $('.menu-meta__count'),
          $cartTitle = $('.site-cart-heading'),
          $cartQty = $product.find('.product__quantity');

      $submitButton.on('click', function(e){

        e.preventDefault();

        $submitButtonHolder.addClass('busy');

        var itemName = $product.find('.product__title').text(),
            itemPrice = $product.find('.product__price--original').attr('data-price'),
            itemCurrency = Shopify.currency.active,
            itemId = $product.data('id');

        fetch(window.HIGHLIGHTSettings.routes.cart_add_url + '.js', {
          body: window.serialize($form[0]),
          method: 'POST',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'X-Requested-With': 'XMLHttpRequest'
          }
        }).then(function (response) {

          if ( response.ok ) {
            fetch(window.HIGHLIGHTSettings.routes.cart_url, {
              credentials: 'same-origin',
              method: 'GET'
            }).then(function (response) {

              response.text().then(function(html) {
                
                // google pixel

                if ( typeof ga !== 'undefined' ) {
                  ga('ec:addProduct', {
                    'id': itemId,
                    'name': itemName,
                    'price': parseFloat(itemPrice),
                    'quantity': $cartQty.length > 0 ? parseInt($cartQty.val()) : 1
                  });
                  ga('ec:setAction', 'add');
                  ga('send', 'event', 'UX', 'click', 'add to cart');     
                }

                // totals update
                
                $('#site-cart .cart-items').html($(html).find('.cart-items')[0].innerHTML)
                $('#CartTotal').html($(html).find('#CartTotal').html());
                $('#CartDetails').html($(html).find('#CartDetails').html());

                $('#site-cart .cart-holder').attr('data-items', $(html).find('.cart-holder').data('items'));

                window.sidebarCartAjaxFunctions();

                // count changing

                if ( $cartQty.length > 0 ) {

                  var qty = parseInt($cartQty.val());
                  if ( qty == 1 ) {
                    $cartTitle.html($cartTitle.data('added-singular').replace(/{{ count }}|count|{{count}}/g, qty));
                  } else {
                    $cartTitle.html($cartTitle.data('added-plural').replace(/{{ count }}|count|{{count}}/g, qty));
                  }

                  $cartCount.text(parseInt($cartCount.text()) + parseInt($cartQty.val()));

                } else {

                  $cartCount.text(parseInt($cartCount.text()) + 1);
                  $cartTitle.html($cartTitle.data('added-singular').replace(/{{ count }}|count|{{count}}/, 1));

                }

                $('form.cart').removeClass('cart--empty');

                // open cart sidebar
                
                $submitButtonHolder.removeClass('busy');
                HIGHLIGHT.Header.openSidebar('cart');
                if ( $submitButton.hasClass('return') ) {
                  $submitButton.removeClass('return');
                  document.getElementById('site-cart-sidebar').querySelector('.close-sidebar').focus();
                }
                window.sidebarCartAjaxFunctions();

              });
              
            });

          } else {

            response.json().then(function(data){
              alert(data.description);
              $submitButtonHolder.removeClass('busy');
            });

          }
          
          
        });

      }).on('keydown', function(e){
        if ( e.keyCode == window.KEYCODES.RETURN ) {
          $submitButton.addClass('return');
        }
      });

    }

    // Product Zoom

    if ( $('.product__image-zoom').length > 0 ) {

      $('body').append('<div id="zoom"><img /><span class="zoom__exit"><svg class="svg symbol symbol--zoom-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10.2,19.2c-5,0-9-4-9-9s4-9,9-9s9,4,9,9S15.2,19.2,10.2,19.2z M10.2,3.2c-3.9,0-7,3.1-7,7s3.1,7,7,7s7-3.1,7-7 C17.2,6.4,14.1,3.2,10.2,3.2z"/><path d="M15.637 17.078l1.414-1.414 5.657 5.657-1.414 1.414zM6.3 9.3h8v2h-8z"/></svg></span><div class="zoom__overlay"></div></div>');

      $('.product__image-zoom').on('click', (function(e){

        $('#zoom').addClass('opened');

        var $image = $('#zoom img');
        $image.attr('src', $(e.currentTarget).data('image'));

        setTimeout((function(){
          if ( $image[0].naturalWidth > 0 ) {
              this._productZoomMount($image);
          } else {
            $image.on('load', (function(){
              this._productZoomMount($image);
            }).bind(this))
          }
        }).bind(this), 200);

      }).bind(this));

      $('.zoom__exit').on('click', (function(e){
        this._productZoomUnmount();
      }).bind(this));

    }

  },

  _productZoomMount: function( $image ) {

    $image.css({'left': 0, 'top': 0});

    $(window).on('mousemove.zoom', function(e) {
      e.preventDefault();
      window.clientX = e.clientX;
      window.clientY = e.clientY;
      var x = e.clientX * ( $(window).width() - $image.width() ) / $(window).width();
      var y = e.clientY * ( $(window).height() - $image.height() ) / $(window).height();
      $image.css({'left': x, 'top': y});
    });

    $image.data('ratio', $image[0].naturalWidth / $image[0].naturalHeight);

    $(window).on('resize.zoom', function(){ 

      $('#zoom').css('height', window.innerHeight);

      var rf = $(window).width() > 768 ? 1 : 2;

      if ( $image.hasClass('portrait') ) {
        $image.css('width', $(window).width()*rf);
        $image.css('height', $(window).width()*rf / $image.data('ratio'));
      } else {

        $image.css('height', $(window).height()*rf);
        $image.css('width', $(window).height()*rf * $image.data('ratio'));

        if ( $image.width() < $(window).width() ) {
          $image.css('width', $(window).width()*rf);
          $image.css('height', $(window).width()*rf / $image.data('ratio'));
        }

      }

      var x = window.clientX * ( $(window).width() - $image.width() ) / $(window).width();
      var y = window.clientY * ( $(window).height() - $image.height() ) / $(window).height();

    }).trigger('resize.zoom');

    setTimeout(function(){
      if ( $('body').hasClass('touchevents') ) {
        $('#zoom')[0].scrollTop = ( $(window).height() - $image.height() ) / -2;
        $('#zoom')[0].scrollLeft = ( $(window).width() - $image.width() ) / -2;
      }
      $('#zoom').addClass('loaded');
    }, 50);

  }, 

  _productZoomUnmount: function() {

    $('#zoom').removeClass('opened');

    setTimeout(function(){
      $(window).off('resize.zoom');
      $(window).off('mousemove.zoom');
      $('#zoom img').attr('src', '').removeClass('portrait').removeClass('landscape');
      $('#zoom').removeClass('loaded');
    }, 300);

  },

  initProductForm : function( $product ) {

    var firstVariantEver = true;

    var productSingleObject = JSON.parse($product.find('.product-json')[0].innerHTML),
        productVariants = productSingleObject.variants;

    $product.find('form input[type="radio"]').on('change', (function(e){
      this._initProductVariantChange(false, productSingleObject, $product);
    }).bind(this));

    this._initProductVariantChange(true, productSingleObject, $product);

  },

  _getProductVariant : function( $product ) {

    /* ---- 
      Get current variant
      ---- */

    var optionArray = [];

    $product.find('form input.product-variant__input').each(function(){
      if ( $(this)[0].checked ) {
        optionArray.push($(this)[0].value);
      }
    });

    return optionArray;

  },

  _initProductVariantChange : function(firstTime, productSingleObject, $product) {  

    var variant = null,
      options = this._getProductVariant( $product );
      
    productSingleObject.variants.forEach(function(el){
      if ( el.options.equals(options) ) {
        variant = el;
      }
    });

    this._productSelectCallback(variant, $product, productSingleObject);
    if ( ! firstTime && $product.find('.productSelect option').length > 1 && ! $('body').hasClass('template-index') ) {
      this._updateProductVariantState(variant);
    }

    // Code that finds and styles the unavailable variants
      // completely unavailable, and unavailable based on selected set

    let options1 = {},
        options2 = {},
        options3 = {},

        option1Selected = null,
        option2Selected = null;

    if ( $product.data('variants') > 1 ) {
      option1Selected = $product.find('.product-variant').eq(0).find('.product-variant__input[name="' + $product.find('.product-variant').eq(0).data('name') + '"]:checked').val();
      $product.find('.product-variant').eq(1).find('.product-variant__input').removeClass('disabled');
    }
    if ( $product.data('variants') > 2 ) {
      option2Selected = $product.find('.product-variant').eq(1).find('.product-variant__input[name="' + $product.find('.product-variant').eq(1).data('name') + '"]:checked').val();
      $product.find('.product-variant').eq(2).find('.product-variant__input').removeClass('disabled');
    }

    productSingleObject.variants.forEach(function(el){
      if ( $product.data('variants') > 0 ) {
        if ( ! options1[el.option1] ) {
          options1[el.option1] = [];
        }
        options1[el.option1].push(String(el.available));
      }
      if ( $product.data('variants') > 1 ) {
        if ( ! options2[el.option2] ) {
          options2[el.option2] = [];
        }
        options2[el.option2].push(String(el.available));
      }
      if ( $product.data('variants') == 2 ) {
        if ( el.option1 == option1Selected && ! el.available ) {
          $product.find('.product-variant').eq(1).find('.product-variant__input[value="' + el.option2 + '"]').addClass('disabled');
        }
      }
      if ( $product.data('variants') > 2 ) {
        if ( ! options3[el.option3] ) {
          options3[el.option3] = [];
        }
        options3[el.option3].push(String(el.available));
        if ( el.option2 == option2Selected && el.option1 == option1Selected && ! el.available ) {
          $product.find('.product-variant').eq(2).find('.product-variant__input[value="' + el.option3 + '"]').addClass('disabled');
        }
      }
    });

    if ( $product.data('variants') > 0 ) {
      Object.keys(options1).forEach(function(key){
        if ( ! options1[key].includes('true') ){
          $product.find('.product-variant').eq(0).find('.product-variant__input[value="' + key + '"]').addClass('disabled');
        }
      });
    }
    if ( $product.data('variants') > 1 ) {
      Object.keys(options2).forEach(function(key){
        if ( ! options2[key].includes('true') ){
          $product.find('.product-variant').eq(1).find('.product-variant__input[value="' + key + '"]').addClass('disabled');
        }
      });
    }
    if ( $product.data('variants') > 2 ) {
      Object.keys(options3).forEach(function(key){
        if ( ! options3[key].includes('true') ){
          $product.find('.product-variant').eq(2).find('.product-variant__input[value="' + key + '"]').addClass('disabled');
        }
      });
      Object.keys(options2).forEach(function(key){
        if ( ! options2[key].includes('true') ){
          if ( option2Selected == key ) {
            $product.find('.product-variant').eq(2).find('.product-variant__input').addClass('disabled');
          }
        }
      });
    }

  },

  _updateProductVariantState : function(variant) {

     if (!history.pushState || !variant) {
      return;
    }

    var newurl = window.location.protocol + '//' + window.location.host + window.location.pathname + '?variant=' + variant.id;
    window.history.replaceState({path: newurl}, '', newurl);

  },

  _productSelectCallback : function(variant, $product, productSingleObject) {

    var _po = window.productData[$product.data('id')];

    var $addToCart = $product.find('.product__form'),
        $addToCartButtonHolder = $product.find('.product__cart-actions-holder'),
        $addToCartButton = $product.find('.product__add-to-cart'),
        $productPrice = $product.find('.product__price--original'),
        $comparePrice = $product.find('.product__price--compare'),
        $quantityElements = $product.find('.product__quantity'),
        $addToCartText = $product.find('.add-to-cart__text'),
        $productGallery = $product.find('.product-gallery');

    if (variant) {

      // Set cart value id

      $product.find('.productSelect').find('option[value="' + variant.id + '"]').prop('selected', true);

      // Swipe to variant slide

      if ( variant.featured_media != null ) {

        var variantImg = $productGallery.find('.product-gallery__item[data-media-id="' + variant.featured_media.id + '"]');

        if ( variantImg.length > 0 ) {

          if ( $productGallery.hasClass('js-enabled') ) {
            HIGHLIGHT.ProductSlider.SLIDERS[$productGallery.attr('id')].changeSlide(variantImg.data('index'));
          } else {
            $productGallery.data('initial-index', variantImg.data('index'));
          }

        }

      }

      // Display info about variants quantity

      if ( $product.find('.product__variant-quantity').length > 0 ) {
        var $variantQuantity = $product.find('.product__variant-quantity');
        $variantQuantity.text('');

        var DOMVariant = $product.find('.productSelect').find('option[value="' + variant.id + '"]');

        if ( DOMVariant.attr('data-quantity') <= 0 ) {
          if ( DOMVariant.attr('data-inventory') == 'continue' ) {
            $variantQuantity.html(window.HIGHLIGHTSettings.locales.product_preorder);
          } else if ( DOMVariant.attr('data-inventory') == 'deny' ) {
            $variantQuantity.html(window.HIGHLIGHTSettings.locales.product_no_products);
          }
        } else if ( DOMVariant.attr('data-quantity') == '1' ) {
          $variantQuantity.html(window.HIGHLIGHTSettings.locales.product_one_product);
        } else if ( DOMVariant.attr('data-quantity') <= 5 ) {
          $variantQuantity.html(window.HIGHLIGHTSettings.locales.product_few_products.replace('{{ count }}', DOMVariant.attr('data-quantity')));
        } else if ( ! variant.available ) {
          $variantQuantity.html(window.HIGHLIGHTSettings.locales.product_no_products);
        }
      }

      // Edit cart buttons based on stock 
        
      if ( variant.available ) {
        $quantityElements.prop('max', 999);
        $addToCartButtonHolder.removeClass('disabled');
        $addToCartText.text($addToCartText.attr('data-add-to-cart-text'));
        $quantityElements.show();
      } else {
        $addToCartButtonHolder.addClass('disabled');
        $addToCartText.text(window.HIGHLIGHTSettings.locales.product_sold_out_variant);
        $quantityElements.hide();
      }

      // Update price

      $productPrice.html( theme.Currency.formatMoney(variant.price, window.HIGHLIGHTSettings.shop_money_format) );
      $productPrice.attr( 'data-price', variant.price / 100 );
      if ( variant.compare_at_price > variant.price ) {
        $comparePrice.html(theme.Currency.formatMoney(variant.compare_at_price, window.HIGHLIGHTSettings.shop_money_format)).show();
      } else {
        $comparePrice.hide();
      }
      
      if ( $product.find('.unit-price').length > 0 ) {
        if ( variant.unit_price_measurement ) {
          $product.find('.unit-price').html(theme.Currency.formatMoney(variant.unit_price, window.HIGHLIGHTSettings.shop_money_format) + " / " + ( variant.unit_price_measurement.reference_value != 1 ? variant.unit_price_measurement.reference_value + " " : "" ) + variant.unit_price_measurement.reference_unit);
        } else {
          $product.find('.unit-price').empty();
        }
      }

      // Update sku

      if ( $product.find('.product__sku').length > 0 ) {
        if ( variant.sku ) {
          $product.find('.product__sku').text(window.HIGHLIGHTSettings.locales.product_sku + variant.sku);
        } else {
          $product.find('.product__sku').empty();
        }
      }

      // Update barcode

      if ( $product.find('.product__barcode').length > 0 ) {
        if ( variant.barcode ) {
          $product.find('.product__barcode').text(window.HIGHLIGHTSettings.locales.product_barcode + variant.barcode);
        } else {
          $product.find('.product__barcode').empty();
        }
      }

      // Update local pickup

      if (this.storeAvailability) {
        if ( variant.available === false ) {
          this.storeAvailability.clearContent();
        } else {
          this.storeAvailability.updateContent(
            variant.id,
            $product.find('.product__title').text()
          );
          if ( $product.data('single-variant') ) {
            $('body').attr('data-single-variant', '');
          }
        }
      }

    } else {

      // Disable variant completely 

      $addToCartButtonHolder.addClass('disabled');
      $addToCartText.text(window.HIGHLIGHTSettings.locales.product_unavailable_variant);
      $quantityElements.hide();

    }

    if ( $product.find('.product__quantity').length > 0 ) {
      var $productQty = $product.find('.product__quantity');
    }

  },

  unmount: function($product) {
    window.removeEventListener('scroll', this.EVENT_SCROLL);
  }

};

// Mount in page

if ( $('.mount-product-page').length > 0 ) {
  window.HIGHLIGHT.Product.mount($('.mount-product-page').parent());
  window.HIGHLIGHT.ProductMedia.mount($('.mount-product-page').parent());
} 

// Shopify events

$(document).on('shopify:section:load', function(e){
  var $section = $(e.target);
  if ( $section.hasClass('mount-product-page') ) {
    window.HIGHLIGHT.Product.mount($section.parent());
    window.HIGHLIGHT.ProductMedia.mount($section.parent());
  }
}).on('shopify:section:unload', function(e){
  var $section = $(e.target);
  if ( $section.hasClass('mount-product-page') ) {
    window.HIGHLIGHT.Product.unmount($section.parent());
    window.HIGHLIGHT.ProductMedia.unmount($section.parent());
  }
});

// Init Product Review

if ( $('#shopify-product-reviews').length > 0 ) {

  if ( $('#shopify-product-reviews').find('.spr-starrating').length > 0 ) {

    var checkI = setInterval(function(){

      if ( $('.spr-reviews').children().length > 0 ) {

        clearInterval(checkI);

        $('.spr-reviews').addClass('css-slides-container');
        $('.spr-reviews').wrap('<div class="css-slider css-slider--snapping" id="spr-reviews-slider" data-navigation-class="ten-tenths lap--twelve-tenths push-left-one-tenth lap--push-left-padding" />');

        $('.spr-review').each(function(i){
          initReview($(this));
        });

        HIGHLIGHT.CSSSlider.mount(document.getElementById('spr-reviews-slider'));
        $('.spr-summary-actions').addClass('with-reviews').insertAfter($('#shopify-product-reviews .spr-content'));

        turnReviewsFormIntoPopup();

        $('.spr-reviews').attr('data-no', $('.spr-review').length);
          
        var ra = $('.spr-summary-starrating').find('.spr-icon-star').length,
            rb = $('.spr-summary-starrating').find('.spr-icon-star-half-alt').length > 0 ? '.5' : '';

        $('.spr-summary-starrating').prepend('<a href="#shopify-section-product-reviews" class="spr-custom-rating text-size--regular"><span>' + (ra + rb) + ' / 5</span>' +  window.HIGHLIGHTSettings.star_symbol + '</a>');

        $('.product__price').append($('.spr-custom-rating').clone());

        var REVIEWS_OBSERVER = new IntersectionObserver(function(entries){
          entries.forEach(function(entry){
            if ( entry.intersectionRatio > 0 ) {
              var $entry = $(entry.target);

              REVIEWS_OBSERVER.disconnect();
              var $paginationObject = $entry,
                page = $entry.find('.spr-pagination-next a').data('page'),
                product_id = $entry.find('.spr-pagination-next a').data('product-id');
              JSONP({
                url: SPR.api_url + '/reviews',
                data: {
                  page: page,
                  product_id: product_id,
                  shop: window.location.hostname
                },
                success: function(data){

                  var $reviews = $(data.reviews);
                  $paginationObject.remove();

                  $reviews.each(function(){
                    if ( $(this).hasClass('spr-review') ) {
                      initReview($(this));
                    }
                  })

                  $('.spr-reviews').append($reviews);

                  HIGHLIGHT.CSSSlider._afterAppend(HIGHLIGHT.CSSSlider.SLIDERS['spr-reviews-slider']);
                  HIGHLIGHT.CSSSlider._resetSlider(HIGHLIGHT.CSSSlider.SLIDERS['spr-reviews-slider'], true);

                  if ( $('.spr-pagination-next').length > 0 ) {
                    REVIEWS_OBSERVER.observe($('.spr-pagination')[0]);
                  }

                }
              });
            }
          })
        }, {
          threshold: [0, .1]
        });

        if ( $('.spr-pagination-next').length > 0 ) {
          REVIEWS_OBSERVER.observe($('.spr-pagination')[0]);
        }

        setTimeout(function(){
          $('#shopify-product-reviews').css('display', 'block');
        }, 360);

      }

    }, 120);

  } else {
    var checkI = setInterval(function(){
      if ( $('.spr-form').length > 0 && ! $('.spr-form').hasClass('init') ) {
        clearInterval(checkI);
        turnReviewsFormIntoPopup();
        setTimeout(function(){
          $('#shopify-product-reviews').css('display', 'block');
        }, 360);
      }
    }, 120);
  }

}

function initReview($review){

  $review.addClass('css-slide');
  $review.attr('data-index', '99');

  var ra = $review.find('.spr-icon-star').length,
      rb = $review.find('.spr-icon-star-half-alt').length > 0 ? '.5' : '';
  $review.find('.spr-review-header-title').after('<span class="spr-review-custom-rating text-size--regular"><span>' + (ra + rb) + ' / 5</span>' + window.HIGHLIGHTSettings.star_symbol + '</span>');
  $review.find('.spr-review-header-byline').insertAfter($review.find('.spr-review-content'));

  let textContent = $review.find('.spr-review-content-body')[0].textContent;
  if ( window.wordFunctions.count(textContent) > 30 ) {
    let reviewModal = basicLightbox.create('<div class="spr-review-modal"><div class="spr-review-header">' + $review.find('.spr-review-header')[0].innerHTML + '</div>' + $review.find('.spr-review-content-body')[0].innerHTML + '<span class="spr-review-header-byline">' + $review.find('.spr-review-header-byline')[0].innerHTML + '</span></div>');
    $review.find('.spr-review-content-body')[0].textContent = window.wordFunctions.trim(textContent, 30);
    $('<span class="spr-review-read-more text-size--smaller">' + window.HIGHLIGHTSettings.locales.product_read_review + '</span>').insertAfter($review.find('.spr-review-content-body'));
    $review.find('.spr-review-read-more').on('click', function(){
      reviewModal.show();
    });
  }

}

function turnReviewsFormIntoPopup() {

  $('.spr-form').addClass('init').attr('style', '').wrap('<div id="spr-form" class="spr-form-holder" />');
  $('.spr-form-holder').addClass('address-popup');
  $('#spr-form').wrap('<div id="spr-form-modal" />');
  $('#spr-form').append('<div class="basicLightboxClose">×</div>');
  $('#spr-form-modal').addClass('hidden');

  $('.spr-summary-actions-newreview').wrapInner('<span />').prepend('<svg aria-hidden="true" focusable="false" role="presentation" width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 0H9V8.5H0.5V10.5H9V19H11V10.5H19.5V8.5H11V0Z"></path></svg>');

  var modal = basicLightbox.create(document.querySelector('#spr-form-modal'));
  $('.spr-summary-actions-newreview').attr('onclick', '').on('click', function(e){
    e.preventDefault();
    modal.show(function(){
      $('#spr-form').find('.basicLightboxClose').on('click', function(){
        modal.close();
      });
    });
  });

}


// Collection list

HIGHLIGHT.CollectionList = {

  $collection: null,
  $collectionItem: null,
  $collectionItemLink: null,
  $collectionItemVariant: null,
  $collectionListHolder: null,

  mount: function($collectionList) {
    setTimeout(function(){
      $collectionList.find('.collection-list-item-image').css('visibility', 'visible');
    }, 200);
    $collectionList.find('.collection-list-item').each(function(){
      $(this)[0].addEventListener('mousemove', function(e){

        var offset = $(this).offset();
        var relativeX = (e.pageX - offset.left);
        var relativeY = (e.pageY - offset.top);
      
        var $image = $(this).children('.collection-list-item-image');
      
        $image.css({
          'top': relativeY,
          'left': relativeX
        });

      }, {passive: true});
    })

	},

  unmount: function($collectionList){
    $collectionList.find('.collection-list-item').each(function(){
      $(this).off('mousemove');
    });
  }

}


// Mount in page

$(document).ready(function(){
  if ( $('.mount-collection-list').length > 0 ) {
    $('.mount-collection-list').each(function(){
      HIGHLIGHT.CollectionList.mount($(this));
    })
  }
});

// Shopify events

$(document).on('shopify:section:load', function(e){
	var $section = $(e.target);
	if ( $section.hasClass('mount-collection-list') ) {
		HIGHLIGHT.CollectionList.mount($section);
	}

}).on('shopify:section:unload', function(e){
	var $section = $(e.target);
	if ( $section.hasClass('mount-collection-list') ) {
		HIGHLIGHT.CollectionList.unmount($section);
	}
});
// Mount in page

if ( $('.mount-featured-product').length > 0 ) {
	$('.mount-featured-product').each(function(){
	  window.HIGHLIGHT.Product.mount($(this).children('.product'));
    if ( ! $(this).children('.product').hasClass('onboarding--true') ) {
  	  window.HIGHLIGHT.ProductMedia.mount($(this).children('.product'));
    }
	})
} 

// Shopify events

$(document).on('shopify:section:load', function(e){
  var $section = $(e.target);
  if ( $section.hasClass('mount-featured-product') ) {
    window.HIGHLIGHT.Product.mount($section.children('.product'));
    if ( ! $section.children('.product').hasClass('onboarding--true') ) {
      window.HIGHLIGHT.ProductMedia.mount($section.children('.product'));
    }
  }
}).on('shopify:section:unload', function(e){
  var $section = $(e.target);
  if ( $section.hasClass('mount-featured-product') ) {
    if ( ! $section.children('.product').hasClass('onboarding--true') ) {
      window.HIGHLIGHT.ProductMedia.unmount($section.children('.product'));
    }
  }
});
window.HIGHLIGHT.Hero = {

	OBSERVERS_A: [],
	OBSERVERS_B: [],
	OBSERVERS_MAIN: [],
	OBSERVERS_NEXT: [],
	HEADINGS: [],
	RESIZE_EVENTS: [],

	_observer_A_function(entry, $slider){
  	let $entryTarget = $(entry.target),
  			$entryHeading = this.HEADINGS[$slider.attr('id')].children().eq($entryTarget.index());

  	if ( $entryTarget.attr('data-first') === "true" ) {

  		if ( ! $entryTarget.hasClass('active') && entry.intersectionRatio >= .6 ) {

  			// activate the first slide
				$slider.find('.slide.active').removeClass('active');
				$entryTarget.addClass('active');

	    	this.HEADINGS[$slider.attr('id')].find('.active-up, .active-down, .hide-down, .hide-up').css('display', 'none').removeClass('active-up').removeClass('active-down').removeClass('hide-down').removeClass('hide-up');
				$entryHeading.css('display', 'flex');

    		if (entry.boundingClientRect.top > 0) {
    			$entryHeading.addClass('active-up');
			  } else {
	    		$entryHeading.addClass('active-down');
			  }

			} else if ( ! $entryTarget.hasClass('active') && entry.intersectionRatio >= 0.05 && entry.intersectionRatio < .6 ) {

				// activate the first slide (for small screens from up)
				$slider.find('.slide.active').removeClass('active');
				$entryTarget.addClass('active');

	    	this.HEADINGS[$slider.attr('id')].find('.active-up, .active-down, .hide-down, .hide-up').css('display', 'none').removeClass('active-up').removeClass('active-down').removeClass('hide-down').removeClass('hide-up');
				$entryHeading.css('display', 'flex');
    		$entryHeading.addClass('active-down');

  		} else if ( ! $entryHeading.hasClass('never-remove') && $entryTarget.hasClass('active') && entry.intersectionRatio < .6 && entry.boundingClientRect.top > 0 ) {

				// get the first slide out of the screen (on scroll up)
	  		$entryTarget.removeClass('active');
				$entryHeading.removeClass('active-up').removeClass('active-down').addClass('hide-up');

			}

  	}
	},

	_observer_B_function(entry, $slider){

		let $entryTarget = $(entry.target),
  			$entryHeading = this.HEADINGS[$slider.attr('id')].children().eq($entryTarget.index());

  	if ( entry.intersectionRatio > 0.05 && ! $entryTarget.hasClass('active') && $entryTarget.attr('data-first') !== "true" ) {

  		if ( ! ( $entryTarget.attr('data-last') === 'true' && entry.boundingClientRect.top < 0 ) ) {

  				// remove all active classes when slide is switched, and activate the new slide

					$slider.find('.slide.active').removeClass('active');
					$entryTarget.addClass('active');

		    	this.HEADINGS[$slider.attr('id')].find('.active-up, .active-down, .hide-down, .hide-up').css('display', 'none').removeClass('active-up').removeClass('active-down').removeClass('hide-down').removeClass('hide-up');
					$entryHeading.css('display', 'flex');

		  		if (entry.boundingClientRect.top > 0) {
		  			$entryHeading.addClass('active-up');
				  } else {
		    		$entryHeading.addClass('active-down');
				  }
    	
  		}
  		
    } 
	},

	_observer_MAIN_function(entry, $slider){
  	let $entryTarget = $(entry.target);
  	if ( entry.intersectionRatio == 0 ) {
  		$slider.find('.active').removeClass('active');
  		$slider.find('.active-up, .active-down').removeClass('active-up').removeClass('active-down');
  		$slider.find('.slide-heading').css('display', 'none');
  	}
	},

	_observer_NEXT_function(entry, $slider){
  	let $entryTarget = $(entry.target);

  	if ( entry.intersectionRatio > 0 ) {
  		if ( $slider.find('.slide').last().hasClass('active') ) {
	  		$slider.find('.active').removeClass('active');
	  		$slider.find('.active-up, .active-down').removeClass('active-up').removeClass('active-down');
	  		this.HEADINGS[$slider.attr('id')].children().last().addClass('hide-down');
  		}
		} else if (entry.intersectionRatio == 0 ) {
			if ( entry.boundingClientRect.top > 0 ) {
				if ( $slider.find('.slide.active').length == 0 ) {
					let rect = $slider[0].getBoundingClientRect();
					if ( rect.y < 0 && Math.abs(rect.y) < rect.height ) {
						$slider.find('.slide').last().addClass('active');
						let $entryHeading = this.HEADINGS[$slider.attr('id')].children().last();
						$entryHeading.removeClass('hide-down').removeClass('hide-up');
						$entryHeading.css('display', 'flex');
						$entryHeading.addClass('active-up');
					}
				}
			}
		}
	},

	mount: function($slider) {

		this.HEADINGS[$slider.attr('id')] = $slider.find('.vertical-slider-headings');
		$slider.find('.slide-heading').clone().appendTo(this.HEADINGS[$slider.attr('id')]);

		// First & last slide observers

		this.OBSERVERS_A[$slider.attr('id')] = new IntersectionObserver((function(entries){
		  entries.forEach((function(entry){
		  	this._observer_A_function(entry, $slider);
		  }).bind(this));
		}).bind(this), {
			threshold: [0.05, .6]
		});

		// Observer for all slides except the first one

		this.OBSERVERS_B[$slider.attr('id')] = new IntersectionObserver((function(entries){
		  entries.forEach((function(entry){
		  	this._observer_B_function(entry, $slider);
		  }).bind(this));
		}).bind(this), {
			threshold: [0.05, .7]
		});

		// Observer for main slider

		this.OBSERVERS_MAIN[$slider.attr('id')] = new IntersectionObserver((function(entries){
		  entries.forEach((function(entry){
		  	this._observer_MAIN_function(entry, $slider);
		  }).bind(this));
		}).bind(this), {
			threshold: 0
		});

		// Observer for next section

		this.OBSERVERS_NEXT[$slider.attr('id')] = new IntersectionObserver((function(entries){
		  entries.forEach((function(entry){
		  	this._observer_NEXT_function(entry, $slider);
		  }).bind(this));
		}).bind(this), {
			threshold: 0
		});

		// ADD CREATED OBSERVERS

		const $slides = $slider[0].querySelectorAll('.slide');
		$slides.forEach((function(slide){

			if ( $(slide).attr('data-first') === 'true' ) {
				// observe first slide
		  	this.OBSERVERS_A[$slider.attr('id')].observe(slide);
		  	if ( $(slide).attr('data-last') === 'true' ) {
		  		// observe last as well, when there is only one
		  		this.OBSERVERS_B[$slider.attr('id')].observe(slide);
		  	}
			} else {
				// observer other slides
		  	this.OBSERVERS_B[$slider.attr('id')].observe(slide);
			}

			if ( slide.hasAttribute('data-link') ) {
				$(slide).find('.slide-title, .slide-caption').wrapAll('<a class="slide-heading" href="' + $(slide).find('a').attr('href') + '" />');
			}

		}).bind(this));

  	this.OBSERVERS_MAIN[$slider.attr('id')].observe($slider[0]);

  	if ( $slider.next().length == 0 ) {
  		let $next = $('.page-content').next();
  		if ( $next.children().length == 0 ) {
  			$next = $next.next();
  		}
  		this.OBSERVERS_NEXT[$slider.attr('id')].observe($next[0]);
  	} else {
  		this.OBSERVERS_NEXT[$slider.attr('id')].observe($slider.next()[0]);
  	}

		if ( $slider.index() == 0 ) {
			const $neverRemove = $slider.find('.vertical-slider-headings .slide-heading').eq(0);
			$neverRemove.addClass('never-remove');
			if ( Math.abs($slider[0].getBoundingClientRect().y) < $(window).height() ) {
				$neverRemove.addClass('active-up').css('display', 'flex');
			}
		}

		// set up resizing event (for overflowing captions fix)

		this.RESIZE_EVENTS[$slider.attr('id')] = window.debounce((function($slides){
			this._resizeCaptions($slides);
		}).bind(this, $slides), 100);
		window.addEventListener('resize', this.RESIZE_EVENTS[$slider.attr('id')]);
		this._resizeCaptions($slides);

		// make links for mobile

	},

	unmount: function($slider) {
		this.OBSERVERS_A[$slider.attr('id')].disconnect();
		this.OBSERVERS_B[$slider.attr('id')].disconnect();
		this.OBSERVERS_MAIN[$slider.attr('id')].disconnect();
		this.OBSERVERS_NEXT[$slider.attr('id')].disconnect();
		this.HEADINGS[$slider.attr('id')] = [];
		this.OBSERVERS_A[$slider.attr('id')] = [];
		this.OBSERVERS_B[$slider.attr('id')] = [];
		this.OBSERVERS_MAIN[$slider.attr('id')] = [];
		this.OBSERVERS_NEXT[$slider.attr('id')] = [];
		window.removeEventListener('resize', this.RESIZE_EVENTS[$slider.attr('id')]);
	},

	_resizeCaptions: function(slides) {
		slides.forEach(function(slide){
			slide.querySelectorAll('.slide-image[data-caption]').forEach(function(elm){
				elm.querySelector('.slide-image__caption').style.width = (elm.offsetHeight - 10) + 'px';
			});
		});
	}

}

// Mount in page

$(document).ready(function(){
	if ( $('.mount-vertical-slideshow').length > 0 ) {
		$('.mount-vertical-slideshow').each(function(){
  		HIGHLIGHT.Hero.mount($(this));
		});
	}
});

// Shopify events

$(document).on('shopify:section:load', function(e){

	var $section = $(e.target);
	if ( $section.hasClass('mount-vertical-slideshow') ) {
		HIGHLIGHT.Hero.mount($section);
	}

}).on('shopify:section:unload', function(e){
	
	var $section = $(e.target);
	if ( $section.hasClass('mount-vertical-slideshow') ) {
		HIGHLIGHT.Hero.unmount($section);
	}

});
HIGHLIGHT.VideoPopup = {

	mount: function($videoPopup){

		$videoPopup.find('.video-popup__link').on('click', function(e){

			e.preventDefault();

			$(this).append('<div class="video-popup__blackout" />');
			setTimeout((function(){
				$(this).find('.video-popup__blackout').css('opacity', 1);
			}).bind(this), 10);

			setTimeout((function(){
				if ( $(this).data('video-source') == 'youtube' ) {
					$(this).append('<iframe class="video-popup__iframe" src="https://youtube.com/embed/' + $(this).data('video-id') + '?autoplay=1&rel=0" allow="autoplay; fullscreen" allowfullscreen />');
				} else if ( $(this).data('video-source') == 'vimeo') { 
					$(this).append('<iframe class="video-popup__iframe" src="https://player.vimeo.com/video/' + $(this).data('video-id') + '?autoplay=1&rel=0" allow="autoplay; fullscreen" allowfullscreen />');
				}
			}).bind(this), 50);

		});

	}

};

// Mount in page

if ( $('.mount-video-popup').length > 0 ) {
	$('.mount-video-popup').each(function(){
		HIGHLIGHT.VideoPopup.mount($(this));
	});
};

// Shopify events

$(document).on('shopify:section:load', function(e){
	var $section = $(e.target);
	if ( $section.hasClass('mount-video-popup') ) {
		HIGHLIGHT.VideoPopup.mount($section);
	}
});
/*
 *  ==== 
  Starter file
=====
*/

$(document).ready(function(){

  reframe(document.querySelectorAll('.rte iframe[src*="youtube"], .rte iframe[src*="vimeo"]'));

  // tab navigation

  $('.css-slider, .product-variant__input, .simple-arrow, .mount-header [tabindex]').on('blur', function(e){
    $(this).removeClass('focus');
  });

  let activeElement = document.activeElement;
  $(document).on('keyup', function(e) {
    if ( e.keyCode == window.KEYCODES.TAB ) {
      if ( activeElement.classList.contains('focus') && e.target != activeElement ) {
        activeElement.classList.remove('focus');
      }
      if ( e.target.classList.contains('css-slider') ||
        e.target.classList.contains('product-variant__input') ||
        e.target.classList.contains('simple-arrow') || 
        e.target.getAttribute('tabindex') != '-1'
      ) {
        e.target.classList.add('focus');
      }
      activeElement = document.activeElement;
    }
  });

  // fix hash navigation in newsettrs


  let customLocation = -1;
  if ( window.location.search == '?customer_posted=true' ) {
    customLocation = $('.contact-form').offset().top - 250;
  } else if ( window.location.search.indexOf('?contact') >= 0 ) {
    customLocation = $('.contact-form').offset().top - 100;
  } else if ( window.location.pathname == '/challenge' ) {
    customLocation = 0;
  }
  if ( customLocation >= 0 ) {
    setTimeout(function(){
      $('html')[0].scrollTop = customLocation;
    }, 1000);
  }

  // setup loging template

  if ( $('body').hasClass('template-login') ) {

    if ( $('#RecoverPassword').length > 0 ) {

      $('#RecoverPassword').on('click', function(e){
        $('#CustomerLoginForm').hide();
        $('#RecoverPasswordForm').show();
        $('#LoginRecoverTitle').html($('#LoginRecoverTitle').data('password_recovery'));
        e.preventDefault();
      });

      $('#HideRecoverPasswordLink').on('click', function(e){
        $('#RecoverPasswordForm').hide();
        $('#CustomerLoginForm').show();
        $('#LoginRecoverTitle').html($('#LoginRecoverTitle').data('login'));
        e.preventDefault();
      });

      if (window.location.hash == '#recover') { 
        $('#RecoverPassword').trigger('click'); 
      }

    }

  }

  $('input[type="search"]').attr('value', '');

});

// Parallax shopify events

window.prlxElementsRemover = function(elementToRemove) {
  window.prlxElements.forEach(function(item, i){
    if ( item.element.isSameNode(elementToRemove) ) {
      delete window.prlxElements[i];
    }
  });
}

document.addEventListener('shopify:section:load', function(e){
  if ( e.target.classList.contains('mount-parallax') ) {
    window.prlxElementsPusher(e.target);
  }
  window.prlxAnimation();
});
document.addEventListener('shopify:section:unload', function(e){
  if ( e.target.classList.contains('mount-parallax') ) {
    e.target.querySelectorAll('[data-scroll-speed]').forEach(function(element){
      window.prlxElementsRemover(element);
    })
    window.prlxElements = window.prlxElements.filter(function(item){
      return item;
    });
  }   
  setTimeout(function(){
    window.prlxAnimation();
  }, 50);
});
document.addEventListener('shopify:section:select', function(e){
  window.prlxAnimation();
});
document.addEventListener('shopify:section:reorder', function(e){
  window.prlxAnimation();
});
document.addEventListener('shopify:block:select', function(e){
  window.prlxAnimation();
});

document.querySelectorAll('.rte a img').forEach(function(elm){
  elm.parentNode.style.border = 'none';
});