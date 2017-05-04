import React from 'react';
import Request from 'superagent';
import _ from 'lodash';

export default class Source extends React.Component {

	constructor (){
		super();
		this.state = {
			text: "Initial State"
		};
	}

	componentWillMount(){
		var url = "https://newsapi.org/v1/sources?language=en";
		Request.get(url).then((response) => {
			this.setState({
				sources: response.body.sources,
			})
		});
	}
	
	render() {
		var sources = _.map(this.state.sources, (source) => {
			return <li> { source.name }</li>;
		});
		return (
			<div>
				<input ref="textBox" type="text" />
				<ul>{sources}</ul>
			</div>
		);
	}
}	