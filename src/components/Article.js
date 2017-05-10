import React from 'react';
import { render } from 'react-dom';
import {Link } from 'react-router-dom';
//import 'react-router';
import Request from 'superagent';
import _ from 'lodash';
import '../../sass/styles.scss';
import * as newsActions from '../actions/newsActions';
import newsStore from '../stores/newsStore';
import queryString from 'query-string';
import Header from '../components/Header';
import ArticleHeadline from '../components/ArticleHeadline';
import Footer from '../components/Footer';


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

		window.parsed = queryString.parse(this.props.location.search);
		var sourceName = parsed.sourceId;
		//var sortType = parsed.sortOptions;

		newsActions.getArticles(sourceName,'top');
		newsStore.on('articles_change',this.fetchNewsArticles);

	}

	sortByLatest(){
		var sourceName = parsed.sourceId;
		var sortType = parsed.sortOptions;
		console.log(typeof(sortType));
		
		var filter = sortType.split(',');
		console.log(filter);
			// for (i = 0; i < filter.length; i++) {
			// 	if(filter[i] == 'latest'){
			// 		newsActions.getArticles(sourceName,'latest');
			//<li key={index}>{articleName.aurthor} {articleName.title} </li>
			// 		newsStore.on('articles_change',this.fetchNewsArticles);
			// 	}	
			// }
			var i = 0;
			while(i < filter.length){
				if(filter[i] == 'latest'){
					console.log(filter[i]);
					newsActions.getArticles(sourceName,filter[i]);
					newsStore.on('articles_change',this.fetchNewsArticles);
				}

				i++
			}
	}
	
	render() {
		
		var articles = _.map(this.state.articles);

		return (
			<div className="articles-main">
				<div>
					<Header />
					<ArticleHeadline />
					<span className="filter"><button className="button-filter" onClick={this.sortByLatest}> Sort By Latest </button></span><br/>
					<ul> 
						<div className="article-list">
			                { articles.map(function(articleName,index){
			                   return (
			                   	<div className="wrapper">

			                   		<div className="left">
			                   			<img className="resize" src={articleName.urlToImage}/>
			                   			
			                   			<br/><br/><br/>
			                   		</div>

			                   		<div className="right">
			                   			<span className="content">
			                   			<div className="heading"><span className="title">{articleName.title}</span></div><br/>
			                   			<div className="test"><span className="description">{articleName.description}</span></div><br/>
			                   			
			                   			<button className="button"><span className="button-link"><a href={articleName.url} target="_blank">Read More</a></span></button><br/>
			                   			

			                   			</span>
			                   			
			                   		</div>
			                   		
			                   	</div>	
			                   	);
			                }) }
		                </div>
		            </ul>
		            
		           
	            </div>
            </div>
		);
	}
	
}	