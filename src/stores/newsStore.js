import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher/AppDispatcher';

class NewsStores extends EventEmitter{
	constructor(){
		super();
		this.sources = [];
		this.articles = [];

	} 

	fetchNewsSources(){
		return this.sources;
	}

	fetchNewsArticles(){
		return this.articles;
	}

	handleNewsAction(result) {
		switch(result.actionType){
			case 'NEWS_SOURCES': {
				this.sources = result.data;
				this.emit('sources_change');
				break;
			}

			case 'NEWS_ARTICLES': {
				this.articles = result.data;
				this.emit('articles_change');
				break;
			}
		}
	}	
}


const newsStore = new NewsStores();
Dispatcher.register(newsStore.handleNewsAction.bind(newsStore));
export default newsStore;