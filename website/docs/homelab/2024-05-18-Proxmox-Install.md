---
title: "Proxmox: Installation de A à Z"
author: Mathieu Bannwarth
author_url: https://github.com/WhiteRoseLK/
author_title: Cybersecurity IT engineer
author_image_url: https://avatars.githubusercontent.com/u/50756181
---

Cela fait des années que je rêve de pouvoir avoir mon propre HomeLab afin de pouvoir m'amuser ! Mais aussi afin de pouvoir plus facilement tester certainnes applications sans avoir besoin d'avoir recourt à des VMs directement sur mon Mac.

Il faut aussi avouer que l'idée d'avoir chez soit son propre matériel est assez sexy je trouve 🙄

Je me suis donc mis à la recherche de serveurs sur leboncoin, et j'ai rapidement pu trouver les deux premières briques de mon Homelab :

TODO: Add Photos

Ses deux bébés sont deux serveurs Dell PowerEdge 720.
Le premier dispose de 96Go de Ram et de deux CPU Intel Xeon E5-2667 v2 cadencé à 3.3GHz et disposant de 8 Coeurs (16 Threads)
Le second dispose de 64Go de Ram et du même CPU que le premier mais en mono socket.

N'ayant pas besoin de deux serveurs pour le moment, et n'ayant rien pour les relier entre eux, j'ai décidé de basculer toute la Ram du second dans le premier.

je dispose donc d'un serveur avec 160Go de Ram en théorie. Une barette semble être défectueuse, j'ai donc en réalité 144Go de Ram disponnibles pour monter mon Proxmox.

## Architecture initiale

N'ayant pour le moment aucun équipement réseau (Switch, Routeur, Firewall, etc.) j'ai du faire avec ce que j'avais sous la main.
Et comme si cela ne suffisait pas, je me retrouve avec une seconde difficulté. Je n'ai dans la pièce qu'un seul câble RJ45 relié à ma box.
Mais il est relié à ma tour qui ne possède pas de carte WIFI.

Ayant par nature horreur de devoir faire plusieurs fois la même choses, il était inconsevable de devoir à chaque fois migrer mon câble entre la tour et le serveur.
De plus cela voulait dire qu'en cas d'utilisation de la tour, j'aurais été dans l'incapacité de joindre mon serveur.

J'ai donc réfléchis et j'ai finis par relier le serveur de la manière suivante :

![Schéma HomeLab V1](/img/blog/homelab/2024-05-18-Proxmox-Install/Architecture.png)

Pour faire simple, le serveur est relié directement sur un répéteur Wifi présent dans la pièce ce qui lui permet de se connecter à la box présente dans le salon et donc d'avoir accès à internet.

L'iDRAC lui est branché sur ma RasPi 5 qui ne me servait pas pour le moment.
La Raspi est connectée en Wifi sur ma box, je peux donc facilement y avoir accès en cas de problème en réalisant un tunnel SSH au travers de cette dernière.

