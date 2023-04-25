import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Gallery from './components/pages/Gallery';
import QuickFacts from './components/pages/QuickFacts';
import Quiz from './components/pages/Quiz';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Gallery' component={Gallery}  />
          {/* slides = {SliderData} */}
          <Route path='/QuickFacts' component={QuickFacts} />
          <Route path='/' component={Quiz} />
          
        </Switch>
      </Router>
    </>
  );
}

export default App;