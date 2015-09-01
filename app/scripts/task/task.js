(function() {
  'use strict';
  var app = angular.module('app.task', []);

  app.factory('taskStorage', function() {
    var DEMO_TASKS, STORAGE_ID;
    STORAGE_ID = 'tasks_storage';
    DEMO_TASKS = '[ {"title": "Finish MDPanel", "completed": true}, {"title": "Free swing x100", "completed": false}, {"title": "Call mom", "completed": true}, {"title": "Hangout with Stormy", "completed": false}, {"title": "Watch F&F7", "completed": false}, {"title": "Finish Fire Emblem Awakening", "completed": true}, {"title": "Take a look at Materialize", "completed": false}, {"title": "Shopping for dinner", "completed": false} ]';
    return {
      get: function() {
        return JSON.parse(localStorage.getItem(STORAGE_ID) || DEMO_TASKS);
      },
      put: function(tasks) {
        return localStorage.setItem(STORAGE_ID, JSON.stringify(tasks));
      }
    };
  });

  app.directive('taskFocus', [
    '$timeout', function($timeout) {
      return {
        link: function(scope, ele, attrs) {
          return scope.$watch(attrs.taskFocus, function(newVal) {
            if (newVal) {
              return $timeout(function() {
                return ele[0].focus();
              }, 0, false);
            }
          });
        }
      };
    }
  ]);

  app.controller('taskCtrl', [
    '$scope', 'taskStorage', 'filterFilter', '$rootScope', 'logger', function($scope, taskStorage, filterFilter, $rootScope, logger) {
      var tasks;
      tasks = $scope.tasks = taskStorage.get();
      $scope.newTask = '';
      $scope.remainingCount = filterFilter(tasks, {
        completed: false
      }).length;
      $scope.editedTask = null;
      $scope.statusFilter = {
        completed: false
      };
      $scope.filter = function(filter) {
        switch (filter) {
          case 'all':
          return $scope.statusFilter = '';
          case 'active':
          return $scope.statusFilter = {
            completed: false
          };
          case 'completed':
          return $scope.statusFilter = {
            completed: true
          };
        }
      };
      $scope.add = function() {
        var newTask;
        newTask = $scope.newTask.trim();
        if (newTask.length === 0) {
          return;
        }
        tasks.push({
          title: newTask,
          completed: false
        });
        logger.logSuccess('New task: "' + newTask + '" added');
        taskStorage.put(tasks);
        $scope.newTask = '';
        return $scope.remainingCount++;
      };
      $scope.edit = function(task) {
        return $scope.editedTask = task;
      };
      $scope.doneEditing = function(task) {
        $scope.editedTask = null;
        task.title = task.title.trim();
        if (!task.title) {
          $scope.remove(task);
        } else {
          logger.log('Task updated');
        }
        return taskStorage.put(tasks);
      };
      $scope.remove = function(task) {
        var index;
        $scope.remainingCount -= task.completed ? 0 : 1;
        index = $scope.tasks.indexOf(task);
        $scope.tasks.splice(index, 1);
        taskStorage.put(tasks);
        return logger.logError('Task removed');
      };
      $scope.completed = function(task) {
        $scope.remainingCount += task.completed ? -1 : 1;
        taskStorage.put(tasks);
        if (task.completed) {
          if ($scope.remainingCount > 0) {
            if ($scope.remainingCount === 1) {
              return logger.log('Awesome! Only ' + $scope.remainingCount + ' task left');
            } else {
              return logger.log('Well done! Only ' + $scope.remainingCount + ' tasks left');
            }
          } else {
            return logger.logSuccess('Congratulations! All done :)');
          }
        }
      };
      $scope.clearCompleted = function() {
        $scope.tasks = tasks = tasks.filter(function(val) {
          return !val.completed;
        });
        return taskStorage.put(tasks);
      };
      $scope.markAll = function(completed) {
        tasks.forEach(function(task) {
          return task.completed = completed;
        });
        $scope.remainingCount = completed ? 0 : tasks.length;
        taskStorage.put(tasks);
        if (completed) {
          return logger.logSuccess('Congrats! All done :)');
        }
      };
      $scope.$watch('remainingCount == 0', function(val) {
        return $scope.allChecked = val;
      });
      return $scope.$watch('remainingCount', function(newVal, oldVal) {
        return $rootScope.$broadcast('taskRemaining:changed', newVal);
      });
    }
  ]);

}).call(this);
