import _ from 'lodash';
import React from 'react';
import * as newsActions from '../actions/newsActions';
import newsStore from '../stores/newsStore';
import '../../sass/styles.scss';

export default class Featured extends React.Component {
  constructor (){
  super();
  this.state = {
      featured: []     
  };
  this.fetchFeaturedArticles = this.fetchFeaturedArticles.bind(this);   
  }

  componentWillMount(){
    newsActions.getFeatured();
    newsStore.on('featured_change',this.fetchFeaturedArticles);
  }

  fetchFeaturedArticles(){
    this.setState({ featured: newsStore.fetchFeaturedArticles() });
  }

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
  


