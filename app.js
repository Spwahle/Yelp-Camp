let express = require('express');
let app = express();

app.set('view engine', 'ejs');


app.get('/', function(req, res) {
    res.render('landing');
});

app.listen(3000, function() {
    console.log('The YelpCamp Server has started');
});