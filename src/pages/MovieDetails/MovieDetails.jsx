import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./moviedetails.css";
import { apiKey, apiUrl } from "../../config";

const MovieDetails = () => {
  const [movieDetail, setMovieDetail] = useState({});

  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    getData(id);
  }, [id]);

  const getData = (id) => {
    fetch(`${apiUrl}/movie/${id}?api_key=${apiKey}&language=en-US`)
      .then((res) => res.json())
      .then((data) => setMovieDetail(data));
  };

  return (
    <>
      <div className="movie-details">
        <div className="movie-header">
          <h1>{movieDetail.original_title}</h1>
          <p>{movieDetail.release_date} • {movieDetail.vote_average} • {movieDetail.runtime}</p>
          <div className="rating">
            ⭐ {movieDetail.vote_average}/10 ({movieDetail.vote_count})
          </div>
        </div>

        <div className="movie-content">
          <div className="movie-images">
            <img className="poster" src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`} alt={movieDetail.original_title} />
            {/* <div className="trailer">
              <img src={movieDetail.videol} alt="Trailer" />
              <button className="play-button">▶ Trailer</button>
            </div> */}
          </div>

          <div className="movie-info">
            <div className="genres">
              {movieDetail.genres?.map((genre, index) => (
                <span key={index}>{genre.name}</span>
              ))}
            </div>
            <p className="overview">{movieDetail.overview}</p>

            <div className="details">
              <p>
                <strong>Release Date:</strong> {movieDetail.release_date}
              </p>
              <p>
                <strong>Countries:</strong> {movieDetail.origin_country}
              </p>
              <p>
                <strong>Languages:</strong> {movieDetail.original_language}
              </p>
              <p>
                <strong>Budget:</strong> {movieDetail.budget}
              </p>
              <p>
                <strong>Revenue:</strong> {movieDetail.revenue}
              </p>
              <p>
                <strong>Tagline:</strong> {movieDetail.tagline}
              </p> 
              <p>
                <strong>Production Companies:</strong>{" "}
                {movieDetail.production_companies?.map((production, index) => (
                <span key={index}>{production.name}</span>
              ))}
              </p>
            </div>

            <Link to="/" className="homepage-btn">
              Visit Homepage →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
