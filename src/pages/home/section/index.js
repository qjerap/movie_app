import React from "react";
import Movies from "../../../components/moviesList/moviesCarousel.js";
import styles from "./styles.module.scss";

export default ({ title = "title" }) => {
  return (
    <section className={styles.section}>
      <div className="container">
        <h1>{title}</h1>
        <Movies url="https://api.themoviedb.org/3/discover/movie?api_key=27530fdbc7f1713e26852c635183cc82&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate" />
      </div>
    </section>
  );
};
