import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import createHistory from 'history/createBrowserHistory'
import '../../public/sass/styles.scss';
import * as newsActions from '../actions/newsActions';
import sourcesStore from '../stores/sourcesStore';
import Header from '../components/Header';
import Footer from './Footer';
import SourceSlider from '../components/SourceSlider';

const history = createHistory();

/**
  * The Source Class displays the full list of sources.
  * It makes an API call renders the output.
  *
  * @class Source
  * @extends {React.Component}
  */
export default class Source extends React.Component {

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
  this.goToArticles = this.goToArticles.bind(this);	
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
   * This method sets the state of the sources array to equal 
   * the response from the API call, which contains the full list of 
   * sources.
   *
   * @return {void}
   */
  fetchNewsSources(){
    this.setState({ sources: sourcesStore.fetchNewsSources() });
  }

  goToArticles(link){
    console.log(link);
    //this.props.history.push('/');
    this.context.router.history.push(link);
    //history.push(link);
    
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
            onChange={this.handleChange} placeholder="Type here"
            className="searcher"
          />
        </div>
				
        <div className="source-list">
          <ul> 
            { sources.map((sourceName) => {
              <li>{sourceName.name}</li>
              return (
                <li key={sourceName.name} className="key-sort"> 
                  {sourceName.name} 
                  <ul>
                    { sourceName.sortBysAvailable.map((sortOption) => { 
                      return (
                        <a 
                          onClick={()=>this.goToArticles(`/articles/${sourceName.id}/${sortOption}`)} 
                          className="filter"
                          role="button"
                        > {sortOption}
                        </a>                        
                      );
                      

                        // <li>
                        //   <Link to={{
                        //     pathname: `/articles/${sourceName.id}/${sortOption}`
                          
                        //    }}
                        //   >
                        //   {sortOption}</Link>
                        // </li>
                       // <a 
                       //   href={`${BASE}${sourceName.id}${OPT}${sortOption}`} 
                       //   key={sortOption}
                       // >
                       //   <span className="filter">{sortOption}</span>
                       // </a>  
                      
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

Source.contextTypes = {
    router: PropTypes.object
}

