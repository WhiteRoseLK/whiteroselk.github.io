---
title: "Media Player"
---

Une des raisons pour lesquels j'ai eu envie de monter mon propre lab a été pour cette raison. Le fait de pouvoir crréer ma propre usine à téléchargement de Film/Série. Le but étant de ne plus être obligé d'être chez moi devant mon ordi pour pouvoir télécharger un film qui n'est pas disponnible sur les plateformes de streaming classiques.

Pour le moment, mon architecture ressemble à ça :

![Schéma Arr V1](/img/docs/homelab/*arr/README/Architecture *arr.png)

Comme vous pouvez le voir j'utilise principalement la suite *arr qui permet une installation d'une facilité déconcertante.

La liste des logiciels et leurs fonctions:

- [Radarr](https://radarr.video) Pour les films [=>]()
- [Sonarr](https://sonarr.tv) Pour les Séries
- [Plex](https://www.plex.tv) Le lecteur de contenue
- [Prowlarr](https://prowlarr.com) L'indexeur pour Torrent
- [qBittorrent](https://www.qbittorrent.org) La SeedBox
- [Overseerr](https://overseerr.dev) Le FrontEnd familial
- [FlareSolverr](https://github.com/FlareSolverr/FlareSolverr) Pour bypass CloudFlare
- [CloudFlare Tunnel](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/) Pour un accès distant à Overseerr`
- **Samba** Pour l'accès aux disques