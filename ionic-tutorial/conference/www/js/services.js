angular.module('starter.services', ['ngResource'])

.factory('Sessions', function ($resource) {
    return $resource('http://co.devdev.kr:5000/sessions');
})

.factory('Session', function ($resource) {
    return $resource('http://co.devdev.kr:5000/sessions/:sessionId');
});
