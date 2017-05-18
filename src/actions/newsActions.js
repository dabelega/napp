import * as newsAPI from '../utils/newsAPI';
import Dispatcher from '../dispatcher/AppDispatcher';

export function getSources() {
	newsAPI.getSources((data) => {
		Dispatcher.dispatch({
			actionType:'NEWS_SOURCES',
			data,
		});
	});
}

export function getArticles(sourceName,sortType) {
	newsAPI.showArticles(sourceName,sortType,(data) => {
		Dispatcher.dispatch({
			actionType:'NEWS_ARTICLES',
			data,
		});
	});
}

export function getGeneral(){
	newsAPI.displayGeneral((data) => {
		Dispatcher.dispatch({
			actionType:'NEWS_GENERAL',
			data,
		});
	});
}

export function getFeatured(){
	newsAPI.displayFeatured((data) => {
		Dispatcher.dispatch({
			actionType:'NEWS_FEATURED',
			data,
		});
	});
}

export function getBusiness(){
	newsAPI.displayBusiness((data) => {
		Dispatcher.dispatch({
			actionType:'NEWS_BUSINESS',
			data,
		});
	});
}

export function getTech(){
	newsAPI.displayTech((data) => {
		Dispatcher.dispatch({
			actionType:'NEWS_TECH',
			data,
		});
	});
}

export function getEntertainment(){
	newsAPI.displayEntertainment((data) => {
		Dispatcher.dispatch({
			actionType:'NEWS_ENTERTAINMENT',
			data,
		});
	});
}

export function getSports(){
	newsAPI.displaySports((data) => {
		Dispatcher.dispatch({
			actionType:'NEWS_SPORTS',
			data,
		});
	});
}


