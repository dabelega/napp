import React from 'react';
import * as newsActions from '../actions/newsActions';
import homeNewsStore from '../stores/homeNewsStore';
import '../../public/sass/styles.scss';


/**
  * The Entertainment Class displays articles from an entertainmet news source
  * It makes an API call using this source and 
  * renders the output.
  */
export default class Entertainment extends React.Component {

  /**
   * Initalizes states.
   * entertainment: array to hold list of entertainment articles
   */
  constructor (){
  super();
  this.state = {
      entertainment: []     
  };
  this.fetchEntertainmentArticles=this.fetchEntertainmentArticles.bind(this);   
  }

  /**
   * Lifecycle Method
   * It initiates the process of calling the NewsAPI
   */
  componentWillMount(){
    newsActions.getEntertainment();
    homeNewsStore.on('change',this.fetchEntertainmentArticles);
  }

  
  /**
   * This method sets the state of the entertainment array to equal 
   * the response from the API call, which contains a list of 
   * articles from entertainment sources only.
   */
  fetchEntertainmentArticles(){
    this.setState({ 
      entertainment: homeNewsStore.fetchEntertainmentArticles() 
    });
  }

  /**
   * This method renders output as HTML using JSX.
   * It maps through the entertainment array and pushes the first three 
   * contents into a entertainmentSplit array. 
   * It then maps through entertainmentSplit and renders its contents.
   */
  render(){

    let entertainmentSplit = [];
    this.state.entertainment.map((business, index) => {
      if(index < 3){
        entertainmentSplit.push(business);
      }
    });
    
  
    return(
      <div className="single_right_coloum">
        <h2 className="title">ENTERTAINMENT</h2>
        { entertainmentSplit.map(function(entertainmentArticle){
        return( 
          <div className="single_cat_right_content editorial"> 
            <img src={entertainmentArticle.urlToImage} alt="" />
            <h3>
              <a href={entertainmentArticle.url}>
                {entertainmentArticle.title}
              </a>
            </h3>
          </div>
          );
        })
      }
      </div>
    );
 } 
 
}

