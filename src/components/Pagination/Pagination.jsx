import React, { useState } from "react";
import "./pagination.css"
import leftarrow from "../../assets/left-arrow.svg"
import rightarrow from "../../assets/right-arrow.svg"



const Pagination = ({ setCurrentPage, currentPage }) => {
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className="pagination-container">
      <button
        className="prev-button"
        onClick={() => previousPage(currentPage)}
        disabled={currentPage === 1}
      >
        <img src={leftarrow} alt="Prev" />
      </button>

      <button className="button" onClick={()=>setCurrentPage(currentPage+1)}>{currentPage}</button>
      <button className="button" onClick={()=>setCurrentPage(currentPage+2)}>{currentPage+1}</button>
      <button className="button" onClick={()=>setCurrentPage(currentPage+3)}>{currentPage+2}</button>
      <button className="button" onClick={()=>setCurrentPage(currentPage+4)}>{currentPage+3}</button>

      <button className="next-button" onClick={() => nextPage(currentPage)}>
        <img src={rightarrow} alt="Next" />
      </button>
    </div>
  );
};

export default Pagination;
