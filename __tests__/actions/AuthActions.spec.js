/* global define, it, describe */
import { expect } from 'chai';
import * as AuthActions from '../../src/actions/AuthActions';

describe('Napp Auth Actions', () => {
	it('should exist', () => {
    expect(AuthActions.logUserIn).to.exist;
  }); 
	it('should exist', () => {
    expect(AuthActions.logUserOut).to.exist;
  }); 

});
