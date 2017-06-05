import AuthStore from '../../src/stores/AuthStore';
import AppDispatcher from '../../src/dispatcher/AppDispatcher';

jest.mock('../../src/dispatcher/AppDispatcher');
const dispatcherCallMock = AppDispatcher.register.mock.calls[0][0];



describe('Auth Store', () => {
  
  it('should register a callback with the dispatcher', () => {
    expect(dispatcherCallMock.length).toBe(1);
  });

  it('should dispatch the right action', () => {
    expect(dispatcherCallMock.length).toBe(1);
  });
  
  it('should set and get users from localstorage', () => {
    let profile = 'Ken Adams';
    let token = '12345';
    AuthStore.setUser(profile, token);
    expect(localStorage.getItem('id_token')).toBe('12345');
    expect(localStorage.getItem('profile')).toBe('\"Ken Adams\"');
  });

  it('should remove users from localstorage', () => {
    let profile = 'Ken Adams';
    let token = '12345';
    AuthStore.setUser(profile, token);
    AuthStore.removeUser()
    expect(localStorage.getItem('id_token')).toBe(null);
  });

  it('should log users in and log users out', () => {
    let profile = 'Ken Adams';
    let token = '12345';
    AuthStore.setUser(profile, token);
    expect(AuthStore.isAuthenticated()).toBe(true);
    AuthStore.removeUser();
    expect(AuthStore.isAuthenticated()).toBe(false);
  }); 
  
});

