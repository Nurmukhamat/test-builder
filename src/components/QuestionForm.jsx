// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const QuestionForm = () => {
//     const location = useLocation();
// const text = location.state?.text || 'текст не работает';
//   const navigate = useNavigate();
//   const [question, setQuestion] = useState('');
//   const [options, setOptions] = useState(['']);
//   const [correctAnswer, setCorrectAnswer] = useState(null);

//   const addOption = () => {
//     if (options.length < 4) {
//       setOptions([...options, '']);
//     }
//   };

//   const handleOptionChange = (index, value) => {
//     const newOptions = [...options];
//     newOptions[index] = value;
//     setOptions(newOptions);
//   };

//   const removeOption = (index) => {
//     const newOptions = options.filter((_, i) => i !== index);
//     setOptions(newOptions);
//     if (correctAnswer === index) setCorrectAnswer(null);
//   };

//   const handleSave = () => {
//     const quizData = { question, options, correctAnswer };
//     localStorage.setItem('quizData', JSON.stringify(quizData));
//     navigate('/quiz');
//   };

//   return (
//     <div>
//       <h1>{text}</h1>
//       <input 
//         type="text" 
//         placeholder="Введите вопрос" 
//         value={question} 
//         onChange={(e) => setQuestion(e.target.value)} 
//       />
//       <div>
//         {options.map((option, index) => (
//           <div key={index}>
//             <input 
//               type="text" 
//               placeholder={`Вариант ${index + 1}`} 
//               value={option} 
//               onChange={(e) => handleOptionChange(index, e.target.value)} 
//             />
//             <button onClick={() => removeOption(index)}>x</button>
//             <input 
//               type="radio" 
//               checked={correctAnswer === index} 
//               onChange={() => setCorrectAnswer(index)} 
//             />
//           </div>
//         ))}
//       </div>
//       {options.length < 4 && <button onClick={addOption}>Добавить вариант</button>}
     
//       <button onClick={handleSave}>Сохранить</button>
//     </div>
//   );
// };

// export default QuestionForm;

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const QuestionForm = () => {
  const location = useLocation();
  const text = location.state?.text || 'текст не работает';
  const navigate = useNavigate();
  
  const [questions, setQuestions] = useState([{ question: '', options: [''], correctAnswer: null }]);

  const handleQuestionChange = (index, value) => {
    const newQuestions = [...questions];
    newQuestions[index].question = value;
    setQuestions(newQuestions);
  };

  const addOption = (index) => {
    if (questions[index].options.length < 4) {
      const newQuestions = [...questions];
      newQuestions[index].options.push('');
      setQuestions(newQuestions);
    }
  };

  const handleOptionChange = (questionIndex, optionIndex, value) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].options[optionIndex] = value;
    setQuestions(newQuestions);
  };

  const removeOption = (questionIndex, optionIndex) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].options = newQuestions[questionIndex].options.filter((_, i) => i !== optionIndex);
    if (newQuestions[questionIndex].correctAnswer === optionIndex) {
      newQuestions[questionIndex].correctAnswer = null;
    }
    setQuestions(newQuestions);
  };

  const addQuestion = () => {
    setQuestions([...questions, { question: '', options: [''], correctAnswer: null }]);
  };

  const handleSave = () => {
    localStorage.setItem('quizData', JSON.stringify(questions));
    navigate('/quiz');
  };

  return (
    <Container>
      <h1>{text}</h1>
      {questions.map((q, questionIndex) => (
        <div key={questionIndex}>
          <input 
            type="text" 
            placeholder="Введите вопрос" 
            value={q.question} 
            onChange={(e) => handleQuestionChange(questionIndex, e.target.value)} 
          />
          <div>
            {q.options.map((option, optionIndex) => (
              <div key={optionIndex}>
                <input 
                  type="text" 
                  placeholder={`Вариант ${optionIndex + 1}`} 
                  value={option} 
                  onChange={(e) => handleOptionChange(questionIndex, optionIndex, e.target.value)} 
                />  
                <button onClick={() => removeOption(questionIndex, optionIndex)}>x</button>
                <input 
                  type="radio" 
                  checked={q.correctAnswer === optionIndex} 
                  onChange={() => {
                    const newQuestions = [...questions];
                    newQuestions[questionIndex].correctAnswer = optionIndex;
                    setQuestions(newQuestions);
                  }} 
                />
              </div>
            ))}
          </div>
          {q.options.length < 4 && <button onClick={() => addOption(questionIndex)}>Добавить вариант</button>}
        </div>
      ))} <br />
      <DivButton>
      <button onClick={addQuestion}>Добавить вопрос</button> 
      <button onClick={handleSave}>Сохранить</button>
      </DivButton>
    </Container>
  );
};

export default QuestionForm;

const Container = styled.div`
  margin: 160px 0 0 650px;
`
const DivButton = styled.div`
display: flex;
`




















































