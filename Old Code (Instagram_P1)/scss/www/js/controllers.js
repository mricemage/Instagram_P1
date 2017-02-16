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

	// var user = [
	// 		{
	// 			"name": "Pham Huong",
	// 			"userprofileimage": "img/ciriwitcher3.png",
	// 			"userimage": "img/ciri_image.jpg",
	// 			"like": 230
	// 		},
	// 		{
	// 			"name": "Geralt",
	// 			"userprofileimage": "img/geraltwitcher3.png",
	// 			"userimage": "img/geralt_image.jpg",
	// 			"like": 278
	// 		},
	// 		{
	// 			"name": "bichphuongsinger",
	// 			"userprofileimage": "img/bichphuong.jpg",
	// 			"userimage": "img/bichphuong_image.jpg",
	// 			"like": 285
	// 		}
	// ];


	// $scope.user = user;

	// var hasLiked = false;

	// $scope.likeClick = function() {
	// 	if (!hasLiked) {
	// 		hasLiked = true;
			
	// 		$scope.likeCount += 1;
	// 		console.log(user[0].like);
	// 	} else {
	// 		hasLiked = false;
			
	// 		$scope.likeCount -= 1;
	// 	}
	// };
var userList=[
{"id": 1,
 "name": "Pham Huong",
 "avatar": "img/img1.jpg"},
 {"id": 2,
 "name": "Boe Pham",
 "avatar": "img/img2.jpg"},
 {"id": 3,
 "name": "Smith Wesley",
 "avatar": "img/img3.jpg"},
 {"id": 4,
 "name": "Jane Ionic",
 "avatar": "img/img4.jpg"},
 {"id": 5,
 "name": "Lasse Khoai",
 "avatar": "img/img5.jpg"},
 {"id": 6,
 "name": "Thang Minh",
 "avatar": "img/img1.jpg"}
];
$scope.posts = userList;
var imgList =[
{
	"id": 1,
	"uid":1,
	"like": 2,
	"img": "img/img1.jpg"
},
{
	"id": 2,
	"uid":3,
	"like": 1,
	"img": "img/img2.jpg"
},
{
	"id": 3,
	"uid":2,
	"like": 7,
	"img": "img/img3.jpg"
},
{
	"id": 4,
	"uid":4,
	"like": 5,
	"img": "img/img5.jpg"
},
{
	"id": 5,
	"uid":5,
	"like": 1,
	"img": "img/img5.jpg"
},
{
	"id": 6,
	"uid":6,
	"like": 3,
	"img": "img/img4.jpg"
}
];
$scope.imgList = imgList;

for(var i = 0; i < imgList.length; i++){
	for(var k = 0; k < userList.length; k++){
		if(imgList[i].uid == userList[k].id){
			$scope.posts[k].img = imgList[i].img;
			$scope.posts[k].id = imgList[i].id;
		}
		else{
			
		}
	}
}
// var commentList=[
// 	{
// 		"cmtid": 1,
// 		"imgid": 1,
// 		"uid": 5,
// 		"content": "I love your picture"
// 	},
// 	{
// 		"cmtid": 2,
// 		"imgid": 2,
// 		"uid": 4,
// 		"content": "have to log in to give a heart to ur picture. Gorgeous"
// 	},
// 	{
// 		"cmtid": 3,
// 		"imgid": 3,
// 		"uid": 6,
// 		"content": "Wonderful"
// 	},
// 	{
// 		"cmtid": 4,
// 		"imgid": 1,
// 		"uid": 4,
// 		"content": "tetetetet"
// 	}
	
// ];

}])
   
