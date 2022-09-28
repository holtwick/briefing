/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var Rc=function(n,t){return(Rc=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var a in r)r.hasOwnProperty(a)&&(e[a]=r[a])})(n,t)};function pt(n,t){function e(){this.constructor=n}Rc(n,t),n.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}function Y(n,t,e,r){return new(e||(e=Promise))(function(a,o){function i(c){try{u(r.next(c))}catch(l){o(l)}}function s(c){try{u(r.throw(c))}catch(l){o(l)}}function u(c){c.done?a(c.value):new e(function(l){l(c.value)}).then(i,s)}u((r=r.apply(n,t||[])).next())})}function Q(n,t){var e,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(u){return function(c){return function(l){if(e)throw new TypeError("Generator is already executing.");for(;i;)try{if(e=1,r&&(a=2&l[0]?r.return:l[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,l[1])).done)return a;switch(r=0,a&&(l=[2&l[0],a.value]),l[0]){case 0:case 1:a=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,r=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!(a=(a=i.trys).length>0&&a[a.length-1])&&(l[0]===6||l[0]===2)){i=0;continue}if(l[0]===3&&(!a||l[1]>a[0]&&l[1]<a[3])){i.label=l[1];break}if(l[0]===6&&i.label<a[1]){i.label=a[1],a=l;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(l);break}a[2]&&i.ops.pop(),i.trys.pop();continue}l=t.call(n,i)}catch(p){l=[6,p],r=0}finally{e=a=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([u,c])}}}var kc=function(){function n(t){this.global=t,this.flags={},this.flagRegistry={},this.urlFlags={},this.populateURLFlags()}return n.prototype.setPlatform=function(t,e){this.platform!=null&&console.warn("Platform "+this.platformName+" has already been set. Overwriting the platform with "+e+"."),this.platformName=t,this.platform=e},n.prototype.registerFlag=function(t,e,r){if(this.flagRegistry[t]={evaluationFn:e,setHook:r},this.urlFlags[t]!=null){var a=this.urlFlags[t];console.warn("Setting feature override from URL "+t+": "+a+"."),this.set(t,a)}},n.prototype.get=function(t){return t in this.flags?this.flags[t]:(this.flags[t]=this.evaluateFlag(t),this.flags[t])},n.prototype.getNumber=function(t){return this.get(t)},n.prototype.getBool=function(t){return this.get(t)},n.prototype.getFlags=function(){return this.flags},Object.defineProperty(n.prototype,"features",{get:function(){return this.flags},enumerable:!0,configurable:!0}),n.prototype.set=function(t,e){if(this.flagRegistry[t]==null)throw new Error("Cannot set flag "+t+" as it has not been registered.");this.flags[t]=e,this.flagRegistry[t].setHook!=null&&this.flagRegistry[t].setHook(e)},n.prototype.evaluateFlag=function(t){if(this.flagRegistry[t]==null)throw new Error("Cannot evaluate flag '"+t+"': no evaluation function found.");return this.flagRegistry[t].evaluationFn()},n.prototype.setFlags=function(t){this.flags=Object.assign({},t)},n.prototype.reset=function(){this.flags={},this.urlFlags={},this.populateURLFlags()},n.prototype.populateURLFlags=function(){var t=this;if(this.global!==void 0&&this.global.location!==void 0&&this.global.location.search!==void 0){var e,r,a=(e=this.global.location.search,r={},e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,function(o){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return Sf(r,i[0],i[1]),i.join("=")}),r);"tfjsflags"in a&&a.tfjsflags.split(",").forEach(function(o){var i=o.split(":"),s=i[0],u=i[1];t.urlFlags[s]=function(c,l){if((l=l.toLowerCase())==="true"||l==="false")return l==="true";if(""+ +l===l)return+l;throw new Error("Could not parse value flag value "+l+" for flag "+c+".")}(s,u)})}},n}();function Sf(n,t,e){n[decodeURIComponent(t)]=decodeURIComponent(e||"")}function M(){return fi}var fi=null,Un=new Map,pr=new Map;function hi(n,t){var e=vi(n,t);return Un.get(e)}function Fo(n){return pr.get(n)}function Mo(n){for(var t=Un.entries(),e=[];;){var r=t.next(),a=r.done,o=r.value;if(a)break;var i=o[0],s=o[1];i.split("_")[0]===n&&e.push(s)}return e}function mi(n){var t=n.kernelName,e=n.backendName,r=vi(t,e);if(Un.has(r))throw new Error("The kernel '"+t+"' for backend '"+e+"' is already registered");Un.set(r,n)}function Tc(n){var t=n.kernelName;pr.has(t)&&console.warn("Overriding the gradient for '"+t+"'"),pr.set(t,n)}function Ef(n,t){var e=vi(n,t);if(!Un.has(e))throw new Error("The kernel '"+n+"' for backend '"+t+"' is not registered");Un.delete(e)}function If(n){if(!pr.has(n))throw new Error("The gradient '"+n+"' for backend is not registered");pr.delete(n)}function vi(n,t){return t+"_"+n}function Su(n){for(var t=n.length,e=0,r=0;t>0;)r=Math.random()*t|0,e=n[--t],n[t]=n[r],n[r]=e}function ua(n,t,e){return Math.max(n,Math.min(t,e))}function gi(n){return n%2==0?n:n+1}function Ac(n){for(var t=0,e=0;e<n.length;e++)t+=n[e];return t}function E(n,t){if(!n)throw new Error(typeof t=="string"?t:t())}function fe(n,t,e){e===void 0&&(e=""),E(Te(n,t),function(){return e+" Shapes "+n+" and "+t+" must match"})}function bn(n){E(n!=null,function(){return"The input to the tensor constructor must be a non-null value."})}function Mt(n,t,e){if(t===void 0&&(t=[]),e===void 0&&(e=!1),t==null&&(t=[]),Array.isArray(n)||Fe(n)&&!e)for(var r=0;r<n.length;++r)Mt(n[r],t,e);else t.push(n);return t}function $(n){if(n.length===0)return 1;for(var t=n[0],e=1;e<n.length;e++)t*=n[e];return t}function Te(n,t){if(n===t)return!0;if(n==null||t==null||n.length!==t.length)return!1;for(var e=0;e<n.length;e++)if(n[e]!==t[e])return!1;return!0}function Ne(n){return n%1==0}function Dc(n){if(Math.tanh!=null)return Math.tanh(n);if(n===1/0)return 1;if(n===-1/0)return-1;var t=Math.exp(2*n);return(t-1)/(t+1)}function ca(n){var t=Math.ceil(Math.sqrt(n));return[t,Math.ceil(n/t)]}function hn(n,t){return t<=n.length?n:n+" ".repeat(t-n.length)}function Po(n,t,e){return t===void 0&&(t=function(r){return 0}),new Promise(function(r,a){var o=0,i=function(){if(n())r();else{o++;var s=t(o);e!=null&&o>=e?a():setTimeout(i,s)}};i()})}function Oc(n,t){for(var e=1,r=-1,a=0;a<n.length;++a)if(n[a]>=0)e*=n[a];else if(n[a]===-1){if(r!==-1)throw Error("Shapes can only have 1 implicit size. Found -1 at dim "+r+" and dim "+a);r=a}else if(n[a]<0)throw Error("Shapes can not be < 0. Found "+n[a]+" at dim "+a);if(r===-1){if(t>0&&t!==e)throw Error("Size("+t+") must match the product of shape "+n);return n}if(e===0)throw Error("Cannot infer the missing size in ["+n+"] when there are 0 elements");if(t%e!=0)throw Error("The implicit shape can't be a fractional number. Got "+t+" / "+e);var o=n.slice();return o[r]=t/e,o}function Ae(n,t){var e=t.length;return E((n=n==null?t.map(function(r,a){return a}):[].concat(n)).every(function(r){return r>=-e&&r<e}),function(){return"All values in axis param must be in range [-"+e+", "+e+") but got axis "+n}),E(n.every(function(r){return Ne(r)}),function(){return"All values in axis param must be integers but got axis "+n}),n.map(function(r){return r<0?e+r:r})}function qt(n,t){for(var e=[],r=[],a=t!=null&&Array.isArray(t)&&t.length===0,o=t==null||a?null:Ae(t,n).sort(),i=0,s=0;s<n.length;++s){if(o!=null){if(o[i]===s&&n[s]!==1)throw new Error("Can't squeeze axis "+s+" since its dim '"+n[s]+"' is not 1");(o[i]==null||o[i]>s)&&n[s]===1&&(e.push(n[s]),r.push(s)),o[i]<=s&&i++}n[s]!==1&&(e.push(n[s]),r.push(s))}return{newShape:e,keptDims:r}}function vn(n,t){var e=null;if(n==null||n==="float32")e=new Float32Array(t);else if(n==="int32")e=new Int32Array(t);else{if(n!=="bool")throw new Error("Unknown data type "+n);e=new Uint8Array(t)}return e}function dr(n,t){var e=null;if(n==null||n==="float32")e=new Float32Array(t);else if(n==="int32")e=new Int32Array(t);else if(n==="bool")e=new Uint8Array(t);else{if(n!=="string")throw new Error("Unknown data type "+n);e=new Array(t)}return e}function _c(n,t){for(var e=0;e<n.length;e++){var r=n[e];if(isNaN(r)||!isFinite(r))throw Error("A tensor of type "+t+" being uploaded contains "+r+".")}}function Fc(n){return n==="bool"||n==="complex64"||n==="float32"||n==="int32"||n==="string"}function Mc(n,t){return t!=="complex64"&&(t!=="float32"||n==="complex64")&&(t!=="int32"||n==="float32"||n==="complex64")&&(t!=="bool"||n!=="bool")}function Fe(n){return n instanceof Float32Array||n instanceof Int32Array||n instanceof Uint8Array}function yi(n){if(n==="float32"||n==="int32")return 4;if(n==="complex64")return 8;if(n==="bool")return 1;throw new Error("Unknown dtype "+n)}function Pc(n){if(n==null)return 0;var t=0;return n.forEach(function(e){return t+=e.length}),t}function jt(n){return typeof n=="string"||n instanceof String}function Bc(n){return typeof n=="boolean"}function Lc(n){return typeof n=="number"}function jn(n){return Array.isArray(n)?jn(n[0]):n instanceof Float32Array?"float32":n instanceof Int32Array||n instanceof Uint8Array?"int32":Lc(n)?"float32":jt(n)?"string":Bc(n)?"bool":"float32"}function Jt(n){return!!(n&&n.constructor&&n.call&&n.apply)}function la(n,t){for(var e=t;e<n;++e)if(n%e==0)return e;return n}function je(n){var t=n.length;if(t<2)return[];var e=new Array(t-1);e[t-2]=n[t-1];for(var r=t-3;r>=0;--r)e[r]=e[r+1]*n[r+1];return e}function xi(n,t,e){if(t==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(n)&&(n=Mt(n)),e&&_c(n,t),function(o,i){return o instanceof Float32Array&&i==="float32"||o instanceof Int32Array&&i==="int32"||o instanceof Uint8Array&&i==="bool"}(n,t))return n;if(t==null||t==="float32"||t==="complex64")return new Float32Array(n);if(t==="int32")return new Int32Array(n);if(t==="bool"){for(var r=new Uint8Array(n.length),a=0;a<r.length;++a)Math.round(n[a])!==0&&(r[a]=1);return r}throw new Error("Unknown data type "+t)}function Bo(n,t){if(n.length===0)return t[0];var e=n.reduce(function(r,a){return r*a});if(e===0)return[];if(e!==t.length)throw new Error("["+n+"] does not match the input size.");return function r(a,o,i){var s=new Array;if(o.length===1)for(var u=o[0],c=0;c<u;c++)s[c]=i[a+c];else{u=o[0];var l=o.slice(1),p=l.reduce(function(d,f){return d*f});for(c=0;c<u;c++)s[c]=r(a+c*p,l,i)}return s}(0,n,t)}function bi(n,t){for(var e=Kn(n,t),r=0;r<e.length;r++)e[r]=1;return e}function Kn(n,t){if(t==null||t==="float32"||t==="complex64")return new Float32Array(n);if(t==="int32")return new Int32Array(n);if(t==="bool")return new Uint8Array(n);throw new Error("Unknown data type "+t)}function it(){return M().platform.now()}function wi(n){n.forEach(function(t){E(Number.isInteger(t)&&t>=0,function(){return"Tensor must have a shape comprised of positive integers but got shape ["+n+"]."})})}function Vc(n,t){return t===void 0&&(t="utf-8"),t=t||"utf-8",M().platform.encode(n,t)}function fr(n,t){return t===void 0&&(t="utf-8"),t=t||"utf-8",M().platform.decode(n,t)}function pa(n,t,e){if(t===0)return 0;if(t===1)return n[0];for(var r=n[n.length-1],a=0;a<n.length-1;++a)r+=e[a]*n[a];return r}function Ci(n,t,e){if(t===0)return[];if(t===1)return[n];for(var r=new Array(t),a=0;a<r.length-1;++a)r[a]=Math.floor(n/e[a]),n-=r[a]*e[a];return r[r.length-1]=n,r}var Pt=Object.freeze({shuffle:Su,clamp:ua,nearestLargerEven:gi,sum:Ac,randUniform:function(n,t){var e=Math.random();return t*e+(1-e)*n},distSquared:function(n,t){for(var e=0,r=0;r<n.length;r++){var a=Number(n[r])-Number(t[r]);e+=a*a}return e},assert:E,assertShapesMatch:fe,assertNonNull:bn,flatten:Mt,sizeFromShape:$,isScalarShape:function(n){return n.length===0},arraysEqual:Te,isInt:Ne,tanh:Dc,sizeToSquarishShape:ca,createShuffledIndices:function(n){for(var t=new Uint32Array(n),e=0;e<n;++e)t[e]=e;return Su(t),t},rightPad:hn,repeatedTry:Po,inferFromImplicitShape:Oc,parseAxisParam:Ae,squeezeShape:qt,getTypedArrayFromDType:vn,getArrayFromDType:dr,checkConversionForErrors:_c,isValidDtype:Fc,hasEncodingLoss:Mc,isTypedArray:Fe,bytesPerElement:yi,bytesFromStringArray:Pc,isString:jt,isBoolean:Bc,isNumber:Lc,inferDtype:jn,isFunction:Jt,nearestDivisor:la,computeStrides:je,toTypedArray:xi,toNestedArray:Bo,makeOnesTypedArray:bi,makeZerosTypedArray:Kn,now:it,assertNonNegativeIntegerDimensions:wi,fetch:function(n,t){return M().platform.fetch(n,t)},encodeString:Vc,decodeString:fr,locToIndex:pa,indexToLoc:Ci}),Rf=function(){function n(t,e){this.backendTimer=t,this.logger=e,e==null&&(this.logger=new kf)}return n.prototype.profileKernel=function(t,e,r){var a,o=this,i=this.backendTimer.time(function(){a=r()});return a.forEach(function(s){s.data().then(function(u){(function(c,l,p){if(l!=="float32")return!1;for(var d=0;d<c.length;d++){var f=c[d];if(isNaN(f)||!isFinite(f))return console.warn("Found "+f+" in the result of '"+p+"'"),!0}})(u,s.dtype,t),i.then(function(c){var l="";c.getExtraProfileInfo!=null&&(l=c.getExtraProfileInfo()),o.logger.logKernelProfile(t,s,u,c.kernelMs,e,l)})})}),a},n}(),kf=function(){function n(){}return n.prototype.logKernelProfile=function(t,e,r,a,o,i){var s=typeof a=="number"?hn(a+"ms",9):a.error,u=hn(t,25),c=e.rank,l=e.size,p=hn(e.shape.toString(),14),d="";for(var f in o){var h=o[f].shape||e.shape,m=h.length;d+=f+": "+m+"D "+(m>0?h:"")+" "}console.log("%c"+u+"	%c"+s+"	%c"+c+"D "+p+"	%c"+l+"	%c"+d+"	%c"+i,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")},n}(),Eu=20,Zn=3,co=7;function Tf(n,t,e,r){var a=je(t),o=function(c,l,p,d){var f=$(l),h=d[d.length-1],m=new Array(h).fill(0),v=l.length,g=p==="complex64"?tr(c):c;if(v>1)for(var y=0;y<f/h;y++)for(var x=y*h,b=0;b<h;b++)m[b]=Math.max(m[b],er(g[x+b],0,p).length);return m}(n,t,e,a),i=t.length,s=function c(l,p,d,f,h,m){m===void 0&&(m=!0);var v=d==="complex64"?2:1,g=p[0],y=p.length;if(y===0)return d==="complex64"?[er(tr(l)[0],0,d)]:d==="bool"?[Wc(l[0])]:[l[0].toString()];if(y===1){if(g>Eu){var x=Zn*v,b=Array.from(l.slice(0,x)),w=Array.from(l.slice((g-Zn)*v,g*v));return d==="complex64"&&(b=tr(b),w=tr(w)),["["+b.map(function(B,z){return er(B,h[z],d)}).join(", ")+", ..., "+w.map(function(B,z){return er(B,h[g-Zn+z],d)}).join(", ")+"]"]}return["["+(d==="complex64"?tr(l):Array.from(l)).map(function(B,z){return er(B,h[z],d)}).join(", ")+"]"]}var N=p.slice(1),I=f.slice(1),R=f[0]*v,k=[];if(g>Eu){for(var T=0;T<Zn;T++){var O=(_=T*R)+R;k.push.apply(k,c(l.slice(_,O),N,d,I,h,!1))}for(k.push("..."),T=g-Zn;T<g;T++)O=(_=T*R)+R,k.push.apply(k,c(l.slice(_,O),N,d,I,h,T===g-1))}else for(T=0;T<g;T++){var _;O=(_=T*R)+R,k.push.apply(k,c(l.slice(_,O),N,d,I,h,T===g-1))}var V=y===2?",":"";for(k[0]="["+k[0]+V,T=1;T<k.length-1;T++)k[T]=" "+k[T]+V;var L=`,
`;for(T=2;T<y;T++)L+=`
`;return k[k.length-1]=" "+k[k.length-1]+"]"+(m?"":L),k}(n,t,e,a,o),u=["Tensor"];return r&&(u.push("  dtype: "+e),u.push("  rank: "+i),u.push("  shape: ["+t+"]"),u.push("  values:")),u.push(s.map(function(c){return"    "+c}).join(`
`)),u.join(`
`)}function er(n,t,e){return hn(Array.isArray(n)?parseFloat(n[0].toFixed(co))+" + "+parseFloat(n[1].toFixed(co))+"j":jt(n)?"'"+n+"'":e==="bool"?Wc(n):parseFloat(n.toFixed(co)).toString(),t)}function Wc(n){return n===0?"false":"true"}function tr(n){for(var t=[],e=0;e<n.length;e+=2)t.push([n[e],n[e+1]]);return t}var Gn=function(){function n(t,e,r){var a=this;if(this.dtype=e,this.shape=t.slice(),this.size=$(t),r!=null){var o=r.length;E(o===this.size,function(){return"Length of values '"+o+"' does not match the size inferred by the shape '"+a.size+"'."})}if(e==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=r||dr(e,this.size),this.strides=je(t)}return n.prototype.set=function(t){for(var e=this,r=[],a=1;a<arguments.length;a++)r[a-1]=arguments[a];r.length===0&&(r=[0]),E(r.length===this.rank,function(){return"The number of provided coordinates ("+r.length+") must match the rank ("+e.rank+")"});var o=this.locToIndex(r);this.values[o]=t},n.prototype.get=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];t.length===0&&(t=[0]);for(var r=0,a=0,o=t;a<o.length;a++){var i=o[a];if(i<0||i>=this.shape[r]){var s="Requested out of range element at "+t+".   Buffer shape="+this.shape;throw new Error(s)}r++}for(var u=t[t.length-1],c=0;c<t.length-1;++c)u+=this.strides[c]*t[c];return this.values[u]},n.prototype.locToIndex=function(t){if(this.rank===0)return 0;if(this.rank===1)return t[0];for(var e=t[t.length-1],r=0;r<t.length-1;++r)e+=this.strides[r]*t[r];return e},n.prototype.indexToLoc=function(t){if(this.rank===0)return[];if(this.rank===1)return[t];for(var e=new Array(this.shape.length),r=0;r<e.length-1;++r)e[r]=Math.floor(t/this.strides[r]),t-=e[r]*this.strides[r];return e[e.length-1]=t,e},Object.defineProperty(n.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),n.prototype.toTensor=function(){return bt().makeTensor(this.values,this.shape,this.dtype)},n}(),bt=null,P=null,zc=null,me=function(){function n(t,e,r,a){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=e||"float32",this.size=$(t),this.strides=je(t),this.dataId=r,this.id=a,this.rankType=this.rank<5?this.rank.toString():"higher"}return n.prototype.flatten=function(){return this.throwIfDisposed(),this.as1D()},n.prototype.asScalar=function(){return this.throwIfDisposed(),E(this.size===1,function(){return"The array must have only 1 element."}),this.reshape([])},n.prototype.as1D=function(){return this.throwIfDisposed(),this.reshape([this.size])},n.prototype.as2D=function(t,e){return this.throwIfDisposed(),this.reshape([t,e])},n.prototype.as3D=function(t,e,r){return this.throwIfDisposed(),this.reshape([t,e,r])},n.prototype.as4D=function(t,e,r,a){return this.throwIfDisposed(),this.reshape([t,e,r,a])},n.prototype.as5D=function(t,e,r,a,o){return this.throwIfDisposed(),this.reshape([t,e,r,a,o])},n.prototype.asType=function(t){return this.throwIfDisposed(),P.cast(this,t)},Object.defineProperty(n.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),n.prototype.buffer=function(){return Y(this,void 0,void 0,function(){var t;return Q(this,function(e){switch(e.label){case 0:return[4,this.data()];case 1:return t=e.sent(),[2,P.buffer(this.shape,this.dtype,t)]}})})},n.prototype.bufferSync=function(){return P.buffer(this.shape,this.dtype,this.dataSync())},n.prototype.array=function(){return Y(this,void 0,void 0,function(){var t;return Q(this,function(e){switch(e.label){case 0:return[4,this.data()];case 1:return t=e.sent(),[2,Bo(this.shape,t)]}})})},n.prototype.arraySync=function(){return Bo(this.shape,this.dataSync())},n.prototype.data=function(){return Y(this,void 0,void 0,function(){var t,e;return Q(this,function(r){switch(r.label){case 0:return this.throwIfDisposed(),t=bt().read(this.dataId),this.dtype!=="string"?[3,2]:[4,t];case 1:e=r.sent();try{return[2,e.map(function(a){return fr(a)})]}catch(a){throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}r.label=2;case 2:return[2,t]}})})},n.prototype.dataSync=function(){this.throwIfDisposed();var t=bt().readSync(this.dataId);if(this.dtype==="string")try{return t.map(function(e){return fr(e)})}catch(e){throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t},n.prototype.bytes=function(){return Y(this,void 0,void 0,function(){var t;return Q(this,function(e){switch(e.label){case 0:return this.throwIfDisposed(),[4,bt().read(this.dataId)];case 1:return t=e.sent(),this.dtype==="string"?[2,t]:[2,new Uint8Array(t.buffer)]}})})},n.prototype.dispose=function(){this.isDisposed||(bt().disposeTensor(this),this.isDisposedInternal=!0)},Object.defineProperty(n.prototype,"isDisposed",{get:function(){return this.isDisposedInternal},enumerable:!0,configurable:!0}),n.prototype.throwIfDisposed=function(){if(this.isDisposed)throw new Error("Tensor is disposed.")},n.prototype.toFloat=function(){return this.asType("float32")},n.prototype.toInt=function(){return this.asType("int32")},n.prototype.toBool=function(){return this.asType("bool")},n.prototype.print=function(t){return t===void 0&&(t=!1),P.print(this,t)},n.prototype.reshape=function(t){return this.throwIfDisposed(),P.reshape(this,t)},n.prototype.reshapeAs=function(t){return this.throwIfDisposed(),this.reshape(t.shape)},n.prototype.expandDims=function(t){return t===void 0&&(t=0),P.expandDims(this,t)},n.prototype.cumsum=function(t,e,r){return t===void 0&&(t=0),e===void 0&&(e=!1),r===void 0&&(r=!1),P.cumsum(this,t,e,r)},n.prototype.squeeze=function(t){return this.throwIfDisposed(),P.squeeze(this,t)},n.prototype.clone=function(){return this.throwIfDisposed(),P.clone(this)},n.prototype.toString=function(t){return t===void 0&&(t=!1),Tf(this.dataSync(),this.shape,this.dtype,t)},n.prototype.gather=function(t,e){return e===void 0&&(e=0),this.throwIfDisposed(),P.gather(this,t,e)},n.prototype.matMul=function(t,e,r){return e===void 0&&(e=!1),r===void 0&&(r=!1),this.throwIfDisposed(),P.matMul(this,t,e,r)},n.prototype.dot=function(t){return this.throwIfDisposed(),P.dot(this,t)},n.prototype.norm=function(t,e,r){return t===void 0&&(t="euclidean"),e===void 0&&(e=null),r===void 0&&(r=!1),this.throwIfDisposed(),P.norm(this,t,e,r)},n.prototype.slice=function(t,e){return this.throwIfDisposed(),P.slice(this,t,e)},n.prototype.reverse=function(t){return this.throwIfDisposed(),P.reverse(this,t)},n.prototype.concat=function(t,e){return e===void 0&&(e=0),this.throwIfDisposed(),t instanceof n&&(t=[t]),P.concat([this].concat(t),e)},n.prototype.split=function(t,e){return e===void 0&&(e=0),this.throwIfDisposed(),P.split(this,t,e)},n.prototype.stack=function(t,e){return e===void 0&&(e=0),P.stack([this,t],e)},n.prototype.unstack=function(t){return t===void 0&&(t=0),P.unstack(this,t)},n.prototype.batchNormalization=function(t,e,r,a,o){return r===void 0&&(r=.001),zc("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon"),this.batchNorm(t,e,o,a,r)},n.prototype.all=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),P.all(this,t,e)},n.prototype.any=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),P.any(this,t,e)},n.prototype.logSumExp=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),P.logSumExp(this,t,e)},n.prototype.sum=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),P.sum(this,t,e)},n.prototype.prod=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),P.prod(this,t,e)},n.prototype.mean=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),P.mean(this,t,e)},n.prototype.min=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),P.min(this,t,e)},n.prototype.max=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),P.max(this,t,e)},n.prototype.argMin=function(t){return t===void 0&&(t=null),this.throwIfDisposed(),P.argMin(this,t)},n.prototype.argMax=function(t){return t===void 0&&(t=null),this.throwIfDisposed(),P.argMax(this,t)},n.prototype.cast=function(t){return this.throwIfDisposed(),P.cast(this,t)},n.prototype.addStrict=function(t){return this.throwIfDisposed(),P.addStrict(this,t)},n.prototype.atan2=function(t){return this.throwIfDisposed(),P.atan2(this,t)},n.prototype.sub=function(t){return this.throwIfDisposed(),P.sub(this,t)},n.prototype.subStrict=function(t){return this.throwIfDisposed(),P.subStrict(this,t)},n.prototype.pow=function(t){return this.throwIfDisposed(),P.pow(this,t)},n.prototype.powStrict=function(t){return this.throwIfDisposed(),P.powStrict(this,t)},n.prototype.mul=function(t){return this.throwIfDisposed(),P.mul(this,t)},n.prototype.mulStrict=function(t){return this.throwIfDisposed(),P.mulStrict(this,t)},n.prototype.floorDiv=function(t){return this.throwIfDisposed(),P.floorDiv(this,t)},n.prototype.divStrict=function(t){return this.throwIfDisposed(),P.divStrict(this,t)},n.prototype.minimum=function(t){return this.throwIfDisposed(),P.minimum(this,t)},n.prototype.minimumStrict=function(t){return this.throwIfDisposed(),P.minimumStrict(this,t)},n.prototype.maximum=function(t){return this.throwIfDisposed(),P.maximum(this,t)},n.prototype.maximumStrict=function(t){return this.throwIfDisposed(),P.maximumStrict(this,t)},n.prototype.mod=function(t){return this.throwIfDisposed(),P.mod(this,t)},n.prototype.modStrict=function(t){return this.throwIfDisposed(),P.modStrict(this,t)},n.prototype.squaredDifferenceStrict=function(t){return this.throwIfDisposed(),P.squaredDifferenceStrict(this,t)},n.prototype.notEqual=function(t){return this.throwIfDisposed(),P.notEqual(this,t)},n.prototype.notEqualStrict=function(t){return this.throwIfDisposed(),P.notEqualStrict(this,t)},n.prototype.less=function(t){return this.throwIfDisposed(),P.less(this,t)},n.prototype.lessStrict=function(t){return this.throwIfDisposed(),P.lessStrict(this,t)},n.prototype.equal=function(t){return this.throwIfDisposed(),P.equal(this,t)},n.prototype.equalStrict=function(t){return this.throwIfDisposed(),P.equalStrict(this,t)},n.prototype.lessEqual=function(t){return this.throwIfDisposed(),P.lessEqual(this,t)},n.prototype.lessEqualStrict=function(t){return this.throwIfDisposed(),P.lessEqualStrict(this,t)},n.prototype.greater=function(t){return this.throwIfDisposed(),P.greater(this,t)},n.prototype.greaterStrict=function(t){return this.throwIfDisposed(),P.greaterStrict(this,t)},n.prototype.greaterEqual=function(t){return this.throwIfDisposed(),P.greaterEqual(this,t)},n.prototype.greaterEqualStrict=function(t){return this.throwIfDisposed(),P.greaterEqualStrict(this,t)},n.prototype.logicalAnd=function(t){return this.throwIfDisposed(),P.logicalAnd(this,t)},n.prototype.logicalOr=function(t){return this.throwIfDisposed(),P.logicalOr(this,t)},n.prototype.logicalNot=function(){return this.throwIfDisposed(),P.logicalNot(this)},n.prototype.logicalXor=function(t){return this.throwIfDisposed(),P.logicalXor(this,t)},n.prototype.where=function(t,e){return this.throwIfDisposed(),P.where(t,this,e)},n.prototype.neg=function(){return this.throwIfDisposed(),P.neg(this)},n.prototype.ceil=function(){return this.throwIfDisposed(),P.ceil(this)},n.prototype.floor=function(){return this.throwIfDisposed(),P.floor(this)},n.prototype.sign=function(){return this.throwIfDisposed(),P.sign(this)},n.prototype.isNaN=function(){return this.throwIfDisposed(),P.isNaN(this)},n.prototype.isInf=function(){return this.throwIfDisposed(),P.isInf(this)},n.prototype.isFinite=function(){return this.throwIfDisposed(),P.isFinite(this)},n.prototype.exp=function(){return this.throwIfDisposed(),P.exp(this)},n.prototype.expm1=function(){return this.throwIfDisposed(),P.expm1(this)},n.prototype.log=function(){return this.throwIfDisposed(),P.log(this)},n.prototype.log1p=function(){return this.throwIfDisposed(),P.log1p(this)},n.prototype.sqrt=function(){return this.throwIfDisposed(),P.sqrt(this)},n.prototype.rsqrt=function(){return this.throwIfDisposed(),P.rsqrt(this)},n.prototype.square=function(){return this.throwIfDisposed(),P.square(this)},n.prototype.reciprocal=function(){return this.throwIfDisposed(),P.reciprocal(this)},n.prototype.abs=function(){return this.throwIfDisposed(),P.abs(this)},n.prototype.clipByValue=function(t,e){return this.throwIfDisposed(),P.clipByValue(this,t,e)},n.prototype.relu=function(){return this.throwIfDisposed(),P.relu(this)},n.prototype.relu6=function(){return this.throwIfDisposed(),P.relu6(this)},n.prototype.elu=function(){return this.throwIfDisposed(),P.elu(this)},n.prototype.selu=function(){return this.throwIfDisposed(),P.selu(this)},n.prototype.leakyRelu=function(t){return t===void 0&&(t=.2),this.throwIfDisposed(),P.leakyRelu(this,t)},n.prototype.prelu=function(t){return this.throwIfDisposed(),P.prelu(this,t)},n.prototype.sigmoid=function(){return this.throwIfDisposed(),P.sigmoid(this)},n.prototype.logSigmoid=function(){return this.throwIfDisposed(),P.logSigmoid(this)},n.prototype.softplus=function(){return this.throwIfDisposed(),P.softplus(this)},n.prototype.zerosLike=function(){return this.throwIfDisposed(),P.zerosLike(this)},n.prototype.onesLike=function(){return this.throwIfDisposed(),P.onesLike(this)},n.prototype.sin=function(){return this.throwIfDisposed(),P.sin(this)},n.prototype.cos=function(){return this.throwIfDisposed(),P.cos(this)},n.prototype.tan=function(){return this.throwIfDisposed(),P.tan(this)},n.prototype.asin=function(){return this.throwIfDisposed(),P.asin(this)},n.prototype.acos=function(){return this.throwIfDisposed(),P.acos(this)},n.prototype.atan=function(){return this.throwIfDisposed(),P.atan(this)},n.prototype.sinh=function(){return this.throwIfDisposed(),P.sinh(this)},n.prototype.cosh=function(){return this.throwIfDisposed(),P.cosh(this)},n.prototype.tanh=function(){return this.throwIfDisposed(),P.tanh(this)},n.prototype.asinh=function(){return this.throwIfDisposed(),P.asinh(this)},n.prototype.acosh=function(){return this.throwIfDisposed(),P.acosh(this)},n.prototype.atanh=function(){return this.throwIfDisposed(),P.atanh(this)},n.prototype.erf=function(){return this.throwIfDisposed(),P.erf(this)},n.prototype.round=function(){return this.throwIfDisposed(),P.round(this)},n.prototype.step=function(t){return t===void 0&&(t=0),this.throwIfDisposed(),P.step(this,t)},n.prototype.softmax=function(t){return t===void 0&&(t=-1),this.throwIfDisposed(),P.softmax(this,t)},n.prototype.logSoftmax=function(t){return t===void 0&&(t=-1),this.throwIfDisposed(),P.logSoftmax(this,t)},n.prototype.resizeBilinear=function(t,e){return e===void 0&&(e=!1),this.throwIfDisposed(),P.image.resizeBilinear(this,t,e)},n.prototype.resizeNearestNeighbor=function(t,e){return e===void 0&&(e=!1),this.throwIfDisposed(),P.image.resizeNearestNeighbor(this,t,e)},n.prototype.conv1d=function(t,e,r,a,o,i){return a===void 0&&(a="NWC"),o===void 0&&(o=1),this.throwIfDisposed(),P.conv1d(this,t,e,r,a,o,i)},n.prototype.conv2d=function(t,e,r,a,o,i){return a===void 0&&(a="NHWC"),o===void 0&&(o=[1,1]),this.throwIfDisposed(),P.conv2d(this,t,e,r,a,o,i)},n.prototype.conv2dTranspose=function(t,e,r,a,o){return this.throwIfDisposed(),P.conv2dTranspose(this,t,e,r,a,o)},n.prototype.depthwiseConv2D=function(t,e,r,a,o,i){return a===void 0&&(a="NHWC"),o===void 0&&(o=[1,1]),this.throwIfDisposed(),P.depthwiseConv2d(this,t,e,r,a,o,i)},n.prototype.separableConv2d=function(t,e,r,a,o,i){return o===void 0&&(o=[1,1]),i===void 0&&(i="NHWC"),this.throwIfDisposed(),P.separableConv2d(this,t,e,r,a,o,i)},n.prototype.avgPool=function(t,e,r,a){return this.throwIfDisposed(),P.avgPool(this,t,e,r,a)},n.prototype.maxPool=function(t,e,r,a){return this.throwIfDisposed(),P.maxPool(this,t,e,r,a)},n.prototype.localResponseNormalization=function(t,e,r,a){return t===void 0&&(t=5),e===void 0&&(e=1),r===void 0&&(r=1),a===void 0&&(a=.5),P.localResponseNormalization(this,t,e,r,a)},n.prototype.pool=function(t,e,r,a,o){return this.throwIfDisposed(),P.pool(this,t,e,r,a,o)},n.prototype.variable=function(t,e,r){return t===void 0&&(t=!0),this.throwIfDisposed(),bt().makeVariable(this,t,e,r)},n.prototype.unsortedSegmentSum=function(t,e){return this.throwIfDisposed(),P.unsortedSegmentSum(this,t,e)},n.prototype.batchToSpaceND=function(t,e){return this.throwIfDisposed(),P.batchToSpaceND(this,t,e)},n.prototype.spaceToBatchND=function(t,e){return this.throwIfDisposed(),P.spaceToBatchND(this,t,e)},n.prototype.topk=function(t,e){return t===void 0&&(t=1),e===void 0&&(e=!0),this.throwIfDisposed(),P.topk(this,t,e)},n.prototype.stridedSlice=function(t,e,r,a,o,i,s,u){return a===void 0&&(a=0),o===void 0&&(o=0),i===void 0&&(i=0),s===void 0&&(s=0),u===void 0&&(u=0),this.throwIfDisposed(),P.stridedSlice(this,t,e,r,a,o,i,s,u)},n.prototype.depthToSpace=function(t,e){return this.throwIfDisposed(),P.depthToSpace(this,t,e)},n.prototype.fft=function(){return this.throwIfDisposed(),P.spectral.fft(this)},n.prototype.ifft=function(){return this.throwIfDisposed(),P.spectral.ifft(this)},n.prototype.rfft=function(){return this.throwIfDisposed(),P.spectral.rfft(this)},n.prototype.irfft=function(){return this.throwIfDisposed(),P.spectral.irfft(this)},n}();Object.defineProperty(me,Symbol.hasInstance,{value:function(n){return!!n&&n.dataId!=null&&n.shape!=null&&n.dtype!=null}});var Lo,Vo,Wo,zo,Uo,hr=function(n){function t(e,r,a,o){var i=n.call(this,e.shape,e.dtype,e.dataId,o)||this;return i.trainable=r,i.name=a,i}return pt(t,n),t.prototype.assign=function(e){if(e.dtype!==this.dtype)throw new Error("dtype of the new value ("+e.dtype+") and previous value ("+this.dtype+") must match");if(!Te(e.shape,this.shape))throw new Error("shape of the new value ("+e.shape+") and previous value ("+this.shape+") must match");bt().disposeTensor(this),this.dataId=e.dataId,bt().incRef(this,null)},t.prototype.dispose=function(){bt().disposeVariable(this),this.isDisposedInternal=!0},t}(me);Object.defineProperty(hr,Symbol.hasInstance,{value:function(n){return n instanceof me&&n.assign!=null&&n.assign instanceof Function}}),function(n){n.R0="R0",n.R1="R1",n.R2="R2",n.R3="R3",n.R4="R4",n.R5="R5",n.R6="R6"}(Lo||(Lo={})),function(n){n.float32="float32",n.int32="int32",n.bool="int32",n.complex64="complex64"}(Vo||(Vo={})),function(n){n.float32="float32",n.int32="int32",n.bool="bool",n.complex64="complex64"}(Wo||(Wo={})),function(n){n.float32="float32",n.int32="float32",n.bool="float32",n.complex64="complex64"}(zo||(zo={})),function(n){n.float32="complex64",n.int32="complex64",n.bool="complex64",n.complex64="complex64"}(Uo||(Uo={}));var Af={float32:zo,int32:Vo,bool:Wo,complex64:Uo};function Oe(n,t){if(n==="string"||t==="string"){if(n==="string"&&t==="string")return"string";throw new Error("Can not upcast "+n+" with "+t)}return Af[n][t]}function ea(n){return Oe(n,"int32")}function be(n,t){if(n.dtype===t.dtype)return[n,t];var e=Oe(n.dtype,t.dtype);return[n.cast(e),t.cast(e)]}function Uc(n,t){E(n.dtype===t.dtype,function(){return"The dtypes of the first("+n.dtype+") and second("+t.dtype+") input must match"})}function Ni(n){var t=[];return function e(r,a,o){if(r!=null){if(r instanceof me)return void a.push(r);if(i=r,!(!Array.isArray(i)&&typeof i!="object")){var i,s=r;for(var u in s){var c=s[u];o.has(c)||(o.add(c),e(c,a,o))}}}}(n,t,new Set),t}var lo,Df=Object.freeze({makeTypesMatch:be,assertTypesMatch:Uc,isTensorInList:function(n,t){return t.some(function(e){return e.id===n.id})},getTensorsInContainer:Ni}),Iu=function(){function n(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null}}return n.prototype.dispose=function(){for(var t in this.registeredVariables)this.registeredVariables[t].dispose()},n}(),Of=function(){function n(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new Iu}return n.prototype.ready=function(){return Y(this,void 0,void 0,function(){var t,e,r;return Q(this,function(a){switch(a.label){case 0:if(this.pendingBackendInit!=null)return[2,this.pendingBackendInit.then(function(){})];if(this.backendInstance!=null)return[2];t=this.getSortedBackends(),e=0,a.label=1;case 1:return e<t.length?(r=t[e],[4,this.initializeBackend(r).success]):[3,5];case 2:return a.sent()?[4,this.setBackend(r)]:[3,4];case 3:return a.sent(),[2];case 4:return e++,[3,1];case 5:throw new Error("Could not initialize any backends, all backend initializations failed.")}})})},Object.defineProperty(n.prototype,"backend",{get:function(){if(this.pendingBackendInit!=null)throw new Error("Backend '"+this.backendName+"' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");if(this.backendInstance==null){var t=this.initializeBackendsAndReturnBest(),e=t.name;if(t.asyncInit)throw new Error("The highest priority backend '"+e+"' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");this.setBackend(e)}return this.backendInstance},enumerable:!0,configurable:!0}),n.prototype.backendNames=function(){return Object.keys(this.registryFactory)},n.prototype.findBackend=function(t){return!(t in this.registry)&&(!(t in this.registryFactory)||this.initializeBackend(t).asyncInit)?null:this.registry[t]},n.prototype.findBackendFactory=function(t){return t in this.registryFactory?this.registryFactory[t].factory:null},n.prototype.registerBackend=function(t,e,r){return r===void 0&&(r=1),t in this.registryFactory?(console.warn(t+" backend was already registered. Reusing existing backend factory."),!1):(this.registryFactory[t]={factory:e,priority:r},!0)},n.prototype.setBackend=function(t){return Y(this,void 0,void 0,function(){var e,r,a;return Q(this,function(o){switch(o.label){case 0:if(this.registryFactory[t]==null)throw new Error("Backend name '"+t+"' not found in registry");return this.backendName=t,this.registry[t]!=null?[3,4]:(this.backendInstance=null,e=this.initializeBackend(t),r=e.success,e.asyncInit?[4,r]:[3,2]);case 1:return a=o.sent(),[3,3];case 2:a=r,o.label=3;case 3:if(!a)return[2,!1];o.label=4;case 4:return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new Rf(this.backendInstance),[2,!0]}})})},n.prototype.setupRegisteredKernels=function(){var t=this;Mo(this.backendName).forEach(function(e){e.setupFunc!=null&&e.setupFunc(t.backendInstance)})},n.prototype.disposeRegisteredKernels=function(t){var e=this;Mo(t).forEach(function(r){r.disposeFunc!=null&&r.disposeFunc(e.registry[t])})},n.prototype.initializeBackend=function(t){var e=this,r=this.registryFactory[t];if(r==null)throw new Error("Cannot initialize backend "+t+", no registration found.");try{var a=r.factory();if(Promise.resolve(a)===a){var o=++this.pendingBackendInitId,i=a.then(function(s){return!(o<e.pendingBackendInitId)&&(e.registry[t]=s,e.pendingBackendInit=null,!0)}).catch(function(s){return!(o<e.pendingBackendInitId)&&(e.pendingBackendInit=null,console.warn("Initialization of backend "+t+" failed"),console.warn(s.stack||s.message),!1)});return this.pendingBackendInit=i,{success:i,asyncInit:!0}}return this.registry[t]=a,{success:!0,asyncInit:!1}}catch(s){return console.warn("Initialization of backend "+t+" failed"),console.warn(s.stack||s.message),{success:!1,asyncInit:!1}}},n.prototype.removeBackend=function(t){if(!(t in this.registryFactory))throw new Error(t+" backend not found in registry");this.backendName===t&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)},n.prototype.getSortedBackends=function(){var t=this;if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort(function(e,r){return t.registryFactory[r].priority-t.registryFactory[e].priority})},n.prototype.initializeBackendsAndReturnBest=function(){for(var t=this.getSortedBackends(),e=0;e<t.length;e++){var r=t[e],a=this.initializeBackend(r),o=a.success,i=a.asyncInit;if(i||o)return{name:r,asyncInit:i}}throw new Error("Could not initialize any backends, all backend initializations failed.")},n.prototype.moveData=function(t,e){var r=this.state.tensorInfo.get(e),a=r.backend,o=this.readSync(e);a.disposeData(e),r.backend=t,t.move(e,o,r.shape,r.dtype),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++},n.prototype.tidy=function(t,e){var r,a=this,o=null;if(e==null){if(typeof t!="function")throw new Error("Please provide a function to tidy()");e=t}else{if(typeof t!="string"&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof e!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");o=t}return this.scopedRun(function(){return a.startScope(o)},function(){return a.endScope(r)},function(){return(r=e())instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),r})},n.prototype.scopedRun=function(t,e,r){t();try{var a=r();return e(),a}catch(o){throw e(),o}},n.prototype.nextTensorId=function(){return n.nextTensorId++},n.prototype.nextVariableId=function(){return n.nextVariableId++},n.prototype.clone=function(t){var e=this.makeTensorFromDataId(t.dataId,t.shape,t.dtype),r={x:t};return this.addTapeNode(this.state.activeScope.name,r,[e],function(a){return{x:function(){return a.toFloat()}}},[],{}),e},n.prototype.runKernel=function(t,e,r,a,o){return this.runKernelFunc(null,e,null,t,r,a,o)},n.prototype.shouldCheckForMemLeaks=function(){return this.ENV.getBool("IS_TEST")},n.prototype.checkKernelForMemLeak=function(t,e,r){var a=this.backend.numDataIds(),o=0;r.forEach(function(u){o+=u.dtype==="complex64"?3:1});var i=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],s=a-e-o-i;if(s>0)throw new Error("Backend '"+this.backendName+"' has an internal memory leak ("+s+" data ids) after running '"+t+"'")},n.prototype.runKernelFunc=function(t,e,r,a,o,i,s){var u,c=this,l=[],p=this.isTapeOn();a==null&&(a=this.state.activeScope!=null?this.state.activeScope.name:"");var d,f=this.state.numBytes,h=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);var m,v=hi(a,this.backendName);if(v!=null)d=function(){var y=c.backend.numDataIds();m=v.kernelFunc({inputs:e,attrs:o,backend:c.backend});var x=Array.isArray(m)?m:[m];c.shouldCheckForMemLeaks()&&c.checkKernelForMemLeak(a,y,x);var b=x.map(function(I){var R=I.dataId,k=I.shape,T=I.dtype;return c.makeTensorFromDataId(R,k,T)});if(p){var w=c.getTensorsForGradient(a,e,b);if(w==null){s==null&&(s=[]);var N=b.filter(function(I,R){return s[R]});w=(i||[]).slice().concat(N)}l=c.saveTensorsForBackwardMode(w)}return b};else{var g=function(y){p&&(l=y.map(function(x){return c.keep(c.clone(x))}))};d=function(){var y=c.backend.numDataIds();m=c.tidy(function(){return t(c.backend,g)});var x=Array.isArray(m)?m:[m];return c.shouldCheckForMemLeaks()&&c.checkKernelForMemLeak(a,y,x),x}}return this.scopedRun(function(){return c.state.kernelDepth++},function(){return c.state.kernelDepth--},function(){u=c.ENV.getBool("DEBUG")?c.profiler.profileKernel(a,e,function(){return d()}):d()}),p&&this.addTapeNode(a,e,u,r,l,o),this.state.profiling&&this.state.activeProfile.kernels.push({name:a,bytesAdded:this.state.numBytes-f,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-h,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(e).map(function(y){return e[y].shape}),outputShapes:u.map(function(y){return y.shape})}),Array.isArray(m)?u:u[0]},n.prototype.saveTensorsForBackwardMode=function(t){var e=this;return t.map(function(r){return e.keep(e.clone(r))})},n.prototype.getTensorsForGradient=function(t,e,r){var a=Fo(t);if(a!=null){var o=a.inputsToSave||[],i=a.outputsToSave||[],s=void 0;a.saveAllInputs?(E(Array.isArray(e),function(){return"saveAllInputs is true, expected inputs to be an array."}),s=Object.keys(e).map(function(c){return e[c]})):s=o.map(function(c){return e[c]});var u=r.filter(function(c,l){return i[l]});return s.concat(u)}return null},n.prototype.makeTensor=function(t,e,r,a){if(t==null)throw new Error("Values passed to engine.makeTensor() are null");r=r||"float32",a=a||this.backend;var o=t;r==="string"&&jt(t[0])&&(o=t.map(function(l){return Vc(l)}));var i=a.write(o,e,r),s=new me(e,r,i,this.nextTensorId());if(this.incRef(s,a),r==="string"){var u=this.state.tensorInfo.get(i),c=Pc(o);this.state.numBytes+=c-u.bytes,u.bytes=c}return s},n.prototype.makeTensorFromDataId=function(t,e,r,a){var o=new me(e,r=r||"float32",t,this.nextTensorId());return this.incRef(o,a),o},n.prototype.makeVariable=function(t,e,r,a){e===void 0&&(e=!0),r=r||this.nextVariableId().toString(),a!=null&&a!==t.dtype&&(t=t.asType(a));var o=new hr(t,e,r,this.nextTensorId());if(this.state.registeredVariables[o.name]!=null)throw new Error("Variable with name "+o.name+" was already registered");return this.state.registeredVariables[o.name]=o,this.incRef(o,this.backend),o},n.prototype.incRef=function(t,e){var r=this.state.tensorInfo.has(t.dataId)?this.state.tensorInfo.get(t.dataId).refCount:0;if(this.state.numTensors++,t.dtype==="string"&&this.state.numStringTensors++,r===0){this.state.numDataBuffers++;var a=0;t.dtype!=="complex64"&&t.dtype!=="string"&&(a=t.size*yi(t.dtype)),this.state.tensorInfo.set(t.dataId,{backend:e||this.backend,dtype:t.dtype,shape:t.shape,bytes:a,refCount:0}),this.state.numBytes+=a}this.state.tensorInfo.get(t.dataId).refCount++,t instanceof hr||this.track(t)},n.prototype.disposeTensor=function(t){if(this.state.tensorInfo.has(t.dataId)){this.state.numTensors--,t.dtype==="string"&&this.state.numStringTensors--;var e=this.state.tensorInfo.get(t.dataId);e.refCount<=1?(t.dtype!=="complex64"&&(this.state.numBytes-=e.bytes),this.state.numDataBuffers--,e.backend.disposeData(t.dataId),this.state.tensorInfo.delete(t.dataId)):this.state.tensorInfo.get(t.dataId).refCount--}},n.prototype.disposeVariables=function(){for(var t in this.state.registeredVariables){var e=this.state.registeredVariables[t];this.disposeVariable(e)}},n.prototype.disposeVariable=function(t){this.disposeTensor(t),this.state.registeredVariables[t.name]!=null&&delete this.state.registeredVariables[t.name]},n.prototype.memory=function(){var t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,t.reasons==null&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t},n.prototype.profile=function(t){return Y(this,void 0,void 0,function(){var e,r;return Q(this,function(a){return this.state.profiling=!0,e=this.state.numBytes,r=this.state.numTensors,this.state.activeProfile.kernels=[],this.state.activeProfile.result=t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max.apply(Math,this.state.activeProfile.kernels.map(function(o){return o.totalBytesSnapshot})),this.state.activeProfile.newBytes=this.state.numBytes-e,this.state.activeProfile.newTensors=this.state.numTensors-r,[2,this.state.activeProfile]})})},n.prototype.isTapeOn=function(){return this.state.gradientDepth>0&&this.state.kernelDepth===0},n.prototype.addTapeNode=function(t,e,r,a,o,i){var s=this,u={id:this.state.nextTapeNodeId++,kernelName:t,inputs:e,outputs:r,saved:o},c=Fo(t);c!=null&&(a=c.gradFunc),a!=null&&(u.gradient=function(l){return l=l.map(function(p,d){if(p==null){var f=r[d],h=Kn(f.size,f.dtype);return s.makeTensor(h,f.shape,f.dtype)}return p}),a(l.length>1?l:l[0],o,i)}),this.state.activeTape.push(u)},n.prototype.keep=function(t){return t.kept=!0,t},n.prototype.startTape=function(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++},n.prototype.endTape=function(){this.state.gradientDepth--},n.prototype.startScope=function(t){var e={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(e.name=t),this.state.scopeStack.push(e),this.state.activeScope=e},n.prototype.endScope=function(t){for(var e=this,r=Ni(t),a=new Set(r.map(function(u){return u.id})),o=0;o<this.state.activeScope.track.length;o++){var i=this.state.activeScope.track[o];i.kept||a.has(i.id)||i.dispose()}var s=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],r.forEach(function(u){u.kept||u.scopeId!==s.id||e.track(u)})},n.prototype.gradients=function(t,e,r,a){var o=this;if(a===void 0&&(a=!1),E(e.length>0,function(){return"gradients() received an empty list of xs."}),r!=null&&r.dtype!=="float32")throw new Error("dy must have 'float32' dtype, but has '"+r.dtype+"'");var i=this.scopedRun(function(){return o.startTape()},function(){return o.endTape()},function(){return o.tidy("forward",t)});E(i instanceof me,function(){return"The result y returned by f() must be a tensor."});var s=function(u,c,l){for(var p={},d={},f=0;f<c.length;f++)p[c[f].id]=!0;for(f=0;f<u.length;f++){var h=(N=u[f]).inputs;for(var m in h){for(var v=h[m],g=!1,y=0;y<c.length;y++)if(p[v.id]){N.outputs.forEach(function(T){return p[T.id]=!0}),g=!0,d[N.id]=!0;break}if(g)break}}var x={};x[l.id]=!0;var b={};for(f=u.length-1;f>=0;f--)for(h=(N=u[f]).inputs,y=0;y<N.outputs.length;y++)if(x[N.outputs[y].id]){for(var m in h)x[h[m].id]=!0,b[N.id]=!0;break}var w=[];for(f=0;f<u.length;f++){var N;if(d[(N=u[f]).id]&&b[N.id]){var I={};for(var m in N.inputs){var R=N.inputs[m];p[R.id]&&(I[m]=R)}var k=Object.assign({},N);k.inputs=I,k.outputs=N.outputs,w.push(k)}}return w}(this.state.activeTape,e,i);if(!a&&s.length===0&&e.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",function(){var u,c,l={};l[i.id]=r==null?(u=i.shape,c=bi($(u),"float32"),A.makeTensor(c,u,"float32")):r,function(d,f,h){for(var m=function(g){var y=f[g],x=[];if(y.outputs.forEach(function(I){var R=d[I.id];R!=null?x.push(R):x.push(null)}),y.gradient==null)throw new Error("Cannot compute gradient: gradient function not found for "+y.kernelName+".");var b=y.gradient(x),w=function(I){if(!(I in b))throw new Error("Cannot backprop through input "+I+". Available gradients found: "+Object.keys(b)+".");var R=h(function(){return b[I]()});if(R.dtype!=="float32")throw new Error("Error in gradient for op "+y.kernelName+". The gradient of input "+I+" must have 'float32' dtype, but has '"+R.dtype+"'");var k=y.inputs[I];if(!Te(R.shape,k.shape))throw new Error("Error in gradient for op "+y.kernelName+". The gradient of input '"+I+"' has shape '"+R.shape+"', which does not match the shape of the input '"+k.shape+"'");if(d[k.id]==null)d[k.id]=R;else{var T=d[k.id];d[k.id]=T.add(R),T.dispose()}};for(var N in y.inputs)w(N)},v=f.length-1;v>=0;v--)m(v)}(l,s,function(d){return o.tidy(d)});var p=e.map(function(d){return l[d.id]});return o.state.gradientDepth===0&&(o.state.activeTape.forEach(function(d){for(var f=0,h=d.saved;f<h.length;f++)h[f].dispose()}),o.state.activeTape=null),{value:i,grads:p}})},n.prototype.customGrad=function(t){var e=this;return E(Jt(t),function(){return"The f passed in customGrad(f) must be a function."}),function(){for(var r,a=[],o=0;o<arguments.length;o++)a[o]=arguments[o];E(a.every(function(s){return s instanceof me}),function(){return"The args passed in customGrad(f)(x1, x2,...) must all be tensors"});var i={};return a.forEach(function(s,u){i[u]=s}),e.runKernelFunc(function(s,u){return E((r=t.apply(void 0,a.concat([u]))).value instanceof me,function(){return"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"}),E(Jt(r.gradFunc),function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."}),r.value},i,function(s,u){var c=r.gradFunc(s,u),l=Array.isArray(c)?c:[c];E(l.length===a.length,function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."}),E(l.every(function(d){return d instanceof me}),function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors."});var p={};return l.forEach(function(d,f){p[f]=function(){return d}}),p})}},n.prototype.readSync=function(t){return this.state.tensorInfo.get(t).backend.readSync(t)},n.prototype.read=function(t){return this.state.tensorInfo.get(t).backend.read(t)},n.prototype.time=function(t){return Y(this,void 0,void 0,function(){var e,r;return Q(this,function(a){switch(a.label){case 0:return e=it(),[4,this.backend.time(t)];case 1:return(r=a.sent()).wallMs=it()-e,[2,r]}})})},n.prototype.track=function(t){return this.state.activeScope!=null&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t},Object.defineProperty(n.prototype,"registeredVariables",{get:function(){return this.state.registeredVariables},enumerable:!0,configurable:!0}),n.prototype.reset=function(){for(var t in this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new Iu,this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null},n.nextTensorId=0,n.nextVariableId=0,n}(),A=function(){var n=function(){if(lo==null){var e=void 0;if(typeof window!="undefined")e=window;else if(typeof global!="undefined")e=global;else if(typeof process!="undefined")e=process;else{if(typeof self=="undefined")throw new Error("Could not find a global object");e=self}lo=e}return lo}();if(n._tfengine==null){var t=new kc(n);n._tfengine=new Of(t)}return function(e){fi=e}(n._tfengine.ENV),bt=function(){return n._tfengine},n._tfengine}();function Gc(){return typeof window!="undefined"&&window.document!=null||typeof WorkerGlobalScope!="undefined"}var At=M();At.registerFlag("DEBUG",function(){return!1},function(n){n&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")}),At.registerFlag("IS_BROWSER",function(){return Gc()}),At.registerFlag("IS_NODE",function(){return typeof process!="undefined"&&process.versions!==void 0&&process.versions.node!==void 0}),At.registerFlag("IS_CHROME",function(){return typeof navigator!="undefined"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)}),At.registerFlag("PROD",function(){return!1}),At.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",function(){return At.getBool("DEBUG")}),At.registerFlag("DEPRECATION_WARNINGS_ENABLED",function(){return!0}),At.registerFlag("IS_TEST",function(){return!1});var mr,Qe,$e,ln={},po={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function Hc(n,t){ln[n]=t}function It(n){n in ln||(ln[n]=function(e){if(e!==1&&e!==2)throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");var r=function(a){if(typeof OffscreenCanvas!="undefined"&&a===2)return new OffscreenCanvas(300,150);if(typeof document!="undefined")return document.createElement("canvas");throw new Error("Cannot create a canvas in this context")}(e);return r.addEventListener("webglcontextlost",function(a){a.preventDefault(),delete ln[e]},!1),e===1?r.getContext("webgl",po)||r.getContext("experimental-webgl",po):r.getContext("webgl2",po)}(n));var t=ln[n];return t.isContextLost()?(delete ln[n],It(n)):(t.disable(t.DEPTH_TEST),t.disable(t.STENCIL_TEST),t.disable(t.BLEND),t.disable(t.DITHER),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SAMPLE_COVERAGE),t.enable(t.SCISSOR_TEST),t.enable(t.CULL_FACE),t.cullFace(t.BACK),ln[n])}function Ca(n,t){return[t,n]}function ur(n){var t=$(n);return ca(Math.ceil(t/4))}function Nr(n,t){return[Math.max(1,Math.ceil(t/2)),Math.max(1,Math.ceil(n/2))]}function Si(n,t){var e,r,a,o,i,s,u,c,l,p=n;return M().getNumber("WEBGL_VERSION")===2?(e=p.R32F,r=p.R16F,a=p.RGBA16F,o=p.RGBA32F,i=p.RED,s=4,u=1,c=p.HALF_FLOAT,l=p.FLOAT):(e=n.RGBA,r=n.RGBA,a=n.RGBA,o=p.RGBA,i=n.RGBA,s=4,u=4,c=t!=null?t.HALF_FLOAT_OES:null,l=n.FLOAT),{internalFormatFloat:e,internalFormatHalfFloat:r,internalFormatPackedHalfFloat:a,internalFormatPackedFloat:o,textureFormatFloat:i,downloadTextureFormat:n.RGBA,downloadUnpackNumChannels:s,defaultNumChannels:u,textureTypeHalfFloat:c,textureTypeFloat:l}}function X(n,t,e){var r=e();return t&&function(a){var o=a.getError();if(o!==a.NO_ERROR)throw new Error("WebGL Error: "+jc(a,o))}(n),r}(function(n){n[n.DENSE=0]="DENSE",n[n.SHARED_BATCH=1]="SHARED_BATCH"})(mr||(mr={})),function(n){n[n.RENDER=0]="RENDER",n[n.UPLOAD=1]="UPLOAD",n[n.PIXELS=2]="PIXELS",n[n.DOWNLOAD=3]="DOWNLOAD"}(Qe||(Qe={})),function(n){n[n.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",n[n.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",n[n.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",n[n.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32",n[n.PACKED_2X2_FLOAT16=4]="PACKED_2X2_FLOAT16"}($e||($e={}));var _f=596e-10,Ff=65504;function qc(n){return!!(M().getBool("WEBGL_RENDER_FLOAT32_ENABLED")||n===0||_f<Math.abs(n)&&Math.abs(n)<Ff)}function jc(n,t){switch(t){case n.NO_ERROR:return"NO_ERROR";case n.INVALID_ENUM:return"INVALID_ENUM";case n.INVALID_VALUE:return"INVALID_VALUE";case n.INVALID_OPERATION:return"INVALID_OPERATION";case n.INVALID_FRAMEBUFFER_OPERATION:return"INVALID_FRAMEBUFFER_OPERATION";case n.OUT_OF_MEMORY:return"OUT_OF_MEMORY";case n.CONTEXT_LOST_WEBGL:return"CONTEXT_LOST_WEBGL";default:return"Unknown error code "+t}}function ar(n,t,e){return Vt(n,t,function(){return n.getExtension(e)},'Extension "'+e+'" not supported on this browser.')}function Kc(n,t,e){var r=Vt(n,t,function(){return n.createShader(n.VERTEX_SHADER)},"Unable to create vertex WebGLShader.");if(X(n,t,function(){return n.shaderSource(r,e)}),X(n,t,function(){return n.compileShader(r)}),n.getShaderParameter(r,n.COMPILE_STATUS)===!1)throw console.log(n.getShaderInfoLog(r)),new Error("Failed to compile vertex shader.");return r}function Xc(n,t,e){var r=Vt(n,t,function(){return n.createShader(n.FRAGMENT_SHADER)},"Unable to create fragment WebGLShader.");if(X(n,t,function(){return n.shaderSource(r,e)}),X(n,t,function(){return n.compileShader(r)}),n.getShaderParameter(r,n.COMPILE_STATUS)===!1)throw function(a,o){var i=Mf.exec(o);if(i==null)return console.log("Couldn't parse line number in error: "+o),void console.log(a);for(var s=+i[1],u=a.split(`
`),c=u.length.toString().length+2,l=u.map(function(v,g){return hn((g+1).toString(),c)+v}),p=0,d=0;d<l.length;d++)p=Math.max(l[d].length,p);var f=l.slice(0,s-1),h=l.slice(s-1,s),m=l.slice(s);console.log(f.join(`
`)),console.log(o.split(`
`)[0]),console.log("%c "+hn(h[0],p),"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(m.join(`
`))}(e,n.getShaderInfoLog(r)),new Error("Failed to compile fragment shader.");return r}var ta,na,Mf=/ERROR: [0-9]+:([0-9]+):/g;function $c(n,t){return Vt(n,t,function(){return n.createProgram()},"Unable to create WebGLProgram.")}function Yc(n,t,e){if(X(n,t,function(){return n.linkProgram(e)}),n.getProgramParameter(e,n.LINK_STATUS)===!1)throw console.log(n.getProgramInfoLog(e)),new Error("Failed to link vertex and fragment shaders.")}function ra(n,t,e){if(X(n,t,function(){return n.validateProgram(e)}),n.getProgramParameter(e,n.VALIDATE_STATUS)===!1)throw console.log(n.getProgramInfoLog(e)),new Error("Shader program validation failed.")}function Qc(n,t,e){var r=Vt(n,t,function(){return n.createBuffer()},"Unable to create WebGLBuffer");return X(n,t,function(){return n.bindBuffer(n.ARRAY_BUFFER,r)}),X(n,t,function(){return n.bufferData(n.ARRAY_BUFFER,e,n.STATIC_DRAW)}),r}function Jc(n,t,e){var r=Vt(n,t,function(){return n.createBuffer()},"Unable to create WebGLBuffer");return X(n,t,function(){return n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,r)}),X(n,t,function(){return n.bufferData(n.ELEMENT_ARRAY_BUFFER,e,n.STATIC_DRAW)}),r}function Zc(n,t){return Vt(n,t,function(){return n.createTexture()},"Unable to create WebGLTexture.")}function el(n,t){var e=M().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(n<=0||t<=0){var r="["+n+"x"+t+"]";throw new Error("Requested texture size "+r+" is invalid.")}if(n>e||t>e)throw r="["+n+"x"+t+"]",new Error("Requested texture size "+r+" greater than WebGL maximum on this browser / GPU "+("["+e+"x"+e+"]")+".")}function tl(n,t){return Vt(n,t,function(){return n.createFramebuffer()},"Unable to create WebGLFramebuffer.")}function Go(n,t,e,r,a,o,i,s){var u=n.getAttribLocation(e,r);return u!==-1&&(X(n,t,function(){return n.bindBuffer(n.ARRAY_BUFFER,a)}),X(n,t,function(){return n.vertexAttribPointer(u,o,n.FLOAT,!1,i,s)}),X(n,t,function(){return n.enableVertexAttribArray(u)}),!0)}function nl(n,t,e,r){sl(n,r),X(n,t,function(){return n.activeTexture(n.TEXTURE0+r)}),X(n,t,function(){return n.bindTexture(n.TEXTURE_2D,e)})}function rl(n,t,e,r){return Vt(n,t,function(){return n.getUniformLocation(e,r)},'uniform "'+r+'" not present in program.')}function al(n,t,e){return n.getUniformLocation(t,e)}function ol(n,t,e,r,a,o){X(n,t,function(){return nl(n,t,r,o)}),X(n,t,function(){return n.uniform1i(a,o)})}function aa(n,t,e,r){X(n,t,function(){return n.bindFramebuffer(n.FRAMEBUFFER,r)}),X(n,t,function(){return n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e,0)})}function Ho(n,t,e){X(n,t,function(){return n.bindFramebuffer(n.FRAMEBUFFER,e)}),X(n,t,function(){return n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,null,0)})}function or(n){var t=n.checkFramebufferStatus(n.FRAMEBUFFER);if(t!==n.FRAMEBUFFER_COMPLETE)throw new Error("Error binding framebuffer: "+il(n,t))}function il(n,t){switch(t){case n.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case n.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case n.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case n.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";default:return"unknown error "+t}}function Vt(n,t,e,r){var a=X(n,t,function(){return e()});if(a==null)throw new Error(r);return a}function sl(n,t){var e=n.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,r=t+n.TEXTURE0;if(r<n.TEXTURE0||r>e)throw new Error("textureUnit must be in "+("[gl.TEXTURE0, gl.TEXTURE"+e+"]")+".")}function vr(n,t){return t===void 0&&(t=2),$(n.slice(0,n.length-t))}function gr(n){if(n.length===0)throw Error("Cannot get rows and columns of an empty shape array.");return[n.length>1?n[n.length-2]:1,n[n.length-1]]}function oa(n){var t=[1,1,1];return n.length===0||n.length===1&&n[0]===1||(t=[vr(n)].concat(gr(n))),t}function ul(n,t){var e;t===void 0&&(t=!1);var r=M().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(t&&(r*=2,(n=n.map(function(c,l){return l>=n.length-2?gi(n[l]):n[l]})).length===1&&(n=[2,n[0]])),n.length!==2){var a=qt(n);n=a.newShape}var o=$(n);if(n.length<=1&&o<=r)return[1,o];if(n.length===2&&n[0]<=r&&n[1]<=r)return n;if(n.length===3&&n[0]*n[1]<=r&&n[2]<=r)return[n[0]*n[1],n[2]];if(n.length===3&&n[0]<=r&&n[1]*n[2]<=r)return[n[0],n[1]*n[2]];if(n.length===4&&n[0]*n[1]*n[2]<=r&&n[3]<=r)return[n[0]*n[1]*n[2],n[3]];if(n.length===4&&n[0]<=r&&n[1]*n[2]*n[3]<=r)return[n[0],n[1]*n[2]*n[3]];if(t){var i=vr(n),s=2,u=2;return n.length&&(s=(e=gr(n))[0],u=e[1]),ca(o=i*(s/2)*(u/2)).map(function(c){return 2*c})}return ca(o)}function Vr(n){return n%2==0}function ir(n,t){if(Te(n=n.slice(-2),t=t.slice(-2))||!n.length||!t.length||n[0]===0||n[1]===0||t[0]===0||t[1]===0)return!0;if(n.length!==t.length){var e=n.slice(-1)[0],r=t.slice(-1)[0];if(e===r||Vr(e)&&Vr(r)&&(n[0]===1||t[0]===1))return!0}return n[1]===t[1]&&Vr(n[0])&&Vr(t[0])}function cl(n){if(ta==null){var t=It(n);ta=t.getParameter(t.MAX_TEXTURE_SIZE)}return ta}function ll(n){if(na==null){var t=It(n);na=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,na)}function pl(n){if(n===0)return 0;var t=It(n);return Je(t,"EXT_disjoint_timer_query_webgl2")&&n===2?2:Je(t,"EXT_disjoint_timer_query")?1:0}function Je(n,t){return n.getExtension(t)!=null}function qo(n){try{if(It(n)!=null)return!0}catch(t){return!1}return!1}function dl(n){if(n===0)return!1;var t=It(n);if(n===1){if(!Je(t,"OES_texture_float"))return!1}else if(!Je(t,"EXT_color_buffer_float"))return!1;return jo(t)}function fl(n){if(n===0)return!1;var t=It(n);if(n!==1){if(Je(t,"EXT_color_buffer_float"))return jo(t);if(Je(t,"EXT_color_buffer_half_float")){var e=t.getExtension("EXT_color_buffer_half_float");return function(r,a){var o=Si(r,a),i=r.createTexture();r.bindTexture(r.TEXTURE_2D,i),r.texImage2D(r.TEXTURE_2D,0,o.internalFormatHalfFloat,1,1,0,o.textureFormatFloat,o.textureTypeHalfFloat,null);var s=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,s),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,i,0);var u=r.checkFramebufferStatus(r.FRAMEBUFFER)===r.FRAMEBUFFER_COMPLETE;return r.bindTexture(r.TEXTURE_2D,null),r.bindFramebuffer(r.FRAMEBUFFER,null),r.deleteTexture(i),r.deleteFramebuffer(s),u}(t,e)}return!1}return!!Je(t,"OES_texture_float")&&!!Je(t,"WEBGL_color_buffer_float")&&jo(t)}function jo(n){var t=Si(n),e=n.createTexture();n.bindTexture(n.TEXTURE_2D,e),n.texImage2D(n.TEXTURE_2D,0,t.internalFormatFloat,1,1,0,t.textureFormatFloat,t.textureTypeFloat,null);var r=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,r),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e,0);var a=n.checkFramebufferStatus(n.FRAMEBUFFER)===n.FRAMEBUFFER_COMPLETE;return n.bindTexture(n.TEXTURE_2D,null),n.bindFramebuffer(n.FRAMEBUFFER,null),n.deleteTexture(e),n.deleteFramebuffer(r),a}function hl(n){return n===2&&It(n).fenceSync!=null}var Pf=Object.freeze({callAndCheck:X,canBeRepresented:qc,getWebGLErrorMessage:jc,getExtensionOrThrow:ar,createVertexShader:Kc,createFragmentShader:Xc,createProgram:$c,linkProgram:Yc,validateProgram:ra,createStaticVertexBuffer:Qc,createStaticIndexBuffer:Jc,getNumChannels:function(){return M().getNumber("WEBGL_VERSION")===2?1:4},createTexture:Zc,validateTextureSize:el,createFramebuffer:tl,bindVertexBufferToProgramAttribute:Go,bindTextureUnit:nl,unbindTextureUnit:function(n,t,e){sl(n,e),X(n,t,function(){return n.activeTexture(n.TEXTURE0+e)}),X(n,t,function(){return n.bindTexture(n.TEXTURE_2D,null)})},getProgramUniformLocationOrThrow:rl,getProgramUniformLocation:al,bindTextureToProgramUniformSampler:ol,bindCanvasToFramebuffer:function(n,t){X(n,t,function(){return n.bindFramebuffer(n.FRAMEBUFFER,null)}),X(n,t,function(){return n.viewport(0,0,n.canvas.width,n.canvas.height)}),X(n,t,function(){return n.scissor(0,0,n.canvas.width,n.canvas.height)})},bindColorTextureToFramebuffer:aa,unbindColorTextureFromFramebuffer:Ho,validateFramebuffer:or,getFramebufferErrorMessage:il,getBatchDim:vr,getRowsCols:gr,getShapeAs3D:oa,getTextureShapeFromLogicalShape:ul,isReshapeFree:ir,getWebGLMaxTextureSize:cl,resetMaxTextureSize:function(){ta=null},resetMaxTexturesInShader:function(){na=null},getMaxTexturesInShader:ll,getWebGLDisjointQueryTimerVersion:pl,hasExtension:Je,isWebGLVersionEnabled:qo,isCapableOfRenderingToFloatTexture:dl,isDownloadFloatTextureEnabled:fl,isWebGLFenceEnabled:hl}),te=M();function Bf(){M().set("PROD",!0)}function Lf(){M().set("DEBUG",!0)}function Vf(){M().set("DEPRECATION_WARNINGS_ENABLED",!1),console.warn("TensorFlow.js deprecation warnings have been disabled.")}function Ei(n){M().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(n+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")}function Wf(){A.disposeVariables()}function Ii(){return A}function zf(){return A.memory()}function Uf(n){return A.profile(n)}function Z(n,t){return A.tidy(n,t)}function We(n){Ni(n).forEach(function(t){return t.dispose()})}function ml(n){return A.keep(n)}function Gf(n){return A.time(n)}function Hf(n){return A.setBackend(n)}function qf(){return A.ready()}function vl(){return A.backendName}function jf(n){A.removeBackend(n)}function Kf(n){return A.findBackend(n)}function Xf(n){return A.findBackendFactory(n)}function $f(n,t,e){return e===void 0&&(e=1),A.registerBackend(n,t,e)}function gl(){return A.backend}function Yf(n,t){M().setPlatform(n,t)}function da(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];M().getBool("IS_TEST")||console.warn.apply(console,n)}function St(n,t){var e=n;if(Fe(n))return t==="string"?[]:[n.length];if(!Array.isArray(n))return[];for(var r=[];Array.isArray(e)||Fe(e)&&t!=="string";)r.push(e.length),e=e[0];return Array.isArray(n)&&M().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&function a(o,i,s){if(s=s||[],!Array.isArray(o)&&!Fe(o))return void E(i.length===0,function(){return"Element arr["+s.join("][")+"] is a primitive, but should be an array/TypedArray of "+i[0]+" elements"});E(i.length>0,function(){return"Element arr["+s.join("][")+"] should be a primitive, but is an array of "+o.length+" elements"}),E(o.length===i[0],function(){return"Element arr["+s.join("][")+"] should have "+i[0]+" elements, but has "+o.length+" elements"});for(var u=i.slice(1),c=0;c<o.length;++c)a(o[c],u,s.concat(c))}(n,r,[]),r}function Ru(n,t,e,r){if(n!=null&&(n!=="numeric"&&n!==t||n==="numeric"&&t==="string"))throw new Error("Argument '"+e+"' passed to '"+r+"' must be "+n+" tensor, but got "+t+" tensor")}function S(n,t,e,r){if(r===void 0&&(r="numeric"),n instanceof me)return Ru(r,n.dtype,t,e),n;var a=jn(n);if(a!=="string"&&["bool","int32","float32"].indexOf(r)>=0&&(a=r),Ru(r,a,t,e),n==null||!Fe(n)&&!Array.isArray(n)&&typeof n!="number"&&typeof n!="boolean"&&typeof n!="string"){var o=n==null?"null":n.constructor.name;throw new Error("Argument '"+t+"' passed to '"+e+"' must be a Tensor or TensorLike, but got '"+o+"'")}var i=St(n,a);Fe(n)||Array.isArray(n)||(n=[n]);var s=a!=="string"?xi(n,a,M().getBool("DEBUG")):Mt(n,[],!0);return A.makeTensor(s,i,a)}function yr(n,t,e,r){if(r===void 0&&(r="numeric"),!Array.isArray(n))throw new Error("Argument "+t+" passed to "+e+" must be a `Tensor[]` or `TensorLike[]`");return n.map(function(a,o){return S(a,t+"["+o+"]",e)},r)}function Ri(n,t){for(var e=0;e<n.length;++e)if(n[n.length-e-1]!==t-1-e)return!1;return!0}function yl(n,t,e){for(var r=n.length+t.length,a=[],o=0,i=0,s=0;s<r;s++)e.indexOf(s)===-1?a.push(n[o++]):a.push(t[i++]);return a}function _e(n,t){for(var e=[],r=n.length,a=0;a<r;a++)t.indexOf(a)===-1&&e.push(n[a]);return[e,t.map(function(o){return n[o]})]}function ze(n,t){return yl(n,t.map(function(e){return 1}),t)}function Ue(n,t,e){E(Ri(t,e),function(){return n+" supports only inner-most axes for now. Got axes "+t+" and rank-"+e+" input."})}function dt(n,t){if(Ri(n,t))return null;for(var e=[],r=0;r<t;++r)n.indexOf(r)===-1&&e.push(r);return n.forEach(function(a){return e.push(a)}),e}function Na(n){return n.map(function(t,e){return[e,t]}).sort(function(t,e){return t[1]-e[1]}).map(function(t){return t[0]})}function ft(n,t){for(var e=[],r=t-n;r<t;++r)e.push(r);return e}function xl(n,t){var e=n[0].length;n.forEach(function(a,o){E(a.length===e,function(){return"Error in concat"+e+"D: rank of tensors["+o+"] must be the same as the rank of the rest ("+e+")"})}),E(t>=0&&t<e,function(){return"Error in concat"+e+"D: axis must be between 0 and "+(e-1)+"."});var r=n[0];n.forEach(function(a,o){for(var i=0;i<e;i++)E(i===t||a[i]===r[i],function(){return"Error in concat"+e+"D: Shape of tensors["+o+"] ("+a+") does not match the shape of the rest ("+r+") along the non-concatenated axis "+o+"."})})}function gn(n,t){for(var e=n[0].slice(),r=1;r<n.length;r++)e[t]+=n[r][t];return e}function D(n){var t=Object.keys(n);if(t.length!==1)throw new Error("Please provide an object with a single key (operation name) mapping to a function. Got an object with "+t.length+" keys.");var e=t[0],r=n[e];e.endsWith("_")&&(e=e.substring(0,e.length-1));var a=function(){for(var o=[],i=0;i<arguments.length;i++)o[i]=arguments[i];A.startScope(e);try{var s=r.apply(void 0,o);return s instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),A.endScope(s),s}catch(u){throw A.endScope(null),u}};return Object.defineProperty(a,"name",{value:e,configurable:!0}),a}te.registerFlag("HAS_WEBGL",function(){return te.getNumber("WEBGL_VERSION")>0}),te.registerFlag("WEBGL_VERSION",function(){return qo(2)?2:qo(1)?1:0}),te.registerFlag("WEBGL_BUFFER_SUPPORTED",function(){return te.get("WEBGL_VERSION")===2}),te.registerFlag("WEBGL_CPU_FORWARD",function(){return!0}),te.registerFlag("WEBGL_FORCE_F16_TEXTURES",function(){return!1}),te.registerFlag("WEBGL_PACK",function(){return te.getBool("HAS_WEBGL")}),te.registerFlag("WEBGL_PACK_NORMALIZATION",function(){return te.getBool("WEBGL_PACK")}),te.registerFlag("WEBGL_PACK_CLIP",function(){return te.getBool("WEBGL_PACK")}),te.registerFlag("WEBGL_PACK_DEPTHWISECONV",function(){return!1}),te.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",function(){return te.getBool("WEBGL_PACK")}),te.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",function(){return te.getBool("WEBGL_PACK")}),te.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",function(){return te.getBool("WEBGL_PACK")}),te.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",function(){return te.getBool("WEBGL_PACK")}),te.registerFlag("WEBGL_PACK_REDUCE",function(){return te.getBool("WEBGL_PACK")}),te.registerFlag("WEBGL_LAZILY_UNPACK",function(){return te.getBool("WEBGL_PACK")}),te.registerFlag("WEBGL_CONV_IM2COL",function(){return te.getBool("WEBGL_PACK")}),te.registerFlag("WEBGL_MAX_TEXTURE_SIZE",function(){return cl(te.getNumber("WEBGL_VERSION"))}),te.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",function(){return ll(te.getNumber("WEBGL_VERSION"))}),te.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",function(){var n=te.getNumber("WEBGL_VERSION");return n===0?0:pl(n)}),te.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",function(){return te.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&(n=navigator.userAgent||navigator.vendor||window.opera,!(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(n)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(n.substr(0,4))));var n}),te.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",function(){return dl(te.getNumber("WEBGL_VERSION"))}),te.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",function(){return!te.getBool("WEBGL_FORCE_F16_TEXTURES")&&te.getBool("WEBGL_RENDER_FLOAT32_CAPABLE")}),te.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",function(){return fl(te.getNumber("WEBGL_VERSION"))}),te.registerFlag("WEBGL_FENCE_API_ENABLED",function(){return hl(te.getNumber("WEBGL_VERSION"))}),te.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",function(){return te.getBool("WEBGL_RENDER_FLOAT32_ENABLED")?4:0}),zc=Ei;var De=D({complex_:function(n,t){var e=S(n,"real","complex"),r=S(t,"imag","complex");return fe(e.shape,r.shape,"real and imag shapes, "+e.shape+" and "+r.shape+", must match in call to tf.complex()."),A.runKernelFunc(function(a){return a.complex(e,r)},{$real:e,$imag:r})}}),He=D({real_:function(n){var t=S(n,"input","real");return A.runKernelFunc(function(e){return e.real(t)},{$input:t})}}),rt=D({imag_:function(n){var t=S(n,"input","imag");return A.runKernelFunc(function(e){return e.imag(t)},{$input:t})}});function Re(n,t,e){return tn(n,t,St(n,e),e)}function tn(n,t,e,r){if(r==null&&(r=jn(n)),r==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(!Fe(n)&&!Array.isArray(n)&&typeof n!="number"&&typeof n!="boolean"&&typeof n!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(t!=null){wi(t);var a=$(t),o=$(e);E(a===o,function(){return"Based on the provided shape, ["+t+"], the tensor should have "+a+" values but has "+o});for(var i=0;i<e.length;++i){var s=e[i],u=i!==e.length-1||s!==$(t.slice(i));E(e[i]===t[i]||!u,function(){return"Error creating a new Tensor. Inferred shape ("+e+") does not match the provided shape ("+t+"). "})}}return Fe(n)||Array.isArray(n)||(n=[n]),t=t||e,n=r!=="string"?xi(n,r,M().getBool("DEBUG")):Mt(n,[],!0),A.makeTensor(n,t,r)}function j(n,t){if((Fe(n)&&t!=="string"||Array.isArray(n))&&t!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(t==="string"&&Fe(n)&&!(n instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return tn(n,[],[],t)}function Bt(n,t){bn(n);var e=St(n,t);if(e.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return tn(n,null,e,t)}function mn(n,t,e){if(bn(n),t!=null&&t.length!==2)throw new Error("tensor2d() requires shape to have two numbers");var r=St(n,e);if(r.length!==2&&r.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return tn(n,t,r,e)}function ki(n,t,e){if(bn(n),t!=null&&t.length!==3)throw new Error("tensor3d() requires shape to have three numbers");var r=St(n,e);if(r.length!==3&&r.length!==1)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return tn(n,t,r,e)}function Ht(n,t,e){if(bn(n),t!=null&&t.length!==4)throw new Error("tensor4d() requires shape to have four numbers");var r=St(n,e);if(r.length!==4&&r.length!==1)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return tn(n,t,r,e)}function bl(n,t,e){if(bn(n),t!=null&&t.length!==5)throw new Error("tensor5d() requires shape to have five numbers");var r=St(n,e);if(r.length!==5&&r.length!==1)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return tn(n,t,r,e)}function wl(n,t,e){if(bn(n),t!=null&&t.length!==6)throw new Error("tensor6d() requires shape to have six numbers");var r=St(n,e);if(r.length!==6&&r.length!==1)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return tn(n,t=t||r,r,e)}function Cl(n,t,e,r){return t===void 0&&(t=!0),A.makeVariable(n,t,e,r)}function nn(n,t){if(t===void 0&&(t="float32"),t==="complex64"){var e=nn(n,"float32"),r=xe(n,"float32");return De(e,r)}var a=bi($(n),t);return A.makeTensor(a,n,t)}function xe(n,t){if(t===void 0&&(t="float32"),t==="complex64"){var e=xe(n,"float32"),r=xe(n,"float32");return De(e,r)}var a=Kn($(n),t);return A.makeTensor(a,n,t)}function Sr(n,t,e){return A.runKernelFunc(function(r){return r.fill(n,t,e)},{})}function Ti(n,t,e){if(e<=0)throw new Error("The number of values should be positive.");return A.runKernelFunc(function(r){return r.linspace(n,t,e)},{})}function Zt(n,t,e,r){if(e===void 0&&(e=1),r===void 0&&(r="float32"),e===0)throw new Error("Cannot have a step of zero");if(n===t||n<t&&e<0||t<n&&e>1)return xe([0],r);var a=Kn(Math.abs(Math.ceil((t-n)/e)),r);t<n&&e===1&&(e=-1),a[0]=n;for(var o=1;o<a.length;o++)a[o]=a[o-1]+e;return Bt(a,r)}var Sa=D({onesLike_:function(n){var t=S(n,"x","onesLike");if(t.dtype==="complex64"){var e=Sa(He(t)),r=ue(rt(t));return De(e,r)}return A.runKernelFunc(function(a){return a.onesLike(t)},{x:t},function(a,o){return{x:function(){return ue(a)}}},"OnesLike")}}),ue=D({zerosLike_:function(n){var t=S(n,"x","zerosLike");return A.runKernelFunc(function(e){return e.zerosLike(t)},{x:t},function(e,r){return{x:function(){return ue(e)}}},"ZerosLike")}}),tt=D({concat_:function(n,t){t===void 0&&(t=0),E(n.length>=1,function(){return"Pass at least one tensor to concat"});var e=yr(n,"tensors","concat");e[0].dtype==="complex64"&&e.forEach(function(s){if(s.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype `+s.dtype+". ")}),t=Ae(t,e[0].shape)[0];var r=gn(e.map(function(s){return s.shape}),t);if($(r)===0)return Re([],r);if((e=e.filter(function(s){return s.size>0})).length===1)return e[0];var a=e.map(function(s){return s.shape});xl(a,t);var o=e,i={axis:t};return A.runKernelFunc(function(s){return s.concat(e,t)},o,function(s){var u=a.map(function(c){return c[t]});return Er(s,u,t).map(function(c){return function(){return c}})},"Concat",i)}}),Nl=D({concat1d_:function(n){return tt(n,0)}}),Sl=D({concat2d_:function(n,t){return tt(n,t)}}),El=D({concat3d_:function(n,t){return tt(n,t)}}),Il=D({concat4d_:function(n,t){return tt(n,t)}}),Er=D({split_:function(n,t,e){e===void 0&&(e=0);var r,a=S(n,"x","split");return e=Ae(e,a.shape)[0],typeof t=="number"?(E(a.shape[e]%t==0,function(){return"Number of splits must evenly divide the axis."}),r=new Array(t).fill(a.shape[e]/t)):(E(a.shape[e]===t.reduce(function(o,i){return o+i}),function(){return"The sum of sizes must match the size of the axis dimension."}),r=t),A.runKernelFunc(function(o){return o.split(a,r,e)},{$x:a},function(o){return{$x:function(){return tt(o,e)}}})}});function ne(n,t,e){return t===void 0&&(t="float32"),t=t||"float32",wi(n),new Gn(n,t,e)}function Rl(n,t){t===void 0&&(t=!1),console.log(n.toString(t))}var Ea=D({batchToSpaceND_:function(n,t,e){var r=S(n,"x","batchToSpaceND"),a=t.reduce(function(o,i){return o*i});return E(r.rank>=1+t.length,function(){return"input rank is "+r.rank+" but should be > than blockShape.length "+t.length}),E(e.length===t.length,function(){return"crops.length is "+e.length+" but should be equal to blockShape.length  "+t.length}),E(r.shape[0]%a==0,function(){return"input tensor batch is "+r.shape[0]+" but is not divisible by the product of the elements of blockShape "+t.join(" * ")+" === "+a}),A.runKernelFunc(function(o){return o.batchToSpaceND(r,t,e)},{$x:r},function(o){return{$x:function(){return o.spaceToBatchND(t,e)}}})}}),Wt=D({cast_:function(n,t){var e=S(n,"x","cast");if(!Fc(t))throw new Error("Failed to cast to unknown dtype "+t);if(t==="string"&&e.dtype!=="string"||t!=="string"&&e.dtype==="string")throw new Error("Only strings can be casted to strings");var r={dtype:t};return A.runKernelFunc(function(a){return a.cast(e,t)},{x:e},function(a){return{x:function(){return a.clone()}}},"Cast",r)}}),kl=D({cumsum_:function(n,t,e,r){t===void 0&&(t=0),e===void 0&&(e=!1),r===void 0&&(r=!1);var a=S(n,"x","cumsum"),o=dt([t|=0],a.rank),i=a;o!=null&&(i=a.transpose(o));var s=ft(1,a.rank)[0],u=A.runKernelFunc(function(c){return c.cumsum(i,s,e,r)},{permutedX:i},function(c){return{permutedX:function(){return c.cumsum(t,e,!r)}}});return o!=null&&(u=u.transpose(o)),u}}),Ai=D({depthToSpace_:function(n,t,e){e===void 0&&(e="NHWC");var r=S(n,"x","depthToSpace"),a=e==="NHWC"?r.shape[1]:r.shape[2],o=e==="NHWC"?r.shape[2]:r.shape[3],i=e==="NHWC"?r.shape[3]:r.shape[1];return E(a*t>=0,function(){return`Negative dimension size caused by overflow when multiplying
      `+a+" and "+t+`  for depthToSpace with input shape
      `+r.shape}),E(o*t>=0,function(){return`Negative dimension size caused by overflow when multiplying
      `+o+" and "+t+` for depthToSpace with input shape
          `+r.shape}),E(i%(t*t)==0,function(){return"Dimension size must be evenly divisible by "+t*t+" but is "+i+" for depthToSpace with input shape "+r.shape}),A.runKernelFunc(function(s){return s.depthToSpace(r,t,e)},{$x:r})}}),Ge=D({expandDims_:function(n,t){t===void 0&&(t=0);var e=S(n,"x","expandDims",null);E(t<=e.rank,function(){return"Axis must be <= rank of the tensor"});var r=e.shape.slice();return t<0&&(E(-(e.rank+1)<=t,function(){return"Axis must be in the interval ["+-(e.rank+1)+", "+e.rank+"]"}),t=e.rank+t+1),r.splice(t,0,1),Le(e,r)}}),Le=D({reshape_:function(n,t){var e=S(n,"x","reshape",null);t=Oc(t,e.size),E(e.size===$(t),function(){return"new shape and old shape must have the same number of elements."});var r={shape:t};return A.runKernelFunc(function(a){return a.reshape(e,t)},{x:e},function(a){return{x:function(){return a.reshape(e.shape)}}},"Reshape",r)}}),Ia=D({spaceToBatchND_:function(n,t,e){var r=S(n,"x","spaceToBatchND");return E(r.rank>=1+t.length,function(){return"input rank "+r.rank+" should be > than [blockShape] "+t.length}),E(e.length===t.length,function(){return"paddings.shape[0] "+e.length+" must be equal to [blockShape] "+t.length}),E(r.shape.reduce(function(a,o,i){return i>0&&i<=t.length?a&&(o+e[i-1][0]+e[i-1][1])%t[i-1]==0:a},!0),function(){return"input spatial dimensions "+r.shape.slice(1)+" with paddings "+e.toString()+" must be divisible by blockShapes "+t.toString()}),A.runKernelFunc(function(a){return a.spaceToBatchND(r,t,e)},{$x:r},function(a){return{$x:function(){return a.batchToSpaceND(t,e)}}})}}),wt=D({squeeze_:function(n,t){var e=S(n,"x","squeeze");return Le(e,qt(e.shape,t).newShape)}}),Et=D({stack_:function(n,t){t===void 0&&(t=0);var e=yr(n,"tensors","stack");if(E(e.length>=1,function(){return"Pass at least one tensor to tf.stack"}),e.length===1)return e[0].expandDims(t);var r=e[0].rank,a=e[0].shape,o=e[0].dtype;E(t<=r,function(){return"Axis must be <= rank of the tensor"}),e.forEach(function(s){fe(a,s.shape,"All tensors passed to stack must have matching shapes")}),e.forEach(function(s){E(o===s.dtype,function(){return"All tensors passed to stack must have matching dtypes"})});var i=e.map(function(s){return s.expandDims(t)});return tt(i,t)}}),Xn=D({unstack_:function(n,t){t===void 0&&(t=0),t=t||0;var e=S(n,"x","unstack");E(t>=-e.shape.length&&t<e.shape.length,function(){return"Axis = "+t+" is not in [-"+e.shape.length+", "+e.shape.length+")"}),t<0&&(t+=e.shape.length);var r={axis:t};return A.runKernelFunc(function(a){return a.unstack(e,t)},{x:e},function(a){return{x:function(){return Et(a,t)}}},"Unpack",r)}}),Di=function(n,t){return Y(this,void 0,void 0,function(){var e,r,a,o,i,s,u,c,l,p;return Q(this,function(d){switch(d.label){case 0:return e=S(n,"x","setdiff1d"),r=S(t,"y","setdiff1d"),E(e.dtype===r.dtype,function(){return"x and y should have the same dtype, but got x ("+e.dtype+") and y ("+r.dtype+")."}),E(e.rank===1,function(){return"x should be 1D tensor, but got x ("+e.shape+")."}),E(r.rank===1,function(){return"y should be 1D tensor, but got y ("+r.shape+")."}),[4,e.data()];case 1:return a=d.sent(),[4,r.data()];case 2:for(o=d.sent(),i=new Set(o),s=0,l=0;l<a.length;l++)i.has(a[l])||s++;for(u=new Gn([s],e.dtype),c=new Gn([s],"int32"),l=0,p=0;l<a.length;l++)i.has(a[l])||(u.values[p]=a[l],c.values[p]=l,p++);return[2,[u.toTensor(),c.toTensor()]]}})})};function fa(n,t,e,r){r===void 0&&(r=!0);var a=[];if(r)(a=a.concat(t.slice(0))).push(n[0]/e),a=a.concat(n.slice(1));else{a=a.concat(n[0]);for(var o=t.length,i=0;i<o;++i)a=a.concat([n[i+1]/t[i],t[i]]);a=a.concat(n.slice(o+1))}return a}function ha(n,t,e){e===void 0&&(e=!0);var r=[];if(e){r.push(t);for(var a=t+1;a<n;++a)a<=2*t?(r.push(a),r.push(a-(t+1))):r.push(a)}else{var o=[],i=[];for(a=1;a<n;++a)a>=2*t+1||a%2==1?i.push(a):o.push(a);r.push.apply(r,o),r.push(0),r.push.apply(r,i)}return r}function ma(n,t,e,r){r===void 0&&(r=!0);var a=[];r?a.push(n[0]/e):a.push(n[0]*e);for(var o=1;o<n.length;++o)o<=t.length?r?a.push(t[o-1]*n[o]):a.push(n[o]/t[o-1]):a.push(n[o]);return a}function Tl(n,t){for(var e=[0],r=0;r<t;++r)e.push(n[r][0]);return e}function Al(n,t,e){for(var r=n.slice(0,1),a=0;a<e;++a)r.push(n[a+1]-t[a][0]-t[a][1]);return r}var Oi="Add",Qf="AddN",Ir="Div",Jf="FusedBatchNorm",Rr="SquaredDifference",Zf="Square",eh="Transpose",th="NonMaxSuppressionV5",_i="BroadcastTo",Fi="OneHot",Mi="Identity",Pi="Tile",Bi="PadV2",nh="FromPixels",rh="MaxPoolWithArgmax",nt=D({add_:function(n,t){var e,r=S(n,"a","add"),a=S(t,"b","add");e=be(r,a),r=e[0],a=e[1];var o={a:r,b:a};return A.runKernelFunc(function(i,s){var u=i.add(r,a);return s([r,a]),u},o,null,Oi)}});function _t(n,t){for(var e=n.length,r=[],a=0;a<e;a++){var o=e-1-a,i=n[o]||1;(t[t.length-1-a]||1)>1&&i===1&&r.unshift(o)}return r}function ke(n,t){for(var e=[],r=0;r<t.length;r++){var a=n[n.length-r-1],o=t.length-r-1,i=t[o];(a==null||a===1&&i>1)&&e.unshift(o)}return e}function ie(n,t){for(var e=[],r=Math.max(n.length,t.length),a=0;a<r;a++){var o=n[n.length-a-1];o==null&&(o=1);var i=t[t.length-a-1];if(i==null&&(i=1),o===1)e.unshift(i);else if(i===1)e.unshift(o);else{if(o!==i)throw Error("Operands could not be broadcast together with shapes "+n+" and "+t+".");e.unshift(o)}}return e}var Li=D({abs_:function(n){var t=S(n,"x","abs");return t.dtype==="complex64"?A.runKernelFunc(function(e){return e.complexAbs(t)},{$x:t}):A.runKernelFunc(function(e,r){var a=e.abs(t);return r([t]),a},{x:t},function(e,r){var a=r[0];return{x:function(){return e.mul(a.toFloat().step(-1))}}},"Abs")}}),Vi=D({acos_:function(n){var t=S(n,"x","acos");return A.runKernelFunc(function(e,r){var a=e.acos(t);return r([t]),a},{$x:t},function(e,r){var a=r[0];return{$x:function(){return e.divStrict(j(1).sub(a.toFloat().square()).sqrt()).neg()}}})}}),Wi=D({acosh_:function(n){var t=S(n,"x","acosh");return A.runKernelFunc(function(e,r){var a=e.acosh(t);return r([t]),a},{$x:t},function(e,r){var a=r[0];return{$x:function(){return e.divStrict(a.toFloat().square().sub(1).sqrt())}}})}}),zi=D({asin_:function(n){var t=S(n,"x","asin");return A.runKernelFunc(function(e,r){var a=e.asin(t);return r([t]),a},{$x:t},function(e,r){var a=r[0];return{$x:function(){return e.divStrict(j(1).sub(a.toFloat().square()).sqrt())}}})}}),Ui=D({asinh_:function(n){var t=S(n,"x","asinh");return A.runKernelFunc(function(e,r){var a=e.asinh(t);return r([t]),a},{$x:t},function(e,r){var a=r[0];return{$x:function(){return e.divStrict(j(1).add(a.toFloat().square()).sqrt())}}})}}),Gi=D({atan_:function(n){var t=S(n,"x","atan");return A.runKernelFunc(function(e,r){var a=e.atan(t);return r([t]),a},{$x:t},function(e,r){var a=r[0];return{$x:function(){return e.div(a.toFloat().square().add(1))}}})}}),Hi=D({atanh_:function(n){var t=S(n,"x","atanh");return A.runKernelFunc(function(e,r){var a=e.atanh(t);return r([t]),a},{$x:t},function(e,r){var a=r[0];return{$x:function(){return e.div(j(1).sub(a.toFloat().square()))}}})}}),qi=D({ceil_:function(n){var t=S(n,"x","ceil");return A.runKernelFunc(function(e){return e.ceil(t)},{$x:t},function(e){return{$x:function(){return ue(e)}}})}}),ji=D({clipByValue_:function(n,t,e){var r=S(n,"x","clipByValue");E(t<=e,function(){return"Error in clip: min ("+t+") must be less than or equal to max ("+e+")."});var a=[r],o={min:t,max:e};return A.runKernelFunc(function(i,s){var u=i.clip(r,t,e);return s([r]),u},{x:r},function(i,s){var u=s[0];return{x:function(){return i.where(u.greaterEqual(t).logicalAnd(u.lessEqual(e)),ue(i))}}},"ClipByValue",o,a)}}),Ki=D({cos_:function(n){var t=S(n,"x","cos"),e=[t];return A.runKernelFunc(function(r,a){var o=r.cos(t);return a([t]),o},{x:t},function(r,a){var o=a[0];return{x:function(){return o.toFloat().sin().neg().mul(r)}}},"Cos",{},e)}}),Xi=D({cosh_:function(n){var t=S(n,"x","cosh");return A.runKernelFunc(function(e,r){var a=e.cosh(t);return r([t]),a},{$x:t},function(e,r){var a=r[0];return{$x:function(){return a.toFloat().sinh().mulStrict(e)}}})}}),$i=D({erf_:function(n){var t=S(n,"x","erf");return E(t.dtype==="int32"||t.dtype==="float32",function(){return"Input dtype must be `int32` or `float32`."}),t.dtype==="int32"&&(t=t.toFloat()),A.runKernelFunc(function(e,r){var a=e.erf(t);return r([t]),a},{$x:t},function(e,r){var a=r[0];return{$x:function(){return e.mul(a.square().neg().exp().mul(2/Math.sqrt(Math.PI)))}}})}}),Yi=D({exp_:function(n){var t=S(n,"x","exp");return A.runKernelFunc(function(e,r){var a=e.exp(t);return r([a]),a},{x:t},function(e,r){return{x:function(){return e.mulStrict(r[0])}}},"Exp",{},[],[!0])}}),Qi=D({expm1_:function(n){var t=S(n,"x","expm1");return A.runKernelFunc(function(e,r){var a=e.expm1(t);return r([t]),a},{$x:t},function(e,r){var a=r[0];return{$x:function(){return e.mul(a.exp())}}})}}),Ji=D({floor_:function(n){var t=S(n,"x","floor");return A.runKernelFunc(function(e){return e.floor(t)},{$x:t},function(e){return{$x:function(){return ue(e)}}})}}),Zi=D({log_:function(n){var t=S(n,"x","log"),e=[t];return A.runKernelFunc(function(r,a){var o=r.log(t);return a([t]),o},{x:t},function(r,a){var o=a[0];return{x:function(){return r.div(o.toFloat())}}},"Log",{},e)}}),es=D({log1p_:function(n){var t=S(n,"x","log1p");return A.runKernelFunc(function(e,r){var a=e.log1p(t);return r([t]),a},{$x:t},function(e,r){var a=r[0];return{$x:function(){return e.div(a.add(1))}}})}}),Dl=D({logSigmoid_:function(n){var t=S(n,"x","logSigmoid");return A.runKernelFunc(function(e,r){var a=e.softplus(t.neg()).neg();return r([t]),a},{$x:t},function(e,r){var a=r[0];return{$x:function(){return e.mul(a.neg().sigmoid())}}})}}),kr=D({neg_:function(n){var t=S(n,"x","neg"),e=[t];return A.runKernelFunc(function(r){return r.neg(t)},{x:t},function(r){return{x:function(){return r.neg()}}},"Neg",{},e)}}),ts=D({reciprocal_:function(n){var t=S(n,"x","reciprocal");return A.runKernelFunc(function(e,r){var a=e.reciprocal(t);return r([t]),a},{$x:t},function(e,r){var a=r[0];return{$x:function(){return e.div(a.square().neg())}}})}}),ns=D({round_:function(n){var t=S(n,"x","round");return A.runKernelFunc(function(e){return e.round(t)},{$x:t},function(e){return{$x:function(){return ue(e)}}})}}),Ra=D({rsqrt_:function(n){var t=S(n,"x","rsqrt"),e=[t];return A.runKernelFunc(function(r,a){var o=r.rsqrt(t);return a([t]),o},{x:t},function(r,a){var o=a[0];return{x:function(){return r.div(o.pow(1.5).mul(2)).neg()}}},"Rsqrt",{},e)}}),Tr=D({sigmoid_:function(n){var t=S(n,"x","sigmoid");return A.runKernelFunc(function(e,r){var a=e.sigmoid(t);return r([a]),a},{x:t},function(e,r){var a=r[0];return{x:function(){return e.mul(a.mul(j(1).sub(a)))}}},"Sigmoid")}}),rs=D({sign_:function(n){var t=S(n,"x","sign");return A.runKernelFunc(function(e){return e.sign(t)},{$x:t},function(e){return{$x:function(){return ue(e)}}})}}),Ol=D({isNaN_:function(n){var t=S(n,"x","isNaN");return A.runKernelFunc(function(e){return e.isNaN(t)},{$x:t},function(e){return{$x:function(){return ue(e)}}})}}),_l=D({isInf_:function(n){var t=S(n,"x","isInf");return A.runKernelFunc(function(e){return e.isInf(t)},{$x:t},function(e){return{$x:function(){return ue(e)}}})}}),Fl=D({isFinite_:function(n){var t=S(n,"x","isFinite");return A.runKernelFunc(function(e){return e.isFinite(t)},{$x:t},function(e){return{$x:function(){return ue(e)}}})}}),as=D({sin_:function(n){var t=S(n,"x","sin"),e=[t];return A.runKernelFunc(function(r,a){var o=r.sin(t);return a([t]),o},{x:t},function(r,a){var o=a[0];return{x:function(){return o.toFloat().cos().mul(r)}}},"Sin",{},e)}}),os=D({sinh_:function(n){var t=S(n,"x","sinh");return A.runKernelFunc(function(e,r){var a=e.sinh(t);return r([t]),a},{$x:t},function(e,r){var a=r[0];return{$x:function(){return a.toFloat().cosh().mulStrict(e)}}})}}),is=D({softplus_:function(n){var t=S(n,"x","softplus");return A.runKernelFunc(function(e,r){var a=e.softplus(t);return r([t]),a},{$x:t},function(e,r){var a=r[0];return{$x:function(){return e.mul(a.sigmoid())}}})}}),ss=D({sqrt_:function(n){var t=S(n,"x","sqrt");return A.runKernelFunc(function(e,r){var a=e.sqrt(t);return r([t]),a},{$x:t},function(e,r){var a=r[0];return{$x:function(){return e.div(a.toFloat().sqrt().mul(2))}}})}}),Ml=D({step_:function(n,t){t===void 0&&(t=0);var e=S(n,"x","step");return A.runKernelFunc(function(r){return r.step(e,t)},{$x:e},function(r){return{$x:function(){return ue(r)}}})}}),us=D({tan_:function(n){var t=S(n,"x","tan");return A.runKernelFunc(function(e,r){var a=e.tan(t);return r([t]),a},{$x:t},function(e,r){var a=r[0];return{$x:function(){return e.div(a.cos().square())}}})}}),cs=D({tanh_:function(n){var t=S(n,"x","tanh");return A.runKernelFunc(function(e,r){var a=e.tanh(t);return r([a]),a},{x:t},function(e,r){var a=r[0];return{x:function(){return j(1).sub(a.square()).mulStrict(e)}}},"Tanh",{},null,[!0])}}),Pl=D({addStrict_:function(n,t){var e=S(n,"a","addStrict"),r=S(t,"b","addStrict");return fe(e.shape,r.shape,"Error in addStrict: "),e.add(r)}}),ls=D({atan2_:function(n,t){var e,r=S(n,"a","atan2"),a=S(t,"b","atan2");e=be(r,a),r=e[0],a=e[1];var o=ie(r.shape,a.shape);return A.runKernelFunc(function(i,s){var u=i.atan2(r,a);return s([r,a]),u},{$a:r,$b:a},function(i,s){var u=s[0],c=s[1];return{$a:function(){var l=nt(u.square(),c.square()),p=i.mul(c.div(l)),d=ke(u.shape,o);return d.length>0&&(p=p.sum(d)),p.reshape(u.shape)},$b:function(){var l=nt(u.square(),c.square()),p=kr(i.mul(u.div(l))),d=ke(c.shape,o);return d.length>0&&(p=p.sum(d)),p.reshape(c.shape)}}})}}),Bl=D({divStrict_:function(n,t){var e=S(n,"a","div"),r=S(t,"b","div");return fe(e.shape,r.shape,"Error in divideStrict: "),e.div(r)}}),ka=D({floorDiv_:function(n,t){var e,r=S(n,"a","floorDiv"),a=S(t,"b","floorDiv");e=be(r,a),r=e[0],a=e[1];var o=ie(r.shape,a.shape);return A.runKernelFunc(function(i,s){var u=i.floorDiv(r,a);return s([r,a]),u},{a:r,b:a},function(i,s){var u=s[0],c=s[1];return{a:function(){var l=i.div(c.toFloat()),p=ke(u.shape,o);return p.length>0?l.sum(p).reshape(u.shape):l},b:function(){var l=i.mul(u.toFloat()),p=ke(c.shape,o);p.length>0&&(l=l.sum(p).reshape(c.shape));var d=c.square();return l.div(d.toFloat()).neg()}}},"FloorDiv")}}),Ar=D({maximum_:function(n,t){var e,r=S(n,"a","maximum"),a=S(t,"b","maximum");return e=be(r,a),r=e[0],a=e[1],r.dtype==="bool"&&(r=r.toInt(),a=a.toInt()),ie(r.shape,a.shape),A.runKernelFunc(function(o,i){var s=o.maximum(r,a);return i([r,a]),s},{a:r,b:a},function(o,i){var s=i[0],u=i[1];return{a:function(){return o.mul(s.greaterEqual(u).toFloat())},b:function(){return o.mul(s.less(u).toFloat())}}},"Maximum")}}),Ll=D({maximumStrict_:function(n,t){var e=S(n,"a","maximumStrict"),r=S(t,"b","maximumStrict");return fe(e.shape,r.shape,"Error in maximumStrict: "),e.maximum(r)}}),Ta=D({minimum_:function(n,t){var e,r=S(n,"a","minimum"),a=S(t,"b","minimum");return e=be(r,a),r=e[0],a=e[1],r.dtype==="bool"&&(r=r.toInt(),a=a.toInt()),ie(r.shape,a.shape),A.runKernelFunc(function(o,i){var s=o.minimum(r,a);return i([r,a]),s},{a:r,b:a},function(o,i){var s=i[0],u=i[1];return{a:function(){return o.mul(s.lessEqual(u).toFloat())},b:function(){return o.mul(s.greater(u).toFloat())}}},"Minimum")}}),Vl=D({minimumStrict_:function(n,t){var e=S(n,"a","minimumStrict"),r=S(t,"b","minimumStrict");return fe(e.shape,r.shape,"Error in minimumStrict: "),e.minimum(r)}}),ps=D({mod_:function(n,t){var e,r=S(n,"a","mod"),a=S(t,"b","mod");e=be(r,a),r=e[0],a=e[1];var o=ie(r.shape,a.shape);return A.runKernelFunc(function(i,s){var u=i.mod(r,a);return s([r,a]),u},{$a:r,$b:a},function(i,s){var u=s[0],c=s[1];return{$a:function(){var l=ke(u.shape,o);return l.length>0?i.sum(l).reshape(u.shape):i},$b:function(){var l=i.mul(u.div(c).floor().neg()),p=ke(c.shape,o);return p.length>0?l.sum(p).reshape(c.shape):l}}})}}),Wl=D({modStrict_:function(n,t){var e=S(n,"a","modStrict"),r=S(t,"b","modStrict");return fe(e.shape,r.shape,"Error in modStrict: "),e.mod(r)}}),ye=D({mul_:function(n,t){var e,r=S(n,"a","mul"),a=S(t,"b","mul");e=be(r,a),r=e[0],a=e[1];var o=ie(r.shape,a.shape);return A.runKernelFunc(function(i,s){var u=i.multiply(r,a);return s([r,a]),u},{a:r,b:a},function(i,s){var u=s[0],c=s[1];return{a:function(){var l=i.mul(c.toFloat()),p=ke(u.shape,o);return p.length>0?l.sum(p).reshape(u.shape):l},b:function(){var l=i.mul(u.toFloat()),p=ke(c.shape,o);return p.length>0?l.sum(p).reshape(c.shape):l}}},"Mul")}}),zl=D({mulStrict_:function(n,t){var e=S(n,"a","mul"),r=S(t,"b","mul");return fe(e.shape,r.shape,"Error in multiplyStrict: "),e.mul(r)}}),Hn=D({pow_:function(n,t){var e,r=S(n,"base","pow"),a=S(t,"exp","pow");e=be(r,a),r=e[0],a=e[1];var o=ie(r.shape,a.shape),i=[r,a];return A.runKernelFunc(function(s,u){var c=s.pow(r,a);return u([r,a,c]),c},{a:r,b:a},function(s,u){var c=u[0],l=u[1],p=u[2];return{a:function(){var d=l.toFloat(),f=s.mul(d.mul(c.pow(d.sub(j(1))))),h=ke(c.shape,o);return h.length>0&&(f=f.sum(h)),f.reshape(c.shape)},b:function(){var d=c.greater(0),f=c.log().where(d,ue(c)),h=s.mul(p.mul(f)),m=ke(l.shape,o);return m.length>0&&(h=h.sum(m)),h.reshape(l.shape)}}},"Pow",{},i,[!0])}}),Ul=D({powStrict_:function(n,t){return fe(n.shape,t.shape,"Error in powStrict: "),n.pow(t)}}),Gl=D({squaredDifferenceStrict_:function(n,t){var e=S(n,"a","squaredDifferenceStrict"),r=S(t,"b","squaredDifferenceStrict");return fe(e.shape,r.shape,"Error in squaredDifferenceStrict: "),e.squaredDifference(r)}}),et=D({sub_:function(n,t){var e,r=S(n,"a","sub"),a=S(t,"b","sub");e=be(r,a),r=e[0],a=e[1];var o=ie(r.shape,a.shape);return A.runKernelFunc(function(i){return i.subtract(r,a)},{a:r,b:a},function(i){return{a:function(){var s=i,u=ke(r.shape,o);return u.length>0&&(s=s.sum(u)),s.reshape(r.shape)},b:function(){var s=i,u=ke(a.shape,o);return u.length>0&&(s=s.sum(u)),s.neg().reshape(a.shape)}}},"Sub")}}),Hl=D({subStrict_:function(n,t){var e=S(n,"a","subStrict"),r=S(t,"b","subStrict");return fe(e.shape,r.shape,"Error in subStrict: "),e.sub(r)}}),ct=D({div_:function(n,t){var e,r=S(n,"a","div"),a=S(t,"b","div");if(e=be(r,a),r=e[0],a=e[1],r.dtype==="int32"&&a.dtype==="int32")return ka(r,a);var o={a:r,b:a};return A.runKernelFunc(function(i,s){var u=i.realDivide(r,a);return s([r,a]),u},o,null,Ir,{})}});function ds(n,t){if(n.rank<1)throw new Error("tf.gatherND() expects the input to be rank 1 or higher, but the rank was "+n.rank+".");if(t.rank<1)throw new Error("tf.gatherND() expects the indices to be rank 1 or higher, but the rank was "+t.rank+".");if(t.dtype!=="int32")throw new Error("tf.gatherND() expects the indices to be int32 type, but the dtype was "+t.dtype+".");if(t.shape[t.rank-1]>n.rank)throw new Error("index innermost dimension length must be <= tensor rank; saw: "+t.shape[t.rank-1]+" vs. "+n.rank);if(n.size===0)throw new Error("Requested more than 0 entries, but input is empty. Input shape: "+n.shape+".");for(var e=t.shape,r=e[e.length-1],a=1,o=0;o<e.length-1;++o)a*=e[o];var i=n.shape,s=e.slice();s.pop();var u=1;for(o=r;o<n.rank;++o)u*=i[o],s.push(i[o]);var c=je(n.shape).map(function(l){return l/u}).concat([1]).slice(0,r);return[s,a,u,c]}var ah=Object.freeze({prepareAndValidate:ds}),fs=30;function ia(n){return n<=fs?n:la(n,Math.floor(Math.sqrt(n)))}function ql(n,t,e){var r=t.rank>1?t.shape[t.rank-1]:1,a=t.rank>1?t.rank-1:1,o="Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: "+e.shape+", indices.shape: "+t.shape+", shape: "+n+", sliceDim: "+r+", and batchDim: "+a+".";if(e.rank<a)throw new Error(o+" update.rank < "+a+". ");if(n.length<r+(e.rank-a))throw new Error(o+" Output shape length < "+(r+(e.rank-a)));if(e.rank!==a+n.length-r)throw new Error(o+" update.rank != "+(a+n.length-r));for(var i=0;i<a;++i)if(e.shape[i]!==t.shape[i])throw new Error(o+" updates.shape["+i+"] ("+e.shape[i]+") != indices.shape["+i+"] ("+t.shape[i]+").");for(i=0;i<e.rank-a;++i)if(e.shape[i+a]!==n[i+r])throw new Error(o+" updates.shape["+(i+a)+"] ("+e.shape[i+a]+") != shape["+(i+a)+"] ("+n[i+a]+")")}function jl(n,t,e){if(t.rank<1)throw new Error("tf.scatterND() expects the indices to be rank 1 or higher, but the rank was "+t.rank+".");if(n.rank<1)throw new Error("tf.scatterND() expects the updates to be rank 1 or higher, but the rank was "+n.rank+".");if(t.dtype!=="int32")throw new Error("The dtype of 'indices' should be int32, but got dtype: "+t.dtype);if(e.length<1)throw new Error("Output rank must be greater or equal to 1, but got shape: "+e);if(e.length===0){if(t.size===0)throw new Error("Indices specified for empty output. indices shape: "+t.shape);if(n.size===0)throw new Error("Updates specified for empty output. updates shape: "+n.shape)}ql(e,t,n)}function xr(n,t,e){for(var r=t.shape.length,a=r>1?t.shape[r-1]:1,o=e.length,i=1,s=a;s<o;++s)i*=e[s];var u=a<1?1:a;return{sliceRank:a,numUpdates:$(t.shape)/u,sliceSize:i,strides:je(e.slice(0,a)).concat([1]),outputSize:$(e)}}var oh=Object.freeze({validateUpdateShape:ql,validateInput:jl,calculateShapes:xr});function Kl(n,t,e){E(n.rank===t.length,function(){return"Error in slice"+n.rank+"D: Length of begin "+t+" must match the rank of the array ("+n.rank+")."}),E(n.rank===e.length,function(){return"Error in slice"+n.rank+"D: Length of size "+e+" must match the rank of the array ("+n.rank+")."});for(var r=function(o){E(t[o]+e[o]<=n.shape[o],function(){return"Error in slice"+n.rank+"D: begin["+o+"] + size["+o+"] ("+(t[o]+e[o])+") would overflow input.shape["+o+"] ("+n.shape[o]+")"})},a=0;a<n.rank;++a)r(a)}function Ko(n){for(var t=[],e=0;n>0;)1&n&&t.push(e),n/=2,e++;return t}function Aa(n,t,e){for(var r=[],a=0;a<n.length;a++)r[a]=Math.ceil((t[a]-n[a])/e[a]);return r}function Xl(n,t,e,r,a){var o=t[a],i=e[a]||1;(n&1<<a||o==null)&&(o=i>0?Number.MIN_SAFE_INTEGER:Number.MAX_SAFE_INTEGER);var s=r[a];return o<0&&(o+=s),o=ua(0,o,s-1)}function $l(n,t,e,r,a){var o=t[a],i=e[a]||1;(n&1<<a||o==null)&&(o=i>0?Number.MAX_SAFE_INTEGER:Number.MIN_SAFE_INTEGER);var s=r[a];return o<0&&(o+=s),o=i>0?ua(0,o,s):ua(-1,o,s-1)}function hs(n,t,e){for(var r=e.length,a=0;a<e.length;a++)if(e[a]>1){r=a;break}for(a=r+1;a<e.length;a++)if(t[a]>0||e[a]!==n[a])return!1;return!0}function ms(n,t){for(var e=n.length>0?n[n.length-1]:1,r=0;r<n.length-1;r++)e+=n[r]*t[r];return e}var ih=Object.freeze({assertParamsValid:Kl,maskToAxes:Ko,computeOutShape:Aa,startForAxis:Xl,stopForAxis:$l,isSliceContinous:hs,computeFlatOffset:ms});function sh(n){return E(Jt(n),function(){return"The f passed in grad(f) must be a function"}),function(t,e){var r=S(t,"x","tf.grad",null),a=e!=null?S(e,"dy","tf.grad"):null;return A.tidy(function(){var o=A.gradients(function(){return n(r)},[r],a),i=o.value,s=o.grads;return a!=null&&fe(i.shape,a.shape,"The shape of dy passed in grad(f)(x, dy) must match the shape returned by f(x)"),Da(s),s[0]})}}function uh(n){return E(Jt(n),function(){return"The f passed in grads(f) must be a function"}),function(t,e){E(Array.isArray(t),function(){return"The args passed in grads(f)(args) must be an array of `Tensor`s or `TensorLike`s"});var r=yr(t,"args","tf.grads",null),a=e!=null?S(e,"dy","tf.grads"):null;return A.tidy(function(){var o=A.gradients(function(){return n.apply(void 0,r)},r,a),i=o.value,s=o.grads;return a!=null&&fe(i.shape,a.shape,"The shape of dy passed in grads(f)([x1,...], dy) must match the shape returned by f([x1,...])"),Da(s),s})}}function ch(n){return E(Jt(n),function(){return"The f passed in valueAndGrad(f) must be a function"}),function(t,e){E(t instanceof me,function(){return"The x passed in valueAndGrad(f)(x) must be a tensor"}),E(e==null||e instanceof me,function(){return"The dy passed in valueAndGrad(f)(x, dy) must be a tensor"});var r=A.gradients(function(){return n(t)},[t],e),a=r.grads,o=r.value;return Da(a),{grad:a[0],value:o}}}function lh(n){return E(Jt(n),function(){return"The f passed in valueAndGrads(f) must be a function"}),function(t,e){E(Array.isArray(t)&&t.every(function(a){return a instanceof me}),function(){return"The args passed in valueAndGrads(f)(args) must be array of tensors"}),E(e==null||e instanceof me,function(){return"The dy passed in valueAndGrads(f)(args, dy) must be a tensor"});var r=A.gradients(function(){return n.apply(void 0,t)},t,e);return e!=null&&fe(r.value.shape,e.shape,"The shape of dy passed in valueAndGrads(f)([x1,...], dy) must match the shape returned by f([x1,...])"),Da(r.grads),r}}function Yl(n,t){E(Jt(n),function(){return"The f passed in variableGrads(f) must be a function"}),E(t==null||Array.isArray(t)&&t.every(function(l){return l instanceof hr}),function(){return"The varList passed in variableGrads(f, varList) must be an array of variables"});var e=t!=null;if(!e)for(var r in t=[],A.registeredVariables)t.push(A.registeredVariables[r]);var a=e?t.filter(function(l){return!l.trainable}):null,o=t.length;E((t=t.filter(function(l){return l.trainable})).length>0,function(){return"variableGrads() expects at least one of the input variables to be trainable, but none of the "+o+" variables is trainable."});var i=A.gradients(n,t,null,!0),s=i.value,u=i.grads;E(u.some(function(l){return l!=null}),function(){return"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."}),E(s.rank===0,function(){return"The f passed in variableGrads(f) must return a scalar, but it returned a rank-"+s.rank+" tensor"});var c={};return t.forEach(function(l,p){u[p]!=null&&(c[l.name]=u[p])}),a!=null&&a.forEach(function(l){return c[l.name]=null}),{value:s,grads:c}}function Dr(n){return A.customGrad(n)}function Da(n){if(n.filter(function(t){return t==null}).length>0)throw new Error(`Cannot compute gradient of y=f(x) with respect to x. Make sure that
    the f you passed encloses all operations that lead from x to y.`)}var Or=D({softmax_:function(n,t){t===void 0&&(t=-1);var e=S(n,"logits","softmax","float32");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error("Softmax along a non-last dimension is not yet supported. Logits was rank "+e.rank+" and dim was "+t);return A.runKernelFunc(function(r,a){var o=r.softmax(e,t);return a([o]),o},{logits:e},function(r,a){var o=a[0],i=r.mul(o);return{logits:function(){return i.sub(i.sum([t],!0).mul(o))}}},"Softmax",{dim:t},[],[!0])}}),vs=D({logSoftmax_:function(n,t){t===void 0&&(t=-1);var e=S(n,"logits","logSoftmax");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error("Log Softmax along a non-last dimension is not yet supported. Logits was rank "+e.rank+" and axis was "+t);return Dr(function(r,a){var o=r.max(t,!0),i=r.sub(o),s=i.toFloat().sub(i.exp().sum(t,!0).log());return a([s]),{value:s,gradFunc:function(u,c){var l=c[0].exp();return u.sub(u.sum(t,!0).mul(l))}}})(e)}}),Ye=D({transpose_:function(n,t){var e=S(n,"x","transpose");if(t==null&&(t=e.shape.map(function(a,o){return o}).reverse()),E(e.rank===t.length,function(){return"Error in transpose: rank of input "+e.rank+" must match length of perm "+t+"."}),t.forEach(function(a){E(a>=0&&a<e.rank,function(){return"All entries in 'perm' must be between 0 and "+(e.rank-1)+" but got "+t})}),e.rank<=1)return e.clone();var r={perm:t};return A.runKernelFunc(function(a){return a.transpose(e,t)},{x:e},null,"Transpose",r)}}),gs=function(){function n(t,e){this.backend=t,this.dataMover=e,this.data=new WeakMap,this.dataIdsCount=0}return n.prototype.get=function(t){return this.data.has(t)||this.dataMover.moveData(this.backend,t),this.data.get(t)},n.prototype.set=function(t,e){this.dataIdsCount++,this.data.set(t,e)},n.prototype.has=function(t){return this.data.has(t)},n.prototype.delete=function(t){return this.dataIdsCount--,this.data.delete(t)},n.prototype.numDataIds=function(){return this.dataIdsCount},n}(),ys=function(){function n(){}return n.prototype.time=function(t){return F("time")},n.prototype.read=function(t){return F("read")},n.prototype.readSync=function(t){return F("readSync")},n.prototype.numDataIds=function(){return F("numDataIds")},n.prototype.disposeData=function(t){return F("disposeData")},n.prototype.write=function(t,e,r){return F("write")},n.prototype.move=function(t,e,r,a){return F("move")},n.prototype.memory=function(){return F("memory")},n.prototype.floatPrecision=function(){return F("floatPrecision")},n.prototype.epsilon=function(){return this.floatPrecision()===32?1e-7:1e-4},n.prototype.batchMatMul=function(t,e,r,a){return F("batchMatMul")},n.prototype.fusedBatchMatMul=function(t){return t.a,t.b,t.transposeA,t.transposeB,t.bias,t.activation,t.preluActivationWeights,F("fusedBatchMatMul")},n.prototype.slice=function(t,e,r){return F("slice")},n.prototype.stridedSlice=function(t,e,r,a){return F("stridedSlice")},n.prototype.unstack=function(t,e){return F("unstack")},n.prototype.reverse=function(t,e){return F("reverse")},n.prototype.concat=function(t,e){return F("concat")},n.prototype.neg=function(t){return F("neg")},n.prototype.add=function(t,e){return F("add")},n.prototype.addN=function(t){return F("addN")},n.prototype.subtract=function(t,e){return F("subtract")},n.prototype.multiply=function(t,e){return F("multiply")},n.prototype.realDivide=function(t,e){return F("realDivide")},n.prototype.floorDiv=function(t,e){return F("floorDiv")},n.prototype.sum=function(t,e){return F("sum")},n.prototype.prod=function(t,e){return F("prod")},n.prototype.unsortedSegmentSum=function(t,e,r){return F("unsortedSegmentSum")},n.prototype.argMin=function(t,e){return F("argMin")},n.prototype.argMax=function(t,e){return F("argMax")},n.prototype.equal=function(t,e){return F("equal")},n.prototype.notEqual=function(t,e){return F("notEqual")},n.prototype.less=function(t,e){return F("less")},n.prototype.lessEqual=function(t,e){return F("lessEqual")},n.prototype.greater=function(t,e){return F("greater")},n.prototype.greaterEqual=function(t,e){return F("greaterEqual")},n.prototype.logicalNot=function(t){return F("logicalNot")},n.prototype.logicalAnd=function(t,e){return F("logicalAnd")},n.prototype.logicalOr=function(t,e){return F("logicalOr")},n.prototype.where=function(t){return F("where")},n.prototype.select=function(t,e,r){return F("select")},n.prototype.topk=function(t,e,r){return F("topk")},n.prototype.min=function(t,e){return F("min")},n.prototype.minimum=function(t,e){return F("minimum")},n.prototype.mod=function(t,e){return F("mod")},n.prototype.max=function(t,e){return F("max")},n.prototype.maximum=function(t,e){return F("maximum")},n.prototype.all=function(t,e){return F("all")},n.prototype.any=function(t,e){return F("any")},n.prototype.squaredDifference=function(t,e){return F("squaredDifference")},n.prototype.ceil=function(t){return F("ceil")},n.prototype.floor=function(t){return F("floor")},n.prototype.round=function(t){return F("round")},n.prototype.sign=function(t){return F("sign")},n.prototype.isNaN=function(t){return F("isNaN")},n.prototype.isInf=function(t){return F("isInf")},n.prototype.isFinite=function(t){return F("isFinite")},n.prototype.pow=function(t,e){return F("pow")},n.prototype.exp=function(t){return F("exp")},n.prototype.expm1=function(t){return F("expm1")},n.prototype.softmax=function(t,e){return F("softmax")},n.prototype.log=function(t){return F("log")},n.prototype.log1p=function(t){return F("log1p")},n.prototype.sqrt=function(t){return F("sqrt")},n.prototype.rsqrt=function(t){return F("rsqrt")},n.prototype.square=function(t){return F("square")},n.prototype.reciprocal=function(t){return F("reciprocal")},n.prototype.relu=function(t){return F("relu")},n.prototype.relu6=function(t){return F("relu6")},n.prototype.prelu=function(t,e){return F("prelu")},n.prototype.elu=function(t){return F("elu")},n.prototype.eluDer=function(t,e){return F("eluDer")},n.prototype.selu=function(t){return F("selu")},n.prototype.int=function(t){return F("int")},n.prototype.clip=function(t,e,r){return F("clip")},n.prototype.abs=function(t){return F("abs")},n.prototype.complexAbs=function(t){return F("complexAbs")},n.prototype.sigmoid=function(t){return F("sigmoid")},n.prototype.softplus=function(t){return F("softplus")},n.prototype.sin=function(t){return F("sin")},n.prototype.cos=function(t){return F("cos")},n.prototype.tan=function(t){return F("tan")},n.prototype.asin=function(t){return F("asin")},n.prototype.acos=function(t){return F("acos")},n.prototype.atan=function(t){return F("atan")},n.prototype.atan2=function(t,e){return F("atan2")},n.prototype.sinh=function(t){return F("sinh")},n.prototype.cosh=function(t){return F("cosh")},n.prototype.tanh=function(t){return F("tanh")},n.prototype.asinh=function(t){return F("asinh")},n.prototype.acosh=function(t){return F("acosh")},n.prototype.atanh=function(t){return F("atanh")},n.prototype.erf=function(t){return F("erf")},n.prototype.step=function(t,e){return F("step")},n.prototype.fusedConv2d=function(t){return t.input,t.filter,t.convInfo,t.bias,t.activation,t.preluActivationWeights,F("fusedConv2d")},n.prototype.conv2d=function(t,e,r){return F("conv2d")},n.prototype.conv2dDerInput=function(t,e,r){return F("conv2dDerInput")},n.prototype.conv2dDerFilter=function(t,e,r){return F("conv2dDerFilter")},n.prototype.fusedDepthwiseConv2D=function(t){return t.input,t.filter,t.convInfo,t.bias,t.activation,t.preluActivationWeights,F("fusedDepthwiseConv2D")},n.prototype.depthwiseConv2D=function(t,e,r){return F("depthwiseConv2D")},n.prototype.depthwiseConv2DDerInput=function(t,e,r){return F("depthwiseConv2DDerInput")},n.prototype.depthwiseConv2DDerFilter=function(t,e,r){return F("depthwiseConv2DDerFilter")},n.prototype.conv3d=function(t,e,r){return F("conv3d")},n.prototype.conv3dDerInput=function(t,e,r){return F("conv3dDerInput")},n.prototype.conv3dDerFilter=function(t,e,r){return F("conv3dDerFilter")},n.prototype.maxPool=function(t,e){return F("maxPool")},n.prototype.maxPoolBackprop=function(t,e,r,a){return F("maxPoolBackprop")},n.prototype.avgPool=function(t,e){return F("avgPool")},n.prototype.avgPoolBackprop=function(t,e,r){return F("avgPoolBackprop")},n.prototype.avgPool3d=function(t,e){return F("avgPool3d")},n.prototype.avgPool3dBackprop=function(t,e,r){return F("avgPool3dBackprop")},n.prototype.maxPool3d=function(t,e){return F("maxPool3d")},n.prototype.maxPool3dBackprop=function(t,e,r,a){return F("maxPool3dBackprop")},n.prototype.reshape=function(t,e){return F("reshape")},n.prototype.cast=function(t,e){return F("cast")},n.prototype.tile=function(t,e){return F("tile")},n.prototype.pad=function(t,e,r){return F("pad")},n.prototype.transpose=function(t,e){return F("transpose")},n.prototype.gather=function(t,e,r){return F("gather")},n.prototype.gatherND=function(t,e){return F("gatherND")},n.prototype.scatterND=function(t,e,r){return F("scatterND")},n.prototype.batchToSpaceND=function(t,e,r){return F("batchToSpaceND")},n.prototype.spaceToBatchND=function(t,e,r){return F("spaceToBatchND")},n.prototype.resizeBilinear=function(t,e,r,a){return F("resizeBilinear")},n.prototype.resizeBilinearBackprop=function(t,e,r){return F("resizeBilinearBackprop")},n.prototype.resizeNearestNeighbor=function(t,e,r,a){return F("resizeNearestNeighbor")},n.prototype.resizeNearestNeighborBackprop=function(t,e,r){return F("resizeNearestNeighborBackprop")},n.prototype.batchNormalization=function(t,e,r,a,o,i){return F("batchNormalization")},n.prototype.localResponseNormalization4D=function(t,e,r,a,o){return F("localResponseNormalization4D")},n.prototype.LRNGrad=function(t,e,r,a,o,i,s){return F("LRNGrad")},n.prototype.multinomial=function(t,e,r,a){return F("multinomial")},n.prototype.oneHot=function(t,e,r,a){return F("oneHot")},n.prototype.cumsum=function(t,e,r,a){return F("cumsum")},n.prototype.nonMaxSuppression=function(t,e,r,a,o){return F("nonMaxSuppression")},n.prototype.fft=function(t){return F("fft")},n.prototype.ifft=function(t){return F("ifft")},n.prototype.complex=function(t,e){return F("complex")},n.prototype.real=function(t){return F("real")},n.prototype.imag=function(t){return F("imag")},n.prototype.cropAndResize=function(t,e,r,a,o,i){return F("cropAndResize")},n.prototype.depthToSpace=function(t,e,r){return F("depthToSpace")},n.prototype.split=function(t,e,r){return F("split")},n.prototype.sparseToDense=function(t,e,r,a){return F("sparseToDense")},n.prototype.diag=function(t){return F("diag")},n.prototype.fill=function(t,e,r){return F("fill")},n.prototype.onesLike=function(t){return F("onesLike")},n.prototype.zerosLike=function(t){return F("zerosLike")},n.prototype.linspace=function(t,e,r){return F("linspace")},n.prototype.dispose=function(){return F("dispose")},n}();function F(n){throw new Error("'"+n+"' not yet implemented or not found in the registry. Did you forget to import the kernel?")}function en(n,t,e,r,a,o,i){i===void 0&&(i="channelsLast");var s,u=va(t),c=u[0],l=u[1];if(i==="channelsLast")s=[c,l,n[3],n[3]];else{if(i!=="channelsFirst")throw new Error("Unknown dataFormat "+i);s=[c,l,n[1],n[1]]}return rn(n,s,e,r,a,o,!1,i)}function br(n,t,e,r,a,o,i){i===void 0&&(i="NDHWC");var s,u,c=Xo(t),l=c[0],p=c[1],d=c[2];if(i==="NDHWC")u="channelsLast",s=[l,p,d,n[4],n[4]];else{if(i!=="NCDHW")throw new Error("Unknown dataFormat "+i);u="channelsFirst",s=[l,p,d,n[1],n[1]]}return wr(n,s,e,r,a,!1,u,o)}function rn(n,t,e,r,a,o,i,s){i===void 0&&(i=!1),s===void 0&&(s="channelsLast");var u=[-1,-1,-1,-1],c=u[0],l=u[1],p=u[2],d=u[3];if(s==="channelsLast")c=n[0],l=n[1],p=n[2],d=n[3];else{if(s!=="channelsFirst")throw new Error("Unknown dataFormat "+s);c=n[0],d=n[1],l=n[2],p=n[3]}var f,h=t[0],m=t[1],v=t[3],g=va(e),y=g[0],x=g[1],b=va(r),w=b[0],N=b[1],I=Bn(h,w),R=Bn(m,N),k=function(L,B,z,U,W,H,q,K){var J,ee,ae;if(typeof L=="number"){J={top:L,bottom:L,left:L,right:L,type:L===0?"VALID":"NUMBER"};var oe=function(le,ve,he,Se,we){Se==null&&(Se=xs(le,ve,he));var Ce=le[0],mt=le[1],vt=cr((Ce-ve+2*Se)/he+1,we);E(Ne(vt),function(){return"The output # of rows ("+vt+") must be an integer. Change the stride and/or zero pad parameters"});var Ke=cr((mt-ve+2*Se)/he+1,we);return E(Ne(Ke),function(){return"The output # of columns ("+Ke+") must be an integer. Change the stride and/or zero pad parameters"}),[vt,Ke]}([B,z],H,U,L,K);ee=oe[0],ae=oe[1]}else if(L==="same"){ee=Math.ceil(B/U),ae=Math.ceil(z/W);var se=Math.max(0,(ee-1)*U+H-B),pe=Math.max(0,(ae-1)*W+q-z),ce=Math.floor(se/2),de=se-ce,Ie=Math.floor(pe/2);J={top:ce,bottom:de,left:Ie,right:pe-Ie,type:"SAME"}}else{if(L!=="valid")throw Error("Unknown padding parameter: "+L);J={top:0,bottom:0,left:0,right:0,type:"VALID"},ee=Math.ceil((B-H+1)/U),ae=Math.ceil((z-q+1)/W)}return{padInfo:J,outHeight:ee,outWidth:ae}}(a,l,p,y,x,I,R,o),T=k.padInfo,O=k.outHeight,_=k.outWidth,V=i?v*d:v;return s==="channelsFirst"?f=[c,V,O,_]:s==="channelsLast"&&(f=[c,O,_,V]),{batchSize:c,dataFormat:s,inHeight:l,inWidth:p,inChannels:d,outHeight:O,outWidth:_,outChannels:V,padInfo:T,strideHeight:y,strideWidth:x,filterHeight:h,filterWidth:m,effectiveFilterHeight:I,effectiveFilterWidth:R,dilationHeight:w,dilationWidth:N,inShape:n,outShape:f,filterShape:t}}function wr(n,t,e,r,a,o,i,s){o===void 0&&(o=!1),i===void 0&&(i="channelsLast");var u=[-1,-1,-1,-1,-1],c=u[0],l=u[1],p=u[2],d=u[3],f=u[4];if(i==="channelsLast")c=n[0],l=n[1],p=n[2],d=n[3],f=n[4];else{if(i!=="channelsFirst")throw new Error("Unknown dataFormat "+i);c=n[0],f=n[1],l=n[2],p=n[3],d=n[4]}var h,m=t[0],v=t[1],g=t[2],y=t[4],x=Xo(e),b=x[0],w=x[1],N=x[2],I=Xo(r),R=I[0],k=I[1],T=I[2],O=Bn(m,R),_=Bn(v,k),V=Bn(g,T),L=function(q,K,J,ee,ae,oe,se,pe,ce,de,Ie){var le,ve,he,Se;if(typeof q=="number"){le={top:q,bottom:q,left:q,right:q,front:q,back:q,type:q===0?"VALID":"NUMBER"};var we=function(En,Tt,ao,In,gt,oo){gt==null&&(gt=xs(En,Tt,In));var wf=En[0],Cf=En[1],Nf=En[2],io=cr((wf-Tt+2*gt)/In+1,oo);E(Ne(io),function(){return"The output # of depths ("+io+") must be an integer. Change the stride and/or zero pad parameters"});var so=cr((Cf-Tt+2*gt)/In+1,oo);E(Ne(so),function(){return"The output # of rows ("+so+") must be an integer. Change the stride and/or zero pad parameters"});var uo=cr((Nf-Tt+2*gt)/In+1,oo);return E(Ne(uo),function(){return"The output # of columns ("+uo+") must be an integer. Change the stride and/or zero pad parameters"}),[io,so,uo,ao]}([K,J,ee,1],pe,1,ae,q,Ie);ve=we[0],he=we[1],Se=we[2]}else if(q==="same"){ve=Math.ceil(K/ae),he=Math.ceil(J/oe),Se=Math.ceil(ee/se);var Ce=(ve-1)*ae+pe-K,mt=(he-1)*oe+ce-J,vt=(Se-1)*se+de-ee,Ke=Math.floor(Ce/2),Sn=Ce-Ke,Rt=Math.floor(mt/2),Gt=mt-Rt,kt=Math.floor(vt/2);le={top:Rt,bottom:Gt,left:kt,right:vt-kt,front:Ke,back:Sn,type:"SAME"}}else{if(q!=="valid")throw Error("Unknown padding parameter: "+q);le={top:0,bottom:0,left:0,right:0,front:0,back:0,type:"VALID"},ve=Math.ceil((K-pe+1)/ae),he=Math.ceil((J-ce+1)/oe),Se=Math.ceil((ee-de+1)/se)}return{padInfo:le,outDepth:ve,outHeight:he,outWidth:Se}}(a,l,p,d,b,w,N,O,_,V,s),B=L.padInfo,z=L.outDepth,U=L.outHeight,W=L.outWidth,H=o?y*f:y;return i==="channelsFirst"?h=[c,H,z,U,W]:i==="channelsLast"&&(h=[c,z,U,W,H]),{batchSize:c,dataFormat:i,inDepth:l,inHeight:p,inWidth:d,inChannels:f,outDepth:z,outHeight:U,outWidth:W,outChannels:H,padInfo:B,strideDepth:b,strideHeight:w,strideWidth:N,filterDepth:m,filterHeight:v,filterWidth:g,effectiveFilterDepth:O,effectiveFilterHeight:_,effectiveFilterWidth:V,dilationDepth:R,dilationHeight:k,dilationWidth:T,inShape:n,outShape:h,filterShape:t}}function xs(n,t,e,r){r===void 0&&(r=1);var a=Bn(t,r);return Math.floor((n[0]*(e-1)-e+a)/2)}function va(n){return typeof n=="number"?[n,n,n]:n.length===2?[n[0],n[1],1]:n}function Xo(n){return typeof n=="number"?[n,n,n]:n}function Bn(n,t){return t<=1?n:n+(n-1)*(t-1)}function cr(n,t){if(!t)return n;switch(t){case"round":return Math.round(n);case"ceil":return Math.ceil(n);case"floor":return Math.floor(n);default:throw new Error("Unknown roundingMode "+t)}}function yn(n){var t=va(n),e=t[0],r=t[1],a=t[2];return e===1&&r===1&&a===1}function Be(n,t){return yn(n)||yn(t)}function Oa(n){if(n==="NHWC")return"channelsLast";if(n==="NCHW")return"channelsFirst";throw new Error("Unknown dataFormat "+n)}function bs(n,t,e){if(t==="complex64"){if(n.dtype==="complex64")return n.clone();var r=xe(n.shape),a=n.toFloat(),o=e.complex(a,r);return r.dispose(),a.dispose(),o}if(!Mc(n.dtype,t))return A.makeTensorFromDataId(n.dataId,n.shape,t);if(n.dtype==="complex64"){var i=e.real(n);return o=i.cast(t),i.dispose(),o}if(t==="int32")return e.int(n);if(t==="bool"){var s=j(0,n.dtype);return o=e.notEqual(n,s),s.dispose(),o}throw new Error("Error in Cast: failed to cast "+n.dtype+" to "+t)}function ga(n,t){return A.makeTensorFromDataId(n.dataId,t,n.dtype)}function ws(n,t,e){var r=(t-n)/(e-1),a=Kn(e,"float32");a[0]=n;for(var o=1;o<a.length;o++)a[o]=a[o-1]+r;return Bt(a,"float32")}var ph=Object.freeze({castTensor:bs,reshapeTensor:ga,linspaceImpl:ws,upcastType:Oe,axesAreInnerMostDims:Ri,combineLocations:yl,computeOutAndReduceShapes:_e,expandShapeToKeepDim:ze,assertAxesAreInnerMostDims:Ue,getAxesPermutation:dt,getUndoAxesPermutation:Na,getInnerMostAxes:ft,getBroadcastDims:_t,getReductionAxes:ke,assertAndGetBroadcastShape:ie,assertParamsConsistent:xl,computeOutShape:gn,computePool2DInfo:en,computePool3DInfo:br,computeConv2DInfo:rn,computeConv3DInfo:wr,computeDefaultPad:xs,tupleValuesAreOne:yn,eitherStridesOrDilationsAreOne:Be,convertConv2DDataFormat:Oa,PARALLELIZE_THRESHOLD:fs,computeOptimalWindowSize:ia});function $o(n,t){if(n.length!==t.length)throw new Error("Cannot merge real and imag arrays of different lengths. real:"+n.length+", imag: "+t.length+".");for(var e=new Float32Array(2*n.length),r=0;r<e.length;r+=2)e[r]=n[r/2],e[r+1]=t[r/2];return e}function ku(n,t){return{real:n[2*t],imag:n[2*t+1]}}function dh(n,t,e,r){n[2*r]=t,n[2*r+1]=e}function fh(n,t,e){var r=(e?2:-2)*Math.PI*(n/t);return{real:Math.cos(r),imag:Math.sin(r)}}function hh(n,t,e){var r=function(o,i,s){return function(u,c,l){for(var p=0,d=u.length,f=0,h=!1;p<d;){var m=l(c,u[f=p+(d-p>>>1)]);m>0?p=f+1:(d=f,h=!m)}return h?p:-p-1}(o,i,s||mh)}(n,t,e),a=r<0?-(r+1):r;n.splice(a,0,t)}function mh(n,t){return n>t?1:n<t?-1:0}function Cs(n,t,e,r,a){return Ql(n,t,e,r,a,0).selectedIndices}function Ns(n,t,e,r,a,o){var i=Ql(n,t,e,r,a,o);return i.numValidOutputs.dispose(),{selectedIndices:i.selectedIndices,selectedScores:i.selectedScores}}function Ql(n,t,e,r,a,o,i,s){s===void 0&&(s=!1);for(var u=Array.from(t).map(function(b,w){return{score:b,boxIndex:w,suppressBeginIndex:0}}).filter(function(b){return b.score>a}).sort(Tu),c=o>0?-.5/o:0,l=[],p=[];l.length<e&&u.length>0;){var d=u.pop(),f=d.score,h=d.boxIndex,m=d.suppressBeginIndex;if(f<a)break;for(var v=!1,g=l.length-1;g>=m;--g){var y=vh(n,h,l[g]);if(y>=r){v=!0;break}if(d.score=d.score*gh(r,c,y),d.score<=a)break}d.suppressBeginIndex=l.length,v||(d.score===f?(l.push(h),p.push(d.score)):d.score>a&&hh(u,d,Tu))}var x=l.length;return s&&(l.fill(0,x),p.fill(0,x)),{selectedIndices:Bt(l,"int32"),selectedScores:Bt(p,"float32"),numValidOutputs:j(x,"int32")}}function vh(n,t,e){var r=n.subarray(4*t,4*t+4),a=n.subarray(4*e,4*e+4),o=Math.min(r[0],r[2]),i=Math.min(r[1],r[3]),s=Math.max(r[0],r[2]),u=Math.max(r[1],r[3]),c=Math.min(a[0],a[2]),l=Math.min(a[1],a[3]),p=Math.max(a[0],a[2]),d=Math.max(a[1],a[3]),f=(s-o)*(u-i),h=(p-c)*(d-l);if(f<=0||h<=0)return 0;var m=Math.max(o,c),v=Math.max(i,l),g=Math.min(s,p),y=Math.min(u,d),x=Math.max(g-m,0)*Math.max(y-v,0);return x/(f+h-x)}function gh(n,t,e){var r=Math.exp(t*e*e);return e<=n?r:0}function Tu(n,t){return n.score-t.score||n.score===t.score&&t.boxIndex-n.boxIndex}function Jl(n,t,e){var r=new Array(n.rank).fill(0),a=n.shape.slice();return t.map(function(o){a[e]=o;var i=n.slice(r,a);return r[e]+=o,i})}function Zl(n,t){for(var e=new Array(n.rank),r=0;r<e.length;r++)e[r]=n.shape[r]*t[r];var a=ne(e,n.dtype);for(r=0;r<a.values.length;++r){for(var o=a.indexToLoc(r),i=new Array(n.rank),s=0;s<i.length;s++)i[s]=o[s]%n.shape[s];var u=n.locToIndex(i);a.values[r]=n.values[u]}return a.toTensor()}function ep(n,t,e,r,a){for(var o=t[t.length-1],i=[n.length/o,o],s=i[0],u=i[1],c=vn(e,s*r),l=vn("int32",s*r),p=0;p<s;p++){for(var d=p*u,f=n.subarray(d,d+u),h=[],m=0;m<f.length;m++)h.push({value:f[m],index:m});h.sort(function(b,w){return w.value-b.value});var v=p*r,g=c.subarray(v,v+r),y=l.subarray(v,v+r);for(m=0;m<r;m++)g[m]=h[m].value,y[m]=h[m].index}var x=t.slice();return x[x.length-1]=r,[Re(c,x,e),Re(l,x,"int32")]}function Ss(n,t){for(var e=[],r=0;r<t.length;r++)t[r]&&e.push(r);var a=ne(n,"int32"),o=ne([e.length,n.length],"int32");for(r=0;r<e.length;r++){var i=a.indexToLoc(e[r]),s=r*n.length;o.values.set(i,s)}return o.toTensor()}var yh=function(n,t){this.outputShape=[],this.outputShape=n,this.variableNames=t.map(function(a,o){return"T"+o});var e=[];this.variableNames.forEach(function(a){e.push("float v"+a+" = get"+a+"AtOutCoords();")});var r=this.variableNames.map(function(a){return"v"+a}).join(" + ");this.userCode=`
      void main() {
        `+e.join(`
        `)+`

        float result = `+r+`;
        setOutput(result);
      }
    `},xh=function(n,t){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=n,this.variableNames=t.map(function(a,o){return"T"+o});var e=[];this.variableNames.forEach(function(a){e.push("vec4 v"+a+" = get"+a+"AtOutCoords();")});var r=this.variableNames.map(function(a){return"v"+a}).join(" + ");this.userCode=`
      void main() {
        `+e.join(`
        `)+`

        vec4 result = `+r+`;
        setOutput(result);
      }
    `},bh=function(n,t,e){this.variableNames=["A"];var r=n.windowSize,a=n.batchSize,o=n.inSize,i=Math.ceil(o/r);e||this.variableNames.push("bestIndicesA"),this.outputShape=[a,i];var s=t==="max"?">":"<",u=e?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));";this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * `+r+`;

        int bestIndex = inOffset;
        float bestValue = getA(batch, bestIndex);

        for (int i = 0; i < `+r+`; i++) {
          int inIdx = `+u+`;
          float candidate = getA(batch, inIdx);
          if (candidate `+s+` bestValue) {
            bestValue = candidate;
            bestIndex = inIdx;
          }
        }
        setOutput(float(bestIndex));
      }
    `};function tp(n,t){return["x","y","z","w","u","v"].slice(0,t).map(function(e){return n+"."+e})}function qe(n,t){return t===1?[n]:tp(n,t)}function Pe(){var n,t,e,r,a,o,i,s,u,c;return M().getNumber("WEBGL_VERSION")===2?(n="#version 300 es",t="in",e="out",r="in",a="texture",o="outputColor",i="out vec4 outputColor;",s=`
      bool isnan_custom(float val) {
        return (val > 0.0 || val < 0.0) ? false : val != 0.0;
      }

      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan_custom(val.x),
          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));
      }

      #define isnan(value) isnan_custom(value)
    `,u="",c=`
      #define round(value) newRound(value)
      int newRound(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 newRound(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `):(n="",t="attribute",e="varying",r="varying",a="texture2D",o="gl_FragColor",i="",s=`
      #define isnan(value) isnan_custom(value)
      bool isnan_custom(float val) {
        return (val > 0. || val < 1. || val == 0.) ? false : true;
      }
      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));
      }
    `,u=`
      uniform float INFINITY;

      bool isinf(float val) {
        return abs(val) == INFINITY;
      }
      bvec4 isinf(vec4 val) {
        return equal(abs(val), vec4(INFINITY));
      }
    `,c=`
      int round(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 round(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `),{version:n,attribute:t,varyingVs:e,varyingFs:r,texture2D:a,output:o,defineOutput:i,defineSpecialNaN:s,defineSpecialInf:u,defineRound:c}}function dn(n,t,e){e===void 0&&(e="index");var r=je(t);return r.map(function(a,o){return"int "+n[o]+" = "+e+" / "+a+"; "+(o===r.length-1?"int "+n[o+1]+" = "+e+" - "+n[o]+" * "+a:"index -= "+n[o]+" * "+a)+";"}).join("")}function Es(n){var t=je(n).map(function(e){return e.toString()});return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * `+t[0]+" + coords.y * "+t[1]+` + coords.z;
  }
`}var np=`
  const float FLOAT_MAX = 1.70141184e38;
  const float FLOAT_MIN = 1.17549435e-38;

  lowp vec4 encode_float(highp float v) {
    if (isnan(v)) {
      return vec4(255, 255, 255, 255);
    }

    highp float av = abs(v);

    if(av < FLOAT_MIN) {
      return vec4(0.0, 0.0, 0.0, 0.0);
    } else if(v > FLOAT_MAX) {
      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
    } else if(v < -FLOAT_MAX) {
      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
    }

    highp vec4 c = vec4(0,0,0,0);

    highp float e = floor(log2(av));
    highp float m = exp2(fract(log2(av))) - 1.0;

    c[2] = floor(128.0 * m);
    m -= c[2] / 128.0;
    c[1] = floor(32768.0 * m);
    m -= c[1] / 32768.0;
    c[0] = floor(8388608.0 * m);

    highp float ebias = e + 127.0;
    c[3] = floor(ebias / 2.0);
    ebias -= c[3] * 2.0;
    c[2] += floor(ebias) * 128.0;

    c[3] += 128.0 * step(0.0, -v);

    return c / 255.0;
  }
`;function wh(n,t,e,r){var a=[];n.forEach(function(f){var h=$(f.shapeInfo.logicalShape);f.shapeInfo.isUniform?a.push("uniform float "+f.name+(h>1?"["+h+"]":"")+";"):(a.push("uniform sampler2D "+f.name+";"),a.push("uniform int offset"+f.name+";"))});var o,i,s=a.join(`
`),u=n.map(function(f){return function(h,m,v){v===void 0&&(v=!1);var g="";g+=v?rp(h):On(h);var y=h.shapeInfo.logicalShape,x=m.logicalShape;return y.length<=x.length&&(g+=v?function(b,w){var N,I=b.name,R=I.charAt(0).toUpperCase()+I.slice(1),k="get"+R+"AtOutCoords",T=b.shapeInfo.logicalShape.length,O=w.logicalShape.length,_=_t(b.shapeInfo.logicalShape,w.logicalShape),V=ge(O),L=O-T,B=["x","y","z","w","u","v"];N=T===0?"":O<2&&_.length>=1?"coords = 0;":_.map(function(J){return"coords."+B[J+L]+" = 0;"}).join(`
`);var z="";z=O<2&&T>0?"coords":b.shapeInfo.logicalShape.map(function(J,ee){return"coords."+B[ee+L]}).join(", ");var U="return outputValue;",W=$(b.shapeInfo.logicalShape)===1,H=$(w.logicalShape)===1;if(T!==1||W||H){if(W&&!H)U=O===1?`
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      `:`
        return vec4(outputValue.x);
      `;else if(_.length){var q=T-2,K=T-1;_.indexOf(q)>-1&&_.indexOf(K)>-1?U="return vec4(outputValue.x);":_.indexOf(q)>-1?U="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":_.indexOf(K)>-1&&(U="return vec4(outputValue.xx, outputValue.zz);")}}else U=`
      return vec4(outputValue.xy, outputValue.xy);
    `;return`
    vec4 `+k+`() {
      `+V+` coords = getOutputCoords();
      `+N+`
      vec4 outputValue = get`+R+"("+z+`);
      `+U+`
    }
  `}(h,m):function(b,w){var N=b.name,I=N.charAt(0).toUpperCase()+N.slice(1),R="get"+I+"AtOutCoords",k=w.texShape,T=b.shapeInfo.texShape,O=b.shapeInfo.logicalShape.length,_=w.logicalShape.length;if(!b.shapeInfo.isUniform&&O===_&&b.shapeInfo.flatOffset==null&&Te(T,k))return`
      float `+R+`() {
        return sampleTexture(`+N+`, resultUV);
      }
    `;var V,L=ge(_),B=_t(b.shapeInfo.logicalShape,w.logicalShape),z=_-O,U=["x","y","z","w","u","v"];V=O===0?"":_<2&&B.length>=1?"coords = 0;":B.map(function(H){return"coords."+U[H+z]+" = 0;"}).join(`
`);var W="";return W=_<2&&O>0?"coords":b.shapeInfo.logicalShape.map(function(H,q){return"coords."+U[q+z]}).join(", "),`
    float `+R+`() {
      `+L+` coords = getOutputCoords();
      `+V+`
      return get`+I+"("+W+`);
    }
  `}(h,m)),g}(f,t,r)}).join(`
`),c=t.texShape,l=Pe(),p=function(f){return`
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return `+f.texture2D+`(textureSampler, uv).r;
    }
  `}(l),d=function(f){return f.version+`
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    `+f.varyingFs+` vec2 resultUV;
    `+f.defineOutput+`
    const vec2 halfCR = vec2(0.5, 0.5);

    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    uniform float NAN;
    `+f.defineSpecialNaN+`
    `+f.defineSpecialInf+`
    `+f.defineRound+`

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    int idiv(int a, int b, float sign) {
      int res = a / b;
      int mod = imod(a, b);
      if (sign < 0. && mod != 0) {
        res -= 1;
      }
      return res;
    }

    //Based on the work of Dave Hoskins
    //https://www.shadertoy.com/view/4djSRW
    #define HASHSCALE1 443.8975
    float random(float seed){
      vec2 p = resultUV * seed;
      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
      p3 += dot(p3, p3.yzx + 19.19);
      return fract((p3.x + p3.y) * p3.z);
    }

    `+Ch+`
    `+Nh+`
    `+Sh+`
  `}(l);return t.isPacked?(o=function(f,h){switch(f.length){case 0:return`
    int getOutputCoords() {
      return 0;
    }
  `;case 1:return function(b,w){var N=[Math.ceil(w[0]/2),Math.ceil(w[1]/2)];return N[0]===1?`
      int getOutputCoords() {
        return 2 * int(resultUV.x * `+N[1]+`.0);
      }
    `:N[1]===1?`
      int getOutputCoords() {
        return 2 * int(resultUV.y * `+N[0]+`.0);
      }
    `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+N[0]+", "+N[1]+`));
      return 2 * (resTexRC.x * `+N[1]+` + resTexRC.y);
    }
  `}(0,h);case 2:return function(b,w){var N=[Math.ceil(w[0]/2),Math.ceil(w[1]/2)];if(Te(b,w))return`
      ivec2 getOutputCoords() {
        return 2 * ivec2(resultUV.yx * vec2(`+N[0]+", "+N[1]+`));
      }
    `;var I=Math.ceil(b[1]/2);return`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+N[0]+", "+N[1]+`));

      int index = resTexRC.x * `+N[1]+` + resTexRC.y;
      int r = 2 * (index / `+I+`);
      int c = imod(index, `+I+`) * 2;

      return ivec2(r, c);
    }
  `}(f,h);case 3:return m=f,v=h,g=[Math.ceil(v[0]/2),Math.ceil(v[1]/2)],y=Math.ceil(m[2]/2),x=y*Math.ceil(m[1]/2),`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+g[0]+", "+g[1]+`));
      int index = resTexRC.x * `+g[1]+` + resTexRC.y;

      int b = index / `+x+`;
      index -= b * `+x+`;

      int r = 2 * (index / `+y+`);
      int c = imod(index, `+y+`) * 2;

      return ivec3(b, r, c);
    }
  `;default:return function(b,w){for(var N=[Math.ceil(w[0]/2),Math.ceil(w[1]/2)],I=Math.ceil(b[b.length-1]/2),R=I*Math.ceil(b[b.length-2]/2),k=R,T="",O="b, r, c",_=2;_<b.length-1;_++)k*=b[b.length-_-1],T=`
      int b`+_+" = index / "+k+`;
      index -= b`+_+" * "+k+`;
    `+T,O="b"+_+", "+O;return`
    ivec`+b.length+` getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+N[0]+", "+N[1]+`));
      int index = resTexRC.x * `+N[1]+` + resTexRC.y;

      `+T+`

      int b = index / `+R+`;
      index -= b * `+R+`;

      int r = 2 * (index / `+I+`);
      int c = imod(index, `+I+`) * 2;

      return ivec`+b.length+"("+O+`);
    }
  `}(f,h)}var m,v,g,y,x}(t.logicalShape,c),i=function(f){return`
    void setOutput(vec4 val) {
      `+f.output+` = val;
    }
  `}(l)):(o=function(f,h){switch(f.length){case 0:return`
    int getOutputCoords() {
      return 0;
    }
  `;case 1:return function(g,y){return y[0]===1?`
      int getOutputCoords() {
        return int(resultUV.x * `+y[1]+`.0);
      }
    `:y[1]===1?`
      int getOutputCoords() {
        return int(resultUV.y * `+y[0]+`.0);
      }
    `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+y[0]+", "+y[1]+`));
      return resTexRC.x * `+y[1]+` + resTexRC.y;
    }
  `}(0,h);case 2:return function(g,y){return Te(g,y)?`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(`+y[0]+", "+y[1]+`));
      }
    `:g[1]===1?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(`+y[0]+", "+y[1]+`));
        int index = resTexRC.x * `+y[1]+` + resTexRC.y;
        return ivec2(index, 0);
      }
    `:g[0]===1?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(`+y[0]+", "+y[1]+`));
        int index = resTexRC.x * `+y[1]+` + resTexRC.y;
        return ivec2(0, index);
      }
    `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+y[0]+", "+y[1]+`));
      int index = resTexRC.x * `+y[1]+` + resTexRC.y;
      int r = index / `+g[1]+`;
      int c = index - r * `+g[1]+`;
      return ivec2(r, c);
    }
  `}(f,h);case 3:return m=h,v=dn(["r","c","d"],f),`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+m[0]+", "+m[1]+`));
      int index = resTexRC.x * `+m[1]+` + resTexRC.y;
      `+v+`
      return ivec3(r, c, d);
    }
  `;case 4:return function(g,y){var x=dn(["r","c","d","d2"],g);return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(`+y[0]+", "+y[1]+`));
      int index = resTexRC.x * `+y[1]+` + resTexRC.y;
      `+x+`
      return ivec4(r, c, d, d2);
    }
  `}(f,h);case 5:return function(g,y){var x=dn(["r","c","d","d2","d3"],g);return`
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(`+y[0]+`,
                             `+y[1]+`));

      int index = resTexRC.x * `+y[1]+` + resTexRC.y;

      `+x+`

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `}(f,h);case 6:return function(g,y){var x=dn(["r","c","d","d2","d3","d4"],g);return`
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(`+y[0]+", "+y[1]+`));
      int index = resTexRC.x * `+y[1]+` + resTexRC.y;

      `+x+`

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `}(f,h);default:throw new Error(f.length+"-D output sampling is not yet supported")}var m,v}(t.logicalShape,c),i=function(f){return`
    void setOutput(float val) {
      `+f.output+` = vec4(val, 0, 0, 0);
    }
  `}(l)),r&&(d+=Eh),[d,p,i,s,o,u,e].join(`
`)}function On(n){var t=n.shapeInfo.logicalShape;switch(t.length){case 0:return function(e){var r=e.name,a="get"+r.charAt(0).toUpperCase()+r.slice(1);if(e.shapeInfo.isUniform)return"float "+a+"() {return "+r+";}";var o=e.shapeInfo.texShape,i=o[0],s=o[1];if(i===1&&s===1)return`
      float `+a+`() {
        return sampleTexture(`+r+`, halfCR);
      }
    `;var u=e.shapeInfo.texShape,c=u[0],l=u[1],p=un(r);return`
    float `+a+`() {
      vec2 uv = uvFromFlat(`+c+", "+l+", "+p+`);
      return sampleTexture(`+r+`, uv);
    }
  `}(n);case 1:return function(e){var r=e.name,a="get"+r.charAt(0).toUpperCase()+r.slice(1);if(e.shapeInfo.isUniform)return`
      float `+a+`(int index) {
        `+Rn(e)+`
      }
    `;var o=e.shapeInfo.texShape,i=o[0],s=o[1];if(s===1&&i===1)return`
      float `+a+`(int index) {
        return sampleTexture(`+r+`, halfCR);
      }
    `;var u=un(r);return s===1?`
      float `+a+`(int index) {
        vec2 uv = vec2(0.5, (float(index + `+u+") + 0.5) / "+i+`.0);
        return sampleTexture(`+r+`, uv);
      }
    `:i===1?`
      float `+a+`(int index) {
        vec2 uv = vec2((float(index + `+u+") + 0.5) / "+s+`.0, 0.5);
        return sampleTexture(`+r+`, uv);
      }
    `:`
    float `+a+`(int index) {
      vec2 uv = uvFromFlat(`+i+", "+s+", index + "+u+`);
      return sampleTexture(`+r+`, uv);
    }
  `}(n);case 2:return function(e){var r=e.shapeInfo.logicalShape,a=e.name,o="get"+a.charAt(0).toUpperCase()+a.slice(1),i=e.shapeInfo.texShape;if(i!=null&&Te(r,i)){var s=i[0],u=i[1];return`
    float `+o+`(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(`+u+".0, "+s+`.0);
      return sampleTexture(`+a+`, uv);
    }
  `}var c=qt(r),l=c.newShape,p=c.keptDims,d=l;if(d.length<r.length){var f=_n(e,d);return`
      `+On(f)+`
      float `+o+`(int row, int col) {
        return `+o+"("+Fn(["row","col"],p)+`);
      }
    `}if(e.shapeInfo.isUniform)return`
      float `+o+`(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(`+r[1]+`, 1)));
        `+Rn(e)+`
      }
    `;var h=i[0],m=i[1],v=un(a);return m===1?`
    float `+o+`(int row, int col) {
      float index = dot(vec3(row, col, `+v+"), vec3("+r[1]+`, 1, 1));
      vec2 uv = vec2(0.5, (index + 0.5) / `+h+`.0);
      return sampleTexture(`+a+`, uv);
    }
  `:h===1?`
    float `+o+`(int row, int col) {
      float index = dot(vec3(row, col, `+v+"), vec3("+r[1]+`, 1, 1));
      vec2 uv = vec2((index + 0.5) / `+m+`.0, 0.5);
      return sampleTexture(`+a+`, uv);
    }
  `:`
  float `+o+`(int row, int col) {
    // Explicitly use integer operations as dot() only works on floats.
    int index = row * `+r[1]+" + col + "+v+`;
    vec2 uv = uvFromFlat(`+h+", "+m+`, index);
    return sampleTexture(`+a+`, uv);
  }
`}(n);case 3:return function(e){var r=e.shapeInfo.logicalShape,a=e.name,o="get"+a.charAt(0).toUpperCase()+a.slice(1),i=r[1]*r[2],s=r[2],u=qt(r),c=u.newShape,l=u.keptDims,p=c;if(p.length<r.length){var d=_n(e,p);return`
        `+On(d)+`
        float `+o+`(int row, int col, int depth) {
          return `+o+"("+Fn(["row","col","depth"],l)+`);
        }
      `}if(e.shapeInfo.isUniform)return`
      float `+o+`(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(`+i+", "+s+`, 1)));
        `+Rn(e)+`
      }
    `;var f=e.shapeInfo.texShape,h=f[0],m=f[1],v=e.shapeInfo.flatOffset;if(m===i&&v==null)return`
        float `+o+`(int row, int col, int depth) {
          float texR = float(row);
          float texC = dot(vec2(col, depth), vec2(`+s+`, 1));
          vec2 uv = (vec2(texC, texR) + halfCR) /
                     vec2(`+m+".0, "+h+`.0);
          return sampleTexture(`+a+`, uv);
        }
      `;if(m===s&&v==null)return`
    float `+o+`(int row, int col, int depth) {
      float texR = dot(vec2(row, col), vec2(`+r[1]+`, 1));
      float texC = float(depth);
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+m+".0, "+h+`.0);
      return sampleTexture(`+a+`, uv);
    }
  `;var g=un(a);return`
      float `+o+`(int row, int col, int depth) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * `+i+" + col * "+s+" + depth + "+g+`;
        vec2 uv = uvFromFlat(`+h+", "+m+`, index);
        return sampleTexture(`+a+`, uv);
      }
  `}(n);case 4:return function(e){var r=e.shapeInfo.logicalShape,a=e.name,o="get"+a.charAt(0).toUpperCase()+a.slice(1),i=r[3],s=r[2]*i,u=r[1]*s,c=qt(r),l=c.newShape,p=c.keptDims;if(l.length<r.length){var d=_n(e,l);return`
      `+On(d)+`
      float `+o+`(int row, int col, int depth, int depth2) {
        return `+o+"("+Fn(["row","col","depth","depth2"],p)+`);
      }
    `}if(e.shapeInfo.isUniform)return`
      float `+o+`(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(`+u+", "+s+", "+i+`, 1)));
        `+Rn(e)+`
      }
    `;var f=e.shapeInfo.flatOffset,h=e.shapeInfo.texShape,m=h[0],v=h[1];if(v===u&&f==null)return`
      float `+o+`(int row, int col, int depth, int depth2) {
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(`+s+", "+i+`, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+v+".0, "+m+`.0);
        return sampleTexture(`+a+`, uv);
      }
    `;if(v===i&&f==null)return`
      float `+o+`(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(`+r[1]*r[2]+", "+r[2]+`, 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+v+".0, "+m+`.0);
        return sampleTexture(`+a+`, uv);
      }
    `;var g=un(a);return`
    float `+o+`(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+u+" + col * "+s+` +
          depth * `+i+` + depth2;
      vec2 uv = uvFromFlat(`+m+", "+v+", index + "+g+`);
      return sampleTexture(`+a+`, uv);
    }
  `}(n);case 5:return function(e){var r=e.shapeInfo.logicalShape,a=e.name,o="get"+a.charAt(0).toUpperCase()+a.slice(1),i=r[4],s=r[3]*i,u=r[2]*s,c=r[1]*u,l=qt(r),p=l.newShape,d=l.keptDims;if(p.length<r.length){var f=_n(e,p);return`
      `+On(f)+`
      float `+o+`(int row, int col, int depth, int depth2, int depth3) {
        return `+o+"("+Fn(["row","col","depth","depth2","depth3"],d)+`);
      }
    `}if(e.shapeInfo.isUniform)return`
      float `+o+`(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(`+c+", "+u+", "+s+", "+i+`)) +
          depth3;
        `+Rn(e)+`
      }
    `;var h=e.shapeInfo.flatOffset,m=e.shapeInfo.texShape,v=m[0],g=m[1];if(g===c&&h==null)return`
      float `+o+`(int row, int col, int depth, int depth2, int depth3) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
                         vec4(`+u+", "+s+", "+i+`, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+g+".0, "+v+`.0);
        return sampleTexture(`+a+`, uv);
      }
    `;if(g===i&&h==null)return`
      float `+o+`(int row, int col, int depth, int depth2, int depth3) {
        float texR = dot(
          vec4(row, col, depth, depth2),
          vec4(`+r[1]*r[2]*r[3]+`,
               `+r[2]*r[3]+", "+r[3]+`, 1));
        int texC = depth3;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+g+".0, "+v+`.0);
        return sampleTexture(`+a+`, uv);
      }
    `;var y=un(a);return`
    float `+o+`(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+c+" + col * "+u+" + depth * "+s+` +
          depth2 * `+i+" + depth3 + "+y+`;
      vec2 uv = uvFromFlat(`+v+", "+g+`, index);
      return sampleTexture(`+a+`, uv);
    }
  `}(n);case 6:return function(e){var r=e.shapeInfo.logicalShape,a=e.name,o="get"+a.charAt(0).toUpperCase()+a.slice(1),i=qt(r),s=i.newShape,u=i.keptDims;if(s.length<r.length){var c=_n(e,s);return`
      `+On(c)+`
      float `+o+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return `+o+"("+Fn(["row","col","depth","depth2","depth3","depth4"],u)+`);
      }
    `}var l=r[5],p=r[4]*l,d=r[3]*p,f=r[2]*d,h=r[1]*f;if(e.shapeInfo.isUniform)return`
      float `+o+`(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
        int index = round(dot(
          vec4(row, col, depth, depth2),
          vec4(`+h+", "+f+", "+d+", "+p+`)) +
          dot(
            vec2(depth3, depth4),
            vec2(`+l+`, 1)));
        `+Rn(e)+`
      }
    `;var m=e.shapeInfo.flatOffset,v=e.shapeInfo.texShape,g=v[0],y=v[1];if(y===h&&m==null)return`
      float `+o+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
          vec4(`+f+", "+d+", "+p+", "+l+`)) +
               float(depth4);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+y+".0, "+g+`.0);
        return sampleTexture(`+a+`, uv);
      }
    `;if(y===l&&m==null)return`
      float `+o+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        float texR = dot(vec4(row, col, depth, depth2),
          vec4(`+r[1]*r[2]*r[3]*r[4]+`,
               `+r[2]*r[3]*r[4]+`,
               `+r[3]*r[4]+`,
               `+r[4]+`)) + float(depth3);
        int texC = depth4;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+y+".0, "+g+`.0);
        return sampleTexture(`+a+`, uv);
      }
    `;var x=un(a);return`
    float `+o+`(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+h+" + col * "+f+" + depth * "+d+` +
          depth2 * `+p+" + depth3 * "+l+" + depth4 + "+x+`;
      vec2 uv = uvFromFlat(`+g+", "+y+`, index);
      return sampleTexture(`+a+`, uv);
    }
  `}(n);default:throw new Error(t.length+"-D input sampling is not yet supported")}}function rp(n){var t,e,r;switch(n.shapeInfo.logicalShape.length){case 0:return t=n.name,e="get"+t.charAt(0).toUpperCase()+t.slice(1),r=Pe(),`
    vec4 `+e+`() {
      return `+r.texture2D+"("+t+`, halfCR);
    }
  `;case 1:return function(a){var o=a.name,i="get"+o.charAt(0).toUpperCase()+o.slice(1),s=a.shapeInfo.texShape,u=[Math.ceil(s[0]/2),Math.ceil(s[1]/2)],c=Pe();return`
    vec4 `+i+`(int index) {
      vec2 uv = packedUVfrom1D(
        `+u[0]+", "+u[1]+`, index);
      return `+c.texture2D+"("+o+`, uv);
    }
  `}(n);case 2:return function(a){var o=a.shapeInfo.logicalShape,i=a.name,s="get"+i.charAt(0).toUpperCase()+i.slice(1),u=a.shapeInfo.texShape,c=u[0],l=u[1],p=Pe();if(u!=null&&Te(o,u))return`
      vec4 `+s+`(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(`+l+".0, "+c+`.0);

        return `+p.texture2D+"("+i+`, uv);
      }
    `;var d=[Math.ceil(u[0]/2),Math.ceil(u[1]/2)],f=Math.ceil(o[1]/2);return`
    vec4 `+s+`(int row, int col) {
      vec2 uv = packedUVfrom2D(`+f+", "+d[0]+", "+d[1]+`, row, col);
      return `+p.texture2D+"("+i+`, uv);
    }
  `}(n);case 3:return function(a){var o=a.shapeInfo.logicalShape,i=a.name,s="get"+i.charAt(0).toUpperCase()+i.slice(1),u=a.shapeInfo.texShape,c=[Math.ceil(u[0]/2),Math.ceil(u[1]/2)];if(o[0]===1){var l=o.slice(1),p=_n(a,l);return`
        `+rp(p)+`
        vec4 `+s+`(int b, int row, int col) {
          return `+s+"("+Fn(["b","row","col"],[1,2])+`);
        }
      `}var d=c[0],f=c[1],h=Math.ceil(o[2]/2),m=h*Math.ceil(o[1]/2),v=Pe();return`
    vec4 `+s+`(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        `+d+", "+f+", "+m+", "+h+`, b, row, col);
      return `+v.texture2D+"("+i+`, uv);
    }
  `}(n);default:return function(a){for(var o=a.shapeInfo.logicalShape,i=o.length,s=a.name,u="get"+s.charAt(0).toUpperCase()+s.slice(1),c=a.shapeInfo.texShape,l=[Math.ceil(c[0]/2),Math.ceil(c[1]/2)],p=l[0],d=l[1],f=Math.ceil(o[i-1]/2),h=f*Math.ceil(o[i-2]/2),m="int b, int row, int col",v="b * "+h+" + (row / 2) * "+f+" + (col / 2)",g=2;g<i-1;g++)m="int b"+g+", "+m,h*=o[i-g-1],v="b"+g+" * "+h+" + "+v;var y=Pe();return`
    vec4 `+u+"("+m+`) {
      int index = `+v+`;
      int texR = index / `+d+`;
      int texC = index - texR * `+d+`;
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+d+", "+p+`);
      return `+y.texture2D+"("+s+`, uv);
    }
  `}(n)}}var Ch=`
vec2 uvFromFlat(int texNumR, int texNumC, int index) {
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
  int texelIndex = index / 2;
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,Nh=`
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,Sh=`
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,Eh=`
  float getChannel(vec4 frag, vec2 innerDims) {
    vec2 modCoord = mod(innerDims, 2.);
    return modCoord.x == 0. ?
      (modCoord.y == 0. ? frag.r : frag.g) :
      (modCoord.y == 0. ? frag.b : frag.a);
  }
  float getChannel(vec4 frag, int dim) {
    float modCoord = mod(float(dim), 2.);
    return modCoord == 0. ? frag.r : frag.g;
  }
`;function un(n){return"offset"+n}function Rn(n){var t=n.name,e=$(n.shapeInfo.logicalShape);return e<2?"return "+t+";":`
    for (int i = 0; i < `+e+`; i++) {
      if (i == index) {
        return `+t+`[i];
      }
    }
  `}function ge(n){if(n<=1)return"int";if(n===2)return"ivec2";if(n===3)return"ivec3";if(n===4)return"ivec4";if(n===5)return"ivec5";if(n===6)return"ivec6";throw Error("GPU for rank "+n+" is not yet supported")}function _n(n,t){var e=JSON.parse(JSON.stringify(n));return e.shapeInfo.logicalShape=t,e}function Fn(n,t){return t.map(function(e){return n[e]}).join(", ")}var Ih=function(n,t,e,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,E(n.length>2,function(){return"Packed arg"+(e.charAt(0).toUpperCase()+e.slice(1))+" supports only inputs with rank above 2."});var a=n[n.length-1],o=Math.ceil(a/t);this.outputShape=n.slice(0,-1),o>1&&this.outputShape.push(o),r||this.variableNames.push("bestIndicesA");var i,s,u=this.outputShape,c=u.length,l=ge(c),p=qe("coords",c);if(o===1){var d=ge(s=c+1);i=`
        `+d+" sourceLocR = "+d+"("+p.join()+`, 0);
        ++`+p[c-1]+`;
        `+d+" sourceLocG = "+d+"("+p.join()+`, 0);
        ++`+p[c-2]+`;
        `+d+" sourceLocA = "+d+"("+p.join()+`, 0);
        --`+p[c-1]+`;
        `+d+" sourceLocB = "+d+"("+p.join()+`, 0);
        --`+p[c-2]+";"}else s=c,i=`
        `+l+` sourceLocR = coords;
        ++`+p[c-1]+`;
        `+l+` sourceLocG = coords;
        ++`+p[c-2]+`;
        `+l+` sourceLocA = coords;
        --`+p[c-1]+`;
        `+l+` sourceLocB = coords;
        --`+p[c-2]+";";var f=["x","y","z","w","u","v"].slice(0,s),h="."+f[s-1],m=f.map(function(R){return"int "+R}),v=qe("sourceLocR",s-1).concat("inIdx.r"),g=qe("sourceLocG",s-1).concat("inIdx.g"),y=qe("sourceLocB",s-1).concat("inIdx.b"),x=qe("sourceLocA",s-1).concat("inIdx.a"),b=e==="max"?"greaterThan":"lessThan",w=r?"":`
          inIdx = round(vec4(getBestIndicesAChannel(`+v.join()+`),
                             getBestIndicesAChannel(`+g.join()+`),
                             getBestIndicesAChannel(`+y.join()+`),
                             getBestIndicesAChannel(`+x.join()+")));",N=`vec4(
            getAChannel(`+v.join()+`),
            hasNextCol ? getAChannel(`+g.join()+`) : 0.,
            hasNextRow ? getAChannel(`+y.join()+`) : 0.,
            hasNextRow && hasNextCol ? getAChannel(`+x.join()+") : 0.)",I=r?"":`
      float getBestIndicesAChannel(`+m.join()+`) {
        return getChannel(getBestIndicesA(`+f.join()+`),
                                          vec2(`+f.slice(-2).join()+`));
      }`;this.userCode=`
      float getAChannel(`+m.join()+`) {
        return getChannel(getA(`+f.join()+`),
                               vec2(`+f.slice(-2).join()+`));
      }
      `+I+`
      void main() {
        `+l+` coords = getOutputCoords();
        bool hasNextCol = `+p[c-1]+" < "+(u[c-1]-1)+`;
        bool hasNextRow = `+p[c-2]+" < "+(u[c-2]-1)+`;
        `+i+`
        ivec4 srcIdx = ivec4(sourceLocR`+h+", sourceLocG"+h+`,
          sourceLocB`+h+", sourceLocA"+h+") * "+t+`;
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = `+N+`;

        for (int i = 0; i < `+t+`; i++) {
          inIdx = srcIdx;
          `+w+`
          vec4 candidate = `+N+`;
          bvec4 nan = isnan(candidate);
          bvec4 replace = bvec4(
            vec4(`+b+`(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,
                           replace.y  ? candidate.y : bestValue.y,
                           replace.z  ? candidate.z : bestValue.z,
                           replace.w  ? candidate.w : bestValue.w);
          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));
          srcIdx++;
        }
        setOutput(bestIndex);
      }
    `},Rh=function(n){this.variableNames=["dy"],this.outputShape=n.inShape;var t=n.filterHeight,e=n.filterWidth,r=n.strideHeight,a=n.strideWidth,o=n.dilationHeight,i=n.dilationWidth,s=n.effectiveFilterHeight,u=n.effectiveFilterWidth,c=s-1-n.padInfo.top,l=u-1-n.padInfo.left,p=1/(t*e);this.userCode=`
      const ivec2 pads = ivec2(`+c+", "+l+`);
      const float avgMultiplier = float(`+p+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+s+`;
            wR += `+o+`) {
          float dyR = float(dyRCorner + wR) / `+r+`.0;

          if (dyR < 0.0 || dyR >= `+n.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < `+u+`;
            wC+= `+i+`) {
            float dyC = float(dyCCorner + wC) / `+a+`.0;

            if (dyC < 0.0 || dyC >= `+n.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);

            dotProd += dyValue * avgMultiplier;
          }
        }
        setOutput(dotProd);
      }
    `},kh=function(n){this.variableNames=["dy"],this.outputShape=n.inShape;var t=n.filterDepth,e=n.filterHeight,r=n.filterWidth,a=n.strideDepth,o=n.strideHeight,i=n.strideWidth,s=n.dilationDepth,u=n.dilationHeight,c=n.dilationWidth,l=n.effectiveFilterDepth,p=n.effectiveFilterHeight,d=n.effectiveFilterWidth,f=l-1-n.padInfo.front,h=p-1-n.padInfo.top,m=d-1-n.padInfo.left,v=1/(t*e*r);this.userCode=`
      const ivec3 pads = ivec3(`+f+", "+h+", "+m+`);
      const float avgMultiplier = float(`+v+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < `+l+`;
            wD += `+s+`) {
          float dyD = float(dyDCorner + wD) / `+a+`.0;

          if (dyD < 0.0 || dyD >= `+n.outDepth+`.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < `+p+`;
              wR += `+u+`) {
            float dyR = float(dyRCorner + wR) / `+o+`.0;

            if (dyR < 0.0 || dyR >= `+n.outHeight+`.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < `+d+`;
                wC += `+c+`) {
              float dyC = float(dyCCorner + wC) / `+i+`.0;

              if (dyC < 0.0 || dyC >= `+n.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);

              dotProd += dyValue * avgMultiplier;
            }
          }
        }
        setOutput(dotProd);
      }
    `},Th=function(n,t,e,r,a,o){this.outputShape=[],this.variableNames=["x","mean","variance"],ie(n,t),ie(n,e);var i="0.0";r!=null&&(ie(n,r),this.variableNames.push("offset"),i="getOffsetAtOutCoords()");var s="1.0";a!=null&&(ie(n,a),this.variableNames.push("scale"),s="getScaleAtOutCoords()"),this.outputShape=n,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = `+i+`;
        float scale = `+s+`;
        float inv = scale * inversesqrt(variance + float(`+o+`));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `},Ah=function(n,t,e,r,a,o){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=["x","mean","variance"],ie(n,t),ie(n,e);var i="vec4(0.0)";r!=null&&(ie(n,r),this.variableNames.push("offset"),i="getOffsetAtOutCoords()");var s="vec4(1.0)";a!=null&&(ie(n,a),this.variableNames.push("scale"),s="getScaleAtOutCoords()"),this.outputShape=n,this.userCode=`
      void main() {
        vec4 offset = `+i+`;
        vec4 scale = `+s+`;

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(`+o+`));

        setOutput((x - mean) * inv + offset);
      }
    `},Dh="return areal * breal - aimag * bimag;",Oh="return areal * bimag + aimag * breal;",Au=function(n,t,e){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=ie(t,e),this.userCode=`
      float binaryOpComplex(
          float areal, float aimag, float breal, float bimag) {
        `+n+`
      }

      void main() {
        float areal = getARealAtOutCoords();
        float aimag = getAImagAtOutCoords();
        float breal = getBRealAtOutCoords();
        float bimag = getBImagAtOutCoords();
        setOutput(binaryOpComplex(areal, aimag, breal, bimag));
      }
    `},fo="return a + b;",ho="return a - b;",Du="return a * b;",_h=`
if (a == b) {
  return 1.0;
};
return a / b;`,ap="return (a < 0.) ? b * a : a;",Ee=function(n,t,e){this.variableNames=["A","B"],this.outputShape=ie(t,e),this.userCode=`
      float binaryOperation(float a, float b) {
        `+n+`
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `},Fh=`
  // vec4 one = vec4(equal(a, b));
  // return one + (vec4(1.0) - one) * a / b;
  vec4 result = a / b;
  if(a.x == b.x) {
    result.x = 1.;
  }
  if(a.y == b.y) {
    result.y = 1.;
  }
  if(a.z == b.z) {
    result.z = 1.;
  }
  if(a.w == b.w) {
    result.w = 1.;
  }

  return result;
`,op=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`,yt=function(n,t,e,r){r===void 0&&(r=!1),this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=ie(t,e);var a=this.outputShape.length,o="";if(r)if(a===0||$(this.outputShape)===1)o=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else if(o=`
          `+ge(a)+` coords = getOutputCoords();
        `,a===1)o+=`
            result.y = (coords + 1) >= `+this.outputShape[0]+` ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;else{var i=qe("coords",a);o+=`
            bool nextRowOutOfBounds =
              (`+i[a-2]+" + 1) >= "+this.outputShape[a-2]+`;
            bool nextColOutOfBounds =
              (`+i[a-1]+" + 1) >= "+this.outputShape[a-1]+`;
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `}this.userCode=`
      vec4 binaryOperation(vec4 a, vec4 b) {
        `+n+`
      }

      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();

        vec4 result = binaryOperation(a, b);
        `+o+`

        setOutput(result);
      }
    `},Mh=function(){function n(t){this.variableNames=["A"],this.outputShape=t,this.userCode=`
      uniform float minVal;
      uniform float maxVal;

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `}return n.prototype.getCustomSetupFunc=function(t,e){var r=this;return function(a,o){r.minLoc==null&&(r.minLoc=a.getUniformLocationNoThrow(o,"minVal"),r.maxLoc=a.getUniformLocationNoThrow(o,"maxVal")),a.gl.uniform1f(r.minLoc,t),a.gl.uniform1f(r.maxLoc,e)}},n}(),Ph=function(){function n(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.userCode=`
      uniform float minVal;
      uniform float maxVal;

      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `}return n.prototype.getCustomSetupFunc=function(t,e){var r=this;return function(a,o){r.minLoc==null&&(r.minLoc=a.getUniformLocationNoThrow(o,"minVal"),r.maxLoc=a.getUniformLocationNoThrow(o,"maxVal")),a.gl.uniform1f(r.minLoc,t),a.gl.uniform1f(r.maxLoc,e)}},n}(),Bh=function(n){this.variableNames=["real","imag"],this.outputShape=n,this.userCode=`
      void main() {
        float re = abs(getRealAtOutCoords());
        float im = abs(getImagAtOutCoords());
        float mx = max(re, im);

        // sadly the length function in glsl is not underflow-safe
        // (at least not on Intel GPUs). So the safe solution is
        // to ensure underflow-safety in all cases.
        setOutput(
          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))
        );
      }
    `},Lh=function(n){this.outputShape=[],this.outputShape=gn(n,1),this.variableNames=n.map(function(s,u){return"T"+u});var t=new Array(n.length-1);t[0]=n[0][1];for(var e=1;e<t.length;e++)t[e]=t[e-1]+n[e][1];var r=["if (yC < "+t[0]+") setOutput(getT0(yR, yC));"];for(e=1;e<t.length;e++){var a=t[e-1];r.push("else if (yC < "+t[e]+") setOutput(getT"+e+"(yR, yC-"+a+"));")}var o=t.length,i=t[t.length-1];r.push("else setOutput(getT"+o+"(yR, yC-"+i+"));"),this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        `+r.join(`
        `)+`
      }
    `},Vh=function(n,t){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=gn(n,t);var e=this.outputShape,r=e.length,a=ge(r),o=qe("coords",r),i=["x","y","z","w","u","v"].slice(0,r);this.variableNames=n.map(function(v,g){return"T"+g});var s=new Array(n.length-1);s[0]=n[0][t];for(var u=1;u<s.length;u++)s[u]=s[u-1]+n[u][t];var c=i[t],l=i.slice(-2),p=i.join(),d="if ("+c+" < "+s[0]+`) {
        return getChannel(
            getT0(`+p+"), vec2("+l.join()+`));
        }`;for(u=1;u<s.length;u++){var f=s[u-1];d+=`
        if (`+c+" < "+s[u]+"  && "+c+" >= "+s[u-1]+`) {
          return getChannel(
            getT`+u+"("+Wr(i,c,f)+`),
            vec2(`+Wr(l,c,f)+`));
        }`}var h=s.length,m=s[s.length-1];d+=`
        return getChannel(
          getT`+h+"("+Wr(i,c,m)+`),
          vec2(`+Wr(l,c,m)+"));",this.userCode=`
      float getValue(`+i.map(function(v){return"int "+v})+`) {
        `+d+`
      }

      void main() {
        `+a+` coords = getOutputCoords();
        vec4 result = vec4(getValue(`+o+`), 0., 0., 0.);

        `+o[r-1]+" = "+o[r-1]+` + 1;
        if (`+o[r-1]+" < "+e[r-1]+`) {
          result.g = getValue(`+o+`);
        }

        `+o[r-2]+" = "+o[r-2]+` + 1;
        if (`+o[r-2]+" < "+e[r-2]+`) {
          result.a = getValue(`+o+`);
        }

        `+o[r-1]+" = "+o[r-1]+` - 1;
        if (`+o[r-2]+" < "+e[r-2]+` &&
            `+o[r-1]+" < "+e[r-1]+`) {
          result.b = getValue(`+o+`);
        }
        setOutput(result);
      }
    `};function Wr(n,t,e){var r=n.indexOf(t);return n.map(function(a,o){return o===r?a+" - "+e:a}).join()}var Wh=function(n){this.variableNames=["x","dy"],this.outputShape=n.filterShape;var t=n.strideHeight,e=n.strideWidth,r=n.padInfo.top,a=n.padInfo.left,o=n.dataFormat==="channelsLast";this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int d2 = coords.w;

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int b = 0; b < `+n.batchSize+`; b++) {
          for (int yR = 0; yR < `+n.outHeight+`; yR++) {
            int xR = wR + yR * `+t+" - "+r+`;

            if (xR < 0 || xR >= `+n.inHeight+`) {
              continue;
            }

            for (int yC = 0; yC < `+n.outWidth+`; yC++) {
              int xC = wC + yC * `+e+" - "+a+`;

              if (xC < 0 || xC >= `+n.inWidth+`) {
                continue;
              }

              if (`+o+`) {
                float dyValue = getDy(b, yR, yC, d2);
                float xValue = getX(b, xR, xC, d1);
                dotProd += (xValue * dyValue);
              } else {
                float dyValue = getDy(b, d2, yR, yC);
                float xValue = getX(b, d1, xR, xC);
                dotProd += (xValue * dyValue);
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `},zh=function(n){this.variableNames=["dy","W"],this.outputShape=n.inShape;var t=n.filterHeight,e=n.filterWidth,r=n.strideHeight,a=n.strideWidth,o=n.dataFormat==="channelsLast",i=t-1-n.padInfo.top,s=e-1-n.padInfo.left,u=o?1:2,c=o?2:3,l=o?3:1;this.userCode=`
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[`+l+`];

        ivec2 dyCorner = ivec2(coords[`+u+"], coords["+c+`]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+t+`; wR++) {
          float dyR = float(dyRCorner + wR) / `+r+`.0;

          if (dyR < 0.0 || dyR >= `+n.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = `+t+` - 1 - wR;

          for (int wC = 0; wC < `+e+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+a+`.0;

            if (dyC < 0.0 || dyC >= `+n.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = `+e+` - 1 - wC;

            for (int d2 = 0; d2 < `+n.outChannels+`; d2++) {

              if (`+o+`) {
                float xValue = getDy(batch, idyR, idyC, d2);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              } else {
                float xValue = getDy(batch, d2, idyR, idyC);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `},Uh=function(n){this.variableNames=["x","dy"],this.outputShape=n.filterShape;var t=n.strideDepth,e=n.strideHeight,r=n.strideWidth,a=n.padInfo.front,o=n.padInfo.top,i=n.padInfo.left;this.userCode=`
      void main() {
        ivec5 coords = getOutputCoords();
        int wF = coords.x;
        int wR = coords.y;
        int wC = coords.z;
        int d1 = coords.w;
        int d2 = coords.u;

        float dotProd = 0.0;

        for (int b = 0; b < `+n.batchSize+`; b++) {
          for (int yF = 0; yF < `+n.outDepth+`; yF++) {
            int xF = wF + yF * `+t+" - "+a+`;

            if (xF < 0 || xF >= `+n.inDepth+`) {
              continue;
            }

            for (int yR = 0; yR < `+n.outHeight+`; yR++) {
              int xR = wR + yR * `+e+" - "+o+`;

              if (xR < 0 || xR >= `+n.inHeight+`) {
                continue;
              }

              for (int yC = 0; yC < `+n.outWidth+`; yC++) {
                int xC = wC + yC * `+r+" - "+i+`;

                if (xC < 0 || xC >= `+n.inWidth+`) {
                  continue;
                }

                float dyValue = getDy(b, yF, yR, yC, d2);
                float xValue = getX(b, xF, xR, xC, d1);
                dotProd += (xValue * dyValue);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},Gh=function(n){this.variableNames=["dy","W"],this.outputShape=n.inShape;var t=n.filterDepth,e=n.filterHeight,r=n.filterWidth,a=n.strideDepth,o=n.strideHeight,i=n.strideWidth,s=t-1-n.padInfo.front,u=e-1-n.padInfo.top,c=r-1-n.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(`+s+", "+u+", "+c+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.u;


        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyFCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        float dotProd = 0.0;
        for (int wF = 0; wF < `+t+`; wF++) {
          float dyF = float(dyFCorner + wF) / `+a+`.0;

          if (dyF < 0.0 || dyF >= `+n.outDepth+`.0 || fract(dyF) > 0.0) {
            continue;
          }
          int idyF = int(dyF);

          int wFPerm = `+t+` - 1 - wF;

          for (int wR = 0; wR < `+e+`; wR++) {
            float dyR = float(dyRCorner + wR) / `+o+`.0;

            if (dyR < 0.0 || dyR >= `+n.outHeight+`.0 ||
              fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            int wRPerm = `+e+` - 1 - wR;

            for (int wC = 0; wC < `+r+`; wC++) {
              float dyC = float(dyCCorner + wC) / `+i+`.0;

              if (dyC < 0.0 || dyC >= `+n.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              int wCPerm = `+r+` - 1 - wC;

              for (int d2 = 0; d2 < `+n.outChannels+`; d2++) {
                float xValue = getDy(batch, idyF, idyR, idyC, d2);
                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},Hh=function(n){this.variableNames=["x","dy"],this.outputShape=n.filterShape;var t=n.strideHeight,e=n.strideWidth,r=n.padInfo.top,a=n.padInfo.left,o=n.outChannels/n.inChannels;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int dm = coords.w;
        int d2 = d1 * `+o+` + dm;

        float dotProd = 0.0;

        // TO DO: Vec4 over the batch size
        for (int b = 0; b < `+n.batchSize+`; b++) {
          for (int yR = 0; yR < `+n.outHeight+`; yR++) {
            int xR = wR + yR * `+t+" - "+r+`;

            if (xR < 0 || xR >= `+n.inHeight+`) {
              continue;
            }

            for (int yC = 0; yC < `+n.outWidth+`; yC++) {
              int xC = wC + yC * `+e+" - "+a+`;

              if (xC < 0 || xC >= `+n.inWidth+`) {
                continue;
              }

              float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);
            }
          }
        }
        setOutput(dotProd);
      }
    `},qh=function(n){this.variableNames=["dy","W"],this.outputShape=n.inShape;var t=n.filterHeight,e=n.filterWidth,r=n.strideHeight,a=n.strideWidth,o=t-1-n.padInfo.top,i=e-1-n.padInfo.left,s=n.outChannels/n.inChannels;this.userCode=`
      const ivec2 pads = ivec2(`+o+", "+i+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];
        ivec2 dyCorner = coords.yz - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        float dotProd = 0.0;

        for (int wR = 0; wR < `+t+`; wR++) {
          float dyR = float(dyRCorner + wR) / `+r+`.0;

          if (dyR < 0.0 || dyR >= `+n.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = `+t+` - 1 - wR;

          for (int wC = 0; wC < `+e+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+a+`.0;

            if (dyC < 0.0 || dyC >= `+n.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = `+e+` - 1 - wC;

            // TO DO: Vec4 over the channelMul
            for (int dm = 0; dm < `+s+`; dm++) {
              int d2 = d1 * `+s+` + dm;
              float xValue = getDy(batch, idyR, idyC, d2);
              float wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutput(dotProd);
      }
    `},Ou=function(n,t,e,r){t===void 0&&(t=!1),e===void 0&&(e=null),r===void 0&&(r=!1),this.variableNames=["x","W"],this.outputShape=n.outShape;var a=n.padInfo.top,o=n.padInfo.left,i=n.strideHeight,s=n.strideWidth,u=n.dilationHeight,c=n.dilationWidth,l=n.filterHeight,p=n.filterWidth,d=4*Math.floor(n.inChannels/4),f=n.inChannels%4,h=n.dataFormat==="channelsLast",m=h?1:2,v=h?2:3,g=h?3:1,y="",x="";e&&(y=r?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          `+e+`
        }`:`
          float activation(float x) {
            `+e+`
          }
        `,x="result = activation(result);");var b=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+y+`

      const ivec2 strides = ivec2(`+i+", "+s+`);
      const ivec2 pads = ivec2(`+a+", "+o+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[`+g+`];

        ivec2 xRCCorner =
            ivec2(coords[`+m+"], coords["+v+`]) * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+l+`; wR++) {
          int xR = xRCorner + wR * `+u+`;

          if (xR < 0 || xR >= `+n.inHeight+`) {
            continue;
          }

          for (int wC = 0; wC < `+p+`; wC++) {
            int xC = xCCorner + wC * `+c+`;

            if (xC < 0 || xC >= `+n.inWidth+`) {
              continue;
            }

            for (int d1 = 0; d1 < `+d+`; d1 += 4) {
              vec4 wValues = vec4(
                getW(wR, wC, d1, d2),
                getW(wR, wC, d1 + 1, d2),
                getW(wR, wC, d1 + 2, d2),
                getW(wR, wC, d1 + 3, d2)
              );

              if (`+h+`) {
                vec4 xValues = vec4(
                  getX(batch, xR, xC, d1),
                  getX(batch, xR, xC, d1 + 1),
                  getX(batch, xR, xC, d1 + 2),
                  getX(batch, xR, xC, d1 + 3)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec4 xValues = vec4(
                  getX(batch, d1, xR, xC),
                  getX(batch, d1 + 1, xR, xC),
                  getX(batch, d1 + 2, xR, xC),
                  getX(batch, d1 + 3, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }
            }

            if (`+(f===1)+`) {

              if (`+h+`) {
                dotProd +=
                    getX(batch, xR, xC, `+d+`) *
                    getW(wR, wC, `+d+`, d2);
              } else {
                dotProd +=
                    getX(batch, `+d+`, xR, xC) *
                    getW(wR, wC, `+d+`, d2);
              }

            } else if (`+(f===2)+`) {
              vec2 wValues = vec2(
                getW(wR, wC, `+d+`, d2),
                getW(wR, wC, `+d+` + 1, d2)
              );

              if (`+h+`) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, `+d+`),
                  getX(batch, xR, xC, `+d+` + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, `+d+`, xR, xC),
                  getX(batch, `+d+` + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (`+(f===3)+`) {
              vec3 wValues = vec3(
                getW(wR, wC, `+d+`, d2),
                getW(wR, wC, `+d+` + 1, d2),
                getW(wR, wC, `+d+` + 2, d2)
              );

              if (`+h+`) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, `+d+`),
                  getX(batch, xR, xC, `+d+` + 1),
                  getX(batch, xR, xC, `+d+` + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, `+d+`, xR, xC),
                  getX(batch, `+d+` + 1, xR, xC),
                  getX(batch, `+d+` + 2, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            }
          }
        }

        float result = dotProd;
        `+b+`
        `+x+`
        setOutput(result);
      }
    `},jh=function(n){this.variableNames=["x","W"],this.outputShape=n.outShape;var t=n.padInfo.front,e=n.padInfo.top,r=n.padInfo.left,a=n.strideDepth,o=n.strideHeight,i=n.strideWidth,s=n.dilationDepth,u=n.dilationHeight,c=n.dilationWidth,l=n.filterDepth,p=n.filterHeight,d=n.filterWidth,f=4*Math.floor(n.inChannels/4),h=n.inChannels%4;this.userCode=`
      const ivec3 strides = ivec3(`+a+", "+o+", "+i+`);
      const ivec3 pads = ivec3(`+t+", "+e+", "+r+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d2 = coords.u;

        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xFCorner = xFRCCorner.x;
        int xRCorner = xFRCCorner.y;
        int xCCorner = xFRCCorner.z;

        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get
        // y(yF, yR, yC, d2). ? = to be determined. : = across all
        // values in that axis.
        float dotProd = 0.0;
        for (int wF = 0; wF < `+l+`; wF++) {
          int xF = xFCorner + wF * `+s+`;

          if (xF < 0 || xF >= `+n.inDepth+`) {
            continue;
          }

          for (int wR = 0; wR < `+p+`; wR++) {
            int xR = xRCorner + wR * `+u+`;

            if (xR < 0 || xR >= `+n.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+d+`; wC++) {
              int xC = xCCorner + wC * `+c+`;

              if (xC < 0 || xC >= `+n.inWidth+`) {
                continue;
              }

              for (int d1 = 0; d1 < `+f+`; d1 += 4) {
                vec4 xValues = vec4(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                vec4 wValues = vec4(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (`+(h===1)+`) {
                dotProd +=
                  getX(batch, xF, xR, xC, `+f+`) *
                  getW(wF, wR, wC, `+f+`, d2);
              } else if (`+(h===2)+`) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, `+f+`),
                  getX(batch, xF, xR, xC, `+f+` + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, `+f+`, d2),
                  getW(wF, wR, wC, `+f+` + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (`+(h===3)+`) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, `+f+`),
                  getX(batch, xF, xR, xC, `+f+` + 1),
                  getX(batch, xF, xR, xC, `+f+` + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, `+f+`, d2),
                  getW(wF, wR, wC, `+f+` + 1, d2),
                  getW(wF, wR, wC, `+f+` + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},_u=function(n,t,e,r){t===void 0&&(t=!1),e===void 0&&(e=null),r===void 0&&(r=!1),this.variableNames=["x","W"],this.outputShape=n.outShape;var a=n.inHeight,o=n.inWidth,i=n.padInfo.top,s=n.padInfo.left,u=n.strideHeight,c=n.strideWidth,l=n.dilationHeight,p=n.dilationWidth,d=n.filterHeight,f=n.filterWidth,h=n.outChannels/n.inChannels,m="",v="";e&&(m=r?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          `+e+`
        }`:`
          float activation(float x) {
            `+e+`
          }
        `,v="result = activation(result);");var g=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+m+`

      const ivec2 strides = ivec2(`+u+", "+c+`);
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / `+h+`;
        int q = d2 - d1 * `+h+`;

        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.
        for (int wR = 0; wR < `+d+`; wR++) {
          int xR = xRCorner + wR * `+l+`;

          if (xR < 0 || xR >= `+a+`) {
            continue;
          }

          for (int wC = 0; wC < `+f+`; wC++) {
            int xC = xCCorner + wC * `+p+`;

            if (xC < 0 || xC >= `+o+`) {
              continue;
            }

            float xVal = getX(batch, xR, xC, d1);
            float wVal = getW(wR, wC, d1, q);
            dotProd += xVal * wVal;
          }
        }

        float result = dotProd;
        `+g+`
        `+v+`
        setOutput(result);
      }
    `},Fu=function(n,t,e,r){t===void 0&&(t=!1),e===void 0&&(e=null),r===void 0&&(r=!1),this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=n.outShape;for(var a=n.inHeight,o=n.inWidth,i=n.padInfo.top,s=n.padInfo.left,u=n.strideHeight,c=n.strideWidth,l=n.dilationHeight,p=n.dilationWidth,d=n.filterHeight,f=n.filterWidth,h=f,m="int xR; int xC; int xCOffset;",v=0;v<d;v++)for(var g=0;g<f;g++)m+=`
          vec4 xTexelR`+v+"C"+2*g+` = vec4(0.);
          vec4 wR`+v+"C"+g+` = vec4(0.);
          vec4 xR`+v+"C"+g+" = vec4(0.);";for(v=0;v<d;v++)for(var y=0;y<h;y++){if(m+=`
          xR = xRCorner + `+v*l+`;
          xC = xCCorner + `+(g=2*y)*p+`;
        `,c===1){if(g<f&&(m+=s%2==1?`
                xCOffset = xC + 1;
                if(xR >= 0 && xR < `+a+" && xCOffset >= 0 && xCOffset < "+o+`) {
                  xTexelR`+v+"C"+g+` = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if(xCOffset + 1 >= `+o+`) {
                    xTexelR`+v+"C"+g+`.zw = vec2(0.);
                  }
                } else {
                  xTexelR`+v+"C"+g+` = vec4(0.);
                }

                xCOffset = xC + 1 - 2;
                if(xR >= 0 && xR < `+a+" && xCOffset >= 0 && xCOffset < "+o+`) {
                  vec4 previous = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if(xCOffset + 1 >= `+o+`) {
                    previous.zw = vec2(0.);
                  }

                  xR`+v+"C"+g+" = vec4(previous.zw, xTexelR"+v+"C"+g+`.xy);
                } else {
                  xR`+v+"C"+g+" = vec4(0, 0, xTexelR"+v+"C"+g+`.xy);
                }
              `:`
                if(xR >= 0 && xR < `+a+" && xC >= 0 && xC < "+o+`) {
                  xTexelR`+v+"C"+g+` = getX(batch, xR, xC, d1);
                } else {
                  xTexelR`+v+"C"+g+` = vec4(0.);
                }

                xR`+v+"C"+g+" = xTexelR"+v+"C"+g+`;
              `,g+1<f)){var x=s%2==0?gi(p):p;p%2==0&&s%2==1||p%2!=0&&s%2!=1?(m+=`
                  xCOffset = xC + `+s%2+" + "+x+`;

                  if(xR >= 0 && xR < `+a+` &&
                    xCOffset >= 0 && xCOffset < `+o+`) {
                    xTexelR`+v+"C"+(g+2)+` = getX(batch, xR, xCOffset, d1);
                  }
                `,p>1&&(m+=`
                    xCOffset -= 2;
                    if(xR >= 0 && xR < `+a+` &&
                      xCOffset >= 0 && xCOffset < `+o+`) {
                      xTexelR`+v+"C"+g+` = getX(batch, xR, xCOffset, d1);
                    } else {
                      xTexelR`+v+"C"+g+` = vec4(0.);
                    }
                  `),m+=`
                  xR`+v+"C"+(g+1)+` = vec4(
                    xTexelR`+v+"C"+g+".zw, xTexelR"+v+"C"+(g+2)+`.xy);
                `):m+=`
                  xCOffset = xC + `+x+`;

                  if(xR >= 0 && xR < `+a+` &&
                    xCOffset >= 0 && xCOffset < `+o+`) {
                    xTexelR`+v+"C"+(g+2)+` = getX(batch, xR, xCOffset, d1);
                  }

                  xR`+v+"C"+(g+1)+" = xTexelR"+v+"C"+(g+2)+`;
                `}}else g<f&&(m+=`
              if(xR >= 0 && xR < `+a+`) {
            `,s%2==1?(m+=`
                xCOffset = xC + 1 - `+c+`;
                if(xCOffset >= 0 && xCOffset < `+o+`) {
                  xTexelR`+v+"C"+g+` = getX(batch, xR, xCOffset, d1);
                } else {
                  xTexelR`+v+"C"+g+` = vec4(0.);
                }

                if(xC + 1 >= 0 && xC + 1 < `+o+`) {
                  xTexelR`+v+"C"+(g+2)+` = getX(batch, xR, xC + 1, d1);
                } else {
                  xTexelR`+v+"C"+(g+2)+` = vec4(0.);
                }

                xR`+v+"C"+g+` = vec4(
                  xTexelR`+v+"C"+g+".zw, xTexelR"+v+"C"+(g+2)+`.zw);
              `,g+1<f&&(m+=`
                  vec4 final = vec4(0.);
                  xCOffset = xC + 1 + `+c+`;
                  if(xCOffset >= 0 && xCOffset < `+o+`) {
                    final = getX(batch, xR, xCOffset, d1);
                  }
                  xR`+v+"C"+(g+1)+" = vec4(xTexelR"+v+"C"+(g+2)+`.xy, final.xy);
                `)):(m+=`
                if(xC >= 0 && xC < `+o+`) {
                  xTexelR`+v+"C"+g+` = getX(batch, xR, xC, d1);
                } else {
                  xTexelR`+v+"C"+g+` = vec4(0.);
                }

                xCOffset = xC + `+c+`;
                if(xCOffset >= 0 && xCOffset < `+o+`) {
                  xTexelR`+v+"C"+(g+2)+` = getX(batch, xR, xCOffset, d1);
                } else {
                  xTexelR`+v+"C"+(g+2)+` = vec4(0.);
                }

                xR`+v+"C"+g+` = vec4(
                  xTexelR`+v+"C"+g+".xy, xTexelR"+v+"C"+(g+2)+`.xy);
              `,g+1<f&&(m+=`
                  xR`+v+"C"+(g+1)+` = vec4(
                    xTexelR`+v+"C"+g+".zw, xTexelR"+v+"C"+(g+2)+`.zw);
                `)),m+="}");g<f&&(m+=`
            vec4 wTexelR`+v+"C"+g+" = getW("+v+", "+g+`, d1, q);
            wR`+v+"C"+g+" = vec4(wTexelR"+v+"C"+g+".xz, wTexelR"+v+"C"+g+`.xz);
          `,g+1<f&&(m+=`
              vec4 wTexelR`+v+"C"+(g+1)+" = getW("+v+", "+(g+1)+`, d1, q);
              wR`+v+"C"+(g+1)+` =
                vec4(wTexelR`+v+"C"+(g+1)+".xz, wTexelR"+v+"C"+(g+1)+".xz);"))}for(v=0;v<d;v++)for(g=0;g<f;g++)m+="dotProd += xR"+v+"C"+g+" * wR"+v+"C"+g+";";var b="",w="";e&&(b=r?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          `+e+`
        }`:`vec4 activation(vec4 x) {
          `+e+`
        }`,w="result = activation(result);");var N=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+b+`

      const ivec2 strides = ivec2(`+u+", "+c+`);
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {

        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2;
        int q = 0;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        vec4 dotProd = vec4(0.);

        `+m+`

        vec4 result = dotProd;
        `+N+`
        `+w+`
        setOutput(result);
      }
    `},Kh=function(n,t,e,r,a){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];var o=n[0],i=n[1],s=n[2],u=n[3],c=t[0],l=e[0],p=e[1];this.outputShape=[c,l,p,u];var d=r==="bilinear"?1:0,f=[i-1+".0",s-1+".0"],h=f[0],m=f[1],v=l>1?[""+(i-1)/(l-1),"(y2-y1) * height_ratio","y1*"+h+" + float(y)*(height_scale)"]:["0.0","0.0","0.5 * (y1+y2) * "+h],g=v[0],y=v[1],x=v[2],b=p>1?[""+(s-1)/(p-1),"(x2-x1) * width_ratio","x1*"+m+" + float(x)*(width_scale)"]:["0.0","0.0","0.5 * (x1+x2) * "+m],w=b[0],N=b[1],I=b[2];this.userCode=`
      const float height_ratio = float(`+g+`);
      const float width_ratio = float(`+w+`);
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int y = coords[1];
        int x = coords[2];
        int d = coords[3];

        // get box vals
        float y1 = getBoxes(b,0);
        float x1 = getBoxes(b,1);
        float y2 = getBoxes(b,2);
        float x2 = getBoxes(b,3);

        // get image in batch index
        int bInd = round(getBoxInd(b));
        if(bInd < 0 || bInd >= `+o+`) {
          return;
        }

        float height_scale = `+y+`;
        float width_scale = `+N+`;

        float in_y = `+x+`;
        if( in_y < 0.0 || in_y > `+h+` ) {
          setOutput(float(`+a+`));
          return;
        }
        float in_x = `+I+`;
        if( in_x < 0.0 || in_x > `+m+` ) {
          setOutput(float(`+a+`));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(`+d+` == 1) {
          // Compute the four integer indices.
          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);
          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));

          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);
          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);
          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);
          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);

          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);

          float top = topLeft + (topRight - topLeft) * fracCR.x;
          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          float newValue = top + (bottom - top) * fracCR.y;
          setOutput(newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          ivec2 sourceNearestCR = ivec2(floor(
            sourceFracIndexCR + vec2(0.5,0.5)));
          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutput(newValue);
        }
      }
    `},Xh=function(n,t,e){this.variableNames=["x"],this.outputShape=n;var r=n.length,a=n[n.length-1],o=e?"<":">";this.userCode=`
      int getIndex(int i) {
        `+(e?"return "+a+" -i - 1;":"return i;")+`
      }

      void main() {
        `+ge(r)+` coords = getOutputCoords();
        int end = `+Mu(r,"coords")+`;
        float val = 0.0;
        for (int i = `+a+` - 1; i >= 0; i -= 1) {
          int idx = getIndex(i);
          if (idx `+o+` end) {
            continue;
          }
          if (idx == end && `+t+`) {
            continue;
          }
          `+Mu(r,"coords")+` = idx;
          val += getX(`+function(i,s){if(i===1)return""+s;if(i===2)return s+".x, "+s+".y";if(i===3)return s+".x, "+s+".y, "+s+".z";if(i===4)return s+".x, "+s+".y, "+s+".z, "+s+".w";throw Error("Cumulative sum for rank "+i+" is not yet supported")}(r,"coords")+`);
        }
        setOutput(val);
      }
    `};function Mu(n,t){if(n===1)return""+t;if(n===2)return t+".y";if(n===3)return t+".z";if(n===4)return t+".w";throw Error("Cumulative sum for rank "+n+" is not yet supported")}var $h=function(n){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=mr.DENSE;var t=ur(n),e=Pe();this.outputShape=n,this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        `+dn(["r","c","d"],n)+`
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx *
          vec2(`+t[0]+", "+t[1]+`));
        int index = 4 * (resTexRC.x * `+t[1]+` + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getA(rc.x, rc.y, rc.z);
        }

        `+e.output+` = result;
      }
    `},Yh=function(n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=mr.DENSE;var t=ur(n),e=Pe();this.outputShape=n,this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        `+dn(["r","c","d"],n)+`
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx *
          vec2(`+t[0]+", "+t[1]+`));
        int index = 4 * (resTexRC.x * `+t[1]+` + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));
        }

        `+e.output+` = result;
      }
    `},Qh=function(){function n(t,e,r){this.variableNames=["x"],this.outputShape=[],this.outputShape=t,this.blockSize=e,this.dataFormat=r,this.userCode=`
    void main() {
      ivec4 coords = getOutputCoords();
      int b = coords[0];
      int h = `+this.getHeightCoordString()+`;
      int w = `+this.getWidthCoordString()+`;
      int d = `+this.getDepthCoordString()+`;

      int in_h = h / `+e+`;
      int offset_h = imod(h, `+e+`);
      int in_w = w / `+e+`;
      int offset_w = imod(w, `+e+`);
      int offset_d = (offset_h * `+e+` + offset_w) *
        `+this.getOutputDepthSize()+`;
      int in_d = d + offset_d;

      float result = `+this.getInputSamplingString()+`;
      setOutput(result);
    }
  `}return n.prototype.getHeightCoordString=function(){return this.dataFormat==="NHWC"?"coords[1]":"coords[2]"},n.prototype.getWidthCoordString=function(){return this.dataFormat==="NHWC"?"coords[2]":"coords[3]"},n.prototype.getDepthCoordString=function(){return this.dataFormat==="NHWC"?"coords[3]":"coords[1]"},n.prototype.getOutputDepthSize=function(){return this.dataFormat==="NHWC"?this.outputShape[3]:this.outputShape[1]},n.prototype.getInputSamplingString=function(){return this.dataFormat==="NHWC"?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"},n}(),Jh=function(n){this.variableNames=["X"],this.outputShape=[n,n],this.userCode=`
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `},Zh=function(n){this.variableNames=["A"],this.outTexUsage=Qe.DOWNLOAD;var t=Pe();this.outputShape=n,this.userCode=`
      `+np+`

      void main() {
        float x = getAAtOutCoords();
        `+t.output+` = encode_float(x);
      }
    `},em=function(n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=Qe.DOWNLOAD;var t=Pe();this.outputShape=n,this.userCode=`
      `+np+`

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        `+t.output+` = encode_float(x);
      }
    `},tm=function(n,t,e){e===void 0&&(e=!1),this.variableNames=["A"];var r=Pe(),a=t[0],o=t[1];this.outputShape=n;var i="result";e&&(i="floor(result * 255. + 0.5)"),this.userCode=`
      `+Es(n)+`

      void main() {
        ivec3 coords = getOutputCoords();

        int flatIndex = getFlatIndex(coords);
        int offset = imod(flatIndex, 4);

        flatIndex = idiv(flatIndex, 4, 1.);
        
        int r = flatIndex / `+o+`;
        int c = imod(flatIndex, `+o+`);
        vec2 uv = (vec2(c, r) + halfCR) / vec2(`+o+".0, "+a+`.0);
        vec4 values = `+r.texture2D+`(A, uv);

        float result;

        if(offset == 0) {
          result = values[0];
        } else if(offset == 1) {
          result = values[1];
        } else if(offset == 2) {
          result = values[2];
        } else {
          result = values[3];
        }

        `+r.output+" = vec4("+i+`, 0., 0., 0.);
      }
    `},nm=function(n,t,e){e===void 0&&(e=!1),this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;var r=Pe(),a=t[0],o=t[1];this.outputShape=n;var i="",s="result";e&&(s="floor(result * 255. + 0.5)");for(var u=0;u<=1;u++)for(var c=0;c<=1;c++){var l=2*u+c;i+=`
          localCoords = coords;
          if(localCoords[2] + `+c+" < "+n[2]+`) {
            localCoords[2] += `+c+`;
            if(localCoords[1] + `+u+" < "+n[1]+`) {
              localCoords[1] += `+u+`;

              flatIndex = getFlatIndex(localCoords);
              offset = imod(flatIndex, 4);

              flatIndex = idiv(flatIndex, 4, 1.);

              r = flatIndex / `+o+`;
              c = imod(flatIndex, `+o+`);
              uv = (vec2(c, r) + halfCR) / vec2(`+o+".0, "+a+`.0);
              values = `+r.texture2D+`(A, uv);

              if(offset == 0) {
                result[`+l+`] = values[0];
              } else if(offset == 1) {
                result[`+l+`] = values[1];
              } else if(offset == 2) {
                result[`+l+`] = values[2];
              } else {
                result[`+l+`] = values[3];
              }
            }
          }
        `}this.userCode=`
      `+Es(n)+`

      void main() {
        ivec3 coords = getOutputCoords();

        vec4 result = vec4(0.);
        int flatIndex, r, c, offset;
        ivec3 localCoords;
        vec2 uv;
        vec4 values;

        `+i+`

        `+r.output+" = "+s+`;
      }
    `},rm="return real * expR - imag * expI;",am="return real * expI + imag * expR;",Pu=function(n,t,e){this.variableNames=["real","imag"];var r=t[1];this.outputShape=t;var a=e?"2.0 * "+Math.PI:"-2.0 * "+Math.PI,o=e?r+".0":"1.0";this.userCode=`
      const float exponentMultiplier = `+a+`;

      float unaryOpComplex(float real, float expR, float imag, float expI) {
        `+n+`
      }

      float mulMatDFT(int batch, int index) {
        float indexRatio = float(index) / float(`+r+`);
        float exponentMultiplierTimesIndexRatio =
            exponentMultiplier * indexRatio;

        float result = 0.0;

        for (int i = 0; i < `+r+`; i++) {
          // x = (-2|2 * PI / N) * index * i;
          float x = exponentMultiplierTimesIndexRatio * float(i);
          float expR = cos(x);
          float expI = sin(x);
          float real = getReal(batch, i);
          float imag = getImag(batch, i);

          result +=
              unaryOpComplex(real, expR, imag, expI) / `+o+`;
        }

        return result;
      }

      void main() {
        ivec2 coords = getOutputCoords();
        setOutput(mulMatDFT(coords[0], coords[1]));
      }
    `},om=function(){function n(t,e){this.outputShape=[],this.variableNames=["x"],this.outputShape=t,this.userCode=`
      uniform float value;
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `}return n.prototype.getCustomSetupFunc=function(t){var e=this;return function(r,a){e.valueLoc==null&&(e.valueLoc=r.getUniformLocationNoThrow(a,"value")),r.gl.uniform1f(e.valueLoc,t)}},n}(),im=function(n,t,e){this.variableNames=["A","indices"];var r=n.slice();r[e]=t,this.outputShape=r,this.rank=r.length;var a=ge(this.rank),o=function(i,s){var u=i.length;if(u>4)throw Error("Gather for rank "+u+" is not yet supported");if(u===1)return"int(getIndices(resRC))";for(var c=["resRC.x","resRC.y","resRC.z","resRC.w"],l=[],p=0;p<i.length;p++)p===s?l.push("int(getIndices("+c[p]+"))"):l.push(""+c[p]);return l.join()}(n,e);this.userCode=`
      void main() {
        `+a+` resRC = getOutputCoords();
        setOutput(getA(`+o+`));
      }
    `},sm=function(n,t,e){this.sliceDim=n,this.strides=t,this.variableNames=["x","indices"],this.outputShape=e;var r=ge(t.length),a=ge(e.length),o=this.sliceDim>1?"strides[j]":"strides";this.userCode=`
        `+r+" strides = "+r+"("+this.strides+`);
         void main() {
          `+a+` coords = getOutputCoords();
          int flattenIndex = 0;
          for (int j = 0; j < `+this.sliceDim+`; j++) {
            int index = round(getIndices(coords[0], j));
            flattenIndex += index * `+o+`;
          }
          setOutput(getX(flattenIndex, coords[1]));
        }
      `};function ip(n,t){var e=Pe();return Kc(n,t,e.version+`
    precision highp float;
    `+e.attribute+` vec3 clipSpacePos;
    `+e.attribute+` vec2 uv;
    `+e.varyingVs+` vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`)}function sp(n,t){return Qc(n,t,new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]))}function up(n,t){return Jc(n,t,new Uint16Array([0,1,2,2,1,3]))}function _r(n,t,e,r,a,o,i){el(e,r);var s=Zc(n,t),u=n.TEXTURE_2D;return X(n,t,function(){return n.bindTexture(u,s)}),X(n,t,function(){return n.texParameteri(u,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE)}),X(n,t,function(){return n.texParameteri(u,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}),X(n,t,function(){return n.texParameteri(u,n.TEXTURE_MIN_FILTER,n.NEAREST)}),X(n,t,function(){return n.texParameteri(u,n.TEXTURE_MAG_FILTER,n.NEAREST)}),X(n,t,function(){return n.texImage2D(u,0,a,e,r,0,o,i,null)}),X(n,t,function(){return n.bindTexture(n.TEXTURE_2D,null)}),s}function cp(n,t,e,r,a){var o=Ca(e,r);return _r(n,t,o[0],o[1],a.internalFormatFloat,a.textureFormatFloat,n.FLOAT)}function lp(n,t,e,r,a){var o=Ca(e,r);return _r(n,t,o[0],o[1],a.internalFormatHalfFloat,a.textureFormatFloat,a.textureTypeHalfFloat)}function pp(n,t,e,r,a){var o=Ca(e,r);return _r(n,t,o[0],o[1],n.RGBA,n.RGBA,n.UNSIGNED_BYTE)}function dp(n,t,e,r,a){var o=Nr(e,r);return _r(n,t,o[0],o[1],a.internalFormatPackedFloat,n.RGBA,n.FLOAT)}function fp(n,t,e,r,a){var o=Nr(e,r);return _r(n,t,o[0],o[1],a.internalFormatPackedHalfFloat,n.RGBA,a.textureTypeHalfFloat)}function hp(n,t,e,r){return X(n,t,function(){return n.bindBuffer(n.ARRAY_BUFFER,r)}),Go(n,t,e,"clipSpacePos",r,3,20,0)&&Go(n,t,e,"uv",r,2,20,12)}function mp(n,t,e,r,a,o,i){var s,u,c;X(n,t,function(){return n.bindTexture(n.TEXTURE_2D,e)}),o instanceof Uint8Array?(s=new Uint8Array(r*a*4),u=n.UNSIGNED_BYTE,c=n.RGBA):(s=new Float32Array(r*a*4),u=n.FLOAT,c=i.internalFormatPackedFloat),s.set(o),X(n,t,function(){return n.texImage2D(n.TEXTURE_2D,0,c,r,a,0,n.RGBA,u,s)}),X(n,t,function(){return n.bindTexture(n.TEXTURE_2D,null)})}function vp(n,t,e,r){X(n,t,function(){return n.bindTexture(n.TEXTURE_2D,e)}),r.data instanceof Uint8Array?X(n,t,function(){return n.texImage2D(n.TEXTURE_2D,0,n.RGBA,r.width,r.height,0,n.RGBA,n.UNSIGNED_BYTE,r.data)}):X(n,t,function(){return n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,r)}),X(n,t,function(){return n.bindTexture(n.TEXTURE_2D,null)})}function gp(n,t,e,r,a){var o=n.createBuffer();X(n,t,function(){return n.bindBuffer(n.PIXEL_PACK_BUFFER,o)});var i=16*e*r;return X(n,t,function(){return n.bufferData(n.PIXEL_PACK_BUFFER,i,n.STREAM_READ)}),X(n,t,function(){return n.readPixels(0,0,r,e,n.RGBA,n.FLOAT,0)}),X(n,t,function(){return n.bindBuffer(n.PIXEL_PACK_BUFFER,null)}),o}function yp(n,t,e){var r=n,a=new Float32Array(e);return r.bindBuffer(r.PIXEL_PACK_BUFFER,t),r.getBufferSubData(r.PIXEL_PACK_BUFFER,0,a),r.bindBuffer(r.PIXEL_PACK_BUFFER,null),a}function xp(n,t,e,r,a){var o=Ca(e,r),i=o[0],s=o[1],u=new Uint8Array(e*r*4);return X(n,t,function(){return n.readPixels(0,0,i,s,a.downloadTextureFormat,n.UNSIGNED_BYTE,u)}),new Float32Array(u.buffer)}function bp(n,t,e,r,a,o,i,s){var u=n,c=new Float32Array(function(l,p){var d=Nr(l,p);return d[0]*d[1]*4}(o,i));return u.bindBuffer(u.PIXEL_PACK_BUFFER,t),u.getBufferSubData(u.PIXEL_PACK_BUFFER,0,c),u.bindBuffer(u.PIXEL_PACK_BUFFER,null),c}function wp(n,t,e,r){var a=new Float32Array(e*r*4);return X(n,t,function(){return n.readPixels(0,0,r,e,n.RGBA,n.FLOAT,a)}),a}var um=Object.freeze({createVertexShader:ip,createVertexBuffer:sp,createIndexBuffer:up,createFloat32MatrixTexture:cp,createFloat16MatrixTexture:lp,createUnsignedBytesMatrixTexture:pp,createPackedMatrixTexture:dp,createFloat16PackedMatrixTexture:fp,bindVertexProgramAttributeStreams:hp,uploadDenseMatrixToTexture:mp,uploadPixelDataToTexture:vp,createBufferFromOutputTexture:gp,downloadFloat32MatrixFromBuffer:yp,downloadByteEncodedFloatMatrixFromOutputTexture:xp,downloadPackedMatrixFromBuffer:bp,downloadMatrixFromPackedOutputTexture:wp}),Cp=function(){function n(t){this.outputTexture=null,this.program=null,this.disposed=!1,this.vertexAttrsAreBound=!1,this.itemsToPoll=[];var e=M().getNumber("WEBGL_VERSION");t!=null?(this.gl=t,Hc(e,t)):this.gl=It(e);var r="WEBGL_color_buffer_float";if(M().getNumber("WEBGL_VERSION")===1){if(this.textureFloatExtension=ar(this.gl,this.debug,"OES_texture_float"),Je(this.gl,"OES_texture_half_float"))this.textureHalfFloatExtension=ar(this.gl,this.debug,"OES_texture_half_float");else if(M().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");if(this.colorBufferFloatExtension=this.gl.getExtension(r),Je(this.gl,"EXT_color_buffer_half_float"))this.colorBufferHalfFloatExtension=ar(this.gl,this.debug,"EXT_color_buffer_half_float");else if(M().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")}else if(r="EXT_color_buffer_float",Je(this.gl,r))this.colorBufferFloatExtension=this.gl.getExtension(r);else{if(!Je(this.gl,"EXT_color_buffer_half_float"))throw new Error("GL context does not support color renderable floats");this.colorBufferHalfFloatExtension=this.gl.getExtension("EXT_color_buffer_half_float")}this.vertexBuffer=sp(this.gl,this.debug),this.indexBuffer=up(this.gl,this.debug),this.framebuffer=tl(this.gl,this.debug),this.textureConfig=Si(this.gl,this.textureHalfFloatExtension)}return Object.defineProperty(n.prototype,"debug",{get:function(){return M().getBool("DEBUG")},enumerable:!0,configurable:!0}),n.prototype.dispose=function(){var t=this;if(!this.disposed){this.program!=null&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),this.outputTexture!=null&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");var e=this.gl;X(e,this.debug,function(){return e.finish()}),X(e,this.debug,function(){return e.bindFramebuffer(e.FRAMEBUFFER,null)}),X(e,this.debug,function(){return e.deleteFramebuffer(t.framebuffer)}),X(e,this.debug,function(){return e.bindBuffer(e.ARRAY_BUFFER,null)}),X(e,this.debug,function(){return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null)}),X(e,this.debug,function(){return e.deleteBuffer(t.indexBuffer)}),this.disposed=!0}},n.prototype.createFloat32MatrixTexture=function(t,e){return this.throwIfDisposed(),cp(this.gl,this.debug,t,e,this.textureConfig)},n.prototype.createFloat16MatrixTexture=function(t,e){return this.throwIfDisposed(),lp(this.gl,this.debug,t,e,this.textureConfig)},n.prototype.createUnsignedBytesMatrixTexture=function(t,e){return this.throwIfDisposed(),pp(this.gl,this.debug,t,e,this.textureConfig)},n.prototype.uploadPixelDataToTexture=function(t,e){this.throwIfDisposed(),vp(this.gl,this.debug,t,e)},n.prototype.uploadDenseMatrixToTexture=function(t,e,r,a){this.throwIfDisposed(),mp(this.gl,this.debug,t,e,r,a,this.textureConfig)},n.prototype.createFloat16PackedMatrixTexture=function(t,e){return this.throwIfDisposed(),fp(this.gl,this.debug,t,e,this.textureConfig)},n.prototype.createPackedMatrixTexture=function(t,e){return this.throwIfDisposed(),dp(this.gl,this.debug,t,e,this.textureConfig)},n.prototype.deleteMatrixTexture=function(t){var e=this;this.throwIfDisposed(),this.outputTexture===t&&(Ho(this.gl,this.debug,this.framebuffer),this.outputTexture=null),X(this.gl,this.debug,function(){return e.gl.deleteTexture(t)})},n.prototype.downloadByteEncodedFloatMatrixFromOutputTexture=function(t,e,r){var a=this;return this.downloadMatrixDriver(t,function(){return xp(a.gl,a.debug,e,r,a.textureConfig)})},n.prototype.downloadPackedMatrixFromBuffer=function(t,e,r,a,o,i){return bp(this.gl,t,0,0,0,o,i,this.textureConfig)},n.prototype.downloadFloat32MatrixFromBuffer=function(t,e){return yp(this.gl,t,e)},n.prototype.createBufferFromTexture=function(t,e,r){this.bindTextureToFrameBuffer(t);var a=gp(this.gl,this.debug,e,r,this.textureConfig);return this.unbindTextureToFrameBuffer(),a},n.prototype.createAndWaitForFence=function(){var t=this.createFence(this.gl);return this.pollFence(t)},n.prototype.createFence=function(t){var e,r,a=this;if(M().getBool("WEBGL_FENCE_API_ENABLED")){var o=t,i=o.fenceSync(o.SYNC_GPU_COMMANDS_COMPLETE,0);t.flush(),r=function(){var s=o.clientWaitSync(i,0,0);return s===o.ALREADY_SIGNALED||s===o.CONDITION_SATISFIED},e=i}else M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(e=this.beginQuery(),this.endQuery(),r=function(){return a.isQueryAvailable(e,M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))}):r=function(){return!0};return{query:e,isFencePassed:r}},n.prototype.downloadMatrixFromPackedTexture=function(t,e,r){var a=this;return this.downloadMatrixDriver(t,function(){return wp(a.gl,a.debug,e,r)})},n.prototype.createProgram=function(t){this.throwIfDisposed();var e=this.gl,r=Xc(e,this.debug,t),a=ip(e,this.debug),o=$c(e,this.debug);return X(e,this.debug,function(){return e.attachShader(o,a)}),X(e,this.debug,function(){return e.attachShader(o,r)}),Yc(e,this.debug,o),this.debug&&ra(e,this.debug,o),this.vertexAttrsAreBound||(this.setProgram(o),this.vertexAttrsAreBound=hp(e,this.debug,this.program,this.vertexBuffer)),o},n.prototype.deleteProgram=function(t){var e=this;this.throwIfDisposed(),t===this.program&&(this.program=null),t!=null&&X(this.gl,this.debug,function(){return e.gl.deleteProgram(t)})},n.prototype.setProgram=function(t){var e=this;this.throwIfDisposed(),this.program=t,this.program!=null&&this.debug&&ra(this.gl,this.debug,this.program),X(this.gl,this.debug,function(){return e.gl.useProgram(t)})},n.prototype.getUniformLocation=function(t,e,r){return r===void 0&&(r=!0),this.throwIfDisposed(),r?rl(this.gl,this.debug,t,e):al(this.gl,t,e)},n.prototype.getAttributeLocation=function(t,e){var r=this;return this.throwIfDisposed(),X(this.gl,this.debug,function(){return r.gl.getAttribLocation(t,e)})},n.prototype.getUniformLocationNoThrow=function(t,e){return this.throwIfDisposed(),this.gl.getUniformLocation(t,e)},n.prototype.setInputMatrixTexture=function(t,e,r){this.throwIfDisposed(),this.throwIfNoProgram(),ol(this.gl,this.debug,this.program,t,e,r)},n.prototype.setOutputMatrixTexture=function(t,e,r){this.setOutputMatrixTextureDriver(t,r,e)},n.prototype.setOutputPackedMatrixTexture=function(t,e,r){this.throwIfDisposed();var a=Nr(e,r),o=a[0],i=a[1];this.setOutputMatrixTextureDriver(t,o,i)},n.prototype.setOutputMatrixWriteRegion=function(t,e,r,a){this.setOutputMatrixWriteRegionDriver(r,t,a,e)},n.prototype.setOutputPackedMatrixWriteRegion=function(t,e,r,a){throw new Error("setOutputPackedMatrixWriteRegion not implemented.")},n.prototype.debugValidate=function(){this.program!=null&&ra(this.gl,this.debug,this.program),or(this.gl)},n.prototype.executeProgram=function(){this.throwIfDisposed(),this.throwIfNoProgram();var t=this.gl;this.debug&&this.debugValidate(),X(t,this.debug,function(){return t.drawElements(t.TRIANGLES,6,t.UNSIGNED_SHORT,0)})},n.prototype.blockUntilAllProgramsCompleted=function(){var t=this;this.throwIfDisposed(),X(this.gl,this.debug,function(){return t.gl.finish()})},n.prototype.getQueryTimerExtension=function(){return this.disjointQueryTimerExtension==null&&(this.disjointQueryTimerExtension=ar(this.gl,this.debug,M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension},n.prototype.getQueryTimerExtensionWebGL2=function(){return this.getQueryTimerExtension()},n.prototype.getQueryTimerExtensionWebGL1=function(){return this.getQueryTimerExtension()},n.prototype.beginQuery=function(){if(M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){var t=this.gl,e=this.getQueryTimerExtensionWebGL2(),r=t.createQuery();return t.beginQuery(e.TIME_ELAPSED_EXT,r),r}var a=this.getQueryTimerExtensionWebGL1(),o=a.createQueryEXT();return a.beginQueryEXT(a.TIME_ELAPSED_EXT,o),o},n.prototype.endQuery=function(){if(M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")!==2){var t=this.getQueryTimerExtensionWebGL1();t.endQueryEXT(t.TIME_ELAPSED_EXT)}else{var e=this.gl,r=this.getQueryTimerExtensionWebGL2();e.endQuery(r.TIME_ELAPSED_EXT)}},n.prototype.waitForQueryAndGetTime=function(t){return Y(this,void 0,void 0,function(){var e=this;return Q(this,function(r){switch(r.label){case 0:return[4,Po(function(){return e.disposed||e.isQueryAvailable(t,M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))})];case 1:return r.sent(),[2,this.getQueryTime(t,M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))]}})})},n.prototype.getQueryTime=function(t,e){if(e===0)return null;if(e===2){var r=this.gl;return r.getQueryParameter(t,r.QUERY_RESULT)/1e6}var a=this.getQueryTimerExtensionWebGL1();return a.getQueryObjectEXT(t,a.QUERY_RESULT_EXT)/1e6},n.prototype.isQueryAvailable=function(t,e){if(e===0)return!0;if(e===2){var r=this.gl,a=this.getQueryTimerExtensionWebGL2(),o=r.getQueryParameter(t,r.QUERY_RESULT_AVAILABLE);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(a.GPU_DISJOINT_EXT)),o&&!this.disjoint}return o=(a=this.getQueryTimerExtensionWebGL1()).getQueryObjectEXT(t,a.QUERY_RESULT_AVAILABLE_EXT),this.disjoint==null&&(this.disjoint=this.gl.getParameter(a.GPU_DISJOINT_EXT)),o&&!this.disjoint},n.prototype.pollFence=function(t){var e=this;return new Promise(function(r){e.addItemToPoll(function(){return t.isFencePassed()},function(){return r()})})},n.prototype.pollItems=function(){for(var t=function(r){for(var a=0;a<r.length&&r[a]();++a);return a-1}(this.itemsToPoll.map(function(r){return r.isDoneFn})),e=0;e<=t;++e)(0,this.itemsToPoll[e].resolveFn)();this.itemsToPoll=this.itemsToPoll.slice(t+1)},n.prototype.addItemToPoll=function(t,e){var r=this;this.itemsToPoll.push({isDoneFn:t,resolveFn:e}),this.itemsToPoll.length>1||Po(function(){return r.pollItems(),r.itemsToPoll.length===0})},n.prototype.bindTextureToFrameBuffer=function(t){this.throwIfDisposed(),aa(this.gl,this.debug,t,this.framebuffer),this.debug&&or(this.gl)},n.prototype.unbindTextureToFrameBuffer=function(){this.outputTexture!=null?(aa(this.gl,this.debug,this.outputTexture,this.framebuffer),this.debug&&or(this.gl)):Ho(this.gl,this.debug,this.framebuffer)},n.prototype.downloadMatrixDriver=function(t,e){this.bindTextureToFrameBuffer(t);var r=e();return this.unbindTextureToFrameBuffer(),r},n.prototype.setOutputMatrixTextureDriver=function(t,e,r){this.throwIfDisposed();var a=this.gl;aa(a,this.debug,t,this.framebuffer),this.debug&&or(a),this.outputTexture=t,X(a,this.debug,function(){return a.viewport(0,0,e,r)}),X(a,this.debug,function(){return a.scissor(0,0,e,r)})},n.prototype.setOutputMatrixWriteRegionDriver=function(t,e,r,a){var o=this;this.throwIfDisposed(),X(this.gl,this.debug,function(){return o.gl.scissor(t,e,r,a)})},n.prototype.throwIfDisposed=function(){if(this.disposed)throw new Error("Attempted to use disposed GPGPUContext.")},n.prototype.throwIfNoProgram=function(){if(this.program==null)throw new Error("No GPU program is currently set.")},n}();function Bu(n,t){if(n.length!==t.length)throw Error("Binary was compiled with "+n.length+" inputs, but was executed with "+t.length+" inputs");n.forEach(function(e,r){var a=e.logicalShape,o=t[r],i=o.shape;if(!Te(a,i))throw Error("Binary was compiled with different shapes than the current args. Shapes "+a+" and "+i+" must match");if(!e.isUniform||!o.isUniform){var s=e.texShape,u=o.isUniform?null:o.texData.texShape;if(!Te(s,u))throw Error("Binary was compiled with different texture shapes than the current args. Shape "+s+" and "+u+" must match")}})}var cm=function(n,t,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=n;for(var r=e.filterWidth,a=e.inChannels,o=e.strideWidth,i=e.strideHeight,s=e.padInfo,u=e.outWidth,c=e.dilationWidth,l=e.dilationHeight,p=e.dataFormat,d=s.left,f=s.top,h=a*r,m=Pe(),v=p==="channelsLast",g=v?0:1,y=v?1:2,x="",b=0;b<=1;b++)for(var w=0;w<=1;w++)x+=`
          blockIndex = rc.y + `+w+`;
          pos = rc.x + `+b+`;

          if(blockIndex < `+n[1]+" && pos < "+n[0]+`) {
            offsetY = int(blockIndex / (`+u+")) * "+i+" - "+f+`;
            d0 = offsetY + `+l+" * (pos / "+h+`);

            if(d0 < `+t[g]+` && d0 >= 0) {

              offsetX = int(mod(float(blockIndex), `+u+".) * "+o+". - "+d+`.);
              d1 = offsetX + `+c+" * (int(mod(float(pos), "+h+".) / "+a+`.));

              if(d1 < `+t[y]+` && d1 >= 0) {

                ch = int(mod(float(pos), `+a+`.));

                if (`+v+`) {
                  innerDims = vec2(d1, ch);
                  result[`+(2*b+w)+`] = getChannel(
                    getA(d0, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                } else {
                  innerDims = vec2(d0, d1);
                  result[`+(2*b+w)+`] = getChannel(
                    getA(ch, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                }
              }
            }
          }
        `;this.userCode=`
      void main() {
        ivec2 rc = getOutputCoords();

        vec4 result = vec4(0);

        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
        vec2 innerDims;

        `+x+`

        `+m.output+` = result;
      }
    `},lm=function(n,t,e,r,a){this.variableNames=["x"],this.outputShape=[];var o,i=t,s=n[3]-1;this.outputShape=n;var u="float("+e+") + float("+r+") * sum";o=a===.5?"inversesqrt("+u+")":a===1?"1.0/("+u+")":"exp(log("+u+") * float(-"+a+"));",this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];
        int d = coords[3];
        float x = getX(b, r, c, d);
        float sum = 0.0;
        for (int j = -`+i+"; j <= "+i+`; j++) {
          int idx = d + j;
          if (idx >= 0 && idx <=  `+s+`) {
            float z = getX(b, r, c, idx);
            sum += z * z;
          }
        }
        float val = x * `+o+`;
        setOutput(val);
      }
    `},pm=function(n,t,e,r,a){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=n,this.depth=n[3],this.depthRadius=t,this.bias=e,this.alpha=r,this.beta=a,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];

        float result = 0.0;
        for (int d = 0; d < `+this.depth+`; ++d) {
          int depthBegin = int(max(0.0, float(d - `+t+`)));
          int depthEnd = int(min(float(`+this.depth+`),
              float(d + `+t+` + 1)));

          const int MIN_DEPTH_BEGIN = 0;
          const int MAX_DEPTH_END = `+this.depth+`;

          float norm = 0.0;
          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            }
            else {
              break;
            }
          }

          norm = float(`+r+") * norm + float("+e+`);

          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd){
              float dyi = -2.0 * float(`+r+`)
                * float(`+a+`)
                * getInputImage(b ,r ,c, k) * getOutputImage(b, r, c, d)
                / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * `+a+`);
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            }
            else {
              break;
            }
          }
      }
      setOutput(result);
      }
    `},dm=function(n,t,e,r,a){this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;var o,i=t,s=n[3]-1;this.outputShape=n;var u="float("+e+") + float("+r+") * sum";o=a===.5?"inversesqrt("+u+")":a===1?"1.0/("+u+")":"exp(log("+u+") * float(-"+a+"));",this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords.x;
        int r = coords.y;
        int c = coords.z;
        int d = coords.w;

        bool hasNextCol = d < `+this.outputShape[3]+`;
        bool hasNextRow = c < `+this.outputShape[2]+`;

        vec4 sum = vec4(0.);
        vec4 xFragAtOutputCoords = getX(b, r, c, d);

        vec4 xAtOutputCoords = vec4(
          getChannel(xFragAtOutputCoords, vec2(c, d)),
          hasNextCol ?
            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,
          hasNextRow ?
            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,
          (hasNextRow && hasNextCol) ?
            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0
        );

        int firstChannel = d - `+i+`;
        vec2 cache = vec2(0.);
        if(firstChannel >= 0){
          vec4 firstChannelFrag = getX(b, r, c, firstChannel);
          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));
            if(hasNextRow){
              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));
            }
        }

        ivec2 depth = ivec2(d, d + 1);
        for (int j = - `+i+"; j <= "+i+`; j++) {
          ivec2 idx = depth + j;
          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));
          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(`+s+`));

          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;
          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;

          if(depthInRange || depthPlusOneInRange){
            vec4 z = vec4(0.);
            vec4 xFragAtCurrentDepth;
            z.xz = cache.xy;
            if(depthPlusOneInRange && hasNextCol){
              xFragAtCurrentDepth = idx.y != d ?
                getX(b, r, c, idx.y) : xFragAtOutputCoords;
              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));
              if(hasNextRow){
                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));
              }
            }
            cache.xy = z.yw;
            sum += z * z;
          }
        }
        vec4 result = xAtOutputCoords * `+o+`;
        setOutput(result);
      }
    `},fm=function(n){this.variableNames=["dy","maxPos"],this.outputShape=n.inShape;var t=n.strideHeight,e=n.strideWidth,r=n.dilationHeight,a=n.effectiveFilterHeight,o=n.effectiveFilterWidth,i=a-1-n.padInfo.top,s=o-1-n.padInfo.left,u=a*o-1;this.userCode=`
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+a+`;
          wR += `+r+`) {
          float dyR = float(dyRCorner + wR) / `+t+`.0;

          if (dyR < 0.0 || dyR >= `+n.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < `+o+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+e+`.0;

            if (dyC < 0.0 || dyC >= `+n.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);
            int maxPosValue = `+u+` - int(getMaxPos(b, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            int curPosValue = wR * `+o+` + wC;
            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

            dotProd += dyValue * mask;
          }
        }
        setOutput(dotProd);
      }
    `},hm=function(n){this.variableNames=["dy","maxPos"],this.outputShape=n.inShape;var t=n.strideDepth,e=n.strideHeight,r=n.strideWidth,a=n.dilationDepth,o=n.dilationHeight,i=n.dilationWidth,s=n.effectiveFilterDepth,u=n.effectiveFilterHeight,c=n.effectiveFilterWidth,l=s-1-n.padInfo.front,p=u-1-n.padInfo.top,d=c-1-n.padInfo.left,f=s*u*c-1;this.userCode=`
      const ivec3 pads = ivec3(`+l+", "+p+", "+d+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < `+s+`;
           wD += `+a+`) {
          float dyD = float(dyDCorner + wD) / `+t+`.0;

          if (dyD < 0.0 || dyD >= `+n.outDepth+`.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < `+u+`;
              wR += `+o+`) {
            float dyR = float(dyRCorner + wR) / `+e+`.0;

            if (dyR < 0.0 || dyR >= `+n.outHeight+`.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < `+c+`;
                wC += `+i+`) {
              float dyC = float(dyCCorner + wC) / `+r+`.0;

              if (dyC < 0.0 || dyC >= `+n.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);
              int maxPosValue = `+f+` -
                  int(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              int curPosValue =
                  wD * `+u+" * "+c+` +
                  wR * `+c+` + wC;
              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

              dotProd += dyValue * mask;
            }
          }
        }
        setOutput(dotProd);
      }
    `},mo=function(n,t,e,r,a,o,i){e===void 0&&(e=!1),r===void 0&&(r=!1),a===void 0&&(a=!1),o===void 0&&(o=null),i===void 0&&(i=!1),this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t;var s=e?n[1]:n[2],u=Math.ceil(s/2),c=e?"i * 2, rc.y":"rc.y, i * 2",l=r?"rc.z, i * 2":"i * 2, rc.z",p=e?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],d=r?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"],f="",h="";o&&(f=i?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          `+o+`
        }`:`vec4 activation(vec4 x) {
          `+o+`
        }`,h="result = activation(result);");var m=a?"result += getBiasAtOutCoords();":"";a&&this.variableNames.push("bias"),i&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+f+`

      const float sharedDimension = `+u+`.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        for (int i = 0; i < `+u+`; i++) {
          vec4 a = getMatrixA(rc.x, `+c+`);
          vec4 b = getMatrixB(rc.x, `+l+`);

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (`+p[0]+" * "+d[0]+`);
          result += (`+p[1]+" * "+d[1]+`);
        }
        return result;
      }

      void main() {
        ivec3 rc = getOutputCoords();
        vec4 result = dot2x2ARowBCol(rc);

        `+m+`

        `+h+`

        setOutput(result);
      }
    `},mm=function(){function n(t,e,r){this.variableNames=["probs"],this.outputShape=[t,r],this.userCode=`
      uniform float seed;

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];

        float r = random(seed);
        float cdf = 0.0;

        for (int i = 0; i < `+(e-1)+`; i++) {
          cdf += getProbs(batch, i);

          if (r < cdf) {
            setOutput(float(i));
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutput(float(`+(e-1)+`));
      }
    `}return n.prototype.getCustomSetupFunc=function(t){var e=this;return function(r,a){e.seedLoc==null&&(e.seedLoc=r.getUniformLocation(a,"seed")),r.gl.uniform1f(e.seedLoc,t)}},n}(),vm=function(n,t,e,r){this.variableNames=["indices"],this.outputShape=[n,t],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(`+r+"), float("+e+`),
                      float(index == coords.y)));
      }
    `},gm=function(n){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=n;var t=n.length;if(t===0)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{var e=qe("rc",t),r=ge(t),a=function(s,u,c){if(s===1)return"rc > "+u[0];for(var l="",p=s-2;p<s;p++)l+=c[p]+" >= "+u[p],p<s-1&&(l+="||");return l}(t,n,e),o=function(s,u,c,l){if(s===1)return"";var p=l.slice(-2);return`
    int r = `+p[0]+`;
    int c = `+p[1]+`;
    int rp1 = r + 1;
    int cp1 = c + 1;

    bool cEdge = cp1 >= `+u+`;
    bool rEdge = rp1 >= `+c+`;
  `}(t,n[n.length-1],n[n.length-2],e),i=function(s,u){var c=s.length,l=function(p,d){for(var f=[],h=0;h<=1;h++)for(var m=0;m<=1;m++){for(var v=(h===0?"r":"rp1")+", "+(m===0?"c":"cp1"),g=2;g<p;g++)v=d[d.length-1-g]+","+v;f.push(v)}return f}(c,u);return c===1?`getA(rc),
            rc + 1 >= `+s[0]+` ? 0. : getA(rc + 1),
            0, 0`:"getA("+l[0]+`),
          cEdge ? 0. : getA(`+l[1]+`),
          rEdge ? 0. : getA(`+l[2]+`),
          rEdge || cEdge ? 0. : getA(`+l[3]+")"}(n,e);this.userCode=`
        void main() {
          `+r+` rc = getOutputCoords();

          if(`+a+`) {
            setOutput(vec4(0));
          } else {
            `+o+`

            setOutput(vec4(`+i+`));
          }
        }
      `}},ym=function(n,t,e){this.variableNames=["x"],this.outputShape=t.map(function(u,c){return u[0]+n[c]+u[1]});var r=n.length,a=ge(r),o=t.map(function(u){return u[0]}).join(","),i=t.map(function(u,c){return u[0]+n[c]}).join(","),s=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,r);this.userCode=r!==1?`
      `+a+" start = "+a+"("+o+`);
      `+a+" end = "+a+"("+i+`);

      void main() {
        `+a+` outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(float(`+e+`));
        } else {
          `+a+` coords = outC - start;
          setOutput(getX(`+s+`));
        }
      }
    `:`
        int start = `+o+`;
        int end = `+i+`;

        void main() {
          int outC = getOutputCoords();
          if (outC < start || outC >= end) {
            setOutput(float(`+e+`));
          } else {
            setOutput(getX(outC - start));
          }
        }
      `},xm=function(n,t,e){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t.map(function(v,g){return v[0]+n[g]+v[1]});for(var r=n.length,a=ge(r),o=t.map(function(v){return v[0]}).join(","),i=t.map(function(v,g){return v[0]+n[g]}).join(","),s=qe("rc",r),u=qe("source",r),c=s[r-1]+" < "+this.outputShape[r-1],l=r===1?"source":"vec2("+u.slice(-2).join()+")",p=[a+" rc = outputLoc;",s[r-1]+` += 1;
       if(`+c+`) {
      `,r===1?"":`}
       rc = outputLoc;
       `+s[r-2]+` += 1;
       if(`+s[r-2]+" < "+this.outputShape[r-2]+") {",r===1?"":"  "+s[r-1]+` += 1;
         if(`+c+") {"],d=r===1?"rc < start || rc >= end":"any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))",f="",h=0,m=r===1?2:4;h<m;h++)f+=`
        `+p[h]+`
        if (`+d+`) {
          result[`+h+"] = float("+e+`);
        } else {
          `+a+` source = rc - start;
          result[`+h+"] = getChannel(getX("+u.join()+"), "+l+`);
        }
      `;f+=r===1?"} ":"}}",this.userCode=`
      const `+a+" start = "+a+"("+o+`);
      const `+a+" end = "+a+"("+i+`);

      void main() {
        `+a+` outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        `+f+`
        setOutput(result);
      }
    `},lr=function(n,t,e,r,a){if(r===void 0&&(r=!1),a===void 0&&(a=!1),this.variableNames=["x"],t==="avg"&&e)throw new Error("Cannot compute positions for average pool.");var o=n.filterWidth,i=n.strideHeight,s=n.strideWidth,u=n.dilationHeight,c=n.dilationWidth,l=n.effectiveFilterHeight,p=n.effectiveFilterWidth,d=n.padInfo.top,f=n.padInfo.left;this.outputShape=n.outShape;var h=t==="avg",m="((batch  * "+n.inHeight+" + xR) * "+n.inWidth+" + xC) * "+n.inChannels+" + d",v="(xR * "+n.inWidth+" + xC) * "+n.inChannels+" + d",g="0.0";if(h||(g="-1.0 / 1e-20"),e)this.userCode=`
        const ivec2 strides = ivec2(`+i+", "+s+`);
        const ivec2 pads = ivec2(`+d+", "+f+`);

        void main() {
          ivec4 coords = getOutputCoords();
          int batch = coords[0];
          int d = coords[3];

          ivec2 xRCCorner = coords.yz * strides - pads;
          int xRCorner = xRCCorner.x;
          int xCCorner = xRCCorner.y;

          // max/min x(?, ?, d) to get y(yR, yC, d).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;
          float avgValue = 0.0;

          for (int wR = 0; wR < `+l+`;
              wR += `+u+`) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= `+n.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+p+`;
                wC += `+c+`) {
              int xC = xCCorner + wC;

              if (xC < 0 || xC >= `+n.inWidth+`) {
                continue;
              }

              float value = getX(batch, xR, xC, d);

              // If a min / max value has already been found, use it. If not,
              // use the current value.
              float currMinMaxValue = mix(
                  value, minMaxValue, minMaxValueFound);
              if (value >= currMinMaxValue) {
                minMaxValue = value;
                minMaxValueFound = 1.0;
                minMaxPosition = `+(r?a?m:v:"wR * "+p+" + wC")+`;
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;else{var y=t+"("+t+"("+t+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";t==="avg"&&(y="avgValue / count");var x=4*Math.floor(o/4),b=o%4,w=`
      if (`+h+`) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec2 strides = ivec2(`+i+", "+s+`);
      const ivec2 pads = ivec2(`+d+", "+f+`);
      const float initializationValue = `+g+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xR, int xC, int d) {
        if (xC < 0 || xC >= `+n.inWidth+`) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xR, xC, d);
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d = coords[3];

        ivec2 xRCCorner = coords.yz * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // max/min x(?, ?, d) to get y(yR, yC, d).
        // ? = to be determined
        vec4 minMaxValue = vec4(`+g+`);
        float avgValue = 0.0;
        count = 0.0;

        for (int wR = 0; wR < `+l+`;
            wR += `+u+`) {
          int xR = xRCorner + wR;

          if (xR < 0 || xR >= `+n.inHeight+`) {
            continue;
          }

          for (int wC = 0; wC < `+x+`; wC += 4) {
            int xC = xCCorner + wC * `+c+`;

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+c+`, d),
              getValue(batch, xR, xC + 2 * `+c+`, d),
              getValue(batch, xR, xC + 3 * `+c+`, d)
            );

            `+w+`
          }

          int xC = xCCorner + `+x+`;
          if (`+(b===1)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            `+w+`
          } else if (`+(b===2)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+c+`, d),
              initializationValue,
              initializationValue
            );

            `+w+`
          } else if (`+(b===3)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+c+`, d),
              getValue(batch, xR, xC + 2 * `+c+`, d),
              initializationValue
            );

            `+w+`
          }
        }
        setOutput(`+y+`);
      }
    `}},vo=function(n,t,e,r,a){if(r===void 0&&(r=!1),a===void 0&&(a=!1),this.variableNames=["x"],t==="avg"&&e)throw new Error("Cannot compute positions for average pool.");var o=n.filterWidth,i=n.strideDepth,s=n.strideHeight,u=n.strideWidth,c=n.dilationDepth,l=n.dilationHeight,p=n.dilationWidth,d=n.effectiveFilterDepth,f=n.effectiveFilterHeight,h=n.effectiveFilterWidth,m=n.padInfo.front,v=n.padInfo.top,g=n.padInfo.left;this.outputShape=n.outShape;var y=t==="avg",x="0.0";if(y||(x="-1.0 / 1e-20"),e)this.userCode=`
        const ivec3 strides =
            ivec3(`+i+", "+s+", "+u+`);
        const ivec3 pads = ivec3(`+m+", "+v+", "+g+`);

        void main() {
          ivec5 coords = getOutputCoords();
          int batch = coords.x;
          int ch = coords.u;

          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
          int xDCorner = xCorner.x;
          int xRCorner = xCorner.y;
          int xCCorner = xCorner.z;

          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;

          for (int wD = 0; wD < `+d+`;
              wD += `+c+`) {
            int xD = xDCorner + wD;

            if (xD < 0 || xD >= `+n.inDepth+`) {
              continue;
            }

            for (int wR = 0; wR < `+f+`;
                wR += `+l+`) {
              int xR = xRCorner + wR;

              if (xR < 0 || xR >= `+n.inHeight+`) {
                continue;
              }

              for (int wC = 0; wC < `+h+`;
                  wC += `+p+`) {
                int xC = xCCorner + wC;

                if (xC < 0 || xC >= `+n.inWidth+`) {
                  continue;
                }

                float value = getX(batch, xD, xR, xC, ch);

                // If a min / max value has already been found, use it. If not,
                // use the current value.
                float currMinMaxValue = mix(
                    value, minMaxValue, minMaxValueFound);
                if (value >= currMinMaxValue) {
                  minMaxValue = value;
                  minMaxValueFound = 1.0;
                  minMaxPosition = `+(r?a?"(((batch * "+n.inDepth+" + xD) * "+n.inHeight+" + xR) * "+n.inWidth+" + xC) * "+n.inChannels+" + ch":"((xD * "+n.inHeight+" + xR) * "+n.inWidth+" + xC) * "+n.inChannels+" + ch":"wD * "+f+" * "+h+` +
                      wR * `+h+" + wC")+`;
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;else{var b=t+"("+t+"("+t+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";t==="avg"&&(b="avgValue / count");var w=4*Math.floor(o/4),N=o%4,I=`
      if (`+y+`) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec3 strides =
        ivec3(`+i+", "+s+", "+u+`);
      const ivec3 pads = ivec3(`+m+", "+v+", "+g+`);
      const float initializationValue = `+x+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xD, int xR, int xC, int ch) {
        if (xC < 0 || xC >= `+n.inWidth+`) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xD, xR, xC, ch);
      }

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xDCorner = xCorner.x;
        int xRCorner = xCorner.y;
        int xCCorner = xCorner.z;

        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).
        // ? = to be determined
        vec4 minMaxValue = vec4(`+x+`);
        float avgValue = 0.0;
        count = 0.0;

        for (int wD = 0; wD < `+d+`;
            wD += `+c+`) {
          int xD = xDCorner + wD;

          if (xD < 0 || xD >= `+n.inDepth+`) {
            continue;
          }

          for (int wR = 0; wR < `+f+`;
            wR += `+l+`) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= `+n.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+w+`; wC += 4) {
              int xC = xCCorner + wC * `+p+`;

              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+p+`, ch),
                getValue(batch, xD, xR, xC + 2 * `+p+`, ch),
                getValue(batch, xD, xR, xC + 3 * `+p+`, ch)
              );

              `+I+`
            }

            int xC = xCCorner + `+w+`;
            if (`+(N===1)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              `+I+`
            } else if (`+(N===2)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+p+`, ch),
                initializationValue,
                initializationValue
              );

              `+I+`
            } else if (`+(N===3)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+p+`, ch),
                getValue(batch, xD, xR, xC + 2 * `+p+`, ch),
                initializationValue
              );

              `+I+`
            }
          }
          setOutput(`+b+`);
        }
      }
    `}},bm=function(n,t){this.variableNames=["x"];var e=n.windowSize,r=n.batchSize,a=n.inSize,o=Math.ceil(a/e);this.outputShape=[r,o];var i="0.0",s="";t==="prod"?i="1.0":t==="min"?(i="1.0 / 1e-20",s="min"):t==="max"&&(i="-1.0 / 1e-20",s="max");var u=t+"("+t+"("+t+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";t==="sum"?u="sumValue":t==="prod"?u="prodValue":t==="all"?u="allValue":t==="any"&&(u="anyValue");var c=4*Math.floor(e/4),l=e%4,p=`
      if (`+(t==="sum")+`) {
        sumValue += dot(values, ones);
      } else if (`+(t==="prod")+`) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = `+s+`(values, minMaxValue);
      }
    `,d="vec4";t==="all"?(i="1.0",p=`
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `,d="bvec4"):t==="any"&&(i="0.0",p=`
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `,d="bvec4");var f="";a%e>0&&(f=`
        if (inIdx < 0 || inIdx >= `+a+`) {
          return initializationValue;
        }
      `),this.userCode=`
      const float initializationValue = `+i+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        `+f+`
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * `+e+`;

        vec4 minMaxValue = vec4(`+i+`);
        float prodValue = 1.0;
        float sumValue = 0.0;
        float allValue = 1.0;
        float anyValue = 0.0;

        for (int i = 0; i < `+c+`; i += 4) {
          int inIdx = inOffset + i;
          `+d+" values = "+d+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          `+p+`
        }

        int inIdx = inOffset + `+c+`;
        if (`+(l===1)+`) {
          `+d+" values = "+d+`(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          `+p+`
        } else if (`+(l===2)+`) {
          `+d+" values = "+d+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          `+p+`
        } else if (`+(l===3)+`) {
          `+d+" values = "+d+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          `+p+`
        }
        setOutput(`+u+`);
      }
    `},wm=function(n,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=n;for(var e="",r=0;r<4;r++){var a="thisRC = rc;";r%2==1&&(a+="thisRC.z += 1;"),r>1&&(a+="thisRC.y += 1;"),e+=`
        `+a+`
        `+(r>0?"if(thisRC.y < rows && thisRC.z < cols){":"")+`
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[`+r+`] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        `+(r>0?"}":"")+`
      `}this.userCode=`
      
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      `+dn(["r","c","d"],t)+`
      return ivec3(r, c, d);
    }
  
      `+Es(n)+`

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = `+n[1]+`;
        int cols = `+n[2]+`;

        `+e+`

        setOutput(result);
      }
    `},Cm=function(n,t,e){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t.shape;var r=t.shape,a=r[1],o=r[2],i=n.shape,s=i[1],u=i[2],c=[e&&s>1?a-1:a,e&&u>1?o-1:o],l=[e&&s>1?s-1:s,e&&u>1?u-1:u],p=c[0]/l[0],d=c[1]/l[1],f=1/p,h=1/d,m=2*Math.ceil(f)+2,v=2*Math.ceil(h)+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(`+p+`);
        const float widthScale = float(`+d+`);

        const float invHeightScale = float(`+f+`);
        const float invWidthScale = float(`+h+`);

        const int winHeight = int(`+m+`);
        const int winWidth = int(`+v+`);

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(startRLerp - float(winHeight / 2));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(startCLerp - float(winWidth / 2));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= `+s+`) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= `+u+`) {
              continue;
            }

            float dxR = float(dyR) * heightScale;
            int topDxRIndex = int(floor(dxR));
            int bottomDxRIndex = int(min(ceil(dxR), `+(a-1)+`.0));
            float dxRLerp = dxR - float(topDxRIndex);
            float inverseDxRLerp = 1.0 - dxRLerp;

            float dxC = float(dyC) * widthScale;
            int leftDxCIndex = int(floor(dxC));
            int rightDxCIndex = int(min(ceil(dxC), `+(o-1)+`.0));
            float dxCLerp = dxC - float(leftDxCIndex);
            float inverseDxCLerp = 1.0 - dxCLerp;

            if (r == topDxRIndex && c == leftDxCIndex) {
              // topLeft
              accumulator +=
                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
            }

            if (r == topDxRIndex && c == rightDxCIndex) {
              // topRight
              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
            }

            if (r == bottomDxRIndex && c == leftDxCIndex) {
              // bottomLeft
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
            }

            if (r == bottomDxRIndex && c == rightDxCIndex) {
              // bottomRight
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `},Nm=function(n,t,e,r){this.variableNames=["A"],this.outputShape=[];var a=n[0],o=n[1],i=n[2],s=n[3];this.outputShape=[a,t,e,s];var u=[r&&t>1?o-1:o,r&&e>1?i-1:i],c=[r&&t>1?t-1:t,r&&e>1?e-1:e];this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`);
      const vec2 inputShapeRC = vec2(`+o+".0, "+i+`.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the four integer indices.
        ivec2 sourceFloorRC = ivec2(sourceFracIndexRC);
        ivec2 sourceCeilRC = ivec2(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);
        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);
        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);
        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);

        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);

        float top = topLeft + (topRight - topLeft) * fracRC.y;
        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
        float newValue = top + (bottom - top) * fracRC.x;

        setOutput(newValue);
      }
    `},Sm=function(n,t,e,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];var a=n[0],o=n[1],i=n[2],s=n[3];this.outputShape=[a,t,e,s];var u=[r&&t>1?o-1:o,r&&e>1?i-1:i],c=[r&&t>1?t-1:t,r&&e>1?e-1:e];this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`,
          `+u[1]/c[1]+`);
      const vec3 inputShapeRC = vec3(`+o+".0, "+i+`.0,
                                     `+i+`.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = vec3(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the four integer indices.
        ivec3 sourceFloorRC = ivec3(sourceFracIndexRC);
        ivec3 sourceCeilRC = ivec3(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < `+(s-1)+`;
        bool hasNextRow = coords.z < `+(e-1)+`;

        // In parallel, construct four corners for all four components in
        // packed 2x2 cell.
        vec4 topLeft = vec4(
          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 bottomLeft = vec4(
          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 topRight = vec4(
          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec4 bottomRight = vec4(
          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);

        vec4 top = mix(topLeft, topRight, fracRC.yyzz);
        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);
        vec4 newValue = mix(top, bottom, fracRC.x);

        setOutput(newValue);
      }
    `},Em=function(n,t,e){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t.shape;var r=t.shape,a=r[1],o=r[2],i=n.shape,s=i[1],u=i[2],c=[e&&s>1?a-1:a,e&&u>1?o-1:o],l=[e&&s>1?s-1:s,e&&u>1?u-1:u],p=c[0]/l[0],d=c[1]/l[1],f=1/p,h=1/d,m=2*Math.ceil(f)+2,v=2*Math.ceil(h)+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(`+p+`);
        const float widthScale = float(`+d+`);

        const float invHeightScale = float(`+f+`);
        const float invWidthScale = float(`+h+`);

        const int winHeight = int(`+m+`);
        const int winWidth = int(`+v+`);

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(floor(startRLerp - float(winHeight / 2)));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(floor(startCLerp - float(winWidth / 2)));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= `+s+`) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= `+u+`) {
              continue;
            }

            float sourceFracRow =
              float(`+c[0]+`) *
                (float(dyR) / float(`+l[0]+`));

            float sourceFracCol =
                float(`+c[1]+`) *
                  (float(dyC) / float(`+l[1]+`));

            int sourceNearestRow = int(min(
                float(int(`+a+`) - 1),
                `+e+` ? float(round(sourceFracRow)) :
                                  float(floor(sourceFracRow))));

            int sourceNearestCol = int(min(
                float(int(`+o+`) - 1),
                `+e+` ? float(round(sourceFracCol)) :
                                  float(floor(sourceFracCol))));

            if (r == sourceNearestRow && c == sourceNearestCol) {
              accumulator += getDy(b, dyR, dyC, d);
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `},Im=function(n,t,e,r){this.variableNames=["A"],this.outputShape=[];var a=n[0],o=n[1],i=n[2],s=n[3];this.outputShape=[a,t,e,s];var u=[r&&t>1?o-1:o,r&&e>1?i-1:i],c=[r&&t>1?t-1:t,r&&e>1?e-1:e],l=r?"0.5":"0.0";this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`);
      const vec2 inputShapeRC = vec2(`+o+".0, "+i+`.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + `+l+`)));

        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `},Rm=function(n,t){this.variableNames=["x"];var e=n.length;if(e>4)throw new Error("WebGL backend: Reverse of rank-"+e+" tensor is not yet supported");if(this.outputShape=n,e!==1){var r=n.map(function(o,i){return function(s){return t.indexOf(s)!==-1&&n[s]!==1?n[s]+" - coords["+s+"] - 1":"coords["+s+"]"}(i)}).join(","),a=ge(e);this.userCode=`
      void main() {
        `+a+` coords = getOutputCoords();
        setOutput(getX(`+r+`));
      }
    `}else this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(`+n[0]+` - coord - 1));
        }
      `},km=function(n,t){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0;var e=n.length;if(e>4)throw new Error("WebGL backend: Reverse of rank-"+e+" tensor is not yet supported");this.outputShape=n;var r=qe("rc",e),a=r[e-1]+" + 1 < "+this.outputShape[e-1],o=r[e-2]+" + 1 < "+this.outputShape[e-2],i=ge(e);function s(u){var c=n.map(function(l,p){return function(d,f){return t.indexOf(d)!==-1&&n[d]!==1?n[d]+" - "+f[d]+" - 1":""+f[d]}(p,u)});return"getChannel(getX("+c.join(",")+"), vec2("+c.slice(-2).join(",")+"))"}this.userCode=e===1?`
        void main(){
          int rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = getChannel(getX(`+n[0]+` - rc - 1),
            `+n[0]+` - rc - 1);
          if(`+a+`){
              result.g = getChannel(getX(`+n[0]+` - (rc  + 1) - 1),
                `+n[0]+` - (rc  + 1) - 1);
          }
          setOutput(result);
        }
      `:`
        void main() {
          `+i+` rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = `+function(u){return s(u)}(r.slice())+`;
          if(`+a+`){
            result.g = `+function(u){return u[e-1]="("+u[e-1]+" + 1)",s(u)}(r.slice())+`;
          }
          if(`+o+`) {
            result.b = `+function(u){return u[e-2]="("+u[e-2]+" + 1)",s(u)}(r.slice())+`;
            if(`+a+`) {
              result.a = `+function(u){return u[e-1]="("+u[e-1]+" + 1)",u[e-2]="("+u[e-2]+" + 1)",s(u)}(r.slice())+`;
            }
          }
          setOutput(result);
        }
    `},Lu=function(n,t,e,r,a,o,i){this.variableNames=["updates","indices","defaultValue"],this.outputShape=o;var s=ge(a.length),u=ge(o.length),c="";e===1?c="i":e===2&&(c="i, j");var l="getIndices("+c+")",p="";r===1?p="i":r===2&&(p="i, coords[1]");var d="getUpdates("+p+")",f=t>1?"strides[j]":"strides";this.userCode=`
        `+s+" strides = "+s+"("+a+`);

        void main() {
          `+u+` coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < `+n+`; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < `+t+`; j++) {
              int index = round(`+l+`);
              flattenedIndex += index * `+f+`;
            }
            if (flattenedIndex == coords[0]) {
              sum += `+d+`;
              found = true;
            }
          }
          setOutput(mix(getDefaultValue(), sum, float(found)));
        }
      `},Tm=function(n,t){this.variableNames=["x","segmentIds"];var e=n.windowSize,r=n.batchSize,a=n.inSize,o=n.numSegments,i=o*Math.ceil(a/e);this.outputShape=[r,i];var s=4*Math.floor(e/4),u=e%4,c=`
        sumValue += dot(values, segFilter);
    `,l="";a%e>0&&(l=`
        if (inIdx < 0 || inIdx >= `+a+`) {
          return initializationValue;
        }
      `);var p="";a%e>0&&(p=`
        if (inIdx < 0 || inIdx >= `+a+`) {
          return -1.0;
        }
      `),this.userCode=`
      const float initializationValue = 0.0;

      float getValue(int batch, int inIdx) {
        `+l+`
        return getX(batch, inIdx);
      }

      float getSegmentIdAtIndex(int inIdx) {
        `+p+`
        return getSegmentIds(inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = int(floor(float(outIdx) / float(
          `+o+")) * float("+e+`));
        int currentSeg = int(mod(float(outIdx), float(`+o+`)));

        float sumValue = 0.0;

        for (int i = 0; i < `+s+`; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0
          );

          `+c+`
        }

        int inIdx = inOffset + `+s+`;
        if (`+(u===1)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            0,
            0,
            0
          );

          `+c+`
        } else if (`+(u===2)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
              0,
              0
          );

          `+c+`
        } else if (`+(u===3)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            0
          );

          `+c+`
        }
        setOutput(sumValue);
      }
    `},Am=function(n,t,e){var r,a;if(this.variableNames=["c","a","b"],this.outputShape=t,e>4)throw Error("Where for rank "+e+" is not yet supported");if(e===1)a="resRC",r="resRC";else{for(var o=["resRC.x","resRC.y","resRC.z","resRC.w"],i=[],s=[],u=0;u<t.length;u++)s.push(""+o[u]),u<n&&i.push(""+o[u]);r=i.join(),a=s.join()}var c=ge(e);this.userCode=`
      void main() {
        `+c+` resRC = getOutputCoords();
        float cVal = getC(`+r+`);
        if (cVal >= 1.0) {
          setOutput(getA(`+a+`));
        } else {
          setOutput(getB(`+a+`));
        }
      }
    `},Dm=function(){function n(t){this.variableNames=["source"],this.outputShape=t,this.rank=t.length;var e,r=ge(this.rank),a="uniform int start["+this.rank+"];",o=function(i){if(i===1)return"sourceLoc";if(i<=6)return go.slice(0,i).map(function(s){return"sourceLoc."+s}).join(",");throw Error("Slicing for rank "+i+" is not yet supported")}(this.rank);e=`
        `+r+` sourceLoc;
        `+r+` coords = getOutputCoords();
        `+t.map(function(i,s){return"sourceLoc."+go[s]+" = start["+s+"] + coords."+go[s]+";"}).join(`
`)+`
      `,this.userCode=`
      `+a+`
      void main() {
        `+e+`
        setOutput(getSource(`+o+`));
      }
    `}return n.prototype.getCustomSetupFunc=function(t){var e=this;if(t.length!==this.rank)throw Error("The rank ("+this.rank+") of the program must match the length of start ("+t.length+")");return function(r,a){e.startLoc==null&&(e.startLoc=r.getUniformLocationNoThrow(a,"start"),e.startLoc==null)||r.gl.uniform1iv(e.startLoc,t)}},n}(),go=["x","y","z","w","u","v"],Om=function(){function n(t){this.variableNames=["source"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.rank=t.length;var e=ge(this.rank),r=qe("coords",this.rank),a=qe("sourceLoc",this.rank),o=this.rank===1?"sourceLoc":"vec2("+a.slice(-2).join()+")",i="getChannel(getSource("+a.join()+"), "+o+")",s=`
      result.x = `+i+`;
      if (++`+r[this.rank-1]+" < "+t[this.rank-1]+`) {
        ++`+a[this.rank-1]+`;
        result.y = `+i+`;
        --`+a[this.rank-1]+`;
      }
    `,u=this.rank===1?"":`
      --`+r[this.rank-1]+`;
      if (++`+r[this.rank-2]+" < "+t[this.rank-2]+`) {
        ++`+a[this.rank-2]+`;
        result.z = `+i+`;
        if (++`+r[this.rank-1]+" < "+t[this.rank-1]+`) {
          ++`+a[this.rank-1]+`;
          result.w = `+i+`;
        }
      }
    `,c=this.rank<=4?`sourceLoc = coords +
            `+e+"("+t.map(function(l,p){return"start["+p+"]"}).join()+");":t.map(function(l,p){return a[p]+" = "+r[p]+" + start["+p+"];"}).join(`
`);this.userCode=`
      uniform int start[`+this.rank+`];
      void main() {
        `+e+` coords = getOutputCoords();
        `+e+` sourceLoc;
        `+c+`
        vec4 result = vec4(0.);
        `+s+`
        `+u+`
        setOutput(result);
      }
    `}return n.prototype.getCustomSetupFunc=function(t){var e=this;if(t.length!==this.rank)throw Error("The rank ("+this.rank+") of the program must match the length of start ("+t.length+")");return function(r,a){e.startLoc==null&&(e.startLoc=r.getUniformLocationNoThrow(a,"start"),e.startLoc==null)||r.gl.uniform1iv(e.startLoc,t)}},n}(),_m=function(n,t,e){this.variableNames=["x"],this.outputShape=e;var r=e.length,a=ge(e.length),o=ge(e.length),i="";if(r===1)i="coords * strides + begin";else{var s=0;i=e.map(function(u,c){return s++,e.length===1?"coords * strides["+c+"] + begin["+c+"]":"coords["+(s-1)+"] * strides["+c+"] + begin["+c+"]"}).join(",")}this.userCode=`
      `+a+" begin = "+a+"("+n+`);
      `+a+" strides = "+a+"("+t+`);

      void main() {
        `+o+` coords = getOutputCoords();
        setOutput(getX(`+i+`));
      }
    `},Fm=function(){function n(t){this.gpgpu=t,this.numUsedTextures=0,this.numFreeTextures=0,this.freeTextures={},this.logEnabled=!1,this.usedTextures={}}return n.prototype.acquireTexture=function(t,e,r){var a,o=Vu(e,r),i=Wu(t,o,r);if(i in this.freeTextures||(this.freeTextures[i]=[]),i in this.usedTextures||(this.usedTextures[i]=[]),this.freeTextures[i].length>0){this.numFreeTextures--,this.numUsedTextures++,this.log();var s=this.freeTextures[i].shift();return this.usedTextures[i].push(s),s}return this.numUsedTextures++,this.log(),o===$e.PACKED_2X2_FLOAT32?a=this.gpgpu.createPackedMatrixTexture(t[0],t[1]):o===$e.PACKED_2X2_FLOAT16?a=this.gpgpu.createFloat16PackedMatrixTexture(t[0],t[1]):o===$e.UNPACKED_FLOAT32?a=this.gpgpu.createFloat32MatrixTexture(t[0],t[1]):o===$e.UNPACKED_FLOAT16?a=this.gpgpu.createFloat16MatrixTexture(t[0],t[1]):o===$e.PACKED_4X1_UNSIGNED_BYTE&&(a=this.gpgpu.createUnsignedBytesMatrixTexture(t[0],t[1])),this.usedTextures[i].push(a),a},n.prototype.releaseTexture=function(t,e,r,a){if(this.freeTextures!=null){var o=Wu(e,Vu(r,a),a);o in this.freeTextures||(this.freeTextures[o]=[]),this.freeTextures[o].push(t),this.numFreeTextures++,this.numUsedTextures--;var i=this.usedTextures[o],s=i.indexOf(t);if(s<0)throw new Error("Cannot release a texture that was never provided by this texture manager");i.splice(s,1),this.log()}},n.prototype.log=function(){if(this.logEnabled){var t=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",this.numFreeTextures+" / "+this.numUsedTextures,"("+t+")")}},n.prototype.getNumUsedTextures=function(){return this.numUsedTextures},n.prototype.getNumFreeTextures=function(){return this.numFreeTextures},n.prototype.dispose=function(){var t=this;if(this.freeTextures!=null){for(var e in this.freeTextures)this.freeTextures[e].forEach(function(r){t.gpgpu.deleteMatrixTexture(r)});for(var e in this.usedTextures)this.usedTextures[e].forEach(function(a){t.gpgpu.deleteMatrixTexture(a)});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0}},n}();function Vu(n,t){if(n===Qe.UPLOAD)return $e.PACKED_2X2_FLOAT32;if(n===Qe.RENDER||n==null)return function(e){return M().getBool("WEBGL_RENDER_FLOAT32_ENABLED")?e?$e.PACKED_2X2_FLOAT32:$e.UNPACKED_FLOAT32:e?$e.PACKED_2X2_FLOAT16:$e.UNPACKED_FLOAT16}(t);if(n===Qe.DOWNLOAD||n===Qe.PIXELS)return $e.PACKED_4X1_UNSIGNED_BYTE;throw new Error("Unknown logical texture type "+n)}function Wu(n,t,e){return n[0]+"_"+n[1]+"_"+t+"_"+e}var Mm=function(n,t){this.variableNames=["A"];for(var e=new Array(n.length),r=0;r<e.length;r++)e[r]=n[r]*t[r];this.outputShape=e,this.rank=e.length;var a=ge(this.rank),o=function(i){var s=i.length;if(s>5)throw Error("Tile for rank "+s+" is not yet supported");if(s===1)return"imod(resRC, "+i[0]+")";for(var u=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],c=[],l=0;l<i.length;l++)c.push("imod("+u[l]+", "+i[l]+")");return c.join()}(n);this.userCode=`
      void main() {
        `+a+` resRC = getOutputCoords();
        setOutput(getA(`+o+`));
      }
    `},Is=1.7580993408473768,Rs=1.0507009873554805,re=function(n,t){this.variableNames=["A"],this.outputShape=n,this.userCode=`
      float unaryOperation(float x) {
        `+t+`
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `},ht="if (isnan(x)) return x;",Pm="return x;",zu="return abs(x);",Np=ht+`
  return (x < 0.0) ? 0.0 : x;
`,Sp=ht+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,Ep="return (x >= 0.0) ? x : (exp(x) - 1.0);",Bm=`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = `+Is+`;
  float scale = `+Rs+`;
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`,Uu="return -x;",Gu="return ceil(x);",Hu="return floor(x);",qu="return exp(x);",ju="return exp(x) - 1.0;",Lm=ht+`
  return sin(x);
`,Vm=ht+`
  return cos(x);
`,Wm=ht+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`,zm=ht+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`,Um=ht+`
  return atan(x);
`,Gm=ht+"return log(x + sqrt(x * x + 1.0));",Hm=ht+`
  if (x < 1.0) return NAN;
  return log(x + sqrt(x * x - 1.0));`,qm=ht+`
  if ((x < -1.0) || (x > 1.0)) return NAN;
  return (log(1.0 + x) - log(1.0 - x)) / 2.0;`,zr="return x;",jm="return x;",Ip=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,Rp=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,kp=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,nr=function(n,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=n,this.userCode=`
      vec4 unaryOperation(vec4 x) {
        `+t+`
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `},Km=function(n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=n;var t=n.length,e=qe("rc",t),r=ge(t),a=function(s,u){if(s===1)return"rc";for(var c="",l=0;l<s;l++)c+=u[l],l<s-1&&(c+=",");return c}(t,e),o=e.slice(-2),i=t<=1?"rc":"vec2("+o.join(",")+")";this.userCode=`
      void main() {
        `+r+` rc = getOutputCoords();
        vec4 packedInput = getA(`+a+`);

        setOutput(getChannel(packedInput, `+i+`));
      }
    `},Ur={};function Gr(n,t){if(t===void 0&&(t=!1),n==="linear")return t?jm:Pm;if(n==="relu")return t?Ip:Np;if(n==="elu")return t?kp:Ep;if(n==="relu6")return t?Rp:Sp;if(n==="prelu")return t?op:ap;throw new Error("Activation "+n+" has not been implemented for the WebGL backend.")}var Xm=600,Tp=function(n){function t(e){var r,a=n.call(this)||this;if(a.pendingRead=new WeakMap,a.pendingDisposal=new WeakSet,a.dataRefCount=new WeakMap,a.numBytesInGPU=0,a.uploadWaitMs=0,a.downloadWaitMs=0,a.warnedAboutMemory=!1,a.pendingDeletes=0,a.disposed=!1,!M().getBool("HAS_WEBGL"))throw new Error("WebGL is not supported on this device");if(e==null){var o=It(M().getNumber("WEBGL_VERSION"));a.binaryCache=((r=M().getNumber("WEBGL_VERSION"))in Ur||(Ur[r]={}),Ur[r]),a.gpgpu=new Cp(o),a.canvas=o.canvas,a.gpgpuCreatedLocally=!0}else a.gpgpu=e,a.binaryCache={},a.gpgpuCreatedLocally=!1,a.canvas=e.gl.canvas;return a.textureManager=new Fm(a.gpgpu),a.numMBBeforeWarning=M().global.screen==null?1024:M().global.screen.height*M().global.screen.width*window.devicePixelRatio*Xm/1024/1024,a.texData=new gs(a,A),a}return pt(t,n),t.prototype.numDataIds=function(){return this.texData.numDataIds()+(this.cpuBackend?this.cpuBackend.numDataIds():0)-this.pendingDeletes},t.prototype.write=function(e,r,a){if(M().getBool("DEBUG")&&this.checkNumericalProblems(e),a==="complex64"&&e!=null)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");var o={};return this.texData.set(o,{shape:r,dtype:a,values:e,usage:Qe.UPLOAD}),o},t.prototype.move=function(e,r,a,o){if(M().getBool("DEBUG")&&this.checkNumericalProblems(r),o==="complex64")throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.texData.set(e,{shape:a,dtype:o,values:r,usage:Qe.UPLOAD})},t.prototype.readSync=function(e){var r=this.texData.get(e),a=r.values,o=r.dtype,i=r.complexTensors,s=r.slice,u=r.shape,c=r.isPacked;if(s!=null){var l=void 0;l=c?new nr(u,zr):new re(u,zr);var p=this.runWebGLProgram(l,[{dataId:e,shape:u,dtype:o}],o),d=this.readSync(p.dataId);return this.disposeData(p.dataId),d}if(a!=null)return this.convertAndCacheOnCPU(e);if(o==="string")return a;var f,h,m=this.activeTimers!=null;return m&&(f=it()),o==="complex64"?h=$o(i.real.dataSync(),i.imag.dataSync()):h=this.getValuesFromTexture(e),m&&(this.downloadWaitMs+=it()-f),this.convertAndCacheOnCPU(e,h)},t.prototype.read=function(e){return Y(this,void 0,void 0,function(){var r,a,o,i,s,u,c,l,p,d,f,h,m,v,g,y,x,b,w,N,I,R;return Q(this,function(k){switch(k.label){case 0:if(this.pendingRead.has(e))return r=this.pendingRead.get(e),[2,new Promise(function(T){return r.push(T)})];if(a=this.texData.get(e),o=a.values,i=a.shape,s=a.slice,u=a.dtype,c=a.complexTensors,l=a.isPacked,s!=null)return p=void 0,p=l?new nr(i,zr):new re(i,zr),d=this.runWebGLProgram(p,[{dataId:e,shape:i,dtype:u}],u),f=this.read(d.dataId),this.disposeData(d.dataId),[2,f];if(o!=null)return[2,this.convertAndCacheOnCPU(e)];if(!M().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")&&M().getNumber("WEBGL_VERSION")===2)throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");return h=null,u!=="complex64"&&M().get("WEBGL_BUFFER_SUPPORTED")&&(m=this.decode(e),v=this.texData.get(m.dataId),h=(R=this.gpgpu).createBufferFromTexture.apply(R,[v.texture].concat(ur(i)))),this.pendingRead.set(e,[]),u==="complex64"?[3,2]:[4,this.gpgpu.createAndWaitForFence()];case 1:k.sent(),k.label=2;case 2:return u!=="complex64"?[3,4]:[4,Promise.all([c.real.data(),c.imag.data()])];case 3:return y=k.sent(),x=y[0],b=y[1],g=$o(x,b),[3,5];case 4:h==null?g=this.getValuesFromTexture(e):(w=$(i),g=this.gpgpu.downloadFloat32MatrixFromBuffer(h,w)),k.label=5;case 5:return m!=null&&this.disposeData(m.dataId),N=this.convertAndCacheOnCPU(e,g),I=this.pendingRead.get(e),this.pendingRead.delete(e),I.forEach(function(T){return T(N)}),this.pendingDisposal.has(e)&&(this.pendingDisposal.delete(e),this.disposeData(e),this.pendingDeletes--),[2,N]}})})},t.prototype.checkNumericalProblems=function(e){if(e!=null)for(var r=0;r<e.length;r++){var a=e[r];if(!qc(a))throw M().getBool("WEBGL_RENDER_FLOAT32_CAPABLE")?Error("The value "+a+" cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'"):Error("The value "+a+" cannot be represented on this device.")}},t.prototype.getValuesFromTexture=function(e){var r,a=this.texData.get(e),o=a.shape,i=a.dtype,s=a.isPacked,u=$(o);if(M().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")){var c=this.decode(e),l=this.texData.get(c.dataId),p=(r=this.gpgpu).downloadMatrixFromPackedTexture.apply(r,[l.texture].concat(ur(o))).subarray(0,u);return this.disposeData(c.dataId),p}var d=M().getBool("WEBGL_PACK")&&s===!0,f=d?oa(o):o,h=d?new em(f):new Zh(f),m=this.runWebGLProgram(h,[{shape:f,dtype:i,dataId:e}],"float32"),v=this.texData.get(m.dataId),g=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(v.texture,v.texShape[0],v.texShape[1]).subarray(0,u);return this.disposeData(m.dataId),g},t.prototype.time=function(e){return Y(this,void 0,void 0,function(){var r,a,o,i,s,u,c;return Q(this,function(l){switch(l.label){case 0:return r=this.activeTimers,a=[],o=!1,this.programTimersStack==null?(this.programTimersStack=a,o=!0):this.activeTimers.push(a),this.activeTimers=a,e(),i=Mt(this.activeTimers.map(function(p){return p.query})).filter(function(p){return p!=null}),s=Mt(this.activeTimers.map(function(p){return p.name})).filter(function(p){return p!=null}),this.activeTimers=r,o&&(this.programTimersStack=null),u={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null},M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?[4,Promise.all(i)]:[3,2];case 1:return c=l.sent(),u.kernelMs=Ac(c),u.getExtraProfileInfo=function(){return c.map(function(p,d){return{name:s[d],ms:p}}).map(function(p){return p.name+": "+p.ms}).join(", ")},[3,3];case 2:u.kernelMs={error:"WebGL query timers are not supported in this environment."},l.label=3;case 3:return this.uploadWaitMs=0,this.downloadWaitMs=0,[2,u]}})})},t.prototype.memory=function(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU}},t.prototype.startTimer=function(){return M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.beginQuery():{startMs:it(),endMs:null}},t.prototype.endTimer=function(e){return M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?(this.gpgpu.endQuery(),e):(e.endMs=it(),e)},t.prototype.getQueryTime=function(e){return Y(this,void 0,void 0,function(){var r;return Q(this,function(a){return M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?[2,this.gpgpu.waitForQueryAndGetTime(e)]:[2,(r=e).endMs-r.startMs]})})},t.prototype.disposeData=function(e){if(!this.pendingDisposal.has(e)){if(this.pendingRead.has(e))return this.pendingDisposal.add(e),void this.pendingDeletes++;if(this.texData.has(e)){this.releaseGPUData(e);var r=this.texData.get(e).complexTensors;r!=null&&(r.real.dispose(),r.imag.dispose()),this.texData.delete(e)}}},t.prototype.releaseGPUData=function(e){var r=this.texData.get(e),a=r.texture,o=r.dtype,i=r.texShape,s=r.usage,u=r.isPacked,c=r.slice,l=c&&c.origDataId||e,p=this.dataRefCount.get(l);p>1?this.dataRefCount.set(l,p-1):(this.dataRefCount.delete(l),a!=null&&(this.numBytesInGPU-=this.computeBytes(i,o),this.textureManager.releaseTexture(a,i,s,u)));var d=this.texData.get(e);d.texture=null,d.texShape=null,d.isPacked=!1,d.slice=null},t.prototype.getTexture=function(e){return this.uploadToGPU(e),this.texData.get(e).texture},t.prototype.getDataInfo=function(e){return this.texData.get(e)},t.prototype.getCPUBackend=function(){return M().getBool("WEBGL_CPU_FORWARD")?(this.cpuBackend==null&&(this.cpuBackend=A.findBackend("cpu")),this.cpuBackend):null},t.prototype.shouldExecuteOnCPU=function(e,r){var a=this;return r===void 0&&(r=128),this.getCPUBackend()!=null&&e.every(function(o){return a.texData.get(o.dataId).texture==null&&$(o.shape)<r})},t.prototype.getGPGPUContext=function(){return this.gpgpu},t.prototype.complex=function(e,r){var a=this.makeOutput(e.shape,"complex64");return this.texData.get(a.dataId).complexTensors={real:A.keep(e.clone()),imag:A.keep(r.clone())},a},t.prototype.real=function(e){return this.texData.get(e.dataId).complexTensors.real.clone()},t.prototype.imag=function(e){return this.texData.get(e.dataId).complexTensors.imag.clone()},t.prototype.slice=function(e,r,a){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.slice(e,r,a);if($(a)===0)return Re([],a,e.dtype);var o=this.texData.get(e.dataId).isPacked,i=hs(e.shape,r,a);if(o||!i){var s=M().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Om(a):new Dm(a),u=s.getCustomSetupFunc(r);return this.compileAndRun(s,[e],null,u)}return this.uploadToGPU(e.dataId),this.shallowSlice(e,r,a)},t.prototype.shallowSlice=function(e,r,a){var o=this.texData.get(e.dataId),i=this.makeOutput(a,e.dtype),s=this.texData.get(i.dataId);Object.assign(s,o),s.shape=a,s.dtype=e.dtype;var u=ms(r,e.strides);o.slice&&(u+=o.slice.flatOffset),s.slice={flatOffset:u,origDataId:o.slice&&o.slice.origDataId||e.dataId};var c=this.dataRefCount.get(s.slice.origDataId)||1;return this.dataRefCount.set(s.slice.origDataId,c+1),i},t.prototype.stridedSlice=function(e,r,a,o){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.stridedSlice(e,r,a,o);var i=Aa(r,a,o);if(i.some(function(u){return u===0}))return Re([],i);var s=new _m(r,o,i);return this.compileAndRun(s,[e])},t.prototype.reverse=function(e,r){var a=M().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new km(e.shape,r):new Rm(e.shape,r);return this.compileAndRun(a,[e])},t.prototype.concat=function(e,r){if(e[0].dtype==="complex64"){var a=e.map(function(f){return He(f)}),o=e.map(function(f){return rt(f)});return De(this.concat(a,r),this.concat(o,r))}if(this.shouldExecuteOnCPU(e))return this.cpuBackend.concat(e,r);if(e.length===1)return e[0];if(e.length>M().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER")){var i=Math.floor(e.length/2),s=this.concat(e.slice(0,i),r),u=this.concat(e.slice(i),r);return this.concat([s,u],r)}if(M().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&e[0].rank>1){var c=new Vh(e.map(function(f){return f.shape}),r);return this.compileAndRun(c,e)}var l=gn(e.map(function(f){return f.shape}),r),p=e.map(function(f){return f.as2D(-1,$(f.shape.slice(r)))}),d=new Lh(p.map(function(f){return f.shape}));return this.compileAndRun(d,p).reshape(l)},t.prototype.neg=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.neg(e);if(M().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,Uu,e.dtype);var r=new re(e.shape,Uu);return this.compileAndRun(r,[e])},t.prototype.batchMatMul=function(e,r,a,o){var i=a?e.shape[2]:e.shape[1],s=o?r.shape[1]:r.shape[2],u=a?e.shape[1]:e.shape[2],c=e.shape[0];if((i===1||s===1)&&u>1e3){a&&(e=Ye(e,[0,2,1])),o&&(r=Ye(r,[0,2,1]));var l=s===1?e:e.as3D(c,u,1),p=s===1?2:1,d=s===1?r.as3D(c,1,u):r;return this.multiply(l,d).sum(p,!0)}var f=Oe(e.dtype,r.dtype),h=new mo(e.shape,[c,i,s],a,o);return this.compileAndRun(h,[e,r],f)},t.prototype.fusedBatchMatMul=function(e){var r=e.a,a=e.b,o=e.transposeA,i=e.transposeB,s=e.bias,u=e.activation,c=e.preluActivationWeights,l=o?r.shape[2]:r.shape[1],p=i?a.shape[1]:a.shape[2],d=r.shape[0],f=Oe(r.dtype,a.dtype),h=s!=null,m=c!=null,v=u?Gr(u,!0):null,g=new mo(r.shape,[d,l,p],o,i,h,v,m),y=[r,a];return s&&y.push(s),c&&y.push(c),this.compileAndRun(g,y,f)},t.prototype.multiply=function(e,r){if(e.dtype==="complex64"){var a=this.texData.get(e.dataId),o=this.texData.get(r.dataId),i=new Au(Dh,e.shape,r.shape),s=new Au(Oh,e.shape,r.shape),u=[this.makeComplexComponentTensorInfo(e,a.complexTensors.real),this.makeComplexComponentTensorInfo(e,a.complexTensors.imag),this.makeComplexComponentTensorInfo(r,o.complexTensors.real),this.makeComplexComponentTensorInfo(r,o.complexTensors.imag)],c=this.compileAndRun(i,u),l=this.compileAndRun(s,u),p=this.complex(c,l);return c.dispose(),l.dispose(),p}if(this.shouldExecuteOnCPU([e,r]))return this.cpuBackend.multiply(e,r);if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,Du,e.dtype);var d=new Ee(Du,e.shape,r.shape);return this.compileAndRun(d,[e,r],e.dtype)},t.prototype.batchNormalization=function(e,r,a,o,i,s){var u=[e,r,a],c=null;s!=null&&(c=s.shape,u.push(s));var l=null;if(i!=null&&(l=i.shape,u.push(i)),M().getBool("WEBGL_PACK_NORMALIZATION")){var p=new Ah(e.shape,r.shape,a.shape,c,l,o);return this.compileAndRun(p,u)}var d=new Th(e.shape,r.shape,a.shape,c,l,o);return this.compileAndRun(d,u)},t.prototype.localResponseNormalization4D=function(e,r,a,o,i){var s=M().getBool("WEBGL_PACK_NORMALIZATION")?new dm(e.shape,r,a,o,i):new lm(e.shape,r,a,o,i);return this.compileAndRun(s,[e])},t.prototype.LRNGrad=function(e,r,a,o,i,s,u){var c=new pm(r.shape,o,i,s,u);return this.compileAndRun(c,[r,a,e])},t.prototype.tile=function(e,r){if(e.dtype==="string"){var a=this.readSync(e.dataId).map(function(i){return fr(i)});return Zl(ne(e.shape,e.dtype,a),r)}var o=new Mm(e.shape,r);return this.compileAndRun(o,[e])},t.prototype.pad=function(e,r,a){var o=M().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new xm(e.shape,r,a):new ym(e.shape,r,a);return this.compileAndRun(o,[e])},t.prototype.gather=function(e,r,a){if(this.shouldExecuteOnCPU([e,r]))return this.cpuBackend.gather(e,r,a);var o=new im(e.shape,r.size,a);return this.compileAndRun(o,[e,r])},t.prototype.batchToSpaceND=function(e,r,a){E(e.rank<=4,function(){return"batchToSpaceND for rank > 4 with a WebGL backend not implemented yet"});var o=r.reduce(function(p,d){return p*d}),i=fa(e.shape,r,o),s=ha(i.length,r.length),u=ma(e.shape,r,o),c=Tl(a,r.length),l=Al(u,a,r.length);return Ye(e.reshape(i),s).reshape(u).slice(c,l)},t.prototype.spaceToBatchND=function(e,r,a){E(e.rank<=4,function(){return"spaceToBatchND for rank > 4 with a WebGL backend not implemented yet"});var o=r.reduce(function(d,f){return d*f}),i=[[0,0]];i.push.apply(i,a);for(var s=1+r.length;s<e.shape.length;++s)i.push([0,0]);var u=e.pad(i),c=fa(u.shape,r,o,!1),l=ha(c.length,r.length,!1),p=ma(u.shape,r,o,!1);return Ye(u.reshape(c),l).reshape(p)},t.prototype.reduce=function(e,r,a){var o=e.shape[0],i=e.shape[1],s=ia(i),u=new bm({windowSize:s,inSize:i,batchSize:o},r),c=this.compileAndRun(u,[e],a);return c.shape[1]===1?c:this.reduce(c,r,a)},t.prototype.argReduce=function(e,r,a){a===void 0&&(a=null);var o=e.shape[0],i=e.shape[1];a!=null&&(o=a.shape[0],i=a.shape[1]);var s=ia(i),u=new bh({windowSize:s,inSize:i,batchSize:o},r,a==null),c=[e];a!=null&&c.push(a);var l=this.compileAndRun(u,c,"int32");return l.shape[1]===1?l:this.argReduce(e,r,l)},t.prototype.argReducePacked=function(e,r,a){a===void 0&&(a=null);var o=a!=null?a.shape:e.shape,i=ia(o[o.length-1]),s=new Ih(o,i,r,a==null),u=a==null?[e]:[e,a],c=this.compileAndRun(s,u,"int32");return c.rank===e.rank?this.argReducePacked(e,r,c):c},t.prototype.sum=function(e,r){Ue("sum",r,e.rank);var a=_e(e.shape,r),o=a[0],i=$(a[1]),s=e.as2D(-1,i),u=ea(e.dtype);return this.reduce(s,"sum",u).reshape(o)},t.prototype.prod=function(e,r){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.prod(e,r);var a=_e(e.shape,r),o=a[0],i=$(a[1]),s=e.as2D(-1,i),u=ea(e.dtype);return this.reduce(s,"prod",u).reshape(o)},t.prototype.unsortedSegmentSum=function(e,r,a){var o=0,i=dt([o],e.rank),s=e;i!=null&&(s=Ye(e,i),o=ft(1,e.rank)[0]);var u=function(f,h,m){for(var v=[],g=f.length,y=0;y<g;y++)y!==h?v.push(f[y]):v.push(m);return v}(s.shape,o,a),c=$([s.shape[o]]),l=s.as2D(-1,c),p=ea(e.dtype),d=this.segOpCompute(l,"unsortedSegmentSum",r,p,a).reshape(u);return i!=null&&(d=Ye(d,Na(i))),d},t.prototype.segOpCompute=function(e,r,a,o,i){var s=e.shape[0],u=e.shape[1],c=function(d,f){var h,m=!1;for(d<=fs?(h=d,m=!0):h=la(d,Math.floor(Math.sqrt(d)));!m;)h>f||h===d?m=!0:h=la(d,h+1);return h}(u,i),l=new Tm({windowSize:c,inSize:u,batchSize:s,numSegments:i}),p=this.compileAndRun(l,[e,a],o);return p.shape[1]===i?p:(a=Zt(0,i).tile([u/c]),this.segOpCompute(p,r,a,o,i))},t.prototype.argMinMaxReduce=function(e,r,a){var o=[r];if(Ue("arg"+a.charAt(0).toUpperCase()+a.slice(1),o,e.rank),!M().getBool("WEBGL_PACK_REDUCE")||e.rank<=2){var i=_e(e.shape,o),s=i[0],u=$(i[1]),c=e.as2D(-1,u);return this.argReduce(c,a).reshape(s)}return this.argReducePacked(e,a)},t.prototype.argMin=function(e,r){return this.argMinMaxReduce(e,r,"min")},t.prototype.argMax=function(e,r){return this.argMinMaxReduce(e,r,"max")},t.prototype.cumsum=function(e,r,a,o){if(r!==e.rank-1)throw new Error("WebGL cumsum shader expects an inner-most axis="+(e.rank-1)+" but got axis="+r);var i=new Xh(e.shape,a,o);return this.compileAndRun(i,[e])},t.prototype.equal=function(e,r){if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,`
  return vec4(equal(a, b));
`,"bool");var a=new Ee("return float(a == b);",e.shape,r.shape);return this.compileAndRun(a,[e,r],"bool")},t.prototype.notEqual=function(e,r){if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,`
  return vec4(notEqual(a, b));
`,"bool");var a=new Ee("return float(a != b);",e.shape,r.shape);return this.compileAndRun(a,[e,r],"bool")},t.prototype.less=function(e,r){if(this.shouldExecuteOnCPU([e,r]))return this.cpuBackend.less(e,r);if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,`
  return vec4(lessThan(a, b));
`,"bool");var a=new Ee("return float(a < b);",e.shape,r.shape);return this.compileAndRun(a,[e,r],"bool")},t.prototype.lessEqual=function(e,r){if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,`
  return vec4(lessThanEqual(a, b));
`,"bool");var a=new Ee("return float(a <= b);",e.shape,r.shape);return this.compileAndRun(a,[e,r],"bool")},t.prototype.greater=function(e,r){if(this.shouldExecuteOnCPU([e,r]))return this.cpuBackend.greater(e,r);if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,`
  return vec4(greaterThan(a, b));
`,"bool");var a=new Ee("return float(a > b);",e.shape,r.shape);return this.compileAndRun(a,[e,r],"bool")},t.prototype.greaterEqual=function(e,r){if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,`
  return vec4(greaterThanEqual(a, b));
`,"bool");var a=new Ee("return float(a >= b);",e.shape,r.shape);return this.compileAndRun(a,[e,r],"bool")},t.prototype.logicalNot=function(e){var r=new re(e.shape,"return float(!(x >= 1.0));");return this.compileAndRun(r,[e])},t.prototype.logicalAnd=function(e,r){if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,"bool");var a=new Ee("return float(a >= 1.0 && b >= 1.0);",e.shape,r.shape);return this.compileAndRun(a,[e,r],"bool")},t.prototype.logicalOr=function(e,r){if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,"bool");var a=new Ee("return float(a >= 1.0 || b >= 1.0);",e.shape,r.shape);return this.compileAndRun(a,[e,r],"bool")},t.prototype.select=function(e,r,a){var o=new Am(e.rank,r.shape,r.rank);return this.compileAndRun(o,[e,r,a],Oe(r.dtype,a.dtype))},t.prototype.where=function(e){da("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");var r=e.dataSync();return Ss(e.shape,r)},t.prototype.topk=function(e,r,a){return ep(e.dataSync(),e.shape,e.dtype,r)},t.prototype.min=function(e,r){Ue("min",r,e.rank);var a=_e(e.shape,r),o=a[0],i=$(a[1]),s=e.as2D(-1,i);return this.reduce(s,"min",s.dtype).reshape(o)},t.prototype.minimum=function(e,r){if(this.shouldExecuteOnCPU([e,r]))return this.cpuBackend.minimum(e,r);var a=M().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new yt(`
  vec4 result = vec4(min(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,r.shape):new Ee(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return min(a, b);
`,e.shape,r.shape);return this.compileAndRun(a,[e,r])},t.prototype.mod=function(e,r){var a=M().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new yt(`
  vec4 result = mod(a, b);
  vec4 isNaN = vec4(equal(b, vec4(0.0)));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,r.shape):new Ee(`if (b == 0.0) return NAN;
  return mod(a, b);`,e.shape,r.shape);return this.compileAndRun(a,[e,r])},t.prototype.max=function(e,r){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.max(e,r);Ue("max",r,e.rank);var a=_e(e.shape,r),o=a[0],i=$(a[1]),s=e.as2D(-1,i);return this.reduce(s,"max",s.dtype).reshape(o)},t.prototype.maximum=function(e,r){if(this.shouldExecuteOnCPU([e,r]))return this.cpuBackend.maximum(e,r);var a=M().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new yt(`
  vec4 result = vec4(max(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,r.shape):new Ee(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return max(a, b);
`,e.shape,r.shape);return this.compileAndRun(a,[e,r])},t.prototype.all=function(e,r){Ue("all",r,e.rank);var a=_e(e.shape,r),o=a[0],i=$(a[1]),s=e.as2D(-1,i);return this.reduce(s,"all",s.dtype).reshape(o)},t.prototype.any=function(e,r){Ue("any",r,e.rank);var a=_e(e.shape,r),o=a[0],i=$(a[1]),s=e.as2D(-1,i);return this.reduce(s,"any",s.dtype).reshape(o)},t.prototype.floorDiv=function(e,r){if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,`
  ivec4 ia = round(a);
  ivec4 ib = round(b);
  bvec4 cond = notEqual(ib, ivec4(0));
  ivec4 result = ivec4(0);
  vec4 s = sign(a) * sign(b);

  // Windows (D3D) wants guaranteed non-zero int division at compile-time.
  if (cond[0]) {
    result[0] = idiv(ia[0], ib[0], s[0]);
  }
  if (cond[1]) {
    result[1] = idiv(ia[1], ib[1], s[1]);
  }
  if (cond[2]) {
    result[2] = idiv(ia[2], ib[2], s[2]);
  }
  if (cond[3]) {
    result[3] = idiv(ia[3], ib[3], s[3]);
  }
  return vec4(result);
`,"int32");var a=new Ee(`
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`,e.shape,r.shape);return this.compileAndRun(a,[e,r],"int32")},t.prototype.add=function(e,r){if(e.dtype==="complex64"&&r.dtype==="complex64")return this.complexSeparableBinaryOp(e,r,fo);if(this.shouldExecuteOnCPU([e,r]))return this.cpuBackend.add(e,r);var a=Oe(e.dtype,r.dtype);if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,fo,a);var o=new Ee(fo,e.shape,r.shape);return this.compileAndRun(o,[e,r],a)},t.prototype.packedUnaryOp=function(e,r,a){var o=new nr(e.shape,r);return this.compileAndRun(o,[e],a)},t.prototype.packedBinaryOp=function(e,r,a,o,i){i===void 0&&(i=!1);var s=new yt(a,e.shape,r.shape,i);return this.compileAndRun(s,[e,r],o)},t.prototype.complexSeparableBinaryOp=function(e,r,a){var o=this,i=this.texData.get(e.dataId),s=this.texData.get(r.dataId),u=[[i.complexTensors.real,s.complexTensors.real],[i.complexTensors.imag,s.complexTensors.imag]].map(function(d){var f=d[0],h=d[1],m=o.makeComplexComponentTensorInfo(e,f),v=o.makeComplexComponentTensorInfo(r,h),g=new Ee(a,e.shape,r.shape);return o.compileAndRun(g,[m,v],Oe(f.dtype,h.dtype))}),c=u[0],l=u[1],p=this.complex(c,l);return c.dispose(),l.dispose(),p},t.prototype.makeComplexComponentTensorInfo=function(e,r){return{dataId:r.dataId,dtype:r.dtype,shape:e.shape}},t.prototype.addN=function(e){if(e.length===1)return e[0];if(e.length>M().get("WEBGL_MAX_TEXTURES_IN_SHADER")){var r=Math.floor(e.length/2),a=this.addN(e.slice(0,r)),o=this.addN(e.slice(r));return this.addN([a,o])}var i=e.map(function(c){return c.dtype}).reduce(function(c,l){return Oe(c,l)}),s=e.map(function(c){return c.shape}),u=M().getBool("WEBGL_PACK")?new xh(e[0].shape,s):new yh(e[0].shape,s);return this.compileAndRun(u,e,i)},t.prototype.subtract=function(e,r){if(e.dtype==="complex64"&&r.dtype==="complex64")return this.complexSeparableBinaryOp(e,r,ho);if(this.shouldExecuteOnCPU([e,r]))return this.cpuBackend.subtract(e,r);var a=Oe(e.dtype,r.dtype);if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,ho,e.dtype);var o=new Ee(ho,e.shape,r.shape);return this.compileAndRun(o,[e,r],a)},t.prototype.pow=function(e,r){var a=M().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new yt(`
  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.
  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));
  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);
  vec4 result = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  bvec4 isExpZero = equal(b, vec4(0.0));
  result.r = isExpZero.r ? 1.0 : result.r;
  result.g = isExpZero.g ? 1.0 : result.g;
  result.b = isExpZero.b ? 1.0 : result.b;
  result.a = isExpZero.a ? 1.0 : result.a;

  vec4 isNaN = vec4(lessThan(a, vec4(0.0))) * vec4(lessThan(floor(b), b));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,r.shape):new Ee(`
if(a < 0.0 && floor(b) < b){
  return NAN;
}
if (b == 0.0) {
  return 1.0;
}
return (round(mod(b, 2.0)) != 1) ?
    pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,e.shape,r.shape),o=Oe(e.dtype,r.dtype);return this.compileAndRun(a,[e,r],o)},t.prototype.ceil=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.ceil(e);if(M().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,Gu,e.dtype);var r=new re(e.shape,Gu);return this.compileAndRun(r,[e])},t.prototype.floor=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.floor(e);if(M().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,Hu,e.dtype);var r=new re(e.shape,Hu);return this.compileAndRun(r,[e])},t.prototype.sign=function(e){var r=new re(e.shape,`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`);return this.compileAndRun(r,[e])},t.prototype.isNaN=function(e){var r=new re(e.shape,"return float(isnan(x));");return this.compileAndRun(r,[e],"bool")},t.prototype.isInf=function(e){var r=new re(e.shape,"return float(isinf(x));");return this.compileAndRun(r,[e],"bool")},t.prototype.isFinite=function(e){var r=new re(e.shape,"return float(!isnan(x) && !isinf(x));");return this.compileAndRun(r,[e],"bool")},t.prototype.round=function(e){var r=new re(e.shape,`
  // OpenGL ES does not support round function.
  // The algorithm is based on banker's rounding.
  float base = floor(x);
  if ((x - base) < 0.5) {
    return floor(x);
  } else if ((x - base) > 0.5) {
    return ceil(x);
  } else {
    if (mod(base, 2.0) == 0.0) {
      return base;
    } else {
      return base + 1.0;
    }
  }
`);return this.compileAndRun(r,[e])},t.prototype.exp=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.exp(e);if(M().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,qu,e.dtype);var r=new re(e.shape,qu);return this.compileAndRun(r,[e])},t.prototype.expm1=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.expm1(e);if(M().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,ju,e.dtype);var r=new re(e.shape,ju);return this.compileAndRun(r,[e])},t.prototype.softmax=function(e,r){var a=Ae([r],e.shape),o=this.max(e,a),i=ze(o.shape,a),s=this.subtract(e,o.reshape(i)),u=this.exp(s),c=this.sum(u,a).reshape(i);return ct(u,c)},t.prototype.log=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.log(e);if(M().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,`
  vec4 result = log(x);
  vec4 isNaN = vec4(lessThan(x, vec4(0.0)));
  result.r = isNaN.r == 1.0 ? NAN : result.r;
  result.g = isNaN.g == 1.0 ? NAN : result.g;
  result.b = isNaN.b == 1.0 ? NAN : result.b;
  result.a = isNaN.a == 1.0 ? NAN : result.a;

  return result;
`,e.dtype);var r=new re(e.shape,`if (x < 0.0) return NAN;
  return log(x);`);return this.compileAndRun(r,[e])},t.prototype.log1p=function(e){var r=new re(e.shape,"return log(1.0 + x);");return this.compileAndRun(r,[e])},t.prototype.sqrt=function(e){var r=new re(e.shape,"return sqrt(x);");return this.compileAndRun(r,[e])},t.prototype.rsqrt=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.rsqrt(e);var r=new re(e.shape,"return inversesqrt(x);");return this.compileAndRun(r,[e])},t.prototype.reciprocal=function(e){var r=new re(e.shape,"return 1.0 / x;");return this.compileAndRun(r,[e])},t.prototype.relu=function(e){var r;return r=M().getBool("WEBGL_PACK")?new nr(e.shape,Ip):new re(e.shape,Np),this.compileAndRun(r,[e])},t.prototype.relu6=function(e){var r;return r=M().getBool("WEBGL_PACK")?new nr(e.shape,Rp):new re(e.shape,Sp),this.compileAndRun(r,[e])},t.prototype.prelu=function(e,r){var a=M().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new yt(op,e.shape,r.shape):new Ee(ap,e.shape,r.shape);return this.compileAndRun(a,[e,r])},t.prototype.elu=function(e){if(M().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,kp,e.dtype);var r=new re(e.shape,Ep);return this.compileAndRun(r,[e])},t.prototype.eluDer=function(e,r){var a=M().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new yt(`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,e.shape,r.shape):new Ee("return (b >= 1.0) ? a : a * (b + 1.0);",e.shape,r.shape);return this.compileAndRun(a,[e,r])},t.prototype.selu=function(e){var r=new re(e.shape,Bm);return this.compileAndRun(r,[e])},t.prototype.int=function(e){var r=new re(e.shape,"return float(int(x));");return this.compileAndRun(r,[e],"int32")},t.prototype.clip=function(e,r,a){var o,i=(o=M().getBool("WEBGL_PACK_CLIP")?new Ph(e.shape):new Mh(e.shape)).getCustomSetupFunc(r,a);return this.compileAndRun(o,[e],null,i)},t.prototype.abs=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.abs(e);if(M().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,zu,e.dtype);var r=new re(e.shape,zu);return this.compileAndRun(r,[e])},t.prototype.complexAbs=function(e){var r=this.texData.get(e.dataId),a=new Bh(e.shape),o=[this.makeComplexComponentTensorInfo(e,r.complexTensors.real),this.makeComplexComponentTensorInfo(e,r.complexTensors.imag)];return this.compileAndRun(a,o)},t.prototype.sigmoid=function(e){var r=new re(e.shape,"return 1.0 / (1.0 + exp(-1.0 * x));");return this.compileAndRun(r,[e])},t.prototype.softplus=function(e){var r=new re(e.shape,`
  float epsilon = 1.1920928955078125e-7;
  float threshold = log(epsilon) + 2.0;

  bool too_large = x > -threshold;
  bool too_small = x < threshold;

  float result;
  float exp_x = exp(x);

  if (too_large){
    result = x;
  }
  else if (too_small){
    result = exp_x;
  }
  else{
    result = log(exp_x + 1.0);
  }
  return result;
`);return this.compileAndRun(r,[e])},t.prototype.sin=function(e){var r=new re(e.shape,Lm);return this.compileAndRun(r,[e])},t.prototype.cos=function(e){var r=new re(e.shape,Vm);return this.compileAndRun(r,[e])},t.prototype.tan=function(e){var r=new re(e.shape,"return tan(x);");return this.compileAndRun(r,[e])},t.prototype.asin=function(e){var r=new re(e.shape,Wm);return this.compileAndRun(r,[e])},t.prototype.acos=function(e){var r=new re(e.shape,zm);return this.compileAndRun(r,[e])},t.prototype.atan=function(e){var r=new re(e.shape,Um);return this.compileAndRun(r,[e])},t.prototype.atan2=function(e,r){var a=M().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new yt(`
  vec4 result = atan(a, b);
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,r.shape):new Ee(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return atan(a, b);
`,e.shape,r.shape);return this.compileAndRun(a,[e,r])},t.prototype.sinh=function(e){var r=new re(e.shape,`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`);return this.compileAndRun(r,[e])},t.prototype.cosh=function(e){var r=new re(e.shape,`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`);return this.compileAndRun(r,[e])},t.prototype.tanh=function(e){var r=new re(e.shape,`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`);return this.compileAndRun(r,[e])},t.prototype.asinh=function(e){var r=new re(e.shape,Gm);return this.compileAndRun(r,[e])},t.prototype.acosh=function(e){var r=new re(e.shape,Hm);return this.compileAndRun(r,[e])},t.prototype.atanh=function(e){var r=new re(e.shape,qm);return this.compileAndRun(r,[e])},t.prototype.erf=function(e){var r=new re(e.shape,`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = 0.3275911;
  float a1 = 0.254829592;
  float a2 = -0.284496736;
  float a3 = 1.421413741;
  float a4 = -1.453152027;
  float a5 = 1.061405429;

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`);return this.compileAndRun(r,[e])},t.prototype.step=function(e,r){var a=new re(e.shape,function(o){return o===void 0&&(o=0),ht+`
    return x > 0.0 ? 1.0 : float(`+o+`);
  `}(r));return this.compileAndRun(a,[e])},t.prototype.conv2dByMatMul=function(e,r,a,o,i,s){var u=e.shape,c=this.texData.get(e.dataId),l=a.inChannels,p=u[0]*u[1]*u[2],d=a.outChannels,f=a.dataFormat==="channelsLast",h=(p===1||d===1)&&l>1e3,m=u[2]%2!=0&&!!c.isPacked;if(h||!M().getBool("WEBGL_LAZILY_UNPACK")||!M().getBool("WEBGL_PACK_BINARY_OPERATIONS")||!m){var v=f?u[0]*u[1]*u[2]:u[0]*u[2]*u[3],g=this.reshape(e,[1,v,a.inChannels]),y=this.reshape(r,[1,a.inChannels,a.outChannels]);return this.reshape(this.fusedBatchMatMul({a:g,b:y,transposeA:!1,transposeB:!1,bias:o,activation:i,preluActivationWeights:s}),a.outShape)}var x=f?u[0]*u[1]*(u[2]+1):u[0]*u[2]*(u[3]+1),b={dataId:e.dataId,shape:[1,x,a.inChannels],dtype:e.dtype},w=c.shape;c.shape=c.shape.slice(),c.shape[c.shape.length-2]++,E(ir(c.shape,b.shape),function(){return"packed reshape "+c.shape+" to "+b.shape+" isn't free"});var N=this.reshape(r,[1,a.inChannels,a.outChannels]),I=this.fusedBatchMatMul({a:b,b:N,transposeA:!1,transposeB:!1,bias:o,activation:i,preluActivationWeights:s}),R=this.texData.get(I.dataId);return E(R.isPacked,function(){return"batchMatMul result is expected to be packed"}),c.shape=w,R.shape=a.outShape,A.makeTensorFromDataId(I.dataId,a.outShape,I.dtype)},t.prototype.conv2dWithIm2Row=function(e,r,a,o,i,s){var u=a.filterWidth,c=a.filterHeight,l=a.inChannels,p=a.outWidth,d=a.outHeight,f=a.dataFormat==="channelsLast",h=u*c*l,m=d*p,v=[h,m],g=e.squeeze([0]),y=r.reshape([1,h,-1]),x=new cm(v,g.shape,a),b=this.compileAndRun(x,[g]).reshape([1,v[0],v[1]]),w=o!=null,N=s!=null,I=i?Gr(i,!0):null,R=new mo(b.shape,[1,m,a.outChannels],!0,!1,w,I,N),k=[b,y];o&&k.push(o),N&&k.push(s);var T=this.compileAndRun(R,k);return f?T.reshape([1,d,p,a.outChannels]):T.reshape([1,a.outChannels,d,p])},t.prototype.fusedConv2d=function(e){var r=e.input,a=e.filter,o=e.convInfo,i=e.bias,s=e.activation,u=e.preluActivationWeights;if(o.filterHeight===1&&o.filterWidth===1&&o.dilationHeight===1&&o.dilationWidth===1&&o.strideHeight===1&&o.strideWidth===1&&(o.padInfo.type==="SAME"||o.padInfo.type==="VALID"))return this.conv2dByMatMul(r,a,o,i,s,u);if(M().getBool("WEBGL_CONV_IM2COL")&&r.shape[0]===1)return this.conv2dWithIm2Row(r,a,o,i,s,u);var c=i!=null,l=u!=null,p=s?Gr(s,!1):null,d=new Ou(o,c,p,l),f=[r,a];return i&&f.push(i),u&&f.push(u),this.compileAndRun(d,f)},t.prototype.conv2d=function(e,r,a){if(a.filterHeight===1&&a.filterWidth===1&&a.dilationHeight===1&&a.dilationWidth===1&&a.strideHeight===1&&a.strideWidth===1&&(a.padInfo.type==="SAME"||a.padInfo.type==="VALID"))return this.conv2dByMatMul(e,r,a);if(M().getBool("WEBGL_CONV_IM2COL")&&e.shape[0]===1)return this.conv2dWithIm2Row(e,r,a);var o=new Ou(a);return this.compileAndRun(o,[e,r])},t.prototype.conv2dDerInput=function(e,r,a){var o=new zh(a);return this.compileAndRun(o,[e,r])},t.prototype.conv2dDerFilter=function(e,r,a){var o=new Wh(a);return this.compileAndRun(o,[e,r])},t.prototype.fusedDepthwiseConv2D=function(e){var r,a=e.input,o=e.filter,i=e.convInfo,s=e.bias,u=e.activation,c=e.preluActivationWeights,l=M().getBool("WEBGL_PACK_DEPTHWISECONV")&&i.strideWidth<=2&&i.outChannels/i.inChannels==1,p=u?Gr(u,l):null,d=[a,o],f=s!=null,h=c!=null;return f&&d.push(s),h&&d.push(c),l?(r=new Fu(i,f,p,h),this.compileAndRun(r,d)):(r=new _u(i,f,p,h),this.compileAndRun(r,d))},t.prototype.depthwiseConv2D=function(e,r,a){var o;return M().getBool("WEBGL_PACK_DEPTHWISECONV")&&a.strideWidth<=2&&a.outChannels/a.inChannels==1?(o=new Fu(a),this.compileAndRun(o,[e,r])):(o=new _u(a),this.compileAndRun(o,[e,r]))},t.prototype.depthwiseConv2DDerInput=function(e,r,a){var o=new qh(a);return this.compileAndRun(o,[e,r])},t.prototype.depthwiseConv2DDerFilter=function(e,r,a){var o=new Hh(a);return this.compileAndRun(o,[e,r])},t.prototype.conv3d=function(e,r,a){var o=new jh(a);return this.compileAndRun(o,[e,r])},t.prototype.conv3dDerInput=function(e,r,a){var o=new Gh(a);return this.compileAndRun(o,[e,r])},t.prototype.conv3dDerFilter=function(e,r,a){var o=new Uh(a);return this.compileAndRun(o,[e,r])},t.prototype.maxPool=function(e,r){var a=new lr(r,"max",!1);return this.compileAndRun(a,[e])},t.prototype.avgPool=function(e,r){var a=new lr(r,"avg",!1);return this.compileAndRun(a,[e],"float32")},t.prototype.maxPoolBackprop=function(e,r,a,o){var i=new lr(o,"max",!0),s=this.compileAndRun(i,[r]),u=new fm(o),c=this.compileAndRun(u,[e,s],r.dtype);return s.dispose(),c},t.prototype.avgPoolBackprop=function(e,r,a){var o=new Rh(a);return this.compileAndRun(o,[e],r.dtype)},t.prototype.cast=function(e,r){return bs(e,r,this)},t.prototype.unstack=function(e,r){for(var a=e.shape[r],o=new Array(e.rank-1),i=0,s=0;s<e.rank;s++)s!==r&&(o[i++]=e.shape[s]);var u=new Array(e.rank).fill(0),c=e.shape.slice();c[r]=1;var l=new Array(a);for(s=0;s<l.length;s++)u[r]=s,l[s]=this.slice(e,u,c).reshape(o);return l},t.prototype.avgPool3d=function(e,r){var a=new vo(r,"avg",!1);return this.compileAndRun(a,[e],"float32")},t.prototype.avgPool3dBackprop=function(e,r,a){var o=new kh(a);return this.compileAndRun(o,[e],r.dtype)},t.prototype.maxPool3d=function(e,r){var a=new vo(r,"max",!1);return this.compileAndRun(a,[e],"float32")},t.prototype.maxPool3dBackprop=function(e,r,a,o){var i=new vo(o,"max",!0),s=this.compileAndRun(i,[r]),u=new hm(o),c=this.compileAndRun(u,[e,s],r.dtype);return s.dispose(),c},t.prototype.reshape=function(e,r){var a=this.texData.get(e.dataId);if(a.isPacked&&!ir(e.shape,r)&&(a.texture===null||!ir(a.shape,r))){var o=this.packedReshape(e,r);return A.makeTensorFromDataId(o.dataId,o.shape,o.dtype)}return ga(e,r)},t.prototype.resizeBilinear=function(e,r,a,o){var i=M().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new Sm(e.shape,r,a,o):new Nm(e.shape,r,a,o);return this.compileAndRun(i,[e],"float32")},t.prototype.resizeBilinearBackprop=function(e,r,a){var o=new Cm(e,r,a);return this.compileAndRun(o,[e])},t.prototype.resizeNearestNeighbor=function(e,r,a,o){var i=new Im(e.shape,r,a,o);return this.compileAndRun(i,[e])},t.prototype.resizeNearestNeighborBackprop=function(e,r,a){var o=new Em(e,r,a);return this.compileAndRun(o,[e])},t.prototype.multinomial=function(e,r,a,o){var i=r?e:Or(e),s=i.shape[0],u=i.shape[1],c=new mm(s,u,a),l=c.getCustomSetupFunc(o);return this.compileAndRun(c,[i],"int32",l)},t.prototype.oneHot=function(e,r,a,o){var i=new vm(e.size,r,a,o);return this.compileAndRun(i,[e])},t.prototype.diag=function(e){var r=new Jh(e.size);return this.compileAndRun(r,[e])},t.prototype.nonMaxSuppression=function(e,r,a,o,i){return da("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead"),Cs(e.dataSync(),r.dataSync(),a,o,i)},t.prototype.cropAndResize=function(e,r,a,o,i,s){var u=new Kh(e.shape,r.shape,o,i,s);return this.compileAndRun(u,[e,r,a],"float32")},t.prototype.depthToSpace=function(e,r,a){E(r>1,function(){return"blockSize should be > 1 for depthToSpace, but was: "+r});var o=e.shape[0],i=a==="NHWC"?e.shape[1]:e.shape[2],s=a==="NHWC"?e.shape[2]:e.shape[3],u=a==="NHWC"?e.shape[3]:e.shape[1],c=i*r,l=s*r,p=u/(r*r),d=new Qh(a==="NHWC"?[o,c,l,p]:[o,p,c,l],r,a);return this.compileAndRun(d,[e])},t.prototype.split=function(e,r,a){return Jl(e,r,a)},t.prototype.scatterND=function(e,r,a){var o=xr(0,e,a),i=o.sliceRank,s=o.numUpdates,u=o.sliceSize,c=o.strides,l=o.outputSize,p=[l/u,u],d=e.reshape([s,i]),f=r.reshape([s,u]);if(l===0)return ga(Re([]),a);var h=j(0),m=new Lu(s,i,d.rank,f.rank,c,p);return this.compileAndRun(m,[f,d,h]).reshape(a)},t.prototype.sparseToDense=function(e,r,a,o){var i=xr(0,e,a),s=i.sliceRank,u=i.numUpdates,c=i.strides,l=i.outputSize,p=new Lu(u,s,e.rank,r.rank,c,[l,1]);return this.compileAndRun(p,[r,e,o]).reshape(a)},t.prototype.fft=function(e){return this.fftImpl(e,!1)},t.prototype.ifft=function(e){return this.fftImpl(e,!0)},t.prototype.fftImpl=function(e,r){var a=this.texData.get(e.dataId),o=new Pu(rm,e.shape,r),i=new Pu(am,e.shape,r),s=[this.makeComplexComponentTensorInfo(e,a.complexTensors.real),this.makeComplexComponentTensorInfo(e,a.complexTensors.imag)],u=this.compileAndRun(o,s),c=this.compileAndRun(i,s),l=this.complex(u,c).as2D(e.shape[0],e.shape[1]);return u.dispose(),c.dispose(),l},t.prototype.gatherND=function(e,r){var a=r.shape,o=a[a.length-1],i=ds(e,r),s=i[0],u=i[1],c=i[2],l=i[3],p=r.reshape([u,o]),d=e.reshape([e.size/c,c]),f=new sm(o,l,[u,c]);return this.compileAndRun(f,[d,p]).reshape(s)},t.prototype.fill=function(e,r,a){if((a=a||jn(r))==="string"){var o=dr(a,$(e));return o.fill(r),A.makeTensor(o,e,a,this)}var i=new om(e,r),s=i.getCustomSetupFunc(r);return this.compileAndRun(i,[],a,s)},t.prototype.onesLike=function(e){if(e.dtype==="string")throw new Error("onesLike is not supported under string dtype");return this.fill(e.shape,1,e.dtype)},t.prototype.zerosLike=function(e){return this.fill(e.shape,e.dtype==="string"?"":0,e.dtype)},t.prototype.linspace=function(e,r,a){return ws(e,r,a)},t.prototype.makeTensorInfo=function(e,r){var a=this.write(null,e,r);return this.texData.get(a).usage=null,{dataId:a,shape:e,dtype:r}},t.prototype.makeOutput=function(e,r){var a=this.makeTensorInfo(e,r).dataId;return A.makeTensorFromDataId(a,e,r,this)},t.prototype.unpackTensor=function(e){var r=new Km(e.shape);return this.runWebGLProgram(r,[e],e.dtype)},t.prototype.packTensor=function(e){var r=new gm(e.shape);return this.runWebGLProgram(r,[e],e.dtype,null,!0)},t.prototype.packedReshape=function(e,r){var a=[vr(e.shape)].concat(gr(e.shape)),o={dtype:e.dtype,shape:a,dataId:e.dataId},i=[vr(r)].concat(gr(r)),s=new wm(i,a),u=this.runWebGLProgram(s,[o],e.dtype,null,!0);return{dataId:u.dataId,shape:r,dtype:u.dtype}},t.prototype.decode=function(e){var r,a=this.texData.get(e),o=a.isPacked,i=a.shape,s=a.dtype,u=oa(i);return r=o?new Yh(u):new $h(u),{dtype:s,shape:i,dataId:this.runWebGLProgram(r,[{shape:u,dtype:s,dataId:e}],s,null,!0).dataId}},t.prototype.runWebGLProgram=function(e,r,a,o,i){var s=this;i===void 0&&(i=!1);var u=this.makeTensorInfo(e.outputShape,a),c=this.texData.get(u.dataId);if(e.packedOutput&&(c.isPacked=!0),e.outPackingScheme===mr.DENSE){var l=ur(e.outputShape);c.texShape=l.map(function(x){return 2*x})}if(e.outTexUsage!=null&&(c.usage=e.outTexUsage),$(u.shape)===0)return c.values=vn(u.dtype,0),u;var p=[],d=r.map(function(x){if(x.dtype==="complex64")throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");var b=s.texData.get(x.dataId);if(b.texture==null){if(!e.packedInputs&&$(x.shape)<=M().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))return{shape:x.shape,texData:null,isUniform:!0,uniformValues:b.values};e.packedInputs&&(b.isPacked=!0,b.shape=x.shape)}else if(!!b.isPacked!=!!e.packedInputs)x=b.isPacked?s.unpackTensor(x):s.packTensor(x),p.push(x),b=s.texData.get(x.dataId);else if(b.isPacked&&!ir(b.shape,x.shape)){var w=x,N=x.shape;x.shape=b.shape,x=s.packedReshape(x,N),p.push(x),b=s.texData.get(x.dataId),w.shape=N}return s.uploadToGPU(x.dataId),{shape:x.shape,texData:b,isUniform:!1}});this.uploadToGPU(u.dataId);var f,h={shape:u.shape,texData:c,isUniform:!1},m=function(x,b,w){var N="";b.concat(w).forEach(function(k){var T=k.texData!=null&&k.texData.slice!=null&&k.texData.slice.flatOffset>0,O=k.isUniform?"uniform":k.texData.texShape;N+=k.shape+"_"+O+"_"+T});var I=x.userCode,R=x.constructor.name;return R+="_"+N+"_"+I}(e,d,h),v=this.getAndSaveBinary(m,function(){return function(x,b,w,N){var I=b.userCode,R=w.map(function(W,H){var q={logicalShape:W.shape,texShape:W.isUniform?null:W.texData.texShape,isUniform:W.isUniform,isPacked:!W.isUniform&&W.texData.isPacked,flatOffset:null};return W.texData!=null&&W.texData.slice!=null&&W.texData.slice.flatOffset>0&&(q.flatOffset=W.texData.slice.flatOffset),{name:b.variableNames[H],shapeInfo:q}}),k=R.map(function(W){return W.shapeInfo}),T={logicalShape:N.shape,texShape:N.texData.texShape,isUniform:!1,isPacked:N.texData.isPacked,flatOffset:null},O=wh(R,T,I,b.packedInputs),_=x.createProgram(O),V=null,L=x.getUniformLocation(_,"NAN",!1);M().getNumber("WEBGL_VERSION")===1&&(V=x.getUniformLocation(_,"INFINITY",!1));for(var B={},z=0;z<b.variableNames.length;z++){var U=b.variableNames[z];B[U]=x.getUniformLocation(_,U,!1),B["offset"+U]=x.getUniformLocation(_,"offset"+U,!1)}return{program:b,source:O,webGLProgram:_,uniformLocations:B,inShapeInfos:k,outShapeInfo:T,infLoc:V,nanLoc:L}}(s.gpgpu,e,d,h)}),g=this.activeTimers!=null;if(g&&(f=this.startTimer()),function(x,b,w,N,I){Bu(b.inShapeInfos,w),Bu([b.outShapeInfo],[N]);var R=N.texData.texture,k=N.texData.texShape;N.texData.isPacked?x.setOutputPackedMatrixTexture(R,k[0],k[1]):x.setOutputMatrixTexture(R,k[0],k[1]),x.setProgram(b.webGLProgram),M().getNumber("WEBGL_VERSION")===1&&b.infLoc!==null&&x.gl.uniform1f(b.infLoc,1/0),b.nanLoc!==null&&x.gl.uniform1f(b.nanLoc,NaN),w.forEach(function(T,O){var _=b.program.variableNames[O],V=b.uniformLocations[_],L=b.uniformLocations["offset"+_];if(V!=null)if(T.isUniform)if($(T.shape)<2)x.gl.uniform1f(V,T.uniformValues[0]);else{var B=T.uniformValues;B instanceof Float32Array||(B=new Float32Array(B)),x.gl.uniform1fv(V,B)}else T.texData.slice!=null&&L!=null&&x.gl.uniform1i(L,T.texData.slice.flatOffset),x.setInputMatrixTexture(T.texData.texture,V,O)}),I!=null&&I(x,b.webGLProgram),x.executeProgram()}(this.gpgpu,v,d,h,o),p.forEach(function(x){return s.disposeData(x.dataId)}),g&&(f=this.endTimer(f),this.activeTimers.push({name:e.constructor.name,query:this.getQueryTime(f)})),!M().getBool("WEBGL_LAZILY_UNPACK")&&c.isPacked&&i===!1){var y=this.unpackTensor(u);return this.disposeData(u.dataId),y}return u},t.prototype.compileAndRun=function(e,r,a,o,i){i===void 0&&(i=!1),a=a||r[0].dtype;var s=this.runWebGLProgram(e,r,a,o,i);return A.makeTensorFromDataId(s.dataId,s.shape,s.dtype)},t.prototype.getAndSaveBinary=function(e,r){return e in this.binaryCache||(this.binaryCache[e]=r()),this.binaryCache[e]},t.prototype.getTextureManager=function(){return this.textureManager},t.prototype.dispose=function(){var e=this;this.disposed||(M().getBool("IS_TEST")||Object.keys(this.binaryCache).forEach(function(r){e.gpgpu.deleteProgram(e.binaryCache[r].webGLProgram),delete e.binaryCache[r]}),this.textureManager.dispose(),this.canvas!=null&&typeof HTMLCanvasElement!="undefined"&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),this.disposed=!0)},t.prototype.floatPrecision=function(){var e=this;return this.floatPrecisionValue==null&&(this.floatPrecisionValue=Z(function(){if(!M().get("WEBGL_RENDER_FLOAT32_ENABLED")){var r=M().getBool("DEBUG");M().set("DEBUG",!1);var a=e.abs(j(1e-8)).dataSync()[0];if(M().set("DEBUG",r),a>0)return 32}return 16})),this.floatPrecisionValue},t.prototype.epsilon=function(){return this.floatPrecision()===32?1e-7:1e-4},t.prototype.uploadToGPU=function(e){var r,a=this.texData.get(e),o=a.shape,i=a.dtype,s=a.values,u=a.texture,c=a.usage,l=a.isPacked;if(u==null){var p,d=this.activeTimers!=null;d&&(p=it());var f=a.texShape;if(f==null&&(f=ul(o,l),a.texShape=f),s!=null){var h=oa(o),m=void 0,v=f[1],g=f[0],y=s instanceof Uint8Array;l?(v=(r=Nr(f[0],f[1]))[0],g=r[1],m=new nm(h,[g,v],y)):m=new tm(h,[g,v],y);var x=this.makeTensorInfo([g,v],i);this.texData.get(x.dataId).usage=y?Qe.PIXELS:Qe.UPLOAD,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(x.dataId),v,g,s);var b=this.runWebGLProgram(m,[x],i,null,!0),w=this.texData.get(b.dataId);a.texture=w.texture,a.texShape=w.texShape,a.isPacked=w.isPacked,a.usage=w.usage,this.disposeData(x.dataId),this.texData.delete(b.dataId),a.values=null,d&&(this.uploadWaitMs+=it()-p)}else{var N=this.acquireTexture(f,c,i,l);a.texture=N}}},t.prototype.convertAndCacheOnCPU=function(e,r){var a=this.texData.get(e),o=a.dtype;return this.releaseGPUData(e),r!=null&&(a.values=function(i,s){if(s==="float32"||s==="complex64")return i;if(s==="int32"||s==="bool"){for(var u=s==="int32"?new Int32Array(i.length):new Uint8Array(i.length),c=0;c<u.length;++c)u[c]=Math.round(i[c]);return u}throw new Error("Unknown dtype "+s)}(r,o)),a.values},t.prototype.acquireTexture=function(e,r,a,o){if(this.numBytesInGPU+=this.computeBytes(e,a),!this.warnedAboutMemory&&this.numBytesInGPU>1024*this.numMBBeforeWarning*1024){var i=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn("High memory usage in GPU: "+i+" MB, most likely due to a memory leak")}return this.textureManager.acquireTexture(e,r,o)},t.prototype.computeBytes=function(e,r){return e[0]*e[1]*yi(r)},t}(ys);Gc()&&A.registerBackend("webgl",function(){return new Tp},2);function wn(n,t){return n(t={exports:{}},t.exports),t.exports}var $m=wn(function(n){(function(t,e,r){function a(s){var u,c=this,l=(u=4022871197,function(p){p=p.toString();for(var d=0;d<p.length;d++){var f=.02519603282416938*(u+=p.charCodeAt(d));f-=u=f>>>0,u=(f*=u)>>>0,u+=4294967296*(f-=u)}return 23283064365386963e-26*(u>>>0)});c.next=function(){var p=2091639*c.s0+23283064365386963e-26*c.c;return c.s0=c.s1,c.s1=c.s2,c.s2=p-(c.c=0|p)},c.c=1,c.s0=l(" "),c.s1=l(" "),c.s2=l(" "),c.s0-=l(s),c.s0<0&&(c.s0+=1),c.s1-=l(s),c.s1<0&&(c.s1+=1),c.s2-=l(s),c.s2<0&&(c.s2+=1),l=null}function o(s,u){return u.c=s.c,u.s0=s.s0,u.s1=s.s1,u.s2=s.s2,u}function i(s,u){var c=new a(s),l=u&&u.state,p=c.next;return p.int32=function(){return 4294967296*c.next()|0},p.double=function(){return p()+11102230246251565e-32*(2097152*p()|0)},p.quick=p,l&&(typeof l=="object"&&o(l,c),p.state=function(){return o(c,{})}),p}e&&e.exports?e.exports=i:r&&r.amd?r(function(){return i}):this.alea=i})(0,n,!1)}),Ym=wn(function(n){(function(t,e,r){function a(s){var u=this,c="";u.x=0,u.y=0,u.z=0,u.w=0,u.next=function(){var p=u.x^u.x<<11;return u.x=u.y,u.y=u.z,u.z=u.w,u.w^=u.w>>>19^p^p>>>8},s===(0|s)?u.x=s:c+=s;for(var l=0;l<c.length+64;l++)u.x^=0|c.charCodeAt(l),u.next()}function o(s,u){return u.x=s.x,u.y=s.y,u.z=s.z,u.w=s.w,u}function i(s,u){var c=new a(s),l=u&&u.state,p=function(){return(c.next()>>>0)/4294967296};return p.double=function(){do var d=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(d===0);return d},p.int32=c.next,p.quick=p,l&&(typeof l=="object"&&o(l,c),p.state=function(){return o(c,{})}),p}e&&e.exports?e.exports=i:r&&r.amd?r(function(){return i}):this.xor128=i})(0,n,!1)}),Qm=wn(function(n){(function(t,e,r){function a(s){var u=this,c="";u.next=function(){var p=u.x^u.x>>>2;return u.x=u.y,u.y=u.z,u.z=u.w,u.w=u.v,(u.d=u.d+362437|0)+(u.v=u.v^u.v<<4^p^p<<1)|0},u.x=0,u.y=0,u.z=0,u.w=0,u.v=0,s===(0|s)?u.x=s:c+=s;for(var l=0;l<c.length+64;l++)u.x^=0|c.charCodeAt(l),l==c.length&&(u.d=u.x<<10^u.x>>>4),u.next()}function o(s,u){return u.x=s.x,u.y=s.y,u.z=s.z,u.w=s.w,u.v=s.v,u.d=s.d,u}function i(s,u){var c=new a(s),l=u&&u.state,p=function(){return(c.next()>>>0)/4294967296};return p.double=function(){do var d=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(d===0);return d},p.int32=c.next,p.quick=p,l&&(typeof l=="object"&&o(l,c),p.state=function(){return o(c,{})}),p}e&&e.exports?e.exports=i:r&&r.amd?r(function(){return i}):this.xorwow=i})(0,n,!1)}),Jm=wn(function(n){(function(t,e,r){function a(s){var u=this;u.next=function(){var c,l,p=u.x,d=u.i;return c=p[d],l=(c^=c>>>7)^c<<24,l^=(c=p[d+1&7])^c>>>10,l^=(c=p[d+3&7])^c>>>3,l^=(c=p[d+4&7])^c<<7,c=p[d+7&7],l^=(c^=c<<13)^c<<9,p[d]=l,u.i=d+1&7,l},function(c,l){var p,d=[];if(l===(0|l))d[0]=l;else for(l=""+l,p=0;p<l.length;++p)d[7&p]=d[7&p]<<15^l.charCodeAt(p)+d[p+1&7]<<13;for(;d.length<8;)d.push(0);for(p=0;p<8&&d[p]===0;++p);for(p==8?d[7]=-1:d[p],c.x=d,c.i=0,p=256;p>0;--p)c.next()}(u,s)}function o(s,u){return u.x=s.x.slice(),u.i=s.i,u}function i(s,u){s==null&&(s=+new Date);var c=new a(s),l=u&&u.state,p=function(){return(c.next()>>>0)/4294967296};return p.double=function(){do var d=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(d===0);return d},p.int32=c.next,p.quick=p,l&&(l.x&&o(l,c),p.state=function(){return o(c,{})}),p}e&&e.exports?e.exports=i:r&&r.amd?r(function(){return i}):this.xorshift7=i})(0,n,!1)}),Zm=wn(function(n){(function(t,e,r){function a(s){var u=this;u.next=function(){var c,l,p=u.w,d=u.X,f=u.i;return u.w=p=p+1640531527|0,l=d[f+34&127],c=d[f=f+1&127],l^=l<<13,c^=c<<17,l^=l>>>15,c^=c>>>12,l=d[f]=l^c,u.i=f,l+(p^p>>>16)|0},function(c,l){var p,d,f,h,m,v=[],g=128;for(l===(0|l)?(d=l,l=null):(l+="\0",d=0,g=Math.max(g,l.length)),f=0,h=-32;h<g;++h)l&&(d^=l.charCodeAt((h+32)%l.length)),h===0&&(m=d),d^=d<<10,d^=d>>>15,d^=d<<4,d^=d>>>13,h>=0&&(m=m+1640531527|0,f=(p=v[127&h]^=d+m)==0?f+1:0);for(f>=128&&(v[127&(l&&l.length||0)]=-1),f=127,h=512;h>0;--h)d=v[f+34&127],p=v[f=f+1&127],d^=d<<13,p^=p<<17,d^=d>>>15,p^=p>>>12,v[f]=d^p;c.w=m,c.X=v,c.i=f}(u,s)}function o(s,u){return u.i=s.i,u.w=s.w,u.X=s.X.slice(),u}function i(s,u){s==null&&(s=+new Date);var c=new a(s),l=u&&u.state,p=function(){return(c.next()>>>0)/4294967296};return p.double=function(){do var d=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(d===0);return d},p.int32=c.next,p.quick=p,l&&(l.X&&o(l,c),p.state=function(){return o(c,{})}),p}e&&e.exports?e.exports=i:r&&r.amd?r(function(){return i}):this.xor4096=i})(0,n,!1)}),ev=wn(function(n){(function(t,e,r){function a(s){var u=this,c="";u.next=function(){var p=u.b,d=u.c,f=u.d,h=u.a;return p=p<<25^p>>>7^d,d=d-f|0,f=f<<24^f>>>8^h,h=h-p|0,u.b=p=p<<20^p>>>12^d,u.c=d=d-f|0,u.d=f<<16^d>>>16^h,u.a=h-p|0},u.a=0,u.b=0,u.c=-1640531527,u.d=1367130551,s===Math.floor(s)?(u.a=s/4294967296|0,u.b=0|s):c+=s;for(var l=0;l<c.length+20;l++)u.b^=0|c.charCodeAt(l),u.next()}function o(s,u){return u.a=s.a,u.b=s.b,u.c=s.c,u.d=s.d,u}function i(s,u){var c=new a(s),l=u&&u.state,p=function(){return(c.next()>>>0)/4294967296};return p.double=function(){do var d=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(d===0);return d},p.int32=c.next,p.quick=p,l&&(typeof l=="object"&&o(l,c),p.state=function(){return o(c,{})}),p}e&&e.exports?e.exports=i:r&&r.amd?r(function(){return i}):this.tychei=i})(0,n,!1)}),pn=wn(function(n){(function(t,e){var r,a=this,o=256,i=6,s="random",u=e.pow(o,i),c=e.pow(2,52),l=2*c,p=o-1;function d(g,y,x){var b=[],w=m(function R(k,T){var O,_=[],V=typeof k;if(T&&V=="object")for(O in k)try{_.push(R(k[O],T-1))}catch(L){}return _.length?_:V=="string"?k:k+"\0"}((y=y==1?{entropy:!0}:y||{}).entropy?[g,v(t)]:g==null?function(){try{var R;return r&&(R=r.randomBytes)?R=R(o):(R=new Uint8Array(o),(a.crypto||a.msCrypto).getRandomValues(R)),v(R)}catch(O){var k=a.navigator,T=k&&k.plugins;return[+new Date,a,T,a.screen,v(t)]}}():g,3),b),N=new f(b),I=function(){for(var R=N.g(i),k=u,T=0;R<c;)R=(R+T)*o,k*=o,T=N.g(1);for(;R>=l;)R/=2,k/=2,T>>>=1;return(R+T)/k};return I.int32=function(){return 0|N.g(4)},I.quick=function(){return N.g(4)/4294967296},I.double=I,m(v(N.S),t),(y.pass||x||function(R,k,T,O){return O&&(O.S&&h(O,N),R.state=function(){return h(N,{})}),T?(e[s]=R,k):R})(I,w,"global"in y?y.global:this==e,y.state)}function f(g){var y,x=g.length,b=this,w=0,N=b.i=b.j=0,I=b.S=[];for(x||(g=[x++]);w<o;)I[w]=w++;for(w=0;w<o;w++)I[w]=I[N=p&N+g[w%x]+(y=I[w])],I[N]=y;(b.g=function(R){for(var k,T=0,O=b.i,_=b.j,V=b.S;R--;)k=V[O=p&O+1],T=T*o+V[p&(V[O]=V[_=p&_+k])+(V[_]=k)];return b.i=O,b.j=_,T})(o)}function h(g,y){return y.i=g.i,y.j=g.j,y.S=g.S.slice(),y}function m(g,y){for(var x,b=g+"",w=0;w<b.length;)y[p&w]=p&(x^=19*y[p&w])+b.charCodeAt(w++);return v(y)}function v(g){return String.fromCharCode.apply(0,g)}if(e["seed"+s]=d,m(e.random(),t),n.exports){n.exports=d;try{r=require("crypto")}catch(g){}}})([],Math)});pn.alea=$m,pn.xor128=Ym,pn.xorwow=Qm,pn.xorshift7=Jm,pn.xor4096=Zm,pn.tychei=ev;var _a=pn.alea,ks=D({addN_:function(n){E(Array.isArray(n),function(){return"The argument passed to tf.addN() must be a list of tensors"}),E(n.length>=1,function(){return"Must pass at least one tensor to tf.addN(), but got "+n.length});var t=n.map(function(a,o){return S(a,"tensors"+o,"addN")}),e=t[0];t.forEach(function(a){if(a.dtype!==e.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")}),t.forEach(function(a){if(!Te(a.shape,e.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")});var r=t;return A.runKernelFunc(function(a,o){return a.addN(t)},r,null,"AddN")}});function Fa(){Ei("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon")}function Ap(n){return n.rank===0||n.rank===1?n.as4D(1,1,1,n.size):n.rank===2?n.as4D(1,1,n.shape[0],n.shape[1]):n.rank===3?n.as4D(1,n.shape[0],n.shape[1],n.shape[2]):n}function Dp(n,t,e,r,a,o){o==null&&(o=.001);var i,s,u=S(n,"x","batchNorm"),c=S(t,"mean","batchNorm"),l=S(e,"variance","batchNorm");a!=null&&(i=S(a,"scale","batchNorm")),r!=null&&(s=S(r,"offset","batchNorm")),E(c.rank===l.rank,function(){return"Batch normalization gradient requires mean and variance to have equal ranks."}),E(s==null||c.rank===s.rank,function(){return"Batch normalization gradient requires mean and offset to have equal ranks."}),E(i==null||c.rank===i.rank,function(){return"Batch normalization gradient requires mean and scale to have equal ranks."});var p={x:u,scale:i,offset:s,mean:c,variance:l},d={varianceEpsilon:o};return A.runKernelFunc(function(f,h){var m=Ap(u),v=f.batchNormalization(m,Hr(c),Hr(l),o,Hr(i),Hr(s));return h([u,c,l,i]),v},p,null,"FusedBatchNorm",d).reshape(u.shape)}function Hr(n){return n==null?null:n.rank===0?n.as1D():n.rank===1?n:n.rank===2?n.as4D(1,1,n.shape[0],n.shape[1]):n.rank===3?n.as4D(1,n.shape[0],n.shape[1],n.shape[2]):n}var Op=D({batchNormalization_:function(n,t,e,r,a,o){return r===void 0&&(r=.001),Fa(),Dp(n,t,e,o,a,r)}}),Cn=D({batchNorm_:Dp});function _p(n,t,e,r,a,o){var i,s,u=S(n,"x","batchNorm"),c=S(t,"mean","batchNorm"),l=S(e,"variance","batchNorm");return a!=null&&(i=S(a,"scale","batchNorm")),r!=null&&(s=S(r,"offset","batchNorm")),E(u.rank===2,function(){return"Error in batchNorm3D: x must be rank 3 but got rank "+u.rank+"."}),E(c.rank===2||c.rank===1,function(){return"Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank "+c.rank+"."}),E(l.rank===2||l.rank===1,function(){return"Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank "+l.rank+"."}),i!=null&&E(i.rank===2||i.rank===1,function(){return"Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank "+i.rank+"."}),s!=null&&E(s.rank===2||s.rank===1,function(){return"Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank "+s.rank+"."}),Cn(u,c,l,s,i,o)}var Fp=D({batchNormalization2d_:function(n,t,e,r,a,o){return r===void 0&&(r=.001),Fa(),_p(n,t,e,o,a,r)}}),Mp=D({batchNorm2d_:_p});function Pp(n,t,e,r,a,o){var i,s,u=S(n,"x","batchNorm"),c=S(t,"mean","batchNorm"),l=S(e,"variance","batchNorm");return a!=null&&(i=S(a,"scale","batchNorm")),r!=null&&(s=S(r,"offset","batchNorm")),E(u.rank===3,function(){return"Error in batchNorm3D: x must be rank 3 but got rank "+u.rank+"."}),E(c.rank===3||c.rank===1,function(){return"Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank "+c.rank+"."}),E(l.rank===3||l.rank===1,function(){return"Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank "+l.rank+"."}),i!=null&&E(i.rank===3||i.rank===1,function(){return"Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank "+i.rank+"."}),s!=null&&E(s.rank===3||s.rank===1,function(){return"Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank "+s.rank+"."}),Cn(u,c,l,s,i,o)}var Bp=D({batchNormalization3d_:function(n,t,e,r,a,o){return r===void 0&&(r=.001),Fa(),Pp(n,t,e,o,a,r)}}),Lp=D({batchNorm3d_:Pp});function Vp(n,t,e,r,a,o){var i,s,u=S(n,"x","batchNorm"),c=S(t,"mean","batchNorm"),l=S(e,"variance","batchNorm");return a!=null&&(i=S(a,"scale","batchNorm")),r!=null&&(s=S(r,"offset","batchNorm")),E(u.rank===4,function(){return"Error in batchNorm4D: x must be rank 4 but got rank "+u.rank+"."}),E(c.rank===4||c.rank===1,function(){return"Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank "+c.rank+"."}),E(l.rank===4||l.rank===1,function(){return"Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank "+l.rank+"."}),i!=null&&E(i.rank===4||i.rank===1,function(){return"Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank "+i.rank+"."}),s!=null&&E(s.rank===4||s.rank===1,function(){return"Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank "+s.rank+"."}),Cn(u,c,l,s,i,o)}var Wp=D({batchNormalization4d_:function(n,t,e,r,a,o){return r===void 0&&(r=.001),Fa(),Vp(n,t,e,o,a,r)}}),zp=D({batchNorm4d_:Vp}),Ts=D({broadcastTo_:function(n,t){var e=S(n,"broadcastTo","x"),r=e.shape;if(t.some(function(p){return!(p>0)||p%1!=0}))throw new Error("broadcastTo(): Invalid broadcast shape ["+t+"].");if(t.length<e.rank)throw new Error("broadcastTo(): shape.length="+t.length+" < input.rank="+e.rank+".");if(t.length>e.rank){for(var a=e.shape.slice();a.length<t.length;)a.unshift(1);e=e.reshape(a)}for(var o=e.shape,i=Array.from(t),s=t.length-1;s>=0;s--)if(o[s]===t[s])i[s]=1;else if(e.shape[s]!==1)throw new Error("broadcastTo(): ["+r+"] cannot be broadcast to ["+t+"].");var u=i.map(function(p,d){return p>1?d:-1}).filter(function(p){return p>=0});if(u.length===0)return e.clone();var c={x:e},l={shape:t,inputShape:o};return A.runKernelFunc(function(p){return p.tile(e,i)},c,function(p){return{x:function(){return p.sum(u,!0)}}},_i,l)}}),Up=D({clone_:function(n){var t=S(n,"x","clone",null);return A.runKernelFunc(function(){return A.makeTensorFromDataId(t.dataId,t.shape,t.dtype)},{x:t},null,Mi)}}),$n=D({logicalAnd_:function(n,t){var e=S(n,"a","logicalAnd","bool"),r=S(t,"b","logicalAnd","bool");return ie(e.shape,r.shape),A.runKernelFunc(function(a){return a.logicalAnd(e,r)},{a:e,b:r},null,"LogicalAnd")}}),As=D({logicalNot_:function(n){var t=S(n,"x","logicalNot","bool");return A.runKernelFunc(function(e){return e.logicalNot(t)},{$x:t})}}),Ma=D({logicalOr_:function(n,t){var e=S(n,"a","logicalOr","bool"),r=S(t,"b","logicalOr","bool");return ie(e.shape,r.shape),A.runKernelFunc(function(a){return a.logicalOr(e,r)},{$a:e,$b:r})}}),Gp=D({logicalXor_:function(n,t){var e=S(n,"a","logicalXor","bool"),r=S(t,"b","logicalXor","bool");return ie(e.shape,r.shape),Ma(n,t).logicalAnd($n(n,t).logicalNot())}}),Lt=D({where_:function(n,t,e){var r=S(t,"a","where"),a=S(e,"b","where"),o=S(n,"condition","where","bool");return fe(r.shape,a.shape,"Error in where: "),o.rank===1?E(o.shape[0]===r.shape[0],function(){return"The first dimension of `a` must match the size of `condition`."}):fe(o.shape,a.shape,"Error in where: "),A.runKernelFunc(function(i,s){var u=i.select(o,r,a);return s([o]),u},{$condition:o,$a:r,$b:a},function(i,s){var u=s[0];return{$condition:function(){return ue(u).toFloat()},$a:function(){return i.mul(u.cast(i.dtype))},$b:function(){return i.mul(u.logicalNot().cast(i.dtype))}}})}}),Pa=function(n){return Y(this,void 0,void 0,function(){var t,e,r;return Q(this,function(a){switch(a.label){case 0:return[4,(t=S(n,"condition","whereAsync","bool")).data()];case 1:return e=a.sent(),r=Ss(t.shape,e),n!==t&&t.dispose(),[2,r]}})})},Ba=D({divNoNan_:function(n,t){var e,r=S(n,"a","div"),a=S(t,"b","div");r=(e=be(r,a))[0],a=e[1];var o=ct(r,a),i=ue(o),s=a.equal(i);return Lt(s,i,o)}}),Xt=D({tile_:function(n,t){var e=S(n,"x","tile",null);E(e.rank===t.length,function(){return"Error in transpose: rank of input "+e.rank+" must match length of reps "+t+"."});var r=[e],a={x:e},o={reps:t};return A.runKernelFunc(function(i,s){var u=i.tile(e,t);return s([e]),u},a,null,Pi,o,r)}}),Ds=D({eye_:function(n,t,e,r){r===void 0&&(r="float32"),t==null&&(t=n);for(var a=ne([n,t],r),o=n<=t?n:t,i=0;i<o;++i)a.set(1,i,i);var s=a.toTensor().as2D(n,t);if(e==null)return s;if(e.length===1)return Xt(Ge(s,0),[e[0],1,1]);if(e.length===2)return Xt(Ge(Ge(s,0),0),[e[0],e[1],1,1]);if(e.length===3)return Xt(Ge(Ge(Ge(s,0),0),0),[e[0],e[1],e[2],1,1]);throw new Error("eye() currently supports only 1D and 2D batchShapes, but received "+e.length+"D.")}}),Os=D({multinomial_:function(n,t,e,r){r===void 0&&(r=!1);var a=S(n,"logits","multinomial"),o=a.size,i=a.rank;if(o<2)throw new Error("Error in multinomial: you need at least 2 outcomes, but got "+o+".");if(i>2)throw new Error("Rank of probabilities must be 1 or 2, but is "+i);e=e||Math.random();var s=i===1?a.as2D(1,-1):a,u=A.runKernelFunc(function(c){return c.multinomial(s,r,t,e)},{logits2D:s});return i===1?u.as1D():u}}),xn=D({oneHot_:function(n,t,e,r){if(e===void 0&&(e=1),r===void 0&&(r=0),t<2)throw new Error("Error in oneHot: depth must be >=2, but it is "+t);var a=S(n,"indices","oneHot","int32"),o=a.shape.concat([t]),i={indices:a=a.flatten()},s={depth:t,onValue:e,offValue:r};return A.runKernelFunc(function(u,c){return c([a]),u.oneHot(a,t,e,r)},i,null,Fi,s).reshape(o)}}),zt=D({pad_:function(n,t,e){e===void 0&&(e=0);var r=S(n,"x","pad");if(r.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");var a={paddings:t,constantValue:e},o={x:r};return A.runKernelFunc(function(i,s){return s([r]),i.pad(r,t,e)},o,null,Bi,a)}}),Hp=D({pad1d_:function(n,t,e){return e===void 0&&(e=0),E(t.length===2,function(){return"Invalid number of paddings. Must be length of 2."}),zt(n,[t],e)}}),qp=D({pad2d_:function(n,t,e){return e===void 0&&(e=0),E(t.length===2&&t[0].length===2&&t[1].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),zt(n,t,e)}}),La=D({pad3d_:function(n,t,e){return e===void 0&&(e=0),E(t.length===3&&t[0].length===2&&t[1].length===2&&t[2].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),zt(n,t,e)}}),jp=D({pad4d_:function(n,t,e){return e===void 0&&(e=0),E(t.length===4&&t[0].length===2&&t[1].length===2&&t[2].length===2&&t[3].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),zt(n,t,e)}}),Kp=D({rand_:function(n,t,e){var r=$(n),a=null;if(e==null||e==="float32")a=new Float32Array(r);else if(e==="int32")a=new Int32Array(r);else{if(e!=="bool")throw new Error("Unknown data type "+e);a=new Uint8Array(r)}for(var o=0;o<r;o++)a[o]=t();return A.makeTensor(a,n,e)}}),tv=.001,Xp=.1;function yo(){return A.backend.floatPrecision()===32?tv:Xp}function xo(n,t,e){var r=!0;if((Fe(n)||Fe(t))&&(r=!1),Fe(n)&&Fe(t)&&(r=!0),r){var a=n.constructor.name,o=t.constructor.name;if(a!==o)throw new Error("Arrays are of different type. Actual: "+a+". Expected: "+o)}if(Array.isArray(n)&&Array.isArray(t)){var i=St(n),s=St(t);if(!Te(i,s))throw new Error("Arrays have different shapes. Actual: ["+i+"]. Expected: ["+s+"]")}var u=Fe(n)?n:Mt(n),c=Fe(t)?t:Mt(t);if(u.length!==c.length)throw new Error("Arrays have different lengths actual: "+u.length+" vs expected: "+c.length+`.
Actual:   `+u+`.
Expected: `+c+".");for(var l=0;l<c.length;++l){var p=u[l],d=c[l];if(!e(p,d))throw new Error("Arrays differ: actual["+l+"] = "+p+", expected["+l+"] = "+d+`.
Actual:   `+u+`.
Expected: `+c+".")}}function bo(n,t,e){return!isFinite(n)&&!isFinite(t)||!(isNaN(n)||isNaN(t)||Math.abs(n-t)>e)}var nv=Object.freeze({TEST_EPSILON_FLOAT16:Xp,expectArraysClose:function(n,t,e){return e==null&&(e=yo()),xo(n,t,function(r,a){return bo(r,a,e)})},testEpsilon:yo,expectPromiseToFail:function(n,t){n().then(function(){return t.fail()},function(){return t()})},expectArraysEqual:function(n,t){var e=typeof t=="string"||typeof t=="number"||typeof t=="boolean"?[t]:t;return jt(n)||jt(n[0])||jt(t)||jt(t[0])?xo(n,e,function(r,a){return r==a}):xo(n,t,function(r,a){return bo(r,a,0)})},expectNumbersClose:function(n,t,e){if(e==null&&(e=yo()),!bo(n,t,e))throw new Error("Numbers differ: actual === "+n+", expected === "+t)},expectValuesInRange:function(n,t,e){for(var r=0;r<n.length;r++)if(n[r]<t||n[r]>e)throw new Error("Value out of range:"+n[r]+" low: "+t+", high: "+e)},expectArrayBuffersEqual:function(n,t){expect(new Float32Array(n)).toEqual(new Float32Array(t))}}),_s=function(){function n(t,e,r,a,o){this.mean=t,this.stdDev=e,this.dtype=r,this.nextVal=NaN,this.truncated=a,this.truncated&&(this.upper=this.mean+2*this.stdDev,this.lower=this.mean-2*this.stdDev);var i=o||Math.random();this.random=_a(i.toString())}return n.prototype.nextValue=function(){if(!isNaN(this.nextVal)){var t=this.nextVal;return this.nextVal=NaN,t}for(var e,r,a=!1;!a;){var o=void 0,i=void 0,s=void 0;do s=(o=2*this.random()-1)*o+(i=2*this.random()-1)*i;while(s>=1||s===0);var u=Math.sqrt(-2*Math.log(s)/s);e=this.mean+this.stdDev*o*u,r=this.mean+this.stdDev*i*u,this.truncated&&!this.isValidTruncated(e)||(a=!0)}return this.truncated&&!this.isValidTruncated(r)||(this.nextVal=this.convertValue(r)),this.convertValue(e)},n.prototype.convertValue=function(t){return this.dtype==null||this.dtype==="float32"?t:Math.round(t)},n.prototype.isValidTruncated=function(t){return t<=this.upper&&t>=this.lower},n}(),rv=function(){function n(t,e,r,a){this.alpha=t,this.beta=1/e,this.dtype=r;var o=a||Math.random();this.randu=_a(o.toString()),this.randn=new _s(0,1,r,!1,this.randu()),this.d=t<1?t+2/3:t-1/3,this.c=1/Math.sqrt(9*this.d)}return n.prototype.nextValue=function(){for(var t,e,r,a,o,i;;){do a=this.randn.nextValue(),i=1+this.c*a;while(i<=0);if(i*=i*i,e=1-.331*(t=a*a)*t,r=.5*t+this.d*(1-i+Math.log(i)),(o=this.randu())<e||Math.log(o)<r)break}return i=1/this.beta*this.d*i,this.alpha<1&&(i*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(i)},n.prototype.convertValue=function(t){return this.dtype==="float32"?t:Math.round(t)},n}(),av=function(){function n(t,e,r,a){var o=this;if(t===void 0&&(t=0),e===void 0&&(e=1),this.canReturnFloat=function(){return o.dtype==null||o.dtype==="float32"},this.min=t,this.range=e-t,this.dtype=r,a==null&&(a=Math.random()),typeof a=="number"&&(a=a.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error("The difference between "+t+" - "+e+" <= 1 and dtype is not float");this.random=_a(a)}return n.prototype.convertValue=function(t){return this.canReturnFloat()?t:Math.round(t)},n.prototype.nextValue=function(){return this.convertValue(this.min+this.range*this.random())},n}(),$p=D({randomGamma_:function(n,t,e,r,a){if(e===void 0&&(e=1),r===void 0&&(r="float32"),e==null&&(e=1),r==null&&(r="float32"),r!=="float32"&&r!=="int32")throw new Error("Unsupported data type "+r);for(var o=new rv(t,e,r,a),i=ne(n,r),s=0;s<i.values.length;s++)i.values[s]=o.nextValue();return i.toTensor()}}),Yp=D({randomNormal_:function(n,t,e,r,a){if(t===void 0&&(t=0),e===void 0&&(e=1),r!=null&&r==="bool")throw new Error("Unsupported data type "+r);for(var o=new _s(t,e,r,!1,a),i=ne(n,r),s=0;s<i.values.length;s++)i.values[s]=o.nextValue();return i.toTensor()}}),Va=D({randomUniform_:function(n,t,e,r,a){t===void 0&&(t=0),e===void 0&&(e=1),r===void 0&&(r="float32");for(var o=ne(n,r),i=new av(t,e,null,a),s=0;s<o.values.length;s++)o.values[s]=i.nextValue();return o.toTensor()}}),Wa=D({square_:function(n){var t=S(n,"x","square"),e=[t];return A.runKernelFunc(function(r,a){return a([t]),r.square(t)},{x:t},null,"Square",{},e,[])}}),za=D({squaredDifference_:function(n,t){var e,r=S(n,"a","squaredDifference"),a=S(t,"b","squaredDifference");e=be(r,a),r=e[0],a=e[1],ie(r.shape,a.shape);var o={a:r,b:a},i=[r,a];return A.runKernelFunc(function(s,u){var c=s.squaredDifference(r,a);return u([r,a]),c},o,function(s,u){var c=u[0],l=u[1],p=j(2);return{a:function(){return s.mul(c.sub(l).mul(p))},b:function(){return s.mul(l.sub(c).mul(p))}}},Rr,{},i,[])}}),Fs=D({truncatedNormal_:function(n,t,e,r,a){if(t===void 0&&(t=0),e===void 0&&(e=1),r!=null&&r==="bool")throw new Error("Unsupported data type $ { dtype }");for(var o=new _s(t,e,r,!0,a),i=ne(n,r),s=0;s<i.values.length;s++)i.values[s]=o.nextValue();return i.toTensor()}}),Yn=D({equal_:function(n,t){var e,r=S(n,"a","equal"),a=S(t,"b","equal");return e=be(r,a),r=e[0],a=e[1],ie(r.shape,a.shape),A.runKernelFunc(function(o){return o.equal(r,a)},{$a:r,$b:a})}}),Qp=D({equalStrict_:function(n,t){var e=S(n,"a","equalStrict"),r=S(t,"b","equalStrict");return fe(e.shape,r.shape,"Error in equalStrict: "),e.equal(r)}}),Ua=D({greater_:function(n,t){var e,r=S(n,"a","greater"),a=S(t,"b","greater");return e=be(r,a),r=e[0],a=e[1],ie(r.shape,a.shape),A.runKernelFunc(function(o){return o.greater(r,a)},{a:r,b:a},null,"Greater")}}),Ga=D({greaterEqual_:function(n,t){var e,r=S(n,"a","greaterEqual"),a=S(t,"b","greaterEqual");return e=be(r,a),r=e[0],a=e[1],ie(r.shape,a.shape),A.runKernelFunc(function(o,i){var s=o.greaterEqual(r,a);return i([r,a]),s},{a:r,b:a},function(o,i){var s=i[0],u=i[1];return{a:function(){return ue(s)},b:function(){return ue(u)}}},"GreaterEqual")}}),Jp=D({greaterEqualStrict_:function(n,t){var e=S(n,"a","greaterEqualStrict"),r=S(t,"b","greaterEqualStrict");return fe(e.shape,r.shape,"Error in greaterEqualStrict: "),e.greaterEqual(r)}}),Zp=D({greaterStrict_:function(n,t){var e=S(n,"a","greaterStrict"),r=S(t,"b","greaterStrict");return fe(e.shape,r.shape,"Error in greaterStrict: "),e.greater(r)}}),Ms=D({less_:function(n,t){var e,r=S(n,"a","less"),a=S(t,"b","less");return e=be(r,a),r=e[0],a=e[1],ie(r.shape,a.shape),A.runKernelFunc(function(o){return o.less(r,a)},{a:r,b:a},null,"Less")}}),Ps=D({lessEqual_:function(n,t){var e,r=S(n,"a","lessEqual"),a=S(t,"b","lessEqual");return e=be(r,a),r=e[0],a=e[1],ie(r.shape,a.shape),A.runKernelFunc(function(o,i){var s=o.lessEqual(r,a);return i([r,a]),s},{a:r,b:a},null,"LessEqual")}}),ed=D({lessEqualStrict_:function(n,t){var e=S(n,"a","lessEqualStrict"),r=S(t,"b","lessEqualStrict");return fe(e.shape,r.shape,"Error in lessEqualStrict: "),e.lessEqual(r)}}),td=D({lessStrict_:function(n,t){var e=S(n,"a","lessStrict"),r=S(t,"b","lessStrict");return fe(e.shape,r.shape,"Error in lessStrict: "),e.less(r)}}),Bs=D({notEqual_:function(n,t){var e,r=S(n,"a","notEqual"),a=S(t,"b","notEqual");return e=be(r,a),r=e[0],a=e[1],ie(r.shape,a.shape),A.runKernelFunc(function(o){return o.notEqual(r,a)},{a:r,b:a},null,"NotEqual")}}),nd=D({notEqualStrict_:function(n,t){var e=S(n,"a","notEqualStrict"),r=S(t,"b","notEqualStrict");return fe(e.shape,r.shape,"Error in notEqualStrict: "),e.notEqual(r)}});function Ku(n,t){for(var e=[],r=n;r<t;++r)e.push(r);return e}function Xu(n){for(var t=[],e=0;e<n.length;++e)for(var r=0;r<n[e].length;++r)t.push(n[e][r]);return t}var Fr=D({gather_:function(n,t,e){e===void 0&&(e=0);var r=S(n,"x","gather"),a=S(t,"indices","gather","int32");e=Ae(e,r.shape)[0];var o=function(i,s,u){for(var c=i.shape[u],l=[],p=1,d=1,f=0;f<u;f++)l.push(i.shape[f]),p*=i.shape[f];for(f=0;f<s.rank;f++)l.push(s.shape[f]);for(f=u+1;f<i.rank;f++)l.push(i.shape[f]),d*=i.shape[f];return{batchSize:p,sliceSize:d,dimSize:c,outputShape:l}}(r,a,e);return A.runKernelFunc(function(i,s){var u=i.gather(r,a.flatten(),e);return s([a]),u},{x:r,indices:a},function(i,s){var u=s[0];return{x:function(){var c=r.shape,l=u.size,p=c.slice(0,e),d=p.length,f=c.slice(e,c.length).slice(1),h=f.length,m=Ku(0,d),v=Ku(d+1,d+1+h),g=Xu([p,[l],f]),y=i.reshape(g),x=u.reshape([l]),b=Xu([[d],m,v]),w=y.transpose(b),N=Ls(w,x,r.shape[e]),I=Na(b);return N=N.transpose(I)},indices:function(){return u}}},"Gather",{axis:e}).reshape(o.outputShape)}}),Ls=D({unsortedSegmentSum_:function(n,t,e){var r=S(n,"x","unsortedSegmentSum"),a=S(t,"segmentIds","unsortedSegmentSum","int32");return E(Ne(e),function(){return"numSegments must be of dtype int"}),A.runKernelFunc(function(o,i){var s=o.unsortedSegmentSum(r,a,e);return i([a]),s},{$x:r},function(o,i){var s=i[0];return{$x:function(){return function(u,c){for(var l=Ar(c,ue(c)),p=Fr(u,l),d=Ga(c,j(0,"int32")),f=p.rank-d.rank,h=0;h<f;++h)d=Ge(d,h+1);d=$n(d,nn(p.shape,"bool"));var m=ue(p);return Lt(d,p,m)}(o,s)}}})}}),rd=function(n,t,e){return Y(this,void 0,void 0,function(){var r,a,o,i,s,u,c,l,p,d,f,h,m;return Q(this,function(v){switch(v.label){case 0:for(r=S(n,"tensor","boolMask"),a=S(t,"mask","boolMask","bool"),o=e==null?0:e,i=a.rank,s=r.shape,E(i>0,function(){return"mask cannot be scalar"}),fe(s.slice(o,o+i),a.shape,"mask's shape must match the first K dimensions of tensor's shape,"),u=1,c=o;c<o+i;c++)u*=s[c];return l=s.slice(0,o).concat([u],s.slice(o+i)),p=r.reshape(l),d=a.reshape([-1]),[4,Pa(d)];case 1:return f=v.sent(),h=f.squeeze([1]),m=Fr(p,h,o),n!==r&&r.dispose(),t!==a&&a.dispose(),h.dispose(),p.dispose(),d.dispose(),f.dispose(),[2,m]}})})};function ad(n,t,e,r,a,o,i){o===void 0&&(o="NHWC"),E(n.length===t.rank,function(){return"Length of inShape ("+n.length+") and rank of dy ("+t.rank+") must match"});var s=n,u=t,c=!1;t.rank===3&&(c=!0,u=t.as4D(1,t.shape[0],t.shape[1],t.shape[2]),s=[1,n[0],n[1],n[2]]),E(s.length===4,function(){return"Error in conv2dDerInput: inShape must be length 4, but got length "+s.length+"."}),E(u.rank===4,function(){return"Error in conv2dDerInput: dy must be rank 4, but got rank "+u.rank}),E(e.rank===4,function(){return"Error in conv2dDerInput: filter must be rank 4, but got rank "+e.rank});var l=o==="NHWC"?s[3]:s[1],p=o==="NHWC"?u.shape[3]:u.shape[1];E(l===e.shape[2],function(){return"Error in conv2dDerInput: depth of input ("+l+") must match input depth for filter "+e.shape[2]+"."}),E(p===e.shape[3],function(){return"Error in conv2dDerInput: depth of output ("+p+") must match output depth for filter "+e.shape[3]+"."}),i!=null&&E(Ne(a),function(){return"Error in conv2dDerInput: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+a+"."});var d=Oa(o),f=rn(s,e.shape,r,1,a,i,!1,d),h=A.runKernelFunc(function(m,v){var g=m.conv2dDerInput(u,e,f);return v([e,u]),g},{dy4D:u,filter:e},function(m,v){var g=v[0],y=v[1];return{dy4D:function(){return Nn(m,g,r,a,o,1,i)},filter:function(){return zs(m,y,g.shape,r,a,o,i)}}});return c?h.as3D(h.shape[1],h.shape[2],h.shape[3]):h}function wo(n){var t=function(o){return typeof o=="number"?[o,o,o]:o.length===2?[o[0],o[1],1]:o}(n),e=t[0],r=t[1],a=t[2];return e===1&&r===1&&a===1}function od(n,t,e,r,a){E(n.length===t.rank,function(){return"Length of inShape ("+n.length+") and rank of dy ("+t.rank+") must match"});var o=n,i=t,s=!1;t.rank===4&&(s=!0,i=t.as5D(1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]),o=[1,n[0],n[1],n[2],n[3]]);var u=o[4],c=i.shape[4];E(o.length===5,function(){return"Error in conv3dDerInput: inShape must be length 5, but got length "+o.length+"."}),E(i.rank===5,function(){return"Error in conv3dDerInput: dy must be rank 5, but got rank "+i.rank}),E(e.rank===5,function(){return"Error in conv3dDerInput: filter must be rank 5, but got rank "+e.rank}),E(u===e.shape[3],function(){return"Error in conv3dDerInput: depth of input ("+u+") must match input depth for filter "+e.shape[3]+"."}),E(c===e.shape[4],function(){return"Error in conv3dDerInput: depth of output ("+c+") must match output depth for filter "+e.shape[4]+"."});var l=wr(o,e.shape,r,1,a),p=A.runKernelFunc(function(d){return d.conv3dDerInput(i,e,l)},{dy5D:i});return s?p.as4D(p.shape[1],p.shape[2],p.shape[3],p.shape[4]):p}var Vs=D({conv1d_:function(n,t,e,r,a,o,i){a===void 0&&(a="NWC"),o===void 0&&(o=1);var s=S(n,"x","conv1d"),u=S(t,"filter","conv1d"),c=s,l=!1;s.rank===2&&(l=!0,c=s.as3D(1,s.shape[0],s.shape[1])),E(c.rank===3,function(){return"Error in conv1d: input must be rank 3, but got rank "+c.rank+"."}),E(u.rank===3,function(){return"Error in conv1d: filter must be rank 3, but got rank "+u.rank+"."}),i!=null&&E(Ne(r),function(){return"Error in conv1d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+r+"."}),E(c.shape[2]===u.shape[1],function(){return"Error in conv1d: depth of input ("+c.shape[2]+") must match input depth for filter "+u.shape[1]+"."}),E(Be(e,o),function(){return"Error in conv1D: Either stride or dilation must be 1. Got stride "+e+" and dilation '"+o+"'"}),E(a==="NWC",function(){return"Error in conv1d: got dataFormat of "+a+" but only NWC is currently supported."});var p=u.as4D(1,u.shape[0],u.shape[1],u.shape[2]),d=c.as4D(c.shape[0],1,c.shape[1],c.shape[2]),f=Nn(d,p,[1,e],r,"NHWC",[1,o],i);return l?f.as2D(f.shape[2],f.shape[3]):f.as3D(f.shape[0],f.shape[2],f.shape[3])}}),Nn=D({conv2d_:function(n,t,e,r,a,o,i){a===void 0&&(a="NHWC"),o===void 0&&(o=[1,1]);var s=S(n,"x","conv2d"),u=S(t,"filter","conv2d"),c=s,l=!1;s.rank===3&&(l=!0,c=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),E(c.rank===4,function(){return"Error in conv2d: input must be rank 4, but got rank "+c.rank+"."}),E(u.rank===4,function(){return"Error in conv2d: filter must be rank 4, but got rank "+u.rank+"."}),i!=null&&E(Ne(r),function(){return"Error in conv2d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+r+"."});var p=a==="NHWC"?c.shape[3]:c.shape[1];E(p===u.shape[2],function(){return"Error in conv2d: depth of input ("+p+") must match input depth for filter "+u.shape[2]+"."}),E(Be(e,o),function(){return"Error in conv2D: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+o+"'"});var d=Oa(a),f=rn(c.shape,u.shape,e,o,r,i,!1,d),h=[u,c],m=A.runKernelFunc(function(v,g){var y=v.conv2d(c,u,f);return g([u,c]),y},{x:c,filter:u},function(v,g){var y=g,x=y[0],b=y[1];return E(yn(o),function(){return"Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+o+"'"}),{x:function(){return id(b.shape,v,x,e,r,a)},filter:function(){return zs(b,v,x.shape,e,r,a)}}},"Conv2D",f,h);return l?m.as3D(m.shape[1],m.shape[2],m.shape[3]):m}}),Ws=D({conv3d_:function(n,t,e,r,a,o){a===void 0&&(a="NDHWC"),o===void 0&&(o=[1,1,1]);var i=S(n,"x","conv3d"),s=S(t,"filter","conv3d"),u=i,c=!1;i.rank===4&&(c=!0,u=i.as5D(1,i.shape[0],i.shape[1],i.shape[2],i.shape[3])),E(u.rank===5,function(){return"Error in conv3d: input must be rank 5, but got rank "+u.rank+"."}),E(s.rank===5,function(){return"Error in conv3d: filter must be rank 5, but got rank "+s.rank+"."}),E(u.shape[4]===s.shape[3],function(){return"Error in conv3d: depth of input ("+u.shape[4]+") must match input depth for filter "+s.shape[3]+"."}),E(function(d,f){return wo(d)||wo(f)}(e,o),function(){return"Error in conv3D: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+o+"'"}),E(a==="NDHWC",function(){return"Error in conv3d: got dataFormat of "+a+" but only NDHWC is currently supported."});var l=wr(u.shape,s.shape,e,o,r),p=A.runKernelFunc(function(d,f){var h=d.conv3d(u,s,l);return f([u,s]),h},{x:u,$filter:s},function(d,f){E(wo(o),function(){return"Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+o+"'"});var h=f[0],m=f[1];return{x:function(){return od(h.shape,d,m,e,r)},$filter:function(){return function(v,g,y,x,b){var w=v;v.rank===4&&(w=v.as5D(1,v.shape[0],v.shape[1],v.shape[2],v.shape[3]));var N=g;N.rank===4&&(N=g.as5D(1,g.shape[0],g.shape[1],g.shape[2],g.shape[3])),E(w.rank===5,function(){return"Error in conv3dDerFilter: input must be rank 5, but got shape "+w.shape+"."}),E(N.rank===5,function(){return"Error in conv3dDerFilter: dy must be rank 5, but got shape "+N.shape+"."}),E(y.length===5,function(){return"Error in conv3dDerFilter: filterShape must be length 5, but got "+y+"."}),E(w.shape[4]===y[3],function(){return"Error in conv3dDerFilter: depth of input "+w.shape[4]+") must match input depth in filter ("+y[3]+"."}),E(N.shape[4]===y[4],function(){return"Error in conv3dDerFilter: depth of dy ("+N.shape[4]+") must match output depth for filter ("+y[4]+")."});var I=wr(w.shape,y,x,1,b);return A.runKernelFunc(function(R){return R.conv3dDerFilter(w,N,I)},{x5D:w,dy5D:N})}(h,d,m.shape,e,r)}}});return c?p.as4D(p.shape[1],p.shape[2],p.shape[3],p.shape[4]):p}}),zs=D({conv2dDerFilter_:function(n,t,e,r,a,o,i){o===void 0&&(o="NHWC");var s=n;n.rank===3&&(s=n.as4D(1,n.shape[0],n.shape[1],n.shape[2]));var u=t;u.rank===3&&(u=t.as4D(1,t.shape[0],t.shape[1],t.shape[2])),E(s.rank===4,function(){return"Error in conv2dDerFilter: input must be rank 4, but got shape "+s.shape+"."}),E(u.rank===4,function(){return"Error in conv2dDerFilter: dy must be rank 4, but got shape "+u.shape+"."}),E(e.length===4,function(){return"Error in conv2dDerFilter: filterShape must be length 4, but got "+e+"."});var c=o==="NHWC"?s.shape[3]:s.shape[1],l=o==="NHWC"?u.shape[3]:u.shape[1];E(c===e[2],function(){return"Error in conv2dDerFilter: depth of input "+c+") must match input depth in filter ("+e[2]+"."}),E(l===e[3],function(){return"Error in conv2dDerFilter: depth of dy ("+l+") must match output depth for filter ("+e[3]+")."}),i!=null&&E(Ne(a),function(){return"Error in conv2dDerFilter: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+a+"."});var p=Oa(o),d=rn(s.shape,e,r,1,a,i,!1,p);return A.runKernelFunc(function(f){return f.conv2dDerFilter(s,u,d)},{x4D:s,dy4D:u})}}),id=D({conv2dDerInput_:ad}),Mr=D({depthwiseConv2d_:function(n,t,e,r,a,o,i){o===void 0&&(o=[1,1]);var s=S(n,"x","depthwiseConv2d"),u=S(t,"filter","depthwiseConv2d"),c=s,l=!1;s.rank===3&&(l=!0,c=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),E(c.rank===4,function(){return"Error in depthwiseConv2d: input must be rank 4, but got rank "+c.rank+"."}),E(u.rank===4,function(){return"Error in depthwiseConv2d: filter must be rank 4, but got rank "+u.rank+"."}),E(c.shape[3]===u.shape[2],function(){return"Error in depthwiseConv2d: number of input channels ("+c.shape[3]+") must match the inChannels dimension in filter "+u.shape[2]+"."}),o==null&&(o=[1,1]),E(Be(e,o),function(){return"Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+o+"'"}),i!=null&&E(Ne(r),function(){return"Error in depthwiseConv2d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+r+"."});var p=rn(c.shape,u.shape,e,o,r,i,!0),d=[c,u],f=A.runKernelFunc(function(h,m){var v=h.depthwiseConv2D(c,u,p);return m([c,u]),v},{x:c,filter:u},function(h,m){E(yn(o),function(){return"Error in gradient of depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '"+o+"'"});var v=m[0],g=m[1];return{x:function(){return sd(v.shape,h,g,p)},filter:function(){return ud(v,h,g.shape,p)}}},"DepthwiseConv2dNative",p,d);return l?f.as3D(f.shape[1],f.shape[2],f.shape[3]):f}}),sd=D({depthwiseConv2dDerInput_:function(n,t,e,r){var a=t,o=!1;t.rank===3&&(o=!0,a=t.as4D(1,t.shape[0],t.shape[1],t.shape[2]));var i=A.runKernelFunc(function(s){return s.depthwiseConv2DDerInput(a,e,r)},{dy4D:a});return o?i.as3D(i.shape[1],i.shape[2],i.shape[3]):i}}),ud=D({depthwiseConv2dDerFilter_:function(n,t,e,r){var a=n;n.rank===3&&(a=n.as4D(1,n.shape[0],n.shape[1],n.shape[2]));var o=t;return o.rank===3&&(o=t.as4D(1,t.shape[0],t.shape[1],t.shape[2])),A.runKernelFunc(function(i){return i.depthwiseConv2DDerFilter(a,o,r)},{x4D:a,dy4D:o})}}),cd=D({separableConv2d_:function(n,t,e,r,a,o,i){o===void 0&&(o=[1,1]),i===void 0&&(i="NHWC");var s=S(n,"x","separableConv2d"),u=S(t,"depthwiseFilter","separableConv2d"),c=S(e,"pointwiseFilter","separableConv2d"),l=s,p=!1;if(s.rank===3&&(p=!0,l=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),i==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");E(l.rank===4,function(){return"Error in separableConv2d: input must be rank 4, but got rank "+l.rank+"."}),E(u.rank===4,function(){return"Error in separableConv2d: depthwise filter must be rank 4, but got rank "+u.rank+"."}),E(c.rank===4,function(){return"Error in separableConv2d: pointwise filter must be rank 4, but got rank "+u.rank+"."}),E(c.shape[0]===1,function(){return"Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got "+c.shape[0]+"."}),E(c.shape[1]===1,function(){return"Error in separableConv2d: the second dimension of pointwise filter must be 1, but got "+c.shape[1]+"."});var d=u.shape[2],f=u.shape[3];E(c.shape[2]===d*f,function(){return"Error in separableConv2d: the third dimension of pointwise filter must be "+d*f+", but got "+c.shape[2]+"."});var h=Mr(l,u,r,a,i,o),m=Nn(h,c,1,"valid",i);return p?m.as3D(m.shape[1],m.shape[2],m.shape[3]):m}}),Us=D({conv2dTranspose_:function(n,t,e,r,a,o){return ad(e,S(n,"x","conv2dTranspose"),S(t,"filter","conv2dTranspose"),r,a,"NHWC",o)}}),ld=D({conv3dTranspose_:function(n,t,e,r,a){return od(e,S(n,"x","conv3dTranspose"),S(t,"filter","conv3dTranspose"),r,a)}}),Qn=D({matMul_:function(n,t,e,r){var a;e===void 0&&(e=!1),r===void 0&&(r=!1);var o=S(n,"a","matMul"),i=S(t,"b","matMul");a=be(o,i),o=a[0],i=a[1];var s=e?o.shape[o.rank-2]:o.shape[o.rank-1],u=r?i.shape[i.rank-1]:i.shape[i.rank-2],c=e?o.shape[o.rank-1]:o.shape[o.rank-2],l=r?i.shape[i.rank-2]:i.shape[i.rank-1],p=o.shape.slice(0,-2),d=i.shape.slice(0,-2),f=$(p),h=$(d);E(o.rank>=2&&i.rank>=2&&o.rank===i.rank,function(){return"Error in matMul: inputs must have the same rank of at least 2, got ranks "+o.rank+" and "+i.rank+"."}),E(Te(p,d),function(){return"Error in matMul: outer dimensions ("+p+") and ("+d+") of Tensors with shapes "+o.shape+" and "+i.shape+" must match."}),E(s===u,function(){return"Error in matMul: inner shapes ("+s+") and ("+u+") of Tensors with shapes "+o.shape+" and "+i.shape+" and transposeA="+e+" and transposeB="+r+" must match."});var m=o.shape.slice(0,-2).concat([c,l]),v=e?o.as3D(f,s,c):o.as3D(f,c,s),g=r?i.as3D(h,l,u):i.as3D(h,u,l),y={transposeA:e,transposeB:r};return A.runKernelFunc(function(x,b){var w=x.batchMatMul(v,g,e,r);return b([v,g]),w},{a:v,b:g},function(x,b){var w=b,N=w[0],I=w[1];return e||r?!e&&r?{a:function(){return x.matMul(I,!1,!1)},b:function(){return x.matMul(N,!0,!1)}}:e&&!r?{a:function(){return I.matMul(x,!1,!0)},b:function(){return N.matMul(x,!1,!1)}}:{a:function(){return I.matMul(x,!0,!0)},b:function(){return x.matMul(N,!0,!0)}}:{a:function(){return x.matMul(I,!1,!0)},b:function(){return N.matMul(x,!0,!1)}}},"BatchMatMul",y).reshape(m)}}),pd=D({dot_:function(n,t){var e=S(n,"t1","dot"),r=S(t,"t2","dot");E(!(e.rank!==1&&e.rank!==2||r.rank!==1&&r.rank!==2),function(){return"Error in dot: inputs must all be rank 1 or 2, but got ranks "+e.rank+" and "+r.rank+"."});var a=e.rank===1?e.size:e.shape[1],o=r.rank===1?r.size:r.shape[0];return E(a===o,function(){return"Error in dot: inner dimensions of inputs must match, but got "+a+" and "+o+"."}),e.rank===1&&r.rank===1?e.as2D(1,-1).matMul(r.as2D(-1,1)).asScalar():e.rank===1&&r.rank===2?e.as2D(1,-1).matMul(r.as2D(r.shape[0],r.shape[1])).as1D():e.rank===2&&r.rank===1?e.matMul(r.as2D(-1,1)).as1D():e.matMul(r.as2D(r.shape[0],r.shape[1]))}}),dd=D({outerProduct_:function(n,t){var e=S(n,"v1","outerProduct"),r=S(t,"v2","outerProduct");return E(e.rank===1&&r.rank===1,function(){return"Error in outerProduct: inputs must be rank 1, but got ranks "+e.rank+" and "+r.rank+"."}),e.as2D(-1,1).matMul(r.as2D(1,-1))}}),an=D({reverse_:function(n,t){var e=S(n,"x","reverse");if(e.rank===0)return e.clone();var r=Ae(t,e.shape);return A.runKernelFunc(function(a){return a.reverse(e,r)},{$x:e},function(a){return{$x:function(){return a.reverse(r)}}}).reshapeAs(e)}}),fd=D({reverse1d_:function(n){var t=S(n,"x","reverse");return E(t.rank===1,function(){return"Error in reverse1D: x must be rank 1 but got rank "+t.rank+"."}),an(t,0)}}),hd=D({reverse2d_:function(n,t){var e=S(n,"x","reverse");return E(e.rank===2,function(){return"Error in reverse2D: x must be rank 2 but got rank "+e.rank+"."}),an(e,t)}}),md=D({reverse3d_:function(n,t){var e=S(n,"x","reverse");return E(e.rank===3,function(){return"Error in reverse3D: x must be rank 3 but got rank "+e.rank+"."}),an(e,t)}}),vd=D({reverse4d_:function(n,t){var e=S(n,"x","reverse");return E(e.rank===4,function(){return"Error in reverse4D: x must be rank 4 but got rank "+e.rank+"."}),an(e,t)}});function gd(n,t,e,r,a,o){var i=S(n,"x","maxPool"),s=i,u=!1;i.rank===3&&(u=!0,s=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),r==null&&(r=[1,1]),E(s.rank===4,function(){return"Error in maxPool: input must be rank 4 but got rank "+s.rank+"."}),E(Be(e,r),function(){return"Error in maxPool: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+r+"'"}),o!=null&&E(Ne(a),function(){return"Error in maxPool: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+a+"."});var c=en(s.shape,t,e,r,a,o);if(c.filterWidth===1&&c.filterHeight===1&&Te(c.inShape,c.outShape))return i.clone();var l=[s],p=A.runKernelFunc(function(d,f){var h=d.maxPool(s,c);return f([s,h]),h},{x:s},function(d,f){var h=f[0],m=f[1];return{x:function(){return function(v,g,y,x,b,w,N,I){var R=S(v,"dy","maxPoolBackprop"),k=S(g,"input","maxPoolBackprop"),T=S(y,"output","maxPoolBackprop");E(k.rank===R.rank,function(){return"Rank of input ("+k.rank+") does not match rank of dy ("+R.rank+")"}),w==null&&(w=[1,1]),E(Be(b,w),function(){return"Error in maxPoolBackProp: Either strides or dilations must be 1. Got strides "+b+" and dilations '"+w+"'"}),E(R.rank===4,function(){return"Error in maxPoolBackprop: dy must be rank 4 but got rank "+R.rank+"."}),E(k.rank===4,function(){return"Error in maxPoolBackprop: input must be rank 4 but got rank "+k.rank+"."}),I!=null&&E(Ne(N),function(){return"Error in maxPoolBackprop: pad must be an integer when using, dimRoundingMode "+I+" but got pad "+N+"."});var O=en(k.shape,x,b,w,N,I);return A.runKernelFunc(function(_){return _.maxPoolBackprop(R,k,T,O)},{$dy:R,$input:k})}(d,h,m,t,e,r,a)}}},"MaxPool",c,l);return u?p.as3D(p.shape[1],p.shape[2],p.shape[3]):p}function yd(n,t,e,r,a,o){var i=S(n,"x","avgPool","float32");r==null&&(r=[1,1]),E(Be(e,r),function(){return"Error in avgPool: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+r+"'"});var s=i,u=!1;i.rank===3&&(u=!0,s=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),E(s.rank===4,function(){return"Error in avgPool: x must be rank 4 but got rank "+s.rank+"."}),o!=null&&E(Ne(a),function(){return"Error in avgPool: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+a+"."});var c=en(s.shape,t,e,r,a,o);if(c.filterWidth===1&&c.filterHeight===1&&Te(c.inShape,c.outShape))return i.clone();var l=A.runKernelFunc(function(p){return p.avgPool(s,c)},{x:s},function(p){return{x:function(){return function(d,f,h,m,v,g){var y=S(d,"dy","avgPoolBackprop"),x=S(f,"input","avgPoolBackprop");E(x.rank===y.rank,function(){return"Rank of input ("+x.rank+") does not match rank of dy ("+y.rank+")"}),v==null&&(v=[1,1]),E(Be(m,v),function(){return"Error in avgPoolBackprop: Either strides or dilations must be 1. Got strides "+m+" and dilations '"+v+"'"});var b=x,w=y,N=!1;x.rank===3&&(N=!0,b=x.as4D(1,x.shape[0],x.shape[1],x.shape[2]),w=y.as4D(1,y.shape[0],y.shape[1],y.shape[2])),E(w.rank===4,function(){return"Error in avgPoolBackprop: dy must be rank 4 but got rank "+w.rank+"."}),E(b.rank===4,function(){return"Error in avgPoolBackprop: input must be rank 4 but got rank "+b.rank+"."});var I=en(b.shape,h,m,v,g),R=A.runKernelFunc(function(k){return k.avgPoolBackprop(w,b,I)},{dy4D:w,input4D:b});return N?R.as3D(R.shape[1],R.shape[2],R.shape[3]):R}(p,s,t,e,r,a)}}},"AvgPool",c);return l=l.cast(i.dtype),u?l.as3D(l.shape[1],l.shape[2],l.shape[3]):l}var Gs=D({maxPool_:function(n,t,e,r,a){return gd(n,t,e,1,r,a)}}),Hs=D({avgPool_:function(n,t,e,r,a){return yd(n,t,e,1,r,a)}}),xd=D({pool_:function(n,t,e,r,a,o){a==null&&(a=[1,1]),o==null&&(o=1),r===0&&(r="valid");var i=S(n,"x","maxPool"),s=i,u=!1;i.rank===3&&(u=!0,s=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),E(Be(o,a),function(){return"Error in pool: Either strides or dilations must be 1. Got strides "+o+" and dilations '"+a+"'"});var c,l=en(s.shape,t,o,a,r),p=[l.dilationHeight,l.dilationWidth];c=r==="same"?function(b,w){var N=b.map(function(k,T){return k+(k-1)*(w[T]-1)}).map(function(k){return k-1}),I=N.map(function(k){return Math.floor(k/2)}),R=N.map(function(k,T){return k-I[T]});return N.map(function(k,T){return[I[T],R[T]]})}([l.filterHeight,l.filterWidth],p):[[0,0],[0,0]];var d=p[0]===1&&p[1]===1,f=function(b,w,N){var I=N.map(function(L){return L[0]}),R=N.map(function(L){return L[1]}),k=b.concat(I,R),T=w.map(function(L,B){return(L-k[B]%L)%L}),O=R.map(function(L,B){return L+T[B]}),_=w.map(function(L,B){return[I[B],O[B]]}),V=w.map(function(L,B){return[0,T[B]]});return[_,V]}([l.inHeight,l.inWidth],p,c),h=f[0],m=f[1],v=d?r:"valid",g=d?s:Ia(s,p,h),y=(e==="avg"?function(){return yd(g,t,o,1,v)}:function(){return gd(g,t,o,1,v)})(),x=d?y:Ea(y,p,m);return u?x.as3D(x.shape[1],x.shape[2],x.shape[3]):x}}),qs=D({maxPool3d_:function(n,t,e,r,a,o,i){o===void 0&&(o="NDHWC");var s=S(n,"x","maxPool3d"),u=s,c=!1;s.rank===4&&(c=!0,u=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3])),i==null&&(i=[1,1,1]),E(u.rank===5,function(){return"Error in maxPool3d: x must be rank 5 but got rank "+u.rank+"."}),E(o==="NDHWC",function(){return"Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of "+o}),E(Be(e,i),function(){return"Error in maxPool3d: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+i+"'"}),a!=null&&E(Ne(r),function(){return"Error in maxPool3d: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+r+"."});var l=br(u.shape,t,e,i,r,a,o),p=A.runKernelFunc(function(d,f){var h=d.maxPool3d(u,l);return f([u,h]),h},{x:u},function(d,f){var h=f[0],m=f[1];return{x:function(){return function(v,g,y,x,b,w,N,I){var R=S(v,"dy","maxPool3dBackprop"),k=S(g,"input","maxPool3dBackprop"),T=S(y,"output","maxPool3dBackprop"),O=R,_=k,V=T,L=!1;k.rank===4&&(L=!0,O=R.as5D(1,R.shape[0],R.shape[1],R.shape[2],R.shape[3]),_=k.as5D(1,k.shape[0],k.shape[1],k.shape[2],k.shape[3]),V=T.as5D(1,T.shape[0],T.shape[1],T.shape[2],T.shape[3])),E(O.rank===5,function(){return"Error in maxPool3dBackprop: dy must be rank 5 but got rank "+O.rank+"."}),E(_.rank===5,function(){return"Error in maxPool3dBackprop: input must be rank 5 but got rank "+_.rank+"."}),E(V.rank===5,function(){return"Error in maxPool3dBackprop: output must be rank 5 but got rank "+V.rank+"."}),w==null&&(w=[1,1,1]),E(Be(b,w),function(){return"Error in maxPool3dBackprop: Either strides or dilations must be 1. Got strides "+b+" and dilations '"+w+"'"}),I!=null&&E(Ne(N),function(){return"Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode "+I+" but got pad "+N+"."});var B=br(_.shape,x,b,w,N,I),z=A.runKernelFunc(function(U){return U.maxPool3dBackprop(O,_,V,B)},{dy5D:O,input5D:_});return L?z.as4D(z.shape[1],z.shape[2],z.shape[3],z.shape[4]):z}(d,h,m,t,e,i,r,a)}}});return c?p.as4D(p.shape[1],p.shape[2],p.shape[3],p.shape[4]):p}}),js=D({avgPool3d_:function(n,t,e,r,a,o,i){o===void 0&&(o="NDHWC");var s=S(n,"x","avgPool3d","float32"),u=s,c=!1;s.rank===4&&(c=!0,u=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3])),i==null&&(i=[1,1,1]),E(u.rank===5,function(){return"Error in avgPool3d: x must be rank 5 but got rank "+u.rank+"."}),E(o==="NDHWC",function(){return"Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of "+o}),E(Be(e,i),function(){return"Error in avgPool3d: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+i+"'"}),a!=null&&E(Ne(r),function(){return"Error in avgPool3d: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+r+"."});var l=br(u.shape,t,e,i,r,a,o),p=A.runKernelFunc(function(d){return d.avgPool3d(u,l)},{x:u},function(d){return{x:function(){return function(f,h,m,v,g,y,x){var b=S(f,"dy","avgPool3dBackprop"),w=S(h,"input","avgPool3dBackprop"),N=b,I=w,R=!1;w.rank===4&&(R=!0,N=b.as5D(1,b.shape[0],b.shape[1],b.shape[2],b.shape[3]),I=w.as5D(1,w.shape[0],w.shape[1],w.shape[2],w.shape[3])),E(N.rank===5,function(){return"Error in avgPool3dBackprop: dy must be rank 5 but got rank "+N.rank+"."}),E(I.rank===5,function(){return"Error in avgPool3dBackprop: input must be rank 5 but got rank "+I.rank+"."}),g==null&&(g=[1,1,1]),E(Be(v,g),function(){return"Error in avgPool3dBackprop: Either strides or dilations must be 1. Got strides "+v+" and dilations '"+g+"'"}),x!=null&&E(Ne(y),function(){return"Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode "+x+" but got pad "+y+"."});var k=br(I.shape,m,v,g,y,x),T=A.runKernelFunc(function(O){return O.avgPool3dBackprop(N,I,k)},{dy5D:N,input5D:I});return R?T.as4D(T.shape[1],T.shape[2],T.shape[3],T.shape[4]):T}(d,u,t,e,i,r,a)}}});return p=p.cast(u.dtype),c?p.as4D(p.shape[1],p.shape[2],p.shape[3],p.shape[4]):p}}),Ks=D({maxPoolWithArgmax_:function(n,t,e,r,a){a===void 0&&(a=!1);var o=S(n,"x","maxPoolWithArgmax"),i={filterSize:t,strides:e,pad:r,includeBatchInIndex:a},s=A.runKernel("MaxPoolWithArgmax",{x:o},i);return{result:s[0],indexes:s[1]}}}),lt=D({slice_:function(n,t,e){var r,a,o=S(n,"x","slice");if(o.rank===0)throw new Error("Slicing scalar is not possible");(r=typeof t=="number"?[t].concat(new Array(o.rank-1).fill(0)):t.length<o.rank?t.concat(new Array(o.rank-t.length).fill(0)):t.slice()).forEach(function(u){E(u!==-1,function(){return"slice() does not support negative begin indexing."})}),a=(a=e==null?new Array(o.rank).fill(-1):typeof e=="number"?[e].concat(new Array(o.rank-1).fill(-1)):e.length<o.rank?e.concat(new Array(o.rank-e.length).fill(-1)):e).map(function(u,c){return u>=0?u:(E(u===-1,function(){return"Negative size values should be exactly -1 but got "+u+" for the slice() size at index "+c+"."}),o.shape[c]-r[c])}),Kl(o,r,a);var i=o.shape,s={begin:r,size:a};return A.runKernelFunc(function(u){return u.slice(o,r,a)},{x:o},function(u){for(var c=[],l=0;l<u.rank;l++)c.push([r[l],i[l]-r[l]-a[l]]);return{x:function(){return zt(u,c)}}},"Slice",s)}}),bd=D({slice1d_:function(n,t,e){var r=S(n,"x","slice1d");return E(r.rank===1,function(){return"slice1d expects a rank-1 tensor, but got a rank-"+r.rank+" tensor"}),lt(r,[t],[e])}}),wd=D({slice2d_:function(n,t,e){var r=S(n,"x","slice2d");return E(r.rank===2,function(){return"slice2d expects a rank-2 tensor, but got a rank-"+r.rank+" tensor"}),lt(r,t,e)}}),Cd=D({slice3d_:function(n,t,e){var r=S(n,"x","slice3d");return E(r.rank===3,function(){return"slice3d expects a rank-3 tensor, but got a rank-"+r.rank+" tensor"}),lt(r,t,e)}}),Nd=D({slice4d_:function(n,t,e){var r=S(n,"x","slice4d");return E(r.rank===4,function(){return"slice4d expects a rank-4 tensor, but got a rank-"+r.rank+" tensor"}),lt(r,t,e)}});function Sd(n,t,e,r,a){return t.rank<e.rank&&(t=t.reshape(ze(t.shape,r))),n.rank<e.rank&&(n=n.reshape(ze(n.shape,r))),{x:function(){var o=n.mul(e.equal(t).cast(n.dtype));return a==null?o:o.transpose(a)}}}var Xs=D({all_:function(n,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var r=S(n,"x","all","bool"),a=Ae(t,r.shape),o=a,i=dt(o,r.rank);i!=null&&(r=r.transpose(i),o=ft(o.length,r.rank));var s=A.runKernelFunc(function(c){return c.all(r,o)},{$x:r});if(e){var u=ze(s.shape,a);return s.reshape(u)}return s}}),$s=D({any_:function(n,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var r=S(n,"x","any","bool"),a=Ae(t,r.shape),o=a,i=dt(o,r.rank);i!=null&&(r=r.transpose(i),o=ft(o.length,r.rank));var s=A.runKernelFunc(function(c){return c.any(r,o)},{$x:r});if(e){var u=ze(s.shape,a);return s.reshape(u)}return s}}),Ha=D({argMax_:function(n,t){t===void 0&&(t=0);var e=S(n,"x","argMax");t==null&&(t=0);var r=Ae(t,e.shape),a=dt(r,e.rank);a!=null&&(e=e.transpose(a),r=ft(r.length,e.rank));var o={axis:r[0]},i=[e];return A.runKernelFunc(function(s,u){var c=s.argMax(e,r[0]);return u([e]),c},{x:e},function(s,u){var c=u[0];return{x:function(){return ue(c)}}},"ArgMax",o,i)}}),Ys=D({argMin_:function(n,t){t===void 0&&(t=0);var e=S(n,"x","argMin");t==null&&(t=0);var r=Ae(t,e.shape),a=dt(r,e.rank);return a!=null&&(e=e.transpose(a),r=ft(r.length,e.rank)),A.runKernelFunc(function(o,i){var s=o.argMin(e,r[0]);return i([e]),s},{$x:e},function(o,i){var s=i[0];return{$x:function(){return ue(s)}}})}}),Ed=D({logSumExp_:function(n,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var r=S(n,"x","logSumExp"),a=Ae(t,r.shape),o=r.max(a,!0),i=r.sub(o).exp().sum(a).log(),s=o.reshape(i.shape).add(i);if(e){var u=ze(s.shape,a);return s.reshape(u)}return s}}),Qs=D({max_:function(n,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var r=S(n,"x","max"),a=r,o=Ae(t,r.shape),i=o,s=dt(i,r.rank);s!=null&&(r=r.transpose(s),i=ft(i.length,r.rank));var u=[r],c=A.runKernelFunc(function(p,d){var f=p.max(r,i);return d([a,f]),f},{x:r},function(p,d){return Sd(p,d[1],d[0],o,s)},"Max",{axes:i},u,[!0]);if(e){var l=ze(c.shape,o);c=c.reshape(l)}return c}}),Js=D({mean_:function(n,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var r=S(n,"x","mean"),a=Ae(t,r.shape),o=$(_e(r.shape,a)[1]);return Dr(function(i){var s=j(o);return{value:(s.dtype===i.dtype?i:i.cast(s.dtype)).div(s).sum(t,e),gradFunc:function(u){var c=i.shape.slice();return a.forEach(function(l){c[l]=1}),u.reshape(c).mul(nn(i.shape,"float32")).div(o)}}})(r)}}),Zs=D({min_:function(n,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var r=S(n,"x","min"),a=r,o=Ae(t,r.shape),i=o,s=dt(i,r.rank);s!=null&&(r=r.transpose(s),i=ft(i.length,r.rank));var u=[r],c=A.runKernelFunc(function(p,d){var f=p.min(r,i);return d([a,f]),f},{x:r},function(p,d){return Sd(p,d[1],d[0],o,s)},"Min",{axes:i},u,[!0]);if(e){var l=ze(c.shape,o);c=c.reshape(l)}return c}}),Id=D({moments_:function(n,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var r=Ae(t,(n=S(n,"x","moments")).shape),a=n.mean(r,e),o=a.shape;e||(o=ze(a.shape,r));var i=n.toFloat().sub(a.reshape(o)).square();return{mean:a,variance:i.mean(r,e)}}}),xt=D({sum_:function(n,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var r=S(n,"x","sum");r.dtype==="bool"&&(r=r.toInt());var a=Ae(t,r.shape);return Dr(function(o){var i=dt(a,o.rank),s=a,u=o;i!=null&&(u=o.transpose(i),s=ft(s.length,o.rank));var c=function(f){var h=o.shape.slice();return a.forEach(function(m){h[m]=1}),f.reshape(h).mul(nn(o.shape,"float32"))},l={axes:s},p=A.runKernelFunc(function(f){return f.sum(u,s)},{x:u},function(f){return{x:function(){return c(f)}}},"Sum",l);if(e){var d=ze(p.shape,a);p=p.reshape(d)}return{value:p,gradFunc:c}})(r)}}),qa=D({prod_:function(n,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var r=S(n,"x","prod");r.dtype==="bool"&&(r=r.toInt());var a=Ae(t,r.shape),o=dt(a,r.rank),i=a,s=r;o!=null&&(s=r.transpose(o),i=ft(i.length,r.rank));var u=A.runKernelFunc(function(l){return l.prod(s,i)},{permutedX:s});if(e){var c=ze(u.shape,a);u=u.reshape(c)}return u}}),ja=D({elu_:function(n){var t=S(n,"x","elu");return A.runKernelFunc(function(e,r){var a=e.elu(t);return r([a]),a},{$x:t},function(e,r){var a=r[0];return{$x:function(){return A.runKernelFunc(function(o){return o.eluDer(e,a)},{dy:e,y:a})}}})}}),eu=D({leakyRelu_:function(n,t){t===void 0&&(t=.2);var e=S(n,"x","leakyRelu");return Ar(j(t).mul(e),e)}}),Ka=D({prelu_:function(n,t){var e=S(n,"x","prelu"),r=S(t,"alpha","prelu");return A.runKernelFunc(function(a,o){var i=a.prelu(e,r);return o([e,r]),i},{x:e,alpha:r},function(a,o){var i=o[0],s=o[1],u=i.greater(0);return{x:function(){return Lt(u,a,a.mul(s))},alpha:function(){var c=Lt(u,ue(a),a.mul(i)),l=ke(s.shape,a.shape);return l.length>0&&(c=c.sum(l)),c.reshape(s.shape)}}},"Prelu")}}),Xa=D({relu_:function(n){var t=S(n,"x","relu");return t.dtype==="bool"?t.toInt():A.runKernelFunc(function(e,r){var a=e.relu(t);return r([t]),a},{x:t},function(e,r){var a=r[0];return{x:function(){return e.mulStrict(a.step().toFloat())}}},"Relu")}}),tu=D({relu6_:function(n){var t=S(n,"x","relu6");return t.dtype==="bool"?t.toInt():A.runKernelFunc(function(e,r){var a=e.relu6(t);return r([t]),a},{x:t},function(e,r){var a=r[0],o=a.lessEqual(6).mul(a.step());return{x:function(){return e.mulStrict(o.toFloat())}}},"Relu6")}}),nu=D({selu_:function(n){var t=S(n,"x","selu");return A.runKernelFunc(function(e,r){var a=e.selu(t);return r([t]),a},{$x:t},function(e,r){var a=r[0];return{$x:function(){var o=a.greater(j(0)),i=j(Is),s=j(Rs),u=e.mul(s),c=e.mul(i).mul(a.toFloat().exp());return Lt(o,u,c)}}})}}),ru=D({localResponseNormalization_:function(n,t,e,r,a){t===void 0&&(t=5),e===void 0&&(e=1),r===void 0&&(r=1),a===void 0&&(a=.5);var o=S(n,"x","localResponseNormalization");E(o.rank===4||o.rank===3,function(){return`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank `+o.rank+"."}),E(Ne(t),function(){return"Error in localResponseNormalization: depthRadius must be an integer but got depthRadius "+t+"."});var i=o,s=!1;o.rank===3&&(s=!0,i=o.as4D(1,o.shape[0],o.shape[1],o.shape[2]));var u=A.runKernelFunc(function(c,l){var p=c.localResponseNormalization4D(i,t,e,r,a);return l([i,p]),p},{x4D:i},function(c,l){var p=l[0],d=l[1];return{x4D:function(){return A.runKernelFunc(function(f){return f.LRNGrad(c,p,d,t,e,r,a)},{})}}});return s?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),au=D({norm_:function(n,t,e,r){t===void 0&&(t="euclidean"),e===void 0&&(e=null),r===void 0&&(r=!1);var a=function s(u,c,l){if(l===void 0&&(l=null),u.rank===0)return u.abs();if(u.rank!==1&&l===null)return s(u.reshape([-1]),c,l);if(u.rank===1||typeof l=="number"||Array.isArray(l)&&l.length===1){if(c===1)return u.abs().sum(l);if(c===1/0)return u.abs().max(l);if(c===-1/0)return u.abs().min(l);if(c==="euclidean"||c===2)return u.abs().pow(j(2,"int32")).sum(l).sqrt();throw new Error("Error in norm: invalid ord value: "+c)}if(Array.isArray(l)&&l.length===2){if(c===1)return u.abs().sum(l[0]).max(l[1]-1);if(c===1/0)return u.abs().sum(l[1]).max(l[0]);if(c===-1/0)return u.abs().sum(l[1]).min(l[0]);if(c==="fro"||c==="euclidean")return u.square().sum(l).sqrt();throw new Error("Error in norm: invalid ord value: "+c)}throw new Error("Error in norm: invalid axis: "+l)}(n=S(n,"x","norm"),t,e),o=a.shape;if(r){var i=Ae(e,n.shape);o=ze(a.shape,i)}return a.reshape(o)}}),Rd=D({basicLSTMCell_:function(n,t,e,r,a,o){var i=S(n,"forgetBias","basicLSTMCell"),s=S(t,"lstmKernel","basicLSTMCell"),u=S(e,"lstmBias","basicLSTMCell"),c=S(r,"data","basicLSTMCell"),l=S(a,"c","basicLSTMCell"),p=S(o,"h","basicLSTMCell"),d=c.concat(p,1).matMul(s).add(u),f=d.shape[0],h=d.shape[1]/4,m=[f,h],v=d.slice([0,0],m),g=d.slice([0,h],m),y=d.slice([0,2*h],m),x=d.slice([0,3*h],m),b=v.sigmoid().mulStrict(g.tanh()).addStrict(l.mulStrict(i.add(y).sigmoid())),w=b.tanh().mulStrict(x.sigmoid());return[b,w]}}),kd=D({multiRNNCell_:function(n,t,e,r){for(var a=S(t,"data","multiRNNCell"),o=yr(e,"c","multiRNNCell"),i=yr(r,"h","multiRNNCell"),s=a,u=[],c=0;c<n.length;c++){var l=n[c](s,o[c],i[c]);u.push(l[0]),u.push(l[1]),s=l[1]}var p=[],d=[];for(c=0;c<u.length;c+=2)p.push(u[c]),d.push(u[c+1]);return[p,d]}}),Td=D({movingAverage_:function(n,t,e,r,a){a===void 0&&(a=!0);var o=S(n,"v","movingAverage"),i=S(t,"x","movingAverage"),s=S(e,"decay","movingAverage");Uc(o,i),E(Te(o.shape,i.shape),function(){return"Shape mismatch in v and x"});var u=j(1),c=u.sub(s),l=i.sub(o).mul(c);if(a){E(r!=null,function(){return"When using zeroDebias: true, step is required."});var p=S(r,"step","movingAverage");l=l.div(u.sub(Hn(s,p)))}return o.add(l)}}),ou=D({stridedSlice_:function(n,t,e,r,a,o,i,s,u){if(a===void 0&&(a=0),o===void 0&&(o=0),i===void 0&&(i=0),s===void 0&&(s=0),u===void 0&&(u=0),r==null&&(r=new Array(t.length)),i!==0)throw new Error("ellipsis mask is not yet supported");var c=S(n,"x","stridedSlice"),l=Ko(s),p=c.shape.slice();l.forEach(function(v){t[v]=0,e[v]=1,p.splice(v,0,1)}),c=c.reshape(p);for(var d=0;d<c.rank;d++)t[d]=Xl(a,t,r,c.shape,d),e[d]=$l(o,e,r,c.shape,d),r[d]=r[d]||1;var f=Ko(u);f.forEach(function(v){e[v]=t[v]+1,r[v]=1});var h=Aa(t,e,r),m=h.filter(function(v,g){return f.indexOf(g)===-1});return r.every(function(v){return v===1})?lt(c,t,h).reshape(m):A.runKernelFunc(function(v){return v.stridedSlice(c,t,e,r)},{$x:c}).reshape(m)}}),iu=D({topk_:function(n,t,e){t===void 0&&(t=1),e===void 0&&(e=!0);var r=S(n,"x","topk");if(r.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");var a=r.shape[r.shape.length-1];if(t>a)throw new Error("'k' passed to topk() must be <= the last dimension ("+a+") but got "+t);var o=A.runKernelFunc(function(i){return i.topk(r,t,e)},{$x:r});return{values:o[0],indices:o[1]}}}),su=D({scatterND_:function(n,t,e){var r=S(n,"indices","scatterND","int32"),a=S(t,"updates","scatterND");return jl(a,r,e),A.runKernelFunc(function(o){return o.scatterND(r,a,e)},{indices:r,updates:a},null,"ScatterNd",{shape:e})}}),Pr=D({fft_:function(n){E(n.dtype==="complex64",function(){return"The dtype for tf.spectral.fft() must be complex64 but got "+n.dtype+"."});var t=n.shape[n.shape.length-1],e=n.size/t,r=n.as2D(e,t);return A.runKernelFunc(function(a){return a.fft(r)},{input:n}).reshape(n.shape)}}),qn=D({ifft_:function(n){E(n.dtype==="complex64",function(){return"The dtype for tf.spectral.ifft() must be complex64 but got "+n.dtype+"."});var t=n.shape[n.shape.length-1],e=n.size/t,r=n.as2D(e,t);return A.runKernelFunc(function(a){return a.ifft(r)},{input:n}).reshape(n.shape)}}),Br=D({rfft_:function(n,t){E(n.dtype==="float32",function(){return"The dtype for rfft() must be real value but got "+n.dtype});var e,r=n.shape[n.shape.length-1],a=n.size/r;if(t!=null&&t<r){var o=n.shape.map(function(g){return 0}),i=n.shape.map(function(g){return g});i[n.shape.length-1]=t,e=n.slice(o,i),r=t}else if(t!=null&&t>r){var s=n.shape.map(function(g){return g});s[n.shape.length-1]=t-r,e=n.concat(xe(s),n.shape.length-1),r=t}else e=n;var u=e.zerosLike(),c=De(e,u).as2D(a,r),l=Pr(c),p=Math.floor(r/2)+1,d=He(l),f=rt(l),h=d.split([p,r-p],d.shape.length-1),m=f.split([p,r-p],f.shape.length-1),v=e.shape.slice();return v[e.shape.length-1]=p,De(h[0],m[0]).reshape(v)}}),$a=D({irfft_:function(n){var t=n.shape[n.shape.length-1],e=n.size/t;if(t<=2){var r=n.as2D(e,t),a=qn(r);return He(a)}var o=[e,2*(t-1)],i=He(n).as2D(e,t),s=rt(n).as2D(e,t),u=i.slice([0,1],[e,t-2]).reverse(1),c=s.slice([0,1],[e,t-2]).reverse(1).mul(j(-1)),l=i.concat(u,1),p=s.concat(c,1);return r=De(l,p).as2D(o[0],o[1]),a=qn(r),He(a)}}),Ad=Object.freeze({fft:Pr,ifft:qn,rfft:Br,irfft:$a}),Ya=D({sparseToDense_:function(n,t,e,r){r===void 0&&(r=0);var a=S(n,"sparseIndices","sparseToDense","int32"),o=S(t,"sparseValues","sparseToDense"),i=S(r,"defaultValue","sparseToDense",o.dtype);return function(s,u,c,l){if(s.dtype!=="int32")throw new Error("tf.sparseToDense() expects the indices to be int32 type, but the dtype was "+s.dtype+".");if(s.rank>2)throw new Error("sparseIndices should be a scalar, vector, or matrix, but got shape "+s.shape+".");var p=s.rank>0?s.shape[0]:1,d=s.rank>1?s.shape[1]:1;if(c.length!==d)throw new Error("outputShape has incorrect number of elements:, "+c.length+", should be: "+d+".");var f=u.size;if(u.rank!==0&&(u.rank!==1||f!==p))throw new Error("sparseValues has incorrect shape "+u.shape+", should be [] or ["+p+"]");if(u.dtype!==l.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}(a,o,e,i),A.runKernelFunc(function(s){return s.sparseToDense(a,o,e,i)},{$sparseIndices:a,$sparseValues:o,$defaultValue:i})}}),uu=D({gatherND_:function(n,t){var e=S(t,"indices","gatherND","int32"),r=S(n,"x","gatherND");return A.runKernelFunc(function(a){return a.gatherND(r,e)},{x:r,indices:e},null,"GatherNd")}}),Dd=D({diag_:function(n){var t=S(n,"x","diag").flatten(),e=n.shape.concat(n.shape);return A.runKernelFunc(function(r){return r.diag(t)},{$x:t}).reshape(e)}}),Od=D({dropout_:function(n,t,e,r){var a=S(n,"x","dropout");if(E(a.dtype==="float32",function(){return"x has to be a floating point tensor since it's going to be scaled, but got a "+a.dtype+" tensor instead."}),E(t>=0&&t<1,function(){return"rate must be a float in the range [0, 1), but got "+t+"."}),t===0)return n instanceof me?a.clone():a;var o=function(u,c){if(c==null)return u.shape.slice();if(Te(u.shape,c))return c;if(u.shape.length===c.length){for(var l=[],p=0;p<u.shape.length;p++)c[p]==null&&u.shape[p]!=null?l.push(u.shape[p]):l.push(c[p]);return l}return c}(a,e),i=1-t,s=Va(o,0,1,"float32",r).add(i).floor().div(i);return a.mul(s)}});function _d(n,t,e){for(var r=1-n%2,a=new Float32Array(n),o=0;o<n;++o){var i=2*Math.PI*o/(n+r-1);a[o]=t-e*Math.cos(i)}return Bt(a,"float32")}var Qa=D({hannWindow_:function(n){return _d(n,.5,.5)}}),cu=D({hammingWindow_:function(n){return _d(n,.54,.46)}}),Ja=D({frame_:function(n,t,e,r,a){r===void 0&&(r=!1),a===void 0&&(a=0);for(var o=0,i=[];o+t<=n.size;)i.push(lt(n,o,t)),o+=e;if(r)for(;o<n.size;){var s=o+t-n.size,u=tt([lt(n,o,t-s),Sr([s],a)]);i.push(u),o+=e}return i.length===0?mn([],[0,t]):tt(i).as2D(i.length,t)}}),lu=D({stft_:function(n,t,e,r,a){var o;a===void 0&&(a=Qa),r==null&&(o=t,r=Math.floor(Math.pow(2,Math.ceil(Math.log(o)/Math.log(2)))));for(var i=Ja(n,t,e),s=ye(i,a(t)),u=[],c=0;c<i.shape[0];c++)u.push(Br(s.slice([c,0],[1,t]),r));return tt(u)}}),Fd=Object.freeze({hannWindow:Qa,hammingWindow:cu,frame:Ja,stft:lu}),Me,Md=function(n,t,e){return e===void 0&&(e=1),Y(this,void 0,void 0,function(){var r,a,o,i,s,u,c,l,p,d,f,h,m,v;return Q(this,function(g){switch(g.label){case 0:return r=S(n,"predictions","inTopK"),a=S(t,"targets","inTopK"),E(r.rank>1,function(){return"inTopK() expects the predictions to be of rank 2 or higher, but got "+r.rank}),E(r.rank-1===a.rank,function(){return"predictions rank should be 1 larger than targets rank, but got predictions rank "+r.rank+" and targets rank "+a.rank}),fe(r.shape.slice(0,r.shape.length-1),a.shape,"predictions's shape should be align with the targets' shape, except the last dimension."),o=r.shape[r.shape.length-1],E(e>0&&e<=o,function(){return"'k' passed to inTopK() must be > 0 && <= the predictions last dimension ("+o+"), but got "+e}),[4,r.data()];case 1:return i=g.sent(),[4,a.data()];case 2:for(s=g.sent(),u=[i.length/o,o],l=u[1],p=vn("bool",c=u[0]),d=0;d<c;d++){for(f=d*l,h=i.subarray(f,f+l),m=[],v=0;v<h.length;v++)m.push({value:h[v],index:v});for(m.sort(function(y,x){return x.value-y.value}),p[d]=0,v=0;v<e;v++)if(m[v].index===s[d]){p[d]=1;break}}return n!==r&&r.dispose(),t!==a&&a.dispose(),[2,Re(p,a.shape,"bool")]}})})};(function(n){n[n.NONE=0]="NONE",n[n.MEAN=1]="MEAN",n[n.SUM=2]="SUM",n[n.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"})(Me||(Me={}));var ov=D({absoluteDifference_:function(n,t,e,r){r===void 0&&(r=Me.SUM_BY_NONZERO_WEIGHTS);var a=S(n,"labels","absoluteDifference"),o=S(t,"predictions","absoluteDifference"),i=null;e!=null&&(i=S(e,"weights","absoluteDifference")),fe(a.shape,o.shape,"Error in absoluteDifference: ");var s=a.sub(o).abs();return Ut(s,i,r)}}),Ut=D({computeWeightedLoss_:function(n,t,e){e===void 0&&(e=Me.SUM_BY_NONZERO_WEIGHTS);var r=S(n,"losses","computeWeightedLoss"),a=null;t!=null&&(a=S(t,"weights","computeWeightedLoss"));var o=a==null?r:r.mul(a);if(e===Me.NONE)return o;if(e===Me.SUM)return o.sum();if(e===Me.MEAN){if(a==null)return o.mean();var i=r.size/a.size,s=o.sum().div(a.sum());return i>1?s.div(j(i)):s}if(e===Me.SUM_BY_NONZERO_WEIGHTS){if(a==null)return o.sum().div(j(r.size));var u=a.mul(nn(r.shape)).notEqual(j(0)).sum().toFloat();return o.sum().div(u)}throw Error("Unknown reduction: "+e)}}),iv=D({cosineDistance_:function(n,t,e,r,a){a===void 0&&(a=Me.SUM_BY_NONZERO_WEIGHTS);var o=S(n,"labels","cosineDistance"),i=S(t,"predictions","cosineDistance"),s=null;r!=null&&(s=S(r,"weights","cosineDistance")),fe(o.shape,i.shape,"Error in cosineDistance: ");var u=j(1).sub(o.mul(i).sum(e,!0));return Ut(u,s,a)}}),sv=D({hingeLoss_:function(n,t,e,r){r===void 0&&(r=Me.SUM_BY_NONZERO_WEIGHTS);var a=S(n,"labels","hingeLoss"),o=S(t,"predictions","hingeLoss"),i=null;e!=null&&(i=S(e,"weights","hingeLoss")),fe(a.shape,o.shape,"Error in hingeLoss: ");var s=j(1);a=j(2).mul(a).sub(s);var u=s.sub(a.mul(o)).relu();return Ut(u,i,r)}}),uv=D({huberLoss_:function(n,t,e,r,a){r===void 0&&(r=1),a===void 0&&(a=Me.SUM_BY_NONZERO_WEIGHTS);var o=S(n,"labels","huberLoss"),i=S(t,"predictions","huberLoss"),s=null;e!=null&&(s=S(e,"weights","huberLoss")),fe(o.shape,i.shape,"Error in huberLoss: ");var u=j(r),c=i.sub(o).abs(),l=Ta(c,u),p=c.sub(l),d=j(.5).mul(l.square()).add(u.mul(p));return Ut(d,s,a)}}),cv=D({logLoss_:function(n,t,e,r,a){r===void 0&&(r=1e-7),a===void 0&&(a=Me.SUM_BY_NONZERO_WEIGHTS);var o=S(n,"labels","logLoss"),i=S(t,"predictions","logLoss"),s=null;e!=null&&(s=S(e,"weights","logLoss")),fe(o.shape,i.shape,"Error in logLoss: ");var u=j(1),c=j(r),l=o.mul(i.add(c).log()).neg().sub(u.sub(o).mul(u.sub(i).add(c).log()));return Ut(l,s,a)}}),lv=D({meanSquaredError_:function(n,t,e,r){r===void 0&&(r=Me.SUM_BY_NONZERO_WEIGHTS);var a=S(n,"labels","meanSquaredError"),o=S(t,"predictions","meanSquaredError"),i=null;e!=null&&(i=S(e,"weights","meanSquaredError")),fe(a.shape,o.shape,"Error in meanSquaredError: ");var s=a.squaredDifference(o);return Ut(s,i,r)}}),pv=D({sigmoidCrossEntropy_:function(n,t,e,r,a){r===void 0&&(r=0),a===void 0&&(a=Me.SUM_BY_NONZERO_WEIGHTS);var o=S(n,"multiClassLabels","sigmoidCrossEntropy"),i=S(t,"logits","sigmoidCrossEntropy"),s=null;if(e!=null&&(s=S(e,"weights","sigmoidCrossEntropy")),fe(o.shape,i.shape,"Error in sigmoidCrossEntropy: "),r>0){var u=j(r),c=j(1),l=j(.5);o=o.mul(c.sub(u)).add(l.mul(u))}var p=function(d,f){var h=S(d,"labels","sigmoidCrossEntropyWithLogits"),m=S(f,"logits","sigmoidCrossEntropyWithLogits");fe(h.shape,m.shape,"Error in sigmoidCrossEntropyWithLogits: ");var v=m.relu(),g=m.mul(h),y=m.abs().neg().exp().log1p();return v.sub(g).add(y)}(o,i);return Ut(p,s,a)}}),dv=D({softmaxCrossEntropy_:function(n,t,e,r,a){r===void 0&&(r=0),a===void 0&&(a=Me.SUM_BY_NONZERO_WEIGHTS);var o=S(n,"onehotLabels","softmaxCrossEntropy"),i=S(t,"logits","softmaxCrossEntropy"),s=null;if(e!=null&&(s=S(e,"weights","softmaxCrossEntropy")),fe(o.shape,i.shape,"Error in softmaxCrossEntropy: "),r>0){var u=j(r),c=j(1),l=j(o.shape[1]);o=o.mul(c.sub(u)).add(u.div(l))}var p=function(d,f,h){if(h===void 0&&(h=-1),h===-1&&(h=f.rank-1),h!==f.rank-1)throw Error("Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank "+f.rank+" and dim was "+h);return Dr(function(m,v,g){var y=v.logSumExp([h],!0),x=v.toFloat().sub(y);return g([m,x]),{value:x.mul(m).neg().sum([h]),gradFunc:function(b,w){var N=w[0],I=w[1],R=ze(b.shape,[h]);return[b.reshape(R).mul(N.toFloat().sub(I.exp())),b.reshape(R).mul(I.exp().sub(N.toFloat()))]}}})(d,f)}(o,i);return Ut(p,s,a)}}),Pd=Object.freeze({get Reduction(){return Me},absoluteDifference:ov,computeWeightedLoss:Ut,cosineDistance:iv,hingeLoss:sv,huberLoss:uv,logLoss:cv,meanSquaredError:lv,sigmoidCrossEntropy:pv,softmaxCrossEntropy:dv});function $u(n,t){return t===void 0&&(t=!1),A.tidy(function(){if(n.shape.length!==2)throw new Error("qr2d() requires a 2D Tensor, but got a "+n.shape.length+"D Tensor.");for(var e=n.shape[0],r=n.shape[1],a=Ds(e),o=n.clone(),i=mn([[1]],[1,1]),s=i.clone(),u=e>=r?r:e,c=function(p){var d,f=o,h=s,m=a;d=A.tidy(function(){var v=o.slice([p,p],[e-p,1]),g=v.norm(),y=o.slice([p,p],[1,1]),x=mn([[-1]]).where(y.greater(0),mn([[1]])),b=y.sub(x.mul(g)),w=v.div(b);s=w.shape[0]===1?i.clone():i.concat(w.slice([1,0],[w.shape[0]-1,w.shape[1]]),0);var N=x.matMul(b).div(g).neg(),I=o.slice([p,0],[e-p,r]),R=N.mul(s),k=s.transpose();if(p===0)o=I.sub(R.matMul(k.matMul(I)));else{var T=I.sub(R.matMul(k.matMul(I)));o=o.slice([0,0],[p,r]).concat(T,0)}var O=R.transpose(),_=a.slice([0,p],[e,a.shape[1]-p]);if(p===0)a=_.sub(_.matMul(s).matMul(O));else{var V=_.sub(_.matMul(s).matMul(O));a=a.slice([0,0],[e,p]).concat(V,1)}return[s,o,a]}),s=d[0],o=d[1],a=d[2],We([f,h,m])},l=0;l<u;++l)c(l);return!t&&e>r&&(a=a.slice([0,0],[e,r]),o=o.slice([0,0],[r,r])),[a,o]})}var fv=D({bandPart_:function(n,t,e){if(t%1!=0)throw new Error("bandPart(): numLower must be an integer, got "+t+".");if(e%1!=0)throw new Error("bandPart(): numUpper must be an integer, got "+e+".");var r=S(n,"a","bandPart");if(r.rank<2)throw new Error("bandPart(): Rank must be at least 2, got "+r.rank+".");var a=r.shape,o=r.shape.slice(-2),i=o[0],s=o[1];if(!(t<=i))throw new Error("bandPart(): numLower ("+t+") must not be greater than the number of rows ("+i+").");if(!(e<=s))throw new Error("bandPart(): numUpper ("+e+") must not be greater than the number of columns ("+s+").");t<0&&(t=i),e<0&&(e=s);var u=Zt(0,i,1,"int32").reshape([-1,1]),c=Zt(0,s,1,"int32"),l=et(u,c),p=$n(l.lessEqual(j(+t,"int32")),l.greaterEqual(j(-e,"int32"))),d=xe([i,s],r.dtype);return Et(Xn(r.reshape([-1,i,s])).map(function(f){return Lt(p,f,d)})).reshape(a)}}),hv=D({gramSchmidt_:function(n){var t;if(Array.isArray(n)){t=!1,E(n!=null&&n.length>0,function(){return"Gram-Schmidt process: input must not be null, undefined, or empty"});for(var e=n[0].shape[0],r=function(u){E(n[u].shape[0]===e,function(){return"Gram-Schmidt: Non-unique lengths found in the input vectors: ("+n[u].shape[0]+" vs. "+e+")"})},a=1;a<n.length;++a)r(a)}else t=!0,n=Er(n,n.shape[0],0).map(function(u){return wt(u,[0])});E(n.length<=n[0].shape[0],function(){return"Gram-Schmidt: Number of vectors ("+n.length+") exceeds number of dimensions ("+n[0].shape[0]+")."});var o=[],i=n,s=function(u){o.push(A.tidy(function(){var c=i[u];if(u>0)for(var l=0;l<u;++l){var p=xt(o[l].mulStrict(c)).mul(o[l]);c=c.sub(p)}return c.div(au(c,"euclidean"))}))};for(a=0;a<n.length;++a)s(a);return t?Et(o,0):o}}),mv=D({qr_:function(n,t){if(t===void 0&&(t=!1),n.rank<2)throw new Error("qr() requires input tensor to have a rank >= 2, but got rank "+n.rank);if(n.rank===2)return $u(n,t);var e=n.shape.slice(0,n.shape.length-2).reduce(function(i,s){return i*s}),r=Xn(n.reshape([e,n.shape[n.shape.length-2],n.shape[n.shape.length-1]]),0),a=[],o=[];return r.forEach(function(i){var s=$u(i,t),u=s[0],c=s[1];a.push(u),o.push(c)}),[Et(a,0).reshape(n.shape),Et(o,0).reshape(n.shape)]}}),Bd=Object.freeze({bandPart:fv,gramSchmidt:hv,qr:mv});function Za(n,t,e,r,a,o){r==null&&(r=.5),a==null&&(a=Number.NEGATIVE_INFINITY),o==null&&(o=0);var i=n.shape[0];return e=Math.min(e,i),E(0<=r&&r<=1,function(){return"iouThreshold must be in [0, 1], but was '"+r+"'"}),E(n.rank===2,function(){return"boxes must be a 2D tensor, but was of rank '"+n.rank+"'"}),E(n.shape[1]===4,function(){return"boxes must have 4 columns, but 2nd dimension was "+n.shape[1]}),E(t.rank===1,function(){return"scores must be a 1D tensor"}),E(t.shape[0]===i,function(){return"scores has incompatible shape with boxes. Expected "+i+", but was "+t.shape[0]}),E(0<=o&&o<=1,function(){return"softNmsSigma must be in [0, 1], but was '"+o+"'"}),{maxOutputSize:e,iouThreshold:r,scoreThreshold:a,softNmsSigma:o}}var vv=D({resizeBilinear_:function(n,t,e){e===void 0&&(e=!1);var r=S(n,"images","resizeBilinear");E(r.rank===3||r.rank===4,function(){return"Error in resizeBilinear: x must be rank 3 or 4, but got rank "+r.rank+"."}),E(t.length===2,function(){return"Error in resizeBilinear: new shape must 2D, but got shape "+t+"."});var a=r,o=!1;r.rank===3&&(o=!0,a=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var i=t[0],s=t[1],u=A.runKernelFunc(function(c,l){return l([a]),c.resizeBilinear(a,i,s,e)},{x:a},function(c,l){return{x:function(){return A.runKernelFunc(function(p){return p.resizeBilinearBackprop(c,l[0],e)},{})}}},"ResizeBilinear",{alignCorners:e,newHeight:i,newWidth:s});return o?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),gv=D({resizeNearestNeighbor_:function(n,t,e){e===void 0&&(e=!1);var r=S(n,"images","resizeNearestNeighbor");E(r.rank===3||r.rank===4,function(){return"Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank "+r.rank+"."}),E(t.length===2,function(){return"Error in resizeNearestNeighbor: new shape must 2D, but got shape "+t+"."}),E(r.dtype==="float32"||r.dtype==="int32",function(){return"`images` must have `int32` or `float32` as dtype"});var a=r,o=!1;r.rank===3&&(o=!0,a=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var i=t[0],s=t[1],u=A.runKernelFunc(function(c,l){return l([a]),c.resizeNearestNeighbor(a,i,s,e)},{batchImages:a},function(c,l){return{batchImages:function(){return A.runKernelFunc(function(p){return p.resizeNearestNeighborBackprop(c,l[0],e)},{})}}});return o?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),yv=D({nonMaxSuppression_:function(n,t,e,r,a){r===void 0&&(r=.5),a===void 0&&(a=Number.NEGATIVE_INFINITY);var o=S(n,"boxes","nonMaxSuppression"),i=S(t,"scores","nonMaxSuppression"),s=Za(o,i,e,r,a);e=s.maxOutputSize,r=s.iouThreshold,a=s.scoreThreshold;var u={maxOutputSize:e,iouThreshold:r,scoreThreshold:a};return A.runKernelFunc(function(c){return c.nonMaxSuppression(o,i,e,r,a)},{boxes:o,scores:i},null,"NonMaxSuppressionV3",u)}}),xv=function(n,t,e,r,a){return r===void 0&&(r=.5),a===void 0&&(a=Number.NEGATIVE_INFINITY),Y(this,void 0,void 0,function(){var o,i,s,u,c,l,p;return Q(this,function(d){switch(d.label){case 0:return o=S(n,"boxes","nonMaxSuppressionAsync"),i=S(t,"scores","nonMaxSuppressionAsync"),s=Za(o,i,e,r,a),e=s.maxOutputSize,r=s.iouThreshold,a=s.scoreThreshold,[4,Promise.all([o.data(),i.data()])];case 1:return u=d.sent(),c=u[0],l=u[1],p=Cs(c,l,e,r,a),o!==n&&o.dispose(),i!==t&&i.dispose(),[2,p]}})})},bv=D({nonMaxSuppressionWithScore_:function(n,t,e,r,a,o){r===void 0&&(r=.5),a===void 0&&(a=Number.NEGATIVE_INFINITY),o===void 0&&(o=0);var i=S(n,"boxes","nonMaxSuppression"),s=S(t,"scores","nonMaxSuppression"),u=Za(i,s,e,r,a,o),c={maxOutputSize:e=u.maxOutputSize,iouThreshold:r=u.iouThreshold,scoreThreshold:a=u.scoreThreshold,softNmsSigma:o=u.softNmsSigma},l=A.runKernel("NonMaxSuppressionV5",{boxes:i,scores:s},c);return{selectedIndices:l[0],selectedScores:l[1]}}}),wv=function(n,t,e,r,a,o){return r===void 0&&(r=.5),a===void 0&&(a=Number.NEGATIVE_INFINITY),o===void 0&&(o=0),Y(this,void 0,void 0,function(){var i,s,u,c,l,p,d;return Q(this,function(f){switch(f.label){case 0:return i=S(n,"boxes","nonMaxSuppressionAsync"),s=S(t,"scores","nonMaxSuppressionAsync"),u=Za(i,s,e,r,a,o),e=u.maxOutputSize,r=u.iouThreshold,a=u.scoreThreshold,o=u.softNmsSigma,[4,Promise.all([i.data(),s.data()])];case 1:return c=f.sent(),l=c[0],p=c[1],d=Ns(l,p,e,r,a,o),i!==n&&i.dispose(),s!==t&&s.dispose(),[2,d]}})})},Cv=D({cropAndResize_:function(n,t,e,r,a,o){var i=S(n,"image","cropAndResize"),s=S(t,"boxes","cropAndResize","float32"),u=S(e,"boxInd","cropAndResize","int32");a=a||"bilinear",o=o||0;var c=s.shape[0];return E(i.rank===4,function(){return"Error in cropAndResize: image must be rank 4,but got rank "+i.rank+"."}),E(s.rank===2&&s.shape[1]===4,function(){return"Error in cropAndResize: boxes must be have size ["+c+",4] but had shape "+s.shape+"."}),E(u.rank===1&&u.shape[0]===c,function(){return"Error in cropAndResize: boxInd must be have size ["+c+"] but had shape "+s.shape+"."}),E(r.length===2,function(){return"Error in cropAndResize: cropSize must be of length 2, but got length "+r.length+"."}),E(r[0]>=1&&r[1]>=1,function(){return"cropSize must be atleast [1,1], but was "+r}),E(a==="bilinear"||a==="nearest",function(){return"method must be bilinear or nearest, but was "+a}),A.runKernelFunc(function(l,p){return l.cropAndResize(i,s,u,r,a,o)},{images:i,boxes:s,boxInd:u},null,"CropAndResize",{method:a,extrapolationValue:o,cropSize:r})}}),at=Object.freeze({resizeBilinear:vv,resizeNearestNeighbor:gv,nonMaxSuppression:yv,nonMaxSuppressionAsync:xv,nonMaxSuppressionWithScore:bv,nonMaxSuppressionWithScoreAsync:wv,cropAndResize:Cv}),pu=function(n,t){return!(n>0)||t==="linear"},du=function(n,t,e){if(e==null||e==="linear")return n;if(e==="relu")return n.mul(t.step());throw new Error("Gradient for activation "+e+" has not been implemented yet.")},fu=function(n,t){var e=t,r=ke(n.shape,t.shape);return r.length>0&&(e=e.sum(r)),e.reshape(n.shape)},hu=function(n,t,e){if(t==="linear")return n;if(t==="relu")return Xa(n);if(t==="elu")return ja(n);if(t==="relu6")return tu(n);if(t==="prelu")return Ka(n,e);throw new Error("Unknown fused activation "+t+".")},Nv=D({fusedMatMul_:function(n){var t,e=n.a,r=n.b,a=n.transposeA,o=a!==void 0&&a,i=n.transposeB,s=i!==void 0&&i,u=n.bias,c=n.activation,l=c===void 0?"linear":c,p=n.preluActivationWeights;if(pu(A.state.gradientDepth,l)===!1){var d=Qn(e,r,o,s);return u!=null&&(d=nt(d,u)),hu(d,l,p)}var f=S(e,"a","fused matMul"),h=S(r,"b","fused matMul");t=be(f,h),f=t[0],h=t[1];var m=o?f.shape[f.rank-2]:f.shape[f.rank-1],v=s?h.shape[h.rank-1]:h.shape[h.rank-2],g=o?f.shape[f.rank-1]:f.shape[f.rank-2],y=s?h.shape[h.rank-2]:h.shape[h.rank-1],x=f.shape.slice(0,-2),b=h.shape.slice(0,-2),w=$(x),N=$(b);E(f.rank>=2&&h.rank>=2&&f.rank===h.rank,function(){return"Error in fused matMul: inputs must have the same rank of at least 2, got ranks "+f.rank+" and "+h.rank+"."}),E(Te(x,b),function(){return"Error in fused matMul: outer dimensions ("+x+") and ("+b+") of Tensors with shapes "+f.shape+" and "+h.shape+" must match."}),E(m===v,function(){return"Error in fused matMul: inner shapes ("+m+") and ("+v+") of Tensors with shapes "+f.shape+" and "+h.shape+" and transposeA="+o+" and transposeB="+s+" must match."});var I,R,k=f.shape.slice(0,-2).concat([g,y]),T=o?f.as3D(w,m,g):f.as3D(w,g,m),O=s?h.as3D(N,y,v):h.as3D(N,v,y);u!=null&&ie(k,(I=be(I=S(u,"bias","fused matMul"),f)[0]).shape),p!=null&&(R=S(p,"prelu weights","fused matMul"));var _={a:T,b:O};u!=null&&(_.bias=I),p!=null&&(_.preluActivationWeights=R);var V=[T,O];return A.runKernelFunc(function(L,B){var z=L.fusedBatchMatMul({a:T,b:O,transposeA:o,transposeB:s,bias:I,activation:l,preluActivationWeights:R});return B([T,O,z]),z},_,function(L,B){var z=B[0],U=B[1],W=B[2],H=du(L,W,l),q={};return u!=null&&(q={bias:function(){return fu(I,H)}}),Object.assign(o||s?!o&&s?{a:function(){return H.matMul(U,!1,!1)},b:function(){return H.matMul(z,!0,!1)}}:o&&!s?{a:function(){return U.matMul(H,!1,!0)},b:function(){return z.matMul(H,!1,!1)}}:{a:function(){return U.matMul(H,!0,!0)},b:function(){return H.matMul(z,!0,!0)}}:{a:function(){return H.matMul(U,!1,!0)},b:function(){return z.matMul(H,!0,!1)}},q)},"_FusedMatMul",{transposeA:o,transposeB:s,activation:l},V,[!0]).reshape(k)}}),Sv=D({fusedConv2d_:function(n){var t=n.x,e=n.filter,r=n.strides,a=n.pad,o=n.dataFormat,i=o===void 0?"NHWC":o,s=n.dilations,u=s===void 0?[1,1]:s,c=n.dimRoundingMode,l=n.bias,p=n.activation,d=p===void 0?"linear":p,f=n.preluActivationWeights;if(d=d||"linear",pu(A.state.gradientDepth,d)===!1){var h=Nn(t,e,r,a,i,u,c);return l!=null&&(h=nt(h,l)),hu(h,d,f)}var m=S(t,"x","conv2d"),v=S(e,"filter","conv2d"),g=m,y=!1;m.rank===3&&(y=!0,g=m.as4D(1,m.shape[0],m.shape[1],m.shape[2])),E(g.rank===4,function(){return"Error in fused conv2d: input must be rank 4, but got rank "+g.rank+"."}),E(v.rank===4,function(){return"Error in fused conv2d: filter must be rank 4, but got rank "+v.rank+"."}),c!=null&&E(Ne(a),function(){return"Error in fused conv2d: pad must be an integer when using, dimRoundingMode "+c+" but got pad "+a+"."}),E(g.shape[3]===v.shape[2],function(){return"Error in conv2d: depth of input ("+g.shape[3]+") must match input depth for filter "+v.shape[2]+"."}),E(Be(r,u),function(){return"Error in conv2D: Either strides or dilations must be 1. Got strides "+r+" and dilations '"+u+"'"}),E(i==="NHWC",function(){return"Error in conv2d: got dataFormat of "+i+" but only NHWC is currently supported."});var x,b,w=rn(g.shape,v.shape,r,u,a,c);l!=null&&(x=be(x=S(l,"bias","fused conv2d"),m)[0],ie(w.outShape,x.shape)),f!=null&&(b=S(f,"prelu weights","fused conv2d"));var N={x:g,filter:v};l!=null&&(N.bias=x),f!=null&&(N.preluActivationWeights=b);var I=[v,g],R=A.runKernelFunc(function(k,T){var O=k.fusedConv2d({input:g,filter:v,convInfo:w,bias:x,activation:d,preluActivationWeights:b});return T([v,g,O]),O},N,function(k,T){var O=T,_=O[0],V=O[1],L=O[2],B=du(k,L,d);E(yn(u),function(){return"Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+u+"'"});var z={};return l!=null&&(z={bias:function(){return fu(x,B)}}),Object.assign({x:function(){return id(V.shape,B,_,r,a)},filter:function(){return zs(V,B,_.shape,r,a)}},z)},"FusedConv2D",{convInfo:w,activation:d},I,[!0]);return y?R.as3D(R.shape[1],R.shape[2],R.shape[3]):R}}),Ev=D({fusedDepthwiseConv2d_:function(n){var t=n.x,e=n.filter,r=n.strides,a=n.pad,o=n.dataFormat,i=o===void 0?"NHWC":o,s=n.dilations,u=s===void 0?[1,1]:s,c=n.dimRoundingMode,l=n.bias,p=n.activation,d=p===void 0?"linear":p,f=n.preluActivationWeights;if(pu(A.state.gradientDepth,d)===!1){var h=Mr(t,e,r,a,i,u,c);return l!=null&&(h=nt(h,l)),hu(h,d,f)}var m=S(t,"x","depthwiseConv2d"),v=S(e,"filter","depthwiseConv2d"),g=m,y=!1;m.rank===3&&(y=!0,g=m.as4D(1,m.shape[0],m.shape[1],m.shape[2])),E(g.rank===4,function(){return"Error in fused depthwiseConv2d: input must be rank 4, but got rank "+g.rank+"."}),E(v.rank===4,function(){return"Error in fused depthwiseConv2d: filter must be rank 4, but got rank "+v.rank+"."}),E(g.shape[3]===v.shape[2],function(){return"Error in fused depthwiseConv2d: number of input channels ("+g.shape[3]+") must match the inChannels dimension in filter "+v.shape[2]+"."}),u==null&&(u=[1,1]),E(Be(r,u),function(){return"Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides "+r+" and dilations '"+u+"'"}),c!=null&&E(Ne(a),function(){return"Error in fused depthwiseConv2d: pad must be an integer when using dimRoundingMode "+c+" but got pad "+a+"."});var x,b,w=rn(g.shape,v.shape,r,u,a,c,!0);l!=null&&(x=be(x=S(l,"bias","fused conv2d"),m)[0],ie(w.outShape,x.shape)),f!=null&&(b=S(f,"prelu weights","fused depthwiseConv2d"));var N={x:g,filter:v};l!=null&&(N.bias=x),f!=null&&(N.preluActivationWeights=b);var I=[v,g],R=A.runKernelFunc(function(k,T){var O=k.fusedDepthwiseConv2D({input:g,filter:v,convInfo:w,bias:x,activation:d,preluActivationWeights:b});return T([v,g,O]),O},N,function(k,T){E(yn(u),function(){return"Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '"+u+"'"});var O=T[0],_=T[1],V=T[2],L=du(k,V,d),B={};return l!=null&&(B={bias:function(){return fu(x,L)}}),Object.assign({x:function(){return sd(_.shape,L,O,w)},filter:function(){return ud(_,L,O.shape,w)}},B)},"FusedDepthwiseConv2D",{convInfo:w,activation:d},I,[!0]);return y?R.as3D(R.shape[1],R.shape[2],R.shape[3]):R}}),Cr=Object.freeze({matMul:Nv,conv2d:Sv,depthwiseConv2d:Ev}),Iv=Object.freeze({image:at,linalg:Bd,losses:Pd,spectral:Ad,fused:Cr,signal:Fd,add:nt,addN:ks,batchNorm:Cn,batchNormalization:Op,batchNorm2d:Mp,batchNormalization2d:Fp,batchNorm3d:Lp,batchNormalization3d:Bp,batchNorm4d:zp,batchNormalization4d:Wp,broadcastTo:Ts,clone:Up,div:ct,divNoNan:Ba,eye:Ds,multinomial:Os,oneHot:xn,pad:zt,pad1d:Hp,pad2d:qp,pad3d:La,pad4d:jp,rand:Kp,randomGamma:$p,randomNormal:Yp,randomUniform:Va,square:Wa,squaredDifference:za,tile:Xt,truncatedNormal:Fs,conv1d:Vs,conv2d:Nn,conv3d:Ws,depthwiseConv2d:Mr,separableConv2d:cd,conv2dTranspose:Us,conv3dTranspose:ld,op:D,booleanMaskAsync:rd,complex:De,real:He,imag:rt,concat:tt,concat1d:Nl,concat2d:Sl,concat3d:El,concat4d:Il,split:Er,matMul:Qn,dot:pd,outerProduct:dd,reverse:an,reverse1d:fd,reverse2d:hd,reverse3d:md,reverse4d:vd,maxPool:Gs,avgPool:Hs,pool:xd,maxPool3d:qs,avgPool3d:js,maxPoolWithArgmax:Ks,slice:lt,slice1d:bd,slice2d:wd,slice3d:Cd,slice4d:Nd,abs:Li,acos:Vi,acosh:Wi,asin:zi,asinh:Ui,atan:Gi,atanh:Hi,ceil:qi,clipByValue:ji,cos:Ki,cosh:Xi,erf:$i,exp:Yi,expm1:Qi,floor:Ji,log:Zi,log1p:es,logSigmoid:Dl,neg:kr,reciprocal:ts,round:ns,rsqrt:Ra,sigmoid:Tr,sign:rs,isNaN:Ol,isInf:_l,isFinite:Fl,sin:as,sinh:os,softplus:is,sqrt:ss,step:Ml,tan:us,tanh:cs,all:Xs,any:$s,argMax:Ha,argMin:Ys,logSumExp:Ed,max:Qs,mean:Js,min:Zs,moments:Id,sum:xt,prod:qa,equal:Yn,equalStrict:Qp,greater:Ua,greaterEqual:Ga,greaterEqualStrict:Jp,greaterStrict:Zp,less:Ms,lessEqual:Ps,lessEqualStrict:ed,lessStrict:td,notEqual:Bs,notEqualStrict:nd,addStrict:Pl,atan2:ls,divStrict:Bl,floorDiv:ka,maximum:Ar,maximumStrict:Ll,minimum:Ta,minimumStrict:Vl,mod:ps,modStrict:Wl,mul:ye,mulStrict:zl,pow:Hn,powStrict:Ul,squaredDifferenceStrict:Gl,sub:et,subStrict:Hl,elu:ja,leakyRelu:eu,prelu:Ka,relu:Xa,relu6:tu,selu:nu,logicalAnd:$n,logicalNot:As,logicalOr:Ma,logicalXor:Gp,where:Lt,whereAsync:Pa,buffer:ne,print:Rl,batchToSpaceND:Ea,cast:Wt,cumsum:kl,depthToSpace:Ai,expandDims:Ge,reshape:Le,spaceToBatchND:Ia,squeeze:wt,stack:Et,unstack:Xn,setdiff1dAsync:Di,fill:Sr,linspace:Ti,ones:nn,range:Zt,scalar:j,tensor:Re,tensor1d:Bt,tensor2d:mn,tensor3d:ki,tensor4d:Ht,tensor5d:bl,tensor6d:wl,variable:Cl,zeros:xe,onesLike:Sa,zerosLike:ue,transpose:Ye,softmax:Or,logSoftmax:vs,localResponseNormalization:ru,norm:au,gather:Fr,unsortedSegmentSum:Ls,basicLSTMCell:Rd,multiRNNCell:kd,movingAverage:Td,stridedSlice:ou,topk:iu,scatterND:su,fft:Pr,ifft:qn,rfft:Br,irfft:$a,sparseToDense:Ya,gatherND:uu,diag:Dd,dropout:Od,hannWindow:Qa,hammingWindow:cu,frame:Ja,stft:lu,inTopKAsync:Md});function G(n,t){Array.isArray(n)||(n=[n]),n.forEach(function(e){e!=null&&E(e.dtype!=="complex64",function(){return t+" does not support complex64 tensors."})})}function Yo(n,t,e,r,a,o){for(var i=a.strideHeight,s=a.strideWidth,u=a.dilationHeight,c=a.dilationWidth,l=a.effectiveFilterHeight,p=a.effectiveFilterWidth,d=a.padInfo.top,f=a.padInfo.left,h=o==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,m=ne(a.outShape,e),v=m.values,g=a.outShape[1]*a.outShape[2]*a.outShape[3],y=a.outShape[2]*a.outShape[3],x=a.outShape[3],b=0;b<a.batchSize;++b)for(var w=b*g,N=b*r[0],I=0;I<a.inChannels;++I)for(var R=0;R<a.outHeight;++R)for(var k=R*i-d,T=Math.max(0,k),O=Math.min(a.inHeight,l+k),_=w+R*y,V=0;V<a.outWidth;++V){for(var L=V*s-f,B=Math.max(0,L),z=Math.min(a.inWidth,p+L),U=h,W=0,H=0,q=T;q<O;q+=u){for(var K=N+q*r[1],J=B;J<z;J+=c){var ee=n[K+J*r[2]+I];o==="max"&&ee>U?U=ee:o==="avg"&&(W+=ee,H++)}if(isNaN(U))break}v[_+V*x+I]=o==="avg"?W/H:U}return m}function Ld(n,t,e,r,a,o){a===void 0&&(a=!1),o===void 0&&(o=!1);for(var i=ne(r.outShape,"int32"),s=r.strideHeight,u=r.strideWidth,c=r.dilationHeight,l=r.dilationWidth,p=r.effectiveFilterHeight,d=r.effectiveFilterWidth,f=r.padInfo.top,h=r.padInfo.left,m=ne(t,e,n),v=0;v<r.batchSize;++v)for(var g=0;g<r.inChannels;++g)for(var y=0;y<r.outHeight;++y){for(var x=y*s-f,b=x;b<0;)b+=c;for(var w=Math.min(r.inHeight,p+x),N=0;N<r.outWidth;++N){for(var I=N*u-h,R=I;R<0;)R+=l;for(var k=Math.min(r.inWidth,d+I),T=Number.NEGATIVE_INFINITY,O=-1,_=b;_<w;_+=c)for(var V=_-x,L=R;L<k;L+=l){var B=L-I,z=m.get(v,_,L,g);z>T&&(T=z,O=a?o?((v*r.inHeight+_)*r.inWidth+L)*r.inChannels+g:(_*r.inWidth+L)*r.inChannels+g:V*d+B)}i.set(O,v,y,N,g)}}return i}function Co(n,t,e,r){if(e==="linear")return n.linear(t);if(e==="relu")return n.relu(t);if(e==="elu")return n.elu(t);if(e==="relu6")return n.relu6(t);if(e==="prelu")return n.prelu(t,r);throw new Error("Activation "+e+" has not been implemented for the CPU backend.")}var Rv=function(n){function t(){var e=n.call(this)||this;return e.blockSize=48,e.firstUse=!0,e.data=new gs(e,A),e}return pt(t,n),t.prototype.write=function(e,r,a){this.firstUse&&(this.firstUse=!1,M().get("IS_NODE")&&da(`
============================
Hi there \u{1F44B}. Looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, which binds to TensorFlow C++, by running npm i @tensorflow/tfjs-node, or npm i @tensorflow/tfjs-node-gpu if you have CUDA. Then call require('@tensorflow/tfjs-node'); (-gpu suffix for CUDA) at the start of your program. Visit https://github.com/tensorflow/tfjs-node for more details.
============================`));var o={};return this.data.set(o,{values:e,dtype:a}),o},t.prototype.move=function(e,r,a,o){this.data.set(e,{values:r,dtype:o})},t.prototype.numDataIds=function(){return this.data.numDataIds()},t.prototype.read=function(e){return Y(this,void 0,void 0,function(){return Q(this,function(r){return[2,this.readSync(e)]})})},t.prototype.readSync=function(e){var r=this.data.get(e),a=r.dtype,o=r.complexTensors;return a==="complex64"?$o(this.readSync(o.real.dataId),this.readSync(o.imag.dataId)):this.data.get(e).values},t.prototype.bufferSync=function(e){var r=this.readSync(e.dataId),a=r;if(e.dtype==="string")try{a=r.map(function(o){return fr(o)})}catch(o){throw new Error("Failed to decode encoded string bytes into utf-8")}return ne(e.shape,e.dtype,a)},t.prototype.makeOutput=function(e,r,a){var o=this.write(e,r,a);return A.makeTensorFromDataId(o,r,a,this)},t.prototype.disposeData=function(e){if(this.data.has(e)){var r=this.data.get(e).complexTensors;r!=null&&(r.real.dispose(),r.imag.dispose()),this.data.delete(e)}},t.prototype.time=function(e){return Y(this,void 0,void 0,function(){var r;return Q(this,function(a){return r=it(),e(),[2,{kernelMs:it()-r}]})})},t.prototype.memory=function(){return{unreliable:!0,reasons:["The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less."]}},t.prototype.complex=function(e,r){var a=this.makeOutput(null,e.shape,"complex64");return this.data.get(a.dataId).complexTensors={real:A.keep(e.clone()),imag:A.keep(r.clone())},a},t.prototype.real=function(e){return this.data.get(e.dataId).complexTensors.real.clone()},t.prototype.imag=function(e){return this.data.get(e.dataId).complexTensors.imag.clone()},t.prototype.slice=function(e,r,a){if(G(e,"slice"),hs(e.shape,r,a)){var o=ms(r,e.strides),i=$(a);return Re(this.readSync(e.dataId).subarray(o,o+i),a,e.dtype)}for(var s=ne(a,e.dtype),u=this.bufferSync(e),c=0;c<s.size;++c){var l=s.indexToLoc(c).map(function(p,d){return p+r[d]});s.values[c]=u.get.apply(u,l)}return s.toTensor()},t.prototype.stridedSlice=function(e,r,a,o){G(e,"stridedSlice");var i=Aa(r,a,o);if(i.some(function(f){return f===0}))return Re([],i);for(var s=ne(i,e.dtype),u=this.bufferSync(e),c=0;c<s.size;c++){for(var l=s.indexToLoc(c),p=new Array(l.length),d=0;d<p.length;d++)p[d]=l[d]*o[d]+r[d];s.set.apply(s,[u.get.apply(u,p)].concat(l))}return s.toTensor()},t.prototype.diag=function(e){for(var r=this.readSync(e.dataId),a=ne([e.size,e.size],e.dtype),o=a.values,i=0;i<r.length;i++)o[i*e.size+i]=r[i];return a.toTensor()},t.prototype.unstack=function(e,r){for(var a=e.shape[r],o=new Array(e.rank-1),i=0,s=0;s<e.rank;s++)s!==r&&(o[i++]=e.shape[s]);var u=new Array(e.rank).fill(0),c=e.shape.slice();c[r]=1;var l=new Array(a);for(s=0;s<l.length;s++)u[r]=s,l[s]=this.slice(e,u,c).reshape(o);return l},t.prototype.reverse=function(e,r){G(e,"reverse");for(var a=ne(e.shape,e.dtype),o=this.bufferSync(e),i=function(u){var c=a.indexToLoc(u),l=c.slice();r.forEach(function(p){return l[p]=e.shape[p]-1-l[p]}),a.set.apply(a,[o.get.apply(o,l)].concat(c))},s=0;s<a.size;s++)i(s);return a.toTensor()},t.prototype.concat=function(e,r){var a=this;if(e[0].dtype==="complex64"){var o=e.map(function(f){return He(f)}),i=e.map(function(f){return rt(f)});return De(this.concat(o,r),this.concat(i,r))}var s=e.map(function(f){var h=$(f.shape.slice(r));return f.as2D(-1,h)}),u=gn(s.map(function(f){return f.shape}),1),c=ne(u,e[0].dtype).values;if(s[0].shape[0]===1){var l=0;s.forEach(function(f){c.set(a.readSync(f.dataId),l),l+=f.size})}else{var p=0;s.forEach(function(f){for(var h=a.readSync(f.dataId),m=0,v=0;v<f.shape[0];++v)for(var g=v*u[1]+p,y=0;y<f.shape[1];++y)c[g+y]=h[m++];p+=f.shape[1]})}var d=gn(e.map(function(f){return f.shape}),r);return Re(c,d,e[0].dtype)},t.prototype.neg=function(e){return G(e,"neg"),this.multiply(j(-1),e)},t.prototype.add=function(e,r){return e.dtype==="complex64"||r.dtype==="complex64"?this.broadcastedBinaryComplexOp(e.cast("complex64"),r.cast("complex64"),function(a,o,i,s){return{real:a+i,imag:o+s}}):this.broadcastedBinaryOp(e,r,Oe(e.dtype,r.dtype),function(a,o){return a+o})},t.prototype.addN=function(e){var r=this;G(e,"addN");for(var a=e.map(function(l){return r.readSync(l.dataId)}),o=ne(e[0].shape,e[0].dtype),i=o.values,s=0;s<e.length;s++)for(var u=a[s],c=0;c<i.length;c++)i[c]+=u[c];return o.toTensor()},t.prototype.softmax=function(e,r){var a=Ae([r],e.shape),o=this.max(e,a),i=ze(o.shape,a),s=this.subtract(e,o.reshape(i)),u=this.exp(s),c=this.sum(u,a).reshape(i);return ct(u,c)},t.prototype.subtract=function(e,r){return e.dtype==="complex64"||r.dtype==="complex64"?this.broadcastedBinaryComplexOp(e.cast("complex64"),r.cast("complex64"),function(a,o,i,s){return{real:a-i,imag:o-s}}):this.broadcastedBinaryOp(e,r,Oe(e.dtype,r.dtype),function(a,o){return a-o})},t.prototype.pow=function(e,r){return G([e,r],"pow"),this.broadcastedBinaryOp(e,r,e.dtype,function(a,o){return Math.pow(a,o)})},t.prototype.batchMatMul=function(e,r,a,o){G([e,r],"matMul");for(var i=a?e.shape[1]:e.shape[2],s=a?e.shape[2]:e.shape[1],u=o?r.shape[1]:r.shape[2],c=e.shape[0],l=this.readSync(e.dataId),p=this.readSync(r.dataId),d=a?[e.strides[0],1,e.strides[1]]:[e.strides[0],e.strides[1],1],f=d[0],h=d[1],m=d[2],v=o?[1,r.strides[1],r.strides[0]]:[r.strides[1],1,r.strides[0]],g=v[0],y=v[1],x=v[2],b=s*u,w=ne([c,s,u],e.dtype),N=w.values,I=this.blockSize,R=0;R<c;R++)for(var k=0;k<s;k+=I)for(var T=0;T<u;T+=I)for(var O=0;O<i;O+=I)for(var _=Math.min(k+I,s),V=Math.min(T+I,u),L=Math.min(O+I,i),B=k;B<_;B++)for(var z=T;z<V;z++){for(var U=0,W=O;W<L;W++)U+=l[R*f+B*h+W*m]*p[W*g+z*y+R*x];N[R*b+(B*u+z)]+=U}return w.toTensor()},t.prototype.fusedBatchMatMul=function(e){var r=e.a,a=e.b,o=e.transposeA,i=e.transposeB,s=e.bias,u=e.activation,c=e.preluActivationWeights,l=this.batchMatMul(r,a,o,i);return s&&(l=this.add(l,s)),u&&(l=Co(this,l,u,c)),l},t.prototype.multiply=function(e,r){return e.dtype==="complex64"||r.dtype==="complex64"?this.broadcastedBinaryComplexOp(e.cast("complex64"),r.cast("complex64"),function(a,o,i,s){return{real:a*i-o*s,imag:a*s+o*i}}):this.broadcastedBinaryOp(e,r,Oe(e.dtype,r.dtype),function(a,o){return a*o})},t.prototype.floorDiv=function(e,r){return G([e,r],"floorDiv"),this.broadcastedBinaryOp(e,r,"int32",function(a,o){return Math.floor(a/o)})},t.prototype.sum=function(e,r){G(e,"sum"),Ue("sum",r,e.rank);for(var a=_e(e.shape,r),o=a[0],i=a[1],s=xe(o,Oe(e.dtype,"int32")),u=$(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),p=0;p<c.length;++p){for(var d=p*u,f=0,h=0;h<u;++h)f+=l[d+h];c[p]=f}return s},t.prototype.prod=function(e,r){G(e,"sum");for(var a=_e(e.shape,r),o=a[0],i=a[1],s=xe(o,Oe(e.dtype,"int32")),u=$(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),p=0;p<c.length;++p){for(var d=p*u,f=1,h=0;h<u;++h)f*=l[d+h];c[p]=f}return s},t.prototype.unsortedSegmentSum=function(e,r,a){G(e,"unsortedSegmentSum");for(var o=[],i=e.rank-r.rank,s=0;s<i;++s)r=r.expandDims(s+1);for(s=0;s<a;++s){var u=j(s,"int32"),c=Yn(u,r).asType("float32").mul(e).sum(0);o.push(c)}return Et(o)},t.prototype.argMin=function(e,r){G(e,"argMin");var a=[r];Ue("argMin",a,e.rank);for(var o=_e(e.shape,a),i=o[0],s=o[1],u=xe(i,"int32"),c=$(s),l=this.readSync(u.dataId),p=this.readSync(e.dataId),d=0;d<l.length;++d){for(var f=d*c,h=p[f],m=0,v=0;v<c;++v){var g=p[f+v];g<h&&(h=g,m=v)}l[d]=m}return u},t.prototype.argMax=function(e,r){G(e,"argMax");var a=[r];Ue("argMax",a,e.rank);for(var o=_e(e.shape,a),i=o[0],s=o[1],u=xe(i,"int32"),c=$(s),l=this.readSync(u.dataId),p=this.readSync(e.dataId),d=0;d<l.length;++d){for(var f=d*c,h=p[f],m=0,v=0;v<c;++v){var g=p[f+v];g>h&&(h=g,m=v)}l[d]=m}return u},t.prototype.cumsum=function(e,r,a,o){if(G(e,"cumsum"),r!==e.rank-1)throw new Error("backend.cumsum in CPU expects an inner-most axis="+(e.rank-1)+" but got axis="+r);for(var i=Oe(e.dtype,"int32"),s=xe(e.shape,i),u=this.readSync(s.dataId),c=this.readSync(e.dataId),l=e.shape[e.rank-1],p=o?function(v,g){return v+l-g-1}:function(v,g){return v+g},d=0;d<c.length;d+=l)for(var f=0;f<l;f++){var h=p(d,f);if(f===0)u[h]=a?0:c[h];else{var m=p(d,f-1);u[h]=a?c[m]+u[m]:c[h]+u[m]}}return s},t.prototype.equal=function(e,r){return G([e,r],"equal"),this.broadcastedBinaryOp(e,r,"bool",function(a,o){return a===o?1:0})},t.prototype.notEqual=function(e,r){return G([e,r],"notEqual"),this.broadcastedBinaryOp(e,r,"bool",function(a,o){return a!==o?1:0})},t.prototype.less=function(e,r){return G([e,r],"less"),this.broadcastedBinaryOp(e,r,"bool",function(a,o){return a<o?1:0})},t.prototype.lessEqual=function(e,r){return G([e,r],"lessEqual"),this.broadcastedBinaryOp(e,r,"bool",function(a,o){return a<=o?1:0})},t.prototype.greater=function(e,r){return G([e,r],"greater"),this.broadcastedBinaryOp(e,r,"bool",function(a,o){return a>o?1:0})},t.prototype.greaterEqual=function(e,r){return G([e,r],"greaterEqual"),this.broadcastedBinaryOp(e,r,"bool",function(a,o){return a>=o?1:0})},t.prototype.logicalNot=function(e){G(e,"logicalNot");for(var r=this.readSync(e.dataId),a=new Uint8Array(r.length),o=0;o<r.length;++o)a[o]=r[o]?0:1;return this.makeOutput(a,e.shape,"bool")},t.prototype.logicalAnd=function(e,r){return G([e,r],"logicalAnd"),this.broadcastedBinaryOp(e,r,"bool",function(a,o){return a&&o})},t.prototype.logicalOr=function(e,r){return G([e,r],"logicalOr"),this.broadcastedBinaryOp(e,r,"bool",function(a,o){return a||o})},t.prototype.select=function(e,r,a){G([e,r,a],"select");for(var o=this.readSync(e.dataId),i=this.readSync(r.dataId),s=this.readSync(a.dataId),u=xe(r.shape,Oe(r.dtype,a.dtype)),c=this.readSync(u.dataId),l=0,p=e.rank===0||e.rank>1||r.rank===1?1:$(r.shape.slice(1)),d=0;d<o.length;d++)for(var f=0;f<p;f++)o[d]===1?c[l++]=i[d]:c[l++]=s[d];return u},t.prototype.where=function(e){G([e],"where");var r=this.readSync(e.dataId);return Ss(e.shape,r)},t.prototype.topk=function(e,r,a){return G(e,"topk"),ep(this.readSync(e.dataId),e.shape,e.dtype,r)},t.prototype.min=function(e,r){G(e,"min"),Ue("min",r,e.rank);for(var a=_e(e.shape,r),o=a[0],i=a[1],s=xe(o,e.dtype),u=$(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),p=0;p<c.length;++p){for(var d=p*u,f=l[d],h=0;h<u;++h){var m=l[d+h];m<f&&(f=m)}c[p]=f}return s},t.prototype.minimum=function(e,r){return G([e,r],"minimum"),this.broadcastedBinaryOp(e,r,e.dtype,function(a,o){return Math.min(a,o)})},t.prototype.mod=function(e,r){return G([e,r],"mod"),this.broadcastedBinaryOp(e,r,e.dtype,function(a,o){var i=a%o;return a<0&&o<0||a>=0&&o>=0?i:(i+o)%o})},t.prototype.max=function(e,r){G(e,"max"),Ue("max",r,e.rank);for(var a=_e(e.shape,r),o=a[0],i=a[1],s=xe(o,e.dtype),u=$(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),p=0;p<c.length;++p){for(var d=p*u,f=l[d],h=0;h<u;++h){var m=l[d+h];m>f&&(f=m)}c[p]=f}return s},t.prototype.maximum=function(e,r){return G([e,r],"maximum"),this.broadcastedBinaryOp(e,r,e.dtype,function(a,o){return Math.max(a,o)})},t.prototype.all=function(e,r){G(e,"all"),Ue("all",r,e.rank);for(var a=_e(e.shape,r),o=a[0],i=a[1],s=xe(o,e.dtype),u=$(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),p=0;p<c.length;++p){for(var d=p*u,f=l[d],h=0;h<u;++h){var m=l[d+h];f=f&&m}c[p]=f}return s},t.prototype.any=function(e,r){G(e,"any"),Ue("any",r,e.rank);for(var a=_e(e.shape,r),o=a[0],i=a[1],s=xe(o,e.dtype),u=$(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),p=0;p<c.length;++p){for(var d=p*u,f=l[d],h=0;h<u;++h){var m=l[d+h];f=f||m}c[p]=f}return s},t.prototype.squaredDifference=function(e,r){return G([e,r],"squaredDifference"),this.broadcastedBinaryOp(e,r,e.dtype,function(a,o){var i=a-o;return i*i})},t.prototype.ceil=function(e){G(e,"ceil");for(var r=this.readSync(e.dataId),a=new Float32Array(r.length),o=0;o<r.length;++o)a[o]=Math.ceil(r[o]);return this.makeOutput(a,e.shape,"float32")},t.prototype.floor=function(e){G(e,"floor");for(var r=this.readSync(e.dataId),a=new Float32Array(r.length),o=0;o<r.length;++o)a[o]=Math.floor(r[o]);return this.makeOutput(a,e.shape,"float32")},t.prototype.sign=function(e){G(e,"x");for(var r=this.readSync(e.dataId),a=new Float32Array(r.length),o=0;o<r.length;++o)r[o]<0?a[o]=-1:r[o]>0?a[o]=1:a[o]=0;return this.makeOutput(a,e.shape,"float32")},t.prototype.isNaN=function(e){G(e,"x");for(var r=this.readSync(e.dataId),a=new Uint8Array(r.length),o=0;o<r.length;++o)Number.isNaN(r[o])&&(a[o]=1);return this.makeOutput(a,e.shape,"bool")},t.prototype.isInf=function(e){G(e,"x");for(var r=this.readSync(e.dataId),a=new Uint8Array(r.length),o=0;o<r.length;++o)Math.abs(r[o])===1/0&&(a[o]=1);return this.makeOutput(a,e.shape,"bool")},t.prototype.isFinite=function(e){G(e,"x");for(var r=this.readSync(e.dataId),a=new Uint8Array(r.length),o=0;o<r.length;++o)Number.isFinite(r[o])&&(a[o]=1);return this.makeOutput(a,e.shape,"bool")},t.prototype.round=function(e){G(e,"round");for(var r=this.readSync(e.dataId),a=new Float32Array(r.length),o=0;o<r.length;++o){var i=Math.floor(r[o]);r[o]-i<.5?a[o]=Math.floor(r[o]):r[o]-i>.5?a[o]=Math.ceil(r[o]):a[o]=i%2==0?i:i+1}return this.makeOutput(a,e.shape,"float32")},t.prototype.exp=function(e){G(e,"exp");for(var r=this.readSync(e.dataId),a=new Float32Array(r.length),o=0;o<r.length;++o)a[o]=Math.exp(r[o]);return this.makeOutput(a,e.shape,"float32")},t.prototype.expm1=function(e){G(e,"expm1");for(var r=this.readSync(e.dataId),a=new Float32Array(r.length),o=0;o<r.length;++o)a[o]=Math.expm1(r[o]);return this.makeOutput(a,e.shape,"float32")},t.prototype.log=function(e){G(e,"log");for(var r=this.readSync(e.dataId),a=new Float32Array(r.length),o=0;o<r.length;++o){var i=r[o];a[o]=Math.log(i)}return this.makeOutput(a,e.shape,"float32")},t.prototype.log1p=function(e){G(e,"log1p");for(var r=this.readSync(e.dataId),a=new Float32Array(r.length),o=0;o<r.length;++o){var i=r[o];a[o]=Math.log1p(i)}return this.makeOutput(a,e.shape,"float32")},t.prototype.sqrt=function(e){G(e,"sqrt");for(var r=this.readSync(e.dataId),a=new Float32Array(r.length),o=0;o<r.length;++o){var i=r[o];a[o]=Math.sqrt(i)}return this.makeOutput(a,e.shape,"float32")},t.prototype.rsqrt=function(e){G(e,"rsqrt");for(var r=this.readSync(e.dataId),a=new Float32Array(r.length),o=0;o<r.length;++o){var i=r[o];a[o]=1/Math.sqrt(i)}return this.makeOutput(a,e.shape,"float32")},t.prototype.reciprocal=function(e){G(e,"reciprocal");for(var r=this.readSync(e.dataId),a=new Float32Array(r.length),o=0;o<r.length;++o)a[o]=1/r[o];return this.makeOutput(a,e.shape,"float32")},t.prototype.linear=function(e){return e},t.prototype.relu=function(e){G(e,"relu");for(var r=xe(e.shape,e.dtype),a=this.readSync(r.dataId),o=this.readSync(e.dataId),i=0;i<o.length;++i)a[i]=Math.max(0,o[i]);return r},t.prototype.relu6=function(e){G(e,"relu");for(var r=xe(e.shape,e.dtype),a=this.readSync(r.dataId),o=this.readSync(e.dataId),i=0;i<o.length;++i)a[i]=Math.min(Math.max(0,o[i]),6);return r},t.prototype.prelu=function(e,r){return G([e,r],"prelu"),this.broadcastedBinaryOp(e,r,e.dtype,function(a,o){return a<0?o*a:a})},t.prototype.elu=function(e){G(e,"elu");for(var r=new Float32Array(e.size),a=this.readSync(e.dataId),o=0;o<a.length;++o){var i=a[o];r[o]=i>=0?i:Math.exp(i)-1}return this.makeOutput(r,e.shape,"float32")},t.prototype.eluDer=function(e,r){G([e,r],"eluDer");for(var a=new Float32Array(r.size),o=this.readSync(r.dataId),i=this.readSync(e.dataId),s=0;s<o.length;++s){var u=o[s];a[s]=u>=1?i[s]:i[s]*(u+1)}return this.makeOutput(a,r.shape,"float32")},t.prototype.selu=function(e){G(e,"selu");for(var r=Is,a=Rs,o=new Float32Array(e.size),i=this.readSync(e.dataId),s=0;s<i.length;++s){var u=i[s];o[s]=u>=0?a*u:r*(Math.exp(u)-1)}return this.makeOutput(o,e.shape,"float32")},t.prototype.clip=function(e,r,a){G(e,"clip");for(var o=new Float32Array(e.size),i=this.readSync(e.dataId),s=0;s<i.length;++s){var u=i[s];o[s]=u>a?a:u<r?r:u}return this.makeOutput(o,e.shape,"float32")},t.prototype.abs=function(e){for(var r=new Float32Array(e.size),a=this.readSync(e.dataId),o=0;o<a.length;++o)r[o]=Math.abs(a[o]);return this.makeOutput(r,e.shape,"float32")},t.prototype.complexAbs=function(e){for(var r=new Float32Array(e.size),a=this.readSync(e.dataId),o=0;o<e.size;++o){var i=a[2*o],s=a[2*o+1];r[o]=Math.hypot(i,s)}return this.makeOutput(r,e.shape,"float32")},t.prototype.int=function(e){G(e,"int");for(var r=new Int32Array(e.size),a=this.readSync(e.dataId),o=0;o<a.length;++o)r[o]=a[o];return this.makeOutput(r,e.shape,"int32")},t.prototype.sigmoid=function(e){G(e,"sigmoid");for(var r=new Float32Array(e.size),a=this.readSync(e.dataId),o=0;o<a.length;++o)r[o]=1/(1+Math.exp(-a[o]));return this.makeOutput(r,e.shape,"float32")},t.prototype.softplus=function(e){G(e,"softplus");for(var r=Math.log(11920928955078125e-23)+2,a=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i){var s=o[i]>-r,u=o[i]<r,c=Math.exp(o[i]),l=void 0;l=u?c:s?o[i]:Math.log(1+c),a[i]=l}return this.makeOutput(a,e.shape,"float32")},t.prototype.sin=function(e){G(e,"sin");for(var r=new Float32Array(e.size),a=this.readSync(e.dataId),o=0;o<a.length;++o)r[o]=Math.sin(a[o]);return this.makeOutput(r,e.shape,"float32")},t.prototype.cos=function(e){G(e,"cos");for(var r=new Float32Array(e.size),a=this.readSync(e.dataId),o=0;o<a.length;++o)r[o]=Math.cos(a[o]);return this.makeOutput(r,e.shape,"float32")},t.prototype.tan=function(e){G(e,"tan");for(var r=new Float32Array(e.size),a=this.readSync(e.dataId),o=0;o<a.length;++o)r[o]=Math.tan(a[o]);return this.makeOutput(r,e.shape,"float32")},t.prototype.asin=function(e){G(e,"asin");for(var r=new Float32Array(e.size),a=this.readSync(e.dataId),o=0;o<a.length;++o)r[o]=Math.asin(a[o]);return this.makeOutput(r,e.shape,"float32")},t.prototype.acos=function(e){G(e,"acos");for(var r=new Float32Array(e.size),a=this.readSync(e.dataId),o=0;o<a.length;++o)r[o]=Math.acos(a[o]);return this.makeOutput(r,e.shape,"float32")},t.prototype.atan=function(e){G(e,"atan");for(var r=new Float32Array(e.size),a=this.readSync(e.dataId),o=0;o<a.length;++o)r[o]=Math.atan(a[o]);return this.makeOutput(r,e.shape,"float32")},t.prototype.atan2=function(e,r){return G([e,r],"atan2"),this.broadcastedBinaryOp(e,r,e.dtype,function(a,o){return Math.atan2(a,o)})},t.prototype.sinh=function(e){G(e,"sinh");for(var r=new Float32Array(e.size),a=this.readSync(e.dataId),o=0;o<a.length;++o)r[o]=Math.sinh(a[o]);return this.makeOutput(r,e.shape,"float32")},t.prototype.cosh=function(e){G(e,"cosh");for(var r=new Float32Array(e.size),a=this.readSync(e.dataId),o=0;o<a.length;++o)r[o]=Math.cosh(a[o]);return this.makeOutput(r,e.shape,"float32")},t.prototype.tanh=function(e){G(e,"tanh");for(var r=new Float32Array(e.size),a=this.readSync(e.dataId),o=0;o<a.length;++o)r[o]=Dc(a[o]);return this.makeOutput(r,e.shape,"float32")},t.prototype.asinh=function(e){G(e,"asinh");for(var r=new Float32Array(e.size),a=this.readSync(e.dataId),o=0;o<a.length;++o)r[o]=Math.asinh(a[o]);return this.makeOutput(r,e.shape,"float32")},t.prototype.acosh=function(e){G(e,"acosh");for(var r=new Float32Array(e.size),a=this.readSync(e.dataId),o=0;o<a.length;++o)r[o]=Math.acosh(a[o]);return this.makeOutput(r,e.shape,"float32")},t.prototype.atanh=function(e){G(e,"atanh");for(var r=new Float32Array(e.size),a=this.readSync(e.dataId),o=0;o<a.length;++o)r[o]=Math.atanh(a[o]);return this.makeOutput(r,e.shape,"float32")},t.prototype.erf=function(e){G(e,"erf");for(var r=new Float32Array(e.size),a=this.readSync(e.dataId),o=0;o<a.length;++o){var i=Math.sign(a[o]),s=Math.abs(a[o]),u=1/(1+.3275911*s);r[o]=i*(1-((((1.061405429*u-1.453152027)*u+1.421413741)*u-.284496736)*u+.254829592)*u*Math.exp(-s*s))}return this.makeOutput(r,e.shape,"float32")},t.prototype.step=function(e,r){r===void 0&&(r=0),G(e,"step");for(var a=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i){var s=o[i];isNaN(s)?a[i]=NaN:a[i]=s>0?1:r}return this.makeOutput(a,e.shape,"float32")},t.prototype.fusedConv2d=function(e){var r=e.input,a=e.filter,o=e.convInfo,i=e.bias,s=e.activation,u=e.preluActivationWeights,c=this.conv2d(r,a,o);return i&&(c=this.add(c,i)),s&&(c=Co(this,c,s,u)),c},t.prototype.conv2d=function(e,r,a){G([e,r],"conv2d");for(var o=a.filterHeight,i=a.filterWidth,s=a.dilationHeight,u=a.dilationWidth,c=a.padInfo.left,l=a.padInfo.top,p=a.dataFormat==="channelsLast",d=ne(a.outShape,e.dtype),f=e.strides[0],h=p?e.strides[1]:e.strides[2],m=p?e.strides[2]:1,v=p?1:e.strides[1],g=d.strides[0],y=p?d.strides[1]:d.strides[2],x=p?d.strides[2]:1,b=p?1:d.strides[1],w=this.readSync(e.dataId),N=this.readSync(r.dataId),I=d.values,R=0;R<a.batchSize;++R)for(var k=R*f,T=R*g,O=0;O<a.outHeight;++O)for(var _=T+O*y,V=O*a.strideHeight-l,L=0;L<o;L++){var B=V+L*s;if(!(B<0||B>=a.inHeight))for(var z=L*r.strides[0],U=k+B*h,W=0;W<a.outWidth;++W)for(var H=_+W*x,q=W*a.strideWidth-c,K=0;K<i;K++){var J=q+K*u;if(!(J<0||J>=a.inWidth))for(var ee=U+J*m,ae=z+K*r.strides[1],oe=0;oe<a.inChannels;++oe){for(var se=w[ee+oe*v],pe=0;pe<a.outChannels;++pe)I[H+pe*b]+=se*N[ae+pe];ae+=a.outChannels}}}return d.toTensor()},t.prototype.conv3d=function(e,r,a){for(var o=a.filterDepth,i=a.filterHeight,s=a.filterWidth,u=a.dilationDepth,c=a.dilationHeight,l=a.dilationWidth,p=a.padInfo.front,d=a.padInfo.left,f=a.padInfo.top,h=ne(a.outShape,e.dtype),m=this.readSync(e.dataId),v=this.readSync(r.dataId),g=h.values,y=0;y<a.batchSize;++y)for(var x=y*e.strides[0],b=y*h.strides[0],w=0;w<a.outDepth;++w)for(var N=b+w*h.strides[1],I=w*a.strideDepth-p,R=0;R<o;R++){var k=I+R*u;if(!(k<0||k>=a.inDepth))for(var T=R*r.strides[0],O=x+k*e.strides[1],_=0;_<a.outHeight;++_)for(var V=N+_*h.strides[2],L=_*a.strideHeight-f,B=0;B<i;B++){var z=L+B*c;if(!(z<0||z>=a.inHeight))for(var U=T+B*r.strides[1],W=O+z*e.strides[2],H=0;H<a.outWidth;++H)for(var q=V+H*a.outChannels,K=H*a.strideWidth-d,J=0;J<s;J++){var ee=K+J*l;if(!(ee<0||ee>=a.inWidth))for(var ae=U+J*r.strides[2],oe=W+ee*a.inChannels,se=ae,pe=0;pe<a.inChannels;++pe){for(var ce=m[oe+pe],de=0;de<a.outChannels;++de)g[q+de]+=ce*v[se+de];se+=a.outChannels}}}}return h.toTensor()},t.prototype.conv2dDerInput=function(e,r,a){G([e,r],"conv2dDerInput");for(var o=ne(a.inShape,"float32"),i=o.values,s=this.readSync(e.dataId),u=this.readSync(r.dataId),c=r.strides,l=c[0],p=c[1],d=c[2],f=a.batchSize,h=a.filterHeight,m=a.filterWidth,v=a.inChannels,g=a.inHeight,y=a.inWidth,x=a.outChannels,b=a.outHeight,w=a.outWidth,N=a.strideHeight,I=a.strideWidth,R=a.dataFormat,k=h-1-a.padInfo.top,T=m-1-a.padInfo.left,O=R==="channelsLast",_=o.strides[0],V=O?o.strides[1]:o.strides[2],L=O?o.strides[2]:1,B=O?1:o.strides[1],z=e.strides[0],U=O?e.strides[1]:e.strides[2],W=O?e.strides[2]:1,H=O?1:e.strides[1],q=0;q<f;++q)for(var K=0;K<v;++K)for(var J=0;J<g;++J)for(var ee=J-k,ae=Math.max(0,Math.ceil(ee/N)),oe=Math.min(b,(h+ee)/N),se=0;se<y;++se){for(var pe=se-T,ce=Math.max(0,Math.ceil(pe/I)),de=Math.min(w,(m+pe)/I),Ie=0,le=ae;le<oe;++le)for(var ve=le*N-ee,he=ce;he<de;++he)for(var Se=z*q+U*le+W*he,we=l*(h-1-ve)+p*(m-1-(he*I-pe))+d*K,Ce=0;Ce<x;++Ce)Ie+=s[Se+H*Ce]*u[we+Ce];i[_*q+V*J+L*se+B*K]=Ie}return o.toTensor()},t.prototype.conv3dDerInput=function(e,r,a){for(var o=ne(a.inShape,"float32"),i=o.values,s=o.strides,u=s[0],c=s[1],l=s[2],p=s[3],d=this.readSync(e.dataId),f=e.strides,h=f[0],m=f[1],v=f[2],g=f[3],y=this.readSync(r.dataId),x=r.strides,b=x[0],w=x[1],N=x[2],I=x[3],R=a.batchSize,k=a.filterDepth,T=a.filterHeight,O=a.filterWidth,_=a.inChannels,V=a.inDepth,L=a.inHeight,B=a.inWidth,z=a.outChannels,U=a.outDepth,W=a.outHeight,H=a.outWidth,q=a.strideDepth,K=a.strideHeight,J=a.strideWidth,ee=k-1-a.padInfo.front,ae=T-1-a.padInfo.top,oe=O-1-a.padInfo.left,se=0;se<R;++se)for(var pe=0;pe<_;++pe)for(var ce=0;ce<V;++ce)for(var de=ce-ee,Ie=Math.max(0,Math.ceil(de/q)),le=Math.min(U,(k+de)/q),ve=0;ve<L;++ve)for(var he=ve-ae,Se=Math.max(0,Math.ceil(he/K)),we=Math.min(W,(T+he)/K),Ce=0;Ce<B;++Ce){for(var mt=Ce-oe,vt=Math.max(0,Math.ceil(mt/J)),Ke=Math.min(H,(O+mt)/J),Sn=0,Rt=Ie;Rt<le;++Rt)for(var Gt=Rt*q-de,kt=Se;kt<we;++kt)for(var En=kt*K-he,Tt=vt;Tt<Ke;++Tt)for(var ao=h*se+m*Rt+v*kt+g*Tt,In=b*(k-1-Gt)+w*(T-1-En)+N*(O-1-(Tt*J-mt))+I*pe,gt=0;gt<z;++gt)Sn+=d[ao+gt]*y[In+gt];i[u*se+c*ce+l*ve+p*Ce+pe]=Sn}return o.toTensor()},t.prototype.conv2dDerFilter=function(e,r,a){G([e,r],"conv2dDerFilter");for(var o=a.strideHeight,i=a.strideWidth,s=a.filterHeight,u=a.filterWidth,c=a.dataFormat==="channelsLast",l=ne(a.filterShape,"float32"),p=a.padInfo.left,d=a.padInfo.top,f=this.bufferSync(e),h=this.bufferSync(r),m=0;m<s;++m)for(var v=Math.max(0,Math.ceil((d-m)/o)),g=Math.min(a.outHeight,(a.inHeight+d-m)/o),y=0;y<u;++y)for(var x=Math.max(0,Math.ceil((p-y)/i)),b=Math.min(a.outWidth,(a.inWidth+p-y)/i),w=0;w<a.inChannels;++w)for(var N=0;N<a.outChannels;++N){for(var I=0,R=0;R<a.batchSize;++R)for(var k=v;k<g;++k)for(var T=m+k*o-d,O=x;O<b;++O){var _=y+O*i-p;I+=c?f.get(R,T,_,w)*h.get(R,k,O,N):f.get(R,w,T,_)*h.get(R,N,k,O)}l.set(I,m,y,w,N)}return l.toTensor()},t.prototype.conv3dDerFilter=function(e,r,a){for(var o=a.strideDepth,i=a.strideHeight,s=a.strideWidth,u=a.filterDepth,c=a.filterHeight,l=a.filterWidth,p=ne(a.filterShape,"float32"),d=p.values,f=p.strides,h=f[0],m=f[1],v=f[2],g=f[3],y=this.readSync(r.dataId),x=r.strides,b=x[0],w=x[1],N=x[2],I=x[3],R=this.readSync(e.dataId),k=e.strides,T=k[0],O=k[1],_=k[2],V=k[3],L=a.padInfo.front,B=a.padInfo.left,z=a.padInfo.top,U=0;U<u;++U)for(var W=Math.max(0,Math.ceil((L-U)/o)),H=Math.min(a.outDepth,(a.inDepth+L-U)/o),q=U*h,K=0;K<c;++K)for(var J=Math.max(0,Math.ceil((z-K)/i)),ee=Math.min(a.outHeight,(a.inHeight+z-K)/i),ae=K*m+q,oe=0;oe<l;++oe)for(var se=Math.max(0,Math.ceil((B-oe)/s)),pe=Math.min(a.outWidth,(a.inWidth+B-oe)/s),ce=oe*v+ae,de=0;de<a.inChannels;++de)for(var Ie=de*g+ce,le=0;le<a.outChannels;++le){for(var ve=0,he=0;he<a.batchSize;++he)for(var Se=he*T,we=he*b,Ce=W;Ce<H;++Ce)for(var mt=(U+Ce*o-L)*O+Se,vt=Ce*w+we,Ke=J;Ke<ee;++Ke)for(var Sn=(K+Ke*i-z)*_+mt,Rt=Ke*N+vt,Gt=se;Gt<pe;++Gt){var kt=Gt*I+Rt;ve+=R[(oe+Gt*s-B)*V+Sn+de]*y[kt+le]}d[Ie+le]=ve}return p.toTensor()},t.prototype.fusedDepthwiseConv2D=function(e){var r=e.input,a=e.filter,o=e.convInfo,i=e.bias,s=e.activation,u=e.preluActivationWeights,c=this.depthwiseConv2D(r,a,o);return i&&(c=this.add(c,i)),s&&(c=Co(this,c,s,u)),c},t.prototype.depthwiseConv2D=function(e,r,a){G([e,r],"depthwiseConv2D");for(var o=a.filterHeight,i=a.filterWidth,s=a.dilationHeight,u=a.dilationWidth,c=a.padInfo.left,l=a.padInfo.top,p=a.outChannels/a.inChannels,d=ne(a.outShape,e.dtype),f=this.readSync(e.dataId),h=this.readSync(r.dataId),m=d.values,v=0;v<a.batchSize;++v)for(var g=v*e.strides[0],y=v*d.strides[0],x=0;x<a.outHeight;++x)for(var b=y+x*d.strides[1],w=x*a.strideHeight-c,N=0;N<o;++N){var I=w+N*s;if(!(I<0||I>=a.inHeight))for(var R=N*r.strides[0],k=g+I*e.strides[1],T=0;T<a.outWidth;++T)for(var O=b+T*d.strides[2],_=T*a.strideWidth-l,V=0;V<i;++V){var L=_+V*u;if(!(L<0||L>=a.inWidth))for(var B=R+V*r.strides[1],z=k+L*a.inChannels,U=O,W=B,H=0;H<a.inChannels;++H){for(var q=f[z+H],K=0;K<p;++K)m[U+K]+=q*h[W+K];U+=p,W+=p}}}return d.toTensor()},t.prototype.depthwiseConv2DDerInput=function(e,r,a){G([e,r],"depthwiseConv2DDerInput");for(var o=ne(a.inShape,"float32"),i=o.values,s=o.strides,u=s[0],c=s[1],l=s[2],p=this.readSync(e.dataId),d=e.strides,f=d[0],h=d[1],m=d[2],v=this.readSync(r.dataId),g=r.strides,y=g[0],x=g[1],b=g[2],w=a.batchSize,N=a.filterHeight,I=a.filterWidth,R=a.inChannels,k=a.inHeight,T=a.inWidth,O=a.outChannels,_=a.outHeight,V=a.outWidth,L=a.strideHeight,B=a.strideWidth,z=N-1-a.padInfo.top,U=I-1-a.padInfo.left,W=O/R,H=0;H<w;++H)for(var q=0;q<R;++q)for(var K=0;K<k;++K)for(var J=K-z,ee=Math.max(0,Math.ceil(J/L)),ae=Math.min(_,(N+J)/L),oe=0;oe<T;++oe){for(var se=oe-U,pe=Math.max(0,Math.ceil(se/B)),ce=Math.min(V,(I+se)/B),de=0,Ie=ee;Ie<ae;++Ie)for(var le=Ie*L-J,ve=pe;ve<ce;++ve)for(var he=f*H+h*Ie+m*ve,Se=y*(N-1-le)+x*(I-1-(ve*B-se))+b*q,we=0;we<W;++we)de+=p[he+(q*W+we)]*v[Se+we];i[u*H+c*K+l*oe+q]=de}return o.toTensor()},t.prototype.depthwiseConv2DDerFilter=function(e,r,a){G([e,r],"depthwiseConv2DDerFilter");for(var o=a.strideHeight,i=a.strideWidth,s=a.filterHeight,u=a.filterWidth,c=ne(a.filterShape,"float32"),l=a.padInfo.left,p=a.padInfo.top,d=a.outChannels/a.inChannels,f=this.bufferSync(e),h=this.bufferSync(r),m=0;m<s;++m)for(var v=Math.max(0,Math.ceil((p-m)/o)),g=Math.min(a.outHeight,(a.inHeight+p-m)/o),y=0;y<u;++y)for(var x=Math.max(0,Math.ceil((l-y)/i)),b=Math.min(a.outWidth,(a.inWidth+l-y)/i),w=0;w<a.outChannels;++w){for(var N=Math.trunc(w/d),I=w%d,R=0,k=0;k<a.batchSize;++k)for(var T=v;T<g;++T)for(var O=m+T*o-p,_=x;_<b;++_){var V=y+_*i-l;R+=f.get(k,O,V,N)*h.get(k,T,_,w)}c.set(R,m,y,N,I)}return c.toTensor()},t.prototype.tile=function(e,r){return G(e,"tile"),Zl(this.bufferSync(e),r)},t.prototype.pad=function(e,r,a){G(e,"pad");var o=r.map(function(d,f){return d[0]+e.shape[f]+d[1]}),i=r.map(function(d){return d[0]}),s=this.bufferSync(e),u=ne(o,e.dtype);a!==0&&u.values.fill(a);for(var c=0;c<e.size;c++){var l=s.indexToLoc(c),p=l.map(function(d,f){return d+i[f]});u.set.apply(u,[s.get.apply(s,l)].concat(p))}return u.toTensor()},t.prototype.gather=function(e,r,a){G([e,r],"gather");var o=e.shape.slice(),i=this.readSync(r.dataId);o[a]=i.length;for(var s=ne(o,e.dtype),u=this.bufferSync(e),c=0;c<s.size;++c){var l=s.indexToLoc(c),p=l.slice();p[a]=i[l[a]];var d=u.locToIndex(p);s.values[c]=u.values[d]}return s.toTensor()},t.prototype.batchToSpaceND=function(e,r,a){G([e],"batchToSpaceND");var o=r.reduce(function(p,d){return p*d}),i=fa(e.shape,r,o),s=ha(i.length,r.length),u=ma(e.shape,r,o),c=Tl(a,r.length),l=Al(u,a,r.length);return Ye(e.reshape(i),s).reshape(u).slice(c,l)},t.prototype.spaceToBatchND=function(e,r,a){G([e],"spaceToBatchND");var o=r.reduce(function(d,f){return d*f}),i=[[0,0]];i.push.apply(i,a);for(var s=1+r.length;s<e.shape.length;++s)i.push([0,0]);var u=e.pad(i),c=fa(u.shape,r,o,!1),l=ha(c.length,r.length,!1),p=ma(u.shape,r,o,!1);return Ye(u.reshape(c),l).reshape(p)},t.prototype.maxPool=function(e,r){return G(e,"maxPool"),Yo(this.readSync(e.dataId),e.shape,e.dtype,e.strides,r,"max").toTensor()},t.prototype.maxPoolBackprop=function(e,r,a,o){G([r,a],"maxPoolBackprop");for(var i=this.readSync(r.dataId),s=ne(o.outShape,r.dtype,Ld(i,r.shape,r.dtype,o).values),u=o.strideHeight,c=o.strideWidth,l=o.dilationHeight,p=o.dilationWidth,d=o.effectiveFilterHeight,f=o.effectiveFilterWidth,h=f-1-o.padInfo.left,m=d-1-o.padInfo.top,v=ne(r.shape,"float32"),g=this.bufferSync(e),y=0;y<o.batchSize;++y)for(var x=0;x<o.inChannels;++x)for(var b=0;b<o.inHeight;++b)for(var w=0;w<o.inWidth;++w){for(var N=b-m,I=w-h,R=0,k=0;k<d;k+=l){var T=(N+k)/u;if(!(T<0||T>=o.outHeight||Math.floor(T)!==T))for(var O=0;O<f;O+=p){var _=(I+O)/c;if(!(_<0||_>=o.outWidth||Math.floor(_)!==_)){var V=d*f-1-s.get(y,T,_,x)===k*f+O?1:0;V!==0&&(R+=g.get(y,T,_,x)*V)}}}v.set(R,y,b,w,x)}return v.toTensor()},t.prototype.avgPoolBackprop=function(e,r,a){G([e,r],"avgPoolBackprop");for(var o=a.strideHeight,i=a.strideWidth,s=a.filterHeight,u=a.filterWidth,c=a.dilationHeight,l=a.dilationWidth,p=a.effectiveFilterHeight,d=a.effectiveFilterWidth,f=d-1-a.padInfo.left,h=p-1-a.padInfo.top,m=ne(r.shape,"float32"),v=1/(s*u),g=this.bufferSync(e),y=0;y<a.batchSize;++y)for(var x=0;x<a.inChannels;++x)for(var b=0;b<a.inHeight;++b)for(var w=0;w<a.inWidth;++w){for(var N=b-h,I=w-f,R=0,k=0;k<p;k+=c){var T=(N+k)/o;if(!(T<0||T>=a.outHeight||Math.floor(T)!==T))for(var O=0;O<d;O+=l){var _=(I+O)/i;_<0||_>=a.outWidth||Math.floor(_)!==_||(R+=g.get(y,T,_,x))}}m.set(R*v,y,b,w,x)}return m.toTensor()},t.prototype.pool3d=function(e,r,a){G(e,"pool3d");for(var o=r.strideDepth,i=r.strideHeight,s=r.strideWidth,u=r.dilationDepth,c=r.dilationHeight,l=r.dilationWidth,p=r.effectiveFilterDepth,d=r.effectiveFilterHeight,f=r.effectiveFilterWidth,h=r.padInfo.front,m=r.padInfo.top,v=r.padInfo.left,g=a==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,y=this.readSync(e.dataId),x=ne(r.outShape,e.dtype),b=x.values,w=r.outShape[1]*r.outShape[2]*r.outShape[3]*r.outShape[4],N=r.outShape[2]*r.outShape[3]*r.outShape[4],I=r.outShape[3]*r.outShape[4],R=r.outShape[4],k=0;k<r.batchSize;++k)for(var T=k*w,O=k*e.strides[0],_=0;_<r.inChannels;++_)for(var V=0;V<r.outDepth;++V){for(var L=V*o-h,B=L;B<0;)B+=u;for(var z=Math.min(r.inDepth,p+L),U=T+V*N,W=0;W<r.outHeight;++W){for(var H=W*i-m,q=H;q<0;)q+=c;for(var K=Math.min(r.inHeight,d+H),J=U+W*I,ee=0;ee<r.outWidth;++ee){for(var ae=ee*s-v,oe=ae;oe<0;)oe+=l;for(var se=Math.min(r.inWidth,f+ae),pe=J+ee*R,ce=g,de=0,Ie=0,le=B;le<z;le+=u){for(var ve=O+le*e.strides[1],he=q;he<K;he+=c){for(var Se=ve+he*e.strides[2],we=oe;we<se;we+=l){var Ce=y[Se+we*e.strides[3]+_];if(a==="max"&&Ce>ce?ce=Ce:a==="avg"&&(de+=Ce,Ie++),isNaN(ce))break}if(isNaN(ce))break}if(isNaN(ce))break}b[pe+_]=a==="avg"?de/Ie:ce}}}return x.toTensor()},t.prototype.avgPool3d=function(e,r){return G(e,"avgPool3d"),this.pool3d(e,r,"avg").toFloat()},t.prototype.avgPool3dBackprop=function(e,r,a){G([e,r],"avgPool3dBackprop");for(var o=a.strideDepth,i=a.strideHeight,s=a.strideWidth,u=a.filterDepth,c=a.filterHeight,l=a.filterWidth,p=a.dilationDepth,d=a.dilationHeight,f=a.dilationWidth,h=a.effectiveFilterDepth,m=a.effectiveFilterHeight,v=a.effectiveFilterWidth,g=h-1-a.padInfo.front,y=v-1-a.padInfo.left,x=m-1-a.padInfo.top,b=ne(r.shape,"float32"),w=1/(u*c*l),N=this.bufferSync(e),I=0;I<a.batchSize;++I)for(var R=0;R<a.inChannels;++R)for(var k=0;k<a.inDepth;++k)for(var T=0;T<a.inHeight;++T)for(var O=0;O<a.inWidth;++O){for(var _=k-g,V=T-x,L=O-y,B=0,z=0;z<h;z+=p){var U=(_+z)/o;if(!(U<0||U>=a.outDepth||Math.floor(U)!==U))for(var W=0;W<m;W+=d){var H=(V+W)/i;if(!(H<0||H>=a.outHeight||Math.floor(H)!==H))for(var q=0;q<v;q+=f){var K=(L+q)/s;K<0||K>=a.outWidth||Math.floor(K)!==K||(B+=N.get(I,U,H,K,R))}}}b.set(B*w,I,k,T,O,R)}return b.toTensor()},t.prototype.maxPool3d=function(e,r){return G(e,"maxPool3d"),this.pool3d(e,r,"max").toFloat()},t.prototype.maxPool3dPositions=function(e,r){for(var a=ne(r.outShape,"int32"),o=r.strideDepth,i=r.strideHeight,s=r.strideWidth,u=r.dilationDepth,c=r.dilationHeight,l=r.dilationWidth,p=r.effectiveFilterDepth,d=r.effectiveFilterHeight,f=r.effectiveFilterWidth,h=r.padInfo.front,m=r.padInfo.top,v=r.padInfo.left,g=this.bufferSync(e),y=0;y<r.batchSize;++y)for(var x=0;x<r.inChannels;++x)for(var b=0;b<r.outDepth;++b){for(var w=b*o-h,N=w;N<0;)N+=u;for(var I=Math.min(r.inDepth,p+w),R=0;R<r.outHeight;++R){for(var k=R*i-m,T=k;T<0;)T+=c;for(var O=Math.min(r.inHeight,d+k),_=0;_<r.outWidth;++_){for(var V=_*s-v,L=V;L<0;)L+=l;for(var B=Math.min(r.inWidth,f+V),z=Number.NEGATIVE_INFINITY,U=-1,W=N;W<I;W+=u)for(var H=W-w,q=T;q<O;q+=c)for(var K=q-k,J=L;J<B;J+=l){var ee=J-V,ae=g.get(y,W,q,J,x);ae>=z&&(z=ae,U=H*d*f+K*d+ee)}a.set(U,y,b,R,_,x)}}}return a.toTensor()},t.prototype.maxPool3dBackprop=function(e,r,a,o){G([r,a],"maxPool3dBackprop");for(var i=this.maxPool3dPositions(r,o),s=o.strideDepth,u=o.strideHeight,c=o.strideWidth,l=o.dilationDepth,p=o.dilationHeight,d=o.dilationWidth,f=o.effectiveFilterDepth,h=o.effectiveFilterHeight,m=o.effectiveFilterWidth,v=f-1-o.padInfo.front,g=m-1-o.padInfo.left,y=h-1-o.padInfo.top,x=ne(r.shape,"float32"),b=this.bufferSync(i),w=this.bufferSync(e),N=0;N<o.batchSize;++N)for(var I=0;I<o.inChannels;++I)for(var R=0;R<o.inDepth;++R)for(var k=0;k<o.inHeight;++k)for(var T=0;T<o.inWidth;++T){for(var O=R-v,_=k-y,V=T-g,L=0,B=0;B<f;B+=l){var z=(O+B)/s;if(!(z<0||z>=o.outDepth||Math.floor(z)!==z))for(var U=0;U<h;U+=p){var W=(_+U)/u;if(!(W<0||W>=o.outHeight||Math.floor(W)!==W))for(var H=0;H<m;H+=d){var q=(V+H)/c;if(!(q<0||q>=o.outWidth||Math.floor(q)!==q)){var K=f*h*m-1-b.get(N,z,W,q,I)===B*h*m+U*m+H?1:0;K!==0&&(L+=w.get(N,z,W,q,I)*K)}}}}x.set(L,N,R,k,T,I)}return x.toTensor()},t.prototype.cast=function(e,r){return bs(e,r,this)},t.prototype.reshape=function(e,r){return ga(e,r)},t.prototype.avgPool=function(e,r){return G(e,"avgPool"),G(e,"maxPool"),Yo(this.readSync(e.dataId),e.shape,e.dtype,e.strides,r,"avg").toTensor().toFloat()},t.prototype.resizeBilinear=function(e,r,a,o){G(e,"resizeBilinear");for(var i=e.shape,s=i[0],u=i[1],c=i[2],l=i[3],p=this.readSync(e.dataId),d=new Float32Array($([s,r,a,l])),f=[o&&r>1?u-1:u,o&&a>1?c-1:c],h=[o&&r>1?r-1:r,o&&a>1?a-1:a],m=0,v=f[0]/h[0],g=f[1]/h[1],y=0;y<s;y++)for(var x=0;x<r;x++)for(var b=v*x,w=Math.floor(b),N=b-w,I=Math.min(u-1,Math.ceil(b)),R=y*e.strides[0]+w*e.strides[1],k=y*e.strides[0]+I*e.strides[1],T=0;T<a;T++)for(var O=g*T,_=Math.floor(O),V=O-_,L=Math.min(c-1,Math.ceil(O)),B=R+_*e.strides[2],z=k+_*e.strides[2],U=R+L*e.strides[2],W=k+L*e.strides[2],H=0;H<l;H++){var q=p[B+H],K=p[z+H],J=q+(p[U+H]-q)*V,ee=J+(K+(p[W+H]-K)*V-J)*N;d[m++]=ee}return Re(d,[s,r,a,l])},t.prototype.resizeBilinearBackprop=function(e,r,a){G([e,r],"resizeBilinearBackprop");for(var o=r.shape,i=o[0],s=o[1],u=o[2],c=o[3],l=e.shape,p=l[1],d=l[2],f=new Float32Array(i*s*u*c),h=[a&&p>1?s-1:s,a&&d>1?u-1:u],m=[a&&p>1?p-1:p,a&&d>1?d-1:d],v=h[0]/m[0],g=h[1]/m[1],y=this.readSync(e.dataId),x=0,b=0;b<i;b++)for(var w=b*r.strides[0],N=0;N<p;N++)for(var I=N*v,R=Math.floor(I),k=Math.min(Math.ceil(I),s-1),T=w+R*r.strides[1],O=w+k*r.strides[1],_=I-R,V=1-_,L=0;L<d;L++)for(var B=L*g,z=Math.floor(B),U=Math.min(Math.ceil(B),u-1),W=B-z,H=1-W,q=T+z*r.strides[2],K=T+U*r.strides[2],J=O+z*r.strides[2],ee=O+U*r.strides[2],ae=V*H,oe=V*W,se=_*H,pe=_*W,ce=0;ce<c;ce++){var de=y[x++];f[q+ce]+=de*ae,f[K+ce]+=de*oe,f[J+ce]+=de*se,f[ee+ce]+=de*pe}return Ht(f,[i,u,s,c],r.dtype)},t.prototype.resizeNearestNeighbor=function(e,r,a,o){G(e,"resizeNearestNeighbor");for(var i=e.shape,s=i[0],u=i[1],c=i[2],l=i[3],p=this.readSync(e.dataId),d=new Float32Array(s*r*a*l),f=[o&&r>1?u-1:u,o&&a>1?c-1:c],h=[o&&r>1?r-1:r,o&&a>1?a-1:a],m=f[0]/h[0],v=f[1]/h[1],g=0,y=0;y<s;y++)for(var x=y*e.strides[0],b=0;b<r;b++)for(var w=m*b,N=x+Math.min(u-1,o?Math.round(w):Math.floor(w))*e.strides[1],I=0;I<a;I++)for(var R=v*I,k=N+Math.min(c-1,o?Math.round(R):Math.floor(R))*e.strides[2],T=0;T<l;T++){var O=p[k+T];d[g++]=O}return Re(d,[s,r,a,l],e.dtype)},t.prototype.resizeNearestNeighborBackprop=function(e,r,a){G([e,r],"resizeNearestNeighborBackprop");for(var o=r.shape,i=o[0],s=o[1],u=o[2],c=o[3],l=e.shape,p=l[1],d=l[2],f=new Float32Array(i*s*u*c),h=this.readSync(e.dataId),m=[a&&p>1?s-1:s,a&&d>1?u-1:u],v=[a&&p>1?p-1:p,a&&d>1?d-1:d],g=m[0]/v[0],y=m[1]/v[1],x=1/g,b=1/y,w=2*Math.ceil(x)+2,N=2*Math.ceil(b)+2,I=0;I<i;I++)for(var R=I*r.strides[0],k=0;k<s;k++)for(var T=R+k*r.strides[1],O=Math.floor(k*x),_=Math.floor(O-w/2),V=0;V<u;V++)for(var L=T+V*r.strides[2],B=Math.floor(V*b),z=Math.floor(B-N/2),U=0;U<c;U++){for(var W=0,H=0;H<w;H++){var q=H+_;if(!(q<0||q>=p)){var K=R+q*e.strides[1],J=q*g;if(k===Math.min(s-1,a?Math.round(J):Math.floor(J)))for(var ee=0;ee<N;ee++){var ae=ee+z;if(!(ae<0||ae>=d)){var oe=K+ae*e.strides[2],se=ae*y;V===Math.min(u-1,a?Math.round(se):Math.floor(se))&&(W+=h[oe+U])}}}}f[L+U]=W}return Ht(f,r.shape,r.dtype)},t.prototype.batchNormalization=function(e,r,a,o,i,s){G([e,r,a,i,s],"batchNorm");for(var u=this.readSync(e.dataId),c=this.readSync(r.dataId),l=this.readSync(a.dataId),p=i?this.readSync(i.dataId):new Float32Array([1]),d=s?this.readSync(s.dataId):new Float32Array([0]),f=new Float32Array(u.length),h=d.length,m=p.length,v=l.length,g=c.length,y=0,x=0,b=0,w=0,N=0;N<u.length;++N)f[N]=d[y++]+(u[N]-c[x++])*p[b++]/Math.sqrt(l[w++]+o),y>=h&&(y=0),x>=g&&(x=0),b>=m&&(b=0),w>=v&&(w=0);return Ht(f,e.shape)},t.prototype.localResponseNormalization4D=function(e,r,a,o,i){G(e,"localResponseNormalization4D");var s=e.shape[3],u=s-1,c=this.readSync(e.dataId),l=e.size,p=new Float32Array(l);function d(v){for(var g=v%s,y=v-g+Math.max(0,g-r),x=v-g+Math.min(g+r,u),b=0;y<=x;y++){var w=c[y];b+=w*w}return b}for(var f=0;f<l;f++){var h=d(f),m=c[f]*Math.pow(a+o*h,-i);p[f]=m}return Ht(p,e.shape)},t.prototype.LRNGrad=function(e,r,a,o,i,s,u){G(e,"LRNGrad");for(var c=e.shape[3],l=this.readSync(e.dataId),p=this.readSync(r.dataId),d=this.readSync(a.dataId),f=new Float32Array(e.size),h=e.size,m=0;m<h;m++){for(var v=m%c,g=m-v+Math.max(0,v-o),y=m-v+Math.min(c,v+o+1),x=0,b=g;b<y;b++)x+=Math.pow(p[b],2);for(x=s*x+i,b=g;b<y;b++){var w=-2*s*u*p[b]*d[m]/x;m===b&&(w+=Math.pow(x,-u)),w*=l[m],f[b]+=w}}return Ht(f,e.shape)},t.prototype.multinomial=function(e,r,a,o){G(e,"multinomial");for(var i=r?e:Or(e),s=i.shape[0],u=i.shape[1],c=xe([s,a],"int32"),l=this.readSync(c.dataId),p=this.readSync(i.dataId),d=0;d<s;++d){var f=d*u,h=new Float32Array(u-1);h[0]=p[f];for(var m=1;m<h.length;++m)h[m]=h[m-1]+p[f+m];for(var v=_a(o.toString()),g=d*a,y=0;y<a;++y){var x=v();l[g+y]=h.length;for(var b=0;b<h.length;b++)if(x<h[b]){l[g+y]=b;break}}}return c},t.prototype.oneHot=function(e,r,a,o){G(e,"oneHot");var i=new Float32Array(e.size*r);i.fill(o);for(var s=this.readSync(e.dataId),u=0;u<e.size;++u)s[u]>=0&&s[u]<r&&(i[u*r+s[u]]=a);return mn(i,[e.size,r],"int32")},t.prototype.nonMaxSuppression=function(e,r,a,o,i){return G(e,"nonMaxSuppression"),Cs(this.readSync(e.dataId),this.readSync(r.dataId),a,o,i)},t.prototype.fft=function(e){return this.fftBatch(e,!1)},t.prototype.ifft=function(e){return this.fftBatch(e,!0)},t.prototype.fftBatch=function(e,r){for(var a=e.shape[0],o=e.shape[1],i=ne(e.shape,"float32"),s=ne(e.shape,"float32"),u=He(e).as2D(a,o),c=rt(e).as2D(a,o),l=0;l<a;l++)for(var p=u.slice([l,0],[1,o]),d=c.slice([l,0],[1,o]),f=De(p,d),h=this.readSync(this.fftImpl(f,r).dataId),m=0;m<o;m++){var v=ku(h,m);i.values[l*o+m]=v.real,s.values[l*o+m]=v.imag}return De(i.toTensor(),s.toTensor()).as2D(a,o)},t.prototype.fftImpl=function(e,r){var a=e.as1D(),o=a.size;if(this.isExponentOf2(o)){var i=this.fftRadix2(a,o,r).as2D(e.shape[0],e.shape[1]);return r&&(i=De(He(i).div(j(o)),rt(i).div(j(o)))),i}var s=this.readSync(e.dataId),u=function(c){for(var l=new Float32Array(c.length/2),p=new Float32Array(c.length/2),d=0;d<c.length;d+=2)l[d/2]=c[d],p[d/2]=c[d+1];return{real:l,imag:p}}(this.fourierTransformByMatmul(s,o,r));return De(u.real,u.imag).as2D(e.shape[0],e.shape[1])},t.prototype.isExponentOf2=function(e){return(e&e-1)==0},t.prototype.fftRadix2=function(e,r,a){if(r===1)return e;var o=this.readSync(e.dataId),i=r/2,s=function(g){for(var y=Math.ceil(g.length/4),x=new Float32Array(y),b=new Float32Array(y),w=0;w<g.length;w+=4)x[Math.floor(w/4)]=g[w],b[Math.floor(w/4)]=g[w+1];return{real:x,imag:b}}(o),u=De(s.real,s.imag).as1D(),c=function(g){for(var y=Math.floor(g.length/4),x=new Float32Array(y),b=new Float32Array(y),w=2;w<g.length;w+=4)x[Math.floor(w/4)]=g[w],b[Math.floor(w/4)]=g[w+1];return{real:x,imag:b}}(o),l=De(c.real,c.imag).as1D();u=this.fftRadix2(u,i,a),l=this.fftRadix2(l,i,a);var p=function(g,y){for(var x=new Float32Array(g/2),b=new Float32Array(g/2),w=0;w<Math.ceil(g/2);w++){var N=(y?2:-2)*Math.PI*(w/g);x[w]=Math.cos(N),b[w]=Math.sin(N)}return{real:x,imag:b}}(r,a),d=De(p.real,p.imag).mul(l),f=u.add(d),h=u.sub(d),m=He(f).concat(He(h)),v=rt(f).concat(rt(h));return De(m,v).as1D()},t.prototype.fourierTransformByMatmul=function(e,r,a){for(var o=new Float32Array(2*r),i=0;i<r;i++){for(var s=0,u=0,c=0;c<r;c++){var l=fh(i*c,r,a),p=ku(e,c);s+=p.real*l.real-p.imag*l.imag,u+=p.real*l.imag+p.imag*l.real}a&&(s/=r,u/=r),dh(o,s,u,i)}return o},t.prototype.depthToSpace=function(e,r,a){E(a==="NHWC",function(){return"Only NHWC dataFormat supported on CPU for depthToSpace. Got "+a}),E(r>1,function(){return"blockSize should be > 1 for depthToSpace, but was: "+r});for(var o=e.shape[0],i=e.shape[1],s=e.shape[2],u=e.shape[3],c=i*r,l=s*r,p=u/(r*r),d=this.readSync(e.dataId),f=new Float32Array(o*c*l*p),h=0,m=0;m<o;++m)for(var v=0;v<c;++v)for(var g=Math.floor(v/r),y=v%r,x=0;x<l;++x)for(var b=Math.floor(x/r),w=(y*r+x%r)*p,N=0;N<p;++N){var I=N+w+u*(b+s*(g+i*m));f[h++]=d[I]}return Ht(f,[o,c,l,p])},t.prototype.broadcastedBinaryOp=function(e,r,a,o){var i=ie(e.shape,r.shape),s=ne(i,a),u=this.readSync(e.dataId),c=this.readSync(r.dataId),l=_t(e.shape,i),p=_t(r.shape,i),d=s.values;if(l.length+p.length===0)for(var f=0;f<d.length;++f)d[f]=o(u[f%u.length],c[f%c.length]);else{var h=this.bufferSync(e),m=this.bufferSync(r),v=function(g){var y=s.indexToLoc(g),x=y.slice(-e.rank);l.forEach(function(I){return x[I]=0});var b=h.locToIndex(x),w=y.slice(-r.rank);p.forEach(function(I){return w[I]=0});var N=m.locToIndex(w);d[g]=o(u[b],c[N])};for(f=0;f<d.length;++f)v(f)}return s.toTensor()},t.prototype.broadcastedBinaryComplexOp=function(e,r,a){var o=ie(e.shape,r.shape),i=ne(o,"float32"),s=ne(o,"float32"),u=this.readSync(e.dataId),c=this.readSync(r.dataId),l=_t(e.shape,o),p=_t(r.shape,o),d=i.values,f=s.values;if(l.length+p.length===0)for(var h=0;h<d.length;h++){var m=h%u.length,v=h%c.length,g=a(u[2*m],u[2*m+1],c[2*v],c[2*v+1]);d[h]=g.real,f[h]=g.imag}else{var y=this.bufferSync(this.data.get(e.dataId).complexTensors.real),x=this.bufferSync(this.data.get(r.dataId).complexTensors.real),b=function(w){var N=i.indexToLoc(w),I=N.slice(-e.rank);l.forEach(function(_){return I[_]=0});var R=y.locToIndex(I),k=N.slice(-r.rank);p.forEach(function(_){return k[_]=0});var T=x.locToIndex(k),O=a(u[2*R],u[2*R+1],c[2*T],c[2*T+1]);d[w]=O.real,f[w]=O.imag};for(h=0;h<d.length;h++)b(h)}return this.complex(i.toTensor(),s.toTensor())},t.prototype.split=function(e,r,a){return Jl(e,r,a)},t.prototype.dispose=function(){},t.prototype.floatPrecision=function(){return 32},t.prototype.epsilon=function(){return 1e-7},t.prototype.cropAndResize=function(e,r,a,o,i,s){for(var u=e.shape,c=u[0],l=u[1],p=u[2],d=u[3],f=r.shape[0],h=o[0],m=o[1],v=ne([f,h,m,d],"float32"),g=this.readSync(r.dataId),y=this.readSync(a.dataId),x=this.readSync(e.dataId),b=e.strides,w=v.strides,N=0;N<f;N++){var I=4*N,R=g[I],k=g[I+1],T=g[I+2],O=g[I+3],_=y[N];if(!(_>=c))for(var V=h>1?(T-R)*(l-1)/(h-1):0,L=m>1?(O-k)*(p-1)/(m-1):0,B=0;B<h;B++){var z=h>1?R*(l-1)+B*V:.5*(R+T)*(l-1);if(z<0||z>l-1)for(var U=0;U<m;U++)for(var W=0;W<d;W++){var H=W+U*w[2]+B*w[1]+N*w[0];v.values[H]=s}else if(i==="bilinear"){var q=Math.floor(z),K=Math.ceil(z),J=z-q;for(U=0;U<m;U++)if((le=m>1?k*(p-1)+U*L:.5*(k+O)*(p-1))<0||le>p-1)for(W=0;W<d;W++)H=W+U*w[2]+B*w[1]+N*w[0],v.values[H]=s;else{var ee=Math.floor(le),ae=Math.ceil(le),oe=le-ee;for(W=0;W<d;W++){var se=x[H=W+ee*b[2]+q*b[1]+_*b[0]],pe=x[H=W+ae*b[2]+q*b[1]+_*b[0]],ce=x[H=W+ee*b[2]+K*b[1]+_*b[0]],de=se+(pe-se)*oe,Ie=ce+(x[H=W+ae*b[2]+K*b[1]+_*b[0]]-ce)*oe;H=W+U*w[2]+B*w[1]+N*w[0],v.values[H]=de+(Ie-de)*J}}}else for(U=0;U<m;++U){var le;if((le=m>1?k*(p-1)+U*L:.5*(k+O)*(p-1))<0||le>p-1)for(W=0;W<d;W++)H=W+U*w[2]+B*w[1]+N*w[0],v.values[H]=s;else{var ve=Math.round(le),he=Math.round(z);for(W=0;W<d;W++){var Se=W+ve*b[2]+he*b[1]+_*b[0],we=W+U*w[2]+B*w[1]+N*w[0];v.values[we]=x[Se]}}}}}return v.toTensor()},t.prototype.sparseToDense=function(e,r,a,o){var i=xr(0,e,a),s=i.sliceRank,u=i.numUpdates,c=i.sliceSize,l=i.strides,p=i.outputSize;return this.scatter(e,r,a,p,c,u,s,l,o,!1)},t.prototype.gatherND=function(e,r){var a=r.shape,o=a[a.length-1],i=ds(e,r),s=i[0],u=i[1],c=i[2],l=i[3];if(u===0)return Re([],s,e.dtype);for(var p=new Gn([u,c],e.dtype),d=this.readSync(r.dataId),f=this.readSync(e.dataId),h=0;h<u;h++){for(var m=[],v=0,g=0;g<o;g++){var y=d[h*o+g];v+=y*l[g],m.push(y)}if(v<0||v>=e.size/c)throw new Error("Invalid indices: "+m+" does not index into "+e.shape);for(var x=0;x<c;x++)p.values[h*c+x]=f[v*c+x]}return p.toTensor().reshape(s)},t.prototype.scatterND=function(e,r,a){var o=xr(0,e,a),i=o.sliceRank,s=o.numUpdates,u=o.sliceSize,c=o.strides,l=o.outputSize,p=j(0);return this.scatter(e,r,a,l,u,s,i,c,p,!0)},t.prototype.fill=function(e,r,a){var o=dr(a=a||jn(r),$(e));return o.fill(r),A.makeTensor(o,e,a,this)},t.prototype.onesLike=function(e){if(e.dtype==="string")throw new Error("onesLike is not supported for string tensors");return this.fill(e.shape,1,e.dtype)},t.prototype.zerosLike=function(e){var r=dr(e.dtype,$(e.shape));return this.makeOutput(r,e.shape,e.dtype)},t.prototype.linspace=function(e,r,a){return ws(e,r,a)},t.prototype.scatter=function(e,r,a,o,i,s,u,c,l,p){var d=[o/i,i],f=this.readSync(e.dataId),h=this.readSync(r.dataId);if(o===0)return Re([],a,r.dtype);var m=new Gn(d,r.dtype);m.values.fill(this.readSync(l.dataId)[0]);for(var v=0;v<s;v++){for(var g=[],y=0,x=0;x<u;x++){var b=f[v*u+x];g.push(b),y+=b*c[x]}if(y<0||y>=o/i)throw new Error("Invalid indices: "+g+" does not index into "+a);for(var w=0;w<i;w++)p?m.values[y*i+w]+=h[v*i+w]:m.values[y*i+w]=r.rank===0?h[0]:h[v*i+w]}return m.toTensor().reshape(a)},t}(ys);function Vd(n,t){return{kernelName:n,backendName:"cpu",kernelFunc:function(e){var r=e.inputs,a=e.backend,o=r,i=o.a,s=o.b,u=a;G([i,s],n);var c=u.data.get(i.dataId).values,l=u.data.get(s.dataId).values,p=t(i.shape,s.shape,c,l,i.dtype),d=p[0],f=p[1];return{dataId:u.write(d,f,i.dtype),shape:f,dtype:i.dtype}}}}function Wd(n){return function(t,e,r,a,o){var i=ie(t,e),s=i.length,u=je(i),c=vn(o,$(i)),l=t.length,p=e.length,d=je(t),f=je(e),h=_t(t,i),m=_t(e,i);if(h.length+m.length===0)for(var v=0;v<c.length;++v)c[v]=n(r[v%r.length],a[v%a.length]);else{var g=function(y){var x=Ci(y,s,u),b=x.slice(-l);h.forEach(function(R){return b[R]=0});var w=pa(b,l,d),N=x.slice(-p);m.forEach(function(R){return N[R]=0});var I=pa(N,p,f);c[y]=n(r[w],a[I])};for(v=0;v<c.length;++v)g(v)}return[c,i]}}A.registerBackend("cpu",function(){return new Rv},1);var kv=Wd(function(n,t){return n/t}),Tv=Vd(Ir,kv),Av={kernelName:"MaxPoolWithArgmax",backendName:"cpu",kernelFunc:function(n){var t=n.inputs,e=n.attrs,r=n.backend,a=t.x,o=e,i=o.filterSize,s=o.strides,u=o.pad,c=o.includeBatchInIndex,l=r;G(a,"MaxPoolWithArgmax");var p=l.data.get(a.dataId).values,d=en(a.shape,i,s,[1,1],u),f=function(y,x,b,w,N){var I=Yo(y,0,b,je(x),N,"max"),R=Ld(y,x,b,N,!0,w);return[I.values,R.values]}(p,a.shape,a.dtype,c,d),h=f[0],m=f[1],v=l.write(h,d.outShape,a.dtype),g=l.write(m,d.outShape,a.dtype);return[{dataId:v,shape:d.outShape,dtype:a.dtype},{dataId:g,shape:d.outShape,dtype:"int32"}]}},Dv={kernelName:"NonMaxSuppressionV5",backendName:"cpu",kernelFunc:function(n){var t=n.inputs,e=n.backend,r=n.attrs,a=t,o=a.boxes,i=a.scores,s=r,u=s.maxOutputSize,c=s.iouThreshold,l=s.scoreThreshold,p=s.softNmsSigma,d=e;G(o,"NonMaxSuppressionWithScore");var f=Ns(d.data.get(o.dataId).values,d.data.get(i.dataId).values,u,c,l,p);return[f.selectedIndices,f.selectedScores]}},Ov={kernelName:"Square",backendName:"cpu",kernelFunc:function(n){var t=n.inputs,e=n.backend,r=t.x,a=e;G(r,"square");for(var o=a.data.get(r.dataId).values,i=new Float32Array(o.length),s=0;s<o.length;++s){var u=o[s];i[s]=u*u}return{dataId:a.write(i,r.shape,r.dtype),shape:r.shape,dtype:r.dtype}}},_v=Wd(function(n,t){var e=n-t;return e*e});function zd(n,t,e,r,a){for(var o=$(t),i=t.length,s=je(t),u=je(a),c=vn(e,$(a)),l=0;l<o;++l){for(var p=Ci(l,i,s),d=new Array(p.length),f=0;f<d.length;f++)d[f]=p[r[f]];c[pa(d,i,u)]=n[l]}return c}for(var No=0,Yu=[Dv,Ov,Vd(Rr,_v),Tv,{kernelName:"Transpose",backendName:"cpu",kernelFunc:function(n){var t=n.inputs,e=n.attrs,r=n.backend,a=t.x,o=e.perm,i=r;G(a,"transpose");for(var s=a.shape.length,u=new Array(s),c=0;c<u.length;c++)u[c]=a.shape[o[c]];var l=zd(i.data.get(a.dataId).values,a.shape,a.dtype,o,u);return{dataId:i.write(l,u,a.dtype),shape:u,dtype:a.dtype}}},Av];No<Yu.length;No++)mi(Yu[No]);var kn,Fv=function(n){this.variableNames=["A"];var t=Pe(),e=n[0],r=n[1];this.outputShape=n,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+r+".0, "+e+`.0);

        vec4 values = `+t.texture2D+`(A, uv);
        float value;
        if (depth == 0) {
          value = values.r;
        } else if (depth == 1) {
          value = values.g;
        } else if (depth == 2) {
          value = values.b;
        } else if (depth == 3) {
          value = values.a;
        }

        setOutput(floor(value * 255.0 + 0.5));
      }
    `},Mv=function(n){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;var t=Pe(),e=n[0],r=n[1];this.outputShape=n,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];

        vec4 result = vec4(0.);

        for(int row=0; row<=1; row++) {
          for(int col=0; col<=1; col++) {
            texC = coords[1] + row;
            depth = coords[2] + col;

            vec2 uv = (vec2(texC, texR) + halfCR) /
                       vec2(`+r+".0, "+e+`.0);
            vec4 values = `+t.texture2D+`(A, uv);
            float value;
            if (depth == 0) {
              value = values.r;
            } else if (depth == 1) {
              value = values.g;
            } else if (depth == 2) {
              value = values.b;
            } else if (depth == 3) {
              value = values.a;
            }

            result[row * 2 + col] = floor(value * 255.0 + 0.5);
          }
        }

        `+t.output+` = result;
      }
    `},Pv=function(n,t){this.variableNames=["A"];for(var e=new Array(n.length),r=0;r<e.length;r++)e[r]=n[t[r]];this.outputShape=e,this.rank=e.length;var a=ge(this.rank),o=function(i){var s=i.length;if(s>6)throw Error("Transpose for rank "+s+" is not yet supported");for(var u=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],c=new Array(s),l=0;l<i.length;l++)c[i[l]]=u[l];return c.join()}(t);this.userCode=`
    void main() {
      `+a+` resRC = getOutputCoords();
      setOutput(getA(`+o+`));
    }
    `},Bv=function(n,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0;for(var e=new Array(n.length),r=0;r<e.length;r++)e[r]=n[t[r]];if(this.outputShape=e,this.rank=e.length,this.rank>6)throw Error("Packed transpose for rank "+this.rank+" is not yet supported.");var a=ge(this.rank),o=tp("rc",this.rank),i=new Array(this.rank);for(r=0;r<t.length;r++)i[t[r]]=o[r];var s="vec2("+i.slice(-2).join()+")",u="++"+o[this.rank-1]+" < "+e[this.rank-1],c="getChannel(getA("+i.join()+"), "+s+")";this.userCode=`
    void main() {
      `+a+` rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = `+c+`;
      if(`+u+`) {
        result[1] = `+c+`;
      }
      --`+o[this.rank-1]+`;
      if(++`+o[this.rank-2]+" < "+e[this.rank-2]+`) {
        result[2] = `+c+`;
        if(`+u+`) {
          result[3] = `+c+`;
        }
      }
      setOutput(result);
    }
    `};for(var So=0,Qu=[{kernelName:"FromPixels",backendName:"webgl",kernelFunc:function(n){var t=n.inputs,e=n.backend,r=n.attrs,a=t.pixels,o=r.numChannels,i=typeof HTMLVideoElement!="undefined"&&a instanceof HTMLVideoElement,s=typeof HTMLImageElement!="undefined"&&a instanceof HTMLImageElement,u=i?[a.videoWidth,a.videoHeight]:[a.width,a.height],c=u[0],l=u[1],p=[l,c],d=[l,c,o];(s||i)&&(kn==null&&(kn=document.createElement("canvas").getContext("2d")),kn.canvas.width=c,kn.canvas.height=l,kn.drawImage(a,0,0,c,l),a=kn.canvas);var f=e.makeTensorInfo(p,"int32");e.texData.get(f.dataId).usage=Qe.PIXELS,e.gpgpu.uploadPixelDataToTexture(e.getTexture(f.dataId),a);var h=M().getBool("WEBGL_PACK")?new Mv(d):new Fv(d),m=e.runWebGLProgram(h,[f],"int32");return e.disposeData(f.dataId),m}},{kernelName:Ir,backendName:"webgl",kernelFunc:function(n){var t=n.inputs,e=n.backend,r=t;return function(a,o,i){var s=new Ee(_h,a.shape,o.shape);return M().getBool("WEBGL_PACK_BINARY_OPERATIONS")&&(s=new yt(Fh,a.shape,o.shape,!0)),i.runWebGLProgram(s,[a,o],"float32")}(r.a,r.b,e)}},{kernelName:"NonMaxSuppressionV5",backendName:"webgl",kernelFunc:function(n){var t=n.inputs,e=n.backend,r=n.attrs;da("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");var a=t,o=a.boxes,i=a.scores,s=r,u=s.maxOutputSize,c=s.iouThreshold,l=s.scoreThreshold,p=s.softNmsSigma,d=e,f=Ns(d.readSync(o.dataId),d.readSync(i.dataId),u,c,l,p);return[f.selectedIndices,f.selectedScores]}},{kernelName:"Square",backendName:"webgl",kernelFunc:function(n){var t=n.inputs,e=n.backend,r=t.x,a=e,o=new re(r.shape,"return x * x;");return a.runWebGLProgram(o,[r],r.dtype)}},{kernelName:Rr,backendName:"webgl",kernelFunc:function(n){var t=n.inputs,e=n.backend,r=t,a=r.a,o=r.b,i=e,s=M().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new yt("return (a - b) * (a - b);",a.shape,o.shape):new Ee("return (a - b) * (a - b);",a.shape,o.shape);return i.compileAndRun(s,[a,o])}},{kernelName:"Transpose",backendName:"webgl",kernelFunc:function(n){for(var t,e=n.inputs,r=n.attrs,a=n.backend,o=e.x,i=r.perm,s=a,u=o.shape.length,c=new Array(u),l=0;l<c.length;l++)c[l]=o.shape[i[l]];if(s.shouldExecuteOnCPU([o])){var p=zd(s.texData.get(o.dataId).values,o.shape,o.dtype,i,c);t=s.makeTensorInfo(c,o.dtype),s.texData.get(t.dataId).values=p}else t=function(d,f,h){var m=M().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Bv(d.shape,f):new Pv(d.shape,f);return h.runWebGLProgram(m,[d],d.dtype)}(o,i,s);return t}},{kernelName:"MaxPoolWithArgmax",backendName:"webgl",kernelFunc:function(n){var t=n.inputs,e=n.attrs,r=n.backend,a=t.x,o=e,i=o.filterSize,s=o.strides,u=o.pad,c=o.includeBatchInIndex,l=r;E(a.shape.length===4,function(){return"Error in maxPool: input must be rank 4 but got rank "+a.shape.length+"."});var p=[1,1];E(Be(s,p),function(){return"Error in maxPool: Either strides or dilations must be 1. Got strides "+s+" and dilations '"+p+"'"});var d=en(a.shape,i,s,p,u),f=function(h,m,v,g){var y=new lr(v,"max",!1),x=g.runWebGLProgram(y,[h],"float32");return y=new lr(v,"max",!0,!0,m),[x,g.runWebGLProgram(y,[h],"float32")]}(a,c,d,l);return[f[0],f[1]]}}];So<Qu.length;So++)mi(Qu[So]);for(var Eo=0,Ju=[{kernelName:Oi,inputsToSave:["a","b"],gradFunc:function(n,t){var e=t[0],r=t[1],a=ie(e.shape,r.shape);return{a:function(){var o=n,i=ke(e.shape,a);return i.length>0&&(o=o.sum(i)),o.reshape(e.shape)},b:function(){var o=n,i=ke(r.shape,a);return i.length>0&&(o=o.sum(i)),o.reshape(r.shape)}}}},{kernelName:"AddN",saveAllInputs:!0,gradFunc:function(n,t){var e={};return t.forEach(function(r,a){e[a]=function(){return n.clone()}}),e}},{kernelName:_i,gradFunc:function(n,t,e){for(var r=e,a=r.inputShape,o=r.shape,i=Array.from(o),s=a.length-1;s>=0;s--)if(a[s]===o[s])i[s]=1;else if(a[s]!==1)throw new Error("broadcastTo(): ["+a+"] cannot be broadcast to ["+o+"].");var u=[];for(s=0;s<i.length;s++)i[s]>1&&u.push(s);return{x:function(){return n.sum(u,!0)}}}},{kernelName:Ir,inputsToSave:["a","b"],gradFunc:function(n,t){var e=t[0],r=t[1],a=ie(e.shape,r.shape);return{a:function(){var o=ct(n,r.toFloat()),i=ke(e.shape,a);return i.length>0?xt(o,i).reshape(e.shape):o},b:function(){var o=n.mul(e.toFloat()),i=ke(r.shape,a);i.length>0&&(o=xt(o,i).reshape(r.shape));var s=Wa(r);return kr(ct(o,s.toFloat()))}}}},{kernelName:"FusedBatchNorm",inputsToSave:["x","mean","variance","scale"],gradFunc:function(n,t,e){var r=e.varianceEpsilon,a=t[0],o=t[1],i=t[2],s=t[3],u=Ap(a),c=s==null?j(1):s,l=ke(o.shape,u.shape),p=[];if(o.rank===1){for(var d=0;d<u.shape.length-1;++d)p.push(u.shape[d]);p.push(1)}var f=et(a,o),h=ye(n,c),m=Ra(nt(i,j(r))),v=ye(ye(ye(m,m),m),j(-.5));return{x:function(){return o.rank===1?Le(ye(ye(n,Xt(m.as4D(1,1,1,o.shape[0]),p)),c),a.shape):Le(ye(ye(n,m),c),a.shape)},mean:function(){var g=ye(ye(m,j(-1)),h);return o.rank===1&&(g=xt(g,l)),Le(g,o.shape)},variance:function(){var g=ye(ye(v,f),h);return o.rank===1&&(g=xt(g,l)),Le(g,o.shape)},scale:function(){var g=ye(f,m),y=ye(n,g);return o.rank===1&&(y=xt(y,l)),Le(y,o.shape)},offset:function(){var g=n;return o.rank===1&&(g=xt(g,l)),Le(g,o.shape)}}}},{kernelName:Mi,gradFunc:function(n){return{x:function(){return n.toFloat()}}}},{kernelName:Fi,inputsToSave:["indices"],gradFunc:function(n,t){var e=t[0];return{indices:function(){return xe(e.shape,"float32")}}}},{kernelName:Bi,inputsToSave:["x"],gradFunc:function(n,t,e){var r=t[0],a=e.paddings.map(function(o){return o[0]});return{x:function(){return n.slice(a,r.shape)}}}},{kernelName:"Square",inputsToSave:["x"],gradFunc:function(n,t){var e=t[0];return{x:function(){return n.mul(e.toFloat().mul(2))}}}},{kernelName:Rr,inputsToSave:["a","b"],gradFunc:function(n,t){var e=t[0],r=t[1],a=j(2);return{a:function(){return ye(n,ye(a,et(e,r)))},b:function(){return ye(n,ye(a,et(r,e)))}}}},{kernelName:Pi,inputsToSave:["x"],gradFunc:function(n,t,e){var r=t[0],a=e.reps;return{x:function(){var o=ue(r);if(r.rank===1)for(var i=0;i<a[0];++i)o=o.add(n.slice([i*r.shape[0]],[r.shape[0]]));else if(r.rank===2)for(i=0;i<a[0];++i)for(var s=0;s<a[1];++s)o=o.add(n.slice([i*r.shape[0],s*r.shape[1]],[r.shape[0],r.shape[1]]));else if(r.rank===3)for(i=0;i<a[0];++i)for(s=0;s<a[1];++s)for(var u=0;u<a[2];++u)o=o.add(n.slice([i*r.shape[0],s*r.shape[1],u*r.shape[2]],[r.shape[0],r.shape[1],r.shape[2]]));else{if(r.rank!==4)throw new Error("Gradient for tile operation is not implemented for rank-"+r.rank+" tensors yet.");for(i=0;i<a[0];++i)for(s=0;s<a[1];++s)for(u=0;u<a[2];++u)for(var c=0;c<a[3];++c)o=o.add(n.slice([i*r.shape[0],s*r.shape[1],u*r.shape[2],c*r.shape[3]],[r.shape[0],r.shape[1],r.shape[2],r.shape[3]]))}return o}}}},{kernelName:"Transpose",gradFunc:function(n,t,e){var r=Na(e.perm);return{x:function(){return Ye(n,r)}}}}];Eo<Ju.length;Eo++)Tc(Ju[Eo]);var Lv=function(){function n(){}return n.prototype.fetch=function(t,e){return fetch(t,e)},n.prototype.now=function(){return performance.now()},n.prototype.encode=function(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error("Browser's encoder only supports utf-8, but got "+e);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(t)},n.prototype.decode=function(t,e){return new TextDecoder(e).decode(t)},n}();M().get("IS_BROWSER")&&M().setPlatform("browser",new Lv);var Io,Vv=function(){return require("node-fetch")},Wv=function(){function n(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}return n.prototype.fetch=function(t,e){return M().global.fetch!=null?M().global.fetch(t,e):(Io==null&&(Io=Vv()),Io(t,e))},n.prototype.now=function(){var t=process.hrtime();return 1e3*t[0]+t[1]/1e6},n.prototype.encode=function(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error("Node built-in encoder only supports utf-8, but got "+e);return this.textEncoder.encode(t)},n.prototype.decode=function(t,e){return t.length===0?"":new this.util.TextDecoder(e).decode(t)},n}();M().get("IS_NODE")&&M().setPlatform("node",new Wv);var Qo={float32:4,int32:4,uint16:2,uint8:1,bool:1},ya=4;function Ud(n,t){for(var e={},r=0,a=function(s){var u=s.name,c=s.dtype,l=s.shape,p=$(l),d=void 0;if("quantization"in s){var f=s.quantization;if(f.dtype!=="uint8"&&f.dtype!=="uint16")throw new Error("Weight "+s.name+" has unknown quantization dtype "+f.dtype+". Supported quantization dtypes are: 'uint8' and 'uint16'.");var h=Qo[f.dtype],m=n.slice(r,r+p*h),v=f.dtype==="uint8"?new Uint8Array(m):new Uint16Array(m);if(c==="float32")d=Float32Array.from(v,function(N){return N*f.scale+f.min});else{if(c!=="int32")throw new Error("Unsupported dtype in weight '"+u+"': "+c);d=Int32Array.from(v,function(N){return Math.round(N*f.scale+f.min)})}r+=p*h}else if(c==="string"){var g=$(s.shape);d=[];for(var y=0;y<g;y++){var x=new Uint32Array(n.slice(r,r+ya))[0];r+=ya;var b=new Uint8Array(n.slice(r,r+x));d.push(b),r+=x}}else{var w=Qo[c];if(m=n.slice(r,r+p*w),c==="float32")d=new Float32Array(m);else if(c==="int32")d=new Int32Array(m);else{if(c!=="bool")throw new Error("Unsupported dtype in weight '"+u+"': "+c);d=new Uint8Array(m)}r+=p*w}e[u]=Re(d,l,c)},o=0,i=t;o<i.length;o++)a(i[o]);return e}function zv(n){if(n===null)throw new Error("Invalid input value: "+JSON.stringify(n));var t=0,e=[];n.forEach(function(o){if(t+=o.byteLength,e.push(o.byteLength===o.buffer.byteLength?o:new o.constructor(o)),!(o instanceof Float32Array||o instanceof Int32Array||o instanceof Uint8Array))throw new Error("Unsupported TypedArray subtype: "+o.constructor.name)});var r=new Uint8Array(t),a=0;return e.forEach(function(o){r.set(new Uint8Array(o.buffer),a),a+=o.byteLength}),r.buffer}var Jo=typeof Buffer!="undefined"&&(typeof Blob=="undefined"||typeof atob=="undefined"||typeof btoa=="undefined");function Zu(n){return Jo?Buffer.byteLength(n):new Blob([n]).size}function mu(n){var t=0;n.forEach(function(a){t+=a.byteLength});var e=new Uint8Array(t),r=0;return n.forEach(function(a){e.set(new Uint8Array(a),r),r+=a.byteLength}),e.buffer}function ec(n){for(n=n.trim();n.endsWith("/");)n=n.slice(0,n.length-1);var t=n.split("/");return t[t.length-1]}function Lr(n){if(n.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:n.modelTopology==null?0:Zu(JSON.stringify(n.modelTopology)),weightSpecsBytes:n.weightSpecs==null?0:Zu(JSON.stringify(n.weightSpecs)),weightDataBytes:n.weightData==null?0:n.weightData.byteLength}}var Ze=function(){function n(){this.saveRouters=[],this.loadRouters=[]}return n.getInstance=function(){return n.instance==null&&(n.instance=new n),n.instance},n.registerSaveRouter=function(t){n.getInstance().saveRouters.push(t)},n.registerLoadRouter=function(t){n.getInstance().loadRouters.push(t)},n.getSaveHandlers=function(t){return n.getHandlers(t,"save")},n.getLoadHandlers=function(t,e){return n.getHandlers(t,"load",e)},n.getHandlers=function(t,e,r){var a=[];return(e==="load"?n.getInstance().loadRouters:n.getInstance().saveRouters).forEach(function(o){var i=o(t,r);i!==null&&a.push(i)}),a},n}(),Ln="://",$t=function(){function n(){this.managers={}}return n.getInstance=function(){return n.instance==null&&(n.instance=new n),n.instance},n.registerManager=function(t,e){E(t!=null,function(){return"scheme must not be undefined or null."}),t.endsWith(Ln)&&(t=t.slice(0,t.indexOf(Ln))),E(t.length>0,function(){return"scheme must not be an empty string."});var r=n.getInstance();E(r.managers[t]==null,function(){return"A model store manager is already registered for scheme '"+t+"'."}),r.managers[t]=e},n.getManager=function(t){var e=this.getInstance().managers[t];if(e==null)throw new Error("Cannot find model manager for scheme '"+t+"'");return e},n.getSchemes=function(){return Object.keys(this.getInstance().managers)},n}();function sa(n){if(n.indexOf(Ln)===-1)throw new Error("The url string provided does not contain a scheme. Supported schemes are: "+$t.getSchemes().join(","));return{scheme:n.split(Ln)[0],path:n.split(Ln)[1]}}function tc(n,t,e){return e===void 0&&(e=!1),Y(this,void 0,void 0,function(){var r,a,o,i,s,u,c,l,p;return Q(this,function(d){switch(d.label){case 0:return E(n!==t,function(){return"Old path and new path are the same: '"+n+"'"}),E((r=Ze.getLoadHandlers(n)).length>0,function(){return"Copying failed because no load handler is found for source URL "+n+"."}),E(r.length<2,function(){return"Copying failed because more than one ("+r.length+") load handlers for source URL "+n+"."}),a=r[0],E((o=Ze.getSaveHandlers(t)).length>0,function(){return"Copying failed because no save handler is found for destination URL "+t+"."}),E(o.length<2,function(){return"Copying failed because more than one ("+r.length+") save handlers for destination URL "+t+"."}),i=o[0],s=sa(n).scheme,u=sa(n).path,c=s===sa(n).scheme,[4,a.load()];case 1:return l=d.sent(),e&&c?[4,$t.getManager(s).removeModel(u)]:[3,3];case 2:d.sent(),d.label=3;case 3:return[4,i.save(l)];case 4:return p=d.sent(),!e||c?[3,6]:[4,$t.getManager(s).removeModel(u)];case 5:d.sent(),d.label=6;case 6:return[2,p.modelArtifactsInfo]}})})}var fn="models_store",Kt="model_info_store";function Gd(){if(!M().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");var n=window||self,t=n.indexedDB||n.mozIndexedDB||n.webkitIndexedDB||n.msIndexedDB||n.shimIndexedDB;if(t==null)throw new Error("The current browser does not appear to support IndexedDB.");return t}function Zo(n){var t=n.result;t.createObjectStore(fn,{keyPath:"modelPath"}),t.createObjectStore(Kt,{keyPath:"modelPath"})}var Vn=function(){function n(t){if(this.indexedDB=Gd(),t==null||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t}return n.prototype.save=function(t){return Y(this,void 0,void 0,function(){return Q(this,function(e){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return[2,this.databaseAction(this.modelPath,t)]})})},n.prototype.load=function(){return Y(this,void 0,void 0,function(){return Q(this,function(t){return[2,this.databaseAction(this.modelPath)]})})},n.prototype.databaseAction=function(t,e){var r=this;return new Promise(function(a,o){var i=r.indexedDB.open("tensorflowjs",1);i.onupgradeneeded=function(){return Zo(i)},i.onsuccess=function(){var s=i.result;if(e==null){var u=s.transaction(fn,"readonly"),c=u.objectStore(fn).get(r.modelPath);c.onsuccess=function(){if(c.result==null)return s.close(),o(new Error("Cannot find model with path '"+r.modelPath+"' in IndexedDB."));a(c.result.modelArtifacts)},c.onerror=function(m){return s.close(),o(c.error)},u.oncomplete=function(){return s.close()}}else{var l,p=Lr(e),d=s.transaction(Kt,"readwrite"),f=d.objectStore(Kt),h=f.put({modelPath:r.modelPath,modelArtifactsInfo:p});h.onsuccess=function(){var m=(l=s.transaction(fn,"readwrite")).objectStore(fn).put({modelPath:r.modelPath,modelArtifacts:e,modelArtifactsInfo:p});m.onsuccess=function(){return a({modelArtifactsInfo:p})},m.onerror=function(v){var g=(f=d.objectStore(Kt)).delete(r.modelPath);g.onsuccess=function(){return s.close(),o(m.error)},g.onerror=function(y){return s.close(),o(m.error)}}},h.onerror=function(m){return s.close(),o(h.error)},d.oncomplete=function(){l==null?s.close():l.oncomplete=function(){return s.close()}}}},i.onerror=function(s){return o(i.error)}})},n.URL_SCHEME="indexeddb://",n}(),nc=function(n){return M().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(Vn.URL_SCHEME)?(t=n.slice(Vn.URL_SCHEME.length),new Vn(t)):null;var t};Ze.registerSaveRouter(nc),Ze.registerLoadRouter(nc);var Uv=function(){function n(){this.indexedDB=Gd()}return n.prototype.listModels=function(){return Y(this,void 0,void 0,function(){var t=this;return Q(this,function(e){return[2,new Promise(function(r,a){var o=t.indexedDB.open("tensorflowjs",1);o.onupgradeneeded=function(){return Zo(o)},o.onsuccess=function(){var i=o.result,s=i.transaction(Kt,"readonly"),u=s.objectStore(Kt).getAll();u.onsuccess=function(){for(var c={},l=0,p=u.result;l<p.length;l++){var d=p[l];c[d.modelPath]=d.modelArtifactsInfo}r(c)},u.onerror=function(c){return i.close(),a(u.error)},s.oncomplete=function(){return i.close()}},o.onerror=function(i){return a(o.error)}})]})})},n.prototype.removeModel=function(t){return Y(this,void 0,void 0,function(){var e=this;return Q(this,function(r){var a;return t=(a=t).startsWith(Vn.URL_SCHEME)?a.slice(Vn.URL_SCHEME.length):a,[2,new Promise(function(o,i){var s=e.indexedDB.open("tensorflowjs",1);s.onupgradeneeded=function(){return Zo(s)},s.onsuccess=function(){var u,c=s.result,l=c.transaction(Kt,"readwrite"),p=l.objectStore(Kt),d=p.get(t);d.onsuccess=function(){if(d.result==null)return c.close(),i(new Error("Cannot find model with path '"+t+"' in IndexedDB."));var f=p.delete(t),h=function(){var m=(u=c.transaction(fn,"readwrite")).objectStore(fn).delete(t);m.onsuccess=function(){return o(d.result.modelArtifactsInfo)},m.onerror=function(v){return i(d.error)}};f.onsuccess=h,f.onerror=function(m){return h(),c.close(),i(d.error)}},d.onerror=function(f){return c.close(),i(d.error)},l.oncomplete=function(){u==null?c.close():u.oncomplete=function(){return c.close()}}},s.onerror=function(u){return i(s.error)}})]})})},n}();if(M().getBool("IS_BROWSER"))try{$t.registerManager(Vn.URL_SCHEME,new Uv)}catch(n){}var Ot="/",Mn="tensorflowjs_models",Hd="info",Gv="model_topology",Hv="weight_specs",qv="weight_data",jv="model_metadata";function qd(n){return{info:[Mn,n,Hd].join(Ot),topology:[Mn,n,Gv].join(Ot),weightSpecs:[Mn,n,Hv].join(Ot),weightData:[Mn,n,qv].join(Ot),modelMetadata:[Mn,n,jv].join(Ot)}}function Kv(n){var t=n.split(Ot);if(t.length<3)throw new Error("Invalid key format: "+n);return t.slice(1,t.length-1).join(Ot)}var Wn=function(){function n(t){if(!M().getBool("IS_BROWSER")||typeof window=="undefined"||window.localStorage===void 0)throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,t==null||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=qd(this.modelPath)}return n.prototype.save=function(t){return Y(this,void 0,void 0,function(){var e,r,a;return Q(this,function(o){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");e=JSON.stringify(t.modelTopology),r=JSON.stringify(t.weightSpecs),a=Lr(t);try{return this.LS.setItem(this.keys.info,JSON.stringify(a)),this.LS.setItem(this.keys.topology,e),this.LS.setItem(this.keys.weightSpecs,r),this.LS.setItem(this.keys.weightData,function(i){if(Jo)return Buffer.from(i).toString("base64");for(var s=new Uint8Array(i),u="",c=0,l=s.length;c<l;c++)u+=String.fromCharCode(s[c]);return btoa(u)}(t.weightData)),this.LS.setItem(this.keys.modelMetadata,JSON.stringify({format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,userDefinedMetadata:t.userDefinedMetadata})),[2,{modelArtifactsInfo:a}]}catch(i){throw this.LS.removeItem(this.keys.info),this.LS.removeItem(this.keys.topology),this.LS.removeItem(this.keys.weightSpecs),this.LS.removeItem(this.keys.weightData),this.LS.removeItem(this.keys.modelMetadata),new Error("Failed to save model '"+this.modelPath+"' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes="+a.modelTopologyBytes+", weightSpecsBytes="+a.weightSpecsBytes+", weightDataBytes="+a.weightDataBytes+".")}return[2]})})},n.prototype.load=function(){return Y(this,void 0,void 0,function(){var t,e,r,a,o,i,s;return Q(this,function(u){if((t=JSON.parse(this.LS.getItem(this.keys.info)))==null)throw new Error("In local storage, there is no model with name '"+this.modelPath+"'");if(t.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");if(e={},(r=JSON.parse(this.LS.getItem(this.keys.topology)))==null)throw new Error("In local storage, the topology of model '"+this.modelPath+"' is missing.");if(e.modelTopology=r,(a=JSON.parse(this.LS.getItem(this.keys.weightSpecs)))==null)throw new Error("In local storage, the weight specs of model '"+this.modelPath+"' are missing.");if(e.weightSpecs=a,(o=this.LS.getItem(this.keys.modelMetadata))!=null&&(i=JSON.parse(o),e.format=i.format,e.generatedBy=i.generatedBy,e.convertedBy=i.convertedBy,e.userDefinedMetadata=i.userDefinedMetadata),(s=this.LS.getItem(this.keys.weightData))==null)throw new Error("In local storage, the binary weight values of model '"+this.modelPath+"' are missing.");return e.weightData=function(c){if(Jo){var l=Buffer.from(c,"base64");return l.buffer.slice(l.byteOffset,l.byteOffset+l.byteLength)}for(var p=atob(c),d=new Uint8Array(p.length),f=0;f<p.length;++f)d.set([p.charCodeAt(f)],f);return d.buffer}(s),[2,e]})})},n.URL_SCHEME="localstorage://",n}(),rc=function(n){return M().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(Wn.URL_SCHEME)?(t=n.slice(Wn.URL_SCHEME.length),new Wn(t)):null;var t};Ze.registerSaveRouter(rc),Ze.registerLoadRouter(rc);var Xv=function(){function n(){E(M().getBool("IS_BROWSER"),function(){return"Current environment is not a web browser"}),E(typeof window=="undefined"||window.localStorage!==void 0,function(){return"Current browser does not appear to support localStorage"}),this.LS=window.localStorage}return n.prototype.listModels=function(){return Y(this,void 0,void 0,function(){var t,e,r,a,o,i;return Q(this,function(s){for(t={},e=Mn+Ot,r=Ot+Hd,a=0;a<this.LS.length;++a)(o=this.LS.key(a)).startsWith(e)&&o.endsWith(r)&&(i=Kv(o),t[i]=JSON.parse(this.LS.getItem(o)));return[2,t]})})},n.prototype.removeModel=function(t){return Y(this,void 0,void 0,function(){var e,r;return Q(this,function(a){var o;if(t=(o=t).startsWith(Wn.URL_SCHEME)?o.slice(Wn.URL_SCHEME.length):o,e=qd(t),this.LS.getItem(e.info)==null)throw new Error("Cannot find model at path '"+t+"'");return r=JSON.parse(this.LS.getItem(e.info)),this.LS.removeItem(e.info),this.LS.removeItem(e.topology),this.LS.removeItem(e.weightSpecs),this.LS.removeItem(e.weightData),[2,r]})})},n}();if(M().getBool("IS_BROWSER"))try{$t.registerManager(Wn.URL_SCHEME,new Xv)}catch(n){}var $v="model",Yv=".json",Qv=".weights.bin";function ac(n){return new Promise(function(t){return setTimeout(t)}).then(n)}var Ro=function(){function n(t){if(!M().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");t.startsWith(n.URL_SCHEME)&&(t=t.slice(n.URL_SCHEME.length)),t!=null&&t.length!==0||(t=$v),this.modelTopologyFileName=t+Yv,this.weightDataFileName=t+Qv}return n.prototype.save=function(t){return Y(this,void 0,void 0,function(){var e,r,a,o,i,s;return Q(this,function(u){switch(u.label){case 0:if(typeof document=="undefined")throw new Error("Browser downloads are not supported in this environment since `document` is not present");if(e=window.URL.createObjectURL(new Blob([t.weightData],{type:"application/octet-stream"})),!(t.modelTopology instanceof ArrayBuffer))return[3,1];throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");case 1:return r=[{paths:["./"+this.weightDataFileName],weights:t.weightSpecs}],a={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,weightsManifest:r},o=window.URL.createObjectURL(new Blob([JSON.stringify(a)],{type:"application/json"})),(i=this.jsonAnchor==null?document.createElement("a"):this.jsonAnchor).download=this.modelTopologyFileName,i.href=o,[4,ac(function(){return i.dispatchEvent(new MouseEvent("click"))})];case 2:return u.sent(),t.weightData==null?[3,4]:((s=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor).download=this.weightDataFileName,s.href=e,[4,ac(function(){return s.dispatchEvent(new MouseEvent("click"))})]);case 3:u.sent(),u.label=4;case 4:return[2,{modelArtifactsInfo:Lr(t)}]}})})},n.URL_SCHEME="downloads://",n}(),Jv=function(){function n(t){if(t==null||t.length<1)throw new Error("When calling browserFiles, at least 1 file is required, but received "+t);this.files=t}return n.prototype.load=function(){return Y(this,void 0,void 0,function(){var t,e,r=this;return Q(this,function(a){return t=this.files[0],e=this.files.slice(1),[2,new Promise(function(o,i){var s=new FileReader;s.onload=function(u){var c=JSON.parse(u.target.result),l=c.modelTopology;if(l!=null){e.length===0&&o({modelTopology:l});var p=c.weightsManifest;if(p!=null){var d;try{d=r.checkManifestAndWeightFiles(p,e)}catch(v){return void i(v)}var f=[],h=[],m=[];p.forEach(function(v){v.paths.forEach(function(g){h.push(g),m.push(null)}),f.push.apply(f,v.weights)}),p.forEach(function(v){v.paths.forEach(function(g){var y=new FileReader;y.onload=function(x){var b=x.target.result,w=h.indexOf(g);m[w]=b,m.indexOf(null)===-1&&o({modelTopology:l,weightSpecs:f,weightData:mu(m),format:c.format,generatedBy:c.generatedBy,convertedBy:c.convertedBy,userDefinedMetadata:c.userDefinedMetadata})},y.onerror=function(x){return i("Failed to weights data from file of path '"+g+"'.")},y.readAsArrayBuffer(d[g])})})}else i(new Error("weightManifest field is missing from file "+t.name))}else i(new Error("modelTopology field is missing from file "+t.name))},s.onerror=function(u){return i("Failed to read model topology and weights manifest JSON from file '"+t.name+"'. BrowserFiles supports loading Keras-style tf.Model artifacts only.")},s.readAsText(t)})]})})},n.prototype.checkManifestAndWeightFiles=function(t,e){for(var r=[],a=e.map(function(u){return ec(u.name)}),o={},i=0,s=t;i<s.length;i++)s[i].paths.forEach(function(u){var c=ec(u);if(r.indexOf(c)!==-1)throw new Error("Duplicate file basename found in weights manifest: '"+c+"'");if(r.push(c),a.indexOf(c)===-1)throw new Error("Weight file with basename '"+c+"' is not provided.");o[u]=e[a.indexOf(c)]});if(r.length!==e.length)throw new Error("Mismatch in the number of files in weights manifest ("+r.length+") and the number of weight files provided ("+e.length+").");return o},n}();function oc(n,t,e,r){(function(o){E(o!=null&&Array.isArray(o)&&o.length>0,function(){return"promises must be a none empty array"})})(n),function(o,i){E(o>=0&&o<=1,function(){return"Progress fraction must be in range [0, 1], but got startFraction "+o}),E(i>=0&&i<=1,function(){return"Progress fraction must be in range [0, 1], but got endFraction "+i}),E(i>=o,function(){return"startFraction must be no more than endFraction, but got startFraction "+o+" and endFraction "+i})}(e=e==null?0:e,r=r==null?1:r);var a=0;return Promise.all(n.map(function(o){return o.then(function(i){var s=e+ ++a/n.length*(r-e);return t(s),i}),o}))}function jd(n,t){return Y(this,void 0,void 0,function(){var e,r,a,o,i,s,u,c,l;return Q(this,function(p){switch(p.label){case 0:return t==null&&(t={}),e=t.fetchFunc==null?M().platform.fetch:t.fetchFunc,r=n.map(function(d){return e(d,t.requestInit,{isBinary:!0})}),a=0,o=.5,t.onProgress!=null?[3,2]:[4,Promise.all(r)];case 1:return i=p.sent(),[3,4];case 2:return[4,oc(r,t.onProgress,a,o)];case 3:i=p.sent(),p.label=4;case 4:return s=i.map(function(d){return d.arrayBuffer()}),u=.5,c=1,t.onProgress!=null?[3,6]:[4,Promise.all(s)];case 5:return l=p.sent(),[3,8];case 6:return[4,oc(s,t.onProgress,u,c)];case 7:l=p.sent(),p.label=8;case 8:return[2,l]}})})}function ic(n){var t=this;return function(e,r,a){return r===void 0&&(r=""),Y(t,void 0,void 0,function(){var o,i,s,u,c,l,p,d,f,h;return Q(this,function(m){switch(m.label){case 0:if(o=e.map(function(){return!1}),i={},s=a!=null?a.map(function(){return!1}):[],u=[],e.forEach(function(v,g){var y=0;v.weights.forEach(function(x){var b="quantization"in x?x.quantization.dtype:x.dtype,w=Qo[b]*$(x.shape),N=function(){o[g]=!0,i[g]==null&&(i[g]=[]),i[g].push({manifestEntry:x,groupOffset:y,sizeBytes:w})};a!=null?a.forEach(function(I,R){I===x.name&&(N(),s[R]=!0)}):N(),u.push(x.name),y+=w})}),!s.every(function(v){return v}))throw c=a.filter(function(v,g){return!s[g]}),new Error("Could not find weights in manifest with names: "+c.join(", ")+`. 
Manifest JSON has weights with names: `+u.join(", ")+".");return l=o.reduce(function(v,g,y){return g&&v.push(y),v},[]),p=[],l.forEach(function(v){e[v].paths.forEach(function(g){var y=r+(r.endsWith("/")?"":"/")+g;p.push(y)})}),[4,n(p)];case 1:return d=m.sent(),f={},h=0,l.forEach(function(v){for(var g=e[v].paths.length,y=0,x=0;x<g;x++)y+=d[h+x].byteLength;for(var b=new ArrayBuffer(y),w=new Uint8Array(b),N=0,I=0;I<g;I++){var R=new Uint8Array(d[h+I]);w.set(R,N),N+=R.byteLength}i[v].forEach(function(k){var T=Ud(b.slice(k.groupOffset,k.groupOffset+k.sizeBytes),[k.manifestEntry]);for(var O in T)f[O]=T[O]}),h+=g}),[2,f]}})})}}Ze.registerSaveRouter(function(n){return M().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(Ro.URL_SCHEME)?function(t){return t===void 0&&(t="model"),new Ro(t)}(n.slice(Ro.URL_SCHEME.length)):null});var Kd=function(){function n(t,e){if(this.DEFAULT_METHOD="POST",e==null&&(e={}),this.weightPathPrefix=e.weightPathPrefix,this.onProgress=e.onProgress,e.fetchFunc!=null?(E(typeof e.fetchFunc=="function",function(){return"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"}),this.fetch=e.fetchFunc):this.fetch=M().platform.fetch,E(t!=null&&t.length>0,function(){return"URL path for http must not be null, undefined or empty."}),Array.isArray(t)&&E(t.length===2,function(){return"URL paths for http must have a length of 2, (actual length is "+t.length+")."}),this.path=t,e.requestInit!=null&&e.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=e.requestInit||{}}return n.prototype.save=function(t){return Y(this,void 0,void 0,function(){var e,r,a,o;return Q(this,function(i){switch(i.label){case 0:if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");return(e=Object.assign({method:this.DEFAULT_METHOD},this.requestInit)).body=new FormData,r=[{paths:["./model.weights.bin"],weights:t.weightSpecs}],a={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,userDefinedMetadata:t.userDefinedMetadata,weightsManifest:r},e.body.append("model.json",new Blob([JSON.stringify(a)],{type:"application/json"}),"model.json"),t.weightData!=null&&e.body.append("model.weights.bin",new Blob([t.weightData],{type:"application/octet-stream"}),"model.weights.bin"),[4,this.fetch(this.path,e)];case 1:if((o=i.sent()).ok)return[2,{modelArtifactsInfo:Lr(t),responses:[o]}];throw new Error("BrowserHTTPRequest.save() failed due to HTTP response status "+o.status+".")}})})},n.prototype.load=function(){return Y(this,void 0,void 0,function(){var t,e,r,a,o,i,s,u,c,l,p,d;return Q(this,function(f){switch(f.label){case 0:return[4,this.fetch(this.path,this.requestInit)];case 1:if(!(t=f.sent()).ok)throw new Error("Request to "+this.path+" failed with status code "+t.status+". Please verify this URL points to the model JSON of the model to load.");f.label=2;case 2:return f.trys.push([2,4,,5]),[4,t.json()];case 3:return e=f.sent(),[3,5];case 4:throw f.sent(),r="Failed to parse model JSON of response from "+this.path+".",this.path.endsWith(".pb")?r+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":r+=" Please make sure the server is serving valid JSON for this request.",new Error(r);case 5:if(a=e.modelTopology,o=e.weightsManifest,i=e.generatedBy,s=e.convertedBy,u=e.format,c=e.userDefinedMetadata,a==null&&o==null)throw new Error("The JSON from HTTP path "+this.path+" contains neither model topology or manifest for weights.");return o==null?[3,7]:[4,this.loadWeights(o)];case 6:d=f.sent(),l=d[0],p=d[1],f.label=7;case 7:return[2,{modelTopology:a,weightSpecs:l,weightData:p,userDefinedMetadata:c,generatedBy:i,convertedBy:s,format:u}]}})})},n.prototype.loadWeights=function(t){return Y(this,void 0,void 0,function(){var e,r,a,o,i,s,u,c,l,p,d;return Q(this,function(f){switch(f.label){case 0:for(e=Array.isArray(this.path)?this.path[1]:this.path,r=function(h){var m=h.lastIndexOf("/"),v=h.lastIndexOf("?"),g=h.substring(0,m),y=v>m?h.substring(v):"";return[g+"/",y]}(e),a=r[0],o=r[1],i=this.weightPathPrefix||a,s=[],u=0,c=t;u<c.length;u++)l=c[u],s.push.apply(s,l.weights);return p=[],t.forEach(function(h){h.paths.forEach(function(m){p.push(i+m+o)})}),[4,jd(p,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress})];case 1:return d=f.sent(),[2,[s,mu(d)]]}})})},n.URL_SCHEME_REGEX=/^https?:\/\//,n}();function ei(n){return n.match(Kd.URL_SCHEME_REGEX)!=null}var sc=function(n,t){return typeof fetch=="undefined"?null:(Array.isArray(n)?n.every(function(e){return ei(e)}):ei(n))?ti(n,{onProgress:t}):null};function ti(n,t){return new Kd(n,t)}Ze.registerSaveRouter(sc),Ze.registerLoadRouter(sc);var ko=function(){function n(t){this.modelArtifacts=t}return n.prototype.load=function(){return Y(this,void 0,void 0,function(){return Q(this,function(t){return[2,this.modelArtifacts]})})},n}(),Zv=function(){function n(t){this.saveHandler=t}return n.prototype.save=function(t){return Y(this,void 0,void 0,function(){return Q(this,function(e){return[2,this.saveHandler(t)]})})},n}(),Pn=Object.freeze({browserFiles:function(n){return new Jv(n)},browserHTTPRequest:function(n,t){return ti(n,t)},concatenateArrayBuffers:mu,decodeWeights:Ud,encodeWeights:function(n,t){return Y(this,void 0,void 0,function(){var e,r,a,o,i,s=this;return Q(this,function(u){switch(u.label){case 0:for(e=[],r=[],a=Array.isArray(n)?n.map(function(c){return c.name}):Object.keys(n),o=function(c){var l=a[c],p=Array.isArray(n)?n[c].tensor:n[l];if(p.dtype!=="float32"&&p.dtype!=="int32"&&p.dtype!=="bool"&&p.dtype!=="string")throw new Error("Unsupported dtype in weight '"+l+"': "+p.dtype);var d={name:l,shape:p.shape,dtype:p.dtype};if(p.dtype==="string"){var f=new Promise(function(h){return Y(s,void 0,void 0,function(){var m,v,g,y,x,b,w;return Q(this,function(N){switch(N.label){case 0:return[4,p.bytes()];case 1:for(m=N.sent(),v=m.reduce(function(I,R){return I+R.length},0)+ya*m.length,g=new Uint8Array(v),y=0,x=0;x<m.length;x++)b=m[x],w=new Uint8Array(new Uint32Array([b.length]).buffer),g.set(w,y),y+=ya,g.set(b,y),y+=b.length;return h(g),[2]}})})});r.push(f)}else r.push(p.data());t!=null&&(d.group=t),e.push(d)},i=0;i<a.length;++i)o(i);return[4,Promise.all(r)];case 1:return[2,{data:zv(u.sent()),specs:e}]}})})},fromMemory:function(n,t,e,r){return arguments.length===1?n.modelTopology!=null||n.weightSpecs!=null?new ko(n):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new ko({modelTopology:n})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new ko({modelTopology:n,weightSpecs:t,weightData:e,trainingConfig:r}))},getLoadHandlers:function(n,t){return Ze.getLoadHandlers(n,t)},getModelArtifactsInfoForJSON:Lr,getSaveHandlers:function(n){return Ze.getSaveHandlers(n)},http:ti,isHTTPScheme:ei,loadWeights:function(n,t,e,r){return t===void 0&&(t=""),Y(this,void 0,void 0,function(){return Q(this,function(a){return[2,ic(function(o){return jd(o,{requestInit:r})})(n,t,e)]})})},registerLoadRouter:function(n){return Ze.registerLoadRouter(n)},registerSaveRouter:function(n){return Ze.registerSaveRouter(n)},weightsLoaderFactory:ic,withSaveHandler:function(n){return new Zv(n)},copyModel:function(n,t){return Y(this,void 0,void 0,function(){return Q(this,function(e){return[2,tc(n,t,!1)]})})},listModels:function(){return Y(this,void 0,void 0,function(){var n,t,e,r,a,o,i;return Q(this,function(s){switch(s.label){case 0:n=$t.getSchemes(),t={},e=0,r=n,s.label=1;case 1:return e<r.length?(a=r[e],[4,$t.getManager(a).listModels()]):[3,4];case 2:for(i in o=s.sent())t[a+Ln+i]=o[i];s.label=3;case 3:return e++,[3,1];case 4:return[2,t]}})})},moveModel:function(n,t){return Y(this,void 0,void 0,function(){return Q(this,function(e){return[2,tc(n,t,!0)]})})},removeModel:function(n){return Y(this,void 0,void 0,function(){var t;return Q(this,function(e){return t=sa(n),[2,$t.getManager(t.scheme).removeModel(t.path)]})})}}),Tn,eg=D({confusionMatrix_:function(n,t,e){var r=S(n,"labels","confusionMatrix"),a=S(t,"predictions","confusionMatrix");E(e==null||e>0&&Number.isInteger(e),function(){return"If provided, numClasses must be a positive integer, but got "+e}),E(r.rank===1,function(){return"Expected the rank of labels to be 1, but got "+r.rank}),E(a.rank===1,function(){return"Expected the rank of predictions to be 1, but got "+a.rank}),E(r.shape[0]===a.shape[0],function(){return"Mismatch in the number of examples: "+r.shape[0]+" vs. "+a.shape[0]+". Labels and predictions should have the same number of elements."}),E(e>0&&Number.isInteger(e),function(){return"numClasses is required to be a positive integer, but got "+e});var o=xn(r.asType("int32"),e),i=xn(a.asType("int32"),e);return o.transpose().matMul(i).asType("int32")}}),tg=Object.freeze({confusionMatrix:eg}),ng=D({fromPixels_:function(n,t){if(t===void 0&&(t=3),t>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(n==null)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");var e=!1,r=!1,a=!1,o=!1,i=!1;if(n.data instanceof Uint8Array)e=!0;else if(typeof ImageData!="undefined"&&n instanceof ImageData)r=!0;else if(typeof HTMLVideoElement!="undefined"&&n instanceof HTMLVideoElement)a=!0;else if(typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement)o=!0;else{if(n.getContext==null)throw new Error("pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was "+n.constructor.name);i=!0}if(a&&a&&n.readyState<2)throw new Error("The video element has not loaded data yet. Please wait for `loadeddata` event on the <video> element.");if(hi("FromPixels",A.backendName)!=null)return A.runKernel("FromPixels",{pixels:n},{numChannels:t});var s,u,c=a?[n.videoWidth,n.videoHeight]:[n.width,n.height],l=c[0],p=c[1];if(i?s=n.getContext("2d").getImageData(0,0,l,p).data:r||e?s=n.data:(o||a)&&(Tn==null&&(Tn=document.createElement("canvas").getContext("2d")),Tn.canvas.width=l,Tn.canvas.height=p,Tn.drawImage(n,0,0,l,p),s=Tn.getImageData(0,0,l,p).data),t===4)u=new Int32Array(s);else{var d=l*p;u=new Int32Array(d*t);for(var f=0;f<d;f++)for(var h=0;h<t;++h)u[f*t+h]=s[4*f+h]}return ki(u,[p,l,t],"int32")}}),Xd=Object.freeze({toPixels:function(n,t){return Y(this,void 0,void 0,function(){var e,r,a,o,i,s,u,c,l,p,d,f,h,m,v,g,y,x,b,w,N,I,R;return Q(this,function(k){switch(k.label){case 0:if(e=S(n,"img","toPixels"),n instanceof me||(e=e.toInt()),e.rank!==2&&e.rank!==3)throw new Error("toPixels only supports rank 2 or 3 tensors, got rank "+e.rank+".");if(r=e.shape.slice(0,2),a=r[0],o=r[1],(i=e.rank===2?1:e.shape[2])>4||i===2)throw new Error("toPixels only supports depth of size 1, 3 or 4 but got "+i);return[4,e.data()];case 1:return s=k.sent(),u=e.min(),c=e.max(),[4,Promise.all([u.data(),c.data()])];case 2:if(l=k.sent(),p=l[0],d=l[1],f=p[0],h=d[0],u.dispose(),c.dispose(),e.dtype==="float32"){if(f<0||h>1)throw new Error("Tensor values for a float32 Tensor must be in the range [0 - 1] but got range ["+f+" - "+h+"].")}else{if(e.dtype!=="int32")throw new Error("Unsupported type for toPixels: "+e.dtype+". Please use float32 or int32 tensors.");if(f<0||h>255)throw new Error("Tensor values for a int32 Tensor must be in the range [0 - 255] but got range ["+f+" - "+h+"].")}for(m=e.dtype==="float32"?255:1,v=new Uint8ClampedArray(o*a*4),g=0;g<a*o;++g)y=void 0,x=void 0,b=void 0,w=void 0,i===1?(y=s[g]*m,x=s[g]*m,b=s[g]*m,w=255):i===3?(y=s[3*g]*m,x=s[3*g+1]*m,b=s[3*g+2]*m,w=255):i===4&&(y=s[4*g]*m,x=s[4*g+1]*m,b=s[4*g+2]*m,w=s[4*g+3]*m),v[(N=4*g)+0]=Math.round(y),v[N+1]=Math.round(x),v[N+2]=Math.round(b),v[N+3]=Math.round(w);return t!=null&&(t.width=o,t.height=a,I=t.getContext("2d"),R=new ImageData(v,o,a),I.putImageData(R,0,0)),e!==n&&e.dispose(),[2,v]}})})},fromPixels:ng}),$d=function(){function n(){}return n.prototype.getClassName=function(){return this.constructor.className},n.fromConfig=function(t,e){return new t(e)},n}(),Yd=function(){function n(){this.classNameMap={}}return n.getMap=function(){return n.instance==null&&(n.instance=new n),n.instance},n.register=function(t){n.getMap().classNameMap[t.className]=[t,t.fromConfig]},n}();function on(n){E(n.className!=null,function(){return"Class being registered does not have the static className property defined."}),E(typeof n.className=="string",function(){return"className is required to be a string, but got type "+typeof n.className}),E(n.className.length>0,function(){return"Class being registered has an empty-string as its className, which is disallowed."}),Yd.register(n)}var rg=Object.freeze({Serializable:$d,SerializationMap:Yd,registerClass:on}),ag="1.7.4",og=Object.freeze({gpgpu_util:um,webgl_util:Pf,forceHalfFloat:function(){M().set("WEBGL_FORCE_F16_TEXTURES",!0)},MathBackendWebGL:Tp,setWebGLContext:Hc,GPGPUContext:Cp}),sn=function(n){function t(){return n!==null&&n.apply(this,arguments)||this}return pt(t,n),t.prototype.minimize=function(e,r,a){r===void 0&&(r=!1);var o=this.computeGradients(e,a),i=o.value,s=o.grads;if(a!=null){var u=a.map(function(c){return{name:c.name,tensor:s[c.name]}});this.applyGradients(u)}else this.applyGradients(s);return We(s),r?i:(i.dispose(),null)},Object.defineProperty(t.prototype,"iterations",{get:function(){return this.iterations_==null&&(this.iterations_=0),this.iterations_},enumerable:!0,configurable:!0}),t.prototype.incrementIterations=function(){this.iterations_=this.iterations+1},t.prototype.computeGradients=function(e,r){return Yl(e,r)},t.prototype.dispose=function(){this.iterations_!=null&&We(this.iterations_)},t.prototype.saveIterations=function(){return Y(this,void 0,void 0,function(){return Q(this,function(e){return this.iterations_==null&&(this.iterations_=0),[2,{name:"iter",tensor:j(this.iterations_,"int32")}]})})},t.prototype.getWeights=function(){return Y(this,void 0,void 0,function(){return Q(this,function(e){throw new Error("getWeights() is not implemented for this optimizer yet.")})})},t.prototype.setWeights=function(e){return Y(this,void 0,void 0,function(){return Q(this,function(r){throw new Error("setWeights() is not implemented for this optimizer class "+this.getClassName())})})},t.prototype.extractIterations=function(e){return Y(this,void 0,void 0,function(){var r;return Q(this,function(a){switch(a.label){case 0:return r=this,[4,e[0].tensor.data()];case 1:return r.iterations_=a.sent()[0],[2,e.slice(1)]}})})},t}($d);Object.defineProperty(sn,Symbol.hasInstance,{value:function(n){return n.minimize!=null&&n.computeGradients!=null&&n.applyGradients!=null}});var vu=function(n){function t(e,r,a){a===void 0&&(a=null);var o=n.call(this)||this;return o.learningRate=e,o.rho=r,o.epsilon=a,o.accumulatedGrads=[],o.accumulatedUpdates=[],a==null&&(o.epsilon=A.backend.epsilon()),o}return pt(t,n),t.prototype.applyGradients=function(e){var r=this;(Array.isArray(e)?e.map(function(a){return a.name}):Object.keys(e)).forEach(function(a,o){var i=A.registeredVariables[a];r.accumulatedGrads[o]==null&&(r.accumulatedGrads[o]={originalName:a+"/accum_grad",variable:Z(function(){return ue(i).variable(!1)})}),r.accumulatedUpdates[o]==null&&(r.accumulatedUpdates[o]={originalName:a+"/accum_var",variable:Z(function(){return ue(i).variable(!1)})});var s=Array.isArray(e)?e[o].tensor:e[a];if(s!=null){var u=r.accumulatedGrads[o].variable,c=r.accumulatedUpdates[o].variable;Z(function(){var l=u.mul(r.rho).add(s.square().mul(1-r.rho)),p=c.add(r.epsilon).sqrt().div(u.add(r.epsilon).sqrt()).mul(s),d=c.mul(r.rho).add(p.square().mul(1-r.rho));u.assign(l),c.assign(d);var f=p.mul(-r.learningRate).add(i);i.assign(f)})}}),this.incrementIterations()},t.prototype.dispose=function(){this.accumulatedUpdates!=null&&(We(this.accumulatedGrads.map(function(e){return e.variable})),We(this.accumulatedUpdates.map(function(e){return e.variable})))},t.prototype.getWeights=function(){return Y(this,void 0,void 0,function(){var e;return Q(this,function(r){switch(r.label){case 0:return e=this.accumulatedGrads.concat(this.accumulatedUpdates),[4,this.saveIterations()];case 1:return[2,[r.sent()].concat(e.map(function(a){return{name:a.originalName,tensor:a.variable}}))]}})})},t.prototype.setWeights=function(e){return Y(this,void 0,void 0,function(){var r;return Q(this,function(a){switch(a.label){case 0:return[4,this.extractIterations(e)];case 1:return e=a.sent(),r=e.length/2,this.accumulatedGrads=e.slice(0,r).map(function(o){return{originalName:o.name,variable:o.tensor.variable(!1)}}),this.accumulatedUpdates=e.slice(r,2*r).map(function(o){return{originalName:o.name,variable:o.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}},t.fromConfig=function(e,r){return new e(r.learningRate,r.rho,r.epsilon)},t.className="Adadelta",t}(sn);on(vu);var gu=function(n){function t(e,r){r===void 0&&(r=.1);var a=n.call(this)||this;return a.learningRate=e,a.initialAccumulatorValue=r,a.accumulatedGrads=[],a}return pt(t,n),t.prototype.applyGradients=function(e){var r=this;(Array.isArray(e)?e.map(function(a){return a.name}):Object.keys(e)).forEach(function(a,o){var i=A.registeredVariables[a];r.accumulatedGrads[o]==null&&(r.accumulatedGrads[o]={originalName:a+"/accumulator",variable:Z(function(){return Sr(i.shape,r.initialAccumulatorValue).variable(!1)})});var s=Array.isArray(e)?e[o].tensor:e[a];if(s!=null){var u=r.accumulatedGrads[o].variable;Z(function(){var c=u.add(s.square());u.assign(c);var l=s.div(c.add(A.backend.epsilon()).sqrt()).mul(-r.learningRate).add(i);i.assign(l)})}}),this.incrementIterations()},t.prototype.dispose=function(){this.accumulatedGrads!=null&&We(this.accumulatedGrads.map(function(e){return e.variable}))},t.prototype.getWeights=function(){return Y(this,void 0,void 0,function(){return Q(this,function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()].concat(this.accumulatedGrads.map(function(r){return{name:r.originalName,tensor:r.variable}}))]}})})},t.prototype.setWeights=function(e){return Y(this,void 0,void 0,function(){return Q(this,function(r){switch(r.label){case 0:return[4,this.extractIterations(e)];case 1:return e=r.sent(),this.accumulatedGrads=e.map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}},t.fromConfig=function(e,r){return new e(r.learningRate,r.initialAccumulatorValue)},t.className="Adagrad",t}(sn);on(gu);var yu=function(n){function t(e,r,a,o){o===void 0&&(o=null);var i=n.call(this)||this;return i.learningRate=e,i.beta1=r,i.beta2=a,i.epsilon=o,i.accumulatedFirstMoment=[],i.accumulatedSecondMoment=[],Z(function(){i.accBeta1=j(r).variable(),i.accBeta2=j(a).variable()}),o==null&&(i.epsilon=A.backend.epsilon()),i}return pt(t,n),t.prototype.applyGradients=function(e){var r=this,a=Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e);Z(function(){var o=et(1,r.accBeta1),i=et(1,r.accBeta2);a.forEach(function(s,u){var c=A.registeredVariables[s];r.accumulatedFirstMoment[u]==null&&(r.accumulatedFirstMoment[u]={originalName:s+"/m",variable:Z(function(){return ue(c).variable(!1)})}),r.accumulatedSecondMoment[u]==null&&(r.accumulatedSecondMoment[u]={originalName:s+"/v",variable:Z(function(){return ue(c).variable(!1)})});var l=Array.isArray(e)?e[u].tensor:e[s];if(l!=null){var p=r.accumulatedFirstMoment[u].variable,d=r.accumulatedSecondMoment[u].variable,f=p.mul(r.beta1).add(l.mul(1-r.beta1)),h=d.mul(r.beta2).add(l.square().mul(1-r.beta2)),m=f.div(o),v=h.div(i);p.assign(f),d.assign(h);var g=m.div(v.sqrt().add(r.epsilon)).mul(-r.learningRate).add(c);c.assign(g)}}),r.accBeta1.assign(r.accBeta1.mul(r.beta1)),r.accBeta2.assign(r.accBeta2.mul(r.beta2))}),this.incrementIterations()},t.prototype.dispose=function(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&We(this.accumulatedFirstMoment.map(function(e){return e.variable})),this.accumulatedSecondMoment!=null&&We(this.accumulatedSecondMoment.map(function(e){return e.variable}))},t.prototype.getWeights=function(){return Y(this,void 0,void 0,function(){var e;return Q(this,function(r){switch(r.label){case 0:return e=this.accumulatedFirstMoment.concat(this.accumulatedSecondMoment),[4,this.saveIterations()];case 1:return[2,[r.sent()].concat(e.map(function(a){return{name:a.originalName,tensor:a.variable}}))]}})})},t.prototype.setWeights=function(e){return Y(this,void 0,void 0,function(){var r,a=this;return Q(this,function(o){switch(o.label){case 0:return[4,this.extractIterations(e)];case 1:return e=o.sent(),Z(function(){a.accBeta1.assign(Hn(a.beta1,a.iterations_+1)),a.accBeta2.assign(Hn(a.beta2,a.iterations_+1))}),r=e.length/2,this.accumulatedFirstMoment=e.slice(0,r).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}}),this.accumulatedSecondMoment=e.slice(r,2*r).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}},t.fromConfig=function(e,r){return new e(r.learningRate,r.beta1,r.beta2,r.epsilon)},t.className="Adam",t}(sn);on(yu);var xu=function(n){function t(e,r,a,o,i){o===void 0&&(o=null),i===void 0&&(i=0);var s=n.call(this)||this;return s.learningRate=e,s.beta1=r,s.beta2=a,s.epsilon=o,s.decay=i,s.accumulatedFirstMoment=[],s.accumulatedWeightedInfNorm=[],Z(function(){s.iteration=j(0).variable(),s.accBeta1=j(r).variable()}),o==null&&(s.epsilon=A.backend.epsilon()),s}return pt(t,n),t.prototype.applyGradients=function(e){var r=this,a=Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e);Z(function(){var o=et(1,r.accBeta1),i=ct(-r.learningRate,r.iteration.mul(r.decay).add(1));a.forEach(function(s,u){var c=A.registeredVariables[s];r.accumulatedFirstMoment[u]==null&&(r.accumulatedFirstMoment[u]={originalName:s+"/m",variable:ue(c).variable(!1)}),r.accumulatedWeightedInfNorm[u]==null&&(r.accumulatedWeightedInfNorm[u]={originalName:s+"/v",variable:ue(c).variable(!1)});var l=Array.isArray(e)?e[u].tensor:e[s];if(l!=null){var p=r.accumulatedFirstMoment[u].variable,d=r.accumulatedWeightedInfNorm[u].variable,f=p.mul(r.beta1).add(l.mul(1-r.beta1)),h=d.mul(r.beta2),m=l.abs(),v=h.maximum(m);p.assign(f),d.assign(v);var g=i.div(o).mul(f.div(v.add(r.epsilon))).add(c);c.assign(g)}}),r.iteration.assign(r.iteration.add(1)),r.accBeta1.assign(r.accBeta1.mul(r.beta1))}),this.incrementIterations()},t.prototype.dispose=function(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&We(this.accumulatedFirstMoment.map(function(e){return e.variable})),this.accumulatedWeightedInfNorm!=null&&We(this.accumulatedWeightedInfNorm.map(function(e){return e.variable}))},t.prototype.getWeights=function(){return Y(this,void 0,void 0,function(){return Q(this,function(e){throw new Error("getWeights() is not implemented for Adamax yet.")})})},t.prototype.setWeights=function(e){return Y(this,void 0,void 0,function(){return Q(this,function(r){throw new Error("setWeights() is not implemented for Adamax yet.")})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}},t.fromConfig=function(e,r){return new e(r.learningRate,r.beta1,r.beta2,r.epsilon,r.decay)},t.className="Adamax",t}(sn);on(xu);var eo=function(n){function t(e){var r=n.call(this)||this;return r.learningRate=e,r.setLearningRate(e),r}return pt(t,n),t.prototype.applyGradients=function(e){var r=this;(Array.isArray(e)?e.map(function(a){return a.name}):Object.keys(e)).forEach(function(a,o){var i=Array.isArray(e)?e[o].tensor:e[a];if(i!=null){var s=A.registeredVariables[a];Z(function(){var u=r.c.mul(i).add(s);s.assign(u)})}}),this.incrementIterations()},t.prototype.setLearningRate=function(e){this.learningRate=e,this.c!=null&&this.c.dispose(),this.c=ml(j(-e))},t.prototype.dispose=function(){this.c.dispose()},t.prototype.getWeights=function(){return Y(this,void 0,void 0,function(){return Q(this,function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()]]}})})},t.prototype.setWeights=function(e){return Y(this,void 0,void 0,function(){return Q(this,function(r){switch(r.label){case 0:return[4,this.extractIterations(e)];case 1:if((e=r.sent()).length!==0)throw new Error("SGD optimizer does not have settable weights.");return[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate}},t.fromConfig=function(e,r){return new e(r.learningRate)},t.className="SGD",t}(sn);on(eo);var bu=function(n){function t(e,r,a){a===void 0&&(a=!1);var o=n.call(this,e)||this;return o.learningRate=e,o.momentum=r,o.useNesterov=a,o.accumulations=[],o.m=j(o.momentum),o}return pt(t,n),t.prototype.applyGradients=function(e){var r=this;(Array.isArray(e)?e.map(function(a){return a.name}):Object.keys(e)).forEach(function(a,o){var i=A.registeredVariables[a];r.accumulations[o]==null&&(r.accumulations[o]={originalName:a+"/momentum",variable:Z(function(){return ue(i).variable(!1)})});var s=r.accumulations[o].variable,u=Array.isArray(e)?e[o].tensor:e[a];u!=null&&Z(function(){var c,l=r.m.mul(s).add(u);c=r.useNesterov?r.c.mul(u.add(l.mul(r.m))).add(i):r.c.mul(l).add(i),s.assign(l),i.assign(c)})}),this.incrementIterations()},t.prototype.dispose=function(){this.m.dispose(),this.accumulations!=null&&We(this.accumulations.map(function(e){return e.variable}))},t.prototype.setMomentum=function(e){this.momentum=e},t.prototype.getWeights=function(){return Y(this,void 0,void 0,function(){return Q(this,function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()].concat(this.accumulations.map(function(r){return{name:r.originalName,tensor:r.variable}}))]}})})},t.prototype.setWeights=function(e){return Y(this,void 0,void 0,function(){return Q(this,function(r){switch(r.label){case 0:return[4,this.extractIterations(e)];case 1:return e=r.sent(),this.accumulations=e.map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}},t.fromConfig=function(e,r){return new e(r.learningRate,r.momentum,r.useNesterov)},t.className="Momentum",t}(eo);on(bu);var wu=function(n){function t(e,r,a,o,i){r===void 0&&(r=.9),a===void 0&&(a=0),o===void 0&&(o=null),i===void 0&&(i=!1);var s=n.call(this)||this;if(s.learningRate=e,s.decay=r,s.momentum=a,s.epsilon=o,s.accumulatedMeanSquares=[],s.accumulatedMoments=[],s.accumulatedMeanGrads=[],s.centered=i,o==null&&(s.epsilon=A.backend.epsilon()),e==null)throw new Error("learningRate for RMSPropOptimizer must be defined.");return s}return pt(t,n),t.prototype.applyGradients=function(e){var r=this;(Array.isArray(e)?e.map(function(a){return a.name}):Object.keys(e)).forEach(function(a,o){var i=A.registeredVariables[a];r.accumulatedMeanSquares[o]==null&&(r.accumulatedMeanSquares[o]={originalName:a+"/rms",variable:Z(function(){return ue(i).variable(!1)})}),r.accumulatedMoments[o]==null&&(r.accumulatedMoments[o]={originalName:a+"/momentum",variable:Z(function(){return ue(i).variable(!1)})}),r.accumulatedMeanGrads[o]==null&&r.centered&&(r.accumulatedMeanGrads[o]={originalName:a+"/mg",variable:Z(function(){return ue(i).variable(!1)})});var s=Array.isArray(e)?e[o].tensor:e[a];if(s!=null){var u=r.accumulatedMeanSquares[o].variable,c=r.accumulatedMoments[o].variable;Z(function(){var l=u.mul(r.decay).add(s.square().mul(1-r.decay));if(r.centered){var p=r.accumulatedMeanGrads[o].variable,d=p.mul(r.decay).add(s.mul(1-r.decay)),f=c.mul(r.momentum).add(s.mul(r.learningRate).div(l.sub(d.square().add(r.epsilon)).sqrt()));u.assign(l),p.assign(d),c.assign(f);var h=i.sub(f);i.assign(h)}else{var m=u.mul(r.decay).add(s.square().mul(1-r.decay));f=c.mul(r.momentum).add(s.mul(r.learningRate).div(m.add(r.epsilon).sqrt())),u.assign(m),c.assign(f),h=i.sub(f),i.assign(h)}})}}),this.incrementIterations()},t.prototype.dispose=function(){this.accumulatedMeanSquares!=null&&We(this.accumulatedMeanSquares.map(function(e){return e.variable})),this.accumulatedMeanGrads!=null&&this.centered&&We(this.accumulatedMeanGrads.map(function(e){return e.variable})),this.accumulatedMoments!=null&&We(this.accumulatedMoments.map(function(e){return e.variable}))},t.prototype.getWeights=function(){return Y(this,void 0,void 0,function(){var e;return Q(this,function(r){switch(r.label){case 0:return e=this.accumulatedMeanSquares.concat(this.accumulatedMoments),this.centered&&e.push.apply(e,this.accumulatedMeanGrads),[4,this.saveIterations()];case 1:return[2,[r.sent()].concat(e.map(function(a){return{name:a.originalName,tensor:a.variable}}))]}})})},t.prototype.setWeights=function(e){return Y(this,void 0,void 0,function(){var r;return Q(this,function(a){switch(a.label){case 0:return[4,this.extractIterations(e)];case 1:return e=a.sent(),r=this.centered?e.length/3:e.length/2,this.accumulatedMeanSquares=e.slice(0,r).map(function(o){return{originalName:o.name,variable:o.tensor.variable(!1)}}),this.accumulatedMoments=e.slice(r,2*r).map(function(o){return{originalName:o.name,variable:o.tensor.variable(!1)}}),this.centered&&(this.accumulatedMeanGrads=e.slice(2*r,3*r).map(function(o){return{originalName:o.name,variable:o.tensor.variable(!1)}})),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}},t.fromConfig=function(e,r){return new e(r.learningRate,r.decay,r.momentum,r.epsilon,r.centered)},t.className="RMSProp",t}(sn);on(wu);var cn=function(){function n(){}return n.sgd=function(t){return new eo(t)},n.momentum=function(t,e,r){return r===void 0&&(r=!1),new bu(t,e,r)},n.rmsprop=function(t,e,r,a,o){return e===void 0&&(e=.9),r===void 0&&(r=0),a===void 0&&(a=null),o===void 0&&(o=!1),new wu(t,e,r,a,o)},n.adam=function(t,e,r,a){return t===void 0&&(t=.001),e===void 0&&(e=.9),r===void 0&&(r=.999),a===void 0&&(a=null),new yu(t,e,r,a)},n.adadelta=function(t,e,r){return t===void 0&&(t=.001),e===void 0&&(e=.95),r===void 0&&(r=null),new vu(t,e,r)},n.adamax=function(t,e,r,a,o){return t===void 0&&(t=.002),e===void 0&&(e=.9),r===void 0&&(r=.999),a===void 0&&(a=null),o===void 0&&(o=0),new xu(t,e,r,a,o)},n.adagrad=function(t,e){return e===void 0&&(e=.1),new gu(t,e)},n}(),ig={sgd:cn.sgd,momentum:cn.momentum,adadelta:cn.adadelta,adagrad:cn.adagrad,rmsprop:cn.rmsprop,adamax:cn.adamax,adam:cn.adam},sg=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:typeof setImmediate!="undefined"?setImmediate:function(n){return n()};function ug(){return new Promise(function(n){return sg(function(){return n()})})}me.prototype.add=function(n){return nt(this,n)},me.prototype.broadcastTo=function(n){return Ts(this,n)},me.prototype.div=function(n){return ct(this,n)},me.prototype.divNoNan=function(n){return Ba(this,n)},me.prototype.squaredDifference=function(n){return za(this,n)},me.prototype.tile=function(n){return Xt(this,n)},me.prototype.oneHot=function(n,t,e){return t===void 0&&(t=1),e===void 0&&(e=0),xn(this,n,t,e)},me.prototype.transpose=function(n){return Ye(this,n)},me.prototype.pad=function(n,t){return zt(this,n,t)},me.prototype.batchNorm=function(n,t,e,r,a){return Cn(this,n,t,e,r,a)},P=Iv;const Qd=Object.freeze(Object.defineProperty({__proto__:null,AdadeltaOptimizer:vu,AdagradOptimizer:gu,AdamOptimizer:yu,AdamaxOptimizer:xu,Add:Oi,AddN:Qf,BroadcastTo:_i,DataStorage:gs,Div:Ir,get ENV(){return fi},Environment:kc,FromPixels:nh,FusedBatchNorm:Jf,Identity:Mi,KernelBackend:ys,MaxPoolWithArgmax:rh,MomentumOptimizer:bu,NonMaxSuppressionV5:th,OneHot:Fi,Optimizer:sn,PadV2:Bi,RMSPropOptimizer:wu,get Rank(){return Lo},get Reduction(){return Me},SGDOptimizer:eo,Square:Zf,SquaredDifference:Rr,Tensor:me,TensorBuffer:Gn,Tile:Pi,Transpose:eh,Variable:hr,abs:Li,acos:Vi,acosh:Wi,add:nt,addN:ks,addStrict:Pl,all:Xs,any:$s,argMax:Ha,argMin:Ys,asin:zi,asinh:Ui,atan:Gi,atan2:ls,atanh:Hi,avgPool:Hs,avgPool3d:js,backend:gl,backend_util:ph,basicLSTMCell:Rd,batchNorm:Cn,batchNorm2d:Mp,batchNorm3d:Lp,batchNorm4d:zp,batchNormalization:Op,batchNormalization2d:Fp,batchNormalization3d:Bp,batchNormalization4d:Wp,batchToSpaceND:Ea,booleanMaskAsync:rd,broadcastTo:Ts,browser:Xd,buffer:ne,cast:Wt,ceil:qi,clipByValue:ji,clone:Up,complex:De,concat:tt,concat1d:Nl,concat2d:Sl,concat3d:El,concat4d:Il,conv1d:Vs,conv2d:Nn,conv2dTranspose:Us,conv3d:Ws,conv3dTranspose:ld,cos:Ki,cosh:Xi,cumsum:kl,customGrad:Dr,deprecationWarn:Ei,depthToSpace:Ai,depthwiseConv2d:Mr,diag:Dd,disableDeprecationWarnings:Vf,dispose:We,disposeVariables:Wf,div:ct,divNoNan:Ba,divStrict:Bl,dot:pd,dropout:Od,elu:ja,enableDebugMode:Lf,enableProdMode:Bf,engine:Ii,env:M,equal:Yn,equalStrict:Qp,erf:$i,exp:Yi,expandDims:Ge,expm1:Qi,eye:Ds,fft:Pr,fill:Sr,findBackend:Kf,findBackendFactory:Xf,floor:Ji,floorDiv:ka,frame:Ja,fused:Cr,gather:Fr,gatherND:uu,gather_util:ah,getBackend:vl,getGradient:Fo,getKernel:hi,getKernelsForBackend:Mo,grad:sh,grads:uh,greater:Ua,greaterEqual:Ga,greaterEqualStrict:Jp,greaterStrict:Zp,hammingWindow:cu,hannWindow:Qa,ifft:qn,imag:rt,image:at,inTopKAsync:Md,io:Pn,irfft:$a,isFinite:Fl,isInf:_l,isNaN:Ol,keep:ml,leakyRelu:eu,less:Ms,lessEqual:Ps,lessEqualStrict:ed,lessStrict:td,linalg:Bd,linspace:Ti,localResponseNormalization:ru,log:Zi,log1p:es,logSigmoid:Dl,logSoftmax:vs,logSumExp:Ed,logicalAnd:$n,logicalNot:As,logicalOr:Ma,logicalXor:Gp,losses:Pd,matMul:Qn,math:tg,max:Qs,maxPool:Gs,maxPool3d:qs,maxPoolWithArgmax:Ks,maximum:Ar,maximumStrict:Ll,mean:Js,memory:zf,min:Zs,minimum:Ta,minimumStrict:Vl,mod:ps,modStrict:Wl,moments:Id,movingAverage:Td,mul:ye,mulStrict:zl,multiRNNCell:kd,multinomial:Os,neg:kr,nextFrame:ug,norm:au,notEqual:Bs,notEqualStrict:nd,oneHot:xn,ones:nn,onesLike:Sa,op:D,outerProduct:dd,pad:zt,pad1d:Hp,pad2d:qp,pad3d:La,pad4d:jp,pool:xd,pow:Hn,powStrict:Ul,prelu:Ka,print:Rl,prod:qa,profile:Uf,rand:Kp,randomGamma:$p,randomNormal:Yp,randomUniform:Va,range:Zt,ready:qf,real:He,reciprocal:ts,registerBackend:$f,registerGradient:Tc,registerKernel:mi,relu:Xa,relu6:tu,removeBackend:jf,reshape:Le,reverse:an,reverse1d:fd,reverse2d:hd,reverse3d:md,reverse4d:vd,rfft:Br,round:ns,rsqrt:Ra,scalar:j,scatterND:su,scatter_util:oh,selu:nu,separableConv2d:cd,serialization:rg,setBackend:Hf,setPlatform:Yf,setdiff1dAsync:Di,sigmoid:Tr,sign:rs,signal:Fd,sin:as,sinh:os,slice:lt,slice1d:bd,slice2d:wd,slice3d:Cd,slice4d:Nd,slice_util:ih,softmax:Or,softplus:is,spaceToBatchND:Ia,sparseToDense:Ya,spectral:Ad,split:Er,sqrt:ss,square:Wa,squaredDifference:za,squaredDifferenceStrict:Gl,squeeze:wt,stack:Et,step:Ml,stft:lu,stridedSlice:ou,sub:et,subStrict:Hl,sum:xt,sumOutType:ea,tan:us,tanh:cs,tensor:Re,tensor1d:Bt,tensor2d:mn,tensor3d:ki,tensor4d:Ht,tensor5d:bl,tensor6d:wl,tensor_util:Df,test_util:nv,tidy:Z,tile:Xt,time:Gf,topk:iu,train:ig,transpose:Ye,truncatedNormal:Fs,unregisterGradient:If,unregisterKernel:Ef,unsortedSegmentSum:Ls,unstack:Xn,util:Pt,valueAndGrad:ch,valueAndGrads:lh,variable:Cl,variableGrads:Yl,version_core:ag,webgl:og,where:Lt,whereAsync:Pa,zeros:xe,zerosLike:ue},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var ot,uc,ni=function(){return(ni=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var a in t=arguments[e])Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a]);return n}).apply(this,arguments)};function Yt(n,t,e,r){return new(e||(e=Promise))(function(a,o){function i(c){try{u(r.next(c))}catch(l){o(l)}}function s(c){try{u(r.throw(c))}catch(l){o(l)}}function u(c){c.done?a(c.value):new e(function(l){l(c.value)}).then(i,s)}u((r=r.apply(n,t||[])).next())})}function Qt(n,t){var e,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(u){return function(c){return function(l){if(e)throw new TypeError("Generator is already executing.");for(;i;)try{if(e=1,r&&(a=2&l[0]?r.return:l[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,l[1])).done)return a;switch(r=0,a&&(l=[2&l[0],a.value]),l[0]){case 0:case 1:a=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,r=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!(a=(a=i.trys).length>0&&a[a.length-1])&&(l[0]===6||l[0]===2)){i=0;continue}if(l[0]===3&&(!a||l[1]>a[0]&&l[1]<a[3])){i.label=l[1];break}if(l[0]===6&&i.label<a[1]){i.label=a[1],a=l;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(l);break}a[2]&&i.ops.pop(),i.trys.pop();continue}l=t.call(n,i)}catch(p){l=[6,p],r=0}finally{e=a=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([u,c])}}}(function(n){n[n.DT_INVALID=0]="DT_INVALID",n[n.DT_FLOAT=1]="DT_FLOAT",n[n.DT_DOUBLE=2]="DT_DOUBLE",n[n.DT_INT32=3]="DT_INT32",n[n.DT_UINT8=4]="DT_UINT8",n[n.DT_INT16=5]="DT_INT16",n[n.DT_INT8=6]="DT_INT8",n[n.DT_STRING=7]="DT_STRING",n[n.DT_COMPLEX64=8]="DT_COMPLEX64",n[n.DT_INT64=9]="DT_INT64",n[n.DT_BOOL=10]="DT_BOOL",n[n.DT_QINT8=11]="DT_QINT8",n[n.DT_QUINT8=12]="DT_QUINT8",n[n.DT_QINT32=13]="DT_QINT32",n[n.DT_BFLOAT16=14]="DT_BFLOAT16",n[n.DT_FLOAT_REF=101]="DT_FLOAT_REF",n[n.DT_DOUBLE_REF=102]="DT_DOUBLE_REF",n[n.DT_INT32_REF=103]="DT_INT32_REF",n[n.DT_UINT8_REF=104]="DT_UINT8_REF",n[n.DT_INT16_REF=105]="DT_INT16_REF",n[n.DT_INT8_REF=106]="DT_INT8_REF",n[n.DT_STRING_REF=107]="DT_STRING_REF",n[n.DT_COMPLEX64_REF=108]="DT_COMPLEX64_REF",n[n.DT_INT64_REF=109]="DT_INT64_REF",n[n.DT_BOOL_REF=110]="DT_BOOL_REF",n[n.DT_QINT8_REF=111]="DT_QINT8_REF",n[n.DT_QUINT8_REF=112]="DT_QUINT8_REF",n[n.DT_QINT32_REF=113]="DT_QINT32_REF",n[n.DT_BFLOAT16_REF=114]="DT_BFLOAT16_REF"})(ot||(ot={})),function(n){(function(t){t[t.LEGACY=0]="LEGACY",t[t.V1=1]="V1",t[t.V2=2]="V2"})(n.CheckpointFormatVersion||(n.CheckpointFormatVersion={}))}(uc||(uc={}));var cg={};function Jd(n){return cg[n]}function C(n,t,e,r){var a=t.inputParams[n];if(a&&a.inputIndexStart!==void 0){var o=a.inputIndexStart,i=a.inputIndexEnd===0?void 0:a.inputIndexEnd===void 0?o+1:a.inputIndexEnd;if(a.type==="tensor")return Ve(t.inputNames[a.inputIndexStart],e,r);if(a.type==="tensors")return t.inputNames.slice(o,i).map(function(c){return Ve(c,e,r)});var s=Array.prototype.slice.call(Ve(t.inputNames.slice(o)[0],e,r).dataSync());return a.type==="number"?s[0]:s}var u=t.attrParams[n];return u&&u.value}function Ve(n,t,e){var r=Xe(n),a=r[0],o=r[1],i=e.currentContextIds.find(function(s){return!!t[xa(a,s)]});return i!==void 0?t[xa(a,i)][o]:void 0}function lg(n,t,e){return t[xa(n,e.currentContextId)]}function zn(n,t){var e=Xe(n),r=e[0],a=e[1];return[xa(r,t&&t.currentContextId),a]}function xa(n,t){return t?n+"-"+t:n}function Xe(n){var t=n.lastIndexOf(":");return t===-1?[n,0]:[n.substring(0,t),Number(n.substring(t+1))]}function To(n,t){for(var e=[],r=0;r<n.length;r+=t)e.push(n.slice(r,r+t));return e}var pg=[{tfOpName:"Add",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddV2",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddN",category:"arithmetic",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"BiasAdd",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sub",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"RealDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Div",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"DivNoNan",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mul",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Maximum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}]},{tfOpName:"Minimum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}]},{tfOpName:"Pow",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SquaredDifference",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorMod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],dg=Object.freeze({json:pg}),fg=[{tfOpName:"Abs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan2",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Ceil",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ClipByValue",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"clip_value_min",name:"clipValueMin",type:"number"},{tfName:"clip_value_max",name:"clipValueMax",type:"number"}]},{tfOpName:"Complex",category:"basic_math",inputs:[{start:0,name:"real",type:"tensor"},{start:1,name:"imag",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ComplexAbs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Elu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Exp",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Floor",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Imag",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Neg",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Real",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Prelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"alpha",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu6",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"clipValueMin",name:"clipValueMin",type:"number",defaultValue:0},{tfName:"clipValueMax",name:"clipValueMax",type:"number",defaultValue:6}]},{tfOpName:"Selu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sigmoid",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Rsqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Square",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sign",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Round",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Expm1",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log1p",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Reciprocal",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Softplus",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Erf",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Prod",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axes",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool",notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LeakyRelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"alpha",name:"alpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],hg=Object.freeze({json:fg}),mg=[{tfOpName:"LoopCond",category:"control",inputs:[{start:0,name:"pred",type:"tensor"}]},{tfOpName:"Switch",category:"control",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"pred",type:"tensor"}]},{tfOpName:"Merge",category:"control",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"Enter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"frame_name",name:"frameName",type:"string"},{tfName:"is_constant",name:"isConstant",type:"bool"}]},{tfOpName:"Exit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NextIteration",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayV3",category:"control",inputs:[{start:0,name:"size",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"dynamic_size",name:"dynamicSize",type:"bool"},{tfName:"clear_after_read",name:"clearAfterRead",type:"bool"},{tfName:"identical_element_shapes",name:"identicalElementShapes",type:"bool"},{tfName:"tensor_array_name",name:"name",type:"string"}]},{tfOpName:"TensorArrayWriteV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"number"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayReadV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"number"},{start:1,name:"index",type:"number"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayGatherV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"number"},{start:1,name:"indices",type:"number[]"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"}]},{tfOpName:"TensorArrayScatterV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"number"},{start:1,name:"indices",type:"number[]"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArrayConcatV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"number"},{start:1,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape_except0",name:"elementShapeExcept0",type:"shape",notSupported:!0}]},{tfOpName:"TensorArraySplitV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"number"},{start:1,name:"tensor",type:"tensor"},{start:2,name:"lengths",type:"number[]"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArraySizeV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"number"},{start:1,name:"flowIn",type:"number"}]},{tfOpName:"TensorArrayCloseV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"number"}]}],vg=Object.freeze({json:mg}),gg=[{tfOpName:"AvgPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPoolWithArgmax",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"include_batch_in_index",name:"includeBatchInIndex",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AvgPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Conv1D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"stride",name:"stride",type:"number"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NWC"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"dilation",name:"dilation",type:"number",defaultValue:1}]},{tfOpName:"Conv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"useCudnnOnGpu",name:"useCudnnOnGpu",type:"bool"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"_FusedConv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"use_cudnn_on_gpu",name:"useCudnnOnGpu",type:"bool",defaultValue:!0},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4}]},{tfOpName:"Conv2DBackpropInput",category:"convolution",inputs:[{start:2,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:0,name:"outputShape",type:"number[]"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"DepthwiseConv2d",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"DepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"FusedDepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]}]},{tfOpName:"Conv3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]"}]}],yg=Object.freeze({json:gg}),xg=[{tfOpName:"Fill",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"},{start:1,name:"value",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"LinSpace",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"num",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"OneHot",category:"creation",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"depth",type:"number"},{start:2,name:"onValue",type:"number",defaultValue:1},{start:3,name:"offValue",type:"number",defaultValue:0}],attrs:[{tfName:"axis",name:"axis",type:"number",notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Ones",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"OnesLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"RandomUniform",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"minval",name:"minval",type:"number",defaultValue:0},{tfName:"maxval",name:"maxval",type:"number",defaultValue:1},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"Range",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"step",type:"number",defaultValue:0}],attrs:[{tfName:"Tidx",name:"dtype",type:"dtype"}]},{tfOpName:"TruncatedNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"means",name:"mean",type:"number",defaultValue:0},{tfName:"stddev",name:"stdDev",type:"number",defaultValue:1},{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"Zeros",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"ZerosLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Multinomial",category:"creation",inputs:[{start:0,name:"logits",type:"tensor"},{start:1,name:"numSamples",type:"number"}],attrs:[{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number"},{tfName:"T",name:"dtype",type:"dtype"},{tfName:"output_dtype",name:"output_dtype",type:"dtype"}]}],bg=Object.freeze({json:xg}),wg=[{tfOpName:"NonMaxSuppressionV2",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV3",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV5",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"},{start:5,name:"softNmsSigma",type:"number"}]},{tfOpName:"Where",category:"dynamic",inputs:[{start:0,name:"condition",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ListDiff",category:"dynamic",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],Cg=Object.freeze({json:wg}),Ng=[{tfOpName:"TopKV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"k",type:"number"}],attrs:[{tfName:"sorted",name:"sorted",type:"bool"}]}],Sg=Object.freeze({json:Ng}),Eg=[{tfOpName:"PlaceholderWithDefault",category:"graph",inputs:[{start:0,name:"default",type:"tensor"}],attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Placeholder",category:"graph",attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Const",category:"graph"},{tfOpName:"Identity",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IdentityN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Snapshot",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Rank",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Size",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Shape",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"ShapeN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Print",category:"graph",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"data",type:"tensors"}],attrs:[{tfName:"message",name:"message",type:"string"},{tfName:"first_n",name:"firstN",type:"number",notSupported:!0},{tfName:"summarize",name:"summarize",type:"number",defaultValue:3}]},{tfOpName:"NoOp",category:"graph",inputs:[]},{tfOpName:"StopGradient",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"FakeQuantWithMinMaxVars",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"min",name:"min",type:"number"},{tfName:"max",name:"max",type:"number"}]}],Ig=Object.freeze({json:Eg}),Rg=[{tfOpName:"ResizeBilinear",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ResizeNearestNeighbor",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"CropAndResize",category:"image",inputs:[{start:0,name:"image",type:"tensor"},{start:1,name:"boxes",type:"tensor"},{start:2,name:"boxInd",type:"tensor"},{start:3,name:"cropSize",type:"number[]"}],attrs:[{tfName:"method",name:"method",type:"string"},{tfName:"extrapolation_value",name:"extrapolationValue",type:"number"}]}],kg=Object.freeze({json:Rg}),Tg=[{tfOpName:"Equal",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NotEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Greater",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"GreaterEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Less",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LessEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalAnd",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalNot",category:"logical",inputs:[{start:0,name:"a",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalOr",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Select",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SelectV2",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],Ag=Object.freeze({json:Tg}),Dg=[{tfOpName:"_FusedMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMulV2",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Transpose",category:"matrices",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"perm",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],Og=Object.freeze({json:Dg}),_g=[{tfOpName:"FusedBatchNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV2",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV3",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"LRN",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"depth_radius",name:"radius",type:"number",defaultValue:5},{tfName:"bias",name:"bias",type:"number",defaultValue:1},{tfName:"alpha",name:"alpha",type:"number",defaultValue:1},{tfName:"beta",name:"beta",type:"number",defaultValue:.5}]},{tfOpName:"Softmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"LogSoftmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"SparseToDense",category:"normalization",inputs:[{start:0,name:"sparseIndices",type:"tensor"},{start:1,name:"outputShape",type:"number[]"},{start:2,name:"sparseValues",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",defaultValue:!0,notSupported:!0}]}],Fg=Object.freeze({json:_g}),Mg=[{tfOpName:"Max",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Mean",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Min",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Sum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"All",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Any",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"ArgMax",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"ArgMin",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"Prod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]}],Pg=Object.freeze({json:Mg}),Bg=[{tfOpName:"ConcatV2",category:"slice_join",inputs:[{start:0,end:-1,name:"tensors",type:"tensors"},{start:-1,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"Concat",category:"slice_join",inputs:[{start:1,end:0,name:"tensors",type:"tensors"},{start:0,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"GatherV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"axis",type:"number",defaultValue:0}]},{tfOpName:"Gather",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0},{tfName:"validate_indices",name:"validateIndices",type:"bool",notSupported:!0}]},{tfOpName:"Reverse",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"dims",type:"bool",notSupported:!0}]},{tfOpName:"ReverseV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}]},{tfOpName:"Slice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"size",type:"number[]"}]},{tfOpName:"StridedSlice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"end",type:"number[]"},{start:3,name:"strides",type:"number[]"}],attrs:[{tfName:"begin_mask",name:"beginMask",type:"number",defaultValue:0},{tfName:"end_mask",name:"endMask",type:"number",defaultValue:0},{tfName:"new_axis_mask",name:"newAxisMask",type:"number",defaultValue:0},{tfName:"ellipsis_mask",name:"ellipsisMask",type:"number",defaultValue:0},{tfName:"shrink_axis_mask",name:"shrinkAxisMask",type:"number",defaultValue:0}]},{tfOpName:"Pack",category:"slice_join",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0}]},{tfOpName:"Unpack",category:"slice_join",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0},{tfName:"num",name:"num",type:"number",defaultValue:0,notSupported:!0}]},{tfOpName:"Tile",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"reps",type:"number[]"}]},{tfOpName:"Split",category:"slice_join",inputs:[{start:0,name:"axis",type:"number",defaultValue:0},{start:1,name:"x",type:"tensor"}],attrs:[{tfName:"num_split",name:"numOrSizeSplits",type:"number",defaultValue:1}]},{tfOpName:"SplitV",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"numOrSizeSplits",type:"number[]"},{start:2,name:"axis",type:"number",defaultValue:0}]},{tfOpName:"ScatterNd",category:"slice_join",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"shape",type:"number[]"}]},{tfOpName:"GatherNd",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}]},{tfOpName:"SparseToDense",category:"slice_join",inputs:[{start:0,name:"sparseIndices",type:"tensor"},{start:1,name:"outputShape",type:"number[]"},{start:2,name:"sparseValues",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",defaultValue:!1,notSupported:!0}]}],Lg=Object.freeze({json:Bg}),Vg=[{tfOpName:"FFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"RFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]},{tfOpName:"IRFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]}],Wg=Object.freeze({json:Vg}),zg=[{tfOpName:"Cast",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"SrcT",name:"sdtype",type:"dtype",notSupported:!0},{tfName:"DstT",name:"dtype",type:"dtype"}]},{tfOpName:"ExpandDims",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"Pad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"constant_value",name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"PadV2",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"},{start:2,name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"Reshape",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}]},{tfOpName:"Squeeze",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"axis",tfDeprecatedName:"squeeze_dims",name:"axis",type:"number[]"}]},{tfOpName:"SpaceToBatchND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"paddings",type:"number[]"}]},{tfOpName:"BatchToSpaceND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"crops",type:"number[]"}]},{tfOpName:"DepthToSpace",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"block_size",name:"blockSize",type:"number"},{tfName:"data_format",name:"dataFormat",type:"string"}]}],Ug=Object.freeze({json:zg}),Gg=function(){function n(){var t=[dg,hg,vg,yg,bg,Cg,Sg,Ag,kg,Ig,Og,Fg,Pg,Lg,Wg,Ug],e=[].concat.apply([],t.map(function(r){return r.json}));this.opMappers=e.reduce(function(r,a){return r[a.tfOpName]=a,r},{})}return Object.defineProperty(n,"Instance",{get:function(){return this._instance||(this._instance=new this)},enumerable:!0,configurable:!0}),n.prototype.transformGraph=function(t,e){var r=this;e===void 0&&(e={});var a=[],o=[],i=t.node.reduce(function(d,f){return d[f.name]=r.mapNode(f),f.op.startsWith("Placeholder")&&a.push(d[f.name]),f.op==="Const"&&o.push(d[f.name]),d},{}),s=[],u=[],c={},l={};e!=null&&(c=this.mapSignatureEntries(e.inputs),l=this.mapSignatureEntries(e.outputs));var p=Object.keys(i);return p.forEach(function(d){var f=i[d];f.inputNames.forEach(function(h){var m=zn(h)[0];f.inputs.push(i[m]),i[m].children.push(f)})}),Object.keys(l).length===0?p.forEach(function(d){var f=i[d];f.children.length===0&&u.push(f)}):Object.keys(l).forEach(function(d){var f=zn(d)[0],h=i[f];h!=null&&(h.signatureKey=l[d],u.push(h))}),Object.keys(c).length>0?Object.keys(c).forEach(function(d){var f=zn(d)[0],h=i[f];h&&(h.signatureKey=c[d],s.push(h))}):s=a,{nodes:i,inputs:s,outputs:u,weights:o,placeholders:a,signature:e}},n.prototype.mapSignatureEntries=function(t){return Object.keys(t||{}).reduce(function(e,r){return e[t[r].name]=r,e},{})},n.prototype.mapNode=function(t){var e=Jd(t.op)||this.opMappers[t.op]||{};t.attr==null&&(t.attr={});var r={name:t.name,op:t.op,category:e.category,inputNames:(t.input||[]).map(function(a){return a.startsWith("^")?a.substr(1):a}),inputs:[],children:[],inputParams:{},attrParams:{},rawAttrs:t.attr};return e.inputs!=null&&(r.inputParams=e.inputs.reduce(function(a,o){return a[o.name]={type:o.type,inputIndexStart:o.start,inputIndexEnd:o.end},a},{})),e.attrs!=null&&(r.attrParams=e.attrs.reduce(function(a,o){var i=o.type,s=void 0;switch(o.type){case"string":(s=ri(t.attr,o.tfName,o.defaultValue))===void 0&&o.tfDeprecatedName&&(s=ri(t.attr,o.tfDeprecatedName,o.defaultValue));break;case"string[]":(s=li(t.attr,o.tfName,o.defaultValue))===void 0&&o.tfDeprecatedName&&(s=li(t.attr,o.tfDeprecatedName,o.defaultValue));break;case"number":(s=oi(t.attr,o.tfName,o.defaultValue||0))===void 0&&o.tfDeprecatedName&&(s=oi(t.attr,o.tfDeprecatedName,o.defaultValue));break;case"number[]":(s=ci(t.attr,o.tfName,o.defaultValue))===void 0&&o.tfDeprecatedName&&(s=ci(t.attr,o.tfDeprecatedName,o.defaultValue));break;case"bool":(s=ai(t.attr,o.tfName,o.defaultValue))===void 0&&o.tfDeprecatedName&&(s=ai(t.attr,o.tfDeprecatedName,o.defaultValue));break;case"bool[]":(s=di(t.attr,o.tfName,o.defaultValue))===void 0&&o.tfDeprecatedName&&(s=di(t.attr,o.tfDeprecatedName,o.defaultValue));break;case"shape":(s=ui(t.attr,o.tfName,o.defaultValue))===void 0&&o.tfDeprecatedName&&(s=ui(t.attr,o.tfDeprecatedName,o.defaultValue));break;case"shape[]":(s=pi(t.attr,o.tfName,o.defaultValue))===void 0&&o.tfDeprecatedName&&(s=pi(t.attr,o.tfDeprecatedName,o.defaultValue));break;case"dtype":(s=ii(t.attr,o.tfName,o.defaultValue))===void 0&&o.tfDeprecatedName&&(s=ii(t.attr,o.tfDeprecatedName,o.defaultValue));break;case"dtype[]":(s=si(t.attr,o.tfName,o.defaultValue))===void 0&&o.tfDeprecatedName&&(s=si(t.attr,o.tfDeprecatedName,o.defaultValue));break;case"tensor":case"tensors":break;default:throw new Error("Unsupported param type: "+o.type+" for op: "+t.op)}return a[o.name]={value:s,type:i},a},{})),r},n}();function Hg(n){var t=M().global;if(t.atob!==void 0)return t.atob(n);if(typeof Buffer!="undefined")return new Buffer(n,"base64").toString();throw new Error("Unable to decode base64 in this environment. Missing built-in atob() or Buffer()")}function Zd(n,t){var e=Array.isArray(n)?String.fromCharCode.apply(null,n):Hg(n);return t?e:e.toLowerCase()}function ri(n,t,e,r){r===void 0&&(r=!1);var a=n[t];return a!=null?Zd(a.s,r):e}function ai(n,t,e){var r=n[t];return r?r.b:e}function oi(n,t,e){var r=n[t]||{},a=r.i!=null?r.i:r.f!=null?r.f:e;return typeof a=="number"?a:parseInt(a,10)}function ef(n){switch(typeof n=="string"&&(n=ot[n]),n){case ot.DT_FLOAT:return"float32";case ot.DT_INT32:case ot.DT_INT64:case ot.DT_INT8:case ot.DT_UINT8:return"int32";case ot.DT_BOOL:return"bool";case ot.DT_DOUBLE:return"float32";case ot.DT_STRING:return"string";default:return null}}function ii(n,t,e){var r=n[t];return r&&r.type?ef(r.type):e}function si(n,t,e){var r=n[t];return r&&r.list&&r.list.type?r.list.type.map(function(a){return ef(a)}):e}function tf(n){if(!n.unknownRank)return n.dim!=null?n.dim.map(function(t){return typeof t.size=="number"?t.size:parseInt(t.size,10)}):[]}function ui(n,t,e){var r=n[t];return r&&r.shape?tf(r.shape):e}function ci(n,t,e){var r=n[t];return r?((r.list.f&&r.list.f.length?r.list.f:r.list.i)||[]).map(function(a){return typeof a=="number"?a:parseInt(a,10)}):e}function li(n,t,e,r){r===void 0&&(r=!1);var a=n[t];return a&&a.list&&a.list.s?a.list.s.map(function(o){return Zd(o,r)}):e}function pi(n,t,e){var r=n[t];return r&&r.list&&r.list.shape?r.list.shape.map(function(a){return tf(a)}):e}function di(n,t,e){var r=n[t];return r&&r.list&&r.list.b?r.list.b:e}var qg=function(){function n(t,e,r){var a=this;this.node=t,this.tensorMap=e,this.context=r,this.inputs=[],this.attrs={},this.inputs=t.inputNames.map(function(o){return a.getInput(o)}),t.rawAttrs!=null&&(this.attrs=Object.keys(t.rawAttrs).reduce(function(o,i){return o[i]=a.getAttr(i),o},{}))}return n.prototype.getInput=function(t){return Ve(t,this.tensorMap,this.context)},n.prototype.getAttr=function(t,e){var r=this.node.rawAttrs[t];if(r.tensor!=null)return Ve(t,this.tensorMap,this.context);if(r.i!=null||r.f!=null)return oi(this.node.rawAttrs,t,e);if(r.s!=null)return ri(this.node.rawAttrs,t,e);if(r.b!=null)return ai(this.node.rawAttrs,t,e);if(r.shape!=null)return ui(this.node.rawAttrs,t,e);if(r.type!=null)return ii(this.node.rawAttrs,t,e);if(r.list!=null){if(r.list.i!=null||r.list.f!=null)return ci(this.node.rawAttrs,t,e);if(r.list.s!=null)return li(this.node.rawAttrs,t,e);if(r.list.shape!=null)return pi(this.node.rawAttrs,t,e);if(r.list.b!=null)return di(this.node.rawAttrs,t,e);if(r.list.type!=null)return si(this.node.rawAttrs,t,e)}return e},n}(),jg=function(n,t,e){switch(n.op){case"BiasAdd":case"AddV2":case"Add":return[nt(C("a",n,t,e),C("b",n,t,e))];case"AddN":return[ks(C("tensors",n,t,e))];case"FloorMod":case"Mod":return[ps(C("a",n,t,e),C("b",n,t,e))];case"Mul":return[ye(C("a",n,t,e),C("b",n,t,e))];case"RealDiv":case"Div":return[ct(C("a",n,t,e),C("b",n,t,e))];case"DivNoNan":return[Ba(C("a",n,t,e),C("b",n,t,e))];case"FloorDiv":return[ka(C("a",n,t,e),C("b",n,t,e))];case"Sub":return[et(C("a",n,t,e),C("b",n,t,e))];case"Minimum":return[Ta(C("a",n,t,e),C("b",n,t,e))];case"Maximum":return[Ar(C("a",n,t,e),C("b",n,t,e))];case"Pow":return[Hn(C("a",n,t,e),C("b",n,t,e))];case"SquaredDifference":return[za(C("a",n,t,e),C("b",n,t,e))];default:throw TypeError("Node type "+n.op+" is not implemented")}},Kg=function(n,t,e){switch(n.op){case"Abs":case"ComplexAbs":return[Li(C("x",n,t,e))];case"Acos":return[Vi(C("x",n,t,e))];case"Acosh":return[Wi(C("x",n,t,e))];case"Asin":return[zi(C("x",n,t,e))];case"Asinh":return[Ui(C("x",n,t,e))];case"Atan":return[Gi(C("x",n,t,e))];case"Atan2":return[ls(C("x",n,t,e),C("y",n,t,e))];case"Atanh":return[Hi(C("x",n,t,e))];case"Ceil":return[qi(C("x",n,t,e))];case"Complex":return[De(C("real",n,t,e),C("imag",n,t,e))];case"Cos":return[Ki(C("x",n,t,e))];case"Cosh":return[Xi(C("x",n,t,e))];case"Elu":return[ja(C("x",n,t,e))];case"Erf":return[$i(C("x",n,t,e))];case"Exp":return[Yi(C("x",n,t,e))];case"Expm1":return[Qi(C("x",n,t,e))];case"Floor":return[Ji(C("x",n,t,e))];case"Log":return[Zi(C("x",n,t,e))];case"Log1p":return[es(C("x",n,t,e))];case"Imag":return[rt(C("x",n,t,e))];case"Neg":return[kr(C("x",n,t,e))];case"Reciprocal":return[ts(C("x",n,t,e))];case"Real":return[He(C("x",n,t,e))];case"Relu":return[Xa(C("x",n,t,e))];case"Round":return[ns(C("x",n,t,e))];case"Selu":return[nu(C("x",n,t,e))];case"Sigmoid":return[Tr(C("x",n,t,e))];case"Sin":return[as(C("x",n,t,e))];case"Sign":return[rs(C("x",n,t,e))];case"Sinh":return[os(C("x",n,t,e))];case"Softplus":return[is(C("x",n,t,e))];case"Sqrt":return[ss(C("x",n,t,e))];case"Square":return[Wa(C("x",n,t,e))];case"Tanh":return[cs(C("x",n,t,e))];case"Tan":return[us(C("x",n,t,e))];case"Relu6":case"ClipByValue":return[ji(C("x",n,t,e),C("clipValueMin",n,t,e),C("clipValueMax",n,t,e))];case"Rsqrt":return[Ra(Ve(n.inputNames[0],t,e))];case"Prod":return[qa(C("x",n,t,e),C("axes",n,t,e))];case"LeakyRelu":return[eu(C("x",n,t,e),C("alpha",n,t,e))];case"Prelu":return[Ka(C("x",n,t,e),C("alpha",n,t,e))];default:throw TypeError("Node type "+n.op+" is not implemented")}},Xg=function(){function n(t,e,r,a,o,i,s){this.name=t,this.dtype=e,this.maxSize=r,this.elementShape=a,this.identicalElementShapes=o,this.dynamicSize=i,this.clearAfterRead=s,this.tensors=[],this.closed_=!1,this.id=n.nextId++}return Object.defineProperty(n.prototype,"closed",{get:function(){return this.closed_},enumerable:!0,configurable:!0}),n.prototype.clearAndClose=function(){this.tensors.forEach(function(t){return t.tensor.dispose()}),this.tensors=[],this.closed_=!0},n.prototype.size=function(){return this.tensors.length},n.prototype.read=function(t){if(this.closed_)throw new Error("TensorArray "+this.name+" has already been closed.");if(t<0||t>=this.tensors.length)throw new Error("Tried to read from index "+t+", but array size is: "+this.tensors.length);var e=this.tensors[t];if(e.cleared)throw new Error("TensorArray "+this.name+": Could not read index "+t+" twice because it was cleared after a previous read (perhaps try setting clear_after_read = false?).");return this.clearAfterRead&&(e.cleared=!0),e.read=!0,e.tensor},n.prototype.readMany=function(t){var e=this;return t.map(function(r){return e.read(r)})},n.prototype.write=function(t,e){if(this.closed_)throw new Error("TensorArray "+this.name+" has already been closed.");if(t<0||!this.dynamicSize&&t>=this.maxSize)throw new Error("Tried to write to index "+t+", but array is not resizeable and size is: "+this.maxSize);var r=this.tensors[t]||{};if(e.dtype!==this.dtype)throw new Error("TensorArray "+this.name+": Could not write to TensorArray index "+t+`,
          because the value dtype is `+e.dtype+", but TensorArray dtype is "+this.dtype+".");if(this.size()!==0||this.elementShape!=null&&this.elementShape.length!==0||(this.elementShape=e.shape),this.assertShapesMatchAllowUndefinedSize(this.elementShape,e.shape,"TensorArray "+this.name+": Could not write to TensorArray index "+t+"."),r&&r.read)throw new Error("TensorArray "+this.name+": Could not write to TensorArray index "+t+", because it has already been read.");if(r&&r.written)throw new Error("TensorArray "+this.name+": Could not write to TensorArray index "+t+", because it has already been written.");r.tensor=e,r.written=!0,this.tensors[t]=r},n.prototype.writeMany=function(t,e){var r=this;if(t.length!==e.length)throw new Error("TensorArray "+this.name+": could not write multiple tensors,because the index size: "+t.length+" is not the same as tensors size: "+e.length+".");t.forEach(function(a,o){return r.write(a,e[o])})},n.prototype.gather=function(t,e){if(e&&e!==this.dtype)throw new Error("TensorArray dtype is "+this.dtype+" but gather requested dtype "+e);if(!t){t=[];for(var r=0;r<this.size();r++)t.push(r)}if(t.length===0)return Re([],[0].concat(this.elementShape));var a=this.readMany(t);return this.assertShapesMatchAllowUndefinedSize(this.elementShape,a[0].shape,"TensorArray shape mismatch: "),Et(a,0)},n.prototype.concat=function(t){if(t&&t!==this.dtype)throw new Error("TensorArray dtype is "+this.dtype+" but concat requested dtype "+t);if(this.size()===0)return Re([],[0].concat(this.elementShape));for(var e=[],r=0;r<this.size();r++)e.push(r);var a=this.readMany(e);return this.assertShapesMatchAllowUndefinedSize(this.elementShape,a[0].shape,"TensorArray shape mismatch: tensor array shape ("+this.elementShape+") vs first tensor shape ("+a[0].shape+")"),tt(a,0)},n.prototype.scatter=function(t,e){if(e.dtype!==this.dtype)throw new Error("TensorArray dtype is "+this.dtype+" but tensor has dtype "+e.dtype);if(t.length!==e.shape[0])throw new Error("Expected len(indices) == tensor.shape[0], but saw: "+t.length+" vs. "+e.shape[0]);var r=Math.max.apply(Math,t);if(!this.dynamicSize&&r>=this.maxSize)throw new Error("Max index must be < array size ("+r+"  vs. "+this.maxSize+")");this.writeMany(t,Xn(e,0))},n.prototype.split=function(t,e){var r=this;if(e.dtype!==this.dtype)throw new Error("TensorArray dtype is "+this.dtype+" but tensor has dtype "+e.dtype);var a=0,o=t.map(function(l){return a+=l});if(a!==e.shape[0])throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        `+a+", and tensor's shape is: "+e.shape);if(!this.dynamicSize&&t.length!==this.maxSize)throw new Error("TensorArray's size is not equal to the size of lengths ("+this.maxSize+" vs. "+t.length+"), and the TensorArray is not marked as dynamically resizeable");var i=a===0?0:e.size/a,s=[];Z(function(){e=e.reshape([1,a,i]);for(var l=0;l<t.length;++l){var p=[0,l===0?0:o[l-1],0],d=[1,t[l],i];s[l]=lt(e,p,d).reshape(r.elementShape)}return s});for(var u=[],c=0;c<t.length;c++)u[c]=c;this.writeMany(u,s)},n.prototype.assertShapesMatchAllowUndefinedSize=function(t,e,r){r===void 0&&(r=""),Pt.assert(this.shapesEqualAllowUndefinedSize(t,e),function(){return r+" Shapes "+t+" and "+e+" must match"})},n.prototype.shapesEqualAllowUndefinedSize=function(t,e){if(t.length!==e.length)return!1;for(var r=0;r<t.length;r++)if(t[r]!==-1&&e[r]!==-1&&t[r]!==e[r])return!1;return!0},n.nextId=0,n}(),$g=void 0,Yg=function(n,t,e){return Yt($g,void 0,void 0,function(){var r,a,o,i,s,u,c,l,p,d,f,h,m,v,g,y,x,b,w,N,I,R,k,T,O,_,V,L,B,z,U,W,H,q,K;return Qt(this,function(J){switch(J.label){case 0:switch(n.op){case"LoopCond":return[3,1];case"Switch":return[3,2];case"Merge":return[3,4];case"Enter":return[3,5];case"Exit":return[3,6];case"NextIteration":return[3,7];case"TensorArrayV3":return[3,8];case"TensorArrayWriteV3":return[3,9];case"TensorArrayReadV3":return[3,10];case"TensorArrayGatherV3":return[3,11];case"TensorArrayScatterV3":return[3,12];case"TensorArrayConcatV3":return[3,13];case"TensorArraySplitV3":return[3,14];case"TensorArraySizeV3":return[3,15];case"TensorArrayCloseV3":return[3,16]}return[3,17];case 1:return[2,[C("pred",n,t,e).clone()]];case 2:return r=C("pred",n,t,e),a=C("data",n,t,e),[4,r.data()];case 3:return[2,J.sent()[0]?[void 0,a.clone()]:[a.clone(),void 0]];case 4:return[2,(o=n.inputNames.find(function(ee){return Ve(ee,t,e)!==void 0}))?[Ve(o,t,e).clone()]:void 0];case 5:return i=C("frameName",n,t,e),s=C("tensor",n,t,e),e.enterFrame(i),[2,[s.clone()]];case 6:return u=C("tensor",n,t,e),e.exitFrame(),[2,[u.clone()]];case 7:return c=C("tensor",n,t,e),e.nextIteration(),[2,[c.clone()]];case 8:return l=C("size",n,t,e),p=C("dtype",n,t,e),d=C("elementShape",n,t,e),f=C("dynamicSize",n,t,e),h=C("clearAfterRead",n,t,e),m=C("identicalElementShapes",n,t,e),v=C("name",n,t,e),g=new Xg(v,p,l,d,m,f,h),e.addTensorArray(g),[2,[j(g.id),j(1)]];case 9:return y=C("tensorArrayId",n,t,e),x=C("index",n,t,e),b=C("tensor",n,t,e),e.getTensorArray(y).write(x,b),[2,[j(1)]];case 10:return w=C("tensorArrayId",n,t,e),N=C("index",n,t,e),[2,[e.getTensorArray(w).read(N)]];case 11:return I=C("tensorArrayId",n,t,e),R=C("indices",n,t,e),k=C("dtype",n,t,e),[2,[e.getTensorArray(I).gather(R,k)]];case 12:return T=C("tensorArrayId",n,t,e),O=C("indices",n,t,e),_=C("tensor",n,t,e),e.getTensorArray(T).scatter(O,_),[2,[j(1)]];case 13:return V=C("tensorArrayId",n,t,e),L=e.getTensorArray(V),B=C("dtype",n,t,e),[2,[L.concat(B)]];case 14:return z=C("tensorArrayId",n,t,e),U=C("tensor",n,t,e),W=C("lengths",n,t,e),e.getTensorArray(z).split(W,U),[2,[j(1)]];case 15:return H=C("tensorArrayId",n,t,e),q=e.getTensorArray(H),[2,[j(q.size(),"int32")]];case 16:return K=C("tensorArrayId",n,t,e),e.getTensorArray(K).clearAndClose(),[2,[j(0)]];case 17:throw TypeError("Node type "+n.op+" is not implemented")}})})},Qg=function(n,t,e){switch(n.op){case"Conv1D":var r=C("stride",n,t,e),a=C("pad",n,t,e),o=C("dataFormat",n,t,e).toUpperCase(),i=C("dilation",n,t,e);return[Vs(C("x",n,t,e),C("filter",n,t,e),r,a,o,i)];case"Conv2D":r=C("strides",n,t,e),a=C("pad",n,t,e),o=C("dataFormat",n,t,e).toUpperCase();var s=C("dilations",n,t,e);return[Nn(C("x",n,t,e),C("filter",n,t,e),[r[1],r[2]],a,o,[s[1],s[2]])];case"_FusedConv2D":case"FusedDepthwiseConv2dNative":var u=C("fusedOps",n,t,e),c=u[0],l=u[1],p=c==="biasadd",d=l==="prelu",f=c==="fusedbatchnorm",h=C("numArgs",n,t,e);if(p){if(d&&h!==2)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!d&&h!==1)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd must have one extra argument: bias.")}if(f)throw new Error("FusedConv2d and DepthwiseConv2d with FusedBatchNorm is not supported.");r=C("strides",n,t,e),a=C("pad",n,t,e),o=C("dataFormat",n,t,e).toUpperCase(),s=C("dilations",n,t,e);var m=C("args",n,t,e),v=m[0],g=m[1];return[(n.op==="_FusedConv2D"?Cr.conv2d:Cr.depthwiseConv2d)({x:C("x",n,t,e),filter:C("filter",n,t,e),strides:[r[1],r[2]],pad:a,dataFormat:o,dilations:[s[1],s[2]],bias:v,activation:l,preluActivationWeights:g})];case"Conv2DBackpropInput":case"Conv2dTranspose":var y=C("outputShape",n,t,e);return r=C("strides",n,t,e),a=C("pad",n,t,e),[Us(C("x",n,t,e),C("filter",n,t,e),y,[r[1],r[2]],a)];case"DepthwiseConv2dNative":case"DepthwiseConv2d":return r=C("strides",n,t,e),a=C("pad",n,t,e),s=C("dilations",n,t,e),o=C("dataFormat",n,t,e).toUpperCase(),[Mr(C("input",n,t,e),C("filter",n,t,e),[r[1],r[2]],a,o,[s[1],s[2]])];case"Conv3D":return r=C("strides",n,t,e),a=C("pad",n,t,e),o=C("dataFormat",n,t,e).toUpperCase(),s=C("dilations",n,t,e),[Ws(C("x",n,t,e),C("filter",n,t,e),[r[1],r[2],r[3]],a,o,[s[1],s[2],s[3]])];case"AvgPool":r=C("strides",n,t,e),a=C("pad",n,t,e);var x=C("kernelSize",n,t,e);return[Hs(C("x",n,t,e),[x[1],x[2]],[r[1],r[2]],a)];case"MaxPool":return r=C("strides",n,t,e),a=C("pad",n,t,e),x=C("kernelSize",n,t,e),[Gs(C("x",n,t,e),[x[1],x[2]],[r[1],r[2]],a)];case"MaxPoolWithArgmax":r=C("strides",n,t,e),a=C("pad",n,t,e),x=C("kernelSize",n,t,e);var b=C("includeBatchInIndex",n,t,e),w=Ks(C("x",n,t,e),[x[1],x[2]],[r[1],r[2]],a,b);return[w.result,w.indexes];case"AvgPool3D":return r=C("strides",n,t,e),a=C("pad",n,t,e),x=C("kernelSize",n,t,e),[js(C("x",n,t,e),[x[1],x[2],x[3]],[r[1],r[2],r[3]],a)];case"MaxPool3D":return r=C("strides",n,t,e),a=C("pad",n,t,e),x=C("kernelSize",n,t,e),[qs(C("x",n,t,e),[x[1],x[2],x[3]],[r[1],r[2],r[3]],a)];default:throw TypeError("Node type "+n.op+" is not implemented")}},Jg=function(n,t,e){switch(n.op){case"Fill":var r=C("shape",n,t,e),a=C("dtype",n,t,e),o=C("value",n,t,e);return[Sr(r,o,a)];case"LinSpace":var i=C("start",n,t,e),s=C("stop",n,t,e),u=C("num",n,t,e);return[Ti(i,s,u)];case"Multinomial":var c=C("logits",n,t,e),l=C("numSamples",n,t,e),p=C("seed",n,t,e);return[Os(c,l,p)];case"OneHot":var d=C("indices",n,t,e),f=C("depth",n,t,e),h=C("onValue",n,t,e),m=C("offValue",n,t,e);return[xn(d,f,h,m)];case"Ones":return[nn(C("shape",n,t,e),C("dtype",n,t,e))];case"OnesLike":return[Sa(C("x",n,t,e))];case"RandomUniform":return[Va(C("shape",n,t,e),C("minval",n,t,e),C("maxval",n,t,e),C("dtype",n,t,e))];case"Range":i=C("start",n,t,e);var v=C("stop",n,t,e),g=C("step",n,t,e);return[Zt(i,v,g,C("dtype",n,t,e))];case"TruncatedNormal":r=C("shape",n,t,e);var y=C("mean",n,t,e),x=C("stdDev",n,t,e);return p=C("seed",n,t,e),[Fs(r,y,x,C("dtype",n,t,e),p)];case"Zeros":return[xe(C("shape",n,t,e),C("dtype",n,t,e))];case"ZerosLike":return[ue(C("x",n,t,e))];default:throw TypeError("Node type "+n.op+" is not implemented")}},Zg=void 0,ey=function(n,t,e){return Yt(Zg,void 0,void 0,function(){var r,a,o,i,s,u,c,l;return Qt(this,function(p){switch(p.label){case 0:switch(n.op){case"NonMaxSuppressionV5":case"NonMaxSuppressionV3":case"NonMaxSuppressionV2":return[3,1];case"Where":return[3,5];case"ListDiff":return[3,7]}return[3,8];case 1:return r=C("boxes",n,t,e),a=C("scores",n,t,e),o=C("maxOutputSize",n,t,e),i=C("iouThreshold",n,t,e),s=C("scoreThreshold",n,t,e),n.op!=="NonMaxSuppressionV5"?[3,3]:(u=C("softNmsSigma",n,t,e),[4,at.nonMaxSuppressionWithScoreAsync(r,a,o,i,s,u)]);case 2:return[2,[(l=p.sent()).selectedIndices,l.selectedScores]];case 3:return[4,at.nonMaxSuppressionAsync(r,a,o,i,s)];case 4:return[2,[p.sent()]];case 5:return c=C("condition",n,t,e).asType("bool"),[4,Pa(c)];case 6:return l=[p.sent()],c.dispose(),[2,l];case 7:return[2,Di(C("x",n,t,e),C("y",n,t,e))];case 8:throw TypeError("Node type "+n.op+" is not implemented")}})})},ty=function(n,t,e){switch(n.op){case"TopKV2":var r=C("x",n,t,e),a=C("k",n,t,e),o=C("sorted",n,t,e),i=iu(r,a,o);return[i.values,i.indices];default:throw TypeError("Node type "+n.op+" is not implemented")}},ny=function(n,t,e){switch(n.op){case"Const":return t[n.name];case"PlaceholderWithDefault":var r=C("default",n,t,e);return[Ve(n.name,t,e)||r];case"Placeholder":return[Ve(n.name,t,e)];case"Identity":case"StopGradient":case"FakeQuantWithMinMaxVars":return[C("x",n,t,e).clone()];case"IdentityN":return C("x",n,t,e).map(function(c){return c.clone()});case"Snapshot":return[C("x",n,t,e).clone()];case"Shape":return[Bt(C("x",n,t,e).shape,"int32")];case"ShapeN":return C("x",n,t,e).map(function(c){return Bt(c.shape)});case"Size":return[j(C("x",n,t,e).size,"int32")];case"Rank":return[j(C("x",n,t,e).rank,"int32")];case"NoOp":return[j(1)];case"Print":var a=C("x",n,t,e),o=C("data",n,t,e),i=C("message",n,t,e),s=C("summarize",n,t,e);console.warn("The graph has a tf.print() operation,usually used for debugging, which slows down performance."),console.log(i);for(var u=0;u<o.length;u++)console.log(Array.prototype.slice.call(o[u].dataSync()).slice(0,s));return[a];default:throw TypeError("Node type "+n.op+" is not implemented")}},ry=function(n,t,e){switch(n.op){case"ResizeBilinear":var r=C("images",n,t,e),a=C("size",n,t,e),o=C("alignCorners",n,t,e);return[at.resizeBilinear(r,[a[0],a[1]],o)];case"ResizeNearestNeighbor":return r=C("images",n,t,e),a=C("size",n,t,e),o=C("alignCorners",n,t,e),[at.resizeNearestNeighbor(r,[a[0],a[1]],o)];case"CropAndResize":var i=C("image",n,t,e),s=C("boxes",n,t,e),u=C("boxInd",n,t,e),c=C("cropSize",n,t,e),l=C("method",n,t,e),p=C("extrapolationValue",n,t,e);return[at.cropAndResize(i,s,u,c,l,p)];default:throw TypeError("Node type "+n.op+" is not implemented")}},ay=function(n,t,e){switch(n.op){case"Equal":return[Yn(C("a",n,t,e),C("b",n,t,e))];case"NotEqual":return[Bs(C("a",n,t,e),C("b",n,t,e))];case"Greater":return[Ua(C("a",n,t,e),C("b",n,t,e))];case"GreaterEqual":return[Ga(C("a",n,t,e),C("b",n,t,e))];case"Less":return[Ms(C("a",n,t,e),C("b",n,t,e))];case"LessEqual":return[Ps(C("a",n,t,e),C("b",n,t,e))];case"LogicalAnd":return[$n(C("a",n,t,e),C("b",n,t,e))];case"LogicalNot":return[As(C("a",n,t,e))];case"LogicalOr":return[Ma(C("a",n,t,e),C("b",n,t,e))];case"Select":case"SelectV2":return[Lt(C("condition",n,t,e),C("a",n,t,e),C("b",n,t,e))];default:throw TypeError("Node type "+n.op+" is not implemented")}},oy=function(n,t,e){switch(n.op){case"BatchMatMul":case"BatchMatMulV2":case"MatMul":return[Qn(C("a",n,t,e),C("b",n,t,e),C("transposeA",n,t,e),C("transposeB",n,t,e))];case"Transpose":return[Ye(C("x",n,t,e),C("perm",n,t,e))];case"_FusedMatMul":var r=C("fusedOps",n,t,e),a=r[0],o=r[1],i=a==="biasadd",s=o==="prelu",u=C("numArgs",n,t,e);if(i){if(s&&u!==2)throw new Error("Fused MatMul with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!s&&u!==1)throw new Error("Fused MatMul with BiasAdd must have one extra argument: bias.")}var c=C("args",n,t,e),l=c[0],p=c[1];return[Cr.matMul({a:C("a",n,t,e),b:C("b",n,t,e),transposeA:C("transposeA",n,t,e),transposeB:C("transposeB",n,t,e),bias:l,activation:o,preluActivationWeights:p})];default:throw TypeError("Node type "+n.op+" is not implemented")}},iy=function(n,t,e){switch(n.op){case"FusedBatchNorm":case"FusedBatchNormV2":case"FusedBatchNormV3":return[Cn(C("x",n,t,e),C("mean",n,t,e),C("variance",n,t,e),C("offset",n,t,e),C("scale",n,t,e),C("epsilon",n,t,e))];case"LRN":return[ru(C("x",n,t,e),C("radius",n,t,e),C("bias",n,t,e),C("alpha",n,t,e),C("beta",n,t,e))];case"Softmax":return[Or(C("x",n,t,e))];case"LogSoftmax":return[vs(C("x",n,t,e))];case"SparseToDense":return[Ya(C("sparseIndices",n,t,e),C("outputShape",n,t,e),C("sparseValues",n,t,e),C("defaultValue",n,t,e))];default:throw TypeError("Node type "+n.op+" is not implemented")}},sy=function(n,t,e){switch(n.op){case"Max":var r=C("axis",n,t,e),a=C("keepDims",n,t,e);return[Qs(C("x",n,t,e),r,a)];case"Mean":return r=C("axis",n,t,e),a=C("keepDims",n,t,e),[Js(C("x",n,t,e),r,a)];case"Min":return r=C("axis",n,t,e),a=C("keepDims",n,t,e),[Zs(C("x",n,t,e),r,a)];case"Sum":return r=C("axis",n,t,e),a=C("keepDims",n,t,e),[xt(C("x",n,t,e),r,a)];case"All":return r=C("axis",n,t,e),a=C("keepDims",n,t,e),[Xs(C("x",n,t,e),r,a)];case"Any":return r=C("axis",n,t,e),a=C("keepDims",n,t,e),[$s(C("x",n,t,e),r,a)];case"ArgMax":return r=C("axis",n,t,e),[Ha(C("x",n,t,e),r)];case"ArgMin":return r=C("axis",n,t,e),[Ys(C("x",n,t,e),r)];case"Prod":return r=C("axis",n,t,e),a=C("keepDims",n,t,e),[qa(C("x",n,t,e),r,a)];default:throw TypeError("Node type "+n.op+" is not implemented")}},uy=function(n,t,e){switch(n.op){case"ConcatV2":case"Concat":var r=C("n",n,t,e),a=C("axis",n,t,e),o=C("tensors",n,t,e);return o=o.slice(0,r),[tt(o,a)];case"GatherV2":case"Gather":a=C("axis",n,t,e);var i=C("x",n,t,e),s=C("indices",n,t,e);return[Fr(i,s.asType("int32"),a)];case"ReverseV2":case"Reverse":return a=C("axis",n,t,e),i=C("x",n,t,e),[an(i,a)];case"Slice":var u=C("begin",n,t,e),c=C("size",n,t,e);return[lt(C("x",n,t,e),u,c)];case"StridedSlice":u=C("begin",n,t,e);var l=C("end",n,t,e),p=C("strides",n,t,e),d=C("beginMask",n,t,e),f=C("endMask",n,t,e),h=C("ellipsisMask",n,t,e),m=C("newAxisMask",n,t,e),v=C("shrinkAxisMask",n,t,e),g=C("x",n,t,e);if(u.length===1&&g.shape.length>1)for(var y=1;y<g.shape.length;y++)u.push(0),l.push(g.shape[y]),p.push(p[0]);return[ou(g,u,l,p,d,f,h,m,v)];case"Pack":return Z(function(){var T=C("axis",n,t,e),O=C("tensors",n,t,e),_=O[0].shape,V=O[0].squeeze().shape,L=O.map(function(B){var z=Pt.arraysEqual(B.shape,_);if(!z&&!Pt.arraysEqual(B.squeeze().shape,V))throw new Error("the input tensors shape does not match");return z?B:B.reshape(_)});return[Et(L,T)]});case"Unpack":return Z(function(){var T=C("axis",n,t,e),O=C("tensor",n,t,e);return Xn(O,T)});case"Tile":var x=C("reps",n,t,e);return[Xt(C("x",n,t,e),x)];case"Split":case"SplitV":a=C("axis",n,t,e);var b=C("numOrSizeSplits",n,t,e);return Er(C("x",n,t,e),b,a);case"ScatterNd":s=C("indices",n,t,e);var w=C("values",n,t,e),N=C("shape",n,t,e);return[su(s,w,N)];case"GatherNd":var I=C("x",n,t,e);return s=C("indices",n,t,e),[uu(I,s)];case"SparseToDense":s=C("sparseIndices",n,t,e),N=C("outputShape",n,t,e);var R=C("sparseValues",n,t,e),k=C("defaultValue",n,t,e);return[Ya(s,R,N,R.dtype===k.dtype?k:k.asType(R.dtype))];default:throw TypeError("Node type "+n.op+" is not implemented")}},cy=function(n,t,e){switch(n.op){case"FFT":return[Pr(C("x",n,t,e))];case"IFFT":return[qn(C("x",n,t,e))];case"RFFT":return[Br(C("x",n,t,e))];case"IRFFT":return[$a(C("x",n,t,e))];default:throw TypeError("Node type "+n.op+" is not implemented")}},ly=function(n,t,e){switch(n.op){case"Cast":return[Wt(C("x",n,t,e),C("dtype",n,t,e))];case"ExpandDims":var r=C("axis",n,t,e);return[Ge(C("x",n,t,e),r)];case"Squeeze":return r=C("axis",n,t,e),[wt(C("x",n,t,e),r)];case"Reshape":return[Le(C("x",n,t,e),C("shape",n,t,e))];case"PadV2":case"Pad":return[zt(C("x",n,t,e),To(C("padding",n,t,e),2),C("constantValue",n,t,e))];case"SpaceToBatchND":var a=C("blockShape",n,t,e),o=To(C("paddings",n,t,e),2);return[Ia(C("x",n,t,e),a,o)];case"BatchToSpaceND":a=C("blockShape",n,t,e);var i=To(C("crops",n,t,e),2);return[Ea(C("x",n,t,e),a,i)];case"DepthToSpace":var s=C("blockSize",n,t,e),u=C("dataFormat",n,t,e).toUpperCase();return[Ai(C("x",n,t,e),s,u)];default:throw TypeError("Node type "+n.op+" is not implemented")}};function cc(n,t,e){var r=function(a,o,i){switch(a.category){case"arithmetic":return Z(function(){return jg(a,o,i)});case"basic_math":return Z(function(){return Kg(a,o,i)});case"control":return Yg(a,o,i);case"convolution":return Z(function(){return Qg(a,o,i)});case"creation":return Z(function(){return Jg(a,o,i)});case"dynamic":return ey(a,o,i);case"evaluation":return Z(function(){return ty(a,o,i)});case"image":return Z(function(){return ry(a,o,i)});case"graph":return Z(function(){return ny(a,o,i)});case"logical":return Z(function(){return ay(a,o,i)});case"matrices":return Z(function(){return oy(a,o,i)});case"normalization":return Z(function(){return iy(a,o,i)});case"reduction":return Z(function(){return sy(a,o,i)});case"slice_join":return Z(function(){return uy(a,o,i)});case"spectral":return Z(function(){return cy(a,o,i)});case"transformation":return Z(function(){return ly(a,o,i)});case"custom":var s=Jd(a.op);if(s&&s.customExecutor)return s.customExecutor(new qg(a,o,i));throw TypeError("Custom op "+a.op+" is not registered.");default:throw TypeError("Unknown op '"+a.op+"'. File an issue at https://github.com/tensorflow/tfjs/issues so we can add it, or register a custom execution with tf.registerOp()")}}(n,t,e);return r instanceof Promise?r.then(function(a){return[].concat(a)}):[].concat(r)}var lc=function(){function n(t,e){this.weightMap=t,this.tensorArrayMap=e,this.rootContext={id:0,frameName:"",iterationId:0},this.contexts=[this.rootContext],this.lastId=0,this.generateCurrentContextIds()}return n.prototype.newFrame=function(t,e){return{id:t,frameName:e,iterationId:0}},Object.defineProperty(n.prototype,"currentContext",{get:function(){return this.contexts},set:function(t){this.contexts!==t&&(this.contexts=t,this.generateCurrentContextIds())},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"currentContextId",{get:function(){return this._currentContextIds[0]},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"currentContextIds",{get:function(){return this._currentContextIds},enumerable:!0,configurable:!0}),n.prototype.generateCurrentContextIds=function(){for(var t=[],e=0;e<this.contexts.length-1;e++){var r=this.contexts.slice(0,this.contexts.length-e);t.push(this.contextIdforContexts(r))}t.push(""),this._currentContextIds=t},n.prototype.contextIdforContexts=function(t){return t?t.map(function(e){return e.id===0&&e.iterationId===0?"":e.frameName+"-"+e.iterationId}).join("/"):""},n.prototype.enterFrame=function(t){this.contexts&&(this.lastId++,this.contexts=this.contexts.slice(),this.contexts.push(this.newFrame(this.lastId,t)),this._currentContextIds.unshift(this.contextIdforContexts(this.contexts)))},n.prototype.exitFrame=function(){if(!(this.contexts&&this.contexts.length>1))throw new Error("Cannot exit frame, the context is empty");this.contexts=this.contexts.slice(),this.contexts.splice(-1),this.currentContextIds.shift()},n.prototype.nextIteration=function(){if(!(this.contexts&&this.contexts.length>0))throw new Error("Cannot increase frame iteration, the context is empty");this.contexts=this.contexts.slice(),this.lastId++;var t=Object.assign({},this.contexts[this.contexts.length-1]);t.iterationId+=1,t.id=this.lastId,this.contexts.splice(-1,1,t),this._currentContextIds.splice(0,1,this.contextIdforContexts(this.contexts))},n.prototype.getWeight=function(t){return this.weightMap[t]},n.prototype.addTensorArray=function(t){this.tensorArrayMap[t.id]=t},n.prototype.getTensorArray=function(t){return this.tensorArrayMap[t]},n}();function pc(n,t,e){for(var r=new Set,a=[],o=null,i=null,s=new Set,u=Object.keys(n).map(function(p){return Xe(p)[0]}),c=t.slice();c.length>0;){var l=c.pop();(nf(l)||hy(l))&&o==null&&(i=(o=l).children.map(function(p){return p.name}).filter(function(p){return r.has(p)})),r.add(l.name),e[l.name]==null&&u.indexOf(l.name)===-1&&(l.inputs.length!==0?l.inputs.forEach(function(p){s.has(p.name)||(s.add(p.name),c.push(p))}):a.push(l.name))}return{inputs:n,outputs:t,usedNodes:r,missingInputs:a,dynamicNode:o,syncInputs:i}}function py(n,t,e){var r=e.usedNodes,a=e.inputs,o=[];Object.keys(a).map(function(c){return Xe(c)[0]}).map(function(c){return n.nodes[c]}).forEach(function(c){r.has(c.name)&&o.push(c)}),n.weights.forEach(function(c){r.has(c.name)&&o.push(c)});for(var i=new Set,s=[];o.length>0;){var u=o.pop();i.add(u.name),t[u.name]||s.push(u),u.children.forEach(function(c){!i.has(c.name)&&r.has(c.name)&&c.inputs.every(function(l){return i.has(l.name)})&&o.push(c)})}return s}var dy=["Switch","Merge","Enter","Exit","NextIteration"],fy=["NonMaxSuppressionV2","NonMaxSuppressionV3","NonMaxSuppressionV5","Where"];function nf(n){return dy.indexOf(n.op)>=0}function hy(n){return fy.indexOf(n.op)>=0}var my=function(){function n(t){this.graph=t,this.compiledMap=new Map,this._weightMap={},this.SEPERATOR=",",this._outputs=t.outputs,this._inputs=t.inputs,this._signature=t.signature}return Object.defineProperty(n.prototype,"weightMap",{get:function(){return this._weightMap},set:function(t){var e=Object.keys(t).map(function(r){return t[r].map(function(a){return a.id})});this.weightIds=[].concat.apply([],e),this._weightMap=t},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"inputs",{get:function(){return this._inputs.map(function(t){return{name:t.name,shape:t.attrParams.shape?t.attrParams.shape.value:void 0,dtype:t.attrParams.dtype?t.attrParams.dtype.value:void 0}})},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"outputs",{get:function(){return this._outputs.map(function(t){return{name:t.name,shape:t.attrParams.shape?t.attrParams.shape.value:void 0,dtype:t.attrParams.dtype?t.attrParams.dtype.value:void 0}})},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"inputNodes",{get:function(){return this._inputs.map(function(t){return t.signatureKey||t.name})},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"outputNodes",{get:function(){return this._outputs.map(function(t){return t.signatureKey||t.name})},enumerable:!0,configurable:!0}),n.prototype.getCompilationKey=function(t,e){var r=t.map(function(o){return o.name}).sort(),a=e.map(function(o){return o.name}).sort();return r.join(this.SEPERATOR)+"--"+a.join(this.SEPERATOR)},n.prototype.compile=function(t,e){var r=pc(t,e,this.weightMap),a=r.missingInputs,o=r.dynamicNode,i=r.syncInputs;if(o!=null)throw new Error("This execution contains the node '"+o.name+"', which has the dynamic op '"+o.op+"'. Please use model.executeAsync() instead. Alternatively, to avoid the dynamic ops, specify the inputs ["+i+"]");if(a.length>0){var s=e.map(function(c){return c.name}),u=Object.keys(t);throw new Error("Cannot compute the outputs ["+s+"] from the provided inputs ["+u+"]. Missing the following inputs: ["+a+"]")}return py(this.graph,this.weightMap,r)},n.prototype.execute=function(t,e){var r=this;t=this.mapInputs(t);var a=Object.keys(t).sort();this.checkInputs(t),this.checkInputShapeAndType(t),e=this.mapOutputs(e),this.checkOutputs(e);var o=a.map(function(l){return r.graph.nodes[Xe(l)[0]]}),i=e.map(function(l){return r.graph.nodes[Xe(l)[0]]}),s=this.getCompilationKey(o,i),u=this.compiledMap.get(s);u==null&&(u=this.compile(t,i),this.compiledMap.set(s,u));var c={};return Z(function(){var l=new lc(r._weightMap,c),p=ni({},r.weightMap);Object.keys(t).forEach(function(g){var y=Xe(g),x=y[0],b=[];b[y[1]]=t[g],p[x]=b});for(var d=r.getFrozenTensorIds(p),f={},h=0;h<u.length;h++){var m=u[h];if(!p[m.name]){var v=cc(m,p,l);if(v instanceof Promise)throw new Error("The execution of the op '"+m.op+"' returned a promise. Please use model.executeAsync() instead.");p[m.name]=v,r.checkTensorForDisposal(m.name,m,p,l,d,e,f)}}return e.map(function(g){return Ve(g,p,l)})})},n.prototype.getFrozenTensorIds=function(t){var e=[].concat.apply([],Object.keys(t).map(function(r){return t[r]}).map(function(r){return r.map(function(a){return a.id})}));return new Set(e)},n.prototype.checkTensorForDisposal=function(t,e,r,a,o,i,s){e.category!=="control"&&i.indexOf(t)===-1&&(r[t].forEach(function(u){u!=null&&(s[u.id]=(s[u.id]||0)+e.children.length)}),e.inputs.forEach(function(u){if(u.category!=="control"){var c=lg(u.name,r,a);c!=null&&c.forEach(function(l){if(l&&!o.has(l.id)){var p=s[l.id];p===1?(l.dispose(),delete s[l.id]):p!=null&&s[l.id]--}})}}))},n.prototype.executeAsync=function(t,e){return Yt(this,void 0,void 0,function(){var r,a,o,i,s,u,c=this;return Qt(this,function(l){switch(l.label){case 0:return t=this.mapInputs(t),this.checkInputs(t),this.checkInputShapeAndType(t),e=this.mapOutputs(e),this.checkOutputs(e),r={},a=new lc(this._weightMap,r),[4,this.executeWithControlFlow(t,a,e)];case 1:return o=l.sent(),i=e.map(function(p){return Ve(p,o,a)}),s=new Set(i.map(function(p){return p.id})),u=new Set(Object.keys(t).map(function(p){return t[p].id})),Object.keys(o).forEach(function(p){o[p].forEach(function(d){!d||d.isDisposed||s.has(d.id)||u.has(d.id)||c.weightIds.indexOf(d.id)!==-1||d.dispose()})}),[2,i]}})})},n.prototype.executeWithControlFlow=function(t,e,r){return Yt(this,void 0,void 0,function(){var a,o,i,s,u,c,l,p,d,f,h,m,v,g,y,x,b=this;return Qt(this,function(w){switch(w.label){case 0:a=Object.keys(t),o=a.map(function(N){return b.graph.nodes[Xe(N)[0]]}),i=r.map(function(N){return b.graph.nodes[Xe(N)[0]]}),s=pc(t,i,this.weightMap),u=s.usedNodes,c=s.missingInputs,l=s.dynamicNode,p=s.syncInputs,d=o.concat(this.graph.weights).map(function(N){return{node:N,contexts:e.currentContext}}),f=ni({},this.weightMap),Object.keys(t).forEach(function(N){var I=Xe(N),R=I[0],k=[];k[I[1]]=t[N],f[R]=k}),h={},m=this.getFrozenTensorIds(f),v={},w.label=1;case 1:return d.length>0?(g=this.processStack(o,d,e,f,v,m,r,h,u),[4,Promise.all(g)]):[3,3];case 2:return w.sent(),[3,1];case 3:if(l==null&&console.warn("This model execution did not contain any nodes with control flow or dynamic output shapes. You can use model.execute() instead."),(y=i.filter(function(N){return!nf(N)&&!Ve(N.name,f,e)}).map(function(N){return N.name})).length>0)throw x="",l!=null&&(x="Alternatively, to avoid the dynamic ops, use model.execute() and specify the inputs ["+p+"]"),new Error("Cannot compute the outputs ["+y+"] from the provided inputs ["+a+"]. Consider providing the following inputs: ["+c+"]. "+x);return[2,f]}})})},n.prototype.processStack=function(t,e,r,a,o,i,s,u,c){for(var l=this,p=[],d=function(){var h=e.pop();r.currentContext=h.contexts;var m="";if(h.node.op==="Enter"&&C("isConstant",h.node,a,r)&&(m=zn(h.node.name,r)[0]),t.indexOf(h.node)===-1){var v=cc(h.node,a,r);m||(m=zn(h.node.name,r)[0]);var g=r.currentContext;v instanceof Promise?p.push(v.then(function(y){return a[m]=y,r.currentContext=g,l.checkTensorForDisposal(m,h.node,a,r,i,s,u),l.processChildNodes(h.node,e,r,a,o,c),y})):(a[m]=v,f.checkTensorForDisposal(m,h.node,a,r,i,s,u),f.processChildNodes(h.node,e,r,a,o,c))}else f.processChildNodes(h.node,e,r,a,o,c)},f=this;e.length>0;)d();return p},n.prototype.processChildNodes=function(t,e,r,a,o,i){t.children.forEach(function(s){var u=zn(s.name,r)[0];!o[u]&&i.has(s.name)&&(s.op==="Merge"?s.inputNames.some(function(c){return!!Ve(c,a,r)})&&(o[u]=!0,e.push({contexts:r.currentContext,node:s})):s.inputNames.every(function(c){return!!Ve(c,a,r)})&&(o[u]=!0,e.push({contexts:r.currentContext,node:s})))})},n.prototype.dispose=function(){var t=this;Object.keys(this.weightMap).forEach(function(e){return t.weightMap[e].forEach(function(r){return r.dispose()})})},n.prototype.checkInputShapeAndType=function(t){var e=this;Object.keys(t).forEach(function(r){var a=t[r],o=Xe(r)[0],i=e.graph.nodes[o];if(i.attrParams.shape&&i.attrParams.shape.value){var s=i.attrParams.shape.value,u=s.length===a.shape.length&&a.shape.every(function(c,l){return s[l]===-1||s[l]===c});Pt.assert(u,function(){return"The shape of dict['"+i.name+"'] provided in model.execute(dict) must be ["+s+"], but was ["+a.shape+"]"})}i.attrParams.dtype&&i.attrParams.dtype.value&&Pt.assert(a.dtype===i.attrParams.dtype.value,function(){return"The dtype of dict['"+i.name+"'] provided in model.execute(dict) must be "+i.attrParams.dtype.value+", but was "+a.dtype})})},n.prototype.mapInputs=function(t){var e={};for(var r in t)this._signature!=null&&this._signature.inputs!=null&&this._signature.inputs[r]!=null?e[this._signature.inputs[r].name]=t[r]:e[r]=t[r];return e},n.prototype.checkInputs=function(t){var e=this,r=Object.keys(t).filter(function(a){var o=Xe(a)[0];return e.graph.nodes[o]==null});if(r.length>0)throw new Error("The dict provided in model.execute(dict) has keys: ["+r+"] that are not part of graph")},n.prototype.mapOutputs=function(t){var e=this;return t.map(function(r){return e._signature!=null&&e._signature.outputs!=null&&e._signature.outputs[r]!=null?e._signature.outputs[r].name:r},{})},n.prototype.checkOutputs=function(t){var e=this;t.forEach(function(r){var a=Xe(r)[0];if(!e.graph.nodes[a])throw new Error("The output '"+r+"' is not found in the graph")})},n}(),vy="?tfjs-format=file",gy="model.json",yy=function(){function n(t,e){e===void 0&&(e={}),this.modelUrl=t,this.loadOptions=e,this.version="n/a",e==null&&(this.loadOptions={})}return Object.defineProperty(n.prototype,"modelVersion",{get:function(){return this.version},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"inputNodes",{get:function(){return this.executor.inputNodes},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"outputNodes",{get:function(){return this.executor.outputNodes},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"inputs",{get:function(){return this.executor.inputs},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"outputs",{get:function(){return this.executor.outputs},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"weights",{get:function(){return this.executor.weightMap},enumerable:!0,configurable:!0}),n.prototype.findIOHandler=function(){var t=this.modelUrl;if(t.load!=null)this.handler=t;else if(this.loadOptions.requestInit!=null)this.handler=Pn.browserHTTPRequest(t,this.loadOptions);else{var e=Pn.getLoadHandlers(t,this.loadOptions.onProgress);if(e.length===0)e.push(Pn.browserHTTPRequest(t,this.loadOptions));else if(e.length>1)throw new Error("Found more than one ("+e.length+") load handlers for URL '"+[t]+"'");this.handler=e[0]}},n.prototype.load=function(){return Yt(this,void 0,void 0,function(){var t,e,r,a;return Qt(this,function(o){switch(o.label){case 0:if(this.findIOHandler(),this.handler.load==null)throw new Error("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");return t=this,[4,this.handler.load()];case 1:return t.artifacts=o.sent(),e=this.artifacts.modelTopology,r={},this.artifacts.userDefinedMetadata!=null&&(r=this.artifacts.userDefinedMetadata.signature),this.version=e.versions.producer+"."+e.versions.minConsumer,a=Pn.decodeWeights(this.artifacts.weightData,this.artifacts.weightSpecs),this.executor=new my(Gg.Instance.transformGraph(e,r)),this.executor.weightMap=this.convertTensorMapToTensorsMap(a),[2,!0]}})})},n.prototype.save=function(t,e){return Yt(this,void 0,void 0,function(){var r;return Qt(this,function(a){if(typeof t=="string"){if((r=Pn.getSaveHandlers(t)).length===0)throw new Error("Cannot find any save handlers for URL '"+t+"'");if(r.length>1)throw new Error("Found more than one ("+r.length+") save handlers for URL '"+t+"'");t=r[0]}if(t.save==null)throw new Error("GraphModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");return[2,t.save(this.artifacts)]})})},n.prototype.predict=function(t,e){return this.execute(t,this.outputNodes)},n.prototype.normalizeInputs=function(t){if(!(t instanceof me||Array.isArray(t)))return t;if((t=Array.isArray(t)?t:[t]).length!==this.inputNodes.length)throw new Error("Input tensor count mismatch,the graph model has "+this.inputNodes.length+" placeholders, while there are "+t.length+" input tensors.");return this.inputNodes.reduce(function(e,r,a){return e[r]=t[a],e},{})},n.prototype.normalizeOutputs=function(t){return t=t||this.outputNodes,Array.isArray(t)?t:[t]},n.prototype.execute=function(t,e){t=this.normalizeInputs(t),e=this.normalizeOutputs(e);var r=this.executor.execute(t,e);return r.length>1?r:r[0]},n.prototype.executeAsync=function(t,e){return Yt(this,void 0,void 0,function(){var r;return Qt(this,function(a){switch(a.label){case 0:return t=this.normalizeInputs(t),e=this.normalizeOutputs(e),[4,this.executor.executeAsync(t,e)];case 1:return[2,(r=a.sent()).length>1?r:r[0]]}})})},n.prototype.convertTensorMapToTensorsMap=function(t){return Object.keys(t).reduce(function(e,r){return e[r]=[t[r]],e},{})},n.prototype.dispose=function(){this.executor.dispose()},n}();function rf(n,t){return t===void 0&&(t={}),Yt(this,void 0,void 0,function(){var e;return Qt(this,function(r){switch(r.label){case 0:if(n==null)throw new Error("modelUrl in loadGraphModel() cannot be null. Please provide a url or an IOHandler that loads the model");return t==null&&(t={}),t.fromTFHub&&n.load==null&&(n.endsWith("/")||(n+="/"),n=""+n+gy+vy),[4,(e=new yy(n,t)).load()];case 1:return r.sent(),[2,e]}})})}/**
    * @license
    * Copyright 2021 Google LLC. All Rights Reserved.
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    * http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    * =============================================================================
    */var af=function(n,t){return(af=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var a in r)r.hasOwnProperty(a)&&(e[a]=r[a])})(n,t)};function of(n,t){function e(){this.constructor=n}af(n,t),n.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var Dt=function(){return(Dt=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var a in t=arguments[e])Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a]);return n}).apply(this,arguments)};function Ct(n,t,e,r){return new(e||(e=Promise))(function(a,o){function i(c){try{u(r.next(c))}catch(l){o(l)}}function s(c){try{u(r.throw(c))}catch(l){o(l)}}function u(c){var l;c.done?a(c.value):(l=c.value,l instanceof e?l:new e(function(p){p(l)})).then(i,s)}u((r=r.apply(n,t||[])).next())})}function Nt(n,t){var e,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(u){return function(c){return function(l){if(e)throw new TypeError("Generator is already executing.");for(;i;)try{if(e=1,r&&(a=2&l[0]?r.return:l[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,l[1])).done)return a;switch(r=0,a&&(l=[2&l[0],a.value]),l[0]){case 0:case 1:a=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,r=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!(a=(a=i.trys).length>0&&a[a.length-1])&&(l[0]===6||l[0]===2)){i=0;continue}if(l[0]===3&&(!a||l[1]>a[0]&&l[1]<a[3])){i.label=l[1];break}if(l[0]===6&&i.label<a[1]){i.label=a[1],a=l;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(l);break}a[2]&&i.ops.pop(),i.trys.pop();continue}l=t.call(n,i)}catch(p){l=[6,p],r=0}finally{e=a=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([u,c])}}}function sf(n){var t=n.shape[2],e=Ha(n,2),r=Le(e,[-1]);return xn(r,t)}function xy(n,t){return ye(n,t)}function qr(n,t){return Z(function(){return Wt(Ua(n,j(t)),"int32")})}function by(n,t){var e=t.shape,r=e[0],a=e[1],o=e[2];return Z(function(){var i=sf(t),s=Ge(Zt(0,o,1,"int32"),1),u=Wt(Qn(i,s),"int32"),c=Le(u,[r,a]),l=nt(c,j(1,"int32"));return et(xy(l,n),j(1,"int32"))})}function wy(n){var t=n.shape,e=t[0],r=t[1],a=t[2];return Z(function(){var o=sf(n),i=Ge(Zt(0,a,1,"int32"),1),s=Wt(Qn(o,i),"int32");return Le(s,[e,r])})}var uf=function(){function n(t,e){this.model=t,this.outputStride=e;var r=this.model.inputs[0].shape;Pt.assert(r[1]===-1&&r[2]===-1,function(){return"Input shape ["+r[1]+", "+r[2]+"] must both be equal to or -1"})}return n.prototype.predict=function(t){var e=this;return Z(function(){var r=e.preprocessInput(Wt(t,"float32")),a=Ge(r,0),o=e.model.predict(a).map(function(s){return wt(s,[0])}),i=e.nameOutputResults(o);return{heatmapScores:Tr(i.heatmap),offsets:i.offsets,displacementFwd:i.displacementFwd,displacementBwd:i.displacementBwd,segmentation:i.segmentation,partHeatmaps:i.partHeatmaps,longOffsets:i.longOffsets,partOffsets:i.partOffsets}})},n.prototype.dispose=function(){this.model.dispose()},n}(),Cy=function(n){function t(){return n!==null&&n.apply(this,arguments)||this}return of(t,n),t.prototype.preprocessInput=function(e){return Z(function(){return et(ct(e,127.5),1)})},t.prototype.nameOutputResults=function(e){return{offsets:e[0],segmentation:e[1],partHeatmaps:e[2],longOffsets:e[3],heatmap:e[4],displacementFwd:e[5],displacementBwd:e[6],partOffsets:e[7]}},t}(uf),to=["nose","leftEye","rightEye","leftEar","rightEar","leftShoulder","rightShoulder","leftElbow","rightElbow","leftWrist","rightWrist","leftHip","rightHip","leftKnee","rightKnee","leftAnkle","rightAnkle"],st=to.length,ba=to.reduce(function(n,t,e){return n[t]=e,n},{}),Ny=[["leftHip","leftShoulder"],["leftElbow","leftShoulder"],["leftElbow","leftWrist"],["leftHip","leftKnee"],["leftKnee","leftAnkle"],["rightHip","rightShoulder"],["rightElbow","rightShoulder"],["rightElbow","rightWrist"],["rightHip","rightKnee"],["rightKnee","rightAnkle"],["leftShoulder","rightShoulder"],["leftHip","rightHip"]],Sy=[["nose","leftEye"],["leftEye","leftEar"],["nose","rightEye"],["rightEye","rightEar"],["nose","leftShoulder"],["leftShoulder","leftElbow"],["leftElbow","leftWrist"],["leftShoulder","leftHip"],["leftHip","leftKnee"],["leftKnee","leftAnkle"],["nose","rightShoulder"],["rightShoulder","rightElbow"],["rightElbow","rightWrist"],["rightShoulder","rightHip"],["rightHip","rightKnee"],["rightKnee","rightAnkle"]];Ny.map(function(n){var t=n[0],e=n[1];return[ba[t],ba[e]]});function Cu(n,t,e){var r=n[0],a=n[1],o=t[0],i=t[1],s=e.top,u=e.bottom;return[i/(e.left+e.right+a),o/(s+u+r)]}function cf(n,t,e,r){return{y:r.get(n,t,e),x:r.get(n,t,e+st)}}function lf(n,t,e){var r=cf(n.heatmapY,n.heatmapX,n.id,e),a=r.y,o=r.x;return{x:n.heatmapX*t+o,y:n.heatmapY*t+a}}function dc(n,t,e){return n<t?t:n>e?e:n}function Ey(n,t,e,r){var a=e-n,o=r-t;return a*a+o*o}function fc(n,t){return{x:n.x+t.x,y:n.y+t.y}}function Iy(n,t,e){e===void 0&&(e=.3);for(var r=0,a=0,o=0;o<n.length;o++)t.keypoints[o].score>e&&(a+=1,r+=Math.pow(n[o].x-t.keypoints[o].position.x,2)+Math.pow(n[o].y-t.keypoints[o].position.y,2));return a===0?r=1/0:r/=a,r}function Ry(n,t,e,r){var a=t[0],o=t[1],i=e[0],s=e[1],u=Math.round(((a+n.y+1)*s-1)/r);return{x:Math.round(((o+n.x+1)*i-1)/r),y:u}}function ky(n,t,e,r,a,o,i){for(var s=i[0],u=i[1],c=e(n),l=c.y*r+c.x,p=a[st*(2*l)+t],d=a[st*(2*l+1)+t],f=n.y+p,h=n.x+d,m=0;m<o;m++){f=Math.min(f,s-1);var v=e({x:h=Math.min(h,u-1),y:f}),g=v.y*r+v.x;f+=p=a[st*(2*g)+t],h+=d=a[st*(2*g+1)+t]}return{x:h,y:f}}function pf(n,t,e,r,a,o,i,s,u,c){for(var l=a[0],p=a[1],d=o[0],f=o[1],h=s[0],m=s[1],v=[],g=function(R){return Ry(R,[l,p],[d,f],u)},y=0;y<r;y++){var x=ky(n,y,g,i,t,c,[h,m]);v.push(x)}for(var b=-1,w=1/0,N=0;N<e.length;N++){var I=Iy(v,e[N]);I<w&&(b=N,w=I)}return b}function df(n,t){var e=n[0],r=n[1];return[Math.round((r-1)/t+1),Math.round((e-1)/t+1)]}function Ty(n,t,e,r,a,o,i,s,u,c){var l=i[0],p=i[1];c===void 0&&(c=5);for(var d=e.map(function(I){return new Uint8Array(r*a).fill(0)}),f=s.top,h=s.left,m=Cu([r,a],[l,p],s),v=m[0],g=m[1],y=df([l,p],o)[0],x=0;x<r;x+=1)for(var b=0;b<a;b+=1){var w=x*a+b;if(n[w]===1){var N=pf({x:b,y:x},t,e,c,[f,h],[v,g],y,[r,a],o,u);N>=0&&(d[N][w]=1)}}return d}function Ay(n,t,e,r,a,o,i,s,u,c,l){var p=s[0],d=s[1];l===void 0&&(l=5);for(var f=r.map(function(R){return new Int32Array(a*o).fill(-1)}),h=u.top,m=u.left,v=Cu([a,o],[p,d],u),g=v[0],y=v[1],x=df([p,d],i)[0],b=0;b<a;b+=1)for(var w=0;w<o;w+=1){var N=b*o+w;if(n[N]===1){var I=pf({x:w,y:b},t,r,l,[h,m],[g,y],x,[a,o],i,c);I>=0&&(f[I][N]=e[N])}}return f}function ff(n,t,e,r,a,o,i,s,u,c,l){for(var p=i[0],d=i[1],f=n.shape,h=f[0],m=f[1],v=t.shape.slice(0,2),g=v[0],y=v[1],x=Le(t,[g,y,2,st]),b=new Float32Array(l*st*3).fill(0),w=0;w<e.length;w++)for(var N=w*st*3,I=e[w],R=0;R<st;R++){var k=I.keypoints[R],T=N+3*R;b[T]=k.score,b[T+1]=k.position.y,b[T+2]=k.position.x}var O=Cu([r,a],[p,d],s),_=O[0],V=O[1],L=Re(b,[l,st,3]),B=s.top,z=s.left,U={variableNames:["segmentation","longOffsets","poses"],outputShape:[h,m],userCode:`
    int convertToPositionInOutput(int pos, int pad, float scale, int stride) {
      return round(((float(pos + pad) + 1.0) * scale - 1.0) / float(stride));
    }

    float convertToPositionInOutputFloat(
        int pos, int pad, float scale, int stride) {
      return ((float(pos + pad) + 1.0) * scale - 1.0) / float(stride);
    }

    float dist(float x1, float y1, float x2, float y2) {
      return pow(x1 - x2, 2.0) + pow(y1 - y2, 2.0);
    }

    float sampleLongOffsets(float h, float w, int d, int k) {
      float fh = fract(h);
      float fw = fract(w);
      int clH = int(ceil(h));
      int clW = int(ceil(w));
      int flH = int(floor(h));
      int flW = int(floor(w));
      float o11 = getLongOffsets(flH, flW, d, k);
      float o12 = getLongOffsets(flH, clW, d, k);
      float o21 = getLongOffsets(clH, flW, d, k);
      float o22 = getLongOffsets(clH, clW, d, k);
      float o1 = mix(o11, o12, fw);
      float o2 = mix(o21, o22, fw);
      return mix(o1, o2, fh);
    }

    int findNearestPose(int h, int w) {
      float prob = getSegmentation(h, w);
      if (prob < 1.0) {
        return -1;
      }

      // Done(Tyler): convert from output space h/w to strided space.
      float stridedH = convertToPositionInOutputFloat(
        h, `+B+", "+V+", "+o+`);
      float stridedW = convertToPositionInOutputFloat(
        w, `+z+", "+_+", "+o+`);

      float minDist = 1000000.0;
      int iMin = -1;
      for (int i = 0; i < `+l+`; i++) {
        float curDistSum = 0.0;
        int numKpt = 0;
        for (int k = 0; k < `+st+`; k++) {
          float dy = sampleLongOffsets(stridedH, stridedW, 0, k);
          float dx = sampleLongOffsets(stridedH, stridedW, 1, k);

          float y = float(h) + dy;
          float x = float(w) + dx;

          for (int s = 0; s < `+u+`; s++) {
            int yRounded = round(min(y, float(`+(r-1)+`)));
            int xRounded = round(min(x, float(`+(a-1)+`)));

            float yStrided = convertToPositionInOutputFloat(
              yRounded, `+B+", "+V+", "+o+`);
            float xStrided = convertToPositionInOutputFloat(
              xRounded, `+z+", "+_+", "+o+`);

            float dy = sampleLongOffsets(yStrided, xStrided, 0, k);
            float dx = sampleLongOffsets(yStrided, xStrided, 1, k);

            y = y + dy;
            x = x + dx;
          }

          float poseScore = getPoses(i, k, 0);
          float poseY = getPoses(i, k, 1);
          float poseX = getPoses(i, k, 2);
          if (poseScore > `+c+`) {
            numKpt = numKpt + 1;
            curDistSum = curDistSum + dist(x, y, poseX, poseY);
          }
        }
        if (numKpt > 0 && curDistSum / float(numKpt) < minDist) {
          minDist = curDistSum / float(numKpt);
          iMin = i;
        }
      }
      return iMin;
    }

    void main() {
        ivec2 coords = getOutputCoords();
        int nearestPose = findNearestPose(coords[0], coords[1]);
        setOutput(float(nearestPose));
      }
  `};return gl().compileAndRun(U,[n,x,L])}function Dy(n,t){return Z(function(){return Wt(Yn(n,j(t)),"int32")})}function Oy(n,t,e){return Z(function(){return et(ye(Wt(Yn(n,j(e)),"int32"),nt(t,1)),1)})}function hf(){return vl()==="webgl"}function _y(n,t,e,r,a,o,i,s,u,c,l,p){var d=i[0],f=i[1];return u===void 0&&(u=.2),c===void 0&&(c=8),l===void 0&&(l=.3),p===void 0&&(p=10),Ct(this,void 0,void 0,function(){var h,m,v,g,y;return Nt(this,function(x){switch(x.label){case 0:return h=e.filter(function(b){return b.score>=u}),hf()?(v=Z(function(){var b=ff(n,t,h,r,a,o,[d,f],s,c,l,p),w=Ii().makeTensorFromDataId(b.dataId,b.shape,b.dtype);return h.map(function(N,I){return Dy(w,I)})}),[4,Promise.all(v.map(function(b){return b.data()}))]):[3,2];case 1:return m=x.sent(),v.forEach(function(b){return b.dispose()}),[3,5];case 2:return[4,n.data()];case 3:return g=x.sent(),[4,t.data()];case 4:y=x.sent(),m=Ty(g,y,h,r,a,o,[d,f],s,c),x.label=5;case 5:return[2,m.map(function(b,w){return{data:b,pose:h[w],width:a,height:r}})]}})})}function Fy(n,t,e,r,a,o,i,s,u,c,l,p,d){var f=s[0],h=s[1];return c===void 0&&(c=.2),l===void 0&&(l=8),p===void 0&&(p=.3),d===void 0&&(d=10),Ct(this,void 0,void 0,function(){var m,v,g,y,x,b;return Nt(this,function(w){switch(w.label){case 0:return m=r.filter(function(N){return N.score>=c}),hf()?(g=Z(function(){var N=ff(n,t,m,a,o,i,[f,h],u,l,p,d),I=Ii().makeTensorFromDataId(N.dataId,N.shape,N.dtype);return m.map(function(R,k){return Oy(I,e,k)})}),[4,Promise.all(g.map(function(N){return N.data()}))]):[3,2];case 1:return v=w.sent(),g.forEach(function(N){return N.dispose()}),[3,6];case 2:return[4,n.data()];case 3:return y=w.sent(),[4,t.data()];case 4:return x=w.sent(),[4,e.data()];case 5:b=w.sent(),v=Ay(y,x,b,m,a,o,i,[f,h],u,l),w.label=6;case 6:return[2,v.map(function(N,I){return{pose:m[I],data:N,height:a,width:o}})]}})})}function Ao(n){return Math.floor(n/2)}var My=function(){function n(t,e){this.priorityQueue=new Array(t),this.numberOfElements=-1,this.getElementValue=e}return n.prototype.enqueue=function(t){this.priorityQueue[++this.numberOfElements]=t,this.swim(this.numberOfElements)},n.prototype.dequeue=function(){var t=this.priorityQueue[0];return this.exchange(0,this.numberOfElements--),this.sink(0),this.priorityQueue[this.numberOfElements+1]=null,t},n.prototype.empty=function(){return this.numberOfElements===-1},n.prototype.size=function(){return this.numberOfElements+1},n.prototype.all=function(){return this.priorityQueue.slice(0,this.numberOfElements+1)},n.prototype.max=function(){return this.priorityQueue[0]},n.prototype.swim=function(t){for(;t>0&&this.less(Ao(t),t);)this.exchange(t,Ao(t)),t=Ao(t)},n.prototype.sink=function(t){for(;2*t<=this.numberOfElements;){var e=2*t;if(e<this.numberOfElements&&this.less(e,e+1)&&e++,!this.less(t,e))break;this.exchange(t,e),t=e}},n.prototype.getValueAt=function(t){return this.getElementValue(this.priorityQueue[t])},n.prototype.less=function(t,e){return this.getValueAt(t)<this.getValueAt(e)},n.prototype.exchange=function(t,e){var r=this.priorityQueue[t];this.priorityQueue[t]=this.priorityQueue[e],this.priorityQueue[e]=r},n}();function Py(n,t,e,r,a,o){for(var i=o.shape,s=i[0],u=i[1],c=!0,l=Math.max(e-a,0),p=Math.min(e+a+1,s),d=l;d<p;++d){for(var f=Math.max(r-a,0),h=Math.min(r+a+1,u),m=f;m<h;++m)if(o.get(d,m,n)>t){c=!1;break}if(!c)break}return c}function By(n,t,e){for(var r=e.shape,a=r[0],o=r[1],i=r[2],s=new My(a*o*i,function(d){return d.score}),u=0;u<a;++u)for(var c=0;c<o;++c)for(var l=0;l<i;++l){var p=e.get(u,c,l);p<n||Py(l,p,u,c,t,e)&&s.enqueue({score:p,part:{heatmapY:u,heatmapX:c,id:l}})}return s}var mf=Sy.map(function(n){var t=n[0],e=n[1];return[ba[t],ba[e]]}),Do=mf.map(function(n){return n[1]}),hc=mf.map(function(n){return n[0]});function Ly(n,t,e){var r=e.shape[2]/2;return{y:e.get(t.y,t.x,n),x:e.get(t.y,t.x,r+n)}}function Oo(n,t,e,r){return{y:dc(Math.round(n.y/t),0,e-1),x:dc(Math.round(n.x/t),0,r-1)}}function mc(n,t,e,r,a,o,i,s){s===void 0&&(s=2);for(var u=r.shape,c=u[0],l=u[1],p=Ly(n,Oo(t.position,o,c,l),i),d=fc(t.position,p),f=0;f<s;f++){var h=Oo(d,o,c,l),m=cf(h.y,h.x,e,a);d=fc({x:h.x*o,y:h.y*o},{x:m.x,y:m.y})}var v=Oo(d,o,c,l),g=r.get(v.y,v.x,e);return{position:d,part:to[e],score:g}}function Vy(n,t,e,r,a,o){var i=t.shape[2],s=Do.length,u=new Array(i),c=n.part,l=n.score,p=lf(c,r,e);u[c.id]={score:l,part:to[c.id],position:p};for(var d=s-1;d>=0;--d){var f=Do[d],h=hc[d];u[f]&&!u[h]&&(u[h]=mc(d,u[f],h,t,e,r,o))}for(d=0;d<s;++d)f=hc[d],h=Do[d],u[f]&&!u[h]&&(u[h]=mc(d,u[f],h,t,e,r,a));return u}function vf(n,t,e,r){var a=e.x,o=e.y;return n.some(function(i){var s=i.keypoints[r].position;return Ey(o,a,s.y,s.x)<=t})}function Wy(n,t,e){return e.reduce(function(r,a,o){var i=a.position,s=a.score;return vf(n,t,i,o)||(r+=s),r},0)/e.length}var zy=1;function jr(n,t,e,r,a,o,i,s){i===void 0&&(i=.5),s===void 0&&(s=20);for(var u=[],c=By(i,zy,n),l=s*s;u.length<o&&!c.empty();){var p=c.dequeue();if(!vf(u,l,lf(p.part,a,t),p.part.id)){var d=Vy(p,n,t,a,e,r),f=Wy(u,l,d);u.push({keypoints:d,score:f})}}return u}var rr,Uy=[-123.15,-115.9,-103.06],Gy=function(n){function t(){return n!==null&&n.apply(this,arguments)||this}return of(t,n),t.prototype.preprocessInput=function(e){return nt(e,Uy)},t.prototype.nameOutputResults=function(e){var r=e[0],a=e[1],o=e[2],i=e[3],s=e[4],u=e[5];return{offsets:s,segmentation:e[6],partHeatmaps:u,longOffsets:i,heatmap:o,displacementFwd:a,displacementBwd:r,partOffsets:e[7]}},t}(uf),vc="https://storage.googleapis.com/tfjs-models/savedmodel/bodypix/resnet50/",gc="https://storage.googleapis.com/tfjs-models/savedmodel/bodypix/mobilenet/";function Hy(n,t){var e="model-stride"+n+".json";return t===4?vc+"float/"+e:vc+"quant"+t+"/"+e}function qy(n,t,e){var r={1:"100",.75:"075",.5:"050"},a="model-stride"+n+".json";return e===4?gc+"float/"+r[t]+"/"+a:gc+"quant"+e+"/"+r[t]+"/"+a}function jy(n){if("offsetHeight"in n&&n.offsetHeight!==0&&"offsetWidth"in n&&n.offsetWidth!==0)return[n.offsetHeight,n.offsetWidth];if(n.height!=null&&n.width!=null)return[n.height,n.width];throw new Error("HTMLImageElement must have height and width attributes set.")}function Ky(n){return n.hasAttribute("height")&&n.hasAttribute("width")?[n.height,n.width]:[n.videoHeight,n.videoWidth]}function Ft(n){if(typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof OffscreenCanvas!="undefined"&&n instanceof OffscreenCanvas||typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement)return jy(n);if(typeof ImageData!="undefined"&&n instanceof ImageData)return[n.height,n.width];if(typeof HTMLVideoElement!="undefined"&&n instanceof HTMLVideoElement)return Ky(n);if(n instanceof me)return[n.shape[0],n.shape[1]];throw new Error("error: Unknown input type: "+n+".")}function Xy(n,t){return(n-1)%t==0}function yc(n,t){return Xy(n,t)?n:Math.floor(n/t)*t+1}var sr={low:"low",medium:"medium",high:"high",full:"full"},$y=((rr={})[sr.low]=.25,rr[sr.medium]=.5,rr[sr.high]=.75,rr[sr.full]=1,rr),xc=.1,bc=2;function Yy(n){if(typeof n=="string"){var t=$y[n];return Pt.assert(typeof t=="number",function(){return"string value of inputResolution must be one of "+Object.values(sr).join(",")+" but was "+n+"."}),t}return Pt.assert(typeof n=="number"&&n<=bc&&n>=xc,function(){return"inputResolution must be a string or number between "+xc+" and "+bc+", but was "+n}),n}function Kr(n,t,e){var r=e[0],a=e[1],o=Yy(n);return[yc(r*o,t),yc(a*o,t)]}function Qy(n){return n instanceof me?n:Xd.fromPixels(n)}function m0(n,t,e){var r=t[0],a=t[1];e===void 0&&(e=!1);var o,i,s,u,c,l,p=n.shape,d=p[0],f=p[1]/d;if(f>a/r){o=a;var h=r-(i=Math.ceil(o/f));s=0,u=0,c=Math.floor(h/2),l=r-(i+c)}else{i=r;var m=a-(o=Math.ceil(r*f));s=Math.floor(m/2),u=a-(o+s),c=0,l=0}return{resizedAndPadded:Z(function(){var v;return v=e?at.resizeBilinear(an(n,1),[i,o]):at.resizeBilinear(n,[i,o]),La(v,[[c,l],[s,u],[0,0]])}),paddedBy:[[c,l],[s,u]]}}function An(n,t,e,r,a){var o=t[0],i=t[1],s=e[0],u=e[1],c=r[0],l=c[0],p=c[1],d=r[1],f=d[0],h=d[1];return a===void 0&&(a=!1),Z(function(){var m=at.resizeBilinear(n,[s,u],!0);return a&&(m=Tr(m)),Jy(m,[o,i],[[l,p],[f,h]])})}function Jy(n,t,e){var r=t[0],a=t[1],o=e[0],i=o[0],s=o[1],u=e[1],c=u[0],l=u[1];return Z(function(){var p=Ge(n);return wt(at.cropAndResize(p,[[i/(r+i+s-1),c/(a+c+l-1),(i+r-1)/(r+i+s-1),(c+a-1)/(a+c+l-1)]],[0],[r,a]),[0])})}function Xr(n,t){var e=t[0],r=t[1],a=Ft(n),o=a[0],i=a[1],s=r/e,u=[0,0,0,0],c=u[0],l=u[1],p=u[2],d=u[3];return i/o<s?(c=0,l=0,p=Math.round(.5*(s*o-i)),d=Math.round(.5*(s*o-i))):(c=Math.round(.5*(1/s*i-o)),l=Math.round(.5*(1/s*i-o)),p=0,d=0),{resized:Z(function(){var f=Qy(n);return f=La(f,[[c,l],[p,d],[0,0]]),at.resizeBilinear(f,[e,r])}),padding:{top:c,left:p,right:d,bottom:l}}}function $r(n){return Ct(this,void 0,void 0,function(){return Nt(this,function(t){return[2,Promise.all(n.map(function(e){return e.buffer()}))]})})}function Zy(n,t,e,r,a){return r===void 0&&(r=0),a===void 0&&(a=0),{score:n.score,keypoints:n.keypoints.map(function(o){var i=o.score,s=o.part,u=o.position;return{score:i,part:s,position:{x:u.x*e+a,y:u.y*t+r}}})}}function e0(n,t,e,r,a){return r===void 0&&(r=0),a===void 0&&(a=0),e===1&&t===1&&r===0&&a===0?n:n.map(function(o){return Zy(o,t,e,r,a)})}function t0(n,t){return{score:n.score,keypoints:n.keypoints.map(function(e){var r=e.score,a=e.part,o=e.position;return{score:r,part:a,position:{x:t-1-o.x,y:o.y}}})}}function n0(n,t){return t<=0?n:n.map(function(e){return t0(e,t)})}function Yr(n,t,e,r,a){var o=t[0],i=t[1],s=e[0],u=e[1],c=e0(n,(o+r.top+r.bottom)/s,(i+r.left+r.right)/u,-r.top,-r.left);return a?n0(c,i):c}var Dn=!0,Qr=!1,gf={architecture:"MobileNetV1",outputStride:16,quantBytes:4,multiplier:.75},wc=["MobileNetV1","ResNet50"],Cc={MobileNetV1:[8,16,32],ResNet50:[32,16]},Nc={MobileNetV1:[.5,.75,1],ResNet50:[1]},Sc=[1,2,4];function r0(n){if((n=n||gf).architecture==null&&(n.architecture="MobileNetV1"),wc.indexOf(n.architecture)<0)throw new Error("Invalid architecture "+n.architecture+". Should be one of "+wc);if(n.outputStride==null&&(n.outputStride=16),Cc[n.architecture].indexOf(n.outputStride)<0)throw new Error("Invalid outputStride "+n.outputStride+". Should be one of "+Cc[n.architecture]+" for architecture "+n.architecture+".");if(n.multiplier==null&&(n.multiplier=1),Nc[n.architecture].indexOf(n.multiplier)<0)throw new Error("Invalid multiplier "+n.multiplier+". Should be one of "+Nc[n.architecture]+" for architecture "+n.architecture+".");if(n.quantBytes==null&&(n.quantBytes=4),Sc.indexOf(n.quantBytes)<0)throw new Error("Invalid quantBytes "+n.quantBytes+". Should be one of "+Sc+" for architecture "+n.architecture+".");return n}var Jr={flipHorizontal:!1,internalResolution:"medium",segmentationThreshold:.7,maxDetections:10,scoreThreshold:.4,nmsRadius:20},Zr={flipHorizontal:!1,internalResolution:"medium",segmentationThreshold:.7,maxDetections:10,scoreThreshold:.4,nmsRadius:20,minKeypointScore:.3,refineSteps:10};function Ec(n){var t=n.segmentationThreshold,e=n.maxDetections,r=n.scoreThreshold,a=n.nmsRadius;if(t<0||t>1)throw new Error("segmentationThreshold "+t+". Should be in range [0.0, 1.0]");if(e<=0)throw new Error("Invalid maxDetections "+e+". Should be > 0");if(r<0||r>1)throw new Error("Invalid scoreThreshold "+r+". Should be in range [0.0, 1.0]");if(a<=0)throw new Error("Invalid nmsRadius "+a+".")}function Ic(n){var t=n.segmentationThreshold,e=n.maxDetections,r=n.scoreThreshold,a=n.nmsRadius,o=n.minKeypointScore,i=n.refineSteps;if(t<0||t>1)throw new Error("segmentationThreshold "+t+". Should be in range [0.0, 1.0]");if(e<=0)throw new Error("Invalid maxDetections "+e+". Should be > 0");if(r<0||r>1)throw new Error("Invalid scoreThreshold "+r+". Should be in range [0.0, 1.0]");if(a<=0)throw new Error("Invalid nmsRadius "+a+".");if(o<0||o>1)throw new Error("Invalid minKeypointScore "+o+".Should be in range [0.0, 1.0]");if(i<=0||i>20)throw new Error("Invalid refineSteps "+i+".Should be in range [1, 20]")}var yf=function(){function n(t){this.baseModel=t}return n.prototype.predictForPersonSegmentation=function(t){var e=this.baseModel.predict(t);return{segmentLogits:e.segmentation,heatmapScores:e.heatmapScores,offsets:e.offsets,displacementFwd:e.displacementFwd,displacementBwd:e.displacementBwd}},n.prototype.predictForPersonSegmentationAndPart=function(t){var e=this.baseModel.predict(t);return{segmentLogits:e.segmentation,partHeatmapLogits:e.partHeatmaps,heatmapScores:e.heatmapScores,offsets:e.offsets,displacementFwd:e.displacementFwd,displacementBwd:e.displacementBwd}},n.prototype.predictForMultiPersonInstanceSegmentationAndPart=function(t){var e=this.baseModel.predict(t);return{segmentLogits:e.segmentation,longOffsets:e.longOffsets,heatmapScores:e.heatmapScores,offsets:e.offsets,displacementFwd:e.displacementFwd,displacementBwd:e.displacementBwd,partHeatmaps:e.partHeatmaps}},n.prototype.segmentPersonActivation=function(t,e,r){var a=this;r===void 0&&(r=.5);var o=Ft(t),i=o[0],s=o[1],u=Kr(e,this.baseModel.outputStride,[i,s]),c=Xr(t,u),l=c.resized,p=c.padding,d=Z(function(){var y=a.predictForPersonSegmentation(l),x=y.segmentLogits,b=y.heatmapScores,w=y.offsets,N=y.displacementFwd,I=y.displacementBwd,R=l.shape,k=R[0],T=R[1],O=An(x,[i,s],[k,T],[[p.top,p.bottom],[p.left,p.right]],Dn);return{segmentation:qr(wt(O),r),heatmapScores:b,offsets:w,displacementFwd:N,displacementBwd:I}}),f=d.segmentation,h=d.heatmapScores,m=d.offsets,v=d.displacementFwd,g=d.displacementBwd;return l.dispose(),{segmentation:f,heatmapScores:h,offsets:m,displacementFwd:v,displacementBwd:g,padding:p,internalResolutionHeightAndWidth:u}},n.prototype.segmentPerson=function(t,e){return e===void 0&&(e=Jr),Ct(this,void 0,void 0,function(){var r,a,o,i,s,u,c,l,p,d,f,h,m,v,g,y,x,b;return Nt(this,function(w){switch(w.label){case 0:return Ec(e=Dt(Dt({},Jr),e)),r=this.segmentPersonActivation(t,e.internalResolution,e.segmentationThreshold),a=r.segmentation,o=r.heatmapScores,i=r.offsets,s=r.displacementFwd,u=r.displacementBwd,c=r.padding,l=r.internalResolutionHeightAndWidth,p=a.shape,d=p[0],f=p[1],[4,a.data()];case 1:return h=w.sent(),a.dispose(),[4,$r([o,i,s,u])];case 2:return m=w.sent(),v=m[0],g=m[1],y=m[2],x=m[3],b=Yr(b=jr(v,g,y,x,this.baseModel.outputStride,e.maxDetections,e.scoreThreshold,e.nmsRadius),[d,f],l,c,Qr),o.dispose(),i.dispose(),s.dispose(),u.dispose(),[2,{height:d,width:f,data:h,allPoses:b}]}})})},n.prototype.segmentMultiPerson=function(t,e){return e===void 0&&(e=Zr),Ct(this,void 0,void 0,function(){var r,a,o,i,s,u,c,l,p,d,f,h,m,v,g,y,x,b,w,N,I,R=this;return Nt(this,function(k){switch(k.label){case 0:return Ic(e=Dt(Dt({},Zr),e)),r=Ft(t),a=r[0],o=r[1],i=Kr(e.internalResolution,this.baseModel.outputStride,[a,o]),s=Xr(t,i),u=s.resized,c=s.padding,l=Z(function(){var T,O=R.predictForMultiPersonInstanceSegmentationAndPart(u),_=O.segmentLogits,V=O.longOffsets,L=O.heatmapScores,B=O.offsets,z=O.displacementFwd,U=O.displacementBwd,W=An(_,[a,o],i,[[c.top,c.bottom],[c.left,c.right]],Dn);return T=V,{segmentation:qr(wt(W),e.segmentationThreshold),longOffsets:T,heatmapScoresRaw:L,offsetsRaw:B,displacementFwdRaw:z,displacementBwdRaw:U}}),p=l.segmentation,d=l.longOffsets,f=l.heatmapScoresRaw,h=l.offsetsRaw,m=l.displacementFwdRaw,v=l.displacementBwdRaw,[4,$r([f,h,m,v])];case 1:return g=k.sent(),y=g[0],x=g[1],b=g[2],w=g[3],N=Yr(N=jr(y,x,b,w,this.baseModel.outputStride,e.maxDetections,e.scoreThreshold,e.nmsRadius),[a,o],i,c,Qr),[4,_y(p,d,N,a,o,this.baseModel.outputStride,i,c,e.scoreThreshold,e.refineSteps,e.minKeypointScore,e.maxDetections)];case 2:return I=k.sent(),u.dispose(),p.dispose(),d.dispose(),f.dispose(),h.dispose(),m.dispose(),v.dispose(),[2,I]}})})},n.prototype.segmentPersonPartsActivation=function(t,e,r){var a=this;r===void 0&&(r=.5);var o=Ft(t),i=o[0],s=o[1],u=Kr(e,this.baseModel.outputStride,[i,s]),c=Xr(t,u),l=c.resized,p=c.padding,d=Z(function(){var y=a.predictForPersonSegmentationAndPart(l),x=y.segmentLogits,b=y.partHeatmapLogits,w=y.heatmapScores,N=y.offsets,I=y.displacementFwd,R=y.displacementBwd,k=l.shape,T=k[0],O=k[1],_=An(x,[i,s],[T,O],[[p.top,p.bottom],[p.left,p.right]],Dn),V=An(b,[i,s],[T,O],[[p.top,p.bottom],[p.left,p.right]],Dn);return{partSegmentation:by(qr(wt(_),r),V),heatmapScores:w,offsets:N,displacementFwd:I,displacementBwd:R}}),f=d.partSegmentation,h=d.heatmapScores,m=d.offsets,v=d.displacementFwd,g=d.displacementBwd;return l.dispose(),{partSegmentation:f,heatmapScores:h,offsets:m,displacementFwd:v,displacementBwd:g,padding:p,internalResolutionHeightAndWidth:u}},n.prototype.segmentPersonParts=function(t,e){return e===void 0&&(e=Jr),Ct(this,void 0,void 0,function(){var r,a,o,i,s,u,c,l,p,d,f,h,m,v,g,y,x,b;return Nt(this,function(w){switch(w.label){case 0:return Ec(e=Dt(Dt({},Jr),e)),r=this.segmentPersonPartsActivation(t,e.internalResolution,e.segmentationThreshold),a=r.partSegmentation,o=r.heatmapScores,i=r.offsets,s=r.displacementFwd,u=r.displacementBwd,c=r.padding,l=r.internalResolutionHeightAndWidth,p=a.shape,d=p[0],f=p[1],[4,a.data()];case 1:return h=w.sent(),a.dispose(),[4,$r([o,i,s,u])];case 2:return m=w.sent(),v=m[0],g=m[1],y=m[2],x=m[3],b=Yr(b=jr(v,g,y,x,this.baseModel.outputStride,e.maxDetections,e.scoreThreshold,e.nmsRadius),[d,f],l,c,Qr),o.dispose(),i.dispose(),s.dispose(),u.dispose(),[2,{height:d,width:f,data:h,allPoses:b}]}})})},n.prototype.segmentMultiPersonParts=function(t,e){return e===void 0&&(e=Zr),Ct(this,void 0,void 0,function(){var r,a,o,i,s,u,c,l,p,d,f,h,m,v,g,y,x,b,w,N,I,R,k=this;return Nt(this,function(T){switch(T.label){case 0:return Ic(e=Dt(Dt({},Zr),e)),r=Ft(t),a=r[0],o=r[1],i=Kr(e.internalResolution,this.baseModel.outputStride,[a,o]),s=Xr(t,i),u=s.resized,c=s.padding,l=Z(function(){var O=k.predictForMultiPersonInstanceSegmentationAndPart(u),_=O.segmentLogits,V=O.longOffsets,L=O.heatmapScores,B=O.offsets,z=O.displacementFwd,U=O.displacementBwd,W=O.partHeatmaps,H=An(_,[a,o],i,[[c.top,c.bottom],[c.left,c.right]],Dn),q=An(W,[a,o],i,[[c.top,c.bottom],[c.left,c.right]],Dn),K=V;return{segmentation:qr(wt(H),e.segmentationThreshold),longOffsets:K,heatmapScoresRaw:L,offsetsRaw:B,displacementFwdRaw:z,displacementBwdRaw:U,partSegmentation:wy(q)}}),p=l.segmentation,d=l.longOffsets,f=l.heatmapScoresRaw,h=l.offsetsRaw,m=l.displacementFwdRaw,v=l.displacementBwdRaw,g=l.partSegmentation,[4,$r([f,h,m,v])];case 1:return y=T.sent(),x=y[0],b=y[1],w=y[2],N=y[3],I=Yr(I=jr(x,b,w,N,this.baseModel.outputStride,e.maxDetections,e.scoreThreshold,e.nmsRadius),[a,o],i,c,Qr),[4,Fy(p,d,g,I,a,o,this.baseModel.outputStride,i,c,e.scoreThreshold,e.refineSteps,e.minKeypointScore,e.maxDetections)];case 2:return R=T.sent(),u.dispose(),p.dispose(),d.dispose(),f.dispose(),h.dispose(),m.dispose(),v.dispose(),g.dispose(),[2,R]}})})},n.prototype.dispose=function(){this.baseModel.dispose()},n}();function a0(n){return Ct(this,void 0,void 0,function(){var t,e,r,a,o,i;return Nt(this,function(s){switch(s.label){case 0:if(t=n.outputStride,e=n.quantBytes,r=n.multiplier,Qd==null)throw new Error(`Cannot find TensorFlow.js. If you are using a <script> tag, please also include @tensorflow/tfjs on the page before using this
        model.`);return a=qy(t,r,e),[4,rf(n.modelUrl||a)];case 1:return o=s.sent(),i=new Cy(o,t),[2,new yf(i)]}})})}function o0(n){return Ct(this,void 0,void 0,function(){var t,e,r,a,o;return Nt(this,function(i){switch(i.label){case 0:if(t=n.outputStride,e=n.quantBytes,Qd==null)throw new Error(`Cannot find TensorFlow.js. If you are using a <script> tag, please also include @tensorflow/tfjs on the page before using this
        model.`);return r=Hy(t,e),[4,rf(n.modelUrl||r)];case 1:return a=i.sent(),o=new Gy(a,t),[2,new yf(o)]}})})}function v0(n){return n===void 0&&(n=gf),Ct(this,void 0,void 0,function(){return Nt(this,function(t){return(n=r0(n)).architecture==="ResNet50"?[2,o0(n)]:n.architecture==="MobileNetV1"?[2,a0(n)]:[2,null]})})}function i0(n,t,e){for(var r=n.getContext("2d"),a=0,o=1/(2*Math.PI*5*5),i=e<3?1:2,s=-e;s<=e;s+=i)for(var u=-e;u<=e;u+=i)a+=o*Math.exp(-(u*u+s*s)/50);for(s=-e;s<=e;s+=i)for(u=-e;u<=e;u+=i)r.globalAlpha=o*Math.exp(-(u*u+s*s)/50)/a*e,r.drawImage(t,u,s);r.globalAlpha=1}var _o={};function s0(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)}function xf(n,t,e,r){var a=n.width,o=n.height,i=t.width,s=t.height;if(a!==i||o!==s)throw new Error("error: dimensions must match. "+e+" has dimensions "+a+"x"+o+", "+r+" has dimensions "+i+"x"+s)}function no(n){var t=n.getContext("2d");t.scale(-1,1),t.translate(-n.width,0)}function wa(n,t,e){n.globalCompositeOperation=e,n.drawImage(t,0,0)}function u0(){if(typeof document!="undefined")return document.createElement("canvas");if(typeof OffscreenCanvas!="undefined")return new OffscreenCanvas(0,0);throw new Error("Cannot create a canvas in this context")}function Nu(n){return _o[n]||(_o[n]=u0()),_o[n]}function c0(n,t,e){var r=n.height,a=n.width,o=e.getContext("2d");e.width=a,e.height=r,o.clearRect(0,0,a,r),o.save(),s0()?i0(e,n,t):(o.filter="blur("+t+"px)",o.drawImage(n,0,0,a,r)),o.restore()}function Jn(n,t,e){var r=Nu(e);return t===0?l0(n,r):c0(n,t,r),r}function l0(n,t){var e=n.width,r=n.height;t.width=e,t.height=r,t.getContext("2d").drawImage(n,0,0,e,r)}function p0(n,t){t.width=n.width,t.height=n.height,t.getContext("2d").putImageData(n,0,0)}function ro(n,t){var e=Nu(t);return p0(n,e),e}function bf(n,t,e,r,a){if(t===void 0&&(t={r:0,g:0,b:0,a:0}),e===void 0&&(e={r:0,g:0,b:0,a:255}),r===void 0&&(r=!1),a===void 0&&(a=[1]),Array.isArray(n)&&n.length===0)return null;var o,i=(o=Array.isArray(n)?n:[n])[0],s=i.width,u=i.height,c=new Uint8ClampedArray(s*u*4);function l(m,v,g,y,x,b){b===void 0&&(b={r:0,g:255,b:255,a:255});for(var w=-x;w<=x;w++)for(var N=-x;N<=x;N++)if(w!==0&&N!==0){var I=(v+w)*y+(g+N);m[4*I+0]=b.r,m[4*I+1]=b.g,m[4*I+2]=b.b,m[4*I+3]=b.a}}function p(m,v,g,y,x,b){x===void 0&&(x=[1]),b===void 0&&(b=1);for(var w=0,N=-b;N<=b;N++)for(var I=function(k){if(N!==0&&k!==0){var T=(v+N)*y+(g+k);x.some(function(O){return O===m[T]})||(w+=1)}},R=-b;R<=b;R++)I(R);return w>0}for(var d=0;d<u;d+=1)for(var f=function(m){var v=d*s+m;c[4*v+0]=e.r,c[4*v+1]=e.g,c[4*v+2]=e.b,c[4*v+3]=e.a;for(var g=function(x){if(a.some(function(w){return w===o[x].data[v]})){c[4*v]=t.r,c[4*v+1]=t.g,c[4*v+2]=t.b,c[4*v+3]=t.a;var b=p(o[x].data,d,m,s,a);r&&d-1>=0&&d+1<u&&m-1>=0&&m+1<s&&b&&l(c,d,m,s,1)}},y=0;y<o.length;y++)g(y)},h=0;h<s;h+=1)f(h);return new ImageData(c,s,u)}var d0=[[110,64,170],[143,61,178],[178,60,178],[210,62,167],[238,67,149],[255,78,125],[255,94,99],[255,115,75],[255,140,56],[239,167,47],[217,194,49],[194,219,64],[175,240,91],[135,245,87],[96,247,96],[64,243,115],[40,234,141],[28,219,169],[26,199,194],[33,176,213],[47,150,224],[65,125,224],[84,101,214],[99,81,195]];function g0(n,t){if(t===void 0&&(t=d0),Array.isArray(n)&&n.length===0)return null;for(var e,r=(e=Array.isArray(n)?n:[n])[0],a=r.width,o=r.height,i=new Uint8ClampedArray(a*o*4),s=0;s<o*a;++s){var u=4*s;i[u+0]=255,i[u+1]=255,i[u+2]=255,i[u+3]=255;for(var c=0;c<e.length;c++){var l=e[c].data[s];if(l!==-1){var p=t[l];if(!p)throw new Error("No color could be found for part id "+l);i[u+0]=p[0],i[u+1]=p[1],i[u+2]=p[2],i[u+3]=255}}}return new ImageData(i,a,o)}var ut={blurred:"blurred",blurredMask:"blurred-mask",mask:"mask",lowresPartMask:"lowres-part-mask"};function y0(n,t,e,r,a,o){r===void 0&&(r=.7),a===void 0&&(a=0),o===void 0&&(o=!1);var i=Ft(t),s=i[0],u=i[1];n.width=u,n.height=s;var c=n.getContext("2d");if(c.save(),o&&no(n),c.drawImage(t,0,0),c.globalAlpha=r,e){xf({width:u,height:s},e,"image","mask");var l=Jn(ro(e,ut.mask),a,ut.blurredMask);c.drawImage(l,0,0,u,s)}c.restore()}function x0(n,t,e,r,a,o,i){r===void 0&&(r=.7),a===void 0&&(a=0),o===void 0&&(o=!1),i===void 0&&(i=10);var s=Ft(t),u=s[0];xf({width:s[1],height:u},e,"image","mask");var c=Jn(ro(e,ut.mask),a,ut.blurredMask);n.width=c.width,n.height=c.height;var l=n.getContext("2d");l.save(),o&&no(n);var p=Nu(ut.lowresPartMask),d=p.getContext("2d");p.width=c.width*(1/i),p.height=c.height*(1/i),d.drawImage(c,0,0,c.width,c.height,0,0,p.width,p.height),l.imageSmoothingEnabled=!1,l.drawImage(p,0,0,p.width,p.height,0,0,n.width,n.height);for(var f=0;f<p.width;f++)l.beginPath(),l.strokeStyle="#ffffff",l.moveTo(i*f,0),l.lineTo(i*f,n.height),l.stroke();for(f=0;f<p.height;f++)l.beginPath(),l.strokeStyle="#ffffff",l.moveTo(0,i*f),l.lineTo(n.width,i*f),l.stroke();l.globalAlpha=1-r,l.drawImage(t,0,0,c.width,c.height),l.restore()}function f0(n,t){var e=ro(bf(n,{r:0,g:0,b:0,a:255},{r:0,g:0,b:0,a:0}),ut.mask);return t===0?e:Jn(e,t,ut.blurredMask)}function b0(n,t,e,r,a,o){r===void 0&&(r=3),a===void 0&&(a=3),o===void 0&&(o=!1);var i=Jn(t,r,ut.blurred);n.width=i.width,n.height=i.height;var s=n.getContext("2d");if(Array.isArray(e)&&e.length===0)s.drawImage(i,0,0);else{var u=f0(e,a);s.save(),o&&no(n);var c=Ft(t),l=c[0],p=c[1];s.drawImage(t,0,0,p,l),wa(s,u,"destination-in"),wa(s,i,"destination-over"),s.restore()}}function h0(n,t,e){var r=ro(bf(n,{r:0,g:0,b:0,a:0},{r:0,g:0,b:0,a:255},!0,t),ut.mask);return e===0?r:Jn(r,e,ut.blurredMask)}function w0(n,t,e,r,a,o,i){r===void 0&&(r=[0,1]),a===void 0&&(a=3),o===void 0&&(o=3),i===void 0&&(i=!1);var s=Jn(t,a,ut.blurred);n.width=s.width,n.height=s.height;var u=n.getContext("2d");if(Array.isArray(e)&&e.length===0)u.drawImage(s,0,0);else{var c=h0(e,r,o);u.save(),i&&no(n);var l=Ft(t),p=l[0],d=l[1];u.drawImage(t,0,0,d,p),wa(u,c,"destination-in"),wa(u,s,"destination-over"),u.restore()}}var C0=["left_face","right_face","left_upper_arm_front","left_upper_arm_back","right_upper_arm_front","right_upper_arm_back","left_lower_arm_front","left_lower_arm_back","right_lower_arm_front","right_lower_arm_back","left_hand","right_hand","torso_front","torso_back","left_upper_leg_front","left_upper_leg_back","right_upper_leg_front","right_upper_leg_back","left_lower_leg_front","left_lower_leg_back","right_lower_leg_front","right_lower_leg_back","left_feet","right_feet"],N0="2.2.0";export{yf as BodyPix,C0 as PART_CHANNELS,w0 as blurBodyPart,b0 as drawBokehEffect,y0 as drawMask,x0 as drawPixelatedMask,t0 as flipPoseHorizontal,v0 as load,m0 as resizeAndPadTo,An as scaleAndCropToInputTensorShape,g0 as toColoredPartMask,bf as toMask,N0 as version};
//# sourceMappingURL=body-pix.esm.2bb1081b.js.map
