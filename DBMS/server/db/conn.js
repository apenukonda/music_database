const mysql = require("mysql");

const conn =mysql.createConnection({
    user:'root', 
    host:'localhost',
    password:'',
    database:'reggg',
});

conn.connect((error)=>{
    if(error) throw error;
    console.log("connected")
})