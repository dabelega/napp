import React from 'react';
import { expect } from 'chai';
import * as newsActions from '../../actions/newsActions';
import newsstores from '../../stores/newsStore';
import newsDispatcher from '../../dispatcher/Appdispatcher';



describe('Napp Actions', () => {
	  it('should exist', () => {
    expect(newsActions.getSources).to.exist;
  }); 
	  it('should exist', () => {
    expect(newsActions.getArticles).to.exist;
  }); 

});
