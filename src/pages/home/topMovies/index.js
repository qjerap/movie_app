import React, { useEffect, useState } from "react";
import { MdStars, MdArrowBack } from "react-icons/md";

import styles from "./styles.module.scss";

export default () => {
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=27530fdbc7f1713e26852c635183cc82&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&primary_release_year=2019&vote_count.gte=1000`
    )
      .then((res) => res.json())
      .then((data) => setData({ movies: data.results, activeMainCard: 0 }));
  }, []);

  const [data, setData] = useState({});
  console.log(data);

  const switchMainCard = (e) => {
    console.log(e.target.getAttribute("data-index"));
    setData({
      ...data,
      activeMainCard: Number(e.target.getAttribute("data-index")),
    });
  };

  return (
    <div>
      {data.movies && (
        <div className={styles.topMovies}>
          <div className={styles.left}>
            <img
              src={`https://image.tmdb.org/t/p/original/${
                data.movies[data.activeMainCard].backdrop_path
              }`}
              alt=""
            />
            <div>
              <div>
                <h2>{data.movies[data.activeMainCard].title}</h2>
                <div className={styles.rating}>
                  <MdStars />
                  {data.movies[data.activeMainCard].vote_average}
                </div>
              </div>
              <p>{data.movies[data.activeMainCard].overview}</p>
            </div>
          </div>
          <div className={styles.right}>
            {data.movies.map((movie, index) => {
              if (index < 7)
                return (
                  <div
                    className={
                      index === data.activeMainCard
                        ? styles.movie_disabled
                        : styles.movie
                    }
                    data-index={index}
                    onClick={switchMainCard}
                  >
                    {index === data.activeMainCard && <MdArrowBack />}
                    <div>
                      <h4>{movie.title}</h4>
                    </div>
                    {index != data.activeMainCard && (
                      <div className={styles.rating}>
                        <MdStars />
                        {movie.vote_average}
                      </div>
                    )}
                  </div>
                );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
