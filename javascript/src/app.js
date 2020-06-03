var helmet = require('helmet');
var compression = require('compression');
var express = require('express');
var port = 3000;
var app = express();

app.use(compression);
app.use(helmet);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async (req, res, next) => {
    //Do stuff
});

app.listen(port, () => console.log( 'Example app listening on port ${port}!', port));
module.exports = app;