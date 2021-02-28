import axios from "axios";
import { useState } from "react";
import MovieItem from "../components/MovieItem";

export default function DiscoverMoviesPage() {
  const [searchState, set_searchState] = useState({ status: "idle" });
  const [searchText, set_searchText] = useState("");
  const [movieState, set_movieState] = useState([]);

  const search = async (e) => {
    e.preventDefault();
    set_searchState({ status: "searching" });

    const queryParam = encodeURIComponent(searchText);

    const response = await axios.get(
      `https://omdbapi.com/?apikey=8679fb8e&s=${queryParam}`
    );
    console.log("response", response);
    set_searchState({ status: "done" });
    set_movieState(response.data.Search);
    set_searchText("");
  };

  return (
    <div>
      <h1>Discover some movies!</h1>

      <form onSubmit={search}>
        <input
          value={searchText}
          onChange={(e) => set_searchText(e.target.value)}
        />
        <button type="submit">Search</button>{" "}
      </form>

      {searchState.status === "idle" ? (
        <p>Search your favorite movies</p>
      ) : null}
      {searchState.status === "searching" ? <p>Loading ...</p> : null}
      {searchState.status === "done" ? (
        <div>
          <h2>Search Results:</h2>
          <div>
            {movieState.map((movie, index) => (
              <MovieItem
                key={index}
                title={movie.Title}
                imd
                bId={movie.imdbID}
                year={movie.Year}
                poster={movie.Poster}
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
