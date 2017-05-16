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
			var i = 0;
			while(i < filter.length){
				if(filter[i] == 'latest'){
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
		      <div className="main_content2 floatleft">
		        <div className="left_coloum2 floatleft">
		              
					  
					  <br/><br/>
					  <span className="button-filter"><button className="btn btn-info" onClick={this.sortByLatest}> Sort By Latest </button></span><br/>
					  <ul> 
					  			<div className="row">
			                   		
			                { articles.map(function(articleName,index){
			                   return (

			                   		<div className="col-lg-4">
			                   			<h3 className="title article-title">{articleName.title}</h3>
	                    				<img src={articleName.urlToImage} alt="" />
						              	<h3 className="article-author">by {articleName.author}</h3>
						              	<p>{articleName.description}</p>
						              	
						              
						              <a className="readmore" href={articleName.url}>read more</a>	
					              	</div>
			                   		
			                   	
			                   	);
			                }) 
			            }
			           
			          </div>
		                
		            </ul>
	            </div>
	          </div>
	            <br/><br/>
	            <Footer />
	        </div>
	      </div>
		);
	}
	
}	