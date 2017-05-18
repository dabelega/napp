import _ from 'lodash';
import React from 'react';
import * as newsActions from '../actions/newsActions';
import newsStore from '../stores/newsStore';
import '../../sass/styles.scss';


export default class Business extends React.Component {
  constructor (){
  super();
  this.state = {
      business: []     
  };
  this.fetchBusinessArticles = this.fetchBusinessArticles.bind(this);   
  }

  componentWillMount(){
    newsActions.getBusiness();
    newsStore.on('business_change',this.fetchBusinessArticles);
  }

  fetchBusinessArticles(){
    this.setState({ business: newsStore.fetchBusinessArticles() });
  }

  trimParagraph(){
    let i;
    let paragraph = document.getElementsById('#business');
    for(i=0;i<paragraph.length;i++) {
      if(paragraph[i].className == 'myclass') {
        paragraph[i].innerHTML = paragraph[i].innerHTML.substring(0,150);
      }
    }
  }

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
          <div className="single_left_coloum floatleft"> 
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






