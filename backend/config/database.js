const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://adamsdexter3:5nkgbXJS1zUObvG5@devops.omo5m.mongodb.net/?retryWrites=true&w=majority&appName=devops"
    );
    console.log("Connexion à MongoDB réussie !");
  } catch (error) {
    console.error("Erreur de connexion à MongoDB :", error.message);
    process.exit(1); // Quitter l'application si la connexion échoue
  }
};

module.exports = connectDatabase;
