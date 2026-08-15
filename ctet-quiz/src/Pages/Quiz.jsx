import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import questions from "../Data/Question";
import Result from "./Result";
import "../Styles/Quiz.css";

const QUESTIONS_PER_SUBJECT = {
  "Social Science": 10,
  "English": 10,
  "Child Development": 10,
  "Hindi": 10,
  "General Knowledge": 10,
};

function getRandomFromSubject(subjectQuestions, count) {
  const shuffled = [...subjectQuestions].sort(
    () => Math.random() - 0.5
  );

  return shuffled.slice(0, count);
}

function getRandomQuestions(selectedSubject) {

  // Subject selected from Home page
  if (selectedSubject) {
    const subjectQuestions = questions.filter(
      (question) => question.subject === selectedSubject
    );

    return getRandomFromSubject(
      subjectQuestions,
      QUESTIONS_PER_SUBJECT[selectedSubject] || 10
    );
  }

  // Default mixed quiz
  const selectedQuestions = [];

  Object.entries(QUESTIONS_PER_SUBJECT).forEach(
    ([subject, count]) => {

      const subjectQuestions = questions.filter(
        (question) => question.subject === subject
      );

      const selected = getRandomFromSubject(
        subjectQuestions,
        count
      );

      selectedQuestions.push(...selected);
    }
  );

  return selectedQuestions.sort(
    () => Math.random() - 0.5
  );
}

function Quiz() {

  // Read subject from URL
  const [searchParams] = useSearchParams();

  const selectedSubject = searchParams.get("subject");

  const [quizQuestions, setQuizQuestions] = useState(
    getRandomQuestions(selectedSubject)
  );

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const [score, setScore] = useState(0);

  const [quizFinished, setQuizFinished] = useState(false);

  const question = quizQuestions[currentQuestion];

  // Answer select
  const handleAnswer = (index) => {

    if (selectedAnswer !== null) return;

    setSelectedAnswer(index);

    if (index === question.answer) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  // Next question
  const handleNext = () => {

    setSelectedAnswer(null);

    if (currentQuestion < quizQuestions.length - 1) {

      setCurrentQuestion((prev) => prev + 1);

    } else {

      setQuizFinished(true);

    }
  };

  // Retry
  const handleRetry = () => {

    setQuizQuestions(
      getRandomQuestions(selectedSubject)
    );

    setCurrentQuestion(0);

    setSelectedAnswer(null);

    setScore(0);

    setQuizFinished(false);
  };

  // Result page
  if (quizFinished) {

    return (
      <Result
        score={score}
        totalQuestions={quizQuestions.length}
        onRetry={handleRetry}
      />
    );
  }

  // Safety check
  if (!question) {

    return (
      <main className="quiz-page">
        <div className="quiz-container">

          <div className="question-card">

            <h2>
              No questions available for this subject.
            </h2>

          </div>

        </div>
      </main>
    );
  }

  return (
    <main className="quiz-page">

      <div className="quiz-container">

        {/* Header */}

        <div className="quiz-header">

          <div>

            <span className="quiz-label">
              CTET PRACTICE
            </span>

            <h1>
              {selectedSubject || question.subject}
            </h1>

          </div>

          <div className="question-count">
            {currentQuestion + 1} / {quizQuestions.length}
          </div>

        </div>


        {/* Progress */}

        <div className="progress-container">

          <div
            className="progress-bar"
            style={{
              width: `${
                ((currentQuestion + 1) /
                  quizQuestions.length) *
                100
              }%`,
            }}
          ></div>

        </div>


        {/* Question */}

        <div className="question-card">

          <p className="question-number">
            Question {currentQuestion + 1}
          </p>

          <h2>
            {question.question}
          </h2>


          {/* Options */}

          <div className="options">

            {question.options.map((option, index) => {

              let optionClass = "";

              if (selectedAnswer !== null) {

                if (index === question.answer) {

                  optionClass = "correct";

                } else if (index === selectedAnswer) {

                  optionClass = "wrong";

                }
              }

              return (
                <button
                  key={index}
                  className={`option ${optionClass}`}
                  onClick={() => handleAnswer(index)}
                >

                  <span className="option-letter">
                    {String.fromCharCode(65 + index)}
                  </span>

                  <span>
                    {option}
                  </span>

                </button>
              );
            })}

          </div>


          {/* Explanation */}

          {selectedAnswer !== null && (

            <div className="explanation">

              <strong>
                Explanation
              </strong>

              <p>
                {question.explanation}
              </p>

            </div>

          )}


          {/* Next */}

          <button
            className="next-btn"
            onClick={handleNext}
            disabled={selectedAnswer === null}
          >

            {currentQuestion === quizQuestions.length - 1
              ? "Finish Quiz"
              : "Next Question →"}

          </button>

        </div>

      </div>

    </main>
  );
}

export default Quiz;