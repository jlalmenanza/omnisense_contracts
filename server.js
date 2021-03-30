
var express = require('express')
const config = require('./config/environment');
const compression = require('compression');
const https = require('https');
const fs = require('fs');

config.setEnvironmentVariables();
config.showEnvironmentMode();


const app = express();
app.use(compression());


https.createServer({
    key: fs.readFileSync('./certificates/www_omnisense_trends_com_ph.key'),
    cert: fs.readFileSync('./certificates/www_omnisense_trends_com_ph.crt'),
    ca: [
        fs.readFileSync('./certificates/www_omnisense_trends_com_ph_ca.crt')
      ]
}, app).listen(process.env.SERVER_PORT, () => {
    config.showServerPort();
    console.log('Listening HTTPS...')
});

