/* global define, it, describe */
// import mockAxios from '../../__mocks__/axiosMock';
import * as newsActions from '../../src/actions/newsActions';
import AppDispatcher from '../../src/dispatcher/AppDispatcher';
import newsConstants from '../../src/constants/newsConstants';


describe('News API Actions', () => {

  describe('#getSources and #getArticles functions', () => {
    it('should exist', () => {
    expect(newsActions.getSources).toBeDefined();
    }); 
    it('should exist', () => {
      expect(newsActions.getArticles).toBeDefined();
    }); 
  });
  
  describe('A Dispatcher Call', () => {
    let spyDispatcher;
    beforeEach(() => {
     jest.mock('axios');
     spyDispatcher = jest.spyOn(AppDispatcher, 'dispatch');
    });

    afterEach(() => {
     spyDispatcher.mockReset();
    });

    it('should get sources', () => 
      newsActions.getSources()
        .then(() => {
          const dispatchCall = spyDispatcher.mock.calls[0][0];
          expect(spyDispatcher).toHaveBeenCalled();
          expect(dispatchCall.actionType).toEqual(newsConstants.NEWS_SOURCES);
          expect(dispatchCall.sourceList).toBeInstanceOf(Object);
        })
    ); 
    
    it('should get articles given a source', () => 
      newsActions.getArticles('abc-news-au', 'top')
        .then(() => {
          const dispatchCall = spyDispatcher.mock.calls[0][0];
          expect(spyDispatcher).toHaveBeenCalled();
          expect(dispatchCall.actionType).toEqual(newsConstants.NEWS_ARTICLES);
          expect(dispatchCall.articleList).toBeInstanceOf(Object);
        })
    ); 
    
  });
  
});
