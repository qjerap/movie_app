import React from "react";
import styles from "./search.module.scss";
import { BiSearchAlt } from "react-icons/bi";

export const Search = () => {
  return (
    <form action="#" className={`${styles.search} ${styles.searchNav}`}>
      <input type="text" placeholder="Search movies" />
      <BiSearchAlt />
    </form>
  );
};

export default Search;
