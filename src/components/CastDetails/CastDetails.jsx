import React from 'react'
import "./castdetails.css";

const Castdetails = ({cast}) => {
  return (
    <div className="cast-details"> 
        <div>
        <img src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`} alt="" />
        </div>
        <div>
        <h3>{cast.name}</h3>
        <h3><span>Character Name : </span>{cast.character}</h3>
        </div>
    </div>
  )
}

export default Castdetails
