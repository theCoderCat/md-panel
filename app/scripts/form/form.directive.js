(function() {
  'use strict';
  var app = angular.module('app.ui.form.directives', []);

  app.directive('uiRangeSlider', [
    function() {
      return {
        restrict: 'A',
        link: function(scope, ele) {
          return ele.slider();
        }
      };
    }
  ]);

  app.directive('uiFileUpload', [
    function() {
      return {
        restrict: 'A',
        link: function(scope, ele) {
          return ele.bootstrapFileInput();
        }
      };
    }
  ]);

  app.directive('uiSpinner', [
    function() {
      return {
        restrict: 'A',
        compile: function(ele) {
          ele.addClass('ui-spinner');
          return {
            post: function() {
              return ele.spinner();
            }
          };
        }
      };
    }
  ]);

  app.directive('uiWizardForm', [
    function() {
      return {
        link: function(scope, ele) {
          return ele.steps();
        }
      };
    }
  ]);

}).call(this);
