import "../Styles/Result.css";
import { useNavigate } from "react-router-dom";

function Result({ score, totalQuestions, onRetry }) {
  const percentage = Math.round((score / totalQuestions) * 100);
  const wrong = totalQuestions - score;

const navigate = useNavigate();

  const getPerformanceMessage = () => {
    if (percentage >= 80) {
      return "Excellent performance! 🎉";
    }

    if (percentage >= 60) {
      return "Good job! Keep practicing. 💪";
    }

    return "Keep practicing. You can do better! 🌱";
  };

  return (
    <main className="result-page">

      <div className="result-watermark">
        FOR PRIYA SINGH
      </div>

      <div className="result-card">

        <div className="result-icon">
          🏆
        </div>

        <p className="result-label">
          CTET PRACTICE • COMPLETED
        </p>

        <h1>Quiz Completed!</h1>

        <p className="result-message">
          You have successfully completed your CTET practice quiz.
        </p>

        <div className="score-circle">
          <strong>{score}</strong>

          <span>
            / {totalQuestions}
          </span>
        </div>

        <p className="percentage">
          {percentage}% Score
        </p>

        <h2 className="performance-message">
          {getPerformanceMessage()}
        </h2>

        <div className="result-stats">

          <div className="stat correct-stat">
            <strong>{score}</strong>
            <span>Correct</span>
          </div>

          <div className="stat wrong-stat">
            <strong>{wrong}</strong>
            <span>Wrong</span>
          </div>

          <div className="stat total-stat">
            <strong>{totalQuestions}</strong>
            <span>Total</span>
          </div>

        </div>

        <button
          className="retry-btn"
          onClick={onRetry}
        >
          Try Again ↻
        </button>
        <button
  className="home-btn"
  onClick={() => navigate("/")}
>
  🏠 Back to Home
</button>

      </div>

    </main>
  );
}

export default Result;