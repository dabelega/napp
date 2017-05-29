import React from 'react';
import { render } from 'react-dom';
import { 
  BrowserRouter as Router, Route, Switch, Redirect
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
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route 
          exact path="/source" render={() => (
            isAuthenticated() ? (
              <Source />
            ) : (
              <Redirect 
                to={{
                  pathname: '/',
                  state: 'Please sign in to view sources' 
                }} 
              />
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

