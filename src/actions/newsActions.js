import * as NewsApi from '../utils/NewsApi';
import Dispatcher from '../dispatcher/AppDispatcher';

/**
  * This function gets a full list of sources from the NewsAPI
  *
  * @function getSources
  * @return {void}
  */
export function getSources() {
	return NewsApi.getSources((sourceList) => {
		Dispatcher.dispatch({
			actionType:'NEWS_SOURCES',
			sourceList: sourceList
		});
	});
}

/**
  * This function gets articles based on the Source Name and the
  * sort type. Sort Type could either be Top or Latest
  *
  * @param {string} sourceName
  * @param {string} sortType
  * @function getArticles
  * @return {void}
  */
export function getArticles(sourceName,sortType) {
        return NewsApi.displayArticles(sourceName,sortType,(articleList) => {
		Dispatcher.dispatch({
			actionType:'NEWS_ARTICLES',
			articleList: articleList
		});
	});
   
}

