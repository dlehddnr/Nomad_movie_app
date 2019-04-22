import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ poster, title, genres, synopsis }) {
  return (
    <div className="Movie">
      <div className="Movie__Columns">
        <div className="Movie__Column">
          <MoviePoster poster={poster} alt={title} />
        </div>
        <div className="Movie__Column">
          <h1>{title}</h1>
          <div className="Movie__Genres">
            {genres.map((genre, index) => (
              <MovieGenre genre={genre} key={index} />
            ))}
          </div>
          <p className="Movie__synopsis">{synopsis}</p>
        </div>
      </div>
    </div>
  );
}

function MovieGenre({ genre }) {
  return <span className="Movie_Genres">{genre} </span>;
}

function MoviePoster({ poster, alt }) {
  return <img src={poster} alt={alt} title={alt} className="Movie__poster" />;
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  synopsis: PropTypes.string.isRequired
};

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

MovieGenre.propTypes = {
  genres: PropTypes.string.isRequired
};

export default Movie;
