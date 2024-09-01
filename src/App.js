// import React,{useState,useEffect} from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css';
import {SignInSide} from "./pages/front/SignInSide.js";
import {Main} from "./pages/Main/Main.js";
import {TemplateSelection} from "./pages/template/tempsele.js";
import {Template1} from "./pages/template/temp1.js"





function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<SignInSide />}/>
          <Route path='/Main' element={<Main />}/>
          <Route path='/template' element={<TemplateSelection />}/>
          <Route path='/templates/template1' element={<Template1 />}/>
          <Route path='/*' element={<h3>Error</h3>}/>
        </Routes>
      </Router>
  );
}

export default App;
