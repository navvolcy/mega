import * as React from "react";
import { Admin, Resource} from 'react-admin';
import restProvider from 'ra-data-simple-rest';
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
    // <UVUlogin/>,
    <Admin dataProvider={restProvider('http://localhost:3000')}>
      <Resource/>
    </Admin>
  );
}

export default App;
