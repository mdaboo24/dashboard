"use strict";(self["webpackChunkidentity_backoffice"]=self["webpackChunkidentity_backoffice"]||[]).push([[73],{1501:function(e,t,r){r.d(t,{K:function(){return n}});const n=e=>e.$errors.length>0?e.$errors[0].$message:e.$silentErrors.length>0?e.$silentErrors[0].$message:void 0},4219:function(e,t,r){r.d(t,{Xw:function(){return C}});r(560);var n=r(4870),a=r(3396);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object.keys(e).reduce(((r,a)=>(t.includes(a)||(r[a]=(0,n.SU)(e[a])),r)),{})}function u(e){return"function"===typeof e}function c(e){return(0,n.PG)(e)||(0,n.$y)(e)}function $(e,t,r){let n=e;const a=t.split(".");for(let i=0;i<a.length;i++){if(!n[a[i]])return r;n=n[a[i]]}return n}function d(e,t,r){return(0,a.Fl)((()=>e.some((e=>$(t,e,{[r]:!1})[r]))))}function v(e,t,r){return(0,a.Fl)((()=>e.reduce(((e,n)=>{const a=$(t,n,{[r]:!1})[r]||[];return e.concat(a)}),[])))}function f(e,t,r,a){return e.call(a,(0,n.SU)(t),(0,n.SU)(r),a)}function p(e){return void 0!==e.$valid?!e.$valid:!e}function h(e,t,r,i,o,l,s){let{$lazy:u,$rewardEarly:c}=o,$=arguments.length>7&&void 0!==arguments[7]?arguments[7]:[],d=arguments.length>8?arguments[8]:void 0,v=arguments.length>9?arguments[9]:void 0,h=arguments.length>10?arguments[10]:void 0;const y=(0,n.iH)(!!i.value),g=(0,n.iH)(0);r.value=!1;const m=(0,a.YP)([t,i].concat($,h),(()=>{if(u&&!i.value||c&&!v.value&&!r.value)return;let n;try{n=f(e,t,d,s)}catch(a){n=Promise.reject(a)}g.value++,r.value=!!g.value,y.value=!1,Promise.resolve(n).then((e=>{g.value--,r.value=!!g.value,l.value=e,y.value=p(e)})).catch((e=>{g.value--,r.value=!!g.value,l.value=e,y.value=!0}))}),{immediate:!0,deep:"object"===typeof t});return{$invalid:y,$unwatch:m}}function y(e,t,r,n,i,o,l,s){let{$lazy:u,$rewardEarly:c}=n;const $=()=>({}),d=(0,a.Fl)((()=>{if(u&&!r.value||c&&!s.value)return!1;let n=!0;try{const r=f(e,t,l,o);i.value=r,n=p(r)}catch(a){i.value=a}return n}));return{$unwatch:$,$invalid:d}}function g(e,t,r,i,o,l,c,$,d,v,f){const p=(0,n.iH)(!1),g=e.$params||{},m=(0,n.iH)(null);let b,w;e.$async?({$invalid:b,$unwatch:w}=h(e.$validator,t,p,r,i,m,o,e.$watchTargets,d,v,f)):({$invalid:b,$unwatch:w}=y(e.$validator,t,r,i,m,o,d,v));const O=e.$message,j=u(O)?(0,a.Fl)((()=>O(s({$pending:p,$invalid:b,$params:s(g),$model:t,$response:m,$validator:l,$propertyPath:$,$property:c})))):O||"";return{$message:j,$params:g,$pending:p,$invalid:b,$response:m,$unwatch:w}}function m(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=(0,n.SU)(e),r=Object.keys(t),a={},i={},o={};let l=null;return r.forEach((e=>{const r=t[e];switch(!0){case u(r.$validator):a[e]=r;break;case u(r):a[e]={$validator:r};break;case"$validationGroups"===e:l=r;break;case e.startsWith("$"):o[e]=r;break;default:i[e]=r}})),{rules:a,nestedValidators:i,config:o,validationGroups:l}}const b="__root";function w(e,t,r,i,o,l,s,u,c){const $=Object.keys(e),d=i.get(o,e),v=(0,n.iH)(!1),f=(0,n.iH)(!1),p=(0,n.iH)(0);if(d){if(!d.$partial)return d;d.$unwatch(),v.value=d.$dirty.value}const h={$dirty:v,$path:o,$touch:()=>{v.value||(v.value=!0)},$reset:()=>{v.value&&(v.value=!1)},$commit:()=>{}};return $.length?($.forEach((n=>{h[n]=g(e[n],t,h.$dirty,l,s,n,r,o,c,f,p)})),h.$externalResults=(0,a.Fl)((()=>u.value?[].concat(u.value).map(((e,t)=>({$propertyPath:o,$property:r,$validator:"$externalResults",$uid:`${o}-externalResult-${t}`,$message:e,$params:{},$response:null,$pending:!1}))):[])),h.$invalid=(0,a.Fl)((()=>{const e=$.some((e=>(0,n.SU)(h[e].$invalid)));return f.value=e,!!h.$externalResults.value.length||e})),h.$pending=(0,a.Fl)((()=>$.some((e=>(0,n.SU)(h[e].$pending))))),h.$error=(0,a.Fl)((()=>!!h.$dirty.value&&(h.$pending.value||h.$invalid.value))),h.$silentErrors=(0,a.Fl)((()=>$.filter((e=>(0,n.SU)(h[e].$invalid))).map((e=>{const t=h[e];return(0,n.qj)({$propertyPath:o,$property:r,$validator:e,$uid:`${o}-${e}`,$message:t.$message,$params:t.$params,$response:t.$response,$pending:t.$pending})})).concat(h.$externalResults.value))),h.$errors=(0,a.Fl)((()=>h.$dirty.value?h.$silentErrors.value:[])),h.$unwatch=()=>$.forEach((e=>{h[e].$unwatch()})),h.$commit=()=>{f.value=!0,p.value=Date.now()},i.set(o,e,h),h):(d&&i.set(o,e,h),h)}function O(e,t,r,n,a,i,o){const l=Object.keys(e);return l.length?l.reduce(((l,s)=>(l[s]=x({validations:e[s],state:t,key:s,parentKey:r,resultsCache:n,globalConfig:a,instance:i,externalResults:o}),l)),{}):{}}function j(e,t,r){const i=(0,a.Fl)((()=>[t,r].filter((e=>e)).reduce(((e,t)=>e.concat(Object.values((0,n.SU)(t)))),[]))),o=(0,a.Fl)({get(){return e.$dirty.value||!!i.value.length&&i.value.every((e=>e.$dirty))},set(t){e.$dirty.value=t}}),l=(0,a.Fl)((()=>{const t=(0,n.SU)(e.$silentErrors)||[],r=i.value.filter((e=>((0,n.SU)(e).$silentErrors||[]).length)).reduce(((e,t)=>e.concat(...t.$silentErrors)),[]);return t.concat(r)})),s=(0,a.Fl)((()=>{const t=(0,n.SU)(e.$errors)||[],r=i.value.filter((e=>((0,n.SU)(e).$errors||[]).length)).reduce(((e,t)=>e.concat(...t.$errors)),[]);return t.concat(r)})),u=(0,a.Fl)((()=>i.value.some((e=>e.$invalid))||(0,n.SU)(e.$invalid)||!1)),c=(0,a.Fl)((()=>i.value.some((e=>(0,n.SU)(e.$pending)))||(0,n.SU)(e.$pending)||!1)),$=(0,a.Fl)((()=>i.value.some((e=>e.$dirty))||i.value.some((e=>e.$anyDirty))||o.value)),d=(0,a.Fl)((()=>!!o.value&&(c.value||u.value))),v=()=>{e.$touch(),i.value.forEach((e=>{e.$touch()}))},f=()=>{e.$commit(),i.value.forEach((e=>{e.$commit()}))},p=()=>{e.$reset(),i.value.forEach((e=>{e.$reset()}))};return i.value.length&&i.value.every((e=>e.$dirty))&&v(),{$dirty:o,$errors:s,$invalid:u,$anyDirty:$,$error:d,$pending:c,$touch:v,$reset:p,$silentErrors:l,$commit:f}}function x(e){let{validations:t,state:r,key:i,parentKey:l,childResults:s,resultsCache:u,globalConfig:c={},instance:$,externalResults:f}=e;const p=l?`${l}.${i}`:i,{rules:h,nestedValidators:y,config:g,validationGroups:x}=m(t),E=o(o({},c),g),S=i?(0,a.Fl)((()=>{const e=(0,n.SU)(r);return e?(0,n.SU)(e[i]):void 0})):r,P=o({},(0,n.SU)(f)||{}),U=(0,a.Fl)((()=>{const e=(0,n.SU)(f);return i?e?(0,n.SU)(e[i]):void 0:e})),F=w(h,S,i,u,p,E,$,U,r),R=O(y,S,p,u,E,$,U),_={};x&&Object.entries(x).forEach((e=>{let[t,r]=e;_[t]={$invalid:d(r,R,"$invalid"),$error:d(r,R,"$error"),$pending:d(r,R,"$pending"),$errors:v(r,R,"$errors"),$silentErrors:v(r,R,"$silentErrors")}}));const{$dirty:C,$errors:k,$invalid:z,$anyDirty:A,$error:L,$pending:D,$touch:V,$reset:H,$silentErrors:I,$commit:T}=j(F,R,s),N=i?(0,a.Fl)({get:()=>(0,n.SU)(S),set:e=>{C.value=!0;const t=(0,n.SU)(r),a=(0,n.SU)(f);a&&(a[i]=P[i]),(0,n.dq)(t[i])?t[i].value=e:t[i]=e}}):null;async function q(){return V(),E.$rewardEarly&&(T(),await(0,a.Y3)()),await(0,a.Y3)(),new Promise((e=>{if(!D.value)return e(!z.value);const t=(0,a.YP)(D,(()=>{e(!z.value),t()}))}))}function Y(e){return(s.value||{})[e]}function G(){(0,n.dq)(f)?f.value=P:0===Object.keys(P).length?Object.keys(f).forEach((e=>{delete f[e]})):Object.assign(f,P)}return i&&E.$autoDirty&&(0,a.YP)(S,(()=>{C.value||V();const e=(0,n.SU)(f);e&&(e[i]=P[i])}),{flush:"sync"}),(0,n.qj)(o(o(o({},F),{},{$model:N,$dirty:C,$error:L,$errors:k,$invalid:z,$anyDirty:A,$pending:D,$touch:V,$reset:H,$path:p||b,$silentErrors:I,$validate:q,$commit:T},s&&{$getResultsForChild:Y,$clearExternalResults:G,$validationGroups:_}),R))}class E{constructor(){this.storage=new Map}set(e,t,r){this.storage.set(e,{rules:t,result:r})}checkRulesValidity(e,t,r){const a=Object.keys(r),i=Object.keys(t);if(i.length!==a.length)return!1;const o=i.every((e=>a.includes(e)));return!!o&&i.every((e=>!t[e].$params||Object.keys(t[e].$params).every((a=>(0,n.SU)(r[e].$params[a])===(0,n.SU)(t[e].$params[a])))))}get(e,t){const r=this.storage.get(e);if(!r)return;const{rules:n,result:a}=r,i=this.checkRulesValidity(e,t,n),o=a.$unwatch?a.$unwatch:()=>({});return i?a:{$dirty:a.$dirty,$partial:!0,$unwatch:o}}}const S={COLLECT_ALL:!0,COLLECT_NONE:!1},P=Symbol("vuelidate#injectChildResults"),U=Symbol("vuelidate#removeChildResults");function F(e){let{$scope:t,instance:r}=e;const i={},o=(0,n.iH)([]),l=(0,a.Fl)((()=>o.value.reduce(((e,t)=>(e[t]=(0,n.SU)(i[t]),e)),{})));function s(e,r){let{$registerAs:n,$scope:a,$stopPropagation:l}=r;l||t===S.COLLECT_NONE||a===S.COLLECT_NONE||t!==S.COLLECT_ALL&&t!==a||(i[n]=e,o.value.push(n))}function u(e){o.value=o.value.filter((t=>t!==e)),delete i[e]}r.__vuelidateInjectInstances=[].concat(r.__vuelidateInjectInstances||[],s),r.__vuelidateRemoveInstances=[].concat(r.__vuelidateRemoveInstances||[],u);const c=(0,a.f3)(P,[]);(0,a.JJ)(P,r.__vuelidateInjectInstances);const $=(0,a.f3)(U,[]);return(0,a.JJ)(U,r.__vuelidateRemoveInstances),{childResults:l,sendValidationResultsToParent:c,removeValidationResultsFromParent:$}}function R(e){return new Proxy(e,{get(e,t){return"object"===typeof e[t]?R(e[t]):(0,a.Fl)((()=>e[t]))}})}let _=0;function C(e,t){var r;let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};1===arguments.length&&(i=e,e=void 0,t=void 0);let{$registerAs:l,$scope:s=S.COLLECT_ALL,$stopPropagation:$,$externalResults:d,currentVueInstance:v}=i;const f=v||(null===(r=(0,a.FN)())||void 0===r?void 0:r.proxy),p=f?f.$options:{};l||(_+=1,l=`_vuelidate_${_}`);const h=(0,n.iH)({}),y=new E,{childResults:g,sendValidationResultsToParent:m,removeValidationResultsFromParent:b}=f?F({$scope:s,instance:f}):{childResults:(0,n.iH)({})};if(!e&&p.validations){const e=p.validations;t=(0,n.iH)({}),(0,a.wF)((()=>{t.value=f,(0,a.YP)((()=>u(e)?e.call(t.value,new R(t.value)):e),(e=>{h.value=x({validations:e,state:t,childResults:g,resultsCache:y,globalConfig:i,instance:f,externalResults:d||f.vuelidateExternalResults})}),{immediate:!0})})),i=p.validationsConfig||i}else{const r=(0,n.dq)(e)||c(e)?e:(0,n.qj)(e||{});(0,a.YP)(r,(e=>{h.value=x({validations:e,state:t,childResults:g,resultsCache:y,globalConfig:i,instance:null!==f&&void 0!==f?f:{},externalResults:d})}),{immediate:!0})}return f&&(m.forEach((e=>e(h,{$registerAs:l,$scope:s,$stopPropagation:$}))),(0,a.Jd)((()=>b.forEach((e=>e(l)))))),(0,a.Fl)((()=>o(o({},(0,n.SU)(h.value)),g.value)))}},5420:function(e,t,r){r.d(t,{BM:function(){return m},C1:function(){return O}});r(560);var n=r(4870);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e){return"function"===typeof e}function s(e){return null!==e&&"object"===typeof e&&!Array.isArray(e)}function u(e){return l(e.$validator)?i({},e):{$validator:e}}function c(e){return"object"===typeof e?e.$valid:e}function $(e){return e.$validator||e}function d(e,t){if(!s(e))throw new Error('[@vuelidate/validators]: First parameter to "withParams" should be an object, provided '+typeof e);if(!s(t)&&!l(t))throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");const r=u(t);return r.$params=i(i({},r.$params||{}),e),r}function v(e,t){if(!l(e)&&"string"!==typeof(0,n.SU)(e))throw new Error('[@vuelidate/validators]: First parameter to "withMessage" should be string or a function returning a string, provided '+typeof e);if(!s(t)&&!l(t))throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");const r=u(t);return r.$message=e,r}function f(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const r=u(e);return i(i({},r),{},{$async:!0,$watchTargets:t})}function p(e){return{$validator(t){for(var r=arguments.length,a=new Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];return(0,n.SU)(t).reduce(((t,r,n)=>{const i=Object.entries(r).reduce(((t,i)=>{let[o,l]=i;const s=e[o]||{},u=Object.entries(s).reduce(((e,t)=>{let[i,s]=t;const u=$(s),d=u.call(this,l,r,n,...a),v=c(d);if(e.$data[i]=d,e.$data.$invalid=!v||!!e.$data.$invalid,e.$data.$error=e.$data.$invalid,!v){let t=s.$message||"";const r=s.$params||{};"function"===typeof t&&(t=t({$pending:!1,$invalid:!v,$params:r,$model:l,$response:d})),e.$errors.push({$property:o,$message:t,$params:r,$response:d,$model:l,$pending:!1,$validator:i})}return{$valid:e.$valid&&v,$data:e.$data,$errors:e.$errors}}),{$valid:!0,$data:{},$errors:[]});return t.$data[o]=u.$data,t.$errors[o]=u.$errors,{$valid:t.$valid&&u.$valid,$data:t.$data,$errors:t.$errors}}),{$valid:!0,$data:{},$errors:{}});return{$valid:t.$valid&&i.$valid,$data:t.$data.concat(i.$data),$errors:t.$errors.concat(i.$errors)}}),{$valid:!0,$data:[],$errors:[]})},$message:e=>{let{$response:t}=e;return t?t.$errors.map((e=>Object.values(e).map((e=>e.map((e=>e.$message)))).reduce(((e,t)=>e.concat(t)),[]))):[]}}}const h=e=>{if(e=(0,n.SU)(e),Array.isArray(e))return!!e.length;if(void 0===e||null===e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===typeof e){for(let t in e)return!0;return!1}return!!String(e).length},y=e=>(e=(0,n.SU)(e),Array.isArray(e)?e.length:"object"===typeof e?Object.keys(e).length:String(e).length);function g(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return e=>(e=(0,n.SU)(e),!h(e)||t.every((t=>(t.lastIndex=0,t.test(e)))))}var m=Object.freeze({__proto__:null,forEach:p,len:y,normalizeValidatorObject:u,regex:g,req:h,unwrap:n.SU,unwrapNormalizedValidator:$,unwrapValidatorResponse:c,withAsync:f,withMessage:v,withParams:d});g(/^[a-zA-Z]*$/),g(/^[a-zA-Z0-9]*$/),g(/^\d*(\.\d+)?$/);const b=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;g(b);function w(e){return"string"===typeof e&&(e=e.trim()),h(e)}var O={$validator:w,$message:"Value is required",$params:{type:"required"}};const j=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;g(j);g(/(^[0-9]*$)|(^-[0-9]+$)/),g(/^[-]?\d*(\.\d+)?$/)}}]);
//# sourceMappingURL=73.a5757b32.js.map