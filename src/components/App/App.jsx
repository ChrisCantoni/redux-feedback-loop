import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comment from '../Comment/Comment';
import { useSelector, useDispatch} from 'react-redux';


function App() {

  const feeling = useSelector(store => store.feeling);
  const understanding = useSelector(store => store.understanding);
  const support = useSelector(store => store.support);
  const comment = useSelector(store => store.comment);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
        <Router>
          <nav>
            <ul>
              <li><Link to="/">Feeling</Link></li>
              <li><Link to="/2">Understanding</Link></li>
              <li><Link to="/3">Support</Link></li>
              <li><Link to="/4">Comment</Link></li>
            </ul>
          </nav>
          <Route exact path="/">
            <Feeling/>
          </Route>
          <Route exact path="/2">
            <Understanding/>
          </Route>
          <Route exact path="3">
            <Support/>
          </Route>
          <Route exact path="4">
            <Comment/>
          </Route>
        </Router>
        <h3>Feeling: {feeling}</h3>
        <h3>Understanding: {understanding}</h3>
        <h3>Support: {support}</h3>
        <h3>Comment: {comment}</h3>
      </header>
    </div>
  );
}

export default App;
