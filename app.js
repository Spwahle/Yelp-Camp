let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/yelp_camp');
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');


let campgroundSchema = new mongoose.Schema({
    name: String,
    image: String
});

let Campground = mongoose.model('Campground', campgroundSchema)

// Campground.create({
//     name: 'Lake Bluth',
//     image: 'http://weknowyourdreams.com/images/camping/camping-07.jpg'

// }, function(err, campground) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('campground created');
//         console.log(campground);
//     }
// });
app.get('/', function(req, res) {
    res.render('landing');
});

app.get('/campgrounds', function(req, res) {
    Campground.find({}, function(err, allCampgrounds) {
        if (err) {
            console.log(err);
        } else {
            res.render('campgrounds', { campgrounds: allCampgrounds });
        }
    });
    // res.render('campgrounds', { campgrounds: campgrounds });
});

app.post('/campgrounds', function(req, res) {
    let name = req.body.name;
    let image = req.body.image;
    let newCampground = { name: name, image: image }
    Campground.create(newCampground, function(err, newlyCreated) {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/campgrounds');
        }
    })
})

app.get('/campgrounds/new', function(req, res) {
    res.render('new.ejs');
})

app.listen(3000, function() {
    console.log('The YelpCamp Server has started');
});

app.get('/campgrounds/:id', function(req, res) {
    res.send("this is the show page");
})