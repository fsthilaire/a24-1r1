"use strict";(self.webpackChunk_6_r_1_h_24=self.webpackChunk_6_r_1_h_24||[]).push([[3019],{6298:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>o});var s=n(5893),r=n(1151);const t={sidebar_position:1,title:"HWiNFO",slug:"/procedures/detection/hwinfo"},l="HWiNFO",d={id:"procedures/detection/hwinfo",title:"HWiNFO",description:"Pour \xeatre en mesure de d\xe9tecter la configuration mat\xe9rielle, le logiciel HWiNFO sera utilis\xe9 en classe.",source:"@site/docs/procedures/detection/hwinfo.md",sourceDirName:"procedures/detection",slug:"/procedures/detection/hwinfo",permalink:"/a24-1r1/procedures/detection/hwinfo",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"HWiNFO",slug:"/procedures/detection/hwinfo"},sidebar:"tutorialSidebar",previous:{title:"D\xe9tection du mat\xe9riel",permalink:"/a24-1r1/procedures/detection"},next:{title:"WMIC (RamCheck)",permalink:"/a24-1r1/procedures/detection/wmic"}},c={},o=[{value:"1. T\xe9l\xe9chargement",id:"1-t\xe9l\xe9chargement",level:2},{value:"2. Installation",id:"2-installation",level:2},{value:"3. Windows PE - WinPEx64_A24.iso",id:"3-windows-pe---winpex64_a24iso",level:2},{value:"4. Utilisation",id:"4-utilisation",level:2},{value:"4.1. Information g\xe9n\xe9rale",id:"41-information-g\xe9n\xe9rale",level:3},{value:"4.2. M\xe9moire vive",id:"42-m\xe9moire-vive",level:3},{value:"4.3. Disque interne",id:"43-disque-interne",level:3},{value:"4.3.1. D\xe9tail du disque",id:"431-d\xe9tail-du-disque",level:4},{value:"4.3.2. DVD",id:"432-dvd",level:4},{value:"4.3.3. Tiroir SATA",id:"433-tiroir-sata",level:4},{value:"4.4. Processeur",id:"44-processeur",level:3},{value:"4.5. Carte r\xe9seau",id:"45-carte-r\xe9seau",level:3},{value:"4.6. Carte graphique",id:"46-carte-graphique",level:3}];function a(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"hwinfo",children:"HWiNFO"}),"\n",(0,s.jsxs)(i.p,{children:["Pour \xeatre en mesure de d\xe9tecter la configuration mat\xe9rielle, le logiciel ",(0,s.jsx)(i.strong,{children:"HWiNFO"})," sera utilis\xe9 en classe."]}),"\n",(0,s.jsxs)(i.p,{children:["Pour plus d'information : ",(0,s.jsx)(i.a,{href:"https://www.hwinfo.com/",children:"https://www.hwinfo.com/"})]}),"\n",(0,s.jsx)(i.p,{children:"Il arrive pour certains mod\xe8les d'ordinateur ou de pi\xe8ces que l'outil ne soit pas en mesure de faire les d\xe9tections avec tout le d\xe9tail."}),"\n",(0,s.jsxs)(i.admonition,{title:"Important",type:"danger",children:[(0,s.jsxs)(i.p,{children:["La version ",(0,s.jsx)(i.strong,{children:"64 bit"})," est gratuite pour une utilisation ",(0,s.jsx)(i.strong,{children:"non commerciale"}),"."]}),(0,s.jsxs)(i.p,{children:["Si vous utilisez le logiciel dans un contexte de travail ou que vous \xeates r\xe9mun\xe9r\xe9s, ",(0,s.jsx)(i.strong,{children:"vous devez payer les licences applicables"}),"."]}),(0,s.jsx)(i.p,{children:"En tant qu'informaticien, il est important de respecter les conditions d'utilisation de vos logiciels."})]}),"\n",(0,s.jsx)(i.h2,{id:"1-t\xe9l\xe9chargement",children:"1. T\xe9l\xe9chargement"}),"\n",(0,s.jsxs)(i.p,{children:["T\xe9l\xe9chargez le programme ",(0,s.jsx)(i.strong,{children:"portable"})," de ",(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.a,{href:"https://www.hwinfo.com/files/hwi_804.zip",children:"HWiNFO"})}),"."]}),"\n",(0,s.jsx)(i.h2,{id:"2-installation",children:"2. Installation"}),"\n",(0,s.jsxs)(i.p,{children:["Pour utiliser le logiciel, vous devez extraire les 2 ex\xe9cutables du fichier ",(0,s.jsx)(i.strong,{children:"zip"}),"."]}),"\n",(0,s.jsxs)(i.p,{children:["Le fichier ",(0,s.jsx)(i.strong,{children:"HWiNFO64.exe"})," est la version 64 bit."]}),"\n",(0,s.jsxs)(i.p,{children:["Le fichier ",(0,s.jsx)(i.strong,{children:"HWiNFO32.exe"})," est la version 32 bit."]}),"\n",(0,s.jsxs)(i.p,{children:["Veuillez utiliser la version ",(0,s.jsx)(i.strong,{children:"64 bit"}),"."]}),"\n",(0,s.jsxs)(i.p,{children:["Il est possible de copier le fichier ",(0,s.jsx)(i.strong,{children:"HWiNFO64.exe"})," directement sur une cl\xe9 ",(0,s.jsx)(i.strong,{children:"USB"}),", car c'est un logiciel portable."]}),"\n",(0,s.jsx)(i.h2,{id:"3-windows-pe---winpex64_a24iso",children:"3. Windows PE - WinPEx64_A24.iso"}),"\n",(0,s.jsxs)(i.p,{children:["Le logiciel est int\xe9gr\xe9 dans la version de ",(0,s.jsx)(i.strong,{children:"Windows PE"})," qui est utilis\xe9 dans ce cours."]}),"\n",(0,s.jsx)(i.p,{children:"Il suffit d'inscrire la commande ci-dessous."}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{children:"hwinfo64\t\n"})}),"\n",(0,s.jsxs)(i.admonition,{type:"note",children:[(0,s.jsxs)(i.p,{children:["L'utilitaire se retrouve ",(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.code,{children:"x:\\Programs\\hwinfo\\HWiNFO64.exe"})}),"."]}),(0,s.jsxs)(i.p,{children:["Ce dossier est enregistr\xe9 dans la variable ",(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.code,{children:"%path%"})}),".  C'est pour cette raison que l'ex\xe9cutable est accessible dans n'importe quel dossier de travail."]}),(0,s.jsxs)(i.p,{children:["L'extension ",(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.code,{children:".exe"})})," est dans la variable ",(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.code,{children:"%pathext%"})}),". C'est pour cette raison qu'il n'est pas n\xe9cessaire d'inscrire ",(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.code,{children:"hwinfo64.exe"})})," au complet."]})]}),"\n",(0,s.jsx)(i.h2,{id:"4-utilisation",children:"4. Utilisation"}),"\n",(0,s.jsxs)(i.p,{children:["Appuyez sur le bouton ",(0,s.jsx)(i.strong,{children:"D\xe9marrer"}),". Les 2 cases doivent \xeatre d\xe9coch\xe9es."]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:n(3942).Z+"",width:"336",height:"175"})}),"\n",(0,s.jsxs)(i.p,{children:["Il y a 2 fen\xeatres pour afficher l'information. Dans ce cours, vous allez utiliser la ",(0,s.jsx)(i.strong,{children:"fen\xeatre information d\xe9taill\xe9e (en vert)"})," . Il faut fermer la ",(0,s.jsx)(i.strong,{children:"fen\xeatre r\xe9sum\xe9 du syst\xe8me (en rouge)"}),"."]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:n(155).Z+"",width:"1427",height:"744"})}),"\n",(0,s.jsx)(i.h3,{id:"41-information-g\xe9n\xe9rale",children:"4.1. Information g\xe9n\xe9rale"}),"\n",(0,s.jsxs)(i.p,{children:["La section ",(0,s.jsx)(i.strong,{children:"Carte m\xe8re"})," permet d'obtenir de l'information sur l'ordinateur et la carte-m\xe8re."]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Orange : Mod\xe8le de l'ordinateur."}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Bleu : Mod\xe8le de la carte-m\xe8re."}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Rose : Mod\xe8le du ",(0,s.jsx)(i.strong,{children:"Chipset"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:n(8921).Z+"",width:"1394",height:"531"})}),"\n",(0,s.jsx)(i.h3,{id:"42-m\xe9moire-vive",children:"4.2. M\xe9moire vive"}),"\n",(0,s.jsxs)(i.p,{children:["La section ",(0,s.jsx)(i.strong,{children:"M\xe9moire"})," permet de voir la m\xe9moire vive install\xe9e sur la carte-m\xe8re."]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:n(781).Z+"",width:"497",height:"249"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Vert : Num\xe9ro de ligne (\xc0 ne pas confondre avec le num\xe9ro de DIMM)"}),"\n",(0,s.jsx)(i.li,{children:"Bleu : Capacit\xe9 de la m\xe9moire vive"}),"\n",(0,s.jsx)(i.li,{children:"Rose : Marque de la m\xe9moire vive"}),"\n",(0,s.jsx)(i.li,{children:"Orange : Mod\xe8le de la m\xe9moire vive"}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["Dans l'exemple ci-dessous, la mention ",(0,s.jsx)(i.strong,{children:"DIMM"})," est indiqu\xe9e."]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:n(3849).Z+"",width:"595",height:"38"})}),"\n",(0,s.jsxs)(i.admonition,{title:"Avertissement",type:"caution",children:[(0,s.jsxs)(i.p,{children:["Le ",(0,s.jsx)(i.strong,{children:"num\xe9ro de ligne"})," ne correspond pas \xe0 l'identification ",(0,s.jsx)(i.strong,{children:"DIMM"})," inscrite sur la carte-m\xe8re."]}),(0,s.jsx)(i.p,{children:"Dans l'exemple ci-dessus, la ligne 0 est l'emplacement le plus pr\xe8s du processeur et la ligne 3 la plus \xe9loign\xe9e. Mais ceci peut varier d'une carte-m\xe8re \xe0 une autre."}),(0,s.jsxs)(i.p,{children:["L'utilitaire ",(0,s.jsx)(i.strong,{children:"WMIC"})," peut permettre d'avoir l'information du ",(0,s.jsx)(i.strong,{children:"DIMM"}),"."]}),(0,s.jsxs)(i.p,{children:["Ex\xe9cutez la commande ",(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.code,{children:"ramcheck.bat"})})," \xe0 partir de ",(0,s.jsx)(i.strong,{children:"Windows PE"})," du laboratoire pour avoir l'information de la m\xe9moire vive avec ",(0,s.jsx)(i.strong,{children:"WMIC"}),"."]})]}),"\n",(0,s.jsx)(i.h3,{id:"43-disque-interne",children:"4.3. Disque interne"}),"\n",(0,s.jsxs)(i.p,{children:["La section ",(0,s.jsx)(i.strong,{children:"Disques Durs"})," permet de v\xe9rifier les unit\xe9s de stockage et les lecteurs optiques."]}),"\n",(0,s.jsx)(i.p,{children:"La section est en 2 cat\xe9gories"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Lecteurs (S)ATA - ATAPI"})," pour les p\xe9riph\xe9riques qui utilisent le port ",(0,s.jsx)(i.strong,{children:"SATA"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["\u200b\tDans l'exemple ci-dessous, ce sont les \xe9l\xe9ments en orange qui correspondent au disque ",(0,s.jsx)(i.strong,{children:"SSD"})," et ",(0,s.jsx)(i.strong,{children:"HDD"}),"."]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:n(302).Z+"",width:"375",height:"283"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Lecteurs NVMe"})," pour les unit\xe9s de stockage qui utilisent le port ",(0,s.jsx)(i.strong,{children:"NVMe"})]}),"\n",(0,s.jsxs)(i.p,{children:["Dans l'exemple ci-dessous, il s'agit d'un disque ",(0,s.jsx)(i.strong,{children:"NVMe"}),"."]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:n(7617).Z+"",width:"320",height:"74"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"431-d\xe9tail-du-disque",children:"4.3.1. D\xe9tail du disque"}),"\n",(0,s.jsx)(i.p,{children:"Pour avoir plus d'information sur l'unit\xe9 (capacit\xe9, type), il faut le s\xe9lectionner l'unit\xe9 en question."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Vert : Mod\xe8le du disque"}),"\n",(0,s.jsx)(i.li,{children:"Bleu : Taille du disque"}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:n(9860).Z+"",width:"1176",height:"331"})}),"\n",(0,s.jsxs)(i.p,{children:["Pour d\xe9terminer si le disque est ",(0,s.jsx)(i.strong,{children:"SSD"})," ou ",(0,s.jsx)(i.strong,{children:"HDD"}),", il faut v\xe9rifier la ligne ",(0,s.jsx)(i.strong,{children:"Taux de rotation des m\xe9dias"}),"."]}),"\n",(0,s.jsxs)(i.p,{children:["Si la mention ",(0,s.jsx)(i.strong,{children:"RPM"})," est indiqu\xe9e, il s'agit d'un ",(0,s.jsx)(i.strong,{children:"HDD"}),"."]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:n(5585).Z+"",width:"1370",height:"377"})}),"\n",(0,s.jsxs)(i.p,{children:["Si la mention ",(0,s.jsx)(i.strong,{children:"Lecteur SSD"})," est indiqu\xe9e, il s'agit d'un ",(0,s.jsx)(i.strong,{children:"SSD"}),"."]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:n(7557).Z+"",width:"1176",height:"331"})}),"\n",(0,s.jsx)(i.h4,{id:"432-dvd",children:"4.3.2. DVD"}),"\n",(0,s.jsxs)(i.p,{children:["Pour v\xe9rifier si le lecteur optique est correctement branch\xe9, il identifier l'\xe9l\xe9ment qui contient ",(0,s.jsx)(i.strong,{children:"DVD"})," dans son nom."]}),"\n",(0,s.jsx)(i.p,{children:"Dans l'exemple ci-dessous, c'est l'\xe9l\xe9ment en vert."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:n(5169).Z+"",width:"373",height:"283"})}),"\n",(0,s.jsx)(i.admonition,{title:"Avertissement",type:"caution",children:(0,s.jsxs)(i.p,{children:["L'outil ",(0,s.jsx)(i.strong,{children:"HWiNFO"})," ne permet pas d'identifier le num\xe9ro de ",(0,s.jsx)(i.strong,{children:"SATA"}),". Il faut utiliser le ",(0,s.jsx)(i.strong,{children:"BIOS"}),"."]})}),"\n",(0,s.jsx)(i.h4,{id:"433-tiroir-sata",children:"4.3.3. Tiroir SATA"}),"\n",(0,s.jsxs)(i.p,{children:["Pour tester un tiroir ",(0,s.jsx)(i.strong,{children:"SATA"}),", il faut obligatoirement ins\xe9rer un disque \xe0 l'int\xe9rieur. Si aucun disque n\u2019est ins\xe9r\xe9 dans le tiroir SATA, l'outil ne d\xe9tectera pas le tiroir."]}),"\n",(0,s.jsxs)(i.p,{children:["Le disque ins\xe9r\xe9 dans le tiroir doit appara\xeetre ",(0,s.jsx)(i.strong,{children:"Disques Durs -> Lecteurs (S)ATA - ATAPI"}),"."]}),"\n",(0,s.jsxs)(i.admonition,{type:"tip",children:[(0,s.jsx)(i.p,{children:"Pour \xe9viter toute confusion, utilisez un disque d'une taille d\xe9f\xe9rente de ceux install\xe9s dans l'ordinateur."}),(0,s.jsxs)(i.p,{children:["Le disque de ",(0,s.jsx)(i.strong,{children:"Seagate 80 GB"})," sera utilis\xe9 uniquement pour tester le tiroir ",(0,s.jsx)(i.strong,{children:"SATA"}),". Il ne sera jamais utilis\xe9 pour une configuration utilisateur."]})]}),"\n",(0,s.jsx)(i.h3,{id:"44-processeur",children:"4.4. Processeur"}),"\n",(0,s.jsxs)(i.p,{children:["La section ",(0,s.jsx)(i.strong,{children:"Processeur(s) central(s)"})," permet d'obtenir l'information du processeur."]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Orange : Mod\xe8le du processeur"}),"\n",(0,s.jsx)(i.li,{children:"Bleu : Nombre de coeurs"}),"\n",(0,s.jsx)(i.li,{children:"Vert : Nombre de processeurs logiques"}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:n(9263).Z+"",width:"1429",height:"741"})}),"\n",(0,s.jsx)(i.h3,{id:"45-carte-r\xe9seau",children:"4.5. Carte r\xe9seau"}),"\n",(0,s.jsxs)(i.p,{children:["La section ",(0,s.jsx)(i.strong,{children:"R\xe9seau"})," permet de voir toutes les cartes r\xe9seau de l'ordinateur."]}),"\n",(0,s.jsxs)(i.p,{children:["Les cartes r\xe9seau peuvent \xeatre ",(0,s.jsx)(i.strong,{children:"filaire (RJ45)"})," ou ",(0,s.jsx)(i.strong,{children:"sans-fil"}),"."]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:n(6673).Z+"",width:"442",height:"221"})}),"\n",(0,s.jsxs)(i.admonition,{title:"Avertissement",type:"caution",children:[(0,s.jsx)(i.p,{children:"Les cartes int\xe9gr\xe9es \xe0 la carte-m\xe8re seront incluses dans cette section."}),(0,s.jsxs)(i.p,{children:["Si vous ajoutez une carte r\xe9seau ",(0,s.jsx)(i.strong,{children:"PCI / PCI Express"}),", il faut s'assurer qu'elle est bien dans la liste."]})]}),"\n",(0,s.jsx)(i.h3,{id:"46-carte-graphique",children:"4.6. Carte graphique"}),"\n",(0,s.jsxs)(i.p,{children:["La section ",(0,s.jsx)(i.strong,{children:"Adaptateur graphique"})," permet de voir toutes les cartes graphiques de l'ordinateur."]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:n(1565).Z+"",width:"287",height:"81"})}),"\n",(0,s.jsxs)(i.admonition,{title:"Avertissement",type:"caution",children:[(0,s.jsx)(i.p,{children:"La carte int\xe9gr\xe9e \xe0 la carte-m\xe8re sera incluse dans cette section."}),(0,s.jsx)(i.p,{children:"Si vous ajoutez une carte graphique, il faut s'assurer qu'elle est bien dans la liste."})]})]})}function h(e={}){const{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},3942:(e,i,n)=>{n.d(i,{Z:()=>s});const s=n.p+"assets/images/hwinfo_1-654a67af57b4b95869ff0121433c0640.png"},9263:(e,i,n)=>{n.d(i,{Z:()=>s});const s=n.p+"assets/images/hwinfo_10-b49100acaf2a87b5886b49e46f12f06a.png"},6673:(e,i,n)=>{n.d(i,{Z:()=>s});const s=n.p+"assets/images/hwinfo_11-bcd3ff49babec34616e158f815301e16.png"},3849:(e,i,n)=>{n.d(i,{Z:()=>s});const s="data:image/png;base64,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"},7617:(e,i,n)=>{n.d(i,{Z:()=>s});const s="data:image/png;base64,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"},1565:(e,i,n)=>{n.d(i,{Z:()=>s});const s="data:image/png;base64,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"},155:(e,i,n)=>{n.d(i,{Z:()=>s});const s=n.p+"assets/images/hwinfo_2-d526ef83bb296f344449aca228c95e38.png"},8921:(e,i,n)=>{n.d(i,{Z:()=>s});const s=n.p+"assets/images/hwinfo_3-9d0aead82d1b3412d2df68f62e618f47.png"},781:(e,i,n)=>{n.d(i,{Z:()=>s});const s=n.p+"assets/images/hwinfo_4-e68f8a5a426513fa550d795df5a30bee.png"},5169:(e,i,n)=>{n.d(i,{Z:()=>s});const s=n.p+"assets/images/hwinfo_5-a5dbefbfd1dfb15a8034ea4141d3be15.png"},302:(e,i,n)=>{n.d(i,{Z:()=>s});const s=n.p+"assets/images/hwinfo_6-34c51c06e3d9404f4287f9b854aefc54.png"},9860:(e,i,n)=>{n.d(i,{Z:()=>s});const s=n.p+"assets/images/hwinfo_7-99f5bba9448adb19c70090a9551ba3d9.png"},5585:(e,i,n)=>{n.d(i,{Z:()=>s});const s=n.p+"assets/images/hwinfo_8-ed797e778c96c43caa7e2d4889bcb401.png"},7557:(e,i,n)=>{n.d(i,{Z:()=>s});const s=n.p+"assets/images/hwinfo_9-bed26566ba1c5fcdb7946f21c896b8bd.png"},1151:(e,i,n)=>{n.d(i,{Z:()=>d,a:()=>l});var s=n(7294);const r={},t=s.createContext(r);function l(e){const i=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(t.Provider,{value:i},e.children)}}}]);