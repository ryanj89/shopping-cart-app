(function() {
  'use strict';

  angular.module('app')
    .component('itemList', {
      template: '<h1>Welcome to MEAN Tea</h1>',
      controller: controller
    });

    function controller() {
      const vm = this;
    };
})();