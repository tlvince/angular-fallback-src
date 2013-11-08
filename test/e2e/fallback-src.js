'use strict';
/* global describe, it, beforeEach, expect, element, browser, sleep */

describe('fallback src', function() {

  beforeEach(function() {
    browser().navigateTo('/');
  });

  it('should change the image src attribute', function() {
    // Inital page load
    expect(element('#first img').attr('src')).toBe('broken.png');
    // Let it make the 404
    sleep(0.1);
    // Fallback image
    expect(element('#first img').attr('src')).toBe('img/wiki.png');
  });

  it('should use fb-src if ng-src is empty', function() {
    expect(element('#second img').attr('src')).toBe('img/wiki.png');
  });

});
