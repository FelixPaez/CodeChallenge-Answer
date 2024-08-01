import React, { useContext } from "react";
import { StudentContext } from "../context/studentContext";

const Pagination: React.FC = () => {
  const studentContext = useContext(StudentContext);

  if (!studentContext) {
    return null;
  }

  const { currentPage, totalPages, setPage } = studentContext;

  const handlePrevious = () => {
    if (currentPage > 1) {
      setPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setPage(currentPage + 1);
    }
  };

  const handlePageClick = (page: number) => {
    setPage(page);
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          disabled={i === currentPage}
          style={{
            margin: "0 5px",
            padding: "5px 10px",
            cursor: i === currentPage ? "default" : "pointer",
            backgroundColor: i === currentPage ? "#007bff" : "#fff",
            color: i === currentPage ? "#fff" : "#007bff",
          }}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return <div className="pagination">{renderPageNumbers()}</div>;
};

export default Pagination;

/** 
 *    <button className='prev-button' onClick={handlePrevious} disabled={currentPage === 1}>
        prev
      </button>
       <button className='next-button' onClick={handleNext} disabled={currentPage === totalPages}>
        next
      </button>
*/
