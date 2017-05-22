import queryString from 'query-string';
import React from 'react';
import _ from 'lodash';
import '../../public/sass/styles.scss';
import * as newsActions from '../actions/newsActions';
import articlesStore from '../stores/articlesStore';
import Header from '../components/Header';
import Footer from '../components/Footer';

/**
  * The Articles Class displays articles based on a given source name
  * and sort type. It makes an API call using these parameters and 
  * renders the output.
  */
export default class Article extends React.Component {

  /**
   * Initalizes states.
   * articles: array to hold list of articles
   */
	constructor (){
		super();
		this.state = {
			articles: []
		};

		this.fetchNewsArticles = this.fetchNewsArticles.bind(this);
		
	}

  /**
   * Lifecycle Method
   * It initiates the process of calling the NewsAPI
   */
	componentWillMount(){
		window.parsed = queryString.parse(location.search);
		let sourceName = window.parsed.sourceId;
    let sortType = window.parsed.sortOptions;
		newsActions.getArticles(sourceName,sortType);
		articlesStore.on('change',this.fetchNewsArticles);

	}

 
  /**
   * This method sets the state of the articles array to equal 
   * the response from the API call, which contains a list of 
   * articles based on source name and sort type.
   */
	fetchNewsArticles(){
		this.setState({ articles: articlesStore.fetchNewsArticles() });
	}

  /**
   * This method renders output as HTML using JSX.
   * It also maps through the articles array and
   * renders its contents.
   */
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