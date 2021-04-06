import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

export const Movies = ({ title, url }) => {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=27530fdbc7f1713e26852c635183cc82&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => setData(data.results));
  }, []);

  return (
    <div className="container margin-T-B">
      <h1>{title}</h1>

      <div className={styles.movies}>
        {data.map((mov) => {
          return (
            <Link to={`/movie/${mov.id}/cast`} className={styles.movie}>
              {mov.vote_count > 0 && (
                <span className={styles.notation}>{mov.vote_average}</span>
              )}
              <img
                src={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`}
                alt=""
                width="200px"
              />
              <h1>{mov.title}</h1>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Movies;
