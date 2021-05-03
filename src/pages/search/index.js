import React from "react";
import Movies from "../../components/moviesList";
import { useParams } from "react-router-dom";

export default () => {
  const params = useParams();
  const input = params.input;
  console.log(input)

  return (
    <div className="container">
      <h1>Search result for {input}</h1>
      <Movies url={`https://api.themoviedb.org/3/search/movie?api_key=27530fdbc7f1713e26852c635183cc82&language=en-US&query=${input}&page=1&include_adult=false`} />
    </div>
  );
};
