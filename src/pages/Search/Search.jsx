import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { apiKey, apiUrl } from "../../config";
import Card from "../../components/Card/card";

const Search = () => {
  const location = useLocation();
  const searchParam = location.search.slice(1);
  console.log(searchParam);

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getData(searchParam);
  }, [searchParam]);

  const getData = (searchParam) => {
    fetch(
      `${apiUrl}/search/movie?api_key=${apiKey}&language=en-US&query=${searchParam}`
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  };

  return (
    <div className="movie_list">
      <h2 className="list_title">Search Results</h2>
      <div className="list_cards">
        {movieList.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Search;
