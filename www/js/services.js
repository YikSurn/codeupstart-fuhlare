angular.module('fuhlare.services', [])
.factory('User', function() {
  var o = {
    favorites: []
  }

  o.addMemberToFavorites = function(member) {
    // make sure there's a member to add
    if (!member) return false;

    // add to favorites array
    o.favorites.unshift(member);
  };

  o.removeMemberFromFavorites = function(member, index) {
    // make sure there's a member to remove
    if (!member) return false;

    // remove from favorites array
    o.favorites.splice(index, 1);
  };
  return o;
});
