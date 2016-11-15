(function (angular) {
  'use strict';
  angular.module('wp-angular-starter').component('wpInput', {
    templateUrl: 'app/components/componentview.html',
    controller: function WpInputController() {
    },
    bindings: {
      wpLabel: '@',
      wpModel: '=',
      wpFocus: '@',
      wpType:'@',
      wpRequired:'@'
    }
  });
})(angular);
