/* global define, it, describe */
import { expect } from 'chai';
import * as newsActions from '../../actions/newsActions';

describe('Napp Actions', () => {
  it('should exist', () => {
    expect(newsActions.getSources).to.exist;
  }); 
  it('should exist', () => {
    expect(newsActions.getArticles).to.exist;
  }); 

});
