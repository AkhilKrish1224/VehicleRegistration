const express = require("express");
const database = require('./sqlConnection');
const cors = require("cors");

var bodyparser=require('body-parser');
const app = new express();

app.use(cors());
app.use(bodyparser.json());

database.connect(function(err) {
    console.log("Connected!");
    // var sql = "CREATE TABLE vehicle_reg (vehNo VARCHAR(10), name VARCHAR(25), address VARCHAR(255))";
    // database.query(sql, function (err, result) {
    //   console.log("Table created");
    // });
  });

  app.get('/getDetails/:id',(req,res)=>{
    var id = req.params.id;
    var output= [];
    var sql = "SELECT * FROM vehicle_reg WHERE vehNo ="+ database.escape(id);
    database.query(sql, function (err, result) {
        output= Object.values(JSON.parse(JSON.stringify(result)));
          console.log(output);
          res.send(output);
        });
    
  })

  app.post('/register' ,(req,res)=>{
    var user = req.body.data;
    var sql = "INSERT INTO `user` (`name`, `email`, `password`) VALUES ("+ JSON.stringify(user.name)+","+ JSON.stringify(user.email) +","+ JSON.stringify(user.password)+");"
    database.query(sql, function (err, result) {
      console.log(result);
    })
  })

  app.post('/login' ,(req,res)=>{
    var user = req.body.data;
    console.log(user)
    var sql = "SELECT * FROM user WHERE email ="+JSON.stringify(user.email);
    database.query(sql, function (err, result) {
      var output= Object.values(JSON.parse(JSON.stringify(result)));
      console.log(err);
      if(output[0]?.password===user.password ){
        res.send({res:"Success"});
      }
      else{
        res.send({res:"Login Again"});
      }
      //console.log(result);
    })
  })
  
app.listen(5000, () => {
  console.log(`Server is up and running on 5000 ...`);
});


























// const express = require('express')
// var mysql = require('mysql');

// const app = express()
// const port = 3000

// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'node',
//     password: 'node',
//     database: 'node_project'
//   })

// connection.connect(function(err) {
  
//         console.log("DB Conn")
   
// });



//   connection.connect(function(err) {
//     console.log("Connected!");
//     var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
//     connection.query(sql, function (err, result) {
//       console.log("1 record inserted");
//     });
//   });


//   connection.connect(function(err) {
//     connection.query("SELECT * FROM customers", function (err, result, fields) {
//       console.log(result);
//     });
//   });

// app.listen(port, () => {
    
//     console.log(`Example app listening on port ${port}`)
//   })