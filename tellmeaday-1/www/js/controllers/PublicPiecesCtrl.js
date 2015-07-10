angular.module('tellmeaday', ['ionic', 'PieceService'])

.controller('PublicPiecesCtrl', function($scope, PieceService, $timeout){

  $scope.pieces = [];
  $scope.pieces = PieceService.allSync();

  $scope.loadMore = function() {
    console.log('Loading more!');
    $timeout(function(){
      $scope.pieces.push({
        author : 'Mido Lee',
        date : 'July 05, 2015',
        img : './img/mcfly.jpg',
        content : '
        This is a "Facebook" styled Card. The header is created from a Thumbnail List item,
        the content is from a card-body consisting of an image and paragraph text. The footer
        consists of tabs, icons aligned left, within the card-footer.
        '
      });

      $scope.$broadcast('scroll.infiniteScrollComplete');
      $scope.$broadcast('scroll.resize');
      $scope.$broadcast('scroll.resize')
    }, 1000);

  }

});
