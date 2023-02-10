"use strict";(self.webpackChunkcosc_102_writeups=self.webpackChunkcosc_102_writeups||[]).push([[954],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(7462),r=n(7294),i=n(6010),o=n(2466),l=n(6550),s=n(1980),u=n(7392),c=n(12);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=p(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[s,u]=g({queryString:n,groupId:a}),[d,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),b=(()=>{const e=s??d;return m({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),h(e)}),[u,h,i]),tabValues:i}}var b=n(2389);const k="tabList__CuJ",f="tabItem_LNqP";function w(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==l&&(d(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},o,{className:(0,i.Z)("tabs__item",f,o?.className,{"tabs__item--active":l===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=h(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",k)},r.createElement(w,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function N(e){const t=(0,b.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},9031:(e,t,n)=>{n.d(t,{Z:()=>c});var a,r,i=n(7294),o=n(6010),l=n(9960);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}const u=e=>{let{title:t,titleId:n,...o}=e;return i.createElement("svg",s({fill:"#fff",width:15,height:15,viewBox:"0 0 64 64",xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2},"aria-labelledby":n},o),t?i.createElement("title",{id:n},t):null,i.createElement("path",{style:{fill:"none"},d:"M-896 0H384v800H-896z"}),a||(a=i.createElement("path",{d:"M36.026 20.058H14.934a2.99 2.99 0 0 0-2.989 2.989v25.964A2.99 2.99 0 0 0 14.934 52h26.024a2.99 2.99 0 0 0 2.989-2.989V28.058h3.999v21.948a5.999 5.999 0 0 1-5.995 5.995h-28.01a5.998 5.998 0 0 1-5.995-5.995V22.052a5.997 5.997 0 0 1 5.995-5.995h22.085v4.001Z"})),r||(r=i.createElement("path",{d:"M55.925 25.32H51.92V14.839L24.026 42.732 21.194 39.9l27.895-27.895H38.605V8h17.318l.002.001V25.32Z"})))};function c(e){let{to:t,text:n,className:a}=e;return i.createElement(l.Z,{to:t,className:(0,o.Z)("group",a)},n,i.createElement(u,{className:"ml-0.5 translate-y-0.5 group-hover:fill-[#00ff37]"}))}},2702:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>u,metadata:()=>d,toc:()=>m});var a=n(7462),r=(n(7294),n(3905)),i=n(4866),o=n(5162),l=n(9031);const s=n.p+"assets/images/msys2-e869b1ce204dadcef71b560297a65981.png",u={title:"Debugging with gdb"},c="Debugging with gdb",d={unversionedId:"debugging/gdb",id:"debugging/gdb",title:"Debugging with gdb",description:"Learn how to use gdb to debug tricky problems.",source:"@site/docs/debugging/gdb.mdx",sourceDirName:"debugging",slug:"/debugging/gdb",permalink:"/cs102-writeups/docs/debugging/gdb",draft:!1,tags:[],version:"current",frontMatter:{title:"Debugging with gdb"},sidebar:"Sidebar",previous:{title:"Debugging",permalink:"/cs102-writeups/docs/category/debugging"}},p={},m=[{value:"What is <code>gdb</code>?",id:"what-is-gdb",level:2},{value:"Installing <code>gdb</code>",id:"installing-gdb",level:2},{value:"Windows Users",id:"windows-users",level:3},{value:"Windows Users (WSL)",id:"windows-users-wsl",level:3},{value:"MacOS Users",id:"macos-users",level:3},{value:"<code>gdb</code> flowchart",id:"gdb-flowchart",level:2},{value:"Starting <code>gdb</code>",id:"starting-gdb",level:2},{value:"Pre-Run",id:"pre-run",level:2},{value:"Start Execution",id:"start-execution",level:2},{value:"Run",id:"run",level:3},{value:"Run with Arguments",id:"run-with-arguments",level:3},{value:"Setting Breakpoints",id:"setting-breakpoints",level:2},{value:"Break",id:"break",level:3},{value:"Next Instruction",id:"next-instruction",level:2},{value:"Step Into Function",id:"step-into-function",level:2},{value:"Continue Execution",id:"continue-execution",level:2},{value:"Print Variable",id:"print-variable",level:2},{value:"Backtrace",id:"backtrace",level:2},{value:"End Debugging Session",id:"end-debugging-session",level:2},{value:"More Useful Commands",id:"more-useful-commands",level:2}],g={toc:m};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"debugging-with-gdb"},"Debugging with ",(0,r.kt)("inlineCode",{parentName:"h1"},"gdb")),(0,r.kt)("p",null,"Learn how to use ",(0,r.kt)("inlineCode",{parentName:"p"},"gdb")," to debug tricky problems."),(0,r.kt)("h2",{id:"what-is-gdb"},"What is ",(0,r.kt)("inlineCode",{parentName:"h2"},"gdb"),"?"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"gdb")," is program that allows you to debug your own programs. It's a dynamic debugger, which means it attaches to your program as it runs, and you can interact with your program like a surgeon operating on a patient."),(0,r.kt)("p",null,"In this guide, I'll cover"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Installing ",(0,r.kt)("inlineCode",{parentName:"li"},"gdb")," for both MacOS & Windows"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"gdb")," commands and how to use them")),(0,r.kt)("h2",{id:"installing-gdb"},"Installing ",(0,r.kt)("inlineCode",{parentName:"h2"},"gdb")),(0,r.kt)("p",null,"If you can't get ",(0,r.kt)("inlineCode",{parentName:"p"},"gdb")," to work, or you don't want to install it on your computer, you have a couple options."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Use the lab machines. They have ",(0,r.kt)("inlineCode",{parentName:"li"},"gdb")," installed already."),(0,r.kt)("li",{parentName:"ol"},"Use the ",(0,r.kt)(l.Z,{text:"online gdb debugger",to:"https://www.onlinegdb.com/online_c++_compiler",mdxType:"LinkWithIcon"}),". It's a little bit slower, but it works.")),(0,r.kt)("p",null,"Otherwise, read on."),(0,r.kt)(i.Z,{groupId:"operating-system",queryString:"os",defaultValue:"windows",values:[{label:"Windows Users",value:"windows"},{label:"Windows Users (WSL)",value:"windows-wsl"},{label:"MacOS Users",value:"macos"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"windows",mdxType:"TabItem"},(0,r.kt)("h3",{id:"windows-users"},"Windows Users"),(0,r.kt)("p",null,"First let's check to see if it's already installed. Open up a terminal instance (powershell, cmd, terminal, whatever) and run the command ",(0,r.kt)("inlineCode",{parentName:"p"},"gdb"),". If it works, skip to ",(0,r.kt)(l.Z,{to:"#gdb-flowchart",text:"the flowchart",mdxType:"LinkWithIcon"})," to get started."),(0,r.kt)("p",null,"Open the program ",(0,r.kt)("inlineCode",{parentName:"p"},"msys2"),". There might be multiple, but just open the purple one. It should look like this:"),(0,r.kt)("img",{src:s,height:"auto",width:"120px"}),(0,r.kt)("p",null,"Once opened, enter the following commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pacman -Syu\npacman -Syu\npacman -S mingw-w64-x86_64-gdb\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Make sure to answer any of the prompts with ",(0,r.kt)("inlineCode",{parentName:"strong"},"y")),"."),(0,r.kt)("p",null,"Once that's done, restart any terminals you have open, and try running ",(0,r.kt)("inlineCode",{parentName:"p"},"gdb")," again. It should work now. If it doesn't, then I don't recommend bothering with it. Just use the lab machines.")),(0,r.kt)(o.Z,{value:"windows-wsl",mdxType:"TabItem"},(0,r.kt)("h3",{id:"windows-users-wsl"},"Windows Users (WSL)"),(0,r.kt)("p",null,"First let's check to see if it's already installed. Open up a terminal instance of Ubuntu and run the command ",(0,r.kt)("inlineCode",{parentName:"p"},"gdb"),". If it works, skip to ",(0,r.kt)(l.Z,{to:"#gdb-flowchart",text:"the flowchart",mdxType:"LinkWithIcon"})," to get started."),(0,r.kt)("p",null,"If it doesn't work, run the following commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\nsudo apt upgrade\nsudo apt install gdb\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Make sure to answer any of the prompts with ",(0,r.kt)("inlineCode",{parentName:"strong"},"y")),"."),(0,r.kt)("p",null,"Once that's done, restart any terminals you have open, and try running ",(0,r.kt)("inlineCode",{parentName:"p"},"gdb")," again. It should work now. If it doesn't, then I don't recommend bothering with it. Just use the lab machines.")),(0,r.kt)(o.Z,{value:"macos",mdxType:"TabItem"},(0,r.kt)("h3",{id:"macos-users"},"MacOS Users"),(0,r.kt)("p",null,"For MacOS users, we actually won't be using ",(0,r.kt)("inlineCode",{parentName:"p"},"gdb")," directly. Instead, we'll be using ",(0,r.kt)("inlineCode",{parentName:"p"},"lldb"),", which is a debugger that's built into Xcode. It's a little bit different than ",(0,r.kt)("inlineCode",{parentName:"p"},"gdb"),", but it's more or less the same."),(0,r.kt)("p",null,"First let's check to see if it's already installed. Open up a terminal instance and run the command ",(0,r.kt)("inlineCode",{parentName:"p"},"lldb"),". If it works, skip to ",(0,r.kt)(l.Z,{to:"#gdb-flowchart",text:"the flowchart",mdxType:"LinkWithIcon"})," to get started."),(0,r.kt)("p",null,"If it doesn't work, follow the instructions ",(0,r.kt)(l.Z,{to:"/cs102-writeups/docs/general/info?os=macos#installing-xcode-command-line-tools-g",text:"here",mdxType:"LinkWithIcon"})," to install the Xcode command line tools."))),(0,r.kt)("h2",{id:"gdb-flowchart"},(0,r.kt)("inlineCode",{parentName:"h2"},"gdb")," flowchart"),(0,r.kt)("p",null,"Here's a flowchart of the commands you'll use in ",(0,r.kt)("inlineCode",{parentName:"p"},"gdb"),", from start to finish. The commands needed are the labels of the arrows, and the arguments to the commands are wraped in ",(0,r.kt)("inlineCode",{parentName:"p"},":"),". Optional arguments are wrapped in ",(0,r.kt)("inlineCode",{parentName:"p"},"::"),". Commands like ",(0,r.kt)("inlineCode",{parentName:"p"},"next/n")," mean that you can use either ",(0,r.kt)("inlineCode",{parentName:"p"},"next")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," to execute that command."),(0,r.kt)("p",null,"Lastly, of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Debug Options")," commands can be repeated by pressing ",(0,r.kt)("inlineCode",{parentName:"p"},"\u21a9")," (enter) without typing anything."),(0,r.kt)("admonition",{title:"README",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Each rectangle node in the chart is clickable and will take you to the section of this guide that covers that command more in depth.")),(0,r.kt)("mermaid",{value:'graph TD\nStart[Start Debugging with gdb] --\x3e|gdb :binary_name:| LoadProgram{LoadProgram} --\x3e PreRun[Pre-Run]\nPreRun --\x3e |break/b :line number or function name:| SetBreakpoint[Set Breakpoint]\nPreRun --\x3e |"run/r :argument(s):"| StartExecution[Start Execution]\nStartExecution --\x3e DebugOptions{Debug Options}\nDebugOptions --\x3e |next/n| NextInstruction[Execute Next Instruction]\nDebugOptions --\x3e |break/b :line number or function:| SetBreakpoint[Set Breakpoint]\nDebugOptions --\x3e |step/s| StepIntoFunction[Step Into Function]\nDebugOptions --\x3e |continue/c| ContinueExecution[Continue Execution]\nDebugOptions --\x3e |print/p :variable name:| PrintVariable[Print Value of Variable]\nDebugOptions --\x3e |backtrace/bt| Backtrace[Print Backtrace of Function Calls]\nDebugOptions --\x3e |quit/q| EndDebugging[End Debugging Session]\nclick Start href "/cs102-writeups/docs/debugging/gdb#starting-gdb"\nclick StartExecution href "/cs102-writeups/docs/debugging/gdb#start-execution"\nclick PreRun href "/cs102-writeups/docs/debugging/gdb#pre-run"\nclick SetBreakpoint href "/cs102-writeups/docs/debugging/gdb#setting-breakpoints"\nclick NextInstruction href "/cs102-writeups/docs/debugging/gdb#next-instruction"\nclick StepIntoFunction href "/cs102-writeups/docs/debugging/gdb#step-into-function"\nclick ContinueExecution href "/cs102-writeups/docs/debugging/gdb#continue-execution"\nclick PrintVariable href "/cs102-writeups/docs/debugging/gdb#print-variable"\nclick Backtrace href "/cs102-writeups/docs/debugging/gdb#backtrace"\nclick EndDebugging href "/cs102-writeups/docs/debugging/gdb#end-debugging-session"'}),(0,r.kt)("h2",{id:"starting-gdb"},"Starting ",(0,r.kt)("inlineCode",{parentName:"h2"},"gdb")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"Before using ",(0,r.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"gdb")),(0,r.kt)("p",{parentName:"admonition"},"Before using ",(0,r.kt)("inlineCode",{parentName:"p"},"gdb")," on your program, it needs to be compiled with the ",(0,r.kt)("inlineCode",{parentName:"p"},"-g")," flag. It can go anywhere in the command. I usually put it at the end, but it doesn't matter.")),(0,r.kt)("p",null,"To start ",(0,r.kt)("inlineCode",{parentName:"p"},"gdb"),", you need to run the command ",(0,r.kt)("inlineCode",{parentName:"p"},"gdb")," followed by the name of the binary you want to debug. For example, if you want to debug the binary ",(0,r.kt)("inlineCode",{parentName:"p"},"hello"),", you would run the command ",(0,r.kt)("inlineCode",{parentName:"p"},"gdb hello"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# compile your program\ng++ hello.cpp -o hello -g\ngdb hello\n")),(0,r.kt)("h2",{id:"pre-run"},"Pre-Run"),(0,r.kt)("p",null,"During this phase, you'll set any ",(0,r.kt)(l.Z,{to:"#setting-breakpoints",text:"breakpoints",mdxType:"LinkWithIcon"})," you want to set, and then start the execution of your program."),(0,r.kt)("h2",{id:"start-execution"},"Start Execution"),(0,r.kt)("p",null,"To start the execution of your program, you'll use the ",(0,r.kt)("inlineCode",{parentName:"p"},"run")," command. You can also use the ",(0,r.kt)("inlineCode",{parentName:"p"},"r")," command, which is a shortcut for ",(0,r.kt)("inlineCode",{parentName:"p"},"run"),"."),(0,r.kt)("p",null,"From here on out, your prompt will change to ",(0,r.kt)("inlineCode",{parentName:"p"},"(gdb)"),". Just note that it's not a part of the command you're typing."),(0,r.kt)("h3",{id:"run"},"Run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"(gdb) run\n\n# or\n\n(gdb) r\n")),(0,r.kt)("h3",{id:"run-with-arguments"},"Run with Arguments"),(0,r.kt)("p",null,"A lot of the time, your program will need command line arguments to run. To pass arguments to your program, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"run")," command with arguments."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"(gdb) r arg1 arg2 arg3 ...\n")),(0,r.kt)("h2",{id:"setting-breakpoints"},"Setting Breakpoints"),(0,r.kt)("p",null,"Breakpoints are the most important part of debugging. When you set a breakpoint, it's like putting a stop sign in your program at a certain line. When your program reaches that line, it will stop and let you inspect the state of your program."),(0,r.kt)("h3",{id:"break"},"Break"),(0,r.kt)("p",null,"To set a breakpoint, you'll use the ",(0,r.kt)("inlineCode",{parentName:"p"},"break")," command. You can also use the ",(0,r.kt)("inlineCode",{parentName:"p"},"b")," command, which is a shortcut for ",(0,r.kt)("inlineCode",{parentName:"p"},"break"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# break on line 5 of your entire program\n(gdb) break 5\n\n# break on the function `main`\n(gdb) break main\n")),(0,r.kt)("h2",{id:"next-instruction"},"Next Instruction"),(0,r.kt)("p",null,"Once you've hit a breakpoint, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"next")," command to execute the next instruction. You can also use the ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," command, which is a shortcut for ",(0,r.kt)("inlineCode",{parentName:"p"},"next"),". Keep in mind that ",(0,r.kt)("inlineCode",{parentName:"p"},"next")," will not take you into a function that's being called. It will execute it and then move on to the next line."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"(gdb) next\n\n# or\n\n(gdb) n\n")),(0,r.kt)("h2",{id:"step-into-function"},"Step Into Function"),(0,r.kt)("p",null,"If you're on a line that calls a function, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"step")," command to step into that function. You can also use the ",(0,r.kt)("inlineCode",{parentName:"p"},"s")," command, which is a shortcut for ",(0,r.kt)("inlineCode",{parentName:"p"},"step"),". Unlike ",(0,r.kt)("inlineCode",{parentName:"p"},"next"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"step")," will take you into the function that's being called."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"(gdb) step\n\n# or\n\n(gdb) s\n")),(0,r.kt)("h2",{id:"continue-execution"},"Continue Execution"),(0,r.kt)("p",null,"If you wish to continue executing your program until it hits another breakpoint or finishes/crashes, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"continue")," command. You can also use the ",(0,r.kt)("inlineCode",{parentName:"p"},"c")," command, which is a shortcut for ",(0,r.kt)("inlineCode",{parentName:"p"},"continue"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"(gdb) continue\n\n# or\n\n(gdb) c\n")),(0,r.kt)("h2",{id:"print-variable"},"Print Variable"),(0,r.kt)("p",null,"Often times you'll want to print the value of a variable to see what it is. To do this, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"print")," command. You can also use the ",(0,r.kt)("inlineCode",{parentName:"p"},"p")," command, which is a shortcut for ",(0,r.kt)("inlineCode",{parentName:"p"},"print"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# print the value of the variable `x`\n(gdb) print x\n\n# or\n\n(gdb) p x\n")),(0,r.kt)("h2",{id:"backtrace"},"Backtrace"),(0,r.kt)("p",null,'You\'ll usually use this command when your program crashes. It will print the "backtrace" of your program, which is a list of all the functions that were called before the crash, in order from the most recent to the oldest. The command is ',(0,r.kt)("inlineCode",{parentName:"p"},"backtrace"),", but you can also use the ",(0,r.kt)("inlineCode",{parentName:"p"},"bt")," command, which is a shortcut for ",(0,r.kt)("inlineCode",{parentName:"p"},"backtrace"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'(gdb) backtrace\n0  0x00007ffff7a4b0b3 in __GI_raise (sig=sig@entry=6) at ../sysdeps/unix/sysv/linux/raise.c:50\n1  0x00007ffff7a4c42a in __GI_abort () at abort.c:79\n2  0x00007ffff7a8f7ea in __libc_message (action=action@entry=do_abort, fmt=fmt@entry=0x7ffff7baa0a5 "%s\\n") at ../sysdeps/posix/libc_fatal.c:181\n')),(0,r.kt)("p",null,"Reading it's output, you can see that the crash happened on line 50 of the file ",(0,r.kt)("inlineCode",{parentName:"p"},"../sysdeps/unix/sysv/linux/raise.c"),". And you can see that the function that called ",(0,r.kt)("inlineCode",{parentName:"p"},"raise")," was ",(0,r.kt)("inlineCode",{parentName:"p"},"abort"),", which was called by ",(0,r.kt)("inlineCode",{parentName:"p"},"libc_message")," \u2014 hence the back",(0,r.kt)("strong",{parentName:"p"},"trace"),"."),(0,r.kt)("h2",{id:"end-debugging-session"},"End Debugging Session"),(0,r.kt)("p",null,"To end your debugging session, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"quit")," command. You can also use the ",(0,r.kt)("inlineCode",{parentName:"p"},"q")," command, which is a shortcut for ",(0,r.kt)("inlineCode",{parentName:"p"},"quit"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"(gdb) quit\n")),(0,r.kt)("h2",{id:"more-useful-commands"},"More Useful Commands"),(0,r.kt)("p",null,"There's a ton of commands in ",(0,r.kt)("inlineCode",{parentName:"p"},"gdb"),", and the ones listed above are the most useful in general. Here's a few more if you want more control and like using ",(0,r.kt)("inlineCode",{parentName:"p"},"gdb")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"start")," - this command starts the program being debugged and stops at the first instruction.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"jump")," - this command allows you to jump to a specific location in the program and continue executing from there.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"watch")," - this command sets a watchpoint, which triggers a breakpoint when a specified memory location is written to or read from.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"rwatch")," - this command sets a read watchpoint, which triggers a breakpoint when a specified memory location is read.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"awatch")," - this command sets a write watchpoint, which triggers a breakpoint when a specified memory location is written to.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"shell")," - this command allows you to run shell commands while in GDB, which can be useful for things like running scripts or viewing system information."))))}h.isMDXComponent=!0}}]);