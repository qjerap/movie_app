import React from "react";
import styles from "./details.module.scss";
import { motion } from "framer-motion";
import { slideHorizontal as variants } from "../../tool/MotionVariants";

import Carousel from "../../components/carousel";

export const Cast = ({ cast }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
      className={styles.details}
    >
      <div className="container">
        {cast && (
          <Carousel>
            {cast &&
              cast.map((actor) => {
                return (
                  <div className="embla__slide" key={actor.id}>
                    <li className={styles.actorCard}>
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
                  </div>
                );
              })}
          </Carousel>
        )}
      </div>
    </motion.div>
  );
};

export default Cast;
