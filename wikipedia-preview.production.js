!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("wikipediaPreview",[],t):"object"==typeof exports?exports.wikipediaPreview=t():e.wikipediaPreview=t()}(window,(function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){var i=n(1),r=n(2);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1},a=(i(r,o),r.locals?r.locals:{});e.exports=a},function(e,t,n){"use strict";var i,r=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function c(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function p(e,t){for(var n={},i=[],r=0;r<e.length;r++){var o=e[r],p=t.base?o[0]+t.base:o[0],u=n[p]||0,l="".concat(p," ").concat(u);n[p]=u+1;var d=c(l),s={css:o[1],media:o[2],sourceMap:o[3]};-1!==d?(a[d].references++,a[d].updater(s)):a.push({identifier:l,updater:g(s,t),references:1}),i.push(l)}return i}function u(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var r=n.nc;r&&(i.nonce=r)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,d=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function s(e,t,n,i){var r=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=d(t,r);else{var o=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function f(e,t,n){var i=n.css,r=n.media,o=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),o&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var v=null,m=0;function g(e,t){var n,i,r;if(t.singleton){var o=m++;n=v||(v=u(t)),i=s.bind(null,n,o,!1),r=s.bind(null,n,o,!0)}else n=u(t),i=f.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=p(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var r=c(n[i]);a[r].references--}for(var o=p(e,t),u=0;u<n.length;u++){var l=c(n[u]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}n=o}}}},function(e,t,n){(t=n(3)(!1)).push([e.i,".wp-popup {\n  box-sizing: border-box;\n  padding: 0;\n  position: absolute;\n  border: solid rgba(0, 0, 0, 0.05) 1px;\n  border-radius: 2px;\n  background-color: white;\n  box-shadow: 0 30px 90px -20px rgba(0, 0, 0, 0.3), 0 0 1px 1px rgba(0, 0, 0, 0.05);\n  height: 200px;\n  width: auto;\n  z-index: 110;\n}\n.wp-popup * {\n  box-sizing: border-box;\n}\n.wp-popup .wp-article-preview {\n  display: flex;\n}\n.wp-popup .wp-article-preview .wp-text-content {\n  width: 200px;\n  height: 200px;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n}\n.wp-popup .wp-article-preview .wp-text-content .wp-title {\n  font-size: 20px;\n  font-family: 'Linux Libertine', 'Georgia', 'Times', serif;\n}\n.wp-popup .wp-article-preview .wp-text-content .wp-preview {\n  font-size: 14px;\n  flex-grow: 1;\n  font-family: sans-serif;\n}\n.wp-popup .wp-article-preview .wp-text-content .wp-preview p {\n  padding: 0;\n  margin: 0;\n  overflow: hidden;\n  line-height: 20px;\n  max-height: 140px;\n}\n.wp-popup .wp-article-preview .wp-text-content .wp-preview p:after {\n  content: ' ';\n  position: absolute;\n  bottom: 25px;\n  left: 10px;\n  right: 200px;\n  top: 160px;\n  background: -moz-linear-gradient(top, rgba(255, 255, 255, 0) 0%, #ffffff 100%);\n  /* FF3.6-15 */\n  background: -webkit-linear-gradient(top, rgba(255, 255, 255, 0) 0%, #ffffff 100%);\n  /* Chrome10-25,Safari5.1-6 */\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #ffffff 100%);\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00ffffff', endColorstr='#ffffff', GradientType=0);\n  /* IE6-9 */\n}\n.wp-popup .wp-article-preview .wp-text-content .wp-preview .wp-link {\n  font-family: 'Linux Libertine';\n}\n.wp-popup .wp-article-preview .wp-image {\n  width: 200px;\n  height: 200px;\n  background-size: cover;\n  background-position: center;\n}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var r=(a=i,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),p="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(p," */")),o=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[n].concat(o).concat([r]).join("\n")}var a,c,p;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,i){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(i)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(r[a]=!0)}for(var c=0;c<e.length;c++){var p=[].concat(e[c]);i&&r[p[0]]||(n&&(p[2]?p[2]="".concat(n," and ").concat(p[2]):p[2]=n),t.push(p))}},t}},,,function(e,t,n){"use strict";n.r(t);var i,r=function(e,t){var n=new XMLHttpRequest;n.open("GET",e),n.send(),n.addEventListener("load",(function(){t(JSON.parse(n.responseText))})),n.addEventListener("error",(function(){t(null,n.status)}))},o={},a=function(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:r;void 0===o[e]?i(e,(function(i){i&&n(o[e]=t(i))})):n(o[e])},c=function(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:a,r="https://".concat(e,".wikipedia.org/api/rest_v1/page/summary/").concat(encodeURIComponent(t));i(r,(function(e){return"standard"===e.type&&"ltr"===e.dir&&{title:e.displaytitle,extractHtml:e.extract_html,pageUrl:e.content_urls.desktop.page,imgUrl:e.thumbnail?e.thumbnail.source:null}}),n)},p=function(e,t,n,i,r,o){var a,c="",p="";return a=e.x>r/2?n+e.right-t:n+e.left,e.y>o/2?p=o-e.top-i:c=i+e.bottom,{left:a,right:"",top:c,bottom:p}},u=function(e){return e?e+"px":e},l=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window;i||((i=n.document.createElement("div")).setAttribute("dir","ltr"),i.classList.add("wp-popup"),i.style.visibility="hidden",e.appendChild(i));var r=function e(n){var r=n.toElement||n.relatedTarget;r===t||i.contains(r)||(i.style.visibility="hidden",t&&(t.removeEventListener("mouseleave",e),t=null))};i.addEventListener("mouseleave",r);var o=function(e,o){i.innerHTML=e;var a=void 0!==n.pageXOffset?n.pageXOffset:(n.document.documentElement||n.document.body.parentNode||n.document.body).scrollLeft,c=void 0!==n.pageYOffset?n.pageYOffset:(n.document.documentElement||n.document.body.parentNode||n.document.body).scrollTop,l=p(o.getBoundingClientRect(),i.offsetWidth,a,c,n.innerWidth,n.innerHeight);i.style.left=u(l.left),i.style.right=u(l.right),i.style.top=u(l.top),i.style.bottom=u(l.bottom),(t=o).addEventListener("mouseleave",r),i.style.visibility="visible"};return{show:o}},d={en:{wikipedia:"Wikipedia"},fr:{wikipedia:"Wikipédia"},es:{wikipedia:"Wikipedia"}},s=function(e,t){var n=t.imgUrl?'<div class="wp-image" style="background-image: url(\''.concat(t.imgUrl,"');\" />"):"",i=function(e,t){return(d[e]||d.en)[t]}(e,"wikipedia");return'\n\t\t<div class="wp-article-preview">\n\t\t\t<div class="wp-text-content">\n\t\t\t\t<div class="wp-title">'.concat(t.title,'</div>\n\t\t\t\t<div class="wp-preview">').concat(t.extractHtml,'</div>\n\t\t\t\t<a class="wp-link" href="').concat(t.pageUrl,'" target="_blank">').concat(i,"</a>\n\t\t\t</div>\n\t\t\t").concat(n,"\n\t\t</div>\n\t").trim()};n(0);function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.root,n=e.selector,i=e.lang,r=e.popupContainer,o=i||"en";t=t||document,n=n||"[data-wikipedia-preview]",r=r||document.body;var a=l(r),p=function(e){var t=e.target,n=t.getAttribute("data-wp-title")||t.textContent,i=t.getAttribute("data-wp-lang")||o;c(i,n,(function(e){e&&a.show(s(i,e),t)}))};Array.prototype.forEach.call(t.querySelectorAll(n),(function(e){e.addEventListener("mouseenter",p)}))}n.d(t,"init",(function(){return f}))}])}));