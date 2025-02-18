import React from 'react'
import "./castdetails.css";
import { imageURL } from "../../config";

const Castdetails = ({cast}) => {
  return (
    <div className="cast-details"> 
        <div>
        <img src={`${imageURL}/${cast.profile_path}`} alt="" />
        </div>
        <div>
        <h3>{cast.name}</h3>
        <h3><span>Character Name : </span>{cast.character}</h3>
        </div>
    </div>
  )
}

export default Castdetails
