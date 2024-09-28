"use strict";(self.webpackChunk_6_r_1_h_24=self.webpackChunk_6_r_1_h_24||[]).push([[2631],{5870:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var i=s(85893),n=s(11151);const t={sidebar_position:3,title:"Cl\xe9 USB d\xe9marrable",slug:"/theorie/autres/cle-usb-boot"},l="Cl\xe9 USB d\xe9marrable",o={id:"theorie/autres/cle_usb_demarrable",title:"Cl\xe9 USB d\xe9marrable",description:"1. Explication",source:"@site/docs/theorie/autres/cle_usb_demarrable.md",sourceDirName:"theorie/autres",slug:"/theorie/autres/cle-usb-boot",permalink:"/a24-1r1/theorie/autres/cle-usb-boot",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Cl\xe9 USB d\xe9marrable",slug:"/theorie/autres/cle-usb-boot"},sidebar:"tutorialSidebar",previous:{title:"Fichier image",permalink:"/a24-1r1/theorie/autres/fichier-image"},next:{title:"Machine virtuelle",permalink:"/a24-1r1/theorie/autres/machine-virtuelle"}},a={},c=[{value:"1. Explication",id:"1-explication",level:2},{value:"2. Logiciels de cr\xe9ation",id:"2-logiciels-de-cr\xe9ation",level:2},{value:"2.1. Rufus",id:"21-rufus",level:3},{value:"2.2. Ventoy",id:"22-ventoy",level:3}];function u(e){const r={a:"a",h1:"h1",h2:"h2",h3:"h3",p:"p",strong:"strong",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"cl\xe9-usb-d\xe9marrable",children:"Cl\xe9 USB d\xe9marrable"}),"\n",(0,i.jsx)(r.h2,{id:"1-explication",children:"1. Explication"}),"\n",(0,i.jsxs)(r.p,{children:["Une cl\xe9 USB d\xe9marrable consiste \xe0 installer un syst\xe8me d'exploitation ",(0,i.jsx)(r.strong,{children:"live"})," ou le programme d'installation d'un syst\xe8me d'exploitation sur une cl\xe9 USB."]}),"\n",(0,i.jsxs)(r.p,{children:["Cette cl\xe9 USB est d\xe9tect\xe9e par le ",(0,i.jsx)(r.strong,{children:"BIOS"})," au d\xe9marrage de l'ordinateur et celui-ci est en mesure d'utiliser son contenu pour charger le syst\xe8me d'exploitation ou le programme d'installation."]}),"\n",(0,i.jsxs)(r.p,{children:["Le terme utiliser en anglais est ",(0,i.jsx)(r.strong,{children:"Bootable USB Key"}),"."]}),"\n",(0,i.jsxs)(r.p,{children:["Il n'est pas suffisant de copier les fichiers du programme d'installation ou du ",(0,i.jsx)(r.strong,{children:"OS live"})," sur la cl\xe9 USB.  Il faut pr\xe9parer la partition convenablement pour que le ",(0,i.jsx)(r.strong,{children:"BIOS"})," soit en mesure de l'utiliser comme support d\xe9marrable."]}),"\n",(0,i.jsxs)(r.p,{children:["Il existe plusieurs logiciels qui permettent de cr\xe9er une cl\xe9 d\xe9marrable automatiquement \xe0 partir d'un fichier ",(0,i.jsx)(r.strong,{children:"ISO"}),"."]}),"\n",(0,i.jsx)(r.h2,{id:"2-logiciels-de-cr\xe9ation",children:"2. Logiciels de cr\xe9ation"}),"\n",(0,i.jsx)(r.p,{children:"Il est possible de cr\xe9er manuellement une cl\xe9 USB d\xe9marrable. Cependant, l'utilisation de logiciels sp\xe9cialis\xe9s est plus conviviale."}),"\n",(0,i.jsx)(r.h3,{id:"21-rufus",children:"2.1. Rufus"}),"\n",(0,i.jsxs)(r.p,{children:["Le logiciel ",(0,i.jsx)(r.strong,{children:"Rufus"})," est l\u2019un des plus populaires pour cr\xe9er des cl\xe9s USB d\xe9marrables."]}),"\n",(0,i.jsxs)(r.p,{children:["Il permet de cr\xe9er la partition et de copier le contenu d'un fichier ",(0,i.jsx)(r.strong,{children:"ISO"}),"."]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"Rufus"})," offre comme avantage d'avoir plusieurs options de configurations."]}),"\n",(0,i.jsxs)(r.p,{children:["Il est possible de t\xe9l\xe9charger directement les ",(0,i.jsx)(r.strong,{children:"ISO"})," de Windows."]}),"\n",(0,i.jsxs)(r.p,{children:["Le d\xe9savantage de ",(0,i.jsx)(r.strong,{children:"Rufus"})," est que la cl\xe9 USB peut contenir uniquement un seul ",(0,i.jsx)(r.strong,{children:"ISO"})," \xe0 la fois."]}),"\n",(0,i.jsxs)(r.p,{children:["Voici le lien pour t\xe9l\xe9charger ",(0,i.jsx)(r.strong,{children:"Rufus"})," : ",(0,i.jsx)(r.a,{href:"https://rufus.ie/fr/",children:"https://rufus.ie/fr/"})]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"Rufus"})," ne sera pas utilis\xe9 dans ce cours."]}),"\n",(0,i.jsx)(r.h3,{id:"22-ventoy",children:"2.2. Ventoy"}),"\n",(0,i.jsxs)(r.p,{children:["Le logiciel ",(0,i.jsx)(r.strong,{children:"Ventoy"})," est celui qui sera utilis\xe9 dans le cours."]}),"\n",(0,i.jsx)(r.p,{children:"Il permet de cr\xe9er la partition de d\xe9marrage et la partition des fichiers images."}),"\n",(0,i.jsxs)(r.p,{children:["Le principal avantage de ",(0,i.jsx)(r.strong,{children:"Ventoy"})," est qu'il est possible de copier plusieurs fichiers ",(0,i.jsx)(r.strong,{children:"ISO"})," sur la cl\xe9 USB. ",(0,i.jsx)(r.strong,{children:"Ventoy"})," s'occupe de lire le contenu du fichier image et de l'ex\xe9cuter."]}),"\n",(0,i.jsxs)(r.p,{children:["Ce logiciel est tr\xe8s pratique pour le technicien, car il a g\xe9n\xe9ralement besoin de plusieurs ",(0,i.jsx)(r.strong,{children:"ISO"})," pour son travail."]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"Ventoy"})," est tr\xe8s versatile, car il utilise principalement le ",(0,i.jsx)(r.strong,{children:"ISO"}),", mais il peut travailler avec d'autres formats de fichier image."]}),"\n",(0,i.jsxs)(r.p,{children:["Par contre, il arrive tr\xe8s rarement que ",(0,i.jsx)(r.strong,{children:"Ventoy"})," ne soit pas en mesure de lire un fichier image correctement. Il faut donc utiliser ",(0,i.jsx)(r.strong,{children:"Rufus"})," ou un autre logiciel en fonction du type d'image."]}),"\n",(0,i.jsxs)(r.p,{children:["Voici le lien pour t\xe9l\xe9charger ",(0,i.jsx)(r.strong,{children:"Ventoy"})," : ",(0,i.jsx)(r.a,{href:"https://www.ventoy.net/en/index.html",children:"https://www.ventoy.net/en/index.html"})]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"Ventoy"})," sera utilis\xe9 dans ce cours."]})]})}function d(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},11151:(e,r,s)=>{s.d(r,{Z:()=>o,a:()=>l});var i=s(67294);const n={},t=i.createContext(n);function l(e){const r=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),i.createElement(t.Provider,{value:r},e.children)}}}]);