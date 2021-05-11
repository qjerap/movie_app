import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

export default () => {
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=27530fdbc7f1713e26852c635183cc82`
    )
      .then((res) => res.json())
      .then((data) => setData(data.results));
  }, []);

  const [data, setData] = useState([]);

  return (
    <div className={styles.header}>
      {data[5] && (
        <div className={styles.grid}>
          <div className={styles.card_main}>
            <img
              src={`https://image.tmdb.org/t/p/original/${data[0].backdrop_path}`}
              alt=""
            />
            <div className={styles.card__content}>
              <div className={styles.card__title}>{data[0].title}</div>
              <div className={styles.card__body}>{data[0].overview}</div>
              <Link className={styles.card__button} to={`/movie/${data[0].id}`}>See Details</Link>
            </div>
          </div>

          {data.map((movie, index) => {
            if (index > 4 || index === 0) return;
            return (
              <div className={styles.card}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                  alt=""
                />
                <div className={styles.card__content}>
                  <div className={styles.card__title}>{movie.title}</div>
                  <div className={styles.card__body}>{movie.overview}</div>
                  <Link
                    className={styles.card__button}
                    to={`/movie/${movie.id}`}
                  >
                    See Details
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
