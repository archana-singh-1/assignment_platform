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
                            <div className="img1"><img src="Grp.png"/></div>
                            <div className="p_unattemp">Unattempted<span className="spanDot">:</span>3</div>
                        </div>
                        <div className="correct">
                            <div className="img2"><img src="tick.png" /></div>
                            <div className="correct_p">Correct<span className="spanDot">:</span> 35</div>

                        </div>
                        <div className="wrong">
                            <div className="img3"><img src="crossIcon.png"/></div>
                            <div className="wrong_p">Wrong<span className="spanDot">:</span>2</div>
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