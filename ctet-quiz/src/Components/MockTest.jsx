import { useState, useEffect } from "react";
import questions from "../Data/Question";
import Result from "../Pages/Result";
import "../Styles/Quiz.css";

const MOCK_QUESTIONS = {
  "Child Development": 10,
  "Social Science": 10,
  "English": 10,
};

const MOCK_DURATION = 30 * 60;

function getRandomQuestions() {
  const selectedQuestions = [];

  Object.entries(MOCK_QUESTIONS).forEach(([subject, count]) => {
    const subjectQuestions = questions.filter(
      (question) => question.subject === subject
    );

    const shuffled = [...subjectQuestions].sort(
      () => Math.random() - 0.5
    );

    selectedQuestions.push(...shuffled.slice(0, count));
  });

  return selectedQuestions.sort(() => Math.random() - 0.5);
}

function MockTest() {
  const [quizQuestions, setQuizQuestions] = useState(
    getRandomQuestions()
  );

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const [score, setScore] = useState(0);

  const [quizFinished, setQuizFinished] = useState(false);

  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);

  const [timeLeft, setTimeLeft] = useState(MOCK_DURATION);

  const question = quizQuestions[currentQuestion];

  // Timer
  
// Timer

useEffect(() => {
  if (quizFinished) {
    return;
  }

  const timer = setInterval(() => {
    setTimeLeft((prev) => {
      if (prev <= 1) {
        clearInterval(timer);
        setQuizFinished(true);
        return 0;
      }

      return prev - 1;
    });
  }, 1000);

  return () => clearInterval(timer);
}, [quizFinished]);


// Convert seconds into minutes and seconds

const minutes = Math.floor(timeLeft / 60);
const seconds = timeLeft % 60;
  // Convert seconds into minutes and seconds

  // Answer select
  const handleAnswer = (index) => {
  if (selectedAnswer !== null) return;

  setSelectedAnswer(index);

  

  if (index === question.answer) {
    setScore((prev) => prev + 1);
  }
};
  // Next question
  const handleNext = () => {
  if (currentQuestion < quizQuestions.length - 1) {
    setSelectedAnswer(null);
    setCurrentQuestion((prev) => prev + 1);
  } else {
    setShowSubmitConfirm(true);
  }
};
  // Retry
  const handleRetry = () => {
  setQuizQuestions(getRandomQuestions());
  setCurrentQuestion(0);
  setSelectedAnswer(null);
  setScore(0);
  setTimeLeft(MOCK_DURATION);
  setQuizFinished(false);
  setShowSubmitConfirm(false);
};
  // Result
  if (quizFinished) {
    return (
      <Result
        score={score}
        totalQuestions={quizQuestions.length}
        onRetry={handleRetry}
      />
    );
  }

  return (
    <main className="quiz-page">

      <div className="quiz-container">

        {/* Header */}

        <div className="quiz-header">

          <div>
            <span className="quiz-label">
              CTET MOCK TEST
            </span>

            <h1>{question.subject}</h1>
          </div>

          <div className="mock-header-right">

            <div className="question-count">
              {currentQuestion + 1} / {quizQuestions.length}
            </div>

            <div
              className={`mock-timer ${
                timeLeft <= 60 ? "danger" : ""
              }`}
            >
              ⏱️ {String(minutes).padStart(2, "0")}:
              {String(seconds).padStart(2, "0")}
            </div>

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

          <h2>{question.question}</h2>


          {/* Options */}

          <div className="options">

            {question.options.map((option, index) => {

              let optionClass = "";

              if (selectedAnswer !== null) {

                if (index === question.answer) {
                  optionClass = "correct";
                }

                else if (index === selectedAnswer) {
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

                  <span>{option}</span>

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

            {currentQuestion ===
            quizQuestions.length - 1
              ? "Finish Mock Test"
              : "Next Question →"}

          </button>
          {showSubmitConfirm && (
  <div className="submit-overlay">

    <div className="submit-modal">

      <div className="submit-icon">
        ⚠️
      </div>

      <h2>
        Finish Mock Test?
      </h2>

      <p>
        Are you sure you want to submit your mock test?
        You won't be able to change your answers after submission.
      </p>

      <div className="submit-actions">

        <button
          className="cancel-submit-btn"
          onClick={() => setShowSubmitConfirm(false)}
        >
          Continue Test
        </button>

        <button
          className="confirm-submit-btn"
          onClick={() => {
            setShowSubmitConfirm(false);
            setQuizFinished(true);
          }}
        >
          Submit Test
        </button>

      </div>

    </div>

  </div>
)}

        </div>

      </div>

    </main>
  );
}

export default MockTest;