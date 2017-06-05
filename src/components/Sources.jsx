import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import '../../public/sass/styles.scss';
import * as newsActions from '../actions/NewsActions';
import sourcesStore from '../stores/SourcesStore';
import Header from '../components/Header';
import Footer from './Footer';
import SourceSlider from '../components/SourcesSlider';


/**
  * The Source Class displays the full list of sources.
  * It makes an API call renders the output.
  *
  * @class Source
  * @extends {React.Component}
  */
 class Sources extends React.Component {

  /**
   * Initalizes states and binds methods
   *
   * @constructor
   * @return {void}
   */
  constructor (){
	super();
	this.state = {
      searchString : '',
      sources: []   	
	};
	this.fetchNewsSources = this.fetchNewsSources.bind(this);	
  this.handleChange = this.handleChange.bind(this);   
  this.getArticles = this.getArticles.bind(this);	
  }

  /**
   * Lifecycle Method
   * It initiates actions and listens to the store
   * 
   * @return {void}
   */
  componentWillMount(){
    newsActions.getSources();
    sourcesStore.on('change',this.fetchNewsSources);
  }


  /**
   * This method redirects to the articles page 
   * based on the sort option selected.
   *
   * @return {void}
   */
  getArticles(link){
    this.props.history.push(link);
  }

  
  /**
   * Lifecycle Method
   * Called once the component unmounts.
   * 
   * @return {void}
   */
  componentWillUnMount() {
    sourcesStore.removeChangeListener(this.fetchNewsSources);
  }

  /**
   * This method sets the state of the sources array to equal 
   * the response from the API call, which contains the full list of 
   * sources.
   *
   * @return {void}
   */
  fetchNewsSources(){
    this.setState({ sources: sourcesStore.fetchNewsSources() });
  }


  /**
   * This method sets the state of the searchString to equal 
   * the user's search query.
   *
   * @param {object} e
   * @return {void}
   */
  handleChange(e){
    this.setState({searchString:e.target.value});
  }

  /**
   * This method renders output as HTML using JSX.
   * It maps through the sources array and renders its contents.
   * It matches the searchString with the list of sources
   * to provide good User experience when a user performs a search.
   *
   * @return {void}
   */
  render() {
    let searchString = this.state.searchString.trim().toLowerCase();
    let sources = _.map(this.state.sources);
    
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
            onChange={this.handleChange} placeholder="Type here"
            className="searcher"
          />
        </div>
				
        <div className="source-list">
          <ul> 
            { sources.map((source) => {
              <li>{source.name}</li>
              return (
                <li key={source.name} className="key-sort"> 
                  {source.name} 
                  <ul>
                    { source.sortBysAvailable.map((sort) => { 
                      return (
                        <a 
                          onClick={()=>this.getArticles(`/articles/${source.id}/${sort}`)} 
                          className="filter"
                          role="button"
                          key={sort}
                        > {sort}
                        </a>                        
                      );
                      
                  })
                  
                }             
                  </ul>     
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
export default withRouter(Sources);

Sources.propTypes = {
    history: PropTypes.object
  };


