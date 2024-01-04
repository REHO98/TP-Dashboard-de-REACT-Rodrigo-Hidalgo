import { Card } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { TableItemMovie } from "./TableItemMovie";

const movies = [
  {
    title: "The Shawshank Redemption",
    length: 142,
    awards: 2,
    rating: 9.3,
    genres: ["Drama"],
  },
  {
    title: "The Godfather",
    length: 175,
    awards: 2,
    rating: 9.2,
    genres: ["Crime", "Drama"],
  },
  {
    title: "Pulp Fiction",
    length: 154,
    awards: 1,
    rating: 8.9,
    genres: ["Crime", "Drama"],
  },
  {
    title: "The Dark Knight",
    length: 152,
    awards: 1,
    rating: 9.0,
    genres: ["Action", "Crime", "Drama"],
  },
  {
    title: "Schindler's List",
    length: 195,
    awards: 2,
    rating: 8.9,
  },
];


export const TableMovies = () => {
  return (
    <Card>
      <Card.Body />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Duracion</th>
            <th>Rating</th>
            <th>Genero</th>
            <th>Premios</th>
          </tr>
        </thead>
        <tbody>
          {movies.map(({ title, rating, length, genres, awards }, index) => (
            <TableItemMovie
              key={index + title}
              title={title}
              rating={rating}
              length={length}
              genres={genres}
              awards={awards}
            />
          ))}
        </tbody>
      </Table>
    </Card>
  );
};
