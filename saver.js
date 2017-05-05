import React from 'react';
import Request from 'superagent';
import _ from 'lodash';

export default class Source extends React.Component {

	constructor (){
		super();
		this.state = {
			searchString : ''
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

	handleChange(e){

        this.setState({searchString:e.target.value});
    }

    handleClick(sourceName){
    	var API_KEY = "213327409d384371851777e7c7f78dfe";
    	var SORT_BY = 'top';
    	var url = `https://newsapi.org/v1/articles?source=${sourceName}&sortBy=${SORT_BY}&apiKey=${API_KEY}`;
    	Request.get(url).then((response) => {
    		this.setState({
				articles: response.body.articles,
			})
    	});

    }

	
	render() {

		var searchString = this.state.searchString.trim().toLowerCase();
		var sources = _.map(this.state.sources);

		if(searchString.length > 0){

            sources = sources.filter(function(sourceName){
                return sourceName.name.toLowerCase().match( searchString );
            });

        }

		return (
			<div>
			<input type="text" value={this.state.searchString} onChange={this.handleChange.bind(this)} placeholder="Type here" />

			<ul> 

                { sources.map(function(sourceName){
                   return <li>{sourceName.name} <a href={sourceName.url} onClick={(e) => { this.handleClick(sourceName.name);}>{sourceName.url}</a></li>
                }) }

            </ul>
            </div>


		);
	}

	
}	