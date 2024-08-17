import "./question_panel.css"
import Display_question from "./Display_question";
import Filter_pop from "./Filter_popop";
import Filter from "./Filter";
import Watch from "./Watch";
import Submit_button from "./Submit_button";

function Question_panel (){
    return(
        <div className="main_container">
            <div className="question_container">
                <div className="filterWatch">
                    <div className="filterwatch">
                        <div className="watch_row">
                        <Watch/>
                    </div>
                        <Filter_pop/>
                </div>
                    <div className="filter_row">
                        <Filter/>
                    </div>
                   
                </div>
                <div className="question_col">
                    <Display_question/>
                    <Display_question/>
                    <Display_question/>
                    <Display_question/>
                    <Display_question/>
                </div>
            <div className="hide"> <Submit_button/></div>
            </div>
        </div>
    )

}
export default Question_panel;