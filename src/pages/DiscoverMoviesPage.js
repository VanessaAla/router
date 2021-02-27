import axios from "axios";
import { useState } from "react";

export default function DiscoverMoviesPage() {
  const [searchState, set_searchState] = useState({ status: "idle" });
  //idle
  //searching...
  //done

  const [searchText, set_searchText] = useState("");

  const search = async () => {
    set_searchState({ status: "searching" });
    //update state to searching...
    console.log("Start searching for:", searchText);

    const queryParam = encodeURIComponent(searchText);
    //add search api call with paramter OPTION A
    const data = await axios.get(
      `https://omdbapi.com/?apikey=8679fb8e&s=${queryParam}`
    );
    set_searchState({ status: "done", data: data.Search });
    //log out your response
    console.log("what is the response?:", data);
  };

  return (
    <div>
      <h1>Discover some movies!</h1>
      <p>
        <input
          value={searchText}
          onChange={(e) => set_searchText(e.target.value)}
        />
        <button onClick={search}>Search</button>
      </p>

      {searchState.status === "idle" ? (
        <p>Search your favorite movies</p>
      ) : null}
      {searchState.status === "searching" ? <p>Loading ...</p> : null}
      {searchState.status === "done" ? (
        <div>
          <h2>Search Results:</h2>
          <div></div>
        </div>
      ) : null}
    </div>
  );
}
