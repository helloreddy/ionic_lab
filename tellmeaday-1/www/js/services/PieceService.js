app.factory('PieceService', ['$q', '$timeout', function($q, $timeout){

  var pieces = [
    {
      id : '1',
      author : 'publicgaze',
      date : 'July 05, 2015',
      img : './img/sully.png',
      content : 'Lorem ipsum dolor sit amet, amet vulputate lacus convallis class, posuere tellus ornare eget pede nec sapien, purus aliquam quisque blandit wisi. Odio blandit et dolor, cras iaculis wisi lobortis euismod, a integer faucibus, vel hendrerit tempor. Hendrerit metus, pulvinar tristique orci in neque, ligula molestie recusandae. Sit wisi, purus vehicula metus, donec vivamus donec urna leo maecenas non, integer ligula orci turpis a.'
    },
    {
      id : '2',
      author : 'publicgaze',
      date : 'July 05, 2015',
      img : './img/sully.png',
      content : 'Lorem ipsum dolor sit amet, amet vulputate lacus convallis class, posuere tellus ornare eget pede nec sapien, purus aliquam quisque blandit wisi. Odio blandit et dolor, cras iaculis wisi lobortis euismod, a integer faucibus, vel hendrerit tempor. Hendrerit metus, pulvinar tristique orci in neque, ligula molestie recusandae. Sit wisi, purus vehicula metus, donec vivamus donec urna leo maecenas non, integer ligula orci turpis a.'
    },
    {
      id : '3',
      author : 'publicgaze',
      date : 'July 05, 2015',
      img : './img/sully.png',
      content : 'Lorem ipsum dolor sit amet, amet vulputate lacus convallis class, posuere tellus ornare eget pede nec sapien, purus aliquam quisque blandit wisi. Odio blandit et dolor, cras iaculis wisi lobortis euismod, a integer faucibus, vel hendrerit tempor. Hendrerit metus, pulvinar tristique orci in neque, ligula molestie recusandae. Sit wisi, purus vehicula metus, donec vivamus donec urna leo maecenas non, integer ligula orci turpis a.'
    },
    {
      id : '4',
      author : 'publicgaze',
      date : 'July 05, 2015',
      img : './img/sully.png',
      content : 'Lorem ipsum dolor sit amet, amet vulputate lacus convallis class, posuere tellus ornare eget pede nec sapien, purus aliquam quisque blandit wisi. Odio blandit et dolor, cras iaculis wisi lobortis euismod, a integer faucibus, vel hendrerit tempor. Hendrerit metus, pulvinar tristique orci in neque, ligula molestie recusandae. Sit wisi, purus vehicula metus, donec vivamus donec urna leo maecenas non, integer ligula orci turpis a.'
    },
    {
      id : '5',
      author : 'publicgaze',
      date : 'July 05, 2015',
      img : './img/sully.png',
      content : 'Lorem ipsum dolor sit amet, amet vulputate lacus convallis class, posuere tellus ornare eget pede nec sapien, purus aliquam quisque blandit wisi. Odio blandit et dolor, cras iaculis wisi lobortis euismod, a integer faucibus, vel hendrerit tempor. Hendrerit metus, pulvinar tristique orci in neque, ligula molestie recusandae. Sit wisi, purus vehicula metus, donec vivamus donec urna leo maecenas non, integer ligula orci turpis a.'
    },
    {
      id : '6',
      author : 'publicgaze',
      date : 'July 05, 2015',
      img : './img/sully.png',
      content : 'Lorem ipsum dolor sit amet, amet vulputate lacus convallis class, posuere tellus ornare eget pede nec sapien, purus aliquam quisque blandit wisi. Odio blandit et dolor, cras iaculis wisi lobortis euismod, a integer faucibus, vel hendrerit tempor. Hendrerit metus, pulvinar tristique orci in neque, ligula molestie recusandae. Sit wisi, purus vehicula metus, donec vivamus donec urna leo maecenas non, integer ligula orci turpis a.'
    },
    {
      id : '7',
      author : 'publicgaze',
      date : 'July 05, 2015',
      img : './img/sully.png',
      content : 'Lorem ipsum dolor sit amet, amet vulputate lacus convallis class, posuere tellus ornare eget pede nec sapien, purus aliquam quisque blandit wisi. Odio blandit et dolor, cras iaculis wisi lobortis euismod, a integer faucibus, vel hendrerit tempor. Hendrerit metus, pulvinar tristique orci in neque, ligula molestie recusandae. Sit wisi, purus vehicula metus, donec vivamus donec urna leo maecenas non, integer ligula orci turpis a.'
    },
    {
      id : '8',
      author : 'publicgaze',
      date : 'July 05, 2015',
      img : './img/sully.png',
      content : 'Lorem ipsum dolor sit amet, amet vulputate lacus convallis class, posuere tellus ornare eget pede nec sapien, purus aliquam quisque blandit wisi. Odio blandit et dolor, cras iaculis wisi lobortis euismod, a integer faucibus, vel hendrerit tempor. Hendrerit metus, pulvinar tristique orci in neque, ligula molestie recusandae. Sit wisi, purus vehicula metus, donec vivamus donec urna leo maecenas non, integer ligula orci turpis a.'
    }
  ];

  var comments = [
    {
      id : '1',
      author : 'carolinavd',
      date : 'July 05, 2015',
      img : './img/sully.png',
      content : 'On the left side of your profile page.'
    },
    {
      id : '2',
      author : 'carolinavd',
      date : 'July 05, 2015',
      img : './img/sully.png',
      content : 'On the left side of your profile page.'
    },
    {
      id : '3',
      author : 'carolinavd',
      date : 'July 05, 2015',
      img : './img/sully.png',
      content : 'On the left side of your profile page.'
    },
    {
      id : '4',
      author : 'carolinavd',
      date : 'July 05, 2015',
      img : './img/sully.png',
      content : 'On the left side of your profile page.'
    },
    {
      id : '5',
      author : 'carolinavd',
      date : 'July 05, 2015',
      img : './img/sully.png',
      content : 'On the left side of your profile page.'
    }
  ];

  return {
    allPieces: function() {
      var deferred = $q.defer();
      $timeout(function() {
        deferred.resolve(pieces);
      }, 1000);
      return deferred.promise;
    },
    allSyncPieces : function() {
      return pieces;
    },
    getPiece: function(pieceId) {
      // Simple index lookup
      for(var i=0, l=pieces.length; i < l; i++) {
        if(pieces[i].id == pieceId) {
          return pieces[i];
        }
      }
    },
    allSyncComments : function() {
      return comments;
    },
  }
}]);
