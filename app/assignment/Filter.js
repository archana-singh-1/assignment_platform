import "./Filter.css";

function Filter({ onFilterChange }) {
    return (
      <div className="details">
        <div className="FilterText">Filters</div>
        <div className="Question_Score">Question Score</div>
        <div className="difficulty">
          <div className="all" onClick={() => onFilterChange(null)}>All</div>
          <div className="minimum" onClick={() => onFilterChange(10)}>10</div>
          <div className="mediam" onClick={() => onFilterChange(15)}>15</div>
          <div className="highest" onClick={() => onFilterChange(20)}>20</div>
        </div>
        <div className="Questions_Attempted">Questions Attempted</div>
        <div className="totalAttemps">
          <div className="alls">All (40) </div>
          <div className="totalAttempted">Attempted (3)</div>
          <div className="Unattempted">Unattempted(37)</div>
        </div>
      </div>
    );
  }
  
  export default Filter;
