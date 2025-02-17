import React, { useState } from "react";

const Pagination = ({ setCurrentPage, currentPage }) => {

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className="flex justify-center space-x-2 mt-4">
      <button
        className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        onClick={() => previousPage(currentPage)}
        disabled={currentPage === 1}
      >
        Prev
      </button>

      <h1>{currentPage}</h1>

      <button
        className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        onClick={() => nextPage(currentPage)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
