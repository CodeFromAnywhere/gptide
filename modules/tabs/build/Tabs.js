"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,i=1,r=arguments.length;i<r;i++)for(var s in t=arguments[i])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},__assign.apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.Tabs=void 0;var jsx_runtime_1=require("react/jsx-runtime"),react_with_native_1=require("react-with-native"),labeled_button_1=require("labeled-button"),store_1=require("./store"),Tabs=function(e){var t=e.title,i=e.tabs,r=(0,store_1.useStore)("tabs.currentTab"),s=r[0],n=r[1],a=i.map((function(e,t){return{emoji:e.emoji,title:e.title,onClick:function(){n(t)},isActive:s===t}})),_=i.find((function(e,t){return s===t}));return(0,jsx_runtime_1.jsxs)(react_with_native_1.Div,__assign({className:"flex flex-col flex-1 p-2 m-2 rounded-xl"},{children:[(0,jsx_runtime_1.jsxs)(react_with_native_1.Div,__assign({className:"flex flex-row justify-between items-center"},{children:[t?(0,jsx_runtime_1.jsx)(react_with_native_1.P,__assign({className:"text-3xl"},{children:t})):null,(0,jsx_runtime_1.jsx)(react_with_native_1.Div,__assign({className:"flex flex-row gap-3"},{children:a.map(labeled_button_1.LabeledButton)}))]})),null==_?void 0:_.renderTab()]}))};exports.Tabs=Tabs;
//# sourceMappingURL=Tabs.js.map