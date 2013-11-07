'use strict';

// Fallback image source directive.
//
// Add an `fb-src` attribute to an `<img>`. If the image's `ng-src` does not
// exist, `fb-src` will be used instead.
//
// Example:
//
//      <img
//        ng-src="broken.png"
//        fb-src="http://upload.wikimedia.org/wikipedia/en/b/bc/Wiki.png" />
angular.module('fallback.src', [])
  .directive('fbSrc', function() {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        element.bind('error', function() {
          element.attr('src', attrs.fbSrc);
        });
      }
    };
  });
