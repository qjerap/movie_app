import React from "react";

import styles from "./styles.module.scss";

export const DetailsLinks = ({
  links,
  handleSelectedComponent,
  activeLink,
}) => {
  return (
    <div className={styles.menu}>
      <ul className="container">
        {links?.map((link) => {
          return (
            <li
              className={activeLink === link.toLowerCase() && styles.isActive}
              onClick={handleSelectedComponent}
              id={link.toLowerCase()}
            >
              {link}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DetailsLinks;
