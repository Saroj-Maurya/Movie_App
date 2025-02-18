import React, { useEffect, useState } from "react";
import "./movielist.css";
import { data, useParams } from "react-router-dom";
import Card from "../Card/card";
import { apiKey, apiUrl } from "../../config";
import Pagination from "../Pagination/Pagination";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();
  const [currentPage, setCurrentPage] = useState(1);

  const getData = (type) => {
    fetch(
      `${apiUrl}/movie/${
        type ? type : "popular"
      }?api_key=${apiKey}&language=en-US&page=${currentPage}`
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  };

  useEffect(() => {
    getData(type);
  }, [type, currentPage]);

  return (
    <>
      <div className="movie_list">
        <h2 className="list_title">
          {(type ? type : "POPULAR").toUpperCase()}
        </h2>
        <div className="list_cards">
          {movieList.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
      <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </>
  );
};

export default MovieList;
