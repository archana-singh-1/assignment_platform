import { useEffect, useState } from "react";
import "./pagination.css";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const [displayPages, setDisplayPages] = useState([]);

  useEffect(() => {
    const updatePages = () => {
      if (window.innerWidth <= 600) {
        let mobilePages = [1];

        if (currentPage > 2) {
          mobilePages.push("...");
        }

        if (currentPage > 1 && currentPage < totalPages) {
          mobilePages.push(currentPage);
        }

        if (currentPage < totalPages - 1) {
          mobilePages.push("...");
        }

        mobilePages.push(totalPages);
        setDisplayPages(mobilePages);
      } else {
        setDisplayPages(Array.from({ length: totalPages }, (_, i) => i + 1));
      }
    };

    updatePages();
    window.addEventListener("resize", updatePages);

    return () => window.removeEventListener("resize", updatePages);
  }, [currentPage, totalPages]);

  return (
    <div className="pagination">
    
      <img
        src="previous.png"
        className={`previousImag ${currentPage === 1 ? "disabled" : ""}`}
        alt="Previous"
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
      />

      
      {displayPages.map((number, index) =>
        number === "..." ? (
          <span key={index} className="dots">...</span>
        ) : (
          <button
            key={number}
            className={`pagination_button ${number === currentPage ? "active" : ""}`}
            onClick={() => onPageChange(number)}
          >
            {number}
          </button>
        )
      )}

     
      <img
        src="next.png"
        className={`nextImg ${currentPage === totalPages ? "disabled" : ""}`}
        alt="Next"
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
      />
    </div>
  );
}

export default Pagination;
