const path = require('path');

const express = require('express');

const router = express.Router();

let usersList = [];

let availableid = 1;

router.get('/users', (req, res, next) => {
	res.render('users', {pagetitle : 'Users', users : usersList});
});

router.get('/remove', (req, res, next) => {

	let newList = usersList.map(user => {
		if(user.id !== Number(req.query.id)) {
			return user;
		}
	})

	usersList = newList.filter(function(e){ return e === 0 || e });

	res.redirect('/users');
});

router.post('/save', (req, res, next) => {
	let newUser = {};
	let body = req.body;
	let userAdded = false;

	if(userDetailsAreOkay) {
		newUser.id = availableid++;
		newUser.name = body.name;
		newUser.age = body.age;
		newUser.email = body.email;
		newUser.contact = body.contact;

		usersList.push(newUser);

		userAdded = true;
	}

	res.redirect('/users');
});

const userDetailsAreOkay = (body) => {
	return body.name && body.age && body.email && body.contact;
}

module.exports = router;