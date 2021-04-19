import React from "react";
import Movies from "../../components/moviesList";
import DetailsLinks from "./detailsLinks.js";

export const SimilarMovies = ({movies}) => {
  return (
    <div>
    <DetailsLinks
      links={["You might also like"]}
      activeLink={"you might also like"}
    />
    <Movies movies={movies.similar?.results} quantity={10} />
  </div>
  );
};

export default SimilarMovies;
