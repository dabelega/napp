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
		let sourceName = parsed.sourceId;
		newsActions.getArticles(sourceName,'top');
		newsStore.on('articles_change',this.fetchNewsArticles);

	}

	sortByLatest(){
		let sourceName = parsed.sourceId;
		let sortType = parsed.sortOptions;
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
		
		let articles = _.map(this.state.articles);

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

			                   		<div className="col-lg-6">
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

	            <div className="banner0-box">
		            <div className="banner0 floatright">
		            	<div className="google">
		            		<h2>Enjoying Napp?</h2>
		            		<p>
		            			Napp gives you exclusive access to over 78 news sources. 
		            			Let us know what you think. <br/><br/>
		            			Tweet at us using <a>@thenappjournal</a>
		            		</p>
		            	</div>
		            </div>
		        </div>
	          </div>
	            <br/><br/>
	            <Footer />
	        </div>
	      </div>
		);
	}
	
}	