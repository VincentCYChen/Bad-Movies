const movieModel = require('../models/movieModel.js');
const apiHelpers = require('../helpers/apiHelpers.js');

//Return requests to the client
module.exports = {
  getSearch: (req, res) => {
    // get the search genre
    // https://www.themoviedb.org/account/signup
    // get your API KEY
    // use this endpoint to search for movies by genres, you will need an API key
    // https://api.themoviedb.org/3/discover/movie
    // and sort them by horrible votes using the search parameters in the API
    apiHelpers
      .getSearch()
      .then(data => {
        res.send(data.data.results);
      })
      .catch(err => console.log(err));
  },
  getSearchByGenre: (req, res) => {
    apiHelpers
      .getSearchByGenre(req.params.id)
      .then(data => res.send(data.data.results))
      .catch(err => console.log(err));
  },

  getGenres: (req, res) => {
    // make an axios request to get the list of official genres
    // use this endpoint, which will also require your API key: https://api.themoviedb.org/3/genre/movie/list
    // send back
    apiHelpers
      .getGenres()
      .then(data => {
        res.send(data.data.genres);
      })
      .catch(err => console.log(err));
  },
  saveMovie: (req, res) => {
    // Save selected movie as favorite
    movieModel.saveMovie(req.body, (err, movie) => {
      if (err) {
        res.sendstatus(500);
      } else {
        res.send('success');
      }
    });
  },
  getFavs: (req, res) => {
    movieModel.getMovie((err, movies) => {
      if (err) {
        console.log(err);
      } else {
        res.send(movies);
      }
    });
  },
  deleteMovie: (req, res) => {
    // Remove selected movie as favorite
  }
};
