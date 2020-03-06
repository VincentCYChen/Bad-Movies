//Select one db to work with:
//For SQL
// const sqlDb = require('../../db/sql');
//For Mongo
const { db, favMovies } = require('../../db/mongodb');

module.exports = {
  // save
  // get...
  // crud
  saveMovie: (data, callback) => {
    console.log(data);
    let movie = new favMovies({
      api_id: data.api_id,
      title: data.title,
      poster_path: data.poster_path,
      release_date: data.release_date,
      vote_average: data.vote_average
    });
    movie.save((err, movie) => {
      if (err) {
        console.log(err);
      } else {
        callback(null, movie);
      }
    });
  },
  getMovie: callback => {
    favMovies.find((err, movies) => {
      if (err) {
        console.log(err);
      } else {
        console.log(movies);
        callback(null, movies);
      }
    });
  },
  deleteMovie: () => {}
};
