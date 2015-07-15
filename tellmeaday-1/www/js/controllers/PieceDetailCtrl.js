app.controller('PieceDetailCtrl', ['$scope', 'PieceService', '$stateParams',
  '$ionicNavBarDelegate', function($scope, PieceService, $stateParams, $ionicNavBarDelegate){

  $scope.title = 'To Remember me..'
  $scope.piece = PieceService.get($stateParams.pieceId);

}]);
