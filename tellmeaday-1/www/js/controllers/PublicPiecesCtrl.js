app.controller('PublicPiecesCtrl', ['$scope', 'PieceService', '$timeout', function($scope, PieceService, $timeout){

  $scope.pieces = [];
  $scope.pieces = PieceService.allSync();

  $scope.loadMore = function() {
    console.log('Loading more!');
    $timeout(function(){
      $scope.pieces.push({
        id : '1',
        author : 'Mido Lee',
        date : 'July 05, 2015',
        img : './img/mcfly.jpg',
        content : 'Lorem ipsum dolor sit amet, amet vulputate lacus convallis class, posuere tellus ornare eget pede nec sapien, purus aliquam quisque blandit wisi. Odio blandit et dolor, cras iaculis wisi lobortis euismod, a integer faucibus, vel hendrerit tempor. Hendrerit metus, pulvinar tristique orci in neque, ligula molestie recusandae. Sit wisi, purus vehicula metus, donec vivamus donec urna leo maecenas non, integer ligula orci turpis a.'
      });

      $scope.$broadcast('scroll.infiniteScrollComplete');
      $scope.$broadcast('scroll.resize');
      $scope.$broadcast('scroll.resize')
    }, 1000);

  };

}]);
