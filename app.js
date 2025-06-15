// Import the Express module
const express = require('express');
const figlet = require('figlet');
const app = express();
const port = 3000;

// Create and display banner
console.clear();
figlet('Hello World App', (err, data) => {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log('\x1b[36m%s\x1b[0m', data); // Cyan color
    console.log('\x1b[33m%s\x1b[0m', '=======================================');
    console.log('\x1b[32m%s\x1b[0m', 'Node.js Application Starting...');
    console.log('\x1b[33m%s\x1b[0m', '=======================================\n');
});

// Define a route for the root URL that sends "Hello, World!"
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server on port 3000
app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
});