---
title: "Proxmox: Installation de A à Z"
author: Mathieu Bannwarth
author_url: https://github.com/WhiteRoseLK/
author_title: Cybersecurity IT engineer
author_image_url: https://avatars.githubusercontent.com/u/50756181
---

Cela fait des années que je rêve de pouvoir avoir mon propre HomeLab afin de pouvoir m'amuser ! Mais aussi afin de pouvoir plus facilement tester certaines applications sans avoir besoin d'avoir recourt à des VMs directement sur mon Mac.

Il faut aussi avouer que l'idée d'avoir chez soit son propre matériel est assez sexy je trouve 🙄

Je me suis donc mis à la recherche de serveurs sur leboncoin, et j'ai rapidement pu trouver les deux premières briques de mon Home-lab :

TODO: Add Photos

Ses deux bébés sont deux serveurs Dell PowerEdge 720.
Le premier dispose de 96Go de Ram et de deux CPU Intel Xeon E5-2667 v2 cadencé à 3.3GHz et disposant de 8 Coeurs (16 Threads)
Le second dispose de 64Go de Ram et du même CPU que le premier mais en mono socket.

N'ayant pas besoin de deux serveurs pour le moment, et n'ayant rien pour les relier entre eux, j'ai décidé de basculer toute la Ram du second dans le premier.

je dispose donc d'un serveur avec 160Go de Ram en théorie. Une barrette semble être défectueuse, j'ai donc en réalité 144Go de Ram disponibles pour monter mon Proxmox.

## Architecture initiale

N'ayant pour le moment aucun équipement réseau (Switch, Router, Firewall, etc.) j'ai du faire avec ce que j'avais sous la main.
Et comme si cela ne suffisait pas, je me retrouve avec une seconde difficulté. Je n'ai dans la pièce qu'un seul câble RJ45 relié à ma box.
Mais il est relié à ma tour qui ne possède pas de carte WIFI.

Ayant par nature horreur de devoir faire plusieurs fois la même choses, il était inconcevable de devoir à chaque fois migrer mon câble entre la tour et le serveur.
De plus cela voulait dire qu'en cas d'utilisation de la tour, j'aurais été dans l'incapacité de joindre mon serveur.

J'ai donc réfléchis et j'ai finis par relier le serveur de la manière suivante :

![Schéma HomeLab V1](/img/docs/homelab/2024-05-25-Proxmox-Install/Architecture.png)

Pour faire simple, le serveur est relié directement sur un répéteur Wifi présent dans la pièce ce qui lui permet de se connecter à la box présente dans le salon et donc d'avoir accès à internet.

L'iDRAC lui est branché sur ma RasPi 5 qui ne me servait pas pour le moment.
La RasPi est connectée en Wifi sur ma box, je peux donc facilement y avoir accès en cas de problème en réalisant un tunnel SSH au travers de cette dernière.

## Installation

