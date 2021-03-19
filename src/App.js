import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from './Components/Header/Header';
import HomePage from './Components/HomePage/HomePage';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path='/homepage'>
          <HomePage></HomePage>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
