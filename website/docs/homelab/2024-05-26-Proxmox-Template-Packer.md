---
title: "Proxmox, création d'un template packer"
author: Mathieu Bannwarth
author_url: https://github.com/WhiteRoseLK/
author_title: Cybersecurity IT engineer
author_image_url: https://avatars.githubusercontent.com/u/50756181
---

Le but de mon HomeLab est d'être orienté IaC et DevSecOps, le but est donc de configurer un maximum de choses de manière automatisée.
Pour cela je vais utiliser Packer, Terraform et Ansible. Dans ce guide je vais vous présenter comment automatiser la création d'un template Ubuntu sur Proxmox avec Packer.

Toute les commandes seront lancés depuis ma VM de déploiement (Deploy) c'est à partir d'elle que je vais ensuite déployer le reste de mon Home-Lab.

## Installation packer

Pour installer packer voici les commandes :
```bash
wget -O- https://apt.releases.hashicorp.com/gpg | sudo gpg --dearmor -o /usr/share/keyrings/hashicorp-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/hashicorp.list
sudo apt update && sudo apt install packer
```
On peut vérifier l'installation de packer avec la commande :
```bash
packer -v
```

## Arborescence

Je ne suis pas fan de tout mettre dans le même fichier c'est pourquoi j'utilise l'arborescence suivante :
```bash
.
└── template-ubuntu-24.04
    └── packer
        ├── build.pkr.hcl
        ├── http
        │   ├── meta-data
        │   └── user-data
        ├── packer.pkr.hcl
        ├── source.pkr.hcl
        ├── variables.auto.pkrvars.hcl
        ├── variables.pkr.hcl
        └── variables.pkrvars.hcl
```

Le dossier racine **template-ubuntu-24.04** correspond au nom de la VM / du template.
Puis on retrouve les dossier **packer**, **ansible** ou **terraform** suivant la technologie utilisée.
Pour **packer**, on retrouve les fichiers habituels build, packer, source et variables.pkr.hcl
Le fichier variables.auto.pkrvars.hcl est automatiquement lu par packer lors du build et contient toute les variables non sensibles.
Le fichier variables.pkvars.hcl contient les variables sensibles (token, password, etc.)
Enfin le dossier http contient les fichiers nécessaires pour cloud-init.

## Token API

Pour pouvoir utiliser packer pour communiquer avec Proxmox, il faut qu'il puisse s'y connecter. Pour cela, il est fortement recommandé d'utiliser un token dédié avec des permissions plus faibles que le compte root.

Pour créer ce token il suffit de suivre la méthode suivante :

Sur le Datacenter, je commence par créer un groupe. Cela me permettra de donner les mêmes permissions à d'autres utilisateurs si nécessaires.
Mon groupe s'appel **NodeAdmin**. Je crée ensuite un utilisateur **packer** que je viens lier au groupe **NodeAdmin**.
Pour attribuer les permissions nécessaires à packer, je rajouter dans l'onglet permissions une permission sur "/" attribuée au groupe **NodeAdmin** avec le rôle **PVEAdmin**.

Il ne reste plus qu'à créer le token, pour cela dans l'onglet API Tokens, je créer un nouveau token pour le user packer que je nome deploy (le nom de la VM) et je décoche bien la case "Privilege Separation" afin que le token ai les mêmes droits que le user.

Le token devrait avoir des droits qui ressemblent à cela :

![Token Rights](/img/docs/homelab/2024-05-26-Proxmox-Template-Packer/token-rights-packer.png)

## Template Packer

Le template packer que j'utilise est disponible **ici**.

Il utilise le plugin [proxmox-iso](https://developer.hashicorp.com/packer/integrations/hashicorp/proxmox/latest/components/builder/iso) afin de construire un template packer à partir d'un iso.

Pour l'utiliser, il suffit de le télécharger et de configurer les fichiers suivants :

### variables.auto.pkrvars.hcl

Comme indiqué plus haut, ce fichier contient les variables principales du fichier de config qui permettent de configurer le template :

```text
proxmox_url = "https://192.168.1.200:8006/api2/json"
proxmox_username = "packer@pam!deploy"
proxmox_node = "proxmox"
template_cores = 2
template_disk_size = "10G"
template_memory_size = 2048
template_default_user = "user"
template_id = 998
```

### variables.pkrvars.hcl

Ce fichier contient les variables sensibles. Pour ma part un token et le mot de passe SSH du template

[!CAUTION]
Ce fichier contient des informations sensibles. Attention à ne pas l'ajouter vos commits.

```text
proxmox_token = ""
template_default_password = ""
```