import React from "react";
import styles from "./details.module.scss";
import { motion } from "framer-motion";
import { slideHorizontal as variants } from "../../tool/MotionVariants";

export const Watch = ({ watch }) => {


  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
      className={styles.details}
    >
      <div className="container">
        <div className={styles.watch}>
          <ul>
            <li>
              <a href="#">
                <img
                  className={styles.providerLogo}
                  src="https://image.tmdb.org/t/p/w500/9A1JSVmSxsyaBK4SUFsYVqbAYfW.jpg"
                  alt="netflix"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  className={styles.providerLogo}
                  src="https://image.tmdb.org/t/p/w500/dgPueyEdOwpQ10fjuhL2WYFQwQs.jpg"
                  alt="disney"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  className={styles.providerLogo}
                  src="https://image.tmdb.org/t/p/w500/68MNrwlkpF7WnmNPXLah69CR5cb.jpg"
                  alt="amazon"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  className={styles.providerLogo}
                  src="https://image.tmdb.org/t/p/w500/cdbemLV18peKH7NmH8MzWCRRD2f.jpg"
                  alt="crave"
                />
              </a>
            </li>
            {
              //   watch?.map((provider) => {
              //   return (
              //       <li>
              //         <a href="#">
              //             <img
              //               className={styles.providerLogo}
              //               src={`https://image.tmdb.org/t/p/w500/${provider.logo_path}`}
              //               alt=""
              //             />
              //         </a>
              //       </li>
              //   );
              // })
            }
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Watch;
