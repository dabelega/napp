import React from 'react';
import * as newsActions from '../actions/newsActions';
import homeNewsStore from '../stores/homeNewsStore';
import '../../public/sass/styles.scss';

/**
  * The Business Class displays articles from a business source
  * It makes an API call using this source and 
  * renders the output.
  */
export default class Business extends React.Component {

  /**
   * Initalizes states.
   * business: array to hold list of business articles
   */
  constructor (){
  super();
  this.state = {
      business: []     
  };
  this.fetchBusinessArticles = this.fetchBusinessArticles.bind(this);   
  }
  
  /**
   * Lifecycle Method
   * It initiates the process of calling the NewsAPI
   */
  componentWillMount(){
    newsActions.getBusiness();
    homeNewsStore.on('change',this.fetchBusinessArticles);
  }

  /**
   * This method sets the state of the business array to equal 
   * the response from the API call, which contains a list of 
   * articles from business sources only.
   */
  fetchBusinessArticles(){
    this.setState({ business: homeNewsStore.fetchBusinessArticles() });
  }
  
  /**
   * Reduce the length of paragraphs 
   */
  trimParagraph(){
    let i;
    let paragraph = document.getElementsById('#business');
    for(i=0;i<paragraph.length;i++) {
      if(paragraph[i].className == 'myclass') {
        paragraph[i].innerHTML = paragraph[i].innerHTML.substring(0,150);
      }
    }
  }

  
  /**
   * This method renders output as HTML using JSX.
   * It maps through the business array and pushes the first three 
   * contents into a businessSplit array. 
   * It then maps through businessSplit and renders its contents.
   */
  render(){
    let businessSplit = [];
    
    this.state.business.map((business, index) => {
      if(index < 3){
        businessSplit.push(business);
      }
    });
  
    return(
      <div className="single_left_coloum_wrapper">
        <h2 className="title">BUSINESS NEWS</h2>
        { businessSplit.map(function(businessArticle){
        return( 
          <div className="single_left_coloum floatleft" > 
            <img src={businessArticle.urlToImage} alt="" />
            <h3>{businessArticle.title}</h3>
            <p id="business" className="myclass">
              {businessArticle.description}
            </p>
            <a className="readmore" href={businessArticle.url}>read more</a> 
          </div>
          );
        })
      }
      </div>
    );
 } 
 
}






