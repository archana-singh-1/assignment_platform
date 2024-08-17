import "./display_question.css"
function Display_question(){
    return(
        <div className="qusetion">
            <div className="scores">
                <span className="questions">Question</span>
                <span className="score">Score+5</span>
            </div>
            <div className="question_contain">
                <div className="displayQuestion">
                    <div> Which of the following committees recommended inclusion of fundamental duties ?</div>
                    <div className="questionDisplay">
                        <div className="input_box">
                            <input type="radio" id="option1" name="options" value="1"/>
                            <label for="option1">Tarapore Committee</label>
                        </div>

                        <div className="input_box">
                            <input type="radio" id="option1" name="options" value="1"/>
                            <label for="option1">Radha Krishnan Committee</label>
                        </div>

                        <div className="input_box">
                            <input type="radio" id="option1" name="options" value="1"/>
                            <label for="option1">Swaran Singh Committee</label>
                        </div>

                        <div className="input_box">
                            <input type="radio" id="option1" name="options" value="1"/>
                            <label for="option1">Balwantrai Mehta Committee</label>
                        </div> 
                </div>
            </div>

        </div>
        </div>
    )
}
export default Display_question;