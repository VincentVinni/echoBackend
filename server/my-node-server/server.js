// Import the http module
const http = require('http');

// Define the server's response for each request
const server = http.createServer((req, res) => {
  res.statusCode = 200;  // Set the response status code
  res.setHeader('Content-Type', 'text/plain');  // Set the content type
  res.end('Hello, world!\n');  // Send a response to the client
});

// Set the port the server will listen on
const PORT = 3000;

// Start the server and log the port number
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
