import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { slideUp } from "../../tool/MotionVariants";
import Carousel from "../carousel";

import styles from "./styles.module.scss";

import { useEmblaCarousel } from "embla-carousel/react";
import { PrevButton, NextButton } from "../carousel/EmblaCarouselButton.js";

export const Movies = ({ title, url, movies, quantity = 99 }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (url) {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data.results));
    }
    if (movies) {
      setData(movies);
    }
  }, []);

  const [viewportRef, embla] = useEmblaCarousel({
    dragFree: true,
    containScroll: "trimSnaps",
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <motion.div className="">
      { data[0] &&
        <Carousel>
          {data.map((mov, index) => {
            if (quantity > index) {
              return (
                <Link
                  to={`/movie/${mov.id}`}
                  className={styles.movie}
                  key={mov.id}
                >
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0 }}
                    variants={slideUp(index)}
                  >
                    {mov.vote_count > 0 && (
                      <span className={styles.notation}>
                        {mov.vote_average}
                      </span>
                    )}
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`}
                      alt=""
                      width="200px"
                    />
                    <h1>{mov.title}</h1>
                  </motion.div>
                </Link>
              );
            }
          })}
        </Carousel>
      }
    </motion.div>
  );
};

export default Movies;
