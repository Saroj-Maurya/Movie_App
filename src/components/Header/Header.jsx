import React, { useState } from "react";
import "./header.css";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../../context";
import { Form, FormControl, Button } from "react-bootstrap";
import search from "../../assets/search.svg"

const Header = () => {
  // const { search_movie, setSearch_movie } = useContext(AppContext);
  const [search_movie, setSearch_movie] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearch_movie(event.target.value);
    // setSearchTerm(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setSearchTerm(search_movie);
    // console.log(search_movie);
    navigate(`/search?${search_movie}`);
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
            value={search_movie}
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
