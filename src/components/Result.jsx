import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Result = () => {
  const score = localStorage.getItem('score');
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/home')
  }
  return (
    <Styleh1>
      <h1>Вы прошли тест на </h1>
      <h1> {score} баллов </h1>
      <button onClick={handleClick}>Перейти к созданию теста</button>
    </Styleh1>
  );
};

export default Result;
const Styleh1 = styled.div`
  padding-left: 600px;
`