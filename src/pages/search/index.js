import React from "react";
import Movies from "../../components/moviesList";
import Section from "../../components/section";
import { useParams } from "react-router-dom";

export default () => {
  const params = useParams();
  const input = params.input;

  return (
      <Section title={`Search result for ${input}`}>
        <Movies
          url={`https://api.themoviedb.org/3/search/movie?api_key=27530fdbc7f1713e26852c635183cc82&language=en-US&query=${input}&page=1&include_adult=false`}
        />
      </Section>
    
  );
};
