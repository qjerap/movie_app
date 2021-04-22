import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { slideVertical, opacity } from "../../tool/MotionVariants";

import Base from "./base.js";
import DetailsLinks from "./detailsLinks.js";
import Cast from "./cast.js";
import Trailer from "./trailer.js";
import Watch from "./watch.js";
import Movies from "../../components/moviesList/moviesCarousel.js";

import styles from "./styles.module.scss";
import ScrollToTopOnMount from "../../tool/ScrollToTopOnMount";

export const Movie = () => {
  //get movie id from url params
  const params = useParams();
  const id = params.id;

  const [movie, setMovie] = useState({});
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=27530fdbc7f1713e26852c635183cc82&language=en-US&append_to_response=videos,credits,similar,watch/providers`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, []);

  // Set witch details components will be mounted
  const [visibleComponent, setVisibleComponent] = useState("cast");
  const handleSelectedComponent = (e) => {
    if (visibleComponent === e.target.id) return;
    setVisibleComponent(e.target.id);
  };

  console.log(movie?.similar?.results);

  return (
    <div>
      <ScrollToTopOnMount />

      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={opacity}
        className={styles.backdrop}
      >
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        />
        <div></div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={slideVertical}
      >
        <Base data={movie} />
        <DetailsLinks
          handleSelectedComponent={handleSelectedComponent}
          links={["Cast", "Trailer", "Watch"]}
          activeLink={visibleComponent}
        />

        <AnimatePresence exitBeforeEnter>
          {visibleComponent === "cast" && (
            <Cast cast={movie.credits && movie.credits.cast} key={"1231"} />
          )}

          {visibleComponent === "trailer" && (
            <Trailer trailer={movie.videos?.results[0]?.key} key={"1232"} />
          )}
          {visibleComponent === "watch" && (
            <Watch watch={movie["watch/providers"]?.results?.CA} key={"1233"} />
          )}
        </AnimatePresence>

        {movie?.similar?.results[0] && (
          <div>
            <DetailsLinks
              links={["You might also like"]}
              activeLink={"you might also like"}
            />
            <div className="container">
              <Movies movies={movie.similar?.results} quantity={10} />
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Movie;
