"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},__assign.apply(this,arguments)},__awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(a,i){function o(e){try{c(r.next(e))}catch(e){i(e)}}function u(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,u)}c((r=r.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var n,r,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(a=2&i[0]?r.return:i[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,i[1])).done)return a;switch(r=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,r=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(a=o.trys,(a=a.length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){o.label=i[1];break}if(6===i[0]&&o.label<a[1]){o.label=a[1],a=i;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(i);break}a[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(e){i=[6,e],r=0}finally{n=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.ContextMenuItemComponent=void 0;var jsx_runtime_1=require("react/jsx-runtime"),react_1=require("react"),react_with_native_1=require("react-with-native"),fancy_loader_1=require("fancy-loader"),ContextMenuItemComponent=function(e){var t=e.item,n=e.id,r=e.onClose,a=e.itemClassName,i=(0,react_1.useState)(!1),o=i[0],u=i[1];return(0,jsx_runtime_1.jsxs)(react_with_native_1.P,__assign({onClick:function(){return __awaiter(void 0,void 0,void 0,(function(){return __generator(this,(function(e){switch(e.label){case 0:return u(!0),[4/*yield*/,t.onClick(n)];case 1:return e.sent(),u(!1),r(),[2/*return*/]}}))}))},className:a||"select-none dark:text-black cursor-pointer lg:hover:bg-blue-300 py-2 px-4 flex flex-row"},{children:[o?(0,jsx_runtime_1.jsx)(react_with_native_1.Span,{children:(0,jsx_runtime_1.jsx)(fancy_loader_1.FancyLoader,{})}):null," ",(0,jsx_runtime_1.jsx)(react_with_native_1.Span,{children:t.getTitle(n)})]}))};exports.ContextMenuItemComponent=ContextMenuItemComponent;
//# sourceMappingURL=ContextMenuItemComponent.js.map