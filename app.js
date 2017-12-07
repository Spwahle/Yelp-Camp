let express = require('express');
let app = express();

app.set('view engine', 'ejs');


app.get('/', function(req, res) {
    res.render('landing');
});

app.get('/campgrounds', function(req, res) {
    let campgrounds = [
        { name: 'Salmon Creek', image: 'https://cdn.pixabay.com/photo/2015/07/10/17/24/night-839807_1280.jpg' }, { name: 'Eastfork', image: 'https://cdn.pixabay.com/photo/2017/11/16/09/59/camping-2953935_1280.jpg' }, { name: 'Lake Bluthe', image: 'https://cdn.pixabay.com/photo/2017/08/04/20/04/camping-2581242_1280.jpg' }
    ]

    res.render('campgrounds');
})

app.listen(3000, function() {
    console.log('The YelpCamp Server has started');
});