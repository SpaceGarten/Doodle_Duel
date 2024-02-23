const express = require('express');
const app = express();

const server = require('http').createServer(app);
const io = require("socket.io")(server);


// routes
app.get('/', (req, res) => {
    res.send('Node Server is running. Yay!!')
    }
);

const port = process.env.PORT || 5174;
server.listen(port, ()=> 
  console.log(`Server is running on port ${port}`));