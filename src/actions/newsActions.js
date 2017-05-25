import * as newsAPI from '../utils/newsAPI';
import Dispatcher from '../dispatcher/AppDispatcher';
import newsConstants from '../constants/newsConstants';

/**
  * This function gets a full list of sources from the NewsAPI
  */
export function getSources() {
	return newsAPI.getSources((sourceList) => {
		Dispatcher.dispatch({
			actionType:newsConstants.NEWS_SOURCES,
			sourceList: sourceList
		});
	});
}

/**
  * This function gets articles based on the Source Name and the
  * sort type. Sort Type could either be Top or Latest
  * @param {string} sourceName
  * @param {string} sortType
  */
export function getArticles(sourceName,sortType) {
        return newsAPI.displayArticles(sourceName,sortType,(articleList) => {
		Dispatcher.dispatch({
			actionType:newsConstants.NEWS_ARTICLES,
			articleList: articleList
		});
	});
   
}

/**
  * This function gets articles in the General Category on the 
  * home page
  */
export function getGeneral(){
	return newsAPI.displayGeneral((articleList) => {
		Dispatcher.dispatch({
			actionType:newsConstants.NEWS_GENERAL,
			articleList: articleList,
		});
	});
}

/**
  * This function gets articles in the Featured Category on the 
  * home page
  */
export function getFeatured(){
	return newsAPI.displayFeatured((articleList) => {
		Dispatcher.dispatch({
			actionType:newsConstants.NEWS_FEATURED,
			articleList: articleList,
		});
	});
}

/**
  * This function gets articles in the Business Category on the 
  * home page
  */
export function getBusiness(){
	return newsAPI.displayBusiness((articleList) => {
		Dispatcher.dispatch({
			actionType:newsConstants.NEWS_BUSINESS,
			articleList: articleList,
		});
	});
}

/**
  * This function gets articles in the Tech Category on the 
  * home page
  */
export function getTech(){
	return newsAPI.displayTech((articleList) => {
		Dispatcher.dispatch({
			actionType:newsConstants.NEWS_TECH,
			articleList: articleList,
		});
	});
}

/**
  * This function gets articles in the Entertainment Category on the 
  * home page
  */
export function getEntertainment(){
	return newsAPI.displayEntertainment((articleList) => {
		Dispatcher.dispatch({
			actionType:newsConstants.NEWS_ENTERTAINMENT,
			articleList: articleList,
		});
	});
}

/**
  * This function gets articles in the Sports Category on the 
  * home page
  */
export function getSports(){
	return newsAPI.displaySports((articleList) => {
		Dispatcher.dispatch({
			actionType:newsConstants.NEWS_SPORTS,
			articleList: articleList,
		});
	});
}


