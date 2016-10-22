(function (angular) {
  'use strict';

  angular.module('wp-angular-starter').controller('GroupController', GroupController);

  GroupController.$inject = ['$log', 'GroupService'];

  /* @ngInject */

  function GroupController($log, GroupService) {
    var vm = this;
    vm.title = 'Group';
    vm.save = save;
    vm.propertyName = 'name';
    vm.reverse = false;
    vm.filterFunction = filterFunction;
    vm.setOrder = setOrder;
    vm.clear = clear;
    vm.edit = edit;
    vm.remove = remove;
    vm.searchText = "";
    vm.entity = {};
    vm.entities = [];
    vm.saveOkMsg = null;
    vm.saveErrMsg = null;
    vm.availableSizes = [20, 40];
    loadGroups();

    function loadGroups() {
      GroupService.getAll().then(function (data) {
        vm.entities = data;
      });
    }

    function filterFunction(obj) {
      return obj.name.toLowerCase().indexOf(vm.searchText.toLowerCase()) > -1;
    }

    function setOrder(field) {
      if (field == vm.propertyName){
        vm.reverse = !vm.reverse;
      }
      else {
        vm.propertyName = field;
      }
    }

    function save() {
      vm.saveOkMsg = null;
      vm.saveErrMsg = null;

      var promise = GroupService.save(vm.entity);
      promise.then(successCallback, errorCallback);
      function successCallback(data) {
        loadGroups();
        vm.saveOkMsg = "Group with id " + data.id + " is saved";
        clear();
      }

      function errorCallback(data) {
        vm.saveErrMsg = "Saving error occurred: " + data.message;
      }
    }

    function clear() {
      vm.entity = {};
    }

    function edit(entity) {
      vm.entity = {};
      angular.extend(vm.entity, entity);
    }

    function remove(entity) {
      GroupService
        .remove(entity)
        .then(function () {
          loadGroups();
        });
    }
  }

})(angular);

