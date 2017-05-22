import React from 'react';
import { render } from 'react-dom';
import { 
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import Home from './components/containers/Home';
import Source from './components/Source';
import Article from './components/Article';
import About from './components/About';
import ContactUs from './components/ContactUs';

function isAuthenticated() {
    if (localStorage.getItem('id_token')) {
      return true;
    }
    return false;
  }

render (
  <Router>
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route 
          exact path="/source" render={() => (
            isAuthenticated() ? (
              <Source />
            ) : (
              <Home />
            )
          )} 
        />

        <Route path="/articles" component={Article} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={ContactUs} />
      </Switch>

    </div>
  </Router>,
	document.getElementById('app')
);

