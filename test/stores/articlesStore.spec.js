/* global define, it, describe */
import { expect } from 'chai';
import sinon from 'sinon';
import articlesStore from '../../src/stores/articlesStore';

describe('Articles Store', () => {

  it('should exist', () => {
    expect(articlesStore).to.exist;
  });

  it('should initialize articles as empty array', () => {
    expect(articlesStore.articles).to.eql([]);
  });

  it('should have addChangeListener exist as a function', () => {
    expect(articlesStore.addChangeListener).to.be.a('function');
  });

  it('should have removeChangeListener exist as a function', () => {
    expect(articlesStore.removeChangeListener).to.be.a('function');
  });

  it ('can be subscribed to the Store changes', () => {
      var callback = sinon.spy();
      articlesStore.addChangeListener(callback);
      articlesStore.emit('change');

      expect(callback.calledOnce).to.be.true;
    });

});

