import SourcesStore from '../../src/stores/sourcesStore';
import AppDispatcher from '../../src/dispatcher/AppDispatcher';

jest.mock('../../src/dispatcher/AppDispatcher');
const dispatcherCallMock = AppDispatcher.register.mock.calls[0][0];

const sourcesAction = {
      actionType: 'NEWS_SOURCES',
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

  it('should register a callback with the dispatcher', () => {
    expect(dispatcherCallMock.length).toBe(1);
  });

  it('should be initialized as an empty array', () => {
      expect(SourcesStore.fetchNewsSources()).toEqual([]);
  });

  it('should register all sources', () => {
      dispatcherCallMock(sourcesAction);
      let result = (SourcesStore.fetchNewsSources());
      expect(result[0].id).toBe("abc-news-au");
      expect(result[0].name).toBe("ABC News (AU)");
      expect(result[0].description).toBe("Australian news source"); 

      expect(result[1].id).toBe("bbc");
      expect(result[1].name).toBe("BBC");
      expect(result[1].description).toBe("British news source");
    }); 

});

