const movieModel = require('../models/movieModel.js');
const apiHelpers = require('../helpers/apiHelpers.js');
const axios = require('axios');
const { API_KEY } = require('../../config.js');

//Return requests to the client
module.exports = {
  getSearch: (req, res) => {
    // get the search genre
    // https://www.themoviedb.org/account/signup
    // get your API KEY
    // use this endpoint to search for movies by genres, you will need an API key
    // https://api.themoviedb.org/3/discover/movie
    // and sort them by horrible votes using the search parameters in the API
  },
  getGenres: (req, res) => {
    // make an axios request to get the list of official genres
    // use this endpoint, which will also require your API key: https://api.themoviedb.org/3/genre/movie/list
    // send back
    return axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
      )
      .then(dataObj => {
        console.log('dataObj-------->', dataObj.data.genres);
        res.send(dataObj.data.genres);
      })
      .catch(err => console.log(err));
  },
  saveMovie: (req, res) => {
    // Save selected movie as favorite
  },
  deleteMovie: (req, res) => {
    // Remove selected movie as favorite
  }
};
