angular.module('fuhlare.controllers', ['ionic', 'fuhlare.services'])

  /*
  Controller for the discover page
  */
  .controller('DiscoverCtrl', function($scope, $timeout, User) {
    $scope.members = [
      {
        "name": "Djacint",
        "tagline": "Wehhhh",
        "photo": "photo",
        "fb_url": "fb_url",
      },
      {
        "name": "Daniel",
        "tagline": "Nom nom nom",
        "photo": "photo",
        "fb_url": "fb_url",
      },
      {
        "name": "Jericho",
        "tagline": "You're alrightt.",
        "photo": "photo",
        "fb_url": "fb_url",
      }
    ];

    // Initialize current member
    $scope.currentMember = angular.copy($scope.members[0]);

    // fired when we favorite or skip a member
    $scope.sendFeedback = function(bool) {
      // first, add to favorites if they favorites
      if (bool) User.addMemberToFavorites($scope.currentMember);

      // set the variable for the correct animation sequence
      $scope.currentMember.rated = bool;
      $scope.currentMember.hide = true;

      // to allow animation to complete before changing to next member
      $timeout(function() {
        // set current member to one of three members
        var randomMember = Math.round(Math.random() * ($scope.members.length - 1));

        // update the current member in scope
        $scope.currentMember = angular.copy($scope.members[randomMember]);
      }, 250);
    };
  })

  /*
  Controller for the favorites page
  */
  .controller('FavoritesCtrl', function($scope, User) {
    // get the list of our favorites from our user service
    $scope.favorites = User.favorites;

    $scope.removeMember = function(member, index) {
      User.removeMemberFromFavorites(member, index);
    };
  })

  /*
  Controller for the tabs
  */
  .controller('TabsCtrl', function($scope) {});
