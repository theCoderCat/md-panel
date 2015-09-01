(function() {
  'use strict';
  var app = angular.module('app.form.validation', []);

  // app.controller('wizardFormCtrl', [
  //   '$scope', function($scope) {
  //     $scope.wizard = {
  //       firstName: 'first name',
  //       lastName: '',
  //       email: '',
  //       password: '',
  //       age: '',
  //       address: ''
  //     };
  //     $scope.isValidateStep1 = function() {
  //       console.log($scope.wizardStep1);
  //       console.log($scope.wizard.firstName !== '');
  //       console.log($scope.wizard.lastName === '');
  //       console.log($scope.wizard.firstName !== '' && $scope.wizard.lastName !== '');
  //     };
  //   }
  // ]);

  app.controller('formConstraintsCtrl', [
    '$scope', function($scope) {
      var original;
      $scope.form = {
        required: '',
        minlength: '',
        maxlength: '',
        lengthRage: '',
        typeSomething: '',
        confirmType: '',
        foobar: '',
        email: '',
        url: '',
        num: '',
        minVal: '',
        maxVal: '',
        valRange: '',
        pattern: ''
      };
      original = angular.copy($scope.form);
      $scope.revert = function() {
        $scope.form = angular.copy(original);
        $scope.formConstraints.$setPristine();
      };
      $scope.canRevert = function() {
        return !angular.equals($scope.form, original) || !$scope.formConstraints.$pristine;
      };
      $scope.canSubmit = function() {
        return $scope.formConstraints.$valid && !angular.equals($scope.form, original);
      };
    }
  ]);

  app.controller('signinCtrl', [
    '$scope', function($scope) {
      var original;
      $scope.user = {
        email: '',
        password: ''
      };
      $scope.showInfoOnSubmit = false;
      original = angular.copy($scope.user);
      $scope.revert = function() {
        $scope.user = angular.copy(original);
        $scope.form_signin.$setPristine();
      };
      $scope.canRevert = function() {
        return !angular.equals($scope.user, original) || !$scope.form_signin.$pristine;
      };
      $scope.canSubmit = function() {
        return $scope.form_signin.$valid && !angular.equals($scope.user, original);
      };
      return $scope.submitForm = function() {
        $scope.showInfoOnSubmit = true;
        $scope.revert();
      };
    }
  ]);

  app.controller('signupCtrl', [
    '$scope', function($scope) {
      var original;
      $scope.user = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        age: ''
      };
      $scope.showInfoOnSubmit = false;
      original = angular.copy($scope.user);
      $scope.revert = function() {
        $scope.user = angular.copy(original);
        $scope.form_signup.$setPristine();
        // $scope.form_signup.password.$setPristine();
      };
      $scope.canRevert = function() {
        return !angular.equals($scope.user, original) || !$scope.form_signup.$pristine;
      };
      $scope.canSubmit = function() {
        return $scope.form_signup.$valid && !angular.equals($scope.user, original);
      };
      return $scope.submitForm = function() {
        $scope.showInfoOnSubmit = true;
        $scope.revert();
      };
    }
  ]);

  app.directive('validateEquals', [
    function() {
      return {
        require: 'ngModel',
        link: function(scope, ele, attrs, ngModelCtrl) {
          var validateEqual;
          validateEqual = function(value) {
            var valid;
            valid = value === scope.$eval(attrs.validateEquals);
            ngModelCtrl.$setValidity('equal', valid);
            typeof valid === 'function' ? valid({
              value: void 0
            }) : void 0;
          };
          ngModelCtrl.$parsers.push(validateEqual);
          ngModelCtrl.$formatters.push(validateEqual);
          scope.$watch(attrs.validateEquals, function(newValue, oldValue) {
            if (newValue !== oldValue) {
              ngModelCtrl.$setViewValue(ngModelCtrl.$ViewValue);
            }
          });
        }
      };
    }
  ]);

}).call(this);
