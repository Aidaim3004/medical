import React from 'react';
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Projects from "./components/Projects";
import Works from "./components/Works";
import Calendar from "./components/Calendar";
import Benefits from "./components/Benefits";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/works" element={<Works/>}/>
          <Route path="/calendar" element={<Calendar/>}/>
          <Route path="/benefits" element={<Benefits/>}/>
      </Routes>
    </BrowserRouter>
  )
    ;
};

export default App;