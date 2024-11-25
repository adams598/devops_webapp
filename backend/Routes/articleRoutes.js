const express = require("express");
const router = express.Router();
const articleController = require("../Controllers/ArticleControllers.js");

// Routes pour les articles
router.get("/", articleController.getAllArticles);
router.post("/", articleController.createArticle);
router.put("/:id", articleController.updateArticle);
router.delete("/:id", articleController.deleteArticle);

module.exports = router;
