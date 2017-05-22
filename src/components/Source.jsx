import React from 'react';
import _ from 'lodash';
import '../../public/sass/styles.scss';
import * as newsActions from '../actions/newsActions';
import sourcesStore from '../stores/sourcesStore';
import Header from '../components/Header';
import Footer from './Footer';
import SourceSlider from '../components/SourceSlider';


/**
  * The Source Class displays the full list of sources.
  * It makes an API call renders the output.
  */
export default class Source extends React.Component {

  /**
   * Initalizes states.
   * searhString: holds user's search query
   * sources: array to hold list of sources
   */
  constructor (){
	super();
	this.state = {
      searchString : '',
      sources: []   	
	};
	this.fetchNewsSources = this.fetchNewsSources.bind(this);	
  this._handleChange = this._handleChange.bind(this);   	
  }

  /**
   * Lifecycle Method
   * It initiates the process of calling the NewsAPI
   */
  componentWillMount(){
    newsActions.getSources();
    sourcesStore.on('change',this.fetchNewsSources);
  }

  /**
   * This method sets the state of the sources array to equal 
   * the response from the API call, which contains the full list of 
   * sources.
   */
  fetchNewsSources(){
    this.setState({ sources: sourcesStore.fetchNewsSources() });
  }

  /**
   * This method sets the state of the searchString to equal 
   * the user's search query.
   */
  _handleChange(e){
    this.setState({searchString:e.target.value});
  }

  /**
   * This method renders output as HTML using JSX.
   * It maps through the sources array and renders its contents.
   * It matches the searchString with the list of sources
   * to provide good User experience when a user performs a search.
   */
  render() {
    let searchString = this.state.searchString.trim().toLowerCase();
    let sources = _.map(this.state.sources);
    let BASE = '/articles?sourceId=';
    let OPT = '&sortOptions='
    
    if(searchString.length > 0){
      sources = sources.filter(function(sourceName){
        return sourceName.name.toLowerCase().match( searchString );
      });
    }
    

  return (
    <div className="wrapper">
      <div className="center">
        <Header />
        <SourceSlider />
        <div className="search-container" >
          <input 
            type="text" value={this.state.searchString} 
            onChange={this._handleChange} placeholder="Type here" 
          />
        </div>
				
        <div className="source-list">
          <ul> 
            { sources.map(function(sourceName){
              return (
                <li key={sourceName.name}> 
                  {sourceName.name}
                  { sourceName.sortBysAvailable.map((sortOption) =>{ 
                     return( 
                       <a href={`${BASE}${sourceName.id}${OPT}${sortOption}`}>
                         <span className="filter">{sortOption}</span>
                       </a>  
                      );
                  })
                  
                }                  
                </li>
               ); 
              }) 
            }

          </ul>
        </div>
        <Footer />  
      </div>
    </div>
  );
}

	
}	

