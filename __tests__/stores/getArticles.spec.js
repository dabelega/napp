// /* global define, it, describe */
// import { expect } from 'chai';
// import sinon from 'sinon';
// import * as newsActions from '../../actions/newsActions';
// import newsStore from '../../stores/newsStore';
// import Dispatcher from '../../dispatcher/AppDispatcher';


// describe('Get Articles Action', () => {

//   const articleList = 
 //    {
	// 	"status": "ok",
	// 	"source": "the-next-web",
	// 	"sortBy": "latest",
	// 		"articles": [
	// 		{
	// 		"author": "Rachel Kaser",
	// 		"title": "Facebook brings out a new ‘Order Food’ option",
	// 		"description": "Facebook is rolling out a new food ordering...",
	// 		"url": "https://thenextweb.com/apps/2017/05/20/facebook../",
	// 		"urlToImage": "https://cdn1.tnwcdn.com/fast-food-798x310.jpg",
	// 		"publishedAt": "2017-05-20T02:13:08Z"
	// 		},
	// 		{
	// 		"author": "Rachel Kaser",
	// 		"title": "Security researcher found a WannaCry...",
	// 		"description": "If you were one of the thousands of...",
	// 		"url": "https://thenextweb.com/security/2017/05/20/security.../",
	// 		"urlToImage": "https://cdn2.tnwcdn.com/shutterstock_120539989.jpg",
	// 		"publishedAt": "2017-05-20T01:00:36Z"
	// 		},
	// 	]
	// }
  
//   newsStore.articles = articleList;

//   it('gets list of articles from a source', () => {
//     Dispatcher.dispatch({
//         actionType: newsActions.NEWS_ARTICLES,
//     });
//     expect(newsStore.fetchNewsArticles()).to.eql(articleList); 
//   });

// });

