/* jslint esversion:6 */

const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const app = express();

const user = process.env.USER;
const pass = process.env.PASS;

if (user && pass) {
    app.use(express.basicAuth(user, pass));
}

app.use(morgan(
    'combined', {
        immediate: true
    }));

app.use(compression({
    threshold: 0,
    level: 9,
    memLevel: 9
}));
app.use(express.static(__dirname + '/public'));
app.listen(process.env.PORT || 3000, function() {
    console.log('Server listening on port  %s', this.address().port);
});