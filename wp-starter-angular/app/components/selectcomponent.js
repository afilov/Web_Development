(function (angular) {
  'use strict';
  angular.module('wp-angular-starter').component('groupSelect', {
    templateUrl: 'app/components/selectcomponentview.html',
    controller: function WpInputController(GroupService) {
      var vm = this;
      vm.entities = [];
      GroupService.getAll().then(function (data) {
        vm.entities = data;
      });
    },
    bindings: {
      wpLabel: '@',
      wpModel: '=',
      wpPlaceHolder:'@',
      wpRequired:'@'
    }
  });
})(angular);
