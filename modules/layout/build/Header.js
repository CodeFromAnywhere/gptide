"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var i,n=1,t=arguments.length;n<t;n++)for(var r in i=arguments[n])Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);return e},__assign.apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.Header=void 0;var jsx_runtime_1=require("react/jsx-runtime"),authentication_1=require("authentication"),clickable_icon_1=require("clickable-icon"),next_a_link_1=require("next-a-link"),react_with_native_1=require("react-with-native"),store_1=require("./store"),PingApi_1=require("./PingApi"),Header=function(e){var i,n=e.publicBundleConfig,t=(0,store_1.useStore)("menu.isMobileMenuEnabled"),r=t[0],_=t[1];return(0,jsx_runtime_1.jsxs)(react_with_native_1.Div,__assign({className:"dark:bg-gray-800",style:{justifyContent:"space-between",flex:1,display:"flex",flexDirection:"row",alignItems:"center"}},{children:[(0,jsx_runtime_1.jsxs)(react_with_native_1.Div,__assign({className:"flex flex-row items-center"},{children:[(0,jsx_runtime_1.jsx)(next_a_link_1.ALink,__assign({href:"undefined"!=typeof window?location.protocol+"//"+location.host:"#",style:{fontSize:32}},{children:null==n?void 0:n.emoji})),(0,jsx_runtime_1.jsx)(react_with_native_1.P,__assign({className:"font-bold pl-2"},{children:null==n?void 0:n.name}))]})),(0,jsx_runtime_1.jsxs)(react_with_native_1.Div,__assign({className:"flex flex-row items-center"},{children:[(0,jsx_runtime_1.jsxs)(react_with_native_1.Div,{children:[(null===(i=e.publicBundleConfig)||void 0===i?void 0:i.isGitRepoPublic)&&e.publicBundleConfig.gitRepoUrl?(0,jsx_runtime_1.jsx)(react_with_native_1.P,{children:(0,jsx_runtime_1.jsx)(next_a_link_1.ALink,__assign({className:"pr-2",target:"_blank",href:e.publicBundleConfig.gitRepoUrl},{children:"🐈 GitHub"}))}):null,(0,jsx_runtime_1.jsx)(react_with_native_1.P,{children:(0,jsx_runtime_1.jsx)("a",__assign({target:"_blank",href:"https://twitter.com/WKarsens"},{children:"🐤 Twitter"}))})]}),(0,jsx_runtime_1.jsx)(PingApi_1.PingApi,{}),(0,jsx_runtime_1.jsx)(react_with_native_1.Div,__assign({className:"lg:hidden"},{children:(0,jsx_runtime_1.jsx)(clickable_icon_1.ClickableIcon,{emoji:"🔍",onClick:function(){return _(!r)}})})),(0,jsx_runtime_1.jsx)(authentication_1.MeAuthenticationInfo,{})]}))]}))};exports.Header=Header;
//# sourceMappingURL=Header.js.map