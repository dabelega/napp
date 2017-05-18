import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher/AppDispatcher';

class NewsStores extends EventEmitter{
	constructor(){
		super();
		this.sources = [];
		this.articles = [];
		this.general = [];
		this.featured = [];
		this.business = [];
		this.tech = [];
		this.entertainment = [];
		this.sports = [];
	} 

	fetchNewsSources(){
		return this.sources;
	}

	fetchNewsArticles(){
		return this.articles;
	}

	fetchGeneralArticles(){
		return this.general;
	}

	fetchFeaturedArticles(){
		return this.featured;
	}

	fetchBusinessArticles(){
		return this.business;
	}

	fetchTechArticles(){
		return this.tech;
	}

	fetchEntertainmentArticles(){
		return this.entertainment;
	}

	fetchSportsArticles(){
		return this.sports;
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

			case 'NEWS_GENERAL': {
				this.general = result.data;
				this.emit('general_change');
				break;
			}

			case 'NEWS_FEATURED': {
				this.featured = result.data;
				this.emit('featured_change');
				break;
			}

			case 'NEWS_BUSINESS': {
				this.business = result.data;
				this.emit('business_change');
				break;
			}

			case 'NEWS_TECH': {
				this.tech = result.data;
				this.emit('tech_change');
				break;
			}

			case 'NEWS_ENTERTAINMENT': {
				this.entertainment = result.data;
				this.emit('entertainment_change');
				break;
			}

			case 'NEWS_SPORTS': {
				this.sports = result.data;
				this.emit('sports_change');
				break;
			}


		}
	}	
}


const newsStore = new NewsStores();
Dispatcher.register(newsStore.handleNewsAction.bind(newsStore));
export default newsStore;