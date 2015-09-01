(function() {
  'use strict';
  var app = angular.module('app.nav', []);

  app.directive('toggleNavCollapsedMin', [
    '$rootScope', function($rootScope) {
      return {
        restrict: 'A',
        link: function(scope, ele, attrs) {
          var app;
          app = $('#app');
          return ele.on('click', function(e) {
            if (app.hasClass('nav-collapsed-min')) {
              app.removeClass('nav-collapsed-min');
            } else {
              app.addClass('nav-collapsed-min');
              $rootScope.$broadcast('nav:reset');
            }
            return e.preventDefault();
          });
        }
      };
    }
  ]);

  app.directive('collapseNav', [
    function() {
      return {
        restrict: 'A',
        link: function(scope, ele, attrs) {
          var $a, $aRest, $app, $lists, $listsRest, $nav, $window, Timer, prevWidth, updateClass;
          $window = $(window);
          $lists = ele.find('ul').parent('li');
          $lists.append('<i class="fa fa-plus text-muted icon-has-ul"></i>');
          $a = $lists.children('a');
          $listsRest = ele.children('li').not($lists);
          $aRest = $listsRest.children('a');
          $app = $('#app');
          $nav = $('#nav-container');
          $a.on('click', function(event) {
            var $parent, $this;
            if ($app.hasClass('nav-collapsed-min') || ($nav.hasClass('nav-horizontal') && $window.width() >= 768)) {
              return false;
            }
            $this = $(this);
            $parent = $this.parent('li');
            $lists.not($parent).removeClass('open').find('ul').slideUp();
            $lists.not($parent).find('i.icon-has-ul').removeClass('fa-minus').addClass('fa-plus');
            $parent.toggleClass('open').find('ul').slideToggle();
            $parent.find('i.icon-has-ul').toggleClass('fa-plus').toggleClass('fa-minus');
            return event.preventDefault();
          });
          $aRest.on('click', function(event) {
            $lists.removeClass('open').find('ul').slideUp(400);
            $lists.find('i.icon-has-ul').removeClass('fa-minus').addClass('fa-plus');
          });
          scope.$on('nav:reset', function(event) {
            $lists.removeClass('open').find('ul').slideUp(400);
            $lists.find('i.icon-has-ul').removeClass('fa-minus').addClass('fa-plus');
          });
          Timer = void 0;
          prevWidth = $window.width();
          updateClass = function() {
            var currentWidth;
            currentWidth = $window.width();
            if (currentWidth < 768) {
              $app.removeClass('nav-collapsed-min');
            }
            if (prevWidth < 768 && currentWidth >= 768 && $nav.hasClass('nav-horizontal')) {
              $lists.removeClass('open').find('ul').slideUp();
              $lists.find('i.icon-has-ul').removeClass('fa-minus').addClass('fa-plus');
            }
            return prevWidth = currentWidth;
          };
          return $window.resize(function() {
            var t;
            clearTimeout(t);
            return t = setTimeout(updateClass, 300);
          });
        }
      };
    }
  ]);

  app.directive('highlightActive', [
    function() {
      return {
        restrict: "A",
        controller: [
          '$scope', '$element', '$attrs', '$location', function($scope, $element, $attrs, $location) {
            var highlightActive, links, path;
            links = $element.find('a');
            path = function() {
              return $location.path();
            };
            highlightActive = function(links, path) {
              path = '#' + path;
              return angular.forEach(links, function(link) {
                var $li, $link, href;
                $link = angular.element(link);
                $li = $link.parent('li');
                href = $link.attr('href');
                if ($li.hasClass('active')) {
                  $li.removeClass('active');
                }
                if (path.indexOf(href) === 0) {
                  return $li.addClass('active');
                }
              });
            };
            highlightActive(links, $location.path());
            return $scope.$watch(path, function(newVal, oldVal) {
              if (newVal === oldVal) {
                return;
              }
              return highlightActive(links, $location.path());
            });
          }
        ]
      };
    }
  ]);

  app.directive('toggleOffCanvas', [
    function() {
      return {
        restrict: 'A',
        link: function(scope, ele, attrs) {
          return ele.on('click', function() {
            return $('#app').toggleClass('on-canvas');
          });
        }
      };
    }
  ]);

}).call(this);
