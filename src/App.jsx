import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import QuestionForm from './components/QuestionForm';
import Quiz from './components/Quiz';
import Result from './components/Result';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/home' element={<Home/>}/>
        {/* <Route path="/call" element={<AddQuestion />} />
        <Route path="/take-test" element={<TakeTest />} />
        <Route path="/score" element={<ScorePage />} /> */}
        <Route path="/test" element={<QuestionForm />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
      </Routes>
      
    </Router>
  );
}

export default App;
