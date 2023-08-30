angular.module('app').factory('ConfigService', [function() {

    var service = {};

    //service.apiBase = 'http://localhost:8001/';
    service.apiBase = "http://quiz-api-xyz.eu-north-1.elasticbeanstalk.com/";

    return service;
}]);