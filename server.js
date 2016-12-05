var express = require('express');
var app = express();
var header = {
    ipaddress: '',
    language: '',
    software: '',
}

app.get('/api/whoami', (req, res) => {
    header.ipaddress = req.headers['x-forwarded-for'];
    header.language = req.headers['accept-language'].split(';')[0];
    header.software = req.headers['user-agent'];
    res.send(header);
})

app.listen(process.env.PORT || 5000, () => {
    console.log('this app listen on ' + process.env.PORT || 5000);
});