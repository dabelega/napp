/* global define, it, describe */
// import mockAxios from '../../__mocks__/axiosMock';
import * as newsActions from '../../src/actions/newsActions';
import AppDispatcher from '../../src/dispatcher/AppDispatcher';
import newsConstants from '../../src/constants/newsConstants';


describe('News API Actions', () => {

  describe('News API Actions toBeDefined', () => {
    it('should exist', () => {
    expect(newsActions.getSources).toBeDefined();
    }); 
    it('should exist', () => {
      expect(newsActions.getArticles).toBeDefined();
    }); 
    it('should exist', () => {
      expect(newsActions.getGeneral).toBeDefined();
    }); 
    it('should exist', () => {
      expect(newsActions.getFeatured).toBeDefined();
    }); 
    it('should exist', () => {
      expect(newsActions.getBusiness).toBeDefined();
    }); 
    it('should exist', () => {
      expect(newsActions.getTech).toBeDefined();
    }); 
    it('should exist', () => {
      expect(newsActions.getEntertainment).toBeDefined();
    }); 
    it('should exist', () => {
      expect(newsActions.getSports).toBeDefined();
    }); 

  });
  
  describe('News API Actions Dispatcher Calls', () => {
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
    
     it('should get articles for general news', () => 
      newsActions.getGeneral()
        .then(() => {
          const dispatchCall = spyDispatcher.mock.calls[0][0];
          expect(spyDispatcher).toHaveBeenCalled();
          expect(dispatchCall.actionType).toEqual(newsConstants.NEWS_GENERAL);
          expect(dispatchCall.articleList).toBeInstanceOf(Object);
        })
    );  

     it('should get articles for featured news', () => 
      newsActions.getFeatured()
        .then(() => {
          const dispatchCall = spyDispatcher.mock.calls[0][0];
          expect(spyDispatcher).toHaveBeenCalled();
          expect(dispatchCall.actionType).toEqual(newsConstants.NEWS_FEATURED);
          expect(dispatchCall.articleList).toBeInstanceOf(Object);
        })
    );  

     it('should get articles for business news', () => 
      newsActions.getBusiness()
        .then(() => {
          const dispatchCall = spyDispatcher.mock.calls[0][0];
          expect(spyDispatcher).toHaveBeenCalled();
          expect(dispatchCall.actionType).toEqual(newsConstants.NEWS_BUSINESS);
          expect(dispatchCall.articleList).toBeInstanceOf(Object);
        })
    );  

     it('should get articles for Tech news', () => 
      newsActions.getTech()
        .then(() => {
          const dispatchCall = spyDispatcher.mock.calls[0][0];
          expect(spyDispatcher).toHaveBeenCalled();
          expect(dispatchCall.actionType).toEqual(newsConstants.NEWS_TECH);
          expect(dispatchCall.articleList).toBeInstanceOf(Object);
        })
    );  

     it('should get articles for Sports news', () => 
      newsActions.getSports()
        .then(() => {
          const dispatchCall = spyDispatcher.mock.calls[0][0];
          expect(spyDispatcher).toHaveBeenCalled();
          expect(dispatchCall.actionType).toEqual(newsConstants.NEWS_SPORTS);
          expect(dispatchCall.articleList).toBeInstanceOf(Object);
        })
    );  

     it('should get articles for Entertainment news', () => 
      newsActions.getEntertainment()
        .then(() => {
          const dispatchCall = spyDispatcher.mock.calls[0][0];
          expect(spyDispatcher).toHaveBeenCalled();
          expect(dispatchCall.actionType).toEqual(
            newsConstants.NEWS_ENTERTAINMENT
            );
          expect(dispatchCall.articleList).toBeInstanceOf(Object);
        })
    );  

    
  });
  
});
