import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher/AppDispatcher';

class HomeNewsStores extends EventEmitter{
	constructor(){
		super();
		this.general = [];
		this.featured = [];
		this.business = [];
		this.tech = [];
		this.entertainment = [];
		this.sports = [];
	} 

	/*
	 * This methods retuns general array
     */
	fetchGeneralArticles(){
		return this.general;
	}

	/*
	 * This methods retuns featured array
     */
	fetchFeaturedArticles(){
		return this.featured;
	}

	/*
	 * This methods retuns business array
     */
	fetchBusinessArticles(){
		return this.business;
	}

	/*
	 * This methods retuns tech array
     */
	fetchTechArticles(){
		return this.tech;
	}

	/*
	 * This methods retuns entertainement array
     */
	fetchEntertainmentArticles(){
		return this.entertainment;
	}

	/*
	 * This methods retuns sports array
     */
	fetchSportsArticles(){
		return this.sports;
	}

	/**
      * This function listens for change event
      * @param {callback} function
      */
	addChangeListener(callback) {
        this.on('change', callback);
    }

    /**
    * This function removes change event.
    * @param {callback} function
    */
    removeChangeListener(callback) {
      this.removeListener('change', callback);
    }

    
    /* 
     * This method looks for our various action types so we can
     * respond appropriately
     */
	handleHomeNewsAction(result) {
		switch(result.actionType){
			
			case 'NEWS_GENERAL': {
				this.general = result.articleList;
				this.emit('change');
				break;
			}

			case 'NEWS_FEATURED': {
				this.featured = result.articleList;
				this.emit('change');
				break;
			}

			case 'NEWS_BUSINESS': {
				this.business = result.articleList;
				this.emit('change');
				break;
			}

			case 'NEWS_TECH': {
				this.tech = result.articleList;
				this.emit('change');
				break;
			}

			case 'NEWS_ENTERTAINMENT': {
				this.entertainment = result.articleList;
				this.emit('change');
				break;
			}

			case 'NEWS_SPORTS': {
				this.sports = result.articleList;
				this.emit('change');
				break;
			}


		}
	}	
}


const homeNewsStore = new HomeNewsStores();
Dispatcher.register(homeNewsStore.handleHomeNewsAction.bind(homeNewsStore));
export default homeNewsStore;