import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Login = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes('@gmail.com')) {
      setError('Email должен содержать @gmail.com');
    } else {
      setError('');
      navigate('/home'); 
    }
  };

  return (
    <div>
      <Container>
        <Input 
          type="text" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Email"
        /> 
        <Input 
          type="password" 
          placeholder="Пароль"
        />
        {error && < p style={{ color: 'red',fontSize: '20' }}>{error}</p>}
        <Button type="submit" onClick={handleSubmit}>Войти</Button>
      </Container>
      
    </div>
  );
};

export default Login;
const Container = styled.div`
    margin-left: 560px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    margin-top: 200px;
    width: 450px;
    height: 300px;
    border: 2px solid black;
    border-radius: 10px;
    background-color: grey;
`
const Input = styled.input`
    width: 300px;
    height: 20px;
    outline: none;
    display: flex;
`
const Button = styled.button`
margin-top: 10px;
width: 100px;
height: 30px;
border: none;
border-radius: 20px;
box-shadow: 3px 3px gray;
background-color: purple;
color: #ffff;
`