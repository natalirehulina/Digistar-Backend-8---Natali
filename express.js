const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.get('/', (req, res) => {
console.log(req.body);
res.send('data received');
});
app.post('/', (req, res) => {
console.log(req.body);
res.send('POST request received');
});

// Middleware to parse JSON bodies
app.use(express.json());

// Route handler for GET requests to /
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Route handler for PUT requests to /
app.put('/', (req, res) => {
  // Respond with the desired JSON structure
  res.json({
    "Message": "PUT request has received",
    "Body": {
      "nama": "nata"  
    }
  });  

});

// Define a DELETE route
app.delete('/', (req, res) => {
    res.send('DELETE request received');
});

app.listen(3000, () => {
console.log('Server running at http://localhost:3000/');
});