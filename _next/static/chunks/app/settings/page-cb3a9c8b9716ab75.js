(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[938],{6919:function(e,l,i){Promise.resolve().then(i.bind(i,25)),Promise.resolve().then(i.bind(i,9293)),Promise.resolve().then(i.bind(i,3452)),Promise.resolve().then(i.bind(i,7089)),Promise.resolve().then(i.bind(i,2203))},9293:function(e,l,i){"use strict";i.r(l),i.d(l,{Settings:function(){return f}});var n=i(1776),r=i(3452),t=i(661),o=i(5834),d=i(3685),a=i(2296),s=i(4193),u=i(7398),c=i(6312),h=i(8431),m=i(8297),v=i(5804);let x=/[^\u4e00-\u9faf\u3400-\u4dbf]/g,f=e=>{let l=(0,t.p)(),{knownKanji:i,setKnownKanji:f,removeKnownKanji:b,addAllJoyo:j,removeAllKanji:p}=(0,r.useKnownKanji)(),[k,C]=(0,v.useState)("");return(0,n.jsxs)(o.K,{children:[(0,n.jsx)(d.X,{children:"Settings"}),(0,n.jsxs)(a.x,{children:[i.length," kanji recorded"]}),(0,n.jsx)(s.i,{}),(0,n.jsx)(d.X,{children:"Bulk Add words"}),(0,n.jsx)(u.g,{w:"full",value:k,onChange:e=>C(e.target.value.replaceAll(x,""))}),(0,n.jsxs)(c.U,{children:[(0,n.jsx)(h.z,{colorScheme:"green",disabled:0===k.length,onClick:()=>{f(k),l({title:"Added"})},children:"Add"}),(0,n.jsx)(h.z,{colorScheme:"red",disabled:0===k.length,onClick:()=>{b(k),l({title:"Removed"})},children:"Remove"})]}),(0,n.jsx)(d.X,{children:"All Kanji Known"}),(0,n.jsx)(u.g,{w:"full",value:i}),(0,n.jsx)(m.xu,{children:(0,n.jsx)(h.z,{onClick:()=>{navigator.clipboard.writeText(i),l({title:"Kanji Copied"})},children:"Copy"})}),(0,n.jsx)(s.i,{}),(0,n.jsx)(d.X,{children:"Danger Zone"}),(0,n.jsxs)(c.U,{children:[(0,n.jsx)(h.z,{colorScheme:"red",onClick:()=>{j(),l({title:"All Joyo Added"})},children:"Add All Joyo Kanji"}),(0,n.jsx)(h.z,{colorScheme:"red",onClick:()=>{p(),l({title:"All Joyo Removed"})},children:"Remove All"})]})]})}},4193:function(e,l,i){"use strict";i.d(l,{i:function(){return s}});var n=i(5501),r=i(2073),t=i(2586),o=i(4793),d=i(617),a=i(1776),s=(0,n.G)(function(e,l){let{borderLeftWidth:i,borderBottomWidth:n,borderTopWidth:s,borderRightWidth:u,borderWidth:c,borderStyle:h,borderColor:m,...v}=(0,r.mq)("Divider",e),{className:x,orientation:f="horizontal",__css:b,...j}=(0,t.Lr)(e);return(0,a.jsx)(o.m.hr,{ref:l,"aria-orientation":f,...j,__css:{...v,border:"0",borderColor:m,borderStyle:h,...{vertical:{borderLeftWidth:i||u||c||"1px",height:"100%"},horizontal:{borderBottomWidth:n||s||c||"1px",width:"100%"}}[f],...b},className:(0,d.cx)("chakra-divider",x)})});s.displayName="Divider"},7398:function(e,l,i){"use strict";i.d(l,{g:function(){return b}});var n=i(9837),r=i(6695),t=i(5501),o=i(2073),d=i(2586),a=i(4793),s=i(617),u=i(5804),c=i(1776),[h,m]=(0,n.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),[v,x]=(0,n.k)({strict:!1,name:"FormControlContext"});(0,t.G)(function(e,l){let i=(0,o.jC)("Form",e),n=(0,d.Lr)(e),{getRootProps:t,htmlProps:m,...x}=function(e){let{id:l,isRequired:i,isInvalid:n,isDisabled:t,isReadOnly:o,...d}=e,a=(0,u.useId)(),c=l||`field-${a}`,h=`${c}-label`,m=`${c}-feedback`,v=`${c}-helptext`,[x,f]=(0,u.useState)(!1),[b,j]=(0,u.useState)(!1),[p,k]=(0,u.useState)(!1),C=(0,u.useCallback)((e={},l=null)=>({id:v,...e,ref:(0,r.lq)(l,e=>{e&&j(!0)})}),[v]),g=(0,u.useCallback)((e={},l=null)=>({...e,ref:l,"data-focus":(0,s.PB)(p),"data-disabled":(0,s.PB)(t),"data-invalid":(0,s.PB)(n),"data-readonly":(0,s.PB)(o),id:void 0!==e.id?e.id:h,htmlFor:void 0!==e.htmlFor?e.htmlFor:c}),[c,t,p,n,o,h]),y=(0,u.useCallback)((e={},l=null)=>({id:m,...e,ref:(0,r.lq)(l,e=>{e&&f(!0)}),"aria-live":"polite"}),[m]),_=(0,u.useCallback)((e={},l=null)=>({...e,...d,ref:l,role:"group"}),[d]),F=(0,u.useCallback)((e={},l=null)=>({...e,ref:l,role:"presentation","aria-hidden":!0,children:e.children||"*"}),[]);return{isRequired:!!i,isInvalid:!!n,isReadOnly:!!o,isDisabled:!!t,isFocused:!!p,onFocus:()=>k(!0),onBlur:()=>k(!1),hasFeedbackText:x,setHasFeedbackText:f,hasHelpText:b,setHasHelpText:j,id:c,labelId:h,feedbackId:m,helpTextId:v,htmlProps:d,getHelpTextProps:C,getErrorMessageProps:y,getRootProps:_,getLabelProps:g,getRequiredIndicatorProps:F}}(n),f=(0,s.cx)("chakra-form-control",e.className);return(0,c.jsx)(v,{value:x,children:(0,c.jsx)(h,{value:i,children:(0,c.jsx)(a.m.div,{...t({},l),className:f,__css:i.container})})})}).displayName="FormControl",(0,t.G)(function(e,l){let i=x(),n=m(),r=(0,s.cx)("chakra-form__helper-text",e.className);return(0,c.jsx)(a.m.div,{...null==i?void 0:i.getHelpTextProps(e,l),__css:n.helperText,className:r})}).displayName="FormHelperText";var f=["h","minH","height","minHeight"],b=(0,t.G)((e,l)=>{let i=(0,o.mq)("Textarea",e),{className:n,rows:r,...t}=(0,d.Lr)(e),u=function(e){let{isDisabled:l,isInvalid:i,isReadOnly:n,isRequired:r,...t}=function(e){var l,i,n;let r=x(),{id:t,disabled:o,readOnly:d,required:a,isRequired:u,isInvalid:c,isReadOnly:h,isDisabled:m,onFocus:v,onBlur:f,...b}=e,j=e["aria-describedby"]?[e["aria-describedby"]]:[];return(null==r?void 0:r.hasFeedbackText)&&(null==r?void 0:r.isInvalid)&&j.push(r.feedbackId),(null==r?void 0:r.hasHelpText)&&j.push(r.helpTextId),{...b,"aria-describedby":j.join(" ")||void 0,id:null!=t?t:null==r?void 0:r.id,isDisabled:null!=(l=null!=o?o:m)?l:null==r?void 0:r.isDisabled,isReadOnly:null!=(i=null!=d?d:h)?i:null==r?void 0:r.isReadOnly,isRequired:null!=(n=null!=a?a:u)?n:null==r?void 0:r.isRequired,isInvalid:null!=c?c:null==r?void 0:r.isInvalid,onFocus:(0,s.v0)(null==r?void 0:r.onFocus,v),onBlur:(0,s.v0)(null==r?void 0:r.onBlur,f)}}(e);return{...t,disabled:l,readOnly:n,required:r,"aria-invalid":(0,s.Qm)(i),"aria-required":(0,s.Qm)(r),"aria-readonly":(0,s.Qm)(n)}}(t),h=r?function(e,l=[]){let i=Object.assign({},e);for(let e of l)e in i&&delete i[e];return i}(i,f):i;return(0,c.jsx)(a.m.textarea,{ref:l,rows:r,...u,className:(0,s.cx)("chakra-textarea",n),__css:h})});b.displayName="Textarea"},661:function(e,l,i){"use strict";i.d(l,{p:function(){return d}});var n=i(2630),r=i(8674),t=i(1181),o=i(5804);function d(e){let{theme:l}=(0,t.uP)(),i=(0,n.OX)();return(0,o.useMemo)(()=>(0,r.Cj)(l.direction,{...i,...e}),[e,l.direction,i])}}},function(e){e.O(0,[146,965,116,630,955,407,437,744],function(){return e(e.s=6919)}),_N_E=e.O()}]);