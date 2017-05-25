import React from 'react';
import * as newsActions from '../actions/newsActions';
import homeNewsStore from '../stores/homeNewsStore';
import '../../public/sass/styles.scss';


/**
  * The Sports Class displays articles from a sports news source
  * It makes an API call using this source and 
  * renders the output.
  */
export default class Sports extends React.Component {

  /**
   * Initalizes states.
   * sports: array to hold list of sport articles
   */
  constructor (){
  super();
  this.state = {
      sports: []     
  };
  this.fetchSportsArticles=this.fetchSportsArticles.bind(this);   
  }

  /**
   * Lifecycle Method
   * It initiates the process of calling the NewsAPI
   */
  componentWillMount(){
    newsActions.getSports();
    homeNewsStore.on('change',this.fetchSportsArticles);
  }

  /**
   * This method sets the state of the sports array to equal 
   * the response from the API call, which contains a list of 
   * articles from a sports news source.
   */
  fetchSportsArticles(){
    this.setState({ sports: homeNewsStore.fetchSportsArticles() });
  }

  /**
   * This method renders output as HTML using JSX.
   * It maps through the sports array and pushes the first ten
   * contents into a sportSplit array. 
   * It then maps through sportSplit and renders its contents.
   */
  render(){
    let sportSplit = [];

    this.state.sports.map((sports,index) => {
      if(index < 9){
        sportSplit.push(sports);
      }
    });
  
    return(
      <div className="single_sidebar">
        <div className="popular">
          <h2 className="title">SPORT HEADLINES</h2>
          <ul>
            { sportSplit.map(function(sportsArticle){
        return(

          <li>
            <div className="single_popular">      
              <h3>{sportsArticle.title}
                &nbsp;&nbsp;<a href={sportsArticle.url} className="readmore">
                Read More
              </a>
              </h3>
            </div>
          </li>
          );
        })
      }
          </ul>
        </div>
      </div>
    );
 } 
 
}







