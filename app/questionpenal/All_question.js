import "./All_question.css"
import Question from "./Question.js";
import Filter from "./Filter";
function Allquestion (){
    return(
        <div className="main_container">
            <div className="question_container">
                <Filter/>
                <div>
                <Question/>
                <Question/>
                <Question/>
                <Question/>
                <Question/>

                </div>
            </div>
        </div>
    )

}
export default Allquestion;