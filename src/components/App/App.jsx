import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comment from '../Comment/Comment';
import { useSelector, useDispatch} from 'react-redux';
import Review from '../Review/Review';
import Thankyou from '../Thankyou/Thankyou';
import Admin from '../Admin/Admin';


function App() {

  const feeling = useSelector(store => store.feeling);
  const understanding = useSelector(store => store.understanding);
  const support = useSelector(store => store.support);
  const comment = useSelector(store => store.comment);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>We'd love to hear more about how you're doing.</h4>
        <br />
        <Router>
          <Route exact path="/">
            <Feeling/>
          </Route>
          <Route exact path="/understanding">
            <Understanding/>
          </Route>
          <Route exact path="/support">
            <Support/>
          </Route>
          <Route exact path="/comment">
            <Comment/>
          </Route>
          <Route exact path="/review">
            <Review/>
          </Route>
          <Route exact path="/thankyou">
            <Thankyou />
          </Route>
          <Route exact path="/admin">
            <Admin/>
          </Route>
        </Router>
      </header>
    </div>
  );
}

export default App;
