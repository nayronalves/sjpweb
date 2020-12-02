const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path');
const app = express();
const db = require("./src/app/models");


db.sequelize.sync();

var corsOptions = {
    origin: "http://localhost:8081"
};
app.use(cors(corsOptions));

// app.use(express.static('/'));

// app.set('trust proxy', 'loopback, 192.168.43.1')

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.use(express.static(__dirname + '/dist/sjpwebapp'));

// app.get('/', (req, res) => res.render('pages/index'))

// app.get('/', function(req, res) {
//     res.sendFile('/sjpwebapp/dist/sjpwebapp/index.html');
// });

// set port, listen for requests
require('./src/app/routes/associado.routes')(app);
require('./src/app/routes/booking.routes')(app);
require('./src/app/routes/address.routes')(app);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});