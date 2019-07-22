const express = require('express');
const app = express();

const port = process.env.BA_TEST777_NODEJS_SERVICE_PORT || 8080;
const server_ip_address = process.env.BA_TEST777_NODEJS_PORT_8080_TCP_ADDR || '127.0.0.1';


app.get('/', (req, res) => res.send('Hello World from simple NodeJS application!'));


console.log(`Server running at: ${port}`);

app.listen(port, server_ip_address, function () {
    console.log( "Listening on " + server_ip_address + ", port " + port )
});