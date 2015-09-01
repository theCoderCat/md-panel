(function() {
  'use strict';
  var app = angular.module('app.tables', []);

  app.controller('tableCtrl', [
    '$scope', '$filter', function($scope, $filter) {
      var init;
      $scope.stores = [
        {
          name: 'Nijiya Market',
          price: '$89',
          sales: 292,
          rating: 4.0
        }, {
          name: 'Eat On Monday Truck',
          price: '$23',
          sales: 119,
          rating: 4.3
        }, {
          name: 'Tea Era',
          price: '$23',
          sales: 874,
          rating: 4.0
        }, {
          name: 'Rogers Deli',
          price: '$54',
          sales: 347,
          rating: 4.2
        }, {
          name: 'MoBowl',
          price: '$123',
          sales: 24,
          rating: 4.6
        }, {
          name: 'The Milk Pail Market',
          price: '$31',
          sales: 543,
          rating: 4.5
        }, {
          name: 'Nob Hill Foods',
          price: '$232',
          sales: 874,
          rating: 4.0
        }, {
          name: 'Scratch',
          price: '$234',
          sales: 643,
          rating: 3.6
        }, {
          name: 'Gochi Japanese Fusion Tapas',
          price: '$98',
          sales: 56,
          rating: 4.1
        }, {
          name: 'Cost Plus World Market',
          price: '$65',
          sales: 79,
          rating: 4.0
        }, {
          name: 'Bumble Bee Health Foods',
          price: '$29',
          sales: 43,
          rating: 4.3
        }, {
          name: 'Costco',
          price: '$76',
          sales: 219,
          rating: 3.6
        }, {
          name: 'Red Rock Coffee Co',
          price: '$98',
          sales: 765,
          rating: 4.1
        }, {
          name: '99 Ranch Market',
          price: '$34',
          sales: 181,
          rating: 3.4
        }, {
          name: 'Mi Pueblo Food Center',
          price: '$12',
          sales: 78,
          rating: 4.0
        }, {
          name: 'Cucina Venti',
          price: '$74',
          sales: 163,
          rating: 3.3
        }, {
          name: 'Sufi Coffee Shop',
          price: '$54',
          sales: 113,
          rating: 3.3
        }, {
          name: 'Dana Street Roasting',
          price: '$81',
          sales: 316,
          rating: 4.1
        }, {
          name: 'Pearl Cafe',
          price: '$12',
          sales: 173,
          rating: 3.4
        }, {
          name: 'Posh Bagel',
          price: '$28',
          sales: 140,
          rating: 4.0
        }, {
          name: 'Artisan Wine Depot',
          price: '$63',
          sales: 26,
          rating: 4.1
        }, {
          name: 'Hong Kong Chinese Bakery',
          price: '$543',
          sales: 182,
          rating: 3.4
        }, {
          name: 'Starbucks',
          price: '$92',
          sales: 97,
          rating: 3.7
        }, {
          name: 'Tapioca Express',
          price: '$73',
          sales: 301,
          rating: 3.0
        }, {
          name: 'House of Bagels',
          price: '$19',
          sales: 82,
          rating: 4.4
        }
      ];
      $scope.searchKeywords = '';
      $scope.filteredStores = [];
      $scope.row = '';
      $scope.select = function(page) {
        var end, start;
        start = (page - 1) * $scope.numPerPage;
        end = start + $scope.numPerPage;
        $scope.currentPageStores = $scope.filteredStores.slice(start, end);
      };
      $scope.onFilterChange = function() {
        $scope.select(1);
        $scope.currentPage = 1;
        $scope.row = '';
      };
      $scope.onNumPerPageChange = function() {
        $scope.select(1);
        $scope.currentPage = 1;
      };
      $scope.onOrderChange = function() {
        $scope.select(1);
        $scope.currentPage = 1;
      };
      $scope.search = function() {
        $scope.filteredStores = $filter('filter')($scope.stores, $scope.searchKeywords);
        $scope.onFilterChange();
      };
      $scope.order = function(rowName) {
        if ($scope.row === rowName) {
          return;
        }
        $scope.row = rowName;
        $scope.filteredStores = $filter('orderBy')($scope.stores, rowName);
        $scope.onOrderChange();
      };
      $scope.numPerPageOpt = [3, 5, 10, 20];
      $scope.numPerPage = $scope.numPerPageOpt[2];
      $scope.currentPage = 1;
      $scope.currentPageStores = [];
      init = function() {
        $scope.search();
        return $scope.select($scope.currentPage);
      };
      return init();
    }
  ]);

  app.controller('EditableRowCtrl', function($scope, $filter, $http) {
    $scope.users = [
      {id: 1, name: 'Awesome User 1', status: 1, group: 2, groupName: 'Customer'},
      {id: 2, name: 'CHANGE MY NAME', status: undefined, group: 3, groupName: 'VIP'},
      {id: 3, name: 'Awesome User 3', status: 2, group: null},
      {id: 4, name: 'Awesome User 4', status: 4, group: 1, groupName: 'User'},
      {id: 5, name: 'Awesome User 5', status: undefined, group: 4, groupName: 'Admin'},
      {id: 6, name: 'Awesome User 6', status: 3, group: null},
      {id: 7, name: 'Awesome User 7', status: 1, group: 4, groupName: 'Admin'},
      {id: 8, name: 'Awesome User 8', status: undefined, group: 1, groupName: 'User'},
      {id: 9, name: 'Awesome User 9', status: 4, group: null},
    ];

    $scope.statuses = [
      {value: 1, text: 'Status1'},
      {value: 2, text: 'Status2'},
      {value: 3, text: 'Status3'},
      {value: 4, text: 'Status4'}
    ];

    $scope.groups = [];

    $scope.loadGroups = function() {
      var data = [
        {id: 1, text: 'User'},
        {id: 2, text: 'Customer'},
        {id: 3, text: 'Vip'},
        {id: 4, text: 'Admin'}
      ];
      $scope.groups = data;
    };

    $scope.showGroup = function(user) {
      if(user.group && $scope.groups.length) {
        var selected = $filter('filter')($scope.groups, {id: user.group});
        return selected.length ? selected[0].text : 'Not set';
      } else {
        return user.groupName || 'Not set';
      }
    };

    $scope.showStatus = function(user) {
      var selected = [];
      if(user.status) {
        selected = $filter('filter')($scope.statuses, {value: user.status});
      }
      return selected.length ? selected[0].text : 'Not set';
    };

    $scope.checkName = function(data, id) {
      if (id === 2 && data !== 'awesome') {
        return "Username 2 should be `awesome`";
      }
    };

    $scope.saveUser = function(data, id) {
      //$scope.user not updated yet
      angular.extend(data, {id: id});
      data = angular.fromJson(data);
      return [200, {status: 'ok'}];
    };

    // remove user
    $scope.removeUser = function(index) {
      $scope.users.splice(index, 1);
    };

    // add user
    $scope.addUser = function() {
      $scope.inserted = {
        id: $scope.users.length+1,
        name: '',
        status: null,
        group: null
      };
      $scope.users.push($scope.inserted);
    };
  });
}).call(this);
