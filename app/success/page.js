import "./success_page.css";
import Header from "../Header";

function Success_page(){
    return(
        <div className="successPage">
            <Header/>
            <div className="success_container">
                <div className="tick">
                    <img src="tick.png" className="ticks" alt=""/>
                </div>
                <div className=" text">
                    <div className="Successfully">Successfully Sumbitted</div>
                    <p className="completing">Thank you for completing the test! </p>
                    <p className="Ptag">Review your results and keep practicing. 
                    Great job and keep up the hard work!</p>
                </div>
                <div className="score">
                    <button className="scoreBtn">
                        <a href="score" className="Score_link"> Check Your Score</a>
                    </button>
                </div>
            </div>

        </div>
    )

}
export default Success_page;