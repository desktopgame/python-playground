import{r as l,j as e,a as M}from"./react-BWtM72Fx.js";import{c as U}from"./react-dom-C6_td2cS.js";import{c as G}from"./zustand-VAWCCRJw.js";import{R as V,v as W}from"./@uiw-CevIiw-o.js";import{G as q}from"./@codemirror-CJKhxZXB.js";import{S as K}from"./@radix-ui--dy0hhNJ.js";import{c as J}from"./class-variance-authority-Dp3B9jqt.js";import{c as Q}from"./clsx-B-dksMZM.js";import{t as X}from"./tailwind-merge-D696Ktp4.js";import{D as u}from"./vaul-BNWM6MW_.js";import{S as Y,L as Z,D,a as O,P as _,T as ee,R as te,F as se,b as ae,H as re,G as ne}from"./lucide-react-BMk7FCUx.js";import{P as ie,a as oe,b as le}from"./react-resizable-panels-Cp8aFBMt.js";import"./scheduler-CzFDRTuY.js";import"./use-sync-external-store-BwwRFFrb.js";import"./@babel-BjXSgPXB.js";import"./@lezer-DXBQe7i_.js";import"./crelt-C8TCjufn.js";import"./@marijn-DXwl3gUT.js";import"./style-mod-Bc2inJdb.js";import"./w3c-keyname-Vcq4gwWv.js";import"./react-remove-scroll-C9novxLy.js";import"./tslib-CDuPK5Eb.js";import"./react-remove-scroll-bar-Czpue0a7.js";import"./react-style-singleton-BIVBt-Vp.js";import"./get-nonce-C-Z93AgS.js";import"./use-sidecar-DzVV1Gvo.js";import"./use-callback-ref-Cdr6255r.js";import"./aria-hidden-DQ5UC2Eg.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=a(r);fetch(r.href,n)}})();const ce={code:`import sys

print("Python", sys.version)

