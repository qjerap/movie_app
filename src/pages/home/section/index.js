import React from "react";
import { motion } from "framer-motion";
import { opacity } from "../../../tool/MotionVariants";
import styles from "./styles.module.scss";

export default ({ children, title }) => {
  return (
    <section className={styles.section}>
      <div className="container">
        <motion.h1
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={opacity}
        >
          {title}
        </motion.h1>
        {children}
      </div>
    </section>
  );
};
