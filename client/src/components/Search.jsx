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
  }

  componentDidMount() {
    return axios
      .get('/movies/genres')
      .then(genres => {
        console.log('componendidmount request ------->', genres);
        this.setState({ genres: genres.data });
      })
      .catch(err => console.log(err));
  }

  handleChange(e) {
    this.setState({ select: e.target.value });
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
          {this.state.genres.map(genre => {
            return <option value={genre.id}>{genre.name}</option>;
          })}
        </select>

        <br />
        <br />

        <button>Search</button>
      </div>
    );
  }
}

export default Search;
