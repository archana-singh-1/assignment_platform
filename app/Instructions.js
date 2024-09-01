import Header from "./Header";
function Instructions () {
  return(
    <div className="main">
      <Header/>
      <div className="title">MCQ Test Portal</div>
      <div className="container">
        <div className="instruction"><h4>Instructions</h4></div>
        <div className="read_carefully">Please read the instructions carefully before you begin:</div>
        <div className="timeDiv">
          <ul>
            <li>Timing: The test is timed. You have [specified time] minutes to complete all questions.</li>
            <li>The test comprises [number of questions] multiple-choice questions (MCQs).</li>
            <li>Navigation: You can navigate between questions using the Next and Previous buttons. </li>
            <li>Selection: Choose the best answer for each question. You can change your answers anytime before submitting. </li>
            <li>Submission: Once you have answered all questions, click the Submit button. You must submit before the timer runs out.</li>
            <li>Review: After submission, you may review your answers and scores.</li>
          </ul>
        </div>
        <div className="internetDiv">Please ensure a stable internet connection. If you encounter any issues, contact support immediately.</div>
        <div className="Start">Click Lets Start to begin the test. <br></br><span>Good luck!</span></div>
        <div className="border"></div>
        <div className="letsStart">
         <a href="questionpenal" className="button-link">Lets start!</a>
        </div>
        
      </div>
    </div>
  );
};
export default Instructions;