
require('dotenv').config()
const mysql = require('mysql2');
const express = require("express");
const app = express();
let port = process.env.PORT || 8080;
// First we need to parse the connection string. Although we could pass
// the URL directly, that doesn't allow us to set an SSL certificate.
let options = {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PWD,
    database: process.env.MYSQL_DATABASE,
    ssl: { ca: Buffer.from(process.env.MYSQL_CA_BASE64, 'base64').toString() },
    flags: "--ssl-mode=VERIFY_IDENTITY"
};

// create the connection to database
const connection = mysql.createConnection(options);


app.get("/", function (request, response) {
    getDate()
        .then(function (words) {
            response.send(words);
        })
        .catch(function (err) {
            console.log(err);
            response.status(500).send(err);
        });
});

// Listen for a connection.
app.listen(port, '0.0.0.0', function () {
    console.log("Server is listening on port " + port);
});


function getDate(word, definition) {
    return new Promise(function (resolve, reject) {
        let queryText = "SELECT curtime();";
        connection.query(
            queryText,
            function (error, result) {
                if (error) {
                    console.log(error);
                    reject(error);
                } else {
                    resolve(result);
                }
            }
        );
    });
}
