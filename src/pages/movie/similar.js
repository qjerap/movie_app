import React from "react";
import styles from "./details.module.scss";
import Movies from "../movies";

export const SimilarMovies = () => {
  return (
      <div className={styles.details}>
        <div className="container">
            <Movies quantity={5}/>
        </div>
      </div>
      );
};

export default SimilarMovies;
