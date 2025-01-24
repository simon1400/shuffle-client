"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[650],{8599:(e,t,l)=>{l.d(t,{ArticleShort:()=>c});var n=l(5155),a=l(8979),r=l(5565),s=l(6911),i=l(9335);let c=e=>{var t,l;let{data:c,reverse:d,subHead:o}=e,x=(null===(t=c.shortImage)||void 0===t?void 0:t.url)||(null===(l=c.image)||void 0===l?void 0:l.url)||"";return(0,n.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-7.5 md:gap-12.5 mb-[70px]",children:[(0,n.jsx)("div",{className:d?"md:order-last":"",children:(0,n.jsx)("div",{className:"pt-[100%] relative overflow-hidden rounded-lg bg-lightAccent",children:(0,n.jsx)(r.default,{src:x,className:"object-cover object-center",fill:!0,alt:c.title})})}),(0,n.jsx)("div",{className:"flex items-center",children:(0,n.jsxs)("div",{children:[!!(null==o?void 0:o.length)&&(0,n.jsx)("label",{className:"block text-accent text-3xl md:text-6xl mb-5",children:o}),(0,n.jsxs)("h2",{className:"text-5xl md:text-8xl mb-5 md:mb-17 md:flex items-end gap-2.5",children:[(0,n.jsx)("span",{className:"block",children:c.title}),!!c.label&&c.label.map(e=>(0,n.jsx)(i.J,{big:!0,data:e},e.text))]}),(0,n.jsx)("div",{className:"text-sm md:text-3xl mb-7.5 md:mb-17 opacity-70",children:(0,a.Ay)(c.shortContent)}),(0,n.jsx)(s.Button,{text:"discover",href:"/article/".concat(c.slug)})]})})]})}},6911:(e,t,l)=>{l.d(t,{Button:()=>i});var n=l(5155),a=l(3463),r=l(8173),s=l.n(r);let i=e=>{let{text:t,href:l="/",className:r="",inverse:i=!1}=e,c=(0,a.A)({"bg-accent hover:bg-cta":!i,"bg-primary hover:bg-lightPrimary":i});return(0,n.jsx)(s(),{className:"inline-block rounded-base ".concat(c," py-3.5 px-6.5 md:py-4 md:px-10.5 duration-200 text-white text-xs font-bold md:text-lg ").concat(r),href:l,children:t})}},2548:(e,t,l)=>{l.d(t,{m:()=>r});var n=l(5155),a=l(3463);let r=e=>{let{children:t,size:l}=e,r=(0,a.A)({"max-w-[1441px]":"lg"===l,"max-w-[860px]":"md"===l,"max-w-[700px]":"sm"===l});return(0,n.jsx)("div",{className:"container mx-auto ".concat(r," px-4"),children:t})}},3503:(e,t,l)=>{l.d(t,{DynamicContent:()=>g});var n=l(5155),a=l(8979),r=l(8599),s=l(2548),i=l(2809),c=l(2115),d=function(){return(d=Object.assign||function(e){for(var t,l=1,n=arguments.length;l<n;l++)for(var a in t=arguments[l])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},o=function(e,t){var l={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(l[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)0>t.indexOf(n[a])&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(l[n[a]]=e[n[a]]);return l},x=function(e){var t=e.children,l=e.width,n=void 0===l?"200px":l,a=e.duration,r=e.toRight,s=void 0!==r&&r,i=e.pauseOnHover,d=void 0!==i&&i,o=e.blurBorders,x=e.blurBorderColor,m=void 0===x?"#fff":x,h=(0,c.useState)(""),u=h[0],p=h[1],v=function(){for(var e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",l=0;l<10;l++)e+=t.charAt(Math.floor(Math.random()*t.length));return e};(0,c.useEffect)(function(){p(v())},[]),(0,c.useEffect)(function(){if(t.length){var e="calc(".concat(s?"":"-").concat(n," * ").concat(t.length,")"),l=document.createElement("style");l.type="text/css";var a="\n      @keyframes slider_logo_slider_".concat(u," {\n        0% {\n          transform: translateX(0);\n        }\n        100% {\n          transform: translateX(").concat(e,");\n        }\n      }");return l.innerHTML=a,document.getElementsByTagName("head")[0].appendChild(l),function(){document.getElementsByTagName("head")[0].removeChild(l)}}},[s,n,t,u]);var g=function(){var e=document.getElementById("slider_".concat(u));e&&(e.style.animationPlayState="paused")},j=function(){var e=document.getElementById("slider_".concat(u));e&&(e.style.animationPlayState="running")};return c.createElement("div",{style:{position:"relative"}},c.createElement("div",{style:{width:"100%",height:"auto",margin:"auto",overflow:"hidden",position:"relative"},onMouseEnter:function(){return d&&g()},onMouseLeave:function(){return d&&j()},id:"slider_wrapper_".concat(u)},c.createElement("div",{style:{display:"flex",animation:"slider_logo_slider_".concat(u," ").concat(void 0===a?40:a,"s linear infinite"),width:"calc(".concat(n," * ").concat(3*t.length,")")},id:"slider_".concat(u)},t.map(function(e,t){return c.createElement(c.Fragment,{key:t},c.cloneElement(e,{width:n}))}),t.map(function(e,t){return c.createElement(c.Fragment,{key:t},c.cloneElement(e,{width:n}))}),t.map(function(e,t){return c.createElement(c.Fragment,{key:t},c.cloneElement(e,{width:n}))}))),void 0!==o&&o&&c.createElement(c.Fragment,null,c.createElement("div",{style:{position:"absolute",right:0,top:0,width:"180px",transform:"rotate(180deg)",zIndex:10,height:"105%",background:"linear-gradient(90deg, ".concat(m," 10%, rgba(255, 255, 255, 0) 80%)")}}),c.createElement("div",{style:{position:"absolute",left:0,top:0,width:"180px",zIndex:10,height:"120%",background:"linear-gradient(90deg, ".concat(m," 10%, rgba(255, 255, 255, 0) 80%)")}})))};x.Slide=function(e){var t=e.children,l=e.width,n=o(e,["children","width"]);return c.createElement("div",d({style:{width:void 0===l?"200px":l,alignItems:"center",display:"flex"}},n),t)};let m=e=>{let{data:t}=e;return(0,n.jsx)("section",{className:"py-3 md:py-6",children:(0,n.jsx)(x,{width:"252px",duration:20,pauseOnHover:!0,blurBorders:!1,blurBorderColor:"#fff",children:t.map(e=>(0,n.jsx)(x.Slide,{children:(0,n.jsx)("img",{className:"mx-auto max-w-[165px]",src:e.url,alt:"Logo partners"})},e.url))})})};var h=l(5170),u=l(9804),p=l(4380);let v=e=>{let{data:t}=e;return(0,n.jsx)("section",{className:"py-[80px] md:py-[132px]",children:(0,n.jsxs)(s.m,{size:"sm",children:[(0,n.jsx)("div",{className:"text-xl md:text-6xl mb-7.5 md:mb-10 opacity-70",children:(0,a.Ay)(t.text)}),!!t.cta&&(0,n.jsx)(p.u,{text:t.cta.text,href:t.cta.link})]})})},g=e=>{let{data:t}=e;return(0,n.jsx)(n.Fragment,{children:t.map((e,t)=>{var l,c,d,o,x,p;return"content.cta-block"===e.__component?(0,n.jsx)(v,{data:e},e.__component+t):"content.short-artciles"===e.__component?(0,n.jsx)("section",{children:(0,n.jsx)(s.m,{size:"lg",children:e.articles.map((e,t)=>(0,n.jsx)(r.ArticleShort,{data:e,reverse:!!(t%2)},e.title+t))})},e.__component+t):"content.logo-carousel"===e.__component?(0,n.jsx)(m,{data:e.logo},e.__component+t):"content.content-item"===e.__component?(0,n.jsxs)("section",{className:"py-[160px]",children:[(!!(null===(l=e.title)||void 0===l?void 0:l.length)||!!(null===(c=e.contentText)||void 0===c?void 0:c.length))&&(0,n.jsxs)(s.m,{size:"sm",children:[!!(null===(d=e.title)||void 0===d?void 0:d.length)&&(0,n.jsx)("h2",{className:"text-8xl mb-17",children:e.title}),!!(null===(o=e.contentText)||void 0===o?void 0:o.length)&&(0,n.jsx)("div",{className:"text-sm md:text-3xl mb-10 opacity-70",children:(0,a.Ay)(e.contentText)})]}),!!(null===(x=e.galery)||void 0===x?void 0:x.length)&&(0,n.jsx)(i.Galery,{data:e.galery})]},e.__component+t):"content.description-block"===e.__component?(0,n.jsx)("section",{className:"pt-[80px] md:pt-[132px]",children:(0,n.jsx)(s.m,{size:"lg",children:(0,n.jsx)(u.Slider,{data:e.block})})},e.__component+t):"content.compare-table"===e.__component?(0,n.jsx)("section",{className:"py-17",children:(0,n.jsxs)(s.m,{size:"lg",children:[(null===(p=e.title)||void 0===p?void 0:p.length)&&(0,n.jsx)("h2",{className:"text-8xl mb-13 text-left",children:e.title}),(0,n.jsx)(h.Products,{data:e.products})]})},e.__component+t):null})})}},2809:(e,t,l)=>{l.d(t,{Galery:()=>i});var n=l(5155),a=l(3463),r=l(5565),s=l(2548);let i=e=>{let{data:t}=e,l=(0,a.A)({"grid-cols-3":t.length>=3},{"grid-cols-2":2===t.length});return(0,n.jsx)("section",{children:(0,n.jsx)(s.m,{size:"lg",children:(0,n.jsx)("div",{className:"grid ".concat(l," gap-4 md:gap-12.5"),children:t.map(e=>(0,n.jsx)("div",{className:"pt-[100%] relative overflow-hidden rounded-big",children:(0,n.jsx)(r.default,{src:e.url,className:"object-cover object-center",fill:!0,alt:e.url})},e.url))})})})}},9335:(e,t,l)=>{l.d(t,{J:()=>r});var n=l(5155),a=l(3463);let r=e=>{let{big:t=!1,data:l}=e,r=(0,a.A)({"px-1.5 md:px-2.5":!t,"px-3.5 md:px-5 md:py-3.5":t});return(0,n.jsx)("label",{className:"inline-block uppercase text-[12px] md:text-sm font-bold rounded-base ".concat(r," ").concat(l.invertText?"text-primary":"text-white"),style:{backgroundColor:l.hexColor},children:l.text})}},4380:(e,t,l)=>{l.d(t,{u:()=>i});var n=l(5155),a=l(8173),r=l.n(a);let s=e=>{let{className:t=""}=e;return(0,n.jsxs)("svg",{className:t,xmlns:"http://www.w3.org/2000/svg",width:"28",height:"11",viewBox:"0 0 28 11",children:[(0,n.jsx)("defs",{children:(0,n.jsx)("clipPath",{id:"b",children:(0,n.jsx)("rect",{width:"28",height:"11"})})}),(0,n.jsx)("g",{id:"a",clipPath:"url(#b)",children:(0,n.jsxs)("g",{transform:"translate(-820.94 -1454.5)",children:[(0,n.jsx)("rect",{width:"20",height:"2",transform:"translate(822 1459)",fill:"#b046f1"}),(0,n.jsx)("path",{d:"M0-4,10.544.036H0Z",transform:"translate(837.337 1459.964)",fill:"#b046f1"}),(0,n.jsx)("rect",{width:"20",height:"2",transform:"translate(842 1461) rotate(180)",fill:"#b046f1"}),(0,n.jsx)("path",{d:"M10.544,0,0,4.036H10.544Z",transform:"translate(847.881 1464.036) rotate(180)",fill:"#b046f1"})]})})]})},i=e=>{let{text:t,href:l="/"}=e;return(0,n.jsxs)(r(),{className:"text-accent font-bold text-xs md:text-lg hover:text-cta inline-flex items-center gap-5 group ",href:l,children:[(0,n.jsx)("span",{children:t}),(0,n.jsx)("span",{className:"duration-300 group-hover:translate-x-2",children:(0,n.jsx)(s,{className:""})})]})}},5170:(e,t,l)=>{l.d(t,{Products:()=>g});var n=l(5155),a=l(2115),r=l(5565),s=l(8190);let i=()=>(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"28.603",height:"28.603",viewBox:"0 0 28.603 28.603",children:(0,n.jsx)("path",{id:"circle-check-thin",d:"M14.3.894A13.407,13.407,0,1,1,.894,14.3,13.407,13.407,0,0,1,14.3.894Zm0,27.709A14.3,14.3,0,1,0,0,14.3,14.3,14.3,0,0,0,14.3,28.6Zm5.681-17.558a.446.446,0,1,0-.631-.631l-6.838,6.832L9.257,13.988a.446.446,0,1,0-.631.631L12.2,18.2a.448.448,0,0,0,.631,0l7.151-7.151Z",fill:"#46f184"})}),c=()=>(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"28.603",height:"28.603",viewBox:"0 0 28.603 28.603",children:(0,n.jsx)("path",{id:"circle-xmark-thin",d:"M14.3.894A13.407,13.407,0,1,1,.894,14.3,13.407,13.407,0,0,1,14.3.894Zm0,27.709A14.3,14.3,0,1,0,0,14.3,14.3,14.3,0,0,0,14.3,28.6ZM9.961,9.961a.448.448,0,0,0,0,.631L13.67,14.3l-3.7,3.7a.446.446,0,1,0,.631.631l3.7-3.7,3.7,3.7a.446.446,0,0,0,.631-.631l-3.7-3.7,3.7-3.7a.446.446,0,0,0-.631-.631l-3.7,3.7-3.7-3.7a.448.448,0,0,0-.631,0Z",fill:"#f146ad"})});var d=l(6911),o=l(9335);let x=e=>{var t,l;let{data:a}=e;return(0,n.jsxs)("div",{className:"text-center pb-11 w-full md:mx-6",children:[(0,n.jsx)(r.default,{className:"mx-auto mb-2.5",src:(null===(t=a.shortIcon)||void 0===t?void 0:t.url)||"",width:160,height:115,alt:a.title}),(0,n.jsx)("h3",{className:"text-sm font-bold md:text-lg mb-0.5",children:a.title}),(0,n.jsx)("span",{className:"block text-base1 text-accent mb-5",children:a.description}),!!(null===(l=a.label)||void 0===l?void 0:l.length)&&a.label.map(e=>(0,n.jsx)(o.J,{data:e},e.text))]})},m=e=>{let{content:t}=e;return(0,n.jsx)("div",{className:"flex items-center md:border-b-[1.5px] md:border-borderAccent py-2.5 md:py-4 md:mx-6 w-full",children:(0,n.jsx)("span",{className:"text-base md:text-xxl font-medium",children:t})})},h=e=>{let{content:t}=e;return(0,n.jsx)("div",{className:"flex items-center md:border-b-[1.5px] md:border-borderAccent py-2.5 md:py-4 md:mx-6 text-right md:text-center w-full",children:(0,n.jsxs)("span",{className:"inline-block text-base md:text-2xl ml-auto md:mx-auto",children:[!0===t&&(0,n.jsx)(i,{}),!1===t&&(0,n.jsx)(c,{}),"string"==typeof t&&t]})})},u=e=>{let{children:t}=e;return(0,n.jsx)("div",{className:"grid grid-cols-4",children:t})},p=e=>{let{data:t,parameters:l}=e;return(0,n.jsxs)("div",{children:[(0,n.jsxs)(u,{children:[(0,n.jsx)("div",{}),t.map(e=>(0,n.jsx)(x,{data:e},e.title))]}),Object.keys(l).map(e=>(0,n.jsxs)(u,{children:[(0,n.jsx)(m,{content:e}),l[e].map((t,l)=>(0,n.jsx)(h,{content:t},e+t+l))]},e)),(0,n.jsxs)(u,{children:[(0,n.jsx)("div",{}),t.map(e=>(0,n.jsx)("div",{className:"text-center md:pt-10 pt-2.5 md:mx-6 w-full",children:!!e.slug.length&&(0,n.jsx)(d.Button,{text:"detail",href:"/".concat(e.slug)})},"".concat(e.title,"_button")))]})]})},v=e=>{let{data:t,parameters:l,idx:a}=e;return(0,n.jsxs)("div",{children:[(0,n.jsx)(x,{data:t}),Object.keys(l).map(e=>(0,n.jsxs)("div",{className:"flex justify-between border-b-[1.5px] border-borderAccent",children:[(0,n.jsx)(m,{content:e}),(0,n.jsx)(h,{content:l[e][a]})]},e)),!!t.slug.length&&(0,n.jsx)("div",{className:"text-center pt-10",children:(0,n.jsx)(d.Button,{text:"discorver products",href:"/".concat(t.slug)})})]})},g=e=>{let{data:t}=e,l=(0,s.Ub)({query:"(min-width: 1024px)"}),[r,i]=(0,a.useState)({});return(!function(e){let t=(0,a.useRef)(!1);(0,a.useEffect)(()=>{t.current||(t.current=!0,e())},[])}(async()=>{let e=[];t.map(t=>{var l;return null===(l=t.Parameters)||void 0===l||l.map(t=>(e.push(t.parameter.title),null)),null});let l=[...new Set(e)],n={};for(let e=0;e<l.length;e++)n["".concat(l[e])]=[],t.map((t,a)=>{var r;let s=null===(r=t.Parameters)||void 0===r?void 0:r.find(t=>t.parameter.title===l[e]);return n["".concat(l[e])].push((null==s?void 0:s.text)||(null==s?void 0:s.has)),null});i(n)}),l)?(0,n.jsx)(p,{data:t,parameters:r}):(0,n.jsx)(n.Fragment,{children:t.map((e,t)=>(0,n.jsx)(v,{data:e,parameters:r,idx:t},e.title))})}},9804:(e,t,l)=>{l.d(t,{Slider:()=>x});var n=l(5155),a=l(8190),r=l(5672),s=l(8979),i=l(5565),c=l(8173),d=l.n(c);let o=e=>{let{data:t}=e,l=(0,a.Ub)({query:"(min-width: 1024px)"});return(0,n.jsxs)("div",{className:"px-7.5 py-8.5 md:p-12.5 bg-lightDark rounded-big",children:[(null==t?void 0:t.icon)&&(0,n.jsx)(i.default,{className:"mb-6 md:mb-11",src:t.icon.url,width:l?78:59,height:l?68:52,alt:"asd"}),(0,n.jsx)("div",{className:"text-sm md:text-3xl opacity-70 mb-6.5 md:mb-12.5",children:(0,s.Ay)(t.contentText)}),t.cta&&(0,n.jsx)(d(),{className:"text-accent text-xs font-bold md:text-lg",href:t.cta.link,children:t.cta.text})]})},x=e=>{let{data:t}=e,l=(0,a.Ub)({query:"(min-width: 1024px)"});return(0,n.jsx)(r.RC,{spaceBetween:l?50:20,style:{overflow:"visible"},slidesPerView:l?3:1.5,children:t.map((e,t)=>(0,n.jsx)(r.qr,{children:(0,n.jsx)(o,{data:e})},t))})}},9874:(e,t,l)=>{l.d(t,{G:()=>c});var n=l(5155),a=l(5565),r=l(8173),s=l.n(r),i=l(9335);let c=e=>{let{data:t}=e;return(0,n.jsxs)(s(),{href:t.slug,className:"max-w-[128px] md:max-w-[224px] block relative rounded-big hover:bg-lightDark duration-200 text-center md:px-8 p-3.5 md:pb-8 md:pt-10",children:[(0,n.jsx)(a.default,{className:"ml-auto mr-auto mb-2.5",src:t.shortIcon.url,width:160,height:115,alt:t.title}),(0,n.jsx)("h4",{className:"text-xs font-bold md:text-lg",children:t.title}),(0,n.jsx)("span",{className:"text-accent text-[12px] md:text-base1 block mb-2.5",children:t.description}),t.label&&t.label.map(e=>(0,n.jsx)(i.J,{data:e},e.text))]})}},368:(e,t,l)=>{l.d(t,{Top:()=>m});var n=l(5155),a=l(8979),r=l(5565),s=l(8190),i=l(5672),c=l(6911),d=l(2548),o=l(9804),x=l(9874);let m=e=>{let{title:t,items:l,content:m="",bigContent:h="",label:u="",blocks:p,button:v=!1}=e,g=(0,s.Ub)({query:"(min-width: 1024px)"});return(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:"absolute w-full top-0 left-0 right-0 -z-10",children:[(0,n.jsx)(r.default,{src:"/assets/top-background.svg",fill:!0,alt:"Top background squares"}),(0,n.jsx)("video",{className:"w-full",autoPlay:!0,muted:!0,loop:!0,id:"animationVideo",children:(0,n.jsx)("source",{src:"/assets/animation.mp4",type:"video/mp4"})}),(0,n.jsx)(r.default,{src:"/assets/shadow-gradient.svg",fill:!0,alt:"Top background squares"})]}),(0,n.jsx)(d.m,{size:"lg",children:(0,n.jsxs)("div",{className:"pt-[220px] md:pt-[341px] pb-8.5 relative z-20",children:[(0,n.jsx)("h1",{className:"text-6xl font-medium md:text-big mb-7.5",children:t}),!!(null==u?void 0:u.length)&&(0,n.jsx)("label",{className:"block text-accent text-6xl mb-[200px]",children:u}),!!(null==h?void 0:h.length)&&(0,n.jsx)("div",{className:"text-xl md:text-6xl mb-10 max-w-[1200px]",children:(0,a.Ay)(h)}),!!(null==m?void 0:m.length)&&(0,n.jsx)("div",{className:"text-6xl mb-10 max-w-[700px]",children:(0,a.Ay)(m)}),v&&(0,n.jsx)(c.Button,{text:"discover products"}),!!(null==l?void 0:l.length)&&(0,n.jsx)("div",{className:"mt-[76px] md:mt-[200px]",children:(0,n.jsx)(i.RC,{spaceBetween:0,style:{overflow:"visible"},slidesPerView:g?6:2.5,children:l.map(e=>(0,n.jsx)(i.qr,{children:(0,n.jsx)(x.G,{data:e})},e.title))})}),p&&(0,n.jsx)(o.Slider,{data:p})]})})]})}}}]);