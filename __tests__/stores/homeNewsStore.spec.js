/* global define, it, describe */
import homeNewsStore from '../../src/stores/homeNewsStore';
import AppDispatcher from '../../src/dispatcher/AppDispatcher';
import newsConstants from '../../src/constants/newsConstants';
import articlesStore from '../../src/stores/articlesStore';

jest.mock('../../src/dispatcher/AppDispatcher');
const callback = AppDispatcher.register.mock.calls[0][0];



const generalAction = {
      actionType: newsConstants.NEWS_GENERAL,
      articleList: [{
        author: "TNW Deals",
        title: "Build electronics projects",
        description: "Understanding electronics",
         
      }]  
}

const featuredAction = {
      actionType: newsConstants.NEWS_FEATURED,
      articleList: [{
        author: "TNW Deals",
        title: "Build electronics projects",
        description: "Understanding electronics",
         
      }]  
}

const businessAction = {
      actionType: newsConstants.NEWS_BUSINESS,
      articleList: [{
        author: "TNW Deals",
        title: "Build electronics projects",
        description: "Understanding electronics",
         
      }]  
}
const techAction = {
      actionType: newsConstants.NEWS_TECH,
      articleList: [{
        author: "TNW Deals",
        title: "Build electronics projects",
        description: "Understanding electronics",
         
      }]  
}
const entertainmentAction = {
      actionType: newsConstants.NEWS_ENTERTAINMENT,
      articleList: [{
        author: "TNW Deals",
        title: "Build electronics projects",
        description: "Understanding electronics",
         
      }]  
}
const sportsAction = {
      actionType: newsConstants.NEWS_SPORTS,
      articleList: [{
        author: "TNW Deals",
        title: "Build electronics projects",
        description: "Understanding electronics",
         
      }]  
}

describe('Home News Store', () => {

  describe('Functions shoould be defined', () => {
    it('should exist', () => {
    expect(homeNewsStore).toBeDefined();
  });



  it('should have a fetchGeneralArticles function', () => {
    expect(homeNewsStore.fetchGeneralArticles).toBeDefined();
  });

  it('should have a fetchFeaturedArticles function', () => {
    expect(homeNewsStore.fetchFeaturedArticles).toBeDefined();
  });
  it('should have a fetchTechArticles function', () => {
    expect(homeNewsStore.fetchTechArticles).toBeDefined();
  });
  it('should have a fetchBusinessArticles function', () => {
    expect(homeNewsStore.fetchBusinessArticles).toBeDefined();
  });
  it('should have a fetchSportsArticles function', () => {
    expect(homeNewsStore.fetchSportsArticles).toBeDefined();
  });
  it('should have a fetchEntertainmentArticles function', () => {
    expect(homeNewsStore.fetchGeneralArticles).toBeDefined();
  });

  it('should have addChangeListener exist as a function', () => {
    expect(homeNewsStore.addChangeListener).toBeDefined();
  });

  it('should have removeChangeListener exist as a function', () => {
    expect(homeNewsStore.removeChangeListener).toBeDefined();
  });

  });


  describe('Testing Store return Values', () => {


    

    
    it('should return general articles', () => {
      callback(generalAction);
      let result = (homeNewsStore.fetchGeneralArticles());
      expect(result[0].author).toBe("TNW Deals");
      expect(result[0].title).toBe("Build electronics projects");
      expect(result[0].description).toBe("Understanding electronics");   
    }); 

    it('should return featured articles', () => {
      callback(featuredAction);
      let result = (homeNewsStore.fetchFeaturedArticles());
      expect(result[0].author).toBe("TNW Deals");
      expect(result[0].title).toBe("Build electronics projects");
      expect(result[0].description).toBe("Understanding electronics");   
    }); 

    it('should return business articles', () => {
      callback(businessAction);
      let result = (homeNewsStore.fetchBusinessArticles());
      expect(result[0].author).toBe("TNW Deals");
      expect(result[0].title).toBe("Build electronics projects");
      expect(result[0].description).toBe("Understanding electronics");   
    }); 

    it('should return tech articles', () => {
      callback(techAction);
      let result = (homeNewsStore.fetchTechArticles());
      expect(result[0].author).toBe("TNW Deals");
      expect(result[0].title).toBe("Build electronics projects");
      expect(result[0].description).toBe("Understanding electronics");   
    }); 

    it('should return entertainment articles', () => {
      callback(entertainmentAction);
      let result = (homeNewsStore.fetchEntertainmentArticles());
      expect(result[0].author).toBe("TNW Deals");
      expect(result[0].title).toBe("Build electronics projects");
      expect(result[0].description).toBe("Understanding electronics");   
    }); 

    it('should return sports articles', () => {
      callback(sportsAction);
      let result = (homeNewsStore.fetchSportsArticles());
      expect(result[0].author).toBe("TNW Deals");
      expect(result[0].title).toBe("Build electronics projects");
      expect(result[0].description).toBe("Understanding electronics");   
    }); 

  // it ('can be subscribed to the Store changes', () => {
  //     var callback = sinon.spy();
  //     homeNewsStore.addChangeListener(callback);
  //     homeNewsStore.emit('change');

  //     expect(callback.calledOnce).to.be.true;
  //   });



  // it ('can be subscribed to the Store changes', () => {
  //     var callback = sinon.spy();
  //     homeNewsStore.removeChangeListener(callback);
  //     homeNewsStore.emit('change');

  //     expect(callback.calledOnce).to.be.false;
  //   });


  });

  

});

