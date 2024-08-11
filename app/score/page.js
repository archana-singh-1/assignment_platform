import Header from "../Header";
import "./score.css"
function Score(){
    return (
        <div>
            <Header/>
            <div className="your_score">
                <div className="score_details">
                    <div className="score">
                        <p>35/40</p>
                        <span>Your scored</span>
                    </div>
                </div>
                <div className="attempDetails">
                    <div className="attemp">
                        <img src="/Grp.png"/>
                        <p>Unattempted:3</p>
                    </div>
                    <div className="correct">
                        <img src="tick.png"/>
                        <p>Correct:35</p>
                    </div>
                    <div className="wrong">
                        <img src="crossIcon.png"/>
                        <p>Wrong:2</p>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Score;