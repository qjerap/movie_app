import React, { useEffect, useState } from "react";
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
  console.log(data);

  return (
    <div className={styles.header}>
      <div className={styles.header__grid}>
        <div className={styles.header__grid_item_main}>
          {data[0] && (
            <img
              src={`https://image.tmdb.org/t/p/original/${data[0].backdrop_path}`}
              alt=""
            />
          )}
        </div>
        <div className={styles.header__grid_item}>
          {" "}
          {data[0] && (
            <img
              src={`https://image.tmdb.org/t/p/w500/${data[1].backdrop_path}`}
              alt=""
            />
          )}
        </div>
        <div className={styles.header__grid_item}>
          {" "}
          {data[0] && (
            <img
              src={`https://image.tmdb.org/t/p/w500/${data[2].backdrop_path}`}
              alt=""
            />
          )}
        </div>
        <div className={styles.header__grid_item}>
          {" "}
          {data[0] && (
            <img
              src={`https://image.tmdb.org/t/p/w500/${data[3].backdrop_path}`}
              alt=""
            />
          )}
        </div>
        <div className={styles.header__grid_item}>
          {" "}
          {data[0] && (
            <img
              src={`https://image.tmdb.org/t/p/w500/${data[4].backdrop_path}`}
              alt=""
            />
          )}
        </div>
      </div>
    </div>
  );
};
