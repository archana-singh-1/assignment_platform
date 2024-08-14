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
            </div>
        </div>
    )

}
export default Score;