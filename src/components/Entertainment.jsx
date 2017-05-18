import _ from 'lodash';
import React from 'react';
import * as newsActions from '../actions/newsActions';
import newsStore from '../stores/newsStore';
import '../../sass/styles.scss';

export default class Business extends React.Component {
  constructor (){
  super();
  this.state = {
      entertainment: []     
  };
  this.fetchEntertainmentArticles=this.fetchEntertainmentArticles.bind(this);   
  }

  componentWillMount(){
    newsActions.getEntertainment();
    newsStore.on('entertainment_change',this.fetchEntertainmentArticles);
  }

  fetchEntertainmentArticles(){
    this.setState({ entertainment: newsStore.fetchEntertainmentArticles() });
  }

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

