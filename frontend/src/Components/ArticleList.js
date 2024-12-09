import React, { useEffect, useState } from "react";
import api from "../api/axiosConfig";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await api.get("/articles");
        setArticles(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return <p>Chargement des articles...</p>;
  }

  return (
    <div>
      <h1>Liste des Articles</h1>
      {articles.length === 0 ? (
        <p>Aucun article disponible.</p>
      ) : (
        <ul>
          {articles.map((article) => (
            <li key={article._id}>
              <h2>{article.title}</h2>
              <p>{article.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ArticleList;