.controller('commentsCtrl', ['$scope', '$stateParams',function ($scope, $stateParams) {

var userList=[
{"id": 1,
 "name": "Pham Huong",
 "avatar": "img/img1.jpg"},
 {"id": 2,
 "name": "Boe Pham",
 "avatar": "img/img2.jpg"},
 {"id": 3,
 "name": "Smith Wesley",
 "avatar": "img/img3.jpg"},
 {"id": 4,
 "name": "Jane Ionic",
 "avatar": "img/img4.jpg"},
 {"id": 5,
 "name": "Lasse Khoai",
 "avatar": "img/img5.jpg"},
 {"id": 6,
 "name": "Thang Minh",
 "avatar": "img/img1.jpg"}
];
$scope.posts = userList;
var imgList =[
{
	"id": 1,
	"uid":1,
	"like": 2,
	"img": "img/img1.jpg"
},
{
	"id": 2,
	"uid":3,
	"like": 1,
	"img": "img/img2.jpg"
},
{
	"id": 3,
	"uid":2,
	"like": 7,
	"img": "img/img3.jpg"
},
{
	"id": 4,
	"uid":4,
	"like": 5, 
	"img": "img/img5.jpg"
},
{
	"id": 5,
	"uid":5,
	"like": 1,
	"img": "img/img5.jpg"
},
{
	"id": 6,
	"uid":6,
	"like": 3,
	"img": "img/img4.jpg"
}
];
$scope.imgList = imgList;


var commentList=[
	{
		"cmtid": 1,
		"imgid": 1,
		"uid": 5,
		"content": "I love your picture"
	},
	{
		"cmtid": 2,
		"imgid": 2,
		"uid": 4,
		"content": "have to log in to give a heart to ur picture. Gorgeous"
	},
	{
		"cmtid": 3,
		"imgid": 3,
		"uid": 6,
		"content": "Wonderful"
	},
	{
		"cmtid": 4,
		"imgid": 1,
		"uid": 4,
		"content": "tetetetet"
	}
	
];
$scope.commentList = [{
		"cmtid": "",
		"imgid": "",
		"uid": "",
		"content": ""
	},{
		"cmtid": "",
		"imgid": "",
		"uid": "",
		"content": ""
	}
	];
var dm = Number($stateParams.id);
var k =0;
for(var i = 0; i < commentList.length ; i++ ){
	if(commentList[i].imgid == dm)
	{
		$scope.commentList[k].content = commentList[i].content;
		console.log($scope.commentList[k].content);
		k++;
	}
	else{
		console.log('deo tim ra' + i);
	}
}


}])

.controller('searchCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
  $scope.userList=[
{"id": 1,
 "name": "Pham Huong",
 "avatar": "img/img1.jpg"},
 {"id": 2,
 "name": "Boe Pham",
 "avatar": "img/img2.jpg"},
 {"id": 3,
 "name": "Smith Wesley",
 "avatar": "img/img3.jpg"},
 {"id": 4,
 "name": "Jane Ionic",
 "avatar": "img/img4.jpg"},
 {"id": 5,
 "name": "Lasse Khoai",
 "avatar": "img/img5.jpg"},
 {"id": 6,
 "name": "Thang Minh",
 "avatar": "img/img1.jpg"}
];
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

}])

.controller('profileController', ['$scope', '$stateParams', function($scope,$stateParams, DataService) {
var userLists=[
{"id": 1,
 "name": "Pham Huong",
 "avatar": "img/img1.jpg"},
 {"id": 2,
 "name": "Boe Pham",
 "avatar": "img/img2.jpg"},
 {"id": 3,
 "name": "Smith Wesley",
 "avatar": "img/img3.jpg"},
 {"id": 4,
 "name": "Jane Ionic",
 "avatar": "img/img4.jpg"},
 {"id": 5,
 "name": "Lasse Khoai",
 "avatar": "img/img5.jpg"},
 {"id": 6,
 "name": "Thang Minh",
 "avatar": "img/img1.jpg"}
];
var dm = Number($stateParams.id);
console.log('dm '+ dm);
console.log(typeof dm);
console.log('user ' + typeof userLists[1].id);
$scope.userList = [];
var k = 0;
for(var i = 0; i < userLists.length ; i++ ){
	if(userLists[i].id == dm)
	{
		$scope.userList[k] = userLists[i];
		k++;
		console.log(dm);
	}
	else{
		console.log('deo tim ra' + i);
	}
}

 


}])
	.controller('pageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
