import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher/AppDispatcher';



class SourcesStore extends EventEmitter{

	/*
	 * Initializes state
	 *
	 * @constructor
	 * @return {void}
     */
	constructor(){
		super();
		this.sources = [];
	} 

	/*
	 * This methods retuns sources array
	 *
	 * @function fecthNewsSources
	 * @return {void}
     */
	fetchNewsSources(){
		return this.sources;
	}

	/**
      * This function listens for change event
      *
      * @function addChangeListener
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
     * @function handleGetSourceAction
     * @return {void}
     */
	handleGetSourceAction(result) {
		switch(result.actionType){
			case 'NEWS_SOURCES': {
				this.sources = result.sourceList;
				this.emit('change');
				break;
			}
		}
	}	
}


const sourcesStore = new SourcesStore();
Dispatcher.register(sourcesStore.handleGetSourceAction.bind(sourcesStore));
export default sourcesStore;