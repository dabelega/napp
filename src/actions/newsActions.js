import * as newsAPI from '../utils/newsAPI';
import Dispatcher from '../dispatcher/AppDispatcher';

/**
  * This function gets a full list of sources from the NewsAPI
  */
export function getSources() {
	newsAPI.getSources((sourceList) => {
		Dispatcher.dispatch({
			actionType:'NEWS_SOURCES',
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
	newsAPI.displayArticles(sourceName,sortType,(articleList) => {
		Dispatcher.dispatch({
			actionType:'NEWS_ARTICLES',
			articleList: articleList
		});
	});
}

/**
  * This function gets articles in the General Category on the 
  * home page
  */
export function getGeneral(){
	newsAPI.displayGeneral((articleList) => {
		Dispatcher.dispatch({
			actionType:'NEWS_GENERAL',
			articleList: articleList,
		});
	});
}

/**
  * This function gets articles in the Featured Category on the 
  * home page
  */
export function getFeatured(){
	newsAPI.displayFeatured((articleList) => {
		Dispatcher.dispatch({
			actionType:'NEWS_FEATURED',
			articleList: articleList,
		});
	});
}

/**
  * This function gets articles in the Business Category on the 
  * home page
  */
export function getBusiness(){
	newsAPI.displayBusiness((articleList) => {
		Dispatcher.dispatch({
			actionType:'NEWS_BUSINESS',
			articleList: articleList,
		});
	});
}

/**
  * This function gets articles in the Tech Category on the 
  * home page
  */
export function getTech(){
	newsAPI.displayTech((articleList) => {
		Dispatcher.dispatch({
			actionType:'NEWS_TECH',
			articleList: articleList,
		});
	});
}

/**
  * This function gets articles in the Entertainment Category on the 
  * home page
  */
export function getEntertainment(){
	newsAPI.displayEntertainment((articleList) => {
		Dispatcher.dispatch({
			actionType:'NEWS_ENTERTAINMENT',
			articleList: articleList,
		});
	});
}

/**
  * This function gets articles in the Sports Category on the 
  * home page
  */
export function getSports(){
	newsAPI.displaySports((articleList) => {
		Dispatcher.dispatch({
			actionType:'NEWS_SPORTS',
			articleList: articleList,
		});
	});
}


