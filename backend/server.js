// backend/server.js
const express = require("express");
const app = express();
const PORT = 3001;

// Endpoint API de test
app.get("/api/message", (req, res) => {
  res.json({
    message: "Bienvenue dans l’application DevOps avec React et Node.js !",
  });
});

// app.listen(PORT, () => {
//   console.log(`Backend démarré sur http://localhost:${PORT}`);
// });

app.listen(3001, "0.0.0.0", () => {
  console.log("Backend démarré sur http://localhost:3001");
});
