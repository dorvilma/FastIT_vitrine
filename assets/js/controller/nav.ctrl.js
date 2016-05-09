myApp.controller('navCtrl',function($http){
console.log('ok')
  $http.get("/Contact")
   .then(function(response) {
   });

});
