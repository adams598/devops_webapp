// backend/server.js
const express = require("express");
const cors = require("cors");
const connectDatabase = require("./config/database.js");
const articleRoutes = require("./Routes/articleRoutes.js");
const app = express();
// Middleware pour le parsing JSON
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost"], // Frontend autorisé
    methods: ["GET", "POST", "PUT", "DELETE"], // Méthodes autorisées
    credentials: false, // Si des cookies ou identifiants sont nécessaires
  })
);
app.use(express.json());
// Endpoint API de test

// Connexion à MongoDB
connectDatabase();

// Routes principales
app.use("/api/articles", articleRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Serveur backend démarré sur le port ${PORT}`);
});
// app.get("/api/message", (req, res) => {
//   res.json({
//     message: "Bienvenue dans l’application DevOps avec React et Node.js !",
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Backend démarré sur http://localhost:${PORT}`);
// });
