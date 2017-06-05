import * as NewsApi from '../src/utils/NewsApi';

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

const sources = [
      { 
          "id": "abc-news-au",
          "name": "ABC News (AU)",
          "description": "Australia's most trusted source of...",
          "url": "http://www.abc.net.au/news",
          "category": "general",
          "language": "en",
          "country": "au",
          "urlsToLogos": {
              "small": "",
              "medium": "",
              "large": ""
          },
          "sortBysAvailable": [
              "top"
          ]
      }
        ]


describe('News API call ', () => {

	describe('displayArticles Function', () => {
		it('should exist', () => {	
          expect(NewsApi.displayArticles).toBeDefined();
       });

       it('should get list of articles', () => {	
			NewsApi.displayArticles('the-next-web', 'top', (articleList) => {
              expect(articleList).toEqual(articles);
			});
		});
	
    }); 

    describe('getSources Function', () => {

        it('should exist', () => {	
          expect(NewsApi.getSources).toBeDefined();
       });

        it('should get list of sources', () => {	
            NewsApi.displayArticles('the-next-web', 'top', (sourceList) => {
            expect(sourceList).toEqual(sources);
          }); 
        });
    });

});



