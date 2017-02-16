var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();

// You can store key-value pairs in express, here we store the port setting
app.set('port', (process.env.PORT || 8200));

// bodyParser needs to be configured for parsing JSON from HTTP body
app.use(bodyParser.json());
app.use(cors());

// Simple hello world route


// var posts = [
//         {
//             id: 0,
//             user: {
//                 id: 1,
//                 username: "dtrump",
//                 profileImageSmall: "http://core0.staticworld.net/images/article/2015/11/111915blog-donald-trump-100629006-primary.idge.jpg" 
//             },                                                 
//             image: "http://media1.fdncms.com/sacurrent/imager/u/original/2513252/donald_trump4.jpg",
//             imageThumbnail: "http://media1.fdncms.com/sacurrent/imager/u/original/2513252/donald_trump4.jpg",
//             likes: 892, 
//             caption: "Always winning #elections",
//             tags: ['elections'],         
//             comments: [
//                 {
//                     id: 0,
//                     user: {
//                         id: 2,
//                         username: "POTUS"
//                     },                    
//                     comment: "You're never going to make it don #losing",
//                     userRefs: [],
//                     tags: ["losing"]
//                 },
//                 {
//                     id: 1,
//                     user: {
//                         id: 3,
//                         username: "HillaryC"
//                     },                    
//                     comment: "Damn right @POTUS",
//                     userRefs: ["POTUS"],
//                     tags: []       
//                 },
//             ]

//         }
//     ];

// Here is the database about username and password
var users = [
    {
        id:"a9dm85",
        username: "thangho",
        password: "123456",
        name: "Jason Statham",
        profileimageSmall: "http://www.students.oamk.fi/~t5homi00/images/jason.jpg",
        image: "http://www.students.oamk.fi/~t5homi00/images/jason1.jpg",
        imageThumbnail: "",
        likes: 23,
        caption: "Prepare to watch my newest films!",
        tags: ['New films'],
        comments: []
    }
];

app.get('/', function(req, res) {
    res.send("Hello world");
});

app.post('/', function(req,res) {
    res.send("Hello!");
});
app.post('/login', function(req,res){
    console.log("test");
    console.log(req.body);


    
    var u = users.find(function(element){

        return (element.username === req.body.username) && (element.password === req.body.password);        
    });

    if(u !== undefined)
    {
        return res.json({id: u.id, username: u.username});
    }
    else
    {
        return res.sendStatus(401);
    }
});

app.get('/posts/relevant', function(req, res) {
    res.json(posts);
});

app.get('/posts/:id', function(req, res) {    
    res.json(posts[req.params.id]);
});

// start listening for incoming HTTP connections
// app.listen(app.get('port'), function() {
//     console.log('Node app is running on port', app.get('port'));
// });

app.get('/home', function (req, res) {
    res.json (getHome());
});
app.listen(8200, function() {
        console.log('Node app is running ');
    });


// return 

var getHome = function()
{
    return home;
}