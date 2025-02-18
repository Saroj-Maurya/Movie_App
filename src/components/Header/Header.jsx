import React, { useState } from "react";
import "./header.css";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../../context";
import { Form, FormControl, Button } from "react-bootstrap";
import search from "../../assets/search.svg"

const Header = () => {
 
  const [searchMovie, setSearchMovie] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchMovie(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?${searchMovie}`);
  };

  return (
    <div className="header">
      <div className="headerLeft">
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <span id="movie">Movies</span>
        </NavLink>
        <NavLink to="/movies/popular" style={{ textDecoration: "none" }}>
          <span>Popular</span>
        </NavLink>
        <NavLink to="/movies/top_rated" style={{ textDecoration: "none" }}>
          <span>Top Rated</span>
        </NavLink>
        <NavLink to="/movies/upcoming" style={{ textDecoration: "none" }}>
          <span>Upcoming</span>
        </NavLink>
      </div>
      <div className="headerRight">
        <Form className="search-movie" autoComplete="off" onSubmit={handleSubmit}>
          <FormControl
            type="search"
            placeholder="Movie Search"
            className="search"
            aria-label="search"
            value={searchMovie}
            onChange={handleSearchChange}
          ></FormControl>
          <Button className="search-button" variant="secondary" type="submit">
          <img src={search} alt="search" />
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Header
