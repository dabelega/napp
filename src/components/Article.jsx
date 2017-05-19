import queryString from 'query-string';
import React from 'react';
import _ from 'lodash';
import '../../sass/styles.scss';
import * as newsActions from '../actions/newsActions';
import newsStore from '../stores/newsStore';
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

	componentWillMount(){
		window.parsed = queryString.parse(location.search);
		let sourceName = window.parsed.sourceId;
    let sortType = window.parsed.sortOptions;
		newsActions.getArticles(sourceName,sortType);
		newsStore.on('articles_change',this.fetchNewsArticles);

	}


	fetchNewsArticles(){
		this.setState({ articles: newsStore.fetchNewsArticles() });
	}

	render() {
		
		let articles = _.map(this.state.articles);

      return (
        <div className="wrapper">
          <div className="center">
            <Header />
            <div className="main_content2 floatleft">
              <div className="left_coloum2 floatleft">
                <br /><br />
                <ul> 
                  <div className="row">     		
                    { articles.map(function(articleName){
                      return (
                        <div className="col-lg-6">
                          <h3 className="title article-title">
                            {articleName.title}
                          </h3>
                          <img src={articleName.urlToImage} alt="" />
                          <h3 className="article-author">
                            by {articleName.author}
                          </h3>
                          <p>{articleName.description}</p>
                          <a className="readmore" href={articleName.url}>
                            read more
                          </a>
                        </div>
                      );
                    }) 
                }
                  </div>
                </ul>
              </div>


              <div className="banner0-box">
                <div className="banner0">
                  <div className="google">
                    <h2>Enjoying Napp?</h2>
                    <p>
                      Tweet at us using <a>@thenappjournal</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <br /><br />
            <Footer />
          </div>
        </div>
		);
	}
	
}	