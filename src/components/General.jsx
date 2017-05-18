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

    let numItems = 3;
    let count = 0;
    let generalSplit = [];
    let general = _.map(this.state.general);

    while(general.length > 0 && count < numItems){
      generalSplit.push(general[count]);
      count++;
    }

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
