import React, { useEffect, useState } from "react";
import "./movielist.css";
import { data, useParams } from "react-router-dom";
import Card from "../Card/card";
import { apiKey, apiUrl } from "../../config";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    getData(type);
  }, [type]);

  const getData = (type) => {
    fetch(
      `${apiUrl}/movie/${
        type ? type : "popular"
      }?api_key=${apiKey}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  };

  return (
    <div className="movie_list">
      <h2 className="list_title">{(type ? type : "POPULAR").toUpperCase()}</h2>
      <div className="list_cards">
        {movieList.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
