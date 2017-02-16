 
    angular.module('app.cameraCtrl',['ionic', 'ngCordova'])

    .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if(window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
  });
})
    
 .controller("cameraCtrl", function($scope, $rootScope, $cordovaCamera, $ionicPlatform, $cordovaFileTransfer, $http, $state, Personal) {
    var profile = Personal;
    $scope.takePhoto = function()
    {
        var options =  {
            quality: 100,
            destinationType: Camera.DestinationType.FILE_URI,            
            sourceType: Camera.PictureSourceType.CAMERA,
            encodingType: Camera.EncodingType.JPEG,
            mediaType: Camera.MediaType.PICTURE,
            saveToPhotoAlbum: false             
        };

        $ionicPlatform.ready(function() {
            $cordovaCamera.getPicture(options).then(function(imageData) {
                $rootScope.picture = imageData;
            }, function(err) {
                  // error
            });
        });
    }
    $scope.choosePhoto = function () {
        var options = {
            quality: 100,
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM,
            encodingType: Camera.EncodingType.JPEG,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false
        };

        $cordovaCamera.getPicture(options).then(function (imageData) {
            $rootScope.picture = imageData;
        }, function (err) {
            // An error occured. Show a message to the user
        });
    }
    $scope.confirmPost = function() {
        $state.go('tabsController.post-confirm');
    }
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) { //
    viewData.enableBack = true;									  // Use it to display the "back" button
});	
})

.controller('PostConfirmCtrl', ['$scope', 'DataService', 'Personal', '$rootScope', '$state', '$q', 'DataServices', function($scope, DataService, Personal, $rootScope, $state, $q, DataServices) {
    
    // $scope.$on('$ionicView.enter', function($scope){
	// 	DataService.getHome().then(function(home)
	// 		{
	// 			$scope.posts = home; //posts liên quan đến home.html [Đây là lệnh (3)]
				
	// 		}
	// 	);
	// });
    
    var profile = Personal;
    var data = DataServices;
    console.log(data);
    $scope.confirmPost = function(caption) {
            data.push({
            id: data.length+1,
            user: {
                id: profile.id,
                name: profile.name,
                avatar: profile.avatar
            },
            caption: caption,
            img: $rootScope.picture,
            like: 0,
            comment: []
        });
    $state.go('tabsController.home');

    }

$scope.$on('$ionicView.beforeEnter', function (event, viewData) { //
    viewData.enableBack = true;									  // Use it to display the "back" button
});	

}])
            
    



