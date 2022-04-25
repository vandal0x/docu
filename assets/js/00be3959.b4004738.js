"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[359],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2744:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={sidebar_position:5},s="Official Links",c={unversionedId:"official-links",id:"official-links",title:"Official Links",description:"Documents are groups of pages connected through:",source:"@site/docs/official-links.md",sourceDirName:".",slug:"/official-links",permalink:"/docs/official-links",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/official-links.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Supported Networks",permalink:"/docs/Ecosystem/networks"},next:{title:"hiring",permalink:"/docs/hiring"}},u={},p=[{value:"Create your first Doc",id:"create-your-first-doc",level:2},{value:"Configure the Sidebar",id:"configure-the-sidebar",level:2}],d={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"official-links"},"Official Links"),(0,i.kt)("p",null,"Documents are ",(0,i.kt)("strong",{parentName:"p"},"groups of pages")," connected through:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a ",(0,i.kt)("strong",{parentName:"li"},"sidebar")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"previous/next navigation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"versioning"))),(0,i.kt)("h2",{id:"create-your-first-doc"},"Create your first Doc"),(0,i.kt)("p",null,"Create a markdown file at ",(0,i.kt)("inlineCode",{parentName:"p"},"docs/hello.md"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="docs/hello.md"',title:'"docs/hello.md"'},"# Hello\n\nThis is my **first Docusaurus document**!\n")),(0,i.kt)("p",null,"A new document is now available at ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/docs/hello"),"."),(0,i.kt)("h2",{id:"configure-the-sidebar"},"Configure the Sidebar"),(0,i.kt)("p",null,"Docusaurus automatically ",(0,i.kt)("strong",{parentName:"p"},"creates a sidebar")," from the ",(0,i.kt)("inlineCode",{parentName:"p"},"docs")," folder."),(0,i.kt)("p",null,"Add metadata to customize the sidebar label and position:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="docs/hello.md" {1-4}',title:'"docs/hello.md"',"{1-4}":!0},"---\nsidebar_label: 'Hi!'\nsidebar_position: 3\n---\n\n# Hello\n\nThis is my **first Docusaurus document**!\n")),(0,i.kt)("p",null,"It is also possible to create your sidebar explicitly in ",(0,i.kt)("inlineCode",{parentName:"p"},"sidebars.js"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'},"module.exports = {\n  tutorialSidebar: [\n    {\n      type: 'category',\n      label: 'Tutorial',\n      // highlight-next-line\n      items: ['hello'],\n    },\n  ],\n};\n")))}f.isMDXComponent=!0}}]);