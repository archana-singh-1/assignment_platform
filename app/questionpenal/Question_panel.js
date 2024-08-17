import "./question_panel.css"
import Display_question from "./Display_question";
import Filter from "./Filter";
import Watch from "./Watch";

function Question_panel (){
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

                    <div className="popop">
                        <div className="line">
                            <div className="col_1"></div>
                            <div className="col_2"></div>
                            <div className="col_3"></div>
                        </div>
                        <div className="mobileFilter">Filter</div>
                    </div>
                   
                </div>
                <div className="question_col">
                    <Display_question/>
                    <Display_question/>
                    <Display_question/>
                    <Display_question/>
                    <Display_question/>
                </div>
            </div>
        </div>
    )

}
export default Question_panel;