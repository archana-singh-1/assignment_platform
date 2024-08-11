import "./Question.css"

function Question(){
    return(
        <div className="qusetion">
        <div className="scores">
            <span className="questions">Question+1</span>
            <span className="score">Score+5</span>
        </div>
        <div className="question_contain">
            <div className="displayQuestion">
                Which of the following committees recommended inclusion of fundamental duties ?
                <div className="questionDisplay">
                    <div>
                        <input type="radio" id="option1" name="options" value="1"/>
                        <label for="option1">Tarapore Committee</label>
                    </div>

                <div>
                    <input type="radio" id="option1" name="options" value="1"/>
                    <label for="option1">Radha Krishnan Committee</label>
                </div>

                <div>
                    <input type="radio" id="option1" name="options" value="1"/>
                    <label for="option1">Swaran Singh Committee</label>
                </div>

                <div>
                    <input type="radio" id="option1" name="options" value="1"/>
                    <label for="option1">Balwantrai Mehta Committee</label>
                </div> 
                </div>
            </div>

        </div>
        </div>
    )

}
export default Question;