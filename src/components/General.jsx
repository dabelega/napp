import _ from 'lodash';
import React from 'react';
import '../../sass/styles.scss';
import * as newsActions from '../actions/newsActions';
import newsStore from '../stores/newsStore';



export default class General extends React.Component {

  constructor (){
  super();
  this.state = {
      general: []     
  };
  this.fetchGeneralArticles = this.fetchGeneralArticles.bind(this);   
  }

  componentWillMount(){
    newsActions.getGeneral();
    newsStore.on('general_change',this.fetchGeneralArticles);
  }

  fetchGeneralArticles(){
    this.setState({ general: newsStore.fetchGeneralArticles() });
  }

  render(){
    let generalSplit = [];
    
    this.state.general.map((general, index) => {
      if(index < 3){
        generalSplit.push(general);
      }
    });

    return(  
      <div className="single_right_coloum">
        <h2 className="title">GENERAL</h2>
        <ul>
          { generalSplit.map(function(generalArticle){
            return(
              <li>
                <div className="single_cat_right_content">
                  <h3>{generalArticle.title}</h3>
                  <p>
                    {generalArticle.description}
                  </p>
                  <p className="single_cat_right_content_meta">
                    <a href={generalArticle.url}>
                      <span>read more</span>
                    </a> 
                  </p>
                </div>
              </li>
              
              );
                
            })
          }
        
        </ul>
      </div>
    );
  }
}
