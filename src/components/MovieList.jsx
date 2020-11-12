import React from 'react';
import PropTypes, { object } from 'prop-types';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        {movies.map((element) => (
          <MovieCard key={element.title} movie={element} />
        ))}
      </div>
    );
  }
}

MovieList.propTypes = { movies: PropTypes.arrayOf(object).isRequired };

// MovieList.defaultProps = {
//   movies: [
//     {
//       title: '',
//       subtitle: '',
//       storyline: '',
//       rating: 0,
//       imagePath: '',
//     },
//   ],
// };

export default MovieList;
