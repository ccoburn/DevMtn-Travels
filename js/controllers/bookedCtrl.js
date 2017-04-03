angular.module('devmtnTravel').controller('bookedCtrl', function($scope, mainSrv, $stateParams) {

$scope.packageInfo = mainSrv.packageInfo;

$scope.current = mainSrv.findByID($stateParams.id)

})
