---
title: "Overseerr, le demandeur"
author: Mathieu Bannwarth
author_url: https://github.com/WhiteRoseLK/
author_title: Cybersecurity IT engineer
author_image_url: https://avatars.githubusercontent.com/u/50756181
---

Overseerr joue le rôle d'interface. Il permet de demander des films ou des séries afin de les télécharger.

## Installation

Le fichier d'installation est simple, il récupère et exécute un script permettant d'installer Overseerr.

```YAML title="tasks/main.yml"
---
# tasks file for Overseerr
- name: Install snapd
  apt:
    name: snapd
    state: present

- name: Install Overseerr
  snap:
    name: 
      - overseerr
```

## Configuration

Si l'installation s'est bien passée, le serveur Overseerr est accessible sur le port **5055**.

A la première connnexion on nous demande de nous connecter avec notre comple Plex.

Il suffit alors de lier le serveur Plex puis les serveurs Radarr et Sonarr.