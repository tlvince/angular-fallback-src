'use strict';
/* global describe, it, beforeEach, expect, element, browser, sleep */

describe('fallback src', function() {

  beforeEach(function() {
    browser().navigateTo('/');
  });

  it('should change the image src attribute', function() {
    // Inital page load
    expect(element('#first').attr('src')).toBe('broken.png');
    // Let it make the 404
    sleep(0.1);
    // Fallback image
    expect(element('#first').attr('src')).toBe('img/wiki.png');
  });

  it('should use fb-src if ng-src is empty', function() {
    expect(element('#second').attr('src')).toBe('img/wiki.png');
  });

  it('should not get stuck in a loop if fb-src 404s', function() {
    sleep(0.1);
    expect(element('#third').attr('src')).toBe('third-again.png');
  });

});
