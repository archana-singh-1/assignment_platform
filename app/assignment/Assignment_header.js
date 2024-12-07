import "./assignment_header.css";
import Pagination from "./Pagination";
import Submit_button from "./Submit_button";

function Assignment_header({ currentPage, totalPages, onPageChange }) {
  return (
    <>  
      <div className="assignment_header">
        <div className="main_header">
          <div className="pagination_logo">
            <img src="Logo.png" className="logoImg" alt="" />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={onPageChange}
            />
          </div>
          <Submit_button />
        </div>
      </div>
    </>
  );
}

export default Assignment_header;
