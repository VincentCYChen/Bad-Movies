//IF you are using OPTION 2 under server/index.js, then refer to this file

const router = require('express').Router();
const movieController = require('../controllers/movieController.js');

//Route different requests to different endpoints
router.get('/search', movieController.getSearch);
router.get('/search/:id', movieController.getSearchByGenre);
router.get('/genres', movieController.getGenres);
router.get('/favs', movieController.getFavs);
router.post('/save', movieController.saveMovie);
router.delete('/delete/:id', movieController.deleteMovie);

module.exports = router;
