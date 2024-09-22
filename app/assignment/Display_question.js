import "./display_question.css";

function DisplayQuestion() {
    return (
        <div className="question">
            <div className="scores">
                <span className="questions">Question</span>
                <span className="score">Score +5</span>
            </div>
            <div className="question_contain">
                <form className="formData">
                    <p className="ask"> Which of the following committees recommended inclusion of fundamental duties ?</p>
                    <div className="textquestion">
                        <input type="radio" className="questionOne" name="fav_language" value="HTML" />
                        <label htmlFor="html" className="displayQuestionOne">Tarapore Committee </label>
                    </div>
                     <div className="textquestion">
                        <input type="radio"  className="questionOne"  name="fav_language" value="CSS" />
                        <label htmlFor="css">Radha Krishnan Committee </label>
                    </div>
                    <div className="textquestion">
                        <input type="radio"  className="questionOne"  name="fav_language" value="JavaScript" />
                        <label htmlFor="javascript">Swaran Singh Committee </label>
                    </div> 
                    <div className="textquestion">
                        <input type="radio"  className="questionOne"  name="fav_language" value="JavaScript" />
                        <label htmlFor="javascript">Balwantrai Mehta Committee </label>
                    </div> 
                </form>
                
            </div>
            
        </div>
    );
}

export default DisplayQuestion;
