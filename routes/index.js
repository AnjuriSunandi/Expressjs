var mysql=require('../database/db')
var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   //res.render('index', { title: 'Express' });
//   //res.send("<h1>Hello This is express developed by SUNANDI</h1>");
//   res.sendFile(path.resolve("public/timeTabel.html"))
// });

// router.get('/', function(req, res, next) {
//   //res.render('index', { title: 'Express' });
//   //res.send("<h1>Hello This is express developed by SUNANDI</h1>");
//   res.sendFile(path.resolve("public/homepage.html"))
// });

// router.get('/login', function(req, res, next) {
//   //res.render('index', { title: 'Express' });
//   //res.send("<h1>Hello This is express developed by SUNANDI</h1>");
//   res.sendFile(path.resolve("public/login.html"))
// });

// router.get('/signup', function(req, res, next) {
//   //res.render('index', { title: 'Express' });
//   //res.send("<h1>Hello This is express developed by SUNANDI</h1>");
//   res.sendFile(path.resolve("public/signup.html"))
// });

// router.get('/contactus', function(req, res, next) {
//   //res.render('index', { title: 'Express' });
//   //res.send("<h1>Hello This is express developed by SUNANDI</h1>");
//   res.sendFile(path.resolve("public/contactus.html"))
// });

// router.post('/loginsubmit', function(req, res, next) {
//   //res.render('index', { title: 'Express' });
//   //res.send("<h1>Hello This is express developed by SUNANDI</h1>");
//   var output1 = "<table border = 2px align = center bgcolor = cyan><tr><td>user name:"+req.body.username+
//                 "</td></tr>"+"<tr><td> password:"+req.body.pwd+
//                 "</td></tr>"+"<tr><td> gender:"+req.body.gender+
//                 "</td></tr>"+"<tr><td> hobbies:"+req.body.fav+
//                 "</td></tr></table>"
  
//   res.send(output1)
//});
  router.get('/ejscode', function(req, res, next) {
    res.render('index',{title:"embedded java script code"});
  });
  router.get('/fbposts', function(req, res, next) {
    var posts = [
      {title :"HBD",message:"Happy Birthday"},
      {title :"Casual",message:"Hello How are You"},
      {title :"Announcement",message:"Bahubali is releasing soon"},
      {title :"Greetings",message:"Greetings everyone"},
      {title :"Events",message:"Half Saree Event"},
    ];
    res.render('index',{title:"FaceBook posts",posts:posts});
  });

  router.post('/selectqry', function(req, res, next) {
 var Branch = req.body.Branch;  
mysql.getConnection((err, connection) => {
         if(err) throw err;
connection.query('select * from student where Branch="'+Branch+'"', (err, rows) => {
          connection.release(); 
          if(err) throw err;
          res.render('formdisplay', {rows:rows,title:"Student Details"});
          //res.send(rows);
       });
    });

  });

   router.get('/form', function(req, res, next) {
     res.sendFile(path.resolve("public/form.html"))
   });
  //res.send(req.body.username)
  //res.send(req.body.password)
  


module.exports = router;
