import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useHistory, } from 'react-router-dom';
import Closet from './components/Closet';
import Footbar from './components/Footbar';
import RecommendPage from './components/RecommendPage';
import HomePage from './components/HomePage';

import './styles/App.css'

function App() {
  // const history = useHistory();
  // window.onpopstate = function (event) {
  //   history.go(1);
  // };
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path="/recommend" >
            <RecommendPage />
          </Route>
          <Route path="/closet" >
            <Closet />
          </Route>
          <Route exact path="/" >
            <HomePage />
          </Route>
        </Switch>
        <Footbar />
      </div>
    </Router>
  );
}

export default App;
