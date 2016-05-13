angular.module('TestMe', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/addContact', {
                templateUrl: 'templates/newContact.html',
                controller: 'NewContactCtrl'
            })
            .when('/editContactDetails', {
                templateUrl: 'templates/edit_contact.html',
                controller: 'EditContactCtrl'
            })
            .when('/home', {
                templateUrl: 'templates/Home.html',
                controller: 'HomeCtrl'
            })
            .otherwise({redirectTo: '/home'});
    }]).controller('HomeCtrl', function ($scope, $rootScope, $http, $location) {
        $scope.deleteDirectory = function (index) {
            $http.delete('/api/contacts/' + index).success(function (data, res) {
                $scope.refresh = function () {
                    $http.get('/api/contacts').success(function (res) {
                        $rootScope.userDetails = res;
                    });
                };
                $scope.refresh();
            }).error(function (res) {
                console.log("error", res)
            });
        };
        $scope.editDetails = function (index) {
            $location.path('/editContactDetails').search({id: index});
        };

        $http.get('/api/contacts').success(function (res) {
            $rootScope.userDetails = res;
        });

        $scope.addContact = function () {
            $location.path('/addContact');
        };

    }).controller('NewContactCtrl', function ($scope, $rootScope, $http, $location) {
        $scope.saveData = function () {
            $scope.form_submit = true;
            if (($scope.firstName != null && $scope.firstName != undefined) && ($scope.lastName != null && $scope.lastName != undefined) && ($scope.email != null && $scope.email != undefined)) {
                $http.post('/api/contacts/', {
                    firstName: $scope.firstName,
                    lastName: $scope.lastName,
                    email: $scope.email
                }).success(function (data, res) {
                    $location.path('/home');
                });
            }


        };
        $scope.goToHome = function () {
            $location.path('/home');
        }
    }).controller('EditContactCtrl', function ($scope, $rootScope, $http, $location, $routeParams) {
        $http.get('/api/contacts/' + $routeParams.id).success(function (res) {
            $scope.userData = res;
        });

        $scope.updateData = function (userData) {
            if ((userData.firstName != null && userData.firstName != undefined) && (userData.lastName != null && userData.lastName != undefined) && (userData.email != null && userData.email != undefined)) {
                $http.put('/api/contacts/', userData).success(function (req, res) {
                    $location.path('/home');
                });

            }
        };
        $scope.goToHome = function () {
            $location.path('/home');
        };
        /*$http({
         method: "put",
         url: "/api/contacts/",
         data: data
         }).success(function (resp) {
         console.log("success", resp);
         })
         .error(function () {
         console.log("error");
         });*/
        // });

    });
