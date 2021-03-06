import React, { useEffect, useState, useCallback } from "react";

import { useEmblaCarousel } from "embla-carousel/react";
import {
  PrevButton,
  NextButton,
} from "../../components/carousel/EmblaCarouselButton.js";

export const Carousel = ({ children }) => {
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
    <div className="embla">
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container">{children}</div>
      </div>
      {
        // <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        //   <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      }
    </div>
  );
};

export default Carousel;
