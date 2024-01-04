import PropTypes from "prop-types";

export const TableItemMovie = ({ title, rating, length, genres, awards }) => {
  return (
    <tr>
      <td>{title}</td>
      <td>{length}</td>
      <td>{rating}</td>
      <td>
        <ul>
          {
            genres.length ?
          genres.map((genre, id) => (
            <li key={id}>{genre}</li>
          ))
          :
            <p>Genero sin espesificar</p>
          }
        </ul>
      </td>
      <td>{awards}</td>
    </tr>
  );
};

TableItemMovie.propTypes = {
  title: PropTypes.string,
  rating: PropTypes.number,
  awards: PropTypes.number,
  length: PropTypes.number,
  genres: PropTypes.array,
}

TableItemMovie.defaultProps = {
    genres: []
}