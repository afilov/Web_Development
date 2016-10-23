(function (angular) {
  'use strict';

  angular.module('wp-angular-starter').controller('StudentController', StudentController);

  StudentController.$inject = ['$log', 'GroupService', 'StudentService', '$scope'];

  /* @ngInject */

  function StudentController($log, GroupService, StudentService, scope) {
    var vm = this;
    vm.title = 'Student';
    vm.save = save;
    vm.filterFunction = filterFunction;
    vm.searchText = "";
    vm.clear = clear;
    vm.edit = edit;
    vm.remove = remove;
    vm.searchText = "";
    vm.entity = {};
    vm.entities = [];
    vm.groups = [];
    vm.saveOkMsg = null;
    vm.saveErrMsg = null;
    loadGroups();
    loadStudents();

    function loadGroups() {
      GroupService.getAll().then(function (data) {
        vm.groups = data;
      });
    }

    function filterFunction(obj) {
      return obj.index.indexOf(vm.searchText) > -1;
    }


    function save() {
      vm.saveOkMsg = null;
      vm.saveErrMsg = null;

      var promise = StudentService.save(vm.entity);
      promise.then(successCallback, errorCallback);
      function successCallback(data) {
        loadStudents();
        vm.saveOkMsg = "Student with id " + data.id + " is saved";
        clear();
      }

      function errorCallback(data) {
        vm.saveErrMsg = "Saving error occurred: " + data.message;
      }
    }

    function clear() {
      vm.entity = {};
    }

    function loadStudents() {
      vm.entities = [];
      StudentService.getAll().then(function (data) {
        vm.entities = data;
      });
    };

    function edit(entity) {
      vm.entity = {};
      angular.extend(vm.entity, entity);
    }

    function remove(entity) {
      StudentService
        .remove(entity)
        .then(function () {
          loadStudents();
        });
    }
  }

})(angular);

