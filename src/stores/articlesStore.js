import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher/AppDispatcher';

class ArticlesStores extends EventEmitter{

	/*
	 * Initializes state
	 * @constructor
	 * @param {null}
	 * @return {null}
     */
	constructor(){
		super();
		this.articles = [];
	} 

	/*
	 * This methods retuns articles array
	 * @param {null}
	 * @return {null}
     */
	fetchNewsArticles(){
		return this.articles;
	}

	/**
      * This function listens for change event
      * @param {function} callback
      * @return {null}
      */
    addChangeListener(callback) {
        this.on('change', callback);
    }

    /**
      * This function removes change event.
      * @param {function} callback
      * @return {null}
      */
    removeChangeListener(callback) {
      this.removeListener('change', callback);
    }

    /* 
     * This method looks for our various action types so we can
     * respond appropriately
     * @param {object} result
     */
	handleGetArticlesAction(result) {
		switch(result.actionType){
			
			case 'NEWS_ARTICLES': {
				this.articles = result.articleList;
				this.emit('change');
				break;
			}
		}
	}	
}


const articlesStore = new ArticlesStores();
Dispatcher.register(articlesStore.handleGetArticlesAction.bind(articlesStore));
export default articlesStore;