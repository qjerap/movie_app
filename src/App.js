import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Home from "./pages/home";
import Movies from "./components/moviesList";
import Movie from "./pages/movie";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div>
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path="/new">
            <Movies
              title="New Releases"
              url={`https://api.themoviedb.org/3/movie/upcoming?api_key=27530fdbc7f1713e26852c635183cc82&language=en-US&page=1`}
            />
          </Route>
          <Route path="/movie/:id">
            <Movie />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default App;
