"use strict";(self.webpackChunk_6_r_1_h_24=self.webpackChunk_6_r_1_h_24||[]).push([[1284],{43969:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>o,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var i=s(85893),r=s(11151);const t={sidebar_position:5,title:"Cr\xe9er une machine virtuelle pour WinPE",slug:"/procedures/utilitaires/virtualbox/creer-vm-winpe"},d="Cr\xe9er une machine virtuelle pour Windows PE",l={id:"procedures/utilitaires/virtualbox/creer_vm_winpe",title:"Cr\xe9er une machine virtuelle pour WinPE",description:"Voici la proc\xe9dure pour cr\xe9er une machine virtuelle pour ex\xe9cuter Windows PE.",source:"@site/docs/procedures/utilitaires/virtualbox/creer_vm_winpe.md",sourceDirName:"procedures/utilitaires/virtualbox",slug:"/procedures/utilitaires/virtualbox/creer-vm-winpe",permalink:"/a24-1r1/procedures/utilitaires/virtualbox/creer-vm-winpe",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Cr\xe9er une machine virtuelle pour WinPE",slug:"/procedures/utilitaires/virtualbox/creer-vm-winpe"},sidebar:"tutorialSidebar",previous:{title:"Modifier la m\xe9moire vive",permalink:"/a24-1r1/procedures/utilitaires/virtualbox/modif_ram"},next:{title:"Modifier le nombre de processeurs",permalink:"/a24-1r1/procedures/utilitaires/virtualbox/modif_cpu"}},c={},a=[{value:"1. Copie du ISO",id:"1-copie-du-iso",level:2},{value:"2. Cr\xe9ation de la machine virtuelle",id:"2-cr\xe9ation-de-la-machine-virtuelle",level:2},{value:"3. Pour ex\xe9cuter la VM",id:"3-pour-ex\xe9cuter-la-vm",level:2},{value:"4. Pour fermer la VM",id:"4-pour-fermer-la-vm",level:2}];function A(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"cr\xe9er-une-machine-virtuelle-pour-windows-pe",children:"Cr\xe9er une machine virtuelle pour Windows PE"}),"\n",(0,i.jsxs)(n.p,{children:["Voici la proc\xe9dure pour cr\xe9er une machine virtuelle pour ex\xe9cuter ",(0,i.jsx)(n.strong,{children:"Windows PE"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"\xc0 partir de cette machine virtuelle, vous serez en mesure de faire les exercices de la semaine 6."}),"\n",(0,i.jsx)(n.h2,{id:"1-copie-du-iso",children:"1. Copie du ISO"}),"\n",(0,i.jsxs)(n.p,{children:["Cr\xe9ez le dossier ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"c:\\iso\\"})})," dans votre ordinateur."]}),"\n",(0,i.jsxs)(n.p,{children:["Copiez le fichier ISO ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"WinPEx64_A24.iso"})})," de votre cl\xe9 USB vers le dossier ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"c:\\iso"})})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(29547).Z+"",width:"975",height:"156"})}),"\n",(0,i.jsx)(n.h2,{id:"2-cr\xe9ation-de-la-machine-virtuelle",children:"2. Cr\xe9ation de la machine virtuelle"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Ouvrez le logiciel ",(0,i.jsx)(n.strong,{children:"VirtualBox"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Si vous n'avez pas install\xe9 le logiciel, veuillez vous r\xe9f\xe9rer au document ",(0,i.jsx)(n.a,{href:"/a24-1r1/procedures/utilitaires/virtualbox/installation",children:(0,i.jsx)(n.strong,{children:"Proc\xe9dures -> Utilitaires ->  VirtualBox -> Installation de VirtualBox"})}),"."]})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["S\xe9lectionnez l'\xe9l\xe9ment ",(0,i.jsx)(n.strong,{children:"Outils"})," \xe0 gauche et appuyez sur le bouton ",(0,i.jsx)(n.strong,{children:"Nouveau"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(53655).Z+"",width:"1101",height:"108"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Inscrivez les informations ci-dessous dans la section ",(0,i.jsx)(n.strong,{children:"Name and Operating System"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Nom"})," : Windows PE"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type"})," : Microsoft Windows"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Version"})," : Other Windows (64-bit)"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(83285).Z+"",width:"800",height:"559"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Dans la section ",(0,i.jsx)(n.strong,{children:"Hardware"}),", inscrivez ",(0,i.jsx)(n.strong,{children:"1024 MB"})," pour la capacit\xe9 de la m\xe9moire vive. Il faut 1 Go pour \xeatre en mesure de faire fonctionner ",(0,i.jsx)(n.strong,{children:"Windows PE"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(63906).Z+"",width:"801",height:"562"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Dans la section ",(0,i.jsx)(n.strong,{children:"Hard Disk"}),", s\xe9lectionnez l'option ",(0,i.jsx)(n.strong,{children:"Do not Add a Virtual Hard Disk"}),". Il n'est pas n\xe9cessaire de cr\xe9er un disque interne virtuel."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(80033).Z+"",width:"798",height:"555"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Appuyez sur le bouton ",(0,i.jsx)(n.strong,{children:"Finish"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(52029).Z+"",width:"803",height:"559"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["S\xe9lectionnez la machine virtuelle ",(0,i.jsx)(n.strong,{children:"Windows PE"})," dans la section de gauche. Appuyez sur le bouton ",(0,i.jsx)(n.strong,{children:"Configuration"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(97654).Z+"",width:"1049",height:"169"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["S\xe9lectionnez l'onglet ",(0,i.jsx)(n.strong,{children:"Stockage"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(62582).Z+"",width:"846",height:"497"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["S\xe9lectionnez le lecteur ",(0,i.jsx)(n.strong,{children:"DVD"})," dans la section ",(0,i.jsx)(n.strong,{children:"P\xe9riph\xe9riques"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(95334).Z+"",width:"852",height:"499"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Appuyez sur l'ic\xf4ne ",(0,i.jsx)(n.strong,{children:"DVD"})," dans la section ",(0,i.jsx)(n.strong,{children:"Attributs"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(77020).Z+"",width:"855",height:"500"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Dans le menu, s\xe9lectionnez l'item ",(0,i.jsx)(n.strong,{children:"Choose a Disk File..."}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(35286).Z+"",width:"444",height:"184"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Dans l'explorateur de fichiers, s\xe9lectionnez le fichier iso ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"c:\\iso\\WinPEx64_A24.iso"})})," et appuyez sur le bouton ",(0,i.jsx)(n.strong,{children:"Ouvrir"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(84303).Z+"",width:"948",height:"535"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Le fichier ",(0,i.jsx)(n.strong,{children:"ISO"})," est visible dans la section ",(0,i.jsx)(n.strong,{children:"P\xe9riph\xe9riques"}),". Appuyez sur le bouton ",(0,i.jsx)(n.strong,{children:"OK"})," pour appliquer la configuration."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(41152).Z+"",width:"830",height:"482"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"3-pour-ex\xe9cuter-la-vm",children:"3. Pour ex\xe9cuter la VM"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["S\xe9lectionnez la machine virtuelle ",(0,i.jsx)(n.strong,{children:"Windows PE"})," dans la section de gauche. Appuyez sur le bouton ",(0,i.jsx)(n.strong,{children:"D\xe9marrer"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(65151).Z+"",width:"1174",height:"488"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Appuyez sur l'icone pour fermer la zone de message."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(35803).Z+"",width:"1026",height:"847"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Cliquez dans l'invite de commandes de ",(0,i.jsx)(n.strong,{children:"Windows PE"})," pour d\xe9buter l'utilisation du syst\xe8me."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(71813).Z+"",width:"1026",height:"842"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"4-pour-fermer-la-vm",children:"4. Pour fermer la VM"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Appuyez sur le ",(0,i.jsx)(n.strong,{children:"X"})," de la fen\xeatre de la machine virtuelle."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(81370).Z+"",width:"1024",height:"846"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["S\xe9lectionnez l'option ",(0,i.jsx)(n.strong,{children:"\xc9teindre la machine"})," et appuyez sur le bouton ",(0,i.jsx)(n.strong,{children:"OK"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(61688).Z+"",width:"281",height:"187"})}),"\n"]}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(A,{...e})}):A(e)}},29547:(e,n,s)=>{s.d(n,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA88AAACcCAIAAADOGw5QAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAACL6SURBVHhe7d3bcxTn/edx/gLuuWCrfne+TaUqF7+qvXDV5nflqlxsbW35YmvZi5D8fonxAR8SbHzabJz95UcF7OCYBAcw2IiADQYJIQ7CGLzGYAwSZ4QkQBISOiDQaWZ0mv12P08//fRppkfSiNHM+1Ud+emnv/300z0a5qNWQ5blAQAAAJQHaRsAAAAoF9I2AAAAUC6kbQAAAKBcFi9tDw8PDw0NDcriGpDF1T8gzcFcLqfrAAAAgGrhpe2BfbMD+0evrBu59NzE1bXZG69Ntq2ban9z9t7vdUFB69at061kjY2N33777ZUrVy5fvtJ6+XJLa2tLS+uFH36o27Pn1KlTp0+fGRsb06UJZkavTHQfyHR/kb1/YLLv4OSD+umBxpmhppnhk/mZSV20QNKcEQAAAFCYSdv/yA8eyA8fzbT9cfzKS5lrr+Ru/Xaqff3s3f+jCwr6y1/+olvJ6hsaurq6pqamJtUyOZWbnJqYmGhoaOjp6Tl37tzFixcnJwuG5qFjU/d3jra+Mtr6vP6R4Pbr0x1vz9z9fX46q2sWSJozAgAAAAozaXtPfqDODdzHxi+/mLn2cu7ma1O3X5+98791QUGffvqpbiU7dKhe0rYbsidzOWfJ5ibH3bT9/vvvb9y06URzczZbMDQPH5MZzvR/MX71dXeSr+Ta1k13vDV793cLnraTzqilpWXlypXyVa8DAAAAyUzarsv31+Uf7MwPNY61vjBx9aXsjVcn29bN3HlXFxSULm0funfvnknbErWdJZvLjI5MPOzvud97/MSJYmm7Sf1IkO3YKJPMXFubu/mbqfb1ziQXK20DAAAA6Xlpu/+z/INd+d5t+YH9I5eeG7/8Qub6y5JlZzrf1gUFpcmmB7788u7du+qutpe2c5nhgZF/vPvo/f/Rc/fOsePHi6XtI/n+3TLV7O3/GG1ZM3HlRfmRYOr2GzOd7+SnM7pmgZC2AQAAMH8mbX+af7Aj37s137/38cVfj7U+79w5vvHaTOdbuqCgNNl0/4EDd9y0re9q53LZsZGRPe8++tU/jZ7Y0dPVdfTYsSJpe6jR+ZGgb2em7d/VjwTZ6684N+BlkinS9rI4eltE0hkNDg4+9dRTLS0tExMTTz/9tBqkvr5eNknn8uXL7R4AAADUOC9uPtjp3Ni+/9f8g7rHP/xqrGXNxNWXcjdenel4UxcUlCpt79/feefO+IUjmcFeJ2rncmNn9j1a/Z9Gj++YGBvt7rnfdPRoirS9I9+3beLW751JOj8SvDx567fOJFOk7ZnZmCVJ0bQteXrVqlW61+1fsWKFid0rV65U/QAAAKhlXtru2+7c2L7/Ub5v16ML/6ae08jdeGWmY31+5KKuSZYmbe/7/PPOzjsPX/vJyJZfTnTdGju979HP/2nsy40TI48nMtnu7p6mpmJpe7De+ZGgd+vEjd/JJOVHgszVtZO3fjPTvj4/OaxrFkjRtC2WL1++YcMG1S+r0i9b1aodxAEAAFCzvLQtUbvno3z3B/n7W4e//+XIpV+7z2m8PN2+fvbOO7omWZq0vXffvs7OzvHblx69+S8jb/yXR/9z5eiBjROPhyVqj09kurq7G5uaiqTtgS/zvX/L398yfv2d4e//1f2nwV+avPnadPsbM72f6JqC1GMehu6NUzRtq1VJ2zJOfX09aRsAAABRXuK8/9d8z4f57s2zXZuDafuNBUvbe/e2d3RmMpnxa98Nv/SfR4/uUHe1JWqrtH24eNren+/Zku/ZPH7tzeHzziSdG/A3X005STEz6wfuAo+RiJRpW0jgFtJvP0kiNWorAAAAapmXtnv+4tzY7vpg6Ps1Xtp+Pnt97QKm7bo9krY7MpnsxETGuaU9LhlbR21Z7nV1Hz7cWCxtf65+JBi78vrD87/QafvGq9POvwueKm0LFbgLR21RNG1LsFapXUK2uqUtnepvScpXO44DAACgZnlpu3tzvmtTvmtj7+n/5aTti78ac9K2c297+u57uiZZmrS9u66uvb1DEra/eFHbTdtd9Q2Hi6TtB3vlR4Kpjj8OnP2FStvjV15Qadv5RwBTKxq1RZozAgAAAAqznl0evZy/8391uwx27959u71d/9t/kUXS9qGGhkymYNoeOpq/t2n63uax7saJ+0ezfcdy/SemBr+afvj1zOOzugYAAACoGMG/KbjQ/7KH7dPduz/++7ZPdu3asXPn9h2fbNu+4+Nt27Z+/Pe/bv14y9+2frD5w0P19ZlMwX/Ib3o8/+jbfO92vQoAAABUtmDaLqepqalsgowsmawUzM4We8hjdiafG9JtAAAAoLItXtoGAAAAag1pGwAAACgX0jYAAABQLsv++3/7r0ti0fMFAAAAlg7SNgAAAFAupG0AAACgXEjbAAAAQLmQtgEAAIByIW0DAAAA5ULaBgAAAMqFtA0AAACUS5q0vemcLnb07F/r9nz3QbhMFunvPvBytDO2uLRFHz69O9ue/dGz2+7otQVyav2P1p/SjQUf3CbjG2kOVO75zFvk5VBnqLqstjTVFQ6p+BMEAACIkzJtRzN07JK+suRFzzc1SXfr168vW0Ard/izxneiaGwAtVV6GI28HPaE00y+0k8QAAAg1tzStt0jbde5Tbp//3eqw70LXqBYbzp3rjvf88WrzmqhRe2XmpPuTklECyQ0J7c6dHa1V5PCX3QXtcmuKYfQHOTwzs1hxdvg1EiC/dGzz3pb1KZopZBi1bMt+ezKJ/RyeMd1jmy31abY6bn9MneXV1GBZwoAABBQ8pMk5zapHh2gP5BtOjp7lWp1k2Ru9QBJoNjdfe2BHtXj1HuhvMiijp6WSnduyDL5yglcVtgKrsqancx029tdhlM9ZpNdXw7++E6iDBzKm5TTMFti52Mq/c1uPtWV3mZzdmUT83LYE45vS8tUqzXrvP0NLunSPWb/J3OmAAAAQfO8tx3aZK9Ga6ThC6X2ooveLZ1A+ArHMKXAqmlLw+cOY2+yd19w9qH1CVh90TkE55Oq0i8S3jHKQo5U8OWIbdudIqFemlp0L9P2i0RZzxQAACBkkdO2XRzbk7jo+aYSSFdevrJzmCiwatqhGlFg08KKjO93xM7BaqettDvLSg5ki74caaYXV+P3xe4V2wkAALCo5pm21x7osR8FsStNO6nY3lR80fNNQ8KVdQPTW3OeLLAyV8yq3kl20FtCNWLRAlxkfO80rOnZNVY7ptI6kdjOsjLzcXlr8l9z8Nh2aHpxNfLfijpTAACAiDL8LUm/X7Wtzpe/6FHFkUe6iy56vxRMBtP8dSd/+XdXQ6ve2o/Wr/eDnZPTdK9XpDaZRplExzezNdML1KjN7nq00jqRQmdXFjKbwOh63Z58gbaZXWyNKaiIMwUAAIhKk7YrYtHzxfw4sdOk1qpWO2cKAAAqGWm7Jvj3dqs9gdbOmQIAgCWBtA0AAACUC2kbAAAAKBfSNgAAAFAupG0AAACgXEjbAAAAQLksu9V2m4WFhYWFhYWFhYWlHMsynboBAAAALDTSNgAAAFAupG0AAACgXEjbAAAAQLmQtgEAAIByIW0DAAAA5ULanpebAAAAQDLS9rzIFdQtAAAAIIK0PS+kbQAAABRA2p6XUNqeHbua6fky27M/1/vl1INDU/0NM4NHZh8enX30VX52ShcBAACgZpC2Y4yNjU1MTOiVgsL3th8em7q/c7T1ldHW5yeurs3eeG3y9uvTHW/P3nsvP5PTNQAAAKgZc0nbs7Oz3d3deqUMstmsbj0JErU3b9780UcfjY+P665k4bQ9fCw/eGCm/4vxq6+PX34xc+2VXNu66Y63Zu/+jrQNAABQg0pO2xK1d+/e/fbbb3d1demuBSVRu7Oz88GDB3p9cUnClqgtZyckcBe9wx1J20fzA3USuLMdG8daX8hcW5u7+Zup9vUzd94tR9qW6T399NPLXNIoPNvBwcEVK1ao4uXLl7e0tOgNJY6Tnn1EsWHDBtUvh165cqU9gQUkB33qqafmM3jSCDL/VatWqXaBKyY15kwXRFkvFwAAKLfS0raJ2nV1ddLWvQutv7//iQRuO2orRQN3JG035ft35/s/y97+j9GWNRNXXszeeHXq9hszne/kZxb4hr3ELwnN9fX1ZrW5uVm1Y9khUuKgyYiljpOefUSVvE1aLZ8ypW1Z/dnPfpbmikmNVM5nAgAAoJqUkLYXJ2orcw7ck5OT3333nV7J58+dOyc9eqUgE7VN4P7zn/8sXwsH7shz20fyD3bl+3Zm2v595NJz45dfyF5/ZbJt3UznW2nSthyoqalpenparyeTSonLJvClEcq+qj2HcdJPMhRbpSGr0qlWyyQ2K5ckdgT5+UTdsU5zxWRr0Z8r0l9GAACwpKVN24sZtZW5BW6J2jJJda/x5MmT0rbDdxI7aktbGmJ0dLRo4I6k7cb8gx35vm0Tt37/+IdfjbU+n7n28uSt3850vJkmbR85ckQOt2vXrqIhrEBylU3Lly9ftmzZihUr7AI7RJq2SBonSfpJ2kcUJqeaftWjnsdQ+VU61eTXrVunamKnbVcWOE1TI0w+jh5UkrFaVRHZHkGRXcztavkqW+0jKjKUDKu+T6TG3AhPMofLWOBymR4AAFBpUqVtE7UL09UlkkhdWKmBW6K2TOZPf/qTfE35UMSZM2ekWEVtWXVOxj0dE7jPnj3rFoaF0/ZQQ753W75368SN3z268G9jLWsyV9dO3vrNTPv6/NQjXZNMgpfELzlc0RCWlOfspCjxS92OVexN0q+iYdI4BaSfZCi2qrAoszL90rbvAUu/RGeVGmWGkiOlxh7EtO3OpNO0R5NV9eizmoNdb8QOrkjPj3/8Y/kqbemPvWJyIJO27fokc7iMBS6XbOXZbgAAKlPatL13715JBoXp6hLpTJ2sv79fl6amAnfKqK188803KmoL+3QkcMsm1Y4Kp+3Bg/nev+Xvbxm//s7w9/86cum5iasvTd58bbr9jdm+nbqmoFwu94c//EGOfurUKd0VR3KVJLBonpN+c7NTRMOZ6jf3g5PGKSzlJGVYO7ZKElV3iE2/kNma7CurJsiaGnuQ0I7qXEToNE2NNGRV9UuNBNNQpyL9apxovlekx07b0RFCzJnq9QSlXkYRulzRE1RtAABQOUp4kkQF7k8//XRxniTp6+ubW9RW7t69q1ulk9MUeqWgSNo+kO/Zku/ZPH7tzeHzvxy59OuJKy/mbr7qpO077+iaZOnvd0qeU/eJ9bonlMBsJrTpdVfSOAXM4aasWjVzC/VLfJSkq6Jw+rSthnIHCEiqSUrbpsdEZDOCrnDHNGk7zRWz65PM+TLalyt6gqoNAAAqR2l/S3LRAvc8o/Y8yTkKvVJQOG0PfJHv+TDfvXnsyusPz/9Cp+0br07ffj1N2k7/LK+QaKVSl1qV7NXc3CzZa8WKFYWflNDrnthxVDvW3J7bVhNTR4nORCYs7BpZVXea7XQrX83t56KnaY8mqyqYqtHsHaVAeqRfatTDGGYEXRG5Vy27RK+YGUf1mB8bksz58XfhXKzg5ZKt6gRVAQAAqBwlpG2xOIH7yUZtISco9EpB4bTdvzff/cFUxx8Hzv5Cpe3xKy94aftdXZNM8llJ/06FZCzzQIUd9Uxn7CMWet0SO06S9JNUcVANq1Ky6VczUbFVSJlKiqbH/C1Ju/OZZ54xnfack07T1ISObmYlI8vpyClL+yc/+clPf/pTKbNHMFTA1StxV0yGMpdO2vaUYpV0GZMul5mGfYIAAKCilJa2hQnc9+/f110LKpfLPdmoLeaeth8ey3e9P9P14XjPkUzv0dyD45MDzdNDp2aGT8+OFP+nUWDERt4nSGZS9Ha1IjX2jXAAAFDjSk7bQgJ3b2+vXikDCdy69YTMPW3PjOcfn8337tCrmKtKS9tig/X/JVmA1KQpAwAANWIuaRtGOG2L2Zn85EPdxlxVYNoGAACYA9L2vMSkbQAAAMBD2p4X0jYAAAAKIG3PC2kbAAAABZC250XSNgAAAJCEtA0AAACUC2kbAAAAKBfSNgAAAFAupG0AAACgXEjbAAAAQLmQtgEAAIByIW0DAAAA5ULaBnyPSqT2ymQyqoEKNzIy8tZbb8lXvY4npKenR7ewFPB6LY5au841db6kbcCnQ3Rqai/S9pIgIfvZZ5/dsmXLz3/+cwL3k0V6W1p4vRYHabuKkbYBnw7Rqam9SNuVT0XtgwcPSvvmzZsE7ieL9La08HotDtJ2FSNtAz4dolNTe5G2K5wdtRUC95NFeltaeL0WB2m7ipG2AZ8O0ampvUjbFU5S9cmTJ/WKRwK30CtYXKS3pYXXa3GQtqsYaRvw6RCdmtqLtA2UhPS2tPB6LQ7SdhUjbQM+HaKDVq1apVsRai/SNlAS0tvSwuu1OEjbVYy0jVq052DjiTNn9YpFh2iLRG1FrwepvUjbQElIb0sLr9fiIG1XMdI2as7A0MPN2z+TJRq4dYj26KDt0b0Wtdc80vbVDavWPbPlql5zSM+mvb16BahKCZ+y0beDo+vQpmfSvim8t0/vyTVmlwt1z8iw60922Z2KbJJ+vaLwBowR+3qd3bLOubDWsuZQv96GOZnjdfa/sc1379L4NiZtA1VLovbWz/aptB0N3DpEu3TEdkO2bkUCt9prfml705r16zZc0Ot82KMWJKdteTuEvv+lUxJGyjdF9O3j7G69v2xXN4SjtuANGKNgKuKKLZh5X2dTszReFNI2UG0kZJ+72CqLHbVl2XOwUVe4dIh2heJ1aFVRe80zbe+9cHKN/6nPRxeqX4G0vWHLpsCtuwt1z2ypS/2miL59kt9Qvf2RqC14A8YgbS8O0nYVI22j+o2MjtkJWy0SuyWC6wqPDtGuaLYuV9rudX5X6CUM609J5/eD+leH3s05d6ukc6/T/SV73O8WgQpWIG3v7ZWvdd6vnPr3Ore6C78p/M41h056lWYoXey+QWLHMcdS0tTUnBQpUF4p6xXRj+i4m7w/r/w/o7iwCVKmbf/ZEv3YldkUbVT01SZtA9Xmelt70agtdIhOTe01/7Sd0PA+vZw/Lv1O/aSp+zSq/gBz2nxuYckomLadMOF/55vQVvBNoTqtJ7ztXVQjofNCXfAn1TQ1NSdVCnR+C6GfufdeQdnk/XkVeL24sPFSpm2P6UnTqMSrTdoGqtCJM2dN2j53sVX3BukQnZraayHStvms8nqcDyc/QFufXl59YhuodIXTtheyI9/2sW8Kr9hl3gjRhtV2xvHuDsoS+9eUC9XUnHQpUBrq1TEPxNsX33q9uLAJ0qZt91aLu5grn9Co7KtN2gaqjbq3bQJ3JaZt55fm8mlk/ylJ2kZ1KpK21QMk/t9nKPimkM65pG1/nKA0NTUnZQrsOuQ8c6++hjZ5f75xYQtJdZ39C6ies7I2RRuVfbVJ20BVUVFbvpp27GMkQofo1NReC5S21Z+M9u0KlbDtPzHt+qQ2UOmKpW199y4S2qQR+6bQnaU8SWI9RhyQpqbmpEzbzouyvm6D/6/KWNcw+HpxYWOlus7y1lA/XjqX1HyvFmhU7tUmbQNVxURtZWR0TLcidIhOTe21YGk79E8LO3+Yqt8Amhq7PqkNVLriadu5b2fuyVn9MW8K/xfrkb8laTeCbX+chCdJRGJNzUmbtt1fOFjXytm0YYv+m9z6xyTBhU2Q7jo7vyVwLp3/g43ZFG1U9NUmbQM1Sofo1NRe80jbQC2qqU/ZKpD+9fKeeVOszIcUau19QdoGapQO0ampvUjbQElI20tL2ter136GXpC2S0ParmKkbcCnQ3Rqai/SNlAS0vbSkuL1Uo83hLI1abs0pO0qRtoGfDpEp6b2Im0DJSFtLy28XouDtF3FSNuAT4fo1NRepG2gJKS3pYXXa3GQtqsYaRvw6RCdmtqLtA2UhPS2tPB6LQ7SdhUjbQM+HaJTU3uRtoGSkN6WFl6vxUHarmKkbcCnQ3Rqai/SNlAS0tvSwuu1OEjbVYy0Dfh0iE5N7UXaBgAASUjbgE+H6NTUXqRtAACQhLQN+HSITk3tRdoGAABJSNuAT4fo1NRepG0AAJCEtA34dIhOTe1F2gYAAElI24BPh+jU1F6kbQAAkIS0jVq052DjiTNn9YpFh+jU1F6kbQAAkIS0jZozMPRw8/bPZIkGbh2iU1N7kbYBAEAS0jZqi0TtrZ/tU2k7Grh1iE5N7TX/tC1DDQ0NDcriGpDF1T8gzcFcLqfrAADAUkPaRk2QkH3uYqssdtSWZc/BRl3hUhk6PbXX/NN2Y2Pjt99+e+XKlcuXr7RevtzS2trS0nrhhx/q9uw5derUmTPfjI+P61IAALCkkLZR/UZGx+yErRaJ3RLBdYVHh+jU1F7zT9sNhw93dXVNTU1NqmVyKjc5NTEx0dDQ0NPTc/78+UuXLslWXQ0AAJYO0jZqwvW29qJRW+gQnZraa/5pu76+QdK2G7InczlnyeYmx920/f7772/ctKn55EmeJwEAYCkibaNWnDhz1qTtcxdbdW+QDtGpqb3mn7YPHTp07949SduZbPbh8PDg0MOBoaHHj0cymWwmm+u533uiuTmatg+vXrb6sG67a/+8sU2v6G1tG//Z7gyTIsOU2Z32+GFeXWD8IgdUewUHNccL7RczVNHRscS1bH9Oea+pL9RlemJqXH1N74W7jMggMT1RTs32FrfpDB6g+31WsRbtcVlDeVvTTKYSefN2OZMv8hpENhWqL8ofsGW725jXaPPhzeQJTSD0HWWtKqHOmO9JYc/dvK7mZKI9HvtldQ8SPzxI26gN6t62CdyVlra/PHjw7t27Y+PjV69du9jaevHate8vX/7uwoW29vaJiUxPz/3jJ07E3NuWoGqSq5NE/Sgqayliqeyvq6wc63cWkFDkJucCezvTWr3anlrbxo36DEJDFhsK1aevqcmPn+ojXBrq09vrialRZDUprsYM8l6oJ0zlhu3ejgGyLbhPtLjQ7mY2WvHJVKySJrzgZ2cG1GH7yXnCL5wcPub7zGW+VwvUuGS79/aJvsUS33TC74lug420jeqnorZ8Ne3Yx0iEDtGpqb3mn7YPfPnlnbt3u7t7rl2/PjQy0jM01HG/90p7x+GjR/se9EvaPnb8eEzatjK1NFdvlP+p6JoubAcCrmmHUm+sw6vjSvQckvdW00qYXKC76FCoal5IkA9wLyOY3OAJdMjK9qZwhRYZxN4zMqzN2tMX2ymi/fGVoWyYejIVSE4w/XxLKk7DG7CvafsTvmgLfmqlSf5pw/8OLPwTiXzjxb19ot+P0R597rIh/m0BD2kb1c9EbWVkdEy3InSITk3tNf+0vX//gc47d74+faZvcPDeva6TJ082f/VV682bl27ePHbiRHfP/aPHjsU9t20SqmpIUFZx226oArexMfTwhx2sg5W6U8jI3rpdsnp1aCw3ILvPrth7B3jb4mucQfVt7sShzAxkmzq8t4/f4d/ux5KlU0Lgs91PDoq17oSFlpgk4IoOYvck7KSED+lIjC3RYqtHmno3OaD7K3n/TmLKyVQg/6w8do9/pu5VcDe16D6vyKoPlbubtm93fkcQuKpe2XtNTclHDxxL9jdjmx2kQjPDx44cnpUlpt46ncXjTzF8bP97NblGyEZ1jaL7h886tifupfAPGL1wNYq0Dfh0iE5N7TX/tP35F190dt5pPnWqvavr69OnHz163NvXd+6HHy63tTU2He3u7mk6Gpu2TUTVN5vNf7zIaeKpNLwc6jRNS+dZJ6zqplupmTJpqK8up8SvdlteNI6JyB5/U0yRN44oMJRXZc3F5UxId8heZiQsTSazBAJA8IPe1PhVMXHBETOIfNVjOaEgbicleEhHwjEc0WKrR5rh/bwu+W+qyVQgZ+qGew7mPKPn4harLv+UTb1pOE235RQFRxD+ns4Bwtvt0exjeXX+3kZgl8jIZqvT9FpKsfonIHR0mVd0MtEZemWR8mhp3OlJnyN4WZ1O3eNcnchONYm0DfgulGIB0/a+zz/v7Ow83tx88eq1r89809LaevHipf937vw35y80Hmnq6u4+0nQ0Nm3r3OmlTxVQrZjqxVO/Eeo0THq1Kz1uoZ9vZdUuX33YP2JMRNbsLdK2hnPW7E3JQ3lzc/awZhkczp4dlprAh3MgAMgneNwHuF9jWs52xdkhdhCvxLl76mwN7uLxD6lJWbDDEimO6QmQzcH5epNZMswZGF6Pc0rRq2GKTduutzi7Rgd3y/y+aEFk2EBnsC1Nze2JHTlmVp74mdjHegICh5cZxn33habon0fgjJwzD55JtEdxx3N+jWBtdGr9Y0tF3ERqDmkb8Okcnc4Cpu29e/e1d3RevXat6UTz8VOnG483nzj19YWW1oP1DW232yVtNzY1xadtN5Ieth/YDjzv7MVTv5HUacR1Sl+htO09VWJER1VDBKghQpk6UhYYSrb6627kdkchbVeJwAe+w/qg9raFaqQiKJoIYgbxFYwC4Y2ye/riImPPYYeKI/ONXk7vVYo5OVNs2inrPYHXL1oQGTbQabX9w3kjxo4cMytP/EzsYz0BcngzXZlg7NTtGnctyJl+4Nxc0R7DO2VnJG/g4HULHrF2kbYBn87R6Sxg2t7zj73tHR0PHw7XNzR8fuDgwcNHGo4c2/fF/q9PnxkZHbvX1d3YeCQ+bevMaTKoSqt2Flab7Jwa22lEO6VHBlRfTY+qCeZcEQrPRnhUb0d71BB/KLNzzCjuuvR7w0RmhCUj+rHsf2xbH+pJH91JkSA6iBHpCAodrEDmENGZWT3RAzmzKmkyFSg6Y9NT+PRM224UqDecMnVNnQOEC6LDJrRNnz9N6YqO7HSanYOS6os2yiZwyWUl7nCBmiCzh8w0+Rs5wj8va2zp9PZwehN3rimkbcCnc3Q6C5i26/bsaW/vmMhkHz0e+f7CheMnmptPfnXzVtvo2Pj4ROZeV1fD4caEtO3GSyuCWsFTxObU2E7DGcBw75vrosCBnBVXKNl6+TckeiSVis0wSqDGHyoyYX+O3uH9gULHwZLhfC5brA9uh5VsfIHgYOJCVHAQf71IDpAyuyC0GhLdavVIM3Q+JU+mAvln5bF7Qmca2qTaVqf90jo72PUWb9Tif0tSb4ptewezH96JHTk8K0tMvRm/QGPBefMITFA67enG1gR5bx/7jIX0RXv0Lo7AeTmHUWv+PsHyGkbaBnw6R6ezgGl7d13d7fb2rPN/IZmLLpK26w8fzmbj0zYAYME4STExlAJzQ9oGfDpHp7OAafuz3bs//vu2T3bt2rFz5/Ydn2zbvuPjbdu2fvz3v279eMvftn6w+cP6hoZsNqurl4DADfLIDXAAqFD+DVpg4ZC2AZ/O0eksYNqemprKJXBub2dz09PTs7OzuhoAsJDsxyW4sY2FR9oGfDpHp7OAaRsAAFQr0jbg0zk6HdI2AAAoirQN+HSOToe0DQAAiiJtAz6do9MhbQMAgKJI24BP5+h0SNsAAKAo0jbg0zk6HdI2AAAoirSNWrTnYOOJM2f1ikXn6HRI2wAAoCjSNmrOwNDDzds/kyUauHWOToe0DQAAiiJto7ZI1N762T6VtqOBW+fodEjbAACgKNI2aoKE7HMXW2Wxo7Ysew426gqXztHpkLYBAEBRpG1Uv5HRMTthq0Vit0RwXeHROTod0jYAACiKtI2acL2tvWjUFjpHp0PaBgAARZG2UStOnDlr0va5i626N0jn6HRI2wAAoCjSNmqCurdtAjdpGwAALA7SNqqfitry1bRjHyMROkenQ9oGAABFkbZR/UzUVkZGx3QrQufodEjbAACgKNI24NM5Oh3SNgAAKIq0Dfh0jk6HtA0AAIoibQM+naPTIW0DAICiSNuAT+fodEjbAACgKNI24NM5Oh3SNgAAKIq0Dfh0jk6HtA0AAIoibQM+naPTIW0DAICiSNuAT+fodEjbAACgKNI24NM5Oh3SNgAAKCKf//8VCnbTNxtibwAAAABJRU5ErkJggg=="},53655:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/vbox_1-5ed13b83c3d458b2cbb781909c309b73.png"},35286:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/vbox_10-d2b80085ba939855c510196bc416e780.png"},84303:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/vbox_11-c05b7948cbf3a4f65a11ef54a62a7838.png"},41152:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/vbox_12-ce85e5a7efb858a138e253e5c0db2228.png"},65151:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/vbox_13-f9d6a696d8c7ccfb0ed8afb2276fe986.png"},35803:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/vbox_14-f7b38909f68259077907d0e75dc4d719.png"},71813:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/vbox_15-c0db7642b05269f287edfbad23c2d4f9.png"},81370:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/vbox_16-b281dedf139b21e1a8b0f284ae895830.png"},61688:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/vbox_17-97f5f41a3b6140e11d6bdf067ecb97c4.png"},83285:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/vbox_2-7a5710f60411ecffb5744ead9503fbef.png"},63906:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/vbox_3-99aa5aa909b307c1102184c70a06fa9d.png"},80033:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/vbox_4-62984d9c58770101c06a153bece929b5.png"},52029:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/vbox_5-79e6d4be2117cd248f8f1edda3fe22de.png"},97654:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/vbox_6-1b8b47ea1f6d036b4dc2540d79100060.png"},62582:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/vbox_7-0c54ad33f8bd5762270ad2c4c235272d.png"},95334:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/vbox_8-f2bb86c3ca6b71c744bfd1f0db53e466.png"},77020:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/vbox_9-da7ca0c19f4ac236a3780fe4758fd748.png"},11151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>d});var i=s(67294);const r={},t=i.createContext(r);function d(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);