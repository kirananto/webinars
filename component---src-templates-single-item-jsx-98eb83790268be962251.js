(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"8FPV":function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a("q1tI"),r=a.n(n),l=a("v8IA"),o=(a("1LhQ"),a("8Lv4"),a("pIFo"),a("Kvkj")),i=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{href:"https://forms.gle/kAm6wpjArPmyj7uJ7",target:"__blank",className:"container text-right pt-6 text-white\tabsolute top-0 right-0 mr-8",style:{width:"auto"}},"Subscribe to newsletter"),r.a.createElement("header",{className:"bg-purple-900 pt-32 pb-2"},r.a.createElement("div",{className:"container text-center"},r.a.createElement("h1",{className:"text-3xl text-purple-100 font-bold tracking-wider cursor-pointer",onClick:function(){return window.location.replace("/")}},"Webinar Chief"))),t,r.a.createElement(o.e,null))},c=a("Wbzz"),s=a("ma3e"),m=function(e){var t=e.children,a=e.closeTo,o=e.navigation,i=void 0===o?{}:o,m=i.current,u=void 0===m?-1:m,d=i.items,v=void 0===d?[]:d,f=v[u-1]?v[u-1]:null,h=v[u+1]?v[u+1]:null,g=function(){Object(c.navigate)(a,{state:{noScroll:!0}})},x=function(e){switch(e.keyCode){case 37:f&&Object(c.navigate)(f,{state:{navigation:{current:u-1,items:v},modal:!0}});break;case 39:h&&Object(c.navigate)(h,{state:{navigation:{current:u+1,items:v},modal:!0}});break;case 27:g()}};return Object(n.useEffect)((function(){return window.addEventListener("keydown",x),function(){window.removeEventListener("keydown",x)}})),r.a.createElement("div",{className:"flex relative h-screen"},r.a.createElement("div",{className:"flex flex-wrap items-end md:items-center justify-center mx-auto w-full max-w-screen-xl"},r.a.createElement("div",{className:"order-3 md:order-first pb-2 w-8 mx-2 md:mx-4"},f&&r.a.createElement(l.Link,{asModal:!0,className:"inline-block w-10 h-10 px-2 text-white hover:text-indigo-400",state:{navigation:{current:u-1,items:v}},to:f},r.a.createElement(s.a,{className:"w-full h-full fill-current transition-colors duration-200"}))),r.a.createElement("div",{className:"w-full mt-12 md:mt-0 mx-3 md:mx-0 md:flex-1 bg-white shadow-lg rounded-md overflow-hidden"},t),r.a.createElement("div",{className:"order-last pb-2 w-8 mx-2 md:mx-4"},h&&r.a.createElement(l.Link,{asModal:!0,className:"inline-block w-10 h-10 px-2 text-white hover:text-indigo-400",state:{navigation:{current:u+1,items:v}},to:h},r.a.createElement(s.b,{className:"w-full h-full fill-current transition-colors duration-200"})))),r.a.createElement("button",{className:"absolute top-0 right-0 m-3 lg:m-6 focus:outline-none",onClick:g},r.a.createElement(s.c,{className:"w-8 h-8 fill-current text-white hover:text-indigo-400 transition-colors duration-200"})))},u=function(e){var t=e.children,a=e.navigation;return r.a.createElement(l.ModalRoutingContext.Consumer,null,(function(e){var n=e.modal,l=e.closeTo;return n?r.a.createElement(m,{closeTo:l,navigation:a},t):r.a.createElement(i,null,t)}))}},Lnxd:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));a("bWfx"),a("ioFf"),a("V+eJ"),a("91GP");var n=a("q1tI"),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=n.createContext&&n.createContext(r),o=function(){return(o=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},i=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&(a[n[r]]=e[n[r]])}return a};function c(e){return function(t){return n.createElement(s,o({attr:o({},e.attr)},t),function e(t){return t&&t.map((function(t,a){return n.createElement(t.tag,o({key:a},t.attr),e(t.child))}))}(e.child))}}function s(e){var t=function(t){var a,r=e.size||t.size||"1em";t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className);var l=e.attr,c=e.title,s=i(e,["attr","title"]);return n.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,l,s,{className:a,style:o({color:e.color||t.color},t.style,e.style),height:r,width:r,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),e.children)};return void 0!==l?n.createElement(l.Consumer,null,(function(e){return t(e)})):t(r)}},voWF:function(e,t,a){"use strict";a.r(t),a.d(t,"durationFn",(function(){return s})),a.d(t,"query",(function(){return m}));a("f3/d"),a("a1Th"),a("Btvt");var n=a("q1tI"),r=a.n(n),l=a("Kvkj"),o=a("v8IA");var i=a("8FPV"),c=a("sWYD"),s=function(e){var t=e;if(!t)return"00:00";var a=Math.abs(Math.floor(t/60)%60).toString(),n=Math.abs(Math.floor(t/60/60)).toString();return(n.length<2?0+n:n)+":"+(a.length<2?0+a:a)+" Hours"},m=(t.default=function(e){var t=e.data,a=e.location,n=t.item.data,m=n.host,u=n.name,d=n.type,v=n.timetz,f=n.date,h=n.duration,g=n.speakers,x=n.summary,w=n.url,p=a.state?a.state.navigation:null,E=function(){var e=r.a.useContext(o.ModalRoutingContext);if(void 0===e)throw new Error("useModal must be used within an ModalRoutingContext.Provider");return e}().modal;return r.a.createElement(i.a,{navigation:p},r.a.createElement(l.g,{title:u,description:x}),r.a.createElement("article",{className:E&&"max-h-80vh md:max-h-90vh overflow-auto"},r.a.createElement("div",{className:E?"p-8 lg:p-12":"container py-8"},r.a.createElement("h1",{className:"text-2xl max-w-2lg lg:text-3xl text-purple-700 font-bold leading-tight"},u),r.a.createElement("p",{className:"text-base max-w-2lg lg:text-lg text-indigo-800 font-medium mb-8 mt-4"},x),r.a.createElement("h4",{className:"text-indigo-800 uppercase text-xxs tracking-wide font-medium pb-px"},"Speakers"),r.a.createElement("p",{className:"text-base text-purple-900 mb-5 font-medium word-break"},g),r.a.createElement("div",{className:"flex flex-wrap pl-0"},r.a.createElement("div",{className:"w-full lg:w-4/5 grid grid-cols-2"},r.a.createElement("div",null,r.a.createElement(l.c,{label:"Host",value:m})),r.a.createElement("div",null,r.a.createElement(l.c,{label:"Url",value:w})),r.a.createElement("div",null,r.a.createElement(l.c,{label:"Pricing",value:d})),r.a.createElement("div",null,r.a.createElement(l.c,{label:"Duration",value:s(h)})),r.a.createElement("div",null,r.a.createElement(l.c,{label:"Date",value:c.a(new Date(f),"yyyy-MM-dd")+" "+v+" "})))))))},"1956107215")}}]);
//# sourceMappingURL=component---src-templates-single-item-jsx-98eb83790268be962251.js.map