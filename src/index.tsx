import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';

import App from './App';
import { QuizProvider } from './Context/data-context'
import { AuthProvider } from "./Context/auth-context";
import reportWebVitals from './reportWebVitals';



ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <QuizProvider>
        <Router>
          <App />
        </Router>
      </QuizProvider>
    </AuthProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
