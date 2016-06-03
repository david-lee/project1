var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// create a schema
var phoneSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	description: {
		type: String,
		required: true
	},
	image: {
		type: String,
		required: false
	}
}, {
	timestamps: true
});

var Phones = mongoose.model('Phone', phoneSchema);

module.exports = Phones;

