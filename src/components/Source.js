import React from 'react';
import Request from 'superagent';
import _ from 'lodash';
import '../../sass/styles.scss';
import * as newsActions from '../actions/newsActions';
import newsStore from '../stores/newsStore';

export default class Source extends React.Component {

	constructor (){
		super();
		this.state = {
			searchString : '',
			sources: []
			
		};

		this.fetchNewsSources = this.fetchNewsSources.bind(this);
	}

	fetchNewsSources(){
		this.setState({ sources: newsStore.fetchNewsSources() });
	}

	fetchNewsArticles(){
		this.setState({ sources: newsStore.fetchNewsArticles() });
	}

	componentWillMount(){

		newsActions.getSources();
		newsStore.on('sources_change',this.fetchNewsSources);
		// var url = "https://newsapi.org/v1/sources?language=en";
		// Request.get(url).then((response) => {
		// 	this.setState({
		// 		sources: response.body.sources,
		// 	})
		// });
	}

	componentWillUnMount(){
		newsStore.removeListener('sources_change',this.fetchNewsSources);
	}

	handleChange(e){

        this.setState({searchString:e.target.value});
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

                { sources.map(function(sourceName,index){
                   return <li key={index}> {sourceName.name} <a href={`#/articles?sourceId=${sourceName.id}`} >{sourceName.url}</a></li>
                }) }

            </ul>
            
            </div>


		);
	}

	
}	