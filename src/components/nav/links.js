import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./links.module.scss";

export const Links = () => {
  return (
    <div className={styles.links}>
      <NavLink
        data-name="new releases"
        activeClassName="selected"
        activeStyle={{
          fontWeight: "bold",
          color: "#e40c2b",
        }}
        to="/new"
      >
        New
      </NavLink>
      <NavLink
        data-name="Trending"
        activeClassName="selected"
        activeStyle={{
          fontWeight: "bold",
          color: "#e40c2b",
        }}
        to="trending"
      >
        Trending
      </NavLink>
      <NavLink
        data-name="new releases"
        activeClassName="selected"
        activeStyle={{
          fontWeight: "bold",
          color: "#e40c2b",
        }}
        to="/favorites"
      >
        Favorites
      </NavLink>
      <NavLink
        data-name="new releases"
        activeClassName="selected"
        activeStyle={{
          fontWeight: "bold",
          color: "#e40c2b",
        }}
        to="/watchlist"
      >
        Watchlist
      </NavLink>
    </div>
  );
};

export default Links;
