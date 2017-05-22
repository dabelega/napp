/* global define, it, describe */
import { expect } from 'chai';
import sinon from 'sinon';
import sourcesStore from '../../src/stores/sourcesStore';

describe('Sources Store', () => {

  it('should exist', () => {
    expect(sourcesStore).to.exist;
  });

  it('should initialize articles as empty array', () => {
    expect(sourcesStore.sources).to.eql([]);
  });

  it('should have addChangeListener exist as a function', () => {
    expect(sourcesStore.addChangeListener).to.be.a('function');
  });

  it('should have removeChangeListener exist as a function', () => {
    expect(sourcesStore.removeChangeListener).to.be.a('function');
  });

  it ('can be subscribed to the Store changes', () => {
      var callback = sinon.spy();
      sourcesStore.addChangeListener(callback);
      sourcesStore.emit('change');

      expect(callback.calledOnce).to.be.true;
    });

});

