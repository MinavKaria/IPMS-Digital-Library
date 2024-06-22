import express from "express"

const app = express();
const port = 3000;

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
 console.log(`I am listening on +http://localhost:${port}`);

});

