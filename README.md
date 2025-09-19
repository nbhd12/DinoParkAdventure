# DinoPark Adventure

**DinoPark Adventure** est une application web immersive qui permet aux visiteurs de découvrir différents dinosaures, de réserver des billets en ligne et offre un espace administrateur pour gérer les réservations. L’expérience utilisateur s’inspire de l’univers de Jurassic Park.

## ⚙️ Fonctionnalités

### Côté visiteur
- **Accueil :**  
  - Présentation des dinosaures du parc  
  - Localisation du parc  

- **Réservation de billets :**  
  - Sélection de la date (jour unique, égale ou postérieure au jour actuel)  
  - Sélection de la quantité et des types de billets (adulte, enfant, VIP)  
  - Processus de paiement simulé  
  - Page de confirmation de réservation avec récapitulatif de la commande  

### Côté administrateur
- **Page de connexion :**  
  - Saisie de l’adresse email et du mot de passe  


##  Développement

- Application web **responsive**  
- Architecture **MVC** avec **Express** et **TypeScript**  
- Génération des vues côté serveur avec **EJS**  
- Base de données **PostgreSQL**  
- Communication avec la base de données via des **requêtes SQL manuelles**
- Expérience utilisateur immersive et intuitive, inspirée de Jurassic Park  

##  Base de données

- Modèle conceptuel des données (**MCD**)  
- Modèle logique des données (**MLD**)  
- Script SQL pour la création des tables (**LDD**)  

##  Installation et exécution
```bash
git clone git@github.com:nbhd12/DinoParkAdventure.git
cd dino-park
npm install
npm run build:all
npm run dev
