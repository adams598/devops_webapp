import React from "react";
import { Link } from "react-router-dom";
import "./NavigationStyle.css";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Liste des Articles</Link>
        </li>
        <li>
          <Link to="/add">Ajouter un Article</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
