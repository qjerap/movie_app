import React, { useState, useEffect } from "react";
import { Redirect, useLocation, useHistory } from "react-router";
import styles from "./search.module.scss";
import { BiSearchAlt } from "react-icons/bi";

export const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search/${searchInput}`);
    setSearchInput("");
  };

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <form
      action="#"
      className={`${styles.search} ${styles.searchNav}`}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search movies"
        value={searchInput}
        onChange={handleChange}
      />
      <BiSearchAlt />
    </form>
  );
};

export default Search;
