import "./App.css";
import { Switch, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import DiscoverMoviesPage from "./pages/DiscoverMoviesPage";
import Navbar from "./components/Navbar";
import MoviePage from "./pages/MoviePage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/discover/:imdb_id" component={MoviePage} exact />
        <Route path="/discover" component={DiscoverMoviesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
