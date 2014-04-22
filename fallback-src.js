'use strict';

/**
 * Fallback image source directive.
 *
 * Add an `fb-src` attribute to an `<img>`. If the image's `ng-src` does not
 * exist, `fb-src` will be used instead.
 *
 * @param {(string|string[])} fb-src - A URL to an image, or an array of URLs
 * @example
 * // <img
 * //  ng-src="broken.png"
 * //  fb-src="http://upload.wikimedia.org/wikipedia/en/b/bc/Wiki.png" />
 */
angular.module('fallback.src', [])
  .directive('fbSrc', function() {
    return {
      restrict: 'A',
      scope: {
        fbSrc: '=',
      },
      link: function(scope, element, attrs) {
        var fallbacks = [attrs.fbSrc];
        if(scope.fbSrc && angular.isArray(scope.fbSrc)) {
          fallbacks = scope.fbSrc;
        }

        if(!attrs.ngSrc) {
          element.attr('src', fallbacks[0]);
        }

        var bind = function(i) {
          if(i < fallbacks.length) {
            if(!fallbacks[i]) {
              return bind(i + 1);
            }
            element.attr('src', fallbacks[i]);
            element.bind('error', function() {
              element
                .unbind('error')
                .attr('src', fallbacks[i]);
              return bind(i + 1);
            });
          }
        };

        bind(0);
      }
    };
  });
