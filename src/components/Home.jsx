import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {

    navigate('/test', { state: { text: inputValue } });
    setInputValue(''); 
  };

  return (
    <Stylediv>
      <Input 
        type="text" 
        value={inputValue} 
        onChange={handleInputChange} 
        placeholder="Введите название теста" 
      />
      <Button onClick={handleButtonClick}>Добавить тест</Button>
    </Stylediv>
  );
};

export default Home;


const Input = styled.input`
      width: 200px;
    height: 40px;
    outline: none;
    display: flex;
`

const Button = styled.button`
width: 80px;
height: 46px;
`
const Stylediv = styled.div`
display: flex;
justify-content: center;
gap: 5px;
margin-top: 200px;
`