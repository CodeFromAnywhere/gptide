"use strict";var __awaiter=this&&this.__awaiter||function(e,r,t,n){return new(t||(t=Promise))((function(a,o){function i(e){try{l(n.next(e))}catch(e){o(e)}}function u(e){try{l(n.throw(e))}catch(e){o(e)}}function l(e){var r;e.done?a(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(i,u)}l((n=n.apply(e,r||[])).next())}))},__generator=this&&this.__generator||function(e,r){var t,n,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,n=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=r.call(e,i)}catch(e){o=[6,e],n=0}finally{t=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}},__values=this&&this.__values||function(e){var r="function"==typeof Symbol&&Symbol.iterator,t=r&&e[r],n=0;if(t)return t.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")},__read=this&&this.__read||function(e,r){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var n,a,o=t.call(e),i=[];try{for(;(void 0===r||r-- >0)&&!(n=o.next()).done;)i.push(n.value)}catch(e){a={error:e}}finally{try{n&&!n.done&&(t=o.return)&&t.call(o)}finally{if(a)throw a.error}}return i};Object.defineProperty(exports,"__esModule",{value:!0}),exports.mapMany=void 0;var mapItem=function(e,r,t,n){return __awaiter(void 0,void 0,void 0,(function(){var a;return __generator(this,(function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),a={status:"fulfilled"},[4/*yield*/,e(r,t,n)];case 1:return[2/*return*/,(a.value=o.sent(),a)];case 2:return[2/*return*/,{status:"rejected",reason:o.sent()}];case 3:return[2/*return*/]}}))}))};function worker(e,r,t,n){return __awaiter(this,void 0,void 0,(function(){var e,a,o,i,u,l,s,c,f,h;return __generator(this,(function(y){switch(y.label){case 0:y.trys.push([0,5,6,7]),e=__values(r),a=e.next(),y.label=1;case 1:return a.done?[3/*break*/,4]:(o=__read(a.value,3),i=o[0],u=o[1],l=o[2],[4/*yield*/,mapItem(t,i,u,l)]);case 2:
// NB: if mappedResult gets rejected, change nothing!
"fulfilled"===(s=y.sent()).status&&(n[u]=s.value),y.label=3;case 3:return a=e.next(),[3/*break*/,1];case 4:return[3/*break*/,7];case 5:return c=y.sent(),f={error:c},[3/*break*/,7];case 6:try{a&&!a.done&&(h=e.return)&&h.call(e)}finally{if(f)throw f.error}return[7/*endfinally*/];case 7:return[2/*return*/]}}))}))}
/**
 * NB: Do I really need this? Would be nice not to use generators.
 */function arrayGenerator(e){var r,t;return __generator(this,(function(n){switch(n.label){case 0:r=0,n.label=1;case 1:return r<e.length?(t=e[r],[4/*yield*/,[t,r,e]]):[3/*break*/,4];case 2:n.sent(),n.label=3;case 3:return r++,[3/*break*/,1];case 4:return[2/*return*/]}}))}
/**
 Lets you map over any array with a async function while setting a max. concurrency

 Taken and improved from https://codeburst.io/async-map-with-limited-parallelism-in-node-js-2b91bd47af70
 */var mapMany=function(e,r,
/**
 * Limit of amount of items at the same time
 */
t){return __awaiter(void 0,void 0,void 0,(function(){var n,a,o,i,u;return __generator(this,(function(l){switch(l.label){case 0:if(n=[],0===e.length)return[2/*return*/,n];for(a=arrayGenerator(e),o=Math.min(t||e.length,e.length),i=new Array(o),u=0;u<o;u++)i.push(worker(u,a,r,n));
// console.log(`Initialized ${limit} workers`);
return[4/*yield*/,Promise.all(i)];case 1:
// console.log(`Initialized ${limit} workers`);
return l.sent(),[2/*return*/,n]}}))}))};exports.mapMany=mapMany;
//# sourceMappingURL=mapMany.js.map