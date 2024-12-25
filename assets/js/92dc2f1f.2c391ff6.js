"use strict";(self.webpackChunkevantay_com=self.webpackChunkevantay_com||[]).push([[412],{7340:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var t=n(4848),a=n(8453);const s={title:"Proxmox, cr\xe9ation d'un template packer",author:"Mathieu Bannwarth",author_url:"https://github.com/WhiteRoseLK/",author_title:"Cybersecurity IT engineer",author_image_url:"https://avatars.githubusercontent.com/u/50756181"},i=void 0,o={id:"homelab/2024-05-26-Proxmox-Template-Packer copy",title:"Proxmox, cr\xe9ation d'un template packer",description:"Le but de mon HomeLab est d'\xeatre orient\xe9 IaC et DevSecOps, le but est donc de configurer un maximum de choses de mani\xe8re automatis\xe9e.",source:"@site/docs/homelab/2024-05-26-Proxmox-Template-Packer copy.md",sourceDirName:"homelab",slug:"/homelab/2024-05-26-Proxmox-Template-Packer copy",permalink:"/docs/homelab/2024-05-26-Proxmox-Template-Packer copy",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Proxmox, cr\xe9ation d'un template packer",author:"Mathieu Bannwarth",author_url:"https://github.com/WhiteRoseLK/",author_title:"Cybersecurity IT engineer",author_image_url:"https://avatars.githubusercontent.com/u/50756181"},sidebar:"docsSidebar",previous:{title:"Proxmox: Installation de A \xe0 Z",permalink:"/docs/homelab/2024-05-25-Proxmox-Install"},next:{title:"HomePage dashboard",permalink:"/docs/homelab/2024-05-31-HomePage"}},l={},c=[{value:"Installation packer et terraform",id:"installation-packer-et-terraform",level:2},{value:"Arborescence",id:"arborescence",level:2},{value:"Token API",id:"token-api",level:2},{value:"Template Packer",id:"template-packer",level:2},{value:"variables.auto.pkrvars.hcl",id:"variablesautopkrvarshcl",level:3},{value:"variables.pkrvars.hcl",id:"variablespkrvarshcl",level:3},{value:"Deploy",id:"deploy",level:3},{value:"Template terraform",id:"template-terraform",level:2},{value:"terraform.tfvars",id:"terraformtfvars",level:3}];function p(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"Le but de mon HomeLab est d'\xeatre orient\xe9 IaC et DevSecOps, le but est donc de configurer un maximum de choses de mani\xe8re automatis\xe9e.\nPour cela je vais utiliser Packer, Terraform et Ansible. Dans ce guide je vais vous pr\xe9senter comment automatiser la cr\xe9ation d'un template Ubuntu sur Proxmox avec Packer."}),"\n",(0,t.jsx)(r.p,{children:"Toute les commandes seront lanc\xe9s depuis ma VM de d\xe9ploiement (Deploy) c'est \xe0 partir d'elle que je vais ensuite d\xe9ployer le reste de mon Home-Lab."}),"\n",(0,t.jsx)(r.h2,{id:"installation-packer-et-terraform",children:"Installation packer et terraform"}),"\n",(0,t.jsx)(r.p,{children:"Pour installer packer et terraform voici les commandes :"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:'wget -O- https://apt.releases.hashicorp.com/gpg | sudo gpg --dearmor -o /usr/share/keyrings/hashicorp-archive-keyring.gpg\necho "deb [signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/hashicorp.list\nsudo apt update && sudo apt install packer terraform\n'})}),"\n",(0,t.jsx)(r.p,{children:"On peut v\xe9rifier l'installation de packer avec la commande :"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"packer -v\n"})}),"\n",(0,t.jsx)(r.p,{children:"On peut v\xe9rifier l'installation de terraform avec la commande :"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"terraform -v\n"})}),"\n",(0,t.jsx)(r.h2,{id:"arborescence",children:"Arborescence"}),"\n",(0,t.jsx)(r.p,{children:"Je ne suis pas fan de tout mettre dans le m\xeame fichier c'est pourquoi j'utilise l'arborescence suivante :"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"template-ubuntu-24.04/\n\u251c\u2500\u2500 packer\n\u2502\xa0\xa0 \u251c\u2500\u2500 build.pkr.hcl\n\u2502\xa0\xa0 \u251c\u2500\u2500 http\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 meta-data\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 user-data\n\u2502\xa0\xa0 \u251c\u2500\u2500 packer.pkr.hcl\n\u2502\xa0\xa0 \u251c\u2500\u2500 source.pkr.hcl\n\u2502\xa0\xa0 \u251c\u2500\u2500 variables.auto.pkrvars.hcl\n\u2502\xa0\xa0 \u251c\u2500\u2500 variables.pkr.hcl\n\u2502\xa0\xa0 \u2514\u2500\u2500 variables.pkrvars.hcl\n\u2514\u2500\u2500 terraform\n    \u251c\u2500\u2500 main.tf\n    \u251c\u2500\u2500 modules\n    \u2502\xa0\xa0 \u2514\u2500\u2500 vm-test\n    \u2502\xa0\xa0     \u251c\u2500\u2500 main.tf\n    \u2502\xa0\xa0     \u251c\u2500\u2500 terraform.tf\n    \u2502\xa0\xa0     \u2514\u2500\u2500 variables.tf\n    \u251c\u2500\u2500 module.tf\n    \u251c\u2500\u2500 terraform.tf\n    \u251c\u2500\u2500 terraform.tfvars\n    \u2514\u2500\u2500 variables.tf\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Le dossier racine ",(0,t.jsx)(r.strong,{children:"template-ubuntu-24.04"})," correspond au nom de la VM / du template.\nPuis on retrouve les dossier ",(0,t.jsx)(r.strong,{children:"packer"}),", ",(0,t.jsx)(r.strong,{children:"ansible"})," ou ",(0,t.jsx)(r.strong,{children:"terraform"})," suivant la technologie utilis\xe9e."]}),"\n",(0,t.jsxs)(r.p,{children:["Pour ",(0,t.jsx)(r.strong,{children:"packer"}),", on retrouve les fichiers habituels build, packer, source et variables.pkr.hcl\nLe fichier variables.auto.pkrvars.hcl est automatiquement lu par packer lors du build et contient toute les variables non sensibles.\nLe fichier variables.pkvars.hcl contient les variables sensibles (token, password, etc.)\nEnfin le dossier http contient les fichiers n\xe9cessaires pour cloud-init."]}),"\n",(0,t.jsxs)(r.p,{children:["Pour ",(0,t.jsx)(r.strong,{children:"terraform"}),", on retrouve les fichiers habituels main, terraform, module et variables.tf\nLe fichier terraform.tfvars contient les variables sp\xe9cifique \xe0 notre projet.\nLe dossier modules contient les ressources que l'on veut cr\xe9er s\xe9par\xe9es par modules."]}),"\n",(0,t.jsx)(r.h2,{id:"token-api",children:"Token API"}),"\n",(0,t.jsx)(r.p,{children:"Pour pouvoir utiliser packer pour communiquer avec Proxmox, il faut qu'il puisse s'y connecter. Pour cela, il est fortement recommand\xe9 d'utiliser un token d\xe9di\xe9 avec des permissions plus faibles que le compte root."}),"\n",(0,t.jsx)(r.p,{children:"Pour cr\xe9er ce token il suffit de suivre la m\xe9thode suivante :"}),"\n",(0,t.jsxs)(r.p,{children:["Sur le Datacenter, je commence par cr\xe9er un groupe. Cela me permettra de donner les m\xeames permissions \xe0 d'autres utilisateurs si n\xe9cessaires.\nMon groupe s'appel ",(0,t.jsx)(r.strong,{children:"NodeAdmin"}),". Je cr\xe9e ensuite un utilisateur ",(0,t.jsx)(r.strong,{children:"packer"})," que je viens lier au groupe ",(0,t.jsx)(r.strong,{children:"NodeAdmin"}),'.\nPour attribuer les permissions n\xe9cessaires \xe0 packer, je rajouter dans l\'onglet permissions une permission sur "/" attribu\xe9e au groupe ',(0,t.jsx)(r.strong,{children:"NodeAdmin"})," avec le r\xf4le ",(0,t.jsx)(r.strong,{children:"Administrator"}),"."]}),"\n",(0,t.jsx)(r.p,{children:"Il ne reste plus qu'\xe0 cr\xe9er les tokens, pour cela dans l'onglet API Tokens, je cr\xe9er un nouveau token pour le user packer que je nome deploy (le nom de la VM) et je d\xe9coche bien la case \"Privilege Separation\" afin que le token ai les m\xeames droits que le user."}),"\n",(0,t.jsx)(r.p,{children:"Le token devrait avoir des droits qui ressemblent \xe0 cela :"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"Token Rights",src:n(8802).A+"",width:"1638",height:"1236"})}),"\n",(0,t.jsx)(r.p,{children:"J'en profite aussi pour cr\xe9er un second token pour terraform."}),"\n",(0,t.jsx)(r.h2,{id:"template-packer",children:"Template Packer"}),"\n",(0,t.jsxs)(r.p,{children:["Le template packer que j'utilise est disponible ",(0,t.jsx)(r.strong,{children:"ici"}),". // TODO: Lien Github"]}),"\n",(0,t.jsxs)(r.p,{children:["Il utilise le plugin ",(0,t.jsx)(r.a,{href:"https://developer.hashicorp.com/packer/integrations/hashicorp/proxmox/latest/components/builder/iso",children:"proxmox-iso"})," afin de construire un template packer \xe0 partir d'un iso."]}),"\n",(0,t.jsx)(r.p,{children:"Pour l'utiliser, il suffit de le t\xe9l\xe9charger et de configurer les fichiers suivants :"}),"\n",(0,t.jsx)(r.h3,{id:"variablesautopkrvarshcl",children:"variables.auto.pkrvars.hcl"}),"\n",(0,t.jsx)(r.p,{children:"Comme indiqu\xe9 plus haut, ce fichier contient les variables principales du fichier de config qui permettent de configurer le template :"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-text",children:'proxmox_url = "https://192.168.1.200:8006/api2/json"\nproxmox_username = "packer@pam!deploy"\nproxmox_node = "proxmox"\ntemplate_cores = 2\ntemplate_disk_size = "10G"\ntemplate_memory_size = 2048\ntemplate_default_user = "user"\ntemplate_id = 998\n'})}),"\n",(0,t.jsx)(r.h3,{id:"variablespkrvarshcl",children:"variables.pkrvars.hcl"}),"\n",(0,t.jsx)(r.p,{children:"Ce fichier contient les variables sensibles. Pour ma part un token et le mot de passe SSH du template"}),"\n",(0,t.jsx)(r.admonition,{type:"danger",children:(0,t.jsx)(r.p,{children:"Ce fichier contient des informations sensibles. Attention \xe0 ne pas l'ajouter vos commits."})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-text",children:'proxmox_token = ""\ntemplate_default_password = ""\n'})}),"\n",(0,t.jsx)(r.h3,{id:"deploy",children:"Deploy"}),"\n",(0,t.jsx)(r.p,{children:"Pour valider les fichiers de configurations :"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"packer validate -var-file=variables.pkrvars.hcl .\n"})}),"\n",(0,t.jsx)(r.p,{children:"Pour cr\xe9er le template :"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"packer build -var-file=variables.pkrvars.hcl .\n"})}),"\n",(0,t.jsx)(r.p,{children:"Si tout fonctionne, un template a du \xeatre cr\xe9\xe9 sur proxmox."}),"\n",(0,t.jsx)(r.h2,{id:"template-terraform",children:"Template terraform"}),"\n",(0,t.jsx)(r.p,{children:"Maintenant que le template packer est pr\xeat je vais me servir de terraform pour d\xe9ployer des VMs."}),"\n",(0,t.jsxs)(r.p,{children:["Pour cela j'utilise le provider proxmox de ",(0,t.jsx)(r.a,{href:"https://registry.terraform.io/providers/Telmate/proxmox/latest/docs",children:"Telmate"})]}),"\n",(0,t.jsxs)(r.p,{children:["Le template terraform que j'utilise est disponible ",(0,t.jsx)(r.strong,{children:"ici"}),". // TODO: Lien Github"]}),"\n",(0,t.jsx)(r.p,{children:"Pour l'utiliser, il suffit de le t\xe9l\xe9charger et de configurer le fichier suivant :"}),"\n",(0,t.jsx)(r.h3,{id:"terraformtfvars",children:"terraform.tfvars"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:'pm_api_url          = "https://proxmox.home:8006/api2/json"\npm_api_token_id     = ""\npm_api_token_secret = ""\n\nvm_name        = ""\nvm_target_node = "proxmox"\nvm_vmid        = 10\nvm_desc        = ""\nvm_onboot      = true\nvm_startup     = ""\nvm_vm_state    = "running"\nvm_agent       = 1\nvm_clone       = "Template-Ubuntu-24.04"\nvm_memory      = 2048\nvm_cores       = 2\nvm_size        = "10G"\nvm_storage     = "SSD"\n'})}),"\n",(0,t.jsx)(r.p,{children:"Le template terraform est pr\xeat. Pour d\xe9ployer une VM il suffit de copier le template, de mettre \xe0 jour le fichier terraform.tfvars puis de d\xe9ployer la VM avec les commandes :"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"terraform plan\nterraform apply\n"})})]})}function u(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},8802:(e,r,n)=>{n.d(r,{A:()=>t});const t=n.p+"assets/images/token-rights-packer-c550629d2c814f0941cc6faa4aa26993.png"},8453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>o});var t=n(6540);const a={},s=t.createContext(a);function i(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);