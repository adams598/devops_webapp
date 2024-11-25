const Article = require('../models/Article');

// Récupérer tous les articles
exports.getAllArticles = async (req, res) => {
    try {
        const articles = await Article.find();
        res.json(articles);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération des articles.' });
    }
};

// Ajouter un nouvel article
exports.createArticle = async (req, res) => {
    try {
        const { title, content } = req.body;
        const newArticle = new Article({ title, content });
        await newArticle.save();
        res.status(201).json(newArticle);
    } catch (error) {
        res.status(400).json({ message: 'Erreur lors de la création de l\'article.' });
    }
};

// Mettre à jour un article
exports.updateArticle = async (req, res) => {
    try {
        const { title, content } = req.body;
        const updatedArticle = await Article.findByIdAndUpdate(
            req.params.id,
            { title, content },
            { new: true }
        );
        if (!updatedArticle) {
            return res.status(404).json({ message: 'Article non trouvé.' });
        }
        res.json(updatedArticle);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la mise à jour de l\'article.' });
    }
};

// Supprimer un article
exports.deleteArticle = async (req, res) => {
    try {
        const deletedArticle = await Article.findByIdAndDelete(req.params.id);
        if (!deletedArticle) {
            return res.status(404).json({ message: 'Article non trouvé.' });
        }
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la suppression de l\'article.' });
    }
};
