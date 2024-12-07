import "./pagination.css";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {currentPage > 1 && (
          <img src="previous.png" className="previousImag" alt=""
          onClick={() => onPageChange(currentPage - 1)}
          />
      )}
      {pageNumbers.map((number) => (
        <button
          key={number}
          className={`pagination_button ${
            number === currentPage ? "active" : ""
          }`}
          onClick={() => onPageChange(number)}
        >
          {number}
        </button>
      ))}
      {currentPage < totalPages && (
        
        
        <img src="next.png" className="nextImg" alt=""
        onClick={() => onPageChange(currentPage + 1)}
        />
      )}
    </div>
  );
}

export default Pagination;
