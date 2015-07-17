app
.config(function($ionicConfigProvider){
  $ionicConfigProvider.backButton.previousTitleText(false).text('');
})
.controller('PieceDetailCtrl', ['$scope', 'PieceService', '$stateParams', function($scope, PieceService, $stateParams){

  $scope.title = 'To Remember me..'
  $scope.piece = PieceService.getPiece($stateParams.pieceId);

  $scope.comments = PieceService.allSyncComments();

}]);
