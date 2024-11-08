// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Quiz = () => {
//   const navigate = useNavigate();
//   const quizData = JSON.parse(localStorage.getItem('quizData'));

//   const handleSubmit = (selectedOption) => {
//     const score = selectedOption === quizData.correctAnswer ? 10 : 0;
//     localStorage.setItem('score', score);
//     navigate('/result');
//   };

//   return (
//     <div>
//       <h1>{quizData.question}</h1>
//       {quizData.options.map((option, index) => (
//         <div key={index}>
//           <button onClick={() => handleSubmit(index)}>{option}</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Quiz;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Quiz = () => {
  const navigate = useNavigate();
  const quizData = JSON.parse(localStorage.getItem('quizData'));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleSubmit = (selectedOption) => {
    const currentQuestion = quizData[currentQuestionIndex];
    const isCorrect = selectedOption === currentQuestion.correctAnswer;

    if (isCorrect) {
      setScore((prevScore) => prevScore + 10);
    }

    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      localStorage.setItem('score', score + (isCorrect ? 10 : 0));
      navigate('/result');
    }
  };

  const currentQuestion = quizData[currentQuestionIndex];

  return (
    <Container>
      <h1>{currentQuestion.question}</h1>
      {currentQuestion.options.map((option, index) => (
        <div key={index}>
          <button onClick={() => handleSubmit(index)}>{option}</button>
        </div>
      ))}
    </Container>
  );
};

export default Quiz;
const Container = styled.div`
margin: 140px 0 0 670px;
display: flex;
flex-direction: column;
gap: 10px;
`