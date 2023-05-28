const express = require("express");



const bodyParser = require("body-parser");

const app = express();


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){

    var mail=req.body.email;
    var pass=req.body.password;


    res.sendFile(__dirname+"/main.html");

});

var buttonClicked ="";

app.post("/main",function(req,res){
    buttonClicked=req.body.button;

    res.sendFile(__dirname+"/checkout.html");

});

app.post("/checkout",function(req,res){
    var first_name = req.body.fname;
    var last_name = req.body.lname;
    var days = Number(req.body.days);
    var amount="";
    var car="";
    var baseprice="";
    switch(Number(buttonClicked))
    {
        case 1 : amount=100*days*24;
                car="Maruthi Suzuki Fronx"; 
                baseprice="100/hr";
                break;
        case 2 : amount=100*days*24;
                car="Mahindra Scorpio";
                baseprice="100/hr";      
                break;    
        case 3 : amount=200*days*24;
                car="Kia Seltos";
                baseprice="200/hr";
                break; 
                 
        case 4 : amount=120*days*24;
                 car="Renault Kwid";
                 baseprice="120/hr";
                break;

        case 5 : amount=90*days*24;
                car="Maruthi Suzuki Eeco"; 
                baseprice="90/hr";   
                break;

        case 6 : amount=100*days*24;    
                car="Maruthi Suzuki WagonR";
                baseprice="100/hr";
                break;

                 
    }


    res.render("price",{total:amount,car:car,days:days,baseprice:baseprice});
    
});


app.listen(3333,function(){
    console.log("Server is  running");
});