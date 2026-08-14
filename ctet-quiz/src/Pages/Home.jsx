import "../Styles/Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home-page">
      <div className="name-watermark">FOR PRIYA SINGH</div>

      <section className="hero-section">
        <div className="hero-content">
          <div className="ctet-badge">CTET PAPER 2 • SST</div>

          <h1>
            Prepare Smarter.
            <br />
            <span>Practice Better.</span>
          </h1>

          <p>
            Practice CTET multiple-choice questions, improve your accuracy,
            and prepare confidently for your examination.
          </p>

          <div className="quiz-modes">

  <button
    className="mode-card"
    onClick={() => navigate("/quiz")}
  >
    <div className="mode-icon">📝</div>

    <div className="mode-info">
      <h3>Practice Quiz</h3>
      <p>30 random questions</p>
    </div>

    <div className="mode-arrow">→</div>
  </button>


  <button
    className="mode-card mock-mode"
    onClick={() => navigate("/mock-test")}
  >
    <div className="mode-icon">🎯</div>

    <div className="mode-info">
      <h3>Full Mock Test</h3>
      <p>Exam-style practice</p>
    </div>

    <div className="mode-arrow">→</div>
  </button>

</div>
        </div>

        <div className="practice-box">
          <div className="book-icon">📚</div>

          <h2>CTET Practice</h2>

          <p>Random questions • Instant results</p>

          <div className="practice-stats">
            <div>
              <strong>5+</strong>
              <small>Subjects</small>
            </div>

            <div>
              <strong>MCQ</strong>
              <small>Format</small>
            </div>

            <div>
              <strong>∞</strong>
              <small>Practice</small>
            </div>
          </div>
        </div>
      </section>

      <section className="subjects-section">
        <div className="subjects-heading">
          <p>CHOOSE YOUR SUBJECT</p>
          <h2>What do you want to practice?</h2>
        </div>

        <div className="subjects-grid">
          <div className="subject-card main-subject">
            <div className="subject-icon">🌍</div>
            <div>
              <h3>Social Science</h3>
              <p>Main Subject • SST</p>
            </div>
          </div>

          <div className="subject-card">
            <div className="subject-icon">🧠</div>
            <div>
              <h3>Child Development</h3>
              <p>Pedagogy & Development</p>
            </div>
          </div>

          <div className="subject-card">
            <div className="subject-icon">🔤</div>
            <div>
              <h3>English</h3>
              <p>Language Practice</p>
            </div>
          </div>

          <div className="subject-card">
            <div className="subject-icon">🇮🇳</div>
            <div>
              <h3>Hindi</h3>
              <p>Language Practice</p>
            </div>
          </div>

          <div className="subject-card">
            <div className="subject-icon">📖</div>
            <div>
              <h3>General Knowledge</h3>
              <p>General Awareness</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;