// Import the Express module
const express = require('express');

// Initialize an Express application
const app = express();

// Define a route for the root URL that sends "Hello, World!"
app.get('/',(req,res) => {
    res.send('Hello World !');
});

// Start the server on port 3000
const port =3000;
app.listen(port, () =>{
    console.log(`Server is running on http://localhost:${port}`);
});