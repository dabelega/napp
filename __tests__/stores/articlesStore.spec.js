import articlesStore from '../../src/stores/articlesStore';
import AppDispatcher from '../../src/dispatcher/AppDispatcher';
import newsConstants from '../../src/constants/newsConstants';

jest.mock('../../src/dispatcher/AppDispatcher');
const dispatcherCallMock = AppDispatcher.register.mock.calls[0][0];

const articlesAction = {
      actionType: newsConstants.NEWS_ARTICLES,
      articleList: [
        {
          author: "TNW Deals",
          title: "Build electronics projects",
          description: "Understanding electronics",
           
        },
        {
          author: "Rachel Kaser",
          title: "Facebook brings out a new ‘Order Food’ option",
          description: "Facebook is rolling out a new food ordering option",
           
        }
      ]  
}

describe('Articles Store', () => {

  it('should exist', () => {
    expect(articlesStore).toBeDefined();
  });

  it('should have addChangeListener exist as a function', () => {
    expect(articlesStore.addChangeListener).toBeDefined();
  });

  it('should have removeChangeListener exist as a function', () => {
    expect(articlesStore.removeChangeListener).toBeDefined();
  });

  it('should return all articles', () => {
      dispatcherCallMock(articlesAction);
      let result = (articlesStore.fetchNewsArticles());
      expect(result[0].author).toBe("TNW Deals");
      expect(result[0].title).toBe("Build electronics projects");
      expect(result[0].description).toBe("Understanding electronics"); 

      expect(result[1].author).toBe("Rachel Kaser");
      expect(result[1].title).toBe(
        "Facebook brings out a new ‘Order Food’ option"
        );
      expect(result[1].description).toBe(
        "Facebook is rolling out a new food ordering option"
        );
    }); 

});

