import * as AuthActions from '../../src/actions/AuthActions';


describe('Napp Auth Actions', () => {
	it('should exist', () => {
    expect(AuthActions.logUserIn).toBeDefined();
  }); 
	it('should exist', () => {
    expect(AuthActions.logUserOut).toBeDefined();
  });   

});
