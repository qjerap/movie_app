export const slideHorizontal = {
  hidden: { opacity: 0, x: -500 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    x: 500,
    transition: {
      ease: "easeInOut",
    },
  },
};

export const slideUp = (index) => {
  return {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.035 * index,
        type: "tween",
        ease: "easeInOut",
        duration: 0.25,
      },
    },
    exit: {
      opacity: 0,
      y: 50,
      transition: {
        delay: 0.035 * index,
        type: "tween",
        ease: "easeInOut",
        duration: 0.25,
      },
    },
  };
};

export const slideVertical = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    y: 50,
    transition: {
      ease: "easeInOut",
      duration: 0.3,
    },
  },
};

export const opacity = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.25,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.5,
    },
  },
};
