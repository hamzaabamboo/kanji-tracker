(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5830:function(e,t,n){Promise.resolve().then(n.bind(n,25)),Promise.resolve().then(n.bind(n,3452)),Promise.resolve().then(n.bind(n,7089)),Promise.resolve().then(n.bind(n,2203)),Promise.resolve().then(n.bind(n,7426))},7426:function(e,t,n){"use strict";n.r(t),n.d(t,{KanjiViewer:function(){return d}});var r=n(1776),i=n(3452),l=n(5834),o=n(2296),a=n(6312),s=n(8297),c=n(5804),u=n(4793);function f(e){let{data:t,isSmall:n=!1,hideFurigana:i=!1,showAlternative:l=!1,fontWeight:a}=e,{kanji:s,reading:c}=t,f=a||(n?"normal":"bold");return(0,r.jsxs)(u.m.ruby,{fontSize:n?"lg":"3xl",textAlign:"center",fontFamily:"Minchou, Meiryou",children:[(0,r.jsx)(o.x,{as:"span",fontWeight:f,children:null==s?void 0:s.replace(/[\(\［](.*?)[\］\)]/g,"").split("・")[0]}),!i&&(0,r.jsx)(u.m.rt,{children:c}),l&&/[\(\［](.*?)[\］\)]/.test(null!=s?s:"")&&(0,r.jsx)(o.x,{as:"span",fontWeight:f,children:null==s?void 0:s.substring(1)})]})}let d=e=>{let{data:t}=e,{knownKanji:n,setKnownKanji:u,removeKnownKanji:d}=(0,i.useKnownKanji)(),h=(0,c.useMemo)(()=>t.every(e=>n.includes(e)),[t,n]);return(0,r.jsxs)(l.K,{children:[h?(0,r.jsx)(o.x,{onClick:()=>d(t.join("")),children:"Select None"}):(0,r.jsx)(o.x,{onClick:()=>u(t.join("")),children:"Select All"}),(0,r.jsx)(a.U,{spacing:2,mb:6,flexWrap:"wrap",children:t.map((e,t)=>{let i=n.includes(e);return(0,r.jsx)(s.xu,{shadow:i?"md":"none",boxSize:12,p:2,onClick:()=>u(e),display:"flex",justifyContent:"center",alignItems:"center",bgColor:i?"white":"gray.200",children:(0,r.jsx)(f,{fontWeight:i?"500":"100",data:{kanji:e}})},e)})})]})}},1320:function(e){!function(){"use strict";var t={114:function(e){function t(e){if("string"!=typeof e)throw TypeError("Path must be a string. Received "+JSON.stringify(e))}function n(e,t){for(var n,r="",i=0,l=-1,o=0,a=0;a<=e.length;++a){if(a<e.length)n=e.charCodeAt(a);else if(47===n)break;else n=47;if(47===n){if(l===a-1||1===o);else if(l!==a-1&&2===o){if(r.length<2||2!==i||46!==r.charCodeAt(r.length-1)||46!==r.charCodeAt(r.length-2)){if(r.length>2){var s=r.lastIndexOf("/");if(s!==r.length-1){-1===s?(r="",i=0):i=(r=r.slice(0,s)).length-1-r.lastIndexOf("/"),l=a,o=0;continue}}else if(2===r.length||1===r.length){r="",i=0,l=a,o=0;continue}}t&&(r.length>0?r+="/..":r="..",i=2)}else r.length>0?r+="/"+e.slice(l+1,a):r=e.slice(l+1,a),i=a-l-1;l=a,o=0}else 46===n&&-1!==o?++o:o=-1}return r}var r={resolve:function(){for(var e,r,i="",l=!1,o=arguments.length-1;o>=-1&&!l;o--)o>=0?r=arguments[o]:(void 0===e&&(e=""),r=e),t(r),0!==r.length&&(i=r+"/"+i,l=47===r.charCodeAt(0));return(i=n(i,!l),l)?i.length>0?"/"+i:"/":i.length>0?i:"."},normalize:function(e){if(t(e),0===e.length)return".";var r=47===e.charCodeAt(0),i=47===e.charCodeAt(e.length-1);return(0!==(e=n(e,!r)).length||r||(e="."),e.length>0&&i&&(e+="/"),r)?"/"+e:e},isAbsolute:function(e){return t(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0==arguments.length)return".";for(var e,n=0;n<arguments.length;++n){var i=arguments[n];t(i),i.length>0&&(void 0===e?e=i:e+="/"+i)}return void 0===e?".":r.normalize(e)},relative:function(e,n){if(t(e),t(n),e===n||(e=r.resolve(e))===(n=r.resolve(n)))return"";for(var i=1;i<e.length&&47===e.charCodeAt(i);++i);for(var l=e.length,o=l-i,a=1;a<n.length&&47===n.charCodeAt(a);++a);for(var s=n.length-a,c=o<s?o:s,u=-1,f=0;f<=c;++f){if(f===c){if(s>c){if(47===n.charCodeAt(a+f))return n.slice(a+f+1);if(0===f)return n.slice(a+f)}else o>c&&(47===e.charCodeAt(i+f)?u=f:0===f&&(u=0));break}var d=e.charCodeAt(i+f);if(d!==n.charCodeAt(a+f))break;47===d&&(u=f)}var h="";for(f=i+u+1;f<=l;++f)(f===l||47===e.charCodeAt(f))&&(0===h.length?h+="..":h+="/..");return h.length>0?h+n.slice(a+u):(a+=u,47===n.charCodeAt(a)&&++a,n.slice(a))},_makeLong:function(e){return e},dirname:function(e){if(t(e),0===e.length)return".";for(var n=e.charCodeAt(0),r=47===n,i=-1,l=!0,o=e.length-1;o>=1;--o)if(47===(n=e.charCodeAt(o))){if(!l){i=o;break}}else l=!1;return -1===i?r?"/":".":r&&1===i?"//":e.slice(0,i)},basename:function(e,n){if(void 0!==n&&"string"!=typeof n)throw TypeError('"ext" argument must be a string');t(e);var r,i=0,l=-1,o=!0;if(void 0!==n&&n.length>0&&n.length<=e.length){if(n.length===e.length&&n===e)return"";var a=n.length-1,s=-1;for(r=e.length-1;r>=0;--r){var c=e.charCodeAt(r);if(47===c){if(!o){i=r+1;break}}else -1===s&&(o=!1,s=r+1),a>=0&&(c===n.charCodeAt(a)?-1==--a&&(l=r):(a=-1,l=s))}return i===l?l=s:-1===l&&(l=e.length),e.slice(i,l)}for(r=e.length-1;r>=0;--r)if(47===e.charCodeAt(r)){if(!o){i=r+1;break}}else -1===l&&(o=!1,l=r+1);return -1===l?"":e.slice(i,l)},extname:function(e){t(e);for(var n=-1,r=0,i=-1,l=!0,o=0,a=e.length-1;a>=0;--a){var s=e.charCodeAt(a);if(47===s){if(!l){r=a+1;break}continue}-1===i&&(l=!1,i=a+1),46===s?-1===n?n=a:1!==o&&(o=1):-1!==n&&(o=-1)}return -1===n||-1===i||0===o||1===o&&n===i-1&&n===r+1?"":e.slice(n,i)},format:function(e){var t,n;if(null===e||"object"!=typeof e)throw TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return t=e.dir||e.root,n=e.base||(e.name||"")+(e.ext||""),t?t===e.root?t+n:t+"/"+n:n},parse:function(e){t(e);var n,r={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return r;var i=e.charCodeAt(0),l=47===i;l?(r.root="/",n=1):n=0;for(var o=-1,a=0,s=-1,c=!0,u=e.length-1,f=0;u>=n;--u){if(47===(i=e.charCodeAt(u))){if(!c){a=u+1;break}continue}-1===s&&(c=!1,s=u+1),46===i?-1===o?o=u:1!==f&&(f=1):-1!==o&&(f=-1)}return -1===o||-1===s||0===f||1===f&&o===s-1&&o===a+1?-1!==s&&(0===a&&l?r.base=r.name=e.slice(1,s):r.base=r.name=e.slice(a,s)):(0===a&&l?(r.name=e.slice(1,o),r.base=e.slice(1,s)):(r.name=e.slice(a,o),r.base=e.slice(a,s)),r.ext=e.slice(o,s)),a>0?r.dir=e.slice(0,a-1):l&&(r.dir="/"),r},sep:"/",delimiter:":",win32:null,posix:null};r.posix=r,e.exports=r}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var l=n[e]={exports:{}},o=!0;try{t[e](l,l.exports,r),o=!1}finally{o&&delete n[e]}return l.exports}r.ab="//";var i=r(114);e.exports=i}()},2198:function(e,t,n){"use strict";n.d(t,{I:function(){return a}});var r=n(469),i=n(5501),l=n(5804),o=n(1776);function a(e){let{viewBox:t="0 0 24 24",d:n,displayName:a,defaultProps:s={}}=e,c=l.Children.toArray(e.path),u=(0,i.G)((e,i)=>(0,o.jsx)(r.J,{ref:i,viewBox:t,...s,...e,children:c.length?c:(0,o.jsx)("path",{fill:"currentColor",d:n})}));return u.displayName=a,u}},4259:function(e,t,n){"use strict";n.d(t,{s:function(){return r}});var r=(0,n(2198).I)({d:"M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"})},1434:function(e,t,n){"use strict";n.d(t,{U:function(){return r}});var r=(0,n(2198).I)({displayName:"HamburgerIcon",viewBox:"0 0 24 24",d:"M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"})},4657:function(e,t,n){"use strict";n.d(t,{e:function(){return r}});var r=(0,n(2198).I)({viewBox:"0 0 14 14",d:"M14,7.77 L14,6.17 L12.06,5.53 L11.61,4.44 L12.49,2.6 L11.36,1.47 L9.55,2.38 L8.46,1.93 L7.77,0.01 L6.17,0.01 L5.54,1.95 L4.43,2.4 L2.59,1.52 L1.46,2.65 L2.37,4.46 L1.92,5.55 L0,6.23 L0,7.82 L1.94,8.46 L2.39,9.55 L1.51,11.39 L2.64,12.52 L4.45,11.61 L5.54,12.06 L6.23,13.98 L7.82,13.98 L8.45,12.04 L9.56,11.59 L11.4,12.47 L12.53,11.34 L11.61,9.53 L12.08,8.44 L14,7.75 L14,7.77 Z M7,10 C5.34,10 4,8.66 4,7 C4,5.34 5.34,4 7,4 C8.66,4 10,5.34 10,7 C10,8.66 8.66,10 7,10 Z",displayName:"SettingsIcon"})},2296:function(e,t,n){"use strict";n.d(t,{x:function(){return c}});var r=n(5501),i=n(2073),l=n(2586),o=n(4793),a=n(617),s=n(1776),c=(0,r.G)(function(e,t){let n=(0,i.mq)("Text",e),{className:r,align:c,decoration:u,casing:f,...d}=(0,l.Lr)(e),h=function(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return(0,s.jsx)(o.m.p,{ref:t,className:(0,a.cx)("chakra-text",e.className),...h,...d,__css:n})});c.displayName="Text"},6312:function(e,t,n){"use strict";n.d(t,{U:function(){return o}});var r=n(5834),i=n(5501),l=n(1776),o=(0,i.G)((e,t)=>(0,l.jsx)(r.K,{align:"center",...e,direction:"row",ref:t}));o.displayName="HStack"},8324:function(e,t,n){"use strict";n.d(t,{W:function(){return c}});var r=n(5501),i=n(2586),l=n(2073),o=n(4793),a=n(617),s=n(1776),c=(0,r.G)(function(e,t){let{className:n,centerContent:r,...c}=(0,i.Lr)(e),u=(0,l.mq)("Container",e);return(0,s.jsx)(o.m.div,{ref:t,className:(0,a.cx)("chakra-container",n),...c,__css:{...u,...r&&{display:"flex",flexDirection:"column",alignItems:"center"}}})});c.displayName="Container"},3685:function(e,t,n){"use strict";n.d(t,{X:function(){return c}});var r=n(5501),i=n(2073),l=n(2586),o=n(4793),a=n(617),s=n(1776),c=(0,r.G)(function(e,t){let n=(0,i.mq)("Heading",e),{className:r,...c}=(0,l.Lr)(e);return(0,s.jsx)(o.m.h2,{ref:t,className:(0,a.cx)("chakra-heading",e.className),...c,__css:n})});c.displayName="Heading"},4208:function(e,t,n){"use strict";n.d(t,{r:function(){return c}});var r=n(5501),i=n(2073),l=n(2586),o=n(4793),a=n(617),s=n(1776),c=(0,r.G)(function(e,t){let n=(0,i.mq)("Link",e),{className:r,isExternal:c,...u}=(0,l.Lr)(e);return(0,s.jsx)(o.m.a,{target:c?"_blank":void 0,rel:c?"noopener":void 0,ref:t,className:(0,a.cx)("chakra-link",r),...u,__css:n})});c.displayName="Link"},8297:function(e,t,n){"use strict";n.d(t,{xu:function(){return o}});var r=n(4793),i=n(5501),l=n(1776),o=(0,r.m)("div");o.displayName="Box";var a=(0,i.G)(function(e,t){let{size:n,centerContent:r=!0,...i}=e;return(0,l.jsx)(o,{ref:t,boxSize:n,__css:{...r?{display:"flex",alignItems:"center",justifyContent:"center"}:{},flexShrink:0,flexGrow:0},...i})});a.displayName="Square",(0,i.G)(function(e,t){let{size:n,...r}=e;return(0,l.jsx)(a,{size:n,ref:t,borderRadius:"9999px",...r})}).displayName="Circle"},5834:function(e,t,n){"use strict";n.d(t,{K:function(){return s}});var r=n(4793),i=n(1776),l=e=>(0,i.jsx)(r.m.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});l.displayName="StackItem";var o=n(617);Object.freeze(["base","sm","md","lg","xl","2xl"]);var a=n(5804),s=(0,n(5501).G)((e,t)=>{let{isInline:n,direction:s,align:c,justify:u,spacing:f="0.5rem",wrap:d,children:h,divider:m,className:x,shouldWrapChildren:g,...v}=e,p=n?"row":null!=s?s:"column",b=(0,a.useMemo)(()=>(function(e){var t;let{spacing:n,direction:r}=e,i={column:{my:n,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:n,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:n,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:n,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(t=e=>i[e],Array.isArray(r)?r.map(e=>null===e?null:t(e)):(0,o.Kn)(r)?Object.keys(r).reduce((e,n)=>(e[n]=t(r[n]),e),{}):null!=r?t(r):null)}})({spacing:f,direction:p}),[f,p]),L=!!m,y=!g&&!L,C=(0,a.useMemo)(()=>{let e=a.Children.toArray(h).filter(e=>(0,a.isValidElement)(e));return y?e:e.map((t,n)=>{let r=void 0!==t.key?t.key:n,o=n+1===e.length,s=(0,i.jsx)(l,{children:t},r),c=g?s:t;if(!L)return c;let u=(0,a.cloneElement)(m,{__css:b});return(0,i.jsxs)(a.Fragment,{children:[c,o?null:u]},r)})},[m,b,L,y,g,h]),A=(0,o.cx)("chakra-stack",x);return(0,i.jsx)(r.m.div,{ref:t,display:"flex",alignItems:c,justifyContent:u,flexDirection:p,flexWrap:d,gap:L?void 0:f,className:A,...v,children:C})});s.displayName="Stack"}},function(e){e.O(0,[146,955,407,437,744],function(){return e(e.s=5830)}),_N_E=e.O()}]);