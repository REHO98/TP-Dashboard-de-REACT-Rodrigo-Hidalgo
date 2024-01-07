import { Card } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { TableItemMovie } from "../components/TableItemMovie";
import { useEffect, useState } from "react";

export const MoviesListPage = () => {

  const [movies, setMovies] = useState([])

  useEffect(() => {

    const apiCall = async () => {
      const reponse = await fetch('http://localhost3031/api/v1/movies')
      const result = await reponse.json()
      setMovies(result.data)
    }

    apiCall()
  }, []);

  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Movies List</h1>
      </div>
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
            {movies.map(({ title, rating, length, genre, awards }, index) => (
              <TableItemMovie
                key={index + title}
                title={title}
                rating={rating}
                length={length}
                genre={genre}
                awards={awards}
              />
            ))}
          </tbody>
        </Table>
      </Card>
    </>
  );
};
