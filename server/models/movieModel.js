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
    let movie = new favMovies({
      id: data.id,
      title: data.title,
      poster_path: data.poster_path,
      release_date: data.release_date,
      vote_average: data.vote_average
    });
    movie.save((err, movie) => {
      if (err) {
        callback(err);
      } else {
        callback(null, movie);
      }
    });
  },
  getMovie: callback => {
    favMovies.find((err, movies) => {
      if (err) {
        callback(err);
      } else {
        callback(null, movies);
      }
    });
  },
  deleteMovie: (id, callback) => {
    favMovies.deleteOne({ id: id }, err => {
      callback(err);
    });
  }
};
