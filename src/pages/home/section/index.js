import React from "react";
import Movies from "../../../components/moviesList/moviesCarousel.js";
import styles from "./styles.module.scss";

export default ({ children, title }) => {
  return (
    <section className={styles.section}>
      <div className="container">
        <h1>{title}</h1>
        {children}
      </div>
    </section>
  );
};
