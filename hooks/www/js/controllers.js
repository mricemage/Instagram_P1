


	angular.module('app.controllers', [])
  
	.controller('cameraCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
      
	.controller('homeCtrl', ['$scope', '$stateParams',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

	var user = [
			{
				"name": "Cirilla",
				"userprofileimage": "img/ciriwitcher3.png",
				"userimage": "img/ciri_image.jpg",
				"like": 230
			},
			{
				"name": "Geralt",
				"userprofileimage": "img/geraltwitcher3.png",
				"userimage": "img/geralt_image.jpg",
				"like": 278
			},
			{
				"name": "bichphuongsinger",
				"userprofileimage": "img/bichphuong.jpg",
				"userimage": "img/bichphuong_image.jpg",
				"like": 285
			}
	];

	$scope.user = user;

	var hasLiked = false;

	$scope.likeClick = function() {
		if (!hasLiked) {
			hasLiked = true;
			
			$scope.likeCount += 1;
			console.log(user[0].like);
		} else {
			hasLiked = false;
			
			$scope.likeCount -= 1;
		}
	};


}])
   
.controller('searchCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
 var userList = JSON.parse(localStorage.getItem("userList"));
  $scope.userList = userList;
}])

//    .controller('profileCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// // You can include any angular dependencies as parameters for this function
// // TIP: Access Route Parameters for your page via $stateParams.parameterName
// function ($scope, $stateParams) {
// var storedNames = JSON.parse(localStorage.getItem("userList"));
// $scope.userList = storedNames;
// console.log(storedNames);

//    }])

.controller('profileCtrl', ['$scope', '$stateParams', 
function ($scope, $stateParams) {
var userList = JSON.parse(localStorage.getItem("userList"));
  $scope.userList = userList[0];
}])

.controller('profileController', ['$scope', '$stateParams', function($scope,$stateParams, DataService) {
var storedNames = JSON.parse(localStorage.getItem("userList"));
var dm = $stateParams.id;
$scope.userList = [];
var k = 0;
for(var i = 0; i < storedNames.length ; i++ ){
	if(storedNames[i].id == dm)
	{
		$scope.userList[k] = storedNames[i];
		k++;
		console.log(dm);
	}
	else{
		console.log('true');
	}
}

 


}])
	.controller('pageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
