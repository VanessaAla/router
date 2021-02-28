import React from "react";
import { Link } from "react-router-dom";

export default function MovieItem(props) {
  return (
    <div>
      <p>{props.title}</p>
    </div>
  );
}
