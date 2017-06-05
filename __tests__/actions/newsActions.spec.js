import * as newsActions from '../../src/actions/newsActions';
import AppDispatcher from '../../src/dispatcher/AppDispatcher';


const articles = [
      {
        "author": "TNW Deals",
          "title": "Build electronics projects great and..",
          "description": "Understanding how electronics ants..",
          "url": "https://thenextweb.com/offers/2..",
          "urlToImage": "https://cdn3.tnwcdn.com/wp-cont..",
          "publishedAt": "2017-05-21T17:33:34Z"
      }
]



describe('News API Actions', () => {

  let spyDispatcher;
    beforeEach(() => {
     jest.mock('axios');
     spyDispatcher = jest.spyOn(AppDispatcher, 'dispatch');
    });

    afterEach(() => {
     spyDispatcher.mockReset();
    });

  describe('Test for getSources function', () => {

    it('should have a getSources function', () => {
      expect(newsActions.getSources).toBeDefined();
    });

    it('should dispatch an action', () => 
      newsActions.getSources()
        .then(() => {
          const dispatchCall = spyDispatcher.mock.calls[0][0];
          expect(spyDispatcher).toHaveBeenCalled();
          expect(dispatchCall.actionType).toEqual('NEWS_SOURCES');
          expect(dispatchCall.sourceList).toBeInstanceOf(Object);
        })
    );
  });
  
  describe('Test for getArticles function', () => {

    it('should have a getArticles function', () => {
      expect(newsActions.getArticles).toBeDefined();
    }); 
    
    it('should dispatch an action', () => 
      newsActions.getArticles('abc-news-au', 'top')
        .then(() => {
          const dispatchCall = spyDispatcher.mock.calls[0][0];
          expect(spyDispatcher).toHaveBeenCalled();
          expect(dispatchCall.actionType).toEqual('NEWS_ARTICLES');
          expect(dispatchCall.articleList).toBeInstanceOf(Object);
          expect(dispatchCall.articleList).toEqual(articles);
        })
    );

    
  });
  
});
