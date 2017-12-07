let express = require('express');
let app = express();
let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');


app.get('/', function(req, res) {
    res.render('landing');
});

app.get('/campgrounds', function(req, res) {
    let campgrounds = [
        { name: 'Salmon Creek', image: 'https://i.pinimg.com/736x/5b/e7/98/5be798263495d773debdd710dff79435--camping-packing-lists-camping-checklist.jpg' }, { name: 'Eastfork Lake', image: 'https://www.visitnc.com/resimg.php/imgcrop/2/52908/image/800/448/KerrCamping.jpg' }, { name: 'Lake Bluthe', image: 'http://weknowyourdreams.com/images/camping/camping-07.jpg' }
    ]

    res.render('campgrounds', { campgrounds: campgrounds });
})

app.post('/campgrounds', function(req, res) {
    res.send('you did the thing');
})

app.listen(3000, function() {
    console.log('The YelpCamp Server has started');
});