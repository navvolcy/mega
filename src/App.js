import * as React from "react";
import UVUlogin from "./compnents/UVUlogin";
import {BrowserRouter as Router, Routes, Route, Redirect} from "react-router-dom";
import './App.css';
//import UVUlogin from "./compnents/UVUlogin";
//Use client side routing for navigating between pages.
//Use a state store.
//You must have automated testing.
//The <Resource> component is a configuration component that allows to define sub components for each of the admin view: list, edit, and create

// Admin can create and see all courses and all student logs. Admin can create a teacher, TA, or student. Admin is "god" of the system.
// Create/delet/view  Teachers, TA, and students -> 
// Create/delete/view courses & log 
// Each one will have a card that can be edited and links to the db  is Teacher, TA, and Student
function App () {
  return (                      
    <Router>
      <Routes>
        <Route exact path="/UVUlogin"  element={<UVUlogin/>}/>
        <Redirect from="/" to="/UVUlogin"/>
      </Routes>
    </Router>
    
  );
}

export default App;
