 
 // Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configur ing express to use body-parser as middle-ware.
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
// Initialize the main project folder
app.use(cors());
app.use(express.static('website'));
const port = 5501;


// Setup Server
const server = app.listen(port, listening);

function listening(){
  //console.log("server running");
  console.log(`server is running on localhost: ${port}`);
}

//app.get('/all', function(req,res) {
  //res.send(projectData);
//});
//Post
app.post('/add',postData)
function postData(req,res){
  
  projectData = req.body;
  //console.log('req.body',req.body);
  console.log('projectData',projectData);
  res.send(projectData);
};
//Get
app.get('/get',function(req,res) {
  res.send(projectData);
  console.log(projectData);
});
