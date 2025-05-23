function jC(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in t)){const a=Object.getOwnPropertyDescriptor(r,s);a&&Object.defineProperty(t,s,a.get?a:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();function jy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Pm={exports:{}},hc={},Cm={exports:{}},Fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T_;function NC(){if(T_)return Fe;T_=1;var t=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),l=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),w=Symbol.iterator;function x(j){return j===null||typeof j!="object"?null:(j=w&&j[w]||j["@@iterator"],typeof j=="function"?j:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,C={};function P(j,Q,ae){this.props=j,this.context=Q,this.refs=C,this.updater=ae||S}P.prototype.isReactComponent={},P.prototype.setState=function(j,Q){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,Q,"setState")},P.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function $(){}$.prototype=P.prototype;function B(j,Q,ae){this.props=j,this.context=Q,this.refs=C,this.updater=ae||S}var L=B.prototype=new $;L.constructor=B,A(L,P.prototype),L.isPureReactComponent=!0;var D=Array.isArray,q=Object.prototype.hasOwnProperty,J={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function b(j,Q,ae){var de,ge={},we=null,fe=null;if(Q!=null)for(de in Q.ref!==void 0&&(fe=Q.ref),Q.key!==void 0&&(we=""+Q.key),Q)q.call(Q,de)&&!k.hasOwnProperty(de)&&(ge[de]=Q[de]);var Te=arguments.length-2;if(Te===1)ge.children=ae;else if(1<Te){for(var De=Array(Te),$e=0;$e<Te;$e++)De[$e]=arguments[$e+2];ge.children=De}if(j&&j.defaultProps)for(de in Te=j.defaultProps,Te)ge[de]===void 0&&(ge[de]=Te[de]);return{$$typeof:t,type:j,key:we,ref:fe,props:ge,_owner:J.current}}function R(j,Q){return{$$typeof:t,type:j.type,key:Q,ref:j.ref,props:j.props,_owner:j._owner}}function V(j){return typeof j=="object"&&j!==null&&j.$$typeof===t}function z(j){var Q={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(ae){return Q[ae]})}var H=/\/+/g;function N(j,Q){return typeof j=="object"&&j!==null&&j.key!=null?z(""+j.key):Q.toString(36)}function Le(j,Q,ae,de,ge){var we=typeof j;(we==="undefined"||we==="boolean")&&(j=null);var fe=!1;if(j===null)fe=!0;else switch(we){case"string":case"number":fe=!0;break;case"object":switch(j.$$typeof){case t:case e:fe=!0}}if(fe)return fe=j,ge=ge(fe),j=de===""?"."+N(fe,0):de,D(ge)?(ae="",j!=null&&(ae=j.replace(H,"$&/")+"/"),Le(ge,Q,ae,"",function($e){return $e})):ge!=null&&(V(ge)&&(ge=R(ge,ae+(!ge.key||fe&&fe.key===ge.key?"":(""+ge.key).replace(H,"$&/")+"/")+j)),Q.push(ge)),1;if(fe=0,de=de===""?".":de+":",D(j))for(var Te=0;Te<j.length;Te++){we=j[Te];var De=de+N(we,Te);fe+=Le(we,Q,ae,De,ge)}else if(De=x(j),typeof De=="function")for(j=De.call(j),Te=0;!(we=j.next()).done;)we=we.value,De=de+N(we,Te++),fe+=Le(we,Q,ae,De,ge);else if(we==="object")throw Q=String(j),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.");return fe}function Qe(j,Q,ae){if(j==null)return j;var de=[],ge=0;return Le(j,de,"","",function(we){return Q.call(ae,we,ge++)}),de}function xe(j){if(j._status===-1){var Q=j._result;Q=Q(),Q.then(function(ae){(j._status===0||j._status===-1)&&(j._status=1,j._result=ae)},function(ae){(j._status===0||j._status===-1)&&(j._status=2,j._result=ae)}),j._status===-1&&(j._status=0,j._result=Q)}if(j._status===1)return j._result.default;throw j._result}var ke={current:null},se={transition:null},ue={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:se,ReactCurrentOwner:J};function Y(){throw Error("act(...) is not supported in production builds of React.")}return Fe.Children={map:Qe,forEach:function(j,Q,ae){Qe(j,function(){Q.apply(this,arguments)},ae)},count:function(j){var Q=0;return Qe(j,function(){Q++}),Q},toArray:function(j){return Qe(j,function(Q){return Q})||[]},only:function(j){if(!V(j))throw Error("React.Children.only expected to receive a single React element child.");return j}},Fe.Component=P,Fe.Fragment=n,Fe.Profiler=s,Fe.PureComponent=B,Fe.StrictMode=r,Fe.Suspense=d,Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,Fe.act=Y,Fe.cloneElement=function(j,Q,ae){if(j==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+j+".");var de=A({},j.props),ge=j.key,we=j.ref,fe=j._owner;if(Q!=null){if(Q.ref!==void 0&&(we=Q.ref,fe=J.current),Q.key!==void 0&&(ge=""+Q.key),j.type&&j.type.defaultProps)var Te=j.type.defaultProps;for(De in Q)q.call(Q,De)&&!k.hasOwnProperty(De)&&(de[De]=Q[De]===void 0&&Te!==void 0?Te[De]:Q[De])}var De=arguments.length-2;if(De===1)de.children=ae;else if(1<De){Te=Array(De);for(var $e=0;$e<De;$e++)Te[$e]=arguments[$e+2];de.children=Te}return{$$typeof:t,type:j.type,key:ge,ref:we,props:de,_owner:fe}},Fe.createContext=function(j){return j={$$typeof:l,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},j.Provider={$$typeof:a,_context:j},j.Consumer=j},Fe.createElement=b,Fe.createFactory=function(j){var Q=b.bind(null,j);return Q.type=j,Q},Fe.createRef=function(){return{current:null}},Fe.forwardRef=function(j){return{$$typeof:u,render:j}},Fe.isValidElement=V,Fe.lazy=function(j){return{$$typeof:y,_payload:{_status:-1,_result:j},_init:xe}},Fe.memo=function(j,Q){return{$$typeof:p,type:j,compare:Q===void 0?null:Q}},Fe.startTransition=function(j){var Q=se.transition;se.transition={};try{j()}finally{se.transition=Q}},Fe.unstable_act=Y,Fe.useCallback=function(j,Q){return ke.current.useCallback(j,Q)},Fe.useContext=function(j){return ke.current.useContext(j)},Fe.useDebugValue=function(){},Fe.useDeferredValue=function(j){return ke.current.useDeferredValue(j)},Fe.useEffect=function(j,Q){return ke.current.useEffect(j,Q)},Fe.useId=function(){return ke.current.useId()},Fe.useImperativeHandle=function(j,Q,ae){return ke.current.useImperativeHandle(j,Q,ae)},Fe.useInsertionEffect=function(j,Q){return ke.current.useInsertionEffect(j,Q)},Fe.useLayoutEffect=function(j,Q){return ke.current.useLayoutEffect(j,Q)},Fe.useMemo=function(j,Q){return ke.current.useMemo(j,Q)},Fe.useReducer=function(j,Q,ae){return ke.current.useReducer(j,Q,ae)},Fe.useRef=function(j){return ke.current.useRef(j)},Fe.useState=function(j){return ke.current.useState(j)},Fe.useSyncExternalStore=function(j,Q,ae){return ke.current.useSyncExternalStore(j,Q,ae)},Fe.useTransition=function(){return ke.current.useTransition()},Fe.version="18.3.1",Fe}var S_;function Ny(){return S_||(S_=1,Cm.exports=NC()),Cm.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I_;function OC(){if(I_)return hc;I_=1;var t=Ny(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(u,d,p){var y,w={},x=null,S=null;p!==void 0&&(x=""+p),d.key!==void 0&&(x=""+d.key),d.ref!==void 0&&(S=d.ref);for(y in d)r.call(d,y)&&!a.hasOwnProperty(y)&&(w[y]=d[y]);if(u&&u.defaultProps)for(y in d=u.defaultProps,d)w[y]===void 0&&(w[y]=d[y]);return{$$typeof:e,type:u,key:x,ref:S,props:w,_owner:s.current}}return hc.Fragment=n,hc.jsx=l,hc.jsxs=l,hc}var b_;function LC(){return b_||(b_=1,Pm.exports=OC()),Pm.exports}var m=LC(),M=Ny();const Me=jy(M),VC=jC({__proto__:null,default:Me},[M]);var Lh={},Am={exports:{}},bn={},km={exports:{}},Rm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P_;function MC(){return P_||(P_=1,function(t){function e(se,ue){var Y=se.length;se.push(ue);e:for(;0<Y;){var j=Y-1>>>1,Q=se[j];if(0<s(Q,ue))se[j]=ue,se[Y]=Q,Y=j;else break e}}function n(se){return se.length===0?null:se[0]}function r(se){if(se.length===0)return null;var ue=se[0],Y=se.pop();if(Y!==ue){se[0]=Y;e:for(var j=0,Q=se.length,ae=Q>>>1;j<ae;){var de=2*(j+1)-1,ge=se[de],we=de+1,fe=se[we];if(0>s(ge,Y))we<Q&&0>s(fe,ge)?(se[j]=fe,se[we]=Y,j=we):(se[j]=ge,se[de]=Y,j=de);else if(we<Q&&0>s(fe,Y))se[j]=fe,se[we]=Y,j=we;else break e}}return ue}function s(se,ue){var Y=se.sortIndex-ue.sortIndex;return Y!==0?Y:se.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;t.unstable_now=function(){return a.now()}}else{var l=Date,u=l.now();t.unstable_now=function(){return l.now()-u}}var d=[],p=[],y=1,w=null,x=3,S=!1,A=!1,C=!1,P=typeof setTimeout=="function"?setTimeout:null,$=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(se){for(var ue=n(p);ue!==null;){if(ue.callback===null)r(p);else if(ue.startTime<=se)r(p),ue.sortIndex=ue.expirationTime,e(d,ue);else break;ue=n(p)}}function D(se){if(C=!1,L(se),!A)if(n(d)!==null)A=!0,xe(q);else{var ue=n(p);ue!==null&&ke(D,ue.startTime-se)}}function q(se,ue){A=!1,C&&(C=!1,$(b),b=-1),S=!0;var Y=x;try{for(L(ue),w=n(d);w!==null&&(!(w.expirationTime>ue)||se&&!z());){var j=w.callback;if(typeof j=="function"){w.callback=null,x=w.priorityLevel;var Q=j(w.expirationTime<=ue);ue=t.unstable_now(),typeof Q=="function"?w.callback=Q:w===n(d)&&r(d),L(ue)}else r(d);w=n(d)}if(w!==null)var ae=!0;else{var de=n(p);de!==null&&ke(D,de.startTime-ue),ae=!1}return ae}finally{w=null,x=Y,S=!1}}var J=!1,k=null,b=-1,R=5,V=-1;function z(){return!(t.unstable_now()-V<R)}function H(){if(k!==null){var se=t.unstable_now();V=se;var ue=!0;try{ue=k(!0,se)}finally{ue?N():(J=!1,k=null)}}else J=!1}var N;if(typeof B=="function")N=function(){B(H)};else if(typeof MessageChannel<"u"){var Le=new MessageChannel,Qe=Le.port2;Le.port1.onmessage=H,N=function(){Qe.postMessage(null)}}else N=function(){P(H,0)};function xe(se){k=se,J||(J=!0,N())}function ke(se,ue){b=P(function(){se(t.unstable_now())},ue)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(se){se.callback=null},t.unstable_continueExecution=function(){A||S||(A=!0,xe(q))},t.unstable_forceFrameRate=function(se){0>se||125<se?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<se?Math.floor(1e3/se):5},t.unstable_getCurrentPriorityLevel=function(){return x},t.unstable_getFirstCallbackNode=function(){return n(d)},t.unstable_next=function(se){switch(x){case 1:case 2:case 3:var ue=3;break;default:ue=x}var Y=x;x=ue;try{return se()}finally{x=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(se,ue){switch(se){case 1:case 2:case 3:case 4:case 5:break;default:se=3}var Y=x;x=se;try{return ue()}finally{x=Y}},t.unstable_scheduleCallback=function(se,ue,Y){var j=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?j+Y:j):Y=j,se){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=Y+Q,se={id:y++,callback:ue,priorityLevel:se,startTime:Y,expirationTime:Q,sortIndex:-1},Y>j?(se.sortIndex=Y,e(p,se),n(d)===null&&se===n(p)&&(C?($(b),b=-1):C=!0,ke(D,Y-j))):(se.sortIndex=Q,e(d,se),A||S||(A=!0,xe(q))),se},t.unstable_shouldYield=z,t.unstable_wrapCallback=function(se){var ue=x;return function(){var Y=x;x=ue;try{return se.apply(this,arguments)}finally{x=Y}}}}(Rm)),Rm}var C_;function FC(){return C_||(C_=1,km.exports=MC()),km.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A_;function UC(){if(A_)return bn;A_=1;var t=Ny(),e=FC();function n(i){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+i,c=1;c<arguments.length;c++)o+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+i+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,s={};function a(i,o){l(i,o),l(i+"Capture",o)}function l(i,o){for(s[i]=o,i=0;i<o.length;i++)r.add(o[i])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},w={};function x(i){return d.call(w,i)?!0:d.call(y,i)?!1:p.test(i)?w[i]=!0:(y[i]=!0,!1)}function S(i,o,c,f){if(c!==null&&c.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return f?!1:c!==null?!c.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function A(i,o,c,f){if(o===null||typeof o>"u"||S(i,o,c,f))return!0;if(f)return!1;if(c!==null)switch(c.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function C(i,o,c,f,g,_,T){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=f,this.attributeNamespace=g,this.mustUseProperty=c,this.propertyName=i,this.type=o,this.sanitizeURL=_,this.removeEmptyString=T}var P={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){P[i]=new C(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var o=i[0];P[o]=new C(o,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){P[i]=new C(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){P[i]=new C(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){P[i]=new C(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){P[i]=new C(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){P[i]=new C(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){P[i]=new C(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){P[i]=new C(i,5,!1,i.toLowerCase(),null,!1,!1)});var $=/[\-:]([a-z])/g;function B(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var o=i.replace($,B);P[o]=new C(o,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var o=i.replace($,B);P[o]=new C(o,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var o=i.replace($,B);P[o]=new C(o,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){P[i]=new C(i,1,!1,i.toLowerCase(),null,!1,!1)}),P.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){P[i]=new C(i,1,!1,i.toLowerCase(),null,!0,!0)});function L(i,o,c,f){var g=P.hasOwnProperty(o)?P[o]:null;(g!==null?g.type!==0:f||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(A(o,c,g,f)&&(c=null),f||g===null?x(o)&&(c===null?i.removeAttribute(o):i.setAttribute(o,""+c)):g.mustUseProperty?i[g.propertyName]=c===null?g.type===3?!1:"":c:(o=g.attributeName,f=g.attributeNamespace,c===null?i.removeAttribute(o):(g=g.type,c=g===3||g===4&&c===!0?"":""+c,f?i.setAttributeNS(f,o,c):i.setAttribute(o,c))))}var D=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,q=Symbol.for("react.element"),J=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),V=Symbol.for("react.provider"),z=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),Le=Symbol.for("react.suspense_list"),Qe=Symbol.for("react.memo"),xe=Symbol.for("react.lazy"),ke=Symbol.for("react.offscreen"),se=Symbol.iterator;function ue(i){return i===null||typeof i!="object"?null:(i=se&&i[se]||i["@@iterator"],typeof i=="function"?i:null)}var Y=Object.assign,j;function Q(i){if(j===void 0)try{throw Error()}catch(c){var o=c.stack.trim().match(/\n( *(at )?)/);j=o&&o[1]||""}return`
`+j+i}var ae=!1;function de(i,o){if(!i||ae)return"";ae=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(Z){var f=Z}Reflect.construct(i,[],o)}else{try{o.call()}catch(Z){f=Z}i.call(o.prototype)}else{try{throw Error()}catch(Z){f=Z}i()}}catch(Z){if(Z&&f&&typeof Z.stack=="string"){for(var g=Z.stack.split(`
`),_=f.stack.split(`
`),T=g.length-1,O=_.length-1;1<=T&&0<=O&&g[T]!==_[O];)O--;for(;1<=T&&0<=O;T--,O--)if(g[T]!==_[O]){if(T!==1||O!==1)do if(T--,O--,0>O||g[T]!==_[O]){var U=`
`+g[T].replace(" at new "," at ");return i.displayName&&U.includes("<anonymous>")&&(U=U.replace("<anonymous>",i.displayName)),U}while(1<=T&&0<=O);break}}}finally{ae=!1,Error.prepareStackTrace=c}return(i=i?i.displayName||i.name:"")?Q(i):""}function ge(i){switch(i.tag){case 5:return Q(i.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 2:case 15:return i=de(i.type,!1),i;case 11:return i=de(i.type.render,!1),i;case 1:return i=de(i.type,!0),i;default:return""}}function we(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case k:return"Fragment";case J:return"Portal";case R:return"Profiler";case b:return"StrictMode";case N:return"Suspense";case Le:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case z:return(i.displayName||"Context")+".Consumer";case V:return(i._context.displayName||"Context")+".Provider";case H:var o=i.render;return i=i.displayName,i||(i=o.displayName||o.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case Qe:return o=i.displayName||null,o!==null?o:we(i.type)||"Memo";case xe:o=i._payload,i=i._init;try{return we(i(o))}catch{}}return null}function fe(i){var o=i.type;switch(i.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=o.render,i=i.displayName||i.name||"",o.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return we(o);case 8:return o===b?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function Te(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function De(i){var o=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function $e(i){var o=De(i)?"checked":"value",c=Object.getOwnPropertyDescriptor(i.constructor.prototype,o),f=""+i[o];if(!i.hasOwnProperty(o)&&typeof c<"u"&&typeof c.get=="function"&&typeof c.set=="function"){var g=c.get,_=c.set;return Object.defineProperty(i,o,{configurable:!0,get:function(){return g.call(this)},set:function(T){f=""+T,_.call(this,T)}}),Object.defineProperty(i,o,{enumerable:c.enumerable}),{getValue:function(){return f},setValue:function(T){f=""+T},stopTracking:function(){i._valueTracker=null,delete i[o]}}}}function je(i){i._valueTracker||(i._valueTracker=$e(i))}function wt(i){if(!i)return!1;var o=i._valueTracker;if(!o)return!0;var c=o.getValue(),f="";return i&&(f=De(i)?i.checked?"true":"false":i.value),i=f,i!==c?(o.setValue(i),!0):!1}function mr(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function Os(i,o){var c=o.checked;return Y({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:c??i._wrapperState.initialChecked})}function Bo(i,o){var c=o.defaultValue==null?"":o.defaultValue,f=o.checked!=null?o.checked:o.defaultChecked;c=Te(o.value!=null?o.value:c),i._wrapperState={initialChecked:f,initialValue:c,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function yl(i,o){o=o.checked,o!=null&&L(i,"checked",o,!1)}function vl(i,o){yl(i,o);var c=Te(o.value),f=o.type;if(c!=null)f==="number"?(c===0&&i.value===""||i.value!=c)&&(i.value=""+c):i.value!==""+c&&(i.value=""+c);else if(f==="submit"||f==="reset"){i.removeAttribute("value");return}o.hasOwnProperty("value")?zo(i,o.type,c):o.hasOwnProperty("defaultValue")&&zo(i,o.type,Te(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(i.defaultChecked=!!o.defaultChecked)}function xu(i,o,c){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var f=o.type;if(!(f!=="submit"&&f!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+i._wrapperState.initialValue,c||o===i.value||(i.value=o),i.defaultValue=o}c=i.name,c!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,c!==""&&(i.name=c)}function zo(i,o,c){(o!=="number"||mr(i.ownerDocument)!==i)&&(c==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+c&&(i.defaultValue=""+c))}var si=Array.isArray;function oi(i,o,c,f){if(i=i.options,o){o={};for(var g=0;g<c.length;g++)o["$"+c[g]]=!0;for(c=0;c<i.length;c++)g=o.hasOwnProperty("$"+i[c].value),i[c].selected!==g&&(i[c].selected=g),g&&f&&(i[c].defaultSelected=!0)}else{for(c=""+Te(c),o=null,g=0;g<i.length;g++){if(i[g].value===c){i[g].selected=!0,f&&(i[g].defaultSelected=!0);return}o!==null||i[g].disabled||(o=i[g])}o!==null&&(o.selected=!0)}}function _l(i,o){if(o.dangerouslySetInnerHTML!=null)throw Error(n(91));return Y({},o,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function $o(i,o){var c=o.value;if(c==null){if(c=o.children,o=o.defaultValue,c!=null){if(o!=null)throw Error(n(92));if(si(c)){if(1<c.length)throw Error(n(93));c=c[0]}o=c}o==null&&(o=""),c=o}i._wrapperState={initialValue:Te(c)}}function Wo(i,o){var c=Te(o.value),f=Te(o.defaultValue);c!=null&&(c=""+c,c!==i.value&&(i.value=c),o.defaultValue==null&&i.defaultValue!==c&&(i.defaultValue=c)),f!=null&&(i.defaultValue=""+f)}function wl(i){var o=i.textContent;o===i._wrapperState.initialValue&&o!==""&&o!==null&&(i.value=o)}function jt(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nt(i,o){return i==null||i==="http://www.w3.org/1999/xhtml"?jt(o):i==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var ai,xl=function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,c,f,g){MSApp.execUnsafeLocalFunction(function(){return i(o,c,f,g)})}:i}(function(i,o){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=o;else{for(ai=ai||document.createElement("div"),ai.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=ai.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;o.firstChild;)i.appendChild(o.firstChild)}});function Li(i,o){if(o){var c=i.firstChild;if(c&&c===i.lastChild&&c.nodeType===3){c.nodeValue=o;return}}i.textContent=o}var Ls={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vs=["Webkit","ms","Moz","O"];Object.keys(Ls).forEach(function(i){Vs.forEach(function(o){o=o+i.charAt(0).toUpperCase()+i.substring(1),Ls[o]=Ls[i]})});function El(i,o,c){return o==null||typeof o=="boolean"||o===""?"":c||typeof o!="number"||o===0||Ls.hasOwnProperty(i)&&Ls[i]?(""+o).trim():o+"px"}function Tl(i,o){i=i.style;for(var c in o)if(o.hasOwnProperty(c)){var f=c.indexOf("--")===0,g=El(c,o[c],f);c==="float"&&(c="cssFloat"),f?i.setProperty(c,g):i[c]=g}}var Sl=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Il(i,o){if(o){if(Sl[i]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(n(137,i));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(n(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(n(61))}if(o.style!=null&&typeof o.style!="object")throw Error(n(62))}}function bl(i,o){if(i.indexOf("-")===-1)return typeof o.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ms=null;function Ho(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var qo=null,Wn=null,Lr=null;function Go(i){if(i=Yl(i)){if(typeof qo!="function")throw Error(n(280));var o=i.stateNode;o&&(o=Xu(o),qo(i.stateNode,i.type,o))}}function Vr(i){Wn?Lr?Lr.push(i):Lr=[i]:Wn=i}function Pl(){if(Wn){var i=Wn,o=Lr;if(Lr=Wn=null,Go(i),o)for(i=0;i<o.length;i++)Go(o[i])}}function Fs(i,o){return i(o)}function Cl(){}var li=!1;function Al(i,o,c){if(li)return i(o,c);li=!0;try{return Fs(i,o,c)}finally{li=!1,(Wn!==null||Lr!==null)&&(Cl(),Pl())}}function xt(i,o){var c=i.stateNode;if(c===null)return null;var f=Xu(c);if(f===null)return null;c=f[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(i=i.type,f=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!f;break e;default:i=!1}if(i)return null;if(c&&typeof c!="function")throw Error(n(231,o,typeof c));return c}var Ko=!1;if(u)try{var gr={};Object.defineProperty(gr,"passive",{get:function(){Ko=!0}}),window.addEventListener("test",gr,gr),window.removeEventListener("test",gr,gr)}catch{Ko=!1}function Us(i,o,c,f,g,_,T,O,U){var Z=Array.prototype.slice.call(arguments,3);try{o.apply(c,Z)}catch(ne){this.onError(ne)}}var Bs=!1,Qo=null,yr=!1,kl=null,tp={onError:function(i){Bs=!0,Qo=i}};function Yo(i,o,c,f,g,_,T,O,U){Bs=!1,Qo=null,Us.apply(tp,arguments)}function Eu(i,o,c,f,g,_,T,O,U){if(Yo.apply(this,arguments),Bs){if(Bs){var Z=Qo;Bs=!1,Qo=null}else throw Error(n(198));yr||(yr=!0,kl=Z)}}function vr(i){var o=i,c=i;if(i.alternate)for(;o.return;)o=o.return;else{i=o;do o=i,(o.flags&4098)!==0&&(c=o.return),i=o.return;while(i)}return o.tag===3?c:null}function zs(i){if(i.tag===13){var o=i.memoizedState;if(o===null&&(i=i.alternate,i!==null&&(o=i.memoizedState)),o!==null)return o.dehydrated}return null}function _r(i){if(vr(i)!==i)throw Error(n(188))}function Tu(i){var o=i.alternate;if(!o){if(o=vr(i),o===null)throw Error(n(188));return o!==i?null:i}for(var c=i,f=o;;){var g=c.return;if(g===null)break;var _=g.alternate;if(_===null){if(f=g.return,f!==null){c=f;continue}break}if(g.child===_.child){for(_=g.child;_;){if(_===c)return _r(g),i;if(_===f)return _r(g),o;_=_.sibling}throw Error(n(188))}if(c.return!==f.return)c=g,f=_;else{for(var T=!1,O=g.child;O;){if(O===c){T=!0,c=g,f=_;break}if(O===f){T=!0,f=g,c=_;break}O=O.sibling}if(!T){for(O=_.child;O;){if(O===c){T=!0,c=_,f=g;break}if(O===f){T=!0,f=_,c=g;break}O=O.sibling}if(!T)throw Error(n(189))}}if(c.alternate!==f)throw Error(n(190))}if(c.tag!==3)throw Error(n(188));return c.stateNode.current===c?i:o}function Rl(i){return i=Tu(i),i!==null?Xo(i):null}function Xo(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var o=Xo(i);if(o!==null)return o;i=i.sibling}return null}var Jo=e.unstable_scheduleCallback,Dl=e.unstable_cancelCallback,Su=e.unstable_shouldYield,np=e.unstable_requestPaint,et=e.unstable_now,Iu=e.unstable_getCurrentPriorityLevel,$s=e.unstable_ImmediatePriority,Vi=e.unstable_UserBlockingPriority,Hn=e.unstable_NormalPriority,jl=e.unstable_LowPriority,bu=e.unstable_IdlePriority,Ws=null,Dn=null;function Pu(i){if(Dn&&typeof Dn.onCommitFiberRoot=="function")try{Dn.onCommitFiberRoot(Ws,i,void 0,(i.current.flags&128)===128)}catch{}}var dn=Math.clz32?Math.clz32:Au,Nl=Math.log,Cu=Math.LN2;function Au(i){return i>>>=0,i===0?32:31-(Nl(i)/Cu|0)|0}var Zo=64,ea=4194304;function Mi(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function Hs(i,o){var c=i.pendingLanes;if(c===0)return 0;var f=0,g=i.suspendedLanes,_=i.pingedLanes,T=c&268435455;if(T!==0){var O=T&~g;O!==0?f=Mi(O):(_&=T,_!==0&&(f=Mi(_)))}else T=c&~g,T!==0?f=Mi(T):_!==0&&(f=Mi(_));if(f===0)return 0;if(o!==0&&o!==f&&(o&g)===0&&(g=f&-f,_=o&-o,g>=_||g===16&&(_&4194240)!==0))return o;if((f&4)!==0&&(f|=c&16),o=i.entangledLanes,o!==0)for(i=i.entanglements,o&=f;0<o;)c=31-dn(o),g=1<<c,f|=i[c],o&=~g;return f}function rp(i,o){switch(i){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ci(i,o){for(var c=i.suspendedLanes,f=i.pingedLanes,g=i.expirationTimes,_=i.pendingLanes;0<_;){var T=31-dn(_),O=1<<T,U=g[T];U===-1?((O&c)===0||(O&f)!==0)&&(g[T]=rp(O,o)):U<=o&&(i.expiredLanes|=O),_&=~O}}function jn(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function qs(){var i=Zo;return Zo<<=1,(Zo&4194240)===0&&(Zo=64),i}function Fi(i){for(var o=[],c=0;31>c;c++)o.push(i);return o}function Ui(i,o,c){i.pendingLanes|=o,o!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,o=31-dn(o),i[o]=c}function Ze(i,o){var c=i.pendingLanes&~o;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=o,i.mutableReadLanes&=o,i.entangledLanes&=o,o=i.entanglements;var f=i.eventTimes;for(i=i.expirationTimes;0<c;){var g=31-dn(c),_=1<<g;o[g]=0,f[g]=-1,i[g]=-1,c&=~_}}function Bi(i,o){var c=i.entangledLanes|=o;for(i=i.entanglements;c;){var f=31-dn(c),g=1<<f;g&o|i[f]&o&&(i[f]|=o),c&=~g}}var Be=0;function zi(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var ku,ta,Ru,Du,ju,Ol=!1,Mr=[],qt=null,wr=null,xr=null,$i=new Map,qn=new Map,Fr=[],ip="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Nu(i,o){switch(i){case"focusin":case"focusout":qt=null;break;case"dragenter":case"dragleave":wr=null;break;case"mouseover":case"mouseout":xr=null;break;case"pointerover":case"pointerout":$i.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":qn.delete(o.pointerId)}}function _n(i,o,c,f,g,_){return i===null||i.nativeEvent!==_?(i={blockedOn:o,domEventName:c,eventSystemFlags:f,nativeEvent:_,targetContainers:[g]},o!==null&&(o=Yl(o),o!==null&&ta(o)),i):(i.eventSystemFlags|=f,o=i.targetContainers,g!==null&&o.indexOf(g)===-1&&o.push(g),i)}function sp(i,o,c,f,g){switch(o){case"focusin":return qt=_n(qt,i,o,c,f,g),!0;case"dragenter":return wr=_n(wr,i,o,c,f,g),!0;case"mouseover":return xr=_n(xr,i,o,c,f,g),!0;case"pointerover":var _=g.pointerId;return $i.set(_,_n($i.get(_)||null,i,o,c,f,g)),!0;case"gotpointercapture":return _=g.pointerId,qn.set(_,_n(qn.get(_)||null,i,o,c,f,g)),!0}return!1}function Ou(i){var o=Xs(i.target);if(o!==null){var c=vr(o);if(c!==null){if(o=c.tag,o===13){if(o=zs(c),o!==null){i.blockedOn=o,ju(i.priority,function(){Ru(c)});return}}else if(o===3&&c.stateNode.current.memoizedState.isDehydrated){i.blockedOn=c.tag===3?c.stateNode.containerInfo:null;return}}}i.blockedOn=null}function ui(i){if(i.blockedOn!==null)return!1;for(var o=i.targetContainers;0<o.length;){var c=na(i.domEventName,i.eventSystemFlags,o[0],i.nativeEvent);if(c===null){c=i.nativeEvent;var f=new c.constructor(c.type,c);Ms=f,c.target.dispatchEvent(f),Ms=null}else return o=Yl(c),o!==null&&ta(o),i.blockedOn=c,!1;o.shift()}return!0}function Gs(i,o,c){ui(i)&&c.delete(o)}function Lu(){Ol=!1,qt!==null&&ui(qt)&&(qt=null),wr!==null&&ui(wr)&&(wr=null),xr!==null&&ui(xr)&&(xr=null),$i.forEach(Gs),qn.forEach(Gs)}function Er(i,o){i.blockedOn===o&&(i.blockedOn=null,Ol||(Ol=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Lu)))}function Tr(i){function o(g){return Er(g,i)}if(0<Mr.length){Er(Mr[0],i);for(var c=1;c<Mr.length;c++){var f=Mr[c];f.blockedOn===i&&(f.blockedOn=null)}}for(qt!==null&&Er(qt,i),wr!==null&&Er(wr,i),xr!==null&&Er(xr,i),$i.forEach(o),qn.forEach(o),c=0;c<Fr.length;c++)f=Fr[c],f.blockedOn===i&&(f.blockedOn=null);for(;0<Fr.length&&(c=Fr[0],c.blockedOn===null);)Ou(c),c.blockedOn===null&&Fr.shift()}var hi=D.ReactCurrentBatchConfig,Wi=!0;function ot(i,o,c,f){var g=Be,_=hi.transition;hi.transition=null;try{Be=1,Ll(i,o,c,f)}finally{Be=g,hi.transition=_}}function op(i,o,c,f){var g=Be,_=hi.transition;hi.transition=null;try{Be=4,Ll(i,o,c,f)}finally{Be=g,hi.transition=_}}function Ll(i,o,c,f){if(Wi){var g=na(i,o,c,f);if(g===null)yp(i,o,f,Ks,c),Nu(i,f);else if(sp(g,i,o,c,f))f.stopPropagation();else if(Nu(i,f),o&4&&-1<ip.indexOf(i)){for(;g!==null;){var _=Yl(g);if(_!==null&&ku(_),_=na(i,o,c,f),_===null&&yp(i,o,f,Ks,c),_===g)break;g=_}g!==null&&f.stopPropagation()}else yp(i,o,f,null,c)}}var Ks=null;function na(i,o,c,f){if(Ks=null,i=Ho(f),i=Xs(i),i!==null)if(o=vr(i),o===null)i=null;else if(c=o.tag,c===13){if(i=zs(o),i!==null)return i;i=null}else if(c===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;i=null}else o!==i&&(i=null);return Ks=i,null}function Vl(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Iu()){case $s:return 1;case Vi:return 4;case Hn:case jl:return 16;case bu:return 536870912;default:return 16}default:return 16}}var Nn=null,ra=null,wn=null;function Ml(){if(wn)return wn;var i,o=ra,c=o.length,f,g="value"in Nn?Nn.value:Nn.textContent,_=g.length;for(i=0;i<c&&o[i]===g[i];i++);var T=c-i;for(f=1;f<=T&&o[c-f]===g[_-f];f++);return wn=g.slice(i,1<f?1-f:void 0)}function ia(i){var o=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&o===13&&(i=13)):i=o,i===10&&(i=13),32<=i||i===13?i:0}function Ur(){return!0}function Fl(){return!1}function Gt(i){function o(c,f,g,_,T){this._reactName=c,this._targetInst=g,this.type=f,this.nativeEvent=_,this.target=T,this.currentTarget=null;for(var O in i)i.hasOwnProperty(O)&&(c=i[O],this[O]=c?c(_):_[O]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?Ur:Fl,this.isPropagationStopped=Fl,this}return Y(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var c=this.nativeEvent;c&&(c.preventDefault?c.preventDefault():typeof c.returnValue!="unknown"&&(c.returnValue=!1),this.isDefaultPrevented=Ur)},stopPropagation:function(){var c=this.nativeEvent;c&&(c.stopPropagation?c.stopPropagation():typeof c.cancelBubble!="unknown"&&(c.cancelBubble=!0),this.isPropagationStopped=Ur)},persist:function(){},isPersistent:Ur}),o}var Sr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sa=Gt(Sr),Br=Y({},Sr,{view:0,detail:0}),ap=Gt(Br),oa,di,Hi,Qs=Y({},Br,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zr,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Hi&&(Hi&&i.type==="mousemove"?(oa=i.screenX-Hi.screenX,di=i.screenY-Hi.screenY):di=oa=0,Hi=i),oa)},movementY:function(i){return"movementY"in i?i.movementY:di}}),aa=Gt(Qs),Ul=Y({},Qs,{dataTransfer:0}),Vu=Gt(Ul),la=Y({},Br,{relatedTarget:0}),ca=Gt(la),Mu=Y({},Sr,{animationName:0,elapsedTime:0,pseudoElement:0}),fi=Gt(Mu),Fu=Y({},Sr,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),Uu=Gt(Fu),Bu=Y({},Sr,{data:0}),Bl=Gt(Bu),ua={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $u(i){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(i):(i=zu[i])?!!o[i]:!1}function zr(){return $u}var h=Y({},Br,{key:function(i){if(i.key){var o=ua[i.key]||i.key;if(o!=="Unidentified")return o}return i.type==="keypress"?(i=ia(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?fn[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zr,charCode:function(i){return i.type==="keypress"?ia(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?ia(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),v=Gt(h),E=Y({},Qs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),I=Gt(E),G=Y({},Br,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zr}),ee=Gt(G),ce=Y({},Sr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xe=Gt(ce),Ot=Y({},Qs,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),We=Gt(Ot),Ut=[9,13,27,32],bt=u&&"CompositionEvent"in window,Gn=null;u&&"documentMode"in document&&(Gn=document.documentMode);var On=u&&"TextEvent"in window&&!Gn,Ys=u&&(!bt||Gn&&8<Gn&&11>=Gn),ha=" ",y0=!1;function v0(i,o){switch(i){case"keyup":return Ut.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _0(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var da=!1;function kP(i,o){switch(i){case"compositionend":return _0(o);case"keypress":return o.which!==32?null:(y0=!0,ha);case"textInput":return i=o.data,i===ha&&y0?null:i;default:return null}}function RP(i,o){if(da)return i==="compositionend"||!bt&&v0(i,o)?(i=Ml(),wn=ra=Nn=null,da=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return Ys&&o.locale!=="ko"?null:o.data;default:return null}}var DP={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function w0(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o==="input"?!!DP[i.type]:o==="textarea"}function x0(i,o,c,f){Vr(f),o=Ku(o,"onChange"),0<o.length&&(c=new sa("onChange","change",null,c,f),i.push({event:c,listeners:o}))}var zl=null,$l=null;function jP(i){F0(i,0)}function Wu(i){var o=ya(i);if(wt(o))return i}function NP(i,o){if(i==="change")return o}var E0=!1;if(u){var lp;if(u){var cp="oninput"in document;if(!cp){var T0=document.createElement("div");T0.setAttribute("oninput","return;"),cp=typeof T0.oninput=="function"}lp=cp}else lp=!1;E0=lp&&(!document.documentMode||9<document.documentMode)}function S0(){zl&&(zl.detachEvent("onpropertychange",I0),$l=zl=null)}function I0(i){if(i.propertyName==="value"&&Wu($l)){var o=[];x0(o,$l,i,Ho(i)),Al(jP,o)}}function OP(i,o,c){i==="focusin"?(S0(),zl=o,$l=c,zl.attachEvent("onpropertychange",I0)):i==="focusout"&&S0()}function LP(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Wu($l)}function VP(i,o){if(i==="click")return Wu(o)}function MP(i,o){if(i==="input"||i==="change")return Wu(o)}function FP(i,o){return i===o&&(i!==0||1/i===1/o)||i!==i&&o!==o}var Ir=typeof Object.is=="function"?Object.is:FP;function Wl(i,o){if(Ir(i,o))return!0;if(typeof i!="object"||i===null||typeof o!="object"||o===null)return!1;var c=Object.keys(i),f=Object.keys(o);if(c.length!==f.length)return!1;for(f=0;f<c.length;f++){var g=c[f];if(!d.call(o,g)||!Ir(i[g],o[g]))return!1}return!0}function b0(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function P0(i,o){var c=b0(i);i=0;for(var f;c;){if(c.nodeType===3){if(f=i+c.textContent.length,i<=o&&f>=o)return{node:c,offset:o-i};i=f}e:{for(;c;){if(c.nextSibling){c=c.nextSibling;break e}c=c.parentNode}c=void 0}c=b0(c)}}function C0(i,o){return i&&o?i===o?!0:i&&i.nodeType===3?!1:o&&o.nodeType===3?C0(i,o.parentNode):"contains"in i?i.contains(o):i.compareDocumentPosition?!!(i.compareDocumentPosition(o)&16):!1:!1}function A0(){for(var i=window,o=mr();o instanceof i.HTMLIFrameElement;){try{var c=typeof o.contentWindow.location.href=="string"}catch{c=!1}if(c)i=o.contentWindow;else break;o=mr(i.document)}return o}function up(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o&&(o==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||o==="textarea"||i.contentEditable==="true")}function UP(i){var o=A0(),c=i.focusedElem,f=i.selectionRange;if(o!==c&&c&&c.ownerDocument&&C0(c.ownerDocument.documentElement,c)){if(f!==null&&up(c)){if(o=f.start,i=f.end,i===void 0&&(i=o),"selectionStart"in c)c.selectionStart=o,c.selectionEnd=Math.min(i,c.value.length);else if(i=(o=c.ownerDocument||document)&&o.defaultView||window,i.getSelection){i=i.getSelection();var g=c.textContent.length,_=Math.min(f.start,g);f=f.end===void 0?_:Math.min(f.end,g),!i.extend&&_>f&&(g=f,f=_,_=g),g=P0(c,_);var T=P0(c,f);g&&T&&(i.rangeCount!==1||i.anchorNode!==g.node||i.anchorOffset!==g.offset||i.focusNode!==T.node||i.focusOffset!==T.offset)&&(o=o.createRange(),o.setStart(g.node,g.offset),i.removeAllRanges(),_>f?(i.addRange(o),i.extend(T.node,T.offset)):(o.setEnd(T.node,T.offset),i.addRange(o)))}}for(o=[],i=c;i=i.parentNode;)i.nodeType===1&&o.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<o.length;c++)i=o[c],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var BP=u&&"documentMode"in document&&11>=document.documentMode,fa=null,hp=null,Hl=null,dp=!1;function k0(i,o,c){var f=c.window===c?c.document:c.nodeType===9?c:c.ownerDocument;dp||fa==null||fa!==mr(f)||(f=fa,"selectionStart"in f&&up(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),Hl&&Wl(Hl,f)||(Hl=f,f=Ku(hp,"onSelect"),0<f.length&&(o=new sa("onSelect","select",null,o,c),i.push({event:o,listeners:f}),o.target=fa)))}function Hu(i,o){var c={};return c[i.toLowerCase()]=o.toLowerCase(),c["Webkit"+i]="webkit"+o,c["Moz"+i]="moz"+o,c}var pa={animationend:Hu("Animation","AnimationEnd"),animationiteration:Hu("Animation","AnimationIteration"),animationstart:Hu("Animation","AnimationStart"),transitionend:Hu("Transition","TransitionEnd")},fp={},R0={};u&&(R0=document.createElement("div").style,"AnimationEvent"in window||(delete pa.animationend.animation,delete pa.animationiteration.animation,delete pa.animationstart.animation),"TransitionEvent"in window||delete pa.transitionend.transition);function qu(i){if(fp[i])return fp[i];if(!pa[i])return i;var o=pa[i],c;for(c in o)if(o.hasOwnProperty(c)&&c in R0)return fp[i]=o[c];return i}var D0=qu("animationend"),j0=qu("animationiteration"),N0=qu("animationstart"),O0=qu("transitionend"),L0=new Map,V0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qi(i,o){L0.set(i,o),a(o,[i])}for(var pp=0;pp<V0.length;pp++){var mp=V0[pp],zP=mp.toLowerCase(),$P=mp[0].toUpperCase()+mp.slice(1);qi(zP,"on"+$P)}qi(D0,"onAnimationEnd"),qi(j0,"onAnimationIteration"),qi(N0,"onAnimationStart"),qi("dblclick","onDoubleClick"),qi("focusin","onFocus"),qi("focusout","onBlur"),qi(O0,"onTransitionEnd"),l("onMouseEnter",["mouseout","mouseover"]),l("onMouseLeave",["mouseout","mouseover"]),l("onPointerEnter",["pointerout","pointerover"]),l("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ql="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),WP=new Set("cancel close invalid load scroll toggle".split(" ").concat(ql));function M0(i,o,c){var f=i.type||"unknown-event";i.currentTarget=c,Eu(f,o,void 0,i),i.currentTarget=null}function F0(i,o){o=(o&4)!==0;for(var c=0;c<i.length;c++){var f=i[c],g=f.event;f=f.listeners;e:{var _=void 0;if(o)for(var T=f.length-1;0<=T;T--){var O=f[T],U=O.instance,Z=O.currentTarget;if(O=O.listener,U!==_&&g.isPropagationStopped())break e;M0(g,O,Z),_=U}else for(T=0;T<f.length;T++){if(O=f[T],U=O.instance,Z=O.currentTarget,O=O.listener,U!==_&&g.isPropagationStopped())break e;M0(g,O,Z),_=U}}}if(yr)throw i=kl,yr=!1,kl=null,i}function rt(i,o){var c=o[Tp];c===void 0&&(c=o[Tp]=new Set);var f=i+"__bubble";c.has(f)||(U0(o,i,2,!1),c.add(f))}function gp(i,o,c){var f=0;o&&(f|=4),U0(c,i,f,o)}var Gu="_reactListening"+Math.random().toString(36).slice(2);function Gl(i){if(!i[Gu]){i[Gu]=!0,r.forEach(function(c){c!=="selectionchange"&&(WP.has(c)||gp(c,!1,i),gp(c,!0,i))});var o=i.nodeType===9?i:i.ownerDocument;o===null||o[Gu]||(o[Gu]=!0,gp("selectionchange",!1,o))}}function U0(i,o,c,f){switch(Vl(o)){case 1:var g=ot;break;case 4:g=op;break;default:g=Ll}c=g.bind(null,o,c,i),g=void 0,!Ko||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(g=!0),f?g!==void 0?i.addEventListener(o,c,{capture:!0,passive:g}):i.addEventListener(o,c,!0):g!==void 0?i.addEventListener(o,c,{passive:g}):i.addEventListener(o,c,!1)}function yp(i,o,c,f,g){var _=f;if((o&1)===0&&(o&2)===0&&f!==null)e:for(;;){if(f===null)return;var T=f.tag;if(T===3||T===4){var O=f.stateNode.containerInfo;if(O===g||O.nodeType===8&&O.parentNode===g)break;if(T===4)for(T=f.return;T!==null;){var U=T.tag;if((U===3||U===4)&&(U=T.stateNode.containerInfo,U===g||U.nodeType===8&&U.parentNode===g))return;T=T.return}for(;O!==null;){if(T=Xs(O),T===null)return;if(U=T.tag,U===5||U===6){f=_=T;continue e}O=O.parentNode}}f=f.return}Al(function(){var Z=_,ne=Ho(c),oe=[];e:{var te=L0.get(i);if(te!==void 0){var he=sa,me=i;switch(i){case"keypress":if(ia(c)===0)break e;case"keydown":case"keyup":he=v;break;case"focusin":me="focus",he=ca;break;case"focusout":me="blur",he=ca;break;case"beforeblur":case"afterblur":he=ca;break;case"click":if(c.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":he=aa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":he=Vu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":he=ee;break;case D0:case j0:case N0:he=fi;break;case O0:he=Xe;break;case"scroll":he=ap;break;case"wheel":he=We;break;case"copy":case"cut":case"paste":he=Uu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":he=I}var ye=(o&4)!==0,Et=!ye&&i==="scroll",K=ye?te!==null?te+"Capture":null:te;ye=[];for(var W=Z,X;W!==null;){X=W;var le=X.stateNode;if(X.tag===5&&le!==null&&(X=le,K!==null&&(le=xt(W,K),le!=null&&ye.push(Kl(W,le,X)))),Et)break;W=W.return}0<ye.length&&(te=new he(te,me,null,c,ne),oe.push({event:te,listeners:ye}))}}if((o&7)===0){e:{if(te=i==="mouseover"||i==="pointerover",he=i==="mouseout"||i==="pointerout",te&&c!==Ms&&(me=c.relatedTarget||c.fromElement)&&(Xs(me)||me[pi]))break e;if((he||te)&&(te=ne.window===ne?ne:(te=ne.ownerDocument)?te.defaultView||te.parentWindow:window,he?(me=c.relatedTarget||c.toElement,he=Z,me=me?Xs(me):null,me!==null&&(Et=vr(me),me!==Et||me.tag!==5&&me.tag!==6)&&(me=null)):(he=null,me=Z),he!==me)){if(ye=aa,le="onMouseLeave",K="onMouseEnter",W="mouse",(i==="pointerout"||i==="pointerover")&&(ye=I,le="onPointerLeave",K="onPointerEnter",W="pointer"),Et=he==null?te:ya(he),X=me==null?te:ya(me),te=new ye(le,W+"leave",he,c,ne),te.target=Et,te.relatedTarget=X,le=null,Xs(ne)===Z&&(ye=new ye(K,W+"enter",me,c,ne),ye.target=X,ye.relatedTarget=Et,le=ye),Et=le,he&&me)t:{for(ye=he,K=me,W=0,X=ye;X;X=ma(X))W++;for(X=0,le=K;le;le=ma(le))X++;for(;0<W-X;)ye=ma(ye),W--;for(;0<X-W;)K=ma(K),X--;for(;W--;){if(ye===K||K!==null&&ye===K.alternate)break t;ye=ma(ye),K=ma(K)}ye=null}else ye=null;he!==null&&B0(oe,te,he,ye,!1),me!==null&&Et!==null&&B0(oe,Et,me,ye,!0)}}e:{if(te=Z?ya(Z):window,he=te.nodeName&&te.nodeName.toLowerCase(),he==="select"||he==="input"&&te.type==="file")var _e=NP;else if(w0(te))if(E0)_e=MP;else{_e=LP;var Se=OP}else(he=te.nodeName)&&he.toLowerCase()==="input"&&(te.type==="checkbox"||te.type==="radio")&&(_e=VP);if(_e&&(_e=_e(i,Z))){x0(oe,_e,c,ne);break e}Se&&Se(i,te,Z),i==="focusout"&&(Se=te._wrapperState)&&Se.controlled&&te.type==="number"&&zo(te,"number",te.value)}switch(Se=Z?ya(Z):window,i){case"focusin":(w0(Se)||Se.contentEditable==="true")&&(fa=Se,hp=Z,Hl=null);break;case"focusout":Hl=hp=fa=null;break;case"mousedown":dp=!0;break;case"contextmenu":case"mouseup":case"dragend":dp=!1,k0(oe,c,ne);break;case"selectionchange":if(BP)break;case"keydown":case"keyup":k0(oe,c,ne)}var Ie;if(bt)e:{switch(i){case"compositionstart":var Ae="onCompositionStart";break e;case"compositionend":Ae="onCompositionEnd";break e;case"compositionupdate":Ae="onCompositionUpdate";break e}Ae=void 0}else da?v0(i,c)&&(Ae="onCompositionEnd"):i==="keydown"&&c.keyCode===229&&(Ae="onCompositionStart");Ae&&(Ys&&c.locale!=="ko"&&(da||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&da&&(Ie=Ml()):(Nn=ne,ra="value"in Nn?Nn.value:Nn.textContent,da=!0)),Se=Ku(Z,Ae),0<Se.length&&(Ae=new Bl(Ae,i,null,c,ne),oe.push({event:Ae,listeners:Se}),Ie?Ae.data=Ie:(Ie=_0(c),Ie!==null&&(Ae.data=Ie)))),(Ie=On?kP(i,c):RP(i,c))&&(Z=Ku(Z,"onBeforeInput"),0<Z.length&&(ne=new Bl("onBeforeInput","beforeinput",null,c,ne),oe.push({event:ne,listeners:Z}),ne.data=Ie))}F0(oe,o)})}function Kl(i,o,c){return{instance:i,listener:o,currentTarget:c}}function Ku(i,o){for(var c=o+"Capture",f=[];i!==null;){var g=i,_=g.stateNode;g.tag===5&&_!==null&&(g=_,_=xt(i,c),_!=null&&f.unshift(Kl(i,_,g)),_=xt(i,o),_!=null&&f.push(Kl(i,_,g))),i=i.return}return f}function ma(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function B0(i,o,c,f,g){for(var _=o._reactName,T=[];c!==null&&c!==f;){var O=c,U=O.alternate,Z=O.stateNode;if(U!==null&&U===f)break;O.tag===5&&Z!==null&&(O=Z,g?(U=xt(c,_),U!=null&&T.unshift(Kl(c,U,O))):g||(U=xt(c,_),U!=null&&T.push(Kl(c,U,O)))),c=c.return}T.length!==0&&i.push({event:o,listeners:T})}var HP=/\r\n?/g,qP=/\u0000|\uFFFD/g;function z0(i){return(typeof i=="string"?i:""+i).replace(HP,`
`).replace(qP,"")}function Qu(i,o,c){if(o=z0(o),z0(i)!==o&&c)throw Error(n(425))}function Yu(){}var vp=null,_p=null;function wp(i,o){return i==="textarea"||i==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var xp=typeof setTimeout=="function"?setTimeout:void 0,GP=typeof clearTimeout=="function"?clearTimeout:void 0,$0=typeof Promise=="function"?Promise:void 0,KP=typeof queueMicrotask=="function"?queueMicrotask:typeof $0<"u"?function(i){return $0.resolve(null).then(i).catch(QP)}:xp;function QP(i){setTimeout(function(){throw i})}function Ep(i,o){var c=o,f=0;do{var g=c.nextSibling;if(i.removeChild(c),g&&g.nodeType===8)if(c=g.data,c==="/$"){if(f===0){i.removeChild(g),Tr(o);return}f--}else c!=="$"&&c!=="$?"&&c!=="$!"||f++;c=g}while(c);Tr(o)}function Gi(i){for(;i!=null;i=i.nextSibling){var o=i.nodeType;if(o===1||o===3)break;if(o===8){if(o=i.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return i}function W0(i){i=i.previousSibling;for(var o=0;i;){if(i.nodeType===8){var c=i.data;if(c==="$"||c==="$!"||c==="$?"){if(o===0)return i;o--}else c==="/$"&&o++}i=i.previousSibling}return null}var ga=Math.random().toString(36).slice(2),$r="__reactFiber$"+ga,Ql="__reactProps$"+ga,pi="__reactContainer$"+ga,Tp="__reactEvents$"+ga,YP="__reactListeners$"+ga,XP="__reactHandles$"+ga;function Xs(i){var o=i[$r];if(o)return o;for(var c=i.parentNode;c;){if(o=c[pi]||c[$r]){if(c=o.alternate,o.child!==null||c!==null&&c.child!==null)for(i=W0(i);i!==null;){if(c=i[$r])return c;i=W0(i)}return o}i=c,c=i.parentNode}return null}function Yl(i){return i=i[$r]||i[pi],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function ya(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(n(33))}function Xu(i){return i[Ql]||null}var Sp=[],va=-1;function Ki(i){return{current:i}}function it(i){0>va||(i.current=Sp[va],Sp[va]=null,va--)}function tt(i,o){va++,Sp[va]=i.current,i.current=o}var Qi={},tn=Ki(Qi),xn=Ki(!1),Js=Qi;function _a(i,o){var c=i.type.contextTypes;if(!c)return Qi;var f=i.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===o)return f.__reactInternalMemoizedMaskedChildContext;var g={},_;for(_ in c)g[_]=o[_];return f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=o,i.__reactInternalMemoizedMaskedChildContext=g),g}function En(i){return i=i.childContextTypes,i!=null}function Ju(){it(xn),it(tn)}function H0(i,o,c){if(tn.current!==Qi)throw Error(n(168));tt(tn,o),tt(xn,c)}function q0(i,o,c){var f=i.stateNode;if(o=o.childContextTypes,typeof f.getChildContext!="function")return c;f=f.getChildContext();for(var g in f)if(!(g in o))throw Error(n(108,fe(i)||"Unknown",g));return Y({},c,f)}function Zu(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Qi,Js=tn.current,tt(tn,i),tt(xn,xn.current),!0}function G0(i,o,c){var f=i.stateNode;if(!f)throw Error(n(169));c?(i=q0(i,o,Js),f.__reactInternalMemoizedMergedChildContext=i,it(xn),it(tn),tt(tn,i)):it(xn),tt(xn,c)}var mi=null,eh=!1,Ip=!1;function K0(i){mi===null?mi=[i]:mi.push(i)}function JP(i){eh=!0,K0(i)}function Yi(){if(!Ip&&mi!==null){Ip=!0;var i=0,o=Be;try{var c=mi;for(Be=1;i<c.length;i++){var f=c[i];do f=f(!0);while(f!==null)}mi=null,eh=!1}catch(g){throw mi!==null&&(mi=mi.slice(i+1)),Jo($s,Yi),g}finally{Be=o,Ip=!1}}return null}var wa=[],xa=0,th=null,nh=0,Kn=[],Qn=0,Zs=null,gi=1,yi="";function eo(i,o){wa[xa++]=nh,wa[xa++]=th,th=i,nh=o}function Q0(i,o,c){Kn[Qn++]=gi,Kn[Qn++]=yi,Kn[Qn++]=Zs,Zs=i;var f=gi;i=yi;var g=32-dn(f)-1;f&=~(1<<g),c+=1;var _=32-dn(o)+g;if(30<_){var T=g-g%5;_=(f&(1<<T)-1).toString(32),f>>=T,g-=T,gi=1<<32-dn(o)+g|c<<g|f,yi=_+i}else gi=1<<_|c<<g|f,yi=i}function bp(i){i.return!==null&&(eo(i,1),Q0(i,1,0))}function Pp(i){for(;i===th;)th=wa[--xa],wa[xa]=null,nh=wa[--xa],wa[xa]=null;for(;i===Zs;)Zs=Kn[--Qn],Kn[Qn]=null,yi=Kn[--Qn],Kn[Qn]=null,gi=Kn[--Qn],Kn[Qn]=null}var Ln=null,Vn=null,at=!1,br=null;function Y0(i,o){var c=Zn(5,null,null,0);c.elementType="DELETED",c.stateNode=o,c.return=i,o=i.deletions,o===null?(i.deletions=[c],i.flags|=16):o.push(c)}function X0(i,o){switch(i.tag){case 5:var c=i.type;return o=o.nodeType!==1||c.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(i.stateNode=o,Ln=i,Vn=Gi(o.firstChild),!0):!1;case 6:return o=i.pendingProps===""||o.nodeType!==3?null:o,o!==null?(i.stateNode=o,Ln=i,Vn=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(c=Zs!==null?{id:gi,overflow:yi}:null,i.memoizedState={dehydrated:o,treeContext:c,retryLane:1073741824},c=Zn(18,null,null,0),c.stateNode=o,c.return=i,i.child=c,Ln=i,Vn=null,!0):!1;default:return!1}}function Cp(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Ap(i){if(at){var o=Vn;if(o){var c=o;if(!X0(i,o)){if(Cp(i))throw Error(n(418));o=Gi(c.nextSibling);var f=Ln;o&&X0(i,o)?Y0(f,c):(i.flags=i.flags&-4097|2,at=!1,Ln=i)}}else{if(Cp(i))throw Error(n(418));i.flags=i.flags&-4097|2,at=!1,Ln=i}}}function J0(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;Ln=i}function rh(i){if(i!==Ln)return!1;if(!at)return J0(i),at=!0,!1;var o;if((o=i.tag!==3)&&!(o=i.tag!==5)&&(o=i.type,o=o!=="head"&&o!=="body"&&!wp(i.type,i.memoizedProps)),o&&(o=Vn)){if(Cp(i))throw Z0(),Error(n(418));for(;o;)Y0(i,o),o=Gi(o.nextSibling)}if(J0(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(n(317));e:{for(i=i.nextSibling,o=0;i;){if(i.nodeType===8){var c=i.data;if(c==="/$"){if(o===0){Vn=Gi(i.nextSibling);break e}o--}else c!=="$"&&c!=="$!"&&c!=="$?"||o++}i=i.nextSibling}Vn=null}}else Vn=Ln?Gi(i.stateNode.nextSibling):null;return!0}function Z0(){for(var i=Vn;i;)i=Gi(i.nextSibling)}function Ea(){Vn=Ln=null,at=!1}function kp(i){br===null?br=[i]:br.push(i)}var ZP=D.ReactCurrentBatchConfig;function Xl(i,o,c){if(i=c.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(c._owner){if(c=c._owner,c){if(c.tag!==1)throw Error(n(309));var f=c.stateNode}if(!f)throw Error(n(147,i));var g=f,_=""+i;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===_?o.ref:(o=function(T){var O=g.refs;T===null?delete O[_]:O[_]=T},o._stringRef=_,o)}if(typeof i!="string")throw Error(n(284));if(!c._owner)throw Error(n(290,i))}return i}function ih(i,o){throw i=Object.prototype.toString.call(o),Error(n(31,i==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":i))}function e1(i){var o=i._init;return o(i._payload)}function t1(i){function o(K,W){if(i){var X=K.deletions;X===null?(K.deletions=[W],K.flags|=16):X.push(W)}}function c(K,W){if(!i)return null;for(;W!==null;)o(K,W),W=W.sibling;return null}function f(K,W){for(K=new Map;W!==null;)W.key!==null?K.set(W.key,W):K.set(W.index,W),W=W.sibling;return K}function g(K,W){return K=is(K,W),K.index=0,K.sibling=null,K}function _(K,W,X){return K.index=X,i?(X=K.alternate,X!==null?(X=X.index,X<W?(K.flags|=2,W):X):(K.flags|=2,W)):(K.flags|=1048576,W)}function T(K){return i&&K.alternate===null&&(K.flags|=2),K}function O(K,W,X,le){return W===null||W.tag!==6?(W=xm(X,K.mode,le),W.return=K,W):(W=g(W,X),W.return=K,W)}function U(K,W,X,le){var _e=X.type;return _e===k?ne(K,W,X.props.children,le,X.key):W!==null&&(W.elementType===_e||typeof _e=="object"&&_e!==null&&_e.$$typeof===xe&&e1(_e)===W.type)?(le=g(W,X.props),le.ref=Xl(K,W,X),le.return=K,le):(le=Ch(X.type,X.key,X.props,null,K.mode,le),le.ref=Xl(K,W,X),le.return=K,le)}function Z(K,W,X,le){return W===null||W.tag!==4||W.stateNode.containerInfo!==X.containerInfo||W.stateNode.implementation!==X.implementation?(W=Em(X,K.mode,le),W.return=K,W):(W=g(W,X.children||[]),W.return=K,W)}function ne(K,W,X,le,_e){return W===null||W.tag!==7?(W=lo(X,K.mode,le,_e),W.return=K,W):(W=g(W,X),W.return=K,W)}function oe(K,W,X){if(typeof W=="string"&&W!==""||typeof W=="number")return W=xm(""+W,K.mode,X),W.return=K,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case q:return X=Ch(W.type,W.key,W.props,null,K.mode,X),X.ref=Xl(K,null,W),X.return=K,X;case J:return W=Em(W,K.mode,X),W.return=K,W;case xe:var le=W._init;return oe(K,le(W._payload),X)}if(si(W)||ue(W))return W=lo(W,K.mode,X,null),W.return=K,W;ih(K,W)}return null}function te(K,W,X,le){var _e=W!==null?W.key:null;if(typeof X=="string"&&X!==""||typeof X=="number")return _e!==null?null:O(K,W,""+X,le);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case q:return X.key===_e?U(K,W,X,le):null;case J:return X.key===_e?Z(K,W,X,le):null;case xe:return _e=X._init,te(K,W,_e(X._payload),le)}if(si(X)||ue(X))return _e!==null?null:ne(K,W,X,le,null);ih(K,X)}return null}function he(K,W,X,le,_e){if(typeof le=="string"&&le!==""||typeof le=="number")return K=K.get(X)||null,O(W,K,""+le,_e);if(typeof le=="object"&&le!==null){switch(le.$$typeof){case q:return K=K.get(le.key===null?X:le.key)||null,U(W,K,le,_e);case J:return K=K.get(le.key===null?X:le.key)||null,Z(W,K,le,_e);case xe:var Se=le._init;return he(K,W,X,Se(le._payload),_e)}if(si(le)||ue(le))return K=K.get(X)||null,ne(W,K,le,_e,null);ih(W,le)}return null}function me(K,W,X,le){for(var _e=null,Se=null,Ie=W,Ae=W=0,$t=null;Ie!==null&&Ae<X.length;Ae++){Ie.index>Ae?($t=Ie,Ie=null):$t=Ie.sibling;var Ge=te(K,Ie,X[Ae],le);if(Ge===null){Ie===null&&(Ie=$t);break}i&&Ie&&Ge.alternate===null&&o(K,Ie),W=_(Ge,W,Ae),Se===null?_e=Ge:Se.sibling=Ge,Se=Ge,Ie=$t}if(Ae===X.length)return c(K,Ie),at&&eo(K,Ae),_e;if(Ie===null){for(;Ae<X.length;Ae++)Ie=oe(K,X[Ae],le),Ie!==null&&(W=_(Ie,W,Ae),Se===null?_e=Ie:Se.sibling=Ie,Se=Ie);return at&&eo(K,Ae),_e}for(Ie=f(K,Ie);Ae<X.length;Ae++)$t=he(Ie,K,Ae,X[Ae],le),$t!==null&&(i&&$t.alternate!==null&&Ie.delete($t.key===null?Ae:$t.key),W=_($t,W,Ae),Se===null?_e=$t:Se.sibling=$t,Se=$t);return i&&Ie.forEach(function(ss){return o(K,ss)}),at&&eo(K,Ae),_e}function ye(K,W,X,le){var _e=ue(X);if(typeof _e!="function")throw Error(n(150));if(X=_e.call(X),X==null)throw Error(n(151));for(var Se=_e=null,Ie=W,Ae=W=0,$t=null,Ge=X.next();Ie!==null&&!Ge.done;Ae++,Ge=X.next()){Ie.index>Ae?($t=Ie,Ie=null):$t=Ie.sibling;var ss=te(K,Ie,Ge.value,le);if(ss===null){Ie===null&&(Ie=$t);break}i&&Ie&&ss.alternate===null&&o(K,Ie),W=_(ss,W,Ae),Se===null?_e=ss:Se.sibling=ss,Se=ss,Ie=$t}if(Ge.done)return c(K,Ie),at&&eo(K,Ae),_e;if(Ie===null){for(;!Ge.done;Ae++,Ge=X.next())Ge=oe(K,Ge.value,le),Ge!==null&&(W=_(Ge,W,Ae),Se===null?_e=Ge:Se.sibling=Ge,Se=Ge);return at&&eo(K,Ae),_e}for(Ie=f(K,Ie);!Ge.done;Ae++,Ge=X.next())Ge=he(Ie,K,Ae,Ge.value,le),Ge!==null&&(i&&Ge.alternate!==null&&Ie.delete(Ge.key===null?Ae:Ge.key),W=_(Ge,W,Ae),Se===null?_e=Ge:Se.sibling=Ge,Se=Ge);return i&&Ie.forEach(function(DC){return o(K,DC)}),at&&eo(K,Ae),_e}function Et(K,W,X,le){if(typeof X=="object"&&X!==null&&X.type===k&&X.key===null&&(X=X.props.children),typeof X=="object"&&X!==null){switch(X.$$typeof){case q:e:{for(var _e=X.key,Se=W;Se!==null;){if(Se.key===_e){if(_e=X.type,_e===k){if(Se.tag===7){c(K,Se.sibling),W=g(Se,X.props.children),W.return=K,K=W;break e}}else if(Se.elementType===_e||typeof _e=="object"&&_e!==null&&_e.$$typeof===xe&&e1(_e)===Se.type){c(K,Se.sibling),W=g(Se,X.props),W.ref=Xl(K,Se,X),W.return=K,K=W;break e}c(K,Se);break}else o(K,Se);Se=Se.sibling}X.type===k?(W=lo(X.props.children,K.mode,le,X.key),W.return=K,K=W):(le=Ch(X.type,X.key,X.props,null,K.mode,le),le.ref=Xl(K,W,X),le.return=K,K=le)}return T(K);case J:e:{for(Se=X.key;W!==null;){if(W.key===Se)if(W.tag===4&&W.stateNode.containerInfo===X.containerInfo&&W.stateNode.implementation===X.implementation){c(K,W.sibling),W=g(W,X.children||[]),W.return=K,K=W;break e}else{c(K,W);break}else o(K,W);W=W.sibling}W=Em(X,K.mode,le),W.return=K,K=W}return T(K);case xe:return Se=X._init,Et(K,W,Se(X._payload),le)}if(si(X))return me(K,W,X,le);if(ue(X))return ye(K,W,X,le);ih(K,X)}return typeof X=="string"&&X!==""||typeof X=="number"?(X=""+X,W!==null&&W.tag===6?(c(K,W.sibling),W=g(W,X),W.return=K,K=W):(c(K,W),W=xm(X,K.mode,le),W.return=K,K=W),T(K)):c(K,W)}return Et}var Ta=t1(!0),n1=t1(!1),sh=Ki(null),oh=null,Sa=null,Rp=null;function Dp(){Rp=Sa=oh=null}function jp(i){var o=sh.current;it(sh),i._currentValue=o}function Np(i,o,c){for(;i!==null;){var f=i.alternate;if((i.childLanes&o)!==o?(i.childLanes|=o,f!==null&&(f.childLanes|=o)):f!==null&&(f.childLanes&o)!==o&&(f.childLanes|=o),i===c)break;i=i.return}}function Ia(i,o){oh=i,Rp=Sa=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&o)!==0&&(Tn=!0),i.firstContext=null)}function Yn(i){var o=i._currentValue;if(Rp!==i)if(i={context:i,memoizedValue:o,next:null},Sa===null){if(oh===null)throw Error(n(308));Sa=i,oh.dependencies={lanes:0,firstContext:i}}else Sa=Sa.next=i;return o}var to=null;function Op(i){to===null?to=[i]:to.push(i)}function r1(i,o,c,f){var g=o.interleaved;return g===null?(c.next=c,Op(o)):(c.next=g.next,g.next=c),o.interleaved=c,vi(i,f)}function vi(i,o){i.lanes|=o;var c=i.alternate;for(c!==null&&(c.lanes|=o),c=i,i=i.return;i!==null;)i.childLanes|=o,c=i.alternate,c!==null&&(c.childLanes|=o),c=i,i=i.return;return c.tag===3?c.stateNode:null}var Xi=!1;function Lp(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function i1(i,o){i=i.updateQueue,o.updateQueue===i&&(o.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function _i(i,o){return{eventTime:i,lane:o,tag:0,payload:null,callback:null,next:null}}function Ji(i,o,c){var f=i.updateQueue;if(f===null)return null;if(f=f.shared,(qe&2)!==0){var g=f.pending;return g===null?o.next=o:(o.next=g.next,g.next=o),f.pending=o,vi(i,c)}return g=f.interleaved,g===null?(o.next=o,Op(f)):(o.next=g.next,g.next=o),f.interleaved=o,vi(i,c)}function ah(i,o,c){if(o=o.updateQueue,o!==null&&(o=o.shared,(c&4194240)!==0)){var f=o.lanes;f&=i.pendingLanes,c|=f,o.lanes=c,Bi(i,c)}}function s1(i,o){var c=i.updateQueue,f=i.alternate;if(f!==null&&(f=f.updateQueue,c===f)){var g=null,_=null;if(c=c.firstBaseUpdate,c!==null){do{var T={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};_===null?g=_=T:_=_.next=T,c=c.next}while(c!==null);_===null?g=_=o:_=_.next=o}else g=_=o;c={baseState:f.baseState,firstBaseUpdate:g,lastBaseUpdate:_,shared:f.shared,effects:f.effects},i.updateQueue=c;return}i=c.lastBaseUpdate,i===null?c.firstBaseUpdate=o:i.next=o,c.lastBaseUpdate=o}function lh(i,o,c,f){var g=i.updateQueue;Xi=!1;var _=g.firstBaseUpdate,T=g.lastBaseUpdate,O=g.shared.pending;if(O!==null){g.shared.pending=null;var U=O,Z=U.next;U.next=null,T===null?_=Z:T.next=Z,T=U;var ne=i.alternate;ne!==null&&(ne=ne.updateQueue,O=ne.lastBaseUpdate,O!==T&&(O===null?ne.firstBaseUpdate=Z:O.next=Z,ne.lastBaseUpdate=U))}if(_!==null){var oe=g.baseState;T=0,ne=Z=U=null,O=_;do{var te=O.lane,he=O.eventTime;if((f&te)===te){ne!==null&&(ne=ne.next={eventTime:he,lane:0,tag:O.tag,payload:O.payload,callback:O.callback,next:null});e:{var me=i,ye=O;switch(te=o,he=c,ye.tag){case 1:if(me=ye.payload,typeof me=="function"){oe=me.call(he,oe,te);break e}oe=me;break e;case 3:me.flags=me.flags&-65537|128;case 0:if(me=ye.payload,te=typeof me=="function"?me.call(he,oe,te):me,te==null)break e;oe=Y({},oe,te);break e;case 2:Xi=!0}}O.callback!==null&&O.lane!==0&&(i.flags|=64,te=g.effects,te===null?g.effects=[O]:te.push(O))}else he={eventTime:he,lane:te,tag:O.tag,payload:O.payload,callback:O.callback,next:null},ne===null?(Z=ne=he,U=oe):ne=ne.next=he,T|=te;if(O=O.next,O===null){if(O=g.shared.pending,O===null)break;te=O,O=te.next,te.next=null,g.lastBaseUpdate=te,g.shared.pending=null}}while(!0);if(ne===null&&(U=oe),g.baseState=U,g.firstBaseUpdate=Z,g.lastBaseUpdate=ne,o=g.shared.interleaved,o!==null){g=o;do T|=g.lane,g=g.next;while(g!==o)}else _===null&&(g.shared.lanes=0);io|=T,i.lanes=T,i.memoizedState=oe}}function o1(i,o,c){if(i=o.effects,o.effects=null,i!==null)for(o=0;o<i.length;o++){var f=i[o],g=f.callback;if(g!==null){if(f.callback=null,f=c,typeof g!="function")throw Error(n(191,g));g.call(f)}}}var Jl={},Wr=Ki(Jl),Zl=Ki(Jl),ec=Ki(Jl);function no(i){if(i===Jl)throw Error(n(174));return i}function Vp(i,o){switch(tt(ec,o),tt(Zl,i),tt(Wr,Jl),i=o.nodeType,i){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:Nt(null,"");break;default:i=i===8?o.parentNode:o,o=i.namespaceURI||null,i=i.tagName,o=Nt(o,i)}it(Wr),tt(Wr,o)}function ba(){it(Wr),it(Zl),it(ec)}function a1(i){no(ec.current);var o=no(Wr.current),c=Nt(o,i.type);o!==c&&(tt(Zl,i),tt(Wr,c))}function Mp(i){Zl.current===i&&(it(Wr),it(Zl))}var dt=Ki(0);function ch(i){for(var o=i;o!==null;){if(o.tag===13){var c=o.memoizedState;if(c!==null&&(c=c.dehydrated,c===null||c.data==="$?"||c.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if((o.flags&128)!==0)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var Fp=[];function Up(){for(var i=0;i<Fp.length;i++)Fp[i]._workInProgressVersionPrimary=null;Fp.length=0}var uh=D.ReactCurrentDispatcher,Bp=D.ReactCurrentBatchConfig,ro=0,ft=null,Lt=null,Bt=null,hh=!1,tc=!1,nc=0,eC=0;function nn(){throw Error(n(321))}function zp(i,o){if(o===null)return!1;for(var c=0;c<o.length&&c<i.length;c++)if(!Ir(i[c],o[c]))return!1;return!0}function $p(i,o,c,f,g,_){if(ro=_,ft=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,uh.current=i===null||i.memoizedState===null?iC:sC,i=c(f,g),tc){_=0;do{if(tc=!1,nc=0,25<=_)throw Error(n(301));_+=1,Bt=Lt=null,o.updateQueue=null,uh.current=oC,i=c(f,g)}while(tc)}if(uh.current=ph,o=Lt!==null&&Lt.next!==null,ro=0,Bt=Lt=ft=null,hh=!1,o)throw Error(n(300));return i}function Wp(){var i=nc!==0;return nc=0,i}function Hr(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bt===null?ft.memoizedState=Bt=i:Bt=Bt.next=i,Bt}function Xn(){if(Lt===null){var i=ft.alternate;i=i!==null?i.memoizedState:null}else i=Lt.next;var o=Bt===null?ft.memoizedState:Bt.next;if(o!==null)Bt=o,Lt=i;else{if(i===null)throw Error(n(310));Lt=i,i={memoizedState:Lt.memoizedState,baseState:Lt.baseState,baseQueue:Lt.baseQueue,queue:Lt.queue,next:null},Bt===null?ft.memoizedState=Bt=i:Bt=Bt.next=i}return Bt}function rc(i,o){return typeof o=="function"?o(i):o}function Hp(i){var o=Xn(),c=o.queue;if(c===null)throw Error(n(311));c.lastRenderedReducer=i;var f=Lt,g=f.baseQueue,_=c.pending;if(_!==null){if(g!==null){var T=g.next;g.next=_.next,_.next=T}f.baseQueue=g=_,c.pending=null}if(g!==null){_=g.next,f=f.baseState;var O=T=null,U=null,Z=_;do{var ne=Z.lane;if((ro&ne)===ne)U!==null&&(U=U.next={lane:0,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null}),f=Z.hasEagerState?Z.eagerState:i(f,Z.action);else{var oe={lane:ne,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null};U===null?(O=U=oe,T=f):U=U.next=oe,ft.lanes|=ne,io|=ne}Z=Z.next}while(Z!==null&&Z!==_);U===null?T=f:U.next=O,Ir(f,o.memoizedState)||(Tn=!0),o.memoizedState=f,o.baseState=T,o.baseQueue=U,c.lastRenderedState=f}if(i=c.interleaved,i!==null){g=i;do _=g.lane,ft.lanes|=_,io|=_,g=g.next;while(g!==i)}else g===null&&(c.lanes=0);return[o.memoizedState,c.dispatch]}function qp(i){var o=Xn(),c=o.queue;if(c===null)throw Error(n(311));c.lastRenderedReducer=i;var f=c.dispatch,g=c.pending,_=o.memoizedState;if(g!==null){c.pending=null;var T=g=g.next;do _=i(_,T.action),T=T.next;while(T!==g);Ir(_,o.memoizedState)||(Tn=!0),o.memoizedState=_,o.baseQueue===null&&(o.baseState=_),c.lastRenderedState=_}return[_,f]}function l1(){}function c1(i,o){var c=ft,f=Xn(),g=o(),_=!Ir(f.memoizedState,g);if(_&&(f.memoizedState=g,Tn=!0),f=f.queue,Gp(d1.bind(null,c,f,i),[i]),f.getSnapshot!==o||_||Bt!==null&&Bt.memoizedState.tag&1){if(c.flags|=2048,ic(9,h1.bind(null,c,f,g,o),void 0,null),zt===null)throw Error(n(349));(ro&30)!==0||u1(c,o,g)}return g}function u1(i,o,c){i.flags|=16384,i={getSnapshot:o,value:c},o=ft.updateQueue,o===null?(o={lastEffect:null,stores:null},ft.updateQueue=o,o.stores=[i]):(c=o.stores,c===null?o.stores=[i]:c.push(i))}function h1(i,o,c,f){o.value=c,o.getSnapshot=f,f1(o)&&p1(i)}function d1(i,o,c){return c(function(){f1(o)&&p1(i)})}function f1(i){var o=i.getSnapshot;i=i.value;try{var c=o();return!Ir(i,c)}catch{return!0}}function p1(i){var o=vi(i,1);o!==null&&kr(o,i,1,-1)}function m1(i){var o=Hr();return typeof i=="function"&&(i=i()),o.memoizedState=o.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:rc,lastRenderedState:i},o.queue=i,i=i.dispatch=rC.bind(null,ft,i),[o.memoizedState,i]}function ic(i,o,c,f){return i={tag:i,create:o,destroy:c,deps:f,next:null},o=ft.updateQueue,o===null?(o={lastEffect:null,stores:null},ft.updateQueue=o,o.lastEffect=i.next=i):(c=o.lastEffect,c===null?o.lastEffect=i.next=i:(f=c.next,c.next=i,i.next=f,o.lastEffect=i)),i}function g1(){return Xn().memoizedState}function dh(i,o,c,f){var g=Hr();ft.flags|=i,g.memoizedState=ic(1|o,c,void 0,f===void 0?null:f)}function fh(i,o,c,f){var g=Xn();f=f===void 0?null:f;var _=void 0;if(Lt!==null){var T=Lt.memoizedState;if(_=T.destroy,f!==null&&zp(f,T.deps)){g.memoizedState=ic(o,c,_,f);return}}ft.flags|=i,g.memoizedState=ic(1|o,c,_,f)}function y1(i,o){return dh(8390656,8,i,o)}function Gp(i,o){return fh(2048,8,i,o)}function v1(i,o){return fh(4,2,i,o)}function _1(i,o){return fh(4,4,i,o)}function w1(i,o){if(typeof o=="function")return i=i(),o(i),function(){o(null)};if(o!=null)return i=i(),o.current=i,function(){o.current=null}}function x1(i,o,c){return c=c!=null?c.concat([i]):null,fh(4,4,w1.bind(null,o,i),c)}function Kp(){}function E1(i,o){var c=Xn();o=o===void 0?null:o;var f=c.memoizedState;return f!==null&&o!==null&&zp(o,f[1])?f[0]:(c.memoizedState=[i,o],i)}function T1(i,o){var c=Xn();o=o===void 0?null:o;var f=c.memoizedState;return f!==null&&o!==null&&zp(o,f[1])?f[0]:(i=i(),c.memoizedState=[i,o],i)}function S1(i,o,c){return(ro&21)===0?(i.baseState&&(i.baseState=!1,Tn=!0),i.memoizedState=c):(Ir(c,o)||(c=qs(),ft.lanes|=c,io|=c,i.baseState=!0),o)}function tC(i,o){var c=Be;Be=c!==0&&4>c?c:4,i(!0);var f=Bp.transition;Bp.transition={};try{i(!1),o()}finally{Be=c,Bp.transition=f}}function I1(){return Xn().memoizedState}function nC(i,o,c){var f=ns(i);if(c={lane:f,action:c,hasEagerState:!1,eagerState:null,next:null},b1(i))P1(o,c);else if(c=r1(i,o,c,f),c!==null){var g=mn();kr(c,i,f,g),C1(c,o,f)}}function rC(i,o,c){var f=ns(i),g={lane:f,action:c,hasEagerState:!1,eagerState:null,next:null};if(b1(i))P1(o,g);else{var _=i.alternate;if(i.lanes===0&&(_===null||_.lanes===0)&&(_=o.lastRenderedReducer,_!==null))try{var T=o.lastRenderedState,O=_(T,c);if(g.hasEagerState=!0,g.eagerState=O,Ir(O,T)){var U=o.interleaved;U===null?(g.next=g,Op(o)):(g.next=U.next,U.next=g),o.interleaved=g;return}}catch{}finally{}c=r1(i,o,g,f),c!==null&&(g=mn(),kr(c,i,f,g),C1(c,o,f))}}function b1(i){var o=i.alternate;return i===ft||o!==null&&o===ft}function P1(i,o){tc=hh=!0;var c=i.pending;c===null?o.next=o:(o.next=c.next,c.next=o),i.pending=o}function C1(i,o,c){if((c&4194240)!==0){var f=o.lanes;f&=i.pendingLanes,c|=f,o.lanes=c,Bi(i,c)}}var ph={readContext:Yn,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useInsertionEffect:nn,useLayoutEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useMutableSource:nn,useSyncExternalStore:nn,useId:nn,unstable_isNewReconciler:!1},iC={readContext:Yn,useCallback:function(i,o){return Hr().memoizedState=[i,o===void 0?null:o],i},useContext:Yn,useEffect:y1,useImperativeHandle:function(i,o,c){return c=c!=null?c.concat([i]):null,dh(4194308,4,w1.bind(null,o,i),c)},useLayoutEffect:function(i,o){return dh(4194308,4,i,o)},useInsertionEffect:function(i,o){return dh(4,2,i,o)},useMemo:function(i,o){var c=Hr();return o=o===void 0?null:o,i=i(),c.memoizedState=[i,o],i},useReducer:function(i,o,c){var f=Hr();return o=c!==void 0?c(o):o,f.memoizedState=f.baseState=o,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:o},f.queue=i,i=i.dispatch=nC.bind(null,ft,i),[f.memoizedState,i]},useRef:function(i){var o=Hr();return i={current:i},o.memoizedState=i},useState:m1,useDebugValue:Kp,useDeferredValue:function(i){return Hr().memoizedState=i},useTransition:function(){var i=m1(!1),o=i[0];return i=tC.bind(null,i[1]),Hr().memoizedState=i,[o,i]},useMutableSource:function(){},useSyncExternalStore:function(i,o,c){var f=ft,g=Hr();if(at){if(c===void 0)throw Error(n(407));c=c()}else{if(c=o(),zt===null)throw Error(n(349));(ro&30)!==0||u1(f,o,c)}g.memoizedState=c;var _={value:c,getSnapshot:o};return g.queue=_,y1(d1.bind(null,f,_,i),[i]),f.flags|=2048,ic(9,h1.bind(null,f,_,c,o),void 0,null),c},useId:function(){var i=Hr(),o=zt.identifierPrefix;if(at){var c=yi,f=gi;c=(f&~(1<<32-dn(f)-1)).toString(32)+c,o=":"+o+"R"+c,c=nc++,0<c&&(o+="H"+c.toString(32)),o+=":"}else c=eC++,o=":"+o+"r"+c.toString(32)+":";return i.memoizedState=o},unstable_isNewReconciler:!1},sC={readContext:Yn,useCallback:E1,useContext:Yn,useEffect:Gp,useImperativeHandle:x1,useInsertionEffect:v1,useLayoutEffect:_1,useMemo:T1,useReducer:Hp,useRef:g1,useState:function(){return Hp(rc)},useDebugValue:Kp,useDeferredValue:function(i){var o=Xn();return S1(o,Lt.memoizedState,i)},useTransition:function(){var i=Hp(rc)[0],o=Xn().memoizedState;return[i,o]},useMutableSource:l1,useSyncExternalStore:c1,useId:I1,unstable_isNewReconciler:!1},oC={readContext:Yn,useCallback:E1,useContext:Yn,useEffect:Gp,useImperativeHandle:x1,useInsertionEffect:v1,useLayoutEffect:_1,useMemo:T1,useReducer:qp,useRef:g1,useState:function(){return qp(rc)},useDebugValue:Kp,useDeferredValue:function(i){var o=Xn();return Lt===null?o.memoizedState=i:S1(o,Lt.memoizedState,i)},useTransition:function(){var i=qp(rc)[0],o=Xn().memoizedState;return[i,o]},useMutableSource:l1,useSyncExternalStore:c1,useId:I1,unstable_isNewReconciler:!1};function Pr(i,o){if(i&&i.defaultProps){o=Y({},o),i=i.defaultProps;for(var c in i)o[c]===void 0&&(o[c]=i[c]);return o}return o}function Qp(i,o,c,f){o=i.memoizedState,c=c(f,o),c=c==null?o:Y({},o,c),i.memoizedState=c,i.lanes===0&&(i.updateQueue.baseState=c)}var mh={isMounted:function(i){return(i=i._reactInternals)?vr(i)===i:!1},enqueueSetState:function(i,o,c){i=i._reactInternals;var f=mn(),g=ns(i),_=_i(f,g);_.payload=o,c!=null&&(_.callback=c),o=Ji(i,_,g),o!==null&&(kr(o,i,g,f),ah(o,i,g))},enqueueReplaceState:function(i,o,c){i=i._reactInternals;var f=mn(),g=ns(i),_=_i(f,g);_.tag=1,_.payload=o,c!=null&&(_.callback=c),o=Ji(i,_,g),o!==null&&(kr(o,i,g,f),ah(o,i,g))},enqueueForceUpdate:function(i,o){i=i._reactInternals;var c=mn(),f=ns(i),g=_i(c,f);g.tag=2,o!=null&&(g.callback=o),o=Ji(i,g,f),o!==null&&(kr(o,i,f,c),ah(o,i,f))}};function A1(i,o,c,f,g,_,T){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(f,_,T):o.prototype&&o.prototype.isPureReactComponent?!Wl(c,f)||!Wl(g,_):!0}function k1(i,o,c){var f=!1,g=Qi,_=o.contextType;return typeof _=="object"&&_!==null?_=Yn(_):(g=En(o)?Js:tn.current,f=o.contextTypes,_=(f=f!=null)?_a(i,g):Qi),o=new o(c,_),i.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=mh,i.stateNode=o,o._reactInternals=i,f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=g,i.__reactInternalMemoizedMaskedChildContext=_),o}function R1(i,o,c,f){i=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(c,f),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(c,f),o.state!==i&&mh.enqueueReplaceState(o,o.state,null)}function Yp(i,o,c,f){var g=i.stateNode;g.props=c,g.state=i.memoizedState,g.refs={},Lp(i);var _=o.contextType;typeof _=="object"&&_!==null?g.context=Yn(_):(_=En(o)?Js:tn.current,g.context=_a(i,_)),g.state=i.memoizedState,_=o.getDerivedStateFromProps,typeof _=="function"&&(Qp(i,o,_,c),g.state=i.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(o=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),o!==g.state&&mh.enqueueReplaceState(g,g.state,null),lh(i,c,g,f),g.state=i.memoizedState),typeof g.componentDidMount=="function"&&(i.flags|=4194308)}function Pa(i,o){try{var c="",f=o;do c+=ge(f),f=f.return;while(f);var g=c}catch(_){g=`
Error generating stack: `+_.message+`
`+_.stack}return{value:i,source:o,stack:g,digest:null}}function Xp(i,o,c){return{value:i,source:null,stack:c??null,digest:o??null}}function Jp(i,o){try{console.error(o.value)}catch(c){setTimeout(function(){throw c})}}var aC=typeof WeakMap=="function"?WeakMap:Map;function D1(i,o,c){c=_i(-1,c),c.tag=3,c.payload={element:null};var f=o.value;return c.callback=function(){Eh||(Eh=!0,fm=f),Jp(i,o)},c}function j1(i,o,c){c=_i(-1,c),c.tag=3;var f=i.type.getDerivedStateFromError;if(typeof f=="function"){var g=o.value;c.payload=function(){return f(g)},c.callback=function(){Jp(i,o)}}var _=i.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(c.callback=function(){Jp(i,o),typeof f!="function"&&(es===null?es=new Set([this]):es.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})}),c}function N1(i,o,c){var f=i.pingCache;if(f===null){f=i.pingCache=new aC;var g=new Set;f.set(o,g)}else g=f.get(o),g===void 0&&(g=new Set,f.set(o,g));g.has(c)||(g.add(c),i=xC.bind(null,i,o,c),o.then(i,i))}function O1(i){do{var o;if((o=i.tag===13)&&(o=i.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return i;i=i.return}while(i!==null);return null}function L1(i,o,c,f,g){return(i.mode&1)===0?(i===o?i.flags|=65536:(i.flags|=128,c.flags|=131072,c.flags&=-52805,c.tag===1&&(c.alternate===null?c.tag=17:(o=_i(-1,1),o.tag=2,Ji(c,o,1))),c.lanes|=1),i):(i.flags|=65536,i.lanes=g,i)}var lC=D.ReactCurrentOwner,Tn=!1;function pn(i,o,c,f){o.child=i===null?n1(o,null,c,f):Ta(o,i.child,c,f)}function V1(i,o,c,f,g){c=c.render;var _=o.ref;return Ia(o,g),f=$p(i,o,c,f,_,g),c=Wp(),i!==null&&!Tn?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~g,wi(i,o,g)):(at&&c&&bp(o),o.flags|=1,pn(i,o,f,g),o.child)}function M1(i,o,c,f,g){if(i===null){var _=c.type;return typeof _=="function"&&!wm(_)&&_.defaultProps===void 0&&c.compare===null&&c.defaultProps===void 0?(o.tag=15,o.type=_,F1(i,o,_,f,g)):(i=Ch(c.type,null,f,o,o.mode,g),i.ref=o.ref,i.return=o,o.child=i)}if(_=i.child,(i.lanes&g)===0){var T=_.memoizedProps;if(c=c.compare,c=c!==null?c:Wl,c(T,f)&&i.ref===o.ref)return wi(i,o,g)}return o.flags|=1,i=is(_,f),i.ref=o.ref,i.return=o,o.child=i}function F1(i,o,c,f,g){if(i!==null){var _=i.memoizedProps;if(Wl(_,f)&&i.ref===o.ref)if(Tn=!1,o.pendingProps=f=_,(i.lanes&g)!==0)(i.flags&131072)!==0&&(Tn=!0);else return o.lanes=i.lanes,wi(i,o,g)}return Zp(i,o,c,f,g)}function U1(i,o,c){var f=o.pendingProps,g=f.children,_=i!==null?i.memoizedState:null;if(f.mode==="hidden")if((o.mode&1)===0)o.memoizedState={baseLanes:0,cachePool:null,transitions:null},tt(Aa,Mn),Mn|=c;else{if((c&1073741824)===0)return i=_!==null?_.baseLanes|c:c,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:i,cachePool:null,transitions:null},o.updateQueue=null,tt(Aa,Mn),Mn|=i,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=_!==null?_.baseLanes:c,tt(Aa,Mn),Mn|=f}else _!==null?(f=_.baseLanes|c,o.memoizedState=null):f=c,tt(Aa,Mn),Mn|=f;return pn(i,o,g,c),o.child}function B1(i,o){var c=o.ref;(i===null&&c!==null||i!==null&&i.ref!==c)&&(o.flags|=512,o.flags|=2097152)}function Zp(i,o,c,f,g){var _=En(c)?Js:tn.current;return _=_a(o,_),Ia(o,g),c=$p(i,o,c,f,_,g),f=Wp(),i!==null&&!Tn?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~g,wi(i,o,g)):(at&&f&&bp(o),o.flags|=1,pn(i,o,c,g),o.child)}function z1(i,o,c,f,g){if(En(c)){var _=!0;Zu(o)}else _=!1;if(Ia(o,g),o.stateNode===null)yh(i,o),k1(o,c,f),Yp(o,c,f,g),f=!0;else if(i===null){var T=o.stateNode,O=o.memoizedProps;T.props=O;var U=T.context,Z=c.contextType;typeof Z=="object"&&Z!==null?Z=Yn(Z):(Z=En(c)?Js:tn.current,Z=_a(o,Z));var ne=c.getDerivedStateFromProps,oe=typeof ne=="function"||typeof T.getSnapshotBeforeUpdate=="function";oe||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(O!==f||U!==Z)&&R1(o,T,f,Z),Xi=!1;var te=o.memoizedState;T.state=te,lh(o,f,T,g),U=o.memoizedState,O!==f||te!==U||xn.current||Xi?(typeof ne=="function"&&(Qp(o,c,ne,f),U=o.memoizedState),(O=Xi||A1(o,c,O,f,te,U,Z))?(oe||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(o.flags|=4194308)):(typeof T.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=f,o.memoizedState=U),T.props=f,T.state=U,T.context=Z,f=O):(typeof T.componentDidMount=="function"&&(o.flags|=4194308),f=!1)}else{T=o.stateNode,i1(i,o),O=o.memoizedProps,Z=o.type===o.elementType?O:Pr(o.type,O),T.props=Z,oe=o.pendingProps,te=T.context,U=c.contextType,typeof U=="object"&&U!==null?U=Yn(U):(U=En(c)?Js:tn.current,U=_a(o,U));var he=c.getDerivedStateFromProps;(ne=typeof he=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(O!==oe||te!==U)&&R1(o,T,f,U),Xi=!1,te=o.memoizedState,T.state=te,lh(o,f,T,g);var me=o.memoizedState;O!==oe||te!==me||xn.current||Xi?(typeof he=="function"&&(Qp(o,c,he,f),me=o.memoizedState),(Z=Xi||A1(o,c,Z,f,te,me,U)||!1)?(ne||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(f,me,U),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(f,me,U)),typeof T.componentDidUpdate=="function"&&(o.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof T.componentDidUpdate!="function"||O===i.memoizedProps&&te===i.memoizedState||(o.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||O===i.memoizedProps&&te===i.memoizedState||(o.flags|=1024),o.memoizedProps=f,o.memoizedState=me),T.props=f,T.state=me,T.context=U,f=Z):(typeof T.componentDidUpdate!="function"||O===i.memoizedProps&&te===i.memoizedState||(o.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||O===i.memoizedProps&&te===i.memoizedState||(o.flags|=1024),f=!1)}return em(i,o,c,f,_,g)}function em(i,o,c,f,g,_){B1(i,o);var T=(o.flags&128)!==0;if(!f&&!T)return g&&G0(o,c,!1),wi(i,o,_);f=o.stateNode,lC.current=o;var O=T&&typeof c.getDerivedStateFromError!="function"?null:f.render();return o.flags|=1,i!==null&&T?(o.child=Ta(o,i.child,null,_),o.child=Ta(o,null,O,_)):pn(i,o,O,_),o.memoizedState=f.state,g&&G0(o,c,!0),o.child}function $1(i){var o=i.stateNode;o.pendingContext?H0(i,o.pendingContext,o.pendingContext!==o.context):o.context&&H0(i,o.context,!1),Vp(i,o.containerInfo)}function W1(i,o,c,f,g){return Ea(),kp(g),o.flags|=256,pn(i,o,c,f),o.child}var tm={dehydrated:null,treeContext:null,retryLane:0};function nm(i){return{baseLanes:i,cachePool:null,transitions:null}}function H1(i,o,c){var f=o.pendingProps,g=dt.current,_=!1,T=(o.flags&128)!==0,O;if((O=T)||(O=i!==null&&i.memoizedState===null?!1:(g&2)!==0),O?(_=!0,o.flags&=-129):(i===null||i.memoizedState!==null)&&(g|=1),tt(dt,g&1),i===null)return Ap(o),i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((o.mode&1)===0?o.lanes=1:i.data==="$!"?o.lanes=8:o.lanes=1073741824,null):(T=f.children,i=f.fallback,_?(f=o.mode,_=o.child,T={mode:"hidden",children:T},(f&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=T):_=Ah(T,f,0,null),i=lo(i,f,c,null),_.return=o,i.return=o,_.sibling=i,o.child=_,o.child.memoizedState=nm(c),o.memoizedState=tm,i):rm(o,T));if(g=i.memoizedState,g!==null&&(O=g.dehydrated,O!==null))return cC(i,o,T,f,O,g,c);if(_){_=f.fallback,T=o.mode,g=i.child,O=g.sibling;var U={mode:"hidden",children:f.children};return(T&1)===0&&o.child!==g?(f=o.child,f.childLanes=0,f.pendingProps=U,o.deletions=null):(f=is(g,U),f.subtreeFlags=g.subtreeFlags&14680064),O!==null?_=is(O,_):(_=lo(_,T,c,null),_.flags|=2),_.return=o,f.return=o,f.sibling=_,o.child=f,f=_,_=o.child,T=i.child.memoizedState,T=T===null?nm(c):{baseLanes:T.baseLanes|c,cachePool:null,transitions:T.transitions},_.memoizedState=T,_.childLanes=i.childLanes&~c,o.memoizedState=tm,f}return _=i.child,i=_.sibling,f=is(_,{mode:"visible",children:f.children}),(o.mode&1)===0&&(f.lanes=c),f.return=o,f.sibling=null,i!==null&&(c=o.deletions,c===null?(o.deletions=[i],o.flags|=16):c.push(i)),o.child=f,o.memoizedState=null,f}function rm(i,o){return o=Ah({mode:"visible",children:o},i.mode,0,null),o.return=i,i.child=o}function gh(i,o,c,f){return f!==null&&kp(f),Ta(o,i.child,null,c),i=rm(o,o.pendingProps.children),i.flags|=2,o.memoizedState=null,i}function cC(i,o,c,f,g,_,T){if(c)return o.flags&256?(o.flags&=-257,f=Xp(Error(n(422))),gh(i,o,T,f)):o.memoizedState!==null?(o.child=i.child,o.flags|=128,null):(_=f.fallback,g=o.mode,f=Ah({mode:"visible",children:f.children},g,0,null),_=lo(_,g,T,null),_.flags|=2,f.return=o,_.return=o,f.sibling=_,o.child=f,(o.mode&1)!==0&&Ta(o,i.child,null,T),o.child.memoizedState=nm(T),o.memoizedState=tm,_);if((o.mode&1)===0)return gh(i,o,T,null);if(g.data==="$!"){if(f=g.nextSibling&&g.nextSibling.dataset,f)var O=f.dgst;return f=O,_=Error(n(419)),f=Xp(_,f,void 0),gh(i,o,T,f)}if(O=(T&i.childLanes)!==0,Tn||O){if(f=zt,f!==null){switch(T&-T){case 4:g=2;break;case 16:g=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:g=32;break;case 536870912:g=268435456;break;default:g=0}g=(g&(f.suspendedLanes|T))!==0?0:g,g!==0&&g!==_.retryLane&&(_.retryLane=g,vi(i,g),kr(f,i,g,-1))}return _m(),f=Xp(Error(n(421))),gh(i,o,T,f)}return g.data==="$?"?(o.flags|=128,o.child=i.child,o=EC.bind(null,i),g._reactRetry=o,null):(i=_.treeContext,Vn=Gi(g.nextSibling),Ln=o,at=!0,br=null,i!==null&&(Kn[Qn++]=gi,Kn[Qn++]=yi,Kn[Qn++]=Zs,gi=i.id,yi=i.overflow,Zs=o),o=rm(o,f.children),o.flags|=4096,o)}function q1(i,o,c){i.lanes|=o;var f=i.alternate;f!==null&&(f.lanes|=o),Np(i.return,o,c)}function im(i,o,c,f,g){var _=i.memoizedState;_===null?i.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:f,tail:c,tailMode:g}:(_.isBackwards=o,_.rendering=null,_.renderingStartTime=0,_.last=f,_.tail=c,_.tailMode=g)}function G1(i,o,c){var f=o.pendingProps,g=f.revealOrder,_=f.tail;if(pn(i,o,f.children,c),f=dt.current,(f&2)!==0)f=f&1|2,o.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=o.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&q1(i,c,o);else if(i.tag===19)q1(i,c,o);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===o)break e;for(;i.sibling===null;){if(i.return===null||i.return===o)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}f&=1}if(tt(dt,f),(o.mode&1)===0)o.memoizedState=null;else switch(g){case"forwards":for(c=o.child,g=null;c!==null;)i=c.alternate,i!==null&&ch(i)===null&&(g=c),c=c.sibling;c=g,c===null?(g=o.child,o.child=null):(g=c.sibling,c.sibling=null),im(o,!1,g,c,_);break;case"backwards":for(c=null,g=o.child,o.child=null;g!==null;){if(i=g.alternate,i!==null&&ch(i)===null){o.child=g;break}i=g.sibling,g.sibling=c,c=g,g=i}im(o,!0,c,null,_);break;case"together":im(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function yh(i,o){(o.mode&1)===0&&i!==null&&(i.alternate=null,o.alternate=null,o.flags|=2)}function wi(i,o,c){if(i!==null&&(o.dependencies=i.dependencies),io|=o.lanes,(c&o.childLanes)===0)return null;if(i!==null&&o.child!==i.child)throw Error(n(153));if(o.child!==null){for(i=o.child,c=is(i,i.pendingProps),o.child=c,c.return=o;i.sibling!==null;)i=i.sibling,c=c.sibling=is(i,i.pendingProps),c.return=o;c.sibling=null}return o.child}function uC(i,o,c){switch(o.tag){case 3:$1(o),Ea();break;case 5:a1(o);break;case 1:En(o.type)&&Zu(o);break;case 4:Vp(o,o.stateNode.containerInfo);break;case 10:var f=o.type._context,g=o.memoizedProps.value;tt(sh,f._currentValue),f._currentValue=g;break;case 13:if(f=o.memoizedState,f!==null)return f.dehydrated!==null?(tt(dt,dt.current&1),o.flags|=128,null):(c&o.child.childLanes)!==0?H1(i,o,c):(tt(dt,dt.current&1),i=wi(i,o,c),i!==null?i.sibling:null);tt(dt,dt.current&1);break;case 19:if(f=(c&o.childLanes)!==0,(i.flags&128)!==0){if(f)return G1(i,o,c);o.flags|=128}if(g=o.memoizedState,g!==null&&(g.rendering=null,g.tail=null,g.lastEffect=null),tt(dt,dt.current),f)break;return null;case 22:case 23:return o.lanes=0,U1(i,o,c)}return wi(i,o,c)}var K1,sm,Q1,Y1;K1=function(i,o){for(var c=o.child;c!==null;){if(c.tag===5||c.tag===6)i.appendChild(c.stateNode);else if(c.tag!==4&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===o)break;for(;c.sibling===null;){if(c.return===null||c.return===o)return;c=c.return}c.sibling.return=c.return,c=c.sibling}},sm=function(){},Q1=function(i,o,c,f){var g=i.memoizedProps;if(g!==f){i=o.stateNode,no(Wr.current);var _=null;switch(c){case"input":g=Os(i,g),f=Os(i,f),_=[];break;case"select":g=Y({},g,{value:void 0}),f=Y({},f,{value:void 0}),_=[];break;case"textarea":g=_l(i,g),f=_l(i,f),_=[];break;default:typeof g.onClick!="function"&&typeof f.onClick=="function"&&(i.onclick=Yu)}Il(c,f);var T;c=null;for(Z in g)if(!f.hasOwnProperty(Z)&&g.hasOwnProperty(Z)&&g[Z]!=null)if(Z==="style"){var O=g[Z];for(T in O)O.hasOwnProperty(T)&&(c||(c={}),c[T]="")}else Z!=="dangerouslySetInnerHTML"&&Z!=="children"&&Z!=="suppressContentEditableWarning"&&Z!=="suppressHydrationWarning"&&Z!=="autoFocus"&&(s.hasOwnProperty(Z)?_||(_=[]):(_=_||[]).push(Z,null));for(Z in f){var U=f[Z];if(O=g!=null?g[Z]:void 0,f.hasOwnProperty(Z)&&U!==O&&(U!=null||O!=null))if(Z==="style")if(O){for(T in O)!O.hasOwnProperty(T)||U&&U.hasOwnProperty(T)||(c||(c={}),c[T]="");for(T in U)U.hasOwnProperty(T)&&O[T]!==U[T]&&(c||(c={}),c[T]=U[T])}else c||(_||(_=[]),_.push(Z,c)),c=U;else Z==="dangerouslySetInnerHTML"?(U=U?U.__html:void 0,O=O?O.__html:void 0,U!=null&&O!==U&&(_=_||[]).push(Z,U)):Z==="children"?typeof U!="string"&&typeof U!="number"||(_=_||[]).push(Z,""+U):Z!=="suppressContentEditableWarning"&&Z!=="suppressHydrationWarning"&&(s.hasOwnProperty(Z)?(U!=null&&Z==="onScroll"&&rt("scroll",i),_||O===U||(_=[])):(_=_||[]).push(Z,U))}c&&(_=_||[]).push("style",c);var Z=_;(o.updateQueue=Z)&&(o.flags|=4)}},Y1=function(i,o,c,f){c!==f&&(o.flags|=4)};function sc(i,o){if(!at)switch(i.tailMode){case"hidden":o=i.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?i.tail=null:c.sibling=null;break;case"collapsed":c=i.tail;for(var f=null;c!==null;)c.alternate!==null&&(f=c),c=c.sibling;f===null?o||i.tail===null?i.tail=null:i.tail.sibling=null:f.sibling=null}}function rn(i){var o=i.alternate!==null&&i.alternate.child===i.child,c=0,f=0;if(o)for(var g=i.child;g!==null;)c|=g.lanes|g.childLanes,f|=g.subtreeFlags&14680064,f|=g.flags&14680064,g.return=i,g=g.sibling;else for(g=i.child;g!==null;)c|=g.lanes|g.childLanes,f|=g.subtreeFlags,f|=g.flags,g.return=i,g=g.sibling;return i.subtreeFlags|=f,i.childLanes=c,o}function hC(i,o,c){var f=o.pendingProps;switch(Pp(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rn(o),null;case 1:return En(o.type)&&Ju(),rn(o),null;case 3:return f=o.stateNode,ba(),it(xn),it(tn),Up(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(i===null||i.child===null)&&(rh(o)?o.flags|=4:i===null||i.memoizedState.isDehydrated&&(o.flags&256)===0||(o.flags|=1024,br!==null&&(gm(br),br=null))),sm(i,o),rn(o),null;case 5:Mp(o);var g=no(ec.current);if(c=o.type,i!==null&&o.stateNode!=null)Q1(i,o,c,f,g),i.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!f){if(o.stateNode===null)throw Error(n(166));return rn(o),null}if(i=no(Wr.current),rh(o)){f=o.stateNode,c=o.type;var _=o.memoizedProps;switch(f[$r]=o,f[Ql]=_,i=(o.mode&1)!==0,c){case"dialog":rt("cancel",f),rt("close",f);break;case"iframe":case"object":case"embed":rt("load",f);break;case"video":case"audio":for(g=0;g<ql.length;g++)rt(ql[g],f);break;case"source":rt("error",f);break;case"img":case"image":case"link":rt("error",f),rt("load",f);break;case"details":rt("toggle",f);break;case"input":Bo(f,_),rt("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!_.multiple},rt("invalid",f);break;case"textarea":$o(f,_),rt("invalid",f)}Il(c,_),g=null;for(var T in _)if(_.hasOwnProperty(T)){var O=_[T];T==="children"?typeof O=="string"?f.textContent!==O&&(_.suppressHydrationWarning!==!0&&Qu(f.textContent,O,i),g=["children",O]):typeof O=="number"&&f.textContent!==""+O&&(_.suppressHydrationWarning!==!0&&Qu(f.textContent,O,i),g=["children",""+O]):s.hasOwnProperty(T)&&O!=null&&T==="onScroll"&&rt("scroll",f)}switch(c){case"input":je(f),xu(f,_,!0);break;case"textarea":je(f),wl(f);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(f.onclick=Yu)}f=g,o.updateQueue=f,f!==null&&(o.flags|=4)}else{T=g.nodeType===9?g:g.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=jt(c)),i==="http://www.w3.org/1999/xhtml"?c==="script"?(i=T.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof f.is=="string"?i=T.createElement(c,{is:f.is}):(i=T.createElement(c),c==="select"&&(T=i,f.multiple?T.multiple=!0:f.size&&(T.size=f.size))):i=T.createElementNS(i,c),i[$r]=o,i[Ql]=f,K1(i,o,!1,!1),o.stateNode=i;e:{switch(T=bl(c,f),c){case"dialog":rt("cancel",i),rt("close",i),g=f;break;case"iframe":case"object":case"embed":rt("load",i),g=f;break;case"video":case"audio":for(g=0;g<ql.length;g++)rt(ql[g],i);g=f;break;case"source":rt("error",i),g=f;break;case"img":case"image":case"link":rt("error",i),rt("load",i),g=f;break;case"details":rt("toggle",i),g=f;break;case"input":Bo(i,f),g=Os(i,f),rt("invalid",i);break;case"option":g=f;break;case"select":i._wrapperState={wasMultiple:!!f.multiple},g=Y({},f,{value:void 0}),rt("invalid",i);break;case"textarea":$o(i,f),g=_l(i,f),rt("invalid",i);break;default:g=f}Il(c,g),O=g;for(_ in O)if(O.hasOwnProperty(_)){var U=O[_];_==="style"?Tl(i,U):_==="dangerouslySetInnerHTML"?(U=U?U.__html:void 0,U!=null&&xl(i,U)):_==="children"?typeof U=="string"?(c!=="textarea"||U!=="")&&Li(i,U):typeof U=="number"&&Li(i,""+U):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(s.hasOwnProperty(_)?U!=null&&_==="onScroll"&&rt("scroll",i):U!=null&&L(i,_,U,T))}switch(c){case"input":je(i),xu(i,f,!1);break;case"textarea":je(i),wl(i);break;case"option":f.value!=null&&i.setAttribute("value",""+Te(f.value));break;case"select":i.multiple=!!f.multiple,_=f.value,_!=null?oi(i,!!f.multiple,_,!1):f.defaultValue!=null&&oi(i,!!f.multiple,f.defaultValue,!0);break;default:typeof g.onClick=="function"&&(i.onclick=Yu)}switch(c){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return rn(o),null;case 6:if(i&&o.stateNode!=null)Y1(i,o,i.memoizedProps,f);else{if(typeof f!="string"&&o.stateNode===null)throw Error(n(166));if(c=no(ec.current),no(Wr.current),rh(o)){if(f=o.stateNode,c=o.memoizedProps,f[$r]=o,(_=f.nodeValue!==c)&&(i=Ln,i!==null))switch(i.tag){case 3:Qu(f.nodeValue,c,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Qu(f.nodeValue,c,(i.mode&1)!==0)}_&&(o.flags|=4)}else f=(c.nodeType===9?c:c.ownerDocument).createTextNode(f),f[$r]=o,o.stateNode=f}return rn(o),null;case 13:if(it(dt),f=o.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(at&&Vn!==null&&(o.mode&1)!==0&&(o.flags&128)===0)Z0(),Ea(),o.flags|=98560,_=!1;else if(_=rh(o),f!==null&&f.dehydrated!==null){if(i===null){if(!_)throw Error(n(318));if(_=o.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(n(317));_[$r]=o}else Ea(),(o.flags&128)===0&&(o.memoizedState=null),o.flags|=4;rn(o),_=!1}else br!==null&&(gm(br),br=null),_=!0;if(!_)return o.flags&65536?o:null}return(o.flags&128)!==0?(o.lanes=c,o):(f=f!==null,f!==(i!==null&&i.memoizedState!==null)&&f&&(o.child.flags|=8192,(o.mode&1)!==0&&(i===null||(dt.current&1)!==0?Vt===0&&(Vt=3):_m())),o.updateQueue!==null&&(o.flags|=4),rn(o),null);case 4:return ba(),sm(i,o),i===null&&Gl(o.stateNode.containerInfo),rn(o),null;case 10:return jp(o.type._context),rn(o),null;case 17:return En(o.type)&&Ju(),rn(o),null;case 19:if(it(dt),_=o.memoizedState,_===null)return rn(o),null;if(f=(o.flags&128)!==0,T=_.rendering,T===null)if(f)sc(_,!1);else{if(Vt!==0||i!==null&&(i.flags&128)!==0)for(i=o.child;i!==null;){if(T=ch(i),T!==null){for(o.flags|=128,sc(_,!1),f=T.updateQueue,f!==null&&(o.updateQueue=f,o.flags|=4),o.subtreeFlags=0,f=c,c=o.child;c!==null;)_=c,i=f,_.flags&=14680066,T=_.alternate,T===null?(_.childLanes=0,_.lanes=i,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=T.childLanes,_.lanes=T.lanes,_.child=T.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=T.memoizedProps,_.memoizedState=T.memoizedState,_.updateQueue=T.updateQueue,_.type=T.type,i=T.dependencies,_.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),c=c.sibling;return tt(dt,dt.current&1|2),o.child}i=i.sibling}_.tail!==null&&et()>ka&&(o.flags|=128,f=!0,sc(_,!1),o.lanes=4194304)}else{if(!f)if(i=ch(T),i!==null){if(o.flags|=128,f=!0,c=i.updateQueue,c!==null&&(o.updateQueue=c,o.flags|=4),sc(_,!0),_.tail===null&&_.tailMode==="hidden"&&!T.alternate&&!at)return rn(o),null}else 2*et()-_.renderingStartTime>ka&&c!==1073741824&&(o.flags|=128,f=!0,sc(_,!1),o.lanes=4194304);_.isBackwards?(T.sibling=o.child,o.child=T):(c=_.last,c!==null?c.sibling=T:o.child=T,_.last=T)}return _.tail!==null?(o=_.tail,_.rendering=o,_.tail=o.sibling,_.renderingStartTime=et(),o.sibling=null,c=dt.current,tt(dt,f?c&1|2:c&1),o):(rn(o),null);case 22:case 23:return vm(),f=o.memoizedState!==null,i!==null&&i.memoizedState!==null!==f&&(o.flags|=8192),f&&(o.mode&1)!==0?(Mn&1073741824)!==0&&(rn(o),o.subtreeFlags&6&&(o.flags|=8192)):rn(o),null;case 24:return null;case 25:return null}throw Error(n(156,o.tag))}function dC(i,o){switch(Pp(o),o.tag){case 1:return En(o.type)&&Ju(),i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 3:return ba(),it(xn),it(tn),Up(),i=o.flags,(i&65536)!==0&&(i&128)===0?(o.flags=i&-65537|128,o):null;case 5:return Mp(o),null;case 13:if(it(dt),i=o.memoizedState,i!==null&&i.dehydrated!==null){if(o.alternate===null)throw Error(n(340));Ea()}return i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 19:return it(dt),null;case 4:return ba(),null;case 10:return jp(o.type._context),null;case 22:case 23:return vm(),null;case 24:return null;default:return null}}var vh=!1,sn=!1,fC=typeof WeakSet=="function"?WeakSet:Set,pe=null;function Ca(i,o){var c=i.ref;if(c!==null)if(typeof c=="function")try{c(null)}catch(f){yt(i,o,f)}else c.current=null}function om(i,o,c){try{c()}catch(f){yt(i,o,f)}}var X1=!1;function pC(i,o){if(vp=Wi,i=A0(),up(i)){if("selectionStart"in i)var c={start:i.selectionStart,end:i.selectionEnd};else e:{c=(c=i.ownerDocument)&&c.defaultView||window;var f=c.getSelection&&c.getSelection();if(f&&f.rangeCount!==0){c=f.anchorNode;var g=f.anchorOffset,_=f.focusNode;f=f.focusOffset;try{c.nodeType,_.nodeType}catch{c=null;break e}var T=0,O=-1,U=-1,Z=0,ne=0,oe=i,te=null;t:for(;;){for(var he;oe!==c||g!==0&&oe.nodeType!==3||(O=T+g),oe!==_||f!==0&&oe.nodeType!==3||(U=T+f),oe.nodeType===3&&(T+=oe.nodeValue.length),(he=oe.firstChild)!==null;)te=oe,oe=he;for(;;){if(oe===i)break t;if(te===c&&++Z===g&&(O=T),te===_&&++ne===f&&(U=T),(he=oe.nextSibling)!==null)break;oe=te,te=oe.parentNode}oe=he}c=O===-1||U===-1?null:{start:O,end:U}}else c=null}c=c||{start:0,end:0}}else c=null;for(_p={focusedElem:i,selectionRange:c},Wi=!1,pe=o;pe!==null;)if(o=pe,i=o.child,(o.subtreeFlags&1028)!==0&&i!==null)i.return=o,pe=i;else for(;pe!==null;){o=pe;try{var me=o.alternate;if((o.flags&1024)!==0)switch(o.tag){case 0:case 11:case 15:break;case 1:if(me!==null){var ye=me.memoizedProps,Et=me.memoizedState,K=o.stateNode,W=K.getSnapshotBeforeUpdate(o.elementType===o.type?ye:Pr(o.type,ye),Et);K.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var X=o.stateNode.containerInfo;X.nodeType===1?X.textContent="":X.nodeType===9&&X.documentElement&&X.removeChild(X.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(le){yt(o,o.return,le)}if(i=o.sibling,i!==null){i.return=o.return,pe=i;break}pe=o.return}return me=X1,X1=!1,me}function oc(i,o,c){var f=o.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var g=f=f.next;do{if((g.tag&i)===i){var _=g.destroy;g.destroy=void 0,_!==void 0&&om(o,c,_)}g=g.next}while(g!==f)}}function _h(i,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var c=o=o.next;do{if((c.tag&i)===i){var f=c.create;c.destroy=f()}c=c.next}while(c!==o)}}function am(i){var o=i.ref;if(o!==null){var c=i.stateNode;switch(i.tag){case 5:i=c;break;default:i=c}typeof o=="function"?o(i):o.current=i}}function J1(i){var o=i.alternate;o!==null&&(i.alternate=null,J1(o)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(o=i.stateNode,o!==null&&(delete o[$r],delete o[Ql],delete o[Tp],delete o[YP],delete o[XP])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function Z1(i){return i.tag===5||i.tag===3||i.tag===4}function e_(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||Z1(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function lm(i,o,c){var f=i.tag;if(f===5||f===6)i=i.stateNode,o?c.nodeType===8?c.parentNode.insertBefore(i,o):c.insertBefore(i,o):(c.nodeType===8?(o=c.parentNode,o.insertBefore(i,c)):(o=c,o.appendChild(i)),c=c._reactRootContainer,c!=null||o.onclick!==null||(o.onclick=Yu));else if(f!==4&&(i=i.child,i!==null))for(lm(i,o,c),i=i.sibling;i!==null;)lm(i,o,c),i=i.sibling}function cm(i,o,c){var f=i.tag;if(f===5||f===6)i=i.stateNode,o?c.insertBefore(i,o):c.appendChild(i);else if(f!==4&&(i=i.child,i!==null))for(cm(i,o,c),i=i.sibling;i!==null;)cm(i,o,c),i=i.sibling}var Kt=null,Cr=!1;function Zi(i,o,c){for(c=c.child;c!==null;)t_(i,o,c),c=c.sibling}function t_(i,o,c){if(Dn&&typeof Dn.onCommitFiberUnmount=="function")try{Dn.onCommitFiberUnmount(Ws,c)}catch{}switch(c.tag){case 5:sn||Ca(c,o);case 6:var f=Kt,g=Cr;Kt=null,Zi(i,o,c),Kt=f,Cr=g,Kt!==null&&(Cr?(i=Kt,c=c.stateNode,i.nodeType===8?i.parentNode.removeChild(c):i.removeChild(c)):Kt.removeChild(c.stateNode));break;case 18:Kt!==null&&(Cr?(i=Kt,c=c.stateNode,i.nodeType===8?Ep(i.parentNode,c):i.nodeType===1&&Ep(i,c),Tr(i)):Ep(Kt,c.stateNode));break;case 4:f=Kt,g=Cr,Kt=c.stateNode.containerInfo,Cr=!0,Zi(i,o,c),Kt=f,Cr=g;break;case 0:case 11:case 14:case 15:if(!sn&&(f=c.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){g=f=f.next;do{var _=g,T=_.destroy;_=_.tag,T!==void 0&&((_&2)!==0||(_&4)!==0)&&om(c,o,T),g=g.next}while(g!==f)}Zi(i,o,c);break;case 1:if(!sn&&(Ca(c,o),f=c.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=c.memoizedProps,f.state=c.memoizedState,f.componentWillUnmount()}catch(O){yt(c,o,O)}Zi(i,o,c);break;case 21:Zi(i,o,c);break;case 22:c.mode&1?(sn=(f=sn)||c.memoizedState!==null,Zi(i,o,c),sn=f):Zi(i,o,c);break;default:Zi(i,o,c)}}function n_(i){var o=i.updateQueue;if(o!==null){i.updateQueue=null;var c=i.stateNode;c===null&&(c=i.stateNode=new fC),o.forEach(function(f){var g=TC.bind(null,i,f);c.has(f)||(c.add(f),f.then(g,g))})}}function Ar(i,o){var c=o.deletions;if(c!==null)for(var f=0;f<c.length;f++){var g=c[f];try{var _=i,T=o,O=T;e:for(;O!==null;){switch(O.tag){case 5:Kt=O.stateNode,Cr=!1;break e;case 3:Kt=O.stateNode.containerInfo,Cr=!0;break e;case 4:Kt=O.stateNode.containerInfo,Cr=!0;break e}O=O.return}if(Kt===null)throw Error(n(160));t_(_,T,g),Kt=null,Cr=!1;var U=g.alternate;U!==null&&(U.return=null),g.return=null}catch(Z){yt(g,o,Z)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)r_(o,i),o=o.sibling}function r_(i,o){var c=i.alternate,f=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Ar(o,i),qr(i),f&4){try{oc(3,i,i.return),_h(3,i)}catch(ye){yt(i,i.return,ye)}try{oc(5,i,i.return)}catch(ye){yt(i,i.return,ye)}}break;case 1:Ar(o,i),qr(i),f&512&&c!==null&&Ca(c,c.return);break;case 5:if(Ar(o,i),qr(i),f&512&&c!==null&&Ca(c,c.return),i.flags&32){var g=i.stateNode;try{Li(g,"")}catch(ye){yt(i,i.return,ye)}}if(f&4&&(g=i.stateNode,g!=null)){var _=i.memoizedProps,T=c!==null?c.memoizedProps:_,O=i.type,U=i.updateQueue;if(i.updateQueue=null,U!==null)try{O==="input"&&_.type==="radio"&&_.name!=null&&yl(g,_),bl(O,T);var Z=bl(O,_);for(T=0;T<U.length;T+=2){var ne=U[T],oe=U[T+1];ne==="style"?Tl(g,oe):ne==="dangerouslySetInnerHTML"?xl(g,oe):ne==="children"?Li(g,oe):L(g,ne,oe,Z)}switch(O){case"input":vl(g,_);break;case"textarea":Wo(g,_);break;case"select":var te=g._wrapperState.wasMultiple;g._wrapperState.wasMultiple=!!_.multiple;var he=_.value;he!=null?oi(g,!!_.multiple,he,!1):te!==!!_.multiple&&(_.defaultValue!=null?oi(g,!!_.multiple,_.defaultValue,!0):oi(g,!!_.multiple,_.multiple?[]:"",!1))}g[Ql]=_}catch(ye){yt(i,i.return,ye)}}break;case 6:if(Ar(o,i),qr(i),f&4){if(i.stateNode===null)throw Error(n(162));g=i.stateNode,_=i.memoizedProps;try{g.nodeValue=_}catch(ye){yt(i,i.return,ye)}}break;case 3:if(Ar(o,i),qr(i),f&4&&c!==null&&c.memoizedState.isDehydrated)try{Tr(o.containerInfo)}catch(ye){yt(i,i.return,ye)}break;case 4:Ar(o,i),qr(i);break;case 13:Ar(o,i),qr(i),g=i.child,g.flags&8192&&(_=g.memoizedState!==null,g.stateNode.isHidden=_,!_||g.alternate!==null&&g.alternate.memoizedState!==null||(dm=et())),f&4&&n_(i);break;case 22:if(ne=c!==null&&c.memoizedState!==null,i.mode&1?(sn=(Z=sn)||ne,Ar(o,i),sn=Z):Ar(o,i),qr(i),f&8192){if(Z=i.memoizedState!==null,(i.stateNode.isHidden=Z)&&!ne&&(i.mode&1)!==0)for(pe=i,ne=i.child;ne!==null;){for(oe=pe=ne;pe!==null;){switch(te=pe,he=te.child,te.tag){case 0:case 11:case 14:case 15:oc(4,te,te.return);break;case 1:Ca(te,te.return);var me=te.stateNode;if(typeof me.componentWillUnmount=="function"){f=te,c=te.return;try{o=f,me.props=o.memoizedProps,me.state=o.memoizedState,me.componentWillUnmount()}catch(ye){yt(f,c,ye)}}break;case 5:Ca(te,te.return);break;case 22:if(te.memoizedState!==null){o_(oe);continue}}he!==null?(he.return=te,pe=he):o_(oe)}ne=ne.sibling}e:for(ne=null,oe=i;;){if(oe.tag===5){if(ne===null){ne=oe;try{g=oe.stateNode,Z?(_=g.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(O=oe.stateNode,U=oe.memoizedProps.style,T=U!=null&&U.hasOwnProperty("display")?U.display:null,O.style.display=El("display",T))}catch(ye){yt(i,i.return,ye)}}}else if(oe.tag===6){if(ne===null)try{oe.stateNode.nodeValue=Z?"":oe.memoizedProps}catch(ye){yt(i,i.return,ye)}}else if((oe.tag!==22&&oe.tag!==23||oe.memoizedState===null||oe===i)&&oe.child!==null){oe.child.return=oe,oe=oe.child;continue}if(oe===i)break e;for(;oe.sibling===null;){if(oe.return===null||oe.return===i)break e;ne===oe&&(ne=null),oe=oe.return}ne===oe&&(ne=null),oe.sibling.return=oe.return,oe=oe.sibling}}break;case 19:Ar(o,i),qr(i),f&4&&n_(i);break;case 21:break;default:Ar(o,i),qr(i)}}function qr(i){var o=i.flags;if(o&2){try{e:{for(var c=i.return;c!==null;){if(Z1(c)){var f=c;break e}c=c.return}throw Error(n(160))}switch(f.tag){case 5:var g=f.stateNode;f.flags&32&&(Li(g,""),f.flags&=-33);var _=e_(i);cm(i,_,g);break;case 3:case 4:var T=f.stateNode.containerInfo,O=e_(i);lm(i,O,T);break;default:throw Error(n(161))}}catch(U){yt(i,i.return,U)}i.flags&=-3}o&4096&&(i.flags&=-4097)}function mC(i,o,c){pe=i,i_(i)}function i_(i,o,c){for(var f=(i.mode&1)!==0;pe!==null;){var g=pe,_=g.child;if(g.tag===22&&f){var T=g.memoizedState!==null||vh;if(!T){var O=g.alternate,U=O!==null&&O.memoizedState!==null||sn;O=vh;var Z=sn;if(vh=T,(sn=U)&&!Z)for(pe=g;pe!==null;)T=pe,U=T.child,T.tag===22&&T.memoizedState!==null?a_(g):U!==null?(U.return=T,pe=U):a_(g);for(;_!==null;)pe=_,i_(_),_=_.sibling;pe=g,vh=O,sn=Z}s_(i)}else(g.subtreeFlags&8772)!==0&&_!==null?(_.return=g,pe=_):s_(i)}}function s_(i){for(;pe!==null;){var o=pe;if((o.flags&8772)!==0){var c=o.alternate;try{if((o.flags&8772)!==0)switch(o.tag){case 0:case 11:case 15:sn||_h(5,o);break;case 1:var f=o.stateNode;if(o.flags&4&&!sn)if(c===null)f.componentDidMount();else{var g=o.elementType===o.type?c.memoizedProps:Pr(o.type,c.memoizedProps);f.componentDidUpdate(g,c.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var _=o.updateQueue;_!==null&&o1(o,_,f);break;case 3:var T=o.updateQueue;if(T!==null){if(c=null,o.child!==null)switch(o.child.tag){case 5:c=o.child.stateNode;break;case 1:c=o.child.stateNode}o1(o,T,c)}break;case 5:var O=o.stateNode;if(c===null&&o.flags&4){c=O;var U=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":U.autoFocus&&c.focus();break;case"img":U.src&&(c.src=U.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var Z=o.alternate;if(Z!==null){var ne=Z.memoizedState;if(ne!==null){var oe=ne.dehydrated;oe!==null&&Tr(oe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}sn||o.flags&512&&am(o)}catch(te){yt(o,o.return,te)}}if(o===i){pe=null;break}if(c=o.sibling,c!==null){c.return=o.return,pe=c;break}pe=o.return}}function o_(i){for(;pe!==null;){var o=pe;if(o===i){pe=null;break}var c=o.sibling;if(c!==null){c.return=o.return,pe=c;break}pe=o.return}}function a_(i){for(;pe!==null;){var o=pe;try{switch(o.tag){case 0:case 11:case 15:var c=o.return;try{_h(4,o)}catch(U){yt(o,c,U)}break;case 1:var f=o.stateNode;if(typeof f.componentDidMount=="function"){var g=o.return;try{f.componentDidMount()}catch(U){yt(o,g,U)}}var _=o.return;try{am(o)}catch(U){yt(o,_,U)}break;case 5:var T=o.return;try{am(o)}catch(U){yt(o,T,U)}}}catch(U){yt(o,o.return,U)}if(o===i){pe=null;break}var O=o.sibling;if(O!==null){O.return=o.return,pe=O;break}pe=o.return}}var gC=Math.ceil,wh=D.ReactCurrentDispatcher,um=D.ReactCurrentOwner,Jn=D.ReactCurrentBatchConfig,qe=0,zt=null,Pt=null,Qt=0,Mn=0,Aa=Ki(0),Vt=0,ac=null,io=0,xh=0,hm=0,lc=null,Sn=null,dm=0,ka=1/0,xi=null,Eh=!1,fm=null,es=null,Th=!1,ts=null,Sh=0,cc=0,pm=null,Ih=-1,bh=0;function mn(){return(qe&6)!==0?et():Ih!==-1?Ih:Ih=et()}function ns(i){return(i.mode&1)===0?1:(qe&2)!==0&&Qt!==0?Qt&-Qt:ZP.transition!==null?(bh===0&&(bh=qs()),bh):(i=Be,i!==0||(i=window.event,i=i===void 0?16:Vl(i.type)),i)}function kr(i,o,c,f){if(50<cc)throw cc=0,pm=null,Error(n(185));Ui(i,c,f),((qe&2)===0||i!==zt)&&(i===zt&&((qe&2)===0&&(xh|=c),Vt===4&&rs(i,Qt)),In(i,f),c===1&&qe===0&&(o.mode&1)===0&&(ka=et()+500,eh&&Yi()))}function In(i,o){var c=i.callbackNode;ci(i,o);var f=Hs(i,i===zt?Qt:0);if(f===0)c!==null&&Dl(c),i.callbackNode=null,i.callbackPriority=0;else if(o=f&-f,i.callbackPriority!==o){if(c!=null&&Dl(c),o===1)i.tag===0?JP(c_.bind(null,i)):K0(c_.bind(null,i)),KP(function(){(qe&6)===0&&Yi()}),c=null;else{switch(zi(f)){case 1:c=$s;break;case 4:c=Vi;break;case 16:c=Hn;break;case 536870912:c=bu;break;default:c=Hn}c=y_(c,l_.bind(null,i))}i.callbackPriority=o,i.callbackNode=c}}function l_(i,o){if(Ih=-1,bh=0,(qe&6)!==0)throw Error(n(327));var c=i.callbackNode;if(Ra()&&i.callbackNode!==c)return null;var f=Hs(i,i===zt?Qt:0);if(f===0)return null;if((f&30)!==0||(f&i.expiredLanes)!==0||o)o=Ph(i,f);else{o=f;var g=qe;qe|=2;var _=h_();(zt!==i||Qt!==o)&&(xi=null,ka=et()+500,oo(i,o));do try{_C();break}catch(O){u_(i,O)}while(!0);Dp(),wh.current=_,qe=g,Pt!==null?o=0:(zt=null,Qt=0,o=Vt)}if(o!==0){if(o===2&&(g=jn(i),g!==0&&(f=g,o=mm(i,g))),o===1)throw c=ac,oo(i,0),rs(i,f),In(i,et()),c;if(o===6)rs(i,f);else{if(g=i.current.alternate,(f&30)===0&&!yC(g)&&(o=Ph(i,f),o===2&&(_=jn(i),_!==0&&(f=_,o=mm(i,_))),o===1))throw c=ac,oo(i,0),rs(i,f),In(i,et()),c;switch(i.finishedWork=g,i.finishedLanes=f,o){case 0:case 1:throw Error(n(345));case 2:ao(i,Sn,xi);break;case 3:if(rs(i,f),(f&130023424)===f&&(o=dm+500-et(),10<o)){if(Hs(i,0)!==0)break;if(g=i.suspendedLanes,(g&f)!==f){mn(),i.pingedLanes|=i.suspendedLanes&g;break}i.timeoutHandle=xp(ao.bind(null,i,Sn,xi),o);break}ao(i,Sn,xi);break;case 4:if(rs(i,f),(f&4194240)===f)break;for(o=i.eventTimes,g=-1;0<f;){var T=31-dn(f);_=1<<T,T=o[T],T>g&&(g=T),f&=~_}if(f=g,f=et()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*gC(f/1960))-f,10<f){i.timeoutHandle=xp(ao.bind(null,i,Sn,xi),f);break}ao(i,Sn,xi);break;case 5:ao(i,Sn,xi);break;default:throw Error(n(329))}}}return In(i,et()),i.callbackNode===c?l_.bind(null,i):null}function mm(i,o){var c=lc;return i.current.memoizedState.isDehydrated&&(oo(i,o).flags|=256),i=Ph(i,o),i!==2&&(o=Sn,Sn=c,o!==null&&gm(o)),i}function gm(i){Sn===null?Sn=i:Sn.push.apply(Sn,i)}function yC(i){for(var o=i;;){if(o.flags&16384){var c=o.updateQueue;if(c!==null&&(c=c.stores,c!==null))for(var f=0;f<c.length;f++){var g=c[f],_=g.getSnapshot;g=g.value;try{if(!Ir(_(),g))return!1}catch{return!1}}}if(c=o.child,o.subtreeFlags&16384&&c!==null)c.return=o,o=c;else{if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function rs(i,o){for(o&=~hm,o&=~xh,i.suspendedLanes|=o,i.pingedLanes&=~o,i=i.expirationTimes;0<o;){var c=31-dn(o),f=1<<c;i[c]=-1,o&=~f}}function c_(i){if((qe&6)!==0)throw Error(n(327));Ra();var o=Hs(i,0);if((o&1)===0)return In(i,et()),null;var c=Ph(i,o);if(i.tag!==0&&c===2){var f=jn(i);f!==0&&(o=f,c=mm(i,f))}if(c===1)throw c=ac,oo(i,0),rs(i,o),In(i,et()),c;if(c===6)throw Error(n(345));return i.finishedWork=i.current.alternate,i.finishedLanes=o,ao(i,Sn,xi),In(i,et()),null}function ym(i,o){var c=qe;qe|=1;try{return i(o)}finally{qe=c,qe===0&&(ka=et()+500,eh&&Yi())}}function so(i){ts!==null&&ts.tag===0&&(qe&6)===0&&Ra();var o=qe;qe|=1;var c=Jn.transition,f=Be;try{if(Jn.transition=null,Be=1,i)return i()}finally{Be=f,Jn.transition=c,qe=o,(qe&6)===0&&Yi()}}function vm(){Mn=Aa.current,it(Aa)}function oo(i,o){i.finishedWork=null,i.finishedLanes=0;var c=i.timeoutHandle;if(c!==-1&&(i.timeoutHandle=-1,GP(c)),Pt!==null)for(c=Pt.return;c!==null;){var f=c;switch(Pp(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&Ju();break;case 3:ba(),it(xn),it(tn),Up();break;case 5:Mp(f);break;case 4:ba();break;case 13:it(dt);break;case 19:it(dt);break;case 10:jp(f.type._context);break;case 22:case 23:vm()}c=c.return}if(zt=i,Pt=i=is(i.current,null),Qt=Mn=o,Vt=0,ac=null,hm=xh=io=0,Sn=lc=null,to!==null){for(o=0;o<to.length;o++)if(c=to[o],f=c.interleaved,f!==null){c.interleaved=null;var g=f.next,_=c.pending;if(_!==null){var T=_.next;_.next=g,f.next=T}c.pending=f}to=null}return i}function u_(i,o){do{var c=Pt;try{if(Dp(),uh.current=ph,hh){for(var f=ft.memoizedState;f!==null;){var g=f.queue;g!==null&&(g.pending=null),f=f.next}hh=!1}if(ro=0,Bt=Lt=ft=null,tc=!1,nc=0,um.current=null,c===null||c.return===null){Vt=1,ac=o,Pt=null;break}e:{var _=i,T=c.return,O=c,U=o;if(o=Qt,O.flags|=32768,U!==null&&typeof U=="object"&&typeof U.then=="function"){var Z=U,ne=O,oe=ne.tag;if((ne.mode&1)===0&&(oe===0||oe===11||oe===15)){var te=ne.alternate;te?(ne.updateQueue=te.updateQueue,ne.memoizedState=te.memoizedState,ne.lanes=te.lanes):(ne.updateQueue=null,ne.memoizedState=null)}var he=O1(T);if(he!==null){he.flags&=-257,L1(he,T,O,_,o),he.mode&1&&N1(_,Z,o),o=he,U=Z;var me=o.updateQueue;if(me===null){var ye=new Set;ye.add(U),o.updateQueue=ye}else me.add(U);break e}else{if((o&1)===0){N1(_,Z,o),_m();break e}U=Error(n(426))}}else if(at&&O.mode&1){var Et=O1(T);if(Et!==null){(Et.flags&65536)===0&&(Et.flags|=256),L1(Et,T,O,_,o),kp(Pa(U,O));break e}}_=U=Pa(U,O),Vt!==4&&(Vt=2),lc===null?lc=[_]:lc.push(_),_=T;do{switch(_.tag){case 3:_.flags|=65536,o&=-o,_.lanes|=o;var K=D1(_,U,o);s1(_,K);break e;case 1:O=U;var W=_.type,X=_.stateNode;if((_.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||X!==null&&typeof X.componentDidCatch=="function"&&(es===null||!es.has(X)))){_.flags|=65536,o&=-o,_.lanes|=o;var le=j1(_,O,o);s1(_,le);break e}}_=_.return}while(_!==null)}f_(c)}catch(_e){o=_e,Pt===c&&c!==null&&(Pt=c=c.return);continue}break}while(!0)}function h_(){var i=wh.current;return wh.current=ph,i===null?ph:i}function _m(){(Vt===0||Vt===3||Vt===2)&&(Vt=4),zt===null||(io&268435455)===0&&(xh&268435455)===0||rs(zt,Qt)}function Ph(i,o){var c=qe;qe|=2;var f=h_();(zt!==i||Qt!==o)&&(xi=null,oo(i,o));do try{vC();break}catch(g){u_(i,g)}while(!0);if(Dp(),qe=c,wh.current=f,Pt!==null)throw Error(n(261));return zt=null,Qt=0,Vt}function vC(){for(;Pt!==null;)d_(Pt)}function _C(){for(;Pt!==null&&!Su();)d_(Pt)}function d_(i){var o=g_(i.alternate,i,Mn);i.memoizedProps=i.pendingProps,o===null?f_(i):Pt=o,um.current=null}function f_(i){var o=i;do{var c=o.alternate;if(i=o.return,(o.flags&32768)===0){if(c=hC(c,o,Mn),c!==null){Pt=c;return}}else{if(c=dC(c,o),c!==null){c.flags&=32767,Pt=c;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{Vt=6,Pt=null;return}}if(o=o.sibling,o!==null){Pt=o;return}Pt=o=i}while(o!==null);Vt===0&&(Vt=5)}function ao(i,o,c){var f=Be,g=Jn.transition;try{Jn.transition=null,Be=1,wC(i,o,c,f)}finally{Jn.transition=g,Be=f}return null}function wC(i,o,c,f){do Ra();while(ts!==null);if((qe&6)!==0)throw Error(n(327));c=i.finishedWork;var g=i.finishedLanes;if(c===null)return null;if(i.finishedWork=null,i.finishedLanes=0,c===i.current)throw Error(n(177));i.callbackNode=null,i.callbackPriority=0;var _=c.lanes|c.childLanes;if(Ze(i,_),i===zt&&(Pt=zt=null,Qt=0),(c.subtreeFlags&2064)===0&&(c.flags&2064)===0||Th||(Th=!0,y_(Hn,function(){return Ra(),null})),_=(c.flags&15990)!==0,(c.subtreeFlags&15990)!==0||_){_=Jn.transition,Jn.transition=null;var T=Be;Be=1;var O=qe;qe|=4,um.current=null,pC(i,c),r_(c,i),UP(_p),Wi=!!vp,_p=vp=null,i.current=c,mC(c),np(),qe=O,Be=T,Jn.transition=_}else i.current=c;if(Th&&(Th=!1,ts=i,Sh=g),_=i.pendingLanes,_===0&&(es=null),Pu(c.stateNode),In(i,et()),o!==null)for(f=i.onRecoverableError,c=0;c<o.length;c++)g=o[c],f(g.value,{componentStack:g.stack,digest:g.digest});if(Eh)throw Eh=!1,i=fm,fm=null,i;return(Sh&1)!==0&&i.tag!==0&&Ra(),_=i.pendingLanes,(_&1)!==0?i===pm?cc++:(cc=0,pm=i):cc=0,Yi(),null}function Ra(){if(ts!==null){var i=zi(Sh),o=Jn.transition,c=Be;try{if(Jn.transition=null,Be=16>i?16:i,ts===null)var f=!1;else{if(i=ts,ts=null,Sh=0,(qe&6)!==0)throw Error(n(331));var g=qe;for(qe|=4,pe=i.current;pe!==null;){var _=pe,T=_.child;if((pe.flags&16)!==0){var O=_.deletions;if(O!==null){for(var U=0;U<O.length;U++){var Z=O[U];for(pe=Z;pe!==null;){var ne=pe;switch(ne.tag){case 0:case 11:case 15:oc(8,ne,_)}var oe=ne.child;if(oe!==null)oe.return=ne,pe=oe;else for(;pe!==null;){ne=pe;var te=ne.sibling,he=ne.return;if(J1(ne),ne===Z){pe=null;break}if(te!==null){te.return=he,pe=te;break}pe=he}}}var me=_.alternate;if(me!==null){var ye=me.child;if(ye!==null){me.child=null;do{var Et=ye.sibling;ye.sibling=null,ye=Et}while(ye!==null)}}pe=_}}if((_.subtreeFlags&2064)!==0&&T!==null)T.return=_,pe=T;else e:for(;pe!==null;){if(_=pe,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:oc(9,_,_.return)}var K=_.sibling;if(K!==null){K.return=_.return,pe=K;break e}pe=_.return}}var W=i.current;for(pe=W;pe!==null;){T=pe;var X=T.child;if((T.subtreeFlags&2064)!==0&&X!==null)X.return=T,pe=X;else e:for(T=W;pe!==null;){if(O=pe,(O.flags&2048)!==0)try{switch(O.tag){case 0:case 11:case 15:_h(9,O)}}catch(_e){yt(O,O.return,_e)}if(O===T){pe=null;break e}var le=O.sibling;if(le!==null){le.return=O.return,pe=le;break e}pe=O.return}}if(qe=g,Yi(),Dn&&typeof Dn.onPostCommitFiberRoot=="function")try{Dn.onPostCommitFiberRoot(Ws,i)}catch{}f=!0}return f}finally{Be=c,Jn.transition=o}}return!1}function p_(i,o,c){o=Pa(c,o),o=D1(i,o,1),i=Ji(i,o,1),o=mn(),i!==null&&(Ui(i,1,o),In(i,o))}function yt(i,o,c){if(i.tag===3)p_(i,i,c);else for(;o!==null;){if(o.tag===3){p_(o,i,c);break}else if(o.tag===1){var f=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(es===null||!es.has(f))){i=Pa(c,i),i=j1(o,i,1),o=Ji(o,i,1),i=mn(),o!==null&&(Ui(o,1,i),In(o,i));break}}o=o.return}}function xC(i,o,c){var f=i.pingCache;f!==null&&f.delete(o),o=mn(),i.pingedLanes|=i.suspendedLanes&c,zt===i&&(Qt&c)===c&&(Vt===4||Vt===3&&(Qt&130023424)===Qt&&500>et()-dm?oo(i,0):hm|=c),In(i,o)}function m_(i,o){o===0&&((i.mode&1)===0?o=1:(o=ea,ea<<=1,(ea&130023424)===0&&(ea=4194304)));var c=mn();i=vi(i,o),i!==null&&(Ui(i,o,c),In(i,c))}function EC(i){var o=i.memoizedState,c=0;o!==null&&(c=o.retryLane),m_(i,c)}function TC(i,o){var c=0;switch(i.tag){case 13:var f=i.stateNode,g=i.memoizedState;g!==null&&(c=g.retryLane);break;case 19:f=i.stateNode;break;default:throw Error(n(314))}f!==null&&f.delete(o),m_(i,c)}var g_;g_=function(i,o,c){if(i!==null)if(i.memoizedProps!==o.pendingProps||xn.current)Tn=!0;else{if((i.lanes&c)===0&&(o.flags&128)===0)return Tn=!1,uC(i,o,c);Tn=(i.flags&131072)!==0}else Tn=!1,at&&(o.flags&1048576)!==0&&Q0(o,nh,o.index);switch(o.lanes=0,o.tag){case 2:var f=o.type;yh(i,o),i=o.pendingProps;var g=_a(o,tn.current);Ia(o,c),g=$p(null,o,f,i,g,c);var _=Wp();return o.flags|=1,typeof g=="object"&&g!==null&&typeof g.render=="function"&&g.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,En(f)?(_=!0,Zu(o)):_=!1,o.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,Lp(o),g.updater=mh,o.stateNode=g,g._reactInternals=o,Yp(o,f,i,c),o=em(null,o,f,!0,_,c)):(o.tag=0,at&&_&&bp(o),pn(null,o,g,c),o=o.child),o;case 16:f=o.elementType;e:{switch(yh(i,o),i=o.pendingProps,g=f._init,f=g(f._payload),o.type=f,g=o.tag=IC(f),i=Pr(f,i),g){case 0:o=Zp(null,o,f,i,c);break e;case 1:o=z1(null,o,f,i,c);break e;case 11:o=V1(null,o,f,i,c);break e;case 14:o=M1(null,o,f,Pr(f.type,i),c);break e}throw Error(n(306,f,""))}return o;case 0:return f=o.type,g=o.pendingProps,g=o.elementType===f?g:Pr(f,g),Zp(i,o,f,g,c);case 1:return f=o.type,g=o.pendingProps,g=o.elementType===f?g:Pr(f,g),z1(i,o,f,g,c);case 3:e:{if($1(o),i===null)throw Error(n(387));f=o.pendingProps,_=o.memoizedState,g=_.element,i1(i,o),lh(o,f,null,c);var T=o.memoizedState;if(f=T.element,_.isDehydrated)if(_={element:f,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},o.updateQueue.baseState=_,o.memoizedState=_,o.flags&256){g=Pa(Error(n(423)),o),o=W1(i,o,f,c,g);break e}else if(f!==g){g=Pa(Error(n(424)),o),o=W1(i,o,f,c,g);break e}else for(Vn=Gi(o.stateNode.containerInfo.firstChild),Ln=o,at=!0,br=null,c=n1(o,null,f,c),o.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else{if(Ea(),f===g){o=wi(i,o,c);break e}pn(i,o,f,c)}o=o.child}return o;case 5:return a1(o),i===null&&Ap(o),f=o.type,g=o.pendingProps,_=i!==null?i.memoizedProps:null,T=g.children,wp(f,g)?T=null:_!==null&&wp(f,_)&&(o.flags|=32),B1(i,o),pn(i,o,T,c),o.child;case 6:return i===null&&Ap(o),null;case 13:return H1(i,o,c);case 4:return Vp(o,o.stateNode.containerInfo),f=o.pendingProps,i===null?o.child=Ta(o,null,f,c):pn(i,o,f,c),o.child;case 11:return f=o.type,g=o.pendingProps,g=o.elementType===f?g:Pr(f,g),V1(i,o,f,g,c);case 7:return pn(i,o,o.pendingProps,c),o.child;case 8:return pn(i,o,o.pendingProps.children,c),o.child;case 12:return pn(i,o,o.pendingProps.children,c),o.child;case 10:e:{if(f=o.type._context,g=o.pendingProps,_=o.memoizedProps,T=g.value,tt(sh,f._currentValue),f._currentValue=T,_!==null)if(Ir(_.value,T)){if(_.children===g.children&&!xn.current){o=wi(i,o,c);break e}}else for(_=o.child,_!==null&&(_.return=o);_!==null;){var O=_.dependencies;if(O!==null){T=_.child;for(var U=O.firstContext;U!==null;){if(U.context===f){if(_.tag===1){U=_i(-1,c&-c),U.tag=2;var Z=_.updateQueue;if(Z!==null){Z=Z.shared;var ne=Z.pending;ne===null?U.next=U:(U.next=ne.next,ne.next=U),Z.pending=U}}_.lanes|=c,U=_.alternate,U!==null&&(U.lanes|=c),Np(_.return,c,o),O.lanes|=c;break}U=U.next}}else if(_.tag===10)T=_.type===o.type?null:_.child;else if(_.tag===18){if(T=_.return,T===null)throw Error(n(341));T.lanes|=c,O=T.alternate,O!==null&&(O.lanes|=c),Np(T,c,o),T=_.sibling}else T=_.child;if(T!==null)T.return=_;else for(T=_;T!==null;){if(T===o){T=null;break}if(_=T.sibling,_!==null){_.return=T.return,T=_;break}T=T.return}_=T}pn(i,o,g.children,c),o=o.child}return o;case 9:return g=o.type,f=o.pendingProps.children,Ia(o,c),g=Yn(g),f=f(g),o.flags|=1,pn(i,o,f,c),o.child;case 14:return f=o.type,g=Pr(f,o.pendingProps),g=Pr(f.type,g),M1(i,o,f,g,c);case 15:return F1(i,o,o.type,o.pendingProps,c);case 17:return f=o.type,g=o.pendingProps,g=o.elementType===f?g:Pr(f,g),yh(i,o),o.tag=1,En(f)?(i=!0,Zu(o)):i=!1,Ia(o,c),k1(o,f,g),Yp(o,f,g,c),em(null,o,f,!0,i,c);case 19:return G1(i,o,c);case 22:return U1(i,o,c)}throw Error(n(156,o.tag))};function y_(i,o){return Jo(i,o)}function SC(i,o,c,f){this.tag=i,this.key=c,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(i,o,c,f){return new SC(i,o,c,f)}function wm(i){return i=i.prototype,!(!i||!i.isReactComponent)}function IC(i){if(typeof i=="function")return wm(i)?1:0;if(i!=null){if(i=i.$$typeof,i===H)return 11;if(i===Qe)return 14}return 2}function is(i,o){var c=i.alternate;return c===null?(c=Zn(i.tag,o,i.key,i.mode),c.elementType=i.elementType,c.type=i.type,c.stateNode=i.stateNode,c.alternate=i,i.alternate=c):(c.pendingProps=o,c.type=i.type,c.flags=0,c.subtreeFlags=0,c.deletions=null),c.flags=i.flags&14680064,c.childLanes=i.childLanes,c.lanes=i.lanes,c.child=i.child,c.memoizedProps=i.memoizedProps,c.memoizedState=i.memoizedState,c.updateQueue=i.updateQueue,o=i.dependencies,c.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},c.sibling=i.sibling,c.index=i.index,c.ref=i.ref,c}function Ch(i,o,c,f,g,_){var T=2;if(f=i,typeof i=="function")wm(i)&&(T=1);else if(typeof i=="string")T=5;else e:switch(i){case k:return lo(c.children,g,_,o);case b:T=8,g|=8;break;case R:return i=Zn(12,c,o,g|2),i.elementType=R,i.lanes=_,i;case N:return i=Zn(13,c,o,g),i.elementType=N,i.lanes=_,i;case Le:return i=Zn(19,c,o,g),i.elementType=Le,i.lanes=_,i;case ke:return Ah(c,g,_,o);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case V:T=10;break e;case z:T=9;break e;case H:T=11;break e;case Qe:T=14;break e;case xe:T=16,f=null;break e}throw Error(n(130,i==null?i:typeof i,""))}return o=Zn(T,c,o,g),o.elementType=i,o.type=f,o.lanes=_,o}function lo(i,o,c,f){return i=Zn(7,i,f,o),i.lanes=c,i}function Ah(i,o,c,f){return i=Zn(22,i,f,o),i.elementType=ke,i.lanes=c,i.stateNode={isHidden:!1},i}function xm(i,o,c){return i=Zn(6,i,null,o),i.lanes=c,i}function Em(i,o,c){return o=Zn(4,i.children!==null?i.children:[],i.key,o),o.lanes=c,o.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},o}function bC(i,o,c,f,g){this.tag=o,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fi(0),this.expirationTimes=Fi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fi(0),this.identifierPrefix=f,this.onRecoverableError=g,this.mutableSourceEagerHydrationData=null}function Tm(i,o,c,f,g,_,T,O,U){return i=new bC(i,o,c,O,U),o===1?(o=1,_===!0&&(o|=8)):o=0,_=Zn(3,null,null,o),i.current=_,_.stateNode=i,_.memoizedState={element:f,isDehydrated:c,cache:null,transitions:null,pendingSuspenseBoundaries:null},Lp(_),i}function PC(i,o,c){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:J,key:f==null?null:""+f,children:i,containerInfo:o,implementation:c}}function v_(i){if(!i)return Qi;i=i._reactInternals;e:{if(vr(i)!==i||i.tag!==1)throw Error(n(170));var o=i;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(En(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(n(171))}if(i.tag===1){var c=i.type;if(En(c))return q0(i,c,o)}return o}function __(i,o,c,f,g,_,T,O,U){return i=Tm(c,f,!0,i,g,_,T,O,U),i.context=v_(null),c=i.current,f=mn(),g=ns(c),_=_i(f,g),_.callback=o??null,Ji(c,_,g),i.current.lanes=g,Ui(i,g,f),In(i,f),i}function kh(i,o,c,f){var g=o.current,_=mn(),T=ns(g);return c=v_(c),o.context===null?o.context=c:o.pendingContext=c,o=_i(_,T),o.payload={element:i},f=f===void 0?null:f,f!==null&&(o.callback=f),i=Ji(g,o,T),i!==null&&(kr(i,g,T,_),ah(i,g,T)),T}function Rh(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function w_(i,o){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var c=i.retryLane;i.retryLane=c!==0&&c<o?c:o}}function Sm(i,o){w_(i,o),(i=i.alternate)&&w_(i,o)}function CC(){return null}var x_=typeof reportError=="function"?reportError:function(i){console.error(i)};function Im(i){this._internalRoot=i}Dh.prototype.render=Im.prototype.render=function(i){var o=this._internalRoot;if(o===null)throw Error(n(409));kh(i,o,null,null)},Dh.prototype.unmount=Im.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var o=i.containerInfo;so(function(){kh(null,i,null,null)}),o[pi]=null}};function Dh(i){this._internalRoot=i}Dh.prototype.unstable_scheduleHydration=function(i){if(i){var o=Du();i={blockedOn:null,target:i,priority:o};for(var c=0;c<Fr.length&&o!==0&&o<Fr[c].priority;c++);Fr.splice(c,0,i),c===0&&Ou(i)}};function bm(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function jh(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function E_(){}function AC(i,o,c,f,g){if(g){if(typeof f=="function"){var _=f;f=function(){var Z=Rh(T);_.call(Z)}}var T=__(o,f,i,0,null,!1,!1,"",E_);return i._reactRootContainer=T,i[pi]=T.current,Gl(i.nodeType===8?i.parentNode:i),so(),T}for(;g=i.lastChild;)i.removeChild(g);if(typeof f=="function"){var O=f;f=function(){var Z=Rh(U);O.call(Z)}}var U=Tm(i,0,!1,null,null,!1,!1,"",E_);return i._reactRootContainer=U,i[pi]=U.current,Gl(i.nodeType===8?i.parentNode:i),so(function(){kh(o,U,c,f)}),U}function Nh(i,o,c,f,g){var _=c._reactRootContainer;if(_){var T=_;if(typeof g=="function"){var O=g;g=function(){var U=Rh(T);O.call(U)}}kh(o,T,i,g)}else T=AC(c,o,i,g,f);return Rh(T)}ku=function(i){switch(i.tag){case 3:var o=i.stateNode;if(o.current.memoizedState.isDehydrated){var c=Mi(o.pendingLanes);c!==0&&(Bi(o,c|1),In(o,et()),(qe&6)===0&&(ka=et()+500,Yi()))}break;case 13:so(function(){var f=vi(i,1);if(f!==null){var g=mn();kr(f,i,1,g)}}),Sm(i,1)}},ta=function(i){if(i.tag===13){var o=vi(i,134217728);if(o!==null){var c=mn();kr(o,i,134217728,c)}Sm(i,134217728)}},Ru=function(i){if(i.tag===13){var o=ns(i),c=vi(i,o);if(c!==null){var f=mn();kr(c,i,o,f)}Sm(i,o)}},Du=function(){return Be},ju=function(i,o){var c=Be;try{return Be=i,o()}finally{Be=c}},qo=function(i,o,c){switch(o){case"input":if(vl(i,c),o=c.name,c.type==="radio"&&o!=null){for(c=i;c.parentNode;)c=c.parentNode;for(c=c.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<c.length;o++){var f=c[o];if(f!==i&&f.form===i.form){var g=Xu(f);if(!g)throw Error(n(90));wt(f),vl(f,g)}}}break;case"textarea":Wo(i,c);break;case"select":o=c.value,o!=null&&oi(i,!!c.multiple,o,!1)}},Fs=ym,Cl=so;var kC={usingClientEntryPoint:!1,Events:[Yl,ya,Xu,Vr,Pl,ym]},uc={findFiberByHostInstance:Xs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},RC={bundleType:uc.bundleType,version:uc.version,rendererPackageName:uc.rendererPackageName,rendererConfig:uc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:D.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=Rl(i),i===null?null:i.stateNode},findFiberByHostInstance:uc.findFiberByHostInstance||CC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oh.isDisabled&&Oh.supportsFiber)try{Ws=Oh.inject(RC),Dn=Oh}catch{}}return bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kC,bn.createPortal=function(i,o){var c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bm(o))throw Error(n(200));return PC(i,o,null,c)},bn.createRoot=function(i,o){if(!bm(i))throw Error(n(299));var c=!1,f="",g=x_;return o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onRecoverableError!==void 0&&(g=o.onRecoverableError)),o=Tm(i,1,!1,null,null,c,!1,f,g),i[pi]=o.current,Gl(i.nodeType===8?i.parentNode:i),new Im(o)},bn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var o=i._reactInternals;if(o===void 0)throw typeof i.render=="function"?Error(n(188)):(i=Object.keys(i).join(","),Error(n(268,i)));return i=Rl(o),i=i===null?null:i.stateNode,i},bn.flushSync=function(i){return so(i)},bn.hydrate=function(i,o,c){if(!jh(o))throw Error(n(200));return Nh(null,i,o,!0,c)},bn.hydrateRoot=function(i,o,c){if(!bm(i))throw Error(n(405));var f=c!=null&&c.hydratedSources||null,g=!1,_="",T=x_;if(c!=null&&(c.unstable_strictMode===!0&&(g=!0),c.identifierPrefix!==void 0&&(_=c.identifierPrefix),c.onRecoverableError!==void 0&&(T=c.onRecoverableError)),o=__(o,null,i,1,c??null,g,!1,_,T),i[pi]=o.current,Gl(i),f)for(i=0;i<f.length;i++)c=f[i],g=c._getVersion,g=g(c._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[c,g]:o.mutableSourceEagerHydrationData.push(c,g);return new Dh(o)},bn.render=function(i,o,c){if(!jh(o))throw Error(n(200));return Nh(null,i,o,!1,c)},bn.unmountComponentAtNode=function(i){if(!jh(i))throw Error(n(40));return i._reactRootContainer?(so(function(){Nh(null,null,i,!1,function(){i._reactRootContainer=null,i[pi]=null})}),!0):!1},bn.unstable_batchedUpdates=ym,bn.unstable_renderSubtreeIntoContainer=function(i,o,c,f){if(!jh(c))throw Error(n(200));if(i==null||i._reactInternals===void 0)throw Error(n(38));return Nh(i,o,c,!1,f)},bn.version="18.3.1-next-f1338f8080-20240426",bn}var k_;function aT(){if(k_)return Am.exports;k_=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),Am.exports=UC(),Am.exports}var R_;function BC(){if(R_)return Lh;R_=1;var t=aT();return Lh.createRoot=t.createRoot,Lh.hydrateRoot=t.hydrateRoot,Lh}var zC=BC();const $C=jy(zC);aT();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Uc(){return Uc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Uc.apply(this,arguments)}var ps;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ps||(ps={}));const D_="popstate";function WC(t){t===void 0&&(t={});function e(r,s){let{pathname:a,search:l,hash:u}=r.location;return jg("",{pathname:a,search:l,hash:u},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){return typeof s=="string"?s:Rd(s)}return qC(e,n,null,t)}function mt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function lT(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function HC(){return Math.random().toString(36).substr(2,8)}function j_(t,e){return{usr:t.state,key:t.key,idx:e}}function jg(t,e,n,r){return n===void 0&&(n=null),Uc({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ul(e):e,{state:n,key:e&&e.key||r||HC()})}function Rd(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ul(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function qC(t,e,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:a=!1}=r,l=s.history,u=ps.Pop,d=null,p=y();p==null&&(p=0,l.replaceState(Uc({},l.state,{idx:p}),""));function y(){return(l.state||{idx:null}).idx}function w(){u=ps.Pop;let P=y(),$=P==null?null:P-p;p=P,d&&d({action:u,location:C.location,delta:$})}function x(P,$){u=ps.Push;let B=jg(C.location,P,$);p=y()+1;let L=j_(B,p),D=C.createHref(B);try{l.pushState(L,"",D)}catch(q){if(q instanceof DOMException&&q.name==="DataCloneError")throw q;s.location.assign(D)}a&&d&&d({action:u,location:C.location,delta:1})}function S(P,$){u=ps.Replace;let B=jg(C.location,P,$);p=y();let L=j_(B,p),D=C.createHref(B);l.replaceState(L,"",D),a&&d&&d({action:u,location:C.location,delta:0})}function A(P){let $=s.location.origin!=="null"?s.location.origin:s.location.href,B=typeof P=="string"?P:Rd(P);return B=B.replace(/ $/,"%20"),mt($,"No window.location.(origin|href) available to create URL for href: "+B),new URL(B,$)}let C={get action(){return u},get location(){return t(s,l)},listen(P){if(d)throw new Error("A history only accepts one active listener");return s.addEventListener(D_,w),d=P,()=>{s.removeEventListener(D_,w),d=null}},createHref(P){return e(s,P)},createURL:A,encodeLocation(P){let $=A(P);return{pathname:$.pathname,search:$.search,hash:$.hash}},push:x,replace:S,go(P){return l.go(P)}};return C}var N_;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(N_||(N_={}));function GC(t,e,n){return n===void 0&&(n="/"),KC(t,e,n)}function KC(t,e,n,r){let s=typeof e=="string"?ul(e):e,a=qa(s.pathname||"/",n);if(a==null)return null;let l=cT(t);QC(l);let u=null;for(let d=0;u==null&&d<l.length;++d){let p=oA(a);u=iA(l[d],p)}return u}function cT(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(a,l,u)=>{let d={relativePath:u===void 0?a.path||"":u,caseSensitive:a.caseSensitive===!0,childrenIndex:l,route:a};d.relativePath.startsWith("/")&&(mt(d.relativePath.startsWith(r),'Absolute route path "'+d.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),d.relativePath=d.relativePath.slice(r.length));let p=gs([r,d.relativePath]),y=n.concat(d);a.children&&a.children.length>0&&(mt(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+p+'".')),cT(a.children,e,y,p)),!(a.path==null&&!a.index)&&e.push({path:p,score:nA(p,a.index),routesMeta:y})};return t.forEach((a,l)=>{var u;if(a.path===""||!((u=a.path)!=null&&u.includes("?")))s(a,l);else for(let d of uT(a.path))s(a,l,d)}),e}function uT(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,s=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return s?[a,""]:[a];let l=uT(r.join("/")),u=[];return u.push(...l.map(d=>d===""?a:[a,d].join("/"))),s&&u.push(...l),u.map(d=>t.startsWith("/")&&d===""?"/":d)}function QC(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:rA(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const YC=/^:[\w-]+$/,XC=3,JC=2,ZC=1,eA=10,tA=-2,O_=t=>t==="*";function nA(t,e){let n=t.split("/"),r=n.length;return n.some(O_)&&(r+=tA),e&&(r+=JC),n.filter(s=>!O_(s)).reduce((s,a)=>s+(YC.test(a)?XC:a===""?ZC:eA),r)}function rA(t,e){return t.length===e.length&&t.slice(0,-1).every((r,s)=>r===e[s])?t[t.length-1]-e[e.length-1]:0}function iA(t,e,n){let{routesMeta:r}=t,s={},a="/",l=[];for(let u=0;u<r.length;++u){let d=r[u],p=u===r.length-1,y=a==="/"?e:e.slice(a.length)||"/",w=Ng({path:d.relativePath,caseSensitive:d.caseSensitive,end:p},y),x=d.route;if(!w)return null;Object.assign(s,w.params),l.push({params:s,pathname:gs([a,w.pathname]),pathnameBase:uA(gs([a,w.pathnameBase])),route:x}),w.pathnameBase!=="/"&&(a=gs([a,w.pathnameBase]))}return l}function Ng(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=sA(t.path,t.caseSensitive,t.end),s=e.match(n);if(!s)return null;let a=s[0],l=a.replace(/(.)\/+$/,"$1"),u=s.slice(1);return{params:r.reduce((p,y,w)=>{let{paramName:x,isOptional:S}=y;if(x==="*"){let C=u[w]||"";l=a.slice(0,a.length-C.length).replace(/(.)\/+$/,"$1")}const A=u[w];return S&&!A?p[x]=void 0:p[x]=(A||"").replace(/%2F/g,"/"),p},{}),pathname:a,pathnameBase:l,pattern:t}}function sA(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),lT(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,u,d)=>(r.push({paramName:u,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function oA(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return lT(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function qa(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function aA(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:s=""}=typeof t=="string"?ul(t):t;return{pathname:n?n.startsWith("/")?n:lA(n,e):e,search:hA(r),hash:dA(s)}}function lA(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function Dm(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function cA(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Oy(t,e){let n=cA(t);return e?n.map((r,s)=>s===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Ly(t,e,n,r){r===void 0&&(r=!1);let s;typeof t=="string"?s=ul(t):(s=Uc({},t),mt(!s.pathname||!s.pathname.includes("?"),Dm("?","pathname","search",s)),mt(!s.pathname||!s.pathname.includes("#"),Dm("#","pathname","hash",s)),mt(!s.search||!s.search.includes("#"),Dm("#","search","hash",s)));let a=t===""||s.pathname==="",l=a?"/":s.pathname,u;if(l==null)u=n;else{let w=e.length-1;if(!r&&l.startsWith("..")){let x=l.split("/");for(;x[0]==="..";)x.shift(),w-=1;s.pathname=x.join("/")}u=w>=0?e[w]:"/"}let d=aA(s,u),p=l&&l!=="/"&&l.endsWith("/"),y=(a||l===".")&&n.endsWith("/");return!d.pathname.endsWith("/")&&(p||y)&&(d.pathname+="/"),d}const gs=t=>t.join("/").replace(/\/\/+/g,"/"),uA=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),hA=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,dA=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function fA(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const hT=["post","put","patch","delete"];new Set(hT);const pA=["get",...hT];new Set(pA);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bc(){return Bc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Bc.apply(this,arguments)}const hf=M.createContext(null),dT=M.createContext(null),Oi=M.createContext(null),df=M.createContext(null),ri=M.createContext({outlet:null,matches:[],isDataRoute:!1}),fT=M.createContext(null);function mA(t,e){let{relative:n}=e===void 0?{}:e;hl()||mt(!1);let{basename:r,navigator:s}=M.useContext(Oi),{hash:a,pathname:l,search:u}=ff(t,{relative:n}),d=l;return r!=="/"&&(d=l==="/"?r:gs([r,l])),s.createHref({pathname:d,search:u,hash:a})}function hl(){return M.useContext(df)!=null}function ks(){return hl()||mt(!1),M.useContext(df).location}function pT(t){M.useContext(Oi).static||M.useLayoutEffect(t)}function Vy(){let{isDataRoute:t}=M.useContext(ri);return t?RA():gA()}function gA(){hl()||mt(!1);let t=M.useContext(hf),{basename:e,future:n,navigator:r}=M.useContext(Oi),{matches:s}=M.useContext(ri),{pathname:a}=ks(),l=JSON.stringify(Oy(s,n.v7_relativeSplatPath)),u=M.useRef(!1);return pT(()=>{u.current=!0}),M.useCallback(function(p,y){if(y===void 0&&(y={}),!u.current)return;if(typeof p=="number"){r.go(p);return}let w=Ly(p,JSON.parse(l),a,y.relative==="path");t==null&&e!=="/"&&(w.pathname=w.pathname==="/"?e:gs([e,w.pathname])),(y.replace?r.replace:r.push)(w,y.state,y)},[e,r,l,a,t])}const yA=M.createContext(null);function vA(t){let e=M.useContext(ri).outlet;return e&&M.createElement(yA.Provider,{value:t},e)}function _A(){let{matches:t}=M.useContext(ri),e=t[t.length-1];return e?e.params:{}}function ff(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=M.useContext(Oi),{matches:s}=M.useContext(ri),{pathname:a}=ks(),l=JSON.stringify(Oy(s,r.v7_relativeSplatPath));return M.useMemo(()=>Ly(t,JSON.parse(l),a,n==="path"),[t,l,a,n])}function wA(t,e){return xA(t,e)}function xA(t,e,n,r){hl()||mt(!1);let{navigator:s}=M.useContext(Oi),{matches:a}=M.useContext(ri),l=a[a.length-1],u=l?l.params:{};l&&l.pathname;let d=l?l.pathnameBase:"/";l&&l.route;let p=ks(),y;if(e){var w;let P=typeof e=="string"?ul(e):e;d==="/"||(w=P.pathname)!=null&&w.startsWith(d)||mt(!1),y=P}else y=p;let x=y.pathname||"/",S=x;if(d!=="/"){let P=d.replace(/^\//,"").split("/");S="/"+x.replace(/^\//,"").split("/").slice(P.length).join("/")}let A=GC(t,{pathname:S}),C=bA(A&&A.map(P=>Object.assign({},P,{params:Object.assign({},u,P.params),pathname:gs([d,s.encodeLocation?s.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?d:gs([d,s.encodeLocation?s.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),a,n,r);return e&&C?M.createElement(df.Provider,{value:{location:Bc({pathname:"/",search:"",hash:"",state:null,key:"default"},y),navigationType:ps.Pop}},C):C}function EA(){let t=kA(),e=fA(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},e),n?M.createElement("pre",{style:s},n):null,null)}const TA=M.createElement(EA,null);class SA extends M.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?M.createElement(ri.Provider,{value:this.props.routeContext},M.createElement(fT.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function IA(t){let{routeContext:e,match:n,children:r}=t,s=M.useContext(hf);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),M.createElement(ri.Provider,{value:e},r)}function bA(t,e,n,r){var s;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var a;if(!n)return null;if(n.errors)t=n.matches;else if((a=r)!=null&&a.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let l=t,u=(s=n)==null?void 0:s.errors;if(u!=null){let y=l.findIndex(w=>w.route.id&&(u==null?void 0:u[w.route.id])!==void 0);y>=0||mt(!1),l=l.slice(0,Math.min(l.length,y+1))}let d=!1,p=-1;if(n&&r&&r.v7_partialHydration)for(let y=0;y<l.length;y++){let w=l[y];if((w.route.HydrateFallback||w.route.hydrateFallbackElement)&&(p=y),w.route.id){let{loaderData:x,errors:S}=n,A=w.route.loader&&x[w.route.id]===void 0&&(!S||S[w.route.id]===void 0);if(w.route.lazy||A){d=!0,p>=0?l=l.slice(0,p+1):l=[l[0]];break}}}return l.reduceRight((y,w,x)=>{let S,A=!1,C=null,P=null;n&&(S=u&&w.route.id?u[w.route.id]:void 0,C=w.route.errorElement||TA,d&&(p<0&&x===0?(DA("route-fallback"),A=!0,P=null):p===x&&(A=!0,P=w.route.hydrateFallbackElement||null)));let $=e.concat(l.slice(0,x+1)),B=()=>{let L;return S?L=C:A?L=P:w.route.Component?L=M.createElement(w.route.Component,null):w.route.element?L=w.route.element:L=y,M.createElement(IA,{match:w,routeContext:{outlet:y,matches:$,isDataRoute:n!=null},children:L})};return n&&(w.route.ErrorBoundary||w.route.errorElement||x===0)?M.createElement(SA,{location:n.location,revalidation:n.revalidation,component:C,error:S,children:B(),routeContext:{outlet:null,matches:$,isDataRoute:!0}}):B()},null)}var mT=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(mT||{}),gT=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(gT||{});function PA(t){let e=M.useContext(hf);return e||mt(!1),e}function CA(t){let e=M.useContext(dT);return e||mt(!1),e}function AA(t){let e=M.useContext(ri);return e||mt(!1),e}function yT(t){let e=AA(),n=e.matches[e.matches.length-1];return n.route.id||mt(!1),n.route.id}function kA(){var t;let e=M.useContext(fT),n=CA(),r=yT();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function RA(){let{router:t}=PA(mT.UseNavigateStable),e=yT(gT.UseNavigateStable),n=M.useRef(!1);return pT(()=>{n.current=!0}),M.useCallback(function(s,a){a===void 0&&(a={}),n.current&&(typeof s=="number"?t.navigate(s):t.navigate(s,Bc({fromRouteId:e},a)))},[t,e])}const L_={};function DA(t,e,n){L_[t]||(L_[t]=!0)}function jA(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function NA(t){let{to:e,replace:n,state:r,relative:s}=t;hl()||mt(!1);let{future:a,static:l}=M.useContext(Oi),{matches:u}=M.useContext(ri),{pathname:d}=ks(),p=Vy(),y=Ly(e,Oy(u,a.v7_relativeSplatPath),d,s==="path"),w=JSON.stringify(y);return M.useEffect(()=>p(JSON.parse(w),{replace:n,state:r,relative:s}),[p,w,s,n,r]),null}function vT(t){return vA(t.context)}function Yt(t){mt(!1)}function OA(t){let{basename:e="/",children:n=null,location:r,navigationType:s=ps.Pop,navigator:a,static:l=!1,future:u}=t;hl()&&mt(!1);let d=e.replace(/^\/*/,"/"),p=M.useMemo(()=>({basename:d,navigator:a,static:l,future:Bc({v7_relativeSplatPath:!1},u)}),[d,u,a,l]);typeof r=="string"&&(r=ul(r));let{pathname:y="/",search:w="",hash:x="",state:S=null,key:A="default"}=r,C=M.useMemo(()=>{let P=qa(y,d);return P==null?null:{location:{pathname:P,search:w,hash:x,state:S,key:A},navigationType:s}},[d,y,w,x,S,A,s]);return C==null?null:M.createElement(Oi.Provider,{value:p},M.createElement(df.Provider,{children:n,value:C}))}function LA(t){let{children:e,location:n}=t;return wA(Og(e),n)}new Promise(()=>{});function Og(t,e){e===void 0&&(e=[]);let n=[];return M.Children.forEach(t,(r,s)=>{if(!M.isValidElement(r))return;let a=[...e,s];if(r.type===M.Fragment){n.push.apply(n,Og(r.props.children,a));return}r.type!==Yt&&mt(!1),!r.props.index||!r.props.children||mt(!1);let l={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=Og(r.props.children,a)),n.push(l)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Dd(){return Dd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Dd.apply(this,arguments)}function _T(t,e){if(t==null)return{};var n={},r=Object.keys(t),s,a;for(a=0;a<r.length;a++)s=r[a],!(e.indexOf(s)>=0)&&(n[s]=t[s]);return n}function VA(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function MA(t,e){return t.button===0&&(!e||e==="_self")&&!VA(t)}const FA=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],UA=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],BA="6";try{window.__reactRouterVersion=BA}catch{}const zA=M.createContext({isTransitioning:!1}),$A="startTransition",V_=VC[$A];function WA(t){let{basename:e,children:n,future:r,window:s}=t,a=M.useRef();a.current==null&&(a.current=WC({window:s,v5Compat:!0}));let l=a.current,[u,d]=M.useState({action:l.action,location:l.location}),{v7_startTransition:p}=r||{},y=M.useCallback(w=>{p&&V_?V_(()=>d(w)):d(w)},[d,p]);return M.useLayoutEffect(()=>l.listen(y),[l,y]),M.useEffect(()=>jA(r),[r]),M.createElement(OA,{basename:e,children:n,location:u.location,navigationType:u.action,navigator:l,future:r})}const HA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",qA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,fr=M.forwardRef(function(e,n){let{onClick:r,relative:s,reloadDocument:a,replace:l,state:u,target:d,to:p,preventScrollReset:y,viewTransition:w}=e,x=_T(e,FA),{basename:S}=M.useContext(Oi),A,C=!1;if(typeof p=="string"&&qA.test(p)&&(A=p,HA))try{let L=new URL(window.location.href),D=p.startsWith("//")?new URL(L.protocol+p):new URL(p),q=qa(D.pathname,S);D.origin===L.origin&&q!=null?p=q+D.search+D.hash:C=!0}catch{}let P=mA(p,{relative:s}),$=QA(p,{replace:l,state:u,target:d,preventScrollReset:y,relative:s,viewTransition:w});function B(L){r&&r(L),L.defaultPrevented||$(L)}return M.createElement("a",Dd({},x,{href:A||P,onClick:C||a?r:B,ref:n,target:d}))}),GA=M.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:s=!1,className:a="",end:l=!1,style:u,to:d,viewTransition:p,children:y}=e,w=_T(e,UA),x=ff(d,{relative:w.relative}),S=ks(),A=M.useContext(dT),{navigator:C,basename:P}=M.useContext(Oi),$=A!=null&&YA(x)&&p===!0,B=C.encodeLocation?C.encodeLocation(x).pathname:x.pathname,L=S.pathname,D=A&&A.navigation&&A.navigation.location?A.navigation.location.pathname:null;s||(L=L.toLowerCase(),D=D?D.toLowerCase():null,B=B.toLowerCase()),D&&P&&(D=qa(D,P)||D);const q=B!=="/"&&B.endsWith("/")?B.length-1:B.length;let J=L===B||!l&&L.startsWith(B)&&L.charAt(q)==="/",k=D!=null&&(D===B||!l&&D.startsWith(B)&&D.charAt(B.length)==="/"),b={isActive:J,isPending:k,isTransitioning:$},R=J?r:void 0,V;typeof a=="function"?V=a(b):V=[a,J?"active":null,k?"pending":null,$?"transitioning":null].filter(Boolean).join(" ");let z=typeof u=="function"?u(b):u;return M.createElement(fr,Dd({},w,{"aria-current":R,className:V,ref:n,style:z,to:d,viewTransition:p}),typeof y=="function"?y(b):y)});var Lg;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Lg||(Lg={}));var M_;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(M_||(M_={}));function KA(t){let e=M.useContext(hf);return e||mt(!1),e}function QA(t,e){let{target:n,replace:r,state:s,preventScrollReset:a,relative:l,viewTransition:u}=e===void 0?{}:e,d=Vy(),p=ks(),y=ff(t,{relative:l});return M.useCallback(w=>{if(MA(w,n)){w.preventDefault();let x=r!==void 0?r:Rd(p)===Rd(y);d(t,{replace:x,state:s,preventScrollReset:a,relative:l,viewTransition:u})}},[p,d,y,r,s,n,t,a,l,u])}function YA(t,e){e===void 0&&(e={});let n=M.useContext(zA);n==null&&mt(!1);let{basename:r}=KA(Lg.useViewTransitionState),s=ff(t,{relative:e.relative});if(!n.isTransitioning)return!1;let a=qa(n.currentLocation.pathname,r)||n.currentLocation.pathname,l=qa(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Ng(s.pathname,l)!=null||Ng(s.pathname,a)!=null}var F_={};/**
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
 */const wT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},XA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const a=t[n++];e[r++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){const a=t[n++],l=t[n++],u=t[n++],d=((s&7)<<18|(a&63)<<12|(l&63)<<6|u&63)-65536;e[r++]=String.fromCharCode(55296+(d>>10)),e[r++]=String.fromCharCode(56320+(d&1023))}else{const a=t[n++],l=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(a&63)<<6|l&63)}}return e.join("")},xT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const a=t[s],l=s+1<t.length,u=l?t[s+1]:0,d=s+2<t.length,p=d?t[s+2]:0,y=a>>2,w=(a&3)<<4|u>>4;let x=(u&15)<<2|p>>6,S=p&63;d||(S=64,l||(x=64)),r.push(n[y],n[w],n[x],n[S])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(wT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):XA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const a=n[t.charAt(s++)],u=s<t.length?n[t.charAt(s)]:0;++s;const p=s<t.length?n[t.charAt(s)]:64;++s;const w=s<t.length?n[t.charAt(s)]:64;if(++s,a==null||u==null||p==null||w==null)throw new JA;const x=a<<2|u>>4;if(r.push(x),p!==64){const S=u<<4&240|p>>2;if(r.push(S),w!==64){const A=p<<6&192|w;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class JA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ZA=function(t){const e=wT(t);return xT.encodeByteArray(e,!0)},jd=function(t){return ZA(t).replace(/\./g,"")},ET=function(t){try{return xT.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ek(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const tk=()=>ek().__FIREBASE_DEFAULTS__,nk=()=>{if(typeof process>"u"||typeof F_>"u")return;const t=F_.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},rk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ET(t[1]);return e&&JSON.parse(e)},pf=()=>{try{return tk()||nk()||rk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},TT=t=>{var e,n;return(n=(e=pf())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ST=t=>{const e=TT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},IT=()=>{var t;return(t=pf())===null||t===void 0?void 0:t.config},bT=t=>{var e;return(e=pf())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class ik{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function PT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,a=t.sub||t.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},t);return[jd(JSON.stringify(n)),jd(JSON.stringify(l)),""].join(".")}/**
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
 */function hn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function sk(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(hn())}function ok(){var t;const e=(t=pf())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ak(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function CT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function lk(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ck(){const t=hn();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function uk(){return!ok()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function AT(){try{return typeof indexedDB=="object"}catch{return!1}}function kT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var a;e(((a=s.error)===null||a===void 0?void 0:a.message)||"")}}catch(n){e(n)}})}function hk(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const dk="FirebaseError";class pr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=dk,Object.setPrototypeOf(this,pr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,jo.prototype.create)}}class jo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,a=this.errors[e],l=a?fk(a,r):"Error",u=`${this.serviceName}: ${l} (${s}).`;return new pr(s,u,r)}}function fk(t,e){return t.replace(pk,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const pk=/\{\$([^}]+)}/g;function mk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function zc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const a=t[s],l=e[s];if(U_(a)&&U_(l)){if(!zc(a,l))return!1}else if(a!==l)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function U_(t){return t!==null&&typeof t=="object"}/**
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
 */function ru(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function wc(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,a]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(a)}}),e}function xc(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function gk(t,e){const n=new yk(t,e);return n.subscribe.bind(n)}class yk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");vk(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=jm),s.error===void 0&&(s.error=jm),s.complete===void 0&&(s.complete=jm);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function vk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function jm(){}/**
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
 */const _k=1e3,wk=2,xk=4*60*60*1e3,Ek=.5;function B_(t,e=_k,n=wk){const r=e*Math.pow(n,t),s=Math.round(Ek*r*(Math.random()-.5)*2);return Math.min(xk,r+s)}/**
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
 */function ut(t){return t&&t._delegate?t._delegate:t}class ur{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ho="[DEFAULT]";/**
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
 */class Tk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ik;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ik(e))try{this.getOrInitializeService({instanceIdentifier:ho})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const a=this.getOrInitializeService({instanceIdentifier:s});r.resolve(a)}catch{}}}}clearInstance(e=ho){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ho){return this.instances.has(e)}getOptions(e=ho){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[a,l]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(a);r===u&&l.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),a=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;a.add(e),this.onInitCallbacks.set(s,a);const l=this.instances.get(s);return l&&e(l,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Sk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ho){return this.component?this.component.multipleInstances?e:ho:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Sk(t){return t===ho?void 0:t}function Ik(t){return t.instantiationMode==="EAGER"}/**
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
 */class bk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Tk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ze;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ze||(ze={}));const Pk={debug:ze.DEBUG,verbose:ze.VERBOSE,info:ze.INFO,warn:ze.WARN,error:ze.ERROR,silent:ze.SILENT},Ck=ze.INFO,Ak={[ze.DEBUG]:"log",[ze.VERBOSE]:"log",[ze.INFO]:"info",[ze.WARN]:"warn",[ze.ERROR]:"error"},kk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Ak[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class mf{constructor(e){this.name=e,this._logLevel=Ck,this._logHandler=kk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ze))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Pk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ze.DEBUG,...e),this._logHandler(this,ze.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ze.VERBOSE,...e),this._logHandler(this,ze.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ze.INFO,...e),this._logHandler(this,ze.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ze.WARN,...e),this._logHandler(this,ze.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ze.ERROR,...e),this._logHandler(this,ze.ERROR,...e)}}const Rk=(t,e)=>e.some(n=>t instanceof n);let z_,$_;function Dk(){return z_||(z_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jk(){return $_||($_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const RT=new WeakMap,Vg=new WeakMap,DT=new WeakMap,Nm=new WeakMap,My=new WeakMap;function Nk(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",a),t.removeEventListener("error",l)},a=()=>{n(ys(t.result)),s()},l=()=>{r(t.error),s()};t.addEventListener("success",a),t.addEventListener("error",l)});return e.then(n=>{n instanceof IDBCursor&&RT.set(n,t)}).catch(()=>{}),My.set(e,t),e}function Ok(t){if(Vg.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",a),t.removeEventListener("error",l),t.removeEventListener("abort",l)},a=()=>{n(),s()},l=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",a),t.addEventListener("error",l),t.addEventListener("abort",l)});Vg.set(t,e)}let Mg={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Vg.get(t);if(e==="objectStoreNames")return t.objectStoreNames||DT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ys(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Lk(t){Mg=t(Mg)}function Vk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Om(this),e,...n);return DT.set(r,e.sort?e.sort():[e]),ys(r)}:jk().includes(t)?function(...e){return t.apply(Om(this),e),ys(RT.get(this))}:function(...e){return ys(t.apply(Om(this),e))}}function Mk(t){return typeof t=="function"?Vk(t):(t instanceof IDBTransaction&&Ok(t),Rk(t,Dk())?new Proxy(t,Mg):t)}function ys(t){if(t instanceof IDBRequest)return Nk(t);if(Nm.has(t))return Nm.get(t);const e=Mk(t);return e!==t&&(Nm.set(t,e),My.set(e,t)),e}const Om=t=>My.get(t);function jT(t,e,{blocked:n,upgrade:r,blocking:s,terminated:a}={}){const l=indexedDB.open(t,e),u=ys(l);return r&&l.addEventListener("upgradeneeded",d=>{r(ys(l.result),d.oldVersion,d.newVersion,ys(l.transaction),d)}),n&&l.addEventListener("blocked",d=>n(d.oldVersion,d.newVersion,d)),u.then(d=>{a&&d.addEventListener("close",()=>a()),s&&d.addEventListener("versionchange",p=>s(p.oldVersion,p.newVersion,p))}).catch(()=>{}),u}const Fk=["get","getKey","getAll","getAllKeys","count"],Uk=["put","add","delete","clear"],Lm=new Map;function W_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Lm.get(e))return Lm.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Uk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Fk.includes(n)))return;const a=async function(l,...u){const d=this.transaction(l,s?"readwrite":"readonly");let p=d.store;return r&&(p=p.index(u.shift())),(await Promise.all([p[n](...u),s&&d.done]))[0]};return Lm.set(e,a),a}Lk(t=>({...t,get:(e,n,r)=>W_(e,n)||t.get(e,n,r),has:(e,n)=>!!W_(e,n)||t.has(e,n)}));/**
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
 */class Bk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(zk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function zk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Fg="@firebase/app",H_="0.10.13";/**
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
 */const ki=new mf("@firebase/app"),$k="@firebase/app-compat",Wk="@firebase/analytics-compat",Hk="@firebase/analytics",qk="@firebase/app-check-compat",Gk="@firebase/app-check",Kk="@firebase/auth",Qk="@firebase/auth-compat",Yk="@firebase/database",Xk="@firebase/data-connect",Jk="@firebase/database-compat",Zk="@firebase/functions",eR="@firebase/functions-compat",tR="@firebase/installations",nR="@firebase/installations-compat",rR="@firebase/messaging",iR="@firebase/messaging-compat",sR="@firebase/performance",oR="@firebase/performance-compat",aR="@firebase/remote-config",lR="@firebase/remote-config-compat",cR="@firebase/storage",uR="@firebase/storage-compat",hR="@firebase/firestore",dR="@firebase/vertexai-preview",fR="@firebase/firestore-compat",pR="firebase",mR="10.14.1";/**
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
 */const Ug="[DEFAULT]",gR={[Fg]:"fire-core",[$k]:"fire-core-compat",[Hk]:"fire-analytics",[Wk]:"fire-analytics-compat",[Gk]:"fire-app-check",[qk]:"fire-app-check-compat",[Kk]:"fire-auth",[Qk]:"fire-auth-compat",[Yk]:"fire-rtdb",[Xk]:"fire-data-connect",[Jk]:"fire-rtdb-compat",[Zk]:"fire-fn",[eR]:"fire-fn-compat",[tR]:"fire-iid",[nR]:"fire-iid-compat",[rR]:"fire-fcm",[iR]:"fire-fcm-compat",[sR]:"fire-perf",[oR]:"fire-perf-compat",[aR]:"fire-rc",[lR]:"fire-rc-compat",[cR]:"fire-gcs",[uR]:"fire-gcs-compat",[hR]:"fire-fst",[fR]:"fire-fst-compat",[dR]:"fire-vertex","fire-js":"fire-js",[pR]:"fire-js-all"};/**
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
 */const Nd=new Map,yR=new Map,Bg=new Map;function q_(t,e){try{t.container.addComponent(e)}catch(n){ki.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Nr(t){const e=t.name;if(Bg.has(e))return ki.debug(`There were multiple attempts to register component ${e}.`),!1;Bg.set(e,t);for(const n of Nd.values())q_(n,t);for(const n of yR.values())q_(n,t);return!0}function Rs(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Qr(t){return t.settings!==void 0}/**
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
 */const vR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},vs=new jo("app","Firebase",vR);/**
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
 */class _R{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ur("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vs.create("app-deleted",{appName:this._name})}}/**
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
 */const No=mR;function NT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ug,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw vs.create("bad-app-name",{appName:String(s)});if(n||(n=IT()),!n)throw vs.create("no-options");const a=Nd.get(s);if(a){if(zc(n,a.options)&&zc(r,a.config))return a;throw vs.create("duplicate-app",{appName:s})}const l=new bk(s);for(const d of Bg.values())l.addComponent(d);const u=new _R(n,r,l);return Nd.set(s,u),u}function gf(t=Ug){const e=Nd.get(t);if(!e&&t===Ug&&IT())return NT();if(!e)throw vs.create("no-app",{appName:t});return e}function An(t,e,n){var r;let s=(r=gR[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const a=s.match(/\s|\//),l=e.match(/\s|\//);if(a||l){const u=[`Unable to register library "${s}" with version "${e}":`];a&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&l&&u.push("and"),l&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ki.warn(u.join(" "));return}Nr(new ur(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const wR="firebase-heartbeat-database",xR=1,$c="firebase-heartbeat-store";let Vm=null;function OT(){return Vm||(Vm=jT(wR,xR,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore($c)}catch(n){console.warn(n)}}}}).catch(t=>{throw vs.create("idb-open",{originalErrorMessage:t.message})})),Vm}async function ER(t){try{const n=(await OT()).transaction($c),r=await n.objectStore($c).get(LT(t));return await n.done,r}catch(e){if(e instanceof pr)ki.warn(e.message);else{const n=vs.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ki.warn(n.message)}}}async function G_(t,e){try{const r=(await OT()).transaction($c,"readwrite");await r.objectStore($c).put(e,LT(t)),await r.done}catch(n){if(n instanceof pr)ki.warn(n.message);else{const r=vs.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ki.warn(r.message)}}}function LT(t){return`${t.name}!${t.options.appId}`}/**
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
 */const TR=1024,SR=30*24*60*60*1e3;class IR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new PR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=K_();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(l=>l.date===a)?void 0:(this._heartbeatsCache.heartbeats.push({date:a,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(l=>{const u=new Date(l.date).valueOf();return Date.now()-u<=SR}),this._storage.overwrite(this._heartbeatsCache))}catch(r){ki.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=K_(),{heartbeatsToSend:r,unsentEntries:s}=bR(this._heartbeatsCache.heartbeats),a=jd(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(n){return ki.warn(n),""}}}function K_(){return new Date().toISOString().substring(0,10)}function bR(t,e=TR){const n=[];let r=t.slice();for(const s of t){const a=n.find(l=>l.agent===s.agent);if(a){if(a.dates.push(s.date),Q_(n)>e){a.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Q_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class PR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return AT()?kT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ER(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return G_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return G_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Q_(t){return jd(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function CR(t){Nr(new ur("platform-logger",e=>new Bk(e),"PRIVATE")),Nr(new ur("heartbeat",e=>new IR(e),"PRIVATE")),An(Fg,H_,t),An(Fg,H_,"esm2017"),An("fire-js","")}CR("");var AR="firebase",kR="10.14.1";/**
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
 */An(AR,kR,"app");function Fy(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function VT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const RR=VT,MT=new jo("auth","Firebase",VT());/**
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
 */const Od=new mf("@firebase/auth");function DR(t,...e){Od.logLevel<=ze.WARN&&Od.warn(`Auth (${No}): ${t}`,...e)}function fd(t,...e){Od.logLevel<=ze.ERROR&&Od.error(`Auth (${No}): ${t}`,...e)}/**
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
 */function hr(t,...e){throw By(t,...e)}function Rr(t,...e){return By(t,...e)}function Uy(t,e,n){const r=Object.assign(Object.assign({},RR()),{[e]:n});return new jo("auth","Firebase",r).create(e,{appName:t.name})}function _s(t){return Uy(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function jR(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&hr(t,"argument-error"),Uy(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function By(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return MT.create(t,...e)}function Ce(t,e,...n){if(!t)throw By(e,...n)}function Si(t){const e="INTERNAL ASSERTION FAILED: "+t;throw fd(e),new Error(e)}function Ri(t,e){t||Si(e)}/**
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
 */function zg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function NR(){return Y_()==="http:"||Y_()==="https:"}function Y_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function OR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(NR()||CT()||"connection"in navigator)?navigator.onLine:!0}function LR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class iu{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ri(n>e,"Short delay should be less than long delay!"),this.isMobile=sk()||lk()}get(){return OR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function zy(t,e){Ri(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class FT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Si("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Si("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Si("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const VR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const MR=new iu(3e4,6e4);function Oo(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ds(t,e,n,r,s={}){return UT(t,s,async()=>{let a={},l={};r&&(e==="GET"?l=r:a={body:JSON.stringify(r)});const u=ru(Object.assign({key:t.config.apiKey},l)).slice(1),d=await t._getAdditionalHeaders();d["Content-Type"]="application/json",t.languageCode&&(d["X-Firebase-Locale"]=t.languageCode);const p=Object.assign({method:e,headers:d},a);return ak()||(p.referrerPolicy="no-referrer"),FT.fetch()(BT(t,t.config.apiHost,n,u),p)})}async function UT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},VR),e);try{const s=new UR(t),a=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const l=await a.json();if("needConfirmation"in l)throw Vh(t,"account-exists-with-different-credential",l);if(a.ok&&!("errorMessage"in l))return l;{const u=a.ok?l.errorMessage:l.error.message,[d,p]=u.split(" : ");if(d==="FEDERATED_USER_ID_ALREADY_LINKED")throw Vh(t,"credential-already-in-use",l);if(d==="EMAIL_EXISTS")throw Vh(t,"email-already-in-use",l);if(d==="USER_DISABLED")throw Vh(t,"user-disabled",l);const y=r[d]||d.toLowerCase().replace(/[_\s]+/g,"-");if(p)throw Uy(t,y,p);hr(t,y)}}catch(s){if(s instanceof pr)throw s;hr(t,"network-request-failed",{message:String(s)})}}async function yf(t,e,n,r,s={}){const a=await Ds(t,e,n,r,s);return"mfaPendingCredential"in a&&hr(t,"multi-factor-auth-required",{_serverResponse:a}),a}function BT(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?zy(t.config,s):`${t.config.apiScheme}://${s}`}function FR(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class UR{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Rr(this.auth,"network-request-failed")),MR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Vh(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Rr(t,e,r);return s.customData._tokenResponse=n,s}function X_(t){return t!==void 0&&t.enterprise!==void 0}class BR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return FR(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function zR(t,e){return Ds(t,"GET","/v2/recaptchaConfig",Oo(t,e))}/**
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
 */async function $R(t,e){return Ds(t,"POST","/v1/accounts:delete",e)}async function zT(t,e){return Ds(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Pc(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function WR(t,e=!1){const n=ut(t),r=await n.getIdToken(e),s=$y(r);Ce(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const a=typeof s.firebase=="object"?s.firebase:void 0,l=a==null?void 0:a.sign_in_provider;return{claims:s,token:r,authTime:Pc(Mm(s.auth_time)),issuedAtTime:Pc(Mm(s.iat)),expirationTime:Pc(Mm(s.exp)),signInProvider:l||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function Mm(t){return Number(t)*1e3}function $y(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return fd("JWT malformed, contained fewer than 3 sections"),null;try{const s=ET(n);return s?JSON.parse(s):(fd("Failed to decode base64 JWT payload"),null)}catch(s){return fd("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function J_(t){const e=$y(t);return Ce(e,"internal-error"),Ce(typeof e.exp<"u","internal-error"),Ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Wc(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof pr&&HR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function HR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class qR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class $g{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Pc(this.lastLoginAt),this.creationTime=Pc(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ld(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Wc(t,zT(n,{idToken:r}));Ce(s==null?void 0:s.users.length,n,"internal-error");const a=s.users[0];t._notifyReloadListener(a);const l=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?$T(a.providerUserInfo):[],u=KR(t.providerData,l),d=t.isAnonymous,p=!(t.email&&a.passwordHash)&&!(u!=null&&u.length),y=d?p:!1,w={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:u,metadata:new $g(a.createdAt,a.lastLoginAt),isAnonymous:y};Object.assign(t,w)}async function GR(t){const e=ut(t);await Ld(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function KR(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function $T(t){return t.map(e=>{var{providerId:n}=e,r=Fy(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function QR(t,e){const n=await UT(t,{},async()=>{const r=ru({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:a}=t.config,l=BT(t,s,"/v1/token",`key=${a}`),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/x-www-form-urlencoded",FT.fetch()(l,{method:"POST",headers:u,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function YR(t,e){return Ds(t,"POST","/v2/accounts:revokeToken",Oo(t,e))}/**
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
 */class za{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ce(e.idToken,"internal-error"),Ce(typeof e.idToken<"u","internal-error"),Ce(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):J_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Ce(e.length!==0,"internal-error");const n=J_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Ce(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:a}=await QR(e,n);this.updateTokensAndExpiration(r,s,Number(a))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:a}=n,l=new za;return r&&(Ce(typeof r=="string","internal-error",{appName:e}),l.refreshToken=r),s&&(Ce(typeof s=="string","internal-error",{appName:e}),l.accessToken=s),a&&(Ce(typeof a=="number","internal-error",{appName:e}),l.expirationTime=a),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new za,this.toJSON())}_performRefresh(){return Si("not implemented")}}/**
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
 */function os(t,e){Ce(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ii{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,a=Fy(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new qR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new $g(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const n=await Wc(this,this.stsTokenManager.getToken(this.auth,e));return Ce(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return WR(this,e)}reload(){return GR(this)}_assign(e){this!==e&&(Ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ii(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ld(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Qr(this.auth.app))return Promise.reject(_s(this.auth));const e=await this.getIdToken();return await Wc(this,$R(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,a,l,u,d,p,y;const w=(r=n.displayName)!==null&&r!==void 0?r:void 0,x=(s=n.email)!==null&&s!==void 0?s:void 0,S=(a=n.phoneNumber)!==null&&a!==void 0?a:void 0,A=(l=n.photoURL)!==null&&l!==void 0?l:void 0,C=(u=n.tenantId)!==null&&u!==void 0?u:void 0,P=(d=n._redirectEventId)!==null&&d!==void 0?d:void 0,$=(p=n.createdAt)!==null&&p!==void 0?p:void 0,B=(y=n.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:L,emailVerified:D,isAnonymous:q,providerData:J,stsTokenManager:k}=n;Ce(L&&k,e,"internal-error");const b=za.fromJSON(this.name,k);Ce(typeof L=="string",e,"internal-error"),os(w,e.name),os(x,e.name),Ce(typeof D=="boolean",e,"internal-error"),Ce(typeof q=="boolean",e,"internal-error"),os(S,e.name),os(A,e.name),os(C,e.name),os(P,e.name),os($,e.name),os(B,e.name);const R=new Ii({uid:L,auth:e,email:x,emailVerified:D,displayName:w,isAnonymous:q,photoURL:A,phoneNumber:S,tenantId:C,stsTokenManager:b,createdAt:$,lastLoginAt:B});return J&&Array.isArray(J)&&(R.providerData=J.map(V=>Object.assign({},V))),P&&(R._redirectEventId=P),R}static async _fromIdTokenResponse(e,n,r=!1){const s=new za;s.updateFromServerResponse(n);const a=new Ii({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ld(a),a}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];Ce(s.localId!==void 0,"internal-error");const a=s.providerUserInfo!==void 0?$T(s.providerUserInfo):[],l=!(s.email&&s.passwordHash)&&!(a!=null&&a.length),u=new za;u.updateFromIdToken(r);const d=new Ii({uid:s.localId,auth:e,stsTokenManager:u,isAnonymous:l}),p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new $g(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(a!=null&&a.length)};return Object.assign(d,p),d}}/**
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
 */const Z_=new Map;function bi(t){Ri(t instanceof Function,"Expected a class definition");let e=Z_.get(t);return e?(Ri(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Z_.set(t,e),e)}/**
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
 */class WT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}WT.type="NONE";const ew=WT;/**
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
 */function pd(t,e,n){return`firebase:${t}:${e}:${n}`}class $a{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:a}=this.auth;this.fullUserKey=pd(this.userKey,s.apiKey,a),this.fullPersistenceKey=pd("persistence",s.apiKey,a),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ii._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new $a(bi(ew),e,r);const s=(await Promise.all(n.map(async p=>{if(await p._isAvailable())return p}))).filter(p=>p);let a=s[0]||bi(ew);const l=pd(r,e.config.apiKey,e.name);let u=null;for(const p of n)try{const y=await p._get(l);if(y){const w=Ii._fromJSON(e,y);p!==a&&(u=w),a=p;break}}catch{}const d=s.filter(p=>p._shouldAllowMigration);return!a._shouldAllowMigration||!d.length?new $a(a,e,r):(a=d[0],u&&await a._set(l,u.toJSON()),await Promise.all(n.map(async p=>{if(p!==a)try{await p._remove(l)}catch{}})),new $a(a,e,r))}}/**
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
 */function tw(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(KT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(HT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(YT(e))return"Blackberry";if(XT(e))return"Webos";if(qT(e))return"Safari";if((e.includes("chrome/")||GT(e))&&!e.includes("edge/"))return"Chrome";if(QT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function HT(t=hn()){return/firefox\//i.test(t)}function qT(t=hn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function GT(t=hn()){return/crios\//i.test(t)}function KT(t=hn()){return/iemobile/i.test(t)}function QT(t=hn()){return/android/i.test(t)}function YT(t=hn()){return/blackberry/i.test(t)}function XT(t=hn()){return/webos/i.test(t)}function Wy(t=hn()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function XR(t=hn()){var e;return Wy(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function JR(){return ck()&&document.documentMode===10}function JT(t=hn()){return Wy(t)||QT(t)||XT(t)||YT(t)||/windows phone/i.test(t)||KT(t)}/**
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
 */function ZT(t,e=[]){let n;switch(t){case"Browser":n=tw(hn());break;case"Worker":n=`${tw(hn())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${No}/${r}`}/**
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
 */class ZR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=a=>new Promise((l,u)=>{try{const d=e(a);l(d)}catch(d){u(d)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function e4(t,e={}){return Ds(t,"GET","/v2/passwordPolicy",Oo(t,e))}/**
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
 */const t4=6;class n4{constructor(e){var n,r,s,a;const l=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=l.minPasswordLength)!==null&&n!==void 0?n:t4,l.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=l.maxPasswordLength),l.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=l.containsLowercaseCharacter),l.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=l.containsUppercaseCharacter),l.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=l.containsNumericCharacter),l.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=l.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,a,l,u;const d={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,d),this.validatePasswordCharacterOptions(e,d),d.isValid&&(d.isValid=(n=d.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),d.isValid&&(d.isValid=(r=d.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),d.isValid&&(d.isValid=(s=d.containsLowercaseLetter)!==null&&s!==void 0?s:!0),d.isValid&&(d.isValid=(a=d.containsUppercaseLetter)!==null&&a!==void 0?a:!0),d.isValid&&(d.isValid=(l=d.containsNumericCharacter)!==null&&l!==void 0?l:!0),d.isValid&&(d.isValid=(u=d.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),d}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
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
 */class r4{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new nw(this),this.idTokenSubscription=new nw(this),this.beforeStateQueue=new ZR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=MT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=bi(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await $a.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await zT(this,{idToken:e}),r=await Ii._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Qr(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(u,u))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,u=s==null?void 0:s._redirectEventId,d=await this.tryRedirectSignIn(e);(!l||l===u)&&(d!=null&&d.user)&&(s=d.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(l){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ld(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=LR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Qr(this.app))return Promise.reject(_s(this));const n=e?ut(e):null;return n&&Ce(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Qr(this.app)?Promise.reject(_s(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Qr(this.app)?Promise.reject(_s(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(bi(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await e4(this),n=new n4(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new jo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await YR(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&bi(e)||this._popupRedirectResolver;Ce(n,this,"argument-error"),this.redirectPersistenceManager=await $a.create(this,[bi(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const a=typeof n=="function"?n:n.next.bind(n);let l=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ce(u,this,"internal-error"),u.then(()=>{l||a(this.currentUser)}),typeof n=="function"){const d=e.addObserver(n,r,s);return()=>{l=!0,d()}}else{const d=e.addObserver(n);return()=>{l=!0,d()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ZT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&DR(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Lo(t){return ut(t)}class nw{constructor(e){this.auth=e,this.observer=null,this.addObserver=gk(n=>this.observer=n)}get next(){return Ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let vf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function i4(t){vf=t}function e2(t){return vf.loadJS(t)}function s4(){return vf.recaptchaEnterpriseScript}function o4(){return vf.gapiScript}function a4(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const l4="recaptcha-enterprise",c4="NO_RECAPTCHA";class u4{constructor(e){this.type=l4,this.auth=Lo(e)}async verify(e="verify",n=!1){async function r(a){if(!n){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(l,u)=>{zR(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(d=>{if(d.recaptchaKey===void 0)u(new Error("recaptcha Enterprise site key undefined"));else{const p=new BR(d);return a.tenantId==null?a._agentRecaptchaConfig=p:a._tenantRecaptchaConfigs[a.tenantId]=p,l(p.siteKey)}}).catch(d=>{u(d)})})}function s(a,l,u){const d=window.grecaptcha;X_(d)?d.enterprise.ready(()=>{d.enterprise.execute(a,{action:e}).then(p=>{l(p)}).catch(()=>{l(c4)})}):u(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((a,l)=>{r(this.auth).then(u=>{if(!n&&X_(window.grecaptcha))s(u,a,l);else{if(typeof window>"u"){l(new Error("RecaptchaVerifier is only supported in browser"));return}let d=s4();d.length!==0&&(d+=u),e2(d).then(()=>{s(u,a,l)}).catch(p=>{l(p)})}}).catch(u=>{l(u)})})}}async function rw(t,e,n,r=!1){const s=new u4(t);let a;try{a=await s.verify(n)}catch{a=await s.verify(n,!0)}const l=Object.assign({},e);return r?Object.assign(l,{captchaResp:a}):Object.assign(l,{captchaResponse:a}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function iw(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await rw(t,e,n,n==="getOobCode");return r(t,a)}else return r(t,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await rw(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(a)})}/**
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
 */function h4(t,e){const n=Rs(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),a=n.getOptions();if(zc(a,e??{}))return s;hr(s,"already-initialized")}return n.initialize({options:e})}function d4(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(bi);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function f4(t,e,n){const r=Lo(t);Ce(r._canInitEmulator,r,"emulator-config-failed"),Ce(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,a=t2(e),{host:l,port:u}=p4(e),d=u===null?"":`:${u}`;r.config.emulator={url:`${a}//${l}${d}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:l,port:u,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:s})}),m4()}function t2(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function p4(t){const e=t2(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const a=s[1];return{host:a,port:sw(r.substr(a.length+1))}}else{const[a,l]=r.split(":");return{host:a,port:sw(l)}}}function sw(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function m4(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Hy{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Si("not implemented")}_getIdTokenResponse(e){return Si("not implemented")}_linkToIdToken(e,n){return Si("not implemented")}_getReauthenticationResolver(e){return Si("not implemented")}}async function g4(t,e){return Ds(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function y4(t,e){return yf(t,"POST","/v1/accounts:signInWithPassword",Oo(t,e))}/**
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
 */async function v4(t,e){return yf(t,"POST","/v1/accounts:signInWithEmailLink",Oo(t,e))}async function _4(t,e){return yf(t,"POST","/v1/accounts:signInWithEmailLink",Oo(t,e))}/**
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
 */class Hc extends Hy{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Hc(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Hc(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return iw(e,n,"signInWithPassword",y4);case"emailLink":return v4(e,{email:this._email,oobCode:this._password});default:hr(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return iw(e,r,"signUpPassword",g4);case"emailLink":return _4(e,{idToken:n,email:this._email,oobCode:this._password});default:hr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Wa(t,e){return yf(t,"POST","/v1/accounts:signInWithIdp",Oo(t,e))}/**
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
 */const w4="http://localhost";class Io extends Hy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Io(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):hr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,a=Fy(n,["providerId","signInMethod"]);if(!r||!s)return null;const l=new Io(r,s);return l.idToken=a.idToken||void 0,l.accessToken=a.accessToken||void 0,l.secret=a.secret,l.nonce=a.nonce,l.pendingToken=a.pendingToken||null,l}_getIdTokenResponse(e){const n=this.buildRequest();return Wa(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Wa(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Wa(e,n)}buildRequest(){const e={requestUri:w4,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ru(n)}return e}}/**
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
 */function x4(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function E4(t){const e=wc(xc(t)).link,n=e?wc(xc(e)).deep_link_id:null,r=wc(xc(t)).deep_link_id;return(r?wc(xc(r)).link:null)||r||n||e||t}class qy{constructor(e){var n,r,s,a,l,u;const d=wc(xc(e)),p=(n=d.apiKey)!==null&&n!==void 0?n:null,y=(r=d.oobCode)!==null&&r!==void 0?r:null,w=x4((s=d.mode)!==null&&s!==void 0?s:null);Ce(p&&y&&w,"argument-error"),this.apiKey=p,this.operation=w,this.code=y,this.continueUrl=(a=d.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(l=d.languageCode)!==null&&l!==void 0?l:null,this.tenantId=(u=d.tenantId)!==null&&u!==void 0?u:null}static parseLink(e){const n=E4(e);try{return new qy(n)}catch{return null}}}/**
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
 */class dl{constructor(){this.providerId=dl.PROVIDER_ID}static credential(e,n){return Hc._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=qy.parseLink(n);return Ce(r,"argument-error"),Hc._fromEmailAndCode(e,r.code,r.tenantId)}}dl.PROVIDER_ID="password";dl.EMAIL_PASSWORD_SIGN_IN_METHOD="password";dl.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Gy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class su extends Gy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class us extends su{constructor(){super("facebook.com")}static credential(e){return Io._fromParams({providerId:us.PROVIDER_ID,signInMethod:us.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return us.credentialFromTaggedObject(e)}static credentialFromError(e){return us.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return us.credential(e.oauthAccessToken)}catch{return null}}}us.FACEBOOK_SIGN_IN_METHOD="facebook.com";us.PROVIDER_ID="facebook.com";/**
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
 */class Ti extends su{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Io._fromParams({providerId:Ti.PROVIDER_ID,signInMethod:Ti.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ti.credentialFromTaggedObject(e)}static credentialFromError(e){return Ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ti.credential(n,r)}catch{return null}}}Ti.GOOGLE_SIGN_IN_METHOD="google.com";Ti.PROVIDER_ID="google.com";/**
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
 */class hs extends su{constructor(){super("github.com")}static credential(e){return Io._fromParams({providerId:hs.PROVIDER_ID,signInMethod:hs.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hs.credentialFromTaggedObject(e)}static credentialFromError(e){return hs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hs.credential(e.oauthAccessToken)}catch{return null}}}hs.GITHUB_SIGN_IN_METHOD="github.com";hs.PROVIDER_ID="github.com";/**
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
 */class ds extends su{constructor(){super("twitter.com")}static credential(e,n){return Io._fromParams({providerId:ds.PROVIDER_ID,signInMethod:ds.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ds.credentialFromTaggedObject(e)}static credentialFromError(e){return ds.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ds.credential(n,r)}catch{return null}}}ds.TWITTER_SIGN_IN_METHOD="twitter.com";ds.PROVIDER_ID="twitter.com";/**
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
 */class Ga{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const a=await Ii._fromIdTokenResponse(e,r,s),l=ow(r);return new Ga({user:a,providerId:l,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=ow(r);return new Ga({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function ow(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Vd extends pr{constructor(e,n,r,s){var a;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Vd.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Vd(e,n,r,s)}}function n2(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Vd._fromErrorAndOperation(t,a,e,r):a})}async function T4(t,e,n=!1){const r=await Wc(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ga._forOperation(t,"link",r)}/**
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
 */async function S4(t,e,n=!1){const{auth:r}=t;if(Qr(r.app))return Promise.reject(_s(r));const s="reauthenticate";try{const a=await Wc(t,n2(r,s,e,t),n);Ce(a.idToken,r,"internal-error");const l=$y(a.idToken);Ce(l,r,"internal-error");const{sub:u}=l;return Ce(t.uid===u,r,"user-mismatch"),Ga._forOperation(t,s,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&hr(r,"user-mismatch"),a}}/**
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
 */async function r2(t,e,n=!1){if(Qr(t.app))return Promise.reject(_s(t));const r="signIn",s=await n2(t,r,e),a=await Ga._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(a.user),a}async function I4(t,e){return r2(Lo(t),e)}/**
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
 */async function b4(t){const e=Lo(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function P4(t,e,n){return Qr(t.app)?Promise.reject(_s(t)):I4(ut(t),dl.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&b4(t),r})}function C4(t,e,n,r){return ut(t).onIdTokenChanged(e,n,r)}function A4(t,e,n){return ut(t).beforeAuthStateChanged(e,n)}function k4(t,e,n,r){return ut(t).onAuthStateChanged(e,n,r)}function R4(t){return ut(t).signOut()}const Md="__sak";/**
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
 */class i2{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Md,"1"),this.storage.removeItem(Md),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const D4=1e3,j4=10;class s2 extends i2{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=JT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((l,u,d)=>{this.notifyListeners(l,d)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const l=this.storage.getItem(r);!n&&this.localCache[r]===l||this.notifyListeners(r,l)},a=this.storage.getItem(r);JR()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,j4):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},D4)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}s2.type="LOCAL";const N4=s2;/**
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
 */class o2 extends i2{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}o2.type="SESSION";const a2=o2;/**
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
 */function O4(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class _f{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new _f(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:a}=n.data,l=this.handlersMap[s];if(!(l!=null&&l.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const u=Array.from(l).map(async p=>p(n.origin,a)),d=await O4(u);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:d})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_f.receivers=[];/**
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
 */function Ky(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class L4{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let a,l;return new Promise((u,d)=>{const p=Ky("",20);s.port1.start();const y=setTimeout(()=>{d(new Error("unsupported_event"))},r);l={messageChannel:s,onMessage(w){const x=w;if(x.data.eventId===p)switch(x.data.status){case"ack":clearTimeout(y),a=setTimeout(()=>{d(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),u(x.data.response);break;default:clearTimeout(y),clearTimeout(a),d(new Error("invalid_response"));break}}},this.handlers.add(l),s.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:e,eventId:p,data:n},[s.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
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
 */function Xr(){return window}function V4(t){Xr().location.href=t}/**
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
 */function l2(){return typeof Xr().WorkerGlobalScope<"u"&&typeof Xr().importScripts=="function"}async function M4(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function F4(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function U4(){return l2()?self:null}/**
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
 */const c2="firebaseLocalStorageDb",B4=1,Fd="firebaseLocalStorage",u2="fbase_key";class ou{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function wf(t,e){return t.transaction([Fd],e?"readwrite":"readonly").objectStore(Fd)}function z4(){const t=indexedDB.deleteDatabase(c2);return new ou(t).toPromise()}function Wg(){const t=indexedDB.open(c2,B4);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Fd,{keyPath:u2})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Fd)?e(r):(r.close(),await z4(),e(await Wg()))})})}async function aw(t,e,n){const r=wf(t,!0).put({[u2]:e,value:n});return new ou(r).toPromise()}async function $4(t,e){const n=wf(t,!1).get(e),r=await new ou(n).toPromise();return r===void 0?null:r.value}function lw(t,e){const n=wf(t,!0).delete(e);return new ou(n).toPromise()}const W4=800,H4=3;class h2{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wg(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>H4)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return l2()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_f._getInstance(U4()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await M4(),!this.activeServiceWorker)return;this.sender=new L4(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||F4()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wg();return await aw(e,Md,"1"),await lw(e,Md),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>aw(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>$4(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>lw(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const a=wf(s,!1).getAll();return new ou(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:a}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(a)&&(this.notifyListeners(s,a),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),W4)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}h2.type="LOCAL";const q4=h2;new iu(3e4,6e4);/**
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
 */function d2(t,e){return e?bi(e):(Ce(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Qy extends Hy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Wa(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Wa(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Wa(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function G4(t){return r2(t.auth,new Qy(t),t.bypassAuthState)}function K4(t){const{auth:e,user:n}=t;return Ce(n,e,"internal-error"),S4(n,new Qy(t),t.bypassAuthState)}async function Q4(t){const{auth:e,user:n}=t;return Ce(n,e,"internal-error"),T4(n,new Qy(t),t.bypassAuthState)}/**
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
 */class f2{constructor(e,n,r,s,a=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:a,error:l,type:u}=e;if(l){this.reject(l);return}const d={auth:this.auth,requestUri:n,sessionId:r,tenantId:a||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(d))}catch(p){this.reject(p)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return G4;case"linkViaPopup":case"linkViaRedirect":return Q4;case"reauthViaPopup":case"reauthViaRedirect":return K4;default:hr(this.auth,"internal-error")}}resolve(e){Ri(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ri(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Y4=new iu(2e3,1e4);async function p2(t,e,n){if(Qr(t.app))return Promise.reject(Rr(t,"operation-not-supported-in-this-environment"));const r=Lo(t);jR(t,e,Gy);const s=d2(r,n);return new go(r,"signInViaPopup",e,s).executeNotNull()}class go extends f2{constructor(e,n,r,s,a){super(e,n,s,a),this.provider=r,this.authWindow=null,this.pollId=null,go.currentPopupAction&&go.currentPopupAction.cancel(),go.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ce(e,this.auth,"internal-error"),e}async onExecution(){Ri(this.filter.length===1,"Popup operations only handle one event");const e=Ky();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Rr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Rr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,go.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Rr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Y4.get())};e()}}go.currentPopupAction=null;/**
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
 */const X4="pendingRedirect",md=new Map;class J4 extends f2{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=md.get(this.auth._key());if(!e){try{const r=await Z4(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}md.set(this.auth._key(),e)}return this.bypassAuthState||md.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Z4(t,e){const n=n3(e),r=t3(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function e3(t,e){md.set(t._key(),e)}function t3(t){return bi(t._redirectPersistence)}function n3(t){return pd(X4,t.config.apiKey,t.name)}async function r3(t,e,n=!1){if(Qr(t.app))return Promise.reject(_s(t));const r=Lo(t),s=d2(r,e),l=await new J4(r,s,n).execute();return l&&!n&&(delete l.user._redirectEventId,await r._persistUserIfCurrent(l.user),await r._setRedirectUser(null,e)),l}/**
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
 */const i3=10*60*1e3;class s3{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!o3(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!m2(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Rr(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=i3&&this.cachedEventUids.clear(),this.cachedEventUids.has(cw(e))}saveEventToCache(e){this.cachedEventUids.add(cw(e)),this.lastProcessedEventTime=Date.now()}}function cw(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function m2({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function o3(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return m2(t);default:return!1}}/**
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
 */async function a3(t,e={}){return Ds(t,"GET","/v1/projects",e)}/**
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
 */const l3=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,c3=/^https?/;async function u3(t){if(t.config.emulator)return;const{authorizedDomains:e}=await a3(t);for(const n of e)try{if(h3(n))return}catch{}hr(t,"unauthorized-domain")}function h3(t){const e=zg(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const l=new URL(t);return l.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&l.hostname===r}if(!c3.test(n))return!1;if(l3.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const d3=new iu(3e4,6e4);function uw(){const t=Xr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function f3(t){return new Promise((e,n)=>{var r,s,a;function l(){uw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{uw(),n(Rr(t,"network-request-failed"))},timeout:d3.get()})}if(!((s=(r=Xr().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((a=Xr().gapi)===null||a===void 0)&&a.load)l();else{const u=a4("iframefcb");return Xr()[u]=()=>{gapi.load?l():n(Rr(t,"network-request-failed"))},e2(`${o4()}?onload=${u}`).catch(d=>n(d))}}).catch(e=>{throw gd=null,e})}let gd=null;function p3(t){return gd=gd||f3(t),gd}/**
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
 */const m3=new iu(5e3,15e3),g3="__/auth/iframe",y3="emulator/auth/iframe",v3={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_3=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function w3(t){const e=t.config;Ce(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?zy(e,y3):`https://${t.config.authDomain}/${g3}`,r={apiKey:e.apiKey,appName:t.name,v:No},s=_3.get(t.config.apiHost);s&&(r.eid=s);const a=t._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${ru(r).slice(1)}`}async function x3(t){const e=await p3(t),n=Xr().gapi;return Ce(n,t,"internal-error"),e.open({where:document.body,url:w3(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:v3,dontclear:!0},r=>new Promise(async(s,a)=>{await r.restyle({setHideOnLeave:!1});const l=Rr(t,"network-request-failed"),u=Xr().setTimeout(()=>{a(l)},m3.get());function d(){Xr().clearTimeout(u),s(r)}r.ping(d).then(d,()=>{a(l)})}))}/**
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
 */const E3={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},T3=500,S3=600,I3="_blank",b3="http://localhost";class hw{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function P3(t,e,n,r=T3,s=S3){const a=Math.max((window.screen.availHeight-s)/2,0).toString(),l=Math.max((window.screen.availWidth-r)/2,0).toString();let u="";const d=Object.assign(Object.assign({},E3),{width:r.toString(),height:s.toString(),top:a,left:l}),p=hn().toLowerCase();n&&(u=GT(p)?I3:n),HT(p)&&(e=e||b3,d.scrollbars="yes");const y=Object.entries(d).reduce((x,[S,A])=>`${x}${S}=${A},`,"");if(XR(p)&&u!=="_self")return C3(e||"",u),new hw(null);const w=window.open(e||"",u,y);Ce(w,t,"popup-blocked");try{w.focus()}catch{}return new hw(w)}function C3(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const A3="__/auth/handler",k3="emulator/auth/handler",R3=encodeURIComponent("fac");async function dw(t,e,n,r,s,a){Ce(t.config.authDomain,t,"auth-domain-config-required"),Ce(t.config.apiKey,t,"invalid-api-key");const l={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:No,eventId:s};if(e instanceof Gy){e.setDefaultLanguage(t.languageCode),l.providerId=e.providerId||"",mk(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,w]of Object.entries({}))l[y]=w}if(e instanceof su){const y=e.getScopes().filter(w=>w!=="");y.length>0&&(l.scopes=y.join(","))}t.tenantId&&(l.tid=t.tenantId);const u=l;for(const y of Object.keys(u))u[y]===void 0&&delete u[y];const d=await t._getAppCheckToken(),p=d?`#${R3}=${encodeURIComponent(d)}`:"";return`${D3(t)}?${ru(u).slice(1)}${p}`}function D3({config:t}){return t.emulator?zy(t,k3):`https://${t.authDomain}/${A3}`}/**
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
 */const Fm="webStorageSupport";class j3{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=a2,this._completeRedirectFn=r3,this._overrideRedirectResult=e3}async _openPopup(e,n,r,s){var a;Ri((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const l=await dw(e,n,r,zg(),s);return P3(e,l,Ky())}async _openRedirect(e,n,r,s){await this._originValidation(e);const a=await dw(e,n,r,zg(),s);return V4(a),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:a}=this.eventManagers[n];return s?Promise.resolve(s):(Ri(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await x3(e),r=new s3(e);return n.register("authEvent",s=>(Ce(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Fm,{type:Fm},s=>{var a;const l=(a=s==null?void 0:s[0])===null||a===void 0?void 0:a[Fm];l!==void 0&&n(!!l),hr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=u3(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return JT()||qT()||Wy()}}const N3=j3;var fw="@firebase/auth",pw="1.7.9";/**
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
 */class O3{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function L3(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function V3(t){Nr(new ur("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:l,authDomain:u}=r.options;Ce(l&&!l.includes(":"),"invalid-api-key",{appName:r.name});const d={apiKey:l,authDomain:u,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ZT(t)},p=new r4(r,s,a,d);return d4(p,n),p},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Nr(new ur("auth-internal",e=>{const n=Lo(e.getProvider("auth").getImmediate());return(r=>new O3(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),An(fw,pw,L3(t)),An(fw,pw,"esm2017")}/**
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
 */const M3=5*60,F3=bT("authIdTokenMaxAge")||M3;let mw=null;const U3=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>F3)return;const s=n==null?void 0:n.token;mw!==s&&(mw=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function B3(t=gf()){const e=Rs(t,"auth");if(e.isInitialized())return e.getImmediate();const n=h4(t,{popupRedirectResolver:N3,persistence:[q4,N4,a2]}),r=bT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const l=U3(a.toString());A4(n,l,()=>l(n.currentUser)),C4(n,u=>l(u))}}const s=TT("auth");return s&&f4(n,`http://${s}`),n}function z3(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}i4({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const a=Rr("internal-error");a.customData=s,n(a)},r.type="text/javascript",r.charset="UTF-8",z3().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});V3("Browser");var gw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xo,g2;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(k,b){function R(){}R.prototype=b.prototype,k.D=b.prototype,k.prototype=new R,k.prototype.constructor=k,k.C=function(V,z,H){for(var N=Array(arguments.length-2),Le=2;Le<arguments.length;Le++)N[Le-2]=arguments[Le];return b.prototype[z].apply(V,N)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(k,b,R){R||(R=0);var V=Array(16);if(typeof b=="string")for(var z=0;16>z;++z)V[z]=b.charCodeAt(R++)|b.charCodeAt(R++)<<8|b.charCodeAt(R++)<<16|b.charCodeAt(R++)<<24;else for(z=0;16>z;++z)V[z]=b[R++]|b[R++]<<8|b[R++]<<16|b[R++]<<24;b=k.g[0],R=k.g[1],z=k.g[2];var H=k.g[3],N=b+(H^R&(z^H))+V[0]+3614090360&4294967295;b=R+(N<<7&4294967295|N>>>25),N=H+(z^b&(R^z))+V[1]+3905402710&4294967295,H=b+(N<<12&4294967295|N>>>20),N=z+(R^H&(b^R))+V[2]+606105819&4294967295,z=H+(N<<17&4294967295|N>>>15),N=R+(b^z&(H^b))+V[3]+3250441966&4294967295,R=z+(N<<22&4294967295|N>>>10),N=b+(H^R&(z^H))+V[4]+4118548399&4294967295,b=R+(N<<7&4294967295|N>>>25),N=H+(z^b&(R^z))+V[5]+1200080426&4294967295,H=b+(N<<12&4294967295|N>>>20),N=z+(R^H&(b^R))+V[6]+2821735955&4294967295,z=H+(N<<17&4294967295|N>>>15),N=R+(b^z&(H^b))+V[7]+4249261313&4294967295,R=z+(N<<22&4294967295|N>>>10),N=b+(H^R&(z^H))+V[8]+1770035416&4294967295,b=R+(N<<7&4294967295|N>>>25),N=H+(z^b&(R^z))+V[9]+2336552879&4294967295,H=b+(N<<12&4294967295|N>>>20),N=z+(R^H&(b^R))+V[10]+4294925233&4294967295,z=H+(N<<17&4294967295|N>>>15),N=R+(b^z&(H^b))+V[11]+2304563134&4294967295,R=z+(N<<22&4294967295|N>>>10),N=b+(H^R&(z^H))+V[12]+1804603682&4294967295,b=R+(N<<7&4294967295|N>>>25),N=H+(z^b&(R^z))+V[13]+4254626195&4294967295,H=b+(N<<12&4294967295|N>>>20),N=z+(R^H&(b^R))+V[14]+2792965006&4294967295,z=H+(N<<17&4294967295|N>>>15),N=R+(b^z&(H^b))+V[15]+1236535329&4294967295,R=z+(N<<22&4294967295|N>>>10),N=b+(z^H&(R^z))+V[1]+4129170786&4294967295,b=R+(N<<5&4294967295|N>>>27),N=H+(R^z&(b^R))+V[6]+3225465664&4294967295,H=b+(N<<9&4294967295|N>>>23),N=z+(b^R&(H^b))+V[11]+643717713&4294967295,z=H+(N<<14&4294967295|N>>>18),N=R+(H^b&(z^H))+V[0]+3921069994&4294967295,R=z+(N<<20&4294967295|N>>>12),N=b+(z^H&(R^z))+V[5]+3593408605&4294967295,b=R+(N<<5&4294967295|N>>>27),N=H+(R^z&(b^R))+V[10]+38016083&4294967295,H=b+(N<<9&4294967295|N>>>23),N=z+(b^R&(H^b))+V[15]+3634488961&4294967295,z=H+(N<<14&4294967295|N>>>18),N=R+(H^b&(z^H))+V[4]+3889429448&4294967295,R=z+(N<<20&4294967295|N>>>12),N=b+(z^H&(R^z))+V[9]+568446438&4294967295,b=R+(N<<5&4294967295|N>>>27),N=H+(R^z&(b^R))+V[14]+3275163606&4294967295,H=b+(N<<9&4294967295|N>>>23),N=z+(b^R&(H^b))+V[3]+4107603335&4294967295,z=H+(N<<14&4294967295|N>>>18),N=R+(H^b&(z^H))+V[8]+1163531501&4294967295,R=z+(N<<20&4294967295|N>>>12),N=b+(z^H&(R^z))+V[13]+2850285829&4294967295,b=R+(N<<5&4294967295|N>>>27),N=H+(R^z&(b^R))+V[2]+4243563512&4294967295,H=b+(N<<9&4294967295|N>>>23),N=z+(b^R&(H^b))+V[7]+1735328473&4294967295,z=H+(N<<14&4294967295|N>>>18),N=R+(H^b&(z^H))+V[12]+2368359562&4294967295,R=z+(N<<20&4294967295|N>>>12),N=b+(R^z^H)+V[5]+4294588738&4294967295,b=R+(N<<4&4294967295|N>>>28),N=H+(b^R^z)+V[8]+2272392833&4294967295,H=b+(N<<11&4294967295|N>>>21),N=z+(H^b^R)+V[11]+1839030562&4294967295,z=H+(N<<16&4294967295|N>>>16),N=R+(z^H^b)+V[14]+4259657740&4294967295,R=z+(N<<23&4294967295|N>>>9),N=b+(R^z^H)+V[1]+2763975236&4294967295,b=R+(N<<4&4294967295|N>>>28),N=H+(b^R^z)+V[4]+1272893353&4294967295,H=b+(N<<11&4294967295|N>>>21),N=z+(H^b^R)+V[7]+4139469664&4294967295,z=H+(N<<16&4294967295|N>>>16),N=R+(z^H^b)+V[10]+3200236656&4294967295,R=z+(N<<23&4294967295|N>>>9),N=b+(R^z^H)+V[13]+681279174&4294967295,b=R+(N<<4&4294967295|N>>>28),N=H+(b^R^z)+V[0]+3936430074&4294967295,H=b+(N<<11&4294967295|N>>>21),N=z+(H^b^R)+V[3]+3572445317&4294967295,z=H+(N<<16&4294967295|N>>>16),N=R+(z^H^b)+V[6]+76029189&4294967295,R=z+(N<<23&4294967295|N>>>9),N=b+(R^z^H)+V[9]+3654602809&4294967295,b=R+(N<<4&4294967295|N>>>28),N=H+(b^R^z)+V[12]+3873151461&4294967295,H=b+(N<<11&4294967295|N>>>21),N=z+(H^b^R)+V[15]+530742520&4294967295,z=H+(N<<16&4294967295|N>>>16),N=R+(z^H^b)+V[2]+3299628645&4294967295,R=z+(N<<23&4294967295|N>>>9),N=b+(z^(R|~H))+V[0]+4096336452&4294967295,b=R+(N<<6&4294967295|N>>>26),N=H+(R^(b|~z))+V[7]+1126891415&4294967295,H=b+(N<<10&4294967295|N>>>22),N=z+(b^(H|~R))+V[14]+2878612391&4294967295,z=H+(N<<15&4294967295|N>>>17),N=R+(H^(z|~b))+V[5]+4237533241&4294967295,R=z+(N<<21&4294967295|N>>>11),N=b+(z^(R|~H))+V[12]+1700485571&4294967295,b=R+(N<<6&4294967295|N>>>26),N=H+(R^(b|~z))+V[3]+2399980690&4294967295,H=b+(N<<10&4294967295|N>>>22),N=z+(b^(H|~R))+V[10]+4293915773&4294967295,z=H+(N<<15&4294967295|N>>>17),N=R+(H^(z|~b))+V[1]+2240044497&4294967295,R=z+(N<<21&4294967295|N>>>11),N=b+(z^(R|~H))+V[8]+1873313359&4294967295,b=R+(N<<6&4294967295|N>>>26),N=H+(R^(b|~z))+V[15]+4264355552&4294967295,H=b+(N<<10&4294967295|N>>>22),N=z+(b^(H|~R))+V[6]+2734768916&4294967295,z=H+(N<<15&4294967295|N>>>17),N=R+(H^(z|~b))+V[13]+1309151649&4294967295,R=z+(N<<21&4294967295|N>>>11),N=b+(z^(R|~H))+V[4]+4149444226&4294967295,b=R+(N<<6&4294967295|N>>>26),N=H+(R^(b|~z))+V[11]+3174756917&4294967295,H=b+(N<<10&4294967295|N>>>22),N=z+(b^(H|~R))+V[2]+718787259&4294967295,z=H+(N<<15&4294967295|N>>>17),N=R+(H^(z|~b))+V[9]+3951481745&4294967295,k.g[0]=k.g[0]+b&4294967295,k.g[1]=k.g[1]+(z+(N<<21&4294967295|N>>>11))&4294967295,k.g[2]=k.g[2]+z&4294967295,k.g[3]=k.g[3]+H&4294967295}r.prototype.u=function(k,b){b===void 0&&(b=k.length);for(var R=b-this.blockSize,V=this.B,z=this.h,H=0;H<b;){if(z==0)for(;H<=R;)s(this,k,H),H+=this.blockSize;if(typeof k=="string"){for(;H<b;)if(V[z++]=k.charCodeAt(H++),z==this.blockSize){s(this,V),z=0;break}}else for(;H<b;)if(V[z++]=k[H++],z==this.blockSize){s(this,V),z=0;break}}this.h=z,this.o+=b},r.prototype.v=function(){var k=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);k[0]=128;for(var b=1;b<k.length-8;++b)k[b]=0;var R=8*this.o;for(b=k.length-8;b<k.length;++b)k[b]=R&255,R/=256;for(this.u(k),k=Array(16),b=R=0;4>b;++b)for(var V=0;32>V;V+=8)k[R++]=this.g[b]>>>V&255;return k};function a(k,b){var R=u;return Object.prototype.hasOwnProperty.call(R,k)?R[k]:R[k]=b(k)}function l(k,b){this.h=b;for(var R=[],V=!0,z=k.length-1;0<=z;z--){var H=k[z]|0;V&&H==b||(R[z]=H,V=!1)}this.g=R}var u={};function d(k){return-128<=k&&128>k?a(k,function(b){return new l([b|0],0>b?-1:0)}):new l([k|0],0>k?-1:0)}function p(k){if(isNaN(k)||!isFinite(k))return w;if(0>k)return P(p(-k));for(var b=[],R=1,V=0;k>=R;V++)b[V]=k/R|0,R*=4294967296;return new l(b,0)}function y(k,b){if(k.length==0)throw Error("number format error: empty string");if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(k.charAt(0)=="-")return P(y(k.substring(1),b));if(0<=k.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=p(Math.pow(b,8)),V=w,z=0;z<k.length;z+=8){var H=Math.min(8,k.length-z),N=parseInt(k.substring(z,z+H),b);8>H?(H=p(Math.pow(b,H)),V=V.j(H).add(p(N))):(V=V.j(R),V=V.add(p(N)))}return V}var w=d(0),x=d(1),S=d(16777216);t=l.prototype,t.m=function(){if(C(this))return-P(this).m();for(var k=0,b=1,R=0;R<this.g.length;R++){var V=this.i(R);k+=(0<=V?V:4294967296+V)*b,b*=4294967296}return k},t.toString=function(k){if(k=k||10,2>k||36<k)throw Error("radix out of range: "+k);if(A(this))return"0";if(C(this))return"-"+P(this).toString(k);for(var b=p(Math.pow(k,6)),R=this,V="";;){var z=D(R,b).g;R=$(R,z.j(b));var H=((0<R.g.length?R.g[0]:R.h)>>>0).toString(k);if(R=z,A(R))return H+V;for(;6>H.length;)H="0"+H;V=H+V}},t.i=function(k){return 0>k?0:k<this.g.length?this.g[k]:this.h};function A(k){if(k.h!=0)return!1;for(var b=0;b<k.g.length;b++)if(k.g[b]!=0)return!1;return!0}function C(k){return k.h==-1}t.l=function(k){return k=$(this,k),C(k)?-1:A(k)?0:1};function P(k){for(var b=k.g.length,R=[],V=0;V<b;V++)R[V]=~k.g[V];return new l(R,~k.h).add(x)}t.abs=function(){return C(this)?P(this):this},t.add=function(k){for(var b=Math.max(this.g.length,k.g.length),R=[],V=0,z=0;z<=b;z++){var H=V+(this.i(z)&65535)+(k.i(z)&65535),N=(H>>>16)+(this.i(z)>>>16)+(k.i(z)>>>16);V=N>>>16,H&=65535,N&=65535,R[z]=N<<16|H}return new l(R,R[R.length-1]&-2147483648?-1:0)};function $(k,b){return k.add(P(b))}t.j=function(k){if(A(this)||A(k))return w;if(C(this))return C(k)?P(this).j(P(k)):P(P(this).j(k));if(C(k))return P(this.j(P(k)));if(0>this.l(S)&&0>k.l(S))return p(this.m()*k.m());for(var b=this.g.length+k.g.length,R=[],V=0;V<2*b;V++)R[V]=0;for(V=0;V<this.g.length;V++)for(var z=0;z<k.g.length;z++){var H=this.i(V)>>>16,N=this.i(V)&65535,Le=k.i(z)>>>16,Qe=k.i(z)&65535;R[2*V+2*z]+=N*Qe,B(R,2*V+2*z),R[2*V+2*z+1]+=H*Qe,B(R,2*V+2*z+1),R[2*V+2*z+1]+=N*Le,B(R,2*V+2*z+1),R[2*V+2*z+2]+=H*Le,B(R,2*V+2*z+2)}for(V=0;V<b;V++)R[V]=R[2*V+1]<<16|R[2*V];for(V=b;V<2*b;V++)R[V]=0;return new l(R,0)};function B(k,b){for(;(k[b]&65535)!=k[b];)k[b+1]+=k[b]>>>16,k[b]&=65535,b++}function L(k,b){this.g=k,this.h=b}function D(k,b){if(A(b))throw Error("division by zero");if(A(k))return new L(w,w);if(C(k))return b=D(P(k),b),new L(P(b.g),P(b.h));if(C(b))return b=D(k,P(b)),new L(P(b.g),b.h);if(30<k.g.length){if(C(k)||C(b))throw Error("slowDivide_ only works with positive integers.");for(var R=x,V=b;0>=V.l(k);)R=q(R),V=q(V);var z=J(R,1),H=J(V,1);for(V=J(V,2),R=J(R,2);!A(V);){var N=H.add(V);0>=N.l(k)&&(z=z.add(R),H=N),V=J(V,1),R=J(R,1)}return b=$(k,z.j(b)),new L(z,b)}for(z=w;0<=k.l(b);){for(R=Math.max(1,Math.floor(k.m()/b.m())),V=Math.ceil(Math.log(R)/Math.LN2),V=48>=V?1:Math.pow(2,V-48),H=p(R),N=H.j(b);C(N)||0<N.l(k);)R-=V,H=p(R),N=H.j(b);A(H)&&(H=x),z=z.add(H),k=$(k,N)}return new L(z,k)}t.A=function(k){return D(this,k).h},t.and=function(k){for(var b=Math.max(this.g.length,k.g.length),R=[],V=0;V<b;V++)R[V]=this.i(V)&k.i(V);return new l(R,this.h&k.h)},t.or=function(k){for(var b=Math.max(this.g.length,k.g.length),R=[],V=0;V<b;V++)R[V]=this.i(V)|k.i(V);return new l(R,this.h|k.h)},t.xor=function(k){for(var b=Math.max(this.g.length,k.g.length),R=[],V=0;V<b;V++)R[V]=this.i(V)^k.i(V);return new l(R,this.h^k.h)};function q(k){for(var b=k.g.length+1,R=[],V=0;V<b;V++)R[V]=k.i(V)<<1|k.i(V-1)>>>31;return new l(R,k.h)}function J(k,b){var R=b>>5;b%=32;for(var V=k.g.length-R,z=[],H=0;H<V;H++)z[H]=0<b?k.i(H+R)>>>b|k.i(H+R+1)<<32-b:k.i(H+R);return new l(z,k.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,g2=r,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=p,l.fromString=y,xo=l}).apply(typeof gw<"u"?gw:typeof self<"u"?self:typeof window<"u"?window:{});var Mh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var y2,Ec,v2,yd,Hg,_2,w2,x2;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,v,E){return h==Array.prototype||h==Object.prototype||(h[v]=E.value),h};function n(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof Mh=="object"&&Mh];for(var v=0;v<h.length;++v){var E=h[v];if(E&&E.Math==Math)return E}throw Error("Cannot find global object")}var r=n(this);function s(h,v){if(v)e:{var E=r;h=h.split(".");for(var I=0;I<h.length-1;I++){var G=h[I];if(!(G in E))break e;E=E[G]}h=h[h.length-1],I=E[h],v=v(I),v!=I&&v!=null&&e(E,h,{configurable:!0,writable:!0,value:v})}}function a(h,v){h instanceof String&&(h+="");var E=0,I=!1,G={next:function(){if(!I&&E<h.length){var ee=E++;return{value:v(ee,h[ee]),done:!1}}return I=!0,{done:!0,value:void 0}}};return G[Symbol.iterator]=function(){return G},G}s("Array.prototype.values",function(h){return h||function(){return a(this,function(v,E){return E})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},u=this||self;function d(h){var v=typeof h;return v=v!="object"?v:h?Array.isArray(h)?"array":v:"null",v=="array"||v=="object"&&typeof h.length=="number"}function p(h){var v=typeof h;return v=="object"&&h!=null||v=="function"}function y(h,v,E){return h.call.apply(h.bind,arguments)}function w(h,v,E){if(!h)throw Error();if(2<arguments.length){var I=Array.prototype.slice.call(arguments,2);return function(){var G=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(G,I),h.apply(v,G)}}return function(){return h.apply(v,arguments)}}function x(h,v,E){return x=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:w,x.apply(null,arguments)}function S(h,v){var E=Array.prototype.slice.call(arguments,1);return function(){var I=E.slice();return I.push.apply(I,arguments),h.apply(this,I)}}function A(h,v){function E(){}E.prototype=v.prototype,h.aa=v.prototype,h.prototype=new E,h.prototype.constructor=h,h.Qb=function(I,G,ee){for(var ce=Array(arguments.length-2),Xe=2;Xe<arguments.length;Xe++)ce[Xe-2]=arguments[Xe];return v.prototype[G].apply(I,ce)}}function C(h){const v=h.length;if(0<v){const E=Array(v);for(let I=0;I<v;I++)E[I]=h[I];return E}return[]}function P(h,v){for(let E=1;E<arguments.length;E++){const I=arguments[E];if(d(I)){const G=h.length||0,ee=I.length||0;h.length=G+ee;for(let ce=0;ce<ee;ce++)h[G+ce]=I[ce]}else h.push(I)}}class ${constructor(v,E){this.i=v,this.j=E,this.h=0,this.g=null}get(){let v;return 0<this.h?(this.h--,v=this.g,this.g=v.next,v.next=null):v=this.i(),v}}function B(h){return/^[\s\xa0]*$/.test(h)}function L(){var h=u.navigator;return h&&(h=h.userAgent)?h:""}function D(h){return D[" "](h),h}D[" "]=function(){};var q=L().indexOf("Gecko")!=-1&&!(L().toLowerCase().indexOf("webkit")!=-1&&L().indexOf("Edge")==-1)&&!(L().indexOf("Trident")!=-1||L().indexOf("MSIE")!=-1)&&L().indexOf("Edge")==-1;function J(h,v,E){for(const I in h)v.call(E,h[I],I,h)}function k(h,v){for(const E in h)v.call(void 0,h[E],E,h)}function b(h){const v={};for(const E in h)v[E]=h[E];return v}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function V(h,v){let E,I;for(let G=1;G<arguments.length;G++){I=arguments[G];for(E in I)h[E]=I[E];for(let ee=0;ee<R.length;ee++)E=R[ee],Object.prototype.hasOwnProperty.call(I,E)&&(h[E]=I[E])}}function z(h){var v=1;h=h.split(":");const E=[];for(;0<v&&h.length;)E.push(h.shift()),v--;return h.length&&E.push(h.join(":")),E}function H(h){u.setTimeout(()=>{throw h},0)}function N(){var h=ue;let v=null;return h.g&&(v=h.g,h.g=h.g.next,h.g||(h.h=null),v.next=null),v}class Le{constructor(){this.h=this.g=null}add(v,E){const I=Qe.get();I.set(v,E),this.h?this.h.next=I:this.g=I,this.h=I}}var Qe=new $(()=>new xe,h=>h.reset());class xe{constructor(){this.next=this.g=this.h=null}set(v,E){this.h=v,this.g=E,this.next=null}reset(){this.next=this.g=this.h=null}}let ke,se=!1,ue=new Le,Y=()=>{const h=u.Promise.resolve(void 0);ke=()=>{h.then(j)}};var j=()=>{for(var h;h=N();){try{h.h.call(h.g)}catch(E){H(E)}var v=Qe;v.j(h),100>v.h&&(v.h++,h.next=v.g,v.g=h)}se=!1};function Q(){this.s=this.s,this.C=this.C}Q.prototype.s=!1,Q.prototype.ma=function(){this.s||(this.s=!0,this.N())},Q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ae(h,v){this.type=h,this.g=this.target=v,this.defaultPrevented=!1}ae.prototype.h=function(){this.defaultPrevented=!0};var de=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var h=!1,v=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const E=()=>{};u.addEventListener("test",E,v),u.removeEventListener("test",E,v)}catch{}return h}();function ge(h,v){if(ae.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var E=this.type=h.type,I=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=v,v=h.relatedTarget){if(q){e:{try{D(v.nodeName);var G=!0;break e}catch{}G=!1}G||(v=null)}}else E=="mouseover"?v=h.fromElement:E=="mouseout"&&(v=h.toElement);this.relatedTarget=v,I?(this.clientX=I.clientX!==void 0?I.clientX:I.pageX,this.clientY=I.clientY!==void 0?I.clientY:I.pageY,this.screenX=I.screenX||0,this.screenY=I.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:we[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&ge.aa.h.call(this)}}A(ge,ae);var we={2:"touch",3:"pen",4:"mouse"};ge.prototype.h=function(){ge.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var fe="closure_listenable_"+(1e6*Math.random()|0),Te=0;function De(h,v,E,I,G){this.listener=h,this.proxy=null,this.src=v,this.type=E,this.capture=!!I,this.ha=G,this.key=++Te,this.da=this.fa=!1}function $e(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function je(h){this.src=h,this.g={},this.h=0}je.prototype.add=function(h,v,E,I,G){var ee=h.toString();h=this.g[ee],h||(h=this.g[ee]=[],this.h++);var ce=mr(h,v,I,G);return-1<ce?(v=h[ce],E||(v.fa=!1)):(v=new De(v,this.src,ee,!!I,G),v.fa=E,h.push(v)),v};function wt(h,v){var E=v.type;if(E in h.g){var I=h.g[E],G=Array.prototype.indexOf.call(I,v,void 0),ee;(ee=0<=G)&&Array.prototype.splice.call(I,G,1),ee&&($e(v),h.g[E].length==0&&(delete h.g[E],h.h--))}}function mr(h,v,E,I){for(var G=0;G<h.length;++G){var ee=h[G];if(!ee.da&&ee.listener==v&&ee.capture==!!E&&ee.ha==I)return G}return-1}var Os="closure_lm_"+(1e6*Math.random()|0),Bo={};function yl(h,v,E,I,G){if(Array.isArray(v)){for(var ee=0;ee<v.length;ee++)yl(h,v[ee],E,I,G);return null}return E=wl(E),h&&h[fe]?h.K(v,E,p(I)?!!I.capture:!1,G):vl(h,v,E,!1,I,G)}function vl(h,v,E,I,G,ee){if(!v)throw Error("Invalid event type");var ce=p(G)?!!G.capture:!!G,Xe=$o(h);if(Xe||(h[Os]=Xe=new je(h)),E=Xe.add(v,E,I,ce,ee),E.proxy)return E;if(I=xu(),E.proxy=I,I.src=h,I.listener=E,h.addEventListener)de||(G=ce),G===void 0&&(G=!1),h.addEventListener(v.toString(),I,G);else if(h.attachEvent)h.attachEvent(oi(v.toString()),I);else if(h.addListener&&h.removeListener)h.addListener(I);else throw Error("addEventListener and attachEvent are unavailable.");return E}function xu(){function h(E){return v.call(h.src,h.listener,E)}const v=_l;return h}function zo(h,v,E,I,G){if(Array.isArray(v))for(var ee=0;ee<v.length;ee++)zo(h,v[ee],E,I,G);else I=p(I)?!!I.capture:!!I,E=wl(E),h&&h[fe]?(h=h.i,v=String(v).toString(),v in h.g&&(ee=h.g[v],E=mr(ee,E,I,G),-1<E&&($e(ee[E]),Array.prototype.splice.call(ee,E,1),ee.length==0&&(delete h.g[v],h.h--)))):h&&(h=$o(h))&&(v=h.g[v.toString()],h=-1,v&&(h=mr(v,E,I,G)),(E=-1<h?v[h]:null)&&si(E))}function si(h){if(typeof h!="number"&&h&&!h.da){var v=h.src;if(v&&v[fe])wt(v.i,h);else{var E=h.type,I=h.proxy;v.removeEventListener?v.removeEventListener(E,I,h.capture):v.detachEvent?v.detachEvent(oi(E),I):v.addListener&&v.removeListener&&v.removeListener(I),(E=$o(v))?(wt(E,h),E.h==0&&(E.src=null,v[Os]=null)):$e(h)}}}function oi(h){return h in Bo?Bo[h]:Bo[h]="on"+h}function _l(h,v){if(h.da)h=!0;else{v=new ge(v,this);var E=h.listener,I=h.ha||h.src;h.fa&&si(h),h=E.call(I,v)}return h}function $o(h){return h=h[Os],h instanceof je?h:null}var Wo="__closure_events_fn_"+(1e9*Math.random()>>>0);function wl(h){return typeof h=="function"?h:(h[Wo]||(h[Wo]=function(v){return h.handleEvent(v)}),h[Wo])}function jt(){Q.call(this),this.i=new je(this),this.M=this,this.F=null}A(jt,Q),jt.prototype[fe]=!0,jt.prototype.removeEventListener=function(h,v,E,I){zo(this,h,v,E,I)};function Nt(h,v){var E,I=h.F;if(I)for(E=[];I;I=I.F)E.push(I);if(h=h.M,I=v.type||v,typeof v=="string")v=new ae(v,h);else if(v instanceof ae)v.target=v.target||h;else{var G=v;v=new ae(I,h),V(v,G)}if(G=!0,E)for(var ee=E.length-1;0<=ee;ee--){var ce=v.g=E[ee];G=ai(ce,I,!0,v)&&G}if(ce=v.g=h,G=ai(ce,I,!0,v)&&G,G=ai(ce,I,!1,v)&&G,E)for(ee=0;ee<E.length;ee++)ce=v.g=E[ee],G=ai(ce,I,!1,v)&&G}jt.prototype.N=function(){if(jt.aa.N.call(this),this.i){var h=this.i,v;for(v in h.g){for(var E=h.g[v],I=0;I<E.length;I++)$e(E[I]);delete h.g[v],h.h--}}this.F=null},jt.prototype.K=function(h,v,E,I){return this.i.add(String(h),v,!1,E,I)},jt.prototype.L=function(h,v,E,I){return this.i.add(String(h),v,!0,E,I)};function ai(h,v,E,I){if(v=h.i.g[String(v)],!v)return!0;v=v.concat();for(var G=!0,ee=0;ee<v.length;++ee){var ce=v[ee];if(ce&&!ce.da&&ce.capture==E){var Xe=ce.listener,Ot=ce.ha||ce.src;ce.fa&&wt(h.i,ce),G=Xe.call(Ot,I)!==!1&&G}}return G&&!I.defaultPrevented}function xl(h,v,E){if(typeof h=="function")E&&(h=x(h,E));else if(h&&typeof h.handleEvent=="function")h=x(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(v)?-1:u.setTimeout(h,v||0)}function Li(h){h.g=xl(()=>{h.g=null,h.i&&(h.i=!1,Li(h))},h.l);const v=h.h;h.h=null,h.m.apply(null,v)}class Ls extends Q{constructor(v,E){super(),this.m=v,this.l=E,this.h=null,this.i=!1,this.g=null}j(v){this.h=arguments,this.g?this.i=!0:Li(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Vs(h){Q.call(this),this.h=h,this.g={}}A(Vs,Q);var El=[];function Tl(h){J(h.g,function(v,E){this.g.hasOwnProperty(E)&&si(v)},h),h.g={}}Vs.prototype.N=function(){Vs.aa.N.call(this),Tl(this)},Vs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Sl=u.JSON.stringify,Il=u.JSON.parse,bl=class{stringify(h){return u.JSON.stringify(h,void 0)}parse(h){return u.JSON.parse(h,void 0)}};function Ms(){}Ms.prototype.h=null;function Ho(h){return h.h||(h.h=h.i())}function qo(){}var Wn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Lr(){ae.call(this,"d")}A(Lr,ae);function Go(){ae.call(this,"c")}A(Go,ae);var Vr={},Pl=null;function Fs(){return Pl=Pl||new jt}Vr.La="serverreachability";function Cl(h){ae.call(this,Vr.La,h)}A(Cl,ae);function li(h){const v=Fs();Nt(v,new Cl(v))}Vr.STAT_EVENT="statevent";function Al(h,v){ae.call(this,Vr.STAT_EVENT,h),this.stat=v}A(Al,ae);function xt(h){const v=Fs();Nt(v,new Al(v,h))}Vr.Ma="timingevent";function Ko(h,v){ae.call(this,Vr.Ma,h),this.size=v}A(Ko,ae);function gr(h,v){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){h()},v)}function Us(){this.g=!0}Us.prototype.xa=function(){this.g=!1};function Bs(h,v,E,I,G,ee){h.info(function(){if(h.g)if(ee)for(var ce="",Xe=ee.split("&"),Ot=0;Ot<Xe.length;Ot++){var We=Xe[Ot].split("=");if(1<We.length){var Ut=We[0];We=We[1];var bt=Ut.split("_");ce=2<=bt.length&&bt[1]=="type"?ce+(Ut+"="+We+"&"):ce+(Ut+"=redacted&")}}else ce=null;else ce=ee;return"XMLHTTP REQ ("+I+") [attempt "+G+"]: "+v+`
`+E+`
`+ce})}function Qo(h,v,E,I,G,ee,ce){h.info(function(){return"XMLHTTP RESP ("+I+") [ attempt "+G+"]: "+v+`
`+E+`
`+ee+" "+ce})}function yr(h,v,E,I){h.info(function(){return"XMLHTTP TEXT ("+v+"): "+tp(h,E)+(I?" "+I:"")})}function kl(h,v){h.info(function(){return"TIMEOUT: "+v})}Us.prototype.info=function(){};function tp(h,v){if(!h.g)return v;if(!v)return null;try{var E=JSON.parse(v);if(E){for(h=0;h<E.length;h++)if(Array.isArray(E[h])){var I=E[h];if(!(2>I.length)){var G=I[1];if(Array.isArray(G)&&!(1>G.length)){var ee=G[0];if(ee!="noop"&&ee!="stop"&&ee!="close")for(var ce=1;ce<G.length;ce++)G[ce]=""}}}}return Sl(E)}catch{return v}}var Yo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Eu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},vr;function zs(){}A(zs,Ms),zs.prototype.g=function(){return new XMLHttpRequest},zs.prototype.i=function(){return{}},vr=new zs;function _r(h,v,E,I){this.j=h,this.i=v,this.l=E,this.R=I||1,this.U=new Vs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Tu}function Tu(){this.i=null,this.g="",this.h=!1}var Rl={},Xo={};function Jo(h,v,E){h.L=1,h.v=Bi(jn(v)),h.m=E,h.P=!0,Dl(h,null)}function Dl(h,v){h.F=Date.now(),et(h),h.A=jn(h.v);var E=h.A,I=h.R;Array.isArray(I)||(I=[String(I)]),$i(E.i,"t",I),h.C=0,E=h.j.J,h.h=new Tu,h.g=Bu(h.j,E?v:null,!h.m),0<h.O&&(h.M=new Ls(x(h.Y,h,h.g),h.O)),v=h.U,E=h.g,I=h.ca;var G="readystatechange";Array.isArray(G)||(G&&(El[0]=G.toString()),G=El);for(var ee=0;ee<G.length;ee++){var ce=yl(E,G[ee],I||v.handleEvent,!1,v.h||v);if(!ce)break;v.g[ce.key]=ce}v=h.H?b(h.H):{},h.m?(h.u||(h.u="POST"),v["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,v)):(h.u="GET",h.g.ea(h.A,h.u,null,v)),li(),Bs(h.i,h.u,h.A,h.l,h.R,h.m)}_r.prototype.ca=function(h){h=h.target;const v=this.M;v&&wn(h)==3?v.j():this.Y(h)},_r.prototype.Y=function(h){try{if(h==this.g)e:{const bt=wn(this.g);var v=this.g.Ba();const Gn=this.g.Z();if(!(3>bt)&&(bt!=3||this.g&&(this.h.h||this.g.oa()||Ml(this.g)))){this.J||bt!=4||v==7||(v==8||0>=Gn?li(3):li(2)),$s(this);var E=this.g.Z();this.X=E;t:if(Su(this)){var I=Ml(this.g);h="";var G=I.length,ee=wn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Hn(this),Vi(this);var ce="";break t}this.h.i=new u.TextDecoder}for(v=0;v<G;v++)this.h.h=!0,h+=this.h.i.decode(I[v],{stream:!(ee&&v==G-1)});I.length=0,this.h.g+=h,this.C=0,ce=this.h.g}else ce=this.g.oa();if(this.o=E==200,Qo(this.i,this.u,this.A,this.l,this.R,bt,E),this.o){if(this.T&&!this.K){t:{if(this.g){var Xe,Ot=this.g;if((Xe=Ot.g?Ot.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(Xe)){var We=Xe;break t}}We=null}if(E=We)yr(this.i,this.l,E,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,jl(this,E);else{this.o=!1,this.s=3,xt(12),Hn(this),Vi(this);break e}}if(this.P){E=!0;let On;for(;!this.J&&this.C<ce.length;)if(On=np(this,ce),On==Xo){bt==4&&(this.s=4,xt(14),E=!1),yr(this.i,this.l,null,"[Incomplete Response]");break}else if(On==Rl){this.s=4,xt(15),yr(this.i,this.l,ce,"[Invalid Chunk]"),E=!1;break}else yr(this.i,this.l,On,null),jl(this,On);if(Su(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),bt!=4||ce.length!=0||this.h.h||(this.s=1,xt(16),E=!1),this.o=this.o&&E,!E)yr(this.i,this.l,ce,"[Invalid Chunked Response]"),Hn(this),Vi(this);else if(0<ce.length&&!this.W){this.W=!0;var Ut=this.j;Ut.g==this&&Ut.ba&&!Ut.M&&(Ut.j.info("Great, no buffering proxy detected. Bytes received: "+ce.length),Ul(Ut),Ut.M=!0,xt(11))}}else yr(this.i,this.l,ce,null),jl(this,ce);bt==4&&Hn(this),this.o&&!this.J&&(bt==4?ca(this.j,this):(this.o=!1,et(this)))}else ia(this.g),E==400&&0<ce.indexOf("Unknown SID")?(this.s=3,xt(12)):(this.s=0,xt(13)),Hn(this),Vi(this)}}}catch{}finally{}};function Su(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function np(h,v){var E=h.C,I=v.indexOf(`
`,E);return I==-1?Xo:(E=Number(v.substring(E,I)),isNaN(E)?Rl:(I+=1,I+E>v.length?Xo:(v=v.slice(I,I+E),h.C=I+E,v)))}_r.prototype.cancel=function(){this.J=!0,Hn(this)};function et(h){h.S=Date.now()+h.I,Iu(h,h.I)}function Iu(h,v){if(h.B!=null)throw Error("WatchDog timer not null");h.B=gr(x(h.ba,h),v)}function $s(h){h.B&&(u.clearTimeout(h.B),h.B=null)}_r.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(kl(this.i,this.A),this.L!=2&&(li(),xt(17)),Hn(this),this.s=2,Vi(this)):Iu(this,this.S-h)};function Vi(h){h.j.G==0||h.J||ca(h.j,h)}function Hn(h){$s(h);var v=h.M;v&&typeof v.ma=="function"&&v.ma(),h.M=null,Tl(h.U),h.g&&(v=h.g,h.g=null,v.abort(),v.ma())}function jl(h,v){try{var E=h.j;if(E.G!=0&&(E.g==h||dn(E.h,h))){if(!h.K&&dn(E.h,h)&&E.G==3){try{var I=E.Da.g.parse(v)}catch{I=null}if(Array.isArray(I)&&I.length==3){var G=I;if(G[0]==0){e:if(!E.u){if(E.g)if(E.g.F+3e3<h.F)la(E),Sr(E);else break e;aa(E),xt(18)}}else E.za=G[1],0<E.za-E.T&&37500>G[2]&&E.F&&E.v==0&&!E.C&&(E.C=gr(x(E.Za,E),6e3));if(1>=Pu(E.h)&&E.ca){try{E.ca()}catch{}E.ca=void 0}}else fi(E,11)}else if((h.K||E.g==h)&&la(E),!B(v))for(G=E.Da.g.parse(v),v=0;v<G.length;v++){let We=G[v];if(E.T=We[0],We=We[1],E.G==2)if(We[0]=="c"){E.K=We[1],E.ia=We[2];const Ut=We[3];Ut!=null&&(E.la=Ut,E.j.info("VER="+E.la));const bt=We[4];bt!=null&&(E.Aa=bt,E.j.info("SVER="+E.Aa));const Gn=We[5];Gn!=null&&typeof Gn=="number"&&0<Gn&&(I=1.5*Gn,E.L=I,E.j.info("backChannelRequestTimeoutMs_="+I)),I=E;const On=h.g;if(On){const Ys=On.g?On.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ys){var ee=I.h;ee.g||Ys.indexOf("spdy")==-1&&Ys.indexOf("quic")==-1&&Ys.indexOf("h2")==-1||(ee.j=ee.l,ee.g=new Set,ee.h&&(Nl(ee,ee.h),ee.h=null))}if(I.D){const ha=On.g?On.g.getResponseHeader("X-HTTP-Session-Id"):null;ha&&(I.ya=ha,Ze(I.I,I.D,ha))}}E.G=3,E.l&&E.l.ua(),E.ba&&(E.R=Date.now()-h.F,E.j.info("Handshake RTT: "+E.R+"ms")),I=E;var ce=h;if(I.qa=Uu(I,I.J?I.ia:null,I.W),ce.K){Cu(I.h,ce);var Xe=ce,Ot=I.L;Ot&&(Xe.I=Ot),Xe.B&&($s(Xe),et(Xe)),I.g=ce}else Qs(I);0<E.i.length&&Br(E)}else We[0]!="stop"&&We[0]!="close"||fi(E,7);else E.G==3&&(We[0]=="stop"||We[0]=="close"?We[0]=="stop"?fi(E,7):Gt(E):We[0]!="noop"&&E.l&&E.l.ta(We),E.v=0)}}li(4)}catch{}}var bu=class{constructor(h,v){this.g=h,this.map=v}};function Ws(h){this.l=h||10,u.PerformanceNavigationTiming?(h=u.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Dn(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function Pu(h){return h.h?1:h.g?h.g.size:0}function dn(h,v){return h.h?h.h==v:h.g?h.g.has(v):!1}function Nl(h,v){h.g?h.g.add(v):h.h=v}function Cu(h,v){h.h&&h.h==v?h.h=null:h.g&&h.g.has(v)&&h.g.delete(v)}Ws.prototype.cancel=function(){if(this.i=Au(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function Au(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let v=h.i;for(const E of h.g.values())v=v.concat(E.D);return v}return C(h.i)}function Zo(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(d(h)){for(var v=[],E=h.length,I=0;I<E;I++)v.push(h[I]);return v}v=[],E=0;for(I in h)v[E++]=h[I];return v}function ea(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(d(h)||typeof h=="string"){var v=[];h=h.length;for(var E=0;E<h;E++)v.push(E);return v}v=[],E=0;for(const I in h)v[E++]=I;return v}}}function Mi(h,v){if(h.forEach&&typeof h.forEach=="function")h.forEach(v,void 0);else if(d(h)||typeof h=="string")Array.prototype.forEach.call(h,v,void 0);else for(var E=ea(h),I=Zo(h),G=I.length,ee=0;ee<G;ee++)v.call(void 0,I[ee],E&&E[ee],h)}var Hs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rp(h,v){if(h){h=h.split("&");for(var E=0;E<h.length;E++){var I=h[E].indexOf("="),G=null;if(0<=I){var ee=h[E].substring(0,I);G=h[E].substring(I+1)}else ee=h[E];v(ee,G?decodeURIComponent(G.replace(/\+/g," ")):"")}}}function ci(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof ci){this.h=h.h,qs(this,h.j),this.o=h.o,this.g=h.g,Fi(this,h.s),this.l=h.l;var v=h.i,E=new Mr;E.i=v.i,v.g&&(E.g=new Map(v.g),E.h=v.h),Ui(this,E),this.m=h.m}else h&&(v=String(h).match(Hs))?(this.h=!1,qs(this,v[1]||"",!0),this.o=Be(v[2]||""),this.g=Be(v[3]||"",!0),Fi(this,v[4]),this.l=Be(v[5]||"",!0),Ui(this,v[6]||"",!0),this.m=Be(v[7]||"")):(this.h=!1,this.i=new Mr(null,this.h))}ci.prototype.toString=function(){var h=[],v=this.j;v&&h.push(zi(v,ta,!0),":");var E=this.g;return(E||v=="file")&&(h.push("//"),(v=this.o)&&h.push(zi(v,ta,!0),"@"),h.push(encodeURIComponent(String(E)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),E=this.s,E!=null&&h.push(":",String(E))),(E=this.l)&&(this.g&&E.charAt(0)!="/"&&h.push("/"),h.push(zi(E,E.charAt(0)=="/"?Du:Ru,!0))),(E=this.i.toString())&&h.push("?",E),(E=this.m)&&h.push("#",zi(E,Ol)),h.join("")};function jn(h){return new ci(h)}function qs(h,v,E){h.j=E?Be(v,!0):v,h.j&&(h.j=h.j.replace(/:$/,""))}function Fi(h,v){if(v){if(v=Number(v),isNaN(v)||0>v)throw Error("Bad port number "+v);h.s=v}else h.s=null}function Ui(h,v,E){v instanceof Mr?(h.i=v,Fr(h.i,h.h)):(E||(v=zi(v,ju)),h.i=new Mr(v,h.h))}function Ze(h,v,E){h.i.set(v,E)}function Bi(h){return Ze(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function Be(h,v){return h?v?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function zi(h,v,E){return typeof h=="string"?(h=encodeURI(h).replace(v,ku),E&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function ku(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var ta=/[#\/\?@]/g,Ru=/[#\?:]/g,Du=/[#\?]/g,ju=/[#\?@]/g,Ol=/#/g;function Mr(h,v){this.h=this.g=null,this.i=h||null,this.j=!!v}function qt(h){h.g||(h.g=new Map,h.h=0,h.i&&rp(h.i,function(v,E){h.add(decodeURIComponent(v.replace(/\+/g," ")),E)}))}t=Mr.prototype,t.add=function(h,v){qt(this),this.i=null,h=qn(this,h);var E=this.g.get(h);return E||this.g.set(h,E=[]),E.push(v),this.h+=1,this};function wr(h,v){qt(h),v=qn(h,v),h.g.has(v)&&(h.i=null,h.h-=h.g.get(v).length,h.g.delete(v))}function xr(h,v){return qt(h),v=qn(h,v),h.g.has(v)}t.forEach=function(h,v){qt(this),this.g.forEach(function(E,I){E.forEach(function(G){h.call(v,G,I,this)},this)},this)},t.na=function(){qt(this);const h=Array.from(this.g.values()),v=Array.from(this.g.keys()),E=[];for(let I=0;I<v.length;I++){const G=h[I];for(let ee=0;ee<G.length;ee++)E.push(v[I])}return E},t.V=function(h){qt(this);let v=[];if(typeof h=="string")xr(this,h)&&(v=v.concat(this.g.get(qn(this,h))));else{h=Array.from(this.g.values());for(let E=0;E<h.length;E++)v=v.concat(h[E])}return v},t.set=function(h,v){return qt(this),this.i=null,h=qn(this,h),xr(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[v]),this.h+=1,this},t.get=function(h,v){return h?(h=this.V(h),0<h.length?String(h[0]):v):v};function $i(h,v,E){wr(h,v),0<E.length&&(h.i=null,h.g.set(qn(h,v),C(E)),h.h+=E.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],v=Array.from(this.g.keys());for(var E=0;E<v.length;E++){var I=v[E];const ee=encodeURIComponent(String(I)),ce=this.V(I);for(I=0;I<ce.length;I++){var G=ee;ce[I]!==""&&(G+="="+encodeURIComponent(String(ce[I]))),h.push(G)}}return this.i=h.join("&")};function qn(h,v){return v=String(v),h.j&&(v=v.toLowerCase()),v}function Fr(h,v){v&&!h.j&&(qt(h),h.i=null,h.g.forEach(function(E,I){var G=I.toLowerCase();I!=G&&(wr(this,I),$i(this,G,E))},h)),h.j=v}function ip(h,v){const E=new Us;if(u.Image){const I=new Image;I.onload=S(_n,E,"TestLoadImage: loaded",!0,v,I),I.onerror=S(_n,E,"TestLoadImage: error",!1,v,I),I.onabort=S(_n,E,"TestLoadImage: abort",!1,v,I),I.ontimeout=S(_n,E,"TestLoadImage: timeout",!1,v,I),u.setTimeout(function(){I.ontimeout&&I.ontimeout()},1e4),I.src=h}else v(!1)}function Nu(h,v){const E=new Us,I=new AbortController,G=setTimeout(()=>{I.abort(),_n(E,"TestPingServer: timeout",!1,v)},1e4);fetch(h,{signal:I.signal}).then(ee=>{clearTimeout(G),ee.ok?_n(E,"TestPingServer: ok",!0,v):_n(E,"TestPingServer: server error",!1,v)}).catch(()=>{clearTimeout(G),_n(E,"TestPingServer: error",!1,v)})}function _n(h,v,E,I,G){try{G&&(G.onload=null,G.onerror=null,G.onabort=null,G.ontimeout=null),I(E)}catch{}}function sp(){this.g=new bl}function Ou(h,v,E){const I=E||"";try{Mi(h,function(G,ee){let ce=G;p(G)&&(ce=Sl(G)),v.push(I+ee+"="+encodeURIComponent(ce))})}catch(G){throw v.push(I+"type="+encodeURIComponent("_badmap")),G}}function ui(h){this.l=h.Ub||null,this.j=h.eb||!1}A(ui,Ms),ui.prototype.g=function(){return new Gs(this.l,this.j)},ui.prototype.i=function(h){return function(){return h}}({});function Gs(h,v){jt.call(this),this.D=h,this.o=v,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(Gs,jt),t=Gs.prototype,t.open=function(h,v){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=v,this.readyState=1,Tr(this)},t.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const v={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(v.body=h),(this.D||u).fetch(new Request(this.A,v)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Er(this)),this.readyState=0},t.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,Tr(this)),this.g&&(this.readyState=3,Tr(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Lu(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function Lu(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}t.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var v=h.value?h.value:new Uint8Array(0);(v=this.v.decode(v,{stream:!h.done}))&&(this.response=this.responseText+=v)}h.done?Er(this):Tr(this),this.readyState==3&&Lu(this)}},t.Ra=function(h){this.g&&(this.response=this.responseText=h,Er(this))},t.Qa=function(h){this.g&&(this.response=h,Er(this))},t.ga=function(){this.g&&Er(this)};function Er(h){h.readyState=4,h.l=null,h.j=null,h.v=null,Tr(h)}t.setRequestHeader=function(h,v){this.u.append(h,v)},t.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],v=this.h.entries();for(var E=v.next();!E.done;)E=E.value,h.push(E[0]+": "+E[1]),E=v.next();return h.join(`\r
`)};function Tr(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(Gs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function hi(h){let v="";return J(h,function(E,I){v+=I,v+=":",v+=E,v+=`\r
`}),v}function Wi(h,v,E){e:{for(I in E){var I=!1;break e}I=!0}I||(E=hi(E),typeof h=="string"?E!=null&&encodeURIComponent(String(E)):Ze(h,v,E))}function ot(h){jt.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(ot,jt);var op=/^https?$/i,Ll=["POST","PUT"];t=ot.prototype,t.Ha=function(h){this.J=h},t.ea=function(h,v,E,I){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);v=v?v.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():vr.g(),this.v=this.o?Ho(this.o):Ho(vr),this.g.onreadystatechange=x(this.Ea,this);try{this.B=!0,this.g.open(v,String(h),!0),this.B=!1}catch(ee){Ks(this,ee);return}if(h=E||"",E=new Map(this.headers),I)if(Object.getPrototypeOf(I)===Object.prototype)for(var G in I)E.set(G,I[G]);else if(typeof I.keys=="function"&&typeof I.get=="function")for(const ee of I.keys())E.set(ee,I.get(ee));else throw Error("Unknown input type for opt_headers: "+String(I));I=Array.from(E.keys()).find(ee=>ee.toLowerCase()=="content-type"),G=u.FormData&&h instanceof u.FormData,!(0<=Array.prototype.indexOf.call(Ll,v,void 0))||I||G||E.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[ee,ce]of E)this.g.setRequestHeader(ee,ce);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ra(this),this.u=!0,this.g.send(h),this.u=!1}catch(ee){Ks(this,ee)}};function Ks(h,v){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=v,h.m=5,na(h),Nn(h)}function na(h){h.A||(h.A=!0,Nt(h,"complete"),Nt(h,"error"))}t.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,Nt(this,"complete"),Nt(this,"abort"),Nn(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Nn(this,!0)),ot.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Vl(this):this.bb())},t.bb=function(){Vl(this)};function Vl(h){if(h.h&&typeof l<"u"&&(!h.v[1]||wn(h)!=4||h.Z()!=2)){if(h.u&&wn(h)==4)xl(h.Ea,0,h);else if(Nt(h,"readystatechange"),wn(h)==4){h.h=!1;try{const ce=h.Z();e:switch(ce){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var v=!0;break e;default:v=!1}var E;if(!(E=v)){var I;if(I=ce===0){var G=String(h.D).match(Hs)[1]||null;!G&&u.self&&u.self.location&&(G=u.self.location.protocol.slice(0,-1)),I=!op.test(G?G.toLowerCase():"")}E=I}if(E)Nt(h,"complete"),Nt(h,"success");else{h.m=6;try{var ee=2<wn(h)?h.g.statusText:""}catch{ee=""}h.l=ee+" ["+h.Z()+"]",na(h)}}finally{Nn(h)}}}}function Nn(h,v){if(h.g){ra(h);const E=h.g,I=h.v[0]?()=>{}:null;h.g=null,h.v=null,v||Nt(h,"ready");try{E.onreadystatechange=I}catch{}}}function ra(h){h.I&&(u.clearTimeout(h.I),h.I=null)}t.isActive=function(){return!!this.g};function wn(h){return h.g?h.g.readyState:0}t.Z=function(){try{return 2<wn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(h){if(this.g){var v=this.g.responseText;return h&&v.indexOf(h)==0&&(v=v.substring(h.length)),Il(v)}};function Ml(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function ia(h){const v={};h=(h.g&&2<=wn(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let I=0;I<h.length;I++){if(B(h[I]))continue;var E=z(h[I]);const G=E[0];if(E=E[1],typeof E!="string")continue;E=E.trim();const ee=v[G]||[];v[G]=ee,ee.push(E)}k(v,function(I){return I.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ur(h,v,E){return E&&E.internalChannelParams&&E.internalChannelParams[h]||v}function Fl(h){this.Aa=0,this.i=[],this.j=new Us,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ur("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ur("baseRetryDelayMs",5e3,h),this.cb=Ur("retryDelaySeedMs",1e4,h),this.Wa=Ur("forwardChannelMaxRetries",2,h),this.wa=Ur("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new Ws(h&&h.concurrentRequestLimit),this.Da=new sp,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Fl.prototype,t.la=8,t.G=1,t.connect=function(h,v,E,I){xt(0),this.W=h,this.H=v||{},E&&I!==void 0&&(this.H.OSID=E,this.H.OAID=I),this.F=this.X,this.I=Uu(this,null,this.W),Br(this)};function Gt(h){if(sa(h),h.G==3){var v=h.U++,E=jn(h.I);if(Ze(E,"SID",h.K),Ze(E,"RID",v),Ze(E,"TYPE","terminate"),di(h,E),v=new _r(h,h.j,v),v.L=2,v.v=Bi(jn(E)),E=!1,u.navigator&&u.navigator.sendBeacon)try{E=u.navigator.sendBeacon(v.v.toString(),"")}catch{}!E&&u.Image&&(new Image().src=v.v,E=!0),E||(v.g=Bu(v.j,null),v.g.ea(v.v)),v.F=Date.now(),et(v)}Fu(h)}function Sr(h){h.g&&(Ul(h),h.g.cancel(),h.g=null)}function sa(h){Sr(h),h.u&&(u.clearTimeout(h.u),h.u=null),la(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&u.clearTimeout(h.s),h.s=null)}function Br(h){if(!Dn(h.h)&&!h.s){h.s=!0;var v=h.Ga;ke||Y(),se||(ke(),se=!0),ue.add(v,h),h.B=0}}function ap(h,v){return Pu(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=v.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=gr(x(h.Ga,h,v),Mu(h,h.B)),h.B++,!0)}t.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const G=new _r(this,this.j,h);let ee=this.o;if(this.S&&(ee?(ee=b(ee),V(ee,this.S)):ee=this.S),this.m!==null||this.O||(G.H=ee,ee=null),this.P)e:{for(var v=0,E=0;E<this.i.length;E++){t:{var I=this.i[E];if("__data__"in I.map&&(I=I.map.__data__,typeof I=="string")){I=I.length;break t}I=void 0}if(I===void 0)break;if(v+=I,4096<v){v=E;break e}if(v===4096||E===this.i.length-1){v=E+1;break e}}v=1e3}else v=1e3;v=Hi(this,G,v),E=jn(this.I),Ze(E,"RID",h),Ze(E,"CVER",22),this.D&&Ze(E,"X-HTTP-Session-Id",this.D),di(this,E),ee&&(this.O?v="headers="+encodeURIComponent(String(hi(ee)))+"&"+v:this.m&&Wi(E,this.m,ee)),Nl(this.h,G),this.Ua&&Ze(E,"TYPE","init"),this.P?(Ze(E,"$req",v),Ze(E,"SID","null"),G.T=!0,Jo(G,E,null)):Jo(G,E,v),this.G=2}}else this.G==3&&(h?oa(this,h):this.i.length==0||Dn(this.h)||oa(this))};function oa(h,v){var E;v?E=v.l:E=h.U++;const I=jn(h.I);Ze(I,"SID",h.K),Ze(I,"RID",E),Ze(I,"AID",h.T),di(h,I),h.m&&h.o&&Wi(I,h.m,h.o),E=new _r(h,h.j,E,h.B+1),h.m===null&&(E.H=h.o),v&&(h.i=v.D.concat(h.i)),v=Hi(h,E,1e3),E.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),Nl(h.h,E),Jo(E,I,v)}function di(h,v){h.H&&J(h.H,function(E,I){Ze(v,I,E)}),h.l&&Mi({},function(E,I){Ze(v,I,E)})}function Hi(h,v,E){E=Math.min(h.i.length,E);var I=h.l?x(h.l.Na,h.l,h):null;e:{var G=h.i;let ee=-1;for(;;){const ce=["count="+E];ee==-1?0<E?(ee=G[0].g,ce.push("ofs="+ee)):ee=0:ce.push("ofs="+ee);let Xe=!0;for(let Ot=0;Ot<E;Ot++){let We=G[Ot].g;const Ut=G[Ot].map;if(We-=ee,0>We)ee=Math.max(0,G[Ot].g-100),Xe=!1;else try{Ou(Ut,ce,"req"+We+"_")}catch{I&&I(Ut)}}if(Xe){I=ce.join("&");break e}}}return h=h.i.splice(0,E),v.D=h,I}function Qs(h){if(!h.g&&!h.u){h.Y=1;var v=h.Fa;ke||Y(),se||(ke(),se=!0),ue.add(v,h),h.v=0}}function aa(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=gr(x(h.Fa,h),Mu(h,h.v)),h.v++,!0)}t.Fa=function(){if(this.u=null,Vu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=gr(x(this.ab,this),h)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,xt(10),Sr(this),Vu(this))};function Ul(h){h.A!=null&&(u.clearTimeout(h.A),h.A=null)}function Vu(h){h.g=new _r(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var v=jn(h.qa);Ze(v,"RID","rpc"),Ze(v,"SID",h.K),Ze(v,"AID",h.T),Ze(v,"CI",h.F?"0":"1"),!h.F&&h.ja&&Ze(v,"TO",h.ja),Ze(v,"TYPE","xmlhttp"),di(h,v),h.m&&h.o&&Wi(v,h.m,h.o),h.L&&(h.g.I=h.L);var E=h.g;h=h.ia,E.L=1,E.v=Bi(jn(v)),E.m=null,E.P=!0,Dl(E,h)}t.Za=function(){this.C!=null&&(this.C=null,Sr(this),aa(this),xt(19))};function la(h){h.C!=null&&(u.clearTimeout(h.C),h.C=null)}function ca(h,v){var E=null;if(h.g==v){la(h),Ul(h),h.g=null;var I=2}else if(dn(h.h,v))E=v.D,Cu(h.h,v),I=1;else return;if(h.G!=0){if(v.o)if(I==1){E=v.m?v.m.length:0,v=Date.now()-v.F;var G=h.B;I=Fs(),Nt(I,new Ko(I,E)),Br(h)}else Qs(h);else if(G=v.s,G==3||G==0&&0<v.X||!(I==1&&ap(h,v)||I==2&&aa(h)))switch(E&&0<E.length&&(v=h.h,v.i=v.i.concat(E)),G){case 1:fi(h,5);break;case 4:fi(h,10);break;case 3:fi(h,6);break;default:fi(h,2)}}}function Mu(h,v){let E=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(E*=2),E*v}function fi(h,v){if(h.j.info("Error code "+v),v==2){var E=x(h.fb,h),I=h.Xa;const G=!I;I=new ci(I||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||qs(I,"https"),Bi(I),G?ip(I.toString(),E):Nu(I.toString(),E)}else xt(2);h.G=0,h.l&&h.l.sa(v),Fu(h),sa(h)}t.fb=function(h){h?(this.j.info("Successfully pinged google.com"),xt(2)):(this.j.info("Failed to ping google.com"),xt(1))};function Fu(h){if(h.G=0,h.ka=[],h.l){const v=Au(h.h);(v.length!=0||h.i.length!=0)&&(P(h.ka,v),P(h.ka,h.i),h.h.i.length=0,C(h.i),h.i.length=0),h.l.ra()}}function Uu(h,v,E){var I=E instanceof ci?jn(E):new ci(E);if(I.g!="")v&&(I.g=v+"."+I.g),Fi(I,I.s);else{var G=u.location;I=G.protocol,v=v?v+"."+G.hostname:G.hostname,G=+G.port;var ee=new ci(null);I&&qs(ee,I),v&&(ee.g=v),G&&Fi(ee,G),E&&(ee.l=E),I=ee}return E=h.D,v=h.ya,E&&v&&Ze(I,E,v),Ze(I,"VER",h.la),di(h,I),I}function Bu(h,v,E){if(v&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return v=h.Ca&&!h.pa?new ot(new ui({eb:E})):new ot(h.pa),v.Ha(h.J),v}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Bl(){}t=Bl.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ua(){}ua.prototype.g=function(h,v){return new fn(h,v)};function fn(h,v){jt.call(this),this.g=new Fl(v),this.l=h,this.h=v&&v.messageUrlParams||null,h=v&&v.messageHeaders||null,v&&v.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=v&&v.initMessageHeaders||null,v&&v.messageContentType&&(h?h["X-WebChannel-Content-Type"]=v.messageContentType:h={"X-WebChannel-Content-Type":v.messageContentType}),v&&v.va&&(h?h["X-WebChannel-Client-Profile"]=v.va:h={"X-WebChannel-Client-Profile":v.va}),this.g.S=h,(h=v&&v.Sb)&&!B(h)&&(this.g.m=h),this.v=v&&v.supportsCrossDomainXhr||!1,this.u=v&&v.sendRawJson||!1,(v=v&&v.httpSessionIdParam)&&!B(v)&&(this.g.D=v,h=this.h,h!==null&&v in h&&(h=this.h,v in h&&delete h[v])),this.j=new zr(this)}A(fn,jt),fn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},fn.prototype.close=function(){Gt(this.g)},fn.prototype.o=function(h){var v=this.g;if(typeof h=="string"){var E={};E.__data__=h,h=E}else this.u&&(E={},E.__data__=Sl(h),h=E);v.i.push(new bu(v.Ya++,h)),v.G==3&&Br(v)},fn.prototype.N=function(){this.g.l=null,delete this.j,Gt(this.g),delete this.g,fn.aa.N.call(this)};function zu(h){Lr.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var v=h.__sm__;if(v){e:{for(const E in v){h=E;break e}h=void 0}(this.i=h)&&(h=this.i,v=v!==null&&h in v?v[h]:void 0),this.data=v}else this.data=h}A(zu,Lr);function $u(){Go.call(this),this.status=1}A($u,Go);function zr(h){this.g=h}A(zr,Bl),zr.prototype.ua=function(){Nt(this.g,"a")},zr.prototype.ta=function(h){Nt(this.g,new zu(h))},zr.prototype.sa=function(h){Nt(this.g,new $u)},zr.prototype.ra=function(){Nt(this.g,"b")},ua.prototype.createWebChannel=ua.prototype.g,fn.prototype.send=fn.prototype.o,fn.prototype.open=fn.prototype.m,fn.prototype.close=fn.prototype.close,x2=function(){return new ua},w2=function(){return Fs()},_2=Vr,Hg={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Yo.NO_ERROR=0,Yo.TIMEOUT=8,Yo.HTTP_ERROR=6,yd=Yo,Eu.COMPLETE="complete",v2=Eu,qo.EventType=Wn,Wn.OPEN="a",Wn.CLOSE="b",Wn.ERROR="c",Wn.MESSAGE="d",jt.prototype.listen=jt.prototype.K,Ec=qo,ot.prototype.listenOnce=ot.prototype.L,ot.prototype.getLastError=ot.prototype.Ka,ot.prototype.getLastErrorCode=ot.prototype.Ba,ot.prototype.getStatus=ot.prototype.Z,ot.prototype.getResponseJson=ot.prototype.Oa,ot.prototype.getResponseText=ot.prototype.oa,ot.prototype.send=ot.prototype.ea,ot.prototype.setWithCredentials=ot.prototype.Ha,y2=ot}).apply(typeof Mh<"u"?Mh:typeof self<"u"?self:typeof window<"u"?window:{});const yw="@firebase/firestore";/**
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
 */const bo=new mf("@firebase/firestore");function dc(){return bo.logLevel}function ve(t,...e){if(bo.logLevel<=ze.DEBUG){const n=e.map(Yy);bo.debug(`Firestore (${fl}): ${t}`,...n)}}function Di(t,...e){if(bo.logLevel<=ze.ERROR){const n=e.map(Yy);bo.error(`Firestore (${fl}): ${t}`,...n)}}function Ka(t,...e){if(bo.logLevel<=ze.WARN){const n=e.map(Yy);bo.warn(`Firestore (${fl}): ${t}`,...n)}}function Yy(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function Re(t="Unexpected state"){const e=`FIRESTORE (${fl}) INTERNAL ASSERTION FAILED: `+t;throw Di(e),new Error(e)}function Je(t,e){t||Re()}function Oe(t,e){return t}/**
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
 */const ie={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ee extends pr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ws{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class E2{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class $3{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ln.UNAUTHENTICATED))}shutdown(){}}class W3{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class H3{constructor(e){this.t=e,this.currentUser=ln.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Je(this.o===void 0);let r=this.i;const s=d=>this.i!==r?(r=this.i,n(d)):Promise.resolve();let a=new ws;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new ws,e.enqueueRetryable(()=>s(this.currentUser))};const l=()=>{const d=a;e.enqueueRetryable(async()=>{await d.promise,await s(this.currentUser)})},u=d=>{ve("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(d=>u(d)),setTimeout(()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?u(d):(ve("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new ws)}},0),l()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ve("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Je(typeof r.accessToken=="string"),new E2(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Je(e===null||typeof e=="string"),new ln(e)}}class q3{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ln.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class G3{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new q3(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ln.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class K3{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Q3{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Je(this.o===void 0);const r=a=>{a.error!=null&&ve("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const l=a.token!==this.R;return this.R=a.token,ve("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?n(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable(()=>r(a))};const s=a=>{ve("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(a=>s(a)),setTimeout(()=>{if(!this.appCheck){const a=this.A.getImmediate({optional:!0});a?s(a):ve("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Je(typeof n.token=="string"),this.R=n.token,new K3(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Y3(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class T2{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Y3(40);for(let a=0;a<s.length;++a)r.length<20&&s[a]<n&&(r+=e.charAt(s[a]%e.length))}return r}}function Ke(t,e){return t<e?-1:t>e?1:0}function Qa(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class Ft{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Ee(ie.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Ee(ie.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Ee(ie.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Ee(ie.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ft.fromMillis(Date.now())}static fromDate(e){return Ft.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ft(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ke(this.nanoseconds,e.nanoseconds):Ke(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Ne{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Ne(e)}static min(){return new Ne(new Ft(0,0))}static max(){return new Ne(new Ft(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class qc{constructor(e,n,r){n===void 0?n=0:n>e.length&&Re(),r===void 0?r=e.length-n:r>e.length-n&&Re(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return qc.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof qc?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const a=e.get(s),l=n.get(s);if(a<l)return-1;if(a>l)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class lt extends qc{construct(e,n,r){return new lt(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Ee(ie.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new lt(n)}static emptyPath(){return new lt([])}}const X3=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Jt extends qc{construct(e,n,r){return new Jt(e,n,r)}static isValidIdentifier(e){return X3.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Jt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Jt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const a=()=>{if(r.length===0)throw new Ee(ie.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let l=!1;for(;s<e.length;){const u=e[s];if(u==="\\"){if(s+1===e.length)throw new Ee(ie.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const d=e[s+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new Ee(ie.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=d,s+=2}else u==="`"?(l=!l,s++):u!=="."||l?(r+=u,s++):(a(),s++)}if(a(),l)throw new Ee(ie.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Jt(n)}static emptyPath(){return new Jt([])}}/**
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
 */class be{constructor(e){this.path=e}static fromPath(e){return new be(lt.fromString(e))}static fromName(e){return new be(lt.fromString(e).popFirst(5))}static empty(){return new be(lt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&lt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return lt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new be(new lt(e.slice()))}}function J3(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Ne.fromTimestamp(r===1e9?new Ft(n+1,0):new Ft(n,r));return new Is(s,be.empty(),e)}function Z3(t){return new Is(t.readTime,t.key,-1)}class Is{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Is(Ne.min(),be.empty(),-1)}static max(){return new Is(Ne.max(),be.empty(),-1)}}function e5(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=be.comparator(t.documentKey,e.documentKey),n!==0?n:Ke(t.largestBatchId,e.largestBatchId))}/**
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
 */const t5="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class n5{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function au(t){if(t.code!==ie.FAILED_PRECONDITION||t.message!==t5)throw t;ve("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class re{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Re(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new re((r,s)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(r,s)},this.catchCallback=a=>{this.wrapFailure(n,a).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof re?n:re.resolve(n)}catch(n){return re.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):re.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):re.reject(n)}static resolve(e){return new re((n,r)=>{n(e)})}static reject(e){return new re((n,r)=>{r(e)})}static waitFor(e){return new re((n,r)=>{let s=0,a=0,l=!1;e.forEach(u=>{++s,u.next(()=>{++a,l&&a===s&&n()},d=>r(d))}),l=!0,a===s&&n()})}static or(e){let n=re.resolve(!1);for(const r of e)n=n.next(s=>s?re.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,a)=>{r.push(n.call(this,s,a))}),this.waitFor(r)}static mapArray(e,n){return new re((r,s)=>{const a=e.length,l=new Array(a);let u=0;for(let d=0;d<a;d++){const p=d;n(e[p]).next(y=>{l[p]=y,++u,u===a&&r(l)},y=>s(y))}})}static doWhile(e,n){return new re((r,s)=>{const a=()=>{e()===!0?n().next(()=>{a()},s):r()};a()})}}function r5(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function lu(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Xy{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Xy.oe=-1;function xf(t){return t==null}function Ud(t){return t===0&&1/t==-1/0}function i5(t){return typeof t=="number"&&Number.isInteger(t)&&!Ud(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function vw(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Vo(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function S2(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class gt{constructor(e,n){this.comparator=e,this.root=n||Xt.EMPTY}insert(e,n){return new gt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Xt.BLACK,null,null))}remove(e){return new gt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Fh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Fh(this.root,e,this.comparator,!1)}getReverseIterator(){return new Fh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Fh(this.root,e,this.comparator,!0)}}class Fh{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=n?r(e.key,n):1,n&&s&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Xt{constructor(e,n,r,s,a){this.key=e,this.value=n,this.color=r??Xt.RED,this.left=s??Xt.EMPTY,this.right=a??Xt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,a){return new Xt(e??this.key,n??this.value,r??this.color,s??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const a=r(e,s.key);return s=a<0?s.copy(null,null,null,s.left.insert(e,n,r),null):a===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Xt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Xt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Xt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Xt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Re();const e=this.left.check();if(e!==this.right.check())throw Re();return e+(this.isRed()?0:1)}}Xt.EMPTY=null,Xt.RED=!0,Xt.BLACK=!1;Xt.EMPTY=new class{constructor(){this.size=0}get key(){throw Re()}get value(){throw Re()}get color(){throw Re()}get left(){throw Re()}get right(){throw Re()}copy(e,n,r,s,a){return this}insert(e,n,r){return new Xt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Zt{constructor(e){this.comparator=e,this.data=new gt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new _w(this.data.getIterator())}getIteratorFrom(e){return new _w(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Zt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,a=r.getNext().key;if(this.comparator(s,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Zt(this.comparator);return n.data=e,n}}class _w{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Un{constructor(e){this.fields=e,e.sort(Jt.comparator)}static empty(){return new Un([])}unionWith(e){let n=new Zt(Jt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Un(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Qa(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class I2 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class en{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new I2("Invalid base64 string: "+a):a}}(e);return new en(n)}static fromUint8Array(e){const n=function(s){let a="";for(let l=0;l<s.length;++l)a+=String.fromCharCode(s[l]);return a}(e);return new en(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ke(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}en.EMPTY_BYTE_STRING=new en("");const s5=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function bs(t){if(Je(!!t),typeof t=="string"){let e=0;const n=s5.exec(t);if(Je(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:St(t.seconds),nanos:St(t.nanos)}}function St(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Po(t){return typeof t=="string"?en.fromBase64String(t):en.fromUint8Array(t)}/**
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
 */function Jy(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Zy(t){const e=t.mapValue.fields.__previous_value__;return Jy(e)?Zy(e):e}function Gc(t){const e=bs(t.mapValue.fields.__local_write_time__.timestampValue);return new Ft(e.seconds,e.nanos)}/**
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
 */class o5{constructor(e,n,r,s,a,l,u,d,p){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=a,this.forceLongPolling=l,this.autoDetectLongPolling=u,this.longPollingOptions=d,this.useFetchStreams=p}}class Kc{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Kc("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Kc&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Uh={mapValue:{}};function Co(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Jy(t)?4:l5(t)?9007199254740991:a5(t)?10:11:Re()}function ti(t,e){if(t===e)return!0;const n=Co(t);if(n!==Co(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Gc(t).isEqual(Gc(e));case 3:return function(s,a){if(typeof s.timestampValue=="string"&&typeof a.timestampValue=="string"&&s.timestampValue.length===a.timestampValue.length)return s.timestampValue===a.timestampValue;const l=bs(s.timestampValue),u=bs(a.timestampValue);return l.seconds===u.seconds&&l.nanos===u.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,a){return Po(s.bytesValue).isEqual(Po(a.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,a){return St(s.geoPointValue.latitude)===St(a.geoPointValue.latitude)&&St(s.geoPointValue.longitude)===St(a.geoPointValue.longitude)}(t,e);case 2:return function(s,a){if("integerValue"in s&&"integerValue"in a)return St(s.integerValue)===St(a.integerValue);if("doubleValue"in s&&"doubleValue"in a){const l=St(s.doubleValue),u=St(a.doubleValue);return l===u?Ud(l)===Ud(u):isNaN(l)&&isNaN(u)}return!1}(t,e);case 9:return Qa(t.arrayValue.values||[],e.arrayValue.values||[],ti);case 10:case 11:return function(s,a){const l=s.mapValue.fields||{},u=a.mapValue.fields||{};if(vw(l)!==vw(u))return!1;for(const d in l)if(l.hasOwnProperty(d)&&(u[d]===void 0||!ti(l[d],u[d])))return!1;return!0}(t,e);default:return Re()}}function Qc(t,e){return(t.values||[]).find(n=>ti(n,e))!==void 0}function Ya(t,e){if(t===e)return 0;const n=Co(t),r=Co(e);if(n!==r)return Ke(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ke(t.booleanValue,e.booleanValue);case 2:return function(a,l){const u=St(a.integerValue||a.doubleValue),d=St(l.integerValue||l.doubleValue);return u<d?-1:u>d?1:u===d?0:isNaN(u)?isNaN(d)?0:-1:1}(t,e);case 3:return ww(t.timestampValue,e.timestampValue);case 4:return ww(Gc(t),Gc(e));case 5:return Ke(t.stringValue,e.stringValue);case 6:return function(a,l){const u=Po(a),d=Po(l);return u.compareTo(d)}(t.bytesValue,e.bytesValue);case 7:return function(a,l){const u=a.split("/"),d=l.split("/");for(let p=0;p<u.length&&p<d.length;p++){const y=Ke(u[p],d[p]);if(y!==0)return y}return Ke(u.length,d.length)}(t.referenceValue,e.referenceValue);case 8:return function(a,l){const u=Ke(St(a.latitude),St(l.latitude));return u!==0?u:Ke(St(a.longitude),St(l.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return xw(t.arrayValue,e.arrayValue);case 10:return function(a,l){var u,d,p,y;const w=a.fields||{},x=l.fields||{},S=(u=w.value)===null||u===void 0?void 0:u.arrayValue,A=(d=x.value)===null||d===void 0?void 0:d.arrayValue,C=Ke(((p=S==null?void 0:S.values)===null||p===void 0?void 0:p.length)||0,((y=A==null?void 0:A.values)===null||y===void 0?void 0:y.length)||0);return C!==0?C:xw(S,A)}(t.mapValue,e.mapValue);case 11:return function(a,l){if(a===Uh.mapValue&&l===Uh.mapValue)return 0;if(a===Uh.mapValue)return 1;if(l===Uh.mapValue)return-1;const u=a.fields||{},d=Object.keys(u),p=l.fields||{},y=Object.keys(p);d.sort(),y.sort();for(let w=0;w<d.length&&w<y.length;++w){const x=Ke(d[w],y[w]);if(x!==0)return x;const S=Ya(u[d[w]],p[y[w]]);if(S!==0)return S}return Ke(d.length,y.length)}(t.mapValue,e.mapValue);default:throw Re()}}function ww(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ke(t,e);const n=bs(t),r=bs(e),s=Ke(n.seconds,r.seconds);return s!==0?s:Ke(n.nanos,r.nanos)}function xw(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const a=Ya(n[s],r[s]);if(a)return a}return Ke(n.length,r.length)}function Xa(t){return qg(t)}function qg(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=bs(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Po(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return be.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const a of n.values||[])s?s=!1:r+=",",r+=qg(a);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",a=!0;for(const l of r)a?a=!1:s+=",",s+=`${l}:${qg(n.fields[l])}`;return s+"}"}(t.mapValue):Re()}function Gg(t){return!!t&&"integerValue"in t}function ev(t){return!!t&&"arrayValue"in t}function Ew(t){return!!t&&"nullValue"in t}function Tw(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function vd(t){return!!t&&"mapValue"in t}function a5(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Cc(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Vo(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Cc(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Cc(t.arrayValue.values[n]);return e}return Object.assign({},t)}function l5(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Pn{constructor(e){this.value=e}static empty(){return new Pn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!vd(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Cc(n)}setAll(e){let n=Jt.emptyPath(),r={},s=[];e.forEach((l,u)=>{if(!n.isImmediateParentOf(u)){const d=this.getFieldsMap(n);this.applyChanges(d,r,s),r={},s=[],n=u.popLast()}l?r[u.lastSegment()]=Cc(l):s.push(u.lastSegment())});const a=this.getFieldsMap(n);this.applyChanges(a,r,s)}delete(e){const n=this.field(e.popLast());vd(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ti(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];vd(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Vo(n,(s,a)=>e[s]=a);for(const s of r)delete e[s]}clone(){return new Pn(Cc(this.value))}}function b2(t){const e=[];return Vo(t.fields,(n,r)=>{const s=new Jt([n]);if(vd(r)){const a=b2(r.mapValue).fields;if(a.length===0)e.push(s);else for(const l of a)e.push(s.child(l))}else e.push(s)}),new Un(e)}/**
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
 */class cn{constructor(e,n,r,s,a,l,u){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=a,this.data=l,this.documentState=u}static newInvalidDocument(e){return new cn(e,0,Ne.min(),Ne.min(),Ne.min(),Pn.empty(),0)}static newFoundDocument(e,n,r,s){return new cn(e,1,n,Ne.min(),r,s,0)}static newNoDocument(e,n){return new cn(e,2,n,Ne.min(),Ne.min(),Pn.empty(),0)}static newUnknownDocument(e,n){return new cn(e,3,n,Ne.min(),Ne.min(),Pn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Ne.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Pn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Pn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ne.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof cn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new cn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Bd{constructor(e,n){this.position=e,this.inclusive=n}}function Sw(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const a=e[s],l=t.position[s];if(a.field.isKeyField()?r=be.comparator(be.fromName(l.referenceValue),n.key):r=Ya(l,n.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return r}function Iw(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ti(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class zd{constructor(e,n="asc"){this.field=e,this.dir=n}}function c5(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class P2{}class Mt extends P2{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new h5(e,n,r):n==="array-contains"?new p5(e,r):n==="in"?new m5(e,r):n==="not-in"?new g5(e,r):n==="array-contains-any"?new y5(e,r):new Mt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new d5(e,r):new f5(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ya(n,this.value)):n!==null&&Co(this.value)===Co(n)&&this.matchesComparison(Ya(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Re()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ni extends P2{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new ni(e,n)}matches(e){return C2(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function C2(t){return t.op==="and"}function A2(t){return u5(t)&&C2(t)}function u5(t){for(const e of t.filters)if(e instanceof ni)return!1;return!0}function Kg(t){if(t instanceof Mt)return t.field.canonicalString()+t.op.toString()+Xa(t.value);if(A2(t))return t.filters.map(e=>Kg(e)).join(",");{const e=t.filters.map(n=>Kg(n)).join(",");return`${t.op}(${e})`}}function k2(t,e){return t instanceof Mt?function(r,s){return s instanceof Mt&&r.op===s.op&&r.field.isEqual(s.field)&&ti(r.value,s.value)}(t,e):t instanceof ni?function(r,s){return s instanceof ni&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((a,l,u)=>a&&k2(l,s.filters[u]),!0):!1}(t,e):void Re()}function R2(t){return t instanceof Mt?function(n){return`${n.field.canonicalString()} ${n.op} ${Xa(n.value)}`}(t):t instanceof ni?function(n){return n.op.toString()+" {"+n.getFilters().map(R2).join(" ,")+"}"}(t):"Filter"}class h5 extends Mt{constructor(e,n,r){super(e,n,r),this.key=be.fromName(r.referenceValue)}matches(e){const n=be.comparator(e.key,this.key);return this.matchesComparison(n)}}class d5 extends Mt{constructor(e,n){super(e,"in",n),this.keys=D2("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class f5 extends Mt{constructor(e,n){super(e,"not-in",n),this.keys=D2("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function D2(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>be.fromName(r.referenceValue))}class p5 extends Mt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ev(n)&&Qc(n.arrayValue,this.value)}}class m5 extends Mt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Qc(this.value.arrayValue,n)}}class g5 extends Mt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Qc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Qc(this.value.arrayValue,n)}}class y5 extends Mt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ev(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Qc(this.value.arrayValue,r))}}/**
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
 */class v5{constructor(e,n=null,r=[],s=[],a=null,l=null,u=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=a,this.startAt=l,this.endAt=u,this.ue=null}}function bw(t,e=null,n=[],r=[],s=null,a=null,l=null){return new v5(t,e,n,r,s,a,l)}function tv(t){const e=Oe(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Kg(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(a){return a.field.canonicalString()+a.dir}(r)).join(","),xf(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Xa(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Xa(r)).join(",")),e.ue=n}return e.ue}function nv(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!c5(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!k2(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Iw(t.startAt,e.startAt)&&Iw(t.endAt,e.endAt)}function Qg(t){return be.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Ef{constructor(e,n=null,r=[],s=[],a=null,l="F",u=null,d=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=a,this.limitType=l,this.startAt=u,this.endAt=d,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function _5(t,e,n,r,s,a,l,u){return new Ef(t,e,n,r,s,a,l,u)}function j2(t){return new Ef(t)}function Pw(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function w5(t){return t.collectionGroup!==null}function Ac(t){const e=Oe(t);if(e.ce===null){e.ce=[];const n=new Set;for(const a of e.explicitOrderBy)e.ce.push(a),n.add(a.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(l){let u=new Zt(Jt.comparator);return l.filters.forEach(d=>{d.getFlattenedFilters().forEach(p=>{p.isInequality()&&(u=u.add(p.field))})}),u})(e).forEach(a=>{n.has(a.canonicalString())||a.isKeyField()||e.ce.push(new zd(a,r))}),n.has(Jt.keyField().canonicalString())||e.ce.push(new zd(Jt.keyField(),r))}return e.ce}function Jr(t){const e=Oe(t);return e.le||(e.le=x5(e,Ac(t))),e.le}function x5(t,e){if(t.limitType==="F")return bw(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const a=s.dir==="desc"?"asc":"desc";return new zd(s.field,a)});const n=t.endAt?new Bd(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Bd(t.startAt.position,t.startAt.inclusive):null;return bw(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Yg(t,e,n){return new Ef(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Tf(t,e){return nv(Jr(t),Jr(e))&&t.limitType===e.limitType}function N2(t){return`${tv(Jr(t))}|lt:${t.limitType}`}function Na(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>R2(s)).join(", ")}]`),xf(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(l){return`${l.field.canonicalString()} (${l.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Xa(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Xa(s)).join(",")),`Target(${r})`}(Jr(t))}; limitType=${t.limitType})`}function Sf(t,e){return e.isFoundDocument()&&function(r,s){const a=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(a):be.isDocumentKey(r.path)?r.path.isEqual(a):r.path.isImmediateParentOf(a)}(t,e)&&function(r,s){for(const a of Ac(r))if(!a.field.isKeyField()&&s.data.field(a.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const a of r.filters)if(!a.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(l,u,d){const p=Sw(l,u,d);return l.inclusive?p<=0:p<0}(r.startAt,Ac(r),s)||r.endAt&&!function(l,u,d){const p=Sw(l,u,d);return l.inclusive?p>=0:p>0}(r.endAt,Ac(r),s))}(t,e)}function E5(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function O2(t){return(e,n)=>{let r=!1;for(const s of Ac(t)){const a=T5(s,e,n);if(a!==0)return a;r=r||s.field.isKeyField()}return 0}}function T5(t,e,n){const r=t.field.isKeyField()?be.comparator(e.key,n.key):function(a,l,u){const d=l.data.field(a),p=u.data.field(a);return d!==null&&p!==null?Ya(d,p):Re()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Re()}}/**
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
 */class pl{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,a]of r)if(this.equalsFn(s,e))return a}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return void(s[a]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Vo(this.inner,(n,r)=>{for(const[s,a]of r)e(s,a)})}isEmpty(){return S2(this.inner)}size(){return this.innerSize}}/**
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
 */const S5=new gt(be.comparator);function ji(){return S5}const L2=new gt(be.comparator);function Tc(...t){let e=L2;for(const n of t)e=e.insert(n.key,n);return e}function V2(t){let e=L2;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function yo(){return kc()}function M2(){return kc()}function kc(){return new pl(t=>t.toString(),(t,e)=>t.isEqual(e))}const I5=new gt(be.comparator),b5=new Zt(be.comparator);function Ue(...t){let e=b5;for(const n of t)e=e.add(n);return e}const P5=new Zt(Ke);function C5(){return P5}/**
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
 */function rv(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ud(e)?"-0":e}}function F2(t){return{integerValue:""+t}}function A5(t,e){return i5(e)?F2(e):rv(t,e)}/**
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
 */class If{constructor(){this._=void 0}}function k5(t,e,n){return t instanceof $d?function(s,a){const l={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return a&&Jy(a)&&(a=Zy(a)),a&&(l.fields.__previous_value__=a),{mapValue:l}}(n,e):t instanceof Yc?B2(t,e):t instanceof Xc?z2(t,e):function(s,a){const l=U2(s,a),u=Cw(l)+Cw(s.Pe);return Gg(l)&&Gg(s.Pe)?F2(u):rv(s.serializer,u)}(t,e)}function R5(t,e,n){return t instanceof Yc?B2(t,e):t instanceof Xc?z2(t,e):n}function U2(t,e){return t instanceof Wd?function(r){return Gg(r)||function(a){return!!a&&"doubleValue"in a}(r)}(e)?e:{integerValue:0}:null}class $d extends If{}class Yc extends If{constructor(e){super(),this.elements=e}}function B2(t,e){const n=$2(e);for(const r of t.elements)n.some(s=>ti(s,r))||n.push(r);return{arrayValue:{values:n}}}class Xc extends If{constructor(e){super(),this.elements=e}}function z2(t,e){let n=$2(e);for(const r of t.elements)n=n.filter(s=>!ti(s,r));return{arrayValue:{values:n}}}class Wd extends If{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Cw(t){return St(t.integerValue||t.doubleValue)}function $2(t){return ev(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function D5(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Yc&&s instanceof Yc||r instanceof Xc&&s instanceof Xc?Qa(r.elements,s.elements,ti):r instanceof Wd&&s instanceof Wd?ti(r.Pe,s.Pe):r instanceof $d&&s instanceof $d}(t.transform,e.transform)}class j5{constructor(e,n){this.version=e,this.transformResults=n}}class Dr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Dr}static exists(e){return new Dr(void 0,e)}static updateTime(e){return new Dr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function _d(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class bf{}function W2(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new iv(t.key,Dr.none()):new cu(t.key,t.data,Dr.none());{const n=t.data,r=Pn.empty();let s=new Zt(Jt.comparator);for(let a of e.fields)if(!s.has(a)){let l=n.field(a);l===null&&a.length>1&&(a=a.popLast(),l=n.field(a)),l===null?r.delete(a):r.set(a,l),s=s.add(a)}return new js(t.key,r,new Un(s.toArray()),Dr.none())}}function N5(t,e,n){t instanceof cu?function(s,a,l){const u=s.value.clone(),d=kw(s.fieldTransforms,a,l.transformResults);u.setAll(d),a.convertToFoundDocument(l.version,u).setHasCommittedMutations()}(t,e,n):t instanceof js?function(s,a,l){if(!_d(s.precondition,a))return void a.convertToUnknownDocument(l.version);const u=kw(s.fieldTransforms,a,l.transformResults),d=a.data;d.setAll(H2(s)),d.setAll(u),a.convertToFoundDocument(l.version,d).setHasCommittedMutations()}(t,e,n):function(s,a,l){a.convertToNoDocument(l.version).setHasCommittedMutations()}(0,e,n)}function Rc(t,e,n,r){return t instanceof cu?function(a,l,u,d){if(!_d(a.precondition,l))return u;const p=a.value.clone(),y=Rw(a.fieldTransforms,d,l);return p.setAll(y),l.convertToFoundDocument(l.version,p).setHasLocalMutations(),null}(t,e,n,r):t instanceof js?function(a,l,u,d){if(!_d(a.precondition,l))return u;const p=Rw(a.fieldTransforms,d,l),y=l.data;return y.setAll(H2(a)),y.setAll(p),l.convertToFoundDocument(l.version,y).setHasLocalMutations(),u===null?null:u.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map(w=>w.field))}(t,e,n,r):function(a,l,u){return _d(a.precondition,l)?(l.convertToNoDocument(l.version).setHasLocalMutations(),null):u}(t,e,n)}function O5(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),a=U2(r.transform,s||null);a!=null&&(n===null&&(n=Pn.empty()),n.set(r.field,a))}return n||null}function Aw(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Qa(r,s,(a,l)=>D5(a,l))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class cu extends bf{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class js extends bf{constructor(e,n,r,s,a=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function H2(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function kw(t,e,n){const r=new Map;Je(t.length===n.length);for(let s=0;s<n.length;s++){const a=t[s],l=a.transform,u=e.data.field(a.field);r.set(a.field,R5(l,u,n[s]))}return r}function Rw(t,e,n){const r=new Map;for(const s of t){const a=s.transform,l=n.data.field(s.field);r.set(s.field,k5(a,l,e))}return r}class iv extends bf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class L5 extends bf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class V5{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const a=this.mutations[s];a.key.isEqual(e.key)&&N5(a,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Rc(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Rc(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=M2();return this.mutations.forEach(s=>{const a=e.get(s.key),l=a.overlayedDocument;let u=this.applyToLocalView(l,a.mutatedFields);u=n.has(s.key)?null:u;const d=W2(l,u);d!==null&&r.set(s.key,d),l.isValidDocument()||l.convertToNoDocument(Ne.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ue())}isEqual(e){return this.batchId===e.batchId&&Qa(this.mutations,e.mutations,(n,r)=>Aw(n,r))&&Qa(this.baseMutations,e.baseMutations,(n,r)=>Aw(n,r))}}class sv{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Je(e.mutations.length===r.length);let s=function(){return I5}();const a=e.mutations;for(let l=0;l<a.length;l++)s=s.insert(a[l].key,r[l].version);return new sv(e,n,r,s)}}/**
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
 */class M5{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class F5{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ct,He;function U5(t){switch(t){default:return Re();case ie.CANCELLED:case ie.UNKNOWN:case ie.DEADLINE_EXCEEDED:case ie.RESOURCE_EXHAUSTED:case ie.INTERNAL:case ie.UNAVAILABLE:case ie.UNAUTHENTICATED:return!1;case ie.INVALID_ARGUMENT:case ie.NOT_FOUND:case ie.ALREADY_EXISTS:case ie.PERMISSION_DENIED:case ie.FAILED_PRECONDITION:case ie.ABORTED:case ie.OUT_OF_RANGE:case ie.UNIMPLEMENTED:case ie.DATA_LOSS:return!0}}function q2(t){if(t===void 0)return Di("GRPC error has no .code"),ie.UNKNOWN;switch(t){case Ct.OK:return ie.OK;case Ct.CANCELLED:return ie.CANCELLED;case Ct.UNKNOWN:return ie.UNKNOWN;case Ct.DEADLINE_EXCEEDED:return ie.DEADLINE_EXCEEDED;case Ct.RESOURCE_EXHAUSTED:return ie.RESOURCE_EXHAUSTED;case Ct.INTERNAL:return ie.INTERNAL;case Ct.UNAVAILABLE:return ie.UNAVAILABLE;case Ct.UNAUTHENTICATED:return ie.UNAUTHENTICATED;case Ct.INVALID_ARGUMENT:return ie.INVALID_ARGUMENT;case Ct.NOT_FOUND:return ie.NOT_FOUND;case Ct.ALREADY_EXISTS:return ie.ALREADY_EXISTS;case Ct.PERMISSION_DENIED:return ie.PERMISSION_DENIED;case Ct.FAILED_PRECONDITION:return ie.FAILED_PRECONDITION;case Ct.ABORTED:return ie.ABORTED;case Ct.OUT_OF_RANGE:return ie.OUT_OF_RANGE;case Ct.UNIMPLEMENTED:return ie.UNIMPLEMENTED;case Ct.DATA_LOSS:return ie.DATA_LOSS;default:return Re()}}(He=Ct||(Ct={}))[He.OK=0]="OK",He[He.CANCELLED=1]="CANCELLED",He[He.UNKNOWN=2]="UNKNOWN",He[He.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",He[He.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",He[He.NOT_FOUND=5]="NOT_FOUND",He[He.ALREADY_EXISTS=6]="ALREADY_EXISTS",He[He.PERMISSION_DENIED=7]="PERMISSION_DENIED",He[He.UNAUTHENTICATED=16]="UNAUTHENTICATED",He[He.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",He[He.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",He[He.ABORTED=10]="ABORTED",He[He.OUT_OF_RANGE=11]="OUT_OF_RANGE",He[He.UNIMPLEMENTED=12]="UNIMPLEMENTED",He[He.INTERNAL=13]="INTERNAL",He[He.UNAVAILABLE=14]="UNAVAILABLE",He[He.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function B5(){return new TextEncoder}/**
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
 */const z5=new xo([4294967295,4294967295],0);function Dw(t){const e=B5().encode(t),n=new g2;return n.update(e),new Uint8Array(n.digest())}function jw(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new xo([n,r],0),new xo([s,a],0)]}class ov{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Sc(`Invalid padding: ${n}`);if(r<0)throw new Sc(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Sc(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Sc(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=xo.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(xo.fromNumber(r)));return s.compare(z5)===1&&(s=new xo([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Dw(e),[r,s]=jw(n);for(let a=0;a<this.hashCount;a++){const l=this.Ee(r,s,a);if(!this.de(l))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),l=new ov(a,s,n);return r.forEach(u=>l.insert(u)),l}insert(e){if(this.Ie===0)return;const n=Dw(e),[r,s]=jw(n);for(let a=0;a<this.hashCount;a++){const l=this.Ee(r,s,a);this.Ae(l)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Sc extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Pf{constructor(e,n,r,s,a){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,uu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Pf(Ne.min(),s,new gt(Ke),ji(),Ue())}}class uu{constructor(e,n,r,s,a){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new uu(r,n,Ue(),Ue(),Ue())}}/**
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
 */class wd{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class G2{constructor(e,n){this.targetId=e,this.me=n}}class K2{constructor(e,n,r=en.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Nw{constructor(){this.fe=0,this.ge=Lw(),this.pe=en.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Ue(),n=Ue(),r=Ue();return this.ge.forEach((s,a)=>{switch(a){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Re()}}),new uu(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Lw()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Je(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class $5{constructor(e){this.Le=e,this.Be=new Map,this.ke=ji(),this.qe=Ow(),this.Qe=new gt(Ke)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Re()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const a=s.target;if(Qg(a))if(r===0){const l=new be(a.path);this.Ue(n,l,cn.newNoDocument(l,Ne.min()))}else Je(r===1);else{const l=this.Ye(n);if(l!==r){const u=this.Ze(e),d=u?this.Xe(u,e,l):1;if(d!==0){this.je(n);const p=d===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,p)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:a=0}=n;let l,u;try{l=Po(r).toUint8Array()}catch(d){if(d instanceof I2)return Ka("Decoding the base64 bloom filter in existence filter failed ("+d.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw d}try{u=new ov(l,s,a)}catch(d){return Ka(d instanceof Sc?"BloomFilter error: ":"Applying bloom filter failed: ",d),null}return u.Ie===0?null:u}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(a=>{const l=this.Le.tt(),u=`projects/${l.projectId}/databases/${l.database}/documents/${a.path.canonicalString()}`;e.mightContain(u)||(this.Ue(n,a,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((a,l)=>{const u=this.Je(l);if(u){if(a.current&&Qg(u.target)){const d=new be(u.target.path);this.ke.get(d)!==null||this.it(l,d)||this.Ue(l,d,cn.newNoDocument(d,e))}a.be&&(n.set(l,a.ve()),a.Ce())}});let r=Ue();this.qe.forEach((a,l)=>{let u=!0;l.forEachWhile(d=>{const p=this.Je(d);return!p||p.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(a))}),this.ke.forEach((a,l)=>l.setReadTime(e));const s=new Pf(e,n,this.Qe,this.ke,r);return this.ke=ji(),this.qe=Ow(),this.Qe=new gt(Ke),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Nw,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Zt(Ke),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||ve("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Nw),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Ow(){return new gt(be.comparator)}function Lw(){return new gt(be.comparator)}const W5={asc:"ASCENDING",desc:"DESCENDING"},H5={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},q5={and:"AND",or:"OR"};class G5{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Xg(t,e){return t.useProto3Json||xf(e)?e:{value:e}}function Hd(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Q2(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function K5(t,e){return Hd(t,e.toTimestamp())}function Zr(t){return Je(!!t),Ne.fromTimestamp(function(n){const r=bs(n);return new Ft(r.seconds,r.nanos)}(t))}function av(t,e){return Jg(t,e).canonicalString()}function Jg(t,e){const n=function(s){return new lt(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Y2(t){const e=lt.fromString(t);return Je(tS(e)),e}function Zg(t,e){return av(t.databaseId,e.path)}function Um(t,e){const n=Y2(e);if(n.get(1)!==t.databaseId.projectId)throw new Ee(ie.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Ee(ie.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new be(J2(n))}function X2(t,e){return av(t.databaseId,e)}function Q5(t){const e=Y2(t);return e.length===4?lt.emptyPath():J2(e)}function ey(t){return new lt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function J2(t){return Je(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Vw(t,e,n){return{name:Zg(t,e),fields:n.value.mapValue.fields}}function Y5(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(p){return p==="NO_CHANGE"?0:p==="ADD"?1:p==="REMOVE"?2:p==="CURRENT"?3:p==="RESET"?4:Re()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],a=function(p,y){return p.useProto3Json?(Je(y===void 0||typeof y=="string"),en.fromBase64String(y||"")):(Je(y===void 0||y instanceof Buffer||y instanceof Uint8Array),en.fromUint8Array(y||new Uint8Array))}(t,e.targetChange.resumeToken),l=e.targetChange.cause,u=l&&function(p){const y=p.code===void 0?ie.UNKNOWN:q2(p.code);return new Ee(y,p.message||"")}(l);n=new K2(r,s,a,u||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Um(t,r.document.name),a=Zr(r.document.updateTime),l=r.document.createTime?Zr(r.document.createTime):Ne.min(),u=new Pn({mapValue:{fields:r.document.fields}}),d=cn.newFoundDocument(s,a,l,u),p=r.targetIds||[],y=r.removedTargetIds||[];n=new wd(p,y,d.key,d)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Um(t,r.document),a=r.readTime?Zr(r.readTime):Ne.min(),l=cn.newNoDocument(s,a),u=r.removedTargetIds||[];n=new wd([],u,l.key,l)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Um(t,r.document),a=r.removedTargetIds||[];n=new wd([],a,s,null)}else{if(!("filter"in e))return Re();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:a}=r,l=new F5(s,a),u=r.targetId;n=new G2(u,l)}}return n}function X5(t,e){let n;if(e instanceof cu)n={update:Vw(t,e.key,e.value)};else if(e instanceof iv)n={delete:Zg(t,e.key)};else if(e instanceof js)n={update:Vw(t,e.key,e.data),updateMask:oD(e.fieldMask)};else{if(!(e instanceof L5))return Re();n={verify:Zg(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(a,l){const u=l.transform;if(u instanceof $d)return{fieldPath:l.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof Yc)return{fieldPath:l.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof Xc)return{fieldPath:l.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof Wd)return{fieldPath:l.field.canonicalString(),increment:u.Pe};throw Re()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,a){return a.updateTime!==void 0?{updateTime:K5(s,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:Re()}(t,e.precondition)),n}function J5(t,e){return t&&t.length>0?(Je(e!==void 0),t.map(n=>function(s,a){let l=s.updateTime?Zr(s.updateTime):Zr(a);return l.isEqual(Ne.min())&&(l=Zr(a)),new j5(l,s.transformResults||[])}(n,e))):[]}function Z5(t,e){return{documents:[X2(t,e.path)]}}function eD(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=X2(t,s);const a=function(p){if(p.length!==0)return eS(ni.create(p,"and"))}(e.filters);a&&(n.structuredQuery.where=a);const l=function(p){if(p.length!==0)return p.map(y=>function(x){return{field:Oa(x.field),direction:rD(x.dir)}}(y))}(e.orderBy);l&&(n.structuredQuery.orderBy=l);const u=Xg(t,e.limit);return u!==null&&(n.structuredQuery.limit=u),e.startAt&&(n.structuredQuery.startAt=function(p){return{before:p.inclusive,values:p.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(p){return{before:!p.inclusive,values:p.position}}(e.endAt)),{_t:n,parent:s}}function tD(t){let e=Q5(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Je(r===1);const y=n.from[0];y.allDescendants?s=y.collectionId:e=e.child(y.collectionId)}let a=[];n.where&&(a=function(w){const x=Z2(w);return x instanceof ni&&A2(x)?x.getFilters():[x]}(n.where));let l=[];n.orderBy&&(l=function(w){return w.map(x=>function(A){return new zd(La(A.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(x))}(n.orderBy));let u=null;n.limit&&(u=function(w){let x;return x=typeof w=="object"?w.value:w,xf(x)?null:x}(n.limit));let d=null;n.startAt&&(d=function(w){const x=!!w.before,S=w.values||[];return new Bd(S,x)}(n.startAt));let p=null;return n.endAt&&(p=function(w){const x=!w.before,S=w.values||[];return new Bd(S,x)}(n.endAt)),_5(e,s,l,a,u,"F",d,p)}function nD(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Re()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Z2(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=La(n.unaryFilter.field);return Mt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=La(n.unaryFilter.field);return Mt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=La(n.unaryFilter.field);return Mt.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const l=La(n.unaryFilter.field);return Mt.create(l,"!=",{nullValue:"NULL_VALUE"});default:return Re()}}(t):t.fieldFilter!==void 0?function(n){return Mt.create(La(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Re()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return ni.create(n.compositeFilter.filters.map(r=>Z2(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Re()}}(n.compositeFilter.op))}(t):Re()}function rD(t){return W5[t]}function iD(t){return H5[t]}function sD(t){return q5[t]}function Oa(t){return{fieldPath:t.canonicalString()}}function La(t){return Jt.fromServerFormat(t.fieldPath)}function eS(t){return t instanceof Mt?function(n){if(n.op==="=="){if(Tw(n.value))return{unaryFilter:{field:Oa(n.field),op:"IS_NAN"}};if(Ew(n.value))return{unaryFilter:{field:Oa(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Tw(n.value))return{unaryFilter:{field:Oa(n.field),op:"IS_NOT_NAN"}};if(Ew(n.value))return{unaryFilter:{field:Oa(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Oa(n.field),op:iD(n.op),value:n.value}}}(t):t instanceof ni?function(n){const r=n.getFilters().map(s=>eS(s));return r.length===1?r[0]:{compositeFilter:{op:sD(n.op),filters:r}}}(t):Re()}function oD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function tS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class ms{constructor(e,n,r,s,a=Ne.min(),l=Ne.min(),u=en.EMPTY_BYTE_STRING,d=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=l,this.resumeToken=u,this.expectedCount=d}withSequenceNumber(e){return new ms(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ms(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ms(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ms(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class aD{constructor(e){this.ct=e}}function lD(t){const e=tD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Yg(e,e.limit,"L"):e}/**
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
 */class cD{constructor(){this.un=new uD}addToCollectionParentIndex(e,n){return this.un.add(n),re.resolve()}getCollectionParents(e,n){return re.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return re.resolve()}deleteFieldIndex(e,n){return re.resolve()}deleteAllFieldIndexes(e){return re.resolve()}createTargetIndexes(e,n){return re.resolve()}getDocumentsMatchingTarget(e,n){return re.resolve(null)}getIndexType(e,n){return re.resolve(0)}getFieldIndexes(e,n){return re.resolve([])}getNextCollectionGroupToUpdate(e){return re.resolve(null)}getMinOffset(e,n){return re.resolve(Is.min())}getMinOffsetFromCollectionGroup(e,n){return re.resolve(Is.min())}updateCollectionGroup(e,n,r){return re.resolve()}updateIndexEntries(e,n){return re.resolve()}}class uD{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Zt(lt.comparator),a=!s.has(r);return this.index[n]=s.add(r),a}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Zt(lt.comparator)).toArray()}}/**
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
 */class Ja{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Ja(0)}static kn(){return new Ja(-1)}}/**
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
 */class hD{constructor(){this.changes=new pl(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,cn.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?re.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class dD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class fD{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Rc(r.mutation,s,Un.empty(),Ft.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ue()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ue()){const s=yo();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(a=>{let l=Tc();return a.forEach((u,d)=>{l=l.insert(u,d.overlayedDocument)}),l}))}getOverlayedDocuments(e,n){const r=yo();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ue()))}populateOverlays(e,n,r){const s=[];return r.forEach(a=>{n.has(a)||s.push(a)}),this.documentOverlayCache.getOverlays(e,s).next(a=>{a.forEach((l,u)=>{n.set(l,u)})})}computeViews(e,n,r,s){let a=ji();const l=kc(),u=function(){return kc()}();return n.forEach((d,p)=>{const y=r.get(p.key);s.has(p.key)&&(y===void 0||y.mutation instanceof js)?a=a.insert(p.key,p):y!==void 0?(l.set(p.key,y.mutation.getFieldMask()),Rc(y.mutation,p,y.mutation.getFieldMask(),Ft.now())):l.set(p.key,Un.empty())}),this.recalculateAndSaveOverlays(e,a).next(d=>(d.forEach((p,y)=>l.set(p,y)),n.forEach((p,y)=>{var w;return u.set(p,new dD(y,(w=l.get(p))!==null&&w!==void 0?w:null))}),u))}recalculateAndSaveOverlays(e,n){const r=kc();let s=new gt((l,u)=>l-u),a=Ue();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(l=>{for(const u of l)u.keys().forEach(d=>{const p=n.get(d);if(p===null)return;let y=r.get(d)||Un.empty();y=u.applyToLocalView(p,y),r.set(d,y);const w=(s.get(u.batchId)||Ue()).add(d);s=s.insert(u.batchId,w)})}).next(()=>{const l=[],u=s.getReverseIterator();for(;u.hasNext();){const d=u.getNext(),p=d.key,y=d.value,w=M2();y.forEach(x=>{if(!a.has(x)){const S=W2(n.get(x),r.get(x));S!==null&&w.set(x,S),a=a.add(x)}}),l.push(this.documentOverlayCache.saveOverlays(e,p,w))}return re.waitFor(l)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(l){return be.isDocumentKey(l.path)&&l.collectionGroup===null&&l.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):w5(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(a=>{const l=s-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-a.size):re.resolve(yo());let u=-1,d=a;return l.next(p=>re.forEach(p,(y,w)=>(u<w.largestBatchId&&(u=w.largestBatchId),a.get(y)?re.resolve():this.remoteDocumentCache.getEntry(e,y).next(x=>{d=d.insert(y,x)}))).next(()=>this.populateOverlays(e,p,a)).next(()=>this.computeViews(e,d,p,Ue())).next(y=>({batchId:u,changes:V2(y)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new be(n)).next(r=>{let s=Tc();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const a=n.collectionGroup;let l=Tc();return this.indexManager.getCollectionParents(e,a).next(u=>re.forEach(u,d=>{const p=function(w,x){return new Ef(x,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(n,d.child(a));return this.getDocumentsMatchingCollectionQuery(e,p,r,s).next(y=>{y.forEach((w,x)=>{l=l.insert(w,x)})})}).next(()=>l))}getDocumentsMatchingCollectionQuery(e,n,r,s){let a;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(l=>(a=l,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,a,s))).next(l=>{a.forEach((d,p)=>{const y=p.getKey();l.get(y)===null&&(l=l.insert(y,cn.newInvalidDocument(y)))});let u=Tc();return l.forEach((d,p)=>{const y=a.get(d);y!==void 0&&Rc(y.mutation,p,Un.empty(),Ft.now()),Sf(n,p)&&(u=u.insert(d,p))}),u})}}/**
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
 */class pD{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return re.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Zr(s.createTime)}}(n)),re.resolve()}getNamedQuery(e,n){return re.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:lD(s.bundledQuery),readTime:Zr(s.readTime)}}(n)),re.resolve()}}/**
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
 */class mD{constructor(){this.overlays=new gt(be.comparator),this.Ir=new Map}getOverlay(e,n){return re.resolve(this.overlays.get(n))}getOverlays(e,n){const r=yo();return re.forEach(n,s=>this.getOverlay(e,s).next(a=>{a!==null&&r.set(s,a)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,a)=>{this.ht(e,n,a)}),re.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(a=>this.overlays=this.overlays.remove(a)),this.Ir.delete(r)),re.resolve()}getOverlaysForCollection(e,n,r){const s=yo(),a=n.length+1,l=new be(n.child("")),u=this.overlays.getIteratorFrom(l);for(;u.hasNext();){const d=u.getNext().value,p=d.getKey();if(!n.isPrefixOf(p.path))break;p.path.length===a&&d.largestBatchId>r&&s.set(d.getKey(),d)}return re.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let a=new gt((p,y)=>p-y);const l=this.overlays.getIterator();for(;l.hasNext();){const p=l.getNext().value;if(p.getKey().getCollectionGroup()===n&&p.largestBatchId>r){let y=a.get(p.largestBatchId);y===null&&(y=yo(),a=a.insert(p.largestBatchId,y)),y.set(p.getKey(),p)}}const u=yo(),d=a.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach((p,y)=>u.set(p,y)),!(u.size()>=s)););return re.resolve(u)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const l=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,l)}this.overlays=this.overlays.insert(r.key,new M5(n,r));let a=this.Ir.get(n);a===void 0&&(a=Ue(),this.Ir.set(n,a)),this.Ir.set(n,a.add(r.key))}}/**
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
 */class gD{constructor(){this.sessionToken=en.EMPTY_BYTE_STRING}getSessionToken(e){return re.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,re.resolve()}}/**
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
 */class lv{constructor(){this.Tr=new Zt(Wt.Er),this.dr=new Zt(Wt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Wt(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Wt(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new be(new lt([])),r=new Wt(n,e),s=new Wt(n,e+1),a=[];return this.dr.forEachInRange([r,s],l=>{this.Vr(l),a.push(l.key)}),a}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new be(new lt([])),r=new Wt(n,e),s=new Wt(n,e+1);let a=Ue();return this.dr.forEachInRange([r,s],l=>{a=a.add(l.key)}),a}containsKey(e){const n=new Wt(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Wt{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return be.comparator(e.key,n.key)||Ke(e.wr,n.wr)}static Ar(e,n){return Ke(e.wr,n.wr)||be.comparator(e.key,n.key)}}/**
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
 */class yD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Zt(Wt.Er)}checkEmpty(e){return re.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const a=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const l=new V5(a,n,r,s);this.mutationQueue.push(l);for(const u of s)this.br=this.br.add(new Wt(u.key,a)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return re.resolve(l)}lookupMutationBatch(e,n){return re.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),a=s<0?0:s;return re.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return re.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return re.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Wt(n,0),s=new Wt(n,Number.POSITIVE_INFINITY),a=[];return this.br.forEachInRange([r,s],l=>{const u=this.Dr(l.wr);a.push(u)}),re.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Zt(Ke);return n.forEach(s=>{const a=new Wt(s,0),l=new Wt(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([a,l],u=>{r=r.add(u.wr)})}),re.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let a=r;be.isDocumentKey(a)||(a=a.child(""));const l=new Wt(new be(a),0);let u=new Zt(Ke);return this.br.forEachWhile(d=>{const p=d.key.path;return!!r.isPrefixOf(p)&&(p.length===s&&(u=u.add(d.wr)),!0)},l),re.resolve(this.Cr(u))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Je(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return re.forEach(n.mutations,s=>{const a=new Wt(s.key,n.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Wt(n,0),s=this.br.firstAfterOrEqual(r);return re.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,re.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class vD{constructor(e){this.Mr=e,this.docs=function(){return new gt(be.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),a=s?s.size:0,l=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:l}),this.size+=l-a,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return re.resolve(r?r.document.mutableCopy():cn.newInvalidDocument(n))}getEntries(e,n){let r=ji();return n.forEach(s=>{const a=this.docs.get(s);r=r.insert(s,a?a.document.mutableCopy():cn.newInvalidDocument(s))}),re.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let a=ji();const l=n.path,u=new be(l.child("")),d=this.docs.getIteratorFrom(u);for(;d.hasNext();){const{key:p,value:{document:y}}=d.getNext();if(!l.isPrefixOf(p.path))break;p.path.length>l.length+1||e5(Z3(y),r)<=0||(s.has(y.key)||Sf(n,y))&&(a=a.insert(y.key,y.mutableCopy()))}return re.resolve(a)}getAllFromCollectionGroup(e,n,r,s){Re()}Or(e,n){return re.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new _D(this)}getSize(e){return re.resolve(this.size)}}class _D extends hD{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),re.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class wD{constructor(e){this.persistence=e,this.Nr=new pl(n=>tv(n),nv),this.lastRemoteSnapshotVersion=Ne.min(),this.highestTargetId=0,this.Lr=0,this.Br=new lv,this.targetCount=0,this.kr=Ja.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),re.resolve()}getLastRemoteSnapshotVersion(e){return re.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return re.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),re.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),re.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Ja(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,re.resolve()}updateTargetData(e,n){return this.Kn(n),re.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,re.resolve()}removeTargets(e,n,r){let s=0;const a=[];return this.Nr.forEach((l,u)=>{u.sequenceNumber<=n&&r.get(u.targetId)===null&&(this.Nr.delete(l),a.push(this.removeMatchingKeysForTargetId(e,u.targetId)),s++)}),re.waitFor(a).next(()=>s)}getTargetCount(e){return re.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return re.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),re.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,a=[];return s&&n.forEach(l=>{a.push(s.markPotentiallyOrphaned(e,l))}),re.waitFor(a)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),re.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return re.resolve(r)}containsKey(e,n){return re.resolve(this.Br.containsKey(n))}}/**
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
 */class xD{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Xy(0),this.Kr=!1,this.Kr=!0,this.$r=new gD,this.referenceDelegate=e(this),this.Ur=new wD(this),this.indexManager=new cD,this.remoteDocumentCache=function(s){return new vD(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new aD(n),this.Gr=new pD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new mD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new yD(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){ve("MemoryPersistence","Starting transaction:",e);const s=new ED(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(a=>this.referenceDelegate.jr(s).next(()=>a)).toPromise().then(a=>(s.raiseOnCommittedEvent(),a))}Hr(e,n){return re.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class ED extends n5{constructor(e){super(),this.currentSequenceNumber=e}}class cv{constructor(e){this.persistence=e,this.Jr=new lv,this.Yr=null}static Zr(e){return new cv(e)}get Xr(){if(this.Yr)return this.Yr;throw Re()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),re.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),re.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),re.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(a=>this.Xr.add(a.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return re.forEach(this.Xr,r=>{const s=be.fromPath(r);return this.ei(e,s).next(a=>{a||n.removeEntry(s,Ne.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return re.or([()=>re.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class uv{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=Ue(),s=Ue();for(const a of n.docChanges)switch(a.type){case 0:r=r.add(a.doc.key);break;case 1:s=s.add(a.doc.key)}return new uv(e,n.fromCache,r,s)}}/**
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
 */class TD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class SD{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return uk()?8:r5(hn())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const a={result:null};return this.Yi(e,n).next(l=>{a.result=l}).next(()=>{if(!a.result)return this.Zi(e,n,s,r).next(l=>{a.result=l})}).next(()=>{if(a.result)return;const l=new TD;return this.Xi(e,n,l).next(u=>{if(a.result=u,this.zi)return this.es(e,n,l,u.size)})}).next(()=>a.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(dc()<=ze.DEBUG&&ve("QueryEngine","SDK will not create cache indexes for query:",Na(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),re.resolve()):(dc()<=ze.DEBUG&&ve("QueryEngine","Query:",Na(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(dc()<=ze.DEBUG&&ve("QueryEngine","The SDK decides to create cache indexes for query:",Na(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Jr(n))):re.resolve())}Yi(e,n){if(Pw(n))return re.resolve(null);let r=Jr(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Yg(n,null,"F"),r=Jr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(a=>{const l=Ue(...a);return this.Ji.getDocuments(e,l).next(u=>this.indexManager.getMinOffset(e,r).next(d=>{const p=this.ts(n,u);return this.ns(n,p,l,d.readTime)?this.Yi(e,Yg(n,null,"F")):this.rs(e,p,n,d)}))})))}Zi(e,n,r,s){return Pw(n)||s.isEqual(Ne.min())?re.resolve(null):this.Ji.getDocuments(e,r).next(a=>{const l=this.ts(n,a);return this.ns(n,l,r,s)?re.resolve(null):(dc()<=ze.DEBUG&&ve("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Na(n)),this.rs(e,l,n,J3(s,-1)).next(u=>u))})}ts(e,n){let r=new Zt(O2(e));return n.forEach((s,a)=>{Sf(e,a)&&(r=r.add(a))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const a=e.limitType==="F"?n.last():n.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(s)>0)}Xi(e,n,r){return dc()<=ze.DEBUG&&ve("QueryEngine","Using full collection scan to execute query:",Na(n)),this.Ji.getDocumentsMatchingQuery(e,n,Is.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(a=>(n.forEach(l=>{a=a.insert(l.key,l)}),a))}}/**
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
 */class ID{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new gt(Ke),this._s=new pl(a=>tv(a),nv),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new fD(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function bD(t,e,n,r){return new ID(t,e,n,r)}async function nS(t,e){const n=Oe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(a=>(s=a,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(a=>{const l=[],u=[];let d=Ue();for(const p of s){l.push(p.batchId);for(const y of p.mutations)d=d.add(y.key)}for(const p of a){u.push(p.batchId);for(const y of p.mutations)d=d.add(y.key)}return n.localDocuments.getDocuments(r,d).next(p=>({hs:p,removedBatchIds:l,addedBatchIds:u}))})})}function PD(t,e){const n=Oe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),a=n.cs.newChangeBuffer({trackRemovals:!0});return function(u,d,p,y){const w=p.batch,x=w.keys();let S=re.resolve();return x.forEach(A=>{S=S.next(()=>y.getEntry(d,A)).next(C=>{const P=p.docVersions.get(A);Je(P!==null),C.version.compareTo(P)<0&&(w.applyToRemoteDocument(C,p),C.isValidDocument()&&(C.setReadTime(p.commitVersion),y.addEntry(C)))})}),S.next(()=>u.mutationQueue.removeMutationBatch(d,w))}(n,r,e,a).next(()=>a.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let d=Ue();for(let p=0;p<u.mutationResults.length;++p)u.mutationResults[p].transformResults.length>0&&(d=d.add(u.batch.mutations[p].key));return d}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function rS(t){const e=Oe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function CD(t,e){const n=Oe(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",a=>{const l=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const u=[];e.targetChanges.forEach((y,w)=>{const x=s.get(w);if(!x)return;u.push(n.Ur.removeMatchingKeys(a,y.removedDocuments,w).next(()=>n.Ur.addMatchingKeys(a,y.addedDocuments,w)));let S=x.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(w)!==null?S=S.withResumeToken(en.EMPTY_BYTE_STRING,Ne.min()).withLastLimboFreeSnapshotVersion(Ne.min()):y.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(y.resumeToken,r)),s=s.insert(w,S),function(C,P,$){return C.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(x,S,y)&&u.push(n.Ur.updateTargetData(a,S))});let d=ji(),p=Ue();if(e.documentUpdates.forEach(y=>{e.resolvedLimboDocuments.has(y)&&u.push(n.persistence.referenceDelegate.updateLimboDocument(a,y))}),u.push(AD(a,l,e.documentUpdates).next(y=>{d=y.Ps,p=y.Is})),!r.isEqual(Ne.min())){const y=n.Ur.getLastRemoteSnapshotVersion(a).next(w=>n.Ur.setTargetsMetadata(a,a.currentSequenceNumber,r));u.push(y)}return re.waitFor(u).next(()=>l.apply(a)).next(()=>n.localDocuments.getLocalViewOfDocuments(a,d,p)).next(()=>d)}).then(a=>(n.os=s,a))}function AD(t,e,n){let r=Ue(),s=Ue();return n.forEach(a=>r=r.add(a)),e.getEntries(t,r).next(a=>{let l=ji();return n.forEach((u,d)=>{const p=a.get(u);d.isFoundDocument()!==p.isFoundDocument()&&(s=s.add(u)),d.isNoDocument()&&d.version.isEqual(Ne.min())?(e.removeEntry(u,d.readTime),l=l.insert(u,d)):!p.isValidDocument()||d.version.compareTo(p.version)>0||d.version.compareTo(p.version)===0&&p.hasPendingWrites?(e.addEntry(d),l=l.insert(u,d)):ve("LocalStore","Ignoring outdated watch update for ",u,". Current version:",p.version," Watch version:",d.version)}),{Ps:l,Is:s}})}function kD(t,e){const n=Oe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function RD(t,e){const n=Oe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(a=>a?(s=a,re.resolve(s)):n.Ur.allocateTargetId(r).next(l=>(s=new ms(e,l,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function ty(t,e,n){const r=Oe(t),s=r.os.get(e),a=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",a,l=>r.persistence.referenceDelegate.removeTarget(l,s))}catch(l){if(!lu(l))throw l;ve("LocalStore",`Failed to update sequence numbers for target ${e}: ${l}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Mw(t,e,n){const r=Oe(t);let s=Ne.min(),a=Ue();return r.persistence.runTransaction("Execute query","readwrite",l=>function(d,p,y){const w=Oe(d),x=w._s.get(y);return x!==void 0?re.resolve(w.os.get(x)):w.Ur.getTargetData(p,y)}(r,l,Jr(e)).next(u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(l,u.targetId).next(d=>{a=d})}).next(()=>r.ss.getDocumentsMatchingQuery(l,e,n?s:Ne.min(),n?a:Ue())).next(u=>(DD(r,E5(e),u),{documents:u,Ts:a})))}function DD(t,e,n){let r=t.us.get(e)||Ne.min();n.forEach((s,a)=>{a.readTime.compareTo(r)>0&&(r=a.readTime)}),t.us.set(e,r)}class Fw{constructor(){this.activeTargetIds=C5()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class jD{constructor(){this.so=new Fw,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Fw,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class ND{_o(e){}shutdown(){}}/**
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
 */class Uw{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){ve("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){ve("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Bh=null;function Bm(){return Bh===null?Bh=function(){return 268435456+Math.round(2147483648*Math.random())}():Bh++,"0x"+Bh.toString(16)}/**
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
 */const OD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class LD{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const on="WebChannelConnection";class VD extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${a}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${a}`}get Fo(){return!1}Mo(n,r,s,a,l){const u=Bm(),d=this.xo(n,r.toUriEncodedString());ve("RestConnection",`Sending RPC '${n}' ${u}:`,d,s);const p={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(p,a,l),this.No(n,d,p,s).then(y=>(ve("RestConnection",`Received RPC '${n}' ${u}: `,y),y),y=>{throw Ka("RestConnection",`RPC '${n}' ${u} failed with error: `,y,"url: ",d,"request:",s),y})}Lo(n,r,s,a,l,u){return this.Mo(n,r,s,a,l)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+fl}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((a,l)=>n[l]=a),s&&s.headers.forEach((a,l)=>n[l]=a)}xo(n,r){const s=OD[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const a=Bm();return new Promise((l,u)=>{const d=new y2;d.setWithCredentials(!0),d.listenOnce(v2.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case yd.NO_ERROR:const y=d.getResponseJson();ve(on,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(y)),l(y);break;case yd.TIMEOUT:ve(on,`RPC '${e}' ${a} timed out`),u(new Ee(ie.DEADLINE_EXCEEDED,"Request time out"));break;case yd.HTTP_ERROR:const w=d.getStatus();if(ve(on,`RPC '${e}' ${a} failed with status:`,w,"response text:",d.getResponseText()),w>0){let x=d.getResponseJson();Array.isArray(x)&&(x=x[0]);const S=x==null?void 0:x.error;if(S&&S.status&&S.message){const A=function(P){const $=P.toLowerCase().replace(/_/g,"-");return Object.values(ie).indexOf($)>=0?$:ie.UNKNOWN}(S.status);u(new Ee(A,S.message))}else u(new Ee(ie.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new Ee(ie.UNAVAILABLE,"Connection failed."));break;default:Re()}}finally{ve(on,`RPC '${e}' ${a} completed.`)}});const p=JSON.stringify(s);ve(on,`RPC '${e}' ${a} sending request:`,s),d.send(n,"POST",p,r,15)})}Bo(e,n,r){const s=Bm(),a=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],l=x2(),u=w2(),d={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},p=this.longPollingOptions.timeoutSeconds;p!==void 0&&(d.longPollingTimeout=Math.round(1e3*p)),this.useFetchStreams&&(d.useFetchStreams=!0),this.Oo(d.initMessageHeaders,n,r),d.encodeInitMessageHeaders=!0;const y=a.join("");ve(on,`Creating RPC '${e}' stream ${s}: ${y}`,d);const w=l.createWebChannel(y,d);let x=!1,S=!1;const A=new LD({Io:P=>{S?ve(on,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(x||(ve(on,`Opening RPC '${e}' stream ${s} transport.`),w.open(),x=!0),ve(on,`RPC '${e}' stream ${s} sending:`,P),w.send(P))},To:()=>w.close()}),C=(P,$,B)=>{P.listen($,L=>{try{B(L)}catch(D){setTimeout(()=>{throw D},0)}})};return C(w,Ec.EventType.OPEN,()=>{S||(ve(on,`RPC '${e}' stream ${s} transport opened.`),A.yo())}),C(w,Ec.EventType.CLOSE,()=>{S||(S=!0,ve(on,`RPC '${e}' stream ${s} transport closed`),A.So())}),C(w,Ec.EventType.ERROR,P=>{S||(S=!0,Ka(on,`RPC '${e}' stream ${s} transport errored:`,P),A.So(new Ee(ie.UNAVAILABLE,"The operation could not be completed")))}),C(w,Ec.EventType.MESSAGE,P=>{var $;if(!S){const B=P.data[0];Je(!!B);const L=B,D=L.error||(($=L[0])===null||$===void 0?void 0:$.error);if(D){ve(on,`RPC '${e}' stream ${s} received error:`,D);const q=D.status;let J=function(R){const V=Ct[R];if(V!==void 0)return q2(V)}(q),k=D.message;J===void 0&&(J=ie.INTERNAL,k="Unknown error status: "+q+" with message "+D.message),S=!0,A.So(new Ee(J,k)),w.close()}else ve(on,`RPC '${e}' stream ${s} received:`,B),A.bo(B)}}),C(u,_2.STAT_EVENT,P=>{P.stat===Hg.PROXY?ve(on,`RPC '${e}' stream ${s} detected buffering proxy`):P.stat===Hg.NOPROXY&&ve(on,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{A.wo()},0),A}}function zm(){return typeof document<"u"?document:null}/**
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
 */function Cf(t){return new G5(t,!0)}/**
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
 */class iS{constructor(e,n,r=1e3,s=1.5,a=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=a,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&ve("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class sS{constructor(e,n,r,s,a,l,u,d){this.ui=e,this.Ho=r,this.Jo=s,this.connection=a,this.authCredentialsProvider=l,this.appCheckCredentialsProvider=u,this.listener=d,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new iS(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===ie.RESOURCE_EXHAUSTED?(Di(n.toString()),Di("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===ie.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new Ee(ie.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return ve("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(ve("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class MD extends sS{constructor(e,n,r,s,a,l){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,l),this.serializer=a}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=Y5(this.serializer,e),r=function(a){if(!("targetChange"in a))return Ne.min();const l=a.targetChange;return l.targetIds&&l.targetIds.length?Ne.min():l.readTime?Zr(l.readTime):Ne.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=ey(this.serializer),n.addTarget=function(a,l){let u;const d=l.target;if(u=Qg(d)?{documents:Z5(a,d)}:{query:eD(a,d)._t},u.targetId=l.targetId,l.resumeToken.approximateByteSize()>0){u.resumeToken=Q2(a,l.resumeToken);const p=Xg(a,l.expectedCount);p!==null&&(u.expectedCount=p)}else if(l.snapshotVersion.compareTo(Ne.min())>0){u.readTime=Hd(a,l.snapshotVersion.toTimestamp());const p=Xg(a,l.expectedCount);p!==null&&(u.expectedCount=p)}return u}(this.serializer,e);const r=nD(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=ey(this.serializer),n.removeTarget=e,this.a_(n)}}class FD extends sS{constructor(e,n,r,s,a,l){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,l),this.serializer=a}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Je(!!e.streamToken),this.lastStreamToken=e.streamToken,Je(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Je(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=J5(e.writeResults,e.commitTime),r=Zr(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=ey(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>X5(this.serializer,r))};this.a_(n)}}/**
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
 */class UD extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new Ee(ie.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Mo(e,Jg(n,r),s,a,l)).catch(a=>{throw a.name==="FirebaseError"?(a.code===ie.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new Ee(ie.UNKNOWN,a.toString())})}Lo(e,n,r,s,a){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,u])=>this.connection.Lo(e,Jg(n,r),s,l,u,a)).catch(l=>{throw l.name==="FirebaseError"?(l.code===ie.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new Ee(ie.UNKNOWN,l.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class BD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Di(n),this.D_=!1):ve("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class zD{constructor(e,n,r,s,a){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=a,this.k_._o(l=>{r.enqueueAndForget(async()=>{Mo(this)&&(ve("RemoteStore","Restarting streams for network reachability change."),await async function(d){const p=Oe(d);p.L_.add(4),await hu(p),p.q_.set("Unknown"),p.L_.delete(4),await Af(p)}(this))})}),this.q_=new BD(r,s)}}async function Af(t){if(Mo(t))for(const e of t.B_)await e(!0)}async function hu(t){for(const e of t.B_)await e(!1)}function oS(t,e){const n=Oe(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),pv(n)?fv(n):ml(n).r_()&&dv(n,e))}function hv(t,e){const n=Oe(t),r=ml(n);n.N_.delete(e),r.r_()&&aS(n,e),n.N_.size===0&&(r.r_()?r.o_():Mo(n)&&n.q_.set("Unknown"))}function dv(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ne.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ml(t).A_(e)}function aS(t,e){t.Q_.xe(e),ml(t).R_(e)}function fv(t){t.Q_=new $5({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),ml(t).start(),t.q_.v_()}function pv(t){return Mo(t)&&!ml(t).n_()&&t.N_.size>0}function Mo(t){return Oe(t).L_.size===0}function lS(t){t.Q_=void 0}async function $D(t){t.q_.set("Online")}async function WD(t){t.N_.forEach((e,n)=>{dv(t,e)})}async function HD(t,e){lS(t),pv(t)?(t.q_.M_(e),fv(t)):t.q_.set("Unknown")}async function qD(t,e,n){if(t.q_.set("Online"),e instanceof K2&&e.state===2&&e.cause)try{await async function(s,a){const l=a.cause;for(const u of a.targetIds)s.N_.has(u)&&(await s.remoteSyncer.rejectListen(u,l),s.N_.delete(u),s.Q_.removeTarget(u))}(t,e)}catch(r){ve("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await qd(t,r)}else if(e instanceof wd?t.Q_.Ke(e):e instanceof G2?t.Q_.He(e):t.Q_.We(e),!n.isEqual(Ne.min()))try{const r=await rS(t.localStore);n.compareTo(r)>=0&&await function(a,l){const u=a.Q_.rt(l);return u.targetChanges.forEach((d,p)=>{if(d.resumeToken.approximateByteSize()>0){const y=a.N_.get(p);y&&a.N_.set(p,y.withResumeToken(d.resumeToken,l))}}),u.targetMismatches.forEach((d,p)=>{const y=a.N_.get(d);if(!y)return;a.N_.set(d,y.withResumeToken(en.EMPTY_BYTE_STRING,y.snapshotVersion)),aS(a,d);const w=new ms(y.target,d,p,y.sequenceNumber);dv(a,w)}),a.remoteSyncer.applyRemoteEvent(u)}(t,n)}catch(r){ve("RemoteStore","Failed to raise snapshot:",r),await qd(t,r)}}async function qd(t,e,n){if(!lu(e))throw e;t.L_.add(1),await hu(t),t.q_.set("Offline"),n||(n=()=>rS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ve("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Af(t)})}function cS(t,e){return e().catch(n=>qd(t,n,e))}async function kf(t){const e=Oe(t),n=Ps(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;GD(e);)try{const s=await kD(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,KD(e,s)}catch(s){await qd(e,s)}uS(e)&&hS(e)}function GD(t){return Mo(t)&&t.O_.length<10}function KD(t,e){t.O_.push(e);const n=Ps(t);n.r_()&&n.V_&&n.m_(e.mutations)}function uS(t){return Mo(t)&&!Ps(t).n_()&&t.O_.length>0}function hS(t){Ps(t).start()}async function QD(t){Ps(t).p_()}async function YD(t){const e=Ps(t);for(const n of t.O_)e.m_(n.mutations)}async function XD(t,e,n){const r=t.O_.shift(),s=sv.from(r,e,n);await cS(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await kf(t)}async function JD(t,e){e&&Ps(t).V_&&await async function(r,s){if(function(l){return U5(l)&&l!==ie.ABORTED}(s.code)){const a=r.O_.shift();Ps(r).s_(),await cS(r,()=>r.remoteSyncer.rejectFailedWrite(a.batchId,s)),await kf(r)}}(t,e),uS(t)&&hS(t)}async function Bw(t,e){const n=Oe(t);n.asyncQueue.verifyOperationInProgress(),ve("RemoteStore","RemoteStore received new credentials");const r=Mo(n);n.L_.add(3),await hu(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Af(n)}async function ZD(t,e){const n=Oe(t);e?(n.L_.delete(2),await Af(n)):e||(n.L_.add(2),await hu(n),n.q_.set("Unknown"))}function ml(t){return t.K_||(t.K_=function(n,r,s){const a=Oe(n);return a.w_(),new MD(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)}(t.datastore,t.asyncQueue,{Eo:$D.bind(null,t),Ro:WD.bind(null,t),mo:HD.bind(null,t),d_:qD.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),pv(t)?fv(t):t.q_.set("Unknown")):(await t.K_.stop(),lS(t))})),t.K_}function Ps(t){return t.U_||(t.U_=function(n,r,s){const a=Oe(n);return a.w_(),new FD(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:QD.bind(null,t),mo:JD.bind(null,t),f_:YD.bind(null,t),g_:XD.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await kf(t)):(await t.U_.stop(),t.O_.length>0&&(ve("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class mv{constructor(e,n,r,s,a){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=a,this.deferred=new ws,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,a){const l=Date.now()+r,u=new mv(e,n,l,s,a);return u.start(r),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Ee(ie.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function gv(t,e){if(Di("AsyncQueue",`${e}: ${t}`),lu(t))return new Ee(ie.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ha{constructor(e){this.comparator=e?(n,r)=>e(n,r)||be.comparator(n.key,r.key):(n,r)=>be.comparator(n.key,r.key),this.keyedMap=Tc(),this.sortedSet=new gt(this.comparator)}static emptySet(e){return new Ha(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ha)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,a=r.getNext().key;if(!s.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ha;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class zw{constructor(){this.W_=new gt(be.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):Re():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Za{constructor(e,n,r,s,a,l,u,d,p){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=a,this.fromCache=l,this.syncStateChanged=u,this.excludesMetadataChanges=d,this.hasCachedResults=p}static fromInitialDocuments(e,n,r,s,a){const l=[];return n.forEach(u=>{l.push({type:0,doc:u})}),new Za(e,n,Ha.emptySet(n),l,r,s,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Tf(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class e6{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class t6{constructor(){this.queries=$w(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=Oe(n),a=s.queries;s.queries=$w(),a.forEach((l,u)=>{for(const d of u.j_)d.onError(r)})})(this,new Ee(ie.ABORTED,"Firestore shutting down"))}}function $w(){return new pl(t=>N2(t),Tf)}async function n6(t,e){const n=Oe(t);let r=3;const s=e.query;let a=n.queries.get(s);a?!a.H_()&&e.J_()&&(r=2):(a=new e6,r=e.J_()?0:1);try{switch(r){case 0:a.z_=await n.onListen(s,!0);break;case 1:a.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(l){const u=gv(l,`Initialization of query '${Na(e.query)}' failed`);return void e.onError(u)}n.queries.set(s,a),a.j_.push(e),e.Z_(n.onlineState),a.z_&&e.X_(a.z_)&&yv(n)}async function r6(t,e){const n=Oe(t),r=e.query;let s=3;const a=n.queries.get(r);if(a){const l=a.j_.indexOf(e);l>=0&&(a.j_.splice(l,1),a.j_.length===0?s=e.J_()?0:1:!a.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function i6(t,e){const n=Oe(t);let r=!1;for(const s of e){const a=s.query,l=n.queries.get(a);if(l){for(const u of l.j_)u.X_(s)&&(r=!0);l.z_=s}}r&&yv(n)}function s6(t,e,n){const r=Oe(t),s=r.queries.get(e);if(s)for(const a of s.j_)a.onError(n);r.queries.delete(e)}function yv(t){t.Y_.forEach(e=>{e.next()})}var ny,Ww;(Ww=ny||(ny={})).ea="default",Ww.Cache="cache";class o6{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Za(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Za.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==ny.Cache}}/**
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
 */class dS{constructor(e){this.key=e}}class fS{constructor(e){this.key=e}}class a6{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Ue(),this.mutatedKeys=Ue(),this.Aa=O2(e),this.Ra=new Ha(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new zw,s=n?n.Ra:this.Ra;let a=n?n.mutatedKeys:this.mutatedKeys,l=s,u=!1;const d=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,p=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((y,w)=>{const x=s.get(y),S=Sf(this.query,w)?w:null,A=!!x&&this.mutatedKeys.has(x.key),C=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let P=!1;x&&S?x.data.isEqual(S.data)?A!==C&&(r.track({type:3,doc:S}),P=!0):this.ga(x,S)||(r.track({type:2,doc:S}),P=!0,(d&&this.Aa(S,d)>0||p&&this.Aa(S,p)<0)&&(u=!0)):!x&&S?(r.track({type:0,doc:S}),P=!0):x&&!S&&(r.track({type:1,doc:x}),P=!0,(d||p)&&(u=!0)),P&&(S?(l=l.add(S),a=C?a.add(y):a.delete(y)):(l=l.delete(y),a=a.delete(y)))}),this.query.limit!==null)for(;l.size>this.query.limit;){const y=this.query.limitType==="F"?l.last():l.first();l=l.delete(y.key),a=a.delete(y.key),r.track({type:1,doc:y})}return{Ra:l,fa:r,ns:u,mutatedKeys:a}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const a=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const l=e.fa.G_();l.sort((y,w)=>function(S,A){const C=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Re()}};return C(S)-C(A)}(y.type,w.type)||this.Aa(y.doc,w.doc)),this.pa(r),s=s!=null&&s;const u=n&&!s?this.ya():[],d=this.da.size===0&&this.current&&!s?1:0,p=d!==this.Ea;return this.Ea=d,l.length!==0||p?{snapshot:new Za(this.query,e.Ra,a,l,e.mutatedKeys,d===0,p,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:u}:{wa:u}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new zw,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Ue(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new fS(r))}),this.da.forEach(r=>{e.has(r)||n.push(new dS(r))}),n}ba(e){this.Ta=e.Ts,this.da=Ue();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Za.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class l6{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class c6{constructor(e){this.key=e,this.va=!1}}class u6{constructor(e,n,r,s,a,l){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=a,this.maxConcurrentLimboResolutions=l,this.Ca={},this.Fa=new pl(u=>N2(u),Tf),this.Ma=new Map,this.xa=new Set,this.Oa=new gt(be.comparator),this.Na=new Map,this.La=new lv,this.Ba={},this.ka=new Map,this.qa=Ja.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function h6(t,e,n=!0){const r=_S(t);let s;const a=r.Fa.get(e);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),s=a.view.Da()):s=await pS(r,e,n,!0),s}async function d6(t,e){const n=_S(t);await pS(n,e,!0,!1)}async function pS(t,e,n,r){const s=await RD(t.localStore,Jr(e)),a=s.targetId,l=t.sharedClientState.addLocalQueryTarget(a,n);let u;return r&&(u=await f6(t,e,a,l==="current",s.resumeToken)),t.isPrimaryClient&&n&&oS(t.remoteStore,s),u}async function f6(t,e,n,r,s){t.Ka=(w,x,S)=>async function(C,P,$,B){let L=P.view.ma($);L.ns&&(L=await Mw(C.localStore,P.query,!1).then(({documents:k})=>P.view.ma(k,L)));const D=B&&B.targetChanges.get(P.targetId),q=B&&B.targetMismatches.get(P.targetId)!=null,J=P.view.applyChanges(L,C.isPrimaryClient,D,q);return qw(C,P.targetId,J.wa),J.snapshot}(t,w,x,S);const a=await Mw(t.localStore,e,!0),l=new a6(e,a.Ts),u=l.ma(a.documents),d=uu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),p=l.applyChanges(u,t.isPrimaryClient,d);qw(t,n,p.wa);const y=new l6(e,n,l);return t.Fa.set(e,y),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),p.snapshot}async function p6(t,e,n){const r=Oe(t),s=r.Fa.get(e),a=r.Ma.get(s.targetId);if(a.length>1)return r.Ma.set(s.targetId,a.filter(l=>!Tf(l,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ty(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&hv(r.remoteStore,s.targetId),ry(r,s.targetId)}).catch(au)):(ry(r,s.targetId),await ty(r.localStore,s.targetId,!0))}async function m6(t,e){const n=Oe(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),hv(n.remoteStore,r.targetId))}async function g6(t,e,n){const r=T6(t);try{const s=await function(l,u){const d=Oe(l),p=Ft.now(),y=u.reduce((S,A)=>S.add(A.key),Ue());let w,x;return d.persistence.runTransaction("Locally write mutations","readwrite",S=>{let A=ji(),C=Ue();return d.cs.getEntries(S,y).next(P=>{A=P,A.forEach(($,B)=>{B.isValidDocument()||(C=C.add($))})}).next(()=>d.localDocuments.getOverlayedDocuments(S,A)).next(P=>{w=P;const $=[];for(const B of u){const L=O5(B,w.get(B.key).overlayedDocument);L!=null&&$.push(new js(B.key,L,b2(L.value.mapValue),Dr.exists(!0)))}return d.mutationQueue.addMutationBatch(S,p,$,u)}).next(P=>{x=P;const $=P.applyToLocalDocumentSet(w,C);return d.documentOverlayCache.saveOverlays(S,P.batchId,$)})}).then(()=>({batchId:x.batchId,changes:V2(w)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(l,u,d){let p=l.Ba[l.currentUser.toKey()];p||(p=new gt(Ke)),p=p.insert(u,d),l.Ba[l.currentUser.toKey()]=p}(r,s.batchId,n),await du(r,s.changes),await kf(r.remoteStore)}catch(s){const a=gv(s,"Failed to persist write");n.reject(a)}}async function mS(t,e){const n=Oe(t);try{const r=await CD(n.localStore,e);e.targetChanges.forEach((s,a)=>{const l=n.Na.get(a);l&&(Je(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?l.va=!0:s.modifiedDocuments.size>0?Je(l.va):s.removedDocuments.size>0&&(Je(l.va),l.va=!1))}),await du(n,r,e)}catch(r){await au(r)}}function Hw(t,e,n){const r=Oe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((a,l)=>{const u=l.view.Z_(e);u.snapshot&&s.push(u.snapshot)}),function(l,u){const d=Oe(l);d.onlineState=u;let p=!1;d.queries.forEach((y,w)=>{for(const x of w.j_)x.Z_(u)&&(p=!0)}),p&&yv(d)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function y6(t,e,n){const r=Oe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),a=s&&s.key;if(a){let l=new gt(be.comparator);l=l.insert(a,cn.newNoDocument(a,Ne.min()));const u=Ue().add(a),d=new Pf(Ne.min(),new Map,new gt(Ke),l,u);await mS(r,d),r.Oa=r.Oa.remove(a),r.Na.delete(e),vv(r)}else await ty(r.localStore,e,!1).then(()=>ry(r,e,n)).catch(au)}async function v6(t,e){const n=Oe(t),r=e.batch.batchId;try{const s=await PD(n.localStore,e);yS(n,r,null),gS(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await du(n,s)}catch(s){await au(s)}}async function _6(t,e,n){const r=Oe(t);try{const s=await function(l,u){const d=Oe(l);return d.persistence.runTransaction("Reject batch","readwrite-primary",p=>{let y;return d.mutationQueue.lookupMutationBatch(p,u).next(w=>(Je(w!==null),y=w.keys(),d.mutationQueue.removeMutationBatch(p,w))).next(()=>d.mutationQueue.performConsistencyCheck(p)).next(()=>d.documentOverlayCache.removeOverlaysForBatchId(p,y,u)).next(()=>d.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(p,y)).next(()=>d.localDocuments.getDocuments(p,y))})}(r.localStore,e);yS(r,e,n),gS(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await du(r,s)}catch(s){await au(s)}}function gS(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function yS(t,e,n){const r=Oe(t);let s=r.Ba[r.currentUser.toKey()];if(s){const a=s.get(e);a&&(n?a.reject(n):a.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function ry(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||vS(t,r)})}function vS(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(hv(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),vv(t))}function qw(t,e,n){for(const r of n)r instanceof dS?(t.La.addReference(r.key,e),w6(t,r)):r instanceof fS?(ve("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||vS(t,r.key)):Re()}function w6(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(ve("SyncEngine","New document in limbo: "+n),t.xa.add(r),vv(t))}function vv(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new be(lt.fromString(e)),r=t.qa.next();t.Na.set(r,new c6(n)),t.Oa=t.Oa.insert(n,r),oS(t.remoteStore,new ms(Jr(j2(n.path)),r,"TargetPurposeLimboResolution",Xy.oe))}}async function du(t,e,n){const r=Oe(t),s=[],a=[],l=[];r.Fa.isEmpty()||(r.Fa.forEach((u,d)=>{l.push(r.Ka(d,e,n).then(p=>{var y;if((p||n)&&r.isPrimaryClient){const w=p?!p.fromCache:(y=n==null?void 0:n.targetChanges.get(d.targetId))===null||y===void 0?void 0:y.current;r.sharedClientState.updateQueryState(d.targetId,w?"current":"not-current")}if(p){s.push(p);const w=uv.Wi(d.targetId,p);a.push(w)}}))}),await Promise.all(l),r.Ca.d_(s),await async function(d,p){const y=Oe(d);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>re.forEach(p,x=>re.forEach(x.$i,S=>y.persistence.referenceDelegate.addReference(w,x.targetId,S)).next(()=>re.forEach(x.Ui,S=>y.persistence.referenceDelegate.removeReference(w,x.targetId,S)))))}catch(w){if(!lu(w))throw w;ve("LocalStore","Failed to update sequence numbers: "+w)}for(const w of p){const x=w.targetId;if(!w.fromCache){const S=y.os.get(x),A=S.snapshotVersion,C=S.withLastLimboFreeSnapshotVersion(A);y.os=y.os.insert(x,C)}}}(r.localStore,a))}async function x6(t,e){const n=Oe(t);if(!n.currentUser.isEqual(e)){ve("SyncEngine","User change. New user:",e.toKey());const r=await nS(n.localStore,e);n.currentUser=e,function(a,l){a.ka.forEach(u=>{u.forEach(d=>{d.reject(new Ee(ie.CANCELLED,l))})}),a.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await du(n,r.hs)}}function E6(t,e){const n=Oe(t),r=n.Na.get(e);if(r&&r.va)return Ue().add(r.key);{let s=Ue();const a=n.Ma.get(e);if(!a)return s;for(const l of a){const u=n.Fa.get(l);s=s.unionWith(u.view.Va)}return s}}function _S(t){const e=Oe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=mS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=E6.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=y6.bind(null,e),e.Ca.d_=i6.bind(null,e.eventManager),e.Ca.$a=s6.bind(null,e.eventManager),e}function T6(t){const e=Oe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=v6.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=_6.bind(null,e),e}class Gd{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Cf(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return bD(this.persistence,new SD,e.initialUser,this.serializer)}Ga(e){return new xD(cv.Zr,this.serializer)}Wa(e){return new jD}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Gd.provider={build:()=>new Gd};class iy{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Hw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=x6.bind(null,this.syncEngine),await ZD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new t6}()}createDatastore(e){const n=Cf(e.databaseInfo.databaseId),r=function(a){return new VD(a)}(e.databaseInfo);return function(a,l,u,d){return new UD(a,l,u,d)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,a,l,u){return new zD(r,s,a,l,u)}(this.localStore,this.datastore,e.asyncQueue,n=>Hw(this.syncEngine,n,0),function(){return Uw.D()?new Uw:new ND}())}createSyncEngine(e,n){return function(s,a,l,u,d,p,y){const w=new u6(s,a,l,u,d,p);return y&&(w.Qa=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const a=Oe(s);ve("RemoteStore","RemoteStore shutting down."),a.L_.add(5),await hu(a),a.k_.shutdown(),a.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}iy.provider={build:()=>new iy};/**
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
 */class S6{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Di("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class I6{constructor(e,n,r,s,a){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ln.UNAUTHENTICATED,this.clientId=T2.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(r,async l=>{ve("FirestoreClient","Received user=",l.uid),await this.authCredentialListener(l),this.user=l}),this.appCheckCredentials.start(r,l=>(ve("FirestoreClient","Received new app check token=",l),this.appCheckCredentialListener(l,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ws;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=gv(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function $m(t,e){t.asyncQueue.verifyOperationInProgress(),ve("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await nS(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Gw(t,e){t.asyncQueue.verifyOperationInProgress();const n=await b6(t);ve("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Bw(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Bw(e.remoteStore,s)),t._onlineComponents=e}async function b6(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ve("FirestoreClient","Using user provided OfflineComponentProvider");try{await $m(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===ie.FAILED_PRECONDITION||s.code===ie.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Ka("Error using user provided cache. Falling back to memory cache: "+n),await $m(t,new Gd)}}else ve("FirestoreClient","Using default OfflineComponentProvider"),await $m(t,new Gd);return t._offlineComponents}async function wS(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ve("FirestoreClient","Using user provided OnlineComponentProvider"),await Gw(t,t._uninitializedComponentsProvider._online)):(ve("FirestoreClient","Using default OnlineComponentProvider"),await Gw(t,new iy))),t._onlineComponents}function P6(t){return wS(t).then(e=>e.syncEngine)}async function C6(t){const e=await wS(t),n=e.eventManager;return n.onListen=h6.bind(null,e.syncEngine),n.onUnlisten=p6.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=d6.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=m6.bind(null,e.syncEngine),n}function A6(t,e,n={}){const r=new ws;return t.asyncQueue.enqueueAndForget(async()=>function(a,l,u,d,p){const y=new S6({next:x=>{y.Za(),l.enqueueAndForget(()=>r6(a,w)),x.fromCache&&d.source==="server"?p.reject(new Ee(ie.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):p.resolve(x)},error:x=>p.reject(x)}),w=new o6(u,y,{includeMetadataChanges:!0,_a:!0});return n6(a,w)}(await C6(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function xS(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Kw=new Map;/**
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
 */function ES(t,e,n){if(!n)throw new Ee(ie.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function k6(t,e,n,r){if(e===!0&&r===!0)throw new Ee(ie.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Qw(t){if(!be.isDocumentKey(t))throw new Ee(ie.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Yw(t){if(be.isDocumentKey(t))throw new Ee(ie.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function _v(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Re()}function Ao(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Ee(ie.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=_v(t);throw new Ee(ie.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Xw{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Ee(ie.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Ee(ie.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}k6("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=xS((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new Ee(ie.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new Ee(ie.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new Ee(ie.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Rf{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xw({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Ee(ie.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Ee(ie.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xw(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new $3;switch(r.type){case"firstParty":return new G3(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Ee(ie.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Kw.get(n);r&&(ve("ComponentProvider","Removing Datastore"),Kw.delete(n),r.terminate())}(this),Promise.resolve()}}function R6(t,e,n,r={}){var s;const a=(t=Ao(t,Rf))._getSettings(),l=`${e}:${n}`;if(a.host!=="firestore.googleapis.com"&&a.host!==l&&Ka("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},a),{host:l,ssl:!1})),r.mockUserToken){let u,d;if(typeof r.mockUserToken=="string")u=r.mockUserToken,d=ln.MOCK_USER;else{u=PT(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new Ee(ie.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new ln(p)}t._authCredentials=new W3(new E2(u,d))}}/**
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
 */class Df{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Df(this.firestore,e,this._query)}}class cr{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new cr(this.firestore,e,this._key)}}class xs extends Df{constructor(e,n,r){super(e,n,j2(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new cr(this.firestore,null,new be(e))}withConverter(e){return new xs(this.firestore,e,this._path)}}function Cn(t,e,...n){if(t=ut(t),ES("collection","path",e),t instanceof Rf){const r=lt.fromString(e,...n);return Yw(r),new xs(t,null,r)}{if(!(t instanceof cr||t instanceof xs))throw new Ee(ie.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(lt.fromString(e,...n));return Yw(r),new xs(t.firestore,null,r)}}function Or(t,e,...n){if(t=ut(t),arguments.length===1&&(e=T2.newId()),ES("doc","path",e),t instanceof Rf){const r=lt.fromString(e,...n);return Qw(r),new cr(t,null,new be(r))}{if(!(t instanceof cr||t instanceof xs))throw new Ee(ie.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(lt.fromString(e,...n));return Qw(r),new cr(t.firestore,t instanceof xs?t.converter:null,new be(r))}}/**
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
 */class Jw{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new iS(this,"async_queue_retry"),this.Vu=()=>{const r=zm();r&&ve("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=zm();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=zm();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new ws;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!lu(e))throw e;ve("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(l){let u=l.message||"";return l.stack&&(u=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),u}(r);throw Di("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=mv.createAndSchedule(this,e,n,r,a=>this.yu(a));return this.Tu.push(s),s}fu(){this.Eu&&Re()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class fu extends Rf{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Jw,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Jw(e),this._firestoreClient=void 0,await e}}}function D6(t,e){const n=typeof t=="object"?t:gf(),r=typeof t=="string"?t:"(default)",s=Rs(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const a=ST("firestore");a&&R6(s,...a)}return s}function TS(t){if(t._terminated)throw new Ee(ie.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||j6(t),t._firestoreClient}function j6(t){var e,n,r;const s=t._freezeSettings(),a=function(u,d,p,y){return new o5(u,d,p,y.host,y.ssl,y.experimentalForceLongPolling,y.experimentalAutoDetectLongPolling,xS(y.experimentalLongPollingOptions),y.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new I6(t._authCredentials,t._appCheckCredentials,t._queue,a,t._componentsProvider&&function(u){const d=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(d),_online:d}}(t._componentsProvider))}/**
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
 */class el{constructor(e){this._byteString=e}static fromBase64String(e){try{return new el(en.fromBase64String(e))}catch(n){throw new Ee(ie.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new el(en.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class jf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Ee(ie.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Jt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class wv{constructor(e){this._methodName=e}}/**
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
 */class xv{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Ee(ie.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Ee(ie.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ke(this._lat,e._lat)||Ke(this._long,e._long)}}/**
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
 */class Ev{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let a=0;a<r.length;++a)if(r[a]!==s[a])return!1;return!0}(this._values,e._values)}}/**
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
 */const N6=/^__.*__$/;class O6{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new js(e,this.data,this.fieldMask,n,this.fieldTransforms):new cu(e,this.data,n,this.fieldTransforms)}}class SS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new js(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function IS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Re()}}class Tv{constructor(e,n,r,s,a,l){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,a===void 0&&this.vu(),this.fieldTransforms=a||[],this.fieldMask=l||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Tv(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Kd(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(IS(this.Cu)&&N6.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class L6{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Cf(e)}Qu(e,n,r,s=!1){return new Tv({Cu:e,methodName:n,qu:r,path:Jt.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function bS(t){const e=t._freezeSettings(),n=Cf(t._databaseId);return new L6(t._databaseId,!!e.ignoreUndefinedProperties,n)}function V6(t,e,n,r,s,a={}){const l=t.Qu(a.merge||a.mergeFields?2:0,e,n,s);Sv("Data must be an object, but it was:",l,r);const u=PS(r,l);let d,p;if(a.merge)d=new Un(l.fieldMask),p=l.fieldTransforms;else if(a.mergeFields){const y=[];for(const w of a.mergeFields){const x=sy(e,w,n);if(!l.contains(x))throw new Ee(ie.INVALID_ARGUMENT,`Field '${x}' is specified in your field mask but missing from your input data.`);AS(y,x)||y.push(x)}d=new Un(y),p=l.fieldTransforms.filter(w=>d.covers(w.field))}else d=null,p=l.fieldTransforms;return new O6(new Pn(u),d,p)}class Nf extends wv{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Nf}}function M6(t,e,n,r){const s=t.Qu(1,e,n);Sv("Data must be an object, but it was:",s,r);const a=[],l=Pn.empty();Vo(r,(d,p)=>{const y=Iv(e,d,n);p=ut(p);const w=s.Nu(y);if(p instanceof Nf)a.push(y);else{const x=Of(p,w);x!=null&&(a.push(y),l.set(y,x))}});const u=new Un(a);return new SS(l,u,s.fieldTransforms)}function F6(t,e,n,r,s,a){const l=t.Qu(1,e,n),u=[sy(e,r,n)],d=[s];if(a.length%2!=0)throw new Ee(ie.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let x=0;x<a.length;x+=2)u.push(sy(e,a[x])),d.push(a[x+1]);const p=[],y=Pn.empty();for(let x=u.length-1;x>=0;--x)if(!AS(p,u[x])){const S=u[x];let A=d[x];A=ut(A);const C=l.Nu(S);if(A instanceof Nf)p.push(S);else{const P=Of(A,C);P!=null&&(p.push(S),y.set(S,P))}}const w=new Un(p);return new SS(y,w,l.fieldTransforms)}function Of(t,e){if(CS(t=ut(t)))return Sv("Unsupported field value:",e,t),PS(t,e);if(t instanceof wv)return function(r,s){if(!IS(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const a=r._toFieldTransform(s);a&&s.fieldTransforms.push(a)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const a=[];let l=0;for(const u of r){let d=Of(u,s.Lu(l));d==null&&(d={nullValue:"NULL_VALUE"}),a.push(d),l++}return{arrayValue:{values:a}}}(t,e)}return function(r,s){if((r=ut(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return A5(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=Ft.fromDate(r);return{timestampValue:Hd(s.serializer,a)}}if(r instanceof Ft){const a=new Ft(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Hd(s.serializer,a)}}if(r instanceof xv)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof el)return{bytesValue:Q2(s.serializer,r._byteString)};if(r instanceof cr){const a=s.databaseId,l=r.firestore._databaseId;if(!l.isEqual(a))throw s.Bu(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:av(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ev)return function(l,u){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:l.toArray().map(d=>{if(typeof d!="number")throw u.Bu("VectorValues must only contain numeric values.");return rv(u.serializer,d)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${_v(r)}`)}(t,e)}function PS(t,e){const n={};return S2(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Vo(t,(r,s)=>{const a=Of(s,e.Mu(r));a!=null&&(n[r]=a)}),{mapValue:{fields:n}}}function CS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ft||t instanceof xv||t instanceof el||t instanceof cr||t instanceof wv||t instanceof Ev)}function Sv(t,e,n){if(!CS(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=_v(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function sy(t,e,n){if((e=ut(e))instanceof jf)return e._internalPath;if(typeof e=="string")return Iv(t,e);throw Kd("Field path arguments must be of type string or ",t,!1,void 0,n)}const U6=new RegExp("[~\\*/\\[\\]]");function Iv(t,e,n){if(e.search(U6)>=0)throw Kd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new jf(...e.split("."))._internalPath}catch{throw Kd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Kd(t,e,n,r,s){const a=r&&!r.isEmpty(),l=s!==void 0;let u=`Function ${e}() called with invalid data`;n&&(u+=" (via `toFirestore()`)"),u+=". ";let d="";return(a||l)&&(d+=" (found",a&&(d+=` in field ${r}`),l&&(d+=` in document ${s}`),d+=")"),new Ee(ie.INVALID_ARGUMENT,u+t+d)}function AS(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class kS{constructor(e,n,r,s,a){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new cr(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new B6(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(RS("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class B6 extends kS{data(){return super.data()}}function RS(t,e){return typeof e=="string"?Iv(t,e):e instanceof jf?e._internalPath:e._delegate._internalPath}/**
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
 */function z6(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Ee(ie.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class $6{convertValue(e,n="none"){switch(Co(e)){case 0:return null;case 1:return e.booleanValue;case 2:return St(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Po(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Re()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Vo(e,(s,a)=>{r[s]=this.convertValue(a,n)}),r}convertVectorValue(e){var n,r,s;const a=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(l=>St(l.doubleValue));return new Ev(a)}convertGeoPoint(e){return new xv(St(e.latitude),St(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Zy(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Gc(e));default:return null}}convertTimestamp(e){const n=bs(e);return new Ft(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=lt.fromString(e);Je(tS(r));const s=new Kc(r.get(1),r.get(3)),a=new be(r.popFirst(5));return s.isEqual(n)||Di(`Document ${a} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),a}}/**
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
 */function W6(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class zh{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class H6 extends kS{constructor(e,n,r,s,a,l){super(e,n,r,s,l),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new xd(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(RS("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class xd extends H6{data(e={}){return super.data(e)}}class q6{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new zh(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new xd(this._firestore,this._userDataWriter,r.key,r,new zh(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Ee(ie.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,a){if(s._snapshot.oldDocs.isEmpty()){let l=0;return s._snapshot.docChanges.map(u=>{const d=new xd(s._firestore,s._userDataWriter,u.doc.key,u.doc,new zh(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:d,oldIndex:-1,newIndex:l++}})}{let l=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(u=>a||u.type!==3).map(u=>{const d=new xd(s._firestore,s._userDataWriter,u.doc.key,u.doc,new zh(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let p=-1,y=-1;return u.type!==0&&(p=l.indexOf(u.doc.key),l=l.delete(u.doc.key)),u.type!==1&&(l=l.add(u.doc),y=l.indexOf(u.doc.key)),{type:G6(u.type),doc:d,oldIndex:p,newIndex:y}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function G6(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Re()}}class K6 extends $6{constructor(e){super(),this.firestore=e}convertBytes(e){return new el(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new cr(this.firestore,null,n)}}function Kr(t){t=Ao(t,Df);const e=Ao(t.firestore,fu),n=TS(e),r=new K6(e);return z6(t._query),A6(n,t._query).then(s=>new q6(e,r,t,s))}function pu(t,e,n,...r){t=Ao(t,cr);const s=Ao(t.firestore,fu),a=bS(s);let l;return l=typeof(e=ut(e))=="string"||e instanceof jf?F6(a,"updateDoc",t._key,e,n,r):M6(a,"updateDoc",t._key,e),bv(s,[l.toMutation(t._key,Dr.exists(!0))])}function mu(t){return bv(Ao(t.firestore,fu),[new iv(t._key,Dr.none())])}function Lf(t,e){const n=Ao(t.firestore,fu),r=Or(t),s=W6(t.converter,e);return bv(n,[V6(bS(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Dr.exists(!1))]).then(()=>r)}function bv(t,e){return function(r,s){const a=new ws;return r.asyncQueue.enqueueAndForget(async()=>g6(await P6(r),s,a)),a.promise}(TS(t),e)}(function(e,n=!0){(function(s){fl=s})(No),Nr(new ur("firestore",(r,{instanceIdentifier:s,options:a})=>{const l=r.getProvider("app").getImmediate(),u=new fu(new H3(r.getProvider("auth-internal")),new Q3(r.getProvider("app-check-internal")),function(p,y){if(!Object.prototype.hasOwnProperty.apply(p.options,["projectId"]))throw new Ee(ie.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Kc(p.options.projectId,y)}(l,s),l);return a=Object.assign({useFetchStreams:n},a),u._setSettings(a),u},"PUBLIC").setMultipleInstances(!0)),An(yw,"4.7.3",e),An(yw,"4.7.3","esm2017")})();/**
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
 */const DS="firebasestorage.googleapis.com",jS="storageBucket",Q6=2*60*1e3,Y6=10*60*1e3;/**
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
 */class _t extends pr{constructor(e,n,r=0){super(Wm(e),`Firebase Storage: ${n} (${Wm(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,_t.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Wm(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var vt;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(vt||(vt={}));function Wm(t){return"storage/"+t}function Pv(){const t="An unknown error occurred, please check the error payload for server response.";return new _t(vt.UNKNOWN,t)}function X6(t){return new _t(vt.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function J6(t){return new _t(vt.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Z6(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new _t(vt.UNAUTHENTICATED,t)}function ej(){return new _t(vt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function tj(t){return new _t(vt.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function nj(){return new _t(vt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function rj(){return new _t(vt.CANCELED,"User canceled the upload/download.")}function ij(t){return new _t(vt.INVALID_URL,"Invalid URL '"+t+"'.")}function sj(t){return new _t(vt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function oj(){return new _t(vt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+jS+"' property when initializing the app?")}function aj(){return new _t(vt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function lj(){return new _t(vt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function cj(t){return new _t(vt.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function oy(t){return new _t(vt.INVALID_ARGUMENT,t)}function NS(){return new _t(vt.APP_DELETED,"The Firebase app was deleted.")}function uj(t){return new _t(vt.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Dc(t,e){return new _t(vt.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function fc(t){throw new _t(vt.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Bn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Bn.makeFromUrl(e,n)}catch{return new Bn(e,"")}if(r.path==="")return r;throw sj(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function a(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const l="(/(.*))?$",u=new RegExp("^gs://"+s+l,"i"),d={bucket:1,path:3};function p(D){D.path_=decodeURIComponent(D.path)}const y="v[A-Za-z0-9_]+",w=n.replace(/[.]/g,"\\."),x="(/([^?#]*).*)?$",S=new RegExp(`^https?://${w}/${y}/b/${s}/o${x}`,"i"),A={bucket:1,path:3},C=n===DS?"(?:storage.googleapis.com|storage.cloud.google.com)":n,P="([^?#]*)",$=new RegExp(`^https?://${C}/${s}/${P}`,"i"),L=[{regex:u,indices:d,postModify:a},{regex:S,indices:A,postModify:p},{regex:$,indices:{bucket:1,path:2},postModify:p}];for(let D=0;D<L.length;D++){const q=L[D],J=q.regex.exec(e);if(J){const k=J[q.indices.bucket];let b=J[q.indices.path];b||(b=""),r=new Bn(k,b),q.postModify(r);break}}if(r==null)throw ij(e);return r}}class hj{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function dj(t,e,n){let r=1,s=null,a=null,l=!1,u=0;function d(){return u===2}let p=!1;function y(...P){p||(p=!0,e.apply(null,P))}function w(P){s=setTimeout(()=>{s=null,t(S,d())},P)}function x(){a&&clearTimeout(a)}function S(P,...$){if(p){x();return}if(P){x(),y.call(null,P,...$);return}if(d()||l){x(),y.call(null,P,...$);return}r<64&&(r*=2);let L;u===1?(u=2,L=0):L=(r+Math.random())*1e3,w(L)}let A=!1;function C(P){A||(A=!0,x(),!p&&(s!==null?(P||(u=2),clearTimeout(s),w(0)):P||(u=1)))}return w(0),a=setTimeout(()=>{l=!0,C(!0)},n),C}function fj(t){t(!1)}/**
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
 */function pj(t){return t!==void 0}function mj(t){return typeof t=="object"&&!Array.isArray(t)}function Cv(t){return typeof t=="string"||t instanceof String}function Zw(t){return Av()&&t instanceof Blob}function Av(){return typeof Blob<"u"}function ex(t,e,n,r){if(r<e)throw oy(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw oy(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Vf(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function OS(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Eo;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Eo||(Eo={}));/**
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
 */function gj(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,a=e.indexOf(t)!==-1;return n||s||a}/**
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
 */class yj{constructor(e,n,r,s,a,l,u,d,p,y,w,x=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=a,this.additionalRetryCodes_=l,this.callback_=u,this.errorCallback_=d,this.timeout_=p,this.progressCallback_=y,this.connectionFactory_=w,this.retry=x,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((S,A)=>{this.resolve_=S,this.reject_=A,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new $h(!1,null,!0));return}const a=this.connectionFactory_();this.pendingConnection_=a;const l=u=>{const d=u.loaded,p=u.lengthComputable?u.total:-1;this.progressCallback_!==null&&this.progressCallback_(d,p)};this.progressCallback_!==null&&a.addUploadProgressListener(l),a.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&a.removeUploadProgressListener(l),this.pendingConnection_=null;const u=a.getErrorCode()===Eo.NO_ERROR,d=a.getStatus();if(!u||gj(d,this.additionalRetryCodes_)&&this.retry){const y=a.getErrorCode()===Eo.ABORT;r(!1,new $h(!1,null,y));return}const p=this.successCodes_.indexOf(d)!==-1;r(!0,new $h(p,a))})},n=(r,s)=>{const a=this.resolve_,l=this.reject_,u=s.connection;if(s.wasSuccessCode)try{const d=this.callback_(u,u.getResponse());pj(d)?a(d):a()}catch(d){l(d)}else if(u!==null){const d=Pv();d.serverResponse=u.getErrorText(),this.errorCallback_?l(this.errorCallback_(u,d)):l(d)}else if(s.canceled){const d=this.appDelete_?NS():rj();l(d)}else{const d=nj();l(d)}};this.canceled_?n(!1,new $h(!1,null,!0)):this.backoffId_=dj(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&fj(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class $h{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function vj(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function _j(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function wj(t,e){e&&(t["X-Firebase-GMPID"]=e)}function xj(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Ej(t,e,n,r,s,a,l=!0){const u=OS(t.urlParams),d=t.url+u,p=Object.assign({},t.headers);return wj(p,e),vj(p,n),_j(p,a),xj(p,r),new yj(d,t.method,p,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,l)}/**
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
 */function Tj(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Sj(...t){const e=Tj();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Av())return new Blob(t);throw new _t(vt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Ij(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function bj(t){if(typeof atob>"u")throw cj("base-64");return atob(t)}/**
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
 */const Yr={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Hm{constructor(e,n){this.data=e,this.contentType=n||null}}function Pj(t,e){switch(t){case Yr.RAW:return new Hm(LS(e));case Yr.BASE64:case Yr.BASE64URL:return new Hm(VS(t,e));case Yr.DATA_URL:return new Hm(Aj(e),kj(e))}throw Pv()}function LS(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const a=r,l=t.charCodeAt(++n);r=65536|(a&1023)<<10|l&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function Cj(t){let e;try{e=decodeURIComponent(t)}catch{throw Dc(Yr.DATA_URL,"Malformed data URL.")}return LS(e)}function VS(t,e){switch(t){case Yr.BASE64:{const s=e.indexOf("-")!==-1,a=e.indexOf("_")!==-1;if(s||a)throw Dc(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Yr.BASE64URL:{const s=e.indexOf("+")!==-1,a=e.indexOf("/")!==-1;if(s||a)throw Dc(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=bj(e)}catch(s){throw s.message.includes("polyfill")?s:Dc(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class MS{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Dc(Yr.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=Rj(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function Aj(t){const e=new MS(t);return e.base64?VS(Yr.BASE64,e.rest):Cj(e.rest)}function kj(t){return new MS(t).contentType}function Rj(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class fs{constructor(e,n){let r=0,s="";Zw(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Zw(this.data_)){const r=this.data_,s=Ij(r,e,n);return s===null?null:new fs(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new fs(r,!0)}}static getBlob(...e){if(Av()){const n=e.map(r=>r instanceof fs?r.data_:r);return new fs(Sj.apply(null,n))}else{const n=e.map(l=>Cv(l)?Pj(Yr.RAW,l).data:l.data_);let r=0;n.forEach(l=>{r+=l.byteLength});const s=new Uint8Array(r);let a=0;return n.forEach(l=>{for(let u=0;u<l.length;u++)s[a++]=l[u]}),new fs(s,!0)}}uploadData(){return this.data_}}/**
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
 */function FS(t){let e;try{e=JSON.parse(t)}catch{return null}return mj(e)?e:null}/**
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
 */function Dj(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function jj(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function US(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function Nj(t,e){return e}class gn{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||Nj}}let Wh=null;function Oj(t){return!Cv(t)||t.length<2?t:US(t)}function BS(){if(Wh)return Wh;const t=[];t.push(new gn("bucket")),t.push(new gn("generation")),t.push(new gn("metageneration")),t.push(new gn("name","fullPath",!0));function e(a,l){return Oj(l)}const n=new gn("name");n.xform=e,t.push(n);function r(a,l){return l!==void 0?Number(l):l}const s=new gn("size");return s.xform=r,t.push(s),t.push(new gn("timeCreated")),t.push(new gn("updated")),t.push(new gn("md5Hash",null,!0)),t.push(new gn("cacheControl",null,!0)),t.push(new gn("contentDisposition",null,!0)),t.push(new gn("contentEncoding",null,!0)),t.push(new gn("contentLanguage",null,!0)),t.push(new gn("contentType",null,!0)),t.push(new gn("metadata","customMetadata",!0)),Wh=t,Wh}function Lj(t,e){function n(){const r=t.bucket,s=t.fullPath,a=new Bn(r,s);return e._makeStorageReference(a)}Object.defineProperty(t,"ref",{get:n})}function Vj(t,e,n){const r={};r.type="file";const s=n.length;for(let a=0;a<s;a++){const l=n[a];r[l.local]=l.xform(r,e[l.server])}return Lj(r,t),r}function zS(t,e,n){const r=FS(e);return r===null?null:Vj(t,r,n)}function Mj(t,e,n,r){const s=FS(e);if(s===null||!Cv(s.downloadTokens))return null;const a=s.downloadTokens;if(a.length===0)return null;const l=encodeURIComponent;return a.split(",").map(p=>{const y=t.bucket,w=t.fullPath,x="/b/"+l(y)+"/o/"+l(w),S=Vf(x,n,r),A=OS({alt:"media",token:p});return S+A})[0]}function Fj(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const a=e[s];a.writable&&(n[a.server]=t[a.local])}return JSON.stringify(n)}class kv{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function $S(t){if(!t)throw Pv()}function Uj(t,e){function n(r,s){const a=zS(t,s,e);return $S(a!==null),a}return n}function Bj(t,e){function n(r,s){const a=zS(t,s,e);return $S(a!==null),Mj(a,s,t.host,t._protocol)}return n}function WS(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=ej():s=Z6():n.getStatus()===402?s=J6(t.bucket):n.getStatus()===403?s=tj(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function HS(t){const e=WS(t);function n(r,s){let a=e(r,s);return r.getStatus()===404&&(a=X6(t.path)),a.serverResponse=s.serverResponse,a}return n}function zj(t,e,n){const r=e.fullServerUrl(),s=Vf(r,t.host,t._protocol),a="GET",l=t.maxOperationRetryTime,u=new kv(s,a,Bj(t,n),l);return u.errorHandler=HS(e),u}function $j(t,e){const n=e.fullServerUrl(),r=Vf(n,t.host,t._protocol),s="DELETE",a=t.maxOperationRetryTime;function l(d,p){}const u=new kv(r,s,l,a);return u.successCodes=[200,204],u.errorHandler=HS(e),u}function Wj(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Hj(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=Wj(null,e)),r}function qj(t,e,n,r,s){const a=e.bucketOnlyServerUrl(),l={"X-Goog-Upload-Protocol":"multipart"};function u(){let L="";for(let D=0;D<2;D++)L=L+Math.random().toString().slice(2);return L}const d=u();l["Content-Type"]="multipart/related; boundary="+d;const p=Hj(e,r,s),y=Fj(p,n),w="--"+d+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+y+`\r
--`+d+`\r
Content-Type: `+p.contentType+`\r
\r
`,x=`\r
--`+d+"--",S=fs.getBlob(w,r,x);if(S===null)throw aj();const A={name:p.fullPath},C=Vf(a,t.host,t._protocol),P="POST",$=t.maxUploadRetryTime,B=new kv(C,P,Uj(t,n),$);return B.urlParams=A,B.headers=l,B.body=S.uploadData(),B.errorHandler=WS(e),B}class Gj{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Eo.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Eo.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Eo.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw fc("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const a in s)s.hasOwnProperty(a)&&this.xhr_.setRequestHeader(a,s[a].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw fc("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw fc("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw fc("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw fc("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Kj extends Gj{initXhr(){this.xhr_.responseType="text"}}function Rv(){return new Kj}/**
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
 */class ko{constructor(e,n){this._service=e,n instanceof Bn?this._location=n:this._location=Bn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ko(e,n)}get root(){const e=new Bn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return US(this._location.path)}get storage(){return this._service}get parent(){const e=Dj(this._location.path);if(e===null)return null;const n=new Bn(this._location.bucket,e);return new ko(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw uj(e)}}function Qj(t,e,n){t._throwIfRoot("uploadBytes");const r=qj(t.storage,t._location,BS(),new fs(e,!0),n);return t.storage.makeRequestWithTokens(r,Rv).then(s=>({metadata:s,ref:t}))}function Yj(t){t._throwIfRoot("getDownloadURL");const e=zj(t.storage,t._location,BS());return t.storage.makeRequestWithTokens(e,Rv).then(n=>{if(n===null)throw lj();return n})}function Xj(t){t._throwIfRoot("deleteObject");const e=$j(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Rv)}function Jj(t,e){const n=jj(t._location.path,e),r=new Bn(t._location.bucket,n);return new ko(t.storage,r)}/**
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
 */function Zj(t){return/^[A-Za-z]+:\/\//.test(t)}function eN(t,e){return new ko(t,e)}function qS(t,e){if(t instanceof Dv){const n=t;if(n._bucket==null)throw oj();const r=new ko(n,n._bucket);return e!=null?qS(r,e):r}else return e!==void 0?Jj(t,e):t}function tN(t,e){if(e&&Zj(e)){if(t instanceof Dv)return eN(t,e);throw oy("To use ref(service, url), the first argument must be a Storage instance.")}else return qS(t,e)}function tx(t,e){const n=e==null?void 0:e[jS];return n==null?null:Bn.makeFromBucketSpec(n,t)}function nN(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:PT(s,t.app.options.projectId))}class Dv{constructor(e,n,r,s,a){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=a,this._bucket=null,this._host=DS,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Q6,this._maxUploadRetryTime=Y6,this._requests=new Set,s!=null?this._bucket=Bn.makeFromBucketSpec(s,this._host):this._bucket=tx(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Bn.makeFromBucketSpec(this._url,e):this._bucket=tx(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ex("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ex("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ko(this,e)}_makeRequest(e,n,r,s,a=!0){if(this._deleted)return new hj(NS());{const l=Ej(e,this._appId,r,s,n,this._firebaseVersion,a);return this._requests.add(l),l.getPromise().then(()=>this._requests.delete(l),()=>this._requests.delete(l)),l}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const nx="@firebase/storage",rx="0.13.2";/**
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
 */const GS="storage";function jv(t,e,n){return t=ut(t),Qj(t,e,n)}function Nv(t){return t=ut(t),Yj(t)}function Ov(t){return t=ut(t),Xj(t)}function tl(t,e){return t=ut(t),tN(t,e)}function rN(t=gf(),e){t=ut(t);const r=Rs(t,GS).getImmediate({identifier:e}),s=ST("storage");return s&&iN(r,...s),r}function iN(t,e,n,r={}){nN(t,e,n,r)}function sN(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Dv(n,r,s,e,No)}function oN(){Nr(new ur(GS,sN,"PUBLIC").setMultipleInstances(!0)),An(nx,rx,""),An(nx,rx,"esm2017")}oN();const KS="@firebase/installations",Lv="0.6.9";/**
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
 */const QS=1e4,YS=`w:${Lv}`,XS="FIS_v2",aN="https://firebaseinstallations.googleapis.com/v1",lN=60*60*1e3,cN="installations",uN="Installations";/**
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
 */const hN={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ro=new jo(cN,uN,hN);function JS(t){return t instanceof pr&&t.code.includes("request-failed")}/**
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
 */function ZS({projectId:t}){return`${aN}/projects/${t}/installations`}function eI(t){return{token:t.token,requestStatus:2,expiresIn:fN(t.expiresIn),creationTime:Date.now()}}async function tI(t,e){const r=(await e.json()).error;return Ro.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function nI({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function dN(t,{refreshToken:e}){const n=nI(t);return n.append("Authorization",pN(e)),n}async function rI(t){const e=await t();return e.status>=500&&e.status<600?t():e}function fN(t){return Number(t.replace("s","000"))}function pN(t){return`${XS} ${t}`}/**
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
 */async function mN({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=ZS(t),s=nI(t),a=e.getImmediate({optional:!0});if(a){const p=await a.getHeartbeatsHeader();p&&s.append("x-firebase-client",p)}const l={fid:n,authVersion:XS,appId:t.appId,sdkVersion:YS},u={method:"POST",headers:s,body:JSON.stringify(l)},d=await rI(()=>fetch(r,u));if(d.ok){const p=await d.json();return{fid:p.fid||n,registrationStatus:2,refreshToken:p.refreshToken,authToken:eI(p.authToken)}}else throw await tI("Create Installation",d)}/**
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
 */function iI(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function gN(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const yN=/^[cdef][\w-]{21}$/,ay="";function vN(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=_N(t);return yN.test(n)?n:ay}catch{return ay}}function _N(t){return gN(t).substr(0,22)}/**
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
 */function Mf(t){return`${t.appName}!${t.appId}`}/**
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
 */const sI=new Map;function oI(t,e){const n=Mf(t);aI(n,e),wN(n,e)}function aI(t,e){const n=sI.get(t);if(n)for(const r of n)r(e)}function wN(t,e){const n=xN();n&&n.postMessage({key:t,fid:e}),EN()}let vo=null;function xN(){return!vo&&"BroadcastChannel"in self&&(vo=new BroadcastChannel("[Firebase] FID Change"),vo.onmessage=t=>{aI(t.data.key,t.data.fid)}),vo}function EN(){sI.size===0&&vo&&(vo.close(),vo=null)}/**
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
 */const TN="firebase-installations-database",SN=1,Do="firebase-installations-store";let qm=null;function Vv(){return qm||(qm=jT(TN,SN,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Do)}}})),qm}async function Qd(t,e){const n=Mf(t),s=(await Vv()).transaction(Do,"readwrite"),a=s.objectStore(Do),l=await a.get(n);return await a.put(e,n),await s.done,(!l||l.fid!==e.fid)&&oI(t,e.fid),e}async function lI(t){const e=Mf(t),r=(await Vv()).transaction(Do,"readwrite");await r.objectStore(Do).delete(e),await r.done}async function Ff(t,e){const n=Mf(t),s=(await Vv()).transaction(Do,"readwrite"),a=s.objectStore(Do),l=await a.get(n),u=e(l);return u===void 0?await a.delete(n):await a.put(u,n),await s.done,u&&(!l||l.fid!==u.fid)&&oI(t,u.fid),u}/**
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
 */async function Mv(t){let e;const n=await Ff(t.appConfig,r=>{const s=IN(r),a=bN(t,s);return e=a.registrationPromise,a.installationEntry});return n.fid===ay?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function IN(t){const e=t||{fid:vN(),registrationStatus:0};return cI(e)}function bN(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Ro.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=PN(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:CN(t)}:{installationEntry:e}}async function PN(t,e){try{const n=await mN(t,e);return Qd(t.appConfig,n)}catch(n){throw JS(n)&&n.customData.serverCode===409?await lI(t.appConfig):await Qd(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function CN(t){let e=await ix(t.appConfig);for(;e.registrationStatus===1;)await iI(100),e=await ix(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Mv(t);return r||n}return e}function ix(t){return Ff(t,e=>{if(!e)throw Ro.create("installation-not-found");return cI(e)})}function cI(t){return AN(t)?{fid:t.fid,registrationStatus:0}:t}function AN(t){return t.registrationStatus===1&&t.registrationTime+QS<Date.now()}/**
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
 */async function kN({appConfig:t,heartbeatServiceProvider:e},n){const r=RN(t,n),s=dN(t,n),a=e.getImmediate({optional:!0});if(a){const p=await a.getHeartbeatsHeader();p&&s.append("x-firebase-client",p)}const l={installation:{sdkVersion:YS,appId:t.appId}},u={method:"POST",headers:s,body:JSON.stringify(l)},d=await rI(()=>fetch(r,u));if(d.ok){const p=await d.json();return eI(p)}else throw await tI("Generate Auth Token",d)}function RN(t,{fid:e}){return`${ZS(t)}/${e}/authTokens:generate`}/**
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
 */async function Fv(t,e=!1){let n;const r=await Ff(t.appConfig,a=>{if(!uI(a))throw Ro.create("not-registered");const l=a.authToken;if(!e&&NN(l))return a;if(l.requestStatus===1)return n=DN(t,e),a;{if(!navigator.onLine)throw Ro.create("app-offline");const u=LN(a);return n=jN(t,u),u}});return n?await n:r.authToken}async function DN(t,e){let n=await sx(t.appConfig);for(;n.authToken.requestStatus===1;)await iI(100),n=await sx(t.appConfig);const r=n.authToken;return r.requestStatus===0?Fv(t,e):r}function sx(t){return Ff(t,e=>{if(!uI(e))throw Ro.create("not-registered");const n=e.authToken;return VN(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function jN(t,e){try{const n=await kN(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Qd(t.appConfig,r),n}catch(n){if(JS(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await lI(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Qd(t.appConfig,r)}throw n}}function uI(t){return t!==void 0&&t.registrationStatus===2}function NN(t){return t.requestStatus===2&&!ON(t)}function ON(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+lN}function LN(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function VN(t){return t.requestStatus===1&&t.requestTime+QS<Date.now()}/**
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
 */async function MN(t){const e=t,{installationEntry:n,registrationPromise:r}=await Mv(e);return r?r.catch(console.error):Fv(e).catch(console.error),n.fid}/**
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
 */async function FN(t,e=!1){const n=t;return await UN(n),(await Fv(n,e)).token}async function UN(t){const{registrationPromise:e}=await Mv(t);e&&await e}/**
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
 */function BN(t){if(!t||!t.options)throw Gm("App Configuration");if(!t.name)throw Gm("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Gm(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Gm(t){return Ro.create("missing-app-config-values",{valueName:t})}/**
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
 */const hI="installations",zN="installations-internal",$N=t=>{const e=t.getProvider("app").getImmediate(),n=BN(e),r=Rs(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},WN=t=>{const e=t.getProvider("app").getImmediate(),n=Rs(e,hI).getImmediate();return{getId:()=>MN(n),getToken:s=>FN(n,s)}};function HN(){Nr(new ur(hI,$N,"PUBLIC")),Nr(new ur(zN,WN,"PRIVATE"))}HN();An(KS,Lv);An(KS,Lv,"esm2017");/**
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
 */const Yd="analytics",qN="firebase_id",GN="origin",KN=60*1e3,QN="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Uv="https://www.googletagmanager.com/gtag/js";/**
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
 */const kn=new mf("@firebase/analytics");/**
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
 */const YN={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},zn=new jo("analytics","Analytics",YN);/**
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
 */function XN(t){if(!t.startsWith(Uv)){const e=zn.create("invalid-gtag-resource",{gtagURL:t});return kn.warn(e.message),""}return t}function dI(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function JN(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function ZN(t,e){const n=JN("firebase-js-sdk-policy",{createScriptURL:XN}),r=document.createElement("script"),s=`${Uv}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function eO(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function tO(t,e,n,r,s,a){const l=r[s];try{if(l)await e[l];else{const d=(await dI(n)).find(p=>p.measurementId===s);d&&await e[d.appId]}}catch(u){kn.error(u)}t("config",s,a)}async function nO(t,e,n,r,s){try{let a=[];if(s&&s.send_to){let l=s.send_to;Array.isArray(l)||(l=[l]);const u=await dI(n);for(const d of l){const p=u.find(w=>w.measurementId===d),y=p&&e[p.appId];if(y)a.push(y);else{a=[];break}}}a.length===0&&(a=Object.values(e)),await Promise.all(a),t("event",r,s||{})}catch(a){kn.error(a)}}function rO(t,e,n,r){async function s(a,...l){try{if(a==="event"){const[u,d]=l;await nO(t,e,n,u,d)}else if(a==="config"){const[u,d]=l;await tO(t,e,n,r,u,d)}else if(a==="consent"){const[u,d]=l;t("consent",u,d)}else if(a==="get"){const[u,d,p]=l;t("get",u,d,p)}else if(a==="set"){const[u]=l;t("set",u)}else t(a,...l)}catch(u){kn.error(u)}}return s}function iO(t,e,n,r,s){let a=function(...l){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(a=window[s]),window[s]=rO(a,t,e,n),{gtagCore:a,wrappedGtag:window[s]}}function sO(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Uv)&&n.src.includes(t))return n;return null}/**
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
 */const oO=30,aO=1e3;class lO{constructor(e={},n=aO){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const fI=new lO;function cO(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function uO(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:cO(r)},a=QN.replace("{app-id}",n),l=await fetch(a,s);if(l.status!==200&&l.status!==304){let u="";try{const d=await l.json();!((e=d.error)===null||e===void 0)&&e.message&&(u=d.error.message)}catch{}throw zn.create("config-fetch-failed",{httpStatus:l.status,responseMessage:u})}return l.json()}async function hO(t,e=fI,n){const{appId:r,apiKey:s,measurementId:a}=t.options;if(!r)throw zn.create("no-app-id");if(!s){if(a)return{measurementId:a,appId:r};throw zn.create("no-api-key")}const l=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},u=new pO;return setTimeout(async()=>{u.abort()},KN),pI({appId:r,apiKey:s,measurementId:a},l,u,e)}async function pI(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=fI){var a;const{appId:l,measurementId:u}=t;try{await dO(r,e)}catch(d){if(u)return kn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:l,measurementId:u};throw d}try{const d=await uO(t);return s.deleteThrottleMetadata(l),d}catch(d){const p=d;if(!fO(p)){if(s.deleteThrottleMetadata(l),u)return kn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:l,measurementId:u};throw d}const y=Number((a=p==null?void 0:p.customData)===null||a===void 0?void 0:a.httpStatus)===503?B_(n,s.intervalMillis,oO):B_(n,s.intervalMillis),w={throttleEndTimeMillis:Date.now()+y,backoffCount:n+1};return s.setThrottleMetadata(l,w),kn.debug(`Calling attemptFetch again in ${y} millis`),pI(t,w,r,s)}}function dO(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),a=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(a),r(zn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function fO(t){if(!(t instanceof pr)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class pO{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function mO(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const a=await e,l=Object.assign(Object.assign({},r),{send_to:a});t("event",n,l)}}/**
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
 */async function gO(){if(AT())try{await kT()}catch(t){return kn.warn(zn.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return kn.warn(zn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function yO(t,e,n,r,s,a,l){var u;const d=hO(t);d.then(S=>{n[S.measurementId]=S.appId,t.options.measurementId&&S.measurementId!==t.options.measurementId&&kn.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${S.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(S=>kn.error(S)),e.push(d);const p=gO().then(S=>{if(S)return r.getId()}),[y,w]=await Promise.all([d,p]);sO(a)||ZN(a,y.measurementId),s("js",new Date);const x=(u=l==null?void 0:l.config)!==null&&u!==void 0?u:{};return x[GN]="firebase",x.update=!0,w!=null&&(x[qN]=w),s("config",y.measurementId,x),y.measurementId}/**
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
 */class vO{constructor(e){this.app=e}_delete(){return delete jc[this.app.options.appId],Promise.resolve()}}let jc={},ox=[];const ax={};let Km="dataLayer",_O="gtag",lx,mI,cx=!1;function wO(){const t=[];if(CT()&&t.push("This is a browser extension environment."),hk()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=zn.create("invalid-analytics-context",{errorInfo:e});kn.warn(n.message)}}function xO(t,e,n){wO();const r=t.options.appId;if(!r)throw zn.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)kn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw zn.create("no-api-key");if(jc[r]!=null)throw zn.create("already-exists",{id:r});if(!cx){eO(Km);const{wrappedGtag:a,gtagCore:l}=iO(jc,ox,ax,Km,_O);mI=a,lx=l,cx=!0}return jc[r]=yO(t,ox,ax,e,lx,Km,n),new vO(t)}function EO(t=gf()){t=ut(t);const e=Rs(t,Yd);return e.isInitialized()?e.getImmediate():TO(t)}function TO(t,e={}){const n=Rs(t,Yd);if(n.isInitialized()){const s=n.getImmediate();if(zc(e,n.getOptions()))return s;throw zn.create("already-initialized")}return n.initialize({options:e})}function gI(t,e,n,r){t=ut(t),mO(mI,jc[t.app.options.appId],e,n,r).catch(s=>kn.error(s))}const ux="@firebase/analytics",hx="0.10.8";function SO(){Nr(new ur(Yd,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return xO(r,s,n)},"PUBLIC")),Nr(new ur("analytics-internal",t,"PRIVATE")),An(ux,hx),An(ux,hx,"esm2017");function t(e){try{const n=e.getProvider(Yd).getImmediate();return{logEvent:(r,s,a)=>gI(n,r,s,a)}}catch(n){throw zn.create("interop-component-reg-failed",{reason:n})}}}SO();const IO={apiKey:"AIzaSyCkDKk-NgLyyLpC0FZAjPyo-ko9iQeNxGA",authDomain:"abdoalatrash-portfolio.firebaseapp.com",projectId:"abdoalatrash-portfolio",storageBucket:"abdoalatrash-portfolio.appspot.com",messagingSenderId:"316799589093",appId:"1:316799589093:web:15b0109aaafb2cd0fc79e8",measurementId:"G-S17NCCB8K8"},Uf=NT(IO),Nc=B3(Uf),ct=D6(Uf),nl=rN(Uf),bO=EO(Uf),yI=new Ti,vI=M.createContext(void 0),PO=({children:t})=>{const e=localStorage.getItem("theme"),n=window.matchMedia("(prefers-color-scheme: dark)").matches,r=e||(n?"dark":"light"),[s,a]=M.useState(r);M.useEffect(()=>{document.documentElement.setAttribute("data-theme",s),localStorage.setItem("theme",s)},[s]);const l=()=>{a(u=>u==="light"?"dark":"light")};return m.jsx(vI.Provider,{value:{theme:s,toggleTheme:l},children:t})},Bv=()=>{const t=M.useContext(vI);if(t===void 0)throw new Error("useTheme must be used within a ThemeProvider");return t};var un=function(){return un=Object.assign||function(e){for(var n,r=1,s=arguments.length;r<s;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},un.apply(this,arguments)};function Jc(t,e,n){if(n||arguments.length===2)for(var r=0,s=e.length,a;r<s;r++)(a||!(r in e))&&(a||(a=Array.prototype.slice.call(e,0,r)),a[r]=e[r]);return t.concat(a||Array.prototype.slice.call(e))}var st="-ms-",Oc="-moz-",Ye="-webkit-",_I="comm",Bf="rule",zv="decl",CO="@import",wI="@keyframes",AO="@layer",xI=Math.abs,$v=String.fromCharCode,ly=Object.assign;function kO(t,e){return Ht(t,0)^45?(((e<<2^Ht(t,0))<<2^Ht(t,1))<<2^Ht(t,2))<<2^Ht(t,3):0}function EI(t){return t.trim()}function Ei(t,e){return(t=e.exec(t))?t[0]:t}function Ve(t,e,n){return t.replace(e,n)}function Ed(t,e,n){return t.indexOf(e,n)}function Ht(t,e){return t.charCodeAt(e)|0}function rl(t,e,n){return t.slice(e,n)}function Gr(t){return t.length}function TI(t){return t.length}function Ic(t,e){return e.push(t),t}function RO(t,e){return t.map(e).join("")}function dx(t,e){return t.filter(function(n){return!Ei(n,e)})}var zf=1,il=1,SI=0,dr=0,kt=0,gl="";function $f(t,e,n,r,s,a,l,u){return{value:t,root:e,parent:n,type:r,props:s,children:a,line:zf,column:il,length:l,return:"",siblings:u}}function as(t,e){return ly($f("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Da(t){for(;t.root;)t=as(t.root,{children:[t]});Ic(t,t.siblings)}function DO(){return kt}function jO(){return kt=dr>0?Ht(gl,--dr):0,il--,kt===10&&(il=1,zf--),kt}function jr(){return kt=dr<SI?Ht(gl,dr++):0,il++,kt===10&&(il=1,zf++),kt}function To(){return Ht(gl,dr)}function Td(){return dr}function Wf(t,e){return rl(gl,t,e)}function cy(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function NO(t){return zf=il=1,SI=Gr(gl=t),dr=0,[]}function OO(t){return gl="",t}function Qm(t){return EI(Wf(dr-1,uy(t===91?t+2:t===40?t+1:t)))}function LO(t){for(;(kt=To())&&kt<33;)jr();return cy(t)>2||cy(kt)>3?"":" "}function VO(t,e){for(;--e&&jr()&&!(kt<48||kt>102||kt>57&&kt<65||kt>70&&kt<97););return Wf(t,Td()+(e<6&&To()==32&&jr()==32))}function uy(t){for(;jr();)switch(kt){case t:return dr;case 34:case 39:t!==34&&t!==39&&uy(kt);break;case 40:t===41&&uy(t);break;case 92:jr();break}return dr}function MO(t,e){for(;jr()&&t+kt!==57;)if(t+kt===84&&To()===47)break;return"/*"+Wf(e,dr-1)+"*"+$v(t===47?t:jr())}function FO(t){for(;!cy(To());)jr();return Wf(t,dr)}function UO(t){return OO(Sd("",null,null,null,[""],t=NO(t),0,[0],t))}function Sd(t,e,n,r,s,a,l,u,d){for(var p=0,y=0,w=l,x=0,S=0,A=0,C=1,P=1,$=1,B=0,L="",D=s,q=a,J=r,k=L;P;)switch(A=B,B=jr()){case 40:if(A!=108&&Ht(k,w-1)==58){Ed(k+=Ve(Qm(B),"&","&\f"),"&\f",xI(p?u[p-1]:0))!=-1&&($=-1);break}case 34:case 39:case 91:k+=Qm(B);break;case 9:case 10:case 13:case 32:k+=LO(A);break;case 92:k+=VO(Td()-1,7);continue;case 47:switch(To()){case 42:case 47:Ic(BO(MO(jr(),Td()),e,n,d),d);break;default:k+="/"}break;case 123*C:u[p++]=Gr(k)*$;case 125*C:case 59:case 0:switch(B){case 0:case 125:P=0;case 59+y:$==-1&&(k=Ve(k,/\f/g,"")),S>0&&Gr(k)-w&&Ic(S>32?px(k+";",r,n,w-1,d):px(Ve(k," ","")+";",r,n,w-2,d),d);break;case 59:k+=";";default:if(Ic(J=fx(k,e,n,p,y,s,u,L,D=[],q=[],w,a),a),B===123)if(y===0)Sd(k,e,J,J,D,a,w,u,q);else switch(x===99&&Ht(k,3)===110?100:x){case 100:case 108:case 109:case 115:Sd(t,J,J,r&&Ic(fx(t,J,J,0,0,s,u,L,s,D=[],w,q),q),s,q,w,u,r?D:q);break;default:Sd(k,J,J,J,[""],q,0,u,q)}}p=y=S=0,C=$=1,L=k="",w=l;break;case 58:w=1+Gr(k),S=A;default:if(C<1){if(B==123)--C;else if(B==125&&C++==0&&jO()==125)continue}switch(k+=$v(B),B*C){case 38:$=y>0?1:(k+="\f",-1);break;case 44:u[p++]=(Gr(k)-1)*$,$=1;break;case 64:To()===45&&(k+=Qm(jr())),x=To(),y=w=Gr(L=k+=FO(Td())),B++;break;case 45:A===45&&Gr(k)==2&&(C=0)}}return a}function fx(t,e,n,r,s,a,l,u,d,p,y,w){for(var x=s-1,S=s===0?a:[""],A=TI(S),C=0,P=0,$=0;C<r;++C)for(var B=0,L=rl(t,x+1,x=xI(P=l[C])),D=t;B<A;++B)(D=EI(P>0?S[B]+" "+L:Ve(L,/&\f/g,S[B])))&&(d[$++]=D);return $f(t,e,n,s===0?Bf:u,d,p,y,w)}function BO(t,e,n,r){return $f(t,e,n,_I,$v(DO()),rl(t,2,-2),0,r)}function px(t,e,n,r,s){return $f(t,e,n,zv,rl(t,0,r),rl(t,r+1,-1),r,s)}function II(t,e,n){switch(kO(t,e)){case 5103:return Ye+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ye+t+t;case 4789:return Oc+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Ye+t+Oc+t+st+t+t;case 5936:switch(Ht(t,e+11)){case 114:return Ye+t+st+Ve(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Ye+t+st+Ve(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Ye+t+st+Ve(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return Ye+t+st+t+t;case 6165:return Ye+t+st+"flex-"+t+t;case 5187:return Ye+t+Ve(t,/(\w+).+(:[^]+)/,Ye+"box-$1$2"+st+"flex-$1$2")+t;case 5443:return Ye+t+st+"flex-item-"+Ve(t,/flex-|-self/g,"")+(Ei(t,/flex-|baseline/)?"":st+"grid-row-"+Ve(t,/flex-|-self/g,""))+t;case 4675:return Ye+t+st+"flex-line-pack"+Ve(t,/align-content|flex-|-self/g,"")+t;case 5548:return Ye+t+st+Ve(t,"shrink","negative")+t;case 5292:return Ye+t+st+Ve(t,"basis","preferred-size")+t;case 6060:return Ye+"box-"+Ve(t,"-grow","")+Ye+t+st+Ve(t,"grow","positive")+t;case 4554:return Ye+Ve(t,/([^-])(transform)/g,"$1"+Ye+"$2")+t;case 6187:return Ve(Ve(Ve(t,/(zoom-|grab)/,Ye+"$1"),/(image-set)/,Ye+"$1"),t,"")+t;case 5495:case 3959:return Ve(t,/(image-set\([^]*)/,Ye+"$1$`$1");case 4968:return Ve(Ve(t,/(.+:)(flex-)?(.*)/,Ye+"box-pack:$3"+st+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ye+t+t;case 4200:if(!Ei(t,/flex-|baseline/))return st+"grid-column-align"+rl(t,e)+t;break;case 2592:case 3360:return st+Ve(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,s){return e=s,Ei(r.props,/grid-\w+-end/)})?~Ed(t+(n=n[e].value),"span",0)?t:st+Ve(t,"-start","")+t+st+"grid-row-span:"+(~Ed(n,"span",0)?Ei(n,/\d+/):+Ei(n,/\d+/)-+Ei(t,/\d+/))+";":st+Ve(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return Ei(r.props,/grid-\w+-start/)})?t:st+Ve(Ve(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return Ve(t,/(.+)-inline(.+)/,Ye+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Gr(t)-1-e>6)switch(Ht(t,e+1)){case 109:if(Ht(t,e+4)!==45)break;case 102:return Ve(t,/(.+:)(.+)-([^]+)/,"$1"+Ye+"$2-$3$1"+Oc+(Ht(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Ed(t,"stretch",0)?II(Ve(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return Ve(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,s,a,l,u,d,p){return st+s+":"+a+p+(l?st+s+"-span:"+(u?d:+d-+a)+p:"")+t});case 4949:if(Ht(t,e+6)===121)return Ve(t,":",":"+Ye)+t;break;case 6444:switch(Ht(t,Ht(t,14)===45?18:11)){case 120:return Ve(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ye+(Ht(t,14)===45?"inline-":"")+"box$3$1"+Ye+"$2$3$1"+st+"$2box$3")+t;case 100:return Ve(t,":",":"+st)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Ve(t,"scroll-","scroll-snap-")+t}return t}function Xd(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function zO(t,e,n,r){switch(t.type){case AO:if(t.children.length)break;case CO:case zv:return t.return=t.return||t.value;case _I:return"";case wI:return t.return=t.value+"{"+Xd(t.children,r)+"}";case Bf:if(!Gr(t.value=t.props.join(",")))return""}return Gr(n=Xd(t.children,r))?t.return=t.value+"{"+n+"}":""}function $O(t){var e=TI(t);return function(n,r,s,a){for(var l="",u=0;u<e;u++)l+=t[u](n,r,s,a)||"";return l}}function WO(t){return function(e){e.root||(e=e.return)&&t(e)}}function HO(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case zv:t.return=II(t.value,t.length,n);return;case wI:return Xd([as(t,{value:Ve(t.value,"@","@"+Ye)})],r);case Bf:if(t.length)return RO(n=t.props,function(s){switch(Ei(s,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Da(as(t,{props:[Ve(s,/:(read-\w+)/,":"+Oc+"$1")]})),Da(as(t,{props:[s]})),ly(t,{props:dx(n,r)});break;case"::placeholder":Da(as(t,{props:[Ve(s,/:(plac\w+)/,":"+Ye+"input-$1")]})),Da(as(t,{props:[Ve(s,/:(plac\w+)/,":"+Oc+"$1")]})),Da(as(t,{props:[Ve(s,/:(plac\w+)/,st+"input-$1")]})),Da(as(t,{props:[s]})),ly(t,{props:dx(n,r)});break}return""})}}var qO={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Fn={},sl=typeof process<"u"&&Fn!==void 0&&(Fn.REACT_APP_SC_ATTR||Fn.SC_ATTR)||"data-styled",bI="active",PI="data-styled-version",Hf="6.1.18",Wv=`/*!sc*/
`,Jd=typeof window<"u"&&typeof document<"u",GO=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Fn!==void 0&&Fn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Fn.REACT_APP_SC_DISABLE_SPEEDY!==""?Fn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Fn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Fn!==void 0&&Fn.SC_DISABLE_SPEEDY!==void 0&&Fn.SC_DISABLE_SPEEDY!==""&&Fn.SC_DISABLE_SPEEDY!=="false"&&Fn.SC_DISABLE_SPEEDY),KO={},qf=Object.freeze([]),ol=Object.freeze({});function CI(t,e,n){return n===void 0&&(n=ol),t.theme!==n.theme&&t.theme||e||n.theme}var AI=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),QO=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,YO=/(^-|-$)/g;function mx(t){return t.replace(QO,"-").replace(YO,"")}var XO=/(a)(d)/gi,Hh=52,gx=function(t){return String.fromCharCode(t+(t>25?39:97))};function hy(t){var e,n="";for(e=Math.abs(t);e>Hh;e=e/Hh|0)n=gx(e%Hh)+n;return(gx(e%Hh)+n).replace(XO,"$1-$2")}var Ym,kI=5381,Va=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},RI=function(t){return Va(kI,t)};function DI(t){return hy(RI(t)>>>0)}function JO(t){return t.displayName||t.name||"Component"}function Xm(t){return typeof t=="string"&&!0}var jI=typeof Symbol=="function"&&Symbol.for,NI=jI?Symbol.for("react.memo"):60115,ZO=jI?Symbol.for("react.forward_ref"):60112,eL={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},tL={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},OI={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},nL=((Ym={})[ZO]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ym[NI]=OI,Ym);function yx(t){return("type"in(e=t)&&e.type.$$typeof)===NI?OI:"$$typeof"in t?nL[t.$$typeof]:eL;var e}var rL=Object.defineProperty,iL=Object.getOwnPropertyNames,vx=Object.getOwnPropertySymbols,sL=Object.getOwnPropertyDescriptor,oL=Object.getPrototypeOf,_x=Object.prototype;function LI(t,e,n){if(typeof e!="string"){if(_x){var r=oL(e);r&&r!==_x&&LI(t,r,n)}var s=iL(e);vx&&(s=s.concat(vx(e)));for(var a=yx(t),l=yx(e),u=0;u<s.length;++u){var d=s[u];if(!(d in tL||n&&n[d]||l&&d in l||a&&d in a)){var p=sL(e,d);try{rL(t,d,p)}catch{}}}}return t}function al(t){return typeof t=="function"}function Hv(t){return typeof t=="object"&&"styledComponentId"in t}function _o(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function dy(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=t[r];return n}function Zc(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function fy(t,e,n){if(n===void 0&&(n=!1),!n&&!Zc(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=fy(t[r],e[r]);else if(Zc(e))for(var r in e)t[r]=fy(t[r],e[r]);return t}function qv(t,e){Object.defineProperty(t,"toString",{value:e})}function gu(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var aL=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,s=r.length,a=s;e>=a;)if((a<<=1)<0)throw gu(16,"".concat(e));this.groupSizes=new Uint32Array(a),this.groupSizes.set(r),this.length=a;for(var l=s;l<a;l++)this.groupSizes[l]=0}for(var u=this.indexOfGroup(e+1),d=(l=0,n.length);l<d;l++)this.tag.insertRule(u,n[l])&&(this.groupSizes[e]++,u++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),s=r+n;this.groupSizes[e]=0;for(var a=r;a<s;a++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],s=this.indexOfGroup(e),a=s+r,l=s;l<a;l++)n+="".concat(this.tag.getRule(l)).concat(Wv);return n},t}(),Id=new Map,Zd=new Map,bd=1,qh=function(t){if(Id.has(t))return Id.get(t);for(;Zd.has(bd);)bd++;var e=bd++;return Id.set(t,e),Zd.set(e,t),e},lL=function(t,e){bd=e+1,Id.set(t,e),Zd.set(e,t)},cL="style[".concat(sl,"][").concat(PI,'="').concat(Hf,'"]'),uL=new RegExp("^".concat(sl,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),hL=function(t,e,n){for(var r,s=n.split(","),a=0,l=s.length;a<l;a++)(r=s[a])&&t.registerName(e,r)},dL=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(Wv),s=[],a=0,l=r.length;a<l;a++){var u=r[a].trim();if(u){var d=u.match(uL);if(d){var p=0|parseInt(d[1],10),y=d[2];p!==0&&(lL(y,p),hL(t,y,d[3]),t.getTag().insertRules(p,s)),s.length=0}else s.push(u)}}},wx=function(t){for(var e=document.querySelectorAll(cL),n=0,r=e.length;n<r;n++){var s=e[n];s&&s.getAttribute(sl)!==bI&&(dL(t,s),s.parentNode&&s.parentNode.removeChild(s))}};function fL(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var VI=function(t){var e=document.head,n=t||e,r=document.createElement("style"),s=function(u){var d=Array.from(u.querySelectorAll("style[".concat(sl,"]")));return d[d.length-1]}(n),a=s!==void 0?s.nextSibling:null;r.setAttribute(sl,bI),r.setAttribute(PI,Hf);var l=fL();return l&&r.setAttribute("nonce",l),n.insertBefore(r,a),r},pL=function(){function t(e){this.element=VI(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,s=0,a=r.length;s<a;s++){var l=r[s];if(l.ownerNode===n)return l}throw gu(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),mL=function(){function t(e){this.element=VI(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),gL=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),xx=Jd,yL={isServer:!Jd,useCSSOMInjection:!GO},ef=function(){function t(e,n,r){e===void 0&&(e=ol),n===void 0&&(n={});var s=this;this.options=un(un({},yL),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Jd&&xx&&(xx=!1,wx(this)),qv(this,function(){return function(a){for(var l=a.getTag(),u=l.length,d="",p=function(w){var x=function($){return Zd.get($)}(w);if(x===void 0)return"continue";var S=a.names.get(x),A=l.getGroup(w);if(S===void 0||!S.size||A.length===0)return"continue";var C="".concat(sl,".g").concat(w,'[id="').concat(x,'"]'),P="";S!==void 0&&S.forEach(function($){$.length>0&&(P+="".concat($,","))}),d+="".concat(A).concat(C,'{content:"').concat(P,'"}').concat(Wv)},y=0;y<u;y++)p(y);return d}(s)})}return t.registerId=function(e){return qh(e)},t.prototype.rehydrate=function(){!this.server&&Jd&&wx(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(un(un({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,s=n.target;return n.isServer?new gL(s):r?new pL(s):new mL(s)}(this.options),new aL(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(qh(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(qh(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(qh(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),vL=/&/g,_L=/^\s*\/\/.*$/gm;function MI(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=MI(n.children,e)),n})}function wL(t){var e,n,r,s=ol,a=s.options,l=a===void 0?ol:a,u=s.plugins,d=u===void 0?qf:u,p=function(x,S,A){return A.startsWith(n)&&A.endsWith(n)&&A.replaceAll(n,"").length>0?".".concat(e):x},y=d.slice();y.push(function(x){x.type===Bf&&x.value.includes("&")&&(x.props[0]=x.props[0].replace(vL,n).replace(r,p))}),l.prefix&&y.push(HO),y.push(zO);var w=function(x,S,A,C){S===void 0&&(S=""),A===void 0&&(A=""),C===void 0&&(C="&"),e=C,n=S,r=new RegExp("\\".concat(n,"\\b"),"g");var P=x.replace(_L,""),$=UO(A||S?"".concat(A," ").concat(S," { ").concat(P," }"):P);l.namespace&&($=MI($,l.namespace));var B=[];return Xd($,$O(y.concat(WO(function(L){return B.push(L)})))),B};return w.hash=d.length?d.reduce(function(x,S){return S.name||gu(15),Va(x,S.name)},kI).toString():"",w}var xL=new ef,py=wL(),FI=Me.createContext({shouldForwardProp:void 0,styleSheet:xL,stylis:py});FI.Consumer;Me.createContext(void 0);function my(){return M.useContext(FI)}var EL=function(){function t(e,n){var r=this;this.inject=function(s,a){a===void 0&&(a=py);var l=r.name+a.hash;s.hasNameForId(r.id,l)||s.insertRules(r.id,l,a(r.rules,l,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,qv(this,function(){throw gu(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=py),this.name+e.hash},t}(),TL=function(t){return t>="A"&&t<="Z"};function Ex(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;TL(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var UI=function(t){return t==null||t===!1||t===""},BI=function(t){var e,n,r=[];for(var s in t){var a=t[s];t.hasOwnProperty(s)&&!UI(a)&&(Array.isArray(a)&&a.isCss||al(a)?r.push("".concat(Ex(s),":"),a,";"):Zc(a)?r.push.apply(r,Jc(Jc(["".concat(s," {")],BI(a),!1),["}"],!1)):r.push("".concat(Ex(s),": ").concat((e=s,(n=a)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in qO||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Es(t,e,n,r){if(UI(t))return[];if(Hv(t))return[".".concat(t.styledComponentId)];if(al(t)){if(!al(a=t)||a.prototype&&a.prototype.isReactComponent||!e)return[t];var s=t(e);return Es(s,e,n,r)}var a;return t instanceof EL?n?(t.inject(n,r),[t.getName(r)]):[t]:Zc(t)?BI(t):Array.isArray(t)?Array.prototype.concat.apply(qf,t.map(function(l){return Es(l,e,n,r)})):[t.toString()]}function zI(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(al(n)&&!Hv(n))return!1}return!0}var SL=RI(Hf),IL=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&zI(e),this.componentId=n,this.baseHash=Va(SL,n),this.baseStyle=r,ef.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var s=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))s=_o(s,this.staticRulesId);else{var a=dy(Es(this.rules,e,n,r)),l=hy(Va(this.baseHash,a)>>>0);if(!n.hasNameForId(this.componentId,l)){var u=r(a,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,u)}s=_o(s,l),this.staticRulesId=l}else{for(var d=Va(this.baseHash,r.hash),p="",y=0;y<this.rules.length;y++){var w=this.rules[y];if(typeof w=="string")p+=w;else if(w){var x=dy(Es(w,e,n,r));d=Va(d,x+y),p+=x}}if(p){var S=hy(d>>>0);n.hasNameForId(this.componentId,S)||n.insertRules(this.componentId,S,r(p,".".concat(S),void 0,this.componentId)),s=_o(s,S)}}return s},t}(),Gv=Me.createContext(void 0);Gv.Consumer;var Jm={};function bL(t,e,n){var r=Hv(t),s=t,a=!Xm(t),l=e.attrs,u=l===void 0?qf:l,d=e.componentId,p=d===void 0?function(D,q){var J=typeof D!="string"?"sc":mx(D);Jm[J]=(Jm[J]||0)+1;var k="".concat(J,"-").concat(DI(Hf+J+Jm[J]));return q?"".concat(q,"-").concat(k):k}(e.displayName,e.parentComponentId):d,y=e.displayName,w=y===void 0?function(D){return Xm(D)?"styled.".concat(D):"Styled(".concat(JO(D),")")}(t):y,x=e.displayName&&e.componentId?"".concat(mx(e.displayName),"-").concat(e.componentId):e.componentId||p,S=r&&s.attrs?s.attrs.concat(u).filter(Boolean):u,A=e.shouldForwardProp;if(r&&s.shouldForwardProp){var C=s.shouldForwardProp;if(e.shouldForwardProp){var P=e.shouldForwardProp;A=function(D,q){return C(D,q)&&P(D,q)}}else A=C}var $=new IL(n,x,r?s.componentStyle:void 0);function B(D,q){return function(J,k,b){var R=J.attrs,V=J.componentStyle,z=J.defaultProps,H=J.foldedComponentIds,N=J.styledComponentId,Le=J.target,Qe=Me.useContext(Gv),xe=my(),ke=J.shouldForwardProp||xe.shouldForwardProp,se=CI(k,Qe,z)||ol,ue=function(ge,we,fe){for(var Te,De=un(un({},we),{className:void 0,theme:fe}),$e=0;$e<ge.length;$e+=1){var je=al(Te=ge[$e])?Te(De):Te;for(var wt in je)De[wt]=wt==="className"?_o(De[wt],je[wt]):wt==="style"?un(un({},De[wt]),je[wt]):je[wt]}return we.className&&(De.className=_o(De.className,we.className)),De}(R,k,se),Y=ue.as||Le,j={};for(var Q in ue)ue[Q]===void 0||Q[0]==="$"||Q==="as"||Q==="theme"&&ue.theme===se||(Q==="forwardedAs"?j.as=ue.forwardedAs:ke&&!ke(Q,Y)||(j[Q]=ue[Q]));var ae=function(ge,we){var fe=my(),Te=ge.generateAndInjectStyles(we,fe.styleSheet,fe.stylis);return Te}(V,ue),de=_o(H,N);return ae&&(de+=" "+ae),ue.className&&(de+=" "+ue.className),j[Xm(Y)&&!AI.has(Y)?"class":"className"]=de,b&&(j.ref=b),M.createElement(Y,j)}(L,D,q)}B.displayName=w;var L=Me.forwardRef(B);return L.attrs=S,L.componentStyle=$,L.displayName=w,L.shouldForwardProp=A,L.foldedComponentIds=r?_o(s.foldedComponentIds,s.styledComponentId):"",L.styledComponentId=x,L.target=r?s.target:t,Object.defineProperty(L,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(D){this._foldedDefaultProps=r?function(q){for(var J=[],k=1;k<arguments.length;k++)J[k-1]=arguments[k];for(var b=0,R=J;b<R.length;b++)fy(q,R[b],!0);return q}({},s.defaultProps,D):D}}),qv(L,function(){return".".concat(L.styledComponentId)}),a&&LI(L,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),L}function Tx(t,e){for(var n=[t[0]],r=0,s=e.length;r<s;r+=1)n.push(e[r],t[r+1]);return n}var Sx=function(t){return Object.assign(t,{isCss:!0})};function $I(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(al(t)||Zc(t))return Sx(Es(Tx(qf,Jc([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?Es(r):Sx(Es(Tx(r,e)))}function gy(t,e,n){if(n===void 0&&(n=ol),!e)throw gu(1,e);var r=function(s){for(var a=[],l=1;l<arguments.length;l++)a[l-1]=arguments[l];return t(e,n,$I.apply(void 0,Jc([s],a,!1)))};return r.attrs=function(s){return gy(t,e,un(un({},n),{attrs:Array.prototype.concat(n.attrs,s).filter(Boolean)}))},r.withConfig=function(s){return gy(t,e,un(un({},n),s))},r}var WI=function(t){return gy(bL,t)},F=WI;AI.forEach(function(t){F[t]=WI(t)});var PL=function(){function t(e,n){this.rules=e,this.componentId=n,this.isStatic=zI(e),ef.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,n,r,s){var a=s(dy(Es(this.rules,n,r,s)),""),l=this.componentId+e;r.insertRules(l,l,a)},t.prototype.removeStyles=function(e,n){n.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,n,r,s){e>2&&ef.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,n,r,s)},t}();function CL(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=$I.apply(void 0,Jc([t],e,!1)),s="sc-global-".concat(DI(JSON.stringify(r))),a=new PL(r,s),l=function(d){var p=my(),y=Me.useContext(Gv),w=Me.useRef(p.styleSheet.allocateGSInstance(s)).current;return p.styleSheet.server&&u(w,d,p.styleSheet,y,p.stylis),Me.useLayoutEffect(function(){if(!p.styleSheet.server)return u(w,d,p.styleSheet,y,p.stylis),function(){return a.removeStyles(w,p.styleSheet)}},[w,d,p.styleSheet,y,p.stylis]),null};function u(d,p,y,w,x){if(a.isStatic)a.renderStyles(d,KO,y,x);else{var S=un(un({},p),{theme:CI(p,w,l.defaultProps)});a.renderStyles(d,S,y,x)}}return Me.memo(l)}var HI={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ix=Me.createContext&&Me.createContext(HI),Ts=function(){return Ts=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},Ts.apply(this,arguments)},AL=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n};function qI(t){return t&&t.map(function(e,n){return Me.createElement(e.tag,Ts({key:n},e.attr),qI(e.child))})}function ht(t){return function(e){return Me.createElement(kL,Ts({attr:Ts({},t.attr)},e),qI(t.child))}}function kL(t){var e=function(n){var r=t.attr,s=t.size,a=t.title,l=AL(t,["attr","size","title"]),u=s||n.size||"1em",d;return n.className&&(d=n.className),t.className&&(d=(d?d+" ":"")+t.className),Me.createElement("svg",Ts({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:d,style:Ts(Ts({color:t.color||n.color},n.style),t.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),a&&Me.createElement("title",null,a),t.children)};return Ix!==void 0?Me.createElement(Ix.Consumer,null,function(n){return e(n)}):e(HI)}function Kv(t){return ht({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}}]})(t)}function GI(t){return ht({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"}}]})(t)}function RL(t){return ht({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 32v448h448V32H0zm262.2 334.4c-6.6 3-33.2 6-50-14.2-9.2-10.6-25.3-33.3-42.2-63.6-8.9 0-14.7 0-21.4-.6v46.4c0 23.5 6 21.2 25.8 23.9v8.1c-6.9-.3-23.1-.8-35.6-.8-13.1 0-26.1.6-33.6.8v-8.1c15.5-2.9 22-1.3 22-23.9V225c0-22.6-6.4-21-22-23.9V193c25.8 1 53.1-.6 70.9-.6 31.7 0 55.9 14.4 55.9 45.6 0 21.1-16.7 42.2-39.2 47.5 13.6 24.2 30 45.6 42.2 58.9 7.2 7.8 17.2 14.7 27.2 14.7v7.3zm22.9-135c-23.3 0-32.2-15.7-32.2-32.2V167c0-12.2 8.8-30.4 34-30.4s30.4 17.9 30.4 17.9l-10.7 7.2s-5.5-12.5-19.7-12.5c-7.9 0-19.7 7.3-19.7 19.7v26.8c0 13.4 6.6 23.3 17.9 23.3 14.1 0 21.5-10.9 21.5-26.8h-17.9v-10.7h30.4c0 20.5 4.7 49.9-34 49.9zm-116.5 44.7c-9.4 0-13.6-.3-20-.8v-69.7c6.4-.6 15-.6 22.5-.6 23.3 0 37.2 12.2 37.2 34.5 0 21.9-15 36.6-39.7 36.6z"}}]})(t)}function DL(t){return ht({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}}]})(t)}function KI(t){return ht({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"}}]})(t)}function bx(t){return ht({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"}}]})(t)}function QI(t){return ht({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"}}]})(t)}function Px(t){return ht({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z"}}]})(t)}function jL(t){return ht({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"}}]})(t)}function NL(t){return ht({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M512.1 191l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0L552 6.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zm-10.5-58.8c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.7-82.4 14.3-52.8 52.8zM386.3 286.1l33.7 16.8c10.1 5.8 14.5 18.1 10.5 29.1-8.9 24.2-26.4 46.4-42.6 65.8-7.4 8.9-20.2 11.1-30.3 5.3l-29.1-16.8c-16 13.7-34.6 24.6-54.9 31.7v33.6c0 11.6-8.3 21.6-19.7 23.6-24.6 4.2-50.4 4.4-75.9 0-11.5-2-20-11.9-20-23.6V418c-20.3-7.2-38.9-18-54.9-31.7L74 403c-10 5.8-22.9 3.6-30.3-5.3-16.2-19.4-33.3-41.6-42.2-65.7-4-10.9.4-23.2 10.5-29.1l33.3-16.8c-3.9-20.9-3.9-42.4 0-63.4L12 205.8c-10.1-5.8-14.6-18.1-10.5-29 8.9-24.2 26-46.4 42.2-65.8 7.4-8.9 20.2-11.1 30.3-5.3l29.1 16.8c16-13.7 34.6-24.6 54.9-31.7V57.1c0-11.5 8.2-21.5 19.6-23.5 24.6-4.2 50.5-4.4 76-.1 11.5 2 20 11.9 20 23.6v33.6c20.3 7.2 38.9 18 54.9 31.7l29.1-16.8c10-5.8 22.9-3.6 30.3 5.3 16.2 19.4 33.2 41.6 42.1 65.8 4 10.9.1 23.2-10 29.1l-33.7 16.8c3.9 21 3.9 42.5 0 63.5zm-117.6 21.1c59.2-77-28.7-164.9-105.7-105.7-59.2 77 28.7 164.9 105.7 105.7zm243.4 182.7l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0l8.2-14.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zM501.6 431c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.6-82.4 14.3-52.8 52.8z"}}]})(t)}function YI(t){return ht({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"}}]})(t)}function OL(t){return ht({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M437.2 403.5L320 215V64h8c13.3 0 24-10.7 24-24V24c0-13.3-10.7-24-24-24H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h8v151L10.8 403.5C-18.5 450.6 15.3 512 70.9 512h306.2c55.7 0 89.4-61.5 60.1-108.5zM137.9 320l48.2-77.6c3.7-5.2 5.8-11.6 5.8-18.4V64h64v160c0 6.9 2.2 13.2 5.8 18.4l48.2 77.6h-172z"}}]})(t)}function LL(t){return ht({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"}}]})(t)}function VL(t){return ht({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"}}]})(t)}function ML(t){return ht({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"}}]})(t)}function FL(t){return ht({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}}]})(t)}function UL(t){return ht({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"}}]})(t)}function XI(t){return ht({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"}}]})(t)}function BL(t){return ht({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M552 64H88c-13.255 0-24 10.745-24 24v8H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h472c26.51 0 48-21.49 48-48V88c0-13.255-10.745-24-24-24zM56 400a8 8 0 0 1-8-8V144h16v248a8 8 0 0 1-8 8zm236-16H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm-208-96H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm0-96H140c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h360c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12z"}}]})(t)}function zL(t){return ht({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"}}]})(t)}function $L(t){return ht({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"}}]})(t)}function WL(t){return ht({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"}}]})(t)}function JI(t){return ht({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"}}]})(t)}function HL(t){return ht({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}}]})(t)}const ZI=M.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"}),Gf=M.createContext({}),Kf=M.createContext(null),Qf=typeof document<"u",Qv=Qf?M.useLayoutEffect:M.useEffect,eb=M.createContext({strict:!1}),Yv=t=>t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),qL="framerAppearId",tb="data-"+Yv(qL);function GL(t,e,n,r){const{visualElement:s}=M.useContext(Gf),a=M.useContext(eb),l=M.useContext(Kf),u=M.useContext(ZI).reducedMotion,d=M.useRef();r=r||a.renderer,!d.current&&r&&(d.current=r(t,{visualState:e,parent:s,props:n,presenceContext:l,blockInitialAnimation:l?l.initial===!1:!1,reducedMotionConfig:u}));const p=d.current;M.useInsertionEffect(()=>{p&&p.update(n,l)});const y=M.useRef(!!(n[tb]&&!window.HandoffComplete));return Qv(()=>{p&&(p.render(),y.current&&p.animationState&&p.animationState.animateChanges())}),M.useEffect(()=>{p&&(p.updateFeatures(),!y.current&&p.animationState&&p.animationState.animateChanges(),y.current&&(y.current=!1,window.HandoffComplete=!0))}),p}function Ma(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function KL(t,e,n){return M.useCallback(r=>{r&&t.mount&&t.mount(r),e&&(r?e.mount(r):e.unmount()),n&&(typeof n=="function"?n(r):Ma(n)&&(n.current=r))},[e])}function eu(t){return typeof t=="string"||Array.isArray(t)}function Yf(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const Xv=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Jv=["initial",...Xv];function Xf(t){return Yf(t.animate)||Jv.some(e=>eu(t[e]))}function nb(t){return!!(Xf(t)||t.variants)}function QL(t,e){if(Xf(t)){const{initial:n,animate:r}=t;return{initial:n===!1||eu(n)?n:void 0,animate:eu(r)?r:void 0}}return t.inherit!==!1?e:{}}function YL(t){const{initial:e,animate:n}=QL(t,M.useContext(Gf));return M.useMemo(()=>({initial:e,animate:n}),[Cx(e),Cx(n)])}function Cx(t){return Array.isArray(t)?t.join(" "):t}const Ax={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},tu={};for(const t in Ax)tu[t]={isEnabled:e=>Ax[t].some(n=>!!e[n])};function XL(t){for(const e in t)tu[e]={...tu[e],...t[e]}}const Zv=M.createContext({}),rb=M.createContext({}),JL=Symbol.for("motionComponentSymbol");function ZL({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:r,Component:s}){t&&XL(t);function a(u,d){let p;const y={...M.useContext(ZI),...u,layoutId:eV(u)},{isStatic:w}=y,x=YL(u),S=r(u,w);if(!w&&Qf){x.visualElement=GL(s,S,y,e);const A=M.useContext(rb),C=M.useContext(eb).strict;x.visualElement&&(p=x.visualElement.loadFeatures(y,C,t,A))}return M.createElement(Gf.Provider,{value:x},p&&x.visualElement?M.createElement(p,{visualElement:x.visualElement,...y}):null,n(s,u,KL(S,x.visualElement,d),S,w,x.visualElement))}const l=M.forwardRef(a);return l[JL]=s,l}function eV({layoutId:t}){const e=M.useContext(Zv).id;return e&&t!==void 0?e+"-"+t:t}function tV(t){function e(r,s={}){return ZL(t(r,s))}if(typeof Proxy>"u")return e;const n=new Map;return new Proxy(e,{get:(r,s)=>(n.has(s)||n.set(s,e(s)),n.get(s))})}const nV=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function e0(t){return typeof t!="string"||t.includes("-")?!1:!!(nV.indexOf(t)>-1||/[A-Z]/.test(t))}const tf={};function rV(t){Object.assign(tf,t)}const yu=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Fo=new Set(yu);function ib(t,{layout:e,layoutId:n}){return Fo.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!tf[t]||t==="opacity")}const Rn=t=>!!(t&&t.getVelocity),iV={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},sV=yu.length;function oV(t,{enableHardwareAcceleration:e=!0,allowTransformNone:n=!0},r,s){let a="";for(let l=0;l<sV;l++){const u=yu[l];if(t[u]!==void 0){const d=iV[u]||u;a+=`${d}(${t[u]}) `}}return e&&!t.z&&(a+="translateZ(0)"),a=a.trim(),s?a=s(t,r?"":a):n&&r&&(a="none"),a}const sb=t=>e=>typeof e=="string"&&e.startsWith(t),ob=sb("--"),yy=sb("var(--"),aV=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,lV=(t,e)=>e&&typeof t=="number"?e.transform(t):t,Cs=(t,e,n)=>Math.min(Math.max(n,t),e),Uo={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Lc={...Uo,transform:t=>Cs(0,1,t)},Gh={...Uo,default:1},Vc=t=>Math.round(t*1e5)/1e5,Jf=/(-)?([\d]*\.?[\d])+/g,ab=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,cV=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function vu(t){return typeof t=="string"}const _u=t=>({test:e=>vu(e)&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),ls=_u("deg"),ei=_u("%"),Pe=_u("px"),uV=_u("vh"),hV=_u("vw"),kx={...ei,parse:t=>ei.parse(t)/100,transform:t=>ei.transform(t*100)},Rx={...Uo,transform:Math.round},lb={borderWidth:Pe,borderTopWidth:Pe,borderRightWidth:Pe,borderBottomWidth:Pe,borderLeftWidth:Pe,borderRadius:Pe,radius:Pe,borderTopLeftRadius:Pe,borderTopRightRadius:Pe,borderBottomRightRadius:Pe,borderBottomLeftRadius:Pe,width:Pe,maxWidth:Pe,height:Pe,maxHeight:Pe,size:Pe,top:Pe,right:Pe,bottom:Pe,left:Pe,padding:Pe,paddingTop:Pe,paddingRight:Pe,paddingBottom:Pe,paddingLeft:Pe,margin:Pe,marginTop:Pe,marginRight:Pe,marginBottom:Pe,marginLeft:Pe,rotate:ls,rotateX:ls,rotateY:ls,rotateZ:ls,scale:Gh,scaleX:Gh,scaleY:Gh,scaleZ:Gh,skew:ls,skewX:ls,skewY:ls,distance:Pe,translateX:Pe,translateY:Pe,translateZ:Pe,x:Pe,y:Pe,z:Pe,perspective:Pe,transformPerspective:Pe,opacity:Lc,originX:kx,originY:kx,originZ:Pe,zIndex:Rx,fillOpacity:Lc,strokeOpacity:Lc,numOctaves:Rx};function t0(t,e,n,r){const{style:s,vars:a,transform:l,transformOrigin:u}=t;let d=!1,p=!1,y=!0;for(const w in e){const x=e[w];if(ob(w)){a[w]=x;continue}const S=lb[w],A=lV(x,S);if(Fo.has(w)){if(d=!0,l[w]=A,!y)continue;x!==(S.default||0)&&(y=!1)}else w.startsWith("origin")?(p=!0,u[w]=A):s[w]=A}if(e.transform||(d||r?s.transform=oV(t.transform,n,y,r):s.transform&&(s.transform="none")),p){const{originX:w="50%",originY:x="50%",originZ:S=0}=u;s.transformOrigin=`${w} ${x} ${S}`}}const n0=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function cb(t,e,n){for(const r in e)!Rn(e[r])&&!ib(r,n)&&(t[r]=e[r])}function dV({transformTemplate:t},e,n){return M.useMemo(()=>{const r=n0();return t0(r,e,{enableHardwareAcceleration:!n},t),Object.assign({},r.vars,r.style)},[e])}function fV(t,e,n){const r=t.style||{},s={};return cb(s,r,t),Object.assign(s,dV(t,e,n)),t.transformValues?t.transformValues(s):s}function pV(t,e,n){const r={},s=fV(t,e,n);return t.drag&&t.dragListener!==!1&&(r.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(r.tabIndex=0),r.style=s,r}const mV=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function nf(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||mV.has(t)}let ub=t=>!nf(t);function gV(t){t&&(ub=e=>e.startsWith("on")?!nf(e):t(e))}try{gV(require("@emotion/is-prop-valid").default)}catch{}function yV(t,e,n){const r={};for(const s in t)s==="values"&&typeof t.values=="object"||(ub(s)||n===!0&&nf(s)||!e&&!nf(s)||t.draggable&&s.startsWith("onDrag"))&&(r[s]=t[s]);return r}function Dx(t,e,n){return typeof t=="string"?t:Pe.transform(e+n*t)}function vV(t,e,n){const r=Dx(e,t.x,t.width),s=Dx(n,t.y,t.height);return`${r} ${s}`}const _V={offset:"stroke-dashoffset",array:"stroke-dasharray"},wV={offset:"strokeDashoffset",array:"strokeDasharray"};function xV(t,e,n=1,r=0,s=!0){t.pathLength=1;const a=s?_V:wV;t[a.offset]=Pe.transform(-r);const l=Pe.transform(e),u=Pe.transform(n);t[a.array]=`${l} ${u}`}function r0(t,{attrX:e,attrY:n,attrScale:r,originX:s,originY:a,pathLength:l,pathSpacing:u=1,pathOffset:d=0,...p},y,w,x){if(t0(t,p,y,x),w){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:S,style:A,dimensions:C}=t;S.transform&&(C&&(A.transform=S.transform),delete S.transform),C&&(s!==void 0||a!==void 0||A.transform)&&(A.transformOrigin=vV(C,s!==void 0?s:.5,a!==void 0?a:.5)),e!==void 0&&(S.x=e),n!==void 0&&(S.y=n),r!==void 0&&(S.scale=r),l!==void 0&&xV(S,l,u,d,!1)}const hb=()=>({...n0(),attrs:{}}),i0=t=>typeof t=="string"&&t.toLowerCase()==="svg";function EV(t,e,n,r){const s=M.useMemo(()=>{const a=hb();return r0(a,e,{enableHardwareAcceleration:!1},i0(r),t.transformTemplate),{...a.attrs,style:{...a.style}}},[e]);if(t.style){const a={};cb(a,t.style,t),s.style={...a,...s.style}}return s}function TV(t=!1){return(n,r,s,{latestValues:a},l)=>{const d=(e0(n)?EV:pV)(r,a,l,n),y={...yV(r,typeof n=="string",t),...d,ref:s},{children:w}=r,x=M.useMemo(()=>Rn(w)?w.get():w,[w]);return M.createElement(n,{...y,children:x})}}function db(t,{style:e,vars:n},r,s){Object.assign(t.style,e,s&&s.getProjectionStyles(r));for(const a in n)t.style.setProperty(a,n[a])}const fb=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function pb(t,e,n,r){db(t,e,void 0,r);for(const s in e.attrs)t.setAttribute(fb.has(s)?s:Yv(s),e.attrs[s])}function s0(t,e){const{style:n}=t,r={};for(const s in n)(Rn(n[s])||e.style&&Rn(e.style[s])||ib(s,t))&&(r[s]=n[s]);return r}function mb(t,e){const n=s0(t,e);for(const r in t)if(Rn(t[r])||Rn(e[r])){const s=yu.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;n[s]=t[r]}return n}function o0(t,e,n,r={},s={}){return typeof e=="function"&&(e=e(n!==void 0?n:t.custom,r,s)),typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"&&(e=e(n!==void 0?n:t.custom,r,s)),e}function gb(t){const e=M.useRef(null);return e.current===null&&(e.current=t()),e.current}const rf=t=>Array.isArray(t),SV=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),IV=t=>rf(t)?t[t.length-1]||0:t;function Pd(t){const e=Rn(t)?t.get():t;return SV(e)?e.toValue():e}function bV({scrapeMotionValuesFromProps:t,createRenderState:e,onMount:n},r,s,a){const l={latestValues:PV(r,s,a,t),renderState:e()};return n&&(l.mount=u=>n(r,u,l)),l}const yb=t=>(e,n)=>{const r=M.useContext(Gf),s=M.useContext(Kf),a=()=>bV(t,e,r,s);return n?a():gb(a)};function PV(t,e,n,r){const s={},a=r(t,{});for(const x in a)s[x]=Pd(a[x]);let{initial:l,animate:u}=t;const d=Xf(t),p=nb(t);e&&p&&!d&&t.inherit!==!1&&(l===void 0&&(l=e.initial),u===void 0&&(u=e.animate));let y=n?n.initial===!1:!1;y=y||l===!1;const w=y?u:l;return w&&typeof w!="boolean"&&!Yf(w)&&(Array.isArray(w)?w:[w]).forEach(S=>{const A=o0(t,S);if(!A)return;const{transitionEnd:C,transition:P,...$}=A;for(const B in $){let L=$[B];if(Array.isArray(L)){const D=y?L.length-1:0;L=L[D]}L!==null&&(s[B]=L)}for(const B in C)s[B]=C[B]}),s}const It=t=>t;class jx{constructor(){this.order=[],this.scheduled=new Set}add(e){if(!this.scheduled.has(e))return this.scheduled.add(e),this.order.push(e),!0}remove(e){const n=this.order.indexOf(e);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(e))}clear(){this.order.length=0,this.scheduled.clear()}}function CV(t){let e=new jx,n=new jx,r=0,s=!1,a=!1;const l=new WeakSet,u={schedule:(d,p=!1,y=!1)=>{const w=y&&s,x=w?e:n;return p&&l.add(d),x.add(d)&&w&&s&&(r=e.order.length),d},cancel:d=>{n.remove(d),l.delete(d)},process:d=>{if(s){a=!0;return}if(s=!0,[e,n]=[n,e],n.clear(),r=e.order.length,r)for(let p=0;p<r;p++){const y=e.order[p];y(d),l.has(y)&&(u.schedule(y),t())}s=!1,a&&(a=!1,u.process(d))}};return u}const Kh=["prepare","read","update","preRender","render","postRender"],AV=40;function kV(t,e){let n=!1,r=!0;const s={delta:0,timestamp:0,isProcessing:!1},a=Kh.reduce((w,x)=>(w[x]=CV(()=>n=!0),w),{}),l=w=>a[w].process(s),u=()=>{const w=performance.now();n=!1,s.delta=r?1e3/60:Math.max(Math.min(w-s.timestamp,AV),1),s.timestamp=w,s.isProcessing=!0,Kh.forEach(l),s.isProcessing=!1,n&&e&&(r=!1,t(u))},d=()=>{n=!0,r=!0,s.isProcessing||t(u)};return{schedule:Kh.reduce((w,x)=>{const S=a[x];return w[x]=(A,C=!1,P=!1)=>(n||d(),S.schedule(A,C,P)),w},{}),cancel:w=>Kh.forEach(x=>a[x].cancel(w)),state:s,steps:a}}const{schedule:nt,cancel:Ni,state:an,steps:Zm}=kV(typeof requestAnimationFrame<"u"?requestAnimationFrame:It,!0),RV={useVisualState:yb({scrapeMotionValuesFromProps:mb,createRenderState:hb,onMount:(t,e,{renderState:n,latestValues:r})=>{nt.read(()=>{try{n.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),nt.render(()=>{r0(n,r,{enableHardwareAcceleration:!1},i0(e.tagName),t.transformTemplate),pb(e,n)})}})},DV={useVisualState:yb({scrapeMotionValuesFromProps:s0,createRenderState:n0})};function jV(t,{forwardMotionProps:e=!1},n,r){return{...e0(t)?RV:DV,preloadedFeatures:n,useRender:TV(e),createVisualElement:r,Component:t}}function Pi(t,e,n,r={passive:!0}){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n)}const vb=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1;function Zf(t,e="page"){return{point:{x:t[e+"X"],y:t[e+"Y"]}}}const NV=t=>e=>vb(e)&&t(e,Zf(e));function Ci(t,e,n,r){return Pi(t,e,NV(n),r)}const OV=(t,e)=>n=>e(t(n)),Ss=(...t)=>t.reduce(OV);function _b(t){let e=null;return()=>{const n=()=>{e=null};return e===null?(e=t,n):!1}}const Nx=_b("dragHorizontal"),Ox=_b("dragVertical");function wb(t){let e=!1;if(t==="y")e=Ox();else if(t==="x")e=Nx();else{const n=Nx(),r=Ox();n&&r?e=()=>{n(),r()}:(n&&n(),r&&r())}return e}function xb(){const t=wb(!0);return t?(t(),!1):!0}class Ns{constructor(e){this.isMounted=!1,this.node=e}update(){}}function Lx(t,e){const n="pointer"+(e?"enter":"leave"),r="onHover"+(e?"Start":"End"),s=(a,l)=>{if(a.pointerType==="touch"||xb())return;const u=t.getProps();t.animationState&&u.whileHover&&t.animationState.setActive("whileHover",e),u[r]&&nt.update(()=>u[r](a,l))};return Ci(t.current,n,s,{passive:!t.getProps()[r]})}class LV extends Ns{mount(){this.unmount=Ss(Lx(this.node,!0),Lx(this.node,!1))}unmount(){}}class VV extends Ns{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Ss(Pi(this.node.current,"focus",()=>this.onFocus()),Pi(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const Eb=(t,e)=>e?t===e?!0:Eb(t,e.parentElement):!1;function eg(t,e){if(!e)return;const n=new PointerEvent("pointer"+t);e(n,Zf(n))}class MV extends Ns{constructor(){super(...arguments),this.removeStartListeners=It,this.removeEndListeners=It,this.removeAccessibleListeners=It,this.startPointerPress=(e,n)=>{if(this.isPressing)return;this.removeEndListeners();const r=this.node.getProps(),a=Ci(window,"pointerup",(u,d)=>{if(!this.checkPressEnd())return;const{onTap:p,onTapCancel:y,globalTapTarget:w}=this.node.getProps();nt.update(()=>{!w&&!Eb(this.node.current,u.target)?y&&y(u,d):p&&p(u,d)})},{passive:!(r.onTap||r.onPointerUp)}),l=Ci(window,"pointercancel",(u,d)=>this.cancelPress(u,d),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=Ss(a,l),this.startPress(e,n)},this.startAccessiblePress=()=>{const e=a=>{if(a.key!=="Enter"||this.isPressing)return;const l=u=>{u.key!=="Enter"||!this.checkPressEnd()||eg("up",(d,p)=>{const{onTap:y}=this.node.getProps();y&&nt.update(()=>y(d,p))})};this.removeEndListeners(),this.removeEndListeners=Pi(this.node.current,"keyup",l),eg("down",(u,d)=>{this.startPress(u,d)})},n=Pi(this.node.current,"keydown",e),r=()=>{this.isPressing&&eg("cancel",(a,l)=>this.cancelPress(a,l))},s=Pi(this.node.current,"blur",r);this.removeAccessibleListeners=Ss(n,s)}}startPress(e,n){this.isPressing=!0;const{onTapStart:r,whileTap:s}=this.node.getProps();s&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&nt.update(()=>r(e,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!xb()}cancelPress(e,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&nt.update(()=>r(e,n))}mount(){const e=this.node.getProps(),n=Ci(e.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(e.onTapStart||e.onPointerStart)}),r=Pi(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=Ss(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const vy=new WeakMap,tg=new WeakMap,FV=t=>{const e=vy.get(t.target);e&&e(t)},UV=t=>{t.forEach(FV)};function BV({root:t,...e}){const n=t||document;tg.has(n)||tg.set(n,{});const r=tg.get(n),s=JSON.stringify(e);return r[s]||(r[s]=new IntersectionObserver(UV,{root:t,...e})),r[s]}function zV(t,e,n){const r=BV(e);return vy.set(t,n),r.observe(t),()=>{vy.delete(t),r.unobserve(t)}}const $V={some:0,all:1};class WV extends Ns{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:r,amount:s="some",once:a}=e,l={root:n?n.current:void 0,rootMargin:r,threshold:typeof s=="number"?s:$V[s]},u=d=>{const{isIntersecting:p}=d;if(this.isInView===p||(this.isInView=p,a&&!p&&this.hasEnteredView))return;p&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",p);const{onViewportEnter:y,onViewportLeave:w}=this.node.getProps(),x=p?y:w;x&&x(d)};return zV(this.node.current,l,u)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(HV(e,n))&&this.startObserver()}unmount(){}}function HV({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const qV={inView:{Feature:WV},tap:{Feature:MV},focus:{Feature:VV},hover:{Feature:LV}};function Tb(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}function GV(t){const e={};return t.values.forEach((n,r)=>e[r]=n.get()),e}function KV(t){const e={};return t.values.forEach((n,r)=>e[r]=n.getVelocity()),e}function ep(t,e,n){const r=t.getProps();return o0(r,e,n!==void 0?n:r.custom,GV(t),KV(t))}let a0=It;const So=t=>t*1e3,Ai=t=>t/1e3,QV={current:!1},Sb=t=>Array.isArray(t)&&typeof t[0]=="number";function Ib(t){return!!(!t||typeof t=="string"&&bb[t]||Sb(t)||Array.isArray(t)&&t.every(Ib))}const bc=([t,e,n,r])=>`cubic-bezier(${t}, ${e}, ${n}, ${r})`,bb={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:bc([0,.65,.55,1]),circOut:bc([.55,0,1,.45]),backIn:bc([.31,.01,.66,-.59]),backOut:bc([.33,1.53,.69,.99])};function Pb(t){if(t)return Sb(t)?bc(t):Array.isArray(t)?t.map(Pb):bb[t]}function YV(t,e,n,{delay:r=0,duration:s,repeat:a=0,repeatType:l="loop",ease:u,times:d}={}){const p={[e]:n};d&&(p.offset=d);const y=Pb(u);return Array.isArray(y)&&(p.easing=y),t.animate(p,{delay:r,duration:s,easing:Array.isArray(y)?"linear":y,fill:"both",iterations:a+1,direction:l==="reverse"?"alternate":"normal"})}function XV(t,{repeat:e,repeatType:n="loop"}){const r=e&&n!=="loop"&&e%2===1?0:t.length-1;return t[r]}const Cb=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,JV=1e-7,ZV=12;function eM(t,e,n,r,s){let a,l,u=0;do l=e+(n-e)/2,a=Cb(l,r,s)-t,a>0?n=l:e=l;while(Math.abs(a)>JV&&++u<ZV);return l}function wu(t,e,n,r){if(t===e&&n===r)return It;const s=a=>eM(a,0,1,t,n);return a=>a===0||a===1?a:Cb(s(a),e,r)}const tM=wu(.42,0,1,1),nM=wu(0,0,.58,1),Ab=wu(.42,0,.58,1),rM=t=>Array.isArray(t)&&typeof t[0]!="number",kb=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,Rb=t=>e=>1-t(1-e),l0=t=>1-Math.sin(Math.acos(t)),Db=Rb(l0),iM=kb(l0),jb=wu(.33,1.53,.69,.99),c0=Rb(jb),sM=kb(c0),oM=t=>(t*=2)<1?.5*c0(t):.5*(2-Math.pow(2,-10*(t-1))),aM={linear:It,easeIn:tM,easeInOut:Ab,easeOut:nM,circIn:l0,circInOut:iM,circOut:Db,backIn:c0,backInOut:sM,backOut:jb,anticipate:oM},Vx=t=>{if(Array.isArray(t)){a0(t.length===4);const[e,n,r,s]=t;return wu(e,n,r,s)}else if(typeof t=="string")return aM[t];return t},u0=(t,e)=>n=>!!(vu(n)&&cV.test(n)&&n.startsWith(t)||e&&Object.prototype.hasOwnProperty.call(n,e)),Nb=(t,e,n)=>r=>{if(!vu(r))return r;const[s,a,l,u]=r.match(Jf);return{[t]:parseFloat(s),[e]:parseFloat(a),[n]:parseFloat(l),alpha:u!==void 0?parseFloat(u):1}},lM=t=>Cs(0,255,t),ng={...Uo,transform:t=>Math.round(lM(t))},wo={test:u0("rgb","red"),parse:Nb("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:r=1})=>"rgba("+ng.transform(t)+", "+ng.transform(e)+", "+ng.transform(n)+", "+Vc(Lc.transform(r))+")"};function cM(t){let e="",n="",r="",s="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),r=t.substring(5,7),s=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),r=t.substring(3,4),s=t.substring(4,5),e+=e,n+=n,r+=r,s+=s),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:s?parseInt(s,16)/255:1}}const _y={test:u0("#"),parse:cM,transform:wo.transform},Fa={test:u0("hsl","hue"),parse:Nb("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:r=1})=>"hsla("+Math.round(t)+", "+ei.transform(Vc(e))+", "+ei.transform(Vc(n))+", "+Vc(Lc.transform(r))+")"},vn={test:t=>wo.test(t)||_y.test(t)||Fa.test(t),parse:t=>wo.test(t)?wo.parse(t):Fa.test(t)?Fa.parse(t):_y.parse(t),transform:t=>vu(t)?t:t.hasOwnProperty("red")?wo.transform(t):Fa.transform(t)},pt=(t,e,n)=>-n*t+n*e+t;function rg(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function uM({hue:t,saturation:e,lightness:n,alpha:r}){t/=360,e/=100,n/=100;let s=0,a=0,l=0;if(!e)s=a=l=n;else{const u=n<.5?n*(1+e):n+e-n*e,d=2*n-u;s=rg(d,u,t+1/3),a=rg(d,u,t),l=rg(d,u,t-1/3)}return{red:Math.round(s*255),green:Math.round(a*255),blue:Math.round(l*255),alpha:r}}const ig=(t,e,n)=>{const r=t*t;return Math.sqrt(Math.max(0,n*(e*e-r)+r))},hM=[_y,wo,Fa],dM=t=>hM.find(e=>e.test(t));function Mx(t){const e=dM(t);let n=e.parse(t);return e===Fa&&(n=uM(n)),n}const Ob=(t,e)=>{const n=Mx(t),r=Mx(e),s={...n};return a=>(s.red=ig(n.red,r.red,a),s.green=ig(n.green,r.green,a),s.blue=ig(n.blue,r.blue,a),s.alpha=pt(n.alpha,r.alpha,a),wo.transform(s))};function fM(t){var e,n;return isNaN(t)&&vu(t)&&(((e=t.match(Jf))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(ab))===null||n===void 0?void 0:n.length)||0)>0}const Lb={regex:aV,countKey:"Vars",token:"${v}",parse:It},Vb={regex:ab,countKey:"Colors",token:"${c}",parse:vn.parse},Mb={regex:Jf,countKey:"Numbers",token:"${n}",parse:Uo.parse};function sg(t,{regex:e,countKey:n,token:r,parse:s}){const a=t.tokenised.match(e);a&&(t["num"+n]=a.length,t.tokenised=t.tokenised.replace(e,r),t.values.push(...a.map(s)))}function sf(t){const e=t.toString(),n={value:e,tokenised:e,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&sg(n,Lb),sg(n,Vb),sg(n,Mb),n}function Fb(t){return sf(t).values}function Ub(t){const{values:e,numColors:n,numVars:r,tokenised:s}=sf(t),a=e.length;return l=>{let u=s;for(let d=0;d<a;d++)d<r?u=u.replace(Lb.token,l[d]):d<r+n?u=u.replace(Vb.token,vn.transform(l[d])):u=u.replace(Mb.token,Vc(l[d]));return u}}const pM=t=>typeof t=="number"?0:t;function mM(t){const e=Fb(t);return Ub(t)(e.map(pM))}const As={test:fM,parse:Fb,createTransformer:Ub,getAnimatableNone:mM},Bb=(t,e)=>n=>`${n>0?e:t}`;function zb(t,e){return typeof t=="number"?n=>pt(t,e,n):vn.test(t)?Ob(t,e):t.startsWith("var(")?Bb(t,e):Wb(t,e)}const $b=(t,e)=>{const n=[...t],r=n.length,s=t.map((a,l)=>zb(a,e[l]));return a=>{for(let l=0;l<r;l++)n[l]=s[l](a);return n}},gM=(t,e)=>{const n={...t,...e},r={};for(const s in n)t[s]!==void 0&&e[s]!==void 0&&(r[s]=zb(t[s],e[s]));return s=>{for(const a in r)n[a]=r[a](s);return n}},Wb=(t,e)=>{const n=As.createTransformer(e),r=sf(t),s=sf(e);return r.numVars===s.numVars&&r.numColors===s.numColors&&r.numNumbers>=s.numNumbers?Ss($b(r.values,s.values),n):Bb(t,e)},nu=(t,e,n)=>{const r=e-t;return r===0?1:(n-t)/r},Fx=(t,e)=>n=>pt(t,e,n);function yM(t){return typeof t=="number"?Fx:typeof t=="string"?vn.test(t)?Ob:Wb:Array.isArray(t)?$b:typeof t=="object"?gM:Fx}function vM(t,e,n){const r=[],s=n||yM(t[0]),a=t.length-1;for(let l=0;l<a;l++){let u=s(t[l],t[l+1]);if(e){const d=Array.isArray(e)?e[l]||It:e;u=Ss(d,u)}r.push(u)}return r}function Hb(t,e,{clamp:n=!0,ease:r,mixer:s}={}){const a=t.length;if(a0(a===e.length),a===1)return()=>e[0];t[0]>t[a-1]&&(t=[...t].reverse(),e=[...e].reverse());const l=vM(e,r,s),u=l.length,d=p=>{let y=0;if(u>1)for(;y<t.length-2&&!(p<t[y+1]);y++);const w=nu(t[y],t[y+1],p);return l[y](w)};return n?p=>d(Cs(t[0],t[a-1],p)):d}function _M(t,e){const n=t[t.length-1];for(let r=1;r<=e;r++){const s=nu(0,e,r);t.push(pt(n,1,s))}}function wM(t){const e=[0];return _M(e,t.length-1),e}function xM(t,e){return t.map(n=>n*e)}function EM(t,e){return t.map(()=>e||Ab).splice(0,t.length-1)}function of({duration:t=300,keyframes:e,times:n,ease:r="easeInOut"}){const s=rM(r)?r.map(Vx):Vx(r),a={done:!1,value:e[0]},l=xM(n&&n.length===e.length?n:wM(e),t),u=Hb(l,e,{ease:Array.isArray(s)?s:EM(e,s)});return{calculatedDuration:t,next:d=>(a.value=u(d),a.done=d>=t,a)}}function qb(t,e){return e?t*(1e3/e):0}const TM=5;function Gb(t,e,n){const r=Math.max(e-TM,0);return qb(n-t(r),e-r)}const Ux=.001,SM=.01,IM=10,bM=.05,PM=1;function CM({duration:t=800,bounce:e=.25,velocity:n=0,mass:r=1}){let s,a,l=1-e;l=Cs(bM,PM,l),t=Cs(SM,IM,Ai(t)),l<1?(s=p=>{const y=p*l,w=y*t,x=y-n,S=wy(p,l),A=Math.exp(-w);return Ux-x/S*A},a=p=>{const w=p*l*t,x=w*n+n,S=Math.pow(l,2)*Math.pow(p,2)*t,A=Math.exp(-w),C=wy(Math.pow(p,2),l);return(-s(p)+Ux>0?-1:1)*((x-S)*A)/C}):(s=p=>{const y=Math.exp(-p*t),w=(p-n)*t+1;return-.001+y*w},a=p=>{const y=Math.exp(-p*t),w=(n-p)*(t*t);return y*w});const u=5/t,d=kM(s,a,u);if(t=So(t),isNaN(d))return{stiffness:100,damping:10,duration:t};{const p=Math.pow(d,2)*r;return{stiffness:p,damping:l*2*Math.sqrt(r*p),duration:t}}}const AM=12;function kM(t,e,n){let r=n;for(let s=1;s<AM;s++)r=r-t(r)/e(r);return r}function wy(t,e){return t*Math.sqrt(1-e*e)}const RM=["duration","bounce"],DM=["stiffness","damping","mass"];function Bx(t,e){return e.some(n=>t[n]!==void 0)}function jM(t){let e={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...t};if(!Bx(t,DM)&&Bx(t,RM)){const n=CM(t);e={...e,...n,mass:1},e.isResolvedFromDuration=!0}return e}function Kb({keyframes:t,restDelta:e,restSpeed:n,...r}){const s=t[0],a=t[t.length-1],l={done:!1,value:s},{stiffness:u,damping:d,mass:p,duration:y,velocity:w,isResolvedFromDuration:x}=jM({...r,velocity:-Ai(r.velocity||0)}),S=w||0,A=d/(2*Math.sqrt(u*p)),C=a-s,P=Ai(Math.sqrt(u/p)),$=Math.abs(C)<5;n||(n=$?.01:2),e||(e=$?.005:.5);let B;if(A<1){const L=wy(P,A);B=D=>{const q=Math.exp(-A*P*D);return a-q*((S+A*P*C)/L*Math.sin(L*D)+C*Math.cos(L*D))}}else if(A===1)B=L=>a-Math.exp(-P*L)*(C+(S+P*C)*L);else{const L=P*Math.sqrt(A*A-1);B=D=>{const q=Math.exp(-A*P*D),J=Math.min(L*D,300);return a-q*((S+A*P*C)*Math.sinh(J)+L*C*Math.cosh(J))/L}}return{calculatedDuration:x&&y||null,next:L=>{const D=B(L);if(x)l.done=L>=y;else{let q=S;L!==0&&(A<1?q=Gb(B,L,D):q=0);const J=Math.abs(q)<=n,k=Math.abs(a-D)<=e;l.done=J&&k}return l.value=l.done?a:D,l}}}function zx({keyframes:t,velocity:e=0,power:n=.8,timeConstant:r=325,bounceDamping:s=10,bounceStiffness:a=500,modifyTarget:l,min:u,max:d,restDelta:p=.5,restSpeed:y}){const w=t[0],x={done:!1,value:w},S=b=>u!==void 0&&b<u||d!==void 0&&b>d,A=b=>u===void 0?d:d===void 0||Math.abs(u-b)<Math.abs(d-b)?u:d;let C=n*e;const P=w+C,$=l===void 0?P:l(P);$!==P&&(C=$-w);const B=b=>-C*Math.exp(-b/r),L=b=>$+B(b),D=b=>{const R=B(b),V=L(b);x.done=Math.abs(R)<=p,x.value=x.done?$:V};let q,J;const k=b=>{S(x.value)&&(q=b,J=Kb({keyframes:[x.value,A(x.value)],velocity:Gb(L,b,x.value),damping:s,stiffness:a,restDelta:p,restSpeed:y}))};return k(0),{calculatedDuration:null,next:b=>{let R=!1;return!J&&q===void 0&&(R=!0,D(b),k(b)),q!==void 0&&b>q?J.next(b-q):(!R&&D(b),x)}}}const NM=t=>{const e=({timestamp:n})=>t(n);return{start:()=>nt.update(e,!0),stop:()=>Ni(e),now:()=>an.isProcessing?an.timestamp:performance.now()}},$x=2e4;function Wx(t){let e=0;const n=50;let r=t.next(e);for(;!r.done&&e<$x;)e+=n,r=t.next(e);return e>=$x?1/0:e}const OM={decay:zx,inertia:zx,tween:of,keyframes:of,spring:Kb};function af({autoplay:t=!0,delay:e=0,driver:n=NM,keyframes:r,type:s="keyframes",repeat:a=0,repeatDelay:l=0,repeatType:u="loop",onPlay:d,onStop:p,onComplete:y,onUpdate:w,...x}){let S=1,A=!1,C,P;const $=()=>{P=new Promise(j=>{C=j})};$();let B;const L=OM[s]||of;let D;L!==of&&typeof r[0]!="number"&&(D=Hb([0,100],r,{clamp:!1}),r=[0,100]);const q=L({...x,keyframes:r});let J;u==="mirror"&&(J=L({...x,keyframes:[...r].reverse(),velocity:-(x.velocity||0)}));let k="idle",b=null,R=null,V=null;q.calculatedDuration===null&&a&&(q.calculatedDuration=Wx(q));const{calculatedDuration:z}=q;let H=1/0,N=1/0;z!==null&&(H=z+l,N=H*(a+1)-l);let Le=0;const Qe=j=>{if(R===null)return;S>0&&(R=Math.min(R,j)),S<0&&(R=Math.min(j-N/S,R)),b!==null?Le=b:Le=Math.round(j-R)*S;const Q=Le-e*(S>=0?1:-1),ae=S>=0?Q<0:Q>N;Le=Math.max(Q,0),k==="finished"&&b===null&&(Le=N);let de=Le,ge=q;if(a){const De=Math.min(Le,N)/H;let $e=Math.floor(De),je=De%1;!je&&De>=1&&(je=1),je===1&&$e--,$e=Math.min($e,a+1),!!($e%2)&&(u==="reverse"?(je=1-je,l&&(je-=l/H)):u==="mirror"&&(ge=J)),de=Cs(0,1,je)*H}const we=ae?{done:!1,value:r[0]}:ge.next(de);D&&(we.value=D(we.value));let{done:fe}=we;!ae&&z!==null&&(fe=S>=0?Le>=N:Le<=0);const Te=b===null&&(k==="finished"||k==="running"&&fe);return w&&w(we.value),Te&&se(),we},xe=()=>{B&&B.stop(),B=void 0},ke=()=>{k="idle",xe(),C(),$(),R=V=null},se=()=>{k="finished",y&&y(),xe(),C()},ue=()=>{if(A)return;B||(B=n(Qe));const j=B.now();d&&d(),b!==null?R=j-b:(!R||k==="finished")&&(R=j),k==="finished"&&$(),V=R,b=null,k="running",B.start()};t&&ue();const Y={then(j,Q){return P.then(j,Q)},get time(){return Ai(Le)},set time(j){j=So(j),Le=j,b!==null||!B||S===0?b=j:R=B.now()-j/S},get duration(){const j=q.calculatedDuration===null?Wx(q):q.calculatedDuration;return Ai(j)},get speed(){return S},set speed(j){j===S||!B||(S=j,Y.time=Ai(Le))},get state(){return k},play:ue,pause:()=>{k="paused",b=Le},stop:()=>{A=!0,k!=="idle"&&(k="idle",p&&p(),ke())},cancel:()=>{V!==null&&Qe(V),ke()},complete:()=>{k="finished"},sample:j=>(R=0,Qe(j))};return Y}function LM(t){let e;return()=>(e===void 0&&(e=t()),e)}const VM=LM(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),MM=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),Qh=10,FM=2e4,UM=(t,e)=>e.type==="spring"||t==="backgroundColor"||!Ib(e.ease);function BM(t,e,{onUpdate:n,onComplete:r,...s}){if(!(VM()&&MM.has(e)&&!s.repeatDelay&&s.repeatType!=="mirror"&&s.damping!==0&&s.type!=="inertia"))return!1;let l=!1,u,d,p=!1;const y=()=>{d=new Promise(L=>{u=L})};y();let{keyframes:w,duration:x=300,ease:S,times:A}=s;if(UM(e,s)){const L=af({...s,repeat:0,delay:0});let D={done:!1,value:w[0]};const q=[];let J=0;for(;!D.done&&J<FM;)D=L.sample(J),q.push(D.value),J+=Qh;A=void 0,w=q,x=J-Qh,S="linear"}const C=YV(t.owner.current,e,w,{...s,duration:x,ease:S,times:A}),P=()=>{p=!1,C.cancel()},$=()=>{p=!0,nt.update(P),u(),y()};return C.onfinish=()=>{p||(t.set(XV(w,s)),r&&r(),$())},{then(L,D){return d.then(L,D)},attachTimeline(L){return C.timeline=L,C.onfinish=null,It},get time(){return Ai(C.currentTime||0)},set time(L){C.currentTime=So(L)},get speed(){return C.playbackRate},set speed(L){C.playbackRate=L},get duration(){return Ai(x)},play:()=>{l||(C.play(),Ni(P))},pause:()=>C.pause(),stop:()=>{if(l=!0,C.playState==="idle")return;const{currentTime:L}=C;if(L){const D=af({...s,autoplay:!1});t.setWithVelocity(D.sample(L-Qh).value,D.sample(L).value,Qh)}$()},complete:()=>{p||C.finish()},cancel:$}}function zM({keyframes:t,delay:e,onUpdate:n,onComplete:r}){const s=()=>(n&&n(t[t.length-1]),r&&r(),{time:0,speed:1,duration:0,play:It,pause:It,stop:It,then:a=>(a(),Promise.resolve()),cancel:It,complete:It});return e?af({keyframes:[0,1],duration:0,delay:e,onComplete:s}):s()}const $M={type:"spring",stiffness:500,damping:25,restSpeed:10},WM=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),HM={type:"keyframes",duration:.8},qM={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},GM=(t,{keyframes:e})=>e.length>2?HM:Fo.has(t)?t.startsWith("scale")?WM(e[1]):$M:qM,xy=(t,e)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(As.test(e)||e==="0")&&!e.startsWith("url(")),KM=new Set(["brightness","contrast","saturate","opacity"]);function QM(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[r]=n.match(Jf)||[];if(!r)return t;const s=n.replace(r,"");let a=KM.has(e)?1:0;return r!==n&&(a*=100),e+"("+a+s+")"}const YM=/([a-z-]*)\(.*?\)/g,Ey={...As,getAnimatableNone:t=>{const e=t.match(YM);return e?e.map(QM).join(" "):t}},XM={...lb,color:vn,backgroundColor:vn,outlineColor:vn,fill:vn,stroke:vn,borderColor:vn,borderTopColor:vn,borderRightColor:vn,borderBottomColor:vn,borderLeftColor:vn,filter:Ey,WebkitFilter:Ey},h0=t=>XM[t];function Qb(t,e){let n=h0(t);return n!==Ey&&(n=As),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const Yb=t=>/^0[^.\s]+$/.test(t);function JM(t){if(typeof t=="number")return t===0;if(t!==null)return t==="none"||t==="0"||Yb(t)}function ZM(t,e,n,r){const s=xy(e,n);let a;Array.isArray(n)?a=[...n]:a=[null,n];const l=r.from!==void 0?r.from:t.get();let u;const d=[];for(let p=0;p<a.length;p++)a[p]===null&&(a[p]=p===0?l:a[p-1]),JM(a[p])&&d.push(p),typeof a[p]=="string"&&a[p]!=="none"&&a[p]!=="0"&&(u=a[p]);if(s&&d.length&&u)for(let p=0;p<d.length;p++){const y=d[p];a[y]=Qb(e,u)}return a}function e9({when:t,delay:e,delayChildren:n,staggerChildren:r,staggerDirection:s,repeat:a,repeatType:l,repeatDelay:u,from:d,elapsed:p,...y}){return!!Object.keys(y).length}function d0(t,e){return t[e]||t.default||t}const t9={skipAnimations:!1},f0=(t,e,n,r={})=>s=>{const a=d0(r,t)||{},l=a.delay||r.delay||0;let{elapsed:u=0}=r;u=u-So(l);const d=ZM(e,t,n,a),p=d[0],y=d[d.length-1],w=xy(t,p),x=xy(t,y);let S={keyframes:d,velocity:e.getVelocity(),ease:"easeOut",...a,delay:-u,onUpdate:A=>{e.set(A),a.onUpdate&&a.onUpdate(A)},onComplete:()=>{s(),a.onComplete&&a.onComplete()}};if(e9(a)||(S={...S,...GM(t,S)}),S.duration&&(S.duration=So(S.duration)),S.repeatDelay&&(S.repeatDelay=So(S.repeatDelay)),!w||!x||QV.current||a.type===!1||t9.skipAnimations)return zM(S);if(!r.isHandoff&&e.owner&&e.owner.current instanceof HTMLElement&&!e.owner.getProps().onUpdate){const A=BM(e,t,S);if(A)return A}return af(S)};function lf(t){return!!(Rn(t)&&t.add)}const Xb=t=>/^\-?\d*\.?\d+$/.test(t);function p0(t,e){t.indexOf(e)===-1&&t.push(e)}function m0(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class g0{constructor(){this.subscriptions=[]}add(e){return p0(this.subscriptions,e),()=>m0(this.subscriptions,e)}notify(e,n,r){const s=this.subscriptions.length;if(s)if(s===1)this.subscriptions[0](e,n,r);else for(let a=0;a<s;a++){const l=this.subscriptions[a];l&&l(e,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const n9=t=>!isNaN(parseFloat(t));class r9{constructor(e,n={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(r,s=!0)=>{this.prev=this.current,this.current=r;const{delta:a,timestamp:l}=an;this.lastUpdated!==l&&(this.timeDelta=a,this.lastUpdated=l,nt.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),s&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>nt.postRender(this.velocityCheck),this.velocityCheck=({timestamp:r})=>{r!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=e,this.canTrackVelocity=n9(this.current),this.owner=n.owner}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new g0);const r=this.events[e].add(n);return e==="change"?()=>{r(),nt.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,r){this.set(n),this.prev=e,this.timeDelta=r}jump(e){this.updateAndNotify(e),this.prev=e,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?qb(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ll(t,e){return new r9(t,e)}const Jb=t=>e=>e.test(t),i9={test:t=>t==="auto",parse:t=>t},Zb=[Uo,Pe,ei,ls,hV,uV,i9],pc=t=>Zb.find(Jb(t)),s9=[...Zb,vn,As],o9=t=>s9.find(Jb(t));function a9(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,ll(n))}function l9(t,e){const n=ep(t,e);let{transitionEnd:r={},transition:s={},...a}=n?t.makeTargetAnimatable(n,!1):{};a={...a,...r};for(const l in a){const u=IV(a[l]);a9(t,l,u)}}function c9(t,e,n){var r,s;const a=Object.keys(e).filter(u=>!t.hasValue(u)),l=a.length;if(l)for(let u=0;u<l;u++){const d=a[u],p=e[d];let y=null;Array.isArray(p)&&(y=p[0]),y===null&&(y=(s=(r=n[d])!==null&&r!==void 0?r:t.readValue(d))!==null&&s!==void 0?s:e[d]),y!=null&&(typeof y=="string"&&(Xb(y)||Yb(y))?y=parseFloat(y):!o9(y)&&As.test(p)&&(y=Qb(d,p)),t.addValue(d,ll(y,{owner:t})),n[d]===void 0&&(n[d]=y),y!==null&&t.setBaseTarget(d,y))}}function u9(t,e){return e?(e[t]||e.default||e).from:void 0}function h9(t,e,n){const r={};for(const s in t){const a=u9(s,e);if(a!==void 0)r[s]=a;else{const l=n.getValue(s);l&&(r[s]=l.get())}}return r}function d9({protectedKeys:t,needsAnimating:e},n){const r=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,r}function f9(t,e){const n=t.get();if(Array.isArray(e)){for(let r=0;r<e.length;r++)if(e[r]!==n)return!0}else return n!==e}function eP(t,e,{delay:n=0,transitionOverride:r,type:s}={}){let{transition:a=t.getDefaultTransition(),transitionEnd:l,...u}=t.makeTargetAnimatable(e);const d=t.getValue("willChange");r&&(a=r);const p=[],y=s&&t.animationState&&t.animationState.getState()[s];for(const w in u){const x=t.getValue(w),S=u[w];if(!x||S===void 0||y&&d9(y,w))continue;const A={delay:n,elapsed:0,...d0(a||{},w)};if(window.HandoffAppearAnimations){const $=t.getProps()[tb];if($){const B=window.HandoffAppearAnimations($,w,x,nt);B!==null&&(A.elapsed=B,A.isHandoff=!0)}}let C=!A.isHandoff&&!f9(x,S);if(A.type==="spring"&&(x.getVelocity()||A.velocity)&&(C=!1),x.animation&&(C=!1),C)continue;x.start(f0(w,x,S,t.shouldReduceMotion&&Fo.has(w)?{type:!1}:A));const P=x.animation;lf(d)&&(d.add(w),P.then(()=>d.remove(w))),p.push(P)}return l&&Promise.all(p).then(()=>{l&&l9(t,l)}),p}function Ty(t,e,n={}){const r=ep(t,e,n.custom);let{transition:s=t.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(s=n.transitionOverride);const a=r?()=>Promise.all(eP(t,r,n)):()=>Promise.resolve(),l=t.variantChildren&&t.variantChildren.size?(d=0)=>{const{delayChildren:p=0,staggerChildren:y,staggerDirection:w}=s;return p9(t,e,p+d,y,w,n)}:()=>Promise.resolve(),{when:u}=s;if(u){const[d,p]=u==="beforeChildren"?[a,l]:[l,a];return d().then(()=>p())}else return Promise.all([a(),l(n.delay)])}function p9(t,e,n=0,r=0,s=1,a){const l=[],u=(t.variantChildren.size-1)*r,d=s===1?(p=0)=>p*r:(p=0)=>u-p*r;return Array.from(t.variantChildren).sort(m9).forEach((p,y)=>{p.notify("AnimationStart",e),l.push(Ty(p,e,{...a,delay:n+d(y)}).then(()=>p.notify("AnimationComplete",e)))}),Promise.all(l)}function m9(t,e){return t.sortNodePosition(e)}function g9(t,e,n={}){t.notify("AnimationStart",e);let r;if(Array.isArray(e)){const s=e.map(a=>Ty(t,a,n));r=Promise.all(s)}else if(typeof e=="string")r=Ty(t,e,n);else{const s=typeof e=="function"?ep(t,e,n.custom):e;r=Promise.all(eP(t,s,n))}return r.then(()=>t.notify("AnimationComplete",e))}const y9=[...Xv].reverse(),v9=Xv.length;function _9(t){return e=>Promise.all(e.map(({animation:n,options:r})=>g9(t,n,r)))}function w9(t){let e=_9(t);const n=E9();let r=!0;const s=(d,p)=>{const y=ep(t,p);if(y){const{transition:w,transitionEnd:x,...S}=y;d={...d,...S,...x}}return d};function a(d){e=d(t)}function l(d,p){const y=t.getProps(),w=t.getVariantContext(!0)||{},x=[],S=new Set;let A={},C=1/0;for(let $=0;$<v9;$++){const B=y9[$],L=n[B],D=y[B]!==void 0?y[B]:w[B],q=eu(D),J=B===p?L.isActive:null;J===!1&&(C=$);let k=D===w[B]&&D!==y[B]&&q;if(k&&r&&t.manuallyAnimateOnMount&&(k=!1),L.protectedKeys={...A},!L.isActive&&J===null||!D&&!L.prevProp||Yf(D)||typeof D=="boolean")continue;let R=x9(L.prevProp,D)||B===p&&L.isActive&&!k&&q||$>C&&q,V=!1;const z=Array.isArray(D)?D:[D];let H=z.reduce(s,{});J===!1&&(H={});const{prevResolvedValues:N={}}=L,Le={...N,...H},Qe=xe=>{R=!0,S.has(xe)&&(V=!0,S.delete(xe)),L.needsAnimating[xe]=!0};for(const xe in Le){const ke=H[xe],se=N[xe];if(A.hasOwnProperty(xe))continue;let ue=!1;rf(ke)&&rf(se)?ue=!Tb(ke,se):ue=ke!==se,ue?ke!==void 0?Qe(xe):S.add(xe):ke!==void 0&&S.has(xe)?Qe(xe):L.protectedKeys[xe]=!0}L.prevProp=D,L.prevResolvedValues=H,L.isActive&&(A={...A,...H}),r&&t.blockInitialAnimation&&(R=!1),R&&(!k||V)&&x.push(...z.map(xe=>({animation:xe,options:{type:B,...d}})))}if(S.size){const $={};S.forEach(B=>{const L=t.getBaseTarget(B);L!==void 0&&($[B]=L)}),x.push({animation:$})}let P=!!x.length;return r&&(y.initial===!1||y.initial===y.animate)&&!t.manuallyAnimateOnMount&&(P=!1),r=!1,P?e(x):Promise.resolve()}function u(d,p,y){var w;if(n[d].isActive===p)return Promise.resolve();(w=t.variantChildren)===null||w===void 0||w.forEach(S=>{var A;return(A=S.animationState)===null||A===void 0?void 0:A.setActive(d,p)}),n[d].isActive=p;const x=l(y,d);for(const S in n)n[S].protectedKeys={};return x}return{animateChanges:l,setActive:u,setAnimateFunction:a,getState:()=>n}}function x9(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!Tb(e,t):!1}function co(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function E9(){return{animate:co(!0),whileInView:co(),whileHover:co(),whileTap:co(),whileDrag:co(),whileFocus:co(),exit:co()}}class T9 extends Ns{constructor(e){super(e),e.animationState||(e.animationState=w9(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();this.unmount(),Yf(e)&&(this.unmount=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let S9=0;class I9 extends Ns{constructor(){super(...arguments),this.id=S9++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n,custom:r}=this.node.presenceContext,{isPresent:s}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===s)return;const a=this.node.animationState.setActive("exit",!e,{custom:r??this.node.getProps().custom});n&&!e&&a.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const b9={animation:{Feature:T9},exit:{Feature:I9}},Hx=(t,e)=>Math.abs(t-e);function P9(t,e){const n=Hx(t.x,e.x),r=Hx(t.y,e.y);return Math.sqrt(n**2+r**2)}class tP{constructor(e,n,{transformPagePoint:r,contextWindow:s,dragSnapToOrigin:a=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const w=ag(this.lastMoveEventInfo,this.history),x=this.startEvent!==null,S=P9(w.offset,{x:0,y:0})>=3;if(!x&&!S)return;const{point:A}=w,{timestamp:C}=an;this.history.push({...A,timestamp:C});const{onStart:P,onMove:$}=this.handlers;x||(P&&P(this.lastMoveEvent,w),this.startEvent=this.lastMoveEvent),$&&$(this.lastMoveEvent,w)},this.handlePointerMove=(w,x)=>{this.lastMoveEvent=w,this.lastMoveEventInfo=og(x,this.transformPagePoint),nt.update(this.updatePoint,!0)},this.handlePointerUp=(w,x)=>{this.end();const{onEnd:S,onSessionEnd:A,resumeAnimation:C}=this.handlers;if(this.dragSnapToOrigin&&C&&C(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const P=ag(w.type==="pointercancel"?this.lastMoveEventInfo:og(x,this.transformPagePoint),this.history);this.startEvent&&S&&S(w,P),A&&A(w,P)},!vb(e))return;this.dragSnapToOrigin=a,this.handlers=n,this.transformPagePoint=r,this.contextWindow=s||window;const l=Zf(e),u=og(l,this.transformPagePoint),{point:d}=u,{timestamp:p}=an;this.history=[{...d,timestamp:p}];const{onSessionStart:y}=n;y&&y(e,ag(u,this.history)),this.removeListeners=Ss(Ci(this.contextWindow,"pointermove",this.handlePointerMove),Ci(this.contextWindow,"pointerup",this.handlePointerUp),Ci(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Ni(this.updatePoint)}}function og(t,e){return e?{point:e(t.point)}:t}function qx(t,e){return{x:t.x-e.x,y:t.y-e.y}}function ag({point:t},e){return{point:t,delta:qx(t,nP(e)),offset:qx(t,C9(e)),velocity:A9(e,.1)}}function C9(t){return t[0]}function nP(t){return t[t.length-1]}function A9(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,r=null;const s=nP(t);for(;n>=0&&(r=t[n],!(s.timestamp-r.timestamp>So(e)));)n--;if(!r)return{x:0,y:0};const a=Ai(s.timestamp-r.timestamp);if(a===0)return{x:0,y:0};const l={x:(s.x-r.x)/a,y:(s.y-r.y)/a};return l.x===1/0&&(l.x=0),l.y===1/0&&(l.y=0),l}function $n(t){return t.max-t.min}function Sy(t,e=0,n=.01){return Math.abs(t-e)<=n}function Gx(t,e,n,r=.5){t.origin=r,t.originPoint=pt(e.min,e.max,t.origin),t.scale=$n(n)/$n(e),(Sy(t.scale,1,1e-4)||isNaN(t.scale))&&(t.scale=1),t.translate=pt(n.min,n.max,t.origin)-t.originPoint,(Sy(t.translate)||isNaN(t.translate))&&(t.translate=0)}function Mc(t,e,n,r){Gx(t.x,e.x,n.x,r?r.originX:void 0),Gx(t.y,e.y,n.y,r?r.originY:void 0)}function Kx(t,e,n){t.min=n.min+e.min,t.max=t.min+$n(e)}function k9(t,e,n){Kx(t.x,e.x,n.x),Kx(t.y,e.y,n.y)}function Qx(t,e,n){t.min=e.min-n.min,t.max=t.min+$n(e)}function Fc(t,e,n){Qx(t.x,e.x,n.x),Qx(t.y,e.y,n.y)}function R9(t,{min:e,max:n},r){return e!==void 0&&t<e?t=r?pt(e,t,r.min):Math.max(t,e):n!==void 0&&t>n&&(t=r?pt(n,t,r.max):Math.min(t,n)),t}function Yx(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function D9(t,{top:e,left:n,bottom:r,right:s}){return{x:Yx(t.x,n,s),y:Yx(t.y,e,r)}}function Xx(t,e){let n=e.min-t.min,r=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,r]=[r,n]),{min:n,max:r}}function j9(t,e){return{x:Xx(t.x,e.x),y:Xx(t.y,e.y)}}function N9(t,e){let n=.5;const r=$n(t),s=$n(e);return s>r?n=nu(e.min,e.max-r,t.min):r>s&&(n=nu(t.min,t.max-s,e.min)),Cs(0,1,n)}function O9(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const Iy=.35;function L9(t=Iy){return t===!1?t=0:t===!0&&(t=Iy),{x:Jx(t,"left","right"),y:Jx(t,"top","bottom")}}function Jx(t,e,n){return{min:Zx(t,e),max:Zx(t,n)}}function Zx(t,e){return typeof t=="number"?t:t[e]||0}const eE=()=>({translate:0,scale:1,origin:0,originPoint:0}),Ua=()=>({x:eE(),y:eE()}),tE=()=>({min:0,max:0}),At=()=>({x:tE(),y:tE()});function lr(t){return[t("x"),t("y")]}function rP({top:t,left:e,right:n,bottom:r}){return{x:{min:e,max:n},y:{min:t,max:r}}}function V9({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function M9(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),r=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function lg(t){return t===void 0||t===1}function by({scale:t,scaleX:e,scaleY:n}){return!lg(t)||!lg(e)||!lg(n)}function fo(t){return by(t)||iP(t)||t.z||t.rotate||t.rotateX||t.rotateY}function iP(t){return nE(t.x)||nE(t.y)}function nE(t){return t&&t!=="0%"}function cf(t,e,n){const r=t-n,s=e*r;return n+s}function rE(t,e,n,r,s){return s!==void 0&&(t=cf(t,s,r)),cf(t,n,r)+e}function Py(t,e=0,n=1,r,s){t.min=rE(t.min,e,n,r,s),t.max=rE(t.max,e,n,r,s)}function sP(t,{x:e,y:n}){Py(t.x,e.translate,e.scale,e.originPoint),Py(t.y,n.translate,n.scale,n.originPoint)}function F9(t,e,n,r=!1){const s=n.length;if(!s)return;e.x=e.y=1;let a,l;for(let u=0;u<s;u++){a=n[u],l=a.projectionDelta;const d=a.instance;d&&d.style&&d.style.display==="contents"||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&Ba(t,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),l&&(e.x*=l.x.scale,e.y*=l.y.scale,sP(t,l)),r&&fo(a.latestValues)&&Ba(t,a.latestValues))}e.x=iE(e.x),e.y=iE(e.y)}function iE(t){return Number.isInteger(t)||t>1.0000000000001||t<.999999999999?t:1}function cs(t,e){t.min=t.min+e,t.max=t.max+e}function sE(t,e,[n,r,s]){const a=e[s]!==void 0?e[s]:.5,l=pt(t.min,t.max,a);Py(t,e[n],e[r],l,e.scale)}const U9=["x","scaleX","originX"],B9=["y","scaleY","originY"];function Ba(t,e){sE(t.x,e,U9),sE(t.y,e,B9)}function oP(t,e){return rP(M9(t.getBoundingClientRect(),e))}function z9(t,e,n){const r=oP(t,n),{scroll:s}=e;return s&&(cs(r.x,s.offset.x),cs(r.y,s.offset.y)),r}const aP=({current:t})=>t?t.ownerDocument.defaultView:null,$9=new WeakMap;class W9{constructor(e){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=At(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const s=y=>{const{dragSnapToOrigin:w}=this.getProps();w?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Zf(y,"page").point)},a=(y,w)=>{const{drag:x,dragPropagation:S,onDragStart:A}=this.getProps();if(x&&!S&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=wb(x),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),lr(P=>{let $=this.getAxisMotionValue(P).get()||0;if(ei.test($)){const{projection:B}=this.visualElement;if(B&&B.layout){const L=B.layout.layoutBox[P];L&&($=$n(L)*(parseFloat($)/100))}}this.originPoint[P]=$}),A&&nt.update(()=>A(y,w),!1,!0);const{animationState:C}=this.visualElement;C&&C.setActive("whileDrag",!0)},l=(y,w)=>{const{dragPropagation:x,dragDirectionLock:S,onDirectionLock:A,onDrag:C}=this.getProps();if(!x&&!this.openGlobalLock)return;const{offset:P}=w;if(S&&this.currentDirection===null){this.currentDirection=H9(P),this.currentDirection!==null&&A&&A(this.currentDirection);return}this.updateAxis("x",w.point,P),this.updateAxis("y",w.point,P),this.visualElement.render(),C&&C(y,w)},u=(y,w)=>this.stop(y,w),d=()=>lr(y=>{var w;return this.getAnimationState(y)==="paused"&&((w=this.getAxisMotionValue(y).animation)===null||w===void 0?void 0:w.play())}),{dragSnapToOrigin:p}=this.getProps();this.panSession=new tP(e,{onSessionStart:s,onStart:a,onMove:l,onSessionEnd:u,resumeAnimation:d},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:p,contextWindow:aP(this.visualElement)})}stop(e,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:s}=n;this.startAnimation(s);const{onDragEnd:a}=this.getProps();a&&nt.update(()=>a(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,r){const{drag:s}=this.getProps();if(!r||!Yh(e,s,this.currentDirection))return;const a=this.getAxisMotionValue(e);let l=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(l=R9(l,this.constraints[e],this.elastic[e])),a.set(l)}resolveConstraints(){var e;const{dragConstraints:n,dragElastic:r}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,a=this.constraints;n&&Ma(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&s?this.constraints=D9(s.layoutBox,n):this.constraints=!1,this.elastic=L9(r),a!==this.constraints&&s&&this.constraints&&!this.hasMutatedConstraints&&lr(l=>{this.getAxisMotionValue(l)&&(this.constraints[l]=O9(s.layoutBox[l],this.constraints[l]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!Ma(e))return!1;const r=e.current,{projection:s}=this.visualElement;if(!s||!s.layout)return!1;const a=z9(r,s.root,this.visualElement.getTransformPagePoint());let l=j9(s.layout.layoutBox,a);if(n){const u=n(V9(l));this.hasMutatedConstraints=!!u,u&&(l=rP(u))}return l}startAnimation(e){const{drag:n,dragMomentum:r,dragElastic:s,dragTransition:a,dragSnapToOrigin:l,onDragTransitionEnd:u}=this.getProps(),d=this.constraints||{},p=lr(y=>{if(!Yh(y,n,this.currentDirection))return;let w=d&&d[y]||{};l&&(w={min:0,max:0});const x=s?200:1e6,S=s?40:1e7,A={type:"inertia",velocity:r?e[y]:0,bounceStiffness:x,bounceDamping:S,timeConstant:750,restDelta:1,restSpeed:10,...a,...w};return this.startAxisValueAnimation(y,A)});return Promise.all(p).then(u)}startAxisValueAnimation(e,n){const r=this.getAxisMotionValue(e);return r.start(f0(e,r,0,n))}stopAnimation(){lr(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){lr(e=>{var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(e){const n="_drag"+e.toUpperCase(),r=this.visualElement.getProps(),s=r[n];return s||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){lr(n=>{const{drag:r}=this.getProps();if(!Yh(n,r,this.currentDirection))return;const{projection:s}=this.visualElement,a=this.getAxisMotionValue(n);if(s&&s.layout){const{min:l,max:u}=s.layout.layoutBox[n];a.set(e[n]-pt(l,u,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Ma(n)||!r||!this.constraints)return;this.stopAnimation();const s={x:0,y:0};lr(l=>{const u=this.getAxisMotionValue(l);if(u){const d=u.get();s[l]=N9({min:d,max:d},this.constraints[l])}});const{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),lr(l=>{if(!Yh(l,e,null))return;const u=this.getAxisMotionValue(l),{min:d,max:p}=this.constraints[l];u.set(pt(d,p,s[l]))})}addListeners(){if(!this.visualElement.current)return;$9.set(this.visualElement,this);const e=this.visualElement.current,n=Ci(e,"pointerdown",d=>{const{drag:p,dragListener:y=!0}=this.getProps();p&&y&&this.start(d)}),r=()=>{const{dragConstraints:d}=this.getProps();Ma(d)&&(this.constraints=this.resolveRefConstraints())},{projection:s}=this.visualElement,a=s.addEventListener("measure",r);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),r();const l=Pi(window,"resize",()=>this.scalePositionWithinConstraints()),u=s.addEventListener("didUpdate",({delta:d,hasLayoutChanged:p})=>{this.isDragging&&p&&(lr(y=>{const w=this.getAxisMotionValue(y);w&&(this.originPoint[y]+=d[y].translate,w.set(w.get()+d[y].translate))}),this.visualElement.render())});return()=>{l(),n(),a(),u&&u()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:s=!1,dragConstraints:a=!1,dragElastic:l=Iy,dragMomentum:u=!0}=e;return{...e,drag:n,dragDirectionLock:r,dragPropagation:s,dragConstraints:a,dragElastic:l,dragMomentum:u}}}function Yh(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function H9(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class q9 extends Ns{constructor(e){super(e),this.removeGroupControls=It,this.removeListeners=It,this.controls=new W9(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||It}unmount(){this.removeGroupControls(),this.removeListeners()}}const oE=t=>(e,n)=>{t&&nt.update(()=>t(e,n))};class G9 extends Ns{constructor(){super(...arguments),this.removePointerDownListener=It}onPointerDown(e){this.session=new tP(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:aP(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:r,onPanEnd:s}=this.node.getProps();return{onSessionStart:oE(e),onStart:oE(n),onMove:r,onEnd:(a,l)=>{delete this.session,s&&nt.update(()=>s(a,l))}}}mount(){this.removePointerDownListener=Ci(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function K9(){const t=M.useContext(Kf);if(t===null)return[!0,null];const{isPresent:e,onExitComplete:n,register:r}=t,s=M.useId();return M.useEffect(()=>r(s),[]),!e&&n?[!1,()=>n&&n(s)]:[!0]}const Cd={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function aE(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const mc={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(Pe.test(t))t=parseFloat(t);else return t;const n=aE(t,e.target.x),r=aE(t,e.target.y);return`${n}% ${r}%`}},Q9={correct:(t,{treeScale:e,projectionDelta:n})=>{const r=t,s=As.parse(t);if(s.length>5)return r;const a=As.createTransformer(t),l=typeof s[0]!="number"?1:0,u=n.x.scale*e.x,d=n.y.scale*e.y;s[0+l]/=u,s[1+l]/=d;const p=pt(u,d,.5);return typeof s[2+l]=="number"&&(s[2+l]/=p),typeof s[3+l]=="number"&&(s[3+l]/=p),a(s)}};class Y9 extends Me.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:r,layoutId:s}=this.props,{projection:a}=e;rV(X9),a&&(n.group&&n.group.add(a),r&&r.register&&s&&r.register(a),a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,onExitComplete:()=>this.safeToRemove()})),Cd.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:r,drag:s,isPresent:a}=this.props,l=r.projection;return l&&(l.isPresent=a,s||e.layoutDependency!==n||n===void 0?l.willUpdate():this.safeToRemove(),e.isPresent!==a&&(a?l.promote():l.relegate()||nt.postRender(()=>{const u=l.getStack();(!u||!u.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),queueMicrotask(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:s}=e;s&&(s.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(s),r&&r.deregister&&r.deregister(s))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function lP(t){const[e,n]=K9(),r=M.useContext(Zv);return Me.createElement(Y9,{...t,layoutGroup:r,switchLayoutGroup:M.useContext(rb),isPresent:e,safeToRemove:n})}const X9={borderRadius:{...mc,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:mc,borderTopRightRadius:mc,borderBottomLeftRadius:mc,borderBottomRightRadius:mc,boxShadow:Q9},cP=["TopLeft","TopRight","BottomLeft","BottomRight"],J9=cP.length,lE=t=>typeof t=="string"?parseFloat(t):t,cE=t=>typeof t=="number"||Pe.test(t);function Z9(t,e,n,r,s,a){s?(t.opacity=pt(0,n.opacity!==void 0?n.opacity:1,eF(r)),t.opacityExit=pt(e.opacity!==void 0?e.opacity:1,0,tF(r))):a&&(t.opacity=pt(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let l=0;l<J9;l++){const u=`border${cP[l]}Radius`;let d=uE(e,u),p=uE(n,u);if(d===void 0&&p===void 0)continue;d||(d=0),p||(p=0),d===0||p===0||cE(d)===cE(p)?(t[u]=Math.max(pt(lE(d),lE(p),r),0),(ei.test(p)||ei.test(d))&&(t[u]+="%")):t[u]=p}(e.rotate||n.rotate)&&(t.rotate=pt(e.rotate||0,n.rotate||0,r))}function uE(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const eF=uP(0,.5,Db),tF=uP(.5,.95,It);function uP(t,e,n){return r=>r<t?0:r>e?1:n(nu(t,e,r))}function hE(t,e){t.min=e.min,t.max=e.max}function er(t,e){hE(t.x,e.x),hE(t.y,e.y)}function dE(t,e,n,r,s){return t-=e,t=cf(t,1/n,r),s!==void 0&&(t=cf(t,1/s,r)),t}function nF(t,e=0,n=1,r=.5,s,a=t,l=t){if(ei.test(e)&&(e=parseFloat(e),e=pt(l.min,l.max,e/100)-l.min),typeof e!="number")return;let u=pt(a.min,a.max,r);t===a&&(u-=e),t.min=dE(t.min,e,n,u,s),t.max=dE(t.max,e,n,u,s)}function fE(t,e,[n,r,s],a,l){nF(t,e[n],e[r],e[s],e.scale,a,l)}const rF=["x","scaleX","originX"],iF=["y","scaleY","originY"];function pE(t,e,n,r){fE(t.x,e,rF,n?n.x:void 0,r?r.x:void 0),fE(t.y,e,iF,n?n.y:void 0,r?r.y:void 0)}function mE(t){return t.translate===0&&t.scale===1}function hP(t){return mE(t.x)&&mE(t.y)}function sF(t,e){return t.x.min===e.x.min&&t.x.max===e.x.max&&t.y.min===e.y.min&&t.y.max===e.y.max}function dP(t,e){return Math.round(t.x.min)===Math.round(e.x.min)&&Math.round(t.x.max)===Math.round(e.x.max)&&Math.round(t.y.min)===Math.round(e.y.min)&&Math.round(t.y.max)===Math.round(e.y.max)}function gE(t){return $n(t.x)/$n(t.y)}class oF{constructor(){this.members=[]}add(e){p0(this.members,e),e.scheduleRender()}remove(e){if(m0(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(s=>e===s);if(n===0)return!1;let r;for(let s=n;s>=0;s--){const a=this.members[s];if(a.isPresent!==!1){r=a;break}}return r?(this.promote(r),!0):!1}promote(e,n){const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.instance&&r.scheduleRender(),e.scheduleRender(),e.resumeFrom=r,n&&(e.resumeFrom.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:s}=e.options;s===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:r}=e;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function yE(t,e,n){let r="";const s=t.x.translate/e.x,a=t.y.translate/e.y;if((s||a)&&(r=`translate3d(${s}px, ${a}px, 0) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),n){const{rotate:d,rotateX:p,rotateY:y}=n;d&&(r+=`rotate(${d}deg) `),p&&(r+=`rotateX(${p}deg) `),y&&(r+=`rotateY(${y}deg) `)}const l=t.x.scale*e.x,u=t.y.scale*e.y;return(l!==1||u!==1)&&(r+=`scale(${l}, ${u})`),r||"none"}const aF=(t,e)=>t.depth-e.depth;class lF{constructor(){this.children=[],this.isDirty=!1}add(e){p0(this.children,e),this.isDirty=!0}remove(e){m0(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(aF),this.isDirty=!1,this.children.forEach(e)}}function cF(t,e){const n=performance.now(),r=({timestamp:s})=>{const a=s-n;a>=e&&(Ni(r),t(a-e))};return nt.read(r,!0),()=>Ni(r)}function uF(t){window.MotionDebug&&window.MotionDebug.record(t)}function hF(t){return t instanceof SVGElement&&t.tagName!=="svg"}function dF(t,e,n){const r=Rn(t)?t:ll(t);return r.start(f0("",r,e,n)),r.animation}const vE=["","X","Y","Z"],fF={visibility:"hidden"},_E=1e3;let pF=0;const po={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function fP({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:r,resetTransform:s}){return class{constructor(l={},u=e==null?void 0:e()){this.id=pF++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,po.totalNodes=po.resolvedTargetDeltas=po.recalculatedProjection=0,this.nodes.forEach(yF),this.nodes.forEach(EF),this.nodes.forEach(TF),this.nodes.forEach(vF),uF(po)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=l,this.root=u?u.root||u:this,this.path=u?[...u.path,u]:[],this.parent=u,this.depth=u?u.depth+1:0;for(let d=0;d<this.path.length;d++)this.path[d].shouldResetTransform=!0;this.root===this&&(this.nodes=new lF)}addEventListener(l,u){return this.eventHandlers.has(l)||this.eventHandlers.set(l,new g0),this.eventHandlers.get(l).add(u)}notifyListeners(l,...u){const d=this.eventHandlers.get(l);d&&d.notify(...u)}hasListeners(l){return this.eventHandlers.has(l)}mount(l,u=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=hF(l),this.instance=l;const{layoutId:d,layout:p,visualElement:y}=this.options;if(y&&!y.current&&y.mount(l),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),u&&(p||d)&&(this.isLayoutDirty=!0),t){let w;const x=()=>this.root.updateBlockedByResize=!1;t(l,()=>{this.root.updateBlockedByResize=!0,w&&w(),w=cF(x,250),Cd.hasAnimatedSinceResize&&(Cd.hasAnimatedSinceResize=!1,this.nodes.forEach(xE))})}d&&this.root.registerSharedNode(d,this),this.options.animate!==!1&&y&&(d||p)&&this.addEventListener("didUpdate",({delta:w,hasLayoutChanged:x,hasRelativeTargetChanged:S,layout:A})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const C=this.options.transition||y.getDefaultTransition()||CF,{onLayoutAnimationStart:P,onLayoutAnimationComplete:$}=y.getProps(),B=!this.targetLayout||!dP(this.targetLayout,A)||S,L=!x&&S;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||L||x&&(B||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(w,L);const D={...d0(C,"layout"),onPlay:P,onComplete:$};(y.shouldReduceMotion||this.options.layoutRoot)&&(D.delay=0,D.type=!1),this.startAnimation(D)}else x||xE(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=A})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const l=this.getStack();l&&l.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Ni(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(SF),this.animationId++)}getTransformTemplate(){const{visualElement:l}=this.options;return l&&l.getProps().transformTemplate}willUpdate(l=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let y=0;y<this.path.length;y++){const w=this.path[y];w.shouldResetTransform=!0,w.updateScroll("snapshot"),w.options.layoutRoot&&w.willUpdate(!1)}const{layoutId:u,layout:d}=this.options;if(u===void 0&&!d)return;const p=this.getTransformTemplate();this.prevTransformTemplateValue=p?p(this.latestValues,""):void 0,this.updateSnapshot(),l&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(wE);return}this.isUpdating||this.nodes.forEach(wF),this.isUpdating=!1,this.nodes.forEach(xF),this.nodes.forEach(mF),this.nodes.forEach(gF),this.clearAllSnapshots();const u=performance.now();an.delta=Cs(0,1e3/60,u-an.timestamp),an.timestamp=u,an.isProcessing=!0,Zm.update.process(an),Zm.preRender.process(an),Zm.render.process(an),an.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(_F),this.sharedNodes.forEach(IF)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,nt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){nt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let d=0;d<this.path.length;d++)this.path[d].updateScroll();const l=this.layout;this.layout=this.measure(!1),this.layoutCorrected=At(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:u}=this.options;u&&u.notify("LayoutMeasure",this.layout.layoutBox,l?l.layoutBox:void 0)}updateScroll(l="measure"){let u=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===l&&(u=!1),u&&(this.scroll={animationId:this.root.animationId,phase:l,isRoot:r(this.instance),offset:n(this.instance)})}resetTransform(){if(!s)return;const l=this.isLayoutDirty||this.shouldResetTransform,u=this.projectionDelta&&!hP(this.projectionDelta),d=this.getTransformTemplate(),p=d?d(this.latestValues,""):void 0,y=p!==this.prevTransformTemplateValue;l&&(u||fo(this.latestValues)||y)&&(s(this.instance,p),this.shouldResetTransform=!1,this.scheduleRender())}measure(l=!0){const u=this.measurePageBox();let d=this.removeElementScroll(u);return l&&(d=this.removeTransform(d)),AF(d),{animationId:this.root.animationId,measuredBox:u,layoutBox:d,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:l}=this.options;if(!l)return At();const u=l.measureViewportBox(),{scroll:d}=this.root;return d&&(cs(u.x,d.offset.x),cs(u.y,d.offset.y)),u}removeElementScroll(l){const u=At();er(u,l);for(let d=0;d<this.path.length;d++){const p=this.path[d],{scroll:y,options:w}=p;if(p!==this.root&&y&&w.layoutScroll){if(y.isRoot){er(u,l);const{scroll:x}=this.root;x&&(cs(u.x,-x.offset.x),cs(u.y,-x.offset.y))}cs(u.x,y.offset.x),cs(u.y,y.offset.y)}}return u}applyTransform(l,u=!1){const d=At();er(d,l);for(let p=0;p<this.path.length;p++){const y=this.path[p];!u&&y.options.layoutScroll&&y.scroll&&y!==y.root&&Ba(d,{x:-y.scroll.offset.x,y:-y.scroll.offset.y}),fo(y.latestValues)&&Ba(d,y.latestValues)}return fo(this.latestValues)&&Ba(d,this.latestValues),d}removeTransform(l){const u=At();er(u,l);for(let d=0;d<this.path.length;d++){const p=this.path[d];if(!p.instance||!fo(p.latestValues))continue;by(p.latestValues)&&p.updateSnapshot();const y=At(),w=p.measurePageBox();er(y,w),pE(u,p.latestValues,p.snapshot?p.snapshot.layoutBox:void 0,y)}return fo(this.latestValues)&&pE(u,this.latestValues),u}setTargetDelta(l){this.targetDelta=l,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(l){this.options={...this.options,...l,crossfade:l.crossfade!==void 0?l.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==an.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(l=!1){var u;const d=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=d.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=d.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=d.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==d;if(!(l||p&&this.isSharedProjectionDirty||this.isProjectionDirty||!((u=this.parent)===null||u===void 0)&&u.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:w,layoutId:x}=this.options;if(!(!this.layout||!(w||x))){if(this.resolvedRelativeTargetAt=an.timestamp,!this.targetDelta&&!this.relativeTarget){const S=this.getClosestProjectingParent();S&&S.layout&&this.animationProgress!==1?(this.relativeParent=S,this.forceRelativeParentToResolveTarget(),this.relativeTarget=At(),this.relativeTargetOrigin=At(),Fc(this.relativeTargetOrigin,this.layout.layoutBox,S.layout.layoutBox),er(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=At(),this.targetWithTransforms=At()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),k9(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):er(this.target,this.layout.layoutBox),sP(this.target,this.targetDelta)):er(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const S=this.getClosestProjectingParent();S&&!!S.resumingFrom==!!this.resumingFrom&&!S.options.layoutScroll&&S.target&&this.animationProgress!==1?(this.relativeParent=S,this.forceRelativeParentToResolveTarget(),this.relativeTarget=At(),this.relativeTargetOrigin=At(),Fc(this.relativeTargetOrigin,this.target,S.target),er(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}po.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||by(this.parent.latestValues)||iP(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var l;const u=this.getLead(),d=!!this.resumingFrom||this!==u;let p=!0;if((this.isProjectionDirty||!((l=this.parent)===null||l===void 0)&&l.isProjectionDirty)&&(p=!1),d&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===an.timestamp&&(p=!1),p)return;const{layout:y,layoutId:w}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(y||w))return;er(this.layoutCorrected,this.layout.layoutBox);const x=this.treeScale.x,S=this.treeScale.y;F9(this.layoutCorrected,this.treeScale,this.path,d),u.layout&&!u.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(u.target=u.layout.layoutBox);const{target:A}=u;if(!A){this.projectionTransform&&(this.projectionDelta=Ua(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=Ua(),this.projectionDeltaWithTransform=Ua());const C=this.projectionTransform;Mc(this.projectionDelta,this.layoutCorrected,A,this.latestValues),this.projectionTransform=yE(this.projectionDelta,this.treeScale),(this.projectionTransform!==C||this.treeScale.x!==x||this.treeScale.y!==S)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",A)),po.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(l=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),l){const u=this.getStack();u&&u.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(l,u=!1){const d=this.snapshot,p=d?d.latestValues:{},y={...this.latestValues},w=Ua();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!u;const x=At(),S=d?d.source:void 0,A=this.layout?this.layout.source:void 0,C=S!==A,P=this.getStack(),$=!P||P.members.length<=1,B=!!(C&&!$&&this.options.crossfade===!0&&!this.path.some(PF));this.animationProgress=0;let L;this.mixTargetDelta=D=>{const q=D/1e3;EE(w.x,l.x,q),EE(w.y,l.y,q),this.setTargetDelta(w),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Fc(x,this.layout.layoutBox,this.relativeParent.layout.layoutBox),bF(this.relativeTarget,this.relativeTargetOrigin,x,q),L&&sF(this.relativeTarget,L)&&(this.isProjectionDirty=!1),L||(L=At()),er(L,this.relativeTarget)),C&&(this.animationValues=y,Z9(y,p,this.latestValues,q,B,$)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=q},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(l){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Ni(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=nt.update(()=>{Cd.hasAnimatedSinceResize=!0,this.currentAnimation=dF(0,_E,{...l,onUpdate:u=>{this.mixTargetDelta(u),l.onUpdate&&l.onUpdate(u)},onComplete:()=>{l.onComplete&&l.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const l=this.getStack();l&&l.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(_E),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const l=this.getLead();let{targetWithTransforms:u,target:d,layout:p,latestValues:y}=l;if(!(!u||!d||!p)){if(this!==l&&this.layout&&p&&pP(this.options.animationType,this.layout.layoutBox,p.layoutBox)){d=this.target||At();const w=$n(this.layout.layoutBox.x);d.x.min=l.target.x.min,d.x.max=d.x.min+w;const x=$n(this.layout.layoutBox.y);d.y.min=l.target.y.min,d.y.max=d.y.min+x}er(u,d),Ba(u,y),Mc(this.projectionDeltaWithTransform,this.layoutCorrected,u,y)}}registerSharedNode(l,u){this.sharedNodes.has(l)||this.sharedNodes.set(l,new oF),this.sharedNodes.get(l).add(u);const p=u.options.initialPromotionConfig;u.promote({transition:p?p.transition:void 0,preserveFollowOpacity:p&&p.shouldPreserveFollowOpacity?p.shouldPreserveFollowOpacity(u):void 0})}isLead(){const l=this.getStack();return l?l.lead===this:!0}getLead(){var l;const{layoutId:u}=this.options;return u?((l=this.getStack())===null||l===void 0?void 0:l.lead)||this:this}getPrevLead(){var l;const{layoutId:u}=this.options;return u?(l=this.getStack())===null||l===void 0?void 0:l.prevLead:void 0}getStack(){const{layoutId:l}=this.options;if(l)return this.root.sharedNodes.get(l)}promote({needsReset:l,transition:u,preserveFollowOpacity:d}={}){const p=this.getStack();p&&p.promote(this,d),l&&(this.projectionDelta=void 0,this.needsReset=!0),u&&this.setOptions({transition:u})}relegate(){const l=this.getStack();return l?l.relegate(this):!1}resetRotation(){const{visualElement:l}=this.options;if(!l)return;let u=!1;const{latestValues:d}=l;if((d.rotate||d.rotateX||d.rotateY||d.rotateZ)&&(u=!0),!u)return;const p={};for(let y=0;y<vE.length;y++){const w="rotate"+vE[y];d[w]&&(p[w]=d[w],l.setStaticValue(w,0))}l.render();for(const y in p)l.setStaticValue(y,p[y]);l.scheduleRender()}getProjectionStyles(l){var u,d;if(!this.instance||this.isSVG)return;if(!this.isVisible)return fF;const p={visibility:""},y=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,p.opacity="",p.pointerEvents=Pd(l==null?void 0:l.pointerEvents)||"",p.transform=y?y(this.latestValues,""):"none",p;const w=this.getLead();if(!this.projectionDelta||!this.layout||!w.target){const C={};return this.options.layoutId&&(C.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,C.pointerEvents=Pd(l==null?void 0:l.pointerEvents)||""),this.hasProjected&&!fo(this.latestValues)&&(C.transform=y?y({},""):"none",this.hasProjected=!1),C}const x=w.animationValues||w.latestValues;this.applyTransformsToTarget(),p.transform=yE(this.projectionDeltaWithTransform,this.treeScale,x),y&&(p.transform=y(x,p.transform));const{x:S,y:A}=this.projectionDelta;p.transformOrigin=`${S.origin*100}% ${A.origin*100}% 0`,w.animationValues?p.opacity=w===this?(d=(u=x.opacity)!==null&&u!==void 0?u:this.latestValues.opacity)!==null&&d!==void 0?d:1:this.preserveOpacity?this.latestValues.opacity:x.opacityExit:p.opacity=w===this?x.opacity!==void 0?x.opacity:"":x.opacityExit!==void 0?x.opacityExit:0;for(const C in tf){if(x[C]===void 0)continue;const{correct:P,applyTo:$}=tf[C],B=p.transform==="none"?x[C]:P(x[C],w);if($){const L=$.length;for(let D=0;D<L;D++)p[$[D]]=B}else p[C]=B}return this.options.layoutId&&(p.pointerEvents=w===this?Pd(l==null?void 0:l.pointerEvents)||"":"none"),p}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(l=>{var u;return(u=l.currentAnimation)===null||u===void 0?void 0:u.stop()}),this.root.nodes.forEach(wE),this.root.sharedNodes.clear()}}}function mF(t){t.updateLayout()}function gF(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:s}=t.layout,{animationType:a}=t.options,l=n.source!==t.layout.source;a==="size"?lr(w=>{const x=l?n.measuredBox[w]:n.layoutBox[w],S=$n(x);x.min=r[w].min,x.max=x.min+S}):pP(a,n.layoutBox,r)&&lr(w=>{const x=l?n.measuredBox[w]:n.layoutBox[w],S=$n(r[w]);x.max=x.min+S,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[w].max=t.relativeTarget[w].min+S)});const u=Ua();Mc(u,r,n.layoutBox);const d=Ua();l?Mc(d,t.applyTransform(s,!0),n.measuredBox):Mc(d,r,n.layoutBox);const p=!hP(u);let y=!1;if(!t.resumeFrom){const w=t.getClosestProjectingParent();if(w&&!w.resumeFrom){const{snapshot:x,layout:S}=w;if(x&&S){const A=At();Fc(A,n.layoutBox,x.layoutBox);const C=At();Fc(C,r,S.layoutBox),dP(A,C)||(y=!0),w.options.layoutRoot&&(t.relativeTarget=C,t.relativeTargetOrigin=A,t.relativeParent=w)}}}t.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:d,layoutDelta:u,hasLayoutChanged:p,hasRelativeTargetChanged:y})}else if(t.isLead()){const{onExitComplete:r}=t.options;r&&r()}t.options.transition=void 0}function yF(t){po.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function vF(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function _F(t){t.clearSnapshot()}function wE(t){t.clearMeasurements()}function wF(t){t.isLayoutDirty=!1}function xF(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function xE(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function EF(t){t.resolveTargetDelta()}function TF(t){t.calcProjection()}function SF(t){t.resetRotation()}function IF(t){t.removeLeadSnapshot()}function EE(t,e,n){t.translate=pt(e.translate,0,n),t.scale=pt(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function TE(t,e,n,r){t.min=pt(e.min,n.min,r),t.max=pt(e.max,n.max,r)}function bF(t,e,n,r){TE(t.x,e.x,n.x,r),TE(t.y,e.y,n.y,r)}function PF(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const CF={duration:.45,ease:[.4,0,.1,1]},SE=t=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(t),IE=SE("applewebkit/")&&!SE("chrome/")?Math.round:It;function bE(t){t.min=IE(t.min),t.max=IE(t.max)}function AF(t){bE(t.x),bE(t.y)}function pP(t,e,n){return t==="position"||t==="preserve-aspect"&&!Sy(gE(e),gE(n),.2)}const kF=fP({attachResizeListener:(t,e)=>Pi(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),cg={current:void 0},mP=fP({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!cg.current){const t=new kF({});t.mount(window),t.setOptions({layoutScroll:!0}),cg.current=t}return cg.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),RF={pan:{Feature:G9},drag:{Feature:q9,ProjectionNode:mP,MeasureLayout:lP}},DF=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function jF(t){const e=DF.exec(t);if(!e)return[,];const[,n,r]=e;return[n,r]}function Cy(t,e,n=1){const[r,s]=jF(t);if(!r)return;const a=window.getComputedStyle(e).getPropertyValue(r);if(a){const l=a.trim();return Xb(l)?parseFloat(l):l}else return yy(s)?Cy(s,e,n+1):s}function NF(t,{...e},n){const r=t.current;if(!(r instanceof Element))return{target:e,transitionEnd:n};n&&(n={...n}),t.values.forEach(s=>{const a=s.get();if(!yy(a))return;const l=Cy(a,r);l&&s.set(l)});for(const s in e){const a=e[s];if(!yy(a))continue;const l=Cy(a,r);l&&(e[s]=l,n||(n={}),n[s]===void 0&&(n[s]=a))}return{target:e,transitionEnd:n}}const OF=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),gP=t=>OF.has(t),LF=t=>Object.keys(t).some(gP),PE=t=>t===Uo||t===Pe,CE=(t,e)=>parseFloat(t.split(", ")[e]),AE=(t,e)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const s=r.match(/^matrix3d\((.+)\)$/);if(s)return CE(s[1],e);{const a=r.match(/^matrix\((.+)\)$/);return a?CE(a[1],t):0}},VF=new Set(["x","y","z"]),MF=yu.filter(t=>!VF.has(t));function FF(t){const e=[];return MF.forEach(n=>{const r=t.getValue(n);r!==void 0&&(e.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),e.length&&t.render(),e}const cl={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:AE(4,13),y:AE(5,14)};cl.translateX=cl.x;cl.translateY=cl.y;const UF=(t,e,n)=>{const r=e.measureViewportBox(),s=e.current,a=getComputedStyle(s),{display:l}=a,u={};l==="none"&&e.setStaticValue("display",t.display||"block"),n.forEach(p=>{u[p]=cl[p](r,a)}),e.render();const d=e.measureViewportBox();return n.forEach(p=>{const y=e.getValue(p);y&&y.jump(u[p]),t[p]=cl[p](d,a)}),t},BF=(t,e,n={},r={})=>{e={...e},r={...r};const s=Object.keys(e).filter(gP);let a=[],l=!1;const u=[];if(s.forEach(d=>{const p=t.getValue(d);if(!t.hasValue(d))return;let y=n[d],w=pc(y);const x=e[d];let S;if(rf(x)){const A=x.length,C=x[0]===null?1:0;y=x[C],w=pc(y);for(let P=C;P<A&&x[P]!==null;P++)S?a0(pc(x[P])===S):S=pc(x[P])}else S=pc(x);if(w!==S)if(PE(w)&&PE(S)){const A=p.get();typeof A=="string"&&p.set(parseFloat(A)),typeof x=="string"?e[d]=parseFloat(x):Array.isArray(x)&&S===Pe&&(e[d]=x.map(parseFloat))}else w!=null&&w.transform&&(S!=null&&S.transform)&&(y===0||x===0)?y===0?p.set(S.transform(y)):e[d]=w.transform(x):(l||(a=FF(t),l=!0),u.push(d),r[d]=r[d]!==void 0?r[d]:e[d],p.jump(x))}),u.length){const d=u.indexOf("height")>=0?window.pageYOffset:null,p=UF(e,t,u);return a.length&&a.forEach(([y,w])=>{t.getValue(y).set(w)}),t.render(),Qf&&d!==null&&window.scrollTo({top:d}),{target:p,transitionEnd:r}}else return{target:e,transitionEnd:r}};function zF(t,e,n,r){return LF(e)?BF(t,e,n,r):{target:e,transitionEnd:r}}const $F=(t,e,n,r)=>{const s=NF(t,e,r);return e=s.target,r=s.transitionEnd,zF(t,e,n,r)},Ay={current:null},yP={current:!1};function WF(){if(yP.current=!0,!!Qf)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Ay.current=t.matches;t.addListener(e),e()}else Ay.current=!1}function HF(t,e,n){const{willChange:r}=e;for(const s in e){const a=e[s],l=n[s];if(Rn(a))t.addValue(s,a),lf(r)&&r.add(s);else if(Rn(l))t.addValue(s,ll(a,{owner:t})),lf(r)&&r.remove(s);else if(l!==a)if(t.hasValue(s)){const u=t.getValue(s);!u.hasAnimated&&u.set(a)}else{const u=t.getStaticValue(s);t.addValue(s,ll(u!==void 0?u:a,{owner:t}))}}for(const s in n)e[s]===void 0&&t.removeValue(s);return e}const kE=new WeakMap,vP=Object.keys(tu),qF=vP.length,RE=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],GF=Jv.length;class KF{constructor({parent:e,props:n,presenceContext:r,reducedMotionConfig:s,visualState:a},l={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>nt.render(this.render,!1,!0);const{latestValues:u,renderState:d}=a;this.latestValues=u,this.baseTarget={...u},this.initialValues=n.initial?{...u}:{},this.renderState=d,this.parent=e,this.props=n,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=s,this.options=l,this.isControllingVariants=Xf(n),this.isVariantNode=nb(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:p,...y}=this.scrapeMotionValuesFromProps(n,{});for(const w in y){const x=y[w];u[w]!==void 0&&Rn(x)&&(x.set(u[w],!1),lf(p)&&p.add(w))}}scrapeMotionValuesFromProps(e,n){return{}}mount(e){this.current=e,kE.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),yP.current||WF(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Ay.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){kE.delete(this.current),this.projection&&this.projection.unmount(),Ni(this.notifyUpdate),Ni(this.render),this.valueSubscriptions.forEach(e=>e()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features)this.features[e].unmount();this.current=null}bindToMotionValue(e,n){const r=Fo.has(e),s=n.on("change",l=>{this.latestValues[e]=l,this.props.onUpdate&&nt.update(this.notifyUpdate,!1,!0),r&&this.projection&&(this.projection.isTransformDirty=!0)}),a=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(e,()=>{s(),a()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}loadFeatures({children:e,...n},r,s,a){let l,u;for(let d=0;d<qF;d++){const p=vP[d],{isEnabled:y,Feature:w,ProjectionNode:x,MeasureLayout:S}=tu[p];x&&(l=x),y(n)&&(!this.features[p]&&w&&(this.features[p]=new w(this)),S&&(u=S))}if((this.type==="html"||this.type==="svg")&&!this.projection&&l){this.projection=new l(this.latestValues,this.parent&&this.parent.projection);const{layoutId:d,layout:p,drag:y,dragConstraints:w,layoutScroll:x,layoutRoot:S}=n;this.projection.setOptions({layoutId:d,layout:p,alwaysMeasureLayout:!!y||w&&Ma(w),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof p=="string"?p:"both",initialPromotionConfig:a,layoutScroll:x,layoutRoot:S})}return u}updateFeatures(){for(const e in this.features){const n=this.features[e];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):At()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}makeTargetAnimatable(e,n=!0){return this.makeTargetAnimatableFromInstance(e,this.props,n)}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<RE.length;r++){const s=RE[r];this.propEventSubscriptions[s]&&(this.propEventSubscriptions[s](),delete this.propEventSubscriptions[s]);const a=e["on"+s];a&&(this.propEventSubscriptions[s]=this.on(s,a))}this.prevMotionValues=HF(this,this.scrapeMotionValuesFromProps(e,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(e=!1){if(e)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const r=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(r.initial=this.props.initial),r}const n={};for(let r=0;r<GF;r++){const s=Jv[r],a=this.props[s];(eu(a)||a===!1)&&(n[s]=a)}return n}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){n!==this.values.get(e)&&(this.removeValue(e),this.bindToMotionValue(e,n)),this.values.set(e,n),this.latestValues[e]=n.get()}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&n!==void 0&&(r=ll(n,{owner:this}),this.addValue(e,r)),r}readValue(e){var n;return this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(n=this.getBaseTargetFromProps(this.props,e))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,e,this.options)}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:r}=this.props,s=typeof r=="string"||typeof r=="object"?(n=o0(this.props,r))===null||n===void 0?void 0:n[e]:void 0;if(r&&s!==void 0)return s;const a=this.getBaseTargetFromProps(this.props,e);return a!==void 0&&!Rn(a)?a:this.initialValues[e]!==void 0&&s===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new g0),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class _P extends KF{sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:r}){delete n[e],delete r[e]}makeTargetAnimatableFromInstance({transition:e,transitionEnd:n,...r},{transformValues:s},a){let l=h9(r,e||{},this);if(s&&(n&&(n=s(n)),r&&(r=s(r)),l&&(l=s(l))),a){c9(this,r,l);const u=$F(this,r,l,n);n=u.transitionEnd,r=u.target}return{transition:e,transitionEnd:n,...r}}}function QF(t){return window.getComputedStyle(t)}class YF extends _P{constructor(){super(...arguments),this.type="html"}readValueFromInstance(e,n){if(Fo.has(n)){const r=h0(n);return r&&r.default||0}else{const r=QF(e),s=(ob(n)?r.getPropertyValue(n):r[n])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(e,{transformPagePoint:n}){return oP(e,n)}build(e,n,r,s){t0(e,n,r,s.transformTemplate)}scrapeMotionValuesFromProps(e,n){return s0(e,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Rn(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(e,n,r,s){db(e,n,r,s)}}class XF extends _P{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(Fo.has(n)){const r=h0(n);return r&&r.default||0}return n=fb.has(n)?n:Yv(n),e.getAttribute(n)}measureInstanceViewportBox(){return At()}scrapeMotionValuesFromProps(e,n){return mb(e,n)}build(e,n,r,s){r0(e,n,r,this.isSVGTag,s.transformTemplate)}renderInstance(e,n,r,s){pb(e,n,r,s)}mount(e){this.isSVGTag=i0(e.tagName),super.mount(e)}}const JF=(t,e)=>e0(t)?new XF(e,{enableHardwareAcceleration:!1}):new YF(e,{enableHardwareAcceleration:!0}),ZF={layout:{ProjectionNode:mP,MeasureLayout:lP}},e8={...b9,...qV,...RF,...ZF},ii=tV((t,e)=>jV(t,e,e8,JF));function wP(){const t=M.useRef(!1);return Qv(()=>(t.current=!0,()=>{t.current=!1}),[]),t}function t8(){const t=wP(),[e,n]=M.useState(0),r=M.useCallback(()=>{t.current&&n(e+1)},[e]);return[M.useCallback(()=>nt.postRender(r),[r]),e]}class n8 extends M.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function r8({children:t,isPresent:e}){const n=M.useId(),r=M.useRef(null),s=M.useRef({width:0,height:0,top:0,left:0});return M.useInsertionEffect(()=>{const{width:a,height:l,top:u,left:d}=s.current;if(e||!r.current||!a||!l)return;r.current.dataset.motionPopId=n;const p=document.createElement("style");return document.head.appendChild(p),p.sheet&&p.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${l}px !important;
            top: ${u}px !important;
            left: ${d}px !important;
          }
        `),()=>{document.head.removeChild(p)}},[e]),M.createElement(n8,{isPresent:e,childRef:r,sizeRef:s},M.cloneElement(t,{ref:r}))}const ug=({children:t,initial:e,isPresent:n,onExitComplete:r,custom:s,presenceAffectsLayout:a,mode:l})=>{const u=gb(i8),d=M.useId(),p=M.useMemo(()=>({id:d,initial:e,isPresent:n,custom:s,onExitComplete:y=>{u.set(y,!0);for(const w of u.values())if(!w)return;r&&r()},register:y=>(u.set(y,!1),()=>u.delete(y))}),a?void 0:[n]);return M.useMemo(()=>{u.forEach((y,w)=>u.set(w,!1))},[n]),M.useEffect(()=>{!n&&!u.size&&r&&r()},[n]),l==="popLayout"&&(t=M.createElement(r8,{isPresent:n},t)),M.createElement(Kf.Provider,{value:p},t)};function i8(){return new Map}function s8(t){return M.useEffect(()=>()=>t(),[])}const mo=t=>t.key||"";function o8(t,e){t.forEach(n=>{const r=mo(n);e.set(r,n)})}function a8(t){const e=[];return M.Children.forEach(t,n=>{M.isValidElement(n)&&e.push(n)}),e}const l8=({children:t,custom:e,initial:n=!0,onExitComplete:r,exitBeforeEnter:s,presenceAffectsLayout:a=!0,mode:l="sync"})=>{const u=M.useContext(Zv).forceRender||t8()[0],d=wP(),p=a8(t);let y=p;const w=M.useRef(new Map).current,x=M.useRef(y),S=M.useRef(new Map).current,A=M.useRef(!0);if(Qv(()=>{A.current=!1,o8(p,S),x.current=y}),s8(()=>{A.current=!0,S.clear(),w.clear()}),A.current)return M.createElement(M.Fragment,null,y.map(B=>M.createElement(ug,{key:mo(B),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:a,mode:l},B)));y=[...y];const C=x.current.map(mo),P=p.map(mo),$=C.length;for(let B=0;B<$;B++){const L=C[B];P.indexOf(L)===-1&&!w.has(L)&&w.set(L,void 0)}return l==="wait"&&w.size&&(y=[]),w.forEach((B,L)=>{if(P.indexOf(L)!==-1)return;const D=S.get(L);if(!D)return;const q=C.indexOf(L);let J=B;if(!J){const k=()=>{w.delete(L);const b=Array.from(S.keys()).filter(R=>!P.includes(R));if(b.forEach(R=>S.delete(R)),x.current=p.filter(R=>{const V=mo(R);return V===L||b.includes(V)}),!w.size){if(d.current===!1)return;u(),r&&r()}};J=M.createElement(ug,{key:mo(D),isPresent:!1,onExitComplete:k,custom:e,presenceAffectsLayout:a,mode:l},D),w.set(L,J)}y.splice(q,0,J)}),y=y.map(B=>{const L=B.key;return w.has(L)?B:M.createElement(ug,{key:mo(B),isPresent:!0,presenceAffectsLayout:a,mode:l},B)}),M.createElement(M.Fragment,null,w.size?y:y.map(B=>M.cloneElement(B)))},c8=F.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--header-height);
  background-color: var(--color-foreground);
  box-shadow: var(--shadow-sm);
  z-index: 100;
  transition: background-color var(--transition-base);
`,u8=F.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 2rem;
`,h8=F(fr)`
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
`,d8=F.nav`
  @media (max-width: 768px) {
    display: none;
  }
`,f8=F.ul`
  display: flex;
  gap: 1.5rem;
  list-style: none;
`,p8=F.li`
  position: relative;
`,m8=F(fr)`
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
`,g8=F.button`
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
`,y8=F.button`
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
`,v8=F(ii.div)`
  position: fixed;
  top: var(--header-height);
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--color-foreground);
  padding: 2rem;
  z-index: 99;
`,_8=F.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,w8=F(fr)`
  color: ${t=>t.$isActive?"var(--color-primary)":"var(--color-text)"};
  font-weight: ${t=>t.$isActive?"600":"400"};
  font-size: 1.25rem;
  transition: color var(--transition-base);
  
  &:hover {
    color: var(--color-primary);
  }
`,x8=()=>{const[t,e]=M.useState(!1),{theme:n,toggleTheme:r}=Bv(),s=ks();M.useEffect(()=>{e(!1)},[s]),M.useEffect(()=>(t?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[t]);const a=()=>e(!t),l=[{path:"/",label:"Home"},{path:"/projects",label:"Projects"},{path:"/research",label:"Research"},{path:"/blog",label:"Blog"},{path:"/contact",label:"Contact"}];return m.jsxs(c8,{children:[m.jsxs(u8,{children:[m.jsxs(h8,{to:"/",children:["Abdo",m.jsx("span",{children:"Alatrash"})]}),m.jsx(d8,{children:m.jsx(f8,{children:l.map(u=>m.jsx(p8,{children:m.jsx(m8,{to:u.path,$isActive:s.pathname===u.path,children:u.label})},u.path))})}),m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[m.jsx(g8,{onClick:r,children:n==="light"?m.jsx(XI,{size:18}):m.jsx(JI,{size:18})}),m.jsx(y8,{onClick:a,children:t?m.jsx(HL,{}):m.jsx(QI,{})})]})]}),m.jsx(l8,{children:t&&m.jsx(v8,{initial:{y:"-100%"},animate:{y:0},exit:{y:"-100%"},transition:{duration:.3},children:m.jsx(_8,{children:l.map(u=>m.jsx("li",{children:m.jsx(w8,{to:u.path,$isActive:s.pathname===u.path,onClick:()=>e(!1),children:u.label})},u.path))})})})]})},E8=F.footer`
  background-color: var(--color-foreground);
  color: var(--color-text);
  padding: 4rem 0 2rem;
  border-top: 1px solid var(--color-border);
`,T8=F.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`,Xh=F.div`
  display: flex;
  flex-direction: column;
`,Jh=F.h3`
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
`,DE=F.nav`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,gc=F(fr)`
  color: var(--color-text-light);
  transition: color var(--transition-base);
  
  &:hover {
    color: var(--color-primary);
  }
`,uo=F.a`
  color: var(--color-text-light);
  transition: color var(--transition-base);
  
  &:hover {
    color: var(--color-primary);
  }
`,S8=F.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`,yc=F.a`
  color: var(--color-text-light);
  font-size: 1.5rem;
  transition: color var(--transition-base);
  
  &:hover {
    color: var(--color-primary);
  }
`,I8=F.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  border-top: 1px solid var(--color-border);
  margin-top: 3rem;
  color: var(--color-text-light);
  font-size: 0.875rem;
`,b8=()=>m.jsxs(E8,{children:[m.jsxs(T8,{children:[m.jsxs(Xh,{children:[m.jsx(Jh,{children:"Abdo Alatrash"}),m.jsx("p",{children:"Machine Learning Engineer & Data Scientist specializing in physics-informed ML approaches."}),m.jsxs(S8,{children:[m.jsx(yc,{href:"https://github.com/abdo544445",target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub",children:m.jsx(Kv,{})}),m.jsx(yc,{href:"https://linkedin.com/in/abdo-alatrash",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",children:m.jsx(GI,{})}),m.jsx(yc,{href:"https://twitter.com/abdoalatrash",target:"_blank",rel:"noopener noreferrer","aria-label":"Twitter",children:m.jsx(DL,{})}),m.jsx(yc,{href:"https://researchgate.net/profile/Abdo-Alatrash",target:"_blank",rel:"noopener noreferrer","aria-label":"ResearchGate",children:m.jsx(RL,{})}),m.jsx(yc,{href:"https://scholar.google.com/citations?user=abdo-alatrash",target:"_blank",rel:"noopener noreferrer","aria-label":"Google Scholar",children:m.jsx(LL,{})})]})]}),m.jsxs(Xh,{children:[m.jsx(Jh,{children:"Navigation"}),m.jsxs(DE,{children:[m.jsx(gc,{to:"/",children:"Home"}),m.jsx(gc,{to:"/projects",children:"Projects"}),m.jsx(gc,{to:"/research",children:"Research"}),m.jsx(gc,{to:"/blog",children:"Blog"}),m.jsx(gc,{to:"/contact",children:"Contact"})]})]}),m.jsxs(Xh,{children:[m.jsx(Jh,{children:"Research Interests"}),m.jsxs(DE,{children:[m.jsx(uo,{href:"#physics-ml",children:"Physics-Informed ML"}),m.jsx(uo,{href:"#data-visualization",children:"Data Visualization"}),m.jsx(uo,{href:"#nlp",children:"Natural Language Processing"}),m.jsx(uo,{href:"#deep-learning",children:"Deep Learning"})]})]}),m.jsxs(Xh,{children:[m.jsx(Jh,{children:"Contact"}),m.jsx("p",{children:"Feel free to reach out for collaborations or inquiries."}),m.jsx(uo,{href:"mailto:abdoforanything1@gmail.com",children:"abdoforanything1@gmail.com"}),m.jsx(uo,{href:"tel:+201119173529",style:{display:"block",marginTop:"0.5rem"},children:"+20 1119173529"}),m.jsx(uo,{href:"https://wa.me/201119173529",style:{display:"block",marginTop:"0.5rem"},children:"WhatsApp"}),m.jsx("p",{style:{marginTop:"0.5rem"},children:"Remote / Cairo, Egypt"})]})]}),m.jsx(I8,{children:m.jsxs("p",{children:["© ",new Date().getFullYear()," Abdo Alatrash. All rights reserved."]})})]}),P8=F.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`,C8=F.main`
  flex: 1;
  padding-top: var(--header-height);
`,A8=()=>m.jsxs(P8,{children:[m.jsx(x8,{}),m.jsx(C8,{children:m.jsx(vT,{})}),m.jsx(b8,{})]}),xP=M.createContext(void 0),k8=({children:t})=>{const[e,n]=M.useState(null),[r,s]=M.useState(!0),[a,l]=M.useState(!1);M.useEffect(()=>{const y=k4(Nc,w=>{n(w),l(w?w.email==="abdoforanything1@gmail.com":!1),s(!1)});return()=>y()},[]);const p={user:e,loading:r,signInWithGoogle:async()=>{try{await p2(Nc,yI)}catch(y){console.error("Error signing in with Google:",y)}},signOut:async()=>{try{await R4(Nc)}catch(y){console.error("Error signing out:",y)}},isAdmin:a};return m.jsx(xP.Provider,{value:p,children:!r&&t})},EP=()=>{const t=M.useContext(xP);if(t===void 0)throw new Error("useAuth must be used within an AuthProvider");return t},R8=F.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  height: 100%;
`,D8=F.h1`
  font-size: 1.25rem;
  color: var(--color-text);
  margin: 0;
`,j8=F.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,ky=F.button`
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
`,N8=F.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,O8=F.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: var(--color-primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`,L8=F.span`
  color: var(--color-text);
  font-weight: 500;
  
  @media (max-width: 768px) {
    display: none;
  }
`,V8=F(ky)`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
  }
`,M8=()=>{const{user:t,signOut:e}=EP(),{theme:n,toggleTheme:r}=Bv(),[s,a]=M.useState(!1),l=()=>{a(!s);const d=new CustomEvent("toggleSidebar",{detail:{isOpen:!s}});window.dispatchEvent(d)},u=d=>d?d.charAt(0).toUpperCase():"A";return m.jsxs(R8,{children:[m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[m.jsx(V8,{onClick:l,children:m.jsx(QI,{})}),m.jsx(D8,{children:"Admin Dashboard"})]}),m.jsxs(j8,{children:[m.jsx(ky,{onClick:r,children:n==="light"?m.jsx(XI,{size:18}):m.jsx(JI,{size:18})}),m.jsx(N8,{children:t&&m.jsxs(m.Fragment,{children:[m.jsx(O8,{children:u(t.displayName||"")}),m.jsx(L8,{children:t.displayName||"Admin"})]})}),m.jsx(ky,{onClick:e,children:m.jsx(WL,{size:18})})]})]})},F8=F.div`
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
`,U8=F.div`
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
`,B8=F.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0 1rem;
  flex: 1;
`,z8=F(GA)`
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
`,$8=[{path:"/admin",label:"Dashboard",icon:m.jsx(VL,{className:"icon"})},{path:"/admin/projects",label:"Projects",icon:m.jsx(ML,{className:"icon"})},{path:"/admin/skills",label:"Skills",icon:m.jsx(NL,{className:"icon"})},{path:"/admin/research",label:"Research",icon:m.jsx(OL,{className:"icon"})},{path:"/admin/blog",label:"Blog",icon:m.jsx(BL,{className:"icon"})},{path:"/admin/contact",label:"Messages",icon:m.jsx(YI,{className:"icon"})}],W8=()=>{const[t,e]=M.useState(!1),n=ks();return M.useEffect(()=>{const r=s=>{e(s.detail.isOpen)};return window.addEventListener("toggleSidebar",r),()=>{window.removeEventListener("toggleSidebar",r)}},[]),M.useEffect(()=>{e(!1)},[n]),m.jsxs(F8,{$isOpen:t,children:[m.jsxs(U8,{children:[m.jsx("h2",{children:"Portfolio Admin"}),m.jsx("p",{children:"Manage your content"})]}),m.jsx(B8,{children:$8.map(r=>m.jsxs(z8,{to:r.path,end:r.path==="/admin",children:[r.icon,r.label]},r.path))})]})},H8=F.div`
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
`,q8=F.header`
  grid-area: header;
  box-shadow: var(--shadow-sm);
  background: var(--color-foreground);
  z-index: 10;
`,G8=F.aside`
  grid-area: sidebar;
  background: var(--color-foreground);
  border-right: 1px solid var(--color-border);
  overflow-y: auto;
  
  @media (max-width: 768px) {
    display: none;
  }
`,K8=F.main`
  grid-area: content;
  background: var(--color-background);
  padding: 2rem;
  overflow-y: auto;
`,Q8=()=>m.jsxs(H8,{children:[m.jsx(q8,{children:m.jsx(M8,{})}),m.jsx(G8,{children:m.jsx(W8,{})}),m.jsx(K8,{children:m.jsx(vT,{})})]}),Y8=F.section`
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
`,X8=F.div`
  max-width: var(--max-width);
  width: 100%;
  padding: 0 1.5rem;
  
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 2rem;
    align-items: center;
  }
`,J8=F.div``,Z8=F.p`
  color: var(--color-primary);
  font-weight: 600;
  margin-bottom: 1rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 0.875rem;
`,e7=F(ii.h1)`
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
`,t7=F.p`
  font-size: 1.125rem;
  color: var(--color-text-light);
  margin-bottom: 2rem;
  max-width: 600px;
  line-height: 1.8;
`,n7=F.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
`,r7=F(fr)`
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
`,hg=F(fr)`
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
`,i7=F.div`
  display: flex;
  gap: 1rem;
`,dg=F.a`
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
`,s7=F(ii.div)`
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
`,o7=F.section`
  padding: 4rem 0;
  background-color: var(--color-foreground);
`,fg=F.h2`
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
`,a7=F.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 1.5rem;
`,l7=F.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`,pg=F.div`
  background-color: var(--color-background);
  padding: 1.5rem;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
`,mg=F.h3`
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  
  svg {
    color: var(--color-primary);
  }
`,gg=F.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,tr=F.div``,nr=F.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`,rr=F.span`
  font-weight: 500;
`,ir=F.span`
  font-size: 0.875rem;
  color: var(--color-text-light);
`,sr=F.div`
  height: 6px;
  width: 100%;
  background-color: var(--color-border);
  border-radius: var(--radius-sm);
  overflow: hidden;
`,or=F.div`
  height: 100%;
  width: ${t=>t.$width}%;
  background-color: var(--color-primary);
  border-radius: var(--radius-sm);
  transition: width 1.5s ease-out;
`,c7=F.section`
  padding: 5rem 0;
`,u7=F.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 1.5rem;
`,h7=F.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,Ad=F(ii.div)`
  background-color: var(--color-foreground);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: transform var(--transition-base), box-shadow var(--transition-base);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
`,yg=F.div`
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--transition-base);
  }
  
  ${Ad}:hover & img {
    transform: scale(1.05);
  }
`,vg=F.div`
  padding: 1.5rem;
`,_g=F.p`
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--color-primary);
  font-weight: 600;
  margin-bottom: 0.5rem;
`,wg=F.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`,xg=F.p`
  color: var(--color-text-light);
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`,Eg=F.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`,ar=F.span`
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  background-color: var(--color-background);
  border-radius: var(--radius-sm);
  color: var(--color-text-light);
`,Tg=F.div`
  display: flex;
  gap: 1rem;
`,ja=F.a`
  font-size: 0.875rem;
  color: var(--color-primary);
  display: flex;
  align-items: center;
  gap: 0.25rem;
  
  &:hover {
    text-decoration: underline;
  }
`,d7=F.section`
  padding: 5rem 0;
  background-color: var(--color-foreground);
`,f7=F.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 1.5rem;
`,p7=F.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,Zh=F.div`
  background-color: var(--color-background);
  border-left: 4px solid var(--color-tertiary);
  border-radius: var(--radius-md);
  padding: 1.5rem;
  box-shadow: var(--shadow-md);
`,ed=F.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: var(--color-tertiary);
`,td=F.p`
  color: var(--color-text-light);
  line-height: 1.6;
`,m7=()=>m.jsxs(m.Fragment,{children:[m.jsx(Y8,{children:m.jsxs(X8,{children:[m.jsxs(J8,{children:[m.jsx(Z8,{children:"Machine Learning Engineer & Data Scientist"}),m.jsxs(e7,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:["Building ",m.jsx("span",{children:"intelligent"})," solutions through data & code"]}),m.jsx(t7,{children:"I'm Abdo Alatrash, a machine learning engineer and data scientist focused on creating innovative solutions with physics-informed machine learning approaches. I build web applications that bring data science to life."}),m.jsxs(n7,{children:[m.jsx(r7,{to:"/projects",children:"Explore Projects"}),m.jsx(hg,{to:"/contact",children:"Get in Touch"})]}),m.jsxs(i7,{children:[m.jsx(dg,{href:"https://github.com/abdo544445",target:"_blank",rel:"noopener noreferrer",children:m.jsx(Kv,{size:20})}),m.jsx(dg,{href:"https://linkedin.com/in/abdo-alatrash",target:"_blank",rel:"noopener noreferrer",children:m.jsx(GI,{size:20})}),m.jsx(dg,{href:"https://wa.me/201119173529",target:"_blank",rel:"noopener noreferrer",children:m.jsx(KI,{size:20})})]})]}),m.jsx(s7,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.5,delay:.2},children:m.jsx("img",{src:"/images/hero-image.png",alt:"Abdo Alatrash - ML Engineer"})})]})}),m.jsxs(o7,{children:[m.jsx(fg,{children:"Technical Skills"}),m.jsx(a7,{children:m.jsxs(l7,{children:[m.jsxs(pg,{children:[m.jsx(mg,{children:"Machine Learning & AI"}),m.jsxs(gg,{children:[m.jsxs(tr,{children:[m.jsxs(nr,{children:[m.jsx(rr,{children:"Deep Learning"}),m.jsx(ir,{children:"Advanced"})]}),m.jsx(sr,{children:m.jsx(or,{$width:90})})]}),m.jsxs(tr,{children:[m.jsxs(nr,{children:[m.jsx(rr,{children:"TensorFlow / PyTorch"}),m.jsx(ir,{children:"Advanced"})]}),m.jsx(sr,{children:m.jsx(or,{$width:85})})]}),m.jsxs(tr,{children:[m.jsxs(nr,{children:[m.jsx(rr,{children:"Computer Vision"}),m.jsx(ir,{children:"Intermediate"})]}),m.jsx(sr,{children:m.jsx(or,{$width:75})})]}),m.jsxs(tr,{children:[m.jsxs(nr,{children:[m.jsx(rr,{children:"NLP"}),m.jsx(ir,{children:"Intermediate"})]}),m.jsx(sr,{children:m.jsx(or,{$width:70})})]})]})]}),m.jsxs(pg,{children:[m.jsx(mg,{children:"Data Science"}),m.jsxs(gg,{children:[m.jsxs(tr,{children:[m.jsxs(nr,{children:[m.jsx(rr,{children:"Python"}),m.jsx(ir,{children:"Expert"})]}),m.jsx(sr,{children:m.jsx(or,{$width:95})})]}),m.jsxs(tr,{children:[m.jsxs(nr,{children:[m.jsx(rr,{children:"Pandas / NumPy"}),m.jsx(ir,{children:"Expert"})]}),m.jsx(sr,{children:m.jsx(or,{$width:90})})]}),m.jsxs(tr,{children:[m.jsxs(nr,{children:[m.jsx(rr,{children:"Data Visualization"}),m.jsx(ir,{children:"Advanced"})]}),m.jsx(sr,{children:m.jsx(or,{$width:85})})]}),m.jsxs(tr,{children:[m.jsxs(nr,{children:[m.jsx(rr,{children:"Statistical Analysis"}),m.jsx(ir,{children:"Advanced"})]}),m.jsx(sr,{children:m.jsx(or,{$width:80})})]})]})]}),m.jsxs(pg,{children:[m.jsx(mg,{children:"Web Development"}),m.jsxs(gg,{children:[m.jsxs(tr,{children:[m.jsxs(nr,{children:[m.jsx(rr,{children:"JavaScript / TypeScript"}),m.jsx(ir,{children:"Advanced"})]}),m.jsx(sr,{children:m.jsx(or,{$width:85})})]}),m.jsxs(tr,{children:[m.jsxs(nr,{children:[m.jsx(rr,{children:"React"}),m.jsx(ir,{children:"Advanced"})]}),m.jsx(sr,{children:m.jsx(or,{$width:80})})]}),m.jsxs(tr,{children:[m.jsxs(nr,{children:[m.jsx(rr,{children:"Node.js"}),m.jsx(ir,{children:"Intermediate"})]}),m.jsx(sr,{children:m.jsx(or,{$width:75})})]}),m.jsxs(tr,{children:[m.jsxs(nr,{children:[m.jsx(rr,{children:"Firebase"}),m.jsx(ir,{children:"Intermediate"})]}),m.jsx(sr,{children:m.jsx(or,{$width:70})})]})]})]})]})})]}),m.jsxs(c7,{children:[m.jsx(fg,{children:"Featured Projects"}),m.jsxs(u7,{children:[m.jsxs(h7,{children:[m.jsxs(Ad,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5},viewport:{once:!0},children:[m.jsx(yg,{children:m.jsx("img",{src:"/images/project1.jpg",alt:"Physics-Informed Neural Networks"})}),m.jsxs(vg,{children:[m.jsx(_g,{children:"Machine Learning"}),m.jsx(wg,{children:"Physics-Informed Neural Networks"}),m.jsx(xg,{children:"Implementation of PINNs for solving partial differential equations with domain knowledge constraints."}),m.jsxs(Eg,{children:[m.jsx(ar,{children:"PyTorch"}),m.jsx(ar,{children:"Physics"}),m.jsx(ar,{children:"Neural Networks"}),m.jsx(ar,{children:"PDEs"})]}),m.jsxs(Tg,{children:[m.jsx(ja,{href:"https://github.com/abdo544445/physics-informed-nn",target:"_blank",rel:"noopener noreferrer",children:"View Code"}),m.jsx(ja,{href:"/projects/physics-informed-nn",target:"_blank",rel:"noopener noreferrer",children:"Learn More"})]})]})]}),m.jsxs(Ad,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.1},viewport:{once:!0},children:[m.jsx(yg,{children:m.jsx("img",{src:"/images/project2.jpg",alt:"Data Visualization Dashboard"})}),m.jsxs(vg,{children:[m.jsx(_g,{children:"Data Visualization"}),m.jsx(wg,{children:"Interactive Data Dashboard"}),m.jsx(xg,{children:"Interactive visualization dashboard for exploring and analyzing scientific datasets."}),m.jsxs(Eg,{children:[m.jsx(ar,{children:"React"}),m.jsx(ar,{children:"D3.js"}),m.jsx(ar,{children:"Flask"}),m.jsx(ar,{children:"Pandas"})]}),m.jsxs(Tg,{children:[m.jsx(ja,{href:"https://github.com/abdo544445/data-dashboard",target:"_blank",rel:"noopener noreferrer",children:"View Code"}),m.jsx(ja,{href:"https://data-dashboard.alatrash.me",target:"_blank",rel:"noopener noreferrer",children:"Live Demo"})]})]})]}),m.jsxs(Ad,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.2},viewport:{once:!0},children:[m.jsx(yg,{children:m.jsx("img",{src:"/images/project3.jpg",alt:"ML Research Platform"})}),m.jsxs(vg,{children:[m.jsx(_g,{children:"Web Application"}),m.jsx(wg,{children:"ML Research Platform"}),m.jsx(xg,{children:"Collaborative platform for machine learning researchers to share and reproduce experiments."}),m.jsxs(Eg,{children:[m.jsx(ar,{children:"TypeScript"}),m.jsx(ar,{children:"Next.js"}),m.jsx(ar,{children:"Firebase"}),m.jsx(ar,{children:"TensorFlow.js"})]}),m.jsxs(Tg,{children:[m.jsx(ja,{href:"https://github.com/abdo544445/ml-research-platform",target:"_blank",rel:"noopener noreferrer",children:"View Code"}),m.jsx(ja,{href:"/projects/ml-research-platform",target:"_blank",rel:"noopener noreferrer",children:"Learn More"})]})]})]})]}),m.jsx("div",{style:{textAlign:"center",marginTop:"3rem"},children:m.jsx(hg,{to:"/projects",children:"View All Projects"})})]})]}),m.jsxs(d7,{children:[m.jsx(fg,{children:"Research Interests"}),m.jsxs(f7,{children:[m.jsxs(p7,{children:[m.jsxs(Zh,{children:[m.jsx(ed,{children:"Physics-Informed Machine Learning"}),m.jsx(td,{children:"Exploring how to incorporate physics principles and domain knowledge into machine learning models to improve accuracy, reduce data requirements, and ensure physical consistency in predictions."})]}),m.jsxs(Zh,{children:[m.jsx(ed,{children:"Scientific Data Visualization"}),m.jsx(td,{children:"Developing interactive and intuitive visualizations for complex scientific datasets to aid in understanding patterns, anomalies, and insights that might be missed in standard analysis."})]}),m.jsxs(Zh,{children:[m.jsx(ed,{children:"Neural Differential Equations"}),m.jsx(td,{children:"Research into neural networks that can learn and solve differential equations, combining the flexibility of deep learning with the mathematical rigor of physics-based modeling."})]}),m.jsxs(Zh,{children:[m.jsx(ed,{children:"ML for Scientific Discovery"}),m.jsx(td,{children:"Applying machine learning techniques to accelerate scientific discovery processes, create predictive models, and assist in hypothesis generation and validation."})]})]}),m.jsx("div",{style:{textAlign:"center",marginTop:"3rem"},children:m.jsx(hg,{to:"/research",children:"Explore Research"})})]})]})]}),g7=F.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 4rem 1.5rem;
  
  @media (min-width: 768px) {
    padding: 6rem 2rem;
  }
`,y7=F.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  
  span {
    color: var(--color-primary);
  }
`,v7=F.p`
  font-size: 1.125rem;
  color: var(--color-text-light);
  margin-bottom: 3rem;
  max-width: 800px;
`,_7=F.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
`,w7=F.button`
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
`,x7=F.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,TP=F(ii.div)`
  background-color: var(--color-foreground);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: transform var(--transition-base), box-shadow var(--transition-base);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
`,E7=F.div`
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--transition-base);
  }
  
  ${TP}:hover & img {
    transform: scale(1.05);
  }
`,T7=F.div`
  padding: 1.5rem;
`,S7=F.p`
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--color-primary);
  font-weight: 600;
  margin-bottom: 0.5rem;
`,I7=F.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`,b7=F.p`
  color: var(--color-text-light);
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`,P7=F.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`,C7=F.span`
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  background-color: var(--color-background);
  border-radius: var(--radius-sm);
  color: var(--color-text-light);
`,A7=F.div`
  display: flex;
  gap: 1rem;
`,Sg=F.a`
  font-size: 0.875rem;
  color: var(--color-primary);
  display: flex;
  align-items: center;
  gap: 0.25rem;
  
  &:hover {
    text-decoration: underline;
  }
`,jE=[{id:"1",title:"Physics-Informed Neural Networks",slug:"physics-informed-nn",description:"Implementation of PINNs for solving partial differential equations with domain knowledge constraints.",category:"ml-ai",technologies:["PyTorch","Physics","Neural Networks","PDEs"],imageUrl:"/images/project1.jpg",githubUrl:"https://github.com/abdo544445/physics-informed-nn"},{id:"2",title:"Interactive Data Dashboard",slug:"data-dashboard",description:"Interactive visualization dashboard for exploring and analyzing scientific datasets.",category:"data-viz",technologies:["React","D3.js","Flask","Pandas"],imageUrl:"/images/project2.jpg",githubUrl:"https://github.com/abdo544445/data-dashboard",liveUrl:"https://data-dashboard.alatrash.me"},{id:"3",title:"ML Research Platform",slug:"ml-research-platform",description:"Collaborative platform for machine learning researchers to share and reproduce experiments.",category:"web-app",technologies:["TypeScript","Next.js","Firebase","TensorFlow.js"],imageUrl:"/images/project3.jpg",githubUrl:"https://github.com/abdo544445/ml-research-platform"}],k7=()=>{const[t,e]=M.useState("all"),n=[{id:"all",label:"All Projects"},{id:"ml-ai",label:"ML & AI"},{id:"data-viz",label:"Data Visualization"},{id:"web-app",label:"Web Applications"},{id:"research",label:"Research"}],r=t==="all"?jE:jE.filter(s=>s.category===t);return m.jsxs(g7,{children:[m.jsxs(y7,{children:["My ",m.jsx("span",{children:"Projects"})]}),m.jsx(v7,{children:"A collection of my work in machine learning, data science, and web development, with a focus on physics-informed approaches and scientific applications."}),m.jsx(_7,{children:n.map(s=>m.jsx(w7,{$active:t===s.id,onClick:()=>e(s.id),children:s.label},s.id))}),m.jsx(x7,{children:r.map(s=>{var a;return m.jsxs(TP,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5},viewport:{once:!0},children:[m.jsx(E7,{children:m.jsx("img",{src:s.imageUrl,alt:s.title})}),m.jsxs(T7,{children:[m.jsx(S7,{children:((a=n.find(l=>l.id===s.category))==null?void 0:a.label)||s.category}),m.jsx(I7,{children:s.title}),m.jsx(b7,{children:s.description}),m.jsx(P7,{children:s.technologies.map(l=>m.jsx(C7,{children:l},l))}),m.jsxs(A7,{children:[s.githubUrl&&m.jsx(Sg,{href:s.githubUrl,target:"_blank",rel:"noopener noreferrer",children:"View Code"}),s.liveUrl&&m.jsx(Sg,{href:s.liveUrl,target:"_blank",rel:"noopener noreferrer",children:"Live Demo"}),m.jsx(Sg,{as:fr,to:`/projects/${s.slug}`,children:"Learn More"})]})]})]},s.id)})})]})},NE=F.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 4rem 1.5rem;
  
  @media (min-width: 768px) {
    padding: 6rem 2rem;
  }
`,OE=F(fr)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  color: var(--color-text-light);
  transition: color var(--transition-base);
  
  &:hover {
    color: var(--color-primary);
  }
`,R7=F.div`
  margin-bottom: 2rem;
  
  @media (min-width: 768px) {
    display: flex;
    align-items: flex-start;
    gap: 2rem;
  }
`,D7=F.div`
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
`,j7=F.div`
  flex: 1;
`,N7=F.p`
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--color-primary);
  font-weight: 600;
  margin-bottom: 0.5rem;
`,O7=F.h1`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`,L7=F.p`
  font-size: 1.125rem;
  color: var(--color-text-light);
  margin-bottom: 2rem;
  line-height: 1.8;
`,V7=F.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`,SP=F.a`
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
`,M7=F(SP)`
  background-color: var(--color-primary);
  border-color: var(--color-primary);
  color: white;
  
  &:hover {
    background-color: var(--color-tertiary);
    border-color: var(--color-tertiary);
    color: white;
  }
`,F7=F.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`,U7=F.span`
  font-size: 0.875rem;
  padding: 0.25rem 0.75rem;
  background-color: var(--color-background);
  border-radius: var(--radius-sm);
  color: var(--color-text-light);
`,B7=F.div`
  margin-top: 4rem;
`,z7=F.h2`
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
`,$7=[{id:"1",title:"Physics-Informed Neural Networks",slug:"physics-informed-nn",description:"Implementation of PINNs for solving partial differential equations with domain knowledge constraints.",longDescription:"A comprehensive implementation of Physics-Informed Neural Networks (PINNs) that combines deep learning techniques with physical laws encoded as differential equations. This project demonstrates how to solve complex physics problems by training neural networks to respect known physical constraints.",category:"ML & AI",technologies:["PyTorch","Physics","Neural Networks","PDEs"],imageUrl:"/images/project1.jpg",githubUrl:"https://github.com/abdo544445/physics-informed-nn",content:[{title:"Project Overview",text:"Physics-Informed Neural Networks (PINNs) represent a novel approach to solving differential equations by incorporating physical laws directly into neural network training. This project implements PINNs for solving various types of PDEs with applications in fluid dynamics, heat transfer, and quantum mechanics."},{title:"Technical Implementation",text:"The implementation uses PyTorch to create neural network architectures that are trained with both data-driven loss and physics-informed loss components. The physics-informed component enforces the neural network to respect underlying physical principles expressed as differential equations."},{title:"Results & Impact",text:"The implemented PINNs demonstrate excellent accuracy and convergence properties, especially in scenarios with limited training data. The approach has been validated against analytical solutions for several benchmark problems in fluid dynamics and heat transfer."}]},{id:"2",title:"Interactive Data Dashboard",slug:"data-dashboard",description:"Interactive visualization dashboard for exploring and analyzing scientific datasets.",longDescription:"A comprehensive data visualization platform built to help scientists and researchers explore complex datasets intuitively. The dashboard offers interactive charts, graphs, and statistical analysis tools specifically designed for scientific data.",category:"Data Visualization",technologies:["React","D3.js","Flask","Pandas"],imageUrl:"/images/project2.jpg",githubUrl:"https://github.com/abdo544445/data-dashboard",liveUrl:"https://data-dashboard.alatrash.me",content:[{title:"Project Overview",text:"The Interactive Data Dashboard is a web-based visualization platform designed to help researchers and data scientists explore and analyze complex datasets. It provides a user-friendly interface for creating customized visualizations and running basic statistical analyses without requiring programming knowledge."},{title:"Technical Implementation",text:"The dashboard is built with a React frontend that leverages D3.js for interactive visualizations. The backend is implemented in Flask, which processes data using Pandas and NumPy. The application supports various file formats including CSV, Excel, and JSON, and can connect to SQL databases."},{title:"Features & Capabilities",text:"Key features include interactive charts (scatter plots, line charts, heatmaps), statistical summaries, data filtering, and the ability to export visualizations. The dashboard also supports real-time collaboration and sharing of visualizations among research teams."}]},{id:"3",title:"ML Research Platform",slug:"ml-research-platform",description:"Collaborative platform for machine learning researchers to share and reproduce experiments.",longDescription:"A collaborative platform that enables machine learning researchers to share experiments, replicate results, and build upon each other's work. The platform tackles the reproducibility crisis in machine learning research by providing standardized environments and detailed logging.",category:"Web Application",technologies:["TypeScript","Next.js","Firebase","TensorFlow.js"],imageUrl:"/images/project3.jpg",githubUrl:"https://github.com/abdo544445/ml-research-platform",content:[{title:"Project Overview",text:"The ML Research Platform addresses the reproducibility crisis in machine learning research by providing a collaborative environment where researchers can share experiments, replicate results, and build upon each other's work. It streamlines the process of documenting, sharing, and reproducing machine learning experiments."},{title:"Technical Implementation",text:"The platform is built with Next.js and TypeScript for the frontend, with Firebase providing authentication, database, and storage services. It integrates TensorFlow.js to allow running certain models directly in the browser, while also supporting integration with external compute resources for more intensive workloads."},{title:"Impact & Benefits",text:"This platform helps researchers save time, improve collaboration, and increase the credibility of their research by ensuring experiments are fully documented and reproducible. It also provides valuable metrics on model performance and resource utilization, helping to benchmark and optimize machine learning algorithms."}]}],W7=()=>{const{slug:t}=_A(),e=$7.find(n=>n.slug===t);return M.useEffect(()=>{window.scrollTo(0,0)},[]),e?m.jsxs(NE,{children:[m.jsxs(OE,{to:"/projects",children:[m.jsx(bx,{})," Back to Projects"]}),m.jsxs(ii.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:[m.jsxs(R7,{children:[m.jsx(D7,{children:m.jsx("img",{src:e.imageUrl,alt:e.title})}),m.jsxs(j7,{children:[m.jsx(N7,{children:e.category}),m.jsx(O7,{children:e.title}),m.jsx(L7,{children:e.longDescription||e.description}),m.jsx(F7,{children:e.technologies.map(n=>m.jsx(U7,{children:n},n))}),m.jsxs(V7,{children:[e.githubUrl&&m.jsxs(SP,{href:e.githubUrl,target:"_blank",rel:"noopener noreferrer",children:[m.jsx(Kv,{})," GitHub Repository"]}),e.liveUrl&&m.jsxs(M7,{href:e.liveUrl,target:"_blank",rel:"noopener noreferrer",children:[m.jsx(FL,{})," Live Demo"]})]})]})]}),m.jsx(B7,{children:e.content&&e.content.map((n,r)=>m.jsxs("div",{style:{marginBottom:"3rem"},children:[m.jsx(z7,{children:n.title}),m.jsx("p",{style:{lineHeight:"1.8"},children:n.text})]},r))})]})]}):m.jsxs(NE,{children:[m.jsxs(OE,{to:"/projects",children:[m.jsx(bx,{})," Back to Projects"]}),m.jsx("h1",{children:"Project Not Found"}),m.jsx("p",{children:"The project you are looking for doesn't exist or has been moved."})]})},H7=F.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 4rem 1.5rem;
  
  @media (min-width: 768px) {
    padding: 6rem 2rem;
  }
`,LE=F.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  
  span {
    color: var(--color-primary);
  }
`,VE=F.p`
  font-size: 1.125rem;
  color: var(--color-text-light);
  margin-bottom: 3rem;
  max-width: 800px;
`,q7=F.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,G7=F(ii.div)`
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
`,K7=F.h2`
  font-size: 1.5rem;
  margin-bottom: 1.25rem;
  color: var(--color-text);
`,Q7=F.p`
  color: var(--color-text-light);
  line-height: 1.7;
  margin-bottom: 1.5rem;
`,Y7=F.section`
  margin-top: 5rem;
`,X7=F.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
`,J7=F(ii.div)`
  background-color: var(--color-foreground);
  border-radius: var(--radius-md);
  padding: 1.5rem;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--color-border);
`,Z7=F.h3`
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
`,eU=F.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.5rem;
  margin-bottom: 1rem;
  font-size: 0.875rem;
`,nd=F.span`
  color: var(--color-text-light);
  
  strong {
    color: var(--color-text);
  }
`,tU=F.p`
  color: var(--color-text-light);
  font-size: 0.9375rem;
  line-height: 1.7;
  margin-bottom: 1.25rem;
`,nU=F.div`
  display: flex;
  gap: 1rem;
`,ME=F.a`
  color: var(--color-primary);
  font-size: 0.875rem;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  
  &:hover {
    text-decoration: underline;
  }
`,rU=[{id:"1",title:"Physics-Informed Machine Learning",description:"Exploring how to incorporate physics principles and domain knowledge into machine learning models to improve accuracy, reduce data requirements, and ensure physical consistency in predictions."},{id:"2",title:"Scientific Data Visualization",description:"Developing interactive and intuitive visualizations for complex scientific datasets to aid in understanding patterns, anomalies, and insights that might be missed in standard analysis."},{id:"3",title:"Neural Differential Equations",description:"Research into neural networks that can learn and solve differential equations, combining the flexibility of deep learning with the mathematical rigor of physics-based modeling."},{id:"4",title:"ML for Scientific Discovery",description:"Applying machine learning techniques to accelerate scientific discovery processes, create predictive models, and assist in hypothesis generation and validation."}],iU=[{id:"1",title:"Physics-Informed Neural Networks for Solving Partial Differential Equations in Fluid Dynamics",authors:["Abdo Alatrash","Jane Smith","David Johnson"],journal:"Journal of Computational Physics",year:2023,abstract:"This paper presents a novel approach to solving complex fluid dynamics problems using physics-informed neural networks. We demonstrate that incorporating known physical laws into the neural network architecture significantly improves accuracy and convergence compared to traditional numerical methods.",pdfUrl:"#",doiUrl:"https://doi.org/10.xxxx/xxxxx"},{id:"2",title:"Interactive Visualization Techniques for Large-Scale Scientific Datasets",authors:["Abdo Alatrash","Michael Chen"],conference:"IEEE Visualization Conference",year:2022,abstract:"We introduce a set of novel interactive visualization techniques designed specifically for exploring and analyzing large-scale scientific datasets. Our approach combines dimensionality reduction with interactive filtering to enable intuitive exploration of complex data structures.",pdfUrl:"#"}],sU=()=>m.jsxs(H7,{children:[m.jsxs(LE,{children:["Research ",m.jsx("span",{children:"Interests"})]}),m.jsx(VE,{children:"My research focuses on the intersection of machine learning, physics, and scientific computing, with an emphasis on developing models that incorporate domain knowledge and physical constraints."}),m.jsx(q7,{children:rU.map((t,e)=>m.jsxs(G7,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:e*.1},viewport:{once:!0},children:[m.jsx(K7,{children:t.title}),m.jsx(Q7,{children:t.description}),m.jsx(fr,{to:"/contact",style:{color:"var(--color-primary)"},children:"Discuss collaboration →"})]},t.id))}),m.jsxs(Y7,{children:[m.jsx(LE,{children:"Publications"}),m.jsx(VE,{children:"Selected academic papers and conference presentations related to my research areas."}),m.jsx(X7,{children:iU.map((t,e)=>m.jsxs(J7,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:e*.1},viewport:{once:!0},children:[m.jsx(Z7,{children:t.title}),m.jsxs(eU,{children:[m.jsxs(nd,{children:[m.jsx("strong",{children:"Authors:"})," ",t.authors.join(", ")]}),t.journal&&m.jsxs(nd,{children:[m.jsx("strong",{children:"Journal:"})," ",t.journal]}),t.conference&&m.jsxs(nd,{children:[m.jsx("strong",{children:"Conference:"})," ",t.conference]}),m.jsxs(nd,{children:[m.jsx("strong",{children:"Year:"})," ",t.year]})]}),m.jsx(tU,{children:t.abstract}),m.jsxs(nU,{children:[t.pdfUrl&&m.jsx(ME,{href:t.pdfUrl,target:"_blank",rel:"noopener noreferrer",children:"PDF"}),t.doiUrl&&m.jsx(ME,{href:t.doiUrl,target:"_blank",rel:"noopener noreferrer",children:"DOI"})]})]},t.id))})]})]}),oU=F.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 4rem 1.5rem;
  
  @media (min-width: 768px) {
    padding: 6rem 2rem;
  }
`,aU=F.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  
  span {
    color: var(--color-primary);
  }
`,lU=F.p`
  font-size: 1.125rem;
  color: var(--color-text-light);
  margin-bottom: 3rem;
  max-width: 800px;
`,cU=F.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 992px) {
    grid-template-columns: 2fr 1fr;
  }
`,uU=F.div``,hU=F.div`
  @media (max-width: 991px) {
    order: -1;
  }
`,dU=F.div`
  margin-bottom: 2rem;
`,fU=F.input`
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
`,FE=F.div`
  background-color: var(--color-foreground);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: var(--shadow-sm);
`,UE=F.h3`
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
`,pU=F.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`,mU=F.button`
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
`,gU=F.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,IP=F(ii(fr))`
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
`,yU=F.div`
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--transition-base);
  }
  
  ${IP}:hover & img {
    transform: scale(1.05);
  }
`,vU=F.div`
  padding: 1.5rem;
`,_U=F.h3`
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  line-height: 1.4;
`,wU=F.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  color: var(--color-text-light);
`,BE=F.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`,xU=F.p`
  color: var(--color-text-light);
  margin-bottom: 1rem;
  line-height: 1.6;
  font-size: 0.9375rem;
`,EU=F.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`,TU=F.span`
  background-color: var(--color-background);
  color: var(--color-text-light);
  padding: 0.125rem 0.5rem;
  border-radius: var(--radius-sm);
  font-size: 0.75rem;
`,Ry=[{id:"1",title:"Introduction to Physics-Informed Neural Networks",slug:"intro-to-physics-informed-neural-networks",summary:"An overview of how to integrate physics principles into neural networks and why it matters for scientific machine learning.",publishDate:new Date("2023-04-15"),readTime:"8 min read",imageUrl:"/images/blog1.jpg",tags:["Machine Learning","PINNs","Scientific ML"]},{id:"2",title:"Visualizing Complex Scientific Data: Best Practices",slug:"visualizing-complex-scientific-data",summary:"Tips and techniques for creating effective visualizations that communicate insights from complex scientific datasets.",publishDate:new Date("2023-03-10"),readTime:"6 min read",imageUrl:"/images/blog2.jpg",tags:["Data Visualization","Scientific Data","D3.js"]},{id:"3",title:"Building Web Apps for Scientific Applications",slug:"web-apps-for-scientific-applications",summary:"How to develop web applications that serve as interfaces for scientific computing and data analysis.",publishDate:new Date("2023-02-05"),readTime:"10 min read",imageUrl:"/images/blog3.jpg",tags:["Web Development","React","Scientific Computing"]},{id:"4",title:"Deep Learning for Differential Equations",slug:"deep-learning-for-differential-equations",summary:"Exploring how deep learning models can be used to solve and approximate complex differential equations.",publishDate:new Date("2023-01-20"),readTime:"12 min read",imageUrl:"/images/blog4.jpg",tags:["Deep Learning","Differential Equations","Scientific ML"]}],SU=Array.from(new Set(Ry.flatMap(t=>t.tags))),IU=()=>{const[t,e]=M.useState(null),[n,r]=M.useState(""),s=Ry.filter(l=>{const u=t?l.tags.includes(t):!0,d=n?l.title.toLowerCase().includes(n.toLowerCase())||l.summary.toLowerCase().includes(n.toLowerCase())||l.tags.some(p=>p.toLowerCase().includes(n.toLowerCase())):!0;return u&&d}),a=l=>new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric"}).format(l);return m.jsxs(oU,{children:[m.jsxs(aU,{children:["The ",m.jsx("span",{children:"Blog"})]}),m.jsx(lU,{children:"Articles, tutorials, and insights on machine learning, data science, and scientific computing with a focus on physics-informed approaches."}),m.jsxs(cU,{children:[m.jsxs(uU,{children:[m.jsx(gU,{children:s.map((l,u)=>m.jsxs(IP,{to:`/blog/${l.slug}`,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:u*.1},viewport:{once:!0},children:[m.jsx(yU,{children:m.jsx("img",{src:l.imageUrl,alt:l.title})}),m.jsxs(vU,{children:[m.jsx(_U,{children:l.title}),m.jsxs(wU,{children:[m.jsxs(BE,{children:[m.jsx(Px,{size:12}),a(l.publishDate)]}),m.jsxs(BE,{children:[m.jsx(jL,{size:12}),l.readTime]})]}),m.jsx(xU,{children:l.summary}),m.jsx(EU,{children:l.tags.map(d=>m.jsx(TU,{children:d},d))})]})]},l.id))}),s.length===0&&m.jsxs("div",{style:{textAlign:"center",padding:"3rem 0"},children:[m.jsx("h3",{children:"No posts found"}),m.jsx("p",{children:"Try adjusting your filters or search term."})]})]}),m.jsxs(hU,{children:[m.jsx(dU,{children:m.jsx(fU,{type:"text",placeholder:"Search blog posts...",value:n,onChange:l=>r(l.target.value)})}),m.jsxs(FE,{children:[m.jsx(UE,{children:"Tags"}),m.jsx(pU,{children:SU.map(l=>m.jsx(mU,{$active:t===l,onClick:()=>{e(t===l?null:l)},children:l},l))})]}),m.jsxs(FE,{children:[m.jsx(UE,{children:"Recent Posts"}),Ry.slice(0,3).map(l=>m.jsxs("div",{style:{marginBottom:"1rem"},children:[m.jsx(fr,{to:`/blog/${l.slug}`,style:{fontWeight:500,color:"var(--color-text)"},children:l.title}),m.jsxs("div",{style:{fontSize:"0.875rem",color:"var(--color-text-light)",marginTop:"0.25rem"},children:[m.jsx(Px,{size:10,style:{marginRight:"0.25rem"}}),a(l.publishDate)]})]},l.id))]})]})]})]})};var Ig={exports:{}},bg,zE;function bU(){if(zE)return bg;zE=1;var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return bg=t,bg}var Pg,$E;function PU(){if($E)return Pg;$E=1;var t=bU();function e(){}function n(){}return n.resetWarningCache=e,Pg=function(){function r(l,u,d,p,y,w){if(w!==t){var x=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw x.name="Invariant Violation",x}}r.isRequired=r;function s(){return r}var a={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:s,element:r,elementType:r,instanceOf:s,node:r,objectOf:s,oneOf:s,oneOfType:s,shape:s,exact:s,checkPropTypes:n,resetWarningCache:e};return a.PropTypes=a,a},Pg}var WE;function CU(){return WE||(WE=1,Ig.exports=PU()()),Ig.exports}var AU=CU();const Tt=jy(AU);function HE(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function qE(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?HE(Object(n),!0).forEach(function(r){bP(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):HE(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function kd(t){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?kd=function(e){return typeof e}:kd=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},kd(t)}function bP(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function kU(t,e){return RU(t)||DU(t,e)||jU(t,e)||NU()}function RU(t){if(Array.isArray(t))return t}function DU(t,e){var n=t&&(typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"]);if(n!=null){var r=[],s=!0,a=!1,l,u;try{for(n=n.call(t);!(s=(l=n.next()).done)&&(r.push(l.value),!(e&&r.length===e));s=!0);}catch(d){a=!0,u=d}finally{try{!s&&n.return!=null&&n.return()}finally{if(a)throw u}}return r}}function jU(t,e){if(t){if(typeof t=="string")return GE(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return GE(t,e)}}function GE(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function NU(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var OU=function(e){var n=Me.useRef(e);return Me.useEffect(function(){n.current=e},[e]),n.current},uf=function(e){return e!==null&&kd(e)==="object"},KE="[object Object]",LU=function t(e,n){if(!uf(e)||!uf(n))return e===n;var r=Array.isArray(e),s=Array.isArray(n);if(r!==s)return!1;var a=Object.prototype.toString.call(e)===KE,l=Object.prototype.toString.call(n)===KE;if(a!==l)return!1;if(!a&&!r)return e===n;var u=Object.keys(e),d=Object.keys(n);if(u.length!==d.length)return!1;for(var p={},y=0;y<u.length;y+=1)p[u[y]]=!0;for(var w=0;w<d.length;w+=1)p[d[w]]=!0;var x=Object.keys(p);if(x.length!==u.length)return!1;var S=e,A=n,C=function($){return t(S[$],A[$])};return x.every(C)},VU=function(e,n,r){return uf(e)?Object.keys(e).reduce(function(s,a){var l=!uf(n)||!LU(e[a],n[a]);return r.includes(a)?(l&&console.warn("Unsupported prop change: options.".concat(a," is not a mutable property.")),s):l?qE(qE({},s||{}),{},bP({},a,e[a])):s},null):null},PP=Me.createContext(null);PP.displayName="ElementsContext";var MU=function(e,n){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(n," in an <Elements> provider."));return e},CP=Me.createContext(null);CP.displayName="CartElementContext";var FU=function(e,n){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(n," in an <Elements> provider."));return e};Tt.any,Tt.object;var QE=function(e){var n=Me.useContext(PP);return MU(n,e)},YE=function(e){var n=Me.useContext(CP);return FU(n,e)};Tt.func.isRequired;var yn=function(e,n,r){var s=!!r,a=Me.useRef(r);Me.useEffect(function(){a.current=r},[r]),Me.useEffect(function(){if(!s||!e)return function(){};var l=function(){a.current&&a.current.apply(a,arguments)};return e.on(n,l),function(){e.off(n,l)}},[s,n,e,a])},UU=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},Rt=function(e,n){var r="".concat(UU(e),"Element"),s=function(d){var p=d.id,y=d.className,w=d.options,x=w===void 0?{}:w,S=d.onBlur,A=d.onFocus,C=d.onReady,P=d.onChange,$=d.onEscape,B=d.onClick,L=d.onLoadError,D=d.onLoaderStart,q=d.onNetworksChange,J=d.onCheckout,k=d.onLineItemClick,b=d.onConfirm,R=d.onCancel,V=d.onShippingAddressChange,z=d.onShippingRateChange,H=QE("mounts <".concat(r,">")),N=H.elements,Le=Me.useState(null),Qe=kU(Le,2),xe=Qe[0],ke=Qe[1],se=Me.useRef(null),ue=Me.useRef(null),Y=YE("mounts <".concat(r,">")),j=Y.setCart,Q=Y.setCartState;yn(xe,"blur",S),yn(xe,"focus",A),yn(xe,"escape",$),yn(xe,"click",B),yn(xe,"loaderror",L),yn(xe,"loaderstart",D),yn(xe,"networkschange",q),yn(xe,"lineitemclick",k),yn(xe,"confirm",b),yn(xe,"cancel",R),yn(xe,"shippingaddresschange",V),yn(xe,"shippingratechange",z);var ae;e==="cart"?ae=function(Te){Q(Te),C&&C(Te)}:C&&(e==="payButton"?ae=C:ae=function(){C(xe)}),yn(xe,"ready",ae);var de=e==="cart"?function(fe){Q(fe),P&&P(fe)}:P;yn(xe,"change",de);var ge=e==="cart"?function(fe){Q(fe),J&&J(fe)}:J;yn(xe,"checkout",ge),Me.useLayoutEffect(function(){if(se.current===null&&N&&ue.current!==null){var fe=N.create(e,x);e==="cart"&&j&&j(fe),se.current=fe,ke(fe),fe.mount(ue.current)}},[N,x,j]);var we=OU(x);return Me.useEffect(function(){if(se.current){var fe=VU(x,we,["paymentRequest"]);fe&&se.current.update(fe)}},[x,we]),Me.useLayoutEffect(function(){return function(){se.current&&(se.current.destroy(),se.current=null)}},[]),Me.createElement("div",{id:p,className:y,ref:ue})},a=function(d){QE("mounts <".concat(r,">")),YE("mounts <".concat(r,">"));var p=d.id,y=d.className;return Me.createElement("div",{id:p,className:y})},l=n?a:s;return l.propTypes={id:Tt.string,className:Tt.string,onChange:Tt.func,onBlur:Tt.func,onFocus:Tt.func,onReady:Tt.func,onEscape:Tt.func,onClick:Tt.func,onLoadError:Tt.func,onLoaderStart:Tt.func,onNetworksChange:Tt.func,onCheckout:Tt.func,onLineItemClick:Tt.func,onConfirm:Tt.func,onCancel:Tt.func,onShippingAddressChange:Tt.func,onShippingRateChange:Tt.func,options:Tt.object},l.displayName=r,l.__elementType=e,l},Dt=typeof window>"u";Rt("auBankAccount",Dt);var BU=Rt("card",Dt);Rt("cardNumber",Dt);Rt("cardExpiry",Dt);Rt("cardCvc",Dt);Rt("fpxBank",Dt);Rt("iban",Dt);Rt("idealBank",Dt);Rt("p24Bank",Dt);Rt("epsBank",Dt);Rt("payment",Dt);Rt("payButton",Dt);Rt("paymentRequestButton",Dt);Rt("linkAuthentication",Dt);Rt("address",Dt);Rt("shippingAddress",Dt);Rt("cart",Dt);Rt("paymentMethodMessaging",Dt);Rt("affirmMessage",Dt);Rt("afterpayClearpayMessage",Dt);var Cg,XE;function zU(){if(XE)return Cg;XE=1;var t=Object.defineProperty,e=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,r=Object.prototype.hasOwnProperty,s=(Y,j)=>{for(var Q in j)t(Y,Q,{get:j[Q],enumerable:!0})},a=(Y,j,Q,ae)=>{if(j&&typeof j=="object"||typeof j=="function")for(let de of n(j))!r.call(Y,de)&&de!==Q&&t(Y,de,{get:()=>j[de],enumerable:!(ae=e(j,de))||ae.enumerable});return Y},l=Y=>a(t({},"__esModule",{value:!0}),Y),u=(Y,j,Q)=>new Promise((ae,de)=>{var ge=Te=>{try{fe(Q.next(Te))}catch(De){de(De)}},we=Te=>{try{fe(Q.throw(Te))}catch(De){de(De)}},fe=Te=>Te.done?ae(Te.value):Promise.resolve(Te.value).then(ge,we);fe((Q=Q.apply(Y,j)).next())}),d={};s(d,{SubmissionError:()=>D,appendExtraData:()=>N,createClient:()=>ke,getDefaultClient:()=>se,isSubmissionError:()=>L}),Cg=l(d);var p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",y=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;function w(Y){Y=String(Y);for(var j,Q,ae,de,ge="",we=0,fe=Y.length%3;we<Y.length;){if((Q=Y.charCodeAt(we++))>255||(ae=Y.charCodeAt(we++))>255||(de=Y.charCodeAt(we++))>255)throw new TypeError("Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.");j=Q<<16|ae<<8|de,ge+=p.charAt(j>>18&63)+p.charAt(j>>12&63)+p.charAt(j>>6&63)+p.charAt(j&63)}return fe?ge.slice(0,fe-3)+"===".substring(fe):ge}function x(Y){if(Y=String(Y).replace(/[\t\n\f\r ]+/g,""),!y.test(Y))throw new TypeError("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");Y+="==".slice(2-(Y.length&3));for(var j,Q="",ae,de,ge=0;ge<Y.length;)j=p.indexOf(Y.charAt(ge++))<<18|p.indexOf(Y.charAt(ge++))<<12|(ae=p.indexOf(Y.charAt(ge++)))<<6|(de=p.indexOf(Y.charAt(ge++))),Q+=ae===64?String.fromCharCode(j>>16&255):de===64?String.fromCharCode(j>>16&255,j>>8&255):String.fromCharCode(j>>16&255,j>>8&255,j&255);return Q}var S=()=>navigator.webdriver||!!document.documentElement.getAttribute(x("d2ViZHJpdmVy"))||!!window.callPhantom||!!window._phantom,A=class{constructor(){this.loadedAt=Date.now(),this.webdriver=S()}data(){return{loadedAt:this.loadedAt,webdriver:this.webdriver}}},C=class{constructor(Y){this.kind="success",this.next=Y.next}};function P(Y){return"next"in Y&&typeof Y.next=="string"}var $=class{constructor(Y,j){this.paymentIntentClientSecret=Y,this.resubmitKey=j,this.kind="stripePluginPending"}};function B(Y){if("stripe"in Y&&"resubmitKey"in Y&&typeof Y.resubmitKey=="string"){let{stripe:j}=Y;return typeof j=="object"&&j!=null&&"paymentIntentClientSecret"in j&&typeof j.paymentIntentClientSecret=="string"}return!1}function L(Y){return Y.kind==="error"}var D=class{constructor(...Y){this.kind="error",this.formErrors=[],this.fieldErrors=new Map;var j;for(let Q of Y){if(!Q.field){this.formErrors.push({code:Q.code&&q(Q.code)?Q.code:"UNSPECIFIED",message:Q.message});continue}let ae=(j=this.fieldErrors.get(Q.field))!=null?j:[];ae.push({code:Q.code&&k(Q.code)?Q.code:"UNSPECIFIED",message:Q.message}),this.fieldErrors.set(Q.field,ae)}}getFormErrors(){return[...this.formErrors]}getFieldErrors(Y){var j;return(j=this.fieldErrors.get(Y))!=null?j:[]}getAllFieldErrors(){return Array.from(this.fieldErrors)}};function q(Y){return Y in J}var J={BLOCKED:"BLOCKED",EMPTY:"EMPTY",FILES_TOO_BIG:"FILES_TOO_BIG",FORM_NOT_FOUND:"FORM_NOT_FOUND",INACTIVE:"INACTIVE",NO_FILE_UPLOADS:"NO_FILE_UPLOADS",PROJECT_NOT_FOUND:"PROJECT_NOT_FOUND",TOO_MANY_FILES:"TOO_MANY_FILES"};function k(Y){return Y in b}var b={REQUIRED_FIELD_EMPTY:"REQUIRED_FIELD_EMPTY",REQUIRED_FIELD_MISSING:"REQUIRED_FIELD_MISSING",STRIPE_CLIENT_ERROR:"STRIPE_CLIENT_ERROR",STRIPE_SCA_ERROR:"STRIPE_SCA_ERROR",TYPE_EMAIL:"TYPE_EMAIL",TYPE_NUMERIC:"TYPE_NUMERIC",TYPE_TEXT:"TYPE_TEXT"};function R(Y){return"errors"in Y&&Array.isArray(Y.errors)&&Y.errors.every(j=>typeof j.message=="string")||"error"in Y&&typeof Y.error=="string"}var V="3.0.4",z=Y=>w(JSON.stringify(Y)),H=Y=>{let j=`@formspree/core@${V}`;return Y?`${Y} ${j}`:j};function N(Y,j,Q){Y instanceof FormData?Y.append(j,Q):Y[j]=Q}function Le(Y){return Y!==null&&typeof Y=="object"}var Qe=class{constructor(Y={}){this.project=Y.project,this.stripe=Y.stripe,typeof window<"u"&&(this.session=new A)}submitForm(Y,j){return u(this,arguments,function*(Q,ae,de={}){let ge=de.endpoint||"https://formspree.io",we=this.project?`${ge}/p/${this.project}/f/${Q}`:`${ge}/f/${Q}`,fe={Accept:"application/json","Formspree-Client":H(de.clientName)};this.session&&(fe["Formspree-Session-Data"]=z(this.session.data())),ae instanceof FormData||(fe["Content-Type"]="application/json");function Te($e){return u(this,null,function*(){try{let je=yield(yield fetch(we,{method:"POST",mode:"cors",body:$e instanceof FormData?$e:JSON.stringify($e),headers:fe})).json();if(Le(je)){if(R(je))return Array.isArray(je.errors)?new D(...je.errors):new D({message:je.error});if(B(je))return new $(je.stripe.paymentIntentClientSecret,je.resubmitKey);if(P(je))return new C({next:je.next})}return new D({message:"Unexpected response format"})}catch(je){let wt=je instanceof Error?je.message:`Unknown error while posting to Formspree: ${JSON.stringify(je)}`;return new D({message:wt})}})}if(this.stripe&&de.createPaymentMethod){let $e=yield de.createPaymentMethod();if($e.error)return new D({code:"STRIPE_CLIENT_ERROR",field:"paymentMethod",message:"Error creating payment method"});N(ae,"paymentMethod",$e.paymentMethod.id);let je=yield Te(ae);if(je.kind==="error")return je;if(je.kind==="stripePluginPending"){let wt=yield this.stripe.handleCardAction(je.paymentIntentClientSecret);if(wt.error)return new D({code:"STRIPE_CLIENT_ERROR",field:"paymentMethod",message:"Stripe SCA error"});ae instanceof FormData?ae.delete("paymentMethod"):delete ae.paymentMethod,N(ae,"paymentIntent",wt.paymentIntent.id),N(ae,"resubmitKey",je.resubmitKey);let mr=yield Te(ae);return xe(mr),mr}return je}let De=yield Te(ae);return xe(De),De})}};function xe(Y){let{kind:j}=Y;if(j!=="success"&&j!=="error")throw new Error(`Unexpected submission result (kind: ${j})`)}var ke=Y=>new Qe(Y),se=()=>(ue||(ue=ke()),ue),ue;return Cg}var Dy=zU(),rd={},JE;function $U(){if(JE)return rd;JE=1,Object.defineProperty(rd,"__esModule",{value:!0});function t(A){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?t=function(C){return typeof C}:t=function(C){return C&&typeof Symbol=="function"&&C.constructor===Symbol&&C!==Symbol.prototype?"symbol":typeof C},t(A)}var e="https://js.stripe.com/v3",n=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,r="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",s=function(){for(var C=document.querySelectorAll('script[src^="'.concat(e,'"]')),P=0;P<C.length;P++){var $=C[P];if(n.test($.src))return $}return null},a=function(C){var P=C&&!C.advancedFraudSignals?"?advancedFraudSignals=false":"",$=document.createElement("script");$.src="".concat(e).concat(P);var B=document.head||document.body;if(!B)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return B.appendChild($),$},l=function(C,P){!C||!C._registerWrapper||C._registerWrapper({name:"stripe-js",version:"1.54.2",startTime:P})},u=null,d=function(C){return u!==null||(u=new Promise(function(P,$){if(typeof window>"u"||typeof document>"u"){P(null);return}if(window.Stripe&&C&&console.warn(r),window.Stripe){P(window.Stripe);return}try{var B=s();B&&C?console.warn(r):B||(B=a(C)),B.addEventListener("load",function(){window.Stripe?P(window.Stripe):$(new Error("Stripe.js not available"))}),B.addEventListener("error",function(){$(new Error("Failed to load Stripe.js"))})}catch(L){$(L);return}})),u},p=function(C,P,$){if(C===null)return null;var B=C.apply(void 0,P);return l(B,$),B},y=function(C){var P=`invalid load parameters; expected object of shape

    {advancedFraudSignals: boolean}

but received

    `.concat(JSON.stringify(C),`
`);if(C===null||t(C)!=="object")throw new Error(P);if(Object.keys(C).length===1&&typeof C.advancedFraudSignals=="boolean")return C;throw new Error(P)},w,x=!1,S=function(){for(var C=arguments.length,P=new Array(C),$=0;$<C;$++)P[$]=arguments[$];x=!0;var B=Date.now();return d(w).then(function(L){return p(L,P,B)})};return S.setLoadParameters=function(A){if(x&&w){var C=y(A),P=Object.keys(C),$=P.reduce(function(B,L){var D;return B&&A[L]===((D=w)===null||D===void 0?void 0:D[L])},!0);if($)return}if(x)throw new Error("You cannot change load parameters after calling loadStripe");w=y(A)},rd.loadStripe=S,rd}var Ag,ZE;function WU(){return ZE||(ZE=1,Ag=$U()),Ag}WU();function kg(t){let{prefix:e,field:n,errors:r,...s}=t;if(r==null)return null;let a=n?r.getFieldErrors(n):r.getFormErrors();return a.length===0?null:Me.createElement("div",{...s},e?`${e} `:null,a.map(l=>l.message).join(", "))}var HU=M.createContext({elements:null});function qU(){return M.useContext(HU)}var GU=Me.createContext(null);function KU(){return M.useContext(GU)??{client:Dy.getDefaultClient()}}var QU="2.5.5",YU=`@formspree/react@${QU}`;function XU(t,e={}){let n=KU(),{elements:r}=qU(),{client:s=n.client,extraData:a,onError:l,onSuccess:u,origin:d}=e,{stripe:p}=s;return async function(y){let w=JU(y)?ZU(y):y;if(typeof a=="object")for(let[C,P]of Object.entries(a)){let $;typeof P=="function"?$=await P():$=P,$!==void 0&&Dy.appendExtraData(w,C,$)}let x=r==null?void 0:r.getElement(BU),S=p&&x?()=>p.createPaymentMethod({type:"card",card:x,billing_details:eB(w)}):void 0,A=await s.submitForm(t,w,{endpoint:d,clientName:YU,createPaymentMethod:S});Dy.isSubmissionError(A)?l==null||l(A):u==null||u(A)}}function JU(t){return"preventDefault"in t&&typeof t.preventDefault=="function"}function ZU(t){t.preventDefault();let e=t.currentTarget;if(e.tagName!="FORM")throw new Error("submit was triggered for a non-form element");return new FormData(e)}function eB(t){let e={address:tB(t)};for(let n of["name","email","phone"]){let r=t instanceof FormData?t.get(n):t[n];r&&typeof r=="string"&&(e[n]=r)}return e}function tB(t){let e={};for(let[n,r]of[["address_line1","line1"],["address_line2","line2"],["address_city","city"],["address_country","country"],["address_state","state"],["address_postal_code","postal_code"]]){let s=t instanceof FormData?t.get(n):t[n];s&&typeof s=="string"&&(e[r]=s)}return e}function nB(t,e={}){let[n,r]=M.useState(null),[s,a]=M.useState(null),[l,u]=M.useState(!1),[d,p]=M.useState(!1),y=XU(t,{client:e.client,extraData:e.data,onError(w){r(w),u(!1),p(!1)},onSuccess(w){r(null),a(w),u(!1),p(!0)},origin:e.endpoint});return[{errors:n,result:s,submitting:l,succeeded:d},async function(w){u(!0),await y(w)},function(){r(null),a(null),u(!1),p(!1)}]}const rB=F.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 4rem 1.5rem;
  
  @media (min-width: 768px) {
    padding: 6rem 2rem;
  }
`,iB=F.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  
  span {
    color: var(--color-primary);
  }
`,sB=F.p`
  font-size: 1.125rem;
  color: var(--color-text-light);
  margin-bottom: 3rem;
  max-width: 600px;
`,oB=F.div`
  display: grid;
  gap: 3rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`,aB=F(ii.form)`
  background-color: var(--color-foreground);
  padding: 2rem;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
`,lB=F.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`,id=F.div`
  margin-bottom: 1.5rem;
`,sd=F.label`
  display: block;
  font-weight: 500;
  margin-bottom: 0.5rem;
`,Rg=F.input`
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
`,cB=F.textarea`
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
`,uB=F.button`
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
`,eT=F.div`
  padding: 1rem;
  border-radius: var(--radius-md);
  margin-top: 1.5rem;
  background-color: ${t=>t.$success?"rgba(55, 178, 124, 0.1)":"rgba(237, 67, 67, 0.1)"};
  color: ${t=>t.$success?"var(--color-secondary)":"#ED4343"};
  border: 1px solid ${t=>t.$success?"var(--color-secondary)":"#ED4343"};
`,hB=F.div``,dB=F.div`
  display: grid;
  gap: 1.5rem;
  margin-bottom: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,od=F.div`
  background-color: var(--color-foreground);
  padding: 1.5rem;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-base), box-shadow var(--transition-base);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-md);
  }
`,ad=F.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(43, 107, 237, 0.1);
  color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`,ld=F.h3`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`,cd=F.p`
  color: var(--color-text);
`,Dg=F.a`
  color: var(--color-primary);
  display: flex;
  align-items: center;
  gap: 0.25rem;
  
  &:hover {
    text-decoration: underline;
  }
`,fB=()=>{const[t,e]=nB("xpwdnvwq"),[n,r]=M.useState(""),s=async a=>{a.preventDefault();const l=new FormData(a.currentTarget),u=Object.fromEntries(l.entries());if(!u.name||!u.email||!u.message){r("All fields are required");return}if(typeof u.email=="string"&&(!u.email.includes("@")||!u.email.includes("."))){r("Please enter a valid email address");return}r(""),e(a)};return m.jsxs(rB,{children:[m.jsxs(iB,{children:["Get in ",m.jsx("span",{children:"Touch"})]}),m.jsx(sB,{children:"Feel free to reach out for collaborations, inquiries, or just to say hello. I'm always open to discussing new projects, ideas, or opportunities."}),m.jsxs(oB,{children:[m.jsxs(aB,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},onSubmit:s,children:[m.jsx(lB,{children:"Send a Message"}),m.jsxs(id,{children:[m.jsx(sd,{htmlFor:"name",children:"Your Name"}),m.jsx(Rg,{id:"name",type:"text",name:"name",placeholder:"John Doe"})]}),m.jsxs(id,{children:[m.jsx(sd,{htmlFor:"email",children:"Email Address"}),m.jsx(Rg,{id:"email",type:"email",name:"email",placeholder:"john@example.com"}),m.jsx(kg,{prefix:"Email",field:"email",errors:t.errors})]}),m.jsxs(id,{children:[m.jsx(sd,{htmlFor:"subject",children:"Subject (Optional)"}),m.jsx(Rg,{id:"subject",type:"text",name:"subject",placeholder:"What's this about?"})]}),m.jsxs(id,{children:[m.jsx(sd,{htmlFor:"message",children:"Your Message"}),m.jsx(cB,{id:"message",name:"message",placeholder:"Write your message here..."}),m.jsx(kg,{prefix:"Message",field:"message",errors:t.errors})]}),m.jsxs(uB,{type:"submit",disabled:t.submitting,children:[m.jsx(zL,{})," Send Message"]}),t.succeeded&&m.jsx(eT,{$success:!0,children:"Thank you for your message! I'll get back to you as soon as possible."}),n&&m.jsx(eT,{children:n}),m.jsx(kg,{errors:t.errors})]}),m.jsxs(hB,{children:[m.jsxs(dB,{children:[m.jsxs(od,{children:[m.jsx(ad,{children:m.jsx(YI,{})}),m.jsx(ld,{children:"Email"}),m.jsx(cd,{children:m.jsx(Dg,{href:"mailto:abdoforanything1@gmail.com",children:"abdoforanything1@gmail.com"})})]}),m.jsxs(od,{children:[m.jsx(ad,{children:m.jsx($L,{})}),m.jsx(ld,{children:"Phone"}),m.jsx(cd,{children:m.jsx(Dg,{href:"tel:+201119173529",children:"+20 1119173529"})})]}),m.jsxs(od,{children:[m.jsx(ad,{children:m.jsx(KI,{})}),m.jsx(ld,{children:"WhatsApp"}),m.jsx(cd,{children:m.jsx(Dg,{href:"https://wa.me/201119173529",children:"Send a message"})})]}),m.jsxs(od,{children:[m.jsx(ad,{children:m.jsx(UL,{})}),m.jsx(ld,{children:"Location"}),m.jsx(cd,{children:"Remote / Cairo, Egypt"})]})]}),m.jsx("div",{style:{marginTop:"2rem"},children:m.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221199.41595958156!2d31.22344900684888!3d30.059488723522844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1620569788602!5m2!1sen!2seg",width:"100%",height:"300",style:{border:0,borderRadius:"var(--radius-md)"},allowFullScreen:!0,loading:"lazy",title:"Cairo, Egypt Map"})})]})]})]})},pB=F.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 4rem 1.5rem;
  
  @media (min-width: 768px) {
    padding: 6rem 2rem;
  }
`,mB=F.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  
  span {
    color: var(--color-primary);
  }
`,gB=()=>m.jsxs(pB,{children:[m.jsxs(mB,{children:["404 - ",m.jsx("span",{children:"Page Not Found"})]}),m.jsx("p",{children:"The page you are looking for doesn't exist or has been moved."}),m.jsx("p",{children:"Please check the URL or navigate back to the homepage."})]}),yB=F.div`
  padding: 20px;
`,vB=F.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`,vc=F.div`
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
`,_B=F.div`
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
`,wB=()=>{const[t,e]=M.useState({projects:0,skills:0,researchPapers:0,blogPosts:0,messages:0}),[n,r]=M.useState(!0);return M.useEffect(()=>{(async()=>{try{const a=Cn(ct,"projects"),l=Cn(ct,"skills"),u=Cn(ct,"research"),d=Cn(ct,"blog"),p=Cn(ct,"messages"),[y,w,x,S,A]=await Promise.all([Kr(a),Kr(l),Kr(u),Kr(d),Kr(p)]);e({projects:y.size,skills:w.size,researchPapers:x.size,blogPosts:S.size,messages:A.size}),r(!1)}catch(a){console.error("Error fetching dashboard data:",a),r(!1)}})()},[]),m.jsxs(yB,{children:[m.jsx("h1",{children:"Admin Dashboard"}),n?m.jsx("p",{children:"Loading dashboard data..."}):m.jsxs(m.Fragment,{children:[m.jsxs(vB,{children:[m.jsxs(vc,{children:[m.jsx("h3",{children:"Projects"}),m.jsx("p",{children:t.projects})]}),m.jsxs(vc,{children:[m.jsx("h3",{children:"Skills"}),m.jsx("p",{children:t.skills})]}),m.jsxs(vc,{children:[m.jsx("h3",{children:"Research Papers"}),m.jsx("p",{children:t.researchPapers})]}),m.jsxs(vc,{children:[m.jsx("h3",{children:"Blog Posts"}),m.jsx("p",{children:t.blogPosts})]}),m.jsxs(vc,{children:[m.jsx("h3",{children:"Contact Messages"}),m.jsx("p",{children:t.messages})]})]}),m.jsxs(_B,{children:[m.jsx("h2",{children:"Recent Activity"}),m.jsx("ul",{children:m.jsxs("li",{children:["Portfolio website launched - ",new Date().toLocaleDateString()]})})]})]})]})},xB=F.div`
  padding: 20px;
`,EB=F.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
`,TB=F.div`
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
`,ud=F.button`
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
`,SB=F.form`
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
`,tT={title:"",description:"",imageUrl:"",technologies:[],githubUrl:"",demoUrl:"",slug:"",category:"web",featured:!1},IB=()=>{const[t,e]=M.useState([]),[n,r]=M.useState(tT),[s,a]=M.useState(!1),[l,u]=M.useState(null),[d,p]=M.useState(null),[y,w]=M.useState(!1);M.useEffect(()=>{x()},[]);const x=async()=>{w(!0);try{const D=Cn(ct,"projects"),J=(await Kr(D)).docs.map(k=>({id:k.id,...k.data()}));e(J)}catch(D){console.error("Error fetching projects:",D)}finally{w(!1)}},S=D=>{const{name:q,value:J,type:k}=D.target;if(q==="technologies")r({...n,[q]:J.split(",").map(b=>b.trim())});else if(k==="checkbox"){const b=D.target;r({...n,[q]:b.checked})}else r({...n,[q]:J})},A=D=>{D.target.files&&D.target.files[0]&&p(D.target.files[0])},C=async D=>{const q=tl(nl,`projects/${Date.now()}_${D.name}`);return await jv(q,D),Nv(q)},P=async D=>{D.preventDefault(),w(!0);try{let q=n.imageUrl;d&&(q=await C(d));const J={...n,imageUrl:q,updatedAt:new Date};if(s&&l){const k=Or(ct,"projects",l);await pu(k,J)}else await Lf(Cn(ct,"projects"),{...J,createdAt:new Date});L(),x()}catch(q){console.error("Error saving project:",q)}finally{w(!1)}},$=D=>{r({title:D.title,description:D.description,imageUrl:D.imageUrl,technologies:D.technologies,githubUrl:D.githubUrl,demoUrl:D.demoUrl,slug:D.slug,category:D.category,featured:D.featured}),u(D.id),a(!0)},B=async(D,q)=>{if(window.confirm("Are you sure you want to delete this project?")){w(!0);try{if(await mu(Or(ct,"projects",D)),q&&q.includes("firebase")){const J=tl(nl,q);await Ov(J)}x()}catch(J){console.error("Error deleting project:",J)}finally{w(!1)}}},L=()=>{r(tT),p(null),a(!1),u(null)};return m.jsxs(xB,{children:[m.jsx("h1",{children:"Manage Projects"}),m.jsxs(SB,{onSubmit:P,children:[m.jsx("h2",{children:s?"Edit Project":"Add New Project"}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{htmlFor:"title",children:"Title"}),m.jsx("input",{id:"title",name:"title",type:"text",value:n.title,onChange:S,required:!0})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{htmlFor:"slug",children:"Slug (URL-friendly name)"}),m.jsx("input",{id:"slug",name:"slug",type:"text",value:n.slug,onChange:S,required:!0})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{htmlFor:"description",children:"Description"}),m.jsx("textarea",{id:"description",name:"description",value:n.description,onChange:S,required:!0})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{htmlFor:"image",children:"Project Image"}),m.jsx("input",{id:"image",name:"image",type:"file",accept:"image/*",onChange:A}),n.imageUrl&&m.jsx("div",{style:{marginTop:"10px"},children:m.jsx("img",{src:n.imageUrl,alt:"Current project",style:{maxWidth:"200px",maxHeight:"150px"}})})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{htmlFor:"technologies",children:"Technologies (comma-separated)"}),m.jsx("input",{id:"technologies",name:"technologies",type:"text",value:n.technologies.join(", "),onChange:S})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{htmlFor:"category",children:"Category"}),m.jsxs("select",{id:"category",name:"category",value:n.category,onChange:S,children:[m.jsx("option",{value:"ml",children:"Machine Learning"}),m.jsx("option",{value:"data-science",children:"Data Science"}),m.jsx("option",{value:"web",children:"Web Development"}),m.jsx("option",{value:"physics",children:"Physics-Informed ML"}),m.jsx("option",{value:"other",children:"Other"})]})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{htmlFor:"githubUrl",children:"GitHub URL"}),m.jsx("input",{id:"githubUrl",name:"githubUrl",type:"url",value:n.githubUrl,onChange:S})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{htmlFor:"demoUrl",children:"Demo URL"}),m.jsx("input",{id:"demoUrl",name:"demoUrl",type:"url",value:n.demoUrl,onChange:S})]}),m.jsx("div",{className:"form-group",children:m.jsxs("label",{children:[m.jsx("input",{name:"featured",type:"checkbox",checked:n.featured,onChange:S})," ","Featured Project"]})}),m.jsxs("div",{className:"form-buttons",children:[m.jsx(ud,{type:"submit",variant:"primary",children:s?"Update Project":"Add Project"}),s&&m.jsx(ud,{type:"button",onClick:L,children:"Cancel"})]})]}),m.jsx("h2",{children:"Projects List"}),y?m.jsx("p",{children:"Loading projects..."}):m.jsx(EB,{children:t.length===0?m.jsx("p",{children:"No projects found. Add your first project above."}):t.map(D=>m.jsxs(TB,{children:[m.jsxs("div",{className:"project-info",children:[m.jsx("h3",{children:D.title}),m.jsxs("p",{children:[D.description.substring(0,100),"..."]}),m.jsxs("p",{children:["Category: ",D.category]})]}),m.jsxs("div",{className:"project-actions",children:[m.jsx(ud,{onClick:()=>$(D),children:"Edit"}),m.jsx(ud,{variant:"danger",onClick:()=>B(D.id,D.imageUrl),children:"Delete"})]})]},D.id))})]})},bB=F.div`
  padding: 20px;
`,PB=F.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 15px;
`,CB=F.div`
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
`,hd=F.button`
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
`,AB=F.form`
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
`,nT={name:"",category:"machine-learning",proficiency:80,description:"",yearsExperience:1},kB=()=>{const[t,e]=M.useState([]),[n,r]=M.useState(nT),[s,a]=M.useState(!1),[l,u]=M.useState(null),[d,p]=M.useState(!1);M.useEffect(()=>{y()},[]);const y=async()=>{p(!0);try{const P=Cn(ct,"skills"),B=(await Kr(P)).docs.map(L=>({id:L.id,...L.data()}));e(B)}catch(P){console.error("Error fetching skills:",P)}finally{p(!1)}},w=P=>{const{name:$,value:B,type:L}=P.target;r(L==="number"||$==="proficiency"?{...n,[$]:Number(B)}:{...n,[$]:B})},x=async P=>{P.preventDefault(),p(!0);try{const $={...n,updatedAt:new Date};if(s&&l){const B=Or(ct,"skills",l);await pu(B,$)}else await Lf(Cn(ct,"skills"),{...$,createdAt:new Date});C(),y()}catch($){console.error("Error saving skill:",$)}finally{p(!1)}},S=P=>{r({name:P.name,category:P.category,proficiency:P.proficiency,description:P.description,yearsExperience:P.yearsExperience}),u(P.id),a(!0)},A=async P=>{if(window.confirm("Are you sure you want to delete this skill?")){p(!0);try{await mu(Or(ct,"skills",P)),y()}catch($){console.error("Error deleting skill:",$)}finally{p(!1)}}},C=()=>{r(nT),a(!1),u(null)};return m.jsxs(bB,{children:[m.jsx("h1",{children:"Manage Skills"}),m.jsxs(AB,{onSubmit:x,children:[m.jsx("h2",{children:s?"Edit Skill":"Add New Skill"}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{htmlFor:"name",children:"Skill Name"}),m.jsx("input",{id:"name",name:"name",type:"text",value:n.name,onChange:w,required:!0})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{htmlFor:"category",children:"Category"}),m.jsxs("select",{id:"category",name:"category",value:n.category,onChange:w,children:[m.jsx("option",{value:"machine-learning",children:"Machine Learning"}),m.jsx("option",{value:"data-science",children:"Data Science"}),m.jsx("option",{value:"web-development",children:"Web Development"}),m.jsx("option",{value:"physics",children:"Physics"}),m.jsx("option",{value:"programming",children:"Programming Languages"}),m.jsx("option",{value:"tools",children:"Tools & Frameworks"})]})]}),m.jsxs("div",{className:"form-group",children:[m.jsxs("label",{htmlFor:"proficiency",children:["Proficiency (",n.proficiency,"%)"]}),m.jsx("input",{id:"proficiency",name:"proficiency",type:"range",min:"0",max:"100",value:n.proficiency,onChange:w})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{htmlFor:"yearsExperience",children:"Years of Experience"}),m.jsx("input",{id:"yearsExperience",name:"yearsExperience",type:"number",min:"0",step:"0.5",value:n.yearsExperience,onChange:w,required:!0})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{htmlFor:"description",children:"Description"}),m.jsx("textarea",{id:"description",name:"description",value:n.description,onChange:w,rows:3})]}),m.jsxs("div",{className:"form-buttons",children:[m.jsx(hd,{type:"submit",variant:"primary",children:s?"Update Skill":"Add Skill"}),s&&m.jsx(hd,{type:"button",onClick:C,children:"Cancel"})]})]}),m.jsx("h2",{children:"Skills List"}),d?m.jsx("p",{children:"Loading skills..."}):m.jsx(PB,{children:t.length===0?m.jsx("p",{children:"No skills found. Add your first skill above."}):t.map(P=>m.jsxs(CB,{children:[m.jsxs("h3",{children:[P.name,m.jsxs("small",{children:["(",P.category,")"]})]}),m.jsx("div",{className:"progress",children:m.jsx("div",{className:"progress-bar",style:{width:`${P.proficiency}%`}})}),m.jsx("p",{children:P.description}),m.jsxs("p",{children:["Experience: ",P.yearsExperience," ",P.yearsExperience===1?"year":"years"]}),m.jsxs("div",{className:"actions",children:[m.jsx(hd,{onClick:()=>S(P),children:"Edit"}),m.jsx(hd,{variant:"danger",onClick:()=>A(P.id),children:"Delete"})]})]},P.id))})]})},RB=F.div`
  padding: 20px;
`,DB=F.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
`,jB=F.div`
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
`,dd=F.button`
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
`,NB=F.form`
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
`,rT={title:"",authors:[],abstract:"",publication:"",publicationDate:"",doi:"",pdfUrl:"",category:"physics-informed-ml",tags:[],featured:!1},OB=()=>{const[t,e]=M.useState([]),[n,r]=M.useState(rT),[s,a]=M.useState(!1),[l,u]=M.useState(null),[d,p]=M.useState(null),[y,w]=M.useState(!1);M.useEffect(()=>{x()},[]);const x=async()=>{w(!0);try{const D=Cn(ct,"research"),J=(await Kr(D)).docs.map(k=>({id:k.id,...k.data()}));e(J)}catch(D){console.error("Error fetching research items:",D)}finally{w(!1)}},S=D=>{const{name:q,value:J,type:k}=D.target;if(q==="authors"||q==="tags")r({...n,[q]:J.split(",").map(b=>b.trim())});else if(k==="checkbox"){const b=D.target;r({...n,[q]:b.checked})}else r({...n,[q]:J})},A=D=>{D.target.files&&D.target.files[0]&&p(D.target.files[0])},C=async D=>{const q=tl(nl,`research/${Date.now()}_${D.name}`);return await jv(q,D),Nv(q)},P=async D=>{D.preventDefault(),w(!0);try{let q=n.pdfUrl;d&&(q=await C(d));const J={...n,pdfUrl:q,updatedAt:new Date};if(s&&l){const k=Or(ct,"research",l);await pu(k,J)}else await Lf(Cn(ct,"research"),{...J,createdAt:new Date});L(),x()}catch(q){console.error("Error saving research item:",q)}finally{w(!1)}},$=D=>{r({title:D.title,authors:D.authors,abstract:D.abstract,publication:D.publication,publicationDate:D.publicationDate,doi:D.doi,pdfUrl:D.pdfUrl,category:D.category,tags:D.tags,featured:D.featured}),u(D.id),a(!0)},B=async(D,q)=>{if(window.confirm("Are you sure you want to delete this research item?")){w(!0);try{if(await mu(Or(ct,"research",D)),q&&q.includes("firebase")){const J=tl(nl,q);await Ov(J)}x()}catch(J){console.error("Error deleting research item:",J)}finally{w(!1)}}},L=()=>{r(rT),p(null),a(!1),u(null)};return m.jsxs(RB,{children:[m.jsx("h1",{children:"Manage Research"}),m.jsxs(NB,{onSubmit:P,children:[m.jsx("h2",{children:s?"Edit Research Item":"Add New Research Item"}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{htmlFor:"title",children:"Title"}),m.jsx("input",{id:"title",name:"title",type:"text",value:n.title,onChange:S,required:!0})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{htmlFor:"authors",children:"Authors (comma-separated)"}),m.jsx("input",{id:"authors",name:"authors",type:"text",value:n.authors.join(", "),onChange:S,required:!0})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{htmlFor:"abstract",children:"Abstract"}),m.jsx("textarea",{id:"abstract",name:"abstract",value:n.abstract,onChange:S,required:!0})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{htmlFor:"publication",children:"Publication/Conference"}),m.jsx("input",{id:"publication",name:"publication",type:"text",value:n.publication,onChange:S})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{htmlFor:"publicationDate",children:"Publication Date"}),m.jsx("input",{id:"publicationDate",name:"publicationDate",type:"date",value:n.publicationDate,onChange:S})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{htmlFor:"doi",children:"DOI"}),m.jsx("input",{id:"doi",name:"doi",type:"text",value:n.doi,onChange:S})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{htmlFor:"pdf",children:"PDF File"}),m.jsx("input",{id:"pdf",name:"pdf",type:"file",accept:".pdf",onChange:A}),n.pdfUrl&&m.jsx("div",{style:{marginTop:"10px"},children:m.jsx("a",{href:n.pdfUrl,target:"_blank",rel:"noopener noreferrer",children:"View Current PDF"})})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{htmlFor:"category",children:"Category"}),m.jsxs("select",{id:"category",name:"category",value:n.category,onChange:S,children:[m.jsx("option",{value:"physics-informed-ml",children:"Physics-Informed ML"}),m.jsx("option",{value:"machine-learning",children:"Machine Learning"}),m.jsx("option",{value:"data-science",children:"Data Science"}),m.jsx("option",{value:"physics",children:"Physics"}),m.jsx("option",{value:"other",children:"Other"})]})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{htmlFor:"tags",children:"Tags (comma-separated)"}),m.jsx("input",{id:"tags",name:"tags",type:"text",value:n.tags.join(", "),onChange:S})]}),m.jsx("div",{className:"form-group",children:m.jsxs("label",{children:[m.jsx("input",{name:"featured",type:"checkbox",checked:n.featured,onChange:S})," ","Featured Research"]})}),m.jsxs("div",{className:"form-buttons",children:[m.jsx(dd,{type:"submit",variant:"primary",children:s?"Update Research Item":"Add Research Item"}),s&&m.jsx(dd,{type:"button",onClick:L,children:"Cancel"})]})]}),m.jsx("h2",{children:"Research List"}),y?m.jsx("p",{children:"Loading research items..."}):m.jsx(DB,{children:t.length===0?m.jsx("p",{children:"No research items found. Add your first research item above."}):t.map(D=>m.jsxs(jB,{children:[m.jsx("h3",{children:D.title}),m.jsxs("div",{className:"publication-meta",children:[m.jsxs("div",{children:["Authors: ",D.authors.join(", ")]}),D.publication&&m.jsxs("div",{children:["Publication: ",D.publication]}),D.publicationDate&&m.jsxs("div",{children:["Date: ",new Date(D.publicationDate).toLocaleDateString()]}),D.doi&&m.jsxs("div",{children:["DOI: ",D.doi]})]}),m.jsxs("p",{children:[D.abstract.substring(0,200),"..."]}),D.tags.length>0&&m.jsxs("div",{style:{marginTop:"10px"},children:["Tags: ",D.tags.join(", ")]}),m.jsxs("div",{className:"actions",children:[m.jsx(dd,{onClick:()=>$(D),children:"Edit"}),m.jsx(dd,{variant:"danger",onClick:()=>B(D.id,D.pdfUrl),children:"Delete"})]})]},D.id))})]})},LB=F.div`
  padding: 20px;
`,VB=F.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
`,MB=F.div`
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
`,_c=F.button`
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
`,FB=F.form`
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
`,iT={title:"",slug:"",content:"",excerpt:"",imageUrl:"",publishDate:new Date().toISOString().split("T")[0],tags:[],category:"machine-learning",featured:!1},UB=()=>{const[t,e]=M.useState([]),[n,r]=M.useState(iT),[s,a]=M.useState(!1),[l,u]=M.useState(null),[d,p]=M.useState(null),[y,w]=M.useState(!1);M.useEffect(()=>{x()},[]);const x=async()=>{w(!0);try{const q=Cn(ct,"blog"),k=(await Kr(q)).docs.map(b=>({id:b.id,...b.data()}));e(k)}catch(q){console.error("Error fetching blog posts:",q)}finally{w(!1)}},S=q=>{const{name:J,value:k,type:b}=q.target;if(J==="tags")r({...n,[J]:k.split(",").map(R=>R.trim())});else if(b==="checkbox"){const R=q.target;r({...n,[J]:R.checked})}else r({...n,[J]:k})},A=q=>{q.target.files&&q.target.files[0]&&p(q.target.files[0])},C=async q=>{const J=tl(nl,`blog/${Date.now()}_${q.name}`);return await jv(J,q),Nv(J)},P=async q=>{q.preventDefault(),w(!0);try{let J=n.imageUrl;d&&(J=await C(d));const k={...n,imageUrl:J,updatedAt:new Date};if(s&&l){const b=Or(ct,"blog",l);await pu(b,k)}else await Lf(Cn(ct,"blog"),{...k,createdAt:new Date});D(),x()}catch(J){console.error("Error saving blog post:",J)}finally{w(!1)}},$=q=>{r({title:q.title,slug:q.slug,content:q.content,excerpt:q.excerpt,imageUrl:q.imageUrl,publishDate:q.publishDate,tags:q.tags,category:q.category,featured:q.featured}),u(q.id),a(!0)},B=async(q,J)=>{if(window.confirm("Are you sure you want to delete this blog post?")){w(!0);try{if(await mu(Or(ct,"blog",q)),J&&J.includes("firebase")){const k=tl(nl,J);await Ov(k)}x()}catch(k){console.error("Error deleting blog post:",k)}finally{w(!1)}}},L=()=>{const q=n.title.toLowerCase().replace(/[^\w\s]/gi,"").replace(/\s+/g,"-");r({...n,slug:q})},D=()=>{r(iT),p(null),a(!1),u(null)};return m.jsxs(LB,{children:[m.jsx("h1",{children:"Manage Blog"}),m.jsxs(FB,{onSubmit:P,children:[m.jsx("h2",{children:s?"Edit Blog Post":"Add New Blog Post"}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{htmlFor:"title",children:"Title"}),m.jsx("input",{id:"title",name:"title",type:"text",value:n.title,onChange:S,onBlur:()=>!n.slug&&L(),required:!0})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{htmlFor:"slug",children:"Slug (URL-friendly name)"}),m.jsxs("div",{style:{display:"flex",gap:"10px"},children:[m.jsx("input",{id:"slug",name:"slug",type:"text",value:n.slug,onChange:S,required:!0,style:{flex:1}}),m.jsx(_c,{type:"button",onClick:L,children:"Generate"})]})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{htmlFor:"excerpt",children:"Excerpt"}),m.jsx("textarea",{id:"excerpt",name:"excerpt",value:n.excerpt,onChange:S,rows:2,required:!0})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{htmlFor:"content",children:"Content (Markdown supported)"}),m.jsx("textarea",{id:"content",name:"content",value:n.content,onChange:S,rows:10,required:!0})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{htmlFor:"image",children:"Featured Image"}),m.jsx("input",{id:"image",name:"image",type:"file",accept:"image/*",onChange:A}),n.imageUrl&&m.jsx("div",{style:{marginTop:"10px"},children:m.jsx("img",{src:n.imageUrl,alt:"Featured",style:{maxWidth:"200px",maxHeight:"150px"}})})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{htmlFor:"publishDate",children:"Publish Date"}),m.jsx("input",{id:"publishDate",name:"publishDate",type:"date",value:n.publishDate,onChange:S,required:!0})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{htmlFor:"category",children:"Category"}),m.jsxs("select",{id:"category",name:"category",value:n.category,onChange:S,children:[m.jsx("option",{value:"machine-learning",children:"Machine Learning"}),m.jsx("option",{value:"data-science",children:"Data Science"}),m.jsx("option",{value:"physics-informed-ml",children:"Physics-Informed ML"}),m.jsx("option",{value:"web-development",children:"Web Development"}),m.jsx("option",{value:"tutorials",children:"Tutorials"}),m.jsx("option",{value:"other",children:"Other"})]})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{htmlFor:"tags",children:"Tags (comma-separated)"}),m.jsx("input",{id:"tags",name:"tags",type:"text",value:n.tags.join(", "),onChange:S})]}),m.jsx("div",{className:"form-group",children:m.jsxs("label",{children:[m.jsx("input",{name:"featured",type:"checkbox",checked:n.featured,onChange:S})," ","Featured Post"]})}),m.jsxs("div",{className:"form-buttons",children:[m.jsx(_c,{type:"submit",variant:"primary",children:s?"Update Post":"Publish Post"}),s&&m.jsx(_c,{type:"button",onClick:D,children:"Cancel"})]})]}),m.jsx("h2",{children:"Blog Posts"}),y?m.jsx("p",{children:"Loading blog posts..."}):m.jsx(VB,{children:t.length===0?m.jsx("p",{children:"No blog posts found. Add your first post above."}):t.map(q=>m.jsxs(MB,{children:[m.jsx("h3",{children:q.title}),m.jsxs("div",{className:"post-meta",children:[m.jsxs("div",{children:["Published: ",new Date(q.publishDate).toLocaleDateString()]}),m.jsxs("div",{children:["Category: ",q.category]}),q.tags.length>0&&m.jsxs("div",{children:["Tags: ",q.tags.join(", ")]})]}),m.jsx("p",{children:q.excerpt}),m.jsxs("div",{className:"actions",children:[m.jsx(_c,{onClick:()=>$(q),children:"Edit"}),m.jsx(_c,{variant:"danger",onClick:()=>B(q.id,q.imageUrl),children:"Delete"})]})]},q.id))})]})},BB=F.div`
  padding: 20px;
`,zB=F.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
`,$B=F.div`
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
`,sT=F.button`
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
`,WB=F.div`
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
`,HB=()=>{const[t,e]=M.useState([]),[n,r]=M.useState(!1),[s,a]=M.useState("all");M.useEffect(()=>{l()},[]);const l=async()=>{r(!0);try{const x=Cn(ct,"messages"),A=(await Kr(x)).docs.map(C=>({id:C.id,...C.data()}));A.sort((C,P)=>{var L,D,q,J;const $=((D=(L=C.createdAt)==null?void 0:L.toDate)==null?void 0:D.call(L))||new Date(C.createdAt);return(((J=(q=P.createdAt)==null?void 0:q.toDate)==null?void 0:J.call(q))||new Date(P.createdAt)).getTime()-$.getTime()}),e(A)}catch(x){console.error("Error fetching messages:",x)}finally{r(!1)}},u=async(x,S)=>{try{const A=Or(ct,"messages",x);await pu(A,{read:!S}),e(C=>C.map(P=>P.id===x?{...P,read:!S}:P))}catch(A){console.error("Error updating message status:",A)}},d=async x=>{if(window.confirm("Are you sure you want to delete this message?"))try{await mu(Or(ct,"messages",x)),e(S=>S.filter(A=>A.id!==x))}catch(S){console.error("Error deleting message:",S)}},p=t.filter(x=>s==="all"?!0:s==="read"?x.read:s==="unread"?!x.read:!0),y=x=>{if(!x)return"Unknown Date";try{const S=x.toDate?x.toDate():new Date(x);return S.toLocaleDateString()+" "+S.toLocaleTimeString()}catch{return"Invalid Date"}},w=t.filter(x=>!x.read).length;return m.jsxs(BB,{children:[m.jsx("h1",{children:"Contact Messages"}),m.jsxs("p",{children:["You have ",w," unread message",w!==1?"s":"","."]}),m.jsx(WB,{children:m.jsxs("div",{className:"filter-item",children:[m.jsx("label",{htmlFor:"status-filter",children:"Status:"}),m.jsxs("select",{id:"status-filter",value:s,onChange:x=>a(x.target.value),children:[m.jsx("option",{value:"all",children:"All Messages"}),m.jsx("option",{value:"unread",children:"Unread"}),m.jsx("option",{value:"read",children:"Read"})]})]})}),n?m.jsx("p",{children:"Loading messages..."}):m.jsx(zB,{children:p.length===0?m.jsx("p",{children:"No messages found."}):p.map(x=>m.jsxs($B,{children:[m.jsxs("h3",{children:[x.subject||"No Subject",!x.read&&m.jsx("span",{style:{backgroundColor:"#3182ce",color:"white",fontSize:"0.8rem",padding:"3px 8px",borderRadius:"10px",marginLeft:"10px"},children:"New"})]}),m.jsxs("div",{className:"message-meta",children:[m.jsxs("div",{children:["From: ",x.name," (",x.email,")"]}),m.jsxs("div",{children:["Received: ",y(x.createdAt)]})]}),m.jsx("p",{style:{whiteSpace:"pre-wrap"},children:x.message}),m.jsxs("div",{className:"actions",children:[m.jsxs(sT,{onClick:()=>u(x.id,x.read),children:["Mark as ",x.read?"Unread":"Read"]}),m.jsx(sT,{variant:"danger",onClick:()=>d(x.id),children:"Delete"})]})]},x.id))})]})},qB=F.div`
  max-width: 500px;
  margin: 60px auto;
  padding: 30px;
  background: ${({theme:t})=>t==="dark"?"#2d2d2d":"#f5f5f5"};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`,GB=F.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,oT=F.div`
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
`,AP=F.button`
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
`,KB=F(AP)`
  background-color: #4285f4;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  
  &:hover {
    background-color: #3367d6;
  }
`,QB=F.div`
  color: #e53e3e;
  padding: 10px;
  background-color: rgba(229, 62, 62, 0.1);
  border-radius: 4px;
  margin-bottom: 10px;
`,YB=()=>{const[t,e]=M.useState(""),[n,r]=M.useState(""),[s,a]=M.useState(null),[l,u]=M.useState(!1),d=Vy(),p=async w=>{w.preventDefault(),u(!0),a(null);try{await P4(Nc,t,n),d("/admin")}catch(x){a("Invalid email or password. Please try again."),console.error(x)}finally{u(!1)}},y=async()=>{u(!0),a(null);try{await p2(Nc,yI),d("/admin")}catch(w){a("Google sign-in failed. Please try again."),console.error(w)}finally{u(!1)}};return m.jsxs(qB,{children:[m.jsx("h1",{children:"Admin Login"}),s&&m.jsx(QB,{children:s}),m.jsxs(GB,{onSubmit:p,children:[m.jsxs(oT,{children:[m.jsx("label",{htmlFor:"email",children:"Email"}),m.jsx("input",{id:"email",type:"email",value:t,onChange:w=>e(w.target.value),required:!0})]}),m.jsxs(oT,{children:[m.jsx("label",{htmlFor:"password",children:"Password"}),m.jsx("input",{id:"password",type:"password",value:n,onChange:w=>r(w.target.value),required:!0})]}),m.jsx(AP,{type:"submit",disabled:l,children:l?"Signing in...":"Sign in with Email"})]}),m.jsx("div",{style:{margin:"20px 0",textAlign:"center"},children:"or"}),m.jsx(KB,{type:"button",onClick:y,disabled:l,children:"Sign in with Google"})]})},XB=({children:t})=>{const{user:e,loading:n,isAdmin:r}=EP();return n?m.jsx("div",{className:"container",children:"Loading..."}):!e||!r?m.jsx(NA,{to:"/login",replace:!0}):m.jsx(m.Fragment,{children:t})};function JB(){const{theme:t}=Bv();return M.useEffect(()=>{try{gI(bO,"page_view")}catch(e){console.log("Analytics error:",e)}},[]),m.jsx("div",{className:`app ${t}`,children:m.jsxs(LA,{children:[m.jsxs(Yt,{path:"/",element:m.jsx(A8,{}),children:[m.jsx(Yt,{index:!0,element:m.jsx(m7,{})}),m.jsx(Yt,{path:"projects",element:m.jsx(k7,{})}),m.jsx(Yt,{path:"projects/:slug",element:m.jsx(W7,{})}),m.jsx(Yt,{path:"research",element:m.jsx(sU,{})}),m.jsx(Yt,{path:"blog",element:m.jsx(IU,{})}),m.jsx(Yt,{path:"contact",element:m.jsx(fB,{})}),m.jsx(Yt,{path:"login",element:m.jsx(YB,{})}),m.jsx(Yt,{path:"*",element:m.jsx(gB,{})})]}),m.jsxs(Yt,{path:"/admin",element:m.jsx(XB,{children:m.jsx(Q8,{})}),children:[m.jsx(Yt,{index:!0,element:m.jsx(wB,{})}),m.jsx(Yt,{path:"projects",element:m.jsx(IB,{})}),m.jsx(Yt,{path:"skills",element:m.jsx(kB,{})}),m.jsx(Yt,{path:"research",element:m.jsx(OB,{})}),m.jsx(Yt,{path:"blog",element:m.jsx(UB,{})}),m.jsx(Yt,{path:"contact",element:m.jsx(HB,{})})]})]})})}const ZB=CL`
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
`;$C.createRoot(document.getElementById("root")).render(m.jsx(Me.StrictMode,{children:m.jsx(PO,{children:m.jsx(k8,{children:m.jsxs(WA,{children:[m.jsx(ZB,{}),m.jsx(JB,{})]})})})}));
//# sourceMappingURL=index-DqFl_C65.js.map
