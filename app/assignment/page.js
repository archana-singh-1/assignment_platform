"use client"
import { useState, useEffect } from "react";
import Allquestion from "./All_question";
import Assignment_header from "./Assignment_header";

function Question_penal() {
  const [questions, setQuestions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 5;

  class Question {
    constructor(question, correctAnswer, incorrectAnswers) {
      this.question = question;
      this.correctAnswer = correctAnswer;
      this.incorrectAnswers = incorrectAnswers;
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://the-trivia-api.com/api/questions?limit=40"
        );
        const allQuestionsData = await response.json();

        let i = 0;
        const updateQuestions = [];
        while (i < allQuestionsData.length) {
          const newQuestion = new Question(
            allQuestionsData[i].question,
            allQuestionsData[i].correctAnswer,
            allQuestionsData[i].incorrectAnswers
          );
          updateQuestions.push(newQuestion);
          i++;
        }

        setQuestions(updateQuestions);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const totalPages = Math.ceil(questions.length / questionsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * questionsPerPage;
  const currentQuestions = questions.slice(
    startIndex,
    startIndex + questionsPerPage
  );

  return (
    <div>
      <Assignment_header
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <Allquestion questions={currentQuestions} />
    </div>
  );
}

export default Question_penal;
