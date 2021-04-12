import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useParams,
  useLocation,
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Cast from "./cast.js";
import Trailer from "./trailer.js";
import Watch from "./watch.js";

import styles from "./styles.module.scss";
import { MdStars } from "react-icons/md";
import { RiHeartAddLine, RiAddCircleLine } from "react-icons/ri";

import ScrollToTopOnMount from "../../tool/ScrollToTopOnMount";

export const Movie = () => {
  const location = useLocation();
  //get movie id from url params
  const params = useParams();
  const id = params.id;

  const [data, setData] = useState({});
  const streaming = data["watch/providers"]?.results?.CA;

  const [showDetails, setShowDetails] = useState("");

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=27530fdbc7f1713e26852c635183cc82&language=en-US&append_to_response=videos,credits,similar,watch/providers`
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 15 },
  };

  const slideHorizontalVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 1.5,
        duration: 1.5,
      },
    },
    exit: {
      opacity: 0,
      x: 100,
      transition: {
        delay: 1.5,
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div className={styles.movie}>
      <ScrollToTopOnMount />
      <div className={styles.backdrop}>
        <img
          src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
        />
        <div></div>
      </div>

      <div className="container ">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
          className={styles.overview}
        >
          <div className={styles.poster}>
            {" "}
            <img
              src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
              alt=""
            />
          </div>

          <div className={styles.info}>
            <h1>{data.title}</h1>

            <div className={styles.info__base}>
              <div className={styles.info__length}>{data.runtime} min</div>
              <div className={styles.info__genre}>
                {data.genres &&
                  data.genres.map((genre, index) => {
                    if (index < 3) {
                      return <h3>{genre.name}</h3>;
                    }
                  })}
              </div>
            </div>
            <div className={styles.favorites_watchlist}>
              <div>
                <RiHeartAddLine />
                <h3>favorites</h3>
              </div>
              <div>
                <RiAddCircleLine />
                <h3>watchlist</h3>
              </div>
            </div>
            <div className={styles.info__description}>
              <p>{data.overview}</p>
            </div>
            <div className={styles.info__rating}>
              <MdStars />
              <div className={styles.info__rating__note}>
                {data.vote_average}
              </div>
              <div className={styles.info__rating__total}>
                {data.vote_count} reviewed
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className={styles.menu}>
        <ul className="container">
          <NavLink activeClassName={styles.active} to={`/movie/${id}/cast`}>
            Cast
          </NavLink>

          <NavLink activeClassName={styles.active} to={`/movie/${id}/trailer`}>
            Trailer
          </NavLink>

          <NavLink activeClassName={styles.active} to={`/movie/${id}/watch`}>
            Streaming
          </NavLink>
        </ul>
      </div>

      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path={`/movie/${id}/cast`}>
            <Cast cast={data.credits && data.credits.cast} />
          </Route>
          <Route path={`/movie/${id}/trailer`}>
            <Trailer exact trailer={data.videos?.results[0]?.key} />
          </Route>
          <Route path={`/movie/${id}/watch`}>
            <Watch exact watch={streaming} />
          </Route>
        </Switch>
      </AnimatePresence>
    </motion.div>
  );
};

export default Movie;
