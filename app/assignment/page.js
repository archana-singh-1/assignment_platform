"use client"
import { useState, useEffect } from "react";
import Allquestion from "./All_question";
import Assignment_header from "./Assignment_header";

function Question_penal() {
  const [questions, setQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  const questionsPerPage = 5;

  class Question {
    constructor(question, correctAnswer, incorrectAnswers, difficulty) {
      this.question = question;
      this.correctAnswer = correctAnswer;
      this.incorrectAnswers = incorrectAnswers;
      this.difficulty = difficulty;
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://the-trivia-api.com/api/questions?limit=40"
        );
        const allQuestionsData = await response.json();

        const updateQuestions = allQuestionsData.map((q) => 
          new Question(q.question, q.correctAnswer, q.incorrectAnswers, q.difficulty)
        );

        setQuestions(updateQuestions);
        setFilteredQuestions(updateQuestions);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDifficultyFilter = (score) => {
    setSelectedDifficulty(score);

    let difficultyLevel;
    if (score === 10) difficultyLevel = "easy";
    else if (score === 15) difficultyLevel = "medium";
    else if (score === 20) difficultyLevel = "hard";
    else difficultyLevel = null;

    const filtered = difficultyLevel
      ? questions.filter((q) => q.difficulty === difficultyLevel)
      : questions;

    setFilteredQuestions(filtered);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(filteredQuestions.length / questionsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * questionsPerPage;
  const currentQuestions = filteredQuestions.slice(
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
      <Allquestion questions={currentQuestions} onFilterChange={handleDifficultyFilter} />
    </div>
  );
}

export default Question_penal;
