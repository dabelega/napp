import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher/AppDispatcher';



class SourcesStore extends EventEmitter{
	constructor(){
		super();
		this.sources = [];
	} 

	/*
	 * This methods retuns sources array
     */
	fetchNewsSources(){
		return this.sources;
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