app
    .controller('View2Controller', ['$scope', '$location','$rootScope', function($scope, $location,$rootScope) {

        //try to get on rootscope
        $scope.newsSelected = $rootScope.newsSelected;

        //try to get on storage
        if($scope.newsSelected === undefined)
            $scope.newsSelected = localStorage.getItem("newsSelected");

        //fallback - in case of failure
        if($scope.newsSelected === undefined || $scope.newsSelected === null)
            $location.path('/home');


    }]);