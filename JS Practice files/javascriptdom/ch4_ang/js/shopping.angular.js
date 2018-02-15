var myApp = angular.module("myShoppingApp",[]);

<<<<<<< HEAD
myApp.directive("mylist", function () {
  
  return {
    scope: true,
    restrict: 'E',
    //template: '<ol><li>Milk</li><li>Cheese</li><li>Eggs</li></ol>',
    templateUrl: 'list.html',
    replace: false,
    transclude:false
  }  
})
=======

>>>>>>> 01fcebcf69308ab6c89e901891d4e3177084065f



myApp.controller("MainController", function($scope) {
  $scope.items = [
    {name:'Milk', checked:true},
    {name:'Eggs', checked:false},
    {name:'Cheese', checked:false},
    {name:'Bread', checked:false}];
    
  $scope.newItem = '';
 
  $scope.addItemToList = function() {
  	if ($scope.newItem.trim() != '') {
    	$scope.items.push(
    		{name:$scope.newItem, checked:false});
    	$scope.newItem = '';
    }
  };
    
    $scope.removeItem = function(index) {
        $scope.items.splice(index, 1);
  };
 
});

