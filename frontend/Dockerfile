# Utiliser une image officielle Node.js pour la construction
FROM node:16-alpine as build

# Définir le répertoire de travail pour la construction
WORKDIR /app

# Copier les fichiers nécessaires pour installer les dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Construire l'application React
RUN npm run build

# Utiliser une image légère pour servir l'application
FROM nginx:alpine

# Copier les fichiers construits dans le répertoire nginx
COPY --from=build /app/build /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Démarrer le serveur nginx
CMD ["nginx", "-g", "daemon off;"]
