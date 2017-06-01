/* global define, it, describe */
import sourcesStore from '../../src/stores/sourcesStore';
import AppDispatcher from '../../src/dispatcher/AppDispatcher';
import newsConstants from '../../src/constants/newsConstants';

jest.mock('../../src/dispatcher/AppDispatcher');
const dispatcherCallMock = AppDispatcher.register.mock.calls[0][0];

const sourcesAction = {
      actionType: newsConstants.NEWS_SOURCES,
      sourceList: [
        {
          id: "abc-news-au",
          name: "ABC News (AU)",
          description: "Australian news source" 
           
        },
        {
          id: "bbc",
          name: "BBC",
          description: "British news source",
           
        }
      ]  
}

describe('Sources Store', () => {

  it('should exist', () => {
    expect(sourcesStore).toBeDefined();
  });

  it('should have addChangeListener exist as a function', () => {
    expect(sourcesStore.addChangeListener).toBeDefined();
  });

  it('should have removeChangeListener exist as a function', () => {
    expect(sourcesStore.removeChangeListener).toBeDefined();
  });

  it('should have handleGetSourceAction exist as a function', () => {
    expect(sourcesStore.handleGetSourceAction).toBeDefined();
  });

  it('should return all articles', () => {
      dispatcherCallMock(sourcesAction);
      let result = (sourcesStore.fetchNewsSources());
      expect(result[0].id).toBe("abc-news-au");
      expect(result[0].name).toBe("ABC News (AU)");
      expect(result[0].description).toBe("Australian news source"); 

      expect(result[1].id).toBe("bbc");
      expect(result[1].name).toBe("BBC");
      expect(result[1].description).toBe("British news source");
    }); 

});

