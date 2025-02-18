import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./moviedetails.css";
import { apiKey, apiUrl, imageURL } from "../../config";
import Castdetails from "../../components/CastDetails/castdetails";
import play from "../../assets/play.svg";

const MovieDetails = () => {
  const [movieDetail, setMovieDetail] = useState({});
  const [castDetail, setCastDetail] = useState([]);

  const { id } = useParams();
  console.log(id);

  const getData = (id) => {
    fetch(`${apiUrl}/movie/${id}?api_key=${apiKey}&language=en-US`)
      .then((res) => res.json())
      .then((data) => setMovieDetail(data));
  };

  const fetchData = async (id) => {
    try {
      const res = await fetch(
        `${apiUrl}/movie/${id}/credits?api_key=${apiKey}&language=en-US`
      );
      const data = await res.json();
      setCastDetail(data.cast);
      console.log(data.cast);
    } catch (error) {
      console.log(error)
    }
  };
  // const getCastData = (id) => {
  //   fetch(`${apiUrl}/movie/${id}/credits?api_key=${apiKey}&language=en-US`)
  //     .then((res) => res.json())
  //     .then((data) => setCastDetail(data));
  //     console.log(castDetail)
  // };

  useEffect(() => {
    getData(id);
    // getCastData(id);
    fetchData(id);
  }, [id]);

  const formatRuntime = (totalSeconds) => {
    // const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${minutes}m ${seconds}s`;
  };

  console.log(formatRuntime(movieDetail.runtime));

  return (
    <>
      <div className="movie-container">
        <div className="movie-content">
          <div className="movie-background">
            <img
              className="background-poster"
              src={`${imageURL}/${movieDetail.backdrop_path}`}
              alt={movieDetail.original_title}
            />

            <div className="movie-post">
              <div className="movie-poster">
                <img
                  className="poster"
                  src={`${imageURL}/${movieDetail.poster_path}`}
                  alt={movieDetail.original_title}
                />
              </div>

              <div className="movie-details">
                <h2 className="movie-title">{movieDetail.original_title}</h2>
                <p className="movie-rating">
                  Rating: <span>{movieDetail.vote_average}</span>
                </p>
                <div className="movie-info">
                  <span className="movie-duration">
                    {formatRuntime(movieDetail.runtime)}
                  </span>
                  <p className="movie-genres">
                    {movieDetail.genres?.map((genre, index) => (
                      <span key={index}>{genre.name}</span>
                    ))}
                  </p>
                </div>
                <p className="movie-release">
                  Release Date: {movieDetail.release_date}
                </p>
                <button className="movie-trailer">
                  <img src={play} alt="search" />
                  <span>Trailer</span>
                </button>
              </div>
            </div>

            <div className="movie-overview">
              <h3 className="movie-overview-title">Overview</h3>
              <p className="overview">{movieDetail.overview}</p>
            </div>
          </div>
        </div>

        <div className="cast-container">
          {castDetail.map((cast, index) => (
            <Castdetails cast={cast} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
