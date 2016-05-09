myApp.controller('new_actu_list' , function($scope,$http){

  $http.get('/actualites').then(function(result){
    $scope.arrayListActu  = result.data;
 });

});
