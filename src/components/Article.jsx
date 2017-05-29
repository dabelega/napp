import queryString from 'query-string';
import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import '../../public/sass/styles.scss';
import * as newsActions from '../actions/newsActions'; 
import articlesStore from '../stores/articlesStore';
import sourcesStore from '../stores/sourcesStore';
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
			articles: [],
      sources: []
		};

		this.fetchNewsArticles = this.fetchNewsArticles.bind(this);
    this.fetchNewsSources = this.fetchNewsSources.bind(this); 
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

    /* Get sources */
    newsActions.getSources();
    sourcesStore.on('change',this.fetchNewsSources);
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
   * This method sets the state of the sources array to equal 
   * the response from the API call, which contains the full list of 
   * sources.
   */
  fetchNewsSources(){
    this.setState({ sources: sourcesStore.fetchNewsSources() });
  }

  

  goback(){
    this.props.history.push('/source');
  }


  /**
   * This method renders output as HTML using JSX.
   * It also maps through the articles array and
   * renders its contents.
   */
	render() {
    
		const ERROR = this.state.articles;
		let articles = _.map(this.state.articles);
    let sources = _.map(this.state.sources);
    let currentSource = window.parsed.sourceId;
    let BASE = '/articles?sourceId=';
    let OPT = '&sortOptions=';

      return (
        
        <div className="wrapper">
          <div className="center">
            <Header />
            
              
            <ul> 

              { sources.map(function(sourceName){
               if(sourceName.id == currentSource){return (
                 <div className="sortby" key={sourceName.name}>
                   <li> 
                     <h2 className="source-name">{sourceName.name}</h2> 
                     <span>Sort By:</span>
                     { sourceName.sortBysAvailable.map((sortOption) =>{ 
                       return( 
                         <a 
                           href={`${BASE}${sourceName.id}${OPT}${sortOption}`} 
                           key={sortOption}
                         >
                           <span className="filter spanate">{sortOption}</span>
                         </a>  
                        );
                    })
                    
                  }            
                   </li>

                 </div>
                 );
              }

                }) 
              }
            </ul>
            <button 
              className="btn btn-info"
              onClick={() =>this.goback()} 
            >
           Go back</button>  
            
            { (ERROR >= 400) ? (
              <div className="error-handler">
                <h1>Oops! Something bad Happend</h1> <br /><br />
                <h2>Why I&apos;m I seeing this?</h2>
                <p>It looks like you sent a bad request to the server 
                OR there is an issue with the server</p>
                <p>Things you can try:</p><br />
                <ul>
                  <li>Check that you are sending your request 
                  with the right parameters</li>
                  <li>Wait for a few minutes and resend your request</li>
                  <li><a href="/contact">Contact Us</a></li>
                </ul>
              </div>

              ) : (

                <div>
                  <div className="main_content2 floatleft">
                    <div className="left_coloum2 floatleft">
                      <br /><br />
                      <ul> 
                        <div className="row">     		
                          { articles.map(function(articleName){
                            return (
                              <div className="col-lg-6" key={articleName.title}>
                                <h3 
                                  className="title article-title truncate" 
                                >
                                  {articleName.title}
                                </h3>
                                <img src={articleName.urlToImage} alt="" />
                                <h3 className="article-author">
                                  by {articleName.author}
                                </h3>
                                <p className="article-description">
                                  {articleName.description}
                                </p>
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
                </div>
            )}
            <Footer />
          </div>
        </div>


      );

    }
}	

Article.propTypes = {
    history: PropTypes.object
  };

