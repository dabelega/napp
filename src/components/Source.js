import React from 'react';

export default class Source extends React.Component {

	constructor (){
		super();
		this.state = {
			text: "Initial State"
		};
	}

	clicked(){
		this.setState({text: this.refs.textBox.value});
	}

	render() {
		return (
			{this.state.text}
			<input ref="textBox" type="text" />
			<button id="button" onClick={(e) => {this.clicked();}}
		);
	}