let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/yelp_camp');
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

//creating the campground schema
let campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

//creating a campground variable for ease of use
let Campground = mongoose.model('Campground', campgroundSchema)

// Campground.create({
//     name: 'Lake Bluth',
//     image: 'http://weknowyourdreams.com/images/camping/camping-07.jpg',
//     description: 'this is a large lake, with no bathrooms and lots of room'

// }, function(err, campground) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('campground created');
//         console.log(campground);
//     }
// });


//route for intial landing page
app.get('/', function(req, res) {
    res.render('landing');
});

//route for listed campgrounds
app.get('/campgrounds', function(req, res) {
    Campground.find({}, function(err, allCampgrounds) {
        if (err) {
            console.log(err);
        } else {
            res.render('index', { campgrounds: allCampgrounds });
        }
    });
});

//camprounds and their attributes
app.post('/campgrounds', function(req, res) {
    let name = req.body.name;
    let image = req.body.image;
    let desc = req.body.description
    let newCampground = { name: name, image: image, description: desc }
    Campground.create(newCampground, function(err, newlyCreated) {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/campgrounds');
        }
    });
});
//route to get to new form
app.get('/campgrounds/new', function(req, res) {
    res.render('new.ejs');
});

//show - shows more info about one campground
app.get('/campgrounds/:id', function(req, res) {
    Campground.findById(req.params.id, function(err, foundCampground) {
        if (err) {
            console.log(err);
        } else {
            res.render("show", { campgrounds: foundCampground });
        }
    });
});

//server run confirmation
app.listen(3000, function() {
    console.log('The YelpCamp Server has started');
});