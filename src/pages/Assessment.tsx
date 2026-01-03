import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { assessmentQuestions } from '../data/data';

const Assessment: React.FC = () => {
    const { currentUser, updateUser } = useAuth();
    const navigate = useNavigate();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<(number | 'skipped')[]>([]);

    const handleAnswer = (index: number | 'skipped') => {
        const newAnswers = [...answers];
        newAnswers[currentQuestion] = index;
        setAnswers(newAnswers);
    };

    const handleNext = () => {
        if (answers[currentQuestion] === undefined) {
            alert("Please select an answer or skip the question.");
            return;
        }
        if (currentQuestion < assessmentQuestions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            handleFinish();
        }
    };

    const handlePrev = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const handleSkip = () => {
        handleAnswer('skipped');
        if (currentQuestion < assessmentQuestions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            handleFinish();
        }
    };

    const handleFinish = () => {
        if (currentUser) {
            updateUser({
                ...currentUser,
                assessment: {
                    currentQuestion,
                    answers,
                    completed: true
                }
            });
            navigate('/dashboard');
        }
    };

    const progress = ((currentQuestion + 1) / assessmentQuestions.length) * 100;
    const question = assessmentQuestions[currentQuestion];
    const isLastQuestion = currentQuestion === assessmentQuestions.length - 1;

    return (
        <div id="assessment-page" className="page active" style={{ display: 'block' }}>
            <div className="container">
                <div className="assessment-container">
                    <div className="assessment-header">
                        <h2>Career Assessment</h2>
                        <p>Answer these questions to help us understand your skills and interests.</p>
                    </div>
                    <div className="progress-text">
                        <span>Question <span id="current-question">{currentQuestion + 1}</span> of <span id="total-questions">{assessmentQuestions.length}</span></span>
                        <button className="btn--text" style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', fontSize: '0.9rem' }} onClick={() => navigate('/dashboard')}>Skip All</button>
                    </div>
                    <div className="progress-bar">
                        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
                    </div>

                    <div className="question-container">
                        <h3>{question.question}</h3>
                        <div className="answer-options">
                            {question.options.map((option, index) => (
                                <div
                                    key={index}
                                    className={`answer-option ${answers[currentQuestion] === index ? 'selected' : ''}`}
                                    onClick={() => handleAnswer(index)}
                                >
                                    {option}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="assessment-buttons">
                        <button className={`btn btn--outline ${currentQuestion === 0 ? 'hidden' : ''}`} onClick={handlePrev}>Previous</button>
                        <button className="btn btn--outline" onClick={handleSkip}>Skip</button>
                        {isLastQuestion ? (
                            <button className="btn btn--primary" onClick={handleFinish}>See Results</button>
                        ) : (
                            <button className="btn btn--primary" onClick={handleNext}>Next</button>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Assessment;
