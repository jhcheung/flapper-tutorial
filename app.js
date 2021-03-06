var app = angular.module('flapperNews', []);

app.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.test = 'Hello world!';
  $scope.posts = [
    {title: 'post 1', upvotes: 3},
    {title: 'post 2', upvotes: 2},
    {title: 'post 3', upvotes: 1},
  ]
  $scope.addPost = function(){
    if(!$scope.title || $scope.title === '') { return; }
    $scope.posts.push({title: $scope.title, upvotes: 0});
    $scope.title = '';
  };  
  $scope.incrementUpvotes = function(post) {
    post.upvotes += 1;
  };
}]);