(function(app){
  
  var SessionsController = function($http){
    var self = this;

    this.times = [];
    this.sessions = [];

    $http.get('sessions.json').success(function(data){
      self.data = data;
      self.times = data.times;
    });
    
  };

  SessionsController.prototype.onTimeChange = function(x){
    var idx = this.times.indexOf(x);
    var self = this;
    self.sessions.length = 0;

    self.data.sessions[idx].forEach(function(s) { self.sessions.push(s); });
  };

  app.controller('SessionsCtrl', ['$http', SessionsController]);
}(angular.module('app')));
