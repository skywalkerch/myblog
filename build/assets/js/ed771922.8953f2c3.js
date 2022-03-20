"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[308],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),u=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),k=u(n),d=r,f=k["".concat(m,".").concat(d)]||k[d]||p[d]||l;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=k;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},5493:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return m},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=["components"],i={title:"make\u4e0eautomake"},m="make\u6982\u8ff0",u={unversionedId:"Lang/C++/make\u4e0eautomake",id:"Lang/C++/make\u4e0eautomake",title:"make\u4e0eautomake",description:"make\u5de5\u7a0b\u7ba1\u7406\u5668\u8d77\u5230\u4e86\u81ea\u52a8\u7f16\u8bd1\u7684\u4f5c\u7528\uff0c\u8fd9\u91cc\u7684\u81ea\u52a8\u662f\u5b83\u80fd\u81ea\u52a8\u6839\u636e\u6587\u4ef6\u65f6\u95f4\u6233\u53d1\u73b0\u90a3\u4e2a\u6587\u4ef6\u66f4\u65b0\u8fc7\uff0c\u8fd9\u6837\u4fbf\u5927\u5927\u51cf\u5c11\u4e86\u7f16\u8bd1\u5de5\u4f5c\u91cf",source:"@site/docs\\Lang\\C++\\make\u4e0eautomake.md",sourceDirName:"Lang/C++",slug:"/Lang/C++/make\u4e0eautomake",permalink:"/myblog/docs/Lang/C++/make\u4e0eautomake",editUrl:"https://github.com/skywalkerch/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Lang/C++/make\u4e0eautomake.md",tags:[],version:"current",frontMatter:{title:"make\u4e0eautomake"},sidebar:"tutorialSidebar",previous:{title:"const\u4e0e\u6307\u9488",permalink:"/myblog/docs/Lang/C++/const\u4e0e\u6307\u9488"},next:{title:"\u9759\u6001\u5e93\u4e0e\u52a8\u6001\u5e93",permalink:"/myblog/docs/Lang/C++/\u9759\u6001\u5e93\u4e0e\u52a8\u6001\u5e93"}},c={},p=[{value:"\u89c4\u5219\u8bed\u6cd5",id:"\u89c4\u5219\u8bed\u6cd5",level:2},{value:"\u4f7f\u7528makefile",id:"\u4f7f\u7528makefile",level:2},{value:"makefile\u6587\u4ef6\u4e2d\u7684\u53d8\u91cf",id:"makefile\u6587\u4ef6\u4e2d\u7684\u53d8\u91cf",level:2},{value:"makefile\u4e2d\u5e38\u7528\u9ed8\u8ba4\u53d8\u91cf",id:"makefile\u4e2d\u5e38\u7528\u9ed8\u8ba4\u53d8\u91cf",level:2}],k={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"make\u6982\u8ff0"},"make\u6982\u8ff0"),(0,l.kt)("p",null,"make\u5de5\u7a0b\u7ba1\u7406\u5668\u8d77\u5230\u4e86\u81ea\u52a8\u7f16\u8bd1\u7684\u4f5c\u7528\uff0c\u8fd9\u91cc\u7684\u81ea\u52a8\u662f\u5b83\u80fd\u81ea\u52a8\u6839\u636e\u6587\u4ef6\u65f6\u95f4\u6233\u53d1\u73b0\u90a3\u4e2a\u6587\u4ef6\u66f4\u65b0\u8fc7\uff0c\u8fd9\u6837\u4fbf\u5927\u5927\u51cf\u5c11\u4e86\u7f16\u8bd1\u5de5\u4f5c\u91cf"),(0,l.kt)("h1",{id:"makefile\u8bed\u6cd5"},"makefile\u8bed\u6cd5"),(0,l.kt)("h2",{id:"\u89c4\u5219\u8bed\u6cd5"},"\u89c4\u5219\u8bed\u6cd5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-makefile"},"\u76ee\u6807\u6587\u4ef6:\u4f9d\u8d56\u6587\u4ef6\n        \u7f16\u8bd1\u547d\u4ee4\n")),(0,l.kt)("p",null,"eg:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-makefile"},"a.out:main.o m.o\n        gcc  main.o m.o\nmain.o: main.c bank.h \n        gcc -c main.c\nm.o: m.c bank.h\n       gcc -c m.c \n")),(0,l.kt)("h2",{id:"\u4f7f\u7528makefile"},"\u4f7f\u7528makefile"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"make -f makefile filepath target\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"make -f makefile ./ a.out\n")),(0,l.kt)("h2",{id:"makefile\u6587\u4ef6\u4e2d\u7684\u53d8\u91cf"},"makefile\u6587\u4ef6\u4e2d\u7684\u53d8\u91cf"),(0,l.kt)("p",null,"\u53d8\u91cf\u540d\u53ef\u4ee5\u5305\u542b\u5b57\u7b26\uff0c\u6570\u5b57\uff0c\u4e0b\u5212\u7ebf\uff0c\u4f46\u4e0d\u80fd\u5305\u542b ",(0,l.kt)("inlineCode",{parentName:"p"},":")," ",(0,l.kt)("inlineCode",{parentName:"p"},"#")," ",(0,l.kt)("inlineCode",{parentName:"p"},"=")," ",(0,l.kt)("inlineCode",{parentName:"p"},"Enter")," ",(0,l.kt)("inlineCode",{parentName:"p"},"Backspace")," ..."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-makefile"},"\u53d8\u91cf\u540d=\u5b57\u7b26\u4e32\nC=-c\nmain.o:main.c bank.h\n       gcc $(C) main.c\n")),(0,l.kt)("h2",{id:"makefile\u4e2d\u5e38\u7528\u9ed8\u8ba4\u53d8\u91cf"},"makefile\u4e2d\u5e38\u7528\u9ed8\u8ba4\u53d8\u91cf"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53d8\u91cf\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53d8\u91cf\u7684\u4f5c\u7528"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RM"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5220\u9664\u6587\u4ef6\u7684\u547d\u4ee4\uff0c\u9ed8\u8ba4\u503c\u4e3arm -rf")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$+"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6240\u6709\u7684\u4f9d\u8d56\u6587\u4ef6\uff0c\u4e0d\u53bb\u9664\u91cd\u590d\u7684\u4f9d\u8d56\u76ee\u6807")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$^"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6240\u6709\u7684\u4f9d\u8d56\u6587\u4ef6\uff0c\u53bb\u9664\u91cd\u590d\u7684\u4f9d\u8d56\u76ee\u6807")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$<"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u7b2c\u4e00\u4e2a\u4f9d\u8d56\u6587\u4ef6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$?"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6240\u6709\u7684\u4f9d\u8d56\u6587\u4ef6\uff0c\u4ee5\u7a7a\u683c\u9694\u5f00\uff0c\u8fd9\u4e9b\u4f9d\u8d56\u6587\u4ef6\u6bd4\u76ee\u6807\u8fd8\u8981\u65b0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$@"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u76ee\u6807\u6587\u4ef6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$%"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ec5\u5f53\u76ee\u6807\u662f\u51fd\u6570\u5e93\u6587\u4ef6\u4e2d\uff0c\u8868\u793a\u89c4\u5219\u4e2d\u7684\u76ee\u6807\u6210\u5458\u540d\u3002\u4f8b\u5982\uff1a\u76ee\u6807\u662f\u9759\u6001\u5e93\u6587\u4ef6f.a\uff0c\u90a3\u4e48$%\u8868\u793a\u5e93\u6587\u4ef6\u6210\u5458\uff0c\u6bd4\u5982m.o sort.o\u7b49\u3002\u82e5\u4e0d\u662f\u51fd\u6570\u5e93\u6587\u4ef6\uff0c\u5176\u503c\u4e3a\u7a7a\u3002")))))}d.isMDXComponent=!0}}]);