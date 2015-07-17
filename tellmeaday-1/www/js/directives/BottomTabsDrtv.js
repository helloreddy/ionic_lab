app.directive('active', function() {
    return {
        link: function(scope, element, attrs) {
            element.bind('click', function() {
                //Remove the active from all the child elements
                element.parent().children().removeClass('active');

                //Add active class to the clicked buttong
                element.toggleClass('active');
            })
        },
    }
});