Pour commencer, il faut récupérer l'ISO d'installation de Proxmox présent [ici](https://www.proxmox.com/en/downloads/proxmox-virtual-environment/iso). Pour ma part la dernière version est la 8.2

Une fois l'iso téléchargé, il suffit de créer une clé USB bootable. Plusieurs méthodes existent j'ai l'habitude d'utiliser [Ventoy](https://www.ventoy.net/en/index.html) qui me permet d'avoir plusieurs iso sur la même clé USB.

Il en reste plus qu'a booter sur la clé USB. Vous obtiendrez alors l'écran suivant :

![Boot Proxmox](/img/docs/homelab/2024-05-25-Proxmox-Install/Boot-Proxmox.png)

Choisir l'installation graphique et appuyer sur entrer.

L'installation peut prendre un peu de temps. Une fois terminée, il faut accepter les conditions d'utilisations puis choisir le disque d'installation de Proxmox.

Il s'agit du disque où le système va être installer, il est recommandé d'en choisir un dédié mais vous pouvez très bien réutiliser le même que pour vos VMs.

Pour ma part il s'agit d'un disque de 300Go qui sera dédié à Proxmox.

Une fois le disque choisi, on rentre sélectionne la TimeZone et le clavier, puis on configure un mot de passe pour Proxmox.

Attention il s'agit du mot de passe Root de Proxmox. Veillez à bien le noter et à ce qu'il respecte les bonnes pratiques (longueurs, complexités, etc.)

On termine l'installation en sélectionnant une interface pour Proxmox, ainsi qu'une configuration réseau (FQDN, IP, DNS, etc.)

Si toute les informations remplies sont correctes, on valide une dernière fois puis on attend le temps de l'installation.

##  Configuration

Une fois l'installation terminée, vous pouvez y connecter via l'IP ou le FQDN configuré plus tôt sur le port 8006 avec le compte Root et le mot de passe configuré lors de l'installation.

Avant de déployer les premières machines, on va commencer par configurer les disques.

Comme expliqué plus haut, j'ai fais le choix d'installer Proxmox sur un disque à part, je vais donc commencer par supprimer le disque local-lvm qui a été créé au démarrage.

Pour cela, il suffit de cliquer sur le Datacenter sur la gauche de l'écran et, dans la section storage, choisir la ligne local-lvm et cliquer sur Remove.

Il faut aussi supprimer la partition data qui avait été provisionnée, pour cela il faut aller sur le noeud Proxmox et dans la section Disks/LVM-Thin supprimer la partition data.

Une fois supprimé, il faut encore réallouer l'espace libéré au système.

Toujours sur le noeud, on ouvre le shell et on tape les commandes suivantes :

    lvextend pve/root -l +100%FREE
    resize2fs /dev/pve/root

Si tout a correctement fonctionné, l'onglet summary devrait nous montrer une taille de disque égale à celle du disque complet :

![Proxmox Disk 1](/img/docs/homelab/2024-05-25-Proxmox-Install/Proxmox-disk-1.png)

## Ajout disques

Maintenant que le premier disque est correctement configuré, il me reste à ajouter les autres disques.

Pour ce serveur je dispo de 4 SSD 1To configurés en RAID 5 ainsi que 3 HDD 1To configurés en RAID 0

Les SSD vont servir pour la création des VMs. 

Je réserve les HDD pour réaliser un test d'installation de TrueNAS avec un accès direct aux disques. L'espace sera ensuite transformé en partage réseau pour mon archi multimédia (Radarr, Sonarr, Plex, etc.)

Je commence par créer le volume group LVM pour les SSD, pour cela il suffit d'accéder au noeud Proxmox puis Disks/LVM.
Il suffit alors de cliquer sur **Create** et de choisir la bonne partition, pour moi **/dev/sda** :

![SSD Volume Group](/img/docs/homelab/2024-05-25-Proxmox-Install/SSD-Volume-Group.png)

## Repositories

Avant de commencer à créer ma première VM, j'en profite pour modifier les repositories de Proxmox pour supprimer ceux de la version entreprise.

Dans updates/Repositories, il suffit de supprimer les sources list qui sont Tag comme étant enterprise et d'ajouter une source list "No-Subscription"

## ISO

Enfin, je vais ajouter un iso afin de commencer à déployer mes premières VMs. Pour cela je commence par choisir l'iso que je veux. Pour mon Home-lab j'ai choisis de partir sur [Ubuntu 24.04](https://releases.ubuntu.com/noble/).

Une fois choisi, il suffit de se rendre sur le datastore **local** puis dans **ISO Images** de choisir de télécharger à partir d'une URL.

![Ubuntu 24.04](/img/docs/homelab/2024-05-25-Proxmox-Install/Ubuntu-24.04.png)

Mon Proxmox est maintenant prêt à déployer des VMs !

## Deploy

Mon objectif étant d'automatiser tout mon déploiement de VMs, ma première VM va donc me servir de base pour déployer les autres, je l'ai nommée Deploy

C'est a peu de choses prêt la seule VM que je déploierais manuellement.