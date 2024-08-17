import "./Filter.css"
function Filter(){
    return(
        <>
            <div className="details">
                <div className="FilterText">Filters</div>
                <div className="Question_Score">Question Score</div>
                <div className="difficulty">
                    <div className="all">All</div>
                    <div className="minimum">10</div>
                    <div className="mediam">15</div>
                    <div className="highest">20</div>
                </div>
                <div className="Questions_Attempted">Questions Attempted</div>
                <div className="totalAttemps">
                    <div className="alls">All (40) </div>
                    <div className="totalAttempted">Attempted (3)</div>
                    <div className="Unattempted">Unattempted(37)</div>
                </div>
            </div>

        </>
    )
}
export default Filter;