import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header.js'
import Footer from './components/Footer'
import MainContent from './components/MainContent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Header></Header>
  <MainContent />
  <Footer />
  </>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals