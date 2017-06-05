import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher/AppDispatcher';

/**
  * Data Store for Articles
  *
  * @class ArticleStore
  * @extends {EventEmitter}
  */

class ArticlesStore extends EventEmitter{

	/*
	 * Initializes state
	 *
	 * @constructor
	 * @return {void}
     */
	constructor(){
		super();
		this.articles = [];
	} 

	/*
	 * This methods retuns articles array
	 * 
	 * @function fetchNewsArticles
	 * @return {void}
   */
	fetchNewsArticles(){
		return this.articles;
	}

	/**
    * This function listens for change event
    *
    * @function addChangelistener
    * @callback requestCallback
    * @return {void}
    */
    addChangeListener(callback) {
        this.on('change', callback);
    }

    /**
      * This function removes change event.
      *
      * @function removeChangeListener
      * @callback requestCallback
      * @return {void}
      */
    removeChangeListener(callback) {
      this.removeListener('change', callback);
    }

    /* 
     * This method looks for our various action types so we can
     * respond appropriately
     *
     * @function handleGetArticlesAction
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


const articlesStore = new ArticlesStore();
Dispatcher.register(articlesStore.handleGetArticlesAction.bind(articlesStore));
export default articlesStore;