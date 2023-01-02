const express = require("express");
const database = require('./sqlConnection');
const cors = require("cors");

const app = express();
app.use(cors());

database.connect(function(err) {
    console.log("Connected!");
    // var sql = "CREATE TABLE vehicle_reg (name VARCHAR(255), address VARCHAR(255))";
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