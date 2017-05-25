import React from 'react';
import * as newsActions from '../actions/newsActions';
import homeNewsStore from '../stores/homeNewsStore';
import '../../public/sass/styles.scss';


/**
  * The Tech Class displays articles from a technology news source
  * It makes an API call using this source and 
  * renders the output.
  */
export default class Tech extends React.Component {

  /**
   * Initalizes states.
   * tech: array to hold list of tech articles
   */
  constructor (){
  super();
  this.state = {
      tech: []     
  };
  this.fetchTechArticles = this.fetchTechArticles.bind(this);   
  }

  /**
   * Lifecycle Method
   * It initiates the process of calling the NewsAPI
   */
  componentWillMount(){
    newsActions.getTech();
    homeNewsStore.on('change',this.fetchTechArticles);
  }

  /**
   * This method sets the state of the tech array to equal 
   * the response from the API call, which contains a list of 
   * articles from a tech news source.
   */
  fetchTechArticles(){
    this.setState({ tech: homeNewsStore.fetchTechArticles() });
  }

  /**
   * This method renders output as HTML using JSX.
   * It maps through the tech array and pushes the first four 
   * contents into a techSplit array. 
   * It then maps through techSplit and renders its contents.
   */
  render(){
    let techSplit = [];

    this.state.tech.map((tech, index) => {
      if(index < 4){
        techSplit.push(tech);
      }
    });

  
    return(
      <div className="single_left_coloum_wrapper single_cat_left">
        <h2 className="title">TECH NEWS</h2>
        { techSplit.map(function(techArticle){
        return( 
          <div className="single_cat_left_content floatleft">
            <h3>
              <a href={techArticle.url}>
                {techArticle.title}
              </a>
            </h3>
            <p>{techArticle.description}</p>
            <p className="single_cat_left_content_meta">by 
             <span> {techArticle.author}</span>
            </p>
          </div>
          );
        })
      }
      </div>
    );
 } 
 
}


