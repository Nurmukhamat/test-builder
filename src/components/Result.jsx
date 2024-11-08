import React from 'react';
import styled from 'styled-components';

const Result = () => {
  const score = localStorage.getItem('score');

  return (
    <div>
      <Styleh1>Вы прошли тест на </Styleh1>
      <Styleh1> {score} баллов </Styleh1>
    </div>
  );
};

export default Result;
const Styleh1 = styled.h1`
  padding-left: 600px;
`