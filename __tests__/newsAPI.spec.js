import * as newsAPI from '../src/utils/newsAPI';


describe('On the News API page', () => {
	describe('#displayArticles and #getSources Functions', () => {
		it('should exist', () => {	
          expect(newsAPI.displayArticles).toBeDefined();
          expect(newsAPI.getSources).toBeDefined();
       });
    }); 

    describe('After the API Call', () => {
      const	articles = [
			{
				"author": "TNW Deals",
				"title": "Build electronics projects great and small" + 
				"with the SainSmart UNO for Arduino, for under $55",
				"description": "Understanding how electronics actually" + 
				"work can be pretty confusing. Often, inquisitive students" +
				"succeed or fail in creating small electronic projects by" + 
				"simple trial and error. Thankfully, ...",
				"url": "https://thenextweb.com/offers/2017/05/21/" +
				"build-electronics-projects-great-small-" +
				"sainsmart-uno-arduino-55/",
				"urlToImage": "https://cdn3.tnwcdn.com/wp-content/" +
				"blogs.dir/1/files/2017/05/15gPgse.jpg",
				"publishedAt": "2017-05-21T17:33:34Z"
			},
			{
				"author": "TNW Deals",
				"title": "For $20, you’ll learn all the" + 
				"tricks of digital media specialists",
				"description": "If you’re going to market a business," +
				" an event, or an initiative online," +
				"you need to know how the game is" + 
				"played in the age of digital media." + 
				"From social networks to SEO challenges ...",
				"url": "https://thenextweb.com/offers/2017/05/20" + 
				"/20-youll-learn-tricks-digital-media-specialists/",
				"urlToImage": "https://cdn3.tnwcdn.com/" + 
				"wp-content/blogs.dir/1/files/2017/05/Cizblo9.jpg",
				"publishedAt": "2017-05-20T17:33:51Z"
			},
			{
				"author": "Melissa Thompson",
				"title": "The iPhone 8 rumor mill: what to expect, or not",
				"description": "“You need to look no further than Apple's" + 
				"iPhone to see how fast brilliantly written software" +
				"presented on a beautifully designed device with" + 
				"a spectacular user interface will throw ...",
				"url": "https://thenextweb.com/contributors/" +
				"2017/05/20/iphone-8-rumor-mill-expect-not/",
				"urlToImage": "https://cdn0.tnwcdn.com/" + 
				"wp-content/blogs.dir/1/files/2017/05/iphone-6-458151_1920.jpg",
				"publishedAt": "2017-05-20T16:35:43Z"
			}
        ]

        const sources = [
            {
                "id": "abc-news-au",
                "name": "ABC News (AU)",
                "description": "Australia's most trusted source of local," +
                " national and world news. Comprehensive, independent," + 
                " in-depth analysis, the latest business, sport," +
                "weather and more.",
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
        describe('#displayArticles', () => {
			it('should get the correct list of articles', () => {	
				newsAPI.displayArticles(
					'the-next-web', 'top', (articleList) => {
				expect(articleList).toEqual(articles);
				});
			});
        });

        describe('#getSources', () => {
			it('should get the correct list of sources', () => {	
            newsAPI.displayArticles('the-next-web', 'top', (sourceList) => {
            expect(sourceList).toEqual(sources);
          });
         });
       });      

        

    });    
});



