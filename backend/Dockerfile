# Utiliser une image officielle Node.js comme base
FROM node:16-alpine

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json pour installer les dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code de l'application
COPY . .

# Exposer le port 3001 pour l'application
EXPOSE 3001

# Démarrer l'application
CMD ["npm", "start"]
