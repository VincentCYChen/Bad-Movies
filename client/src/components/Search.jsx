import React from 'react';
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: [],
      select: 'select'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.getMoviesByGenre();
  }

  handleChange(e) {
    this.setState({ select: e.target.value }, () => {
      console.log('selection genre id ----->', this.state.select);
      this.getMoviesByGenre(this.state.select);
    });
  }

  handleClick() {
    this.props.getMovies(this.state.select);
  }

  getMoviesByGenre() {
    axios
      .get('/movies/genres')
      .then(genres => {
        this.setState({ genres: genres.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="search">
        <button
          onClick={() => {
            this.props.swapFavorites();
          }}
        >
          {this.props.showFaves ? 'Show Results' : 'Show Favorites'}
        </button>
        <br />
        <br />

        {/* Make the select options dynamic from genres !!! */}
        {/* How can you tell which option has been selected from here? */}
        <select onChange={this.handleChange} value={this.state.select}>
          <option value="select">Select a genre</option>
          {this.state.genres.map(genre => {
            return <option value={genre.id}>{genre.name}</option>;
          })}
        </select>

        <br />
        <br />

        <button onClick={this.handleClick}>Search</button>
      </div>
    );
  }
}

export default Search;
