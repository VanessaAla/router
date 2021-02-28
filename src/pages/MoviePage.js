import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function MoviePage() {
  const route_parameters = useParams();
  const imdb_id = route_parameters.imdb_id;

  const [movieData, set_movieData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://omdbapi.com/?apikey=8679fb8e&i=${imdb_id}`
      );
      set_movieData(response.data);
    }
    fetchData();
  }, [imdb_id]);

  return (
    <div>
      <h2>
        {movieData.Title} {movieData.Year}
      </h2>
      <p>{movieData.Genre}</p>
      <img src={movieData.Poster} alt={`${movieData.Title}'s poster`} />
      <p>IMDB Rating:</p>
      <p>{movieData.imdbRating}</p>
    </div>
  );
}
