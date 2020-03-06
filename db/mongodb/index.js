const mongoose = require('mongoose');
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect('mongodb://localhost:27017/badmovies', {
    useNewUrlParser: true
  });
}

const db = mongoose.connection;

const movieSchema = new mongoose.Schema({
  api_id: { type: Number, unique: true },
  title: String,
  poster_path: String,
  release_date: String,
  vote_average: Number
});

const favMovies = mongoose.model('favMovies', movieSchema);

mongoose.Promise = Promise;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to db...');
});

module.exports.db = db;
module.exports.favMovies = favMovies;
