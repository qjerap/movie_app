import React from "react";
import styles from "./details.module.scss";

export const Watch = ({ watch }) => {
  console.log("WATCH *******", watch);

  return (
    <div className={styles.details}>
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
    </div>
  );
};

export default Watch;
