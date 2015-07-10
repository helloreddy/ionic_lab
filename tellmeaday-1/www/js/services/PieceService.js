angular.module('tellmeaday', ['ionic'])

.factory('PieceService', function($q, $timeout){

  var pieces = [
    {
      author : 'Marty McFly',
      date : 'July 05, 2015',
      img : './img/mcfly.jpg',
      content : '
      This is a "Facebook" styled Card. The header is created from a Thumbnail List item,
      the content is from a card-body consisting of an image and paragraph text. The footer
      consists of tabs, icons aligned left, within the card-footer.
      '
    },
    {
      author : 'Marty McFly',
      date : 'July 05, 2015',
      img : './img/mcfly.jpg',
      content : '
      This is a "Facebook" styled Card. The header is created from a Thumbnail List item,
      the content is from a card-body consisting of an image and paragraph text. The footer
      consists of tabs, icons aligned left, within the card-footer.
      '
    },
    {
      author : 'Marty McFly',
      date : 'July 05, 2015',
      img : './img/mcfly.jpg',
      content : '
      This is a "Facebook" styled Card. The header is created from a Thumbnail List item,
      the content is from a card-body consisting of an image and paragraph text. The footer
      consists of tabs, icons aligned left, within the card-footer.
      '
    },
    {
      author : 'Marty McFly',
      date : 'July 05, 2015',
      img : './img/mcfly.jpg',
      content : '
      This is a "Facebook" styled Card. The header is created from a Thumbnail List item,
      the content is from a card-body consisting of an image and paragraph text. The footer
      consists of tabs, icons aligned left, within the card-footer.
      '
    },
    {
      author : 'Marty McFly',
      date : 'July 05, 2015',
      img : './img/mcfly.jpg',
      content : '
      This is a "Facebook" styled Card. The header is created from a Thumbnail List item,
      the content is from a card-body consisting of an image and paragraph text. The footer
      consists of tabs, icons aligned left, within the card-footer.
      '
    },
    {
      author : 'Marty McFly',
      date : 'July 05, 2015',
      img : './img/mcfly.jpg',
      content : '
      This is a "Facebook" styled Card. The header is created from a Thumbnail List item,
      the content is from a card-body consisting of an image and paragraph text. The footer
      consists of tabs, icons aligned left, within the card-footer.
      '
    },
    {
      author : 'Marty McFly',
      date : 'July 05, 2015',
      img : './img/mcfly.jpg',
      content : '
      This is a "Facebook" styled Card. The header is created from a Thumbnail List item,
      the content is from a card-body consisting of an image and paragraph text. The footer
      consists of tabs, icons aligned left, within the card-footer.
      '
    },
    {
      author : 'Marty McFly',
      date : 'July 05, 2015',
      img : './img/mcfly.jpg',
      content : '
      This is a "Facebook" styled Card. The header is created from a Thumbnail List item,
      the content is from a card-body consisting of an image and paragraph text. The footer
      consists of tabs, icons aligned left, within the card-footer.
      '
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
});
