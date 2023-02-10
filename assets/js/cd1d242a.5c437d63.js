"use strict";(self.webpackChunkcosc_102_writeups=self.webpackChunkcosc_102_writeups||[]).push([[39],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,h=c["".concat(u,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(h,o(o({ref:t},s),{},{components:n})):r.createElement(h,o({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4861:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={title:"Lab 3 - Calculator"},o="Lab 3 - Calculator",l={unversionedId:"labs/lab3",id:"labs/lab3",title:"Lab 3 - Calculator",description:"Build a simple arithmetic calculator.",source:"@site/docs/labs/lab3.md",sourceDirName:"labs",slug:"/labs/lab3",permalink:"/cs102-writeups/docs/labs/lab3",draft:!1,tags:[],version:"current",frontMatter:{title:"Lab 3 - Calculator"},sidebar:"Sidebar",previous:{title:"Labs",permalink:"/cs102-writeups/docs/category/labs"}},u={},p=[{value:"Meta",id:"meta",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Program Flow",id:"program-flow",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Error Handling",id:"error-handling",level:2},{value:"Operands",id:"operands",level:3},{value:"Operators",id:"operators",level:3},{value:"Hints",id:"hints",level:2}],s={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lab-3---calculator"},"Lab 3 - Calculator"),(0,a.kt)("p",null,"Build a simple arithmetic calculator."),(0,a.kt)("h2",{id:"meta"},"Meta"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Lab"),(0,a.kt)("th",{parentName:"tr",align:null},"Source File"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Due Date"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"calc.cpp")),(0,a.kt)("td",{parentName:"tr",align:null},"Simple arithmetic calculator w/error handling"),(0,a.kt)("td",{parentName:"tr",align:null},"2/16/2023 - 11:59pm")))),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"I'm not going to go over much here, since the program is really simple honestly. I'll just cover a couple of the main points of this lab."),(0,a.kt)("h2",{id:"program-flow"},"Program Flow"),(0,a.kt)("p",null,"Your program should do a few things:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Prompt user for left ",(0,a.kt)("strong",{parentName:"li"},"operand"),"."),(0,a.kt)("li",{parentName:"ol"},"Prompt user for ",(0,a.kt)("em",{parentName:"li"},"operator"),"."),(0,a.kt)("li",{parentName:"ol"},"Prompt user for right ",(0,a.kt)("strong",{parentName:"li"},"operand"),"."),(0,a.kt)("li",{parentName:"ol"},"Perform the operation and output the result.")),(0,a.kt)("p",null,"Note that the ",(0,a.kt)("strong",{parentName:"p"},"operands")," are integers, while the ",(0,a.kt)("em",{parentName:"p"},"operator")," is a single character. You should use a ",(0,a.kt)("inlineCode",{parentName:"p"},"switch")," statement to determine which operation to perform."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The only exception to this flow is the absolute value operation. This operation only requires one operand, so you should prompt the user for only one operand.")),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You cannot ",(0,a.kt)("em",{parentName:"li"},"re-use")," code. Don't repeat something you've already done."),(0,a.kt)("li",{parentName:"ul"},"You must use a ",(0,a.kt)("inlineCode",{parentName:"li"},"switch")," statement."),(0,a.kt)("li",{parentName:"ul"},"You muse handle erroneous input. If the user enters an invalid operator, you should output the appropriate error message and exit the program.")),(0,a.kt)("h2",{id:"error-handling"},"Error Handling"),(0,a.kt)("h3",{id:"operands"},"Operands"),(0,a.kt)("p",null,"You should handle erroneous input. If the user enters an invalid operator, you should output an error message and exit the program. You can check for invalid input using the ",(0,a.kt)("inlineCode",{parentName:"p"},"cin.fail()")," function. This function returns ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," if the last input operation failed. You can use this function to check if the user entered an invalid operator."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'int my_int;\ncin >> my_int;\n\n// a failure occurs if the user entered something other than an integer\nif (cin.fail()) {\n    cout << "Invalid left operand" << endl;\n    return 1;\n}\n')),(0,a.kt)("p",null,"Alternatively, you can check the result of the ",(0,a.kt)("inlineCode",{parentName:"p"},"cin")," operation directly."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'int my_int;\n\n// returns false if the user entered something that doesn\'t match the type of x\nif (!(cin >> my_int)) {\n    cout << "Invalid left operand" << endl;\n    return 1;\n}\n')),(0,a.kt)("h3",{id:"operators"},"Operators"),(0,a.kt)("p",null,"In the case that an invalid operator is entered, you should run the program like normal. If the operator does not exist in your switch statement, then it will use the ",(0,a.kt)("inlineCode",{parentName:"p"},"default")," case. In the ",(0,a.kt)("inlineCode",{parentName:"p"},"default")," case, you should output an error message and exit the program."),(0,a.kt)("h2",{id:"hints"},"Hints"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"cin.get()")," - This function is used to get a single character from the user. It's not necessary as it's interchangeable with ",(0,a.kt)("inlineCode",{parentName:"p"},"cin >> my_char"),", but you can use it.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"cin.ignore()")," - This function is used to ignore the rest of the line. This is useful when you want to get a single character from the user, but there is still data left in the input buffer. So if the enters ",(0,a.kt)("inlineCode",{parentName:"p"},"Agfjdkl")," fort their operator, and you use ",(0,a.kt)("inlineCode",{parentName:"p"},"cin.get()")," to get the first character, the rest of the line will still be in the input buffer. So the next time you try to get an integer from the user, it will get ",(0,a.kt)("inlineCode",{parentName:"p"},"gfjdkl")," instead of the integer they entered. So you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"cin.ignore()")," to ignore the rest of the line. This way, the next time you try to get an integer from the user, it will get the integer they entered."))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"cin.ignore()")," takes 2 arguments. 1. The number of characters to ignore, 2. The character to stop ignoring at. Whichever comes first. For ignoring, typically we want to ignore as many characters as physically possible or until we hit a ",(0,a.kt)("inlineCode",{parentName:"p"},"\\n")," character. Luckily, C++ has a constant for large number: ",(0,a.kt)("inlineCode",{parentName:"p"},"numeric_limits<streamsize>::max()"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// will ignore anything in the input buffer until it hits a newline character\ncin.ignore(numeric_limits<streamsize>::max(), '\\n');\n")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"Include ",(0,a.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"<limits>")),(0,a.kt)("p",{parentName:"admonition"},"You must include ",(0,a.kt)("inlineCode",{parentName:"p"},"#include<limits>")," to use ",(0,a.kt)("inlineCode",{parentName:"p"},"numeric_limits"),".")))}c.isMDXComponent=!0}}]);