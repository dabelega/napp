import React from 'react';
import '../../public/sass/styles.scss';
import * as newsActions from '../actions/newsActions';
import homeNewsStore from '../stores/homeNewsStore';


/**
  * The General Class displays articles from a random source
  * It makes an API call using this source and 
  * renders the output.
  */
export default class General extends React.Component {

  /**
   * Initalizes states.
   * general: array to hold list of general articles
   */
  constructor (){
  super();
  this.state = {
      general: []     
  };
  this.fetchGeneralArticles = this.fetchGeneralArticles.bind(this);   
  }

  /**
   * Lifecycle Method
   * It initiates the process of calling the NewsAPI
   */
  componentWillMount(){
    newsActions.getGeneral();
    homeNewsStore.on('change',this.fetchGeneralArticles);
  }

  /**
   * This method sets the state of the general array to equal 
   * the response from the API call, which contains a list of 
   * articles from a random source.
   */
  fetchGeneralArticles(){
    this.setState({ general: homeNewsStore.fetchGeneralArticles() });
  }

  /**
   * This method renders output as HTML using JSX.
   * It maps through the general array and pushes the first three 
   * contents into a generalSplit array. 
   * It then maps through generalSplit and renders its contents.
   */
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
