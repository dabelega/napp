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

