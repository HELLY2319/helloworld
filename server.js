/********************************************************************************* *  WEB322 – Assignment 1 
*	I declare that this assignment is my own work in accordance with Seneca  Academic Policy.   
*	No part of this assignment has been copied manually or electronically from any other source 
*	(including web sites) or distributed to other students. 
*  
*	Name: ______helly patel________________ Student ID: ___175295211___________ Date: _5-12-23_______________ 
* 
Online (Cyclic) URL: _________________________________________
https://calm-blue-greyhound-ring.cyclic.app
*	______________________________________________________ 
* 
********************************************************************************/  

var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    res.send("Name :-Helly patel !\n student id :- 175295211 \n student mail :- hpatel347@myseneca.ca \n ");
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);
