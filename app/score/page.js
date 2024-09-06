import Header from "../Header";
import "./score.css"
import Correct_wrong from "./Correct_wrong";
function Score(){
    return (
        <>
            <Header/>
            <div className=" score_container">
                <div className="your_score">
                    <div className="totalScore">
                        <div className="score_p">35/40</div>
                        <div className="yourScore">Your scored</div>
                    </div>
                    <div className="scoreDetails">
                        <div className="unattempted">
                            <div className="img1"><img src="Grp.png" alt=""/></div>
                            <div className="p_unattemp">
                                <p className="un-p">Unattempted</p>
                                <p className="spanDot">:</p>
                                <p className="num_p">3</p>
                            </div>
                        </div>
                        <div className="correct">
                            <div> <img src="tick.png" alt="" /></div>
                            <div className="correct_p">
                                <p className="un-p">Correct</p>
                                <p className="spanDot">:</p> 
                                <p className="num_p">35</p>
                            </div>

                        </div>
                        <div className="wrong">
                            <div> <img src="crossIcon.png" alt=""/></div>
                            <div className="wrong_p">
                                <p className="un-p">Wrong</p>
                                <p className="spanDot">:</p>
                                <p className="num_p">2</p>
                            </div>
                        </div>

                    </div>
                </div>
            <div className="scoreCheck">Check your score</div>
            <div className="scoreBorder"></div>
                <Correct_wrong/>
            </div>
           
        </>
    )
    
}
export default Score;