const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "crud"

})
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get("/allData", (req,res) =>{
    const sqlGet = "SELECT * FROM info_db";
    db.query(sqlGet,(error,result) =>{
        res.send(result);
    });
});

app.post("/addData",(req,res) =>{
    const {name,age,gender,birthDate} = req.body;
    const sqlInsert = "INSERT INTO info_db (name,age,gender,birthDate) VALUES (?,?,?)";
    db.query(sqlInsert,[name,age,gender,birthDate])
})

app.get('/',(req,res) =>{ 
    const sqlInsert = "INSERT INTO info_db (name,age,gender,date) VALUES ('anik',23,'male','08-02-1997')"
    db.query(sqlInsert,(err,result) => {
        console.log("error",error);
        console.log("result",result);
        res.send("Hello Express");
    })
    
})

app.listen(5000,()=>{
    console.log("server is running on port 5000");
})