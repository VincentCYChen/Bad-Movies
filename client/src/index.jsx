import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx';
import Movies from './components/Movies.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      favorites: [],
      showFaves: false
    };

    // you might have to do something important here!
    this.getMovies = this.getMovies.bind(this);
    this.getAllMovies = this.getAllMovies.bind(this);
    this.saveMovie = this.saveMovie.bind(this);
    this.getFavMovies = this.getFavMovies.bind(this);
    this.swapFavorites = this.swapFavorites.bind(this);
  }

  componentDidMount() {
    this.getAllMovies();
  }

  getAllMovies() {
    axios
      .get('/movies/search')
      .then(data => {
        this.setState({ movies: data.data });
      })
      .catch(err => console.log(err));
  }

  getMovies(id) {
    // make an axios request to your server on the GET SEARCH endpoint
    axios
      .get(`/movies/search/${id}`)
      .then(data => this.setState({ movies: data.data }))
      .catch(err => console.log(err));
  }

  getFavMovies() {
    axios
      .get('/movies/favs')
      .then(data => {
        this.setState({ favorites: data.data });
      })
      .catch(err => console.log(err));
  }

  saveMovie(movie) {
    // same as above but do something diff
    axios.post('/movies/save', {
      api_id: movie.id,
      title: movie.title,
      poster_path: movie.poster_path,
      release_date: movie.release_date,
      vote_average: movie.vote_average
    });
  }

  deleteMovie() {
    // same as above but do something diff
  }

  swapFavorites() {
    //dont touch
    this.setState({
      showFaves: !this.state.showFaves
    });
  }

  render() {
    return (
      <div className="app">
        <header className="navbar">
          <h1>Bad Movies</h1>
        </header>

        <div className="main">
          <Search
            swapFavorites={this.swapFavorites}
            showFaves={this.state.showFaves}
            getMovies={this.getMovies}
            getFavMovies={this.getFavMovies}
          />
          <Movies
            movies={
              this.state.showFaves ? this.state.favorites : this.state.movies
            }
            showFaves={this.state.showFaves}
            saveMovie={this.saveMovie}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
