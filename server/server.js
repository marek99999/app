const express = require('express');
const app = express();

const port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
const server_ip_address = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';


app.get('/', (req, res) => res.send('Hello World 2 from simple NodeJS application!'));


console.log(`Server running at: ${port}`);

app.listen(port, server_ip_address, function () {
    console.log( "Listening on " + server_ip_address + ", port " + port )
});