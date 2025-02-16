import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./card.css";
import { Link } from "react-router-dom";

const Card = ({ movie }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  // const start = 0;
  // const end = 118;

  return (
    <>
      {isLoading ? (
        <div className="movie-card">
          <SkeletonTheme color="#202020" highlightColor="#444">
            <Skeleton height={300} duration={2} />
          </SkeletonTheme>
        </div>
      ) : (
        <Link
          to={`/movie/${movie.id}`}
          style={{ textDecoration: "none", color: "red" }}
        >
          <div className="movie-card">
            <img
              className="cards_img"
              src={`https://image.tmdb.org/t/p/w500${
                movie ? movie.poster_path : ""
              }`}
              alt=""
            />

            <div className="cards_title">
              <h3>
                {movie ? (
                  <>
                    {movie.original_title.length > 20
                      ? movie.original_title.slice(0, 20) + "..."
                      : movie.original_title}
                  </>
                ) : (
                  ""
                )}
              </h3>
              <div className="content">
                <div className="ratings">
                  <i className="fas fa-star" />
                  <p>{movie ? movie.vote_average.toFixed(1) : "N/A"}</p>
                </div>

                <span>•</span>
                <p className="lang">{movie.original_language}</p>

                <span>•</span>
                <p className="year">
                  {movie ? movie.release_date.split("-")[0] : "N/A"}
                </p>
              </div>

              {/* <div className="cards_runtime">
                        {movie?movie.release_date:""}
                        <span className="card_rating">{movie?movie.vote_average:""}<i className="fas fa-star" /></span>
                    </div>
                    <div className="cards_description">{movie?movie.overview: ""}</div> */}
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default Card;
