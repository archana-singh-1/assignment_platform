import "./All_question.css"
import Question from "./Question.js";
import Filter from "./Filter";
import Watch from "./Watch";
function Allquestion (){
    return(
        <div className="main_container">
            <div className="question_container">
                <div className="filterWatch">
                    <div className="watch_row">
                        <Watch/>
                    </div>
                    <div className="filter_row">
                        <Filter/>
                    </div>
                   
                </div>
                <div className="question_col">
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