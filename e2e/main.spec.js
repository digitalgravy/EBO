'use strict';

describe('The main view', function () {
  var page;

  beforeEach(function () {
    browser.get('http://localhost:5683/index.html');
    page = require('./main.po');
  });

  it('will fail', function() {
    expect(true).toBe(false);
  });

});

