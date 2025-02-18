import React, { useEffect, useState } from "react";
import "./home.css";
import MovieList from "../../components/MovieList/MovieList";

const Home = () => {
  return (
    <>
      <div>
        <MovieList />
      </div>
    </>
  );
};

export default Home;
