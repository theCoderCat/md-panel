(function() {
  'use strict';
  var app = angular.module('app.controllers', []);

  app.controller('AppCtrl', [
    '$scope', '$rootScope', function($scope, $rootScope) {
      var $window;
      $window = $(window);
      $scope.main = {
        brand: 'MDPanel',
        name: 'Mário Hassan'
      };
      $scope.profile = {
        name: 'Mário Hassan',
        email: 'mario@emailprovider.com',
        address: '1st Crazy Str., Mars',
        phone: '(+123) 456 789',
        nation: 'USA',
        website: 'thecodercat.com',
      }
      $scope.pageTransitionOpts = [
        {
          name: 'Slide in',
          'class': 'ainmate-slide-in-right'
        }, {
          name: 'Scale up',
          'class': 'ainmate-scale-up'
        }, {
          name: 'Fade up',
          'class': 'animate-fade-up'
        }, {
          name: 'Flip',
          'class': 'animate-flip-y'
        }
      ];
      $scope.loaders = [
        {
          name: 'Puff',
          filename: 'puff.svg'
        }, {
          name: 'Audio',
          filename: 'audio.svg'
        }, {
          name: 'Rings',
          filename: 'rings.svg'
        }, {
          name: 'Hearts',
          filename: 'Hearts.svg'
        }, {
          name: 'Oval',
          filename: 'oval.svg'
        }, {
          name: 'Three Dots',
          filename: 'three-dots.svg'
        }, {
          name: 'Spinning Circles',
          filename: 'spinning-circles.svg'
        }, {
          name: 'Circles',
          filename: 'circles.svg'
        }, {
          name: 'Tail Spin',
          filename: 'tail-spin.svg'
        }, {
          name: 'Bars',
          filename: 'bars.svg'
        }, {
          name: 'Ball Triangle',
          filename: 'ball-triangle.svg'
        }
      ];
      $scope.skins = [
        {
          name: 'Green Honest',
          class: 'skin-green'
        }, {
          name: 'Space Gray',
          class: 'skin-gray'
        }, {
          name: 'Navi',
          class: 'skin-navi'
        } , {
          name: 'Flame',
          class: 'skin-flame'
        }
      ];
      $scope.admin = {
        layout: 'fullscreen',
        menu: 'vertical',
        fixedHeader: true,
        fixedSidebar: true,
        pageTransition: $scope.pageTransitionOpts[1],
        loader: $scope.loaders[0],
        skin: $scope.skins[2],
      };
      $scope.$watch('admin', function(newVal, oldVal) {
        if (newVal.menu === 'horizontal' && oldVal.menu === 'vertical') {
          $rootScope.$broadcast('nav:reset');
          return;
        }
        if (newVal.fixedHeader === false && newVal.fixedSidebar === true) {
          if (oldVal.fixedHeader === false && oldVal.fixedSidebar === false) {
            $scope.admin.fixedHeader = true;
            $scope.admin.fixedSidebar = true;
          }
          if (oldVal.fixedHeader === true && oldVal.fixedSidebar === true) {
            $scope.admin.fixedHeader = false;
            $scope.admin.fixedSidebar = false;
          }
          return;
        }
        if (newVal.fixedSidebar === true) {
          $scope.admin.fixedHeader = true;
        }
        if (newVal.fixedHeader === false) {
          $scope.admin.fixedSidebar = false;
        }
      }, true);
      $scope.color = {
        primary: '#2980B9',
        success: '#75CE66',
        info: '#3498DB',
        infoAlt: '#9B59B6',
        warning: '#F0CA45',
        danger: '#C03B44'
      };
      $scope.switchSkin = function($skin) {
        switch ($skin) {
          case 'skin-green': {
            $scope.admin.skin = $scope.skins[0];
            break;
          }

          case 'skin-gray': {
            $scope.admin.skin = $scope.skins[1];
            break;
          }

          case 'skin-navi': {
            $scope.admin.skin = $scope.skins[2];
            break;
          }

          case 'skin-flame': {
            $scope.admin.skin = $scope.skins[3];
            break;
          }

          default: {
            $scope.admin.skin = $scope.skins[2];
            break;
          }
        }
      }
    }
  ]);
  //
  app.controller('HeaderCtrl', ['$scope', function($scope) {}]);

  app.controller('NavContainerCtrl', ['$scope', function($scope) {}]);

  app.controller('NavCtrl', [
    '$scope', 'taskStorage', 'filterFilter', function($scope, taskStorage, filterFilter) {
      var tasks;
      tasks = $scope.tasks = taskStorage.get();
      $scope.taskRemainingCount = filterFilter(tasks, {
        completed: false
      }).length;
      return $scope.$on('taskRemaining:changed', function(event, count) {
        return $scope.taskRemainingCount = count;
      });
    }
  ]);

  app.controller('DashboardCtrl', ['$scope', function($scope) {}]);

  app.run(function(editableOptions, editableThemes) {
    editableOptions.theme = 'bs3';
    editableThemes.bs3.inputClass = 'input-sm';
    editableThemes.bs3.buttonsClass = 'btn-sm';
  });

}).call(this);
