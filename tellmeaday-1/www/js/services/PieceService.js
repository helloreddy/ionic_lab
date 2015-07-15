app.factory('PieceService', ['$q', '$timeout', function($q, $timeout){

  var pieces = [
    {
      id : '1',
      author : 'publicgaze',
      date : 'July 05, 2015',
      img : './img/mcfly.jpg',
      content : 'Lorem ipsum dolor sit amet, amet vulputate lacus convallis class, posuere tellus ornare eget pede nec sapien, purus aliquam quisque blandit wisi. Odio blandit et dolor, cras iaculis wisi lobortis euismod, a integer faucibus, vel hendrerit tempor. Hendrerit metus, pulvinar tristique orci in neque, ligula molestie recusandae. Sit wisi, purus vehicula metus, donec vivamus donec urna leo maecenas non, integer ligula orci turpis a.'
    },
    {
      id : '2',
      author : 'publicgaze',
      date : 'July 05, 2015',
      img : './img/mcfly.jpg',
      content : 'Lorem ipsum dolor sit amet, amet vulputate lacus convallis class, posuere tellus ornare eget pede nec sapien, purus aliquam quisque blandit wisi. Odio blandit et dolor, cras iaculis wisi lobortis euismod, a integer faucibus, vel hendrerit tempor. Hendrerit metus, pulvinar tristique orci in neque, ligula molestie recusandae. Sit wisi, purus vehicula metus, donec vivamus donec urna leo maecenas non, integer ligula orci turpis a.'
    },
    {
      id : '3',
      author : 'publicgaze',
      date : 'July 05, 2015',
      img : './img/mcfly.jpg',
      content : 'Lorem ipsum dolor sit amet, amet vulputate lacus convallis class, posuere tellus ornare eget pede nec sapien, purus aliquam quisque blandit wisi. Odio blandit et dolor, cras iaculis wisi lobortis euismod, a integer faucibus, vel hendrerit tempor. Hendrerit metus, pulvinar tristique orci in neque, ligula molestie recusandae. Sit wisi, purus vehicula metus, donec vivamus donec urna leo maecenas non, integer ligula orci turpis a.'
    },
    {
      id : '4',
      author : 'publicgaze',
      date : 'July 05, 2015',
      img : './img/mcfly.jpg',
      content : 'Lorem ipsum dolor sit amet, amet vulputate lacus convallis class, posuere tellus ornare eget pede nec sapien, purus aliquam quisque blandit wisi. Odio blandit et dolor, cras iaculis wisi lobortis euismod, a integer faucibus, vel hendrerit tempor. Hendrerit metus, pulvinar tristique orci in neque, ligula molestie recusandae. Sit wisi, purus vehicula metus, donec vivamus donec urna leo maecenas non, integer ligula orci turpis a.'
    },
    {
      id : '5',
      author : 'publicgaze',
      date : 'July 05, 2015',
      img : './img/mcfly.jpg',
      content : 'Lorem ipsum dolor sit amet, amet vulputate lacus convallis class, posuere tellus ornare eget pede nec sapien, purus aliquam quisque blandit wisi. Odio blandit et dolor, cras iaculis wisi lobortis euismod, a integer faucibus, vel hendrerit tempor. Hendrerit metus, pulvinar tristique orci in neque, ligula molestie recusandae. Sit wisi, purus vehicula metus, donec vivamus donec urna leo maecenas non, integer ligula orci turpis a.'
    },
    {
      id : '6',
      author : 'publicgaze',
      date : 'July 05, 2015',
      img : './img/mcfly.jpg',
      content : 'Lorem ipsum dolor sit amet, amet vulputate lacus convallis class, posuere tellus ornare eget pede nec sapien, purus aliquam quisque blandit wisi. Odio blandit et dolor, cras iaculis wisi lobortis euismod, a integer faucibus, vel hendrerit tempor. Hendrerit metus, pulvinar tristique orci in neque, ligula molestie recusandae. Sit wisi, purus vehicula metus, donec vivamus donec urna leo maecenas non, integer ligula orci turpis a.'
    },
    {
      id : '7',
      author : 'publicgaze',
      date : 'July 05, 2015',
      img : './img/mcfly.jpg',
      content : 'Lorem ipsum dolor sit amet, amet vulputate lacus convallis class, posuere tellus ornare eget pede nec sapien, purus aliquam quisque blandit wisi. Odio blandit et dolor, cras iaculis wisi lobortis euismod, a integer faucibus, vel hendrerit tempor. Hendrerit metus, pulvinar tristique orci in neque, ligula molestie recusandae. Sit wisi, purus vehicula metus, donec vivamus donec urna leo maecenas non, integer ligula orci turpis a.'
    },
    {
      id : '8',
      author : 'publicgaze',
      date : 'July 05, 2015',
      img : './img/mcfly.jpg',
      content : 'Lorem ipsum dolor sit amet, amet vulputate lacus convallis class, posuere tellus ornare eget pede nec sapien, purus aliquam quisque blandit wisi. Odio blandit et dolor, cras iaculis wisi lobortis euismod, a integer faucibus, vel hendrerit tempor. Hendrerit metus, pulvinar tristique orci in neque, ligula molestie recusandae. Sit wisi, purus vehicula metus, donec vivamus donec urna leo maecenas non, integer ligula orci turpis a.'
    }
  ];

  return {
    all: function() {
      var deferred = $q.defer();
      $timeout(function() {
        deferred.resolve(pieces);
      }, 1000);
      return deferred.promise;
    },
    allSync : function() {
      return pieces;
    },
    get: function(pieceId) {
      // Simple index lookup
      for(var i=0, l=pieces.length; i < l; i++) {
        if(pieces[i].id == pieceId) {
          return pieces[i];
        }
      }
    }
  }
}]);
