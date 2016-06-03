var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Phones = require('../models/phones');
var router = express.Router();

router.use(bodyParser.json());

router.route('/')
.get(function(req, res, next) {
	Phones.find({}, function (err, phone) {
		if (err) throw err;
		res.json(phone);
	});
})
.post(function(req, res, next) {
	Phones.create(req.body, function (err, phone) {
        	if (err) throw err;
        	console.log('Phone created!');
        	var id = phone._id;

        	res.writeHead(200, {
            		'Content-Type': 'text/plain'
        	});
        	res.end('Added the phone with id: ' + id);
    });

})
.delete(function(req, res, next) {
	Phones.remove({}, function (err, resp) {
        	if (err) throw err;
        	res.json(resp);
    	});
})
;

router.route('/:phoneId')
.get(function(req, res, next) {
	Phones.findById(req.params.phoneId, function (err, phone) {
        	if (err) throw err;
        	res.json(phone);
    	});

})
.put(function(req, res, next) {
	Phones.findByIdAndUpdate(req.params.phoneId, {
        	$set: req.body
    	}, {
        	new: true
    	}, function (err, phone) {
        	if (err) throw err;
        	res.json(phone);
    	});
})
.delete(function(req, res, next) {
	Phones.findByIdAndRemove(req.params.phoneId, function (err, resp) {        
		if (err) throw err;
        	res.json(resp);
    	});

})
;
module.exports = router;
