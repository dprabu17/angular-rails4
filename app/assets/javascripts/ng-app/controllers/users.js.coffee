@UserCtrl = ($scope, $resource, $http) ->
	User = $resource("/users/:id", {id: "@id"}, {update: {method: "PUT"}})
	$scope.entries = User.query()

	$scope.addEntry = ->
	  user = User.save($scope.newEntry)
	  $scope.entries.push(user)
	  $scope.newEntry = {}

	$scope.deleteUser = (idx) ->
	  user_to_delete = $scope.entries[idx];
	  User.delete(user_to_delete);
	  $scope.entries.splice(idx, 1);
	  #$http.delete("http://localhost:3000/users/"+id)
	  