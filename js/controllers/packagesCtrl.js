angular.module('devmtnTravel').controller('packagesCtrl', function($scope, mainSrv, $stateParams) {

$scope.packageInfo = mainSrv.packageInfo;

$scope.packageC = mainSrv.findbyCountry($stateParams.country)


})
