app.controller('FriendsPiecesCtrl', ['$scope', 'PieceService', '$timeout', function($scope, PieceService, $timeout){

  $scope.pieces = PieceService.allSyncPieces();

}]);
