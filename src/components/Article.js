import React from 'react';
import { render } from 'react-dom';
//import 'react-router';
import Request from 'superagent';
import _ from 'lodash';
import '../../sass/styles.scss';
import * as newsActions from '../actions/newsActions';
import newsStore from '../stores/newsStore';
import queryString from 'query-string';




export default class Article extends React.Component {

	constructor (){
		super();
		this.state = {
			searchString : '',
			articles: []
		};

		this.fetchNewsArticles = this.fetchNewsArticles.bind(this);
	}

	fetchNewsArticles(){
		this.setState({ articles: newsStore.fetchNewsArticles() });
	}


	componentWillMount(){
		const parsed = queryString.parse(this.props.location.search);
		var sourceName = parsed.sourceId;

		newsActions.getArticles(sourceName);
		newsStore.on('articles_change',this.fetchNewsArticles);

		
	}

	
	render() {
		
		var articles = _.map(this.state.articles);

		

		return (
			<div>
			

			<ul> 

                { articles.map(function(articleName,index){
                   return <li key={index}>{articleName.aurthor} {articleName.title} </li>
                }) }

            </ul>
            </div>


		);


	}

	
}	