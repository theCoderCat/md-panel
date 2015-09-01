(function() {
  'use strict';
  var app = angular.module('app.directives', []);

  app.directive('imgHolder', [
    function() {
      return {
        restrict: 'A',
        link: function(scope, ele, attrs) {
          return Holder.run({
            images: ele[0]
          });
        }
      };
    }
  ]);

  app.directive('customPage', function() {
    return {
      restrict: "A",
      controller: [
        '$scope', '$element', '$location', function($scope, $element, $location) {
          var addBg, path;
          path = function() {
            return $location.path();
          };
          addBg = function(path) {
            $element.removeClass('body-wide body-lock');
            switch (path) {
              case '/404':
              case '/pages/404':
              case '/pages/500':
              case '/pages/signin':
              case '/pages/signup':
              case '/pages/forgot-password':
                return $element.addClass('body-wide');
              case '/pages/lock-screen':
                return $element.addClass('body-wide body-lock');
            }
          };
          addBg($location.path());
          return $scope.$watch(path, function(newVal, oldVal) {
            if (newVal === oldVal) {
              return;
            }
            return addBg($location.path());
          });
        }
      ]
    };
  });

  app.directive('uiColorSwitch', [
    function() {
      return {
        restrict: 'A',
        link: function(scope, ele, attrs) {
          return ele.find('.color-option').on('click', function(event) {
            var $this, hrefUrl, style;
            $this = $(this);
            hrefUrl = void 0;
            style = $this.data('style');
            if (style === 'loulou') {
              hrefUrl = 'styles/main.css';
              $('link[href^="styles/main"]').attr('href', hrefUrl);
            } else if (style) {
              style = '-' + style;
              hrefUrl = 'styles/main' + style + '.css';
              $('link[href^="styles/main"]').attr('href', hrefUrl);
            } else {
              return false;
            }
            return event.preventDefault();
          });
        }
      };
    }
  ]);

  app.directive('goBack', [
    function() {
      return {
        restrict: "A",
        controller: [
          '$scope', '$element', '$window', function($scope, $element, $window) {
            return $element.on('click', function() {
              return $window.history.back();
            });
          }
        ]
      };
    }
  ])

  app.directive('routeLoader', function() {
    return {
      restrict: 'EA',
      link: function(scope, element) {
        // Store original display mode of element
        var shownType = element.css('display');
        function hideElement() {
          setTimeout(function() {
            element.fadeOut('400');
          }, 400);
        }

        scope.$on('$routeChangeStart', function() {
          element.css('display', shownType);
        });
        scope.$on('$routeChangeSuccess', hideElement);
        scope.$on('$routeChangeError', hideElement);
        // Initially element is hidden
        hideElement();
      },
      template: '<img src="images/svg-loaders/{{admin.loader.filename}}" alt="Loading" class="loader">'
    }
  });

  app.directive('detectIe', function() {
    return {
      restrict: 'EA',
      template: function() {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE");

        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
          return '<h3>Warning:</h3>Those loaders don\'t work on Internet Explorer. <br> Please <a href="http://browsehappy.com/">switch to mordern browser</a> to see them in action :)'
        } // If Internet Explorer, return version number
        else {
            return false;
        } // If another browser, return 0
      }
    }
  });

}).call(this);
