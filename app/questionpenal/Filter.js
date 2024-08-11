import "./Filter.css"
function Filter(){
    return(
        <div className="filter_container">
            <div className="filterDetils">
                <p className="filter">Filter</p>
                <p className="questionScore">Question Score</p>
                <div className="textFliter">
                    <div className="all">All</div>
                    <div className="minimum">10</div>
                    <div className="mediam">15</div>
                    <div className="highest">20</div>
                </div>
                <div className="attempted">
                    <p className="questionAttemp">Questions Attempted</p>

                    <div className="allAttemp">
                        <p className="allAttempted">All (40) </p>
                        <p className="totalAttempted">Attempted (3)</p>
                    </div>
                    <div className="Unattempted">
                        <span>Unattempted(37)</span>

                    </div>
                </div>
            </div>

        </div>
    )

}
export default Filter;