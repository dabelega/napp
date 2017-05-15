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
		  <div className="wrapper">
		    <div className="center">
		      <Header />
		      <div className="main_content floatleft">
		        <div className="left_coloum floatleft">
		              <div>
					  
					
					  <span className="btn btn-info"><button className="button-filter" onClick={this.sortByLatest}> Sort By Latest </button></span><br/>
					  <ul> 
			                { articles.map(function(articleName,index){
			                   return (

			                   	<div className="single_left_coloum_wrapper">
                    				<h3 className="title article-title">{articleName.title}</h3>
                    			    <div className="single_left_coloum floatleft">	
	                    				<img src={articleName.urlToImage} alt="" />
						              	<h3 className="article-author">by {articleName.author}</h3>
						              	<p>{articleName.description}</p>
						              	
						              
						              <a className="readmore" href={articleName.url}>read more</a>	
					              </div>	
			                   	</div>
			                   		
			                   	
			                   	);
			                }) 
			            }
		                
		            </ul>
	            </div>
	          </div>
	        </div>
	      </div>
        </div>
		);
	}
	
}	