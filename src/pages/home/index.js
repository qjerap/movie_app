import React from "react";
import Header from "./header";
import Section from "../../components/section";
import Movies from "../../components/moviesList/moviesCarousel";

export default () => {
  return (
    <div>
      <Header />
      <Section title="New Releases">
        <Movies url="https://api.themoviedb.org/3/discover/movie?api_key=27530fdbc7f1713e26852c635183cc82&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate" />
      </Section>
      <Section title="Most popular movies">
        <Movies url="https://api.themoviedb.org/3/discover/movie?api_key=27530fdbc7f1713e26852c635183cc82&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&vote_count.gte=5000&with_watch_monetization_types=flatrate" />
      </Section>

      
    </div>
  );
};
