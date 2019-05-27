var express = require('express');
var router = express.Router();
var recipesController = require('../controllers/recipes');
var commentsController = require('../controllers/comments');

router.get('/', recipesController.index);
router.get('/new', recipesController.new);
router.get('/:id', recipesController.show);
router.get('/:id/edit', recipesController.edit);
router.post('/:id/favorite', recipesController.favorite);
router.post('/:id/comment', commentsController.create);
router.delete('/:id/favorite', recipesController.unfavorite);
router.post('/', recipesController.create);
router.put('/:id', recipesController.update);
router.delete('/:id', recipesController.delete);

module.exports = router;