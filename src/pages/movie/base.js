import React, { useState } from "react";
import styles from "./styles.module.scss";
import { MdStars } from "react-icons/md";
import { RiHeartAddLine, RiAddCircleLine } from "react-icons/ri";
import Skeleton from "react-loading-skeleton";
import { motion } from "framer-motion";
import CountUp from "react-countup";

export const Base = ({ data }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="container ">
      <motion.div className={styles.overview}>
        <div className={styles.poster}>
          {!loaded && <Skeleton height={683} width={455} />}
          <img
            src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
            style={loaded ? {} : { display: "none" }}
            onLoad={() => setLoaded(true)}
          />
        </div>

        <div className={styles.info}>
          <h1>{data.title || <Skeleton width={200} />}</h1>

          <div className={styles.info__base}>
            <div className={styles.info__length}>
              {data.runtime || <Skeleton width={40} />} min
            </div>

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
            <p>{data.overview || <Skeleton count={5} />}</p>
          </div>
          <div className={styles.info__rating}>
            <MdStars />
            {data.vote_average && (
              <CountUp
                start={0}
                end={data.vote_average}
                duration={2}
                decimals={1}
                className={styles.info__rating__note}
              />
            )}
            <div className={styles.info__rating__total}>
              {data.vote_count && (
                <CountUp
                  start={0}
                  end={data.vote_count}
                  duration={0.75}
                  separator=" "
                />
              )}
              <div>reviewed</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Base;
