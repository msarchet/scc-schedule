(function(){
  angular.module('app',['ngRoute'])
    .config(['$routeProvider', function($rp){
      $rp.otherwise({
        templateUrl: 'views/sessions.html',
        controller: 'SessionsCtrl',
        controllerAs: 'sc'
      });
    }]);
}());
