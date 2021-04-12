import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { slideUp } from "../../tool/MotionVariants";

import styles from "./styles.module.scss";

export const Movies = ({ title, url, movies, quantity = 99 }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (url) {
      fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=27530fdbc7f1713e26852c635183cc82&language=en-US&page=1`
      )
        .then((res) => res.json())
        .then((data) => setData(data.results));
    } 
     if (movies) {
      setData(movies);
    }
  }, []);

  return (
    <motion.div className="container margin-T-B">
      <h1>{title}</h1>

      <div className={styles.movies}>
        {data.map((mov, index) => {
          if (quantity > index) {
            return (
              <Link to={`/movie/${mov.id}`} className={styles.movie}>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0 }}
                  variants={slideUp(index)}
                >
                  {mov.vote_count > 0 && (
                    <span className={styles.notation}>{mov.vote_average}</span>
                  )}
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`}
                    alt=""
                    width="200px"
                  />
                  <h1>{mov.title}</h1>
                </motion.div>
              </Link>
            );
          }
        })}
      </div>
    </motion.div>
  );
};

export default Movies;
