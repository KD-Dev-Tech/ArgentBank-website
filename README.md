*******************************************************************************
# Argent Bank API
![ArgentBanklogo](frontend/public/images/argentBankLogo.webp)

Dans ce projet, nous avons travaillé sur le développement du front-end d'une application bancaire en utilisant React et Redux, afin de créer une expérience utilisateur dynamique et réactive.

La mission principale a été d'intégrer le front-end avec le back-end via des appels API. Nous avons écrit des appels à l'API REST pour connecter les deux parties de l'application, assurant une communication fluide entre le client et le serveur. React a été utilisé pour développer l'interface utilisateur de l'application bancaire, en se concentrant sur la création d'un tableau de bord complet et responsive pour les utilisateurs.

Redux a été utilisé pour gérer les données de l'application. Cela a permis de maintenir un état global cohérent à travers l'application.

Swagger a aidé à décrire les différentes routes et actions nécessaires pour l'API.

Nous avons utilisé Node.js pour exécuter le code JavaScript côté serveur, offrant une expérience pratique de la gestion d'une application full-stack.

Objectifs réalisés :

- Afficher les données du back-end sur l'interface via des appels API
- Configurer des routes API pour la communication client/serveur
- Implémenter la gestion des données avec Redux pour assurer le bon fonctionnement du front-end

## lancer le serveur ainsi que l'application :

1. Diviser le terminal en 2

2. lancer le serveur :
Dans le premier terminal `cd .\backend\`

```bash
npm install

npm run dev:server
```
3. lancer l'appli :
Dans le second terminal `cd frontend `

```bash
npm install

npm run dev 
```

## Compte utilisateur 

### Tony Stark

- First Name: `Tony`
- Last Name: `Stark`
- Email: `tony@stark.com`
- Password: `password123`

### Steve Rogers

- First Name: `Steve`,
- Last Name: `Rogers`,
- Email: `steve@rogers.com`,
- Password: `password456`

## Utilisation 

Une fois le serveur de développement démarré, vous pouvez accéder à l'application en ouvrant votre navigateur et en naviguant vers http://localhost:5173 (ou l'URL indiquée)

******************************************************************************



# Argent Bank API

Cette base de code contient le code nécessaire pour exécuter le backend d'Argent Bank.

# Prérequis

Argent Bank utilise la pile technologique suivante :

- [Node.js v12](https://nodejs.org/en/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)

Assurez-vous que vous disposez des bonnes versions et téléchargez les deux packages. Vous pouvez le vérifier en utilisant les commandes suivantes dans votre terminal :

```bash
# Check Node.js version
node --version

# Check Mongo version
mongo --version
```

# Instructions :

. Clonez le dépôt sur votre ordinateur
. Ouvrir une fenêtre de terminal dans le projet cloné
. Exécutez les commandes suivantes :

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev:server

# Populate database with two users
npm populate-db
```

Votre serveur devrait maintenant fonctionner à l’ adresse http://locahost:3001 et vous aurez désormais deux utilisateurs dans votre base de données MongoDB !

## Populated Database Data

Une fois le script exécuté populate-db, vous devriez avoir deux utilisateurs dans votre base de données :

### Tony Stark

- First Name: `Tony`
- Last Name: `Stark`
- Email: `tony@stark.com`
- Password: `password123`

### Steve Rogers

- First Name: `Steve`,
- Last Name: `Rogers`,
- Email: `steve@rogers.com`,
- Password: `password456`

 # Documentation de l'API

Pour en savoir plus sur le fonctionnement de l'API, une fois que vous avez démarré votre environnement local, vous pouvez visiter : http://localhost:3001/api-docs

# Ressources de conception

Du HTML et du CSS statiques ont été créés pour la majeure partie du site et se trouvent dans : `/designs`.

Pour certaines fonctionnalités dynamiques, comme l'activation de l'édition utilisateur, il existe une maquette pour cela dans `/designs/wireframes/edit-user-name.png`.

Et pour le modèle d'API que vous proposerez pour les transactions, le wireframe se trouve dans `/designs/wireframes/transactions.png`.


