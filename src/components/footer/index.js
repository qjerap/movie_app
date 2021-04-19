import React from "react";

import styles from "./styles.module.scss";
import Logo from "../logo";

import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.upperFooter}>
          <div className={styles.upperLeftFooter}>
            <div className={styles.logo}>
              <Logo />
            </div>
            <div className={styles.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis, obcaecati! Tempora obcaecati exercitationem unde
              vitae quia eius rem illo odio. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Fugiat totam beatae obcaecati sint
              iusto dolorem delectus eius similique non quas exercitationem
              quam, ipsum unde odit optio fugit libero, ad ex.
            </div>
            <div className={styles.media}>
              <a href="https://romainpareja.com/" target="_blank">
                <FaFacebookSquare />
              </a>
              <a href="https://romainpareja.com/" target="_blank">
                <FaInstagramSquare />
              </a>
              <a href="https://romainpareja.com/" target="_blank">
                <FaTwitterSquare />
              </a>
              <a href="https://romainpareja.com/" target="_blank">
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className={styles.upperRightFooter}>
            <ul>
              <li>Top Links</li>
              <li>New</li>
              <li>Trendings</li>
              <li>Favorites</li>
              <li>WatchList</li>
            </ul>
            <ul>
              <li>Company</li>
              <li>New</li>
              <li>Trendings</li>
              <li>Favorites</li>
              <li>WatchList</li>
            </ul>
            <ul>
              <li>Support</li>
              <li>New</li>
              <li>Trendings</li>
              <li>Favorites</li>
              <li>WatchList</li>
            </ul>
          </div>
        </div>
        <div className={styles.lowerFooter}>
          <a href="https://romainpareja.com/" target="_blank">
            ©romainpareja
          </a>

          <ul>
            <li>
              <a href="https://www.themoviedb.org/" target="_blank">
                This product uses the TMDb API but is not endorsed or certified
                by TMDb
              </a>
            </li>

            <li>
              {" "}
              <a href="https://www.themoviedb.org/" target="_blank">
                  <img
                    src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg"
                    alt=""
                  />
              </a>
            </li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
