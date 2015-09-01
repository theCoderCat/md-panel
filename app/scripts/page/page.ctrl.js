(function() {
  'use strict';
  var app = angular.module('app.page.ctrls', []);
  
  app.controller('invoiceCtrl', [
    '$scope', '$window', function($scope, $window) {
      $scope.printInvoice = function() {
        var originalContents, popupWin, printContents;
        printContents = document.getElementById('invoice').innerHTML;
        originalContents = document.body.innerHTML;
        popupWin = window.open();
        popupWin.document.open();
        popupWin.document.write('<html><head><link rel="stylesheet" type="text/css" href="styles/main.css" /></head><body onload="window.print()">' + printContents + '</html>');
        return popupWin.document.close();
      };
    }
  ]);

  app.controller('mailCtrl', [
    '$scope', '$location', function($scope, $location) {
      $scope.viewMail = function() {
        $location.path('/mail/single');
      }
    }
  ]);

}).call(this);
