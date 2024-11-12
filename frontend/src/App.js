import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Appel à l'API backend pour récupérer le message
    fetch("/api/message")
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error("Erreur:", error));
  }, []);

  return (
    <div className="App">
      <h1>Application DevOps avec React et Node.js</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
