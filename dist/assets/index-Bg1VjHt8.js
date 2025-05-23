(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function D3(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=e(r);fetch(r.href,i)}})();function Ty(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var yb={exports:{}},du={},vb={exports:{}},Ve={};/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var bb;function R3(){if(bb)return Ve;bb=1;var t=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),l=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),w=Symbol.iterator;function S(j){return j===null||typeof j!="object"?null:(j=w&&j[w]||j["@@iterator"],typeof j=="function"?j:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,N={};function I(j,Q,oe){this.props=j,this.context=Q,this.refs=N,this.updater=oe||E}I.prototype.isReactComponent={},I.prototype.setState=function(j,Q){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,Q,"setState")},I.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function B(){}B.prototype=I.prototype;function M(j,Q,oe){this.props=j,this.context=Q,this.refs=N,this.updater=oe||E}var $=M.prototype=new B;$.constructor=M,C($,I.prototype),$.isPureReactComponent=!0;var L=Array.isArray,W=Object.prototype.hasOwnProperty,Z={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function _(j,Q,oe){var fe,ce={},we=null,Ce=null;if(Q!=null)for(fe in Q.ref!==void 0&&(Ce=Q.ref),Q.key!==void 0&&(we=""+Q.key),Q)W.call(Q,fe)&&!P.hasOwnProperty(fe)&&(ce[fe]=Q[fe]);var Te=arguments.length-2;if(Te===1)ce.children=oe;else if(1<Te){for(var je=Array(Te),qe=0;qe<Te;qe++)je[qe]=arguments[qe+2];ce.children=je}if(j&&j.defaultProps)for(fe in Te=j.defaultProps,Te)ce[fe]===void 0&&(ce[fe]=Te[fe]);return{$$typeof:t,type:j,key:we,ref:Ce,props:ce,_owner:Z.current}}function A(j,Q){return{$$typeof:t,type:j.type,key:Q,ref:j.ref,props:j.props,_owner:j._owner}}function F(j){return typeof j=="object"&&j!==null&&j.$$typeof===t}function z(j){var Q={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(oe){return Q[oe]})}var H=/\/+/g;function D(j,Q){return typeof j=="object"&&j!==null&&j.key!=null?z(""+j.key):Q.toString(36)}function ve(j,Q,oe,fe,ce){var we=typeof j;(we==="undefined"||we==="boolean")&&(j=null);var Ce=!1;if(j===null)Ce=!0;else switch(we){case"string":case"number":Ce=!0;break;case"object":switch(j.$$typeof){case t:case e:Ce=!0}}if(Ce)return Ce=j,ce=ce(Ce),j=fe===""?"."+D(Ce,0):fe,L(ce)?(oe="",j!=null&&(oe=j.replace(H,"$&/")+"/"),ve(ce,Q,oe,"",function(qe){return qe})):ce!=null&&(F(ce)&&(ce=A(ce,oe+(!ce.key||Ce&&Ce.key===ce.key?"":(""+ce.key).replace(H,"$&/")+"/")+j)),Q.push(ce)),1;if(Ce=0,fe=fe===""?".":fe+":",L(j))for(var Te=0;Te<j.length;Te++){we=j[Te];var je=fe+D(we,Te);Ce+=ve(we,Q,oe,je,ce)}else if(je=S(j),typeof je=="function")for(j=je.call(j),Te=0;!(we=j.next()).done;)we=we.value,je=fe+D(we,Te++),Ce+=ve(we,Q,oe,je,ce);else if(we==="object")throw Q=String(j),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.");return Ce}function Oe(j,Q,oe){if(j==null)return j;var fe=[],ce=0;return ve(j,fe,"","",function(we){return Q.call(oe,we,ce++)}),fe}function Ue(j){if(j._status===-1){var Q=j._result;Q=Q(),Q.then(function(oe){(j._status===0||j._status===-1)&&(j._status=1,j._result=oe)},function(oe){(j._status===0||j._status===-1)&&(j._status=2,j._result=oe)}),j._status===-1&&(j._status=0,j._result=Q)}if(j._status===1)return j._result.default;throw j._result}var Ae={current:null},ae={transition:null},de={ReactCurrentDispatcher:Ae,ReactCurrentBatchConfig:ae,ReactCurrentOwner:Z};function Y(){throw Error("act(...) is not supported in production builds of React.")}return Ve.Children={map:Oe,forEach:function(j,Q,oe){Oe(j,function(){Q.apply(this,arguments)},oe)},count:function(j){var Q=0;return Oe(j,function(){Q++}),Q},toArray:function(j){return Oe(j,function(Q){return Q})||[]},only:function(j){if(!F(j))throw Error("React.Children.only expected to receive a single React element child.");return j}},Ve.Component=I,Ve.Fragment=n,Ve.Profiler=i,Ve.PureComponent=M,Ve.StrictMode=r,Ve.Suspense=f,Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=de,Ve.act=Y,Ve.cloneElement=function(j,Q,oe){if(j==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+j+".");var fe=C({},j.props),ce=j.key,we=j.ref,Ce=j._owner;if(Q!=null){if(Q.ref!==void 0&&(we=Q.ref,Ce=Z.current),Q.key!==void 0&&(ce=""+Q.key),j.type&&j.type.defaultProps)var Te=j.type.defaultProps;for(je in Q)W.call(Q,je)&&!P.hasOwnProperty(je)&&(fe[je]=Q[je]===void 0&&Te!==void 0?Te[je]:Q[je])}var je=arguments.length-2;if(je===1)fe.children=oe;else if(1<je){Te=Array(je);for(var qe=0;qe<je;qe++)Te[qe]=arguments[qe+2];fe.children=Te}return{$$typeof:t,type:j.type,key:ce,ref:we,props:fe,_owner:Ce}},Ve.createContext=function(j){return j={$$typeof:l,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},j.Provider={$$typeof:o,_context:j},j.Consumer=j},Ve.createElement=_,Ve.createFactory=function(j){var Q=_.bind(null,j);return Q.type=j,Q},Ve.createRef=function(){return{current:null}},Ve.forwardRef=function(j){return{$$typeof:d,render:j}},Ve.isValidElement=F,Ve.lazy=function(j){return{$$typeof:y,_payload:{_status:-1,_result:j},_init:Ue}},Ve.memo=function(j,Q){return{$$typeof:p,type:j,compare:Q===void 0?null:Q}},Ve.startTransition=function(j){var Q=ae.transition;ae.transition={};try{j()}finally{ae.transition=Q}},Ve.unstable_act=Y,Ve.useCallback=function(j,Q){return Ae.current.useCallback(j,Q)},Ve.useContext=function(j){return Ae.current.useContext(j)},Ve.useDebugValue=function(){},Ve.useDeferredValue=function(j){return Ae.current.useDeferredValue(j)},Ve.useEffect=function(j,Q){return Ae.current.useEffect(j,Q)},Ve.useId=function(){return Ae.current.useId()},Ve.useImperativeHandle=function(j,Q,oe){return Ae.current.useImperativeHandle(j,Q,oe)},Ve.useInsertionEffect=function(j,Q){return Ae.current.useInsertionEffect(j,Q)},Ve.useLayoutEffect=function(j,Q){return Ae.current.useLayoutEffect(j,Q)},Ve.useMemo=function(j,Q){return Ae.current.useMemo(j,Q)},Ve.useReducer=function(j,Q,oe){return Ae.current.useReducer(j,Q,oe)},Ve.useRef=function(j){return Ae.current.useRef(j)},Ve.useState=function(j){return Ae.current.useState(j)},Ve.useSyncExternalStore=function(j,Q,oe){return Ae.current.useSyncExternalStore(j,Q,oe)},Ve.useTransition=function(){return Ae.current.useTransition()},Ve.version="18.3.1",Ve}var wb;function _y(){return wb||(wb=1,vb.exports=R3()),vb.exports}/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var xb;function L3(){if(xb)return du;xb=1;var t=_y(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(d,f,p){var y,w={},S=null,E=null;p!==void 0&&(S=""+p),f.key!==void 0&&(S=""+f.key),f.ref!==void 0&&(E=f.ref);for(y in f)r.call(f,y)&&!o.hasOwnProperty(y)&&(w[y]=f[y]);if(d&&d.defaultProps)for(y in f=d.defaultProps,f)w[y]===void 0&&(w[y]=f[y]);return{$$typeof:e,type:d,key:S,ref:E,props:w,_owner:i.current}}return du.Fragment=n,du.jsx=l,du.jsxs=l,du}var Sb;function O3(){return Sb||(Sb=1,yb.exports=L3()),yb.exports}var m=O3(),O=_y();const Fe=Ty(O),M3=D3({__proto__:null,default:Fe},[O]);var Od={},Tm={exports:{}},Tn={},kb={exports:{}},Eb={};/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var Cb;function F3(){return Cb||(Cb=1,function(t){function e(ae,de){var Y=ae.length;ae.push(de);e:for(;0<Y;){var j=Y-1>>>1,Q=ae[j];if(0<i(Q,de))ae[j]=de,ae[Y]=Q,Y=j;else break e}}function n(ae){return ae.length===0?null:ae[0]}function r(ae){if(ae.length===0)return null;var de=ae[0],Y=ae.pop();if(Y!==de){ae[0]=Y;e:for(var j=0,Q=ae.length,oe=Q>>>1;j<oe;){var fe=2*(j+1)-1,ce=ae[fe],we=fe+1,Ce=ae[we];if(0>i(ce,Y))we<Q&&0>i(Ce,ce)?(ae[j]=Ce,ae[we]=Y,j=we):(ae[j]=ce,ae[fe]=Y,j=fe);else if(we<Q&&0>i(Ce,Y))ae[j]=Ce,ae[we]=Y,j=we;else break e}}return de}function i(ae,de){var Y=ae.sortIndex-de.sortIndex;return Y!==0?Y:ae.id-de.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var l=Date,d=l.now();t.unstable_now=function(){return l.now()-d}}var f=[],p=[],y=1,w=null,S=3,E=!1,C=!1,N=!1,I=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,M=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function $(ae){for(var de=n(p);de!==null;){if(de.callback===null)r(p);else if(de.startTime<=ae)r(p),de.sortIndex=de.expirationTime,e(f,de);else break;de=n(p)}}function L(ae){if(N=!1,$(ae),!C)if(n(f)!==null)C=!0,Ue(W);else{var de=n(p);de!==null&&Ae(L,de.startTime-ae)}}function W(ae,de){C=!1,N&&(N=!1,B(_),_=-1),E=!0;var Y=S;try{for($(de),w=n(f);w!==null&&(!(w.expirationTime>de)||ae&&!z());){var j=w.callback;if(typeof j=="function"){w.callback=null,S=w.priorityLevel;var Q=j(w.expirationTime<=de);de=t.unstable_now(),typeof Q=="function"?w.callback=Q:w===n(f)&&r(f),$(de)}else r(f);w=n(f)}if(w!==null)var oe=!0;else{var fe=n(p);fe!==null&&Ae(L,fe.startTime-de),oe=!1}return oe}finally{w=null,S=Y,E=!1}}var Z=!1,P=null,_=-1,A=5,F=-1;function z(){return!(t.unstable_now()-F<A)}function H(){if(P!==null){var ae=t.unstable_now();F=ae;var de=!0;try{de=P(!0,ae)}finally{de?D():(Z=!1,P=null)}}else Z=!1}var D;if(typeof M=="function")D=function(){M(H)};else if(typeof MessageChannel<"u"){var ve=new MessageChannel,Oe=ve.port2;ve.port1.onmessage=H,D=function(){Oe.postMessage(null)}}else D=function(){I(H,0)};function Ue(ae){P=ae,Z||(Z=!0,D())}function Ae(ae,de){_=I(function(){ae(t.unstable_now())},de)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(ae){ae.callback=null},t.unstable_continueExecution=function(){C||E||(C=!0,Ue(W))},t.unstable_forceFrameRate=function(ae){0>ae||125<ae?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<ae?Math.floor(1e3/ae):5},t.unstable_getCurrentPriorityLevel=function(){return S},t.unstable_getFirstCallbackNode=function(){return n(f)},t.unstable_next=function(ae){switch(S){case 1:case 2:case 3:var de=3;break;default:de=S}var Y=S;S=de;try{return ae()}finally{S=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(ae,de){switch(ae){case 1:case 2:case 3:case 4:case 5:break;default:ae=3}var Y=S;S=ae;try{return de()}finally{S=Y}},t.unstable_scheduleCallback=function(ae,de,Y){var j=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?j+Y:j):Y=j,ae){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=Y+Q,ae={id:y++,callback:de,priorityLevel:ae,startTime:Y,expirationTime:Q,sortIndex:-1},Y>j?(ae.sortIndex=Y,e(p,ae),n(f)===null&&ae===n(p)&&(N?(B(_),_=-1):N=!0,Ae(L,Y-j))):(ae.sortIndex=Q,e(f,ae),C||E||(C=!0,Ue(W))),ae},t.unstable_shouldYield=z,t.unstable_wrapCallback=function(ae){var de=S;return function(){var Y=S;S=de;try{return ae.apply(this,arguments)}finally{S=Y}}}}(Eb)),Eb}var Tb;function U3(){return Tb||(Tb=1,kb.exports=F3()),kb.exports}/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var _b;function V3(){if(_b)return Tn;_b=1;var t=_y(),e=U3();function n(s){for(var a="https://reactjs.org/docs/error-decoder.html?invariant="+s,u=1;u<arguments.length;u++)a+="&args[]="+encodeURIComponent(arguments[u]);return"Minified React error #"+s+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,i={};function o(s,a){l(s,a),l(s+"Capture",a)}function l(s,a){for(i[s]=a,s=0;s<a.length;s++)r.add(a[s])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},w={};function S(s){return f.call(w,s)?!0:f.call(y,s)?!1:p.test(s)?w[s]=!0:(y[s]=!0,!1)}function E(s,a,u,h){if(u!==null&&u.type===0)return!1;switch(typeof a){case"function":case"symbol":return!0;case"boolean":return h?!1:u!==null?!u.acceptsBooleans:(s=s.toLowerCase().slice(0,5),s!=="data-"&&s!=="aria-");default:return!1}}function C(s,a,u,h){if(a===null||typeof a>"u"||E(s,a,u,h))return!0;if(h)return!1;if(u!==null)switch(u.type){case 3:return!a;case 4:return a===!1;case 5:return isNaN(a);case 6:return isNaN(a)||1>a}return!1}function N(s,a,u,h,g,b,k){this.acceptsBooleans=a===2||a===3||a===4,this.attributeName=h,this.attributeNamespace=g,this.mustUseProperty=u,this.propertyName=s,this.type=a,this.sanitizeURL=b,this.removeEmptyString=k}var I={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(s){I[s]=new N(s,0,!1,s,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(s){var a=s[0];I[a]=new N(a,1,!1,s[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(s){I[s]=new N(s,2,!1,s.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(s){I[s]=new N(s,2,!1,s,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(s){I[s]=new N(s,3,!1,s.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(s){I[s]=new N(s,3,!0,s,null,!1,!1)}),["capture","download"].forEach(function(s){I[s]=new N(s,4,!1,s,null,!1,!1)}),["cols","rows","size","span"].forEach(function(s){I[s]=new N(s,6,!1,s,null,!1,!1)}),["rowSpan","start"].forEach(function(s){I[s]=new N(s,5,!1,s.toLowerCase(),null,!1,!1)});var B=/[\-:]([a-z])/g;function M(s){return s[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(s){var a=s.replace(B,M);I[a]=new N(a,1,!1,s,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(s){var a=s.replace(B,M);I[a]=new N(a,1,!1,s,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(s){var a=s.replace(B,M);I[a]=new N(a,1,!1,s,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(s){I[s]=new N(s,1,!1,s.toLowerCase(),null,!1,!1)}),I.xlinkHref=new N("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(s){I[s]=new N(s,1,!1,s.toLowerCase(),null,!0,!0)});function $(s,a,u,h){var g=I.hasOwnProperty(a)?I[a]:null;(g!==null?g.type!==0:h||!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(C(a,u,g,h)&&(u=null),h||g===null?S(a)&&(u===null?s.removeAttribute(a):s.setAttribute(a,""+u)):g.mustUseProperty?s[g.propertyName]=u===null?g.type===3?!1:"":u:(a=g.attributeName,h=g.attributeNamespace,u===null?s.removeAttribute(a):(g=g.type,u=g===3||g===4&&u===!0?"":""+u,h?s.setAttributeNS(h,a,u):s.setAttribute(a,u))))}var L=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,W=Symbol.for("react.element"),Z=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),_=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),F=Symbol.for("react.provider"),z=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),ve=Symbol.for("react.suspense_list"),Oe=Symbol.for("react.memo"),Ue=Symbol.for("react.lazy"),Ae=Symbol.for("react.offscreen"),ae=Symbol.iterator;function de(s){return s===null||typeof s!="object"?null:(s=ae&&s[ae]||s["@@iterator"],typeof s=="function"?s:null)}var Y=Object.assign,j;function Q(s){if(j===void 0)try{throw Error()}catch(u){var a=u.stack.trim().match(/\n( *(at )?)/);j=a&&a[1]||""}return`
`+j+s}var oe=!1;function fe(s,a){if(!s||oe)return"";oe=!0;var u=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(a)if(a=function(){throw Error()},Object.defineProperty(a.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(a,[])}catch(X){var h=X}Reflect.construct(s,[],a)}else{try{a.call()}catch(X){h=X}s.call(a.prototype)}else{try{throw Error()}catch(X){h=X}s()}}catch(X){if(X&&h&&typeof X.stack=="string"){for(var g=X.stack.split(`
`),b=h.stack.split(`
`),k=g.length-1,R=b.length-1;1<=k&&0<=R&&g[k]!==b[R];)R--;for(;1<=k&&0<=R;k--,R--)if(g[k]!==b[R]){if(k!==1||R!==1)do if(k--,R--,0>R||g[k]!==b[R]){var V=`
`+g[k].replace(" at new "," at ");return s.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",s.displayName)),V}while(1<=k&&0<=R);break}}}finally{oe=!1,Error.prepareStackTrace=u}return(s=s?s.displayName||s.name:"")?Q(s):""}function ce(s){switch(s.tag){case 5:return Q(s.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 2:case 15:return s=fe(s.type,!1),s;case 11:return s=fe(s.type.render,!1),s;case 1:return s=fe(s.type,!0),s;default:return""}}function we(s){if(s==null)return null;if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s;switch(s){case P:return"Fragment";case Z:return"Portal";case A:return"Profiler";case _:return"StrictMode";case D:return"Suspense";case ve:return"SuspenseList"}if(typeof s=="object")switch(s.$$typeof){case z:return(s.displayName||"Context")+".Consumer";case F:return(s._context.displayName||"Context")+".Provider";case H:var a=s.render;return s=s.displayName,s||(s=a.displayName||a.name||"",s=s!==""?"ForwardRef("+s+")":"ForwardRef"),s;case Oe:return a=s.displayName||null,a!==null?a:we(s.type)||"Memo";case Ue:a=s._payload,s=s._init;try{return we(s(a))}catch{}}return null}function Ce(s){var a=s.type;switch(s.tag){case 24:return"Cache";case 9:return(a.displayName||"Context")+".Consumer";case 10:return(a._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return s=a.render,s=s.displayName||s.name||"",a.displayName||(s!==""?"ForwardRef("+s+")":"ForwardRef");case 7:return"Fragment";case 5:return a;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return we(a);case 8:return a===_?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof a=="function")return a.displayName||a.name||null;if(typeof a=="string")return a}return null}function Te(s){switch(typeof s){case"boolean":case"number":case"string":case"undefined":return s;case"object":return s;default:return""}}function je(s){var a=s.type;return(s=s.nodeName)&&s.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function qe(s){var a=je(s)?"checked":"value",u=Object.getOwnPropertyDescriptor(s.constructor.prototype,a),h=""+s[a];if(!s.hasOwnProperty(a)&&typeof u<"u"&&typeof u.get=="function"&&typeof u.set=="function"){var g=u.get,b=u.set;return Object.defineProperty(s,a,{configurable:!0,get:function(){return g.call(this)},set:function(k){h=""+k,b.call(this,k)}}),Object.defineProperty(s,a,{enumerable:u.enumerable}),{getValue:function(){return h},setValue:function(k){h=""+k},stopTracking:function(){s._valueTracker=null,delete s[a]}}}}function De(s){s._valueTracker||(s._valueTracker=qe(s))}function Ct(s){if(!s)return!1;var a=s._valueTracker;if(!a)return!0;var u=a.getValue(),h="";return s&&(h=je(s)?s.checked?"true":"false":s.value),s=h,s!==u?(a.setValue(s),!0):!1}function mr(s){if(s=s||(typeof document<"u"?document:void 0),typeof s>"u")return null;try{return s.activeElement||s.body}catch{return s.body}}function Li(s,a){var u=a.checked;return Y({},a,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:u??s._wrapperState.initialChecked})}function Va(s,a){var u=a.defaultValue==null?"":a.defaultValue,h=a.checked!=null?a.checked:a.defaultChecked;u=Te(a.value!=null?a.value:u),s._wrapperState={initialChecked:h,initialValue:u,controlled:a.type==="checkbox"||a.type==="radio"?a.checked!=null:a.value!=null}}function yl(s,a){a=a.checked,a!=null&&$(s,"checked",a,!1)}function vl(s,a){yl(s,a);var u=Te(a.value),h=a.type;if(u!=null)h==="number"?(u===0&&s.value===""||s.value!=u)&&(s.value=""+u):s.value!==""+u&&(s.value=""+u);else if(h==="submit"||h==="reset"){s.removeAttribute("value");return}a.hasOwnProperty("value")?Ba(s,a.type,u):a.hasOwnProperty("defaultValue")&&Ba(s,a.type,Te(a.defaultValue)),a.checked==null&&a.defaultChecked!=null&&(s.defaultChecked=!!a.defaultChecked)}function xc(s,a,u){if(a.hasOwnProperty("value")||a.hasOwnProperty("defaultValue")){var h=a.type;if(!(h!=="submit"&&h!=="reset"||a.value!==void 0&&a.value!==null))return;a=""+s._wrapperState.initialValue,u||a===s.value||(s.value=a),s.defaultValue=a}u=s.name,u!==""&&(s.name=""),s.defaultChecked=!!s._wrapperState.initialChecked,u!==""&&(s.name=u)}function Ba(s,a,u){(a!=="number"||mr(s.ownerDocument)!==s)&&(u==null?s.defaultValue=""+s._wrapperState.initialValue:s.defaultValue!==""+u&&(s.defaultValue=""+u))}var is=Array.isArray;function as(s,a,u,h){if(s=s.options,a){a={};for(var g=0;g<u.length;g++)a["$"+u[g]]=!0;for(u=0;u<s.length;u++)g=a.hasOwnProperty("$"+s[u].value),s[u].selected!==g&&(s[u].selected=g),g&&h&&(s[u].defaultSelected=!0)}else{for(u=""+Te(u),a=null,g=0;g<s.length;g++){if(s[g].value===u){s[g].selected=!0,h&&(s[g].defaultSelected=!0);return}a!==null||s[g].disabled||(a=s[g])}a!==null&&(a.selected=!0)}}function bl(s,a){if(a.dangerouslySetInnerHTML!=null)throw Error(n(91));return Y({},a,{value:void 0,defaultValue:void 0,children:""+s._wrapperState.initialValue})}function za(s,a){var u=a.value;if(u==null){if(u=a.children,a=a.defaultValue,u!=null){if(a!=null)throw Error(n(92));if(is(u)){if(1<u.length)throw Error(n(93));u=u[0]}a=u}a==null&&(a=""),u=a}s._wrapperState={initialValue:Te(u)}}function $a(s,a){var u=Te(a.value),h=Te(a.defaultValue);u!=null&&(u=""+u,u!==s.value&&(s.value=u),a.defaultValue==null&&s.defaultValue!==u&&(s.defaultValue=u)),h!=null&&(s.defaultValue=""+h)}function wl(s){var a=s.textContent;a===s._wrapperState.initialValue&&a!==""&&a!==null&&(s.value=a)}function Nt(s){switch(s){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Dt(s,a){return s==null||s==="http://www.w3.org/1999/xhtml"?Nt(a):s==="http://www.w3.org/2000/svg"&&a==="foreignObject"?"http://www.w3.org/1999/xhtml":s}var os,xl=function(s){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(a,u,h,g){MSApp.execUnsafeLocalFunction(function(){return s(a,u,h,g)})}:s}(function(s,a){if(s.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in s)s.innerHTML=a;else{for(os=os||document.createElement("div"),os.innerHTML="<svg>"+a.valueOf().toString()+"</svg>",a=os.firstChild;s.firstChild;)s.removeChild(s.firstChild);for(;a.firstChild;)s.appendChild(a.firstChild)}});function Os(s,a){if(a){var u=s.firstChild;if(u&&u===s.lastChild&&u.nodeType===3){u.nodeValue=a;return}}s.textContent=a}var Oi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Mi=["Webkit","ms","Moz","O"];Object.keys(Oi).forEach(function(s){Mi.forEach(function(a){a=a+s.charAt(0).toUpperCase()+s.substring(1),Oi[a]=Oi[s]})});function Sl(s,a,u){return a==null||typeof a=="boolean"||a===""?"":u||typeof a!="number"||a===0||Oi.hasOwnProperty(s)&&Oi[s]?(""+a).trim():a+"px"}function kl(s,a){s=s.style;for(var u in a)if(a.hasOwnProperty(u)){var h=u.indexOf("--")===0,g=Sl(u,a[u],h);u==="float"&&(u="cssFloat"),h?s.setProperty(u,g):s[u]=g}}var El=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Cl(s,a){if(a){if(El[s]&&(a.children!=null||a.dangerouslySetInnerHTML!=null))throw Error(n(137,s));if(a.dangerouslySetInnerHTML!=null){if(a.children!=null)throw Error(n(60));if(typeof a.dangerouslySetInnerHTML!="object"||!("__html"in a.dangerouslySetInnerHTML))throw Error(n(61))}if(a.style!=null&&typeof a.style!="object")throw Error(n(62))}}function Tl(s,a){if(s.indexOf("-")===-1)return typeof a.is=="string";switch(s){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fi=null;function qa(s){return s=s.target||s.srcElement||window,s.correspondingUseElement&&(s=s.correspondingUseElement),s.nodeType===3?s.parentNode:s}var Ha=null,qn=null,Or=null;function Wa(s){if(s=Yl(s)){if(typeof Ha!="function")throw Error(n(280));var a=s.stateNode;a&&(a=Jc(a),Ha(s.stateNode,s.type,a))}}function Mr(s){qn?Or?Or.push(s):Or=[s]:qn=s}function _l(){if(qn){var s=qn,a=Or;if(Or=qn=null,Wa(s),a)for(s=0;s<a.length;s++)Wa(a[s])}}function Ui(s,a){return s(a)}function Il(){}var ls=!1;function Pl(s,a,u){if(ls)return s(a,u);ls=!0;try{return Ui(s,a,u)}finally{ls=!1,(qn!==null||Or!==null)&&(Il(),_l())}}function wt(s,a){var u=s.stateNode;if(u===null)return null;var h=Jc(u);if(h===null)return null;u=h[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(s=s.type,h=!(s==="button"||s==="input"||s==="select"||s==="textarea")),s=!h;break e;default:s=!1}if(s)return null;if(u&&typeof u!="function")throw Error(n(231,a,typeof u));return u}var Ga=!1;if(d)try{var gr={};Object.defineProperty(gr,"passive",{get:function(){Ga=!0}}),window.addEventListener("test",gr,gr),window.removeEventListener("test",gr,gr)}catch{Ga=!1}function Vi(s,a,u,h,g,b,k,R,V){var X=Array.prototype.slice.call(arguments,3);try{a.apply(u,X)}catch(ne){this.onError(ne)}}var Bi=!1,Ka=null,yr=!1,Al=null,tp={onError:function(s){Bi=!0,Ka=s}};function Qa(s,a,u,h,g,b,k,R,V){Bi=!1,Ka=null,Vi.apply(tp,arguments)}function Sc(s,a,u,h,g,b,k,R,V){if(Qa.apply(this,arguments),Bi){if(Bi){var X=Ka;Bi=!1,Ka=null}else throw Error(n(198));yr||(yr=!0,Al=X)}}function vr(s){var a=s,u=s;if(s.alternate)for(;a.return;)a=a.return;else{s=a;do a=s,(a.flags&4098)!==0&&(u=a.return),s=a.return;while(s)}return a.tag===3?u:null}function zi(s){if(s.tag===13){var a=s.memoizedState;if(a===null&&(s=s.alternate,s!==null&&(a=s.memoizedState)),a!==null)return a.dehydrated}return null}function br(s){if(vr(s)!==s)throw Error(n(188))}function kc(s){var a=s.alternate;if(!a){if(a=vr(s),a===null)throw Error(n(188));return a!==s?null:s}for(var u=s,h=a;;){var g=u.return;if(g===null)break;var b=g.alternate;if(b===null){if(h=g.return,h!==null){u=h;continue}break}if(g.child===b.child){for(b=g.child;b;){if(b===u)return br(g),s;if(b===h)return br(g),a;b=b.sibling}throw Error(n(188))}if(u.return!==h.return)u=g,h=b;else{for(var k=!1,R=g.child;R;){if(R===u){k=!0,u=g,h=b;break}if(R===h){k=!0,h=g,u=b;break}R=R.sibling}if(!k){for(R=b.child;R;){if(R===u){k=!0,u=b,h=g;break}if(R===h){k=!0,h=b,u=g;break}R=R.sibling}if(!k)throw Error(n(189))}}if(u.alternate!==h)throw Error(n(190))}if(u.tag!==3)throw Error(n(188));return u.stateNode.current===u?s:a}function jl(s){return s=kc(s),s!==null?Ya(s):null}function Ya(s){if(s.tag===5||s.tag===6)return s;for(s=s.child;s!==null;){var a=Ya(s);if(a!==null)return a;s=s.sibling}return null}var Ja=e.unstable_scheduleCallback,Nl=e.unstable_cancelCallback,Ec=e.unstable_shouldYield,np=e.unstable_requestPaint,et=e.unstable_now,Cc=e.unstable_getCurrentPriorityLevel,$i=e.unstable_ImmediatePriority,Ms=e.unstable_UserBlockingPriority,Hn=e.unstable_NormalPriority,Dl=e.unstable_LowPriority,Tc=e.unstable_IdlePriority,qi=null,Nn=null;function _c(s){if(Nn&&typeof Nn.onCommitFiberRoot=="function")try{Nn.onCommitFiberRoot(qi,s,void 0,(s.current.flags&128)===128)}catch{}}var hn=Math.clz32?Math.clz32:Pc,Rl=Math.log,Ic=Math.LN2;function Pc(s){return s>>>=0,s===0?32:31-(Rl(s)/Ic|0)|0}var Xa=64,Za=4194304;function Fs(s){switch(s&-s){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return s&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return s}}function Hi(s,a){var u=s.pendingLanes;if(u===0)return 0;var h=0,g=s.suspendedLanes,b=s.pingedLanes,k=u&268435455;if(k!==0){var R=k&~g;R!==0?h=Fs(R):(b&=k,b!==0&&(h=Fs(b)))}else k=u&~g,k!==0?h=Fs(k):b!==0&&(h=Fs(b));if(h===0)return 0;if(a!==0&&a!==h&&(a&g)===0&&(g=h&-h,b=a&-a,g>=b||g===16&&(b&4194240)!==0))return a;if((h&4)!==0&&(h|=u&16),a=s.entangledLanes,a!==0)for(s=s.entanglements,a&=h;0<a;)u=31-hn(a),g=1<<u,h|=s[u],a&=~g;return h}function rp(s,a){switch(s){case 1:case 2:case 4:return a+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function us(s,a){for(var u=s.suspendedLanes,h=s.pingedLanes,g=s.expirationTimes,b=s.pendingLanes;0<b;){var k=31-hn(b),R=1<<k,V=g[k];V===-1?((R&u)===0||(R&h)!==0)&&(g[k]=rp(R,a)):V<=a&&(s.expiredLanes|=R),b&=~R}}function Dn(s){return s=s.pendingLanes&-1073741825,s!==0?s:s&1073741824?1073741824:0}function Wi(){var s=Xa;return Xa<<=1,(Xa&4194240)===0&&(Xa=64),s}function Us(s){for(var a=[],u=0;31>u;u++)a.push(s);return a}function Vs(s,a,u){s.pendingLanes|=a,a!==536870912&&(s.suspendedLanes=0,s.pingedLanes=0),s=s.eventTimes,a=31-hn(a),s[a]=u}function Xe(s,a){var u=s.pendingLanes&~a;s.pendingLanes=a,s.suspendedLanes=0,s.pingedLanes=0,s.expiredLanes&=a,s.mutableReadLanes&=a,s.entangledLanes&=a,a=s.entanglements;var h=s.eventTimes;for(s=s.expirationTimes;0<u;){var g=31-hn(u),b=1<<g;a[g]=0,h[g]=-1,s[g]=-1,u&=~b}}function Bs(s,a){var u=s.entangledLanes|=a;for(s=s.entanglements;u;){var h=31-hn(u),g=1<<h;g&a|s[h]&a&&(s[h]|=a),u&=~g}}var ze=0;function zs(s){return s&=-s,1<s?4<s?(s&268435455)!==0?16:536870912:4:1}var Ac,eo,jc,Nc,Dc,Ll=!1,Fr=[],Wt=null,wr=null,xr=null,$s=new Map,Wn=new Map,Ur=[],sp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rc(s,a){switch(s){case"focusin":case"focusout":Wt=null;break;case"dragenter":case"dragleave":wr=null;break;case"mouseover":case"mouseout":xr=null;break;case"pointerover":case"pointerout":$s.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wn.delete(a.pointerId)}}function bn(s,a,u,h,g,b){return s===null||s.nativeEvent!==b?(s={blockedOn:a,domEventName:u,eventSystemFlags:h,nativeEvent:b,targetContainers:[g]},a!==null&&(a=Yl(a),a!==null&&eo(a)),s):(s.eventSystemFlags|=h,a=s.targetContainers,g!==null&&a.indexOf(g)===-1&&a.push(g),s)}function ip(s,a,u,h,g){switch(a){case"focusin":return Wt=bn(Wt,s,a,u,h,g),!0;case"dragenter":return wr=bn(wr,s,a,u,h,g),!0;case"mouseover":return xr=bn(xr,s,a,u,h,g),!0;case"pointerover":var b=g.pointerId;return $s.set(b,bn($s.get(b)||null,s,a,u,h,g)),!0;case"gotpointercapture":return b=g.pointerId,Wn.set(b,bn(Wn.get(b)||null,s,a,u,h,g)),!0}return!1}function Lc(s){var a=Ji(s.target);if(a!==null){var u=vr(a);if(u!==null){if(a=u.tag,a===13){if(a=zi(u),a!==null){s.blockedOn=a,Dc(s.priority,function(){jc(u)});return}}else if(a===3&&u.stateNode.current.memoizedState.isDehydrated){s.blockedOn=u.tag===3?u.stateNode.containerInfo:null;return}}}s.blockedOn=null}function cs(s){if(s.blockedOn!==null)return!1;for(var a=s.targetContainers;0<a.length;){var u=to(s.domEventName,s.eventSystemFlags,a[0],s.nativeEvent);if(u===null){u=s.nativeEvent;var h=new u.constructor(u.type,u);Fi=h,u.target.dispatchEvent(h),Fi=null}else return a=Yl(u),a!==null&&eo(a),s.blockedOn=u,!1;a.shift()}return!0}function Gi(s,a,u){cs(s)&&u.delete(a)}function Oc(){Ll=!1,Wt!==null&&cs(Wt)&&(Wt=null),wr!==null&&cs(wr)&&(wr=null),xr!==null&&cs(xr)&&(xr=null),$s.forEach(Gi),Wn.forEach(Gi)}function Sr(s,a){s.blockedOn===a&&(s.blockedOn=null,Ll||(Ll=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Oc)))}function kr(s){function a(g){return Sr(g,s)}if(0<Fr.length){Sr(Fr[0],s);for(var u=1;u<Fr.length;u++){var h=Fr[u];h.blockedOn===s&&(h.blockedOn=null)}}for(Wt!==null&&Sr(Wt,s),wr!==null&&Sr(wr,s),xr!==null&&Sr(xr,s),$s.forEach(a),Wn.forEach(a),u=0;u<Ur.length;u++)h=Ur[u],h.blockedOn===s&&(h.blockedOn=null);for(;0<Ur.length&&(u=Ur[0],u.blockedOn===null);)Lc(u),u.blockedOn===null&&Ur.shift()}var ds=L.ReactCurrentBatchConfig,qs=!0;function at(s,a,u,h){var g=ze,b=ds.transition;ds.transition=null;try{ze=1,Ol(s,a,u,h)}finally{ze=g,ds.transition=b}}function ap(s,a,u,h){var g=ze,b=ds.transition;ds.transition=null;try{ze=4,Ol(s,a,u,h)}finally{ze=g,ds.transition=b}}function Ol(s,a,u,h){if(qs){var g=to(s,a,u,h);if(g===null)yp(s,a,h,Ki,u),Rc(s,h);else if(ip(g,s,a,u,h))h.stopPropagation();else if(Rc(s,h),a&4&&-1<sp.indexOf(s)){for(;g!==null;){var b=Yl(g);if(b!==null&&Ac(b),b=to(s,a,u,h),b===null&&yp(s,a,h,Ki,u),b===g)break;g=b}g!==null&&h.stopPropagation()}else yp(s,a,h,null,u)}}var Ki=null;function to(s,a,u,h){if(Ki=null,s=qa(h),s=Ji(s),s!==null)if(a=vr(s),a===null)s=null;else if(u=a.tag,u===13){if(s=zi(a),s!==null)return s;s=null}else if(u===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;s=null}else a!==s&&(s=null);return Ki=s,null}function Ml(s){switch(s){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Cc()){case $i:return 1;case Ms:return 4;case Hn:case Dl:return 16;case Tc:return 536870912;default:return 16}default:return 16}}var Rn=null,no=null,wn=null;function Fl(){if(wn)return wn;var s,a=no,u=a.length,h,g="value"in Rn?Rn.value:Rn.textContent,b=g.length;for(s=0;s<u&&a[s]===g[s];s++);var k=u-s;for(h=1;h<=k&&a[u-h]===g[b-h];h++);return wn=g.slice(s,1<h?1-h:void 0)}function ro(s){var a=s.keyCode;return"charCode"in s?(s=s.charCode,s===0&&a===13&&(s=13)):s=a,s===10&&(s=13),32<=s||s===13?s:0}function Vr(){return!0}function Ul(){return!1}function Gt(s){function a(u,h,g,b,k){this._reactName=u,this._targetInst=g,this.type=h,this.nativeEvent=b,this.target=k,this.currentTarget=null;for(var R in s)s.hasOwnProperty(R)&&(u=s[R],this[R]=u?u(b):b[R]);return this.isDefaultPrevented=(b.defaultPrevented!=null?b.defaultPrevented:b.returnValue===!1)?Vr:Ul,this.isPropagationStopped=Ul,this}return Y(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var u=this.nativeEvent;u&&(u.preventDefault?u.preventDefault():typeof u.returnValue!="unknown"&&(u.returnValue=!1),this.isDefaultPrevented=Vr)},stopPropagation:function(){var u=this.nativeEvent;u&&(u.stopPropagation?u.stopPropagation():typeof u.cancelBubble!="unknown"&&(u.cancelBubble=!0),this.isPropagationStopped=Vr)},persist:function(){},isPersistent:Vr}),a}var Er={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(s){return s.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},so=Gt(Er),Br=Y({},Er,{view:0,detail:0}),op=Gt(Br),io,hs,Hs,Qi=Y({},Br,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zr,button:0,buttons:0,relatedTarget:function(s){return s.relatedTarget===void 0?s.fromElement===s.srcElement?s.toElement:s.fromElement:s.relatedTarget},movementX:function(s){return"movementX"in s?s.movementX:(s!==Hs&&(Hs&&s.type==="mousemove"?(io=s.screenX-Hs.screenX,hs=s.screenY-Hs.screenY):hs=io=0,Hs=s),io)},movementY:function(s){return"movementY"in s?s.movementY:hs}}),ao=Gt(Qi),Vl=Y({},Qi,{dataTransfer:0}),Mc=Gt(Vl),oo=Y({},Br,{relatedTarget:0}),lo=Gt(oo),Fc=Y({},Er,{animationName:0,elapsedTime:0,pseudoElement:0}),fs=Gt(Fc),Uc=Y({},Er,{clipboardData:function(s){return"clipboardData"in s?s.clipboardData:window.clipboardData}}),Vc=Gt(Uc),Bc=Y({},Er,{data:0}),Bl=Gt(Bc),uo={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $c(s){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(s):(s=zc[s])?!!a[s]:!1}function zr(){return $c}var c=Y({},Br,{key:function(s){if(s.key){var a=uo[s.key]||s.key;if(a!=="Unidentified")return a}return s.type==="keypress"?(s=ro(s),s===13?"Enter":String.fromCharCode(s)):s.type==="keydown"||s.type==="keyup"?fn[s.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zr,charCode:function(s){return s.type==="keypress"?ro(s):0},keyCode:function(s){return s.type==="keydown"||s.type==="keyup"?s.keyCode:0},which:function(s){return s.type==="keypress"?ro(s):s.type==="keydown"||s.type==="keyup"?s.keyCode:0}}),v=Gt(c),x=Y({},Qi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),T=Gt(x),G=Y({},Br,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zr}),ee=Gt(G),ue=Y({},Er,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ze=Gt(ue),Rt=Y({},Qi,{deltaX:function(s){return"deltaX"in s?s.deltaX:"wheelDeltaX"in s?-s.wheelDeltaX:0},deltaY:function(s){return"deltaY"in s?s.deltaY:"wheelDeltaY"in s?-s.wheelDeltaY:"wheelDelta"in s?-s.wheelDelta:0},deltaZ:0,deltaMode:0}),Qe=Gt(Rt),Ut=[9,13,27,32],Vt=d&&"CompositionEvent"in window,Gn=null;d&&"documentMode"in document&&(Gn=document.documentMode);var Ln=d&&"TextEvent"in window&&!Gn,Yi=d&&(!Vt||Gn&&8<Gn&&11>=Gn),co=" ",c0=!1;function d0(s,a){switch(s){case"keyup":return Ut.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function h0(s){return s=s.detail,typeof s=="object"&&"data"in s?s.data:null}var ho=!1;function AT(s,a){switch(s){case"compositionend":return h0(a);case"keypress":return a.which!==32?null:(c0=!0,co);case"textInput":return s=a.data,s===co&&c0?null:s;default:return null}}function jT(s,a){if(ho)return s==="compositionend"||!Vt&&d0(s,a)?(s=Fl(),wn=no=Rn=null,ho=!1,s):null;switch(s){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Yi&&a.locale!=="ko"?null:a.data;default:return null}}var NT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function f0(s){var a=s&&s.nodeName&&s.nodeName.toLowerCase();return a==="input"?!!NT[s.type]:a==="textarea"}function p0(s,a,u,h){Mr(h),a=Kc(a,"onChange"),0<a.length&&(u=new so("onChange","change",null,u,h),s.push({event:u,listeners:a}))}var zl=null,$l=null;function DT(s){N0(s,0)}function qc(s){var a=yo(s);if(Ct(a))return s}function RT(s,a){if(s==="change")return a}var m0=!1;if(d){var lp;if(d){var up="oninput"in document;if(!up){var g0=document.createElement("div");g0.setAttribute("oninput","return;"),up=typeof g0.oninput=="function"}lp=up}else lp=!1;m0=lp&&(!document.documentMode||9<document.documentMode)}function y0(){zl&&(zl.detachEvent("onpropertychange",v0),$l=zl=null)}function v0(s){if(s.propertyName==="value"&&qc($l)){var a=[];p0(a,$l,s,qa(s)),Pl(DT,a)}}function LT(s,a,u){s==="focusin"?(y0(),zl=a,$l=u,zl.attachEvent("onpropertychange",v0)):s==="focusout"&&y0()}function OT(s){if(s==="selectionchange"||s==="keyup"||s==="keydown")return qc($l)}function MT(s,a){if(s==="click")return qc(a)}function FT(s,a){if(s==="input"||s==="change")return qc(a)}function UT(s,a){return s===a&&(s!==0||1/s===1/a)||s!==s&&a!==a}var Cr=typeof Object.is=="function"?Object.is:UT;function ql(s,a){if(Cr(s,a))return!0;if(typeof s!="object"||s===null||typeof a!="object"||a===null)return!1;var u=Object.keys(s),h=Object.keys(a);if(u.length!==h.length)return!1;for(h=0;h<u.length;h++){var g=u[h];if(!f.call(a,g)||!Cr(s[g],a[g]))return!1}return!0}function b0(s){for(;s&&s.firstChild;)s=s.firstChild;return s}function w0(s,a){var u=b0(s);s=0;for(var h;u;){if(u.nodeType===3){if(h=s+u.textContent.length,s<=a&&h>=a)return{node:u,offset:a-s};s=h}e:{for(;u;){if(u.nextSibling){u=u.nextSibling;break e}u=u.parentNode}u=void 0}u=b0(u)}}function x0(s,a){return s&&a?s===a?!0:s&&s.nodeType===3?!1:a&&a.nodeType===3?x0(s,a.parentNode):"contains"in s?s.contains(a):s.compareDocumentPosition?!!(s.compareDocumentPosition(a)&16):!1:!1}function S0(){for(var s=window,a=mr();a instanceof s.HTMLIFrameElement;){try{var u=typeof a.contentWindow.location.href=="string"}catch{u=!1}if(u)s=a.contentWindow;else break;a=mr(s.document)}return a}function cp(s){var a=s&&s.nodeName&&s.nodeName.toLowerCase();return a&&(a==="input"&&(s.type==="text"||s.type==="search"||s.type==="tel"||s.type==="url"||s.type==="password")||a==="textarea"||s.contentEditable==="true")}function VT(s){var a=S0(),u=s.focusedElem,h=s.selectionRange;if(a!==u&&u&&u.ownerDocument&&x0(u.ownerDocument.documentElement,u)){if(h!==null&&cp(u)){if(a=h.start,s=h.end,s===void 0&&(s=a),"selectionStart"in u)u.selectionStart=a,u.selectionEnd=Math.min(s,u.value.length);else if(s=(a=u.ownerDocument||document)&&a.defaultView||window,s.getSelection){s=s.getSelection();var g=u.textContent.length,b=Math.min(h.start,g);h=h.end===void 0?b:Math.min(h.end,g),!s.extend&&b>h&&(g=h,h=b,b=g),g=w0(u,b);var k=w0(u,h);g&&k&&(s.rangeCount!==1||s.anchorNode!==g.node||s.anchorOffset!==g.offset||s.focusNode!==k.node||s.focusOffset!==k.offset)&&(a=a.createRange(),a.setStart(g.node,g.offset),s.removeAllRanges(),b>h?(s.addRange(a),s.extend(k.node,k.offset)):(a.setEnd(k.node,k.offset),s.addRange(a)))}}for(a=[],s=u;s=s.parentNode;)s.nodeType===1&&a.push({element:s,left:s.scrollLeft,top:s.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<a.length;u++)s=a[u],s.element.scrollLeft=s.left,s.element.scrollTop=s.top}}var BT=d&&"documentMode"in document&&11>=document.documentMode,fo=null,dp=null,Hl=null,hp=!1;function k0(s,a,u){var h=u.window===u?u.document:u.nodeType===9?u:u.ownerDocument;hp||fo==null||fo!==mr(h)||(h=fo,"selectionStart"in h&&cp(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),Hl&&ql(Hl,h)||(Hl=h,h=Kc(dp,"onSelect"),0<h.length&&(a=new so("onSelect","select",null,a,u),s.push({event:a,listeners:h}),a.target=fo)))}function Hc(s,a){var u={};return u[s.toLowerCase()]=a.toLowerCase(),u["Webkit"+s]="webkit"+a,u["Moz"+s]="moz"+a,u}var po={animationend:Hc("Animation","AnimationEnd"),animationiteration:Hc("Animation","AnimationIteration"),animationstart:Hc("Animation","AnimationStart"),transitionend:Hc("Transition","TransitionEnd")},fp={},E0={};d&&(E0=document.createElement("div").style,"AnimationEvent"in window||(delete po.animationend.animation,delete po.animationiteration.animation,delete po.animationstart.animation),"TransitionEvent"in window||delete po.transitionend.transition);function Wc(s){if(fp[s])return fp[s];if(!po[s])return s;var a=po[s],u;for(u in a)if(a.hasOwnProperty(u)&&u in E0)return fp[s]=a[u];return s}var C0=Wc("animationend"),T0=Wc("animationiteration"),_0=Wc("animationstart"),I0=Wc("transitionend"),P0=new Map,A0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ws(s,a){P0.set(s,a),o(a,[s])}for(var pp=0;pp<A0.length;pp++){var mp=A0[pp],zT=mp.toLowerCase(),$T=mp[0].toUpperCase()+mp.slice(1);Ws(zT,"on"+$T)}Ws(C0,"onAnimationEnd"),Ws(T0,"onAnimationIteration"),Ws(_0,"onAnimationStart"),Ws("dblclick","onDoubleClick"),Ws("focusin","onFocus"),Ws("focusout","onBlur"),Ws(I0,"onTransitionEnd"),l("onMouseEnter",["mouseout","mouseover"]),l("onMouseLeave",["mouseout","mouseover"]),l("onPointerEnter",["pointerout","pointerover"]),l("onPointerLeave",["pointerout","pointerover"]),o("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),o("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),o("onBeforeInput",["compositionend","keypress","textInput","paste"]),o("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wl));function j0(s,a,u){var h=s.type||"unknown-event";s.currentTarget=u,Sc(h,a,void 0,s),s.currentTarget=null}function N0(s,a){a=(a&4)!==0;for(var u=0;u<s.length;u++){var h=s[u],g=h.event;h=h.listeners;e:{var b=void 0;if(a)for(var k=h.length-1;0<=k;k--){var R=h[k],V=R.instance,X=R.currentTarget;if(R=R.listener,V!==b&&g.isPropagationStopped())break e;j0(g,R,X),b=V}else for(k=0;k<h.length;k++){if(R=h[k],V=R.instance,X=R.currentTarget,R=R.listener,V!==b&&g.isPropagationStopped())break e;j0(g,R,X),b=V}}}if(yr)throw s=Al,yr=!1,Al=null,s}function rt(s,a){var u=a[kp];u===void 0&&(u=a[kp]=new Set);var h=s+"__bubble";u.has(h)||(D0(a,s,2,!1),u.add(h))}function gp(s,a,u){var h=0;a&&(h|=4),D0(u,s,h,a)}var Gc="_reactListening"+Math.random().toString(36).slice(2);function Gl(s){if(!s[Gc]){s[Gc]=!0,r.forEach(function(u){u!=="selectionchange"&&(qT.has(u)||gp(u,!1,s),gp(u,!0,s))});var a=s.nodeType===9?s:s.ownerDocument;a===null||a[Gc]||(a[Gc]=!0,gp("selectionchange",!1,a))}}function D0(s,a,u,h){switch(Ml(a)){case 1:var g=at;break;case 4:g=ap;break;default:g=Ol}u=g.bind(null,a,u,s),g=void 0,!Ga||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(g=!0),h?g!==void 0?s.addEventListener(a,u,{capture:!0,passive:g}):s.addEventListener(a,u,!0):g!==void 0?s.addEventListener(a,u,{passive:g}):s.addEventListener(a,u,!1)}function yp(s,a,u,h,g){var b=h;if((a&1)===0&&(a&2)===0&&h!==null)e:for(;;){if(h===null)return;var k=h.tag;if(k===3||k===4){var R=h.stateNode.containerInfo;if(R===g||R.nodeType===8&&R.parentNode===g)break;if(k===4)for(k=h.return;k!==null;){var V=k.tag;if((V===3||V===4)&&(V=k.stateNode.containerInfo,V===g||V.nodeType===8&&V.parentNode===g))return;k=k.return}for(;R!==null;){if(k=Ji(R),k===null)return;if(V=k.tag,V===5||V===6){h=b=k;continue e}R=R.parentNode}}h=h.return}Pl(function(){var X=b,ne=qa(u),ie=[];e:{var te=P0.get(s);if(te!==void 0){var he=so,me=s;switch(s){case"keypress":if(ro(u)===0)break e;case"keydown":case"keyup":he=v;break;case"focusin":me="focus",he=lo;break;case"focusout":me="blur",he=lo;break;case"beforeblur":case"afterblur":he=lo;break;case"click":if(u.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":he=ao;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":he=Mc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":he=ee;break;case C0:case T0:case _0:he=fs;break;case I0:he=Ze;break;case"scroll":he=op;break;case"wheel":he=Qe;break;case"copy":case"cut":case"paste":he=Vc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":he=T}var ge=(a&4)!==0,xt=!ge&&s==="scroll",K=ge?te!==null?te+"Capture":null:te;ge=[];for(var q=X,J;q!==null;){J=q;var le=J.stateNode;if(J.tag===5&&le!==null&&(J=le,K!==null&&(le=wt(q,K),le!=null&&ge.push(Kl(q,le,J)))),xt)break;q=q.return}0<ge.length&&(te=new he(te,me,null,u,ne),ie.push({event:te,listeners:ge}))}}if((a&7)===0){e:{if(te=s==="mouseover"||s==="pointerover",he=s==="mouseout"||s==="pointerout",te&&u!==Fi&&(me=u.relatedTarget||u.fromElement)&&(Ji(me)||me[ps]))break e;if((he||te)&&(te=ne.window===ne?ne:(te=ne.ownerDocument)?te.defaultView||te.parentWindow:window,he?(me=u.relatedTarget||u.toElement,he=X,me=me?Ji(me):null,me!==null&&(xt=vr(me),me!==xt||me.tag!==5&&me.tag!==6)&&(me=null)):(he=null,me=X),he!==me)){if(ge=ao,le="onMouseLeave",K="onMouseEnter",q="mouse",(s==="pointerout"||s==="pointerover")&&(ge=T,le="onPointerLeave",K="onPointerEnter",q="pointer"),xt=he==null?te:yo(he),J=me==null?te:yo(me),te=new ge(le,q+"leave",he,u,ne),te.target=xt,te.relatedTarget=J,le=null,Ji(ne)===X&&(ge=new ge(K,q+"enter",me,u,ne),ge.target=J,ge.relatedTarget=xt,le=ge),xt=le,he&&me)t:{for(ge=he,K=me,q=0,J=ge;J;J=mo(J))q++;for(J=0,le=K;le;le=mo(le))J++;for(;0<q-J;)ge=mo(ge),q--;for(;0<J-q;)K=mo(K),J--;for(;q--;){if(ge===K||K!==null&&ge===K.alternate)break t;ge=mo(ge),K=mo(K)}ge=null}else ge=null;he!==null&&R0(ie,te,he,ge,!1),me!==null&&xt!==null&&R0(ie,xt,me,ge,!0)}}e:{if(te=X?yo(X):window,he=te.nodeName&&te.nodeName.toLowerCase(),he==="select"||he==="input"&&te.type==="file")var be=RT;else if(f0(te))if(m0)be=FT;else{be=OT;var Se=LT}else(he=te.nodeName)&&he.toLowerCase()==="input"&&(te.type==="checkbox"||te.type==="radio")&&(be=MT);if(be&&(be=be(s,X))){p0(ie,be,u,ne);break e}Se&&Se(s,te,X),s==="focusout"&&(Se=te._wrapperState)&&Se.controlled&&te.type==="number"&&Ba(te,"number",te.value)}switch(Se=X?yo(X):window,s){case"focusin":(f0(Se)||Se.contentEditable==="true")&&(fo=Se,dp=X,Hl=null);break;case"focusout":Hl=dp=fo=null;break;case"mousedown":hp=!0;break;case"contextmenu":case"mouseup":case"dragend":hp=!1,k0(ie,u,ne);break;case"selectionchange":if(BT)break;case"keydown":case"keyup":k0(ie,u,ne)}var ke;if(Vt)e:{switch(s){case"compositionstart":var Pe="onCompositionStart";break e;case"compositionend":Pe="onCompositionEnd";break e;case"compositionupdate":Pe="onCompositionUpdate";break e}Pe=void 0}else ho?d0(s,u)&&(Pe="onCompositionEnd"):s==="keydown"&&u.keyCode===229&&(Pe="onCompositionStart");Pe&&(Yi&&u.locale!=="ko"&&(ho||Pe!=="onCompositionStart"?Pe==="onCompositionEnd"&&ho&&(ke=Fl()):(Rn=ne,no="value"in Rn?Rn.value:Rn.textContent,ho=!0)),Se=Kc(X,Pe),0<Se.length&&(Pe=new Bl(Pe,s,null,u,ne),ie.push({event:Pe,listeners:Se}),ke?Pe.data=ke:(ke=h0(u),ke!==null&&(Pe.data=ke)))),(ke=Ln?AT(s,u):jT(s,u))&&(X=Kc(X,"onBeforeInput"),0<X.length&&(ne=new Bl("onBeforeInput","beforeinput",null,u,ne),ie.push({event:ne,listeners:X}),ne.data=ke))}N0(ie,a)})}function Kl(s,a,u){return{instance:s,listener:a,currentTarget:u}}function Kc(s,a){for(var u=a+"Capture",h=[];s!==null;){var g=s,b=g.stateNode;g.tag===5&&b!==null&&(g=b,b=wt(s,u),b!=null&&h.unshift(Kl(s,b,g)),b=wt(s,a),b!=null&&h.push(Kl(s,b,g))),s=s.return}return h}function mo(s){if(s===null)return null;do s=s.return;while(s&&s.tag!==5);return s||null}function R0(s,a,u,h,g){for(var b=a._reactName,k=[];u!==null&&u!==h;){var R=u,V=R.alternate,X=R.stateNode;if(V!==null&&V===h)break;R.tag===5&&X!==null&&(R=X,g?(V=wt(u,b),V!=null&&k.unshift(Kl(u,V,R))):g||(V=wt(u,b),V!=null&&k.push(Kl(u,V,R)))),u=u.return}k.length!==0&&s.push({event:a,listeners:k})}var HT=/\r\n?/g,WT=/\u0000|\uFFFD/g;function L0(s){return(typeof s=="string"?s:""+s).replace(HT,`
`).replace(WT,"")}function Qc(s,a,u){if(a=L0(a),L0(s)!==a&&u)throw Error(n(425))}function Yc(){}var vp=null,bp=null;function wp(s,a){return s==="textarea"||s==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var xp=typeof setTimeout=="function"?setTimeout:void 0,GT=typeof clearTimeout=="function"?clearTimeout:void 0,O0=typeof Promise=="function"?Promise:void 0,KT=typeof queueMicrotask=="function"?queueMicrotask:typeof O0<"u"?function(s){return O0.resolve(null).then(s).catch(QT)}:xp;function QT(s){setTimeout(function(){throw s})}function Sp(s,a){var u=a,h=0;do{var g=u.nextSibling;if(s.removeChild(u),g&&g.nodeType===8)if(u=g.data,u==="/$"){if(h===0){s.removeChild(g),kr(a);return}h--}else u!=="$"&&u!=="$?"&&u!=="$!"||h++;u=g}while(u);kr(a)}function Gs(s){for(;s!=null;s=s.nextSibling){var a=s.nodeType;if(a===1||a===3)break;if(a===8){if(a=s.data,a==="$"||a==="$!"||a==="$?")break;if(a==="/$")return null}}return s}function M0(s){s=s.previousSibling;for(var a=0;s;){if(s.nodeType===8){var u=s.data;if(u==="$"||u==="$!"||u==="$?"){if(a===0)return s;a--}else u==="/$"&&a++}s=s.previousSibling}return null}var go=Math.random().toString(36).slice(2),$r="__reactFiber$"+go,Ql="__reactProps$"+go,ps="__reactContainer$"+go,kp="__reactEvents$"+go,YT="__reactListeners$"+go,JT="__reactHandles$"+go;function Ji(s){var a=s[$r];if(a)return a;for(var u=s.parentNode;u;){if(a=u[ps]||u[$r]){if(u=a.alternate,a.child!==null||u!==null&&u.child!==null)for(s=M0(s);s!==null;){if(u=s[$r])return u;s=M0(s)}return a}s=u,u=s.parentNode}return null}function Yl(s){return s=s[$r]||s[ps],!s||s.tag!==5&&s.tag!==6&&s.tag!==13&&s.tag!==3?null:s}function yo(s){if(s.tag===5||s.tag===6)return s.stateNode;throw Error(n(33))}function Jc(s){return s[Ql]||null}var Ep=[],vo=-1;function Ks(s){return{current:s}}function st(s){0>vo||(s.current=Ep[vo],Ep[vo]=null,vo--)}function tt(s,a){vo++,Ep[vo]=s.current,s.current=a}var Qs={},tn=Ks(Qs),xn=Ks(!1),Xi=Qs;function bo(s,a){var u=s.type.contextTypes;if(!u)return Qs;var h=s.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===a)return h.__reactInternalMemoizedMaskedChildContext;var g={},b;for(b in u)g[b]=a[b];return h&&(s=s.stateNode,s.__reactInternalMemoizedUnmaskedChildContext=a,s.__reactInternalMemoizedMaskedChildContext=g),g}function Sn(s){return s=s.childContextTypes,s!=null}function Xc(){st(xn),st(tn)}function F0(s,a,u){if(tn.current!==Qs)throw Error(n(168));tt(tn,a),tt(xn,u)}function U0(s,a,u){var h=s.stateNode;if(a=a.childContextTypes,typeof h.getChildContext!="function")return u;h=h.getChildContext();for(var g in h)if(!(g in a))throw Error(n(108,Ce(s)||"Unknown",g));return Y({},u,h)}function Zc(s){return s=(s=s.stateNode)&&s.__reactInternalMemoizedMergedChildContext||Qs,Xi=tn.current,tt(tn,s),tt(xn,xn.current),!0}function V0(s,a,u){var h=s.stateNode;if(!h)throw Error(n(169));u?(s=U0(s,a,Xi),h.__reactInternalMemoizedMergedChildContext=s,st(xn),st(tn),tt(tn,s)):st(xn),tt(xn,u)}var ms=null,ed=!1,Cp=!1;function B0(s){ms===null?ms=[s]:ms.push(s)}function XT(s){ed=!0,B0(s)}function Ys(){if(!Cp&&ms!==null){Cp=!0;var s=0,a=ze;try{var u=ms;for(ze=1;s<u.length;s++){var h=u[s];do h=h(!0);while(h!==null)}ms=null,ed=!1}catch(g){throw ms!==null&&(ms=ms.slice(s+1)),Ja($i,Ys),g}finally{ze=a,Cp=!1}}return null}var wo=[],xo=0,td=null,nd=0,Kn=[],Qn=0,Zi=null,gs=1,ys="";function ea(s,a){wo[xo++]=nd,wo[xo++]=td,td=s,nd=a}function z0(s,a,u){Kn[Qn++]=gs,Kn[Qn++]=ys,Kn[Qn++]=Zi,Zi=s;var h=gs;s=ys;var g=32-hn(h)-1;h&=~(1<<g),u+=1;var b=32-hn(a)+g;if(30<b){var k=g-g%5;b=(h&(1<<k)-1).toString(32),h>>=k,g-=k,gs=1<<32-hn(a)+g|u<<g|h,ys=b+s}else gs=1<<b|u<<g|h,ys=s}function Tp(s){s.return!==null&&(ea(s,1),z0(s,1,0))}function _p(s){for(;s===td;)td=wo[--xo],wo[xo]=null,nd=wo[--xo],wo[xo]=null;for(;s===Zi;)Zi=Kn[--Qn],Kn[Qn]=null,ys=Kn[--Qn],Kn[Qn]=null,gs=Kn[--Qn],Kn[Qn]=null}var On=null,Mn=null,ot=!1,Tr=null;function $0(s,a){var u=Zn(5,null,null,0);u.elementType="DELETED",u.stateNode=a,u.return=s,a=s.deletions,a===null?(s.deletions=[u],s.flags|=16):a.push(u)}function q0(s,a){switch(s.tag){case 5:var u=s.type;return a=a.nodeType!==1||u.toLowerCase()!==a.nodeName.toLowerCase()?null:a,a!==null?(s.stateNode=a,On=s,Mn=Gs(a.firstChild),!0):!1;case 6:return a=s.pendingProps===""||a.nodeType!==3?null:a,a!==null?(s.stateNode=a,On=s,Mn=null,!0):!1;case 13:return a=a.nodeType!==8?null:a,a!==null?(u=Zi!==null?{id:gs,overflow:ys}:null,s.memoizedState={dehydrated:a,treeContext:u,retryLane:1073741824},u=Zn(18,null,null,0),u.stateNode=a,u.return=s,s.child=u,On=s,Mn=null,!0):!1;default:return!1}}function Ip(s){return(s.mode&1)!==0&&(s.flags&128)===0}function Pp(s){if(ot){var a=Mn;if(a){var u=a;if(!q0(s,a)){if(Ip(s))throw Error(n(418));a=Gs(u.nextSibling);var h=On;a&&q0(s,a)?$0(h,u):(s.flags=s.flags&-4097|2,ot=!1,On=s)}}else{if(Ip(s))throw Error(n(418));s.flags=s.flags&-4097|2,ot=!1,On=s}}}function H0(s){for(s=s.return;s!==null&&s.tag!==5&&s.tag!==3&&s.tag!==13;)s=s.return;On=s}function rd(s){if(s!==On)return!1;if(!ot)return H0(s),ot=!0,!1;var a;if((a=s.tag!==3)&&!(a=s.tag!==5)&&(a=s.type,a=a!=="head"&&a!=="body"&&!wp(s.type,s.memoizedProps)),a&&(a=Mn)){if(Ip(s))throw W0(),Error(n(418));for(;a;)$0(s,a),a=Gs(a.nextSibling)}if(H0(s),s.tag===13){if(s=s.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(n(317));e:{for(s=s.nextSibling,a=0;s;){if(s.nodeType===8){var u=s.data;if(u==="/$"){if(a===0){Mn=Gs(s.nextSibling);break e}a--}else u!=="$"&&u!=="$!"&&u!=="$?"||a++}s=s.nextSibling}Mn=null}}else Mn=On?Gs(s.stateNode.nextSibling):null;return!0}function W0(){for(var s=Mn;s;)s=Gs(s.nextSibling)}function So(){Mn=On=null,ot=!1}function Ap(s){Tr===null?Tr=[s]:Tr.push(s)}var ZT=L.ReactCurrentBatchConfig;function Jl(s,a,u){if(s=u.ref,s!==null&&typeof s!="function"&&typeof s!="object"){if(u._owner){if(u=u._owner,u){if(u.tag!==1)throw Error(n(309));var h=u.stateNode}if(!h)throw Error(n(147,s));var g=h,b=""+s;return a!==null&&a.ref!==null&&typeof a.ref=="function"&&a.ref._stringRef===b?a.ref:(a=function(k){var R=g.refs;k===null?delete R[b]:R[b]=k},a._stringRef=b,a)}if(typeof s!="string")throw Error(n(284));if(!u._owner)throw Error(n(290,s))}return s}function sd(s,a){throw s=Object.prototype.toString.call(a),Error(n(31,s==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":s))}function G0(s){var a=s._init;return a(s._payload)}function K0(s){function a(K,q){if(s){var J=K.deletions;J===null?(K.deletions=[q],K.flags|=16):J.push(q)}}function u(K,q){if(!s)return null;for(;q!==null;)a(K,q),q=q.sibling;return null}function h(K,q){for(K=new Map;q!==null;)q.key!==null?K.set(q.key,q):K.set(q.index,q),q=q.sibling;return K}function g(K,q){return K=si(K,q),K.index=0,K.sibling=null,K}function b(K,q,J){return K.index=J,s?(J=K.alternate,J!==null?(J=J.index,J<q?(K.flags|=2,q):J):(K.flags|=2,q)):(K.flags|=1048576,q)}function k(K){return s&&K.alternate===null&&(K.flags|=2),K}function R(K,q,J,le){return q===null||q.tag!==6?(q=wm(J,K.mode,le),q.return=K,q):(q=g(q,J),q.return=K,q)}function V(K,q,J,le){var be=J.type;return be===P?ne(K,q,J.props.children,le,J.key):q!==null&&(q.elementType===be||typeof be=="object"&&be!==null&&be.$$typeof===Ue&&G0(be)===q.type)?(le=g(q,J.props),le.ref=Jl(K,q,J),le.return=K,le):(le=Id(J.type,J.key,J.props,null,K.mode,le),le.ref=Jl(K,q,J),le.return=K,le)}function X(K,q,J,le){return q===null||q.tag!==4||q.stateNode.containerInfo!==J.containerInfo||q.stateNode.implementation!==J.implementation?(q=xm(J,K.mode,le),q.return=K,q):(q=g(q,J.children||[]),q.return=K,q)}function ne(K,q,J,le,be){return q===null||q.tag!==7?(q=la(J,K.mode,le,be),q.return=K,q):(q=g(q,J),q.return=K,q)}function ie(K,q,J){if(typeof q=="string"&&q!==""||typeof q=="number")return q=wm(""+q,K.mode,J),q.return=K,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case W:return J=Id(q.type,q.key,q.props,null,K.mode,J),J.ref=Jl(K,null,q),J.return=K,J;case Z:return q=xm(q,K.mode,J),q.return=K,q;case Ue:var le=q._init;return ie(K,le(q._payload),J)}if(is(q)||de(q))return q=la(q,K.mode,J,null),q.return=K,q;sd(K,q)}return null}function te(K,q,J,le){var be=q!==null?q.key:null;if(typeof J=="string"&&J!==""||typeof J=="number")return be!==null?null:R(K,q,""+J,le);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case W:return J.key===be?V(K,q,J,le):null;case Z:return J.key===be?X(K,q,J,le):null;case Ue:return be=J._init,te(K,q,be(J._payload),le)}if(is(J)||de(J))return be!==null?null:ne(K,q,J,le,null);sd(K,J)}return null}function he(K,q,J,le,be){if(typeof le=="string"&&le!==""||typeof le=="number")return K=K.get(J)||null,R(q,K,""+le,be);if(typeof le=="object"&&le!==null){switch(le.$$typeof){case W:return K=K.get(le.key===null?J:le.key)||null,V(q,K,le,be);case Z:return K=K.get(le.key===null?J:le.key)||null,X(q,K,le,be);case Ue:var Se=le._init;return he(K,q,J,Se(le._payload),be)}if(is(le)||de(le))return K=K.get(J)||null,ne(q,K,le,be,null);sd(q,le)}return null}function me(K,q,J,le){for(var be=null,Se=null,ke=q,Pe=q=0,$t=null;ke!==null&&Pe<J.length;Pe++){ke.index>Pe?($t=ke,ke=null):$t=ke.sibling;var Ge=te(K,ke,J[Pe],le);if(Ge===null){ke===null&&(ke=$t);break}s&&ke&&Ge.alternate===null&&a(K,ke),q=b(Ge,q,Pe),Se===null?be=Ge:Se.sibling=Ge,Se=Ge,ke=$t}if(Pe===J.length)return u(K,ke),ot&&ea(K,Pe),be;if(ke===null){for(;Pe<J.length;Pe++)ke=ie(K,J[Pe],le),ke!==null&&(q=b(ke,q,Pe),Se===null?be=ke:Se.sibling=ke,Se=ke);return ot&&ea(K,Pe),be}for(ke=h(K,ke);Pe<J.length;Pe++)$t=he(ke,K,Pe,J[Pe],le),$t!==null&&(s&&$t.alternate!==null&&ke.delete($t.key===null?Pe:$t.key),q=b($t,q,Pe),Se===null?be=$t:Se.sibling=$t,Se=$t);return s&&ke.forEach(function(ii){return a(K,ii)}),ot&&ea(K,Pe),be}function ge(K,q,J,le){var be=de(J);if(typeof be!="function")throw Error(n(150));if(J=be.call(J),J==null)throw Error(n(151));for(var Se=be=null,ke=q,Pe=q=0,$t=null,Ge=J.next();ke!==null&&!Ge.done;Pe++,Ge=J.next()){ke.index>Pe?($t=ke,ke=null):$t=ke.sibling;var ii=te(K,ke,Ge.value,le);if(ii===null){ke===null&&(ke=$t);break}s&&ke&&ii.alternate===null&&a(K,ke),q=b(ii,q,Pe),Se===null?be=ii:Se.sibling=ii,Se=ii,ke=$t}if(Ge.done)return u(K,ke),ot&&ea(K,Pe),be;if(ke===null){for(;!Ge.done;Pe++,Ge=J.next())Ge=ie(K,Ge.value,le),Ge!==null&&(q=b(Ge,q,Pe),Se===null?be=Ge:Se.sibling=Ge,Se=Ge);return ot&&ea(K,Pe),be}for(ke=h(K,ke);!Ge.done;Pe++,Ge=J.next())Ge=he(ke,K,Pe,Ge.value,le),Ge!==null&&(s&&Ge.alternate!==null&&ke.delete(Ge.key===null?Pe:Ge.key),q=b(Ge,q,Pe),Se===null?be=Ge:Se.sibling=Ge,Se=Ge);return s&&ke.forEach(function(N3){return a(K,N3)}),ot&&ea(K,Pe),be}function xt(K,q,J,le){if(typeof J=="object"&&J!==null&&J.type===P&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case W:e:{for(var be=J.key,Se=q;Se!==null;){if(Se.key===be){if(be=J.type,be===P){if(Se.tag===7){u(K,Se.sibling),q=g(Se,J.props.children),q.return=K,K=q;break e}}else if(Se.elementType===be||typeof be=="object"&&be!==null&&be.$$typeof===Ue&&G0(be)===Se.type){u(K,Se.sibling),q=g(Se,J.props),q.ref=Jl(K,Se,J),q.return=K,K=q;break e}u(K,Se);break}else a(K,Se);Se=Se.sibling}J.type===P?(q=la(J.props.children,K.mode,le,J.key),q.return=K,K=q):(le=Id(J.type,J.key,J.props,null,K.mode,le),le.ref=Jl(K,q,J),le.return=K,K=le)}return k(K);case Z:e:{for(Se=J.key;q!==null;){if(q.key===Se)if(q.tag===4&&q.stateNode.containerInfo===J.containerInfo&&q.stateNode.implementation===J.implementation){u(K,q.sibling),q=g(q,J.children||[]),q.return=K,K=q;break e}else{u(K,q);break}else a(K,q);q=q.sibling}q=xm(J,K.mode,le),q.return=K,K=q}return k(K);case Ue:return Se=J._init,xt(K,q,Se(J._payload),le)}if(is(J))return me(K,q,J,le);if(de(J))return ge(K,q,J,le);sd(K,J)}return typeof J=="string"&&J!==""||typeof J=="number"?(J=""+J,q!==null&&q.tag===6?(u(K,q.sibling),q=g(q,J),q.return=K,K=q):(u(K,q),q=wm(J,K.mode,le),q.return=K,K=q),k(K)):u(K,q)}return xt}var ko=K0(!0),Q0=K0(!1),id=Ks(null),ad=null,Eo=null,jp=null;function Np(){jp=Eo=ad=null}function Dp(s){var a=id.current;st(id),s._currentValue=a}function Rp(s,a,u){for(;s!==null;){var h=s.alternate;if((s.childLanes&a)!==a?(s.childLanes|=a,h!==null&&(h.childLanes|=a)):h!==null&&(h.childLanes&a)!==a&&(h.childLanes|=a),s===u)break;s=s.return}}function Co(s,a){ad=s,jp=Eo=null,s=s.dependencies,s!==null&&s.firstContext!==null&&((s.lanes&a)!==0&&(kn=!0),s.firstContext=null)}function Yn(s){var a=s._currentValue;if(jp!==s)if(s={context:s,memoizedValue:a,next:null},Eo===null){if(ad===null)throw Error(n(308));Eo=s,ad.dependencies={lanes:0,firstContext:s}}else Eo=Eo.next=s;return a}var ta=null;function Lp(s){ta===null?ta=[s]:ta.push(s)}function Y0(s,a,u,h){var g=a.interleaved;return g===null?(u.next=u,Lp(a)):(u.next=g.next,g.next=u),a.interleaved=u,vs(s,h)}function vs(s,a){s.lanes|=a;var u=s.alternate;for(u!==null&&(u.lanes|=a),u=s,s=s.return;s!==null;)s.childLanes|=a,u=s.alternate,u!==null&&(u.childLanes|=a),u=s,s=s.return;return u.tag===3?u.stateNode:null}var Js=!1;function Op(s){s.updateQueue={baseState:s.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function J0(s,a){s=s.updateQueue,a.updateQueue===s&&(a.updateQueue={baseState:s.baseState,firstBaseUpdate:s.firstBaseUpdate,lastBaseUpdate:s.lastBaseUpdate,shared:s.shared,effects:s.effects})}function bs(s,a){return{eventTime:s,lane:a,tag:0,payload:null,callback:null,next:null}}function Xs(s,a,u){var h=s.updateQueue;if(h===null)return null;if(h=h.shared,(We&2)!==0){var g=h.pending;return g===null?a.next=a:(a.next=g.next,g.next=a),h.pending=a,vs(s,u)}return g=h.interleaved,g===null?(a.next=a,Lp(h)):(a.next=g.next,g.next=a),h.interleaved=a,vs(s,u)}function od(s,a,u){if(a=a.updateQueue,a!==null&&(a=a.shared,(u&4194240)!==0)){var h=a.lanes;h&=s.pendingLanes,u|=h,a.lanes=u,Bs(s,u)}}function X0(s,a){var u=s.updateQueue,h=s.alternate;if(h!==null&&(h=h.updateQueue,u===h)){var g=null,b=null;if(u=u.firstBaseUpdate,u!==null){do{var k={eventTime:u.eventTime,lane:u.lane,tag:u.tag,payload:u.payload,callback:u.callback,next:null};b===null?g=b=k:b=b.next=k,u=u.next}while(u!==null);b===null?g=b=a:b=b.next=a}else g=b=a;u={baseState:h.baseState,firstBaseUpdate:g,lastBaseUpdate:b,shared:h.shared,effects:h.effects},s.updateQueue=u;return}s=u.lastBaseUpdate,s===null?u.firstBaseUpdate=a:s.next=a,u.lastBaseUpdate=a}function ld(s,a,u,h){var g=s.updateQueue;Js=!1;var b=g.firstBaseUpdate,k=g.lastBaseUpdate,R=g.shared.pending;if(R!==null){g.shared.pending=null;var V=R,X=V.next;V.next=null,k===null?b=X:k.next=X,k=V;var ne=s.alternate;ne!==null&&(ne=ne.updateQueue,R=ne.lastBaseUpdate,R!==k&&(R===null?ne.firstBaseUpdate=X:R.next=X,ne.lastBaseUpdate=V))}if(b!==null){var ie=g.baseState;k=0,ne=X=V=null,R=b;do{var te=R.lane,he=R.eventTime;if((h&te)===te){ne!==null&&(ne=ne.next={eventTime:he,lane:0,tag:R.tag,payload:R.payload,callback:R.callback,next:null});e:{var me=s,ge=R;switch(te=a,he=u,ge.tag){case 1:if(me=ge.payload,typeof me=="function"){ie=me.call(he,ie,te);break e}ie=me;break e;case 3:me.flags=me.flags&-65537|128;case 0:if(me=ge.payload,te=typeof me=="function"?me.call(he,ie,te):me,te==null)break e;ie=Y({},ie,te);break e;case 2:Js=!0}}R.callback!==null&&R.lane!==0&&(s.flags|=64,te=g.effects,te===null?g.effects=[R]:te.push(R))}else he={eventTime:he,lane:te,tag:R.tag,payload:R.payload,callback:R.callback,next:null},ne===null?(X=ne=he,V=ie):ne=ne.next=he,k|=te;if(R=R.next,R===null){if(R=g.shared.pending,R===null)break;te=R,R=te.next,te.next=null,g.lastBaseUpdate=te,g.shared.pending=null}}while(!0);if(ne===null&&(V=ie),g.baseState=V,g.firstBaseUpdate=X,g.lastBaseUpdate=ne,a=g.shared.interleaved,a!==null){g=a;do k|=g.lane,g=g.next;while(g!==a)}else b===null&&(g.shared.lanes=0);sa|=k,s.lanes=k,s.memoizedState=ie}}function Z0(s,a,u){if(s=a.effects,a.effects=null,s!==null)for(a=0;a<s.length;a++){var h=s[a],g=h.callback;if(g!==null){if(h.callback=null,h=u,typeof g!="function")throw Error(n(191,g));g.call(h)}}}var Xl={},qr=Ks(Xl),Zl=Ks(Xl),eu=Ks(Xl);function na(s){if(s===Xl)throw Error(n(174));return s}function Mp(s,a){switch(tt(eu,a),tt(Zl,s),tt(qr,Xl),s=a.nodeType,s){case 9:case 11:a=(a=a.documentElement)?a.namespaceURI:Dt(null,"");break;default:s=s===8?a.parentNode:a,a=s.namespaceURI||null,s=s.tagName,a=Dt(a,s)}st(qr),tt(qr,a)}function To(){st(qr),st(Zl),st(eu)}function e1(s){na(eu.current);var a=na(qr.current),u=Dt(a,s.type);a!==u&&(tt(Zl,s),tt(qr,u))}function Fp(s){Zl.current===s&&(st(qr),st(Zl))}var ht=Ks(0);function ud(s){for(var a=s;a!==null;){if(a.tag===13){var u=a.memoizedState;if(u!==null&&(u=u.dehydrated,u===null||u.data==="$?"||u.data==="$!"))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var Up=[];function Vp(){for(var s=0;s<Up.length;s++)Up[s]._workInProgressVersionPrimary=null;Up.length=0}var cd=L.ReactCurrentDispatcher,Bp=L.ReactCurrentBatchConfig,ra=0,ft=null,Lt=null,Bt=null,dd=!1,tu=!1,nu=0,e3=0;function nn(){throw Error(n(321))}function zp(s,a){if(a===null)return!1;for(var u=0;u<a.length&&u<s.length;u++)if(!Cr(s[u],a[u]))return!1;return!0}function $p(s,a,u,h,g,b){if(ra=b,ft=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,cd.current=s===null||s.memoizedState===null?s3:i3,s=u(h,g),tu){b=0;do{if(tu=!1,nu=0,25<=b)throw Error(n(301));b+=1,Bt=Lt=null,a.updateQueue=null,cd.current=a3,s=u(h,g)}while(tu)}if(cd.current=pd,a=Lt!==null&&Lt.next!==null,ra=0,Bt=Lt=ft=null,dd=!1,a)throw Error(n(300));return s}function qp(){var s=nu!==0;return nu=0,s}function Hr(){var s={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bt===null?ft.memoizedState=Bt=s:Bt=Bt.next=s,Bt}function Jn(){if(Lt===null){var s=ft.alternate;s=s!==null?s.memoizedState:null}else s=Lt.next;var a=Bt===null?ft.memoizedState:Bt.next;if(a!==null)Bt=a,Lt=s;else{if(s===null)throw Error(n(310));Lt=s,s={memoizedState:Lt.memoizedState,baseState:Lt.baseState,baseQueue:Lt.baseQueue,queue:Lt.queue,next:null},Bt===null?ft.memoizedState=Bt=s:Bt=Bt.next=s}return Bt}function ru(s,a){return typeof a=="function"?a(s):a}function Hp(s){var a=Jn(),u=a.queue;if(u===null)throw Error(n(311));u.lastRenderedReducer=s;var h=Lt,g=h.baseQueue,b=u.pending;if(b!==null){if(g!==null){var k=g.next;g.next=b.next,b.next=k}h.baseQueue=g=b,u.pending=null}if(g!==null){b=g.next,h=h.baseState;var R=k=null,V=null,X=b;do{var ne=X.lane;if((ra&ne)===ne)V!==null&&(V=V.next={lane:0,action:X.action,hasEagerState:X.hasEagerState,eagerState:X.eagerState,next:null}),h=X.hasEagerState?X.eagerState:s(h,X.action);else{var ie={lane:ne,action:X.action,hasEagerState:X.hasEagerState,eagerState:X.eagerState,next:null};V===null?(R=V=ie,k=h):V=V.next=ie,ft.lanes|=ne,sa|=ne}X=X.next}while(X!==null&&X!==b);V===null?k=h:V.next=R,Cr(h,a.memoizedState)||(kn=!0),a.memoizedState=h,a.baseState=k,a.baseQueue=V,u.lastRenderedState=h}if(s=u.interleaved,s!==null){g=s;do b=g.lane,ft.lanes|=b,sa|=b,g=g.next;while(g!==s)}else g===null&&(u.lanes=0);return[a.memoizedState,u.dispatch]}function Wp(s){var a=Jn(),u=a.queue;if(u===null)throw Error(n(311));u.lastRenderedReducer=s;var h=u.dispatch,g=u.pending,b=a.memoizedState;if(g!==null){u.pending=null;var k=g=g.next;do b=s(b,k.action),k=k.next;while(k!==g);Cr(b,a.memoizedState)||(kn=!0),a.memoizedState=b,a.baseQueue===null&&(a.baseState=b),u.lastRenderedState=b}return[b,h]}function t1(){}function n1(s,a){var u=ft,h=Jn(),g=a(),b=!Cr(h.memoizedState,g);if(b&&(h.memoizedState=g,kn=!0),h=h.queue,Gp(i1.bind(null,u,h,s),[s]),h.getSnapshot!==a||b||Bt!==null&&Bt.memoizedState.tag&1){if(u.flags|=2048,su(9,s1.bind(null,u,h,g,a),void 0,null),zt===null)throw Error(n(349));(ra&30)!==0||r1(u,a,g)}return g}function r1(s,a,u){s.flags|=16384,s={getSnapshot:a,value:u},a=ft.updateQueue,a===null?(a={lastEffect:null,stores:null},ft.updateQueue=a,a.stores=[s]):(u=a.stores,u===null?a.stores=[s]:u.push(s))}function s1(s,a,u,h){a.value=u,a.getSnapshot=h,a1(a)&&o1(s)}function i1(s,a,u){return u(function(){a1(a)&&o1(s)})}function a1(s){var a=s.getSnapshot;s=s.value;try{var u=a();return!Cr(s,u)}catch{return!0}}function o1(s){var a=vs(s,1);a!==null&&Ar(a,s,1,-1)}function l1(s){var a=Hr();return typeof s=="function"&&(s=s()),a.memoizedState=a.baseState=s,s={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ru,lastRenderedState:s},a.queue=s,s=s.dispatch=r3.bind(null,ft,s),[a.memoizedState,s]}function su(s,a,u,h){return s={tag:s,create:a,destroy:u,deps:h,next:null},a=ft.updateQueue,a===null?(a={lastEffect:null,stores:null},ft.updateQueue=a,a.lastEffect=s.next=s):(u=a.lastEffect,u===null?a.lastEffect=s.next=s:(h=u.next,u.next=s,s.next=h,a.lastEffect=s)),s}function u1(){return Jn().memoizedState}function hd(s,a,u,h){var g=Hr();ft.flags|=s,g.memoizedState=su(1|a,u,void 0,h===void 0?null:h)}function fd(s,a,u,h){var g=Jn();h=h===void 0?null:h;var b=void 0;if(Lt!==null){var k=Lt.memoizedState;if(b=k.destroy,h!==null&&zp(h,k.deps)){g.memoizedState=su(a,u,b,h);return}}ft.flags|=s,g.memoizedState=su(1|a,u,b,h)}function c1(s,a){return hd(8390656,8,s,a)}function Gp(s,a){return fd(2048,8,s,a)}function d1(s,a){return fd(4,2,s,a)}function h1(s,a){return fd(4,4,s,a)}function f1(s,a){if(typeof a=="function")return s=s(),a(s),function(){a(null)};if(a!=null)return s=s(),a.current=s,function(){a.current=null}}function p1(s,a,u){return u=u!=null?u.concat([s]):null,fd(4,4,f1.bind(null,a,s),u)}function Kp(){}function m1(s,a){var u=Jn();a=a===void 0?null:a;var h=u.memoizedState;return h!==null&&a!==null&&zp(a,h[1])?h[0]:(u.memoizedState=[s,a],s)}function g1(s,a){var u=Jn();a=a===void 0?null:a;var h=u.memoizedState;return h!==null&&a!==null&&zp(a,h[1])?h[0]:(s=s(),u.memoizedState=[s,a],s)}function y1(s,a,u){return(ra&21)===0?(s.baseState&&(s.baseState=!1,kn=!0),s.memoizedState=u):(Cr(u,a)||(u=Wi(),ft.lanes|=u,sa|=u,s.baseState=!0),a)}function t3(s,a){var u=ze;ze=u!==0&&4>u?u:4,s(!0);var h=Bp.transition;Bp.transition={};try{s(!1),a()}finally{ze=u,Bp.transition=h}}function v1(){return Jn().memoizedState}function n3(s,a,u){var h=ni(s);if(u={lane:h,action:u,hasEagerState:!1,eagerState:null,next:null},b1(s))w1(a,u);else if(u=Y0(s,a,u,h),u!==null){var g=mn();Ar(u,s,h,g),x1(u,a,h)}}function r3(s,a,u){var h=ni(s),g={lane:h,action:u,hasEagerState:!1,eagerState:null,next:null};if(b1(s))w1(a,g);else{var b=s.alternate;if(s.lanes===0&&(b===null||b.lanes===0)&&(b=a.lastRenderedReducer,b!==null))try{var k=a.lastRenderedState,R=b(k,u);if(g.hasEagerState=!0,g.eagerState=R,Cr(R,k)){var V=a.interleaved;V===null?(g.next=g,Lp(a)):(g.next=V.next,V.next=g),a.interleaved=g;return}}catch{}finally{}u=Y0(s,a,g,h),u!==null&&(g=mn(),Ar(u,s,h,g),x1(u,a,h))}}function b1(s){var a=s.alternate;return s===ft||a!==null&&a===ft}function w1(s,a){tu=dd=!0;var u=s.pending;u===null?a.next=a:(a.next=u.next,u.next=a),s.pending=a}function x1(s,a,u){if((u&4194240)!==0){var h=a.lanes;h&=s.pendingLanes,u|=h,a.lanes=u,Bs(s,u)}}var pd={readContext:Yn,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useInsertionEffect:nn,useLayoutEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useMutableSource:nn,useSyncExternalStore:nn,useId:nn,unstable_isNewReconciler:!1},s3={readContext:Yn,useCallback:function(s,a){return Hr().memoizedState=[s,a===void 0?null:a],s},useContext:Yn,useEffect:c1,useImperativeHandle:function(s,a,u){return u=u!=null?u.concat([s]):null,hd(4194308,4,f1.bind(null,a,s),u)},useLayoutEffect:function(s,a){return hd(4194308,4,s,a)},useInsertionEffect:function(s,a){return hd(4,2,s,a)},useMemo:function(s,a){var u=Hr();return a=a===void 0?null:a,s=s(),u.memoizedState=[s,a],s},useReducer:function(s,a,u){var h=Hr();return a=u!==void 0?u(a):a,h.memoizedState=h.baseState=a,s={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:s,lastRenderedState:a},h.queue=s,s=s.dispatch=n3.bind(null,ft,s),[h.memoizedState,s]},useRef:function(s){var a=Hr();return s={current:s},a.memoizedState=s},useState:l1,useDebugValue:Kp,useDeferredValue:function(s){return Hr().memoizedState=s},useTransition:function(){var s=l1(!1),a=s[0];return s=t3.bind(null,s[1]),Hr().memoizedState=s,[a,s]},useMutableSource:function(){},useSyncExternalStore:function(s,a,u){var h=ft,g=Hr();if(ot){if(u===void 0)throw Error(n(407));u=u()}else{if(u=a(),zt===null)throw Error(n(349));(ra&30)!==0||r1(h,a,u)}g.memoizedState=u;var b={value:u,getSnapshot:a};return g.queue=b,c1(i1.bind(null,h,b,s),[s]),h.flags|=2048,su(9,s1.bind(null,h,b,u,a),void 0,null),u},useId:function(){var s=Hr(),a=zt.identifierPrefix;if(ot){var u=ys,h=gs;u=(h&~(1<<32-hn(h)-1)).toString(32)+u,a=":"+a+"R"+u,u=nu++,0<u&&(a+="H"+u.toString(32)),a+=":"}else u=e3++,a=":"+a+"r"+u.toString(32)+":";return s.memoizedState=a},unstable_isNewReconciler:!1},i3={readContext:Yn,useCallback:m1,useContext:Yn,useEffect:Gp,useImperativeHandle:p1,useInsertionEffect:d1,useLayoutEffect:h1,useMemo:g1,useReducer:Hp,useRef:u1,useState:function(){return Hp(ru)},useDebugValue:Kp,useDeferredValue:function(s){var a=Jn();return y1(a,Lt.memoizedState,s)},useTransition:function(){var s=Hp(ru)[0],a=Jn().memoizedState;return[s,a]},useMutableSource:t1,useSyncExternalStore:n1,useId:v1,unstable_isNewReconciler:!1},a3={readContext:Yn,useCallback:m1,useContext:Yn,useEffect:Gp,useImperativeHandle:p1,useInsertionEffect:d1,useLayoutEffect:h1,useMemo:g1,useReducer:Wp,useRef:u1,useState:function(){return Wp(ru)},useDebugValue:Kp,useDeferredValue:function(s){var a=Jn();return Lt===null?a.memoizedState=s:y1(a,Lt.memoizedState,s)},useTransition:function(){var s=Wp(ru)[0],a=Jn().memoizedState;return[s,a]},useMutableSource:t1,useSyncExternalStore:n1,useId:v1,unstable_isNewReconciler:!1};function _r(s,a){if(s&&s.defaultProps){a=Y({},a),s=s.defaultProps;for(var u in s)a[u]===void 0&&(a[u]=s[u]);return a}return a}function Qp(s,a,u,h){a=s.memoizedState,u=u(h,a),u=u==null?a:Y({},a,u),s.memoizedState=u,s.lanes===0&&(s.updateQueue.baseState=u)}var md={isMounted:function(s){return(s=s._reactInternals)?vr(s)===s:!1},enqueueSetState:function(s,a,u){s=s._reactInternals;var h=mn(),g=ni(s),b=bs(h,g);b.payload=a,u!=null&&(b.callback=u),a=Xs(s,b,g),a!==null&&(Ar(a,s,g,h),od(a,s,g))},enqueueReplaceState:function(s,a,u){s=s._reactInternals;var h=mn(),g=ni(s),b=bs(h,g);b.tag=1,b.payload=a,u!=null&&(b.callback=u),a=Xs(s,b,g),a!==null&&(Ar(a,s,g,h),od(a,s,g))},enqueueForceUpdate:function(s,a){s=s._reactInternals;var u=mn(),h=ni(s),g=bs(u,h);g.tag=2,a!=null&&(g.callback=a),a=Xs(s,g,h),a!==null&&(Ar(a,s,h,u),od(a,s,h))}};function S1(s,a,u,h,g,b,k){return s=s.stateNode,typeof s.shouldComponentUpdate=="function"?s.shouldComponentUpdate(h,b,k):a.prototype&&a.prototype.isPureReactComponent?!ql(u,h)||!ql(g,b):!0}function k1(s,a,u){var h=!1,g=Qs,b=a.contextType;return typeof b=="object"&&b!==null?b=Yn(b):(g=Sn(a)?Xi:tn.current,h=a.contextTypes,b=(h=h!=null)?bo(s,g):Qs),a=new a(u,b),s.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=md,s.stateNode=a,a._reactInternals=s,h&&(s=s.stateNode,s.__reactInternalMemoizedUnmaskedChildContext=g,s.__reactInternalMemoizedMaskedChildContext=b),a}function E1(s,a,u,h){s=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(u,h),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(u,h),a.state!==s&&md.enqueueReplaceState(a,a.state,null)}function Yp(s,a,u,h){var g=s.stateNode;g.props=u,g.state=s.memoizedState,g.refs={},Op(s);var b=a.contextType;typeof b=="object"&&b!==null?g.context=Yn(b):(b=Sn(a)?Xi:tn.current,g.context=bo(s,b)),g.state=s.memoizedState,b=a.getDerivedStateFromProps,typeof b=="function"&&(Qp(s,a,b,u),g.state=s.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(a=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),a!==g.state&&md.enqueueReplaceState(g,g.state,null),ld(s,u,g,h),g.state=s.memoizedState),typeof g.componentDidMount=="function"&&(s.flags|=4194308)}function _o(s,a){try{var u="",h=a;do u+=ce(h),h=h.return;while(h);var g=u}catch(b){g=`
Error generating stack: `+b.message+`
`+b.stack}return{value:s,source:a,stack:g,digest:null}}function Jp(s,a,u){return{value:s,source:null,stack:u??null,digest:a??null}}function Xp(s,a){try{console.error(a.value)}catch(u){setTimeout(function(){throw u})}}var o3=typeof WeakMap=="function"?WeakMap:Map;function C1(s,a,u){u=bs(-1,u),u.tag=3,u.payload={element:null};var h=a.value;return u.callback=function(){Sd||(Sd=!0,hm=h),Xp(s,a)},u}function T1(s,a,u){u=bs(-1,u),u.tag=3;var h=s.type.getDerivedStateFromError;if(typeof h=="function"){var g=a.value;u.payload=function(){return h(g)},u.callback=function(){Xp(s,a)}}var b=s.stateNode;return b!==null&&typeof b.componentDidCatch=="function"&&(u.callback=function(){Xp(s,a),typeof h!="function"&&(ei===null?ei=new Set([this]):ei.add(this));var k=a.stack;this.componentDidCatch(a.value,{componentStack:k!==null?k:""})}),u}function _1(s,a,u){var h=s.pingCache;if(h===null){h=s.pingCache=new o3;var g=new Set;h.set(a,g)}else g=h.get(a),g===void 0&&(g=new Set,h.set(a,g));g.has(u)||(g.add(u),s=x3.bind(null,s,a,u),a.then(s,s))}function I1(s){do{var a;if((a=s.tag===13)&&(a=s.memoizedState,a=a!==null?a.dehydrated!==null:!0),a)return s;s=s.return}while(s!==null);return null}function P1(s,a,u,h,g){return(s.mode&1)===0?(s===a?s.flags|=65536:(s.flags|=128,u.flags|=131072,u.flags&=-52805,u.tag===1&&(u.alternate===null?u.tag=17:(a=bs(-1,1),a.tag=2,Xs(u,a,1))),u.lanes|=1),s):(s.flags|=65536,s.lanes=g,s)}var l3=L.ReactCurrentOwner,kn=!1;function pn(s,a,u,h){a.child=s===null?Q0(a,null,u,h):ko(a,s.child,u,h)}function A1(s,a,u,h,g){u=u.render;var b=a.ref;return Co(a,g),h=$p(s,a,u,h,b,g),u=qp(),s!==null&&!kn?(a.updateQueue=s.updateQueue,a.flags&=-2053,s.lanes&=~g,ws(s,a,g)):(ot&&u&&Tp(a),a.flags|=1,pn(s,a,h,g),a.child)}function j1(s,a,u,h,g){if(s===null){var b=u.type;return typeof b=="function"&&!bm(b)&&b.defaultProps===void 0&&u.compare===null&&u.defaultProps===void 0?(a.tag=15,a.type=b,N1(s,a,b,h,g)):(s=Id(u.type,null,h,a,a.mode,g),s.ref=a.ref,s.return=a,a.child=s)}if(b=s.child,(s.lanes&g)===0){var k=b.memoizedProps;if(u=u.compare,u=u!==null?u:ql,u(k,h)&&s.ref===a.ref)return ws(s,a,g)}return a.flags|=1,s=si(b,h),s.ref=a.ref,s.return=a,a.child=s}function N1(s,a,u,h,g){if(s!==null){var b=s.memoizedProps;if(ql(b,h)&&s.ref===a.ref)if(kn=!1,a.pendingProps=h=b,(s.lanes&g)!==0)(s.flags&131072)!==0&&(kn=!0);else return a.lanes=s.lanes,ws(s,a,g)}return Zp(s,a,u,h,g)}function D1(s,a,u){var h=a.pendingProps,g=h.children,b=s!==null?s.memoizedState:null;if(h.mode==="hidden")if((a.mode&1)===0)a.memoizedState={baseLanes:0,cachePool:null,transitions:null},tt(Po,Fn),Fn|=u;else{if((u&1073741824)===0)return s=b!==null?b.baseLanes|u:u,a.lanes=a.childLanes=1073741824,a.memoizedState={baseLanes:s,cachePool:null,transitions:null},a.updateQueue=null,tt(Po,Fn),Fn|=s,null;a.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=b!==null?b.baseLanes:u,tt(Po,Fn),Fn|=h}else b!==null?(h=b.baseLanes|u,a.memoizedState=null):h=u,tt(Po,Fn),Fn|=h;return pn(s,a,g,u),a.child}function R1(s,a){var u=a.ref;(s===null&&u!==null||s!==null&&s.ref!==u)&&(a.flags|=512,a.flags|=2097152)}function Zp(s,a,u,h,g){var b=Sn(u)?Xi:tn.current;return b=bo(a,b),Co(a,g),u=$p(s,a,u,h,b,g),h=qp(),s!==null&&!kn?(a.updateQueue=s.updateQueue,a.flags&=-2053,s.lanes&=~g,ws(s,a,g)):(ot&&h&&Tp(a),a.flags|=1,pn(s,a,u,g),a.child)}function L1(s,a,u,h,g){if(Sn(u)){var b=!0;Zc(a)}else b=!1;if(Co(a,g),a.stateNode===null)yd(s,a),k1(a,u,h),Yp(a,u,h,g),h=!0;else if(s===null){var k=a.stateNode,R=a.memoizedProps;k.props=R;var V=k.context,X=u.contextType;typeof X=="object"&&X!==null?X=Yn(X):(X=Sn(u)?Xi:tn.current,X=bo(a,X));var ne=u.getDerivedStateFromProps,ie=typeof ne=="function"||typeof k.getSnapshotBeforeUpdate=="function";ie||typeof k.UNSAFE_componentWillReceiveProps!="function"&&typeof k.componentWillReceiveProps!="function"||(R!==h||V!==X)&&E1(a,k,h,X),Js=!1;var te=a.memoizedState;k.state=te,ld(a,h,k,g),V=a.memoizedState,R!==h||te!==V||xn.current||Js?(typeof ne=="function"&&(Qp(a,u,ne,h),V=a.memoizedState),(R=Js||S1(a,u,R,h,te,V,X))?(ie||typeof k.UNSAFE_componentWillMount!="function"&&typeof k.componentWillMount!="function"||(typeof k.componentWillMount=="function"&&k.componentWillMount(),typeof k.UNSAFE_componentWillMount=="function"&&k.UNSAFE_componentWillMount()),typeof k.componentDidMount=="function"&&(a.flags|=4194308)):(typeof k.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=h,a.memoizedState=V),k.props=h,k.state=V,k.context=X,h=R):(typeof k.componentDidMount=="function"&&(a.flags|=4194308),h=!1)}else{k=a.stateNode,J0(s,a),R=a.memoizedProps,X=a.type===a.elementType?R:_r(a.type,R),k.props=X,ie=a.pendingProps,te=k.context,V=u.contextType,typeof V=="object"&&V!==null?V=Yn(V):(V=Sn(u)?Xi:tn.current,V=bo(a,V));var he=u.getDerivedStateFromProps;(ne=typeof he=="function"||typeof k.getSnapshotBeforeUpdate=="function")||typeof k.UNSAFE_componentWillReceiveProps!="function"&&typeof k.componentWillReceiveProps!="function"||(R!==ie||te!==V)&&E1(a,k,h,V),Js=!1,te=a.memoizedState,k.state=te,ld(a,h,k,g);var me=a.memoizedState;R!==ie||te!==me||xn.current||Js?(typeof he=="function"&&(Qp(a,u,he,h),me=a.memoizedState),(X=Js||S1(a,u,X,h,te,me,V)||!1)?(ne||typeof k.UNSAFE_componentWillUpdate!="function"&&typeof k.componentWillUpdate!="function"||(typeof k.componentWillUpdate=="function"&&k.componentWillUpdate(h,me,V),typeof k.UNSAFE_componentWillUpdate=="function"&&k.UNSAFE_componentWillUpdate(h,me,V)),typeof k.componentDidUpdate=="function"&&(a.flags|=4),typeof k.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof k.componentDidUpdate!="function"||R===s.memoizedProps&&te===s.memoizedState||(a.flags|=4),typeof k.getSnapshotBeforeUpdate!="function"||R===s.memoizedProps&&te===s.memoizedState||(a.flags|=1024),a.memoizedProps=h,a.memoizedState=me),k.props=h,k.state=me,k.context=V,h=X):(typeof k.componentDidUpdate!="function"||R===s.memoizedProps&&te===s.memoizedState||(a.flags|=4),typeof k.getSnapshotBeforeUpdate!="function"||R===s.memoizedProps&&te===s.memoizedState||(a.flags|=1024),h=!1)}return em(s,a,u,h,b,g)}function em(s,a,u,h,g,b){R1(s,a);var k=(a.flags&128)!==0;if(!h&&!k)return g&&V0(a,u,!1),ws(s,a,b);h=a.stateNode,l3.current=a;var R=k&&typeof u.getDerivedStateFromError!="function"?null:h.render();return a.flags|=1,s!==null&&k?(a.child=ko(a,s.child,null,b),a.child=ko(a,null,R,b)):pn(s,a,R,b),a.memoizedState=h.state,g&&V0(a,u,!0),a.child}function O1(s){var a=s.stateNode;a.pendingContext?F0(s,a.pendingContext,a.pendingContext!==a.context):a.context&&F0(s,a.context,!1),Mp(s,a.containerInfo)}function M1(s,a,u,h,g){return So(),Ap(g),a.flags|=256,pn(s,a,u,h),a.child}var tm={dehydrated:null,treeContext:null,retryLane:0};function nm(s){return{baseLanes:s,cachePool:null,transitions:null}}function F1(s,a,u){var h=a.pendingProps,g=ht.current,b=!1,k=(a.flags&128)!==0,R;if((R=k)||(R=s!==null&&s.memoizedState===null?!1:(g&2)!==0),R?(b=!0,a.flags&=-129):(s===null||s.memoizedState!==null)&&(g|=1),tt(ht,g&1),s===null)return Pp(a),s=a.memoizedState,s!==null&&(s=s.dehydrated,s!==null)?((a.mode&1)===0?a.lanes=1:s.data==="$!"?a.lanes=8:a.lanes=1073741824,null):(k=h.children,s=h.fallback,b?(h=a.mode,b=a.child,k={mode:"hidden",children:k},(h&1)===0&&b!==null?(b.childLanes=0,b.pendingProps=k):b=Pd(k,h,0,null),s=la(s,h,u,null),b.return=a,s.return=a,b.sibling=s,a.child=b,a.child.memoizedState=nm(u),a.memoizedState=tm,s):rm(a,k));if(g=s.memoizedState,g!==null&&(R=g.dehydrated,R!==null))return u3(s,a,k,h,R,g,u);if(b){b=h.fallback,k=a.mode,g=s.child,R=g.sibling;var V={mode:"hidden",children:h.children};return(k&1)===0&&a.child!==g?(h=a.child,h.childLanes=0,h.pendingProps=V,a.deletions=null):(h=si(g,V),h.subtreeFlags=g.subtreeFlags&14680064),R!==null?b=si(R,b):(b=la(b,k,u,null),b.flags|=2),b.return=a,h.return=a,h.sibling=b,a.child=h,h=b,b=a.child,k=s.child.memoizedState,k=k===null?nm(u):{baseLanes:k.baseLanes|u,cachePool:null,transitions:k.transitions},b.memoizedState=k,b.childLanes=s.childLanes&~u,a.memoizedState=tm,h}return b=s.child,s=b.sibling,h=si(b,{mode:"visible",children:h.children}),(a.mode&1)===0&&(h.lanes=u),h.return=a,h.sibling=null,s!==null&&(u=a.deletions,u===null?(a.deletions=[s],a.flags|=16):u.push(s)),a.child=h,a.memoizedState=null,h}function rm(s,a){return a=Pd({mode:"visible",children:a},s.mode,0,null),a.return=s,s.child=a}function gd(s,a,u,h){return h!==null&&Ap(h),ko(a,s.child,null,u),s=rm(a,a.pendingProps.children),s.flags|=2,a.memoizedState=null,s}function u3(s,a,u,h,g,b,k){if(u)return a.flags&256?(a.flags&=-257,h=Jp(Error(n(422))),gd(s,a,k,h)):a.memoizedState!==null?(a.child=s.child,a.flags|=128,null):(b=h.fallback,g=a.mode,h=Pd({mode:"visible",children:h.children},g,0,null),b=la(b,g,k,null),b.flags|=2,h.return=a,b.return=a,h.sibling=b,a.child=h,(a.mode&1)!==0&&ko(a,s.child,null,k),a.child.memoizedState=nm(k),a.memoizedState=tm,b);if((a.mode&1)===0)return gd(s,a,k,null);if(g.data==="$!"){if(h=g.nextSibling&&g.nextSibling.dataset,h)var R=h.dgst;return h=R,b=Error(n(419)),h=Jp(b,h,void 0),gd(s,a,k,h)}if(R=(k&s.childLanes)!==0,kn||R){if(h=zt,h!==null){switch(k&-k){case 4:g=2;break;case 16:g=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:g=32;break;case 536870912:g=268435456;break;default:g=0}g=(g&(h.suspendedLanes|k))!==0?0:g,g!==0&&g!==b.retryLane&&(b.retryLane=g,vs(s,g),Ar(h,s,g,-1))}return vm(),h=Jp(Error(n(421))),gd(s,a,k,h)}return g.data==="$?"?(a.flags|=128,a.child=s.child,a=S3.bind(null,s),g._reactRetry=a,null):(s=b.treeContext,Mn=Gs(g.nextSibling),On=a,ot=!0,Tr=null,s!==null&&(Kn[Qn++]=gs,Kn[Qn++]=ys,Kn[Qn++]=Zi,gs=s.id,ys=s.overflow,Zi=a),a=rm(a,h.children),a.flags|=4096,a)}function U1(s,a,u){s.lanes|=a;var h=s.alternate;h!==null&&(h.lanes|=a),Rp(s.return,a,u)}function sm(s,a,u,h,g){var b=s.memoizedState;b===null?s.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:h,tail:u,tailMode:g}:(b.isBackwards=a,b.rendering=null,b.renderingStartTime=0,b.last=h,b.tail=u,b.tailMode=g)}function V1(s,a,u){var h=a.pendingProps,g=h.revealOrder,b=h.tail;if(pn(s,a,h.children,u),h=ht.current,(h&2)!==0)h=h&1|2,a.flags|=128;else{if(s!==null&&(s.flags&128)!==0)e:for(s=a.child;s!==null;){if(s.tag===13)s.memoizedState!==null&&U1(s,u,a);else if(s.tag===19)U1(s,u,a);else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===a)break e;for(;s.sibling===null;){if(s.return===null||s.return===a)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}h&=1}if(tt(ht,h),(a.mode&1)===0)a.memoizedState=null;else switch(g){case"forwards":for(u=a.child,g=null;u!==null;)s=u.alternate,s!==null&&ud(s)===null&&(g=u),u=u.sibling;u=g,u===null?(g=a.child,a.child=null):(g=u.sibling,u.sibling=null),sm(a,!1,g,u,b);break;case"backwards":for(u=null,g=a.child,a.child=null;g!==null;){if(s=g.alternate,s!==null&&ud(s)===null){a.child=g;break}s=g.sibling,g.sibling=u,u=g,g=s}sm(a,!0,u,null,b);break;case"together":sm(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function yd(s,a){(a.mode&1)===0&&s!==null&&(s.alternate=null,a.alternate=null,a.flags|=2)}function ws(s,a,u){if(s!==null&&(a.dependencies=s.dependencies),sa|=a.lanes,(u&a.childLanes)===0)return null;if(s!==null&&a.child!==s.child)throw Error(n(153));if(a.child!==null){for(s=a.child,u=si(s,s.pendingProps),a.child=u,u.return=a;s.sibling!==null;)s=s.sibling,u=u.sibling=si(s,s.pendingProps),u.return=a;u.sibling=null}return a.child}function c3(s,a,u){switch(a.tag){case 3:O1(a),So();break;case 5:e1(a);break;case 1:Sn(a.type)&&Zc(a);break;case 4:Mp(a,a.stateNode.containerInfo);break;case 10:var h=a.type._context,g=a.memoizedProps.value;tt(id,h._currentValue),h._currentValue=g;break;case 13:if(h=a.memoizedState,h!==null)return h.dehydrated!==null?(tt(ht,ht.current&1),a.flags|=128,null):(u&a.child.childLanes)!==0?F1(s,a,u):(tt(ht,ht.current&1),s=ws(s,a,u),s!==null?s.sibling:null);tt(ht,ht.current&1);break;case 19:if(h=(u&a.childLanes)!==0,(s.flags&128)!==0){if(h)return V1(s,a,u);a.flags|=128}if(g=a.memoizedState,g!==null&&(g.rendering=null,g.tail=null,g.lastEffect=null),tt(ht,ht.current),h)break;return null;case 22:case 23:return a.lanes=0,D1(s,a,u)}return ws(s,a,u)}var B1,im,z1,$1;B1=function(s,a){for(var u=a.child;u!==null;){if(u.tag===5||u.tag===6)s.appendChild(u.stateNode);else if(u.tag!==4&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===a)break;for(;u.sibling===null;){if(u.return===null||u.return===a)return;u=u.return}u.sibling.return=u.return,u=u.sibling}},im=function(){},z1=function(s,a,u,h){var g=s.memoizedProps;if(g!==h){s=a.stateNode,na(qr.current);var b=null;switch(u){case"input":g=Li(s,g),h=Li(s,h),b=[];break;case"select":g=Y({},g,{value:void 0}),h=Y({},h,{value:void 0}),b=[];break;case"textarea":g=bl(s,g),h=bl(s,h),b=[];break;default:typeof g.onClick!="function"&&typeof h.onClick=="function"&&(s.onclick=Yc)}Cl(u,h);var k;u=null;for(X in g)if(!h.hasOwnProperty(X)&&g.hasOwnProperty(X)&&g[X]!=null)if(X==="style"){var R=g[X];for(k in R)R.hasOwnProperty(k)&&(u||(u={}),u[k]="")}else X!=="dangerouslySetInnerHTML"&&X!=="children"&&X!=="suppressContentEditableWarning"&&X!=="suppressHydrationWarning"&&X!=="autoFocus"&&(i.hasOwnProperty(X)?b||(b=[]):(b=b||[]).push(X,null));for(X in h){var V=h[X];if(R=g!=null?g[X]:void 0,h.hasOwnProperty(X)&&V!==R&&(V!=null||R!=null))if(X==="style")if(R){for(k in R)!R.hasOwnProperty(k)||V&&V.hasOwnProperty(k)||(u||(u={}),u[k]="");for(k in V)V.hasOwnProperty(k)&&R[k]!==V[k]&&(u||(u={}),u[k]=V[k])}else u||(b||(b=[]),b.push(X,u)),u=V;else X==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,R=R?R.__html:void 0,V!=null&&R!==V&&(b=b||[]).push(X,V)):X==="children"?typeof V!="string"&&typeof V!="number"||(b=b||[]).push(X,""+V):X!=="suppressContentEditableWarning"&&X!=="suppressHydrationWarning"&&(i.hasOwnProperty(X)?(V!=null&&X==="onScroll"&&rt("scroll",s),b||R===V||(b=[])):(b=b||[]).push(X,V))}u&&(b=b||[]).push("style",u);var X=b;(a.updateQueue=X)&&(a.flags|=4)}},$1=function(s,a,u,h){u!==h&&(a.flags|=4)};function iu(s,a){if(!ot)switch(s.tailMode){case"hidden":a=s.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?s.tail=null:u.sibling=null;break;case"collapsed":u=s.tail;for(var h=null;u!==null;)u.alternate!==null&&(h=u),u=u.sibling;h===null?a||s.tail===null?s.tail=null:s.tail.sibling=null:h.sibling=null}}function rn(s){var a=s.alternate!==null&&s.alternate.child===s.child,u=0,h=0;if(a)for(var g=s.child;g!==null;)u|=g.lanes|g.childLanes,h|=g.subtreeFlags&14680064,h|=g.flags&14680064,g.return=s,g=g.sibling;else for(g=s.child;g!==null;)u|=g.lanes|g.childLanes,h|=g.subtreeFlags,h|=g.flags,g.return=s,g=g.sibling;return s.subtreeFlags|=h,s.childLanes=u,a}function d3(s,a,u){var h=a.pendingProps;switch(_p(a),a.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rn(a),null;case 1:return Sn(a.type)&&Xc(),rn(a),null;case 3:return h=a.stateNode,To(),st(xn),st(tn),Vp(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(s===null||s.child===null)&&(rd(a)?a.flags|=4:s===null||s.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Tr!==null&&(mm(Tr),Tr=null))),im(s,a),rn(a),null;case 5:Fp(a);var g=na(eu.current);if(u=a.type,s!==null&&a.stateNode!=null)z1(s,a,u,h,g),s.ref!==a.ref&&(a.flags|=512,a.flags|=2097152);else{if(!h){if(a.stateNode===null)throw Error(n(166));return rn(a),null}if(s=na(qr.current),rd(a)){h=a.stateNode,u=a.type;var b=a.memoizedProps;switch(h[$r]=a,h[Ql]=b,s=(a.mode&1)!==0,u){case"dialog":rt("cancel",h),rt("close",h);break;case"iframe":case"object":case"embed":rt("load",h);break;case"video":case"audio":for(g=0;g<Wl.length;g++)rt(Wl[g],h);break;case"source":rt("error",h);break;case"img":case"image":case"link":rt("error",h),rt("load",h);break;case"details":rt("toggle",h);break;case"input":Va(h,b),rt("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!b.multiple},rt("invalid",h);break;case"textarea":za(h,b),rt("invalid",h)}Cl(u,b),g=null;for(var k in b)if(b.hasOwnProperty(k)){var R=b[k];k==="children"?typeof R=="string"?h.textContent!==R&&(b.suppressHydrationWarning!==!0&&Qc(h.textContent,R,s),g=["children",R]):typeof R=="number"&&h.textContent!==""+R&&(b.suppressHydrationWarning!==!0&&Qc(h.textContent,R,s),g=["children",""+R]):i.hasOwnProperty(k)&&R!=null&&k==="onScroll"&&rt("scroll",h)}switch(u){case"input":De(h),xc(h,b,!0);break;case"textarea":De(h),wl(h);break;case"select":case"option":break;default:typeof b.onClick=="function"&&(h.onclick=Yc)}h=g,a.updateQueue=h,h!==null&&(a.flags|=4)}else{k=g.nodeType===9?g:g.ownerDocument,s==="http://www.w3.org/1999/xhtml"&&(s=Nt(u)),s==="http://www.w3.org/1999/xhtml"?u==="script"?(s=k.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild)):typeof h.is=="string"?s=k.createElement(u,{is:h.is}):(s=k.createElement(u),u==="select"&&(k=s,h.multiple?k.multiple=!0:h.size&&(k.size=h.size))):s=k.createElementNS(s,u),s[$r]=a,s[Ql]=h,B1(s,a,!1,!1),a.stateNode=s;e:{switch(k=Tl(u,h),u){case"dialog":rt("cancel",s),rt("close",s),g=h;break;case"iframe":case"object":case"embed":rt("load",s),g=h;break;case"video":case"audio":for(g=0;g<Wl.length;g++)rt(Wl[g],s);g=h;break;case"source":rt("error",s),g=h;break;case"img":case"image":case"link":rt("error",s),rt("load",s),g=h;break;case"details":rt("toggle",s),g=h;break;case"input":Va(s,h),g=Li(s,h),rt("invalid",s);break;case"option":g=h;break;case"select":s._wrapperState={wasMultiple:!!h.multiple},g=Y({},h,{value:void 0}),rt("invalid",s);break;case"textarea":za(s,h),g=bl(s,h),rt("invalid",s);break;default:g=h}Cl(u,g),R=g;for(b in R)if(R.hasOwnProperty(b)){var V=R[b];b==="style"?kl(s,V):b==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&xl(s,V)):b==="children"?typeof V=="string"?(u!=="textarea"||V!=="")&&Os(s,V):typeof V=="number"&&Os(s,""+V):b!=="suppressContentEditableWarning"&&b!=="suppressHydrationWarning"&&b!=="autoFocus"&&(i.hasOwnProperty(b)?V!=null&&b==="onScroll"&&rt("scroll",s):V!=null&&$(s,b,V,k))}switch(u){case"input":De(s),xc(s,h,!1);break;case"textarea":De(s),wl(s);break;case"option":h.value!=null&&s.setAttribute("value",""+Te(h.value));break;case"select":s.multiple=!!h.multiple,b=h.value,b!=null?as(s,!!h.multiple,b,!1):h.defaultValue!=null&&as(s,!!h.multiple,h.defaultValue,!0);break;default:typeof g.onClick=="function"&&(s.onclick=Yc)}switch(u){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(a.flags|=4)}a.ref!==null&&(a.flags|=512,a.flags|=2097152)}return rn(a),null;case 6:if(s&&a.stateNode!=null)$1(s,a,s.memoizedProps,h);else{if(typeof h!="string"&&a.stateNode===null)throw Error(n(166));if(u=na(eu.current),na(qr.current),rd(a)){if(h=a.stateNode,u=a.memoizedProps,h[$r]=a,(b=h.nodeValue!==u)&&(s=On,s!==null))switch(s.tag){case 3:Qc(h.nodeValue,u,(s.mode&1)!==0);break;case 5:s.memoizedProps.suppressHydrationWarning!==!0&&Qc(h.nodeValue,u,(s.mode&1)!==0)}b&&(a.flags|=4)}else h=(u.nodeType===9?u:u.ownerDocument).createTextNode(h),h[$r]=a,a.stateNode=h}return rn(a),null;case 13:if(st(ht),h=a.memoizedState,s===null||s.memoizedState!==null&&s.memoizedState.dehydrated!==null){if(ot&&Mn!==null&&(a.mode&1)!==0&&(a.flags&128)===0)W0(),So(),a.flags|=98560,b=!1;else if(b=rd(a),h!==null&&h.dehydrated!==null){if(s===null){if(!b)throw Error(n(318));if(b=a.memoizedState,b=b!==null?b.dehydrated:null,!b)throw Error(n(317));b[$r]=a}else So(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;rn(a),b=!1}else Tr!==null&&(mm(Tr),Tr=null),b=!0;if(!b)return a.flags&65536?a:null}return(a.flags&128)!==0?(a.lanes=u,a):(h=h!==null,h!==(s!==null&&s.memoizedState!==null)&&h&&(a.child.flags|=8192,(a.mode&1)!==0&&(s===null||(ht.current&1)!==0?Ot===0&&(Ot=3):vm())),a.updateQueue!==null&&(a.flags|=4),rn(a),null);case 4:return To(),im(s,a),s===null&&Gl(a.stateNode.containerInfo),rn(a),null;case 10:return Dp(a.type._context),rn(a),null;case 17:return Sn(a.type)&&Xc(),rn(a),null;case 19:if(st(ht),b=a.memoizedState,b===null)return rn(a),null;if(h=(a.flags&128)!==0,k=b.rendering,k===null)if(h)iu(b,!1);else{if(Ot!==0||s!==null&&(s.flags&128)!==0)for(s=a.child;s!==null;){if(k=ud(s),k!==null){for(a.flags|=128,iu(b,!1),h=k.updateQueue,h!==null&&(a.updateQueue=h,a.flags|=4),a.subtreeFlags=0,h=u,u=a.child;u!==null;)b=u,s=h,b.flags&=14680066,k=b.alternate,k===null?(b.childLanes=0,b.lanes=s,b.child=null,b.subtreeFlags=0,b.memoizedProps=null,b.memoizedState=null,b.updateQueue=null,b.dependencies=null,b.stateNode=null):(b.childLanes=k.childLanes,b.lanes=k.lanes,b.child=k.child,b.subtreeFlags=0,b.deletions=null,b.memoizedProps=k.memoizedProps,b.memoizedState=k.memoizedState,b.updateQueue=k.updateQueue,b.type=k.type,s=k.dependencies,b.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),u=u.sibling;return tt(ht,ht.current&1|2),a.child}s=s.sibling}b.tail!==null&&et()>Ao&&(a.flags|=128,h=!0,iu(b,!1),a.lanes=4194304)}else{if(!h)if(s=ud(k),s!==null){if(a.flags|=128,h=!0,u=s.updateQueue,u!==null&&(a.updateQueue=u,a.flags|=4),iu(b,!0),b.tail===null&&b.tailMode==="hidden"&&!k.alternate&&!ot)return rn(a),null}else 2*et()-b.renderingStartTime>Ao&&u!==1073741824&&(a.flags|=128,h=!0,iu(b,!1),a.lanes=4194304);b.isBackwards?(k.sibling=a.child,a.child=k):(u=b.last,u!==null?u.sibling=k:a.child=k,b.last=k)}return b.tail!==null?(a=b.tail,b.rendering=a,b.tail=a.sibling,b.renderingStartTime=et(),a.sibling=null,u=ht.current,tt(ht,h?u&1|2:u&1),a):(rn(a),null);case 22:case 23:return ym(),h=a.memoizedState!==null,s!==null&&s.memoizedState!==null!==h&&(a.flags|=8192),h&&(a.mode&1)!==0?(Fn&1073741824)!==0&&(rn(a),a.subtreeFlags&6&&(a.flags|=8192)):rn(a),null;case 24:return null;case 25:return null}throw Error(n(156,a.tag))}function h3(s,a){switch(_p(a),a.tag){case 1:return Sn(a.type)&&Xc(),s=a.flags,s&65536?(a.flags=s&-65537|128,a):null;case 3:return To(),st(xn),st(tn),Vp(),s=a.flags,(s&65536)!==0&&(s&128)===0?(a.flags=s&-65537|128,a):null;case 5:return Fp(a),null;case 13:if(st(ht),s=a.memoizedState,s!==null&&s.dehydrated!==null){if(a.alternate===null)throw Error(n(340));So()}return s=a.flags,s&65536?(a.flags=s&-65537|128,a):null;case 19:return st(ht),null;case 4:return To(),null;case 10:return Dp(a.type._context),null;case 22:case 23:return ym(),null;case 24:return null;default:return null}}var vd=!1,sn=!1,f3=typeof WeakSet=="function"?WeakSet:Set,pe=null;function Io(s,a){var u=s.ref;if(u!==null)if(typeof u=="function")try{u(null)}catch(h){yt(s,a,h)}else u.current=null}function q1(s,a,u){try{u()}catch(h){yt(s,a,h)}}var H1=!1;function p3(s,a){if(vp=qs,s=S0(),cp(s)){if("selectionStart"in s)var u={start:s.selectionStart,end:s.selectionEnd};else e:{u=(u=s.ownerDocument)&&u.defaultView||window;var h=u.getSelection&&u.getSelection();if(h&&h.rangeCount!==0){u=h.anchorNode;var g=h.anchorOffset,b=h.focusNode;h=h.focusOffset;try{u.nodeType,b.nodeType}catch{u=null;break e}var k=0,R=-1,V=-1,X=0,ne=0,ie=s,te=null;t:for(;;){for(var he;ie!==u||g!==0&&ie.nodeType!==3||(R=k+g),ie!==b||h!==0&&ie.nodeType!==3||(V=k+h),ie.nodeType===3&&(k+=ie.nodeValue.length),(he=ie.firstChild)!==null;)te=ie,ie=he;for(;;){if(ie===s)break t;if(te===u&&++X===g&&(R=k),te===b&&++ne===h&&(V=k),(he=ie.nextSibling)!==null)break;ie=te,te=ie.parentNode}ie=he}u=R===-1||V===-1?null:{start:R,end:V}}else u=null}u=u||{start:0,end:0}}else u=null;for(bp={focusedElem:s,selectionRange:u},qs=!1,pe=a;pe!==null;)if(a=pe,s=a.child,(a.subtreeFlags&1028)!==0&&s!==null)s.return=a,pe=s;else for(;pe!==null;){a=pe;try{var me=a.alternate;if((a.flags&1024)!==0)switch(a.tag){case 0:case 11:case 15:break;case 1:if(me!==null){var ge=me.memoizedProps,xt=me.memoizedState,K=a.stateNode,q=K.getSnapshotBeforeUpdate(a.elementType===a.type?ge:_r(a.type,ge),xt);K.__reactInternalSnapshotBeforeUpdate=q}break;case 3:var J=a.stateNode.containerInfo;J.nodeType===1?J.textContent="":J.nodeType===9&&J.documentElement&&J.removeChild(J.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(le){yt(a,a.return,le)}if(s=a.sibling,s!==null){s.return=a.return,pe=s;break}pe=a.return}return me=H1,H1=!1,me}function au(s,a,u){var h=a.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var g=h=h.next;do{if((g.tag&s)===s){var b=g.destroy;g.destroy=void 0,b!==void 0&&q1(a,u,b)}g=g.next}while(g!==h)}}function bd(s,a){if(a=a.updateQueue,a=a!==null?a.lastEffect:null,a!==null){var u=a=a.next;do{if((u.tag&s)===s){var h=u.create;u.destroy=h()}u=u.next}while(u!==a)}}function am(s){var a=s.ref;if(a!==null){var u=s.stateNode;switch(s.tag){case 5:s=u;break;default:s=u}typeof a=="function"?a(s):a.current=s}}function W1(s){var a=s.alternate;a!==null&&(s.alternate=null,W1(a)),s.child=null,s.deletions=null,s.sibling=null,s.tag===5&&(a=s.stateNode,a!==null&&(delete a[$r],delete a[Ql],delete a[kp],delete a[YT],delete a[JT])),s.stateNode=null,s.return=null,s.dependencies=null,s.memoizedProps=null,s.memoizedState=null,s.pendingProps=null,s.stateNode=null,s.updateQueue=null}function G1(s){return s.tag===5||s.tag===3||s.tag===4}function K1(s){e:for(;;){for(;s.sibling===null;){if(s.return===null||G1(s.return))return null;s=s.return}for(s.sibling.return=s.return,s=s.sibling;s.tag!==5&&s.tag!==6&&s.tag!==18;){if(s.flags&2||s.child===null||s.tag===4)continue e;s.child.return=s,s=s.child}if(!(s.flags&2))return s.stateNode}}function om(s,a,u){var h=s.tag;if(h===5||h===6)s=s.stateNode,a?u.nodeType===8?u.parentNode.insertBefore(s,a):u.insertBefore(s,a):(u.nodeType===8?(a=u.parentNode,a.insertBefore(s,u)):(a=u,a.appendChild(s)),u=u._reactRootContainer,u!=null||a.onclick!==null||(a.onclick=Yc));else if(h!==4&&(s=s.child,s!==null))for(om(s,a,u),s=s.sibling;s!==null;)om(s,a,u),s=s.sibling}function lm(s,a,u){var h=s.tag;if(h===5||h===6)s=s.stateNode,a?u.insertBefore(s,a):u.appendChild(s);else if(h!==4&&(s=s.child,s!==null))for(lm(s,a,u),s=s.sibling;s!==null;)lm(s,a,u),s=s.sibling}var Kt=null,Ir=!1;function Zs(s,a,u){for(u=u.child;u!==null;)Q1(s,a,u),u=u.sibling}function Q1(s,a,u){if(Nn&&typeof Nn.onCommitFiberUnmount=="function")try{Nn.onCommitFiberUnmount(qi,u)}catch{}switch(u.tag){case 5:sn||Io(u,a);case 6:var h=Kt,g=Ir;Kt=null,Zs(s,a,u),Kt=h,Ir=g,Kt!==null&&(Ir?(s=Kt,u=u.stateNode,s.nodeType===8?s.parentNode.removeChild(u):s.removeChild(u)):Kt.removeChild(u.stateNode));break;case 18:Kt!==null&&(Ir?(s=Kt,u=u.stateNode,s.nodeType===8?Sp(s.parentNode,u):s.nodeType===1&&Sp(s,u),kr(s)):Sp(Kt,u.stateNode));break;case 4:h=Kt,g=Ir,Kt=u.stateNode.containerInfo,Ir=!0,Zs(s,a,u),Kt=h,Ir=g;break;case 0:case 11:case 14:case 15:if(!sn&&(h=u.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){g=h=h.next;do{var b=g,k=b.destroy;b=b.tag,k!==void 0&&((b&2)!==0||(b&4)!==0)&&q1(u,a,k),g=g.next}while(g!==h)}Zs(s,a,u);break;case 1:if(!sn&&(Io(u,a),h=u.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=u.memoizedProps,h.state=u.memoizedState,h.componentWillUnmount()}catch(R){yt(u,a,R)}Zs(s,a,u);break;case 21:Zs(s,a,u);break;case 22:u.mode&1?(sn=(h=sn)||u.memoizedState!==null,Zs(s,a,u),sn=h):Zs(s,a,u);break;default:Zs(s,a,u)}}function Y1(s){var a=s.updateQueue;if(a!==null){s.updateQueue=null;var u=s.stateNode;u===null&&(u=s.stateNode=new f3),a.forEach(function(h){var g=k3.bind(null,s,h);u.has(h)||(u.add(h),h.then(g,g))})}}function Pr(s,a){var u=a.deletions;if(u!==null)for(var h=0;h<u.length;h++){var g=u[h];try{var b=s,k=a,R=k;e:for(;R!==null;){switch(R.tag){case 5:Kt=R.stateNode,Ir=!1;break e;case 3:Kt=R.stateNode.containerInfo,Ir=!0;break e;case 4:Kt=R.stateNode.containerInfo,Ir=!0;break e}R=R.return}if(Kt===null)throw Error(n(160));Q1(b,k,g),Kt=null,Ir=!1;var V=g.alternate;V!==null&&(V.return=null),g.return=null}catch(X){yt(g,a,X)}}if(a.subtreeFlags&12854)for(a=a.child;a!==null;)J1(a,s),a=a.sibling}function J1(s,a){var u=s.alternate,h=s.flags;switch(s.tag){case 0:case 11:case 14:case 15:if(Pr(a,s),Wr(s),h&4){try{au(3,s,s.return),bd(3,s)}catch(ge){yt(s,s.return,ge)}try{au(5,s,s.return)}catch(ge){yt(s,s.return,ge)}}break;case 1:Pr(a,s),Wr(s),h&512&&u!==null&&Io(u,u.return);break;case 5:if(Pr(a,s),Wr(s),h&512&&u!==null&&Io(u,u.return),s.flags&32){var g=s.stateNode;try{Os(g,"")}catch(ge){yt(s,s.return,ge)}}if(h&4&&(g=s.stateNode,g!=null)){var b=s.memoizedProps,k=u!==null?u.memoizedProps:b,R=s.type,V=s.updateQueue;if(s.updateQueue=null,V!==null)try{R==="input"&&b.type==="radio"&&b.name!=null&&yl(g,b),Tl(R,k);var X=Tl(R,b);for(k=0;k<V.length;k+=2){var ne=V[k],ie=V[k+1];ne==="style"?kl(g,ie):ne==="dangerouslySetInnerHTML"?xl(g,ie):ne==="children"?Os(g,ie):$(g,ne,ie,X)}switch(R){case"input":vl(g,b);break;case"textarea":$a(g,b);break;case"select":var te=g._wrapperState.wasMultiple;g._wrapperState.wasMultiple=!!b.multiple;var he=b.value;he!=null?as(g,!!b.multiple,he,!1):te!==!!b.multiple&&(b.defaultValue!=null?as(g,!!b.multiple,b.defaultValue,!0):as(g,!!b.multiple,b.multiple?[]:"",!1))}g[Ql]=b}catch(ge){yt(s,s.return,ge)}}break;case 6:if(Pr(a,s),Wr(s),h&4){if(s.stateNode===null)throw Error(n(162));g=s.stateNode,b=s.memoizedProps;try{g.nodeValue=b}catch(ge){yt(s,s.return,ge)}}break;case 3:if(Pr(a,s),Wr(s),h&4&&u!==null&&u.memoizedState.isDehydrated)try{kr(a.containerInfo)}catch(ge){yt(s,s.return,ge)}break;case 4:Pr(a,s),Wr(s);break;case 13:Pr(a,s),Wr(s),g=s.child,g.flags&8192&&(b=g.memoizedState!==null,g.stateNode.isHidden=b,!b||g.alternate!==null&&g.alternate.memoizedState!==null||(dm=et())),h&4&&Y1(s);break;case 22:if(ne=u!==null&&u.memoizedState!==null,s.mode&1?(sn=(X=sn)||ne,Pr(a,s),sn=X):Pr(a,s),Wr(s),h&8192){if(X=s.memoizedState!==null,(s.stateNode.isHidden=X)&&!ne&&(s.mode&1)!==0)for(pe=s,ne=s.child;ne!==null;){for(ie=pe=ne;pe!==null;){switch(te=pe,he=te.child,te.tag){case 0:case 11:case 14:case 15:au(4,te,te.return);break;case 1:Io(te,te.return);var me=te.stateNode;if(typeof me.componentWillUnmount=="function"){h=te,u=te.return;try{a=h,me.props=a.memoizedProps,me.state=a.memoizedState,me.componentWillUnmount()}catch(ge){yt(h,u,ge)}}break;case 5:Io(te,te.return);break;case 22:if(te.memoizedState!==null){eb(ie);continue}}he!==null?(he.return=te,pe=he):eb(ie)}ne=ne.sibling}e:for(ne=null,ie=s;;){if(ie.tag===5){if(ne===null){ne=ie;try{g=ie.stateNode,X?(b=g.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none"):(R=ie.stateNode,V=ie.memoizedProps.style,k=V!=null&&V.hasOwnProperty("display")?V.display:null,R.style.display=Sl("display",k))}catch(ge){yt(s,s.return,ge)}}}else if(ie.tag===6){if(ne===null)try{ie.stateNode.nodeValue=X?"":ie.memoizedProps}catch(ge){yt(s,s.return,ge)}}else if((ie.tag!==22&&ie.tag!==23||ie.memoizedState===null||ie===s)&&ie.child!==null){ie.child.return=ie,ie=ie.child;continue}if(ie===s)break e;for(;ie.sibling===null;){if(ie.return===null||ie.return===s)break e;ne===ie&&(ne=null),ie=ie.return}ne===ie&&(ne=null),ie.sibling.return=ie.return,ie=ie.sibling}}break;case 19:Pr(a,s),Wr(s),h&4&&Y1(s);break;case 21:break;default:Pr(a,s),Wr(s)}}function Wr(s){var a=s.flags;if(a&2){try{e:{for(var u=s.return;u!==null;){if(G1(u)){var h=u;break e}u=u.return}throw Error(n(160))}switch(h.tag){case 5:var g=h.stateNode;h.flags&32&&(Os(g,""),h.flags&=-33);var b=K1(s);lm(s,b,g);break;case 3:case 4:var k=h.stateNode.containerInfo,R=K1(s);om(s,R,k);break;default:throw Error(n(161))}}catch(V){yt(s,s.return,V)}s.flags&=-3}a&4096&&(s.flags&=-4097)}function m3(s,a,u){pe=s,X1(s)}function X1(s,a,u){for(var h=(s.mode&1)!==0;pe!==null;){var g=pe,b=g.child;if(g.tag===22&&h){var k=g.memoizedState!==null||vd;if(!k){var R=g.alternate,V=R!==null&&R.memoizedState!==null||sn;R=vd;var X=sn;if(vd=k,(sn=V)&&!X)for(pe=g;pe!==null;)k=pe,V=k.child,k.tag===22&&k.memoizedState!==null?tb(g):V!==null?(V.return=k,pe=V):tb(g);for(;b!==null;)pe=b,X1(b),b=b.sibling;pe=g,vd=R,sn=X}Z1(s)}else(g.subtreeFlags&8772)!==0&&b!==null?(b.return=g,pe=b):Z1(s)}}function Z1(s){for(;pe!==null;){var a=pe;if((a.flags&8772)!==0){var u=a.alternate;try{if((a.flags&8772)!==0)switch(a.tag){case 0:case 11:case 15:sn||bd(5,a);break;case 1:var h=a.stateNode;if(a.flags&4&&!sn)if(u===null)h.componentDidMount();else{var g=a.elementType===a.type?u.memoizedProps:_r(a.type,u.memoizedProps);h.componentDidUpdate(g,u.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var b=a.updateQueue;b!==null&&Z0(a,b,h);break;case 3:var k=a.updateQueue;if(k!==null){if(u=null,a.child!==null)switch(a.child.tag){case 5:u=a.child.stateNode;break;case 1:u=a.child.stateNode}Z0(a,k,u)}break;case 5:var R=a.stateNode;if(u===null&&a.flags&4){u=R;var V=a.memoizedProps;switch(a.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&u.focus();break;case"img":V.src&&(u.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(a.memoizedState===null){var X=a.alternate;if(X!==null){var ne=X.memoizedState;if(ne!==null){var ie=ne.dehydrated;ie!==null&&kr(ie)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}sn||a.flags&512&&am(a)}catch(te){yt(a,a.return,te)}}if(a===s){pe=null;break}if(u=a.sibling,u!==null){u.return=a.return,pe=u;break}pe=a.return}}function eb(s){for(;pe!==null;){var a=pe;if(a===s){pe=null;break}var u=a.sibling;if(u!==null){u.return=a.return,pe=u;break}pe=a.return}}function tb(s){for(;pe!==null;){var a=pe;try{switch(a.tag){case 0:case 11:case 15:var u=a.return;try{bd(4,a)}catch(V){yt(a,u,V)}break;case 1:var h=a.stateNode;if(typeof h.componentDidMount=="function"){var g=a.return;try{h.componentDidMount()}catch(V){yt(a,g,V)}}var b=a.return;try{am(a)}catch(V){yt(a,b,V)}break;case 5:var k=a.return;try{am(a)}catch(V){yt(a,k,V)}}}catch(V){yt(a,a.return,V)}if(a===s){pe=null;break}var R=a.sibling;if(R!==null){R.return=a.return,pe=R;break}pe=a.return}}var g3=Math.ceil,wd=L.ReactCurrentDispatcher,um=L.ReactCurrentOwner,Xn=L.ReactCurrentBatchConfig,We=0,zt=null,Tt=null,Qt=0,Fn=0,Po=Ks(0),Ot=0,ou=null,sa=0,xd=0,cm=0,lu=null,En=null,dm=0,Ao=1/0,xs=null,Sd=!1,hm=null,ei=null,kd=!1,ti=null,Ed=0,uu=0,fm=null,Cd=-1,Td=0;function mn(){return(We&6)!==0?et():Cd!==-1?Cd:Cd=et()}function ni(s){return(s.mode&1)===0?1:(We&2)!==0&&Qt!==0?Qt&-Qt:ZT.transition!==null?(Td===0&&(Td=Wi()),Td):(s=ze,s!==0||(s=window.event,s=s===void 0?16:Ml(s.type)),s)}function Ar(s,a,u,h){if(50<uu)throw uu=0,fm=null,Error(n(185));Vs(s,u,h),((We&2)===0||s!==zt)&&(s===zt&&((We&2)===0&&(xd|=u),Ot===4&&ri(s,Qt)),Cn(s,h),u===1&&We===0&&(a.mode&1)===0&&(Ao=et()+500,ed&&Ys()))}function Cn(s,a){var u=s.callbackNode;us(s,a);var h=Hi(s,s===zt?Qt:0);if(h===0)u!==null&&Nl(u),s.callbackNode=null,s.callbackPriority=0;else if(a=h&-h,s.callbackPriority!==a){if(u!=null&&Nl(u),a===1)s.tag===0?XT(rb.bind(null,s)):B0(rb.bind(null,s)),KT(function(){(We&6)===0&&Ys()}),u=null;else{switch(zs(h)){case 1:u=$i;break;case 4:u=Ms;break;case 16:u=Hn;break;case 536870912:u=Tc;break;default:u=Hn}u=db(u,nb.bind(null,s))}s.callbackPriority=a,s.callbackNode=u}}function nb(s,a){if(Cd=-1,Td=0,(We&6)!==0)throw Error(n(327));var u=s.callbackNode;if(jo()&&s.callbackNode!==u)return null;var h=Hi(s,s===zt?Qt:0);if(h===0)return null;if((h&30)!==0||(h&s.expiredLanes)!==0||a)a=_d(s,h);else{a=h;var g=We;We|=2;var b=ib();(zt!==s||Qt!==a)&&(xs=null,Ao=et()+500,aa(s,a));do try{b3();break}catch(R){sb(s,R)}while(!0);Np(),wd.current=b,We=g,Tt!==null?a=0:(zt=null,Qt=0,a=Ot)}if(a!==0){if(a===2&&(g=Dn(s),g!==0&&(h=g,a=pm(s,g))),a===1)throw u=ou,aa(s,0),ri(s,h),Cn(s,et()),u;if(a===6)ri(s,h);else{if(g=s.current.alternate,(h&30)===0&&!y3(g)&&(a=_d(s,h),a===2&&(b=Dn(s),b!==0&&(h=b,a=pm(s,b))),a===1))throw u=ou,aa(s,0),ri(s,h),Cn(s,et()),u;switch(s.finishedWork=g,s.finishedLanes=h,a){case 0:case 1:throw Error(n(345));case 2:oa(s,En,xs);break;case 3:if(ri(s,h),(h&130023424)===h&&(a=dm+500-et(),10<a)){if(Hi(s,0)!==0)break;if(g=s.suspendedLanes,(g&h)!==h){mn(),s.pingedLanes|=s.suspendedLanes&g;break}s.timeoutHandle=xp(oa.bind(null,s,En,xs),a);break}oa(s,En,xs);break;case 4:if(ri(s,h),(h&4194240)===h)break;for(a=s.eventTimes,g=-1;0<h;){var k=31-hn(h);b=1<<k,k=a[k],k>g&&(g=k),h&=~b}if(h=g,h=et()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*g3(h/1960))-h,10<h){s.timeoutHandle=xp(oa.bind(null,s,En,xs),h);break}oa(s,En,xs);break;case 5:oa(s,En,xs);break;default:throw Error(n(329))}}}return Cn(s,et()),s.callbackNode===u?nb.bind(null,s):null}function pm(s,a){var u=lu;return s.current.memoizedState.isDehydrated&&(aa(s,a).flags|=256),s=_d(s,a),s!==2&&(a=En,En=u,a!==null&&mm(a)),s}function mm(s){En===null?En=s:En.push.apply(En,s)}function y3(s){for(var a=s;;){if(a.flags&16384){var u=a.updateQueue;if(u!==null&&(u=u.stores,u!==null))for(var h=0;h<u.length;h++){var g=u[h],b=g.getSnapshot;g=g.value;try{if(!Cr(b(),g))return!1}catch{return!1}}}if(u=a.child,a.subtreeFlags&16384&&u!==null)u.return=a,a=u;else{if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function ri(s,a){for(a&=~cm,a&=~xd,s.suspendedLanes|=a,s.pingedLanes&=~a,s=s.expirationTimes;0<a;){var u=31-hn(a),h=1<<u;s[u]=-1,a&=~h}}function rb(s){if((We&6)!==0)throw Error(n(327));jo();var a=Hi(s,0);if((a&1)===0)return Cn(s,et()),null;var u=_d(s,a);if(s.tag!==0&&u===2){var h=Dn(s);h!==0&&(a=h,u=pm(s,h))}if(u===1)throw u=ou,aa(s,0),ri(s,a),Cn(s,et()),u;if(u===6)throw Error(n(345));return s.finishedWork=s.current.alternate,s.finishedLanes=a,oa(s,En,xs),Cn(s,et()),null}function gm(s,a){var u=We;We|=1;try{return s(a)}finally{We=u,We===0&&(Ao=et()+500,ed&&Ys())}}function ia(s){ti!==null&&ti.tag===0&&(We&6)===0&&jo();var a=We;We|=1;var u=Xn.transition,h=ze;try{if(Xn.transition=null,ze=1,s)return s()}finally{ze=h,Xn.transition=u,We=a,(We&6)===0&&Ys()}}function ym(){Fn=Po.current,st(Po)}function aa(s,a){s.finishedWork=null,s.finishedLanes=0;var u=s.timeoutHandle;if(u!==-1&&(s.timeoutHandle=-1,GT(u)),Tt!==null)for(u=Tt.return;u!==null;){var h=u;switch(_p(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&Xc();break;case 3:To(),st(xn),st(tn),Vp();break;case 5:Fp(h);break;case 4:To();break;case 13:st(ht);break;case 19:st(ht);break;case 10:Dp(h.type._context);break;case 22:case 23:ym()}u=u.return}if(zt=s,Tt=s=si(s.current,null),Qt=Fn=a,Ot=0,ou=null,cm=xd=sa=0,En=lu=null,ta!==null){for(a=0;a<ta.length;a++)if(u=ta[a],h=u.interleaved,h!==null){u.interleaved=null;var g=h.next,b=u.pending;if(b!==null){var k=b.next;b.next=g,h.next=k}u.pending=h}ta=null}return s}function sb(s,a){do{var u=Tt;try{if(Np(),cd.current=pd,dd){for(var h=ft.memoizedState;h!==null;){var g=h.queue;g!==null&&(g.pending=null),h=h.next}dd=!1}if(ra=0,Bt=Lt=ft=null,tu=!1,nu=0,um.current=null,u===null||u.return===null){Ot=1,ou=a,Tt=null;break}e:{var b=s,k=u.return,R=u,V=a;if(a=Qt,R.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var X=V,ne=R,ie=ne.tag;if((ne.mode&1)===0&&(ie===0||ie===11||ie===15)){var te=ne.alternate;te?(ne.updateQueue=te.updateQueue,ne.memoizedState=te.memoizedState,ne.lanes=te.lanes):(ne.updateQueue=null,ne.memoizedState=null)}var he=I1(k);if(he!==null){he.flags&=-257,P1(he,k,R,b,a),he.mode&1&&_1(b,X,a),a=he,V=X;var me=a.updateQueue;if(me===null){var ge=new Set;ge.add(V),a.updateQueue=ge}else me.add(V);break e}else{if((a&1)===0){_1(b,X,a),vm();break e}V=Error(n(426))}}else if(ot&&R.mode&1){var xt=I1(k);if(xt!==null){(xt.flags&65536)===0&&(xt.flags|=256),P1(xt,k,R,b,a),Ap(_o(V,R));break e}}b=V=_o(V,R),Ot!==4&&(Ot=2),lu===null?lu=[b]:lu.push(b),b=k;do{switch(b.tag){case 3:b.flags|=65536,a&=-a,b.lanes|=a;var K=C1(b,V,a);X0(b,K);break e;case 1:R=V;var q=b.type,J=b.stateNode;if((b.flags&128)===0&&(typeof q.getDerivedStateFromError=="function"||J!==null&&typeof J.componentDidCatch=="function"&&(ei===null||!ei.has(J)))){b.flags|=65536,a&=-a,b.lanes|=a;var le=T1(b,R,a);X0(b,le);break e}}b=b.return}while(b!==null)}ob(u)}catch(be){a=be,Tt===u&&u!==null&&(Tt=u=u.return);continue}break}while(!0)}function ib(){var s=wd.current;return wd.current=pd,s===null?pd:s}function vm(){(Ot===0||Ot===3||Ot===2)&&(Ot=4),zt===null||(sa&268435455)===0&&(xd&268435455)===0||ri(zt,Qt)}function _d(s,a){var u=We;We|=2;var h=ib();(zt!==s||Qt!==a)&&(xs=null,aa(s,a));do try{v3();break}catch(g){sb(s,g)}while(!0);if(Np(),We=u,wd.current=h,Tt!==null)throw Error(n(261));return zt=null,Qt=0,Ot}function v3(){for(;Tt!==null;)ab(Tt)}function b3(){for(;Tt!==null&&!Ec();)ab(Tt)}function ab(s){var a=cb(s.alternate,s,Fn);s.memoizedProps=s.pendingProps,a===null?ob(s):Tt=a,um.current=null}function ob(s){var a=s;do{var u=a.alternate;if(s=a.return,(a.flags&32768)===0){if(u=d3(u,a,Fn),u!==null){Tt=u;return}}else{if(u=h3(u,a),u!==null){u.flags&=32767,Tt=u;return}if(s!==null)s.flags|=32768,s.subtreeFlags=0,s.deletions=null;else{Ot=6,Tt=null;return}}if(a=a.sibling,a!==null){Tt=a;return}Tt=a=s}while(a!==null);Ot===0&&(Ot=5)}function oa(s,a,u){var h=ze,g=Xn.transition;try{Xn.transition=null,ze=1,w3(s,a,u,h)}finally{Xn.transition=g,ze=h}return null}function w3(s,a,u,h){do jo();while(ti!==null);if((We&6)!==0)throw Error(n(327));u=s.finishedWork;var g=s.finishedLanes;if(u===null)return null;if(s.finishedWork=null,s.finishedLanes=0,u===s.current)throw Error(n(177));s.callbackNode=null,s.callbackPriority=0;var b=u.lanes|u.childLanes;if(Xe(s,b),s===zt&&(Tt=zt=null,Qt=0),(u.subtreeFlags&2064)===0&&(u.flags&2064)===0||kd||(kd=!0,db(Hn,function(){return jo(),null})),b=(u.flags&15990)!==0,(u.subtreeFlags&15990)!==0||b){b=Xn.transition,Xn.transition=null;var k=ze;ze=1;var R=We;We|=4,um.current=null,p3(s,u),J1(u,s),VT(bp),qs=!!vp,bp=vp=null,s.current=u,m3(u),np(),We=R,ze=k,Xn.transition=b}else s.current=u;if(kd&&(kd=!1,ti=s,Ed=g),b=s.pendingLanes,b===0&&(ei=null),_c(u.stateNode),Cn(s,et()),a!==null)for(h=s.onRecoverableError,u=0;u<a.length;u++)g=a[u],h(g.value,{componentStack:g.stack,digest:g.digest});if(Sd)throw Sd=!1,s=hm,hm=null,s;return(Ed&1)!==0&&s.tag!==0&&jo(),b=s.pendingLanes,(b&1)!==0?s===fm?uu++:(uu=0,fm=s):uu=0,Ys(),null}function jo(){if(ti!==null){var s=zs(Ed),a=Xn.transition,u=ze;try{if(Xn.transition=null,ze=16>s?16:s,ti===null)var h=!1;else{if(s=ti,ti=null,Ed=0,(We&6)!==0)throw Error(n(331));var g=We;for(We|=4,pe=s.current;pe!==null;){var b=pe,k=b.child;if((pe.flags&16)!==0){var R=b.deletions;if(R!==null){for(var V=0;V<R.length;V++){var X=R[V];for(pe=X;pe!==null;){var ne=pe;switch(ne.tag){case 0:case 11:case 15:au(8,ne,b)}var ie=ne.child;if(ie!==null)ie.return=ne,pe=ie;else for(;pe!==null;){ne=pe;var te=ne.sibling,he=ne.return;if(W1(ne),ne===X){pe=null;break}if(te!==null){te.return=he,pe=te;break}pe=he}}}var me=b.alternate;if(me!==null){var ge=me.child;if(ge!==null){me.child=null;do{var xt=ge.sibling;ge.sibling=null,ge=xt}while(ge!==null)}}pe=b}}if((b.subtreeFlags&2064)!==0&&k!==null)k.return=b,pe=k;else e:for(;pe!==null;){if(b=pe,(b.flags&2048)!==0)switch(b.tag){case 0:case 11:case 15:au(9,b,b.return)}var K=b.sibling;if(K!==null){K.return=b.return,pe=K;break e}pe=b.return}}var q=s.current;for(pe=q;pe!==null;){k=pe;var J=k.child;if((k.subtreeFlags&2064)!==0&&J!==null)J.return=k,pe=J;else e:for(k=q;pe!==null;){if(R=pe,(R.flags&2048)!==0)try{switch(R.tag){case 0:case 11:case 15:bd(9,R)}}catch(be){yt(R,R.return,be)}if(R===k){pe=null;break e}var le=R.sibling;if(le!==null){le.return=R.return,pe=le;break e}pe=R.return}}if(We=g,Ys(),Nn&&typeof Nn.onPostCommitFiberRoot=="function")try{Nn.onPostCommitFiberRoot(qi,s)}catch{}h=!0}return h}finally{ze=u,Xn.transition=a}}return!1}function lb(s,a,u){a=_o(u,a),a=C1(s,a,1),s=Xs(s,a,1),a=mn(),s!==null&&(Vs(s,1,a),Cn(s,a))}function yt(s,a,u){if(s.tag===3)lb(s,s,u);else for(;a!==null;){if(a.tag===3){lb(a,s,u);break}else if(a.tag===1){var h=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(ei===null||!ei.has(h))){s=_o(u,s),s=T1(a,s,1),a=Xs(a,s,1),s=mn(),a!==null&&(Vs(a,1,s),Cn(a,s));break}}a=a.return}}function x3(s,a,u){var h=s.pingCache;h!==null&&h.delete(a),a=mn(),s.pingedLanes|=s.suspendedLanes&u,zt===s&&(Qt&u)===u&&(Ot===4||Ot===3&&(Qt&130023424)===Qt&&500>et()-dm?aa(s,0):cm|=u),Cn(s,a)}function ub(s,a){a===0&&((s.mode&1)===0?a=1:(a=Za,Za<<=1,(Za&130023424)===0&&(Za=4194304)));var u=mn();s=vs(s,a),s!==null&&(Vs(s,a,u),Cn(s,u))}function S3(s){var a=s.memoizedState,u=0;a!==null&&(u=a.retryLane),ub(s,u)}function k3(s,a){var u=0;switch(s.tag){case 13:var h=s.stateNode,g=s.memoizedState;g!==null&&(u=g.retryLane);break;case 19:h=s.stateNode;break;default:throw Error(n(314))}h!==null&&h.delete(a),ub(s,u)}var cb;cb=function(s,a,u){if(s!==null)if(s.memoizedProps!==a.pendingProps||xn.current)kn=!0;else{if((s.lanes&u)===0&&(a.flags&128)===0)return kn=!1,c3(s,a,u);kn=(s.flags&131072)!==0}else kn=!1,ot&&(a.flags&1048576)!==0&&z0(a,nd,a.index);switch(a.lanes=0,a.tag){case 2:var h=a.type;yd(s,a),s=a.pendingProps;var g=bo(a,tn.current);Co(a,u),g=$p(null,a,h,s,g,u);var b=qp();return a.flags|=1,typeof g=="object"&&g!==null&&typeof g.render=="function"&&g.$$typeof===void 0?(a.tag=1,a.memoizedState=null,a.updateQueue=null,Sn(h)?(b=!0,Zc(a)):b=!1,a.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,Op(a),g.updater=md,a.stateNode=g,g._reactInternals=a,Yp(a,h,s,u),a=em(null,a,h,!0,b,u)):(a.tag=0,ot&&b&&Tp(a),pn(null,a,g,u),a=a.child),a;case 16:h=a.elementType;e:{switch(yd(s,a),s=a.pendingProps,g=h._init,h=g(h._payload),a.type=h,g=a.tag=C3(h),s=_r(h,s),g){case 0:a=Zp(null,a,h,s,u);break e;case 1:a=L1(null,a,h,s,u);break e;case 11:a=A1(null,a,h,s,u);break e;case 14:a=j1(null,a,h,_r(h.type,s),u);break e}throw Error(n(306,h,""))}return a;case 0:return h=a.type,g=a.pendingProps,g=a.elementType===h?g:_r(h,g),Zp(s,a,h,g,u);case 1:return h=a.type,g=a.pendingProps,g=a.elementType===h?g:_r(h,g),L1(s,a,h,g,u);case 3:e:{if(O1(a),s===null)throw Error(n(387));h=a.pendingProps,b=a.memoizedState,g=b.element,J0(s,a),ld(a,h,null,u);var k=a.memoizedState;if(h=k.element,b.isDehydrated)if(b={element:h,isDehydrated:!1,cache:k.cache,pendingSuspenseBoundaries:k.pendingSuspenseBoundaries,transitions:k.transitions},a.updateQueue.baseState=b,a.memoizedState=b,a.flags&256){g=_o(Error(n(423)),a),a=M1(s,a,h,u,g);break e}else if(h!==g){g=_o(Error(n(424)),a),a=M1(s,a,h,u,g);break e}else for(Mn=Gs(a.stateNode.containerInfo.firstChild),On=a,ot=!0,Tr=null,u=Q0(a,null,h,u),a.child=u;u;)u.flags=u.flags&-3|4096,u=u.sibling;else{if(So(),h===g){a=ws(s,a,u);break e}pn(s,a,h,u)}a=a.child}return a;case 5:return e1(a),s===null&&Pp(a),h=a.type,g=a.pendingProps,b=s!==null?s.memoizedProps:null,k=g.children,wp(h,g)?k=null:b!==null&&wp(h,b)&&(a.flags|=32),R1(s,a),pn(s,a,k,u),a.child;case 6:return s===null&&Pp(a),null;case 13:return F1(s,a,u);case 4:return Mp(a,a.stateNode.containerInfo),h=a.pendingProps,s===null?a.child=ko(a,null,h,u):pn(s,a,h,u),a.child;case 11:return h=a.type,g=a.pendingProps,g=a.elementType===h?g:_r(h,g),A1(s,a,h,g,u);case 7:return pn(s,a,a.pendingProps,u),a.child;case 8:return pn(s,a,a.pendingProps.children,u),a.child;case 12:return pn(s,a,a.pendingProps.children,u),a.child;case 10:e:{if(h=a.type._context,g=a.pendingProps,b=a.memoizedProps,k=g.value,tt(id,h._currentValue),h._currentValue=k,b!==null)if(Cr(b.value,k)){if(b.children===g.children&&!xn.current){a=ws(s,a,u);break e}}else for(b=a.child,b!==null&&(b.return=a);b!==null;){var R=b.dependencies;if(R!==null){k=b.child;for(var V=R.firstContext;V!==null;){if(V.context===h){if(b.tag===1){V=bs(-1,u&-u),V.tag=2;var X=b.updateQueue;if(X!==null){X=X.shared;var ne=X.pending;ne===null?V.next=V:(V.next=ne.next,ne.next=V),X.pending=V}}b.lanes|=u,V=b.alternate,V!==null&&(V.lanes|=u),Rp(b.return,u,a),R.lanes|=u;break}V=V.next}}else if(b.tag===10)k=b.type===a.type?null:b.child;else if(b.tag===18){if(k=b.return,k===null)throw Error(n(341));k.lanes|=u,R=k.alternate,R!==null&&(R.lanes|=u),Rp(k,u,a),k=b.sibling}else k=b.child;if(k!==null)k.return=b;else for(k=b;k!==null;){if(k===a){k=null;break}if(b=k.sibling,b!==null){b.return=k.return,k=b;break}k=k.return}b=k}pn(s,a,g.children,u),a=a.child}return a;case 9:return g=a.type,h=a.pendingProps.children,Co(a,u),g=Yn(g),h=h(g),a.flags|=1,pn(s,a,h,u),a.child;case 14:return h=a.type,g=_r(h,a.pendingProps),g=_r(h.type,g),j1(s,a,h,g,u);case 15:return N1(s,a,a.type,a.pendingProps,u);case 17:return h=a.type,g=a.pendingProps,g=a.elementType===h?g:_r(h,g),yd(s,a),a.tag=1,Sn(h)?(s=!0,Zc(a)):s=!1,Co(a,u),k1(a,h,g),Yp(a,h,g,u),em(null,a,h,!0,s,u);case 19:return V1(s,a,u);case 22:return D1(s,a,u)}throw Error(n(156,a.tag))};function db(s,a){return Ja(s,a)}function E3(s,a,u,h){this.tag=s,this.key=u,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(s,a,u,h){return new E3(s,a,u,h)}function bm(s){return s=s.prototype,!(!s||!s.isReactComponent)}function C3(s){if(typeof s=="function")return bm(s)?1:0;if(s!=null){if(s=s.$$typeof,s===H)return 11;if(s===Oe)return 14}return 2}function si(s,a){var u=s.alternate;return u===null?(u=Zn(s.tag,a,s.key,s.mode),u.elementType=s.elementType,u.type=s.type,u.stateNode=s.stateNode,u.alternate=s,s.alternate=u):(u.pendingProps=a,u.type=s.type,u.flags=0,u.subtreeFlags=0,u.deletions=null),u.flags=s.flags&14680064,u.childLanes=s.childLanes,u.lanes=s.lanes,u.child=s.child,u.memoizedProps=s.memoizedProps,u.memoizedState=s.memoizedState,u.updateQueue=s.updateQueue,a=s.dependencies,u.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},u.sibling=s.sibling,u.index=s.index,u.ref=s.ref,u}function Id(s,a,u,h,g,b){var k=2;if(h=s,typeof s=="function")bm(s)&&(k=1);else if(typeof s=="string")k=5;else e:switch(s){case P:return la(u.children,g,b,a);case _:k=8,g|=8;break;case A:return s=Zn(12,u,a,g|2),s.elementType=A,s.lanes=b,s;case D:return s=Zn(13,u,a,g),s.elementType=D,s.lanes=b,s;case ve:return s=Zn(19,u,a,g),s.elementType=ve,s.lanes=b,s;case Ae:return Pd(u,g,b,a);default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case F:k=10;break e;case z:k=9;break e;case H:k=11;break e;case Oe:k=14;break e;case Ue:k=16,h=null;break e}throw Error(n(130,s==null?s:typeof s,""))}return a=Zn(k,u,a,g),a.elementType=s,a.type=h,a.lanes=b,a}function la(s,a,u,h){return s=Zn(7,s,h,a),s.lanes=u,s}function Pd(s,a,u,h){return s=Zn(22,s,h,a),s.elementType=Ae,s.lanes=u,s.stateNode={isHidden:!1},s}function wm(s,a,u){return s=Zn(6,s,null,a),s.lanes=u,s}function xm(s,a,u){return a=Zn(4,s.children!==null?s.children:[],s.key,a),a.lanes=u,a.stateNode={containerInfo:s.containerInfo,pendingChildren:null,implementation:s.implementation},a}function T3(s,a,u,h,g){this.tag=a,this.containerInfo=s,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Us(0),this.expirationTimes=Us(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Us(0),this.identifierPrefix=h,this.onRecoverableError=g,this.mutableSourceEagerHydrationData=null}function Sm(s,a,u,h,g,b,k,R,V){return s=new T3(s,a,u,R,V),a===1?(a=1,b===!0&&(a|=8)):a=0,b=Zn(3,null,null,a),s.current=b,b.stateNode=s,b.memoizedState={element:h,isDehydrated:u,cache:null,transitions:null,pendingSuspenseBoundaries:null},Op(b),s}function _3(s,a,u){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Z,key:h==null?null:""+h,children:s,containerInfo:a,implementation:u}}function hb(s){if(!s)return Qs;s=s._reactInternals;e:{if(vr(s)!==s||s.tag!==1)throw Error(n(170));var a=s;do{switch(a.tag){case 3:a=a.stateNode.context;break e;case 1:if(Sn(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break e}}a=a.return}while(a!==null);throw Error(n(171))}if(s.tag===1){var u=s.type;if(Sn(u))return U0(s,u,a)}return a}function fb(s,a,u,h,g,b,k,R,V){return s=Sm(u,h,!0,s,g,b,k,R,V),s.context=hb(null),u=s.current,h=mn(),g=ni(u),b=bs(h,g),b.callback=a??null,Xs(u,b,g),s.current.lanes=g,Vs(s,g,h),Cn(s,h),s}function Ad(s,a,u,h){var g=a.current,b=mn(),k=ni(g);return u=hb(u),a.context===null?a.context=u:a.pendingContext=u,a=bs(b,k),a.payload={element:s},h=h===void 0?null:h,h!==null&&(a.callback=h),s=Xs(g,a,k),s!==null&&(Ar(s,g,k,b),od(s,g,k)),k}function jd(s){if(s=s.current,!s.child)return null;switch(s.child.tag){case 5:return s.child.stateNode;default:return s.child.stateNode}}function pb(s,a){if(s=s.memoizedState,s!==null&&s.dehydrated!==null){var u=s.retryLane;s.retryLane=u!==0&&u<a?u:a}}function km(s,a){pb(s,a),(s=s.alternate)&&pb(s,a)}function I3(){return null}var mb=typeof reportError=="function"?reportError:function(s){console.error(s)};function Em(s){this._internalRoot=s}Nd.prototype.render=Em.prototype.render=function(s){var a=this._internalRoot;if(a===null)throw Error(n(409));Ad(s,a,null,null)},Nd.prototype.unmount=Em.prototype.unmount=function(){var s=this._internalRoot;if(s!==null){this._internalRoot=null;var a=s.containerInfo;ia(function(){Ad(null,s,null,null)}),a[ps]=null}};function Nd(s){this._internalRoot=s}Nd.prototype.unstable_scheduleHydration=function(s){if(s){var a=Nc();s={blockedOn:null,target:s,priority:a};for(var u=0;u<Ur.length&&a!==0&&a<Ur[u].priority;u++);Ur.splice(u,0,s),u===0&&Lc(s)}};function Cm(s){return!(!s||s.nodeType!==1&&s.nodeType!==9&&s.nodeType!==11)}function Dd(s){return!(!s||s.nodeType!==1&&s.nodeType!==9&&s.nodeType!==11&&(s.nodeType!==8||s.nodeValue!==" react-mount-point-unstable "))}function gb(){}function P3(s,a,u,h,g){if(g){if(typeof h=="function"){var b=h;h=function(){var X=jd(k);b.call(X)}}var k=fb(a,h,s,0,null,!1,!1,"",gb);return s._reactRootContainer=k,s[ps]=k.current,Gl(s.nodeType===8?s.parentNode:s),ia(),k}for(;g=s.lastChild;)s.removeChild(g);if(typeof h=="function"){var R=h;h=function(){var X=jd(V);R.call(X)}}var V=Sm(s,0,!1,null,null,!1,!1,"",gb);return s._reactRootContainer=V,s[ps]=V.current,Gl(s.nodeType===8?s.parentNode:s),ia(function(){Ad(a,V,u,h)}),V}function Rd(s,a,u,h,g){var b=u._reactRootContainer;if(b){var k=b;if(typeof g=="function"){var R=g;g=function(){var V=jd(k);R.call(V)}}Ad(a,k,s,g)}else k=P3(u,a,s,g,h);return jd(k)}Ac=function(s){switch(s.tag){case 3:var a=s.stateNode;if(a.current.memoizedState.isDehydrated){var u=Fs(a.pendingLanes);u!==0&&(Bs(a,u|1),Cn(a,et()),(We&6)===0&&(Ao=et()+500,Ys()))}break;case 13:ia(function(){var h=vs(s,1);if(h!==null){var g=mn();Ar(h,s,1,g)}}),km(s,1)}},eo=function(s){if(s.tag===13){var a=vs(s,134217728);if(a!==null){var u=mn();Ar(a,s,134217728,u)}km(s,134217728)}},jc=function(s){if(s.tag===13){var a=ni(s),u=vs(s,a);if(u!==null){var h=mn();Ar(u,s,a,h)}km(s,a)}},Nc=function(){return ze},Dc=function(s,a){var u=ze;try{return ze=s,a()}finally{ze=u}},Ha=function(s,a,u){switch(a){case"input":if(vl(s,u),a=u.name,u.type==="radio"&&a!=null){for(u=s;u.parentNode;)u=u.parentNode;for(u=u.querySelectorAll("input[name="+JSON.stringify(""+a)+'][type="radio"]'),a=0;a<u.length;a++){var h=u[a];if(h!==s&&h.form===s.form){var g=Jc(h);if(!g)throw Error(n(90));Ct(h),vl(h,g)}}}break;case"textarea":$a(s,u);break;case"select":a=u.value,a!=null&&as(s,!!u.multiple,a,!1)}},Ui=gm,Il=ia;var A3={usingClientEntryPoint:!1,Events:[Yl,yo,Jc,Mr,_l,gm]},cu={findFiberByHostInstance:Ji,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},j3={bundleType:cu.bundleType,version:cu.version,rendererPackageName:cu.rendererPackageName,rendererConfig:cu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(s){return s=jl(s),s===null?null:s.stateNode},findFiberByHostInstance:cu.findFiberByHostInstance||I3,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ld=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ld.isDisabled&&Ld.supportsFiber)try{qi=Ld.inject(j3),Nn=Ld}catch{}}return Tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A3,Tn.createPortal=function(s,a){var u=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cm(a))throw Error(n(200));return _3(s,a,null,u)},Tn.createRoot=function(s,a){if(!Cm(s))throw Error(n(299));var u=!1,h="",g=mb;return a!=null&&(a.unstable_strictMode===!0&&(u=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onRecoverableError!==void 0&&(g=a.onRecoverableError)),a=Sm(s,1,!1,null,null,u,!1,h,g),s[ps]=a.current,Gl(s.nodeType===8?s.parentNode:s),new Em(a)},Tn.findDOMNode=function(s){if(s==null)return null;if(s.nodeType===1)return s;var a=s._reactInternals;if(a===void 0)throw typeof s.render=="function"?Error(n(188)):(s=Object.keys(s).join(","),Error(n(268,s)));return s=jl(a),s=s===null?null:s.stateNode,s},Tn.flushSync=function(s){return ia(s)},Tn.hydrate=function(s,a,u){if(!Dd(a))throw Error(n(200));return Rd(null,s,a,!0,u)},Tn.hydrateRoot=function(s,a,u){if(!Cm(s))throw Error(n(405));var h=u!=null&&u.hydratedSources||null,g=!1,b="",k=mb;if(u!=null&&(u.unstable_strictMode===!0&&(g=!0),u.identifierPrefix!==void 0&&(b=u.identifierPrefix),u.onRecoverableError!==void 0&&(k=u.onRecoverableError)),a=fb(a,null,s,1,u??null,g,!1,b,k),s[ps]=a.current,Gl(s),h)for(s=0;s<h.length;s++)u=h[s],g=u._getVersion,g=g(u._source),a.mutableSourceEagerHydrationData==null?a.mutableSourceEagerHydrationData=[u,g]:a.mutableSourceEagerHydrationData.push(u,g);return new Nd(a)},Tn.render=function(s,a,u){if(!Dd(a))throw Error(n(200));return Rd(null,s,a,!1,u)},Tn.unmountComponentAtNode=function(s){if(!Dd(s))throw Error(n(40));return s._reactRootContainer?(ia(function(){Rd(null,null,s,!1,function(){s._reactRootContainer=null,s[ps]=null})}),!0):!1},Tn.unstable_batchedUpdates=gm,Tn.unstable_renderSubtreeIntoContainer=function(s,a,u,h){if(!Dd(u))throw Error(n(200));if(s==null||s._reactInternals===void 0)throw Error(n(38));return Rd(s,a,u,!1,h)},Tn.version="18.3.1-next-f1338f8080-20240426",Tn}var Ib;function oS(){if(Ib)return Tm.exports;Ib=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),Tm.exports=V3(),Tm.exports}var Pb;function B3(){if(Pb)return Od;Pb=1;var t=oS();return Od.createRoot=t.createRoot,Od.hydrateRoot=t.hydrateRoot,Od}var z3=B3();const $3=Ty(z3);oS();/**
* @remix-run/router v1.23.0
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/function Vu(){return Vu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Vu.apply(this,arguments)}var pi;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(pi||(pi={}));const Ab="popstate";function q3(t){t===void 0&&(t={});function e(r,i){let{pathname:o,search:l,hash:d}=r.location;return Tg("",{pathname:o,search:l,hash:d},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:jh(i)}return W3(e,n,null,t)}function mt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function lS(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function H3(){return Math.random().toString(36).substr(2,8)}function jb(t,e){return{usr:t.state,key:t.key,idx:e}}function Tg(t,e,n,r){return n===void 0&&(n=null),Vu({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?cl(e):e,{state:n,key:e&&e.key||r||H3()})}function jh(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function cl(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function W3(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,d=pi.Pop,f=null,p=y();p==null&&(p=0,l.replaceState(Vu({},l.state,{idx:p}),""));function y(){return(l.state||{idx:null}).idx}function w(){d=pi.Pop;let I=y(),B=I==null?null:I-p;p=I,f&&f({action:d,location:N.location,delta:B})}function S(I,B){d=pi.Push;let M=Tg(N.location,I,B);p=y()+1;let $=jb(M,p),L=N.createHref(M);try{l.pushState($,"",L)}catch(W){if(W instanceof DOMException&&W.name==="DataCloneError")throw W;i.location.assign(L)}o&&f&&f({action:d,location:N.location,delta:1})}function E(I,B){d=pi.Replace;let M=Tg(N.location,I,B);p=y();let $=jb(M,p),L=N.createHref(M);l.replaceState($,"",L),o&&f&&f({action:d,location:N.location,delta:0})}function C(I){let B=i.location.origin!=="null"?i.location.origin:i.location.href,M=typeof I=="string"?I:jh(I);return M=M.replace(/ $/,"%20"),mt(B,"No window.location.(origin|href) available to create URL for href: "+M),new URL(M,B)}let N={get action(){return d},get location(){return t(i,l)},listen(I){if(f)throw new Error("A history only accepts one active listener");return i.addEventListener(Ab,w),f=I,()=>{i.removeEventListener(Ab,w),f=null}},createHref(I){return e(i,I)},createURL:C,encodeLocation(I){let B=C(I);return{pathname:B.pathname,search:B.search,hash:B.hash}},push:S,replace:E,go(I){return l.go(I)}};return N}var Nb;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Nb||(Nb={}));function G3(t,e,n){return n===void 0&&(n="/"),K3(t,e,n)}function K3(t,e,n,r){let i=typeof e=="string"?cl(e):e,o=Wo(i.pathname||"/",n);if(o==null)return null;let l=uS(t);Q3(l);let d=null;for(let f=0;d==null&&f<l.length;++f){let p=a5(o);d=s5(l[f],p)}return d}function uS(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,l,d)=>{let f={relativePath:d===void 0?o.path||"":d,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};f.relativePath.startsWith("/")&&(mt(f.relativePath.startsWith(r),'Absolute route path "'+f.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),f.relativePath=f.relativePath.slice(r.length));let p=gi([r,f.relativePath]),y=n.concat(f);o.children&&o.children.length>0&&(mt(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+p+'".')),uS(o.children,e,y,p)),!(o.path==null&&!o.index)&&e.push({path:p,score:n5(p,o.index),routesMeta:y})};return t.forEach((o,l)=>{var d;if(o.path===""||!((d=o.path)!=null&&d.includes("?")))i(o,l);else for(let f of cS(o.path))i(o,l,f)}),e}function cS(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=cS(r.join("/")),d=[];return d.push(...l.map(f=>f===""?o:[o,f].join("/"))),i&&d.push(...l),d.map(f=>t.startsWith("/")&&f===""?"/":f)}function Q3(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:r5(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Y3=/^:[\w-]+$/,J3=3,X3=2,Z3=1,e5=10,t5=-2,Db=t=>t==="*";function n5(t,e){let n=t.split("/"),r=n.length;return n.some(Db)&&(r+=t5),e&&(r+=X3),n.filter(i=>!Db(i)).reduce((i,o)=>i+(Y3.test(o)?J3:o===""?Z3:e5),r)}function r5(t,e){return t.length===e.length&&t.slice(0,-1).every((n,r)=>n===e[r])?t[t.length-1]-e[e.length-1]:0}function s5(t,e,n){let{routesMeta:r}=t,i={},o="/",l=[];for(let d=0;d<r.length;++d){let f=r[d],p=d===r.length-1,y=o==="/"?e:e.slice(o.length)||"/",w=_g({path:f.relativePath,caseSensitive:f.caseSensitive,end:p},y),S=f.route;if(!w)return null;Object.assign(i,w.params),l.push({params:i,pathname:gi([o,w.pathname]),pathnameBase:c5(gi([o,w.pathnameBase])),route:S}),w.pathnameBase!=="/"&&(o=gi([o,w.pathnameBase]))}return l}function _g(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=i5(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),d=i.slice(1);return{params:r.reduce((f,p,y)=>{let{paramName:w,isOptional:S}=p;if(w==="*"){let C=d[y]||"";l=o.slice(0,o.length-C.length).replace(/(.)\/+$/,"$1")}const E=d[y];return S&&!E?f[w]=void 0:f[w]=(E||"").replace(/%2F/g,"/"),f},{}),pathname:o,pathnameBase:l,pattern:t}}function i5(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),lS(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,d)=>(r.push({paramName:l,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function a5(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return lS(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Wo(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function o5(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?cl(t):t;return{pathname:n?n.startsWith("/")?n:l5(n,e):e,search:d5(r),hash:h5(i)}}function l5(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function _m(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function u5(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Iy(t,e){let n=u5(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Py(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=cl(t):(i=Vu({},t),mt(!i.pathname||!i.pathname.includes("?"),_m("?","pathname","search",i)),mt(!i.pathname||!i.pathname.includes("#"),_m("#","pathname","hash",i)),mt(!i.search||!i.search.includes("#"),_m("#","search","hash",i)));let o=t===""||i.pathname==="",l=o?"/":i.pathname,d;if(l==null)d=n;else{let w=e.length-1;if(!r&&l.startsWith("..")){let S=l.split("/");for(;S[0]==="..";)S.shift(),w-=1;i.pathname=S.join("/")}d=w>=0?e[w]:"/"}let f=o5(i,d),p=l&&l!=="/"&&l.endsWith("/"),y=(o||l===".")&&n.endsWith("/");return!f.pathname.endsWith("/")&&(p||y)&&(f.pathname+="/"),f}const gi=t=>t.join("/").replace(/\/\/+/g,"/"),c5=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),d5=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,h5=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function f5(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const dS=["post","put","patch","delete"];new Set(dS);const p5=["get",...dS];new Set(p5);/**
* React Router v6.30.1
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/function Bu(){return Bu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Bu.apply(this,arguments)}const df=O.createContext(null),hS=O.createContext(null),Ls=O.createContext(null),hf=O.createContext(null),rs=O.createContext({outlet:null,matches:[],isDataRoute:!1}),fS=O.createContext(null);function m5(t,e){let{relative:n}=e===void 0?{}:e;dl()||mt(!1);let{basename:r,navigator:i}=O.useContext(Ls),{hash:o,pathname:l,search:d}=ff(t,{relative:n}),f=l;return r!=="/"&&(f=l==="/"?r:gi([r,l])),i.createHref({pathname:f,search:d,hash:o})}function dl(){return O.useContext(hf)!=null}function Ai(){return dl()||mt(!1),O.useContext(hf).location}function pS(t){O.useContext(Ls).static||O.useLayoutEffect(t)}function Ay(){let{isDataRoute:t}=O.useContext(rs);return t?j5():g5()}function g5(){dl()||mt(!1);let t=O.useContext(df),{basename:e,future:n,navigator:r}=O.useContext(Ls),{matches:i}=O.useContext(rs),{pathname:o}=Ai(),l=JSON.stringify(Iy(i,n.v7_relativeSplatPath)),d=O.useRef(!1);return pS(()=>{d.current=!0}),O.useCallback(function(f,p){if(p===void 0&&(p={}),!d.current)return;if(typeof f=="number"){r.go(f);return}let y=Py(f,JSON.parse(l),o,p.relative==="path");t==null&&e!=="/"&&(y.pathname=y.pathname==="/"?e:gi([e,y.pathname])),(p.replace?r.replace:r.push)(y,p.state,p)},[e,r,l,o,t])}const y5=O.createContext(null);function v5(t){let e=O.useContext(rs).outlet;return e&&O.createElement(y5.Provider,{value:t},e)}function b5(){let{matches:t}=O.useContext(rs),e=t[t.length-1];return e?e.params:{}}function ff(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=O.useContext(Ls),{matches:i}=O.useContext(rs),{pathname:o}=Ai(),l=JSON.stringify(Iy(i,r.v7_relativeSplatPath));return O.useMemo(()=>Py(t,JSON.parse(l),o,n==="path"),[t,l,o,n])}function w5(t,e){return x5(t,e)}function x5(t,e,n,r){dl()||mt(!1);let{navigator:i}=O.useContext(Ls),{matches:o}=O.useContext(rs),l=o[o.length-1],d=l?l.params:{};l&&l.pathname;let f=l?l.pathnameBase:"/";l&&l.route;let p=Ai(),y;if(e){var w;let I=typeof e=="string"?cl(e):e;f==="/"||(w=I.pathname)!=null&&w.startsWith(f)||mt(!1),y=I}else y=p;let S=y.pathname||"/",E=S;if(f!=="/"){let I=f.replace(/^\//,"").split("/");E="/"+S.replace(/^\//,"").split("/").slice(I.length).join("/")}let C=G3(t,{pathname:E}),N=T5(C&&C.map(I=>Object.assign({},I,{params:Object.assign({},d,I.params),pathname:gi([f,i.encodeLocation?i.encodeLocation(I.pathname).pathname:I.pathname]),pathnameBase:I.pathnameBase==="/"?f:gi([f,i.encodeLocation?i.encodeLocation(I.pathnameBase).pathname:I.pathnameBase])})),o,n,r);return e&&N?O.createElement(hf.Provider,{value:{location:Bu({pathname:"/",search:"",hash:"",state:null,key:"default"},y),navigationType:pi.Pop}},N):N}function S5(){let t=A5(),e=f5(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},e),n?O.createElement("pre",{style:r},n):null,null)}const k5=O.createElement(S5,null);class E5 extends O.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?O.createElement(rs.Provider,{value:this.props.routeContext},O.createElement(fS.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function C5(t){let{routeContext:e,match:n,children:r}=t,i=O.useContext(df);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),O.createElement(rs.Provider,{value:e},r)}function T5(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var o;if(!n)return null;if(n.errors)t=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let l=t,d=(i=n)==null?void 0:i.errors;if(d!=null){let y=l.findIndex(w=>w.route.id&&(d==null?void 0:d[w.route.id])!==void 0);y>=0||mt(!1),l=l.slice(0,Math.min(l.length,y+1))}let f=!1,p=-1;if(n&&r&&r.v7_partialHydration)for(let y=0;y<l.length;y++){let w=l[y];if((w.route.HydrateFallback||w.route.hydrateFallbackElement)&&(p=y),w.route.id){let{loaderData:S,errors:E}=n,C=w.route.loader&&S[w.route.id]===void 0&&(!E||E[w.route.id]===void 0);if(w.route.lazy||C){f=!0,p>=0?l=l.slice(0,p+1):l=[l[0]];break}}}return l.reduceRight((y,w,S)=>{let E,C=!1,N=null,I=null;n&&(E=d&&w.route.id?d[w.route.id]:void 0,N=w.route.errorElement||k5,f&&(p<0&&S===0?(N5("route-fallback"),C=!0,I=null):p===S&&(C=!0,I=w.route.hydrateFallbackElement||null)));let B=e.concat(l.slice(0,S+1)),M=()=>{let $;return E?$=N:C?$=I:w.route.Component?$=O.createElement(w.route.Component,null):w.route.element?$=w.route.element:$=y,O.createElement(C5,{match:w,routeContext:{outlet:y,matches:B,isDataRoute:n!=null},children:$})};return n&&(w.route.ErrorBoundary||w.route.errorElement||S===0)?O.createElement(E5,{location:n.location,revalidation:n.revalidation,component:N,error:E,children:M(),routeContext:{outlet:null,matches:B,isDataRoute:!0}}):M()},null)}var mS=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(mS||{}),gS=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(gS||{});function _5(t){let e=O.useContext(df);return e||mt(!1),e}function I5(t){let e=O.useContext(hS);return e||mt(!1),e}function P5(t){let e=O.useContext(rs);return e||mt(!1),e}function yS(t){let e=P5(),n=e.matches[e.matches.length-1];return n.route.id||mt(!1),n.route.id}function A5(){var t;let e=O.useContext(fS),n=I5(),r=yS();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function j5(){let{router:t}=_5(mS.UseNavigateStable),e=yS(gS.UseNavigateStable),n=O.useRef(!1);return pS(()=>{n.current=!0}),O.useCallback(function(r,i){i===void 0&&(i={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,Bu({fromRouteId:e},i)))},[t,e])}const Rb={};function N5(t,e,n){Rb[t]||(Rb[t]=!0)}function D5(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function R5(t){let{to:e,replace:n,state:r,relative:i}=t;dl()||mt(!1);let{future:o,static:l}=O.useContext(Ls),{matches:d}=O.useContext(rs),{pathname:f}=Ai(),p=Ay(),y=Py(e,Iy(d,o.v7_relativeSplatPath),f,i==="path"),w=JSON.stringify(y);return O.useEffect(()=>p(JSON.parse(w),{replace:n,state:r,relative:i}),[p,w,i,n,r]),null}function vS(t){return v5(t.context)}function Yt(t){mt(!1)}function L5(t){let{basename:e="/",children:n=null,location:r,navigationType:i=pi.Pop,navigator:o,static:l=!1,future:d}=t;dl()&&mt(!1);let f=e.replace(/^\/*/,"/"),p=O.useMemo(()=>({basename:f,navigator:o,static:l,future:Bu({v7_relativeSplatPath:!1},d)}),[f,d,o,l]);typeof r=="string"&&(r=cl(r));let{pathname:y="/",search:w="",hash:S="",state:E=null,key:C="default"}=r,N=O.useMemo(()=>{let I=Wo(y,f);return I==null?null:{location:{pathname:I,search:w,hash:S,state:E,key:C},navigationType:i}},[f,y,w,S,E,C,i]);return N==null?null:O.createElement(Ls.Provider,{value:p},O.createElement(hf.Provider,{children:n,value:N}))}function O5(t){let{children:e,location:n}=t;return w5(Ig(e),n)}new Promise(()=>{});function Ig(t,e){e===void 0&&(e=[]);let n=[];return O.Children.forEach(t,(r,i)=>{if(!O.isValidElement(r))return;let o=[...e,i];if(r.type===O.Fragment){n.push.apply(n,Ig(r.props.children,o));return}r.type!==Yt&&mt(!1),!r.props.index||!r.props.children||mt(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=Ig(r.props.children,o)),n.push(l)}),n}/**
* React Router DOM v6.30.1
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/function Nh(){return Nh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Nh.apply(this,arguments)}function bS(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function M5(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function F5(t,e){return t.button===0&&(!e||e==="_self")&&!M5(t)}const U5=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],V5=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],B5="6";try{window.__reactRouterVersion=B5}catch{}const z5=O.createContext({isTransitioning:!1}),$5="startTransition",Lb=M3[$5];function q5(t){let{basename:e,children:n,future:r,window:i}=t,o=O.useRef();o.current==null&&(o.current=q3({window:i,v5Compat:!0}));let l=o.current,[d,f]=O.useState({action:l.action,location:l.location}),{v7_startTransition:p}=r||{},y=O.useCallback(w=>{p&&Lb?Lb(()=>f(w)):f(w)},[f,p]);return O.useLayoutEffect(()=>l.listen(y),[l,y]),O.useEffect(()=>D5(r),[r]),O.createElement(L5,{basename:e,children:n,location:d.location,navigationType:d.action,navigator:l,future:r})}const H5=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",W5=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,fr=O.forwardRef(function(t,e){let{onClick:n,relative:r,reloadDocument:i,replace:o,state:l,target:d,to:f,preventScrollReset:p,viewTransition:y}=t,w=bS(t,U5),{basename:S}=O.useContext(Ls),E,C=!1;if(typeof f=="string"&&W5.test(f)&&(E=f,H5))try{let M=new URL(window.location.href),$=f.startsWith("//")?new URL(M.protocol+f):new URL(f),L=Wo($.pathname,S);$.origin===M.origin&&L!=null?f=L+$.search+$.hash:C=!0}catch{}let N=m5(f,{relative:r}),I=Q5(f,{replace:o,state:l,target:d,preventScrollReset:p,relative:r,viewTransition:y});function B(M){n&&n(M),M.defaultPrevented||I(M)}return O.createElement("a",Nh({},w,{href:E||N,onClick:C||i?n:B,ref:e,target:d}))}),G5=O.forwardRef(function(t,e){let{"aria-current":n="page",caseSensitive:r=!1,className:i="",end:o=!1,style:l,to:d,viewTransition:f,children:p}=t,y=bS(t,V5),w=ff(d,{relative:y.relative}),S=Ai(),E=O.useContext(hS),{navigator:C,basename:N}=O.useContext(Ls),I=E!=null&&Y5(w)&&f===!0,B=C.encodeLocation?C.encodeLocation(w).pathname:w.pathname,M=S.pathname,$=E&&E.navigation&&E.navigation.location?E.navigation.location.pathname:null;r||(M=M.toLowerCase(),$=$?$.toLowerCase():null,B=B.toLowerCase()),$&&N&&($=Wo($,N)||$);const L=B!=="/"&&B.endsWith("/")?B.length-1:B.length;let W=M===B||!o&&M.startsWith(B)&&M.charAt(L)==="/",Z=$!=null&&($===B||!o&&$.startsWith(B)&&$.charAt(B.length)==="/"),P={isActive:W,isPending:Z,isTransitioning:I},_=W?n:void 0,A;typeof i=="function"?A=i(P):A=[i,W?"active":null,Z?"pending":null,I?"transitioning":null].filter(Boolean).join(" ");let F=typeof l=="function"?l(P):l;return O.createElement(fr,Nh({},y,{"aria-current":_,className:A,ref:e,style:F,to:d,viewTransition:f}),typeof p=="function"?p(P):p)});var Pg;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Pg||(Pg={}));var Ob;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Ob||(Ob={}));function K5(t){let e=O.useContext(df);return e||mt(!1),e}function Q5(t,e){let{target:n,replace:r,state:i,preventScrollReset:o,relative:l,viewTransition:d}=e===void 0?{}:e,f=Ay(),p=Ai(),y=ff(t,{relative:l});return O.useCallback(w=>{if(F5(w,n)){w.preventDefault();let S=r!==void 0?r:jh(p)===jh(y);f(t,{replace:S,state:i,preventScrollReset:o,relative:l,viewTransition:d})}},[p,f,y,r,i,n,t,o,l,d])}function Y5(t,e){e===void 0&&(e={});let n=O.useContext(z5);n==null&&mt(!1);let{basename:r}=K5(Pg.useViewTransitionState),i=ff(t,{relative:e.relative});if(!n.isTransitioning)return!1;let o=Wo(n.currentLocation.pathname,r)||n.currentLocation.pathname,l=Wo(n.nextLocation.pathname,r)||n.nextLocation.pathname;return _g(i.pathname,l)!=null||_g(i.pathname,o)!=null}var Mb={};/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const wS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},J5=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],l=t[n++],d=t[n++],f=((i&7)<<18|(o&63)<<12|(l&63)<<6|d&63)-65536;e[r++]=String.fromCharCode(55296+(f>>10)),e[r++]=String.fromCharCode(56320+(f&1023))}else{const o=t[n++],l=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|l&63)}}return e.join("")},xS={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],l=i+1<t.length,d=l?t[i+1]:0,f=i+2<t.length,p=f?t[i+2]:0,y=o>>2,w=(o&3)<<4|d>>4;let S=(d&15)<<2|p>>6,E=p&63;f||(E=64,l||(S=64)),r.push(n[y],n[w],n[S],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(wS(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):J5(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const d=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||l==null||d==null||f==null)throw new X5;const p=o<<2|l>>4;if(r.push(p),d!==64){const y=l<<4&240|d>>2;if(r.push(y),f!==64){const w=d<<6&192|f;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class X5 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Z5=function(t){const e=wS(t);return xS.encodeByteArray(e,!0)},Dh=function(t){return Z5(t).replace(/\./g,"")},SS=function(t){try{return xS.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function e_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const t_=()=>e_().__FIREBASE_DEFAULTS__,n_=()=>{if(typeof process>"u"||typeof Mb>"u")return;const t=Mb.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},r_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&SS(t[1]);return e&&JSON.parse(e)},pf=()=>{try{return t_()||n_()||r_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},kS=t=>{var e,n;return(n=(e=pf())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ES=t=>{const e=kS(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},CS=()=>{var t;return(t=pf())===null||t===void 0?void 0:t.config},TS=t=>{var e;return(e=pf())===null||e===void 0?void 0:e[`_${t}`]};/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class s_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function _S(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Dh(JSON.stringify(n)),Dh(JSON.stringify(l)),""].join(".")}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function dn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function i_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dn())}function a_(){var t;const e=(t=pf())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function o_(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function IS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function l_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function u_(){const t=dn();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function c_(){return!a_()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function PS(){try{return typeof indexedDB=="object"}catch{return!1}}function AS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}function d_(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const h_="FirebaseError";class pr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=h_,Object.setPrototypeOf(this,pr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Na.prototype.create)}}class Na{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],l=o?f_(o,r):"Error",d=`${this.serviceName}: ${l} (${i}).`;return new pr(i,d,r)}}function f_(t,e){return t.replace(p_,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const p_=/\{\$([^}]+)}/g;function m_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function zu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],l=e[i];if(Fb(o)&&Fb(l)){if(!zu(o,l))return!1}else if(o!==l)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Fb(t){return t!==null&&typeof t=="object"}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function rc(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function wu(t){const e={};return t.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[r,i]=n.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function xu(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function g_(t,e){const n=new y_(t,e);return n.subscribe.bind(n)}class y_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");v_(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Im),i.error===void 0&&(i.error=Im),i.complete===void 0&&(i.complete=Im);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function v_(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Im(){}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const b_=1e3,w_=2,x_=4*60*60*1e3,S_=.5;function Ub(t,e=b_,n=w_){const r=e*Math.pow(n,t),i=Math.round(S_*r*(Math.random()-.5)*2);return Math.min(x_,r+i)}/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function ct(t){return t&&t._delegate?t._delegate:t}class cr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const da="[DEFAULT]";/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class k_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new s_;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(C_(e))try{this.getOrInitializeService({instanceIdentifier:da})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=da){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=da){return this.instances.has(e)}getOptions(e=da){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,l]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(o);r===d&&l.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const l=this.instances.get(i);return l&&e(l,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:E_(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=da){return this.component?this.component.multipleInstances?e:da:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function E_(t){return t===da?void 0:t}function C_(t){return t.instantiationMode==="EAGER"}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class T_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new k_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $e;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})($e||($e={}));const __={debug:$e.DEBUG,verbose:$e.VERBOSE,info:$e.INFO,warn:$e.WARN,error:$e.ERROR,silent:$e.SILENT},I_=$e.INFO,P_={[$e.DEBUG]:"log",[$e.VERBOSE]:"log",[$e.INFO]:"info",[$e.WARN]:"warn",[$e.ERROR]:"error"},A_=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=P_[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class mf{constructor(e){this.name=e,this._logLevel=I_,this._logHandler=A_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in $e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?__[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,$e.DEBUG,...e),this._logHandler(this,$e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,$e.VERBOSE,...e),this._logHandler(this,$e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,$e.INFO,...e),this._logHandler(this,$e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,$e.WARN,...e),this._logHandler(this,$e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,$e.ERROR,...e),this._logHandler(this,$e.ERROR,...e)}}const j_=(t,e)=>e.some(n=>t instanceof n);let Vb,Bb;function N_(){return Vb||(Vb=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function D_(){return Bb||(Bb=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jS=new WeakMap,Ag=new WeakMap,NS=new WeakMap,Pm=new WeakMap,jy=new WeakMap;function R_(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",l)},o=()=>{n(yi(t.result)),i()},l=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",l)});return e.then(n=>{n instanceof IDBCursor&&jS.set(n,t)}).catch(()=>{}),jy.set(e,t),e}function L_(t){if(Ag.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",l),t.removeEventListener("abort",l)},o=()=>{n(),i()},l=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",l),t.addEventListener("abort",l)});Ag.set(t,e)}let jg={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ag.get(t);if(e==="objectStoreNames")return t.objectStoreNames||NS.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function O_(t){jg=t(jg)}function M_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Am(this),e,...n);return NS.set(r,e.sort?e.sort():[e]),yi(r)}:D_().includes(t)?function(...e){return t.apply(Am(this),e),yi(jS.get(this))}:function(...e){return yi(t.apply(Am(this),e))}}function F_(t){return typeof t=="function"?M_(t):(t instanceof IDBTransaction&&L_(t),j_(t,N_())?new Proxy(t,jg):t)}function yi(t){if(t instanceof IDBRequest)return R_(t);if(Pm.has(t))return Pm.get(t);const e=F_(t);return e!==t&&(Pm.set(t,e),jy.set(e,t)),e}const Am=t=>jy.get(t);function DS(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const l=indexedDB.open(t,e),d=yi(l);return r&&l.addEventListener("upgradeneeded",f=>{r(yi(l.result),f.oldVersion,f.newVersion,yi(l.transaction),f)}),n&&l.addEventListener("blocked",f=>n(f.oldVersion,f.newVersion,f)),d.then(f=>{o&&f.addEventListener("close",()=>o()),i&&f.addEventListener("versionchange",p=>i(p.oldVersion,p.newVersion,p))}).catch(()=>{}),d}const U_=["get","getKey","getAll","getAllKeys","count"],V_=["put","add","delete","clear"],jm=new Map;function zb(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(jm.get(e))return jm.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=V_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||U_.includes(n)))return;const o=async function(l,...d){const f=this.transaction(l,i?"readwrite":"readonly");let p=f.store;return r&&(p=p.index(d.shift())),(await Promise.all([p[n](...d),i&&f.done]))[0]};return jm.set(e,o),o}O_(t=>({...t,get:(e,n,r)=>zb(e,n)||t.get(e,n,r),has:(e,n)=>!!zb(e,n)||t.has(e,n)}));/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class B_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(z_(e)){const n=e.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(e=>e).join(" ")}}function z_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ng="@firebase/app",$b="0.10.13";/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const As=new mf("@firebase/app"),$_="@firebase/app-compat",q_="@firebase/analytics-compat",H_="@firebase/analytics",W_="@firebase/app-check-compat",G_="@firebase/app-check",K_="@firebase/auth",Q_="@firebase/auth-compat",Y_="@firebase/database",J_="@firebase/data-connect",X_="@firebase/database-compat",Z_="@firebase/functions",eI="@firebase/functions-compat",tI="@firebase/installations",nI="@firebase/installations-compat",rI="@firebase/messaging",sI="@firebase/messaging-compat",iI="@firebase/performance",aI="@firebase/performance-compat",oI="@firebase/remote-config",lI="@firebase/remote-config-compat",uI="@firebase/storage",cI="@firebase/storage-compat",dI="@firebase/firestore",hI="@firebase/vertexai-preview",fI="@firebase/firestore-compat",pI="firebase",mI="10.14.1";/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Dg="[DEFAULT]",gI={[Ng]:"fire-core",[$_]:"fire-core-compat",[H_]:"fire-analytics",[q_]:"fire-analytics-compat",[G_]:"fire-app-check",[W_]:"fire-app-check-compat",[K_]:"fire-auth",[Q_]:"fire-auth-compat",[Y_]:"fire-rtdb",[J_]:"fire-data-connect",[X_]:"fire-rtdb-compat",[Z_]:"fire-fn",[eI]:"fire-fn-compat",[tI]:"fire-iid",[nI]:"fire-iid-compat",[rI]:"fire-fcm",[sI]:"fire-fcm-compat",[iI]:"fire-perf",[aI]:"fire-perf-compat",[oI]:"fire-rc",[lI]:"fire-rc-compat",[uI]:"fire-gcs",[cI]:"fire-gcs-compat",[dI]:"fire-fst",[fI]:"fire-fst-compat",[hI]:"fire-vertex","fire-js":"fire-js",[pI]:"fire-js-all"};/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Rh=new Map,yI=new Map,Rg=new Map;function qb(t,e){try{t.container.addComponent(e)}catch(n){As.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Rr(t){const e=t.name;if(Rg.has(e))return As.debug(`There were multiple attempts to register component ${e}.`),!1;Rg.set(e,t);for(const n of Rh.values())qb(n,t);for(const n of yI.values())qb(n,t);return!0}function ji(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Qr(t){return t.settings!==void 0}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const vI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},vi=new Na("app","Firebase",vI);/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class bI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new cr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vi.create("app-deleted",{appName:this._name})}}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Da=mI;function RS(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Dg,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw vi.create("bad-app-name",{appName:String(i)});if(n||(n=CS()),!n)throw vi.create("no-options");const o=Rh.get(i);if(o){if(zu(n,o.options)&&zu(r,o.config))return o;throw vi.create("duplicate-app",{appName:i})}const l=new T_(i);for(const f of Rg.values())l.addComponent(f);const d=new bI(n,r,l);return Rh.set(i,d),d}function gf(t=Dg){const e=Rh.get(t);if(!e&&t===Dg&&CS())return RS();if(!e)throw vi.create("no-app",{appName:t});return e}function Pn(t,e,n){var r;let i=(r=gI[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),l=e.match(/\s|\//);if(o||l){const d=[`Unable to register library "${i}" with version "${e}":`];o&&d.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&l&&d.push("and"),l&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),As.warn(d.join(" "));return}Rr(new cr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const wI="firebase-heartbeat-database",xI=1,$u="firebase-heartbeat-store";let Nm=null;function LS(){return Nm||(Nm=DS(wI,xI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore($u)}catch(n){console.warn(n)}}}}).catch(t=>{throw vi.create("idb-open",{originalErrorMessage:t.message})})),Nm}async function SI(t){try{const e=(await LS()).transaction($u),n=await e.objectStore($u).get(OS(t));return await e.done,n}catch(e){if(e instanceof pr)As.warn(e.message);else{const n=vi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});As.warn(n.message)}}}async function Hb(t,e){try{const n=(await LS()).transaction($u,"readwrite");await n.objectStore($u).put(e,OS(t)),await n.done}catch(n){if(n instanceof pr)As.warn(n.message);else{const r=vi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});As.warn(r.message)}}}function OS(t){return`${t.name}!${t.options.appId}`}/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const kI=1024,EI=30*24*60*60*1e3;class CI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _I(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Wb();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=EI}),this._storage.overwrite(this._heartbeatsCache))}catch(r){As.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Wb(),{heartbeatsToSend:r,unsentEntries:i}=TI(this._heartbeatsCache.heartbeats),o=Dh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return As.warn(n),""}}}function Wb(){return new Date().toISOString().substring(0,10)}function TI(t,e=kI){const n=[];let r=t.slice();for(const i of t){const o=n.find(l=>l.agent===i.agent);if(o){if(o.dates.push(i.date),Gb(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Gb(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class _I{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return PS()?AS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await SI(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Hb(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Hb(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Gb(t){return Dh(JSON.stringify({version:2,heartbeats:t})).length}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function II(t){Rr(new cr("platform-logger",e=>new B_(e),"PRIVATE")),Rr(new cr("heartbeat",e=>new CI(e),"PRIVATE")),Pn(Ng,$b,t),Pn(Ng,$b,"esm2017"),Pn("fire-js","")}II("");var PI="firebase",AI="10.14.1";/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/Pn(PI,AI,"app");function Ny(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function MS(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const jI=MS,FS=new Na("auth","Firebase",MS());/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Lh=new mf("@firebase/auth");function NI(t,...e){Lh.logLevel<=$e.WARN&&Lh.warn(`Auth (${Da}): ${t}`,...e)}function fh(t,...e){Lh.logLevel<=$e.ERROR&&Lh.error(`Auth (${Da}): ${t}`,...e)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function dr(t,...e){throw Ry(t,...e)}function jr(t,...e){return Ry(t,...e)}function Dy(t,e,n){const r=Object.assign(Object.assign({},jI()),{[e]:n});return new Na("auth","Firebase",r).create(e,{appName:t.name})}function bi(t){return Dy(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function DI(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&dr(t,"argument-error"),Dy(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ry(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return FS.create(t,...e)}function Ie(t,e,...n){if(!t)throw Ry(e,...n)}function Es(t){const e="INTERNAL ASSERTION FAILED: "+t;throw fh(e),new Error(e)}function js(t,e){t||Es(e)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Lg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function RI(){return Kb()==="http:"||Kb()==="https:"}function Kb(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function LI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(RI()||IS()||"connection"in navigator)?navigator.onLine:!0}function OI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class sc{constructor(e,n){this.shortDelay=e,this.longDelay=n,js(n>e,"Short delay should be less than long delay!"),this.isMobile=i_()||l_()}get(){return LI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Ly(t,e){js(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class US{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Es("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Es("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Es("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const MI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const FI=new sc(3e4,6e4);function Ra(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ni(t,e,n,r,i={}){return VS(t,i,async()=>{let o={},l={};r&&(e==="GET"?l=r:o={body:JSON.stringify(r)});const d=rc(Object.assign({key:t.config.apiKey},l)).slice(1),f=await t._getAdditionalHeaders();f["Content-Type"]="application/json",t.languageCode&&(f["X-Firebase-Locale"]=t.languageCode);const p=Object.assign({method:e,headers:f},o);return o_()||(p.referrerPolicy="no-referrer"),US.fetch()(BS(t,t.config.apiHost,n,d),p)})}async function VS(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},MI),e);try{const i=new VI(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const l=await o.json();if("needConfirmation"in l)throw Md(t,"account-exists-with-different-credential",l);if(o.ok&&!("errorMessage"in l))return l;{const d=o.ok?l.errorMessage:l.error.message,[f,p]=d.split(" : ");if(f==="FEDERATED_USER_ID_ALREADY_LINKED")throw Md(t,"credential-already-in-use",l);if(f==="EMAIL_EXISTS")throw Md(t,"email-already-in-use",l);if(f==="USER_DISABLED")throw Md(t,"user-disabled",l);const y=r[f]||f.toLowerCase().replace(/[_\s]+/g,"-");if(p)throw Dy(t,y,p);dr(t,y)}}catch(i){if(i instanceof pr)throw i;dr(t,"network-request-failed",{message:String(i)})}}async function yf(t,e,n,r,i={}){const o=await Ni(t,e,n,r,i);return"mfaPendingCredential"in o&&dr(t,"multi-factor-auth-required",{_serverResponse:o}),o}function BS(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Ly(t.config,i):`${t.config.apiScheme}://${i}`}function UI(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class VI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(jr(this.auth,"network-request-failed")),FI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Md(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=jr(t,e,r);return i.customData._tokenResponse=n,i}function Qb(t){return t!==void 0&&t.enterprise!==void 0}class BI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return UI(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function zI(t,e){return Ni(t,"GET","/v2/recaptchaConfig",Ra(t,e))}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function $I(t,e){return Ni(t,"POST","/v1/accounts:delete",e)}async function zS(t,e){return Ni(t,"POST","/v1/accounts:lookup",e)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function _u(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function qI(t,e=!1){const n=ct(t),r=await n.getIdToken(e),i=Oy(r);Ie(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,l=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:_u(Dm(i.auth_time)),issuedAtTime:_u(Dm(i.iat)),expirationTime:_u(Dm(i.exp)),signInProvider:l||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Dm(t){return Number(t)*1e3}function Oy(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return fh("JWT malformed, contained fewer than 3 sections"),null;try{const i=SS(n);return i?JSON.parse(i):(fh("Failed to decode base64 JWT payload"),null)}catch(i){return fh("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Yb(t){const e=Oy(t);return Ie(e,"internal-error"),Ie(typeof e.exp<"u","internal-error"),Ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function qu(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof pr&&HI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function HI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class WI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Og{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=_u(this.lastLoginAt),this.creationTime=_u(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function Oh(t){var e;const n=t.auth,r=await t.getIdToken(),i=await qu(t,zS(n,{idToken:r}));Ie(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const l=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?$S(o.providerUserInfo):[],d=KI(t.providerData,l),f=t.isAnonymous,p=!(t.email&&o.passwordHash)&&!(d!=null&&d.length),y=f?p:!1,w={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:d,metadata:new Og(o.createdAt,o.lastLoginAt),isAnonymous:y};Object.assign(t,w)}async function GI(t){const e=ct(t);await Oh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function KI(t,e){return[...t.filter(n=>!e.some(r=>r.providerId===n.providerId)),...e]}function $S(t){return t.map(e=>{var{providerId:n}=e,r=Ny(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function QI(t,e){const n=await VS(t,{},async()=>{const r=rc({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,l=BS(t,i,"/v1/token",`key=${o}`),d=await t._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",US.fetch()(l,{method:"POST",headers:d,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function YI(t,e){return Ni(t,"POST","/v2/accounts:revokeToken",Ra(t,e))}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class zo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ie(e.idToken,"internal-error"),Ie(typeof e.idToken<"u","internal-error"),Ie(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Yb(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Ie(e.length!==0,"internal-error");const n=Yb(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await QI(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,l=new zo;return r&&(Ie(typeof r=="string","internal-error",{appName:e}),l.refreshToken=r),i&&(Ie(typeof i=="string","internal-error",{appName:e}),l.accessToken=i),o&&(Ie(typeof o=="number","internal-error",{appName:e}),l.expirationTime=o),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new zo,this.toJSON())}_performRefresh(){return Es("not implemented")}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function ai(t,e){Ie(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Cs{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,o=Ny(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new WI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Og(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await qu(this,this.stsTokenManager.getToken(this.auth,e));return Ie(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return qI(this,e)}reload(){return GI(this)}_assign(e){this!==e&&(Ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Cs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Oh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Qr(this.auth.app))return Promise.reject(bi(this.auth));const e=await this.getIdToken();return await qu(this,$I(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,o,l,d,f,p,y;const w=(r=n.displayName)!==null&&r!==void 0?r:void 0,S=(i=n.email)!==null&&i!==void 0?i:void 0,E=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,C=(l=n.photoURL)!==null&&l!==void 0?l:void 0,N=(d=n.tenantId)!==null&&d!==void 0?d:void 0,I=(f=n._redirectEventId)!==null&&f!==void 0?f:void 0,B=(p=n.createdAt)!==null&&p!==void 0?p:void 0,M=(y=n.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:$,emailVerified:L,isAnonymous:W,providerData:Z,stsTokenManager:P}=n;Ie($&&P,e,"internal-error");const _=zo.fromJSON(this.name,P);Ie(typeof $=="string",e,"internal-error"),ai(w,e.name),ai(S,e.name),Ie(typeof L=="boolean",e,"internal-error"),Ie(typeof W=="boolean",e,"internal-error"),ai(E,e.name),ai(C,e.name),ai(N,e.name),ai(I,e.name),ai(B,e.name),ai(M,e.name);const A=new Cs({uid:$,auth:e,email:S,emailVerified:L,displayName:w,isAnonymous:W,photoURL:C,phoneNumber:E,tenantId:N,stsTokenManager:_,createdAt:B,lastLoginAt:M});return Z&&Array.isArray(Z)&&(A.providerData=Z.map(F=>Object.assign({},F))),I&&(A._redirectEventId=I),A}static async _fromIdTokenResponse(e,n,r=!1){const i=new zo;i.updateFromServerResponse(n);const o=new Cs({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Oh(o),o}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Ie(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?$S(i.providerUserInfo):[],l=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),d=new zo;d.updateFromIdToken(r);const f=new Cs({uid:i.localId,auth:e,stsTokenManager:d,isAnonymous:l}),p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Og(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(f,p),f}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Jb=new Map;function Ts(t){js(t instanceof Function,"Expected a class definition");let e=Jb.get(t);return e?(js(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Jb.set(t,e),e)}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class qS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}qS.type="NONE";const Xb=qS;/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function ph(t,e,n){return`firebase:${t}:${e}:${n}`}class $o{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=ph(this.userKey,i.apiKey,o),this.fullPersistenceKey=ph("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Cs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new $o(Ts(Xb),e,r);const i=(await Promise.all(n.map(async p=>{if(await p._isAvailable())return p}))).filter(p=>p);let o=i[0]||Ts(Xb);const l=ph(r,e.config.apiKey,e.name);let d=null;for(const p of n)try{const y=await p._get(l);if(y){const w=Cs._fromJSON(e,y);p!==o&&(d=w),o=p;break}}catch{}const f=i.filter(p=>p._shouldAllowMigration);return!o._shouldAllowMigration||!f.length?new $o(o,e,r):(o=f[0],d&&await o._set(l,d.toJSON()),await Promise.all(n.map(async p=>{if(p!==o)try{await p._remove(l)}catch{}})),new $o(o,e,r))}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Zb(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(KS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(HS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(YS(e))return"Blackberry";if(JS(e))return"Webos";if(WS(e))return"Safari";if((e.includes("chrome/")||GS(e))&&!e.includes("edge/"))return"Chrome";if(QS(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function HS(t=dn()){return/firefox\//i.test(t)}function WS(t=dn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function GS(t=dn()){return/crios\//i.test(t)}function KS(t=dn()){return/iemobile/i.test(t)}function QS(t=dn()){return/android/i.test(t)}function YS(t=dn()){return/blackberry/i.test(t)}function JS(t=dn()){return/webos/i.test(t)}function My(t=dn()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function JI(t=dn()){var e;return My(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function XI(){return u_()&&document.documentMode===10}function XS(t=dn()){return My(t)||QS(t)||JS(t)||YS(t)||/windows phone/i.test(t)||KS(t)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function ZS(t,e=[]){let n;switch(t){case"Browser":n=Zb(dn());break;case"Worker":n=`${Zb(dn())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Da}/${r}`}/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ZI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((l,d)=>{try{const f=e(o);l(f)}catch(f){d(f)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function e6(t,e={}){return Ni(t,"GET","/v2/passwordPolicy",Ra(t,e))}/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const t6=6;class n6{constructor(e){var n,r,i,o;const l=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=l.minPasswordLength)!==null&&n!==void 0?n:t6,l.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=l.maxPasswordLength),l.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=l.containsLowercaseCharacter),l.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=l.containsUppercaseCharacter),l.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=l.containsNumericCharacter),l.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=l.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,o,l,d;const f={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,f),this.validatePasswordCharacterOptions(e,f),f.isValid&&(f.isValid=(n=f.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),f.isValid&&(f.isValid=(r=f.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),f.isValid&&(f.isValid=(i=f.containsLowercaseLetter)!==null&&i!==void 0?i:!0),f.isValid&&(f.isValid=(o=f.containsUppercaseLetter)!==null&&o!==void 0?o:!0),f.isValid&&(f.isValid=(l=f.containsNumericCharacter)!==null&&l!==void 0?l:!0),f.isValid&&(f.isValid=(d=f.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),f}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class r6{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ew(this),this.idTokenSubscription=new ew(this),this.beforeStateQueue=new ZI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=FS,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ts(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await $o.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await zS(this,{idToken:e}),r=await Cs._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Qr(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(d,d))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,d=i==null?void 0:i._redirectEventId,f=await this.tryRedirectSignIn(e);(!l||l===d)&&f!=null&&f.user&&(i=f.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(l){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Oh(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=OI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Qr(this.app))return Promise.reject(bi(this));const n=e?ct(e):null;return n&&Ie(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Qr(this.app)?Promise.reject(bi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Qr(this.app)?Promise.reject(bi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ts(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await e6(this),n=new n6(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Na("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await YI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ts(e)||this._popupRedirectResolver;Ie(n,this,"argument-error"),this.redirectPersistenceManager=await $o.create(this,[Ts(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let l=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ie(d,this,"internal-error"),d.then(()=>{l||o(this.currentUser)}),typeof n=="function"){const f=e.addObserver(n,r,i);return()=>{l=!0,f()}}else{const f=e.addObserver(n);return()=>{l=!0,f()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ZS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&NI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function La(t){return ct(t)}class ew{constructor(e){this.auth=e,this.observer=null,this.addObserver=g_(n=>this.observer=n)}get next(){return Ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/let vf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function s6(t){vf=t}function ek(t){return vf.loadJS(t)}function i6(){return vf.recaptchaEnterpriseScript}function a6(){return vf.gapiScript}function o6(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const l6="recaptcha-enterprise",u6="NO_RECAPTCHA";class c6{constructor(e){this.type=l6,this.auth=La(e)}async verify(e="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(l,d)=>{zI(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(f=>{if(f.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const p=new BI(f);return o.tenantId==null?o._agentRecaptchaConfig=p:o._tenantRecaptchaConfigs[o.tenantId]=p,l(p.siteKey)}}).catch(f=>{d(f)})})}function i(o,l,d){const f=window.grecaptcha;Qb(f)?f.enterprise.ready(()=>{f.enterprise.execute(o,{action:e}).then(p=>{l(p)}).catch(()=>{l(u6)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,l)=>{r(this.auth).then(d=>{if(!n&&Qb(window.grecaptcha))i(d,o,l);else{if(typeof window>"u"){l(new Error("RecaptchaVerifier is only supported in browser"));return}let f=i6();f.length!==0&&(f+=d),ek(f).then(()=>{i(d,o,l)}).catch(p=>{l(p)})}}).catch(d=>{l(d)})})}}async function tw(t,e,n,r=!1){const i=new c6(t);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l=Object.assign({},e);return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function nw(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await tw(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await tw(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function d6(t,e){const n=ji(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(zu(i,e??{}))return r;dr(r,"already-initialized")}return n.initialize({options:e})}function h6(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ts);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function f6(t,e,n){const r=La(t);Ie(r._canInitEmulator,r,"emulator-config-failed"),Ie(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,o=tk(e),{host:l,port:d}=p6(e),f=d===null?"":`:${d}`;r.config.emulator={url:`${o}//${l}${f}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:l,port:d,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),m6()}function tk(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function p6(t){const e=tk(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:rw(r.substr(o.length+1))}}else{const[o,l]=r.split(":");return{host:o,port:rw(l)}}}function rw(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function m6(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Fy{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Es("not implemented")}_getIdTokenResponse(e){return Es("not implemented")}_linkToIdToken(e,n){return Es("not implemented")}_getReauthenticationResolver(e){return Es("not implemented")}}async function g6(t,e){return Ni(t,"POST","/v1/accounts:signUp",e)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function y6(t,e){return yf(t,"POST","/v1/accounts:signInWithPassword",Ra(t,e))}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function v6(t,e){return yf(t,"POST","/v1/accounts:signInWithEmailLink",Ra(t,e))}async function b6(t,e){return yf(t,"POST","/v1/accounts:signInWithEmailLink",Ra(t,e))}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Hu extends Fy{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Hu(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Hu(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&n!=null&&n.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return nw(e,n,"signInWithPassword",y6);case"emailLink":return v6(e,{email:this._email,oobCode:this._password});default:dr(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return nw(e,r,"signUpPassword",g6);case"emailLink":return b6(e,{idToken:n,email:this._email,oobCode:this._password});default:dr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function qo(t,e){return yf(t,"POST","/v1/accounts:signInWithIdp",Ra(t,e))}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const w6="http://localhost";class Ea extends Fy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ea(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):dr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,o=Ny(n,["providerId","signInMethod"]);if(!r||!i)return null;const l=new Ea(r,i);return l.idToken=o.idToken||void 0,l.accessToken=o.accessToken||void 0,l.secret=o.secret,l.nonce=o.nonce,l.pendingToken=o.pendingToken||null,l}_getIdTokenResponse(e){const n=this.buildRequest();return qo(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,qo(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,qo(e,n)}buildRequest(){const e={requestUri:w6,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=rc(n)}return e}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function x6(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function S6(t){const e=wu(xu(t)).link,n=e?wu(xu(e)).deep_link_id:null,r=wu(xu(t)).deep_link_id;return(r?wu(xu(r)).link:null)||r||n||e||t}class Uy{constructor(e){var n,r,i,o,l,d;const f=wu(xu(e)),p=(n=f.apiKey)!==null&&n!==void 0?n:null,y=(r=f.oobCode)!==null&&r!==void 0?r:null,w=x6((i=f.mode)!==null&&i!==void 0?i:null);Ie(p&&y&&w,"argument-error"),this.apiKey=p,this.operation=w,this.code=y,this.continueUrl=(o=f.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(l=f.languageCode)!==null&&l!==void 0?l:null,this.tenantId=(d=f.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const n=S6(e);try{return new Uy(n)}catch{return null}}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class hl{constructor(){this.providerId=hl.PROVIDER_ID}static credential(e,n){return Hu._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Uy.parseLink(n);return Ie(r,"argument-error"),Hu._fromEmailAndCode(e,r.code,r.tenantId)}}hl.PROVIDER_ID="password";hl.EMAIL_PASSWORD_SIGN_IN_METHOD="password";hl.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Vy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ic extends Vy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ci extends ic{constructor(){super("facebook.com")}static credential(e){return Ea._fromParams({providerId:ci.PROVIDER_ID,signInMethod:ci.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ci.credentialFromTaggedObject(e)}static credentialFromError(e){return ci.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ci.credential(e.oauthAccessToken)}catch{return null}}}ci.FACEBOOK_SIGN_IN_METHOD="facebook.com";ci.PROVIDER_ID="facebook.com";/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ks extends ic{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ea._fromParams({providerId:ks.PROVIDER_ID,signInMethod:ks.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ks.credentialFromTaggedObject(e)}static credentialFromError(e){return ks.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ks.credential(n,r)}catch{return null}}}ks.GOOGLE_SIGN_IN_METHOD="google.com";ks.PROVIDER_ID="google.com";/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class di extends ic{constructor(){super("github.com")}static credential(e){return Ea._fromParams({providerId:di.PROVIDER_ID,signInMethod:di.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return di.credentialFromTaggedObject(e)}static credentialFromError(e){return di.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return di.credential(e.oauthAccessToken)}catch{return null}}}di.GITHUB_SIGN_IN_METHOD="github.com";di.PROVIDER_ID="github.com";/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class hi extends ic{constructor(){super("twitter.com")}static credential(e,n){return Ea._fromParams({providerId:hi.PROVIDER_ID,signInMethod:hi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return hi.credentialFromTaggedObject(e)}static credentialFromError(e){return hi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return hi.credential(n,r)}catch{return null}}}hi.TWITTER_SIGN_IN_METHOD="twitter.com";hi.PROVIDER_ID="twitter.com";/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Go{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await Cs._fromIdTokenResponse(e,r,i),l=sw(r);return new Go({user:o,providerId:l,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=sw(r);return new Go({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function sw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Mh extends pr{constructor(e,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Mh.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Mh(e,n,r,i)}}function nk(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Mh._fromErrorAndOperation(t,i,e,r):i})}async function k6(t,e,n=!1){const r=await qu(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Go._forOperation(t,"link",r)}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function E6(t,e,n=!1){const{auth:r}=t;if(Qr(r.app))return Promise.reject(bi(r));const i="reauthenticate";try{const o=await qu(t,nk(r,i,e,t),n);Ie(o.idToken,r,"internal-error");const l=Oy(o.idToken);Ie(l,r,"internal-error");const{sub:d}=l;return Ie(t.uid===d,r,"user-mismatch"),Go._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&dr(r,"user-mismatch"),o}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function rk(t,e,n=!1){if(Qr(t.app))return Promise.reject(bi(t));const r="signIn",i=await nk(t,r,e),o=await Go._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}async function C6(t,e){return rk(La(t),e)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function T6(t){const e=La(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function _6(t,e,n){return Qr(t.app)?Promise.reject(bi(t)):C6(ct(t),hl.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&T6(t),r})}function I6(t,e,n,r){return ct(t).onIdTokenChanged(e,n,r)}function P6(t,e,n){return ct(t).beforeAuthStateChanged(e,n)}function A6(t,e,n,r){return ct(t).onAuthStateChanged(e,n,r)}function j6(t){return ct(t).signOut()}const Fh="__sak";/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class sk{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Fh,"1"),this.storage.removeItem(Fh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const N6=1e3,D6=10;class ik extends sk{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=XS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((l,d,f)=>{this.notifyListeners(l,f)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const l=this.storage.getItem(r);!n&&this.localCache[r]===l||this.notifyListeners(r,l)},o=this.storage.getItem(r);XI()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,D6):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},N6)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ik.type="LOCAL";const R6=ik;/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ak extends sk{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ak.type="SESSION";const ok=ak;/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function L6(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class bf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new bf(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,l=this.handlersMap[i];if(!(l!=null&&l.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const d=Array.from(l).map(async p=>p(n.origin,o)),f=await L6(d);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:f})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}bf.receivers=[];/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function By(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class O6{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,l;return new Promise((d,f)=>{const p=By("",20);i.port1.start();const y=setTimeout(()=>{f(new Error("unsupported_event"))},r);l={messageChannel:i,onMessage(w){const S=w;if(S.data.eventId===p)switch(S.data.status){case"ack":clearTimeout(y),o=setTimeout(()=>{f(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),d(S.data.response);break;default:clearTimeout(y),clearTimeout(o),f(new Error("invalid_response"));break}}},this.handlers.add(l),i.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:e,eventId:p,data:n},[i.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Jr(){return window}function M6(t){Jr().location.href=t}/**
* @license
* Copyright 2020 Google LLC.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function lk(){return typeof Jr().WorkerGlobalScope<"u"&&typeof Jr().importScripts=="function"}async function F6(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function U6(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function V6(){return lk()?self:null}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const uk="firebaseLocalStorageDb",B6=1,Uh="firebaseLocalStorage",ck="fbase_key";class ac{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function wf(t,e){return t.transaction([Uh],e?"readwrite":"readonly").objectStore(Uh)}function z6(){const t=indexedDB.deleteDatabase(uk);return new ac(t).toPromise()}function Mg(){const t=indexedDB.open(uk,B6);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Uh,{keyPath:ck})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Uh)?e(r):(r.close(),await z6(),e(await Mg()))})})}async function iw(t,e,n){const r=wf(t,!0).put({[ck]:e,value:n});return new ac(r).toPromise()}async function $6(t,e){const n=wf(t,!1).get(e),r=await new ac(n).toPromise();return r===void 0?null:r.value}function aw(t,e){const n=wf(t,!0).delete(e);return new ac(n).toPromise()}const q6=800,H6=3;class dk{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Mg(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>H6)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lk()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bf._getInstance(V6()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await F6(),!this.activeServiceWorker)return;this.sender=new O6(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||U6()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Mg();return await iw(e,Fh,"1"),await aw(e,Fh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>iw(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>$6(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>aw(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=wf(i,!1).getAll();return new ac(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),q6)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}dk.type="LOCAL";const W6=dk;new sc(3e4,6e4);/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function hk(t,e){return e?Ts(e):(Ie(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class zy extends Fy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return qo(e,this._buildIdpRequest())}_linkToIdToken(e,n){return qo(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return qo(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function G6(t){return rk(t.auth,new zy(t),t.bypassAuthState)}function K6(t){const{auth:e,user:n}=t;return Ie(n,e,"internal-error"),E6(n,new zy(t),t.bypassAuthState)}async function Q6(t){const{auth:e,user:n}=t;return Ie(n,e,"internal-error"),k6(n,new zy(t),t.bypassAuthState)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class fk{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:l,type:d}=e;if(l){this.reject(l);return}const f={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(f))}catch(p){this.reject(p)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return G6;case"linkViaPopup":case"linkViaRedirect":return Q6;case"reauthViaPopup":case"reauthViaRedirect":return K6;default:dr(this.auth,"internal-error")}}resolve(e){js(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){js(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Y6=new sc(2e3,1e4);async function pk(t,e,n){if(Qr(t.app))return Promise.reject(jr(t,"operation-not-supported-in-this-environment"));const r=La(t);DI(t,e,Vy);const i=hk(r,n);return new ma(r,"signInViaPopup",e,i).executeNotNull()}class ma extends fk{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,ma.currentPopupAction&&ma.currentPopupAction.cancel(),ma.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ie(e,this.auth,"internal-error"),e}async onExecution(){js(this.filter.length===1,"Popup operations only handle one event");const e=By();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(jr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(jr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ma.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(jr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Y6.get())};e()}}ma.currentPopupAction=null;/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const J6="pendingRedirect",mh=new Map;class X6 extends fk{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=mh.get(this.auth._key());if(!e){try{const n=await Z6(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(n){e=()=>Promise.reject(n)}mh.set(this.auth._key(),e)}return this.bypassAuthState||mh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Z6(t,e){const n=nP(e),r=tP(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function eP(t,e){mh.set(t._key(),e)}function tP(t){return Ts(t._redirectPersistence)}function nP(t){return ph(J6,t.config.apiKey,t.name)}async function rP(t,e,n=!1){if(Qr(t.app))return Promise.reject(bi(t));const r=La(t),i=hk(r,e),o=await new X6(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const sP=10*60*1e3;class iP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!aP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!mk(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(jr(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=sP&&this.cachedEventUids.clear(),this.cachedEventUids.has(ow(e))}saveEventToCache(e){this.cachedEventUids.add(ow(e)),this.lastProcessedEventTime=Date.now()}}function ow(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function mk({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function aP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return mk(t);default:return!1}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function oP(t,e={}){return Ni(t,"GET","/v1/projects",e)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const lP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,uP=/^https?/;async function cP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await oP(t);for(const n of e)try{if(dP(n))return}catch{}dr(t,"unauthorized-domain")}function dP(t){const e=Lg(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!uP.test(n))return!1;if(lP.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
* @license
* Copyright 2020 Google LLC.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const hP=new sc(3e4,6e4);function lw(){const t=Jr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function fP(t){return new Promise((e,n)=>{var r,i,o;function l(){lw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{lw(),n(jr(t,"network-request-failed"))},timeout:hP.get()})}if(!((i=(r=Jr().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=Jr().gapi)===null||o===void 0)&&o.load)l();else{const d=o6("iframefcb");return Jr()[d]=()=>{gapi.load?l():n(jr(t,"network-request-failed"))},ek(`${a6()}?onload=${d}`).catch(f=>n(f))}}).catch(e=>{throw gh=null,e})}let gh=null;function pP(t){return gh=gh||fP(t),gh}/**
* @license
* Copyright 2020 Google LLC.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const mP=new sc(5e3,15e3),gP="__/auth/iframe",yP="emulator/auth/iframe",vP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},bP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function wP(t){const e=t.config;Ie(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ly(e,yP):`https://${t.config.authDomain}/${gP}`,r={apiKey:e.apiKey,appName:t.name,v:Da},i=bP.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${rc(r).slice(1)}`}async function xP(t){const e=await pP(t),n=Jr().gapi;return Ie(n,t,"internal-error"),e.open({where:document.body,url:wP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vP,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const l=jr(t,"network-request-failed"),d=Jr().setTimeout(()=>{o(l)},mP.get());function f(){Jr().clearTimeout(d),i(r)}r.ping(f).then(f,()=>{o(l)})}))}/**
* @license
* Copyright 2020 Google LLC.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const SP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kP=500,EP=600,CP="_blank",TP="http://localhost";class uw{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _P(t,e,n,r=kP,i=EP){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),l=Math.max((window.screen.availWidth-r)/2,0).toString();let d="";const f=Object.assign(Object.assign({},SP),{width:r.toString(),height:i.toString(),top:o,left:l}),p=dn().toLowerCase();n&&(d=GS(p)?CP:n),HS(p)&&(e=e||TP,f.scrollbars="yes");const y=Object.entries(f).reduce((S,[E,C])=>`${S}${E}=${C},`,"");if(JI(p)&&d!=="_self")return IP(e||"",d),new uw(null);const w=window.open(e||"",d,y);Ie(w,t,"popup-blocked");try{w.focus()}catch{}return new uw(w)}function IP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const PP="__/auth/handler",AP="emulator/auth/handler",jP=encodeURIComponent("fac");async function cw(t,e,n,r,i,o){Ie(t.config.authDomain,t,"auth-domain-config-required"),Ie(t.config.apiKey,t,"invalid-api-key");const l={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Da,eventId:i};if(e instanceof Vy){e.setDefaultLanguage(t.languageCode),l.providerId=e.providerId||"",m_(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,w]of Object.entries({}))l[y]=w}if(e instanceof ic){const y=e.getScopes().filter(w=>w!=="");y.length>0&&(l.scopes=y.join(","))}t.tenantId&&(l.tid=t.tenantId);const d=l;for(const y of Object.keys(d))d[y]===void 0&&delete d[y];const f=await t._getAppCheckToken(),p=f?`#${jP}=${encodeURIComponent(f)}`:"";return`${NP(t)}?${rc(d).slice(1)}${p}`}function NP({config:t}){return t.emulator?Ly(t,AP):`https://${t.authDomain}/${PP}`}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Rm="webStorageSupport";class DP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ok,this._completeRedirectFn=rP,this._overrideRedirectResult=eP}async _openPopup(e,n,r,i){var o;js((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const l=await cw(e,n,r,Lg(),i);return _P(e,l,By())}async _openRedirect(e,n,r,i){await this._originValidation(e);const o=await cw(e,n,r,Lg(),i);return M6(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(js(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await xP(e),r=new iP(e);return n.register("authEvent",i=>(Ie(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Rm,{type:Rm},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Rm];o!==void 0&&n(!!o),dr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=cP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return XS()||WS()||My()}}const RP=DP;var dw="@firebase/auth",hw="1.7.9";/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class LP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function OP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function MP(t){Rr(new cr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:l,authDomain:d}=r.options;Ie(l&&!l.includes(":"),"invalid-api-key",{appName:r.name});const f={apiKey:l,authDomain:d,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ZS(t)},p=new r6(r,i,o,f);return h6(p,n),p},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Rr(new cr("auth-internal",e=>{const n=La(e.getProvider("auth").getImmediate());return(r=>new LP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pn(dw,hw,OP(t)),Pn(dw,hw,"esm2017")}/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const FP=5*60,UP=TS("authIdTokenMaxAge")||FP;let fw=null;const VP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>UP)return;const i=n==null?void 0:n.token;fw!==i&&(fw=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function BP(t=gf()){const e=ji(t,"auth");if(e.isInitialized())return e.getImmediate();const n=d6(t,{popupRedirectResolver:RP,persistence:[W6,R6,ok]}),r=TS("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const l=VP(o.toString());P6(n,l,()=>l(n.currentUser)),I6(n,d=>l(d))}}const i=kS("auth");return i&&f6(n,`http://${i}`),n}function zP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}s6({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=jr("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",zP().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});MP("Browser");var pw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var wa,gk;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(P,_){function A(){}A.prototype=_.prototype,P.D=_.prototype,P.prototype=new A,P.prototype.constructor=P,P.C=function(F,z,H){for(var D=Array(arguments.length-2),ve=2;ve<arguments.length;ve++)D[ve-2]=arguments[ve];return _.prototype[z].apply(F,D)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(P,_,A){A||(A=0);var F=Array(16);if(typeof _=="string")for(var z=0;16>z;++z)F[z]=_.charCodeAt(A++)|_.charCodeAt(A++)<<8|_.charCodeAt(A++)<<16|_.charCodeAt(A++)<<24;else for(z=0;16>z;++z)F[z]=_[A++]|_[A++]<<8|_[A++]<<16|_[A++]<<24;_=P.g[0],A=P.g[1],z=P.g[2];var H=P.g[3],D=_+(H^A&(z^H))+F[0]+3614090360&4294967295;_=A+(D<<7&4294967295|D>>>25),D=H+(z^_&(A^z))+F[1]+3905402710&4294967295,H=_+(D<<12&4294967295|D>>>20),D=z+(A^H&(_^A))+F[2]+606105819&4294967295,z=H+(D<<17&4294967295|D>>>15),D=A+(_^z&(H^_))+F[3]+3250441966&4294967295,A=z+(D<<22&4294967295|D>>>10),D=_+(H^A&(z^H))+F[4]+4118548399&4294967295,_=A+(D<<7&4294967295|D>>>25),D=H+(z^_&(A^z))+F[5]+1200080426&4294967295,H=_+(D<<12&4294967295|D>>>20),D=z+(A^H&(_^A))+F[6]+2821735955&4294967295,z=H+(D<<17&4294967295|D>>>15),D=A+(_^z&(H^_))+F[7]+4249261313&4294967295,A=z+(D<<22&4294967295|D>>>10),D=_+(H^A&(z^H))+F[8]+1770035416&4294967295,_=A+(D<<7&4294967295|D>>>25),D=H+(z^_&(A^z))+F[9]+2336552879&4294967295,H=_+(D<<12&4294967295|D>>>20),D=z+(A^H&(_^A))+F[10]+4294925233&4294967295,z=H+(D<<17&4294967295|D>>>15),D=A+(_^z&(H^_))+F[11]+2304563134&4294967295,A=z+(D<<22&4294967295|D>>>10),D=_+(H^A&(z^H))+F[12]+1804603682&4294967295,_=A+(D<<7&4294967295|D>>>25),D=H+(z^_&(A^z))+F[13]+4254626195&4294967295,H=_+(D<<12&4294967295|D>>>20),D=z+(A^H&(_^A))+F[14]+2792965006&4294967295,z=H+(D<<17&4294967295|D>>>15),D=A+(_^z&(H^_))+F[15]+1236535329&4294967295,A=z+(D<<22&4294967295|D>>>10),D=_+(z^H&(A^z))+F[1]+4129170786&4294967295,_=A+(D<<5&4294967295|D>>>27),D=H+(A^z&(_^A))+F[6]+3225465664&4294967295,H=_+(D<<9&4294967295|D>>>23),D=z+(_^A&(H^_))+F[11]+643717713&4294967295,z=H+(D<<14&4294967295|D>>>18),D=A+(H^_&(z^H))+F[0]+3921069994&4294967295,A=z+(D<<20&4294967295|D>>>12),D=_+(z^H&(A^z))+F[5]+3593408605&4294967295,_=A+(D<<5&4294967295|D>>>27),D=H+(A^z&(_^A))+F[10]+38016083&4294967295,H=_+(D<<9&4294967295|D>>>23),D=z+(_^A&(H^_))+F[15]+3634488961&4294967295,z=H+(D<<14&4294967295|D>>>18),D=A+(H^_&(z^H))+F[4]+3889429448&4294967295,A=z+(D<<20&4294967295|D>>>12),D=_+(z^H&(A^z))+F[9]+568446438&4294967295,_=A+(D<<5&4294967295|D>>>27),D=H+(A^z&(_^A))+F[14]+3275163606&4294967295,H=_+(D<<9&4294967295|D>>>23),D=z+(_^A&(H^_))+F[3]+4107603335&4294967295,z=H+(D<<14&4294967295|D>>>18),D=A+(H^_&(z^H))+F[8]+1163531501&4294967295,A=z+(D<<20&4294967295|D>>>12),D=_+(z^H&(A^z))+F[13]+2850285829&4294967295,_=A+(D<<5&4294967295|D>>>27),D=H+(A^z&(_^A))+F[2]+4243563512&4294967295,H=_+(D<<9&4294967295|D>>>23),D=z+(_^A&(H^_))+F[7]+1735328473&4294967295,z=H+(D<<14&4294967295|D>>>18),D=A+(H^_&(z^H))+F[12]+2368359562&4294967295,A=z+(D<<20&4294967295|D>>>12),D=_+(A^z^H)+F[5]+4294588738&4294967295,_=A+(D<<4&4294967295|D>>>28),D=H+(_^A^z)+F[8]+2272392833&4294967295,H=_+(D<<11&4294967295|D>>>21),D=z+(H^_^A)+F[11]+1839030562&4294967295,z=H+(D<<16&4294967295|D>>>16),D=A+(z^H^_)+F[14]+4259657740&4294967295,A=z+(D<<23&4294967295|D>>>9),D=_+(A^z^H)+F[1]+2763975236&4294967295,_=A+(D<<4&4294967295|D>>>28),D=H+(_^A^z)+F[4]+1272893353&4294967295,H=_+(D<<11&4294967295|D>>>21),D=z+(H^_^A)+F[7]+4139469664&4294967295,z=H+(D<<16&4294967295|D>>>16),D=A+(z^H^_)+F[10]+3200236656&4294967295,A=z+(D<<23&4294967295|D>>>9),D=_+(A^z^H)+F[13]+681279174&4294967295,_=A+(D<<4&4294967295|D>>>28),D=H+(_^A^z)+F[0]+3936430074&4294967295,H=_+(D<<11&4294967295|D>>>21),D=z+(H^_^A)+F[3]+3572445317&4294967295,z=H+(D<<16&4294967295|D>>>16),D=A+(z^H^_)+F[6]+76029189&4294967295,A=z+(D<<23&4294967295|D>>>9),D=_+(A^z^H)+F[9]+3654602809&4294967295,_=A+(D<<4&4294967295|D>>>28),D=H+(_^A^z)+F[12]+3873151461&4294967295,H=_+(D<<11&4294967295|D>>>21),D=z+(H^_^A)+F[15]+530742520&4294967295,z=H+(D<<16&4294967295|D>>>16),D=A+(z^H^_)+F[2]+3299628645&4294967295,A=z+(D<<23&4294967295|D>>>9),D=_+(z^(A|~H))+F[0]+4096336452&4294967295,_=A+(D<<6&4294967295|D>>>26),D=H+(A^(_|~z))+F[7]+1126891415&4294967295,H=_+(D<<10&4294967295|D>>>22),D=z+(_^(H|~A))+F[14]+2878612391&4294967295,z=H+(D<<15&4294967295|D>>>17),D=A+(H^(z|~_))+F[5]+4237533241&4294967295,A=z+(D<<21&4294967295|D>>>11),D=_+(z^(A|~H))+F[12]+1700485571&4294967295,_=A+(D<<6&4294967295|D>>>26),D=H+(A^(_|~z))+F[3]+2399980690&4294967295,H=_+(D<<10&4294967295|D>>>22),D=z+(_^(H|~A))+F[10]+4293915773&4294967295,z=H+(D<<15&4294967295|D>>>17),D=A+(H^(z|~_))+F[1]+2240044497&4294967295,A=z+(D<<21&4294967295|D>>>11),D=_+(z^(A|~H))+F[8]+1873313359&4294967295,_=A+(D<<6&4294967295|D>>>26),D=H+(A^(_|~z))+F[15]+4264355552&4294967295,H=_+(D<<10&4294967295|D>>>22),D=z+(_^(H|~A))+F[6]+2734768916&4294967295,z=H+(D<<15&4294967295|D>>>17),D=A+(H^(z|~_))+F[13]+1309151649&4294967295,A=z+(D<<21&4294967295|D>>>11),D=_+(z^(A|~H))+F[4]+4149444226&4294967295,_=A+(D<<6&4294967295|D>>>26),D=H+(A^(_|~z))+F[11]+3174756917&4294967295,H=_+(D<<10&4294967295|D>>>22),D=z+(_^(H|~A))+F[2]+718787259&4294967295,z=H+(D<<15&4294967295|D>>>17),D=A+(H^(z|~_))+F[9]+3951481745&4294967295,P.g[0]=P.g[0]+_&4294967295,P.g[1]=P.g[1]+(z+(D<<21&4294967295|D>>>11))&4294967295,P.g[2]=P.g[2]+z&4294967295,P.g[3]=P.g[3]+H&4294967295}r.prototype.u=function(P,_){_===void 0&&(_=P.length);for(var A=_-this.blockSize,F=this.B,z=this.h,H=0;H<_;){if(z==0)for(;H<=A;)i(this,P,H),H+=this.blockSize;if(typeof P=="string"){for(;H<_;)if(F[z++]=P.charCodeAt(H++),z==this.blockSize){i(this,F),z=0;break}}else for(;H<_;)if(F[z++]=P[H++],z==this.blockSize){i(this,F),z=0;break}}this.h=z,this.o+=_},r.prototype.v=function(){var P=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);P[0]=128;for(var _=1;_<P.length-8;++_)P[_]=0;var A=8*this.o;for(_=P.length-8;_<P.length;++_)P[_]=A&255,A/=256;for(this.u(P),P=Array(16),_=A=0;4>_;++_)for(var F=0;32>F;F+=8)P[A++]=this.g[_]>>>F&255;return P};function o(P,_){var A=d;return Object.prototype.hasOwnProperty.call(A,P)?A[P]:A[P]=_(P)}function l(P,_){this.h=_;for(var A=[],F=!0,z=P.length-1;0<=z;z--){var H=P[z]|0;F&&H==_||(A[z]=H,F=!1)}this.g=A}var d={};function f(P){return-128<=P&&128>P?o(P,function(_){return new l([_|0],0>_?-1:0)}):new l([P|0],0>P?-1:0)}function p(P){if(isNaN(P)||!isFinite(P))return w;if(0>P)return I(p(-P));for(var _=[],A=1,F=0;P>=A;F++)_[F]=P/A|0,A*=4294967296;return new l(_,0)}function y(P,_){if(P.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(P.charAt(0)=="-")return I(y(P.substring(1),_));if(0<=P.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=p(Math.pow(_,8)),F=w,z=0;z<P.length;z+=8){var H=Math.min(8,P.length-z),D=parseInt(P.substring(z,z+H),_);8>H?(H=p(Math.pow(_,H)),F=F.j(H).add(p(D))):(F=F.j(A),F=F.add(p(D)))}return F}var w=f(0),S=f(1),E=f(16777216);t=l.prototype,t.m=function(){if(N(this))return-I(this).m();for(var P=0,_=1,A=0;A<this.g.length;A++){var F=this.i(A);P+=(0<=F?F:4294967296+F)*_,_*=4294967296}return P},t.toString=function(P){if(P=P||10,2>P||36<P)throw Error("radix out of range: "+P);if(C(this))return"0";if(N(this))return"-"+I(this).toString(P);for(var _=p(Math.pow(P,6)),A=this,F="";;){var z=L(A,_).g;A=B(A,z.j(_));var H=((0<A.g.length?A.g[0]:A.h)>>>0).toString(P);if(A=z,C(A))return H+F;for(;6>H.length;)H="0"+H;F=H+F}},t.i=function(P){return 0>P?0:P<this.g.length?this.g[P]:this.h};function C(P){if(P.h!=0)return!1;for(var _=0;_<P.g.length;_++)if(P.g[_]!=0)return!1;return!0}function N(P){return P.h==-1}t.l=function(P){return P=B(this,P),N(P)?-1:C(P)?0:1};function I(P){for(var _=P.g.length,A=[],F=0;F<_;F++)A[F]=~P.g[F];return new l(A,~P.h).add(S)}t.abs=function(){return N(this)?I(this):this},t.add=function(P){for(var _=Math.max(this.g.length,P.g.length),A=[],F=0,z=0;z<=_;z++){var H=F+(this.i(z)&65535)+(P.i(z)&65535),D=(H>>>16)+(this.i(z)>>>16)+(P.i(z)>>>16);F=D>>>16,H&=65535,D&=65535,A[z]=D<<16|H}return new l(A,A[A.length-1]&-2147483648?-1:0)};function B(P,_){return P.add(I(_))}t.j=function(P){if(C(this)||C(P))return w;if(N(this))return N(P)?I(this).j(I(P)):I(I(this).j(P));if(N(P))return I(this.j(I(P)));if(0>this.l(E)&&0>P.l(E))return p(this.m()*P.m());for(var _=this.g.length+P.g.length,A=[],F=0;F<2*_;F++)A[F]=0;for(F=0;F<this.g.length;F++)for(var z=0;z<P.g.length;z++){var H=this.i(F)>>>16,D=this.i(F)&65535,ve=P.i(z)>>>16,Oe=P.i(z)&65535;A[2*F+2*z]+=D*Oe,M(A,2*F+2*z),A[2*F+2*z+1]+=H*Oe,M(A,2*F+2*z+1),A[2*F+2*z+1]+=D*ve,M(A,2*F+2*z+1),A[2*F+2*z+2]+=H*ve,M(A,2*F+2*z+2)}for(F=0;F<_;F++)A[F]=A[2*F+1]<<16|A[2*F];for(F=_;F<2*_;F++)A[F]=0;return new l(A,0)};function M(P,_){for(;(P[_]&65535)!=P[_];)P[_+1]+=P[_]>>>16,P[_]&=65535,_++}function $(P,_){this.g=P,this.h=_}function L(P,_){if(C(_))throw Error("division by zero");if(C(P))return new $(w,w);if(N(P))return _=L(I(P),_),new $(I(_.g),I(_.h));if(N(_))return _=L(P,I(_)),new $(I(_.g),_.h);if(30<P.g.length){if(N(P)||N(_))throw Error("slowDivide_ only works with positive integers.");for(var A=S,F=_;0>=F.l(P);)A=W(A),F=W(F);var z=Z(A,1),H=Z(F,1);for(F=Z(F,2),A=Z(A,2);!C(F);){var D=H.add(F);0>=D.l(P)&&(z=z.add(A),H=D),F=Z(F,1),A=Z(A,1)}return _=B(P,z.j(_)),new $(z,_)}for(z=w;0<=P.l(_);){for(A=Math.max(1,Math.floor(P.m()/_.m())),F=Math.ceil(Math.log(A)/Math.LN2),F=48>=F?1:Math.pow(2,F-48),H=p(A),D=H.j(_);N(D)||0<D.l(P);)A-=F,H=p(A),D=H.j(_);C(H)&&(H=S),z=z.add(H),P=B(P,D)}return new $(z,P)}t.A=function(P){return L(this,P).h},t.and=function(P){for(var _=Math.max(this.g.length,P.g.length),A=[],F=0;F<_;F++)A[F]=this.i(F)&P.i(F);return new l(A,this.h&P.h)},t.or=function(P){for(var _=Math.max(this.g.length,P.g.length),A=[],F=0;F<_;F++)A[F]=this.i(F)|P.i(F);return new l(A,this.h|P.h)},t.xor=function(P){for(var _=Math.max(this.g.length,P.g.length),A=[],F=0;F<_;F++)A[F]=this.i(F)^P.i(F);return new l(A,this.h^P.h)};function W(P){for(var _=P.g.length+1,A=[],F=0;F<_;F++)A[F]=P.i(F)<<1|P.i(F-1)>>>31;return new l(A,P.h)}function Z(P,_){var A=_>>5;_%=32;for(var F=P.g.length-A,z=[],H=0;H<F;H++)z[H]=0<_?P.i(H+A)>>>_|P.i(H+A+1)<<32-_:P.i(H+A);return new l(z,P.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,gk=r,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=p,l.fromString=y,wa=l}).apply(typeof pw<"u"?pw:typeof self<"u"?self:typeof window<"u"?window:{});var Fd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yk,Su,vk,yh,Fg,bk,wk,xk;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,v,x){return c==Array.prototype||c==Object.prototype||(c[v]=x.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Fd=="object"&&Fd];for(var v=0;v<c.length;++v){var x=c[v];if(x&&x.Math==Math)return x}throw Error("Cannot find global object")}var r=n(this);function i(c,v){if(v)e:{var x=r;c=c.split(".");for(var T=0;T<c.length-1;T++){var G=c[T];if(!(G in x))break e;x=x[G]}c=c[c.length-1],T=x[c],v=v(T),v!=T&&v!=null&&e(x,c,{configurable:!0,writable:!0,value:v})}}function o(c,v){c instanceof String&&(c+="");var x=0,T=!1,G={next:function(){if(!T&&x<c.length){var ee=x++;return{value:v(ee,c[ee]),done:!1}}return T=!0,{done:!0,value:void 0}}};return G[Symbol.iterator]=function(){return G},G}i("Array.prototype.values",function(c){return c||function(){return o(this,function(v,x){return x})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},d=this||self;function f(c){var v=typeof c;return v=v!="object"?v:c?Array.isArray(c)?"array":v:"null",v=="array"||v=="object"&&typeof c.length=="number"}function p(c){var v=typeof c;return v=="object"&&c!=null||v=="function"}function y(c,v,x){return c.call.apply(c.bind,arguments)}function w(c,v,x){if(!c)throw Error();if(2<arguments.length){var T=Array.prototype.slice.call(arguments,2);return function(){var G=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(G,T),c.apply(v,G)}}return function(){return c.apply(v,arguments)}}function S(c,v,x){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:w,S.apply(null,arguments)}function E(c,v){var x=Array.prototype.slice.call(arguments,1);return function(){var T=x.slice();return T.push.apply(T,arguments),c.apply(this,T)}}function C(c,v){function x(){}x.prototype=v.prototype,c.aa=v.prototype,c.prototype=new x,c.prototype.constructor=c,c.Qb=function(T,G,ee){for(var ue=Array(arguments.length-2),Ze=2;Ze<arguments.length;Ze++)ue[Ze-2]=arguments[Ze];return v.prototype[G].apply(T,ue)}}function N(c){const v=c.length;if(0<v){const x=Array(v);for(let T=0;T<v;T++)x[T]=c[T];return x}return[]}function I(c,v){for(let x=1;x<arguments.length;x++){const T=arguments[x];if(f(T)){const G=c.length||0,ee=T.length||0;c.length=G+ee;for(let ue=0;ue<ee;ue++)c[G+ue]=T[ue]}else c.push(T)}}class B{constructor(v,x){this.i=v,this.j=x,this.h=0,this.g=null}get(){let v;return 0<this.h?(this.h--,v=this.g,this.g=v.next,v.next=null):v=this.i(),v}}function M(c){return/^[\s\xa0]*$/.test(c)}function $(){var c=d.navigator;return c&&(c=c.userAgent)?c:""}function L(c){return L[" "](c),c}L[" "]=function(){};var W=$().indexOf("Gecko")!=-1&&!($().toLowerCase().indexOf("webkit")!=-1&&$().indexOf("Edge")==-1)&&!($().indexOf("Trident")!=-1||$().indexOf("MSIE")!=-1)&&$().indexOf("Edge")==-1;function Z(c,v,x){for(const T in c)v.call(x,c[T],T,c)}function P(c,v){for(const x in c)v.call(void 0,c[x],x,c)}function _(c){const v={};for(const x in c)v[x]=c[x];return v}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function F(c,v){let x,T;for(let G=1;G<arguments.length;G++){T=arguments[G];for(x in T)c[x]=T[x];for(let ee=0;ee<A.length;ee++)x=A[ee],Object.prototype.hasOwnProperty.call(T,x)&&(c[x]=T[x])}}function z(c){var v=1;c=c.split(":");const x=[];for(;0<v&&c.length;)x.push(c.shift()),v--;return c.length&&x.push(c.join(":")),x}function H(c){d.setTimeout(()=>{throw c},0)}function D(){var c=de;let v=null;return c.g&&(v=c.g,c.g=c.g.next,c.g||(c.h=null),v.next=null),v}class ve{constructor(){this.h=this.g=null}add(v,x){const T=Oe.get();T.set(v,x),this.h?this.h.next=T:this.g=T,this.h=T}}var Oe=new B(()=>new Ue,c=>c.reset());class Ue{constructor(){this.next=this.g=this.h=null}set(v,x){this.h=v,this.g=x,this.next=null}reset(){this.next=this.g=this.h=null}}let Ae,ae=!1,de=new ve,Y=()=>{const c=d.Promise.resolve(void 0);Ae=()=>{c.then(j)}};var j=()=>{for(var c;c=D();){try{c.h.call(c.g)}catch(x){H(x)}var v=Oe;v.j(c),100>v.h&&(v.h++,c.next=v.g,v.g=c)}ae=!1};function Q(){this.s=this.s,this.C=this.C}Q.prototype.s=!1,Q.prototype.ma=function(){this.s||(this.s=!0,this.N())},Q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function oe(c,v){this.type=c,this.g=this.target=v,this.defaultPrevented=!1}oe.prototype.h=function(){this.defaultPrevented=!0};var fe=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var c=!1,v=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const x=()=>{};d.addEventListener("test",x,v),d.removeEventListener("test",x,v)}catch{}return c}();function ce(c,v){if(oe.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var x=this.type=c.type,T=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=v,v=c.relatedTarget){if(W){e:{try{L(v.nodeName);var G=!0;break e}catch{}G=!1}G||(v=null)}}else x=="mouseover"?v=c.fromElement:x=="mouseout"&&(v=c.toElement);this.relatedTarget=v,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:we[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&ce.aa.h.call(this)}}C(ce,oe);var we={2:"touch",3:"pen",4:"mouse"};ce.prototype.h=function(){ce.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var Ce="closure_listenable_"+(1e6*Math.random()|0),Te=0;function je(c,v,x,T,G){this.listener=c,this.proxy=null,this.src=v,this.type=x,this.capture=!!T,this.ha=G,this.key=++Te,this.da=this.fa=!1}function qe(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function De(c){this.src=c,this.g={},this.h=0}De.prototype.add=function(c,v,x,T,G){var ee=c.toString();c=this.g[ee],c||(c=this.g[ee]=[],this.h++);var ue=mr(c,v,T,G);return-1<ue?(v=c[ue],x||(v.fa=!1)):(v=new je(v,this.src,ee,!!T,G),v.fa=x,c.push(v)),v};function Ct(c,v){var x=v.type;if(x in c.g){var T=c.g[x],G=Array.prototype.indexOf.call(T,v,void 0),ee;(ee=0<=G)&&Array.prototype.splice.call(T,G,1),ee&&(qe(v),c.g[x].length==0&&(delete c.g[x],c.h--))}}function mr(c,v,x,T){for(var G=0;G<c.length;++G){var ee=c[G];if(!ee.da&&ee.listener==v&&ee.capture==!!x&&ee.ha==T)return G}return-1}var Li="closure_lm_"+(1e6*Math.random()|0),Va={};function yl(c,v,x,T,G){if(Array.isArray(v)){for(var ee=0;ee<v.length;ee++)yl(c,v[ee],x,T,G);return null}return x=wl(x),c&&c[Ce]?c.K(v,x,p(T)?!!T.capture:!1,G):vl(c,v,x,!1,T,G)}function vl(c,v,x,T,G,ee){if(!v)throw Error("Invalid event type");var ue=p(G)?!!G.capture:!!G,Ze=za(c);if(Ze||(c[Li]=Ze=new De(c)),x=Ze.add(v,x,T,ue,ee),x.proxy)return x;if(T=xc(),x.proxy=T,T.src=c,T.listener=x,c.addEventListener)fe||(G=ue),G===void 0&&(G=!1),c.addEventListener(v.toString(),T,G);else if(c.attachEvent)c.attachEvent(as(v.toString()),T);else if(c.addListener&&c.removeListener)c.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return x}function xc(){function c(x){return v.call(c.src,c.listener,x)}const v=bl;return c}function Ba(c,v,x,T,G){if(Array.isArray(v))for(var ee=0;ee<v.length;ee++)Ba(c,v[ee],x,T,G);else T=p(T)?!!T.capture:!!T,x=wl(x),c&&c[Ce]?(c=c.i,v=String(v).toString(),v in c.g&&(ee=c.g[v],x=mr(ee,x,T,G),-1<x&&(qe(ee[x]),Array.prototype.splice.call(ee,x,1),ee.length==0&&(delete c.g[v],c.h--)))):c&&(c=za(c))&&(v=c.g[v.toString()],c=-1,v&&(c=mr(v,x,T,G)),(x=-1<c?v[c]:null)&&is(x))}function is(c){if(typeof c!="number"&&c&&!c.da){var v=c.src;if(v&&v[Ce])Ct(v.i,c);else{var x=c.type,T=c.proxy;v.removeEventListener?v.removeEventListener(x,T,c.capture):v.detachEvent?v.detachEvent(as(x),T):v.addListener&&v.removeListener&&v.removeListener(T),(x=za(v))?(Ct(x,c),x.h==0&&(x.src=null,v[Li]=null)):qe(c)}}}function as(c){return c in Va?Va[c]:Va[c]="on"+c}function bl(c,v){if(c.da)c=!0;else{v=new ce(v,this);var x=c.listener,T=c.ha||c.src;c.fa&&is(c),c=x.call(T,v)}return c}function za(c){return c=c[Li],c instanceof De?c:null}var $a="__closure_events_fn_"+(1e9*Math.random()>>>0);function wl(c){return typeof c=="function"?c:(c[$a]||(c[$a]=function(v){return c.handleEvent(v)}),c[$a])}function Nt(){Q.call(this),this.i=new De(this),this.M=this,this.F=null}C(Nt,Q),Nt.prototype[Ce]=!0,Nt.prototype.removeEventListener=function(c,v,x,T){Ba(this,c,v,x,T)};function Dt(c,v){var x,T=c.F;if(T)for(x=[];T;T=T.F)x.push(T);if(c=c.M,T=v.type||v,typeof v=="string")v=new oe(v,c);else if(v instanceof oe)v.target=v.target||c;else{var G=v;v=new oe(T,c),F(v,G)}if(G=!0,x)for(var ee=x.length-1;0<=ee;ee--){var ue=v.g=x[ee];G=os(ue,T,!0,v)&&G}if(ue=v.g=c,G=os(ue,T,!0,v)&&G,G=os(ue,T,!1,v)&&G,x)for(ee=0;ee<x.length;ee++)ue=v.g=x[ee],G=os(ue,T,!1,v)&&G}Nt.prototype.N=function(){if(Nt.aa.N.call(this),this.i){var c=this.i,v;for(v in c.g){for(var x=c.g[v],T=0;T<x.length;T++)qe(x[T]);delete c.g[v],c.h--}}this.F=null},Nt.prototype.K=function(c,v,x,T){return this.i.add(String(c),v,!1,x,T)},Nt.prototype.L=function(c,v,x,T){return this.i.add(String(c),v,!0,x,T)};function os(c,v,x,T){if(v=c.i.g[String(v)],!v)return!0;v=v.concat();for(var G=!0,ee=0;ee<v.length;++ee){var ue=v[ee];if(ue&&!ue.da&&ue.capture==x){var Ze=ue.listener,Rt=ue.ha||ue.src;ue.fa&&Ct(c.i,ue),G=Ze.call(Rt,T)!==!1&&G}}return G&&!T.defaultPrevented}function xl(c,v,x){if(typeof c=="function")x&&(c=S(c,x));else if(c&&typeof c.handleEvent=="function")c=S(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(v)?-1:d.setTimeout(c,v||0)}function Os(c){c.g=xl(()=>{c.g=null,c.i&&(c.i=!1,Os(c))},c.l);const v=c.h;c.h=null,c.m.apply(null,v)}class Oi extends Q{constructor(v,x){super(),this.m=v,this.l=x,this.h=null,this.i=!1,this.g=null}j(v){this.h=arguments,this.g?this.i=!0:Os(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Mi(c){Q.call(this),this.h=c,this.g={}}C(Mi,Q);var Sl=[];function kl(c){Z(c.g,function(v,x){this.g.hasOwnProperty(x)&&is(v)},c),c.g={}}Mi.prototype.N=function(){Mi.aa.N.call(this),kl(this)},Mi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var El=d.JSON.stringify,Cl=d.JSON.parse,Tl=class{stringify(c){return d.JSON.stringify(c,void 0)}parse(c){return d.JSON.parse(c,void 0)}};function Fi(){}Fi.prototype.h=null;function qa(c){return c.h||(c.h=c.i())}function Ha(){}var qn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Or(){oe.call(this,"d")}C(Or,oe);function Wa(){oe.call(this,"c")}C(Wa,oe);var Mr={},_l=null;function Ui(){return _l=_l||new Nt}Mr.La="serverreachability";function Il(c){oe.call(this,Mr.La,c)}C(Il,oe);function ls(c){const v=Ui();Dt(v,new Il(v))}Mr.STAT_EVENT="statevent";function Pl(c,v){oe.call(this,Mr.STAT_EVENT,c),this.stat=v}C(Pl,oe);function wt(c){const v=Ui();Dt(v,new Pl(v,c))}Mr.Ma="timingevent";function Ga(c,v){oe.call(this,Mr.Ma,c),this.size=v}C(Ga,oe);function gr(c,v){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){c()},v)}function Vi(){this.g=!0}Vi.prototype.xa=function(){this.g=!1};function Bi(c,v,x,T,G,ee){c.info(function(){if(c.g)if(ee)for(var ue="",Ze=ee.split("&"),Rt=0;Rt<Ze.length;Rt++){var Qe=Ze[Rt].split("=");if(1<Qe.length){var Ut=Qe[0];Qe=Qe[1];var Vt=Ut.split("_");ue=2<=Vt.length&&Vt[1]=="type"?ue+(Ut+"="+Qe+"&"):ue+(Ut+"=redacted&")}}else ue=null;else ue=ee;return"XMLHTTP REQ ("+T+") [attempt "+G+"]: "+v+`
`+x+`
`+ue})}function Ka(c,v,x,T,G,ee,ue){c.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+G+"]: "+v+`
`+x+`
`+ee+" "+ue})}function yr(c,v,x,T){c.info(function(){return"XMLHTTP TEXT ("+v+"): "+tp(c,x)+(T?" "+T:"")})}function Al(c,v){c.info(function(){return"TIMEOUT: "+v})}Vi.prototype.info=function(){};function tp(c,v){if(!c.g)return v;if(!v)return null;try{var x=JSON.parse(v);if(x){for(c=0;c<x.length;c++)if(Array.isArray(x[c])){var T=x[c];if(!(2>T.length)){var G=T[1];if(Array.isArray(G)&&!(1>G.length)){var ee=G[0];if(ee!="noop"&&ee!="stop"&&ee!="close")for(var ue=1;ue<G.length;ue++)G[ue]=""}}}}return El(x)}catch{return v}}var Qa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Sc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},vr;function zi(){}C(zi,Fi),zi.prototype.g=function(){return new XMLHttpRequest},zi.prototype.i=function(){return{}},vr=new zi;function br(c,v,x,T){this.j=c,this.i=v,this.l=x,this.R=T||1,this.U=new Mi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new kc}function kc(){this.i=null,this.g="",this.h=!1}var jl={},Ya={};function Ja(c,v,x){c.L=1,c.v=Bs(Dn(v)),c.m=x,c.P=!0,Nl(c,null)}function Nl(c,v){c.F=Date.now(),et(c),c.A=Dn(c.v);var x=c.A,T=c.R;Array.isArray(T)||(T=[String(T)]),$s(x.i,"t",T),c.C=0,x=c.j.J,c.h=new kc,c.g=Bc(c.j,x?v:null,!c.m),0<c.O&&(c.M=new Oi(S(c.Y,c,c.g),c.O)),v=c.U,x=c.g,T=c.ca;var G="readystatechange";Array.isArray(G)||(G&&(Sl[0]=G.toString()),G=Sl);for(var ee=0;ee<G.length;ee++){var ue=yl(x,G[ee],T||v.handleEvent,!1,v.h||v);if(!ue)break;v.g[ue.key]=ue}v=c.H?_(c.H):{},c.m?(c.u||(c.u="POST"),v["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,v)):(c.u="GET",c.g.ea(c.A,c.u,null,v)),ls(),Bi(c.i,c.u,c.A,c.l,c.R,c.m)}br.prototype.ca=function(c){c=c.target;const v=this.M;v&&wn(c)==3?v.j():this.Y(c)},br.prototype.Y=function(c){try{if(c==this.g)e:{const Vt=wn(this.g);var v=this.g.Ba();const Gn=this.g.Z();if(!(3>Vt)&&(Vt!=3||this.g&&(this.h.h||this.g.oa()||Fl(this.g)))){this.J||Vt!=4||v==7||(v==8||0>=Gn?ls(3):ls(2)),$i(this);var x=this.g.Z();this.X=x;t:if(Ec(this)){var T=Fl(this.g);c="";var G=T.length,ee=wn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Hn(this),Ms(this);var ue="";break t}this.h.i=new d.TextDecoder}for(v=0;v<G;v++)this.h.h=!0,c+=this.h.i.decode(T[v],{stream:!(ee&&v==G-1)});T.length=0,this.h.g+=c,this.C=0,ue=this.h.g}else ue=this.g.oa();if(this.o=x==200,Ka(this.i,this.u,this.A,this.l,this.R,Vt,x),this.o){if(this.T&&!this.K){t:{if(this.g){var Ze,Rt=this.g;if((Ze=Rt.g?Rt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!M(Ze)){var Qe=Ze;break t}}Qe=null}if(x=Qe)yr(this.i,this.l,x,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Dl(this,x);else{this.o=!1,this.s=3,wt(12),Hn(this),Ms(this);break e}}if(this.P){x=!0;let Ln;for(;!this.J&&this.C<ue.length;)if(Ln=np(this,ue),Ln==Ya){Vt==4&&(this.s=4,wt(14),x=!1),yr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ln==jl){this.s=4,wt(15),yr(this.i,this.l,ue,"[Invalid Chunk]"),x=!1;break}else yr(this.i,this.l,Ln,null),Dl(this,Ln);if(Ec(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Vt!=4||ue.length!=0||this.h.h||(this.s=1,wt(16),x=!1),this.o=this.o&&x,!x)yr(this.i,this.l,ue,"[Invalid Chunked Response]"),Hn(this),Ms(this);else if(0<ue.length&&!this.W){this.W=!0;var Ut=this.j;Ut.g==this&&Ut.ba&&!Ut.M&&(Ut.j.info("Great, no buffering proxy detected. Bytes received: "+ue.length),Vl(Ut),Ut.M=!0,wt(11))}}else yr(this.i,this.l,ue,null),Dl(this,ue);Vt==4&&Hn(this),this.o&&!this.J&&(Vt==4?lo(this.j,this):(this.o=!1,et(this)))}else ro(this.g),x==400&&0<ue.indexOf("Unknown SID")?(this.s=3,wt(12)):(this.s=0,wt(13)),Hn(this),Ms(this)}}}catch{}finally{}};function Ec(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function np(c,v){var x=c.C,T=v.indexOf(`
`,x);return T==-1?Ya:(x=Number(v.substring(x,T)),isNaN(x)?jl:(T+=1,T+x>v.length?Ya:(v=v.slice(T,T+x),c.C=T+x,v)))}br.prototype.cancel=function(){this.J=!0,Hn(this)};function et(c){c.S=Date.now()+c.I,Cc(c,c.I)}function Cc(c,v){if(c.B!=null)throw Error("WatchDog timer not null");c.B=gr(S(c.ba,c),v)}function $i(c){c.B&&(d.clearTimeout(c.B),c.B=null)}br.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(Al(this.i,this.A),this.L!=2&&(ls(),wt(17)),Hn(this),this.s=2,Ms(this)):Cc(this,this.S-c)};function Ms(c){c.j.G==0||c.J||lo(c.j,c)}function Hn(c){$i(c);var v=c.M;v&&typeof v.ma=="function"&&v.ma(),c.M=null,kl(c.U),c.g&&(v=c.g,c.g=null,v.abort(),v.ma())}function Dl(c,v){try{var x=c.j;if(x.G!=0&&(x.g==c||hn(x.h,c))){if(!c.K&&hn(x.h,c)&&x.G==3){try{var T=x.Da.g.parse(v)}catch{T=null}if(Array.isArray(T)&&T.length==3){var G=T;if(G[0]==0){e:if(!x.u){if(x.g)if(x.g.F+3e3<c.F)oo(x),Er(x);else break e;ao(x),wt(18)}}else x.za=G[1],0<x.za-x.T&&37500>G[2]&&x.F&&x.v==0&&!x.C&&(x.C=gr(S(x.Za,x),6e3));if(1>=_c(x.h)&&x.ca){try{x.ca()}catch{}x.ca=void 0}}else fs(x,11)}else if((c.K||x.g==c)&&oo(x),!M(v))for(G=x.Da.g.parse(v),v=0;v<G.length;v++){let Qe=G[v];if(x.T=Qe[0],Qe=Qe[1],x.G==2)if(Qe[0]=="c"){x.K=Qe[1],x.ia=Qe[2];const Ut=Qe[3];Ut!=null&&(x.la=Ut,x.j.info("VER="+x.la));const Vt=Qe[4];Vt!=null&&(x.Aa=Vt,x.j.info("SVER="+x.Aa));const Gn=Qe[5];Gn!=null&&typeof Gn=="number"&&0<Gn&&(T=1.5*Gn,x.L=T,x.j.info("backChannelRequestTimeoutMs_="+T)),T=x;const Ln=c.g;if(Ln){const Yi=Ln.g?Ln.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Yi){var ee=T.h;ee.g||Yi.indexOf("spdy")==-1&&Yi.indexOf("quic")==-1&&Yi.indexOf("h2")==-1||(ee.j=ee.l,ee.g=new Set,ee.h&&(Rl(ee,ee.h),ee.h=null))}if(T.D){const co=Ln.g?Ln.g.getResponseHeader("X-HTTP-Session-Id"):null;co&&(T.ya=co,Xe(T.I,T.D,co))}}x.G=3,x.l&&x.l.ua(),x.ba&&(x.R=Date.now()-c.F,x.j.info("Handshake RTT: "+x.R+"ms")),T=x;var ue=c;if(T.qa=Vc(T,T.J?T.ia:null,T.W),ue.K){Ic(T.h,ue);var Ze=ue,Rt=T.L;Rt&&(Ze.I=Rt),Ze.B&&($i(Ze),et(Ze)),T.g=ue}else Qi(T);0<x.i.length&&Br(x)}else Qe[0]!="stop"&&Qe[0]!="close"||fs(x,7);else x.G==3&&(Qe[0]=="stop"||Qe[0]=="close"?Qe[0]=="stop"?fs(x,7):Gt(x):Qe[0]!="noop"&&x.l&&x.l.ta(Qe),x.v=0)}}ls(4)}catch{}}var Tc=class{constructor(c,v){this.g=c,this.map=v}};function qi(c){this.l=c||10,d.PerformanceNavigationTiming?(c=d.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Nn(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function _c(c){return c.h?1:c.g?c.g.size:0}function hn(c,v){return c.h?c.h==v:c.g?c.g.has(v):!1}function Rl(c,v){c.g?c.g.add(v):c.h=v}function Ic(c,v){c.h&&c.h==v?c.h=null:c.g&&c.g.has(v)&&c.g.delete(v)}qi.prototype.cancel=function(){if(this.i=Pc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Pc(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let v=c.i;for(const x of c.g.values())v=v.concat(x.D);return v}return N(c.i)}function Xa(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(f(c)){for(var v=[],x=c.length,T=0;T<x;T++)v.push(c[T]);return v}v=[],x=0;for(T in c)v[x++]=c[T];return v}function Za(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(f(c)||typeof c=="string"){var v=[];c=c.length;for(var x=0;x<c;x++)v.push(x);return v}v=[],x=0;for(const T in c)v[x++]=T;return v}}}function Fs(c,v){if(c.forEach&&typeof c.forEach=="function")c.forEach(v,void 0);else if(f(c)||typeof c=="string")Array.prototype.forEach.call(c,v,void 0);else for(var x=Za(c),T=Xa(c),G=T.length,ee=0;ee<G;ee++)v.call(void 0,T[ee],x&&x[ee],c)}var Hi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rp(c,v){if(c){c=c.split("&");for(var x=0;x<c.length;x++){var T=c[x].indexOf("="),G=null;if(0<=T){var ee=c[x].substring(0,T);G=c[x].substring(T+1)}else ee=c[x];v(ee,G?decodeURIComponent(G.replace(/\+/g," ")):"")}}}function us(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof us){this.h=c.h,Wi(this,c.j),this.o=c.o,this.g=c.g,Us(this,c.s),this.l=c.l;var v=c.i,x=new Fr;x.i=v.i,v.g&&(x.g=new Map(v.g),x.h=v.h),Vs(this,x),this.m=c.m}else c&&(v=String(c).match(Hi))?(this.h=!1,Wi(this,v[1]||"",!0),this.o=ze(v[2]||""),this.g=ze(v[3]||"",!0),Us(this,v[4]),this.l=ze(v[5]||"",!0),Vs(this,v[6]||"",!0),this.m=ze(v[7]||"")):(this.h=!1,this.i=new Fr(null,this.h))}us.prototype.toString=function(){var c=[],v=this.j;v&&c.push(zs(v,eo,!0),":");var x=this.g;return(x||v=="file")&&(c.push("//"),(v=this.o)&&c.push(zs(v,eo,!0),"@"),c.push(encodeURIComponent(String(x)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),x=this.s,x!=null&&c.push(":",String(x))),(x=this.l)&&(this.g&&x.charAt(0)!="/"&&c.push("/"),c.push(zs(x,x.charAt(0)=="/"?Nc:jc,!0))),(x=this.i.toString())&&c.push("?",x),(x=this.m)&&c.push("#",zs(x,Ll)),c.join("")};function Dn(c){return new us(c)}function Wi(c,v,x){c.j=x?ze(v,!0):v,c.j&&(c.j=c.j.replace(/:$/,""))}function Us(c,v){if(v){if(v=Number(v),isNaN(v)||0>v)throw Error("Bad port number "+v);c.s=v}else c.s=null}function Vs(c,v,x){v instanceof Fr?(c.i=v,Ur(c.i,c.h)):(x||(v=zs(v,Dc)),c.i=new Fr(v,c.h))}function Xe(c,v,x){c.i.set(v,x)}function Bs(c){return Xe(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function ze(c,v){return c?v?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function zs(c,v,x){return typeof c=="string"?(c=encodeURI(c).replace(v,Ac),x&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Ac(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var eo=/[#\/\?@]/g,jc=/[#\?:]/g,Nc=/[#\?]/g,Dc=/[#\?@]/g,Ll=/#/g;function Fr(c,v){this.h=this.g=null,this.i=c||null,this.j=!!v}function Wt(c){c.g||(c.g=new Map,c.h=0,c.i&&rp(c.i,function(v,x){c.add(decodeURIComponent(v.replace(/\+/g," ")),x)}))}t=Fr.prototype,t.add=function(c,v){Wt(this),this.i=null,c=Wn(this,c);var x=this.g.get(c);return x||this.g.set(c,x=[]),x.push(v),this.h+=1,this};function wr(c,v){Wt(c),v=Wn(c,v),c.g.has(v)&&(c.i=null,c.h-=c.g.get(v).length,c.g.delete(v))}function xr(c,v){return Wt(c),v=Wn(c,v),c.g.has(v)}t.forEach=function(c,v){Wt(this),this.g.forEach(function(x,T){x.forEach(function(G){c.call(v,G,T,this)},this)},this)},t.na=function(){Wt(this);const c=Array.from(this.g.values()),v=Array.from(this.g.keys()),x=[];for(let T=0;T<v.length;T++){const G=c[T];for(let ee=0;ee<G.length;ee++)x.push(v[T])}return x},t.V=function(c){Wt(this);let v=[];if(typeof c=="string")xr(this,c)&&(v=v.concat(this.g.get(Wn(this,c))));else{c=Array.from(this.g.values());for(let x=0;x<c.length;x++)v=v.concat(c[x])}return v},t.set=function(c,v){return Wt(this),this.i=null,c=Wn(this,c),xr(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[v]),this.h+=1,this},t.get=function(c,v){return c?(c=this.V(c),0<c.length?String(c[0]):v):v};function $s(c,v,x){wr(c,v),0<x.length&&(c.i=null,c.g.set(Wn(c,v),N(x)),c.h+=x.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],v=Array.from(this.g.keys());for(var x=0;x<v.length;x++){var T=v[x];const ee=encodeURIComponent(String(T)),ue=this.V(T);for(T=0;T<ue.length;T++){var G=ee;ue[T]!==""&&(G+="="+encodeURIComponent(String(ue[T]))),c.push(G)}}return this.i=c.join("&")};function Wn(c,v){return v=String(v),c.j&&(v=v.toLowerCase()),v}function Ur(c,v){v&&!c.j&&(Wt(c),c.i=null,c.g.forEach(function(x,T){var G=T.toLowerCase();T!=G&&(wr(this,T),$s(this,G,x))},c)),c.j=v}function sp(c,v){const x=new Vi;if(d.Image){const T=new Image;T.onload=E(bn,x,"TestLoadImage: loaded",!0,v,T),T.onerror=E(bn,x,"TestLoadImage: error",!1,v,T),T.onabort=E(bn,x,"TestLoadImage: abort",!1,v,T),T.ontimeout=E(bn,x,"TestLoadImage: timeout",!1,v,T),d.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=c}else v(!1)}function Rc(c,v){const x=new Vi,T=new AbortController,G=setTimeout(()=>{T.abort(),bn(x,"TestPingServer: timeout",!1,v)},1e4);fetch(c,{signal:T.signal}).then(ee=>{clearTimeout(G),ee.ok?bn(x,"TestPingServer: ok",!0,v):bn(x,"TestPingServer: server error",!1,v)}).catch(()=>{clearTimeout(G),bn(x,"TestPingServer: error",!1,v)})}function bn(c,v,x,T,G){try{G&&(G.onload=null,G.onerror=null,G.onabort=null,G.ontimeout=null),T(x)}catch{}}function ip(){this.g=new Tl}function Lc(c,v,x){const T=x||"";try{Fs(c,function(G,ee){let ue=G;p(G)&&(ue=El(G)),v.push(T+ee+"="+encodeURIComponent(ue))})}catch(G){throw v.push(T+"type="+encodeURIComponent("_badmap")),G}}function cs(c){this.l=c.Ub||null,this.j=c.eb||!1}C(cs,Fi),cs.prototype.g=function(){return new Gi(this.l,this.j)},cs.prototype.i=function(c){return function(){return c}}({});function Gi(c,v){Nt.call(this),this.D=c,this.o=v,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Gi,Nt),t=Gi.prototype,t.open=function(c,v){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=v,this.readyState=1,kr(this)},t.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const v={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(v.body=c),(this.D||d).fetch(new Request(this.A,v)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Sr(this)),this.readyState=0},t.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,kr(this)),this.g&&(this.readyState=3,kr(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Oc(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Oc(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}t.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var v=c.value?c.value:new Uint8Array(0);(v=this.v.decode(v,{stream:!c.done}))&&(this.response=this.responseText+=v)}c.done?Sr(this):kr(this),this.readyState==3&&Oc(this)}},t.Ra=function(c){this.g&&(this.response=this.responseText=c,Sr(this))},t.Qa=function(c){this.g&&(this.response=c,Sr(this))},t.ga=function(){this.g&&Sr(this)};function Sr(c){c.readyState=4,c.l=null,c.j=null,c.v=null,kr(c)}t.setRequestHeader=function(c,v){this.u.append(c,v)},t.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],v=this.h.entries();for(var x=v.next();!x.done;)x=x.value,c.push(x[0]+": "+x[1]),x=v.next();return c.join(`\r
`)};function kr(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Gi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function ds(c){let v="";return Z(c,function(x,T){v+=T,v+=":",v+=x,v+=`\r
`}),v}function qs(c,v,x){e:{for(T in x){var T=!1;break e}T=!0}T||(x=ds(x),typeof c=="string"?x!=null&&encodeURIComponent(String(x)):Xe(c,v,x))}function at(c){Nt.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(at,Nt);var ap=/^https?$/i,Ol=["POST","PUT"];t=at.prototype,t.Ha=function(c){this.J=c},t.ea=function(c,v,x,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);v=v?v.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():vr.g(),this.v=this.o?qa(this.o):qa(vr),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(v,String(c),!0),this.B=!1}catch(ee){Ki(this,ee);return}if(c=x||"",x=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var G in T)x.set(G,T[G]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const ee of T.keys())x.set(ee,T.get(ee));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(x.keys()).find(ee=>ee.toLowerCase()=="content-type"),G=d.FormData&&c instanceof d.FormData,!(0<=Array.prototype.indexOf.call(Ol,v,void 0))||T||G||x.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[ee,ue]of x)this.g.setRequestHeader(ee,ue);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{no(this),this.u=!0,this.g.send(c),this.u=!1}catch(ee){Ki(this,ee)}};function Ki(c,v){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=v,c.m=5,to(c),Rn(c)}function to(c){c.A||(c.A=!0,Dt(c,"complete"),Dt(c,"error"))}t.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Dt(this,"complete"),Dt(this,"abort"),Rn(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Rn(this,!0)),at.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Ml(this):this.bb())},t.bb=function(){Ml(this)};function Ml(c){if(c.h&&typeof l<"u"&&(!c.v[1]||wn(c)!=4||c.Z()!=2)){if(c.u&&wn(c)==4)xl(c.Ea,0,c);else if(Dt(c,"readystatechange"),wn(c)==4){c.h=!1;try{const ue=c.Z();e:switch(ue){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var v=!0;break e;default:v=!1}var x;if(!(x=v)){var T;if(T=ue===0){var G=String(c.D).match(Hi)[1]||null;!G&&d.self&&d.self.location&&(G=d.self.location.protocol.slice(0,-1)),T=!ap.test(G?G.toLowerCase():"")}x=T}if(x)Dt(c,"complete"),Dt(c,"success");else{c.m=6;try{var ee=2<wn(c)?c.g.statusText:""}catch{ee=""}c.l=ee+" ["+c.Z()+"]",to(c)}}finally{Rn(c)}}}}function Rn(c,v){if(c.g){no(c);const x=c.g,T=c.v[0]?()=>{}:null;c.g=null,c.v=null,v||Dt(c,"ready");try{x.onreadystatechange=T}catch{}}}function no(c){c.I&&(d.clearTimeout(c.I),c.I=null)}t.isActive=function(){return!!this.g};function wn(c){return c.g?c.g.readyState:0}t.Z=function(){try{return 2<wn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(c){if(this.g){var v=this.g.responseText;return c&&v.indexOf(c)==0&&(v=v.substring(c.length)),Cl(v)}};function Fl(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function ro(c){const v={};c=(c.g&&2<=wn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<c.length;T++){if(M(c[T]))continue;var x=z(c[T]);const G=x[0];if(x=x[1],typeof x!="string")continue;x=x.trim();const ee=v[G]||[];v[G]=ee,ee.push(x)}P(v,function(T){return T.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Vr(c,v,x){return x&&x.internalChannelParams&&x.internalChannelParams[c]||v}function Ul(c){this.Aa=0,this.i=[],this.j=new Vi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Vr("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Vr("baseRetryDelayMs",5e3,c),this.cb=Vr("retryDelaySeedMs",1e4,c),this.Wa=Vr("forwardChannelMaxRetries",2,c),this.wa=Vr("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new qi(c&&c.concurrentRequestLimit),this.Da=new ip,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Ul.prototype,t.la=8,t.G=1,t.connect=function(c,v,x,T){wt(0),this.W=c,this.H=v||{},x&&T!==void 0&&(this.H.OSID=x,this.H.OAID=T),this.F=this.X,this.I=Vc(this,null,this.W),Br(this)};function Gt(c){if(so(c),c.G==3){var v=c.U++,x=Dn(c.I);if(Xe(x,"SID",c.K),Xe(x,"RID",v),Xe(x,"TYPE","terminate"),hs(c,x),v=new br(c,c.j,v),v.L=2,v.v=Bs(Dn(x)),x=!1,d.navigator&&d.navigator.sendBeacon)try{x=d.navigator.sendBeacon(v.v.toString(),"")}catch{}!x&&d.Image&&(new Image().src=v.v,x=!0),x||(v.g=Bc(v.j,null),v.g.ea(v.v)),v.F=Date.now(),et(v)}Uc(c)}function Er(c){c.g&&(Vl(c),c.g.cancel(),c.g=null)}function so(c){Er(c),c.u&&(d.clearTimeout(c.u),c.u=null),oo(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&d.clearTimeout(c.s),c.s=null)}function Br(c){if(!Nn(c.h)&&!c.s){c.s=!0;var v=c.Ga;Ae||Y(),ae||(Ae(),ae=!0),de.add(v,c),c.B=0}}function op(c,v){return _c(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=v.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=gr(S(c.Ga,c,v),Fc(c,c.B)),c.B++,!0)}t.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const G=new br(this,this.j,c);let ee=this.o;if(this.S&&(ee?(ee=_(ee),F(ee,this.S)):ee=this.S),this.m!==null||this.O||(G.H=ee,ee=null),this.P)e:{for(var v=0,x=0;x<this.i.length;x++){t:{var T=this.i[x];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break t}T=void 0}if(T===void 0)break;if(v+=T,4096<v){v=x;break e}if(v===4096||x===this.i.length-1){v=x+1;break e}}v=1e3}else v=1e3;v=Hs(this,G,v),x=Dn(this.I),Xe(x,"RID",c),Xe(x,"CVER",22),this.D&&Xe(x,"X-HTTP-Session-Id",this.D),hs(this,x),ee&&(this.O?v="headers="+encodeURIComponent(String(ds(ee)))+"&"+v:this.m&&qs(x,this.m,ee)),Rl(this.h,G),this.Ua&&Xe(x,"TYPE","init"),this.P?(Xe(x,"$req",v),Xe(x,"SID","null"),G.T=!0,Ja(G,x,null)):Ja(G,x,v),this.G=2}}else this.G==3&&(c?io(this,c):this.i.length==0||Nn(this.h)||io(this))};function io(c,v){var x;v?x=v.l:x=c.U++;const T=Dn(c.I);Xe(T,"SID",c.K),Xe(T,"RID",x),Xe(T,"AID",c.T),hs(c,T),c.m&&c.o&&qs(T,c.m,c.o),x=new br(c,c.j,x,c.B+1),c.m===null&&(x.H=c.o),v&&(c.i=v.D.concat(c.i)),v=Hs(c,x,1e3),x.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),Rl(c.h,x),Ja(x,T,v)}function hs(c,v){c.H&&Z(c.H,function(x,T){Xe(v,T,x)}),c.l&&Fs({},function(x,T){Xe(v,T,x)})}function Hs(c,v,x){x=Math.min(c.i.length,x);var T=c.l?S(c.l.Na,c.l,c):null;e:{var G=c.i;let ee=-1;for(;;){const ue=["count="+x];ee==-1?0<x?(ee=G[0].g,ue.push("ofs="+ee)):ee=0:ue.push("ofs="+ee);let Ze=!0;for(let Rt=0;Rt<x;Rt++){let Qe=G[Rt].g;const Ut=G[Rt].map;if(Qe-=ee,0>Qe)ee=Math.max(0,G[Rt].g-100),Ze=!1;else try{Lc(Ut,ue,"req"+Qe+"_")}catch{T&&T(Ut)}}if(Ze){T=ue.join("&");break e}}}return c=c.i.splice(0,x),v.D=c,T}function Qi(c){if(!c.g&&!c.u){c.Y=1;var v=c.Fa;Ae||Y(),ae||(Ae(),ae=!0),de.add(v,c),c.v=0}}function ao(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=gr(S(c.Fa,c),Fc(c,c.v)),c.v++,!0)}t.Fa=function(){if(this.u=null,Mc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=gr(S(this.ab,this),c)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,wt(10),Er(this),Mc(this))};function Vl(c){c.A!=null&&(d.clearTimeout(c.A),c.A=null)}function Mc(c){c.g=new br(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var v=Dn(c.qa);Xe(v,"RID","rpc"),Xe(v,"SID",c.K),Xe(v,"AID",c.T),Xe(v,"CI",c.F?"0":"1"),!c.F&&c.ja&&Xe(v,"TO",c.ja),Xe(v,"TYPE","xmlhttp"),hs(c,v),c.m&&c.o&&qs(v,c.m,c.o),c.L&&(c.g.I=c.L);var x=c.g;c=c.ia,x.L=1,x.v=Bs(Dn(v)),x.m=null,x.P=!0,Nl(x,c)}t.Za=function(){this.C!=null&&(this.C=null,Er(this),ao(this),wt(19))};function oo(c){c.C!=null&&(d.clearTimeout(c.C),c.C=null)}function lo(c,v){var x=null;if(c.g==v){oo(c),Vl(c),c.g=null;var T=2}else if(hn(c.h,v))x=v.D,Ic(c.h,v),T=1;else return;if(c.G!=0){if(v.o)if(T==1){x=v.m?v.m.length:0,v=Date.now()-v.F;var G=c.B;T=Ui(),Dt(T,new Ga(T,x)),Br(c)}else Qi(c);else if(G=v.s,G==3||G==0&&0<v.X||!(T==1&&op(c,v)||T==2&&ao(c)))switch(x&&0<x.length&&(v=c.h,v.i=v.i.concat(x)),G){case 1:fs(c,5);break;case 4:fs(c,10);break;case 3:fs(c,6);break;default:fs(c,2)}}}function Fc(c,v){let x=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(x*=2),x*v}function fs(c,v){if(c.j.info("Error code "+v),v==2){var x=S(c.fb,c),T=c.Xa;const G=!T;T=new us(T||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Wi(T,"https"),Bs(T),G?sp(T.toString(),x):Rc(T.toString(),x)}else wt(2);c.G=0,c.l&&c.l.sa(v),Uc(c),so(c)}t.fb=function(c){c?(this.j.info("Successfully pinged google.com"),wt(2)):(this.j.info("Failed to ping google.com"),wt(1))};function Uc(c){if(c.G=0,c.ka=[],c.l){const v=Pc(c.h);(v.length!=0||c.i.length!=0)&&(I(c.ka,v),I(c.ka,c.i),c.h.i.length=0,N(c.i),c.i.length=0),c.l.ra()}}function Vc(c,v,x){var T=x instanceof us?Dn(x):new us(x);if(T.g!="")v&&(T.g=v+"."+T.g),Us(T,T.s);else{var G=d.location;T=G.protocol,v=v?v+"."+G.hostname:G.hostname,G=+G.port;var ee=new us(null);T&&Wi(ee,T),v&&(ee.g=v),G&&Us(ee,G),x&&(ee.l=x),T=ee}return x=c.D,v=c.ya,x&&v&&Xe(T,x,v),Xe(T,"VER",c.la),hs(c,T),T}function Bc(c,v,x){if(v&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return v=c.Ca&&!c.pa?new at(new cs({eb:x})):new at(c.pa),v.Ha(c.J),v}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Bl(){}t=Bl.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function uo(){}uo.prototype.g=function(c,v){return new fn(c,v)};function fn(c,v){Nt.call(this),this.g=new Ul(v),this.l=c,this.h=v&&v.messageUrlParams||null,c=v&&v.messageHeaders||null,v&&v.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=v&&v.initMessageHeaders||null,v&&v.messageContentType&&(c?c["X-WebChannel-Content-Type"]=v.messageContentType:c={"X-WebChannel-Content-Type":v.messageContentType}),v&&v.va&&(c?c["X-WebChannel-Client-Profile"]=v.va:c={"X-WebChannel-Client-Profile":v.va}),this.g.S=c,(c=v&&v.Sb)&&!M(c)&&(this.g.m=c),this.v=v&&v.supportsCrossDomainXhr||!1,this.u=v&&v.sendRawJson||!1,(v=v&&v.httpSessionIdParam)&&!M(v)&&(this.g.D=v,c=this.h,c!==null&&v in c&&(c=this.h,v in c&&delete c[v])),this.j=new zr(this)}C(fn,Nt),fn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},fn.prototype.close=function(){Gt(this.g)},fn.prototype.o=function(c){var v=this.g;if(typeof c=="string"){var x={};x.__data__=c,c=x}else this.u&&(x={},x.__data__=El(c),c=x);v.i.push(new Tc(v.Ya++,c)),v.G==3&&Br(v)},fn.prototype.N=function(){this.g.l=null,delete this.j,Gt(this.g),delete this.g,fn.aa.N.call(this)};function zc(c){Or.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var v=c.__sm__;if(v){e:{for(const x in v){c=x;break e}c=void 0}(this.i=c)&&(c=this.i,v=v!==null&&c in v?v[c]:void 0),this.data=v}else this.data=c}C(zc,Or);function $c(){Wa.call(this),this.status=1}C($c,Wa);function zr(c){this.g=c}C(zr,Bl),zr.prototype.ua=function(){Dt(this.g,"a")},zr.prototype.ta=function(c){Dt(this.g,new zc(c))},zr.prototype.sa=function(c){Dt(this.g,new $c)},zr.prototype.ra=function(){Dt(this.g,"b")},uo.prototype.createWebChannel=uo.prototype.g,fn.prototype.send=fn.prototype.o,fn.prototype.open=fn.prototype.m,fn.prototype.close=fn.prototype.close,xk=function(){return new uo},wk=function(){return Ui()},bk=Mr,Fg={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Qa.NO_ERROR=0,Qa.TIMEOUT=8,Qa.HTTP_ERROR=6,yh=Qa,Sc.COMPLETE="complete",vk=Sc,Ha.EventType=qn,qn.OPEN="a",qn.CLOSE="b",qn.ERROR="c",qn.MESSAGE="d",Nt.prototype.listen=Nt.prototype.K,Su=Ha,at.prototype.listenOnce=at.prototype.L,at.prototype.getLastError=at.prototype.Ka,at.prototype.getLastErrorCode=at.prototype.Ba,at.prototype.getStatus=at.prototype.Z,at.prototype.getResponseJson=at.prototype.Oa,at.prototype.getResponseText=at.prototype.oa,at.prototype.send=at.prototype.ea,at.prototype.setWithCredentials=at.prototype.Ha,yk=at}).apply(typeof Fd<"u"?Fd:typeof self<"u"?self:typeof window<"u"?window:{});const mw="@firebase/firestore";/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ln{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ln.UNAUTHENTICATED=new ln(null),ln.GOOGLE_CREDENTIALS=new ln("google-credentials-uid"),ln.FIRST_PARTY=new ln("first-party-uid"),ln.MOCK_USER=new ln("mock-user");/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/let fl="10.14.0";/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Ca=new mf("@firebase/firestore");function hu(){return Ca.logLevel}function ye(t,...e){if(Ca.logLevel<=$e.DEBUG){const n=e.map($y);Ca.debug(`Firestore (${fl}): ${t}`,...n)}}function Ns(t,...e){if(Ca.logLevel<=$e.ERROR){const n=e.map($y);Ca.error(`Firestore (${fl}): ${t}`,...n)}}function Ko(t,...e){if(Ca.logLevel<=$e.WARN){const n=e.map($y);Ca.warn(`Firestore (${fl}): ${t}`,...n)}}function $y(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(t)}catch{return t}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Ne(t="Unexpected state"){const e=`FIRESTORE (${fl}) INTERNAL ASSERTION FAILED: `+t;throw Ns(e),new Error(e)}function Je(t,e){t||Ne()}function Le(t,e){return t}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const se={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class xe extends pr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class wi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Sk{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class $P{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ln.UNAUTHENTICATED))}shutdown(){}}class qP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class HP{constructor(e){this.t=e,this.currentUser=ln.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Je(this.o===void 0);let r=this.i;const i=f=>this.i!==r?(r=this.i,n(f)):Promise.resolve();let o=new wi;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new wi,e.enqueueRetryable(()=>i(this.currentUser))};const l=()=>{const f=o;e.enqueueRetryable(async()=>{await f.promise,await i(this.currentUser)})},d=f=>{ye("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(f=>d(f)),setTimeout(()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?d(f):(ye("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new wi)}},0),l()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ye("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Je(typeof r.accessToken=="string"),new Sk(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Je(e===null||typeof e=="string"),new ln(e)}}class WP{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ln.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class GP{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new WP(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ln.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class KP{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class QP{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Je(this.o===void 0);const r=o=>{o.error!=null&&ye("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const l=o.token!==this.R;return this.R=o.token,ye("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{ye("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):ye("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Je(typeof n.token=="string"),this.R=n.token,new KP(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function YP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class kk{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=YP(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<n&&(r+=e.charAt(i[o]%e.length))}return r}}function Ke(t,e){return t<e?-1:t>e?1:0}function Qo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ft{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new xe(se.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new xe(se.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new xe(se.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new xe(se.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ft.fromMillis(Date.now())}static fromDate(e){return Ft.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ft(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ke(this.nanoseconds,e.nanoseconds):Ke(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Re{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Re(e)}static min(){return new Re(new Ft(0,0))}static max(){return new Re(new Ft(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Wu{constructor(e,n,r){n===void 0?n=0:n>e.length&&Ne(),r===void 0?r=e.length-n:r>e.length-n&&Ne(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Wu.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Wu?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const o=e.get(i),l=n.get(i);if(o<l)return-1;if(o>l)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class lt extends Wu{construct(e,n,r){return new lt(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new xe(se.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new lt(n)}static emptyPath(){return new lt([])}}const JP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Xt extends Wu{construct(e,n,r){return new Xt(e,n,r)}static isValidIdentifier(e){return JP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Xt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const o=()=>{if(r.length===0)throw new xe(se.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let l=!1;for(;i<e.length;){const d=e[i];if(d==="\\"){if(i+1===e.length)throw new xe(se.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const f=e[i+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new xe(se.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=f,i+=2}else d==="`"?(l=!l,i++):d!=="."||l?(r+=d,i++):(o(),i++)}if(o(),l)throw new xe(se.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Xt(n)}static emptyPath(){return new Xt([])}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ee{constructor(e){this.path=e}static fromPath(e){return new Ee(lt.fromString(e))}static fromName(e){return new Ee(lt.fromString(e).popFirst(5))}static empty(){return new Ee(lt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&lt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return lt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ee(new lt(e.slice()))}}function XP(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Re.fromTimestamp(r===1e9?new Ft(n+1,0):new Ft(n,r));return new Ci(i,Ee.empty(),e)}function ZP(t){return new Ci(t.readTime,t.key,-1)}class Ci{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ci(Re.min(),Ee.empty(),-1)}static max(){return new Ci(Re.max(),Ee.empty(),-1)}}function eA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Ee.comparator(t.documentKey,e.documentKey),n!==0?n:Ke(t.largestBatchId,e.largestBatchId))}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const tA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class nA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function oc(t){if(t.code!==se.FAILED_PRECONDITION||t.message!==tA)throw t;ye("LocalStore","Unexpectedly lost primary lease")}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class re{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Ne(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new re((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(n,o).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof re?n:re.resolve(n)}catch(n){return re.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):re.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):re.reject(n)}static resolve(e){return new re((n,r)=>{n(e)})}static reject(e){return new re((n,r)=>{r(e)})}static waitFor(e){return new re((n,r)=>{let i=0,o=0,l=!1;e.forEach(d=>{++i,d.next(()=>{++o,l&&o===i&&n()},f=>r(f))}),l=!0,o===i&&n()})}static or(e){let n=re.resolve(!1);for(const r of e)n=n.next(i=>i?re.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,o)=>{r.push(n.call(this,i,o))}),this.waitFor(r)}static mapArray(e,n){return new re((r,i)=>{const o=e.length,l=new Array(o);let d=0;for(let f=0;f<o;f++){const p=f;n(e[p]).next(y=>{l[p]=y,++d,d===o&&r(l)},y=>i(y))}})}static doWhile(e,n){return new re((r,i)=>{const o=()=>{e()===!0?n().next(()=>{o()},i):r()};o()})}}function rA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function lc(t){return t.name==="IndexedDbTransactionError"}/**
* @license
* Copyright 2018 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class qy{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}qy.oe=-1;function xf(t){return t==null}function Vh(t){return t===0&&1/t==-1/0}function sA(t){return typeof t=="number"&&Number.isInteger(t)&&!Vh(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function gw(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Oa(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ek(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class gt{constructor(e,n){this.comparator=e,this.root=n||Jt.EMPTY}insert(e,n){return new gt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Jt.BLACK,null,null))}remove(e){return new gt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Jt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ud(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ud(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ud(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ud(this.root,e,this.comparator,!0)}}class Ud{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=n?r(e.key,n):1,n&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Jt{constructor(e,n,r,i,o){this.key=e,this.value=n,this.color=r??Jt.RED,this.left=i??Jt.EMPTY,this.right=o??Jt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,o){return new Jt(e??this.key,n??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,n,r),null):o===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Jt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Jt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Jt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Jt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Ne();const e=this.left.check();if(e!==this.right.check())throw Ne();return e+(this.isRed()?0:1)}}Jt.EMPTY=null,Jt.RED=!0,Jt.BLACK=!1;Jt.EMPTY=new class{constructor(){this.size=0}get key(){throw Ne()}get value(){throw Ne()}get color(){throw Ne()}get left(){throw Ne()}get right(){throw Ne()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Jt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Zt{constructor(e){this.comparator=e,this.data=new gt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new yw(this.data.getIterator())}getIteratorFrom(e){return new yw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Zt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Zt(this.comparator);return n.data=e,n}}class yw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Vn{constructor(e){this.fields=e,e.sort(Xt.comparator)}static empty(){return new Vn([])}unionWith(e){let n=new Zt(Xt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Vn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Qo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ck extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class en{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Ck("Invalid base64 string: "+i):i}}(e);return new en(n)}static fromUint8Array(e){const n=function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i}(e);return new en(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ke(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}en.EMPTY_BYTE_STRING=new en("");const iA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ti(t){if(Je(!!t),typeof t=="string"){let e=0;const n=iA.exec(t);if(Je(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:kt(t.seconds),nanos:kt(t.nanos)}}function kt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ta(t){return typeof t=="string"?en.fromBase64String(t):en.fromUint8Array(t)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Hy(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Wy(t){const e=t.mapValue.fields.__previous_value__;return Hy(e)?Wy(e):e}function Gu(t){const e=Ti(t.mapValue.fields.__local_write_time__.timestampValue);return new Ft(e.seconds,e.nanos)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class aA{constructor(e,n,r,i,o,l,d,f,p){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=l,this.autoDetectLongPolling=d,this.longPollingOptions=f,this.useFetchStreams=p}}class Ku{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ku("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ku&&e.projectId===this.projectId&&e.database===this.database}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Vd={mapValue:{}};function _a(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Hy(t)?4:lA(t)?9007199254740991:oA(t)?10:11:Ne()}function ts(t,e){if(t===e)return!0;const n=_a(t);if(n!==_a(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Gu(t).isEqual(Gu(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const o=Ti(r.timestampValue),l=Ti(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Ta(r.bytesValue).isEqual(Ta(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return kt(r.geoPointValue.latitude)===kt(i.geoPointValue.latitude)&&kt(r.geoPointValue.longitude)===kt(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return kt(r.integerValue)===kt(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const o=kt(r.doubleValue),l=kt(i.doubleValue);return o===l?Vh(o)===Vh(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Qo(t.arrayValue.values||[],e.arrayValue.values||[],ts);case 10:case 11:return function(r,i){const o=r.mapValue.fields||{},l=i.mapValue.fields||{};if(gw(o)!==gw(l))return!1;for(const d in o)if(o.hasOwnProperty(d)&&(l[d]===void 0||!ts(o[d],l[d])))return!1;return!0}(t,e);default:return Ne()}}function Qu(t,e){return(t.values||[]).find(n=>ts(n,e))!==void 0}function Yo(t,e){if(t===e)return 0;const n=_a(t),r=_a(e);if(n!==r)return Ke(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ke(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=kt(i.integerValue||i.doubleValue),d=kt(o.integerValue||o.doubleValue);return l<d?-1:l>d?1:l===d?0:isNaN(l)?isNaN(d)?0:-1:1}(t,e);case 3:return vw(t.timestampValue,e.timestampValue);case 4:return vw(Gu(t),Gu(e));case 5:return Ke(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Ta(i),d=Ta(o);return l.compareTo(d)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),d=o.split("/");for(let f=0;f<l.length&&f<d.length;f++){const p=Ke(l[f],d[f]);if(p!==0)return p}return Ke(l.length,d.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=Ke(kt(i.latitude),kt(o.latitude));return l!==0?l:Ke(kt(i.longitude),kt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return bw(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,d,f,p;const y=i.fields||{},w=o.fields||{},S=(l=y.value)===null||l===void 0?void 0:l.arrayValue,E=(d=w.value)===null||d===void 0?void 0:d.arrayValue,C=Ke(((f=S==null?void 0:S.values)===null||f===void 0?void 0:f.length)||0,((p=E==null?void 0:E.values)===null||p===void 0?void 0:p.length)||0);return C!==0?C:bw(S,E)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Vd.mapValue&&o===Vd.mapValue)return 0;if(i===Vd.mapValue)return 1;if(o===Vd.mapValue)return-1;const l=i.fields||{},d=Object.keys(l),f=o.fields||{},p=Object.keys(f);d.sort(),p.sort();for(let y=0;y<d.length&&y<p.length;++y){const w=Ke(d[y],p[y]);if(w!==0)return w;const S=Yo(l[d[y]],f[p[y]]);if(S!==0)return S}return Ke(d.length,p.length)}(t.mapValue,e.mapValue);default:throw Ne()}}function vw(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ke(t,e);const n=Ti(t),r=Ti(e),i=Ke(n.seconds,r.seconds);return i!==0?i:Ke(n.nanos,r.nanos)}function bw(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const o=Yo(n[i],r[i]);if(o)return o}return Ke(n.length,r.length)}function Jo(t){return Ug(t)}function Ug(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(e){const n=Ti(e);return`time(${n.seconds},${n.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(e){return Ta(e).toBase64()}(t.bytesValue):"referenceValue"in t?function(e){return Ee.fromName(e).toString()}(t.referenceValue):"geoPointValue"in t?function(e){return`geo(${e.latitude},${e.longitude})`}(t.geoPointValue):"arrayValue"in t?function(e){let n="[",r=!0;for(const i of e.values||[])r?r=!1:n+=",",n+=Ug(i);return n+"]"}(t.arrayValue):"mapValue"in t?function(e){const n=Object.keys(e.fields||{}).sort();let r="{",i=!0;for(const o of n)i?i=!1:r+=",",r+=`${o}:${Ug(e.fields[o])}`;return r+"}"}(t.mapValue):Ne()}function Vg(t){return!!t&&"integerValue"in t}function Gy(t){return!!t&&"arrayValue"in t}function ww(t){return!!t&&"nullValue"in t}function xw(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function vh(t){return!!t&&"mapValue"in t}function oA(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Iu(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Oa(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Iu(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Iu(t.arrayValue.values[n]);return e}return Object.assign({},t)}function lA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class _n{constructor(e){this.value=e}static empty(){return new _n({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!vh(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Iu(n)}setAll(e){let n=Xt.emptyPath(),r={},i=[];e.forEach((l,d)=>{if(!n.isImmediateParentOf(d)){const f=this.getFieldsMap(n);this.applyChanges(f,r,i),r={},i=[],n=d.popLast()}l?r[d.lastSegment()]=Iu(l):i.push(d.lastSegment())});const o=this.getFieldsMap(n);this.applyChanges(o,r,i)}delete(e){const n=this.field(e.popLast());vh(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ts(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];vh(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Oa(n,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new _n(Iu(this.value))}}function Tk(t){const e=[];return Oa(t.fields,(n,r)=>{const i=new Xt([n]);if(vh(r)){const o=Tk(r.mapValue).fields;if(o.length===0)e.push(i);else for(const l of o)e.push(i.child(l))}else e.push(i)}),new Vn(e)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class un{constructor(e,n,r,i,o,l,d){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=o,this.data=l,this.documentState=d}static newInvalidDocument(e){return new un(e,0,Re.min(),Re.min(),Re.min(),_n.empty(),0)}static newFoundDocument(e,n,r,i){return new un(e,1,n,Re.min(),r,i,0)}static newNoDocument(e,n){return new un(e,2,n,Re.min(),Re.min(),_n.empty(),0)}static newUnknownDocument(e,n){return new un(e,3,n,Re.min(),Re.min(),_n.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=_n.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=_n.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof un&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new un(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Bh{constructor(e,n){this.position=e,this.inclusive=n}}function Sw(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const o=e[i],l=t.position[i];if(o.field.isKeyField()?r=Ee.comparator(Ee.fromName(l.referenceValue),n.key):r=Yo(l,n.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function kw(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ts(t.position[n],e.position[n]))return!1;return!0}/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class zh{constructor(e,n="asc"){this.field=e,this.dir=n}}function uA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class _k{}class Mt extends _k{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new dA(e,n,r):n==="array-contains"?new pA(e,r):n==="in"?new mA(e,r):n==="not-in"?new gA(e,r):n==="array-contains-any"?new yA(e,r):new Mt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new hA(e,r):new fA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Yo(n,this.value)):n!==null&&_a(this.value)===_a(n)&&this.matchesComparison(Yo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ne()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ns extends _k{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new ns(e,n)}matches(e){return Ik(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Ik(t){return t.op==="and"}function Pk(t){return cA(t)&&Ik(t)}function cA(t){for(const e of t.filters)if(e instanceof ns)return!1;return!0}function Bg(t){if(t instanceof Mt)return t.field.canonicalString()+t.op.toString()+Jo(t.value);if(Pk(t))return t.filters.map(e=>Bg(e)).join(",");{const e=t.filters.map(n=>Bg(n)).join(",");return`${t.op}(${e})`}}function Ak(t,e){return t instanceof Mt?function(n,r){return r instanceof Mt&&n.op===r.op&&n.field.isEqual(r.field)&&ts(n.value,r.value)}(t,e):t instanceof ns?function(n,r){return r instanceof ns&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,o,l)=>i&&Ak(o,r.filters[l]),!0):!1}(t,e):void Ne()}function jk(t){return t instanceof Mt?function(e){return`${e.field.canonicalString()} ${e.op} ${Jo(e.value)}`}(t):t instanceof ns?function(e){return e.op.toString()+" {"+e.getFilters().map(jk).join(" ,")+"}"}(t):"Filter"}class dA extends Mt{constructor(e,n,r){super(e,n,r),this.key=Ee.fromName(r.referenceValue)}matches(e){const n=Ee.comparator(e.key,this.key);return this.matchesComparison(n)}}class hA extends Mt{constructor(e,n){super(e,"in",n),this.keys=Nk("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class fA extends Mt{constructor(e,n){super(e,"not-in",n),this.keys=Nk("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Nk(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Ee.fromName(r.referenceValue))}class pA extends Mt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Gy(n)&&Qu(n.arrayValue,this.value)}}class mA extends Mt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Qu(this.value.arrayValue,n)}}class gA extends Mt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Qu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Qu(this.value.arrayValue,n)}}class yA extends Mt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Gy(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Qu(this.value.arrayValue,r))}}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class vA{constructor(e,n=null,r=[],i=[],o=null,l=null,d=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=l,this.endAt=d,this.ue=null}}function Ew(t,e=null,n=[],r=[],i=null,o=null,l=null){return new vA(t,e,n,r,i,o,l)}function Ky(t){const e=Le(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Bg(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),xf(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Jo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Jo(r)).join(",")),e.ue=n}return e.ue}function Qy(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!uA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Ak(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!kw(t.startAt,e.startAt)&&kw(t.endAt,e.endAt)}function zg(t){return Ee.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Sf{constructor(e,n=null,r=[],i=[],o=null,l="F",d=null,f=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=l,this.startAt=d,this.endAt=f,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function bA(t,e,n,r,i,o,l,d){return new Sf(t,e,n,r,i,o,l,d)}function Dk(t){return new Sf(t)}function Cw(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function wA(t){return t.collectionGroup!==null}function Pu(t){const e=Le(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(i){let o=new Zt(Xt.comparator);return i.filters.forEach(l=>{l.getFlattenedFilters().forEach(d=>{d.isInequality()&&(o=o.add(d.field))})}),o})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new zh(i,r))}),n.has(Xt.keyField().canonicalString())||e.ce.push(new zh(Xt.keyField(),r))}return e.ce}function Xr(t){const e=Le(t);return e.le||(e.le=xA(e,Pu(t))),e.le}function xA(t,e){if(t.limitType==="F")return Ew(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new zh(i.field,o)});const n=t.endAt?new Bh(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Bh(t.startAt.position,t.startAt.inclusive):null;return Ew(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function $g(t,e,n){return new Sf(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function kf(t,e){return Qy(Xr(t),Xr(e))&&t.limitType===e.limitType}function Rk(t){return`${Ky(Xr(t))}|lt:${t.limitType}`}function Ro(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>jk(r)).join(", ")}]`),xf(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Jo(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Jo(r)).join(",")),`Target(${n})`}(Xr(t))}; limitType=${t.limitType})`}function Ef(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):Ee.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of Pu(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,o,l){const d=Sw(i,o,l);return i.inclusive?d<=0:d<0}(n.startAt,Pu(n),r)||n.endAt&&!function(i,o,l){const d=Sw(i,o,l);return i.inclusive?d>=0:d>0}(n.endAt,Pu(n),r))}(t,e)}function SA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Lk(t){return(e,n)=>{let r=!1;for(const i of Pu(t)){const o=kA(i,e,n);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function kA(t,e,n){const r=t.field.isKeyField()?Ee.comparator(e.key,n.key):function(i,o,l){const d=o.data.field(i),f=l.data.field(i);return d!==null&&f!==null?Yo(d,f):Ne()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Ne()}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class pl{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Oa(this.inner,(n,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return Ek(this.inner)}size(){return this.innerSize}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const EA=new gt(Ee.comparator);function Ds(){return EA}const Ok=new gt(Ee.comparator);function ku(...t){let e=Ok;for(const n of t)e=e.insert(n.key,n);return e}function Mk(t){let e=Ok;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ga(){return Au()}function Fk(){return Au()}function Au(){return new pl(t=>t.toString(),(t,e)=>t.isEqual(e))}const CA=new gt(Ee.comparator),TA=new Zt(Ee.comparator);function Be(...t){let e=TA;for(const n of t)e=e.add(n);return e}const _A=new Zt(Ke);function IA(){return _A}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Yy(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vh(e)?"-0":e}}function Uk(t){return{integerValue:""+t}}function PA(t,e){return sA(e)?Uk(e):Yy(t,e)}/**
* @license
* Copyright 2018 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Cf{constructor(){this._=void 0}}function AA(t,e,n){return t instanceof $h?function(r,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Hy(i)&&(i=Wy(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Yu?Bk(t,e):t instanceof Ju?zk(t,e):function(r,i){const o=Vk(r,i),l=Tw(o)+Tw(r.Pe);return Vg(o)&&Vg(r.Pe)?Uk(l):Yy(r.serializer,l)}(t,e)}function jA(t,e,n){return t instanceof Yu?Bk(t,e):t instanceof Ju?zk(t,e):n}function Vk(t,e){return t instanceof qh?function(n){return Vg(n)||function(r){return!!r&&"doubleValue"in r}(n)}(e)?e:{integerValue:0}:null}class $h extends Cf{}class Yu extends Cf{constructor(e){super(),this.elements=e}}function Bk(t,e){const n=$k(e);for(const r of t.elements)n.some(i=>ts(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ju extends Cf{constructor(e){super(),this.elements=e}}function zk(t,e){let n=$k(e);for(const r of t.elements)n=n.filter(i=>!ts(i,r));return{arrayValue:{values:n}}}class qh extends Cf{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Tw(t){return kt(t.integerValue||t.doubleValue)}function $k(t){return Gy(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function NA(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Yu&&r instanceof Yu||n instanceof Ju&&r instanceof Ju?Qo(n.elements,r.elements,ts):n instanceof qh&&r instanceof qh?ts(n.Pe,r.Pe):n instanceof $h&&r instanceof $h}(t.transform,e.transform)}class DA{constructor(e,n){this.version=e,this.transformResults=n}}class Nr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Nr}static exists(e){return new Nr(void 0,e)}static updateTime(e){return new Nr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function bh(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Tf{}function qk(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Jy(t.key,Nr.none()):new uc(t.key,t.data,Nr.none());{const n=t.data,r=_n.empty();let i=new Zt(Xt.comparator);for(let o of e.fields)if(!i.has(o)){let l=n.field(o);l===null&&o.length>1&&(o=o.popLast(),l=n.field(o)),l===null?r.delete(o):r.set(o,l),i=i.add(o)}return new Di(t.key,r,new Vn(i.toArray()),Nr.none())}}function RA(t,e,n){t instanceof uc?function(r,i,o){const l=r.value.clone(),d=Iw(r.fieldTransforms,i,o.transformResults);l.setAll(d),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Di?function(r,i,o){if(!bh(r.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Iw(r.fieldTransforms,i,o.transformResults),d=i.data;d.setAll(Hk(r)),d.setAll(l),i.convertToFoundDocument(o.version,d).setHasCommittedMutations()}(t,e,n):function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ju(t,e,n,r){return t instanceof uc?function(i,o,l,d){if(!bh(i.precondition,o))return l;const f=i.value.clone(),p=Pw(i.fieldTransforms,d,o);return f.setAll(p),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),null}(t,e,n,r):t instanceof Di?function(i,o,l,d){if(!bh(i.precondition,o))return l;const f=Pw(i.fieldTransforms,d,o),p=o.data;return p.setAll(Hk(i)),p.setAll(f),o.convertToFoundDocument(o.version,p).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(y=>y.field))}(t,e,n,r):function(i,o,l){return bh(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function LA(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),o=Vk(r.transform,i||null);o!=null&&(n===null&&(n=_n.empty()),n.set(r.field,o))}return n||null}function _w(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Qo(n,r,(i,o)=>NA(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class uc extends Tf{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Di extends Tf{constructor(e,n,r,i,o=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Hk(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Iw(t,e,n){const r=new Map;Je(t.length===n.length);for(let i=0;i<n.length;i++){const o=t[i],l=o.transform,d=e.data.field(o.field);r.set(o.field,jA(l,d,n[i]))}return r}function Pw(t,e,n){const r=new Map;for(const i of t){const o=i.transform,l=n.data.field(i.field);r.set(i.field,AA(o,l,e))}return r}class Jy extends Tf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class OA extends Tf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class MA{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&RA(o,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ju(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ju(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Fk();return this.mutations.forEach(i=>{const o=e.get(i.key),l=o.overlayedDocument;let d=this.applyToLocalView(l,o.mutatedFields);d=n.has(i.key)?null:d;const f=qk(l,d);f!==null&&r.set(i.key,f),l.isValidDocument()||l.convertToNoDocument(Re.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Be())}isEqual(e){return this.batchId===e.batchId&&Qo(this.mutations,e.mutations,(n,r)=>_w(n,r))&&Qo(this.baseMutations,e.baseMutations,(n,r)=>_w(n,r))}}class Xy{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Je(e.mutations.length===r.length);let i=function(){return CA}();const o=e.mutations;for(let l=0;l<o.length;l++)i=i.insert(o[l].key,r[l].version);return new Xy(e,n,r,i)}}/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class FA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class UA{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _t,He;function VA(t){switch(t){default:return Ne();case se.CANCELLED:case se.UNKNOWN:case se.DEADLINE_EXCEEDED:case se.RESOURCE_EXHAUSTED:case se.INTERNAL:case se.UNAVAILABLE:case se.UNAUTHENTICATED:return!1;case se.INVALID_ARGUMENT:case se.NOT_FOUND:case se.ALREADY_EXISTS:case se.PERMISSION_DENIED:case se.FAILED_PRECONDITION:case se.ABORTED:case se.OUT_OF_RANGE:case se.UNIMPLEMENTED:case se.DATA_LOSS:return!0}}function Wk(t){if(t===void 0)return Ns("GRPC error has no .code"),se.UNKNOWN;switch(t){case _t.OK:return se.OK;case _t.CANCELLED:return se.CANCELLED;case _t.UNKNOWN:return se.UNKNOWN;case _t.DEADLINE_EXCEEDED:return se.DEADLINE_EXCEEDED;case _t.RESOURCE_EXHAUSTED:return se.RESOURCE_EXHAUSTED;case _t.INTERNAL:return se.INTERNAL;case _t.UNAVAILABLE:return se.UNAVAILABLE;case _t.UNAUTHENTICATED:return se.UNAUTHENTICATED;case _t.INVALID_ARGUMENT:return se.INVALID_ARGUMENT;case _t.NOT_FOUND:return se.NOT_FOUND;case _t.ALREADY_EXISTS:return se.ALREADY_EXISTS;case _t.PERMISSION_DENIED:return se.PERMISSION_DENIED;case _t.FAILED_PRECONDITION:return se.FAILED_PRECONDITION;case _t.ABORTED:return se.ABORTED;case _t.OUT_OF_RANGE:return se.OUT_OF_RANGE;case _t.UNIMPLEMENTED:return se.UNIMPLEMENTED;case _t.DATA_LOSS:return se.DATA_LOSS;default:return Ne()}}(He=_t||(_t={}))[He.OK=0]="OK",He[He.CANCELLED=1]="CANCELLED",He[He.UNKNOWN=2]="UNKNOWN",He[He.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",He[He.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",He[He.NOT_FOUND=5]="NOT_FOUND",He[He.ALREADY_EXISTS=6]="ALREADY_EXISTS",He[He.PERMISSION_DENIED=7]="PERMISSION_DENIED",He[He.UNAUTHENTICATED=16]="UNAUTHENTICATED",He[He.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",He[He.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",He[He.ABORTED=10]="ABORTED",He[He.OUT_OF_RANGE=11]="OUT_OF_RANGE",He[He.UNIMPLEMENTED=12]="UNIMPLEMENTED",He[He.INTERNAL=13]="INTERNAL",He[He.UNAVAILABLE=14]="UNAVAILABLE",He[He.DATA_LOSS=15]="DATA_LOSS";/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function BA(){return new TextEncoder}/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const zA=new wa([4294967295,4294967295],0);function Aw(t){const e=BA().encode(t),n=new gk;return n.update(e),new Uint8Array(n.digest())}function jw(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new wa([n,r],0),new wa([i,o],0)]}class Zy{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Eu(`Invalid padding: ${n}`);if(r<0)throw new Eu(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Eu(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Eu(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=wa.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(wa.fromNumber(r)));return i.compare(zA)===1&&(i=new wa([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Aw(e),[r,i]=jw(n);for(let o=0;o<this.hashCount;o++){const l=this.Ee(r,i,o);if(!this.de(l))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),l=new Zy(o,i,n);return r.forEach(d=>l.insert(d)),l}insert(e){if(this.Ie===0)return;const n=Aw(e),[r,i]=jw(n);for(let o=0;o<this.hashCount;o++){const l=this.Ee(r,i,o);this.Ae(l)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Eu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class _f{constructor(e,n,r,i,o){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,cc.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new _f(Re.min(),i,new gt(Ke),Ds(),Be())}}class cc{constructor(e,n,r,i,o){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new cc(r,n,Be(),Be(),Be())}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class wh{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class Gk{constructor(e,n){this.targetId=e,this.me=n}}class Kk{constructor(e,n,r=en.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Nw{constructor(){this.fe=0,this.ge=Rw(),this.pe=en.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Be(),n=Be(),r=Be();return this.ge.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Ne()}}),new cc(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Rw()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Je(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class $A{constructor(e){this.Le=e,this.Be=new Map,this.ke=Ds(),this.qe=Dw(),this.Qe=new gt(Ke)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Ne()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const o=i.target;if(zg(o))if(r===0){const l=new Ee(o.path);this.Ue(n,l,un.newNoDocument(l,Re.min()))}else Je(r===1);else{const l=this.Ye(n);if(l!==r){const d=this.Ze(e),f=d?this.Xe(d,e,l):1;if(f!==0){this.je(n);const p=f===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,p)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=n;let l,d;try{l=Ta(r).toUint8Array()}catch(f){if(f instanceof Ck)return Ko("Decoding the base64 bloom filter in existence filter failed ("+f.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw f}try{d=new Zy(l,i,o)}catch(f){return Ko(f instanceof Eu?"BloomFilter error: ":"Applying bloom filter failed: ",f),null}return d.Ie===0?null:d}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(o=>{const l=this.Le.tt(),d=`projects/${l.projectId}/databases/${l.database}/documents/${o.path.canonicalString()}`;e.mightContain(d)||(this.Ue(n,o,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((o,l)=>{const d=this.Je(l);if(d){if(o.current&&zg(d.target)){const f=new Ee(d.target.path);this.ke.get(f)!==null||this.it(l,f)||this.Ue(l,f,un.newNoDocument(f,e))}o.be&&(n.set(l,o.ve()),o.Ce())}});let r=Be();this.qe.forEach((o,l)=>{let d=!0;l.forEachWhile(f=>{const p=this.Je(f);return!p||p.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(r=r.add(o))}),this.ke.forEach((o,l)=>l.setReadTime(e));const i=new _f(e,n,this.Qe,this.ke,r);return this.ke=Ds(),this.qe=Dw(),this.Qe=new gt(Ke),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Nw,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Zt(Ke),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||ye("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Nw),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Dw(){return new gt(Ee.comparator)}function Rw(){return new gt(Ee.comparator)}const qA={asc:"ASCENDING",desc:"DESCENDING"},HA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},WA={and:"AND",or:"OR"};class GA{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function qg(t,e){return t.useProto3Json||xf(e)?e:{value:e}}function Hh(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Qk(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function KA(t,e){return Hh(t,e.toTimestamp())}function Zr(t){return Je(!!t),Re.fromTimestamp(function(e){const n=Ti(e);return new Ft(n.seconds,n.nanos)}(t))}function ev(t,e){return Hg(t,e).canonicalString()}function Hg(t,e){const n=function(r){return new lt(["projects",r.projectId,"databases",r.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Yk(t){const e=lt.fromString(t);return Je(tE(e)),e}function Wg(t,e){return ev(t.databaseId,e.path)}function Lm(t,e){const n=Yk(e);if(n.get(1)!==t.databaseId.projectId)throw new xe(se.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new xe(se.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Ee(Xk(n))}function Jk(t,e){return ev(t.databaseId,e)}function QA(t){const e=Yk(t);return e.length===4?lt.emptyPath():Xk(e)}function Gg(t){return new lt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Xk(t){return Je(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Lw(t,e,n){return{name:Wg(t,e),fields:n.value.mapValue.fields}}function YA(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:Ne()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(f,p){return f.useProto3Json?(Je(p===void 0||typeof p=="string"),en.fromBase64String(p||"")):(Je(p===void 0||p instanceof Buffer||p instanceof Uint8Array),en.fromUint8Array(p||new Uint8Array))}(t,e.targetChange.resumeToken),l=e.targetChange.cause,d=l&&function(f){const p=f.code===void 0?se.UNKNOWN:Wk(f.code);return new xe(p,f.message||"")}(l);n=new Kk(r,i,o,d||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Lm(t,r.document.name),o=Zr(r.document.updateTime),l=r.document.createTime?Zr(r.document.createTime):Re.min(),d=new _n({mapValue:{fields:r.document.fields}}),f=un.newFoundDocument(i,o,l,d),p=r.targetIds||[],y=r.removedTargetIds||[];n=new wh(p,y,f.key,f)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Lm(t,r.document),o=r.readTime?Zr(r.readTime):Re.min(),l=un.newNoDocument(i,o),d=r.removedTargetIds||[];n=new wh([],d,l.key,l)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Lm(t,r.document),o=r.removedTargetIds||[];n=new wh([],o,i,null)}else{if(!("filter"in e))return Ne();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,l=new UA(i,o),d=r.targetId;n=new Gk(d,l)}}return n}function JA(t,e){let n;if(e instanceof uc)n={update:Lw(t,e.key,e.value)};else if(e instanceof Jy)n={delete:Wg(t,e.key)};else if(e instanceof Di)n={update:Lw(t,e.key,e.data),updateMask:aj(e.fieldMask)};else{if(!(e instanceof OA))return Ne();n={verify:Wg(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof $h)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Yu)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ju)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof qh)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw Ne()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:KA(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Ne()}(t,e.precondition)),n}function XA(t,e){return t&&t.length>0?(Je(e!==void 0),t.map(n=>function(r,i){let o=r.updateTime?Zr(r.updateTime):Zr(i);return o.isEqual(Re.min())&&(o=Zr(i)),new DA(o,r.transformResults||[])}(n,e))):[]}function ZA(t,e){return{documents:[Jk(t,e.path)]}}function ej(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Jk(t,i);const o=function(f){if(f.length!==0)return eE(ns.create(f,"and"))}(e.filters);o&&(n.structuredQuery.where=o);const l=function(f){if(f.length!==0)return f.map(p=>function(y){return{field:Lo(y.field),direction:rj(y.dir)}}(p))}(e.orderBy);l&&(n.structuredQuery.orderBy=l);const d=qg(t,e.limit);return d!==null&&(n.structuredQuery.limit=d),e.startAt&&(n.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(e.endAt)),{_t:n,parent:i}}function tj(t){let e=QA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Je(r===1);const y=n.from[0];y.allDescendants?i=y.collectionId:e=e.child(y.collectionId)}let o=[];n.where&&(o=function(y){const w=Zk(y);return w instanceof ns&&Pk(w)?w.getFilters():[w]}(n.where));let l=[];n.orderBy&&(l=function(y){return y.map(w=>function(S){return new zh(Oo(S.field),function(E){switch(E){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(w))}(n.orderBy));let d=null;n.limit&&(d=function(y){let w;return w=typeof y=="object"?y.value:y,xf(w)?null:w}(n.limit));let f=null;n.startAt&&(f=function(y){const w=!!y.before,S=y.values||[];return new Bh(S,w)}(n.startAt));let p=null;return n.endAt&&(p=function(y){const w=!y.before,S=y.values||[];return new Bh(S,w)}(n.endAt)),bA(e,i,l,o,d,"F",f,p)}function nj(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ne()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Zk(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Oo(e.unaryFilter.field);return Mt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Oo(e.unaryFilter.field);return Mt.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Oo(e.unaryFilter.field);return Mt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Oo(e.unaryFilter.field);return Mt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Ne()}}(t):t.fieldFilter!==void 0?function(e){return Mt.create(Oo(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ne()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return ns.create(e.compositeFilter.filters.map(n=>Zk(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return Ne()}}(e.compositeFilter.op))}(t):Ne()}function rj(t){return qA[t]}function sj(t){return HA[t]}function ij(t){return WA[t]}function Lo(t){return{fieldPath:t.canonicalString()}}function Oo(t){return Xt.fromServerFormat(t.fieldPath)}function eE(t){return t instanceof Mt?function(e){if(e.op==="=="){if(xw(e.value))return{unaryFilter:{field:Lo(e.field),op:"IS_NAN"}};if(ww(e.value))return{unaryFilter:{field:Lo(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(xw(e.value))return{unaryFilter:{field:Lo(e.field),op:"IS_NOT_NAN"}};if(ww(e.value))return{unaryFilter:{field:Lo(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Lo(e.field),op:sj(e.op),value:e.value}}}(t):t instanceof ns?function(e){const n=e.getFilters().map(r=>eE(r));return n.length===1?n[0]:{compositeFilter:{op:ij(e.op),filters:n}}}(t):Ne()}function aj(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function tE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class mi{constructor(e,n,r,i,o=Re.min(),l=Re.min(),d=en.EMPTY_BYTE_STRING,f=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=l,this.resumeToken=d,this.expectedCount=f}withSequenceNumber(e){return new mi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new mi(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new mi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new mi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class oj{constructor(e){this.ct=e}}function lj(t){const e=tj({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?$g(e,e.limit,"L"):e}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class uj{constructor(){this.un=new cj}addToCollectionParentIndex(e,n){return this.un.add(n),re.resolve()}getCollectionParents(e,n){return re.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return re.resolve()}deleteFieldIndex(e,n){return re.resolve()}deleteAllFieldIndexes(e){return re.resolve()}createTargetIndexes(e,n){return re.resolve()}getDocumentsMatchingTarget(e,n){return re.resolve(null)}getIndexType(e,n){return re.resolve(0)}getFieldIndexes(e,n){return re.resolve([])}getNextCollectionGroupToUpdate(e){return re.resolve(null)}getMinOffset(e,n){return re.resolve(Ci.min())}getMinOffsetFromCollectionGroup(e,n){return re.resolve(Ci.min())}updateCollectionGroup(e,n,r){return re.resolve()}updateIndexEntries(e,n){return re.resolve()}}class cj{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Zt(lt.comparator),o=!i.has(r);return this.index[n]=i.add(r),o}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Zt(lt.comparator)).toArray()}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Xo{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Xo(0)}static kn(){return new Xo(-1)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class dj{constructor(){this.changes=new pl(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,un.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?re.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*//**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class hj{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class fj{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ju(r.mutation,i,Vn.empty(),Ft.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Be()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Be()){const i=ga();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(o=>{let l=ku();return o.forEach((d,f)=>{l=l.insert(d,f.overlayedDocument)}),l}))}getOverlayedDocuments(e,n){const r=ga();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Be()))}populateOverlays(e,n,r){const i=[];return r.forEach(o=>{n.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((l,d)=>{n.set(l,d)})})}computeViews(e,n,r,i){let o=Ds();const l=Au(),d=function(){return Au()}();return n.forEach((f,p)=>{const y=r.get(p.key);i.has(p.key)&&(y===void 0||y.mutation instanceof Di)?o=o.insert(p.key,p):y!==void 0?(l.set(p.key,y.mutation.getFieldMask()),ju(y.mutation,p,y.mutation.getFieldMask(),Ft.now())):l.set(p.key,Vn.empty())}),this.recalculateAndSaveOverlays(e,o).next(f=>(f.forEach((p,y)=>l.set(p,y)),n.forEach((p,y)=>{var w;return d.set(p,new hj(y,(w=l.get(p))!==null&&w!==void 0?w:null))}),d))}recalculateAndSaveOverlays(e,n){const r=Au();let i=new gt((l,d)=>l-d),o=Be();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(l=>{for(const d of l)d.keys().forEach(f=>{const p=n.get(f);if(p===null)return;let y=r.get(f)||Vn.empty();y=d.applyToLocalView(p,y),r.set(f,y);const w=(i.get(d.batchId)||Be()).add(f);i=i.insert(d.batchId,w)})}).next(()=>{const l=[],d=i.getReverseIterator();for(;d.hasNext();){const f=d.getNext(),p=f.key,y=f.value,w=Fk();y.forEach(S=>{if(!o.has(S)){const E=qk(n.get(S),r.get(S));E!==null&&w.set(S,E),o=o.add(S)}}),l.push(this.documentOverlayCache.saveOverlays(e,p,w))}return re.waitFor(l)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return Ee.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):wA(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(o=>{const l=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-o.size):re.resolve(ga());let d=-1,f=o;return l.next(p=>re.forEach(p,(y,w)=>(d<w.largestBatchId&&(d=w.largestBatchId),o.get(y)?re.resolve():this.remoteDocumentCache.getEntry(e,y).next(S=>{f=f.insert(y,S)}))).next(()=>this.populateOverlays(e,p,o)).next(()=>this.computeViews(e,f,p,Be())).next(y=>({batchId:d,changes:Mk(y)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Ee(n)).next(r=>{let i=ku();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const o=n.collectionGroup;let l=ku();return this.indexManager.getCollectionParents(e,o).next(d=>re.forEach(d,f=>{const p=function(y,w){return new Sf(w,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(n,f.child(o));return this.getDocumentsMatchingCollectionQuery(e,p,r,i).next(y=>{y.forEach((w,S)=>{l=l.insert(w,S)})})}).next(()=>l))}getDocumentsMatchingCollectionQuery(e,n,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(l=>(o=l,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,o,i))).next(l=>{o.forEach((f,p)=>{const y=p.getKey();l.get(y)===null&&(l=l.insert(y,un.newInvalidDocument(y)))});let d=ku();return l.forEach((f,p)=>{const y=o.get(f);y!==void 0&&ju(y.mutation,p,Vn.empty(),Ft.now()),Ef(n,p)&&(d=d.insert(f,p))}),d})}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class pj{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return re.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(r){return{id:r.id,version:r.version,createTime:Zr(r.createTime)}}(n)),re.resolve()}getNamedQuery(e,n){return re.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(r){return{name:r.name,query:lj(r.bundledQuery),readTime:Zr(r.readTime)}}(n)),re.resolve()}}/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class mj{constructor(){this.overlays=new gt(Ee.comparator),this.Ir=new Map}getOverlay(e,n){return re.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ga();return re.forEach(n,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,o)=>{this.ht(e,n,o)}),re.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(r)),re.resolve()}getOverlaysForCollection(e,n,r){const i=ga(),o=n.length+1,l=new Ee(n.child("")),d=this.overlays.getIteratorFrom(l);for(;d.hasNext();){const f=d.getNext().value,p=f.getKey();if(!n.isPrefixOf(p.path))break;p.path.length===o&&f.largestBatchId>r&&i.set(f.getKey(),f)}return re.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let o=new gt((p,y)=>p-y);const l=this.overlays.getIterator();for(;l.hasNext();){const p=l.getNext().value;if(p.getKey().getCollectionGroup()===n&&p.largestBatchId>r){let y=o.get(p.largestBatchId);y===null&&(y=ga(),o=o.insert(p.largestBatchId,y)),y.set(p.getKey(),p)}}const d=ga(),f=o.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach((p,y)=>d.set(p,y)),!(d.size()>=i)););return re.resolve(d)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const l=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,l)}this.overlays=this.overlays.insert(r.key,new FA(n,r));let o=this.Ir.get(n);o===void 0&&(o=Be(),this.Ir.set(n,o)),this.Ir.set(n,o.add(r.key))}}/**
* @license
* Copyright 2024 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class gj{constructor(){this.sessionToken=en.EMPTY_BYTE_STRING}getSessionToken(e){return re.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,re.resolve()}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class tv{constructor(){this.Tr=new Zt(qt.Er),this.dr=new Zt(qt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new qt(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new qt(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new Ee(new lt([])),r=new qt(n,e),i=new qt(n,e+1),o=[];return this.dr.forEachInRange([r,i],l=>{this.Vr(l),o.push(l.key)}),o}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new Ee(new lt([])),r=new qt(n,e),i=new qt(n,e+1);let o=Be();return this.dr.forEachInRange([r,i],l=>{o=o.add(l.key)}),o}containsKey(e){const n=new qt(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class qt{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return Ee.comparator(e.key,n.key)||Ke(e.wr,n.wr)}static Ar(e,n){return Ke(e.wr,n.wr)||Ee.comparator(e.key,n.key)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class yj{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Zt(qt.Er)}checkEmpty(e){return re.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const l=new MA(o,n,r,i);this.mutationQueue.push(l);for(const d of i)this.br=this.br.add(new qt(d.key,o)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return re.resolve(l)}lookupMutationBatch(e,n){return re.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),o=i<0?0:i;return re.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return re.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return re.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new qt(n,0),i=new qt(n,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,i],l=>{const d=this.Dr(l.wr);o.push(d)}),re.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Zt(Ke);return n.forEach(i=>{const o=new qt(i,0),l=new qt(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,l],d=>{r=r.add(d.wr)})}),re.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let o=r;Ee.isDocumentKey(o)||(o=o.child(""));const l=new qt(new Ee(o),0);let d=new Zt(Ke);return this.br.forEachWhile(f=>{const p=f.key.path;return!!r.isPrefixOf(p)&&(p.length===i&&(d=d.add(f.wr)),!0)},l),re.resolve(this.Cr(d))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Je(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return re.forEach(n.mutations,i=>{const o=new qt(i.key,n.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new qt(n,0),i=this.br.firstAfterOrEqual(r);return re.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,re.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class vj{constructor(e){this.Mr=e,this.docs=function(){return new gt(Ee.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),o=i?i.size:0,l=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:l}),this.size+=l-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return re.resolve(r?r.document.mutableCopy():un.newInvalidDocument(n))}getEntries(e,n){let r=Ds();return n.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():un.newInvalidDocument(i))}),re.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let o=Ds();const l=n.path,d=new Ee(l.child("")),f=this.docs.getIteratorFrom(d);for(;f.hasNext();){const{key:p,value:{document:y}}=f.getNext();if(!l.isPrefixOf(p.path))break;p.path.length>l.length+1||eA(ZP(y),r)<=0||(i.has(y.key)||Ef(n,y))&&(o=o.insert(y.key,y.mutableCopy()))}return re.resolve(o)}getAllFromCollectionGroup(e,n,r,i){Ne()}Or(e,n){return re.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new bj(this)}getSize(e){return re.resolve(this.size)}}class bj extends dj{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),re.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class wj{constructor(e){this.persistence=e,this.Nr=new pl(n=>Ky(n),Qy),this.lastRemoteSnapshotVersion=Re.min(),this.highestTargetId=0,this.Lr=0,this.Br=new tv,this.targetCount=0,this.kr=Xo.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),re.resolve()}getLastRemoteSnapshotVersion(e){return re.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return re.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),re.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),re.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Xo(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,re.resolve()}updateTargetData(e,n){return this.Kn(n),re.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,re.resolve()}removeTargets(e,n,r){let i=0;const o=[];return this.Nr.forEach((l,d)=>{d.sequenceNumber<=n&&r.get(d.targetId)===null&&(this.Nr.delete(l),o.push(this.removeMatchingKeysForTargetId(e,d.targetId)),i++)}),re.waitFor(o).next(()=>i)}getTargetCount(e){return re.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return re.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),re.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,o=[];return i&&n.forEach(l=>{o.push(i.markPotentiallyOrphaned(e,l))}),re.waitFor(o)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),re.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return re.resolve(r)}containsKey(e,n){return re.resolve(this.Br.containsKey(n))}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class xj{constructor(e,n){this.qr={},this.overlays={},this.Qr=new qy(0),this.Kr=!1,this.Kr=!0,this.$r=new gj,this.referenceDelegate=e(this),this.Ur=new wj(this),this.indexManager=new uj,this.remoteDocumentCache=function(r){return new vj(r)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new oj(n),this.Gr=new pj(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new mj,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new yj(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){ye("MemoryPersistence","Starting transaction:",e);const i=new Sj(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(o=>this.referenceDelegate.jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Hr(e,n){return re.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class Sj extends nA{constructor(e){super(),this.currentSequenceNumber=e}}class nv{constructor(e){this.persistence=e,this.Jr=new tv,this.Yr=null}static Zr(e){return new nv(e)}get Xr(){if(this.Yr)return this.Yr;throw Ne()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),re.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),re.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),re.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(o=>this.Xr.add(o.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return re.forEach(this.Xr,r=>{const i=Ee.fromPath(r);return this.ei(e,i).next(o=>{o||n.removeEntry(i,Re.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return re.or([()=>re.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class rv{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=Be(),i=Be();for(const o of n.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new rv(e,n.fromCache,r,i)}}/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class kj{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ej{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return c_()?8:rA(dn())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const o={result:null};return this.Yi(e,n).next(l=>{o.result=l}).next(()=>{if(!o.result)return this.Zi(e,n,i,r).next(l=>{o.result=l})}).next(()=>{if(o.result)return;const l=new kj;return this.Xi(e,n,l).next(d=>{if(o.result=d,this.zi)return this.es(e,n,l,d.size)})}).next(()=>o.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(hu()<=$e.DEBUG&&ye("QueryEngine","SDK will not create cache indexes for query:",Ro(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),re.resolve()):(hu()<=$e.DEBUG&&ye("QueryEngine","Query:",Ro(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(hu()<=$e.DEBUG&&ye("QueryEngine","The SDK decides to create cache indexes for query:",Ro(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Xr(n))):re.resolve())}Yi(e,n){if(Cw(n))return re.resolve(null);let r=Xr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=$g(n,null,"F"),r=Xr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const l=Be(...o);return this.Ji.getDocuments(e,l).next(d=>this.indexManager.getMinOffset(e,r).next(f=>{const p=this.ts(n,d);return this.ns(n,p,l,f.readTime)?this.Yi(e,$g(n,null,"F")):this.rs(e,p,n,f)}))})))}Zi(e,n,r,i){return Cw(n)||i.isEqual(Re.min())?re.resolve(null):this.Ji.getDocuments(e,r).next(o=>{const l=this.ts(n,o);return this.ns(n,l,r,i)?re.resolve(null):(hu()<=$e.DEBUG&&ye("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ro(n)),this.rs(e,l,n,XP(i,-1)).next(d=>d))})}ts(e,n){let r=new Zt(Lk(e));return n.forEach((i,o)=>{Ef(e,o)&&(r=r.add(o))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const o=e.limitType==="F"?n.last():n.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Xi(e,n,r){return hu()<=$e.DEBUG&&ye("QueryEngine","Using full collection scan to execute query:",Ro(n)),this.Ji.getDocumentsMatchingQuery(e,n,Ci.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(o=>(n.forEach(l=>{o=o.insert(l.key,l)}),o))}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Cj{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new gt(Ke),this._s=new pl(o=>Ky(o),Qy),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new fj(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function Tj(t,e,n,r){return new Cj(t,e,n,r)}async function nE(t,e){const n=Le(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(o=>{const l=[],d=[];let f=Be();for(const p of i){l.push(p.batchId);for(const y of p.mutations)f=f.add(y.key)}for(const p of o){d.push(p.batchId);for(const y of p.mutations)f=f.add(y.key)}return n.localDocuments.getDocuments(r,f).next(p=>({hs:p,removedBatchIds:l,addedBatchIds:d}))})})}function _j(t,e){const n=Le(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),o=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,d,f,p){const y=f.batch,w=y.keys();let S=re.resolve();return w.forEach(E=>{S=S.next(()=>p.getEntry(d,E)).next(C=>{const N=f.docVersions.get(E);Je(N!==null),C.version.compareTo(N)<0&&(y.applyToRemoteDocument(C,f),C.isValidDocument()&&(C.setReadTime(f.commitVersion),p.addEntry(C)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(d,y))}(n,r,e,o).next(()=>o.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let d=Be();for(let f=0;f<l.mutationResults.length;++f)l.mutationResults[f].transformResults.length>0&&(d=d.add(l.batch.mutations[f].key));return d}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function rE(t){const e=Le(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function Ij(t,e){const n=Le(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const l=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const d=[];e.targetChanges.forEach((y,w)=>{const S=i.get(w);if(!S)return;d.push(n.Ur.removeMatchingKeys(o,y.removedDocuments,w).next(()=>n.Ur.addMatchingKeys(o,y.addedDocuments,w)));let E=S.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(w)!==null?E=E.withResumeToken(en.EMPTY_BYTE_STRING,Re.min()).withLastLimboFreeSnapshotVersion(Re.min()):y.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(y.resumeToken,r)),i=i.insert(w,E),function(C,N,I){return C.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(S,E,y)&&d.push(n.Ur.updateTargetData(o,E))});let f=Ds(),p=Be();if(e.documentUpdates.forEach(y=>{e.resolvedLimboDocuments.has(y)&&d.push(n.persistence.referenceDelegate.updateLimboDocument(o,y))}),d.push(Pj(o,l,e.documentUpdates).next(y=>{f=y.Ps,p=y.Is})),!r.isEqual(Re.min())){const y=n.Ur.getLastRemoteSnapshotVersion(o).next(w=>n.Ur.setTargetsMetadata(o,o.currentSequenceNumber,r));d.push(y)}return re.waitFor(d).next(()=>l.apply(o)).next(()=>n.localDocuments.getLocalViewOfDocuments(o,f,p)).next(()=>f)}).then(o=>(n.os=i,o))}function Pj(t,e,n){let r=Be(),i=Be();return n.forEach(o=>r=r.add(o)),e.getEntries(t,r).next(o=>{let l=Ds();return n.forEach((d,f)=>{const p=o.get(d);f.isFoundDocument()!==p.isFoundDocument()&&(i=i.add(d)),f.isNoDocument()&&f.version.isEqual(Re.min())?(e.removeEntry(d,f.readTime),l=l.insert(d,f)):!p.isValidDocument()||f.version.compareTo(p.version)>0||f.version.compareTo(p.version)===0&&p.hasPendingWrites?(e.addEntry(f),l=l.insert(d,f)):ye("LocalStore","Ignoring outdated watch update for ",d,". Current version:",p.version," Watch version:",f.version)}),{Ps:l,Is:i}})}function Aj(t,e){const n=Le(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function jj(t,e){const n=Le(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(o=>o?(i=o,re.resolve(i)):n.Ur.allocateTargetId(r).next(l=>(i=new mi(e,l,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Kg(t,e,n){const r=Le(t),i=r.os.get(e),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,l=>r.persistence.referenceDelegate.removeTarget(l,i))}catch(l){if(!lc(l))throw l;ye("LocalStore",`Failed to update sequence numbers for target ${e}: ${l}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Ow(t,e,n){const r=Le(t);let i=Re.min(),o=Be();return r.persistence.runTransaction("Execute query","readwrite",l=>function(d,f,p){const y=Le(d),w=y._s.get(p);return w!==void 0?re.resolve(y.os.get(w)):y.Ur.getTargetData(f,p)}(r,l,Xr(e)).next(d=>{if(d)return i=d.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(l,d.targetId).next(f=>{o=f})}).next(()=>r.ss.getDocumentsMatchingQuery(l,e,n?i:Re.min(),n?o:Be())).next(d=>(Nj(r,SA(e),d),{documents:d,Ts:o})))}function Nj(t,e,n){let r=t.us.get(e)||Re.min();n.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),t.us.set(e,r)}class Mw{constructor(){this.activeTargetIds=IA()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Dj{constructor(){this.so=new Mw,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Mw,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Rj{_o(e){}shutdown(){}}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Fw{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){ye("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){ye("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/let Bd=null;function Om(){return Bd===null?Bd=function(){return 268435456+Math.round(2147483648*Math.random())}():Bd++,"0x"+Bd.toString(16)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Lj={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Oj{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const an="WebChannelConnection";class Mj extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=n+"://"+e.host,this.vo=`projects/${r}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${i}`}get Fo(){return!1}Mo(e,n,r,i,o){const l=Om(),d=this.xo(e,n.toUriEncodedString());ye("RestConnection",`Sending RPC '${e}' ${l}:`,d,r);const f={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(f,i,o),this.No(e,d,f,r).then(p=>(ye("RestConnection",`Received RPC '${e}' ${l}: `,p),p),p=>{throw Ko("RestConnection",`RPC '${e}' ${l} failed with error: `,p,"url: ",d,"request:",r),p})}Lo(e,n,r,i,o,l){return this.Mo(e,n,r,i,o)}Oo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+fl}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,o)=>e[o]=i),r&&r.headers.forEach((i,o)=>e[o]=i)}xo(e,n){const r=Lj[e];return`${this.Do}/v1/${n}:${r}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const o=Om();return new Promise((l,d)=>{const f=new yk;f.setWithCredentials(!0),f.listenOnce(vk.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case yh.NO_ERROR:const y=f.getResponseJson();ye(an,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(y)),l(y);break;case yh.TIMEOUT:ye(an,`RPC '${e}' ${o} timed out`),d(new xe(se.DEADLINE_EXCEEDED,"Request time out"));break;case yh.HTTP_ERROR:const w=f.getStatus();if(ye(an,`RPC '${e}' ${o} failed with status:`,w,"response text:",f.getResponseText()),w>0){let S=f.getResponseJson();Array.isArray(S)&&(S=S[0]);const E=S==null?void 0:S.error;if(E&&E.status&&E.message){const C=function(N){const I=N.toLowerCase().replace(/_/g,"-");return Object.values(se).indexOf(I)>=0?I:se.UNKNOWN}(E.status);d(new xe(C,E.message))}else d(new xe(se.UNKNOWN,"Server responded with status "+f.getStatus()))}else d(new xe(se.UNAVAILABLE,"Connection failed."));break;default:Ne()}}finally{ye(an,`RPC '${e}' ${o} completed.`)}});const p=JSON.stringify(i);ye(an,`RPC '${e}' ${o} sending request:`,i),f.send(n,"POST",p,r,15)})}Bo(e,n,r){const i=Om(),o=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],l=xk(),d=wk(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},p=this.longPollingOptions.timeoutSeconds;p!==void 0&&(f.longPollingTimeout=Math.round(1e3*p)),this.useFetchStreams&&(f.useFetchStreams=!0),this.Oo(f.initMessageHeaders,n,r),f.encodeInitMessageHeaders=!0;const y=o.join("");ye(an,`Creating RPC '${e}' stream ${i}: ${y}`,f);const w=l.createWebChannel(y,f);let S=!1,E=!1;const C=new Oj({Io:I=>{E?ye(an,`Not sending because RPC '${e}' stream ${i} is closed:`,I):(S||(ye(an,`Opening RPC '${e}' stream ${i} transport.`),w.open(),S=!0),ye(an,`RPC '${e}' stream ${i} sending:`,I),w.send(I))},To:()=>w.close()}),N=(I,B,M)=>{I.listen(B,$=>{try{M($)}catch(L){setTimeout(()=>{throw L},0)}})};return N(w,Su.EventType.OPEN,()=>{E||(ye(an,`RPC '${e}' stream ${i} transport opened.`),C.yo())}),N(w,Su.EventType.CLOSE,()=>{E||(E=!0,ye(an,`RPC '${e}' stream ${i} transport closed`),C.So())}),N(w,Su.EventType.ERROR,I=>{E||(E=!0,Ko(an,`RPC '${e}' stream ${i} transport errored:`,I),C.So(new xe(se.UNAVAILABLE,"The operation could not be completed")))}),N(w,Su.EventType.MESSAGE,I=>{var B;if(!E){const M=I.data[0];Je(!!M);const $=M,L=$.error||((B=$[0])===null||B===void 0?void 0:B.error);if(L){ye(an,`RPC '${e}' stream ${i} received error:`,L);const W=L.status;let Z=function(_){const A=_t[_];if(A!==void 0)return Wk(A)}(W),P=L.message;Z===void 0&&(Z=se.INTERNAL,P="Unknown error status: "+W+" with message "+L.message),E=!0,C.So(new xe(Z,P)),w.close()}else ye(an,`RPC '${e}' stream ${i} received:`,M),C.bo(M)}}),N(d,bk.STAT_EVENT,I=>{I.stat===Fg.PROXY?ye(an,`RPC '${e}' stream ${i} detected buffering proxy`):I.stat===Fg.NOPROXY&&ye(an,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{C.wo()},0),C}}function Mm(){return typeof document<"u"?document:null}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function If(t){return new GA(t,!0)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class sE{constructor(e,n,r=1e3,i=1.5,o=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&ye("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class iE{constructor(e,n,r,i,o,l,d,f){this.ui=e,this.Ho=r,this.Jo=i,this.connection=o,this.authCredentialsProvider=l,this.appCheckCredentialsProvider=d,this.listener=f,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new sE(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===se.RESOURCE_EXHAUSTED?(Ns(n.toString()),Ns("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===se.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new xe(se.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return ye("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(ye("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Fj extends iE{constructor(e,n,r,i,o,l){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,l),this.serializer=o}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=YA(this.serializer,e),r=function(i){if(!("targetChange"in i))return Re.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Re.min():o.readTime?Zr(o.readTime):Re.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Gg(this.serializer),n.addTarget=function(i,o){let l;const d=o.target;if(l=zg(d)?{documents:ZA(i,d)}:{query:ej(i,d)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Qk(i,o.resumeToken);const f=qg(i,o.expectedCount);f!==null&&(l.expectedCount=f)}else if(o.snapshotVersion.compareTo(Re.min())>0){l.readTime=Hh(i,o.snapshotVersion.toTimestamp());const f=qg(i,o.expectedCount);f!==null&&(l.expectedCount=f)}return l}(this.serializer,e);const r=nj(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Gg(this.serializer),n.removeTarget=e,this.a_(n)}}class Uj extends iE{constructor(e,n,r,i,o,l){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,l),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Je(!!e.streamToken),this.lastStreamToken=e.streamToken,Je(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Je(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=XA(e.writeResults,e.commitTime),r=Zr(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Gg(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>JA(this.serializer,r))};this.a_(n)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Vj extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new xe(se.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Mo(e,Hg(n,r),i,o,l)).catch(o=>{throw o.name==="FirebaseError"?(o.code===se.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new xe(se.UNKNOWN,o.toString())})}Lo(e,n,r,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,d])=>this.connection.Lo(e,Hg(n,r),i,l,d,o)).catch(l=>{throw l.name==="FirebaseError"?(l.code===se.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new xe(se.UNKNOWN,l.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Bj{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Ns(n),this.D_=!1):ye("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class zj{constructor(e,n,r,i,o){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(l=>{r.enqueueAndForget(async()=>{Ma(this)&&(ye("RemoteStore","Restarting streams for network reachability change."),await async function(d){const f=Le(d);f.L_.add(4),await dc(f),f.q_.set("Unknown"),f.L_.delete(4),await Pf(f)}(this))})}),this.q_=new Bj(r,i)}}async function Pf(t){if(Ma(t))for(const e of t.B_)await e(!0)}async function dc(t){for(const e of t.B_)await e(!1)}function aE(t,e){const n=Le(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),ov(n)?av(n):ml(n).r_()&&iv(n,e))}function sv(t,e){const n=Le(t),r=ml(n);n.N_.delete(e),r.r_()&&oE(n,e),n.N_.size===0&&(r.r_()?r.o_():Ma(n)&&n.q_.set("Unknown"))}function iv(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Re.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ml(t).A_(e)}function oE(t,e){t.Q_.xe(e),ml(t).R_(e)}function av(t){t.Q_=new $A({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),ml(t).start(),t.q_.v_()}function ov(t){return Ma(t)&&!ml(t).n_()&&t.N_.size>0}function Ma(t){return Le(t).L_.size===0}function lE(t){t.Q_=void 0}async function $j(t){t.q_.set("Online")}async function qj(t){t.N_.forEach((e,n)=>{iv(t,e)})}async function Hj(t,e){lE(t),ov(t)?(t.q_.M_(e),av(t)):t.q_.set("Unknown")}async function Wj(t,e,n){if(t.q_.set("Online"),e instanceof Kk&&e.state===2&&e.cause)try{await async function(r,i){const o=i.cause;for(const l of i.targetIds)r.N_.has(l)&&(await r.remoteSyncer.rejectListen(l,o),r.N_.delete(l),r.Q_.removeTarget(l))}(t,e)}catch(r){ye("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Wh(t,r)}else if(e instanceof wh?t.Q_.Ke(e):e instanceof Gk?t.Q_.He(e):t.Q_.We(e),!n.isEqual(Re.min()))try{const r=await rE(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Q_.rt(o);return l.targetChanges.forEach((d,f)=>{if(d.resumeToken.approximateByteSize()>0){const p=i.N_.get(f);p&&i.N_.set(f,p.withResumeToken(d.resumeToken,o))}}),l.targetMismatches.forEach((d,f)=>{const p=i.N_.get(d);if(!p)return;i.N_.set(d,p.withResumeToken(en.EMPTY_BYTE_STRING,p.snapshotVersion)),oE(i,d);const y=new mi(p.target,d,f,p.sequenceNumber);iv(i,y)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){ye("RemoteStore","Failed to raise snapshot:",r),await Wh(t,r)}}async function Wh(t,e,n){if(!lc(e))throw e;t.L_.add(1),await dc(t),t.q_.set("Offline"),n||(n=()=>rE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ye("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Pf(t)})}function uE(t,e){return e().catch(n=>Wh(t,n,e))}async function Af(t){const e=Le(t),n=_i(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Gj(e);)try{const i=await Aj(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,Kj(e,i)}catch(i){await Wh(e,i)}cE(e)&&dE(e)}function Gj(t){return Ma(t)&&t.O_.length<10}function Kj(t,e){t.O_.push(e);const n=_i(t);n.r_()&&n.V_&&n.m_(e.mutations)}function cE(t){return Ma(t)&&!_i(t).n_()&&t.O_.length>0}function dE(t){_i(t).start()}async function Qj(t){_i(t).p_()}async function Yj(t){const e=_i(t);for(const n of t.O_)e.m_(n.mutations)}async function Jj(t,e,n){const r=t.O_.shift(),i=Xy.from(r,e,n);await uE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Af(t)}async function Xj(t,e){e&&_i(t).V_&&await async function(n,r){if(function(i){return VA(i)&&i!==se.ABORTED}(r.code)){const i=n.O_.shift();_i(n).s_(),await uE(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r)),await Af(n)}}(t,e),cE(t)&&dE(t)}async function Uw(t,e){const n=Le(t);n.asyncQueue.verifyOperationInProgress(),ye("RemoteStore","RemoteStore received new credentials");const r=Ma(n);n.L_.add(3),await dc(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Pf(n)}async function Zj(t,e){const n=Le(t);e?(n.L_.delete(2),await Pf(n)):e||(n.L_.add(2),await dc(n),n.q_.set("Unknown"))}function ml(t){return t.K_||(t.K_=function(e,n,r){const i=Le(e);return i.w_(),new Fj(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{Eo:$j.bind(null,t),Ro:qj.bind(null,t),mo:Hj.bind(null,t),d_:Wj.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),ov(t)?av(t):t.q_.set("Unknown")):(await t.K_.stop(),lE(t))})),t.K_}function _i(t){return t.U_||(t.U_=function(e,n,r){const i=Le(e);return i.w_(),new Uj(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Qj.bind(null,t),mo:Xj.bind(null,t),f_:Yj.bind(null,t),g_:Jj.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Af(t)):(await t.U_.stop(),t.O_.length>0&&(ye("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class lv{constructor(e,n,r,i,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new wi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,o){const l=Date.now()+r,d=new lv(e,n,l,i,o);return d.start(r),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new xe(se.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function uv(t,e){if(Ns("AsyncQueue",`${e}: ${t}`),lc(t))return new xe(se.UNAVAILABLE,`${e}: ${t}`);throw t}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ho{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Ee.comparator(n.key,r.key):(n,r)=>Ee.comparator(n.key,r.key),this.keyedMap=ku(),this.sortedSet=new gt(this.comparator)}static emptySet(e){return new Ho(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ho)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ho;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Vw{constructor(){this.W_=new gt(Ee.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):Ne():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Zo{constructor(e,n,r,i,o,l,d,f,p){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=l,this.syncStateChanged=d,this.excludesMetadataChanges=f,this.hasCachedResults=p}static fromInitialDocuments(e,n,r,i,o){const l=[];return n.forEach(d=>{l.push({type:0,doc:d})}),new Zo(e,n,Ho.emptySet(n),l,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&kf(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class eN{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class tN{constructor(){this.queries=Bw(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,n){const r=Le(e),i=r.queries;r.queries=Bw(),i.forEach((o,l)=>{for(const d of l.j_)d.onError(n)})})(this,new xe(se.ABORTED,"Firestore shutting down"))}}function Bw(){return new pl(t=>Rk(t),kf)}async function nN(t,e){const n=Le(t);let r=3;const i=e.query;let o=n.queries.get(i);o?!o.H_()&&e.J_()&&(r=2):(o=new eN,r=e.J_()?0:1);try{switch(r){case 0:o.z_=await n.onListen(i,!0);break;case 1:o.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(l){const d=uv(l,`Initialization of query '${Ro(e.query)}' failed`);return void e.onError(d)}n.queries.set(i,o),o.j_.push(e),e.Z_(n.onlineState),o.z_&&e.X_(o.z_)&&cv(n)}async function rN(t,e){const n=Le(t),r=e.query;let i=3;const o=n.queries.get(r);if(o){const l=o.j_.indexOf(e);l>=0&&(o.j_.splice(l,1),o.j_.length===0?i=e.J_()?0:1:!o.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function sN(t,e){const n=Le(t);let r=!1;for(const i of e){const o=i.query,l=n.queries.get(o);if(l){for(const d of l.j_)d.X_(i)&&(r=!0);l.z_=i}}r&&cv(n)}function iN(t,e,n){const r=Le(t),i=r.queries.get(e);if(i)for(const o of i.j_)o.onError(n);r.queries.delete(e)}function cv(t){t.Y_.forEach(e=>{e.next()})}var Qg,zw;(zw=Qg||(Qg={})).ea="default",zw.Cache="cache";class aN{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Zo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Zo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Qg.Cache}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class hE{constructor(e){this.key=e}}class fE{constructor(e){this.key=e}}class oN{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Be(),this.mutatedKeys=Be(),this.Aa=Lk(e),this.Ra=new Ho(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Vw,i=n?n.Ra:this.Ra;let o=n?n.mutatedKeys:this.mutatedKeys,l=i,d=!1;const f=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,p=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((y,w)=>{const S=i.get(y),E=Ef(this.query,w)?w:null,C=!!S&&this.mutatedKeys.has(S.key),N=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let I=!1;S&&E?S.data.isEqual(E.data)?C!==N&&(r.track({type:3,doc:E}),I=!0):this.ga(S,E)||(r.track({type:2,doc:E}),I=!0,(f&&this.Aa(E,f)>0||p&&this.Aa(E,p)<0)&&(d=!0)):!S&&E?(r.track({type:0,doc:E}),I=!0):S&&!E&&(r.track({type:1,doc:S}),I=!0,(f||p)&&(d=!0)),I&&(E?(l=l.add(E),o=N?o.add(y):o.delete(y)):(l=l.delete(y),o=o.delete(y)))}),this.query.limit!==null)for(;l.size>this.query.limit;){const y=this.query.limitType==="F"?l.last():l.first();l=l.delete(y.key),o=o.delete(y.key),r.track({type:1,doc:y})}return{Ra:l,fa:r,ns:d,mutatedKeys:o}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const o=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const l=e.fa.G_();l.sort((y,w)=>function(S,E){const C=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ne()}};return C(S)-C(E)}(y.type,w.type)||this.Aa(y.doc,w.doc)),this.pa(r),i=i!=null&&i;const d=n&&!i?this.ya():[],f=this.da.size===0&&this.current&&!i?1:0,p=f!==this.Ea;return this.Ea=f,l.length!==0||p?{snapshot:new Zo(this.query,e.Ra,o,l,e.mutatedKeys,f===0,p,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:d}:{wa:d}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Vw,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Be(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new fE(r))}),this.da.forEach(r=>{e.has(r)||n.push(new hE(r))}),n}ba(e){this.Ta=e.Ts,this.da=Be();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Zo.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class lN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class uN{constructor(e){this.key=e,this.va=!1}}class cN{constructor(e,n,r,i,o,l){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=l,this.Ca={},this.Fa=new pl(d=>Rk(d),kf),this.Ma=new Map,this.xa=new Set,this.Oa=new gt(Ee.comparator),this.Na=new Map,this.La=new tv,this.Ba={},this.ka=new Map,this.qa=Xo.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function dN(t,e,n=!0){const r=bE(t);let i;const o=r.Fa.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Da()):i=await pE(r,e,n,!0),i}async function hN(t,e){const n=bE(t);await pE(n,e,!0,!1)}async function pE(t,e,n,r){const i=await jj(t.localStore,Xr(e)),o=i.targetId,l=t.sharedClientState.addLocalQueryTarget(o,n);let d;return r&&(d=await fN(t,e,o,l==="current",i.resumeToken)),t.isPrimaryClient&&n&&aE(t.remoteStore,i),d}async function fN(t,e,n,r,i){t.Ka=(w,S,E)=>async function(C,N,I,B){let M=N.view.ma(I);M.ns&&(M=await Ow(C.localStore,N.query,!1).then(({documents:Z})=>N.view.ma(Z,M)));const $=B&&B.targetChanges.get(N.targetId),L=B&&B.targetMismatches.get(N.targetId)!=null,W=N.view.applyChanges(M,C.isPrimaryClient,$,L);return qw(C,N.targetId,W.wa),W.snapshot}(t,w,S,E);const o=await Ow(t.localStore,e,!0),l=new oN(e,o.Ts),d=l.ma(o.documents),f=cc.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),p=l.applyChanges(d,t.isPrimaryClient,f);qw(t,n,p.wa);const y=new lN(e,n,l);return t.Fa.set(e,y),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),p.snapshot}async function pN(t,e,n){const r=Le(t),i=r.Fa.get(e),o=r.Ma.get(i.targetId);if(o.length>1)return r.Ma.set(i.targetId,o.filter(l=>!kf(l,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Kg(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&sv(r.remoteStore,i.targetId),Yg(r,i.targetId)}).catch(oc)):(Yg(r,i.targetId),await Kg(r.localStore,i.targetId,!0))}async function mN(t,e){const n=Le(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),sv(n.remoteStore,r.targetId))}async function gN(t,e,n){const r=kN(t);try{const i=await function(o,l){const d=Le(o),f=Ft.now(),p=l.reduce((S,E)=>S.add(E.key),Be());let y,w;return d.persistence.runTransaction("Locally write mutations","readwrite",S=>{let E=Ds(),C=Be();return d.cs.getEntries(S,p).next(N=>{E=N,E.forEach((I,B)=>{B.isValidDocument()||(C=C.add(I))})}).next(()=>d.localDocuments.getOverlayedDocuments(S,E)).next(N=>{y=N;const I=[];for(const B of l){const M=LA(B,y.get(B.key).overlayedDocument);M!=null&&I.push(new Di(B.key,M,Tk(M.value.mapValue),Nr.exists(!0)))}return d.mutationQueue.addMutationBatch(S,f,I,l)}).next(N=>{w=N;const I=N.applyToLocalDocumentSet(y,C);return d.documentOverlayCache.saveOverlays(S,N.batchId,I)})}).then(()=>({batchId:w.batchId,changes:Mk(y)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,d){let f=o.Ba[o.currentUser.toKey()];f||(f=new gt(Ke)),f=f.insert(l,d),o.Ba[o.currentUser.toKey()]=f}(r,i.batchId,n),await hc(r,i.changes),await Af(r.remoteStore)}catch(i){const o=uv(i,"Failed to persist write");n.reject(o)}}async function mE(t,e){const n=Le(t);try{const r=await Ij(n.localStore,e);e.targetChanges.forEach((i,o)=>{const l=n.Na.get(o);l&&(Je(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?l.va=!0:i.modifiedDocuments.size>0?Je(l.va):i.removedDocuments.size>0&&(Je(l.va),l.va=!1))}),await hc(n,r,e)}catch(r){await oc(r)}}function $w(t,e,n){const r=Le(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((o,l)=>{const d=l.view.Z_(e);d.snapshot&&i.push(d.snapshot)}),function(o,l){const d=Le(o);d.onlineState=l;let f=!1;d.queries.forEach((p,y)=>{for(const w of y.j_)w.Z_(l)&&(f=!0)}),f&&cv(d)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function yN(t,e,n){const r=Le(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),o=i&&i.key;if(o){let l=new gt(Ee.comparator);l=l.insert(o,un.newNoDocument(o,Re.min()));const d=Be().add(o),f=new _f(Re.min(),new Map,new gt(Ke),l,d);await mE(r,f),r.Oa=r.Oa.remove(o),r.Na.delete(e),dv(r)}else await Kg(r.localStore,e,!1).then(()=>Yg(r,e,n)).catch(oc)}async function vN(t,e){const n=Le(t),r=e.batch.batchId;try{const i=await _j(n.localStore,e);yE(n,r,null),gE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await hc(n,i)}catch(i){await oc(i)}}async function bN(t,e,n){const r=Le(t);try{const i=await function(o,l){const d=Le(o);return d.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let p;return d.mutationQueue.lookupMutationBatch(f,l).next(y=>(Je(y!==null),p=y.keys(),d.mutationQueue.removeMutationBatch(f,y))).next(()=>d.mutationQueue.performConsistencyCheck(f)).next(()=>d.documentOverlayCache.removeOverlaysForBatchId(f,p,l)).next(()=>d.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,p)).next(()=>d.localDocuments.getDocuments(f,p))})}(r.localStore,e);yE(r,e,n),gE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await hc(r,i)}catch(i){await oc(i)}}function gE(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function yE(t,e,n){const r=Le(t);let i=r.Ba[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(n?o.reject(n):o.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Yg(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||vE(t,r)})}function vE(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(sv(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),dv(t))}function qw(t,e,n){for(const r of n)r instanceof hE?(t.La.addReference(r.key,e),wN(t,r)):r instanceof fE?(ye("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||vE(t,r.key)):Ne()}function wN(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(ye("SyncEngine","New document in limbo: "+n),t.xa.add(r),dv(t))}function dv(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new Ee(lt.fromString(e)),r=t.qa.next();t.Na.set(r,new uN(n)),t.Oa=t.Oa.insert(n,r),aE(t.remoteStore,new mi(Xr(Dk(n.path)),r,"TargetPurposeLimboResolution",qy.oe))}}async function hc(t,e,n){const r=Le(t),i=[],o=[],l=[];r.Fa.isEmpty()||(r.Fa.forEach((d,f)=>{l.push(r.Ka(f,e,n).then(p=>{var y;if((p||n)&&r.isPrimaryClient){const w=p?!p.fromCache:(y=n==null?void 0:n.targetChanges.get(f.targetId))===null||y===void 0?void 0:y.current;r.sharedClientState.updateQueryState(f.targetId,w?"current":"not-current")}if(p){i.push(p);const w=rv.Wi(f.targetId,p);o.push(w)}}))}),await Promise.all(l),r.Ca.d_(i),await async function(d,f){const p=Le(d);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>re.forEach(f,w=>re.forEach(w.$i,S=>p.persistence.referenceDelegate.addReference(y,w.targetId,S)).next(()=>re.forEach(w.Ui,S=>p.persistence.referenceDelegate.removeReference(y,w.targetId,S)))))}catch(y){if(!lc(y))throw y;ye("LocalStore","Failed to update sequence numbers: "+y)}for(const y of f){const w=y.targetId;if(!y.fromCache){const S=p.os.get(w),E=S.snapshotVersion,C=S.withLastLimboFreeSnapshotVersion(E);p.os=p.os.insert(w,C)}}}(r.localStore,o))}async function xN(t,e){const n=Le(t);if(!n.currentUser.isEqual(e)){ye("SyncEngine","User change. New user:",e.toKey());const r=await nE(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(l=>{l.forEach(d=>{d.reject(new xe(se.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await hc(n,r.hs)}}function SN(t,e){const n=Le(t),r=n.Na.get(e);if(r&&r.va)return Be().add(r.key);{let i=Be();const o=n.Ma.get(e);if(!o)return i;for(const l of o){const d=n.Fa.get(l);i=i.unionWith(d.view.Va)}return i}}function bE(t){const e=Le(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=mE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=SN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=yN.bind(null,e),e.Ca.d_=sN.bind(null,e.eventManager),e.Ca.$a=iN.bind(null,e.eventManager),e}function kN(t){const e=Le(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=vN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=bN.bind(null,e),e}class Gh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=If(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return Tj(this.persistence,new Ej,e.initialUser,this.serializer)}Ga(e){return new xj(nv.Zr,this.serializer)}Wa(e){return new Dj}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Gh.provider={build:()=>new Gh};class Jg{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>$w(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=xN.bind(null,this.syncEngine),await Zj(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new tN}()}createDatastore(e){const n=If(e.databaseInfo.databaseId),r=function(i){return new Mj(i)}(e.databaseInfo);return function(i,o,l,d){return new Vj(i,o,l,d)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(n,r,i,o,l){return new zj(n,r,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>$w(this.syncEngine,n,0),function(){return Fw.D()?new Fw:new Rj}())}createSyncEngine(e,n){return function(r,i,o,l,d,f,p){const y=new cN(r,i,o,l,d,f);return p&&(y.Qa=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(r){const i=Le(r);ye("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await dc(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Jg.provider={build:()=>new Jg};/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*//**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class EN{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Ns("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class CN{constructor(e,n,r,i,o){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ln.UNAUTHENTICATED,this.clientId=kk.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async l=>{ye("FirestoreClient","Received user=",l.uid),await this.authCredentialListener(l),this.user=l}),this.appCheckCredentials.start(r,l=>(ye("FirestoreClient","Received new app check token=",l),this.appCheckCredentialListener(l,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new wi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=uv(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Fm(t,e){t.asyncQueue.verifyOperationInProgress(),ye("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await nE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Hw(t,e){t.asyncQueue.verifyOperationInProgress();const n=await TN(t);ye("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Uw(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Uw(e.remoteStore,i)),t._onlineComponents=e}async function TN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ye("FirestoreClient","Using user provided OfflineComponentProvider");try{await Fm(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(r){return r.name==="FirebaseError"?r.code===se.FAILED_PRECONDITION||r.code===se.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(n))throw n;Ko("Error using user provided cache. Falling back to memory cache: "+n),await Fm(t,new Gh)}}else ye("FirestoreClient","Using default OfflineComponentProvider"),await Fm(t,new Gh);return t._offlineComponents}async function wE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ye("FirestoreClient","Using user provided OnlineComponentProvider"),await Hw(t,t._uninitializedComponentsProvider._online)):(ye("FirestoreClient","Using default OnlineComponentProvider"),await Hw(t,new Jg))),t._onlineComponents}function _N(t){return wE(t).then(e=>e.syncEngine)}async function IN(t){const e=await wE(t),n=e.eventManager;return n.onListen=dN.bind(null,e.syncEngine),n.onUnlisten=pN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=hN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=mN.bind(null,e.syncEngine),n}function PN(t,e,n={}){const r=new wi;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,d,f){const p=new EN({next:w=>{p.Za(),o.enqueueAndForget(()=>rN(i,y)),w.fromCache&&d.source==="server"?f.reject(new xe(se.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(w)},error:w=>f.reject(w)}),y=new aN(l,p,{includeMetadataChanges:!0,_a:!0});return nN(i,y)}(await IN(t),t.asyncQueue,e,n,r)),r.promise}/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function xE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Ww=new Map;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function SE(t,e,n){if(!n)throw new xe(se.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function AN(t,e,n,r){if(e===!0&&r===!0)throw new xe(se.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Gw(t){if(!Ee.isDocumentKey(t))throw new xe(se.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Kw(t){if(Ee.isDocumentKey(t))throw new xe(se.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function hv(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Ne()}function Ia(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new xe(se.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=hv(t);throw new xe(se.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Qw{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new xe(se.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new xe(se.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}AN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=xE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new xe(se.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new xe(se.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new xe(se.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,r){return n.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class jf{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qw({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new xe(se.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new xe(se.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qw(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new $P;switch(n.type){case"firstParty":return new GP(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new xe(se.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Ww.get(e);n&&(ye("ComponentProvider","Removing Datastore"),Ww.delete(e),n.terminate())}(this),Promise.resolve()}}function jN(t,e,n,r={}){var i;const o=(t=Ia(t,jf))._getSettings(),l=`${e}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==l&&Ko("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:l,ssl:!1})),r.mockUserToken){let d,f;if(typeof r.mockUserToken=="string")d=r.mockUserToken,f=ln.MOCK_USER;else{d=_S(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new xe(se.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new ln(p)}t._authCredentials=new qP(new Sk(d,f))}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Nf{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Nf(this.firestore,e,this._query)}}class ur{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ur(this.firestore,e,this._key)}}class xi extends Nf{constructor(e,n,r){super(e,n,Dk(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ur(this.firestore,null,new Ee(e))}withConverter(e){return new xi(this.firestore,e,this._path)}}function In(t,e,...n){if(t=ct(t),SE("collection","path",e),t instanceof jf){const r=lt.fromString(e,...n);return Kw(r),new xi(t,null,r)}{if(!(t instanceof ur||t instanceof xi))throw new xe(se.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(lt.fromString(e,...n));return Kw(r),new xi(t.firestore,null,r)}}function Lr(t,e,...n){if(t=ct(t),arguments.length===1&&(e=kk.newId()),SE("doc","path",e),t instanceof jf){const r=lt.fromString(e,...n);return Gw(r),new ur(t,null,new Ee(r))}{if(!(t instanceof ur||t instanceof xi))throw new xe(se.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(lt.fromString(e,...n));return Gw(r),new ur(t.firestore,t instanceof xi?t.converter:null,new Ee(r))}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Yw{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new sE(this,"async_queue_retry"),this.Vu=()=>{const r=Mm();r&&ye("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Mm();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Mm();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new wi;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!lc(e))throw e;ye("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Ns("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=lv.createAndSchedule(this,e,n,r,o=>this.yu(o));return this.Tu.push(i),i}fu(){this.Eu&&Ne()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class fc extends jf{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Yw,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Yw(e),this._firestoreClient=void 0,await e}}}function NN(t,e){const n=typeof t=="object"?t:gf(),r=typeof t=="string"?t:"(default)",i=ji(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=ES("firestore");o&&jN(i,...o)}return i}function kE(t){if(t._terminated)throw new xe(se.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||DN(t),t._firestoreClient}function DN(t){var e,n,r;const i=t._freezeSettings(),o=function(l,d,f,p){return new aA(l,d,f,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,xE(p.experimentalLongPollingOptions),p.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new CN(t._authCredentials,t._appCheckCredentials,t._queue,o,t._componentsProvider&&function(l){const d=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(d),_online:d}}(t._componentsProvider))}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class el{constructor(e){this._byteString=e}static fromBase64String(e){try{return new el(en.fromBase64String(e))}catch(n){throw new xe(se.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new el(en.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Df{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new xe(se.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class fv{constructor(e){this._methodName=e}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class pv{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new xe(se.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new xe(se.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ke(this._lat,e._lat)||Ke(this._long,e._long)}}/**
* @license
* Copyright 2024 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class mv{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,r){if(n.length!==r.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==r[i])return!1;return!0}(this._values,e._values)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const RN=/^__.*__$/;class LN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Di(e,this.data,this.fieldMask,n,this.fieldTransforms):new uc(e,this.data,n,this.fieldTransforms)}}class EE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Di(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function CE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ne()}}class gv{constructor(e,n,r,i,o,l){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=l||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new gv(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Kh(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(CE(this.Cu)&&RN.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class ON{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||If(e)}Qu(e,n,r,i=!1){return new gv({Cu:e,methodName:n,qu:r,path:Xt.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function TE(t){const e=t._freezeSettings(),n=If(t._databaseId);return new ON(t._databaseId,!!e.ignoreUndefinedProperties,n)}function MN(t,e,n,r,i,o={}){const l=t.Qu(o.merge||o.mergeFields?2:0,e,n,i);yv("Data must be an object, but it was:",l,r);const d=_E(r,l);let f,p;if(o.merge)f=new Vn(l.fieldMask),p=l.fieldTransforms;else if(o.mergeFields){const y=[];for(const w of o.mergeFields){const S=Xg(e,w,n);if(!l.contains(S))throw new xe(se.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);PE(y,S)||y.push(S)}f=new Vn(y),p=l.fieldTransforms.filter(w=>f.covers(w.field))}else f=null,p=l.fieldTransforms;return new LN(new _n(d),f,p)}class Rf extends fv{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Rf}}function FN(t,e,n,r){const i=t.Qu(1,e,n);yv("Data must be an object, but it was:",i,r);const o=[],l=_n.empty();Oa(r,(f,p)=>{const y=vv(e,f,n);p=ct(p);const w=i.Nu(y);if(p instanceof Rf)o.push(y);else{const S=Lf(p,w);S!=null&&(o.push(y),l.set(y,S))}});const d=new Vn(o);return new EE(l,d,i.fieldTransforms)}function UN(t,e,n,r,i,o){const l=t.Qu(1,e,n),d=[Xg(e,r,n)],f=[i];if(o.length%2!=0)throw new xe(se.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let S=0;S<o.length;S+=2)d.push(Xg(e,o[S])),f.push(o[S+1]);const p=[],y=_n.empty();for(let S=d.length-1;S>=0;--S)if(!PE(p,d[S])){const E=d[S];let C=f[S];C=ct(C);const N=l.Nu(E);if(C instanceof Rf)p.push(E);else{const I=Lf(C,N);I!=null&&(p.push(E),y.set(E,I))}}const w=new Vn(p);return new EE(y,w,l.fieldTransforms)}function Lf(t,e){if(IE(t=ct(t)))return yv("Unsupported field value:",e,t),_E(t,e);if(t instanceof fv)return function(n,r){if(!CE(r.Cu))throw r.Bu(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Bu(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(n,r){const i=[];let o=0;for(const l of n){let d=Lf(l,r.Lu(o));d==null&&(d={nullValue:"NULL_VALUE"}),i.push(d),o++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=ct(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return PA(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Ft.fromDate(n);return{timestampValue:Hh(r.serializer,i)}}if(n instanceof Ft){const i=new Ft(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Hh(r.serializer,i)}}if(n instanceof pv)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof el)return{bytesValue:Qk(r.serializer,n._byteString)};if(n instanceof ur){const i=r.databaseId,o=n.firestore._databaseId;if(!o.isEqual(i))throw r.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ev(n.firestore._databaseId||r.databaseId,n._key.path)}}if(n instanceof mv)return function(i,o){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:i.toArray().map(l=>{if(typeof l!="number")throw o.Bu("VectorValues must only contain numeric values.");return Yy(o.serializer,l)})}}}}}}(n,r);throw r.Bu(`Unsupported field value: ${hv(n)}`)}(t,e)}function _E(t,e){const n={};return Ek(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Oa(t,(r,i)=>{const o=Lf(i,e.Mu(r));o!=null&&(n[r]=o)}),{mapValue:{fields:n}}}function IE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ft||t instanceof pv||t instanceof el||t instanceof ur||t instanceof fv||t instanceof mv)}function yv(t,e,n){if(!IE(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=hv(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Xg(t,e,n){if((e=ct(e))instanceof Df)return e._internalPath;if(typeof e=="string")return vv(t,e);throw Kh("Field path arguments must be of type string or ",t,!1,void 0,n)}const VN=new RegExp("[~\\*/\\[\\]]");function vv(t,e,n){if(e.search(VN)>=0)throw Kh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Df(...e.split("."))._internalPath}catch{throw Kh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Kh(t,e,n,r,i){const o=r&&!r.isEmpty(),l=i!==void 0;let d=`Function ${e}() called with invalid data`;n&&(d+=" (via `toFirestore()`)"),d+=". ";let f="";return(o||l)&&(f+=" (found",o&&(f+=` in field ${r}`),l&&(f+=` in document ${i}`),f+=")"),new xe(se.INVALID_ARGUMENT,d+t+f)}function PE(t,e){return t.some(n=>n.isEqual(e))}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class AE{constructor(e,n,r,i,o){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new ur(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new BN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(jE("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class BN extends AE{data(){return super.data()}}function jE(t,e){return typeof e=="string"?vv(t,e):e instanceof Df?e._internalPath:e._delegate._internalPath}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function zN(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new xe(se.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class $N{convertValue(e,n="none"){switch(_a(e)){case 0:return null;case 1:return e.booleanValue;case 2:return kt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ta(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Ne()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Oa(e,(i,o)=>{r[i]=this.convertValue(o,n)}),r}convertVectorValue(e){var n,r,i;const o=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(l=>kt(l.doubleValue));return new mv(o)}convertGeoPoint(e){return new pv(kt(e.latitude),kt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Wy(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Gu(e));default:return null}}convertTimestamp(e){const n=Ti(e);return new Ft(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=lt.fromString(e);Je(tE(r));const i=new Ku(r.get(1),r.get(3)),o=new Ee(r.popFirst(5));return i.isEqual(n)||Ns(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),o}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function qN(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class zd{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class HN extends AE{constructor(e,n,r,i,o,l){super(e,n,r,i,l),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new xh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(jE("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class xh extends HN{data(e={}){return super.data(e)}}class WN{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new zd(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new xh(this._firestore,this._userDataWriter,r.key,r,new zd(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new xe(se.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(l=>{const d=new xh(r._firestore,r._userDataWriter,l.doc.key,l.doc,new zd(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);return l.doc,{type:"added",doc:d,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const d=new xh(r._firestore,r._userDataWriter,l.doc.key,l.doc,new zd(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);let f=-1,p=-1;return l.type!==0&&(f=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),p=o.indexOf(l.doc.key)),{type:GN(l.type),doc:d,oldIndex:f,newIndex:p}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function GN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ne()}}class KN extends $N{constructor(e){super(),this.firestore=e}convertBytes(e){return new el(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ur(this.firestore,null,n)}}function Kr(t){t=Ia(t,Nf);const e=Ia(t.firestore,fc),n=kE(e),r=new KN(e);return zN(t._query),PN(n,t._query).then(i=>new WN(e,r,t,i))}function pc(t,e,n,...r){t=Ia(t,ur);const i=Ia(t.firestore,fc),o=TE(i);let l;return l=typeof(e=ct(e))=="string"||e instanceof Df?UN(o,"updateDoc",t._key,e,n,r):FN(o,"updateDoc",t._key,e),bv(i,[l.toMutation(t._key,Nr.exists(!0))])}function mc(t){return bv(Ia(t.firestore,fc),[new Jy(t._key,Nr.none())])}function Of(t,e){const n=Ia(t.firestore,fc),r=Lr(t),i=qN(t.converter,e);return bv(n,[MN(TE(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Nr.exists(!1))]).then(()=>r)}function bv(t,e){return function(n,r){const i=new wi;return n.asyncQueue.enqueueAndForget(async()=>gN(await _N(n),r,i)),i.promise}(kE(t),e)}(function(t,e=!0){(function(n){fl=n})(Da),Rr(new cr("firestore",(n,{instanceIdentifier:r,options:i})=>{const o=n.getProvider("app").getImmediate(),l=new fc(new HP(n.getProvider("auth-internal")),new QP(n.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new xe(se.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ku(d.options.projectId,f)}(o,r),o);return i=Object.assign({useFetchStreams:e},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Pn(mw,"4.7.3",t),Pn(mw,"4.7.3","esm2017")})();/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const NE="firebasestorage.googleapis.com",DE="storageBucket",QN=2*60*1e3,YN=10*60*1e3;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class bt extends pr{constructor(e,n,r=0){super(Um(e),`Firebase Storage: ${n} (${Um(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,bt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Um(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var vt;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(vt||(vt={}));function Um(t){return"storage/"+t}function wv(){const t="An unknown error occurred, please check the error payload for server response.";return new bt(vt.UNKNOWN,t)}function JN(t){return new bt(vt.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function XN(t){return new bt(vt.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function ZN(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new bt(vt.UNAUTHENTICATED,t)}function eD(){return new bt(vt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function tD(t){return new bt(vt.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function nD(){return new bt(vt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function rD(){return new bt(vt.CANCELED,"User canceled the upload/download.")}function sD(t){return new bt(vt.INVALID_URL,"Invalid URL '"+t+"'.")}function iD(t){return new bt(vt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function aD(){return new bt(vt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+DE+"' property when initializing the app?")}function oD(){return new bt(vt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function lD(){return new bt(vt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function uD(t){return new bt(vt.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Zg(t){return new bt(vt.INVALID_ARGUMENT,t)}function RE(){return new bt(vt.APP_DELETED,"The Firebase app was deleted.")}function cD(t){return new bt(vt.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Nu(t,e){return new bt(vt.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function fu(t){throw new bt(vt.INTERNAL_ERROR,"Internal error: "+t)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Bn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Bn.makeFromUrl(e,n)}catch{return new Bn(e,"")}if(r.path==="")return r;throw iD(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function o($){$.path.charAt($.path.length-1)==="/"&&($.path_=$.path_.slice(0,-1))}const l="(/(.*))?$",d=new RegExp("^gs://"+i+l,"i"),f={bucket:1,path:3};function p($){$.path_=decodeURIComponent($.path)}const y="v[A-Za-z0-9_]+",w=n.replace(/[.]/g,"\\."),S="(/([^?#]*).*)?$",E=new RegExp(`^https?://${w}/${y}/b/${i}/o${S}`,"i"),C={bucket:1,path:3},N=n===NE?"(?:storage.googleapis.com|storage.cloud.google.com)":n,I="([^?#]*)",B=new RegExp(`^https?://${N}/${i}/${I}`,"i"),M=[{regex:d,indices:f,postModify:o},{regex:E,indices:C,postModify:p},{regex:B,indices:{bucket:1,path:2},postModify:p}];for(let $=0;$<M.length;$++){const L=M[$],W=L.regex.exec(e);if(W){const Z=W[L.indices.bucket];let P=W[L.indices.path];P||(P=""),r=new Bn(Z,P),L.postModify(r);break}}if(r==null)throw sD(e);return r}}class dD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function hD(t,e,n){let r=1,i=null,o=null,l=!1,d=0;function f(){return d===2}let p=!1;function y(...I){p||(p=!0,e.apply(null,I))}function w(I){i=setTimeout(()=>{i=null,t(E,f())},I)}function S(){o&&clearTimeout(o)}function E(I,...B){if(p){S();return}if(I){S(),y.call(null,I,...B);return}if(f()||l){S(),y.call(null,I,...B);return}r<64&&(r*=2);let M;d===1?(d=2,M=0):M=(r+Math.random())*1e3,w(M)}let C=!1;function N(I){C||(C=!0,S(),!p&&(i!==null?(I||(d=2),clearTimeout(i),w(0)):I||(d=1)))}return w(0),o=setTimeout(()=>{l=!0,N(!0)},n),N}function fD(t){t(!1)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function pD(t){return t!==void 0}function mD(t){return typeof t=="object"&&!Array.isArray(t)}function xv(t){return typeof t=="string"||t instanceof String}function Jw(t){return Sv()&&t instanceof Blob}function Sv(){return typeof Blob<"u"}function Xw(t,e,n,r){if(r<e)throw Zg(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Zg(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Mf(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function LE(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var xa;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(xa||(xa={}));/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function gD(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class yD{constructor(e,n,r,i,o,l,d,f,p,y,w,S=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=o,this.additionalRetryCodes_=l,this.callback_=d,this.errorCallback_=f,this.timeout_=p,this.progressCallback_=y,this.connectionFactory_=w,this.retry=S,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((E,C)=>{this.resolve_=E,this.reject_=C,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new $d(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const l=d=>{const f=d.loaded,p=d.lengthComputable?d.total:-1;this.progressCallback_!==null&&this.progressCallback_(f,p)};this.progressCallback_!==null&&o.addUploadProgressListener(l),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(l),this.pendingConnection_=null;const d=o.getErrorCode()===xa.NO_ERROR,f=o.getStatus();if(!d||gD(f,this.additionalRetryCodes_)&&this.retry){const y=o.getErrorCode()===xa.ABORT;r(!1,new $d(!1,null,y));return}const p=this.successCodes_.indexOf(f)!==-1;r(!0,new $d(p,o))})},n=(r,i)=>{const o=this.resolve_,l=this.reject_,d=i.connection;if(i.wasSuccessCode)try{const f=this.callback_(d,d.getResponse());pD(f)?o(f):o()}catch(f){l(f)}else if(d!==null){const f=wv();f.serverResponse=d.getErrorText(),this.errorCallback_?l(this.errorCallback_(d,f)):l(f)}else if(i.canceled){const f=this.appDelete_?RE():rD();l(f)}else{const f=nD();l(f)}};this.canceled_?n(!1,new $d(!1,null,!0)):this.backoffId_=hD(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&fD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class $d{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function vD(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function bD(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function wD(t,e){e&&(t["X-Firebase-GMPID"]=e)}function xD(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function SD(t,e,n,r,i,o,l=!0){const d=LE(t.urlParams),f=t.url+d,p=Object.assign({},t.headers);return wD(p,e),vD(p,n),bD(p,o),xD(p,r),new yD(f,t.method,p,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,l)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function kD(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function ED(...t){const e=kD();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Sv())return new Blob(t);throw new bt(vt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function CD(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function TD(t){if(typeof atob>"u")throw uD("base-64");return atob(t)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Yr={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Vm{constructor(e,n){this.data=e,this.contentType=n||null}}function _D(t,e){switch(t){case Yr.RAW:return new Vm(OE(e));case Yr.BASE64:case Yr.BASE64URL:return new Vm(ME(t,e));case Yr.DATA_URL:return new Vm(PD(e),AD(e))}throw wv()}function OE(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function ID(t){let e;try{e=decodeURIComponent(t)}catch{throw Nu(Yr.DATA_URL,"Malformed data URL.")}return OE(e)}function ME(t,e){switch(t){case Yr.BASE64:{const i=e.indexOf("-")!==-1,o=e.indexOf("_")!==-1;if(i||o)throw Nu(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Yr.BASE64URL:{const i=e.indexOf("+")!==-1,o=e.indexOf("/")!==-1;if(i||o)throw Nu(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=TD(e)}catch(i){throw i.message.includes("polyfill")?i:Nu(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class FE{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Nu(Yr.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=jD(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function PD(t){const e=new FE(t);return e.base64?ME(Yr.BASE64,e.rest):ID(e.rest)}function AD(t){return new FE(t).contentType}function jD(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class fi{constructor(e,n){let r=0,i="";Jw(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Jw(this.data_)){const r=this.data_,i=CD(r,e,n);return i===null?null:new fi(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new fi(r,!0)}}static getBlob(...e){if(Sv()){const n=e.map(r=>r instanceof fi?r.data_:r);return new fi(ED.apply(null,n))}else{const n=e.map(l=>xv(l)?_D(Yr.RAW,l).data:l.data_);let r=0;n.forEach(l=>{r+=l.byteLength});const i=new Uint8Array(r);let o=0;return n.forEach(l=>{for(let d=0;d<l.length;d++)i[o++]=l[d]}),new fi(i,!0)}}uploadData(){return this.data_}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function UE(t){let e;try{e=JSON.parse(t)}catch{return null}return mD(e)?e:null}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function ND(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function DD(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function VE(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function RD(t,e){return e}class gn{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||RD}}let qd=null;function LD(t){return!xv(t)||t.length<2?t:VE(t)}function BE(){if(qd)return qd;const t=[];t.push(new gn("bucket")),t.push(new gn("generation")),t.push(new gn("metageneration")),t.push(new gn("name","fullPath",!0));function e(o,l){return LD(l)}const n=new gn("name");n.xform=e,t.push(n);function r(o,l){return l!==void 0?Number(l):l}const i=new gn("size");return i.xform=r,t.push(i),t.push(new gn("timeCreated")),t.push(new gn("updated")),t.push(new gn("md5Hash",null,!0)),t.push(new gn("cacheControl",null,!0)),t.push(new gn("contentDisposition",null,!0)),t.push(new gn("contentEncoding",null,!0)),t.push(new gn("contentLanguage",null,!0)),t.push(new gn("contentType",null,!0)),t.push(new gn("metadata","customMetadata",!0)),qd=t,qd}function OD(t,e){function n(){const r=t.bucket,i=t.fullPath,o=new Bn(r,i);return e._makeStorageReference(o)}Object.defineProperty(t,"ref",{get:n})}function MD(t,e,n){const r={};r.type="file";const i=n.length;for(let o=0;o<i;o++){const l=n[o];r[l.local]=l.xform(r,e[l.server])}return OD(r,t),r}function zE(t,e,n){const r=UE(e);return r===null?null:MD(t,r,n)}function FD(t,e,n,r){const i=UE(e);if(i===null||!xv(i.downloadTokens))return null;const o=i.downloadTokens;if(o.length===0)return null;const l=encodeURIComponent;return o.split(",").map(d=>{const f=t.bucket,p=t.fullPath,y="/b/"+l(f)+"/o/"+l(p),w=Mf(y,n,r),S=LE({alt:"media",token:d});return w+S})[0]}function UD(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const o=e[i];o.writable&&(n[o.server]=t[o.local])}return JSON.stringify(n)}class kv{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function $E(t){if(!t)throw wv()}function VD(t,e){function n(r,i){const o=zE(t,i,e);return $E(o!==null),o}return n}function BD(t,e){function n(r,i){const o=zE(t,i,e);return $E(o!==null),FD(o,i,t.host,t._protocol)}return n}function qE(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=eD():i=ZN():n.getStatus()===402?i=XN(t.bucket):n.getStatus()===403?i=tD(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function HE(t){const e=qE(t);function n(r,i){let o=e(r,i);return r.getStatus()===404&&(o=JN(t.path)),o.serverResponse=i.serverResponse,o}return n}function zD(t,e,n){const r=e.fullServerUrl(),i=Mf(r,t.host,t._protocol),o="GET",l=t.maxOperationRetryTime,d=new kv(i,o,BD(t,n),l);return d.errorHandler=HE(e),d}function $D(t,e){const n=e.fullServerUrl(),r=Mf(n,t.host,t._protocol),i="DELETE",o=t.maxOperationRetryTime;function l(f,p){}const d=new kv(r,i,l,o);return d.successCodes=[200,204],d.errorHandler=HE(e),d}function qD(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function HD(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=qD(null,e)),r}function WD(t,e,n,r,i){const o=e.bucketOnlyServerUrl(),l={"X-Goog-Upload-Protocol":"multipart"};function d(){let $="";for(let L=0;L<2;L++)$=$+Math.random().toString().slice(2);return $}const f=d();l["Content-Type"]="multipart/related; boundary="+f;const p=HD(e,r,i),y=UD(p,n),w="--"+f+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+y+`\r
--`+f+`\r
Content-Type: `+p.contentType+`\r
\r
`,S=`\r
--`+f+"--",E=fi.getBlob(w,r,S);if(E===null)throw oD();const C={name:p.fullPath},N=Mf(o,t.host,t._protocol),I="POST",B=t.maxUploadRetryTime,M=new kv(N,I,VD(t,n),B);return M.urlParams=C,M.headers=l,M.body=E.uploadData(),M.errorHandler=qE(e),M}class GD{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=xa.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=xa.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=xa.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw fu("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw fu("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw fu("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw fu("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw fu("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class KD extends GD{initXhr(){this.xhr_.responseType="text"}}function Ev(){return new KD}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Pa{constructor(e,n){this._service=e,n instanceof Bn?this._location=n:this._location=Bn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Pa(e,n)}get root(){const e=new Bn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return VE(this._location.path)}get storage(){return this._service}get parent(){const e=ND(this._location.path);if(e===null)return null;const n=new Bn(this._location.bucket,e);return new Pa(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw cD(e)}}function QD(t,e,n){t._throwIfRoot("uploadBytes");const r=WD(t.storage,t._location,BE(),new fi(e,!0),n);return t.storage.makeRequestWithTokens(r,Ev).then(i=>({metadata:i,ref:t}))}function YD(t){t._throwIfRoot("getDownloadURL");const e=zD(t.storage,t._location,BE());return t.storage.makeRequestWithTokens(e,Ev).then(n=>{if(n===null)throw lD();return n})}function JD(t){t._throwIfRoot("deleteObject");const e=$D(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Ev)}function XD(t,e){const n=DD(t._location.path,e),r=new Bn(t._location.bucket,n);return new Pa(t.storage,r)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function ZD(t){return/^[A-Za-z]+:\/\//.test(t)}function e9(t,e){return new Pa(t,e)}function WE(t,e){if(t instanceof Cv){const n=t;if(n._bucket==null)throw aD();const r=new Pa(n,n._bucket);return e!=null?WE(r,e):r}else return e!==void 0?XD(t,e):t}function t9(t,e){if(e&&ZD(e)){if(t instanceof Cv)return e9(t,e);throw Zg("To use ref(service, url), the first argument must be a Storage instance.")}else return WE(t,e)}function Zw(t,e){const n=e==null?void 0:e[DE];return n==null?null:Bn.makeFromBucketSpec(n,t)}function n9(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:_S(i,t.app.options.projectId))}class Cv{constructor(e,n,r,i,o){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=o,this._bucket=null,this._host=NE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=QN,this._maxUploadRetryTime=YN,this._requests=new Set,i!=null?this._bucket=Bn.makeFromBucketSpec(i,this._host):this._bucket=Zw(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Bn.makeFromBucketSpec(this._url,e):this._bucket=Zw(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Xw("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Xw("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Pa(this,e)}_makeRequest(e,n,r,i,o=!0){if(this._deleted)return new dD(RE());{const l=SD(e,this._appId,r,i,n,this._firebaseVersion,o);return this._requests.add(l),l.getPromise().then(()=>this._requests.delete(l),()=>this._requests.delete(l)),l}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const ex="@firebase/storage",tx="0.13.2";/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const GE="storage";function Tv(t,e,n){return t=ct(t),QD(t,e,n)}function _v(t){return t=ct(t),YD(t)}function Iv(t){return t=ct(t),JD(t)}function tl(t,e){return t=ct(t),t9(t,e)}function r9(t=gf(),e){t=ct(t);const n=ji(t,GE).getImmediate({identifier:e}),r=ES("storage");return r&&s9(n,...r),n}function s9(t,e,n,r={}){n9(t,e,n,r)}function i9(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Cv(n,r,i,e,Da)}function a9(){Rr(new cr(GE,i9,"PUBLIC").setMultipleInstances(!0)),Pn(ex,tx,""),Pn(ex,tx,"esm2017")}a9();const KE="@firebase/installations",Pv="0.6.9";/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const QE=1e4,YE=`w:${Pv}`,JE="FIS_v2",o9="https://firebaseinstallations.googleapis.com/v1",l9=60*60*1e3,u9="installations",c9="Installations";/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const d9={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Aa=new Na(u9,c9,d9);function XE(t){return t instanceof pr&&t.code.includes("request-failed")}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function ZE({projectId:t}){return`${o9}/projects/${t}/installations`}function eC(t){return{token:t.token,requestStatus:2,expiresIn:f9(t.expiresIn),creationTime:Date.now()}}async function tC(t,e){const n=(await e.json()).error;return Aa.create("request-failed",{requestName:t,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function nC({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function h9(t,{refreshToken:e}){const n=nC(t);return n.append("Authorization",p9(e)),n}async function rC(t){const e=await t();return e.status>=500&&e.status<600?t():e}function f9(t){return Number(t.replace("s","000"))}function p9(t){return`${JE} ${t}`}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function m9({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=ZE(t),i=nC(t),o=e.getImmediate({optional:!0});if(o){const p=await o.getHeartbeatsHeader();p&&i.append("x-firebase-client",p)}const l={fid:n,authVersion:JE,appId:t.appId,sdkVersion:YE},d={method:"POST",headers:i,body:JSON.stringify(l)},f=await rC(()=>fetch(r,d));if(f.ok){const p=await f.json();return{fid:p.fid||n,registrationStatus:2,refreshToken:p.refreshToken,authToken:eC(p.authToken)}}else throw await tC("Create Installation",f)}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function sC(t){return new Promise(e=>{setTimeout(e,t)})}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function g9(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const y9=/^[cdef][\w-]{21}$/,ey="";function v9(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const e=b9(t);return y9.test(e)?e:ey}catch{return ey}}function b9(t){return g9(t).substr(0,22)}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Ff(t){return`${t.appName}!${t.appId}`}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const iC=new Map;function aC(t,e){const n=Ff(t);oC(n,e),w9(n,e)}function oC(t,e){const n=iC.get(t);if(n)for(const r of n)r(e)}function w9(t,e){const n=x9();n&&n.postMessage({key:t,fid:e}),S9()}let ya=null;function x9(){return!ya&&"BroadcastChannel"in self&&(ya=new BroadcastChannel("[Firebase] FID Change"),ya.onmessage=t=>{oC(t.data.key,t.data.fid)}),ya}function S9(){iC.size===0&&ya&&(ya.close(),ya=null)}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const k9="firebase-installations-database",E9=1,ja="firebase-installations-store";let Bm=null;function Av(){return Bm||(Bm=DS(k9,E9,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ja)}}})),Bm}async function Qh(t,e){const n=Ff(t),r=(await Av()).transaction(ja,"readwrite"),i=r.objectStore(ja),o=await i.get(n);return await i.put(e,n),await r.done,(!o||o.fid!==e.fid)&&aC(t,e.fid),e}async function lC(t){const e=Ff(t),n=(await Av()).transaction(ja,"readwrite");await n.objectStore(ja).delete(e),await n.done}async function Uf(t,e){const n=Ff(t),r=(await Av()).transaction(ja,"readwrite"),i=r.objectStore(ja),o=await i.get(n),l=e(o);return l===void 0?await i.delete(n):await i.put(l,n),await r.done,l&&(!o||o.fid!==l.fid)&&aC(t,l.fid),l}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function jv(t){let e;const n=await Uf(t.appConfig,r=>{const i=C9(r),o=T9(t,i);return e=o.registrationPromise,o.installationEntry});return n.fid===ey?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function C9(t){const e=t||{fid:v9(),registrationStatus:0};return uC(e)}function T9(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Aa.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=_9(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:I9(t)}:{installationEntry:e}}async function _9(t,e){try{const n=await m9(t,e);return Qh(t.appConfig,n)}catch(n){throw XE(n)&&n.customData.serverCode===409?await lC(t.appConfig):await Qh(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function I9(t){let e=await nx(t.appConfig);for(;e.registrationStatus===1;)await sC(100),e=await nx(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await jv(t);return r||n}return e}function nx(t){return Uf(t,e=>{if(!e)throw Aa.create("installation-not-found");return uC(e)})}function uC(t){return P9(t)?{fid:t.fid,registrationStatus:0}:t}function P9(t){return t.registrationStatus===1&&t.registrationTime+QE<Date.now()}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function A9({appConfig:t,heartbeatServiceProvider:e},n){const r=j9(t,n),i=h9(t,n),o=e.getImmediate({optional:!0});if(o){const p=await o.getHeartbeatsHeader();p&&i.append("x-firebase-client",p)}const l={installation:{sdkVersion:YE,appId:t.appId}},d={method:"POST",headers:i,body:JSON.stringify(l)},f=await rC(()=>fetch(r,d));if(f.ok){const p=await f.json();return eC(p)}else throw await tC("Generate Auth Token",f)}function j9(t,{fid:e}){return`${ZE(t)}/${e}/authTokens:generate`}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function Nv(t,e=!1){let n;const r=await Uf(t.appConfig,i=>{if(!cC(i))throw Aa.create("not-registered");const o=i.authToken;if(!e&&R9(o))return i;if(o.requestStatus===1)return n=N9(t,e),i;{if(!navigator.onLine)throw Aa.create("app-offline");const l=O9(i);return n=D9(t,l),l}});return n?await n:r.authToken}async function N9(t,e){let n=await rx(t.appConfig);for(;n.authToken.requestStatus===1;)await sC(100),n=await rx(t.appConfig);const r=n.authToken;return r.requestStatus===0?Nv(t,e):r}function rx(t){return Uf(t,e=>{if(!cC(e))throw Aa.create("not-registered");const n=e.authToken;return M9(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function D9(t,e){try{const n=await A9(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Qh(t.appConfig,r),n}catch(n){if(XE(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await lC(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Qh(t.appConfig,r)}throw n}}function cC(t){return t!==void 0&&t.registrationStatus===2}function R9(t){return t.requestStatus===2&&!L9(t)}function L9(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+l9}function O9(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function M9(t){return t.requestStatus===1&&t.requestTime+QE<Date.now()}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function F9(t){const e=t,{installationEntry:n,registrationPromise:r}=await jv(e);return r?r.catch(console.error):Nv(e).catch(console.error),n.fid}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function U9(t,e=!1){const n=t;return await V9(n),(await Nv(n,e)).token}async function V9(t){const{registrationPromise:e}=await jv(t);e&&await e}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function B9(t){if(!t||!t.options)throw zm("App Configuration");if(!t.name)throw zm("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw zm(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function zm(t){return Aa.create("missing-app-config-values",{valueName:t})}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const dC="installations",z9="installations-internal",$9=t=>{const e=t.getProvider("app").getImmediate(),n=B9(e),r=ji(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},q9=t=>{const e=t.getProvider("app").getImmediate(),n=ji(e,dC).getImmediate();return{getId:()=>F9(n),getToken:r=>U9(n,r)}};function H9(){Rr(new cr(dC,$9,"PUBLIC")),Rr(new cr(z9,q9,"PRIVATE"))}H9();Pn(KE,Pv);Pn(KE,Pv,"esm2017");/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Yh="analytics",W9="firebase_id",G9="origin",K9=60*1e3,Q9="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Dv="https://www.googletagmanager.com/gtag/js";/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const An=new mf("@firebase/analytics");/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Y9={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},zn=new Na("analytics","Analytics",Y9);/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function J9(t){if(!t.startsWith(Dv)){const e=zn.create("invalid-gtag-resource",{gtagURL:t});return An.warn(e.message),""}return t}function hC(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function X9(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function Z9(t,e){const n=X9("firebase-js-sdk-policy",{createScriptURL:J9}),r=document.createElement("script"),i=`${Dv}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function eR(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function tR(t,e,n,r,i,o){const l=r[i];try{if(l)await e[l];else{const d=(await hC(n)).find(f=>f.measurementId===i);d&&await e[d.appId]}}catch(d){An.error(d)}t("config",i,o)}async function nR(t,e,n,r,i){try{let o=[];if(i&&i.send_to){let l=i.send_to;Array.isArray(l)||(l=[l]);const d=await hC(n);for(const f of l){const p=d.find(w=>w.measurementId===f),y=p&&e[p.appId];if(y)o.push(y);else{o=[];break}}}o.length===0&&(o=Object.values(e)),await Promise.all(o),t("event",r,i||{})}catch(o){An.error(o)}}function rR(t,e,n,r){async function i(o,...l){try{if(o==="event"){const[d,f]=l;await nR(t,e,n,d,f)}else if(o==="config"){const[d,f]=l;await tR(t,e,n,r,d,f)}else if(o==="consent"){const[d,f]=l;t("consent",d,f)}else if(o==="get"){const[d,f,p]=l;t("get",d,f,p)}else if(o==="set"){const[d]=l;t("set",d)}else t(o,...l)}catch(d){An.error(d)}}return i}function sR(t,e,n,r,i){let o=function(...l){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=rR(o,t,e,n),{gtagCore:o,wrappedGtag:window[i]}}function iR(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Dv)&&n.src.includes(t))return n;return null}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const aR=30,oR=1e3;class lR{constructor(e={},n=oR){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const fC=new lR;function uR(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function cR(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:uR(r)},o=Q9.replace("{app-id}",n),l=await fetch(o,i);if(l.status!==200&&l.status!==304){let d="";try{const f=await l.json();!((e=f.error)===null||e===void 0)&&e.message&&(d=f.error.message)}catch{}throw zn.create("config-fetch-failed",{httpStatus:l.status,responseMessage:d})}return l.json()}async function dR(t,e=fC,n){const{appId:r,apiKey:i,measurementId:o}=t.options;if(!r)throw zn.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw zn.create("no-api-key")}const l=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},d=new pR;return setTimeout(async()=>{d.abort()},K9),pC({appId:r,apiKey:i,measurementId:o},l,d,e)}async function pC(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=fC){var o;const{appId:l,measurementId:d}=t;try{await hR(r,e)}catch(f){if(d)return An.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${f==null?void 0:f.message}]`),{appId:l,measurementId:d};throw f}try{const f=await cR(t);return i.deleteThrottleMetadata(l),f}catch(f){const p=f;if(!fR(p)){if(i.deleteThrottleMetadata(l),d)return An.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:l,measurementId:d};throw f}const y=Number((o=p==null?void 0:p.customData)===null||o===void 0?void 0:o.httpStatus)===503?Ub(n,i.intervalMillis,aR):Ub(n,i.intervalMillis),w={throttleEndTimeMillis:Date.now()+y,backoffCount:n+1};return i.setThrottleMetadata(l,w),An.debug(`Calling attemptFetch again in ${y} millis`),pC(t,w,r,i)}}function hR(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),o=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(o),r(zn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function fR(t){if(!(t instanceof pr)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class pR{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function mR(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const o=await e,l=Object.assign(Object.assign({},r),{send_to:o});t("event",n,l)}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function gR(){if(PS())try{await AS()}catch(t){return An.warn(zn.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return An.warn(zn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function yR(t,e,n,r,i,o,l){var d;const f=dR(t);f.then(E=>{n[E.measurementId]=E.appId,t.options.measurementId&&E.measurementId!==t.options.measurementId&&An.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${E.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(E=>An.error(E)),e.push(f);const p=gR().then(E=>{if(E)return r.getId()}),[y,w]=await Promise.all([f,p]);iR(o)||Z9(o,y.measurementId),i("js",new Date);const S=(d=l==null?void 0:l.config)!==null&&d!==void 0?d:{};return S[G9]="firebase",S.update=!0,w!=null&&(S[W9]=w),i("config",y.measurementId,S),y.measurementId}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class vR{constructor(e){this.app=e}_delete(){return delete Du[this.app.options.appId],Promise.resolve()}}let Du={},sx=[];const ix={};let $m="dataLayer",bR="gtag",ax,mC,ox=!1;function wR(){const t=[];if(IS()&&t.push("This is a browser extension environment."),d_()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=zn.create("invalid-analytics-context",{errorInfo:e});An.warn(n.message)}}function xR(t,e,n){wR();const r=t.options.appId;if(!r)throw zn.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)An.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw zn.create("no-api-key");if(Du[r]!=null)throw zn.create("already-exists",{id:r});if(!ox){eR($m);const{wrappedGtag:i,gtagCore:o}=sR(Du,sx,ix,$m,bR);mC=i,ax=o,ox=!0}return Du[r]=yR(t,sx,ix,e,ax,$m,n),new vR(t)}function SR(t=gf()){t=ct(t);const e=ji(t,Yh);return e.isInitialized()?e.getImmediate():kR(t)}function kR(t,e={}){const n=ji(t,Yh);if(n.isInitialized()){const r=n.getImmediate();if(zu(e,n.getOptions()))return r;throw zn.create("already-initialized")}return n.initialize({options:e})}function gC(t,e,n,r){t=ct(t),mR(mC,Du[t.app.options.appId],e,n,r).catch(i=>An.error(i))}const lx="@firebase/analytics",ux="0.10.8";function ER(){Rr(new cr(Yh,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return xR(r,i,n)},"PUBLIC")),Rr(new cr("analytics-internal",t,"PRIVATE")),Pn(lx,ux),Pn(lx,ux,"esm2017");function t(e){try{const n=e.getProvider(Yh).getImmediate();return{logEvent:(r,i,o)=>gC(n,r,i,o)}}catch(n){throw zn.create("interop-component-reg-failed",{reason:n})}}}ER();const CR={apiKey:"AIzaSyCkDKk-NgLyyLpC0FZAjPyo-ko9iQeNxGA",authDomain:"abdoalatrash-portfolio.firebaseapp.com",projectId:"abdoalatrash-portfolio",storageBucket:"abdoalatrash-portfolio.appspot.com",messagingSenderId:"316799589093",appId:"1:316799589093:web:15b0109aaafb2cd0fc79e8",measurementId:"G-S17NCCB8K8"},Vf=RS(CR),Ru=BP(Vf),ut=NN(Vf),nl=r9(Vf),TR=SR(Vf),yC=new ks,vC=O.createContext(void 0),_R=({children:t})=>{const e=localStorage.getItem("theme"),n=window.matchMedia("(prefers-color-scheme: dark)").matches,r=e||(n?"dark":"light"),[i,o]=O.useState(r);O.useEffect(()=>{document.documentElement.setAttribute("data-theme",i),localStorage.setItem("theme",i)},[i]);const l=()=>{o(d=>d==="light"?"dark":"light")};return m.jsx(vC.Provider,{value:{theme:i,toggleTheme:l},children:t})},Rv=()=>{const t=O.useContext(vC);if(t===void 0)throw new Error("useTheme must be used within a ThemeProvider");return t};var cn=function(){return cn=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},cn.apply(this,arguments)};function Xu(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,o;r<i;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return t.concat(o||Array.prototype.slice.call(e))}var it="-ms-",Lu="-moz-",Ye="-webkit-",bC="comm",Bf="rule",Lv="decl",IR="@import",wC="@keyframes",PR="@layer",xC=Math.abs,Ov=String.fromCharCode,ty=Object.assign;function AR(t,e){return Ht(t,0)^45?(((e<<2^Ht(t,0))<<2^Ht(t,1))<<2^Ht(t,2))<<2^Ht(t,3):0}function SC(t){return t.trim()}function Ss(t,e){return(t=e.exec(t))?t[0]:t}function Me(t,e,n){return t.replace(e,n)}function Sh(t,e,n){return t.indexOf(e,n)}function Ht(t,e){return t.charCodeAt(e)|0}function rl(t,e,n){return t.slice(e,n)}function Gr(t){return t.length}function kC(t){return t.length}function Cu(t,e){return e.push(t),t}function jR(t,e){return t.map(e).join("")}function cx(t,e){return t.filter(function(n){return!Ss(n,e)})}var zf=1,sl=1,EC=0,hr=0,Pt=0,gl="";function $f(t,e,n,r,i,o,l,d){return{value:t,root:e,parent:n,type:r,props:i,children:o,line:zf,column:sl,length:l,return:"",siblings:d}}function oi(t,e){return ty($f("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function No(t){for(;t.root;)t=oi(t.root,{children:[t]});Cu(t,t.siblings)}function NR(){return Pt}function DR(){return Pt=hr>0?Ht(gl,--hr):0,sl--,Pt===10&&(sl=1,zf--),Pt}function Dr(){return Pt=hr<EC?Ht(gl,hr++):0,sl++,Pt===10&&(sl=1,zf++),Pt}function Sa(){return Ht(gl,hr)}function kh(){return hr}function qf(t,e){return rl(gl,t,e)}function ny(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function RR(t){return zf=sl=1,EC=Gr(gl=t),hr=0,[]}function LR(t){return gl="",t}function qm(t){return SC(qf(hr-1,ry(t===91?t+2:t===40?t+1:t)))}function OR(t){for(;(Pt=Sa())&&Pt<33;)Dr();return ny(t)>2||ny(Pt)>3?"":" "}function MR(t,e){for(;--e&&Dr()&&!(Pt<48||Pt>102||Pt>57&&Pt<65||Pt>70&&Pt<97););return qf(t,kh()+(e<6&&Sa()==32&&Dr()==32))}function ry(t){for(;Dr();)switch(Pt){case t:return hr;case 34:case 39:t!==34&&t!==39&&ry(Pt);break;case 40:t===41&&ry(t);break;case 92:Dr();break}return hr}function FR(t,e){for(;Dr()&&t+Pt!==57&&!(t+Pt===84&&Sa()===47););return"/*"+qf(e,hr-1)+"*"+Ov(t===47?t:Dr())}function UR(t){for(;!ny(Sa());)Dr();return qf(t,hr)}function VR(t){return LR(Eh("",null,null,null,[""],t=RR(t),0,[0],t))}function Eh(t,e,n,r,i,o,l,d,f){for(var p=0,y=0,w=l,S=0,E=0,C=0,N=1,I=1,B=1,M=0,$="",L=i,W=o,Z=r,P=$;I;)switch(C=M,M=Dr()){case 40:if(C!=108&&Ht(P,w-1)==58){Sh(P+=Me(qm(M),"&","&\f"),"&\f",xC(p?d[p-1]:0))!=-1&&(B=-1);break}case 34:case 39:case 91:P+=qm(M);break;case 9:case 10:case 13:case 32:P+=OR(C);break;case 92:P+=MR(kh()-1,7);continue;case 47:switch(Sa()){case 42:case 47:Cu(BR(FR(Dr(),kh()),e,n,f),f);break;default:P+="/"}break;case 123*N:d[p++]=Gr(P)*B;case 125*N:case 59:case 0:switch(M){case 0:case 125:I=0;case 59+y:B==-1&&(P=Me(P,/\f/g,"")),E>0&&Gr(P)-w&&Cu(E>32?hx(P+";",r,n,w-1,f):hx(Me(P," ","")+";",r,n,w-2,f),f);break;case 59:P+=";";default:if(Cu(Z=dx(P,e,n,p,y,i,d,$,L=[],W=[],w,o),o),M===123)if(y===0)Eh(P,e,Z,Z,L,o,w,d,W);else switch(S===99&&Ht(P,3)===110?100:S){case 100:case 108:case 109:case 115:Eh(t,Z,Z,r&&Cu(dx(t,Z,Z,0,0,i,d,$,i,L=[],w,W),W),i,W,w,d,r?L:W);break;default:Eh(P,Z,Z,Z,[""],W,0,d,W)}}p=y=E=0,N=B=1,$=P="",w=l;break;case 58:w=1+Gr(P),E=C;default:if(N<1){if(M==123)--N;else if(M==125&&N++==0&&DR()==125)continue}switch(P+=Ov(M),M*N){case 38:B=y>0?1:(P+="\f",-1);break;case 44:d[p++]=(Gr(P)-1)*B,B=1;break;case 64:Sa()===45&&(P+=qm(Dr())),S=Sa(),y=w=Gr($=P+=UR(kh())),M++;break;case 45:C===45&&Gr(P)==2&&(N=0)}}return o}function dx(t,e,n,r,i,o,l,d,f,p,y,w){for(var S=i-1,E=i===0?o:[""],C=kC(E),N=0,I=0,B=0;N<r;++N)for(var M=0,$=rl(t,S+1,S=xC(I=l[N])),L=t;M<C;++M)(L=SC(I>0?E[M]+" "+$:Me($,/&\f/g,E[M])))&&(f[B++]=L);return $f(t,e,n,i===0?Bf:d,f,p,y,w)}function BR(t,e,n,r){return $f(t,e,n,bC,Ov(NR()),rl(t,2,-2),0,r)}function hx(t,e,n,r,i){return $f(t,e,n,Lv,rl(t,0,r),rl(t,r+1,-1),r,i)}function CC(t,e,n){switch(AR(t,e)){case 5103:return Ye+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ye+t+t;case 4789:return Lu+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Ye+t+Lu+t+it+t+t;case 5936:switch(Ht(t,e+11)){case 114:return Ye+t+it+Me(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Ye+t+it+Me(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Ye+t+it+Me(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return Ye+t+it+t+t;case 6165:return Ye+t+it+"flex-"+t+t;case 5187:return Ye+t+Me(t,/(\w+).+(:[^]+)/,Ye+"box-$1$2"+it+"flex-$1$2")+t;case 5443:return Ye+t+it+"flex-item-"+Me(t,/flex-|-self/g,"")+(Ss(t,/flex-|baseline/)?"":it+"grid-row-"+Me(t,/flex-|-self/g,""))+t;case 4675:return Ye+t+it+"flex-line-pack"+Me(t,/align-content|flex-|-self/g,"")+t;case 5548:return Ye+t+it+Me(t,"shrink","negative")+t;case 5292:return Ye+t+it+Me(t,"basis","preferred-size")+t;case 6060:return Ye+"box-"+Me(t,"-grow","")+Ye+t+it+Me(t,"grow","positive")+t;case 4554:return Ye+Me(t,/([^-])(transform)/g,"$1"+Ye+"$2")+t;case 6187:return Me(Me(Me(t,/(zoom-|grab)/,Ye+"$1"),/(image-set)/,Ye+"$1"),t,"")+t;case 5495:case 3959:return Me(t,/(image-set\([^]*)/,Ye+"$1$`$1");case 4968:return Me(Me(t,/(.+:)(flex-)?(.*)/,Ye+"box-pack:$3"+it+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ye+t+t;case 4200:if(!Ss(t,/flex-|baseline/))return it+"grid-column-align"+rl(t,e)+t;break;case 2592:case 3360:return it+Me(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,Ss(r.props,/grid-\w+-end/)})?~Sh(t+(n=n[e].value),"span",0)?t:it+Me(t,"-start","")+t+it+"grid-row-span:"+(~Sh(n,"span",0)?Ss(n,/\d+/):+Ss(n,/\d+/)-+Ss(t,/\d+/))+";":it+Me(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return Ss(r.props,/grid-\w+-start/)})?t:it+Me(Me(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return Me(t,/(.+)-inline(.+)/,Ye+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Gr(t)-1-e>6)switch(Ht(t,e+1)){case 109:if(Ht(t,e+4)!==45)break;case 102:return Me(t,/(.+:)(.+)-([^]+)/,"$1"+Ye+"$2-$3$1"+Lu+(Ht(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Sh(t,"stretch",0)?CC(Me(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return Me(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,l,d,f,p){return it+i+":"+o+p+(l?it+i+"-span:"+(d?f:+f-+o)+p:"")+t});case 4949:if(Ht(t,e+6)===121)return Me(t,":",":"+Ye)+t;break;case 6444:switch(Ht(t,Ht(t,14)===45?18:11)){case 120:return Me(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ye+(Ht(t,14)===45?"inline-":"")+"box$3$1"+Ye+"$2$3$1"+it+"$2box$3")+t;case 100:return Me(t,":",":"+it)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Me(t,"scroll-","scroll-snap-")+t}return t}function Jh(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function zR(t,e,n,r){switch(t.type){case PR:if(t.children.length)break;case IR:case Lv:return t.return=t.return||t.value;case bC:return"";case wC:return t.return=t.value+"{"+Jh(t.children,r)+"}";case Bf:if(!Gr(t.value=t.props.join(",")))return""}return Gr(n=Jh(t.children,r))?t.return=t.value+"{"+n+"}":""}function $R(t){var e=kC(t);return function(n,r,i,o){for(var l="",d=0;d<e;d++)l+=t[d](n,r,i,o)||"";return l}}function qR(t){return function(e){e.root||(e=e.return)&&t(e)}}function HR(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case Lv:t.return=CC(t.value,t.length,n);return;case wC:return Jh([oi(t,{value:Me(t.value,"@","@"+Ye)})],r);case Bf:if(t.length)return jR(n=t.props,function(i){switch(Ss(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":No(oi(t,{props:[Me(i,/:(read-\w+)/,":"+Lu+"$1")]})),No(oi(t,{props:[i]})),ty(t,{props:cx(n,r)});break;case"::placeholder":No(oi(t,{props:[Me(i,/:(plac\w+)/,":"+Ye+"input-$1")]})),No(oi(t,{props:[Me(i,/:(plac\w+)/,":"+Lu+"$1")]})),No(oi(t,{props:[Me(i,/:(plac\w+)/,it+"input-$1")]})),No(oi(t,{props:[i]})),ty(t,{props:cx(n,r)});break}return""})}}var WR={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Un={},il=typeof process<"u"&&Un!==void 0&&(Un.REACT_APP_SC_ATTR||Un.SC_ATTR)||"data-styled",TC="active",_C="data-styled-version",Hf="6.1.18",Mv=`/*!sc*/
`,Xh=typeof window<"u"&&typeof document<"u",GR=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Un!==void 0&&Un.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Un.REACT_APP_SC_DISABLE_SPEEDY!==""?Un.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Un.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Un!==void 0&&Un.SC_DISABLE_SPEEDY!==void 0&&Un.SC_DISABLE_SPEEDY!==""&&Un.SC_DISABLE_SPEEDY!=="false"&&Un.SC_DISABLE_SPEEDY),KR={},Wf=Object.freeze([]),al=Object.freeze({});function IC(t,e,n){return n===void 0&&(n=al),t.theme!==n.theme&&t.theme||e||n.theme}var PC=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),QR=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,YR=/(^-|-$)/g;function fx(t){return t.replace(QR,"-").replace(YR,"")}var JR=/(a)(d)/gi,Hd=52,px=function(t){return String.fromCharCode(t+(t>25?39:97))};function sy(t){var e,n="";for(e=Math.abs(t);e>Hd;e=e/Hd|0)n=px(e%Hd)+n;return(px(e%Hd)+n).replace(JR,"$1-$2")}var Hm,AC=5381,Mo=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},jC=function(t){return Mo(AC,t)};function NC(t){return sy(jC(t)>>>0)}function XR(t){return t.displayName||t.name||"Component"}function Wm(t){return typeof t=="string"&&!0}var DC=typeof Symbol=="function"&&Symbol.for,RC=DC?Symbol.for("react.memo"):60115,ZR=DC?Symbol.for("react.forward_ref"):60112,eL={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},tL={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},LC={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},nL=((Hm={})[ZR]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Hm[RC]=LC,Hm);function mx(t){return("type"in(e=t)&&e.type.$$typeof)===RC?LC:"$$typeof"in t?nL[t.$$typeof]:eL;var e}var rL=Object.defineProperty,sL=Object.getOwnPropertyNames,gx=Object.getOwnPropertySymbols,iL=Object.getOwnPropertyDescriptor,aL=Object.getPrototypeOf,yx=Object.prototype;function OC(t,e,n){if(typeof e!="string"){if(yx){var r=aL(e);r&&r!==yx&&OC(t,r,n)}var i=sL(e);gx&&(i=i.concat(gx(e)));for(var o=mx(t),l=mx(e),d=0;d<i.length;++d){var f=i[d];if(!(f in tL||n&&n[f]||l&&f in l||o&&f in o)){var p=iL(e,f);try{rL(t,f,p)}catch{}}}}return t}function ol(t){return typeof t=="function"}function Fv(t){return typeof t=="object"&&"styledComponentId"in t}function va(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function iy(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=t[r];return n}function Zu(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function ay(t,e,n){if(n===void 0&&(n=!1),!n&&!Zu(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=ay(t[r],e[r]);else if(Zu(e))for(var r in e)t[r]=ay(t[r],e[r]);return t}function Uv(t,e){Object.defineProperty(t,"toString",{value:e})}function gc(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var oL=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;e>=o;)if((o<<=1)<0)throw gc(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var l=i;l<o;l++)this.groupSizes[l]=0}for(var d=this.indexOfGroup(e+1),f=(l=0,n.length);l<f;l++)this.tag.insertRule(d,n[l])&&(this.groupSizes[e]++,d++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),o=i+r,l=i;l<o;l++)n+="".concat(this.tag.getRule(l)).concat(Mv);return n},t}(),Ch=new Map,Zh=new Map,Th=1,Wd=function(t){if(Ch.has(t))return Ch.get(t);for(;Zh.has(Th);)Th++;var e=Th++;return Ch.set(t,e),Zh.set(e,t),e},lL=function(t,e){Th=e+1,Ch.set(t,e),Zh.set(e,t)},uL="style[".concat(il,"][").concat(_C,'="').concat(Hf,'"]'),cL=new RegExp("^".concat(il,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),dL=function(t,e,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&t.registerName(e,r)},hL=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(Mv),i=[],o=0,l=r.length;o<l;o++){var d=r[o].trim();if(d){var f=d.match(cL);if(f){var p=0|parseInt(f[1],10),y=f[2];p!==0&&(lL(y,p),dL(t,y,f[3]),t.getTag().insertRules(p,i)),i.length=0}else i.push(d)}}},vx=function(t){for(var e=document.querySelectorAll(uL),n=0,r=e.length;n<r;n++){var i=e[n];i&&i.getAttribute(il)!==TC&&(hL(t,i),i.parentNode&&i.parentNode.removeChild(i))}};function fL(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var MC=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(d){var f=Array.from(d.querySelectorAll("style[".concat(il,"]")));return f[f.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(il,TC),r.setAttribute(_C,Hf);var l=fL();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},pL=function(){function t(e){this.element=MC(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var l=r[i];if(l.ownerNode===n)return l}throw gc(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),mL=function(){function t(e){this.element=MC(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),gL=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),bx=Xh,yL={isServer:!Xh,useCSSOMInjection:!GR},ef=function(){function t(e,n,r){e===void 0&&(e=al),n===void 0&&(n={});var i=this;this.options=cn(cn({},yL),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Xh&&bx&&(bx=!1,vx(this)),Uv(this,function(){return function(o){for(var l=o.getTag(),d=l.length,f="",p=function(w){var S=function(B){return Zh.get(B)}(w);if(S===void 0)return"continue";var E=o.names.get(S),C=l.getGroup(w);if(E===void 0||!E.size||C.length===0)return"continue";var N="".concat(il,".g").concat(w,'[id="').concat(S,'"]'),I="";E!==void 0&&E.forEach(function(B){B.length>0&&(I+="".concat(B,","))}),f+="".concat(C).concat(N,'{content:"').concat(I,'"}').concat(Mv)},y=0;y<d;y++)p(y);return f}(i)})}return t.registerId=function(e){return Wd(e)},t.prototype.rehydrate=function(){!this.server&&Xh&&vx(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(cn(cn({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new gL(i):r?new pL(i):new mL(i)}(this.options),new oL(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(Wd(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(Wd(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Wd(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),vL=/&/g,bL=/^\s*\/\/.*$/gm;function FC(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=FC(n.children,e)),n})}function wL(t){var e,n,r,i=al,o=i.options,l=o===void 0?al:o,d=i.plugins,f=d===void 0?Wf:d,p=function(S,E,C){return C.startsWith(n)&&C.endsWith(n)&&C.replaceAll(n,"").length>0?".".concat(e):S},y=f.slice();y.push(function(S){S.type===Bf&&S.value.includes("&")&&(S.props[0]=S.props[0].replace(vL,n).replace(r,p))}),l.prefix&&y.push(HR),y.push(zR);var w=function(S,E,C,N){E===void 0&&(E=""),C===void 0&&(C=""),N===void 0&&(N="&"),e=N,n=E,r=new RegExp("\\".concat(n,"\\b"),"g");var I=S.replace(bL,""),B=VR(C||E?"".concat(C," ").concat(E," { ").concat(I," }"):I);l.namespace&&(B=FC(B,l.namespace));var M=[];return Jh(B,$R(y.concat(qR(function($){return M.push($)})))),M};return w.hash=f.length?f.reduce(function(S,E){return E.name||gc(15),Mo(S,E.name)},AC).toString():"",w}var xL=new ef,oy=wL(),UC=Fe.createContext({shouldForwardProp:void 0,styleSheet:xL,stylis:oy});UC.Consumer;Fe.createContext(void 0);function ly(){return O.useContext(UC)}var SL=function(){function t(e,n){var r=this;this.inject=function(i,o){o===void 0&&(o=oy);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Uv(this,function(){throw gc(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=oy),this.name+e.hash},t}(),kL=function(t){return t>="A"&&t<="Z"};function wx(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;kL(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var VC=function(t){return t==null||t===!1||t===""},BC=function(t){var e,n,r=[];for(var i in t){var o=t[i];t.hasOwnProperty(i)&&!VC(o)&&(Array.isArray(o)&&o.isCss||ol(o)?r.push("".concat(wx(i),":"),o,";"):Zu(o)?r.push.apply(r,Xu(Xu(["".concat(i," {")],BC(o),!1),["}"],!1)):r.push("".concat(wx(i),": ").concat((e=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in WR||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Si(t,e,n,r){if(VC(t))return[];if(Fv(t))return[".".concat(t.styledComponentId)];if(ol(t)){if(!ol(o=t)||o.prototype&&o.prototype.isReactComponent||!e)return[t];var i=t(e);return Si(i,e,n,r)}var o;return t instanceof SL?n?(t.inject(n,r),[t.getName(r)]):[t]:Zu(t)?BC(t):Array.isArray(t)?Array.prototype.concat.apply(Wf,t.map(function(l){return Si(l,e,n,r)})):[t.toString()]}function zC(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(ol(n)&&!Fv(n))return!1}return!0}var EL=jC(Hf),CL=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&zC(e),this.componentId=n,this.baseHash=Mo(EL,n),this.baseStyle=r,ef.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=va(i,this.staticRulesId);else{var o=iy(Si(this.rules,e,n,r)),l=sy(Mo(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,l)){var d=r(o,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,d)}i=va(i,l),this.staticRulesId=l}else{for(var f=Mo(this.baseHash,r.hash),p="",y=0;y<this.rules.length;y++){var w=this.rules[y];if(typeof w=="string")p+=w;else if(w){var S=iy(Si(w,e,n,r));f=Mo(f,S+y),p+=S}}if(p){var E=sy(f>>>0);n.hasNameForId(this.componentId,E)||n.insertRules(this.componentId,E,r(p,".".concat(E),void 0,this.componentId)),i=va(i,E)}}return i},t}(),Vv=Fe.createContext(void 0);Vv.Consumer;var Gm={};function TL(t,e,n){var r=Fv(t),i=t,o=!Wm(t),l=e.attrs,d=l===void 0?Wf:l,f=e.componentId,p=f===void 0?function(L,W){var Z=typeof L!="string"?"sc":fx(L);Gm[Z]=(Gm[Z]||0)+1;var P="".concat(Z,"-").concat(NC(Hf+Z+Gm[Z]));return W?"".concat(W,"-").concat(P):P}(e.displayName,e.parentComponentId):f,y=e.displayName,w=y===void 0?function(L){return Wm(L)?"styled.".concat(L):"Styled(".concat(XR(L),")")}(t):y,S=e.displayName&&e.componentId?"".concat(fx(e.displayName),"-").concat(e.componentId):e.componentId||p,E=r&&i.attrs?i.attrs.concat(d).filter(Boolean):d,C=e.shouldForwardProp;if(r&&i.shouldForwardProp){var N=i.shouldForwardProp;if(e.shouldForwardProp){var I=e.shouldForwardProp;C=function(L,W){return N(L,W)&&I(L,W)}}else C=N}var B=new CL(n,S,r?i.componentStyle:void 0);function M(L,W){return function(Z,P,_){var A=Z.attrs,F=Z.componentStyle,z=Z.defaultProps,H=Z.foldedComponentIds,D=Z.styledComponentId,ve=Z.target,Oe=Fe.useContext(Vv),Ue=ly(),Ae=Z.shouldForwardProp||Ue.shouldForwardProp,ae=IC(P,Oe,z)||al,de=function(ce,we,Ce){for(var Te,je=cn(cn({},we),{className:void 0,theme:Ce}),qe=0;qe<ce.length;qe+=1){var De=ol(Te=ce[qe])?Te(je):Te;for(var Ct in De)je[Ct]=Ct==="className"?va(je[Ct],De[Ct]):Ct==="style"?cn(cn({},je[Ct]),De[Ct]):De[Ct]}return we.className&&(je.className=va(je.className,we.className)),je}(A,P,ae),Y=de.as||ve,j={};for(var Q in de)de[Q]===void 0||Q[0]==="$"||Q==="as"||Q==="theme"&&de.theme===ae||(Q==="forwardedAs"?j.as=de.forwardedAs:Ae&&!Ae(Q,Y)||(j[Q]=de[Q]));var oe=function(ce,we){var Ce=ly(),Te=ce.generateAndInjectStyles(we,Ce.styleSheet,Ce.stylis);return Te}(F,de),fe=va(H,D);return oe&&(fe+=" "+oe),de.className&&(fe+=" "+de.className),j[Wm(Y)&&!PC.has(Y)?"class":"className"]=fe,_&&(j.ref=_),O.createElement(Y,j)}($,L,W)}M.displayName=w;var $=Fe.forwardRef(M);return $.attrs=E,$.componentStyle=B,$.displayName=w,$.shouldForwardProp=C,$.foldedComponentIds=r?va(i.foldedComponentIds,i.styledComponentId):"",$.styledComponentId=S,$.target=r?i.target:t,Object.defineProperty($,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(L){this._foldedDefaultProps=r?function(W){for(var Z=[],P=1;P<arguments.length;P++)Z[P-1]=arguments[P];for(var _=0,A=Z;_<A.length;_++)ay(W,A[_],!0);return W}({},i.defaultProps,L):L}}),Uv($,function(){return".".concat($.styledComponentId)}),o&&OC($,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),$}function xx(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var Sx=function(t){return Object.assign(t,{isCss:!0})};function $C(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(ol(t)||Zu(t))return Sx(Si(xx(Wf,Xu([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?Si(r):Sx(Si(xx(r,e)))}function uy(t,e,n){if(n===void 0&&(n=al),!e)throw gc(1,e);var r=function(i){for(var o=[],l=1;l<arguments.length;l++)o[l-1]=arguments[l];return t(e,n,$C.apply(void 0,Xu([i],o,!1)))};return r.attrs=function(i){return uy(t,e,cn(cn({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return uy(t,e,cn(cn({},n),i))},r}var qC=function(t){return uy(TL,t)},U=qC;PC.forEach(function(t){U[t]=qC(t)});var _L=function(){function t(e,n){this.rules=e,this.componentId=n,this.isStatic=zC(e),ef.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,n,r,i){var o=i(iy(Si(this.rules,n,r,i)),""),l=this.componentId+e;r.insertRules(l,l,o)},t.prototype.removeStyles=function(e,n){n.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,n,r,i){e>2&&ef.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,n,r,i)},t}();function IL(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=$C.apply(void 0,Xu([t],e,!1)),i="sc-global-".concat(NC(JSON.stringify(r))),o=new _L(r,i),l=function(f){var p=ly(),y=Fe.useContext(Vv),w=Fe.useRef(p.styleSheet.allocateGSInstance(i)).current;return p.styleSheet.server&&d(w,f,p.styleSheet,y,p.stylis),Fe.useLayoutEffect(function(){if(!p.styleSheet.server)return d(w,f,p.styleSheet,y,p.stylis),function(){return o.removeStyles(w,p.styleSheet)}},[w,f,p.styleSheet,y,p.stylis]),null};function d(f,p,y,w,S){if(o.isStatic)o.renderStyles(f,KR,y,S);else{var E=cn(cn({},p),{theme:IC(p,w,l.defaultProps)});o.renderStyles(f,E,y,S)}}return Fe.memo(l)}var HC={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},kx=Fe.createContext&&Fe.createContext(HC),ki=function(){return ki=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},ki.apply(this,arguments)},PL=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function WC(t){return t&&t.map(function(e,n){return Fe.createElement(e.tag,ki({key:n},e.attr),WC(e.child))})}function dt(t){return function(e){return Fe.createElement(AL,ki({attr:ki({},t.attr)},e),WC(t.child))}}function AL(t){var e=function(n){var r=t.attr,i=t.size,o=t.title,l=PL(t,["attr","size","title"]),d=i||n.size||"1em",f;return n.className&&(f=n.className),t.className&&(f=(f?f+" ":"")+t.className),Fe.createElement("svg",ki({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:f,style:ki(ki({color:t.color||n.color},n.style),t.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),o&&Fe.createElement("title",null,o),t.children)};return kx!==void 0?Fe.createElement(kx.Consumer,null,function(n){return e(n)}):e(HC)}function Bv(t){return dt({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}}]})(t)}function GC(t){return dt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"}}]})(t)}function jL(t){return dt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 32v448h448V32H0zm262.2 334.4c-6.6 3-33.2 6-50-14.2-9.2-10.6-25.3-33.3-42.2-63.6-8.9 0-14.7 0-21.4-.6v46.4c0 23.5 6 21.2 25.8 23.9v8.1c-6.9-.3-23.1-.8-35.6-.8-13.1 0-26.1.6-33.6.8v-8.1c15.5-2.9 22-1.3 22-23.9V225c0-22.6-6.4-21-22-23.9V193c25.8 1 53.1-.6 70.9-.6 31.7 0 55.9 14.4 55.9 45.6 0 21.1-16.7 42.2-39.2 47.5 13.6 24.2 30 45.6 42.2 58.9 7.2 7.8 17.2 14.7 27.2 14.7v7.3zm22.9-135c-23.3 0-32.2-15.7-32.2-32.2V167c0-12.2 8.8-30.4 34-30.4s30.4 17.9 30.4 17.9l-10.7 7.2s-5.5-12.5-19.7-12.5c-7.9 0-19.7 7.3-19.7 19.7v26.8c0 13.4 6.6 23.3 17.9 23.3 14.1 0 21.5-10.9 21.5-26.8h-17.9v-10.7h30.4c0 20.5 4.7 49.9-34 49.9zm-116.5 44.7c-9.4 0-13.6-.3-20-.8v-69.7c6.4-.6 15-.6 22.5-.6 23.3 0 37.2 12.2 37.2 34.5 0 21.9-15 36.6-39.7 36.6z"}}]})(t)}function NL(t){return dt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}}]})(t)}function KC(t){return dt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"}}]})(t)}function Ex(t){return dt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"}}]})(t)}function QC(t){return dt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"}}]})(t)}function Cx(t){return dt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z"}}]})(t)}function DL(t){return dt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"}}]})(t)}function RL(t){return dt({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M512.1 191l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0L552 6.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zm-10.5-58.8c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.7-82.4 14.3-52.8 52.8zM386.3 286.1l33.7 16.8c10.1 5.8 14.5 18.1 10.5 29.1-8.9 24.2-26.4 46.4-42.6 65.8-7.4 8.9-20.2 11.1-30.3 5.3l-29.1-16.8c-16 13.7-34.6 24.6-54.9 31.7v33.6c0 11.6-8.3 21.6-19.7 23.6-24.6 4.2-50.4 4.4-75.9 0-11.5-2-20-11.9-20-23.6V418c-20.3-7.2-38.9-18-54.9-31.7L74 403c-10 5.8-22.9 3.6-30.3-5.3-16.2-19.4-33.3-41.6-42.2-65.7-4-10.9.4-23.2 10.5-29.1l33.3-16.8c-3.9-20.9-3.9-42.4 0-63.4L12 205.8c-10.1-5.8-14.6-18.1-10.5-29 8.9-24.2 26-46.4 42.2-65.8 7.4-8.9 20.2-11.1 30.3-5.3l29.1 16.8c16-13.7 34.6-24.6 54.9-31.7V57.1c0-11.5 8.2-21.5 19.6-23.5 24.6-4.2 50.5-4.4 76-.1 11.5 2 20 11.9 20 23.6v33.6c20.3 7.2 38.9 18 54.9 31.7l29.1-16.8c10-5.8 22.9-3.6 30.3 5.3 16.2 19.4 33.2 41.6 42.1 65.8 4 10.9.1 23.2-10 29.1l-33.7 16.8c3.9 21 3.9 42.5 0 63.5zm-117.6 21.1c59.2-77-28.7-164.9-105.7-105.7-59.2 77 28.7 164.9 105.7 105.7zm243.4 182.7l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0l8.2-14.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zM501.6 431c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.6-82.4 14.3-52.8 52.8z"}}]})(t)}function YC(t){return dt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"}}]})(t)}function LL(t){return dt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M437.2 403.5L320 215V64h8c13.3 0 24-10.7 24-24V24c0-13.3-10.7-24-24-24H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h8v151L10.8 403.5C-18.5 450.6 15.3 512 70.9 512h306.2c55.7 0 89.4-61.5 60.1-108.5zM137.9 320l48.2-77.6c3.7-5.2 5.8-11.6 5.8-18.4V64h64v160c0 6.9 2.2 13.2 5.8 18.4l48.2 77.6h-172z"}}]})(t)}function OL(t){return dt({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"}}]})(t)}function ML(t){return dt({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"}}]})(t)}function FL(t){return dt({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"}}]})(t)}function UL(t){return dt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}}]})(t)}function VL(t){return dt({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"}}]})(t)}function JC(t){return dt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"}}]})(t)}function BL(t){return dt({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M552 64H88c-13.255 0-24 10.745-24 24v8H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h472c26.51 0 48-21.49 48-48V88c0-13.255-10.745-24-24-24zM56 400a8 8 0 0 1-8-8V144h16v248a8 8 0 0 1-8 8zm236-16H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm-208-96H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm0-96H140c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h360c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12z"}}]})(t)}function zL(t){return dt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"}}]})(t)}function $L(t){return dt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"}}]})(t)}function qL(t){return dt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"}}]})(t)}function XC(t){return dt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"}}]})(t)}function HL(t){return dt({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}}]})(t)}const ZC=O.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"}),Gf=O.createContext({}),Kf=O.createContext(null),Qf=typeof document<"u",zv=Qf?O.useLayoutEffect:O.useEffect,e4=O.createContext({strict:!1}),$v=t=>t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),WL="framerAppearId",t4="data-"+$v(WL);function GL(t,e,n,r){const{visualElement:i}=O.useContext(Gf),o=O.useContext(e4),l=O.useContext(Kf),d=O.useContext(ZC).reducedMotion,f=O.useRef();r=r||o.renderer,!f.current&&r&&(f.current=r(t,{visualState:e,parent:i,props:n,presenceContext:l,blockInitialAnimation:l?l.initial===!1:!1,reducedMotionConfig:d}));const p=f.current;O.useInsertionEffect(()=>{p&&p.update(n,l)});const y=O.useRef(!!(n[t4]&&!window.HandoffComplete));return zv(()=>{p&&(p.render(),y.current&&p.animationState&&p.animationState.animateChanges())}),O.useEffect(()=>{p&&(p.updateFeatures(),!y.current&&p.animationState&&p.animationState.animateChanges(),y.current&&(y.current=!1,window.HandoffComplete=!0))}),p}function Fo(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function KL(t,e,n){return O.useCallback(r=>{r&&t.mount&&t.mount(r),e&&(r?e.mount(r):e.unmount()),n&&(typeof n=="function"?n(r):Fo(n)&&(n.current=r))},[e])}function ec(t){return typeof t=="string"||Array.isArray(t)}function Yf(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const qv=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Hv=["initial",...qv];function Jf(t){return Yf(t.animate)||Hv.some(e=>ec(t[e]))}function n4(t){return!!(Jf(t)||t.variants)}function QL(t,e){if(Jf(t)){const{initial:n,animate:r}=t;return{initial:n===!1||ec(n)?n:void 0,animate:ec(r)?r:void 0}}return t.inherit!==!1?e:{}}function YL(t){const{initial:e,animate:n}=QL(t,O.useContext(Gf));return O.useMemo(()=>({initial:e,animate:n}),[Tx(e),Tx(n)])}function Tx(t){return Array.isArray(t)?t.join(" "):t}const _x={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},tc={};for(const t in _x)tc[t]={isEnabled:e=>_x[t].some(n=>!!e[n])};function JL(t){for(const e in t)tc[e]={...tc[e],...t[e]}}const Wv=O.createContext({}),r4=O.createContext({}),XL=Symbol.for("motionComponentSymbol");function ZL({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:r,Component:i}){t&&JL(t);function o(d,f){let p;const y={...O.useContext(ZC),...d,layoutId:eO(d)},{isStatic:w}=y,S=YL(d),E=r(d,w);if(!w&&Qf){S.visualElement=GL(i,E,y,e);const C=O.useContext(r4),N=O.useContext(e4).strict;S.visualElement&&(p=S.visualElement.loadFeatures(y,N,t,C))}return O.createElement(Gf.Provider,{value:S},p&&S.visualElement?O.createElement(p,{visualElement:S.visualElement,...y}):null,n(i,d,KL(E,S.visualElement,f),E,w,S.visualElement))}const l=O.forwardRef(o);return l[XL]=i,l}function eO({layoutId:t}){const e=O.useContext(Wv).id;return e&&t!==void 0?e+"-"+t:t}function tO(t){function e(r,i={}){return ZL(t(r,i))}if(typeof Proxy>"u")return e;const n=new Map;return new Proxy(e,{get:(r,i)=>(n.has(i)||n.set(i,e(i)),n.get(i))})}const nO=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Gv(t){return typeof t!="string"||t.includes("-")?!1:!!(nO.indexOf(t)>-1||/[A-Z]/.test(t))}const tf={};function rO(t){Object.assign(tf,t)}const yc=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Fa=new Set(yc);function s4(t,{layout:e,layoutId:n}){return Fa.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!tf[t]||t==="opacity")}const jn=t=>!!(t&&t.getVelocity),sO={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},iO=yc.length;function aO(t,{enableHardwareAcceleration:e=!0,allowTransformNone:n=!0},r,i){let o="";for(let l=0;l<iO;l++){const d=yc[l];if(t[d]!==void 0){const f=sO[d]||d;o+=`${f}(${t[d]}) `}}return e&&!t.z&&(o+="translateZ(0)"),o=o.trim(),i?o=i(t,r?"":o):n&&r&&(o="none"),o}const i4=t=>e=>typeof e=="string"&&e.startsWith(t),a4=i4("--"),cy=i4("var(--"),oO=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,lO=(t,e)=>e&&typeof t=="number"?e.transform(t):t,Ii=(t,e,n)=>Math.min(Math.max(n,t),e),Ua={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Ou={...Ua,transform:t=>Ii(0,1,t)},Gd={...Ua,default:1},Mu=t=>Math.round(t*1e5)/1e5,Xf=/(-)?([\d]*\.?[\d])+/g,o4=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,uO=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function vc(t){return typeof t=="string"}const bc=t=>({test:e=>vc(e)&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),li=bc("deg"),es=bc("%"),_e=bc("px"),cO=bc("vh"),dO=bc("vw"),Ix={...es,parse:t=>es.parse(t)/100,transform:t=>es.transform(t*100)},Px={...Ua,transform:Math.round},l4={borderWidth:_e,borderTopWidth:_e,borderRightWidth:_e,borderBottomWidth:_e,borderLeftWidth:_e,borderRadius:_e,radius:_e,borderTopLeftRadius:_e,borderTopRightRadius:_e,borderBottomRightRadius:_e,borderBottomLeftRadius:_e,width:_e,maxWidth:_e,height:_e,maxHeight:_e,size:_e,top:_e,right:_e,bottom:_e,left:_e,padding:_e,paddingTop:_e,paddingRight:_e,paddingBottom:_e,paddingLeft:_e,margin:_e,marginTop:_e,marginRight:_e,marginBottom:_e,marginLeft:_e,rotate:li,rotateX:li,rotateY:li,rotateZ:li,scale:Gd,scaleX:Gd,scaleY:Gd,scaleZ:Gd,skew:li,skewX:li,skewY:li,distance:_e,translateX:_e,translateY:_e,translateZ:_e,x:_e,y:_e,z:_e,perspective:_e,transformPerspective:_e,opacity:Ou,originX:Ix,originY:Ix,originZ:_e,zIndex:Px,fillOpacity:Ou,strokeOpacity:Ou,numOctaves:Px};function Kv(t,e,n,r){const{style:i,vars:o,transform:l,transformOrigin:d}=t;let f=!1,p=!1,y=!0;for(const w in e){const S=e[w];if(a4(w)){o[w]=S;continue}const E=l4[w],C=lO(S,E);if(Fa.has(w)){if(f=!0,l[w]=C,!y)continue;S!==(E.default||0)&&(y=!1)}else w.startsWith("origin")?(p=!0,d[w]=C):i[w]=C}if(e.transform||(f||r?i.transform=aO(t.transform,n,y,r):i.transform&&(i.transform="none")),p){const{originX:w="50%",originY:S="50%",originZ:E=0}=d;i.transformOrigin=`${w} ${S} ${E}`}}const Qv=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function u4(t,e,n){for(const r in e)!jn(e[r])&&!s4(r,n)&&(t[r]=e[r])}function hO({transformTemplate:t},e,n){return O.useMemo(()=>{const r=Qv();return Kv(r,e,{enableHardwareAcceleration:!n},t),Object.assign({},r.vars,r.style)},[e])}function fO(t,e,n){const r=t.style||{},i={};return u4(i,r,t),Object.assign(i,hO(t,e,n)),t.transformValues?t.transformValues(i):i}function pO(t,e,n){const r={},i=fO(t,e,n);return t.drag&&t.dragListener!==!1&&(r.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(r.tabIndex=0),r.style=i,r}const mO=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function nf(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||mO.has(t)}let c4=t=>!nf(t);function gO(t){t&&(c4=e=>e.startsWith("on")?!nf(e):t(e))}try{gO(require("@emotion/is-prop-valid").default)}catch{}function yO(t,e,n){const r={};for(const i in t)i==="values"&&typeof t.values=="object"||(c4(i)||n===!0&&nf(i)||!e&&!nf(i)||t.draggable&&i.startsWith("onDrag"))&&(r[i]=t[i]);return r}function Ax(t,e,n){return typeof t=="string"?t:_e.transform(e+n*t)}function vO(t,e,n){const r=Ax(e,t.x,t.width),i=Ax(n,t.y,t.height);return`${r} ${i}`}const bO={offset:"stroke-dashoffset",array:"stroke-dasharray"},wO={offset:"strokeDashoffset",array:"strokeDasharray"};function xO(t,e,n=1,r=0,i=!0){t.pathLength=1;const o=i?bO:wO;t[o.offset]=_e.transform(-r);const l=_e.transform(e),d=_e.transform(n);t[o.array]=`${l} ${d}`}function Yv(t,{attrX:e,attrY:n,attrScale:r,originX:i,originY:o,pathLength:l,pathSpacing:d=1,pathOffset:f=0,...p},y,w,S){if(Kv(t,p,y,S),w){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:E,style:C,dimensions:N}=t;E.transform&&(N&&(C.transform=E.transform),delete E.transform),N&&(i!==void 0||o!==void 0||C.transform)&&(C.transformOrigin=vO(N,i!==void 0?i:.5,o!==void 0?o:.5)),e!==void 0&&(E.x=e),n!==void 0&&(E.y=n),r!==void 0&&(E.scale=r),l!==void 0&&xO(E,l,d,f,!1)}const d4=()=>({...Qv(),attrs:{}}),Jv=t=>typeof t=="string"&&t.toLowerCase()==="svg";function SO(t,e,n,r){const i=O.useMemo(()=>{const o=d4();return Yv(o,e,{enableHardwareAcceleration:!1},Jv(r),t.transformTemplate),{...o.attrs,style:{...o.style}}},[e]);if(t.style){const o={};u4(o,t.style,t),i.style={...o,...i.style}}return i}function kO(t=!1){return(e,n,r,{latestValues:i},o)=>{const l=(Gv(e)?SO:pO)(n,i,o,e),d={...yO(n,typeof e=="string",t),...l,ref:r},{children:f}=n,p=O.useMemo(()=>jn(f)?f.get():f,[f]);return O.createElement(e,{...d,children:p})}}function h4(t,{style:e,vars:n},r,i){Object.assign(t.style,e,i&&i.getProjectionStyles(r));for(const o in n)t.style.setProperty(o,n[o])}const f4=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function p4(t,e,n,r){h4(t,e,void 0,r);for(const i in e.attrs)t.setAttribute(f4.has(i)?i:$v(i),e.attrs[i])}function Xv(t,e){const{style:n}=t,r={};for(const i in n)(jn(n[i])||e.style&&jn(e.style[i])||s4(i,t))&&(r[i]=n[i]);return r}function m4(t,e){const n=Xv(t,e);for(const r in t)if(jn(t[r])||jn(e[r])){const i=yc.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;n[i]=t[r]}return n}function Zv(t,e,n,r={},i={}){return typeof e=="function"&&(e=e(n!==void 0?n:t.custom,r,i)),typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"&&(e=e(n!==void 0?n:t.custom,r,i)),e}function g4(t){const e=O.useRef(null);return e.current===null&&(e.current=t()),e.current}const rf=t=>Array.isArray(t),EO=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),CO=t=>rf(t)?t[t.length-1]||0:t;function _h(t){const e=jn(t)?t.get():t;return EO(e)?e.toValue():e}function TO({scrapeMotionValuesFromProps:t,createRenderState:e,onMount:n},r,i,o){const l={latestValues:_O(r,i,o,t),renderState:e()};return n&&(l.mount=d=>n(r,d,l)),l}const y4=t=>(e,n)=>{const r=O.useContext(Gf),i=O.useContext(Kf),o=()=>TO(t,e,r,i);return n?o():g4(o)};function _O(t,e,n,r){const i={},o=r(t,{});for(const S in o)i[S]=_h(o[S]);let{initial:l,animate:d}=t;const f=Jf(t),p=n4(t);e&&p&&!f&&t.inherit!==!1&&(l===void 0&&(l=e.initial),d===void 0&&(d=e.animate));let y=n?n.initial===!1:!1;y=y||l===!1;const w=y?d:l;return w&&typeof w!="boolean"&&!Yf(w)&&(Array.isArray(w)?w:[w]).forEach(S=>{const E=Zv(t,S);if(!E)return;const{transitionEnd:C,transition:N,...I}=E;for(const B in I){let M=I[B];if(Array.isArray(M)){const $=y?M.length-1:0;M=M[$]}M!==null&&(i[B]=M)}for(const B in C)i[B]=C[B]}),i}const Et=t=>t;class jx{constructor(){this.order=[],this.scheduled=new Set}add(e){if(!this.scheduled.has(e))return this.scheduled.add(e),this.order.push(e),!0}remove(e){const n=this.order.indexOf(e);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(e))}clear(){this.order.length=0,this.scheduled.clear()}}function IO(t){let e=new jx,n=new jx,r=0,i=!1,o=!1;const l=new WeakSet,d={schedule:(f,p=!1,y=!1)=>{const w=y&&i,S=w?e:n;return p&&l.add(f),S.add(f)&&w&&i&&(r=e.order.length),f},cancel:f=>{n.remove(f),l.delete(f)},process:f=>{if(i){o=!0;return}if(i=!0,[e,n]=[n,e],n.clear(),r=e.order.length,r)for(let p=0;p<r;p++){const y=e.order[p];y(f),l.has(y)&&(d.schedule(y),t())}i=!1,o&&(o=!1,d.process(f))}};return d}const Kd=["prepare","read","update","preRender","render","postRender"],PO=40;function AO(t,e){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=Kd.reduce((p,y)=>(p[y]=IO(()=>n=!0),p),{}),l=p=>o[p].process(i),d=()=>{const p=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(p-i.timestamp,PO),1),i.timestamp=p,i.isProcessing=!0,Kd.forEach(l),i.isProcessing=!1,n&&e&&(r=!1,t(d))},f=()=>{n=!0,r=!0,i.isProcessing||t(d)};return{schedule:Kd.reduce((p,y)=>{const w=o[y];return p[y]=(S,E=!1,C=!1)=>(n||f(),w.schedule(S,E,C)),p},{}),cancel:p=>Kd.forEach(y=>o[y].cancel(p)),state:i,steps:o}}const{schedule:nt,cancel:Rs,state:on,steps:Km}=AO(typeof requestAnimationFrame<"u"?requestAnimationFrame:Et,!0),jO={useVisualState:y4({scrapeMotionValuesFromProps:m4,createRenderState:d4,onMount:(t,e,{renderState:n,latestValues:r})=>{nt.read(()=>{try{n.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),nt.render(()=>{Yv(n,r,{enableHardwareAcceleration:!1},Jv(e.tagName),t.transformTemplate),p4(e,n)})}})},NO={useVisualState:y4({scrapeMotionValuesFromProps:Xv,createRenderState:Qv})};function DO(t,{forwardMotionProps:e=!1},n,r){return{...Gv(t)?jO:NO,preloadedFeatures:n,useRender:kO(e),createVisualElement:r,Component:t}}function _s(t,e,n,r={passive:!0}){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n)}const v4=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1;function Zf(t,e="page"){return{point:{x:t[e+"X"],y:t[e+"Y"]}}}const RO=t=>e=>v4(e)&&t(e,Zf(e));function Is(t,e,n,r){return _s(t,e,RO(n),r)}const LO=(t,e)=>n=>e(t(n)),Ei=(...t)=>t.reduce(LO);function b4(t){let e=null;return()=>{const n=()=>{e=null};return e===null?(e=t,n):!1}}const Nx=b4("dragHorizontal"),Dx=b4("dragVertical");function w4(t){let e=!1;if(t==="y")e=Dx();else if(t==="x")e=Nx();else{const n=Nx(),r=Dx();n&&r?e=()=>{n(),r()}:(n&&n(),r&&r())}return e}function x4(){const t=w4(!0);return t?(t(),!1):!0}class Ri{constructor(e){this.isMounted=!1,this.node=e}update(){}}function Rx(t,e){const n="pointer"+(e?"enter":"leave"),r="onHover"+(e?"Start":"End"),i=(o,l)=>{if(o.pointerType==="touch"||x4())return;const d=t.getProps();t.animationState&&d.whileHover&&t.animationState.setActive("whileHover",e),d[r]&&nt.update(()=>d[r](o,l))};return Is(t.current,n,i,{passive:!t.getProps()[r]})}class OO extends Ri{mount(){this.unmount=Ei(Rx(this.node,!0),Rx(this.node,!1))}unmount(){}}class MO extends Ri{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Ei(_s(this.node.current,"focus",()=>this.onFocus()),_s(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const S4=(t,e)=>e?t===e?!0:S4(t,e.parentElement):!1;function Qm(t,e){if(!e)return;const n=new PointerEvent("pointer"+t);e(n,Zf(n))}class FO extends Ri{constructor(){super(...arguments),this.removeStartListeners=Et,this.removeEndListeners=Et,this.removeAccessibleListeners=Et,this.startPointerPress=(e,n)=>{if(this.isPressing)return;this.removeEndListeners();const r=this.node.getProps(),i=Is(window,"pointerup",(l,d)=>{if(!this.checkPressEnd())return;const{onTap:f,onTapCancel:p,globalTapTarget:y}=this.node.getProps();nt.update(()=>{!y&&!S4(this.node.current,l.target)?p&&p(l,d):f&&f(l,d)})},{passive:!(r.onTap||r.onPointerUp)}),o=Is(window,"pointercancel",(l,d)=>this.cancelPress(l,d),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=Ei(i,o),this.startPress(e,n)},this.startAccessiblePress=()=>{const e=o=>{if(o.key!=="Enter"||this.isPressing)return;const l=d=>{d.key!=="Enter"||!this.checkPressEnd()||Qm("up",(f,p)=>{const{onTap:y}=this.node.getProps();y&&nt.update(()=>y(f,p))})};this.removeEndListeners(),this.removeEndListeners=_s(this.node.current,"keyup",l),Qm("down",(d,f)=>{this.startPress(d,f)})},n=_s(this.node.current,"keydown",e),r=()=>{this.isPressing&&Qm("cancel",(o,l)=>this.cancelPress(o,l))},i=_s(this.node.current,"blur",r);this.removeAccessibleListeners=Ei(n,i)}}startPress(e,n){this.isPressing=!0;const{onTapStart:r,whileTap:i}=this.node.getProps();i&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&nt.update(()=>r(e,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!x4()}cancelPress(e,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&nt.update(()=>r(e,n))}mount(){const e=this.node.getProps(),n=Is(e.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(e.onTapStart||e.onPointerStart)}),r=_s(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=Ei(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const dy=new WeakMap,Ym=new WeakMap,UO=t=>{const e=dy.get(t.target);e&&e(t)},VO=t=>{t.forEach(UO)};function BO({root:t,...e}){const n=t||document;Ym.has(n)||Ym.set(n,{});const r=Ym.get(n),i=JSON.stringify(e);return r[i]||(r[i]=new IntersectionObserver(VO,{root:t,...e})),r[i]}function zO(t,e,n){const r=BO(e);return dy.set(t,n),r.observe(t),()=>{dy.delete(t),r.unobserve(t)}}const $O={some:0,all:1};class qO extends Ri{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:o}=e,l={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:$O[i]},d=f=>{const{isIntersecting:p}=f;if(this.isInView===p||(this.isInView=p,o&&!p&&this.hasEnteredView))return;p&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",p);const{onViewportEnter:y,onViewportLeave:w}=this.node.getProps(),S=p?y:w;S&&S(f)};return zO(this.node.current,l,d)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(HO(e,n))&&this.startObserver()}unmount(){}}function HO({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const WO={inView:{Feature:qO},tap:{Feature:FO},focus:{Feature:MO},hover:{Feature:OO}};function k4(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}function GO(t){const e={};return t.values.forEach((n,r)=>e[r]=n.get()),e}function KO(t){const e={};return t.values.forEach((n,r)=>e[r]=n.getVelocity()),e}function ep(t,e,n){const r=t.getProps();return Zv(r,e,n!==void 0?n:r.custom,GO(t),KO(t))}let e0=Et;const ka=t=>t*1e3,Ps=t=>t/1e3,QO={current:!1},E4=t=>Array.isArray(t)&&typeof t[0]=="number";function C4(t){return!!(!t||typeof t=="string"&&T4[t]||E4(t)||Array.isArray(t)&&t.every(C4))}const Tu=([t,e,n,r])=>`cubic-bezier(${t}, ${e}, ${n}, ${r})`,T4={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Tu([0,.65,.55,1]),circOut:Tu([.55,0,1,.45]),backIn:Tu([.31,.01,.66,-.59]),backOut:Tu([.33,1.53,.69,.99])};function _4(t){if(t)return E4(t)?Tu(t):Array.isArray(t)?t.map(_4):T4[t]}function YO(t,e,n,{delay:r=0,duration:i,repeat:o=0,repeatType:l="loop",ease:d,times:f}={}){const p={[e]:n};f&&(p.offset=f);const y=_4(d);return Array.isArray(y)&&(p.easing=y),t.animate(p,{delay:r,duration:i,easing:Array.isArray(y)?"linear":y,fill:"both",iterations:o+1,direction:l==="reverse"?"alternate":"normal"})}function JO(t,{repeat:e,repeatType:n="loop"}){const r=e&&n!=="loop"&&e%2===1?0:t.length-1;return t[r]}const I4=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,XO=1e-7,ZO=12;function eM(t,e,n,r,i){let o,l,d=0;do l=e+(n-e)/2,o=I4(l,r,i)-t,o>0?n=l:e=l;while(Math.abs(o)>XO&&++d<ZO);return l}function wc(t,e,n,r){if(t===e&&n===r)return Et;const i=o=>eM(o,0,1,t,n);return o=>o===0||o===1?o:I4(i(o),e,r)}const tM=wc(.42,0,1,1),nM=wc(0,0,.58,1),P4=wc(.42,0,.58,1),rM=t=>Array.isArray(t)&&typeof t[0]!="number",A4=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,j4=t=>e=>1-t(1-e),t0=t=>1-Math.sin(Math.acos(t)),N4=j4(t0),sM=A4(t0),D4=wc(.33,1.53,.69,.99),n0=j4(D4),iM=A4(n0),aM=t=>(t*=2)<1?.5*n0(t):.5*(2-Math.pow(2,-10*(t-1))),oM={linear:Et,easeIn:tM,easeInOut:P4,easeOut:nM,circIn:t0,circInOut:sM,circOut:N4,backIn:n0,backInOut:iM,backOut:D4,anticipate:aM},Lx=t=>{if(Array.isArray(t)){e0(t.length===4);const[e,n,r,i]=t;return wc(e,n,r,i)}else if(typeof t=="string")return oM[t];return t},r0=(t,e)=>n=>!!(vc(n)&&uO.test(n)&&n.startsWith(t)||e&&Object.prototype.hasOwnProperty.call(n,e)),R4=(t,e,n)=>r=>{if(!vc(r))return r;const[i,o,l,d]=r.match(Xf);return{[t]:parseFloat(i),[e]:parseFloat(o),[n]:parseFloat(l),alpha:d!==void 0?parseFloat(d):1}},lM=t=>Ii(0,255,t),Jm={...Ua,transform:t=>Math.round(lM(t))},ba={test:r0("rgb","red"),parse:R4("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:r=1})=>"rgba("+Jm.transform(t)+", "+Jm.transform(e)+", "+Jm.transform(n)+", "+Mu(Ou.transform(r))+")"};function uM(t){let e="",n="",r="",i="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),r=t.substring(5,7),i=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),r=t.substring(3,4),i=t.substring(4,5),e+=e,n+=n,r+=r,i+=i),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const hy={test:r0("#"),parse:uM,transform:ba.transform},Uo={test:r0("hsl","hue"),parse:R4("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:r=1})=>"hsla("+Math.round(t)+", "+es.transform(Mu(e))+", "+es.transform(Mu(n))+", "+Mu(Ou.transform(r))+")"},vn={test:t=>ba.test(t)||hy.test(t)||Uo.test(t),parse:t=>ba.test(t)?ba.parse(t):Uo.test(t)?Uo.parse(t):hy.parse(t),transform:t=>vc(t)?t:t.hasOwnProperty("red")?ba.transform(t):Uo.transform(t)},pt=(t,e,n)=>-n*t+n*e+t;function Xm(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function cM({hue:t,saturation:e,lightness:n,alpha:r}){t/=360,e/=100,n/=100;let i=0,o=0,l=0;if(!e)i=o=l=n;else{const d=n<.5?n*(1+e):n+e-n*e,f=2*n-d;i=Xm(f,d,t+1/3),o=Xm(f,d,t),l=Xm(f,d,t-1/3)}return{red:Math.round(i*255),green:Math.round(o*255),blue:Math.round(l*255),alpha:r}}const Zm=(t,e,n)=>{const r=t*t;return Math.sqrt(Math.max(0,n*(e*e-r)+r))},dM=[hy,ba,Uo],hM=t=>dM.find(e=>e.test(t));function Ox(t){const e=hM(t);let n=e.parse(t);return e===Uo&&(n=cM(n)),n}const L4=(t,e)=>{const n=Ox(t),r=Ox(e),i={...n};return o=>(i.red=Zm(n.red,r.red,o),i.green=Zm(n.green,r.green,o),i.blue=Zm(n.blue,r.blue,o),i.alpha=pt(n.alpha,r.alpha,o),ba.transform(i))};function fM(t){var e,n;return isNaN(t)&&vc(t)&&(((e=t.match(Xf))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(o4))===null||n===void 0?void 0:n.length)||0)>0}const O4={regex:oO,countKey:"Vars",token:"${v}",parse:Et},M4={regex:o4,countKey:"Colors",token:"${c}",parse:vn.parse},F4={regex:Xf,countKey:"Numbers",token:"${n}",parse:Ua.parse};function eg(t,{regex:e,countKey:n,token:r,parse:i}){const o=t.tokenised.match(e);o&&(t["num"+n]=o.length,t.tokenised=t.tokenised.replace(e,r),t.values.push(...o.map(i)))}function sf(t){const e=t.toString(),n={value:e,tokenised:e,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&eg(n,O4),eg(n,M4),eg(n,F4),n}function U4(t){return sf(t).values}function V4(t){const{values:e,numColors:n,numVars:r,tokenised:i}=sf(t),o=e.length;return l=>{let d=i;for(let f=0;f<o;f++)f<r?d=d.replace(O4.token,l[f]):f<r+n?d=d.replace(M4.token,vn.transform(l[f])):d=d.replace(F4.token,Mu(l[f]));return d}}const pM=t=>typeof t=="number"?0:t;function mM(t){const e=U4(t);return V4(t)(e.map(pM))}const Pi={test:fM,parse:U4,createTransformer:V4,getAnimatableNone:mM},B4=(t,e)=>n=>`${n>0?e:t}`;function z4(t,e){return typeof t=="number"?n=>pt(t,e,n):vn.test(t)?L4(t,e):t.startsWith("var(")?B4(t,e):q4(t,e)}const $4=(t,e)=>{const n=[...t],r=n.length,i=t.map((o,l)=>z4(o,e[l]));return o=>{for(let l=0;l<r;l++)n[l]=i[l](o);return n}},gM=(t,e)=>{const n={...t,...e},r={};for(const i in n)t[i]!==void 0&&e[i]!==void 0&&(r[i]=z4(t[i],e[i]));return i=>{for(const o in r)n[o]=r[o](i);return n}},q4=(t,e)=>{const n=Pi.createTransformer(e),r=sf(t),i=sf(e);return r.numVars===i.numVars&&r.numColors===i.numColors&&r.numNumbers>=i.numNumbers?Ei($4(r.values,i.values),n):B4(t,e)},nc=(t,e,n)=>{const r=e-t;return r===0?1:(n-t)/r},Mx=(t,e)=>n=>pt(t,e,n);function yM(t){return typeof t=="number"?Mx:typeof t=="string"?vn.test(t)?L4:q4:Array.isArray(t)?$4:typeof t=="object"?gM:Mx}function vM(t,e,n){const r=[],i=n||yM(t[0]),o=t.length-1;for(let l=0;l<o;l++){let d=i(t[l],t[l+1]);if(e){const f=Array.isArray(e)?e[l]||Et:e;d=Ei(f,d)}r.push(d)}return r}function H4(t,e,{clamp:n=!0,ease:r,mixer:i}={}){const o=t.length;if(e0(o===e.length),o===1)return()=>e[0];t[0]>t[o-1]&&(t=[...t].reverse(),e=[...e].reverse());const l=vM(e,r,i),d=l.length,f=p=>{let y=0;if(d>1)for(;y<t.length-2&&!(p<t[y+1]);y++);const w=nc(t[y],t[y+1],p);return l[y](w)};return n?p=>f(Ii(t[0],t[o-1],p)):f}function bM(t,e){const n=t[t.length-1];for(let r=1;r<=e;r++){const i=nc(0,e,r);t.push(pt(n,1,i))}}function wM(t){const e=[0];return bM(e,t.length-1),e}function xM(t,e){return t.map(n=>n*e)}function SM(t,e){return t.map(()=>e||P4).splice(0,t.length-1)}function af({duration:t=300,keyframes:e,times:n,ease:r="easeInOut"}){const i=rM(r)?r.map(Lx):Lx(r),o={done:!1,value:e[0]},l=xM(n&&n.length===e.length?n:wM(e),t),d=H4(l,e,{ease:Array.isArray(i)?i:SM(e,i)});return{calculatedDuration:t,next:f=>(o.value=d(f),o.done=f>=t,o)}}function W4(t,e){return e?t*(1e3/e):0}const kM=5;function G4(t,e,n){const r=Math.max(e-kM,0);return W4(n-t(r),e-r)}const Fx=.001,EM=.01,CM=10,TM=.05,_M=1;function IM({duration:t=800,bounce:e=.25,velocity:n=0,mass:r=1}){let i,o,l=1-e;l=Ii(TM,_M,l),t=Ii(EM,CM,Ps(t)),l<1?(i=p=>{const y=p*l,w=y*t,S=y-n,E=fy(p,l),C=Math.exp(-w);return Fx-S/E*C},o=p=>{const y=p*l*t,w=y*n+n,S=Math.pow(l,2)*Math.pow(p,2)*t,E=Math.exp(-y),C=fy(Math.pow(p,2),l);return(-i(p)+Fx>0?-1:1)*((w-S)*E)/C}):(i=p=>{const y=Math.exp(-p*t),w=(p-n)*t+1;return-.001+y*w},o=p=>{const y=Math.exp(-p*t),w=(n-p)*(t*t);return y*w});const d=5/t,f=AM(i,o,d);if(t=ka(t),isNaN(f))return{stiffness:100,damping:10,duration:t};{const p=Math.pow(f,2)*r;return{stiffness:p,damping:l*2*Math.sqrt(r*p),duration:t}}}const PM=12;function AM(t,e,n){let r=n;for(let i=1;i<PM;i++)r=r-t(r)/e(r);return r}function fy(t,e){return t*Math.sqrt(1-e*e)}const jM=["duration","bounce"],NM=["stiffness","damping","mass"];function Ux(t,e){return e.some(n=>t[n]!==void 0)}function DM(t){let e={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...t};if(!Ux(t,NM)&&Ux(t,jM)){const n=IM(t);e={...e,...n,mass:1},e.isResolvedFromDuration=!0}return e}function K4({keyframes:t,restDelta:e,restSpeed:n,...r}){const i=t[0],o=t[t.length-1],l={done:!1,value:i},{stiffness:d,damping:f,mass:p,duration:y,velocity:w,isResolvedFromDuration:S}=DM({...r,velocity:-Ps(r.velocity||0)}),E=w||0,C=f/(2*Math.sqrt(d*p)),N=o-i,I=Ps(Math.sqrt(d/p)),B=Math.abs(N)<5;n||(n=B?.01:2),e||(e=B?.005:.5);let M;if(C<1){const $=fy(I,C);M=L=>{const W=Math.exp(-C*I*L);return o-W*((E+C*I*N)/$*Math.sin($*L)+N*Math.cos($*L))}}else if(C===1)M=$=>o-Math.exp(-I*$)*(N+(E+I*N)*$);else{const $=I*Math.sqrt(C*C-1);M=L=>{const W=Math.exp(-C*I*L),Z=Math.min($*L,300);return o-W*((E+C*I*N)*Math.sinh(Z)+$*N*Math.cosh(Z))/$}}return{calculatedDuration:S&&y||null,next:$=>{const L=M($);if(S)l.done=$>=y;else{let W=E;$!==0&&(C<1?W=G4(M,$,L):W=0);const Z=Math.abs(W)<=n,P=Math.abs(o-L)<=e;l.done=Z&&P}return l.value=l.done?o:L,l}}}function Vx({keyframes:t,velocity:e=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:l,min:d,max:f,restDelta:p=.5,restSpeed:y}){const w=t[0],S={done:!1,value:w},E=_=>d!==void 0&&_<d||f!==void 0&&_>f,C=_=>d===void 0?f:f===void 0||Math.abs(d-_)<Math.abs(f-_)?d:f;let N=n*e;const I=w+N,B=l===void 0?I:l(I);B!==I&&(N=B-w);const M=_=>-N*Math.exp(-_/r),$=_=>B+M(_),L=_=>{const A=M(_),F=$(_);S.done=Math.abs(A)<=p,S.value=S.done?B:F};let W,Z;const P=_=>{E(S.value)&&(W=_,Z=K4({keyframes:[S.value,C(S.value)],velocity:G4($,_,S.value),damping:i,stiffness:o,restDelta:p,restSpeed:y}))};return P(0),{calculatedDuration:null,next:_=>{let A=!1;return!Z&&W===void 0&&(A=!0,L(_),P(_)),W!==void 0&&_>W?Z.next(_-W):(!A&&L(_),S)}}}const RM=t=>{const e=({timestamp:n})=>t(n);return{start:()=>nt.update(e,!0),stop:()=>Rs(e),now:()=>on.isProcessing?on.timestamp:performance.now()}},Bx=2e4;function zx(t){let e=0;const n=50;let r=t.next(e);for(;!r.done&&e<Bx;)e+=n,r=t.next(e);return e>=Bx?1/0:e}const LM={decay:Vx,inertia:Vx,tween:af,keyframes:af,spring:K4};function of({autoplay:t=!0,delay:e=0,driver:n=RM,keyframes:r,type:i="keyframes",repeat:o=0,repeatDelay:l=0,repeatType:d="loop",onPlay:f,onStop:p,onComplete:y,onUpdate:w,...S}){let E=1,C=!1,N,I;const B=()=>{I=new Promise(j=>{N=j})};B();let M;const $=LM[i]||af;let L;$!==af&&typeof r[0]!="number"&&(L=H4([0,100],r,{clamp:!1}),r=[0,100]);const W=$({...S,keyframes:r});let Z;d==="mirror"&&(Z=$({...S,keyframes:[...r].reverse(),velocity:-(S.velocity||0)}));let P="idle",_=null,A=null,F=null;W.calculatedDuration===null&&o&&(W.calculatedDuration=zx(W));const{calculatedDuration:z}=W;let H=1/0,D=1/0;z!==null&&(H=z+l,D=H*(o+1)-l);let ve=0;const Oe=j=>{if(A===null)return;E>0&&(A=Math.min(A,j)),E<0&&(A=Math.min(j-D/E,A)),_!==null?ve=_:ve=Math.round(j-A)*E;const Q=ve-e*(E>=0?1:-1),oe=E>=0?Q<0:Q>D;ve=Math.max(Q,0),P==="finished"&&_===null&&(ve=D);let fe=ve,ce=W;if(o){const je=Math.min(ve,D)/H;let qe=Math.floor(je),De=je%1;!De&&je>=1&&(De=1),De===1&&qe--,qe=Math.min(qe,o+1),qe%2&&(d==="reverse"?(De=1-De,l&&(De-=l/H)):d==="mirror"&&(ce=Z)),fe=Ii(0,1,De)*H}const we=oe?{done:!1,value:r[0]}:ce.next(fe);L&&(we.value=L(we.value));let{done:Ce}=we;!oe&&z!==null&&(Ce=E>=0?ve>=D:ve<=0);const Te=_===null&&(P==="finished"||P==="running"&&Ce);return w&&w(we.value),Te&&ae(),we},Ue=()=>{M&&M.stop(),M=void 0},Ae=()=>{P="idle",Ue(),N(),B(),A=F=null},ae=()=>{P="finished",y&&y(),Ue(),N()},de=()=>{if(C)return;M||(M=n(Oe));const j=M.now();f&&f(),_!==null?A=j-_:(!A||P==="finished")&&(A=j),P==="finished"&&B(),F=A,_=null,P="running",M.start()};t&&de();const Y={then(j,Q){return I.then(j,Q)},get time(){return Ps(ve)},set time(j){j=ka(j),ve=j,_!==null||!M||E===0?_=j:A=M.now()-j/E},get duration(){const j=W.calculatedDuration===null?zx(W):W.calculatedDuration;return Ps(j)},get speed(){return E},set speed(j){j===E||!M||(E=j,Y.time=Ps(ve))},get state(){return P},play:de,pause:()=>{P="paused",_=ve},stop:()=>{C=!0,P!=="idle"&&(P="idle",p&&p(),Ae())},cancel:()=>{F!==null&&Oe(F),Ae()},complete:()=>{P="finished"},sample:j=>(A=0,Oe(j))};return Y}function OM(t){let e;return()=>(e===void 0&&(e=t()),e)}const MM=OM(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),FM=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),Qd=10,UM=2e4,VM=(t,e)=>e.type==="spring"||t==="backgroundColor"||!C4(e.ease);function BM(t,e,{onUpdate:n,onComplete:r,...i}){if(!(MM()&&FM.has(e)&&!i.repeatDelay&&i.repeatType!=="mirror"&&i.damping!==0&&i.type!=="inertia"))return!1;let o=!1,l,d,f=!1;const p=()=>{d=new Promise(B=>{l=B})};p();let{keyframes:y,duration:w=300,ease:S,times:E}=i;if(VM(e,i)){const B=of({...i,repeat:0,delay:0});let M={done:!1,value:y[0]};const $=[];let L=0;for(;!M.done&&L<UM;)M=B.sample(L),$.push(M.value),L+=Qd;E=void 0,y=$,w=L-Qd,S="linear"}const C=YO(t.owner.current,e,y,{...i,duration:w,ease:S,times:E}),N=()=>{f=!1,C.cancel()},I=()=>{f=!0,nt.update(N),l(),p()};return C.onfinish=()=>{f||(t.set(JO(y,i)),r&&r(),I())},{then(B,M){return d.then(B,M)},attachTimeline(B){return C.timeline=B,C.onfinish=null,Et},get time(){return Ps(C.currentTime||0)},set time(B){C.currentTime=ka(B)},get speed(){return C.playbackRate},set speed(B){C.playbackRate=B},get duration(){return Ps(w)},play:()=>{o||(C.play(),Rs(N))},pause:()=>C.pause(),stop:()=>{if(o=!0,C.playState==="idle")return;const{currentTime:B}=C;if(B){const M=of({...i,autoplay:!1});t.setWithVelocity(M.sample(B-Qd).value,M.sample(B).value,Qd)}I()},complete:()=>{f||C.finish()},cancel:I}}function zM({keyframes:t,delay:e,onUpdate:n,onComplete:r}){const i=()=>(n&&n(t[t.length-1]),r&&r(),{time:0,speed:1,duration:0,play:Et,pause:Et,stop:Et,then:o=>(o(),Promise.resolve()),cancel:Et,complete:Et});return e?of({keyframes:[0,1],duration:0,delay:e,onComplete:i}):i()}const $M={type:"spring",stiffness:500,damping:25,restSpeed:10},qM=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),HM={type:"keyframes",duration:.8},WM={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},GM=(t,{keyframes:e})=>e.length>2?HM:Fa.has(t)?t.startsWith("scale")?qM(e[1]):$M:WM,py=(t,e)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Pi.test(e)||e==="0")&&!e.startsWith("url(")),KM=new Set(["brightness","contrast","saturate","opacity"]);function QM(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[r]=n.match(Xf)||[];if(!r)return t;const i=n.replace(r,"");let o=KM.has(e)?1:0;return r!==n&&(o*=100),e+"("+o+i+")"}const YM=/([a-z-]*)\(.*?\)/g,my={...Pi,getAnimatableNone:t=>{const e=t.match(YM);return e?e.map(QM).join(" "):t}},JM={...l4,color:vn,backgroundColor:vn,outlineColor:vn,fill:vn,stroke:vn,borderColor:vn,borderTopColor:vn,borderRightColor:vn,borderBottomColor:vn,borderLeftColor:vn,filter:my,WebkitFilter:my},s0=t=>JM[t];function Q4(t,e){let n=s0(t);return n!==my&&(n=Pi),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const Y4=t=>/^0[^.\s]+$/.test(t);function XM(t){if(typeof t=="number")return t===0;if(t!==null)return t==="none"||t==="0"||Y4(t)}function ZM(t,e,n,r){const i=py(e,n);let o;Array.isArray(n)?o=[...n]:o=[null,n];const l=r.from!==void 0?r.from:t.get();let d;const f=[];for(let p=0;p<o.length;p++)o[p]===null&&(o[p]=p===0?l:o[p-1]),XM(o[p])&&f.push(p),typeof o[p]=="string"&&o[p]!=="none"&&o[p]!=="0"&&(d=o[p]);if(i&&f.length&&d)for(let p=0;p<f.length;p++){const y=f[p];o[y]=Q4(e,d)}return o}function e8({when:t,delay:e,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:o,repeatType:l,repeatDelay:d,from:f,elapsed:p,...y}){return!!Object.keys(y).length}function i0(t,e){return t[e]||t.default||t}const t8={skipAnimations:!1},a0=(t,e,n,r={})=>i=>{const o=i0(r,t)||{},l=o.delay||r.delay||0;let{elapsed:d=0}=r;d=d-ka(l);const f=ZM(e,t,n,o),p=f[0],y=f[f.length-1],w=py(t,p),S=py(t,y);let E={keyframes:f,velocity:e.getVelocity(),ease:"easeOut",...o,delay:-d,onUpdate:C=>{e.set(C),o.onUpdate&&o.onUpdate(C)},onComplete:()=>{i(),o.onComplete&&o.onComplete()}};if(e8(o)||(E={...E,...GM(t,E)}),E.duration&&(E.duration=ka(E.duration)),E.repeatDelay&&(E.repeatDelay=ka(E.repeatDelay)),!w||!S||QO.current||o.type===!1||t8.skipAnimations)return zM(E);if(!r.isHandoff&&e.owner&&e.owner.current instanceof HTMLElement&&!e.owner.getProps().onUpdate){const C=BM(e,t,E);if(C)return C}return of(E)};function lf(t){return!!(jn(t)&&t.add)}const J4=t=>/^\-?\d*\.?\d+$/.test(t);function o0(t,e){t.indexOf(e)===-1&&t.push(e)}function l0(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class u0{constructor(){this.subscriptions=[]}add(e){return o0(this.subscriptions,e),()=>l0(this.subscriptions,e)}notify(e,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](e,n,r);else for(let o=0;o<i;o++){const l=this.subscriptions[o];l&&l(e,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const n8=t=>!isNaN(parseFloat(t));class r8{constructor(e,n={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(r,i=!0)=>{this.prev=this.current,this.current=r;const{delta:o,timestamp:l}=on;this.lastUpdated!==l&&(this.timeDelta=o,this.lastUpdated=l,nt.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>nt.postRender(this.velocityCheck),this.velocityCheck=({timestamp:r})=>{r!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=e,this.canTrackVelocity=n8(this.current),this.owner=n.owner}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new u0);const r=this.events[e].add(n);return e==="change"?()=>{r(),nt.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,r){this.set(n),this.prev=e,this.timeDelta=r}jump(e){this.updateAndNotify(e),this.prev=e,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?W4(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ll(t,e){return new r8(t,e)}const X4=t=>e=>e.test(t),s8={test:t=>t==="auto",parse:t=>t},Z4=[Ua,_e,es,li,dO,cO,s8],pu=t=>Z4.find(X4(t)),i8=[...Z4,vn,Pi],a8=t=>i8.find(X4(t));function o8(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,ll(n))}function l8(t,e){const n=ep(t,e);let{transitionEnd:r={},transition:i={},...o}=n?t.makeTargetAnimatable(n,!1):{};o={...o,...r};for(const l in o){const d=CO(o[l]);o8(t,l,d)}}function u8(t,e,n){var r,i;const o=Object.keys(e).filter(d=>!t.hasValue(d)),l=o.length;if(l)for(let d=0;d<l;d++){const f=o[d],p=e[f];let y=null;Array.isArray(p)&&(y=p[0]),y===null&&(y=(i=(r=n[f])!==null&&r!==void 0?r:t.readValue(f))!==null&&i!==void 0?i:e[f]),y!=null&&(typeof y=="string"&&(J4(y)||Y4(y))?y=parseFloat(y):!a8(y)&&Pi.test(p)&&(y=Q4(f,p)),t.addValue(f,ll(y,{owner:t})),n[f]===void 0&&(n[f]=y),y!==null&&t.setBaseTarget(f,y))}}function c8(t,e){return e?(e[t]||e.default||e).from:void 0}function d8(t,e,n){const r={};for(const i in t){const o=c8(i,e);if(o!==void 0)r[i]=o;else{const l=n.getValue(i);l&&(r[i]=l.get())}}return r}function h8({protectedKeys:t,needsAnimating:e},n){const r=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,r}function f8(t,e){const n=t.get();if(Array.isArray(e)){for(let r=0;r<e.length;r++)if(e[r]!==n)return!0}else return n!==e}function eT(t,e,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:o=t.getDefaultTransition(),transitionEnd:l,...d}=t.makeTargetAnimatable(e);const f=t.getValue("willChange");r&&(o=r);const p=[],y=i&&t.animationState&&t.animationState.getState()[i];for(const w in d){const S=t.getValue(w),E=d[w];if(!S||E===void 0||y&&h8(y,w))continue;const C={delay:n,elapsed:0,...i0(o||{},w)};if(window.HandoffAppearAnimations){const B=t.getProps()[t4];if(B){const M=window.HandoffAppearAnimations(B,w,S,nt);M!==null&&(C.elapsed=M,C.isHandoff=!0)}}let N=!C.isHandoff&&!f8(S,E);if(C.type==="spring"&&(S.getVelocity()||C.velocity)&&(N=!1),S.animation&&(N=!1),N)continue;S.start(a0(w,S,E,t.shouldReduceMotion&&Fa.has(w)?{type:!1}:C));const I=S.animation;lf(f)&&(f.add(w),I.then(()=>f.remove(w))),p.push(I)}return l&&Promise.all(p).then(()=>{l&&l8(t,l)}),p}function gy(t,e,n={}){const r=ep(t,e,n.custom);let{transition:i=t.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const o=r?()=>Promise.all(eT(t,r,n)):()=>Promise.resolve(),l=t.variantChildren&&t.variantChildren.size?(f=0)=>{const{delayChildren:p=0,staggerChildren:y,staggerDirection:w}=i;return p8(t,e,p+f,y,w,n)}:()=>Promise.resolve(),{when:d}=i;if(d){const[f,p]=d==="beforeChildren"?[o,l]:[l,o];return f().then(()=>p())}else return Promise.all([o(),l(n.delay)])}function p8(t,e,n=0,r=0,i=1,o){const l=[],d=(t.variantChildren.size-1)*r,f=i===1?(p=0)=>p*r:(p=0)=>d-p*r;return Array.from(t.variantChildren).sort(m8).forEach((p,y)=>{p.notify("AnimationStart",e),l.push(gy(p,e,{...o,delay:n+f(y)}).then(()=>p.notify("AnimationComplete",e)))}),Promise.all(l)}function m8(t,e){return t.sortNodePosition(e)}function g8(t,e,n={}){t.notify("AnimationStart",e);let r;if(Array.isArray(e)){const i=e.map(o=>gy(t,o,n));r=Promise.all(i)}else if(typeof e=="string")r=gy(t,e,n);else{const i=typeof e=="function"?ep(t,e,n.custom):e;r=Promise.all(eT(t,i,n))}return r.then(()=>t.notify("AnimationComplete",e))}const y8=[...qv].reverse(),v8=qv.length;function b8(t){return e=>Promise.all(e.map(({animation:n,options:r})=>g8(t,n,r)))}function w8(t){let e=b8(t);const n=S8();let r=!0;const i=(f,p)=>{const y=ep(t,p);if(y){const{transition:w,transitionEnd:S,...E}=y;f={...f,...E,...S}}return f};function o(f){e=f(t)}function l(f,p){const y=t.getProps(),w=t.getVariantContext(!0)||{},S=[],E=new Set;let C={},N=1/0;for(let B=0;B<v8;B++){const M=y8[B],$=n[M],L=y[M]!==void 0?y[M]:w[M],W=ec(L),Z=M===p?$.isActive:null;Z===!1&&(N=B);let P=L===w[M]&&L!==y[M]&&W;if(P&&r&&t.manuallyAnimateOnMount&&(P=!1),$.protectedKeys={...C},!$.isActive&&Z===null||!L&&!$.prevProp||Yf(L)||typeof L=="boolean")continue;let _=x8($.prevProp,L)||M===p&&$.isActive&&!P&&W||B>N&&W,A=!1;const F=Array.isArray(L)?L:[L];let z=F.reduce(i,{});Z===!1&&(z={});const{prevResolvedValues:H={}}=$,D={...H,...z},ve=Oe=>{_=!0,E.has(Oe)&&(A=!0,E.delete(Oe)),$.needsAnimating[Oe]=!0};for(const Oe in D){const Ue=z[Oe],Ae=H[Oe];if(C.hasOwnProperty(Oe))continue;let ae=!1;rf(Ue)&&rf(Ae)?ae=!k4(Ue,Ae):ae=Ue!==Ae,ae?Ue!==void 0?ve(Oe):E.add(Oe):Ue!==void 0&&E.has(Oe)?ve(Oe):$.protectedKeys[Oe]=!0}$.prevProp=L,$.prevResolvedValues=z,$.isActive&&(C={...C,...z}),r&&t.blockInitialAnimation&&(_=!1),_&&(!P||A)&&S.push(...F.map(Oe=>({animation:Oe,options:{type:M,...f}})))}if(E.size){const B={};E.forEach(M=>{const $=t.getBaseTarget(M);$!==void 0&&(B[M]=$)}),S.push({animation:B})}let I=!!S.length;return r&&(y.initial===!1||y.initial===y.animate)&&!t.manuallyAnimateOnMount&&(I=!1),r=!1,I?e(S):Promise.resolve()}function d(f,p,y){var w;if(n[f].isActive===p)return Promise.resolve();(w=t.variantChildren)===null||w===void 0||w.forEach(E=>{var C;return(C=E.animationState)===null||C===void 0?void 0:C.setActive(f,p)}),n[f].isActive=p;const S=l(y,f);for(const E in n)n[E].protectedKeys={};return S}return{animateChanges:l,setActive:d,setAnimateFunction:o,getState:()=>n}}function x8(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!k4(e,t):!1}function ua(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function S8(){return{animate:ua(!0),whileInView:ua(),whileHover:ua(),whileTap:ua(),whileDrag:ua(),whileFocus:ua(),exit:ua()}}class k8 extends Ri{constructor(e){super(e),e.animationState||(e.animationState=w8(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();this.unmount(),Yf(e)&&(this.unmount=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let E8=0;class C8 extends Ri{constructor(){super(...arguments),this.id=E8++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n,custom:r}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;const o=this.node.animationState.setActive("exit",!e,{custom:r??this.node.getProps().custom});n&&!e&&o.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const T8={animation:{Feature:k8},exit:{Feature:C8}},$x=(t,e)=>Math.abs(t-e);function _8(t,e){const n=$x(t.x,e.x),r=$x(t.y,e.y);return Math.sqrt(n**2+r**2)}class tT{constructor(e,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:o=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const w=ng(this.lastMoveEventInfo,this.history),S=this.startEvent!==null,E=_8(w.offset,{x:0,y:0})>=3;if(!S&&!E)return;const{point:C}=w,{timestamp:N}=on;this.history.push({...C,timestamp:N});const{onStart:I,onMove:B}=this.handlers;S||(I&&I(this.lastMoveEvent,w),this.startEvent=this.lastMoveEvent),B&&B(this.lastMoveEvent,w)},this.handlePointerMove=(w,S)=>{this.lastMoveEvent=w,this.lastMoveEventInfo=tg(S,this.transformPagePoint),nt.update(this.updatePoint,!0)},this.handlePointerUp=(w,S)=>{this.end();const{onEnd:E,onSessionEnd:C,resumeAnimation:N}=this.handlers;if(this.dragSnapToOrigin&&N&&N(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const I=ng(w.type==="pointercancel"?this.lastMoveEventInfo:tg(S,this.transformPagePoint),this.history);this.startEvent&&E&&E(w,I),C&&C(w,I)},!v4(e))return;this.dragSnapToOrigin=o,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const l=Zf(e),d=tg(l,this.transformPagePoint),{point:f}=d,{timestamp:p}=on;this.history=[{...f,timestamp:p}];const{onSessionStart:y}=n;y&&y(e,ng(d,this.history)),this.removeListeners=Ei(Is(this.contextWindow,"pointermove",this.handlePointerMove),Is(this.contextWindow,"pointerup",this.handlePointerUp),Is(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Rs(this.updatePoint)}}function tg(t,e){return e?{point:e(t.point)}:t}function qx(t,e){return{x:t.x-e.x,y:t.y-e.y}}function ng({point:t},e){return{point:t,delta:qx(t,nT(e)),offset:qx(t,I8(e)),velocity:P8(e,.1)}}function I8(t){return t[0]}function nT(t){return t[t.length-1]}function P8(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,r=null;const i=nT(t);for(;n>=0&&(r=t[n],!(i.timestamp-r.timestamp>ka(e)));)n--;if(!r)return{x:0,y:0};const o=Ps(i.timestamp-r.timestamp);if(o===0)return{x:0,y:0};const l={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return l.x===1/0&&(l.x=0),l.y===1/0&&(l.y=0),l}function $n(t){return t.max-t.min}function yy(t,e=0,n=.01){return Math.abs(t-e)<=n}function Hx(t,e,n,r=.5){t.origin=r,t.originPoint=pt(e.min,e.max,t.origin),t.scale=$n(n)/$n(e),(yy(t.scale,1,1e-4)||isNaN(t.scale))&&(t.scale=1),t.translate=pt(n.min,n.max,t.origin)-t.originPoint,(yy(t.translate)||isNaN(t.translate))&&(t.translate=0)}function Fu(t,e,n,r){Hx(t.x,e.x,n.x,r?r.originX:void 0),Hx(t.y,e.y,n.y,r?r.originY:void 0)}function Wx(t,e,n){t.min=n.min+e.min,t.max=t.min+$n(e)}function A8(t,e,n){Wx(t.x,e.x,n.x),Wx(t.y,e.y,n.y)}function Gx(t,e,n){t.min=e.min-n.min,t.max=t.min+$n(e)}function Uu(t,e,n){Gx(t.x,e.x,n.x),Gx(t.y,e.y,n.y)}function j8(t,{min:e,max:n},r){return e!==void 0&&t<e?t=r?pt(e,t,r.min):Math.max(t,e):n!==void 0&&t>n&&(t=r?pt(n,t,r.max):Math.min(t,n)),t}function Kx(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function N8(t,{top:e,left:n,bottom:r,right:i}){return{x:Kx(t.x,n,i),y:Kx(t.y,e,r)}}function Qx(t,e){let n=e.min-t.min,r=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,r]=[r,n]),{min:n,max:r}}function D8(t,e){return{x:Qx(t.x,e.x),y:Qx(t.y,e.y)}}function R8(t,e){let n=.5;const r=$n(t),i=$n(e);return i>r?n=nc(e.min,e.max-r,t.min):r>i&&(n=nc(t.min,t.max-i,e.min)),Ii(0,1,n)}function L8(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const vy=.35;function O8(t=vy){return t===!1?t=0:t===!0&&(t=vy),{x:Yx(t,"left","right"),y:Yx(t,"top","bottom")}}function Yx(t,e,n){return{min:Jx(t,e),max:Jx(t,n)}}function Jx(t,e){return typeof t=="number"?t:t[e]||0}const Xx=()=>({translate:0,scale:1,origin:0,originPoint:0}),Vo=()=>({x:Xx(),y:Xx()}),Zx=()=>({min:0,max:0}),It=()=>({x:Zx(),y:Zx()});function lr(t){return[t("x"),t("y")]}function rT({top:t,left:e,right:n,bottom:r}){return{x:{min:e,max:n},y:{min:t,max:r}}}function M8({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function F8(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),r=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function rg(t){return t===void 0||t===1}function by({scale:t,scaleX:e,scaleY:n}){return!rg(t)||!rg(e)||!rg(n)}function ha(t){return by(t)||sT(t)||t.z||t.rotate||t.rotateX||t.rotateY}function sT(t){return e2(t.x)||e2(t.y)}function e2(t){return t&&t!=="0%"}function uf(t,e,n){const r=t-n,i=e*r;return n+i}function t2(t,e,n,r,i){return i!==void 0&&(t=uf(t,i,r)),uf(t,n,r)+e}function wy(t,e=0,n=1,r,i){t.min=t2(t.min,e,n,r,i),t.max=t2(t.max,e,n,r,i)}function iT(t,{x:e,y:n}){wy(t.x,e.translate,e.scale,e.originPoint),wy(t.y,n.translate,n.scale,n.originPoint)}function U8(t,e,n,r=!1){const i=n.length;if(!i)return;e.x=e.y=1;let o,l;for(let d=0;d<i;d++){o=n[d],l=o.projectionDelta;const f=o.instance;f&&f.style&&f.style.display==="contents"||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&Bo(t,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),l&&(e.x*=l.x.scale,e.y*=l.y.scale,iT(t,l)),r&&ha(o.latestValues)&&Bo(t,o.latestValues))}e.x=n2(e.x),e.y=n2(e.y)}function n2(t){return Number.isInteger(t)||t>1.0000000000001||t<.999999999999?t:1}function ui(t,e){t.min=t.min+e,t.max=t.max+e}function r2(t,e,[n,r,i]){const o=e[i]!==void 0?e[i]:.5,l=pt(t.min,t.max,o);wy(t,e[n],e[r],l,e.scale)}const V8=["x","scaleX","originX"],B8=["y","scaleY","originY"];function Bo(t,e){r2(t.x,e,V8),r2(t.y,e,B8)}function aT(t,e){return rT(F8(t.getBoundingClientRect(),e))}function z8(t,e,n){const r=aT(t,n),{scroll:i}=e;return i&&(ui(r.x,i.offset.x),ui(r.y,i.offset.y)),r}const oT=({current:t})=>t?t.ownerDocument.defaultView:null,$8=new WeakMap;class q8{constructor(e){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=It(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=y=>{const{dragSnapToOrigin:w}=this.getProps();w?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Zf(y,"page").point)},o=(y,w)=>{const{drag:S,dragPropagation:E,onDragStart:C}=this.getProps();if(S&&!E&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=w4(S),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),lr(I=>{let B=this.getAxisMotionValue(I).get()||0;if(es.test(B)){const{projection:M}=this.visualElement;if(M&&M.layout){const $=M.layout.layoutBox[I];$&&(B=$n($)*(parseFloat(B)/100))}}this.originPoint[I]=B}),C&&nt.update(()=>C(y,w),!1,!0);const{animationState:N}=this.visualElement;N&&N.setActive("whileDrag",!0)},l=(y,w)=>{const{dragPropagation:S,dragDirectionLock:E,onDirectionLock:C,onDrag:N}=this.getProps();if(!S&&!this.openGlobalLock)return;const{offset:I}=w;if(E&&this.currentDirection===null){this.currentDirection=H8(I),this.currentDirection!==null&&C&&C(this.currentDirection);return}this.updateAxis("x",w.point,I),this.updateAxis("y",w.point,I),this.visualElement.render(),N&&N(y,w)},d=(y,w)=>this.stop(y,w),f=()=>lr(y=>{var w;return this.getAnimationState(y)==="paused"&&((w=this.getAxisMotionValue(y).animation)===null||w===void 0?void 0:w.play())}),{dragSnapToOrigin:p}=this.getProps();this.panSession=new tT(e,{onSessionStart:i,onStart:o,onMove:l,onSessionEnd:d,resumeAnimation:f},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:p,contextWindow:oT(this.visualElement)})}stop(e,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:o}=this.getProps();o&&nt.update(()=>o(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,r){const{drag:i}=this.getProps();if(!r||!Yd(e,i,this.currentDirection))return;const o=this.getAxisMotionValue(e);let l=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(l=j8(l,this.constraints[e],this.elastic[e])),o.set(l)}resolveConstraints(){var e;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,o=this.constraints;n&&Fo(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=N8(i.layoutBox,n):this.constraints=!1,this.elastic=O8(r),o!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&lr(l=>{this.getAxisMotionValue(l)&&(this.constraints[l]=L8(i.layoutBox[l],this.constraints[l]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!Fo(e))return!1;const r=e.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const o=z8(r,i.root,this.visualElement.getTransformPagePoint());let l=D8(i.layout.layoutBox,o);if(n){const d=n(M8(l));this.hasMutatedConstraints=!!d,d&&(l=rT(d))}return l}startAnimation(e){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:o,dragSnapToOrigin:l,onDragTransitionEnd:d}=this.getProps(),f=this.constraints||{},p=lr(y=>{if(!Yd(y,n,this.currentDirection))return;let w=f&&f[y]||{};l&&(w={min:0,max:0});const S=i?200:1e6,E=i?40:1e7,C={type:"inertia",velocity:r?e[y]:0,bounceStiffness:S,bounceDamping:E,timeConstant:750,restDelta:1,restSpeed:10,...o,...w};return this.startAxisValueAnimation(y,C)});return Promise.all(p).then(d)}startAxisValueAnimation(e,n){const r=this.getAxisMotionValue(e);return r.start(a0(e,r,0,n))}stopAnimation(){lr(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){lr(e=>{var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(e){const n="_drag"+e.toUpperCase(),r=this.visualElement.getProps();return r[n]||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){lr(n=>{const{drag:r}=this.getProps();if(!Yd(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,o=this.getAxisMotionValue(n);if(i&&i.layout){const{min:l,max:d}=i.layout.layoutBox[n];o.set(e[n]-pt(l,d,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Fo(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};lr(l=>{const d=this.getAxisMotionValue(l);if(d){const f=d.get();i[l]=R8({min:f,max:f},this.constraints[l])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),lr(l=>{if(!Yd(l,e,null))return;const d=this.getAxisMotionValue(l),{min:f,max:p}=this.constraints[l];d.set(pt(f,p,i[l]))})}addListeners(){if(!this.visualElement.current)return;$8.set(this.visualElement,this);const e=this.visualElement.current,n=Is(e,"pointerdown",f=>{const{drag:p,dragListener:y=!0}=this.getProps();p&&y&&this.start(f)}),r=()=>{const{dragConstraints:f}=this.getProps();Fo(f)&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,o=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),r();const l=_s(window,"resize",()=>this.scalePositionWithinConstraints()),d=i.addEventListener("didUpdate",({delta:f,hasLayoutChanged:p})=>{this.isDragging&&p&&(lr(y=>{const w=this.getAxisMotionValue(y);w&&(this.originPoint[y]+=f[y].translate,w.set(w.get()+f[y].translate))}),this.visualElement.render())});return()=>{l(),n(),o(),d&&d()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:o=!1,dragElastic:l=vy,dragMomentum:d=!0}=e;return{...e,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:o,dragElastic:l,dragMomentum:d}}}function Yd(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function H8(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class W8 extends Ri{constructor(e){super(e),this.removeGroupControls=Et,this.removeListeners=Et,this.controls=new q8(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Et}unmount(){this.removeGroupControls(),this.removeListeners()}}const s2=t=>(e,n)=>{t&&nt.update(()=>t(e,n))};class G8 extends Ri{constructor(){super(...arguments),this.removePointerDownListener=Et}onPointerDown(e){this.session=new tT(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:oT(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:s2(e),onStart:s2(n),onMove:r,onEnd:(o,l)=>{delete this.session,i&&nt.update(()=>i(o,l))}}}mount(){this.removePointerDownListener=Is(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function K8(){const t=O.useContext(Kf);if(t===null)return[!0,null];const{isPresent:e,onExitComplete:n,register:r}=t,i=O.useId();return O.useEffect(()=>r(i),[]),!e&&n?[!1,()=>n&&n(i)]:[!0]}const Ih={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function i2(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const mu={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(_e.test(t))t=parseFloat(t);else return t;const n=i2(t,e.target.x),r=i2(t,e.target.y);return`${n}% ${r}%`}},Q8={correct:(t,{treeScale:e,projectionDelta:n})=>{const r=t,i=Pi.parse(t);if(i.length>5)return r;const o=Pi.createTransformer(t),l=typeof i[0]!="number"?1:0,d=n.x.scale*e.x,f=n.y.scale*e.y;i[0+l]/=d,i[1+l]/=f;const p=pt(d,f,.5);return typeof i[2+l]=="number"&&(i[2+l]/=p),typeof i[3+l]=="number"&&(i[3+l]/=p),o(i)}};class Y8 extends Fe.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:o}=e;rO(J8),o&&(n.group&&n.group.add(o),r&&r.register&&i&&r.register(o),o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),Ih.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:r,drag:i,isPresent:o}=this.props,l=r.projection;return l&&(l.isPresent=o,i||e.layoutDependency!==n||n===void 0?l.willUpdate():this.safeToRemove(),e.isPresent!==o&&(o?l.promote():l.relegate()||nt.postRender(()=>{const d=l.getStack();(!d||!d.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),queueMicrotask(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=e;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function lT(t){const[e,n]=K8(),r=O.useContext(Wv);return Fe.createElement(Y8,{...t,layoutGroup:r,switchLayoutGroup:O.useContext(r4),isPresent:e,safeToRemove:n})}const J8={borderRadius:{...mu,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:mu,borderTopRightRadius:mu,borderBottomLeftRadius:mu,borderBottomRightRadius:mu,boxShadow:Q8},uT=["TopLeft","TopRight","BottomLeft","BottomRight"],X8=uT.length,a2=t=>typeof t=="string"?parseFloat(t):t,o2=t=>typeof t=="number"||_e.test(t);function Z8(t,e,n,r,i,o){i?(t.opacity=pt(0,n.opacity!==void 0?n.opacity:1,e7(r)),t.opacityExit=pt(e.opacity!==void 0?e.opacity:1,0,t7(r))):o&&(t.opacity=pt(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let l=0;l<X8;l++){const d=`border${uT[l]}Radius`;let f=l2(e,d),p=l2(n,d);f===void 0&&p===void 0||(f||(f=0),p||(p=0),f===0||p===0||o2(f)===o2(p)?(t[d]=Math.max(pt(a2(f),a2(p),r),0),(es.test(p)||es.test(f))&&(t[d]+="%")):t[d]=p)}(e.rotate||n.rotate)&&(t.rotate=pt(e.rotate||0,n.rotate||0,r))}function l2(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const e7=cT(0,.5,N4),t7=cT(.5,.95,Et);function cT(t,e,n){return r=>r<t?0:r>e?1:n(nc(t,e,r))}function u2(t,e){t.min=e.min,t.max=e.max}function er(t,e){u2(t.x,e.x),u2(t.y,e.y)}function c2(t,e,n,r,i){return t-=e,t=uf(t,1/n,r),i!==void 0&&(t=uf(t,1/i,r)),t}function n7(t,e=0,n=1,r=.5,i,o=t,l=t){if(es.test(e)&&(e=parseFloat(e),e=pt(l.min,l.max,e/100)-l.min),typeof e!="number")return;let d=pt(o.min,o.max,r);t===o&&(d-=e),t.min=c2(t.min,e,n,d,i),t.max=c2(t.max,e,n,d,i)}function d2(t,e,[n,r,i],o,l){n7(t,e[n],e[r],e[i],e.scale,o,l)}const r7=["x","scaleX","originX"],s7=["y","scaleY","originY"];function h2(t,e,n,r){d2(t.x,e,r7,n?n.x:void 0,r?r.x:void 0),d2(t.y,e,s7,n?n.y:void 0,r?r.y:void 0)}function f2(t){return t.translate===0&&t.scale===1}function dT(t){return f2(t.x)&&f2(t.y)}function i7(t,e){return t.x.min===e.x.min&&t.x.max===e.x.max&&t.y.min===e.y.min&&t.y.max===e.y.max}function hT(t,e){return Math.round(t.x.min)===Math.round(e.x.min)&&Math.round(t.x.max)===Math.round(e.x.max)&&Math.round(t.y.min)===Math.round(e.y.min)&&Math.round(t.y.max)===Math.round(e.y.max)}function p2(t){return $n(t.x)/$n(t.y)}class a7{constructor(){this.members=[]}add(e){o0(this.members,e),e.scheduleRender()}remove(e){if(l0(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(i=>e===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const o=this.members[i];if(o.isPresent!==!1){r=o;break}}return r?(this.promote(r),!0):!1}promote(e,n){const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.instance&&r.scheduleRender(),e.scheduleRender(),e.resumeFrom=r,n&&(e.resumeFrom.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:i}=e.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:r}=e;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function m2(t,e,n){let r="";const i=t.x.translate/e.x,o=t.y.translate/e.y;if((i||o)&&(r=`translate3d(${i}px, ${o}px, 0) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),n){const{rotate:f,rotateX:p,rotateY:y}=n;f&&(r+=`rotate(${f}deg) `),p&&(r+=`rotateX(${p}deg) `),y&&(r+=`rotateY(${y}deg) `)}const l=t.x.scale*e.x,d=t.y.scale*e.y;return(l!==1||d!==1)&&(r+=`scale(${l}, ${d})`),r||"none"}const o7=(t,e)=>t.depth-e.depth;class l7{constructor(){this.children=[],this.isDirty=!1}add(e){o0(this.children,e),this.isDirty=!0}remove(e){l0(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(o7),this.isDirty=!1,this.children.forEach(e)}}function u7(t,e){const n=performance.now(),r=({timestamp:i})=>{const o=i-n;o>=e&&(Rs(r),t(o-e))};return nt.read(r,!0),()=>Rs(r)}function c7(t){window.MotionDebug&&window.MotionDebug.record(t)}function d7(t){return t instanceof SVGElement&&t.tagName!=="svg"}function h7(t,e,n){const r=jn(t)?t:ll(t);return r.start(a0("",r,e,n)),r.animation}const g2=["","X","Y","Z"],f7={visibility:"hidden"},y2=1e3;let p7=0;const fa={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function fT({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(o={},l=e==null?void 0:e()){this.id=p7++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,fa.totalNodes=fa.resolvedTargetDeltas=fa.recalculatedProjection=0,this.nodes.forEach(y7),this.nodes.forEach(S7),this.nodes.forEach(k7),this.nodes.forEach(v7),c7(fa)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=l?l.root||l:this,this.path=l?[...l.path,l]:[],this.parent=l,this.depth=l?l.depth+1:0;for(let d=0;d<this.path.length;d++)this.path[d].shouldResetTransform=!0;this.root===this&&(this.nodes=new l7)}addEventListener(o,l){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new u0),this.eventHandlers.get(o).add(l)}notifyListeners(o,...l){const d=this.eventHandlers.get(o);d&&d.notify(...l)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,l=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=d7(o),this.instance=o;const{layoutId:d,layout:f,visualElement:p}=this.options;if(p&&!p.current&&p.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),l&&(f||d)&&(this.isLayoutDirty=!0),t){let y;const w=()=>this.root.updateBlockedByResize=!1;t(o,()=>{this.root.updateBlockedByResize=!0,y&&y(),y=u7(w,250),Ih.hasAnimatedSinceResize&&(Ih.hasAnimatedSinceResize=!1,this.nodes.forEach(b2))})}d&&this.root.registerSharedNode(d,this),this.options.animate!==!1&&p&&(d||f)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:w,hasRelativeTargetChanged:S,layout:E})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const C=this.options.transition||p.getDefaultTransition()||I7,{onLayoutAnimationStart:N,onLayoutAnimationComplete:I}=p.getProps(),B=!this.targetLayout||!hT(this.targetLayout,E)||S,M=!w&&S;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||M||w&&(B||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(y,M);const $={...i0(C,"layout"),onPlay:N,onComplete:I};(p.shouldReduceMotion||this.options.layoutRoot)&&($.delay=0,$.type=!1),this.startAnimation($)}else w||b2(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=E})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Rs(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(E7),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let p=0;p<this.path.length;p++){const y=this.path[p];y.shouldResetTransform=!0,y.updateScroll("snapshot"),y.options.layoutRoot&&y.willUpdate(!1)}const{layoutId:l,layout:d}=this.options;if(l===void 0&&!d)return;const f=this.getTransformTemplate();this.prevTransformTemplateValue=f?f(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(v2);return}this.isUpdating||this.nodes.forEach(w7),this.isUpdating=!1,this.nodes.forEach(x7),this.nodes.forEach(m7),this.nodes.forEach(g7),this.clearAllSnapshots();const o=performance.now();on.delta=Ii(0,1e3/60,o-on.timestamp),on.timestamp=o,on.isProcessing=!0,Km.update.process(on),Km.preRender.process(on),Km.render.process(on),on.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(b7),this.sharedNodes.forEach(C7)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,nt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){nt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let d=0;d<this.path.length;d++)this.path[d].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=It(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:l}=this.options;l&&l.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let l=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(l=!1),l&&(this.scroll={animationId:this.root.animationId,phase:o,isRoot:r(this.instance),offset:n(this.instance)})}resetTransform(){if(!i)return;const o=this.isLayoutDirty||this.shouldResetTransform,l=this.projectionDelta&&!dT(this.projectionDelta),d=this.getTransformTemplate(),f=d?d(this.latestValues,""):void 0,p=f!==this.prevTransformTemplateValue;o&&(l||ha(this.latestValues)||p)&&(i(this.instance,f),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const l=this.measurePageBox();let d=this.removeElementScroll(l);return o&&(d=this.removeTransform(d)),P7(d),{animationId:this.root.animationId,measuredBox:l,layoutBox:d,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:o}=this.options;if(!o)return It();const l=o.measureViewportBox(),{scroll:d}=this.root;return d&&(ui(l.x,d.offset.x),ui(l.y,d.offset.y)),l}removeElementScroll(o){const l=It();er(l,o);for(let d=0;d<this.path.length;d++){const f=this.path[d],{scroll:p,options:y}=f;if(f!==this.root&&p&&y.layoutScroll){if(p.isRoot){er(l,o);const{scroll:w}=this.root;w&&(ui(l.x,-w.offset.x),ui(l.y,-w.offset.y))}ui(l.x,p.offset.x),ui(l.y,p.offset.y)}}return l}applyTransform(o,l=!1){const d=It();er(d,o);for(let f=0;f<this.path.length;f++){const p=this.path[f];!l&&p.options.layoutScroll&&p.scroll&&p!==p.root&&Bo(d,{x:-p.scroll.offset.x,y:-p.scroll.offset.y}),ha(p.latestValues)&&Bo(d,p.latestValues)}return ha(this.latestValues)&&Bo(d,this.latestValues),d}removeTransform(o){const l=It();er(l,o);for(let d=0;d<this.path.length;d++){const f=this.path[d];if(!f.instance||!ha(f.latestValues))continue;by(f.latestValues)&&f.updateSnapshot();const p=It(),y=f.measurePageBox();er(p,y),h2(l,f.latestValues,f.snapshot?f.snapshot.layoutBox:void 0,p)}return ha(this.latestValues)&&h2(l,this.latestValues),l}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==on.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var l;const d=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=d.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=d.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=d.isSharedProjectionDirty);const f=!!this.resumingFrom||this!==d;if(!(o||f&&this.isSharedProjectionDirty||this.isProjectionDirty||!((l=this.parent)===null||l===void 0)&&l.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:p,layoutId:y}=this.options;if(!(!this.layout||!(p||y))){if(this.resolvedRelativeTargetAt=on.timestamp,!this.targetDelta&&!this.relativeTarget){const w=this.getClosestProjectingParent();w&&w.layout&&this.animationProgress!==1?(this.relativeParent=w,this.forceRelativeParentToResolveTarget(),this.relativeTarget=It(),this.relativeTargetOrigin=It(),Uu(this.relativeTargetOrigin,this.layout.layoutBox,w.layout.layoutBox),er(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=It(),this.targetWithTransforms=It()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),A8(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):er(this.target,this.layout.layoutBox),iT(this.target,this.targetDelta)):er(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const w=this.getClosestProjectingParent();w&&!!w.resumingFrom==!!this.resumingFrom&&!w.options.layoutScroll&&w.target&&this.animationProgress!==1?(this.relativeParent=w,this.forceRelativeParentToResolveTarget(),this.relativeTarget=It(),this.relativeTargetOrigin=It(),Uu(this.relativeTargetOrigin,this.target,w.target),er(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}fa.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||by(this.parent.latestValues)||sT(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const l=this.getLead(),d=!!this.resumingFrom||this!==l;let f=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(f=!1),d&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(f=!1),this.resolvedRelativeTargetAt===on.timestamp&&(f=!1),f)return;const{layout:p,layoutId:y}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(p||y))return;er(this.layoutCorrected,this.layout.layoutBox);const w=this.treeScale.x,S=this.treeScale.y;U8(this.layoutCorrected,this.treeScale,this.path,d),l.layout&&!l.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(l.target=l.layout.layoutBox);const{target:E}=l;if(!E){this.projectionTransform&&(this.projectionDelta=Vo(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=Vo(),this.projectionDeltaWithTransform=Vo());const C=this.projectionTransform;Fu(this.projectionDelta,this.layoutCorrected,E,this.latestValues),this.projectionTransform=m2(this.projectionDelta,this.treeScale),(this.projectionTransform!==C||this.treeScale.x!==w||this.treeScale.y!==S)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",E)),fa.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(o,l=!1){const d=this.snapshot,f=d?d.latestValues:{},p={...this.latestValues},y=Vo();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!l;const w=It(),S=d?d.source:void 0,E=this.layout?this.layout.source:void 0,C=S!==E,N=this.getStack(),I=!N||N.members.length<=1,B=!!(C&&!I&&this.options.crossfade===!0&&!this.path.some(_7));this.animationProgress=0;let M;this.mixTargetDelta=$=>{const L=$/1e3;w2(y.x,o.x,L),w2(y.y,o.y,L),this.setTargetDelta(y),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Uu(w,this.layout.layoutBox,this.relativeParent.layout.layoutBox),T7(this.relativeTarget,this.relativeTargetOrigin,w,L),M&&i7(this.relativeTarget,M)&&(this.isProjectionDirty=!1),M||(M=It()),er(M,this.relativeTarget)),C&&(this.animationValues=p,Z8(p,f,this.latestValues,L,B,I)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=L},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Rs(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=nt.update(()=>{Ih.hasAnimatedSinceResize=!0,this.currentAnimation=h7(0,y2,{...o,onUpdate:l=>{this.mixTargetDelta(l),o.onUpdate&&o.onUpdate(l)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(y2),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:l,target:d,layout:f,latestValues:p}=o;if(!(!l||!d||!f)){if(this!==o&&this.layout&&f&&pT(this.options.animationType,this.layout.layoutBox,f.layoutBox)){d=this.target||It();const y=$n(this.layout.layoutBox.x);d.x.min=o.target.x.min,d.x.max=d.x.min+y;const w=$n(this.layout.layoutBox.y);d.y.min=o.target.y.min,d.y.max=d.y.min+w}er(l,d),Bo(l,p),Fu(this.projectionDeltaWithTransform,this.layoutCorrected,l,p)}}registerSharedNode(o,l){this.sharedNodes.has(o)||this.sharedNodes.set(o,new a7),this.sharedNodes.get(o).add(l);const d=l.options.initialPromotionConfig;l.promote({transition:d?d.transition:void 0,preserveFollowOpacity:d&&d.shouldPreserveFollowOpacity?d.shouldPreserveFollowOpacity(l):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:l}=this.options;return l?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:l}=this.options;return l?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:l,preserveFollowOpacity:d}={}){const f=this.getStack();f&&f.promote(this,d),o&&(this.projectionDelta=void 0,this.needsReset=!0),l&&this.setOptions({transition:l})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetRotation(){const{visualElement:o}=this.options;if(!o)return;let l=!1;const{latestValues:d}=o;if((d.rotate||d.rotateX||d.rotateY||d.rotateZ)&&(l=!0),!l)return;const f={};for(let p=0;p<g2.length;p++){const y="rotate"+g2[p];d[y]&&(f[y]=d[y],o.setStaticValue(y,0))}o.render();for(const p in f)o.setStaticValue(p,f[p]);o.scheduleRender()}getProjectionStyles(o){var l,d;if(!this.instance||this.isSVG)return;if(!this.isVisible)return f7;const f={visibility:""},p=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,f.opacity="",f.pointerEvents=_h(o==null?void 0:o.pointerEvents)||"",f.transform=p?p(this.latestValues,""):"none",f;const y=this.getLead();if(!this.projectionDelta||!this.layout||!y.target){const C={};return this.options.layoutId&&(C.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,C.pointerEvents=_h(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!ha(this.latestValues)&&(C.transform=p?p({},""):"none",this.hasProjected=!1),C}const w=y.animationValues||y.latestValues;this.applyTransformsToTarget(),f.transform=m2(this.projectionDeltaWithTransform,this.treeScale,w),p&&(f.transform=p(w,f.transform));const{x:S,y:E}=this.projectionDelta;f.transformOrigin=`${S.origin*100}% ${E.origin*100}% 0`,y.animationValues?f.opacity=y===this?(d=(l=w.opacity)!==null&&l!==void 0?l:this.latestValues.opacity)!==null&&d!==void 0?d:1:this.preserveOpacity?this.latestValues.opacity:w.opacityExit:f.opacity=y===this?w.opacity!==void 0?w.opacity:"":w.opacityExit!==void 0?w.opacityExit:0;for(const C in tf){if(w[C]===void 0)continue;const{correct:N,applyTo:I}=tf[C],B=f.transform==="none"?w[C]:N(w[C],y);if(I){const M=I.length;for(let $=0;$<M;$++)f[I[$]]=B}else f[C]=B}return this.options.layoutId&&(f.pointerEvents=y===this?_h(o==null?void 0:o.pointerEvents)||"":"none"),f}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var l;return(l=o.currentAnimation)===null||l===void 0?void 0:l.stop()}),this.root.nodes.forEach(v2),this.root.sharedNodes.clear()}}}function m7(t){t.updateLayout()}function g7(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=t.layout,{animationType:o}=t.options,l=n.source!==t.layout.source;o==="size"?lr(w=>{const S=l?n.measuredBox[w]:n.layoutBox[w],E=$n(S);S.min=r[w].min,S.max=S.min+E}):pT(o,n.layoutBox,r)&&lr(w=>{const S=l?n.measuredBox[w]:n.layoutBox[w],E=$n(r[w]);S.max=S.min+E,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[w].max=t.relativeTarget[w].min+E)});const d=Vo();Fu(d,r,n.layoutBox);const f=Vo();l?Fu(f,t.applyTransform(i,!0),n.measuredBox):Fu(f,r,n.layoutBox);const p=!dT(d);let y=!1;if(!t.resumeFrom){const w=t.getClosestProjectingParent();if(w&&!w.resumeFrom){const{snapshot:S,layout:E}=w;if(S&&E){const C=It();Uu(C,n.layoutBox,S.layoutBox);const N=It();Uu(N,r,E.layoutBox),hT(C,N)||(y=!0),w.options.layoutRoot&&(t.relativeTarget=N,t.relativeTargetOrigin=C,t.relativeParent=w)}}}t.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:f,layoutDelta:d,hasLayoutChanged:p,hasRelativeTargetChanged:y})}else if(t.isLead()){const{onExitComplete:r}=t.options;r&&r()}t.options.transition=void 0}function y7(t){fa.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function v7(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function b7(t){t.clearSnapshot()}function v2(t){t.clearMeasurements()}function w7(t){t.isLayoutDirty=!1}function x7(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function b2(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function S7(t){t.resolveTargetDelta()}function k7(t){t.calcProjection()}function E7(t){t.resetRotation()}function C7(t){t.removeLeadSnapshot()}function w2(t,e,n){t.translate=pt(e.translate,0,n),t.scale=pt(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function x2(t,e,n,r){t.min=pt(e.min,n.min,r),t.max=pt(e.max,n.max,r)}function T7(t,e,n,r){x2(t.x,e.x,n.x,r),x2(t.y,e.y,n.y,r)}function _7(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const I7={duration:.45,ease:[.4,0,.1,1]},S2=t=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(t),k2=S2("applewebkit/")&&!S2("chrome/")?Math.round:Et;function E2(t){t.min=k2(t.min),t.max=k2(t.max)}function P7(t){E2(t.x),E2(t.y)}function pT(t,e,n){return t==="position"||t==="preserve-aspect"&&!yy(p2(e),p2(n),.2)}const A7=fT({attachResizeListener:(t,e)=>_s(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),sg={current:void 0},mT=fT({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!sg.current){const t=new A7({});t.mount(window),t.setOptions({layoutScroll:!0}),sg.current=t}return sg.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),j7={pan:{Feature:G8},drag:{Feature:W8,ProjectionNode:mT,MeasureLayout:lT}},N7=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function D7(t){const e=N7.exec(t);if(!e)return[,];const[,n,r]=e;return[n,r]}function xy(t,e,n=1){const[r,i]=D7(t);if(!r)return;const o=window.getComputedStyle(e).getPropertyValue(r);if(o){const l=o.trim();return J4(l)?parseFloat(l):l}else return cy(i)?xy(i,e,n+1):i}function R7(t,{...e},n){const r=t.current;if(!(r instanceof Element))return{target:e,transitionEnd:n};n&&(n={...n}),t.values.forEach(i=>{const o=i.get();if(!cy(o))return;const l=xy(o,r);l&&i.set(l)});for(const i in e){const o=e[i];if(!cy(o))continue;const l=xy(o,r);l&&(e[i]=l,n||(n={}),n[i]===void 0&&(n[i]=o))}return{target:e,transitionEnd:n}}const L7=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),gT=t=>L7.has(t),O7=t=>Object.keys(t).some(gT),C2=t=>t===Ua||t===_e,T2=(t,e)=>parseFloat(t.split(", ")[e]),_2=(t,e)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/);if(i)return T2(i[1],e);{const o=r.match(/^matrix\((.+)\)$/);return o?T2(o[1],t):0}},M7=new Set(["x","y","z"]),F7=yc.filter(t=>!M7.has(t));function U7(t){const e=[];return F7.forEach(n=>{const r=t.getValue(n);r!==void 0&&(e.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),e.length&&t.render(),e}const ul={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:_2(4,13),y:_2(5,14)};ul.translateX=ul.x;ul.translateY=ul.y;const V7=(t,e,n)=>{const r=e.measureViewportBox(),i=e.current,o=getComputedStyle(i),{display:l}=o,d={};l==="none"&&e.setStaticValue("display",t.display||"block"),n.forEach(p=>{d[p]=ul[p](r,o)}),e.render();const f=e.measureViewportBox();return n.forEach(p=>{const y=e.getValue(p);y&&y.jump(d[p]),t[p]=ul[p](f,o)}),t},B7=(t,e,n={},r={})=>{e={...e},r={...r};const i=Object.keys(e).filter(gT);let o=[],l=!1;const d=[];if(i.forEach(f=>{const p=t.getValue(f);if(!t.hasValue(f))return;let y=n[f],w=pu(y);const S=e[f];let E;if(rf(S)){const C=S.length,N=S[0]===null?1:0;y=S[N],w=pu(y);for(let I=N;I<C&&S[I]!==null;I++)E?e0(pu(S[I])===E):E=pu(S[I])}else E=pu(S);if(w!==E)if(C2(w)&&C2(E)){const C=p.get();typeof C=="string"&&p.set(parseFloat(C)),typeof S=="string"?e[f]=parseFloat(S):Array.isArray(S)&&E===_e&&(e[f]=S.map(parseFloat))}else w!=null&&w.transform&&E!=null&&E.transform&&(y===0||S===0)?y===0?p.set(E.transform(y)):e[f]=w.transform(S):(l||(o=U7(t),l=!0),d.push(f),r[f]=r[f]!==void 0?r[f]:e[f],p.jump(S))}),d.length){const f=d.indexOf("height")>=0?window.pageYOffset:null,p=V7(e,t,d);return o.length&&o.forEach(([y,w])=>{t.getValue(y).set(w)}),t.render(),Qf&&f!==null&&window.scrollTo({top:f}),{target:p,transitionEnd:r}}else return{target:e,transitionEnd:r}};function z7(t,e,n,r){return O7(e)?B7(t,e,n,r):{target:e,transitionEnd:r}}const $7=(t,e,n,r)=>{const i=R7(t,e,r);return e=i.target,r=i.transitionEnd,z7(t,e,n,r)},Sy={current:null},yT={current:!1};function q7(){if(yT.current=!0,!!Qf)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Sy.current=t.matches;t.addListener(e),e()}else Sy.current=!1}function H7(t,e,n){const{willChange:r}=e;for(const i in e){const o=e[i],l=n[i];if(jn(o))t.addValue(i,o),lf(r)&&r.add(i);else if(jn(l))t.addValue(i,ll(o,{owner:t})),lf(r)&&r.remove(i);else if(l!==o)if(t.hasValue(i)){const d=t.getValue(i);!d.hasAnimated&&d.set(o)}else{const d=t.getStaticValue(i);t.addValue(i,ll(d!==void 0?d:o,{owner:t}))}}for(const i in n)e[i]===void 0&&t.removeValue(i);return e}const I2=new WeakMap,vT=Object.keys(tc),W7=vT.length,P2=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],G7=Hv.length;class K7{constructor({parent:e,props:n,presenceContext:r,reducedMotionConfig:i,visualState:o},l={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>nt.render(this.render,!1,!0);const{latestValues:d,renderState:f}=o;this.latestValues=d,this.baseTarget={...d},this.initialValues=n.initial?{...d}:{},this.renderState=f,this.parent=e,this.props=n,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=i,this.options=l,this.isControllingVariants=Jf(n),this.isVariantNode=n4(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:p,...y}=this.scrapeMotionValuesFromProps(n,{});for(const w in y){const S=y[w];d[w]!==void 0&&jn(S)&&(S.set(d[w],!1),lf(p)&&p.add(w))}}scrapeMotionValuesFromProps(e,n){return{}}mount(e){this.current=e,I2.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),yT.current||q7(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Sy.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){I2.delete(this.current),this.projection&&this.projection.unmount(),Rs(this.notifyUpdate),Rs(this.render),this.valueSubscriptions.forEach(e=>e()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features)this.features[e].unmount();this.current=null}bindToMotionValue(e,n){const r=Fa.has(e),i=n.on("change",l=>{this.latestValues[e]=l,this.props.onUpdate&&nt.update(this.notifyUpdate,!1,!0),r&&this.projection&&(this.projection.isTransformDirty=!0)}),o=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(e,()=>{i(),o()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}loadFeatures({children:e,...n},r,i,o){let l,d;for(let f=0;f<W7;f++){const p=vT[f],{isEnabled:y,Feature:w,ProjectionNode:S,MeasureLayout:E}=tc[p];S&&(l=S),y(n)&&(!this.features[p]&&w&&(this.features[p]=new w(this)),E&&(d=E))}if((this.type==="html"||this.type==="svg")&&!this.projection&&l){this.projection=new l(this.latestValues,this.parent&&this.parent.projection);const{layoutId:f,layout:p,drag:y,dragConstraints:w,layoutScroll:S,layoutRoot:E}=n;this.projection.setOptions({layoutId:f,layout:p,alwaysMeasureLayout:!!y||w&&Fo(w),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof p=="string"?p:"both",initialPromotionConfig:o,layoutScroll:S,layoutRoot:E})}return d}updateFeatures(){for(const e in this.features){const n=this.features[e];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):It()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}makeTargetAnimatable(e,n=!0){return this.makeTargetAnimatableFromInstance(e,this.props,n)}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<P2.length;r++){const i=P2[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const o=e["on"+i];o&&(this.propEventSubscriptions[i]=this.on(i,o))}this.prevMotionValues=H7(this,this.scrapeMotionValuesFromProps(e,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(e=!1){if(e)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const r=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(r.initial=this.props.initial),r}const n={};for(let r=0;r<G7;r++){const i=Hv[r],o=this.props[i];(ec(o)||o===!1)&&(n[i]=o)}return n}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){n!==this.values.get(e)&&(this.removeValue(e),this.bindToMotionValue(e,n)),this.values.set(e,n),this.latestValues[e]=n.get()}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&n!==void 0&&(r=ll(n,{owner:this}),this.addValue(e,r)),r}readValue(e){var n;return this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(n=this.getBaseTargetFromProps(this.props,e))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,e,this.options)}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:r}=this.props,i=typeof r=="string"||typeof r=="object"?(n=Zv(this.props,r))===null||n===void 0?void 0:n[e]:void 0;if(r&&i!==void 0)return i;const o=this.getBaseTargetFromProps(this.props,e);return o!==void 0&&!jn(o)?o:this.initialValues[e]!==void 0&&i===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new u0),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class bT extends K7{sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:r}){delete n[e],delete r[e]}makeTargetAnimatableFromInstance({transition:e,transitionEnd:n,...r},{transformValues:i},o){let l=d8(r,e||{},this);if(i&&(n&&(n=i(n)),r&&(r=i(r)),l&&(l=i(l))),o){u8(this,r,l);const d=$7(this,r,l,n);n=d.transitionEnd,r=d.target}return{transition:e,transitionEnd:n,...r}}}function Q7(t){return window.getComputedStyle(t)}class Y7 extends bT{constructor(){super(...arguments),this.type="html"}readValueFromInstance(e,n){if(Fa.has(n)){const r=s0(n);return r&&r.default||0}else{const r=Q7(e),i=(a4(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(e,{transformPagePoint:n}){return aT(e,n)}build(e,n,r,i){Kv(e,n,r,i.transformTemplate)}scrapeMotionValuesFromProps(e,n){return Xv(e,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;jn(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(e,n,r,i){h4(e,n,r,i)}}class J7 extends bT{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(Fa.has(n)){const r=s0(n);return r&&r.default||0}return n=f4.has(n)?n:$v(n),e.getAttribute(n)}measureInstanceViewportBox(){return It()}scrapeMotionValuesFromProps(e,n){return m4(e,n)}build(e,n,r,i){Yv(e,n,r,this.isSVGTag,i.transformTemplate)}renderInstance(e,n,r,i){p4(e,n,r,i)}mount(e){this.isSVGTag=Jv(e.tagName),super.mount(e)}}const X7=(t,e)=>Gv(t)?new J7(e,{enableHardwareAcceleration:!1}):new Y7(e,{enableHardwareAcceleration:!0}),Z7={layout:{ProjectionNode:mT,MeasureLayout:lT}},eF={...T8,...WO,...j7,...Z7},ss=tO((t,e)=>DO(t,e,eF,X7));function wT(){const t=O.useRef(!1);return zv(()=>(t.current=!0,()=>{t.current=!1}),[]),t}function tF(){const t=wT(),[e,n]=O.useState(0),r=O.useCallback(()=>{t.current&&n(e+1)},[e]);return[O.useCallback(()=>nt.postRender(r),[r]),e]}class nF extends O.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function rF({children:t,isPresent:e}){const n=O.useId(),r=O.useRef(null),i=O.useRef({width:0,height:0,top:0,left:0});return O.useInsertionEffect(()=>{const{width:o,height:l,top:d,left:f}=i.current;if(e||!r.current||!o||!l)return;r.current.dataset.motionPopId=n;const p=document.createElement("style");return document.head.appendChild(p),p.sheet&&p.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${l}px !important;
            top: ${d}px !important;
            left: ${f}px !important;
          }
        `),()=>{document.head.removeChild(p)}},[e]),O.createElement(nF,{isPresent:e,childRef:r,sizeRef:i},O.cloneElement(t,{ref:r}))}const ig=({children:t,initial:e,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:o,mode:l})=>{const d=g4(sF),f=O.useId(),p=O.useMemo(()=>({id:f,initial:e,isPresent:n,custom:i,onExitComplete:y=>{d.set(y,!0);for(const w of d.values())if(!w)return;r&&r()},register:y=>(d.set(y,!1),()=>d.delete(y))}),o?void 0:[n]);return O.useMemo(()=>{d.forEach((y,w)=>d.set(w,!1))},[n]),O.useEffect(()=>{!n&&!d.size&&r&&r()},[n]),l==="popLayout"&&(t=O.createElement(rF,{isPresent:n},t)),O.createElement(Kf.Provider,{value:p},t)};function sF(){return new Map}function iF(t){return O.useEffect(()=>()=>t(),[])}const pa=t=>t.key||"";function aF(t,e){t.forEach(n=>{const r=pa(n);e.set(r,n)})}function oF(t){const e=[];return O.Children.forEach(t,n=>{O.isValidElement(n)&&e.push(n)}),e}const lF=({children:t,custom:e,initial:n=!0,onExitComplete:r,exitBeforeEnter:i,presenceAffectsLayout:o=!0,mode:l="sync"})=>{const d=O.useContext(Wv).forceRender||tF()[0],f=wT(),p=oF(t);let y=p;const w=O.useRef(new Map).current,S=O.useRef(y),E=O.useRef(new Map).current,C=O.useRef(!0);if(zv(()=>{C.current=!1,aF(p,E),S.current=y}),iF(()=>{C.current=!0,E.clear(),w.clear()}),C.current)return O.createElement(O.Fragment,null,y.map(M=>O.createElement(ig,{key:pa(M),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:o,mode:l},M)));y=[...y];const N=S.current.map(pa),I=p.map(pa),B=N.length;for(let M=0;M<B;M++){const $=N[M];I.indexOf($)===-1&&!w.has($)&&w.set($,void 0)}return l==="wait"&&w.size&&(y=[]),w.forEach((M,$)=>{if(I.indexOf($)!==-1)return;const L=E.get($);if(!L)return;const W=N.indexOf($);let Z=M;if(!Z){const P=()=>{w.delete($);const _=Array.from(E.keys()).filter(A=>!I.includes(A));if(_.forEach(A=>E.delete(A)),S.current=p.filter(A=>{const F=pa(A);return F===$||_.includes(F)}),!w.size){if(f.current===!1)return;d(),r&&r()}};Z=O.createElement(ig,{key:pa(L),isPresent:!1,onExitComplete:P,custom:e,presenceAffectsLayout:o,mode:l},L),w.set($,Z)}y.splice(W,0,Z)}),y=y.map(M=>{const $=M.key;return w.has($)?M:O.createElement(ig,{key:pa(M),isPresent:!0,presenceAffectsLayout:o,mode:l},M)}),O.createElement(O.Fragment,null,w.size?y:y.map(M=>O.cloneElement(M)))},uF=U.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--header-height);
  background-color: var(--color-foreground);
  box-shadow: var(--shadow-sm);
  z-index: 100;
  transition: background-color var(--transition-base);
`,cF=U.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 2rem;
`,dF=U(fr)`
  font-weight: 700;
  font-size: 1.5rem;
  color: var(--color-text);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  span {
    color: var(--color-primary);
  }
  
  &:hover {
    color: var(--color-text);
  }
`,hF=U.nav`
  @media (max-width: 768px) {
    display: none;
  }
`,fF=U.ul`
  display: flex;
  gap: 1.5rem;
  list-style: none;
`,pF=U.li`
  position: relative;
`,mF=U(fr)`
  color: ${t=>t.$isActive?"var(--color-primary)":"var(--color-text)"};
  font-weight: ${t=>t.$isActive?"600":"400"};
  transition: color var(--transition-base);
  
  &:hover {
    color: var(--color-primary);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--color-primary);
    transform: scaleX(${t=>t.$isActive?1:0});
    transform-origin: bottom right;
    transition: transform 0.3s ease;
  }
  
  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`,gF=U.button`
  background: none;
  border: none;
  color: var(--color-text);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color var(--transition-base);
  
  &:hover {
    background-color: var(--color-border);
  }
`,yF=U.button`
  background: none;
  border: none;
  color: var(--color-text);
  font-size: 1.5rem;
  display: none;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,vF=U(ss.div)`
  position: fixed;
  top: var(--header-height);
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--color-foreground);
  padding: 2rem;
  z-index: 99;
`,bF=U.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,wF=U(fr)`
  color: ${t=>t.$isActive?"var(--color-primary)":"var(--color-text)"};
  font-weight: ${t=>t.$isActive?"600":"400"};
  font-size: 1.25rem;
  transition: color var(--transition-base);
  
  &:hover {
    color: var(--color-primary);
  }
`,xF=()=>{const[t,e]=O.useState(!1),{theme:n,toggleTheme:r}=Rv(),i=Ai();O.useEffect(()=>{e(!1)},[i]),O.useEffect(()=>(t?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[t]);const o=()=>e(!t),l=[{path:"/",label:"Home"},{path:"/projects",label:"Projects"},{path:"/research",label:"Research"},{path:"/blog",label:"Blog"},{path:"/contact",label:"Contact"}];return m.jsxs(uF,{children:[m.jsxs(cF,{children:[m.jsxs(dF,{to:"/",children:["Abdo",m.jsx("span",{children:"Alatrash"})]}),m.jsx(hF,{children:m.jsx(fF,{children:l.map(d=>m.jsx(pF,{children:m.jsx(mF,{to:d.path,$isActive:i.pathname===d.path,children:d.label})},d.path))})}),m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[m.jsx(gF,{onClick:r,children:n==="light"?m.jsx(JC,{size:18}):m.jsx(XC,{size:18})}),m.jsx(yF,{onClick:o,children:t?m.jsx(HL,{}):m.jsx(QC,{})})]})]}),m.jsx(lF,{children:t&&m.jsx(vF,{initial:{y:"-100%"},animate:{y:0},exit:{y:"-100%"},transition:{duration:.3},children:m.jsx(bF,{children:l.map(d=>m.jsx("li",{children:m.jsx(wF,{to:d.path,$isActive:i.pathname===d.path,onClick:()=>e(!1),children:d.label})},d.path))})})})]})},SF=U.footer`
  background-color: var(--color-foreground);
  color: var(--color-text);
  padding: 4rem 0 2rem;
  border-top: 1px solid var(--color-border);
`,kF=U.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`,Jd=U.div`
  display: flex;
  flex-direction: column;
`,Xd=U.h3`
  color: var(--color-text);
  margin-bottom: 1.5rem;
  font-size: 1.25rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 40px;
    height: 3px;
    background-color: var(--color-primary);
  }
`,A2=U.nav`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,gu=U(fr)`
  color: var(--color-text-light);
  transition: color var(--transition-base);
  
  &:hover {
    color: var(--color-primary);
  }
`,ca=U.a`
  color: var(--color-text-light);
  transition: color var(--transition-base);
  
  &:hover {
    color: var(--color-primary);
  }
`,EF=U.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`,yu=U.a`
  color: var(--color-text-light);
  font-size: 1.5rem;
  transition: color var(--transition-base);
  
  &:hover {
    color: var(--color-primary);
  }
`,CF=U.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  border-top: 1px solid var(--color-border);
  margin-top: 3rem;
  color: var(--color-text-light);
  font-size: 0.875rem;
`,TF=()=>m.jsxs(SF,{children:[m.jsxs(kF,{children:[m.jsxs(Jd,{children:[m.jsx(Xd,{children:"Abdo Alatrash"}),m.jsx("p",{children:"Machine Learning Engineer & Data Scientist specializing in physics-informed ML approaches."}),m.jsxs(EF,{children:[m.jsx(yu,{href:"https://github.com/abdo544445",target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub",children:m.jsx(Bv,{})}),m.jsx(yu,{href:"https://linkedin.com/in/abdo-alatrash",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",children:m.jsx(GC,{})}),m.jsx(yu,{href:"https://twitter.com/abdoalatrash",target:"_blank",rel:"noopener noreferrer","aria-label":"Twitter",children:m.jsx(NL,{})}),m.jsx(yu,{href:"https://researchgate.net/profile/Abdo-Alatrash",target:"_blank",rel:"noopener noreferrer","aria-label":"ResearchGate",children:m.jsx(jL,{})}),m.jsx(yu,{href:"https://scholar.google.com/citations?user=abdo-alatrash",target:"_blank",rel:"noopener noreferrer","aria-label":"Google Scholar",children:m.jsx(OL,{})})]})]}),m.jsxs(Jd,{children:[m.jsx(Xd,{children:"Navigation"}),m.jsxs(A2,{children:[m.jsx(gu,{to:"/",children:"Home"}),m.jsx(gu,{to:"/projects",children:"Projects"}),m.jsx(gu,{to:"/research",children:"Research"}),m.jsx(gu,{to:"/blog",children:"Blog"}),m.jsx(gu,{to:"/contact",children:"Contact"})]})]}),m.jsxs(Jd,{children:[m.jsx(Xd,{children:"Research Interests"}),m.jsxs(A2,{children:[m.jsx(ca,{href:"#physics-ml",children:"Physics-Informed ML"}),m.jsx(ca,{href:"#data-visualization",children:"Data Visualization"}),m.jsx(ca,{href:"#nlp",children:"Natural Language Processing"}),m.jsx(ca,{href:"#deep-learning",children:"Deep Learning"})]})]}),m.jsxs(Jd,{children:[m.jsx(Xd,{children:"Contact"}),m.jsx("p",{children:"Feel free to reach out for collaborations or inquiries."}),m.jsx(ca,{href:"mailto:abdoforanything1@gmail.com",children:"abdoforanything1@gmail.com"}),m.jsx(ca,{href:"tel:+201119173529",style:{display:"block",marginTop:"0.5rem"},children:"+20 1119173529"}),m.jsx(ca,{href:"https://wa.me/201119173529",style:{display:"block",marginTop:"0.5rem"},children:"WhatsApp"}),m.jsx("p",{style:{marginTop:"0.5rem"},children:"Remote / Cairo, Egypt"})]})]}),m.jsx(CF,{children:m.jsxs("p",{children:["© ",new Date().getFullYear()," Abdo Alatrash. All rights reserved."]})})]}),_F=U.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`,IF=U.main`
  flex: 1;
  padding-top: var(--header-height);
`,PF=()=>m.jsxs(_F,{children:[m.jsx(xF,{}),m.jsx(IF,{children:m.jsx(vS,{})}),m.jsx(TF,{})]}),xT=O.createContext(void 0),AF=({children:t})=>{const[e,n]=O.useState(null),[r,i]=O.useState(!0),[o,l]=O.useState(!1);O.useEffect(()=>{const f=A6(Ru,p=>{n(p),l(p?p.email==="abdoforanything1@gmail.com":!1),i(!1)});return()=>f()},[]);const d={user:e,loading:r,signInWithGoogle:async()=>{try{await pk(Ru,yC)}catch(f){console.error("Error signing in with Google:",f)}},signOut:async()=>{try{await j6(Ru)}catch(f){console.error("Error signing out:",f)}},isAdmin:o};return m.jsx(xT.Provider,{value:d,children:!r&&t})},ST=()=>{const t=O.useContext(xT);if(t===void 0)throw new Error("useAuth must be used within an AuthProvider");return t},jF=U.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  height: 100%;
`,NF=U.h1`
  font-size: 1.25rem;
  color: var(--color-text);
  margin: 0;
`,DF=U.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,ky=U.button`
  background: none;
  border: none;
  color: var(--color-text);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color var(--transition-base);
  
  &:hover {
    background-color: var(--color-border);
  }
`,RF=U.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,LF=U.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: var(--color-primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`,OF=U.span`
  color: var(--color-text);
  font-weight: 500;
  
  @media (max-width: 768px) {
    display: none;
  }
`,MF=U(ky)`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
  }
`,FF=()=>{const{user:t,signOut:e}=ST(),{theme:n,toggleTheme:r}=Rv(),[i,o]=O.useState(!1),l=()=>{o(!i);const f=new CustomEvent("toggleSidebar",{detail:{isOpen:!i}});window.dispatchEvent(f)},d=f=>f?f.charAt(0).toUpperCase():"A";return m.jsxs(jF,{children:[m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[m.jsx(MF,{onClick:l,children:m.jsx(QC,{})}),m.jsx(NF,{children:"Admin Dashboard"})]}),m.jsxs(DF,{children:[m.jsx(ky,{onClick:r,children:n==="light"?m.jsx(JC,{size:18}):m.jsx(XC,{size:18})}),m.jsx(RF,{children:t&&m.jsxs(m.Fragment,{children:[m.jsx(LF,{children:d(t.displayName||"")}),m.jsx(OF,{children:t.displayName||"Admin"})]})}),m.jsx(ky,{onClick:e,children:m.jsx(qL,{size:18})})]})]})},UF=U.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  height: 100%;
  transition: transform 0.3s ease;
  
  @media (max-width: 768px) {
    position: fixed;
    top: 60px; /* Header height */
    left: 0;
    width: 250px;
    bottom: 0;
    background: var(--color-foreground);
    z-index: 99;
    transform: translateX(${t=>t.$isOpen?"0":"-100%"});
    box-shadow: ${t=>t.$isOpen?"var(--shadow-lg)":"none"};
  }
`,VF=U.div`
  padding: 0 1.5rem 1.5rem;
  border-bottom: 1px solid var(--color-border);
  margin-bottom: 1.5rem;
  
  h2 {
    font-size: 1.25rem;
    color: var(--color-primary);
    margin: 0;
  }
  
  p {
    font-size: 0.875rem;
    color: var(--color-text-light);
    margin: 0;
  }
`,BF=U.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0 1rem;
  flex: 1;
`,zF=U(G5)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 1rem;
  border-radius: var(--radius-md);
  color: var(--color-text);
  transition: background-color var(--transition-base);
  
  &:hover {
    background-color: var(--color-border);
    color: var(--color-text);
  }
  
  &.active {
    background-color: var(--color-primary);
    color: white;
    
    .icon {
      color: white;
    }
  }
  
  .icon {
    color: var(--color-text-light);
    transition: color var(--transition-base);
  }
`,$F=[{path:"/admin",label:"Dashboard",icon:m.jsx(ML,{className:"icon"})},{path:"/admin/projects",label:"Projects",icon:m.jsx(FL,{className:"icon"})},{path:"/admin/skills",label:"Skills",icon:m.jsx(RL,{className:"icon"})},{path:"/admin/research",label:"Research",icon:m.jsx(LL,{className:"icon"})},{path:"/admin/blog",label:"Blog",icon:m.jsx(BL,{className:"icon"})},{path:"/admin/contact",label:"Messages",icon:m.jsx(YC,{className:"icon"})}],qF=()=>{const[t,e]=O.useState(!1),n=Ai();return O.useEffect(()=>{const r=i=>{e(i.detail.isOpen)};return window.addEventListener("toggleSidebar",r),()=>{window.removeEventListener("toggleSidebar",r)}},[]),O.useEffect(()=>{e(!1)},[n]),m.jsxs(UF,{$isOpen:t,children:[m.jsxs(VF,{children:[m.jsx("h2",{children:"Portfolio Admin"}),m.jsx("p",{children:"Manage your content"})]}),m.jsx(BF,{children:$F.map(r=>m.jsxs(zF,{to:r.path,end:r.path==="/admin",children:[r.icon,r.label]},r.path))})]})},HF=U.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: 60px 1fr;
  grid-template-areas:
    "header header"
    "sidebar content";
  min-height: 100vh;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "content";
  }
`,WF=U.header`
  grid-area: header;
  box-shadow: var(--shadow-sm);
  background: var(--color-foreground);
  z-index: 10;
`,GF=U.aside`
  grid-area: sidebar;
  background: var(--color-foreground);
  border-right: 1px solid var(--color-border);
  overflow-y: auto;
  
  @media (max-width: 768px) {
    display: none;
  }
`,KF=U.main`
  grid-area: content;
  background: var(--color-background);
  padding: 2rem;
  overflow-y: auto;
`,QF=()=>m.jsxs(HF,{children:[m.jsx(WF,{children:m.jsx(FF,{})}),m.jsx(GF,{children:m.jsx(qF,{})}),m.jsx(KF,{children:m.jsx(vS,{})})]}),YF=U.section`
  padding: 6rem 0 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  
  @media (min-width: 768px) {
    padding: 8rem 0 5rem;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -10%;
    right: -10%;
    width: 60%;
    height: 70%;
    background: radial-gradient(circle, rgba(43, 107, 237, 0.1) 0%, transparent 70%);
    z-index: -1;
    border-radius: 50%;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -20%;
    left: -10%;
    width: 50%;
    height: 60%;
    background: radial-gradient(circle, rgba(144, 105, 237, 0.1) 0%, transparent 70%);
    z-index: -1;
    border-radius: 50%;
  }
`,JF=U.div`
  max-width: var(--max-width);
  width: 100%;
  padding: 0 1.5rem;
  
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 2rem;
    align-items: center;
  }
`,XF=U.div``,ZF=U.p`
  color: var(--color-primary);
  font-weight: 600;
  margin-bottom: 1rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 0.875rem;
`,eU=U(ss.h1)`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  
  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
  
  span {
    color: var(--color-primary);
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 5px;
      left: 0;
      width: 100%;
      height: 6px;
      background-color: var(--color-tertiary);
      opacity: 0.3;
      z-index: -1;
    }
  }
`,tU=U.p`
  font-size: 1.125rem;
  color: var(--color-text-light);
  margin-bottom: 2rem;
  max-width: 600px;
  line-height: 1.8;
`,nU=U.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
`,rU=U(fr)`
  background-color: var(--color-primary);
  color: white;
  padding: 0.875rem 1.5rem;
  border-radius: var(--radius-md);
  font-weight: 500;
  transition: background-color var(--transition-base);
  
  &:hover {
    background-color: var(--color-tertiary);
    color: white;
  }
`,ag=U(fr)`
  background-color: transparent;
  color: var(--color-text);
  padding: 0.875rem 1.5rem;
  border-radius: var(--radius-md);
  font-weight: 500;
  border: 1px solid var(--color-border);
  transition: background-color var(--transition-base), border-color var(--transition-base);
  
  &:hover {
    background-color: var(--color-border);
    border-color: var(--color-text-light);
  }
`,sU=U.div`
  display: flex;
  gap: 1rem;
`,og=U.a`
  color: var(--color-text);
  background-color: var(--color-foreground);
  box-shadow: var(--shadow-sm);
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: transform var(--transition-base), background-color var(--transition-base);
  
  &:hover {
    transform: translateY(-3px);
    background-color: var(--color-primary);
    color: white;
  }
`,iU=U(ss.div)`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  
  @media (min-width: 768px) {
    margin-top: 0;
  }
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
  }
`,aU=U.section`
  padding: 4rem 0;
  background-color: var(--color-foreground);
`,lg=U.h2`
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background-color: var(--color-primary);
    border-radius: 2px;
  }
`,oU=U.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 1.5rem;
`,lU=U.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`,ug=U.div`
  background-color: var(--color-background);
  padding: 1.5rem;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
`,cg=U.h3`
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  
  svg {
    color: var(--color-primary);
  }
`,dg=U.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,tr=U.div``,nr=U.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`,rr=U.span`
  font-weight: 500;
`,sr=U.span`
  font-size: 0.875rem;
  color: var(--color-text-light);
`,ir=U.div`
  height: 6px;
  width: 100%;
  background-color: var(--color-border);
  border-radius: var(--radius-sm);
  overflow: hidden;
`,ar=U.div`
  height: 100%;
  width: ${t=>t.$width}%;
  background-color: var(--color-primary);
  border-radius: var(--radius-sm);
  transition: width 1.5s ease-out;
`,uU=U.section`
  padding: 5rem 0;
`,cU=U.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 1.5rem;
`,dU=U.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,Ph=U(ss.div)`
  background-color: var(--color-foreground);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: transform var(--transition-base), box-shadow var(--transition-base);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
`,hg=U.div`
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--transition-base);
  }
  
  ${Ph}:hover & img {
    transform: scale(1.05);
  }
`,fg=U.div`
  padding: 1.5rem;
`,pg=U.p`
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--color-primary);
  font-weight: 600;
  margin-bottom: 0.5rem;
`,mg=U.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`,gg=U.p`
  color: var(--color-text-light);
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`,yg=U.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`,or=U.span`
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  background-color: var(--color-background);
  border-radius: var(--radius-sm);
  color: var(--color-text-light);
`,vg=U.div`
  display: flex;
  gap: 1rem;
`,Do=U.a`
  font-size: 0.875rem;
  color: var(--color-primary);
  display: flex;
  align-items: center;
  gap: 0.25rem;
  
  &:hover {
    text-decoration: underline;
  }
`,hU=U.section`
  padding: 5rem 0;
  background-color: var(--color-foreground);
`,fU=U.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 1.5rem;
`,pU=U.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,Zd=U.div`
  background-color: var(--color-background);
  border-left: 4px solid var(--color-tertiary);
  border-radius: var(--radius-md);
  padding: 1.5rem;
  box-shadow: var(--shadow-md);
`,eh=U.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: var(--color-tertiary);
`,th=U.p`
  color: var(--color-text-light);
  line-height: 1.6;
`,mU=()=>m.jsxs(m.Fragment,{children:[m.jsx(YF,{children:m.jsxs(JF,{children:[m.jsxs(XF,{children:[m.jsx(ZF,{children:"Machine Learning Engineer & Data Scientist"}),m.jsxs(eU,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:["Building ",m.jsx("span",{children:"intelligent"})," solutions through data & code"]}),m.jsx(tU,{children:"I'm Abdo Alatrash, a machine learning engineer and data scientist focused on creating innovative solutions with physics-informed machine learning approaches. I build web applications that bring data science to life."}),m.jsxs(nU,{children:[m.jsx(rU,{to:"/projects",children:"Explore Projects"}),m.jsx(ag,{to:"/contact",children:"Get in Touch"})]}),m.jsxs(sU,{children:[m.jsx(og,{href:"https://github.com/abdo544445",target:"_blank",rel:"noopener noreferrer",children:m.jsx(Bv,{size:20})}),m.jsx(og,{href:"https://linkedin.com/in/abdo-alatrash",target:"_blank",rel:"noopener noreferrer",children:m.jsx(GC,{size:20})}),m.jsx(og,{href:"https://wa.me/201119173529",target:"_blank",rel:"noopener noreferrer",children:m.jsx(KC,{size:20})})]})]}),m.jsx(iU,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.5,delay:.2},children:m.jsx("img",{src:"/images/hero-image.png",alt:"Abdo Alatrash - ML Engineer"})})]})}),m.jsxs(aU,{children:[m.jsx(lg,{children:"Technical Skills"}),m.jsx(oU,{children:m.jsxs(lU,{children:[m.jsxs(ug,{children:[m.jsx(cg,{children:"Machine Learning & AI"}),m.jsxs(dg,{children:[m.jsxs(tr,{children:[m.jsxs(nr,{children:[m.jsx(rr,{children:"Deep Learning"}),m.jsx(sr,{children:"Advanced"})]}),m.jsx(ir,{children:m.jsx(ar,{$width:90})})]}),m.jsxs(tr,{children:[m.jsxs(nr,{children:[m.jsx(rr,{children:"TensorFlow / PyTorch"}),m.jsx(sr,{children:"Advanced"})]}),m.jsx(ir,{children:m.jsx(ar,{$width:85})})]}),m.jsxs(tr,{children:[m.jsxs(nr,{children:[m.jsx(rr,{children:"Computer Vision"}),m.jsx(sr,{children:"Intermediate"})]}),m.jsx(ir,{children:m.jsx(ar,{$width:75})})]}),m.jsxs(tr,{children:[m.jsxs(nr,{children:[m.jsx(rr,{children:"NLP"}),m.jsx(sr,{children:"Intermediate"})]}),m.jsx(ir,{children:m.jsx(ar,{$width:70})})]})]})]}),m.jsxs(ug,{children:[m.jsx(cg,{children:"Data Science"}),m.jsxs(dg,{children:[m.jsxs(tr,{children:[m.jsxs(nr,{children:[m.jsx(rr,{children:"Python"}),m.jsx(sr,{children:"Expert"})]}),m.jsx(ir,{children:m.jsx(ar,{$width:95})})]}),m.jsxs(tr,{children:[m.jsxs(nr,{children:[m.jsx(rr,{children:"Pandas / NumPy"}),m.jsx(sr,{children:"Expert"})]}),m.jsx(ir,{children:m.jsx(ar,{$width:90})})]}),m.jsxs(tr,{children:[m.jsxs(nr,{children:[m.jsx(rr,{children:"Data Visualization"}),m.jsx(sr,{children:"Advanced"})]}),m.jsx(ir,{children:m.jsx(ar,{$width:85})})]}),m.jsxs(tr,{children:[m.jsxs(nr,{children:[m.jsx(rr,{children:"Statistical Analysis"}),m.jsx(sr,{children:"Advanced"})]}),m.jsx(ir,{children:m.jsx(ar,{$width:80})})]})]})]}),m.jsxs(ug,{children:[m.jsx(cg,{children:"Web Development"}),m.jsxs(dg,{children:[m.jsxs(tr,{children:[m.jsxs(nr,{children:[m.jsx(rr,{children:"JavaScript / TypeScript"}),m.jsx(sr,{children:"Advanced"})]}),m.jsx(ir,{children:m.jsx(ar,{$width:85})})]}),m.jsxs(tr,{children:[m.jsxs(nr,{children:[m.jsx(rr,{children:"React"}),m.jsx(sr,{children:"Advanced"})]}),m.jsx(ir,{children:m.jsx(ar,{$width:80})})]}),m.jsxs(tr,{children:[m.jsxs(nr,{children:[m.jsx(rr,{children:"Node.js"}),m.jsx(sr,{children:"Intermediate"})]}),m.jsx(ir,{children:m.jsx(ar,{$width:75})})]}),m.jsxs(tr,{children:[m.jsxs(nr,{children:[m.jsx(rr,{children:"Firebase"}),m.jsx(sr,{children:"Intermediate"})]}),m.jsx(ir,{children:m.jsx(ar,{$width:70})})]})]})]})]})})]}),m.jsxs(uU,{children:[m.jsx(lg,{children:"Featured Projects"}),m.jsxs(cU,{children:[m.jsxs(dU,{children:[m.jsxs(Ph,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5},viewport:{once:!0},children:[m.jsx(hg,{children:m.jsx("img",{src:"/images/project1.jpg",alt:"Physics-Informed Neural Networks"})}),m.jsxs(fg,{children:[m.jsx(pg,{children:"Machine Learning"}),m.jsx(mg,{children:"Physics-Informed Neural Networks"}),m.jsx(gg,{children:"Implementation of PINNs for solving partial differential equations with domain knowledge constraints."}),m.jsxs(yg,{children:[m.jsx(or,{children:"PyTorch"}),m.jsx(or,{children:"Physics"}),m.jsx(or,{children:"Neural Networks"}),m.jsx(or,{children:"PDEs"})]}),m.jsxs(vg,{children:[m.jsx(Do,{href:"https://github.com/abdo544445/physics-informed-nn",target:"_blank",rel:"noopener noreferrer",children:"View Code"}),m.jsx(Do,{href:"/projects/physics-informed-nn",target:"_blank",rel:"noopener noreferrer",children:"Learn More"})]})]})]}),m.jsxs(Ph,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.1},viewport:{once:!0},children:[m.jsx(hg,{children:m.jsx("img",{src:"/images/project2.jpg",alt:"Data Visualization Dashboard"})}),m.jsxs(fg,{children:[m.jsx(pg,{children:"Data Visualization"}),m.jsx(mg,{children:"Interactive Data Dashboard"}),m.jsx(gg,{children:"Interactive visualization dashboard for exploring and analyzing scientific datasets."}),m.jsxs(yg,{children:[m.jsx(or,{children:"React"}),m.jsx(or,{children:"D3.js"}),m.jsx(or,{children:"Flask"}),m.jsx(or,{children:"Pandas"})]}),m.jsxs(vg,{children:[m.jsx(Do,{href:"https://github.com/abdo544445/data-dashboard",target:"_blank",rel:"noopener noreferrer",children:"View Code"}),m.jsx(Do,{href:"https://data-dashboard.alatrash.me",target:"_blank",rel:"noopener noreferrer",children:"Live Demo"})]})]})]}),m.jsxs(Ph,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.2},viewport:{once:!0},children:[m.jsx(hg,{children:m.jsx("img",{src:"/images/project3.jpg",alt:"ML Research Platform"})}),m.jsxs(fg,{children:[m.jsx(pg,{children:"Web Application"}),m.jsx(mg,{children:"ML Research Platform"}),m.jsx(gg,{children:"Collaborative platform for machine learning researchers to share and reproduce experiments."}),m.jsxs(yg,{children:[m.jsx(or,{children:"TypeScript"}),m.jsx(or,{children:"Next.js"}),m.jsx(or,{children:"Firebase"}),m.jsx(or,{children:"TensorFlow.js"})]}),m.jsxs(vg,{children:[m.jsx(Do,{href:"https://github.com/abdo544445/ml-research-platform",target:"_blank",rel:"noopener noreferrer",children:"View Code"}),m.jsx(Do,{href:"/projects/ml-research-platform",target:"_blank",rel:"noopener noreferrer",children:"Learn More"})]})]})]})]}),m.jsx("div",{style:{textAlign:"center",marginTop:"3rem"},children:m.jsx(ag,{to:"/projects",children:"View All Projects"})})]})]}),m.jsxs(hU,{children:[m.jsx(lg,{children:"Research Interests"}),m.jsxs(fU,{children:[m.jsxs(pU,{children:[m.jsxs(Zd,{children:[m.jsx(eh,{children:"Physics-Informed Machine Learning"}),m.jsx(th,{children:"Exploring how to incorporate physics principles and domain knowledge into machine learning models to improve accuracy, reduce data requirements, and ensure physical consistency in predictions."})]}),m.jsxs(Zd,{children:[m.jsx(eh,{children:"Scientific Data Visualization"}),m.jsx(th,{children:"Developing interactive and intuitive visualizations for complex scientific datasets to aid in understanding patterns, anomalies, and insights that might be missed in standard analysis."})]}),m.jsxs(Zd,{children:[m.jsx(eh,{children:"Neural Differential Equations"}),m.jsx(th,{children:"Research into neural networks that can learn and solve differential equations, combining the flexibility of deep learning with the mathematical rigor of physics-based modeling."})]}),m.jsxs(Zd,{children:[m.jsx(eh,{children:"ML for Scientific Discovery"}),m.jsx(th,{children:"Applying machine learning techniques to accelerate scientific discovery processes, create predictive models, and assist in hypothesis generation and validation."})]})]}),m.jsx("div",{style:{textAlign:"center",marginTop:"3rem"},children:m.jsx(ag,{to:"/research",children:"Explore Research"})})]})]})]}),gU=U.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 4rem 1.5rem;
  
  @media (min-width: 768px) {
    padding: 6rem 2rem;
  }
`,yU=U.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  
  span {
    color: var(--color-primary);
  }
`,vU=U.p`
  font-size: 1.125rem;
  color: var(--color-text-light);
  margin-bottom: 3rem;
  max-width: 800px;
`,bU=U.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
`,wU=U.button`
  background-color: ${t=>t.$active?"var(--color-primary)":"var(--color-foreground)"};
  color: ${t=>t.$active?"white":"var(--color-text)"};
  border: 1px solid ${t=>t.$active?"var(--color-primary)":"var(--color-border)"};
  padding: 0.5rem 1.25rem;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--transition-base);
  
  &:hover {
    background-color: ${t=>t.$active?"var(--color-primary)":"var(--color-border)"};
  }
`,xU=U.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,kT=U(ss.div)`
  background-color: var(--color-foreground);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: transform var(--transition-base), box-shadow var(--transition-base);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
`,SU=U.div`
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--transition-base);
  }
  
  ${kT}:hover & img {
    transform: scale(1.05);
  }
`,kU=U.div`
  padding: 1.5rem;
`,EU=U.p`
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--color-primary);
  font-weight: 600;
  margin-bottom: 0.5rem;
`,CU=U.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`,TU=U.p`
  color: var(--color-text-light);
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`,_U=U.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`,IU=U.span`
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  background-color: var(--color-background);
  border-radius: var(--radius-sm);
  color: var(--color-text-light);
`,PU=U.div`
  display: flex;
  gap: 1rem;
`,bg=U.a`
  font-size: 0.875rem;
  color: var(--color-primary);
  display: flex;
  align-items: center;
  gap: 0.25rem;
  
  &:hover {
    text-decoration: underline;
  }
`,j2=[{id:"1",title:"Physics-Informed Neural Networks",slug:"physics-informed-nn",description:"Implementation of PINNs for solving partial differential equations with domain knowledge constraints.",category:"ml-ai",technologies:["PyTorch","Physics","Neural Networks","PDEs"],imageUrl:"/images/project1.jpg",githubUrl:"https://github.com/abdo544445/physics-informed-nn"},{id:"2",title:"Interactive Data Dashboard",slug:"data-dashboard",description:"Interactive visualization dashboard for exploring and analyzing scientific datasets.",category:"data-viz",technologies:["React","D3.js","Flask","Pandas"],imageUrl:"/images/project2.jpg",githubUrl:"https://github.com/abdo544445/data-dashboard",liveUrl:"https://data-dashboard.alatrash.me"},{id:"3",title:"ML Research Platform",slug:"ml-research-platform",description:"Collaborative platform for machine learning researchers to share and reproduce experiments.",category:"web-app",technologies:["TypeScript","Next.js","Firebase","TensorFlow.js"],imageUrl:"/images/project3.jpg",githubUrl:"https://github.com/abdo544445/ml-research-platform"}],AU=()=>{const[t,e]=O.useState("all"),n=[{id:"all",label:"All Projects"},{id:"ml-ai",label:"ML & AI"},{id:"data-viz",label:"Data Visualization"},{id:"web-app",label:"Web Applications"},{id:"research",label:"Research"}],r=t==="all"?j2:j2.filter(i=>i.category===t);return m.jsxs(gU,{children:[m.jsxs(yU,{children:["My ",m.jsx("span",{children:"Projects"})]}),m.jsx(vU,{children:"A collection of my work in machine learning, data science, and web development, with a focus on physics-informed approaches and scientific applications."}),m.jsx(bU,{children:n.map(i=>m.jsx(wU,{$active:t===i.id,onClick:()=>e(i.id),children:i.label},i.id))}),m.jsx(xU,{children:r.map(i=>{var o;return m.jsxs(kT,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5},viewport:{once:!0},children:[m.jsx(SU,{children:m.jsx("img",{src:i.imageUrl,alt:i.title})}),m.jsxs(kU,{children:[m.jsx(EU,{children:((o=n.find(l=>l.id===i.category))==null?void 0:o.label)||i.category}),m.jsx(CU,{children:i.title}),m.jsx(TU,{children:i.description}),m.jsx(_U,{children:i.technologies.map(l=>m.jsx(IU,{children:l},l))}),m.jsxs(PU,{children:[i.githubUrl&&m.jsx(bg,{href:i.githubUrl,target:"_blank",rel:"noopener noreferrer",children:"View Code"}),i.liveUrl&&m.jsx(bg,{href:i.liveUrl,target:"_blank",rel:"noopener noreferrer",children:"Live Demo"}),m.jsx(bg,{as:fr,to:`/projects/${i.slug}`,children:"Learn More"})]})]})]},i.id)})})]})},N2=U.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 4rem 1.5rem;
  
  @media (min-width: 768px) {
    padding: 6rem 2rem;
  }
`,D2=U(fr)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  color: var(--color-text-light);
  transition: color var(--transition-base);
  
  &:hover {
    color: var(--color-primary);
  }
`,jU=U.div`
  margin-bottom: 2rem;
  
  @media (min-width: 768px) {
    display: flex;
    align-items: flex-start;
    gap: 2rem;
  }
`,NU=U.div`
  flex: 1;
  margin-bottom: 2rem;
  
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
  
  img {
    width: 100%;
    height: auto;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-md);
  }
`,DU=U.div`
  flex: 1;
`,RU=U.p`
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--color-primary);
  font-weight: 600;
  margin-bottom: 0.5rem;
`,LU=U.h1`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`,OU=U.p`
  font-size: 1.125rem;
  color: var(--color-text-light);
  margin-bottom: 2rem;
  line-height: 1.8;
`,MU=U.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`,ET=U.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background-color: var(--color-foreground);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  color: var(--color-text);
  font-weight: 500;
  transition: all var(--transition-base);
  
  &:hover {
    background-color: var(--color-border);
    color: var(--color-text);
  }
`,FU=U(ET)`
  background-color: var(--color-primary);
  border-color: var(--color-primary);
  color: white;
  
  &:hover {
    background-color: var(--color-tertiary);
    border-color: var(--color-tertiary);
    color: white;
  }
`,UU=U.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`,VU=U.span`
  font-size: 0.875rem;
  padding: 0.25rem 0.75rem;
  background-color: var(--color-background);
  border-radius: var(--radius-sm);
  color: var(--color-text-light);
`,BU=U.div`
  margin-top: 4rem;
`,zU=U.h2`
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 40px;
    height: 3px;
    background-color: var(--color-primary);
  }
`,$U=[{id:"1",title:"Physics-Informed Neural Networks",slug:"physics-informed-nn",description:"Implementation of PINNs for solving partial differential equations with domain knowledge constraints.",longDescription:"A comprehensive implementation of Physics-Informed Neural Networks (PINNs) that combines deep learning techniques with physical laws encoded as differential equations. This project demonstrates how to solve complex physics problems by training neural networks to respect known physical constraints.",category:"ML & AI",technologies:["PyTorch","Physics","Neural Networks","PDEs"],imageUrl:"/images/project1.jpg",githubUrl:"https://github.com/abdo544445/physics-informed-nn",content:[{title:"Project Overview",text:"Physics-Informed Neural Networks (PINNs) represent a novel approach to solving differential equations by incorporating physical laws directly into neural network training. This project implements PINNs for solving various types of PDEs with applications in fluid dynamics, heat transfer, and quantum mechanics."},{title:"Technical Implementation",text:"The implementation uses PyTorch to create neural network architectures that are trained with both data-driven loss and physics-informed loss components. The physics-informed component enforces the neural network to respect underlying physical principles expressed as differential equations."},{title:"Results & Impact",text:"The implemented PINNs demonstrate excellent accuracy and convergence properties, especially in scenarios with limited training data. The approach has been validated against analytical solutions for several benchmark problems in fluid dynamics and heat transfer."}]},{id:"2",title:"Interactive Data Dashboard",slug:"data-dashboard",description:"Interactive visualization dashboard for exploring and analyzing scientific datasets.",longDescription:"A comprehensive data visualization platform built to help scientists and researchers explore complex datasets intuitively. The dashboard offers interactive charts, graphs, and statistical analysis tools specifically designed for scientific data.",category:"Data Visualization",technologies:["React","D3.js","Flask","Pandas"],imageUrl:"/images/project2.jpg",githubUrl:"https://github.com/abdo544445/data-dashboard",liveUrl:"https://data-dashboard.alatrash.me",content:[{title:"Project Overview",text:"The Interactive Data Dashboard is a web-based visualization platform designed to help researchers and data scientists explore and analyze complex datasets. It provides a user-friendly interface for creating customized visualizations and running basic statistical analyses without requiring programming knowledge."},{title:"Technical Implementation",text:"The dashboard is built with a React frontend that leverages D3.js for interactive visualizations. The backend is implemented in Flask, which processes data using Pandas and NumPy. The application supports various file formats including CSV, Excel, and JSON, and can connect to SQL databases."},{title:"Features & Capabilities",text:"Key features include interactive charts (scatter plots, line charts, heatmaps), statistical summaries, data filtering, and the ability to export visualizations. The dashboard also supports real-time collaboration and sharing of visualizations among research teams."}]},{id:"3",title:"ML Research Platform",slug:"ml-research-platform",description:"Collaborative platform for machine learning researchers to share and reproduce experiments.",longDescription:"A collaborative platform that enables machine learning researchers to share experiments, replicate results, and build upon each other's work. The platform tackles the reproducibility crisis in machine learning research by providing standardized environments and detailed logging.",category:"Web Application",technologies:["TypeScript","Next.js","Firebase","TensorFlow.js"],imageUrl:"/images/project3.jpg",githubUrl:"https://github.com/abdo544445/ml-research-platform",content:[{title:"Project Overview",text:"The ML Research Platform addresses the reproducibility crisis in machine learning research by providing a collaborative environment where researchers can share experiments, replicate results, and build upon each other's work. It streamlines the process of documenting, sharing, and reproducing machine learning experiments."},{title:"Technical Implementation",text:"The platform is built with Next.js and TypeScript for the frontend, with Firebase providing authentication, database, and storage services. It integrates TensorFlow.js to allow running certain models directly in the browser, while also supporting integration with external compute resources for more intensive workloads."},{title:"Impact & Benefits",text:"This platform helps researchers save time, improve collaboration, and increase the credibility of their research by ensuring experiments are fully documented and reproducible. It also provides valuable metrics on model performance and resource utilization, helping to benchmark and optimize machine learning algorithms."}]}],qU=()=>{const{slug:t}=b5(),e=$U.find(n=>n.slug===t);return O.useEffect(()=>{window.scrollTo(0,0)},[]),e?m.jsxs(N2,{children:[m.jsxs(D2,{to:"/projects",children:[m.jsx(Ex,{})," Back to Projects"]}),m.jsxs(ss.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:[m.jsxs(jU,{children:[m.jsx(NU,{children:m.jsx("img",{src:e.imageUrl,alt:e.title})}),m.jsxs(DU,{children:[m.jsx(RU,{children:e.category}),m.jsx(LU,{children:e.title}),m.jsx(OU,{children:e.longDescription||e.description}),m.jsx(UU,{children:e.technologies.map(n=>m.jsx(VU,{children:n},n))}),m.jsxs(MU,{children:[e.githubUrl&&m.jsxs(ET,{href:e.githubUrl,target:"_blank",rel:"noopener noreferrer",children:[m.jsx(Bv,{})," GitHub Repository"]}),e.liveUrl&&m.jsxs(FU,{href:e.liveUrl,target:"_blank",rel:"noopener noreferrer",children:[m.jsx(UL,{})," Live Demo"]})]})]})]}),m.jsx(BU,{children:e.content&&e.content.map((n,r)=>m.jsxs("div",{style:{marginBottom:"3rem"},children:[m.jsx(zU,{children:n.title}),m.jsx("p",{style:{lineHeight:"1.8"},children:n.text})]},r))})]})]}):m.jsxs(N2,{children:[m.jsxs(D2,{to:"/projects",children:[m.jsx(Ex,{})," Back to Projects"]}),m.jsx("h1",{children:"Project Not Found"}),m.jsx("p",{children:"The project you are looking for doesn't exist or has been moved."})]})},HU=U.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 4rem 1.5rem;
  
  @media (min-width: 768px) {
    padding: 6rem 2rem;
  }
`,R2=U.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  
  span {
    color: var(--color-primary);
  }
`,L2=U.p`
  font-size: 1.125rem;
  color: var(--color-text-light);
  margin-bottom: 3rem;
  max-width: 800px;
`,WU=U.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,GU=U(ss.div)`
  background-color: var(--color-foreground);
  border-radius: var(--radius-lg);
  padding: 2rem;
  box-shadow: var(--shadow-md);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 6px;
    height: 100%;
    background-color: var(--color-tertiary);
  }
`,KU=U.h2`
  font-size: 1.5rem;
  margin-bottom: 1.25rem;
  color: var(--color-text);
`,QU=U.p`
  color: var(--color-text-light);
  line-height: 1.7;
  margin-bottom: 1.5rem;
`,YU=U.section`
  margin-top: 5rem;
`,JU=U.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
`,XU=U(ss.div)`
  background-color: var(--color-foreground);
  border-radius: var(--radius-md);
  padding: 1.5rem;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--color-border);
`,ZU=U.h3`
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
`,eV=U.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.5rem;
  margin-bottom: 1rem;
  font-size: 0.875rem;
`,nh=U.span`
  color: var(--color-text-light);
  
  strong {
    color: var(--color-text);
  }
`,tV=U.p`
  color: var(--color-text-light);
  font-size: 0.9375rem;
  line-height: 1.7;
  margin-bottom: 1.25rem;
`,nV=U.div`
  display: flex;
  gap: 1rem;
`,O2=U.a`
  color: var(--color-primary);
  font-size: 0.875rem;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  
  &:hover {
    text-decoration: underline;
  }
`,rV=[{id:"1",title:"Physics-Informed Machine Learning",description:"Exploring how to incorporate physics principles and domain knowledge into machine learning models to improve accuracy, reduce data requirements, and ensure physical consistency in predictions."},{id:"2",title:"Scientific Data Visualization",description:"Developing interactive and intuitive visualizations for complex scientific datasets to aid in understanding patterns, anomalies, and insights that might be missed in standard analysis."},{id:"3",title:"Neural Differential Equations",description:"Research into neural networks that can learn and solve differential equations, combining the flexibility of deep learning with the mathematical rigor of physics-based modeling."},{id:"4",title:"ML for Scientific Discovery",description:"Applying machine learning techniques to accelerate scientific discovery processes, create predictive models, and assist in hypothesis generation and validation."}],sV=[{id:"1",title:"Physics-Informed Neural Networks for Solving Partial Differential Equations in Fluid Dynamics",authors:["Abdo Alatrash","Jane Smith","David Johnson"],journal:"Journal of Computational Physics",year:2023,abstract:"This paper presents a novel approach to solving complex fluid dynamics problems using physics-informed neural networks. We demonstrate that incorporating known physical laws into the neural network architecture significantly improves accuracy and convergence compared to traditional numerical methods.",pdfUrl:"#",doiUrl:"https://doi.org/10.xxxx/xxxxx"},{id:"2",title:"Interactive Visualization Techniques for Large-Scale Scientific Datasets",authors:["Abdo Alatrash","Michael Chen"],conference:"IEEE Visualization Conference",year:2022,abstract:"We introduce a set of novel interactive visualization techniques designed specifically for exploring and analyzing large-scale scientific datasets. Our approach combines dimensionality reduction with interactive filtering to enable intuitive exploration of complex data structures.",pdfUrl:"#"}],iV=()=>m.jsxs(HU,{children:[m.jsxs(R2,{children:["Research ",m.jsx("span",{children:"Interests"})]}),m.jsx(L2,{children:"My research focuses on the intersection of machine learning, physics, and scientific computing, with an emphasis on developing models that incorporate domain knowledge and physical constraints."}),m.jsx(WU,{children:rV.map((t,e)=>m.jsxs(GU,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:e*.1},viewport:{once:!0},children:[m.jsx(KU,{children:t.title}),m.jsx(QU,{children:t.description}),m.jsx(fr,{to:"/contact",style:{color:"var(--color-primary)"},children:"Discuss collaboration →"})]},t.id))}),m.jsxs(YU,{children:[m.jsx(R2,{children:"Publications"}),m.jsx(L2,{children:"Selected academic papers and conference presentations related to my research areas."}),m.jsx(JU,{children:sV.map((t,e)=>m.jsxs(XU,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:e*.1},viewport:{once:!0},children:[m.jsx(ZU,{children:t.title}),m.jsxs(eV,{children:[m.jsxs(nh,{children:[m.jsx("strong",{children:"Authors:"})," ",t.authors.join(", ")]}),t.journal&&m.jsxs(nh,{children:[m.jsx("strong",{children:"Journal:"})," ",t.journal]}),t.conference&&m.jsxs(nh,{children:[m.jsx("strong",{children:"Conference:"})," ",t.conference]}),m.jsxs(nh,{children:[m.jsx("strong",{children:"Year:"})," ",t.year]})]}),m.jsx(tV,{children:t.abstract}),m.jsxs(nV,{children:[t.pdfUrl&&m.jsx(O2,{href:t.pdfUrl,target:"_blank",rel:"noopener noreferrer",children:"PDF"}),t.doiUrl&&m.jsx(O2,{href:t.doiUrl,target:"_blank",rel:"noopener noreferrer",children:"DOI"})]})]},t.id))})]})]}),aV=U.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 4rem 1.5rem;
  
  @media (min-width: 768px) {
    padding: 6rem 2rem;
  }
`,oV=U.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  
  span {
    color: var(--color-primary);
  }
`,lV=U.p`
  font-size: 1.125rem;
  color: var(--color-text-light);
  margin-bottom: 3rem;
  max-width: 800px;
`,uV=U.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 992px) {
    grid-template-columns: 2fr 1fr;
  }
`,cV=U.div``,dV=U.div`
  @media (max-width: 991px) {
    order: -1;
  }
`,hV=U.div`
  margin-bottom: 2rem;
`,fV=U.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background-color: var(--color-foreground);
  color: var(--color-text);
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 2px rgba(43, 107, 237, 0.2);
  }
`,M2=U.div`
  background-color: var(--color-foreground);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: var(--shadow-sm);
`,F2=U.h3`
  font-size: 1.25rem;
  margin-bottom: 1.25rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 30px;
    height: 2px;
    background-color: var(--color-primary);
  }
`,pV=U.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`,mV=U.button`
  background-color: ${t=>t.$active?"var(--color-primary)":"var(--color-background)"};
  color: ${t=>t.$active?"white":"var(--color-text-light)"};
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius-sm);
  font-size: 0.875rem;
  border: none;
  cursor: pointer;
  transition: all var(--transition-base);
  
  &:hover {
    background-color: ${t=>t.$active?"var(--color-primary)":"var(--color-border)"};
  }
`,gV=U.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,CT=U(ss(fr))`
  background-color: var(--color-foreground);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: transform var(--transition-base), box-shadow var(--transition-base);
  display: block;
  color: var(--color-text);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
    color: var(--color-text);
  }
`,yV=U.div`
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--transition-base);
  }
  
  ${CT}:hover & img {
    transform: scale(1.05);
  }
`,vV=U.div`
  padding: 1.5rem;
`,bV=U.h3`
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  line-height: 1.4;
`,wV=U.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  color: var(--color-text-light);
`,U2=U.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`,xV=U.p`
  color: var(--color-text-light);
  margin-bottom: 1rem;
  line-height: 1.6;
  font-size: 0.9375rem;
`,SV=U.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`,kV=U.span`
  background-color: var(--color-background);
  color: var(--color-text-light);
  padding: 0.125rem 0.5rem;
  border-radius: var(--radius-sm);
  font-size: 0.75rem;
`,Ey=[{id:"1",title:"Introduction to Physics-Informed Neural Networks",slug:"intro-to-physics-informed-neural-networks",summary:"An overview of how to integrate physics principles into neural networks and why it matters for scientific machine learning.",publishDate:new Date("2023-04-15"),readTime:"8 min read",imageUrl:"/images/blog1.jpg",tags:["Machine Learning","PINNs","Scientific ML"]},{id:"2",title:"Visualizing Complex Scientific Data: Best Practices",slug:"visualizing-complex-scientific-data",summary:"Tips and techniques for creating effective visualizations that communicate insights from complex scientific datasets.",publishDate:new Date("2023-03-10"),readTime:"6 min read",imageUrl:"/images/blog2.jpg",tags:["Data Visualization","Scientific Data","D3.js"]},{id:"3",title:"Building Web Apps for Scientific Applications",slug:"web-apps-for-scientific-applications",summary:"How to develop web applications that serve as interfaces for scientific computing and data analysis.",publishDate:new Date("2023-02-05"),readTime:"10 min read",imageUrl:"/images/blog3.jpg",tags:["Web Development","React","Scientific Computing"]},{id:"4",title:"Deep Learning for Differential Equations",slug:"deep-learning-for-differential-equations",summary:"Exploring how deep learning models can be used to solve and approximate complex differential equations.",publishDate:new Date("2023-01-20"),readTime:"12 min read",imageUrl:"/images/blog4.jpg",tags:["Deep Learning","Differential Equations","Scientific ML"]}],EV=Array.from(new Set(Ey.flatMap(t=>t.tags))),CV=()=>{const[t,e]=O.useState(null),[n,r]=O.useState(""),i=Ey.filter(l=>{const d=t?l.tags.includes(t):!0,f=n?l.title.toLowerCase().includes(n.toLowerCase())||l.summary.toLowerCase().includes(n.toLowerCase())||l.tags.some(p=>p.toLowerCase().includes(n.toLowerCase())):!0;return d&&f}),o=l=>new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric"}).format(l);return m.jsxs(aV,{children:[m.jsxs(oV,{children:["The ",m.jsx("span",{children:"Blog"})]}),m.jsx(lV,{children:"Articles, tutorials, and insights on machine learning, data science, and scientific computing with a focus on physics-informed approaches."}),m.jsxs(uV,{children:[m.jsxs(cV,{children:[m.jsx(gV,{children:i.map((l,d)=>m.jsxs(CT,{to:`/blog/${l.slug}`,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:d*.1},viewport:{once:!0},children:[m.jsx(yV,{children:m.jsx("img",{src:l.imageUrl,alt:l.title})}),m.jsxs(vV,{children:[m.jsx(bV,{children:l.title}),m.jsxs(wV,{children:[m.jsxs(U2,{children:[m.jsx(Cx,{size:12}),o(l.publishDate)]}),m.jsxs(U2,{children:[m.jsx(DL,{size:12}),l.readTime]})]}),m.jsx(xV,{children:l.summary}),m.jsx(SV,{children:l.tags.map(f=>m.jsx(kV,{children:f},f))})]})]},l.id))}),i.length===0&&m.jsxs("div",{style:{textAlign:"center",padding:"3rem 0"},children:[m.jsx("h3",{children:"No posts found"}),m.jsx("p",{children:"Try adjusting your filters or search term."})]})]}),m.jsxs(dV,{children:[m.jsx(hV,{children:m.jsx(fV,{type:"text",placeholder:"Search blog posts...",value:n,onChange:l=>r(l.target.value)})}),m.jsxs(M2,{children:[m.jsx(F2,{children:"Tags"}),m.jsx(pV,{children:EV.map(l=>m.jsx(mV,{$active:t===l,onClick:()=>{e(t===l?null:l)},children:l},l))})]}),m.jsxs(M2,{children:[m.jsx(F2,{children:"Recent Posts"}),Ey.slice(0,3).map(l=>m.jsxs("div",{style:{marginBottom:"1rem"},children:[m.jsx(fr,{to:`/blog/${l.slug}`,style:{fontWeight:500,color:"var(--color-text)"},children:l.title}),m.jsxs("div",{style:{fontSize:"0.875rem",color:"var(--color-text-light)",marginTop:"0.25rem"},children:[m.jsx(Cx,{size:10,style:{marginRight:"0.25rem"}}),o(l.publishDate)]})]},l.id))]})]})]})]})};var V2={exports:{}},wg,B2;function TV(){if(B2)return wg;B2=1;var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return wg=t,wg}var xg,z2;function _V(){if(z2)return xg;z2=1;var t=TV();function e(){}function n(){}return n.resetWarningCache=e,xg=function(){function r(l,d,f,p,y,w){if(w!==t){var S=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw S.name="Invariant Violation",S}}r.isRequired=r;function i(){return r}var o={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:i,element:r,elementType:r,instanceOf:i,node:r,objectOf:i,oneOf:i,oneOfType:i,shape:i,exact:i,checkPropTypes:n,resetWarningCache:e};return o.PropTypes=o,o},xg}var $2;function IV(){return $2||($2=1,V2.exports=_V()()),V2.exports}var PV=IV();const St=Ty(PV);function q2(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function H2(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?q2(Object(n),!0).forEach(function(r){TT(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):q2(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Ah(t){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ah=function(e){return typeof e}:Ah=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ah(t)}function TT(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function AV(t,e){return jV(t)||NV(t,e)||DV(t,e)||RV()}function jV(t){if(Array.isArray(t))return t}function NV(t,e){var n=t&&(typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"]);if(n!=null){var r=[],i=!0,o=!1,l,d;try{for(n=n.call(t);!(i=(l=n.next()).done)&&(r.push(l.value),!(e&&r.length===e));i=!0);}catch(f){o=!0,d=f}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw d}}return r}}function DV(t,e){if(t){if(typeof t=="string")return W2(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return W2(t,e)}}function W2(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function RV(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var LV=function(t){var e=Fe.useRef(t);return Fe.useEffect(function(){e.current=t},[t]),e.current},cf=function(t){return t!==null&&Ah(t)==="object"},G2="[object Object]",OV=function t(e,n){if(!cf(e)||!cf(n))return e===n;var r=Array.isArray(e),i=Array.isArray(n);if(r!==i)return!1;var o=Object.prototype.toString.call(e)===G2,l=Object.prototype.toString.call(n)===G2;if(o!==l)return!1;if(!o&&!r)return e===n;var d=Object.keys(e),f=Object.keys(n);if(d.length!==f.length)return!1;for(var p={},y=0;y<d.length;y+=1)p[d[y]]=!0;for(var w=0;w<f.length;w+=1)p[f[w]]=!0;var S=Object.keys(p);if(S.length!==d.length)return!1;var E=e,C=n,N=function(I){return t(E[I],C[I])};return S.every(N)},MV=function(t,e,n){return cf(t)?Object.keys(t).reduce(function(r,i){var o=!cf(e)||!OV(t[i],e[i]);return n.includes(i)?(o&&console.warn("Unsupported prop change: options.".concat(i," is not a mutable property.")),r):o?H2(H2({},r||{}),{},TT({},i,t[i])):r},null):null},_T=Fe.createContext(null);_T.displayName="ElementsContext";var FV=function(t,e){if(!t)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(e," in an <Elements> provider."));return t},IT=Fe.createContext(null);IT.displayName="CartElementContext";var UV=function(t,e){if(!t)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(e," in an <Elements> provider."));return t};St.any,St.object;var K2=function(t){var e=Fe.useContext(_T);return FV(e,t)},Q2=function(t){var e=Fe.useContext(IT);return UV(e,t)};St.func.isRequired;var yn=function(t,e,n){var r=!!n,i=Fe.useRef(n);Fe.useEffect(function(){i.current=n},[n]),Fe.useEffect(function(){if(!r||!t)return function(){};var o=function(){i.current&&i.current.apply(i,arguments)};return t.on(e,o),function(){t.off(e,o)}},[r,e,t,i])},VV=function(t){return t.charAt(0).toUpperCase()+t.slice(1)},At=function(t,e){var n="".concat(VV(t),"Element"),r=function(l){var d=l.id,f=l.className,p=l.options,y=p===void 0?{}:p,w=l.onBlur,S=l.onFocus,E=l.onReady,C=l.onChange,N=l.onEscape,I=l.onClick,B=l.onLoadError,M=l.onLoaderStart,$=l.onNetworksChange,L=l.onCheckout,W=l.onLineItemClick,Z=l.onConfirm,P=l.onCancel,_=l.onShippingAddressChange,A=l.onShippingRateChange,F=K2("mounts <".concat(n,">")),z=F.elements,H=Fe.useState(null),D=AV(H,2),ve=D[0],Oe=D[1],Ue=Fe.useRef(null),Ae=Fe.useRef(null),ae=Q2("mounts <".concat(n,">")),de=ae.setCart,Y=ae.setCartState;yn(ve,"blur",w),yn(ve,"focus",S),yn(ve,"escape",N),yn(ve,"click",I),yn(ve,"loaderror",B),yn(ve,"loaderstart",M),yn(ve,"networkschange",$),yn(ve,"lineitemclick",W),yn(ve,"confirm",Z),yn(ve,"cancel",P),yn(ve,"shippingaddresschange",_),yn(ve,"shippingratechange",A);var j;t==="cart"?j=function(ce){Y(ce),E&&E(ce)}:E&&(t==="payButton"?j=E:j=function(){E(ve)}),yn(ve,"ready",j);var Q=t==="cart"?function(ce){Y(ce),C&&C(ce)}:C;yn(ve,"change",Q);var oe=t==="cart"?function(ce){Y(ce),L&&L(ce)}:L;yn(ve,"checkout",oe),Fe.useLayoutEffect(function(){if(Ue.current===null&&z&&Ae.current!==null){var ce=z.create(t,y);t==="cart"&&de&&de(ce),Ue.current=ce,Oe(ce),ce.mount(Ae.current)}},[z,y,de]);var fe=LV(y);return Fe.useEffect(function(){if(Ue.current){var ce=MV(y,fe,["paymentRequest"]);ce&&Ue.current.update(ce)}},[y,fe]),Fe.useLayoutEffect(function(){return function(){Ue.current&&(Ue.current.destroy(),Ue.current=null)}},[]),Fe.createElement("div",{id:d,className:f,ref:Ae})},i=function(l){K2("mounts <".concat(n,">")),Q2("mounts <".concat(n,">"));var d=l.id,f=l.className;return Fe.createElement("div",{id:d,className:f})},o=e?i:r;return o.propTypes={id:St.string,className:St.string,onChange:St.func,onBlur:St.func,onFocus:St.func,onReady:St.func,onEscape:St.func,onClick:St.func,onLoadError:St.func,onLoaderStart:St.func,onNetworksChange:St.func,onCheckout:St.func,onLineItemClick:St.func,onConfirm:St.func,onCancel:St.func,onShippingAddressChange:St.func,onShippingRateChange:St.func,options:St.object},o.displayName=n,o.__elementType=t,o},jt=typeof window>"u";At("auBankAccount",jt);var BV=At("card",jt);At("cardNumber",jt);At("cardExpiry",jt);At("cardCvc",jt);At("fpxBank",jt);At("iban",jt);At("idealBank",jt);At("p24Bank",jt);At("epsBank",jt);At("payment",jt);At("payButton",jt);At("paymentRequestButton",jt);At("linkAuthentication",jt);At("address",jt);At("shippingAddress",jt);At("cart",jt);At("paymentMethodMessaging",jt);At("affirmMessage",jt);At("afterpayClearpayMessage",jt);var Sg,Y2;function zV(){if(Y2)return Sg;Y2=1;var t=Object.defineProperty,e=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,r=Object.prototype.hasOwnProperty,i=(Y,j)=>{for(var Q in j)t(Y,Q,{get:j[Q],enumerable:!0})},o=(Y,j,Q,oe)=>{if(j&&typeof j=="object"||typeof j=="function")for(let fe of n(j))!r.call(Y,fe)&&fe!==Q&&t(Y,fe,{get:()=>j[fe],enumerable:!(oe=e(j,fe))||oe.enumerable});return Y},l=Y=>o(t({},"__esModule",{value:!0}),Y),d=(Y,j,Q)=>new Promise((oe,fe)=>{var ce=Te=>{try{Ce(Q.next(Te))}catch(je){fe(je)}},we=Te=>{try{Ce(Q.throw(Te))}catch(je){fe(je)}},Ce=Te=>Te.done?oe(Te.value):Promise.resolve(Te.value).then(ce,we);Ce((Q=Q.apply(Y,j)).next())}),f={};i(f,{SubmissionError:()=>L,appendExtraData:()=>D,createClient:()=>Ae,getDefaultClient:()=>ae,isSubmissionError:()=>$}),Sg=l(f);var p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",y=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;function w(Y){Y=String(Y);for(var j,Q,oe,fe,ce="",we=0,Ce=Y.length%3;we<Y.length;){if((Q=Y.charCodeAt(we++))>255||(oe=Y.charCodeAt(we++))>255||(fe=Y.charCodeAt(we++))>255)throw new TypeError("Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.");j=Q<<16|oe<<8|fe,ce+=p.charAt(j>>18&63)+p.charAt(j>>12&63)+p.charAt(j>>6&63)+p.charAt(j&63)}return Ce?ce.slice(0,Ce-3)+"===".substring(Ce):ce}function S(Y){if(Y=String(Y).replace(/[\t\n\f\r ]+/g,""),!y.test(Y))throw new TypeError("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");Y+="==".slice(2-(Y.length&3));for(var j,Q="",oe,fe,ce=0;ce<Y.length;)j=p.indexOf(Y.charAt(ce++))<<18|p.indexOf(Y.charAt(ce++))<<12|(oe=p.indexOf(Y.charAt(ce++)))<<6|(fe=p.indexOf(Y.charAt(ce++))),Q+=oe===64?String.fromCharCode(j>>16&255):fe===64?String.fromCharCode(j>>16&255,j>>8&255):String.fromCharCode(j>>16&255,j>>8&255,j&255);return Q}var E=()=>navigator.webdriver||!!document.documentElement.getAttribute(S("d2ViZHJpdmVy"))||!!window.callPhantom||!!window._phantom,C=class{constructor(){this.loadedAt=Date.now(),this.webdriver=E()}data(){return{loadedAt:this.loadedAt,webdriver:this.webdriver}}},N=class{constructor(Y){this.kind="success",this.next=Y.next}};function I(Y){return"next"in Y&&typeof Y.next=="string"}var B=class{constructor(Y,j){this.paymentIntentClientSecret=Y,this.resubmitKey=j,this.kind="stripePluginPending"}};function M(Y){if("stripe"in Y&&"resubmitKey"in Y&&typeof Y.resubmitKey=="string"){let{stripe:j}=Y;return typeof j=="object"&&j!=null&&"paymentIntentClientSecret"in j&&typeof j.paymentIntentClientSecret=="string"}return!1}function $(Y){return Y.kind==="error"}var L=class{constructor(...Y){this.kind="error",this.formErrors=[],this.fieldErrors=new Map;var j;for(let Q of Y){if(!Q.field){this.formErrors.push({code:Q.code&&W(Q.code)?Q.code:"UNSPECIFIED",message:Q.message});continue}let oe=(j=this.fieldErrors.get(Q.field))!=null?j:[];oe.push({code:Q.code&&P(Q.code)?Q.code:"UNSPECIFIED",message:Q.message}),this.fieldErrors.set(Q.field,oe)}}getFormErrors(){return[...this.formErrors]}getFieldErrors(Y){var j;return(j=this.fieldErrors.get(Y))!=null?j:[]}getAllFieldErrors(){return Array.from(this.fieldErrors)}};function W(Y){return Y in Z}var Z={BLOCKED:"BLOCKED",EMPTY:"EMPTY",FILES_TOO_BIG:"FILES_TOO_BIG",FORM_NOT_FOUND:"FORM_NOT_FOUND",INACTIVE:"INACTIVE",NO_FILE_UPLOADS:"NO_FILE_UPLOADS",PROJECT_NOT_FOUND:"PROJECT_NOT_FOUND",TOO_MANY_FILES:"TOO_MANY_FILES"};function P(Y){return Y in _}var _={REQUIRED_FIELD_EMPTY:"REQUIRED_FIELD_EMPTY",REQUIRED_FIELD_MISSING:"REQUIRED_FIELD_MISSING",STRIPE_CLIENT_ERROR:"STRIPE_CLIENT_ERROR",STRIPE_SCA_ERROR:"STRIPE_SCA_ERROR",TYPE_EMAIL:"TYPE_EMAIL",TYPE_NUMERIC:"TYPE_NUMERIC",TYPE_TEXT:"TYPE_TEXT"};function A(Y){return"errors"in Y&&Array.isArray(Y.errors)&&Y.errors.every(j=>typeof j.message=="string")||"error"in Y&&typeof Y.error=="string"}var F="3.0.4",z=Y=>w(JSON.stringify(Y)),H=Y=>{let j=`@formspree/core@${F}`;return Y?`${Y} ${j}`:j};function D(Y,j,Q){Y instanceof FormData?Y.append(j,Q):Y[j]=Q}function ve(Y){return Y!==null&&typeof Y=="object"}var Oe=class{constructor(Y={}){this.project=Y.project,this.stripe=Y.stripe,typeof window<"u"&&(this.session=new C)}submitForm(Y,j){return d(this,arguments,function*(Q,oe,fe={}){let ce=fe.endpoint||"https://formspree.io",we=this.project?`${ce}/p/${this.project}/f/${Q}`:`${ce}/f/${Q}`,Ce={Accept:"application/json","Formspree-Client":H(fe.clientName)};this.session&&(Ce["Formspree-Session-Data"]=z(this.session.data())),oe instanceof FormData||(Ce["Content-Type"]="application/json");function Te(qe){return d(this,null,function*(){try{let De=yield(yield fetch(we,{method:"POST",mode:"cors",body:qe instanceof FormData?qe:JSON.stringify(qe),headers:Ce})).json();if(ve(De)){if(A(De))return Array.isArray(De.errors)?new L(...De.errors):new L({message:De.error});if(M(De))return new B(De.stripe.paymentIntentClientSecret,De.resubmitKey);if(I(De))return new N({next:De.next})}return new L({message:"Unexpected response format"})}catch(De){let Ct=De instanceof Error?De.message:`Unknown error while posting to Formspree: ${JSON.stringify(De)}`;return new L({message:Ct})}})}if(this.stripe&&fe.createPaymentMethod){let qe=yield fe.createPaymentMethod();if(qe.error)return new L({code:"STRIPE_CLIENT_ERROR",field:"paymentMethod",message:"Error creating payment method"});D(oe,"paymentMethod",qe.paymentMethod.id);let De=yield Te(oe);if(De.kind==="error")return De;if(De.kind==="stripePluginPending"){let Ct=yield this.stripe.handleCardAction(De.paymentIntentClientSecret);if(Ct.error)return new L({code:"STRIPE_CLIENT_ERROR",field:"paymentMethod",message:"Stripe SCA error"});oe instanceof FormData?oe.delete("paymentMethod"):delete oe.paymentMethod,D(oe,"paymentIntent",Ct.paymentIntent.id),D(oe,"resubmitKey",De.resubmitKey);let mr=yield Te(oe);return Ue(mr),mr}return De}let je=yield Te(oe);return Ue(je),je})}};function Ue(Y){let{kind:j}=Y;if(j!=="success"&&j!=="error")throw new Error(`Unexpected submission result (kind: ${j})`)}var Ae=Y=>new Oe(Y),ae=()=>(de||(de=Ae()),de),de;return Sg}var Cy=zV(),rh={},J2;function $V(){if(J2)return rh;J2=1,Object.defineProperty(rh,"__esModule",{value:!0});function t(C){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?t=function(N){return typeof N}:t=function(N){return N&&typeof Symbol=="function"&&N.constructor===Symbol&&N!==Symbol.prototype?"symbol":typeof N},t(C)}var e="https://js.stripe.com/v3",n=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,r="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",i=function(){for(var C=document.querySelectorAll('script[src^="'.concat(e,'"]')),N=0;N<C.length;N++){var I=C[N];if(n.test(I.src))return I}return null},o=function(C){var N=C&&!C.advancedFraudSignals?"?advancedFraudSignals=false":"",I=document.createElement("script");I.src="".concat(e).concat(N);var B=document.head||document.body;if(!B)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return B.appendChild(I),I},l=function(C,N){!C||!C._registerWrapper||C._registerWrapper({name:"stripe-js",version:"1.54.2",startTime:N})},d=null,f=function(C){return d!==null||(d=new Promise(function(N,I){if(typeof window>"u"||typeof document>"u"){N(null);return}if(window.Stripe&&C&&console.warn(r),window.Stripe){N(window.Stripe);return}try{var B=i();B&&C?console.warn(r):B||(B=o(C)),B.addEventListener("load",function(){window.Stripe?N(window.Stripe):I(new Error("Stripe.js not available"))}),B.addEventListener("error",function(){I(new Error("Failed to load Stripe.js"))})}catch(M){I(M);return}})),d},p=function(C,N,I){if(C===null)return null;var B=C.apply(void 0,N);return l(B,I),B},y=function(C){var N=`invalid load parameters; expected object of shape

    {advancedFraudSignals: boolean}

but received

    `.concat(JSON.stringify(C),`
`);if(C===null||t(C)!=="object")throw new Error(N);if(Object.keys(C).length===1&&typeof C.advancedFraudSignals=="boolean")return C;throw new Error(N)},w,S=!1,E=function(){for(var C=arguments.length,N=new Array(C),I=0;I<C;I++)N[I]=arguments[I];S=!0;var B=Date.now();return f(w).then(function(M){return p(M,N,B)})};return E.setLoadParameters=function(C){if(S&&w){var N=y(C),I=Object.keys(N),B=I.reduce(function(M,$){var L;return M&&C[$]===((L=w)===null||L===void 0?void 0:L[$])},!0);if(B)return}if(S)throw new Error("You cannot change load parameters after calling loadStripe");w=y(C)},rh.loadStripe=E,rh}var X2,Z2;function qV(){return Z2||(Z2=1,X2=$V()),X2}qV();function kg(t){let{prefix:e,field:n,errors:r,...i}=t;if(r==null)return null;let o=n?r.getFieldErrors(n):r.getFormErrors();return o.length===0?null:Fe.createElement("div",{...i},e?`${e} `:null,o.map(l=>l.message).join(", "))}var HV=O.createContext({elements:null});function WV(){return O.useContext(HV)}var GV=Fe.createContext(null);function KV(){return O.useContext(GV)??{client:Cy.getDefaultClient()}}var QV="2.5.5",YV=`@formspree/react@${QV}`;function JV(t,e={}){let n=KV(),{elements:r}=WV(),{client:i=n.client,extraData:o,onError:l,onSuccess:d,origin:f}=e,{stripe:p}=i;return async function(y){let w=XV(y)?ZV(y):y;if(typeof o=="object")for(let[N,I]of Object.entries(o)){let B;typeof I=="function"?B=await I():B=I,B!==void 0&&Cy.appendExtraData(w,N,B)}let S=r==null?void 0:r.getElement(BV),E=p&&S?()=>p.createPaymentMethod({type:"card",card:S,billing_details:eB(w)}):void 0,C=await i.submitForm(t,w,{endpoint:f,clientName:YV,createPaymentMethod:E});Cy.isSubmissionError(C)?l==null||l(C):d==null||d(C)}}function XV(t){return"preventDefault"in t&&typeof t.preventDefault=="function"}function ZV(t){t.preventDefault();let e=t.currentTarget;if(e.tagName!="FORM")throw new Error("submit was triggered for a non-form element");return new FormData(e)}function eB(t){let e={address:tB(t)};for(let n of["name","email","phone"]){let r=t instanceof FormData?t.get(n):t[n];r&&typeof r=="string"&&(e[n]=r)}return e}function tB(t){let e={};for(let[n,r]of[["address_line1","line1"],["address_line2","line2"],["address_city","city"],["address_country","country"],["address_state","state"],["address_postal_code","postal_code"]]){let i=t instanceof FormData?t.get(n):t[n];i&&typeof i=="string"&&(e[r]=i)}return e}function nB(t,e={}){let[n,r]=O.useState(null),[i,o]=O.useState(null),[l,d]=O.useState(!1),[f,p]=O.useState(!1),y=JV(t,{client:e.client,extraData:e.data,onError(w){r(w),d(!1),p(!1)},onSuccess(w){r(null),o(w),d(!1),p(!0)},origin:e.endpoint});return[{errors:n,result:i,submitting:l,succeeded:f},async function(w){d(!0),await y(w)},function(){r(null),o(null),d(!1),p(!1)}]}const rB=U.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 4rem 1.5rem;
  
  @media (min-width: 768px) {
    padding: 6rem 2rem;
  }
`,sB=U.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  
  span {
    color: var(--color-primary);
  }
`,iB=U.p`
  font-size: 1.125rem;
  color: var(--color-text-light);
  margin-bottom: 3rem;
  max-width: 600px;
`,aB=U.div`
  display: grid;
  gap: 3rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`,oB=U(ss.form)`
  background-color: var(--color-foreground);
  padding: 2rem;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
`,lB=U.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`,sh=U.div`
  margin-bottom: 1.5rem;
`,ih=U.label`
  display: block;
  font-weight: 500;
  margin-bottom: 0.5rem;
`,Eg=U.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background-color: var(--color-background);
  color: var(--color-text);
  font-size: 1rem;
  transition: border-color var(--transition-base);
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 2px rgba(43, 107, 237, 0.2);
  }
`,uB=U.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background-color: var(--color-background);
  color: var(--color-text);
  font-size: 1rem;
  transition: border-color var(--transition-base);
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 2px rgba(43, 107, 237, 0.2);
  }
`,cB=U.button`
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  padding: 0.875rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background-color var(--transition-base);
  
  &:hover:not(:disabled) {
    background-color: var(--color-tertiary);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,eS=U.div`
  padding: 1rem;
  border-radius: var(--radius-md);
  margin-top: 1.5rem;
  background-color: ${t=>t.$success?"rgba(55, 178, 124, 0.1)":"rgba(237, 67, 67, 0.1)"};
  color: ${t=>t.$success?"var(--color-secondary)":"#ED4343"};
  border: 1px solid ${t=>t.$success?"var(--color-secondary)":"#ED4343"};
`,dB=U.div``,hB=U.div`
  display: grid;
  gap: 1.5rem;
  margin-bottom: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,ah=U.div`
  background-color: var(--color-foreground);
  padding: 1.5rem;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-base), box-shadow var(--transition-base);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-md);
  }
`,oh=U.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(43, 107, 237, 0.1);
  color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`,lh=U.h3`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`,uh=U.p`
  color: var(--color-text);
`,Cg=U.a`
  color: var(--color-primary);
  display: flex;
  align-items: center;
  gap: 0.25rem;
  
  &:hover {
    text-decoration: underline;
  }
`,fB=()=>{const[t,e]=nB("xpwdnvwq"),[n,r]=O.useState(""),i=async o=>{o.preventDefault();const l=new FormData(o.currentTarget),d=Object.fromEntries(l.entries());if(!d.name||!d.email||!d.message){r("All fields are required");return}if(typeof d.email=="string"&&(!d.email.includes("@")||!d.email.includes("."))){r("Please enter a valid email address");return}r(""),e(o)};return m.jsxs(rB,{children:[m.jsxs(sB,{children:["Get in ",m.jsx("span",{children:"Touch"})]}),m.jsx(iB,{children:"Feel free to reach out for collaborations, inquiries, or just to say hello. I'm always open to discussing new projects, ideas, or opportunities."}),m.jsxs(aB,{children:[m.jsxs(oB,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},onSubmit:i,children:[m.jsx(lB,{children:"Send a Message"}),m.jsxs(sh,{children:[m.jsx(ih,{htmlFor:"name",children:"Your Name"}),m.jsx(Eg,{id:"name",type:"text",name:"name",placeholder:"John Doe"})]}),m.jsxs(sh,{children:[m.jsx(ih,{htmlFor:"email",children:"Email Address"}),m.jsx(Eg,{id:"email",type:"email",name:"email",placeholder:"john@example.com"}),m.jsx(kg,{prefix:"Email",field:"email",errors:t.errors})]}),m.jsxs(sh,{children:[m.jsx(ih,{htmlFor:"subject",children:"Subject (Optional)"}),m.jsx(Eg,{id:"subject",type:"text",name:"subject",placeholder:"What's this about?"})]}),m.jsxs(sh,{children:[m.jsx(ih,{htmlFor:"message",children:"Your Message"}),m.jsx(uB,{id:"message",name:"message",placeholder:"Write your message here..."}),m.jsx(kg,{prefix:"Message",field:"message",errors:t.errors})]}),m.jsxs(cB,{type:"submit",disabled:t.submitting,children:[m.jsx(zL,{})," Send Message"]}),t.succeeded&&m.jsx(eS,{$success:!0,children:"Thank you for your message! I'll get back to you as soon as possible."}),n&&m.jsx(eS,{children:n}),m.jsx(kg,{errors:t.errors})]}),m.jsxs(dB,{children:[m.jsxs(hB,{children:[m.jsxs(ah,{children:[m.jsx(oh,{children:m.jsx(YC,{})}),m.jsx(lh,{children:"Email"}),m.jsx(uh,{children:m.jsx(Cg,{href:"mailto:abdoforanything1@gmail.com",children:"abdoforanything1@gmail.com"})})]}),m.jsxs(ah,{children:[m.jsx(oh,{children:m.jsx($L,{})}),m.jsx(lh,{children:"Phone"}),m.jsx(uh,{children:m.jsx(Cg,{href:"tel:+201119173529",children:"+20 1119173529"})})]}),m.jsxs(ah,{children:[m.jsx(oh,{children:m.jsx(KC,{})}),m.jsx(lh,{children:"WhatsApp"}),m.jsx(uh,{children:m.jsx(Cg,{href:"https://wa.me/201119173529",children:"Send a message"})})]}),m.jsxs(ah,{children:[m.jsx(oh,{children:m.jsx(VL,{})}),m.jsx(lh,{children:"Location"}),m.jsx(uh,{children:"Remote / Cairo, Egypt"})]})]}),m.jsx("div",{style:{marginTop:"2rem"},children:m.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221199.41595958156!2d31.22344900684888!3d30.059488723522844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1620569788602!5m2!1sen!2seg",width:"100%",height:"300",style:{border:0,borderRadius:"var(--radius-md)"},allowFullScreen:!0,loading:"lazy",title:"Cairo, Egypt Map"})})]})]})]})},pB=U.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 4rem 1.5rem;
  
  @media (min-width: 768px) {
    padding: 6rem 2rem;
  }
`,mB=U.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  
  span {
    color: var(--color-primary);
  }
`,gB=()=>m.jsxs(pB,{children:[m.jsxs(mB,{children:["404 - ",m.jsx("span",{children:"Page Not Found"})]}),m.jsx("p",{children:"The page you are looking for doesn't exist or has been moved."}),m.jsx("p",{children:"Please check the URL or navigate back to the homepage."})]}),yB=U.div`
  padding: 20px;
`,vB=U.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`,vu=U.div`
  background: ${({theme:t})=>t==="dark"?"#2d2d2d":"#f5f5f5"};
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  }
  
  h3 {
    color: ${({theme:t})=>t==="dark"?"#e0e0e0":"#333"};
    margin-bottom: 8px;
    font-size: 16px;
  }
  
  p {
    color: ${({theme:t})=>t==="dark"?"#60a5fa":"#2563eb"};
    font-size: 24px;
    font-weight: bold;
    margin: 0;
  }
`,bB=U.div`
  background: ${({theme:t})=>t==="dark"?"#2d2d2d":"#f5f5f5"};
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  h2 {
    margin-bottom: 15px;
    font-size: 20px;
    color: ${({theme:t})=>t==="dark"?"#e0e0e0":"#333"};
  }
  
  ul {
    padding-left: 0;
    list-style: none;
    
    li {
      padding: 12px 0;
      border-bottom: 1px solid ${({theme:t})=>t==="dark"?"#404040":"#e0e0e0"};
      
      &:last-child {
        border-bottom: none;
      }
    }
  }
`,wB=()=>{const[t,e]=O.useState({projects:0,skills:0,researchPapers:0,blogPosts:0,messages:0}),[n,r]=O.useState(!0);return O.useEffect(()=>{(async()=>{try{const i=In(ut,"projects"),o=In(ut,"skills"),l=In(ut,"research"),d=In(ut,"blog"),f=In(ut,"messages"),[p,y,w,S,E]=await Promise.all([Kr(i),Kr(o),Kr(l),Kr(d),Kr(f)]);e({projects:p.size,skills:y.size,researchPapers:w.size,blogPosts:S.size,messages:E.size}),r(!1)}catch(i){console.error("Error fetching dashboard data:",i),r(!1)}})()},[]),m.jsxs(yB,{children:[m.jsx("h1",{children:"Admin Dashboard"}),n?m.jsx("p",{children:"Loading dashboard data..."}):m.jsxs(m.Fragment,{children:[m.jsxs(vB,{children:[m.jsxs(vu,{children:[m.jsx("h3",{children:"Projects"}),m.jsx("p",{children:t.projects})]}),m.jsxs(vu,{children:[m.jsx("h3",{children:"Skills"}),m.jsx("p",{children:t.skills})]}),m.jsxs(vu,{children:[m.jsx("h3",{children:"Research Papers"}),m.jsx("p",{children:t.researchPapers})]}),m.jsxs(vu,{children:[m.jsx("h3",{children:"Blog Posts"}),m.jsx("p",{children:t.blogPosts})]}),m.jsxs(vu,{children:[m.jsx("h3",{children:"Contact Messages"}),m.jsx("p",{children:t.messages})]})]}),m.jsxs(bB,{children:[m.jsx("h2",{children:"Recent Activity"}),m.jsx("ul",{children:m.jsxs("li",{children:["Portfolio website launched - ",new Date().toLocaleDateString()]})})]})]})]})},xB=U.div`
  padding: 20px;
`,SB=U.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
`,kB=U.div`
  background: ${({theme:t})=>t==="dark"?"#2d2d2d":"#f5f5f5"};
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  .project-info {
    flex: 1;
    
    h3 {
      margin: 0 0 10px 0;
      color: ${({theme:t})=>t==="dark"?"#e0e0e0":"#333"};
    }
    
    p {
      margin: 0;
      color: ${({theme:t})=>t==="dark"?"#b0b0b0":"#666"};
    }
  }
  
  .project-actions {
    display: flex;
    gap: 10px;
  }
`,ch=U.button`
  background: ${t=>t.variant==="danger"?"#e53e3e":t.variant==="primary"?"#3182ce":"#718096"};
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 0.8;
  }
`,EB=U.form`
  background: ${({theme:t})=>t==="dark"?"#2d2d2d":"#f5f5f5"};
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  h2 {
    margin-top: 0;
    margin-bottom: 20px;
    color: ${({theme:t})=>t==="dark"?"#e0e0e0":"#333"};
  }
  
  .form-group {
    margin-bottom: 15px;
    
    label {
      display: block;
      margin-bottom: 5px;
      color: ${({theme:t})=>t==="dark"?"#e0e0e0":"#333"};
    }
    
    input, textarea, select {
      width: 100%;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
      background: ${({theme:t})=>t==="dark"?"#1a1a1a":"#ffffff"};
      color: ${({theme:t})=>t==="dark"?"#e0e0e0":"#333"};
    }
    
    textarea {
      min-height: 100px;
    }
  }
  
  .form-buttons {
    display: flex;
    gap: 10px;
    margin-top: 20px;
  }
`,tS={title:"",description:"",imageUrl:"",technologies:[],githubUrl:"",demoUrl:"",slug:"",category:"web",featured:!1},CB=()=>{const[t,e]=O.useState([]),[n,r]=O.useState(tS),[i,o]=O.useState(!1),[l,d]=O.useState(null),[f,p]=O.useState(null),[y,w]=O.useState(!1);O.useEffect(()=>{S()},[]);const S=async()=>{w(!0);try{const L=In(ut,"projects"),W=(await Kr(L)).docs.map(Z=>({id:Z.id,...Z.data()}));e(W)}catch(L){console.error("Error fetching projects:",L)}finally{w(!1)}},E=L=>{const{name:W,value:Z,type:P}=L.target;if(W==="technologies")r({...n,[W]:Z.split(",").map(_=>_.trim())});else if(P==="checkbox"){const _=L.target;r({...n,[W]:_.checked})}else r({...n,[W]:Z})},C=L=>{L.target.files&&L.target.files[0]&&p(L.target.files[0])},N=async L=>{const W=tl(nl,`projects/${Date.now()}_${L.name}`);return await Tv(W,L),_v(W)},I=async L=>{L.preventDefault(),w(!0);try{let W=n.imageUrl;f&&(W=await N(f));const Z={...n,imageUrl:W,updatedAt:new Date};if(i&&l){const P=Lr(ut,"projects",l);await pc(P,Z)}else await Of(In(ut,"projects"),{...Z,createdAt:new Date});$(),S()}catch(W){console.error("Error saving project:",W)}finally{w(!1)}},B=L=>{r({title:L.title,description:L.description,imageUrl:L.imageUrl,technologies:L.technologies,githubUrl:L.githubUrl,demoUrl:L.demoUrl,slug:L.slug,category:L.category,featured:L.featured}),d(L.id),o(!0)},M=async(L,W)=>{if(window.confirm("Are you sure you want to delete this project?")){w(!0);try{if(await mc(Lr(ut,"projects",L)),W&&W.includes("firebase")){const Z=tl(nl,W);await Iv(Z)}S()}catch(Z){console.error("Error deleting project:",Z)}finally{w(!1)}}},$=()=>{r(tS),p(null),o(!1),d(null)};return m.jsxs(xB,{children:[m.jsx("h1",{children:"Manage Projects"}),m.jsxs(EB,{onSubmit:I,children:[m.jsx("h2",{children:i?"Edit Project":"Add New Project"}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{htmlFor:"title",children:"Title"}),m.jsx("input",{id:"title",name:"title",type:"text",value:n.title,onChange:E,required:!0})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{htmlFor:"slug",children:"Slug (URL-friendly name)"}),m.jsx("input",{id:"slug",name:"slug",type:"text",value:n.slug,onChange:E,required:!0})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{htmlFor:"description",children:"Description"}),m.jsx("textarea",{id:"description",name:"description",value:n.description,onChange:E,required:!0})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{htmlFor:"image",children:"Project Image"}),m.jsx("input",{id:"image",name:"image",type:"file",accept:"image/*",onChange:C}),n.imageUrl&&m.jsx("div",{style:{marginTop:"10px"},children:m.jsx("img",{src:n.imageUrl,alt:"Current project",style:{maxWidth:"200px",maxHeight:"150px"}})})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{htmlFor:"technologies",children:"Technologies (comma-separated)"}),m.jsx("input",{id:"technologies",name:"technologies",type:"text",value:n.technologies.join(", "),onChange:E})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{htmlFor:"category",children:"Category"}),m.jsxs("select",{id:"category",name:"category",value:n.category,onChange:E,children:[m.jsx("option",{value:"ml",children:"Machine Learning"}),m.jsx("option",{value:"data-science",children:"Data Science"}),m.jsx("option",{value:"web",children:"Web Development"}),m.jsx("option",{value:"physics",children:"Physics-Informed ML"}),m.jsx("option",{value:"other",children:"Other"})]})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{htmlFor:"githubUrl",children:"GitHub URL"}),m.jsx("input",{id:"githubUrl",name:"githubUrl",type:"url",value:n.githubUrl,onChange:E})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{htmlFor:"demoUrl",children:"Demo URL"}),m.jsx("input",{id:"demoUrl",name:"demoUrl",type:"url",value:n.demoUrl,onChange:E})]}),m.jsx("div",{className:"form-group",children:m.jsxs("label",{children:[m.jsx("input",{name:"featured",type:"checkbox",checked:n.featured,onChange:E})," ","Featured Project"]})}),m.jsxs("div",{className:"form-buttons",children:[m.jsx(ch,{type:"submit",variant:"primary",children:i?"Update Project":"Add Project"}),i&&m.jsx(ch,{type:"button",onClick:$,children:"Cancel"})]})]}),m.jsx("h2",{children:"Projects List"}),y?m.jsx("p",{children:"Loading projects..."}):m.jsx(SB,{children:t.length===0?m.jsx("p",{children:"No projects found. Add your first project above."}):t.map(L=>m.jsxs(kB,{children:[m.jsxs("div",{className:"project-info",children:[m.jsx("h3",{children:L.title}),m.jsxs("p",{children:[L.description.substring(0,100),"..."]}),m.jsxs("p",{children:["Category: ",L.category]})]}),m.jsxs("div",{className:"project-actions",children:[m.jsx(ch,{onClick:()=>B(L),children:"Edit"}),m.jsx(ch,{variant:"danger",onClick:()=>M(L.id,L.imageUrl),children:"Delete"})]})]},L.id))})]})},TB=U.div`
  padding: 20px;
`,_B=U.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 15px;
`,IB=U.div`
  background: ${({theme:t})=>t==="dark"?"#2d2d2d":"#f5f5f5"};
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  h3 {
    margin-top: 0;
    margin-bottom: 10px;
    color: ${({theme:t})=>t==="dark"?"#e0e0e0":"#333"};
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .progress {
    height: 10px;
    background-color: ${({theme:t})=>t==="dark"?"#444":"#ddd"};
    border-radius: 5px;
    overflow: hidden;
    margin-bottom: 15px;
    
    .progress-bar {
      height: 100%;
      background-color: ${({theme:t})=>t==="dark"?"#60a5fa":"#3182ce"};
    }
  }
  
  .actions {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }
`,dh=U.button`
  background: ${t=>t.variant==="danger"?"#e53e3e":t.variant==="primary"?"#3182ce":"#718096"};
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 0.8;
  }
`,PB=U.form`
  background: ${({theme:t})=>t==="dark"?"#2d2d2d":"#f5f5f5"};
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  h2 {
    margin-top: 0;
    margin-bottom: 20px;
    color: ${({theme:t})=>t==="dark"?"#e0e0e0":"#333"};
  }
  
  .form-group {
    margin-bottom: 15px;
    
    label {
      display: block;
      margin-bottom: 5px;
      color: ${({theme:t})=>t==="dark"?"#e0e0e0":"#333"};
    }
    
    input, select, textarea {
      width: 100%;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
      background: ${({theme:t})=>t==="dark"?"#1a1a1a":"#ffffff"};
      color: ${({theme:t})=>t==="dark"?"#e0e0e0":"#333"};
    }
    
    .range-value {
      display: block;
      text-align: center;
      margin-top: 5px;
      font-weight: bold;
    }
  }
  
  .form-buttons {
    display: flex;
    gap: 10px;
    margin-top: 20px;
  }
`,nS={name:"",category:"machine-learning",proficiency:80,description:"",yearsExperience:1},AB=()=>{const[t,e]=O.useState([]),[n,r]=O.useState(nS),[i,o]=O.useState(!1),[l,d]=O.useState(null),[f,p]=O.useState(!1);O.useEffect(()=>{y()},[]);const y=async()=>{p(!0);try{const I=In(ut,"skills"),B=(await Kr(I)).docs.map(M=>({id:M.id,...M.data()}));e(B)}catch(I){console.error("Error fetching skills:",I)}finally{p(!1)}},w=I=>{const{name:B,value:M,type:$}=I.target;r($==="number"||B==="proficiency"?{...n,[B]:Number(M)}:{...n,[B]:M})},S=async I=>{I.preventDefault(),p(!0);try{const B={...n,updatedAt:new Date};if(i&&l){const M=Lr(ut,"skills",l);await pc(M,B)}else await Of(In(ut,"skills"),{...B,createdAt:new Date});N(),y()}catch(B){console.error("Error saving skill:",B)}finally{p(!1)}},E=I=>{r({name:I.name,category:I.category,proficiency:I.proficiency,description:I.description,yearsExperience:I.yearsExperience}),d(I.id),o(!0)},C=async I=>{if(window.confirm("Are you sure you want to delete this skill?")){p(!0);try{await mc(Lr(ut,"skills",I)),y()}catch(B){console.error("Error deleting skill:",B)}finally{p(!1)}}},N=()=>{r(nS),o(!1),d(null)};return m.jsxs(TB,{children:[m.jsx("h1",{children:"Manage Skills"}),m.jsxs(PB,{onSubmit:S,children:[m.jsx("h2",{children:i?"Edit Skill":"Add New Skill"}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{htmlFor:"name",children:"Skill Name"}),m.jsx("input",{id:"name",name:"name",type:"text",value:n.name,onChange:w,required:!0})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{htmlFor:"category",children:"Category"}),m.jsxs("select",{id:"category",name:"category",value:n.category,onChange:w,children:[m.jsx("option",{value:"machine-learning",children:"Machine Learning"}),m.jsx("option",{value:"data-science",children:"Data Science"}),m.jsx("option",{value:"web-development",children:"Web Development"}),m.jsx("option",{value:"physics",children:"Physics"}),m.jsx("option",{value:"programming",children:"Programming Languages"}),m.jsx("option",{value:"tools",children:"Tools & Frameworks"})]})]}),m.jsxs("div",{className:"form-group",children:[m.jsxs("label",{htmlFor:"proficiency",children:["Proficiency (",n.proficiency,"%)"]}),m.jsx("input",{id:"proficiency",name:"proficiency",type:"range",min:"0",max:"100",value:n.proficiency,onChange:w})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{htmlFor:"yearsExperience",children:"Years of Experience"}),m.jsx("input",{id:"yearsExperience",name:"yearsExperience",type:"number",min:"0",step:"0.5",value:n.yearsExperience,onChange:w,required:!0})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{htmlFor:"description",children:"Description"}),m.jsx("textarea",{id:"description",name:"description",value:n.description,onChange:w,rows:3})]}),m.jsxs("div",{className:"form-buttons",children:[m.jsx(dh,{type:"submit",variant:"primary",children:i?"Update Skill":"Add Skill"}),i&&m.jsx(dh,{type:"button",onClick:N,children:"Cancel"})]})]}),m.jsx("h2",{children:"Skills List"}),f?m.jsx("p",{children:"Loading skills..."}):m.jsx(_B,{children:t.length===0?m.jsx("p",{children:"No skills found. Add your first skill above."}):t.map(I=>m.jsxs(IB,{children:[m.jsxs("h3",{children:[I.name,m.jsxs("small",{children:["(",I.category,")"]})]}),m.jsx("div",{className:"progress",children:m.jsx("div",{className:"progress-bar",style:{width:`${I.proficiency}%`}})}),m.jsx("p",{children:I.description}),m.jsxs("p",{children:["Experience: ",I.yearsExperience," ",I.yearsExperience===1?"year":"years"]}),m.jsxs("div",{className:"actions",children:[m.jsx(dh,{onClick:()=>E(I),children:"Edit"}),m.jsx(dh,{variant:"danger",onClick:()=>C(I.id),children:"Delete"})]})]},I.id))})]})},jB=U.div`
  padding: 20px;
`,NB=U.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
`,DB=U.div`
  background: ${({theme:t})=>t==="dark"?"#2d2d2d":"#f5f5f5"};
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  h3 {
    margin-top: 0;
    margin-bottom: 10px;
    color: ${({theme:t})=>t==="dark"?"#e0e0e0":"#333"};
  }
  
  .publication-meta {
    font-size: 0.9rem;
    color: ${({theme:t})=>t==="dark"?"#b0b0b0":"#666"};
    margin-bottom: 15px;
  }
  
  .actions {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 15px;
  }
`,hh=U.button`
  background: ${t=>t.variant==="danger"?"#e53e3e":t.variant==="primary"?"#3182ce":"#718096"};
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 0.8;
  }
`,RB=U.form`
  background: ${({theme:t})=>t==="dark"?"#2d2d2d":"#f5f5f5"};
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  h2 {
    margin-top: 0;
    margin-bottom: 20px;
    color: ${({theme:t})=>t==="dark"?"#e0e0e0":"#333"};
  }
  
  .form-group {
    margin-bottom: 15px;
    
    label {
      display: block;
      margin-bottom: 5px;
      color: ${({theme:t})=>t==="dark"?"#e0e0e0":"#333"};
    }
    
    input, select, textarea {
      width: 100%;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
      background: ${({theme:t})=>t==="dark"?"#1a1a1a":"#ffffff"};
      color: ${({theme:t})=>t==="dark"?"#e0e0e0":"#333"};
    }
    
    textarea {
      min-height: 100px;
    }
  }
  
  .form-buttons {
    display: flex;
    gap: 10px;
    margin-top: 20px;
  }
`,rS={title:"",authors:[],abstract:"",publication:"",publicationDate:"",doi:"",pdfUrl:"",category:"physics-informed-ml",tags:[],featured:!1},LB=()=>{const[t,e]=O.useState([]),[n,r]=O.useState(rS),[i,o]=O.useState(!1),[l,d]=O.useState(null),[f,p]=O.useState(null),[y,w]=O.useState(!1);O.useEffect(()=>{S()},[]);const S=async()=>{w(!0);try{const L=In(ut,"research"),W=(await Kr(L)).docs.map(Z=>({id:Z.id,...Z.data()}));e(W)}catch(L){console.error("Error fetching research items:",L)}finally{w(!1)}},E=L=>{const{name:W,value:Z,type:P}=L.target;if(W==="authors"||W==="tags")r({...n,[W]:Z.split(",").map(_=>_.trim())});else if(P==="checkbox"){const _=L.target;r({...n,[W]:_.checked})}else r({...n,[W]:Z})},C=L=>{L.target.files&&L.target.files[0]&&p(L.target.files[0])},N=async L=>{const W=tl(nl,`research/${Date.now()}_${L.name}`);return await Tv(W,L),_v(W)},I=async L=>{L.preventDefault(),w(!0);try{let W=n.pdfUrl;f&&(W=await N(f));const Z={...n,pdfUrl:W,updatedAt:new Date};if(i&&l){const P=Lr(ut,"research",l);await pc(P,Z)}else await Of(In(ut,"research"),{...Z,createdAt:new Date});$(),S()}catch(W){console.error("Error saving research item:",W)}finally{w(!1)}},B=L=>{r({title:L.title,authors:L.authors,abstract:L.abstract,publication:L.publication,publicationDate:L.publicationDate,doi:L.doi,pdfUrl:L.pdfUrl,category:L.category,tags:L.tags,featured:L.featured}),d(L.id),o(!0)},M=async(L,W)=>{if(window.confirm("Are you sure you want to delete this research item?")){w(!0);try{if(await mc(Lr(ut,"research",L)),W&&W.includes("firebase")){const Z=tl(nl,W);await Iv(Z)}S()}catch(Z){console.error("Error deleting research item:",Z)}finally{w(!1)}}},$=()=>{r(rS),p(null),o(!1),d(null)};return m.jsxs(jB,{children:[m.jsx("h1",{children:"Manage Research"}),m.jsxs(RB,{onSubmit:I,children:[m.jsx("h2",{children:i?"Edit Research Item":"Add New Research Item"}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{htmlFor:"title",children:"Title"}),m.jsx("input",{id:"title",name:"title",type:"text",value:n.title,onChange:E,required:!0})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{htmlFor:"authors",children:"Authors (comma-separated)"}),m.jsx("input",{id:"authors",name:"authors",type:"text",value:n.authors.join(", "),onChange:E,required:!0})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{htmlFor:"abstract",children:"Abstract"}),m.jsx("textarea",{id:"abstract",name:"abstract",value:n.abstract,onChange:E,required:!0})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{htmlFor:"publication",children:"Publication/Conference"}),m.jsx("input",{id:"publication",name:"publication",type:"text",value:n.publication,onChange:E})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{htmlFor:"publicationDate",children:"Publication Date"}),m.jsx("input",{id:"publicationDate",name:"publicationDate",type:"date",value:n.publicationDate,onChange:E})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{htmlFor:"doi",children:"DOI"}),m.jsx("input",{id:"doi",name:"doi",type:"text",value:n.doi,onChange:E})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{htmlFor:"pdf",children:"PDF File"}),m.jsx("input",{id:"pdf",name:"pdf",type:"file",accept:".pdf",onChange:C}),n.pdfUrl&&m.jsx("div",{style:{marginTop:"10px"},children:m.jsx("a",{href:n.pdfUrl,target:"_blank",rel:"noopener noreferrer",children:"View Current PDF"})})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{htmlFor:"category",children:"Category"}),m.jsxs("select",{id:"category",name:"category",value:n.category,onChange:E,children:[m.jsx("option",{value:"physics-informed-ml",children:"Physics-Informed ML"}),m.jsx("option",{value:"machine-learning",children:"Machine Learning"}),m.jsx("option",{value:"data-science",children:"Data Science"}),m.jsx("option",{value:"physics",children:"Physics"}),m.jsx("option",{value:"other",children:"Other"})]})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{htmlFor:"tags",children:"Tags (comma-separated)"}),m.jsx("input",{id:"tags",name:"tags",type:"text",value:n.tags.join(", "),onChange:E})]}),m.jsx("div",{className:"form-group",children:m.jsxs("label",{children:[m.jsx("input",{name:"featured",type:"checkbox",checked:n.featured,onChange:E})," ","Featured Research"]})}),m.jsxs("div",{className:"form-buttons",children:[m.jsx(hh,{type:"submit",variant:"primary",children:i?"Update Research Item":"Add Research Item"}),i&&m.jsx(hh,{type:"button",onClick:$,children:"Cancel"})]})]}),m.jsx("h2",{children:"Research List"}),y?m.jsx("p",{children:"Loading research items..."}):m.jsx(NB,{children:t.length===0?m.jsx("p",{children:"No research items found. Add your first research item above."}):t.map(L=>m.jsxs(DB,{children:[m.jsx("h3",{children:L.title}),m.jsxs("div",{className:"publication-meta",children:[m.jsxs("div",{children:["Authors: ",L.authors.join(", ")]}),L.publication&&m.jsxs("div",{children:["Publication: ",L.publication]}),L.publicationDate&&m.jsxs("div",{children:["Date: ",new Date(L.publicationDate).toLocaleDateString()]}),L.doi&&m.jsxs("div",{children:["DOI: ",L.doi]})]}),m.jsxs("p",{children:[L.abstract.substring(0,200),"..."]}),L.tags.length>0&&m.jsxs("div",{style:{marginTop:"10px"},children:["Tags: ",L.tags.join(", ")]}),m.jsxs("div",{className:"actions",children:[m.jsx(hh,{onClick:()=>B(L),children:"Edit"}),m.jsx(hh,{variant:"danger",onClick:()=>M(L.id,L.pdfUrl),children:"Delete"})]})]},L.id))})]})},OB=U.div`
  padding: 20px;
`,MB=U.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
`,FB=U.div`
  background: ${({theme:t})=>t==="dark"?"#2d2d2d":"#f5f5f5"};
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  h3 {
    margin-top: 0;
    margin-bottom: 10px;
    color: ${({theme:t})=>t==="dark"?"#e0e0e0":"#333"};
  }
  
  .post-meta {
    font-size: 0.9rem;
    color: ${({theme:t})=>t==="dark"?"#b0b0b0":"#666"};
    margin-bottom: 15px;
  }
  
  .actions {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 15px;
  }
`,bu=U.button`
  background: ${t=>t.variant==="danger"?"#e53e3e":t.variant==="primary"?"#3182ce":"#718096"};
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 0.8;
  }
`,UB=U.form`
  background: ${({theme:t})=>t==="dark"?"#2d2d2d":"#f5f5f5"};
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  h2 {
    margin-top: 0;
    margin-bottom: 20px;
    color: ${({theme:t})=>t==="dark"?"#e0e0e0":"#333"};
  }
  
  .form-group {
    margin-bottom: 15px;
    
    label {
      display: block;
      margin-bottom: 5px;
      color: ${({theme:t})=>t==="dark"?"#e0e0e0":"#333"};
    }
    
    input, select, textarea {
      width: 100%;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
      background: ${({theme:t})=>t==="dark"?"#1a1a1a":"#ffffff"};
      color: ${({theme:t})=>t==="dark"?"#e0e0e0":"#333"};
    }
    
    textarea {
      min-height: 200px;
    }
  }
  
  .form-buttons {
    display: flex;
    gap: 10px;
    margin-top: 20px;
  }
`,sS={title:"",slug:"",content:"",excerpt:"",imageUrl:"",publishDate:new Date().toISOString().split("T")[0],tags:[],category:"machine-learning",featured:!1},VB=()=>{const[t,e]=O.useState([]),[n,r]=O.useState(sS),[i,o]=O.useState(!1),[l,d]=O.useState(null),[f,p]=O.useState(null),[y,w]=O.useState(!1);O.useEffect(()=>{S()},[]);const S=async()=>{w(!0);try{const W=In(ut,"blog"),Z=(await Kr(W)).docs.map(P=>({id:P.id,...P.data()}));e(Z)}catch(W){console.error("Error fetching blog posts:",W)}finally{w(!1)}},E=W=>{const{name:Z,value:P,type:_}=W.target;if(Z==="tags")r({...n,[Z]:P.split(",").map(A=>A.trim())});else if(_==="checkbox"){const A=W.target;r({...n,[Z]:A.checked})}else r({...n,[Z]:P})},C=W=>{W.target.files&&W.target.files[0]&&p(W.target.files[0])},N=async W=>{const Z=tl(nl,`blog/${Date.now()}_${W.name}`);return await Tv(Z,W),_v(Z)},I=async W=>{W.preventDefault(),w(!0);try{let Z=n.imageUrl;f&&(Z=await N(f));const P={...n,imageUrl:Z,updatedAt:new Date};if(i&&l){const _=Lr(ut,"blog",l);await pc(_,P)}else await Of(In(ut,"blog"),{...P,createdAt:new Date});L(),S()}catch(Z){console.error("Error saving blog post:",Z)}finally{w(!1)}},B=W=>{r({title:W.title,slug:W.slug,content:W.content,excerpt:W.excerpt,imageUrl:W.imageUrl,publishDate:W.publishDate,tags:W.tags,category:W.category,featured:W.featured}),d(W.id),o(!0)},M=async(W,Z)=>{if(window.confirm("Are you sure you want to delete this blog post?")){w(!0);try{if(await mc(Lr(ut,"blog",W)),Z&&Z.includes("firebase")){const P=tl(nl,Z);await Iv(P)}S()}catch(P){console.error("Error deleting blog post:",P)}finally{w(!1)}}},$=()=>{const W=n.title.toLowerCase().replace(/[^\w\s]/gi,"").replace(/\s+/g,"-");r({...n,slug:W})},L=()=>{r(sS),p(null),o(!1),d(null)};return m.jsxs(OB,{children:[m.jsx("h1",{children:"Manage Blog"}),m.jsxs(UB,{onSubmit:I,children:[m.jsx("h2",{children:i?"Edit Blog Post":"Add New Blog Post"}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{htmlFor:"title",children:"Title"}),m.jsx("input",{id:"title",name:"title",type:"text",value:n.title,onChange:E,onBlur:()=>!n.slug&&$(),required:!0})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{htmlFor:"slug",children:"Slug (URL-friendly name)"}),m.jsxs("div",{style:{display:"flex",gap:"10px"},children:[m.jsx("input",{id:"slug",name:"slug",type:"text",value:n.slug,onChange:E,required:!0,style:{flex:1}}),m.jsx(bu,{type:"button",onClick:$,children:"Generate"})]})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{htmlFor:"excerpt",children:"Excerpt"}),m.jsx("textarea",{id:"excerpt",name:"excerpt",value:n.excerpt,onChange:E,rows:2,required:!0})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{htmlFor:"content",children:"Content (Markdown supported)"}),m.jsx("textarea",{id:"content",name:"content",value:n.content,onChange:E,rows:10,required:!0})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{htmlFor:"image",children:"Featured Image"}),m.jsx("input",{id:"image",name:"image",type:"file",accept:"image/*",onChange:C}),n.imageUrl&&m.jsx("div",{style:{marginTop:"10px"},children:m.jsx("img",{src:n.imageUrl,alt:"Featured",style:{maxWidth:"200px",maxHeight:"150px"}})})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{htmlFor:"publishDate",children:"Publish Date"}),m.jsx("input",{id:"publishDate",name:"publishDate",type:"date",value:n.publishDate,onChange:E,required:!0})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{htmlFor:"category",children:"Category"}),m.jsxs("select",{id:"category",name:"category",value:n.category,onChange:E,children:[m.jsx("option",{value:"machine-learning",children:"Machine Learning"}),m.jsx("option",{value:"data-science",children:"Data Science"}),m.jsx("option",{value:"physics-informed-ml",children:"Physics-Informed ML"}),m.jsx("option",{value:"web-development",children:"Web Development"}),m.jsx("option",{value:"tutorials",children:"Tutorials"}),m.jsx("option",{value:"other",children:"Other"})]})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{htmlFor:"tags",children:"Tags (comma-separated)"}),m.jsx("input",{id:"tags",name:"tags",type:"text",value:n.tags.join(", "),onChange:E})]}),m.jsx("div",{className:"form-group",children:m.jsxs("label",{children:[m.jsx("input",{name:"featured",type:"checkbox",checked:n.featured,onChange:E})," ","Featured Post"]})}),m.jsxs("div",{className:"form-buttons",children:[m.jsx(bu,{type:"submit",variant:"primary",children:i?"Update Post":"Publish Post"}),i&&m.jsx(bu,{type:"button",onClick:L,children:"Cancel"})]})]}),m.jsx("h2",{children:"Blog Posts"}),y?m.jsx("p",{children:"Loading blog posts..."}):m.jsx(MB,{children:t.length===0?m.jsx("p",{children:"No blog posts found. Add your first post above."}):t.map(W=>m.jsxs(FB,{children:[m.jsx("h3",{children:W.title}),m.jsxs("div",{className:"post-meta",children:[m.jsxs("div",{children:["Published: ",new Date(W.publishDate).toLocaleDateString()]}),m.jsxs("div",{children:["Category: ",W.category]}),W.tags.length>0&&m.jsxs("div",{children:["Tags: ",W.tags.join(", ")]})]}),m.jsx("p",{children:W.excerpt}),m.jsxs("div",{className:"actions",children:[m.jsx(bu,{onClick:()=>B(W),children:"Edit"}),m.jsx(bu,{variant:"danger",onClick:()=>M(W.id,W.imageUrl),children:"Delete"})]})]},W.id))})]})},BB=U.div`
  padding: 20px;
`,zB=U.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
`,$B=U.div`
  background: ${({theme:t})=>t==="dark"?"#2d2d2d":"#f5f5f5"};
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  h3 {
    margin-top: 0;
    margin-bottom: 5px;
    color: ${({theme:t})=>t==="dark"?"#e0e0e0":"#333"};
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .message-meta {
    font-size: 0.9rem;
    color: ${({theme:t})=>t==="dark"?"#b0b0b0":"#666"};
    margin-bottom: 15px;
  }
  
  .actions {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 15px;
  }
`,iS=U.button`
  background: ${t=>t.variant==="danger"?"#e53e3e":t.variant==="primary"?"#3182ce":"#718096"};
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 0.8;
  }
`,qB=U.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  flex-wrap: wrap;
  
  .filter-item {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  select {
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
    background: ${({theme:t})=>t==="dark"?"#1a1a1a":"#ffffff"};
    color: ${({theme:t})=>t==="dark"?"#e0e0e0":"#333"};
  }
`,HB=()=>{const[t,e]=O.useState([]),[n,r]=O.useState(!1),[i,o]=O.useState("all");O.useEffect(()=>{l()},[]);const l=async()=>{r(!0);try{const S=In(ut,"messages"),E=(await Kr(S)).docs.map(C=>({id:C.id,...C.data()}));E.sort((C,N)=>{var I,B,M,$;const L=((B=(I=C.createdAt)==null?void 0:I.toDate)==null?void 0:B.call(I))||new Date(C.createdAt);return((($=(M=N.createdAt)==null?void 0:M.toDate)==null?void 0:$.call(M))||new Date(N.createdAt)).getTime()-L.getTime()}),e(E)}catch(S){console.error("Error fetching messages:",S)}finally{r(!1)}},d=async(S,E)=>{try{const C=Lr(ut,"messages",S);await pc(C,{read:!E}),e(N=>N.map(I=>I.id===S?{...I,read:!E}:I))}catch(C){console.error("Error updating message status:",C)}},f=async S=>{if(window.confirm("Are you sure you want to delete this message?"))try{await mc(Lr(ut,"messages",S)),e(E=>E.filter(C=>C.id!==S))}catch(E){console.error("Error deleting message:",E)}},p=t.filter(S=>i==="all"?!0:i==="read"?S.read:i==="unread"?!S.read:!0),y=S=>{if(!S)return"Unknown Date";try{const E=S.toDate?S.toDate():new Date(S);return E.toLocaleDateString()+" "+E.toLocaleTimeString()}catch{return"Invalid Date"}},w=t.filter(S=>!S.read).length;return m.jsxs(BB,{children:[m.jsx("h1",{children:"Contact Messages"}),m.jsxs("p",{children:["You have ",w," unread message",w!==1?"s":"","."]}),m.jsx(qB,{children:m.jsxs("div",{className:"filter-item",children:[m.jsx("label",{htmlFor:"status-filter",children:"Status:"}),m.jsxs("select",{id:"status-filter",value:i,onChange:S=>o(S.target.value),children:[m.jsx("option",{value:"all",children:"All Messages"}),m.jsx("option",{value:"unread",children:"Unread"}),m.jsx("option",{value:"read",children:"Read"})]})]})}),n?m.jsx("p",{children:"Loading messages..."}):m.jsx(zB,{children:p.length===0?m.jsx("p",{children:"No messages found."}):p.map(S=>m.jsxs($B,{children:[m.jsxs("h3",{children:[S.subject||"No Subject",!S.read&&m.jsx("span",{style:{backgroundColor:"#3182ce",color:"white",fontSize:"0.8rem",padding:"3px 8px",borderRadius:"10px",marginLeft:"10px"},children:"New"})]}),m.jsxs("div",{className:"message-meta",children:[m.jsxs("div",{children:["From: ",S.name," (",S.email,")"]}),m.jsxs("div",{children:["Received: ",y(S.createdAt)]})]}),m.jsx("p",{style:{whiteSpace:"pre-wrap"},children:S.message}),m.jsxs("div",{className:"actions",children:[m.jsxs(iS,{onClick:()=>d(S.id,S.read),children:["Mark as ",S.read?"Unread":"Read"]}),m.jsx(iS,{variant:"danger",onClick:()=>f(S.id),children:"Delete"})]})]},S.id))})]})},WB=U.div`
  max-width: 500px;
  margin: 60px auto;
  padding: 30px;
  background: ${({theme:t})=>t==="dark"?"#2d2d2d":"#f5f5f5"};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`,GB=U.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,aS=U.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  
  label {
    font-weight: 500;
    color: ${({theme:t})=>t==="dark"?"#e0e0e0":"#333"};
  }
  
  input {
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    background: ${({theme:t})=>t==="dark"?"#1a1a1a":"#ffffff"};
    color: ${({theme:t})=>t==="dark"?"#e0e0e0":"#333"};
  }
`,PT=U.button`
  background-color: #3182ce;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 12px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #2c5282;
  }
`,KB=U(PT)`
  background-color: #4285f4;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  
  &:hover {
    background-color: #3367d6;
  }
`,QB=U.div`
  color: #e53e3e;
  padding: 10px;
  background-color: rgba(229, 62, 62, 0.1);
  border-radius: 4px;
  margin-bottom: 10px;
`,YB=()=>{const[t,e]=O.useState(""),[n,r]=O.useState(""),[i,o]=O.useState(null),[l,d]=O.useState(!1),f=Ay(),p=async w=>{w.preventDefault(),d(!0),o(null);try{await _6(Ru,t,n),f("/admin")}catch(S){o("Invalid email or password. Please try again."),console.error(S)}finally{d(!1)}},y=async()=>{d(!0),o(null);try{await pk(Ru,yC),f("/admin")}catch(w){o("Google sign-in failed. Please try again."),console.error(w)}finally{d(!1)}};return m.jsxs(WB,{children:[m.jsx("h1",{children:"Admin Login"}),i&&m.jsx(QB,{children:i}),m.jsxs(GB,{onSubmit:p,children:[m.jsxs(aS,{children:[m.jsx("label",{htmlFor:"email",children:"Email"}),m.jsx("input",{id:"email",type:"email",value:t,onChange:w=>e(w.target.value),required:!0})]}),m.jsxs(aS,{children:[m.jsx("label",{htmlFor:"password",children:"Password"}),m.jsx("input",{id:"password",type:"password",value:n,onChange:w=>r(w.target.value),required:!0})]}),m.jsx(PT,{type:"submit",disabled:l,children:l?"Signing in...":"Sign in with Email"})]}),m.jsx("div",{style:{margin:"20px 0",textAlign:"center"},children:"or"}),m.jsx(KB,{type:"button",onClick:y,disabled:l,children:"Sign in with Google"})]})},JB=({children:t})=>{const{user:e,loading:n,isAdmin:r}=ST();return n?m.jsx("div",{className:"container",children:"Loading..."}):!e||!r?m.jsx(R5,{to:"/login",replace:!0}):m.jsx(m.Fragment,{children:t})};function XB(){const{theme:t}=Rv();return O.useEffect(()=>{try{gC(TR,"page_view")}catch(e){console.log("Analytics error:",e)}},[]),m.jsx("div",{className:`app ${t}`,children:m.jsxs(O5,{children:[m.jsxs(Yt,{path:"/",element:m.jsx(PF,{}),children:[m.jsx(Yt,{index:!0,element:m.jsx(mU,{})}),m.jsx(Yt,{path:"projects",element:m.jsx(AU,{})}),m.jsx(Yt,{path:"projects/:slug",element:m.jsx(qU,{})}),m.jsx(Yt,{path:"research",element:m.jsx(iV,{})}),m.jsx(Yt,{path:"blog",element:m.jsx(CV,{})}),m.jsx(Yt,{path:"contact",element:m.jsx(fB,{})}),m.jsx(Yt,{path:"login",element:m.jsx(YB,{})}),m.jsx(Yt,{path:"*",element:m.jsx(gB,{})})]}),m.jsxs(Yt,{path:"/admin",element:m.jsx(JB,{children:m.jsx(QF,{})}),children:[m.jsx(Yt,{index:!0,element:m.jsx(wB,{})}),m.jsx(Yt,{path:"projects",element:m.jsx(CB,{})}),m.jsx(Yt,{path:"skills",element:m.jsx(AB,{})}),m.jsx(Yt,{path:"research",element:m.jsx(LB,{})}),m.jsx(Yt,{path:"blog",element:m.jsx(VB,{})}),m.jsx(Yt,{path:"contact",element:m.jsx(HB,{})})]})]})})}const ZB=IL`
  :root {
    /* Science/ML-themed color palette for light mode */
    --color-primary: #2C6BED; /* Blue for technology/ML */
    --color-secondary: #37B27C; /* Green for data/growth */
    --color-tertiary: #9069ED; /* Purple for physics/research */
    --color-accent: #EDB83D; /* Gold for achievements/highlights */
    
    --color-background: #F8FAFC;
    --color-foreground: #FFFFFF;
    --color-text: #1E293B;
    --color-text-light: #64748B;
    --color-border: #E2E8F0;
    
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05);
    
    --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    --font-mono: 'Fira Code', 'JetBrains Mono', Menlo, Monaco, Consolas, 'Courier New', monospace;
    
    --radius-sm: 4px;
    --radius-md: 6px;
    --radius-lg: 8px;
    --radius-xl: 12px;
    
    --transition-base: 0.2s ease;
    
    --max-width: 1200px;
    --header-height: 70px;
    
    /* For syntax highlighting and code blocks */
    --code-background: #F1F5F9;
    --code-text: #334155;
  }
  
  [data-theme="dark"] {
    /* Science/ML-themed color palette for dark mode */
    --color-primary: #3B82F6; /* Lighter blue for technology/ML */
    --color-secondary: #34D399; /* Lighter green for data/growth */
    --color-tertiary: #A78BFA; /* Lighter purple for physics/research */
    --color-accent: #F59E0B; /* Amber for achievements/highlights */
    
    --color-background: #0F172A;
    --color-foreground: #1E293B;
    --color-text: #F1F5F9;
    --color-text-light: #94A3B8;
    --color-border: #334155;
    
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.3);
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.4);
    --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.4), 0 4px 6px rgba(0, 0, 0, 0.3);
    
    /* For syntax highlighting and code blocks */
    --code-background: #1E293B;
    --code-text: #E2E8F0;
  }
  
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }
  
  body {
    font-family: var(--font-sans);
    background-color: var(--color-background);
    color: var(--color-text);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: background-color var(--transition-base);
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
  }
  
  h1 {
    font-size: 2.5rem;
    
    @media (min-width: 768px) {
      font-size: 3rem;
    }
  }
  
  h2 {
    font-size: 2rem;
  }
  
  h3 {
    font-size: 1.5rem;
  }
  
  p {
    margin-bottom: 1rem;
  }
  
  a {
    color: var(--color-primary);
    text-decoration: none;
    transition: color var(--transition-base);
    
    &:hover {
      color: var(--color-tertiary);
    }
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  button {
    cursor: pointer;
  }
  
  code {
    font-family: var(--font-mono);
    background-color: var(--code-background);
    color: var(--code-text);
    padding: 0.2em 0.4em;
    border-radius: var(--radius-sm);
    font-size: 0.9em;
  }
  
  pre {
    background-color: var(--code-background);
    border-radius: var(--radius-md);
    padding: 1rem;
    overflow-x: auto;
    margin-bottom: 1rem;
    
    code {
      background-color: transparent;
      padding: 0;
    }
  }
  
  /* Container for sections */
  .container {
    width: 100%;
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 1rem;
    
    @media (min-width: 768px) {
      padding: 0 2rem;
    }
  }
  
  /* Section spacing */
  section {
    padding: 4rem 0;
  }
  
  /* Utilities */
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
  
  /* Science-themed decorative elements */
  .molecule-bg {
    position: absolute;
    pointer-events: none;
    opacity: 0.1;
    z-index: -1;
  }
`;$3.createRoot(document.getElementById("root")).render(m.jsx(Fe.StrictMode,{children:m.jsx(_R,{children:m.jsx(AF,{children:m.jsxs(q5,{children:[m.jsx(ZB,{}),m.jsx(XB,{})]})})})}));
//# sourceMappingURL=index-Bg1VjHt8.js.map