# https://github.com/vwh/python-playground`,output:"Running Python 3.12.7",error:null,direction:"vertical",pyodide:null,isPyodideLoading:!0,isAppLoading:!0,isCodeExecuting:!1,isLibLoading:!1},w=G((t,s)=>({...ce,setCode:a=>t({code:a}),setOutput:a=>t(i=>({output:`${i.output}
${a}`})),clearOutput:(a="")=>t({output:a}),setError:a=>t({error:a}),setDirection:a=>t({direction:a}),initializePyodide:async()=>{if(!window.loadPyodide){t({error:"Pyodide script not loaded.",isPyodideLoading:!1});return}try{const a=await window.loadPyodide();await a.loadPackage("micropip");const i=await a.pyimport("micropip");window.micropip=i,window.pipPackages=[],t({pyodide:a,isPyodideLoading:!1})}catch(a){console.error("Failed to load Pyodide:",a),t({error:"Failed to load Pyodide. Please refresh the page and try again.",isPyodideLoading:!1})}},finishAppLoad:()=>{t({isAppLoading:!1})},pipInstall:async a=>{const{setOutput:i,setError:r}=s(),n=a.replace("pip install ","").trim();if(!(!window.micropip||!n)&&!window.pipPackages.includes(n)){t({isLibLoading:!0});try{window.pipPackages.push(n),await window.micropip.install(n,!0),i(`pip install ${n} successfully installed`),r(null)}catch(o){r(`Failed to install ${n}: ${o.message}`)}finally{t({isLibLoading:!1})}}},runCode:async a=>{const{pyodide:i,setError:r,setOutput:n}=s();if(i){t({isCodeExecuting:!0});try{r(null);const o=[];i.globals.set("print",(...c)=>{const b=c.join(" ");o.push(b),n(o.join(`
`))}),await i.runPythonAsync(a)}catch(o){console.error(o),r(o instanceof Error?o.message:"An unknown error occurred")}finally{t({isCodeExecuting:!1})}}}}));function de(){const{code:t,setCode:s}=w(),a=l.useCallback(i=>{i&&s(i)},[s]);return e.jsx("div",{className:"h-full w-full overflow-hidden rounded-lg shadow-lg",children:e.jsx(V,{value:t,onChange:a,theme:W,extensions:[q],height:"100%",className:"h-full w-full",autoFocus:!0})})}function m(...t){return X(Q(t))}const ue=J("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),y=l.forwardRef(({className:t,variant:s,size:a,asChild:i=!1,...r},n)=>{const o=i?K:"button";return e.jsx(o,{className:m(ue({variant:s,size:a,className:t})),ref:n,...r})});y.displayName="Button";const z=l.forwardRef(({className:t,type:s,...a},i)=>e.jsx("input",{type:s,className:m("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),ref:i,...a}));z.displayName="Input";const E=({shouldScaleBackground:t=!0,...s})=>e.jsx(u.Root,{shouldScaleBackground:t,...s});E.displayName="Drawer";const pe=u.Trigger,me=u.Portal,fe=u.Close,T=l.forwardRef(({className:t,...s},a)=>e.jsx(u.Overlay,{ref:a,className:m("fixed inset-0 z-[100] bg-black/80",t),...s}));T.displayName=u.Overlay.displayName;const I=l.forwardRef(({className:t,children:s,...a},i)=>e.jsxs(me,{children:[e.jsx(T,{}),e.jsxs(u.Content,{ref:i,className:m("fixed inset-x-0 bottom-0 z-[100] mt-24 flex h-auto flex-col rounded-t-[10px] bg-background",t),...a,children:[e.jsx("div",{className:"mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted"}),s]})]}));I.displayName="DrawerContent";const A=({className:t,...s})=>e.jsx("div",{className:m("grid gap-1.5 p-4 text-center sm:text-left",t),...s});A.displayName="DrawerHeader";const F=({className:t,...s})=>e.jsx("div",{className:m("mt-auto flex flex-col gap-2 p-4",t),...s});F.displayName="DrawerFooter";const $=l.forwardRef(({className:t,...s},a)=>e.jsx(u.Title,{ref:a,className:m("text-lg font-semibold leading-none tracking-tight",t),...s}));$.displayName=u.Title.displayName;const B=l.forwardRef(({className:t,...s},a)=>e.jsx(u.Description,{ref:a,className:m("text-sm text-muted-foreground",t),...s}));B.displayName=u.Description.displayName;function R({title:t,children:s}){return e.jsxs("div",{children:[e.jsx("p",{className:"mb-1 text-sm text-muted-foreground",children:t}),e.jsx("div",{className:"flex flex-col gap-1",children:s})]})}function xe(){const{code:t,pipInstall:s,isLibLoading:a}=w(),i=l.useCallback(()=>{const n=new Blob([t],{type:"text/plain"}),o=URL.createObjectURL(n),c=document.createElement("a");c.download="code.py",c.href=o,c.click(),URL.revokeObjectURL(o)},[t]),r=l.useCallback(async n=>{n.preventDefault();const o=new FormData(n.currentTarget).get("lib");await s(o)},[s]);return e.jsxs(E,{children:[e.jsx(pe,{asChild:!0,children:e.jsxs(y,{title:"Open Settings",variant:"secondary",className:"flex items-center space-x-2",children:[e.jsx(Y,{className:"h-5 w-5"}),e.jsx("span",{className:"hidden md:inline",children:"Settings"})]})}),e.jsx(I,{children:e.jsxs("div",{className:"mx-auto w-full max-w-md",children:[e.jsxs(A,{children:[e.jsx($,{className:"text-foreground",children:"Settings"}),e.jsx(B,{children:"Personalize your site experience here."})]}),e.jsxs("div",{className:"flex flex-col gap-4 px-4 py-2 pb-0",children:[e.jsx(R,{title:"Download libraries",children:e.jsxs("form",{className:"flex gap-1",onSubmit:r,children:[e.jsx(z,{type:"text",name:"lib",className:"text-foreground",placeholder:"pip install numpy",disabled:a}),e.jsx(y,{title:"Download library",variant:"secondary",type:"submit",disabled:a,children:a?e.jsx(Z,{className:"h-5 w-5 animate-spin"}):e.jsx(D,{className:"h-5 w-5"})})]})}),e.jsx(R,{title:"Share your code",children:e.jsxs(y,{title:"Download the code",variant:"secondary",onClick:i,className:"flex items-center justify-center",children:[e.jsx(D,{className:"mr-2 h-5 w-5"}),e.jsx("span",{children:"Download Code"})]})})]}),e.jsx(F,{children:e.jsx(fe,{asChild:!0,children:e.jsx(y,{title:"Close the drawer",variant:"secondary",children:"Close"})})})]})})]})}const ge=()=>{const{setDirection:t,direction:s,clearOutput:a,setError:i,runCode:r,code:n,isCodeExecuting:o}=w(),c=l.useCallback(()=>{t(s==="vertical"?"horizontal":"vertical")},[s,t]),b=l.useCallback(()=>{a("Running Python 3.12.7"),i(null)},[a,i]),f=l.useCallback(()=>{r(n)},[r,n]);return e.jsx("nav",{className:"mb-2 w-full rounded-b-lg bg-gray-900 px-4 py-2",children:e.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-1 sm:justify-between md:gap-2",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-1 md:gap-2",children:[e.jsx(k,{onClick:f,disabled:o,icon:o?e.jsx(O,{className:"h-5 w-5 animate-spin"}):e.jsx(_,{className:"h-5 w-5"}),label:"Run",title:"Execute Python Code"}),e.jsx(k,{onClick:b,disabled:o,icon:e.jsx(ee,{className:"h-5 w-5"}),label:"Clear Terminal",title:"Clear Terminal"}),e.jsx(k,{onClick:c,icon:e.jsx(te,{className:"h-5 w-5"}),label:s.substring(0,1).toUpperCase()+s.substring(1),title:"Change direction"})]}),e.jsx("div",{className:"flex items-center",children:e.jsx(xe,{})})]})})},k=l.memo(({onClick:t,disabled:s,icon:a,label:i,title:r})=>e.jsxs(y,{onClick:t,disabled:s,variant:"secondary",className:"text-foreground",title:r,children:[a,e.jsx("span",{className:"ml-2 hidden sm:inline",children:i})]}));k.displayName="NavButton";const he=l.memo(ge);function be(){const{code:t}=w(),s=l.useMemo(()=>({lines:t.split(`
`).length,words:t.trim().split(/\s+/).length,characters:t.length}),[t]);return e.jsx("div",{className:"fixed bottom-1 left-1/2 z-50 hidden -translate-x-1/2 transform rounded-lg border border-accent md:block",children:e.jsxs("div",{className:"tex flex items-center space-x-2 bg-secondary bg-opacity-80 px-4 py-2 text-foreground shadow-lg backdrop-blur-sm",children:[e.jsx(L,{icon:e.jsx(se,{size:16}),value:s.lines,label:"Lines"}),e.jsx(L,{icon:e.jsx(ae,{size:16}),value:s.words,label:"Words"}),e.jsx(L,{icon:e.jsx(re,{size:16}),value:s.characters,label:"Chars"})]})})}function L({icon:t,value:s,label:a}){return e.jsxs("div",{className:"flex items-center gap-1 space-x-1",children:[e.jsxs("div",{className:"flex items-center space-x-1",children:[t,e.jsx("span",{className:"font-medium",children:s})]}),e.jsx("span",{className:"text-xs text-foreground/55",children:a})]})}function ye({text:t}){return e.jsxs("div",{className:"flex items-center gap-1 text-foreground",children:[e.jsx(O,{className:"h-5 w-5 animate-spin"}),e.jsx("p",{className:"font-bold",children:t})]})}function we(){const{output:t,error:s,setOutput:a,isPyodideLoading:i,runCode:r,pipInstall:n,setError:o,clearOutput:c}=w(),[b,f]=l.useState(""),x=l.useRef(null),g=l.useCallback(()=>{x.current&&(x.current.scrollTop=x.current.scrollHeight)},[]);l.useEffect(()=>{g()},[t,g]);const j=l.useCallback(async()=>{await r("import os; print(os.getcwd())")},[r]),N=l.useCallback(async()=>{c("Running Python 3.12.7"),o(null)},[c,o]),v=l.useMemo(()=>({"pip install":async d=>await n(d),"echo ":async d=>await a(d.split(" ").slice(1).join(" ")),pwd:j,cwd:j,clear:N,cls:N}),[n,a,j,N]),h=l.useCallback(async d=>{d.preventDefault();const p=new FormData(d.currentTarget).get("terminalCode");if(!p.trim())return;a(p);const P=Object.entries(v).find(([H])=>p.startsWith(H));P?await P[1](p):await r(p),f("")},[r,a,v]);return i?e.jsx("div",{className:"flex h-full items-center justify-center bg-gray-900",children:e.jsx(ye,{text:"Initializing Python Environment"})}):e.jsxs("div",{ref:x,className:"h-full w-full overflow-y-auto bg-gray-900 px-4 py-3 font-mono text-sm text-gray-300",children:[(s||t)&&e.jsx("div",{className:`whitespace-pre-wrap ${s?"text-red-400":"text-gray-300"}`,children:s||t}),e.jsxs("form",{className:"flex items-center gap-2",onSubmit:h,children:[e.jsx("span",{className:"text-green-400",children:">>>"}),e.jsx("input",{value:b,name:"terminalCode",onChange:d=>f(d.target.value),className:"w-full bg-transparent text-gray-300 outline-none",autoComplete:"off",placeholder:"..."})]})]})}const je=({className:t,...s})=>e.jsx(ie,{className:m("flex h-full w-full data-[panel-group-direction=vertical]:flex-col",t),...s}),S=oe,ve=({withHandle:t,className:s,...a})=>e.jsx(le,{className:m("relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",s),...a,children:t&&e.jsx("div",{className:"z-[99] flex h-16 w-4 items-center justify-center rounded border bg-background dark:border-secondary",children:e.jsx(ne,{className:"h-[12px] w-[12px] text-foreground"})})});function Ne(){const{direction:t,setCode:s,initializePyodide:a,finishAppLoad:i,pipInstall:r,isPyodideLoading:n,isAppLoading:o}=w();return l.useEffect(()=>{const c=f=>[...f.matchAll(/^#\s*@pip\s+([\w\-]+)/gm)].map(g=>g[1]);(async()=>{await a();try{const f=new URLSearchParams(window.location.search),x=f.get("gist"),g=f.get("file");if(x){const j=`https://api.github.com/gists/${x}`,v=await(await fetch(j)).json();if(g){const h=x+g,d=localStorage.getItem(h);if(d!==null){s(d);for(const C of c(d))await r(C)}else{const C=Object.values(v.files);for(const p of C)if(p.filename===g){s(p.content);for(const P of c(p.content))await r(P);localStorage.setItem(h,p.content);break}}}else{const h=Object.values(v.files);if(h.length>0){s(h[0].content);for(const d of c(h[0].content))await r(d)}}}}finally{i()}})()},[a,s]),n||o?e.jsx(Ce,{}):e.jsxs("main",{className:"flex h-screen flex-col bg-background md:mx-2 md:pb-3",children:[e.jsx(he,{}),e.jsxs(je,{className:"border-t border-accent md:rounded-lg md:border",direction:t,children:[e.jsx(S,{defaultSize:65,children:e.jsx(de,{})}),e.jsx(ve,{className:"border-[1px]",withHandle:!0}),e.jsx(S,{defaultSize:35,children:e.jsx(we,{})})]}),e.jsx(be,{})]})}function Ce(){return e.jsx("section",{className:"absolute z-[999] flex h-screen w-full flex-col items-center justify-center gap-3 bg-background text-foreground",children:e.jsxs("div",{className:"relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-background md:shadow-xl",children:[e.jsx("img",{src:"./images/logo.webp",alt:"logo",className:"h-52 w-52 animate-pulse"}),e.jsx("p",{className:"sm:text-1xl mt-2 animate-pulse whitespace-pre-wrap text-center text-xl font-semibold tracking-tighter text-white",children:"Loading..."})]})})}U.createRoot(document.getElementById("root")).render(e.jsx(M.StrictMode,{children:e.jsx(Ne,{})}));
