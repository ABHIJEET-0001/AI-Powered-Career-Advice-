import { useState, useEffect } from 'react';
import { appData } from '../data';

function AssessmentPage({ currentUser, updateUser, showPage }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const questions = appData.assessmentQuestions;
  const totalQuestions = questions.length;
  const isLastQuestion = currentQuestion === totalQuestions - 1;

  useEffect(() => {
    // Load selected answer if exists
    if (answers[currentQuestion] !== undefined) {
      setSelectedAnswer(answers[currentQuestion]);
    } else {
      setSelectedAnswer(null);
    }
  }, [currentQuestion, answers]);

  const selectAnswer = (index) => {
    setSelectedAnswer(index);
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = index;
    setAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (selectedAnswer === null) {
      alert('Please select an answer or skip the question.');
      return;
    }
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const skipQuestion = () => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = 'skipped';
    setAnswers(newAnswers);
    
    if (isLastQuestion) {
      finishAssessment();
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const skipAssessment = () => {
    showPage('dashboard');
  };

  const finishAssessment = () => {
    if (selectedAnswer === null && answers[currentQuestion] === undefined) {
      const newAnswers = [...answers];
      newAnswers[currentQuestion] = 'skipped';
      setAnswers(newAnswers);
    }

    updateUser({
      assessment: {
        currentQuestion,
        answers: selectedAnswer !== null ? [...answers] : answers,
        completed: true,
      }
    });
    
    showPage('dashboard');
  };

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  return (
    <div id="assessment-page" className="page active">
      <div className="container">
        <div className="assessment-container">
          <div className="assessment-header">
            <h2>Career Assessment</h2>
            <p>Answer these questions to help us understand your skills and interests.</p>
          </div>
          
          <div className="progress-text">
            <span>Question {currentQuestion + 1} of {totalQuestions}</span>
            <a href="#" style={{fontSize: '0.9rem'}} onClick={(e) => {e.preventDefault(); skipAssessment();}}>
              Skip All
            </a>
          </div>
          
          <div className="progress-bar">
            <div className="progress-fill" style={{width: `${progress}%`}}></div>
          </div>
          
          <div className="question-container">
            <h3>{question.question}</h3>
            <div className="answer-options">
              {question.options.map((option, index) => (
                <div
                  key={index}
                  className={`answer-option ${selectedAnswer === index ? 'selected' : ''}`}
                  onClick={() => selectAnswer(index)}
                >
                  {option}
                </div>
              ))}
            </div>
          </div>
          
          <div className="assessment-buttons">
            <button 
              className={`btn btn--outline ${currentQuestion === 0 ? 'hidden' : ''}`}
              onClick={prevQuestion}
            >
              Previous
            </button>
            <button className="btn btn--outline" onClick={skipQuestion}>
              Skip
            </button>
            <button 
              className={`btn btn--primary ${isLastQuestion ? 'hidden' : ''}`}
              onClick={nextQuestion}
            >
              Next
            </button>
            <button 
              className={`btn btn--primary ${isLastQuestion ? '' : 'hidden'}`}
              onClick={finishAssessment}
            >
              See Results
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssessmentPage;