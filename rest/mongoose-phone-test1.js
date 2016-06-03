var mongoose = require('mongoose'),
    assert = require('assert');

var Phones = require('./models/phones');

// Connection URL
var url = 'mongodb://localhost:27017/rogers';
mongoose.connect(url);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
	// we're connected!
	console.log("Connected correctly to server");

	// create a new user
	var newPhone = Phones({
		name: 'Samsung Galaxy 7',
		description: 'Newest Galaxy Phone'
		});

	// save the user
	newPhone.save(function (err) {
		if (err) throw err;
		console.log('Phone created!');
		// get all the users
		Phones.find({}, function (err, phones) {
			if (err) throw err;
			console.log(phones);
			db.close();
		});
	});
});
    
