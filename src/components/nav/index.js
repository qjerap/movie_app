import React from "react";

import Logo from "../logo";
import Search from "../search";
// import Links from "./links";
// import Burger from "./burger";

import styles from "./styles.module.scss";

export const Nav = () => {
  return (
    <nav className={styles.container}>
      <div className={`${styles.nav} + container`}>
        <Logo />
        <Search />
        {
          //  <Links />
          //  <Burger />
        }
      </div>
    </nav>
  );
};

export default Nav;
