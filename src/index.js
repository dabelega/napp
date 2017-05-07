import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Source from './components/Source';
import Article from './components/Article';


render (
		<Router>
			<div>
				<Switch>
					<Route path="/" exact component={Home} />
		        	<Route path="/source" exact component={Source} />
		        	<Route path="/articles" component={Article} />
		        </Switch>

        	</div>
    	</Router>,
	document.getElementById('app')
);

