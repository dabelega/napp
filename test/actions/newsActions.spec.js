/* global define, it, describe */
import { expect } from 'chai';
import * as newsActions from '../../src/actions/newsActions';


describe('News API Actions', () => {
  it('should exist', () => {
    expect(newsActions.getSources).to.exist;
  }); 
  it('should exist', () => {
    expect(newsActions.getArticles).to.exist;
  }); 
  it('should exist', () => {
    expect(newsActions.getGeneral).to.exist;
  }); 
  it('should exist', () => {
    expect(newsActions.getFeatured).to.exist;
  }); 
  it('should exist', () => {
    expect(newsActions.getBusiness).to.exist;
  }); 
  it('should exist', () => {
    expect(newsActions.getTech).to.exist;
  }); 
  it('should exist', () => {
    expect(newsActions.getEntertainment).to.exist;
  }); 
  it('should exist', () => {
    expect(newsActions.getSports).to.exist;
  }); 

});
