import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Closet from './components/Closet';
import Footbar from './components/Footbar';
import RecommendPage from './components/RecommendPage';
import HomePage from './components/HomePage';

import './styles/App.css'

function App() {
  const [version, setVersion] = useState('v1');
  const handleSwitchVersion = () => {
    if (version === 'v1') {
      setVersion('v2');
    } else {
      setVersion('v1');
    }
  }

  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path="/recommend" >
            <RecommendPage version={version} handleSwitchVersion={handleSwitchVersion} />
          </Route>
          <Route path="/closet" >
            <Closet />
          </Route>
          <Route exact path="/" >
            <HomePage version={version} />
          </Route>
        </Switch>
        <Footbar />
      </div>
    </Router>
  );
}

export default App;
