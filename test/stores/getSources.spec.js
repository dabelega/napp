// /* global define, it, describe */
// import { expect } from 'chai';
// import sinon from 'sinon';
// import * as newsActions from '../../actions/newsActions';
// import newsStore from '../../stores/newsStore';
// import Dispatcher from '../../dispatcher/AppDispatcher';


// describe('Get Sources Action', () => {

//   const sourceList = 
  // {
  //     "status": "ok",
  //     "sources": [
  //       {
  //         "id": "abc-news-au",
  //         "name": "ABC News (AU)",
  //         "description": "Australia's most trusted source of local..",
  //         "url": "http://www.abc.net.au/news",
  //         "category": "general",
  //         "language": "en",
  //         "country": "au",
  //         "urlsToLogos": {
  //         "small": "",
  //         "medium": "",
  //         "large": ""
  //         },
  //         "sortBysAvailable": [
  //         "top"
  //         ]
  //       }  
  //     ]
  //   };
  
//   newsStore.sources = sourceList;

//   it('gets list of sources', () => {
//     Dispatcher.dispatch({
//         actionType: newsActions.NEWS_SOURCES,
//         sources: sourceList
//     });
//     expect(newsStore.fetchNewsSources()).to.eql(sourceList); 
//   });

// });
