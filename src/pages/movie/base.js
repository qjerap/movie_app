import React from "react";
import styles from "./styles.module.scss";
import { MdStars } from "react-icons/md";
import { RiHeartAddLine, RiAddCircleLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { slideVertical } from "../../tool/MotionVariants.js";

export const Base = ({ data }) => {
  return (
    <div className="container ">
      <motion.div

        className={styles.overview}
      >
        <div className={styles.poster}>
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
            <div className={styles.info__rating__note}>{data.vote_average}</div>
            <div className={styles.info__rating__total}>
              {data.vote_count} reviewed
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Base;
