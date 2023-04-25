import '../../App.css';
import React, { useState } from 'react';

export default function Quiz() {
  const questions = [
    {
      questionText: 'What is our home galaxy called?',
      answerOptions: [
        { answerText: 'The Rosy Hoad', isCorrect: false },
        { answerText: 'The solar system', isCorrect: false },
        { answerText: 'The Milky Way', isCorrect: true },
        { answerText: 'The Big Bang', isCorrect: false },
      ],
    },
    {
      questionText: 'How many stars are there in the Milky Way?',
      answerOptions: [
        { answerText: '200 billion', isCorrect: true },
        { answerText: '5 million', isCorrect: false },
        { answerText: '6 million', isCorrect: false },
        { answerText: '700 thousand', isCorrect: false },
      ],
    },
    {
      questionText: 'How does the Sun produce Energy?',
      answerOptions: [
        { answerText: 'By nuclear fission', isCorrect: false },
        { answerText: 'By nuclear fusion', isCorrect: true },
        { answerText: 'With an electric heater', isCorrect: false },
        { answerText: 'By burning coal', isCorrect: false },
      ],
    },
    {
      questionText: 'Which is the closest star to the Sun?',
      answerOptions: [
        { answerText: 'Mercury', isCorrect: false },
        { answerText: 'Sirius', isCorrect: false },
        { answerText: 'Proxima Centauri', isCorrect: true },
        { answerText: 'Alpha centauri', isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className='app'>
      {showScore ? (
        <div className='score-section'>
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>{questions[currentQuestion].questionText}</div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}


// export default function SignUp() {
//   return <h1 className='sign-up'>Welcome to the registration page</h1>;
// }