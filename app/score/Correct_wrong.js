import './correct_wrong.css'
import Correctadd from './Correctadd';
function Correct_wrong(){
    return (
        <div className="correct_worng">
            <div className='correctContainer'>
                <div className='correctDiv'>
                    <div  className='imagetick'><img src="tick.png"/></div>
                    <div className='questionNum'>10</div>
                    <div className='questionnumber'>Q1</div>
                </div>
                <div  className='Expand'><img src="Collapse.png"/></div>
            </div>


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

            <div className='borders'></div>

            <div className='correctContainer'>
                <div className='correctDiv'>
                    <div  className='imagetick'><img src="crossIcon.png"/></div>
                    <div className='questionNum'>00</div>
                    <div className='questionnumber'>Q2</div>
                </div>
                <div  className='Expand'><img src="Collapse.png"/></div>
            </div>


            <form className="wrongFormData">
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
            <div className='borders'></div>


            <div className='wrongRow'>
                <div className='correctDiv'>
                    <div  className='imagetick'><img src="crossIcon.png"/></div>
                    <div className='questionNum'>00</div>
                    <div className='questionnumber'>Q3</div>
                </div>
                <div  className='Expand'><img src="Collapse Expand.png"/></div>
            </div>
            <div className='borders_two'></div>
            <Correctadd/>
            <Correctadd/>
            <Correctadd/>
            <Correctadd/>
            <Correctadd/>
            <Correctadd/>
            <Correctadd/>
            <Correctadd/>
            <Correctadd/>


        </div>
    )

}
export default Correct_wrong;