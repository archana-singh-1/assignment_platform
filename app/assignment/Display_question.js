
import React from "react";
import "./display_question.css";

function DisplayQuestion({ questionData }) {
    const options = [];
    for (let incorrectAnswer of questionData.incorrectAnswers) {
        options.push(incorrectAnswer);
    }
    options.push(questionData.correctAnswer);
    const optionElements = []; 

    for (let index = 0; index < options.length; index++) {
        const option = options[index];
        optionElements.push(
            <div className="textquestion" key={index}>
                <input
                    type="radio"
                    className="questionOne"
                    name={questionData.question}
                    value={option}
                />
                <label className="displayQuestionOne">{option}</label>
            </div>
        );
    }

    return (
        <div className="question">
            <div className="scores">
                <span className="questions">Question</span>
                <span className="score">Score +5</span>
            </div>
            <div className="question_contain">
                <form className="formData">
                    <p className="ask">{questionData.question}</p>
                    {optionElements} 
                </form>
            </div>
        </div>
    );
}

export default DisplayQuestion;

