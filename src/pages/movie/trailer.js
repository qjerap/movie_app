import React from "react";
import styles from "./details.module.scss";

export const Trailer = ({ trailer }) => {

  return (
    <div className={styles.details}>
      <div className="container">

        <div className={styles.trailers}>
            <iframe
            //   width="560"
            //   height="315"
              src={`https://www.youtube-nocookie.com/embed/${trailer}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen={1}
            ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Trailer;
