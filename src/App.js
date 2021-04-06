import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Movies from "./pages/movies";
import Movie from "./pages/movie";


function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/new" render={() => <Movies title="New Releases" />} />
        <Route path="/movie/:id" render={() => <Movie />} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
