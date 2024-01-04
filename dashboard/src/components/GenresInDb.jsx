import { GenreItem } from "./GenreItem";

const data = [
  {
    id: crypto.randomUUID(),
    name: "Acción",
  },
  {
    id: crypto.randomUUID(),
    name: "Animación",
  },
  {
    id: crypto.randomUUID(),
    name: "Aventura",
  },
  {
    id: crypto.randomUUID(),
    name: "Ciencia Ficción",
  },
  {
    id: crypto.randomUUID(),
    name: "Comedia",
  },
  {
    id: crypto.randomUUID(),
    name: "Documental",
  },
  {
    id: crypto.randomUUID(),
    name: "Drama",
  },
  {
    id: crypto.randomUUID(),
    name: "Fantasia",
  },
  {
    id: crypto.randomUUID(),
    name: "Infantiles",
  },
  {
    id: crypto.randomUUID(),
    name: "Musical",
  },
];

export const GenresInDb = () => {
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Genres in Data Base
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            {
                data.map(({id,name}) => <GenreItem key={id} name={name}/>)
            }
            </div>
        </div>
      </div>
    </div>
  );
};
