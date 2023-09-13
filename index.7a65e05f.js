var e,t,r,n,i,a,o,s,c,u,l,f,p,h,d="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function g(e){return e&&e.__esModule?e.default:e}var v={},y={},m=d.parcelRequire7e89;null==m&&((m=function(e){if(e in v)return v[e].exports;if(e in y){var t=y[e];delete y[e];var r={id:e,exports:{}};return v[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){y[e]=t},d.parcelRequire7e89=m);var _={},b=function(e){return e&&e.Math==Math&&e};// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
_=b("object"==typeof globalThis&&globalThis)||b("object"==typeof window&&window)||// eslint-disable-next-line no-restricted-globals -- safe
b("object"==typeof self&&self)||b("object"==typeof d&&d)||// eslint-disable-next-line no-new-func -- fallback
function(){return this}()||Function("return this")();var w={},k={};// Detect IE8's incomplete defineProperty implementation
w=!(k=function(e){try{return!!e()}catch(e){return!0}})(function(){// eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]});var E={},S={},$={};// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
$=function(e){return"function"==typeof e};var O={},P={},j={};j=!k(function(){// eslint-disable-next-line es-x/no-function-prototype-bind -- safe
var e=(function(){}).bind();// eslint-disable-next-line no-prototype-builtins -- safe
return"function"!=typeof e||e.hasOwnProperty("prototype")});var x=Function.prototype,L=x.bind,M=x.call,T=j&&L.bind(M,M);P=j?function(e){return e&&T(e)}:function(e){return e&&function(){return M.apply(e,arguments)}};var I={},N={},F=TypeError;// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
N=function(e){if(void 0==e)throw F("Can't call method on "+e);return e};var C=Object;// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
I=function(e){return C(N(e))};var q=P({}.hasOwnProperty);// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es-x/no-object-hasown -- safe
O=Object.hasOwn||function(e,t){return q(I(e),t)};var R=Function.prototype,H=w&&Object.getOwnPropertyDescriptor,A=O(R,"name")&&(!w||w&&H(R,"name").configurable),D={},G={},B={},z=Object.defineProperty;B=function(e,t){try{z(_,e,{value:t,configurable:!0,writable:!0})}catch(r){_[e]=t}return t};var U="__core-js_shared__";G=_[U]||B(U,{});var Q=P(Function.toString);$(G.inspectSource)||(G.inspectSource=function(e){return Q(e)}),D=G.inspectSource;var W={},Y={},J=_.WeakMap;Y=$(J)&&/native code/.test(D(J));var V={};V=function(e){return"object"==typeof e?null!==e:$(e)};var K={},X={},Z={},ee=_.document,et=V(ee)&&V(ee.createElement);Z=function(e){return et?ee.createElement(e):{}},// Thanks to IE8 for its funny defineProperty
X=!w&&!k(function(){// eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
return 7!=Object.defineProperty(Z("div"),"a",{get:function(){return 7}}).a});var er={};// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
er=w&&k(function(){// eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
return 42!=Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var en={},ei=String,ea=TypeError;// `Assert: Type(argument) is Object`
en=function(e){if(V(e))return e;throw ea(ei(e)+" is not an object")};var eo={},es={},ec={},eu=Function.prototype.call;ec=j?eu.bind(eu):function(){return eu.apply(eu,arguments)};var el={},ef={};ef=function(e,t){var r;return arguments.length<2?(r=_[e],$(r)?r:void 0):_[e]&&_[e][t]};var ep={};ep=P({}.isPrototypeOf);var eh={},ed={},eg={},ev={};ev=ef("navigator","userAgent")||"";var ey=_.process,em=_.Deno,e_=ey&&ey.versions||em&&em.version,eb=e_&&e_.v8;eb&&// in old Chrome, versions of V8 isn't V8 = Chrome / 10
// but their correct versions are not interesting for us
(r=(t=eb.split("."))[0]>0&&t[0]<4?1:+(t[0]+t[1])),!r&&ev&&(!(t=ev.match(/Edge\/(\d+)/))||t[1]>=74)&&(t=ev.match(/Chrome\/(\d+)/))&&(r=+t[1]),eg=r;var ew=Object;el=(eh=// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- required for testing
(ed=!!Object.getOwnPropertySymbols&&!k(function(){var e=Symbol();// Chrome 38 Symbol has incorrect toString conversion
// `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
return!String(e)||!(Object(e) instanceof Symbol)||// Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
!Symbol.sham&&eg&&eg<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator)?function(e){return"symbol"==typeof e}:function(e){var t=ef("Symbol");return $(t)&&ep(t.prototype,ew(e))};var ek={},eE={},eS={},e$=String;eS=function(e){try{return e$(e)}catch(e){return"Object"}};var eO=TypeError;// `Assert: IsCallable(argument) is true`
eE=function(e){if($(e))return e;throw eO(eS(e)+" is not a function")},// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
ek=function(e,t){var r=e[t];return null==r?void 0:eE(r)};var eP={},ej=TypeError;// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
eP=function(e,t){var r,n;if("string"===t&&$(r=e.toString)&&!V(n=ec(r,e))||$(r=e.valueOf)&&!V(n=ec(r,e))||"string"!==t&&$(r=e.toString)&&!V(n=ec(r,e)))return n;throw ej("Can't convert object to primitive value")};var ex={},eL={};eL=!1,(ex=function(e,t){return G[e]||(G[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.24.1",mode:eL?"pure":"global",copyright:"\xa9 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.24.1/LICENSE",source:"https://github.com/zloirock/core-js"});var eM={},eT=0,eI=Math.random(),eN=P(1..toString);eM=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eN(++eT+eI,36)};var eF=ex("wks"),eC=_.Symbol,eq=eC&&eC.for,eR=eh?eC:eC&&eC.withoutSetter||eM,eH=TypeError,eA=function(e){if(!O(eF,e)||!(ed||"string"==typeof eF[e])){var t="Symbol."+e;ed&&O(eC,e)?eF[e]=eC[e]:eh&&eq?eF[e]=eq(t):eF[e]=eR(t)}return eF[e]}("toPrimitive");// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
es=function(e,t){if(!V(e)||el(e))return e;var r,n=ek(e,eA);if(n){if(void 0===t&&(t="default"),r=ec(n,e,t),!V(r)||el(r))return r;throw eH("Can't convert object to primitive value")}return void 0===t&&(t="number"),eP(e,t)},// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
eo=function(e){var t=es(e,"string");return el(t)?t:t+""};var eD=TypeError,eG=Object.defineProperty,eB=Object.getOwnPropertyDescriptor,ez="enumerable",eU="configurable",eQ="writable";e=w?er?function(e,t,r){if(en(e),t=eo(t),en(r),"function"==typeof e&&"prototype"===t&&"value"in r&&eQ in r&&!r[eQ]){var n=eB(e,t);n&&n[eQ]&&(e[t]=r.value,r={configurable:eU in r?r[eU]:n[eU],enumerable:ez in r?r[ez]:n[ez],writable:!1})}return eG(e,t,r)}:eG:function(e,t,r){if(en(e),t=eo(t),en(r),X)try{return eG(e,t,r)}catch(e){}if("get"in r||"set"in r)throw eD("Accessors not supported");return"value"in r&&(e[t]=r.value),e};var eW={};eW=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},K=w?function(t,r,n){return e(t,r,eW(1,n))}:function(e,t,r){return e[t]=r,e};var eY={},eJ=ex("keys");eY=function(e){return eJ[e]||(eJ[e]=eM(e))};var eV={};eV={};var eK="Object already initialized",eX=_.TypeError,eZ=_.WeakMap;if(Y||G.state){var e0=G.state||(G.state=new eZ),e1=P(e0.get),e9=P(e0.has),e2=P(e0.set);n=function(e,t){if(e9(e0,e))throw new eX(eK);return t.facade=e,e2(e0,e,t),t},i=function(e){return e1(e0,e)||{}},a=function(e){return e9(e0,e)}}else{var e4=eY("state");eV[e4]=!0,n=function(e,t){if(O(e,e4))throw new eX(eK);return t.facade=e,K(e,e4,t),t},i=function(e){return O(e,e4)?e[e4]:{}},a=function(e){return O(e,e4)}}var e7=(W={set:n,get:i,has:a,enforce:function(e){return a(e)?i(e):n(e,{})},getterFor:function(e){return function(t){var r;if(!V(t)||(r=i(t)).type!==e)throw eX("Incompatible receiver, "+e+" required");return r}}}).enforce,e3=W.get,e8=Object.defineProperty,e5=w&&!k(function(){return 8!==e8(function(){},"length",{value:8}).length}),e6=String(String).split("String"),te=S=function(e,t,r){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!O(e,"name")||A&&e.name!==t)&&(w?e8(e,"name",{value:t,configurable:!0}):e.name=t),e5&&r&&O(r,"arity")&&e.length!==r.arity&&e8(e,"length",{value:r.arity});try{r&&O(r,"constructor")&&r.constructor?w&&e8(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=e7(e);return O(n,"source")||(n.source=e6.join("string"==typeof t?t:"")),e};// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString=te(function(){return $(this)&&e3(this).source||D(this)},"toString"),E=function(t,r,n){return n.get&&S(n.get,r,{getter:!0}),n.set&&S(n.set,r,{setter:!0}),e(t,r,n)};var tt={};// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
tt=function(){var e=en(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t};// babel-minify and Closure Compiler transpiles RegExp('.', 'd') -> /./d and it causes SyntaxError
var tr=_.RegExp,tn=tr.prototype;w&&k(function(){var e=!0;try{tr(".","d")}catch(t){e=!1}var t={},r="",n=e?"dgimsy":"gimsy",i=function(e,n){// eslint-disable-next-line es-x/no-object-defineproperty -- safe
Object.defineProperty(t,e,{get:function(){return r+=n,!0}})},a={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var o in e&&(a.hasIndices="d"),a)i(o,a[o]);return Object.getOwnPropertyDescriptor(tn,"flags").get.call(t)!==n||r!==n})&&E(tn,"flags",{configurable:!0,get:tt});// TODO: Remove this module from `core-js@4` since it's split to modules listed below
var ti={},ta={}.propertyIsEnumerable,to=Object.getOwnPropertyDescriptor;s=to&&!ta.call({1:2},1)?function(e){var t=to(this,e);return!!t&&t.enumerable}:ta;var ts={},tc={},tu={},tl=P({}.toString),tf=P("".slice);tu=function(e){return tf(tl(e),8,-1)};var tp=Object,th=P("".split);// fallback for non-array-like ES3 and non-enumerable old V8 strings
tc=k(function(){// throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
// eslint-disable-next-line no-prototype-builtins -- safe
return!tp("z").propertyIsEnumerable(0)})?function(e){return"String"==tu(e)?th(e,""):tp(e)}:tp,ts=function(e){return tc(N(e))};// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var td=Object.getOwnPropertyDescriptor;o=w?td:function(e,t){if(e=ts(e),t=eo(t),X)try{return td(e,t)}catch(e){}if(O(e,t))return eW(!ec(s,e,t),e[t])};var tg={};tg=function(t,r,n,i){i||(i={});var a=i.enumerable,o=void 0!==i.name?i.name:r;if($(n)&&S(n,o,i),i.global)a?t[r]=n:B(r,n);else{try{i.unsafe?t[r]&&(a=!0):delete t[r]}catch(e){}a?t[r]=n:e(t,r,{value:n,enumerable:!1,configurable:!i.nonConfigurable,writable:!i.nonWritable})}return t};var tv={},ty={},tm={},t_={},tb={},tw={},tk=Math.ceil,tE=Math.floor;// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es-x/no-math-trunc -- safe
tw=Math.trunc||function(e){var t=+e;return(t>0?tE:tk)(t)},// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
tb=function(e){var t=+e;// eslint-disable-next-line no-self-compare -- NaN check
return t!=t||0===t?0:tw(t)};var tS=Math.max,t$=Math.min;// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
t_=function(e,t){var r=tb(e);return r<0?tS(r+t,0):t$(r,t)};var tO={},tP={},tj=Math.min;// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
tP=function(e){return e>0?tj(tb(e),9007199254740991):0;// 2 ** 53 - 1 == 9007199254740991
},// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
tO=function(e){return tP(e.length)};// `Array.prototype.{ indexOf, includes }` methods implementation
var tx=function(e){return function(t,r,n){var i,a=ts(t),o=tO(a),s=t_(n,o);// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare -- NaN check
if(e&&r!=r){for(;o>s;)// eslint-disable-next-line no-self-compare -- NaN check
if((i=a[s++])!=i)return!0;// Array#indexOf ignores holes, Array#includes - not
}else for(;o>s;s++)if((e||s in a)&&a[s]===r)return e||s||0;return!e&&-1}},tL={// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
includes:tx(!0),// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
indexOf:tx(!1)}.indexOf,tM=P([].push);tm=function(e,t){var r,n=ts(e),i=0,a=[];for(r in n)!O(eV,r)&&O(n,r)&&tM(a,r);// Don't enum bug & hidden keys
for(;t.length>i;)O(n,r=t[i++])&&(~tL(a,r)||tM(a,r));return a};var tT=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");c=Object.getOwnPropertyNames||function(e){return tm(e,tT)},u=Object.getOwnPropertySymbols;var tI=P([].concat);// all object keys, includes non-enumerable and symbols
ty=ef("Reflect","ownKeys")||function(e){var t=c(en(e));return u?tI(t,u(e)):t},tv=function(t,r,n){for(var i=ty(r),a=0;a<i.length;a++){var s=i[a];O(t,s)||n&&O(n,s)||e(t,s,o(r,s))}};var tN={},tF=/#|\.prototype\./,tC=function(e,t){var r=tR[tq(e)];return r==tA||r!=tH&&($(t)?k(t):!!t)},tq=tC.normalize=function(e){return String(e).replace(tF,".").toLowerCase()},tR=tC.data={},tH=tC.NATIVE="N",tA=tC.POLYFILL="P";tN=tC,/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/ti=function(e,t){var r,n,i,a,s,c=e.target,u=e.global,l=e.stat;if(r=u?_:l?_[c]||B(c,{}):(_[c]||{}).prototype)for(n in t){// contained in target
if(a=t[n],i=e.dontCallGetSet?(s=o(r,n))&&s.value:r[n],!tN(u?n:c+(l?".":"#")+n,e.forced)&&void 0!==i){if(typeof a==typeof i)continue;tv(a,i)}(e.sham||i&&i.sham)&&K(a,"sham",!0),tg(r,n,a,e)}};var tD={},tG={},tB=Function.prototype,tz=tB.apply,tU=tB.call;// eslint-disable-next-line es-x/no-reflect -- safe
tG="object"==typeof Reflect&&Reflect.apply||(j?tU.bind(tz):function(){return tU.apply(tz,arguments)});var tQ={},tW=P(P.bind);// optional / simple context binding
tQ=function(e,t){return eE(e),void 0===t?e:j?tW(e,t):function(){return e.apply(t,arguments)}};var tY={};tY=ef("document","documentElement");var tJ={};tJ=P([].slice);var tV={},tK=TypeError;tV=function(e,t){if(e<t)throw tK("Not enough arguments");return e};var tX={};tX=/(?:ipad|iphone|ipod).*applewebkit/i.test(ev);var tZ={};tZ="process"==tu(_.process);var t0=_.setImmediate,t1=_.clearImmediate,t9=_.process,t2=_.Dispatch,t4=_.Function,t7=_.MessageChannel,t3=_.String,t8=0,t5={},t6="onreadystatechange";try{// Deno throws a ReferenceError on `location` access without `--location` flag
l=_.location}catch(e){}var re=function(e){if(O(t5,e)){var t=t5[e];delete t5[e],t()}},rt=function(e){return function(){re(e)}},rr=function(e){re(e.data)},rn=function(e){// old engines have not location.origin
_.postMessage(t3(e),l.protocol+"//"+l.host)};t0&&t1||(t0=function(e){tV(arguments.length,1);var t=$(e)?e:t4(e),r=tJ(arguments,1);return t5[++t8]=function(){tG(t,void 0,r)},f(t8),t8},t1=function(e){delete t5[e]},tZ?f=function(e){t9.nextTick(rt(e))}:t2&&t2.now?f=function(e){t2.now(rt(e))}:t7&&!tX?(h=(p=new t7).port2,p.port1.onmessage=rr,f=tQ(h.postMessage,h)):_.addEventListener&&$(_.postMessage)&&!_.importScripts&&l&&"file:"!==l.protocol&&!k(rn)?(f=rn,_.addEventListener("message",rr,!1)):f=t6 in Z("script")?function(e){tY.appendChild(Z("script"))[t6]=function(){tY.removeChild(this),re(e)}}:function(e){setTimeout(rt(e),0)});var ri=(tD={set:t0,clear:t1}).clear;// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
ti({global:!0,bind:!0,enumerable:!0,forced:_.clearImmediate!==ri},{clearImmediate:ri});var ra=tD.set;// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
ti({global:!0,bind:!0,enumerable:!0,forced:_.setImmediate!==ra},{setImmediate:ra});const ro="https://forkify-api.herokuapp.com/api/v2/recipes",rs="48e340b9-78e4-4b98-afa4-fff4452133bd",rc=async(e,t)=>{try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),i=await n.json();if(!n.ok)throw Error("Failed to fetch");return i}catch(e){throw e}},ru={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},rl=e=>{let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,bookmarked:!1,...t.key&&{key:t.key}}},rf=async e=>{try{let t=ru.bookmarks.find(t=>t.id===e);if(t)ru.recipe=t;else{let t=await rc(`${ro}/${e}?key=${rs}`);ru.recipe=rl(t)}}catch(e){throw e}},rp=async e=>{try{ru.search.query=e;let t=await rc(`${ro}?search=${e}&key=${rs}`);console.log(t.data.recipes),ru.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}})),console.log(ru)}catch(e){throw e}},rh=(e=ru.search.page)=>{ru.search.page=e;let t=(e-1)*ru.search.resultsPerPage,r=e*ru.search.resultsPerPage;return ru.search.results.slice(t,r)},rd=e=>{ru.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/ru.recipe.servings}),ru.recipe.servings=e},rg=()=>localStorage.setItem("bookmarks",JSON.stringify(ru.bookmarks)),rv=e=>{// Add bookmark 
ru.bookmarks.push(e),e.id===ru.recipe.id&&(ru.recipe.bookmarked=!0),rg()},ry=e=>{let t=ru.bookmarks.findIndex(t=>t.id===e);ru.bookmarks.splice(t,1),e===ru.recipe.id&&(ru.recipe.bookmarked=!1),rg()};(()=>{let e=localStorage.getItem("bookmarks");e&&(ru.bookmarks=JSON.parse(e))})();var rm={};rm=new URL(m("dRo73").resolve("iVQ3h"),import.meta.url).toString();class r_{// Variables
_data;icons=/*@__PURE__*/g(rm);// Clearing Feild 
_clear(){this._parentElement.innerHTML=""}// Inserting html
_insert(e){this._parentElement.insertAdjacentHTML("afterbegin",e)}// Checking if data is not empty
_isNotData(e){return!e||Array.isArray(e)&&0===e.length}// Rendering Functions
render(e,t=!0,r=!0){if(r){if(this._isNotData(e))return this.renderError();this._data=e}let n=this._generateMarkup();if(!t)return n;this._clear(),this._insert(n)}renderSpinner(){let e=this._generateSpinner();this._clear(),this._insert(e)}renderError(e=this._errorMessage){let t=this._generateError(e);this._clear(),this._insert(t)}// Generating html function(s)
_generateSpinner(){return`
        <div class="spinner">
        <svg>
            <use href="${this.icons}#icon-loader"></use>
        </svg>
        </div>
        `}_generateError(e){return`
        <div class="error">
          <div>
            <svg>
              <use href="${this.icons}#icon-alert-triangle"></use>
            </svg>
          </div>
          <p>${e}</p>
        </div>`}// Uppdating view
update(e){if(this._isNotData(e))return;this._data=e;let t=this._generateMarkup(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),n=Array.from(this._parentElement.querySelectorAll("*"));r.forEach((e,t)=>{let r=n[t];// Updating changed element only
e.isEqualNode(r)||(e.firstChild?.nodeValue.trim()!==""&&(r.textContent=e.textContent),e.attributes!==r.attributes&&Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value)))})}}var rb={};//FRACTY REDUCES THE FRACTION.
function rw(e,t,r,n,i){var a,o,s;let c=[2,3,5];//If the numerator isn't from a repeating decimal case, the initialized array of prime numbers will suffice to find the common denominators.
if(!0===i)for(let t=3;t*t<=e;t+=2)e%t==0&&c.push(t);let u=0,l=e,f=t;//Initialize counter over the prime number array for the while loop.
for(;u<=c.length;)l%c[u]==0&&f%c[u]==0?(c[u],l/=c[u],f/=c[u]):u++;return a=f,o=l,s=r,1===a&&1===o?`${s=`${n}${(parseInt(s)+1).toString()}`}`:0===o?`${n}${s}`:"0"==s?`${n}${o}/${a}`:`${n}${s} ${o}/${a}`//If there's an integer and a fraction return both.
}// FRACTY CONVERTS DECIMAL NUMBERS TO FRACTIONS BY ASSUMING THAT TRAILING PATTERNS FROM 10^-2 CONTINUE TO REPEAT
// The assumption is based on the most standard numbering conventions
// e.g. 3.51 will convert to 3 51/100 while 3.511 will convert to 3 23/45
// Throw any number up to 16 digits long at fracty and let fracy do the work.
// If number is beyond 16 digits fracty will truncate at 15 digits to compensate for roundoff errors created in IEEE 754 Floating Point conversion.
rb=function(e){let t,r;if(e<0?(e=Math.abs(e),t="-"):t="",void 0===e)return"Your input was undefined.";if(isNaN(e))return`"${e}" is not a number.`;if(1e16==e)return`${t}9999999999999999`;if(e>1e16)return"Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.";if(Number.isInteger(e))return`${t}${e}`;if(e<1e-6)return"0";let n=e.toString(),i=n.split("."),a=i[0];if("0"==r&&"0"!==a)return a;if("0"==r&&"0"==a)return"0";if("99"==(r=n.length>=17?i[1].slice(0,i[1].length-1):i[1])&&"0"!==a)return`${a} 99/100`;if("99"==r&&"0"==a)return"99/100";if(1-parseFloat(`.${r}`)<.0011&&(r="999"),void 0==r)return a;let o=r.split("").reverse().join(""),s=o.match(/^(\d+)\1{1,2}/);//Reverse the string to look for patterns.
if(!s||!(r.length>2))return(//IF THERE'S NO TRAILING PATTERN FRACTY DIVIDES THE INPUT BY THE NEAREST BASE 10 INTEGER GREATER THAN THE NUMERATOR.
function(e,t,r){let n=parseInt(e,10),i=Math.pow(10,e.length);//Numerator begins as decimal input converted into an integer.
return rw(n,i,t,r,!1);//Reduce the numerator and denominator.
}(r,a,t));//Begin calculating the numerator and denominator for decimals that don't have a pattern.
{let e=s[0].split("").reverse().join(""),n=s[1].split("").reverse().join("");if(n.length>1){let e=n.split(""),t=1;for(let r=0;r<e.length;r++)t/=e[0]/e[r];1===t&&(n=e[0])}return n.length>1&&n.length%2==0&&(n=parseInt(n.slice(0,n.length/2),10)-parseInt(n.slice(n.length/2,n.length),10)==0?n.slice(0,n.length/2):n),//IF THERE'S A TRAILING PATTERN FRACTY DIVIDES THE INPUT BY ONE SUBTRACTED FROM THE NEAREST BASE 10 NUMBER WITH NUMBER OF ZEROS EQUAL TO THE LENGTH OF THE REPEATED PATTERN (I.E. A SERIES OF 9'S) MULTIPLIED BY THE BASE 10 NUMBER GREATER THAN AND CLOSEST TO THE INPUT.
function(e,t,r,n,i){let a=e.length-r.length>=1?e.length-r.length:1,o=Math.pow(10,a),s=parseFloat(`0.${e}`),c=Math.pow(10,t.length),u=Math.round((s*c-s)*Math.pow(10,a));//Does the length of the non pattern segment of the input = 0? If it does, that's incorrect since we know it must equal at least 1, otherwise it's the length of the decimal input minus the length of the full pattern.
return rw(u,(c-1)*o,n,i,!0);//Further reduce the numerator and denominator.
}(r,n,e,a,t);//Begin calculating the numerator and denominator for decimals that have a pattern.
}};class rk extends r_{// Variables
_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one!";_message="Start by searching for a recipe or an ingredient. Have fun!";// Generating html functions
_generateMarkup(){return`
      <figure class="recipe__fig">
        <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
        <h1 class="recipe__title">
          <span>${this._data.title}</span>
        </h1>
      </figure>

      <div class="recipe__details">
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${this.icons}#icon-clock"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
          <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${this.icons}#icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
          <span class="recipe__info-text">servings</span>

          <div class="recipe__info-buttons">
            <button class="btn--tiny btn--update-servings ${this._data.servings-1==0?"btn--dissabled":""}" data-update-to="${this._data.servings-1}">
              <svg>
                <use href="${this.icons}#icon-minus-circle"></use>
              </svg>
            </button>
            <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
              <svg>
                <use href="${this.icons}#icon-plus-circle"></use>
              </svg>
            </button>
          </div>
        </div>

      <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
        <svg>
          <use href="${this.icons}#icon-user"></use>
        </svg>
      </div>
      <button class="btn--round btn--bookmark">
        <svg class="">
          <use href="${this.icons}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
        </svg>
      </button>
    </div>

      <div class="recipe__ingredients">
            <h2 class="heading--2">Recipe ingredients</h2>
            <ul class="recipe__ingredient-list">
              ${this._data.ingredients.map(this._generateMarkupIng,this).join("")}
            </ul>
          </div>

          <div class="recipe__directions">
            <h2 class="heading--2">How to cook it</h2>
            <p class="recipe__directions-text">
              This recipe was carefully designed and tested by
              <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
              directions at their website.
            </p>
            <a
              class="btn--small recipe__btn"
              href="http://thepioneerwoman.com/cooking/pasta-with-tomato-cream-sauce/"
              target="_blank"
            >
              <span>Directions</span>
              <svg class="search__icon">
                <use href="${this.icons}#icon-arrow-right"></use>
              </svg>
            </a>
          </div>
      `}_generateMarkupIng(e){return`
      <li class="recipe__ingredient">
        <svg class="recipe__icon">
          <use href="${this.icons}#icon-check"></use>
        </svg>
        <div class="recipe__quantity">${e.quantity?/*@__PURE__*/g(rb)(e.quantity).toString():""}</div>
        <div class="recipe__description">
          <span class="recipe__unit">${e.unit}</span>
          ${e.description}
        </div>
      </li>
      `}// Handler Function(s) 
addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",t=>{let r=t.target.closest(".btn--update-servings");if(!r)return;let{updateTo:n}=r.dataset;+n>0&&e(+n)})}addHandlerChangeBookmark(e){this._parentElement.addEventListener("click",t=>{let r=t.target.closest(".btn--bookmark");r&&e()})}}var rE=new rk;class rS{_parentEl=document.querySelector(".search");_inputFeild=this._parentEl.querySelector(".search__field");getQuery(){let e=this._inputFeild.value;return this._clearInput(),e}_clearInput(){this._inputFeild.value=""}addHandlerSearch(e){this._parentEl.addEventListener("submit",t=>{t.preventDefault(),e()})}}var r$=new rS,rO=new class extends r_{_generateMarkup(){let e=window.location.hash.slice(1);return`
        <li class="preview">
            <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">
              <figure class="preview__fig">
                <img src="${this._data.image}" alt="Test" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${this._data.title}</h4>
                <p class="preview__publisher">${this._data.publisher}</p>
                <div class="preview__user-generated ${this._data.key?"":"hidden"}">
                  <svg>
                    <use href="${this.icons}#icon-user"></use>
                  </svg>
                </div>
              </div>
            </a>
          </li>
        `}};class rP extends r_{// Variables
_parentElement=document.querySelector(".results");_errorMessage="No recipe found for your Query! Please try again ;)";_message="Start by searching for a recipe or an ingredient. Have fun!";// Generating html functions
_generateMarkup(){return this._data.map(e=>rO.render(e,!1)).join()}}var rj=new rP;class rx extends r_{// Variables
_parentElement=document.querySelector(".pagination");_curPage;_generateMarkup(){this._curPage=this._data.page;let e=Math.ceil(this._data.results.length/this._data.resultsPerPage);return(// Page 1, and there are other pages
1===this._curPage&&e>1?this._generateNextBtn():this._curPage===e&&e>1?this._generatePreviousBtn():this._curPage<e?`${this._generatePreviousBtn()}${this._generateNextBtn()}`:"");// Page 1, and there are NO other pages
}_generatePreviousBtn(){return`
            <button class="btn--inline pagination__btn--prev" data-goto="${this._curPage-1}">
                <svg class="search__icon">
                    <use href="${this.icons}#icon-arrow-left"></use>
                </svg>
                <span>Page ${this._curPage-1}</span>
            </button>
        `}_generateNextBtn(){return`
            <button class="btn--inline pagination__btn--next" data-goto="${this._curPage+1}">
                <span>Page ${this._curPage+1}</span>
                <svg class="search__icon">
                    <use href="${this.icons}#icon-arrow-right"></use>
                </svg>
            </button>
        `}loading(){this._clear()}addHandlerClick(e){this._parentElement.addEventListener("click",t=>{let r=t.target.closest(".btn--inline");if(!r)return;let n=+r.dataset.goto;e(n)})}}var rL=new rx;class rM extends r_{// Variables
_parentElement=document.querySelector(".bookmarks__list");_errorMessage="";_message="No bookmarks yet. Find a nice recipe and bookmark it :)";// Rendering bookmarks
render(e){if(this._isNotData(e))return this.renderMessage();super.render(e)}renderMessage(e=this._message){let t=this._generateMessage(e);this._clear(),this._insert(t)}// Generating html functions
_generateMarkup(){return this._data.map(e=>rO.render(e,!1),this).join()}_generateMessage(e){return`
        <div class="message">
          <div>
            <svg>
              <use href="${this.icons}#icon-smile"></use>
            </svg>
          </div>
          <p>${e}</p>
        </div>`}addHandlerRender(e){window.addEventListener("load",e)}}var rT=new rM,rI=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{// IE 8 has a broken Object.defineProperty that only works on DOM objects.
u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,a){var o,s,c=Object.create((r&&r.prototype instanceof v?r:v).prototype);return(// The ._invoke method unifies the implementations of the .next,
// .throw, and .return methods.
i(c,"_invoke",{value:(o=new P(a||[]),s=p,function(r,i){if(s===h)throw Error("Generator is already running");if(s===d){if("throw"===r)throw i;// Be forgiving, per 25.3.3.3.3 of the spec:
// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
return x()}for(o.method=r,o.arg=i;;){var a=o.delegate;if(a){var c=// Call delegate.iterator[context.method](context.arg) and handle the
// result, either by returning a { value, done } result from the
// delegate iterator, or by modifying context.method and context.arg,
// setting context.delegate to null, and returning the ContinueSentinel.
function e(r,n){var i=n.method,a=r.iterator[i];if(a===t)return(// A .throw or .return when the delegate iterator has no .throw
// method, or a missing .next mehtod, always terminate the
// yield* loop.
n.delegate=null,"throw"===i&&r.iterator.return&&(// If the delegate iterator has a return method, give it a
// chance to clean up.
n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),g);var o=f(a,r.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,g;var s=o.arg;return s?s.done?(// Assign the result of the finished delegate to the temporary
// variable specified by delegate.resultName (see delegateYield).
n[r.resultName]=s.value,// Resume execution at the desired location (see delegateYield).
n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),// The delegate iterator is finished, so forget it and continue with
// the outer generator.
n.delegate=null,g):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(a,o);if(c){if(c===g)continue;return c}}if("next"===o.method)// function.sent implementation.
o.sent=o._sent=o.arg;else if("throw"===o.method){if(s===p)throw s=d,o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);s=h;var u=f(e,n,o);if("normal"===u.type){if(// If an exception is thrown from innerFn, we leave state ===
// GenStateExecuting and loop back for another invocation.
s=o.done?d:"suspendedYield",u.arg===g)continue;return{value:u.arg,done:o.done}}"throw"===u.type&&(s=d,// Dispatch the exception by looping back around to the
// context.dispatchException(context.arg) call above.
o.method="throw",o.arg=u.arg)}})}),c)}// Try/catch helper to minimize deoptimizations. Returns a completion
// record like context.tryEntries[i].completion. This interface could
// have been (and was previously) designed to take a closure to be
// invoked without arguments, but in all the cases we care about we
// already have an existing method we want to call, so there's no need
// to create a new function object. We can even get away with assuming
// the method takes exactly one argument, since that happens to be true
// in every case, so we don't have to touch the arguments object. The
// only additional allocation required is the completion record, which
// has a stable shape and so hopefully should be cheap to allocate.
function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var p="suspendedStart",h="executing",d="completed",g={};// Dummy constructor functions that we use as the .constructor and
// .constructor.prototype properties for functions that return Generator
// objects. For full spec compliance, you may wish to configure your
// minifier not to mangle the names of these two functions.
function v(){}function y(){}function m(){}// This is a polyfill for %IteratorPrototype% for environments that
// don't natively support it.
var _={};u(_,o,function(){return this});var b=Object.getPrototypeOf,w=b&&b(b(j([])));w&&w!==r&&n.call(w,o)&&// of the polyfill.
(_=w);var k=m.prototype=v.prototype=Object.create(_);// Helper for defining the .next, .throw, and .return methods of the
// Iterator interface in terms of a single ._invoke method.
function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;// Define the unified helper method that is used to implement .next,
// .throw, and .return (see defineIteratorMethods).
i(this,"_invoke",{value:function(i,a){function o(){return new t(function(r,o){!function r(i,a,o,s){var c=f(e[i],e,a);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,o,s)},function(e){r("throw",e,o,s)}):t.resolve(l).then(function(e){// When a yielded Promise is resolved, its final value becomes
// the .value of the Promise<{value,done}> result for the
// current iteration.
u.value=e,o(u)},function(e){// If a rejected Promise was yielded, throw the rejection back
// into the async generator function so it can be handled there.
return r("throw",e,o,s)})}}(i,a,r,o)})}return r=// all previous Promises have been resolved before calling invoke,
// so that results are always delivered in the correct order. If
// enqueue has not been called before, then it is important to
// call invoke immediately, without waiting on a callback to fire,
// so that the async generator function has the opportunity to do
// any necessary setup in a predictable way. This predictability
// is why the Promise constructor synchronously invokes its
// executor callback, and why async functions synchronously
// execute code before the first await. Since we implement simple
// async functions in terms of async generators, it is especially
// important to get this right, even though it requires care.
r?r.then(o,// invocations of the iterator.
o):o()}})}function $(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){// The root entry object (effectively a try statement without a catch
// or a finally block) gives us a place to store values thrown from
// locations where there is no enclosing try statement.
this.tryEntries=[{tryLoc:"root"}],e.forEach($,this),this.reset(!0)}function j(e){if(e){var r=e[o];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}// Return an iterator with no values.
return{next:x}}function x(){return{value:t,done:!0}}// Regardless of whether this script is executing as a CommonJS module
// or not, return the runtime object so that we can declare the variable
// regeneratorRuntime in the outer scope, which allows this module to be
// injected easily by `bin/regenerator --include-runtime script.js`.
return y.prototype=m,i(k,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:y,configurable:!0}),y.displayName=u(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},// Within the body of any async function, `await x` is transformed to
// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
// `hasOwn.call(value, "__await")` to determine if the yielded value is
// meant to be awaited.
e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,function(){return this}),e.AsyncIterator=S,// Note that simple async functions are implemented on top of
// AsyncIterator objects; they just return a Promise for the value of
// the final result produced by the iterator.
e.async=function(t,r,n,i,a){void 0===a&&(a=Promise);var o=new S(l(t,r,n,i),a);return e.isGeneratorFunction(r)?o// If outerFn is a generator, return the full iterator.
:o.next().then(function(e){return e.done?e.value:o.next()})},// Define Generator.prototype.{next,throw,return} in terms of the
// unified ._invoke helper method.
E(k),u(k,c,"Generator"),// A Generator should always return itself as the iterator object when the
// @@iterator function is called on it. Some browsers' implementations of the
// iterator prototype chain incorrectly implement this, causing the Generator
// object to not be returned from this call. This ensures that doesn't happen.
// See https://github.com/facebook/regenerator/issues/274 for more details.
u(k,o,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);// Rather than returning an object with a next method, we keep
// things simple and return the next function itself.
return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return(// To avoid creating an additional object, we just hang the .value
// and .done properties off the next function object itself. This
// also ensures that the minifier will not anonymize the function.
e.done=!0,e)}},e.values=j,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,// Resetting context._sent for legacy support of Babel's
// function.sent implementation.
this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(// If the dispatched exception was caught by a catch block,
// then let that catch block handle the exception normally.
r.method="next",r.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)// it, so set the completion value of the entire function to
// throw the exception.
return i("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),u=n.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else if(u){if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&// location outside the try/catch block.
(a=null);var o=a?a.completion:{};return(o.type=e,o.arg=t,a)?(this.method="next",this.next=a.finallyLoc,g):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;O(r)}return i}}// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:j(e),resultName:r,nextLoc:n},"next"===this.method&&// accidentally pass it on to the delegate.
(this.arg=t),g}},e}({});try{regeneratorRuntime=rI}catch(e){// This module should not be running in strict mode, so the above
// assignment should always work unless something is misconfigured. Just
// in case runtime.js accidentally runs in strict mode, in modern engines
// we can explicitly access globalThis. In older engines we can escape
// strict mode using a global Function call. This could conceivably fail
// if a Content Security Policy forbids using Function, but in that case
// the proper solution is to fix the accidental strict mode problem. If
// you've misconfigured your bundler to force strict mode and applied a
// CSP to forbid Function, and you're not willing to fix either of those
// problems, please detail your unique predicament in a GitHub issue.
"object"==typeof globalThis?globalThis.regeneratorRuntime=rI:Function("r","regeneratorRuntime = r")(rI)}// if(module.hot) {
//   module.hot.accept();
// }
///////////////////////////////////////
const rN=async()=>{try{let e=window.location.hash.slice(1);if(!e)return;rj.update(rh())// Results update
,rT.update(ru.bookmarks)// Bookmark update
,rE.renderSpinner(),await rf(e);let{recipe:t}=ru;rE.render(t)}catch(e){rE.renderError()}},rF=async()=>{try{// 1) Get search query
let e=r$.getQuery();if(!e)return;rL.loading(),rj.renderSpinner(),await rp(e),// 3) Render Initial Results and Pagination button
rC(1)}catch(e){rj.renderError(e.message)}},rC=e=>{rj.render(rh(e)),rL.render(ru.search)};rT.addHandlerRender(()=>rT.render(ru.bookmarks)),rE.addHandlerRender(rN),rE.addHandlerUpdateServings(e=>{//  Update Recipe Servings
rd(e);let{recipe:t}=ru;rE.update(t)}),rE.addHandlerChangeBookmark(()=>{let{recipe:e}=ru;e.bookmarked?ry(e.id):rv(e),rE.update(e),rT.render(ru.bookmarks)}),r$.addHandlerSearch(rF),rL.addHandlerClick(rC);