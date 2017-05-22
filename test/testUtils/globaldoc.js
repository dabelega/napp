import { jsdom } from 'jsdom';

global.document = jsdom('');
global.window = global.document.defaultView;

Object.keys(global.window).map(function(key) {
  if(!global[key]){
    global[key] = global.window.key;
  }
});