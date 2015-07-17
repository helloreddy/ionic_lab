app.controller('WritePieceCtrl', ['$scope', 'PieceService', '$ionicNavBarDelegate', '$timeout', function($scope, PieceService, $ionicNavBarDelegate, $timeout){

  $scope.title = 'WritePiece';
  var pieces = PieceService.allSyncPieces();
  $scope.piece = pieces[0];

  $scope.writedPiece = "";
}]);
