import React from 'react';
import QuizPage from './pages/Quiz/Quiz';
import Home from './pages/Home/Home';
import Result from './pages/Result/Result'
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'



import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/quiz/:topicId" element={<QuizPage />}></Route>
        <Route path='/result/:topicId/:score' element={<Result />}></Route>
      </Routes>
    </div>
  );
}

export default App;
