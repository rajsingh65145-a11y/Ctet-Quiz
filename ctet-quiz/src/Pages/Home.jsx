import "../Styles/Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">

      {/* Background decoration */}
      <div className="bg-orb orb-one"></div>
      <div className="bg-orb orb-two"></div>

      <div className="name-watermark">
        FOR PRIYA SINGH
      </div>

      {/* ================================
          HERO SECTION
      ================================ */}

      <section className="hero-section">

        <div className="hero-content">

          <div className="ctet-badge">
            <span className="badge-dot"></span>
            CTET PAPER 2 • SST
          </div>

          <h1>
            Prepare Smarter.
            <br />
            <span>Practice Better.</span>
          </h1>

          <p>
            Practice CTET multiple-choice questions, improve your accuracy,
            and prepare confidently for your examination.
          </p>

          <div className="hero-actions">

            <button
              className="start-quiz-btn"
              onClick={() => navigate("/quiz")}
            >
              Start Quiz
              <span>→</span>
            </button>

            <div className="hero-note">
              <span>✓</span>
              Instant results
            </div>

          </div>

          {/* Small stats */}

          <div className="hero-mini-stats">

            <div>
              <strong>500+</strong>
              <span>Questions</span>
            </div>

            <div>
              <strong>5+</strong>
              <span>Subjects</span>
            </div>

            <div>
              <strong>∞</strong>
              <span>Practice</span>
            </div>

          </div>

        </div>


        {/* ================================
            PRACTICE PREVIEW CARD
        ================================ */}

        <div className="practice-box">

          <div className="practice-card-top">

            <div className="book-icon">
              📚
            </div>

            <span className="live-badge">
              ● READY
            </span>

          </div>

          <h2>
            CTET Practice
          </h2>

          <p>
            Build your confidence with focused MCQ practice.
          </p>

          <div className="practice-progress">

            <div className="progress-header">
              <span>Practice Progress</span>
              <strong>∞</strong>
            </div>

            <div className="progress-line">
              <span></span>
            </div>

          </div>

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


      {/* ================================
          PRACTICE MODES
      ================================ */}

      <section className="practice-options">

        <div
          className="practice-option-card quiz-mode-card"
          onClick={() => navigate("/quiz")}
        >

          <div className="practice-option-icon">
            📝
          </div>

          <div className="practice-option-content">

            <div className="option-title-row">
              <h3>
                Practice Quiz
              </h3>

              <span className="mode-label">
                PRACTICE
              </span>
            </div>

            <p>
              50 random questions with instant feedback
            </p>

          </div>

          <span className="practice-arrow">
            →
          </span>

        </div>


        <div
          className="practice-option-card mock-mode-card"
          onClick={() => navigate("/mock-test")}
        >

          <div className="practice-option-icon mock-icon">
            🎯
          </div>

          <div className="practice-option-content">

            <div className="option-title-row">
              <h3>
                Full Mock Test
              </h3>

              <span className="mode-label">
                EXAM MODE
              </span>
            </div>

            <p>
              Exam-style test with timer and final score
            </p>

          </div>

          <span className="practice-arrow">
            →
          </span>

        </div>

      </section>


      {/* ================================
          SUBJECT SECTION
      ================================ */}

      <section className="subjects-section">

        <div className="subjects-heading">

          <div>
            <p>
              CHOOSE YOUR SUBJECT
            </p>

            <h2>
              What do you want to practice?
            </h2>
          </div>

          <span className="subject-count">
            5 Subjects
          </span>

        </div>


        <div className="subjects-grid">

          {/* Social Science */}

          <div
            className="subject-card featured-subject"
            onClick={() =>
              navigate("/quiz?subject=Social%20Science")
            }
          >

            <div className="subject-icon">
              🌍
            </div>

            <div className="subject-info">

              <h3>
                Social Science
              </h3>

              <p>
                Main Subject • SST
              </p>

            </div>

            <span className="subject-arrow">
              →
            </span>

          </div>


          {/* Child Development */}

          <div
            className="subject-card"
            onClick={() =>
              navigate("/quiz?subject=Child%20Development")
            }
          >

            <div className="subject-icon">
              🧠
            </div>

            <div className="subject-info">

              <h3>
                Child Development
              </h3>

              <p>
                Pedagogy & Development
              </p>

            </div>

            <span className="subject-arrow">
              →
            </span>

          </div>


          {/* English */}

          <div
            className="subject-card"
            onClick={() =>
              navigate("/quiz?subject=English")
            }
          >

            <div className="subject-icon">
              🔤
            </div>

            <div className="subject-info">

              <h3>
                English
              </h3>

              <p>
                Language Practice
              </p>

            </div>

            <span className="subject-arrow">
              →
            </span>

          </div>


          {/* Hindi */}

          <div
            className="subject-card"
            onClick={() =>
              navigate("/quiz?subject=Hindi")
            }
          >

            <div className="subject-icon">
              🇮🇳
            </div>

            <div className="subject-info">

              <h3>
                Hindi
              </h3>

              <p>
                Language Practice
              </p>

            </div>

            <span className="subject-arrow">
              →
            </span>

          </div>


          {/* General Knowledge */}

          <div
            className="subject-card"
            onClick={() =>
              navigate("/quiz?subject=General%20Knowledge")
            }
          >

            <div className="subject-icon">
              📖
            </div>

            <div className="subject-info">

              <h3>
                General Knowledge
              </h3>

              <p>
                General Awareness
              </p>

            </div>

            <span className="subject-arrow">
              →
            </span>

          </div>

        </div>

      </section>


      {/* ================================
          BOTTOM CTA
      ================================ */}

      <section className="bottom-cta">

        <div>

          <span className="cta-label">
            READY TO PRACTICE?
          </span>

          <h2>
            Turn practice into confidence.
          </h2>

          <p>
            Start a quiz and see how prepared you really are.
          </p>

        </div>

        <button
          onClick={() => navigate("/quiz")}
        >
          Start Practicing
          <span>→</span>
        </button>

      </section>

    </div>
  );
}

export default Home;