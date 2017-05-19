import React from 'react';
import * as newsActions from '../actions/newsActions';
import newsStore from '../stores/newsStore';
import '../../sass/styles.scss';

export default class Sports extends React.Component {
  constructor (){
  super();
  this.state = {
      sports: []     
  };
  this.fetchSportsArticles=this.fetchSportsArticles.bind(this);   
  }

  componentWillMount(){
    newsActions.getSports();
    newsStore.on('sports_change',this.fetchSportsArticles);
  }

  fetchSportsArticles(){
    this.setState({ sports: newsStore.fetchSportsArticles() });
  }

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







