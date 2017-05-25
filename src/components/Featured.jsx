import React from 'react';
import * as newsActions from '../actions/newsActions';
import homeNewsStore from '../stores/homeNewsStore';
import '../../public/sass/styles.scss';


/**
  * The Featured Class displays articles from a random source
  * It makes an API call using this source and 
  * renders the output.
  */
export default class Featured extends React.Component {

  /**
   * Initalizes states.
   * featured: array to hold list of featured articles
   */
  constructor (){
  super();
  this.state = {
      featured: []     
  };
  this.fetchFeaturedArticles = this.fetchFeaturedArticles.bind(this);   
  }

  /**
   * Lifecycle Method
   * It initiates the process of calling the NewsAPI
   */
  componentWillMount(){
    newsActions.getFeatured();
    homeNewsStore.on('change',this.fetchFeaturedArticles);
  }

  /**
   * This method sets the state of the featured array to equal 
   * the response from the API call, which contains a list of 
   * articles from a random source.
   */
  fetchFeaturedArticles(){
    this.setState({ featured: homeNewsStore.fetchFeaturedArticles() });
  }


  /**
   * This method renders output as HTML using JSX.
   * It maps through the featured array and pushes the first three 
   * contents into a featuredSplit array. 
   * It then maps through featuredSplit and renders its contents.
   */
  render(){
    let featuredSplit = [];
    this.state.featured.map((featured, index) => {
      if(index < 3){
        featuredSplit.push(featured);
      }
    });
  
    return(
      <div>
        <div className="single_left_coloum_wrapper">
          <h2 className="title">FEATURED NEWS</h2>
          { featuredSplit.map(function(featuredArticle){
          return( 
            <div className="single_left_coloum floatleft"> 
              <img src={featuredArticle.urlToImage} alt="Featured" />
              <h3>{featuredArticle.title}</h3>
              <p>{featuredArticle.description}</p>
              <a className="readmore" href={featuredArticle.url}>read more</a> 
            </div>
          );
        })
      }
        </div>
      </div>
    );
 } 
 
}
  


