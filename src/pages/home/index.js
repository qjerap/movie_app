import React from "react";

import Header from "./header";
import Section from "./section";
import Movies from "../../components/moviesList/moviesCarousel";
import TopMovies from "./topMovies";

export default () => {
  return (
    <div>
      <Header />
      <Section title="New Releases">
        <Movies url="https://api.themoviedb.org/3/discover/movie?api_key=27530fdbc7f1713e26852c635183cc82&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate" />
      </Section>
      <Section title="Movies you have to watch from 2019">
        <Movies url="https://api.themoviedb.org/3/discover/movie?api_key=27530fdbc7f1713e26852c635183cc82&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&primary_release_year=2019&vote_count.gte=1000" />
      </Section>

      
    </div>
  );
};
