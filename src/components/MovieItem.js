import React from "react";
import { Link } from "react-router-dom";
import "./MovieItem.css";

export default function MovieItem(props) {
  return (
    <div className="movie-item">
      <Link to={`/movie/${props.imdbId}`}>
        <h3 className="movie-title">{props.title}</h3>
        <h4>{props.year}</h4>
        <h4>
          {" "}
          {props.poster !== "N/A" ? (
            <img src={props.poster} alt={" "} />
          ) : (
            <p>no image</p>
          )}
        </h4>
      </Link>
    </div>
  );
}
