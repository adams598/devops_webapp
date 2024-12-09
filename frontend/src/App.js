import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ArticleList from "./Components/ArticleList";
import AddArticle from "./Components/AddArticle";
import Navigation from "./Components/Navigation";
import "./App.css";

function App() {
  // const [message, setMessage] = useState("");

  // useEffect(() => {
  //   // Appel à l'API backend pour récupérer le message
  //   fetch("/api/message")
  //     .then((response) => response.json())
  //     .then((data) => setMessage(data.message))
  //     .catch((error) => console.error("Erreur:", error));
  // }, []);

  return (
    <Router>
      <div>
        {/* Menu de navigation */}
        <Navigation />

        {/* Contenu principal */}
        <Routes>
          <Route path="/" element={<ArticleList />} />
          <Route path="/add" element={<AddArticle />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
