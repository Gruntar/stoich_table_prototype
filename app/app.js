
angular.module('protoTable', ['ui.router', 'xeditable', 'ui.bootstrap'])

.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider

            .state('home', {
                url: '/',
                templateUrl: 'components/main.html',
                controller: 'mainController'
            });

    }]);

