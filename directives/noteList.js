angular.module('notebook.directives', ['NoteService'])

  .directive('noteList', function() {

    return {
      template: '<div>Times Clicked: {{numberClicked}}<my-note index="$index" note="::note" ng-repeat="note in notes"></my-note>',
      scope: {},
      controller: function($scope, NoteFactory) {
        $scope.numberClicked = 0;

        $scope.notes = NoteFactory.getNotes(10);
        $scope.$on('note:clicked', function() {
          $scope.numberClicked ++;
          $scope.$apply(); //kicks off the digest cycle and updates numberClicked
          console.log('note list heard clicked');
        });
      },
    };

  });

// :: = single time bind