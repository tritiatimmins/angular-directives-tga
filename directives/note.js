//note will be a part of the note list
angular.module('notebook.directives')

  .directive('myNote', function() {
    
    return {
      template: '<div>Note {{::index}} {{::note.message}}</div>',
      scope: {
        note: '=',
        index: '=', 
      },
      //always has the same arguments in the same order
      link: function(scope, elem, attrs) {
        elem.on('click', function(event) {
          if (scope.index === 1) {
          //can have jQuery in here
          elem.css({color: 'rgb(255, 0, 0)'});
          }
          scope.$emit('note:clicked');
        });
      },
    };
});