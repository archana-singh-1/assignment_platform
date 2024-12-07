import "./allQestion.css"
import Display_question from "./Display_question";
import Filter_pop from "./Filter_popop";
import Filter from "./Filter";
import Watch from "./Watch";


function Allquestion({ questions }) {

    const questionComponents = []; 

    if (0 < questions.length) {
        for (let i = 0; i < questions.length; i++) {
            questionComponents.push(
                <Display_question questionData={questions[i]} />
            );
        }
    };

    return (
        <div className="main_container">
            <div className="question_container">
                <div className="filterWatch">
                    <div className="filterwatch">
                        <div className="watch_row">
                            <Watch />
                        </div>
                        <Filter_pop />
                    </div>
                    <div className="filter_row">
                        <Filter />
                    </div>
                </div>

                <div className="question_col">
                    {questionComponents} 
                </div>
            </div>
        </div>
    );
}

export default Allquestion;
