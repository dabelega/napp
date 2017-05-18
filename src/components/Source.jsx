import React from 'react';
import _ from 'lodash';
import '../../sass/styles.scss';
import * as newsActions from '../actions/newsActions';
import newsStore from '../stores/newsStore';
import Header from '../components/Header';
import Footer from './Footer';

export default class Source extends React.Component {
  constructor (){
	super();
	this.state = {
      searchString : '',
      sources: []			
	};
	this.fetchNewsSources = this.fetchNewsSources.bind(this);		
  }

  componentWillMount(){
    newsActions.getSources();
    newsStore.on('sources_change',this.fetchNewsSources);
  }

  componentWillUnMount(){
    newsStore.removeListener('sources_change',this.fetchNewsSources);
  }

  fetchNewsSources(){
    this.setState({ sources: newsStore.fetchNewsSources() });
  }

  fetchNewsArticles(){
    this.setState({ sources: newsStore.fetchNewsArticles() });
  }

  handleChange(e){
    this.setState({searchString:e.target.value});
  }

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
        <div className="search-container" >
          <input 
            type="text" value={this.state.searchString} 
            onChange={this.handleChange.bind(this)} placeholder="Type here" />
        </div>
				
        <div className="source-list">
          <ul> 
            { sources.map(function(sourceName,index){
              return (
                <li key={sourceName.name}> 
                  {sourceName.name}
                  { sourceName.sortBysAvailable.map((sortOption) => 
                    { return( 
                      <a href={`/articles?sourceId=${sourceName.id}&sortOptions=${sortOption}`}>
                      {sortOption}
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

