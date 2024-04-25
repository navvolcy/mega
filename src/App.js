import * as React from "react";
import { Admin, Resource} from 'react-admin';
 
import restProvider from 'ra-data-simple-rest';
import './App.css';
import UVUlogin from "./compnents/UVUlogin";
//Use client side routing for navigating between pages.
//Use a state store.
//You must have automated testing.

export const App = () =>(
  // <UVUlogin/>,
  <Admin dataProvider={restProvider('http://localhost:3000')}>

  </Admin>
);
