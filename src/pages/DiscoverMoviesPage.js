//import axios from "axios";
import { useState } from "react";

export default function DiscoverMoviesPage() {
  const [status, set_statusState] = useState();
  //idle
  //searching...
  //done

  const [searchText, set_searchText] = useState("");

  const search = async () => {
    //update state to searching...
    console.log("Start searching for:", searchText);

    const queryParam = encodeURIComponent(searchText);
    //add search api call with paramter OPTION A
    const data = await fetch(
      `https://omdbapi.com/?apikey=8679fb8e&s=${queryParam}`
    ).then((r) => /*update state to search completed */ r.json());
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
    </div>
  );
}
