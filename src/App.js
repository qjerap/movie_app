import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Movies from "./pages/movies";
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
            <Movies title="New Releases" url={true} />
          </Route>
          <Route path="/movie/:id">
            <Movie />
          </Route>
        </Switch>
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default App;
