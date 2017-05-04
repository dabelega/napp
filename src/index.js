import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import source from './components/Source';


render (
	<div>
		<Router>
        	<Route path="/" component={Home}/>
        	<Route path="/source" component={source}/>
    	</Router>
	</div>,
	document.getElementById('app')
);