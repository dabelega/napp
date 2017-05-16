import React from 'react';
import { expect } from 'chai';
import * as AuthActions from '../../actions/AuthActions';
import AuthStore from '../../stores/AuthStore';
import AuthConstants from '../../constants/AuthConstants';




describe('Napp Auth Actions', () => {
	  it('should exist', () => {
    expect(AuthActions.logUserIn).to.exist;
  }); 
	  it('should exist', () => {
    expect(AuthActions.logUserOut).to.exist;
  }); 

});
