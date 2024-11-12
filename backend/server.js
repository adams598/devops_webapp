// backend/server.js
const express = require("express");
const app = express();
const PORT = 5000;

// Endpoint API de test
app.get("/api/message", (req, res) => {
  res.json({
    message: "Bienvenue dans l’application DevOps avec React et Node.js !",
  });
});

app.listen(PORT, () => {
  console.log(`Backend démarré sur http://localhost:${PORT}`);
});
