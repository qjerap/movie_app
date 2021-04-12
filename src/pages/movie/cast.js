import React from "react";
import styles from "./details.module.scss";
import { motion } from "framer-motion";
import { slideHorizontal as variants } from "../../tool/MotionVariants";

export const Cast = ({ cast }) => {
  
  let num_actors = 6;

  return (
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={variants}
        className={styles.details}
      >
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
      </motion.div>
    
  );
};

export default Cast;
