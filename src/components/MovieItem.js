import React from "react";
import { Link } from "react-router-dom";

export default function MovieItem(props) {
  return (
    <div className="movie-card">
      <Link to={`/movie/${props.imdbId}`}>
        <h3 className="title">{props.title}</h3>
        <h4>{props.year}</h4>
        <h4>
          {" "}
          {props.poster !== "N/A" ? (
            <img scr={props.poster} alt={" "} />
          ) : (
            <p>no image</p>
          )}
        </h4>
      </Link>
    </div>
  );
}
