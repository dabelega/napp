import React from 'react';
import Request from 'superagent';

export default class Source extends React.Component {

	constructor (){
		super();
		this.state = {
			text: "Initial State"
		};
	}

	componentWillMount(){

	}
	
	render() {
		return (
			<div>
				<input ref="textBox" type="text" />
			</div>
		);
	}