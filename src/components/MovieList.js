import React from "react";
import { ListGroup } from "react-bootstrap";
import movies from "./MovieList.data";
import "./MovieList.css";

export default function MovieList() {
  return (
    <ListGroup as="ul" className="movie-list">
      {movies.map((movie) => (
        <ListGroup.Item as="li" className="movie" key={movie.id}>
          <article className="movie-content">
            <img
              height={231}
              width={154}
              src={movie.posterUrl}
              alt={movie.posterAltText}
              className="movie-poster me-3 d-block"
            />
            <div>
              <header className="mb-3">
                <h1 className="mb-0">{movie.title}</h1>
                <small>{movie.release_date}</small>
              </header>

              <p>{movie.overview}</p>
            </div>
          </article>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
