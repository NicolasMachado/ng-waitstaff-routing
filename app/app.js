angular.module('myApp', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider){
      $routeProvider.when('/', {
          templateUrl : 'home.html'
      }).when('/my-earnings', {
          templateUrl : 'my-earnings.html'
      }).when('/new-meal', {
          templateUrl : 'new-meal.html'
      });
  }])
  .run(function($rootScope) {
    const vm = $rootScope;
      vm.submit = function() {
        if (!$rootScope.mdBaseMealPrice) {
          return
        }
        vm.ccSubTotal = 0;
        vm.ccTip = 0;
        vm.ccSubTotal = vm.mdBaseMealPrice + (vm.mdBaseMealPrice*vm.mdTaxRate/100);
        vm.ccTip = vm.mdBaseMealPrice*vm.mdTipPercentage/100;

        vm.eiTipTotal += vm.ccTip;
        vm.eiMealCount ++;
        vm.mdBaseMealPrice = null;
      }

      vm.init = function() {
        vm.ccSubTotal = 0;
        vm.ccTip = 0;

        vm.eiTipTotal = 0;
        vm.eiMealCount = 0;

        vm.mdBaseMealPrice = null;
        vm.mdTaxRate = 20;
        vm.mdTipPercentage = 15;
      }
      vm.init();
  });
