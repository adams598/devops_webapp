import React, { useState } from "react";
import api from "../api/axiosConfig";

const AddArticle = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/articles", { title, content });
      console.log("Article ajouté :", response.data);
      setTitle("");
      setContent("");
    } catch (error) {
      console.error("Erreur lors de l'ajout de l'article :", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Ajouter un Article</h1>
      <div>
        <label htmlFor="title">Titre</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="content">Contenu</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default AddArticle;
