import PropTypes from "prop-types";

export const GenreItem = ({name}) => {
  return (
    <div className="col-lg-6 mb-4">
      <div className="card bg-dark text-white shadow">
        <div className="card-body">{`${name}`}</div>
      </div>
    </div>
  );
};

GenreItem.propTypes = {
  name: PropTypes.string,
};