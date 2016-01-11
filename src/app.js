var app = angular.module("App", ['ngRoute']);


app
    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/home', {
                    templateUrl: 'layout/home/home.html',
                    controller: 'HomeController'
                }).
                when('/view2', {
                    templateUrl: 'layout/view2/view2.html',
                    controller: 'View2Controller'
                }).
                otherwise({
                    redirectTo: '/home'
                });
        }
    ])



