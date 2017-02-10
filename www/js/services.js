angular.module('app.services', [])

.factory('BlankFactory', [function($http, $q, $localstorage, SERVER){

}])

.factory('DataService', ['$http', '$q', function($http, $q){
    var home = [];
    return {
        getHome: function() //Mình thích thì mình đặt thôi! Liên quan đến homeCtrl!
        {
            return $q(function(resolve, reject){
                $http.get("https://fake-instagram.herokuapp.com/home").then(function(response){
                    home = response.data;
                    resolve(home);
                    console.log(home);
                },function(err){
                    console.log("Connection Failed!");
                    reject();
                });
            });
        }
    }
}])

.factory('DataServices', [function(){

return [
    { //bai post dau tien gom 2 comment cua user 2 va 3
        id: 0,
        user:{
            id: 1,
            name: "Pham Huong",
            avatar: "img/img1.jpg"
        },
        img: "img/img2.jpg",
        like: 3,
        caption: "Stay classy",
        comment:[
            {
                id: 0,
                user:{
                    id: 2,
                    name: "Boe Nguyen",
                    avatar: "img/img7.jpg"
                },
                content: "corn cake dm ml ccc"
            },
            {
                id: 1,
                user:{
                    id: 3,
                    name: "Smith Wesley",
                    avatar: "img/img5.jpg"
                },
                content: "Doe moe"
            }
        ]
    },
    //bai post thu hai gom 1 comment cua user 4

     {
         id: 1,
         user:{
             id: 2,
             name: "Boe Nguyen",
             avatar: "img/img7.jpg"
         },
         img: "img/img3.jpg",
         like: 8,
         caption: "Words cannot express my love & passion",
         comment:[
             {
                 id: 0,
                 user:{
                     id: 4,
                     name: "Thang Ho",
                     avatar: "img/img6.jpg"
                 },
                 content: "SML moe chuminga"
             }
         ]
     },
      //bai post thu ba gom 2 comment cua user 1 va 5
     {
         id: 2,
         user:{
             id: 3,
             name: "Smith Wesley",
             avatar: "img/img5.jpg"
         },
         img: "img/img8.jpg",
         like: 2,
         caption: "You’re cute, can I have you?",
         comment:[
             {
                 id: 0,
                 user:{
                     id: 1,
                     name: "Pham Huong",
                     avatar: "img/img1.jpg"
                 },
                 content:"Oh, Bonny not gonna like this"
             },
             {
                 id: 1,
                 user:{
                     id: 5,
                     name: "Jane Ionic",
                     avatar: "img/img9.jpg"
                 },
                 content: "Oops"
             }
         ]
     },
      //bai post thu tu gom 0 comment 
     {
         id: 3,
         user:{
             id: 4,
             name: "Thangg Ho",
             avatar: "img/img6.jpg"
         },
         img: "img/img10.jpg",
         like: 9,
         caption: "Today I have a good memory",
         comment:[]
         
     }

    
    ];

}])


.factory('Personal', [function(){
    var info = {
        id:1,
        avatar: "img/img1.jpg",
        name: "Pham Huong",
        website: "",
        bio: "So I just started Instagram. But be warned! I will take pictures of funny and maybe disturbing contents of things. Follow me if you dare! Or you can just follow me to make me feel cool",
        email: "boe.pham@bee.com",
        mobile: "013583644",
        posts: "2",
        followers: "77",
        following: "235"
    }
    return info;
}])


.factory('allPerson', function(){

return [
    {
    id: 0,
    name: "Angela Huynh",
    avatar: "img/img8.jpg",
    bio:"Bao gio lay chong moe",
    posts: "2",
    followers: "12",
    following: "22",
    uploadPost: {
        img1:"img/img10.jpg",
        img2:"img/img8.jpg" }
    },
{
    id: 1,
    name: "Sam Smith",
    avatar: "img/img7.jpg",
    bio: "I didn’t choose the thug life, the thug life chose me",
    posts: "2",
    followers: "12",
    following: "22",
    uploadPost: {
        img1:"img/img10.jpg",
        img2:"img/img8.jpg"
    }
    },

{
    id: 2,
    name: "Boe Pham",
    avatar: "img/img7.jpg",
    bio:"I’m truly a monster cupcake. Anxious about thrill rides and dry ice",
    posts: "2",
    followers: "99",
    following: "2000",
    uploadPost: {
        img1:"img/img10.jpg",
        img2:"img/img8.jpg"
    }
},
{
    id: 3,
    name: "Thang Ho",
    avatar: "img/img6.jpg",
    bio:"I’m truly a monster cupcake. Anxious about thrill rides and dry ice",
    posts: "2",
    followers: "55",
    following: "88",
    uploadPost: {
        img1:"img/img10.jpg",
        img2:"img/img8.jpg"
    }
},
{
    id: 4,
    name: "Jane Ionic",
    avatar: "img/img7.jpg",
    bio:"I’m truly a monster cupcake. Anxious about thrill rides and dry ice",
    posts: "1",
    followers: "492",
    following: "224",
    uploadPost: {
        img1:"img/img10.jpg"
    }
}
];

})

.service('BlankService', [function(){

}])