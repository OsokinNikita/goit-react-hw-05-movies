/*! For license information please see 392.5f8b4992.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[392],{378:function(e,t,r){r.d(t,{Z:function(){return a}});r(2791);var n=r(8175),i=r(184),a=function(){return(0,i.jsxs)(n.ZP,{speed:2,width:400,height:250,viewBox:"0 0 400 250",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[(0,i.jsx)("rect",{x:"25",y:"15",rx:"5",ry:"5",width:"220",height:"10"}),(0,i.jsx)("rect",{x:"25",y:"45",rx:"5",ry:"5",width:"220",height:"10"}),(0,i.jsx)("rect",{x:"25",y:"75",rx:"5",ry:"5",width:"220",height:"10"}),(0,i.jsx)("rect",{x:"25",y:"104",rx:"5",ry:"5",width:"220",height:"10"}),(0,i.jsx)("rect",{x:"25",y:"130",rx:"5",ry:"5",width:"220",height:"10"}),(0,i.jsx)("rect",{x:"25",y:"156",rx:"5",ry:"5",width:"220",height:"10"}),(0,i.jsx)("rect",{x:"24",y:"179",rx:"5",ry:"5",width:"220",height:"10"}),(0,i.jsx)("rect",{x:"24",y:"201",rx:"5",ry:"5",width:"220",height:"10"})]})}},6392:function(e,t,r){r.r(t),r.d(t,{default:function(){return D}});var n,i,a,o,c,s,u,l,d,p,f,h=r(5861),x=r(9439),g=r(7757),m=r.n(g),y=r(7689),v=r(2791),b=r(3243),j=r(9417),w=r(378),Z=r(168),k=r(6444),E=r(1087),O=k.ZP.div(n||(n=(0,Z.Z)(["\n  padding: 20px;\n"]))),P=k.ZP.div(i||(i=(0,Z.Z)(["\n  display: flex;\n"]))),C=k.ZP.div(a||(a=(0,Z.Z)(["\n  margin-right: 20px;\n  width: 300px;\n  img {\n    max-width: 100%;\n    height: auto;\n  }\n"]))),_=k.ZP.div(o||(o=(0,Z.Z)(["\n  flex-grow: 1;\n"]))),S=k.ZP.h2(c||(c=(0,Z.Z)(["\n  margin-top: 0;\n  margin-bottom: 10px;\n"]))),U=k.ZP.li(s||(s=(0,Z.Z)(["\n  margin-bottom: 10px;\n  p {\n    margin: 0;\n  }\n"]))),T=(0,k.ZP)(E.rU)(u||(u=(0,Z.Z)(["\n  color: #fff;\n\n  &:hover {\n    text-decoration: underline;\n  }\n"]))),B=k.ZP.button(l||(l=(0,Z.Z)(["\n  display: block;\n  width: fit-content;\n  background-color: aquamarine;\n  font-size: 12px;\n  border-radius: 4px;\n  border: 1px solid tomato;\n  cursor: pointer;\n"]))),M=k.ZP.section(d||(d=(0,Z.Z)(["\n  background-color: #212121;\n  color: #fff;\n  padding: 10px;\n  margin-top: 10px;\n"]))),R=k.ZP.h3(p||(p=(0,Z.Z)(["\n  margin-top: 0;\n  margin-bottom: 20px;\n"]))),q=k.ZP.li(f||(f=(0,Z.Z)(["\n  margin-bottom: 10px;\n"]))),L=r(184),D=function(){var e=(0,y.UO)().id,t=(0,v.useState)(null),r=(0,x.Z)(t,2),n=r[0],i=r[1],a=(0,v.useState)(!1),o=(0,x.Z)(a,2),c=o[0],s=o[1],u=(0,v.useState)(!1),l=(0,x.Z)(u,2),d=l[0],p=l[1],f=(0,y.TH)().state,g=(0,y.s0)();(0,v.useEffect)((function(){var t=function(){var t=(0,h.Z)(m().mark((function t(){var r;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,s(!0),t.next=4,(0,b.TP)(e);case 4:r=t.sent,i(r),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),p(!0);case 11:return t.prev=11,s(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]);if(n){var Z=n.genres,k=n.title,E=n.release_date,D=n.overview,G=n.vote_average,N=n.poster_path,F=N?"".concat("https://image.tmdb.org/t/p/w500/").concat(N):j,K=Math.round(10*G),z=Z.map((function(e){return e.name})).join(" "),A=null===E||void 0===E?void 0:E.slice(0,4);return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(B,{onClick:function(){g((null===f||void 0===f?void 0:f.from)||"/")},children:"Go Back"}),(0,L.jsx)(O,{children:(0,L.jsxs)(P,{children:[(0,L.jsx)(C,{children:(0,L.jsx)("img",{src:F,alt:k})}),(0,L.jsxs)(_,{children:[(0,L.jsxs)(S,{children:[k," ",A&&"(".concat(A,")")]}),(0,L.jsxs)("ul",{children:[(0,L.jsx)(U,{children:K>0&&(0,L.jsxs)("p",{children:["User Score: ",K,"%"]})}),(0,L.jsxs)(U,{children:[(0,L.jsx)("b",{children:"Overview"}),(0,L.jsx)("p",{children:D})]}),(0,L.jsxs)(U,{children:[(0,L.jsx)("b",{children:"Genres"}),(0,L.jsx)("p",{children:z||" - "})]})]})]})]})}),(0,L.jsxs)(M,{children:[(0,L.jsx)(R,{children:" Additional information"}),(0,L.jsx)("div",{children:(0,L.jsxs)("ul",{children:[(0,L.jsx)(q,{children:(0,L.jsx)(T,{to:"cast",state:f,children:"Cast"})}),(0,L.jsx)(q,{children:(0,L.jsx)(T,{to:"reviews",state:f,children:"Reviews"})})]})})]}),(0,L.jsx)(v.Suspense,{fallback:(0,L.jsx)("div",{children:"Loading subpage..."}),children:(0,L.jsx)(y.j3,{})})]})}return(0,L.jsxs)(L.Fragment,{children:[d&&(0,L.jsx)("div",{children:"Error, please reload the page"}),c&&(0,L.jsx)(w.Z,{})]})}},3243:function(e,t,r){r.d(t,{TP:function(){return p},Wf:function(){return l},_L:function(){return s},tx:function(){return g},vQ:function(){return h}});var n=r(5861),i=r(7757),a=r.n(i),o=r(1243),c="5f76dde929e4c69194ca7d9e261d3a85";function s(){return u.apply(this,arguments)}function u(){return(u=(0,n.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("trending/movie/day?api_key=".concat(c));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("search/movie?api_key=".concat(c,"&language=en-US&query=").concat(t,"&page=1"));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("movie/".concat(t,"?api_key=").concat(c,"&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return x.apply(this,arguments)}function x(){return(x=(0,n.Z)(a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("movie/".concat(t,"/credits?api_key=").concat(c));case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return m.apply(this,arguments)}function m(){return(m=(0,n.Z)(a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("movie/".concat(t,"/reviews?api_key=").concat(c));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}o.Z.defaults.baseURL="https://api.themoviedb.org/3"},8175:function(e,t,r){var n=r(2791),i=function(){return i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},i.apply(this,arguments)};var a=function(e){var t=e.animate,r=e.animateBegin,a=e.backgroundColor,o=e.backgroundOpacity,c=e.baseUrl,s=e.children,u=e.foregroundColor,l=e.foregroundOpacity,d=e.gradientRatio,p=e.gradientDirection,f=e.uniqueKey,h=e.interval,x=e.rtl,g=e.speed,m=e.style,y=e.title,v=e.beforeMask,b=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}(e,["animate","animateBegin","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","gradientDirection","uniqueKey","interval","rtl","speed","style","title","beforeMask"]),j=f||Math.random().toString(36).substring(6),w=j+"-diff",Z=j+"-animated-diff",k=j+"-aria",E=x?{transform:"scaleX(-1)"}:null,O="0; "+h+"; 1",P=g+"s",C="top-bottom"===p?"rotate(90)":void 0;return(0,n.createElement)("svg",i({"aria-labelledby":k,role:"img",style:i(i({},m),E)},b),y?(0,n.createElement)("title",{id:k},y):null,v&&(0,n.isValidElement)(v)?v:null,(0,n.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+c+"#"+w+")",style:{fill:"url("+c+"#"+Z+")"}}),(0,n.createElement)("defs",null,(0,n.createElement)("clipPath",{id:w},s),(0,n.createElement)("linearGradient",{id:Z,gradientTransform:C},(0,n.createElement)("stop",{offset:"0%",stopColor:a,stopOpacity:o},t&&(0,n.createElement)("animate",{attributeName:"offset",values:-d+"; "+-d+"; 1",keyTimes:O,dur:P,repeatCount:"indefinite",begin:r})),(0,n.createElement)("stop",{offset:"50%",stopColor:u,stopOpacity:l},t&&(0,n.createElement)("animate",{attributeName:"offset",values:-d/2+"; "+-d/2+"; "+(1+d/2),keyTimes:O,dur:P,repeatCount:"indefinite",begin:r})),(0,n.createElement)("stop",{offset:"100%",stopColor:a,stopOpacity:o},t&&(0,n.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+d),keyTimes:O,dur:P,repeatCount:"indefinite",begin:r})))))};a.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,gradientDirection:"left-right",id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading...",beforeMask:null};var o=function(e){return e.children?(0,n.createElement)(a,i({},e)):(0,n.createElement)(c,i({},e))},c=function(e){return(0,n.createElement)(o,i({viewBox:"0 0 476 124"},e),(0,n.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),(0,n.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};t.ZP=o},9417:function(e,t,r){e.exports=r.p+"static/media/imageComingSoon.7c02dcee67d3c6af8ac5.jpg"}}]);
//# sourceMappingURL=392.5f8b4992.chunk.js.map