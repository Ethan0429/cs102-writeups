"use strict";(self.webpackChunkcosc_102_writeups=self.webpackChunkcosc_102_writeups||[]).push([[674],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=m(n),d=o,h=u["".concat(s,".").concat(d)]||u[d]||c[d]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var m=2;m<r;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1233:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:3},i="Common Unix/Linux & g++ Commands",l={unversionedId:"general/basics",id:"general/basics",title:"Common Unix/Linux & g++ Commands",description:"Tips and resources that are useful for the course.",source:"@site/docs/general/basics.md",sourceDirName:"general",slug:"/general/basics",permalink:"/cs102-writeups/docs/general/basics",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"Sidebar",previous:{title:"Installing g++",permalink:"/cs102-writeups/docs/general/info"},next:{title:"About Grading",permalink:"/cs102-writeups/docs/general/about-grading"}},s={},m=[{value:"What is this?",id:"what-is-this",level:2},{value:"Copying to/from the lab machines",id:"copying-tofrom-the-lab-machines",level:2},{value:"From your computer to the lab computers",id:"from-your-computer-to-the-lab-computers",level:4},{value:"From the lab computers to your computer",id:"from-the-lab-computers-to-your-computer",level:4},{value:"Common SCP FAQs/Errors",id:"common-scp-faqserrors",level:3},{value:"Compiling and Running C++ Programs",id:"compiling-and-running-c-programs",level:2},{value:"example",id:"example",level:4},{value:"Other commands you should know",id:"other-commands-you-should-know",level:2},{value:"ls",id:"ls",level:4},{value:"cd",id:"cd",level:4},{value:"pwd",id:"pwd",level:4},{value:"mkdir",id:"mkdir",level:4},{value:"cp",id:"cp",level:4},{value:"mv",id:"mv",level:4},{value:"rm",id:"rm",level:4},{value:"touch",id:"touch",level:4},{value:"cat",id:"cat",level:4},{value:"Tips &amp; Important Notes",id:"tips--important-notes",level:2}],p={toc:m};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"common-unixlinux--g-commands"},"Common Unix/Linux & g++ Commands"),(0,o.kt)("p",null,"Tips and resources that are useful for the course."),(0,o.kt)("h2",{id:"what-is-this"},"What is this?"),(0,o.kt)("p",null,"This page can be used as a reference for the basics of the COSC 102 course. It is not meant to be a complete reference, but rather a quick reference for the most common things you will need to know."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This page is aimed at Unix/Linux computers. If you are using Windows, it's more or less the same, but some of the syntax is slightly different like how Windows uses ",(0,o.kt)("inlineCode",{parentName:"p"},"\\")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"/")," for paths, and the file system structure is different. (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"C:\\")," is the root directory for Windows, but ",(0,o.kt)("inlineCode",{parentName:"p"},"/")," is the root directory for Unix/Linux. ",(0,o.kt)("inlineCode",{parentName:"p"},"C:\\Desktop")," is the Desktop folder for Windows, but ",(0,o.kt)("inlineCode",{parentName:"p"},"/home/<username>/Desktop")," is the Desktop folder for Unix/Linux.)")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"copying-tofrom-the-lab-machines"},"Copying to/from the lab machines"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"scp")," - Stands for ",(0,o.kt)("em",{parentName:"li"},"Secure Copy"),". This command allows you to copy files from a remote server to your local computer or vice versa.")),(0,o.kt)("h4",{id:"from-your-computer-to-the-lab-computers"},"From your computer to the lab computers"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"scp <file> <netid>@tesla<number>.eecs.utk.edu:<destination>\n")),(0,o.kt)("admonition",{title:"IMPORTANT",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Make sure ",(0,o.kt)("inlineCode",{parentName:"p"},"<destination>")," exists on the lab computers. If it doesn't, you will get an error.")),(0,o.kt)("h4",{id:"from-the-lab-computers-to-your-computer"},"From the lab computers to your computer"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"scp <netid>@tesla<number>.eecs.utk.edu:<file> <destination>\n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"File"),(0,o.kt)("th",{parentName:"tr",align:null},"NetID"),(0,o.kt)("th",{parentName:"tr",align:null},"Number"),(0,o.kt)("th",{parentName:"tr",align:null},"Destination"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"The ",(0,o.kt)("strong",{parentName:"td"},"path")," to the file you want to copy"),(0,o.kt)("td",{parentName:"tr",align:null},"Your UTK NetID"),(0,o.kt)("td",{parentName:"tr",align:null},"Any number ","[0,30]"),(0,o.kt)("td",{parentName:"tr",align:null},"The ",(0,o.kt)("strong",{parentName:"td"},"path")," to the location you want the file copied")))),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The brackets ",(0,o.kt)("inlineCode",{parentName:"p"},"<>")," are placeholders. You don't actually include them in the final command, just the contents within them")),(0,o.kt)("h3",{id:"common-scp-faqserrors"},"Common SCP FAQs/Errors"),(0,o.kt)("p",null,"If you're copying a file ",(0,o.kt)("strong",{parentName:"p"},"from your computer to the lab computers"),", you need to make sure ",(0,o.kt)("em",{parentName:"p"},"one")," of the following is true:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You are in the same directory as the file you want to copy"),(0,o.kt)("li",{parentName:"ul"},"You provide the full path of the file you want to copy")),(0,o.kt)("p",null,"If you aren't in the same directory as the file you want to copy, then you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"cd")," to navigate to the directory that contains the file you want to copy. Or you can provide the full path to the file you want to copy. (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"scp ~/Desktop/file.txt")," as opposed to ",(0,o.kt)("inlineCode",{parentName:"p"},"scp file.txt"),")"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"scp ~/Desktop/file.txt <netid>@tesla<number>.eecs.utk.edu:<destination>\n\n# as opposed to\n\nscp file.txt <netid>@tesla<number>.eecs.utk.edu:<destination>\n")),(0,o.kt)("p",null,"If you ",(0,o.kt)("em",{parentName:"p"},"are")," in the same directory, then the path you use for the file you want to copy is just the name of the file."),(0,o.kt)("p",null,"If you're copying a file ",(0,o.kt)("strong",{parentName:"p"},"from the lab computers to your computer"),", then ",(0,o.kt)("inlineCode",{parentName:"p"},"<file>")," & ",(0,o.kt)("inlineCode",{parentName:"p"},"<destination>")," will ",(0,o.kt)("em",{parentName:"p"},"always")," be the full path to the file you want to copy. (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"~/cosc102/labs/lab1.cpp")," for ",(0,o.kt)("inlineCode",{parentName:"p"},"<file>"),"). You can however copy a file to your current directory by using ",(0,o.kt)("inlineCode",{parentName:"p"},".")," as the destination."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"scp <netid>@tesla<number>.eecs.utk.edu:~/cosc102/labs/lab1.cpp .\n")),(0,o.kt)("h2",{id:"compiling-and-running-c-programs"},"Compiling and Running C++ Programs"),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Whenever going to submit your code for an assignment, ",(0,o.kt)("strong",{parentName:"p"},"ALWAYS")," make sure it compiles ",(0,o.kt)("em",{parentName:"p"},"and")," behaves (as intended) before doing so -- ",(0,o.kt)("strong",{parentName:"p"},"ON THE LAB MACHINES"),". Compilers work different across computers, so even if it compiled on your computer, it doesn't necessarily compile or behave the same way on the lab machines. The TA's grade using the lab machines, so if your code doesn't compile or work correctly there, you will not get credit for the assignment.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"g++")," - Stands for ",(0,o.kt)("em",{parentName:"li"},"GNU C++ Compiler"),". This command is used to compile C++ programs. It is the default compiler for C++ programs on Unix/Linux systems. It is also the compiler we will be using in this course.")),(0,o.kt)("p",null,"There are many ways to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"g++")," command, but the most common way is to use the following syntax:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"g++ -std=c++11 -o <binary> <source>.cpp\n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"binary"),(0,o.kt)("th",{parentName:"tr",align:null},"source"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"The name of the binary (final executable) you want to create"),(0,o.kt)("td",{parentName:"tr",align:null},"The name of the source file (your code) you want to compile")))),(0,o.kt)("h4",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"g++ -std=c++11 -o foo lab1.cpp\n")),(0,o.kt)("p",null,"This will compile the ",(0,o.kt)("inlineCode",{parentName:"p"},"lab1.cpp")," file and create a binary called ",(0,o.kt)("inlineCode",{parentName:"p"},"foo")," that you can run with"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./foo\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Notice ",(0,o.kt)("inlineCode",{parentName:"p"},"foo")," is just a random name. You can name the executable whatever you want, since the ",(0,o.kt)("inlineCode",{parentName:"p"},"g++")," command will create the binary you specify. Usually though you want to name it something that makes sense, like the name of the program you're writing e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"lab1")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"lab2")," etc.")),(0,o.kt)("p",null,"We use ",(0,o.kt)("inlineCode",{parentName:"p"},"./")," to tell the computer that we want to run a binary in the current directory. If you want to run a binary in a different directory, you can use the full path to the binary without the ",(0,o.kt)("inlineCode",{parentName:"p"},".")),(0,o.kt)("p",null,"Later in the course, you may be required to compile programs with extra flags that are specific to the lab. These flags will be provided to you in the lab instructions, but it's ",(0,o.kt)("em",{parentName:"p"},"paramount")," that you compile with these flags when required. Often times they affect the way your program runs, and if you don't compile with the correct flags, your program may not run correctly, or it may not compile at all, which will net you a 0 on the lab without chance for appeal."),(0,o.kt)("h2",{id:"other-commands-you-should-know"},"Other commands you should know"),(0,o.kt)("h4",{id:"ls"},"ls"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ls")," - Stands for ",(0,o.kt)("em",{parentName:"li"},"List"),". This command is used to list the contents of a directory. It is often used to see what files are in a directory, or to see if a file exists in a directory. There are multiple flags you can use with ",(0,o.kt)("inlineCode",{parentName:"li"},"ls")," that alter the output")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ls -a # lists hidden files/directories (ones that start with a . character)\nls -l # a more detailed list of the current directory. It shows things like file mod times, permissions, and more\nls <directory/file> # lists the contents of a specific directory/lists whether a file exists in the current directory, respectively\n")),(0,o.kt)("h4",{id:"cd"},"cd"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"cd")," - Stands for ",(0,o.kt)("em",{parentName:"li"},"Change Directory"),". This command is used to change the current directory. It is often used to navigate to a specific directory, or to navigate back to your home directory.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd <directory> # changes the current directory to the directory specified\ncd .. # changes the current directory to the parent directory of the current directory (moves back one)\ncd ~ # changes the current directory to your home directory\n")),(0,o.kt)("h4",{id:"pwd"},"pwd"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pwd")," - Stands for ",(0,o.kt)("em",{parentName:"li"},"Print Working Directory"),". This command is used to print the current directory. It is often used to see what directory you are currently in.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pwd\n")),(0,o.kt)("h4",{id:"mkdir"},"mkdir"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mkdir")," - Stands for ",(0,o.kt)("em",{parentName:"li"},"Make Directory"),". This command is used to create a new directory.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir <new-directory-name>\n")),(0,o.kt)("h4",{id:"cp"},"cp"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"cp")," - Stands for ",(0,o.kt)("em",{parentName:"li"},"Copy"),". This command is used to copy a file or directory.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cp <source> <destination>\ncp -r <source-directory> <destination-directory>\n")),(0,o.kt)("h4",{id:"mv"},"mv"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mv")," - Stands for ",(0,o.kt)("em",{parentName:"li"},"Move"),". This command is used to move a file to a different location. You can also use it to rename a file.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mv <source> <destination> # moves source to destination or renames source to destination\n")),(0,o.kt)("h4",{id:"rm"},"rm"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"rm")," - Stands for ",(0,o.kt)("em",{parentName:"li"},"Remove"),". This command is used to remove files and directories.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rm <file> # removes a file\nrm -r <directory> # removes a directory and all of its contents\n")),(0,o.kt)("h4",{id:"touch"},"touch"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"touch")," - This command is used to create a new file.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"touch <new-file-name>\n")),(0,o.kt)("h4",{id:"cat"},"cat"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"cat")," - Stands for ",(0,o.kt)("em",{parentName:"li"},"Concatenate"),". This command is used to print the contents of a file to the terminal.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cat <file>\n")),(0,o.kt)("h2",{id:"tips--important-notes"},"Tips & Important Notes"),(0,o.kt)("p",null,"I'm just gonna throw out a bunch of small bits of info here that I see students struggle with often."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Instead of typing ",(0,o.kt)("inlineCode",{parentName:"li"},"/home/netid/")," in SCP/SSH, use ",(0,o.kt)("inlineCode",{parentName:"li"},"~"),". This is basically shorthand for that path. So ",(0,o.kt)("inlineCode",{parentName:"li"},"/home/netid")," is the same thing as ",(0,o.kt)("inlineCode",{parentName:"li"},"~"),"."),(0,o.kt)("li",{parentName:"ul"},"When you're in a directory, you can use ",(0,o.kt)("inlineCode",{parentName:"li"},"..")," to go back one directory. So if you're in ",(0,o.kt)("inlineCode",{parentName:"li"},"/home/netid/cosc102/labs"),", you can use ",(0,o.kt)("inlineCode",{parentName:"li"},"cd ..")," to go back to ",(0,o.kt)("inlineCode",{parentName:"li"},"/home/netid/cosc102"))))}u.isMDXComponent=!0}}]);