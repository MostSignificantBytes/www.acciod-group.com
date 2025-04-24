---
templateKey: blog-post
language: fr
slug: +blog+2022-05-12-wifi-site-survey
title: Audits Wi-Fi
date: 2022-05-12T21:17:26.537Z
description: Mesurer, planifier, déployer et mesurer à nouveau. C'est comme ça qu'on installe des infrastructures Wi-Fi robustes.
featuredpost: false
featuredimage: /img/audit_wi-fi.png
tags:
  - wi-fi
  - audit
---
![Audit Wi-Fi](/img/audit_wi-fi.png)

Pour déployer du Wi-Fi, acheter une borne au magasin d'à côté et la poser sur une table au milieu de la pièce fonctionne seulement pour de petits espaces, et encore, il n'y a aucune garantie que cela fonctionnera parfaitement.

Dans de plus grands espaces comme des immeubles de bureaux ou des entrepôts, il est nécessaire de faire une étude pour déterminer l'emplacement optimal des des points d'accès. Mettre en place toute une infrastructure Wi-Fi sans faire d'audit c'est laisser la porte ouverte au mauvais signal et aux interférences.

## Planification

L'audit Wi-Fi de planification est la première étape de toute installation. L'objectif principal est d'aider à définir l'emplacement des bornes Wi-Fi avec plusieurs indicateurs, les plus utilisés étant :

* Puissance du signal reçu ou Received Signal Strengh Indicator (RSSI)
* Rapport signal sur bruit ou Signal to Noise Ratio (SNR)
* Interférences de canaux adjacents ou Adjacent-Channel Interference (ACI)
* Interférences d'un même canal ou Co-Channel Interference (CCI)

La puissance du signal reçu (RSSI) est une mesure de la puissance du signal radio au niveau d'un client. L'audit permet de simuler les points d'accès et mesurer le RSSI des terminaux de données. Un signal de plus de -70 dBm est considéré comme suffisant.

Le rapport signal sur bruit (SNR) est une mesure utilisée pour comparer un signal donné au bruit environnant. Le SNR est le ratio entre la puissance du signal mesuré et la puissance du bruit, souvent exprimé en décibel (dB). un SNR de 20 dB est une valeur saine pour les réseaux sans fil, plus de 40 dB signifie un signal excellent.

Les interférences de canaux adjacents (ACI) sont un type d'interférence due à l'utilisation de fréquences proches par plusieurs points d'accès. Si cela arrive, les trames transmises vont être corrompues, les destinataires n'enverrons pas d'ACK et le nombre de retransmissions de niveau 2 augmentera.

Les interférences d'un même canal (CCI) sont des phénomènes de diaphonie qui apparaissent quand au moins deux points d'accès utilisent le même canal. Cela cause de la contention radio et une surcharge réseau et se traduit pour l'utilisateur final par un accès au réseau très lent.

## Mise en place

Avec les résultats de l'audit, nous pouvons mettre en place le câblage, préparer les contrôleurs Wi-Fi et les points d'accès et procéder aux premiers tests.
Si l'audit de planification et le recueil des besoins client ont été faits correctement, cette étape est relativement simple puisqu'il y a juste à suivre une liste d'étapes bien définies.

## Validation

Une fois que le câblage est fait, que les points d'accès sont en place et fonctionnels et que tout est configuré correctement, un audit de validation est nécessaire pour confirmer que toute l'infrastructure fonctionne comme attendu.
S'il y a des erreurs, soit nous les corrigeons, soit nous revenons à l'étape de la planification, selon les cas.