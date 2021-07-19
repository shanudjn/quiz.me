import React from 'react';
import QuizPage from './pages/Quiz/Quiz';
import Home from './pages/Home/Home';
import Result from './pages/Result/Result';
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Dashboard from './pages/Dashboard/Dashboard'

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <PrivateRoute path={`/quiz/:topicId`} element={<QuizPage />} />
        {/* <PrivateRoute path={`/dashboard`} element={<Dashboard />} /> */}

        <Route path='/result/:topicId/:score' element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
