import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import NotFoundPage from './components/notFound';
import Page1 from './components/testPage1';
import Page2 from './components/testPage2';
import Page3 from './components/testPage3';
import HomePage from './components/homePage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} >

          <Route path='page1' element={<Page1 />} />
          <Route path='page2' element={<Page2 />} />
          <Route path='page3' element={<Page3 />} />
          <Route path="*" element={<NotFoundPage />} />

        </Route>
      </Routes>
    </>
  );
}

export default App;
