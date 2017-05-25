import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher/AppDispatcher';

class ArticlesStores extends EventEmitter{
	constructor(){
		super();
		this.articles = [];
	} 

	/*
	 * This methods retuns articles array
     */
	fetchNewsArticles(){
		return this.articles;
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