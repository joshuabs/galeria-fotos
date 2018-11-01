angular.module('fotosgaleria', ['minhasDiretivas','ngAnimate','ngRoute'])
    .config(function($routeProvider, $locationProvider){

    $locationProvider.html5Mode(true);

    $routeProvider.when('/fotos', {
        templateUrl: 'partials/principal.html',
        controller: 'FotosController'
    });

    $routeProvider.when('/fotos/new', {
        templateUrl: 'partials/foto.html',
        controller: 'NewFotoController'
    });

    $routeProvider.when('/fotos/editar/:idFoto', {
        templateUrl: 'partials/foto.html',
        controller: 'NewFotoController'
    });

    $routeProvider.otherwise({redirectTo: '/fotos'});
});
