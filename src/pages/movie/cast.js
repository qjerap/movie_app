import React from "react";
import styles from "./details.module.scss";

export const Cast = ({ cast }) => {
  let num_actors = 6;
  return (
    <div className={styles.details}>
      <div className="container">
        <ul className={styles.actors}>
          {cast &&
            cast.map((actor) => {
              num_actors -= 1;
              if (num_actors >= 0) {
                return (
                  <li key={actor.id} className={styles.actorCard}>
                    <div className={styles.actorCard__imageContainer}>
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                        alt=""
                      />
                    </div>
                    <div>
                      <h1>{actor.name}</h1>
                      <h4>
                        <span>as</span> {actor.character}
                      </h4>
                    </div>
                  </li>
                );
              }
            })}
        </ul>
      </div>
    </div>
  );
};

export default Cast;
